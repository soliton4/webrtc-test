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
if (promiseland._hasModule({ hashStr: "929095a50694f3806967d9c2f41d96ac" })){ return promiseland._getModule("929095a50694f3806967d9c2f41d96ac"); };
var PL$22/*Promise*/;try{PL$22/*Promise*/ = Promise;}catch(e){};
var PL$26/*JSON*/;try{PL$26/*JSON*/ = JSON;}catch(e){};
var PL$47/*console*/;try{PL$47/*console*/ = console;}catch(e){};
var PL$67/*Callback*/;try{PL$67/*Callback*/ = Callback;}catch(e){};
var PL$68/*setTimeout*/;try{PL$68/*setTimeout*/ = setTimeout;}catch(e){};
var PL$71/*Math*/;try{PL$71/*Math*/ = Math;}catch(e){};
var PL$1 = (function(){
"use strict";
var PL$11/*PeerConnection*/;
var PL$3/*RtcConnection*/;
var PL$6/*Signaler*/;
var PL$42/*onIce*/;
var PL$48/*masterCreated*/;
var PL$49/*signaler*/;
var _TPL$49/*signaler*/;
var PL$9/*Package*/;
var PL$58/*getPackage*/;
var PL$59/*package*/;
var _TPL$59/*package*/;
var PL$64/*getSome*/;
var PL$69/*wait*/;
var PL$72/*uniqueToken*/;
var PL$45/*peer*/;
var PL$24/*peerConfig*/;
var PL$46/*userToken*/;
var PL$73/*conObject*/;
var _TPL$73/*conObject*/;
var PL$74/*conExists*/;
var PL$82/*getConnection*/;
var PL$116/*sendsdp*/;
var PL$117/*sendsdpMaster*/;
var PL$115/*initPeer*/;
var PL$44/*getsdpMaster*/;
var PL$43/*getsdp*/;
var PL$2/*type:RtcConnection*/ = classSystem._createProvisionalClass();
PL$3/*RtcConnection*/ = PL$2/*type:RtcConnection*/;
var PL$4/*RtcConnection-constructor*/ = undefined;classSystem.readyPromise(PL$2/*type:RtcConnection*/).then(function(parType){PL$2/*type:RtcConnection*/ = parType;PL$4/*RtcConnection-constructor*/ = classSystem.getTypeConstructor(PL$2/*type:RtcConnection*/);});var PL$75/*type:RtcConnection**/ = classSystem._createPromiseOfClass(PL$2/*type:RtcConnection*/);
var PL$76/*RtcConnection**/ = PL$75/*type:RtcConnection**/;
var PL$77/*RtcConnection*-constructor*/ = undefined;classSystem.readyPromise(PL$75/*type:RtcConnection**/).then(function(parType){PL$75/*type:RtcConnection**/ = parType;PL$77/*RtcConnection*-constructor*/ = classSystem.getTypeConstructor(PL$75/*type:RtcConnection**/);});var PL$5/*type:Signaler*/ = classSystem._createProvisionalClass();
PL$6/*Signaler*/ = PL$5/*type:Signaler*/;
var PL$7/*Signaler-constructor*/ = undefined;classSystem.readyPromise(PL$5/*type:Signaler*/).then(function(parType){PL$5/*type:Signaler*/ = parType;PL$7/*Signaler-constructor*/ = classSystem.getTypeConstructor(PL$5/*type:Signaler*/);});var PL$8/*type:Package*/ = classSystem._createProvisionalClass();
PL$9/*Package*/ = PL$8/*type:Package*/;
var PL$10/*Package-constructor*/ = undefined;classSystem.readyPromise(PL$8/*type:Package*/).then(function(parType){PL$8/*type:Package*/ = parType;PL$10/*Package-constructor*/ = classSystem.getTypeConstructor(PL$8/*type:Package*/);});var PL$50/*type:Package**/ = classSystem._createPromiseOfClass(PL$8/*type:Package*/);
var PL$51/*Package**/ = PL$50/*type:Package**/;
var PL$52/*Package*-constructor*/ = undefined;classSystem.readyPromise(PL$50/*type:Package**/).then(function(parType){PL$50/*type:Package**/ = parType;PL$52/*Package*-constructor*/ = classSystem.getTypeConstructor(PL$50/*type:Package**/);});var PL$42/*onIce*/ = function(PL$33/*par*/){
if (!promiseland.profileHas("client")){
return;
};
;
try
{if(PL$45/*peer*/){
if((PL$33/*par*/["userToken"] == PL$46/*userToken*/)){
return;;
};
;
PL$47/*console*/["log"]("real ice to add");;
PL$45/*peer*/["addICE"]({"sdpMLineIndex": PL$33/*par*/["candidate"]["sdpMLineIndex"],
"candidate": PL$26/*JSON*/["parse"](PL$33/*par*/["candidate"]["candidate"])});;

}else{
PL$47/*console*/["log"]("no peer to add ice");;
};
;
}catch(PL$27/*e*/){PL$47/*console*/["log"]("onIce error");;
PL$47/*console*/["log"](PL$27/*e*/);;
};
;
;
};
var PL$58/*getPackage*/ = (function(f){
promiseland.registerRemote("server", "929095a50694f3806967d9c2f41d96ac", "PL$57", f, (classSystem.createFunctionType({ "return": PL$50/*type:Package**/, arguments: []})));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("929095a50694f3806967d9c2f41d96ac", "PL$57", arguments);
}
};
})((function(t){return t;})(function(){
var PL$53;
var _TPL$53;
(function(){ var vAr = new PL$52/*Package*-constructor*/(); PL$53 = vAr[0]; _TPL$53 = vAr[1]; })();var PL$54 = function(code){ return function(res){ try{code(res);}catch(e){ if (_TPL$56/*p*/){ _TPL$56/*p*/();};PL$53.reject(e); }; }; };
var PL$55 = function(e){ if (_TPL$56/*p*/){ _TPL$56/*p*/();};PL$53.reject(e); };
var PL$56/*p*/;
var _TPL$56/*p*/;
PL$54(function(){;
/*temp tracked assign*/(function(vAr){
if (_TPL$56/*p*/){ _TPL$56/*p*/(); };
if(vAr){
var v = vAr[0];
PL$56/*p*/ = v;
_TPL$56/*p*/ = vAr[1];
return v;
}else{
PL$56/*p*/ = undefined; _TPL$56/*p*/ = undefined;
return;
}; })(new PL$10/*Package-constructor*/())/*end temp assign*/
;
if(! PL$48/*masterCreated*/){
PL$48/*masterCreated*/ = true;;
(function(s, v){ v = s[13](v); s[12] = v; return v; })(PL$56/*p*/, true);;
};
;
(function(s, v){ var vAr = [v, v[2]()]; vAr = s[8](vAr); s[7] = v; if(s[9]){ s[9](); }; s[9] = v[3](s[1]); vAr[1](); return v; })(PL$56/*p*/, PL$49/*signaler*/);;
PL$53.resolve((function(ret){ if (_TPL$56/*p*/){ _TPL$56/*p*/();};return ret; })((function(v){ if(!v){ return; }; return [v, v[2]()];})(PL$56/*p*/))); return;;
if (_TPL$56/*p*/){ _TPL$56/*p*/();};PL$53.resolve(); return;;
})();
return [PL$53, _TPL$53];
}));
var PL$64/*getSome*/ = (function(f){
promiseland.registerRemote("server", "929095a50694f3806967d9c2f41d96ac", "PL$63", f, classSystem.getBuiltinType("var"));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("929095a50694f3806967d9c2f41d96ac", "PL$63", arguments);
}
};
})(function(){
var PL$60 = new __Promise();
var PL$61 = function(code){ return function(res){ try{code(res);}catch(e){ PL$60.reject(e); }; }; };
var PL$62 = function(e){ PL$60.reject(e); };
PL$61(function(){;
PL$47/*console*/["log"]("request here");;
PL$60.resolve("xxx"); return;;
PL$60.resolve(); return;;
})();
return PL$60;
});
var PL$69/*wait*/ = function(PL$65/*ms*/){
var PL$66/*cb*/;
;
PL$66/*cb*/ = new PL$67/*Callback*/();
PL$68/*setTimeout*/(PL$66/*cb*/, PL$65/*ms*/);;
return PL$66/*cb*/["promise"];;
;
};
var PL$72/*uniqueToken*/ = function(){
var PL$70/*s4*/;
;
PL$70/*s4*/ = (function(){
;
return PL$71/*Math*/["floor"]((PL$71/*Math*/["random"]() * 65536))["toString"](16);;
;
});
return (((((((((((PL$70/*s4*/() + PL$70/*s4*/()) + "-") + PL$70/*s4*/()) + "-") + PL$70/*s4*/()) + "-") + PL$70/*s4*/()) + "-") + PL$70/*s4*/()) + PL$70/*s4*/()) + PL$70/*s4*/());;
;
};
var PL$82/*getConnection*/ = (function(f){
promiseland.registerRemote("server", "929095a50694f3806967d9c2f41d96ac", "PL$81", f, (classSystem.createFunctionType({ "return": PL$75/*type:RtcConnection**/, arguments: []})));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("929095a50694f3806967d9c2f41d96ac", "PL$81", arguments);
}
};
})((function(t){return t;})(function(){
var PL$78;
var _TPL$78;
(function(){ var vAr = new PL$77/*RtcConnection*-constructor*/(); PL$78 = vAr[0]; _TPL$78 = vAr[1]; })();var PL$79 = function(code){ return function(res){ try{code(res);}catch(e){ PL$78.reject(e); }; }; };
var PL$80 = function(e){ PL$78.reject(e); };
PL$79(function(){;
if(PL$74/*conExists*/){
PL$74/*conExists*/ = false;;
PL$78.resolve((function(v){ if(!v){ return; }; return [v, v[2]()];})(PL$73/*conObject*/)); return;;
};
;
/*temp tracked assign*/(function(vAr){
if (_TPL$73/*conObject*/){ _TPL$73/*conObject*/(); };
if(vAr){
var v = vAr[0];
PL$73/*conObject*/ = v;
_TPL$73/*conObject*/ = vAr[1];
return v;
}else{
PL$73/*conObject*/ = undefined; _TPL$73/*conObject*/ = undefined;
return;
}; })(new PL$4/*RtcConnection-constructor*/())/*end temp assign*/
;;
PL$74/*conExists*/ = true;;
PL$78.resolve((function(v){ if(!v){ return; }; return [v, v[2]()];})(PL$73/*conObject*/)); return;;
PL$78.resolve(); return;;
})();
return [PL$78, _TPL$78];
}));
var PL$116/*sendsdp*/ = function(PL$29/*sdp*/){
;
PL$59/*package*/[7][13]({"userToken": PL$46/*userToken*/,
"sdp": PL$26/*JSON*/["stringify"](PL$29/*sdp*/)});;
;
};
var PL$117/*sendsdpMaster*/ = function(PL$29/*sdp*/){
;
PL$47/*console*/["log"]("onOfferSDP");;
PL$59/*package*/[7][15]({"userToken": PL$46/*userToken*/,
"sdp": PL$26/*JSON*/["stringify"](PL$29/*sdp*/)});;
;
};
var PL$115/*initPeer*/ = function(PL$118/*offerSDP*/){
;
if(! PL$118/*offerSDP*/){
PL$24/*peerConfig*/["onOfferSDP"] = PL$117/*sendsdpMaster*/;;

}else{
PL$24/*peerConfig*/["offerSDP"] = PL$118/*offerSDP*/;;
PL$24/*peerConfig*/["onAnswerSDP"] = PL$116/*sendsdp*/;;
};
;
try
{PL$45/*peer*/ = PL$11/*PeerConnection*/(PL$24/*peerConfig*/);;
}catch(PL$27/*e*/){PL$47/*console*/["log"]("peerconnection error");;
PL$47/*console*/["log"](PL$27/*e*/);;
};
;
;
};
;
PL$11/*PeerConnection*/;
(function(){
if (!promiseland.profileHas("client")){
var p = new __Promise();
p.reject({id: 14, msg: "function does not execute in this frame."});
return p;
};
var PL$12 = new __Promise();
var PL$14 = function(code){ return function(res){ try{code(res);}catch(e){ PL$12.reject(e); }; }; };
var PL$15 = function(e){ PL$12.reject(e); };
PL$14(function(){;
__requireFun("./peerConnection").then(PL$14(function(PL$16){PL$11/*PeerConnection*/ = PL$16;;
PL$12.resolve(); return;;
}), PL$15);
;})();
return PL$12;
})();;
classSystem._resolveProvisional(PL$2/*type:RtcConnection*/, classSystem.createClass({members: [{"name":"constructor","type":classSystem.getBuiltinType("var")},{"name":"offer","type":classSystem.getBuiltinType("var")},{"name":"offerCandidates","type":classSystem.getBuiltinType("var")},{"name":"addOfferCandidate","type":(classSystem.createFunctionType({ "return": classSystem.getBuiltinType("var"), arguments: [classSystem.getBuiltinType("var")]}))},{"name":"answer","type":classSystem.getBuiltinType("var")},{"name":"answerCandidates","type":classSystem.getBuiltinType("var")},{"name":"addAnswerCandidate","type":(classSystem.createFunctionType({ "return": classSystem.getBuiltinType("var"), arguments: [classSystem.getBuiltinType("var")]}))},{"name":"answerExists","type":(classSystem.createFunctionType({ "return": classSystem.getBuiltinType("var"), arguments: [classSystem.getBuiltinType("var")]}))},{"name":"taken","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true, "sync": {"type":"sync","all":1,"line":9,"column":12,"offset":161}, "hashStr": "929095a50694f3806967d9c2f41d96ac", "name": "RtcConnection"}, {"constructor": (function(){
var PL$17/*self*/;
var _TPL$17/*self*/;
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
if (_TPL$17/*self*/){ _TPL$17/*self*/(); };
PL$17/*self*/ = v;
if (v){
_TPL$17/*self*/ = v[2]();
}else{
_TPL$17/*self*/ = undefined;
};
return v;
})(this)/*end assign*/
;
this[5]["init"] = (function(){
var PL$36 = new __Promise();
var PL$37 = function(code){ return function(res){ try{code(res);}catch(e){ PL$36.reject(e); }; }; };
var PL$38 = function(e){ PL$36.reject(e); };
var PL$21/*initPs*/;
var PL$24/*peerConfig*/;
PL$37(function(){;
if(PL$17/*self*/[23]){
throw {"msg": "this connection is allready in use"};
};
;
PL$21/*initPs*/ = new PL$22/*Promise*/();
PL$17/*self*/[5]["channelOpen"] = new PL$22/*Promise*/();;
var PL$39 = new __Promise();
if(! PL$17/*self*/[9]){
PL$17/*self*/[5]["local"]["isOffering"] = true;;
(function(s, v){ v = s[10](v); s[9] = v; return v; })(PL$17/*self*/, {});;
PL$24/*peerConfig*/ = {"onICE": (function(PL$25/*candidate*/){
;
PL$17/*self*/[13]({"sdpMLineIndex": PL$25/*candidate*/["sdpMLineIndex"],
"candidate": PL$26/*JSON*/["stringify"](PL$25/*candidate*/["candidate"])});;
;
}),
"onChannelOpened": (function(){
;
try
{PL$17/*self*/[5]["channelOpen"]["resolve"]();;
PL$17/*self*/[5]["onChannelOpened"]();;
}catch(PL$27/*e*/){};
;
;
}),
"onChannelMessage": (function(PL$28/*event*/){
;
try
{PL$17/*self*/[5]["onMessage"](PL$28/*event*/);;
}catch(PL$27/*e*/){};
;
;
}),
"onOfferSDP": (function(PL$29/*sdp*/){
;
PL$17/*self*/[9]["sdp"] = PL$26/*JSON*/["stringify"](PL$29/*sdp*/);;
(function(s, v){ v = s[10](v); s[9] = v; return v; })(PL$17/*self*/, PL$17/*self*/[9]);;
PL$21/*initPs*/["resolve"]();;
;
})};
PL$17/*self*/[5]["local"]["connection"] = PL$11/*PeerConnection*/(PL$24/*peerConfig*/);;
PL$21/*initPs*/.then(PL$37(function(PL$40){PL$40;;
PL$39.resolve();;
}), PL$38);
;
}else{
(function(s, v){ v = s[16](v); s[15] = v; return v; })(PL$17/*self*/, {"oldone": true});;
PL$17/*self*/[5]["local"]["isAnswering"] = true;;
PL$24/*peerConfig*/ = {"onICE": (function(PL$25/*candidate*/){
;
PL$17/*self*/[19]({"sdpMLineIndex": PL$25/*candidate*/["sdpMLineIndex"],
"candidate": PL$26/*JSON*/["stringify"](PL$25/*candidate*/["candidate"])});;
;
}),
"onChannelOpened": (function(){
;
try
{PL$17/*self*/[5]["channelOpen"]["resolve"]();;
PL$17/*self*/[5]["onChannelOpened"]();;
}catch(PL$27/*e*/){};
;
;
}),
"onChannelMessage": (function(PL$28/*event*/){
;
try
{PL$17/*self*/[5]["onChannelMessage"](PL$28/*event*/);;
}catch(PL$27/*e*/){};
;
;
}),
"offerSDP": PL$26/*JSON*/["parse"](PL$17/*self*/[9]["sdp"]),
"onAnswerSDP": (function(PL$29/*sdp*/){
var PL$31/*i*/;
;
(function(s, v){ v = s[16](v); s[15] = v; return v; })(PL$17/*self*/, {"sdp": PL$26/*JSON*/["stringify"](PL$29/*sdp*/)});;
PL$17/*self*/[21]({"sdp": PL$26/*JSON*/["stringify"](PL$29/*sdp*/)});;
PL$31/*i*/ = 0;
for(PL$31/*i*/ = 0;(PL$31/*i*/ < PL$17/*self*/[11]["length"]);++PL$31/*i*/){{PL$17/*self*/[5]["local"]["connection"]["addICE"]({"sdpMLineIndex": PL$17/*self*/[11][PL$31/*i*/]["sdpMLineIndex"],
"candidate": PL$26/*JSON*/["parse"](PL$17/*self*/[11][PL$31/*i*/]["candidate"])});;
}};
;
(function(s, v){ v = s[24](v); s[23] = v; return v; })(PL$17/*self*/, true);;
PL$21/*initPs*/["resolve"]();;
;
})};
PL$17/*self*/[5]["local"]["connection"] = PL$11/*PeerConnection*/(PL$24/*peerConfig*/);;
PL$21/*initPs*/.then(PL$37(function(PL$41){PL$41;;
PL$39.resolve();;
}), PL$38);
;}; PL$39.then(function(){;
;
PL$36.resolve(); return;;
});})();
return PL$36;
});;
this[5]["send"] = (function(PL$33/*par*/){
;
this["local"]["connection"]["sendData"](PL$33/*par*/);;
;
});;
;
}), "offer": undefined, "offerCandidates": [], "addOfferCandidate": (function(PL$34/*parCandidate*/){
;
if(this[5]["isOffering"]()){
this[11]["push"](PL$34/*parCandidate*/);;
(function(s, v){ v = s[12](v); s[11] = v; return v; })(this, this[11]);;
};
;
if(this[5]["isAnswering"]()){
if(this[5]["local"]["connection"]){
this[5]["local"]["connection"]["addICE"]({"sdpMLineIndex": PL$34/*parCandidate*/["sdpMLineIndex"],
"candidate": PL$26/*JSON*/["parse"](PL$34/*parCandidate*/["candidate"])});;
};
;
};
;
;
}), "answer": undefined, "answerCandidates": [], "addAnswerCandidate": (function(PL$34/*parCandidate*/){
;
if(this[5]["isAnswering"]()){
this[17]["push"](PL$34/*parCandidate*/);;
(function(s, v){ v = s[18](v); s[17] = v; return v; })(this, this[17]);;
};
;
if(this[5]["isOffering"]()){
if(this[5]["local"]["connection"]){
this[5]["local"]["connection"]["addICE"]({"sdpMLineIndex": PL$34/*parCandidate*/["sdpMLineIndex"],
"candidate": PL$26/*JSON*/["parse"](PL$34/*parCandidate*/["candidate"])});;
};
;
};
;
;
}), "answerExists": (function(PL$35/*parSdp*/){
;
if(this[5]["isOffering"]()){
this[5]["local"]["connection"]["addAnswerSDP"](PL$26/*JSON*/["parse"](PL$35/*parSdp*/));;
};
;
;
}), "taken": false}));PL$3/*RtcConnection*/;;
classSystem._resolveProvisional(PL$5/*type:Signaler*/, classSystem.createClass({members: [{"name":"constructor","type":classSystem.getBuiltinType("var")},{"name":"someMember","type":classSystem.getBuiltinType("var")},{"name":"onICE","type":(classSystem.createFunctionType({ "return": classSystem.getBuiltinType("var"), arguments: [classSystem.getBuiltinType("var")]}))},{"name":"sendsdp","type":(classSystem.createFunctionType({ "return": classSystem.getBuiltinType("var"), arguments: [classSystem.getBuiltinType("var")]}))},{"name":"sendsdpMaster","type":(classSystem.createFunctionType({ "return": classSystem.getBuiltinType("var"), arguments: [classSystem.getBuiltinType("var")]}))},{"name":"inMessage","type":classSystem.getBuiltinType("var")},{"name":"outMessage","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true, "sync": {"type":"sync","all":1,"line":150,"column":12,"offset":4150}, "hashStr": "929095a50694f3806967d9c2f41d96ac", "name": "Signaler"}, {"constructor": (function(){
;
;
}), "someMember": 1, "onICE": (function(PL$33/*par*/){
;
PL$42/*onIce*/(PL$33/*par*/);;
;
}), "sendsdp": (function(PL$33/*par*/){
;
PL$43/*getsdp*/(PL$33/*par*/);;
;
}), "sendsdpMaster": (function(PL$33/*par*/){
;
PL$44/*getsdpMaster*/(PL$33/*par*/);;
;
}), "inMessage": (function(){
;
;
}), "outMessage": (function(){
;
;
})}));PL$6/*Signaler*/;;
PL$42/*onIce*/;
PL$48/*masterCreated*/;
PL$49/*signaler*/;
(function(){
if (!promiseland.profileHas("server")){
return;
};
;
/*temp tracked assign*/(function(vAr){
if (_TPL$49/*signaler*/){ _TPL$49/*signaler*/(); };
if(vAr){
var v = vAr[0];
PL$49/*signaler*/ = v;
_TPL$49/*signaler*/ = vAr[1];
return v;
}else{
PL$49/*signaler*/ = undefined; _TPL$49/*signaler*/ = undefined;
return;
}; })(new PL$7/*Signaler-constructor*/())/*end temp assign*/
;;
;
})();;
classSystem._resolveProvisional(PL$8/*type:Package*/, classSystem.createClass({members: [{"name":"signaler","type":PL$5/*type:Signaler*/},{"name":"constructor","type":classSystem.getBuiltinType("var")},{"name":"master","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true, "sync": {"type":"sync","all":1,"line":193,"column":12,"offset":4951}, "hashStr": "929095a50694f3806967d9c2f41d96ac", "name": "Package"}, {"signaler": undefined, "constructor": (function(){
;
;
}), "master": false}));PL$9/*Package*/;;
PL$58/*getPackage*/;
;
PL$59/*package*/;
PL$64/*getSome*/;
;
PL$69/*wait*/;
;
PL$72/*uniqueToken*/;
PL$45/*peer*/;
PL$24/*peerConfig*/;
PL$11/*PeerConnection*/;
PL$46/*userToken*/ = PL$72/*uniqueToken*/();
PL$73/*conObject*/;
PL$74/*conExists*/;
PL$82/*getConnection*/;
;
(function(){
if (!promiseland.profileHas("client")){
var p = new __Promise();
p.reject({id: 14, msg: "function does not execute in this frame."});
return p;
};
var PL$83 = new __Promise();
var PL$84 = function(code){ return function(res){ try{code(res);}catch(e){ if (_TPL$87/*con*/){ _TPL$87/*con*/();};if (_TPL$103/*pack*/){ _TPL$103/*pack*/();};PL$83.reject(e); }; }; };
var PL$85 = function(e){ if (_TPL$87/*con*/){ _TPL$87/*con*/();};if (_TPL$103/*pack*/){ _TPL$103/*pack*/();};PL$83.reject(e); };
var PL$87/*con*/;
var _TPL$87/*con*/;
var PL$31/*i*/;
var PL$103/*pack*/;
var _TPL$103/*pack*/;
PL$84(function(){;
PL$69/*wait*/(3000).then(PL$84(function(PL$86){PL$86;;
PL$47/*console*/["log"]("go");;
/*temptracked promise*/(function(vAr){
var r = vAr[0].thenReuse(vAr[1], PL$84(function(PL$88){/*temp tracked assign*/(function(vAr){
if (_TPL$87/*con*/){ _TPL$87/*con*/(); };
if(vAr){
var v = vAr[0];
PL$87/*con*/ = v;
_TPL$87/*con*/ = vAr[1];
return v;
}else{
PL$87/*con*/ = undefined; _TPL$87/*con*/ = undefined;
return;
}; })(PL$88)/*end temp assign*/
;
PL$87/*con*/[5]["onMessage"] = (function(PL$89/*msg*/){
;
PL$47/*console*/["log"](PL$89/*msg*/);;
;
});;
PL$87/*con*/[5]["init"]().then(PL$84(function(PL$90){PL$90;;
PL$87/*con*/[5]["channelOpen"].then(PL$84(function(PL$91){PL$91;;
PL$87/*con*/[5]["send"]("hello!");;
PL$31/*i*/ = 0;
PL$31/*i*/ = 0;
var PL$93 = new __Promise();
var PL$92 = function(){var PL$94 = new __Promise();
if((PL$31/*i*/ < 1000)){PL$87/*con*/[5]["send"](("msg: " + PL$31/*i*/));;
PL$69/*wait*/(1000).then(PL$84(function(PL$95){PL$95;;
PL$94.resolve(true); return PL$94;
;
}), PL$85);
;}else{PL$94.resolve(false); return PL$94;
};
PL$94;
return PL$94;
};
var PL$96 = function(){PL$92().then(function(contLoop){
if (contLoop){++PL$31/*i*/;
PL$96();}else{PL$93.resolve();};
});
};
PL$96();
PL$93.then(function(){;
;
if (_TPL$87/*con*/){ _TPL$87/*con*/();};if (_TPL$103/*pack*/){ _TPL$103/*pack*/();};PL$83.resolve(); return;;
var PL$97 = new __Promise();
var PL$98 = new __Promise();
var PL$99/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$98.resolve(e); }; }; };
var PL$100 = function(e){ PL$98.resolve(e); };
PL$99/*try catch*/(function(){PL$64/*getSome*/().then(PL$99/*try catch*/(function(PL$101){PL$47/*console*/["log"](PL$101);;
PL$97.resolve();
}), PL$100);
;})();
PL$98.then(PL$84(function(PL$27/*e*/){PL$47/*console*/["log"](PL$27/*e*/);;
PL$97.resolve();;
}));
PL$97.then(PL$84(function(){;
;
__requireFun("app/peerConnection").then(PL$84(function(PL$102){PL$11/*PeerConnection*/ = PL$102;;
/*temptracked promise*/(function(vAr){
var r = vAr[0].thenReuse(vAr[1], PL$84(function(PL$104){/*temp tracked assign*/(function(vAr){
if (_TPL$103/*pack*/){ _TPL$103/*pack*/(); };
if(vAr){
var v = vAr[0];
PL$103/*pack*/ = v;
_TPL$103/*pack*/ = vAr[1];
return v;
}else{
PL$103/*pack*/ = undefined; _TPL$103/*pack*/ = undefined;
return;
}; })(PL$104)/*end temp assign*/
;
/*tracked assign*/(function(v){
if (_TPL$59/*package*/){ _TPL$59/*package*/(); };
PL$59/*package*/ = v;
if (v){
_TPL$59/*package*/ = v[2]();
}else{
_TPL$59/*package*/ = undefined;
};
return v;
})(PL$103/*pack*/)/*end assign*/
;;
PL$47/*console*/["log"]("master:");;
PL$47/*console*/["log"](PL$103/*pack*/[12]);;
PL$24/*peerConfig*/ = {"onICE": (function(PL$25/*candidate*/){
;
PL$47/*console*/["log"]("onice");;
PL$59/*package*/[7][11]({"userToken": PL$46/*userToken*/,
"candidate": {"sdpMLineIndex": PL$25/*candidate*/["sdpMLineIndex"],
"candidate": PL$26/*JSON*/["stringify"](PL$25/*candidate*/["candidate"])}});;
;
}),
"onChannelOpened": (function(){
var PL$105 = new __Promise();
var PL$106 = function(code){ return function(res){ try{code(res);}catch(e){ PL$105.reject(e); }; }; };
var PL$107 = function(e){ PL$105.reject(e); };
var PL$31/*i*/;
PL$106(function(){;
PL$47/*console*/["log"]("onChannelOpened");;
var PL$108 = new __Promise();
if(PL$59/*package*/[12]){
PL$47/*console*/["log"]("master sending");;
PL$45/*peer*/["sendData"]("hi");;
PL$31/*i*/ = 1;
var PL$110 = new __Promise();
var PL$109 = function(){var PL$111 = new __Promise();
if((PL$31/*i*/ < 1000)){PL$69/*wait*/(2000).then(PL$106(function(PL$112){PL$112;;
PL$45/*peer*/["sendData"](("no: " + PL$31/*i*/));;
PL$31/*i*/ += 1;;
PL$111.resolve(true); return PL$111;
;
}), PL$107);
;}else{PL$111.resolve(false); return PL$111;
};
PL$111;
return PL$111;
};
var PL$113 = function(){PL$109().then(function(contLoop){
if (contLoop){PL$113();}else{PL$110.resolve();};
});
};
PL$113();
PL$110.then(function(){;
;
PL$108.resolve();;
});
}else{
PL$108.resolve();}; PL$108.then(function(){;
;
PL$105.resolve(); return;;
});})();
return PL$105;
}),
"onChannelMessage": (function(PL$28/*event*/){
;
PL$47/*console*/["log"]("onChannelMessage");;
PL$47/*console*/["log"](PL$28/*event*/);;
;
})};;
PL$69/*wait*/(4000).then(PL$84(function(PL$114){PL$114;;
PL$47/*console*/["log"]("go2");;
if(PL$59/*package*/[12]){
PL$115/*initPeer*/();;

}else{
};
;
if (_TPL$87/*con*/){ _TPL$87/*con*/();};if (_TPL$103/*pack*/){ _TPL$103/*pack*/();};PL$83.resolve(); return;;
}), PL$85);
;}), PL$85);
return r;
})(PL$58/*getPackage*/());/*temptracked promise end*/
;}), PL$85);
;}), PL$85)});}), PL$85);
;}), PL$85);
;}), PL$85);
return r;
})(PL$82/*getConnection*/());/*temptracked promise end*/
;}), PL$85);
;})();
return PL$83;
})();;
PL$116/*sendsdp*/;
;
PL$117/*sendsdpMaster*/;
;
PL$115/*initPeer*/;
;
PL$44/*getsdpMaster*/ = (function(PL$33/*par*/){
if (!promiseland.profileHas("client")){
return;
};
;
if(PL$59/*package*/[12]){

}else{
PL$47/*console*/["log"]("getsdpMaster");;
PL$47/*console*/["log"]("on non master");;
PL$47/*console*/["log"](PL$33/*par*/);;
PL$115/*initPeer*/(PL$26/*JSON*/["parse"](PL$33/*par*/["sdp"]));;
PL$47/*console*/["log"]("peer exists --------------");;
};
;
;
});
PL$43/*getsdp*/ = (function(PL$33/*par*/){
if (!promiseland.profileHas("client")){
return;
};
;
if(PL$59/*package*/[12]){
PL$47/*console*/["log"]("getsdp");;
PL$47/*console*/["log"](PL$33/*par*/);;
try
{PL$45/*peer*/["addAnswerSDP"](PL$26/*JSON*/["parse"](PL$33/*par*/["sdp"]));;
}catch(PL$27/*e*/){PL$47/*console*/["log"]("getsdp error");;
PL$47/*console*/["log"](PL$27/*e*/);;
};
;
};
;
;
});
PL$47/*console*/["log"]("app loaded");;
;
})();
;return PL$1;
});
})();