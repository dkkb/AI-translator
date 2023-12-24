'use strict';
var SL_DARK="invert(95%)";
var UNBLOCK = 0;
var HK1 = "";
var HK2 = "";
var HK3 = "";
var HK4 = "";
var HK5 = "";
var HK6 = "";
var HK7 = "";
var HK8 = "";
var HK9 = "";
var HK10 = "";

(function(){GEBI("SRV1").addEventListener("click",function(){SL_ACTIVE = GEBI("SRV1"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_ACTIVE.select();},!1); } )();
(function(){GEBI("SRV1").addEventListener("mouseout",function(){NoneColor(1);},!1); } )();
(function(){GEBI("SL_del1").addEventListener("click",function(){SL_delme(1);},!1);} )();

(function(){GEBI("SRV2").addEventListener("click",function(){ SL_ACTIVE = GEBI("SRV2"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_ACTIVE.select();},!1); } )();
(function(){GEBI("SRV2").addEventListener("mouseout",function(){NoneColor(2);},!1); } )();
(function(){GEBI("SRV2").addEventListener("keyup",function(){NoBlank(2);},!1); } )();

(function(){GEBI("SRV3").addEventListener("click",function(){ SL_ACTIVE = GEBI("SRV3"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_ACTIVE.select();},!1); } )();
(function(){GEBI("SRV3").addEventListener("mouseout",function(){NoneColor(3);},!1); } )();
(function(){GEBI("SL_del3").addEventListener("click",function(){SL_delme(3);},!1);} )();

(function(){GEBI("SRV4").addEventListener("click",function(){ SL_ACTIVE = GEBI("SRV4"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_ACTIVE.select();},!1); } )();
(function(){GEBI("SRV4").addEventListener("mouseout",function(){NoneColor(4);},!1); } )();
(function(){GEBI("SRV4").addEventListener("keyup",function(){NoBlank(4);},!1); } )();

(function(){GEBI("SRV5").addEventListener("click",function(){ SL_ACTIVE = GEBI("SRV5"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_ACTIVE.select();},!1); } )();
(function(){GEBI("SRV5").addEventListener("mouseout",function(){NoneColor(5);},!1); } )();
(function(){GEBI("SL_del5").addEventListener("click",function(){SL_delme(5);},!1);} )();

(function(){GEBI("SRV6").addEventListener("click",function(){ SL_ACTIVE = GEBI("SRV6"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_ACTIVE.select();},!1); } )();
(function(){GEBI("SRV6").addEventListener("mouseout",function(){NoneColor(6);},!1); } )();
(function(){GEBI("SRV6").addEventListener("keyup",function(){NoBlank(6);},!1); } )();

(function(){GEBI("SRV7").addEventListener("click",function(){ SL_ACTIVE = GEBI("SRV7"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_ACTIVE.select();},!1); } )();
(function(){GEBI("SRV7").addEventListener("mouseout",function(){NoneColor(7);},!1); } )();
(function(){GEBI("SRV7").addEventListener("keyup",function(){NoBlank(7);},!1); } )();

(function(){GEBI("SRV8").addEventListener("click",function(){ SL_ACTIVE = GEBI("SRV8"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_ACTIVE.select();},!1); } )();
(function(){GEBI("SRV8").addEventListener("mouseout",function(){NoneColor(8);},!1); } )();
(function(){GEBI("SRV8").addEventListener("keyup",function(){NoBlank(8);},!1); } )();

(function(){GEBI("SRV9").addEventListener("click",function(){ SL_ACTIVE = GEBI("SRV9"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_ACTIVE.select();},!1); } )();
(function(){GEBI("SRV9").addEventListener("mouseout",function(){NoneColor(9);},!1); } )();
(function(){GEBI("SRV9").addEventListener("keyup",function(){NoBlank(9);},!1); } )();

(function(){GEBI("SRV10").addEventListener("click",function(){ SL_ACTIVE = GEBI("SRV10"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_ACTIVE.select();},!1); } )();
(function(){GEBI("SRV10").addEventListener("mouseout",function(){NoneColor(10);},!1); } )();
(function(){GEBI("SL_del10").addEventListener("click",function(){SL_delme(10);},!1);} )();

(function(){GEBI("SRV11").addEventListener("click",function(){ SL_ACTIVE = GEBI("SRV11"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_ACTIVE.select();},!1); } )();
(function(){GEBI("SRV11").addEventListener("mouseout",function(){ NoneColor(11);},!1); } )();
(function(){GEBI("SRV11").addEventListener("keyup",function(){ if(GEBI("SRV11").value=="")GEBI('SRV11').value=FExtension.GET_localStorage("SL_change_lang_HK_it");},!1); } )();


(function(){GEBI("SL_LOC").addEventListener("change",function(){SL_SAVE_LOC();},!1);} )();

//AUTOSAVE BLOCK
window.addEventListener('change',function(e){
	save_options(0);
},!1);
//AUTOSAVE BLOCK

(function(){window.addEventListener("mousemove",function(){
	ALL_NONES();
},!1);} )();


//(function(){GEBI("SL_LOC").addEventListener("change",function(){SL_SAVE_LOC();},!1);} )();

(function(){GEBI("SL_info").addEventListener("click",function(){FExtension.browserPopup.openNewTab(this.href);},!1);} )();

(function(){GEBI("SL_THEME").addEventListener("change",function(){SL_SAVE_THEME();},!1);} )();

(function(){
	GEBI("SRV1").addEventListener("keyup",function(){
 	 GEBI("SL_kbd").style.display="none";
	 DefaultText();
	 setTimeout(function() {Resolve_the_HK_conflicts();}, 1800);	        
	},!1);
})();

(function(){
	GEBI("SRV2").addEventListener("keyup",function(){
 	 GEBI("SL_kbd").style.display="none";
	 DefaultText();
	 setTimeout(function() {Resolve_the_HK_conflicts();}, 1800);	        
	},!1);
})();

(function(){
	GEBI("SRV3").addEventListener("keyup",function(){
 	 GEBI("SL_kbd").style.display="none";
	 DefaultText();
	 setTimeout(function() {Resolve_the_HK_conflicts();}, 1800);	        
	},!1);
})();

(function(){
	GEBI("SRV4").addEventListener("keyup",function(){
 	 GEBI("SL_kbd").style.display="none";
	 DefaultText();
	 setTimeout(function() {Resolve_the_HK_conflicts();}, 1800);	        
	},!1);
})();


(function(){
	GEBI("SRV5").addEventListener("keyup",function(){
 	 GEBI("SL_kbd").style.display="none";
	 DefaultText();
	 setTimeout(function() {Resolve_the_HK_conflicts();}, 1800);
	},!1);
})();

(function(){
	GEBI("SRV6").addEventListener("keyup",function(){
 	 GEBI("SL_kbd").style.display="none";
	 DefaultText();
	 setTimeout(function() {Resolve_the_HK_conflicts();}, 1800);
	},!1);
})();
(function(){
	GEBI("SRV7").addEventListener("keyup",function(){
 	 GEBI("SL_kbd").style.display="none";
	 DefaultText();
	 setTimeout(function() {Resolve_the_HK_conflicts();}, 1800);
	},!1);
})();

(function(){
	GEBI("SRV8").addEventListener("keyup",function(){
 	 GEBI("SL_kbd").style.display="none";
	 DefaultText();
	 setTimeout(function() {Resolve_the_HK_conflicts();}, 1800);
	},!1);
})();

(function(){
	GEBI("SRV9").addEventListener("keyup",function(){
 	 GEBI("SL_kbd").style.display="none";
	 DefaultText();
	 setTimeout(function() {Resolve_the_HK_conflicts();}, 1800);
	},!1);
})();

(function(){
	GEBI("SRV10").addEventListener("keyup",function(){
 	 GEBI("SL_kbd").style.display="none";
	 DefaultText();
	 setTimeout(function() {Resolve_the_HK_conflicts();}, 1800);
	},!1);
})();



(function(){
	GEBI("SRV1").addEventListener("mousedown",function(){
 	GEBI("SL_kbd").style.display="none";	},!1);
})();

(function(){
	GEBI("SRV2").addEventListener("mousedown",function(){
 	GEBI("SL_kbd").style.display="none";	},!1);
})();

(function(){
	GEBI("SRV3").addEventListener("mousedown",function(){
 	GEBI("SL_kbd").style.display="none";	},!1);
})();

(function(){
	GEBI("SRV4").addEventListener("mousedown",function(){
 	GEBI("SL_kbd").style.display="none";	},!1);
})();


(function(){
	GEBI("SRV5").addEventListener("mousedown",function(){
 	GEBI("SL_kbd").style.display="none";	},!1);
})();

(function(){
	GEBI("SRV6").addEventListener("mousedown",function(){
 	GEBI("SL_kbd").style.display="none";	},!1);
})();

(function(){
	GEBI("SRV7").addEventListener("mousedown",function(){
 	GEBI("SL_kbd").style.display="none";	},!1);
})();

(function(){
	GEBI("SRV8").addEventListener("mousedown",function(){
 	GEBI("SL_kbd").style.display="none";	},!1);
})();

(function(){
	GEBI("SRV9").addEventListener("mousedown",function(){
 	GEBI("SL_kbd").style.display="none";	},!1);
})();

(function(){
	GEBI("SRV10").addEventListener("mousedown",function(){
 	GEBI("SL_kbd").style.display="none";	},!1);
})();


(function(){
	GEBI("IMT_HK1").addEventListener("click",function(){
		GEBI("SL_kbd").style.display="none";
		if(GEBI("IMT_HK1").checked==false) GEBI("SL_HK1").style.display='block';
		else GEBI("SL_HK1").style.display='none';
	        Resolve_the_HK_conflicts();
	},!1);
})();

(function(){
	GEBI("IMT_HK2").addEventListener("click",function(){
		GEBI("SL_kbd").style.display="none";
		if(GEBI("IMT_HK2").checked==false) GEBI("SL_HK2").style.display='block';
		else GEBI("SL_HK2").style.display='none';
	        Resolve_the_HK_conflicts();
	},!1);
})();

(function(){
	GEBI("IMT_HK3").addEventListener("click",function(){
		GEBI("SL_kbd").style.display="none";
		if(GEBI("IMT_HK3").checked==false) GEBI("SL_HK3").style.display='block';
		else GEBI("SL_HK3").style.display='none';
	        Resolve_the_HK_conflicts();
	},!1);
})();

(function(){
	GEBI("IMT_HK4").addEventListener("click",function(){
		GEBI("SL_kbd").style.display="none";
		if(GEBI("IMT_HK4").checked==false) GEBI("SL_HK4").style.display='block';
		else GEBI("SL_HK4").style.display='none';
	        Resolve_the_HK_conflicts();
	},!1);
})();

(function(){
	GEBI("IMT_HK5").addEventListener("click",function(){
		GEBI("SL_kbd").style.display="none";
		if(GEBI("IMT_HK5").checked==false) GEBI("SL_HK5").style.display='block';
		else GEBI("SL_HK5").style.display='none';
	        Resolve_the_HK_conflicts();
	},!1);
})();

(function(){
	GEBI("IMT_HK6").addEventListener("click",function(){
	 	GEBI("SL_kbd").style.display="none";
		if(GEBI("IMT_HK6").checked==false) GEBI("SL_HK6").style.display='block';
		else GEBI("SL_HK6").style.display='none';
	        Resolve_the_HK_conflicts();
	},!1);
})();

(function(){
	GEBI("IMT_HK7").addEventListener("click",function(){
	 	GEBI("SL_kbd").style.display="none";
		if(GEBI("IMT_HK7").checked==false) GEBI("SL_HK7").style.display='block';
		else GEBI("SL_HK7").style.display='none';
	        Resolve_the_HK_conflicts();
	},!1);
})();

(function(){
	GEBI("IMT_HK8").addEventListener("click",function(){
	 	GEBI("SL_kbd").style.display="none";
		if(GEBI("IMT_HK8").checked==false) GEBI("SL_HK8").style.display='block';
		else GEBI("SL_HK8").style.display='none';
	        Resolve_the_HK_conflicts();
	},!1);
})();

(function(){
	GEBI("IMT_HK9").addEventListener("click",function(){
	 	GEBI("SL_kbd").style.display="none";
		if(GEBI("IMT_HK9").checked==false) GEBI("SL_HK9").style.display='block';
		else GEBI("SL_HK9").style.display='none';
	        Resolve_the_HK_conflicts();
	},!1);
})();

(function(){
	GEBI("IMT_HK10").addEventListener("click",function(){
	 	GEBI("SL_kbd").style.display="none";
		if(GEBI("IMT_HK10").checked==false) GEBI("SL_HK10").style.display='block';
		else GEBI("SL_HK10").style.display='none';
	        Resolve_the_HK_conflicts();
	},!1);
})();

(function(){
	GEBI("IMT_HK11").addEventListener("click",function(){
	 	GEBI("SL_kbd").style.display="none";
		if(GEBI("IMT_HK11").checked==false) GEBI("SL_HK11").style.display='block';
		else GEBI("SL_HK11").style.display='none';
	},!1);
})();

(function(){
	GEBI("IMT_HK12").addEventListener("click",function(){
	 	GEBI("SL_kbd").style.display="none";
		if(GEBI("IMT_HK12").checked==false) GEBI("SL_HK12").style.display='block';
		else GEBI("SL_HK12").style.display='none';
	},!1);
})();

(function(){INIT();})();


function GEBI(id){ return document.getElementById(id);}

function CONSTRUCTOR(){


  GEBI("SL_ttl").appendChild(document.createTextNode(FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extHotKeys')));
  GEBI("SL_info").title=FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extHelp');
  var tws = FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extTOMS');
  GEBI('SL_twsc1').appendChild(document.createTextNode(tws));
  GEBI('SL_twsc3').appendChild(document.createTextNode(tws));
  GEBI('SL_twsc5').appendChild(document.createTextNode(tws));
  GEBI('SL_twsc10').appendChild(document.createTextNode(tws));
  GEBI('SL_twsc6').appendChild(document.createTextNode(FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extOptions')));
  GEBI('SL_twsc').appendChild(document.createTextNode(FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extOptTrBut')));
  GEBI('SL_cit').appendChild(document.createTextNode(FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extCMct')));
  GEBI('SL_OptTrBut').appendChild(document.createTextNode(FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extOptTrBut')));
  GEBI('SL_InvTr').appendChild(document.createTextNode(FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extInvTr')));
  GEBI('SL_il').appendChild(document.createTextNode(FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extLOC')));
  GEBI('SL_CLOSE').appendChild(document.createTextNode(FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extClose')));
  GEBI('SL_theme_ttl').appendChild(document.createTextNode(FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extTHEME')));
  GEBI('SL_theme_1').appendChild(document.createTextNode(FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extLIGHT')));
  GEBI('SL_theme_2').appendChild(document.createTextNode(FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extDARK')));
  GEBI('SL_tr_with_target').appendChild(document.createTextNode(FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extSeTa')));
  switch(PLATFORM){
	 case "Chrome": GEBI('SL_info').href="https://about.imtranslator.net/tutorials/presentations/imtranslator-translator-for-firefox/shortcuts-options/"; break;
  }
  ACTIVATE_THEME(FExtension.GET_localStorage("THEMEmode"));

}


function INIT(){
  GEBI('SL_translate_container').style.opacity="1";
  ACTIVATE_MENU_ELEMENT(9);
  GEBI("SL_LOC").value=FExtension.GET_localStorage("SL_LOCALIZATION");
  CONSTRUCTOR();
  DefaultText();

  var tempHK1 = FExtension.GET_localStorage("SL_HKset").split("|");
  if(tempHK1[2]=="true"){
	 GEBI("IMT_HK1").checked=true;
         GEBI("SL_HK1").style.display="none";
  } else {
	 GEBI("IMT_HK1").checked=false;
         GEBI("SL_HK1").style.display="block";
  }
  GEBI("SRV1").value=FExtension.GET_localStorage("SL_HK_gt1");

  var tempHK2 = FExtension.GET_localStorage("SL_HKset_inv").split("|");
  if(tempHK2[2]=="true"){
	 GEBI("IMT_HK2").checked=true;
         GEBI("SL_HK2").style.display="none";
  } else {
	 GEBI("IMT_HK2").checked=false;
         GEBI("SL_HK2").style.display="block";
  }
  GEBI("SRV2").value=FExtension.GET_localStorage("SL_HK_gt2");
                             
  var tempHK3 = FExtension.GET_localStorage("SL_FK_box1");
  if(tempHK3=="true"){
	 GEBI("IMT_HK3").checked=true;
         GEBI("SL_HK3").style.display="none";
  } else {
	 GEBI("IMT_HK3").checked=false;
         GEBI("SL_HK3").style.display="block";
  }
  GEBI("SRV3").value=FExtension.GET_localStorage("SL_HK_it1");

  var tempHK4 = FExtension.GET_localStorage("SL_FK_box2");
  if(tempHK4=="true"){
	 GEBI("IMT_HK4").checked=true;
         GEBI("SL_HK4").style.display="none";
  } else {
	 GEBI("IMT_HK4").checked=false;
         GEBI("SL_HK4").style.display="block";
  }
  GEBI("SRV4").value=FExtension.GET_localStorage("SL_HK_it2");

  var tempHK5 = FExtension.GET_localStorage("SL_translation_mos_bbl");
  if(tempHK5=="true"){
	 GEBI("IMT_HK5").checked=true;
         GEBI("SL_HK5").style.display="none";
  } else {
	 GEBI("IMT_HK5").checked=false;
         GEBI("SL_HK5").style.display="block";
  }
  GEBI("SRV5").value=FExtension.GET_localStorage("SL_HK_bb1");


  var tempHK6 = FExtension.GET_localStorage("SL_HK_wptbox1");
  if(tempHK6=="true"){
	 GEBI("IMT_HK6").checked=true;
         GEBI("SL_HK6").style.display="none";
  } else {
	 GEBI("IMT_HK6").checked=false;
         GEBI("SL_HK6").style.display="block";
  }
  GEBI("SRV6").value=FExtension.GET_localStorage("SL_HK_wpt1");;

  var tempHK7 = FExtension.GET_localStorage("SL_HK_wptbox2");
  if(tempHK7=="true"){
	 GEBI("IMT_HK7").checked=true;
         GEBI("SL_HK7").style.display="none";
  } else {
	 GEBI("IMT_HK7").checked=false;
         GEBI("SL_HK7").style.display="block";
  }
  GEBI("SRV7").value=FExtension.GET_localStorage("SL_HK_wpt2");

  var tempHK8 = FExtension.GET_localStorage("SL_HK_optbox");
  if(tempHK8=="true"){
	 GEBI("IMT_HK8").checked=true;
         GEBI("SL_HK8").style.display="none";
  } else {
	 GEBI("IMT_HK8").checked=false;
         GEBI("SL_HK8").style.display="block";
  }
  GEBI("SRV8").value=FExtension.GET_localStorage("SL_HK_opt");

  var tempHK9 = FExtension.GET_localStorage("SL_HK_btnbox");
  if(tempHK9=="true"){
	 GEBI("IMT_HK9").checked=true;
         GEBI("SL_HK9").style.display="none";
  } else {
	 GEBI("IMT_HK9").checked=false;
         GEBI("SL_HK9").style.display="block";
  }
  GEBI("SRV9").value=FExtension.GET_localStorage("SL_HK_btn");

  var tempHK10 = FExtension.GET_localStorage("SL_tr_hk_btn");
  if(tempHK10=="true"){
	 GEBI("IMT_HK10").checked=true;
         GEBI("SL_HK10").style.display="none";
  } else {
	 GEBI("IMT_HK10").checked=false;
         GEBI("SL_HK10").style.display="block";
  }
  GEBI("SRV10").value=FExtension.GET_localStorage("SL_tr_hk");

  var tempHK11 = FExtension.GET_localStorage("SL_change_lang_HKbox_it");
  if(tempHK11=="true"){
	 GEBI("IMT_HK11").checked=true;
         GEBI("SL_HK11").style.display="none";
  } else {
	 GEBI("IMT_HK11").checked=false;
         GEBI("SL_HK11").style.display="block";
  }

  GEBI("SRV11").value = FExtension.GET_localStorage("SL_change_lang_HK_it");


  var tempHK12 = FExtension.GET_localStorage("SL_HK_bb2box");
  if(tempHK12=="true"){
	 GEBI("IMT_HK12").checked=true;
         GEBI("SL_HK12").style.display="none";
  } else {
	 GEBI("IMT_HK12").checked=false;
         GEBI("SL_HK12").style.display="block";
  }
  GEBI("SRV12").value=FExtension.GET_localStorage("SL_HK_bb2").replace("Escape","Esc");



  var SL_THEMEmode = FExtension.GET_localStorage("THEMEmode");
  if(SL_THEMEmode==0)  GEBI("SL_THEME").value = 0;
  else GEBI("SL_THEME").value = 1;

  ALL_NONES();

  Resolve_the_HK_conflicts();
}

function save_options(){
 setTimeout(function() {
 if(UNBLOCK == 0) {
  var result = Resolve_the_HK_conflicts();
  if (result==0){
	  GEBI("HK_conflicts_msg").iinerText="";

	        // GT
		FExtension.store.set("SL_HKset", "3|88|"+GEBI("IMT_HK1").checked);
		chrome.storage.local.set({'SL_HKset': '3|88|'+GEBI("IMT_HK1").checked});
		FExtension.store.set("SL_HKset_inv", "3|90|"+GEBI("IMT_HK2").checked);
		chrome.storage.local.set({'SL_HKset_inv': '3|90|'+GEBI("IMT_HK2").checked});
		if(GEBI('SRV1').value!="None"){
			FExtension.store.set("SL_HK_gt1", GEBI('SRV1').value);
			chrome.storage.local.set({'SL_HK_gt1': GEBI('SRV1').value});
		}else{
			FExtension.store.set("SL_HK_gt1", "");
			chrome.storage.local.set({'SL_HK_gt1': ''});
		}
		FExtension.store.set("SL_HK_gt2", GEBI("SRV2").value);
		chrome.storage.local.set({'SL_HK_gt2': GEBI('SRV2').value});

	        // IT
		FExtension.store.set("SL_FK_box1", GEBI("IMT_HK3").checked);
		chrome.storage.local.set({'SL_FK_box1': GEBI("IMT_HK3").checked});
		if(GEBI('SRV3').value!="None"){
			FExtension.store.set("SL_HK_it1", GEBI('SRV3').value);
			chrome.storage.local.set({'SL_HK_it1': GEBI('SRV3').value});
		}else{
			FExtension.store.set("SL_HK_it1", "");
			chrome.storage.local.set({'SL_HK_it1': ''});
		}
		FExtension.store.set("SL_FK_box2", GEBI("IMT_HK4").checked);
		chrome.storage.local.set({'SL_FK_box2': GEBI("IMT_HK4").checked});
		FExtension.store.set("SL_HK_it2",GEBI("SRV4").value);
		chrome.storage.local.set({'SL_HK_it2': GEBI("SRV4").value});



		FExtension.store.set("SL_change_lang_HKbox_it", GEBI("IMT_HK11").checked);
		chrome.storage.local.set({'SL_change_lang_HKbox_it': GEBI("IMT_HK11").checked});
		FExtension.store.set("SL_change_lang_HK_it",GEBI("SRV11").value);
		chrome.storage.local.set({'SL_change_lang_HK_it': GEBI("SRV11").value});


	        // BBL
		FExtension.store.set("SL_translation_mos_bbl", GEBI("IMT_HK5").checked);
		chrome.storage.local.set({'SL_translation_mos_bbl': GEBI("IMT_HK5").checked});
		if(GEBI('SRV5').value!="None"){
			FExtension.store.set("SL_HK_bb1",GEBI("SRV5").value);
			chrome.storage.local.set({'SL_HK_bb1': GEBI("SRV5").value});
		}else{
			FExtension.store.set("SL_HK_bb1","");
			chrome.storage.local.set({'SL_HK_bb1': ''});
		}

	        // WPT
		FExtension.store.set("SL_HK_wptbox1", GEBI("IMT_HK6").checked);
		chrome.storage.local.set({'SL_HK_wptbox1': GEBI("IMT_HK6").checked});
		FExtension.store.set("SL_HK_wpt1",GEBI("SRV6").value);
		chrome.storage.local.set({'SL_HK_wpt1': GEBI("SRV6").value});
		FExtension.store.set("SL_HK_wptbox2", GEBI("IMT_HK7").checked);
		chrome.storage.local.set({'SL_HK_wptbox2': GEBI("IMT_HK7").checked});
		FExtension.store.set("SL_HK_wpt2",GEBI("SRV7").value);
		chrome.storage.local.set({'SL_HK_wpt2': GEBI("SRV7").value});

	        // OPT
		FExtension.store.set("SL_HK_optbox", GEBI("IMT_HK8").checked);
		chrome.storage.local.set({'SL_HK_optbox': GEBI("IMT_HK8").checked});
		FExtension.store.set("SL_HK_opt",GEBI("SRV8").value);
		chrome.storage.local.set({'SL_HK_opt': GEBI("SRV8").value});

	        // BTN
		FExtension.store.set("SL_HK_btnbox", GEBI("IMT_HK9").checked);
		chrome.storage.local.set({'SL_HK_btnbox': GEBI("IMT_HK9").checked});
		FExtension.store.set("SL_HK_btn",GEBI("SRV9").value);
		chrome.storage.local.set({'SL_HK_btn': GEBI("SRV9").value});

		FExtension.store.set("SL_HK_bb2box", GEBI("IMT_HK12").checked);
		chrome.storage.local.set({'SL_HK_bb2box': GEBI("IMT_HK12").checked});
		FExtension.store.set("SL_HK_bb2",GEBI("SRV12").value);
		chrome.storage.local.set({'SL_HK_bb2': GEBI("SRV12").value});

	        // TR
		FExtension.store.set("SL_tr_hk_btn", GEBI("IMT_HK10").checked);
		chrome.storage.local.set({'SL_tr_hk_btn': GEBI("IMT_HK10").checked});
		FExtension.store.set("SL_tr_hk",GEBI("SRV10").value);
		chrome.storage.local.set({'SL_tr_hk': GEBI("SRV10").value});


		FExtension.bg.ImTranslatorBG.SL_callbackRequest();
		FExtension.bg.ImTranslatorBG.SL_callbackRequest2();
		FExtension.bg.ImTranslatorBG.SL_callbackRequest3();
		FExtension.bg.ImTranslatorBG.SL_callbackRequest4();
	        FExtension.bg.FExtension.browser.refreshSettings();


  }	
 }
 }, 100);
}




function Resolve_the_HK_conflicts(){
  UNBLOCK = 1;
  var response=0, response2=0, REZ ="";
  var HK = new Array(11);
  for(var j=0; j<HK.length; j++) GEBI("SL_HK_TR"+(j+1)).className="SLTR";
  HK[0] = GEBI("SRV1").value;
  HK[1] = GEBI("SRV2").value;
  HK[2] = GEBI("SRV3").value;
  HK[3] = GEBI("SRV4").value;
  HK[4] = GEBI("SRV5").value;
  HK[5] = GEBI("SRV6").value;
  HK[6] = GEBI("SRV7").value;
  HK[7] = GEBI("SRV8").value;
  HK[8] = GEBI("SRV9").value;
  HK[9] = GEBI("SRV10").value;
  HK[10] = GEBI("SRV11").value;

  for(var i=0; i<HK.length; i++){
   for(j=0; j<HK.length; j++){
     if(HK[j] == HK[i] && j!=i){
       GEBI("SL_HK_TR"+(j+1)).className="SLTR_";
       response++;
     }
   }
  }
  for(var i=0; i<HK.length; i++){
   var tmp = HK[i].split("|");
   for(var j=0; j<SL_KSET_taken.length; j++){
	if(SL_KSET_taken[j].replace(/\+/g,"") == tmp[1]){
	        REZ = tmp[1];
       		response2++;		
	} 
   }
  }

  if(response>0){
         if(response2!=0) GEBI("SL_kbd").style.display="none";
         GEBI('HK_conflicts_msg').innerText = FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extkeymsg1')+ " " + FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extkeymsg2');
  }else {
     if(response2!=0){
         GEBI("SL_kbd").style.display="block";
	 ReservedSymbol2(REZ);
     }else DefaultText();
  }
  UNBLOCK = 0;
  return (response+response2);
}

function DefaultText(){
  GEBI('HK_conflicts_msg').innerText = FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extUseHK');
}


function VERIFY(ob){
  for(var i=1; i<=10; i++){
	 GEBI('SRV'+i).style.background="#fff";
	 if(GEBI('SRV'+i).value=="") NoBlank(ob); 
  }
 return false;
}

function SL_delme(ob){
 UNBLOCK = 1;
 GEBI('SRV'+ob).value="None";
 GEBI('SRV'+ob).style.color="#ccc";
 Resolve_the_HK_conflicts();
 save_options();
}

function NoBlank(ob){
 GEBI("SL_kbd").style.display="none";
 if(SL_ACTIVE.value==""){
   SL_ACTIVE.value=SL_TMP;GEBI('SRV'+ob).style.background="#fff"; DefaultText();
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

function ReservedSymbol2(k){
	GEBI('SL_kbd').style.display="block";
	GEBI('SL_kbd').style.width="150px;"
	GEBI('SL_kbd').style.marginLeft="150px;"
        GEBI('SL_kbd').style.background="#FFDFD7";
        var txt = FExtension.element(FExtension.GET_localStorage("SL_LOCALIZATION"),'extResByChrome')
        if(PLATFORM=="Opera") txt=txt.replace("Chrome","Opera");
	GEBI('SL_kbd').innerText="'"+k.replace(/\s/g,"")+"' " + txt;
	Resolve_the_HK_conflicts();	
}

function ACTIVATE_THEME(st){
 	if(st==1){
		var clr="#BF7D44";
		GEBI("SL_translate_container").style.filter=SL_DARK;
		GEBI("HK_conflicts_msg").style.filter=SL_DARK;
		var A = document.getElementsByTagName("a");
		for(var i=0; i<A.length; i++) A[i].style.color=clr;
	}
}

function ALL_NONES(){
	NoneColor(1);
	NoneColor(2);
	NoneColor(3);
	NoneColor(4);
	NoneColor(5);
	NoneColor(6);
	NoneColor(7);
	NoneColor(8);
	NoneColor(9);
	NoneColor(10);
	NoneColor(11);
}