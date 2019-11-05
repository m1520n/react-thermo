module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){"use strict";e.exports=r(2)},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n);r(4);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(r,!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,o=!1,u=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,u=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw u}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var a=function(e,t,r){var n=l(r,3),o=n[0],u=n[1],i=n[2],c=l(t,2),a=c[0],f=c[1];return e<a?o:e>=a&&e<f?u:e>=f?i:void 0},f={thermometerWrapper:{position:"relative",width:40,height:130,margin:5,textAlign:"center"},thermometerTop:{position:"absolute",width:20,height:100,top:0,left:0,right:0,borderRadius:"10px 10px 0 0",margin:"0 auto"},mercuryPipe:{position:"absolute",width:10,height:100,left:0,right:0,top:5,borderRadius:10,margin:"0 auto"},thermometerBottom:{position:"absolute",width:40,height:40,left:0,right:0,top:90,borderRadius:20,margin:"0 auto"},mercuryTop:{position:"absolute",width:10,height:90,left:0,right:0,bottom:30,borderRadius:5,margin:"0 auto"},mercuryBottom:{position:"absolute",width:30,height:30,left:0,right:0,top:95,borderRadius:15,margin:"0 auto"},mercuryHighlight:{position:"absolute",width:5,height:5,left:15,right:0,top:102.5,borderRadius:2.5,margin:"0 auto"}};t.default=function(e){var t=e.temperature,r=void 0===t?20:t,n=e.min,u=void 0===n?-50:n,c=e.max,l=void 0===c?50:c,s=e.zones,p=void 0===s?[0,25]:s,y=e.glassColor,h=void 0===y?"#bdc3c7":y,d=e.mercuryPipeColor,m=void 0===d?"#ecf0f1":d,b=e.lowTemperatureColor,v=void 0===b?"#3498db":b,g=e.mediumTemperatureColor,w=void 0===g?"#e67e22":g,j=e.highTemperatureColor,O=void 0===j?"#c0392b":j,S=e.highlightColor,k=void 0===S?"#fff":S,E=Math.abs(u)+Math.abs(l),_=Math.floor(100/E),C={backgroundColor:a(r,p,[v,w,O])},P=E/2+Math.floor(r)*_,x={height:P>100?100:P};return o.a.createElement("div",{style:f.thermometerWrapper},o.a.createElement("div",{style:i({},f.thermometerTop,{backgroundColor:h})}),o.a.createElement("div",{style:i({},f.thermometerBottom,{backgroundColor:h})}),o.a.createElement("div",{style:i({},f.mercuryPipe,{backgroundColor:m})}),o.a.createElement("div",{style:i({},f.mercuryTop,{},x,{},C)}),o.a.createElement("div",{style:i({},f.mercuryBottom,{},C)}),o.a.createElement("div",{style:i({},f.mercuryHighlight,{backgroundColor:k})}))}},function(e,t,r){"use strict";
/** @license React v16.11.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(3),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,a=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113;o&&Symbol.for("react.suspense_list");var h=o?Symbol.for("react.memo"):60115,d=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var m="function"==typeof Symbol&&Symbol.iterator;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function w(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||v}function j(){}function O(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||v}w.prototype.isReactComponent={},w.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(b(85));this.updater.enqueueSetState(this,e,t,"setState")},w.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=w.prototype;var S=O.prototype=new j;S.constructor=O,n(S,w.prototype),S.isPureReactComponent=!0;var k={current:null},E={current:null},_=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,r){var n,o={},i=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)_.call(t,n)&&!C.hasOwnProperty(n)&&(o[n]=t[n]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var a=Array(l),f=0;f<l;f++)a[f]=arguments[f+2];o.children=a}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===o[n]&&(o[n]=l[n]);return{$$typeof:u,type:e,key:i,ref:c,props:o,_owner:E.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var T=/\/+/g,A=[];function R(e,t,r,n){if(A.length){var o=A.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function $(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>A.length&&A.push(e)}function M(e,t,r){return null==e?0:function e(t,r,n,o){var c=typeof t;"undefined"!==c&&"boolean"!==c||(t=null);var l=!1;if(null===t)l=!0;else switch(c){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case u:case i:l=!0}}if(l)return n(o,t,""===r?"."+L(t,0):r),1;if(l=0,r=""===r?".":r+":",Array.isArray(t))for(var a=0;a<t.length;a++){var f=r+L(c=t[a],a);l+=e(c,f,n,o)}else if(null===t||"object"!=typeof t?f=null:f="function"==typeof(f=m&&t[m]||t["@@iterator"])?f:null,"function"==typeof f)for(t=f.call(t),a=0;!(c=t.next()).done;)l+=e(c=c.value,f=r+L(c,a++),n,o);else if("object"===c)throw n=""+t,Error(b(31,"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,""));return l}(e,"",t,r)}function L(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function I(e,t){e.func.call(e.context,t,e.count++)}function D(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?q(e,n,r,(function(e){return e})):null!=e&&(x(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(T,"$&/")+"/")+r)),n.push(e))}function q(e,t,r,n,o){var u="";null!=r&&(u=(""+r).replace(T,"$&/")+"/"),M(e,D,t=R(t,u,n,o)),$(t)}function B(){var e=k.current;if(null===e)throw Error(b(321));return e}var U={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return q(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;M(e,I,t=R(null,null,t,r)),$(t)},count:function(e){return M(e,(function(){return null}),null)},toArray:function(e){var t=[];return q(e,t,null,(function(e){return e})),t},only:function(e){if(!x(e))throw Error(b(143));return e}},createRef:function(){return{current:null}},Component:w,PureComponent:O,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:d,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:h,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return B().useCallback(e,t)},useContext:function(e,t){return B().useContext(e,t)},useEffect:function(e,t){return B().useEffect(e,t)},useImperativeHandle:function(e,t,r){return B().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return B().useLayoutEffect(e,t)},useMemo:function(e,t){return B().useMemo(e,t)},useReducer:function(e,t,r){return B().useReducer(e,t,r)},useRef:function(e){return B().useRef(e)},useState:function(e){return B().useState(e)},Fragment:c,Profiler:a,StrictMode:l,Suspense:y,createElement:P,cloneElement:function(e,t,r){if(null==e)throw Error(b(267,e));var o=n({},e.props),i=e.key,c=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,l=E.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(f in t)_.call(t,f)&&!C.hasOwnProperty(f)&&(o[f]=void 0===t[f]&&void 0!==a?a[f]:t[f])}var f=arguments.length-2;if(1===f)o.children=r;else if(1<f){a=Array(f);for(var s=0;s<f;s++)a[s]=arguments[s+2];o.children=a}return{$$typeof:u,type:e.type,key:i,ref:c,props:o,_owner:l}},createFactory:function(e){var t=P.bind(null,e);return t.type=e,t},isValidElement:x,version:"16.11.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:k,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:E,IsSomeRendererActing:{current:!1},assign:n}},z={default:U},F=z&&U||z;e.exports=F.default||F},function(e,t,r){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,c,l=i(e),a=1;a<arguments.length;a++){for(var f in r=Object(arguments[a]))o.call(r,f)&&(l[f]=r[f]);if(n){c=n(r);for(var s=0;s<c.length;s++)u.call(r,c[s])&&(l[c[s]]=r[c[s]])}}return l}},function(e,t,r){(function(e){function r(e,t){for(var r=0,n=e.length-1;n>=0;n--){var o=e[n];"."===o?e.splice(n,1):".."===o?(e.splice(n,1),r++):r&&(e.splice(n,1),r--)}if(t)for(;r--;r)e.unshift("..");return e}function n(e,t){if(e.filter)return e.filter(t);for(var r=[],n=0;n<e.length;n++)t(e[n],n,e)&&r.push(e[n]);return r}t.resolve=function(){for(var t="",o=!1,u=arguments.length-1;u>=-1&&!o;u--){var i=u>=0?arguments[u]:e.cwd();if("string"!=typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(t=i+"/"+t,o="/"===i.charAt(0))}return(o?"/":"")+(t=r(n(t.split("/"),(function(e){return!!e})),!o).join("/"))||"."},t.normalize=function(e){var u=t.isAbsolute(e),i="/"===o(e,-1);return(e=r(n(e.split("/"),(function(e){return!!e})),!u).join("/"))||u||(e="."),e&&i&&(e+="/"),(u?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(n(e,(function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,r){function n(e){for(var t=0;t<e.length&&""===e[t];t++);for(var r=e.length-1;r>=0&&""===e[r];r--);return t>r?[]:e.slice(t,r-t+1)}e=t.resolve(e).substr(1),r=t.resolve(r).substr(1);for(var o=n(e.split("/")),u=n(r.split("/")),i=Math.min(o.length,u.length),c=i,l=0;l<i;l++)if(o[l]!==u[l]){c=l;break}var a=[];for(l=c;l<o.length;l++)a.push("..");return(a=a.concat(u.slice(c))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!=typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),r=47===t,n=-1,o=!0,u=e.length-1;u>=1;--u)if(47===(t=e.charCodeAt(u))){if(!o){n=u;break}}else o=!1;return-1===n?r?"/":".":r&&1===n?"/":e.slice(0,n)},t.basename=function(e,t){var r=function(e){"string"!=typeof e&&(e+="");var t,r=0,n=-1,o=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!o){r=t+1;break}}else-1===n&&(o=!1,n=t+1);return-1===n?"":e.slice(r,n)}(e);return t&&r.substr(-1*t.length)===t&&(r=r.substr(0,r.length-t.length)),r},t.extname=function(e){"string"!=typeof e&&(e+="");for(var t=-1,r=0,n=-1,o=!0,u=0,i=e.length-1;i>=0;--i){var c=e.charCodeAt(i);if(47!==c)-1===n&&(o=!1,n=i+1),46===c?-1===t?t=i:1!==u&&(u=1):-1!==t&&(u=-1);else if(!o){r=i+1;break}}return-1===t||-1===n||0===u||1===u&&t===n-1&&t===r+1?"":e.slice(t,n)};var o="b"==="ab".substr(-1)?function(e,t,r){return e.substr(t,r)}:function(e,t,r){return t<0&&(t=e.length+t),e.substr(t,r)}}).call(this,r(5))},function(e,t){var r,n,o=e.exports={};function u(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(e){if(r===setTimeout)return setTimeout(e,0);if((r===u||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:u}catch(e){r=u}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var l,a=[],f=!1,s=-1;function p(){f&&l&&(f=!1,l.length?a=l.concat(a):s=-1,a.length&&y())}function y(){if(!f){var e=c(p);f=!0;for(var t=a.length;t;){for(l=a,a=[];++s<t;)l&&l[s].run();s=-1,t=a.length}l=null,f=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function d(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];a.push(new h(e,t)),1!==a.length||f||c(y)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=d,o.addListener=d,o.once=d,o.off=d,o.removeListener=d,o.removeAllListeners=d,o.emit=d,o.prependListener=d,o.prependOnceListener=d,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}}]);