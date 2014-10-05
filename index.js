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
    if (promiseland._hasModule({ hashStr: "1d47c02af358f8c1925c29b6f18e624e" })){ return promiseland._getModule("1d47c02af358f8c1925c29b6f18e624e"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "1d47c02af358f8c1925c29b6f18e624e", "module": PL$1, promising: true });
var PL$12/*__dirname*/;try{PL$12/*__dirname*/ = __dirname;}catch(e){};
var PL$15/*console*/;try{PL$15/*console*/ = console;}catch(e){};
var PL$2 = (function(){
"use strict";
var PL$3 = function(code){ return function(res){ try{code(res);}catch(e){ PL$1.reject(e); }; }; };
var PL$4 = function(e){ PL$1.reject(e); };
var PL$9/*Fw*/;
var PL$11/*fw*/;
PL$3(function(){;
var PL$5 = new __Promise();
var PL$6 = new __Promise();
var PL$7/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$6.resolve(e); }; }; };
var PL$8 = function(e){ PL$6.resolve(e); };
PL$7/*try catch*/(function(){__requireFun("promiseland-webframework").then(PL$7/*try catch*/(function(PL$10){PL$9/*Fw*/ = PL$10;
PL$11/*fw*/ = new PL$9/*Fw*/({"load": "app/app",
"requireConfig": {"shim": {"app/peerConnection": {"exports": "RTCPeerConnection"}}},
"dirs": [{"client": "/app",
"server": (PL$12/*__dirname*/ + "/app/")}]});
PL$11/*fw*/["listen"](3004);;
__requireFun("./app/app").then(PL$7/*try catch*/(function(PL$13){PL$13;;
PL$5.resolve();
}), PL$8);
;}), PL$8);
;})();
PL$6.then(PL$3(function(PL$14/*e*/){PL$15/*console*/["log"](PL$14/*e*/);;
PL$5.resolve();;
}));
PL$5.then(PL$3(function(){;
;
PL$1.resolve(); return;;
}), PL$4)})();
return PL$1;
})();
;;
return PL$1});
})();