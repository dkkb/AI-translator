'use strict';
var SL_DARK="invert(95%)";
var SL_Languages = CUSTOM_LANGS(FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extLanguages'));
var HK1 = "";

(function(){INIT();})();

(function(){var c2=GEBI("SL_info");
	c2.addEventListener("click",function(){
		FExtension.browserPopup.openNewTab("https://about.imtranslator.net/tutorials/presentations/imtranslator-translator-for-firefox/translator-options-firefox/");
	},!1);
})();

(function(){
	GEBI("IMT_HK1").addEventListener("click",function(){
	  HideField(1);
          Resolve_the_HK_conflicts();
	},!1);
})();


(function(){GEBI("SL_LOC").addEventListener("change",function(){SL_SAVE_LOC();},!1);} )();


(function(){GEBI("SRV1").addEventListener("click",function(){ SL_ACTIVE = GEBI("SRV1"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_ACTIVE.select();SL_KBD(1);},!1); } )();
(function(){GEBI("SRV1").addEventListener("mouseout",function(){ SL_KBD(0);},!1); } )();
(function(){GEBI("SRV1").addEventListener("keyup",function(){ if(GEBI("SRV1").value=="")GEBI('SRV1').value=FExtension.GET_localStorage("SL_tr_hk");},!1); } )();


(function(){GEBI("SL_del1").addEventListener("click",function(){SL_del(1);NoneColor(1);},!1);} )();
(function(){window.addEventListener("mousemove",function(){NoneColor(1);},!1);} )();
(function(){GEBI("SL_LNG_STATUS").addEventListener("click",function(){ SL_LANGS(); },!1); } )();
(function(){GEBI("SL_down_box").addEventListener("click",function(){ SL_LANGS(); },!1); } )();
(function(){GEBI("SL_down").addEventListener("click",function(){ SL_LANGS(); },!1); } )();
(function(){GEBI("SL_THEME").addEventListener("change",function(){SL_SAVE_THEME();},!1);} )();

//AUTOSAVE BLOCK
window.addEventListener('change',function(e){
	save_options();
},!1);
//AUTOSAVE BLOCK



function HideField(ob){
     GEBI("SL_HK"+ob).style.marginLeft="0px";
     if(GEBI("IMT_HK"+ob).checked==false) GEBI("SL_HK"+ob).style.display='block';
     else GEBI("SL_HK"+ob).style.display='none';
}


function INIT(){

  ACTIVATE_MENU_ELEMENT(11);
  CONSTRUCTOR();
  GEBI('SL_translate_container').style.opacity="1";
  GEBI("SL_LOC").value=FExtension.GET_localStorage("SL_LOCALIZATION");  

	var OB = GEBI('SL_langSrc_tr');
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
	    OB2.appendChild(document.createTextNode(SL_TMP2[1]));
	    OB.appendChild(OB2);
	}

	var OB3 = GEBI('SL_langDst_tr');
	for(var J=0; J < SL_TMP.length; J++){
	    var SL_TMP2=SL_TMP[J].split(":");
	    var OB2 = document.createElement('option');
	    v = document.createAttribute("value");
	    v.value = SL_TMP2[0];
	    OB2.setAttributeNode(v);
	    OB2.appendChild(document.createTextNode(SL_TMP2[1]));
	    OB3.appendChild(OB2);
	}


  var mySL_langSrc_tr = FExtension.GET_localStorage("SL_langSrc_tr");
  var mySL_langSrcSelect_tr = GEBI("SL_langSrc_tr");
  for (var i = 0; i < mySL_langSrcSelect_tr.options.length; i++) {
    var mySL_langSrcOption_tr = mySL_langSrcSelect_tr.options[i];
    if (mySL_langSrcOption_tr.value == mySL_langSrc_tr) {
      mySL_langSrcOption_tr.selected = "true";
      break;
    }
  }

  var mySL_langDst_tr = FExtension.GET_localStorage("SL_langDst_tr");
  var mySL_langDstSelect_tr = GEBI("SL_langDst_tr");
  for (var i = 0; i < mySL_langDstSelect_tr.options.length; i++) {
    var mySL_langDstOption_tr = mySL_langDstSelect_tr.options[i];
    if (mySL_langDstOption_tr.value == mySL_langDst_tr) {
      mySL_langDstOption_tr.selected = "true";
      break;
    }
  }


        var SL_THEMEmode = FExtension.GET_localStorage("THEMEmode");
	if(SL_THEMEmode==0)  GEBI("SL_THEME").value = 0;
	else GEBI("SL_THEME").value = 1;


  var SL_global_lng_tr = FExtension.GET_localStorage("SL_global_lng");
  if(SL_global_lng_tr=="true")  GEBI("SL_global_lng_tr").checked = true;
  else GEBI("SL_global_lng_tr").checked = false;

  if(FExtension.GET_localStorage("SL_tr_detect")=="true")  GEBI("SL_no_detect").checked = true;
  else GEBI("SL_no_detect").checked = false;

  if(FExtension.GET_localStorage("SL_tr_ptp")=="google")  GEBI("google").checked = true;
  if(FExtension.GET_localStorage("SL_tr_ptp")=="mirosoft")  GEBI("microsoft").checked = true;  
  if(FExtension.GET_localStorage("SL_tr_ptp")=="translator")  GEBI("promt").checked = true;    

  if(FExtension.GET_localStorage("SL_tr_back")=="true")  GEBI("AutoBack").checked = true;
  else GEBI("AutoBack").checked = false;

  if(FExtension.GET_localStorage("SL_tr_decoder")=="true")  GEBI("AutoDecode").checked = true;
  else GEBI("AutoDecode").checked = false;

  if(FExtension.GET_localStorage("SL_tr_russtr")=="true")  GEBI("AutoTranslit").checked = true;
  else GEBI("AutoTranslit").checked = false;

  if(FExtension.GET_localStorage("SL_tr_speller")=="true")  GEBI("AutoSpell").checked = true;
  else GEBI("AutoSpell").checked = false;

  if(FExtension.GET_localStorage("SL_tr_dictionary")=="true")  GEBI("AutoDictionary").checked = true;
  else GEBI("AutoDictionary").checked = false;

  GEBI("SRV1").value=FExtension.GET_localStorage("SL_tr_hk");
  if(FExtension.GET_localStorage("SL_tr_hk_btn")=="true")  GEBI("IMT_HK1").checked = true;
  else GEBI("IMT_HK1").checked = false;

  GEBI("SL_LOC").value=FExtension.GET_localStorage("SL_LOCALIZATION");

  HideField(1);
  save_options();
}

function CONSTRUCTOR(){
	GEBI('SL_lo').appendChild(document.createTextNode(FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extSLBG_op')));
	GEBI('SL_setLS4allTr').appendChild(document.createTextNode(FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extSLsetLS4allTr')));
	GEBI('SLSeSo').appendChild(document.createTextNode(FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extSeSo')));
	GEBI('SLSeTa').appendChild(document.createTextNode(FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extSeTa')));
	GEBI('SL_DetSoLaAu').appendChild(document.createTextNode(FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extDetSoLaAu')));
	GEBI('SL_ao').appendChild(document.createTextNode(FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extautoop')));
	GEBI('SL_auto1').appendChild(document.createTextNode(FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extBackTrans')));
	GEBI('SL_auto2').appendChild(document.createTextNode(FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extauto1')));
	GEBI('SL_auto3').appendChild(document.createTextNode(FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extauto2')));
	GEBI('SL_auto4').appendChild(document.createTextNode(FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extauto3')));
	GEBI('SL_auto5').appendChild(document.createTextNode(FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extauto4')));
	GEBI('SL_sc').appendChild(document.createTextNode(FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extHotKeys')));
	GEBI('SL_trb').appendChild(document.createTextNode(FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extOptTrBut')));
	GEBI('SL_twsc').appendChild(document.createTextNode(FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extTOMS')));	
	GEBI('SL_il').appendChild(document.createTextNode(FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extLOC')));
	GEBI('SL_preftrans').appendChild(document.createTextNode(FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extpreftr')));
	GEBI('SL_L_BOX').appendChild(document.createTextNode(FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extLangs')+":"));
	GEBI('SL_LNG_STATUS').appendChild(document.createTextNode(FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extCustomize')));

	GEBI('SL_theme_ttl').appendChild(document.createTextNode(FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extTHEME')));
	GEBI('SL_theme_1').appendChild(document.createTextNode(FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extLIGHT')));
	GEBI('SL_theme_2').appendChild(document.createTextNode(FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extDARK')));

	ACTIVATE_THEME(FExtension.GET_localStorage("THEMEmode"));
}

function save_options() {
 setTimeout(function() {
 if(VERIFY_ALL_TABS(8) == true){

  var SL_select_S = GEBI("SL_langSrc_tr");
  var SL_select_T = GEBI("SL_langDst_tr");
  if(SL_select_S.value!=SL_select_T.value){
	var TEMPprovider="google";
  	if(GEBI("promt").checked==true) TEMPprovider="promt";
  	if(GEBI("microsoft").checked==true) TEMPprovider="microsoft";
  	if(GEBI("google").checked==true) TEMPprovider="google";
	FExtension.store.set("SL_tr_ptp", TEMPprovider);
	chrome.storage.local.set({'SL_tr_ptp': TEMPprovider});


  	if(GEBI("AutoBack").checked==true){
		FExtension.store.set("SL_tr_back", "true");
		chrome.storage.local.set({'SL_tr_back': 'true'});
  	}else{
		FExtension.store.set("SL_tr_back", "false");
		chrome.storage.local.set({'SL_tr_back': 'false'});
	}
  	if(GEBI("AutoDecode").checked==true){
		FExtension.store.set("SL_tr_decoder", "true");
		chrome.storage.local.set({'SL_tr_decoder': 'true'});
  	}else{
		FExtension.store.set("SL_tr_decoder", "false");
		chrome.storage.local.set({'SL_tr_decoder': 'false'});
	}

  	if(GEBI("AutoDictionary").checked==true){
		FExtension.store.set("SL_tr_dictionary", "true");
		chrome.storage.local.set({'SL_tr_dictionary': 'true'});
  	}else{
		FExtension.store.set("SL_tr_dictionary", "false");
		chrome.storage.local.set({'SL_tr_dictionary': 'false'});
	}

  	if(GEBI("AutoSpell").checked==true){
		FExtension.store.set("SL_tr_speller", "true");
		chrome.storage.local.set({'SL_tr_speller': 'true'});
  	}else{
		FExtension.store.set("SL_tr_speller", "false");
		chrome.storage.local.set({'SL_tr_speller': 'false'});
	}

  	if(GEBI("AutoTranslit").checked==true){
		FExtension.store.set("SL_tr_russtr", "true");
		chrome.storage.local.set({'SL_tr_russtr': 'true'});
  	}else{
		FExtension.store.set("SL_tr_russtr", "false");
		chrome.storage.local.set({'SL_tr_russtr': 'false'});
	}

	FExtension.store.set("SL_LOCALIZATION", GEBI("SL_LOC").value);
	chrome.storage.local.set({'SL_LOCALIZATION': GEBI("SL_LOC").value});


    var theResp = Resolve_the_HK_conflicts();
    if(theResp == -1) return("");

    if(theResp>0 && GEBI("IMT_HK1").checked==true){
        GEBI("SL_HKerrorFF").style.display="block";
        Create_the_HK_iframe();
    } else {
        FExtension.store.set("SL_tr_hk", GEBI("SRV1").value.replace('None',''));
	chrome.storage.local.set({'SL_tr_hk': GEBI("SRV1").value.replace('None','')});

        FExtension.store.set("SL_tr_hk_btn", GEBI("IMT_HK1").checked);
	chrome.storage.local.set({'SL_tr_hk_btn': GEBI("IMT_HK1").checked});

   //------TIME STAMP--------------
	new Date().getTime();
	FExtension.store.set("SL_TS", Date.now());
	chrome.storage.local.set({'SL_TS': Date.now()});
   //==============================




  	//ImT
        var DET = GEBI("SL_no_detect").checked;
        var DET_NAME = SL_select_T.children[SL_select_T.selectedIndex].text;

	FExtension.store.set("SL_langDst_name_tr",encodeURIComponent(DET_NAME));
	chrome.storage.local.set({'SL_langDst_name_tr': encodeURIComponent(DET_NAME)});

	FExtension.store.set("SL_langSrc_tr",SL_select_S.value);
	chrome.storage.local.set({'SL_langSrc_tr': SL_select_S.value});

	FExtension.store.set("SL_langDst_tr",SL_select_T.value);
	chrome.storage.local.set({'SL_langDst_tr': SL_select_T.value});

	if(DET==true){
		FExtension.store.set("SL_tr_detect", "true");
		chrome.storage.local.set({'SL_tr_detect': 'true'});
	}else{
		FExtension.store.set("SL_tr_detect", "false");
		chrome.storage.local.set({'SL_tr_detect': 'false'});
	}


        if(GEBI("SL_global_lng_tr").checked==true){
	  FExtension.store.set("SL_global_lng", GEBI("SL_global_lng_tr").checked);
	  chrome.storage.local.set({'SL_global_lng': GEBI("SL_global_lng_tr").checked});
	  FExtension.store.set("SL_global_lng_bbl", GEBI("SL_global_lng_tr").checked);
	  chrome.storage.local.set({'SL_global_lng_bbl': GEBI("SL_global_lng_tr").checked});
	  FExtension.store.set("SL_global_lng_wpt", GEBI("SL_global_lng_tr").checked);
	  chrome.storage.local.set({'SL_global_lng_wpt': GEBI("SL_global_lng_tr").checked});
	  FExtension.store.set("SL_global_lng_it", GEBI("SL_global_lng_tr").checked);
	  chrome.storage.local.set({'SL_global_lng_it': GEBI("SL_global_lng_tr").checked});
	  FExtension.store.set("SL_global_lng_tr", GEBI("SL_global_lng_tr").checked);
	  chrome.storage.local.set({'SL_global_lng_tr': GEBI("SL_global_lng_tr").checked});

          //GT
	  FExtension.store.set("SL_langSrc", SL_select_S.value);
	  chrome.storage.local.set({'SL_langSrc': SL_select_S.value});	  
	  FExtension.store.set("SL_langDst", SL_select_T.value);
	  chrome.storage.local.set({'SL_langDst': SL_select_T.value});	  
	  FExtension.store.set("SL_langSrc2",SL_select_S.value);
	  chrome.storage.local.set({'SL_langSrc2': SL_select_S.value});	  
	  FExtension.store.set("SL_langDst2", SL_select_T.value);
	  chrome.storage.local.set({'SL_langDst2': SL_select_T.value});	  
	  FExtension.store.set("SL_no_detect", DET);
	  chrome.storage.local.set({'SL_no_detect': DET});
	  FExtension.store.set("SL_langDst_name", DET_NAME);
	  chrome.storage.local.set({'SL_langDst_name': DET_NAME});

          //BBL
          FExtension.store.set("SL_langSrc_bbl",SL_select_S.value);
	  chrome.storage.local.set({'SL_langSrc_bbl': SL_select_S.value});
          FExtension.store.set("SL_langDst_bbl",SL_select_T.value);
	  chrome.storage.local.set({'SL_langDst_bbl': SL_select_T.value});
          FExtension.store.set("SL_no_detect_bbl", DET);
	  chrome.storage.local.set({'SL_no_detect_bbl': DET});          
	  FExtension.store.set("SL_langDst_name_bbl", DET_NAME);
	  chrome.storage.local.set({'SL_langDst_name_bbl': DET_NAME});
	  //IT
	  FExtension.store.set("SL_langSrc_it",SL_select_S.value);
	  chrome.storage.local.set({'SL_langSrc_it': SL_select_S.value});
	  FExtension.store.set("SL_langDst_it",SL_select_T.value);
	  chrome.storage.local.set({'SL_langDst_it': SL_select_T.value});
	  FExtension.store.set("SL_no_detect_it", DET);
	  chrome.storage.local.set({'SL_no_detect_it': DET});
	  FExtension.store.set("SL_langDst_name_it", DET_NAME);
	  chrome.storage.local.set({'SL_langDst_name_it': DET_NAME});
	  //WPT
	  FExtension.store.set("SL_langSrc_wpt",SL_select_S.value);
	  chrome.storage.local.set({'SL_langSrc_wpt': SL_select_S.value});
	  FExtension.store.set("SL_langDst_wpt",SL_select_T.value);
	  chrome.storage.local.set({'SL_langDst_wpt': SL_select_T.value});
	  FExtension.store.set("SL_langDst_name_wpt", DET_NAME);
	  chrome.storage.local.set({'SL_langDst_name_wpt': DET_NAME});

	  //TR
	  FExtension.store.set("SL_langSrc_tr",SL_select_S.value);
	  chrome.storage.local.set({'SL_langSrc_tr': SL_select_S.value});
	  FExtension.store.set("SL_langDst_tr",SL_select_T.value);
	  chrome.storage.local.set({'SL_langDst_tr': SL_select_T.value});
	  FExtension.store.set("SL_langDst_name_tr", DET_NAME);
	  chrome.storage.local.set({'SL_langDst_name_tr': DET_NAME});
	} else {
	  FExtension.store.set("SL_langDst_name_tr", DET_NAME);
	  chrome.storage.local.set({'SL_langDst_name_tr': DET_NAME});

	  FExtension.store.set("SL_global_lng", GEBI("SL_global_lng_tr").checked);
	  chrome.storage.local.set({'SL_global_lng': GEBI("SL_global_lng_tr").checked});
	  FExtension.store.set("SL_global_lng_bbl", GEBI("SL_global_lng_tr").checked);
	  chrome.storage.local.set({'SL_global_lng_bbl': GEBI("SL_global_lng_tr").checked});
	  FExtension.store.set("SL_global_lng_wpt", GEBI("SL_global_lng_tr").checked);
	  chrome.storage.local.set({'SL_global_lng_wpt': GEBI("SL_global_lng_tr").checked});
	  FExtension.store.set("SL_global_lng_it", GEBI("SL_global_lng_tr").checked);
	  chrome.storage.local.set({'SL_global_lng_it': GEBI("SL_global_lng_tr").checked});
	  FExtension.store.set("SL_global_lng_tr", GEBI("SL_global_lng_tr").checked);
	  chrome.storage.local.set({'SL_global_lng_tr': GEBI("SL_global_lng_tr").checked});	   	   

	}
        GEBI("SL_kbd").style.display='none';
	RESET_TEMPS_TO_DEFAULT();

//	if(st==0){
		FExtension.store.set("SL_Flag", "FALSE");
		chrome.storage.local.set({'SL_Flag': 'FALSE'});

		FExtension.bg.ImTranslatorBG.SL_callbackRequest();
		FExtension.bg.ImTranslatorBG.SL_callbackRequest2();
		FExtension.bg.ImTranslatorBG.SL_callbackRequest3();
	        FExtension.bg.FExtension.browser.refreshSettings();


//	}        


     }	

  }else 	  alert(FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extS_T_L_diff'));
 } else DO_IFRAME(8);
 }, 100);
}



function Resolve_the_HK_conflicts(){
  var response=0, response1=0, response2=0, REZ ="";

  var HK0 = FExtension.GET_localStorage("SL_GLOBAL_HK_0")

  var B = 0;
  if(GEBI("IMT_HK1").checked==true) B = 1;
  var HK1 = B + "|" + GEBI("SRV1").value.replace("None","");

  var HK2 = FExtension.GET_localStorage("SL_GLOBAL_HK_2");
  var HK3 = FExtension.GET_localStorage("SL_GLOBAL_HK_3");
  var HK4 = FExtension.GET_localStorage("SL_GLOBAL_HK_4");
  var HK5 = FExtension.GET_localStorage("SL_GLOBAL_HK_5");
  var HK6 = FExtension.GET_localStorage("SL_GLOBAL_HK_6");
  var HK7 = FExtension.GET_localStorage("SL_GLOBAL_HK_7");
  var HK8 = FExtension.GET_localStorage("SL_GLOBAL_HK_8");
  var HK9 = FExtension.GET_localStorage("SL_GLOBAL_HK_9");
  var HK10 = FExtension.GET_localStorage("SL_GLOBAL_HK_10");
  var HK11 = FExtension.GET_localStorage("SL_GLOBAL_HK_11");
  var HK12 = FExtension.GET_localStorage("SL_GLOBAL_HK_12");
  var HK13 = FExtension.GET_localStorage("SL_GLOBAL_HK_13");

  if(HK1==HK0 || HK1==HK2 || HK1==HK3 || HK1==HK4 || HK1==HK5 || HK1==HK6 || HK1==HK7 || HK1==HK8 || HK1==HK9 || HK1==HK10 || HK1==HK11 || HK1==HK12 || HK1==HK13){
       response++;
  }

  for(var j=0; j<SL_KSET_taken.length; j++){
        var DK = SL_KSET_taken[j].replace(/\+/g,"");
	if(DK == GEBI("SRV1").value && GEBI("SRV1").value != "") response1++; 
  }




  if(response1!=0){ReservedSymbol("SRV1");GEBI("SRV1").value=SL_TMP;GEBI("SRV1").style.background="#fff";}

  if(response>0){
        GEBI("SL_HKerrorFF").style.display="block";
        Create_the_HK_iframe();
  }

  if(GEBI("SRV1").value=="") response=-1;

  return (response+response2+response1);
}


function Create_the_HK_iframe(){
 var frame = document.getElementById('SLHK');
 if(frame) frame.parentNode.removeChild(frame);
 if(!document.getElementById("SLHK")){
    var die = document.createElement("iframe");
    die.src =  "autohotkeys.html?id=3";
    die.name = "SLHK";
    die.id = "SLHK";
    die.width="99%";
    die.height="660px";
    die.scrolling="no";
    die.frameBorder="0";
    document.getElementById('SLHKset').appendChild(die);
 }
}

function Close_the_HK_iframe(){
  GEBI("SL_HKerrorFF").style.display="none";
}

function VERIFY(ob){
 if(GEBI("SRV1").value==""){
	GEBI('SL_kbd').innerText = FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extUseHK');
 }	
 if(VERIFY_ALL_TABS(8) != true){   
   DO_IFRAME(8);
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
  GEBI("SL_langSrc_tr").value=FExtension.GET_localStorage("SL_langSrc_tr");
  GEBI("SL_langDst_tr").value=FExtension.GET_localStorage("SL_langDst_tr");
  FExtension.store.save_LOC4CONTEXT();
  new Date().getTime();
  FExtension.store.set("SL_TS_LOC", Date.now());
  chrome.storage.local.set({'SL_TS_LOC': Date.now()});		
  FExtension.bg.ImTranslatorBG.SL_callbackRequest4LOC();
  parent.frames["menu"].location.reload();
  location.reload();
}

function GEBI(id){ return document.getElementById(id);}

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

		var LBLS = document.getElementsByClassName("SL_BG_op");
		for(var i=0; i<LBLS.length; i++) LBLS[i].style.color=clr;
		var A = document.getElementsByTagName("a");
		for(var i=0; i<A.length; i++) A[i].style.color=clr;

		setTimeout(function() {
			var SL_lngSrc_opt = GEBI("SL_langSrc_tr").getElementsByTagName("option");
			for(var j=0; j<SL_lngSrc_opt.length; j++) SL_lngSrc_opt[j].setAttribute("style", "background:"+bg+" !important;color:#fff;");
			var SL_lngSrc_opt = GEBI("SL_langDst_tr").getElementsByTagName("option");
			for(var j=0; j<SL_lngSrc_opt.length; j++) SL_lngSrc_opt[j].setAttribute("style", "background:"+bg+" !important;color:#fff;");
		}, 1000);

		GEBI("SL_AUTOKEYS").style.filter=SL_DARK;	
	}
}