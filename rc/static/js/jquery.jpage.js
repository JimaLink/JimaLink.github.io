/**
   * jpage for  jQuery分页插件
   * 功能：
   * 1.指定页数内静态分页
   * 2.超过指定页数后ajax请求下一组静态分页
   * 3.支持cookie记录当前页码和分组大小
   * 4.支持浏览器前进后退
   * 5.搜索引擎抓取
   * @author 陈健
   * @version 3.0
   * @date 2015-06-25
   * @param config 插件配置
   */
(function(){
	var i18n = {
		'zh-cn' : {
			noRecord: '没有检索到任何记录！',
			error: '请求失败或超时，请稍后再试！'
		},
		'zh-tw' : {
			noRecord: '沒有檢索到任何記錄！',
			error: '請求失敗或超時，請稍後再試！'
		}
	}
	$(document).ready(function(){
		function getLang(langType) {
			return i18n[langType];
		}

		jQuery.fn.jpage = function(config){
			var canPushState = Boolean(window.history.pushState);//是否支持pushState
			var containerId = this.attr("id");

			init("#"+containerId,config);//初始化

			/**
			 * 初始化，主程序
			 * @param t 容器的ID，带#号
			 * @param config 插件配置
			 */
			function init(t,config){
				//公有变量
				if(!t)
					return;
				var initStore = config.dataStore;			//初始数据
				var xmlStore = $(createXMLDocument(initStore));
				var dataStore = new Array();
				xmlStore.find('record').each(
					function(){
						dataStore.push($(this).text());
					}
				);

				var lang = typeof zh_choose != 'undefined' && zh_choose == 't' ? getLang('zh-tw') : getLang('zh-cn');

				var openCookies = config.openCookies != null ? config.openCookies : true;
				var configPage = config.perPage > 0 ? config.perPage : 10;
				var perPage = !openCookies || $.cookie(t+"_perPage") == null ? configPage : parseInt($.cookie(t+"_perPage"));	//每页显示记录数
				var totalRecord = config.totalRecord;																			//总记录数
				if(totalRecord==undefined)
					totalRecord = 0;
				else{
					totalRecord = config.totalRecord > 0 ? config.totalRecord : 0;
					if(totalRecord == 0){
						$(t).css("text-align","center");
						$(t).css("line-height","50px");
						$(t).html(lang.noRecord);
						return;
					}
				}
				var proxyUrl = config.proxyUrl != null ? config.proxyUrl : 'dataproxy.jsp';									//数据代理地址
				var groupSize = config.groupSize != null ? config.groupSize : 1;											//组大小
				var barPosition = config.barPosition == null || config.barPosition == ""? 'bottom' : config.barPosition;	//工具条位置
				var ajaxParam = config.ajaxParam;
				//ajax的请求参数
				var searchstart = config.ajaxParam.searchstart;
				var showMode = config.showMode == null || config.showMode == '' ? 'full' : config.showMode;					//显示模式
				var allowChangePerPage = config.allowChangePerPage == null || config.allowChangePerPage ? true : false;		//是否允许切换每页显示数
				var themeName = config.themeName == null || config.themeName == '' ? 'default' : config.themeName;			//主题名称
				var dataBefore = config.dataBefore == null ? '' : config.dataBefore;
				var dataAfter = config.dataAfter == null ? '' : config.dataAfter;
				var callBack = config.callBack == null ? function(){} : config.callBack;

				//私有变量
				var totalPage = Math.ceil(totalRecord/perPage);																//总页数
				var currentPage = !openCookies || $.cookie(t+"_currentPage") == null ? 1 : parseInt($.cookie(t+"_currentPage"));//当前页码
				var uid = getUrlParam('uid');
				if (uid == containerId) {
					currentPage = parseInt(getUrlParam('pageNum'));
				}
				if(currentPage>totalPage){
					currentPage=totalPage;
				}
				if(searchstart*1==1){
					currentPage = 1;
				}
				var startRecord;																							//每页起始记录，相对于当前组
				var endRecord;	 																							//每页结束记录，相对于当前组
				var gpStartPage;																							//组开始页
				var gpEndPage;																								//组结束页
				var gpStartRecord = 1;																						//组开始记录
				var gpEndRecord = perPage * groupSize;

				//数据容器
				var container = '<div class="'+themeName+'_pgContainer"></div>';

				//添加工具条
				var toolbar = '<table width="100%" border="0" cellpadding="0" cellspacing="0" class="'+themeName+'_pgToolbar"><tr><td>';
				if(themeName == 'lucidity_En'){
					toolbar += '<table width="100%" border="0" cellspadding="0" cellspacing="0" class="'+themeName+'_pgPanel"><tr>';
				}else{
					toolbar += '<table border="0" cellspadding="0" cellspacing="0" class="'+themeName+'_pgPanel"><tr>';
				}
				if(themeName == 'lucidity'){
					formatToolbarForLucidity();
				}else if(themeName == 'lucidity_En'){
					formatToolbarForLucidityEn();
				}else{
					formatToolbar()
				}

				//扁平（英文版）
				function formatToolbarForLucidityEn() {
					toolbar += '<td valign="middle"><a class="'+themeName+'_pgBtn '+themeName+'_pgFirst" title="first">first</a></td>';
					toolbar += '<td valign="middle"><a class="'+themeName+'_pgBtn '+themeName+'_pgPrev" title="prev">prev</a></td>';
					toolbar += '<td valign="middle"><div class="'+themeName+'-ui-paging-container"></div></td>';
					toolbar += '<td valign="middle"><a class="'+themeName+'_pgBtn '+themeName+'_pgNext" title="next">next</a></td>';
					toolbar += '<td valign="middle"><a class="'+themeName+'_pgBtn '+themeName+'_pgLast" title="last">last</a></td>';
					if(groupSize){
						toolbar += '<td valign="middle"><div class="'+themeName+'_separator"></div></td>';
						toolbar += '<td valign="middle"><div class="'+themeName+'_pgBtn '+themeName+'_pgRefresh" title="refresh">refresh</div></td>';
					}
					if(showMode == 'full'){
						toolbar += '<td valign="middle" width="10" align="left"><div class="'+themeName+'_separator"></div></td>';
						toolbar += '<td valign="middle">total:<span class="'+themeName+'_pgTotalPage">' + totalPage + '</span></td>';
					}else if(showMode == 'normal'){
						toolbar += '<td valign="middle"><div class="'+themeName+'_separator"></div></td>';
						toolbar += '<td valign="middle"> <input class="'+themeName+'_pgCurrentPage" type="text" value="' + currentPage + '" title="Page number" /> /  <span class="'+themeName+'_pgTotalPage">' + totalPage + '</span> page</td>';
					}
				}

				function formatToolbarForLucidity() {
					toolbar += '<td valign="middle"><a class="'+themeName+'_pgBtn '+themeName+'_pgFirst" title="首页">首 页</a></td>';
					toolbar += '<td valign="middle"><a class="'+themeName+'_pgBtn '+themeName+'_pgPrev" title="上一页">上一页</a></td>';
					toolbar += '<td valign="middle"><div class="'+themeName+'-ui-paging-container"></div></td>';
					toolbar += '<td valign="middle"><a class="'+themeName+'_pgBtn '+themeName+'_pgNext" title="下一页">下一页</a></td>';
					toolbar += '<td valign="middle"><a class="'+themeName+'_pgBtn '+themeName+'_pgLast" title="尾页">尾 页</a></td>';
					if(groupSize){
						toolbar += '<td valign="middle"><div class="'+themeName+'_separator"></div></td>';
						toolbar += '<td valign="middle"><div class="'+themeName+'_pgBtn '+themeName+'_pgRefresh" title="刷新">刷 新</div></td>';
					}
					toolbar += '<td valign="middle" class="">&nbsp;&nbsp;共 <span>' + totalRecord + '</span> 条</td>';
					if(showMode == 'full'){
						toolbar += '<td valign="middle" width="10" align="left"><div class="'+themeName+'_separator"></div></td>';
						toolbar += '<td valign="middle">第 <input class="'+themeName+'_pgCurrentPage" type="text" value="' + currentPage + '" title="页码" /> 页 / 共 <span class="'+themeName+'_pgTotalPage">' + totalPage + '</span> 页</td>';
					}else if(showMode == 'normal'){
						toolbar += '<td valign="middle"><div class="'+themeName+'_separator"></div></td>';
						toolbar += '<td valign="middle"> <input class="'+themeName+'_pgCurrentPage" type="text" value="' + currentPage + '" title="页码" /> /  <span class="'+themeName+'_pgTotalPage">' + totalPage + '</span> 页</td>';
					}
				}

				function formatToolbar() {
					/*if(showMode == 'full' && allowChangePerPage){
                        toolbar += '<td valign="middle"><select class="'+themeName+'_pgPerPage" title="每页显示条数">';
                        if(config.perPage>0)
                            toolbar += '<option value="'+config.perPage+'">'+config.perPage+'</option>';
                        toolbar += '<option value="5">5</option>';
                        toolbar += '<option value="10">10</option>';
                        toolbar += '<option value="15">15</option>';
                        toolbar += '<option value="20">20</option>';
                        toolbar += '<option value="25">25</option>';
                        toolbar += '<option value="40">40</option>';
                        toolbar += '</select>&nbsp;</td>';
                        toolbar += '<td valign="middle"><div class="'+themeName+'_separator"></div></td>';
                    }*/
					toolbar += '<td valign="middle"><a class="'+themeName+'_pgBtn '+themeName+'_pgFirst" title="首页"></a></td>';
					toolbar += '<td valign="middle"><a class="'+themeName+'_pgBtn '+themeName+'_pgPrev" title="上页"></a></td>';
					if(showMode == 'full'){
						toolbar += '<td valign="middle" width="10" align="left"><div class="'+themeName+'_separator"></div></td>';
						toolbar += '<td valign="middle">第 <input class="'+themeName+'_pgCurrentPage" type="text" value="' + currentPage + '" title="页码" /> 页 / 共 <span class="'+themeName+'_pgTotalPage">' + totalPage + '</span> 页</td>';
						toolbar += '<td valign="middle" width="10" align="right"><div class="'+themeName+'_separator"></div></td>';
					}else if(showMode == 'normal'){
						toolbar += '<td valign="middle"><div class="'+themeName+'_separator"></div></td>';
						toolbar += '<td valign="middle"> <input class="'+themeName+'_pgCurrentPage" type="text" value="' + currentPage + '" title="页码" /> /  <span class="'+themeName+'_pgTotalPage">' + totalPage + '</span> 页</td>';
						toolbar += '<td valign="middle"><div class="'+themeName+'_separator"></div></td>';
					}
					toolbar += '<td valign="middle"><a class="'+themeName+'_pgBtn '+themeName+'_pgNext" title="下页"></a></td>';
					toolbar += '<td valign="middle"><a class="'+themeName+'_pgBtn '+themeName+'_pgLast" title="尾页"></a></td>';
					if(groupSize){
						toolbar += '<td valign="middle"><div class="'+themeName+'_separator"></div></td>';
						toolbar += '<td valign="middle"><div class="'+themeName+'_pgBtn '+themeName+'_pgRefresh" title="刷新"></div></td>';
					}
					if(showMode == 'full'){
						toolbar += '<td valign="middle" width="10" align="left"><div class="'+themeName+'_separator"></div></td>';
						toolbar += '<td valign="middle" class="'+themeName+'_pgSearchInfo">检索到&nbsp;<span class="'+themeName+'_pgTotalRecord">' + totalRecord + '</span>&nbsp;条记录，显示第&nbsp;<span class="'+themeName+'_pgStartRecord">' + startRecord + '</span>&nbsp;条&nbsp;-&nbsp;第&nbsp;<span class="'+themeName+'_pgEndRecord">' + endRecord + '</span>&nbsp;条记录</td>';
					}
				}

				toolbar += '</tr></table>';
				toolbar += '</td></tr></table>';

				if(configPage<totalRecord) {
					switch(barPosition){
						case 'top':
							$(t).html(toolbar+container);
							break;
						case 'bottom':
							$(t).html(container+toolbar);
							break;
						default:
							$(t).html(toolbar+container+toolbar);
					}
				} else {
					$(t).html(container);
				}

				formatTool();

				$(t).on('click', 'li.ui-pager', function (e) {
					if ($(this).hasClass('ui-pager-disabled') || $(this).hasClass('focus')) {
						return false;
					}
					if ($(this).data('page')) {
						currentPage = parseInt($(this).data('page'));
					}
					go();
				});

				function formatTool() {
					if(themeName == 'lucidity' || themeName == 'lucidity_En'){
						var editTool = $(t + " ."+ themeName + '-ui-paging-container');
						var html = '<ul>';
						var ellipseTpl = "...";
						if (totalPage > 6) {
							html += '<li data-page="1" class="ui-pager">1</li>';
							if (currentPage <= 2) {
								html += '<li data-page="2" class="ui-pager">2</li>';
								html += '<li data-page="3" class="ui-pager">3</li>';
								html += '<li class="ui-paging-ellipse">' + ellipseTpl + '</li>';
							} else
							if (currentPage > 2 && currentPage <= totalPage - 2) {
								if (currentPage > 3) {
									html += '<li class="ui-paging-ellipse">' + ellipseTpl + '</li>';
								}
								html += '<li data-page="' + (currentPage - 1) + '" class="ui-pager">' + (currentPage - 1) + '</li>';
								html += '<li data-page="' + currentPage + '" class="ui-pager">' + currentPage + '</li>';
								html += '<li data-page="' + (currentPage + 1) + '" class="ui-pager">' + (currentPage + 1) + '</li>';
								if (currentPage < totalPage - 2) {
									html += '<li class="ui-paging-ellipse">' + ellipseTpl + '</li>';
								}
							} else {
								html += '<li class="ui-paging-ellipse" >' + ellipseTpl + '</li>';
								for (var i = totalPage - 2; i < totalPage; i++) {
									html += '<li data-page="' + i + '" class="ui-pager">' + i + '</li>'
								}
							}
							html += '<li data-page="' + totalPage + '" class="ui-pager">' + totalPage + '</li>';
						} else {
							for (var i = 1; i <= totalPage; i++) {
								html += '<li data-page="' + i + '" class="ui-pager">' + i + '</li>'
							}
						}
						html += '</ul>';
						editTool.html(html);
						editTool.find('li[data-page="' + currentPage + '"]').addClass('focus').siblings().removeClass('focus');
					}
					/*else if(themeName == 'lucidity_En'){
                        var editTool = $(t + " ."+ themeName + '-ui-paging-container');
                        var html = '<ul>';
                        var start = currentPage;
                        if(totalPage - start < 9){
                            start = totalPage - 9;
                        }
                        if(start <= 0){
                            start = 1;
                        }
                        var end = start + 9;
                        for (var i = start; i <= totalPage && i <= end; i++) {
                            html += '<li data-page="' + i + '" class="ui-pager">' + i + '</li>'
                        }

                        html += '</ul>';
                        editTool.html(html);
                        editTool.find('li[data-page="' + currentPage + '"]').addClass('focus').siblings().removeClass('focus');
                    }*/
				}

				function go(p) {
					currentPage = p || currentPage;
					currentPage = Math.max(1, currentPage);
					currentPage = Math.min(currentPage, totalPage);

					if(!dataStore || gpStartPage > currentPage || (gpEndPage > 0 && gpEndPage < currentPage)){
						getGroupStartEnd();
						getStartEnd();
						getRemoteData();
					}else{
						getStartEnd();
						loadData();
						refresh();
					}
					formatTool();
					var hashParams = {uid: containerId};
					hashParams.pageNum = currentPage;
					pushState(hashParams);
					modifyBtnLink(hashParams);
				}

				var btnRefresh = $(t+" ."+themeName+"_pgRefresh");															//刷新按钮
				var btnNext =$(t+" ."+themeName+"_pgNext");																	//下一页按钮
				var btnPrev = $(t+" ."+themeName+"_pgPrev");																//上一页按钮
				var btnFirst = $(t+" ."+themeName+"_pgFirst");																//首页按钮
				var btnLast = $(t+" ."+themeName+"_pgLast");																//末页按钮
				var btnGo = $(t+" ."+themeName+"_pgNext,"+t+" ."+themeName+"_pgLast");
				var btnBack = $(t+" ."+themeName+"_pgPrev,"+t+" ."+themeName+"_pgFirst");
				var btn = $(t+" ."+themeName+"_pgFirst,"+t+" ."+themeName+"_pgPrev,"+t+" ."+themeName+"_pgNext,"+t+" ."+themeName+"_pgLast");
				var mask;

				var valCurrentPage = $(t+" ."+themeName+"_pgCurrentPage");
				var valStartRecord = $(t+" ."+themeName+"_pgStartRecord");
				var valEndRecord =$(t+" ."+themeName+"_pgEndRecord");
				var valContainer = $(t+" ."+themeName+"_pgContainer");
				var valPerPage = $(t+" ."+themeName+"_pgPerPage");
				var valTotalPage = $(t+" ."+themeName+"_pgTotalPage");

				$(t+" ."+themeName+"_pgPerPage").attr("value",perPage);
				getGroupStartEnd();
				getStartEnd();
				if(dataStore==null || dataStore.length == 0 || perPage!=configPage || currentPage>groupSize)
					getRemoteData();
				else{
					getStartEnd();
					loadData();
					refresh();
				}

				//浏览器前进后退
				function browserChangePage() {
					uid = getUrlParam('uid');

					var targetPage;
					if (uid == containerId) {
						targetPage = parseInt(getUrlParam('pageNum'));
					} else {
						targetPage = 1;
					}

					if(!dataStore || (targetPage > currentPage && currentPage == gpEndPage) || (targetPage < currentPage && currentPage == gpStartPage)){
						currentPage = targetPage;

						getGroupStartEnd();
						getStartEnd();
						getRemoteData();
					}else{
						currentPage = targetPage;

						getStartEnd();
						loadData();
						refresh();
					}
				}

				if (canPushState) {//HTML5支持pushSate
					window.addEventListener('popstate', browserChangePage);
				} else {
					window.onhashchange = browserChangePage;
				}

				//刷新按钮监听
				btnRefresh.bind("mousedown",pressHandler).bind("mouseup",unpressHandler).bind("mouseout",unpressHandler);

				//按钮链接
				modifyBtnLink({
					uid: containerId,
					pageNum: currentPage
				});

				//刷新工具栏
				refresh();

				//按钮监听
				btn.click(
					function() {
						if ($(this).is('[disabled]')) {
							return false;
						}

						btn.removeAttr('href');
					}
				);

				btnNext.click(
					function(){
						if(currentPage < totalPage){
							if(!dataStore || currentPage == gpEndPage){
								currentPage += 1;
								getGroupStartEnd();
								getStartEnd();
								getRemoteData();
							}else{
								currentPage += 1;
								getStartEnd();
								loadData();
								refresh();
							}
						}
						formatTool();
						var hashParams = {uid: containerId};
						hashParams.pageNum = currentPage;
						pushState(hashParams);
						modifyBtnLink(hashParams);
						return false;
					}
				);
				btnPrev.click(
					function(){
						if(currentPage > 1){
							if(!dataStore || currentPage == gpStartPage){
								currentPage -= 1;
								getGroupStartEnd();
								getStartEnd();
								getRemoteData();
							}else{
								currentPage -= 1;
								getStartEnd();
								loadData();
								refresh();
							}
						}
						formatTool();
						var hashParams = {uid: containerId};
						hashParams.pageNum = currentPage;
						pushState(hashParams);
						modifyBtnLink(hashParams);
						return false;
					}
				);
				btnFirst.click(
					function(){
						if(!dataStore || currentPage > 1){
							if(gpStartPage > 1){
								currentPage = 1;
								getGroupStartEnd();
								getStartEnd();
								getRemoteData();
							}else{
								currentPage = 1;
								getStartEnd();
								loadData();
								refresh();
							}
						}
						formatTool();
						var hashParams = {uid: containerId};
						hashParams.pageNum = currentPage;
						pushState(hashParams);
						modifyBtnLink(hashParams);
						return false;
					}
				);
				btnLast.click(
					function(){
						if(!dataStore || currentPage < totalPage){
							if(gpEndPage > 0 && gpEndPage < totalPage){
								currentPage = totalPage;
								getGroupStartEnd();
								getStartEnd();
								getRemoteData();
							}else{
								currentPage = totalPage;
								getStartEnd();
								loadData();
								refresh();
							}
						}
						formatTool();
						var hashParams = {uid: containerId};
						hashParams.pageNum = currentPage;
						pushState(hashParams);
						modifyBtnLink(hashParams);
						return false;
					}
				);
				btnRefresh.click(
					function(){
						getGroupStartEnd();
						getStartEnd();
						getRemoteData();
						formatTool();
					}
				);

				//页码输入框监听
				valCurrentPage.keydown(
					function(event){
						var targetPage = parseInt($(this).val());
						if(event.keyCode==13 && targetPage>=1 && targetPage<=totalPage){
							if(!dataStore || gpStartPage > targetPage || (gpEndPage > 0 && gpEndPage < targetPage)){
								currentPage = targetPage;
								getGroupStartEnd();
								getStartEnd();
								getRemoteData();
							}else{
								currentPage = targetPage;
								getStartEnd();
								loadData();
								refresh();
							}
						}
						formatTool();
						var hashParams = {uid: containerId};
						hashParams.pageNum = currentPage;
						pushState(hashParams);
						modifyBtnLink(hashParams);
					}
				);

				valPerPage.change(
					function(){
						valPerPage.val($(this).val());
						perPage = parseInt($(this).val());
						currentPage = 1;
						totalPage = Math.ceil(totalRecord/perPage);
						if(groupSize){
							getGroupStartEnd();
							getStartEnd();
							getRemoteData();
						}else{
							getStartEnd();
							loadData();
							refresh();
						}
					}
				);

				if (typeof zh_choose != 'undefined' && zh_choose == 't') {//转繁体
					zh_tran('t');
				}

				/*********************************init私有函数***************************************************/
				/**
				 * 置为正在检索状态
				 */
				function startLoad(){
					$(t).addClass(themeName+"_container");
					mask = document.createElement('div');
					$(mask).addClass(themeName+"_mask");
					$(mask).css("height",$(t).height());
					$(t).append(mask);
					$(t+" ."+themeName+"_pgRefresh").addClass(themeName+"_pgLoad");
				}

				/**
				 * 置为结束检索状态
				 */
				function overLoad(){
					$(t+" ."+themeName+"_pgRefresh").removeClass(themeName+"_pgLoad");
					$(t+" ."+themeName+"_pgTotalRecord").text(totalRecord);
					$(t+" ."+themeName+"_pgStartRecord").text(startRecord+gpStartRecord-1);
					$(t+" ."+themeName+"_pgEndRecord").text(endRecord+gpStartRecord-1);
					$(mask).remove();
					$(t).removeClass(themeName+"_container");
					valStartRecord = $(t+" ."+themeName+"_pgStartRecord");
					valEndRecord =$(t+" ."+themeName+"_pgEndRecord");
				}

				/**
				 * 获得远程数据
				 */
				function getRemoteData(){
					startLoad();
					$.ajax(
						{
							type: "POST",
							url: proxyUrl + "?startrecord="+gpStartRecord+"&endrecord="+gpEndRecord+"&perpage="+perPage,
							cache: false,
							data: ajaxParam,
							dataType: "xml",
							timeout: 30000,
							success: function(xml){
								xmlStore = $(xml);
								totalRecord = xmlStore.find('totalrecord').text();
								totalPage = xmlStore.find('totalpage').text();
								dataStore = null;
								dataStore = new Array();
								xmlStore.find('record').each(
									function(){
										dataStore.push($(this).text());
									}
								);

								if(totalRecord==0)
									$('.'+themeName+'_pgToolbar').remove();
								getStartEnd();
								loadData();
								refresh();
								overLoad();
							},
							error: function(){
								alert(lang.error);
								overLoad();
								return;
							}
						}
					);
				}

				/**
				 * 获得当前页开始结束记录
				 */
				function getStartEnd(){
					if(groupSize){
						startRecord = (currentPage-1)*perPage+1 - gpStartRecord + 1;
						endRecord = Math.min(currentPage*perPage,totalRecord) - gpStartRecord + 1;
					}else{
						startRecord = (currentPage-1)*perPage+1;
						endRecord = Math.min(currentPage*perPage,totalRecord);
					}
				}

				/**
				 * 获得当前组开始结束页码
				 */
				function getGroupStartEnd(){
					if(groupSize==null){
						return;
					}
					var groupId = groupSize > 0 ? Math.ceil(currentPage/groupSize) : 0;
					gpStartPage = (groupId-1)*groupSize+1;
					if(totalRecord > 0){
						gpEndPage = Math.min(groupId*groupSize,totalPage);
					}

					gpStartRecord = (gpStartPage-1)*perPage+1;
					if(totalRecord > 0){
						gpEndRecord = Math.min(gpEndPage*perPage,totalRecord);
					}
				}

				/**
				 * 刷新数据容器
				 */
				function loadData(){
					if(dataStore==null||dataStore.length==0){
						valContainer.css("text-align","left");
						valContainer.css("line-height","22px");
						valContainer.html(lang.noRecord);
						return;
					}

					var view = "";
					for(var i=startRecord-1;i<=endRecord-1 && i < dataStore.length;i++){
						view += dataStore[i].replace("{id}",gpStartRecord+i);
					}
					valContainer.html(dataBefore + view + dataAfter);

					//翻页回调函数
					callBack();
				}

				/**
				 * 刷新工具栏状态
				 */
				function refresh(){
					if(openCookies){
						//当前页码写入cookie
						$.cookie(t+'_currentPage', currentPage);
						$.cookie(t+'_perPage', perPage);
					}

					valCurrentPage.val(currentPage);
					valStartRecord.html(startRecord+gpStartRecord-1);
					valEndRecord.html(endRecord+gpStartRecord-1);
					valTotalPage.html(totalPage);

					//刷新工具栏
					formatTool();

					btn.unbind("mousedown",pressHandler);
					btn.bind("mouseup",unpressHandler);
					btn.bind("mouseout",unpressHandler);

					if(currentPage == 1 && currentPage != totalPage){
						enabled();
						btnGo.bind("mousedown",pressHandler);
						btnPrev.addClass(themeName+"_pgPrevDisabled").attr('disabled', 'disabled');
						btnFirst.addClass(themeName+"_pgFirstDisabled").attr('disabled', 'disabled');
					}else if(currentPage != 1 && currentPage == totalPage){
						enabled();
						btnBack.bind("mousedown",pressHandler);
						btnNext.addClass(themeName+"_pgNextDisabled").attr('disabled', 'disabled');
						btnLast.addClass(themeName+"_pgLastDisabled").attr('disabled', 'disabled');
					}else if(currentPage == 1 && currentPage == totalPage){
						disabled();
					}else{
						enabled();
						btnBack.bind("mousedown",pressHandler);
						btnGo.bind("mousedown",pressHandler);
						btnNext.addClass(themeName+"_pgNext");
						btnPrev.addClass(themeName+"_pgPrev");
						btnFirst.addClass(themeName+"_pgFirst");
						btnLast.addClass(themeName+"_pgLast");
					}
				}

				/**
				 * 移除按钮disabled状态样式
				 */
				function enabled(){
					btnNext.removeClass(themeName+"_pgNextDisabled").removeAttr('disabled');
					btnPrev.removeClass(themeName+"_pgPrevDisabled").removeAttr('disabled');
					btnFirst.removeClass(themeName+"_pgFirstDisabled").removeAttr('disabled');
					btnLast.removeClass(themeName+"_pgLastDisabled").removeAttr('disabled');
				}

				/**
				 * 添加按钮disabled状态样式
				 */
				function disabled(){
					btnNext.addClass(themeName+"_pgNextDisabled").attr('disabled', 'disabled');
					btnPrev.addClass(themeName+"_pgPrevDisabled").attr('disabled', 'disabled');
					btnFirst.addClass(themeName+"_pgFirstDisabled").attr('disabled', 'disabled');
					btnLast.addClass(themeName+"_pgLastDisabled").attr('disabled', 'disabled');
				}

				/**
				 * 添加按钮按下状态样式
				 */
				function pressHandler(){
					$(this).addClass(themeName+"_pgPress");
				}

				/**
				 * 移除按钮按下状态样式
				 */
				function unpressHandler(){
					$(this).removeClass(themeName+"_pgPress");
				}

				/**
				 * 修改按钮链接
				 */
				function modifyBtnLink(hashParams) {
					var pageNum = hashParams.pageNum;
					hashParams.pageNum = pageNum + 1;
					btnNext.attr('href', getUrl(hashParams));
					hashParams.pageNum = totalPage;
					btnLast.attr('href', getUrl(hashParams));
					hashParams.pageNum = pageNum - 1;
					btnPrev.attr('href', getUrl(hashParams));
					hashParams.pageNum = 1;
					btnFirst.attr('href', getUrl(hashParams));
				}
			}

			/**
			 * 创建XML文档
			 */
			function createXMLDocument(text) {
				var xmlDoc = null;
				try{// Internet Explorer
					xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
					xmlDoc.async = "false";
					xmlDoc.loadXML(text);
				}catch (e){
					try{// Firefox, Mozilla, Opera, etc.
						parser = new DOMParser();
						xmlDoc = parser.parseFromString(text, "text/xml");
					}catch (e) {
					}
				}
				return xmlDoc;
			}

			/**
			 * 组装页面路径
			 */
			function getUrl(hashParams) {
				var pageUrl = location.pathname;
				var pageParams = getPageParams(hashParams);

				if (canPushState) {
					pageUrl += '?' + $.param($.extend(pageParams, hashParams));
				} else {
					if (pageParams) {
						pageUrl += '?' + $.param(pageParams);
					}
					pageUrl += '#!' + $.param(hashParams);
				}
				return pageUrl;
			}

			/**
			 * 获取url中原查询参数json
			 */
			function getPageParams(hashParams) {
				var pageUrl = location.href;
				var pageQueryStr = pageUrl.split(/\?/)[1];
				var pageParams = null;
				if (pageQueryStr) {
					pageParams = {};
					var hashIndex = pageQueryStr.indexOf('#!');
					if (hashIndex != -1) {
						pageQueryStr = pageQueryStr.substr(0, hashIndex);
					}
					var pageParamsArray = pageQueryStr.split('&');
					for (var i in pageParamsArray) {
						if(hashParams && hashParams[i]){
							continue;
						}
						var pageParam = pageParamsArray[i].split('=');
						pageParams[pageParam[0]] = unescape(pageParam[1]);
					}
				}
				return pageParams;
			}

			/**
			 * 获取当前页面参数
			 * @param name
			 * @returns
			 */
			function getUrlParam(name, url) {
				url = url ? url : location.href;
				var reg = new RegExp("(#!|&|\\?)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
				var r = url.substr(1).match(reg);  //匹配目标参数
				if (r != null) return unescape(r[2]); return null; //返回参数值
			}

			function pushState(hashParams) {
				var separate = canPushState ? '?' : '#'
				if (canPushState) {
					window.history.pushState(null, null, getUrl(hashParams));
				} else {
					window.location.hash = '#!' + $.param(hashParams);
				}
			}
		};
	});
	
})(jQuery);