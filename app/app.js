(function(){
  var defineFun;
  var requireFun;
  
  if (typeof exports == "object" && typeof module == "object"){ // CommonJS
    requireFun = function(modulesAr, callback, errBack){
      try{
        var i = 0;
        var l = modulesAr.length;
        var args = [];
        for (i; i < l; ++i){
          args.push(require(modulesAr[i]));
        };
      }catch(e){
        errBack(e);
        return;
      };
      callback.apply(callback, args);
    };
    defineFun = function(requireAr, callback){
      requireFun(requireAr, function(){
        module.exports = callback.apply(callback, arguments);
      });
    };
    
  }else if (typeof define == "function" && define.amd){ // AMD
    var _define = define;
    requireFun = require;
    
    defineFun = function(par1, par2){
      if (par1 instanceof Array){
        par1.unshift("require");
      }else{
        par2 = par1;
        par1 = ["require"];
      };
      _define(par1, function(){
        requireFun = arguments[0];
        var args = [];
        for (var i = 1; i < arguments.length; ++i){
          args.push(arguments[i]);
        };
        return par2.apply(par2, args);
      });
    };
    requireFun = require;
    
  }else{ // Plain browser env
    alert("not working out!");
    
  };
  defineFun(["promiseland"], function(promiseland){
var __require = requireFun;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
var classSystem = promiseland.classSystem;
var __requireFun = function(parModule){
      var returnPromise = new __Promise();
      try{__require([parModule], function(m){
        if (promiseland.isPromiseLandPromisingModule(m)){
          m.then(function(realm){returnPromise.resolve(realm);}, function(e){returnPromise.reject(e);});
        }else{
          returnPromise.resolve(m);
        };
        }, function(err){ returnPromise.reject(err); });
      }catch(e){ returnPromise.reject(e); };
      return returnPromise.promise;};
    var Callback = promiseland.Callback;
if (promiseland._hasModule({ hashStr: "437868122b012ec894125f576c5a6eca" })){ return promiseland._getModule("437868122b012ec894125f576c5a6eca"); };
var PL$17/*JSON*/;try{PL$17/*JSON*/ = JSON;}catch(e){};
var PL$22/*Promise*/;try{PL$22/*Promise*/ = Promise;}catch(e){};
var PL$47/*console*/;try{PL$47/*console*/ = console;}catch(e){};
var PL$63/*Callback*/;try{PL$63/*Callback*/ = Callback;}catch(e){};
var PL$64/*setTimeout*/;try{PL$64/*setTimeout*/ = setTimeout;}catch(e){};
var PL$69/*document*/;try{PL$69/*document*/ = document;}catch(e){};
var PL$1 = (function(){
"use strict";
var PL$5/*peerConnection*/;
var PL$3/*RtConnection*/;
var PL$42/*currentOffer*/;
var _TPL$42/*currentOffer*/;
var PL$49/*makeOffer*/;
var PL$57/*takeOffer*/;
var PL$66/*wait*/;
var PL$67/*localConnection*/;
var _TPL$67/*localConnection*/;
var PL$2/*type:RtConnection*/ = classSystem._createProvisionalClass();
PL$3/*RtConnection*/ = PL$2/*type:RtConnection*/;
var PL$4/*RtConnection-constructor*/ = undefined;classSystem.readyPromise(PL$2/*type:RtConnection*/).then(function(parType){PL$2/*type:RtConnection*/ = parType;PL$4/*RtConnection-constructor*/ = classSystem.getTypeConstructor(PL$2/*type:RtConnection*/);});var PL$50/*type:RtConnection**/ = classSystem._createPromiseOfClass(PL$2/*type:RtConnection*/);
var PL$51/*RtConnection**/ = PL$50/*type:RtConnection**/;
var PL$52/*RtConnection*-constructor*/ = undefined;classSystem.readyPromise(PL$50/*type:RtConnection**/).then(function(parType){PL$50/*type:RtConnection**/ = parType;PL$52/*RtConnection*-constructor*/ = classSystem.getTypeConstructor(PL$50/*type:RtConnection**/);});var PL$49/*makeOffer*/ = (function(f){
promiseland.registerRemote("server", "437868122b012ec894125f576c5a6eca", "PL$48", f, (classSystem.createFunctionType({ "return": classSystem.getBuiltinType("var"), arguments: [PL$2/*type:RtConnection*/]})));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("437868122b012ec894125f576c5a6eca", "PL$48", arguments);
}
};
})(function(PL$43/*parOffer*/){
var PL$44 = new __Promise();
var PL$45 = function(code){ return function(res){ try{code(res);}catch(e){ if (_TPL$43/*parOffer*/){ _TPL$43/*parOffer*/();};PL$44.reject(e); }; }; };
var PL$46 = function(e){ if (_TPL$43/*parOffer*/){ _TPL$43/*parOffer*/();};PL$44.reject(e); };
var _TPL$43/*parOffer*/;
if(PL$43/*parOffer*/){ _TPL$43/*parOffer*/ = PL$43/*parOffer*/[1];
PL$43/*parOffer*/ = PL$43/*parOffer*/[0];}
PL$45(function(){;
PL$47/*console*/["log"]("exec make offer");;
/*tracked assign*/(function(v){
if (_TPL$42/*currentOffer*/){ _TPL$42/*currentOffer*/(); };
PL$42/*currentOffer*/ = v;
if (v){
_TPL$42/*currentOffer*/ = v[2]();
}else{
_TPL$42/*currentOffer*/ = undefined;
};
return v;
})(PL$43/*parOffer*/)/*end assign*/
;;
if (_TPL$43/*parOffer*/){ _TPL$43/*parOffer*/();};PL$44.resolve(); return;;
})();
return PL$44;
});
var PL$57/*takeOffer*/ = (function(f){
promiseland.registerRemote("server", "437868122b012ec894125f576c5a6eca", "PL$56", f, (classSystem.createFunctionType({ "return": PL$50/*type:RtConnection**/, arguments: []})));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("437868122b012ec894125f576c5a6eca", "PL$56", arguments);
}
};
})((function(t){return t;})(function(){
var PL$53;
var _TPL$53;
(function(){ var vAr = new PL$52/*RtConnection*-constructor*/(); PL$53 = vAr[0]; _TPL$53 = vAr[1]; })();var PL$54 = function(code){ return function(res){ try{code(res);}catch(e){ PL$53.reject(e); }; }; };
var PL$55 = function(e){ PL$53.reject(e); };
PL$54(function(){;
PL$47/*console*/["log"]("executing take offer");;
PL$47/*console*/["log"](PL$42/*currentOffer*/[5]["local"]);;
PL$53.resolve((function(v){ if(!v){ return; }; return [v, v[2]()];})(PL$42/*currentOffer*/)); return;;
PL$53.resolve(); return;;
})();
return [PL$53, _TPL$53];
}));
var PL$66/*wait*/ = function(PL$58/*t*/){
var PL$59 = new __Promise();
var PL$60 = function(code){ return function(res){ try{code(res);}catch(e){ PL$59.reject(e); }; }; };
var PL$61 = function(e){ PL$59.reject(e); };
var PL$62/*c*/;
PL$60(function(){;
PL$62/*c*/ = new PL$63/*Callback*/();
PL$64/*setTimeout*/(PL$62/*c*/, PL$58/*t*/);;
PL$62/*c*/["promise"].then(PL$60(function(PL$65){PL$65;;
PL$59.resolve(); return;;
}), PL$61);
;})();
return PL$59;
};
;
PL$5/*peerConnection*/;
(function(){
if (!promiseland.profileHas("client")){
var p = new __Promise();
p.reject({id: 14, msg: "function does not execute in this frame."});
return p;
};
var PL$6 = new __Promise();
var PL$8 = function(code){ return function(res){ try{code(res);}catch(e){ PL$6.reject(e); }; }; };
var PL$9 = function(e){ PL$6.reject(e); };
PL$8(function(){;
__requireFun("./peerConnection").then(PL$8(function(PL$10){PL$5/*peerConnection*/ = PL$10;;
PL$6.resolve(); return;;
}), PL$9);
;})();
return PL$6;
})();;
classSystem._resolveProvisional(PL$2/*type:RtConnection*/, classSystem.createClass({members: [{"name":"constructor","type":classSystem.getBuiltinType("var")},{"name":"offer","type":classSystem.getBuiltinType("var")},{"name":"answer","type":classSystem.getBuiltinType("var")},{"name":"offerCandidates","type":classSystem.getBuiltinType("var")},{"name":"answerCandidates","type":classSystem.getBuiltinType("var")},{"name":"addOfferCandidate","type":(classSystem.createFunctionType({ "return": classSystem.getBuiltinType("var"), arguments: [classSystem.getBuiltinType("var")]}))},{"name":"addAnswerCandidate","type":(classSystem.createFunctionType({ "return": classSystem.getBuiltinType("var"), arguments: [classSystem.getBuiltinType("var")]}))},{"name":"answerExists","type":(classSystem.createFunctionType({ "return": classSystem.getBuiltinType("var"), arguments: [classSystem.getBuiltinType("var")]}))}], "extends": [], "hasFreePart": true, "sync": {"type":"sync","all":1,"line":7,"column":12,"offset":108}, "hashStr": "437868122b012ec894125f576c5a6eca", "name": "RtConnection"}, {"constructor": (function(){
var PL$11/*self*/;
var _TPL$11/*self*/;
var PL$12/*peerConfig*/;
var PL$14/*addCandidates*/;
;
this[5]["local"] = {};;
this[5]["isOffering"] = (function(){
;
return this["local"]["isOffering"];;
;
});;
this[5]["isAnswering"] = (function(){
;
return this["local"]["isAnswering"];;
;
});;
/*tracked assign*/(function(v){
if (_TPL$11/*self*/){ _TPL$11/*self*/(); };
PL$11/*self*/ = v;
if (v){
_TPL$11/*self*/ = v[2]();
}else{
_TPL$11/*self*/ = undefined;
};
return v;
})(this)/*end assign*/
;
PL$12/*peerConfig*/ = {"onChannelMessage": (function(PL$13/*event*/){
;
PL$11/*self*/[5]["onData"](PL$13/*event*/["data"]);;
;
}),
"onChannelOpened": (function(PL$13/*event*/){
;
PL$11/*self*/[5]["local"]["conPs"]["resolve"]();;
;
}),
"onChannelClosed": (function(PL$13/*event*/){
;
debugger;
;
}),
"onChannelError": (function(PL$13/*event*/){
;
debugger;
;
})};
PL$14/*addCandidates*/ = (function(PL$15/*parCandidates*/){
var PL$16/*i*/;
;
PL$16/*i*/ = 0;
for(PL$16/*i*/ = 0;(PL$16/*i*/ < PL$15/*parCandidates*/["length"]);++PL$16/*i*/){{PL$11/*self*/[5]["local"]["connection"]["addICE"]({"sdpMLineIndex": PL$15/*parCandidates*/[PL$16/*i*/]["sdpMLineIndex"],
"candidate": PL$17/*JSON*/["parse"](PL$15/*parCandidates*/[PL$16/*i*/]["candidate"])});;
}};
;
;
});
this[5]["local"]["addCandidates"] = PL$14/*addCandidates*/;;
this[5]["init"] = (function(){
var PL$34 = new __Promise();
var PL$35 = function(code){ return function(res){ try{code(res);}catch(e){ PL$34.reject(e); }; }; };
var PL$36 = function(e){ PL$34.reject(e); };
var PL$21/*initPs*/;
PL$35(function(){;
if(PL$11/*self*/[5]["taken"]){
throw {"msg": "this connection is allready taken"};
};
;
PL$21/*initPs*/ = new PL$22/*Promise*/();
PL$11/*self*/[5]["local"]["conPs"] = new PL$22/*Promise*/();;
PL$11/*self*/[5]["waitForConnection"] = (function(){
var PL$37 = new __Promise();
var PL$38 = function(code){ return function(res){ try{code(res);}catch(e){ PL$37.reject(e); }; }; };
var PL$39 = function(e){ PL$37.reject(e); };
PL$38(function(){;
PL$11/*self*/[5]["local"]["conPs"].then(PL$38(function(PL$40){PL$40;;
PL$37.resolve(); return;;
}), PL$39);
;})();
return PL$37;
});;
PL$11/*self*/[5]["send"] = (function(PL$27/*par*/){
;
PL$11/*self*/[5]["local"]["connection"]["sendData"](PL$27/*par*/);;
;
});;
PL$11/*self*/[5]["onData"] = (function(PL$28/*parData*/){
;
;
});;
if(! PL$11/*self*/[9]){
PL$11/*self*/[5]["local"]["isOffering"] = true;;
(function(s, v){ v = s[10](v); s[9] = v; return v; })(PL$11/*self*/, {});;
PL$12/*peerConfig*/["onOfferSDP"] = (function(PL$29/*parSdp*/){
;
PL$11/*self*/[9]["sdp"] = PL$29/*parSdp*/;;
(function(s, v){ v = s[10](v); s[9] = v; return v; })(PL$11/*self*/, PL$11/*self*/[9]);;
PL$21/*initPs*/["resolve"]();;
;
});;
PL$12/*peerConfig*/["onICE"] = (function(PL$30/*candidate*/){
;
PL$11/*self*/[17]({"sdpMLineIndex": PL$30/*candidate*/["sdpMLineIndex"],
"candidate": PL$17/*JSON*/["stringify"](PL$30/*candidate*/["candidate"])});;
;
});;
PL$11/*self*/[5]["local"]["connection"] = PL$5/*peerConnection*/(PL$12/*peerConfig*/);;

}else{
PL$11/*self*/[5]["local"]["isAnswering"] = true;;
(function(s, v){ v = s[12](v); s[11] = v; return v; })(PL$11/*self*/, {});;
PL$12/*peerConfig*/["offerSDP"] = PL$11/*self*/[9]["sdp"];;
PL$12/*peerConfig*/["onICE"] = (function(PL$30/*candidate*/){
;
PL$11/*self*/[19]({"sdpMLineIndex": PL$30/*candidate*/["sdpMLineIndex"],
"candidate": PL$17/*JSON*/["stringify"](PL$30/*candidate*/["candidate"])});;
;
});;
PL$12/*peerConfig*/["onAnswerSDP"] = (function(PL$29/*parSdp*/){
;
PL$11/*self*/[11]["sdp"] = PL$29/*parSdp*/;;
(function(s, v){ v = s[12](v); s[11] = v; return v; })(PL$11/*self*/, PL$11/*self*/[11]);;
PL$11/*self*/[21](PL$11/*self*/[11]);;
PL$14/*addCandidates*/(PL$11/*self*/[13]);;
PL$21/*initPs*/["resolve"]();;
;
});;
PL$11/*self*/[5]["local"]["connection"] = PL$5/*peerConnection*/(PL$12/*peerConfig*/);;
};
;
PL$21/*initPs*/.then(PL$35(function(PL$41){PL$41;;
PL$34.resolve(); return;;
}), PL$36);
;})();
return PL$34;
});;
;
}), "offer": undefined, "answer": undefined, "offerCandidates": [], "answerCandidates": [], "addOfferCandidate": (function(PL$32/*parCandidate*/){
;
if(this[5]["isOffering"]()){
this[13]["push"](PL$32/*parCandidate*/);;
(function(s, v){ v = s[14](v); s[13] = v; return v; })(this, this[13]);;
};
;
if(this[5]["isAnswering"]()){
this[5]["local"]["addCandidates"]([PL$32/*parCandidate*/]);;
};
;
;
}), "addAnswerCandidate": (function(PL$32/*parCandidate*/){
;
if(this[5]["isAnswering"]()){
this[15]["push"](PL$32/*parCandidate*/);;
(function(s, v){ v = s[16](v); s[15] = v; return v; })(this, this[13]);;
};
;
if(this[5]["isOffering"]()){
this[5]["local"]["addCandidates"]([PL$32/*parCandidate*/]);;
};
;
;
}), "answerExists": (function(PL$33/*parAnswer*/){
;
if(this[5]["isOffering"]()){
this[5]["local"]["connection"]["addAnswerSDP"](PL$33/*parAnswer*/["sdp"]);;
};
;
;
})}));PL$3/*RtConnection*/;;
PL$42/*currentOffer*/;
PL$49/*makeOffer*/;
;
PL$57/*takeOffer*/;
;
PL$66/*wait*/;
PL$67/*localConnection*/;
(function(){
if (!promiseland.profileHas("client")){
return;
};
var PL$68/*btn*/;
var PL$58/*t*/;
var PL$76/*startLoop*/;
var PL$83/*print*/;
;
PL$68/*btn*/ = PL$69/*document*/["createElement"]("BUTTON");
PL$58/*t*/ = PL$69/*document*/["createTextNode"]("create offer");
PL$68/*btn*/["appendChild"](PL$58/*t*/);;
PL$69/*document*/["body"]["appendChild"](PL$68/*btn*/);;
PL$68/*btn*/["addEventListener"]("click", (function(){
var PL$70 = new __Promise();
var PL$71 = function(code){ return function(res){ try{code(res);}catch(e){ PL$70.reject(e); }; }; };
var PL$72 = function(e){ PL$70.reject(e); };
PL$71(function(){;
/*temp tracked assign*/(function(vAr){
if (_TPL$67/*localConnection*/){ _TPL$67/*localConnection*/(); };
if(vAr){
var v = vAr[0];
PL$67/*localConnection*/ = v;
_TPL$67/*localConnection*/ = vAr[1];
return v;
}else{
PL$67/*localConnection*/ = undefined; _TPL$67/*localConnection*/ = undefined;
return;
}; })(new PL$4/*RtConnection-constructor*/())/*end temp assign*/
;;
PL$67/*localConnection*/[5]["init"]().then(PL$71(function(PL$73){PL$73;;
PL$49/*makeOffer*/((function(v){ if(!v){ return; }; return [v, v[2]()];})(PL$67/*localConnection*/)).then(PL$71(function(PL$74){PL$74;;
PL$67/*localConnection*/[5]["waitForConnection"]().then(PL$71(function(PL$75){PL$75;;
PL$76/*startLoop*/();;
PL$70.resolve(); return;;
}), PL$72);
;}), PL$72);
;}), PL$72);
;})();
return PL$70;
}));;
PL$68/*btn*/ = PL$69/*document*/["createElement"]("BUTTON");;
PL$58/*t*/ = PL$69/*document*/["createTextNode"]("take offer");;
PL$68/*btn*/["appendChild"](PL$58/*t*/);;
PL$69/*document*/["body"]["appendChild"](PL$68/*btn*/);;
PL$68/*btn*/["addEventListener"]("click", (function(){
var PL$77 = new __Promise();
var PL$78 = function(code){ return function(res){ try{code(res);}catch(e){ PL$77.reject(e); }; }; };
var PL$79 = function(e){ PL$77.reject(e); };
PL$78(function(){;
/*temptracked promise*/(function(vAr){
var r = vAr[0].thenReuse(vAr[1], PL$78(function(PL$80){/*temp tracked assign*/(function(vAr){
if (_TPL$67/*localConnection*/){ _TPL$67/*localConnection*/(); };
if(vAr){
var v = vAr[0];
PL$67/*localConnection*/ = v;
_TPL$67/*localConnection*/ = vAr[1];
return v;
}else{
PL$67/*localConnection*/ = undefined; _TPL$67/*localConnection*/ = undefined;
return;
}; })(PL$80)/*end temp assign*/
;;
PL$67/*localConnection*/[5]["init"]().then(PL$78(function(PL$81){PL$81;;
PL$67/*localConnection*/[5]["waitForConnection"]().then(PL$78(function(PL$82){PL$82;;
PL$76/*startLoop*/();;
PL$77.resolve(); return;;
}), PL$79);
;}), PL$79);
;}), PL$79);
return r;
})(PL$57/*takeOffer*/());/*temptracked promise end*/
;})();
return PL$77;
}));;
PL$76/*startLoop*/ = (function(){
var PL$84/*tb*/;
var PL$68/*btn*/;
var PL$58/*t*/;
;
PL$83/*print*/("connected");;
PL$84/*tb*/ = PL$69/*document*/["createElement"]("input");
PL$84/*tb*/["type"] = "text";;
PL$69/*document*/["body"]["appendChild"](PL$84/*tb*/);;
PL$68/*btn*/ = PL$69/*document*/["createElement"]("BUTTON");
PL$58/*t*/ = PL$69/*document*/["createTextNode"]("send");
PL$68/*btn*/["appendChild"](PL$58/*t*/);;
PL$69/*document*/["body"]["appendChild"](PL$68/*btn*/);;
PL$68/*btn*/["addEventListener"]("click", (function(){
;
PL$67/*localConnection*/[5]["send"](PL$84/*tb*/["value"]);;
;
}));;
PL$67/*localConnection*/[5]["onData"] = (function(PL$85/*data*/){
;
PL$83/*print*/(PL$85/*data*/);;
;
});;
;
});
PL$83/*print*/ = (function(PL$86/*text*/){
var PL$87/*p*/;
var PL$58/*t*/;
;
PL$87/*p*/ = PL$69/*document*/["createElement"]("p");
PL$58/*t*/ = PL$69/*document*/["createTextNode"](PL$86/*text*/);
PL$87/*p*/["appendChild"](PL$58/*t*/);;
PL$69/*document*/["body"]["appendChild"](PL$87/*p*/);;
;
});
;
})();;
;
})();
;return PL$1;
});
})();