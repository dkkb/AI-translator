var STOP_GOOGLE_CAPTCHA_COUNTER = 0;
var STOP_GOOGLE_CAPTCHA_LIMIT = 25;
var TMPtext="";
var DetLang="";
var GL_PR = "G";

function getHttpRequest() {
    var ajaxRequest;
    try {
        ajaxRequest = new XMLHttpRequest();
    } catch (e) {
        try {
            ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                alert(FExtension.element(TranslatorIM.LOC,"extError1"));
                return false;
            }
        }
    }
    return ajaxRequest;
}

function truncStrByWord(str, length) {
    if (str != "undefined") {
        if (str.length > 25) {
            length = length - 25;
            var thestr = str;
            if (str.length > length) {
                str = str.substring(0, length);
                str = str.replace(new RegExp("/(.{1," + length + "})\b.*/"), "$1")    // VK - cuts str to max length without splitting words.
                var str2 = thestr.substring(length, (length + 25));
                var tempstr = str2.split(" ");
                var tmp = "";
                for (var i = 0; i < tempstr.length - 1; i++) {
                    tmp = tmp + tempstr[i] + " ";
                }
                str = str + tmp;
            }
        } else {
            str = str + " ";
        }
    }
    return str;
}

function G_INLINE_DETECT (myTransText){
		var doc = FExtension.browserInject.getDocument();

		  if(myTransText!=""){

		    myTransText = myTransText.replace(/|/g,"");
		    myTransText = myTransText.replace(/&/g,"");
		    myTransText = myTransText.replace(/$/g,"");
		    myTransText = myTransText.replace(/^/g,"");
		    myTransText = myTransText.replace(/~/g,"");
		    myTransText = myTransText.replace(/`/g,"");
		    myTransText = myTransText.replace(/@/g,"");
		    myTransText = myTransText.replace(/%/g," ");

		    var a=Math.floor((new Date).getTime()/36E5)^123456;
		    var tk = a+"|"+Math.floor((Math.sqrt(5)-1)/2*(a^654321)%1*1048576);


		    var num = Math.floor((Math.random() * SL_GEO.length)); 
		    var theRegion = SL_GEO[num];
		    if(TranslatorIM.SL_DOM!="auto") theRegion=TranslatorIM.SL_DOM;

		    var cntr = myTransText.split(" ");
                    var newTEXT = myTransText;

		    var baseUrl ="https://translate.google."+theRegion+"/translate_a/single";
		    var SL_Params = "client=gtx&dt=t&dt=bd&dj=1&source=input&q="+encodeURIComponent(newTEXT)+"&sl=auto&tl=en&hl=en";


			var ajaxRequest;  
			try{
				ajaxRequest = new XMLHttpRequest();
			} catch (e){
				try{
					ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
				} catch (e) {
					try{
						ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
					} catch (e){
						TranslatorIM.SL_alert(FExtension.element(TranslatorIM.LOC,"extError1"));
						return false;
					}
				}
			}
			ajaxRequest.onreadystatechange = function(){
				if(ajaxRequest.readyState == 4){
		                        var resp = ajaxRequest.responseText;
					resp = DOMPurify.sanitize (resp);
					var captcha=0;
					if(resp.indexOf('CaptchaRedirect')!=-1) captcha = 1;
				        if(resp.indexOf('ld_result":{"srclangs":["')!=-1) {
                		                var GDImTranslator_lang=resp.split('ld_result":{"srclangs":["');
						var GDImTranslator_lang1=GDImTranslator_lang[1].split('"');
		 				resp=GDImTranslator_lang1[0];
						DetLang = resp;
                                                TranslatorIM.CNTR("1111",DetLang+"/"+DetLang,newTEXT.length);
					} else 	SL_INLINE_DETECT(myTransText);
				}
			}
			baseUrl = baseUrl +"?"+ SL_Params;
			ajaxRequest.open("GET", baseUrl, true);
		        ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			ajaxRequest.send(SL_Params);         
		  }
}

function SL_INLINE_DETECT (text){
  	var theLIMIT = 100;
  	var theTXT = encodeURIComponent(truncStrByWord(text,theLIMIT));
        TranslatorIM.CNTRP("1111","*a/*a",theTXT.length);

	var SLDImTranslator_url = ImTranslator_theurl+"ld.asp?tr=itr&text="+theTXT;
		var ajaxRequest;  
		try{
			ajaxRequest = new XMLHttpRequest();
		} catch (e){
			try{
				ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
			} catch (e) {
				try{
					ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
				} catch (e){
					alert(FExtension.element(TranslatorIM.LOC,"extError1"));
					return false;
				}
			}
		}
		ajaxRequest.onreadystatechange = function(){
			if(ajaxRequest.readyState == 4){
                        	var tmp = ajaxRequest.responseText;
				tmp = DOMPurify.sanitize (tmp);
				if(tmp.indexOf("#|#")!=-1){
				    var tmp2 = tmp.split("#|#");
		                    DetLang="en";
	       		            if(tmp2[0].length>0 && tmp2[0].length<7) DetLang=tmp2[0];
			    	} else DetLang="en";
				if(DetLang=="zh") DetLang="zh-CN";
				if(DetLang=="zt") DetLang="zh-TW";
			}
		}
		ajaxRequest.open("POST", SLDImTranslator_url, true);
		ajaxRequest.send(null);                          
}





function DODetectionLang(myTransText) {
    var AUTO = SL_langSrc;
    if (TranslatorIM.SL_no_detect_it == "true") AUTO = "auto";
    if (AUTO == "auto") {
	if(STOP_GOOGLE_CAPTCHA_COUNTER<=0){
// By VK ------ removed language detection. Translation goes without the detection engine-------------
	 var a=0; // It's a fake. Remove me!!!
// By VK ------ removed language detection. Translation goes without the detection engine-------------
	}else  STOP_GOOGLE_CAPTCHA_COUNTER--;

        if (TranslatorIM.SL_TH_4 == 1 && historySentense != ""){
            historySentense = "";
        }
		setTimeout(function() {
//        if(STOP_GOOGLE_CAPTCHA_COUNTER==0){

		        translate(myTransText, inlinerInjectDictionary);

//	} else translate(myTransText, inlinerInjectDictionary);
		}, 0);
    } else {
        DetLang = SL_langSrc;
        if (TranslatorIM.SL_TH_4 == 1 && historySentense != ""){
            historySentense = "";
        }
        translate(myTransText, inlinerInjectDictionary);
    }
}


function injectScript(id, url, param, dictionary, text, langDst) {
  var ACT_PR_arr = TranslatorIM.SL_ALL_PROVIDERS_IT.split(",");
  var ACT_PR = ACT_PR_arr[0];
  if(ACT_PR == "Google") GL_PR = "G";
  if(ACT_PR == "Microsoft") GL_PR = "M";
  if(LISTofLANGsets[1].indexOf(SL_langDst)==-1) ACT_PR="Google";
  if(dictionary==true) ACT_PR="Google";
  var langSrc=SL_langSrc;
  var AUTO = "";//SL_langSrc;
  if (TranslatorIM.SL_no_detect_it == "true") AUTO = "auto";

  if (TranslatorIM.INLINEflip==1) AUTO = "auto";
  if (ACT_PR=="Microsoft")  AUTO = "auto";

  if(AUTO=="auto"){

	  if(DET==0) G_INLINE_DETECT(text);
	  else SL_INLINE_DETECT(text); 
          var cnt=0;
	  setTimeout(function(){
	    var SLIDL = setInterval(function(){
	        var MaxTries = 15;
		if(DetLang!="" || cnt>MaxTries) {
			clearInterval(SLIDL);
			SLIDL="";
			langDst=SL_langDst;
			langSrc=SL_langSrc;

			if(langSrc=="auto") langSrc=DetLang;

			if(TranslatorIM.INLINEflip==1){
				if(DetLang == langDst){
					var tmp = langSrc;
					langSrc = DetLang;
					langDst = tmp;
				}else{
					langSrc = DetLang;
					langDst = SL_langDst;
				}
			}else{
				langSrc = DetLang;
				langDst = SL_langDst;
			}
			param = param.replace("_FROM_",langSrc);
			param = param.replace("_TO_",langDst);
			if(ACT_PR=="Google") G_TRANSLATE(id, url, param, dictionary, text, langDst);
			else SL_OTHER_PROVIDERS(text,langSrc+"/"+langDst,1);
		}else	cnt++;
	    },100);  
	  },100);            
  }else {
	if(TranslatorIM.INLINEflip==1){
		var tmp = Detlang;
		langSrc = SL_langDst;
		langDst = tmp;
	}else{
                langDst = SL_langDst;
	}
	param = param.replace("_FROM_","auto");
	param = param.replace("_TO_",langDst);
	if(ACT_PR=="Google") G_TRANSLATE(id, url, param, dictionary, text, langDst);
	else SL_OTHER_PROVIDERS(text,langSrc+"/"+langDst,1);
  }
}

function G_TRANSLATE(id, url, param, dictionary, text, langDst){
    var xhr = getHttpRequest();
    url = url + "?" + param ;

    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            var result = xhr.responseText;

	    result = DOMPurify.sanitize (result);

	    result = result.replace(/\\u0027/g,"\'");
	    result = result.replace(/\\u0026/ig,"&");
	    result = result.replace(/\\u003c/ig,"<");
	    result = result.replace(/\\u003e/ig,">");
	    result = result.replace(/\\u003d/ig,"=");


            var st = 0;
	    if(dictionary==true){
	     if(result.indexOf('"dict":[{"')!=-1){
		 dictionary=false;
		 const obj = JSON.parse(result);
		 var line="";
		 for(var i = 0; i < obj.dict.length; i++){
			for (var j=0; j < obj.dict[i].entry.length; j++){
				line=line+obj.dict[i].entry[j].word+", ";
			} 					
		 }
		 line = line.substring(0, line.length - 2);
		 result = line
		 st=1;
		 TranslatorIM.CNTR("1131",ln+"/"+langDst,text.length);

		 if(result=="") result=FExtension.element(TranslatorIM.LOC,"extnotrsrv");
		 if(result.indexOf("CaptchaRedirect")!=-1 || result.indexOf("<p><b>403.</b>")!=-1) injectScriptRear(id, dictionary, text, langDst);
	    	 else translateCallBack(result, dictionary, text);
	     }
	    }
	    if(st==0){
	     if(result.indexOf('"sentences":')!=-1){
		 dictionary=false;
		 if(result.indexOf('{"trans":"')!=-1){
                       	var ReadyToUseGoogleText="";
                       	var Gr1=result.split('"trans":"');
			for(var h=1; h<Gr1.length; h++){
                        	var Gr2 = Gr1[h].split('","orig"');
                        	var Gr3 = Gr2[0];
                	        Gr3 = Gr3.replace(/\\"/ig,"'");
	               	        Gr3 = Gr3.replace(/\\u0026/ig,"&");
        	       	        Gr3 = Gr3.replace(/\\u003c/ig,"<");
               		        Gr3 = Gr3.replace(/\\u003e/ig,">");
        	                ReadyToUseGoogleText=ReadyToUseGoogleText+Gr3;
			}
			result = ReadyToUseGoogleText;

			if(result!="") {
				var ln = SL_langSrc;
				if(DetLang) ln = DetLang;
				text = text.trim();
				//var nmr = text.split(" ").length;
				//if(nmr > 1) TranslatorIM.CNTR("1121", ln + "/" + langDst, text.length);
				//else TranslatorIM.CNTR("1131", ln + "/" + langDst, text.length);
				TranslatorIM.CNTR("1121", ln + "/" + langDst, text.length);

			}

		 }
		 if(result=="") result=FExtension.element(TranslatorIM.LOC,"extnotrsrv");
		 if(result.indexOf("CaptchaRedirect")!=-1 || result.indexOf("<p><b>403.</b>")!=-1) injectScriptRear(id, dictionary, text, langDst);
	    	 else translateCallBack(result, dictionary, text);
	      } else SL_OTHER_PROVIDERS(text, langDst,0);
            } 
        }else{
             if(xhr.readyState==4) SL_OTHER_PROVIDERS(text, langDst,0);
	} 
    }
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(param);
}

function SL_OTHER_PROVIDERS(text,ln,st){
  	var ACT_PR_arr = TranslatorIM.SL_ALL_PROVIDERS_IT.split(",");
  	var ACT_PR = ACT_PR_arr[0];
	if(ACT_PR=="Yandex") {
		SL_YANDEX(text,ln);
	 	return false;
	}
	var baseUrl = ImTranslator_theurl+"dotrans.asp";
//	var baseUrl = "http://httpstat.us/414";

        if(st==0) var cgi = "dir=auto/"+ln+"&provider=google&text="+encodeURIComponent(text);
        else{
		ln = ln.replace("zh-CN", "zh-CHS");
	        ln = ln.replace("zh-TW", "zh-CHT");
	        ln = ln.replace("iw", "he");
	        ln = ln.replace("bs","bs-Latn");
	        ln = ln.replace("tl","fil");
	        ln = ln.replace("hmn","mww");
	        ln = ln.replace("sr","sr-Cyrl");
		ln = ln.replace("ku","kmr");
		ln = ln.replace("ckb","ku");

		cgi = "dir="+ln+"&provider=microsoft&text="+encodeURIComponent(text);
	}
  	if(ACT_PR == "Google"){
		var ln_ = SL_langSrc;
		if(DetLang) ln_ = DetLang;
		text = text.trim();
		var nmr = text.split(" ").length;
		if(nmr > 1) TranslatorIM.CNTRP("1121", ln_ + "/" + SL_langDst, text.length);
		else TranslatorIM.CNTRP("1131", ln_ + "/" + SL_langDst, text.length);

	}


	var ajaxRequest;  
	try{
		ajaxRequest = new XMLHttpRequest();
	} catch (e){
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e){
				alert(FExtension.element(TranslatorIM.LOC,"extError1"));
				return false;
			}
		}
	}
	ajaxRequest.onreadystatechange = function(){
	if(ajaxRequest.readyState == 4){
            var result = ajaxRequest.responseText;
	    result = DOMPurify.sanitize (result);
	    if(ajaxRequest.status!=200) result=ACT_PR+ ": "+ FExtension.element(TranslatorIM.SL_LOC,"extnotrsrv");
	    if(ajaxRequest.status==414) result=ACT_PR+ ": "+ FExtension.element(TranslatorIM.SL_LOC,"extlim2000").replace("XXX","4000");

	    dictionary=false;
	    if(result=="") result=ACT_PR+": "+FExtension.element(TranslatorIM.LOC,"extnotrsrv");
	    result = result.replace(/\\"/g,"'");
	    translateCallBack(result, dictionary, text);

	}
      }	
     ajaxRequest.open("POST", baseUrl, true);
     ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
     ajaxRequest.send(cgi); 
}


function injectScriptRear(id, dictionary, text, langDst) {
    var xhr = getHttpRequest();
    var url = ImTranslator_theurl+"dotrans.asp";
    TranslatorIM.CNTRP("1131","*a/*a",text.length);
    url = url + "?provider=google&dir=auto/" + langDst +"&text=" + encodeURIComponent(text);
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 ) {
            var result = xhr.responseText;
	    result = DOMPurify.sanitize (result);
	    if(result.indexOf('<head>')==-1 && result.indexOf('"sentences":')==-1){
		 dictionary=false;
		 if(result.indexOf('","')!=-1){
			 var tmp = result.split('","');
			 result = tmp[0].replace('["','');
		 }
	    }
	    if(result=="") result=FExtension.element(TranslatorIM.LOC,"extnotrsrv");
	    else translateCallBack(result, dictionary, text);
        }
    }
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send();
}


function translate(text, injectDictionary) {
    var escapedText = text.replace(/#/g, "");
    escapedText = escapedText.replace(/;/g, ",");
    var langSrc = "_FROM_";
    var langDst = "_TO_";
    var baseUrl = "";
    var SL_Params = "";
    var array = text.match(/\b\w+\b/g);

    var arraySplit = text.split(' ');
    //var dictionary = false;
    var a=Math.floor((new Date).getTime()/36E5)^123456;
    var tk = a+"|"+Math.floor((Math.sqrt(5)-1)/2*(a^654321)%1*1048576);

	var num = Math.floor((Math.random() * SL_GEO.length)); 
	var theRegion = SL_GEO[num];
        if(TranslatorIM.SL_DOM!="auto") theRegion=TranslatorIM.SL_DOM;

        text=text.replace(/(^[\s]+|[\s]+$)/g, '');
	var baseUrl ="https://translate.google."+theRegion+"/translate_a/single";
	var a=Math.floor((new Date).getTime()/36E5)^123456;
	var tk = a+"|"+Math.floor((Math.sqrt(5)-1)/2*(a^654321)%1*1048576);

	if(arraySplit==1) text = text.toLowerCase();


	var SL_Params = "client=gtx&dt=t&dt=bd&dj=1&source=input&q="+encodeURIComponent(text)+"&sl="+langSrc+"&tl="+langDst+"&hl=en&tk="+tk;


    injectScript("inlinerScript", baseUrl, SL_Params, dictionary, text, langDst);
}

function translateCallBack(result, dictionary, text) {

    var translation = "";
    //if(result.indexOf('TRANSLATED_TEXT')!=-1){


    if (dictionary) {
        try {
            result = JSON.parse(result);
        } catch (e) {

        }
        if (result.dict) {
            var dict = result.dict;
            if (dict.length > 0 && dict[0].terms) {
                translation = dict[0].terms.join(', ');
            }
        } else {
            translation = result.sentences[0].trans;
        }
    } else {

        translation = get_translation(result);
    }
    //}
    SaveTransToHistory(text,translation);
    translation = " " + translation;

    inlinerInjectHandleMessage({name: "inlinerSelectionResponse", message: translation});

}

function get_translation(result){
 if(result.indexOf('<span id')!=-1){
    if (result.indexOf('<span id=result_box class="long_text">') > -1)   var ImtranslatorGoogleResult1 = result.split('<span id=result_box class="long_text">');
    else var ImtranslatorGoogleResult1 = result.split('<span id=result_box class="short_text">');
    var ImtranslatorGoogleResult2 = ImtranslatorGoogleResult1[1].split('</span></div>');
    var ImtranslatorGoogleResult3 = ImtranslatorGoogleResult2[0].replace(/<br>/ig, '@');
    ImtranslatorGoogleResult3 = ImtranslatorGoogleResult3.replace(/&#39;/ig, "'");
    ImtranslatorGoogleResult3 = ImtranslatorGoogleResult3.replace(/&quot;/ig, "'");
    ImtranslatorGoogleResult3 = ImtranslatorGoogleResult3.replace(/&amp;/ig, "&");
    ImtranslatorGoogleResult3 = ImtranslatorGoogleResult3.replace(/(<([^>]+)>)/ig, "");
    ImtranslatorGoogleResult3 = ImtranslatorGoogleResult3.replace(/@/ig, "<br>");
    var ImtranslatorGoogleResult4 = ImtranslatorGoogleResult3.replace(/% 20/ig, " ");
    return ImtranslatorGoogleResult4;
 } else return result;
}

function split_sentence(selText) {

    if (selText != "" && selText != undefined) {
        //By VK handling & sign------------------------------
        var historyText = selText;
        //selText = encodeURIComponent(selText);
        //By VK handling & sign------------------------------

        var baseUrl = 'https://imtranslator.net/split.asp';
        var params = 'text=' + encodeURIComponent(selText);

        var ajaxRequest = getHttpRequest();
        ajaxRequest.onreadystatechange = function () {
            if (ajaxRequest.readyState == 4) {
                var resp = ajaxRequest.responseText;
                //By VK handling Titles---------------------------------------------------------------
                if (resp.indexOf('http') == -1 || resp.indexOf('www') == -1) {
                    resp = resp.replace(/\n+/g, '\n');
                    resp = resp.replace(/\n/g, "<#>");
                    resp = resp.replace(/<#><#>/g, "<#>");
                    resp = resp.replace(/<#> <#>/g, "<#>");
                }
                //By VK handling Titles---------------------------------------------------------------

                var mas = resp.split('<#>');
                var doc = FExtension.browserInject.getDocument(true);
                doc.arraySentence = null;

                if (mas.length > 0) {
                    doc.arraySentence = mas;
                    runinliner();
                }
            }
        }

        ajaxRequest.open("POST", baseUrl, true);
        ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        ajaxRequest.send(params);
    }
}

function SaveTransToHistory(text,historyText) {

        if (TranslatorIM.SL_TH_4 == 1){
/*
	    var mySourceLang = "Aoto";
	    if(DetLang!="") mySourceLang = DetLang;
	    var myTargetLang = SL_langDst;
*/
	    var mySourceLang = "Aoto";
    	    var myTargetLang = SL_langDst;

	    if(TranslatorIM.INLINEflip==1){
	      if(DetLang == SL_langDst){
		var tmp = SL_langSrc;
		mySourceLang = DetLang;
	 	myTargetLang = tmp;
	      } else {
			mySourceLang = DetLang;
			myTargetLang = SL_langDst;
	      }
	    }else myTargetLang = SL_langDst;



            var SLnow = new Date();
            SLnow = SLnow.toString();
            var TMPtime = SLnow.split(" ");
            var CurDT = TMPtime[1] + " " + TMPtime[2] + " " + TMPtime[3] + ", " + TMPtime[4];

            text=text.replace(/~/ig," ");
            historyText=historyText.replace(/~/ig," ");

            FExtension.browserInject.runtimeSendMessage({greeting:"hist:>"+ text + "~~" + historyText + "~~" + mySourceLang + "|" + myTargetLang + "~~" + FExtension.browserInject.getDocument().location + "~~" + CurDT + "~~5~~"+GL_PR+"^^"}, function (response) {
                if(response){
//                    console.log(response.farewell);
                }
            });
         }
 DetLang="";
}

function SL_YANDEX(text,dir){
	        dir = dir.replace("auto","en");
       		dir = dir.replace("/","-");
		getYSID(0);
		setTimeout(function(){
		    var YSLIDL = setInterval(function(){
			if(TranslatorIM.YSIDstatus === true) {
				clearInterval(YSLIDL);
				YSLIDL="";
				getY_TRANSLATION(dir,text);
			} 
		    },5);  
	       	},5);  		
}

function getYSID(st){
 		var YK = TranslatorIM.SL_YKEY;
		TranslatorIM.YSIDold = YK;
		if(st==1) YK=0;
		if(YK==0) {
		       	var baseUrl="https://translate.yandex.net/website-widget/v1/widget.js?widgetId=ytWidget&pageLang=en&widgetTheme=light&autoMode=false";
			var ajaxRequest;	
			try{
				ajaxRequest = new XMLHttpRequest();
			} catch (e){
				try{
					ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
				} catch (e) {
					try{
						ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
					} catch (e){
						return false;
					}
				}
			}
			ajaxRequest.onreadystatechange = function(){
			        var resp = "";
				if(ajaxRequest.readyState == 4 && ajaxRequest.status == 200){
			            var resp = ajaxRequest.responseText;
				    resp = DOMPurify.sanitize (resp);
			            resp = resp.match(/sid\:\s\'[0-9a-f\.]+/);
	                	    if (resp && resp[0] && resp[0].length > 7) {
               		        	TranslatorIM.YSID = resp[0].substring(6);
					FExtension.browserInject.runtimeSendMessage({greeting: "YKEY:>" + TranslatorIM.YSID }, function(response) {}); 
		                        TranslatorIM.YSIDstatus = true;
               			    } else {
		                        TranslatorIM.YSIDstatus = false;
					FExtension.browserInject.runtimeSendMessage({greeting: "YKEY:>0"}, function(response) {}); 
               			    }
				}
			}
			ajaxRequest.open("GET", baseUrl, true);
			ajaxRequest.setRequestHeader("Access-Control-Allow-Headers", "*");
			ajaxRequest.setRequestHeader("Access-Control-Allow-Origin", "null");
			ajaxRequest.send();
		  } else {
			TranslatorIM.YSID = TranslatorIM.SL_YKEY;
                	TranslatorIM.YSIDstatus = true;
		  }
}


function getY_TRANSLATION(dir, text){
	     	var doc = FExtension.browserInject.getDocument();
       		dir = dir.replace("zh-CN","zh");
       		dir = dir.replace("zh-TW","zh");
		dir = dir.replace("jw","jv");
	        dir = dir.replace("iw","he");
        	var tmp=dir.split("-");
		var mySourceLang=tmp[0];
		var myTargetLang=tmp[1];
		var T = myTargetLang;
	  	var baseUrl="https://translate.yandex.net/api/v1/tr.json/translate?srv=tr-url-widget&id=" + TranslatorIM.YSID + "-0-0&format=html&lang=" + dir + "&text="+ encodeURIComponent(text);

		var ajaxRequest;	
		try{
			ajaxRequest = new XMLHttpRequest();
		} catch (e){
			try{
				ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
			} catch (e) {
				try{
					ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
				} catch (e){
					return false;
				}
			}
		}
		ajaxRequest.onreadystatechange = function(){
		        var resp = "";
			if(ajaxRequest.readyState == 4 && ajaxRequest.status == 200){
	        	    var resp = ajaxRequest.responseText;
			    resp = DOMPurify.sanitize (resp);
	        	    resp=resp.replace(/\\"/ig,"'");

        		    if(resp.indexOf('text":["')!=-1){
		    		var R1 = resp.split('text":["');
			    	var R2 = R1[1].split('"');
	    			var R3 = R2[0];
       			        R3 = R3.replace(/\\n/ig,"<br>");
       			        R3 = R3.replace(/\\r/ig,"");
       			        var result = R3.replace(/\\t/ig,"");
			    	if(result=="") result=FExtension.element(TranslatorIM.LOC,"extnotrsrv");
	    			result = result.replace(/\\"/g,"'");
				GL_PR="Y";
	    			translateCallBack(result, 0, text);

				var theQ = text.split(" ").length;
				if (theQ==1) TranslatorIM.CNTR('1132',mySourceLang+"/"+T, text.length);
				else TranslatorIM.CNTR('1122',mySourceLang+"/"+T, text.length);

			   } else {
                	        TranslatorIM.YSIDstatus = false;
				FExtension.browserInject.runtimeSendMessage({greeting: "YKEY:>" + TranslatorIM.YSID }, function(response) {}); 
			    	var msg = "Yandex: "+FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extnotrsrv');
			        msg = DOMPurify.sanitize (msg);

	    			translateCallBack(msg, 0, text);
			   }
			} else {
			    if(ajaxRequest.status == 403){
				FExtension.browserInject.runtimeSendMessage({greeting: "YKEY:>0"}, function(response) {}); 
				TranslatorIM.YSID=0;
				if(TranslatorIM.YSID!=TranslatorIM.YSIDold){
					TranslatorIM.SL_YANDEX(dir, text);
				}else{
		                        TranslatorIM.YSIDstatus = false;
					FExtension.browserInject.runtimeSendMessage({greeting: "YKEY:>0"}, function(response) {}); 
					TranslatorIM.YSIDold = 0;
				}
			    }
			}
		}
		ajaxRequest.open("GET", baseUrl, true);
		ajaxRequest.setRequestHeader("Access-Control-Allow-Headers", "*");
		ajaxRequest.setRequestHeader("Access-Control-Allow-Origin", "null");
		ajaxRequest.send();
} 

