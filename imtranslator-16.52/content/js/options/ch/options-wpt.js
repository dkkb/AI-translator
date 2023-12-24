'use strict';
var SL_DARK="invert(95%)";
var SL_Languages = CUSTOM_LANGS(FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extLanguages'));

(function(){GEBI("SL_info").addEventListener("click",function(){FExtension.browserPopup.openNewTab(this.href);},!1);} )();

(function(){GEBI("SRV6").addEventListener("click",function(){ SL_ACTIVE = GEBI("SRV6"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_ACTIVE.select();SL_KBD(1);},!1); } )();
(function(){GEBI("SRV6").addEventListener("mouseout",function(){ SL_KBD(0);},!1); } )();
(function(){GEBI("SRV6").addEventListener("keyup",function(){ if(GEBI("SRV6").value=="" || GEBI("SRV6").value==" ")GEBI('SRV6').value=FExtension.GET_localStorage("SL_HK_wpt1");},!1); } )();

(function(){GEBI("SRV7").addEventListener("click",function(){ SL_ACTIVE = GEBI("SRV7"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_ACTIVE.select();SL_KBD(1);},!1); } )();
(function(){GEBI("SRV7").addEventListener("mouseout",function(){ SL_KBD(0);},!1); } )();
(function(){GEBI("SRV7").addEventListener("keyup",function(){ if(GEBI("SRV7").value=="" || GEBI("SRV7").value==" ")GEBI('SRV7').value=FExtension.GET_localStorage("SL_HK_wpt2");},!1); } )();

(function(){GEBI("SL_HK6").addEventListener("click",function(){ SL_HIDE_HK("SL_HK6","SL_HIDE6");VERIFY();},!1); } )();
(function(){GEBI("SL_HK7").addEventListener("click",function(){ SL_HIDE_HK("SL_HK7","SL_HIDE7");VERIFY();},!1); } )();

(function(){GEBI("SL_LOC").addEventListener("change",function(){SL_SAVE_LOC();},!1);} )();
(function(){GEBI("SL_LNG_STATUS").addEventListener("click",function(){ SL_LANGS(); },!1); } )();
(function(){GEBI("SL_down_box").addEventListener("click",function(){ SL_LANGS(); },!1); } )();
(function(){GEBI("SL_down").addEventListener("click",function(){ SL_LANGS(); },!1); } )();
(function(){GEBI("SL_THEME").addEventListener("change",function(){SL_SAVE_THEME();},!1);} )();

//AUTOSAVE BLOCK
window.addEventListener('change',function(e){
	save_options();
},!1);
//AUTOSAVE BLOCK

(function(){
    window.addEventListener('load',function(){
	GEBI('SL_translate_container').style.opacity="1";
	CONSTRUCTOR();
	var OB = GEBI('SL_langSrc_wpt');
	if(FExtension.GET_localStorage("SL_LNG_LIST").indexOf("auto")!=-1 || FExtension.GET_localStorage("SL_LNG_LIST")=="all"){
		var OB1 = document.createElement('option');
		var v = document.createAttribute("value");
		v.value = "auto";
		OB1.setAttributeNode(v);
		OB1.appendChild(document.createTextNode(FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extDetect_language_from_box')));
		OB.appendChild(OB1); 
	}
	var SL_TMP = SL_Languages.split(",");
	for(var J=0; J < SL_TMP.length; J++){
	    var SL_TMP2=SL_TMP[J].split(":");
	    var OB2 = document.createElement('option');
	    var v = document.createAttribute("value");
	    v.value = SL_TMP2[0];
	    OB2.setAttributeNode(v);
	    //OB2.appendChild(document.createTextNode(SL_TMP2[1].replace("&#160;"," ")));
	    OB2.appendChild(document.createTextNode(SL_TMP2[1]));
	    OB.appendChild(OB2);
	}

	var OB3 = GEBI('SL_langDst_wpt');
	for(var J=0; J < SL_TMP.length; J++){
	    var SL_TMP2=SL_TMP[J].split(":");
	    var OB2 = document.createElement('option');
	    v = document.createAttribute("value");
	    v.value = SL_TMP2[0];
	    OB2.setAttributeNode(v);
	    //OB2.appendChild(document.createTextNode(SL_TMP2[1].replace("&#160;"," ")));
	    OB2.appendChild(document.createTextNode(SL_TMP2[1]));
	    OB3.appendChild(OB2);
	}
	INIT();
    },!1);
})();
function CONSTRUCTOR(){

	GEBI('SL_BG_op').appendChild(document.createTextNode(FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extSLBG_op')));
	GEBI('SL_setLS4allTr').appendChild(document.createTextNode(FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extSLsetLS4allTr')));
	GEBI('SLSeSo').appendChild(document.createTextNode(FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extSeSo')));
	GEBI('SLSeTa').appendChild(document.createTextNode(FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extSeTa')));
	GEBI('SL_TrHi').appendChild(document.createTextNode(FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extTrHist')));
	GEBI('SL_WpTH').appendChild(document.createTextNode(FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extWpTH')));
	GEBI('SL_sc').appendChild(document.createTextNode(FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extHotKeys')));
	GEBI('SL_il').appendChild(document.createTextNode(FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extLOC')));
	GEBI('SL_L_BOX').appendChild(document.createTextNode(FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extLangs')+":"));
	GEBI('SL_LNG_STATUS').appendChild(document.createTextNode(FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extCustomize')));

	GEBI('SL_theme_ttl').appendChild(document.createTextNode(FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extTHEME')));
	GEBI('SL_theme_1').appendChild(document.createTextNode(FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extLIGHT')));
	GEBI('SL_theme_2').appendChild(document.createTextNode(FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extDARK')));

	switch(PLATFORM){
	 case "Chrome": GEBI('SL_info').href="https://about.imtranslator.net/tutorials/presentations/imtranslator-translator-for-firefox/webpage-options-firefox/"; break;
	}
	ACTIVATE_THEME(FExtension.GET_localStorage("THEMEmode"));

}


function INIT(){
  ACTIVATE_MENU_ELEMENT(4);
  GEBI("SL_LOC").value=FExtension.GET_localStorage("SL_LOCALIZATION");
	var mySL_langSrc_wpt = FExtension.GET_localStorage("SL_langSrc_wpt");
	var mySL_langSrcSelect_wpt = GEBI("SL_langSrc_wpt");
	for (var i = 0; i < mySL_langSrcSelect_wpt.options.length; i++) {
		var mySL_langSrcOption_wpt = mySL_langSrcSelect_wpt.options[i];
		if (mySL_langSrcOption_wpt.value == mySL_langSrc_wpt) {
			mySL_langSrcOption_wpt.selected = "true";
			break;
		}
	}

	var mySL_langDst_wpt = FExtension.GET_localStorage("SL_langDst_wpt");
	var mySL_langDstSelect_wpt = GEBI("SL_langDst_wpt");
	for (var i = 0; i < mySL_langDstSelect_wpt.options.length; i++) {
		var mySL_langDstOption_wpt = mySL_langDstSelect_wpt.options[i];
		if (mySL_langDstOption_wpt.value == mySL_langDst_wpt) {
			mySL_langDstOption_wpt.selected = "true";
			break;
		}
	}

	var SL_TH_3 = FExtension.GET_localStorage("SL_TH_3");
	if(SL_TH_3=="1")  GEBI("SL_TH_3").checked = true;
	else GEBI("SL_TH_3").checked = false;

	var SL_global_lng_wpt = FExtension.GET_localStorage("SL_global_lng_wpt");
	if(SL_global_lng_wpt=="true")  GEBI("SL_global_lng_wpt").checked = true;
	else GEBI("SL_global_lng_wpt").checked = false;

  var tempHK6 = FExtension.GET_localStorage("SL_HK_wptbox1");
  if(tempHK6=="true") GEBI("SL_HK6").checked=true;
  else GEBI("SL_HK6").checked=false;
  
  GEBI("SRV6").value=FExtension.GET_localStorage("SL_HK_wpt1");

  var tempHK7 = FExtension.GET_localStorage("SL_HK_wptbox2");
  if(tempHK7=="true") GEBI("SL_HK7").checked=true;
  else 	 GEBI("SL_HK7").checked=false;

  GEBI("SRV7").value=FExtension.GET_localStorage("SL_HK_wpt2");

  SL_HIDE_HK("SL_HK6","SL_HIDE6");
  SL_HIDE_HK("SL_HK7","SL_HIDE7");

        var SL_THEMEmode = FExtension.GET_localStorage("THEMEmode");
	if(SL_THEMEmode==0)  GEBI("SL_THEME").value = 0;
	else GEBI("SL_THEME").value = 1;
	save_options();
}

function save_options() {
 setTimeout(function() {
 if(VERIFY_ALL_TABS(6) == true){
	var SL_select_S_wpt = GEBI("SL_langSrc_wpt");
	var SL_select_T_wpt = GEBI("SL_langDst_wpt");

	if(SL_select_S_wpt.value!=SL_select_T_wpt.value){

		if(GEBI("SL_TH_3").checked==true){ FExtension.store.set("SL_TH_3","1"); chrome.storage.local.set({'SL_TH_3': '1'});}
		else FExtension.store.set("SL_TH_3", "0");

		if(GEBI("SL_global_lng_wpt").checked==true){
			FExtension.store.set("SL_global_lng", GEBI("SL_global_lng_wpt").checked);
			chrome.storage.local.set({'SL_global_lng': GEBI("SL_global_lng_wpt").checked});
			FExtension.store.set("SL_global_lng_bbl", GEBI("SL_global_lng_wpt").checked);
			chrome.storage.local.set({'SL_global_lng_bbl': GEBI("SL_global_lng_wpt").checked});
			FExtension.store.set("SL_global_lng_wpt", GEBI("SL_global_lng_wpt").checked);
			chrome.storage.local.set({'SL_global_lng_wpt': GEBI("SL_global_lng_wpt").checked});
			FExtension.store.set("SL_global_lng_it", GEBI("SL_global_lng_wpt").checked);
			chrome.storage.local.set({'SL_global_lng_it': GEBI("SL_global_lng_wpt").checked});
			FExtension.store.set("SL_global_lng_tr", GEBI("SL_global_lng_wpt").checked);
			chrome.storage.local.set({'SL_global_lng_tr': GEBI("SL_global_lng_wpt").checked});

			FExtension.store.set("SL_langSrc", SL_select_S_wpt.children[SL_select_S_wpt.selectedIndex].value);
			chrome.storage.local.set({'SL_langSrc': SL_select_S_wpt.children[SL_select_S_wpt.selectedIndex].value});
			FExtension.store.set("SL_langSrc_bbl", SL_select_S_wpt.children[SL_select_S_wpt.selectedIndex].value);
			chrome.storage.local.set({'SL_langSrc_bbl': SL_select_S_wpt.children[SL_select_S_wpt.selectedIndex].value});
			FExtension.store.set("SL_langSrc_wpt", SL_select_S_wpt.children[SL_select_S_wpt.selectedIndex].value);
			chrome.storage.local.set({'SL_langSrc_wpt': SL_select_S_wpt.children[SL_select_S_wpt.selectedIndex].value});
			FExtension.store.set("SL_langSrc_it", SL_select_S_wpt.children[SL_select_S_wpt.selectedIndex].value);
			chrome.storage.local.set({'SL_langSrc_it': SL_select_S_wpt.children[SL_select_S_wpt.selectedIndex].value});
			FExtension.store.set("SL_langSrc_tr", SL_select_S_wpt.children[SL_select_S_wpt.selectedIndex].value);
			chrome.storage.local.set({'SL_langSrc_tr': SL_select_S_wpt.children[SL_select_S_wpt.selectedIndex].value});

			FExtension.store.set("SL_langDst", SL_select_T_wpt.children[SL_select_T_wpt.selectedIndex].value);
			chrome.storage.local.set({'SL_langDst': SL_select_T_wpt.children[SL_select_T_wpt.selectedIndex].value});
			FExtension.store.set("SL_langDst_bbl", SL_select_T_wpt.children[SL_select_T_wpt.selectedIndex].value);
			chrome.storage.local.set({'SL_langDst_bbl': SL_select_T_wpt.children[SL_select_T_wpt.selectedIndex].value});
			FExtension.store.set("SL_langDst_wpt", SL_select_T_wpt.children[SL_select_T_wpt.selectedIndex].value);
			chrome.storage.local.set({'SL_langDst_wpt': SL_select_T_wpt.children[SL_select_T_wpt.selectedIndex].value});
			FExtension.store.set("SL_langDst_it", SL_select_T_wpt.children[SL_select_T_wpt.selectedIndex].value);
			chrome.storage.local.set({'SL_langDst_it': SL_select_T_wpt.children[SL_select_T_wpt.selectedIndex].value});
			FExtension.store.set("SL_langDst_tr", SL_select_T_wpt.children[SL_select_T_wpt.selectedIndex].value);
			chrome.storage.local.set({'SL_langDst_tr': SL_select_T_wpt.children[SL_select_T_wpt.selectedIndex].value});



		   // temp params
		   FExtension.store.set("SL_langSrc2", SL_select_S_wpt.children[SL_select_S_wpt.selectedIndex].value);
		   chrome.storage.local.set({'SL_langSrc2': SL_select_S_wpt.children[SL_select_S_wpt.selectedIndex].value});
		   FExtension.store.set("SL_langSrc_bbl2", SL_select_S_wpt.children[SL_select_S_wpt.selectedIndex].value);
		   chrome.storage.local.set({'SL_langSrc_bbl2': SL_select_S_wpt.children[SL_select_S_wpt.selectedIndex].value});
		   FExtension.store.set("SL_langSrc_wpt2", SL_select_S_wpt.children[SL_select_S_wpt.selectedIndex].value);
		   chrome.storage.local.set({'SL_langSrc_wpt2': SL_select_S_wpt.children[SL_select_S_wpt.selectedIndex].value});
		   FExtension.store.set("SL_langSrc_it2", SL_select_S_wpt.children[SL_select_S_wpt.selectedIndex].value);
		   chrome.storage.local.set({'SL_langSrc_it2': SL_select_S_wpt.children[SL_select_S_wpt.selectedIndex].value});

		   FExtension.store.set("SL_langDst2", SL_select_T_wpt.children[SL_select_T_wpt.selectedIndex].value);
		   chrome.storage.local.set({'SL_langDst2': SL_select_T_wpt.children[SL_select_T_wpt.selectedIndex].value});
		   FExtension.store.set("SL_langDst_bbl2", SL_select_T_wpt.children[SL_select_T_wpt.selectedIndex].value);
		   chrome.storage.local.set({'SL_langDst_bbl2': SL_select_T_wpt.children[SL_select_T_wpt.selectedIndex].value});
		   FExtension.store.set("SL_langDst_wpt2", SL_select_T_wpt.children[SL_select_T_wpt.selectedIndex].value);
		   chrome.storage.local.set({'SL_langDst_wpt2': SL_select_T_wpt.children[SL_select_T_wpt.selectedIndex].value});
		   FExtension.store.set("SL_langDst_it2", SL_select_T_wpt.children[SL_select_T_wpt.selectedIndex].value);
		   chrome.storage.local.set({'SL_langDst_it2': SL_select_T_wpt.children[SL_select_T_wpt.selectedIndex].value});
		   // temp params


	   		FExtension.store.set("SL_langDst_name", SL_select_T_wpt.children[SL_select_T_wpt.selectedIndex].text);
	   		chrome.storage.local.set({'SL_langDst_name': SL_select_T_wpt.children[SL_select_T_wpt.selectedIndex].text});
			FExtension.store.set("SL_langDst_name_wpt", SL_select_T_wpt.children[SL_select_T_wpt.selectedIndex].text);
			chrome.storage.local.set({'SL_langDst_name_wpt': SL_select_T_wpt.children[SL_select_T_wpt.selectedIndex].text});
	   		FExtension.store.set("SL_langDst_name_bbl", SL_select_T_wpt.children[SL_select_T_wpt.selectedIndex].text);
	   		chrome.storage.local.set({'SL_langDst_name_bbl': SL_select_T_wpt.children[SL_select_T_wpt.selectedIndex].text});
			FExtension.store.set("SL_langDst_name_it", SL_select_T_wpt.children[SL_select_T_wpt.selectedIndex].text);
			chrome.storage.local.set({'SL_langDst_name_it': SL_select_T_wpt.children[SL_select_T_wpt.selectedIndex].text});
			FExtension.store.set("SL_langDst_name_tr", SL_select_T_wpt.children[SL_select_T_wpt.selectedIndex].text);
	   		chrome.storage.local.set({'SL_langDst_name_tr': SL_select_T_wpt.children[SL_select_T_wpt.selectedIndex].text});

		} else {
			FExtension.store.set("SL_langDst_name_wpt", SL_select_T_wpt.children[SL_select_T_wpt.selectedIndex].text);
			chrome.storage.local.set({'SL_langDst_name_wpt': SL_select_T_wpt.children[SL_select_T_wpt.selectedIndex].text});

			FExtension.store.set("SL_global_lng", GEBI("SL_global_lng_wpt").checked);
			chrome.storage.local.set({'SL_global_lng': GEBI("SL_global_lng_wpt").checked});
			FExtension.store.set("SL_global_lng_bbl", GEBI("SL_global_lng_wpt").checked);
			chrome.storage.local.set({'SL_global_lng_bbl': GEBI("SL_global_lng_wpt").checked});
			FExtension.store.set("SL_global_lng_wpt", GEBI("SL_global_lng_wpt").checked);
			chrome.storage.local.set({'SL_global_lng_wpt': GEBI("SL_global_lng_wpt").checked});
			FExtension.store.set("SL_global_lng_it", GEBI("SL_global_lng_wpt").checked);
			chrome.storage.local.set({'SL_global_lng_it': GEBI("SL_global_lng_wpt").checked});
			FExtension.store.set("SL_global_lng_tr", GEBI("SL_global_lng_wpt").checked);
			chrome.storage.local.set({'SL_global_lng_tr': GEBI("SL_global_lng_wpt").checked});

		}	
		var SL_langSrc_wpt = SL_select_S_wpt.children[SL_select_S_wpt.selectedIndex].value;
		FExtension.store.set("SL_langSrc_wpt", SL_langSrc_wpt);
		chrome.storage.local.set({'SL_langSrc_wpt': SL_langSrc_wpt});

		var SL_langDst_wpt = SL_select_T_wpt.children[SL_select_T_wpt.selectedIndex].value;
		FExtension.store.set("SL_langDst_wpt", SL_langDst_wpt);
		chrome.storage.local.set({'SL_langDst_wpt': SL_langDst_wpt});
		
		var SL_langDst_name_wpt = SL_select_T_wpt.children[SL_select_T_wpt.selectedIndex].text;
		FExtension.store.set("SL_langDst_name_wpt", SL_langDst_name_wpt);
		chrome.storage.local.set({'SL_langDst_name_wpt': SL_langDst_name_wpt});

                FExtension.store.set("SL_HK_wptbox1", GEBI("SL_HK6").checked);
		chrome.storage.local.set({'SL_HK_wptbox1': GEBI("SL_HK6").checked});
                FExtension.store.set("SL_HK_wptbox2", GEBI("SL_HK7").checked);
		chrome.storage.local.set({'SL_HK_wptbox2': GEBI("SL_HK7").checked});

                FExtension.store.set("SL_HK_wpt1", GEBI("SRV6").value);
		chrome.storage.local.set({'SL_HK_wpt1': GEBI("SRV6").value});
                FExtension.store.set("SL_HK_wpt2", GEBI("SRV7").value);
		chrome.storage.local.set({'SL_HK_wpt2': GEBI("SRV7").value});

//------TIME STAMP--------------
	new Date().getTime();
	FExtension.store.set("SL_TS", Date.now());
	chrome.storage.local.set({'SL_TS': Date.now()});
//==============================

		if(GEBI("SL_global_lng_wpt").checked==true){
			FExtension.store.set("SL_langDst_name", SL_langDst_name_wpt);
			chrome.storage.local.set({'SL_langDst_name': SL_langDst_name_wpt});
			FExtension.store.set("SL_langDst_name_bbl", SL_langDst_name_wpt);
			chrome.storage.local.set({'SL_langDst_name_bbl': SL_langDst_name_wpt});
//			FExtension.store.set("SL_langDst_name_gt", SL_langDst_name_wpt);
//			chrome.storage.local.set({'SL_langDst_name_gt': SL_langDst_name_wpt});
			FExtension.store.set("SL_langDst_name_it", SL_langDst_name_wpt);
			chrome.storage.local.set({'SL_langDst_name_it': SL_langDst_name_wpt});
		}

		FExtension.store.set("SL_Flag", "FALSE");
		chrome.storage.local.set({'SL_Flag': 'FALSE'});
		FExtension.bg.ImTranslatorBG.SL_callbackRequest();
		FExtension.bg.ImTranslatorBG.SL_callbackRequest2();
		FExtension.bg.ImTranslatorBG.SL_callbackRequest3();
//		FExtension.bg.ImTranslatorBG.SL_callbackRequest4();
	        FExtension.bg.FExtension.browser.refreshSettings();


                GEBI('SL_kbd').style.display='none';
	}else alert(FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extS_T_L_diff'));
 } else DO_IFRAME(6);
 }, 100);
}

function GEBI(id){ return document.getElementById(id);}


function VERIFY(ob){
 if(GEBI("SRV6").value==""){
	GEBI('SRV6').value=FExtension.GET_localStorage("SL_HK_wpt1");
	GEBI('SL_kbd').innerText = FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extUseHK');
 }	
 if(GEBI("SRV7").value==""){
	GEBI('SRV7').value=FExtension.GET_localStorage("SL_HK_wpt2");
	GEBI('SL_kbd').innerText = FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extUseHK');
 }
 var ARR = new Array(2);
 ARR[0] = GEBI("SL_HK6").checked+"|"+GEBI("SRV6").value;
 ARR[1] = GEBI("SL_HK7").checked+"|"+GEBI("SRV7").value;
 GEBI("SRV6").style.background='#FFF';
 GEBI("SRV7").style.background='#FFF';
 if(ARR[0]==ARR[1]){GEBI("SRV6").style.background='#F0D3D1'; GEBI("SRV7").style.background='#F0D3D1';}

 if(VERIFY_ALL_TABS(6) != true){   
   DO_IFRAME(6);
 }	
}



function ACTIVATE_MENU_ELEMENT(st){
  var win = top.frames['menu'];
  var li = win.document.getElementsByTagName("li");
  for(var i=1; i<=li.length; i++){
        if(st==i) win.document.getElementById('SL_options_menu'+i).className='SL_options-menu-on';
        else win.document.getElementById('SL_options_menu'+i).className='SL_options-menu-off';
  }
}

function SL_SAVE_LOC(){
  FExtension.store.set("SL_LOCALIZATION", GEBI("SL_LOC").value);
  chrome.storage.local.set({'SL_LOCALIZATION': GEBI("SL_LOC").value});
  CONSTRUCTOR();
  GEBI("SL_langSrc_wpt").value=FExtension.GET_localStorage("SL_langSrc_wpt");
  GEBI("SL_langDst_wpt").value=FExtension.GET_localStorage("SL_langDst_wpt");
  FExtension.store.save_LOC4CONTEXT();
  new Date().getTime();
  FExtension.store.set("SL_TS_LOC", Date.now());
  chrome.storage.local.set({'SL_TS_LOC': Date.now()});
  FExtension.bg.ImTranslatorBG.SL_callbackRequest4LOC();
  parent.frames["menu"].location.reload();
  location.reload();
}

function SL_SAVE_THEME(){
  FExtension.store.set("THEMEmode", GEBI("SL_THEME").value);
  chrome.storage.local.set({'THEMEmode': GEBI("SL_THEME").value});
  new Date().getTime();
  FExtension.store.set("SL_TS_LOC", Date.now());
  chrome.storage.local.set({'SL_TS_LOC': Date.now()});
  location.reload();
}

function ACTIVATE_THEME(st){
 	if(st==1){
		var bg="#191919";
		var clr="#BF7D44";
		var clr_deact="#BDBDBD";
		GEBI("SL_translate_container").style.filter=SL_DARK;

		GEBI("SL_sc").style.filter=SL_DARK;

		var LBLS = document.getElementsByClassName("SL_BG_op");
		for(var i=0; i<LBLS.length; i++) LBLS[i].style.color=clr;
		var A = document.getElementsByTagName("a");
		for(var i=0; i<A.length; i++) A[i].style.color=clr;


		setTimeout(function() {
			var SL_lngSrc_opt = GEBI("SL_langSrc_wpt").getElementsByTagName("option");
			for(var j=0; j<SL_lngSrc_opt.length; j++) SL_lngSrc_opt[j].setAttribute("style", "background:"+bg+" !important;color:#fff;");
			var SL_lngSrc_opt = GEBI("SL_langDst_wpt").getElementsByTagName("option");
			for(var j=0; j<SL_lngSrc_opt.length; j++) SL_lngSrc_opt[j].setAttribute("style", "background:"+bg+" !important;color:#fff;");
		}, 1000);

		GEBI("SL_AUTOKEYS").style.filter=SL_DARK;	
	}
}