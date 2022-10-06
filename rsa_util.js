function RSAencode(str){
	var pubk = $.cookie('_pubk');
	var result = '';
	if(pubk && str){
		/**
		pubk = Base64.decode(pubk);
		var encryptionExponent = '';
		var modulus = '';
		if(pubk){
			encryptionExponent = pubk.split(',')[0];
			modulus = pubk.split(',')[1];
		}
		if(encryptionExponent && modulus){
			//setMaxDigits(129);
			var key = RSAUtils.getKeyPair(encryptionExponent, '', modulus);
			result = RSAUtils.encryptedString(key, str);
		}
		*/
		var encrypt = new JSEncrypt();
	    encrypt.setPublicKey(pubk);
	    result = encrypt.encrypt(encodeURI(str));
	}
	return result;
}