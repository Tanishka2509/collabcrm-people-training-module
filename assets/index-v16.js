var e=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var t=e((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,ne());else{var t=n(l);t!==null&&E(x,t.startTime-e)}}}var S=!1,ee=-1,C=5,w=-1;function te(){return g?!0:!(e.unstable_now()-w<C)}function T(){if(g=!1,S){var t=e.unstable_now();w=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(ee),ee=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&te());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&E(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?ne():S=!1}}}var ne;if(typeof y==`function`)ne=function(){y(T)};else if(typeof MessageChannel<`u`){var re=new MessageChannel,ie=re.port2;re.port1.onmessage=T,ne=function(){ie.postMessage(null)}}else ne=function(){_(T,0)};function E(t,n){ee=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(ee),ee=-1):h=!0,E(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,ne()))),r},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),n=e(((e,n)=>{n.exports=t()})),r=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.for(`react.view_transition`),m=Symbol.iterator;function h(e){return typeof e!=`object`||!e?null:(e=m&&e[m]||e[`@@iterator`],typeof e==`function`?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function b(){}b.prototype=y.prototype;function x(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}var S=x.prototype=new b;S.constructor=x,_(S,y.prototype),S.isPureReactComponent=!0;var ee=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function T(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ne(e,t){return T(e.type,t,e.props)}function re(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ie(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var E=/\/+/g;function ae(e,t){return typeof e==`object`&&e&&e.key!=null?ie(``+e.key):t.toString(36)}function oe(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function se(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,se(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ae(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(E,`$&/`)+`/`),se(o,r,i,``,function(e){return e})):o!=null&&(re(o)&&(o=ne(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(E,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ae(a,u),c+=se(a,r,i,s,o);else if(u=h(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ae(a,u++),c+=se(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return se(oe(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function D(e,t,n){if(e==null)return e;var r=[],i=0;return se(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ce(e){if(e._status===-1){var t=e._result,n=t();n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t,n.status===void 0&&(n.status=`fulfilled`,n.value=t))},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t,n.status===void 0&&(n.status=`rejected`,n.reason=t))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var le=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function ue(e){var t=w.T,n={};n.types=t===null?null:t.types,w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,le)}catch(e){le(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}}function de(e){var t=w.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else ue(de.bind(null,e))}var fe={map:D,forEach:function(e,t,n){D(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return D(e,function(){t++}),t},toArray:function(e){return D(e,function(e){return e})||[]},only:function(e){if(!re(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=fe,e.Component=y,e.Fragment=r,e.Profiler=a,e.PureComponent=x,e.StrictMode=i,e.Suspense=l,e.ViewTransition=p,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.addTransitionType=de,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=_({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!te.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return T(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)te.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return T(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=re,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ce}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=ue,e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.3.1`})),i=e(((e,t)=>{t.exports=r()})),a=e((e=>{var t=i();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var a={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},o=Symbol.for(`react.portal`),s=Symbol.for(`react.recoverable`),c=Symbol.for(`react.optimistic_key`);function l(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:r==null?null:r===c?c:``+r,children:e,containerInfo:t,implementation:n}}var u=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,e.browser=function(e){return{$$typeof:s,_reason:e}},e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return l(e,t,null,r)},e.flushSync=function(e){var t=u.T,n=a.p;try{if(u.T=null,a.p=2,e)return e()}finally{u.T=t,a.p=n,a.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,a.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&a.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin),i=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?a.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:o}):n===`script`&&a.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=d(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}}else t??a.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=d(t.as,t.crossOrigin);a.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}else a.d.m(e)}},e.requestFormReset=function(e){a.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return u.H.useFormState(e,t,n)},e.useFormStatus=function(){return u.H.useHostTransitionStatus()},e.version=`19.3.1`})),o=e(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=a()})),s=e((e=>{var t=n(),r=i(),a=o();function s(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){for(var t=e,n=t;n&&!n.alternate;)t=n,t.flags&4098&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function u(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function d(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(l(e)!==e)throw Error(s(188))}function p(e){var t=e.alternate;if(!t){if(t=l(e),t===null)throw Error(s(188));return t===e?e:null}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return f(i),e;if(a===r)return f(i),t;a=a.sibling}throw Error(s(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,c=i.child;c;){if(c===n){o=!0,n=i,r=a;break}if(c===r){o=!0,r=i,n=a;break}c=c.sibling}if(!o){for(c=a.child;c;){if(c===n){o=!0,n=a,r=i;break}if(c===r){o=!0,r=a,n=i;break}c=c.sibling}if(!o)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}function h(e,t,n,r,i,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,r,i,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&h(e.child,t,n,r,i,a))return!0;e=e.sibling}return!1}function g(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function _(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),e.tag!==3&&e.tag!==5&&e.tag!==27);)e=e.return;return t}function v(e){var t=[null,null],n=g(e);return n===null||y(t,e,n.child,{foundSelf:!1}),t}function y(e,t,n,r){for(;n!==null;){if(n===t)r.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(r.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&y(e,t,n.child,r))return!0;n=n.sibling}return!1}function b(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(s(559))}}var x=null,S=null;function ee(e,t,n){return e===n||e===t&&(x=e,!0)}function C(e,t,n){return e===n?(S=e,!1):e===t&&(S!==null&&(x=e),!0)}function w(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function te(e,t,n){for(var r=0,i=e;i;i=n(i))r++;i=0;for(var a=t;a;a=n(a))i++;for(;0<r-i;)e=n(e),r--;for(;0<i-r;)t=n(t),i--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var T=Object.assign,ne=Symbol.for(`react.element`),re=Symbol.for(`react.transitional.element`),ie=Symbol.for(`react.portal`),E=Symbol.for(`react.fragment`),ae=Symbol.for(`react.strict_mode`),oe=Symbol.for(`react.profiler`),se=Symbol.for(`react.consumer`),D=Symbol.for(`react.context`),ce=Symbol.for(`react.forward_ref`),le=Symbol.for(`react.suspense`),ue=Symbol.for(`react.suspense_list`),de=Symbol.for(`react.memo`),fe=Symbol.for(`react.lazy`),pe=Symbol.for(`react.activity`),me=Symbol.for(`react.legacy_hidden`),he=Symbol.for(`react.memo_cache_sentinel`),ge=Symbol.for(`react.view_transition`),_e=Symbol.for(`react.recoverable`),ve=Symbol.iterator;function ye(e){return typeof e!=`object`||!e?null:(e=ve&&e[ve]||e[`@@iterator`],typeof e==`function`?e:null)}var be=Symbol.for(`react.client.reference`);function xe(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===be?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case E:return`Fragment`;case oe:return`Profiler`;case ae:return`StrictMode`;case le:return`Suspense`;case ue:return`SuspenseList`;case pe:return`Activity`;case ge:return`ViewTransition`}if(typeof e==`object`)switch(e.$$typeof){case ie:return`Portal`;case D:return e.displayName||`Context`;case se:return(e._context.displayName||`Context`)+`.Consumer`;case ce:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case de:return t=e.displayName||null,t===null?xe(e.type)||`Memo`:t;case fe:t=e._payload,e=e._init;try{return xe(e(t))}catch{}}return null}var O=Array.isArray,k=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Se={pending:!1,data:null,method:null,action:null},Ce=[],we=-1;function Te(e){return{current:e}}function j(e){0>we||(e.current=Ce[we],Ce[we]=null,we--)}function M(e,t){we++,Ce[we]=e.current,e.current=t}var Ee=Te(null),De=Te(null),Oe=Te(null),ke=Te(null);function Ae(e,t){switch(M(Oe,t),M(De,e),M(Ee,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?up(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=up(t),e=dp(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}j(Ee),M(Ee,e)}function je(){j(Ee),j(De),j(Oe)}function Me(e){var t=e.memoizedState;t!==null&&(sh._currentValue=t.memoizedState,M(ke,e)),t=Ee.current;var n=dp(t,e.type);t!==n&&(M(De,e),M(Ee,n))}function Ne(e){De.current===e&&(j(Ee),j(De)),ke.current===e&&(j(ke),sh._currentValue=Se)}var Pe,Fe;function Ie(e){if(Pe===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Pe=t&&t[1]||``,Fe=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Pe+e+Fe}var Le=!1;function Re(e,t){if(!e||Le)return``;Le=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}n=!1;try{var i=Object.getOwnPropertyDescriptor(e.prototype,`props`);Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(i===void 0?delete e.prototype.props:Object.defineProperty(e.prototype,"props",i))}}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Le=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ie(n):``}function ze(e,t){switch(e.tag){case 26:case 27:case 5:return Ie(e.type);case 16:return Ie(`Lazy`);case 13:return e.child!==t&&t!==null?Ie(`Suspense Fallback`):Ie(`Suspense`);case 19:return Ie(`SuspenseList`);case 0:case 15:return Re(e.type,!1);case 11:return Re(e.type.render,!1);case 1:return Re(e.type,!0);case 31:return Ie(`Activity`);case 30:return Ie(`ViewTransition`);default:return``}}function Be(e){try{var t=``,n=null;do t+=ze(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ve=Object.prototype.hasOwnProperty,He=t.unstable_scheduleCallback,Ue=t.unstable_cancelCallback,We=t.unstable_shouldYield,Ge=t.unstable_requestPaint,N=t.unstable_now,Ke=t.unstable_getCurrentPriorityLevel,qe=t.unstable_ImmediatePriority,P=t.unstable_UserBlockingPriority,Je=t.unstable_NormalPriority,Ye=t.unstable_LowPriority,Xe=t.unstable_IdlePriority,Ze=t.log,Qe=t.unstable_setDisableYieldValue,$e=null,et=null;function tt(e){if(typeof Ze==`function`&&Qe(e),et&&typeof et.setStrictMode==`function`)try{et.setStrictMode($e,e)}catch{}}var nt=Math.clz32?Math.clz32:at,rt=Math.log,it=Math.LN2;function at(e){return e>>>=0,e===0?32:31-(rt(e)/it|0)|0}var ot=256,st=262144,ct=4194304;function lt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ut(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=lt(n))):i=lt(o):i=lt(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=lt(n))):i=lt(o)):i=lt(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function dt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ft(e,t){t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-nt(n),i=1<<r;t|=e[r],n&=~i}return t}function pt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mt(){var e=ct;return ct<<=1,!(ct&62914560)&&(ct=4194304),e}function ht(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function gt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function _t(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-nt(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&vt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function vt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-nt(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function yt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-nt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function bt(e,t){var n=t&-t;return n=n&42?1:xt(n),(n&(e.suspendedLanes|t))===0?n:0}function xt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function St(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function Ct(){var e=A.p;return e===0?(e=window.event,e===void 0?32:Ch(e.type)):e}function wt(e,t){var n=A.p;try{return A.p=e,t()}finally{A.p=n}}var Tt=Math.random().toString(36).slice(2),Et=`__reactFiber$`+Tt,Dt=`__reactProps$`+Tt,Ot=`__reactContainer$`+Tt,kt=`__reactEvents$`+Tt,At=`__reactListeners$`+Tt,jt=`__reactHandles$`+Tt,Mt=`__reactResources$`+Tt,Nt=`__reactMarker$`+Tt,Pt=`__reactLoad$`+Tt;function Ft(e){delete e[Et],delete e[Dt],delete e[At],delete e[jt]}function It(e){var t;if(t=e[Et])return t;for(var n=e.parentNode;n;){if(t=n[Ot]||n[Et]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fm(e);e!==null;){if(n=e[Et])return n;e=fm(e)}return t}e=n,n=e.parentNode}return null}function Lt(e){if(e=e[Et]||e[Ot]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Rt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function zt(e){var t=e[Mt];return t||=e[Mt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Bt(e){e[Nt]=!0}function Vt(e){e[Pt]=void 0}var Ht=new Set,Ut={};function Wt(e,t){Gt(e,t),Gt(e+`Capture`,t)}function Gt(e,t){for(Ut[e]=t,e=0;e<t.length;e++)Ht.add(t[e])}var Kt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),qt={},Jt={};function Yt(e){return Ve.call(Jt,e)?!0:Ve.call(qt,e)?!1:Kt.test(e)?Jt[e]=!0:(qt[e]=!0,!1)}var F=!1;function Xt(){var e=F;return F=!1,e}function Zt(e,t,n){if(Yt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,n)}}}function Qt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,n)}}function $t(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,r)}}function en(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function tn(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function nn(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function rn(e){if(!e._valueTracker){var t=tn(e)?`checked`:`value`;e._valueTracker=nn(e,t,``+e[t])}}function an(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=tn(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}var on=/[\n"\\]/g;function sn(e){return e.replace(on,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function cn(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+en(t)):e.value!==``+en(t)&&(e.value=``+en(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):un(e,en(n)):o===`number`&&e.value==t?un(e,en(e.value)):un(e,en(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+en(s):e.removeAttribute(`name`)}function ln(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){rn(e);return}n=n==null?``:``+en(n),t=t==null?n:``+en(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),rn(e)}function un(e,t){e.defaultValue!==``+t&&(e.defaultValue=``+t)}function dn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+en(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function fn(e,t,n){t!=null&&(t=``+en(t),t!==e.value&&(e.value=t),n==null)?e.defaultValue!==t&&(e.defaultValue=t):e.defaultValue=n==null?``:``+en(n)}function pn(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(s(92));if(O(r)){if(1<r.length)throw Error(s(93));r=r[0]}n=r}n??=``,t=n}n=en(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),rn(e)}function mn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var hn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function gn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||hn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function _n(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(s(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``,F=!0);for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&(gn(e,i,r),F=!0)}else for(var a in t)t.hasOwnProperty(a)&&gn(e,a,t[a])}function vn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var yn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`maskType`,`mask-type`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),bn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function xn(e){return bn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function Sn(){}var Cn=null;function wn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Tn=null,En=null;function Dn(e){var t=Lt(e);if(t&&(e=t.stateNode)){var n=e[Dt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(cn(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+sn(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[Dt]||null;if(!i)throw Error(s(90));cn(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&an(r)}break a;case`textarea`:fn(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&dn(e,!!n.multiple,t,!1)}}}var On=!1;function kn(e,t,n){if(On)return e(t,n);On=!0;try{return e(t)}finally{if(On=!1,(Tn!==null||En!==null)&&(zd(),Tn&&(t=Tn,e=En,En=Tn=null,Dn(t),e)))for(t=0;t<e.length;t++)Dn(e[t])}}function An(e,t){var n=e.stateNode;if(n===null)return null;var r=n[Dt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(s(231,t,typeof n));return n}var jn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,Mn=!1;if(jn)try{var Nn={};Object.defineProperty(Nn,"passive",{get:function(){Mn=!0}}),window.addEventListener(`test`,Nn,Nn),window.removeEventListener(`test`,Nn,Nn)}catch{Mn=!1}var Pn=null,Fn=null,In=null;function Ln(){if(In)return In;var e,t=Fn,n=t.length,r,i=`value`in Pn?Pn.value:Pn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return In=i.slice(e,1<r?1-r:void 0)}function Rn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zn(){return!0}function Bn(){return!1}function Vn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?zn:Bn,this.isPropagationStopped=Bn,this}return T(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=zn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=zn)},persist:function(){},isPersistent:zn}),t}var Hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Un=Vn(Hn),Wn=T({},Hn,{view:0,detail:0}),Gn=Vn(Wn),Kn,qn,Jn,Yn=T({},Wn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:or,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Jn&&(Jn&&e.type===`mousemove`?(Kn=e.screenX-Jn.screenX,qn=e.screenY-Jn.screenY):qn=Kn=0,Jn=e),Kn)},movementY:function(e){return`movementY`in e?e.movementY:qn}}),Xn=Vn(Yn),Zn=Vn(T({},Yn,{dataTransfer:0})),Qn=Vn(T({},Wn,{relatedTarget:0})),$n=Vn(T({},Hn,{animationName:0,elapsedTime:0,pseudoElement:0})),er=Vn(T({},Hn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),tr=Vn(T({},Hn,{data:0})),nr={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},rr={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},ir={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function ar(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ir[e])?!!t[e]:!1}function or(){return ar}var sr=Vn(T({},Wn,{key:function(e){if(e.key){var t=nr[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Rn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?rr[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:or,charCode:function(e){return e.type===`keypress`?Rn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Rn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),cr=Vn(T({},Yn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),lr=Vn(T({},Hn,{submitter:0})),ur=Vn(T({},Wn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:or})),dr=Vn(T({},Hn,{propertyName:0,elapsedTime:0,pseudoElement:0})),fr=Vn(T({},Yn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),pr=Vn(T({},Hn,{newState:0,oldState:0,source:0})),mr=[9,13,27,32],hr=jn&&`CompositionEvent`in window,gr=null;jn&&`documentMode`in document&&(gr=document.documentMode);var _r=jn&&`TextEvent`in window&&!gr,vr=jn&&(!hr||gr&&8<gr&&11>=gr),yr=` `,br=!1;function xr(e,t){switch(e){case`keyup`:return mr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function Sr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var Cr=!1;function wr(e,t){switch(e){case`compositionend`:return Sr(t);case`keypress`:return t.which===32?(br=!0,yr):null;case`textInput`:return e=t.data,e===yr&&br?null:e;default:return null}}function Tr(e,t){if(Cr)return e===`compositionend`||!hr&&xr(e,t)?(e=Ln(),In=Fn=Pn=null,Cr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return vr&&t.locale!==`ko`?null:t.data;default:return null}}var Er={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!Er[e.type]:t===`textarea`}function Or(e,t,n,r){Tn?En?En.push(r):En=[r]:Tn=r,t=Jf(t,`onChange`),0<t.length&&(n=new Un(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var kr=null,Ar=null;function jr(e){Vf(e,0)}function Mr(e){if(an(Rt(e)))return e}function Nr(e,t){if(e===`change`)return t}var Pr=!1;if(jn){var Fr;if(jn){var Ir=`oninput`in document;if(!Ir){var Lr=document.createElement(`div`);Lr.setAttribute(`oninput`,`return;`),Ir=typeof Lr.oninput==`function`}Fr=Ir}else Fr=!1;Pr=Fr&&(!document.documentMode||9<document.documentMode)}function Rr(){kr&&(kr.detachEvent(`onpropertychange`,zr),Ar=kr=null)}function zr(e){if(e.propertyName===`value`&&Mr(Ar)){var t=[];Or(t,Ar,e,wn(e)),kn(jr,t)}}function Br(e,t,n){e===`focusin`?(Rr(),kr=t,Ar=n,kr.attachEvent(`onpropertychange`,zr)):e===`focusout`&&Rr()}function Vr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return Mr(Ar)}function Hr(e,t){if(e===`click`)return Mr(t)}function Ur(e,t){if(e===`input`||e===`change`)return Mr(t)}function Wr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Gr=typeof Object.is==`function`?Object.is:Wr;function Kr(e,t){if(Gr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ve.call(t,i)||!Gr(e[i],t[i]))return!1}return!0}function qr(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function Jr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yr(e,t){var n=Jr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Jr(n)}}function Xr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Xr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Zr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=qr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=qr(e.document)}return t}function Qr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var $r=jn&&`documentMode`in document&&11>=document.documentMode,ei=null,ti=null,ni=null,ri=!1;function ii(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ri||ei==null||ei!==qr(r)||(r=ei,`selectionStart`in r&&Qr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ni&&Kr(ni,r)||(ni=r,r=Jf(ti,`onSelect`),0<r.length&&(t=new Un(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=ei)))}function ai(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var oi={animationend:ai(`Animation`,`AnimationEnd`),animationiteration:ai(`Animation`,`AnimationIteration`),animationstart:ai(`Animation`,`AnimationStart`),transitionrun:ai(`Transition`,`TransitionRun`),transitionstart:ai(`Transition`,`TransitionStart`),transitioncancel:ai(`Transition`,`TransitionCancel`),transitionend:ai(`Transition`,`TransitionEnd`)},si={},ci={};jn&&(ci=document.createElement(`div`).style,`AnimationEvent`in window||(delete oi.animationend.animation,delete oi.animationiteration.animation,delete oi.animationstart.animation),`TransitionEvent`in window||delete oi.transitionend.transition);function li(e){if(si[e])return si[e];if(!oi[e])return e;var t=oi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ci)return si[e]=t[n];return e}var ui=li(`animationend`),di=li(`animationiteration`),fi=li(`animationstart`),pi=li(`transitionrun`),mi=li(`transitionstart`),hi=li(`transitioncancel`),gi=li(`transitionend`),_i=new Map,vi=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);vi.push(`scrollEnd`);function yi(e,t){_i.set(e,t),Wt(t,[e])}var bi=0;function xi(e,t){if(e.name!=null&&e.name!==`auto`)return e.name;if(t.autoName!==null)return t.autoName;e=bd.identifierPrefix;var n=bi++;return e=`_`+e+`t_`+n.toString(32)+`_`,t.autoName=e}function Si(e){if(e==null||typeof e==`string`)return e;var t=null,n=Od;if(n!==null)for(var r=0;r<n.length;r++){var i=e[n[r]];if(i!=null){if(i===`none`)return`none`;t=t==null?i:t+(` `+i)}}return t??e.default}function Ci(e,t){return e=Si(e),t=Si(t),t==null?e===`auto`?null:e:t===`auto`?null:t}var wi=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Ti=[],Ei=0,Di=0;function Oi(){for(var e=Ei,t=Di=Ei=0;t<e;){var n=Ti[t];Ti[t++]=null;var r=Ti[t];Ti[t++]=null;var i=Ti[t];Ti[t++]=null;var a=Ti[t];if(Ti[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&Mi(n,i,a)}}function ki(e,t,n,r){Ti[Ei++]=e,Ti[Ei++]=t,Ti[Ei++]=n,Ti[Ei++]=r,Di|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Ai(e,t,n,r){return ki(e,t,n,r),Ni(e)}function ji(e,t){return ki(e,null,null,t),Ni(e)}function Mi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-nt(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function Ni(e){if(50<kd)throw kd=0,Ad=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Pi={};function Fi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ii(e,t,n,r){return new Fi(e,t,n,r)}function Li(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ri(e,t){var n=e.alternate;return n===null?(n=Ii(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function zi(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Bi(e,t,n,r,i,a){var o=0;if(r=e,typeof r==`function`)Li(r)&&(o=1);else if(typeof r==`string`)o=qm(e,n,Ee.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(r){case pe:return e=Ii(31,n,t,i),e.elementType=pe,e.lanes=a,e;case E:return Vi(n.children,i,a,t);case ae:o=8,i|=24;break;case oe:return e=Ii(12,n,t,i|2),e.elementType=oe,e.lanes=a,e;case le:return e=Ii(13,n,t,i),e.elementType=le,e.lanes=a,e;case ue:return e=Ii(19,n,t,i),e.elementType=ue,e.lanes=a,e;case me:case ge:return e=i|32,e=Ii(30,n,t,e),e.elementType=ge,e.lanes=a,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r==`object`&&r)switch(r.$$typeof){case D:o=10;break a;case se:o=9;break a;case ce:o=11;break a;case de:o=14;break a;case fe:o=16,r=null;break a}o=29,n=Error(s(130,e===null?`null`:typeof e,``)),r=null}return t=Ii(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Vi(e,t,n,r){return e=Ii(7,e,r,t),e.lanes=n,e}function Hi(e,t,n){return e=Ii(6,e,null,t),e.lanes=n,e}function Ui(e){var t=Ii(18,null,null,0);return t.stateNode=e,t}function Wi(e,t,n){return t=Ii(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Gi=new WeakMap;function Ki(e,t){if(typeof e==`object`&&e){var n=Gi.get(e);return n===void 0?(t={value:e,source:t,stack:Be(t)},Gi.set(e,t),t):n}return{value:e,source:t,stack:Be(t)}}var qi=[],Ji=0,Yi=null,Xi=0,Zi=[],Qi=0,$i=null,ea=1,ta=``;function na(e,t){qi[Ji++]=Xi,qi[Ji++]=Yi,Yi=e,Xi=t}function ra(e,t,n){Zi[Qi++]=ea,Zi[Qi++]=ta,Zi[Qi++]=$i,$i=e;var r=ea;e=ta;var i=32-nt(r)-1;r&=~(1<<i),n+=1;var a=32-nt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ea=1<<32-nt(t)+i|n<<i|r,ta=a+e}else ea=1<<a|n<<i|r,ta=e}function ia(e){e.return!==null&&(na(e,1),ra(e,1,0))}function aa(e){for(;e===Yi;)Yi=qi[--Ji],qi[Ji]=null,Xi=qi[--Ji],qi[Ji]=null;for(;e===$i;)$i=Zi[--Qi],Zi[Qi]=null,ta=Zi[--Qi],Zi[Qi]=null,ea=Zi[--Qi],Zi[Qi]=null}function oa(e,t){Zi[Qi++]=ea,Zi[Qi++]=ta,Zi[Qi++]=$i,ea=t.id,ta=t.overflow,$i=e}var sa=null,I=null,L=!1,ca=null,la=!1,ua=Error(s(519));function da(e){throw _a(Ki(Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),ua}function fa(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Et]=e,t[Dt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<zf.length;n++)Q(zf[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),ln(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),pn(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||ep(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=Sn),t=!0):t=!1,t||da(e,!0)}function pa(e){for(sa=e.return;sa;)switch(sa.tag){case 5:case 31:case 13:la=!1;return;case 27:case 3:la=!0;return;default:sa=sa.return}}function ma(e){if(e!==sa)return!1;if(!L)return pa(e),L=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||pp(e.type,e.memoizedProps)),n=!n),n&&I&&da(e),pa(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));I=dm(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));I=dm(e)}else t===27?(t=I,Sp(e.type)?(e=um,um=null,I=e):I=t):I=sa?lm(e.stateNode.nextSibling):null;return!0}function ha(){I=sa=null,L=!1}function ga(){var e=ca;return e!==null&&(pd===null?pd=e:pd.push.apply(pd,e),ca=null),e}function _a(e){ca===null?ca=[e]:ca.push(e)}var va=Te(null),ya=null,ba=null;function xa(e,t,n){M(va,t._currentValue),t._currentValue=n}function Sa(e){e._currentValue=va.current,j(va)}function Ca(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function wa(e,t,n,r){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){var o=i.child;a=a.firstContext;a:for(;a!==null;){var c=a;a=i;for(var l=0;l<t.length;l++)if(c.context===t[l]){a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),Ca(a.return,n,e),r||(o=null);break a}a=c.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(s(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ca(o,n,e),o=null}else i.tag===13&&i.memoizedState!==null&&i.memoizedState.dehydrated===null?(i.lanes|=n,o=i.alternate,o!==null&&(o.lanes|=n),Ca(i.return,n,e),o=i.child,o=o===null?null:o.sibling):o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function Ta(e,t,n,r){e=null;for(var i=t,a=!1;i!==null;){if(!a){if(i.flags&524288)a=!0;else if(i.flags&262144)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(s(387));if(o=o.memoizedProps,o!==null){var c=i.type;Gr(i.pendingProps.value,o.value)||(e===null?e=[c]:e.push(c))}}else if(i===ke.current){if(o=i.alternate,o===null)throw Error(s(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e===null?e=[sh]:e.push(sh))}i=i.return}return e!==null&&wa(t,e,n,r),t.flags|=262144,e!==null}function Ea(e){for(e=e.firstContext;e!==null;){if(!Gr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Da(e){ya=e,ba=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Oa(e){return Aa(ya,e)}function ka(e,t){return ya===null&&Da(e),Aa(e,t)}function Aa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ba===null){if(e===null)throw Error(s(308));ba=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ba=ba.next=t;return n}var ja=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Ma=t.unstable_scheduleCallback,Na=t.unstable_NormalPriority,Pa={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Fa(){return{controller:new ja,data:new Map,refCount:0}}function Ia(e){e.refCount--,e.refCount===0&&Ma(Na,function(){e.controller.abort()})}function La(e,t){if(e.pendingLanes&4194048){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];n.indexOf(r)===-1&&n.push(r)}}}var Ra=null;function za(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Ba=null,Va=0,Ha=0,Ua=null;function Wa(e,t){if(Ba===null){var n=Ba=[];Va=0,Ha=Pf(),Ua={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return Va++,t.then(Ga,Ga),t}function Ga(){if(--Va===0&&(Ra=null,Ba!==null)){Ua!==null&&(Ua.status=`fulfilled`);var e=Ba;Ba=null,Ha=0,Ua=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ka(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var qa=k.S;k.S=function(e,t){if(gd=N(),typeof t==`object`&&t&&typeof t.then==`function`&&Wa(e,t),Ra!==null)for(var n=bf;n!==null;)La(n,Ra),n=n.next;if(n=e.types,n!==null){for(var r=bf;r!==null;)La(r,n),r=r.next;if(Ha!==0){r=Ra,r===null&&(r=Ra=[]);for(var i=0;i<n.length;i++){var a=n[i];r.indexOf(a)===-1&&r.push(a)}}}qa!==null&&qa(e,t)};var Ja=Te(null);function Ya(){var e=Ja.current;return e===null?G.pooledCache:e}function Xa(e,t){t===null?M(Ja,Ja.current):M(Ja,t.pool)}function Za(){var e=Ya();return e===null?null:{parent:Pa._currentValue,pool:e}}var Qa=Error(s(460)),$a=Error(s(474)),eo=Error(s(542)),to={then:function(){}};function no(e){return e=e.status,e===`fulfilled`||e===`rejected`}function ro(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Sn,Sn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,so(e),e===void 0&&!(`reason`in t)?Error(s(600)):e;default:if(typeof t.status==`string`)t.then(Sn,Sn);else{if(e=G,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,so(e),e}throw ao=t,Qa}}function io(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(ao=e,Qa):e}}var ao=null;function oo(){if(ao===null)throw Error(s(459));var e=ao;return ao=null,e}function so(e){if(e===Qa||e===eo)throw Error(s(483))}var co=null,lo=0;function uo(e){var t=lo;return lo+=1,co===null&&(co=[]),ro(co,e,t)}function fo(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function po(e,t){throw t.$$typeof===ne?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function mo(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function i(e,t){return e=Ri(e,t),e.index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=134217730,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function o(t){return e&&t.alternate===null&&(t.flags|=134217730),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Hi(n,e.mode,r),t.return=e,t):(t=i(t,n),t.return=e,t)}function l(e,t,n,r){var a=n.type;return a===E?(e=d(e,t,n.props.children,r,n.key),fo(e,n),e):t!==null&&(t.elementType===a||typeof a==`object`&&a&&a.$$typeof===fe&&io(a)===t.type)?(t=i(t,n.props),fo(t,n),t.return=e,t):(t=Bi(n.type,n.key,n.props,null,e.mode,r),fo(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Wi(n,e.mode,r),t.return=e,t):(t=i(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,a){return t===null||t.tag!==7?(t=Vi(n,e.mode,r,a),t.return=e,t):(t=i(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Hi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case re:return n=Bi(t.type,t.key,t.props,null,e.mode,n),fo(n,t),n.return=e,n;case ie:return t=Wi(t,e.mode,n),t.return=e,t;case fe:return t=io(t),f(e,t,n)}if(O(t)||ye(t))return t=Vi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,uo(t),n);if(t.$$typeof===D)return f(e,ka(e,t),n);po(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case re:return n.key===i?l(e,t,n,r):null;case ie:return n.key===i?u(e,t,n,r):null;case fe:return n=io(n),p(e,t,n,r)}if(O(n)||ye(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,uo(n),r);if(n.$$typeof===D)return p(e,t,ka(e,n),r);po(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case re:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case ie:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case fe:return r=io(r),m(e,t,n,r,i)}if(O(r)||ye(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,uo(r),i);if(r.$$typeof===D)return m(e,t,n,ka(t,r),i);po(t,r)}return null}function h(i,o,s,c){for(var l=null,u=null,d=o,h=o=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),o=a(_,o,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),L&&na(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(o=a(d,o,h),u===null?l=d:u.sibling=d,u=d);return L&&na(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&(_=g.alternate,_!==null&&d.delete(_.key===null?h:_.key)),o=a(g,o,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),L&&na(i,h),l}function g(i,o,c,l){if(c==null)throw Error(s(151));for(var u=null,d=null,h=o,g=o=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(i,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(i,h),o=a(y,o,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(i,h),L&&na(i,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(i,v.value,l),v!==null&&(o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return L&&na(i,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,i,g,v.value,l),v!==null&&(e&&(_=v.alternate,_!==null&&h.delete(_.key===null?g:_.key)),o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(i,e)}),L&&na(i,g),u}function _(e,r,a,c){if(typeof a==`object`&&a&&a.type===E&&a.key===null&&a.props.ref===void 0&&(a=a.props.children),typeof a==`object`&&a){switch(a.$$typeof){case re:a:{for(var l=a.key;r!==null;){if(r.key===l){if(l=a.type,l===E){if(r.tag===7){n(e,r.sibling),c=i(r,a.props.children),fo(c,a),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===fe&&io(l)===r.type){n(e,r.sibling),c=i(r,a.props),fo(c,a),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}a.type===E?(c=Vi(a.props.children,e.mode,c,a.key),fo(c,a),c.return=e,e=c):(c=Bi(a.type,a.key,a.props,null,e.mode,c),fo(c,a),c.return=e,e=c)}return o(e);case ie:a:{for(l=a.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===a.containerInfo&&r.stateNode.implementation===a.implementation){n(e,r.sibling),c=i(r,a.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=Wi(a,e.mode,c),c.return=e,e=c}return o(e);case fe:return a=io(a),_(e,r,a,c)}if(O(a))return h(e,r,a,c);if(ye(a)){if(l=ye(a),typeof l!=`function`)throw Error(s(150));return a=l.call(a),g(e,r,a,c)}if(typeof a.then==`function`)return _(e,r,uo(a),c);if(a.$$typeof===D)return _(e,r,ka(e,a),c);po(e,a)}return typeof a==`string`&&a!==``||typeof a==`number`||typeof a==`bigint`?(a=``+a,r!==null&&r.tag===6?(n(e,r.sibling),c=i(r,a),c.return=e,e=c):(n(e,r),c=Hi(a,e.mode,c),c.return=e,e=c),o(e)):n(e,r)}return function(e,t,n,r){try{lo=0;var i=_(e,t,n,r);return co=null,i}catch(t){if(t===Qa||t===eo)throw t;var a=Ii(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var ho=mo(!0),go=mo(!1),_o=!1;function vo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function bo(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function xo(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Ni(e),Mi(e,null,n),t}return ki(e,r,t,n),Ni(e)}function So(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,yt(e,n)}}function Co(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n}else e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var wo=!1;function To(){if(wo){var e=Ua;if(e!==null)throw e}}function Eo(e,t,n,r){wo=!1;var i=e.updateQueue;_o=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(q&f)===f:(r&f)===f){f!==0&&f===Ha&&(wo=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,h=s;f=t;var g=n;switch(h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(g,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(g,d,f):m,f==null)break a;d=T({},d,f);break a;case 2:_o=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),sd|=o,e.lanes=o,e.memoizedState=d}}function Do(e,t){if(typeof e!=`function`)throw Error(s(191,e));e.call(t)}function Oo(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Do(n[e],t)}var ko=Te(null),Ao=Te(0);function jo(e,t){e=od,M(Ao,e),M(ko,t),od=e|t.baseLanes}function Mo(){M(Ao,od),M(ko,ko.current)}function No(){od=Ao.current,j(ko),j(Ao)}var Po=Te(null),Fo=null;function Io(e){var t=e.alternate;M(Vo,Vo.current&1),M(Po,e),Fo===null&&(t===null||ko.current!==null||t.memoizedState!==null)&&(Fo=e)}function Lo(e){M(Vo,Vo.current),M(Po,e),Fo===null&&(Fo=e)}function Ro(e){e.tag===22?(M(Vo,Vo.current),M(Po,e),Fo===null&&(Fo=e)):zo()}function zo(){M(Vo,Vo.current),M(Po,Po.current)}function Bo(e){j(Po),Fo===e&&(Fo=null),j(Vo)}var Vo=Te(0);function Ho(e,t){M(Po,Po.current),M(Vo,t)}function Uo(e){j(Vo),j(Po),Fo===e&&(Fo=null)}function Wo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||om(n)||sm(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==`independent`){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Go=0,R=null,z=null,Ko=null,qo=!1,Jo=!1,Yo=!1,Xo=0,Zo=0,Qo=null,$o=0;function B(){throw Error(s(321))}function es(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Gr(e[n],t[n]))return!1;return!0}function ts(e,t,n,r,i,a){return Go=a,R=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,k.H=e===null||e.memoizedState===null?vc:yc,Yo=!1,a=n(r,i),Yo=!1,Jo&&(a=rs(t,n,r,i)),ns(e),a}function ns(e){k.H=_c;var t=z!==null&&z.next!==null;if(Go=0,Ko=z=R=null,qo=!1,Zo=0,Qo=null,t)throw Error(s(300));e===null||Ic||(e=e.dependencies,e!==null&&Ea(e)&&(Ic=!0))}function rs(e,t,n,r){R=e;var i=0;do{if(Jo&&(Qo=null),Zo=0,Jo=!1,25<=i)throw Error(s(301));if(i+=1,Ko=z=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}k.H=bc,a=t(n,r)}while(Jo);return a}function is(){var e=k.H,t=e.useState()[0];return t=typeof t.then==`function`?ds(t):t,e=e.useState()[0],(z===null?null:z.memoizedState)!==e&&(R.flags|=1024),t}function as(){var e=Xo!==0;return Xo=0,e}function os(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ss(e){if(qo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}qo=!1}Go=0,Ko=z=R=null,Jo=!1,Zo=Xo=0,Qo=null}function cs(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ko===null?R.memoizedState=Ko=e:Ko=Ko.next=e,Ko}function ls(){if(z===null){var e=R.alternate;e=e===null?null:e.memoizedState}else e=z.next;var t=Ko===null?R.memoizedState:Ko.next;if(t!==null)Ko=t,z=e;else{if(e===null)throw R.alternate===null?Error(s(467)):Error(s(310));z=e,e={memoizedState:z.memoizedState,baseState:z.baseState,baseQueue:z.baseQueue,queue:z.queue,next:null},Ko===null?R.memoizedState=Ko=e:Ko=Ko.next=e}return Ko}function us(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ds(e){var t=Zo;return Zo+=1,Qo===null&&(Qo=[]),e=ro(Qo,e,t),t=R,(Ko===null?t.memoizedState:Ko.next)===null&&(t=t.alternate,k.H=t===null||t.memoizedState===null?vc:yc),e}function fs(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return ds(e);if(e.$$typeof===_e)return;if(e.$$typeof===D)return Oa(e)}throw Error(s(438,String(e)))}function ps(e){var t=null,n=R.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=R.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=us(),R.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=he;return t.index++,n}function ms(e,t){return typeof t==`function`?t(e):t}function hs(e){return gs(ls(),z,e)}function gs(e,t,n){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=n;var i=e.baseQueue,a=r.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}t.baseQueue=i=a,r.pending=null}if(a=e.baseState,i===null)e.memoizedState=a;else{t=i.next;var c=o=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(Go&f)===f:(q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Ha&&(d=!0);else if((Go&p)===p){u=u.next,p===Ha&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,o=a):l=l.next=f,R.lanes|=p,sd|=p;f=u.action,Yo&&n(a,f),a=u.hasEagerState?u.eagerState:n(a,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,o=a):l=l.next=p,R.lanes|=f,sd|=f;u=u.next}while(u!==null&&u!==t);if(l===null?o=a:l.next=c,!Gr(a,e.memoizedState)&&(Ic=!0,d&&(n=Ua,n!==null)))throw n;e.memoizedState=a,e.baseState=o,e.baseQueue=l,r.lastRenderedState=a}return i===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function _s(e){var t=ls(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);Gr(a,t.memoizedState)||(Ic=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function vs(e,t,n){var r=R,i=ls(),a=L;if(a){if(n===void 0)throw Error(s(407));n=n()}else n=t();var o=!Gr((z||i).memoizedState,n);if(o&&(i.memoizedState=n,Ic=!0),i=i.queue,Us(xs.bind(null,r,i,e),[e]),e=i.getSnapshot!==t||o||Ko!==null&&!!(Ko.memoizedState.tag&1),Rs(e?9:8,{destroy:void 0},bs.bind(null,r,i,n,t),null),e){if(r.flags|=2048,G===null)throw Error(s(349));a||Go&127||ys(r,t,n)}return n}function ys(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=R.updateQueue,t===null?(t=us(),R.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function bs(e,t,n,r){t.value=n,t.getSnapshot=r,Ss(t)&&Cs(e)}function xs(e,t,n){return n(function(){Ss(t)&&Cs(e)})}function Ss(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Gr(e,n)}catch{return!0}}function Cs(e){var t=ji(e,2);t!==null&&Pd(t,e,2)}function ws(e){var t=cs();if(typeof e==`function`){var n=e;if(e=n(),Yo){tt(!0);try{n()}finally{tt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ms,lastRenderedState:e},t}function Ts(e,t,n,r){return e.baseState=n,gs(e,z,typeof r==`function`?r:ms)}function Es(e,t,n,r,i){if(mc(e))throw Error(s(485));if(e=t.action,e!==null){var a={payload:i,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){a.listeners.push(e)}};k.T===null?a.isTransition=!1:n(!0),r(a),n=t.pending,n===null?(a.next=t.pending=a,Ds(t,a)):(a.next=n.next,t.pending=n.next=a)}}function Ds(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=k.T,o={};o.types=a===null?null:a.types,k.T=o;try{var s=n(i,r),c=k.S;c!==null&&c(o,s),Os(e,t,s)}catch(n){As(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),k.T=a}}else try{a=n(i,r),Os(e,t,a)}catch(n){As(e,t,n)}}function Os(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){ks(e,t,n)},function(n){return As(e,t,n)}):ks(e,t,n)}function ks(e,t,n){t.status=`fulfilled`,t.value=n,js(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ds(e,n)))}function As(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,js(t),t=t.next;while(t!==r)}e.action=null}function js(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ms(e,t){return t}function Ns(e,t){if(L){var n=G.formState;if(n!==null){a:{var r=R;if(L){if(I){b:{for(var i=I,a=la;i.nodeType!==8;)if(!a||(i=lm(i.nextSibling),i===null)){i=null;break b}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){I=lm(i.nextSibling),r=i.data===`F!`;break a}}da(r)}r=!1}r&&(t=n[0])}}return n=cs(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ms,lastRenderedState:t},n.queue=r,n=dc.bind(null,R,r),r.dispatch=n,r=ws(!1),a=pc.bind(null,R,!1,r.queue),r=cs(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Es.bind(null,R,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Ps(e){return Fs(ls(),z,e)}function Fs(e,t,n){if(t=gs(e,t,Ms)[0],e=hs(ms)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=ds(t)}catch(e){throw e===Qa?eo:e}else r=t;t=ls();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(R.flags|=2048,Rs(9,{destroy:void 0},Is.bind(null,i,n),null)),[r,a,e]}function Is(e,t){e.action=t}function Ls(e){var t=ls(),n=z;if(n!==null)return Fs(t,n,e);ls(),t=t.memoizedState,n=ls();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Rs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=R.updateQueue,t===null&&(t=us(),R.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function zs(){return ls().memoizedState}function Bs(e,t,n,r){var i=cs();R.flags|=e,i.memoizedState=Rs(1|t,{destroy:void 0},n,r===void 0?null:r)}function Vs(e,t,n,r){var i=ls();r=r===void 0?null:r;var a=i.memoizedState.inst;z!==null&&r!==null&&es(r,z.memoizedState.deps)?i.memoizedState=Rs(t,a,n,r):(R.flags|=e,i.memoizedState=Rs(1|t,a,n,r))}function Hs(e,t){Bs(8390656,8,e,t)}function Us(e,t){Vs(2048,8,e,t)}function Ws(e){R.flags|=4;var t=R.updateQueue;if(t===null)t=us(),R.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Gs(e){var t=ls().memoizedState;return Ws({ref:t,nextImpl:e}),function(){if(W&2)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function Ks(e,t){return Vs(4,2,e,t)}function qs(e,t){return Vs(4,4,e,t)}function Js(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ys(e,t,n){n=n==null?null:n.concat([e]),Vs(4,4,Js.bind(null,t,e),n)}function Xs(){}function Zs(e,t){var n=ls();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&es(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Qs(e,t){var n=ls();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&es(t,r[1]))return r[0];if(r=e(),Yo){tt(!0);try{e()}finally{tt(!1)}}return n.memoizedState=[r,t],r}function $s(e,t,n){return n===void 0||Go&1073741824&&!(q&261930)?e.memoizedState=t:(e.memoizedState=n,e=Md(),R.lanes|=e,sd|=e,n)}function ec(e,t,n,r){return Gr(n,t)?n:ko.current===null?!(Go&106)||Go&1073741824&&!(q&261930)?(Ic=!0,e.memoizedState=n):(e=Md(),R.lanes|=e,sd|=e,t):(e=$s(e,n,r),Gr(e,t)||(Ic=!0),e)}function tc(e,t,n,r,i){var a=A.p;A.p=a!==0&&8>a?a:8;var o=k.T,s={};s.types=o===null?null:o.types,k.T=s,pc(e,!1,t,n);try{var c=i(),l=k.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?fc(e,t,Ka(c,r),jd(e)):fc(e,t,r,jd(e))}catch(n){fc(e,t,{then:function(){},status:`rejected`,reason:n},jd())}finally{A.p=a,o!==null&&s.types!==null&&(o.types=s.types),k.T=o}}function nc(){}function rc(e,t,n,r){if(e.tag!==5)throw Error(s(476));var i=ic(e).queue;tc(e,i,t,Se,n===null?nc:function(){return ac(e),n(r)})}function ic(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Se,baseState:Se,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ms,lastRenderedState:Se},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ms,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ac(e){var t=ic(e);t.next===null&&(t=e.alternate.memoizedState),fc(e,t.next.queue,{},jd())}function oc(){return Oa(sh)}function sc(){return ls().memoizedState}function cc(){return ls().memoizedState}function lc(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=jd();e=bo(n);var r=xo(t,e,n);r!==null&&(Pd(r,t,n),So(r,t,n)),t={cache:Fa()},e.payload=t;return}t=t.return}}function uc(e,t,n){var r=jd();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},mc(e)?hc(t,n):(n=Ai(e,t,n,r),n!==null&&(Pd(n,e,r),gc(n,t,r)))}function dc(e,t,n){fc(e,t,n,jd())}function fc(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(mc(e))hc(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Gr(s,o))return ki(e,t,i,0),G===null&&Oi(),!1}catch{}if(n=Ai(e,t,i,r),n!==null)return Pd(n,e,r),gc(n,t,r),!0}return!1}function pc(e,t,n,r){if(r={lane:2,revertLane:Pf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},mc(e)){if(t)throw Error(s(479))}else t=Ai(e,n,r,2),t!==null&&Pd(t,e,2)}function mc(e){var t=e.alternate;return e===R||t!==null&&t===R}function hc(e,t){Jo=qo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function gc(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,yt(e,n)}}var _c={readContext:Oa,use:fs,useCallback:B,useContext:B,useEffect:B,useImperativeHandle:B,useLayoutEffect:B,useInsertionEffect:B,useMemo:B,useReducer:B,useRef:B,useState:B,useDebugValue:B,useDeferredValue:B,useTransition:B,useSyncExternalStore:B,useId:B,useHostTransitionStatus:B,useFormState:B,useActionState:B,useOptimistic:B,useMemoCache:B,useCacheRefresh:B,useEffectEvent:B},vc={readContext:Oa,use:fs,useCallback:function(e,t){return cs().memoizedState=[e,t===void 0?null:t],e},useContext:Oa,useEffect:Hs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),Bs(4194308,4,Js.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Bs(4194308,4,e,t)},useInsertionEffect:function(e,t){Bs(4,2,e,t)},useMemo:function(e,t){var n=cs();t=t===void 0?null:t;var r=e();if(Yo){tt(!0);try{e()}finally{tt(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=cs();if(n!==void 0){var i=n(t);if(Yo){tt(!0);try{n(t)}finally{tt(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=uc.bind(null,R,e),[r.memoizedState,e]},useRef:function(e){var t=cs();return e={current:e},t.memoizedState=e},useState:function(e){e=ws(e);var t=e.queue,n=dc.bind(null,R,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Xs,useDeferredValue:function(e,t){return $s(cs(),e,t)},useTransition:function(){var e=ws(!1);return e=tc.bind(null,R,e.queue,!0,!1),cs().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=R,i=cs();if(L){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),G===null)throw Error(s(349));q&127||ys(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Hs(xs.bind(null,r,a,e),[e]),r.flags|=2048,Rs(9,{destroy:void 0},bs.bind(null,r,a,n,t),null),n},useId:function(){var e=cs(),t=G.identifierPrefix;if(L){var n=ta,r=ea;n=(r&~(1<<32-nt(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Xo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=$o++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:oc,useFormState:Ns,useActionState:Ns,useOptimistic:function(e){var t=cs();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=pc.bind(null,R,!0,n),n.dispatch=t,[e,t]},useMemoCache:ps,useCacheRefresh:function(){return cs().memoizedState=lc.bind(null,R)},useEffectEvent:function(e){var t=cs(),n={impl:e};return t.memoizedState=n,function(){if(W&2)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},yc={readContext:Oa,use:fs,useCallback:Zs,useContext:Oa,useEffect:Us,useImperativeHandle:Ys,useInsertionEffect:Ks,useLayoutEffect:qs,useMemo:Qs,useReducer:hs,useRef:zs,useState:function(){return hs(ms)},useDebugValue:Xs,useDeferredValue:function(e,t){return ec(ls(),z.memoizedState,e,t)},useTransition:function(){var e=hs(ms)[0],t=ls().memoizedState;return[typeof e==`boolean`?e:ds(e),t]},useSyncExternalStore:vs,useId:sc,useHostTransitionStatus:oc,useFormState:Ps,useActionState:Ps,useOptimistic:function(e,t){return Ts(ls(),z,e,t)},useMemoCache:ps,useCacheRefresh:cc,useEffectEvent:Gs},bc={readContext:Oa,use:fs,useCallback:Zs,useContext:Oa,useEffect:Us,useImperativeHandle:Ys,useInsertionEffect:Ks,useLayoutEffect:qs,useMemo:Qs,useReducer:_s,useRef:zs,useState:function(){return _s(ms)},useDebugValue:Xs,useDeferredValue:function(e,t){var n=ls();return z===null?$s(n,e,t):ec(n,z.memoizedState,e,t)},useTransition:function(){var e=_s(ms)[0],t=ls().memoizedState;return[typeof e==`boolean`?e:ds(e),t]},useSyncExternalStore:vs,useId:sc,useHostTransitionStatus:oc,useFormState:Ls,useActionState:Ls,useOptimistic:function(e,t){var n=ls();return z===null?(n.baseState=e,[e,n.queue.dispatch]):Ts(n,z,e,t)},useMemoCache:ps,useCacheRefresh:cc,useEffectEvent:Gs};function xc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:T({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Sc={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=jd(),i=bo(r);i.payload=t,n!=null&&(i.callback=n),t=xo(e,i,r),t!==null&&(Pd(t,e,r),So(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=jd(),i=bo(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=xo(e,i,r),t!==null&&(Pd(t,e,r),So(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=jd(),r=bo(n);r.tag=2,t!=null&&(r.callback=t),t=xo(e,r,n),t!==null&&(Pd(t,e,n),So(t,e,n))}};function Cc(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Kr(n,r)||!Kr(i,a):!0}function wc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Sc.enqueueReplaceState(t,t.state,null)}function Tc(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=T({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Ec(e){wi(e)}function Dc(e){console.error(e)}function Oc(e){wi(e)}function kc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Ac(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function jc(e,t,n){return n=bo(n),n.tag=3,n.payload={element:null},n.callback=function(){kc(e,t)},n}function Mc(e){return e=bo(e),e.tag=3,e}function Nc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Ac(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Ac(t,n,r),typeof i!=`function`&&(yd===null?yd=new Set([this]):yd.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Pc(e,t,n,r,i){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Ta(t,n,i,!0),n=Po.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Fo===null?Kd():n.alternate===null&&Y===0&&(Y=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===to?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),mf(e,r,i)),!1;case 22:return n.flags|=65536,r===to?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),mf(e,r,i)),!1}throw Error(s(435,n.tag))}return mf(e,r,i),Kd(),!1}if(L)return t=Po.current,t===null?(r!==ua&&(t=Error(s(423),{cause:r}),_a(Ki(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,r=Ki(r,n),i=jc(e.stateNode,r,i),Co(e,i),Y!==4&&(Y=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==ua&&(e=Error(s(422),{cause:r}),_a(Ki(e,n)))),!1;var a=Error(s(520),{cause:r});if(a=Ki(a,n),fd===null?fd=[a]:fd.push(a),Y!==4&&(Y=2),t===null)return!0;r=Ki(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=jc(n.stateNode,r,e),Co(n,e),!1;case 1:if(t=n.type,a=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||a!==null&&typeof a.componentDidCatch==`function`&&(yd===null||!yd.has(a))))return n.flags|=65536,i&=-i,n.lanes|=i,i=Mc(i),Nc(i,e,n,r),Co(n,i),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Fc=Error(s(461)),Ic=!1;function Lc(e,t,n,r){t.child=e===null?go(t,null,n,r):ho(t,e.child,n,r)}function Rc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Da(t),r=ts(e,t,n,o,a,i),s=as(),e!==null&&!Ic?(os(e,t,i),fl(e,t,i)):(L&&s&&ia(t),t.flags|=1,Lc(e,t,r,i),t.child)}function zc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Li(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Bc(e,t,a,r,i)):(e=Bi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!pl(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Kr:n,n(o,r)&&e.ref===t.ref)return fl(e,t,i)}return t.flags|=1,e=Ri(a,r),e.ref=t.ref,e.return=t,t.child=e}function Bc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Kr(a,r)&&e.ref===t.ref){if(Ic=!1,t.pendingProps=r=a,pl(e,i))e.flags&131072&&(Ic=!0);else return t.lanes=e.lanes,fl(e,t,i)}}return Jc(e,t,n,r,i)}function Vc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return Uc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Xa(t,a===null?null:a.cachePool),a===null?Mo():jo(t,a),Ro(t);else return r=t.lanes=536870912,Uc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Xa(t,null),Mo(),zo()):(Xa(t,a.cachePool),jo(t,a),zo(),t.memoizedState=null);return Lc(e,t,i,n),t.child}function Hc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Uc(e,t,n,r,i){var a=Ya();return a=a===null?null:{parent:Pa._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Xa(t,null),Mo(),Ro(t),e!==null&&Ta(e,t,r,!0),t.childLanes=i,null}function Wc(e,t){return t=rl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Gc(e,t,n){return ho(t,e.child,null,n),e=Wc(t,t.pendingProps),e.flags|=2,Bo(t),t.memoizedState=null,e}function Kc(e,t,n){var r=t.pendingProps,i=!!(t.flags&128);if(t.flags&=-129,e===null){if(L){if(r.mode===`hidden`)return e=Wc(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Hc(null,e);if(Lo(t),(e=I)?(e=am(e,la),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:$i===null?null:{id:ea,overflow:ta},retryLane:536870912,hydrationErrors:null},n=Ui(e),n.return=t,t.child=n,sa=t,I=null)):e=null,e===null)throw da(t);return t.lanes=536870912,null}return Wc(t,r)}var a=e.memoizedState;if(a!==null){var o=a.dehydrated;if(Lo(t),i){if(t.flags&256)t.flags&=-257,t=Gc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558))}else if(Ic||Ta(e,t,n,!1),i=(n&e.childLanes)!==0,Ic||i){if(ko.current===null){if(r=G,r!==null&&(o=bt(r,n),o!==0&&o!==a.retryLane))throw a.retryLane=o,ji(e,o),Pd(r,e,o),Fc;Kd()}t=Gc(e,t,n)}else e=a.treeContext,I=lm(o.nextSibling),sa=t,L=!0,ca=null,la=!1,e!==null&&oa(t,e),t=Wc(t,r),t.flags|=134221824;return t}return e=Ri(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function qc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Jc(e,t,n,r,i){return Da(t),n=ts(e,t,n,r,void 0,i),r=as(),e!==null&&!Ic?(os(e,t,i),fl(e,t,i)):(L&&r&&ia(t),t.flags|=1,Lc(e,t,n,i),t.child)}function Yc(e,t,n,r,i,a){return Da(t),t.updateQueue=null,n=rs(t,r,n,i),ns(e),r=as(),e!==null&&!Ic?(os(e,t,a),fl(e,t,a)):(L&&r&&ia(t),t.flags|=1,Lc(e,t,n,a),t.child)}function Xc(e,t,n,r,i){if(Da(t),t.stateNode===null){var a=Pi,o=n.contextType;typeof o==`object`&&o&&(a=Oa(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Sc,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},vo(t),o=n.contextType,a.context=typeof o==`object`&&o?Oa(o):Pi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(xc(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Sc.enqueueReplaceState(a,a.state,null),Eo(t,r,a,i),To(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Tc(n,s);a.props=c;var l=a.context,u=n.contextType;o=Pi,typeof u==`object`&&u&&(o=Oa(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&wc(t,a,r,o),_o=!1;var f=t.memoizedState;a.state=f,Eo(t,r,a,i),To(),l=t.memoizedState,s||f!==l||_o?(typeof d==`function`&&(xc(t,n,d,r),l=t.memoizedState),(c=_o||Cc(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,yo(e,t),o=t.memoizedProps,u=Tc(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=Pi,typeof l==`object`&&l&&(c=Oa(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&wc(t,a,r,c),_o=!1,f=t.memoizedState,a.state=f,Eo(t,r,a,i),To();var p=t.memoizedState;o!==d||f!==p||_o||e!==null&&e.dependencies!==null&&Ea(e.dependencies)?(typeof s==`function`&&(xc(t,n,s,r),p=t.memoizedState),(u=_o||Cc(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Ea(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,qc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=ho(t,e.child,null,i),t.child=ho(t,null,n,i)):Lc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=fl(e,t,i),e}function Zc(e,t,n,r){return ha(),t.flags|=256,Lc(e,t,n,r),t.child}var Qc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function $c(e){return{baseLanes:e,cachePool:Za()}}function el(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=ud),e}function tl(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:!!(Vo.current&2)),o&&(i=!0,t.flags&=-129),o=!!(t.flags&32),t.flags&=-33,e===null){if(L){if(i?Io(t):zo(),(e=I)?(e=am(e,la),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:$i===null?null:{id:ea,overflow:ta},retryLane:536870912,hydrationErrors:null},n=Ui(e),n.return=t,t.child=n,sa=t,I=null)):e=null,e===null)throw da(t);return t.lanes=sm(e)?32:536870912,null}return a=r.children,r=r.fallback,i?(zo(),i=t.mode,a=rl({mode:`hidden`,children:a},i),r=Vi(r,i,n,null),a.return=t,r.return=t,a.sibling=r,t.child=a,r=t.child,r.memoizedState=$c(n),r.childLanes=el(e,o,n),t.memoizedState=Qc,Hc(null,r)):(Io(t),nl(t,a))}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(c!==null)return al(e,t,a,o,r,c,s,n)}return i?(zo(),i=r.fallback,a=t.mode,s=e.child,c=s.sibling,r=Ri(s,{mode:`hidden`,children:r.children}),r.subtreeFlags=s.subtreeFlags&1206910976,c===null?(i=Vi(i,a,n,null),i.flags|=2):i=Ri(c,i),i.return=t,r.return=t,r.sibling=i,t.child=r,Hc(null,r),r=t.child,i=e.child.memoizedState,i===null?i=$c(n):(a=i.cachePool,a===null?a=Za():(s=Pa._currentValue,a=a.parent===s?a:{parent:s,pool:s}),i={baseLanes:i.baseLanes|n,cachePool:a}),r.memoizedState=i,r.childLanes=el(e,o,n),t.memoizedState=Qc,Hc(e.child,r)):(Io(t),n=e.child,e=n.sibling,n=Ri(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function nl(e,t){return t=rl({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function rl(e,t){return e=Ii(22,e,null,t),e.lanes=0,e}function il(e,t,n){return ho(t,e.child,null,n),e=nl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function al(e,t,n,r,i,a,o,c){if(n)return t.flags&256?(Io(t),t.flags&=-257,il(e,t,c)):t.memoizedState===null?(zo(),a=i.fallback,o=t.mode,i=rl({mode:`visible`,children:i.children},o),a=Vi(a,o,c,null),a.flags|=2,i.return=t,a.return=t,i.sibling=a,t.child=i,ho(t,e.child,null,c),i=t.child,i.memoizedState=$c(c),i.childLanes=el(e,r,c),t.memoizedState=Qc,Hc(null,i)):(zo(),t.child=e.child,t.flags|=128,null);if(Io(t),sm(a)){if(r=a.nextSibling&&a.nextSibling.dataset,r)var l=r.dgst;return r=l,r!==``&&(i=Error(s(419)),i.stack=``,i.digest=r,_a({value:i,source:null,stack:null})),il(e,t,c)}if(Ic||Ta(e,t,c,!1),r=(c&e.childLanes)!==0,Ic||r){if(ko.current!==null)return il(e,t,c);if(r=G,r!==null&&(i=bt(r,c),i!==0&&i!==o.retryLane))throw o.retryLane=i,ji(e,i),Pd(r,e,i),Fc;return om(a)||Kd(),il(e,t,c)}return om(a)?(t.flags|=192,t.child=e.child,null):(e=o.treeContext,I=lm(a.nextSibling),sa=t,L=!0,ca=null,la=!1,e!==null&&oa(t,e),t=nl(t,i.children),t.flags|=134221824,t)}function ol(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ca(e.return,t,n)}function sl(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Wo(n)===null&&(t=e),e=e.sibling}return t}function cl(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function ll(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function ul(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=Vo.current;if(t.flags&128)return Ho(t,o),null;var s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,Ho(t,o),i===`backwards`&&e!==null?(ll(e),Lc(e,t,r,n),ll(e)):Lc(e,t,r,n),r=L?Xi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ol(e,n,t);else if(e.tag===19)ol(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`backwards`:n=sl(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null,ll(t)),cl(t,!0,i,null,a,r);break;case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Wo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}cl(t,!0,n,null,a,r);break;case`together`:cl(t,!1,null,null,void 0,r);break;case`independent`:t.memoizedState=null;break;default:n=sl(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),cl(t,!1,i,n,a,r)}return t.child}function dl(e,t,n){var r=t.pendingProps;return xa(t,t.type,r.value),Lc(e,t,r.children,n),t.child}function fl(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),sd|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(Ta(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=Ri(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ri(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function pl(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&Ea(e)))}function ml(e,t,n){switch(t.tag){case 3:Ae(t,t.stateNode.containerInfo),xa(t,Pa,e.memoizedState.cache),ha();break;case 27:case 5:Me(t);break;case 4:Ae(t,t.stateNode.containerInfo);break;case 10:xa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Lo(t),null;break;case 13:var r=t.memoizedState;if(r!==null){if(r.dehydrated!==null)return Io(t),t.flags|=128,null;r=Ta(e,t,n,!1);var i=t.child.childLanes;return r||(n&i)!==0?tl(e,t,n):(Io(t),e=fl(e,t,n),e===null?null:e.sibling)}Io(t);break;case 19:if(t.flags&128)return ul(e,t,n);if(i=!!(e.flags&128),r=(n&t.childLanes)!==0,r||=(Ta(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return ul(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ho(t,Vo.current),r)break;return null;case 22:return t.lanes=0,Vc(e,t,n,t.pendingProps);case 24:xa(t,Pa,e.memoizedState.cache)}return fl(e,t,n)}function hl(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)Ic=!0;else{if(!pl(e,n)&&!(t.flags&128))return Ic=!1,ml(e,t,n);Ic=!!(e.flags&131072)}}else Ic=!1,L&&t.flags&1048576&&ra(t,Xi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=io(t.elementType),t.type=e,typeof e==`function`)Li(e)?(r=Tc(e,r),t.tag=1,t=Xc(null,t,e,r,n)):(t.tag=0,t=Jc(null,t,e,r,n));else{if(e!=null){var i=e.$$typeof;if(i===ce){t.tag=11,t=Rc(null,t,e,r,n);break a}if(i===de){t.tag=14,t=zc(null,t,e,r,n);break a}if(i===D){t.tag=10,t.type=e,t=dl(null,t,n);break a}}throw t=xe(e)||e,Error(s(306,t,``))}}return t;case 0:return Jc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,i=Tc(r,t.pendingProps),Xc(e,t,r,i,n);case 3:a:{if(Ae(t,t.stateNode.containerInfo),e===null)throw Error(s(387));r=t.pendingProps;var a=t.memoizedState;i=a.element,yo(e,t),Eo(t,r,null,n);var o=t.memoizedState;if(r=o.cache,xa(t,Pa,r),r!==a.cache&&wa(t,[Pa],n,!0),To(),r=o.element,a.isDehydrated){if(a={element:r,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=Zc(e,t,r,n);break a}if(r!==i){i=Ki(Error(s(424)),t),_a(i),t=Zc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(I=lm(e.firstChild),sa=t,L=!0,ca=null,la=!0,n=go(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(ha(),r===i){t=fl(e,t,n);break a}Lc(e,t,r,n)}t=t.child}return t;case 26:return qc(e,t),e===null?(n=Nm(t.type,null,t.pendingProps,null))?t.memoizedState=n:L||(t.stateNode=fp(t.type,t.pendingProps,Oe.current,t)):t.memoizedState=Nm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Me(t),e===null&&L&&(r=t.stateNode=hm(t.type,t.pendingProps,Oe.current),sa=t,la=!0,i=I,Sp(t.type)?(um=i,I=lm(r.firstChild)):I=i),Lc(e,t,t.pendingProps.children,n),qc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&L&&((i=r=I)&&(r=rm(r,t.type,t.pendingProps,la),r===null?i=!1:(t.stateNode=r,sa=t,I=lm(r.firstChild),la=!1,i=!0)),i||da(t)),Me(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,r=a.children,pp(i,a)?r=null:o!==null&&pp(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=ts(e,t,is,null,null,n),sh._currentValue=i),qc(e,t),Lc(e,t,r,n),t.child;case 6:return e===null&&L&&((e=n=I)&&(n=im(n,t.pendingProps,la),n===null?e=!1:(t.stateNode=n,sa=t,I=null,e=!0)),e||da(t)),null;case 13:return tl(e,t,n);case 4:return Ae(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ho(t,null,r,n):Lc(e,t,r,n),t.child;case 11:return Rc(e,t,t.type,t.pendingProps,n);case 7:return r=t.pendingProps,qc(e,t),Lc(e,t,r,n),t.child;case 8:return Lc(e,t,t.pendingProps.children,n),t.child;case 12:return Lc(e,t,t.pendingProps.children,n),t.child;case 10:return dl(e,t,n);case 9:return i=t.type._context,r=t.pendingProps.children,Da(t),i=Oa(i),r=r(i),t.flags|=1,Lc(e,t,r,n),t.child;case 14:return zc(e,t,t.type,t.pendingProps,n);case 15:return Bc(e,t,t.type,t.pendingProps,n);case 19:return ul(e,t,n);case 31:return Kc(e,t,n);case 22:return Vc(e,t,n,t.pendingProps);case 24:return Da(t),r=Oa(Pa),e===null?(i=Ya(),i===null&&(i=G,a=Fa(),i.pooledCache=a,a.refCount++,a!==null&&(i.pooledCacheLanes|=n),i=a),t.memoizedState={parent:r,cache:i},vo(t),xa(t,Pa,i)):((e.lanes&n)!==0&&(yo(e,t),Eo(t,null,null,n),To()),i=e.memoizedState,a=t.memoizedState,i.parent===r?(r=a.cache,xa(t,Pa,r),r!==i.cache&&wa(t,[Pa],n,!0)):(i={parent:r,cache:r},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),xa(t,Pa,r))),Lc(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!==`auto`?t.flags|=e===null?18882560:18874368:L&&ia(t),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:qc(e,t),Lc(e,t,r.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function gl(e){e.flags|=4}function _l(e,t,n,r,i){var a;if((a=!!(e.mode&32))&&(a=n===null?Jm(t,r):Jm(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Ud())e.flags|=8192;else throw ao=to,$a}}else e.flags&=-16777217}function vl(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Ym(t)){if(Ud())e.flags|=8192;else throw ao=to,$a}}function yl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:mt(),e.lanes|=t,dd|=t)}function bl(e,t){if(!L)switch(e.tailMode){case`visible`:break;case`collapsed`:for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function V(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&1206910976,r|=i.flags&1206910976,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function xl(e,t,n){var r=t.pendingProps;switch(aa(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return V(t),null;case 1:return V(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Sa(Pa),je(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ma(t)?gl(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ga())),V(t),null;case 26:var i=t.type,a=t.memoizedState;return e===null?(gl(t),a===null?(V(t),_l(t,i,null,r,n)):(V(t),vl(t,a))):a?a===e.memoizedState?(V(t),t.flags&=-16777217):(gl(t),V(t),vl(t,a)):(e=e.memoizedProps,e!==r&&gl(t),V(t),_l(t,i,e,r,n)),null;case 27:if(Ne(t),n=Oe.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&gl(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return V(t),t.subtreeFlags&=-33554433,null}e=Ee.current,ma(t)?fa(t,e):(e=hm(i,r,n),t.stateNode=e,gl(t))}return V(t),t.subtreeFlags&=-33554433,null;case 5:if(Ne(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&gl(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return V(t),t.subtreeFlags&=-33554433,null}if(a=Ee.current,ma(t))fa(t,a);else{var o=lp(Oe.current);switch(a){case 1:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case 2:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;default:switch(i){case`svg`:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case`math`:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;case`script`:a=o.createElement(`div`),a.innerHTML=`<script><\/script>`,a=a.removeChild(a.firstChild);break;case`select`:a=typeof r.is==`string`?o.createElement(`select`,{is:r.is}):o.createElement(`select`),r.multiple?a.multiple=!0:r.size&&(a.size=r.size);break;default:a=typeof r.is==`string`?o.createElement(i,{is:r.is}):o.createElement(i)}}a[Et]=t,a[Dt]=r;a:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)a.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break a;for(;o.sibling===null;){if(o.return===null||o.return===t)break a;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=a;a:switch(np(a,i,r),i){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&gl(t)}}return V(t),t.subtreeFlags&=-33554433,_l(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&gl(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(s(166));if(e=Oe.current,ma(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,i=sa,i!==null)switch(i.tag){case 27:case 5:r=i.memoizedProps}e[Et]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||ep(e.nodeValue,n)),e||da(t,!0)}else e=lp(e).createTextNode(r),e[Et]=t,t.stateNode=e}return V(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=ma(t),n!==null){if(e===null){if(!r)throw Error(s(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(557));e[Et]=t}else ha(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;V(t),e=!1}else n=ga(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Bo(t),t):(Bo(t),null);if(t.flags&128)throw Error(s(558))}return V(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=ma(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(s(318));if(i=t.memoizedState,i=i===null?null:i.dehydrated,!i)throw Error(s(317));i[Et]=t}else ha(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;V(t),i=!1}else i=ga(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(Bo(t),t):(Bo(t),null)}return Bo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool),a=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),a!==i&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),yl(t,t.updateQueue),V(t),null);case 4:return je(),e===null&&Wf(t.stateNode.containerInfo),t.flags|=67108864,V(t),null;case 10:return Sa(t.type),V(t),null;case 19:if(Uo(t),r=t.memoizedState,r===null)return V(t),null;if(i=!!(t.flags&128),a=r.rendering,a===null){if(i)bl(r,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Wo(e),a!==null){for(t.flags|=128,bl(r,!1),e=a.updateQueue,t.updateQueue=e,yl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)zi(n,e),n=n.sibling;return Ho(t,Vo.current&1|2),L&&na(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&N()>_d&&(t.flags|=128,i=!0,bl(r,!1),t.lanes=4194304)}}else{if(!i){if(e=Wo(a),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,yl(t,e),bl(r,!0),r.tail===null&&r.tailMode!==`collapsed`&&r.tailMode!==`visible`&&!a.alternate&&!L)return V(t),null}else 2*N()-r.renderingStartTime>_d&&n!==536870912&&(t.flags|=128,i=!0,bl(r,!1),t.lanes=4194304)}r.isBackwards?(a.sibling=t.child,t.child=a):(e=r.last,e===null?t.child=a:e.sibling=a,r.last=a)}if(r.tail!==null){e=r.tail;a:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break a}n=n.sibling}n=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=N(),e.sibling=null,a=Vo.current,a=i?a&1|2:a&1,r.tailMode===`visible`||r.tailMode===`collapsed`||!n||L?Ho(t,a):(n=a,M(Po,t),M(Vo,n),Fo===null&&(Fo=t)),L&&na(t,r.treeForkCount),e}return V(t),null;case 22:case 23:return Bo(t),No(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(V(t),t.subtreeFlags&6&&(t.flags|=8192)):V(t),n=t.updateQueue,n!==null&&yl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&j(Ja),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Sa(Pa),V(t),null;case 25:return null;case 30:return t.flags|=33554432,V(t),null}throw Error(s(156,t.tag))}function Sl(e,t){switch(aa(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Sa(Pa),je(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ne(t),null;case 31:if(t.memoizedState!==null){if(Bo(t),t.alternate===null)throw Error(s(340));ha()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Bo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));ha()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Uo(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return je(),null;case 10:return Sa(t.type),null;case 22:case 23:return Bo(t),No(),e!==null&&j(Ja),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Sa(Pa),null;case 25:return null;default:return null}}function Cl(e,t){switch(aa(t),t.tag){case 3:Sa(Pa),je();break;case 26:case 27:case 5:Ne(t);break;case 4:je();break;case 31:t.memoizedState!==null&&Bo(t);break;case 13:Bo(t);break;case 19:Uo(t);break;case 10:Sa(t.type);break;case 22:case 23:Bo(t),No(),e!==null&&j(Ja);break;case 24:Sa(Pa)}}function wl(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Tl(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function El(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Oo(t,n)}catch(t){Z(e,e.return,t)}}}function Dl(e,t,n){n.props=Tc(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Ol(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var i=e.stateNode,a=xi(e.memoizedProps,i);(i.ref===null||i.ref.name!==a)&&(i.ref=Pp(a)),r=i.ref;break;case 7:if(e.stateNode===null){var o=new Fp(e);h(e.child,!1,Qp,o,void 0,void 0),e.stateNode=o}r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function kl(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}}function Al(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)em(e.stateNode,t[n])}function jl(e){for(var t=e.return;t!==null&&(Pl(t)&&em(e.stateNode,t.stateNode),!Nl(t));)t=t.return}function Ml(e){for(var t=e.return;t!==null&&(Pl(t)&&tm(e.stateNode,t.stateNode),!Nl(t));)t=t.return}function Nl(e){return e.tag===5||e.tag===3||e.tag===27}function Pl(e){return e&&e.tag===7&&e.stateNode!==null}function Fl(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Il(e,t,n){try{var r=e.stateNode;ip(r,e.type,n,t),r[Dt]=t}catch(t){Z(e,e.return,t)}}function Ll(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sp(e.type)||e.tag===4}function Rl(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Ll(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sp(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(i,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(i),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Sn)),Al(e,r),F=!0;else if(i!==4&&(i===27&&(Al(e,r),r=null,Sp(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(zl(e,t,n,r),e=e.sibling;e!==null;)zl(e,t,n,r),e=e.sibling}function Bl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?n.insertBefore(i,t):n.appendChild(i),Al(e,r),F=!0;else if(i!==4&&(i===27&&(Al(e,r),r=null,Sp(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Bl(e,t,n,r),e=e.sibling;e!==null;)Bl(e,t,n,r),e=e.sibling}function Vl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);np(t,r,n),t[Et]=e,t[Dt]=n}catch(t){Z(e,e.return,t)}}var Hl=!1,Ul=null;function Wl(e){(e.tag===30||e.subtreeFlags&33554432)&&(Hl=!0)}var Gl=null;function Kl(){var e=Gl;return Gl=null,e}var ql=0;function Jl(e,t,n,r,i){return ql=0,Yl(e.child,t,n,r,i)}function Yl(e,t,n,r,i){for(var a=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(r!==null){var s=Op(o);r.push(s),s.view&&(a=!0)}else a||Op(o).view&&(a=!0);Hl=!0,Tp(o,ql===0?t:t+`_`+ql,n),ql++}else e.tag===22&&e.memoizedState!==null||e.tag===30&&i||Yl(e.child,t,n,r,i)&&(a=!0);e=e.sibling}return a}function Xl(e,t){for(;e!==null;)e.tag===5?Ep(e.stateNode,e.memoizedProps):e.tag===22&&e.memoizedState!==null||e.tag===30&&t||Xl(e.child,t),e=e.sibling}function Zl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Zl(e),e.tag===30&&e.flags&18874368&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name===`auto`)throw Error(s(544));var n=t.name;t=Ci(t.default,t.share),t!==`none`&&(Jl(e,n,t,null,!1)||Xl(e.child,!1))}e=e.sibling}}function Ql(e,t){if(e.tag===30){var n=e.stateNode,r=e.memoizedProps,i=xi(r,n),a=Ci(r.default,n.paired?r.share:r.enter);a===`none`?Zl(e):Jl(e,i,a,null,!1)?(Zl(e),n.paired||t||Nd(e,r.onEnter)):Xl(e.child,!1)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Ql(e,t),e=e.sibling;else Zl(e)}function $l(e){if(Ul!==null&&Ul.size!==0){var t=Ul;if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var n=e.memoizedProps,r=n.name;if(r!=null&&r!==`auto`){var i=t.get(r);if(i!==void 0){var a=Ci(n.default,n.share);if(a!==`none`&&(Jl(e,r,a,null,!1)?(a=e.stateNode,i.paired=a,a.paired=i,Nd(e,n.onShare)):Xl(e.child,!1)),t.delete(r),t.size===0)break}}}$l(e)}e=e.sibling}}}function eu(e){if(e.tag===30){var t=e.memoizedProps,n=xi(t,e.stateNode),r=Ul===null?void 0:Ul.get(n),i=Ci(t.default,r===void 0?t.exit:t.share);i!==`none`&&(Jl(e,n,i,null,!1)?r===void 0?Nd(e,t.onExit):(i=e.stateNode,r.paired=i,i.paired=r,Ul.delete(n),Nd(e,t.onShare)):Xl(e.child,!1)),Ul!==null&&$l(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)eu(e),e=e.sibling;else Ul!==null&&$l(e)}function tu(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=xi(t,e.stateNode);t=Ci(t.default,t.update),e.flags&=-5,t!==`none`&&Jl(e,n,t,e.memoizedState=[],!1)}else e.subtreeFlags&33554432&&tu(e);e=e.sibling}}function nu(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var t=e.stateNode;t.paired!==null&&(t.paired=null,Xl(e.child,!1))}nu(e)}e=e.sibling}}function ru(e){if(e.tag===30)e.stateNode.paired=null,Xl(e.child,!1),nu(e);else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)ru(e),e=e.sibling;else nu(e)}function iu(e){for(e=e.child;e!==null;)e.tag===30?Xl(e.child,!1):e.subtreeFlags&33554432&&iu(e),e=e.sibling}function au(e,t,n,r,i,a,o){for(var s=!1;t!==null;){if(t.tag===5){var c=t.stateNode;if(a!==null&&ql<a.length){var l=a[ql],u=Op(c);(l.view||u.view)&&(s=!0);var d;if(d=!(e.flags&4)){if(u.clip)d=!0;else{d=l.rect;var f=u.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}}d&&(e.flags|=4),u.abs?u=!l.abs:(l=l.rect,u=u.rect,u=l.height!==u.height||l.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;e.flags&4&&Tp(c,ql===0?n:n+`_`+ql,i),s&&e.flags&4||(Gl===null&&(Gl=[]),Gl.push(c,ql===0?r:r+`_`+ql,t.memoizedProps)),ql++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&o?e.flags|=t.flags&32:au(e,t.child,n,r,i,a,o)&&(s=!0));t=t.sibling}return s}function ou(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=e.stateNode,i=xi(n,r),a=Ci(n.default,n.update);if(t){r=r.clones;var o=r===null?null:r.map(kp)}else o=e.memoizedState,e.memoizedState=null;r=e;var s=e.child;ql=0,i=au(r,s,i,i,a,o,!1),e.flags&4&&i&&(t||Nd(e,n.onUpdate))}else e.subtreeFlags&33554432&&ou(e,t);e=e.sibling}}var su=!1,H=!1,cu=!1,lu=!1,uu=typeof WeakSet==`function`?WeakSet:Set,du=null,fu=!1,pu=!1,mu=!1,hu=!1;function gu(e,t,n){if(e=e.containerInfo,sp=gh,e=Zr(e),Qr(e)){if(`selectionStart`in e)var r={start:e.selectionStart,end:e.selectionEnd};else a:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==r||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===r&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r||={start:0,end:0}}else r=null;for(cp={focusedElem:e,selectionRange:r},gh=!1,n=(n&335544064)===n,du=t,t=n?9270:1024;du!==null;){if(e=du,n&&(r=e.deletions,r!==null))for(a=0;a<r.length;a++)n&&eu(r[a]);if(e.alternate===null&&e.flags&2)n&&Wl(e),_u(n);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&n&&eu(r),_u(n);continue}if(r!==null&&r.memoizedState!==null){n&&Wl(e),_u(n);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,du=r):(n&&tu(e),_u(n))}}Ul=null}function _u(e){for(;du!==null;){var t=du,n=e,r=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if(i&1024&&r!==null){n=void 0,i=r.memoizedProps,r=r.memoizedState;var a=t.stateNode;try{var o=Tc(t.type,i);n=a.getSnapshotBeforeUpdate(o,r),a.__reactInternalSnapshotBeforeUpdate=n}catch(e){Z(t,t.return,e)}}break;case 3:if(i&1024){if(r=t.stateNode.containerInfo,n=r.nodeType,n===9)nm(r);else if(n===1)switch(r.nodeName){case`HEAD`:case`HTML`:case`BODY`:nm(r);break;default:r.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&r!==null&&(n=xi(r.memoizedProps,r.stateNode),i=t.memoizedProps,i=Ci(i.default,i.update),i!==`none`&&Jl(r,n,i,r.memoizedState=[],!0));break;default:if(i&1024)throw Error(s(163))}if(r=t.sibling,r!==null){r.return=t.return,du=r;break}du=t.return}}function vu(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Lu(e,n),r&4&&wl(5,n);break;case 1:if(Lu(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Tc(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}}r&64&&El(n),r&512&&Ol(n,n.return);break;case 3:if(Lu(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Oo(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&Vl(n);case 26:case 5:Lu(e,n),t===null&&r&4&&Fl(n),r&512&&Ol(n,n.return);break;case 12:Lu(e,n);break;case 31:Lu(e,n),r&4&&Eu(e,n);break;case 13:Lu(e,n),r&4&&Du(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=_f.bind(null,n),cm(e,n))));break;case 22:if(r=n.memoizedState!==null||su,!r){var a=t!==null&&t.memoizedState!==null||H;t=su,i=H,su=r,(H=a)&&!i?(r=2,n.subtreeFlags&8772&&(r|=1),zu(e,n,r)):Lu(e,n),su=t,H=i}break;case 30:Lu(e,n),r&512&&Ol(n,n.return);break;case 7:r&512&&Ol(n,n.return);default:Lu(e,n)}}function yu(e,t){for(e=e.child;e!==null;)bu(e,t),e=e.sibling}function bu(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var r=n.style;typeof r.setProperty==`function`?r.setProperty(`display`,`none`,`important`):r.display=`none`}else{var i=e.stateNode,a=e.memoizedProps.style,o=a!=null&&a.hasOwnProperty(`display`)?a.display:null;i.style.display=o==null||typeof o==`boolean`?``:(``+o).trim()}}catch(t){Z(e,e.return,t)}xu(e,t);break;case 6:try{e.stateNode.nodeValue=t?``:e.memoizedProps,F=!0}catch(t){Z(e,e.return,t)}break;case 18:try{var s=e.stateNode;t?wp(s,!0):wp(e.stateNode,!1)}catch(t){Z(e,e.return,t)}break;case 22:case 23:e.memoizedState===null&&yu(e,t);break;default:yu(e,t)}}function xu(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){a:{var n=e,r=t;switch(n.tag){case 4:bu(n,r);break a;case 22:n.memoizedState===null&&xu(n,r);break a;default:xu(n,r)}}e=e.sibling}}function Su(e){var t=e.alternate;t!==null&&(e.alternate=null,Su(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ft(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var U=null,Cu=!1;function wu(e,t,n){for(n=n.child;n!==null;)Tu(e,t,n),n=n.sibling}function Tu(e,t,n){if(et&&typeof et.onCommitFiberUnmount==`function`)try{et.onCommitFiberUnmount($e,n)}catch{}switch(n.tag){case 26:H||kl(n,t),wu(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!H&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:H||kl(n,t),Ml(n);var r=U,i=Cu;Sp(n.type)&&(U=n.stateNode,Cu=!1),wu(e,t,n),gm(n.stateNode,n.type,n.memoizedProps),U=r,Cu=i;break;case 5:H||kl(n,t),Ml(n);case 6:if(n.tag===6&&Ml(n),r=U,i=Cu,U=null,wu(e,t,n),U=r,Cu=i,U!==null){if(Cu)try{(U.nodeType===9?U.body:U.nodeName===`HTML`?U.ownerDocument.body:U).removeChild(n.stateNode),F=!0}catch(e){Z(n,t,e)}else try{U.removeChild(n.stateNode),F=!0}catch(e){Z(n,t,e)}}break;case 18:U!==null&&(Cu?(e=U,Cp(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Hh(e)):Cp(U,n.stateNode));break;case 4:r=U,i=Cu,U=n.stateNode.containerInfo,Cu=!0,wu(e,t,n),U=r,Cu=i;break;case 0:case 11:case 14:case 15:Tl(2,n,t),H||Tl(4,n,t),wu(e,t,n);break;case 1:H||(kl(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Dl(n,t,r)),wu(e,t,n);break;case 21:wu(e,t,n);break;case 22:H=(r=H)||n.memoizedState!==null,wu(e,t,n),H=r;break;case 30:kl(n,t),wu(e,t,n);break;case 7:H||kl(n,t),wu(e,t,n);break;default:wu(e,t,n)}}function Eu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Hh(e)}catch(e){Z(t,t.return,e)}}}function Du(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hh(e)}catch(e){Z(t,t.return,e)}}function Ou(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new uu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new uu),t;default:throw Error(s(435,e.tag))}}function ku(e,t){var n=Ou(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=vf.bind(null,e,t);t.then(r,r)}})}function Au(e,t,n){var r=t.deletions;if(r!==null)for(var i=0;i<r.length;i++){var a=r[i],o=e,c=t,l=c;a:for(;l!==null;){switch(l.tag){case 27:if(Sp(l.type)){U=l.stateNode,Cu=!1;break a}break;case 5:U=l.stateNode,Cu=!1;break a;case 3:case 4:U=l.stateNode.containerInfo,Cu=!0;break a}l=l.return}if(U===null)throw Error(s(160));Tu(o,c,a),U=null,Cu=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Mu(t,e,n),t=t.sibling}var ju=null;function Mu(e,t,n){var r=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(i&4&&(r=e.updateQueue,r=r===null?null:r.events,r!==null))for(var a=0;a<r.length;a++){var o=r[a];o.ref.impl=o.nextImpl}Au(t,e,n),Nu(e),i&4&&(Tl(3,e,e.return),wl(3,e),Tl(5,e,e.return));break;case 1:Au(t,e,n),Nu(e),i&512&&(H||r===null||kl(r,r.return)),i&64&&su&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(a=ju,Au(t,e,n),Nu(e),i&512&&(H||r===null||kl(r,r.return)),i&4){if(i=r===null?null:r.memoizedState,n=e.memoizedState,r===null){if(n===null){if(e.stateNode===null){if(su)e.stateNode=fp(e.type,e.memoizedProps,t.containerInfo,e);else{a:{t=e.type,n=e.memoizedProps,i=a.ownerDocument||a;b:switch(t){case`title`:r=i.getElementsByTagName(`title`)[0],(!r||r[Nt]||r[Et]||r.namespaceURI===`http://www.w3.org/2000/svg`||r.hasAttribute(`itemprop`))&&(r=i.createElement(t),i.head.insertBefore(r,i.querySelector(`head > title`))),np(r,t,n),r[Et]=e,Bt(r),t=r;break a;case`link`:if(a=Gm(`link`,`href`,i).get(t+(n.href||``))){for(o=0;o<a.length;o++)if(r=a[o],r.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&r.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&r.getAttribute(`title`)===(n.title==null?null:n.title)&&r.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){a.splice(o,1);break b}}r=i.createElement(t),np(r,t,n),i.head.appendChild(r);break;case`meta`:if(a=Gm(`meta`,`content`,i).get(t+(n.content||``))){for(o=0;o<a.length;o++)if(r=a[o],r.getAttribute(`content`)===(n.content==null?null:``+n.content)&&r.getAttribute(`name`)===(n.name==null?null:n.name)&&r.getAttribute(`property`)===(n.property==null?null:n.property)&&r.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){a.splice(o,1);break b}}r=i.createElement(t),np(r,t,n),i.head.appendChild(r);break;default:throw Error(s(468,t))}r[Et]=e,Bt(r),t=r}e.stateNode=t}}else su||Km(a,e.type,e.stateNode)}else e.stateNode=Bm(a,n,e.memoizedProps)}else i===n?n===null&&e.stateNode!==null&&Il(e,e.memoizedProps,r.memoizedProps):(i===null?(t=r.stateNode,t===null||H||t.parentNode.removeChild(t)):i.count--,n===null?su||Km(a,e.type,e.stateNode):Bm(a,n,e.memoizedProps))}break;case 27:Au(t,e,n),Nu(e),i&512&&(H||r===null||kl(r,r.return)),r!==null&&i&4&&Il(e,e.memoizedProps,r.memoizedProps);break;case 5:if(a=cu,cu=!1,Au(t,e,n),cu=a,Nu(e),i&512&&(H||r===null||kl(r,r.return)),e.flags&32){t=e.stateNode;try{mn(t,``),F=!0}catch(t){Z(e,e.return,t)}}i&4&&e.stateNode!=null&&(t=e.memoizedProps,Il(e,t,r===null?t:r.memoizedProps)),i&1024&&(lu=!0);break;case 6:if(Au(t,e,n),Nu(e),i&4){if(e.stateNode===null)throw Error(s(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,F=!0}catch(t){Z(e,e.return,t)}}break;case 3:if(F=!1,Wm=null,a=ju,ju=bm(t.containerInfo),Au(t,e,n),ju=a,Nu(e),i&4&&r!==null&&r.memoizedState.isDehydrated)try{Hh(t.containerInfo)}catch(t){Z(e,e.return,t)}lu&&(lu=!1,Pu(e)),F=!1;break;case 4:i=cu,cu=su,r=Xt(),a=ju,ju=bm(e.stateNode.containerInfo),Au(t,e,n),Nu(e),ju=a,F&&pu&&(mu=!0),F=r,cu=i;break;case 12:Au(t,e,n),Nu(e);break;case 31:Au(t,e,n),Nu(e),i&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,ku(e,t)));break;case 13:Au(t,e,n),Nu(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(hd=N()),i&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,ku(e,t)));break;case 22:a=e.memoizedState!==null,o=r!==null&&r.memoizedState!==null;var c=su,l=H,u=cu;su=c||a,cu=u||a,H=l||o,Au(t,e,n),H=l,cu=u,su=c,Nu(e),i&8192&&(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,!a||r===null||o||su||H||(t=o||H,n=su,r=H,su=a||su,H=t,Ru(e,2),su=n,H=r),!a&&cu||yu(e,a)),i&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,ku(e,n))));break;case 19:Au(t,e,n),Nu(e),i&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,ku(e,t)));break;case 30:i&512&&(H||r===null||kl(r,r.return)),i=Xt(),a=pu,o=(n&335544064)===n,c=e.memoizedProps,pu=o&&Ci(c.default,c.update)!==`none`,Au(t,e,n),Nu(e),o&&r!==null&&F&&(e.flags|=4),pu=a,F=i;break;case 21:break;case 7:i&512&&(H||r===null||kl(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Au(t,e,n),Nu(e)}}function Nu(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Ll(r)){n=r;break}r=r.return}r=null;for(var i=e.return;i!==null;){if(Pl(i)){var a=i.stateNode;r===null?r=[a]:r.push(a)}if(Nl(i))break;i=i.return}var o=r;if(n==null)throw Error(s(160));switch(n.tag){case 27:var c=n.stateNode;Bl(e,Rl(e),c,o);break;case 5:var l=n.stateNode;n.flags&32&&(mn(l,``),n.flags&=-33),Bl(e,Rl(e),l,o);break;case 3:case 4:var u=n.stateNode.containerInfo;zl(e,Rl(e),u,o);break;default:throw Error(s(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Pu(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Pu(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,gh=!0,t.reset(),gh=!1),e=e.sibling}}function Fu(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Iu(t,e),t=t.sibling;else ou(t,!1)}function Iu(e,t){var n=e.alternate;if(n===null)Ql(e,!1);else switch(e.tag){case 3:if(hu=fu=!1,Kl(),Fu(t,e),!fu&&!mu){if(e=Gl,e!==null)for(var r=0;r<e.length;r+=3){n=e[r];var i=e[r+1];Ep(n,e[r+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(`+i+`)`})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===``&&(e.style.viewTransitionName=`none`,e.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(root)`}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition`})),hu=!0}Gl=null;break;case 5:Fu(t,e);break;case 4:r=fu,fu=!1,Fu(t,e),fu&&(mu=!0),fu=r;break;case 22:e.memoizedState===null&&(n.memoizedState===null?Fu(t,e):Ql(e,!1));break;case 30:r=fu,i=Kl(),fu=!1,Fu(t,e),fu&&(e.flags|=4);var a=e.memoizedProps,o=e.stateNode;t=xi(a,o),o=xi(n.memoizedProps,o);var s=Ci(a.default,a.update);s===`none`?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,ql=0,t=au(e,n,t,o,s,a,!0),ql!==(a===null?0:a.length)&&(e.flags|=32)),e.flags&4&&t?(Nd(e,e.memoizedProps.onUpdate),Gl=i):i!==null&&(i.push.apply(i,Gl),Gl=i),fu=e.flags&32?!0:r;break;default:Fu(t,e)}}function Lu(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)vu(e,t.alternate,t),t=t.sibling}function Ru(e,t){for(e=e.child;e!==null;){var n=e,r=t;switch(n.tag){case 0:case 11:case 14:case 15:Tl(4,n,n.return),Ru(n,r);break;case 1:kl(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount==`function`&&Dl(n,n.return,i),Ru(n,r);break;case 27:r&2&&gm(n.stateNode,n.type,n.memoizedProps);case 5:kl(n,n.return),n.tag!==5&&n.tag!==27||Ml(n),Ru(n,r);break;case 6:Ml(n);break;case 26:kl(n,n.return),i=n.stateNode,n.memoizedState!==null||i===null||H||i.parentNode.removeChild(i),Ru(n,r);break;case 22:n.memoizedState===null&&Ru(n,r);break;case 30:kl(n,n.return),Ru(n,r);break;case 7:kl(n,n.return);default:Ru(n,r)}e=e.sibling}}function zu(e,t,n){for(n=t.subtreeFlags&8772?n:n&-2,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags,s=!!(n&1);switch(a.tag){case 0:case 11:case 15:zu(i,a,n),wl(4,a);break;case 1:if(zu(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var c=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)Do(l[i],c)}catch(e){Z(r,r.return,e)}}s&&o&64&&El(a),Ol(a,a.return);break;case 27:n&2&&Vl(a);case 5:a.tag!==5&&a.tag!==27||jl(a),zu(i,a,n),s&&r===null&&o&4&&Fl(a),Ol(a,a.return);break;case 6:jl(a);break;case 26:c=a.stateNode,a.memoizedState!==null||c===null||su||Km(bm(c.ownerDocument),a.type,c),zu(i,a,n),s&&r===null&&o&4&&Fl(a),Ol(a,a.return);break;case 12:zu(i,a,n);break;case 31:zu(i,a,n),s&&o&4&&Eu(i,a);break;case 13:zu(i,a,n),s&&o&4&&Du(i,a);break;case 22:a.memoizedState===null&&zu(i,a,n),Ol(a,a.return);break;case 30:zu(i,a,n),Ol(a,a.return);break;case 7:Ol(a,a.return);default:zu(i,a,n)}t=t.sibling}}function Bu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ia(n))}function Vu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ia(e))}function Hu(e,t,n,r){var i=(n&335544064)===n;if(t.subtreeFlags&(i?10262:10256))for(t=t.child;t!==null;)Uu(e,t,n,r),t=t.sibling;else i&&iu(t)}function Uu(e,t,n,r){var i=(n&335544064)===n;i&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&ru(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:Hu(e,t,n,r),a&2048&&wl(9,t);break;case 1:Hu(e,t,n,r);break;case 3:Hu(e,t,n,r),i&&hu&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,e.style.viewTransitionName===`root`&&(e.style.viewTransitionName=``),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===`none`&&(e.style.viewTransitionName=``)),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Ia(a)));break;case 12:if(a&2048){Hu(e,t,n,r),a=t.stateNode;try{var o=t.memoizedProps,s=o.id,c=o.onPostCommit;typeof c==`function`&&c(s,t.alternate===null?`mount`:`update`,a.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Hu(e,t,n,r);break;case 31:Hu(e,t,n,r);break;case 13:Hu(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState===null?(i&&s!==null&&s.memoizedState!==null&&ru(t),o._visibility&2?Hu(e,t,n,r):(o._visibility|=2,Wu(e,t,n,r,!!(t.subtreeFlags&10256)||!1))):(i&&s!==null&&s.memoizedState===null&&ru(s),o._visibility&2?Hu(e,t,n,r):Gu(e,t)),a&2048&&Bu(s,t);break;case 24:Hu(e,t,n,r),a&2048&&Vu(t.alternate,t);break;case 30:i&&(a=t.alternate,a!==null&&(Xl(a.child,!0),Xl(t.child,!0))),Hu(e,t,n,r);break;default:Hu(e,t,n,r)}}function Wu(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Wu(a,o,s,c,i),wl(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Wu(a,o,s,c,i)):u._visibility&2?Wu(a,o,s,c,i):Gu(a,o),i&&l&2048&&Bu(o.alternate,o);break;case 24:Wu(a,o,s,c,i),i&&l&2048&&Vu(o.alternate,o);break;default:Wu(a,o,s,c,i)}t=t.sibling}}function Gu(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Gu(n,r),i&2048&&Bu(r.alternate,r);break;case 24:Gu(n,r),i&2048&&Vu(r.alternate,r);break;default:Gu(n,r)}t=t.sibling}}var Ku=8192;function qu(e,t,n){if(e.subtreeFlags&Ku)for(e=e.child;e!==null;)Ju(e,t,n),e=e.sibling}function Ju(e,t,n){switch(e.tag){case 26:qu(e,t,n),e.flags&Ku&&(e.memoizedState===null?(e=e.stateNode,(t&335544128)===t&&Zm(n,e)):Qm(n,ju,e.memoizedState,e.memoizedProps));break;case 5:qu(e,t,n),e.flags&Ku&&(e=e.stateNode,(t&335544128)===t&&Zm(n,e));break;case 3:case 4:var r=ju;ju=bm(e.stateNode.containerInfo),qu(e,t,n),ju=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ku,Ku=16777216,qu(e,t,n),Ku=r):qu(e,t,n));break;case 30:if((e.flags&Ku)!==0&&(r=e.memoizedProps.name,r!=null&&r!==`auto`)){var i=e.stateNode;i.paired=null,Ul===null&&(Ul=new Map),Ul.set(r,i)}qu(e,t,n);break;default:qu(e,t,n)}}function Yu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Xu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];du=r,$u(r,e)}Yu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Zu(e),e=e.sibling}function Zu(e){switch(e.tag){case 0:case 11:case 15:Xu(e),e.flags&2048&&Tl(9,e,e.return);break;case 3:Xu(e);break;case 12:Xu(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Qu(e)):Xu(e);break;default:Xu(e)}}function Qu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];du=r,$u(r,e)}Yu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Tl(8,t,t.return),Qu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Qu(t));break;default:Qu(t)}e=e.sibling}}function $u(e,t){for(;du!==null;){var n=du;switch(n.tag){case 0:case 11:case 15:Tl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Ia(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,du=r;else a:for(n=e;du!==null;){r=du;var i=r.sibling,a=r.return;if(Su(r),r===n){du=null;break a}if(i!==null){i.return=a,du=i;break a}du=a}}}var ed={getCacheForType:function(e){var t=Oa(Pa),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Oa(Pa).controller.signal}},td=typeof WeakMap==`function`?WeakMap:Map,W=0,G=null,K=null,q=0,J=0,nd=null,rd=!1,id=!1,ad=!1,od=0,Y=0,sd=0,cd=0,ld=0,ud=0,dd=0,fd=null,pd=null,md=!1,hd=0,gd=0,_d=1/0,vd=null,yd=null,X=0,bd=null,xd=null,Sd=0,Cd=0,wd=null,Td=null,Ed=null,Dd=null,Od=null,kd=0,Ad=null;function jd(){return W&2&&q!==0?q&-q:k.T===null?Ct():Pf()}function Md(){if(ud===0){if(!(q&536870912)||L){var e=st;st<<=1,!(st&3932160)&&(st=262144),ud=e}else ud=536870912}return e=Po.current,e!==null&&(e.flags|=32),ud}function Nd(e,t){if(t!=null){var n=e.stateNode,r=n.ref;r===null&&(r=n.ref=Pp(xi(e.memoizedProps,n))),Dd===null&&(Dd=[]),Dd.push(t.bind(null,r))}}function Pd(e,t,n){(e===G&&(J===2||J===9)||e.cancelPendingCommit!==null)&&(Vd(e,0),Rd(e,q,ud,!1)),gt(e,n),W&2&&e===G||(e===G&&(!(W&2)&&(cd|=n),Y===4&&Rd(e,q,ud,!1)),Ef(e))}function Fd(e,t,n){if(W&6)throw Error(s(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||dt(e,t),i=r?Yd(e,t):qd(e,t,!0),a=r;do{if(i===0){id&&!r&&Rd(e,t,0,!1);break}if(n=e.current.alternate,a&&!Ld(n))i=qd(e,t,!1),a=!1;else{if(i===2){if(a=t,e.errorRecoveryDisabledLanes&a)var o=0;else o=e.pendingLanes&-536870913,o=o===0?o&536870912?536870912:0:o;if(o!==0){t=o;a:{var c=e;i=fd;var l=c.current.memoizedState.isDehydrated;if(l&&(Vd(c,o).flags|=256),o=qd(c,o,!1),o!==2&&o!==6){if(ad&&!l){c.errorRecoveryDisabledLanes|=a,cd|=a,i=4;break a}a=pd,pd=i,a!==null&&(pd===null?pd=a:pd.push.apply(pd,a))}i=o}if(a=!1,i!==2)continue}}if(i===1){Vd(e,0),Rd(e,t,0,!0);break}a:{switch(r=e,a=i,a){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Rd(r,t,ud,!rd);break a;case 2:pd=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(i=hd+300-N(),10<i)){if(Rd(r,t,ud,!rd),ut(r,0,!0)!==0)break a;Sd=t,r.timeoutHandle=gp(Id.bind(null,r,n,pd,vd,md,t,ud,cd,dd,rd,a,`Throttled`,-0,0),i);break a}Id(r,n,pd,vd,md,t,ud,cd,dd,rd,a,null,-0,0)}break}}while(1);Ef(e)}function Id(e,t,n,r,i,a,o,s,c,l,u,d,f,p){e.timeoutHandle=-1;var m=t.subtreeFlags,h=(a&335544064)===a;d=null,(h||m&8192||(m&16785408)==16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Sn},Ul=null,Ju(t,a,d),h&&(m=d,h=e.containerInfo,h=(h.nodeType===9?h:h.ownerDocument).__reactViewTransition,h!=null&&(m.count++,m.waitingForViewTransition=!0,m=nh.bind(m),h.finished.then(m,m))),m=(a&62914560)===a?hd-N():(a&4194048)===a?gd-N():0,m=eh(d,m),m!==null)?(Sd=a,e.cancelPendingCommit=m(nf.bind(null,e,t,a,n,r,i,o,s,c,l,u,d,null,f,p)),Rd(e,a,o,!l)):nf(e,t,a,n,r,i,o,s,c,l,u,d)}function Ld(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Gr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Rd(e,t,n,r){t=ft(e,t),t&=~ld,t&=~cd,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-nt(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&vt(e,n,t)}function zd(){return W&6?!0:(Df(0,!1),!1)}function Bd(){if(K!==null){if(J===0)var e=K.return;else e=K,ba=ya=null,ss(e),co=null,lo=0,e=K;for(;e!==null;)Cl(e.alternate,e),e=e.return;K=null}}function Vd(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,_p(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Sd=0,Bd(),G=e,K=n=Ri(e.current,null),q=t,J=0,nd=null,rd=!1,id=dt(e,t),ad=!1,dd=ud=ld=cd=sd=Y=0,pd=fd=null,md=!1,od=ft(e,t),Oi(),n}function Hd(e,t){R=null,k.H=_c,t===Qa||t===eo?(t=oo(),J=3):t===$a?(t=oo(),J=4):J=t===Fc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,nd=t,K===null&&(Y=1,kc(e,Ki(t,e.current)))}function Ud(){var e=Po.current;return e===null?!0:(q&4194048)===q?Fo===null:(q&62914560)===q||q&536870912?e===Fo:!1}function Wd(){var e=k.H;return k.H=_c,e===null?_c:e}function Gd(){var e=k.A;return k.A=ed,e}function Kd(){Y=4,rd||(q&4194048)!==q&&Po.current!==null||(id=!0),!(sd&134217727)&&!(cd&134217727)||G===null||Rd(G,q,ud,!1)}function qd(e,t,n){var r=W;W|=2;var i=Wd(),a=Gd();(G!==e||q!==t)&&(vd=null,Vd(e,t)),t=!1;var o=Y;a:do try{if(J!==0&&K!==null){var s=K,c=nd;switch(J){case 8:Bd(),o=6;break a;case 3:case 2:case 9:case 6:Po.current===null&&(t=!0);var l=J;if(J=0,nd=null,$d(e,s,c,l),n&&id){o=0;break a}break;default:l=J,J=0,nd=null,$d(e,s,c,l)}}Jd(),o=Y;break}catch(t){Hd(e,t)}while(1);return t&&e.shellSuspendCounter++,ba=ya=null,W=r,k.H=i,k.A=a,K===null&&(G=null,q=0,Oi()),o}function Jd(){for(;K!==null;)Zd(K)}function Yd(e,t){var n=W;W|=2;var r=Wd(),i=Gd();G!==e||q!==t?(vd=null,_d=N()+500,Vd(e,t)):id=dt(e,t);a:do try{if(J!==0&&K!==null){t=K;var a=nd;b:switch(J){case 1:J=0,nd=null,$d(e,t,a,1);break;case 2:case 9:if(no(a)){J=0,nd=null,Qd(t);break}t=function(){J!==2&&J!==9||G!==e||(J=7),Ef(e)},a.then(t,t);break a;case 3:J=7;break a;case 4:J=5;break a;case 7:no(a)?(J=0,nd=null,Qd(t)):(J=0,nd=null,$d(e,t,a,7));break;case 5:var o=null;switch(K.tag){case 26:o=K.memoizedState;case 5:case 27:var c=K;if(o?Ym(o):c.stateNode.complete){J=0,nd=null;var l=c.sibling;if(l!==null)K=l;else{var u=c.return;u===null?K=null:(K=u,ef(u))}break b}}J=0,nd=null,$d(e,t,a,5);break;case 6:J=0,nd=null,$d(e,t,a,6);break;case 8:Bd(),Y=6;break a;default:throw Error(s(462))}}Xd();break}catch(t){Hd(e,t)}while(1);return ba=ya=null,k.H=r,k.A=i,W=n,K===null?(G=null,q=0,Oi(),Y):0}function Xd(){for(;K!==null&&!We();)Zd(K)}function Zd(e){var t=hl(e.alternate,e,od);e.memoizedProps=e.pendingProps,t===null?ef(e):K=t}function Qd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Yc(n,t,t.pendingProps,t.type,void 0,q);break;case 11:t=Yc(n,t,t.pendingProps,t.type.render,t.ref,q);break;case 5:ss(t);var r=t;r===sa&&(L?(pa(r),r.tag===5&&r.stateNode!=null&&(I=r.stateNode)):(pa(r),L=!0));default:Cl(n,t),t=K=zi(t,od),t=hl(n,t,od)}e.memoizedProps=e.pendingProps,t===null?ef(e):K=t}function $d(e,t,n,r){ba=ya=null,ss(t),co=null,lo=0;var i=t.return;try{if(Pc(e,i,t,n,q)){Y=1,kc(e,Ki(n,e.current)),K=null;return}}catch(t){if(i!==null)throw K=i,t;Y=1,kc(e,Ki(n,e.current)),K=null;return}t.flags&32768?(L||r===1?e=!0:id||q&536870912?e=!1:(rd=e=!0,(r===2||r===9||r===3||r===6)&&(r=Po.current,r!==null&&r.tag===13&&(r.flags|=16384))),tf(t,e)):ef(t)}function ef(e){var t=e;do{if(t.flags&32768){tf(t,rd);return}e=t.return;var n=xl(t.alternate,t,od);if(n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Y===0&&(Y=5)}function tf(e,t){do{var n=Sl(e.alternate,e);if(n!==null){n.flags&=32767,K=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=n}while(e!==null);Y=6,K=null}function nf(e,t,n,r,i,a,o,c,l,u,d,f){e.cancelPendingCommit=null;do df();while(X!==0);if(W&6)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));e===G&&(K=G=null,q=0),xd=t,bd=e,Sd=n,wd=i,Td=r,rf(e,t,n,o,c,l,f)}}function rf(e,t,n,r,i,a,o){var s=t.lanes|t.childLanes;if(Cd=s,s|=Di,_t(e,n,s,r,i,a),Dd=null,(n&335544064)===n?(Od=za(e),r=10262):(Od=null,r=10256),(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,yf(Je,function(){return ff(),null})):(e.callbackNode=null,e.callbackPriority=0),Hl=!1,r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=k.T,k.T=null,i=A.p,A.p=2,a=W,W|=4;try{gu(e,t,n)}finally{W=a,A.p=i,k.T=r}}X=1,Hl?Ed=Mp(o,e.containerInfo,Od,sf,cf,of,lf,ff,af,null,null):(sf(),cf(),lf())}function af(e){if(X!==0){var t=bd.onRecoverableError;t(e,{componentStack:null})}}function of(){X===3&&(X=0,Iu(xd,bd),X=4)}function sf(){if(X===1){X=0;var e=bd,t=xd,n=Sd,r=!!(t.flags&13878);if(t.subtreeFlags&13878||r){r=k.T,k.T=null;var i=A.p;A.p=2;var a=W;W|=4;try{pu=mu=!1,Mu(t,e,n),n=cp;var o=Zr(e.containerInfo),s=n.focusedElem,c=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&Xr(s.ownerDocument.documentElement,s)){if(c!==null&&Qr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Yr(s,h),v=Yr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}gh=!!sp,cp=sp=null}finally{W=a,A.p=i,k.T=r}}e.current=t,X=2}}function cf(){if(X===2){X=0;var e=bd,t=xd,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=k.T,k.T=null;var r=A.p;A.p=2;var i=W;W|=4;try{vu(e,t.alternate,t)}finally{W=i,A.p=r,k.T=n}}X=3}}function lf(){if(X===4||X===3){X=0;var e=Ed;Ed=null,Ge();var t=bd,n=xd,r=Sd,i=Td,a=(r&335544064)===r?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?X=5:(X=0,xd=bd=null,uf(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(yd=null),St(r),n=n.stateNode,et&&typeof et.onCommitFiberRoot==`function`)try{et.onCommitFiberRoot($e,n,void 0,(n.current.flags&128)==128)}catch{}if(i!==null){n=k.T,a=A.p,A.p=2,k.T=null;try{for(var o=t.onRecoverableError,s=0;s<i.length;s++){var c=i[s];o(c.value,{componentStack:c.stack})}}finally{k.T=n,A.p=a}}if(i=Dd,o=Od,Od=null,i!==null&&(Dd=null,o===null&&(o=[]),e!==null))for(c=0;c<i.length;c++)n=(0,i[c])(o),n!==void 0&&e.finished.finally(n);Sd&3&&df(),Ef(t),a=t.pendingLanes,r&261930&&a&42?t===Ad?kd++:(kd=0,Ad=t):(kd=0,Ad=null),Df(0,!1)}}function uf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ia(t)))}function df(){return Ed!==null&&(Ed.skipTransition(),Ed=null),sf(),cf(),lf(),ff()}function ff(){if(X!==5)return!1;var e=bd,t=Cd;Cd=0;var n=St(Sd),r=k.T,i=A.p;try{A.p=32>n?32:n,k.T=null,n=wd,wd=null;var a=bd,o=Sd;if(X=0,xd=bd=null,Sd=0,W&6)throw Error(s(331));var c=W;if(W|=4,Zu(a.current),Uu(a,a.current,o,n),W=c,Df(0,!1),et&&typeof et.onPostCommitFiberRoot==`function`)try{et.onPostCommitFiberRoot($e,a)}catch{}return!0}finally{A.p=i,k.T=r,uf(e,t)}}function pf(e,t,n){t=Ki(n,t),t=jc(e.stateNode,t,2),e=xo(e,t,2),e!==null&&(gt(e,2),Ef(e))}function Z(e,t,n){if(e.tag===3)pf(e,e,n);else for(;t!==null;){if(t.tag===3){pf(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(yd===null||!yd.has(r))){e=Ki(n,e),n=Mc(2),r=xo(t,n,2),r!==null&&(Nc(n,r,t,e),gt(r,2),Ef(r));break}}t=t.return}}function mf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new td;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(ad=!0,i.add(n),e=hf.bind(null,e,t,n),t.then(e,e))}function hf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,G===e&&(q&n)===n&&(Y===4||Y===3&&(q&62914560)===q&&300>N()-hd?W&2?ld|=n:Vd(e,0):ld|=n,dd===q&&(dd=0)),Ef(e)}function gf(e,t){t===0&&(t=mt()),e=ji(e,t),e!==null&&(gt(e,t),Ef(e))}function _f(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gf(e,n)}function vf(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(t),gf(e,n)}function yf(e,t){return He(e,t)}var bf=null,xf=null,Sf=!1,Cf=!1,wf=!1,Tf=0;function Ef(e){e!==xf&&e.next===null&&(xf===null?bf=xf=e:xf=xf.next=e),Cf=!0,Sf||(Sf=!0,Nf())}function Df(e,t){if(!wf&&Cf){wf=!0;do for(var n=!1,r=bf;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-nt(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Mf(r,a))}else a=q,a=ut(r,r===G?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||dt(r,a)||(n=!0,Mf(r,a))}r=r.next}while(n);wf=!1}}function Of(){kf()}function kf(){Cf=Sf=!1;var e=0;Tf!==0&&hp()&&(e=Tf);for(var t=N(),n=null,r=bf;r!==null;){var i=r.next,a=Af(r,t);a===0?(r.next=null,n===null?bf=i:n.next=i,i===null&&(xf=n)):(n=r,(e!==0||a&3)&&(Cf=!0)),r=i}X!==0&&X!==5||Df(e,!1),Tf!==0&&(Tf=0)}function Af(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-nt(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=pt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=G,n=q,n=ut(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(J===2||J===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ue(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||dt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ue(r),St(n)){case 2:case 8:n=P;break;case 32:n=Je;break;case 268435456:n=Xe;break;default:n=Je}return r=jf.bind(null,e),n=He(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ue(r),e.callbackPriority=2,e.callbackNode=null,2}function jf(e,t){if(X!==0&&X!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(df()&&e.callbackNode!==n)return null;var r=q;return r=ut(e,e===G?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Fd(e,r,t),Af(e,N()),e.callbackNode!=null&&e.callbackNode===n?jf.bind(null,e):null)}function Mf(e,t){if(df())return null;Fd(e,t,!0)}function Nf(){bp(function(){W&6?He(qe,Of):kf()})}function Pf(){if(Tf===0){var e=Ha;e===0&&(e=ot,ot<<=1,!(ot&261888)&&(ot=256)),Tf=e}return Tf}function Ff(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:xn(e)}function If(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=Ff((i[Dt]||null).action),o=r.submitter;o&&(t=(t=o[Dt]||null)?Ff(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Un(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Tf!==0){var e=new FormData(i,o);rc(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=new FormData(i,o),rc(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var Lf=0;Lf<vi.length;Lf++){var Rf=vi[Lf];yi(Rf.toLowerCase(),`on`+(Rf[0].toUpperCase()+Rf.slice(1)))}yi(ui,`onAnimationEnd`),yi(di,`onAnimationIteration`),yi(fi,`onAnimationStart`),yi(`dblclick`,`onDoubleClick`),yi(`focusin`,`onFocus`),yi(`focusout`,`onBlur`),yi(pi,`onTransitionRun`),yi(mi,`onTransitionStart`),yi(hi,`onTransitionCancel`),yi(gi,`onTransitionEnd`),Gt(`onMouseEnter`,[`mouseout`,`mouseover`]),Gt(`onMouseLeave`,[`mouseout`,`mouseover`]),Gt(`onPointerEnter`,[`pointerout`,`pointerover`]),Gt(`onPointerLeave`,[`pointerout`,`pointerover`]),Wt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Wt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Wt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Wt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Wt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Wt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var zf=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),Bf=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(zf));function Vf(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){wi(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){wi(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[kt];n===void 0&&(n=t[kt]=new Set);var r=e+`__bubble`;n.has(r)||(Gf(t,e,2,!1),n.add(r))}function Hf(e,t,n){var r=0;t&&(r|=4),Gf(n,e,r,t)}var Uf=`_reactListening`+Math.random().toString(36).slice(2);function Wf(e){if(!e[Uf]){e[Uf]=!0,Ht.forEach(function(t){t!==`selectionchange`&&(Bf.has(t)||Hf(t,!1,e),Hf(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Uf]||(t[Uf]=!0,Hf(`selectionchange`,!1,t))}}function Gf(e,t,n,r){switch(Ch(t)){case 2:var i=_h;break;case 8:i=vh;break;default:i=yh}n=i.bind(null,t,n,e),i=void 0,!Mn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Kf(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;s!==null;){if(o=It(s),o===null)return;if(c=o.tag,c===5||c===6||c===26||c===27){r=a=o;continue a}s=s.parentNode}}r=r.return}kn(function(){var r=a,i=wn(n),o=[];a:{var s=_i.get(e);if(s!==void 0){var c=Un,u=e;switch(e){case`keypress`:if(Rn(n)===0)break a;case`keydown`:case`keyup`:c=sr;break;case`focusin`:u=`focus`,c=Qn;break;case`focusout`:u=`blur`,c=Qn;break;case`beforeblur`:case`afterblur`:c=Qn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=Xn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=Zn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=ur;break;case ui:case di:case fi:c=$n;break;case gi:c=dr;break;case`scroll`:case`scrollend`:c=Gn;break;case`wheel`:c=fr;break;case`copy`:case`cut`:case`paste`:c=er;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=cr;break;case`submit`:c=lr;break;case`toggle`:case`beforetoggle`:c=pr}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?s===null?null:s+`Capture`:s;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=An(m,p),g!=null&&d.push(qf(m,g,h))),f)break;m=m.return}0<d.length&&(s=new c(s,u,null,n,i),o.push({event:s,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,s=e===`mouseout`||e===`pointerout`,c&&n!==Cn&&(u=n.relatedTarget||n.fromElement)&&(It(u)||u[Ot]))break a;(s||c)&&(u=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,s?(c=n.relatedTarget||n.toElement,s=r,c=c?It(c):null,c!==null&&(f=l(c),d=c.tag,c!==f||d!==5&&d!==27&&d!==6)&&(c=null)):(s=null,c=r),s!==c&&(d=Xn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=cr,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=s==null?u:Rt(s),h=c==null?u:Rt(c),u=new d(g,m+`leave`,s,n,i),u.target=f,u.relatedTarget=h,g=null,It(i)===r&&(d=new d(p,m+`enter`,c,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,d=s&&c?te(s,c,Yf):null,s!==null&&Xf(o,u,s,d,!1),c!==null&&f!==null&&Xf(o,f,c,d,!0)))}a:{if(s=r?Rt(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var _=Nr;else if(Dr(s)){if(Pr)_=Ur;else{_=Vr;var v=Br}}else c=s.nodeName,!c||c.toLowerCase()!==`input`||s.type!==`checkbox`&&s.type!==`radio`?r&&vn(r.elementType)&&(_=Nr):_=Hr;if(_&&=_(e,r)){Or(o,_,n,i);break a}v&&v(e,s,r)}switch(v=r?Rt(r):window,e){case`focusin`:(Dr(v)||v.contentEditable===`true`)&&(ei=v,ti=r,ni=null);break;case`focusout`:ni=ti=ei=null;break;case`mousedown`:ri=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:ri=!1,ii(o,n,i);break;case`selectionchange`:if($r)break;case`keydown`:case`keyup`:ii(o,n,i)}var y;if(hr)b:{switch(e){case`compositionstart`:var b=`onCompositionStart`;break b;case`compositionend`:b=`onCompositionEnd`;break b;case`compositionupdate`:b=`onCompositionUpdate`;break b}b=void 0}else Cr?xr(e,n)&&(b=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(b=`onCompositionStart`);b&&(vr&&n.locale!==`ko`&&(Cr||b!==`onCompositionStart`?b===`onCompositionEnd`&&Cr&&(y=Ln()):(Pn=i,Fn=`value`in Pn?Pn.value:Pn.textContent,Cr=!0)),v=Jf(r,b),0<v.length&&(b=new tr(b,e,null,n,i),o.push({event:b,listeners:v}),y?b.data=y:(y=Sr(n),y!==null&&(b.data=y)))),(y=_r?wr(e,n):Tr(e,n))&&(b=Jf(r,`onBeforeInput`),0<b.length&&(v=new tr(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:v,listeners:b}),v.data=y)),If(o,e,r,n,i)}Vf(o,t)})}function qf(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Jf(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=An(e,n),i!=null&&r.unshift(qf(e,i,a)),i=An(e,t),i!=null&&r.push(qf(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Yf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Xf(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=An(n,a),l!=null&&o.unshift(qf(n,l,c))):i||(l=An(n,a),l!=null&&o.push(qf(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Zf=/\r\n?/g,Qf=/\u0000|\uFFFD/g;function $f(e){return(typeof e==`string`?e:``+e).replace(Zf,`
`).replace(Qf,``)}function ep(e,t){return t=$f(t),$f(e)===t}function $(e,t,n,r,i,a){switch(n){case`children`:if(typeof r==`string`)t===`body`||t===`textarea`&&r===``||mn(e,r);else if(typeof r==`number`||typeof r==`bigint`)t!==`body`&&mn(e,``+r);else return;break;case`className`:Qt(e,`class`,r);break;case`tabIndex`:Qt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Qt(e,n,r);break;case`style`:_n(e,r,a);return;case`data`:if(t!==`object`){Qt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)||r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=xn(r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof a==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,i.name,i,null),$(e,t,`formEncType`,i.formEncType,i,null),$(e,t,`formMethod`,i.formMethod,i,null),$(e,t,`formTarget`,i.formTarget,i,null)):($(e,t,`encType`,i.encType,i,null),$(e,t,`method`,i.method,i,null),$(e,t,`target`,i.target,i,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=xn(r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=Sn);return;case`onScroll`:r!=null&&Q(`scroll`,e);return;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));a?.__html!==n&&(e.innerHTML=n)}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=xn(r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Zt(e,`popover`,r);break;case`xlinkActuate`:$t(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:$t(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:$t(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:$t(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:$t(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:$t(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:$t(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:$t(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:$t(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Zt(e,`is`,r);break;case`innerText`:case`textContent`:return;default:if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)n=yn.get(n)||n,Zt(e,n,r);else return}F=!0}function tp(e,t,n,r,i,a){switch(n){case`style`:_n(e,r,a);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));a?.__html!==n&&(e.innerHTML=n)}}break;case`children`:if(typeof r==`string`)mn(e,r);else if(typeof r==`number`||typeof r==`bigint`)mn(e,``+r);else return;break;case`onScroll`:r!=null&&Q(`scroll`,e);return;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);return;case`onClick`:r!=null&&(e.onclick=Sn);return;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:return;case`innerText`:case`textContent`:return;default:if(!Ut.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(i=n.endsWith(`Capture`),a=n.slice(2,i?n.length-7:void 0),t=e[Dt]||null,t=t==null?null:t[n],typeof t==`function`&&e.removeEventListener(a,t,i),typeof r==`function`)){typeof t!=`function`&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(a,r,i);break a}F=!0,n in e?e[n]=r:!0===r?e.setAttribute(n,``):Zt(e,n,r)}return}F=!0}function np(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,i=!1,a;for(a in n)if(n.hasOwnProperty(a)){var o=n[a];if(o!=null)switch(a){case`src`:r=!0;break;case`srcSet`:i=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,a,o,n,null)}}i&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=a=o=i=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:i=d;break;case`type`:o=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:a=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(s(137,t));break;default:$(e,t,r,d,n,null)}}ln(e,a,c,l,u,o,i,!1);return;case`select`:for(i in Q(`invalid`,e),r=o=a=null,n)if(n.hasOwnProperty(i)&&(c=n[i],c!=null))switch(i){case`value`:a=c;break;case`defaultValue`:o=c;break;case`multiple`:r=c;default:$(e,t,i,c,n,null)}t=a,n=o,e.multiple=!!r,t==null?n!=null&&dn(e,!!r,n,!0):dn(e,!!r,t,!1);return;case`textarea`:for(o in Q(`invalid`,e),a=i=r=null,n)if(n.hasOwnProperty(o)&&(c=n[o],c!=null))switch(o){case`value`:r=c;break;case`defaultValue`:i=c;break;case`children`:a=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(s(91));break;default:$(e,t,o,c,n,null)}pn(e,r,i,a);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<zf.length;r++)Q(zf[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,u,r,n,null)}return;default:if(vn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&tp(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}var rp={};function ip(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var i=null,a=null,o=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:m!==f&&(F=!0),a=m;break;case`name`:m!==f&&(F=!0),i=m;break;case`checked`:m!==f&&(F=!0),u=m;break;case`defaultChecked`:m!==f&&(F=!0),d=m;break;case`value`:m!==f&&(F=!0),o=m;break;case`defaultValue`:m!==f&&(F=!0),c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(s(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}cn(e,o,c,l,u,d,a,i);return;case`select`:for(a in m=o=c=p=null,n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(a)||$(e,t,a,null,r,l)}for(i in r)if(a=r[i],l=n[i],r.hasOwnProperty(i)&&(a!=null||l!=null))switch(i){case`value`:a!==l&&(F=!0),p=a;break;case`defaultValue`:a!==l&&(F=!0),c=a;break;case`multiple`:a!==l&&(F=!0),o=a;default:a!==l&&$(e,t,i,a,r,l)}t=c,n=o,r=m,p==null?!!r!=!!n&&(t==null?dn(e,!!n,n?[]:``,!1):dn(e,!!n,t,!0)):dn(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(i=n[c],n.hasOwnProperty(c)&&i!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,i)}for(o in r)if(i=r[o],a=n[o],r.hasOwnProperty(o)&&(i!=null||a!=null))switch(o){case`value`:i!==a&&(F=!0),p=i;break;case`defaultValue`:i!==a&&(F=!0),m=i;break;case`children`:break;case`dangerouslySetInnerHTML`:if(i!=null)throw Error(s(91));break;default:i!==a&&$(e,t,o,i,r,a)}fn(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:p!==m&&(F=!0),e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(s(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(vn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&tp(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||tp(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function ap(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function op(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&ap(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&ap(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var sp=null,cp=null;function lp(e){return e.nodeType===9?e:e.ownerDocument}function up(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function dp(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function fp(e,t,n,r){return n=lp(n).createElement(e),n[Et]=r,n[Dt]=t,np(n,e,t),Bt(n),n}function pp(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mp=null;function hp(){var e=window.event;return e&&e.type===`popstate`?e!==mp&&(mp=e,!0):(mp=null,!1)}var gp=typeof setTimeout==`function`?setTimeout:void 0,_p=typeof clearTimeout==`function`?clearTimeout:void 0,vp=typeof Promise==`function`?Promise:void 0,yp=typeof requestAnimationFrame==`function`?requestAnimationFrame:gp,bp=typeof queueMicrotask==`function`?queueMicrotask:vp===void 0?gp:function(e){return vp.resolve(null).then(e).catch(xp)};function xp(e){setTimeout(function(){throw e})}function Sp(e){return e===`head`}function Cp(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Hh(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)_m(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,_m(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Nt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&_m(e.ownerDocument.body)}n=i}while(n);Hh(t)}function wp(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function Tp(e,t,n){if(t=CSS.escape(t)===t?t:`r-`+btoa(t).replace(/=/g,``),e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display===`inline`){if(t=e.getClientRects(),t.length===1)var r=1;else for(var i=r=0;i<t.length;i++){var a=t[i];0<a.width&&0<a.height&&r++}r===1&&(e=e.style,e.display=t.length===1?`inline-block`:`block`,e.marginTop=`-`+n.paddingTop,e.marginBottom=`-`+n.paddingBottom)}}function Ep(e,t){e=e.style,t=t.style;var n=t==null?null:t.hasOwnProperty(`viewTransitionName`)?t.viewTransitionName:t.hasOwnProperty(`view-transition-name`)?t[`view-transition-name`]:null;e.viewTransitionName=n==null||typeof n==`boolean`?``:(``+n).trim(),n=t==null?null:t.hasOwnProperty(`viewTransitionClass`)?t.viewTransitionClass:t.hasOwnProperty(`view-transition-class`)?t[`view-transition-class`]:null,e.viewTransitionClass=n==null||typeof n==`boolean`?``:(``+n).trim(),e.display===`inline-block`&&(t==null?e.display=e.margin=``:(n=t.display,e.display=n==null||typeof n==`boolean`?``:n,n=t.margin,n==null?(n=t.hasOwnProperty(`marginTop`)?t.marginTop:t[`margin-top`],e.marginTop=n==null||typeof n==`boolean`?``:n,t=t.hasOwnProperty(`marginBottom`)?t.marginBottom:t[`margin-bottom`],e.marginBottom=t==null||typeof t==`boolean`?``:t):e.margin=n))}function Dp(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position===`absolute`||t.position===`fixed`,clip:t.clipPath!==`none`||t.overflow!==`visible`||t.filter!==`none`||t.mask!==`none`||t.mask!==`none`||t.borderRadius!==`0px`,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Op(e){return Dp(e.getBoundingClientRect(),getComputedStyle(e),e)}function kp(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return Dp(t,n,e)}function Ap(e){return e.documentElement.clientHeight}function jp(e){this.addEventListener(`load`,e),this.addEventListener(`error`,e)}function Mp(e,t,n,r,i,a,o,s,c){var l=t.nodeType===9?t:t.ownerDocument;try{var u=l.startViewTransition({update:function(){var t=l.defaultView,n=t.navigation&&t.navigation.transition,o=l.fonts.status;r();var s=[];if(o===`loaded`&&(Ap(l),l.fonts.status===`loading`&&s.push(l.fonts.ready)),o=s.length,e!==null)for(var c=e.suspenseyImages,u=0,d=0;d<c.length;d++){var f=c[d];if(!f.complete){var p=f.getBoundingClientRect();if(0<p.bottom&&0<p.right&&p.top<t.innerHeight&&p.left<t.innerWidth){if(u+=Xm(f),u>$m){s.length=o;break}f=new Promise(jp.bind(f)),s.push(f)}}}if(0<s.length)return t=Promise.race([Promise.all(s),new Promise(function(e){return setTimeout(e,500)})]).then(i,i),(n?Promise.allSettled([n.finished,t]):t).then(a,a);if(i(),n)return n.finished.then(a,a);a()},types:n});l.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var e=l.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],r=n.effect,i=r.pseudoElement;if(i!=null&&i.startsWith(`::view-transition`)){d.push(n),n=r.getKeyframes();for(var a=i=void 0,s=!0,c=0;c<n.length;c++){var u=n[c],f=u.width;if(i===void 0)i=f;else if(i!==f){s=!1;break}if(f=u.height,a===void 0)a=f;else if(a!==f){s=!1;break}delete u.width,delete u.height,u.transform===`none`&&delete u.transform}s&&i!==void 0&&a!==void 0&&(r.setKeyframes(n),s=getComputedStyle(r.target,r.pseudoElement),s.width!==i||s.height!==a)&&(s=n[0],s.width=i,s.height=a,s=n[n.length-1],s.width=i,s.height=a,r.setKeyframes(n))}}o()},function(e){l.__reactViewTransition===u&&(l.__reactViewTransition=null);try{if(typeof e==`object`&&e)switch(e.name){case`InvalidStateError`:(e.message===`View transition was skipped because document visibility state is hidden.`||e.message===`Skipping view transition because document visibility state has become hidden.`||e.message===`Skipping view transition because viewport size changed.`||e.message===`Transition was aborted because of invalid state`)&&(e=null)}e!==null&&c(e)}finally{r(),i(),o()}}),u.finished.finally(function(){for(var e=0;e<d.length;e++)d[e].cancel();l.__reactViewTransition===u&&(l.__reactViewTransition=null),s()}),u}catch{return r(),i(),o(),null}}function Np(e,t){this._scope=document.documentElement,this._selector=`::view-transition-`+e+`(`+t+`)`}Np.prototype.animate=function(e,t){return t=typeof t==`number`?{duration:t}:T({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Np.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],i=0;i<n.length;i++){var a=n[i].effect;a!==null&&a.target===e&&a.pseudoElement===t&&r.push(n[i])}return r},Np.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Pp(e){return{name:e,group:new Np(`group`,e),imagePair:new Np(`image-pair`,e),old:new Np(`old`,e),new:new Np(`new`,e)}}function Fp(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Fp.prototype.addEventListener=function(e,t,n){var r=null,i=null;if(!(n!=null&&typeof n!=`boolean`&&(r=n.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(Bp(a,e,t,n)===-1){var o=this,s=t;n!=null&&typeof n!=`boolean`&&!0===n.once&&(s=function(r){o.removeEventListener(e,t,n),typeof t==`function`?t.call(this,r):t.handleEvent(r)}),r!==null&&(i=o.removeEventListener.bind(o,e,t,n),r.addEventListener(`abort`,i,{once:!0}),i=r.removeEventListener.bind(r,`abort`,i)),r=Rp(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:i}),h(this._fragmentFiber.child,!1,Ip,e,s,r)}this._eventListeners=a}};function Ip(e,t,n,r){return b(e).addEventListener(t,n,r),!1}Fp.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;if(r!==null&&(t=Bp(r,e,t,n),t!==-1)){var i=r[t];n=i.attachedListener;var a=i.cleanup;i=Rp(i.optionsOrUseCapture),h(this._fragmentFiber.child,!1,Lp,e,n,i),r.splice(t,1),a!==null&&a()}};function Lp(e,t,n,r){return b(e).removeEventListener(t,n,r),!1}function Rp(e){return e!=null&&typeof e!=`boolean`&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function zp(e){return e==null?`c=0`:typeof e==`boolean`?`c=`+(e?`1`:`0`):`c=`+(e.capture?`1`:`0`)}function Bp(e,t,n,r){if(e.length===0)return-1;r=zp(r);for(var i=0;i<e.length;i++){var a=e[i];if(a.type===t&&a.listener===n&&zp(a.optionsOrUseCapture)===r)return i}return-1}Fp.prototype.dispatchEvent=function(e){var t=g(this._fragmentFiber);if(t===null)return!0;t=b(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var r=t.nodeType===9?t.createComment(``):document.createTextNode(``);if(n)for(var i=0;i<n.length;i++){var a=n[i];r.addEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),n)for(i=0;i<n.length;i++)a=n[i],r.removeEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},Fp.prototype.focus=function(e){h(this._fragmentFiber.child,!0,Vp,e,void 0,void 0)};function Vp(e,t){return e.tag!==6&&(e=b(e),pm(e,t))}Fp.prototype.focusLast=function(e){var t=[];h(this._fragmentFiber.child,!0,Hp,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Vp(t[n],e);n--);};function Hp(e,t){return t.push(e),!1}Fp.prototype.blur=function(){var e=g(this._fragmentFiber);e!==null&&(e=b(e),e=lp(e).activeElement,e!==null&&h(this._fragmentFiber.child,!1,Up,e,void 0,void 0))};function Up(e,t){return e.tag!==6&&(e=b(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Fp.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),h(this._fragmentFiber.child,!1,Wp,e,void 0,void 0)};function Wp(e,t){return e.tag===6||(e=b(e),t.observe(e)),!1}Fp.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),h(this._fragmentFiber.child,!1,Gp,e,void 0,void 0);for(var n=t=0;n<Kp.length;n++){var r=Kp[n];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Kp[t++]=r}Kp.length=t}};function Gp(e,t){return e.tag===6||(e=b(e),t.unobserve(e)),!1}var Kp=[],qp=!1;function Jp(e,t,n){Kp.push({fragmentInstance:e,observer:t,instance:n}),qp||(qp=!0,mm(function(){qp=!1;var e=Kp;Kp=[];for(var t=0;t<e.length;t++){var n=e[t];n.observer.unobserve(n.instance)}}))}Fp.prototype.getClientRects=function(){var e=[];return h(this._fragmentFiber.child,!1,Yp,e,void 0,void 0),e};function Yp(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=b(e),t.push.apply(t,e.getClientRects());return!1}Fp.prototype.getRootNode=function(e){var t=g(this._fragmentFiber);return t===null?this:b(t).getRootNode(e)},Fp.prototype.compareDocumentPosition=function(e){var t=g(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];h(this._fragmentFiber.child,!1,Hp,n,void 0,void 0);var r=b(t);if(n.length===0){if(n=r,_(this._fragmentFiber)){a:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break a}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var i=r=n.compareDocumentPosition(e);return n===e?i=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=v(t)[1],n===null?i=Node.DOCUMENT_POSITION_PRECEDING:(e=b(n).compareDocumentPosition(e),i=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=b(n[0]),i=b(n[n.length-1]);var a=_(this._fragmentFiber)?t.parentElement:r;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=t.compareDocumentPosition(e),s=i.compareDocumentPosition(e),c=o&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=r&&a&&o&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||a&&i===e||c||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!a&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Xp(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Xp(e,t,n,r,i){var a=It(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)a:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break a}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=i.ownerDocument,i===a||i===a.documentElement||i===a.body;a:{for(a=t,t=g(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break a}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=te(n,a,w),t===null?t=!1:(h(t,!0,ee,a,n),a=x,x=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===r)&&(t=te(r,a,w),t===null?t=!1:(h(t,!0,C,a,r),a=x,S=x=null,t=a!==null)),t):!1}function Zp(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Fp.prototype.scrollIntoView=function(e){if(typeof e==`object`)throw Error(s(566));var t=[];h(this._fragmentFiber.child,!1,Hp,t,void 0,void 0);var n=!1!==e;if(t.length===0){var r=v(this._fragmentFiber);if(r=n?r[1]||r[0]||g(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=b(r),Zp(e,n);return}if(r=b(r),r.nodeType!==9){if(r.nodeType===11){n=`host`in r?r.host:null,n!==null&&n.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=n?t.length-1:0;r!==(n?-1:t.length);){var i=t[r];i.tag===6?(i=b(i),Zp(i,n)):b(i).scrollIntoView(e),r+=n?-1:1}};function Qp(e,t){return e=b(e),$p(e,t),!1}function $p(e,t){e.reactFragments??=new Set,e.reactFragments.add(t)}function em(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.addEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){for(var r=0,i=0;i<Kp.length;i++){var a=Kp[i];(a.fragmentInstance!==t||a.observer!==n||a.instance!==e)&&(Kp[r++]=a)}Kp.length=r,n.observe(e)}),$p(e,t))}function tm(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.removeEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){typeof n.rootMargin==`string`?Jp(t,n,e):n.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function nm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:nm(n),Ft(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function rm(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[Nt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=lm(e.nextSibling),e===null)break}return null}function im(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=lm(e.nextSibling),e===null))return null;return e}function am(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=lm(e.nextSibling),e===null))return null;return e}function om(e){return e.data===`$?`||e.data===`$~`}function sm(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function cm(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function lm(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var um=null;function dm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return lm(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function fm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function pm(e,t){function n(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener(`focus`,n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener(`focus`,n,!0)}return r}function mm(e){yp(function(){yp(function(t){return e(t)})})}function hm(e,t,n){switch(t=lp(n),e){case`html`:if(e=t.documentElement,!e)throw Error(s(452));return e;case`head`:if(e=t.head,!e)throw Error(s(453));return e;case`body`:if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function gm(e,t,n){for(var r in n){var i=n[r];n.hasOwnProperty(r)&&i!=null&&$(e,t,r,null,rp,i)}n.dangerouslySetInnerHTML!=null&&(e.textContent=``),e.onclick===Sn&&(e.onclick=null),Ft(e)}function _m(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ft(e)}var vm=new Map,ym=new Set;function bm(e){if(typeof e.getRootNode==`function`){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var xm=A.d;A.d={f:Sm,r:Cm,D:Em,C:Dm,L:Om,m:km,X:jm,S:Am,M:Mm};function Sm(){var e=xm.f(),t=zd();return e||t}function Cm(e){var t=Lt(e);t!==null&&t.tag===5&&t.type===`form`?ac(t):xm.r(e)}var wm=typeof document>`u`?null:document;function Tm(e,t,n){var r=wm;if(r&&typeof t==`string`&&t){var i=sn(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),ym.has(i)||(ym.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),np(t,`link`,e),Bt(t),r.head.appendChild(t)))}}function Em(e){xm.D(e),Tm(`dns-prefetch`,e,null)}function Dm(e,t){xm.C(e,t),Tm(`preconnect`,e,t)}function Om(e,t,n){xm.L(e,t,n);var r=wm;if(r&&e&&t){var i=`link[rel="preload"][as="`+sn(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+sn(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+sn(n.imageSizes)+`"]`)):i+=`[href="`+sn(e)+`"]`;var a=i;switch(t){case`style`:a=Pm(e);break;case`script`:a=Rm(e)}if(!(vm.has(a)||(e=T({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),vm.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Fm(a))||t===`script`&&r.querySelector(zm(a))))){var o=r.createElement(`link`);np(o,`link`,e),t===`style`&&(o[Pt]=!0,o.onload=o.onerror=function(){Vt(o)}),Bt(o),r.head.appendChild(o)}}}function km(e,t){xm.m(e,t);var n=wm;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+sn(r)+`"][href="`+sn(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Rm(e)}if(!vm.has(a)&&(e=T({rel:`modulepreload`,href:e},t),vm.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(zm(a)))return}r=n.createElement(`link`),np(r,`link`,e),Bt(r),n.head.appendChild(r)}}}function Am(e,t,n){xm.S(e,t,n);var r=wm;if(r&&e){var i=zt(r).hoistableStyles,a=Pm(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Fm(a)))s.loading=5;else{e=T({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=vm.get(a))&&Hm(e,n);var c=o=r.createElement(`link`);Bt(c),np(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Vm(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function jm(e,t){xm.X(e,t);var n=wm;if(n&&e){var r=zt(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=T({src:e,async:!0},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Bt(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Mm(e,t){xm.M(e,t);var n=wm;if(n&&e){var r=zt(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=T({src:e,async:!0,type:`module`},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Bt(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Nm(e,t,n,r){var i=(i=Oe.current)?bm(i):null;if(!i)throw Error(s(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(n=Pm(n.href),t=zt(i).hoistableStyles,r=t.get(n),r||(r={type:`style`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Pm(n.href);var a=zt(i).hoistableStyles,o=a.get(e);if(o||(i=i.ownerDocument||i,o={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},a.set(e,o),(a=i.querySelector(Fm(e)))?a._p||(o.instance=a,o.state.loading=5):(a=vm.get(e),a||(a={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},vm.set(e,a)),Lm(i,e,a,o.state))),t&&r===null)throw Error(s(528,``));return o}if(t&&r!==null)throw Error(s(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(n=Rm(n),t=zt(i).hoistableScripts,r=t.get(n),r||(r={type:`script`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Pm(e){return`href="`+sn(e)+`"`}function Fm(e){return`link[rel="stylesheet"][`+e+`]`}function Im(e){return T({},e,{"data-precedence":e.precedence,precedence:null})}function Lm(e,t,n,r){if(t=e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)){if(!0!==t[Pt]){r.loading=1;return}}else t=e.createElement(`link`),t[Pt]=!0,t.onload=t.onerror=Vt.bind(null,t),np(t,`link`,n),Bt(t),e.head.appendChild(t);r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2})}function Rm(e){return`[src="`+sn(e)+`"]`}function zm(e){return`script[async]`+e}function Bm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+sn(n.href)+`"]`);if(r)return t.instance=r,Bt(r),r;var i=T({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Bt(r),np(r,`style`,i),Vm(r,n.precedence,e),t.instance=r;case`stylesheet`:i=Pm(n.href);var a=e.querySelector(Fm(i));if(a)return t.state.loading|=4,t.instance=a,Bt(a),a;r=Im(n),(i=vm.get(i))&&Hm(r,i),a=(e.ownerDocument||e).createElement(`link`),Bt(a);var o=a;return o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),np(a,`link`,r),t.state.loading|=4,Vm(a,n.precedence,e),t.instance=a;case`script`:return a=Rm(n.src),(i=e.querySelector(zm(a)))?(t.instance=i,Bt(i),i):(r=n,(i=vm.get(a))&&(r=T({},n),Um(r,i)),e=e.ownerDocument||e,i=e.createElement(`script`),Bt(i),np(i,`link`,r),e.head.appendChild(i),t.instance=i);case`void`:return null;default:throw Error(s(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Vm(r,n.precedence,e));return t.instance}function Vm(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Hm(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Um(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Wm=null;function Gm(e,t,n){if(Wm===null){var r=new Map,i=Wm=new Map;i.set(n,r)}else i=Wm,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Nt]||a[Et]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Km(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function qm(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Jm(e,t){return e===`img`&&t.src!=null&&t.src!==``&&t.onLoad==null&&t.loading!==`lazy`}function Ym(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Xm(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio==`number`?devicePixelRatio:1)*.25}function Zm(e,t){typeof t.decode==`function`&&(e.imgCount++,t.complete||(e.imgBytes+=Xm(t),e.suspenseyImages.push(t)),e=rh.bind(e),t.decode().then(e,e))}function Qm(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Pm(r.href),a=t.querySelector(Fm(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=nh.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Bt(a);return}a=t.ownerDocument||t,r=Im(r),(i=vm.get(i))&&Hm(r,i),a=a.createElement(`link`),Bt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),np(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=nh.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var $m=0;function eh(e,t){return e.stylesheets&&e.count===0&&ah(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&$m===0&&($m=62500*op());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>$m?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function th(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)ah(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function nh(){this.count--,th(this)}function rh(){this.imgCount--,th(this)}var ih=null;function ah(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ih=new Map,t.forEach(oh,e),ih=null,nh.call(e))}function oh(e,t){if(!(t.state.loading&4)){var n=ih.get(e);if(n)var r=n.get(null);else{n=new Map,ih.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=nh.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var sh={$$typeof:D,Provider:null,Consumer:null,_currentValue:Se,_currentValue2:Se,_threadCount:0};function ch(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ht(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ht(0),this.hiddenUpdates=ht(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function lh(e,t,n,r,i,a,o,s,c,l,u,d){return e=new ch(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=Ii(3,null,null,t),e.current=a,a.stateNode=e,t=Fa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},vo(a),e}function uh(e){return e?(e=Pi,e):Pi}function dh(e,t,n,r,i,a){i=uh(i),r.context===null?r.context=i:r.pendingContext=i,r=bo(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=xo(e,r,t),n!==null&&(Pd(n,e,t),So(n,e,t))}function fh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ph(e,t){fh(e,t),(e=e.alternate)&&fh(e,t)}function mh(e){if(e.tag===13||e.tag===31){var t=ji(e,67108864);t!==null&&Pd(t,e,67108864),ph(e,67108864)}}function hh(e){if(e.tag===13||e.tag===31){var t=jd();t=xt(t);var n=ji(e,t);n!==null&&Pd(n,e,t),ph(e,t)}}var gh=!0;function _h(e,t,n,r){var i=k.T;k.T=null;var a=A.p;try{A.p=2,yh(e,t,n,r)}finally{A.p=a,k.T=i}}function vh(e,t,n,r){var i=k.T;k.T=null;var a=A.p;try{A.p=8,yh(e,t,n,r)}finally{A.p=a,k.T=i}}function yh(e,t,n,r){if(gh){var i=bh(r);if(i===null)Kf(e,t,r,xh,n),Mh(e,r);else if(Ph(i,e,t,n,r))r.stopPropagation();else if(Mh(e,r),t&4&&-1<jh.indexOf(e)){for(;i!==null;){var a=Lt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=lt(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-nt(o);s.entanglements[1]|=c,o&=~c}Ef(a),!(W&6)&&(_d=N()+500,Df(0,!1))}}break;case 31:case 13:s=ji(a,2),s!==null&&Pd(s,a,2),zd(),ph(a,2)}if(a=bh(r),a===null&&Kf(e,t,r,xh,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Kf(e,t,r,null,n)}}function bh(e){return e=wn(e),Sh(e)}var xh=null;function Sh(e){if(xh=null,e=It(e),e!==null){var t=l(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=u(t),e!==null)return e;e=null}else if(n===31){if(e=d(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return xh=e,null}function Ch(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`fullscreenerror`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`resize`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ke()){case qe:return 2;case P:return 8;case Je:case Ye:return 32;case Xe:return 268435456;default:return 32}default:return 32}}var wh=!1,Th=null,Eh=null,Dh=null,Oh=new Map,kh=new Map,Ah=[],jh=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Mh(e,t){switch(e){case`focusin`:case`focusout`:Th=null;break;case`dragenter`:case`dragleave`:Eh=null;break;case`mouseover`:case`mouseout`:Dh=null;break;case`pointerover`:case`pointerout`:Oh.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:kh.delete(t.pointerId)}}function Nh(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Lt(t),t!==null&&mh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ph(e,t,n,r,i){switch(t){case`focusin`:return Th=Nh(Th,e,t,n,r,i),!0;case`dragenter`:return Eh=Nh(Eh,e,t,n,r,i),!0;case`mouseover`:return Dh=Nh(Dh,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Oh.set(a,Nh(Oh.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,kh.set(a,Nh(kh.get(a)||null,e,t,n,r,i)),!0}return!1}function Fh(e){var t=It(e.target);if(t!==null){var n=l(t);if(n!==null){if(t=n.tag,t===13){if(t=u(n),t!==null){e.blockedOn=t,wt(e.priority,function(){hh(n)});return}}else if(t===31){if(t=d(n),t!==null){e.blockedOn=t,wt(e.priority,function(){hh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ih(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bh(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Cn=r,n.target.dispatchEvent(r),Cn=null}else return t=Lt(n),t!==null&&mh(t),e.blockedOn=n,!1;t.shift()}return!0}function Lh(e,t,n){Ih(e)&&n.delete(t)}function Rh(){wh=!1,Th!==null&&Ih(Th)&&(Th=null),Eh!==null&&Ih(Eh)&&(Eh=null),Dh!==null&&Ih(Dh)&&(Dh=null),Oh.forEach(Lh),kh.forEach(Lh)}function zh(e,n){e.blockedOn===n&&(e.blockedOn=null,wh||(wh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Rh)))}var Bh=null;function Vh(e){Bh!==e&&(Bh=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Bh===e&&(Bh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(Sh(r||n)===null)continue;break}var a=Lt(n);a!==null&&(e.splice(t,3),t-=3,rc(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Hh(e){function t(t){return zh(t,e)}Th!==null&&zh(Th,e),Eh!==null&&zh(Eh,e),Dh!==null&&zh(Dh,e),Oh.forEach(t),kh.forEach(t);for(var n=0;n<Ah.length;n++){var r=Ah[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ah.length&&(n=Ah[0],n.blockedOn===null);)Fh(n),n.blockedOn===null&&Ah.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[Dt]||null;if(typeof a==`function`)o||Vh(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[Dt]||null)s=o.formAction;else if(Sh(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Vh(n)}}}function Uh(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Wh(e){this._internalRoot=e}Gh.prototype.render=Wh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current;dh(n,jd(),e,t,null,null)},Gh.prototype.unmount=Wh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dh(e.current,2,null,e,null,null),zd(),t[Ot]=null}};function Gh(e){this._internalRoot=e}Gh.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ct();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ah.length&&t!==0&&t<Ah[n].priority;n++);Ah.splice(n,0,e),n===0&&Fh(e)}};var Kh=r.version;if(Kh!==`19.3.1`)throw Error(s(527,Kh,`19.3.1`));A.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(s(188)):(e=Object.keys(e).join(`,`),Error(s(268,e)));return e=p(t),e=e===null?null:m(e),e=e===null?null:e.stateNode,e};var qh={bundleType:0,version:`19.3.1`,rendererPackageName:`react-dom`,currentDispatcherRef:k,reconcilerVersion:`19.3.1`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Jh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jh.isDisabled&&Jh.supportsFiber)try{$e=Jh.inject(qh),et=Jh}catch{}}e.createRoot=function(e,t){if(!c(e))throw Error(s(299));var n=!1,r=``,i=Ec,a=Dc,o=Oc;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=lh(e,1,!1,null,null,n,r,null,i,a,o,Uh),e[Ot]=t.current,Wf(e),new Wh(t)}})),c=e(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=s()})),l=i(),u=c(),d=[{id:`emp-1`,code:`YOP-073`,firstName:`Ishdeep`,lastName:`Anand`,email:`ishdeep@maildrop.cc`,department:`Business Analysis`,designation:`Admin`,status:`Confirmed`,reportingTo:`Isha Patel`,experience:`15Y 2M`,joiningDate:`13-Oct-2026`,lastLogin:`-`,employeeType:`Technical`,businessUnit:`CollabCRM Demo Account`,biometricId:`YOP-073`,activeShift:`General Shift - GS (10:00 AM - 07:00 PM)`,employeeRole:`Administrator`,companyEmail:`ishdeep@maildrop.cc`,companyMobile:`+91 9999882892`,skills:[`Data Mining`,`UI/UX Research and Testing`,`Account Management`,`Analytics`,`Project Management (Agile/Scrum)`,`JAVA Kotlin`],about:`Yest`,badges:[],seatingLocation:`-`,extensionNumber:`-`,bloodGroup:`-`,gender:`Female`,dateOfBirth:`10-May-1990`,hiddenProfile:!1,accountStatus:`Active`},{id:`emp-2`,code:`COINT-5040`,firstName:`Sanjana`,lastName:`Ghosh`,email:`zarahaddad@maildrop.cc`,department:`Game`,designation:`Executive`,status:`Intern`,reportingTo:`Megha S.`,experience:`3Y 8M`,joiningDate:`10-Oct-2025`,lastLogin:`-`,employeeType:`Technical`,businessUnit:`Product Engineering`,biometricId:`COINT-5040`,activeShift:`General Shift`,employeeRole:`Intern`,companyEmail:`zarahaddad@maildrop.cc`,companyMobile:`+1 9005049481`,skills:[`React`,`TypeScript`,`Node.js`],about:`Passionate intern developer.`,badges:[`Top Performer`],seatingLocation:`Floor 2`,extensionNumber:`102`,bloodGroup:`B+`,gender:`Female`,dateOfBirth:`15-Aug-2001`,hiddenProfile:!1,accountStatus:`Active`},{id:`emp-3`,code:`CO-5039`,firstName:`Tanya`,lastName:`Kapoor`,email:`calebnguyen@maildrop.cc`,department:`Business Analysis`,designation:`Business Analyst`,status:`Probation`,reportingTo:`Megha S.`,experience:`3Y 11M`,joiningDate:`07-Mar-2025`,lastLogin:`-`,employeeType:`Functional`,businessUnit:`Enterprise Solutions`,biometricId:`CO-5039`,activeShift:`General Shift`,employeeRole:`Analyst`,companyEmail:`calebnguyen@maildrop.cc`,companyMobile:`+1 9005048244`,skills:[`Business Analysis`,`SQL`,`Figma`],about:`Detail-oriented business analyst.`,badges:[],seatingLocation:`Floor 1`,extensionNumber:`105`,bloodGroup:`A+`,gender:`Female`,dateOfBirth:`22-Nov-1995`,hiddenProfile:!1,accountStatus:`Active`},{id:`emp-4`,code:`CO-5038`,firstName:`Megha`,lastName:`Salunkhe`,email:`naomitanaka@maildrop.cc`,department:`Collab`,designation:`Sr. Executive`,status:`Confirmed`,reportingTo:`Kunal B.`,experience:`5Y 4M`,joiningDate:`04-Aug-2024`,lastLogin:`-`,employeeType:`Technical`,businessUnit:`CollabCRM Demo Account`,biometricId:`CO-5038`,activeShift:`General Shift`,employeeRole:`Senior Developer`,companyEmail:`naomitanaka@maildrop.cc`,companyMobile:`+1 9005047007`,skills:[`Architecture`,`Node.js`,`PostgreSQL`],about:`Senior backend architect.`,badges:[`Innovator`],seatingLocation:`Floor 2`,extensionNumber:`110`,bloodGroup:`O+`,gender:`Female`,dateOfBirth:`12-Dec-1992`,hiddenProfile:!1,accountStatus:`Active`},{id:`emp-5`,code:`CO-5037`,firstName:`Kunal`,lastName:`Barve`,email:`jordanellis@maildrop.cc`,department:`Web`,designation:`Team leader`,status:`Confirmed`,reportingTo:`Ananya S.`,experience:`7Y 10M`,joiningDate:`01-Jan-2023`,lastLogin:`-`,employeeType:`Technical`,businessUnit:`Product Engineering`,biometricId:`CO-5037`,activeShift:`General Shift`,employeeRole:`Team Lead`,companyEmail:`jordanellis@maildrop.cc`,companyMobile:`+1 9005045770`,skills:[`Leadership`,`System Architecture`,`React`],about:`Engineering lead.`,badges:[`Leadership Award`],seatingLocation:`Floor 2`,extensionNumber:`112`,bloodGroup:`AB+`,gender:`Male`,dateOfBirth:`05-Jul-1988`,hiddenProfile:!1,accountStatus:`Active`},{id:`emp-6`,code:`CO-5036`,firstName:`Ananya`,lastName:`Sridhar`,email:`sashapetrov@maildrop.cc`,department:`Data analytics`,designation:`Manager`,status:`Confirmed`,reportingTo:`Vikram A.`,experience:`10Y 2M`,joiningDate:`25-Jun-2022`,lastLogin:`18-Sep-2026, 12:12 PM`,employeeType:`Management`,businessUnit:`Cloud & DevOps`,biometricId:`CO-5036`,activeShift:`General Shift`,employeeRole:`Engineering Manager`,companyEmail:`sashapetrov@maildrop.cc`,companyMobile:`+1 9005044533`,skills:[`Engineering Management`,`Strategy`],about:`Engineering director.`,badges:[`Excellence`],seatingLocation:`Floor 3`,extensionNumber:`115`,bloodGroup:`A-`,gender:`Female`,dateOfBirth:`18-Jan-1985`,hiddenProfile:!1,accountStatus:`Active`},{id:`emp-7`,code:`CO-5035`,firstName:`Vikram`,lastName:`Anand`,email:`vikramanand@maildrop.cc`,department:`Collab`,designation:`AVP`,status:`Confirmed`,reportingTo:`Priya R.`,experience:`11Y 7M`,joiningDate:`22-Nov-2021`,lastLogin:`18-Sep-2026, 12:13 PM`,employeeType:`Management`,businessUnit:`Enterprise Solutions`,biometricId:`CO-5035`,activeShift:`General Shift`,employeeRole:`VP Engineering`,companyEmail:`vikramanand@maildrop.cc`,companyMobile:`+1 9005043286`,skills:[`Executive Leadership`,`Cloud Infrastructure`],about:`VP of Technology.`,badges:[`Pillar Award`],seatingLocation:`Floor 3`,extensionNumber:`120`,bloodGroup:`O-`,gender:`Male`,dateOfBirth:`30-Oct-1982`,hiddenProfile:!1,accountStatus:`Active`},{id:`emp-8`,code:`CO-5034`,firstName:`Rahul`,lastName:`Khanna`,email:`elliotsharpe@maildrop.cc`,department:`Game`,designation:`Executive`,status:`Confirmed`,reportingTo:`Varun A.`,experience:`4Y`,joiningDate:`19-Apr-2025`,lastLogin:`-`,employeeType:`Finance`,businessUnit:`Cloud & DevOps`,biometricId:`CO-5034`,activeShift:`General Shift`,employeeRole:`Accountant`,companyEmail:`elliotsharpe@maildrop.cc`,companyMobile:`+1 9005042059`,skills:[`Auditing`,`Taxation`,`GAAP`],about:`Senior CPA auditor.`,badges:[],seatingLocation:`Floor 1`,extensionNumber:`130`,bloodGroup:`B-`,gender:`Male`,dateOfBirth:`14-Feb-1994`,hiddenProfile:!1,accountStatus:`Active`},{id:`emp-9`,code:`CO-5033`,firstName:`Deepa`,lastName:`Ramaswamy`,email:`biancamoreau@maildrop.cc`,department:`Web`,designation:`Executive`,status:`Probation`,reportingTo:`Varun A.`,experience:`3Y 5M`,joiningDate:`16-Sep-2025`,lastLogin:`-`,employeeType:`Finance`,businessUnit:`Client Success`,biometricId:`CO-5033`,activeShift:`General Shift`,employeeRole:`Finance Analyst`,companyEmail:`biancamoreau@maildrop.cc`,companyMobile:`+1 9005040822`,skills:[`Financial Analysis`,`Excel`,`QuickBooks`],about:`Finance professional.`,badges:[],seatingLocation:`Floor 1`,extensionNumber:`131`,bloodGroup:`AB-`,gender:`Female`,dateOfBirth:`03-Sep-1996`,hiddenProfile:!1,accountStatus:`Active`},{id:`emp-10`,code:`CO-5032`,firstName:`Varun`,lastName:`Acharya`,email:`trevorlindqvist@maildrop.cc`,department:`Data analytics`,designation:`Sr. Executive`,status:`Confirmed`,reportingTo:`Swati M.`,experience:`5Y 10M`,joiningDate:`13-Feb-2024`,lastLogin:`-`,employeeType:`Finance`,businessUnit:`Client Success`,biometricId:`CO-5032`,activeShift:`General Shift`,employeeRole:`Senior Finance Lead`,companyEmail:`trevorlindqvist@maildrop.cc`,companyMobile:`+1 9005039565`,skills:[`Corporate Finance`,`Tax Law`],about:`Finance lead.`,badges:[`Top Financer`],seatingLocation:`Floor 1`,extensionNumber:`135`,bloodGroup:`O+`,gender:`Male`,dateOfBirth:`20-May-1991`,hiddenProfile:!1,accountStatus:`Active`}],f=[{id:`prog-1`,name:`CollabCRM Recruitment & Client Portal Workflows`,version:`v1`,department:`Business Analysis`,category:`Recruitment & HR Operations`,difficultyLevel:`Intermediate`,expectedDurationHours:18,passingScore:80,department:`Business Analysis`,maxAttempts:3,maxEnrollmentLimit:50,defaultDuePeriod:14,defaultAssignmentType:`Mandatory`,certificateExpiryMonths:24,reminderFrequencyDays:7,mandatoryResourceCompletion:true,reviewerApprovalRequired:true,mandatoryEvidenceUpload:true,certificateGeneration:true,assessment:{enabled:true,title:`Final Training Assessment`,description:`Complete the following questions to evaluate your understanding of this training.`,passingScore:80,maxAttempts:3,shuffleQuestions:false,showResultAfterSubmission:true,questions:[{id:`q-1`,number:1,text:`What does CRM stand for in CollabCRM?`,type:`short_text`,marks:2,mandatory:true,acceptedAnswers:[`Customer Relationship Management`,`customer relationship management`]},{id:`q-2`,number:2,text:`Which protocol is primarily used for real-time notifications in CollabCRM?`,type:`single_choice`,marks:2,mandatory:true,options:[{id:`opt-1`,text:`WebSocket`},{id:`opt-2`,text:`FTP`},{id:`opt-3`,text:`SMTP`},{id:`opt-4`,text:`Telnet`}],correctAnswer:`opt-1`},{id:`q-3`,number:3,text:`Which of the following are core platforms used in this curriculum? (Select all that apply)`,type:`multiple_choice`,marks:2,mandatory:true,options:[{id:`mopt-1`,text:`Unreal Engine`},{id:`mopt-2`,text:`Unity`},{id:`mopt-3`,text:`Blender`},{id:`mopt-4`,text:`Godot`}],correctAnswers:[`mopt-1`,`mopt-2`,`mopt-4`]},{id:`q-4`,number:4,text:`Select the primary department responsible for candidate onboarding workflows:`,type:`dropdown`,marks:2,mandatory:true,options:[{id:`dopt-1`,text:`Recruitment & HR Operations`},{id:`dopt-2`,text:`Hardware Engineering`},{id:`dopt-3`,text:`Facilities Management`}],correctAnswer:`dopt-1`},{id:`q-5`,number:5,text:`Employees must complete all mandatory learning resources before they can access the final assessment.`,type:`true_false`,marks:1,mandatory:true,correctAnswer:`True`},{id:`q-6`,number:6,text:`Summarize the architectural flow of token-based authentication and explain how JWT tokens are validated.`,type:`long_text`,marks:1,mandatory:false,expectedAnswer:`JWT tokens validated via Gateway middleware, checking signature, expiry, and RBAC claims.`,requiresManualReview:true}]},learningObjectives:`Master end-to-end recruitment pipelines, candidate vetting, and client portal access control.`,completionRequirements:`Complete 100% mandatory modules + achieve >= 80% on assessment`,maxEnrollment:50,defaultDueDays:14,maxAttempts:3,certificateExpiryMonths:24,reminderFrequencyDays:7,defaultAssignmentType:`Mandatory`,reviewerApprovalRequired:!0,mandatoryEvidenceUpload:!0,certificateGeneration:!0,status:`Published`,enrolledCount:3,resources:[{id:`res-1`,type:`Video / YouTube`,title:`Module 1: Architecture Video Lecture`,url:`https://youtube.com/watch?v=sample-video`,mandatory:!0},{id:`res-2`,type:`PDF Document`,title:`Module 2: Standard Operating Procedure Handbook`,url:`https://docs.collabcrm.internal/sample-handbook.pdf`,mandatory:!0}]},{id:`prog-2`,name:`Cloud Infrastructure & High-Performance Node Services`,version:`v1`,department:`Web`,category:`Engineering`,difficultyLevel:`Expert`,expectedDurationHours:16,passingScore:85,learningObjectives:`Advanced cluster management, microservices scaling, and Node.js performance optimization.`,completionRequirements:`Complete 100% mandatory modules + pass coding exam`,maxEnrollment:30,defaultDueDays:21,maxAttempts:2,certificateExpiryMonths:12,reminderFrequencyDays:5,defaultAssignmentType:`Mandatory`,reviewerApprovalRequired:!0,mandatoryEvidenceUpload:!0,certificateGeneration:!0,status:`Published`,enrolledCount:2,resources:[{id:`res-3`,type:`Video / YouTube`,title:`Kubernetes & Node.js Cluster Scaling`,url:`https://youtube.com/watch?v=k8s-node`,mandatory:!0}]},{id:`prog-3`,name:`Information Security & Global Data Privacy (GDPR/ISO)`,version:`v1`,department:`Business Analysis`,category:`Governance & Compliance`,difficultyLevel:`Beginner`,expectedDurationHours:6,passingScore:80,learningObjectives:`Understand GDPR mandates, ISO 27001 data protection protocols, and enterprise incident reporting.`,completionRequirements:`Complete all video chapters and final compliance quiz`,maxEnrollment:100,defaultDueDays:10,maxAttempts:3,certificateExpiryMonths:12,reminderFrequencyDays:3,defaultAssignmentType:`Mandatory`,reviewerApprovalRequired:!1,mandatoryEvidenceUpload:!1,certificateGeneration:!0,status:`Published`,enrolledCount:3,resources:[{id:`res-4`,type:`PDF Document`,title:`GDPR & ISO Compliance Handbook`,url:`https://docs.collabcrm.internal/gdpr.pdf`,mandatory:!0}]},{id:`prog-4`,name:`Enterprise CRM Communication & Client Delight`,version:`v1`,department:`Collab`,category:`Sales & BD`,difficultyLevel:`Intermediate`,expectedDurationHours:12,passingScore:75,learningObjectives:`Client retention strategies, escalation management, and high-touch communication workflows.`,completionRequirements:`Complete 100% interactive modules`,maxEnrollment:40,defaultDueDays:14,maxAttempts:3,certificateExpiryMonths:24,reminderFrequencyDays:7,defaultAssignmentType:`Mandatory`,reviewerApprovalRequired:!0,mandatoryEvidenceUpload:!1,certificateGeneration:!0,status:`Published`,enrolledCount:1,resources:[{id:`res-5`,type:`Video / YouTube`,title:`Client Delight Masterclass`,url:`https://youtube.com/watch?v=delight`,mandatory:!0}]},{id:`prog-5`,name:`NextJS 15 & Modern UI State Architecture`,version:`v1`,department:`Web`,category:`Engineering`,difficultyLevel:`Expert`,expectedDurationHours:20,passingScore:85,learningObjectives:`Server components, app router, streaming, and state management best practices.`,completionRequirements:`Submit capstone project repo`,maxEnrollment:25,defaultDueDays:30,maxAttempts:2,certificateExpiryMonths:12,reminderFrequencyDays:7,defaultAssignmentType:`Optional`,reviewerApprovalRequired:!0,mandatoryEvidenceUpload:!0,certificateGeneration:!0,status:`Draft`,isActive:false,enrolledCount:0,resources:[]},{id:`prog-6`,name:`Legacy ATS Database Migration Protocols`,version:`v1`,department:`Game`,category:`Operations`,difficultyLevel:`Intermediate`,expectedDurationHours:10,passingScore:80,learningObjectives:`Safe ETL processes for applicant tracking systems.`,completionRequirements:`Pass audit exam`,maxEnrollment:20,defaultDueDays:14,maxAttempts:3,certificateExpiryMonths:24,reminderFrequencyDays:7,defaultAssignmentType:`Mandatory`,reviewerApprovalRequired:!1,mandatoryEvidenceUpload:!1,certificateGeneration:!0,status:`Draft`,isActive:false,enrolledCount:0,resources:[]},{id:`prog-7`,name:`API Security & Oauth2 Best Practices`,version:`v1`,department:`Web`,category:`Security`,difficultyLevel:`Intermediate`,expectedDurationHours:4,passingScore:85,learningObjectives:`Token management, CORS policies, OAuth2 scopes and PKCE flow implementation.`,completionRequirements:`Pass security lab assessment`,maxEnrollment:50,defaultDueDays:7,maxAttempts:3,certificateExpiryMonths:12,reminderFrequencyDays:3,defaultAssignmentType:`Mandatory`,reviewerApprovalRequired:!0,mandatoryEvidenceUpload:!0,certificateGeneration:!0,status:`Published`,enrolledCount:25,resources:[{id:`res-7-1`,type:`Video / YouTube`,title:`Module 1: OAuth2 Grant Types & PKCE Flow`,url:`https://youtube.com/watch?v=oauth2-pkce`},{id:`res-7-2`,type:`PDF Document`,title:`Module 2: API Security & JWT Validation Playbook`,url:`https://docs.collabcrm.internal/api-security-playbook.pdf`}]},{id:`prog-8`,name:`Security Awareness & GDPR Compliance 2026`,version:`v1`,department:`Data analytics`,category:`Compliance`,difficultyLevel:`Beginner`,expectedDurationHours:2,passingScore:80,learningObjectives:`Annual mandatory security refresher for all enterprise employees.`,completionRequirements:`Complete video and score >= 80%`,maxEnrollment:200,defaultDueDays:7,maxAttempts:5,certificateExpiryMonths:12,reminderFrequencyDays:2,defaultAssignmentType:`Mandatory`,reviewerApprovalRequired:!1,mandatoryEvidenceUpload:!1,certificateGeneration:!0,status:`Published`,enrolledCount:1,resources:[{id:`res-8-1`,type:`Video / YouTube`,title:`Module 1: Enterprise Security Awareness & Phishing Defense`,url:`https://youtube.com/watch?v=gdpr-security-2026`},{id:`res-8-2`,type:`PDF Document`,title:`Module 2: GDPR Data Handling & Breach Reporting Handbook`,url:`https://docs.collabcrm.internal/gdpr-compliance-2026.pdf`}]},{id:`prog-9`,name:`CollabCRM Platform Architecture Deep Dive`,version:`v1`,department:`Web`,category:`Architecture`,difficultyLevel:`Expert`,expectedDurationHours:6,passingScore:90,learningObjectives:`System topology, multi-tenant databases, event-driven message buses.`,completionRequirements:`Architecture review board approval`,maxEnrollment:15,defaultDueDays:14,maxAttempts:2,certificateExpiryMonths:24,reminderFrequencyDays:7,defaultAssignmentType:`Mandatory`,reviewerApprovalRequired:!0,mandatoryEvidenceUpload:!0,certificateGeneration:!0,status:`Published`,enrolledCount:1,resources:[{id:`res-9-1`,type:`Video / YouTube`,title:`Module 1: Multi-Tenant System Topology & Event Bus`,url:`https://youtube.com/watch?v=collabcrm-arch`},{id:`res-9-2`,type:`PDF Document`,title:`Module 2: Architecture Reference Blueprint`,url:`https://docs.collabcrm.internal/architecture-deep-dive.pdf`}]},{id:`prog-10`,name:`Effective Cross-Functional Stakeholder Communication`,version:`v1`,department:`Business Analysis`,category:`Soft Skills`,difficultyLevel:`Beginner`,expectedDurationHours:3,passingScore:70,learningObjectives:`Managing expectations across engineering, product, and sales teams.`,completionRequirements:`Case study submission`,maxEnrollment:60,defaultDueDays:21,maxAttempts:3,certificateExpiryMonths:36,reminderFrequencyDays:10,defaultAssignmentType:`Optional`,reviewerApprovalRequired:!1,mandatoryEvidenceUpload:!1,certificateGeneration:!0,status:`Published`,enrolledCount:2,resources:[{id:`res-10-1`,type:`Video / YouTube`,title:`Module 1: Executive Alignment & Stakeholder Mapping`,url:`https://youtube.com/watch?v=stakeholder-comm`},{id:`res-10-2`,type:`PDF Document`,title:`Module 2: Cross-Functional Communication Toolkit`,url:`https://docs.collabcrm.internal/stakeholder-toolkit.pdf`}]},{id:`prog-11`,name:`Q4 2025 Workplace Safety & POSH Re-Certification`,version:`v1`,department:`Data analytics`,category:`Compliance`,difficultyLevel:`Beginner`,expectedDurationHours:2,passingScore:80,learningObjectives:`Prevention of Sexual Harassment and workplace safety standards.`,completionRequirements:`Quiz completion`,maxEnrollment:150,defaultDueDays:10,maxAttempts:3,certificateExpiryMonths:12,reminderFrequencyDays:3,defaultAssignmentType:`Mandatory`,reviewerApprovalRequired:!1,mandatoryEvidenceUpload:!1,certificateGeneration:!0,status:`Published`,enrolledCount:1,resources:[{id:`res-11-1`,type:`Video / YouTube`,title:`Module 1: POSH Act Guidelines & Workplace Standards`,url:`https://youtube.com/watch?v=posh-compliance`},{id:`res-11-2`,type:`PDF Document`,title:`Module 2: Workplace Safety & Code of Conduct Handbook`,url:`https://docs.collabcrm.internal/posh-handbook.pdf`}]},{id:`prog-12`,name:`Incident Response & SLA Management`,version:`v1`,department:`Game`,category:`Support`,difficultyLevel:`Intermediate`,expectedDurationHours:3,passingScore:85,learningObjectives:`Severity grading, paging duty protocols, and SLA clock management.`,completionRequirements:`Simulation test >= 85%`,maxEnrollment:40,defaultDueDays:10,maxAttempts:3,certificateExpiryMonths:12,reminderFrequencyDays:5,defaultAssignmentType:`Mandatory`,reviewerApprovalRequired:!0,mandatoryEvidenceUpload:!0,certificateGeneration:!0,status:`Published`,enrolledCount:2,resources:[{id:`res-12-1`,type:`Video / YouTube`,title:`Module 1: P1/P2 Triage & SLA Escalation Matrix`,url:`https://youtube.com/watch?v=incident-sla`},{id:`res-12-2`,type:`PDF Document`,title:`Module 2: Incident Response Runbook`,url:`https://docs.collabcrm.internal/incident-runbook.pdf`}]}],p=[{id:`asg-1`,employeeId:`emp-1`,employeeName:`Ishdeep Anand`,programmeId:`prog-1`,programmeName:`Enterprise Security & Data Protection Compliance`,assignedBy:`Isha Patel`,assignedDate:`05-Jan-2026`,completionDate:`20-Jan-2026`,score:94,status:`Completed`,certificateId:`TRN-2026-0001`},{id:`asg-2`,employeeId:`emp-1`,employeeName:`Ishdeep Anand`,programmeId:`prog-2`,programmeName:`Executive Leadership & Strategic Governance`,assignedBy:`Isha Patel`,assignedDate:`10-Feb-2026`,completionDate:`25-Feb-2026`,score:98,status:`Completed`,certificateId:`TRN-2026-0004`},{id:`asg-3`,employeeId:`emp-1`,employeeName:`Ishdeep Anand`,programmeId:`prog-3`,programmeName:`CollabCRM Recruitment & Client Portal Workflows`,assignedBy:`Isha Patel`,assignedDate:`01-Mar-2026`,status:`In Progress`},{id:`asg-4`,employeeId:`emp-3`,employeeName:`Tanya Kapoor`,programmeId:`prog-12`,programmeName:`Incident Response & SLA Management`,assignedBy:`Isha Patel`,assignedDate:`15-Feb-2026`,completionDate:`02-Mar-2026`,score:85,status:`Under Review`,evidenceUrl:`https://docs.collabcrm.internal/evidence-tanya.pdf`},{id:`asg-5`,employeeId:`emp-3`,employeeName:`Tanya Kapoor`,programmeId:`prog-3`,programmeName:`Security Awareness & GDPR Compliance 2026`,assignedBy:`Isha Patel`,assignedDate:`18-Feb-2026`,completionDate:`28-Feb-2026`,score:100,status:`Under Review`,evidenceUrl:`https://docs.collabcrm.internal/evidence-gdpr-tanya.pdf`},{id:`asg-6`,employeeId:`Rihan R.`,employeeName:`Rihan R.`,programmeId:`prog-3`,programmeName:`Information Security & Global Data Privacy (GDPR/ISO)`,assignedBy:`Megha S.`,assignedDate:`10-Feb-2026`,completionDate:`01-Mar-2026`,score:92,status:`Under Review`,evidenceUrl:`https://docs.collabcrm.internal/evidence-rihan.pdf`},{id:`asg-7`,employeeId:`Ananya Roy`,employeeName:`Ananya Roy`,programmeId:`prog-3`,programmeName:`Information Security & Global Data Privacy (GDPR/ISO)`,assignedBy:`Megha S.`,assignedDate:`12-Feb-2026`,completionDate:`02-Mar-2026`,score:88,status:`Under Review`,evidenceUrl:`https://docs.collabcrm.internal/evidence-ananya.pdf`}],m=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),h=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),g=e=>{let t=h(e);return t.charAt(0).toUpperCase()+t.slice(1)},_=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),v=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0},y={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},b=(0,l.forwardRef)(({color:e=`currentColor`,size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>(0,l.createElement)(`svg`,{ref:c,...y,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:_(`lucide`,i),...!a&&!v(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,l.createElement)(e,t)),...Array.isArray(a)?a:[a]])),x=(e,t)=>{let n=(0,l.forwardRef)(({className:n,...r},i)=>(0,l.createElement)(b,{ref:i,iconNode:t,className:_(`lucide-${m(g(e))}`,`lucide-${e}`,n),...r}));return n.displayName=g(e),n},S=x(`arrow-left`,[[`path`,{d:`m12 19-7-7 7-7`,key:`1l729n`}],[`path`,{d:`M19 12H5`,key:`x3x0zl`}]]),ee=x(`arrow-right`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),C=x(`award`,[[`path`,{d:`m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526`,key:`1yiouv`}],[`circle`,{cx:`12`,cy:`8`,r:`6`,key:`1vp47v`}]]),w=x(`bell`,[[`path`,{d:`M10.268 21a2 2 0 0 0 3.464 0`,key:`vwvbt9`}],[`path`,{d:`M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326`,key:`11g9vi`}]]),te=x(`book-open`,[[`path`,{d:`M12 7v14`,key:`1akyts`}],[`path`,{d:`M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z`,key:`ruj8y`}]]),T=x(`chart-column`,[[`path`,{d:`M3 3v16a2 2 0 0 0 2 2h16`,key:`c24i48`}],[`path`,{d:`M18 17V9`,key:`2bz60n`}],[`path`,{d:`M13 17V5`,key:`1frdt8`}],[`path`,{d:`M8 17v-3`,key:`17ska0`}]]),ne=x(`check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),re=x(`chevron-down`,[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]),ie=x(`chevron-left`,[[`path`,{d:`m15 18-6-6 6-6`,key:`1wnfg3`}]]),E=x(`chevron-right`,[[`path`,{d:`m9 18 6-6-6-6`,key:`mthhwq`}]]),ae=x(`chevron-up`,[[`path`,{d:`m18 15-6-6-6 6`,key:`153udz`}]]),oe=x(`chevrons-left`,[[`path`,{d:`m11 17-5-5 5-5`,key:`13zhaf`}],[`path`,{d:`m18 17-5-5 5-5`,key:`h8a8et`}]]),se=x(`circle-check-big`,[[`path`,{d:`M21.801 10A10 10 0 1 1 17 3.335`,key:`yps3ct`}],[`path`,{d:`m9 11 3 3L22 4`,key:`1pflzl`}]]),D=x(`circle-check`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),ce=x(`circle-x`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m15 9-6 6`,key:`1uzhvr`}],[`path`,{d:`m9 9 6 6`,key:`z0biqf`}]]),le=x(`clock`,[[`path`,{d:`M12 6v6l4 2`,key:`mmk7yg`}],[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]),ue=x(`copy`,[[`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`,key:`17jyea`}],[`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,key:`zix9uf`}]]),de=x(`download`,[[`path`,{d:`M12 15V3`,key:`m9g1x1`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`path`,{d:`m7 10 5 5 5-5`,key:`brsn70`}]]),fe=x(`external-link`,[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`M10 14 21 3`,key:`gplh6r`}],[`path`,{d:`M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`,key:`a6xqqp`}]]),pe=x(`eye`,[[`path`,{d:`M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`,key:`1nclc0`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),me=x(`file-text`,[[`path`,{d:`M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z`,key:`1rqfz7`}],[`path`,{d:`M14 2v4a2 2 0 0 0 2 2h4`,key:`tnqrlb`}],[`path`,{d:`M10 9H8`,key:`b1mrlr`}],[`path`,{d:`M16 13H8`,key:`t4e002`}],[`path`,{d:`M16 17H8`,key:`z1uh3a`}]]),he=x(`funnel`,[[`path`,{d:`M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z`,key:`sc7q7i`}]]),ge=x(`gift`,[[`rect`,{x:`3`,y:`8`,width:`18`,height:`4`,rx:`1`,key:`bkv52`}],[`path`,{d:`M12 8v13`,key:`1c76mn`}],[`path`,{d:`M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7`,key:`6wjy6b`}],[`path`,{d:`M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5`,key:`1ihvrl`}]]),_e=x(`graduation-cap`,[[`path`,{d:`M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z`,key:`j76jl0`}],[`path`,{d:`M22 10v6`,key:`1lu8f3`}],[`path`,{d:`M6 12.5V16a6 3 0 0 0 12 0v-3.5`,key:`1r8lef`}]]),ve=x(`globe`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20`,key:`13o1zl`}],[`path`,{d:`M2 12h20`,key:`9i4pu4`}]]),ye=x(`grid-3x3`,[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,key:`afitv7`}],[`path`,{d:`M3 9h18`,key:`1pudct`}],[`path`,{d:`M3 15h18`,key:`5xshup`}],[`path`,{d:`M9 3v18`,key:`fh3hqa`}],[`path`,{d:`M15 3v18`,key:`14nvp0`}]]),be=x(`grip-vertical`,[[`circle`,{cx:`9`,cy:`12`,r:`1`,key:`1vctgf`}],[`circle`,{cx:`9`,cy:`5`,r:`1`,key:`hp0tcf`}],[`circle`,{cx:`9`,cy:`19`,r:`1`,key:`fkjjf6`}],[`circle`,{cx:`15`,cy:`12`,r:`1`,key:`1tmaij`}],[`circle`,{cx:`15`,cy:`5`,r:`1`,key:`19l28e`}],[`circle`,{cx:`15`,cy:`19`,r:`1`,key:`f4zoj3`}]]),xe=x(`house`,[[`path`,{d:`M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8`,key:`5wwlr5`}],[`path`,{d:`M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`,key:`r6nss1`}]]),O=x(`info`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 16v-4`,key:`1dtifu`}],[`path`,{d:`M12 8h.01`,key:`e9boi3`}]]),k=x(`layout-dashboard`,[[`rect`,{width:`7`,height:`9`,x:`3`,y:`3`,rx:`1`,key:`10lvy0`}],[`rect`,{width:`7`,height:`5`,x:`14`,y:`3`,rx:`1`,key:`16une8`}],[`rect`,{width:`7`,height:`9`,x:`14`,y:`12`,rx:`1`,key:`1hutg5`}],[`rect`,{width:`7`,height:`5`,x:`3`,y:`16`,rx:`1`,key:`ldoo1y`}]]),A=x(`log-out`,[[`path`,{d:`m16 17 5-5-5-5`,key:`1bji2h`}],[`path`,{d:`M21 12H9`,key:`dn1m92`}],[`path`,{d:`M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4`,key:`1uf3rs`}]]),Se=x(`mail`,[[`path`,{d:`m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7`,key:`132q7q`}],[`rect`,{x:`2`,y:`4`,width:`20`,height:`16`,rx:`2`,key:`izxlao`}]]),Ce=x(`message-square`,[[`path`,{d:`M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z`,key:`18887p`}]]),we=x(`pen-line`,[[`path`,{d:`M13 21h8`,key:`1jsn5i`}],[`path`,{d:`M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z`,key:`1a8usu`}]]),Te=x(`play`,[[`path`,{d:`M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z`,key:`10ikf1`}]]),j=x(`plus`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`M12 5v14`,key:`s699le`}]]),M=x(`printer`,[[`path`,{d:`M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2`,key:`143wyd`}],[`path`,{d:`M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6`,key:`1itne7`}],[`rect`,{x:`6`,y:`14`,width:`12`,height:`8`,rx:`1`,key:`1ue0tg`}]]),Ee=x(`rotate-ccw`,[[`path`,{d:`M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`,key:`1357e3`}],[`path`,{d:`M3 3v5h5`,key:`1xhq8a`}]]),De=x(`rotate-cw`,[[`path`,{d:`M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8`,key:`1p45f6`}],[`path`,{d:`M21 3v5h-5`,key:`1q7to0`}]]),Oe=x(`save`,[[`path`,{d:`M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z`,key:`1c8476`}],[`path`,{d:`M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7`,key:`1ydtos`}],[`path`,{d:`M7 3v4a1 1 0 0 0 1 1h7`,key:`t51u73`}]]),ke=x(`search`,[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]),Ae=x(`send`,[[`path`,{d:`M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z`,key:`1ffxy3`}],[`path`,{d:`m21.854 2.147-10.94 10.939`,key:`12cjpa`}]]),je=x(`settings`,[[`path`,{d:`M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915`,key:`1i5ecw`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),Me=x(`shield-check`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),Ne=x(`sliders-horizontal`,[[`path`,{d:`M10 5H3`,key:`1qgfaw`}],[`path`,{d:`M12 19H3`,key:`yhmn1j`}],[`path`,{d:`M14 3v4`,key:`1sua03`}],[`path`,{d:`M16 17v4`,key:`1q0r14`}],[`path`,{d:`M21 12h-9`,key:`1o4lsq`}],[`path`,{d:`M21 19h-5`,key:`1rlt1p`}],[`path`,{d:`M21 5h-7`,key:`1oszz2`}],[`path`,{d:`M8 10v4`,key:`tgpxqk`}],[`path`,{d:`M8 12H3`,key:`a7s4jb`}]]),Pe=x(`square-check-big`,[[`path`,{d:`M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344`,key:`2acyp4`}],[`path`,{d:`m9 11 3 3L22 4`,key:`1pflzl`}]]),Fe=x(`square-pen`,[[`path`,{d:`M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7`,key:`1m0v6g`}],[`path`,{d:`M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z`,key:`ohrbg2`}]]),Ie=x(`star`,[[`path`,{d:`M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z`,key:`r04s7s`}]]),Le=x(`tablet`,[[`rect`,{width:`16`,height:`20`,x:`4`,y:`2`,rx:`2`,ry:`2`,key:`76otgf`}],[`line`,{x1:`12`,x2:`12.01`,y1:`18`,y2:`18`,key:`1dp563`}]]),Re=x(`thumbs-up`,[[`path`,{d:`M7 10v12`,key:`1qc93n`}],[`path`,{d:`M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z`,key:`emmmcr`}]]),ze=x(`trash-2`,[[`path`,{d:`M10 11v6`,key:`nco0om`}],[`path`,{d:`M14 11v6`,key:`outv1u`}],[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`,key:`miytrc`}],[`path`,{d:`M3 6h18`,key:`d0wm0j`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`,key:`e791ji`}]]),Be=x(`trending-up`,[[`path`,{d:`M16 7h6v6`,key:`box55l`}],[`path`,{d:`m22 7-8.5 8.5-5-5L2 17`,key:`1t1m79`}]]),Ve=x(`triangle-alert`,[[`path`,{d:`m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`,key:`wmoenq`}],[`path`,{d:`M12 9v4`,key:`juzpu7`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}]]),He=x(`user-plus`,[[`path`,{d:`M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`,key:`1yyitq`}],[`circle`,{cx:`9`,cy:`7`,r:`4`,key:`nufk8`}],[`line`,{x1:`19`,x2:`19`,y1:`8`,y2:`14`,key:`1bvyxn`}],[`line`,{x1:`22`,x2:`16`,y1:`11`,y2:`11`,key:`1shjgl`}]]),Ue=x(`user`,[[`path`,{d:`M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2`,key:`975kel`}],[`circle`,{cx:`12`,cy:`7`,r:`4`,key:`17ys0d`}]]),We=x(`users`,[[`path`,{d:`M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`,key:`1yyitq`}],[`path`,{d:`M16 3.128a4 4 0 0 1 0 7.744`,key:`16gr8j`}],[`path`,{d:`M22 21v-2a4 4 0 0 0-3-3.87`,key:`kshegd`}],[`circle`,{cx:`9`,cy:`7`,r:`4`,key:`nufk8`}]]),Ge=x(`video`,[[`path`,{d:`m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5`,key:`ftymec`}],[`rect`,{x:`2`,y:`6`,width:`14`,height:`12`,rx:`2`,key:`158x01`}]]),N=x(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),Ke=x(`zap`,[[`path`,{d:`M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z`,key:`1xq2db`}]]),qe=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),P=e(((e,t)=>{t.exports=qe()}))();const SYS_MONTHS=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
function fmtSysDate(val){if(!val)return"-";if(val instanceof Date){let dd=String(val.getDate()).padStart(2,"0");return`${dd}-${SYS_MONTHS[val.getMonth()]}-${val.getFullYear()}`}if(typeof val!=="string")return String(val);let s=val.trim();if(!s||s==="-")return s||"-";let dmyTime=s.match(/^(\d{1,2})[- ]([A-Za-z]{3,})[- ](\d{4}),(.*)$/);if(dmyTime){let m3=dmyTime[2].slice(0,3);let mt=m3.charAt(0).toUpperCase()+m3.slice(1).toLowerCase();return`${String(dmyTime[1]).padStart(2,"0")}-${mt}-${dmyTime[3]},${dmyTime[4]}`}let dmy=s.match(/^(\d{1,2})[- ]([A-Za-z]{3,})[- ](\d{4})$/);if(dmy){let m3=dmy[2].slice(0,3);let mt=m3.charAt(0).toUpperCase()+m3.slice(1).toLowerCase();return`${String(dmy[1]).padStart(2,"0")}-${mt}-${dmy[3]}`}let ymd=s.match(/^(\d{4})-(\d{2})-(\d{2})(?:[T\s].*)?$/);if(ymd){let mi=Number(ymd[2])-1;if(mi>=0&&mi<12)return`${ymd[3]}-${SYS_MONTHS[mi]}-${ymd[1]}`}return s}
function parseDurationHM(val){if(val&&typeof val==="object"){if(val.durationHoursPart!==void 0||val.durationMinutesPart!==void 0)return{h:Math.max(0,parseInt(val.durationHoursPart,10)||0),m:Math.max(0,parseInt(val.durationMinutesPart,10)||0)};val=val.expectedDuration||val.duration||val.hours||val.expectedDurationHours}if(val===null||val===void 0||val==="")return{h:0,m:0};if(typeof val==="number"&&isFinite(val)){let tm=Math.max(0,Math.round(val*60));return{h:Math.floor(tm/60),m:tm%60}}let str=String(val).trim();let hm=str.match(/^(\d+)\s*h(?:rs?|ours?)?(?:\s*(\d+)\s*m(?:ins?|inutes?)?)?$/i);if(hm)return{h:Number(hm[1])||0,m:Number(hm[2])||0};let mo=str.match(/^(\d+)\s*m(?:ins?|inutes?)?$/i);if(mo)return{h:0,m:Number(mo[1])||0};let n=parseFloat(str);if(!isNaN(n)){let tm=Math.max(0,Math.round(n*60));return{h:Math.floor(tm/60),m:tm%60}}return{h:0,m:0}}
function fmtDurationHM(val){let{h,m}=parseDurationHM(val);if(!h&&!m)return"0h 0mins";return`${h}h ${m}mins`}
function normCatKey(s){return String(s||"").toLowerCase().replace(/&/g,"and").replace(/[^a-z0-9]/g,"").trim()}
const CAT_ALIAS_MAP={engineeringandarchitecture:["engineering","architecture","engineeringandtecharchitecture","engineeringandarchitecture"],salesandbusinessdevelopment:["salesandbd","salesandbusinessdevelopment"],recruitmentandhroperations:["recruitmentandhr","recruitmentandhroperations"],securityprivacyandcompliance:["security","compliance","governanceandcompliance","securityprivacyandcompliance"],leadershipandmanagement:["softskills","leadership","leadershipandmanagement"],devopsandcloudoperations:["operations","cloudanddevops","devopsandcloudoperations"],customersuccessandsupport:["support","customersuccessandsupport"]};
function doesProgUseCategory(prog,catName){if(!prog||!catName)return!1;let pKey=normCatKey(typeof prog==="string"?prog:(prog.category||prog.cat)),cKey=normCatKey(catName);if(!pKey||!cKey)return!1;if(pKey===cKey)return!0;let aliases=CAT_ALIAS_MAP[cKey];return Array.isArray(aliases)&&aliases.includes(pKey)}
function InfoTip({text:t}){let[p,sp]=(0,l.useState)(null),sh=e=>{let r=e.currentTarget.getBoundingClientRect(),w=window.innerWidth||1200,b=r.top<78;sp({x:Math.max(132,Math.min(w-132,r.left+r.width/2)),y:b?r.bottom+7:r.top-7,b})};return(0,P.jsxs)("span",{className:"inline-flex items-center align-middle shrink-0",role:"img","aria-label":t,"data-tooltip":t,tabIndex:0,onMouseEnter:sh,onMouseLeave:()=>sp(null),onFocus:sh,onBlur:()=>sp(null),onClick:e=>{e.preventDefault();e.stopPropagation()},children:[(0,P.jsx)(O,{className:"w-3.5 h-3.5 text-slate-400 transition-colors cursor-help",style:{color:p?"#64748b":"#94a3b8"}}),p&&(0,P.jsx)("span",{role:"tooltip",style:{position:"fixed",left:p.x+"px",top:p.y+"px",transform:p.b?"translate(-50%,0)":"translate(-50%,-100%)",zIndex:99999,maxWidth:"240px",width:"max-content",backgroundColor:"#1e293b",color:"#ffffff",fontSize:"11px",lineHeight:"1.4",fontWeight:"500",padding:"6px 10px",borderRadius:"8px",boxShadow:"0 10px 25px -5px rgba(15,23,42,0.3)",pointerEvents:"none",textAlign:"left",whiteSpace:"normal",display:"block"},children:t})]})}
const DEFAULT_SKILL_LEVELS_SEED=[{id:"lvl-1",name:"Beginner",order:1},{id:"lvl-2",name:"Intermediate",order:2},{id:"lvl-3",name:"Advanced",order:3}];
const DEFAULT_SKILLS_SEED=[{id:"skill-1",name:"TypeScript",description:"Static typing and scalable application architecture.",active:!0,createdBy:"Kushal Khandwala"},{id:"skill-2",name:"React",description:"Component-driven UI engineering and hooks.",active:!0,createdBy:"Kushal Khandwala"},{id:"skill-3",name:"Node.js",description:"Server-side JavaScript runtimes and APIs.",active:!0,createdBy:"Kushal Khandwala"},{id:"skill-4",name:"API Security",description:"OAuth2, JWT validation, and threat mitigation.",active:!0,createdBy:"Kushal Khandwala"},{id:"skill-5",name:"GDPR Compliance",description:"Data privacy and regulatory compliance controls.",active:!0,createdBy:"Kushal Khandwala"}];
function normSkillKey(str){return String(str||"").trim().replace(/\s+/g," ").replace(/\s*\/\s*/g,"/").toLowerCase()}
function canonicalEmpSkillKey(empId){let s=String(empId||"").trim();if(!s||s==="emp-3"||s==="CO-5039"||s==="EMP-5039")return"CO-5039";if(s==="YOP-073")return"emp-1";if(s==="COINT-5040")return"emp-2";if(s==="CO-5038")return"emp-4";if(s==="CO-5037")return"emp-5";if(s==="CO-5036")return"emp-6";if(s==="CO-5035")return"emp-7";if(s==="CO-5034")return"emp-8";if(s==="CO-5033")return"emp-9";if(s==="CO-5032")return"emp-10";return s}
function resolveEmpSkillRecords(emp,empSkillsMap,skillsConfig){let key=canonicalEmpSkillKey(emp?.id||emp?.code);let backendList=empSkillsMap&&Array.isArray(empSkillsMap[key])?empSkillsMap[key]:null;if(backendList)return backendList.map(r=>r&&!r.skillLevel&&r.level?{...r,skillLevel:r.level}:r);let master=Array.isArray(skillsConfig)&&skillsConfig.length>0?skillsConfig:DEFAULT_SKILLS_SEED;return(Array.isArray(emp?.skills)?emp.skills:[]).map((skName,idx)=>{let found=master.find(m=>m.name.toLowerCase()===String(skName).trim().toLowerCase());return{id:"fallback-"+idx,employeeId:key,skillId:found?found.id:"sk-"+idx,skillName:skName,skillLevel:"Intermediate",sourceTrainingName:null,sources:[]}})}
const COMPLETION_REQ_OPTIONS=[`Watch all required videos`,`Pass the assessment`,`Submit any required documents`,`Get approval from the manager`];function parseCompReqList(prog){if(Array.isArray(prog?.completionRequirementsList)&&prog.completionRequirementsList.length>0)return prog.completionRequirementsList;let raw=String(prog?.completionRequirements||prog?.completionCriteria||``);return COMPLETION_REQ_OPTIONS.filter(opt=>raw.toLowerCase().includes(opt.toLowerCase()))}const DEFAULT_CATEGORIES_SEED=[{name:"Engineering & Architecture",desc:"Software engineering, distributed systems, clean code, cloud infrastructure, and CI/CD.",creator:"Isha Patel",date:"15-Jan-2026",modified:"Isha Patel (05-Mar-2026)",active:!0},{name:"Sales & Business Development",desc:"Enterprise deal closing, client discovery, objection handling, and CRM pipeline governance.",creator:"Isha Patel",date:"15-Jan-2026",modified:"Isha Patel (10-Feb-2026)",active:!0},{name:"Recruitment & HR Operations",desc:"Candidate sourcing, interview compliance, ATS workflows, onboarding, and payroll.",creator:"Shivam Sharma",date:"01-Feb-2026",modified:"Shivam Sharma (12-Feb-2026)",active:!0},{name:"Security, Privacy & Compliance",desc:"GDPR, SOC 2 Type II, secure coding standards, data retention policies, and credential security.",creator:"Isha Patel",date:"10-Feb-2026",modified:"Isha Patel (20-Feb-2026)",active:!0},{name:"Leadership & Management",desc:"1-on-1 coaching, agile performance reviews, cross-functional alignment, and conflict resolution.",creator:"Isha Patel",date:"20-Feb-2026",modified:"Isha Patel (25-Feb-2026)",active:!0},{name:"Product Design & UX",desc:"Design systems, user accessibility WCAG 2.1, Figma component libraries, and usability testing.",creator:"Shivam Sharma",date:"01-Mar-2026",modified:"Shivam Sharma (05-Mar-2026)",active:!0},{name:"Customer Success & Support",desc:"SLA management, escalation resolution, client onboarding, and proactive churn mitigation.",creator:"Shivam Sharma",date:"15-Mar-2026",modified:"Shivam Sharma (20-Mar-2026)",active:!0},{name:"DevOps & Cloud Operations",desc:"Kubernetes orchestration, Terraform infrastructure-as-code, and incident on-call response.",creator:"Ashish Kumar",date:"01-Apr-2026",modified:"Ashish Kumar (10-Apr-2026)",active:!0},{name:"Artificial Intelligence & ML",desc:"LLM prompt engineering, fine-tuning, RAG pipelines, model evaluation, and ethical AI safeguards.",creator:"Isha Patel",date:"18-Apr-2026",modified:"Isha Patel (25-Apr-2026)",active:!0}];function Je({currentTab:e,onSelectTab:t,isTrainingFlyoutOpen:n,onToggleTrainingFlyout:r,isConfigFlyoutOpen:i,onToggleConfigFlyout:a,isAdminFlyoutOpen:admOpen,onToggleAdminFlyout:setAdmOpen,collapsed:o,onToggleCollapse:s,currentUser:c}){let l=c.name===`Tanya Kapoor`,isAdmUser=c.name===`Kushal Khandwala`||(c.role||``).includes(`Administration`);return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(`aside`,{className:`bg-blue-600 text-white flex flex-col transition-all duration-300 z-30 select-none shrink-0 ${o?`w-20`:`w-64`}`,children:[(0,P.jsx)(`div`,{className:`flex-1 py-4 space-y-1 px-3 overflow-y-auto`,children:l?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`button`,{onClick:()=>{r(!1),t(`employee-dashboard`)},className:`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-bold transition-colors ${e===`employee-dashboard`?`bg-blue-700 text-white shadow-md`:`text-blue-100 hover:bg-blue-700/60 hover:text-white`}`,title:`Dashboard`,children:(0,P.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,P.jsx)(xe,{className:`w-5 h-5 shrink-0`}),!o&&(0,P.jsx)(`span`,{className:`font-bold`,children:`Dashboard`})]})}),(0,P.jsx)(`button`,{onClick:()=>{r(!1),t(`employee-training`)},className:`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-bold transition-colors ${e===`employee-training`||e===`employee-course-detail`||e===`employee-profile`?`bg-blue-700 text-white shadow-md`:`text-blue-100 hover:bg-blue-700/60 hover:text-white`}`,title:`Training`,children:(0,P.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,P.jsx)(_e,{className:`w-5 h-5 shrink-0`}),!o&&(0,P.jsx)(`span`,{className:`font-bold`,children:`Training`})]})}),(0,P.jsxs)(`button`,{onClick:()=>{r(!1),t(`skill-matrix`)},className:`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-bold transition-colors ${e===`skill-matrix`?`bg-blue-700 text-white shadow-md`:`text-blue-100 hover:bg-blue-700/60 hover:text-white`}`,title:`Skill Matrix`,children:[(0,P.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,P.jsx)(Ie,{className:`w-5 h-5 shrink-0`}),!o&&(0,P.jsx)(`span`,{className:`font-bold`,children:`Skill Matrix`})]}),!o&&(0,P.jsx)(E,{className:`w-4 h-4 text-blue-300`})]})]}):isAdmUser?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(`button`,{onClick:()=>{r(!1),a(!1),setAdmOpen&&setAdmOpen(!admOpen)},className:`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-bold transition-colors ${e===`admin-skills`?`bg-blue-700 text-white shadow-md`:`text-blue-100 hover:bg-blue-700/60 hover:text-white`}`,title:`Administration`,children:[(0,P.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,P.jsx)(Ie,{className:`w-5 h-5 shrink-0`}),!o&&(0,P.jsx)(`span`,{className:`font-bold`,children:`Administration`})]}),!o&&(0,P.jsx)(E,{className:`w-4 h-4 text-blue-300`})]})]}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(`button`,{onClick:()=>{r(!1),a(!1),setAdmOpen&&setAdmOpen(!1),t(`employees`)},className:`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-bold transition-colors ${e===`employees`||e===`employee-detail`?`bg-blue-700 text-white shadow-md`:`text-blue-100 hover:bg-blue-700/60 hover:text-white`}`,title:`Employees`,children:[(0,P.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,P.jsx)(We,{className:`w-5 h-5 shrink-0`}),!o&&(0,P.jsx)(`span`,{className:`font-bold`,children:`Employees`})]}),!o&&(0,P.jsx)(E,{className:`w-4 h-4 text-blue-300`})]}),(0,P.jsxs)(`button`,{onClick:()=>{a(!1),setAdmOpen&&setAdmOpen(!1),r(!n)},className:`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-bold transition-colors ${e.startsWith(`training`)?`bg-blue-700 text-white shadow-md`:`text-blue-100 hover:bg-blue-700/60 hover:text-white`}`,title:`Training`,children:[(0,P.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,P.jsx)(_e,{className:`w-5 h-5 shrink-0`}),!o&&(0,P.jsx)(`span`,{className:`font-bold`,children:`Training`})]}),!o&&(0,P.jsx)(E,{className:`w-4 h-4 text-blue-300`})]}),(0,P.jsxs)(`button`,{onClick:()=>{r(!1),setAdmOpen&&setAdmOpen(!1),a(!i)},className:`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-bold transition-colors ${e===`config`||e===`config-skills`||e===`roles`?`bg-blue-700 text-white shadow-md`:`text-blue-100 hover:bg-blue-700/60 hover:text-white`}`,title:`Config`,children:[(0,P.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,P.jsx)(je,{className:`w-5 h-5 shrink-0`}),!o&&(0,P.jsx)(`span`,{className:`font-bold`,children:`Config`})]}),!o&&(0,P.jsx)(E,{className:`w-4 h-4 text-blue-300`})]})]})}),(0,P.jsx)(`div`,{className:`p-3 border-t border-blue-500/30`,children:(0,P.jsx)(`button`,{onClick:s,className:`w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-blue-100 hover:bg-blue-700/40 transition-colors`,children:o?(0,P.jsx)(E,{className:`w-4 h-4`}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(ie,{className:`w-4 h-4`}),(0,P.jsx)(`span`,{children:`Collapse`})]})})})]}),!isAdmUser&&n&&(0,P.jsxs)(`div`,{className:`absolute left-64 top-0 h-full w-60 bg-white border-r border-slate-200 shadow-2xl z-40 flex flex-col animate-in slide-in-from-left duration-200`,children:[(0,P.jsxs)(`div`,{className:`p-4 border-b border-slate-100 flex items-center justify-between`,children:[(0,P.jsx)(`h2`,{className:`text-base font-bold text-slate-900`,children:`Training`}),(0,P.jsx)(`button`,{onClick:()=>r(!1),className:`p-1 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors`,children:(0,P.jsx)(N,{className:`w-5 h-5`})})]}),(0,P.jsxs)(`div`,{className:`p-3 space-y-1.5 flex-1 overflow-y-auto`,children:[(0,P.jsxs)(`button`,{onClick:()=>{t(`training-dashboard`),r(!1)},className:`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-normal transition-colors ${e===`training-dashboard`?`text-blue-600 bg-blue-50 shadow-xs`:`text-slate-700 hover:bg-slate-100`}`,children:[(0,P.jsx)(k,{className:`w-4 h-4 text-slate-700`}),(0,P.jsx)(`span`,{className:`font-normal`,children:`Dashboard`})]}),(0,P.jsxs)(`button`,{onClick:()=>{t(`training-programmes`),r(!1)},className:`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-normal transition-colors ${e===`training-programmes`||e===`programme-detail`?`text-blue-600 bg-blue-50 shadow-xs`:`text-slate-700 hover:bg-slate-100`}`,children:[(0,P.jsx)(me,{className:`w-4 h-4 text-slate-700`}),(0,P.jsx)(`span`,{className:`font-normal`,children:`Training Management`})]}),(0,P.jsxs)(`button`,{onClick:()=>{t(`training-assignments`),r(!1)},className:`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-normal transition-colors ${e===`training-assignments`?`text-blue-600 bg-blue-50 shadow-xs`:`text-slate-700 hover:bg-slate-100`}`,children:[(0,P.jsx)(Pe,{className:`w-4 h-4 text-slate-700`}),(0,P.jsx)(`span`,{className:`font-normal`,children:`Assignments`})]}),(0,P.jsxs)(`button`,{onClick:()=>{t(`training-progress`),r(!1)},className:`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-normal transition-colors ${e===`training-progress`?`text-blue-600 bg-blue-50 shadow-xs`:`text-slate-700 hover:bg-slate-100`}`,children:[(0,P.jsx)(T,{className:`w-4 h-4 text-slate-700`}),(0,P.jsx)(`span`,{className:`font-normal`,children:`Training Progress`})]}),(0,P.jsxs)(`button`,{onClick:()=>{t(`certificates`),r(!1)},className:`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-normal transition-colors ${e===`certificates`?`text-blue-600 bg-blue-50 shadow-xs`:`text-slate-700 hover:bg-slate-100`}`,children:[(0,P.jsx)(C,{className:`w-4 h-4 text-slate-700`}),(0,P.jsx)(`span`,{className:`font-normal`,children:`Certificates`})]})]})]}),!isAdmUser&&i&&(0,P.jsxs)(`div`,{style:{width:`220px`},className:`absolute left-64 top-0 h-full w-56 bg-white border-r border-slate-200 shadow-2xl z-40 flex flex-col animate-in slide-in-from-left duration-200`,children:[(0,P.jsxs)(`div`,{className:`p-5 border-b border-slate-100 flex items-center justify-between`,children:[(0,P.jsx)(`h2`,{className:`text-lg font-bold text-slate-900`,children:`Config`}),(0,P.jsx)(`button`,{onClick:()=>a(!1),className:`p-1 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors`,children:(0,P.jsx)(N,{className:`w-5 h-5`})})]}),(0,P.jsxs)(`div`,{className:`p-4 space-y-1 flex-1 overflow-y-auto`,children:[(0,P.jsxs)(`button`,{onClick:()=>{t(`config`),a(!1)},className:`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${e===`config`?`text-blue-600 font-semibold bg-blue-50`:`text-slate-700 hover:bg-slate-100`}`,children:[(0,P.jsx)(je,{className:`w-4 h-4 text-blue-600`}),(0,P.jsx)(`span`,{children:`Training Categories`})]}),(0,P.jsxs)(`button`,{onClick:()=>{t(`config-skills`),a(!1)},className:`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${e===`config-skills`?`text-blue-600 font-semibold bg-blue-50`:`text-slate-700 hover:bg-slate-100`}`,children:[(0,P.jsx)(je,{className:`w-4 h-4 text-blue-600`}),(0,P.jsx)(`span`,{children:`Skills`})]}),(0,P.jsxs)(`button`,{onClick:()=>{t(`roles`),a(!1)},className:`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${e===`roles`?`text-blue-600 font-semibold bg-blue-50`:`text-slate-700 hover:bg-slate-100`}`,children:[(0,P.jsx)(We,{className:`w-4 h-4 text-slate-500`}),(0,P.jsx)(`span`,{children:`Roles`})]})]})]}),isAdmUser&&admOpen&&(0,P.jsxs)(`div`,{style:{width:`230px`},className:`absolute left-64 top-0 h-full w-56 bg-white border-r border-slate-200 shadow-2xl z-40 flex flex-col animate-in slide-in-from-left duration-200`,children:[(0,P.jsxs)(`div`,{className:`p-5 border-b border-slate-100 flex items-center justify-between`,children:[(0,P.jsx)(`h2`,{className:`text-lg font-bold text-slate-900`,children:`Administration`}),(0,P.jsx)(`button`,{onClick:()=>setAdmOpen(!1),className:`p-1 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors`,children:(0,P.jsx)(N,{className:`w-5 h-5`})})]}),(0,P.jsxs)(`div`,{className:`p-4 space-y-2 flex-1 overflow-y-auto`,children:[(0,P.jsx)(`div`,{className:`px-3 pt-1 text-[11px] font-bold uppercase tracking-wider text-slate-400`,children:`Master Data`}),(0,P.jsxs)(`button`,{onClick:()=>{t(`admin-skills`),setAdmOpen(!1)},className:`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${e===`admin-skills`?`text-blue-600 font-semibold bg-blue-50`:`text-slate-700 hover:bg-slate-100`}`,children:[(0,P.jsx)(Ie,{className:`w-4 h-4 text-blue-600`}),(0,P.jsx)(`span`,{children:`Skills`})]})]})]})]})}function Ye({currentTab:e,onOpenNewEmployee:t,onOpenCreateProgramme:n,onOpenAssignTraining:r,searchQuery:i,onSearchChange:a,currentUser:o,onSwitchUser:s,onOpenMyProfile:c}){let[u,d]=(0,l.useState)(!1),[f,p]=(0,l.useState)(!1),m=o.name===`Tanya Kapoor`,isAdmUser=o.name===`Kushal Khandwala`||(o.role||``).includes(`Administration`);return(0,P.jsxs)(`header`,{className:`h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between shrink-0 select-none relative gap-4`,children:[(0,P.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,P.jsx)(`button`,{onClick:()=>alert(`App Launcher`),className:`p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors`,title:`App Launcher`,children:(0,P.jsx)(ye,{className:`w-5 h-5 text-slate-600`})}),(0,P.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,P.jsx)(`img`,{src:`/assets/aistudio/image_e35c19df.png`,alt:`CollabCRM`,className:`w-7 h-7 object-contain shrink-0`}),(0,P.jsxs)(`div`,{className:`flex items-baseline gap-1.5 leading-none`,children:[(0,P.jsx)(`span`,{className:`font-bold text-slate-900 text-base tracking-tight`,children:`CollabCRM`}),(0,P.jsx)(`span`,{className:`text-sm font-medium text-slate-500`,children:`People`})]})]})]}),(0,P.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,P.jsxs)(`div`,{className:`relative hidden md:block w-64`,children:[(0,P.jsx)(ke,{className:`w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2`}),(0,P.jsx)(`input`,{type:`text`,value:i,onChange:e=>a(e.target.value),placeholder:`Search employees, trainings...`,className:`w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-4 py-1.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500`})]}),!m&&!isAdmUser&&(0,P.jsxs)(`div`,{className:`relative`,children:[(0,P.jsxs)(`button`,{onClick:()=>{p(!1),d(!u)},className:`flex items-center gap-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm transition-colors`,children:[(0,P.jsx)(`span`,{children:`New`}),(0,P.jsx)(re,{className:`w-4 h-4 text-slate-500`})]}),u&&(0,P.jsxs)(`div`,{className:`absolute right-0 mt-2 w-56 bg-white border border-slate-200 rounded-xl shadow-xl py-1 z-50 animate-in fade-in duration-150`,children:[(0,P.jsxs)(`button`,{onClick:()=>{d(!1),t()},className:`w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-2 font-medium`,children:[(0,P.jsx)(j,{className:`w-4 h-4 text-blue-600`}),(0,P.jsx)(`span`,{children:`New Employee`})]}),(0,P.jsxs)(`button`,{onClick:()=>{d(!1),n()},className:`w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-2 font-medium`,children:[(0,P.jsx)(j,{className:`w-4 h-4 text-blue-600`}),(0,P.jsx)(`span`,{children:`New Training`})]}),(0,P.jsxs)(`button`,{onClick:()=>{d(!1),r()},className:`w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-2 font-medium`,children:[(0,P.jsx)(j,{className:`w-4 h-4 text-blue-600`}),(0,P.jsx)(`span`,{children:`Assign Training`})]})]})]}),(0,P.jsxs)(`button`,{className:`p-2 rounded-lg text-slate-500 hover:bg-slate-100 relative transition-colors`,children:[(0,P.jsx)(w,{className:`w-5 h-5`}),(0,P.jsx)(`span`,{className:`absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full`})]}),(0,P.jsxs)(`div`,{className:`relative`,children:[(0,P.jsxs)(`button`,{onClick:()=>{d(!1),p(!f)},className:`flex items-center gap-3 pl-2 border-l border-slate-200 cursor-pointer hover:opacity-80 transition-opacity`,children:[(0,P.jsx)(`div`,{className:`w-9 h-9 ${o.name===`Tanya Kapoor`?`bg-amber-600`:`bg-purple-600`} text-white rounded-full flex items-center justify-center font-bold text-sm shadow-sm`,children:o.initials}),(0,P.jsxs)(`div`,{className:`hidden lg:block text-left`,children:[(0,P.jsxs)(`div`,{className:`text-sm font-bold text-slate-900 leading-tight flex items-center gap-1.5`,children:[(0,P.jsx)(`span`,{children:o.name}),(0,P.jsx)(re,{className:`w-3.5 h-3.5 text-slate-400`})]}),(0,P.jsx)(`div`,{className:`text-xs text-slate-500 font-medium`,children:o.role})]})]}),f&&(0,P.jsxs)(`div`,{className:`absolute right-0 mt-2 w-72 bg-white border border-slate-200 rounded-2xl shadow-2xl py-2 z-50 animate-in fade-in duration-150`,children:[(0,P.jsxs)(`div`,{className:`px-4 py-2 border-b border-slate-100 flex items-center gap-3`,children:[(0,P.jsx)(`div`,{className:`w-10 h-10 ${o.name===`Tanya Kapoor`?`bg-amber-600`:`bg-purple-600`} text-white rounded-full flex items-center justify-center font-bold text-sm`,children:o.initials}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`div`,{className:`text-sm font-bold text-slate-900`,children:o.name}),(0,P.jsx)(`div`,{className:`text-xs text-slate-500`,children:o.role})]})]}),(0,P.jsx)(`div`,{className:`py-1`,children:(0,P.jsxs)(`button`,{onClick:()=>{p(!1),c?c():alert(`Opening My Profile`)},className:`w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center gap-2`,children:[(0,P.jsx)(Ue,{className:`w-4 h-4 text-slate-500`}),(0,P.jsx)(`span`,{children:`My Profile`})]})}),(0,P.jsxs)(`div`,{className:`border-t border-slate-100 py-1`,children:[(0,P.jsx)(`div`,{className:`px-4 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider`,children:`SWITCH USER ROLE`}),(0,P.jsxs)(`button`,{onClick:()=>{s({name:`Ishdeep Anand`,role:`Admin / HR / Reporting Manager`,initials:`IA`,canChangeAvailability:!0}),p(!1)},className:`w-full text-left px-4 py-2 text-xs flex items-center justify-between hover:bg-slate-50 ${o.name===`Ishdeep Anand`?`bg-blue-50/60 font-bold text-blue-900`:`text-slate-700`}`,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`div`,{className:`font-bold`,children:`Ishdeep Anand`}),(0,P.jsx)(`div`,{className:`text-[11px] text-slate-500`,children:`Admin / HR / Reporting Manager`})]}),o.name===`Ishdeep Anand`&&(0,P.jsx)(`span`,{className:`text-blue-600 font-bold`,children:`✓`})]}),(0,P.jsxs)(`button`,{onClick:()=>{s({name:`Kushal Khandwala`,role:`Administration`,initials:`KK`,canChangeAvailability:!0,defaultTab:`admin-skills`}),p(!1)},className:`w-full text-left px-4 py-2 text-xs flex items-center justify-between hover:bg-slate-50 ${o.name===`Kushal Khandwala`?`bg-blue-50/60 font-bold text-blue-900`:`text-slate-700`}`,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`div`,{className:`font-bold`,children:`Kushal Khandwala`}),(0,P.jsx)(`div`,{className:`text-[11px] text-slate-500`,children:`Administration`})]}),o.name===`Kushal Khandwala`&&(0,P.jsx)(`span`,{className:`text-blue-600 font-bold`,children:`✓`})]}),(0,P.jsxs)(`button`,{onClick:()=>{s({name:`Tanya Kapoor`,role:`Senior Business Analyst • Employee`,initials:`TK`,canChangeAvailability:!1}),p(!1)},className:`w-full text-left px-4 py-2 text-xs flex items-center justify-between hover:bg-slate-50 ${o.name===`Tanya Kapoor`?`bg-blue-50/60 font-bold text-blue-900`:`text-slate-700`}`,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`div`,{className:`font-bold`,children:`Tanya Kapoor`}),(0,P.jsx)(`div`,{className:`text-[11px] text-slate-500`,children:`Senior Business Analyst • Employee`})]}),o.name===`Tanya Kapoor`&&(0,P.jsx)(`span`,{className:`text-blue-600 font-bold`,children:`✓`})]})]}),(0,P.jsx)(`div`,{className:`border-t border-slate-100 pt-1`,children:(0,P.jsxs)(`button`,{onClick:()=>{p(!1),alert(`Logged out successfully`)},className:`w-full text-left px-4 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 flex items-center gap-2`,children:[(0,P.jsx)(A,{className:`w-4 h-4 text-rose-500`}),(0,P.jsx)(`span`,{children:`Logout`})]})})]})]})]})]})}function Xe({employees:e,onSelectEmployee:t,searchQuery:n}){let[r,i]=(0,l.useState)(`all`),[a,o]=(0,l.useState)(1),s=e.filter(e=>{let t=e.firstName.toLowerCase().includes(n.toLowerCase())||e.lastName.toLowerCase().includes(n.toLowerCase())||e.code.toLowerCase().includes(n.toLowerCase())||e.department.toLowerCase().includes(n.toLowerCase())||e.email.toLowerCase().includes(n.toLowerCase());return r===`confirmed`?t&&e.status===`Confirmed`:r===`intern`?t&&e.status===`Intern`:r===`probation`?t&&e.status===`Probation`:t}),c=Math.ceil(s.length/10)||1,u=s.slice((a-1)*10,a*10),d=e=>{switch(e){case`Confirmed`:return(0,P.jsxs)(`span`,{className:`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200`,children:[(0,P.jsx)(`span`,{className:`w-1.5 h-1.5 rounded-full bg-emerald-500`}),`Confirmed`]});case`Intern`:return(0,P.jsxs)(`span`,{className:`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-rose-50 text-rose-700 border border-rose-200`,children:[(0,P.jsx)(`span`,{className:`w-1.5 h-1.5 rounded-full bg-rose-500`}),`Intern`]});case`Probation`:return(0,P.jsxs)(`span`,{className:`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-sky-50 text-sky-700 border border-sky-200`,children:[(0,P.jsx)(`span`,{className:`w-1.5 h-1.5 rounded-full bg-sky-500`}),`Probation`]});case`Notice Period`:return(0,P.jsxs)(`span`,{className:`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200`,children:[(0,P.jsx)(`span`,{className:`w-1.5 h-1.5 rounded-full bg-amber-500`}),`Notice Period`]});default:return(0,P.jsx)(`span`,{className:`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700`,children:e})}};return(0,P.jsxs)(`div`,{className:`px-6 py-4 space-y-3 max-w-[1600px] mx-auto w-full`,children:[(0,P.jsxs)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4`,children:[(0,P.jsxs)(`div`,{className:`bg-white border border-slate-200 rounded-xl p-4 shadow-sm relative overflow-hidden`,children:[(0,P.jsx)(`div`,{className:`text-xs font-medium text-slate-500`,children:`Active Employees`}),(0,P.jsx)(`div`,{className:`text-3xl font-bold text-slate-900 mt-1`,children:`141`}),(0,P.jsx)(`div`,{className:`text-xs text-slate-400 mt-2`,children:`(Licenses Left: 933)`})]}),(0,P.jsxs)(`div`,{className:`bg-white border border-slate-200 rounded-xl p-4 shadow-sm relative overflow-hidden`,children:[(0,P.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,P.jsx)(`div`,{className:`text-xs font-medium text-slate-500`,children:`Confirmed`}),(0,P.jsx)(`span`,{className:`w-6 h-6 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center`,children:(0,P.jsx)(ne,{className:`w-4 h-4`})})]}),(0,P.jsx)(`div`,{className:`text-3xl font-bold text-slate-900 mt-1`,children:`112`})]}),(0,P.jsxs)(`div`,{className:`bg-white border border-slate-200 rounded-xl p-4 shadow-sm relative overflow-hidden`,children:[(0,P.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,P.jsx)(`div`,{className:`text-xs font-medium text-slate-500`,children:`Intern`}),(0,P.jsx)(pe,{className:`w-4 h-4 text-slate-400`})]}),(0,P.jsx)(`div`,{className:`text-3xl font-bold text-slate-900 mt-1`,children:`16`})]}),(0,P.jsxs)(`div`,{className:`bg-white border border-slate-200 rounded-xl p-4 shadow-sm relative overflow-hidden`,children:[(0,P.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,P.jsx)(`div`,{className:`text-xs font-medium text-slate-500`,children:`On Probation`}),(0,P.jsx)(pe,{className:`w-4 h-4 text-slate-400`})]}),(0,P.jsx)(`div`,{className:`text-3xl font-bold text-slate-900 mt-1`,children:`23`})]}),(0,P.jsxs)(`div`,{className:`bg-white border border-slate-200 rounded-xl p-4 shadow-sm relative overflow-hidden`,children:[(0,P.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,P.jsx)(`div`,{className:`text-xs font-medium text-slate-500`,children:`On Notice Period`}),(0,P.jsx)(pe,{className:`w-4 h-4 text-slate-400`})]}),(0,P.jsx)(`div`,{className:`text-3xl font-bold text-slate-900 mt-1`,children:`5`})]}),(0,P.jsxs)(`div`,{className:`bg-white border border-slate-200 rounded-xl p-4 shadow-sm relative overflow-hidden`,children:[(0,P.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,P.jsx)(`div`,{className:`text-xs font-medium text-slate-500`,children:`Hidden Profiles`}),(0,P.jsx)(`span`,{className:`text-slate-400 text-xs`,children:`🔒`})]}),(0,P.jsx)(`div`,{className:`text-3xl font-bold text-slate-900 mt-1`,children:`0`})]})]}),(0,P.jsxs)(`div`,{className:`bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden`,children:[(0,P.jsx)(`div`,{className:`p-4 border-b border-slate-200 flex flex-col lg:flex-row lg:items-center justify-between gap-4`,children:(0,P.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,P.jsx)(`h1`,{className:`text-base font-bold text-slate-900`,children:`Employees`}),(0,P.jsxs)(`span`,{className:`text-xs font-medium text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full`,children:[`1 - `,u.length,` of `,s.length,` Employees`]})]})}),(0,P.jsxs)(`div`,{className:`px-4 py-3 bg-slate-50 border-b border-slate-200 flex items-center gap-2 flex-wrap text-xs`,children:[(0,P.jsxs)(`div`,{className:`flex items-center gap-1 bg-white border border-slate-200 rounded-lg px-2.5 py-1 text-slate-700 shadow-sm`,children:[(0,P.jsx)(`span`,{children:`Status is not Relieved`}),(0,P.jsx)(`button`,{className:`text-slate-400 hover:text-slate-700 ml-1 font-bold`,children:`×`})]}),(0,P.jsxs)(`div`,{className:`flex items-center gap-1 bg-white border border-slate-200 rounded-lg px-2.5 py-1 text-slate-700 shadow-sm`,children:[(0,P.jsx)(`span`,{children:`Account Status is Active`}),(0,P.jsx)(`button`,{className:`text-slate-400 hover:text-slate-700 ml-1 font-bold`,children:`×`})]}),(0,P.jsxs)(`div`,{className:`flex items-center gap-1 bg-white border border-slate-200 rounded-lg px-2.5 py-1 text-slate-700 shadow-sm`,children:[(0,P.jsx)(`span`,{children:`Hidden Profile is False`}),(0,P.jsx)(`button`,{className:`text-slate-400 hover:text-slate-700 ml-1 font-bold`,children:`×`})]}),(0,P.jsxs)(`button`,{onClick:()=>i(r===`all`?`confirmed`:`all`),className:`flex items-center gap-1.5 ml-auto text-slate-700 hover:text-slate-900 bg-white border border-slate-200 px-3 py-1.5 rounded-lg font-medium shadow-sm`,children:[(0,P.jsx)(he,{className:`w-3.5 h-3.5 text-slate-500`}),(0,P.jsx)(`span`,{children:`Filter`})]})]}),(0,P.jsx)(`div`,{className:`overflow-x-auto`,children:(0,P.jsxs)(`table`,{className:`w-full text-left border-collapse`,children:[(0,P.jsx)(`thead`,{children:(0,P.jsxs)(`tr`,{className:`border-b border-slate-200 text-xs font-semibold text-slate-500 bg-slate-50/50`,children:[(0,P.jsx)(`th`,{className:`py-3 px-4 w-16`,children:`No.`}),(0,P.jsx)(`th`,{className:`py-3 px-4`,children:`Code ↕`}),(0,P.jsx)(`th`,{className:`py-3 px-4`,children:`Employee Name ↕`}),(0,P.jsx)(`th`,{className:`py-3 px-4`,children:`Department ↕`}),(0,P.jsx)(`th`,{className:`py-3 px-4`,children:`Contact`}),(0,P.jsx)(`th`,{className:`py-3 px-4`,children:`Status ↕`}),(0,P.jsx)(`th`,{className:`py-3 px-4`,children:`Reporting to ↕`}),(0,P.jsx)(`th`,{className:`py-3 px-4`,children:`Experience`}),(0,P.jsx)(`th`,{className:`py-3 px-4`,children:`Joining Date ↕`}),(0,P.jsx)(`th`,{className:`py-3 px-4`,children:`Last Login ↕`}),(0,P.jsx)(`th`,{className:`py-3 px-4 text-right`,children:`Actions`})]})}),(0,P.jsxs)(`tbody`,{className:`divide-y divide-slate-100 text-sm`,children:[u.map((e,n)=>(0,P.jsxs)(`tr`,{className:`hover:bg-slate-50/80 transition-colors`,children:[(0,P.jsx)(`td`,{className:`py-3 px-4 text-slate-500 tabular-nums`,children:(a-1)*10+n+1}),(0,P.jsx)(`td`,{className:`py-3 px-4 font-mono font-medium text-slate-800`,children:e.code}),(0,P.jsx)(`td`,{className:`py-3 px-4`,children:(0,P.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,P.jsxs)(`div`,{className:`w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-xs shrink-0`,children:[e.firstName[0],e.lastName[0]]}),(0,P.jsxs)(`div`,{children:[(0,P.jsxs)(`div`,{className:`font-bold text-slate-900 hover:text-blue-600 cursor-pointer`,onClick:()=>t(e),children:[e.firstName,` `,e.lastName]}),(0,P.jsx)(`div`,{className:`text-xs text-slate-500`,children:e.designation})]})]})}),(0,P.jsx)(`td`,{className:`py-3 px-4`,children:(0,P.jsx)(`span`,{className:`inline-block bg-sky-50 text-sky-700 border border-sky-100 px-2 py-0.5 rounded text-xs font-medium`,children:e.department})}),(0,P.jsxs)(`td`,{className:`py-3 px-4 text-slate-600 text-xs`,children:[(0,P.jsx)(`div`,{children:e.email}),(0,P.jsx)(`div`,{className:`text-slate-400`,children:e.companyMobile})]}),(0,P.jsx)(`td`,{className:`py-3 px-4`,children:d(e.status)}),(0,P.jsx)(`td`,{className:`py-3 px-4 text-slate-700 text-xs font-medium`,children:e.reportingTo}),(0,P.jsx)(`td`,{className:`py-3 px-4 text-slate-600 text-xs tabular-nums`,children:e.experience}),(0,P.jsx)(`td`,{className:`py-3 px-4 text-slate-600 text-xs tabular-nums`,children:e.joiningDate}),(0,P.jsx)(`td`,{className:`py-3 px-4 text-slate-500 text-xs tabular-nums`,children:e.lastLogin}),(0,P.jsx)(`td`,{className:`py-3 px-4 text-right`,children:(0,P.jsx)(`div`,{className:`flex items-center justify-end gap-2`,children:(0,P.jsx)(`button`,{onClick:()=>t(e),className:`p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors`,title:`View Profile`,children:(0,P.jsx)(pe,{className:`w-4 h-4`})})})})]},e.id)),s.length===0&&(0,P.jsx)(`tr`,{children:(0,P.jsx)(`td`,{colSpan:11,className:`py-12 text-center text-slate-400 text-sm`,children:`No employees found matching your search.`})})]})]})}),(0,P.jsxs)(`div`,{className:`p-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500`,children:[(0,P.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,P.jsx)(`span`,{children:`Records Per Page`}),(0,P.jsxs)(`select`,{className:`bg-white border border-slate-200 rounded px-2 py-1 text-slate-700`,children:[(0,P.jsx)(`option`,{value:`10`,children:`10`}),(0,P.jsx)(`option`,{value:`25`,children:`25`}),(0,P.jsx)(`option`,{value:`50`,children:`50`})]})]}),(0,P.jsxs)(`div`,{className:`flex items-center gap-1`,children:[(0,P.jsx)(`button`,{onClick:()=>o(Math.max(1,a-1)),disabled:a===1,className:`px-3 py-1.5 rounded border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-40`,children:`Previous`}),Array.from({length:Math.min(5,c)},(e,t)=>t+1).map(e=>(0,P.jsx)(`button`,{onClick:()=>o(e),className:`w-8 h-8 rounded font-medium ${a===e?`bg-blue-600 text-white`:`border border-slate-200 bg-white text-slate-700 hover:bg-slate-50`}`,children:e},e)),(0,P.jsx)(`button`,{onClick:()=>o(Math.min(c,a+1)),disabled:a===c,className:`px-3 py-1.5 rounded border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-40`,children:`Next`})]})]})]})]})}function Ze({certificateId:e,programmeName:t,employeeName:n,employeeCode:r,issueDate:i,signatory:a,onClose:o}){return(0,P.jsx)(`div`,{className:`fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 animate-in fade-in duration-150`,children:(0,P.jsxs)(`div`,{className:`bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-200 relative animate-in zoom-in-95 duration-200`,children:[(0,P.jsx)(`button`,{onClick:o,className:`absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors`,children:(0,P.jsx)(N,{className:`w-5 h-5`})}),(0,P.jsxs)(`div`,{className:`p-8 md:p-12 relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50/30 text-slate-900 border-8 border-slate-100 m-2 rounded-xl`,children:[(0,P.jsx)(`div`,{className:`absolute top-0 left-0 w-48 h-48 bg-blue-900 clip-corner -rotate-45 transform -translate-x-16 -translate-y-16`}),(0,P.jsxs)(`div`,{className:`relative z-10 space-y-6 text-center`,children:[(0,P.jsxs)(`div`,{className:`grid grid-cols-3 items-center`,children:[(0,P.jsx)(`div`,{}),(0,P.jsxs)(`div`,{className:`flex items-center justify-center gap-2 font-bold text-base tracking-tight text-blue-900`,children:[(0,P.jsx)(`span`,{className:`bg-blue-900 text-white w-7 h-7 rounded-md flex items-center justify-center font-black`,children:`C`}),(0,P.jsx)(`span`,{children:`COLLABCRM`})]}),(0,P.jsx)(`div`,{className:`flex justify-end`,children:(0,P.jsx)(`div`,{className:`w-14 h-14 rounded-full bg-amber-400 border-2 border-amber-600 flex items-center justify-center shadow-md`,children:(0,P.jsx)(C,{className:`w-8 h-8 text-amber-900`})})})]}),(0,P.jsxs)(`div`,{className:`pt-4 space-y-1`,children:[(0,P.jsx)(`h1`,{className:`text-xl md:text-2xl font-serif font-bold text-blue-950 uppercase tracking-widest`,children:`Certificate of Excellence`}),(0,P.jsx)(`div`,{className:`text-xs font-serif uppercase tracking-widest text-slate-500`,children:`of Appreciation`})]}),(0,P.jsx)(`div`,{className:`text-xs text-slate-500 italic pt-2`,children:`This certificate is proudly presented to`}),(0,P.jsxs)(`div`,{className:`space-y-1`,children:[(0,P.jsx)(`h2`,{className:`text-2xl md:text-3xl font-serif font-black text-slate-900`,children:n}),(0,P.jsxs)(`div`,{className:`text-xs font-mono font-bold text-slate-600`,children:[`Employee ID: `,r]})]}),(0,P.jsx)(`p`,{className:`text-xs text-slate-600 max-w-md mx-auto leading-relaxed pt-1`,children:`has successfully fulfilled all curriculum requirements, passed comprehensive assessments, and achieved mastery in the training:`}),(0,P.jsx)(`div`,{className:`text-base md:text-lg font-bold text-blue-900 py-1`,children:t}),(0,P.jsxs)(`div`,{className:`grid grid-cols-2 gap-8 pt-8 items-end border-t border-slate-200 mt-6 text-left text-xs`,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsxs)(`div`,{className:`font-mono font-bold text-slate-800`,children:[`Certificate ID: `,e]}),(0,P.jsxs)(`div`,{className:`text-slate-600`,children:[`Issued Date: `,i]}),(0,P.jsx)(`div`,{className:`text-[10px] uppercase font-bold text-slate-400 pt-2 border-t border-slate-300 mt-2`,children:`Date of Issue`})]}),(0,P.jsxs)(`div`,{className:`text-right`,children:[(0,P.jsx)(`div`,{className:`font-serif font-bold text-slate-900 text-sm`,children:`Khushi Bhatt, Head of HR`}),(0,P.jsx)(`div`,{className:`text-[10px] uppercase font-bold text-slate-400 pt-2 border-t border-slate-300 mt-2`,children:`Authorized Signatory`})]})]})]})]})]})})}function Qe({issuedCertificates:dynCerts,employee:curEmp}={}){let[e,t]=(0,l.useState)(null),baseCerts=[{certNum:`TRN-2026-0032`,prog:`API Security & OAuth2 Best Practices`,issuedDate:`18-Jan-2026`,expiry:`26-Jan-2028`,score:`94%`,issuer:`Isha Patel`},{certNum:`TRN-2026-0027`,prog:`Cloud Infrastructure & High-Performance Node Services`,issuedDate:`27-Jan-2026`,expiry:`26-Jan-2028`,score:`98%`,issuer:`Ishdeep Anand`},{certNum:`TRN-2026-0023`,prog:`CollabCRM Recruitment & Client Portal Workflows`,issuedDate:`25-Jan-2026`,expiry:`26-Jan-2028`,score:`92%`,issuer:`Isha Patel`},{certNum:`TRN-2026-0018`,prog:`Information Security & Global Data Privacy (GDPR/ISO)`,issuedDate:`24-Jan-2026`,expiry:`26-Jan-2028`,score:`95%`,issuer:`Megha Salunkhe`},{certNum:`TRN-2026-0016`,prog:`Advanced Candidate Sourcing Masterclass`,issuedDate:`29-Jan-2026`,expiry:`26-Jan-2028`,score:`90%`,issuer:`Isha Patel`}],empKey=canonicalEmpSkillKey(curEmp?.id||curEmp?.code||`CO-5039`),dynList=(Array.isArray(dynCerts)?dynCerts:[]).filter(c=>c&&canonicalEmpSkillKey(c.employeeId)===empKey).map(c=>({certNum:c.id,prog:c.trainingName||c.name,issuedDate:c.issueDate||`Today`,expiry:c.expiryDate||`2 Years`,score:c.score!=null?(c.score+`%`):`Verified`,issuer:c.signatoryName||`Isha Patel`,isNew:!0})),n=[...dynList.filter(dc=>!baseCerts.some(bc=>bc.prog===dc.prog)),...baseCerts];return(0,P.jsxs)(`div`,{className:`w-full p-6 space-y-6`,children:[(0,P.jsxs)(`div`,{className:`flex flex-col sm:flex-row sm:items-center justify-between gap-4`,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`h1`,{className:`text-xl font-bold text-slate-900`,children:`My Certificates`}),(0,P.jsx)(`p`,{className:`text-xs text-slate-500 mt-0.5`,children:`Official verified training certificates and credentials earned upon successful course completion.`})]}),(0,P.jsxs)(`span`,{className:`bg-blue-50 text-blue-700 text-xs font-bold px-2.5 py-1 rounded-full self-start sm:self-center`,children:[n.length,` Certificates`]})]}),(0,P.jsxs)(`div`,{className:`bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden`,children:[(0,P.jsx)(`div`,{className:`overflow-x-auto`,children:(0,P.jsxs)(`table`,{className:`w-full text-left border-collapse`,children:[(0,P.jsx)(`thead`,{children:(0,P.jsxs)(`tr`,{className:`border-b border-slate-200 text-[11px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50/50`,children:[(0,P.jsx)(`th`,{className:`py-3 px-4`,children:`Certificate ID`}),(0,P.jsx)(`th`,{className:`py-3 px-4`,children:`Training`}),(0,P.jsx)(`th`,{className:`py-3 px-4`,children:`Score`}),(0,P.jsx)(`th`,{className:`py-3 px-4`,children:`Issued Date`}),(0,P.jsx)(`th`,{className:`py-3 px-4`,children:`Expiry Date`}),(0,P.jsx)(`th`,{className:`py-3 px-4`,children:`Authorized Issuer`}),(0,P.jsx)(`th`,{className:`py-3 px-4 text-right`,children:`Actions`})]})}),(0,P.jsx)(`tbody`,{className:`divide-y divide-slate-100 text-sm`,children:n.map((e,n)=>(0,P.jsxs)(`tr`,{className:`hover:bg-slate-50/80 transition-colors`,children:[(0,P.jsx)(`td`,{className:`py-3 px-4 font-mono text-xs font-bold text-blue-600`,children:(0,P.jsxs)(`span`,{className:`flex items-center gap-1.5 whitespace-nowrap`,children:[(0,P.jsx)(C,{className:`w-4 h-4 text-amber-600`}),e.certNum]})}),(0,P.jsx)(`td`,{className:`py-3 px-4 font-semibold text-slate-900 text-xs`,children:e.prog}),(0,P.jsx)(`td`,{className:`py-3 px-4 text-xs font-mono font-bold text-emerald-700`,children:e.score}),(0,P.jsx)(`td`,{className:`py-3 px-4 text-slate-600 text-xs tabular-nums`,children:e.issuedDate}),(0,P.jsx)(`td`,{className:`py-3 px-4 text-slate-600 text-xs tabular-nums`,children:e.expiry}),(0,P.jsx)(`td`,{className:`py-3 px-4 text-slate-700 text-xs font-medium`,children:e.issuer}),(0,P.jsx)(`td`,{className:`py-3 px-4 text-right`,children:(0,P.jsx)(`div`,{className:`flex items-center justify-end`,children:(0,P.jsx)(`button`,{type:`button`,onClick:()=>t(e),className:`p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors cursor-pointer`,title:`View Certificate`,children:(0,P.jsx)(pe,{className:`w-4 h-4`})})})})]},n))})]})})]}),e&&(0,P.jsx)(Ze,{certificateId:e.certNum,programmeName:e.prog,employeeName:`Tanya Kapoor`,employeeCode:`EMP-1042`,issueDate:e.issuedDate,signatory:`Khushi Bhatt, Head of HR`,onClose:()=>t(null)})]})}function $e({employee:e,assignments:t,programmes:progs,isEmployeeSide:isEmpSide,onBack:n,onOpenAssignTraining:r,onNavigateToProgrammeDetail:i,employeeSkills:empSkillsMap,skillAwardHistory:awardHistory,skillsConfig,skillLevels,issuedCertificates:dynCerts,onManageEmployeeSkill,canManageSkills}){let[a,o]=(0,l.useState)(`general`),[s,c]=(0,l.useState)(null),[skillHistModal,setSkillHistModal]=(0,l.useState)(null),[showManageSkillModal,setShowManageSkillModal]=(0,l.useState)(!1),[mgrSkillId,setMgrSkillId]=(0,l.useState)(``),[mgrSkillLevel,setMgrSkillLevel]=(0,l.useState)(`Beginner`),[mgrSkillErr,setMgrSkillErr]=(0,l.useState)(``),empKey=canonicalEmpSkillKey(e?.id||e?.code),empSkillRecs=resolveEmpSkillRecords(e,empSkillsMap,skillsConfig),empHistRecs=(Array.isArray(awardHistory)?awardHistory:[]).filter(h=>canonicalEmpSkillKey(h.employeeId)===empKey),u=t.filter(t=>t.employeeId===e.id||t.employeeName===`${e.firstName} ${e.lastName}`),d=u.filter(e=>e.status===`Completed`).length,f=u.filter(e=>e.status===`In Progress`||e.status===`Under Review`).length,p=u.filter(e=>e.certificateId).length;return(0,P.jsxs)(`div`,{className:`w-full p-6 space-y-6`,children:[(0,P.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,P.jsxs)(`button`,{onClick:n,className:`flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 bg-white border border-slate-200 px-3.5 py-1.5 rounded-lg shadow-sm transition-colors`,children:[(0,P.jsx)(S,{className:`w-4 h-4`}),(0,P.jsx)(`span`,{children:`Back to Employees`})]}),(0,P.jsx)(`button`,{onClick:()=>alert(`Profile edit mode for ${e.firstName} ${e.lastName}`),className:`bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-lg text-sm font-semibold shadow-sm transition-colors`,children:`Edit Profile`})]}),(0,P.jsxs)(`div`,{className:`grid grid-cols-1 lg:grid-cols-4 gap-6 items-start`,children:[(0,P.jsxs)(`div`,{className:`lg:col-span-1 bg-white border border-slate-200 rounded-xl p-6 space-y-6 shadow-sm`,children:[(0,P.jsxs)(`div`,{className:`text-center relative`,children:[(0,P.jsx)(`span`,{className:`absolute top-0 left-0 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs px-2 py-0.5 rounded font-medium`,children:`IN`}),(0,P.jsxs)(`div`,{className:`w-24 h-24 bg-slate-100 rounded-full mx-auto flex items-center justify-center text-3xl font-bold text-slate-700 shadow-inner mt-2`,children:[e.firstName[0],e.lastName[0]]}),(0,P.jsxs)(`h2`,{className:`text-lg font-bold text-slate-900 mt-4`,children:[e.firstName,` `,e.lastName]}),(0,P.jsx)(`div`,{className:`text-xs text-slate-500`,children:e.designation}),(0,P.jsx)(`div`,{className:`inline-block mt-1 bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded text-xs font-semibold`,children:e.employeeRole}),(0,P.jsx)(`button`,{onClick:()=>alert(`Password reset instructions sent to ${e.email}`),className:`mt-4 w-full bg-blue-50 hover:bg-blue-100 text-blue-600 border border-blue-200 rounded-lg py-2 text-xs font-bold transition-colors`,children:`Send Password to Employee`})]}),(0,P.jsxs)(`div`,{className:`border-t border-slate-100 pt-4 space-y-4 text-xs`,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`div`,{className:`text-slate-400 font-medium`,children:`About Me`}),(0,P.jsx)(`div`,{className:`font-semibold text-slate-800 mt-0.5`,children:e.about})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`div`,{className:`text-slate-400 font-medium`,children:`Business Unit`}),(0,P.jsx)(`div`,{className:`font-semibold text-slate-800 mt-0.5`,children:e.businessUnit})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`div`,{className:`text-slate-400 font-medium`,children:`Experience`}),(0,P.jsxs)(`div`,{className:`space-y-1 mt-1`,children:[(0,P.jsxs)(`div`,{className:`flex justify-between`,children:[(0,P.jsx)(`span`,{className:`text-slate-600`,children:`Previous`}),(0,P.jsx)(`span`,{className:`font-semibold text-slate-900`,children:e.experience})]}),(0,P.jsxs)(`div`,{className:`flex justify-between`,children:[(0,P.jsx)(`span`,{className:`text-slate-600`,children:`At CollabCRM Demo Account`}),(0,P.jsx)(`span`,{className:`font-semibold text-slate-900`,children:`20D`})]})]})]}),(0,P.jsxs)("div",{children:[(0,P.jsxs)("div",{className:"flex items-center justify-between gap-2",children:[(0,P.jsxs)("div",{className:"flex items-center gap-1.5",children:[(0,P.jsx)("span",{className:"text-slate-400 font-medium",children:"Skills"}),(0,P.jsx)("span",{className:"text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200",children:empSkillRecs.length})]}),(0,P.jsxs)("div",{className:"flex items-center gap-2",children:[(0,P.jsx)("button",{type:"button",onClick:()=>setSkillHistModal({skillFilter:null}),className:"text-[11px] font-semibold text-purple-700 hover:underline cursor-pointer",children:"History"}),(!isEmpSide&&canManageSkills!==!1&&onManageEmployeeSkill)&&(0,P.jsx)("button",{type:"button",onClick:()=>{setMgrSkillErr("");setMgrSkillId("");setMgrSkillLevel((skillLevels&&skillLevels[0]?.name)||"Beginner");setShowManageSkillModal(!0)},className:"text-[11px] font-bold px-2 py-0.5 rounded bg-purple-50 text-purple-700 border border-purple-200 hover:bg-purple-50 cursor-pointer",children:"+ Manage"})]})]}),(0,P.jsx)("div",{className:"flex flex-wrap gap-1.5 mt-2",children:empSkillRecs.length===0?(0,P.jsx)("span",{className:"text-slate-400 italic text-[11px]",children:"No skills assigned yet."}):empSkillRecs.map((sk,idx)=>{let hasTrainSrc=Boolean(sk.sourceTrainingName||(Array.isArray(sk.sources)&&sk.sources.some(s=>s.trainingId)));return(0,P.jsxs)("button",{type:"button",onClick:()=>setSkillHistModal({skillFilter:sk.skillId||sk.skillName}),title:hasTrainSrc?("Source Training: "+(sk.latestSourceTrainingName||sk.sourceTrainingName)+" • Click to view Skill History"):"Click to view Skill History",className:"inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium border text-left transition-colors cursor-pointer "+(hasTrainSrc?"bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-50":"bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"),children:[(0,P.jsx)("span",{className:"font-semibold",children:sk.skillName}),sk.skillLevel&&(0,P.jsxs)("span",{className:"px-1.5 py-0 rounded text-[10px] font-bold "+(hasTrainSrc?"bg-white text-purple-700 border border-purple-200":"bg-white text-slate-600 border border-slate-200"),children:[sk.skillLevel]}),hasTrainSrc&&(0,P.jsx)("span",{className:"text-[10px] text-purple-600 font-semibold",children:"• Training"})]},sk.skillId||idx)})})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`div`,{className:`text-slate-400 font-medium`,children:`Badges Received`}),(0,P.jsx)(`div`,{className:`text-slate-600 mt-1 italic`,children:e.badges.length>0?e.badges.join(`, `):`No badges received.`})]}),(0,P.jsxs)(`div`,{className:`grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-[11px]`,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`span`,{className:`text-slate-400`,children:`Seating Location`}),(0,P.jsx)(`div`,{className:`font-medium text-slate-800`,children:e.seatingLocation})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`span`,{className:`text-slate-400`,children:`Extension Number`}),(0,P.jsx)(`div`,{className:`font-medium text-slate-800`,children:e.extensionNumber})]})]})]})]}),(0,P.jsxs)(`div`,{className:`lg:col-span-3 space-y-6`,children:[(0,P.jsxs)(`div`,{className:`flex items-center gap-2 border-b border-slate-200 pb-px`,children:[(0,P.jsx)(`button`,{onClick:()=>o(`general`),className:`px-4 py-2.5 text-sm font-bold border-b-2 transition-colors ${a===`general`?`border-blue-600 text-blue-600`:`border-transparent text-slate-500 hover:text-slate-900`}`,children:`General Info`}),(0,P.jsx)(`button`,{onClick:()=>o(`training`),className:`px-4 py-2.5 text-sm font-bold border-b-2 transition-colors ${a===`training`?`border-blue-600 text-blue-600`:`border-transparent text-slate-500 hover:text-slate-900`}`,children:`Training History`}),(0,P.jsx)(`button`,{onClick:()=>o(`certificates`),className:`px-4 py-2.5 text-sm font-bold border-b-2 transition-colors ${a===`certificates`?`border-blue-600 text-blue-600`:`border-transparent text-slate-500 hover:text-slate-900`}`,children:`My Certificates`})]}),a===`certificates`?(0,P.jsx)(Qe,{issuedCertificates:dynCerts,employee:e}):a===`general`?(0,P.jsxs)(`div`,{className:`space-y-6`,children:[(0,P.jsxs)(`div`,{className:`grid grid-cols-1 md:grid-cols-3 gap-4 bg-white border border-slate-200 rounded-xl p-5 shadow-sm`,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsxs)(`div`,{className:`flex items-center gap-1.5 text-xs text-slate-400 font-medium`,children:[(0,P.jsx)(Se,{className:`w-3.5 h-3.5`}),(0,P.jsx)(`span`,{children:`Email Address`})]}),(0,P.jsxs)(`div`,{className:`flex items-center justify-between mt-1 text-sm font-bold text-slate-900`,children:[(0,P.jsx)(`span`,{children:e.email}),(0,P.jsx)(`button`,{className:`text-slate-400 hover:text-slate-700`,title:`Copy email`,children:(0,P.jsx)(ue,{className:`w-3.5 h-3.5`})})]})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`div`,{className:`text-xs text-slate-400 font-medium`,children:`Employee Code`}),(0,P.jsx)(`div`,{className:`text-sm font-bold text-slate-900 mt-1 font-mono`,children:e.code})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`div`,{className:`text-xs text-slate-400 font-medium`,children:`Reporting Manager`}),(0,P.jsxs)(`div`,{className:`flex items-center gap-2 mt-1`,children:[(0,P.jsx)(`div`,{className:`w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-700`,children:e.reportingTo[0]}),(0,P.jsx)(`span`,{className:`text-sm font-bold text-slate-900`,children:e.reportingTo})]})]})]}),(0,P.jsxs)(`div`,{className:`bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4`,children:[(0,P.jsx)(`h3`,{className:`text-xs font-bold uppercase tracking-wider text-slate-400`,children:`Personal Information`}),(0,P.jsxs)(`div`,{className:`grid grid-cols-2 md:grid-cols-4 gap-4 text-sm`,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`span`,{className:`text-xs text-slate-400 block`,children:`First Name`}),(0,P.jsx)(`span`,{className:`font-semibold text-slate-900`,children:e.firstName})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`span`,{className:`text-xs text-slate-400 block`,children:`Middle Name`}),(0,P.jsx)(`span`,{className:`font-semibold text-slate-900`,children:`-`})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`span`,{className:`text-xs text-slate-400 block`,children:`Last Name`}),(0,P.jsx)(`span`,{className:`font-semibold text-slate-900`,children:e.lastName})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`span`,{className:`text-xs text-slate-400 block`,children:`Gender`}),(0,P.jsx)(`span`,{className:`font-semibold text-slate-900`,children:e.gender})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`span`,{className:`text-xs text-slate-400 block`,children:`Date of Birth`}),(0,P.jsx)(`span`,{className:`font-semibold text-slate-900`,children:e.dateOfBirth})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`span`,{className:`text-xs text-slate-400 block`,children:`Blood Group`}),(0,P.jsx)(`span`,{className:`font-semibold text-slate-900`,children:e.bloodGroup})]})]})]}),(0,P.jsxs)(`div`,{className:`bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4`,children:[(0,P.jsx)(`h3`,{className:`text-xs font-bold uppercase tracking-wider text-slate-400`,children:`Employee Information`}),(0,P.jsxs)(`div`,{className:`grid grid-cols-2 md:grid-cols-3 gap-4 text-sm`,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`span`,{className:`text-xs text-slate-400 block`,children:`Business Unit`}),(0,P.jsx)(`span`,{className:`font-semibold text-slate-900`,children:e.businessUnit})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`span`,{className:`text-xs text-slate-400 block`,children:`Employee Code`}),(0,P.jsx)(`span`,{className:`font-semibold text-slate-900 font-mono`,children:e.code})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`span`,{className:`text-xs text-slate-400 block`,children:`Status`}),(0,P.jsxs)(`span`,{className:`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200 mt-1`,children:[(0,P.jsx)(`span`,{className:`w-1.5 h-1.5 rounded-full bg-emerald-500`}),e.status]})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`span`,{className:`text-xs text-slate-400 block`,children:`Department`}),(0,P.jsx)(`span`,{className:`font-semibold text-slate-900`,children:e.department})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`span`,{className:`text-xs text-slate-400 block`,children:`Designation`}),(0,P.jsx)(`span`,{className:`font-semibold text-slate-900`,children:e.designation})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`span`,{className:`text-xs text-slate-400 block`,children:`Reporting to`}),(0,P.jsx)(`span`,{className:`font-semibold text-slate-900`,children:e.reportingTo})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`span`,{className:`text-xs text-slate-400 block`,children:`Employee Type`}),(0,P.jsx)(`span`,{className:`font-semibold text-slate-900`,children:e.employeeType})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`span`,{className:`text-xs text-slate-400 block`,children:`Biometric ID`}),(0,P.jsx)(`span`,{className:`font-semibold text-slate-900 font-mono`,children:e.biometricId})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`span`,{className:`text-xs text-slate-400 block`,children:`Active Shift`}),(0,P.jsx)(`span`,{className:`font-semibold text-slate-900`,children:e.activeShift})]})]})]}),(0,P.jsxs)(`div`,{className:`bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4`,children:[(0,P.jsx)(`h3`,{className:`text-xs font-bold uppercase tracking-wider text-slate-400`,children:`Employee Role Information`}),(0,P.jsxs)(`div`,{className:`grid grid-cols-1 md:grid-cols-3 gap-4 text-sm`,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`span`,{className:`text-xs text-slate-400 block`,children:`Employee Role`}),(0,P.jsx)(`span`,{className:`font-semibold text-slate-900`,children:e.employeeRole})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`span`,{className:`text-xs text-slate-400 block`,children:`Expiry Date`}),(0,P.jsx)(`span`,{className:`font-semibold text-slate-900`,children:`-`})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`span`,{className:`text-xs text-slate-400 block`,children:`Remarks`}),(0,P.jsx)(`span`,{className:`font-semibold text-slate-900`,children:`-`})]})]})]}),(0,P.jsxs)(`div`,{className:`bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4`,children:[(0,P.jsx)(`h3`,{className:`text-xs font-bold uppercase tracking-wider text-slate-400`,children:`Company Contact Information`}),(0,P.jsxs)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 gap-4 text-sm`,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`span`,{className:`text-xs text-slate-400 block`,children:`Company Email Address`}),(0,P.jsx)(`span`,{className:`font-semibold text-slate-900`,children:e.companyEmail})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`span`,{className:`text-xs text-slate-400 block`,children:`Company Mobile Number`}),(0,P.jsx)(`span`,{className:`font-semibold text-slate-900`,children:e.companyMobile})]})]})]})]}):(0,P.jsxs)(`div`,{className:`space-y-6`,children:[(0,P.jsxs)(`div`,{className:`grid grid-cols-1 sm:grid-cols-4 gap-4`,children:[(0,P.jsxs)(`div`,{className:`bg-white border border-slate-200 rounded-xl p-4 shadow-sm`,children:[(0,P.jsx)(`div`,{className:`text-xs font-medium text-slate-400`,children:`TOTAL ENROLLED`}),(0,P.jsx)(`div`,{className:`text-2xl font-bold text-slate-900 mt-1`,children:Math.max(3,u.length)})]}),(0,P.jsxs)(`div`,{className:`bg-white border border-slate-200 rounded-xl p-4 shadow-sm`,children:[(0,P.jsx)(`div`,{className:`text-xs font-medium text-slate-400`,children:`COMPLETED & PASSED`}),(0,P.jsx)(`div`,{className:`text-2xl font-bold text-emerald-600 mt-1`,children:d||2})]}),(0,P.jsxs)(`div`,{className:`bg-white border border-slate-200 rounded-xl p-4 shadow-sm`,children:[(0,P.jsx)(`div`,{className:`text-xs font-medium text-slate-400`,children:`IN PROGRESS`}),(0,P.jsx)(`div`,{className:`text-2xl font-bold text-blue-600 mt-1`,children:f||1})]}),(0,P.jsxs)(`div`,{className:`bg-white border border-slate-200 rounded-xl p-4 shadow-sm`,children:[(0,P.jsx)(`div`,{className:`text-xs font-medium text-slate-400`,children:`CERTIFICATES EARNED`}),(0,P.jsx)(`div`,{className:`text-2xl font-bold text-purple-600 mt-1`,children:p||2})]})]}),(0,P.jsxs)(`div`,{className:`bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden`,children:[(0,P.jsxs)(`div`,{className:`p-4 border-b border-slate-200 flex items-center justify-between`,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`h3`,{className:`font-bold text-slate-900 text-base`,children:`Training History`}),(0,P.jsx)(`p`,{className:`text-xs text-slate-500 mt-0.5`,children:`Completed and approved training records. Click any record to inspect complete training details.`})]}),(0,P.jsxs)(`button`,{onClick:r,className:`flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg text-xs font-medium shadow-sm transition-colors`,children:[(0,P.jsx)(j,{className:`w-3.5 h-3.5`}),(0,P.jsx)(`span`,{children:`Assign New Training`})]})]}),(0,P.jsx)(`div`,{className:`overflow-x-auto`,children:(0,P.jsxs)(`table`,{className:`w-full text-left border-collapse`,children:[(0,P.jsx)(`thead`,{children:(0,P.jsxs)(`tr`,{className:`border-b border-slate-200 text-xs font-semibold text-slate-500 bg-slate-50/50`,children:[(0,P.jsx)(`th`,{className:`py-3 px-4 w-16`,children:`No.`}),(0,P.jsx)(`th`,{className:`py-3 px-4`,children:`Training Name`}),(0,P.jsx)(`th`,{className:`py-3 px-4`,children:`Assigned By`}),(0,P.jsx)(`th`,{className:`py-3 px-4`,children:`Assigned Date`}),(0,P.jsx)(`th`,{className:`py-3 px-4`,children:`Completion Date`}),(0,P.jsx)(`th`,{className:`py-3 px-4`,children:`Score`}),(0,P.jsx)(`th`,{className:`py-3 px-4`,children:`Status`}),(0,P.jsx)(`th`,{className:`py-3 px-4 text-right`,children:`Actions`})]})}),(0,P.jsx)(`tbody`,{className:`divide-y divide-slate-100 text-sm`,children:[{id:`h-1`,programmeName:`Enterprise Security & Data Protection Compliance`,assignedBy:`Isha Patel`,assignedDate:`05-Jan-2026`,completionDate:`20-Jan-2026`,score:94,status:`Completed`,certificateId:`TRN-2026-0001`},{id:`h-2`,programmeName:`Executive Leadership & Strategic Governance`,assignedBy:`Isha Patel`,assignedDate:`10-Feb-2026`,completionDate:`25-Feb-2026`,score:98,status:`Completed`,certificateId:`TRN-2026-0004`},{id:`h-3`,programmeName:`CollabCRM Recruitment & Client Portal Workflows`,assignedBy:`Isha Patel`,assignedDate:`01-Mar-2026`,completionDate:``,score:0,status:`In Progress`,certificateId:``}].filter(row=>!isEmpSide||!(progs||[]).some(p=>(p.publicationStatus||p.status)===`Archived`&&p.name&&p.name.toLowerCase()===row.programmeName.toLowerCase())).map((e,t)=>(0,P.jsxs)(`tr`,{className:`hover:bg-slate-50/80 transition-colors`,children:[(0,P.jsx)(`td`,{className:`py-3 px-4 text-slate-500 tabular-nums`,children:t+1}),(0,P.jsx)(`td`,{className:`py-3 px-4 font-normal text-slate-700`,children:e.programmeName}),(0,P.jsx)(`td`,{className:`py-3 px-4 text-slate-600 text-xs`,children:e.assignedBy}),(0,P.jsx)(`td`,{className:`py-3 px-4 text-slate-600 text-xs tabular-nums`,children:e.assignedDate}),(0,P.jsx)(`td`,{className:`py-3 px-4 text-slate-600 text-xs tabular-nums`,children:e.completionDate||`-`}),(0,P.jsx)(`td`,{className:`py-3 px-4`,children:e.score?(0,P.jsxs)(`span`,{className:`font-mono font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded text-xs`,children:[e.score,`%`]}):`-`}),(0,P.jsx)(`td`,{className:`py-3 px-4`,children:(0,P.jsxs)(`span`,{className:`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border whitespace-nowrap ${e.status===`Completed`?`bg-emerald-50 text-emerald-700 border-emerald-200`:e.status===`In Progress`?`bg-blue-50 text-blue-700 border-blue-200`:`bg-rose-50 text-rose-700 border-rose-200`}`,children:[e.status===`Completed`&&(0,P.jsx)(se,{className:`w-3 h-3 text-emerald-500`}),e.status]})}),(0,P.jsx)(`td`,{className:`py-3 px-4 text-right`,children:(0,P.jsx)(`button`,{type:`button`,onClick:()=>{i&&i(e.programmeName)},className:`p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors cursor-pointer`,title:`View Training Details`,children:(0,P.jsx)(pe,{className:`w-4 h-4`})})})]},e.id))})]})})]})]})]})]}),s&&(0,P.jsx)(Ze,{certificateId:s.id,programmeName:s.programmeName,employeeName:`${e.firstName} ${e.lastName}`,employeeCode:e.code||`EMP-1042`,issueDate:s.issueDate,signatory:"Khushi Bhatt, Head of HR",onClose:()=>c(null)}),
skillHistModal&&(0,P.jsx)("div",{className:"fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4",onClick:()=>setSkillHistModal(null),children:(0,P.jsxs)("div",{className:"bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden border border-purple-200",onClick:ev=>ev.stopPropagation(),children:[(0,P.jsxs)("div",{className:"px-5 py-4 border-b border-purple-200 flex items-center justify-between",style:{backgroundColor:"#faf5ff"},children:[(0,P.jsxs)("div",{children:[(0,P.jsx)("span",{className:"text-[10px] font-bold uppercase tracking-wider text-purple-700",children:"Skill Award History"}),(0,P.jsxs)("h3",{className:"text-sm font-bold text-slate-900",children:[e.firstName," ",e.lastName," — Skill Progression & Sources"]})]}),(0,P.jsx)("button",{type:"button",onClick:()=>setSkillHistModal(null),className:"text-slate-400 hover:text-slate-700 text-sm font-bold px-2 py-1",children:"✕"})]}),(0,P.jsx)("div",{className:"p-5 overflow-y-auto space-y-3 text-xs",style:{maxHeight:"65vh"},children:(()=>{let filtered=skillHistModal.skillFilter?empHistRecs.filter(h=>h.skillId===skillHistModal.skillFilter||h.skillName===skillHistModal.skillFilter):empHistRecs;let matchedSkills=empSkillRecs.filter(sk=>!skillHistModal.skillFilter||sk.skillId===skillHistModal.skillFilter||sk.skillName===skillHistModal.skillFilter);return(0,P.jsxs)(P.Fragment,{children:[matchedSkills.map((sk,i)=>(0,P.jsxs)("div",{className:"p-3 rounded-xl border border-purple-200 bg-purple-50/40 space-y-1.5",children:[(0,P.jsxs)("div",{className:"flex items-center justify-between",children:[(0,P.jsx)("span",{className:"font-bold text-slate-900",children:sk.skillName}),(0,P.jsxs)("span",{className:"px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-white text-purple-700 border border-purple-200",children:["Current Level: ",sk.skillLevel]})]}),sk.sourceTrainingName&&(0,P.jsxs)("div",{className:"text-[11px] text-purple-700",children:["Source Training(s): ",Array.isArray(sk.sources)&&sk.sources.length>0?sk.sources.map(s=>s.trainingName+" ("+s.level+")").join(", "):sk.sourceTrainingName]})]},sk.skillId||i)),filtered.length===0?(0,P.jsx)("div",{className:"p-6 text-center text-slate-500 bg-slate-50 rounded-xl border border-slate-200",children:"No training skill award history recorded for this filter yet."}):filtered.map((h,i)=>(0,P.jsxs)("div",{className:"p-3 rounded-xl border border-slate-200 bg-white space-y-1",children:[(0,P.jsxs)("div",{className:"flex items-center justify-between gap-2",children:[(0,P.jsxs)("span",{className:"font-bold text-slate-900",children:[h.skillName," • ",h.awardedSkillLevel]}),(0,P.jsx)("span",{className:"px-2 py-0.5 rounded-full text-[10px] font-bold border "+(h.outcome==="upgraded"?"bg-purple-50 text-purple-700 border-purple-200":h.outcome==="retained"?"bg-amber-50 text-amber-800 border-amber-200":"bg-emerald-50 text-emerald-700 border-emerald-200"),children:h.outcome==="upgraded"?("Upgraded ("+h.previousLevel+" → "+h.finalLevel+")"):h.outcome==="retained"?("Retained Higher Level ("+h.finalLevel+")"):h.outcome==="added"?("Added ("+h.finalLevel+")"):h.finalLevel})]}),(0,P.jsxs)("div",{className:"text-[11px] text-slate-600",children:["Source Training: ",(0,P.jsx)("strong",{children:h.sourceTrainingName||"Manual Update"})]}),(0,P.jsxs)("div",{className:"text-[10px] text-slate-400 flex flex-wrap gap-3",children:[(0,P.jsxs)("span",{children:["Awarded: ",h.awardedDate]}),(0,P.jsxs)("span",{children:["Created: ",String(h.createdDate||h.awardedDate).slice(0,10)]}),(0,P.jsxs)("span",{children:["Updated: ",String(h.updatedDate||h.awardedDate).slice(0,10)]})]})]},h.id||i))]})})()}),(0,P.jsx)("div",{className:"px-5 py-3 bg-slate-50 border-t border-slate-100 flex justify-end",children:(0,P.jsx)("button",{type:"button",onClick:()=>setSkillHistModal(null),className:"px-4 py-1.5 rounded-lg border border-slate-300 bg-white text-slate-700 font-semibold text-xs",children:"Close"})})]})}),
showManageSkillModal&&(!isEmpSide&&canManageSkills!==!1)&&(0,P.jsx)("div",{className:"fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4",onClick:()=>setShowManageSkillModal(!1),children:(0,P.jsxs)("div",{className:"bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-purple-200",onClick:ev=>ev.stopPropagation(),children:[(0,P.jsxs)("div",{className:"px-5 py-4 border-b border-purple-200 flex items-center justify-between",style:{backgroundColor:"#faf5ff"},children:[(0,P.jsx)("h3",{className:"text-sm font-bold text-slate-900",children:"Manage Employee Skills — "+e.firstName+" "+e.lastName}),(0,P.jsx)("button",{type:"button",onClick:()=>setShowManageSkillModal(!1),className:"text-slate-400 hover:text-slate-700 text-sm font-bold px-2",children:"✕"})]}),(0,P.jsxs)("div",{className:"p-5 space-y-4 text-xs",children:[mgrSkillErr&&(0,P.jsx)("div",{className:"bg-rose-50 border border-rose-200 text-rose-700 font-semibold px-3 py-2 rounded-lg",children:mgrSkillErr}),(0,P.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[(0,P.jsxs)("select",{value:mgrSkillId,onChange:ev=>setMgrSkillId(ev.target.value),className:"bg-white border border-purple-200 rounded-lg px-3 py-2 text-xs",children:[(0,P.jsx)("option",{value:"",children:"Select Skill..."}),(Array.isArray(skillsConfig)?skillsConfig:DEFAULT_SKILLS_SEED).filter(sk=>sk.active!==!1).map(sk=>(0,P.jsx)("option",{value:sk.id,children:sk.name},sk.id))]}),(0,P.jsxs)("select",{value:mgrSkillLevel,onChange:ev=>setMgrSkillLevel(ev.target.value),className:"bg-white border border-purple-200 rounded-lg px-3 py-2 text-xs",children:(Array.isArray(skillLevels)&&skillLevels.length>0?skillLevels:DEFAULT_SKILL_LEVELS_SEED).map(lv=>(0,P.jsx)("option",{value:lv.name,children:lv.name},lv.id||lv.name))})]}),(0,P.jsx)("div",{className:"flex justify-end",children:(0,P.jsx)("button",{type:"button",onClick:async()=>{setMgrSkillErr("");if(!mgrSkillId){setMgrSkillErr("Please select a skill.");return;}let res=await onManageEmployeeSkill({action:"add",employeeId:empKey,skillId:mgrSkillId,skillLevel:mgrSkillLevel});if(res&&res.success===!1){setMgrSkillErr(res.message||"Could not add skill.")}else{setMgrSkillId("");}},style:{backgroundColor:"#7c3aed"},className:"px-4 py-1.5 rounded-lg text-white font-bold text-xs cursor-pointer",children:"Add Skill to Profile"})}),(0,P.jsx)("div",{className:"border-t border-slate-100 pt-3 space-y-2 max-h-56 overflow-y-auto",children:empSkillRecs.map((sk,idx)=>(0,P.jsxs)("div",{className:"flex items-center justify-between gap-2 p-2.5 bg-slate-50 rounded-lg border border-slate-200",children:[(0,P.jsxs)("div",{children:[(0,P.jsx)("div",{className:"font-bold text-slate-900",children:sk.skillName}),sk.sourceTrainingName&&(0,P.jsxs)("div",{className:"text-[10px] text-purple-700",children:["Source: ",sk.sourceTrainingName]})]}),(0,P.jsxs)("div",{className:"flex items-center gap-2",children:[(0,P.jsx)("select",{value:sk.skillLevel,onChange:async ev=>{await onManageEmployeeSkill({action:"update",employeeId:empKey,skillId:sk.skillId,skillLevel:ev.target.value})},className:"bg-white border border-slate-300 rounded px-2 py-1 text-[11px]",children:(Array.isArray(skillLevels)&&skillLevels.length>0?skillLevels:DEFAULT_SKILL_LEVELS_SEED).map(lv=>(0,P.jsx)("option",{value:lv.name,children:lv.name},lv.id||lv.name))}),(0,P.jsx)("button",{type:"button",onClick:async()=>{await onManageEmployeeSkill({action:"remove",employeeId:empKey,skillId:sk.skillId})},className:"text-rose-600 hover:bg-rose-50 px-2 py-1 rounded text-[11px] font-semibold cursor-pointer",children:"Remove"})]})]},sk.skillId||idx))})]}),(0,P.jsx)("div",{className:"px-5 py-3 bg-slate-50 border-t border-slate-100 flex justify-end",children:(0,P.jsx)("button",{type:"button",onClick:()=>setShowManageSkillModal(!1),className:"px-4 py-1.5 rounded-lg border border-slate-300 bg-white text-slate-700 font-semibold text-xs",children:"Done"})})]})})]})}
function et({assignments:e,onOpenReviewQueue:t,onEvaluateSubmission:n}){let r=e.filter(e=>e.status===`Under Review`||e.status===`Completed`);return(0,P.jsxs)(`div`,{className:`p-6 space-y-6 max-w-[1600px] mx-auto w-full`,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`h1`,{className:`text-xl font-bold text-slate-900`,children:`Dashboard`}),(0,P.jsx)(`p`,{className:`text-xs text-slate-500 mt-0.5`,children:`Real-time overview of enterprise trainings, assignments, and employee compliance.`})]}),(0,P.jsxs)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4`,children:[(0,P.jsxs)(`div`,{className:`bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2`,children:[(0,P.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,P.jsx)(`span`,{className:`text-xs font-bold text-slate-400 uppercase tracking-wide`,children:`TOTAL TRAININGS`}),(0,P.jsx)(te,{className:`w-5 h-5 text-blue-600`})]}),(0,P.jsx)(`div`,{className:`text-3xl font-bold text-slate-900 tabular-nums`,children:`12`}),(0,P.jsxs)(`div`,{className:`flex items-center gap-2 text-xs pt-1`,children:[(0,P.jsx)(`span`,{className:`bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-medium`,children:`10 Published`}),(0,P.jsx)(`span`,{className:`bg-amber-50 text-amber-700 px-2 py-0.5 rounded font-medium`,children:`1 Draft`})]})]}),(0,P.jsxs)(`div`,{className:`bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2`,children:[(0,P.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,P.jsx)(`span`,{className:`text-xs font-bold text-slate-400 uppercase tracking-wide`,children:`TOTAL ASSIGNMENTS`}),(0,P.jsx)(Pe,{className:`w-5 h-5 text-indigo-600`})]}),(0,P.jsx)(`div`,{className:`text-3xl font-bold text-slate-900 tabular-nums`,children:`41`}),(0,P.jsxs)(`div`,{className:`flex items-center gap-2 text-xs pt-1`,children:[(0,P.jsx)(`span`,{className:`bg-blue-50 text-blue-700 px-2 py-0.5 rounded font-medium`,children:`15 In Progress`}),(0,P.jsx)(`span`,{className:`bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium`,children:`10 Not Started`})]})]}),(0,P.jsxs)(`div`,{className:`bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2`,children:[(0,P.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,P.jsx)(`span`,{className:`text-xs font-bold text-slate-400 uppercase tracking-wide`,children:`COMPLETION RATE`}),(0,P.jsx)(T,{className:`w-5 h-5 text-emerald-600`})]}),(0,P.jsx)(`div`,{className:`text-3xl font-bold text-slate-900 tabular-nums`,children:`22%`}),(0,P.jsxs)(`div`,{className:`flex items-center gap-2 text-xs pt-1`,children:[(0,P.jsx)(`span`,{className:`bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-medium`,children:`9 Approved`}),(0,P.jsx)(`span`,{className:`bg-blue-50 text-blue-700 px-2 py-0.5 rounded font-medium`,children:`19 In Progress`})]})]}),(0,P.jsxs)(`div`,{className:`bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2`,children:[(0,P.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,P.jsx)(`span`,{className:`text-xs font-bold text-slate-400 uppercase tracking-wide`,children:`CERTIFICATES EARNED`}),(0,P.jsx)(C,{className:`w-5 h-5 text-purple-600`})]}),(0,P.jsx)(`div`,{className:`text-3xl font-bold text-slate-900 tabular-nums`,children:`9`}),(0,P.jsxs)(`div`,{className:`flex items-center gap-2 text-xs pt-1`,children:[(0,P.jsxs)(`span`,{className:`bg-amber-50 text-amber-700 px-2 py-0.5 rounded font-medium flex items-center gap-1`,children:[(0,P.jsx)(Ve,{className:`w-3 h-3 text-amber-600`}),`5 Overdue`]}),(0,P.jsx)(`span`,{className:`bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-medium`,children:`100% Verified`})]})]})]}),(0,P.jsxs)(`div`,{className:`grid grid-cols-1 lg:grid-cols-2 gap-6`,children:[(0,P.jsxs)(`div`,{className:`bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4`,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`h2`,{className:`text-base font-bold text-slate-900`,children:`Employee Lifecycle Distribution`}),(0,P.jsx)(`p`,{className:`text-xs text-slate-500`,children:`Real-time breakdown of current assignments by lifecycle status`})]}),(0,P.jsxs)(`div`,{className:`flex flex-col sm:flex-row items-center justify-around gap-6 py-4`,children:[(0,P.jsxs)(`div`,{className:`relative w-44 h-44 rounded-full border-8 border-slate-100 flex items-center justify-center shadow-inner`,children:[(0,P.jsx)(`div`,{className:`absolute inset-0 rounded-full border-8 border-emerald-500 border-t-transparent -rotate-45`}),(0,P.jsx)(`div`,{className:`absolute inset-0 rounded-full border-8 border-blue-500 border-transparent rotate-45`}),(0,P.jsx)(`div`,{className:`absolute inset-0 rounded-full border-8 border-rose-500 border-transparent rotate-90`}),(0,P.jsxs)(`div`,{className:`text-center z-10`,children:[(0,P.jsx)(`div`,{className:`text-2xl font-black text-slate-900`,children:`41`}),(0,P.jsx)(`div`,{className:`text-[11px] font-bold uppercase tracking-wide text-slate-400`,children:`EMPLOYEES`})]})]}),(0,P.jsxs)(`div`,{className:`space-y-3 text-sm`,children:[(0,P.jsxs)(`div`,{className:`flex items-center justify-between gap-6`,children:[(0,P.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,P.jsx)(`span`,{className:`w-3 h-3 rounded-full bg-emerald-500`}),(0,P.jsx)(`span`,{className:`text-slate-700 font-medium`,children:`Completed`})]}),(0,P.jsx)(`span`,{className:`font-bold text-slate-900 tabular-nums`,children:`9 (22%)`})]}),(0,P.jsxs)(`div`,{className:`flex items-center justify-between gap-6`,children:[(0,P.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,P.jsx)(`span`,{className:`w-3 h-3 rounded-full bg-blue-500`}),(0,P.jsx)(`span`,{className:`text-slate-700 font-medium`,children:`In Progress`})]}),(0,P.jsx)(`span`,{className:`font-bold text-slate-900 tabular-nums`,children:`19 (46%)`})]}),(0,P.jsxs)(`div`,{className:`flex items-center justify-between gap-6`,children:[(0,P.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,P.jsx)(`span`,{className:`w-3 h-3 rounded-full bg-rose-500`}),(0,P.jsx)(`span`,{className:`text-slate-700 font-medium`,children:`Overdue`})]}),(0,P.jsx)(`span`,{className:`font-bold text-slate-900 tabular-nums`,children:`5 (12%)`})]}),(0,P.jsxs)(`div`,{className:`flex items-center justify-between gap-6`,children:[(0,P.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,P.jsx)(`span`,{className:`w-3 h-3 rounded-full bg-slate-400`}),(0,P.jsx)(`span`,{className:`text-slate-700 font-medium`,children:`Not Started`})]}),(0,P.jsx)(`span`,{className:`font-bold text-slate-900 tabular-nums`,children:`10 (24%)`})]})]})]})]}),(0,P.jsxs)(`div`,{className:`bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-5`,children:[(0,P.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`h2`,{className:`text-base font-bold text-slate-900`,children:`Participation and Completion`}),(0,P.jsx)(`p`,{className:`text-xs text-slate-500`,children:`Progress distribution and average scores by department`})]}),(0,P.jsx)(`span`,{className:`text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded`,children:`Target: 80%`})]}),(0,P.jsxs)(`div`,{className:`space-y-4 pt-2 text-sm`,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsxs)(`div`,{className:`flex justify-between text-xs font-semibold mb-1`,children:[(0,P.jsx)(`span`,{className:`text-slate-800`,children:`Engineering`}),(0,P.jsx)(`span`,{className:`text-slate-500 tabular-nums`,children:`1/5 Completed (20%)`})]}),(0,P.jsx)(`div`,{className:`w-full bg-slate-100 h-2.5 rounded-full overflow-hidden`,children:(0,P.jsx)(`div`,{className:`bg-blue-600 h-full rounded-full`,style:{width:`20%`}})})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsxs)(`div`,{className:`flex justify-between text-xs font-semibold mb-1`,children:[(0,P.jsx)(`span`,{className:`text-slate-800`,children:`Recruitment & HR`}),(0,P.jsx)(`span`,{className:`text-slate-500 tabular-nums`,children:`0/1 Completed (0%)`})]}),(0,P.jsx)(`div`,{className:`w-full bg-slate-100 h-2.5 rounded-full overflow-hidden`,children:(0,P.jsx)(`div`,{className:`bg-blue-600 h-full rounded-full`,style:{width:`5%`}})})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsxs)(`div`,{className:`flex justify-between text-xs font-semibold mb-1`,children:[(0,P.jsx)(`span`,{className:`text-slate-800`,children:`Business Analysis`}),(0,P.jsx)(`span`,{className:`text-slate-500 tabular-nums`,children:`1/2 Completed (50%)`})]}),(0,P.jsx)(`div`,{className:`w-full bg-slate-100 h-2.5 rounded-full overflow-hidden`,children:(0,P.jsx)(`div`,{className:`bg-blue-600 h-full rounded-full`,style:{width:`50%`}})})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsxs)(`div`,{className:`flex justify-between text-xs font-semibold mb-1`,children:[(0,P.jsx)(`span`,{className:`text-slate-800`,children:`Sales & BD`}),(0,P.jsx)(`span`,{className:`text-slate-500 tabular-nums`,children:`0/1 Completed (0%)`})]}),(0,P.jsx)(`div`,{className:`w-full bg-slate-100 h-2.5 rounded-full overflow-hidden`,children:(0,P.jsx)(`div`,{className:`bg-blue-600 h-full rounded-full`,style:{width:`5%`}})})]})]})]})]}),(0,P.jsxs)(`div`,{className:`bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden`,children:[
(0,P.jsx)(`div`,{className:`p-5 border-b border-slate-200 flex flex-wrap items-center justify-between gap-4 bg-gradient-to-r from-slate-50 to-white`,children:
(0,P.jsxs)(`div`,{children:[
  (0,P.jsxs)(`div`,{className:`flex items-center gap-2`,children:[
    (0,P.jsx)(`div`,{className:`w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse`}),
    (0,P.jsx)(`h2`,{className:`font-bold text-slate-900 text-base`,children:`Training Performance & Assessment Analytics`})
  ]}),
  (0,P.jsx)(`p`,{className:`text-xs text-slate-500 mt-0.5`,children:`Real-time employee mastery, completion velocity, and assessment benchmark distribution`})
]})
}),
(0,P.jsxs)(`div`,{className:`p-6 grid grid-cols-1 lg:grid-cols-3 gap-6`,children:[
  (0,P.jsxs)(`div`,{className:`lg:col-span-2 space-y-4`,children:[
    (0,P.jsxs)(`div`,{className:`flex items-center justify-between`,children:[
      (0,P.jsx)(`h3`,{className:`text-xs font-bold text-slate-600 uppercase tracking-wider`,children:`Top Trainings Completion & Pass Rates`}),
      (0,P.jsx)(`span`,{className:`text-xs text-blue-600 font-semibold`,children:`Average Score: 93.8%`})
    ]}),
    (0,P.jsxs)(`div`,{className:`space-y-3`,children:[
      (0,P.jsxs)(`div`,{className:`p-3 bg-slate-50/70 border border-slate-100 rounded-lg hover:border-blue-200 transition-colors`,children:[
        (0,P.jsxs)(`div`,{className:`flex justify-between items-center mb-1.5`,children:[
          (0,P.jsxs)(`div`,{className:`flex items-center gap-2`,children:[
            (0,P.jsx)(`span`,{className:`font-semibold text-xs text-slate-800`,children:`Enterprise Security & Data Protection Compliance`}),
            (0,P.jsx)(`span`,{className:`text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-100 text-blue-800`,children:`Security`})
          ]}),
          (0,P.jsx)(`span`,{className:`text-xs font-bold text-emerald-600`,children:`96% Pass Rate`})
        ]}),
        (0,P.jsx)(`div`,{className:`w-full bg-slate-200 h-2.5 rounded-full overflow-hidden`,children:(0,P.jsx)(`div`,{className:`bg-gradient-to-r from-blue-500 to-indigo-600 h-2.5 rounded-full`,style:{width:`96%`}})}),
        (0,P.jsxs)(`div`,{className:`flex justify-between text-[11px] text-slate-500 mt-1`,children:[
          (0,P.jsx)(`span`,{children:`48 Employees Enrolled`}),
          (0,P.jsx)(`span`,{children:`46 Certified • Avg. 94%`})
        ]})
      ]}),
      (0,P.jsxs)(`div`,{className:`p-3 bg-slate-50/70 border border-slate-100 rounded-lg hover:border-blue-200 transition-colors`,children:[
        (0,P.jsxs)(`div`,{className:`flex justify-between items-center mb-1.5`,children:[
          (0,P.jsxs)(`div`,{className:`flex items-center gap-2`,children:[
            (0,P.jsx)(`span`,{className:`font-semibold text-xs text-slate-800`,children:`API Security & OAuth2 Best Practices`}),
            (0,P.jsx)(`span`,{className:`text-[10px] font-bold px-1.5 py-0.5 rounded bg-purple-50 text-purple-700`,children:`Engineering`})
          ]}),
          (0,P.jsx)(`span`,{className:`text-xs font-bold text-emerald-600`,children:`92% Pass Rate`})
        ]}),
        (0,P.jsx)(`div`,{className:`w-full bg-slate-200 h-2.5 rounded-full overflow-hidden`,children:(0,P.jsx)(`div`,{className:`bg-gradient-to-r from-indigo-500 to-purple-600 h-2.5 rounded-full`,style:{width:`92%`}})}),
        (0,P.jsxs)(`div`,{className:`flex justify-between text-[11px] text-slate-500 mt-1`,children:[
          (0,P.jsx)(`span`,{children:`36 Employees Enrolled`}),
          (0,P.jsx)(`span`,{children:`33 Certified • Avg. 91%`})
        ]})
      ]}),
      (0,P.jsxs)(`div`,{className:`p-3 bg-slate-50/70 border border-slate-100 rounded-lg hover:border-blue-200 transition-colors`,children:[
        (0,P.jsxs)(`div`,{className:`flex justify-between items-center mb-1.5`,children:[
          (0,P.jsxs)(`div`,{className:`flex items-center gap-2`,children:[
            (0,P.jsx)(`span`,{className:`font-semibold text-xs text-slate-800`,children:`Executive Leadership & Strategic Governance`}),
            (0,P.jsx)(`span`,{className:`text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-800`,children:`Leadership`})
          ]}),
          (0,P.jsx)(`span`,{className:`text-xs font-bold text-emerald-600`,children:`100% Pass Rate`})
        ]}),
        (0,P.jsx)(`div`,{className:`w-full bg-slate-200 h-2.5 rounded-full overflow-hidden`,children:(0,P.jsx)(`div`,{className:`bg-gradient-to-r from-emerald-500 to-teal-600 h-2.5 rounded-full`,style:{width:`100%`}})}),
        (0,P.jsxs)(`div`,{className:`flex justify-between text-[11px] text-slate-500 mt-1`,children:[
          (0,P.jsx)(`span`,{children:`18 Leaders Enrolled`}),
          (0,P.jsx)(`span`,{children:`18 Certified • Avg. 98%`})
        ]})
      ]}),
      (0,P.jsxs)(`div`,{className:`p-3 bg-slate-50/70 border border-slate-100 rounded-lg hover:border-blue-200 transition-colors`,children:[
        (0,P.jsxs)(`div`,{className:`flex justify-between items-center mb-1.5`,children:[
          (0,P.jsxs)(`div`,{className:`flex items-center gap-2`,children:[
            (0,P.jsx)(`span`,{className:`font-semibold text-xs text-slate-800`,children:`Incident Response & SLA Management`}),
            (0,P.jsx)(`span`,{className:`text-[10px] font-bold px-1.5 py-0.5 rounded bg-sky-100 text-sky-800`,children:`Operations`})
          ]}),
          (0,P.jsx)(`span`,{className:`text-xs font-bold text-emerald-600`,children:`88% Pass Rate`})
        ]}),
        (0,P.jsx)(`div`,{className:`w-full bg-slate-200 h-2.5 rounded-full overflow-hidden`,children:(0,P.jsx)(`div`,{className:`bg-gradient-to-r from-sky-500 to-cyan-600 h-2.5 rounded-full`,style:{width:`88%`}})}),
        (0,P.jsxs)(`div`,{className:`flex justify-between text-[11px] text-slate-500 mt-1`,children:[
          (0,P.jsx)(`span`,{children:`25 Employees Enrolled`}),
          (0,P.jsx)(`span`,{children:`22 Certified • Avg. 85%`})
        ]})
      ]})
    ]})
  ]}),
  (0,P.jsxs)(`div`,{className:`space-y-4 border-t lg:border-t-0 lg:border-l border-slate-100 lg:pl-6`,children:[
    (0,P.jsx)(`h3`,{className:`text-xs font-bold text-slate-600 uppercase tracking-wider`,children:`Departmental Training Adoption`}),
    (0,P.jsxs)(`div`,{className:`space-y-3.5`,children:[
      (0,P.jsxs)(`div`,{children:[
        (0,P.jsxs)(`div`,{className:`flex justify-between text-xs font-medium text-slate-700 mb-1`,children:[
          (0,P.jsx)(`span`,{children:`Business Analysis`}),
          (0,P.jsx)(`span`,{className:`font-bold text-slate-900`,children:`94%`})
        ]}),
        (0,P.jsx)(`div`,{className:`w-full bg-slate-100 h-2 rounded-full overflow-hidden`,children:(0,P.jsx)(`div`,{className:`bg-blue-600 h-2 rounded-full`,style:{width:`94%`}})})
      ]}),
      (0,P.jsxs)(`div`,{children:[
        (0,P.jsxs)(`div`,{className:`flex justify-between text-xs font-medium text-slate-700 mb-1`,children:[
          (0,P.jsx)(`span`,{children:`Game`}),
          (0,P.jsx)(`span`,{className:`font-bold text-slate-900`,children:`89%`})
        ]}),
        (0,P.jsx)(`div`,{className:`w-full bg-slate-100 h-2 rounded-full overflow-hidden`,children:(0,P.jsx)(`div`,{className:`bg-indigo-500 h-2 rounded-full`,style:{width:`89%`}})})
      ]}),
      (0,P.jsxs)(`div`,{children:[
        (0,P.jsxs)(`div`,{className:`flex justify-between text-xs font-medium text-slate-700 mb-1`,children:[
          (0,P.jsx)(`span`,{children:`Collab`}),
          (0,P.jsx)(`span`,{className:`font-bold text-slate-900`,children:`92%`})
        ]}),
        (0,P.jsx)(`div`,{className:`w-full bg-slate-100 h-2 rounded-full overflow-hidden`,children:(0,P.jsx)(`div`,{className:`bg-sky-500 h-2 rounded-full`,style:{width:`92%`}})})
      ]}),
      (0,P.jsxs)(`div`,{children:[
        (0,P.jsxs)(`div`,{className:`flex justify-between text-xs font-medium text-slate-700 mb-1`,children:[
          (0,P.jsx)(`span`,{children:`Web`}),
          (0,P.jsx)(`span`,{className:`font-bold text-slate-900`,children:`97%`})
        ]}),
        (0,P.jsx)(`div`,{className:`w-full bg-slate-100 h-2 rounded-full overflow-hidden`,children:(0,P.jsx)(`div`,{className:`bg-emerald-500 h-2 rounded-full`,style:{width:`97%`}})})
      ]}),
      (0,P.jsxs)(`div`,{children:[
        (0,P.jsxs)(`div`,{className:`flex justify-between text-xs font-medium text-slate-700 mb-1`,children:[
          (0,P.jsx)(`span`,{children:`Data analytics`}),
          (0,P.jsx)(`span`,{className:`font-bold text-slate-900`,children:`86%`})
        ]}),
        (0,P.jsx)(`div`,{className:`w-full bg-slate-100 h-2 rounded-full overflow-hidden`,children:(0,P.jsx)(`div`,{className:`bg-amber-500 h-2 rounded-full`,style:{width:`86%`}})})
      ]})
    ]}),
    (0,P.jsxs)(`div`,{className:`p-3 bg-blue-50/60 rounded-lg border border-blue-100 mt-4`,children:[
      (0,P.jsx)(`div`,{className:`text-[11px] font-bold text-blue-900`,children:`Assessment Benchmark Insight`}),
      (0,P.jsx)(`div`,{className:`text-[11px] text-blue-700 mt-0.5`,children:`91% of employees clear their training assessments on the first attempt with average scores exceeding 90%.`})
    ]})
  ]})
]})
]})]})}function getProgrammeEnrolledList(e,t,assignList,cpMap){if(!e)return[];let emps=Array.isArray(t)?t:[];let baseEnrolled=e.id===`prog-1`?[{emp:emps[1]||emps[0],assigned:`2026-10-01`,due:`2026-11-15`,progress:75,status:`In Progress`},{emp:emps[2]||emps[1],assigned:`2026-10-05`,due:`2026-10-25`,progress:0,status:`Not Started`},{emp:emps[3]||emps[2],assigned:`2026-10-02`,due:`2026-10-28`,progress:100,status:`Completed`}]:e.id===`prog-2`?[{emp:emps[1]||emps[0],assigned:`2026-10-10`,due:`2026-11-20`,progress:40,status:`In Progress`},{emp:emps[3]||emps[2],assigned:`2026-09-15`,due:`2026-10-20`,progress:100,status:`Completed`}]:e.id===`prog-3`?[{emp:emps[0],assigned:`2026-09-20`,due:`2026-11-10`,progress:80,status:`In Progress`},{emp:emps[2]||emps[0],assigned:`2026-10-01`,due:`2026-11-25`,progress:100,status:`Completed`},{emp:emps[4]||emps[1],assigned:`2026-10-12`,due:`2026-12-01`,progress:35,status:`In Progress`}]:e.id===`prog-4`?[{emp:emps[2]||emps[0],assigned:`2026-10-01`,due:`2026-11-30`,progress:0,status:`Not Started`}]:e.id===`prog-7`?[(()=>{let cp=(cpMap&&(cpMap[`CO-5039::prog-7`]||cpMap[`prog-7`]))||null;return{emp:emps[2]||emps[0],assigned:`2026-01-12`,due:`2026-03-15`,progress:cp?Number(cp.progress)||0:67,status:cp?cp.status:`In Progress`}})()]:e.id===`prog-8`?[{emp:emps[1]||emps[0],assigned:`2026-10-08`,due:`2026-11-22`,progress:50,status:`In Progress`}]:e.id===`prog-9`?[{emp:emps[4]||emps[0],assigned:`2026-10-14`,due:`2026-11-28`,progress:100,status:`Completed`}]:e.id===`prog-10`?[{emp:emps[0],assigned:`2026-10-03`,due:`2026-11-18`,progress:100,status:`Completed`},{emp:emps[5]||emps[1],assigned:`2026-10-11`,due:`2026-11-30`,progress:45,status:`In Progress`}]:e.id===`prog-11`?[{emp:emps[6]||emps[2],assigned:`2026-10-09`,due:`2026-11-24`,progress:60,status:`In Progress`}]:e.id===`prog-12`?[{emp:emps[7]||emps[1],assigned:`2026-10-06`,due:`2026-11-19`,progress:100,status:`Completed`},{emp:emps[8]||emps[3],assigned:`2026-10-15`,due:`2026-12-05`,progress:20,status:`In Progress`}]:[];let seenEmpIds=new Set(baseEnrolled.map(b=>b.emp?.id).filter(Boolean));let extraEnrolled=(assignList||[]).filter(item=>{if(!item||/^asg-\d+$/.test(String(item.id||``)))return!1;let idMatch=item.programmeId&&item.programmeId===e.id,nameMatch=item.programmeName&&e.name&&item.programmeName.trim().toLowerCase()===e.name.trim().toLowerCase();return idMatch||nameMatch}).filter(item=>{let eid=item.employeeId;if(!eid||seenEmpIds.has(eid))return!1;return seenEmpIds.add(eid),!0}).map(item=>{let matchedEmp=emps.find(emp=>emp.id===item.employeeId)||{id:item.employeeId,firstName:(item.employeeName||`Employee`).split(` `)[0],lastName:(item.employeeName||``).split(` `).slice(1).join(` `)||``,designation:`Employee`,department:`Collab`};let cp=cpMap&&(cpMap[(item.employeeId||`CO-5039`)+`::`+e.id]||(matchedEmp.firstName===`Tanya`?cpMap[`CO-5039::`+e.id]:null)||cpMap[e.id]);let st=cp?cp.status:item.status||`Not Started`;let pct=cp?Number(cp.progress)||0:st===`Completed`?100:Number(item.progress)||0;return{emp:matchedEmp,assigned:fmtSysDate(item.assignedDate||`04-Nov-2026`),due:fmtSysDate(item.dueDate||`01-Dec-2026`),progress:pct,status:st,managerApprovalStatus:cp?.managerApprovalStatus||``}});return extraEnrolled.length>0?[...extraEnrolled,...baseEnrolled]:baseEnrolled}function tt({programmes:e,employees:empList,assignments:assignList,courseProgress:cpMap,onOpenCreateProgramme:t,onSelectProgramme:n,onEditProgramme:r,onToggleAvailability:h,currentUser:g,canToggleAvailability:v,hasStartedLearner:hasStartedFn}){let[i,a]=(0,l.useState)(`All`),[o,s]=(0,l.useState)(``),[confirmModal,setConfirmModal]=(0,l.useState)(null),[isSubmitting,setIsSubmitting]=(0,l.useState)(!1),[actionError,setActionError]=(0,l.useState)(``),pubOf=p=>(p.publicationStatus||p.status)===`Draft`?`Draft`:`Published`,availOf=p=>pubOf(p)===`Draft`?`Inactive`:(p.availabilityStatus?p.availabilityStatus:(p.isActive===!1?`Inactive`:`Active`)),c=e.filter(p=>{let q=o.toLowerCase(),t=p.name.toLowerCase().includes(q)||(p.department||``).toLowerCase().includes(q),ps=pubOf(p);return i===`Published`?t&&ps===`Published`:i===`Draft`?t&&ps===`Draft`:t}),u=s=>{switch(s){case`Published`:return(0,P.jsx)(`span`,{className:`bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-1 rounded-full text-xs font-semibold`,children:`Published`});case`Draft`:return(0,P.jsx)(`span`,{className:`bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-1 rounded-full text-xs font-semibold`,children:`Draft`});default:return(0,P.jsx)(`span`,{className:`bg-slate-100 text-slate-600 border border-slate-200 px-2.5 py-1 rounded-full text-xs font-semibold`,children:s})}},d=s=>{switch(s){case`Beginner`:return(0,P.jsx)(`span`,{className:`bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded text-xs font-medium`,children:s});case`Intermediate`:return(0,P.jsx)(`span`,{className:`bg-sky-50 text-sky-700 px-2.5 py-1 rounded text-xs font-medium`,children:s});case`Expert`:return(0,P.jsx)(`span`,{className:`bg-rose-50 text-rose-700 px-2.5 py-1 rounded text-xs font-medium`,children:s});default:return(0,P.jsx)(`span`,{className:`bg-slate-100 text-slate-700 px-2.5 py-1 rounded text-xs font-medium`,children:s})}},handleToggleClick=(ev,row)=>{ev.stopPropagation();setActionError(``);let ps=pubOf(row);if(ps===`Draft`){return}if(v===!1){setActionError(`Permission Denied: Only authorized Admin, HR, or Reporting Manager users can change training availability.`);return}let curAvail=availOf(row),targetStatus=curAvail===`Active`?`Inactive`:`Active`;if(targetStatus===`Inactive`&&hasStartedFn&&hasStartedFn(row)){setActionError(`This training cannot be made inactive because an employee has already started working on it.`);return}setConfirmModal({programme:row,targetStatus,reason:``})},handleConfirmToggle=async()=>{if(!confirmModal||isSubmitting)return;setIsSubmitting(!0);setActionError(``);try{let res=h?await h(confirmModal.programme,confirmModal.targetStatus,confirmModal.reason):{success:!0};if(res&&res.success===!1){setActionError(res.message||`Failed to update training availability status. Previous status restored.`)}setConfirmModal(null)}catch(err){setActionError(err?.message||`Failed to update training availability status. Previous status restored.`);setConfirmModal(null)}finally{setIsSubmitting(!1)}};return(0,P.jsxs)(`div`,{className:`p-6 space-y-6 max-w-[1600px] mx-auto w-full`,children:[(0,P.jsxs)(`div`,{className:`flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-1`,children:[(0,P.jsxs)(`div`,{className:`space-y-1`,children:[(0,P.jsxs)(`div`,{className:`flex items-center gap-1.5 text-xs font-medium text-slate-500`,children:[(0,P.jsx)(`span`,{className:`text-slate-500`,children:`CollabCRM People`}),(0,P.jsx)(`span`,{className:`text-slate-400`,children:`›`}),(0,P.jsx)(`span`,{className:`text-slate-500`,children:`Training Module`}),(0,P.jsx)(`span`,{className:`text-slate-400`,children:`›`}),(0,P.jsx)(`span`,{className:`text-blue-600 font-semibold`,children:`Training Management`})]})]}),(0,P.jsxs)(`button`,{onClick:t,className:`flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-sm transition-colors`,children:[(0,P.jsx)(j,{className:`w-4 h-4`}),(0,P.jsx)(`span`,{children:`Add Training`})]})]}),(0,P.jsxs)(`div`,{className:`bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden mt-1`,children:[(0,P.jsxs)(`div`,{className:`p-4 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4`,children:[(0,P.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,P.jsx)(`h1`,{className:`font-bold text-slate-900 text-base`,children:`Training Management`}),(0,P.jsxs)(`span`,{className:`bg-blue-50 text-blue-700 text-xs font-bold px-2 py-0.5 rounded-full`,children:[c.length,` Trainings`]})]}),(0,P.jsxs)(`div`,{className:`flex items-center gap-3 flex-wrap`,children:[(0,P.jsx)(`div`,{className:`flex items-center gap-1 bg-slate-100 p-1 rounded-lg text-xs font-medium`,children:[`All`,`Published`,`Draft`].map(tab=>(0,P.jsx)(`button`,{onClick:()=>a(tab),className:`px-3 py-1.5 rounded-md transition-colors ${i===tab?`bg-white text-slate-900 shadow-sm font-semibold`:`text-slate-600 hover:text-slate-900`}`,children:tab},tab))}),(0,P.jsxs)(`div`,{className:`relative`,children:[(0,P.jsx)(ke,{className:`w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2`}),(0,P.jsx)(`input`,{type:`text`,value:o,onChange:ev=>s(ev.target.value),placeholder:`Filter results...`,className:`bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-4 py-1.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20`})]}),(0,P.jsxs)(`button`,{className:`flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50`,children:[(0,P.jsx)(he,{className:`w-3.5 h-3.5 text-slate-500`}),(0,P.jsx)(`span`,{children:`Filter`})]})]})]}),actionError&&(0,P.jsxs)(`div`,{className:`bg-rose-50 border-b border-rose-200 px-4 py-2.5 flex items-center justify-between text-xs font-semibold text-rose-700`,children:[(0,P.jsx)(`span`,{children:actionError}),(0,P.jsx)(`button`,{type:`button`,onClick:()=>setActionError(``),className:`text-rose-500 hover:text-rose-800 ml-3`,children:`✕`})]}),(0,P.jsx)(`div`,{className:`overflow-x-auto`,children:(0,P.jsxs)(`table`,{className:`w-full text-left border-collapse`,children:[(0,P.jsx)(`thead`,{children:(0,P.jsxs)(`tr`,{className:`border-b border-slate-200 text-xs font-semibold text-slate-500 bg-slate-50/50`,children:[(0,P.jsx)(`th`,{className:`py-3 px-4 w-16`,children:`No.`}),(0,P.jsx)(`th`,{className:`py-3 px-4`,children:`Training Name ↕`}),(0,P.jsx)(`th`,{className:`py-3 px-4`,children:`Difficulty Level ↕`}),(0,P.jsx)(`th`,{className:`py-3 px-4`,children:`Duration ↕`}),(0,P.jsx)(`th`,{className:`py-3 px-4`,children:`Enrolled ↕`}),(0,P.jsx)(`th`,{className:`py-3 px-4`,children:`Status ↕`}),(0,P.jsx)(`th`,{className:`py-3 px-4 text-right`,children:`Actions`})]})}),(0,P.jsxs)(`tbody`,{className:`divide-y divide-slate-100 text-sm`,children:[c.map((row,idx)=>{let ps=pubOf(row),avail=availOf(row),isOn=avail===`Active`,isPub=ps!==`Draft`,canChange=v!==!1,toggleTitle=!isPub?`Inactive (Draft training — publish first)`:!canChange?`Only Admin, HR, and Reporting Manager users can change training availability`:(isOn?`Active`:`Inactive`);return(0,P.jsxs)(`tr`,{className:`hover:bg-slate-50/80 transition-colors cursor-pointer`,onClick:()=>n(row),children:[(0,P.jsx)(`td`,{className:`py-3 px-4 text-slate-500 tabular-nums`,children:idx+1}),(0,P.jsx)(`td`,{className:`py-3 px-4 font-semibold text-slate-900`,children:(0,P.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,P.jsx)(`span`,{className:`hover:text-blue-600 transition-colors`,children:row.name}),(0,P.jsx)(`span`,{className:`bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] font-mono font-bold`,children:row.version})]})}),(0,P.jsx)(`td`,{className:`py-3 px-4`,children:d(row.difficultyLevel)}),(0,P.jsx)(`td`,{className:`py-3 px-4 text-slate-600 text-xs tabular-nums font-mono`,children:fmtDurationHM(row)}),(0,P.jsx)(`td`,{className:`py-3 px-4 text-slate-800 text-xs font-bold tabular-nums`,children:getProgrammeEnrolledList(row,empList,assignList,cpMap).length}),(0,P.jsx)(`td`,{className:`py-3 px-4`,children:u(ps)}),(0,P.jsx)(`td`,{className:`py-3 px-4 text-right`,onClick:ev=>ev.stopPropagation(),children:(0,P.jsxs)(`div`,{className:`flex items-center justify-end gap-2`,children:[(0,P.jsx)(`button`,{type:`button`,onClick:ev=>{ev.stopPropagation(),n(row)},className:`p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors cursor-pointer`,title:`View Training`,children:(0,P.jsx)(pe,{className:`w-4 h-4`})}),(0,P.jsx)(`button`,{type:`button`,onClick:ev=>{ev.stopPropagation(),r&&r(row)},className:`p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors cursor-pointer`,title:`Edit Training`,children:(0,P.jsx)(Fe,{className:`w-4 h-4`})})]})})]},row.id)}),c.length===0&&(0,P.jsx)(`tr`,{children:(0,P.jsx)(`td`,{colSpan:7,className:`py-12 text-center text-slate-400 text-sm`,children:`No trainings found matching your search.`})})]})]})})]}),confirmModal&&(0,P.jsx)(`div`,{className:`fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-150`,children:(0,P.jsxs)(`div`,{className:`bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden border border-slate-200`,children:[(0,P.jsxs)(`div`,{className:`p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50`,children:[(0,P.jsx)(`h3`,{className:`font-bold text-slate-900 text-sm`,children:confirmModal.targetStatus===`Inactive`?`Deactivate Training`:`Activate Training`}),(0,P.jsx)(`button`,{type:`button`,onClick:()=>!isSubmitting&&setConfirmModal(null),className:`p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60`,children:(0,P.jsx)(N,{className:`w-4 h-4`})})]}),(0,P.jsxs)(`div`,{className:`p-6 space-y-4`,children:[(0,P.jsx)(`div`,{className:`text-sm font-bold text-slate-900`,children:confirmModal.targetStatus===`Inactive`?`Are you sure you want to make this training inactive?`:`Are you sure you want to activate this training?`}),(0,P.jsx)(`p`,{className:`text-xs text-slate-600 leading-relaxed`,children:confirmModal.targetStatus===`Inactive`?`This training will no longer be available for new assignments. Employees who are already assigned this training can continue their training.`:`This training will become available for new assignments.`}),(0,P.jsxs)(`div`,{className:`bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs space-y-1`,children:[(0,P.jsx)(`div`,{className:`font-semibold text-slate-800`,children:confirmModal.programme.name}),(0,P.jsxs)(`div`,{className:`text-slate-500`,children:[`Publication Status: ${pubOf(confirmModal.programme)} • Availability: `,availOf(confirmModal.programme),` → `,confirmModal.targetStatus]})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsxs)(`label`,{className:`inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 mb-1`,children:[(0,P.jsx)(`span`,{children:`Reason (optional)`}),(0,P.jsx)(InfoTip,{text:`Optional note recorded in the audit history for this status change.`})]}),(0,P.jsx)(`input`,{type:`text`,value:confirmModal.reason,onChange:ev=>setConfirmModal({...confirmModal,reason:ev.target.value}),placeholder:`Enter reason for audit history...`,className:`w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20`})]})]}),(0,P.jsxs)(`div`,{className:`px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end gap-3`,children:[(0,P.jsx)(`button`,{type:`button`,disabled:isSubmitting,onClick:()=>setConfirmModal(null),className:`px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors`,children:`Cancel`}),(0,P.jsx)(`button`,{type:`button`,disabled:isSubmitting,onClick:handleConfirmToggle,style:{backgroundColor:confirmModal.targetStatus===`Inactive`?`#e11d48`:`#2563eb`,color:`#ffffff`},className:`px-5 py-2 text-xs font-bold text-white rounded-lg shadow-sm transition-colors cursor-pointer ${confirmModal.targetStatus===`Inactive`?`bg-rose-600 hover:bg-rose-700`:`bg-blue-600 hover:bg-blue-700`}`,children:isSubmitting?`Updating...`:`Confirm`})]})]})})]})}function nt({programme:e,employees:t,assignments:assignList,courseProgress:cpMap,skills:skillsConfig,onBack:n,onOpenAssignTraining:r,onSelectEmployee:i,onEditProgramme:a,onArchiveProgramme:archFn,onRestoreProgramme:restFn,onToggleAvailability:togFn,canToggleAvailability:canToggle,hasStartedLearner:hasStartedFn,onApproveCompletion:approveFn}){
  let[activeTab, setActiveTab]=(0,l.useState)("general");
  let[searchEmployee, setSearchEmployee]=(0,l.useState)("");
  let[searchHistory, setSearchHistory]=(0,l.useState)("");
  let[histSortOrder, setHistSortOrder]=(0,l.useState)("desc");
  let[histDateFrom, setHistDateFrom]=(0,l.useState)("");
  let[histDateTo, setHistDateTo]=(0,l.useState)("");
  let[showHistRange, setShowHistRange]=(0,l.useState)(!1);
  let[detailAlert, setDetailAlert]=(0,l.useState)("");
  let[archiveModal, setArchiveModal]=(0,l.useState)(null);
  let[archiveReason, setArchiveReason]=(0,l.useState)("");
  let[availModal, setAvailModal]=(0,l.useState)(null);
  let[isBusy, setIsBusy]=(0,l.useState)(!1);

  let pubStatus = (e.publicationStatus || e.status) === "Draft" ? "Draft" : "Published";
  let availStatus = pubStatus === "Draft" ? "Inactive" : (e.availabilityStatus ? e.availabilityStatus : (e.isActive === !1 ? "Inactive" : "Active"));
  let isAvailOn = availStatus === "Active";
  let isPubForAvail = pubStatus !== "Draft";
  let canChangeAvail = canToggle !== !1;
  let availToggleTitle = !isPubForAvail ? "Inactive (Draft training — publish first)" : !canChangeAvail ? "Only Admin, HR, and Reporting Manager users can change training availability" : (isAvailOn ? "Active" : "Inactive");
  let isLockedInactive = pubStatus !== "Draft" && availStatus === "Inactive";
  let isAssignable = pubStatus === "Published" && availStatus === "Active";
  let statusHistory = Array.isArray(e.statusHistory) ? e.statusHistory : [];
  let parseHistTs = log => {
    let raw = log.changedAt || log.changedAtFormatted || "";
    if (!raw) return 0;
    let d = new Date(raw);
    if (!isNaN(d.getTime())) return d.getTime();
    let d2 = new Date(String(raw).replace(/-/g, " "));
    return isNaN(d2.getTime()) ? 0 : d2.getTime();
  };
  let fmtHistDT = log => {
    let s = fmtSysDate(log.changedAtFormatted || log.changedAt) || "";
    return s.replace(/^(\d{2}-[A-Za-z]{3}-\d{4},\s*\d{1,2}:\d{2}):\d{2}(\s*(?:AM|PM))$/i, "$1$2");
  };
  let filteredHistory = statusHistory.filter(log => {
    let ts = parseHistTs(log);
    if (histDateFrom) {
      let fTs = new Date(histDateFrom + "T00:00:00").getTime();
      if (ts && ts < fTs) return false;
    }
    if (histDateTo) {
      let tTs = new Date(histDateTo + "T23:59:59").getTime();
      if (ts && ts > tTs) return false;
    }
    if (!searchHistory) return true;
    let q = searchHistory.toLowerCase();
    return [log.programmeId || e.id, log.programmeName || e.name || "", log.previousAvailabilityStatus || "", log.newAvailabilityStatus || "", log.changedBy || "", fmtHistDT(log), log.reason || ""].some(val => String(val).toLowerCase().includes(q));
  }).slice().sort((a, b) => histSortOrder === "asc" ? (parseHistTs(a) - parseHistTs(b)) : (parseHistTs(b) - parseHistTs(a)));
  let fmtEnrolledDate = d => {
    if (!d || typeof d !== "string") return d || "-";
    let m = d.trim().match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (m) {
      let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
      return `${m[3]}-${months[parseInt(m[2], 10) - 1] || m[2]}-${m[1]}`;
    }
    return d.trim();
  };

  let o = getProgrammeEnrolledList(e, t, assignList, cpMap);

  let filteredEmployees = o.filter(item => {
    if(!searchEmployee) return true;
    let q = searchEmployee.toLowerCase();
    let name = (item.emp.firstName + " " + item.emp.lastName).toLowerCase();
    let dept = (item.emp.department || "").toLowerCase();
    return name.includes(q) || dept.includes(q);
  });

  let resources = e.resources || [
    {id:"res-1",title:"Recruitment SOP & Client Workflow Architecture",type:"Video Lecture",url:"youtube.com/watch?v=collabcrm-rec-intro",mandatory:true},
    {id:"res-2",title:"Candidate Intake & Screening Playbook",type:"PDF Playbook",url:"docs.collabcrm.internal/recruitment-sop.pdf",mandatory:true},
    {id:"res-3",title:"Interactive Client Portal Demonstration Sandbox",type:"Interactive Sandbox",url:"collabcrm.com/demo/client-portal",mandatory:true},
    {id:"res-4",title:"Advanced Candidate Sourcing Masterclass",type:"Masterclass",url:"coursera.org/learn/recruitment-ops",mandatory:false}
  ];
  let assessCfg = e.assessment || null;
  let isAssessDisabled = !!(assessCfg && assessCfg.enabled === !1);
  let assessQuestions = Array.isArray(assessCfg?.questions) ? assessCfg.questions : [];
  let assessTotalMarks = assessCfg && Number(assessCfg.totalMarks) > 0
    ? Number(assessCfg.totalMarks)
    : assessQuestions.reduce((sum, q) => sum + (Number(q.marks) || 0), 0);
  let assessMaxAttempts = Number(assessCfg?.maxAttempts ?? e.maxAttempts) || 3;
  let qTypeLabel = tp => ({
    short_text: "Short Text Answer",
    long_text: "Long Text Answer",
    single_choice: "Single Selection (Radio)",
    multiple_choice: "Multiple Selection (Checkbox)",
    dropdown: "Dropdown Selection",
    true_false: "True / False"
  })[tp] || tp;
  let compReqItems = Array.isArray(e.completionRequirementsList) && e.completionRequirementsList.length > 0
    ? e.completionRequirementsList
    : [];

  let handleAssignClick = () => {
    setDetailAlert("");
    if(!isAssignable){
      setDetailAlert("This training is currently inactive and cannot be assigned.");
      return;
    }
    r && r();
  };

  let handleAvailToggleClick = () => {
    setDetailAlert("");
    if(!isPubForAvail) return;
    if(!canChangeAvail){
      setDetailAlert("Permission Denied: Only authorized Admin, HR, or Reporting Manager users can change training availability.");
      return;
    }
    let targetStatus = isAvailOn ? "Inactive" : "Active";
    if(targetStatus === "Inactive" && hasStartedFn && hasStartedFn(e)){
      setDetailAlert("This training cannot be made inactive because an employee has already started working on it.");
      return;
    }
    setAvailModal({targetStatus, reason:""});
  };

  let handleConfirmAvailToggle = async () => {
    if(!availModal || isBusy) return;
    setIsBusy(!0);
    setDetailAlert("");
    try{
      let res = togFn ? await togFn(e, availModal.targetStatus, availModal.reason) : {success:!0};
      if(res && res.success === !1){
        setDetailAlert(res.message || "Failed to update training availability status. Previous status restored.");
      }
      setAvailModal(null);
    }catch(err){
      setDetailAlert(err?.message || "Failed to update training availability status. Previous status restored.");
      setAvailModal(null);
    }finally{
      setIsBusy(!1);
    }
  };

  let handleArchiveOrRestoreConfirm = async () => {
    if(!archiveModal || isBusy) return;
    setIsBusy(!0);
    setDetailAlert("");
    try{
      let res = archiveModal === "archive"
        ? (archFn ? await archFn(e, archiveReason) : {success:!0})
        : (restFn ? await restFn(e, archiveReason) : {success:!0});
      if(res && res.success === !1){
        setDetailAlert(res.message || "Unable to update training status.");
      }
      setArchiveModal(null);
      setArchiveReason("");
    }catch(err){
      setDetailAlert(err?.message || "Unable to update training status.");
      setArchiveModal(null);
    }finally{
      setIsBusy(!1);
    }
  };

  let pubBadgeClass = pubStatus === "Published"
    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
    : "bg-amber-50 text-amber-700 border border-amber-200";
  let availBadgeClass = availStatus === "Active"
    ? "bg-blue-50 text-blue-700 border border-blue-200"
    : "bg-slate-100 text-slate-600 border border-slate-200";

  return (0,P.jsxs)("div",{className:"w-full p-6 space-y-6 max-w-[1600px] mx-auto",children:[
    // Top Row: Back button on left, Active/Inactive & Assign Programme on right
    (0,P.jsxs)("div",{className:"flex items-center justify-between flex-wrap gap-3",children:[
      (0,P.jsxs)("button",{onClick:n,className:"flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 bg-white border border-slate-200 px-3.5 py-1.5 rounded-lg shadow-sm transition-colors",children:[
        (0,P.jsx)(S,{className:"w-4 h-4"}),
        (0,P.jsx)("span",{children:"Back to Training Management"})
      ]}),
      (0,P.jsx)("div",{className:"flex items-center gap-2",children:[
        (0,P.jsx)("button",{type:"button",disabled:isLockedInactive,onClick:handleAssignClick,style:isLockedInactive?{opacity:0.5}:undefined,className:"bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm font-semibold shadow-sm transition-colors " + (isLockedInactive?"cursor-not-allowed":"hover:bg-blue-700"),children:"+ Assign Training"})
      ]})
    ]}),

    isLockedInactive && (0,P.jsx)("div",{className:"bg-amber-50 border border-amber-200 rounded-xl px-4 py-2.5 text-xs font-semibold text-amber-800",children:"This training is currently Inactive. No actions can be performed inside while it remains inactive."}),

    detailAlert && (0,P.jsxs)("div",{className:"bg-rose-50 border border-rose-200 rounded-xl px-4 py-3 flex items-center justify-between text-xs font-semibold text-rose-700",children:[
      (0,P.jsx)("span",{children:detailAlert}),
      (0,P.jsx)("button",{type:"button",onClick:()=>setDetailAlert(""),className:"text-rose-500 hover:text-rose-800 ml-3",children:"✕"})
    ]}),

    // 2-Column Grid (matching Screenshot 4 layout)
    (0,P.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-6 items-start",children:[
      // LEFT COLUMN: Sidebar Card (matching Screenshot 4 format)
      (0,P.jsxs)("div",{className:"lg:col-span-1 bg-white border border-slate-200 rounded-xl p-6 space-y-6 shadow-sm",children:[
        (0,P.jsxs)("div",{className:"text-center relative",children:[
          (0,P.jsx)("div",{className:"flex items-center justify-between gap-2 mb-2",children:(0,P.jsx)("span",{className:pubBadgeClass + " text-xs px-2 py-0.5 rounded font-medium",children:pubStatus})}),
          (0,P.jsx)("div",{className:"w-24 h-24 bg-blue-50 border border-blue-100 rounded-full mx-auto flex items-center justify-center text-3xl font-bold text-blue-600 shadow-inner mt-2",children:(0,P.jsx)(te,{className:"w-10 h-10 text-blue-600"})}),
          (0,P.jsx)("h2",{className:"text-base font-bold text-slate-900 mt-4 leading-snug",children:e.name}),
          (0,P.jsx)("div",{className:"text-xs text-slate-500 mt-1",children:e.category || "Recruitment & HR Operations"}),
          (0,P.jsx)("div",{className:"inline-block mt-2 bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded text-xs font-semibold",children:e.difficultyLevel || "Intermediate"})
        ]}),
        (0,P.jsxs)("div",{className:"border-t border-slate-100 pt-4 space-y-4 text-xs",children:[
          (0,P.jsxs)("div",{children:[
            (0,P.jsx)("div",{className:"text-slate-400 font-medium",children:"Duration"}),
            (0,P.jsx)("div",{className:"font-semibold text-slate-800 mt-0.5",children:fmtDurationHM(e.expectedDurationHours ? e : {expectedDurationHours:18})})
          ]}),
          (0,P.jsxs)("div",{children:[
            (0,P.jsx)("div",{className:"text-slate-400 font-medium",children:"Passing Assessment Score"}),
            (0,P.jsx)("div",{className:"font-semibold text-slate-800 mt-0.5",children:e.assessment && e.assessment.enabled === !1 ? "N/A (Assessment Disabled)" : ((Number(e.assessment?.passingScore || e.passingScore) || 80) + "%")})
          ]}),
          (0,P.jsxs)("div",{children:[
            (0,P.jsx)("div",{className:"text-slate-400 font-medium",children:"Enrolled Employees"}),
            (0,P.jsxs)("div",{className:"font-semibold text-slate-800 mt-0.5",children:[o.length, " Enrolled"]})
          ]})
        ]})
      ]}),

      // RIGHT COLUMN: Main Content Area (matching Screenshot 4 format)
      (0,P.jsxs)("div",{className:"lg:col-span-3 space-y-6",children:[
        // Top Tab Bar
        (0,P.jsx)("div",{className:"bg-white border border-slate-200 rounded-xl px-6 shadow-sm overflow-x-auto",children:[
          (0,P.jsxs)("div",{className:"flex items-center gap-8 text-xs font-bold border-b border-transparent",children:[
            (0,P.jsx)("button",{onClick:()=>setActiveTab("general"),className:"py-4 border-b-2 transition-colors whitespace-nowrap " + (activeTab==="general"?"border-blue-600 text-blue-600":"border-transparent text-slate-500 hover:text-slate-800"),children:"General Info"}),
            (0,P.jsx)("button",{onClick:()=>setActiveTab("curriculum"),className:"py-4 border-b-2 transition-colors whitespace-nowrap " + (activeTab==="curriculum"?"border-blue-600 text-blue-600":"border-transparent text-slate-500 hover:text-slate-800"),children:"Curriculum & Modules"}),
            (0,P.jsxs)("button",{onClick:()=>setActiveTab("enrolled"),className:"py-4 border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 " + (activeTab==="enrolled"?"border-blue-600 text-blue-600":"border-transparent text-slate-500 hover:text-slate-800"),children:[
              (0,P.jsx)("span",{children:"Enrolled Employees"}),
              (0,P.jsxs)("span",{className:"bg-slate-100 text-slate-600 text-[10px] px-1.5 py-0.5 rounded-full font-bold",children:[o.length]})
            ]}),
            (0,P.jsxs)("button",{onClick:()=>setActiveTab("history"),className:"py-4 border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 " + (activeTab==="history"?"border-blue-600 text-blue-600":"border-transparent text-slate-500 hover:text-slate-800"),children:[
              (0,P.jsx)("span",{children:"History"}),
              (0,P.jsxs)("span",{className:"bg-slate-100 text-slate-600 text-[10px] px-1.5 py-0.5 rounded-full font-bold",children:[statusHistory.length]})
            ]})
          ]})
        ]}),

        // Tab 1: General Info Content (all programme details not on the left sidebar: objectives, completion requirements, & assessment questions)
        activeTab==="general" && (0,P.jsxs)("div",{className:"space-y-6",children:[
          (0,P.jsxs)("div",{className:"bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-5",children:[
            (0,P.jsx)("h2",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider",children:"Training Information"}),
            (0,P.jsxs)("div",{className:"space-y-4 text-xs",children:[
              (0,P.jsxs)("div",{children:[
                (0,P.jsx)("div",{className:"text-slate-400 font-medium",children:"LEARNING OBJECTIVES"}),
                (0,P.jsx)("div",{className:"text-slate-700 mt-1 leading-relaxed",children:e.learningObjectives || "Master comprehensive workflows, key competencies, and practical execution techniques across the enterprise platform."})
              ]}),

            ]})
          ]}),

          (()=>{
            let isCertOn = Boolean(e.certificateGeneration);
            let isSkillOn = Boolean(e.addSkillToProfile);
            if(!isCertOn && !isSkillOn) return null;
            let skillIds = Array.isArray(e.selectedSkillIds) ? e.selectedSkillIds : [];
            let masterSkills = Array.isArray(skillsConfig) && skillsConfig.length > 0 ? skillsConfig : DEFAULT_SKILLS_SEED;
            let resolvedSkills = skillIds.map(sid => masterSkills.find(m => m.id === sid) || { id: sid, name: sid });
            return (0,P.jsxs)("div",{className:"bg-white border border-purple-200 rounded-xl p-6 shadow-sm space-y-4",style:{borderLeft:"4px solid #7c3aed"},children:[
              (0,P.jsxs)("div",{className:"flex items-center justify-between flex-wrap gap-2 border-b border-purple-200 pb-3",children:[
                (0,P.jsxs)("div",{className:"flex items-center gap-2",children:[
                  (0,P.jsx)("span",{className:"w-2 h-2 rounded-full",style:{backgroundColor:"#7c3aed"}}),
                  (0,P.jsx)("h2",{className:"text-xs font-bold uppercase tracking-wider text-purple-700",children:"Training Recognition"})
                ]})
              ]}),
              isCertOn && (0,P.jsx)("div",{className:"grid grid-cols-1 gap-4 text-xs",children:(0,P.jsxs)("div",{className:"p-3 rounded-lg border border-purple-200",style:{backgroundColor:"#faf5ff"},children:[
                (0,P.jsx)("div",{className:"text-[11px] font-medium text-slate-500",children:"Certificate Generation"}),
                (0,P.jsx)("div",{className:"mt-1 font-bold text-purple-700",children:"Enabled (ON)"})
              ]})}),
              isSkillOn && (0,P.jsxs)("div",{className:"pt-1 space-y-2 text-xs",children:[
                (0,P.jsxs)("div",{className:"flex items-center gap-2 flex-wrap",children:[
                  (0,P.jsx)("span",{className:"text-slate-500 font-semibold",children:"Awarded Skill Level:"}),
                  (0,P.jsx)("span",{className:"px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-50 text-purple-700 border border-purple-200",children:e.skillLevel || "Beginner"})
                ]}),
                (0,P.jsxs)("div",{className:"flex items-center gap-1.5 flex-wrap",children:[
                  (0,P.jsx)("span",{className:"text-slate-500 font-semibold mr-1",children:"Selected Skill:"}),
                  resolvedSkills.length > 0 ? resolvedSkills.map(sk => (0,P.jsx)("span",{className:"px-2.5 py-1 rounded-md text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-200",children:sk.name},sk.id)) : (0,P.jsx)("span",{className:"text-slate-400 italic",children:"None selected"})
                ]})
              ]})
            ]});
          })(),

          (0,P.jsxs)("div",{className:"bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-5",children:[
            (0,P.jsxs)("div",{className:"flex items-center justify-between flex-wrap gap-3 border-b border-slate-100 pb-3",children:[
              (0,P.jsx)("h2",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider",children:"Assessment & Questions"}),
              (0,P.jsxs)("div",{className:"flex items-center flex-wrap gap-2 text-xs",children:[
                (0,P.jsx)("span",{className:(isAssessDisabled ? "bg-slate-100 text-slate-600 border-slate-200" : "bg-emerald-50 text-emerald-700 border-emerald-200") + " border px-2.5 py-0.5 rounded-full font-semibold",children:isAssessDisabled ? "Disabled" : "Enabled"}),
                !isAssessDisabled && (0,P.jsxs)("span",{className:"bg-blue-50 text-blue-700 border border-blue-200 px-2.5 py-0.5 rounded-full font-semibold",children:[assessQuestions.length, " Questions"]}),
                !isAssessDisabled && assessTotalMarks > 0 && (0,P.jsxs)("span",{className:"bg-slate-100 text-slate-700 border border-slate-200 px-2.5 py-0.5 rounded-full font-semibold",children:[assessTotalMarks, " Total Marks"]}),
                !isAssessDisabled && (0,P.jsxs)("span",{className:"bg-slate-100 text-slate-700 border border-slate-200 px-2.5 py-0.5 rounded-full font-semibold",children:["Max ", assessMaxAttempts, " Attempts"]})
              ]})
            ]}),

            isAssessDisabled ? (0,P.jsx)("div",{className:"p-5 bg-slate-50 border border-dashed border-slate-200 rounded-xl text-xs text-slate-600",children:"Assessment is disabled for this training. Employees complete this training upon finishing all required modules."}) : (0,P.jsxs)("div",{className:"space-y-5 text-xs",children:[
              (assessCfg?.title || assessCfg?.description) && (0,P.jsxs)("div",{className:"bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2.5",children:[
                assessCfg?.title && (0,P.jsxs)("div",{children:[
                  (0,P.jsx)("div",{className:"text-slate-400 font-medium text-[11px]",children:"ASSESSMENT TITLE"}),
                  (0,P.jsx)("div",{className:"font-bold text-slate-900 mt-0.5",children:assessCfg.title})
                ]}),
                assessCfg?.description && (0,P.jsxs)("div",{children:[
                  (0,P.jsx)("div",{className:"text-slate-400 font-medium text-[11px]",children:"ASSESSMENT DESCRIPTION"}),
                  (0,P.jsx)("div",{className:"text-slate-700 mt-0.5 leading-relaxed",children:assessCfg.description})
                ]})
              ]}),

              assessQuestions.length > 0 ? (0,P.jsxs)("div",{className:"space-y-3",children:[
                (0,P.jsxs)("div",{className:"text-slate-400 font-medium uppercase tracking-wider text-[11px]",children:["Questions List (", assessQuestions.length, ")"]}),
                (0,P.jsx)("div",{className:"space-y-3",children:assessQuestions.map((q, qIdx)=>(0,P.jsxs)("div",{className:"border border-slate-200 rounded-xl p-4 bg-white space-y-3",children:[
                  (0,P.jsxs)("div",{className:"flex items-center justify-between flex-wrap gap-2 border-b border-slate-100 pb-2.5",children:[
                    (0,P.jsxs)("div",{className:"flex items-center flex-wrap gap-2",children:[
                      (0,P.jsxs)("span",{className:"bg-blue-600 text-white font-bold text-[11px] px-2.5 py-0.5 rounded-md",children:["Question ", q.number || (qIdx + 1)]}),
                      (0,P.jsx)("span",{className:"bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[11px] font-semibold",children:qTypeLabel(q.type)}),
                      (0,P.jsxs)("span",{className:"bg-slate-50 border border-slate-200 text-slate-700 px-2 py-0.5 rounded text-[11px] font-semibold",children:["Marks: ", Number(q.marks) || 0]})
                    ]})
                  ]}),
                  (0,P.jsx)("div",{className:"text-slate-900 font-semibold leading-relaxed",children:q.text || "(Untitled question)"}),
                  q.type === "short_text" && (0,P.jsxs)("div",{className:"space-y-1.5 pt-1",children:[
                    (0,P.jsx)("div",{className:"text-[11px] font-medium text-slate-400",children:"ACCEPTED ANSWERS"}),
                    (0,P.jsx)("div",{className:"flex flex-wrap gap-1.5",children:(q.acceptedAnswers || []).filter(ans=>String(ans||"").trim()).map((ans, aIdx)=>(0,P.jsx)("span",{className:"bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-1 rounded-md text-xs font-medium",children:ans},"ans-" + aIdx))})
                  ]}),
                  q.type === "long_text" && (0,P.jsxs)("div",{className:"space-y-1 pt-1",children:[
                    (0,P.jsx)("div",{className:"text-[11px] font-medium text-slate-400",children:"EXPECTED ANSWER / EVALUATION REFERENCE"}),
                    (0,P.jsx)("div",{className:"bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-700 leading-relaxed",children:q.expectedAnswer || "Evaluated manually by reviewer."})
                  ]}),
                  (q.type === "single_choice" || q.type === "dropdown") && (0,P.jsxs)("div",{className:"space-y-1.5 pt-1",children:[
                    (0,P.jsx)("div",{className:"text-[11px] font-medium text-slate-400",children:"ANSWER OPTIONS"}),
                    (0,P.jsx)("div",{className:"space-y-1.5",children:(q.options || []).map((opt, oIdx)=>{
                      let isCorrect = q.correctAnswer === opt.id;
                      return (0,P.jsxs)("div",{className:"flex items-center justify-between gap-2 px-3 py-1.5 rounded-lg border " + (isCorrect ? "bg-emerald-50/70 border-emerald-200 text-emerald-900 font-semibold" : "bg-slate-50 border-slate-200 text-slate-700"),children:[
                        (0,P.jsxs)("span",{children:[String.fromCharCode(65 + oIdx), ". ", opt.text]}),
                        isCorrect && (0,P.jsx)("span",{className:"text-[10px] font-bold text-emerald-700 bg-white border border-emerald-200 px-2 py-0.5 rounded",children:"Correct Answer"})
                      ]},opt.id || oIdx);
                    })})
                  ]}),
                  q.type === "multiple_choice" && (0,P.jsxs)("div",{className:"space-y-1.5 pt-1",children:[
                    (0,P.jsx)("div",{className:"text-[11px] font-medium text-slate-400",children:"ANSWER OPTIONS (MULTIPLE CORRECT)"}),
                    (0,P.jsx)("div",{className:"space-y-1.5",children:(q.options || []).map((opt, oIdx)=>{
                      let isCorrect = Array.isArray(q.correctAnswers) && q.correctAnswers.includes(opt.id);
                      return (0,P.jsxs)("div",{className:"flex items-center justify-between gap-2 px-3 py-1.5 rounded-lg border " + (isCorrect ? "bg-emerald-50/70 border-emerald-200 text-emerald-900 font-semibold" : "bg-slate-50 border-slate-200 text-slate-700"),children:[
                        (0,P.jsxs)("span",{children:[String.fromCharCode(65 + oIdx), ". ", opt.text]}),
                        isCorrect && (0,P.jsx)("span",{className:"text-[10px] font-bold text-emerald-700 bg-white border border-emerald-200 px-2 py-0.5 rounded",children:"Correct"})
                      ]},opt.id || oIdx);
                    })})
                  ]}),
                  q.type === "true_false" && (0,P.jsxs)("div",{className:"space-y-1.5 pt-1",children:[
                    (0,P.jsx)("div",{className:"text-[11px] font-medium text-slate-400",children:"ANSWER OPTIONS"}),
                    (0,P.jsx)("div",{className:"flex items-center gap-2.5",children:["True","False"].map(tfVal=>{
                      let isCorrect = q.correctAnswer === tfVal;
                      return (0,P.jsxs)("div",{className:"flex items-center gap-2 px-3 py-1.5 rounded-lg border " + (isCorrect ? "bg-emerald-50/70 border-emerald-200 text-emerald-900 font-semibold" : "bg-slate-50 border-slate-200 text-slate-700"),children:[
                        (0,P.jsx)("span",{children:tfVal}),
                        isCorrect && (0,P.jsx)("span",{className:"text-[10px] font-bold text-emerald-700 bg-white border border-emerald-200 px-1.5 py-0.5 rounded",children:"Correct Answer"})
                      ]},tfVal);
                    })})
                  ]})
                ]},q.id || ("q-" + qIdx)))})
              ]}) : (0,P.jsx)("div",{className:"p-4 bg-slate-50 border border-dashed border-slate-200 rounded-xl text-xs text-slate-500",children:"No assessment questions have been configured for this training yet."})
            ]})
          ]})
        ]}),

        // Tab 2: Curriculum & Modules
        activeTab==="curriculum" && (0,P.jsxs)("div",{className:"bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4",children:[
          (0,P.jsxs)("div",{className:"flex items-center justify-between border-b border-slate-100 pb-3",children:[
            (0,P.jsx)("h2",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider",children:"Curriculum & Modules"}),
            (0,P.jsx)("button",{type:"button",disabled:isLockedInactive,onClick:()=>!isLockedInactive&&a&&a(),style:isLockedInactive?{opacity:0.5}:undefined,className:"text-xs font-semibold text-blue-600 " + (isLockedInactive?"cursor-not-allowed":"hover:underline"),children:"+ Add Resource"})
          ]}),
          (0,P.jsx)("div",{className:"overflow-x-auto",children:(0,P.jsxs)("table",{className:"w-full text-left border-collapse",children:[
            (0,P.jsx)("thead",{children:(0,P.jsxs)("tr",{className:"border-b border-slate-200 text-[11px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50/50",children:[
              (0,P.jsx)("th",{className:"py-3 px-4 w-24",children:"Module"}),
              (0,P.jsx)("th",{className:"py-3 px-4",children:"Resource Title"}),
              (0,P.jsx)("th",{className:"py-3 px-4",children:"Type"}),
              (0,P.jsx)("th",{className:"py-3 px-4",children:"Resource URL"}),
              
              (0,P.jsx)("th",{className:"py-3 px-4 text-right",children:"Action"})
            ]})}),
            (0,P.jsx)("tbody",{className:"divide-y divide-slate-100 text-xs",children:resources.map((res, idx)=>(0,P.jsxs)("tr",{className:"hover:bg-slate-50/80 transition-colors",children:[
              (0,P.jsx)("td",{className:"py-3 px-4 font-semibold text-slate-500 whitespace-nowrap",children:["Module ", idx+1]}),
              (0,P.jsx)("td",{className:"py-3 px-4",children:(0,P.jsxs)("div",{className:"flex items-center gap-2.5",children:[
                (0,P.jsx)("span",{className:"text-blue-600 shrink-0",children:idx===0?(0,P.jsx)(te,{className:"w-4 h-4"}):idx===1?(0,P.jsx)(me,{className:"w-4 h-4"}):idx===2?(0,P.jsx)(pe,{className:"w-4 h-4"}):(0,P.jsx)(C,{className:"w-4 h-4"})}),
                (0,P.jsx)("span",{className:"font-bold text-slate-900",children:res.title})
              ]})}),
              (0,P.jsx)("td",{className:"py-3 px-4 text-slate-600 whitespace-nowrap",children:res.type}),
              (0,P.jsx)("td",{className:"py-3 px-4 text-slate-400 font-mono text-[11px] max-w-xs truncate",children:res.fileName?("📄 "+res.fileName+(res.url?" • "+res.url:"")):res.url}),
              
              (0,P.jsx)("td",{className:"py-3 px-4 text-right whitespace-nowrap",children:isLockedInactive?(0,P.jsx)("button",{type:"button",disabled:!0,style:{opacity:0.5},className:"p-1.5 rounded-lg text-slate-400 cursor-not-allowed",title:"Inactive — resource disabled",children:(0,P.jsx)(pe,{className:"w-4 h-4"})}):res.fileDataUrl?(0,P.jsxs)("div",{className:"inline-flex items-center gap-1.5",children:[
                (0,P.jsx)("button",{type:"button",onClick:()=>{try{let b64=res.fileDataUrl.split(",")[1]||"";let bin=atob(b64);let arr=new Uint8Array(bin.length);for(let k=0;k<bin.length;k++)arr[k]=bin.charCodeAt(k);let blob=new Blob([arr],{type:"application/pdf"});window.open(URL.createObjectURL(blob),"_blank");}catch{window.open(res.fileDataUrl,"_blank");}},className:"inline-flex items-center justify-center p-1.5 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors cursor-pointer",title:"Open Uploaded PDF",children:(0,P.jsx)(pe,{className:"w-4 h-4"})}),
                res.url&&(0,P.jsx)("a",{href:res.url.startsWith("http")?res.url:"https://" + res.url,target:"_blank",rel:"noreferrer",className:"inline-flex items-center justify-center p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors",title:"Open Link",children:(0,P.jsx)(pe,{className:"w-4 h-4"})})
              ]}):(0,P.jsx)("a",{href:res.url&&res.url.startsWith("http")?res.url:"https://" + res.url,target:"_blank",rel:"noreferrer",className:"inline-flex items-center justify-center p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors",title:"Open Resource",children:(0,P.jsx)(pe,{className:"w-4 h-4"})})})
            ]}, res.id || idx))})
          ]})})
        ]}),

        // Tab 3: Enrolled Employees
        activeTab==="enrolled" && (0,P.jsxs)("div",{className:"bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4",children:[
          (0,P.jsx)("div",{className:"flex items-center border-b border-slate-100 pb-3",children:
            (0,P.jsxs)("div",{className:"relative w-full",children:[
              (0,P.jsx)(ue,{className:"w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),
              (0,P.jsx)("input",{type:"text",value:searchEmployee,onChange:e=>setSearchEmployee(e.target.value),placeholder:"Search enrolled employee...",style:{paddingLeft:"32px"},className:"w-full pl-8 pr-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-hidden focus:border-blue-500"})
            ]})
          }),
          (0,P.jsxs)("table",{className:"w-full text-left border-collapse",children:[
            (0,P.jsx)("thead",{children:(0,P.jsxs)("tr",{className:"border-b border-slate-200 text-[11px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50/50",children:[
              (0,P.jsx)("th",{className:"py-3 px-4",children:"Employee Name"}),
              (0,P.jsx)("th",{className:"py-3 px-4",children:"Department"}),
              (0,P.jsx)("th",{className:"py-3 px-4",children:"Assigned Date"}),
              (0,P.jsx)("th",{className:"py-3 px-4",children:"Due Date"}),
              (0,P.jsx)("th",{className:"py-3 px-4",children:"Progress"}),
              (0,P.jsx)("th",{className:"py-3 px-4",children:"Status"}),
              (0,P.jsx)("th",{className:"py-3 px-4 text-right",children:"Action"})
            ]})}),
            (0,P.jsx)("tbody",{className:"divide-y divide-slate-100 text-sm",children:filteredEmployees.map((item, idx)=>(0,P.jsxs)("tr",{key:idx,className:"hover:bg-slate-50/80 transition-colors cursor-pointer",onClick:()=>i&&i(item.emp),children:[
              (0,P.jsx)("td",{className:"py-3 px-4",children:(0,P.jsxs)("div",{className:"flex items-center gap-3",children:[
                (0,P.jsxs)("div",{className:"w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-xs shrink-0",children:[item.emp.firstName[0], item.emp.lastName[0]]}),
                (0,P.jsxs)("div",{children:[
                  (0,P.jsxs)("div",{className:"font-bold text-slate-900",children:[item.emp.firstName, " ", item.emp.lastName]}),
                  (0,P.jsx)("div",{className:"text-xs text-slate-500",children:item.emp.designation})
                ]})
              ]})}),
              (0,P.jsx)("td",{className:"py-3 px-4 text-xs font-medium text-slate-600",children:item.emp.department || "Web"}),
              (0,P.jsx)("td",{className:"py-3 px-4 text-xs text-slate-500 tabular-nums",children:fmtEnrolledDate(item.assigned)}),
              (0,P.jsx)("td",{className:"py-3 px-4 text-xs text-slate-500 tabular-nums",children:fmtEnrolledDate(item.due)}),
              (0,P.jsx)("td",{className:"py-3 px-4",children:(0,P.jsxs)("div",{className:"flex items-center gap-2",children:[
                (0,P.jsx)("div",{className:"w-16 bg-slate-100 rounded-full h-1.5 overflow-hidden",children:(0,P.jsx)("div",{className:"bg-blue-600 h-full rounded-full",style:{width:item.progress+"%"}})}),
                (0,P.jsxs)("span",{className:"text-xs font-bold text-slate-700 tabular-nums",children:[item.progress,"%",]})
              ]})}),
              (0,P.jsx)("td",{className:"py-3 px-4",children:(0,P.jsx)("span",{className:"inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold " + (item.status==="Completed"?"bg-emerald-50 text-emerald-700 border border-emerald-200":item.status==="Under Review"?"bg-amber-50 text-amber-700 border border-amber-200":item.status==="In Progress"?"bg-blue-50 text-blue-700 border border-blue-200":"bg-slate-100 text-slate-600"),children:item.status==="Under Review"?"Pending Approval":item.status})}),
              (0,P.jsx)("td",{className:"py-3 px-4 text-right",children:(0,P.jsxs)("div",{className:"inline-flex items-center justify-end gap-2",children:[
                canToggle!==!1 && (item.status==="Under Review" || item.managerApprovalStatus==="Pending Approval") && (0,P.jsx)("button",{type:"button",onClick:ev=>{ev.stopPropagation();approveFn&&approveFn(e,item.emp.id,item.emp.firstName+" "+item.emp.lastName)},className:"px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-bold shadow-xs transition-colors",children:"Approve ✓"}),
                (0,P.jsx)("button",{type:"button",onClick:ev=>{ev.stopPropagation();i&&i(item.emp)},className:"p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors",title:"View Employee Profile",children:(0,P.jsx)(pe,{className:"w-4 h-4"})})
              ]})})
            ]}))})
          ]})
        ]}),

        // Tab 4: Status History & Audit Trail
        activeTab==="history" && (0,P.jsxs)("div",{className:"bg-white border border-slate-200 rounded-xl shadow-sm",children:[
          (0,P.jsxs)("div",{className:"px-6 py-3.5 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3",children:[
            (0,P.jsx)("h2",{className:"text-sm font-bold text-slate-900",children:"History"}),
            (0,P.jsxs)("div",{className:"flex flex-wrap items-center gap-4 text-xs relative",children:[
              (0,P.jsxs)("div",{className:"relative",children:[
                (0,P.jsxs)("button",{type:"button",onClick:()=>setShowHistRange(!showHistRange),className:"inline-flex items-center justify-between gap-3 px-3 py-1.5 border border-slate-200 rounded-lg text-xs bg-white hover:bg-slate-50 transition-colors min-w-[180px] " + ((histDateFrom||histDateTo)?"text-slate-800 font-medium":"text-slate-400"),children:[
                  (0,P.jsx)("span",{children:(histDateFrom||histDateTo)?((histDateFrom?fmtSysDate(histDateFrom):"...") + " – " + (histDateTo?fmtSysDate(histDateTo):"...")):"Select custom range"}),
                  (0,P.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-3.5 h-3.5 text-slate-400 shrink-0",children:[
                    (0,P.jsx)("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),
                    (0,P.jsx)("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),
                    (0,P.jsx)("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),
                    (0,P.jsx)("line",{x1:"3",y1:"10",x2:"21",y2:"10"})
                  ]})
                ]}),
                showHistRange && (0,P.jsxs)("div",{className:"absolute right-0 top-full mt-1.5 w-64 bg-white border border-slate-200 rounded-xl shadow-xl z-40 p-3 space-y-2.5 text-xs",children:[
                  (0,P.jsxs)("div",{children:[
                    (0,P.jsx)("label",{className:"block text-[11px] font-semibold text-slate-600 mb-1",children:"From Date"}),
                    (0,P.jsx)("input",{type:"date",value:histDateFrom,onChange:ev=>setHistDateFrom(ev.target.value),className:"w-full border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-800"})
                  ]}),
                  (0,P.jsxs)("div",{children:[
                    (0,P.jsx)("label",{className:"block text-[11px] font-semibold text-slate-600 mb-1",children:"To Date"}),
                    (0,P.jsx)("input",{type:"date",value:histDateTo,onChange:ev=>setHistDateTo(ev.target.value),className:"w-full border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-800"})
                  ]}),
                  (0,P.jsxs)("div",{className:"flex items-center justify-end gap-2 pt-1 border-t border-slate-100",children:[
                    (0,P.jsx)("button",{type:"button",onClick:()=>{setHistDateFrom("");setHistDateTo("");setShowHistRange(false);},className:"px-2.5 py-1 text-slate-500 hover:text-slate-800 font-medium",children:"Clear"}),
                    (0,P.jsx)("button",{type:"button",onClick:()=>setShowHistRange(false),className:"px-3 py-1 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700",children:"Apply"})
                  ]})
                ]})
              ]}),
              (0,P.jsxs)("button",{type:"button",onClick:()=>setHistSortOrder(prev=>prev==="desc"?"asc":"desc"),className:"inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 cursor-pointer select-none",children:[
                (0,P.jsx)("span",{children:histSortOrder==="desc"?"Newest First":"Oldest First"}),
                (0,P.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-3.5 h-3.5 text-slate-500",children:[
                  (0,P.jsx)("path",{d:"m3 16 4 4 4-4"}),
                  (0,P.jsx)("path",{d:"M7 20V4"}),
                  (0,P.jsx)("path",{d:"M11 4h10"}),
                  (0,P.jsx)("path",{d:"M11 8h7"}),
                  (0,P.jsx)("path",{d:"M11 12h4"})
                ]})
              ]})
            ]})
          ]}),
          (0,P.jsx)("div",{className:"divide-y divide-slate-100",children:filteredHistory.length > 0 ? filteredHistory.map((log, idx)=>{
            let prevAvail = log.previousAvailabilityStatus || "Inactive";
            let nextAvail = log.newAvailabilityStatus || "Inactive";
            let prevPub = log.previousPublicationStatus || "";
            let nextPub = log.newPublicationStatus || "";
            let isCreated = (log.reason && /initial|created|drafted/i.test(log.reason)) || (prevAvail === nextAvail && prevPub === "Draft" && nextPub === "Draft");
            let showFrom = prevAvail !== nextAvail ? prevAvail : (prevPub || prevAvail);
            let showTo = prevAvail !== nextAvail ? nextAvail : (nextPub || nextAvail);
            return (0,P.jsxs)("div",{className:"px-6 py-4 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-12 hover:bg-slate-50/50 transition-colors text-xs",children:[
              (0,P.jsxs)("div",{className:"w-44 sm:w-48 shrink-0 leading-relaxed",children:[
                (0,P.jsx)("div",{className:"text-slate-600 font-medium",children:log.changedBy || "System"}),
                (0,P.jsx)("div",{className:"text-slate-500 mt-0.5 tabular-nums",children:fmtHistDT(log)})
              ]}),
              (0,P.jsxs)("div",{className:"flex-1 min-w-0 space-y-1 leading-relaxed",children:[
                (0,P.jsx)("div",{style:{color:"#4f46e5"},className:"font-semibold",children:isCreated?"Training Created.":"Training Updated."}),
                isCreated ? (0,P.jsxs)("div",{className:"flex flex-wrap items-center gap-1.5 text-slate-600",children:[
                  (0,P.jsx)("span",{className:"font-bold text-slate-800",children:"Title:"}),
                  (0,P.jsx)("span",{className:"text-slate-500",children:log.programmeName || e.name})
                ]}) : (0,P.jsxs)("div",{className:"flex flex-wrap items-center gap-1.5 text-slate-600",children:[
                  (0,P.jsxs)("span",{className:"font-bold text-slate-800",children:[log.fieldLabel || "Status", ":"]}),
                  (0,P.jsx)("span",{className:"line-through text-slate-400",children:log.previousValue || showFrom}),
                  (0,P.jsx)("span",{className:"text-slate-400",children:"›"}),
                  (0,P.jsx)("span",{className:"text-slate-600",children:log.newValue || showTo})
                ]}),
                log.reason && (0,P.jsxs)("div",{className:"flex flex-wrap items-center gap-1.5 text-slate-500",children:[
                  (0,P.jsx)("span",{className:"font-bold text-slate-700",children:"Reason:"}),
                  (0,P.jsx)("span",{className:"text-slate-500",children:log.reason})
                ]})
              ]})
            ]},log.id || idx);
          }) : (0,P.jsx)("div",{className:"px-6 py-8 text-center text-slate-400 text-xs",children:"No availability status changes recorded yet for this training."})})
        ]})
      ]})
    ]}),

    availModal && (0,P.jsx)("div",{className:"fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-150",children:(0,P.jsxs)("div",{className:"bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden border border-slate-200",children:[
      (0,P.jsxs)("div",{className:"p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50",children:[
        (0,P.jsx)("h3",{className:"font-bold text-slate-900 text-sm",children:availModal.targetStatus==="Inactive"?"Deactivate Training":"Activate Training"}),
        (0,P.jsx)("button",{type:"button",onClick:()=>!isBusy&&setAvailModal(null),className:"p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60",children:(0,P.jsx)(N,{className:"w-4 h-4"})})
      ]}),
      (0,P.jsxs)("div",{className:"p-6 space-y-4",children:[
        (0,P.jsx)("div",{className:"text-sm font-bold text-slate-900",children:availModal.targetStatus==="Inactive"?"Are you sure you want to make this training inactive?":"Are you sure you want to activate this training?"}),
        (0,P.jsx)("p",{className:"text-xs text-slate-600 leading-relaxed",children:availModal.targetStatus==="Inactive"?"This training will no longer be available for new assignments. Employees who are already assigned this training can continue their training.":"This training will become available for new assignments."}),
        (0,P.jsxs)("div",{className:"bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs space-y-1",children:[
          (0,P.jsx)("div",{className:"font-semibold text-slate-800",children:e.name}),
          (0,P.jsxs)("div",{className:"text-slate-500",children:["Publication Status: ",pubStatus," • Availability: ",availStatus," → ",availModal.targetStatus]})
        ]}),
        (0,P.jsxs)("div",{children:[
          (0,P.jsxs)("label",{className:"inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 mb-1",children:[(0,P.jsx)("span",{children:"Reason (optional)"}),(0,P.jsx)(InfoTip,{text:"Optional note recorded in the audit history for this availability change."})]}),
          (0,P.jsx)("input",{type:"text",value:availModal.reason,onChange:ev=>setAvailModal({...availModal,reason:ev.target.value}),placeholder:"Enter reason for audit history...",className:"w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20"})
        ]})
      ]}),
      (0,P.jsxs)("div",{className:"px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end gap-3",children:[
        (0,P.jsx)("button",{type:"button",disabled:isBusy,onClick:()=>setAvailModal(null),className:"px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors",children:"Cancel"}),
        (0,P.jsx)("button",{type:"button",disabled:isBusy,onClick:handleConfirmAvailToggle,style:{backgroundColor:availModal.targetStatus==="Inactive"?"#e11d48":"#2563eb",color:"#ffffff"},className:"px-5 py-2 text-xs font-bold text-white rounded-lg shadow-sm transition-colors " + (availModal.targetStatus==="Inactive"?"bg-rose-600 hover:bg-rose-700":"bg-blue-600 hover:bg-blue-700"),children:isBusy?"Updating...":"Confirm"})
      ]})
    ]})})
  ]});
}
const SKILL_QUESTION_BANK = {
  "account management": {
    Beginner: [
      { type: "single_choice", marks: 5, text: "What is the primary objective of enterprise Account Management in CollabCRM?", options: ["Maximizing client retention, SLA adherence, and long-term value", "Eliminating customer onboarding documentation", "Replacing recurring account reviews with ad-hoc emails", "Bypassing stakeholder escalation matrices"], correctIndex: 0 },
      { type: "true_false", marks: 5, text: "True or False: Proactive SLA tracking and regular stakeholder check-ins reduce enterprise client churn.", correctAnswer: "True" }
    ],
    Intermediate: [
      { type: "single_choice", marks: 5, text: "When a key enterprise client reports declining adoption metrics, which Account Management action should be taken first?", options: ["Conduct a structured root-cause QBR with stakeholders and align an adoption recovery plan", "Wait until contract renewal quarter to address usage", "Close open support tickets without client verification", "Transfer the account to billing operations"], correctIndex: 0 },
      { type: "multiple_choice", marks: 5, text: "Which artifacts are essential for governed Account Management health reviews? (Select all that apply)", options: ["SLA compliance scorecard", "Stakeholder engagement & risk register", "Expansion & renewal roadmap", "Unverified personal spreadsheets"], correctIndices: [0, 1, 2] }
    ],
    Advanced: [
      { type: "single_choice", marks: 5, text: "How should an Account Manager structure executive governance for multi-region enterprise renewals?", options: ["Align multi-year outcome KPIs, executive sponsors, and proactive risk mitigation playbooks", "Offer flat across-the-board discounting before reviewing utilization", "Rely solely on automated renewal invoices", "Separate delivery metrics from business value realization"], correctIndex: 0 },
      { type: "dropdown", marks: 5, text: "Select the highest-leverage retention signal for strategic Enterprise Account Management:", options: ["Executive sponsorship alignment paired with verified business ROI metrics", "Total count of promotional emails sent", "Average time spent formatting internal slides"], correctIndex: 0 }
    ]
  },
  "data mining": {
    Beginner: [
      { type: "single_choice", marks: 5, text: "Which step prepares raw enterprise datasets by removing duplicates and handling missing values before pattern discovery?", options: ["Data cleaning and preprocessing", "Production model deprecation", "UI theme serialization", "Manual firewall provisioning"], correctIndex: 0 },
      { type: "true_false", marks: 5, text: "True or False: Exploratory data profiling helps identify outliers and schema anomalies prior to mining patterns.", correctAnswer: "True" }
    ],
    Intermediate: [
      { type: "multiple_choice", marks: 5, text: "Which techniques are commonly applied in Data Mining for discovering structure in large datasets? (Select all that apply)", options: ["Clustering (e.g., k-means)", "Association rule mining", "Anomaly & outlier detection", "CSS flexbox layout"], correctIndices: [0, 1, 2] },
      { type: "single_choice", marks: 5, text: "Why is dataset splitting (train/validation/test) important when validating mined predictive patterns?", options: ["To evaluate generalization and detect overfitting before deployment", "To duplicate identical rows into production logs", "To bypass schema validation constraints", "To increase database lock contention"], correctIndex: 0 }
    ],
    Advanced: [
      { type: "single_choice", marks: 5, text: "How do you handle severe class imbalance and data leakage in high-dimensional enterprise Data Mining pipelines?", options: ["Enforce pipeline-isolated resampling/cross-validation and optimize precision-recall or cost-sensitive metrics", "Oversample the entire dataset prior to train/test splitting", "Evaluate solely on raw overall accuracy", "Drop all timestamp features indiscriminately"], correctIndex: 0 },
      { type: "true_false", marks: 5, text: "True or False: Feature normalization or leakage inside cross-validation folds should occur strictly on training splits only.", correctAnswer: "True" }
    ]
  },
  "react": {
    Beginner: [
      { type: "single_choice", marks: 5, text: "Why should stable unique keys be provided when rendering lists in React?", options: ["They help React accurately identify which items changed, added, or removed during reconciliation", "They automatically encrypt component state", "They disable virtual DOM diffing completely", "They replace CSS class scoping"], correctIndex: 0 },
      { type: "true_false", marks: 5, text: "True or False: React state updates should be treated as immutable rather than mutating existing state arrays/objects in place.", correctAnswer: "True" }
    ],
    Intermediate: [
      { type: "single_choice", marks: 5, text: "When should React hooks like useMemo or useCallback be introduced?", options: ["To stabilize referential identity for memoized children or avoid expensive redundant recalculations", "Around every primitive variable inside a component", "To replace API error handling", "Only inside class constructors"], correctIndex: 0 },
      { type: "multiple_choice", marks: 5, text: "Which practices prevent stale closures and race conditions inside React useEffect hooks? (Select all that apply)", options: ["Specify accurate dependency arrays", "Return a cleanup/abort handler for async requests", "Use functional state updates (prev => ...) when deriving from prior state", "Mutate props directly inside render"], correctIndices: [0, 1, 2] }
    ],
    Advanced: [
      { type: "single_choice", marks: 5, text: "Which architecture pattern minimizes unnecessary sub-tree re-renders in complex React dashboards?", options: ["Colocating state near consumers, splitting fast-changing context slices, and memoizing stable boundaries", "Lifting every keystroke into a single root provider without selectors", "Recreating component definitions inline inside parent render", "Disabling React StrictMode in development"], correctIndex: 0 },
      { type: "true_false", marks: 5, text: "True or False: Derived values computable directly from props or state during render generally should not be duplicated into redundant useState + useEffect sync.", correctAnswer: "True" }
    ]
  },
  "typescript": {
    Beginner: [
      { type: "single_choice", marks: 5, text: "What advantage does TypeScript provide over untyped JavaScript during development?", options: ["Compile-time static type checking to catch contract and nullability errors early", "Bypassing all runtime API validation automatically", "Disabling browser compatibility", "Eliminating unit tests entirely"], correctIndex: 0 },
      { type: "true_false", marks: 5, text: "True or False: Strict null checks help prevent unexpected undefined/null property access bugs at compile time.", correctAnswer: "True" }
    ],
    Intermediate: [
      { type: "single_choice", marks: 5, text: "How does TypeScript model exhaustive handling of discriminated unions?", options: ["By narrowing on a common literal discriminant field with a never check in the default branch", "By casting every union variable to any", "By suppressing compiler diagnostics globally", "By converting interfaces into untyped strings"], correctIndex: 0 },
      { type: "multiple_choice", marks: 5, text: "Which TypeScript constructs improve type safety for API contracts? (Select all that apply)", options: ["Readonly & Record utility types", "Generic constraints (<T extends ...>)", "Type predicates / unknown narrowing", "Using 'any' across all service boundaries"], correctIndices: [0, 1, 2] }
    ],
    Advanced: [
      { type: "single_choice", marks: 5, text: "Why is 'unknown' preferred over 'any' for parsing external JSON payloads in TypeScript?", options: ["'unknown' enforces explicit runtime type narrowing or schema validation before property access", "'unknown' skips all compiler checks", "'unknown' increases runtime memory allocation", "'unknown' disables interface inheritance"], correctIndex: 0 },
      { type: "true_false", marks: 5, text: "True or False: Conditional types paired with 'infer' enable extracting return or element types cleanly across reusable library abstractions.", correctAnswer: "True" }
    ]
  },
  "node.js": {
    Beginner: [
      { type: "single_choice", marks: 5, text: "How does Node.js handle concurrent I/O operations efficiently on a single JavaScript thread?", options: ["Via an asynchronous non-blocking event loop and underlying libuv worker/OS I/O", "By spawning a full virtual machine per HTTP header", "By blocking all requests until disk writes finish synchronously", "By disabling TCP keep-alive"], correctIndex: 0 },
      { type: "true_false", marks: 5, text: "True or False: Avoiding synchronous blocking calls (like fs.readFileSync) in hot request handlers keeps Node.js event loop latency low.", correctAnswer: "True" }
    ],
    Intermediate: [
      { type: "multiple_choice", marks: 5, text: "Which practices improve reliability and scalability in production Node.js APIs? (Select all that apply)", options: ["Graceful SIGTERM shutdown draining active connections", "Structured request timeouts and connection pooling", "Streaming large payloads with backpressure handling", "Catching and ignoring unhandled promise rejections silently"], correctIndices: [0, 1, 2] },
      { type: "single_choice", marks: 5, text: "What causes Node.js Stream backpressure, and how should writable streams handle it?", options: ["Write buffer saturation; wait for the 'drain' event or use stream.pipeline()", "Slow CSS rendering; force synchronous writes", "Excess TLS certificates; restart the process", "Low DNS TTL; disable buffers"], correctIndex: 0 }
    ],
    Advanced: [
      { type: "single_choice", marks: 5, text: "How should CPU-intensive workloads be offloaded so they do not starve the main Node.js HTTP event loop?", options: ["Delegate to Worker Threads, dedicated job queues, or isolated worker services", "Run heavy nested crypto loops inline inside Express middleware", "Switch all async routes to blocking readFileSync", "Increase HTTP request payload size limits"], correctIndex: 0 },
      { type: "true_false", marks: 5, text: "True or False: Monitoring event-loop lag and heap growth helps detect CPU starvation and memory leaks before outages occur.", correctAnswer: "True" }
    ]
  },
  "api security & oauth2": {
    Beginner: [
      { type: "single_choice", marks: 5, text: "Why must OAuth2 bearer access tokens (JWTs) always be validated cleanly in backend API gateways?", options: ["To verify cryptographic signature, expiration, issuer, and authorized scopes/claims", "To reduce HTML font loading speed", "To store plain-text user passwords inside URLs", "To disable HTTPS encryption"], correctIndex: 0 },
      { type: "true_false", marks: 5, text: "True or False: Enforcing least-privilege RBAC scopes limits blast radius if a single integration token is compromised.", correctAnswer: "True" }
    ],
    Intermediate: [
      { type: "single_choice", marks: 5, text: "Which OAuth2 enhancement mitigates authorization code interception for SPAs and mobile public clients?", options: ["Authorization Code Flow with PKCE (Proof Key for Code Exchange)", "Implicit flow returning tokens in URL hash", "Static shared API passwords in query params", "Disabling redirect_uri validation"], correctIndex: 0 },
      { type: "multiple_choice", marks: 5, text: "Which controls are critical to secure OAuth2/JWT APIs? (Select all that apply)", options: ["Short-lived access tokens with refresh token rotation", "Strict redirect URI exact matching", "Restrictive CORS allowlists paired with TLS", "Accepting 'alg: none' JWT headers"], correctIndices: [0, 1, 2] }
    ],
    Advanced: [
      { type: "single_choice", marks: 5, text: "What security risk arises if a JWT verification library trusts the token's unverified 'alg' header dynamically without pinning expected algorithms?", options: ["Algorithm confusion attacks allowing asymmetric public keys to be abused as HMAC secrets", "Slow database indexing", "Browser cookie compression failures", "Duplicate SVG rendering"], correctIndex: 0 },
      { type: "true_false", marks: 5, text: "True or False: Refresh token reuse detection allows revoking an entire token family if a rotated token is replayed.", correctAnswer: "True" }
    ]
  },
  "business analysis": {
    Beginner: [
      { type: "single_choice", marks: 5, text: "What is the primary purpose of a Business Requirements Document (BRD) and acceptance criteria?", options: ["To align business stakeholders and engineering on measurable scope and verifiable outcomes", "To prescribe CSS hex colors before problem discovery", "To bypass UAT sign-off", "To eliminate stakeholder interviews"], correctIndex: 0 },
      { type: "true_false", marks: 5, text: "True or False: Well-written acceptance criteria make QA test scenarios and UAT validation unambiguous.", correctAnswer: "True" }
    ],
    Intermediate: [
      { type: "multiple_choice", marks: 5, text: "Which activities belong in core Business Analysis & requirement lifecycle management? (Select all that apply)", options: ["Stakeholder elicitation & workshop facilitation", "Process modeling (as-is vs to-be workflows)", "Edge-case & non-functional requirement tracing", "Approving production deploys without UAT"], correctIndices: [0, 1, 2] },
      { type: "single_choice", marks: 5, text: "How should conflicting requirements from multiple departments be resolved?", options: ["Evaluate business impact, compliance constraints, and align prioritization with sponsors", "Implement all conflicting paths silently", "Delete the minority stakeholder's request without notice", "Defer clarification until post-launch"], correctIndex: 0 }
    ],
    Advanced: [
      { type: "single_choice", marks: 5, text: "When scoping complex enterprise workflow changes, how does a Business Analyst prevent late-stage UAT rework?", options: ["Maintain bidirectional traceability from business KPIs to edge cases, data contracts, and UAT scripts", "Skip workflow state-transition modeling", "Focus only on happy-path UI mockups", "Freeze requirements before discovery interviews"], correctIndex: 0 },
      { type: "true_false", marks: 5, text: "True or False: Distinguishing policy/regulatory constraints from flexible UI preferences prevents costly scope creep.", correctAnswer: "True" }
    ]
  },
  "sql": {
    Beginner: [
      { type: "single_choice", marks: 5, text: "Which SQL clause filters aggregated groups after GROUP BY has been evaluated?", options: ["HAVING", "WHERE", "ORDER BY", "DISTINCT"], correctIndex: 0 },
      { type: "true_false", marks: 5, text: "True or False: A LEFT JOIN preserves all rows from the left table even when no matching row exists in the right table.", correctAnswer: "True" }
    ],
    Intermediate: [
      { type: "single_choice", marks: 5, text: "Why should selective indexes be placed carefully on frequently queried filter/join columns?", options: ["Indexes speed up read lookups while adding modest overhead to writes and storage", "Indexes delete duplicate rows automatically without constraints", "Indexes disable ACID transactions", "Indexes remove the need for normalized keys"], correctIndex: 0 },
      { type: "multiple_choice", marks: 5, text: "Which SQL practices help avoid slow queries and inaccurate aggregations? (Select all that apply)", options: ["Avoiding SELECT * in high-volume reporting queries", "Using CTEs / window functions for clear ranking logic", "Checking EXPLAIN execution plans on large joins", "Joining many-to-many tables without deduplicating or grouping"], correctIndices: [0, 1, 2] }
    ],
    Advanced: [
      { type: "single_choice", marks: 5, text: "When tuning a slow parameterized reporting query, what problem can occur if a leading wildcard LIKE '%term' or non-sargable function wraps an indexed column?", options: ["The optimizer cannot use a standard B-Tree index seek and falls back to full scans", "Foreign keys convert automatically to views", "The database drops transaction isolation", "GROUP BY stops accepting aggregates"], correctIndex: 0 },
      { type: "true_false", marks: 5, text: "True or False: Window functions (ROW_NUMBER, SUM OVER) compute rankings and running totals without collapsing individual rows.", correctAnswer: "True" }
    ]
  },
  "gdpr & data privacy": {
    Beginner: [
      { type: "single_choice", marks: 5, text: "Under GDPR data minimization principles, what personal data should enterprise systems collect and retain?", options: ["Only data strictly necessary, accurate, and retained no longer than its lawful purpose", "All possible user attributes indefinitely", "Sensitive PII inside public log files", "Unencrypted backups shared across teams"], correctIndex: 0 },
      { type: "true_false", marks: 5, text: "True or False: Data subjects have enforceable rights to access, rectify, and request erasure of personal data under defined GDPR rules.", correctAnswer: "True" }
    ],
    Intermediate: [
      { type: "multiple_choice", marks: 5, text: "Which technical & organizational controls strengthen GDPR compliance? (Select all that apply)", options: ["Role-based access controls & audit logging", "Encryption in transit and at rest", "Defined data retention & automated purge policies", "Exporting employee PII to personal USB drives"], correctIndices: [0, 1, 2] },
      { type: "single_choice", marks: 5, text: "Within what timeframe must supervisory authorities generally be notified of a qualifying personal data breach under GDPR Article 33?", options: ["Within 72 hours of becoming aware of the breach", "Within 90 business days", "Only during annual audits", "Never if backups exist"], correctIndex: 0 }
    ],
    Advanced: [
      { type: "single_choice", marks: 5, text: "When introducing a high-risk automated employee profiling feature, what GDPR governance artifact is required prior to processing?", options: ["A Data Protection Impact Assessment (DPIA) documenting risks and safeguards", "Only a marketing press release", "A CSS styleguide update", "Retroactive verbal approval"], correctIndex: 0 },
      { type: "true_false", marks: 5, text: "True or False: Privacy by Design requires embedding data protection safeguards into architecture defaults from project inception.", correctAnswer: "True" }
    ]
  },
  "cloud infrastructure": {
    Beginner: [
      { type: "single_choice", marks: 5, text: "What is the key benefit of managing Cloud Infrastructure using Infrastructure as Code (IaC)?", options: ["Version-controlled, repeatable, and peer-reviewed environment provisioning", "Manual point-and-click configuration drift across stages", "Disabling IAM least privilege", "Hardcoding cloud secrets inside browser JS"], correctIndex: 0 },
      { type: "true_false", marks: 5, text: "True or False: Health probes (readiness and liveness checks) allow orchestrators to route traffic only to healthy instances.", correctAnswer: "True" }
    ],
    Intermediate: [
      { type: "multiple_choice", marks: 5, text: "Which pillars support resilient multi-environment Cloud Infrastructure? (Select all that apply)", options: ["Automated CI/CD deployment pipelines", "Private subnets & scoped IAM roles", "Centralized logs, metrics, and alerting", "Shared root admin credentials across services"], correctIndices: [0, 1, 2] },
      { type: "single_choice", marks: 5, text: "What distinguishes a Kubernetes readiness probe failure from a liveness probe failure?", options: ["Readiness stops routing new traffic to the Pod; liveness restarts the container", "Both permanently delete the database volume", "Readiness scales DNS records globally", "Liveness disables TLS termination"], correctIndex: 0 }
    ],
    Advanced: [
      { type: "single_choice", marks: 5, text: "How do multi-zone deployments with Pod Disruption Budgets (PDBs) protect availability during node upgrades?", options: ["They guarantee a minimum quorum of healthy replicas remain online across failure domains", "They prevent horizontal autoscaling indefinitely", "They force all replicas onto a single host", "They disable TLS certificate rotation"], correctIndex: 0 },
      { type: "true_false", marks: 5, text: "True or False: Immutable infrastructure deployments reduce configuration drift and simplify fast rollbacks.", correctAnswer: "True" }
    ]
  },
  "kubernetes security": {
    Beginner: [
      { type: "single_choice", marks: 5, text: "What does RBAC (Role-Based Access Control) enforce inside a Kubernetes cluster?", options: ["Least-privilege permissions controlling which identities can perform actions on cluster resources", "Faster container image layer compression", "Automatic DNS load balancing across browsers", "Unrestricted cluster-admin access for all Pods"], correctIndex: 0 },
      { type: "true_false", marks: 5, text: "True or False: Running containers as non-root with read-only root filesystems reduces workload compromise impact.", correctAnswer: "True" }
    ],
    Intermediate: [
      { type: "single_choice", marks: 5, text: "What is the primary role of Kubernetes NetworkPolicies in multi-tenant clusters?", options: ["Restrict Pod-to-Pod and namespace ingress/egress traffic using explicit allow rules", "Encrypt source repositories inside Git", "Manage developer laptop SSH keys", "Replace container registries"], correctIndex: 0 },
      { type: "multiple_choice", marks: 5, text: "Which controls harden Kubernetes workloads against privilege escalation? (Select all that apply)", options: ["Drop unnecessary Linux capabilities and set allowPrivilegeEscalation: false", "Scan container images for CVEs in CI/CD before admission", "Isolate ServiceAccount tokens and disable automount where unneeded", "Mount hostPath '/' read-write into application Pods"], correctIndices: [0, 1, 2] }
    ],
    Advanced: [
      { type: "single_choice", marks: 5, text: "How do Admission Controllers (e.g., Pod Security Admission / OPA Gatekeeper) strengthen cluster security posture?", options: ["They intercept API requests and reject non-compliant Pod manifests before scheduling", "They run only after a container is compromised", "They bypass kube-apiserver authentication", "They store plaintext secrets inside ConfigMaps"], correctIndex: 0 },
      { type: "true_false", marks: 5, text: "True or False: Encrypting etcd Secrets at rest with KMS envelope encryption protects cluster credentials against snapshot exposure.", correctAnswer: "True" }
    ]
  },
  "project management (agile/scrum)": {
    Beginner: [
      { type: "single_choice", marks: 5, text: "Who owns maximizing product value and ordering the Product Backlog in Scrum?", options: ["The Product Owner", "Only the infrastructure vendor", "An external auditor", "The build server"], correctIndex: 0 },
      { type: "true_false", marks: 5, text: "True or False: A clear Definition of Done ensures shared quality standards for every completed Sprint increment.", correctAnswer: "True" }
    ],
    Intermediate: [
      { type: "single_choice", marks: 5, text: "What is the key objective of a Sprint Retrospective?", options: ["Inspect team collaboration, tooling, and workflow to commit concrete process improvements", "Assign blame for missed story points", "Skip backlog refinement for next month", "Rewrite production database schemas"], correctIndex: 0 },
      { type: "multiple_choice", marks: 5, text: "Which practices keep Agile delivery predictable? (Select all that apply)", options: ["Refining and slicing stories prior to Sprint Planning", "Tracking blockers early in Daily Scrums", "Demoing working increments at Sprint Review", "Adding unvetted scope silently mid-sprint"], correctIndices: [0, 1, 2] }
    ],
    Advanced: [
      { type: "single_choice", marks: 5, text: "How should cross-team dependencies and flow bottlenecks be managed in scaled Agile delivery?", options: ["Visualize dependency critical paths early, limit WIP, and coordinate integration milestones", "Hide cross-team blockers until release day", "Measure individual velocity competitively across engineers", "Eliminate Sprint Reviews"], correctIndex: 0 },
      { type: "true_false", marks: 5, text: "True or False: Using flow metrics (cycle time, throughput, WIP limits) alongside empirical velocity improves delivery forecasting.", correctAnswer: "True" }
    ]
  },
  "ui/ux research and testing": {
    Beginner: [
      { type: "single_choice", marks: 5, text: "What does usability testing primarily measure with representative users?", options: ["Whether real users can complete target workflows effectively, efficiently, and without confusion", "Database query CPU consumption", "Server TLS handshake speed", "Number of CSS variables in source code"], correctIndex: 0 },
      { type: "true_false", marks: 5, text: "True or False: Conducting moderated task-based tests before full implementation uncovers navigation friction early.", correctAnswer: "True" }
    ],
    Intermediate: [
      { type: "multiple_choice", marks: 5, text: "Which outputs belong in actionable UX research synthesis? (Select all that apply)", options: ["Observed severity-ranked usability findings", "Task completion success & error patterns", "Design recommendations tied to user workflows", "Leading participants toward predetermined answers"], correctIndices: [0, 1, 2] },
      { type: "single_choice", marks: 5, text: "When evaluating an enterprise workflow with Nielsen's heuristics, what does 'Visibility of system status' require?", options: ["Timely, clear UI feedback informing users of current state, progress, or saved actions", "Hiding validation errors until page reload", "Using identical colors for disabled and primary buttons", "Removing confirmation states"], correctIndex: 0 }
    ],
    Advanced: [
      { type: "single_choice", marks: 5, text: "How should qualitative interviews and quantitative funnel telemetry be combined for complex B2B UX redesigns?", options: ["Use telemetry to locate drop-offs at scale and qualitative sessions to diagnose why friction occurs", "Rely solely on internal stakeholder opinions", "Ignore accessibility contrast and keyboard navigation", "Ship without measurable baseline metrics"], correctIndex: 0 },
      { type: "true_false", marks: 5, text: "True or False: Testing accessibility (WCAG contrast, keyboard flow, clear focus states) during UX validation prevents costly remediation.", correctAnswer: "True" }
    ]
  },
  "figma": {
    Beginner: [
      { type: "single_choice", marks: 5, text: "Why are Auto Layout frames and reusable Components essential in Figma design systems?", options: ["They enforce responsive spacing and allow consistent design updates across screens", "They disable prototype linking", "They remove color variables", "They prevent developer inspection"], correctIndex: 0 },
      { type: "true_false", marks: 5, text: "True or False: Component variants consolidate related states (default, hover, disabled) under clear structured properties.", correctAnswer: "True" }
    ],
    Intermediate: [
      { type: "single_choice", marks: 5, text: "How do Figma Variables and semantic Design Tokens improve design-to-engineering handoff?", options: ["They map reusable naming (surface, border, accent) cleanly between Figma modes and frontend code", "They flatten all vector icons into large bitmaps", "They lock frames so developers cannot read spacing", "They duplicate unlinked styles on every screen"], correctIndex: 0 },
      { type: "multiple_choice", marks: 5, text: "What makes a Figma file Dev-Handoff ready? (Select all that apply)", options: ["Named layers & Auto Layout constraints", "Documented empty, error, and loading states", "Linked design tokens & component specs", "Detached undocumented components everywhere"], correctIndices: [0, 1, 2] }
    ],
    Advanced: [
      { type: "single_choice", marks: 5, text: "How do multi-brand or themed Figma Design Systems stay maintainable at enterprise scale?", options: ["Split foundational primitives from semantic variable collections and govern library versioning", "Duplicate separate unlinked files per page", "Hardcode raw hex values on every component instance", "Disallow component properties"], correctIndex: 0 },
      { type: "true_false", marks: 5, text: "True or False: Maintaining parity between Figma component props and coded React props eliminates ambiguity during implementation.", correctAnswer: "True" }
    ]
  },
  "analytics": {
    Beginner: [
      { type: "single_choice", marks: 5, text: "What differentiates a leading behavioral KPI from a vanity metric in product analytics?", options: ["Leading KPIs reflect meaningful user activation/retention aligned with business decisions", "Vanity metrics ignore context while inflating raw pageview counts", "Leading KPIs exclude cohort behavior", "Vanity metrics replace conversion funnels"], correctIndex: 0 },
      { type: "true_false", marks: 5, text: "True or False: A clean event tracking taxonomy ensures consistent naming and properties across dashboards.", correctAnswer: "True" }
    ],
    Intermediate: [
      { type: "multiple_choice", marks: 5, text: "Which analytics dimensions help diagnose onboarding drop-off accurately? (Select all that apply)", options: ["Step-by-step funnel conversion rates", "Time-to-first-value segmented by user cohort", "Error/abandonment event correlation", "Reporting unsegmented lifetime totals only"], correctIndices: [0, 1, 2] },
      { type: "single_choice", marks: 5, text: "Why should cohort retention analysis accompany aggregate DAU/MAU reporting?", options: ["Aggregate growth can mask rising churn among newly onboarded cohorts", "Cohorts eliminate the need for clean schemas", "DAU/MAU requires disabling timestamps", "Cohorts only track offline spreadsheets"], correctIndex: 0 }
    ],
    Advanced: [
      { type: "single_choice", marks: 5, text: "When designing A/B telemetry experiments for low-traffic enterprise features, what analytical guard prevents false conclusions?", options: ["Pre-compute minimum detectable effect & sample power and monitor guardrail metrics before calling winners", "Stop the test as soon as p < 0.05 on day one", "Mix pre-experiment biased cohorts", "Ignore statistical significance completely"], correctIndex: 0 },
      { type: "true_false", marks: 5, text: "True or False: Instrumenting data quality checks against schema drift protects downstream executive KPI dashboards.", correctAnswer: "True" }
    ]
  },
  "java kotlin": {
    Beginner: [
      { type: "single_choice", marks: 5, text: "How does Kotlin help eliminate common NullPointerException defects compared to legacy Java code?", options: ["Through explicit nullable (?) vs non-nullable types enforced by the compiler", "By converting every exception into empty logs", "By disabling type inference", "By removing interfaces"], correctIndex: 0 },
      { type: "true_false", marks: 5, text: "True or False: Kotlin data classes automatically generate equals(), hashCode(), toString(), and copy() methods.", correctAnswer: "True" }
    ],
    Intermediate: [
      { type: "multiple_choice", marks: 5, text: "Which Kotlin features produce concise, maintainable JVM backend services? (Select all that apply)", options: ["Sealed classes/interfaces for bounded domain states", "Structured concurrency with Coroutines", "Immutability via val and read-only collection interfaces", "Excessive !! non-null assertions everywhere"], correctIndices: [0, 1, 2] },
      { type: "single_choice", marks: 5, text: "What does structured concurrency ensure when a parent Kotlin coroutine scope is cancelled?", options: ["All child coroutines are cooperatively cancelled and cleaned up without leaking work", "Child coroutines continue running indefinitely as zombies", "The JVM exits immediately with sigkill", "All threads become blocking"], correctIndex: 0 }
    ],
    Advanced: [
      { type: "single_choice", marks: 5, text: "Why should blocking JDBC or I/O calls inside Kotlin coroutines be dispatched on Dispatchers.IO rather than Default/Main?", options: ["Dispatchers.IO expands for blocking wait without starving CPU-bound dispatcher threads", "Dispatchers.IO turns SQL into NoSQL automatically", "Dispatchers.IO disables garbage collection", "Dispatchers.Main executes database transactions faster"], correctIndex: 0 },
      { type: "true_false", marks: 5, text: "True or False: Value classes (inline classes) in Kotlin allow stronger domain type safety with minimal runtime allocation overhead.", correctAnswer: "True" }
    ]
  },
  "postgresql": {
    Beginner: [
      { type: "single_choice", marks: 5, text: "Which PostgreSQL constraint ensures values in a child table reference an existing primary/unique row in a parent table?", options: ["FOREIGN KEY constraint", "CHECK NULL constraint", "VIEW ALIAS", "VACUUM FULL"], correctIndex: 0 },
      { type: "true_false", marks: 5, text: "True or False: PostgreSQL supports ACID-compliant transactions with BEGIN, COMMIT, and ROLLBACK.", correctAnswer: "True" }
    ],
    Intermediate: [
      { type: "multiple_choice", marks: 5, text: "Which PostgreSQL tools help diagnose and optimize query latency? (Select all that apply)", options: ["EXPLAIN (ANALYZE, BUFFERS)", "Partial & composite indexes tailored to predicates", "pg_stat_statements top-query tracking", "Disabling autovacuum permanently on high-churn tables"], correctIndices: [0, 1, 2] },
      { type: "single_choice", marks: 5, text: "Which PostgreSQL index type is best suited for containment queries (@>) inside JSONB columns?", options: ["GIN (Generalized Inverted Index)", "Unindexed sequential table scan", "Single-column HASH on timestamp", "Disabled toast table"], correctIndex: 0 }
    ],
    Advanced: [
      { type: "single_choice", marks: 5, text: "Why does PostgreSQL MVCC (Multi-Version Concurrency Control) require healthy autovacuum tuning on write-heavy tables?", options: ["To reclaim dead tuples, prevent table/index bloat, and avoid transaction ID wraparound", "To convert relational tables into CSV files", "To disable concurrent readers during writes", "To remove WAL recovery guarantees"], correctIndex: 0 },
      { type: "true_false", marks: 5, text: "True or False: Using connection pooling (e.g., PgBouncer) limits backend memory overhead and lock contention under high concurrency.", correctAnswer: "True" }
    ]
  },
  "architecture": {
    Beginner: [
      { type: "single_choice", marks: 5, text: "Why are API gateways and clear service boundaries used in modern software architecture?", options: ["To centralize authentication, rate limiting, and decouple domain responsibilities", "To duplicate business validation inconsistently in every UI component", "To force tight database coupling across unrelated teams", "To remove logging"], correctIndex: 0 },
      { type: "true_false", marks: 5, text: "True or False: Separating stateless compute from managed persistent state simplifies horizontal scaling.", correctAnswer: "True" }
    ],
    Intermediate: [
      { type: "multiple_choice", marks: 5, text: "Which reliability patterns prevent cascading failures across distributed services? (Select all that apply)", options: ["Bounded timeouts and jittered retries", "Circuit breakers & bulkheads", "Idempotency keys on mutating endpoints", "Unbounded synchronous fan-out chains without timeouts"], correctIndices: [0, 1, 2] },
      { type: "single_choice", marks: 5, text: "How does multi-tenant architecture maintain strict tenant data isolation?", options: ["Enforce tenant context verification at auth middleware and row/schema isolation layers", "Trust client-supplied tenantId strings without token claims", "Share mutable global caches without tenant prefixes", "Bypass authorization checks for batch endpoints"], correctIndex: 0 }
    ],
    Advanced: [
      { type: "single_choice", marks: 5, text: "When should asynchronous event-driven workflows (Outbox + Queue) be chosen over synchronous distributed two-phase commits?", options: ["When decoupling cross-service side effects while guaranteeing reliable eventual consistency", "When immediate UI button hover states need Kafka topics", "When avoiding observability tracing", "When single-table atomic updates suffice"], correctIndex: 0 },
      { type: "true_false", marks: 5, text: "True or False: Architectural Decision Records (ADRs) capture trade-offs and constraints so teams understand why decisions were made.", correctAnswer: "True" }
    ]
  },
  "system architecture": {
    Beginner: [
      { type: "single_choice", marks: 5, text: "What role does caching (e.g., Redis / CDN) play in high-read System Architecture?", options: ["Reduces latency and database load for frequently accessed, relatively stable data", "Replaces durable ACID primary storage for financial ledgers", "Eliminates authentication checks", "Increases payload serialization size"], correctIndex: 0 },
      { type: "true_false", marks: 5, text: "True or False: Designing explicit failure modes and graceful degradation improves overall system availability.", correctAnswer: "True" }
    ],
    Intermediate: [
      { type: "single_choice", marks: 5, text: "In event-driven architectures, what problem does the Transactional Outbox pattern solve?", options: ["Eliminates dual-write inconsistency between database commits and message broker publishes", "Replaces all HTTP endpoints with FTP", "Removes database foreign keys", "Disables consumer retries"], correctIndex: 0 },
      { type: "multiple_choice", marks: 5, text: "Which attributes are core SLIs/SLOs when designing scalable platforms? (Select all that apply)", options: ["Tail latency (p95 / p99)", "Error rate / availability ratio", "Throughput & saturation headroom", "Count of unreviewed commits"], correctIndices: [0, 1, 2] }
    ],
    Advanced: [
      { type: "single_choice", marks: 5, text: "How do idempotent consumers paired with dead-letter queues (DLQs) protect event-bus reliability?", options: ["Safe at-least-once retries without duplicate side effects plus isolated inspection of poison messages", "Immediate silent message deletion on first transient error", "Blocking the entire partition forever on invalid payloads", "Disabling schema versioning"], correctIndex: 0 },
      { type: "true_false", marks: 5, text: "True or False: Backpressure controls and load shedding protect downstream databases from collapse during traffic spikes.", correctAnswer: "True" }
    ]
  },
  "leadership": {
    Beginner: [
      { type: "single_choice", marks: 5, text: "What builds psychological safety and accountability within high-performing teams?", options: ["Clear expectations, open feedback loops, and blameless post-incident learning", "Public criticism without coaching", "Hoarding decision context from team members", "Changing priorities daily without rationale"], correctIndex: 0 },
      { type: "true_false", marks: 5, text: "True or False: Regular 1:1 coaching conversations help align individual growth goals with team outcomes.", correctAnswer: "True" }
    ],
    Intermediate: [
      { type: "multiple_choice", marks: 5, text: "Which behaviors characterize effective Leadership during cross-team conflict? (Select all that apply)", options: ["Facilitating objective alignment around shared user/business goals", "Listening to underlying constraints before mediating trade-offs", "Documenting clear ownership and next steps", "Avoiding difficult conversations indefinitely"], correctIndices: [0, 1, 2] },
      { type: "single_choice", marks: 5, text: "How should a leader delegate effectively without micromanaging?", options: ["Define clear outcomes, guardrails, and check-in cadences while granting execution ownership", "Dictate every single minor implementation line", "Delegate without sharing context or authority", "Take back ownership silently without feedback"], correctIndex: 0 }
    ],
    Advanced: [
      { type: "single_choice", marks: 5, text: "How do senior leaders scale organizational capability beyond their own direct bandwidth?", options: ["Develop future leaders through sponsorship, clear decision frameworks, and crisp empowerment", "Act as the sole bottleneck approving routine operational tickets", "Bypass managers to reassign tasks ad-hoc", "Measure success strictly by hours spent in meetings"], correctIndex: 0 },
      { type: "true_false", marks: 5, text: "True or False: Transparent communication of 'why' behind strategic shifts strengthens team trust and execution alignment.", correctAnswer: "True" }
    ]
  },
  "engineering management": {
    Beginner: [
      { type: "single_choice", marks: 5, text: "What is a core responsibility of Engineering Management across project delivery?", options: ["Balancing technical quality, sustainable delivery cadence, and engineer growth", "Eliminating code reviews to merge faster", "Ignoring production incident postmortems", "Writing vague unmeasurable goals"], correctIndex: 0 },
      { type: "true_false", marks: 5, text: "True or False: Tracking operational health (deployment frequency, change failure rate, MTTR) guides sustainable engineering improvements.", correctAnswer: "True" }
    ],
    Intermediate: [
      { type: "multiple_choice", marks: 5, text: "Which practices reduce delivery risk on technical roadmaps? (Select all that apply)", options: ["Allocating explicit capacity for tech debt and reliability", "Clear RFC/design review checkpoints before large builds", "Cross-training to prevent single-person knowledge silos", "Overcommitting 100% of sprint capacity with zero buffer"], correctIndices: [0, 1, 2] },
      { type: "single_choice", marks: 5, text: "How should Engineering Managers partner with Product during scope pressure?", options: ["Present clear engineering trade-offs (scope vs quality vs timeline) with phased delivery options", "Cut automated tests silently to hit an arbitrary date", "Approve unplanned work without adjusting commitments", "Defer all visibility until release failure"], correctIndex: 0 }
    ],
    Advanced: [
      { type: "single_choice", marks: 5, text: "How do multi-team Engineering Managers align architecture standards without creating rigid bureaucracy?", options: ["Establish paved roads, clear RFC governance, and autonomous team ownership boundaries", "Require centralized committee approval for every minor pull request", "Forbid shared platform abstractions", "Measure engineers solely by lines of code written"], correctIndex: 0 },
      { type: "true_false", marks: 5, text: "True or False: Constructive career progression rubrics ensure fair, transparent calibration across engineering levels.", correctAnswer: "True" }
    ]
  },
  "strategy": {
    Beginner: [
      { type: "single_choice", marks: 5, text: "What distinguishes organizational Strategy from a simple task to-do list?", options: ["Coherent choices about where to focus capability, differentiate, and say no to misaligned initiatives", "Listing every possible feature request simultaneously", "Copying competitors without customer validation", "Ignoring resource constraints"], correctIndex: 0 },
      { type: "true_false", marks: 5, text: "True or False: Strategic objectives should translate into measurable leading indicators across departments.", correctAnswer: "True" }
    ],
    Intermediate: [
      { type: "multiple_choice", marks: 5, text: "Which inputs strengthen enterprise Strategy planning? (Select all that apply)", options: ["Validated customer retention & market signals", "Realistic capability and budget constraints", "Explicit trade-offs and risk assumptions", "Ignoring competitive shifts and unit economics"], correctIndices: [0, 1, 2] },
      { type: "single_choice", marks: 5, text: "Why must quarterly execution reviews track assumptions alongside outcomes?", options: ["To adapt initiatives rapidly when underlying market or delivery assumptions change", "To hide missed milestones", "To eliminate accountability", "To avoid cross-functional feedback"], correctIndex: 0 }
    ],
    Advanced: [
      { type: "single_choice", marks: 5, text: "How should portfolio investments be balanced across core optimization and long-term capability bets?", options: ["Maintain explicit horizon allocation tied to measurable milestones and kill/pivot criteria", "Fund every pilot indefinitely regardless of traction", "Starve core reliability completely", "Avoid measurable investment hypotheses"], correctIndex: 0 },
      { type: "true_false", marks: 5, text: "True or False: Strategic clarity requires explicitly naming what an organization will NOT prioritize.", correctAnswer: "True" }
    ]
  },
  "executive leadership": {
    Beginner: [
      { type: "single_choice", marks: 5, text: "What is central to effective Executive Leadership governance?", options: ["Setting clear multi-department vision, capital allocation priorities, and risk accountability", "Micromanaging individual daily tickets across every team", "Avoiding measurable organizational OKRs", "Siloing departments against one another"], correctIndex: 0 },
      { type: "true_false", marks: 5, text: "True or False: Consistent executive sponsorship is critical when driving enterprise-wide compliance or transformation programs.", correctAnswer: "True" }
    ],
    Intermediate: [
      { type: "multiple_choice", marks: 5, text: "Which governance mechanisms strengthen Executive Leadership decision-making? (Select all that apply)", options: ["Outcome-based OKRs linked to customer & financial health", "Clear escalation paths & compliance oversight", "Transparent cross-department alignment cadences", "Conflicting undocumented mandates"], correctIndices: [0, 1, 2] },
      { type: "single_choice", marks: 5, text: "How do executives maintain culture and execution speed as an organization scales?", options: ["Codify decision principles, empower accountable directors, and inspect key health metrics", "Centralize every small approval at the top", "Replace metrics with anecdote-only reviews", "Duplicate overlapping leadership mandates"], correctIndex: 0 }
    ],
    Advanced: [
      { type: "single_choice", marks: 5, text: "When guiding an enterprise through major market or regulatory change, how does Executive Leadership balance speed and governance?", options: ["Establish clear risk boundaries, empowered cross-functional owners, and fast empirical feedback loops", "Freeze all product delivery until certainty is 100%", "Bypass legal and security reviews entirely", "Communicate strategy solely after completion"], correctIndex: 0 },
      { type: "true_false", marks: 5, text: "True or False: Holding leaders accountable for both results and cross-team collaboration prevents destructive internal silos.", correctAnswer: "True" }
    ]
  },
  "client portal operations": {
    Beginner: [
      { type: "single_choice", marks: 5, text: "What is the primary goal of standardized Client Portal Operations in CollabCRM?", options: ["Ensuring accurate candidate vetting, timely status visibility, and secure role-based client access", "Sharing unverified candidate PII openly without permissions", "Skipping recruiter screening documentation", "Disabling audit timestamps"], correctIndex: 0 },
      { type: "true_false", marks: 5, text: "True or False: Verifying portal user permissions and NDA/compliance checklists protects client confidentiality.", correctAnswer: "True" }
    ],
    Intermediate: [
      { type: "multiple_choice", marks: 5, text: "Which checks belong in structured Client Portal Operations workflows? (Select all that apply)", options: ["Validating scoped client portal access before sharing profiles", "Tracking submission-to-interview SLA turnaround times", "Maintaining clean candidate stage statuses & notes", "Granting admin permissions to external client viewers"], correctIndices: [0, 1, 2] },
      { type: "single_choice", marks: 5, text: "What should an operator do if a client reports missing candidate profile visibility on the portal?", options: ["Verify portal role mapping, stage publication state, and client account permissions immediately", "Email raw internal HR spreadsheets publicly", "Delete the candidate record", "Disable portal authentication checks"], correctIndex: 0 }
    ],
    Advanced: [
      { type: "single_choice", marks: 5, text: "How can Client Portal Operations scale multi-client workflows without SLA breaches or access leaks?", options: ["Standardize role templates, automated stage-gate checks, and periodic portal permission audits", "Share one generic client login across accounts", "Track client requests manually outside CRM audit trails", "Disable SLA escalation notifications"], correctIndex: 0 },
      { type: "true_false", marks: 5, text: "True or False: Periodic access reviews and SLA bottleneck telemetry sustain high client trust in portal operations.", correctAnswer: "True" }
    ]
  }
};
SKILL_QUESTION_BANK["api security"] = SKILL_QUESTION_BANK["api security & oauth2"];
SKILL_QUESTION_BANK["gdpr compliance"] = SKILL_QUESTION_BANK["gdpr & data privacy"];

function buildSkillBasedQuestions(skillObj, skillLevel, startNumber){
  let skName = String(skillObj?.name || skillObj?.id || "Skill").trim();
  let skKey = skName.toLowerCase();
  let skId = String(skillObj?.id || ("sk-" + skKey.replace(/[^a-z0-9]+/g,"-")));
  let safePrefix = "skq-" + skId.replace(/[^a-zA-Z0-9_-]/g,"") + "-" + Date.now().toString(36).slice(-4);
  let levelName = ["Beginner","Intermediate","Advanced"].includes(skillLevel) ? skillLevel : "Intermediate";
  let bankEntry = SKILL_QUESTION_BANK[skKey];
  let templates = bankEntry && (bankEntry[levelName] || bankEntry.Intermediate || bankEntry.Beginner);
  if(!templates){
    let descHint = String(skillObj?.description || "").trim();
    let contextLine = descHint ? (" (" + descHint.replace(/\.$/,"") + ")") : "";
    let focusLabel = levelName === "Beginner" ? "foundational practice" : levelName === "Advanced" ? "enterprise optimization and risk governance" : "applied workflow execution";
    templates = [
      {
        type: "single_choice",
        marks: 5,
        text: "[" + skName + " • " + levelName + "] Which approach reflects recommended " + focusLabel + " for " + skName + contextLine + "?",
        options: [
          "Follow documented " + skName + " standards, validate quality gates, and maintain traceable records",
          "Bypass verification checkpoints and skip stakeholder review",
          "Apply ad-hoc unreviewed changes directly without standards",
          "Ignore documented " + skName + " guidelines completely"
        ],
        correctIndex: 0
      },
      {
        type: "true_false",
        marks: 5,
        text: "[" + skName + " • " + levelName + "] True or False: Applying structured verification and best practices in " + skName + " improves reliability and team outcomes.",
        correctAnswer: "True"
      }
    ];
  }
  return templates.map((tpl, idx)=>{
    let qId = safePrefix + "-" + (idx + 1);
    let q = {
      id: qId,
      number: (startNumber || 1) + idx,
      text: tpl.text,
      type: tpl.type,
      marks: tpl.marks || 5,
      mandatory: true,
      _autoSkillId: skId,
      _autoSkillName: skName,
      _autoSkillLevel: levelName
    };
    if(tpl.type === "single_choice" || tpl.type === "dropdown"){
      let opts = (tpl.options || []).map((tText, oIdx)=>({id: qId + "-opt-" + (oIdx+1), text: tText}));
      q.options = opts;
      q.correctAnswer = opts[tpl.correctIndex || 0]?.id || opts[0]?.id || "";
    } else if(tpl.type === "multiple_choice"){
      let opts = (tpl.options || []).map((tText, oIdx)=>({id: qId + "-mopt-" + (oIdx+1), text: tText}));
      q.options = opts;
      q.correctAnswers = (tpl.correctIndices || [0]).map(ci=>opts[ci]?.id).filter(Boolean);
    } else if(tpl.type === "true_false"){
      q.correctAnswer = tpl.correctAnswer || "True";
    } else if(tpl.type === "short_text"){
      q.acceptedAnswers = Array.isArray(tpl.acceptedAnswers) ? [...tpl.acceptedAnswers] : [skName];
    }
    return q;
  });
}

function rt({onCancel:e,onSaveProgramme:t,programmeToEdit:n,categories:catList,skills:skillMasterList,skillLevels:skillLevelList,onSaveSkill,canManageSkills}){
  let activeCats=(0,l.useMemo)(()=>(Array.isArray(catList)&&catList.length>0?catList:DEFAULT_CATEGORIES_SEED).filter(cat=>cat.active!==!1),[catList]);
  let allSkillsMaster=(0,l.useMemo)(()=>Array.isArray(skillMasterList)&&skillMasterList.length>0?skillMasterList:DEFAULT_SKILLS_SEED,[skillMasterList]);
  let activeSkills=(0,l.useMemo)(()=>allSkillsMaster.filter(sk=>sk.active!==!1),[allSkillsMaster]);
  let configuredSkillLevels=(0,l.useMemo)(()=>Array.isArray(skillLevelList)&&skillLevelList.length>0?skillLevelList:DEFAULT_SKILL_LEVELS_SEED,[skillLevelList]);
  let initialCat=(()=>{if(n?.category){let matched=activeCats.find(cat=>doesProgUseCategory({category:n.category},cat.name));if(matched)return matched.name}return ""})();
  let[a,o]=(0,l.useState)(n?.name||"");
  let[s,c]=(0,l.useState)(initialCat);
  let[f,p]=(0,l.useState)(n?.difficultyLevel||"");
  let _initDur=n?parseDurationHM(n):{h:"",m:""};
  let[durH,setDurH]=(0,l.useState)(n?String(_initDur.h):"");
  let[durM,setDurM]=(0,l.useState)(n?String(_initDur.m):"");
  let[dept,setDept]=(0,l.useState)(n?.department||"");
  let[learnObj,setLearnObj]=(0,l.useState)(n?.learningObjectives||"");
  let[g,_]=(0,l.useState)(n?(n.assessment?.passingScore||n.passingScore||80):"");
  let[v,y]=(0,l.useState)(n?(n.assessment?.maxAttempts||n.maxAttempts||3):"");
  let[duePeriod,setDuePeriod]=(0,l.useState)(n?(n.defaultDuePeriod||14):14);

  let[ie,E]=(0,l.useState)(n?.resources&&n.resources.length>0?n.resources:[
    {id:"res-1",type:"",title:"",url:""}
  ]);

  let demoResourcesTemplate = [
    {id:"res-1",type:"Video / YouTube",title:"Module 1: Architecture Video Lecture",url:"https://www.youtube.com/watch?v=8mAITcNt710"},
    {id:"res-2",type:"PDF Document",title:"Module 2: Implementation Playbook & Guidelines",url:"https://docs.collabcrm.internal/playbook.pdf"}
  ];

  // Section 3: Assessment & Questions Config
  let demoAssessmentTemplate = {
    enabled: true,
    title: "Final Training Assessment",
    description: "Complete the following questions to evaluate your understanding of this training.",
    passingScore: 80,
    maxAttempts: 3,
    shuffleQuestions: false,
    showResultAfterSubmission: true,
    questions: [
      {
        id: "q-1",
        number: 1,
        text: "What does CRM stand for in CollabCRM?",
        type: "short_text",
        marks: 2,
        mandatory: true,
        acceptedAnswers: ["Customer Relationship Management", "customer relationship management"]
      },
      {
        id: "q-2",
        number: 2,
        text: "Which protocol is primarily used for real-time notifications in CollabCRM?",
        type: "single_choice",
        marks: 2,
        mandatory: true,
        options: [
          { id: "opt-1", text: "WebSocket" },
          { id: "opt-2", text: "FTP" },
          { id: "opt-3", text: "SMTP" },
          { id: "opt-4", text: "Telnet" }
        ],
        correctAnswer: "opt-1"
      },
      {
        id: "q-3",
        number: 3,
        text: "Which of the following are core platforms used in this curriculum? (Select all that apply)",
        type: "multiple_choice",
        marks: 2,
        mandatory: true,
        options: [
          { id: "mopt-1", text: "Unreal Engine" },
          { id: "mopt-2", text: "Unity" },
          { id: "mopt-3", text: "Blender" },
          { id: "mopt-4", text: "Godot" }
        ],
        correctAnswers: ["mopt-1", "mopt-2", "mopt-4"]
      },
      {
        id: "q-4",
        number: 4,
        text: "Select the primary department responsible for candidate onboarding workflows:",
        type: "dropdown",
        marks: 2,
        mandatory: true,
        options: [
          { id: "dopt-1", text: "Recruitment & HR Operations" },
          { id: "dopt-2", text: "Hardware Engineering" },
          { id: "dopt-3", text: "Facilities Management" }
        ],
        correctAnswer: "dopt-1"
      },
      {
        id: "q-5",
        number: 5,
        text: "Employees must complete all mandatory learning resources before they can access the final assessment.",
        type: "true_false",
        marks: 1,
        mandatory: true,
        correctAnswer: "True"
      },
      {
        id: "q-6",
        number: 6,
        text: "Summarize the architectural flow of token-based authentication and explain how JWT tokens are validated.",
        type: "long_text",
        marks: 1,
        mandatory: false,
        expectedAnswer: "JWT tokens validated via Gateway middleware, checking signature, expiry, and RBAC claims."
      }
    ]
  };

  let initialAssess = n ? (n.assessment || demoAssessmentTemplate) : null;
  let[assessmentEnabled, setAssessmentEnabled] = (0,l.useState)(initialAssess ? (initialAssess.enabled ?? true) : true);
  let[assessmentTitle, setAssessmentTitle] = (0,l.useState)(initialAssess ? (initialAssess.title || "Final Training Assessment") : "");
  let[assessmentDesc, setAssessmentDesc] = (0,l.useState)(initialAssess ? (initialAssess.description || "Complete the following questions to evaluate your understanding of this training.") : "");
  let[assessPassScore, setAssessPassScore] = (0,l.useState)(initialAssess ? (initialAssess.passingScore ?? 80) : "");
  let[assessMaxAttempts, setAssessMaxAttempts] = (0,l.useState)(initialAssess ? (initialAssess.maxAttempts ?? 3) : "");
  let[assessTotalMarks, setAssessTotalMarks] = (0,l.useState)(initialAssess ? (initialAssess.totalMarks ?? "") : "");
  let[shuffleQuestions, setShuffleQuestions] = (0,l.useState)(initialAssess ? (initialAssess.shuffleQuestions ?? false) : false);
  let[showResultAfterSub, setShowResultAfterSub] = (0,l.useState)(initialAssess ? (initialAssess.showResultAfterSubmission ?? true) : true);
  let[questions, setQuestions] = (0,l.useState)(initialAssess ? (initialAssess.questions || []) : []);
  let[showPreviewModal, setShowPreviewModal] = (0,l.useState)(false);
  let[showDraftDropdown, setShowDraftDropdown] = (0,l.useState)(false);
  let[validationError, setValidationError] = (0,l.useState)("");
  // Section 4: Training Recognition (Certificate Generation + Add Skill to Employee Profile, both default OFF on new Trainings)
  let[certificateGeneration, setCertificateGeneration] = (0,l.useState)(n ? Boolean(n.certificateGeneration) : !0);
  let[addSkillToProfile, setAddSkillToProfile] = (0,l.useState)(Boolean(n?.addSkillToProfile));
  let[selectedSkillIds, setSelectedSkillIds] = (0,l.useState)(Array.isArray(n?.selectedSkillIds) ? n.selectedSkillIds.filter(Boolean) : []);
  let[awardSkillLevel, setAwardSkillLevel] = (0,l.useState)(n?.skillLevel || (configuredSkillLevels[0]?.name || "Beginner"));
  let[reviewerApprovalRequired, setReviewerApprovalRequired] = (0,l.useState)(Boolean(n?.reviewerApprovalRequired));
  let[skillDropdownOpen, setSkillDropdownOpen] = (0,l.useState)(false);
  let[skillSearch, setSkillSearch] = (0,l.useState)("");
  let[showQuickSkillModal, setShowQuickSkillModal] = (0,l.useState)(false);
  let[quickSkillName, setQuickSkillName] = (0,l.useState)("");
  let[quickSkillDesc, setQuickSkillDesc] = (0,l.useState)("");
  let[quickSkillErr, setQuickSkillErr] = (0,l.useState)("");
  let[quickSkillBusy, setQuickSkillBusy] = (0,l.useState)(false);

  let initialSkillSyncSnap = n ? JSON.stringify({on: Boolean(n.addSkillToProfile), ids: Array.isArray(n.selectedSkillIds) ? Array.from(new Set(n.selectedSkillIds)) : [], lvl: n.skillLevel || ""}) : null;
  let prevSkillSyncRef = (0,l.useRef)(initialSkillSyncSnap);
  let autoTotalMarksRef = (0,l.useRef)(initialAssess ? (initialAssess.totalMarks ?? "") : "");

  let selectedSkillNames = (selectedSkillIds || []).map(sid => {
    let sk = allSkillsMaster.find(m => m.id === sid);
    return sk ? sk.name : sid;
  });

  let syncQuestionsFromSkills = (skillIdsList, isEnabled, lvlName, opts = {}) => {
    let forceReplace = Boolean(opts.force);
    let effLevel = lvlName || "Intermediate";
    let manualQs = (questions || []).filter(q => !q._autoSkillId);
    if(!isEnabled || !Array.isArray(skillIdsList) || skillIdsList.length === 0){
      if(forceReplace || (questions || []).some(q => Boolean(q._autoSkillId))){
        let renum = manualQs.map((q, idx) => ({...q, number: idx + 1}));
        let nextSum = renum.reduce((sum, q) => sum + (Number(q.marks) || 0), 0);
        setQuestions(renum);
        if(assessTotalMarks === "" || Number(assessTotalMarks) === Number(autoTotalMarksRef.current || 0)){
          let nextVal = nextSum > 0 ? nextSum : "";
          setAssessTotalMarks(nextVal);
          autoTotalMarksRef.current = nextVal;
        }
      }
      return;
    }
    let uniqueIds = Array.from(new Set(skillIdsList.filter(Boolean)));
    let existingAutoBySkill = {};
    if(!forceReplace){
      (questions || []).forEach(q => {
        if(q._autoSkillId){
          if(!existingAutoBySkill[q._autoSkillId]) existingAutoBySkill[q._autoSkillId] = [];
          existingAutoBySkill[q._autoSkillId].push(q);
        }
      });
    }
    let rebuiltAutoQs = [];
    uniqueIds.forEach(sid => {
      let existingForSkill = existingAutoBySkill[sid];
      if(!forceReplace && existingForSkill && existingForSkill.length > 0 && existingForSkill[0]._autoSkillLevel === effLevel){
        rebuiltAutoQs.push(...existingForSkill);
      } else {
        let skObj = allSkillsMaster.find(m => m.id === sid) || {id: sid, name: sid};
        rebuiltAutoQs.push(...buildSkillBasedQuestions(skObj, effLevel, 1));
      }
    });
    let combined = [...manualQs, ...rebuiltAutoQs].map((q, idx) => ({...q, number: idx + 1}));
    let nextSum = combined.reduce((sum, q) => sum + (Number(q.marks) || 0), 0);
    setQuestions(combined);
    if(rebuiltAutoQs.length > 0){
      if(!String(assessmentTitle || "").trim()) setAssessmentTitle("Final Training Assessment");
      if(!String(assessmentDesc || "").trim()) setAssessmentDesc("Complete the following questions to evaluate proficiency in the selected training skills.");
      if(assessPassScore === "" || !assessPassScore){ setAssessPassScore(80); _(80); }
      if(assessMaxAttempts === "" || !assessMaxAttempts){ setAssessMaxAttempts(3); y(3); }
    }
    if(assessTotalMarks === "" || Number(assessTotalMarks) === Number(autoTotalMarksRef.current || 0)){
      let nextVal = nextSum > 0 ? nextSum : "";
      setAssessTotalMarks(nextVal);
      autoTotalMarksRef.current = nextVal;
    }
  };

  // Auto-question generation on skill selection disabled per user request

  let totalQuestions = questions.length;
  let questionsMarksSum = questions.reduce((sum, q) => sum + (Number(q.marks) || 0), 0);
  let totalAssessmentMarks = (assessTotalMarks !== "" && Number(assessTotalMarks) > 0) ? Number(assessTotalMarks) : 0;
  let allQuestionsHaveMarks = questions.length > 0 && questions.every(q => q.marks !== "" && Number(q.marks) > 0);
  let hasMarksMismatch = assessTotalMarks !== "" && Number(assessTotalMarks) > 0 && allQuestionsHaveMarks && questionsMarksSum !== Number(assessTotalMarks);

  let ae=()=>{
    let demoCat = activeCats.find(cat=>normCatKey(cat.name)===normCatKey("Engineering & Architecture"))?.name || activeCats[0]?.name || "";
    o("Advanced Enterprise Cloud Architecture & Kubernetes Security");
    c(demoCat);
    setDept("Web");
    p("Intermediate");
    setDurH("4");
    setDurM("35");
    setLearnObj("Design multi-tenant Kubernetes clusters, harden RBAC policies, and enforce zero-trust service communication.");
    E(demoResourcesTemplate.map(item=>({...item})));
    setAssessmentEnabled(true);
    setAssessmentTitle(demoAssessmentTemplate.title);
    setAssessmentDesc(demoAssessmentTemplate.description);
    setAssessPassScore(80);
    setAssessMaxAttempts(3);
    setAssessTotalMarks(10);
    autoTotalMarksRef.current = 10;
    _(80);
    y(3);
    setDuePeriod(14);
    setQuestions(demoAssessmentTemplate.questions.map(q=>({...q, options:q.options?q.options.map(opt=>({...opt})):undefined, acceptedAnswers:q.acceptedAnswers?[...q.acceptedAnswers]:undefined, correctAnswers:q.correctAnswers?[...q.correctAnswers]:undefined})));
    setValidationError("");
  };

  let oe=()=>{
    let newRes={id:"res-" + Date.now(),type:"",title:"",url:""};
    E([...ie,newRes]);
  };
  let se=(id)=>{
    E(ie.filter(res=>res.id!==id));
  };
  let handlePdfResourceUpload=(resId, file)=>{
    if(!file)return;
    let isPdf = file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf");
    if(!isPdf){
      setValidationError("Please upload a valid PDF document (.pdf).");
      return;
    }
    if(file.size > 3 * 1024 * 1024){
      setValidationError("PDF file size must be 3 MB or less.");
      return;
    }
    setValidationError("");
    let reader = new FileReader();
    reader.onload = ev => {
      let dataUrl = String(ev?.target?.result || "");
      E(prev => prev.map(r => r.id === resId ? { ...r, fileName: file.name, fileSize: file.size, fileDataUrl: dataUrl } : r));
    };
    reader.readAsDataURL(file);
  };

  // Question operations
  let handleAddQuestion=()=>{
    let newQ={
      id:"q-" + Date.now(),
      number: questions.length + 1,
      text:"",
      type:"single_choice",
      marks:"",
      mandatory:true,
      options:[
        {id:"opt-1", text:""},
        {id:"opt-2", text:""}
      ],
      correctAnswer:"opt-1"
    };
    setQuestions([...questions, newQ]);
  };

  let handleUpdateQuestion=(qId, field, value)=>{
    setQuestions(questions.map(q=>{
      if(q.id!==qId) return q;
      let updated = {...q, [field]: value};
      if(field==="type"){
        if(value==="short_text"){
          updated.acceptedAnswers=[""];
          delete updated.options;
          delete updated.correctAnswer;
          delete updated.correctAnswers;
          delete updated.expectedAnswer;
        } else if(value==="long_text"){
          updated.expectedAnswer="";
          delete updated.options;
          delete updated.correctAnswer;
          delete updated.correctAnswers;
          delete updated.acceptedAnswers;
        } else if(value==="single_choice" || value==="dropdown"){
          updated.options=[{id:"opt-1", text:""}, {id:"opt-2", text:""}];
          updated.correctAnswer="opt-1";
          delete updated.correctAnswers;
          delete updated.acceptedAnswers;
          delete updated.expectedAnswer;
        } else if(value==="multiple_choice"){
          updated.options=[{id:"mopt-1", text:""}, {id:"mopt-2", text:""}];
          updated.correctAnswers=["mopt-1"];
          delete updated.correctAnswer;
          delete updated.acceptedAnswers;
          delete updated.expectedAnswer;
        } else if(value==="true_false"){
          updated.correctAnswer="True";
          delete updated.options;
          delete updated.correctAnswers;
          delete updated.acceptedAnswers;
          delete updated.expectedAnswer;
        }
      }
      return updated;
    }));
  };

  let handleDeleteQuestion=(qId)=>{
    let filtered = questions.filter(q=>q.id!==qId);
    setQuestions(filtered.map((q, idx)=>({...q, number: idx+1})));
  };

  let handleDuplicateQuestion=(qId)=>{
    let target = questions.find(q=>q.id===qId);
    if(!target) return;
    let duplicate = JSON.parse(JSON.stringify(target));
    duplicate.id = "q-" + Date.now();
    delete duplicate._autoSkillId;
    delete duplicate._autoSkillName;
    delete duplicate._autoSkillLevel;
    let idx = questions.findIndex(q=>q.id===qId);
    let copy = [...questions];
    copy.splice(idx+1, 0, duplicate);
    setQuestions(copy.map((q, i)=>({...q, number: i+1})));
  };

  let handleMoveQuestion=(index, direction)=>{
    let newIdx = index + direction;
    if(newIdx < 0 || newIdx >= questions.length) return;
    let copy = [...questions];
    let temp = copy[index];
    copy[index] = copy[newIdx];
    copy[newIdx] = temp;
    setQuestions(copy.map((q, i)=>({...q, number: i+1})));
  };

  let handleAddOption=(qId)=>{
    setQuestions(questions.map(q=>{
      if(q.id!==qId) return q;
      let optId = "opt-" + Date.now();
      let updatedOpts = [...(q.options||[]), {id: optId, text:""}];
      return {...q, options: updatedOpts};
    }));
  };

  let handleRemoveOption=(qId, optId)=>{
    setQuestions(questions.map(q=>{
      if(q.id!==qId) return q;
      let updatedOpts = (q.options||[]).filter(o=>o.id!==optId);
      let updated = {...q, options: updatedOpts};
      if(q.correctAnswer === optId && updatedOpts.length > 0){
        updated.correctAnswer = updatedOpts[0].id;
      }
      if(Array.isArray(q.correctAnswers)){
        updated.correctAnswers = q.correctAnswers.filter(id=>id!==optId);
      }
      return updated;
    }));
  };

  let handleUpdateOptionText=(qId, optId, text)=>{
    setQuestions(questions.map(q=>{
      if(q.id!==qId) return q;
      let updatedOpts = (q.options||[]).map(o=>o.id===optId?{...o, text}:o);
      return {...q, options: updatedOpts};
    }));
  };

  let handleAddAcceptedAnswer=(qId)=>{
    setQuestions(questions.map(q=>{
      if(q.id!==qId) return q;
      return {...q, acceptedAnswers: [...(q.acceptedAnswers||[]), ""]};
    }));
  };

  let handleUpdateAcceptedAnswer=(qId, index, text)=>{
    setQuestions(questions.map(q=>{
      if(q.id!==qId) return q;
      let updated = [...(q.acceptedAnswers||[])];
      updated[index] = text;
      return {...q, acceptedAnswers: updated};
    }));
  };

  let handleRemoveAcceptedAnswer=(qId, index)=>{
    setQuestions(questions.map(q=>{
      if(q.id!==qId) return q;
      let updated = (q.acceptedAnswers||[]).filter((_, i)=>i!==index);
      return {...q, acceptedAnswers: updated};
    }));
  };

  let handleSave=async(status="Published")=>{
    setValidationError("");
    if(!a.trim()){
      setValidationError("Training Name is required.");
      return;
    }
    if(!s || !activeCats.some(cat=>normCatKey(cat.name)===normCatKey(s))){
      setValidationError("Please select an active training category. Inactive categories cannot be connected.");
      return;
    }
    let totalDurMins=(Number(durH)||0)*60+(Number(durM)||0);
    if((durH===""&&durM==="")||totalDurMins<=0){
      setValidationError("Please select Duration (Hours & Minutes) greater than 0.");
      return;
    }
    if(!certificateGeneration && !addSkillToProfile){
      setValidationError("Training Recognition: Please enable at least one option (Certificate Generation or Skills).");
      return;
    }
    if(addSkillToProfile){
      let dedupedSkills = Array.from(new Set((selectedSkillIds || []).filter(Boolean)));
      if(dedupedSkills.length === 0){
        setValidationError("Training Recognition: Please select at least one skill when 'Skills' is enabled.");
        return;
      }
      if(!awardSkillLevel || !configuredSkillLevels.some(lv => lv.name === awardSkillLevel)){
        setValidationError("Training Recognition: Please select a valid Skill Level.");
        return;
      }
      let prevSkillSet = new Set(Array.isArray(n?.selectedSkillIds) ? n.selectedSkillIds : []);
      let invalidInactive = dedupedSkills.find(sid => {
        let sk = allSkillsMaster.find(m => m.id === sid);
        return sk && sk.active === !1 && !prevSkillSet.has(sid);
      });
      if(invalidInactive){
        let skObj = allSkillsMaster.find(m => m.id === invalidInactive);
        setValidationError(`Skill "${skObj?.name || invalidInactive}" is inactive in Administration > Master Data > Skills and cannot be selected for new configurations.`);
        return;
      }
    }
    if(assessmentEnabled){
      if(!String(assessmentTitle||"").trim()){
        setValidationError("Assessment Title is required.");
        return;
      }
      if(!assessPassScore || Number(assessPassScore)<=0 || Number(assessPassScore)>100){
        setValidationError("Passing Score (%) must be between 1 and 100.");
        return;
      }
      if(!assessMaxAttempts || Number(assessMaxAttempts)<=0){
        setValidationError("Max Assessment Attempts must be at least 1.");
        return;
      }
      if(questions.length===0){
        setValidationError("Assessment is enabled. At least 1 question must be added.");
        return;
      }
      if(!assessTotalMarks || isNaN(Number(assessTotalMarks)) || Number(assessTotalMarks) <= 0){
        setValidationError("Total Marks is required and must be greater than 0.");
        return;
      }
      if(!allQuestionsHaveMarks){
        setValidationError("Please enter marks greater than 0 for every question.");
        return;
      }
      for(let i=0; i<questions.length; i++){
        let q = questions[i];
        if(!q.text.trim()){
          setValidationError("Question " + (i+1) + " is missing question text.");
          return;
        }
        if(!q.marks || Number(q.marks) <= 0){
          setValidationError("Question " + (i+1) + " must have positive marks awarded.");
          return;
        }
        if(q.type==="single_choice" || q.type==="dropdown"){
          if(!q.options || q.options.length < 2){
            setValidationError("Question " + (i+1) + " must have at least 2 options.");
            return;
          }
          if(!q.correctAnswer){
            setValidationError("Question " + (i+1) + " must have a correct answer selected.");
            return;
          }
        }
        if(q.type==="multiple_choice"){
          if(!q.options || q.options.length < 2){
            setValidationError("Question " + (i+1) + " must have at least 2 options.");
            return;
          }
          if(!q.correctAnswers || q.correctAnswers.length===0){
            setValidationError("Question " + (i+1) + " must have at least 1 correct answer checked.");
            return;
          }
        }
        if(q.type==="short_text"){
          if(!q.acceptedAnswers || q.acceptedAnswers.filter(ans=>ans.trim()).length===0){
            setValidationError("Question " + (i+1) + " must have at least 1 accepted answer.");
            return;
          }
        }
      }
    }

    let compiledAssessment = {
      enabled: assessmentEnabled,
      title: assessmentTitle,
      description: assessmentDesc,
      passingScore: Number(assessPassScore) || 80,
      maxAttempts: Number(assessMaxAttempts) || 3,
      totalMarks: totalAssessmentMarks,
      shuffleQuestions: shuffleQuestions,
      showResultAfterSubmission: showResultAfterSub,
      questions: questions
    };

    let existingPub = n ? (n.publicationStatus || n.status || "Draft") : null;
    let pubStatus = status;
    let availStatus = pubStatus === "Draft"
      ? "Inactive"
      : (n && existingPub !== "Draft"
          ? (n.availabilityStatus || (n.isActive === !1 ? "Inactive" : "Active"))
          : "Active");

    try{
      let cleanedResources = (ie || []).filter(r => r && (String(r.title||"").trim() || String(r.url||"").trim() || String(r.fileDataUrl||"").trim() || String(r.type||"").trim()));
      let effectivePassScore = Number(assessPassScore) || Number(g) || 80;
      let effectiveMaxAtt = Number(assessMaxAttempts) || Number(v) || 3;
      let res = await t({
        id: n?.id || "prog-" + Date.now(),
        name: a,
        category: s,
        department: dept || "Business Analysis",
        difficultyLevel: f,
        expectedDurationHours: Number((((Number(durH)||0)+(Number(durM)||0)/60)).toFixed(4)) || 4,
        durationHoursPart: Number(durH)||0,
        durationMinutesPart: Number(durM)||0,
        expectedDuration: fmtDurationHM({durationHoursPart:Number(durH)||0,durationMinutesPart:Number(durM)||0}),
        passingScore: effectivePassScore,
        maxAttempts: effectiveMaxAtt,
        defaultDuePeriod: Number(duePeriod) || 14,
        learningObjectives: learnObj.trim() || ("Master comprehensive workflows, key competencies, and practical execution techniques for " + a + "."),
        completionRequirementsList: reviewerApprovalRequired ? ["Get approval from the manager"] : [],
        completionRequirements: reviewerApprovalRequired ? "Get approval from the manager" : "",
        certificateGeneration: Boolean(certificateGeneration),
        addSkillToProfile: Boolean(addSkillToProfile),
        selectedSkillIds: addSkillToProfile ? Array.from(new Set(selectedSkillIds)) : [],
        skillLevel: addSkillToProfile ? awardSkillLevel : "",
        reviewerApprovalRequired: Boolean(reviewerApprovalRequired),
        resources: cleanedResources,
        assessment: compiledAssessment,
        publicationStatus: pubStatus,
        availabilityStatus: availStatus,
        status: pubStatus,
        isActive: availStatus === "Active",
        createdAt: n?.createdAt || "04-Nov-2026",
        createdBy: n?.createdBy || "Ishdeep Anand",
        modifiedAt: "05-Nov-2026",
        modifiedBy: "Ishdeep Anand"
      });
      if(res && res.success === !1){
        setValidationError(res.message || "Unable to save training.");
      }
    }catch(err){
      setValidationError(err?.message || "Unable to save training.");
    }
  };

  let editingPubStatus = n ? (n.publicationStatus || n.status || "Published") : null;

  return (0,P.jsxs)("div",{className:"px-6 py-4 space-y-5 max-w-[1600px] mx-auto w-full",children:[
    // Header Bar
    (0,P.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-3",children:[
      (0,P.jsxs)("div",{children:[
        (0,P.jsxs)("div",{className:"flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-1",children:[
          (0,P.jsx)("button",{onClick:e,className:"hover:text-blue-600 transition-colors",children:"Training Management"}),
          (0,P.jsx)("span",{children:"›"}),
          (0,P.jsx)("span",{className:"text-blue-600 font-semibold",children:n?"Edit Training":"Create Training"})
        ]}),
        (0,P.jsx)("h1",{className:"text-xl font-bold text-slate-900 tracking-tight",children:n?"Edit Training":"Create Training"}),
        (0,P.jsx)("p",{className:"text-xs text-slate-500 mt-0.5",children:"Configure curriculum details, learning resources, and assessment builder."})
      ]}),
      (0,P.jsxs)("div",{className:"flex items-center gap-2",children:[
        (0,P.jsxs)("button",{onClick:ae,type:"button",className:"bg-amber-50 hover:bg-amber-100 text-amber-700 border border-amber-200 px-3 py-1.5 rounded-lg text-xs font-semibold shadow-sm flex items-center gap-1.5 transition-colors",children:[
          (0,P.jsx)("span",{children:"⚡"}),
          (0,P.jsx)("span",{children:"Auto-Fill Demo"})
        ]}),
        (0,P.jsx)("button",{onClick:e,type:"button",className:"bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 px-3 py-1.5 rounded-lg text-xs font-semibold shadow-sm transition-colors",children:"Cancel"}),
        n ? (0,P.jsxs)("div",{className:"relative inline-flex items-stretch rounded-lg shadow-sm",children:[
          (0,P.jsx)("button",{onClick:()=>handleSave("Published"),type:"button",className:"bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 text-xs font-bold transition-colors " + (editingPubStatus==="Draft"?"rounded-l-lg border-r border-blue-500":"rounded-lg"),children:editingPubStatus==="Draft"?"Update & Publish":"Save Changes"}),
          editingPubStatus==="Draft" && (0,P.jsx)("button",{onClick:()=>setShowDraftDropdown(!showDraftDropdown),type:"button",className:"bg-blue-600 hover:bg-blue-700 text-white px-2.5 py-1.5 rounded-r-lg text-xs font-bold transition-colors",title:"More options",children:"▾"}),
          editingPubStatus==="Draft" && showDraftDropdown && (0,P.jsx)("div",{className:"absolute right-0 top-full mt-1.5 w-44 bg-white border border-slate-200 rounded-lg shadow-xl z-50 py-1 text-xs",children:(0,P.jsx)("button",{type:"button",onClick:()=>{setShowDraftDropdown(false);handleSave("Draft");},className:"w-full text-left px-3.5 py-2 text-slate-700 hover:bg-slate-50 hover:text-blue-600 flex items-center gap-2 font-medium transition-colors",children:"Save as Draft"})})
        ]}) :
        (0,P.jsxs)("div",{className:"relative inline-flex items-stretch rounded-lg shadow-sm",children:[
          (0,P.jsx)("button",{onClick:()=>handleSave("Published"),type:"button",className:"bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-l-lg text-xs font-bold transition-colors border-r border-blue-500",children:"Publish"}),
          (0,P.jsx)("button",{onClick:()=>setShowDraftDropdown(!showDraftDropdown),type:"button",className:"bg-blue-600 hover:bg-blue-700 text-white px-2.5 py-1.5 rounded-r-lg text-xs font-bold transition-colors",title:"More options",children:"▾"}),
          showDraftDropdown && (0,P.jsx)("div",{className:"absolute right-0 top-full mt-1.5 w-44 bg-white border border-slate-200 rounded-lg shadow-xl z-50 py-1 text-xs",children:(0,P.jsx)("button",{type:"button",onClick:()=>{setShowDraftDropdown(false);handleSave("Draft");},className:"w-full text-left px-3.5 py-2 text-slate-700 hover:bg-slate-50 hover:text-blue-600 flex items-center gap-2 font-medium transition-colors",children:"Save as Draft"})})
        ]})
      ]})
    ]}),

    // Validation Alert Banner
    validationError && (0,P.jsxs)("div",{className:"bg-rose-50 border border-rose-200 rounded-xl p-3 flex items-center gap-3 text-rose-700 text-xs font-semibold animate-in fade-in",children:[
      (0,P.jsx)("span",{className:"text-base",children:"⚠️"}),
      (0,P.jsx)("span",{className:"flex-1",children:validationError}),
      (0,P.jsx)("button",{onClick:()=>setValidationError(""),className:"text-rose-500 hover:text-rose-800",children:"✕"})
    ]}),

    // 1. Core Programme Details
    (0,P.jsxs)("div",{className:"bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4",children:[
      (0,P.jsx)("h2",{className:"text-sm font-bold text-slate-900 uppercase tracking-wide border-b border-slate-100 pb-2",children:"1. Core Training Details"}),
      (0,P.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 text-xs",children:[
        (0,P.jsxs)("div",{className:"space-y-1.5",children:[
          (0,P.jsxs)("label",{className:"inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 mb-1.5",children:[(0,P.jsx)("span",{children:"Training Name *"}),(0,P.jsx)(InfoTip,{text:"Clear, descriptive title of the training."})]}),
          (0,P.jsx)("input",{type:"text",value:a,onChange:e=>o(e.target.value),placeholder:"e.g. CollabCRM Recruitment & Client Portal Workflows",className:"w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"})
        ]}),
        (0,P.jsxs)("div",{className:"space-y-1.5",children:[
          (0,P.jsxs)("label",{className:"inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 mb-1.5",children:[(0,P.jsx)("span",{children:"Training Category *"}),(0,P.jsx)(InfoTip,{text:"Subject category used to group and organize trainings."})]}),
          (0,P.jsxs)("div",{className:"relative",children:[
            (0,P.jsxs)("select",{value:s,onChange:e=>c(e.target.value),style:{appearance:"none",WebkitAppearance:"none",MozAppearance:"none",paddingRight:"32px"},className:"w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 " + (s?"text-slate-900":"text-slate-400"),children:[
              (0,P.jsx)("option",{value:"",children:"Select training category..."}),
              activeCats.map(cat=>(0,P.jsx)("option",{value:cat.name,children:cat.name},cat.name))
            ]}),
            (0,P.jsx)(re,{style:{position:"absolute",right:"10px",top:"50%",transform:"translateY(-50%)"},className:"w-4 h-4 text-slate-400 pointer-events-none"})
          ]})
        ]}),
        (0,P.jsxs)("div",{className:"space-y-1.5",children:[
          (0,P.jsxs)("label",{className:"inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 mb-1.5",children:[(0,P.jsx)("span",{children:"Duration (Hours & Minutes) *"}),(0,P.jsx)(InfoTip,{text:"Select estimated training duration in hours and minutes (e.g. 4h 35mins)."})]}),
          (0,P.jsxs)("div",{className:"grid grid-cols-2 gap-2",children:[
            (0,P.jsxs)("div",{className:"relative",children:[
              (0,P.jsxs)("select",{value:durH,"aria-label":"Duration Hours",onChange:e=>{let v=e.target.value;setDurH(v);if(v!==""&&durM==="")setDurM("0")},style:{appearance:"none",WebkitAppearance:"none",MozAppearance:"none",paddingRight:"28px"},className:"w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 " + (durH!==""?"text-slate-900":"text-slate-400"),children:[
                (0,P.jsx)("option",{value:"",children:"Hours..."}),
                Array.from({length:41},(_,i)=>(0,P.jsx)("option",{value:String(i),children:i+"h"},"h-"+i))
              ]}),
              (0,P.jsx)(re,{style:{position:"absolute",right:"8px",top:"50%",transform:"translateY(-50%)"},className:"w-3.5 h-3.5 text-slate-400 pointer-events-none"})
            ]}),
            (0,P.jsxs)("div",{className:"relative",children:[
              (0,P.jsxs)("select",{value:durM,"aria-label":"Duration Minutes",onChange:e=>{let v=e.target.value;setDurM(v);if(v!==""&&durH==="")setDurH("0")},style:{appearance:"none",WebkitAppearance:"none",MozAppearance:"none",paddingRight:"28px"},className:"w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 " + (durM!==""?"text-slate-900":"text-slate-400"),children:[
                (0,P.jsx)("option",{value:"",children:"Mins..."}),
                Array.from(new Set([...Array.from({length:12},(_,i)=>i*5), ...(durM!==""&&!isNaN(Number(durM))?[Number(durM)]:[])])).sort((a,b)=>a-b).map(mv=>(0,P.jsx)("option",{value:String(mv),children:mv+"mins"},"m-"+mv))
              ]}),
              (0,P.jsx)(re,{style:{position:"absolute",right:"8px",top:"50%",transform:"translateY(-50%)"},className:"w-3.5 h-3.5 text-slate-400 pointer-events-none"})
            ]})
          ]})
        ]})
      ]}),
      (0,P.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 text-xs pt-2 border-t border-slate-100",children:[
        (0,P.jsxs)("div",{className:"space-y-1.5",children:[
          (0,P.jsxs)("label",{className:"inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 mb-1.5",children:[(0,P.jsx)("span",{children:"Difficulty Level *"}),(0,P.jsx)(InfoTip,{text:"Overall complexity level of this training program."})]}),
          (0,P.jsxs)("div",{className:"relative",children:[
            (0,P.jsxs)("select",{value:f,onChange:e=>p(e.target.value),style:{appearance:"none",WebkitAppearance:"none",MozAppearance:"none",paddingRight:"32px"},className:"w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 " + (f?"text-slate-900":"text-slate-400"),children:[
              (0,P.jsx)("option",{value:"",children:"Select difficulty level..."}),
              ["Beginner","Intermediate","Expert"].map(lvl=>(0,P.jsx)("option",{value:lvl,children:lvl},lvl))
            ]}),
            (0,P.jsx)(re,{style:{position:"absolute",right:"10px",top:"50%",transform:"translateY(-50%)"},className:"w-4 h-4 text-slate-400 pointer-events-none"})
          ]})
        ]}),
        (0,P.jsxs)("div",{className:"md:col-span-2 space-y-1.5",children:[
          (0,P.jsxs)("label",{className:"inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 mb-1.5",children:[(0,P.jsx)("span",{children:"Learning Objectives"}),(0,P.jsx)(InfoTip,{text:"Key skills and outcomes employees will gain upon completion."})]}),
          (0,P.jsx)("input",{type:"text",value:learnObj,onChange:e=>setLearnObj(e.target.value),placeholder:"Key skills and learning outcomes...",className:"w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"})
        ]})
      ]})
    ]}),

    // 3. Learning Resources (Cleaned per Image 5: Type select, Title input with placeholder, URL input with placeholder, delete button. No mandatory checkbox.)
    (0,P.jsxs)("div",{className:"bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4",children:[
      (0,P.jsxs)("div",{className:"flex items-center justify-between flex-wrap gap-2",children:[
        (0,P.jsxs)("div",{children:[
          (0,P.jsxs)("h2",{className:"text-sm font-bold text-slate-900 uppercase tracking-wide inline-flex items-center gap-1.5",children:[(0,P.jsx)("span",{children:"2. Learning Resources (YouTube, External Courses, Websites, Videos, PDFs, Docs) *"}),(0,P.jsx)(InfoTip,{text:"Add study materials, videos, documents, or external links for employees."})]}),
          (0,P.jsx)("p",{className:"text-[11px] text-slate-500",children:"Add curriculum resources, video lectures, playbooks, and course links for employees."})
        ]}),
        (0,P.jsx)("button",{onClick:oe,type:"button",className:"text-xs font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg border border-blue-200 shadow-sm transition-colors",children:"+ Add Learning Resource"})
      ]}),
      (0,P.jsx)("div",{className:"space-y-3",children:ie.map((res, idx)=>(0,P.jsxs)("div",{className:"flex flex-col md:flex-row items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-200",children:[
        (0,P.jsxs)("select",{value:res.type,onChange:e=>{let val=e.target.value;E(ie.map(r=>r.id===res.id?{...r,type:val}:r))},className:"w-full md:w-44 bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs font-medium " + (res.type?"text-slate-800":"text-slate-400"),children:[
          (0,P.jsx)("option",{value:"",children:"Select resource type..."}),
          (0,P.jsx)("option",{value:"Video / YouTube",children:"Video / YouTube"}),
          (0,P.jsx)("option",{value:"PDF Document",children:"PDF Document"})
        ]}),
        (0,P.jsx)("input",{type:"text",value:res.title,onChange:e=>{let val=e.target.value;E(ie.map(r=>r.id===res.id?{...r,title:val}:r))},placeholder:"Module title (e.g. Architecture Lecture)...",className:"flex-1 w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 placeholder-slate-400"}),
        res.type==="PDF Document"?(0,P.jsxs)("div",{className:"flex-1 w-full flex flex-col gap-1.5",children:[
          (0,P.jsxs)("div",{className:"flex items-center gap-2",children:[
            (0,P.jsx)("input",{type:"text",value:res.url,onChange:e=>{let val=e.target.value;E(ie.map(r=>r.id===res.id?{...r,url:val}:r))},placeholder:"PDF link (https://...) or upload below",className:"flex-1 min-w-0 bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 placeholder-slate-400"}),
            (0,P.jsxs)("label",{className:"inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-blue-200 bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-semibold cursor-pointer shrink-0 whitespace-nowrap transition-colors",children:[
              (0,P.jsx)("span",{children:res.fileName?"Replace PDF":"Upload PDF"}),
              (0,P.jsx)("input",{type:"file",accept:"application/pdf,.pdf",style:{display:"none"},onChange:e=>{let f=e.target.files?.[0];if(f)handlePdfResourceUpload(res.id,f);e.target.value="";}})
            ]})
          ]}),
          res.fileName&&(0,P.jsxs)("div",{className:"inline-flex items-center justify-between gap-2 px-2.5 py-1 rounded-md bg-blue-50/70 border border-blue-200 text-[11px] text-blue-800",children:[
            (0,P.jsx)("span",{className:"truncate font-medium",children:"📄 "+res.fileName}),
            (0,P.jsx)("button",{type:"button",onClick:()=>E(ie.map(r=>r.id===res.id?{...r,fileName:undefined,fileSize:undefined,fileDataUrl:undefined}:r)),className:"text-rose-500 hover:text-rose-700 font-bold cursor-pointer",title:"Remove uploaded PDF",children:"✕"})
          ]})
        ]}):(0,P.jsx)("input",{type:"text",value:res.url,onChange:e=>{let val=e.target.value;E(ie.map(r=>r.id===res.id?{...r,url:val}:r))},placeholder:"URL / link (https://...)",className:"flex-1 w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 placeholder-slate-400"}),
        (0,P.jsx)("button",{onClick:()=>se(res.id),type:"button",className:"p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors",title:"Delete Resource",children:"✕"})
      ]},res.id || idx))})
    ]}),

    // 3. Training Recognition (Placed before Assessment so selected skills automatically drive Assessment & Questions)
    (0,P.jsxs)("div",{className:"bg-white border border-purple-200 rounded-xl p-6 shadow-sm space-y-5",style:{borderLeft:"4px solid #7c3aed"},children:[
      (0,P.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-purple-200 pb-3",children:[
        (0,P.jsxs)("div",{className:"flex items-center gap-1.5",children:[
          (0,P.jsx)("h2",{className:"text-sm font-bold text-slate-900",children:"3. Training Recognition *"}),
          (0,P.jsx)(InfoTip,{text:"Choose how employees are recognised upon verified completion of this Training. Selection of at least one option is compulsory."})
        ]})
      ]}),

      (0,P.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[
        // A. Certificate Generation Toggle (Default OFF)
        (0,P.jsxs)("div",{className:"rounded-xl border p-4 flex items-start justify-between gap-4 transition-colors " + (certificateGeneration ? "border-purple-200 bg-purple-50/60" : "border-slate-200 bg-slate-50/70"),children:[
          (0,P.jsxs)("div",{className:"space-y-1",children:[
            (0,P.jsxs)("div",{className:"flex items-center gap-1.5 text-xs font-bold text-slate-900",children:[
              (0,P.jsx)("span",{children:"Certificate Generation"}),
              (0,P.jsx)(InfoTip,{text:"When ON, an official verified Certificate is issued upon completion. When OFF, no certificate is generated."})
            ]}),
            (0,P.jsx)("p",{className:"text-[11px] text-slate-500 leading-relaxed",children:certificateGeneration ? "ON — Employees will receive a verified certificate upon completion." : "OFF — No certificate will be generated upon completion."})
          ]}),
          (0,P.jsx)("button",{type:"button",role:"switch","aria-checked":certificateGeneration,"aria-label":"Certificate Generation",onClick:()=>{if(certificateGeneration&&!addSkillToProfile){setValidationError("Training Recognition: At least one option (Certificate Generation or Skills) is compulsory.");return;}setCertificateGeneration(!certificateGeneration);},style:{width:"40px",height:"22px",padding:"2px",border:"none",backgroundColor:certificateGeneration?"#7c3aed":"#cbd5e1"},className:"relative inline-flex shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200 focus:outline-none mt-0.5",children:(0,P.jsx)("span",{style:{width:"18px",height:"18px",transform:certificateGeneration?"translateX(18px)":"translateX(0px)"},className:"pointer-events-none inline-block rounded-full bg-white shadow transition-transform duration-200"})})
        ]}),

        // B. Skills Toggle (Default OFF)
        (0,P.jsxs)("div",{className:"rounded-xl border p-4 flex items-start justify-between gap-4 transition-colors " + (addSkillToProfile ? "border-purple-200 bg-purple-50/60" : "border-slate-200 bg-slate-50/70"),children:[
          (0,P.jsxs)("div",{className:"space-y-1",children:[
            (0,P.jsxs)("div",{className:"flex items-center gap-1.5 text-xs font-bold text-slate-900",children:[
              (0,P.jsx)("span",{children:"Skills"}),
              (0,P.jsx)(InfoTip,{text:"When ON, selected skills at the configured Skill Level are automatically added/upgraded on the Employee Profile after completion."})
            ]}),
            (0,P.jsx)("p",{className:"text-[11px] text-slate-500 leading-relaxed",children:addSkillToProfile ? "ON — Selected skills will be awarded upon verified Training completion." : "OFF — No skills will be added to employee profiles."})
          ]}),
          (0,P.jsx)("button",{type:"button",role:"switch","aria-checked":addSkillToProfile,"aria-label":"Skills",onClick:()=>{if(addSkillToProfile&&!certificateGeneration){setValidationError("Training Recognition: At least one option (Certificate Generation or Skills) is compulsory.");return;}setAddSkillToProfile(!addSkillToProfile);},style:{width:"40px",height:"22px",padding:"2px",border:"none",backgroundColor:addSkillToProfile?"#7c3aed":"#cbd5e1"},className:"relative inline-flex shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200 focus:outline-none mt-0.5",children:(0,P.jsx)("span",{style:{width:"18px",height:"18px",transform:addSkillToProfile?"translateX(18px)":"translateX(0px)"},className:"pointer-events-none inline-block rounded-full bg-white shadow transition-transform duration-200"})})
        ]})
      ]}),

      // Purple Skills Configuration Section (Displayed ONLY when Skills toggle is ON)
      addSkillToProfile && (0,P.jsxs)("div",{className:"rounded-xl border border-purple-200 p-5 space-y-4 animate-in fade-in",style:{backgroundColor:"#faf5ff"},children:[
        (0,P.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[
          (0,P.jsx)("span",{className:"text-xs font-bold text-purple-700 uppercase tracking-wider",children:"Skills Configuration"}),
          (canManageSkills !== !1 && onSaveSkill) && (0,P.jsx)("button",{type:"button",onClick:()=>{setQuickSkillErr("");setQuickSkillName("");setQuickSkillDesc("");setShowQuickSkillModal(true);},className:"text-xs font-bold px-3 py-1.5 rounded-lg border border-purple-200 bg-white text-purple-700 hover:bg-purple-50 transition-colors cursor-pointer",children:"Add New Skill"})
        ]}),

        (0,P.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 items-start text-xs",children:[
          // Select Skills (Multi-select dropdown populated from Administration > Master Data > Skills)
          (0,P.jsxs)("div",{className:"md:col-span-2 space-y-1.5 relative",children:[
            (0,P.jsxs)("label",{className:"inline-flex items-center gap-1.5 font-semibold text-slate-700",children:[
              (0,P.jsx)("span",{children:"Select Skills"}),
              (0,P.jsx)("span",{className:"text-rose-500",children:"*"}),
              (0,P.jsx)(InfoTip,{text:"Choose one or more skills from Administration > Master Data > Skills."})
            ]}),
            (0,P.jsxs)("button",{type:"button",onClick:()=>setSkillDropdownOpen(!skillDropdownOpen),className:"w-full bg-white border border-purple-200 rounded-lg px-3 py-2 text-xs font-semibold text-slate-800 flex items-center justify-between gap-2 focus:outline-none focus:ring-2 focus:ring-purple-500/20 cursor-pointer text-left",children:[
              (0,P.jsx)("span",{className:"truncate "+(selectedSkillIds.length===0?"text-slate-400 font-normal":"text-slate-800"),children:selectedSkillIds.length===0?"Select Skills...":selectedSkillNames.length<=2?selectedSkillNames.join(", "):(selectedSkillNames.slice(0,2).join(", ")+" (+"+(selectedSkillNames.length-2)+" more)")}),
              (0,P.jsx)(re,{className:"w-4 h-4 text-purple-500 shrink-0 transition-transform "+(skillDropdownOpen?"rotate-180":"")})
            ]}),
            skillDropdownOpen && (0,P.jsxs)("div",{className:"absolute left-0 right-0 top-full mt-1 bg-white border border-purple-200 rounded-xl shadow-xl z-30 overflow-hidden",children:[
              (0,P.jsx)("div",{className:"p-2 border-b border-purple-100 bg-purple-50/40",children:
                (0,P.jsx)("input",{type:"text",value:skillSearch,onChange:ev=>setSkillSearch(ev.target.value),placeholder:"Search skills...",className:"w-full bg-white border border-purple-200 rounded-lg px-2.5 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-purple-500/20"})
              }),
              (0,P.jsx)("div",{className:"max-h-48 overflow-y-auto divide-y divide-slate-100",children:(()=>{
                let inactiveSelected = selectedSkillIds.map(sid => allSkillsMaster.find(m => m.id === sid && m.active === !1)).filter(Boolean);
                let combined = [...inactiveSelected, ...activeSkills];
                let q = skillSearch.trim().toLowerCase();
                let list = q ? combined.filter(sk => sk.name.toLowerCase().includes(q)) : combined;
                if(list.length===0) return (0,P.jsx)("div",{className:"p-3 text-center text-slate-400 text-xs",children:"No matching skills found."});
                return list.map(sk => {
                  let checked = selectedSkillIds.includes(sk.id);
                  return (0,P.jsxs)("div",{onClick:()=>setSelectedSkillIds(prev => prev.includes(sk.id) ? prev.filter(id => id !== sk.id) : [...prev, sk.id]),className:"px-3 py-2 flex items-center justify-between hover:bg-purple-50/50 cursor-pointer text-xs",children:[
                    (0,P.jsx)("span",{className:checked?"font-bold text-purple-700":"font-medium text-slate-700",children:sk.name + (sk.active === !1 ? " (Inactive)" : "")}),
                    (0,P.jsx)("span",{className:"w-4 h-4 rounded border flex items-center justify-center text-[10px] font-bold "+(checked?"bg-purple-600 border-purple-600 text-white":"border-slate-300 bg-white"),children:checked?"✓":""})
                  ]},sk.id);
                });
              })()}),
              (0,P.jsxs)("div",{className:"px-3 py-2 border-t border-purple-100 bg-slate-50 flex items-center justify-between text-[11px]",children:[
                (0,P.jsx)("button",{type:"button",onClick:()=>setSelectedSkillIds([]),className:"text-slate-500 hover:text-rose-600 font-semibold cursor-pointer",children:"Clear"}),
                (0,P.jsx)("button",{type:"button",onClick:()=>setSkillDropdownOpen(false),className:"text-purple-700 font-bold hover:underline cursor-pointer",children:"Done"})
              ]})
            ]}),
            selectedSkillIds.length>0 && (0,P.jsx)("div",{className:"flex flex-wrap gap-1.5 pt-1",children:selectedSkillIds.map(sid => {
              let skObj = allSkillsMaster.find(m => m.id === sid);
              let label = skObj ? skObj.name : sid;
              return (0,P.jsxs)("span",{className:"inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white border border-purple-200 text-purple-700 text-[11px] font-semibold",children:[
                (0,P.jsx)("span",{children:label}),
                (0,P.jsx)("button",{type:"button",onClick:()=>setSelectedSkillIds(prev => prev.filter(id => id !== sid)),className:"text-purple-400 hover:text-rose-600 font-bold cursor-pointer",children:"×"})
              ]},sid);
            })})
          ]}),

          // Skill Level Dropdown (Reuses Config > Skill Levels)
          (0,P.jsxs)("div",{className:"space-y-1.5",children:[
            (0,P.jsxs)("label",{className:"inline-flex items-center gap-1.5 font-semibold text-slate-700",children:[
              (0,P.jsx)("span",{children:"Skill Level"}),
              (0,P.jsx)("span",{className:"text-rose-500",children:"*"}),
              (0,P.jsx)(InfoTip,{text:"Uses existing configured Skill Levels (Beginner, Intermediate, Advanced)."})
            ]}),
            (0,P.jsxs)("select",{value:awardSkillLevel,onChange:ev=>setAwardSkillLevel(ev.target.value),className:"w-full bg-white border border-purple-200 rounded-lg px-3 py-2 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500/20",children:[
              (0,P.jsx)("option",{value:"",children:"Select Skill Level..."}),
              configuredSkillLevels.map(lv => (0,P.jsx)("option",{value:lv.name,children:lv.name},lv.id || lv.name))
            ]})
          ]})
        ]})
      ]})
    ]}),

    // 4. Assessment & Questions (Positioned after Skills Selection; auto-syncs questions based on selected skills)
    (0,P.jsxs)("div",{className:"bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-5",children:[
      (0,P.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3",children:[
        (0,P.jsxs)("div",{children:[
          (0,P.jsx)("h2",{className:"text-sm font-bold text-slate-900 uppercase tracking-wide",children:"4. Assessment & Questions"}),
          (0,P.jsx)("p",{className:"text-[11px] text-slate-500",children:"Configure test parameters, question builder, scoring criteria, and passing thresholds."})
        ]}),
        (0,P.jsxs)("div",{className:"flex items-center gap-3",children:[
          (0,P.jsxs)("label",{className:"flex items-center gap-2 cursor-pointer",children:[
            (0,P.jsxs)("span",{className:"inline-flex items-center gap-1.5 text-xs font-bold text-slate-700",children:[(0,P.jsx)("span",{children:"Enable Assessment"}),(0,P.jsx)(InfoTip,{text:"Toggle on to include a graded quiz or test at the end of this training."})]}),
            (0,P.jsx)("button",{type:"button",onClick:()=>setAssessmentEnabled(!assessmentEnabled),className:"relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none " + (assessmentEnabled?"bg-blue-600":"bg-slate-300"),children:(0,P.jsx)("span",{className:"pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out " + (assessmentEnabled?"translate-x-5":"translate-x-0")})})
          ]}),
          (0,P.jsxs)("button",{type:"button",onClick:()=>setShowPreviewModal(true),className:"bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 px-3 py-1.5 rounded-lg text-xs font-semibold shadow-sm flex items-center gap-1.5 transition-colors",children:[
            (0,P.jsx)("span",{children:"Preview Assessment"})
          ]})
        ]})
      ]}),

      assessmentEnabled ? (0,P.jsxs)(P.Fragment,{children:[
        // Assessment Configuration Fields
        (0,P.jsxs)("div",{className:"p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-4",children:[
          (0,P.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4",children:[
            (0,P.jsxs)("div",{className:"space-y-1 md:col-span-2",children:[
              (0,P.jsxs)("label",{className:"inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 mb-1.5",children:[(0,P.jsx)("span",{children:"Assessment Title *"}),(0,P.jsx)(InfoTip,{text:"Name shown to employees at the start of the assessment."})]}),
              (0,P.jsx)("input",{type:"text",value:assessmentTitle,onChange:e=>setAssessmentTitle(e.target.value),placeholder:"e.g. Final Training Assessment",className:"w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs placeholder-slate-400 focus:ring-1 focus:ring-blue-500"})
            ]}),
            (0,P.jsxs)("div",{className:"space-y-1",children:[
              (0,P.jsxs)("label",{className:"inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 mb-1.5",children:[(0,P.jsx)("span",{children:"Passing Score (%) *"}),(0,P.jsx)(InfoTip,{text:"Minimum percentage score required to pass this assessment."})]}),
              (0,P.jsx)("input",{type:"number",min:1,max:100,value:assessPassScore,onChange:e=>setAssessPassScore(e.target.value),placeholder:"e.g. 80",className:"w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs placeholder-slate-400 focus:ring-1 focus:ring-blue-500"})
            ]}),
            (0,P.jsxs)("div",{className:"space-y-1",children:[
              (0,P.jsxs)("label",{className:"inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 mb-1.5",children:[(0,P.jsx)("span",{children:"Max Assessment Attempts *"}),(0,P.jsx)(InfoTip,{text:"Maximum retakes allowed if an employee does not pass."})]}),
              (0,P.jsx)("input",{type:"number",min:1,value:assessMaxAttempts,onChange:e=>setAssessMaxAttempts(e.target.value),placeholder:"e.g. 3",className:"w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs placeholder-slate-400 focus:ring-1 focus:ring-blue-500"})
            ]})
          ]}),
          (0,P.jsxs)("div",{className:"space-y-1",children:[
            (0,P.jsxs)("label",{className:"inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 mb-1.5",children:[(0,P.jsx)("span",{children:"Assessment Description"}),(0,P.jsx)(InfoTip,{text:"Brief instructions or guidelines shown to employees before starting."})]}),
            (0,P.jsx)("textarea",{rows:2,value:assessmentDesc,onChange:e=>setAssessmentDesc(e.target.value),placeholder:"e.g. Complete the following questions to evaluate your understanding of this training.",className:"w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs placeholder-slate-400 focus:ring-1 focus:ring-blue-500"})
          ]})
        ]}),

        // Question Builder Header & Stats
        (0,P.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2",children:[
          (0,P.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"},children:[
            (0,P.jsx)("span",{className:"text-xs font-bold text-slate-900 uppercase tracking-wide",children:"Questions List"}),
            (0,P.jsxs)("span",{className:"bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold px-2.5 py-0.5 rounded-full",children:[totalQuestions," Questions"]}),
            (0,P.jsxs)("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px"},children:[
              (0,P.jsxs)("label",{className:"inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 whitespace-nowrap",children:[(0,P.jsx)("span",{children:"Total Marks:"}),(0,P.jsx)(InfoTip,{text:"Total marks for this assessment; should equal the sum of question marks."})]}),
              (0,P.jsx)("input",{type:"text",inputMode:"numeric",value:assessTotalMarks,onChange:e=>setAssessTotalMarks(e.target.value.replace(/[^0-9]/g,"")),placeholder:"e.g. 100",title:"Enter total marks for this assessment",style:{width:"74px"},className:"bg-white border border-slate-300 rounded-lg px-2.5 py-1 text-center font-bold text-slate-800 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"})
            ]}),
            assessTotalMarks !== "" && Number(assessTotalMarks) > 0 && allQuestionsHaveMarks && questionsMarksSum === Number(assessTotalMarks) && (0,P.jsx)("span",{className:"bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-semibold px-2.5 py-0.5 rounded-full",children:"Matched ✓"})
          ]}),
          (0,P.jsxs)("div",{className:"flex items-center gap-2 flex-wrap self-start sm:self-auto",children:[
            (addSkillToProfile && selectedSkillIds.length > 0) && 
            (0,P.jsxs)("button",{type:"button",onClick:handleAddQuestion,className:"bg-blue-600 hover:bg-blue-700 text-white px-3.5 py-1.5 rounded-lg text-xs font-bold shadow-sm flex items-center gap-1.5 transition-colors",children:[
              (0,P.jsx)("span",{children:"+"}),
              (0,P.jsx)("span",{children:"Add Question"})
            ]})
          ]})
        ]}),

        // Question Cards (Clean, proper alignment, full-width inputs)
        (0,P.jsx)("div",{className:"space-y-4",children:questions.length===0 ? (0,P.jsx)("div",{className:"bg-slate-50 border border-dashed border-slate-300 rounded-xl p-6 text-center text-xs text-slate-500",children:addSkillToProfile ? "Select skills above to auto-generate skill-based questions, or click \"+ Add Question\"." : "No questions added yet. Select skills above (with Add Skill ON), or click \"+ Add Question\" / \"⚡ Auto-Fill Demo\"."}) : questions.map((q, qIndex)=>(0,P.jsxs)("div",{className:"bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4",children:[
          // Question Header Toolbar
          (0,P.jsxs)("div",{className:"flex items-center justify-between flex-wrap gap-2 border-b border-slate-100 pb-3",children:[
            (0,P.jsxs)("div",{className:"flex items-center gap-2.5 flex-wrap",children:[
              (0,P.jsxs)("span",{className:"bg-blue-600 text-white font-bold text-xs px-2.5 py-1 rounded-md shadow-sm",children:["Question ", q.number || (qIndex + 1)]}),
              (0,P.jsxs)("div",{className:"flex items-center gap-1 bg-slate-50 border border-slate-200 rounded-md px-2 py-0.5 text-xs",children:[
                (0,P.jsxs)("span",{className:"inline-flex items-center gap-1 text-slate-500 font-medium",children:[(0,P.jsx)("span",{children:"Marks:"}),(0,P.jsx)(InfoTip,{text:"Points awarded for answering this question correctly."})]}),
                (0,P.jsx)("input",{type:"text",inputMode:"numeric",placeholder:"0",value:q.marks,onChange:e=>handleUpdateQuestion(q.id, "marks", e.target.value.replace(/[^0-9]/g,"")),style:{width:"42px"},className:"text-center bg-white border border-slate-300 rounded font-bold text-slate-800 text-xs py-0.5 focus:outline-none focus:ring-1 focus:ring-blue-500"})
              ]})
            ]}),
            (0,P.jsxs)("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px"},children:[
              (0,P.jsxs)("button",{type:"button",onClick:()=>handleDuplicateQuestion(q.id),style:{display:"inline-flex",alignItems:"center",gap:"5px",padding:"5px 10px"},className:"bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-slate-700 hover:text-blue-700 rounded-lg text-xs font-semibold transition-colors",title:"Duplicate Question",children:[
                (0,P.jsx)(ue,{className:"w-3.5 h-3.5"}),
                (0,P.jsx)("span",{children:"Duplicate"})
              ]}),
              (0,P.jsxs)("button",{type:"button",onClick:()=>handleDeleteQuestion(q.id),style:{display:"inline-flex",alignItems:"center",gap:"5px",padding:"5px 10px"},className:"bg-white border border-rose-200 hover:border-rose-300 hover:bg-rose-50 text-rose-600 hover:text-rose-700 rounded-lg text-xs font-semibold transition-colors",title:"Delete Question",children:[
                (0,P.jsx)(ze,{className:"w-3.5 h-3.5"}),
                (0,P.jsx)("span",{children:"Delete"})
              ]})
            ]})
          ]}),

          // Question Statement (Full Width)
          (0,P.jsxs)("div",{className:"space-y-1 text-xs",children:[
            (0,P.jsxs)("label",{className:"inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 mb-1.5",children:[(0,P.jsx)("span",{children:"Question *"}),(0,P.jsx)(InfoTip,{text:"The prompt or question text shown to the employee."})]}),
            (0,P.jsx)("textarea",{rows:2,value:q.text,onChange:e=>handleUpdateQuestion(q.id, "text", e.target.value),placeholder:"Enter your question statement here...",className:"w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"})
          ]}),

          // Question Type Selection (Clean full row)
          (0,P.jsxs)("div",{className:"space-y-1 text-xs",children:[
            (0,P.jsxs)("label",{className:"inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 mb-1.5",children:[(0,P.jsx)("span",{children:"Question Type *"}),(0,P.jsx)(InfoTip,{text:"Answer format and whether grading is automatic or manual."})]}),
            (0,P.jsxs)("select",{value:q.type,onChange:e=>handleUpdateQuestion(q.id, "type", e.target.value),className:"w-full md:w-80 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs font-medium focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500",children:[
              (0,P.jsx)("option",{value:"short_text",children:"Short Text Answer"}),
              (0,P.jsx)("option",{value:"long_text",children:"Long Text Answer"}),
              (0,P.jsx)("option",{value:"single_choice",children:"Single Selection (Radio)"}),
              (0,P.jsx)("option",{value:"multiple_choice",children:"Multiple Selection (Checkbox)"}),
              (0,P.jsx)("option",{value:"dropdown",children:"Dropdown Selection"}),
              (0,P.jsx)("option",{value:"true_false",children:"True / False"})
            ]})
          ]}),

          // Format-specific Answer Setup (Clean & well-padded)
          (0,P.jsxs)("div",{className:"pt-2 border-t border-slate-100 text-xs",children:[
            // Short Text Answer setup
            q.type==="short_text" && (0,P.jsxs)("div",{className:"space-y-2.5",children:[
              (0,P.jsxs)("div",{className:"flex items-center justify-between",children:[
                (0,P.jsxs)("span",{className:"inline-flex items-center gap-1.5 font-semibold text-slate-700",children:[(0,P.jsx)("span",{children:"Configured Accepted Answers:"}),(0,P.jsx)(InfoTip,{text:"Exact short-text answers automatically marked as correct."})]}),
                (0,P.jsx)("button",{type:"button",onClick:()=>handleAddAcceptedAnswer(q.id),className:"text-blue-600 hover:text-blue-700 font-semibold text-xs",children:"+ Add Accepted Answer"})
              ]}),
              (0,P.jsx)("div",{className:"space-y-2",children:(q.acceptedAnswers||[""]).map((ans, aIdx)=>(0,P.jsxs)("div",{className:"flex items-center gap-2",children:[
                (0,P.jsx)("input",{type:"text",value:ans,onChange:e=>handleUpdateAcceptedAnswer(q.id, aIdx, e.target.value),placeholder:"Enter accepted correct answer...",className:"flex-1 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:bg-white focus:ring-1 focus:ring-blue-500"}),
                (q.acceptedAnswers||[]).length > 1 && (0,P.jsx)("button",{type:"button",onClick:()=>handleRemoveAcceptedAnswer(q.id, aIdx),className:"text-slate-400 hover:text-rose-600 p-1.5 rounded hover:bg-slate-100 text-xs",title:"Remove",children:"✕"})
              ]},aIdx))})
            ]}),

            // Long Text Answer setup (Cleaned per Image 4: No "Requires Manual Review" checkbox)
            q.type==="long_text" && (0,P.jsxs)("div",{className:"space-y-2",children:[
              (0,P.jsxs)("label",{className:"inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 mb-1.5",children:[(0,P.jsx)("span",{children:"Expected Answer"}),(0,P.jsx)(InfoTip,{text:"Evaluation reference for reviewer. Sample solution or grading rubric for manual reviewer evaluation."})]}),
              (0,P.jsx)("textarea",{rows:2,value:q.expectedAnswer||"",onChange:e=>handleUpdateQuestion(q.id, "expectedAnswer", e.target.value),placeholder:"Enter key points, rubric, or sample solution for the evaluator...",className:"w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:bg-white focus:ring-1 focus:ring-blue-500"})
            ]}),

            // Single Selection (Radio) setup
            q.type==="single_choice" && (0,P.jsxs)("div",{className:"space-y-2.5",children:[
              (0,P.jsxs)("div",{className:"flex items-center justify-between",children:[
                (0,P.jsxs)("span",{className:"inline-flex items-center gap-1.5 font-semibold text-slate-700",children:[(0,P.jsx)("span",{children:"Answer Options (Mark exactly 1 option as Correct Answer):"}),(0,P.jsx)(InfoTip,{text:"Add choices and mark the single correct radio option."})]}),
                (0,P.jsx)("button",{type:"button",onClick:()=>handleAddOption(q.id),className:"text-blue-600 hover:text-blue-700 font-semibold text-xs",children:"+ Add Option"})
              ]}),
              (0,P.jsx)("div",{className:"space-y-2",children:(q.options||[]).map((opt, oIdx)=>(0,P.jsxs)("div",{className:"flex items-center gap-2.5 bg-slate-50 p-2.5 rounded-lg border border-slate-200",children:[
                (0,P.jsx)("input",{type:"radio",name:"correct-" + q.id,checked:q.correctAnswer===opt.id,onChange:()=>handleUpdateQuestion(q.id, "correctAnswer", opt.id),className:"w-4 h-4 text-blue-600 cursor-pointer",title:"Mark as Correct Answer"}),
                (0,P.jsx)("input",{type:"text",value:opt.text,onChange:e=>handleUpdateOptionText(q.id, opt.id, e.target.value),placeholder:"Option " + (oIdx+1) + " text...",className:"flex-1 bg-white border border-slate-200 rounded px-2.5 py-1.5 text-xs text-slate-800"}),
                q.correctAnswer===opt.id && (0,P.jsx)("span",{className:"text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded",children:"Correct Answer"}),
                (q.options||[]).length > 2 && (0,P.jsx)("button",{type:"button",onClick:()=>handleRemoveOption(q.id, opt.id),className:"text-slate-400 hover:text-rose-600 p-1 rounded hover:bg-white",title:"Delete Option",children:"✕"})
              ]},opt.id))})
            ]}),

            // Multiple Selection (Checkbox) setup
            q.type==="multiple_choice" && (0,P.jsxs)("div",{className:"space-y-2.5",children:[
              (0,P.jsxs)("div",{className:"flex items-center justify-between",children:[
                (0,P.jsxs)("span",{className:"inline-flex items-center gap-1.5 font-semibold text-slate-700",children:[(0,P.jsx)("span",{children:"Answer Options (Check all options that are correct):"}),(0,P.jsx)(InfoTip,{text:"Add choices and check every option required for a correct answer."})]}),
                (0,P.jsx)("button",{type:"button",onClick:()=>handleAddOption(q.id),className:"text-blue-600 hover:text-blue-700 font-semibold text-xs",children:"+ Add Option"})
              ]}),
              (0,P.jsx)("div",{className:"space-y-2",children:(q.options||[]).map((opt, oIdx)=>{
                let isChecked = Array.isArray(q.correctAnswers) && q.correctAnswers.includes(opt.id);
                return (0,P.jsxs)("div",{className:"flex items-center gap-2.5 bg-slate-50 p-2.5 rounded-lg border border-slate-200",children:[
                  (0,P.jsx)("input",{type:"checkbox",checked:isChecked,onChange:e=>{
                    let curr = Array.isArray(q.correctAnswers) ? [...q.correctAnswers] : [];
                    if(e.target.checked){
                      curr.push(opt.id);
                    } else {
                      curr = curr.filter(id=>id!==opt.id);
                    }
                    handleUpdateQuestion(q.id, "correctAnswers", curr);
                  },className:"w-4 h-4 text-blue-600 rounded cursor-pointer",title:"Check if correct"}),
                  (0,P.jsx)("input",{type:"text",value:opt.text,onChange:e=>handleUpdateOptionText(q.id, opt.id, e.target.value),placeholder:"Option " + (oIdx+1) + " text...",className:"flex-1 bg-white border border-slate-200 rounded px-2.5 py-1.5 text-xs text-slate-800"}),
                  isChecked && (0,P.jsx)("span",{className:"text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded",children:"Correct"}),
                  (q.options||[]).length > 2 && (0,P.jsx)("button",{type:"button",onClick:()=>handleRemoveOption(q.id, opt.id),className:"text-slate-400 hover:text-rose-600 p-1 rounded hover:bg-white",title:"Delete Option",children:"✕"})
                ]},opt.id);
              })})
            ]}),

            // Dropdown Selection setup
            q.type==="dropdown" && (0,P.jsxs)("div",{className:"space-y-2.5",children:[
              (0,P.jsxs)("div",{className:"flex items-center justify-between",children:[
                (0,P.jsxs)("span",{className:"inline-flex items-center gap-1.5 font-semibold text-slate-700",children:[(0,P.jsx)("span",{children:"Dropdown Options (Select the correct dropdown answer):"}),(0,P.jsx)(InfoTip,{text:"Add dropdown choices and select the correct answer below."})]}),
                (0,P.jsx)("button",{type:"button",onClick:()=>handleAddOption(q.id),className:"text-blue-600 hover:text-blue-700 font-semibold text-xs",children:"+ Add Option"})
              ]}),
              (0,P.jsx)("div",{className:"space-y-2",children:(q.options||[]).map((opt, oIdx)=>(0,P.jsxs)("div",{className:"flex items-center gap-2 bg-slate-50 p-2 rounded-lg border border-slate-200",children:[
                (0,P.jsx)("span",{className:"text-xs text-slate-400 font-mono w-6 text-center",children:oIdx+1}),
                (0,P.jsx)("input",{type:"text",value:opt.text,onChange:e=>handleUpdateOptionText(q.id, opt.id, e.target.value),placeholder:"Option text...",className:"flex-1 bg-white border border-slate-200 rounded px-2.5 py-1.5 text-xs text-slate-800"}),
                (q.options||[]).length > 2 && (0,P.jsx)("button",{type:"button",onClick:()=>handleRemoveOption(q.id, opt.id),className:"text-slate-400 hover:text-rose-600 p-1 rounded hover:bg-white",title:"Delete Option",children:"✕"})
              ]},opt.id))}),
              (0,P.jsxs)("div",{className:"flex items-center gap-2 pt-1",children:[
                (0,P.jsx)("span",{className:"font-semibold text-slate-700",children:"Correct Answer:"}),
                (0,P.jsx)("select",{value:q.correctAnswer||"",onChange:e=>handleUpdateQuestion(q.id, "correctAnswer", e.target.value),className:"bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs font-medium focus:ring-1 focus:ring-blue-500",children:(q.options||[]).map(opt=>(0,P.jsx)("option",{value:opt.id,children:opt.text || ("Option (" + opt.id + ")")},opt.id))})
              ]})
            ]}),

            // True / False setup
            q.type==="true_false" && (0,P.jsxs)("div",{className:"space-y-2",children:[
              (0,P.jsxs)("span",{className:"inline-flex items-center gap-1.5 font-semibold text-slate-700",children:[(0,P.jsx)("span",{children:"Select the Correct Answer:"}),(0,P.jsx)(InfoTip,{text:"Choose whether True or False is the correct statement."})]}),
              (0,P.jsxs)("div",{className:"flex items-center gap-6 pt-1",children:[
                (0,P.jsxs)("label",{className:"flex items-center gap-2 cursor-pointer bg-slate-50 px-4 py-2 rounded-lg border border-slate-200",children:[
                  (0,P.jsx)("input",{type:"radio",name:"tf-" + q.id,checked:q.correctAnswer==="True",onChange:()=>handleUpdateQuestion(q.id, "correctAnswer", "True"),className:"w-4 h-4 text-blue-600"}),
                  (0,P.jsx)("span",{className:"font-bold text-slate-800",children:"True"})
                ]}),
                (0,P.jsxs)("label",{className:"flex items-center gap-2 cursor-pointer bg-slate-50 px-4 py-2 rounded-lg border border-slate-200",children:[
                  (0,P.jsx)("input",{type:"radio",name:"tf-" + q.id,checked:q.correctAnswer==="False",onChange:()=>handleUpdateQuestion(q.id, "correctAnswer", "False"),className:"w-4 h-4 text-blue-600"}),
                  (0,P.jsx)("span",{className:"font-bold text-slate-800",children:"False"})
                ]})
              ]})
            ]})
          ]})
        ]},q.id))})
      ]}) : (0,P.jsxs)("div",{className:"p-8 text-center bg-slate-50 border border-dashed border-slate-200 rounded-xl space-y-2",children:[
        (0,P.jsx)("div",{className:"text-2xl",children:"📋"}),
        (0,P.jsx)("div",{className:"text-xs font-bold text-slate-700",children:"Assessment Disabled"}),
        (0,P.jsx)("div",{className:"text-[11px] text-slate-500",children:"Employees enrolled in this training will complete it upon finishing all learning resources without requiring an assessment."})
      ]})
    ]}),

    // Quick Create Skill Modal (saves to Administration > Master Data > Skills without leaving Create/Edit Training)
    showQuickSkillModal && (()=>{let cleanQ=quickSkillName.trim().replace(/\s+/g," "),dupMatch=cleanQ?allSkillsMaster.find(sk=>normSkillKey(sk.name)===normSkillKey(cleanQ)):null;return(0,P.jsx)("div",{className:"fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4",children:(0,P.jsxs)("div",{className:"bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden border border-purple-200",children:[
      (0,P.jsxs)("div",{className:"px-5 py-4 border-b border-purple-200 flex items-center justify-between",style:{backgroundColor:"#faf5ff"},children:[
        (0,P.jsxs)("div",{children:[
          (0,P.jsx)("span",{className:"text-[10px] font-bold uppercase tracking-wider text-purple-700",children:"Administration > Master Data > Skills"}),
          (0,P.jsx)("h3",{className:"text-sm font-bold text-slate-900",children:"Add New Skill"})
        ]}),
        (0,P.jsx)("button",{type:"button",onClick:()=>setShowQuickSkillModal(false),className:"text-slate-400 hover:text-slate-700 text-sm font-bold px-2 py-1",children:"✕"})
      ]}),
      (0,P.jsxs)("div",{className:"p-5 space-y-4 text-xs",children:[
        quickSkillErr && (0,P.jsx)("div",{className:"bg-rose-50 border border-rose-200 text-rose-700 font-semibold px-3 py-2 rounded-lg",children:quickSkillErr}),
        (0,P.jsxs)("div",{className:"space-y-1.5",children:[
          (0,P.jsxs)("label",{className:"font-bold text-slate-700",children:["Skill Name ",(0,P.jsx)("span",{className:"text-rose-500",children:"*"})]}),
          (0,P.jsx)("input",{type:"text",value:quickSkillName,onKeyDown:ev=>{if(ev.key==="Enter")ev.preventDefault();},onChange:ev=>{setQuickSkillErr("");setQuickSkillName(ev.target.value)},placeholder:"e.g. Prompt Engineering",className:"w-full bg-white border rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 "+(dupMatch?"border-rose-400 focus:ring-rose-500/20":"border-slate-300 focus:ring-purple-500/20")}),
          dupMatch && (0,P.jsx)("div",{className:"text-[11px] font-semibold text-rose-600",children:'"'+dupMatch.name+'" already exists in Administration > Master Data > Skills'+(dupMatch.active===!1?" (Inactive)":"")+". Duplicate skills (including case-insensitive matches) cannot be added."})
        ]}),
        (0,P.jsxs)("div",{className:"space-y-1.5",children:[
          (0,P.jsx)("label",{className:"font-bold text-slate-700",children:"Description"}),
          (0,P.jsx)("textarea",{rows:2,value:quickSkillDesc,onChange:ev=>setQuickSkillDesc(ev.target.value),placeholder:"Brief summary of this skill...",className:"w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500/20 resize-none"})
        ]}),
        (0,P.jsx)("div",{className:"text-[11px] text-slate-500",children:"New skills added here are automatically saved to Administration > Master Data > Skills."})
      ]}),
      (0,P.jsxs)("div",{className:"px-5 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-end gap-2.5",children:[
        (0,P.jsx)("button",{type:"button",onClick:()=>setShowQuickSkillModal(false),className:"px-4 py-1.5 rounded-lg border border-slate-300 bg-white text-slate-700 font-semibold text-xs",children:"Cancel"}),
        (0,P.jsx)("button",{type:"button",disabled:quickSkillBusy || Boolean(dupMatch),onClick:async()=>{
          setQuickSkillErr("");
          let clean = quickSkillName.trim().replace(/\s+/g," ");
          if(!clean){setQuickSkillErr("Please enter a skill name.");return;}
          let existing = allSkillsMaster.find(sk=>normSkillKey(sk.name)===normSkillKey(clean));
          if(existing){setQuickSkillErr('Skill "'+existing.name+'" already exists in Administration > Master Data > Skills. Duplicate skills (including case-insensitive matches) are not allowed.');return;}
          setQuickSkillBusy(true);
          try{
            let res = await onSaveSkill({action:"add",skill:{name:clean,description:quickSkillDesc.trim(),active:true}});
            if(res && res.success === !1){
              setQuickSkillErr(res.message || "Could not create skill.");
            } else {
              if(res?.skill?.id){
                setSelectedSkillIds(prev => prev.includes(res.skill.id) ? prev : [...prev, res.skill.id]);
              }
              setShowQuickSkillModal(false);
            }
          }catch(err){
            setQuickSkillErr(err?.message || "Failed to save skill.");
          }finally{
            setQuickSkillBusy(false);
          }
        },style:{backgroundColor:(quickSkillBusy||dupMatch)?"#c4b5fd":"#7c3aed"},className:"px-4 py-1.5 rounded-lg text-white font-bold text-xs shadow-sm "+(dupMatch?"cursor-not-allowed":"cursor-pointer"),children:quickSkillBusy?"Saving...":"Save & Select Skill"})
      ]})
    ]})})})(),

    // (Section 5 REVIEW & PUBLISH completely removed per Image 3)

    // Assessment Preview Modal
    showPreviewModal && (0,P.jsx)("div",{className:"fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto",children:(0,P.jsxs)("div",{className:"bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 space-y-4 my-8",children:[
      (0,P.jsxs)("div",{className:"flex items-center justify-between border-b border-slate-100 pb-3",children:[
        (0,P.jsxs)("div",{children:[
          (0,P.jsx)("span",{className:"bg-blue-50 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded",children:"Employee View Preview"}),
          (0,P.jsx)("h3",{className:"text-base font-bold text-slate-900 mt-1",children:assessmentTitle}),
          (0,P.jsx)("p",{className:"text-xs text-slate-500",children:assessmentDesc})
        ]}),
        (0,P.jsx)("button",{onClick:()=>setShowPreviewModal(false),className:"text-slate-400 hover:text-slate-600 p-1.5 rounded-lg text-base",children:"✕"})
      ]}),
      (0,P.jsxs)("div",{className:"flex items-center gap-4 text-xs font-medium text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-200",children:[
        (0,P.jsxs)("span",{children:["Questions: ", (0,P.jsx)("strong",{className:"text-slate-900",children:totalQuestions})]}),
        (0,P.jsxs)("span",{children:["Total Marks: ", (0,P.jsx)("strong",{className:"text-slate-900",children:totalAssessmentMarks})]}),
        (0,P.jsxs)("span",{children:["Passing Score: ", (0,P.jsx)("strong",{className:"text-slate-900",children:assessPassScore + "% (strictly > 80% to pass)"})]}),
        (0,P.jsxs)("span",{children:["Max Attempts: ", (0,P.jsx)("strong",{className:"text-slate-900",children:assessMaxAttempts})]})
      ]}),
      (0,P.jsx)("div",{className:"space-y-4 max-h-[55vh] overflow-y-auto pr-1",children:questions.map((q, idx)=>(0,P.jsxs)("div",{className:"p-3 rounded-xl border border-slate-200 bg-white space-y-2 text-xs",children:[
        (0,P.jsxs)("div",{className:"flex items-center justify-between",children:[
          (0,P.jsxs)("span",{className:"font-bold text-slate-900",children:["Question ", idx+1]}),
          (0,P.jsxs)("span",{className:"bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[10px] font-semibold",children:[q.marks, " Marks"]})
        ]}),
        (0,P.jsx)("div",{className:"text-slate-800 font-medium",children:q.text || "(Untitled question)"}),
        q.type==="short_text" && (0,P.jsx)("input",{disabled:true,placeholder:"Type your short text answer here...",className:"w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs cursor-not-allowed"}),
        q.type==="long_text" && (0,P.jsx)("textarea",{disabled:true,rows:2,placeholder:"Type your detailed answer here...",className:"w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs cursor-not-allowed"}),
        (q.type==="single_choice" || q.type==="true_false") && (0,P.jsx)("div",{className:"space-y-1.5",children:(q.type==="true_false" ? [{id:"t",text:"True"},{id:"f",text:"False"}] : (q.options||[])).map(o=>(0,P.jsxs)("label",{className:"flex items-center gap-2 p-2 rounded-lg border border-slate-100 bg-slate-50/50 text-slate-700",children:[
          (0,P.jsx)("input",{type:"radio",disabled:true,name:"prev-" + q.id,className:"w-3.5 h-3.5"}),
          (0,P.jsx)("span",{children:o.text})
        ]},o.id))}),
        q.type==="multiple_choice" && (0,P.jsx)("div",{className:"space-y-1.5",children:(q.options||[]).map(o=>(0,P.jsxs)("label",{className:"flex items-center gap-2 p-2 rounded-lg border border-slate-100 bg-slate-50/50 text-slate-700",children:[
          (0,P.jsx)("input",{type:"checkbox",disabled:true,className:"w-3.5 h-3.5 rounded"}),
          (0,P.jsx)("span",{children:o.text})
        ]},o.id))}),
        q.type==="dropdown" && (0,P.jsx)("select",{disabled:true,className:"w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs cursor-not-allowed",children:(q.options||[]).map(o=>(0,P.jsx)("option",{children:o.text},o.id))})
      ]},q.id))}),
      (0,P.jsx)("div",{className:"flex justify-end pt-2 border-t border-slate-100",children:(0,P.jsx)("button",{onClick:()=>setShowPreviewModal(false),className:"bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-lg text-xs font-semibold shadow-sm",children:"Close Preview"})})
    ]})})
  ]});
}function it({assignments:e,employees:empList,programmes:progs,courseProgress,onOpenAssignTraining:t,onEvaluate:n,onSelectAssignment:r}){
  let rawList = [{"id": "132", "name": "Tanya Kapoor", "role": "Business Analyst", "dept": "Collab", "training": "API Security & OAuth2 Best Practices", "level": "Intermediate \u2022 4 hrs", "assigned": "01-Jan-2026", "due": "20-Jan-2026", "progress": 100, "status": "Completed", "scope": "Department: Collab"}, {"id": "133", "name": "Rihan R.", "role": "Software Engineer", "dept": "Web", "training": "CollabCRM Recruitment & Client Portal Workflows", "level": "Intermediate \u2022 18 hrs", "assigned": "01-Oct-2026", "due": "15-Nov-2026", "progress": 75, "status": "In Progress", "scope": "Department: Web"}, {"id": "134", "name": "Priya Nair", "role": "Frontend Developer", "dept": "Web", "training": "Cloud Infrastructure & High-Performance Node Services", "level": "Advanced \u2022 16 hrs", "assigned": "10-Oct-2026", "due": "20-Nov-2026", "progress": 80, "status": "Failed", "scope": "Designation: Frontend Developer"}, {"id": "135", "name": "Suresh Prasad", "role": "Senior Talent Partner", "dept": "Business Analysis", "training": "CollabCRM Recruitment & Client Portal Workflows", "level": "Intermediate \u2022 18 hrs", "assigned": "05-Oct-2026", "due": "25-Oct-2026", "progress": 0, "status": "Not Started", "scope": "Department: Business Analysis"}, {"id": "136", "name": "Ashish Kumar", "role": "Technical Lead & Reporting Manager", "dept": "Web", "training": "Cloud Infrastructure & High-Performance Node Services", "level": "Advanced \u2022 16 hrs", "assigned": "15-Sep-2026", "due": "20-Oct-2026", "progress": 100, "status": "Completed", "scope": "Designation: Technical Lead"}, {"id": "137", "name": "Vikram Malhotra", "role": "Enterprise Account Executive", "dept": "Collab", "training": "Enterprise CRM Communication & Client Delight", "level": "Intermediate \u2022 12 hrs", "assigned": "01-Oct-2026", "due": "30-Nov-2026", "progress": 0, "status": "Not Started", "scope": "Department: Collab"}, {"id": "138", "name": "Ishdeep Anand", "role": "Admin", "dept": "Business Analysis", "training": "Enterprise Security & Data Protection Compliance", "level": "Advanced \u2022 20 hrs", "assigned": "01-Sep-2026", "due": "15-Oct-2026", "progress": 100, "status": "Completed", "scope": "Employee: Ishdeep Anand"}, {"id": "139", "name": "Sanjana Ghosh", "role": "Executive", "dept": "Collab", "training": "Agile Project Delivery & Sprint Planning", "level": "Intermediate \u2022 8 hrs", "assigned": "01-Oct-2026", "due": "10-Nov-2026", "progress": 65, "status": "In Progress", "scope": "Department: Collab"}, {"id": "140", "name": "Megha Salunkhe", "role": "Sr. Executive", "dept": "Collab", "training": "Client Stakeholder Relationship Management", "level": "Intermediate \u2022 6 hrs", "assigned": "20-Sep-2026", "due": "30-Oct-2026", "progress": 90, "status": "In Progress", "scope": "Department: Collab"}, {"id": "141", "name": "Kunal Barve", "role": "Team leader", "dept": "Collab", "training": "Incident Response & SLA Management", "level": "Advanced \u2022 10 hrs", "assigned": "15-Oct-2026", "due": "25-Nov-2026", "progress": 50, "status": "In Progress", "scope": "Designation: Team Leader"}, {"id": "142", "name": "Ananya Sridhar", "role": "Manager", "dept": "Collab", "training": "Executive Leadership & Strategic Governance", "level": "Advanced \u2022 14 hrs", "assigned": "10-Sep-2026", "due": "20-Oct-2026", "progress": 100, "status": "Completed", "scope": "Designation: Manager"}, {"id": "143", "name": "Vikram Anand", "role": "AVP", "dept": "Collab", "training": "Enterprise Resource Scaling & Budgeting", "level": "Advanced \u2022 12 hrs", "assigned": "15-Aug-2026", "due": "30-Sep-2026", "progress": 100, "status": "Completed", "scope": "Employee: Vikram Anand"}, {"id": "144", "name": "Rahul Khanna", "role": "Executive", "dept": "Game", "training": "Automated End-to-End Regression Testing", "level": "Intermediate \u2022 15 hrs", "assigned": "01-Oct-2026", "due": "15-Nov-2026", "progress": 80, "status": "In Progress", "scope": "Department: Game"}, {"id": "145", "name": "Deepa Ramaswamy", "role": "Executive", "dept": "Web", "training": "Kubernetes Multi-Cluster Orchestration", "level": "Advanced \u2022 18 hrs", "assigned": "10-Oct-2026", "due": "20-Nov-2026", "progress": 30, "status": "In Progress", "scope": "Department: Web"}, {"id": "146", "name": "Trevor Lindqvist", "role": "Sr. Executive", "dept": "Data analytics", "training": "Zero Trust Architecture & Threat Mitigation", "level": "Advanced \u2022 22 hrs", "assigned": "25-Sep-2026", "due": "05-Nov-2026", "progress": 100, "status": "Completed", "scope": "Department: Data analytics"}, {"id": "147", "name": "Devin Patel", "role": "Backend Architect", "dept": "Web", "training": "High-Throughput Microservices in Go", "level": "Advanced \u2022 16 hrs", "assigned": "05-Oct-2026", "due": "25-Nov-2026", "progress": 45, "status": "In Progress", "scope": "Designation: Backend Architect"}, {"id": "148", "name": "Sneha Verma", "role": "Talent Acquisition Specialist", "dept": "Business Analysis", "training": "Interview Compliance & Bias Mitigation", "level": "Intermediate \u2022 6 hrs", "assigned": "12-Oct-2026", "due": "18-Nov-2026", "progress": 20, "status": "In Progress", "scope": "Department: Business Analysis"}, {"id": "149", "name": "Aarav Shah", "role": "Business Development Representative", "dept": "Collab", "training": "Cold Outreach & Objection Mastery", "level": "Beginner \u2022 8 hrs", "assigned": "08-Oct-2026", "due": "12-Nov-2026", "progress": 95, "status": "In Progress", "scope": "Department: Collab"}, {"id": "150", "name": "Maya Krishnan", "role": "Systems Administrator", "dept": "Business Analysis", "training": "Linux Kernel Hardening & Audit Logging", "level": "Advanced \u2022 14 hrs", "assigned": "18-Sep-2026", "due": "28-Oct-2026", "progress": 100, "status": "Completed", "scope": "Department: Business Analysis"}, {"id": "151", "name": "Rohan Desai", "role": "QA Automation Engineer", "dept": "Game", "training": "Performance & Load Testing with k6", "level": "Intermediate \u2022 10 hrs", "assigned": "14-Oct-2026", "due": "22-Nov-2026", "progress": 60, "status": "In Progress", "scope": "Designation: QA Automation Engineer"}, {"id": "152", "name": "Zara Haddad", "role": "Executive", "dept": "Collab", "training": "Risk Management & Change Control Procedures", "level": "Intermediate \u2022 7 hrs", "assigned": "02-Oct-2026", "due": "14-Nov-2026", "progress": 85, "status": "In Progress", "scope": "Department: Collab"}, {"id": "153", "name": "Caleb Nguyen", "role": "Business Analyst", "dept": "Collab", "training": "Business Requirements Document (BRD) Standards", "level": "Intermediate \u2022 9 hrs", "assigned": "28-Sep-2026", "due": "02-Nov-2026", "progress": 100, "status": "Completed", "scope": "Designation: Business Analyst"}, {"id": "154", "name": "Naomi Tanaka", "role": "Sr. Executive", "dept": "Collab", "training": "Agile Kanban Optimization & Velocity Tracking", "level": "Intermediate \u2022 5 hrs", "assigned": "16-Oct-2026", "due": "28-Nov-2026", "progress": 15, "status": "In Progress", "scope": "Department: Collab"}, {"id": "155", "name": "Jordan Ellis", "role": "Team leader", "dept": "Collab", "training": "Team Velocity & Burn-Down Chart Diagnostics", "level": "Intermediate \u2022 8 hrs", "assigned": "04-Oct-2026", "due": "16-Nov-2026", "progress": 70, "status": "In Progress", "scope": "Designation: Team Leader"}, {"id": "156", "name": "Sasha Petrov", "role": "Manager", "dept": "Collab", "training": "Cross-Functional Dependency Governance", "level": "Advanced \u2022 11 hrs", "assigned": "12-Sep-2026", "due": "22-Oct-2026", "progress": 100, "status": "Completed", "scope": "Employee: Sasha Petrov"}, {"id": "157", "name": "Elliot Sharpe", "role": "Executive", "dept": "Game", "training": "API Contract Testing with Postman & Pact", "level": "Intermediate \u2022 12 hrs", "assigned": "11-Oct-2026", "due": "21-Nov-2026", "progress": 55, "status": "In Progress", "scope": "Department: Game"}, {"id": "158", "name": "Bianca Moreau", "role": "Executive", "dept": "Web", "training": "Terraform Cloud & GitOps Pipelines", "level": "Advanced \u2022 16 hrs", "assigned": "07-Oct-2026", "due": "19-Nov-2026", "progress": 90, "status": "In Progress", "scope": "Department: Web"}, {"id": "159", "name": "Aditya Joshi", "role": "Security Analyst", "dept": "Data analytics", "training": "Penetration Testing & Vulnerability Assessment", "level": "Advanced \u2022 20 hrs", "assigned": "30-Sep-2026", "due": "10-Nov-2026", "progress": 65, "status": "In Progress", "scope": "Department: Data analytics"}, {"id": "160", "name": "Kavita Rao", "role": "Full-Stack Engineer", "dept": "Web", "training": "React 19 Server Components & State Management", "level": "Advanced \u2022 14 hrs", "assigned": "03-Oct-2026", "due": "17-Nov-2026", "progress": 80, "status": "In Progress", "scope": "Designation: Full-Stack Engineer"}, {"id": "161", "name": "Manish Gupta", "role": "HR Generalist", "dept": "Business Analysis", "training": "Payroll Compliance & Labor Law Fundamentals", "level": "Intermediate \u2022 10 hrs", "assigned": "22-Sep-2026", "due": "25-Oct-2026", "progress": 100, "status": "Completed", "scope": "Department: Business Analysis"}, {"id": "162", "name": "Pooja Hegde", "role": "Account Manager", "dept": "Collab", "training": "SaaS Customer Retention & Upselling Frameworks", "level": "Intermediate \u2022 8 hrs", "assigned": "09-Oct-2026", "due": "23-Nov-2026", "progress": 40, "status": "In Progress", "scope": "Department: Collab"}, {"id": "163", "name": "Karan Mehra", "role": "Network Engineer", "dept": "Business Analysis", "training": "Software Defined Networking (SDN) & BGP", "level": "Advanced \u2022 16 hrs", "assigned": "14-Sep-2026", "due": "24-Oct-2026", "progress": 100, "status": "Completed", "scope": "Designation: Network Engineer"}, {"id": "164", "name": "Simran Kaur", "role": "QA Lead", "dept": "Game", "training": "Test Strategy Design & QA Metrics Reporting", "level": "Advanced \u2022 10 hrs", "assigned": "06-Oct-2026", "due": "18-Nov-2026", "progress": 75, "status": "In Progress", "scope": "Designation: QA Lead"}, {"id": "165", "name": "Farhan Akhtar", "role": "DevOps Engineer", "dept": "Web", "training": "Docker Container Hardening & CIS Benchmarks", "level": "Intermediate \u2022 12 hrs", "assigned": "13-Oct-2026", "due": "26-Nov-2026", "progress": 35, "status": "In Progress", "scope": "Department: Web"}, {"id": "166", "name": "Nisha Singhania", "role": "SOC Lead", "dept": "Data analytics", "training": "SIEM Alert Triage & Incident Escalation", "level": "Advanced \u2022 18 hrs", "assigned": "19-Sep-2026", "due": "29-Oct-2026", "progress": 100, "status": "Completed", "scope": "Designation: SOC Lead"}, {"id": "167", "name": "Tarun Roy", "role": "Data Engineer", "dept": "Web", "training": "Apache Kafka Event Streaming at Scale", "level": "Advanced \u2022 18 hrs", "assigned": "02-Oct-2026", "due": "16-Nov-2026", "progress": 50, "status": "In Progress", "scope": "Department: Web"}, {"id": "168", "name": "Geeta Nair", "role": "People Partner", "dept": "Business Analysis", "training": "Employee Engagement & Retention Strategies", "level": "Intermediate \u2022 6 hrs", "assigned": "15-Oct-2026", "due": "30-Nov-2026", "progress": 10, "status": "In Progress", "scope": "Department: Business Analysis"}, {"id": "169", "name": "Harsh Vardhan", "role": "Sales Director", "dept": "Collab", "training": "Enterprise Revenue Forecasting & Sales Leadership", "level": "Advanced \u2022 12 hrs", "assigned": "08-Sep-2026", "due": "18-Oct-2026", "progress": 100, "status": "Completed", "scope": "Designation: Sales Director"}, {"id": "170", "name": "Isha Roy", "role": "Cloud Architect", "dept": "Business Analysis", "training": "Multi-Region Disaster Recovery on AWS/GCP", "level": "Advanced \u2022 20 hrs", "assigned": "16-Sep-2026", "due": "26-Oct-2026", "progress": 100, "status": "Completed", "scope": "Employee: Isha Roy"}, {"id": "171", "name": "Jayesh Tiwari", "role": "Automation Engineer", "dept": "Game", "training": "Cypress & Playwright Modern Web Automation", "level": "Intermediate \u2022 14 hrs", "assigned": "08-Oct-2026", "due": "20-Nov-2026", "progress": 70, "status": "In Progress", "scope": "Department: Game"}, {"id": "172", "name": "Lavanya Swaminathan", "role": "Compliance Officer", "dept": "Data analytics", "training": "ISO 27001 ISMS Implementation & Internal Audit", "level": "Advanced \u2022 16 hrs", "assigned": "25-Sep-2026", "due": "05-Nov-2026", "progress": 95, "status": "In Progress", "scope": "Employee: Lavanya Swaminathan"}];
  let [searchQuery, setSearchQuery] = (0, l.useState)("");
  let [selectedDept, setSelectedDept] = (0, l.useState)("All Departments");
  let [currentPage, setCurrentPage] = (0, l.useState)(1);
  let [hoveredScope, setHoveredScope] = (0, l.useState)(null);
  let pageSize = 10;

  let allList = (0, l.useMemo)(() => {
    let empPool = [
      ...rawList.map(r => ({ name: r.name, role: r.role, dept: r.dept })),
      ...(Array.isArray(empList) ? empList.map(emp => ({
        name: `${emp.firstName || ""} ${emp.lastName || ""}`.trim(),
        role: emp.designation || emp.employeeRole || "Employee",
        dept: emp.department || "Collab"
      })) : [])
    ].filter(x => x.name);

    let dedupeEmps = arr => {
      let seen = new Set();
      return arr.filter(x => {
        let k = (x.name || "").trim().toLowerCase();
        if (!k || seen.has(k)) return false;
        seen.add(k);
        return true;
      });
    };

    let dynamicGroups = [];
    if (Array.isArray(e)) {
      let dynMap = new Map();
      e.filter(a => a && !/^asg-[1-7]$/.test(String(a.id || ""))).forEach(a => {
        let tsMatch = String(a.id || "").match(/^asg-(\d+)-/);
        let batchTs = tsMatch ? tsMatch[1] : String(a.id || "");
        let key = `${batchTs}::${a.programmeName || ""}::${a.assignedDate || ""}::${a.dueDate || ""}`;
        if (!dynMap.has(key)) dynMap.set(key, []);
        dynMap.get(key).push(a);
      });
      dynMap.forEach(group => {
        let first = group[0];
        let matched = empPool.find(x => x.name.toLowerCase() === String(first.employeeName || "").toLowerCase());
        let enrolledEmployees = dedupeEmps(group.map(g => {
          let m = empPool.find(x => x.name.toLowerCase() === String(g.employeeName || "").toLowerCase());
          return { name: g.employeeName || m?.name || "Employee", role: m?.role || "Employee", dept: m?.dept || "Collab" };
        }));
        dynamicGroups.push({
          id: first.id,
          employeeId: first.employeeId || matched?.id || "",
          programmeId: first.programmeId || "",
          name: first.employeeName || matched?.name || "Employee",
          role: matched?.role || "Employee",
          dept: matched?.dept || "Collab",
          training: first.programmeName || "",
          level: "Assigned Training",
          assigned: first.assignedDate || "04-Nov-2026",
          due: first.dueDate || "01-Dec-2026",
          progress: Number(first.progress) || 0,
          status: first.status || "Not Started",
          enrolledEmployees
        });
      });
    }

    let resolveStaticEnrolled = item => {
      let sc = String(item.scope || "");
      let base = { name: item.name, role: item.role, dept: item.dept };
      if (sc.startsWith("Employee:")) return [base];
      if (sc.startsWith("Department:")) {
        let targetDept = sc.replace(/^Department:\s*/i, "").trim().toLowerCase();
        let peers = empPool.filter(x => (x.dept || "").toLowerCase() === targetDept);
        return dedupeEmps([base, ...peers]).slice(0, 4);
      }
      let targetDesig = sc.replace(/^Designation:\s*/i, "").trim().toLowerCase();
      let rolePeers = empPool.filter(x => (x.role || "").toLowerCase().includes(targetDesig));
      let deptPeers = empPool.filter(x => (x.dept || "").toLowerCase() === (item.dept || "").toLowerCase());
      return dedupeEmps([base, ...rolePeers, ...deptPeers]).slice(0, 3);
    };

    let applyCourseProgress = item => {
      if (!courseProgress || typeof courseProgress !== "object") return item;
      let tNorm = String(item.training || "").trim().toLowerCase();
      let matchedProg = (Array.isArray(progs) ? progs : []).find(pr => (item.programmeId && pr.id === item.programmeId) || (tNorm && String(pr.name || "").trim().toLowerCase() === tNorm));
      let pid = matchedProg?.id || item.programmeId || "";
      let empNameNorm = String(item.name || "").trim().toLowerCase();
      let cpEntry = null;
      if (item.employeeId && pid && courseProgress[`${item.employeeId}::${pid}`]) {
        cpEntry = courseProgress[`${item.employeeId}::${pid}`];
      } else if (empNameNorm === "tanya kapoor" || item.employeeId === "CO-5039" || item.employeeId === "emp-3") {
        if (pid && courseProgress[`CO-5039::${pid}`]) cpEntry = courseProgress[`CO-5039::${pid}`];
        else if (pid && courseProgress[pid]) cpEntry = courseProgress[pid];
        else if (tNorm) {
          cpEntry = Object.values(courseProgress).find(cp => cp && cp.programmeName && cp.programmeName.trim().toLowerCase() === tNorm && (cp.employeeId === "CO-5039" || !cp.employeeId)) || null;
        }
      }
      if (!cpEntry) return item;
      return {
        ...item,
        progress: cpEntry.progress != null ? Number(cpEntry.progress) : item.progress,
        status: cpEntry.status || item.status,
        programmeId: matchedProg?.id || item.programmeId,
        cpEntry
      };
    };

    let enrichedStatic = rawList.map(item => applyCourseProgress({
      ...item,
      enrolledEmployees: resolveStaticEnrolled(item)
    }));

    return [...dynamicGroups.map(applyCourseProgress), ...enrichedStatic];
  }, [e, empList, progs, courseProgress]);

  let filtered = allList.filter(item => {
    let q = searchQuery.toLowerCase().trim();
    let matchesSearch = !q || item.name.toLowerCase().includes(q) || item.training.toLowerCase().includes(q) || (item.role||"").toLowerCase().includes(q) || (item.enrolledEmployees||[]).some(emp => emp.name.toLowerCase().includes(q));
    let matchesDept = selectedDept === "All Departments" || item.dept === selectedDept;
    return matchesSearch && matchesDept;
  });

  let totalCount = filtered.length;
  let totalPages = Math.ceil(totalCount / pageSize) || 1;
  let currentSafePage = Math.min(currentPage, totalPages);
  let paginated = filtered.slice((currentSafePage - 1) * pageSize, currentSafePage * pageSize);

  let resolveAssignmentRecognition = item => {
    let tNorm = String(item.training || "").trim().toLowerCase();
    let matchedProg = (Array.isArray(progs) ? progs : []).find(pr => (item.programmeId && pr.id === item.programmeId) || (tNorm && String(pr.name || "").trim().toLowerCase() === tNorm));
    if (matchedProg) {
      let hasCert = Boolean(matchedProg.certificateGeneration);
      let hasSkill = Boolean(matchedProg.addSkillToProfile);
      if (hasCert && hasSkill) return { label: "Certificate & Skills", cls: "bg-purple-50 text-purple-700 border-purple-200" };
      if (hasCert) return { label: "Certificate", cls: "bg-blue-50 text-blue-700 border-blue-200" };
      if (hasSkill) return { label: "Skills", cls: "bg-emerald-50 text-emerald-700 border-emerald-200" };
      return { label: "None", cls: "bg-slate-100 text-slate-500 border-slate-200" };
    }
    let idNum = parseInt(String(item.id || "0"), 10) || 0;
    let mod = idNum % 3;
    if (mod === 0) return { label: "Certificate & Skills", cls: "bg-purple-50 text-purple-700 border-purple-200" };
    if (mod === 1) return { label: "Certificate", cls: "bg-blue-50 text-blue-700 border-blue-200" };
    return { label: "Skills", cls: "bg-emerald-50 text-emerald-700 border-emerald-200" };
  };

  let showScopePopover = (ev, item) => {
    let list = item.enrolledEmployees && item.enrolledEmployees.length > 0 ? item.enrolledEmployees : [{ name: item.name, role: item.role, dept: item.dept }];
    let rect = ev.currentTarget.getBoundingClientRect();
    let winH = window.innerHeight || 800;
    let winW = window.innerWidth || 1200;
    let placeBelow = (winH - rect.bottom) >= 210 || rect.top < 210;
    let y = placeBelow ? (rect.bottom + 8) : (rect.top - 8);
    let x = Math.max(145, Math.min(winW - 145, rect.left + rect.width / 2));
    setHoveredScope({ x, y, placeBelow, list });
  };

  return (0, P.jsxs)("div", {className: "p-6 space-y-6 max-w-[1600px] mx-auto w-full", children: [
    
    (0, P.jsxs)("div", {className: "bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden", children: [
      (0, P.jsxs)("div", {className: "p-4 border-b border-slate-200 flex flex-wrap items-center justify-between gap-4", children: [
        (0, P.jsxs)("div", {className: "flex items-center gap-3", children: [
          (0, P.jsx)("h2", {className: "font-bold text-slate-900 text-base", children: "Assignments"}),
          (0, P.jsxs)("span", {className: "bg-blue-50 text-blue-700 text-xs font-bold px-2 py-0.5 rounded-full", children: [totalCount, " Total"]})
        ]}),
        (0, P.jsxs)("div", {className: "flex items-center gap-3", children: [
          (0, P.jsx)("input", {
            type: "text",
            value: searchQuery,
            onChange: ev => { setSearchQuery(ev.target.value); setCurrentPage(1); },
            placeholder: "Filter employee or training...",
            className: "bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          }),
          (0, P.jsxs)("select", {
            value: selectedDept,
            onChange: ev => { setSelectedDept(ev.target.value); setCurrentPage(1); },
            className: "bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20",
            children: [
              (0, P.jsx)("option", {value: "All Departments", children: "All Departments"}),
              (0, P.jsx)("option", {value: "Business Analysis", children: "Business Analysis"}),
              (0, P.jsx)("option", {value: "Game", children: "Game"}),
              (0, P.jsx)("option", {value: "Collab", children: "Collab"}),
              (0, P.jsx)("option", {value: "Web", children: "Web"}),
              (0, P.jsx)("option", {value: "Data analytics", children: "Data analytics"})
            ]
          })
        ]})
      ]}),
      (0, P.jsx)("div", {className: "overflow-x-auto", children: 
        (0, P.jsxs)("table", {className: "w-full text-left border-collapse", children: [
          (0, P.jsx)("thead", {children: 
            (0, P.jsxs)("tr", {className: "border-b border-slate-200 text-[11px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50/50", children: [
              (0, P.jsx)("th", {className: "py-3 px-4", children: "Employee Name"}),
              (0, P.jsx)("th", {className: "py-3 px-4", children: "Assigned Training"}),
              (0, P.jsx)("th", {className: "py-3 px-4", children: "Recognition"}),
              (0, P.jsx)("th", {className: "py-3 px-4", children: "Assigned Date"}),
              (0, P.jsx)("th", {className: "py-3 px-4", children: "Due Date"}),
              (0, P.jsx)("th", {className: "py-3 px-4", children: "Progress"}),
              (0, P.jsx)("th", {className: "py-3 px-4 text-right", children: "Actions"})
            ]})
          }),
          (0, P.jsx)("tbody", {className: "divide-y divide-slate-100 text-sm", children: 
            paginated.map((item, idx) => {
              let enrolledList = item.enrolledEmployees && item.enrolledEmployees.length > 0 ? item.enrolledEmployees : [{ name: item.name, role: item.role, dept: item.dept }];
              let firstEmp = enrolledList[0];
              let extraCount = enrolledList.length - 1;
              let recBadge = resolveAssignmentRecognition(item);
              return (0, P.jsxs)("tr", {
                className: "hover:bg-slate-50/80 transition-colors cursor-pointer",
                onClick: () => r(item),
                children: [
                  (0, P.jsx)("td", {className: "py-3 px-4", children: 
                    (0, P.jsxs)("div", {className: "flex items-center gap-3", children: [
                      (0, P.jsx)("div", {className: "w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-xs shrink-0", children: (item.name || "E")[0]}),
                      (0, P.jsxs)("div", {children: [
                        (0, P.jsx)("div", {className: "font-bold text-slate-900", children: item.name}),
                        (0, P.jsx)("div", {className: "text-xs text-slate-500", children: item.role})
                      ]})
                    ]})
                  }),
                  (0, P.jsxs)("td", {className: "py-3 px-4", children: [
                    (0, P.jsx)("div", {className: "font-semibold text-slate-900 text-xs", children: item.training}),
                    (0, P.jsx)("div", {className: "text-[11px] text-slate-500", children: item.level})
                  ]}),
                  (0, P.jsx)("td", {className: "py-3 px-4 whitespace-nowrap", children: (0, P.jsx)("span", {className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${recBadge.cls}`, children: recBadge.label})}),
                  (0, P.jsx)("td", {className: "py-3 px-4 text-slate-600 text-xs tabular-nums", children: fmtSysDate(item.assigned)}),
                  (0, P.jsx)("td", {className: "py-3 px-4 text-xs tabular-nums font-medium text-slate-700", children: fmtSysDate(item.due)}),
                  (0, P.jsxs)("td", {className: "py-3 px-4 w-36", children: [
                    (0, P.jsxs)("div", {className: "flex items-center justify-between text-xs font-mono font-bold mb-1 text-slate-700", children: [
                      (0, P.jsxs)("span", {children: [item.progress, "%"]}),
                      item.status === "Failed" && (0, P.jsx)("span", {className: "text-[10px] font-sans font-bold text-rose-700 bg-rose-50 border border-rose-200 px-1.5 py-0.5 rounded", children: "Failed"})
                    ]}),
                    (0, P.jsx)("div", {className: "w-full bg-slate-100 h-2 rounded-full overflow-hidden", children: (0, P.jsx)("div", {className: `h-full rounded-full ${item.status === "Failed" ? "bg-rose-500" : item.progress === 100 ? "bg-emerald-500" : "bg-blue-600"}`, style: {width: `${item.progress}%`} })})
                  ]}),
                  (0, P.jsx)("td", {className: "py-3 px-4 text-right", onClick: ev => ev.stopPropagation(), children: 
                    (0, P.jsx)("div", {className: "flex items-center justify-end gap-1.5", children: 
                      (0, P.jsx)("button", {type: "button", onClick: () => r(item), className: "p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors cursor-pointer", title: "View Assignment Details", children: (0, P.jsx)(pe, {className: "w-4 h-4"})})
                    })
                  })
                ]
              }, item.id || idx);
            })
          })
        ]})
      }),
      (0, P.jsxs)("div", {className: "p-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600 bg-slate-50/50", children: [
        (0, P.jsxs)("div", {className: "font-medium", children: [
          "Showing ", (0, P.jsx)("span", {className: "font-bold text-slate-900", children: totalCount === 0 ? 0 : (currentSafePage - 1) * pageSize + 1}),
          " to ", (0, P.jsx)("span", {className: "font-bold text-slate-900", children: Math.min(currentSafePage * pageSize, totalCount)}),
          " of ", (0, P.jsx)("span", {className: "font-bold text-slate-900", children: totalCount}), " Assignments"
        ]}),
        (0, P.jsxs)("div", {className: "flex items-center gap-1.5", children: [
          (0, P.jsx)("button", {type: "button", disabled: currentSafePage === 1, onClick: () => setCurrentPage(p => Math.max(1, p - 1)), className: "px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed font-medium shadow-xs transition-colors", children: "Previous"}),
          Array.from({length: totalPages}, (_, i) => i + 1).map(page => (0, P.jsx)("button", {key: page, type: "button", onClick: () => setCurrentPage(page), className: `w-8 h-8 rounded-lg font-bold transition-colors ${currentSafePage === page ? "bg-blue-600 text-white shadow-xs" : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"}`, children: page})),
          (0, P.jsx)("button", {type: "button", disabled: currentSafePage === totalPages, onClick: () => setCurrentPage(p => Math.min(totalPages, p + 1)), className: "px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed font-medium shadow-xs transition-colors", children: "Next"})
        ]})
      ]})
    ]}),

    hoveredScope && (0, P.jsxs)("div", {
      role: "tooltip",
      style: {
        position: "fixed",
        left: hoveredScope.x + "px",
        top: hoveredScope.y + "px",
        transform: hoveredScope.placeBelow ? "translate(-50%, 0)" : "translate(-50%, -100%)",
        zIndex: 99999,
        minWidth: "230px",
        maxWidth: "290px",
        backgroundColor: "#ffffff",
        border: "1px solid #e2e8f0",
        borderRadius: "10px",
        boxShadow: "0 12px 28px -6px rgba(15, 23, 42, 0.22)",
        padding: "10px 12px",
        pointerEvents: "none"
      },
      children: [
        (0, P.jsxs)("div", {
          style: { fontSize: "11px", fontWeight: "700", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: "8px", paddingBottom: "6px", borderBottom: "1px solid #f1f5f9" },
          children: ["Enrolled Employees (", hoveredScope.list.length, ")"]
        }),
        (0, P.jsx)("div", {
          style: { display: "flex", flexDirection: "column", gap: "7px" },
          children: hoveredScope.list.map((emp, idx) => (0, P.jsxs)("div", {
            style: { display: "flex", alignItems: "center", gap: "8px" },
            children: [
              (0, P.jsx)("div", {
                style: { width: "24px", height: "24px", borderRadius: "9999px", backgroundColor: "#eff6ff", color: "#1d4ed8", fontSize: "10px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
                children: (emp.name || "E")[0]
              }),
              (0, P.jsxs)("div", {
                style: { minWidth: 0 },
                children: [
                  (0, P.jsx)("div", { style: { fontSize: "12px", fontWeight: "600", color: "#0f172a", lineHeight: "1.2" }, children: emp.name }),
                  (0, P.jsx)("div", { style: { fontSize: "10px", color: "#64748b", lineHeight: "1.3" }, children: [emp.role, emp.dept].filter(Boolean).join(" • ") })
                ]
              })
            ]
          }, emp.name + "-" + idx))
        })
      ]
    })
  ]});
}
let DEFAULT_ASSESSMENT_QUESTIONS = [
  { id: "q-1", number: 1, text: "What does CRM stand for in CollabCRM?", type: "short_text", marks: 2, mandatory: true, acceptedAnswers: ["Customer Relationship Management", "customer relationship management"] },
  { id: "q-2", number: 2, text: "Which protocol is primarily used for real-time notifications in CollabCRM?", type: "single_choice", marks: 2, mandatory: true, options: [{ id: "opt-1", text: "WebSocket" }, { id: "opt-2", text: "FTP" }, { id: "opt-3", text: "SMTP" }, { id: "opt-4", text: "Telnet" }], correctAnswer: "opt-1" },
  { id: "q-3", number: 3, text: "Which of the following are core platforms used in this curriculum? (Select all that apply)", type: "multiple_choice", marks: 2, mandatory: true, options: [{ id: "mopt-1", text: "Unreal Engine" }, { id: "mopt-2", text: "Unity" }, { id: "mopt-3", text: "Blender" }, { id: "mopt-4", text: "Godot" }], correctAnswers: ["mopt-1", "mopt-2", "mopt-4"] },
  { id: "q-4", number: 4, text: "Select the primary department responsible for candidate onboarding workflows:", type: "dropdown", marks: 2, mandatory: true, options: [{ id: "dopt-1", text: "Recruitment & HR Operations" }, { id: "dopt-2", text: "Hardware Engineering" }, { id: "dopt-3", text: "Facilities Management" }], correctAnswer: "dopt-1" },
  { id: "q-5", number: 5, text: "Employees must complete all learning resources before they can access the final assessment.", type: "true_false", marks: 1, mandatory: true, correctAnswer: "True" },
  { id: "q-6", number: 6, text: "Summarize the architectural flow of token-based authentication and explain how JWT tokens are validated.", type: "long_text", marks: 1, mandatory: false, expectedAnswer: "JWT tokens validated via Gateway middleware, checking signature, expiry, and RBAC claims." }
];

function formatQuestionResponse(q, idx, ans) {
  let qMarks = Number(q.marks) || 0;
  let qType = q.type || "short_text";
  let opts = Array.isArray(q.options) ? q.options : [];
  let optLabel = oid => {
    let found = opts.find(o => o.id === oid);
    return found ? found.text : (oid ? String(oid) : "");
  };
  let isCorrect = false;
  let userAnswerText = "Not Answered";
  let correctAnswerText = "—";

  if (qType === "short_text") {
    let accepted = (q.acceptedAnswers || []).map(a => String(a).trim()).filter(Boolean);
    let cleanUser = ans && typeof ans === "string" ? ans.trim() : "";
    userAnswerText = cleanUser || "Not Answered";
    correctAnswerText = accepted.length > 0 ? accepted.join(" / ") : "—";
    if (cleanUser && accepted.map(a => a.toLowerCase()).includes(cleanUser.toLowerCase())) {
      isCorrect = true;
    }
  } else if (qType === "single_choice" || qType === "dropdown") {
    userAnswerText = ans ? optLabel(ans) : "Not Answered";
    correctAnswerText = q.correctAnswer ? optLabel(q.correctAnswer) : "—";
    if (ans && ans === q.correctAnswer) isCorrect = true;
  } else if (qType === "multiple_choice") {
    let userArr = Array.isArray(ans) ? ans : [];
    let corrArr = Array.isArray(q.correctAnswers) ? q.correctAnswers : [];
    userAnswerText = userArr.length > 0 ? userArr.map(optLabel).join(", ") : "Not Answered";
    correctAnswerText = corrArr.length > 0 ? corrArr.map(optLabel).join(", ") : "—";
    let sortedUser = [...userArr].sort();
    let sortedCorrect = [...corrArr].sort();
    if (sortedUser.length === sortedCorrect.length && sortedUser.length > 0 && sortedUser.every((val, i) => val === sortedCorrect[i])) {
      isCorrect = true;
    }
  } else if (qType === "true_false") {
    userAnswerText = ans ? String(ans) : "Not Answered";
    correctAnswerText = q.correctAnswer ? String(q.correctAnswer) : "True";
    if (ans && ans === q.correctAnswer) isCorrect = true;
  } else if (qType === "long_text") {
    let cleanLong = ans ? String(ans).trim() : "";
    userAnswerText = cleanLong || "Not Answered";
    correctAnswerText = q.expectedAnswer || "Detailed architectural explanation (>10 characters)";
    if (cleanLong.length > 10) isCorrect = true;
  }

  return {
    questionId: q.id || `q-${idx + 1}`,
    number: q.number || idx + 1,
    text: q.text || "",
    type: qType,
    marks: qMarks,
    earnedMarks: isCorrect ? qMarks : 0,
    isCorrect,
    userAnswerRaw: ans !== undefined ? ans : null,
    userAnswerText,
    correctAnswerText
  };
}

function gradeAssessmentSubmission(questions, userAnswers, passingScore, attemptNumber) {
  let qList = Array.isArray(questions) ? questions : [];
  let ansMap = userAnswers && typeof userAnswers === "object" ? userAnswers : {};
  let responses = qList.map((q, idx) => formatQuestionResponse(q, idx, ansMap[q.id]));
  let totalMarks = responses.reduce((sum, r) => sum + (Number(r.marks) || 0), 0);
  let earnedMarks = responses.reduce((sum, r) => sum + (Number(r.earnedMarks) || 0), 0);
  let scorePercentage = totalMarks > 0 ? Math.round((earnedMarks / totalMarks) * 100) : 100;
  let isPassed = scorePercentage > (Number(passingScore) || 80);
  return {
    attemptNumber: attemptNumber || 1,
    earnedMarks,
    totalMarks,
    scorePercentage,
    isPassed,
    evalStatus: isPassed ? "Passed" : "Failed",
    submittedAt: new Date().toISOString(),
    answers: { ...ansMap },
    questionResponses: responses
  };
}

function synthesizeFallbackAttempts(questions, passingScore, maxAttempts, isCompleted, isFailed) {
  let qList = Array.isArray(questions) && questions.length > 0 ? questions : DEFAULT_ASSESSMENT_QUESTIONS;
  let buildAnswer = (q, wantCorrect) => {
    let qt = q.type || "short_text";
    if (qt === "short_text") return wantCorrect ? ((q.acceptedAnswers && q.acceptedAnswers[0]) || "Customer Relationship Management") : "Manual Client Database";
    if (qt === "single_choice" || qt === "dropdown") {
      if (wantCorrect) return q.correctAnswer || q.options?.[0]?.id || "";
      let wrongOpt = (q.options || []).find(o => o.id !== q.correctAnswer);
      return wrongOpt ? wrongOpt.id : "opt-wrong";
    }
    if (qt === "multiple_choice") {
      if (wantCorrect) return Array.isArray(q.correctAnswers) ? [...q.correctAnswers] : [];
      let wrongOpts = (q.options || []).filter(o => !(q.correctAnswers || []).includes(o.id)).map(o => o.id);
      return wrongOpts.length > 0 ? [wrongOpts[0]] : [];
    }
    if (qt === "true_false") return wantCorrect ? (q.correctAnswer || "True") : (q.correctAnswer === "False" ? "True" : "False");
    if (qt === "long_text") return wantCorrect ? (q.expectedAnswer || "JWT tokens validated via Gateway middleware checking signature, expiry, and RBAC claims.") : "Skipped.";
    return "";
  };

  if (isCompleted) {
    let ans = {};
    qList.forEach(q => { ans[q.id] = buildAnswer(q, true); });
    return [gradeAssessmentSubmission(qList, ans, passingScore, 1)];
  }
  if (isFailed) {
    let count = Math.max(1, Number(maxAttempts) || 2);
    let hist = [];
    for (let att = count; att >= 1; att--) {
      let ans = {};
      let correctCutoff = att === count ? Math.floor(qList.length * 0.5) : Math.max(1, Math.floor(qList.length * 0.3));
      qList.forEach((q, idx) => { ans[q.id] = buildAnswer(q, idx < correctCutoff); });
      let graded = gradeAssessmentSubmission(qList, ans, passingScore, att);
      if (graded.isPassed) {
        let lowAns = {};
        qList.forEach((q, idx) => { lowAns[q.id] = buildAnswer(q, idx === 0 && qList.length > 2); });
        graded = gradeAssessmentSubmission(qList, lowAns, passingScore, att);
      }
      hist.push(graded);
    }
    return hist;
  }
  return [];
}

function at({assignment:e,programmes:progs,courseProgress,skills:skillsConfig,canManageSkills:canApprove,onApproveCompletion,onBack:t,onEvaluate:n}){
  let r=e||{id:"132",name:"Tanya Kapoor",role:"Business Analyst",dept:"Project",training:"API Security & OAuth2 Best Practices",level:"Intermediate • 4 hrs",assigned:"01-Jan-2026",due:"20-Jan-2026",type:"Elective",progress:100,status:"Completed"};
  let [showAssessmentModal, setShowAssessmentModal] = (0, l.useState)(false);
  let [selectedAttemptIdx, setSelectedAttemptIdx] = (0, l.useState)(0);
  let [approvalBusy, setApprovalBusy] = (0, l.useState)(false);

  let empRole=(r.role&&r.role!=="Project")?r.role:"Business Analyst";
  let empDept=r.dept||"Business Analysis";

  let tNorm = String(r.training || r.programmeName || "").trim().toLowerCase();
  let matchedProg = (Array.isArray(progs) ? progs : []).find(pr => (r.programmeId && pr.id === r.programmeId) || (tNorm && String(pr.name || "").trim().toLowerCase() === tNorm));
  let pid = matchedProg?.id || r.programmeId || "";
  let empNameNorm = String(r.name || "").trim().toLowerCase();

  let cpEntry = r.cpEntry || null;
  if (!cpEntry && courseProgress && typeof courseProgress === "object") {
    if (r.employeeId && pid && courseProgress[`${r.employeeId}::${pid}`]) {
      cpEntry = courseProgress[`${r.employeeId}::${pid}`];
    } else if (empNameNorm === "tanya kapoor" || r.employeeId === "CO-5039" || r.employeeId === "emp-3") {
      if (pid && courseProgress[`CO-5039::${pid}`]) cpEntry = courseProgress[`CO-5039::${pid}`];
      else if (pid && courseProgress[pid]) cpEntry = courseProgress[pid];
      else if (tNorm) {
        cpEntry = Object.values(courseProgress).find(cp => cp && cp.programmeName && cp.programmeName.trim().toLowerCase() === tNorm && (cp.employeeId === "CO-5039" || !cp.employeeId)) || null;
      }
    }
  }

  let progressVal = cpEntry?.progress != null ? Number(cpEntry.progress) : (r.progress ?? 100);
  let statusText = cpEntry?.status || r.status || "Completed";

  let isAssessmentEnabled = matchedProg?.assessment ? matchedProg.assessment.enabled !== false : (matchedProg?.hasAssessment !== false);
  let passingScore = Number(matchedProg?.assessment?.passingScore || matchedProg?.passingScore) || 80;
  let maxAttempts = Number(matchedProg?.assessment?.maxAttempts || matchedProg?.maxAttempts) || 3;
  let questions = (matchedProg?.assessment?.questions && matchedProg.assessment.questions.length > 0) ? matchedProg.assessment.questions : DEFAULT_ASSESSMENT_QUESTIONS;

  let rawHistory = Array.isArray(cpEntry?.attemptHistory) && cpEntry.attemptHistory.length > 0
    ? cpEntry.attemptHistory
    : (cpEntry?.latestResult ? [cpEntry.latestResult] : []);
  let isCompleted = statusText === "Completed" || progressVal === 100 || Boolean(cpEntry?.latestResult?.isPassed);
  let isFailed = statusText === "Failed";
  let isAttemptsDone = rawHistory.length >= maxAttempts && maxAttempts > 0;
  let attempts = rawHistory.length > 0
    ? rawHistory
    : ((isCompleted || isFailed) && isAssessmentEnabled ? synthesizeFallbackAttempts(questions, passingScore, maxAttempts, isCompleted, isFailed) : []);
  let latestAttempt = attempts[0] || null;
  let attemptsUsed = attempts.length;
  let canViewAssessment = isAssessmentEnabled && (isCompleted || isFailed || attemptsUsed >= maxAttempts);
  let activeAttempt = attempts[selectedAttemptIdx] || latestAttempt;

  let badgeStyle = statusText === "Completed"
    ? { wrap: "bg-emerald-50 text-emerald-700 border-emerald-200", icon: "text-emerald-500" }
    : statusText === "Failed"
      ? { wrap: "bg-rose-50 text-rose-700 border-rose-200", icon: "text-rose-500" }
      : statusText === "Under Review"
        ? { wrap: "bg-amber-50 text-amber-700 border-amber-200", icon: "text-amber-500" }
        : statusText === "In Progress"
          ? { wrap: "bg-blue-50 text-blue-700 border-blue-200", icon: "text-blue-500" }
          : { wrap: "bg-slate-100 text-slate-700 border-slate-200", icon: "text-slate-400" };

  let resources = (Array.isArray(matchedProg?.resources) && matchedProg.resources.length > 0)
    ? matchedProg.resources
    : [
        { id: "res-1", title: "Module 1: Architecture Video Lecture" },
        { id: "res-2", title: "Module 2: Implementation Playbook (PDF)" }
      ];
  let completedResMap = cpEntry?.completedResources || null;

  let questionTypeLabel = qt => qt === "short_text" ? "Short Text" : qt === "single_choice" ? "Single Choice" : qt === "multiple_choice" ? "Multiple Choice" : qt === "dropdown" ? "Dropdown" : qt === "true_false" ? "True / False" : "Long Text";

  let activeResponses = activeAttempt
    ? (Array.isArray(activeAttempt.questionResponses) && activeAttempt.questionResponses.length > 0
        ? activeAttempt.questionResponses
        : questions.map((q, idx) => formatQuestionResponse(q, idx, activeAttempt.answers?.[q.id])))
    : [];

  return (0,P.jsxs)("div",{className:"p-6 space-y-5 max-w-[1600px] mx-auto w-full",children:[
    (0,P.jsxs)("div",{className:"flex items-center justify-between flex-wrap gap-3",children:[
      (0,P.jsxs)("div",{className:"flex items-center gap-2 text-xs text-slate-500 font-medium",children:[
        (0,P.jsx)("button",{type:"button",onClick:t,className:"hover:text-blue-600 transition-colors font-semibold",children:"Assignments"}),
        (0,P.jsx)("span",{children:"›"}),
        (0,P.jsx)("span",{className:"text-blue-600 font-semibold",children:"View Assignment"})
      ]}),
      (0,P.jsxs)("button",{type:"button",onClick:t,className:"flex items-center gap-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 px-3.5 py-1.5 rounded-lg shadow-sm transition-colors",children:[
        (0,P.jsx)(S,{className:"w-3.5 h-3.5"}),
        (0,P.jsx)("span",{children:"Back to Assignments"})
      ]})
    ]}),

    (0,P.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-6 items-start",children:[
      (0,P.jsxs)("div",{className:"lg:col-span-1 bg-white border border-slate-200 rounded-xl p-6 space-y-6 shadow-sm",children:[
        (0,P.jsxs)("div",{className:"text-center relative",children:[
          (0,P.jsx)("div",{className:"flex items-center justify-between gap-2 mb-2",children:(0,P.jsxs)("span",{className:`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${badgeStyle.wrap}`,children:[
            (0,P.jsx)(D,{className:`w-3.5 h-3.5 ${badgeStyle.icon}`}),
            (0,P.jsx)("span",{children:statusText})
          ]})}),
          (0,P.jsx)("div",{className:"w-24 h-24 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold flex items-center justify-center text-3xl mx-auto shadow-inner mt-2",children:(r.name||"T").trim().split(/\s+/).map(x=>x[0]).slice(0,2).join("").toUpperCase()}),
          (0,P.jsx)("h2",{className:"text-base font-bold text-slate-900 mt-4 leading-snug",children:r.name}),
          (0,P.jsx)("div",{className:"text-xs text-slate-500 mt-1",children:empRole}),
          (0,P.jsx)("div",{className:"inline-block mt-2 bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded text-xs font-semibold",children:empDept})
        ]}),
        (0,P.jsxs)("div",{className:"border-t border-slate-100 pt-4 space-y-4 text-xs",children:[
          (0,P.jsxs)("div",{children:[
            (0,P.jsx)("div",{className:"text-slate-400 font-medium",children:"Assigned Training"}),
            (0,P.jsx)("div",{className:"font-semibold text-slate-800 mt-0.5 leading-snug",children:r.training})
          ]}),
          (0,P.jsxs)("div",{children:[
            (0,P.jsx)("div",{className:"text-slate-400 font-medium",children:"Assigned Date"}),
            (0,P.jsx)("div",{className:"font-semibold text-slate-800 mt-0.5",children:fmtSysDate(r.assigned)})
          ]}),
          (0,P.jsxs)("div",{children:[
            (0,P.jsx)("div",{className:"text-slate-400 font-medium",children:"Due Date"}),
            (0,P.jsx)("div",{className:"font-semibold text-slate-800 mt-0.5",children:fmtSysDate(r.due)})
          ]})
        ]})
      ]}),

      (0,P.jsxs)("div",{className:"lg:col-span-3 space-y-5",children:[

        (0,P.jsxs)("div",{className:"bg-white border border-slate-200 rounded-xl shadow-sm grid grid-cols-1 md:grid-cols-2 text-xs",children:[
          (0,P.jsxs)("div",{className:"p-4 space-y-2",children:[
            (0,P.jsx)("div",{className:"w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600",children:(0,P.jsx)(te,{className:"w-4 h-4"})}),
            (0,P.jsxs)("div",{children:[
              (0,P.jsx)("div",{className:"text-slate-400 font-medium",children:"Assignment ID"}),
              (0,P.jsxs)("div",{className:"font-bold text-purple-700 text-sm mt-0.5",children:["TRN-ASSIGN-",r.id]})
            ]})
          ]}),
          (0,P.jsxs)("div",{className:"p-4 space-y-2",children:[
            (0,P.jsx)("div",{className:`w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center ${isFailed ? "text-rose-600" : "text-emerald-600"}`,children:(0,P.jsx)(D,{className:"w-4 h-4"})}),
            (0,P.jsxs)("div",{children:[
              (0,P.jsx)("div",{className:"text-slate-400 font-medium",children:"Overall Course Progress"}),
              (0,P.jsxs)("div",{className:"font-bold text-slate-900 text-sm mt-0.5",children:[progressVal,"%"]})
            ]})
          ]})
        ]}),

        (0,P.jsxs)("div",{className:"bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden",children:[
          (0,P.jsx)("div",{className:"px-5 py-3.5 border-b border-slate-100",children:(0,P.jsx)("h3",{className:"text-xs font-bold text-slate-900",children:"Assigned Learning Modules & Assessment"})}),
          (0,P.jsxs)("div",{className:"p-5 space-y-2.5 text-xs",children:[
            ...resources.map((res, mIdx) => {
              let resDone = completedResMap ? Boolean(completedResMap[res.id]) : (isCompleted || isFailed || progressVal >= 80 || (progressVal > 0 && mIdx === 0));
              let modStatusText = resDone ? "Completed (100%)" : (progressVal > 0 && mIdx === 0 ? "In Progress" : "Not Started");
              let modStatusCls = resDone ? "text-emerald-700 font-bold" : (progressVal > 0 && mIdx === 0 ? "text-blue-700 font-semibold" : "text-slate-500 font-semibold");
              return (0,P.jsxs)("div",{className:"p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between gap-3",children:[
                (0,P.jsx)("span",{className:"font-medium text-slate-800",children:res.title || `Module ${mIdx + 1}`}),
                (0,P.jsx)("span",{className:modStatusCls,children:modStatusText})
              ]}, res.id || mIdx);
            }),
            isAssessmentEnabled && (0,P.jsxs)("div",{className:"p-3 bg-slate-50 border border-slate-200 rounded-lg flex flex-wrap items-center justify-between gap-3",children:[
              (0,P.jsxs)("div",{className:"space-y-0.5",children:[
                (0,P.jsxs)("div",{className:"font-medium text-slate-800",children:["Final Assessment: ", r.training]}),
                (0,P.jsxs)("div",{className:"text-[11px] text-slate-500",children:[
                  "Passing Score: >", passingScore, "% • Attempts Used: ", attemptsUsed, "/", maxAttempts
                ]})
              ]}),
              (0,P.jsxs)("div",{className:"flex items-center gap-3",children:[
                latestAttempt && latestAttempt.isPassed
                  ? (0,P.jsxs)("span",{className:"text-emerald-700 font-bold",children:["Completed (", latestAttempt.scorePercentage, "% Score)"]})
                  : (isFailed || isAttemptsDone)
                    ? (0,P.jsxs)("span",{className:"text-rose-700 font-bold",children:["Failed (", latestAttempt ? latestAttempt.scorePercentage : 0, "% Score)"]})
                    : attemptsUsed > 0
                      ? (0,P.jsxs)("span",{className:"text-amber-700 font-semibold",children:["Attempt ", attemptsUsed, "/", maxAttempts, " (", latestAttempt.scorePercentage, "% — In Progress)"]})
                      : (0,P.jsx)("span",{className:"text-slate-500 font-semibold",children:"Pending"}),
                canViewAssessment && (0,P.jsx)("button",{
                  type:"button",
                  onClick:()=>{ setSelectedAttemptIdx(0); setShowAssessmentModal(true); },
                  className:"px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-xs transition-colors cursor-pointer",
                  children:"View Assessment"
                })
              ]})
            ]})
          ]})
        ]})
      ]})
    ]}),

    showAssessmentModal && activeAttempt && (0,P.jsx)("div",{
      className:"fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-50 flex justify-end animate-in fade-in duration-150",
      onClick:()=>setShowAssessmentModal(false),
      children:(0,P.jsxs)("div",{
        className:"bg-white w-full max-w-3xl h-full shadow-2xl flex flex-col justify-between border-l border-slate-200 animate-in slide-in-from-right duration-200 overflow-hidden",
        onClick:ev=>ev.stopPropagation(),
        children:[
          (0,P.jsxs)("div",{className:"p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50 shrink-0",children:[
            (0,P.jsxs)("div",{className:"min-w-0",children:[
              (0,P.jsxs)("div",{className:"flex items-center gap-2",children:[
                (0,P.jsx)(Me,{className:"w-5 h-5 text-blue-600 shrink-0"}),
                (0,P.jsxs)("h2",{className:"font-bold text-slate-900 text-base truncate",children:["Assessment Review — ", r.name]})
              ]}),
              (0,P.jsxs)("p",{className:"text-xs text-slate-500 mt-0.5 truncate",children:[r.training, " • Passing Criteria: Strictly > ", passingScore, "%"]})
            ]}),
            (0,P.jsx)("button",{type:"button",onClick:()=>setShowAssessmentModal(false),className:"p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer",title:"Close Assessment Review",children:(0,P.jsx)(N,{className:"w-5 h-5"})})
          ]}),

          (0,P.jsxs)("div",{className:"p-6 space-y-5 flex-1 overflow-y-auto",children:[
            (0,P.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[
              (0,P.jsxs)("div",{className:`rounded-xl p-4 border ${activeAttempt.isPassed ? "bg-emerald-50 border-emerald-200" : "bg-rose-50 border-rose-200"}`,children:[
                (0,P.jsx)("div",{className:"text-[10px] font-bold uppercase tracking-wider text-slate-500",children:"ASSESSMENT RESULT"}),
                (0,P.jsx)("div",{className:`text-xl font-black mt-1 ${activeAttempt.isPassed ? "text-emerald-700" : "text-rose-700"}`,children:activeAttempt.isPassed ? "Passed ✓" : "Failed ✕"}),
                (0,P.jsx)("div",{className:`text-[11px] font-semibold mt-1 ${activeAttempt.isPassed ? "text-emerald-700" : "text-rose-700"}`,children:activeAttempt.isPassed ? `Scored above >${passingScore}%` : `Did not exceed >${passingScore}%`})
              ]}),
              (0,P.jsxs)("div",{className:"bg-slate-50 border border-slate-200 rounded-xl p-4",children:[
                (0,P.jsx)("div",{className:"text-[10px] font-bold uppercase tracking-wider text-slate-400",children:"SCORE ACHIEVED"}),
                (0,P.jsxs)("div",{className:`text-xl font-black mt-1 tabular-nums ${activeAttempt.isPassed ? "text-emerald-700" : "text-rose-700"}`,children:[activeAttempt.scorePercentage, "%"]}),
                (0,P.jsxs)("div",{className:"text-[11px] text-slate-600 font-semibold mt-1",children:[activeAttempt.earnedMarks, " / ", activeAttempt.totalMarks, " Marks"]})
              ]}),
              (0,P.jsxs)("div",{className:"bg-slate-50 border border-slate-200 rounded-xl p-4",children:[
                (0,P.jsx)("div",{className:"text-[10px] font-bold uppercase tracking-wider text-slate-400",children:"ATTEMPTS USED"}),
                (0,P.jsxs)("div",{className:"text-xl font-black text-slate-900 mt-1 tabular-nums",children:[attemptsUsed, " / ", maxAttempts]}),
                (0,P.jsx)("div",{className:"text-[11px] text-slate-600 font-semibold mt-1",children:activeAttempt.isPassed ? "Assessment Passed" : (attemptsUsed >= maxAttempts ? "All Attempts Exhausted" : "Attempts Remaining")})
              ]})
            ]}),

            attempts.length > 1 && (0,P.jsxs)("div",{className:"space-y-2",children:[
              (0,P.jsx)("div",{className:"text-[11px] font-bold uppercase tracking-wider text-slate-500",children:"Select Submitted Attempt"}),
              (0,P.jsx)("div",{className:"flex flex-wrap gap-2",children:attempts.map((att, aIdx) => {
                let isSel = aIdx === selectedAttemptIdx;
                return (0,P.jsxs)("button",{
                  type:"button",
                  onClick:()=>setSelectedAttemptIdx(aIdx),
                  className:`px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors cursor-pointer ${isSel ? "bg-blue-600 text-white border-blue-600 shadow-xs" : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"}`,
                  children:[
                    "Attempt ", att.attemptNumber || (attempts.length - aIdx),
                    " (", att.scorePercentage, "% ", att.isPassed ? "Passed" : "Failed", ")",
                    aIdx === 0 ? " • Latest" : ""
                  ]
                }, aIdx);
              })})
            ]}),

            (0,P.jsxs)("div",{className:"space-y-3",children:[
              (0,P.jsxs)("div",{className:"flex items-center justify-between",children:[
                (0,P.jsxs)("h3",{className:"text-xs font-bold uppercase tracking-wider text-slate-500",children:["Employee Responses (", activeResponses.length, " Questions)"]}),
                (0,P.jsxs)("span",{className:"text-[11px] font-semibold text-slate-500",children:[activeResponses.filter(x=>x.isCorrect).length, " Correct • ", activeResponses.filter(x=>!x.isCorrect).length, " Incorrect"]})
              ]}),
              activeResponses.map((qr, qIdx) => (0,P.jsxs)("div",{
                className:`bg-white border rounded-xl p-4 space-y-2.5 ${qr.isCorrect ? "border-emerald-200" : "border-rose-200"}`,
                children:[
                  (0,P.jsxs)("div",{className:"flex items-center justify-between flex-wrap gap-2",children:[
                    (0,P.jsxs)("div",{className:"flex items-center gap-2",children:[
                      (0,P.jsxs)("span",{className:"px-2 py-0.5 rounded bg-blue-600 text-white text-[11px] font-bold",children:["Question ", qr.number || (qIdx + 1)]}),
                      (0,P.jsx)("span",{className:"px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[11px] font-semibold",children:questionTypeLabel(qr.type)})
                    ]}),
                    (0,P.jsxs)("div",{className:"flex items-center gap-2",children:[
                      (0,P.jsx)("span",{className:`px-2 py-0.5 rounded text-[11px] font-bold border ${qr.isCorrect ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-rose-50 text-rose-700 border-rose-200"}`,children:qr.isCorrect ? "Correct ✓" : "Incorrect ✕"}),
                      (0,P.jsxs)("span",{className:"px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] font-bold tabular-nums",children:[qr.earnedMarks, "/", qr.marks, " Marks"]})
                    ]})
                  ]}),
                  (0,P.jsx)("div",{className:"text-xs font-bold text-slate-900 leading-relaxed",children:qr.text}),
                  (0,P.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 pt-1",children:[
                    (0,P.jsxs)("div",{className:"space-y-1",children:[
                      (0,P.jsx)("div",{className:"text-[10px] font-bold uppercase tracking-wider text-slate-400",children:"Employee's Answer"}),
                      (0,P.jsx)("div",{className:`p-2.5 rounded-lg border text-xs font-semibold ${qr.isCorrect ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-rose-50 text-rose-700 border-rose-200"}`,children:qr.userAnswerText})
                    ]}),
                    (0,P.jsxs)("div",{className:"space-y-1",children:[
                      (0,P.jsx)("div",{className:"text-[10px] font-bold uppercase tracking-wider text-slate-400",children:"Correct / Accepted Answer"}),
                      (0,P.jsx)("div",{className:"p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700",children:qr.correctAnswerText})
                    ]})
                  ]})
                ]
              }, qr.questionId || qIdx))
            ]})
          ]}),

          (0,P.jsxs)("div",{className:"p-5 border-t border-slate-200 bg-slate-50 flex items-center justify-between shrink-0",children:[
            (0,P.jsxs)("span",{className:"text-xs text-slate-500 font-medium",children:["Viewing Attempt ", activeAttempt.attemptNumber || 1, " of ", attemptsUsed]}),
            (0,P.jsx)("button",{type:"button",onClick:()=>setShowAssessmentModal(false),className:"px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-300 rounded-lg shadow-xs transition-colors cursor-pointer",children:"Close"})
          ]})
        ]
      })
    })
  ]});
}function ot({categories:catList}){
  let activeCats=(0,l.useMemo)(()=>(Array.isArray(catList)&&catList.length>0?catList:DEFAULT_CATEGORIES_SEED).filter(c=>c.active!==!1),[catList]);
  let [viewMode, setViewMode] = (0,l.useState)("employee");
  let [searchQuery, setSearchQuery] = (0,l.useState)("");
  let [trainingStatusFilter, setTrainingStatusFilter] = (0,l.useState)("All Training Statuses");
  let [progCatFilter, setProgCatFilter] = (0,l.useState)("All Categories");
  let [progStatusFilter, setProgStatusFilter] = (0,l.useState)("All Statuses");
  let [selectedLearner, setSelectedLearner] = (0,l.useState)(null);
  let [selectedProg, setSelectedProg] = (0,l.useState)(null);

  let employeeRecords = [
    {name:'Tanya Kapoor',email:'calebnguyen@maildrop.cc',dept:'Collab',training:'API Security & OAuth2 Best Practices',assigned:'01-Jan-2026',due:'20-Jan-2026',completion:100,trainingStatus:'Completed',subStatus:'Approved'},
    {name:'Tanya Kapoor',email:'calebnguyen@maildrop.cc',dept:'Collab',training:'API Security & OAuth2 Best Practices',assigned:'26-Jan-2026',due:'15-Jun-2026',completion:0,trainingStatus:'Not Started',subStatus:'Pending Sub'},
    {name:'Tanya Kapoor',email:'calebnguyen@maildrop.cc',dept:'Collab',training:'API Security & OAuth2 Best Practices',assigned:'05-Dec-2025',due:'12-Jan-2026',completion:25,trainingStatus:'Overdue',subStatus:'Pending Sub'},
    {name:'Tanya Kapoor',email:'calebnguyen@maildrop.cc',dept:'Collab',training:'API Security & OAuth2 Best Practices',assigned:'10-Jan-2026',due:'15-Mar-2026',completion:70,trainingStatus:'In Progress',subStatus:'Pending Sub'},
    {name:'Tanya Kapoor',email:'calebnguyen@maildrop.cc',dept:'Collab',training:'API Security & OAuth2 Best Practices',assigned:'28-Jan-2026',due:'20-May-2026',completion:0,trainingStatus:'Not Started',subStatus:'Pending Sub'},
    {name:'Tanya Kapoor',email:'calebnguyen@maildrop.cc',dept:'Collab',training:'API Security & OAuth2 Best Practices',assigned:'01-Jan-2026',due:'08-Feb-2026',completion:100,trainingStatus:'Completed',subStatus:'Approved'},
    {name:'Tanya Kapoor',email:'calebnguyen@maildrop.cc',dept:'Collab',training:'API Security & OAuth2 Best Practices',assigned:'12-Jan-2026',due:'10-Apr-2026',completion:55,trainingStatus:'In Progress',subStatus:'Pending Sub'},
    {name:'Tanya Kapoor',email:'calebnguyen@maildrop.cc',dept:'Collab',training:'API Security & OAuth2 Best Practices',assigned:'25-Jan-2026',due:'30-May-2026',completion:0,trainingStatus:'Not Started',subStatus:'Pending Sub'},
    {name:'Tanya Kapoor',email:'calebnguyen@maildrop.cc',dept:'Collab',training:'API Security & OAuth2 Best Practices',assigned:'16-Jan-2026',due:'25-Apr-2026',completion:35,trainingStatus:'In Progress',subStatus:'Pending Sub'},
    {name:'Tanya Kapoor',email:'calebnguyen@maildrop.cc',dept:'Collab',training:'API Security & OAuth2 Best Practices',assigned:'04-Jan-2026',due:'02-Feb-2026',completion:100,trainingStatus:'Completed',subStatus:'Approved'},
    {name:'Rihan R.',email:'rihan.r@collabcrm.com',dept:'Web',training:'CollabCRM Recruitment & Client Portal Workflows',assigned:'01-Oct-2026',due:'15-Nov-2026',completion:75,trainingStatus:'In Progress',subStatus:'Pending Sub'},
    {name:'Priya Nair',email:'priya.nair@collabcrm.com',dept:'Web',training:'Cloud Infrastructure & High-Performance Node Services',assigned:'10-Oct-2026',due:'20-Nov-2026',completion:40,trainingStatus:'In Progress',subStatus:'Pending Sub'},
    {name:'Suresh Prasad',email:'suresh.p@collabcrm.com',dept:'Business Analysis',training:'CollabCRM Recruitment & Client Portal Workflows',assigned:'05-Oct-2026',due:'25-Oct-2026',completion:0,trainingStatus:'Not Started',subStatus:'Pending Sub'},
    {name:'Ashish Kumar',email:'ashish.k@collabcrm.com',dept:'Web',training:'Cloud Infrastructure & High-Performance Node Services',assigned:'15-Sep-2026',due:'20-Oct-2026',completion:100,trainingStatus:'Completed',subStatus:'Approved'},
    {name:'Vikram Malhotra',email:'vikram.m@collabcrm.com',dept:'Collab',training:'Enterprise CRM Communication & Client Delight',assigned:'01-Oct-2026',due:'30-Nov-2026',completion:0,trainingStatus:'Not Started',subStatus:'Pending Sub'}
  ];

  let programmeRecords = [
    {name:'CollabCRM Recruitment & Client Portal Workflows',version:'v1.2',cat:'Recruitment & HR Operations',level:'Intermediate',duration:'18h 0mins',enrolled:8,completed:3,inProgress:4,overdue:1,avgProgress:68,status:'Published',learners:[{name:'Rihan R.',dept:'Web',progress:75,status:'In Progress'},{name:'Suresh Prasad',dept:'Business Analysis',progress:0,status:'Not Started'},{name:'Tanya Kapoor',dept:'Collab',progress:100,status:'Completed'}]},
    {name:'API Security & OAuth2 Best Practices',version:'v2.0',cat:'Engineering & Tech Architecture',level:'Intermediate',duration:'4h 0mins',enrolled:12,completed:5,inProgress:5,overdue:2,avgProgress:72,status:'Published',learners:[{name:'Tanya Kapoor',dept:'Collab',progress:100,status:'Completed'},{name:'Ashish Kumar',dept:'Web',progress:100,status:'Completed'},{name:'Priya Nair',dept:'Web',progress:40,status:'In Progress'}]},
    {name:'Cloud Infrastructure & High-Performance Node Services',version:'v1.0',cat:'Engineering & Tech Architecture',level:'Advanced',duration:'16h 0mins',enrolled:6,completed:2,inProgress:3,overdue:1,avgProgress:62,status:'Published',learners:[{name:'Ashish Kumar',dept:'Web',progress:100,status:'Completed'},{name:'Priya Nair',dept:'Web',progress:40,status:'In Progress'}]},
    {name:'Enterprise CRM Communication & Client Delight',version:'v1.1',cat:'Sales & Business Development',level:'Intermediate',duration:'12h 0mins',enrolled:5,completed:1,inProgress:3,overdue:1,avgProgress:45,status:'Published',learners:[{name:'Vikram Malhotra',dept:'Collab',progress:0,status:'Not Started'}]},
    {name:'Security Awareness & GDPR Compliance 2026',version:'v3.0',cat:'Governance & Compliance',level:'Beginner',duration:'2h 0mins',enrolled:15,completed:12,inProgress:2,overdue:1,avgProgress:90,status:'Published',learners:[{name:'Tanya Kapoor',dept:'Collab',progress:100,status:'Completed'},{name:'Ananya Roy',dept:'Web',progress:100,status:'Completed'}]},
    {name:'Incident Response & SLA Management',version:'v1.0',cat:'Engineering & Tech Architecture',level:'Expert',duration:'8h 0mins',enrolled:4,completed:2,inProgress:1,overdue:1,avgProgress:70,status:'Published',learners:[{name:'Tanya Kapoor',dept:'Collab',progress:85,status:'Completed'}]},
    {name:'Product Analytics & User Behavior Tracking',version:'v1.0',cat:'Product & Design',level:'Intermediate',duration:'6h 0mins',enrolled:0,completed:0,inProgress:0,overdue:0,avgProgress:0,status:'Draft',learners:[]},
    {name:'Data Protection, GDPR & Employee Privacy 2026',version:'v2.1',cat:'Governance & Compliance',level:'Intermediate',duration:'3h 0mins',enrolled:10,completed:8,inProgress:1,overdue:1,avgProgress:88,status:'Published',learners:[{name:'Tanya Kapoor',dept:'Collab',progress:100,status:'Completed'}]}
  ];

  let filteredEmployees = employeeRecords.filter(e => {
    let matchesQuery = !searchQuery || e.name.toLowerCase().includes(searchQuery.toLowerCase()) || e.training.toLowerCase().includes(searchQuery.toLowerCase()) || e.dept.toLowerCase().includes(searchQuery.toLowerCase());
    let matchesTraining = trainingStatusFilter === 'All Training Statuses' || e.trainingStatus === trainingStatusFilter;
    return matchesQuery && matchesTraining;
  });

  let filteredProgrammes = programmeRecords.filter(p => {
    let matchesQuery = !searchQuery || p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.cat.toLowerCase().includes(searchQuery.toLowerCase());
    let matchesCat = progCatFilter === 'All Categories' || doesProgUseCategory({category:p.cat}, progCatFilter);
    let matchesStatus = progStatusFilter === 'All Statuses' || p.status === progStatusFilter;
    return matchesQuery && matchesCat && matchesStatus;
  });

  return (0,P.jsxs)('div',{className:'p-6 space-y-6 max-w-[1600px] mx-auto w-full',children:[
    // Screen Title & Dual-Mode View Switcher
    (0,P.jsxs)('div',{className:'flex flex-col md:flex-row md:items-center justify-between gap-4',children:[
      (0,P.jsxs)('div',{className:'flex items-center gap-3',children:[
        (0,P.jsx)('h1',{className:'font-bold text-slate-900 text-base',children:'Training Progress'}),
        (0,P.jsxs)('span',{className:'bg-blue-50 text-blue-700 text-xs font-bold px-2 py-0.5 rounded-full',children:viewMode==='employee'?[filteredEmployees.length,' Records']:[filteredProgrammes.length,' Trainings']})
      ]}),
      // Dual-Mode View Switcher (Employee-wise vs Programme-wise)
      (0,P.jsxs)('div',{className:'inline-flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200',children:[
        (0,P.jsxs)('button',{type:'button',onClick:()=>setViewMode('employee'),className:`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${viewMode==='employee'?'bg-white text-blue-700 shadow-sm':'text-slate-600 hover:text-slate-900 cursor-pointer'}`,children:[
          (0,P.jsx)('span',{children:'👤 Employee-wise'}),
          (0,P.jsx)('span',{className:`text-[10px] px-1.5 py-0.5 rounded-full ${viewMode==='employee'?'bg-blue-50 text-blue-700 font-bold':'bg-slate-200 text-slate-600'}`,children:filteredEmployees.length})
        ]}),
        (0,P.jsxs)('button',{type:'button',onClick:()=>setViewMode('programme'),className:`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${viewMode==='programme'?'bg-white text-blue-700 shadow-sm':'text-slate-600 hover:text-slate-900 cursor-pointer'}`,children:[
          (0,P.jsx)('span',{children:'📚 Training-wise'}),
          (0,P.jsx)('span',{className:`text-[10px] px-1.5 py-0.5 rounded-full ${viewMode==='programme'?'bg-blue-50 text-blue-700 font-bold':'bg-slate-200 text-slate-600'}`,children:filteredProgrammes.length})
        ]})
      ]})
    ]}),

    // Content Container
    viewMode === 'employee' ? (0,P.jsxs)('div',{className:'bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden',children:[
      (0,P.jsxs)('div',{className:'p-4 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4',children:[
        (0,P.jsx)('input',{type:'text',value:searchQuery,onChange:e=>setSearchQuery(e.target.value),placeholder:'Search employee or training...',className:'bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 w-52 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500'}),
        (0,P.jsxs)('div',{className:'flex items-center gap-3 flex-wrap',children:[
          (0,P.jsxs)('select',{value:trainingStatusFilter,onChange:e=>setTrainingStatusFilter(e.target.value),className:'bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-700 font-medium',children:[
            (0,P.jsx)('option',{value:'All Training Statuses',children:'All Training Statuses'}),
            (0,P.jsx)('option',{value:'Completed',children:'Completed'}),
            (0,P.jsx)('option',{value:'In Progress',children:'In Progress'}),
            (0,P.jsx)('option',{value:'Overdue',children:'Overdue'}),
            (0,P.jsx)('option',{value:'Not Started',children:'Not Started'})
          ]})
        ]})
      ]}),
      (0,P.jsx)('div',{className:'overflow-x-auto',children:(0,P.jsxs)('table',{className:'w-full text-left border-collapse',children:[
        (0,P.jsx)('thead',{children:(0,P.jsxs)('tr',{className:'border-b border-slate-200 text-[11px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50/50',children:[
          (0,P.jsx)('th',{className:'py-3 px-4 whitespace-nowrap',children:'Employee Name'}),
          (0,P.jsx)('th',{className:'py-3 px-4 whitespace-nowrap',children:'Department'}),
          (0,P.jsx)('th',{className:'py-3 px-4 whitespace-nowrap',children:'Assigned Training'}),
          (0,P.jsx)('th',{className:'py-3 px-4 whitespace-nowrap',children:'Start Date'}),
          (0,P.jsx)('th',{className:'py-3 px-4 whitespace-nowrap',children:'Due Date'}),
          (0,P.jsx)('th',{className:'py-3 px-4 whitespace-nowrap',children:'Completion %'}),
          (0,P.jsx)('th',{className:'py-3 px-4 whitespace-nowrap',children:'Training Status'}),
          (0,P.jsx)('th',{className:'py-3 px-4 text-right whitespace-nowrap',children:'Action'})
        ]})}),
        (0,P.jsx)('tbody',{className:'divide-y divide-slate-100 text-sm',children:filteredEmployees.map((e,t)=>(0,P.jsxs)('tr',{className:'hover:bg-slate-50/80 transition-colors',children:[
          (0,P.jsx)('td',{className:'py-3 px-4',children:(0,P.jsxs)('div',{className:'flex items-center gap-3',children:[
            (0,P.jsx)('div',{className:'w-7 h-7 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-xs shrink-0',children:e.name[0]}),
            (0,P.jsxs)('div',{children:[
              (0,P.jsx)('div',{className:'font-bold text-slate-900 text-xs',children:e.name}),
              (0,P.jsx)('div',{className:'text-[11px] text-slate-500',children:e.email})
            ]})
          ]})}),
          (0,P.jsx)('td',{className:'py-3 px-4 text-slate-700 text-xs font-medium',children:e.dept}),
          (0,P.jsx)('td',{className:'py-3 px-4 text-xs font-semibold text-slate-900',children:e.training}),
          (0,P.jsx)('td',{className:'py-3 px-4 text-slate-600 text-xs tabular-nums whitespace-nowrap',children:fmtSysDate(e.assigned)}),
          (0,P.jsx)('td',{className:'py-3 px-4 text-slate-600 text-xs tabular-nums whitespace-nowrap',children:fmtSysDate(e.due)}),
          (0,P.jsxs)('td',{className:'py-3 px-4 w-32',children:[
            (0,P.jsx)('div',{className:'flex items-center justify-between text-xs font-mono font-bold mb-1 text-slate-700',children:(0,P.jsxs)('span',{children:[e.completion,'%']})}),
            (0,P.jsx)('div',{className:'w-full bg-slate-100 h-2 rounded-full overflow-hidden',children:(0,P.jsx)('div',{className:`h-full rounded-full ${e.completion===100?'bg-emerald-500':e.completion>0?'bg-blue-600':'bg-slate-300'}`,style:{width:`${e.completion}%`}})})
          ]}),
          (0,P.jsx)('td',{className:'py-3 px-4',children:(0,P.jsx)('span',{className:`px-2.5 py-1 rounded-full text-xs font-medium border whitespace-nowrap ${e.trainingStatus==='Completed'?'bg-emerald-50 text-emerald-700 border-emerald-200':e.trainingStatus==='Overdue'?'bg-rose-50 text-rose-700 border-rose-200':e.trainingStatus==='In Progress'?'bg-blue-50 text-blue-700 border-blue-200':'bg-slate-100 text-slate-600 border-slate-200'}`,children:e.trainingStatus})}),
          (0,P.jsx)('td',{className:'py-3 px-4 text-right',children:(0,P.jsx)('button',{onClick:()=>setSelectedLearner(e),className:'p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 cursor-pointer',title:'View Employee Progress',children:(0,P.jsx)(pe,{className:'w-4 h-4'})})})
        ]},t))})
      ]})})
    ]}) : (0,P.jsxs)('div',{className:'bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden',children:[
      (0,P.jsxs)('div',{className:'p-4 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4',children:[
        (0,P.jsx)('input',{type:'text',value:searchQuery,onChange:e=>setSearchQuery(e.target.value),placeholder:'Search training name or category...',className:'bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 w-60 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500'}),
        (0,P.jsxs)('div',{className:'flex items-center gap-3 flex-wrap',children:[
          (0,P.jsxs)('select',{value:progCatFilter,onChange:e=>setProgCatFilter(e.target.value),className:'bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-700 font-medium',children:[
            (0,P.jsx)('option',{value:'All Categories',children:'All Categories'}),
            activeCats.map(cat=>(0,P.jsx)('option',{value:cat.name,children:cat.name},cat.name))
          ]}),
          (0,P.jsxs)('select',{value:progStatusFilter,onChange:e=>setProgStatusFilter(e.target.value),className:'bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-700 font-medium',children:[
            (0,P.jsx)('option',{value:'All Statuses',children:'All Statuses'}),
            (0,P.jsx)('option',{value:'Published',children:'Published'}),
            (0,P.jsx)('option',{value:'Draft',children:'Draft'})
          ]})
        ]})
      ]}),
      (0,P.jsx)('div',{className:'overflow-x-auto',children:(0,P.jsxs)('table',{className:'w-full text-left border-collapse',children:[
        (0,P.jsx)('thead',{children:(0,P.jsxs)('tr',{className:'border-b border-slate-200 text-[11px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50/50',children:[
          (0,P.jsx)('th',{className:'py-3 px-4 whitespace-nowrap',children:'Training Name'}),
          (0,P.jsx)('th',{className:'py-3 px-4 whitespace-nowrap',children:'Category'}),
          (0,P.jsx)('th',{className:'py-3 px-4 whitespace-nowrap',children:'Difficulty Level'}),
          (0,P.jsx)('th',{className:'py-3 px-4 whitespace-nowrap',children:'Duration'}),
          (0,P.jsx)('th',{className:'py-3 px-4 whitespace-nowrap',children:'Enrolled'}),
          (0,P.jsx)('th',{className:'py-3 px-4 whitespace-nowrap',children:'Completed'}),
          (0,P.jsx)('th',{className:'py-3 px-4 whitespace-nowrap',children:'In Progress'}),
          (0,P.jsx)('th',{className:'py-3 px-4 whitespace-nowrap',children:'Overdue'}),
          (0,P.jsx)('th',{className:'py-3 px-4 whitespace-nowrap',children:'Avg Progress'}),
          (0,P.jsx)('th',{className:'py-3 px-4 whitespace-nowrap',children:'Status'}),
          (0,P.jsx)('th',{className:'py-3 px-4 text-right whitespace-nowrap',children:'Action'})
        ]})}),
        (0,P.jsx)('tbody',{className:'divide-y divide-slate-100 text-sm',children:filteredProgrammes.map((p,idx)=>{
          let isDraft = String(p.status || '').toLowerCase() === 'draft';
          return (0,P.jsxs)('tr',{className:'hover:bg-slate-50/80 transition-colors cursor-pointer',onClick:()=>setSelectedProg(p),children:[
          (0,P.jsxs)('td',{className:'py-3 px-4',children:[
            (0,P.jsx)('div',{className:'font-bold text-slate-900 text-xs hover:text-blue-600',children:p.name}),
            (0,P.jsx)('span',{className:'bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] font-mono font-bold mt-0.5 inline-block',children:p.version})
          ]}),
          (0,P.jsx)('td',{className:'py-3 px-4 text-slate-700 text-xs',children:p.cat}),
          (0,P.jsx)('td',{className:'py-3 px-4 text-slate-600 text-xs',children:p.level}),
          (0,P.jsx)('td',{className:'py-3 px-4 text-slate-600 text-xs font-mono whitespace-nowrap',children:p.duration}),
          (0,P.jsx)('td',{className:'py-3 px-4 text-slate-900 font-bold text-xs tabular-nums',children:isDraft ? '—' : p.enrolled}),
          (0,P.jsx)('td',{className:'py-3 px-4 text-emerald-700 font-semibold text-xs tabular-nums',children:isDraft ? '—' : p.completed}),
          (0,P.jsx)('td',{className:'py-3 px-4 text-blue-700 font-semibold text-xs tabular-nums',children:isDraft ? '—' : p.inProgress}),
          (0,P.jsx)('td',{className:'py-3 px-4 text-rose-700 font-semibold text-xs tabular-nums',children:isDraft ? '—' : p.overdue}),
          (0,P.jsx)('td',{className:'py-3 px-4 w-28',children:isDraft ? (0,P.jsx)('span',{className:'text-xs text-slate-400 font-medium',children:'—'}) : (0,P.jsxs)(P.Fragment,{children:[
            (0,P.jsx)('div',{className:'flex justify-between text-xs font-mono font-bold mb-1 text-slate-700',children:(0,P.jsxs)('span',{children:[p.avgProgress,'%']})}),
            (0,P.jsx)('div',{className:'w-full bg-slate-100 h-2 rounded-full overflow-hidden',children:(0,P.jsx)('div',{className:`h-full rounded-full ${p.avgProgress>75?'bg-emerald-500':'bg-blue-600'}`,style:{width:`${p.avgProgress}%`}})})
          ]})}),
          (0,P.jsx)('td',{className:'py-3 px-4',children:(0,P.jsx)('span',{className:`px-2.5 py-1 rounded-full text-xs font-medium border ${p.status==='Published'?'bg-emerald-50 text-emerald-700 border-emerald-200':'bg-amber-50 text-amber-700 border-amber-200'}`,children:p.status})}),
          (0,P.jsx)('td',{className:'py-3 px-4 text-right',onClick:e=>e.stopPropagation(),children:(0,P.jsx)('button',{onClick:()=>setSelectedProg(p),className:'p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 cursor-pointer',title:'View Enrolled Employees',children:(0,P.jsx)(pe,{className:'w-4 h-4'})})})
        ]},idx);})})
      ]})})
    ]}),

    // Slide-over Modal for Employee Learner Details
    selectedLearner && (0,P.jsx)('div',{className:'fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-50 flex justify-end animate-in fade-in duration-150',children:(0,P.jsxs)('div',{className:'bg-white w-full max-w-lg h-full shadow-2xl flex flex-col justify-between border-l border-slate-200',children:[
      (0,P.jsxs)('div',{className:'p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50',children:[
        (0,P.jsxs)('div',{className:'flex items-center gap-3',children:[
          (0,P.jsx)('div',{className:'w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-sm',children:selectedLearner.name[0]}),
          (0,P.jsxs)('div',{children:[
            (0,P.jsx)('h3',{className:'font-bold text-slate-900 text-sm',children:selectedLearner.name}),
            (0,P.jsx)('div',{className:'text-xs text-slate-500',children:selectedLearner.email})
          ]})
        ]}),
        (0,P.jsx)('button',{onClick:()=>setSelectedLearner(null),className:'p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60',children:'✕'})
      ]}),
      (0,P.jsxs)('div',{className:'p-6 space-y-5 flex-1 overflow-y-auto text-xs',children:[
        (0,P.jsxs)('div',{className:'p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2',children:[
          (0,P.jsx)('div',{className:'text-[10px] font-bold text-slate-400 uppercase tracking-wider',children:'ASSIGNMENT SUMMARY'}),
          (0,P.jsx)('div',{className:'text-sm font-bold text-slate-900',children:selectedLearner.training}),
          (0,P.jsxs)('div',{className:'text-slate-600',children:['Department: ',selectedLearner.dept]}),
          (0,P.jsxs)('div',{className:'text-slate-600',children:['Start Date: ',fmtSysDate(selectedLearner.assigned),' • Due: ',fmtSysDate(selectedLearner.due)]})
        ]}),
        (0,P.jsxs)('div',{className:'space-y-2',children:[
          (0,P.jsxs)('div',{className:'flex justify-between font-semibold',children:[(0,P.jsx)('span',{children:'Course Completion Progress'}),(0,P.jsxs)('span',{className:'font-bold text-slate-900 font-mono',children:[selectedLearner.completion,'%']})]}),
          (0,P.jsx)('div',{className:'w-full bg-slate-100 h-2.5 rounded-full overflow-hidden',children:(0,P.jsx)('div',{className:`h-full rounded-full ${selectedLearner.completion===100?'bg-emerald-500':'bg-blue-600'}`,style:{width:`${selectedLearner.completion}%`}})})
        ]}),
        (0,P.jsxs)('div',{className:'grid grid-cols-2 gap-3',children:[
          (0,P.jsxs)('div',{className:'p-3 bg-slate-50 rounded-lg border border-slate-200',children:[(0,P.jsx)('div',{className:'text-[10px] font-bold text-slate-400 uppercase',children:'TRAINING STATUS'}),(0,P.jsx)('div',{className:'font-bold text-slate-800 text-xs mt-1',children:selectedLearner.trainingStatus})]}),
          (0,P.jsxs)('div',{className:'p-3 bg-slate-50 rounded-lg border border-slate-200',children:[(0,P.jsx)('div',{className:'text-[10px] font-bold text-slate-400 uppercase',children:'DUE DATE'}),(0,P.jsx)('div',{className:'font-bold text-slate-800 text-xs mt-1',children:fmtSysDate(selectedLearner.due)})]})
        ]})
      ]}),
      (0,P.jsx)('div',{className:'p-4 border-t border-slate-200 bg-slate-50 flex justify-end',children:(0,P.jsx)('button',{onClick:()=>setSelectedLearner(null),className:'px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100',children:'Close'})})
    ]})}),

    // Slide-over Modal for Programme Enrolled Learners
    selectedProg && (0,P.jsx)('div',{className:'fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-50 flex justify-end animate-in fade-in duration-150',children:(0,P.jsxs)('div',{className:'bg-white w-full max-w-xl h-full shadow-2xl flex flex-col justify-between border-l border-slate-200',children:[
      (0,P.jsxs)('div',{className:'p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50',children:[
        (0,P.jsxs)('div',{children:[
          (0,P.jsx)('h3',{className:'font-bold text-slate-900 text-sm',children:selectedProg.name}),
          (0,P.jsxs)('div',{className:'text-xs text-slate-500 mt-0.5',children:[selectedProg.cat,' • ',selectedProg.level,' • ',selectedProg.duration]})
        ]}),
        (0,P.jsx)('button',{onClick:()=>setSelectedProg(null),className:'p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60',children:'✕'})
      ]}),
      (0,P.jsxs)('div',{className:'p-6 space-y-4 flex-1 overflow-y-auto text-xs',children:[
        (0,P.jsxs)('div',{className:'flex items-center justify-between border-b border-slate-100 pb-3',children:[
          (0,P.jsx)('span',{className:'font-bold text-slate-900 text-sm',children:'Enrolled Employees'}),
          (0,P.jsxs)('span',{className:'bg-blue-50 text-blue-700 text-xs font-bold px-2 py-0.5 rounded-full',children:[(selectedProg.learners||[]).length,' Active Employees']})
        ]}),
        (0,P.jsx)('div',{className:'divide-y divide-slate-100',children:(selectedProg.learners||[]).length===0 ? (0,P.jsx)('div',{className:'p-6 text-center text-slate-400 text-xs',children:'No employees currently enrolled in this draft training.'}) : (selectedProg.learners||[]).map((l,i)=>(0,P.jsxs)('div',{className:'py-3 flex items-center justify-between gap-4',children:[
          (0,P.jsxs)('div',{className:'flex items-center gap-3',children:[
            (0,P.jsx)('div',{className:'w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-xs shrink-0',children:l.name[0]}),
            (0,P.jsxs)('div',{children:[
              (0,P.jsx)('div',{className:'font-bold text-slate-900',children:l.name}),
              (0,P.jsx)('div',{className:'text-[11px] text-slate-500',children:l.dept})
            ]})
          ]}),
          (0,P.jsxs)('div',{className:'flex items-center gap-4',children:[
            (0,P.jsxs)('div',{className:'w-28',children:[
              (0,P.jsx)('div',{className:'flex justify-between font-mono font-bold text-[10px] text-slate-700 mb-0.5',children:(0,P.jsxs)('span',{children:[l.progress,'%']})}),
              (0,P.jsx)('div',{className:'w-full bg-slate-100 h-1.5 rounded-full overflow-hidden',children:(0,P.jsx)('div',{className:`h-full rounded-full ${l.progress===100?'bg-emerald-500':'bg-blue-600'}`,style:{width:`${l.progress}%`}})})
            ]}),
            (0,P.jsx)('span',{className:`px-2 py-0.5 rounded-full text-[10px] font-semibold border whitespace-nowrap ${l.status==='Completed'?'bg-emerald-50 text-emerald-700 border-emerald-200':l.status==='In Progress'?'bg-blue-50 text-blue-700 border-blue-200':'bg-slate-100 text-slate-600 border-slate-200'}`,children:l.status})
          ]})
        ]},i))})
      ]}),
      (0,P.jsx)('div',{className:'p-4 border-t border-slate-200 bg-slate-50 flex justify-end',children:(0,P.jsx)('button',{onClick:()=>setSelectedProg(null),className:'px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100',children:'Close'})})
    ]})})
  ]});
}function st(){return null;}function ct({assignments:e,issuedCertificates:dynCerts}){
  let [selectedCertModal, setSelectedCertModal] = (0,l.useState)(null);
  let [categoryFilter, setCategoryFilter] = (0,l.useState)("All Records");
  let [expandedMap, setExpandedMap] = (0,l.useState)({});

  let toggleExpand = (empId) => {
    setExpandedMap(prev => ({...prev, [empId]: !prev[empId]}));
  };

  let initialEmployees = [
    {
      id: "EMP-5039",
      name: "Tanya Kapoor",
      role: "Project",
      avatarBg: "bg-blue-100 text-blue-700",
      programmes: [
        {name: "Cloud Infrastructure & High-Performance Node Services", certNum: "TRN-2026-0031", date: "15-Jan-2026", score: "92%"},
        {name: "API Security & OAuth2 Best Practices", certNum: "TRN-2026-0032", date: "20-Jan-2026", score: "94%"},
        {name: "Enterprise Security & Data Protection Compliance", certNum: "TRN-2026-0030", date: "10-Jan-2026", score: "96%"},
        {name: "CollabCRM Recruitment & Client Portal Workflows", certNum: "TRN-2026-0029", date: "05-Jan-2026", score: "98%"},
        {name: "Incident Response & SLA Management", certNum: "TRN-2026-0028", date: "28-Dec-2025", score: "88%"},
        {name: "Security Awareness & GDPR Compliance 2026", certNum: "TRN-2026-0027", date: "20-Dec-2025", score: "100%"},
        {name: "Full-Stack React & Node System Architecture", certNum: "TRN-2026-0026", date: "15-Dec-2025", score: "95%"},
        {name: "Enterprise CRM Communication & Client Delight", certNum: "TRN-2026-0023", date: "05-Dec-2025", score: "90%"},
        {name: "Strategic Talent Sourcing & Pipeline Operations", certNum: "TRN-2026-0018", date: "20-Nov-2025", score: "92%"},
        {name: "Advanced TypeScript & State Architecture", certNum: "TRN-2026-0016", date: "10-Nov-2025", score: "97%"}
      ]
    },
    {
      id: "EMP-073",
      name: "Ishdeep Anand",
      role: "Infrastructure",
      avatarBg: "bg-purple-50 text-purple-700",
      programmes: [
        {name: "Enterprise Security & Data Protection Compliance", certNum: "TRN-2026-0025", date: "15-Jan-2026", score: "94%"},
        {name: "Executive Leadership & Strategic Governance", certNum: "TRN-2026-0022", date: "10-Dec-2025", score: "98%"}
      ]
    },
    {
      id: "EMP-5040",
      name: "Ashish Kumar",
      role: "Engineering",
      avatarBg: "bg-emerald-100 text-emerald-700",
      programmes: [
        {name: "Cloud Infrastructure & High-Performance Node Services", certNum: "TRN-2026-0024", date: "20-Jan-2026", score: "95%"},
        {name: "Full-Stack React & Node System Architecture", certNum: "TRN-2026-0019", date: "18-Dec-2025", score: "91%"}
      ]
    },
    {
      id: "EMP-5035",
      name: "Vikram Anand",
      role: "Project",
      avatarBg: "bg-amber-100 text-amber-700",
      programmes: [
        {name: "Enterprise Resource Scaling & Budgeting", certNum: "TRN-2026-0021", date: "22-Jan-2026", score: "96%"},
        {name: "Incident Response & SLA Management", certNum: "TRN-2026-0017", date: "02-Dec-2025", score: "90%"}
      ]
    },
    {
      id: "EMP-5036",
      name: "Ananya Sridhar",
      role: "Project",
      avatarBg: "bg-pink-100 text-pink-700",
      programmes: [
        {name: "Executive Leadership & Strategic Governance", certNum: "TRN-2026-0020", date: "18-Jan-2026", score: "99%"},
        {name: "Strategic Talent Sourcing & Pipeline Operations", certNum: "TRN-2026-0015", date: "25-Nov-2025", score: "93%"}
      ]
    },
    {
      id: "EMP-5038",
      name: "Trevor Lindqvist",
      role: "Cyber Security",
      avatarBg: "bg-rose-100 text-rose-700",
      programmes: [
        {name: "Zero Trust Architecture & Threat Mitigation", certNum: "TRN-2026-0014", date: "12-Jan-2026", score: "97%"},
        {name: "Security Awareness & GDPR Compliance 2026", certNum: "TRN-2026-0012", date: "05-Dec-2025", score: "98%"}
      ]
    },
    {
      id: "EMP-5034",
      name: "Maya Krishnan",
      role: "Infrastructure",
      avatarBg: "bg-sky-100 text-sky-700",
      programmes: [
        {name: "Linux Kernel Hardening & Audit Logging", certNum: "TRN-2026-0011", date: "08-Jan-2026", score: "94%"},
        {name: "Enterprise Security & Data Protection Compliance", certNum: "TRN-2026-0009", date: "28-Nov-2025", score: "92%"}
      ]
    },
    {
      id: "EMP-5037",
      name: "Caleb Nguyen",
      role: "Project",
      avatarBg: "bg-indigo-100 text-indigo-700",
      programmes: [
        {name: "Business Requirements Document (BRD) Standards", certNum: "TRN-2026-0008", date: "02-Jan-2026", score: "96%"},
        {name: "API Security & OAuth2 Best Practices", certNum: "TRN-2026-0006", date: "14-Dec-2025", score: "89%"}
      ]
    }
  ];

  let handleViewCert = (emp, prog) => {
    setSelectedCertModal({
      empName: emp.name,
      empRole: emp.role,
      progName: prog.name,
      certNum: prog.certNum,
      date: prog.date,
      score: prog.score
    });
  };

  let mergedEmployees = (0,l.useMemo)(() => {
    let list = initialEmployees.map(emp => ({ ...emp, programmes: [...emp.programmes] }));
    if (Array.isArray(dynCerts)) {
      dynCerts.forEach(dc => {
        if (!dc) return;
        let recName = dc.recipientName || dc.employeeId || "Tanya Kapoor";
        let target = list.find(emp => emp.name.toLowerCase() === recName.toLowerCase() || canonicalEmpSkillKey(emp.id) === canonicalEmpSkillKey(dc.employeeId));
        let item = {
          name: dc.trainingName || dc.name,
          certNum: dc.id,
          date: dc.issueDate || "Today",
          score: dc.score != null ? (dc.score + "%") : "Verified"
        };
        if (target) {
          if (!target.programmes.some(p => p.certNum === dc.id || p.name === item.name)) {
            target.programmes.unshift(item);
          }
        } else {
          list.unshift({
            id: dc.employeeId || "EMP-NEW",
            name: recName,
            role: "Employee",
            avatarBg: "bg-purple-50 text-purple-700",
            programmes: [item]
          });
        }
      });
    }
    return list;
  }, [dynCerts]);

  let filteredEmployees = mergedEmployees.filter(emp => {
    if (categoryFilter === "All Records") return true;
    return emp.programmes.some(p => p.name.toLowerCase().includes(categoryFilter.toLowerCase()));
  });
  let totalCertCount = mergedEmployees.reduce((sum, emp) => sum + emp.programmes.length, 0) + 12;

  return (0,P.jsxs)("div", {className: "p-6 space-y-6 max-w-[1600px] mx-auto w-full", children: [
    
    (0,P.jsxs)("div", {className: "bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden", children: [
      (0,P.jsxs)("div", {className: "p-4 border-b border-slate-200 flex items-center justify-between", children: [
        (0,P.jsxs)("div", {className: "flex items-center gap-3", children: [
          (0,P.jsx)("h2", {className: "font-bold text-slate-900 text-base", children: "Certificates"}),
          (0,P.jsx)("span", {className: "bg-blue-50 text-blue-700 text-xs font-bold px-2 py-0.5 rounded-full", children: totalCertCount + " Certificates"})
        ]}),
        (0,P.jsxs)("div", {className: "flex items-center gap-3", children: [
          (0,P.jsxs)("select", {
            value: categoryFilter,
            onChange: e => setCategoryFilter(e.target.value),
            className: "text-xs border border-slate-200 rounded-lg px-2.5 py-1.5 bg-white text-slate-700 font-medium focus:outline-none focus:ring-1 focus:ring-blue-500",
            children: [
              (0,P.jsx)("option", {value: "All Records", children: "All Records"}),
              (0,P.jsx)("option", {value: "Security", children: "Security Trainings"}),
              (0,P.jsx)("option", {value: "Architecture", children: "Architecture Trainings"}),
              (0,P.jsx)("option", {value: "Leadership", children: "Leadership Trainings"})
            ]
          })
        ]})
      ]}),
      (0,P.jsx)("div", {className: "overflow-x-auto", children: 
        (0,P.jsxs)("table", {className: "w-full text-left border-collapse", children: [
          (0,P.jsx)("thead", {children: 
            (0,P.jsxs)("tr", {className: "border-b border-slate-200 text-[11px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50/50", children: [
              (0,P.jsx)("th", {className: "py-3 px-4 w-20", children: "No."}),
              (0,P.jsx)("th", {className: "py-3 px-4 w-56", children: "Employee Name"}),
              (0,P.jsx)("th", {className: "py-3 px-4", children: "Training Name (Earned Trainings)"}),
              (0,P.jsx)("th", {className: "py-3 px-6 w-28 text-right", children: "Actions"})
            ]})
          }),
          (0,P.jsx)("tbody", {className: "divide-y divide-slate-100 text-sm", children: 
            filteredEmployees.map((emp, idx) => {
              let isExpanded = !!expandedMap[emp.id];
              let firstProg = emp.programmes[0];
              let otherProgs = emp.programmes.slice(1);
              return (0,P.jsxs)(P.Fragment, {key: emp.id, children: [
                // Master Row (Matching Screenshot 3 format with chevron beside No./Name)
                (0,P.jsxs)("tr", {
                  className: "hover:bg-slate-50/80 transition-colors bg-white",
                  children: [
                    (0,P.jsx)("td", {className: "py-3 px-4", children: 
                      (0,P.jsxs)("div", {className: "flex items-center gap-1.5", children: [
                        otherProgs.length > 0 && (0,P.jsx)("button", {
                          type: "button",
                          onClick: () => toggleExpand(emp.id),
                          className: "text-slate-400 hover:text-blue-600 transition-colors p-0.5 rounded cursor-pointer",
                          title: isExpanded ? "Collapse earned trainings" : "Expand earned trainings",
                          children: isExpanded ? (0,P.jsx)(ae, {className: "w-3.5 h-3.5"}) : (0,P.jsx)(re, {className: "w-3.5 h-3.5"})
                        }),
                        (0,P.jsx)("span", {className: "text-slate-500 tabular-nums font-medium text-xs", children: idx + 1})
                      ]})
                    }),
                    (0,P.jsx)("td", {className: "py-3 px-4", children: 
                      (0,P.jsxs)("div", {className: "flex items-center gap-2.5", children: [
                        (0,P.jsx)("div", {className: `w-8 h-8 rounded-full ${emp.avatarBg} font-bold flex items-center justify-center text-xs shrink-0`, children: emp.name[0]}),
                        (0,P.jsxs)("div", {children: [
                          (0,P.jsx)("div", {className: "font-bold text-slate-900 text-xs", children: emp.name}),
                          (0,P.jsx)("div", {className: "text-[11px] text-slate-500", children: emp.role})
                        ]})
                      ]})
                    }),
                    (0,P.jsx)("td", {className: "py-3 px-4", children: 
                      (0,P.jsx)("div", {className: "text-xs font-semibold text-slate-900", children: firstProg.name})
                    }),
                    (0,P.jsx)("td", {className: "py-3 px-6 w-28 text-right", children: 
                      (0,P.jsx)("button", {
                        type: "button",
                        onClick: () => handleViewCert(emp, firstProg),
                        className: "p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors cursor-pointer inline-flex items-center justify-center",
                        title: `View Certificate for ${firstProg.name}`,
                        children: (0,P.jsx)(pe, {className: "w-4 h-4"})
                      })
                    })
                  ]
                }),

                // Child Sub-Rows (Matching Screenshot 3: empty No., empty Candidate Name, view text format only)
                isExpanded && otherProgs.map((prog, pIdx) => (0,P.jsxs)("tr", {
                  key: emp.id + "-" + pIdx,
                  className: "hover:bg-slate-50/70 transition-colors bg-slate-50/30",
                  children: [
                    (0,P.jsx)("td", {className: "py-2.5 px-4"}),
                    (0,P.jsx)("td", {className: "py-2.5 px-4"}),
                    (0,P.jsx)("td", {className: "py-2.5 px-4", children: 
                      (0,P.jsx)("div", {className: "text-xs font-normal text-slate-700 pl-2 border-l-2 border-slate-200", children: prog.name})
                    }),
                    (0,P.jsx)("td", {className: "py-2.5 px-6 w-28 text-right", children: 
                      (0,P.jsx)("button", {
                        type: "button",
                        onClick: () => handleViewCert(emp, prog),
                        className: "p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors cursor-pointer inline-flex items-center justify-center",
                        title: `View Certificate for ${prog.name}`,
                        children: (0,P.jsx)(pe, {className: "w-4 h-4"})
                      })
                    })
                  ]
                }))
              ]});
            })
          })
        ]})
      })
    ]}),

    // Certificate View Modal
    selectedCertModal && (0,P.jsx)(Ze, {
      certificateId: selectedCertModal.certNum,
      programmeName: selectedCertModal.progName,
      employeeName: selectedCertModal.empName,
      employeeCode: "EMP-1042",
      issueDate: selectedCertModal.date,
      signatory: "Khushi Bhatt, Head of HR",
      onClose: () => setSelectedCertModal(null)
    })
  ]});
}
function lt(){return(0,P.jsxs)(`div`,{className:`p-6 space-y-6 max-w-[1600px] mx-auto w-full`,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`h1`,{className:`text-xl font-bold text-slate-900`,children:`Reports`}),(0,P.jsx)(`p`,{className:`text-xs text-slate-500 mt-0.5`,children:`Training intelligence & compliance reports and metrics.`})]}),(0,P.jsxs)(`div`,{className:`bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4`,children:[(0,P.jsxs)(`div`,{className:`flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4`,children:[(0,P.jsx)(`div`,{className:`font-bold text-slate-900 text-sm`,children:`Training Intelligence & Compliance Reports`}),(0,P.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,P.jsxs)(`select`,{className:`bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-800 font-medium`,children:[(0,P.jsx)(`option`,{value:`1. Employee-wise Training Completion`,children:`1. Employee-wise Training Completion`}),(0,P.jsx)(`option`,{value:`2. Departmental Compliance Audit`,children:`2. Departmental Compliance Audit`})]}),(0,P.jsxs)(`button`,{onClick:()=>alert(`Exporting CSV analytics...`),className:`flex items-center gap-1.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 px-3.5 py-1.5 rounded-lg text-xs font-semibold shadow-sm transition-colors`,children:[(0,P.jsx)(de,{className:`w-3.5 h-3.5`}),(0,P.jsx)(`span`,{children:`Export CSV`})]})]})]}),(0,P.jsxs)(`div`,{className:`grid grid-cols-1 sm:grid-cols-4 gap-4 pt-1`,children:[(0,P.jsxs)(`div`,{className:`bg-slate-50 border border-slate-200 rounded-xl p-4`,children:[(0,P.jsx)(`div`,{className:`text-[11px] font-bold text-slate-400 uppercase tracking-wide`,children:`ACTIVE EMPLOYEES`}),(0,P.jsx)(`div`,{className:`text-2xl font-bold text-slate-900 mt-1 tabular-nums`,children:`11`})]}),(0,P.jsxs)(`div`,{className:`bg-slate-50 border border-slate-200 rounded-xl p-4`,children:[(0,P.jsx)(`div`,{className:`text-[11px] font-bold text-slate-400 uppercase tracking-wide`,children:`TOTAL ASSIGNMENTS`}),(0,P.jsx)(`div`,{className:`text-2xl font-bold text-blue-600 mt-1 tabular-nums`,children:`41`})]}),(0,P.jsxs)(`div`,{className:`bg-slate-50 border border-slate-200 rounded-xl p-4`,children:[(0,P.jsx)(`div`,{className:`text-[11px] font-bold text-slate-400 uppercase tracking-wide`,children:`COMPLETED`}),(0,P.jsx)(`div`,{className:`text-2xl font-bold text-emerald-600 mt-1 tabular-nums`,children:`9`})]}),(0,P.jsxs)(`div`,{className:`bg-slate-50 border border-slate-200 rounded-xl p-4`,children:[(0,P.jsx)(`div`,{className:`text-[11px] font-bold text-slate-400 uppercase tracking-wide`,children:`AVG SCORE`}),(0,P.jsx)(`div`,{className:`text-2xl font-bold text-purple-600 mt-1 tabular-nums`,children:`93.2%`})]})]})]}),(0,P.jsx)(`div`,{className:`bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden`,children:(0,P.jsx)(`div`,{className:`overflow-x-auto`,children:(0,P.jsxs)(`table`,{className:`w-full text-left border-collapse`,children:[(0,P.jsx)(`thead`,{children:(0,P.jsxs)(`tr`,{className:`border-b border-slate-200 text-[11px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50/50`,children:[(0,P.jsx)(`th`,{className:`py-3 px-4`,children:`Employee Name`}),(0,P.jsx)(`th`,{className:`py-3 px-4`,children:`Department`}),(0,P.jsx)(`th`,{className:`py-3 px-4`,children:`Total Enrolled`}),(0,P.jsx)(`th`,{className:`py-3 px-4`,children:`Completed`}),(0,P.jsx)(`th`,{className:`py-3 px-4`,children:`In Progress`}),(0,P.jsx)(`th`,{className:`py-3 px-4`,children:`Overdue`}),(0,P.jsx)(`th`,{className:`py-3 px-4`,children:`Average Score`}),(0,P.jsx)(`th`,{className:`py-3 px-4`,children:`Certificates`})]})}),(0,P.jsx)(`tbody`,{className:`divide-y divide-slate-100 text-sm`,children:[{name:`Tanya Kapoor`,dept:`Business Analysis`,total:32,completed:7,inProg:12,overdue:4,score:`92%`,certs:`8 Issued`},{name:`Isha Patel`,dept:`Business Analysis`,total:0,completed:0,inProg:0,overdue:0,score:`92%`,certs:`0 Issued`},{name:`Shivam Sharma`,dept:`Business Analysis`,total:1,completed:1,inProg:0,overdue:0,score:`92%`,certs:`0 Issued`},{name:`Ashish Kumar`,dept:`Web`,total:1,completed:1,inProg:0,overdue:0,score:`92%`,certs:`1 Issued`},{name:`Rihan R.`,dept:`Web`,total:2,completed:0,inProg:1,overdue:0,score:`92%`,certs:`0 Issued`},{name:`Priya Nair`,dept:`Web`,total:1,completed:0,inProg:1,overdue:0,score:`92%`,certs:`0 Issued`},{name:`Suresh Prasad`,dept:`Business Analysis`,total:1,completed:0,inProg:0,overdue:1,score:`92%`,certs:`0 Issued`},{name:`Vikram Malhotra`,dept:`Collab`,total:1,completed:0,inProg:0,overdue:0,score:`92%`,certs:`0 Issued`},{name:`Ananya Roy`,dept:`Web`,total:1,completed:0,inProg:0,overdue:0,score:`92%`,certs:`0 Issued`},{name:`Neha Gupta`,dept:`Business Analysis`,total:1,completed:0,inProg:1,overdue:0,score:`92%`,certs:`0 Issued`},{name:`Karan Johar`,dept:`Collab`,total:0,completed:0,inProg:0,overdue:0,score:`92%`,certs:`0 Issued`}].map((e,t)=>(0,P.jsxs)(`tr`,{className:`hover:bg-slate-50/80 transition-colors`,children:[(0,P.jsx)(`td`,{className:`py-3 px-4 font-bold text-slate-900 text-xs`,children:e.name}),(0,P.jsx)(`td`,{className:`py-3 px-4 text-slate-700 text-xs font-medium`,children:e.dept}),(0,P.jsx)(`td`,{className:`py-3 px-4 text-slate-800 text-xs font-bold tabular-nums`,children:e.total}),(0,P.jsx)(`td`,{className:`py-3 px-4 text-emerald-600 text-xs font-bold tabular-nums`,children:e.completed}),(0,P.jsx)(`td`,{className:`py-3 px-4 text-blue-600 text-xs font-bold tabular-nums`,children:e.inProg}),(0,P.jsx)(`td`,{className:`py-3 px-4 text-rose-600 text-xs font-bold tabular-nums`,children:e.overdue}),(0,P.jsx)(`td`,{className:`py-3 px-4 font-mono font-bold text-slate-900 text-xs`,children:e.score}),(0,P.jsx)(`td`,{className:`py-3 px-4 text-purple-700 font-semibold text-xs`,children:e.certs})]},t))})]})})})]})}function ut({currentTab:e,categories:propCats,skills:propSkills,skillLevels:propLevels,programmes:progList,onToggleCategory:onToggleCat,onSaveCategory:onSaveCat,onSaveSkill,onToggleSkill,onDeleteSkill}){let[t,n]=(0,l.useState)(e===`config-skills`||e===`admin-skills`?`skills`:`categories`),[showSkillDrawer,setShowSkillDrawer]=(0,l.useState)(!1),[editSkillId,setEditSkillId]=(0,l.useState)(null),[skillNameInput,setSkillNameInput]=(0,l.useState)(``),[skillDescInput,setSkillDescInput]=(0,l.useState)(``),[skillActiveInput,setSkillActiveInput]=(0,l.useState)(!0),[skillErr,setSkillErr]=(0,l.useState)(``),[skillFilterQ,setSkillFilterQ]=(0,l.useState)(``),[skillStatusFilter,setSkillStatusFilter]=(0,l.useState)(`All`),[showSkillFilterMenu,setShowSkillFilterMenu]=(0,l.useState)(!1),[skillSort,setSkillSort]=(0,l.useState)({key:null,dir:`asc`}),[skillPage,setSkillPage]=(0,l.useState)(1),[skillPageSize,setSkillPageSize]=(0,l.useState)(10),[r,i]=(0,l.useState)({enableModule:!0,allowCreation:!0,allowEditing:!0,allowArchiving:!1,enablePreview:!0}),[a,o]=(0,l.useState)(null),s=(e,t)=>{i(n=>{let r=!n[e];return o(`${t} is now ${r?`enabled`:`disabled`}`),setTimeout(()=>o(null),3e3),{...n,[e]:r}})},[c,u]=(0,l.useState)(!1),[editCatName,setEditCatName]=(0,l.useState)(null),[catErr,setCatErr]=(0,l.useState)(``),[d,f]=(0,l.useState)(``),[p,m]=(0,l.useState)(``),[h,g]=(0,l.useState)(!0),[localCats,setLocalCats]=(0,l.useState)(DEFAULT_CATEGORIES_SEED);(0,l.useEffect)(()=>{if(e===`config-skills`||e===`admin-skills`)n(`skills`);else if(e===`config`)n(`categories`)},[e]);(0,l.useEffect)(()=>{setSkillPage(1)},[skillFilterQ,skillStatusFilter,skillPageSize]);let _=Array.isArray(propCats)&&propCats.length>0?propCats:localCats;let skillList=Array.isArray(propSkills)&&propSkills.length>0?propSkills:DEFAULT_SKILLS_SEED;let skillLevelList=Array.isArray(propLevels)&&propLevels.length>0?propLevels:DEFAULT_SKILL_LEVELS_SEED;let toggleSkillSort=k=>setSkillSort(prev=>prev.key===k?{key:k,dir:prev.dir===`asc`?`desc`:`asc`}:{key:k,dir:`asc`});let filteredSkills=(()=>{let q=skillFilterQ.trim().toLowerCase();let arr=skillList.filter(sk=>{if(skillStatusFilter===`Active`&&sk.active===!1)return!1;if(skillStatusFilter===`Inactive`&&sk.active!==!1)return!1;if(q){let hay=((sk.name||``)+` `+(sk.createdBy||``)+` `+(sk.lastModifiedBy||``)).toLowerCase();if(!hay.includes(q))return!1}return!0});if(skillSort.key){let mul=skillSort.dir===`asc`?1:-1;arr=[...arr].sort((a,b)=>{let va=skillSort.key===`name`?(a.name||``):skillSort.key===`modified`?(a.lastModifiedBy||``):(a.createdBy||``);let vb=skillSort.key===`name`?(b.name||``):skillSort.key===`modified`?(b.lastModifiedBy||``):(b.createdBy||``);return va.localeCompare(vb)*mul})}return arr})();let skillTotalPages=Math.max(1,Math.ceil(filteredSkills.length/skillPageSize));let safeSkillPage=Math.min(skillPage,skillTotalPages);let pagedSkills=filteredSkills.slice((safeSkillPage-1)*skillPageSize,safeSkillPage*skillPageSize);let sortArrowIcon=(activeCol)=>((0,P.jsx)(`svg`,{viewBox:`0 0 16 16`,fill:`none`,stroke:`currentColor`,strokeWidth:1.6,className:`w-3.5 h-3.5 inline-block ml-1 `+(activeCol?`text-blue-600`:`text-slate-400`),children:(0,P.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M5.5 6L8 3.5L10.5 6M5.5 10L8 12.5L10.5 10`})}));let isCatAssigned=catName=>(progList||[]).some(pr=>doesProgUseCategory(pr,catName));let handleRowToggle=async(cat)=>{setCatErr(``);if(cat.active!==!1&&isCatAssigned(cat.name)){setCatErr(`Cannot mark "${cat.name}" as Inactive because it is currently assigned to one or more trainings.`);return}if(onToggleCat){let res=await onToggleCat(cat.name);if(res&&res.success===!1){setCatErr(res.message||`Unable to update category status.`);return}}else{let today=fmtSysDate(new Date());setLocalCats(prev=>prev.map(x=>normCatKey(x.name)===normCatKey(cat.name)?{...x,active:x.active===!1?!0:!1,modified:`Ishdeep Anand (${today})`}:x))}};return e===`roles`?(0,P.jsx)(`div`,{className:`p-6 space-y-6 max-w-[1600px] mx-auto w-full`,children:(0,P.jsxs)(`div`,{className:`bg-white border border-slate-200 rounded-xl p-6 shadow-sm`,children:[(0,P.jsx)(`h1`,{className:`text-xl font-bold text-slate-900`,children:`Role-Based Access Control (RBAC)`}),(0,P.jsx)(`p`,{className:`text-xs text-slate-500 mt-1`,children:`Manage system roles, permission scopes, and department security profiles.`}),(0,P.jsxs)(`div`,{className:`mt-4 space-y-3`,children:[(0,P.jsxs)(`div`,{className:`p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between`,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`div`,{className:`font-bold text-slate-900 text-sm`,children:`Administrator`}),(0,P.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Full access to all modules, employee records, and system config.`})]}),(0,P.jsx)(`span`,{className:`bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-200`,children:`Full Access`})]}),(0,P.jsxs)(`div`,{className:`p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between`,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`div`,{className:`font-bold text-slate-900 text-sm`,children:`Manager / Reviewer`}),(0,P.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Access to team reports, training review queue, and assignment approvals.`})]}),(0,P.jsx)(`span`,{className:`bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full border border-blue-200`,children:`Reviewer Queue`})]}),(0,P.jsxs)(`div`,{className:`p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between`,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`div`,{className:`font-bold text-slate-900 text-sm`,children:`Standard Employee`}),(0,P.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Access to personal profile, assigned coursework, and earned certificates.`})]}),(0,P.jsx)(`span`,{className:`bg-slate-100 text-slate-600 text-xs font-semibold px-3 py-1 rounded-full border border-slate-200`,children:`Portal Only`})]})]})]})}):(0,P.jsxs)(`div`,{className:`p-6 space-y-6 max-w-[1600px] mx-auto w-full relative`,children:[(0,P.jsxs)(`div`,{style:e===`admin-skills`?{padding:`12px 20px`}:undefined,className:`flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-slate-200 rounded-xl p-5 shadow-sm`,children:[(0,P.jsxs)(`div`,{className:`flex ${e===`admin-skills`?`items-center`:`items-start`} gap-3`,children:[(0,P.jsx)(`div`,{className:`p-2.5 bg-blue-50 text-blue-600 rounded-xl ${e===`admin-skills`?``:`mt-0.5`}`,children:(0,P.jsx)(Ie,{className:`w-5 h-5`})}),(0,P.jsxs)(`div`,{children:[e===`admin-skills`?(0,P.jsx)("h1",{className:"text-lg font-bold text-slate-900 leading-tight",children:"Skills"}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("h1",{className:"text-lg font-bold text-slate-900",children:t==="skills"?"Skills":"Training Categories"}),(0,P.jsx)("p",{className:"text-xs text-slate-500 mt-0.5",children:t==="skills"?"Master skill catalog available for Training Skill Mapping and Employee Profiles.":"Centrally configure system rules, categories, assignment logic, assessment thresholds, and notification workflows."}),(0,P.jsxs)("div",{className:"flex items-center gap-2 mt-3",children:[(0,P.jsx)("button",{type:"button",onClick:()=>n("categories"),className:"px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors "+(t==="categories"?"bg-blue-600 text-white border-blue-600":"bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"),children:"Training Categories"}),(0,P.jsx)("button",{type:"button",onClick:()=>n("skills"),className:"px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors "+(t==="skills"?"bg-blue-600 text-white border-blue-600":"bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"),children:"Skills"})]})]})]})]}),t==="skills"?(0,P.jsxs)("button",{onClick:()=>{setSkillErr("");setEditSkillId(null);setSkillNameInput("");setSkillDescInput("");setSkillActiveInput(!0);setShowSkillDrawer(!0)},className:"flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white px-3.5 py-2 rounded-lg text-xs font-bold shadow-sm transition-colors shrink-0 cursor-pointer",children:[(0,P.jsx)(j,{className:"w-4 h-4"}),(0,P.jsx)("span",{children:"Add Skill"})]}):(0,P.jsxs)("button",{onClick:()=>{setCatErr("");setEditCatName(null);f("");m("");g(!0);u(!0)},className:"flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white px-3.5 py-2 rounded-lg text-xs font-bold shadow-sm transition-colors shrink-0 cursor-pointer",children:[(0,P.jsx)(j,{className:"w-4 h-4"}),(0,P.jsx)("span",{children:"Add Category"})]})]}),t==="skills"&&(0,P.jsxs)("div",{className:"bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden",children:[skillErr&&(0,P.jsxs)("div",{className:"bg-rose-50 border-b border-rose-200 px-4 py-2.5 flex items-center justify-between text-xs font-semibold text-rose-700",children:[(0,P.jsx)("span",{children:skillErr}),(0,P.jsx)("button",{type:"button",onClick:()=>setSkillErr(""),className:"text-rose-500 hover:text-rose-800 ml-3 cursor-pointer",children:"✕"})]}),(0,P.jsxs)("div",{className:"p-4 border-b border-slate-200 flex items-center gap-3",children:[(0,P.jsxs)("div",{className:"relative flex-1",children:[(0,P.jsx)(ke,{className:"w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"}),(0,P.jsx)("input",{type:"text",value:skillFilterQ,onChange:ev=>setSkillFilterQ(ev.target.value),placeholder:"Filter Results...",className:"w-full bg-white border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20"})]}),(0,P.jsxs)("div",{className:"relative shrink-0",children:[(0,P.jsx)("button",{type:"button",onClick:()=>setShowSkillFilterMenu(!showSkillFilterMenu),className:"px-3.5 py-2 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 flex items-center gap-1.5 cursor-pointer",children:(0,P.jsx)("span",{children:skillStatusFilter==="All"?"Filter":"Filter: "+skillStatusFilter})}),showSkillFilterMenu&&(0,P.jsx)("div",{className:"absolute right-0 mt-1.5 w-40 bg-white border border-slate-200 rounded-lg shadow-lg py-1 z-20",children:["All","Active","Inactive"].map(st=>(0,P.jsx)("button",{type:"button",onClick:()=>{setSkillStatusFilter(st);setShowSkillFilterMenu(!1)},className:"w-full text-left px-3 py-1.5 text-xs font-medium cursor-pointer "+(skillStatusFilter===st?"bg-blue-50 text-blue-700 font-semibold":"text-slate-700 hover:bg-slate-50"),children:st==="All"?"All Statuses":st},st))})]})]}),(0,P.jsx)("div",{className:"overflow-x-auto",children:(0,P.jsxs)("table",{className:"w-full text-left border-collapse",children:[(0,P.jsx)("thead",{children:(0,P.jsxs)("tr",{className:"border-b border-slate-200 bg-slate-50/70 text-xs font-bold text-slate-600",children:[(0,P.jsx)("th",{className:"py-3 px-4 w-16",children:"No."}),(0,P.jsxs)("th",{onClick:()=>toggleSkillSort("name"),className:"py-3 px-4 cursor-pointer select-none hover:text-slate-900",children:["Skills",sortArrowIcon(skillSort.key==="name")]}),(0,P.jsxs)("th",{onClick:()=>toggleSkillSort("modified"),className:"py-3 px-4 cursor-pointer select-none hover:text-slate-900",children:["Last Modified by",sortArrowIcon(skillSort.key==="modified")]}),(0,P.jsxs)("th",{onClick:()=>toggleSkillSort("created"),className:"py-3 px-4 cursor-pointer select-none hover:text-slate-900",children:["Created by",sortArrowIcon(skillSort.key==="created")]}),(0,P.jsx)("th",{className:"py-3 px-4 text-right w-24",children:"Actions"})]})}),(0,P.jsx)("tbody",{className:"divide-y divide-slate-100 text-xs",children:pagedSkills.length===0?(0,P.jsx)("tr",{children:(0,P.jsx)("td",{colSpan:5,className:"py-8 px-4 text-center text-slate-400 text-xs",children:"No skills match the current filter."})}):pagedSkills.map((sk,idx)=>(0,P.jsxs)("tr",{className:"hover:bg-slate-50/70 transition-colors",children:[(0,P.jsx)("td",{className:"py-3.5 px-4 font-semibold text-slate-700",children:(safeSkillPage-1)*skillPageSize+idx+1}),(0,P.jsxs)("td",{className:"py-3.5 px-4 font-semibold text-slate-800",children:[sk.name,sk.active===!1&&(0,P.jsx)("span",{className:"ml-2 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-100 text-slate-500 border border-slate-200",children:"Inactive"})]}),(0,P.jsx)("td",{className:"py-3.5 px-4 text-slate-700",children:sk.lastModifiedBy?(0,P.jsxs)("div",{children:[(0,P.jsx)("div",{className:"text-slate-700 font-medium",children:sk.lastModifiedBy}),sk.lastModifiedAt&&(0,P.jsx)("div",{className:"text-slate-500 text-[11px] mt-0.5",children:sk.lastModifiedAt})]}):"-"}),(0,P.jsxs)("td",{className:"py-3.5 px-4",children:[(0,P.jsx)("div",{className:"text-slate-700 font-medium",children:sk.createdBy||"Kushal Khandwala"}),(0,P.jsx)("div",{className:"text-slate-500 text-[11px] mt-0.5",children:sk.createdAt||"10-Feb-2026, 02:50 PM"})]}),(0,P.jsx)("td",{className:"py-3.5 px-4 text-right",children:(0,P.jsxs)("div",{className:"inline-flex items-center justify-end gap-3",children:[(0,P.jsx)("button",{type:"button",title:"Edit Skill",onClick:()=>{setSkillErr("");setEditSkillId(sk.id);setSkillNameInput(sk.name);setSkillDescInput(sk.description||"");setSkillActiveInput(sk.active!==!1);setShowSkillDrawer(!0)},className:"text-slate-500 hover:text-blue-600 transition-colors cursor-pointer",children:(0,P.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,className:"w-4 h-4",children:(0,P.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.862 3.487a2.121 2.121 0 113 3L7.5 18.85l-4 1 1-4L16.862 3.487z"})})}),(0,P.jsx)("button",{type:"button",title:"Delete Skill",onClick:async()=>{setSkillErr("");if(onDeleteSkill){let r=await onDeleteSkill(sk.id);if(r&&r.success===!1)setSkillErr(r.message||"Unable to delete skill.")}},className:"text-slate-500 hover:text-rose-600 transition-colors cursor-pointer",children:(0,P.jsx)(ze,{className:"w-4 h-4"})})]})})]},sk.id||idx))})]})}),(0,P.jsxs)("div",{className:"px-4 py-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 bg-white",children:[(0,P.jsxs)("div",{className:"flex items-center gap-2 text-xs text-slate-600",children:[(0,P.jsx)("span",{className:"font-medium",children:"Records Per Page"}),(0,P.jsx)("select",{value:skillPageSize,onChange:ev=>setSkillPageSize(Number(ev.target.value)||10),className:"bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20",children:[10,25,50].map(sz=>(0,P.jsx)("option",{value:sz,children:sz},sz))})]}),(0,P.jsxs)("div",{className:"inline-flex items-center gap-1.5 text-xs",children:[(0,P.jsx)("button",{type:"button",disabled:safeSkillPage<=1,onClick:()=>setSkillPage(Math.max(1,safeSkillPage-1)),className:"px-3 py-1.5 rounded-lg border border-slate-200 font-semibold transition-colors "+(safeSkillPage<=1?"text-slate-300 bg-white cursor-not-allowed":"text-slate-600 bg-white hover:bg-slate-50 cursor-pointer"),children:"← Previous"}),Array.from({length:skillTotalPages},(_,i)=>i+1).map(pg=>(0,P.jsx)("button",{type:"button",onClick:()=>setSkillPage(pg),className:"w-8 h-8 rounded-lg border font-bold text-xs transition-colors cursor-pointer "+(pg===safeSkillPage?"bg-blue-600 text-white border-blue-600":"bg-white text-slate-700 border-slate-200 hover:bg-slate-50"),children:pg},pg)),(0,P.jsx)("button",{type:"button",disabled:safeSkillPage>=skillTotalPages,onClick:()=>setSkillPage(Math.min(skillTotalPages,safeSkillPage+1)),className:"px-3 py-1.5 rounded-lg border border-slate-200 font-semibold transition-colors "+(safeSkillPage>=skillTotalPages?"text-slate-300 bg-white cursor-not-allowed":"text-slate-600 bg-white hover:bg-slate-50 cursor-pointer"),children:"Next →"})]})]})]}),showSkillDrawer&&(()=>{let trLive=skillNameInput.trim().replace(/\s+/g," "),dupLive=trLive?skillList.find(sk=>normSkillKey(sk.name)===normSkillKey(trLive)&&(!editSkillId||sk.id!==editSkillId)):null;return(0,P.jsx)("div",{onClick:()=>setShowSkillDrawer(!1),className:"fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 flex items-center justify-center p-4 animate-in fade-in duration-150",children:(0,P.jsxs)("div",{onClick:ev=>ev.stopPropagation(),className:"bg-white w-full max-w-md rounded-xl shadow-2xl border border-slate-200 overflow-hidden",children:[(0,P.jsxs)("div",{className:"px-6 py-4 border-b border-slate-100 flex items-center justify-between",children:[(0,P.jsx)("h2",{className:"font-bold text-slate-900 text-base",children:editSkillId?"Edit Skill":"Add Skill"}),(0,P.jsx)("button",{type:"button",onClick:()=>setShowSkillDrawer(!1),className:"p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-50 cursor-pointer",children:(0,P.jsx)(N,{className:"w-5 h-5"})})]}),(0,P.jsxs)("form",{onSubmit:async ev=>{ev.preventDefault();setSkillErr("");let tr=skillNameInput.trim().replace(/\s+/g," ");if(!tr){setSkillErr("Skill name is required.");return;}let dup=skillList.find(sk=>normSkillKey(sk.name)===normSkillKey(tr)&&(!editSkillId||sk.id!==editSkillId));if(dup){setSkillErr('Skill "'+dup.name+'" already exists in Administration > Master Data > Skills. Duplicate skills (including case-insensitive matches) are not allowed.');return;}if(onSaveSkill){let res=await onSaveSkill({action:editSkillId?"edit":"add",skillId:editSkillId,skill:{id:editSkillId,name:tr,description:skillDescInput.trim(),active:skillActiveInput}});if(res&&res.success===!1){setSkillErr(res.message||"Unable to save skill.");return;}}setShowSkillDrawer(!1);setEditSkillId(null);setSkillNameInput("");setSkillDescInput("")},className:"p-6 space-y-5",children:[skillErr&&(0,P.jsx)("div",{className:"bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold px-3 py-2 rounded-lg",children:skillErr}),(0,P.jsxs)("div",{children:[(0,P.jsxs)("label",{className:"inline-flex items-center gap-1 text-xs font-medium text-slate-500 mb-1.5",children:[(0,P.jsx)("span",{children:"Skill"}),(0,P.jsx)("span",{className:"text-rose-500",children:"*"})]}),(0,P.jsx)("input",{autoFocus:!0,type:"text",value:skillNameInput,onChange:ev=>{setSkillErr("");setSkillNameInput(ev.target.value)},className:"w-full bg-white border rounded-lg px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 "+(dupLive?"border-rose-400 focus:ring-rose-500/20":"border-blue-400 focus:border-blue-500 focus:ring-blue-500/20"),required:!0}),dupLive&&(0,P.jsx)("div",{className:"text-[11px] font-semibold text-rose-600 mt-1.5",children:'Skill "'+dupLive.name+'" already exists (case-insensitive duplicates are not allowed).'})]}),(0,P.jsxs)("div",{className:"grid grid-cols-2 gap-3 pt-1",children:[(0,P.jsx)("button",{type:"button",onClick:()=>setShowSkillDrawer(!1),className:"w-full px-4 py-2.5 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg cursor-pointer transition-colors",children:"Cancel"}),(0,P.jsx)("button",{type:"submit",disabled:Boolean(dupLive),className:"w-full px-4 py-2.5 text-sm font-semibold text-white rounded-lg shadow-xs transition-colors "+(dupLive?"bg-blue-300 cursor-not-allowed":"bg-blue-600 hover:bg-blue-700 cursor-pointer"),children:editSkillId?"Save":"Add"})]})]})]})})})(),t==="categories"&&(0,P.jsxs)(`div`,{className:`bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden`,children:[catErr&&(0,P.jsxs)(`div`,{className:`bg-rose-50 border-b border-rose-200 px-4 py-2.5 flex items-center justify-between text-xs font-semibold text-rose-700`,children:[(0,P.jsx)(`span`,{children:catErr}),(0,P.jsx)(`button`,{type:`button`,onClick:()=>setCatErr(``),className:`text-rose-500 hover:text-rose-800 ml-3`,children:`✕`})]}),(0,P.jsx)(`div`,{className:`overflow-x-auto`,children:(0,P.jsxs)(`table`,{className:`w-full text-left border-collapse`,children:[(0,P.jsx)(`thead`,{children:(0,P.jsxs)(`tr`,{className:`border-b border-slate-200 text-[11px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50/50`,children:[(0,P.jsx)(`th`,{className:`py-3 px-4`,children:`Category Name`}),(0,P.jsx)(`th`,{className:`py-3 px-4`,children:`Description`}),(0,P.jsx)(`th`,{className:`py-3 px-4`,children:`Status`}),(0,P.jsx)(`th`,{className:`py-3 px-4`,children:`Created By`}),(0,P.jsx)(`th`,{className:`py-3 px-4 text-right`,children:`Actions`})]})}),(0,P.jsx)(`tbody`,{className:`divide-y divide-slate-100 text-sm`,children:_.map((e,t)=>(0,P.jsxs)(`tr`,{className:`hover:bg-slate-50/80 transition-colors`,children:[(0,P.jsx)(`td`,{className:`py-3 px-4 font-bold text-slate-900 text-xs`,children:e.name}),(0,P.jsx)(`td`,{className:`py-3 px-4 text-slate-600 text-xs max-w-md`,children:e.desc}),(0,P.jsx)(`td`,{className:`py-3 px-4`,children:(0,P.jsx)(`span`,{className:`px-2.5 py-0.5 rounded-full text-[11px] font-medium ${e.active!==false?`bg-emerald-50 text-emerald-700 border border-emerald-200`:`bg-slate-100 text-slate-500 border border-slate-200`}`,children:e.active!==false?`Active`:`Inactive`})}),(0,P.jsx)(`td`,{className:`py-3 px-4 text-xs font-bold text-slate-900`,children:e.creator}),(0,P.jsx)(`td`,{className:`py-3 px-4 text-right`,children:(0,P.jsxs)(`div`,{className:`flex items-center justify-end gap-2`,children:[(0,P.jsx)(`button`,{type:`button`,onClick:()=>{setCatErr(``);setEditCatName(e.name);f(e.name);m(e.desc);g(e.active!==false);u(!0);},className:`p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors`,title:`Edit Category`,children:(0,P.jsxs)(`svg`,{viewBox:`0 0 24 24`,width:14,height:14,fill:`none`,stroke:`currentColor`,strokeWidth:2,children:[(0,P.jsx)(`path`,{d:`M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7`}),(0,P.jsx)(`path`,{d:`M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z`})]})})]})})]},t))})]})})]}),c&&(0,P.jsx)(`div`,{className:`fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-50 flex justify-end animate-in fade-in duration-150`,children:(0,P.jsxs)(`div`,{className:`bg-white w-full max-w-md h-full shadow-2xl flex flex-col justify-between border-l border-slate-200 animate-in slide-in-from-right duration-200`,children:[(0,P.jsxs)(`div`,{className:`p-5 border-b border-slate-200 flex items-center justify-between bg-white`,children:[(0,P.jsx)(`div`,{className:`flex items-center gap-2`,children:(0,P.jsx)(`h2`,{className:`font-bold text-slate-900 text-base`,children:editCatName?`Edit Training Category`:`Add Training Category`})}),(0,P.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,P.jsxs)(`button`,{type:`button`,onClick:()=>{f(`Data Science & Advanced Analytics`),m(`Predictive modeling, data warehousing, BI dashboards, and statistical machine learning pipelines.`)},className:`flex items-center gap-1 bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 px-2.5 py-1 rounded text-xs font-bold transition-colors`,title:`Auto-fill sample category details`,children:[(0,P.jsx)(Ke,{className:`w-3.5 h-3.5 text-amber-600`}),(0,P.jsx)(`span`,{children:`Auto-Fill`})]}),(0,P.jsx)(`button`,{onClick:()=>u(!1),className:`p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors`,children:(0,P.jsx)(N,{className:`w-5 h-5`})})]})]}),(0,P.jsxs)(`form`,{onSubmit:async e=>{e.preventDefault();setCatErr(``);var tr=d.trim();if(!tr){setCatErr(`Please enter a category name.`);return;}var origKey=editCatName?normCatKey(editCatName):``;var dup=_.some(function(c){return normCatKey(c.name)===normCatKey(tr)&&normCatKey(c.name)!==origKey;});if(dup){setCatErr(`A category with this name already exists. Repeating categories are not allowed.`);return;}if(editCatName&&!h&&isCatAssigned(editCatName)){setCatErr(`Cannot mark "${editCatName}" as Inactive because it is currently assigned to one or more trainings.`);u(!1);return;}var today=fmtSysDate(new Date());if(onSaveCat){let res=await onSaveCat({action:editCatName?`edit`:`add`,originalName:editCatName,category:{name:tr,desc:p||`New training category description.`,active:h}});if(res&&res.success===!1){setCatErr(res.message||`Unable to save category.`);return;}}else if(editCatName){setLocalCats(prev=>prev.map(x=>normCatKey(x.name)===origKey?{...x,name:tr,desc:p||x.desc,active:h,modified:`Ishdeep Anand (${today})`}:x));}else{setLocalCats(prev=>[{name:tr,desc:p||`New training category description.`,creator:`Ishdeep Anand`,date:today,modified:`Ishdeep Anand (${today})`,active:h},...prev]);}u(!1);setEditCatName(null);f(``);m(``);},className:`p-6 space-y-5 flex-1 overflow-y-auto text-xs`,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsxs)(`label`,{className:`inline-flex items-center gap-1.5 font-bold text-slate-700 mb-1.5`,children:[(0,P.jsx)(`span`,{children:`Category Name`}),(0,P.jsx)(`span`,{className:`text-rose-500`,children:`*`}),(0,P.jsx)(InfoTip,{text:`Unique name of the training category`})]}),(0,P.jsx)(`input`,{type:`text`,value:d,onChange:e=>f(e.target.value),placeholder:`Enter category name (e.g. Data Science)...`,className:`w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20`,required:!0})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsxs)(`label`,{className:`inline-flex items-center gap-1.5 font-bold text-slate-700 mb-1.5`,children:[(0,P.jsx)(`span`,{children:`Description`}),(0,P.jsx)(InfoTip,{text:`Overview of subjects covered in this category`})]}),(0,P.jsx)(`textarea`,{rows:4,value:p,onChange:e=>m(e.target.value),placeholder:`Enter category description...`,className:`w-full bg-white border border-slate-300 rounded-lg p-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none`})]}),(0,P.jsxs)(`div`,{className:`flex items-center justify-between pt-2`,children:[(0,P.jsxs)(`span`,{className:`inline-flex items-center gap-1.5 font-bold text-slate-700`,children:[(0,P.jsx)(`span`,{children:`Status`}),(0,P.jsx)(InfoTip,{text:`Active categories appear in training forms; inactive categories are hidden.`})]}),(0,P.jsx)(`button`,{type:`button`,onClick:()=>g(!h),className:`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${h?`bg-blue-600`:`bg-slate-300`}`,children:(0,P.jsx)(`span`,{className:`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${h?`translate-x-5`:`translate-x-0`}`})})]}),(0,P.jsxs)(`div`,{className:`pt-6 flex items-center gap-3 border-t border-slate-200`,children:[(0,P.jsx)(`button`,{type:`button`,onClick:()=>u(!1),className:`px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors shadow-xs`,children:`Cancel`}),(0,P.jsx)(`button`,{type:`submit`,className:`px-5 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs transition-colors`,children:`Submit`})]})]})]})}),a&&(0,P.jsxs)(`div`,{className:`fixed bottom-6 right-6 z-50 bg-slate-900 text-white text-xs px-4 py-2.5 rounded-lg shadow-xl flex items-center gap-2 border border-slate-700 animate-in fade-in slide-in-from-bottom-2 duration-150`,children:[(0,P.jsx)(se,{className:`w-4 h-4 text-emerald-400`}),(0,P.jsx)(`span`,{children:a || `Khushi Bhatt, Head of HR`})]})]})}function dt({onSelectRole:e}){let[t,n]=(0,l.useState)(null),[r,i]=(0,l.useState)(!1),[a,o]=(0,l.useState)(``),[s,c]=(0,l.useState)(``),[u,d]=(0,l.useState)(``),[f,p]=(0,l.useState)(!0),[m,h]=(0,l.useState)(``),g=[{no:1,role:`Sr. Business Analyst`,status:`Active`,employees:8,remarks:`-`,modified:`Isha Patel (05-Mar-2026)`,created:`Isha Patel (11-Dec-2025)`},{no:2,role:`Senior Recruiter`,status:`Active`,employees:5,remarks:`-`,modified:`Isha Patel (02-Sep-2026)`,created:`Isha Patel (10-Dec-2025)`},{no:3,role:`CEO`,status:`Active`,employees:3,remarks:`Head of the company`,modified:`Isha Patel (30-Aug-2026)`,created:`Isha Patel (21-Aug-2025)`},{no:4,role:`Project Manager`,status:`Active`,employees:25,remarks:`-`,modified:`Prashant Kumar (07-Apr-2026)`,created:`Isha Patel (12-Jun-2025)`},{no:5,role:`BDE`,status:`Active`,employees:1,remarks:`Responsible for generating leads, qualifying prospects...`,modified:`Isha Patel (03-Feb-2026)`,created:`System (12-Jun-2025)`},{no:6,role:`Admin/HR`,status:`Active`,employees:50,remarks:`Manages system configurations, user roles...`,modified:`Isha Patel (14-Aug-2026)`,created:`System (12-Jun-2025)`},{no:7,role:`Employee`,status:`Active`,employees:51,remarks:`Accesses and Inputs data, uses system features...`,modified:`Isha Patel (12-Feb-2026)`,created:`System (12-Jun-2025)`},{no:8,role:`Team leader`,status:`Active`,employees:20,remarks:`Manages team activities, monitors progress...`,modified:`Isha Patel (25-Mar-2026)`,created:`System (12-Jun-2025)`},{no:9,role:`Management`,status:`Active`,employees:7,remarks:`Oversees strategic direction, high-level decisions...`,modified:`-`,created:`System (12-Jun-2025)`},{no:10,role:`Recruiter`,status:`Active`,employees:1,remarks:`Manages job postings, candidate updates...`,modified:`Nikita Mehta (07-Oct-2025)`,created:`System (12-Jun-2025)`},{no:11,role:`BDM`,status:`Active`,employees:0,remarks:`Oversees sales cycle from lead acquisition...`,modified:`Isha Patel (25-Sep-2025)`,created:`System (12-Jun-2025)`}];return t?(0,P.jsxs)(`div`,{className:`p-6 space-y-6 max-w-[1600px] mx-auto w-full`,children:[(0,P.jsxs)(`div`,{className:`flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-slate-200 rounded-xl p-4 shadow-sm`,children:[(0,P.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,P.jsxs)(`button`,{onClick:()=>n(null),className:`flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 px-3 py-1.5 rounded-lg shadow-sm`,children:[(0,P.jsx)(S,{className:`w-3.5 h-3.5`}),(0,P.jsx)(`span`,{children:`Back to Roles`})]}),(0,P.jsxs)(`span`,{className:`text-sm font-medium text-slate-500`,children:[`Roles › Permissions › `,(0,P.jsx)(`span`,{className:`text-slate-900 font-bold`,children:t})]})]}),(0,P.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,P.jsxs)(`div`,{className:`relative`,children:[(0,P.jsx)(ke,{className:`w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2`}),(0,P.jsx)(`input`,{type:`text`,value:m,onChange:e=>h(e.target.value),placeholder:`Search by parent module...`,className:`bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-4 py-1.5 text-xs text-slate-800 placeholder-slate-400 w-64`})]}),(0,P.jsxs)(`button`,{onClick:()=>alert(`Permissions saved for ${t}`),className:`flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-lg text-xs font-semibold shadow-sm`,children:[(0,P.jsx)(Oe,{className:`w-3.5 h-3.5`}),(0,P.jsx)(`span`,{children:`Save`})]})]})]}),(0,P.jsxs)(`div`,{className:`bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden p-6 space-y-6`,children:[(0,P.jsx)(`div`,{className:`flex items-center gap-4 border-b border-slate-100 pb-4`,children:(0,P.jsxs)(`div`,{children:[(0,P.jsxs)(`h2`,{className:`text-lg font-bold text-slate-900`,children:[t,` • Permission Matrix`]}),(0,P.jsx)(`span`,{className:`bg-emerald-50 text-emerald-700 text-[11px] px-2 py-0.5 rounded font-medium border border-emerald-200`,children:`Active Role`})]})}),(0,P.jsx)(`div`,{className:`overflow-x-auto`,children:(0,P.jsxs)(`table`,{className:`w-full text-left border-collapse text-xs`,children:[(0,P.jsx)(`thead`,{children:(0,P.jsxs)(`tr`,{className:`border-b border-slate-200 text-slate-400 font-bold bg-slate-50 text-[11px] uppercase tracking-wider`,children:[(0,P.jsx)(`th`,{className:`py-3 px-4 w-96`,children:`Module`}),(0,P.jsx)(`th`,{className:`py-3 px-4 text-center`,children:`Status`}),(0,P.jsx)(`th`,{className:`py-3 px-4 text-center`,children:`View Default`}),(0,P.jsx)(`th`,{className:`py-3 px-4 text-center`,children:`Global`}),(0,P.jsx)(`th`,{className:`py-3 px-4 text-center`,children:`Add`}),(0,P.jsx)(`th`,{className:`py-3 px-4 text-center`,children:`Edit`}),(0,P.jsx)(`th`,{className:`py-3 px-4 text-center`,children:`Delete`})]})}),(0,P.jsx)(`tbody`,{className:`divide-y divide-slate-100`,children:[{name:`Client Interview Result Report`,isParent:!1,active:!1,viewDef:!1,add:!1,edit:!1,del:!1},{name:`Revenue Summary Report`,isParent:!1,active:!1,viewDef:!1,add:!1,edit:!1,del:!1},{name:`Projects`,isParent:!0,active:!1,viewDef:!1,add:!1,edit:!1,del:!1},{name:`↳ Fixed Cost Report`,isParent:!1,active:!1,viewDef:!1,add:!1,edit:!1,del:!1},{name:`↳ Minibase Report`,isParent:!1,active:!1,viewDef:!1,add:!1,edit:!1,del:!1},{name:`↳ Hourly Report`,isParent:!1,active:!1,viewDef:!1,add:!1,edit:!1,del:!1},{name:`↳ Timespent Report`,isParent:!1,active:!1,viewDef:!1,add:!1,edit:!1,del:!1},{name:`↳ Resource Allocation Report`,isParent:!1,active:!1,viewDef:!1,add:!1,edit:!1,del:!1},{name:`Recruitment`,isParent:!0,active:!1,viewDef:!1,add:!1,edit:!1,del:!1},{name:`↳ Open Position Summary`,isParent:!1,active:!1,viewDef:!1,add:!1,edit:!1,del:!1},{name:`↳ Recruiter Efficiency Report`,isParent:!1,active:!1,viewDef:!1,add:!1,edit:!1,del:!1},{name:`Payroll`,isParent:!0,active:!1,viewDef:!1,add:!1,edit:!1,del:!1},{name:`↳ Salary and Taxation`,isParent:!1,active:!1,viewDef:!1,add:!1,edit:!1,del:!1},{name:`↳ Run Payroll`,isParent:!1,active:!1,viewDef:!1,add:!1,edit:!1,del:!1},{name:`↳ Expense & Reimbursement`,isParent:!1,active:!1,viewDef:!1,add:!1,edit:!1,del:!1},{name:`↳ Loans & Advances`,isParent:!1,active:!1,viewDef:!1,add:!1,edit:!1,del:!1},{name:`↳ Configuration`,isParent:!1,active:!1,viewDef:!1,add:!1,edit:!1,del:!1},{name:`Training Module`,isParent:!0,active:!0,viewDef:!0,add:!0,edit:!0,del:!0,highlight:!0},{name:`↳ Training Library`,isParent:!1,active:!0,viewDef:!1,add:!0,edit:!0,del:!0,highlight:!0},{name:`↳ Training Assignments`,isParent:!1,active:!0,viewDef:!1,add:!0,edit:!0,del:!0,highlight:!0},{name:`↳ Employee Progress Tracking`,isParent:!1,active:!0,viewDef:!1,add:!1,edit:!0,del:!0,highlight:!0},{name:`↳ Training Reviews & Evaluations`,isParent:!1,active:!0,viewDef:!1,add:!0,edit:!0,del:!1,highlight:!0},{name:`↳ Certificate Generation & Issuance`,isParent:!1,active:!0,viewDef:!1,add:!0,edit:!0,del:!0,highlight:!0},{name:`Training Analytics & Reports`,isParent:!1,active:!0,viewDef:!1,add:!1,edit:!1,del:!1,highlight:!0}].map((e,t)=>(0,P.jsxs)(`tr`,{className:e.highlight?`bg-blue-50/40 font-semibold`:``,children:[(0,P.jsx)(`td`,{className:`py-3 px-4 ${e.isParent?`font-bold text-slate-900`:`text-slate-700`}`,children:e.name}),(0,P.jsx)(`td`,{className:`py-3 px-4 text-center`,children:(0,P.jsx)(`input`,{type:`checkbox`,defaultChecked:e.active,className:`w-4 h-4 rounded-full ${e.highlight?`text-blue-600`:`text-slate-600`}`})}),(0,P.jsx)(`td`,{className:`py-3 px-4 text-center`,children:(0,P.jsx)(`input`,{type:`radio`,name:`view-def-${t}`,defaultChecked:e.viewDef,className:`w-4 h-4 text-blue-600`})}),(0,P.jsx)(`td`,{className:`py-3 px-4 text-center text-slate-400`,children:`-`}),(0,P.jsx)(`td`,{className:`py-3 px-4 text-center`,children:(0,P.jsx)(`input`,{type:`checkbox`,defaultChecked:e.add,className:`w-4 h-4 text-blue-600 rounded`})}),(0,P.jsx)(`td`,{className:`py-3 px-4 text-center`,children:(0,P.jsx)(`input`,{type:`checkbox`,defaultChecked:e.edit,className:`w-4 h-4 text-blue-600 rounded`})}),(0,P.jsx)(`td`,{className:`py-3 px-4 text-center`,children:(0,P.jsx)(`input`,{type:`checkbox`,defaultChecked:e.del,className:`w-4 h-4 text-blue-600 rounded`})})]},t))})]})})]})]}):(0,P.jsxs)(`div`,{className:`p-6 space-y-6 max-w-[1600px] mx-auto w-full relative`,children:[(0,P.jsxs)(`div`,{className:`bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden`,children:[(0,P.jsxs)(`div`,{className:`p-4 border-b border-slate-200 flex flex-wrap items-center justify-between gap-4`,children:[(0,P.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,P.jsx)(`h1`,{className:`font-bold text-slate-900 text-base`,children:`Roles`}),(0,P.jsx)(`span`,{className:`bg-blue-50 text-blue-700 text-xs font-bold px-2 py-0.5 rounded-full`,children:`11 Roles`})]}),(0,P.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,P.jsx)(`input`,{type:`text`,placeholder:`Filter Results...`,className:`bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 w-64`}),(0,P.jsxs)(`button`,{onClick:()=>i(!0),className:`flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-lg text-xs font-semibold shadow-sm transition-colors`,children:[(0,P.jsx)(j,{className:`w-4 h-4`}),(0,P.jsx)(`span`,{children:`+ Add Role`})]})]})]}),(0,P.jsx)(`div`,{className:`overflow-x-auto`,children:(0,P.jsxs)(`table`,{className:`w-full text-left border-collapse`,children:[(0,P.jsx)(`thead`,{children:(0,P.jsxs)(`tr`,{className:`border-b border-slate-200 text-[11px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50/50`,children:[(0,P.jsx)(`th`,{className:`py-3 px-4 w-16`,children:`No.`}),(0,P.jsx)(`th`,{className:`py-3 px-4`,children:`Role`}),(0,P.jsx)(`th`,{className:`py-3 px-4`,children:`Status`}),(0,P.jsx)(`th`,{className:`py-3 px-4`,children:`Employees`}),(0,P.jsx)(`th`,{className:`py-3 px-4`,children:`Remarks`}),(0,P.jsx)(`th`,{className:`py-3 px-4`,children:`Created By & Date`}),(0,P.jsx)(`th`,{className:`py-3 px-4`,children:`Modified By`}),(0,P.jsx)(`th`,{className:`py-3 px-4 text-right`,children:`Actions`})]})}),(0,P.jsx)(`tbody`,{className:`divide-y divide-slate-100 text-sm`,children:g.map(e=>(0,P.jsxs)(`tr`,{className:`hover:bg-slate-50/80 transition-colors cursor-pointer`,onClick:()=>n(e.role),children:[(0,P.jsx)(`td`,{className:`py-3 px-4 text-slate-500 tabular-nums`,children:e.no}),(0,P.jsx)(`td`,{className:`py-3 px-4 font-bold text-slate-900 text-xs hover:text-blue-600`,children:e.role}),(0,P.jsx)(`td`,{className:`py-3 px-4`,children:(0,P.jsx)(`span`,{className:`bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-0.5 rounded-full text-[11px] font-medium`,children:e.status})}),(0,P.jsx)(`td`,{className:`py-3 px-4 text-slate-800 text-xs font-bold tabular-nums`,children:e.employees}),(0,P.jsx)(`td`,{className:`py-3 px-4 text-slate-600 text-xs truncate max-w-xs`,children:e.remarks}),(0,P.jsxs)(`td`,{className:`py-3 px-4 text-xs`,children:[(0,P.jsx)(`div`,{className:`font-bold text-slate-900`,children:e.created.split(`(`)[0].trim()}),(0,P.jsx)(`div`,{className:`text-slate-500 tabular-nums`,children:e.created.match(/\((.*?)\)/)?.[1]||``})]}),(0,P.jsxs)(`td`,{className:`py-3 px-4 text-xs`,children:[(0,P.jsx)(`div`,{className:`font-bold text-slate-900`,children:e.modified===`-`?`-`:e.modified.split(`(`)[0].trim()}),(0,P.jsx)(`div`,{className:`text-slate-500 tabular-nums`,children:e.modified===`-`?``:e.modified.match(/\((.*?)\)/)?.[1]||``})]}),(0,P.jsx)(`td`,{className:`py-3 px-4 text-right`,onClick:e=>e.stopPropagation(),children:(0,P.jsxs)(`div`,{className:`flex items-center justify-end gap-1.5`,children:[(0,P.jsx)(`button`,{onClick:()=>n(e.role),className:`p-1 rounded text-slate-400 hover:text-blue-600 hover:bg-blue-50`,title:`View`,children:(0,P.jsx)(pe,{className:`w-4 h-4`})}),(0,P.jsx)(`button`,{onClick:()=>n(e.role),className:`p-1 rounded text-slate-400 hover:text-blue-600 hover:bg-blue-50`,title:`Edit`,children:(0,P.jsx)(Fe,{className:`w-4 h-4`})}),(0,P.jsx)(`button`,{onClick:()=>alert(`Delete role ${e.role}`),className:`p-1 rounded text-slate-400 hover:text-rose-600 hover:bg-rose-50`,title:`Delete`,children:(0,P.jsx)(ze,{className:`w-4 h-4`})})]})})]},e.no))})]})})]}),r&&(0,P.jsx)(`div`,{className:`fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-50 flex justify-end animate-in fade-in duration-150`,children:(0,P.jsxs)(`div`,{className:`bg-white w-full max-w-md h-full shadow-2xl flex flex-col justify-between border-l border-slate-200 animate-in slide-in-from-right duration-200`,children:[(0,P.jsxs)(`div`,{className:`p-5 border-b border-slate-200 flex items-center justify-between bg-white`,children:[(0,P.jsx)(`h2`,{className:`font-bold text-slate-900 text-base`,children:`Add Role`}),(0,P.jsx)(`button`,{onClick:()=>i(!1),className:`p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors`,children:(0,P.jsx)(N,{className:`w-5 h-5`})})]}),(0,P.jsxs)(`form`,{onSubmit:e=>{e.preventDefault(),a.trim()?(alert(`New role "${a}" created successfully!`),i(!1),o(``),c(``),d(``)):alert(`Please enter a role title.`)},className:`p-6 space-y-5 flex-1 overflow-y-auto text-xs`,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsxs)(`label`,{className:`inline-flex items-center gap-1.5 font-bold text-slate-700 mb-1.5`,children:[(0,P.jsx)(`span`,{children:`Title`}),(0,P.jsx)(`span`,{className:`text-rose-500`,children:`*`}),(0,P.jsx)(InfoTip,{text:`Unique title name for the enterprise role`})]}),(0,P.jsx)(`input`,{type:`text`,value:a,onChange:e=>o(e.target.value),placeholder:`Enter role title (e.g. Senior Security Architect)`,className:`w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20`,required:!0})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsxs)(`label`,{className:`inline-flex items-center gap-1.5 font-bold text-slate-700 mb-1.5`,children:[(0,P.jsx)(`span`,{children:`Clone Role`}),(0,P.jsx)(InfoTip,{text:`Optionally duplicate permissions from an existing role`})]}),(0,P.jsxs)(`select`,{value:s,onChange:e=>c(e.target.value),className:`w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20`,children:[(0,P.jsx)(`option`,{value:``,children:`Select Existing Role to Clone...`}),g.map(e=>(0,P.jsx)(`option`,{value:e.role,children:e.role},e.no))]})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsxs)(`div`,{className:`flex items-center justify-between mb-1.5`,children:[(0,P.jsxs)(`label`,{className:`inline-flex items-center gap-1.5 font-bold text-slate-700 mb-1.5`,children:[(0,P.jsx)(`span`,{children:`Remarks`}),(0,P.jsx)(InfoTip,{text:`Optional notes or description regarding this role`})]}),(0,P.jsxs)(`span`,{className:`text-slate-400 text-[11px]`,children:[u.length,`/255`]})]}),(0,P.jsx)(`textarea`,{rows:4,maxLength:255,value:u,onChange:e=>d(e.target.value),placeholder:`Enter remarks or role description...`,className:`w-full bg-white border border-slate-300 rounded-lg p-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none`})]}),(0,P.jsxs)(`div`,{className:`flex items-center justify-between pt-2`,children:[(0,P.jsxs)(`span`,{className:`inline-flex items-center gap-1.5 font-bold text-slate-700`,children:[(0,P.jsx)(`span`,{children:`Status`}),(0,P.jsx)(InfoTip,{text:`Active roles can be assigned to users across modules.`})]}),(0,P.jsx)(`button`,{type:`button`,onClick:()=>p(!f),className:`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${f?`bg-blue-600`:`bg-slate-300`}`,children:(0,P.jsx)(`span`,{className:`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${f?`translate-x-5`:`translate-x-0`}`})})]}),(0,P.jsxs)(`div`,{className:`pt-6 flex items-center gap-3 border-t border-slate-200`,children:[(0,P.jsx)(`button`,{type:`button`,onClick:()=>i(!1),className:`px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors shadow-xs`,children:`Cancel`}),(0,P.jsx)(`button`,{type:`submit`,className:`px-5 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-xs transition-colors`,children:`Submit`})]})]})]})})]})}function ft({onGoToTraining:e,onSelectCourse:onSelCourse,employeeName:t=`Tanya Kapoor`,programmes:progs,assignments:assignList,courseProgress:cpMap}){let[n,r]=(0,l.useState)({prevAttendance:!0,todaysAttendance:!0,attendanceCalendar:!0,todaysEvents:!0,holidays:!0,deviceInformation:!0,trainingWidget:!0}),[i,a]=(0,l.useState)(!1),o=e=>{r(t=>({...t,[e]:!t[e]}))},s=[{id:`prevAttendance`,label:`Previous day's Attendance`,tooltip:`Shows effective & gross hours from the previous workday`},{id:`todaysAttendance`,label:`Today's Attendance`,tooltip:`Displays live punch-in times, break timers, and effective working hours`},{id:`attendanceCalendar`,label:`Attendance Calendar`,tooltip:`Monthly attendance calendar with color-coded status badges`},{id:`todaysEvents`,label:`Today's Events`,tooltip:`Team birthdays, work anniversaries, and scheduled new joiners`},{id:`holidays`,label:`Holidays`,tooltip:`Upcoming company recognized national and festive holidays`},{id:`deviceInformation`,label:`Device Information`,tooltip:`Currently assigned hardware, testing tablets, and peripherals`},{id:`trainingWidget`,label:`Training & Assigned Courses`,tooltip:`Ongoing assigned training progress and recent credentials`}],[c,u]=(0,l.useState)(!0),[d,f]=(0,l.useState)(!1),[p,m]=(0,l.useState)(!1),[h,g]=(0,l.useState)(0),[_,v]=(0,l.useState)([{id:`post-1`,type:`birthday`,author:`System`,time:`8 hours ago`,targetName:`Mitenkumar Patel`,celebrationText:`for his birthday 🎂.`,likes:30,isLiked:!1,comments:[{id:`c-1`,author:`Mayurkumar Panchal`,avatar:`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces`,text:`Happy Birthday `,highlight:`Mitenkumar Patel(MI-641)`,time:`10 minutes ago`,likes:0},{id:`c-2`,author:`Pratik Patel`,avatar:`https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces`,text:`Happy Birthday 🎂`,time:`11 minutes ago`,likes:0},{id:`c-3`,author:`Jay Thakkar`,avatar:`https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&h=100&fit=crop&crop=faces`,text:`Happy Birthday Miten bhai 🎂🎉`,time:`17 minutes ago`,likes:0}]},{id:`post-2`,type:`anniversary`,author:`System`,time:`8 hours ago`,targetName:`Banti Chaudhary`,celebrationText:`for his 1st work anniversary 🎉.`,likes:30,isLiked:!1,comments:[{id:`c-4`,author:`Bharatkumar Sindhav`,avatar:`https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=faces`,text:`Congratulation on your 1st work anniversary at MindInventory 🎉🥳`,time:`1 minute ago`,likes:0},{id:`c-5`,author:`Pratik Patel`,avatar:`https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces`,text:`Congratulations on your 1st work anniversary at MindInventory 🥳`,time:`10 minutes ago`,likes:0}]}]),[y,b]=(0,l.useState)({}),x=e=>{v(_.map(t=>t.id===e?{...t,likes:t.isLiked?t.likes-1:t.likes+1,isLiked:!t.isLiked}:t))},S=(e,n,r)=>{let i=r===`birthday`?`Happy Birthday ${n}! 🎂🎉 Wishing you great success!`:`Congratulations ${n} on your work anniversary! 🎊🥂`,a={id:`c-${Date.now()}`,author:t,avatar:`https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces`,text:i,time:`Just now`,likes:0};v(_.map(t=>t.id===e?{...t,comments:[...t.comments,a]}:t))},ee=e=>{let n=y[e]?.trim();if(!n)return;let r={id:`c-${Date.now()}`,author:t,avatar:`https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces`,text:n,time:`Just now`,likes:0};v(_.map(t=>t.id===e?{...t,comments:[...t.comments,r]}:t)),b({...y,[e]:``})};return(0,P.jsxs)(`div`,{className:`p-6 max-w-[1720px] mx-auto w-full space-y-4`,children:[(0,P.jsxs)(`div`,{className:`grid grid-cols-1 xl:grid-cols-12 gap-5`,children:[(0,P.jsxs)(`div`,{className:`xl:col-span-7 space-y-4`,children:[(0,P.jsxs)(`div`,{className:`flex items-center justify-between pb-1`,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsxs)(`h1`,{className:`text-xl font-bold text-slate-900 tracking-tight`,children:[`Hello, `,t]}),(0,P.jsx)(`p`,{className:`text-xs text-slate-400 font-medium`,children:`Good Morning`})]}),(0,P.jsxs)(`div`,{className:`relative`,children:[(0,P.jsx)(`button`,{type:`button`,onClick:()=>a(!i),className:`p-1.5 rounded-lg border transition-colors shadow-2xs ${i?`border-slate-300 bg-white text-slate-800`:`border-slate-200 bg-white text-slate-500 hover:text-slate-800 hover:bg-slate-50`}`,title:i?`Close Customize Widgets`:`Customize Dashboard Layout`,children:i?(0,P.jsx)(N,{className:`w-4 h-4 text-slate-700`}):(0,P.jsxs)(`div`,{className:`grid grid-cols-2 gap-0.5 w-4 h-4 p-0.5`,children:[(0,P.jsx)(`div`,{className:`w-1.5 h-1.5 rounded-xs border border-slate-600`}),(0,P.jsx)(`div`,{className:`w-1.5 h-1.5 rounded-xs border border-slate-600`}),(0,P.jsx)(`div`,{className:`w-1.5 h-1.5 rounded-xs border border-slate-600`}),(0,P.jsx)(`div`,{className:`w-1.5 h-1.5 rounded-xs border border-blue-600 bg-blue-600`})]})}),i&&(0,P.jsxs)(`div`,{className:`absolute right-0 top-full mt-2 w-72 bg-white border border-slate-200 rounded-xl shadow-2xl p-4 z-50`,children:[(0,P.jsx)(`div`,{className:`text-sm font-bold text-slate-900 pb-3 border-b border-slate-100 mb-2`,children:`Customize Widgets`}),(0,P.jsx)(`div`,{className:`space-y-1`,children:s.map(e=>(0,P.jsxs)(`div`,{onClick:()=>o(e.id),className:`flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-slate-50 cursor-pointer select-none group transition-colors`,children:[(0,P.jsxs)(`div`,{className:`flex items-center gap-2.5`,children:[n[e.id]?(0,P.jsx)(`div`,{className:`w-4 h-4 rounded bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-2xs`,children:(0,P.jsx)(ne,{className:`w-3 h-3 stroke-[3]`})}):(0,P.jsx)(`div`,{className:`w-4 h-4 rounded border border-slate-300 bg-white shrink-0 group-hover:border-slate-400`}),(0,P.jsx)(`span`,{className:`text-xs font-medium text-slate-800`,children:e.label})]}),(0,P.jsx)(`span`,{title:e.tooltip,className:`text-slate-300 group-hover:text-slate-500 transition-colors p-0.5`,children:(0,P.jsx)(O,{className:`w-3.5 h-3.5`})})]},e.id))})]})]})]}),(0,P.jsxs)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 gap-4 items-start`,children:[(0,P.jsxs)(`div`,{className:`space-y-4`,children:[n.prevAttendance&&(0,P.jsxs)(`div`,{className:`bg-white border border-slate-200/90 rounded-xl p-4 shadow-2xs space-y-3`,children:[(0,P.jsxs)(`div`,{className:`flex items-center gap-1.5 text-xs font-bold text-slate-800`,children:[(0,P.jsx)(be,{className:`w-3.5 h-3.5 text-slate-300 -ml-1 cursor-grab`}),(0,P.jsx)(`span`,{children:`04-Nov-2026, Wednesday`})]}),(0,P.jsxs)(`div`,{className:`flex items-center gap-3 text-xs`,children:[(0,P.jsxs)(`span`,{className:`flex items-center gap-1 text-emerald-600 font-semibold text-[11px]`,children:[(0,P.jsx)(`span`,{className:`w-2 h-2 rounded-full bg-emerald-500 inline-block`}),`10:12 AM`]}),(0,P.jsxs)(`span`,{className:`flex items-center gap-1 text-rose-600 font-semibold text-[11px]`,children:[(0,P.jsx)(`span`,{className:`w-2 h-2 rounded-full bg-rose-500 inline-block`}),`07:44 PM`]}),(0,P.jsx)(`span`,{className:`bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.2 rounded font-mono`,children:`GS`})]}),(0,P.jsxs)(`div`,{className:`grid grid-cols-3 gap-2 pt-2 border-t border-slate-100 text-[11px]`,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`div`,{className:`text-slate-400 text-[10px]`,children:`Effective Hours`}),(0,P.jsx)(`div`,{className:`font-bold text-slate-900 text-xs`,children:`08h 23m`})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`div`,{className:`text-slate-400 text-[10px]`,children:`Break`}),(0,P.jsx)(`div`,{className:`font-bold text-slate-900 text-xs`,children:`01h 09m`})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`div`,{className:`text-slate-400 text-[10px]`,children:`Gross Hours`}),(0,P.jsx)(`div`,{className:`font-bold text-slate-900 text-xs`,children:`09h 32m`})]})]})]}),n.todaysAttendance&&(0,P.jsxs)(`div`,{className:`bg-white border border-slate-200/90 rounded-xl p-4 shadow-2xs space-y-3`,children:[(0,P.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,P.jsxs)(`div`,{className:`flex items-center gap-1.5 text-xs font-bold text-slate-800`,children:[(0,P.jsx)(be,{className:`w-3.5 h-3.5 text-slate-300 -ml-1 cursor-grab`}),(0,P.jsx)(`span`,{children:`Today, 05-Nov-2026`})]}),(0,P.jsx)(`button`,{onClick:()=>alert(`Attendance status synced successfully.`),className:`p-1 rounded-md border border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-colors`,title:`Refresh attendance`,children:(0,P.jsx)(De,{className:`w-3.5 h-3.5`})})]}),(0,P.jsxs)(`div`,{className:`flex items-center gap-3 text-xs`,children:[(0,P.jsxs)(`span`,{className:`flex items-center gap-1 text-emerald-600 font-semibold text-[11px]`,children:[(0,P.jsx)(`span`,{className:`w-2 h-2 rounded-full bg-emerald-500 inline-block`}),`10:18 AM`]}),(0,P.jsxs)(`span`,{className:`flex items-center gap-1 text-rose-600 font-semibold text-[11px]`,children:[(0,P.jsx)(`span`,{className:`w-2 h-2 rounded-full bg-rose-500 inline-block`}),`N/A`]}),(0,P.jsx)(`span`,{className:`bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.2 rounded font-mono`,children:`GS`})]}),(0,P.jsxs)(`div`,{className:`grid grid-cols-3 gap-2 pt-2 border-t border-slate-100 text-[11px]`,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`div`,{className:`text-slate-400 text-[10px]`,children:`Effective Hours`}),(0,P.jsx)(`div`,{className:`font-bold text-slate-900 text-xs`,children:`00h 37m`})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`div`,{className:`text-slate-400 text-[10px]`,children:`Break`}),(0,P.jsx)(`div`,{className:`font-bold text-slate-900 text-xs`,children:`00h 00m`})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`div`,{className:`text-slate-400 text-[10px]`,children:`Gross Hours`}),(0,P.jsx)(`div`,{className:`font-bold text-slate-900 text-xs`,children:`00h 37m`})]})]})]}),n.attendanceCalendar&&(0,P.jsxs)(`div`,{className:`bg-white border border-slate-200/90 rounded-xl p-4 shadow-2xs space-y-3`,children:[(0,P.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,P.jsxs)(`div`,{className:`flex items-center gap-1.5 text-xs font-bold text-slate-800`,children:[(0,P.jsx)(be,{className:`w-3.5 h-3.5 text-slate-300 -ml-1 cursor-grab`}),(0,P.jsx)(`span`,{children:`Attendance Calendar`})]}),(0,P.jsx)(`button`,{onClick:()=>alert(`Navigating to full monthly attendance calendar`),className:`text-xs font-semibold text-blue-600 hover:underline`,children:`Go to Calendar`})]}),(0,P.jsxs)(`div`,{className:`flex items-center justify-center gap-3 text-xs font-bold text-slate-800 py-1`,children:[(0,P.jsx)(`button`,{className:`text-slate-400 hover:text-slate-700`,children:`‹`}),(0,P.jsx)(`span`,{children:`November 2026`}),(0,P.jsx)(`button`,{className:`text-slate-400 hover:text-slate-700`,children:`›`})]}),(0,P.jsxs)(`div`,{className:`w-full text-center`,children:[(0,P.jsxs)(`div`,{className:`grid grid-cols-7 gap-1 text-[11px] font-bold text-slate-600 pb-2`,children:[(0,P.jsx)(`div`,{children:`Su`}),(0,P.jsx)(`div`,{children:`Mo`}),(0,P.jsx)(`div`,{children:`Tu`}),(0,P.jsx)(`div`,{children:`We`}),(0,P.jsx)(`div`,{children:`Th`}),(0,P.jsx)(`div`,{children:`Fr`}),(0,P.jsx)(`div`,{children:`Sa`})]}),(0,P.jsxs)(`div`,{className:`grid grid-cols-7 gap-y-1.5 gap-x-1 text-xs`,children:[(0,P.jsx)(`div`,{className:`h-7 flex items-center justify-center text-slate-700 text-[11px]`,children:`1`}),(0,P.jsx)(`div`,{className:`h-7 flex items-center justify-center`,children:(0,P.jsx)(`span`,{className:`w-6 h-6 rounded-full bg-emerald-500 text-white font-bold text-[11px] flex items-center justify-center`,children:`2`})}),(0,P.jsx)(`div`,{className:`h-7 flex items-center justify-center`,children:(0,P.jsx)(`span`,{className:`w-6 h-6 rounded-full bg-emerald-500 text-white font-bold text-[11px] flex items-center justify-center`,children:`3`})}),(0,P.jsx)(`div`,{className:`h-7 flex items-center justify-center`,children:(0,P.jsx)(`span`,{className:`w-6 h-6 rounded-full bg-emerald-500 text-white font-bold text-[11px] flex items-center justify-center`,children:`4`})}),(0,P.jsx)(`div`,{className:`h-7 flex items-center justify-center`,children:(0,P.jsx)(`span`,{className:`w-6 h-6 rounded-full bg-rose-400 text-white font-bold text-[11px] flex items-center justify-center`,children:`5`})}),(0,P.jsx)(`div`,{className:`h-7 flex items-center justify-center text-slate-700 text-[11px]`,children:`6`}),(0,P.jsx)(`div`,{className:`h-7 flex items-center justify-center text-slate-700 text-[11px]`,children:`7`}),(0,P.jsx)(`div`,{className:`h-7 flex items-center justify-center text-slate-700 text-[11px]`,children:`8`}),(0,P.jsx)(`div`,{className:`h-7 flex items-center justify-center`,children:(0,P.jsx)(`span`,{className:`w-6 h-6 rounded-full bg-cyan-50 text-cyan-800 font-semibold text-[11px] flex items-center justify-center`,children:`9`})}),(0,P.jsx)(`div`,{className:`h-7 flex items-center justify-center`,children:(0,P.jsx)(`span`,{className:`w-6 h-6 rounded-full bg-cyan-50 text-cyan-800 font-semibold text-[11px] flex items-center justify-center`,children:`10`})}),(0,P.jsx)(`div`,{className:`h-7 flex items-center justify-center text-slate-700 text-[11px]`,children:`11`}),(0,P.jsx)(`div`,{className:`h-7 flex items-center justify-center text-slate-700 text-[11px]`,children:`12`}),(0,P.jsx)(`div`,{className:`h-7 flex items-center justify-center text-slate-700 text-[11px]`,children:`13`}),(0,P.jsx)(`div`,{className:`h-7 flex items-center justify-center text-slate-700 text-[11px]`,children:`14`}),(0,P.jsx)(`div`,{className:`h-7 flex items-center justify-center text-slate-700 text-[11px]`,children:`15`}),(0,P.jsx)(`div`,{className:`h-7 flex items-center justify-center text-slate-700 text-[11px]`,children:`16`}),(0,P.jsx)(`div`,{className:`h-7 flex items-center justify-center text-slate-700 text-[11px]`,children:`17`}),(0,P.jsx)(`div`,{className:`h-7 flex items-center justify-center text-slate-700 text-[11px]`,children:`18`}),(0,P.jsx)(`div`,{className:`h-7 flex items-center justify-center text-slate-700 text-[11px]`,children:`19`}),(0,P.jsx)(`div`,{className:`h-7 flex items-center justify-center text-slate-700 text-[11px]`,children:`20`}),(0,P.jsx)(`div`,{className:`h-7 flex items-center justify-center text-slate-700 text-[11px]`,children:`21`}),(0,P.jsx)(`div`,{className:`h-7 flex items-center justify-center text-slate-700 text-[11px]`,children:`22`}),(0,P.jsx)(`div`,{className:`h-7 flex items-center justify-center text-slate-700 text-[11px]`,children:`23`}),(0,P.jsx)(`div`,{className:`h-7 flex items-center justify-center text-slate-700 text-[11px]`,children:`24`}),(0,P.jsx)(`div`,{className:`h-7 flex items-center justify-center text-slate-700 text-[11px]`,children:`25`}),(0,P.jsx)(`div`,{className:`h-7 flex items-center justify-center text-slate-700 text-[11px]`,children:`26`}),(0,P.jsx)(`div`,{className:`h-7 flex items-center justify-center text-slate-700 text-[11px]`,children:`27`}),(0,P.jsx)(`div`,{className:`h-7 flex items-center justify-center text-slate-700 text-[11px]`,children:`28`}),(0,P.jsx)(`div`,{className:`h-7 flex items-center justify-center text-slate-700 text-[11px]`,children:`29`}),(0,P.jsx)(`div`,{className:`h-7 flex items-center justify-center text-slate-700 text-[11px]`,children:`30`})]})]}),(0,P.jsxs)(`div`,{className:`flex items-center gap-3 pt-3 border-t border-slate-100 text-[10px] text-slate-600 justify-start flex-wrap`,children:[(0,P.jsxs)(`span`,{className:`flex items-center gap-1.5`,children:[(0,P.jsx)(`span`,{className:`w-2.5 h-2.5 rounded-xs bg-emerald-500 inline-block`}),`Present`]}),(0,P.jsxs)(`span`,{className:`flex items-center gap-1.5`,children:[(0,P.jsx)(`span`,{className:`w-2.5 h-2.5 rounded-xs bg-rose-400 inline-block`}),`LWPP`]}),(0,P.jsxs)(`span`,{className:`flex items-center gap-1.5`,children:[(0,P.jsx)(`span`,{className:`w-2.5 h-2.5 rounded-xs bg-slate-300 inline-block`}),`Absent/AR`]}),(0,P.jsxs)(`span`,{className:`flex items-center gap-1.5`,children:[(0,P.jsx)(`span`,{className:`w-2.5 h-2.5 rounded-xs bg-amber-400 inline-block`}),`Holiday`]})]})]}),(()=>{let fmtWDate=d=>{if(!d||typeof d!==`string`)return d||`-`;let m=d.trim().match(/^(\d{4})-(\d{2})-(\d{2})$/);if(m){let ms=[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`];return`${m[3]}-${ms[parseInt(m[2],10)-1]||m[2]}-${m[1]}`}return d.trim()},tanyaAsg=(assignList||[]).filter(a=>a.employeeId===`emp-3`||a.employeeId===`CO-5039`||(a.employeeName||``).toLowerCase()===`tanya kapoor`),visibleProgs=(progs||[]).filter(p=>{let ps=p.publicationStatus||p.status||`Published`;return ps!==`Archived`&&ps!==`Draft`}).map((p,idx)=>{let asgIdx=tanyaAsg.findIndex(a=>a.programmeId===p.id||(a.programmeName&&a.programmeName.trim().toLowerCase()===p.name.trim().toLowerCase())),asg=asgIdx>=0?tanyaAsg[asgIdx]:null,isNewProg=String(p.id||"").length>8&&!/^prog-\d{1,2}$/.test(String(p.id||"")),cp=cpMap&&(cpMap[`CO-5039::`+p.id]||cpMap[p.id]),defaultSt=asg?(asg.status||`Not Started`):((p.id===`prog-4`||p.id===`prog-9`||p.id===`prog-10`||isNewProg)?`Not Started`:`In Progress`),defaultPct=asg?(Number(asg.progress)||(asg.status===`Completed`?100:0)):(defaultSt===`Not Started`?0:40),st=cp?cp.status:defaultSt,pct=cp?(Number(cp.progress)||0):defaultPct;if(st===`Completed`)pct=100;let avail=p.availabilityStatus||(p.isActive===!1?`Inactive`:`Active`),resList=Array.isArray(p.resources)?p.resources.filter(r=>r&&(r.title||r.url||r.type)):[],sortRank=asgIdx>=0?asgIdx:(isNewProg?100+idx:1000+idx);return{...p,_sortRank:sortRank,status:st,progress:pct,availabilityStatus:avail,cat:p.category||`Governance & Compliance`,dueDate:fmtWDate((asg&&asg.dueDate)||`15-Dec-2026`),assignedDate:fmtWDate((asg&&asg.assignedDate)||p.createdAt||`04-Nov-2026`),assignedBy:(asg&&asg.assignedBy)||(p.createdBy?`${p.createdBy} (Admin)`:`Isha Patel (HR Operations)`),hours:fmtDurationHM(p.expectedDurationHours?p:4),resCount:resList.length,doneResCount:cp&&cp.completedResources?resList.filter(r=>cp.completedResources[r.id]).length:Math.round((pct/100)*resList.length),latestResult:cp?cp.latestResult:null}}).sort((a,b)=>a._sortRank-b._sortRank),w1=visibleProgs.find(p=>p.status===`In Progress`||p.status===`Not Started`||p.status===`Overdue`)||visibleProgs[0]||null,w2=visibleProgs.find(p=>p.status===`Completed`&&(!w1||p.id!==w1.id))||null,w1Inact=w1&&w1.availabilityStatus===`Inactive`,w2Inact=w2&&w2.availabilityStatus===`Inactive`;return n.trainingWidget&&(0,P.jsxs)(`div`,{className:`bg-white border border-slate-200/90 rounded-xl p-4 shadow-2xs space-y-3.5`,children:[(0,P.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,P.jsxs)(`div`,{className:`flex items-center gap-1.5 text-xs font-bold text-slate-800`,children:[(0,P.jsx)(be,{className:`w-3.5 h-3.5 text-slate-300 -ml-1 cursor-grab`}),(0,P.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[(0,P.jsx)(_e,{className:`w-4 h-4 text-blue-600`}),(0,P.jsx)(`span`,{children:`Training & Assigned Courses`})]})]}),(0,P.jsxs)(`button`,{onClick:e,className:`text-xs font-semibold text-blue-600 hover:underline flex items-center gap-0.5`,children:[(0,P.jsx)(`span`,{children:`View All`}),(0,P.jsx)(E,{className:`w-3.5 h-3.5`})]})]}),w1&&(0,P.jsxs)(`div`,{className:`bg-gradient-to-br from-blue-50/70 to-indigo-50/40 border border-blue-100 rounded-xl p-3 space-y-2.5`,children:[(0,P.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,P.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[(0,P.jsx)(`span`,{className:`bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider`,children:w1.status}),w1Inact&&(0,P.jsx)(`span`,{className:`bg-slate-100 text-slate-600 border border-slate-200 text-[10px] font-bold px-2 py-0.5 rounded-full`,children:`Inactive`})]}),(0,P.jsxs)(`span`,{className:`text-[11px] font-semibold text-slate-500`,children:[`Due: `,w1.dueDate]})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`h4`,{className:`text-xs font-bold text-slate-900 leading-snug`,children:w1.name}),(0,P.jsxs)(`p`,{className:`text-[11px] text-slate-500 mt-0.5`,children:[w1.cat,` • `,w1.difficultyLevel||`Intermediate`]})]}),(0,P.jsxs)(`div`,{className:`space-y-1`,children:[(0,P.jsxs)(`div`,{className:`flex items-center justify-between text-[11px]`,children:[(0,P.jsxs)(`span`,{className:`text-slate-600 font-medium`,children:[w1.doneResCount,` of `,w1.resCount,` Modules Completed`]}),(0,P.jsxs)(`span`,{className:`font-bold text-blue-700`,children:[w1.progress,`%`]})]}),(0,P.jsx)(`div`,{className:`w-full bg-slate-200/80 h-2 rounded-full overflow-hidden`,children:(0,P.jsx)(`div`,{className:`bg-blue-600 h-full rounded-full transition-all duration-500`,style:{width:`${w1.progress}%`}})})]}),(0,P.jsxs)(`button`,{type:`button`,disabled:!!w1Inact,onClick:()=>!w1Inact&&(onSelCourse?onSelCourse(w1):e()),style:w1Inact?{opacity:0.5}:undefined,className:`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs py-1.5 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors shadow-2xs ${w1Inact?`cursor-not-allowed`:``}`,children:[(0,P.jsx)(Te,{className:`w-3.5 h-3.5 fill-current`}),(0,P.jsx)(`span`,{children:w1Inact?`Inactive (View Only)`:`Continue Learning`})]})]}),w2&&(0,P.jsxs)(`div`,{className:`border border-slate-200/80 rounded-xl p-3 space-y-2 bg-slate-50/60`,children:[(0,P.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,P.jsx)(`span`,{className:`bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold px-2 py-0.5 rounded-full`,children:`Last Completed`}),(0,P.jsxs)(`span`,{className:`text-[10px] text-slate-400`,children:[`Due: `,w2.dueDate]})]}),(0,P.jsxs)(`div`,{className:`flex items-center justify-between gap-2`,children:[(0,P.jsxs)(`div`,{className:`min-w-0`,children:[(0,P.jsx)(`h5`,{className:`text-xs font-bold text-slate-800 truncate`,children:w2.name}),(0,P.jsxs)(`div`,{className:`flex items-center gap-2 mt-1`,children:[(0,P.jsxs)(`span`,{className:`text-[11px] font-bold text-emerald-600`,children:[`Score: `,w2.latestResult?.scorePercentage||94,`%`]}),(0,P.jsx)(`span`,{className:`text-[10px] text-slate-400`,children:`•`}),(0,P.jsxs)(`span`,{className:`text-[10px] font-mono font-semibold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200/80 flex items-center gap-1`,children:[(0,P.jsx)(C,{className:`w-3 h-3 text-amber-500`}),`TRN-2026-0001`]})]})]}),(0,P.jsx)(`button`,{type:`button`,disabled:!!w2Inact,onClick:()=>!w2Inact&&(onSelCourse?onSelCourse(w2):e()),style:w2Inact?{opacity:0.5}:undefined,className:`text-xs font-semibold text-blue-600 shrink-0 ${w2Inact?`cursor-not-allowed`:`hover:underline`}`,children:`View Course`})]})]})]})})(),!n.prevAttendance&&!n.todaysAttendance&&!n.attendanceCalendar&&!n.trainingWidget&&(0,P.jsx)(`div`,{className:`bg-white border border-dashed border-slate-200 rounded-xl p-8 text-center text-slate-400 text-xs`,children:`All Column widgets hidden. Use Customize Widgets (top-right) to display cards.`})]}),(0,P.jsxs)(`div`,{className:`space-y-4`,children:[n.todaysEvents&&(0,P.jsxs)(`div`,{className:`bg-white border border-slate-200/90 rounded-xl p-4 shadow-2xs space-y-3`,children:[(0,P.jsxs)(`div`,{className:`flex items-center gap-1.5 text-xs font-bold text-slate-800`,children:[(0,P.jsx)(be,{className:`w-3.5 h-3.5 text-slate-300 -ml-1 cursor-grab`}),(0,P.jsx)(`span`,{children:`Today's Events`})]}),(0,P.jsxs)(`div`,{className:`border border-slate-200/80 rounded-xl overflow-hidden`,children:[(0,P.jsxs)(`div`,{onClick:()=>u(!c),className:`p-3 bg-blue-50/70 hover:bg-blue-50 transition-colors flex items-center justify-between cursor-pointer`,children:[(0,P.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,P.jsx)(`span`,{className:`text-xs font-bold text-slate-900`,children:`Today's Birthdays`}),(0,P.jsx)(`span`,{className:`w-4 h-4 rounded-full bg-white text-blue-600 text-[10px] font-bold flex items-center justify-center shadow-2xs`,children:`1`})]}),c?(0,P.jsx)(ae,{className:`w-4 h-4 text-slate-400`}):(0,P.jsx)(re,{className:`w-4 h-4 text-slate-400`})]}),c&&(0,P.jsxs)(`div`,{className:`p-3 bg-white space-y-3`,children:[(0,P.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,P.jsx)(`img`,{src:`https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces`,alt:`Mitenkumar P.`,className:`w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm`}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`div`,{className:`text-xs font-bold text-slate-900`,children:`Mitenkumar P.`}),(0,P.jsx)(`div`,{className:`text-[10px] text-slate-400 font-medium`,children:`MI-641`})]})]}),(0,P.jsxs)(`div`,{className:`pt-1`,children:[(0,P.jsx)(`div`,{className:`text-[11px] font-bold text-slate-700 mb-2`,children:`Next 7 Days`}),(0,P.jsx)(`div`,{className:`grid grid-cols-3 sm:grid-cols-6 gap-2 text-center`,children:[{name:`Vipul M.`,date:`07 Nov`,avatar:`https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=faces`},{name:`Paresh P.`,date:`08 Nov`,avatar:`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces`},{name:`Ishika S.`,date:`10 Nov`,avatar:`https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces`},{name:`Jash L.`,date:`11 Nov`,avatar:`https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces`},{name:`Taliha M.`,date:`11 Nov`,avatar:`https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=faces`},{name:`Mansi C.`,date:`12 Nov`,avatar:`https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces`}].map((e,t)=>(0,P.jsxs)(`div`,{className:`flex flex-col items-center space-y-1`,children:[(0,P.jsx)(`img`,{src:e.avatar,alt:e.name,className:`w-8 h-8 rounded-full object-cover border border-slate-200`}),(0,P.jsx)(`div`,{className:`text-[10px] font-bold text-slate-800 leading-tight truncate w-full`,children:e.name}),(0,P.jsx)(`div`,{className:`text-[9px] text-slate-400 font-medium`,children:e.date})]},t))})]})]})]}),(0,P.jsxs)(`div`,{className:`border border-slate-200/80 rounded-xl overflow-hidden`,children:[(0,P.jsxs)(`div`,{onClick:()=>f(!d),className:`p-3 bg-white hover:bg-slate-50 transition-colors flex items-center justify-between cursor-pointer`,children:[(0,P.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,P.jsx)(`span`,{className:`text-xs font-bold text-slate-900`,children:`Today's Work Anniversaries`}),(0,P.jsx)(`span`,{className:`w-4 h-4 rounded-full bg-amber-50 text-amber-600 border border-amber-200 text-[10px] font-bold flex items-center justify-center`,children:`1`})]}),d?(0,P.jsx)(ae,{className:`w-4 h-4 text-slate-400`}):(0,P.jsx)(re,{className:`w-4 h-4 text-slate-400`})]}),d&&(0,P.jsxs)(`div`,{className:`p-3 bg-slate-50 border-t border-slate-100 flex items-center gap-3`,children:[(0,P.jsx)(`img`,{src:`https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=faces`,alt:`Banti Chaudhary`,className:`w-9 h-9 rounded-full object-cover border border-slate-200`}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`div`,{className:`text-xs font-bold text-slate-900`,children:`Banti Chaudhary`}),(0,P.jsx)(`div`,{className:`text-[10px] text-slate-500`,children:`1st Work Anniversary • Engineering`})]})]})]}),(0,P.jsxs)(`div`,{className:`border border-slate-200/80 rounded-xl overflow-hidden`,children:[(0,P.jsxs)(`div`,{onClick:()=>m(!p),className:`p-3 bg-white hover:bg-slate-50 transition-colors flex items-center justify-between cursor-pointer`,children:[(0,P.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,P.jsx)(`span`,{className:`text-xs font-bold text-slate-900`,children:`Today's New Joiners`}),(0,P.jsx)(`span`,{className:`w-4 h-4 rounded-full bg-amber-50 text-amber-600 border border-amber-200 text-[10px] font-bold flex items-center justify-center`,children:`0`})]}),p?(0,P.jsx)(ae,{className:`w-4 h-4 text-slate-400`}):(0,P.jsx)(re,{className:`w-4 h-4 text-slate-400`})]}),p&&(0,P.jsx)(`div`,{className:`p-3 bg-slate-50 border-t border-slate-100 text-xs text-slate-500 italic text-center`,children:`No new joiners scheduled for today.`})]})]}),n.holidays&&(0,P.jsxs)(`div`,{className:`bg-white border border-slate-200/90 rounded-xl p-4 shadow-2xs space-y-2 relative overflow-hidden`,children:[(0,P.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,P.jsxs)(`div`,{className:`flex items-center gap-1.5 text-xs font-bold text-slate-800`,children:[(0,P.jsx)(be,{className:`w-3.5 h-3.5 text-slate-300 -ml-1 cursor-grab`}),(0,P.jsx)(`span`,{children:`Holidays`})]}),(0,P.jsxs)(`div`,{className:`flex items-center gap-1`,children:[(0,P.jsx)(`button`,{onClick:()=>g(e=>Math.max(0,e-1)),className:`p-1 rounded border border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-50`,children:(0,P.jsx)(ie,{className:`w-3 h-3`})}),(0,P.jsx)(`button`,{onClick:()=>g(e=>e+1),className:`p-1 rounded border border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-50`,children:(0,P.jsx)(E,{className:`w-3 h-3`})})]})]}),(0,P.jsxs)(`div`,{className:`pt-3 pb-1 flex items-end justify-between relative`,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`h3`,{className:`text-lg font-black text-slate-900 tracking-tight`,children:`Diwali`}),(0,P.jsx)(`p`,{className:`text-xs text-slate-500 font-medium mt-0.5`,children:`9-Nov-2026, Monday`})]}),(0,P.jsx)(`div`,{className:`w-32 h-16 relative shrink-0`,children:(0,P.jsxs)(`svg`,{viewBox:`0 0 160 80`,className:`w-full h-full overflow-visible`,children:[(0,P.jsx)(`circle`,{cx:`120`,cy:`25`,r:`14`,fill:`#FDE68A`,opacity:`0.6`}),(0,P.jsx)(`path`,{d:`M0,75 Q80,60 160,70 L160,80 L0,80 Z`,fill:`#FDE047`,opacity:`0.4`}),(0,P.jsx)(`path`,{d:`M20,78 Q90,65 160,74 L160,80 L20,80 Z`,fill:`#FCD34D`,opacity:`0.6`}),(0,P.jsx)(`path`,{d:`M140,75 Q135,45 130,20`,stroke:`#78350F`,strokeWidth:`4`,strokeLinecap:`round`,fill:`none`}),(0,P.jsx)(`path`,{d:`M130,20 Q110,15 105,25`,stroke:`#15803D`,strokeWidth:`3`,strokeLinecap:`round`,fill:`none`}),(0,P.jsx)(`path`,{d:`M130,20 Q120,5 110,8`,stroke:`#16A34A`,strokeWidth:`3`,strokeLinecap:`round`,fill:`none`}),(0,P.jsx)(`path`,{d:`M130,20 Q135,0 145,5`,stroke:`#15803D`,strokeWidth:`3`,strokeLinecap:`round`,fill:`none`}),(0,P.jsx)(`path`,{d:`M130,20 Q150,15 155,25`,stroke:`#22C55E`,strokeWidth:`3`,strokeLinecap:`round`,fill:`none`}),(0,P.jsx)(`path`,{d:`M90,72 L105,62 L112,74`,stroke:`#DC2626`,strokeWidth:`2.5`,fill:`none`,strokeLinecap:`round`}),(0,P.jsx)(`path`,{d:`M95,73 L110,63 L117,75`,stroke:`#2563EB`,strokeWidth:`2.5`,fill:`none`,strokeLinecap:`round`})]})})]})]}),n.deviceInformation&&(0,P.jsxs)(`div`,{className:`bg-white border border-slate-200/90 rounded-xl p-4 shadow-2xs space-y-3`,children:[(0,P.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,P.jsxs)(`div`,{className:`flex items-center gap-1.5 text-xs font-bold text-slate-800`,children:[(0,P.jsx)(be,{className:`w-3.5 h-3.5 text-slate-300 -ml-1 cursor-grab`}),(0,P.jsx)(`span`,{children:`Device Currently In Use`})]}),(0,P.jsx)(`button`,{onClick:()=>alert(`Add testing device`),className:`p-1 rounded-md border border-slate-200 text-slate-500 hover:text-blue-600 hover:bg-slate-50 transition-colors`,title:`Add Device`,children:(0,P.jsx)(j,{className:`w-3.5 h-3.5`})})]}),(0,P.jsxs)(`div`,{className:`border border-slate-100 rounded-xl py-8 px-4 flex flex-col items-center justify-center text-center bg-slate-50/40`,children:[(0,P.jsx)(`div`,{className:`w-8 h-8 rounded-lg border border-slate-300 flex items-center justify-center text-slate-400`,children:(0,P.jsx)(Le,{className:`w-4 h-4 stroke-[1.5]`})}),(0,P.jsx)(`p`,{className:`text-[11px] text-slate-400 mt-2 font-medium`,children:`Not using any testing devices right now.`})]})]}),!n.todaysEvents&&!n.holidays&&!n.deviceInformation&&(0,P.jsx)(`div`,{className:`bg-white border border-dashed border-slate-200 rounded-xl p-8 text-center text-slate-400 text-xs`,children:`All Column widgets hidden. Use Customize Widgets (top-right) to display cards.`})]})]})]}),(0,P.jsxs)(`div`,{className:`xl:col-span-5 space-y-4`,children:[(0,P.jsxs)(`div`,{className:`flex items-center justify-between pb-1`,children:[(0,P.jsx)(`h2`,{className:`text-base font-bold text-slate-900 tracking-tight`,children:`Feed`}),(0,P.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,P.jsxs)(`button`,{onClick:()=>alert(`New post modal`),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-blue-200 bg-blue-50/70 text-blue-600 text-xs font-bold hover:bg-blue-100 transition-colors shadow-2xs`,children:[(0,P.jsx)(we,{className:`w-3.5 h-3.5`}),(0,P.jsx)(`span`,{children:`Post`})]}),(0,P.jsx)(`button`,{onClick:()=>alert(`Filter feed options`),className:`p-1.5 rounded-lg border border-slate-200 bg-white text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors shadow-2xs`,title:`Filter feed`,children:(0,P.jsx)(Ne,{className:`w-4 h-4`})}),(0,P.jsx)(`button`,{onClick:()=>alert(`Create new feed announcement`),className:`w-7 h-7 rounded-lg bg-blue-50 text-blue-600 font-bold flex items-center justify-center text-sm border border-blue-200/60 hover:bg-blue-100 transition-colors shadow-2xs`,title:`Add post`,children:(0,P.jsx)(j,{className:`w-4 h-4`})})]})]}),(0,P.jsx)(`div`,{className:`space-y-4`,children:_.map(e=>(0,P.jsxs)(`div`,{className:`bg-white border border-slate-200/90 rounded-xl p-4 shadow-2xs space-y-3`,children:[(0,P.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,P.jsxs)(`div`,{className:`flex items-center gap-2.5`,children:[(0,P.jsx)(`div`,{className:`w-7 h-7 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center overflow-hidden`,children:(0,P.jsx)(`div`,{className:`w-4 h-4 rounded-full border-2 border-t-amber-500 border-r-rose-500 border-b-blue-500 border-l-emerald-500`})}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`div`,{className:`text-xs font-bold text-slate-900`,children:e.author}),(0,P.jsx)(`div`,{className:`text-[10px] text-slate-400`,children:e.time})]})]}),(0,P.jsxs)(`button`,{onClick:()=>S(e.id,e.targetName,e.type),className:`flex items-center gap-1.5 px-3 py-1 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 text-xs font-semibold shadow-2xs transition-colors`,children:[(0,P.jsx)(ge,{className:`w-3.5 h-3.5 text-slate-600`}),(0,P.jsx)(`span`,{children:`Wish`})]})]}),(0,P.jsxs)(`div`,{className:`text-xs text-slate-700 pt-0.5`,children:[`Wish`,` `,(0,P.jsx)(`span`,{className:`text-blue-600 font-semibold hover:underline cursor-pointer`,children:e.targetName}),` `,e.celebrationText]}),(0,P.jsxs)(`div`,{className:`flex items-center justify-between text-xs pt-1 border-t border-slate-100 text-slate-500`,children:[(0,P.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,P.jsxs)(`button`,{onClick:()=>x(e.id),className:`flex items-center gap-1.5 font-medium transition-colors ${e.isLiked?`text-blue-600 font-bold`:`hover:text-blue-600`}`,children:[(0,P.jsx)(Re,{className:`w-3.5 h-3.5`}),(0,P.jsx)(`span`,{children:`Like`})]}),(0,P.jsxs)(`button`,{onClick:()=>{document.getElementById(`comment-input-${e.id}`)?.focus()},className:`flex items-center gap-1.5 font-medium hover:text-blue-600 transition-colors`,children:[(0,P.jsx)(Ce,{className:`w-3.5 h-3.5`}),(0,P.jsx)(`span`,{children:`Comment`})]})]}),(0,P.jsxs)(`div`,{className:`flex items-center gap-3 text-[11px] text-slate-400 font-medium`,children:[(0,P.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,P.jsx)(Re,{className:`w-3 h-3 text-slate-400`}),e.likes]}),(0,P.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,P.jsx)(Ce,{className:`w-3 h-3 text-slate-400`}),e.comments.length]})]})]}),(0,P.jsxs)(`div`,{className:`space-y-2 pt-1`,children:[e.comments.map(e=>(0,P.jsx)(`div`,{className:`p-2.5 bg-slate-50/70 border border-slate-100 rounded-xl space-y-1 text-xs`,children:(0,P.jsxs)(`div`,{className:`flex items-start gap-2.5`,children:[(0,P.jsx)(`img`,{src:e.avatar,alt:e.author,className:`w-6 h-6 rounded-full object-cover shrink-0 mt-0.5`}),(0,P.jsxs)(`div`,{className:`flex-1 min-w-0`,children:[(0,P.jsx)(`div`,{className:`font-bold text-slate-900 text-xs`,children:e.author}),(0,P.jsxs)(`div`,{className:`text-slate-700 text-xs mt-0.5`,children:[e.text,e.highlight&&(0,P.jsx)(`span`,{className:`text-blue-600 font-semibold`,children:e.highlight})]}),(0,P.jsxs)(`div`,{className:`flex items-center gap-3 text-[10px] text-slate-400 pt-1 font-medium`,children:[(0,P.jsx)(`button`,{className:`hover:text-blue-600`,children:`Like`}),(0,P.jsx)(`button`,{className:`hover:text-blue-600`,children:`Reply`}),(0,P.jsxs)(`span`,{children:[`👍 `,e.likes]}),(0,P.jsx)(`span`,{children:`|`}),(0,P.jsx)(`span`,{children:e.time})]})]})]})},e.id)),e.id===`post-1`&&(0,P.jsx)(`button`,{onClick:()=>alert(`Loaded all comments for post`),className:`text-xs font-semibold text-blue-600 hover:underline py-1 block`,children:`View all 9 comments`}),(0,P.jsxs)(`div`,{className:`flex items-center gap-2.5 pt-1`,children:[(0,P.jsx)(`img`,{src:`https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces`,alt:t,className:`w-7 h-7 rounded-full object-cover shrink-0 border border-slate-200`}),(0,P.jsxs)(`div`,{className:`flex-1 relative`,children:[(0,P.jsx)(`input`,{id:`comment-input-${e.id}`,type:`text`,value:y[e.id]||``,onChange:t=>b({...y,[e.id]:t.target.value}),onKeyDown:t=>{t.key===`Enter`&&ee(e.id)},placeholder:`Write a comment`,className:`w-full bg-white border border-slate-200 rounded-lg px-3 py-1.5 pr-8 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500`}),(0,P.jsx)(`button`,{onClick:()=>ee(e.id),className:`absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-600`,children:(0,P.jsx)(Ae,{className:`w-3.5 h-3.5`})})]})]})]})]},e.id))})]})]}),(0,P.jsxs)(`div`,{className:`fixed bottom-4 right-4 z-40 flex items-center gap-1.5`,children:[(0,P.jsx)(`button`,{onClick:()=>alert(`Performance Analytics Panel`),className:`p-2 rounded-lg bg-blue-50 text-blue-600 border border-blue-200/80 shadow-md hover:bg-blue-100 transition-colors`,title:`Analytics`,children:(0,P.jsx)(Be,{className:`w-4 h-4`})}),(0,P.jsx)(`button`,{onClick:()=>alert(`Expand/Collapse Feed Sidebar`),className:`p-2 rounded-lg bg-white text-slate-400 border border-slate-200 shadow-md hover:text-slate-700 transition-colors`,title:`Toggle view`,children:(0,P.jsx)(oe,{className:`w-4 h-4`})})]})]})}function pt({onSelectCourse:e,programmes:i,assignments:assignList,courseProgress:cpMap}){
  let[searchQuery,setSearchQuery]=(0,l.useState)(``);
  let[categoryFilter,setCategoryFilter]=(0,l.useState)(`All Categories`);
  let fmtEmpDate=d=>{if(!d||typeof d!==`string`)return d||`-`;let m=d.trim().match(/^(\d{4})-(\d{2})-(\d{2})$/);if(m){let ms=[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`];return`${m[3]}-${ms[parseInt(m[2],10)-1]||m[2]}-${m[1]}`}return d.trim()};
  let staticList = [
    {name:`CollabCRM Recruitment & Client Portal Workflows`,hours:`18 Hours`,type:`Mandatory`,cat:`Recruitment & HR Operations`,assignedBy:`Isha Patel (HR Operations)`,assignedDate:`01-Nov-2025`,dueDate:`15-Dec-2025`,status:`In Progress`,progress:40},
    {name:`Q4 2025 Workplace Safety & POSH Re-Certification`,hours:`2 Hours`,type:`Mandatory`,cat:`Compliance`,assignedBy:`Isha Patel (HR Operations)`,assignedDate:`01-Nov-2025`,dueDate:`15-Dec-2025`,status:`Overdue`,progress:40},
    {name:`SOC2 Type II Audit Preparedness & Evidence Collection`,hours:`4 Hours`,type:`Mandatory`,cat:`Governance & Compliance`,assignedBy:`Ishdeep Anand (Admin)`,assignedDate:`01-Dec-2025`,dueDate:`10-Jan-2026`,status:`Overdue`,progress:30},
    {name:`Kafka Event-Driven Architecture & Stream Processing`,hours:`6 Hours`,type:`Optional`,cat:`Engineering`,assignedBy:`Megha Salunkhe (Reporting Manager)`,assignedDate:`05-Dec-2025`,dueDate:`12-Jan-2026`,status:`Overdue`,progress:25},
    {name:`Disaster Recovery & High Availability Architecture`,hours:`5 Hours`,type:`Mandatory`,cat:`Technical Architecture`,assignedBy:`Ishdeep Anand (Admin)`,assignedDate:`15-Dec-2025`,dueDate:`20-Jan-2026`,status:`Overdue`,progress:15},
    {name:`Time Management & Deep Work Practices for Knowledge Workers`,hours:`2 Hours`,type:`Optional`,cat:`Professional Skills`,assignedBy:`Isha Patel (HR Operations)`,assignedDate:`01-Jan-2026`,dueDate:`20-Jan-2026`,status:`Completed`,progress:100},
    {name:`Security Awareness & GDPR Compliance 2026`,hours:`2 Hours`,type:`Mandatory`,cat:`Compliance`,assignedBy:`Isha Patel (HR Operations)`,assignedDate:`05-Jan-2026`,dueDate:`28-Jan-2026`,status:`In Progress`,progress:60},
    {name:`Anti-Bribery, Anti-Corruption & FCPA Compliance`,hours:`2 Hours`,type:`Mandatory`,cat:`Governance & Compliance`,assignedBy:`Isha Patel (HR Operations)`,assignedDate:`03-Jan-2026`,dueDate:`28-Jan-2026`,status:`Completed`,progress:100},
    {name:`HIPAA & Health Data Privacy Standards`,hours:`3 Hours`,type:`Mandatory`,cat:`Governance & Compliance`,assignedBy:`Isha Patel (HR Operations)`,assignedDate:`04-Jan-2026`,dueDate:`02-Feb-2026`,status:`Completed`,progress:100}
  ];
  let findProg = (id, name) => (i || []).find(p => (id && p.id === id) || (name && p.name && p.name.trim().toLowerCase() === name.trim().toLowerCase()));
  let isArchivedOrDraft = (id, name) => {
    let m = findProg(id, name);
    if (!m) return !1;
    let ps = m.publicationStatus || m.status || "Published";
    return ps === "Archived" || ps === "Draft";
  };
  let overlayProgMeta = item => {
    let m = findProg(item.id, item.name);
    let cp = cpMap && ((m && cpMap["CO-5039::" + m.id]) || (item.id && cpMap["CO-5039::" + item.id]) || (m && cpMap[m.id]) || (item.id && cpMap[item.id]));
    let sMatch = staticList.find(s => item.name && s.name.toLowerCase() === item.name.toLowerCase());
    let baseStatus = cp ? cp.status : (sMatch ? sMatch.status : (item.status || "Not Started"));
    let baseProgress = cp ? Number(cp.progress) || 0 : (sMatch ? sMatch.progress : (Number(item.progress) || 0));
    if (baseStatus === "Completed") baseProgress = 100;
    let avail = m ? ((m.publicationStatus || m.status) === "Draft" ? "Inactive" : (m.availabilityStatus || (m.isActive === !1 ? "Inactive" : "Active"))) : (item.availabilityStatus || "Active");
    let hoursVal = fmtDurationHM(m || item || 4);
    return {
      ...item,
      id: m ? m.id : item.id,
      name: m ? m.name : item.name,
      hours: hoursVal,
      expectedDurationHours: m ? m.expectedDurationHours : item.expectedDurationHours,
      cat: m ? (m.category || item.cat || "Governance & Compliance") : (item.cat || "Governance & Compliance"),
      category: m ? (m.category || item.cat || "Governance & Compliance") : (item.category || item.cat || "Governance & Compliance"),
      department: m ? (m.department || item.department || "Business Analysis") : (item.department || "Business Analysis"),
      difficultyLevel: m ? (m.difficultyLevel || item.difficultyLevel || "Intermediate") : (item.difficultyLevel || "Intermediate"),
      passingScore: m ? (Number(m.assessment?.passingScore || m.passingScore) || 80) : (Number(item.passingScore) || 80),
      maxAttempts: m ? (Number(m.assessment?.maxAttempts || m.maxAttempts) || 3) : (Number(item.maxAttempts) || 3),
      learningObjectives: m ? (m.learningObjectives || item.learningObjectives) : item.learningObjectives,
      completionRequirements: m ? (m.completionRequirements || m.completionCriteria || item.completionRequirements) : item.completionRequirements,
      resources: m && Array.isArray(m.resources) ? m.resources : item.resources,
      assessment: m && m.assessment ? m.assessment : item.assessment,
      assignedDate: fmtEmpDate(item.assignedDate),
      dueDate: fmtEmpDate(item.dueDate),
      status: baseStatus,
      progress: baseProgress,
      availabilityStatus: avail,
      publicationStatus: m ? (m.publicationStatus || m.status) : "Published"
    };
  };
  let tanyaAssigned = (assignList || []).filter(a => a.employeeId === "emp-3" || a.employeeId === "CO-5039" || (a.employeeName || "").toLowerCase() === "tanya kapoor");
  let dynamicList = (i && i.length > 0) ? i.filter(p => {
    let ps = p.publicationStatus || p.status || "Published";
    return ps !== "Archived" && ps !== "Draft";
  }).map((p, idx) => {
    let asgIdx = tanyaAssigned.findIndex(a => a.programmeId === p.id || (a.programmeName && a.programmeName.toLowerCase() === p.name.toLowerCase()));
    let asg = asgIdx >= 0 ? tanyaAssigned[asgIdx] : null;
    let isNewProg = String(p.id || "").length > 8 && !/^prog-\d{1,2}$/.test(String(p.id || ""));
    let defaultSt = asg ? (asg.status || "Not Started") : (p.id === "prog-4" || p.id === "prog-9" || p.id === "prog-10" ? "Not Started" : (p.id && p.id.length > 10 ? "Not Started" : "In Progress"));
    let defaultPct = asg ? (Number(asg.progress) || (asg.status === "Completed" ? 100 : 0)) : (defaultSt === "Not Started" ? 0 : 40);
    return overlayProgMeta({
      id: p.id,
      name: p.name,
      hours: fmtDurationHM(p),
      expectedDurationHours: p.expectedDurationHours,
      type: p.defaultAssignmentType || "Mandatory",
      cat: p.category || "Governance & Compliance",
      category: p.category || "Governance & Compliance",
      department: p.department || "Business Analysis",
      assignedBy: (asg && asg.assignedBy) || (p.createdBy ? `${p.createdBy} (Admin)` : "Isha Patel (HR Operations)"),
      assignedDate: fmtEmpDate((asg && asg.assignedDate) || p.createdAt || "04-Nov-2026"),
      dueDate: fmtEmpDate((asg && asg.dueDate) || "15-Dec-2026"),
      status: defaultSt,
      progress: defaultPct,
      assessment: p.assessment,
      resources: p.resources,
      passingScore: p.passingScore,
      maxAttempts: p.maxAttempts,
      difficultyLevel: p.difficultyLevel,
      learningObjectives: p.learningObjectives,
      completionRequirements: p.completionRequirements || p.completionCriteria,
      _sortRank: asgIdx >= 0 ? asgIdx : (isNewProg ? 100 + idx : 1000 + idx)
    });
  }).sort((a, b) => a._sortRank - b._sortRank) : [];
  let visibleStatic = staticList.filter(s => !isArchivedOrDraft(null, s.name)).map(overlayProgMeta);
  let displayList = dynamicList.length > 0 ? [
    ...dynamicList,
    ...visibleStatic.filter(s => !dynamicList.some(d => d.name.toLowerCase() === s.name.toLowerCase()))
  ] : visibleStatic;
  let uniqueCats = Array.from(new Set(displayList.map(x => x.cat).filter(Boolean)));
  let filteredList = displayList.filter(item => {
    if (categoryFilter !== "All Categories" && item.cat !== categoryFilter) return !1;
    if (searchQuery.trim()) {
      let q = searchQuery.trim().toLowerCase();
      return (item.name || "").toLowerCase().includes(q) || (item.cat || "").toLowerCase().includes(q) || (item.assignedBy || "").toLowerCase().includes(q);
    }
    return !0;
  });
  let totalCount = displayList.length;
  let notStartedCount = displayList.filter(x => x.status === "Not Started").length;
  let inProgressCount = displayList.filter(x => x.status === "In Progress").length;
  let overdueCount = displayList.filter(x => x.status === "Overdue").length;
  let completedCount = displayList.filter(x => x.status === "Completed").length;
  return (0,P.jsxs)(`div`,{className:`p-6 space-y-6 max-w-[1600px] mx-auto w-full`,children:[(0,P.jsxs)(`div`,{className:`grid grid-cols-1 sm:grid-cols-5 gap-4`,children:[(0,P.jsxs)(`div`,{className:`bg-white border border-slate-200 rounded-xl p-4 shadow-sm`,children:[(0,P.jsx)(`div`,{className:`text-[11px] font-bold text-slate-400 uppercase`,children:`Total Assigned`}),(0,P.jsx)(`div`,{className:`text-2xl font-bold text-slate-900 mt-1 tabular-nums`,children:totalCount})]}),(0,P.jsxs)(`div`,{className:`bg-white border border-slate-200 rounded-xl p-4 shadow-sm`,children:[(0,P.jsx)(`div`,{className:`text-[11px] font-bold text-slate-400 uppercase`,children:`Not Started`}),(0,P.jsx)(`div`,{className:`text-2xl font-bold text-slate-700 mt-1 tabular-nums`,children:notStartedCount})]}),(0,P.jsxs)(`div`,{className:`bg-white border border-slate-200 rounded-xl p-4 shadow-sm`,children:[(0,P.jsx)(`div`,{className:`text-[11px] font-bold text-slate-400 uppercase`,children:`In Progress`}),(0,P.jsx)(`div`,{className:`text-2xl font-bold text-blue-600 mt-1 tabular-nums`,children:inProgressCount})]}),(0,P.jsxs)(`div`,{className:`bg-white border border-slate-200 rounded-xl p-4 shadow-sm`,children:[(0,P.jsx)(`div`,{className:`text-[11px] font-bold text-slate-400 uppercase`,children:`Overdue`}),(0,P.jsx)(`div`,{className:`text-2xl font-bold text-rose-600 mt-1 tabular-nums`,children:overdueCount})]}),(0,P.jsxs)(`div`,{className:`bg-white border border-slate-200 rounded-xl p-4 shadow-sm`,children:[(0,P.jsx)(`div`,{className:`text-[11px] font-bold text-slate-400 uppercase`,children:`Completed`}),(0,P.jsx)(`div`,{className:`text-2xl font-bold text-emerald-600 mt-1 tabular-nums`,children:completedCount})]})]}),(0,P.jsxs)(`div`,{className:`bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden`,children:[(0,P.jsxs)(`div`,{className:`p-4 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4`,children:[(0,P.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,P.jsx)(`h2`,{className:`font-bold text-slate-900 text-base`,children:`My Training`}),(0,P.jsx)(`span`,{className:`bg-blue-50 text-blue-700 text-xs font-bold px-2 py-0.5 rounded-full`,children:filteredList.length===0?`0 Trainings`:`1 - ${filteredList.length} of ${filteredList.length} Trainings`})]}),(0,P.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,P.jsx)(`input`,{type:`text`,value:searchQuery,onChange:ev=>setSearchQuery(ev.target.value),placeholder:`Filter Results...`,className:`bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 w-64`}),(0,P.jsxs)(`select`,{value:categoryFilter,onChange:ev=>setCategoryFilter(ev.target.value),className:`bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-700 font-medium`,children:[(0,P.jsx)(`option`,{value:`All Categories`,children:`All Categories`}),uniqueCats.map(cat=>(0,P.jsx)(`option`,{value:cat,children:cat},cat))]})]})]}),(0,P.jsx)(`div`,{className:`overflow-x-auto`,children:(0,P.jsxs)(`table`,{className:`w-full text-left border-collapse`,children:[(0,P.jsx)(`thead`,{children:(0,P.jsxs)(`tr`,{className:`border-b border-slate-200 text-[11px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50/50`,children:[(0,P.jsx)(`th`,{className:`py-3 px-4 w-12`,children:`No.`}),(0,P.jsx)(`th`,{className:`py-3 px-4`,children:`Training Name`}),(0,P.jsx)(`th`,{className:`py-3 px-4`,children:`Category`}),(0,P.jsx)(`th`,{className:`py-3 px-4`,children:`Assigned By`}),(0,P.jsx)(`th`,{className:`py-3 px-4`,children:`Assigned Date`}),(0,P.jsx)(`th`,{className:`py-3 px-4`,children:`Due Date`}),(0,P.jsx)(`th`,{className:`py-3 px-4`,children:`Status`}),(0,P.jsx)(`th`,{className:`py-3 px-4 w-32`,children:`Progress`}),(0,P.jsx)(`th`,{className:`py-3 px-4 text-right`,children:`Actions`})]})}),(0,P.jsx)(`tbody`,{className:`divide-y divide-slate-100 text-sm`,children:filteredList.length===0?(0,P.jsx)(`tr`,{children:(0,P.jsx)(`td`,{colSpan:9,className:`py-8 text-center text-xs text-slate-500`,children:`No assigned trainings match your current filters.`})}):filteredList.map((t,n)=>(0,P.jsxs)(`tr`,{className:`hover:bg-slate-50/80 transition-colors cursor-pointer`,onClick:()=>e(t),children:[(0,P.jsx)(`td`,{className:`py-3 px-4 text-slate-500 tabular-nums`,children:n+1}),(0,P.jsxs)(`td`,{className:`py-3 px-4`,children:[(0,P.jsx)(`div`,{className:`font-bold text-slate-900 text-xs hover:text-blue-600`,children:t.name}),(0,P.jsxs)(`div`,{className:`flex items-center gap-2 mt-1 text-[11px] text-slate-500`,children:[(0,P.jsxs)(`span`,{children:[`⏱ `,t.hours]})]})]}),(0,P.jsx)(`td`,{className:`py-3 px-4`,children:(0,P.jsx)(`span`,{className:`bg-sky-50 text-sky-700 border border-sky-200 px-2.5 py-0.5 rounded text-[11px] font-medium`,children:t.cat})}),(0,P.jsx)(`td`,{className:`py-3 px-4`,children:(0,P.jsx)(`div`,{className:`text-xs font-semibold text-slate-900`,children:t.assignedBy})}),(0,P.jsx)(`td`,{className:`py-3 px-4 text-slate-600 text-xs tabular-nums`,children:t.assignedDate}),(0,P.jsx)(`td`,{className:`py-3 px-4 text-slate-600 text-xs tabular-nums font-medium`,children:t.dueDate}),(0,P.jsx)(`td`,{className:`py-3 px-4`,children:(0,P.jsxs)(`div`,{className:`flex items-center gap-1.5 flex-wrap`,children:[(0,P.jsxs)(`span`,{className:`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium border whitespace-nowrap ${t.status===`Completed`?`bg-emerald-50 text-emerald-700 border-emerald-200`:t.status===`In Progress`?`bg-blue-50 text-blue-700 border-blue-200`:t.status===`Overdue`?`bg-rose-50 text-rose-700 border-rose-200`:`bg-slate-100 text-slate-600 border-slate-200`}`,children:[t.status===`Completed`?(0,P.jsx)(D,{className:`w-3 h-3 text-emerald-500`}):t.status===`In Progress`?(0,P.jsx)(le,{className:`w-3 h-3 text-blue-500`}):(0,P.jsx)(Ve,{className:`w-3 h-3 text-slate-500`}),(0,P.jsx)(`span`,{children:t.status})]}),t.availabilityStatus===`Inactive`&&(0,P.jsx)(`span`,{className:`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-600 border border-slate-200`,children:`Inactive`})]})}),(0,P.jsxs)(`td`,{className:`py-3 px-4 w-32`,children:[(0,P.jsx)(`div`,{className:`flex justify-between text-[11px] font-mono font-bold mb-1 text-slate-700`,children:(0,P.jsxs)(`span`,{children:[t.progress,`%`]})}),(0,P.jsx)(`div`,{className:`w-full bg-slate-100 h-2 rounded-full overflow-hidden`,children:(0,P.jsx)(`div`,{className:`h-full rounded-full ${t.progress===100?`bg-emerald-500`:`bg-blue-600`}`,style:{width:`${t.progress}%`}})})]}),(0,P.jsx)(`td`,{className:`py-3 px-4 text-right`,onClick:e=>e.stopPropagation(),children:(0,P.jsx)(`button`,{onClick:()=>e(t),className:`p-1.5 rounded text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors`,title:`View Course`,children:(0,P.jsx)(pe,{className:`w-4 h-4`})})})]},t.id||n))})]})})]})]})}
function mt({course:e,programmes:progList,courseProgress:cpMap,skills:skillsConfig,employees:empList,employeeSkills:empSkillsMap,issuedCertificates:dynCerts,onUpdateCourseProgress:onSyncProg,onBack:t}){
  let[n,r]=(0,l.useState)("overview");
  let[showFeedbackModal,setShowFeedbackModal]=(0,l.useState)(!1);
  let[feedbackText,setFeedbackText]=(0,l.useState)("");
  let[feedbackSent,setFeedbackSent]=(0,l.useState)(!1);
  let currentEmp=(Array.isArray(empList)?empList:[]).find(x=>x.id==="emp-3"||x.code==="CO-5039"||(x.firstName==="Tanya"&&x.lastName==="Kapoor"))||{id:"emp-3",code:"CO-5039",firstName:"Tanya",lastName:"Kapoor",designation:"Business Analyst",employeeRole:"Analyst",businessUnit:"Enterprise Solutions",experience:"3Y 11M",about:"Detail-oriented business analyst.",skills:["Business Analysis","SQL","Figma"],badges:[],seatingLocation:"Floor 1",extensionNumber:"105"};
  let empSkillRecs=resolveEmpSkillRecords(currentEmp,empSkillsMap,skillsConfig);
  let empCerts=(Array.isArray(dynCerts)?dynCerts:[]).filter(cert=>canonicalEmpSkillKey(cert.employeeId)==="CO-5039");
  let fmtDate = d => {
    if (!d || typeof d !== "string") return d || "-";
    let m = d.trim().match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (m) {
      let ms = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
      return `${m[3]}-${ms[parseInt(m[2], 10) - 1] || m[2]}-${m[1]}`;
    }
    return d.trim();
  };
  let c_init = e || {};
  let liveProg = (progList || []).find(p => (c_init.id && p.id === c_init.id) || (c_init.name && p.name && p.name.trim().toLowerCase() === c_init.name.trim().toLowerCase())) || null;
  let c = {
    id: "prog-1",
    name: "CollabCRM Recruitment & Client Portal Workflows",
    category: "Recruitment & HR Operations",
    department: "Business Analysis",
    difficultyLevel: "Intermediate",
    expectedDurationHours: 18,
    passingScore: 80,
    maxAttempts: 3,
    assignedBy: "Isha Patel (HR Operations)",
    assignedDate: "04-Nov-2026",
    dueDate: "15-Dec-2026",
    ...c_init,
    ...(liveProg || {}),
    status: c_init.status || "Not Started",
    progress: c_init.progress != null ? Number(c_init.progress) || 0 : 0,
    assignedBy: c_init.assignedBy || (liveProg?.createdBy ? `${liveProg.createdBy} (Admin)` : "Isha Patel (HR Operations)"),
    assignedDate: fmtDate(c_init.assignedDate || liveProg?.createdAt || "04-Nov-2026"),
    dueDate: fmtDate(c_init.dueDate || "15-Dec-2026")
  };
  let progKey = liveProg ? liveProg.id : (c.id || c.name || "prog-1");
  let savedCp = cpMap && (cpMap["CO-5039::" + progKey] || cpMap[progKey]);
  let livePubStatus = liveProg ? (liveProg.publicationStatus || liveProg.status || "Published") : (c_init.publicationStatus || "Published");
  let liveAvailStatus = liveProg ? (livePubStatus === "Draft" ? "Inactive" : (liveProg.availabilityStatus || (liveProg.isActive === !1 ? "Inactive" : "Active"))) : (c_init.availabilityStatus || "Active");
  let isCourseArchived = livePubStatus === "Archived";
  let isCourseInactive = liveAvailStatus === "Inactive";

  let resources = (liveProg && Array.isArray(liveProg.resources))
    ? liveProg.resources.filter(res => res && (res.title || res.url || res.type))
    : (Array.isArray(c.resources)
        ? c.resources.filter(res => res && (res.title || res.url || res.type))
        : [
            {id:"res-1",type:"Video / YouTube",title:"Module 1: Architecture Video Lecture",url:"https://youtube.com/watch?v=sample-video"},
            {id:"res-2",type:"PDF Document",title:"Module 2: Standard Operating Procedure Handbook",url:"https://docs.collabcrm.internal/sample-handbook.pdf"}
          ]);

  let defaultQuestions = DEFAULT_ASSESSMENT_QUESTIONS;

  let isAssessmentEnabled = c?.assessment ? c.assessment.enabled !== false : (c?.hasAssessment !== false);
  let passingScore = Number(c?.assessment?.passingScore || c.passingScore) || 80;
  let maxAttempts = Number(c?.assessment?.maxAttempts || c.maxAttempts) || 3;
  let assessment = (c.assessment && c.assessment.questions) ? c.assessment : {
    enabled: isAssessmentEnabled,
    title: c.assessment?.title || "Final Training Assessment",
    description: c.assessment?.description || "Complete the following questions to evaluate your understanding of this training.",
    passingScore: passingScore,
    maxAttempts: maxAttempts,
    questions: defaultQuestions
  };
  let questions = (assessment.questions && assessment.questions.length > 0) ? assessment.questions : (isAssessmentEnabled ? defaultQuestions : []);
  let totalAssessmentMarks = questions.reduce((sum, q) => sum + (Number(q.marks) || 0), 0);

  let initialCompletedMap = (() => {
    if (savedCp && savedCp.completedResources) return savedCp.completedResources;
    let initSt = savedCp ? savedCp.status : c.status;
    let initPct = savedCp ? Number(savedCp.progress) || 0 : Number(c.progress) || 0;
    if (initSt === "Completed" || initPct === 100) {
      let out = {};
      resources.forEach(item => { out[item.id] = true; });
      return out;
    }
    if ((initPct > 0 || initSt === "In Progress") && resources.length > 0) {
      return { [resources[0].id]: true };
    }
    return {};
  })();
  let[viewedResource, setViewedResource]=(0,l.useState)(null);
  let[completedResources, setCompletedResources]=(0,l.useState)(initialCompletedMap);
  let[submittedDocs, setSubmittedDocs]=(0,l.useState)(Array.isArray(savedCp?.submittedDocs)?savedCp.submittedDocs:[]);
  let[docInputName, setDocInputName]=(0,l.useState)("");
  let[managerApprovalStatus, setManagerApprovalStatus]=(0,l.useState)(savedCp?.managerApprovalStatus || (c.status==="Completed"?"Approved":"Not Requested"));
  let[isSubmitted, setIsSubmitted]=(0,l.useState)(savedCp ? savedCp.status === "Completed" : (c.status === "Completed" || Number(c.progress) === 100));
  let[userAnswers, setUserAnswers]=(0,l.useState)({});
  let[attemptHistory, setAttemptHistory]=(0,l.useState)(savedCp?.attemptHistory || []);
  let[latestResult, setLatestResult]=(0,l.useState)(savedCp?.latestResult || (c.status === "Completed" && isAssessmentEnabled ? { isPassed: true, scorePercentage: Math.max(passingScore + 5, 95), earnedMarks: totalAssessmentMarks, totalMarks: totalAssessmentMarks } : null));
  let[submittedState, setSubmittedState]=(0,l.useState)(Boolean(savedCp?.latestResult || (c.status === "Completed" && isAssessmentEnabled)));

  let reqList = parseCompReqList(c);
  let hasChecklist = reqList.length > 0 || Boolean(c.reviewerApprovalRequired || liveProg?.reviewerApprovalRequired);
  let reqVideos = reqList.includes("Watch all required videos");
  let reqAssess = reqList.includes("Pass the assessment");
  let reqDocs = reqList.includes("Submit any required documents");
  let reqManager = reqList.includes("Get approval from the manager") || Boolean(c.reviewerApprovalRequired || liveProg?.reviewerApprovalRequired);
  let isCertEnabled = Boolean(liveProg ? liveProg.certificateGeneration : c.certificateGeneration);
  let isSkillEnabled = Boolean(liveProg ? liveProg.addSkillToProfile : c.addSkillToProfile);
  let configuredSkillIds = Array.isArray(liveProg?.selectedSkillIds) ? liveProg.selectedSkillIds : (Array.isArray(c.selectedSkillIds) ? c.selectedSkillIds : []);
  let configuredSkillLevel = (liveProg?.skillLevel ?? c.skillLevel) || "";
  let [awardFeedback, setAwardFeedback] = (0,l.useState)(null);

  let doneCount = resources.filter(res => completedResources[res.id]).length;
  let allResourcesDone = resources.length > 0 && doneCount === resources.length;
  let modulePct = resources.length > 0 ? Math.round((doneCount / resources.length) * 100) : (isSubmitted ? 100 : 0);
  let stepVideosDone = resources.length === 0 || allResourcesDone;
  let stepAssessDone = !isAssessmentEnabled || Boolean(latestResult?.isPassed);
  let stepDocsDone = !reqDocs || submittedDocs.length > 0;
  let stepManagerDone = !reqManager || managerApprovalStatus === "Approved";
  let preManagerStepsDone = hasChecklist ? ((!reqVideos || stepVideosDone) && (!reqAssess || stepAssessDone) && stepDocsDone) : (stepVideosDone && stepAssessDone);
  let allRequiredStepsDone = hasChecklist ? (preManagerStepsDone && stepManagerDone) : preManagerStepsDone;

  let attemptsUsed = attemptHistory.length;
  let hasAttemptsRemaining = attemptsUsed < maxAttempts;
  let attemptsExhausted = isAssessmentEnabled && !latestResult?.isPassed && attemptsUsed >= maxAttempts;
  let expectedHoursLabel = fmtDurationHM(c.expectedDurationHours || c.expectedDuration || c.hours || 4);
  let courseStatusLabel = isSubmitted ? "Completed ✓" : ((reqManager && preManagerStepsDone && !stepManagerDone) ? "Pending Approval" : (latestResult?.isPassed ? "Assessment Passed ✓" : (attemptsExhausted ? "Re-learning Required" : ((allResourcesDone && isAssessmentEnabled) ? "Ready for Assessment" : (doneCount > 0 || attemptHistory.length > 0 || submittedDocs.length > 0 || c.status === "In Progress" ? "In Progress" : "Not Started")))));

  let resolveCourseState=(nextComp, nextRes, nextDocs, nextAppr, nextHistLen)=>{
    let dc = resources.filter(item => nextComp[item.id]).length;
    let mPct = resources.length > 0 ? Math.round((dc / resources.length) * 100) : 0;
    let vOk = resources.length === 0 || (resources.length > 0 && dc === resources.length);
    let aOk = !isAssessmentEnabled || Boolean(nextRes?.isPassed);
    let dOk = !reqDocs || (Array.isArray(nextDocs) && nextDocs.length > 0);
    let mOk = !reqManager || nextAppr === "Approved";
    let preOk = hasChecklist ? ((!reqVideos || vOk) && (!reqAssess || aOk) && dOk) : (vOk && aOk);
    let allOk = hasChecklist ? (preOk && mOk) : preOk;
    if(allOk) return { status:"Completed", progress:100, managerApprovalStatus: reqManager ? "Approved" : nextAppr };
    if(reqManager && preOk && nextAppr !== "Approved") return { status:"Under Review", progress:Math.max(mPct, 90), managerApprovalStatus:"Pending Approval" };
    let usedLen = typeof nextHistLen === "number" ? nextHistLen : attemptHistory.length;
    if(isAssessmentEnabled && nextRes && !nextRes.isPassed && usedLen >= maxAttempts) {
      return { status:"Failed", progress:Math.min(95, Math.max(mPct, 80)), managerApprovalStatus: nextAppr };
    }
    let started = dc > 0 || (nextDocs && nextDocs.length > 0) || Boolean(nextRes);
    let prog = Math.min(95, Math.max(mPct, nextRes?.isPassed ? 75 : (nextDocs && nextDocs.length > 0 ? 50 : mPct)));
    return { status: started ? "In Progress" : "Not Started", progress: prog, managerApprovalStatus: nextAppr };
  };

  let syncCourseState=async (nextStatus, nextPct, nextCompletedMap, nextResult, nextHistory, extra)=>{
    if(onSyncProg){
      let res = await onSyncProg(liveProg || c, nextStatus, nextPct, nextCompletedMap, nextResult, nextHistory, extra || { submittedDocs, managerApprovalStatus });
      if(res?.awardedRecognition) setAwardFeedback(res.awardedRecognition);
      return res;
    }
    return null;
  };

  let normalizeResUrl = raw => {
    let u = String(raw || "").trim();
    if (!u) return "";
    if (/^(https?:\/\/|data:|blob:|\/)/i.test(u)) return u;
    return "https://" + u;
  };
  let FALLBACK_YT_IDS = ["8mAITcNt710", "HXV3zeQKqGY"];
  let extractYoutubeId = rawUrl => {
    let u = String(rawUrl || "");
    let m = u.match(/(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{11})(?:[?&#/]|$)/);
    if (m && m[1]) return m[1];
    return null;
  };
  let getResourceViewerMeta = res => {
    let url = normalizeResUrl(res?.url);
    let t = String(res?.type || "").toLowerCase();
    let ytId = extractYoutubeId(url);
    let isInternalPlaceholder = /collabcrm\.internal|sample-video|sample-handbook|playbook\.pdf/i.test(url);
    if (ytId) {
      return { kind: "youtube", url, embedUrl: "https://www.youtube.com/embed/" + ytId + "?rel=0", isInternalPlaceholder: false };
    }
    if (t.includes("video") || t.includes("youtube") || url.includes("youtube.com") || url.includes("youtu.be")) {
      let fallbackIdx = /business|analyst|sql|crm|analytics|data/i.test((res?.title || "") + " " + (c?.name || "")) ? 1 : 0;
      let fbId = FALLBACK_YT_IDS[fallbackIdx];
      let fbUrl = "https://www.youtube.com/watch?v=" + fbId;
      return { kind: "youtube", url: url && !isInternalPlaceholder && !url.includes("watch?v=incident-") ? url : fbUrl, embedUrl: "https://www.youtube.com/embed/" + fbId + "?rel=0", isInternalPlaceholder: false };
    }
    if (/\.(mp4|webm|ogg)(\?|#|$)/i.test(url) || url.includes("vimeo.com")) {
      let vimeoMatch = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
      if (vimeoMatch) return { kind: "iframe-video", url, embedUrl: "https://player.vimeo.com/video/" + vimeoMatch[1], isInternalPlaceholder: false };
      return { kind: "html5-video", url, embedUrl: url, isInternalPlaceholder: false };
    }
    if (t.includes("pdf") || t.includes("doc") || /\.(pdf|docx?|pptx?)(\?|#|$)/i.test(url) || url.includes("docs.google.com") || url.includes("drive.google.com") || url.startsWith("data:application/pdf")) {
      let docUrl = url;
      if (url.includes("drive.google.com/file/d/")) docUrl = url.replace(/\/view.*$/, "/preview");
      return { kind: "document", url, embedUrl: docUrl, isInternalPlaceholder };
    }
    return { kind: "link", url, embedUrl: url, isInternalPlaceholder };
  };
  let firstIncompleteIdx = resources.findIndex(item => !completedResources[item.id]);
  let handleToggleResource=(resId)=>{
    if(isCourseInactive || isCourseArchived) return;
    let targetIdx = resources.findIndex(item => item.id === resId);
    if(targetIdx === -1 || targetIdx !== firstIncompleteIdx) return;
    let next = {...completedResources, [resId]: true};
    let dCount = resources.filter(res => next[res.id]).length;
    let allDone = resources.length > 0 && dCount === resources.length;
    let resolved = resolveCourseState(next, latestResult, submittedDocs, managerApprovalStatus);
    setCompletedResources(next);
    if(resolved.status === "Completed") setIsSubmitted(true);
    if(resolved.managerApprovalStatus !== managerApprovalStatus) setManagerApprovalStatus(resolved.managerApprovalStatus);
    syncCourseState(resolved.status, resolved.progress, next, latestResult, attemptHistory, { submittedDocs, managerApprovalStatus: resolved.managerApprovalStatus });
    if(allDone && isAssessmentEnabled){
      setViewedResource(null);
      r("assessment");
    }
  };

  let handleSubmitDocument=()=>{
    if(isCourseInactive || isCourseArchived) return;
    let cleanName = docInputName.trim();
    if(!cleanName) return;
    let stamp = new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }).replace(/ /g, "-");
    let nextDocs = [...submittedDocs, { id:"doc-"+Date.now(), name: cleanName, submittedAt: stamp }];
    let resolved = resolveCourseState(completedResources, latestResult, nextDocs, managerApprovalStatus);
    setSubmittedDocs(nextDocs);
    setDocInputName("");
    if(resolved.status === "Completed") setIsSubmitted(true);
    if(resolved.managerApprovalStatus !== managerApprovalStatus) setManagerApprovalStatus(resolved.managerApprovalStatus);
    syncCourseState(resolved.status, resolved.progress, completedResources, latestResult, attemptHistory, { submittedDocs: nextDocs, managerApprovalStatus: resolved.managerApprovalStatus });
  };

  let handleSelectAnswer=(qId, val)=>{
    if(isCourseInactive || isCourseArchived) return;
    setUserAnswers(prev=>({...prev, [qId]: val}));
  };

  let handleToggleMultiChoice=(qId, optId)=>{
    if(isCourseInactive || isCourseArchived) return;
    let current = Array.isArray(userAnswers[qId]) ? [...userAnswers[qId]] : [];
    if(current.includes(optId)){
      current = current.filter(id=>id!==optId);
    } else {
      current.push(optId);
    }
    setUserAnswers(prev=>({...prev, [qId]: current}));
  };

  let evaluateAssessment=()=>{
    if(isCourseInactive || isCourseArchived || attemptsUsed >= maxAttempts) return;
    let resultRecord = gradeAssessmentSubmission(questions, userAnswers, passingScore, attemptHistory.length + 1);

    let nextHist = [resultRecord, ...attemptHistory];
    let resolved = resolveCourseState(completedResources, resultRecord, submittedDocs, managerApprovalStatus, nextHist.length);
    setLatestResult(resultRecord);
    setAttemptHistory(nextHist);
    setSubmittedState(true);
    setIsSubmitted(resolved.status === "Completed");
    if(resolved.managerApprovalStatus !== managerApprovalStatus) setManagerApprovalStatus(resolved.managerApprovalStatus);
    syncCourseState(resolved.status, resolved.progress, completedResources, resultRecord, nextHist, { submittedDocs, managerApprovalStatus: resolved.managerApprovalStatus });
  };

  let retakeAssessment=()=>{
    if(isCourseInactive || isCourseArchived || !hasAttemptsRemaining) return;
    setUserAnswers({});
    setSubmittedState(false);
    setLatestResult(null);
  };

  let restartProgramme=()=>{
    if(isCourseInactive || isCourseArchived) return;
    setCompletedResources({});
    setViewedResource(null);
    setUserAnswers({});
    setAttemptHistory([]);
    setLatestResult(null);
    setSubmittedState(false);
    setIsSubmitted(false);
    setManagerApprovalStatus("Not Requested");
    syncCourseState("In Progress", 0, {}, null, [], { submittedDocs, managerApprovalStatus: "Not Requested" });
    r("resources");
  };

  if (isCourseArchived) {
    return (0,P.jsxs)("div",{className:"w-full p-6 space-y-6 max-w-[1600px] mx-auto",children:[
      (0,P.jsxs)("div",{className:"flex items-center justify-between",children:[
        (0,P.jsxs)("button",{onClick:t,className:"flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 px-3 py-1.5 rounded-lg shadow-sm hover:bg-slate-50 transition-colors",children:[
          (0,P.jsx)("span",{children:"←"}),
          (0,P.jsx)("span",{children:"Back to My Training"})
        ]}),
        (0,P.jsx)("span",{className:"text-xs text-slate-500 font-medium",children:"Employee Learning Portal"})
      ]}),
      (0,P.jsxs)("div",{className:"bg-white border border-slate-200 rounded-xl p-10 text-center space-y-3 shadow-sm",children:[
        (0,P.jsx)("h2",{className:"text-base font-bold text-slate-900",children:"Training Archived"}),
        (0,P.jsx)("p",{className:"text-xs text-slate-500 max-w-md mx-auto",children:"This training has been archived and is only visible on the management side."})
      ]})
    ]});
  }

  return (0,P.jsxs)("div",{className:"w-full p-6 space-y-6 max-w-[1600px] mx-auto",children:[
    // Top Breadcrumb & Back Row
    (0,P.jsxs)("div",{className:"flex items-center justify-between",children:[
      (0,P.jsxs)("button",{onClick:t,className:"flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 px-3 py-1.5 rounded-lg shadow-sm hover:bg-slate-50 transition-colors",children:[
        (0,P.jsx)("span",{children:"←"}),
        (0,P.jsx)("span",{children:"Back to My Training"})
      ]}),
      (0,P.jsx)("span",{className:"text-xs text-slate-500 font-medium",children:"Employee Learning Portal"})
    ]}),

    isCourseInactive && (0,P.jsx)("div",{className:"bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-xs font-semibold text-amber-800",children:isSubmitted ? "This training is Completed and currently Inactive. You can view it, but no actions can be performed inside." : "This training is currently Inactive. Viewing only — no actions can be performed inside."}),

    // Main 2-Column Sidebar Layout matching Management Programme Detail
    (0,P.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-6 items-start",children:[
      // Left Sidebar Card (lg:col-span-1, Screenshot 4 Layout)
      (0,P.jsxs)("div",{className:"lg:col-span-1 bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden",children:[
        (0,P.jsxs)("div",{className:"p-6 text-center",children:[
          (0,P.jsxs)("div",{className:"flex items-center justify-between gap-1.5 mb-3",children:[
            (0,P.jsx)("span",{className:"inline-block border border-slate-300 text-slate-600 text-[10px] font-bold uppercase tracking-wide px-2.5 py-0.5 rounded bg-white",children:String(courseStatusLabel||"Not Started").toUpperCase()}),
            isCourseInactive && (0,P.jsx)("span",{className:"bg-slate-100 text-slate-600 border border-slate-200 text-[10px] font-bold uppercase px-2 py-0.5 rounded",children:"INACTIVE"})
          ]}),
          (0,P.jsx)("div",{className:"w-24 h-24 bg-slate-100 rounded-full mx-auto flex items-center justify-center text-slate-300",children:
            (0,P.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",className:"w-12 h-12",children:[
              (0,P.jsx)("circle",{cx:"12",cy:"8",r:"3.5"}),
              (0,P.jsx)("path",{d:"M5 19c0-3.2 3.1-5 7-5s7 1.8 7 5",strokeLinecap:"round"})
            ]})
          }),
          (0,P.jsx)("h2",{className:"font-bold text-slate-900 text-base mt-3 leading-snug",children:currentEmp.firstName+" "+currentEmp.lastName}),
          (0,P.jsx)("div",{className:"text-xs text-slate-500 mt-0.5",children:currentEmp.designation || "Business Analyst"}),
          (0,P.jsx)("div",{className:"mt-2 flex items-center justify-center gap-1.5 flex-wrap",children:[
            (0,P.jsx)("span",{className:"bg-white text-slate-600 text-[11px] font-medium px-3 py-0.5 rounded-full border border-slate-200",children:currentEmp.employeeRole || "Analyst"})
          ]}),
          (0,P.jsx)("div",{className:"mt-4",children:
            !isAssessmentEnabled ? (
              (allRequiredStepsDone || isSubmitted) ? (0,P.jsx)("div",{className:"w-full bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-lg py-2 text-xs font-semibold text-center",children:"Training Completed ✓"}):
              (reqManager && preManagerStepsDone && !stepManagerDone) ? (0,P.jsx)("div",{className:"w-full bg-amber-50 border border-amber-200 text-amber-800 rounded-lg py-2 text-xs font-semibold text-center",children:"Pending Manager Approval"}):
              (0,P.jsx)("button",{type:"button",disabled:isCourseInactive,onClick:()=>!isCourseInactive&&r(allResourcesDone?"overview":"resources"),style:isCourseInactive?{opacity:0.5}:undefined,className:"w-full bg-white text-blue-600 border border-blue-200 rounded-lg py-2 text-xs font-semibold transition-colors " + (isCourseInactive?"cursor-not-allowed":"hover:bg-blue-50"),children:allResourcesDone?"Complete Remaining Steps →":"Start Learning Modules →"})
            ) : (
              (latestResult?.isPassed && allRequiredStepsDone && isCertEnabled) ? (0,P.jsx)("button",{type:"button",disabled:isCourseInactive,onClick:()=>!isCourseInactive&&alert("Downloading Certificate PDF for " + c.name + "..."),style:isCourseInactive?{opacity:0.5}:undefined,className:"w-full bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg py-2 text-xs font-semibold transition-colors " + (isCourseInactive?"cursor-not-allowed":"hover:bg-emerald-100"),children:"Download Certificate 🎓"}):
              (latestResult?.isPassed && allRequiredStepsDone) ? (0,P.jsx)("div",{className:"w-full bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-lg py-2 text-xs font-semibold text-center",children:"Training Completed ✓"}):
              (reqManager && preManagerStepsDone && !stepManagerDone) ? (0,P.jsx)("div",{className:"w-full bg-amber-50 border border-amber-200 text-amber-800 rounded-lg py-2 text-xs font-semibold text-center",children:"Pending Manager Approval"}):
              latestResult?.isPassed ? (0,P.jsx)("button",{type:"button",disabled:isCourseInactive,onClick:()=>!isCourseInactive&&r("overview"),style:isCourseInactive?{opacity:0.5}:undefined,className:"w-full bg-white text-blue-600 border border-blue-200 rounded-lg py-2 text-xs font-semibold transition-colors " + (isCourseInactive?"cursor-not-allowed":"hover:bg-blue-50"),children:"Complete Remaining Steps →"}):
              attemptsExhausted ? (0,P.jsx)("button",{type:"button",disabled:isCourseInactive,onClick:restartProgramme,style:isCourseInactive?{opacity:0.5}:undefined,className:"w-full bg-rose-50 text-rose-700 border border-rose-200 rounded-lg py-2 text-xs font-semibold transition-colors " + (isCourseInactive?"cursor-not-allowed":"hover:bg-rose-100"),children:"Go Through Training Again ↺"}):
              (0,P.jsx)("button",{type:"button",disabled:isCourseInactive,onClick:()=>!isCourseInactive&&r("assessment"),style:isCourseInactive?{opacity:0.5}:undefined,className:"w-full bg-white text-blue-600 border border-blue-200 rounded-lg py-2 text-xs font-semibold transition-colors " + (isCourseInactive?"cursor-not-allowed":"hover:bg-blue-50"),children:"Take Assessment →"})
            )
          })
        ]}),

        (0,P.jsxs)("div",{className:"border-t border-slate-200 divide-y divide-slate-100 text-xs",children:[
          (0,P.jsxs)("div",{className:"px-5 py-4",children:[
            (0,P.jsx)("div",{className:"text-slate-400 font-medium mb-1.5",children:"About Me"}),
            (0,P.jsx)("div",{className:"text-slate-700 leading-relaxed",children:currentEmp.about || "Detail-oriented business analyst."}),
            (0,P.jsxs)("div",{className:"text-[11px] text-slate-500 mt-2 space-y-0.5",children:[
              (0,P.jsxs)("div",{children:["Course: ",(0,P.jsx)("span",{className:"font-semibold text-slate-700",children:c.name})]}),
              (0,P.jsxs)("div",{children:["Assigned By: ",(0,P.jsx)("span",{className:"font-semibold text-slate-700",children:c.assignedBy || "Ishdeep Anand"})]})
            ]})
          ]}),
          (0,P.jsxs)("div",{className:"px-5 py-4",children:[
            (0,P.jsx)("div",{className:"text-slate-400 font-medium mb-1.5",children:"Business Unit"}),
            (0,P.jsxs)("div",{className:"flex items-center gap-2 font-bold text-slate-900",children:[
              (0,P.jsx)("span",{className:"w-4 h-4 rounded-sm flex items-center justify-center text-[10px] font-bold bg-gradient-to-tr from-blue-600 via-purple-500 to-amber-400 text-white",children:"◆"}),
              (0,P.jsx)("span",{children:currentEmp.businessUnit || "Enterprise Solutions"})
            ]})
          ]}),
          (0,P.jsxs)("div",{className:"px-5 py-4",children:[
            (0,P.jsx)("div",{className:"text-slate-400 font-medium mb-2",children:"Experience"}),
            (0,P.jsxs)("div",{className:"space-y-1.5",children:[
              (0,P.jsxs)("div",{className:"flex justify-between items-center",children:[
                (0,P.jsx)("span",{className:"text-slate-600",children:"Previous"}),
                (0,P.jsx)("span",{className:"font-bold text-slate-900",children:currentEmp.experience || "3Y 11M"})
              ]}),
              (0,P.jsxs)("div",{className:"flex justify-between items-center",children:[
                (0,P.jsx)("span",{className:"text-slate-600",children:"At CollabCRM Demo Account"}),
                (0,P.jsx)("span",{className:"font-bold text-slate-900",children:"20D"})
              ]}),
              (0,P.jsxs)("div",{className:"flex justify-between items-center",children:[
                (0,P.jsx)("span",{className:"text-slate-600",children:"Duration"}),
                (0,P.jsx)("span",{className:"font-bold text-slate-900",children:expectedHoursLabel})
              ]}),
              (0,P.jsxs)("div",{className:"flex justify-between items-center",children:[
                (0,P.jsx)("span",{className:"text-slate-600",children:"Passing Assessment Score"}),
                (0,P.jsx)("span",{className:"font-bold text-blue-600",children:!isAssessmentEnabled ? "N/A" : (passingScore + "%")})
              ]})
            ]})
          ]}),
          (0,P.jsxs)("div",{className:"px-5 py-4",children:[
            (0,P.jsxs)("div",{className:"flex items-center gap-1.5 mb-2",children:[
              (0,P.jsx)("span",{className:"text-slate-400 font-medium",children:"Skills"}),
              (0,P.jsx)(InfoTip,{text:"Employee skills including existing skills and skills earned from completed trainings"})
            ]}),
            empSkillRecs.length===0?(0,P.jsx)("div",{className:"text-slate-600",children:"No skills added."}):(0,P.jsx)("div",{className:"flex flex-wrap gap-1.5",children:empSkillRecs.map((sk,idx)=>{let hasTrainSrc=Boolean(sk.sourceTrainingName||(Array.isArray(sk.sources)&&sk.sources.some(s=>s.trainingId)));return(0,P.jsxs)("span",{title:hasTrainSrc?("Earned from: "+(sk.latestSourceTrainingName||sk.sourceTrainingName)):(sk.skillName+(sk.skillLevel?" ("+sk.skillLevel+")":"")),className:"inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium border "+(hasTrainSrc?"bg-purple-50 text-purple-700 border-purple-200":"bg-slate-50 text-slate-700 border-slate-200"),children:[(0,P.jsx)("span",{className:"font-semibold",children:sk.skillName}),sk.skillLevel&&(0,P.jsx)("span",{className:"px-1 rounded text-[10px] font-bold bg-white border "+(hasTrainSrc?"text-purple-700 border-purple-200":"text-slate-600 border-slate-200"),children:sk.skillLevel}),hasTrainSrc&&(0,P.jsx)("span",{className:"text-[10px] text-purple-600 font-semibold",children:"• Earned"})]},sk.skillId||idx)})})
          ]}),
          (0,P.jsxs)("div",{className:"px-5 py-4",children:[
            (0,P.jsx)("div",{className:"text-slate-400 font-medium mb-1.5",children:"Badges Received"}),
            (currentEmp.badges&&currentEmp.badges.length>0)||empCerts.length>0?(0,P.jsxs)("div",{className:"flex flex-wrap gap-1.5",children:[
              ...(currentEmp.badges||[]).map((b,bi)=>(0,P.jsx)("span",{className:"px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200 text-[11px] font-semibold",children:b},"b-"+bi)),
              ...empCerts.map((cert,ci)=>(0,P.jsxs)("span",{className:"px-2 py-0.5 rounded bg-purple-50 text-purple-700 border border-purple-200 text-[11px] font-semibold",children:["🎓 ",cert.trainingName||cert.name]},"c-"+ci))
            ]}):(0,P.jsx)("div",{className:"text-slate-600",children:"No badges received."})
          ]}),
          (0,P.jsxs)("div",{className:"px-5 py-4 space-y-3",children:[
            (0,P.jsxs)("div",{className:"grid grid-cols-2 gap-3 text-[11px]",children:[
              (0,P.jsxs)("div",{children:[
                (0,P.jsx)("div",{className:"text-slate-400 font-medium",children:"Seating Location"}),
                (0,P.jsx)("div",{className:"font-semibold text-slate-800 mt-0.5",children:currentEmp.seatingLocation || "-"})
              ]}),
              (0,P.jsxs)("div",{children:[
                (0,P.jsx)("div",{className:"text-slate-400 font-medium",children:"Extension Number"}),
                (0,P.jsx)("div",{className:"font-semibold text-slate-800 mt-0.5",children:currentEmp.extensionNumber || "-"})
              ]})
            ]}),
            (0,P.jsxs)("div",{className:"grid grid-cols-2 gap-3 text-[11px]",children:[
              (0,P.jsxs)("div",{children:[
                (0,P.jsx)("div",{className:"text-slate-400 font-medium",children:"Assigned Date"}),
                (0,P.jsx)("div",{className:"font-semibold text-slate-800 mt-0.5 tabular-nums",children:c.assignedDate || "-"})
              ]}),
              (0,P.jsxs)("div",{children:[
                (0,P.jsx)("div",{className:"text-slate-400 font-medium",children:"Due Date"}),
                (0,P.jsx)("div",{className:"font-semibold text-slate-800 mt-0.5 tabular-nums",children:c.dueDate || "-"})
              ]})
            ]})
          ]}),
          (0,P.jsxs)("div",{className:"px-5 py-4",children:[
            (0,P.jsx)("button",{type:"button",onClick:()=>{setFeedbackSent(!1);setShowFeedbackModal(!0)},style:{backgroundColor:"#14c4df"},className:"w-full text-white rounded-lg py-2.5 text-xs font-bold shadow-sm hover:opacity-90 transition-opacity cursor-pointer",children:"Give Feedback"}),
            showFeedbackModal && (0,P.jsxs)("div",{className:"mt-3 p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-2 text-left",children:[
              (0,P.jsx)("div",{className:"font-semibold text-slate-700 text-[11px]",children:"Share Training Feedback"}),
              feedbackSent?(0,P.jsx)("div",{className:"text-emerald-700 font-semibold text-[11px]",children:"Feedback submitted. Thank you!"}):(0,P.jsxs)(P.Fragment,{children:[
                (0,P.jsx)("textarea",{rows:2,value:feedbackText,onChange:ev=>setFeedbackText(ev.target.value),placeholder:"Enter feedback...",className:"w-full border border-slate-300 rounded px-2 py-1.5 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500/20"}),
                (0,P.jsxs)("div",{className:"flex justify-end gap-1.5",children:[
                  (0,P.jsx)("button",{type:"button",onClick:()=>setShowFeedbackModal(!1),className:"px-2.5 py-1 text-[11px] font-semibold text-slate-600 bg-white border border-slate-200 rounded",children:"Cancel"}),
                  (0,P.jsx)("button",{type:"button",onClick:()=>{setFeedbackSent(!0);setFeedbackText("")},style:{backgroundColor:"#14c4df"},className:"px-2.5 py-1 text-[11px] font-bold text-white rounded",children:"Submit"})
                ]})
              ]})
            ]})
          ]})
        ]})
      ]}),

      // Right Column (lg:col-span-3)
      (0,P.jsxs)("div",{className:"lg:col-span-3 space-y-6",children:[
        // Top Tab Bar
        (0,P.jsx)("div",{className:"bg-white border border-slate-200 rounded-xl px-6 shadow-sm overflow-x-auto",children:[
          (0,P.jsxs)("div",{className:"flex items-center gap-8 text-xs font-bold border-b border-transparent",children:[
            (0,P.jsx)("button",{onClick:()=>r("overview"),className:"py-4 border-b-2 transition-colors whitespace-nowrap " + (n==="overview"?"border-blue-600 text-blue-600":"border-transparent text-slate-500 hover:text-slate-800"),children:"1. Overview"}),
            (0,P.jsxs)("button",{onClick:()=>r("resources"),className:"py-4 border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 " + (n==="resources"?"border-blue-600 text-blue-600":"border-transparent text-slate-500 hover:text-slate-800"),children:[
              (0,P.jsx)("span",{children:"2. Learning Resources"}),
              (0,P.jsxs)("span",{className:"bg-slate-100 text-slate-600 text-[10px] px-1.5 py-0.5 rounded-full font-semibold",children:[doneCount, "/", resources.length]})
            ]}),
            (0,P.jsxs)("button",{onClick:()=>r("assessment"),className:"py-4 border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 " + (n==="assessment"?"border-blue-600 text-blue-600":"border-transparent text-slate-500 hover:text-slate-800"),children:[
              (0,P.jsx)("span",{children:"3. Assessment & Questions"}),
              latestResult?.isPassed ? (0,P.jsx)("span",{className:"bg-emerald-100 text-emerald-800 text-[10px] px-1.5 py-0.5 rounded font-bold",children:"Passed"}): null
            ]})
          ]})
        ]}),

        // Tab 1: Overview (Matching Management General Info Programme Details Format)
        n==="overview" && (0,P.jsxs)("div",{className:"space-y-4 animate-in fade-in",children:[
          (0,P.jsxs)("div",{className:"bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3",children:[
            (0,P.jsx)("h3",{className:"text-xs font-bold text-slate-400 tracking-wide",children:"Training Progress & Status"}),
            (0,P.jsxs)("div",{className:"flex items-center justify-between text-xs font-bold",children:[
              (0,P.jsx)("span",{className:(isSubmitted || allResourcesDone)?"text-emerald-600":(doneCount>0?"text-blue-600":"text-slate-600"),children:isSubmitted?"Training Completed":(allResourcesDone?"All Learning Modules Finished":(doneCount>0?"In Progress":"Not Started"))}),
              (0,P.jsxs)("span",{className:"text-slate-500",children:[doneCount, " of ", resources.length, " Modules Finished"]})
            ]}),
            (0,P.jsx)("div",{className:"w-full bg-slate-100 h-2.5 rounded-full overflow-hidden",children:(0,P.jsx)("div",{className:(modulePct===100?"bg-emerald-500":"bg-blue-600") + " h-full rounded-full transition-all duration-300",style:{width: modulePct + "%"}})})
          ]}),
          (0,P.jsxs)("div",{className:"bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-6",children:[
            (0,P.jsx)("h2",{className:"text-xs font-bold text-slate-400 tracking-wider",children:"Training Information"}),
            (0,P.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 text-xs",children:[
              (0,P.jsxs)("div",{className:"space-y-4",children:[
                (0,P.jsxs)("div",{children:[
                  (0,P.jsx)("div",{className:"text-slate-400 font-medium",children:"Training Name"}),
                  (0,P.jsx)("div",{className:"font-bold text-slate-900 mt-1",children:c.name})
                ]}),
                (0,P.jsxs)("div",{children:[
                  (0,P.jsx)("div",{className:"text-slate-400 font-medium",children:"Difficulty Level"}),
                  (0,P.jsx)("div",{className:"font-bold text-slate-900 mt-1",children:c.difficultyLevel || "Intermediate"})
                ]})
              ]}),
              (0,P.jsxs)("div",{className:"space-y-4",children:[
                (0,P.jsxs)("div",{children:[
                  (0,P.jsx)("div",{className:"text-slate-400 font-medium",children:"Training Category"}),
                  (0,P.jsx)("div",{className:"font-bold text-slate-900 mt-1",children:c.category || c.cat || "Recruitment & HR Operations"})
                ]}),
                (0,P.jsxs)("div",{children:[
                  (0,P.jsx)("div",{className:"text-slate-400 font-medium",children:"Duration"}),
                  (0,P.jsx)("div",{className:"font-bold text-slate-900 mt-1",children:expectedHoursLabel})
                ]})
              ]}),
              (0,P.jsxs)("div",{className:"space-y-4",children:[
                (0,P.jsxs)("div",{children:[
                  (0,P.jsx)("div",{className:"text-slate-400 font-medium",children:"Passing Assessment Score"}),
                  (0,P.jsx)("div",{className:"font-bold text-blue-600 mt-1",children:!isAssessmentEnabled ? "N/A (Assessment Disabled)" : (passingScore + "%")})
                ]})
              ]})
            ]}),
            (0,P.jsxs)("div",{className:"border-t border-slate-100 pt-5 space-y-4 text-xs",children:[
              (0,P.jsxs)("div",{children:[
                (0,P.jsx)("div",{className:"text-slate-400 font-medium",children:"Learning Objectives"}),
                (0,P.jsx)("div",{className:"text-slate-700 mt-1 leading-relaxed",children:c.learningObjectives || "Master comprehensive workflows, key competencies, and practical execution techniques across the enterprise platform."})
              ]}),
              false && (0,P.jsxs)("div",{children:[
                (0,P.jsx)("div",{className:"text-slate-400 font-medium",children:"COMPLETION REQUIREMENTS & ASSESSMENT CRITERIA"}),
                reqList.length > 0 ? (0,P.jsxs)("div",{className:"mt-2 space-y-2",children:[
                  reqList.map(step=>{
                    let stepDone = step==="Watch all required videos" ? stepVideosDone :
                                   step==="Pass the assessment" ? stepAssessDone :
                                   step==="Submit any required documents" ? stepDocsDone :
                                   stepManagerDone;
                    let badgeText = stepDone ? "Completed ✓" : (step==="Get approval from the manager" ? (managerApprovalStatus==="Pending Approval"?"Pending Approval":"Waiting on steps") : "Pending");
                    let badgeCls = stepDone ? "bg-emerald-50 text-emerald-700 border-emerald-200" : (badgeText==="Pending Approval"?"bg-amber-50 text-amber-700 border-amber-200":"bg-slate-100 text-slate-600 border-slate-200");
                    return (0,P.jsxs)("div",{className:"flex items-center justify-between bg-slate-50 border border-slate-200 rounded-lg px-3 py-2",children:[
                      (0,P.jsxs)("div",{className:"flex items-center gap-2 font-semibold text-slate-800",children:[
                        (0,P.jsx)("span",{className:stepDone?"text-emerald-600":"text-slate-400",children:stepDone?"✓":"○"}),
                        (0,P.jsx)("span",{children:step})
                      ]}),
                      (0,P.jsx)("span",{className:"text-[11px] font-bold px-2 py-0.5 rounded-full border " + badgeCls,children:badgeText})
                    ]},step);
                  }),
                  reqDocs && (0,P.jsxs)("div",{className:"mt-3 p-3 bg-blue-50/50 border border-blue-200 rounded-xl space-y-2.5",children:[
                    (0,P.jsx)("div",{className:"text-xs font-bold text-slate-800",children:"Required Documents Submission"}),
                    (0,P.jsxs)("div",{className:"flex flex-col sm:flex-row items-stretch sm:items-center gap-2",children:[
                      (0,P.jsx)("input",{type:"text",disabled:isCourseInactive,value:docInputName,onChange:ev=>setDocInputName(ev.target.value),placeholder:"Enter document name or URL (e.g. compliance-signed.pdf)...",className:"flex-1 bg-white border border-slate-300 rounded-lg px-3 py-1.5 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500"}),
                      (0,P.jsx)("label",{className:"px-3 py-1.5 bg-white border border-slate-300 hover:bg-slate-50 rounded-lg text-xs font-semibold text-slate-700 cursor-pointer text-center shrink-0",children:[
                        "Choose File",
                        (0,P.jsx)("input",{type:"file",disabled:isCourseInactive,className:"hidden",onChange:ev=>{let f=ev.target.files&&ev.target.files[0];if(f)setDocInputName(f.name);}})
                      ]}),
                      (0,P.jsx)("button",{type:"button",disabled:isCourseInactive||!docInputName.trim(),onClick:handleSubmitDocument,className:"px-4 py-1.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-lg text-xs font-bold transition-colors shrink-0",children:"Submit Document"})
                    ]}),
                    submittedDocs.length>0 && (0,P.jsx)("div",{className:"space-y-1 pt-1",children:submittedDocs.map((d,di)=>(0,P.jsxs)("div",{className:"flex items-center justify-between text-[11px] bg-white border border-emerald-200 rounded-lg px-2.5 py-1.5 text-emerald-800 font-medium",children:[
                      (0,P.jsxs)("span",{children:["📄 ", d.name]}),
                      (0,P.jsxs)("span",{className:"font-bold",children:["Submitted ✓ (", d.submittedAt, ")"]})
                    ]},d.id||di))})
                  ]}),
                  reqManager && (0,P.jsxs)("div",{className:"mt-2 p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-xs",children:[
                    (0,P.jsx)("span",{className:"font-semibold text-slate-700",children:"Manager Approval Status:"}),
                    (0,P.jsx)("span",{className:"font-bold " + (managerApprovalStatus==="Approved"?"text-emerald-700":managerApprovalStatus==="Pending Approval"?"text-amber-700":"text-slate-500"),children:managerApprovalStatus==="Approved"?"Approved by Manager ✓":(managerApprovalStatus==="Pending Approval"?"Pending Approval from Reporting Manager":"Waiting until prior steps complete")})
                  ]})
                ]}) : (0,P.jsx)("div",{className:"text-slate-700 mt-1 leading-relaxed",children:c.completionRequirements || c.completionCriteria || (!isAssessmentEnabled ? "Complete 100% learning modules (Assessment Disabled)" : ("Complete 100% learning modules + achieve > " + passingScore + "% on assessment"))})
              ]})
            ]})
          ]}),
          (isCertEnabled || isSkillEnabled) && (()=>{
            let masterSkills = Array.isArray(skillsConfig) && skillsConfig.length > 0 ? skillsConfig : DEFAULT_SKILLS_SEED;
            let resolvedSkills = configuredSkillIds.map(sid => masterSkills.find(m => m.id === sid)?.name || sid);
            let recognitionEarned = isSubmitted && allRequiredStepsDone;
            return (0,P.jsxs)("div",{className:"bg-white border border-purple-200 rounded-xl p-5 shadow-sm space-y-3",style:{borderLeft:"4px solid #7c3aed"},children:[
              (0,P.jsxs)("div",{className:"flex items-center justify-between flex-wrap gap-2",children:[
                (0,P.jsxs)("div",{className:"flex items-center gap-2",children:[
                  (0,P.jsx)("span",{className:"w-2 h-2 rounded-full",style:{backgroundColor:"#7c3aed"}}),
                  (0,P.jsx)("h3",{className:"text-xs font-bold text-purple-700 uppercase tracking-wider",children:"Training Recognition"})
                ]}),
                (0,P.jsx)("span",{className:"px-2.5 py-0.5 rounded-full text-[11px] font-bold border " + (recognitionEarned ? "bg-purple-600 text-white border-purple-600" : "bg-purple-50 text-purple-700 border-purple-200"),children:recognitionEarned ? "Recognition Awarded ✓" : "Awarded Upon Completion"})
              ]}),
              (0,P.jsxs)("div",{className:"flex flex-wrap items-center gap-2 text-xs",children:[
                isCertEnabled && (0,P.jsx)("span",{className:"px-2.5 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200 font-semibold",children:recognitionEarned ? "🎓 Official Certificate Issued ✓" : "🎓 Official Certificate on Completion"}),
                isSkillEnabled && resolvedSkills.map((sName, i) => (0,P.jsx)("span",{className:"px-2.5 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200 font-semibold",children:`${sName} (${configuredSkillLevel || "Beginner"})`},i))
              ]})
            ]});
          })(),

        ]}),

        // Tab 2: Learning Resources (Matching Management Curriculum & Modules table format, no Mandatory column)
        n==="resources" && (0,P.jsxs)("div",{className:"bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4 animate-in fade-in",children:[
          (0,P.jsxs)("div",{className:"flex items-center justify-between border-b border-slate-100 pb-3",children:[
            (0,P.jsxs)("div",{children:[
              (0,P.jsxs)("h2",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider",children:["Curriculum & Learning Resources (", resources.length, " Modules)"]}),
              (0,P.jsx)("p",{className:"text-xs text-slate-500 mt-0.5",children:"Review all modules thoroughly and mark each completed before proceeding."})
            ]}),
            (0,P.jsxs)("span",{className:"text-xs font-mono font-bold text-slate-600",children:[doneCount, "/", resources.length, " Modules Finished"]})
          ]}),
          resources.length === 0 ? (0,P.jsx)("div",{className:"py-10 text-center text-xs text-slate-500",children:"No learning resources configured for this training."}) :
          (0,P.jsx)("div",{className:"overflow-x-auto",children:(0,P.jsxs)("table",{className:"w-full text-left border-collapse",children:[
            (0,P.jsx)("thead",{children:(0,P.jsxs)("tr",{className:"border-b border-slate-200 text-[11px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50/50",children:[
              (0,P.jsx)("th",{className:"py-3 px-4 w-24",children:"Module"}),
              (0,P.jsx)("th",{className:"py-3 px-4",children:"Resource Title"}),
              (0,P.jsx)("th",{className:"py-3 px-4",children:"Type"}),
              (0,P.jsx)("th",{className:"py-3 px-4",children:"Resource URL"}),
              (0,P.jsx)("th",{className:"py-3 px-4 text-right",children:"Action"})
            ]})}),
            (0,P.jsx)("tbody",{className:"divide-y divide-slate-100 text-xs",children:resources.length===0 ? (0,P.jsx)("tr",{children:(0,P.jsx)("td",{colSpan:5,className:"py-8 text-center text-xs text-slate-500",children:"No learning resources have been added to this training yet."})}) : resources.map((res, idx)=>(0,P.jsxs)("tr",{className:"transition-colors " + (completedResources[res.id]?"bg-emerald-50/30 hover:bg-emerald-50/50":"hover:bg-slate-50/80"),children:[
              (0,P.jsx)("td",{className:"py-3 px-4 font-semibold text-slate-500 whitespace-nowrap",children:["Module ", idx+1]}),
              (0,P.jsx)("td",{className:"py-3 px-4",children:(0,P.jsx)("button",{type:"button",disabled:isCourseInactive,onClick:()=>!isCourseInactive&&setViewedResource({...res,moduleNum:idx+1}),className:"text-left font-bold " + (isCourseInactive?"text-slate-500 cursor-not-allowed":"text-slate-900 hover:text-blue-600 hover:underline cursor-pointer"),children:res.title || ("Module " + (idx+1))})}),
              (0,P.jsx)("td",{className:"py-3 px-4 text-slate-600 whitespace-nowrap",children:res.type || "-"}),
              (0,P.jsx)("td",{className:"py-3 px-4 text-slate-400 font-mono text-[11px] max-w-xs truncate",children:res.url || "-"}),
              (0,P.jsx)("td",{className:"py-3 px-4 text-right whitespace-nowrap",children:(0,P.jsxs)("div",{className:"inline-flex items-center justify-end gap-2",children:[
                completedResources[res.id] ? (0,P.jsx)("span",{className:"px-2.5 py-1 text-[11px] font-semibold rounded-md bg-emerald-100 text-emerald-800 border border-emerald-200",children:"Completed ✓"}) :
                idx===firstIncompleteIdx ? (0,P.jsx)("button",{type:"button",disabled:isCourseInactive,onClick:()=>handleToggleResource(res.id),style:isCourseInactive?{opacity:0.5}:undefined,className:"px-2.5 py-1 text-[11px] font-semibold rounded-md transition-colors bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100" + (isCourseInactive?" cursor-not-allowed":""),children:"Mark Done"}) :
                (0,P.jsx)("span",{className:"px-2.5 py-1 text-[11px] font-medium rounded-md bg-slate-100 text-slate-400 border border-slate-200",children:"Pending"})
              ]})})
            ]},res.id || idx))})
          ]})})
        ]}),

        // Tab 3: Assessment & Questions
        n==="assessment" && (!isAssessmentEnabled ? (0,P.jsxs)("div",{className:"bg-white border border-slate-200 rounded-xl p-16 text-center space-y-3 animate-in fade-in",children:[
          (0,P.jsx)("div",{className:"w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto text-xl font-bold",children:"📝"}),
          (0,P.jsx)("h3",{className:"text-base font-bold text-slate-800",children:"No Assessment Configured"}),
          (0,P.jsx)("p",{className:"text-xs text-slate-500 max-w-md mx-auto",children:"Assessment is disabled for this training. Employees achieve completion upon reviewing all learning resources."})
        ]}) : (0,P.jsxs)("div",{className:"space-y-6 animate-in fade-in",children:[
          (0,P.jsxs)("div",{className:"bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3",children:[
            (0,P.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3",children:[
              (0,P.jsxs)("div",{children:[
                (0,P.jsx)("h2",{className:"text-base font-bold text-slate-900 tracking-tight",children:assessment.title || "Final Training Assessment"}),
                (0,P.jsx)("p",{className:"text-xs text-slate-500 mt-0.5",children:assessment.description || "Complete the following questions to evaluate your understanding of this training."})
              ]}),
              (0,P.jsxs)("span",{className:"bg-blue-50 text-blue-700 border border-blue-200 font-bold px-2.5 py-1 rounded-lg text-xs self-start",children:[questions.length, " Questions • ", totalAssessmentMarks, " Marks"]})
            ]}),
            (0,P.jsxs)("div",{className:"flex flex-wrap items-center gap-4 text-xs text-slate-600",children:[
              (0,P.jsxs)("span",{children:[(0,P.jsx)("strong",{children:"Passing Criteria:"}), " Strictly > ", passingScore, "% to pass"]}),
              (0,P.jsx)("span",{children:"•"}),
              (0,P.jsxs)("span",{children:[(0,P.jsx)("strong",{children:"Attempts:"}), " ", Math.max(0, maxAttempts - attemptsUsed), " of ", maxAttempts, " remaining"]})
            ]})
          ]}),

          submittedState && latestResult ? (0,P.jsxs)("div",{className:"bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-6 animate-in fade-in",children:[
            latestResult.isPassed ? (0,P.jsxs)("div",{className:"bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center space-y-3",children:[
              (0,P.jsx)("div",{className:"text-4xl",children:"🎉"}),
              (0,P.jsx)("h2",{className:"text-lg font-bold text-emerald-900",children:"Assessment Passed Successfully!"}),
              (0,P.jsxs)("div",{className:"text-3xl font-black text-emerald-700 tabular-nums",children:[latestResult.scorePercentage, "%"]}),
              (0,P.jsxs)("p",{className:"text-xs text-emerald-800 leading-relaxed",children:[
                "You scored ", (0,P.jsx)("strong",{children:[latestResult.earnedMarks, " / ", latestResult.totalMarks, " marks"]}),
                " (Passing requirement is strictly above ", passingScore, "%). ",
                (reqManager && !stepManagerDone)
                  ? "Your assessment is passed and is currently awaiting required Reviewer / Manager approval before completion recognition is awarded."
                  : isCertEnabled
                    ? "Your training has been verified and your Certificate of Completion is ready!"
                    : "Your training completion has been verified."
              ]}),
              (isCertEnabled && allRequiredStepsDone) && (0,P.jsxs)("div",{className:"p-4 bg-white/80 border border-emerald-200 rounded-xl max-w-md mx-auto space-y-2 mt-4",children:[
                (0,P.jsxs)("div",{className:"flex items-center justify-between text-xs",children:[
                  (0,P.jsx)("span",{className:"font-bold text-slate-800",children:"Certificate Credential:"}),
                  (0,P.jsx)("span",{className:"font-mono font-bold text-emerald-700",children:awardFeedback?.certificateIssued?.id || "TRN-2026-0032"})
                ]}),
                (0,P.jsxs)("div",{className:"flex items-center justify-between text-xs",children:[
                  (0,P.jsx)("span",{className:"text-slate-500",children:"Status:"}),
                  (0,P.jsx)("span",{className:"font-bold text-emerald-700",children:"Verified & Completed ✓"})
                ]})
              ]}),
              (isSkillEnabled && allRequiredStepsDone && isSubmitted && configuredSkillIds.length > 0) && (0,P.jsxs)("div",{className:"p-4 bg-purple-50 border border-purple-200 rounded-xl max-w-md mx-auto space-y-2 mt-3 text-left",style:{borderLeft:"4px solid #7c3aed"},children:[
                (0,P.jsxs)("div",{className:"flex items-center justify-between text-xs",children:[
                  (0,P.jsx)("span",{className:"font-bold text-purple-700",children:"Skills Added to Your Profile"}),
                  (0,P.jsx)("span",{className:"px-2 py-0.5 rounded-full text-[10px] font-bold bg-white text-purple-700 border border-purple-200",children:configuredSkillLevel || "Beginner"})
                ]}),
                (0,P.jsxs)("div",{className:"flex flex-wrap gap-1.5",children:(awardFeedback?.skillsAwarded && awardFeedback.skillsAwarded.length > 0 ? awardFeedback.skillsAwarded : configuredSkillIds.map(sid => {
                  let sk = (Array.isArray(skillsConfig) ? skillsConfig : DEFAULT_SKILLS_SEED).find(m => m.id === sid);
                  return { skillId: sid, skillName: sk ? sk.name : sid, finalLevel: configuredSkillLevel };
                })).map(sk => (0,P.jsx)("span",{className:"px-2 py-0.5 rounded text-[11px] font-semibold bg-white text-purple-700 border border-purple-200",children:`${sk.skillName} (${sk.finalLevel || configuredSkillLevel})`},sk.skillId || sk.skillName))})
              ]}),
              (0,P.jsxs)("div",{className:"flex items-center justify-center gap-3 pt-3 flex-wrap",children:[
                allRequiredStepsDone ? (0,P.jsxs)(P.Fragment,{children:[
                  isCertEnabled && (0,P.jsx)("button",{type:"button",disabled:isCourseInactive,onClick:()=>!isCourseInactive&&alert("Downloading Certificate PDF for " + c.name + "..."),style:isCourseInactive?{opacity:0.5}:undefined,className:"bg-blue-600 text-white px-5 py-2.5 rounded-lg text-xs font-bold shadow-sm transition-colors " + (isCourseInactive?"cursor-not-allowed":"hover:bg-blue-700"),children:"Download Certificate PDF 🎓"}),
                  (0,P.jsx)("button",{type:"button",onClick:async()=>{if(!isCourseInactive){setIsSubmitted(true);await syncCourseState("Completed",100,completedResources,latestResult,attemptHistory);alert("Course marked as Completed!");}},disabled:isSubmitted||isCourseInactive,style:(isSubmitted||isCourseInactive)?{opacity:0.5}:undefined,className:"bg-emerald-600 text-white px-5 py-2.5 rounded-lg text-xs font-bold shadow-sm transition-colors " + ((isSubmitted||isCourseInactive)?"cursor-not-allowed":"hover:bg-emerald-700"),children:isSubmitted?"Course Completed ✓":"Mark as Completed ✓"})
                ]}) : (0,P.jsxs)("div",{className:"w-full max-w-md mx-auto bg-amber-50 border border-amber-200 rounded-xl p-3 text-center space-y-2",children:[
                  (0,P.jsx)("div",{className:"text-xs font-bold text-amber-800",children:reqManager && !stepManagerDone ? "Assessment Passed! Required Reviewer / Manager approval is pending before completion recognition (Certificate / Skills) is awarded." : "Assessment Passed! Remaining required step(s) must be completed before marking training as Completed."}),
                  (0,P.jsx)("button",{type:"button",onClick:()=>r("overview"),className:"bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-xs font-bold shadow-sm transition-colors",children:"Go to Overview →"})
                ]})
              ]})
            ]}):
            (0,P.jsxs)("div",{className:"bg-rose-50 border border-rose-200 rounded-xl p-6 text-center space-y-3",children:[
              (0,P.jsx)("div",{className:"text-4xl",children:"❌"}),
              (0,P.jsx)("h2",{className:"text-lg font-bold text-rose-900",children:"Assessment Not Passed"}),
              (0,P.jsxs)("div",{className:"text-3xl font-black text-rose-700 tabular-nums",children:[latestResult.scorePercentage, "%"]}),
              (0,P.jsxs)("p",{className:"text-xs text-rose-800",children:[
                "You scored ", latestResult.earnedMarks, " out of ", latestResult.totalMarks, " marks. The passing threshold is strictly greater than ", passingScore, "%."
              ]}),
              hasAttemptsRemaining ? (0,P.jsxs)("div",{className:"pt-3 space-y-2",children:[
                (0,P.jsxs)("p",{className:"text-xs text-slate-600",children:["You have ", maxAttempts - attemptsUsed, " attempt(s) remaining."]}),
                (0,P.jsx)("button",{type:"button",disabled:isCourseInactive,onClick:retakeAssessment,style:isCourseInactive?{opacity:0.5}:undefined,className:"bg-blue-600 text-white px-5 py-2.5 rounded-lg text-xs font-bold shadow-sm transition-colors " + (isCourseInactive?"cursor-not-allowed":"hover:bg-blue-700"),children:"Retake Assessment ↺"})
              ]}):
              (0,P.jsxs)("div",{className:"pt-3 space-y-3",children:[
                (0,P.jsxs)("p",{className:"text-xs text-rose-700 font-bold max-w-md mx-auto leading-relaxed",children:["All ", maxAttempts, " assessment attempt(s) used without passing. You are not considered as Pass and must go through the training again before retaking the assessment."]}),
                (0,P.jsx)("button",{type:"button",disabled:isCourseInactive,onClick:restartProgramme,style:isCourseInactive?{opacity:0.5}:undefined,className:"bg-rose-600 text-white px-5 py-2.5 rounded-lg text-xs font-bold shadow-sm transition-colors " + (isCourseInactive?"cursor-not-allowed":"hover:bg-rose-700"),children:"Go Through Training Again ↺"})
              ]})
            ]})
          ]}) :
          attemptsExhausted ? (0,P.jsx)("div",{className:"bg-white border border-slate-200 rounded-xl p-6 shadow-sm",children:(0,P.jsxs)("div",{className:"bg-rose-50 border border-rose-200 rounded-xl p-6 text-center space-y-3",children:[
            (0,P.jsx)("div",{className:"text-4xl",children:"🔄"}),
            (0,P.jsx)("h2",{className:"text-lg font-bold text-rose-900",children:"Assessment Not Passed — Training Re-run Required"}),
            (0,P.jsxs)("p",{className:"text-xs text-rose-700 font-medium max-w-md mx-auto leading-relaxed",children:["All ", maxAttempts, " assessment attempt(s) have been used without passing. You are not considered as Pass and must go through the training again."]}),
            (0,P.jsx)("button",{type:"button",disabled:isCourseInactive,onClick:restartProgramme,style:isCourseInactive?{opacity:0.5}:undefined,className:"bg-rose-600 text-white px-5 py-2.5 rounded-lg text-xs font-bold shadow-sm transition-colors " + (isCourseInactive?"cursor-not-allowed":"hover:bg-rose-700"),children:"Go Through Training Again ↺"})
          ]})}) :
          (0,P.jsxs)("div",{className:"space-y-4",children:[
            questions.map((q, idx)=>(0,P.jsxs)("div",{className:"bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3.5",children:[
              (0,P.jsxs)("div",{className:"flex items-center justify-between border-b border-slate-100 pb-2.5",children:[
                (0,P.jsxs)("div",{className:"flex items-center gap-2",children:[
                  (0,P.jsx)("span",{className:"bg-blue-50 text-blue-700 text-xs font-bold px-2 py-0.5 rounded",children:"Question " + (idx+1)}),
                  (0,P.jsx)("span",{className:"text-[11px] font-semibold text-slate-500",children:q.marks + " Marks"})
                ]}),
                (0,P.jsx)("span",{className:"text-[11px] text-slate-400 capitalize",children:q.type.replace(/_/g, " ")})
              ]}),
              (0,P.jsx)("div",{className:"text-xs font-bold text-slate-900 leading-snug",children:q.text}),
              (0,P.jsx)("div",{className:"pt-1 text-xs",children:
                q.type==="short_text" ? (0,P.jsx)("input",{type:"text",disabled:isCourseInactive,value:userAnswers[q.id]||"",onChange:e=>handleSelectAnswer(q.id, e.target.value),placeholder:"Type your answer here...",className:"w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-xs text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"}):
                q.type==="single_choice" ? (0,P.jsx)("div",{className:"space-y-2",children:(q.options||[]).map(opt=>(0,P.jsxs)("label",{className:"flex items-center gap-2.5 p-2.5 bg-slate-50 border rounded-lg cursor-pointer hover:bg-slate-100/70 transition-colors " + (userAnswers[q.id]===opt.id?"border-blue-500 bg-blue-50/40 font-semibold text-blue-900":"border-slate-200 text-slate-700"),children:[
                  (0,P.jsx)("input",{type:"radio",disabled:isCourseInactive,name:q.id,checked:userAnswers[q.id]===opt.id,onChange:()=>handleSelectAnswer(q.id, opt.id),className:"w-4 h-4 text-blue-600 focus:ring-blue-500"}),
                  (0,P.jsx)("span",{className:"text-xs",children:opt.text})
                ]},opt.id))}):
                q.type==="multiple_choice" ? (0,P.jsx)("div",{className:"space-y-2",children:(q.options||[]).map(opt=>(0,P.jsxs)("label",{className:"flex items-center gap-2.5 p-2.5 bg-slate-50 border rounded-lg cursor-pointer hover:bg-slate-100/70 transition-colors " + ((Array.isArray(userAnswers[q.id])&&userAnswers[q.id].includes(opt.id))?"border-blue-500 bg-blue-50/40 font-semibold text-blue-900":"border-slate-200 text-slate-700"),children:[
                  (0,P.jsx)("input",{type:"checkbox",disabled:isCourseInactive,checked:Array.isArray(userAnswers[q.id])&&userAnswers[q.id].includes(opt.id),onChange:()=>handleToggleMultiChoice(q.id, opt.id),className:"w-4 h-4 text-blue-600 rounded focus:ring-blue-500"}),
                  (0,P.jsx)("span",{className:"text-xs",children:opt.text})
                ]},opt.id))}):
                q.type==="dropdown" ? (0,P.jsxs)("select",{disabled:isCourseInactive,value:userAnswers[q.id]||"",onChange:e=>handleSelectAnswer(q.id, e.target.value),className:"w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-xs text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500",children:[
                  (0,P.jsx)("option",{value:"",children:"-- Select Answer --"}),
                  (q.options||[]).map(opt=>(0,P.jsx)("option",{value:opt.id,children:opt.text},opt.id))
                ]}):
                q.type==="true_false" ? (0,P.jsxs)("div",{className:"flex items-center gap-3",children:[
                  ["True", "False"].map(tf=>(0,P.jsxs)("label",{className:"flex-1 flex items-center justify-center gap-2 p-3 bg-slate-50 border rounded-lg cursor-pointer hover:bg-slate-100/70 transition-colors " + (userAnswers[q.id]===tf?"border-blue-500 bg-blue-50/50 font-bold text-blue-900":"border-slate-200 text-slate-700"),children:[
                    (0,P.jsx)("input",{type:"radio",disabled:isCourseInactive,name:q.id,checked:userAnswers[q.id]===tf,onChange:()=>handleSelectAnswer(q.id, tf),className:"w-4 h-4 text-blue-600"}),
                    (0,P.jsx)("span",{children:tf})
                  ]},tf))
                ]}):
                q.type==="long_text" ? (0,P.jsx)("textarea",{rows:3,disabled:isCourseInactive,value:userAnswers[q.id]||"",onChange:e=>handleSelectAnswer(q.id, e.target.value),placeholder:"Type your detailed explanation here...",className:"w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-xs text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"}):
                null
              })
            ]},q.id)),

            (0,P.jsxs)("div",{className:"bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex items-center justify-between",children:[
              (0,P.jsx)("span",{className:"text-xs text-slate-500",children:"Review your answers carefully before submitting."}),
              (0,P.jsx)("button",{type:"button",disabled:isCourseInactive,onClick:()=>{
                if(isCourseInactive) return;
                if(window.confirm("Are you sure you want to submit your assessment?")){
                  evaluateAssessment();
                }
              },style:isCourseInactive?{opacity:0.5}:undefined,className:"bg-blue-600 text-white font-bold px-6 py-2.5 rounded-lg text-xs shadow-sm transition-colors " + (isCourseInactive?"cursor-not-allowed":"hover:bg-blue-700"),children:"Submit Assessment for Grading →"})
            ]})
          ]})
        ]}) )
      ]})
    ]}),
    viewedResource && (()=>{
      let meta = getResourceViewerMeta(viewedResource);
      let isResDone = Boolean(completedResources[viewedResource.id]);
      return (0,P.jsx)("div",{className:"fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4",onClick:()=>setViewedResource(null),children:
        (0,P.jsxs)("div",{className:"bg-white border border-slate-200 rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden animate-in fade-in",onClick:e=>e.stopPropagation(),children:[
          (0,P.jsxs)("div",{className:"px-6 py-4 border-b border-slate-200 flex items-center justify-between gap-4 bg-slate-50/70",children:[
            (0,P.jsxs)("div",{className:"min-w-0",children:[
              (0,P.jsxs)("div",{className:"flex items-center gap-2",children:[
                (0,P.jsx)("span",{className:"text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded",children:viewedResource.type || "Learning Resource"}),
                viewedResource.moduleNum && (0,P.jsx)("span",{className:"text-[11px] font-semibold text-slate-400",children:["Module ", viewedResource.moduleNum]})
              ]}),
              (0,P.jsx)("h3",{className:"text-sm font-bold text-slate-900 mt-1 truncate",children:viewedResource.title || "Training Material"})
            ]}),
            (0,P.jsx)("button",{type:"button",onClick:()=>setViewedResource(null),className:"p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/70 text-sm font-bold",title:"Close Viewer",children:"✕"})
          ]}),
          (0,P.jsx)("div",{className:"p-6 space-y-4 max-h-[75vh] overflow-y-auto",children:
            meta.kind==="youtube" ? (0,P.jsx)("iframe",{src:meta.embedUrl,title:viewedResource.title||"YouTube Video",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0,className:"w-full h-[400px] rounded-xl border border-slate-200 bg-black"}) :
            meta.kind==="iframe-video" ? (0,P.jsx)("iframe",{src:meta.embedUrl,title:viewedResource.title||"Course Video",allowFullScreen:!0,className:"w-full h-[400px] rounded-xl border border-slate-200 bg-black"}) :
            meta.kind==="html5-video" ? (0,P.jsx)("video",{src:meta.embedUrl,controls:!0,className:"w-full max-h-[420px] rounded-xl border border-slate-200 bg-black"}) :
            meta.kind==="video-preview" ? (0,P.jsxs)("div",{className:"rounded-xl border border-slate-800 bg-slate-900 text-white p-8 text-center space-y-4",children:[
              (0,P.jsx)("div",{className:"w-16 h-16 rounded-full bg-blue-600/20 border border-blue-400/40 flex items-center justify-center mx-auto text-3xl",children:"▶"}),
              (0,P.jsx)("div",{className:"text-base font-bold",children:viewedResource.title || "Video Lecture"}),
              (0,P.jsx)("p",{className:"text-xs text-slate-300 max-w-lg mx-auto leading-relaxed",children:"Module video lecture prepared by Management for " + c.name + ". Review the full session material and open the source video below if needed."}),
              meta.url && (0,P.jsx)("div",{className:"text-[11px] font-mono text-blue-300 bg-slate-800/80 px-3 py-1.5 rounded-lg inline-block break-all",children:meta.url})
            ]}) :
            (meta.kind==="document" && !meta.isInternalPlaceholder && meta.embedUrl) ? (0,P.jsxs)("div",{className:"space-y-3",children:[
              (0,P.jsx)("iframe",{src:meta.embedUrl,title:viewedResource.title||"PDF / Document Viewer",className:"w-full h-[460px] rounded-xl border border-slate-200 bg-slate-50"}),
              (0,P.jsx)("p",{className:"text-[11px] text-slate-500",children:"If your browser or document host blocks inline embedding, use Open Original Resource ↗ below to view or download directly."})
            ]}) :
            (meta.kind==="document") ? (0,P.jsxs)("div",{className:"bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-4",children:[
              (0,P.jsxs)("div",{className:"flex items-center justify-between border-b border-slate-200 pb-3",children:[
                (0,P.jsxs)("div",{children:[
                  (0,P.jsx)("div",{className:"text-xs font-bold text-slate-900",children:viewedResource.title || "Training Document"}),
                  (0,P.jsx)("div",{className:"text-[11px] text-slate-500 font-mono mt-0.5 break-all",children:meta.url || "Internal Document"})
                ]}),
                (0,P.jsx)("span",{className:"px-2.5 py-1 rounded bg-rose-50 text-rose-700 border border-rose-200 text-[11px] font-bold",children:"PDF / Document"})
              ]}),
              (0,P.jsxs)("div",{className:"bg-white border border-slate-200 rounded-lg p-5 space-y-3 text-xs text-slate-700 leading-relaxed",children:[
                (0,P.jsx)("h4",{className:"font-bold text-slate-900 text-sm",children:["Document Overview — ", c.name]}),
                (0,P.jsx)("p",{children:c.learningObjectives || "Structured reference documentation and standard operating procedures uploaded by Admin / HR / Reporting Manager for employee review."}),
                (0,P.jsx)("p",{className:"text-slate-600",children:"Key Sections: 1. Core Workflow & Architecture Guidelines • 2. Compliance & Security Standards • 3. Role Responsibilities & Execution Checklist."})
              ]})
            ]}) :
            (!meta.isInternalPlaceholder && meta.url) ? (0,P.jsxs)("div",{className:"space-y-4",children:[
              (0,P.jsxs)("div",{className:"bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2",children:[
                (0,P.jsx)("div",{className:"text-xs font-bold text-slate-900",children:viewedResource.title || "Course Resource"}),
                (0,P.jsx)("div",{className:"text-[11px] text-blue-600 font-mono break-all",children:meta.url}),
                (0,P.jsx)("p",{className:"text-xs text-slate-600 pt-1",children:"External training material attached to " + c.name + ". Preview below or launch in a dedicated browser tab."})
              ]}),
              (0,P.jsx)("iframe",{src:meta.url,title:viewedResource.title||"Course Link Preview",className:"w-full h-[380px] rounded-xl border border-slate-200 bg-white"})
            ]}) : (0,P.jsxs)("div",{className:"bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-2 text-xs text-slate-700",children:[
              (0,P.jsx)("div",{className:"font-bold text-slate-900",children:viewedResource.title || "Training Resource"}),
              meta.url && (0,P.jsx)("div",{className:"font-mono text-[11px] text-slate-500 break-all",children:meta.url}),
              (0,P.jsx)("p",{children:c.learningObjectives || "Review the assigned course materials carefully and mark done when finished."})
            ]})
          }),
          (0,P.jsxs)("div",{className:"px-6 py-4 border-t border-slate-200 bg-slate-50/70 flex flex-wrap items-center justify-between gap-3",children:[
            meta.url ? (0,P.jsx)("a",{href:meta.url,target:"_blank",rel:"noreferrer",className:"px-4 py-2 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg transition-colors",children:"Open Original Resource ↗"}) : (0,P.jsx)("span",{}),
            (0,P.jsxs)("div",{className:"flex items-center gap-2.5",children:[
              (0,P.jsx)("button",{type:"button",onClick:()=>setViewedResource(null),className:"px-4 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors",children:"Close"}),
              !isResDone && resources.findIndex(item=>item.id===viewedResource.id)===firstIncompleteIdx && (0,P.jsx)("button",{type:"button",disabled:isCourseInactive,onClick:()=>handleToggleResource(viewedResource.id),className:"px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors",children:(resources.filter(item=>!completedResources[item.id]).length===1 && isAssessmentEnabled)?"Mark Done & Go to Assessment →":"Mark Done ✓"})
            ]})
          ]})
        ]})
      });
    })()
  ]});
}
function ht({onClose:e,onAddEmployee:t}){let[n,r]=(0,l.useState)(``),[i,a]=(0,l.useState)(``),[o,s]=(0,l.useState)(``),[c,u]=(0,l.useState)(`Project`),[d,f]=(0,l.useState)(`Executive`),[p,m]=(0,l.useState)(`Confirmed`),[h,g]=(0,l.useState)(`Isha Patel`),[_,v]=(0,l.useState)(`+1 9005049999`);return(0,P.jsx)(`div`,{className:`fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-150`,children:(0,P.jsxs)(`div`,{className:`bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-200`,children:[(0,P.jsxs)(`div`,{className:`p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50`,children:[(0,P.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,P.jsx)(He,{className:`w-5 h-5 text-blue-600`}),(0,P.jsx)(`h2`,{className:`font-bold text-slate-900 text-base`,children:`Add New Employee`})]}),(0,P.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,P.jsxs)(`button`,{type:`button`,onClick:()=>{r(`Aarav`),a(`Sharma`),s(`aarav.sharma@collabcrm.internal`),u(`Business Analysis`),f(`Senior Software Engineer`),m(`Confirmed`),g(`Ishdeep Anand`),v(`+1 9887654321`)},className:`flex items-center gap-1 bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors shadow-xs`,title:`Click to automatically fill sample employee credentials`,children:[(0,P.jsx)(Ke,{className:`w-3.5 h-3.5 text-amber-600`}),(0,P.jsx)(`span`,{children:`Auto-Fill`})]}),(0,P.jsx)(`button`,{onClick:e,className:`p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60`,children:(0,P.jsx)(N,{className:`w-5 h-5`})})]})]}),(0,P.jsxs)(`form`,{onSubmit:e=>{e.preventDefault(),!n||!i||!o?alert(`Please fill out all required fields.`):t({id:`emp-${Date.now()}`,code:`CO-${Math.floor(1e3+Math.random()*9e3)}`,firstName:n,lastName:i,email:o,department:c,designation:d,status:p,reportingTo:h,experience:`2Y 0M`,joiningDate:`04-Nov-2026`,lastLogin:`-`,employeeType:`Technical`,businessUnit:`CollabCRM Demo Account`,biometricId:`BIO-${Math.floor(1e3+Math.random()*9e3)}`,activeShift:`General Shift`,employeeRole:d,companyEmail:o,companyMobile:_,skills:[`React`,`TypeScript`,`Node.js`],about:`Experienced enterprise software specialist.`,badges:[],seatingLocation:`Floor 3`,extensionNumber:`112`,bloodGroup:`B+`,gender:`Male`,dateOfBirth:`15-May-1995`,hiddenProfile:!1,accountStatus:`Active`})},className:`p-6 space-y-4`,children:[(0,P.jsxs)(`div`,{className:`grid grid-cols-2 gap-4`,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsxs)(`label`,{className:`flex items-center gap-1 text-xs font-bold text-slate-700 mb-1.5`,children:[(0,P.jsx)(`span`,{children:`First Name *`}),(0,P.jsx)(InfoTip,{text:`Employee's given first name`})]}),(0,P.jsx)(`input`,{type:`text`,value:n,onChange:e=>r(e.target.value),placeholder:`Enter first name (e.g. John)`,className:`w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 placeholder-slate-400`,required:!0})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsxs)(`label`,{className:`flex items-center gap-1 text-xs font-bold text-slate-700 mb-1.5`,children:[(0,P.jsx)(`span`,{children:`Last Name *`}),(0,P.jsx)(InfoTip,{text:`Employee's family surname`})]}),(0,P.jsx)(`input`,{type:`text`,value:i,onChange:e=>a(e.target.value),placeholder:`Enter last name (e.g. Doe)`,className:`w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 placeholder-slate-400`,required:!0})]})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsxs)(`label`,{className:`flex items-center gap-1 text-xs font-bold text-slate-700 mb-1.5`,children:[(0,P.jsx)(`span`,{children:`Company Email *`}),(0,P.jsx)(InfoTip,{text:`Primary corporate email address for notifications and sign-in`})]}),(0,P.jsx)(`input`,{type:`email`,value:o,onChange:e=>s(e.target.value),placeholder:`Enter corporate email address (e.g. john.doe@collabcrm.internal)`,className:`w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 placeholder-slate-400`,required:!0})]}),(0,P.jsxs)(`div`,{className:`grid grid-cols-2 gap-4`,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsxs)(`label`,{className:`flex items-center gap-1 text-xs font-bold text-slate-700 mb-1.5`,children:[(0,P.jsx)(`span`,{children:`Department`}),(0,P.jsx)(InfoTip,{text:`Operational department or team unit`})]}),(0,P.jsxs)(`select`,{value:c,onChange:e=>u(e.target.value),className:`w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800`,children:[(0,P.jsx)(`option`,{value:`Business Analysis`,children:`Business Analysis`}),(0,P.jsx)(`option`,{value:`Game`,children:`Game`}),(0,P.jsx)(`option`,{value:`Collab`,children:`Collab`}),(0,P.jsx)(`option`,{value:`Web`,children:`Web`}),(0,P.jsx)(`option`,{value:`Data analytics`,children:`Data analytics`})]})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsxs)(`label`,{className:`flex items-center gap-1 text-xs font-bold text-slate-700 mb-1.5`,children:[(0,P.jsx)(`span`,{children:`Status`}),(0,P.jsx)(InfoTip,{text:`Employment standing (Confirmed, Intern, Probation, Notice)`})]}),(0,P.jsxs)(`select`,{value:p,onChange:e=>m(e.target.value),className:`w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800`,children:[(0,P.jsx)(`option`,{value:`Confirmed`,children:`Confirmed`}),(0,P.jsx)(`option`,{value:`Intern`,children:`Intern`}),(0,P.jsx)(`option`,{value:`Probation`,children:`Probation`}),(0,P.jsx)(`option`,{value:`Notice Period`,children:`Notice Period`})]})]})]}),(0,P.jsxs)(`div`,{className:`grid grid-cols-2 gap-4`,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsxs)(`label`,{className:`flex items-center gap-1 text-xs font-bold text-slate-700 mb-1.5`,children:[(0,P.jsx)(`span`,{children:`Designation`}),(0,P.jsx)(InfoTip,{text:`Official job title and professional rank`})]}),(0,P.jsx)(`input`,{type:`text`,value:d,onChange:e=>f(e.target.value),placeholder:`Enter job title / designation (e.g. Senior Executive)`,className:`w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 placeholder-slate-400`})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsxs)(`label`,{className:`flex items-center gap-1 text-xs font-bold text-slate-700 mb-1.5`,children:[(0,P.jsx)(`span`,{children:`Reporting Manager`}),(0,P.jsx)(InfoTip,{text:`Direct supervisor or reporting manager name`})]}),(0,P.jsx)(`input`,{type:`text`,value:h,onChange:e=>g(e.target.value),placeholder:`Enter reporting manager name (e.g. Isha Patel)`,className:`w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 placeholder-slate-400`})]})]}),(0,P.jsxs)(`div`,{className:`pt-4 flex items-center justify-end gap-3 border-t border-slate-100`,children:[(0,P.jsx)(`button`,{type:`button`,onClick:e,className:`px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors`,children:`Cancel`}),(0,P.jsx)(`button`,{type:`submit`,className:`px-5 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors`,children:`Save Employee`})]})]})]})})}function gt({employees:e,programmes:t,initialProgrammeId:n,employeeSkills:empSkillsMap,skillsConfig,skillLevels,onClose:r,onAssign:i}){let buSeed=[`CollabCRM Demo Account`,`Product Engineering`,`Enterprise Solutions`,`Cloud & DevOps`,`Client Success`];let allEmps=(0,l.useMemo)(()=>{let base=(Array.isArray(e)?e:[]).map((emp,idx)=>({...emp,businessUnit:emp.businessUnit||buSeed[idx%buSeed.length]}));let fn=["Aarav","Vivaan","Aditya","Arjun","Reyansh","Krishna","Ishaan","Shaurya","Pranav","Rohan","Kabir","Ananya","Diya","Myra","Aadhya","Kavya","Neha","Priya","Riya","Meera","Nikhil","Siddharth","Karan","Varun","Dev","Harsh","Manish","Pooja","Sneha","Nandini","Tanvi","Sanya","Rhea","Nisha","Kunal","Rajat"];let ln=["Sharma","Verma","Gupta","Mehta","Patel","Iyer","Nair","Reddy","Kulkarni","Joshi","Desai","Agarwal","Malhotra","Kapoor","Bhat","Rao","Choudhary","Saxena","Singhal","Bansal","Menon","Pillai","Jain","Mishra","Tiwari"];let depts=["Business Analysis","Game","Collab","Web","Data analytics"];let desigs=["Executive","Sr. Executive","Business analyst","Team leader","Manager","AVP"];let seen=new Set(base.map(x=>`${x.firstName||""} ${x.lastName||""}`.trim().toLowerCase()));let extras=[];let idx=0;while(base.length+extras.length<265&&idx<fn.length*ln.length){let fi=(idx*11+3)%fn.length;let li=(idx*7+Math.floor(idx/ln.length)*3)%ln.length;let firstName=fn[fi],lastName=ln[li];let full=`${firstName} ${lastName}`.toLowerCase();idx++;if(seen.has(full))continue;seen.add(full);let num=extras.length+1;extras.push({id:`emp-gen-${num}`,firstName,lastName,businessUnit:buSeed[num%buSeed.length],department:depts[num%depts.length],designation:desigs[(num*5)%desigs.length]})}return[...base,...extras]},[e]);let eligibleProgrammes=(0,l.useMemo)(()=>t.filter(p=>(p.publicationStatus||p.status||`Published`)===`Published`&&(p.availabilityStatus?p.availabilityStatus===`Active`:p.isActive!==!1)),[t]),initialProg=n?t.find(p=>p.id===n):null,isInitialEligible=initialProg&&eligibleProgrammes.some(p=>p.id===initialProg.id),isTrainingLocked=Boolean(n&&initialProg),a=[`Business Analysis`,`Game`,`Collab`,`Web`,`Data analytics`],o=[`Executive`,`Sr. Executive`,`Business analyst`,`Team leader`,`Manager`,`AVP`],buOpts=(0,l.useMemo)(()=>Array.from(new Set([...buSeed,...allEmps.map(e=>e.businessUnit).filter(Boolean)])),[allEmps]),s=(0,l.useMemo)(()=>Array.from(new Set([...a,...allEmps.map(e=>e.department).filter(Boolean)])),[allEmps]),c=(0,l.useMemo)(()=>Array.from(new Set([...o,...allEmps.map(e=>e.designation).filter(Boolean)])),[allEmps]),[buSel,setBuSel]=(0,l.useState)([]),[u,d]=(0,l.useState)([]),[f,p]=(0,l.useState)([]),[m,h]=(0,l.useState)(()=>{let tk=allEmps.find(x=>x.id===`emp-3`||(x.firstName===`Tanya`&&x.lastName===`Kapoor`));return tk?[tk.id]:[]}),[g,_]=(0,l.useState)(isInitialEligible?initialProg.id:``),[v,y]=(0,l.useState)(``),[b,x]=(0,l.useState)(``),[S,ee]=(0,l.useState)(null),[assignError,setAssignError]=(0,l.useState)(initialProg&&!isInitialEligible?`This training is currently inactive and cannot be assigned.`:``),[isAssigning,setIsAssigning]=(0,l.useState)(!1),buRef=(0,l.useRef)(null),C=(0,l.useRef)(null),w=(0,l.useRef)(null),te=(0,l.useRef)(null);(0,l.useEffect)(()=>{function e(e){let t=e.target;(!buRef.current||!buRef.current.contains(t))&&C.current&&!C.current.contains(t)&&w.current&&!w.current.contains(t)&&te.current&&!te.current.contains(t)&&ee(null)}return document.addEventListener(`mousedown`,e),()=>{document.removeEventListener(`mousedown`,e)}},[]);let filterEmps=(selBu,selDept,selDesig)=>allEmps.filter(e=>{if(selBu.length>0&&selBu.length<buOpts.length&&!selBu.includes(e.businessUnit))return!1;if(selDept.length>0&&selDept.length<s.length&&!selDept.includes(e.department))return!1;if(selDesig.length>0&&selDesig.length<c.length&&!selDesig.includes(e.designation))return!1;return!0}),T=(0,l.useMemo)(()=>filterEmps(buSel,u,f),[allEmps,buSel,u,f,buOpts.length,s.length,c.length]),applyBuChange=nextBu=>{setBuSel(nextBu);if(nextBu.length>0){h(filterEmps(nextBu,u,f).map(e=>e.id))}else{h([])}},toggleAllBu=()=>{applyBuChange(buSel.length===buOpts.length?[]:[...buOpts])},toggleOneBu=bu=>{applyBuChange(buSel.includes(bu)?buSel.filter(x=>x!==bu):[...buSel,bu])},buButtonText=()=>buSel.length===0?`Select Business Unit...`:buSel.length===buOpts.length?`All Business Units`:buSel.length===1?buSel[0]:`${buSel[0]} (+${buSel.length-1} more)`,ie=()=>{let nextDept=u.length===s.length?[]:[...s];d(nextDept);if(buSel.length>0)h(filterEmps(buSel,nextDept,f).map(e=>e.id))},E=e=>{let nextDept=u.includes(e)?u.filter(t=>t!==e):[...u,e];d(nextDept);if(buSel.length>0)h(filterEmps(buSel,nextDept,f).map(x=>x.id))},ae=()=>u.length===0?`Select Department...`:u.length===s.length?`All Departments`:u.length===1?u[0]:`${u[0]} (+${u.length-1} more)`,oe=()=>{let nextDesig=f.length===c.length?[]:[...c];p(nextDesig);if(buSel.length>0)h(filterEmps(buSel,u,nextDesig).map(e=>e.id))},se=e=>{let nextDesig=f.includes(e)?f.filter(t=>t!==e):[...f,e];p(nextDesig);if(buSel.length>0)h(filterEmps(buSel,u,nextDesig).map(x=>x.id))},D=()=>f.length===0?`Select Designation...`:f.length===c.length?`All Designations`:f.length===1?f[0]:`${f[0]} (+${f.length-1} more)`,allTSelected=T.length>0&&T.every(emp=>m.includes(emp.id)),ce=()=>{allTSelected?h([]):h(T.map(e=>e.id))},le=e=>{h(prev=>prev.includes(e)?prev.filter(t=>t!==e):[...prev,e])};return(0,P.jsx)(`div`,{className:`fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-50 flex justify-end animate-in fade-in duration-150`,children:(0,P.jsxs)(`div`,{className:`bg-white w-full max-w-md h-full shadow-2xl flex flex-col justify-between border-l border-slate-200 animate-in slide-in-from-right duration-200`,children:[(0,P.jsxs)(`div`,{className:`p-5 border-b border-slate-200 flex items-center justify-between bg-white`,children:[(0,P.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,P.jsx)(_e,{className:`w-5 h-5 text-blue-600`}),(0,P.jsx)(`h2`,{className:`font-bold text-slate-900 text-base`,children:`Assign Training to Employees`})]}),(0,P.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,P.jsxs)(`button`,{type:`button`,onClick:()=>{let tk=allEmps.find(x=>x.id===`emp-3`||(x.firstName===`Tanya`&&x.lastName===`Kapoor`));let bus=tk&&tk.businessUnit?Array.from(new Set([buOpts[0],tk.businessUnit])):[buOpts[0]];setBuSel(bus),d([...s]),p([...c]),allEmps.length>0&&h(filterEmps(bus,[...s],[...c]).map(x=>x.id)),!isTrainingLocked&&!g&&eligibleProgrammes.length>0&&_(eligibleProgrammes[0].id),setAssignError(``),y(`2026-11-04`),x(`2026-12-01`)},className:`flex items-center gap-1 bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 px-2.5 py-1 rounded text-xs font-bold transition-colors shadow-xs`,title:`Quick auto-fill defaults`,children:[(0,P.jsx)(Ke,{className:`w-3.5 h-3.5 text-amber-600`}),(0,P.jsx)(`span`,{children:`Auto-Fill`})]}),(0,P.jsx)(`button`,{onClick:r,className:`p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors`,children:(0,P.jsx)(N,{className:`w-5 h-5`})})]})]}),(0,P.jsxs)(`form`,{onSubmit:async ev=>{ev.preventDefault();setAssignError(``);if(isAssigning)return;if(!g){setAssignError(`Please select an active training.`);return}let selProg=eligibleProgrammes.find(p=>p.id===g);if(!selProg){setAssignError(`This training is currently inactive and cannot be assigned.`);return}if(!v){setAssignError(`Please select a Start Date.`);return}if(m.length===0){setAssignError(`Please select at least one employee and a training.`);return}let selectedEmps=m.map(id=>allEmps.find(emp=>emp.id===id)).filter(Boolean);if(selectedEmps.length===0){setAssignError(`Please select at least one employee and a training.`);return}let method=buSel.length>0?`business_unit`:u.length>0&&u.length<s.length?`department`:selectedEmps.length>1?`bulk`:`individual`;setIsAssigning(!0);try{let res=await i({programme:selProg,employees:selectedEmps,assignmentMethod:method,startDate:v,endDate:b});if(res&&res.success===!1){setAssignError(res.message||`This training is currently inactive and cannot be assigned.`);return}r()}catch(err){setAssignError(err?.message||`Unable to assign training.`)}finally{setIsAssigning(!1)}},className:`p-6 space-y-4 flex-1 overflow-y-auto text-xs`,children:[assignError&&(0,P.jsxs)(`div`,{className:`bg-rose-50 border border-rose-200 rounded-lg px-3 py-2.5 text-rose-700 text-xs font-semibold flex items-center justify-between`,children:[(0,P.jsx)(`span`,{children:assignError}),(0,P.jsx)(`button`,{type:`button`,onClick:()=>setAssignError(``),className:`text-rose-500 hover:text-rose-800 ml-2`,children:`✕`})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsxs)(`label`,{className:`inline-flex items-center gap-1.5 font-bold text-slate-700 mb-1.5`,children:[(0,P.jsxs)(`span`,{children:[`Training Name `,(0,P.jsx)(`span`,{className:`text-rose-500`,children:`*`})]}),(0,P.jsx)(InfoTip,{text:`Only Published & Active trainings are available for assignment`})]}),(0,P.jsxs)(`select`,{value:g,disabled:isTrainingLocked,onChange:ev=>{if(isTrainingLocked)return;_(ev.target.value),setAssignError(``)},className:`w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${isTrainingLocked?`bg-slate-100 text-slate-700 font-medium cursor-not-allowed opacity-90`:(`bg-white `+(g===``?`text-slate-400`:`text-slate-800 font-medium`))}`,children:[(0,P.jsx)(`option`,{value:``,children:eligibleProgrammes.length===0?`No active published trainings available`:`Select Training Name...`}),eligibleProgrammes.map(p=>(0,P.jsxs)(`option`,{value:p.id,className:`text-slate-800 font-medium`,children:[p.name,` (`,p.version||`v1`,`)`]},p.id))]})]}),(0,P.jsxs)(`div`,{className:`relative`,ref:buRef,children:[(0,P.jsxs)(`div`,{className:`flex items-center justify-between mb-1`,children:[(0,P.jsxs)(`label`,{className:`inline-flex items-center gap-1.5 font-bold text-slate-700 mb-1.5`,children:[(0,P.jsx)(`span`,{children:`Business Unit`}),(0,P.jsx)(InfoTip,{text:`Select one or more business units to assign this training`})]}),buSel.length>0&&buSel.length<buOpts.length&&(0,P.jsxs)(`span`,{className:`text-[11px] text-slate-500 font-medium`,children:[buSel.length,` selected`]})]}),(0,P.jsxs)(`button`,{type:`button`,onClick:()=>ee(S===`businessUnit`?null:`businessUnit`),className:`w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-700 flex items-center justify-between cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/20 hover:border-slate-400 transition-colors text-left`,children:[(0,P.jsx)(`span`,{className:`truncate ${buSel.length===0?`text-slate-400`:`text-slate-800 font-medium`}`,children:buButtonText()}),(0,P.jsx)(re,{className:`w-4 h-4 text-slate-400 shrink-0 transition-transform ${S===`businessUnit`?`rotate-180 text-blue-600`:``}`})]}),S===`businessUnit`&&(0,P.jsxs)(`div`,{className:`absolute left-0 right-0 top-full mt-1.5 bg-white border border-slate-200 rounded-xl shadow-2xl z-30 overflow-hidden animate-in fade-in zoom-in-95 duration-100`,children:[(0,P.jsxs)(`div`,{className:`p-2.5 border-b border-slate-100 bg-slate-50 flex items-center justify-between text-xs`,children:[(0,P.jsxs)(`span`,{className:`font-bold text-slate-700`,children:[buSel.length,` of `,buOpts.length,` Selected`]}),(0,P.jsx)(`button`,{type:`button`,onClick:toggleAllBu,className:`text-blue-600 hover:text-blue-800 font-bold text-xs hover:underline cursor-pointer`,children:buSel.length===buOpts.length?`Deselect All`:`Select All`})]}),(0,P.jsx)(`div`,{className:`max-h-48 overflow-y-auto divide-y divide-slate-100`,children:buOpts.map(bu=>{let chk=buSel.includes(bu);return(0,P.jsxs)(`div`,{onClick:()=>toggleOneBu(bu),className:`p-2.5 flex items-center justify-between hover:bg-slate-50 cursor-pointer transition-colors group`,children:[(0,P.jsx)(`span`,{className:`font-semibold text-slate-800 text-xs group-hover:text-blue-600 transition-colors`,children:bu}),(0,P.jsx)(`div`,{className:`w-4 h-4 rounded border flex items-center justify-center transition-colors ${chk?`bg-blue-600 border-blue-600 text-white`:`border-slate-300 group-hover:border-slate-400`}`,children:chk&&(0,P.jsx)(ne,{className:`w-3 h-3 stroke-[3]`})})]},bu)})})]})]}),(0,P.jsxs)(`div`,{className:`relative`,ref:C,children:[(0,P.jsxs)(`div`,{className:`flex items-center justify-between mb-1`,children:[(0,P.jsxs)(`label`,{className:`inline-flex items-center gap-1.5 font-bold text-slate-700 mb-1.5`,children:[(0,P.jsx)(`span`,{children:`Department`}),(0,P.jsx)(InfoTip,{text:`Filter employees by multiple departments`})]}),u.length>0&&u.length<s.length&&(0,P.jsxs)(`span`,{className:`text-[11px] text-slate-500 font-medium`,children:[u.length,` selected`]})]}),(0,P.jsxs)(`button`,{type:`button`,onClick:()=>ee(S===`department`?null:`department`),className:`w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-700 flex items-center justify-between cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/20 hover:border-slate-400 transition-colors text-left`,children:[(0,P.jsx)(`span`,{className:`truncate ${u.length===0?`text-slate-400`:`text-slate-800 font-medium`}`,children:ae()}),(0,P.jsx)(re,{className:`w-4 h-4 text-slate-400 shrink-0 transition-transform ${S===`department`?`rotate-180 text-blue-600`:``}`})]}),S===`department`&&(0,P.jsxs)(`div`,{className:`absolute left-0 right-0 top-full mt-1.5 bg-white border border-slate-200 rounded-xl shadow-2xl z-30 overflow-hidden animate-in fade-in zoom-in-95 duration-100`,children:[(0,P.jsxs)(`div`,{className:`p-2.5 border-b border-slate-100 bg-slate-50 flex items-center justify-between text-xs`,children:[(0,P.jsxs)(`span`,{className:`font-bold text-slate-700`,children:[u.length,` of `,s.length,` Selected`]}),(0,P.jsx)(`button`,{type:`button`,onClick:ie,className:`text-blue-600 hover:text-blue-800 font-bold text-xs hover:underline cursor-pointer`,children:u.length===s.length?`Deselect All`:`Select All`})]}),(0,P.jsx)(`div`,{className:`max-h-48 overflow-y-auto divide-y divide-slate-100`,children:s.map(e=>{let t=u.includes(e);return(0,P.jsxs)(`div`,{onClick:()=>E(e),className:`p-2.5 flex items-center justify-between hover:bg-slate-50 cursor-pointer transition-colors group`,children:[(0,P.jsx)(`span`,{className:`font-semibold text-slate-800 text-xs group-hover:text-blue-600 transition-colors`,children:e}),(0,P.jsx)(`div`,{className:`w-4 h-4 rounded border flex items-center justify-center transition-colors ${t?`bg-blue-600 border-blue-600 text-white`:`border-slate-300 group-hover:border-slate-400`}`,children:t&&(0,P.jsx)(ne,{className:`w-3 h-3 stroke-[3]`})})]},e)})})]})]}),(0,P.jsxs)(`div`,{className:`relative`,ref:w,children:[(0,P.jsxs)(`div`,{className:`flex items-center justify-between mb-1`,children:[(0,P.jsxs)(`label`,{className:`inline-flex items-center gap-1.5 font-bold text-slate-700 mb-1.5`,children:[(0,P.jsx)(`span`,{children:`Designation`}),(0,P.jsx)(InfoTip,{text:`Filter employees by multiple designations`})]}),f.length>0&&f.length<c.length&&(0,P.jsxs)(`span`,{className:`text-[11px] text-slate-500 font-medium`,children:[f.length,` selected`]})]}),(0,P.jsxs)(`button`,{type:`button`,onClick:()=>ee(S===`designation`?null:`designation`),className:`w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-700 flex items-center justify-between cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/20 hover:border-slate-400 transition-colors text-left`,children:[(0,P.jsx)(`span`,{className:`truncate ${f.length===0?`text-slate-400`:`text-slate-800 font-medium`}`,children:D()}),(0,P.jsx)(re,{className:`w-4 h-4 text-slate-400 shrink-0 transition-transform ${S===`designation`?`rotate-180 text-blue-600`:``}`})]}),S===`designation`&&(0,P.jsxs)(`div`,{className:`absolute left-0 right-0 top-full mt-1.5 bg-white border border-slate-200 rounded-xl shadow-2xl z-30 overflow-hidden animate-in fade-in zoom-in-95 duration-100`,children:[(0,P.jsxs)(`div`,{className:`p-2.5 border-b border-slate-100 bg-slate-50 flex items-center justify-between text-xs`,children:[(0,P.jsxs)(`span`,{className:`font-bold text-slate-700`,children:[f.length,` of `,c.length,` Selected`]}),(0,P.jsx)(`button`,{type:`button`,onClick:oe,className:`text-blue-600 hover:text-blue-800 font-bold text-xs hover:underline cursor-pointer`,children:f.length===c.length?`Deselect All`:`Select All`})]}),(0,P.jsx)(`div`,{className:`max-h-48 overflow-y-auto divide-y divide-slate-100`,children:c.map(e=>{let t=f.includes(e);return(0,P.jsxs)(`div`,{onClick:()=>se(e),className:`p-2.5 flex items-center justify-between hover:bg-slate-50 cursor-pointer transition-colors group`,children:[(0,P.jsx)(`span`,{className:`font-semibold text-slate-800 text-xs group-hover:text-blue-600 transition-colors`,children:e}),(0,P.jsx)(`div`,{className:`w-4 h-4 rounded border flex items-center justify-center transition-colors ${t?`bg-blue-600 border-blue-600 text-white`:`border-slate-300 group-hover:border-slate-400`}`,children:t&&(0,P.jsx)(ne,{className:`w-3 h-3 stroke-[3]`})})]},e)})})]})]}),(0,P.jsxs)(`div`,{className:`relative`,ref:te,children:[(0,P.jsxs)(`div`,{className:`flex items-center justify-between mb-1`,children:[(0,P.jsxs)(`label`,{className:`inline-flex items-center gap-1.5 font-bold text-slate-700 mb-1.5`,children:[(0,P.jsxs)(`span`,{children:[`Employee (s) `,(0,P.jsx)(`span`,{className:`text-rose-500`,children:`*`})]}),(0,P.jsx)(InfoTip,{text:`Select employees to receive this assignment`})]}),m.length>0&&(0,P.jsxs)(`span`,{className:`text-[11px] text-slate-500 font-medium`,children:[m.length,` selected`]})]}),(0,P.jsxs)(`button`,{type:`button`,onClick:()=>ee(S===`employee`?null:`employee`),className:`w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-700 flex items-center justify-between cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/20 hover:border-slate-400 transition-colors text-left`,children:[(0,P.jsx)(`span`,{className:`truncate ${m.length===0?`text-slate-400`:`text-slate-800 font-medium`}`,children:(()=>{if(m.length===0)return`Select Employee (s)...`;if(m.length===T.length&&T.length>1)return`All Employees (${T.length} selected)`;let t=allEmps.find(e=>e.id===m[0]);return t?m.length===1?`${t.firstName} ${t.lastName}`:`${t.firstName} ${t.lastName} (+${m.length-1} more)`:`${m.length} employee(s) selected`})()}),(0,P.jsx)(re,{className:`w-4 h-4 text-slate-400 shrink-0 transition-transform ${S===`employee`?`rotate-180 text-blue-600`:``}`})]}),S===`employee`&&(0,P.jsxs)(`div`,{className:`absolute left-0 right-0 top-full mt-1.5 bg-white border border-slate-200 rounded-xl shadow-2xl z-30 overflow-hidden animate-in fade-in zoom-in-95 duration-100`,children:[(0,P.jsxs)(`div`,{className:`p-2.5 border-b border-slate-100 bg-slate-50 flex items-center justify-between text-xs`,children:[(0,P.jsxs)(`span`,{className:`font-bold text-slate-700`,children:[m.length,` of `,T.length,` Selected`]}),(0,P.jsx)(`button`,{type:`button`,onClick:ce,className:`text-blue-600 hover:text-blue-800 font-bold text-xs hover:underline cursor-pointer`,children:allTSelected?`Deselect All`:`Select All`})]}),(0,P.jsxs)(`div`,{className:`max-h-48 overflow-y-auto divide-y divide-slate-100`,children:[T.map(e=>{let t=m.includes(e.id);return(0,P.jsxs)(`div`,{onClick:()=>le(e.id),className:`p-2.5 flex items-center justify-between hover:bg-slate-50 cursor-pointer transition-colors group`,children:[(0,P.jsxs)(`span`,{className:`font-semibold text-slate-800 text-xs group-hover:text-blue-600 transition-colors`,children:[e.firstName,` `,e.lastName]}),(0,P.jsx)(`div`,{role:`checkbox`,"aria-checked":t,className:`w-4 h-4 rounded border flex items-center justify-center transition-colors ${t?`bg-blue-600 border-blue-600 text-white`:`border-slate-300 group-hover:border-slate-400`}`,children:t&&(0,P.jsx)(ne,{className:`w-3 h-3 stroke-[3]`})})]},e.id)}),T.length===0&&(0,P.jsx)(`div`,{className:`p-4 text-center text-slate-400 text-xs`,children:`No employees match the selected filters.`})]})]})]}),(0,P.jsxs)(`div`,{className:`grid grid-cols-2 gap-3`,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsxs)(`label`,{className:`inline-flex items-center gap-1.5 font-bold text-slate-700 mb-1.5`,children:[(0,P.jsxs)(`span`,{children:[`Start Date `,(0,P.jsx)(`span`,{className:`text-rose-500`,children:`*`})]}),(0,P.jsx)(InfoTip,{text:`Training assignment start date`})]}),(0,P.jsx)(`div`,{className:`relative`,children:(0,P.jsx)(`input`,{type:`date`,value:v,onChange:e=>y(e.target.value),className:`w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20`,required:!0})})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsxs)(`label`,{className:`inline-flex items-center gap-1.5 font-bold text-slate-700 mb-1.5`,children:[(0,P.jsx)(`span`,{children:`End Date`}),(0,P.jsx)(InfoTip,{text:`Training assignment completion due date`})]}),(0,P.jsx)(`div`,{className:`relative`,children:(0,P.jsx)(`input`,{type:`date`,value:b,onChange:e=>x(e.target.value),className:`w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20`})})]})]}),(()=>{let selProg=eligibleProgrammes.find(p=>p.id===g);if(!selProg||!selProg.addSkillToProfile||!Array.isArray(selProg.selectedSkillIds)||selProg.selectedSkillIds.length===0||m.length===0)return null;let master=Array.isArray(skillsConfig)&&skillsConfig.length>0?skillsConfig:DEFAULT_SKILLS_SEED;let lvls=Array.isArray(skillLevels)&&skillLevels.length>0?skillLevels:DEFAULT_SKILL_LEVELS_SEED;let rankOf=nm=>{let i=lvls.findIndex(x=>String(x.name||"").toLowerCase()===String(nm||"").toLowerCase());return i!==-1?i+1:0};let awLvl=selProg.skillLevel||(lvls[0]?.name||"Beginner");let awRank=rankOf(awLvl);let selEmps=m.map(id=>allEmps.find(x=>x.id===id)).filter(Boolean);if(selEmps.length===0)return null;return(0,P.jsxs)("div",{className:"p-3 rounded-xl border border-purple-200 bg-purple-50/40 space-y-2 text-[11px]",children:[(0,P.jsxs)("div",{className:"flex items-center justify-between gap-2",children:[(0,P.jsx)("span",{className:"font-bold text-purple-700 uppercase tracking-wider text-[10px]",children:"Employee Skill Check (Informational)"}),(0,P.jsx)("span",{className:"text-[10px] text-purple-600 font-medium",children:"Updated only on completion"})]}),(0,P.jsx)("div",{className:"space-y-1.5 max-h-28 overflow-y-auto",children:selEmps.slice(0,5).map(emp=>{let recs=resolveEmpSkillRecords(emp,empSkillsMap,master);return(0,P.jsxs)("div",{className:"flex items-start justify-between gap-2 bg-white border border-purple-100 rounded-lg px-2.5 py-1.5",children:[(0,P.jsx)("span",{className:"font-semibold text-slate-800 shrink-0",children:emp.firstName+" "+emp.lastName}),(0,P.jsx)("div",{className:"flex flex-wrap gap-1 justify-end",children:selProg.selectedSkillIds.map(sid=>{let sm=master.find(x=>x.id===sid||normSkillKey(x.name)===normSkillKey(sid));let sName=sm?sm.name:sid;let cur=recs.find(r=>r.skillId===sid||normSkillKey(r.skillName)===normSkillKey(sName));let curLvl=cur?(cur.skillLevel||cur.level):null;let curRank=curLvl?rankOf(curLvl):0;let tag=!cur?("+ Add "+awLvl):awRank>curRank?("Upgrade "+curLvl+"→"+awLvl):("Retain "+curLvl);return(0,P.jsx)("span",{className:"px-1.5 py-0.5 rounded bg-purple-50 text-purple-700 border border-purple-200 font-medium text-[10px]",children:sName+": "+tag},sid)})})]},emp.id)})})]})})(),(0,P.jsxs)(`div`,{className:`pt-6 flex items-center justify-end gap-3 border-t border-slate-200`,children:[(0,P.jsx)(`button`,{type:`button`,onClick:r,className:`px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors shadow-xs`,children:`Cancel`}),(0,P.jsx)(`button`,{type:`submit`,disabled:isAssigning,className:`px-5 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-60 rounded-lg shadow-xs transition-colors`,children:isAssigning?`Assigning...`:`Assign Training`})]})]})]})})}function _t({assignment:e,onClose:t,onSaveEvaluation:n}){
  return (0,P.jsx)("div",{className:"fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-50 flex justify-end animate-in fade-in duration-150",children:(0,P.jsxs)("div",{className:"bg-white w-full max-w-3xl h-full shadow-2xl flex flex-col justify-between border-l border-slate-200 animate-in slide-in-from-right duration-200 overflow-hidden",children:[
    (0,P.jsxs)("div",{className:"p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50 shrink-0",children:[
      (0,P.jsxs)("div",{children:[
        (0,P.jsxs)("div",{className:"flex items-center gap-2",children:[
          (0,P.jsx)(Me,{className:"w-5 h-5 text-blue-600"}),
          (0,P.jsx)("h2",{className:"font-bold text-slate-900 text-base",children:"Employee Training & Assessment Record"})
        ]}),
        (0,P.jsx)("p",{className:"text-xs text-slate-500 mt-0.5",children:"Automated evaluation record, passing score verification, and issued credential."})
      ]}),
      (0,P.jsx)("button",{onClick:t,className:"p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors",children:(0,P.jsx)(N,{className:"w-5 h-5"})})
    ]}),

    (0,P.jsxs)("div",{className:"p-6 space-y-6 flex-1 overflow-y-auto",children:[
      (0,P.jsxs)("div",{className:"bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:[
        (0,P.jsxs)("div",{className:"flex items-center gap-3",children:[
          (0,P.jsx)("div",{className:"w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-sm shadow-inner",children:e.employeeName?e.employeeName[0]:"T"}),
          (0,P.jsxs)("div",{children:[
            (0,P.jsx)("div",{className:"font-bold text-slate-900 text-sm",children:e.employeeName||"Tanya Kapoor"}),
            (0,P.jsx)("div",{className:"text-xs text-slate-500",children:"Business Analysis • Business analyst"})
          ]})
        ]}),
        (0,P.jsxs)("div",{className:"text-right",children:[
          (0,P.jsx)("div",{className:"text-[10px] font-bold uppercase tracking-wider text-slate-400",children:"TRAINING NAME"}),
          (0,P.jsx)("div",{className:"font-bold text-slate-900 text-xs",children:e.programmeName||"CollabCRM Recruitment & Client Portal Workflows"})
        ]})
      ]}),

      (0,P.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[
        (0,P.jsxs)("div",{className:"bg-slate-50 border border-slate-200 rounded-xl p-4",children:[
          (0,P.jsx)("div",{className:"text-[10px] font-bold uppercase text-slate-400",children:"ASSESSMENT SCORE"}),
          (0,P.jsxs)("div",{className:"text-2xl font-black text-emerald-700 mt-1 tabular-nums",children:[e.score||92,"%"]}),
          (0,P.jsx)("div",{className:"text-[11px] text-emerald-700 font-semibold mt-1",children:"Passed (> 80% threshold) ✓"})
        ]}),
        (0,P.jsxs)("div",{className:"bg-slate-50 border border-slate-200 rounded-xl p-4",children:[
          (0,P.jsx)("div",{className:"text-[10px] font-bold uppercase text-slate-400",children:"RESOURCES COMPLETED"}),
          (0,P.jsx)("div",{className:"text-2xl font-black text-slate-900 mt-1 tabular-nums",children:"4/4"}),
          (0,P.jsx)("div",{className:"text-[11px] text-emerald-700 font-medium mt-1",children:"100% Mandatory Done ✓"})
        ]}),
        (0,P.jsxs)("div",{className:"bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between",children:[
          (0,P.jsx)("div",{className:"text-[10px] font-bold uppercase text-slate-400",children:"CERTIFICATE STATUS"}),
          (0,P.jsx)("div",{className:"text-xs font-bold text-emerald-700 mt-1",children:"Issued & Verified ✓"}),
          (0,P.jsx)("div",{className:"text-[10px] text-slate-500 font-mono mt-0.5",children:"ID: TRN-2026-0032"})
        ]})
      ]}),

      (0,P.jsxs)("div",{className:"bg-emerald-50/70 border border-emerald-200 rounded-xl p-4 space-y-1 text-xs",children:[
        (0,P.jsxs)("div",{className:"font-bold text-emerald-800 flex items-center gap-1.5",children:[
          (0,P.jsx)(D,{className:"w-4 h-4 text-emerald-600"}),
          (0,P.jsx)("span",{children:"Automated System Evaluation Complete"})
        ]}),
        (0,P.jsx)("p",{className:"text-emerald-700 text-[11px] leading-relaxed",children:"Employee scored strictly above 80% on the assessment after finishing all mandatory coursework. The certificate was automatically issued without requiring manual management evaluation."})
      ]}),

      (0,P.jsxs)("div",{className:"bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs space-y-2",children:[
        (0,P.jsx)("div",{className:"text-[10px] font-bold uppercase text-slate-400",children:"Completion Record"}),
        (0,P.jsxs)("div",{className:"flex justify-between text-slate-700",children:[
          (0,P.jsx)("span",{children:"Completion Date:"}),
          (0,P.jsx)("strong",{children:"05-Nov-2026"})
        ]}),
        (0,P.jsxs)("div",{className:"flex justify-between text-slate-700",children:[
          (0,P.jsx)("span",{children:"Passing Criteria:"}),
          (0,P.jsx)("strong",{children:"Strictly > 80% on assessment"})
        ]}),
        (0,P.jsxs)("div",{className:"flex justify-between text-slate-700",children:[
          (0,P.jsx)("span",{children:"Employee Score Achieved:"}),
          (0,P.jsx)("strong",{className:"text-emerald-700",children:(e.score||92) + "%"})
        ]})
      ]})
    ]}),

    (0,P.jsxs)("div",{className:"p-5 border-t border-slate-200 bg-slate-50 flex items-center justify-between shrink-0",children:[
      (0,P.jsx)("button",{type:"button",onClick:t,className:"px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-300 rounded-lg shadow-sm transition-colors",children:"Close"}),
      (0,P.jsxs)("button",{type:"button",onClick:()=>alert("Downloading certificate credential TRN-2026-0032..."),className:"px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors flex items-center gap-1.5",children:[
        (0,P.jsx)(C,{className:"w-4 h-4 text-white"}),
        (0,P.jsx)("span",{children:"Download Certificate PDF ↗"})
      ]})
    ]})
  ]})});
}

function SkillMatrixPage({employees,employeeSkills,skillAwardHistory,skillsConfig,skillLevels,currentUser,programmes,onManageEmployeeSkill,canManageSkills,onNavigateToProgramme}){
  let[subTab,setSubTab]=(0,l.useState)("overview");
  let[scopeMode,setScopeMode]=(0,l.useState)("self");
  let[selectedEmpId,setSelectedEmpId]=(0,l.useState)("emp-3");
  let[detailSkill,setDetailSkill]=(0,l.useState)(null);
  let[sortCol,setSortCol]=(0,l.useState)(null);
  let[sortDir,setSortDir]=(0,l.useState)("asc");
  let[showModal,setShowModal]=(0,l.useState)(!1);
  let[draftRows,setDraftRows]=(0,l.useState)([]);
  let[formErr,setFormErr]=(0,l.useState)("");
  let[formBusy,setFormBusy]=(0,l.useState)(!1);
  let[histSortDir,setHistSortDir]=(0,l.useState)("desc");
  let[histRangeStart,setHistRangeStart]=(0,l.useState)("");
  let[histRangeEnd,setHistRangeEnd]=(0,l.useState)("");
  let[showRangePicker,setShowRangePicker]=(0,l.useState)(!1);
  let[orgSearch,setOrgSearch]=(0,l.useState)("");

  let empList=Array.isArray(employees)?employees:[];
  let selfEmp=empList.find(x=>(x.firstName+" "+x.lastName)===currentUser?.name)||empList.find(x=>x.id==="emp-3")||empList[0]||{id:"emp-3",code:"CO-5039",firstName:"Tanya",lastName:"Kapoor",designation:"Business Analyst",department:"Business Analysis",experience:"3Y 11M",businessUnit:"Enterprise Solutions"};
  let teamList=empList.filter(x=>x.id!==selfEmp.id);
  let activeEmp=(()=>{
    if(scopeMode==="self")return selfEmp;
    let found=empList.find(x=>x.id===selectedEmpId);
    if(found)return found;
    return teamList[0]||selfEmp;
  })();

  let handleScopeChange=nextScope=>{
    setScopeMode(nextScope);
    setDetailSkill(null);
    if(nextScope==="self"){
      setSelectedEmpId(selfEmp.id);
    }else if(nextScope==="team"){
      setSelectedEmpId(teamList[0]?.id||selfEmp.id);
    }else{
      setSelectedEmpId(selfEmp.id);
    }
  };

  let masterSkills=Array.isArray(skillsConfig)&&skillsConfig.length>0?skillsConfig:DEFAULT_SKILLS_SEED;
  let activeMasterSkills=masterSkills.filter(s=>s.active!==!1);
  let levelsCfg=Array.isArray(skillLevels)&&skillLevels.length>0?skillLevels:DEFAULT_SKILL_LEVELS_SEED;

  let empKey=canonicalEmpSkillKey(activeEmp?.id||activeEmp?.code);
  let empSkillRecs=resolveEmpSkillRecords(activeEmp,employeeSkills,skillsConfig);
  let allHist=Array.isArray(skillAwardHistory)?skillAwardHistory:[];
  let empHistRecs=allHist.filter(h=>canonicalEmpSkillKey(h.employeeId)===empKey);

  let getLevelPillStyle=lvl=>{
    let s=String(lvl||"").toLowerCase();
    if(s.includes("expert")||s.includes("advanced"))return{backgroundColor:"#ecfdf5",color:"#047857",borderColor:"#a7f3d0"};
    if(s.includes("inter"))return{backgroundColor:"#fffbeb",color:"#b45309",borderColor:"#fde68a"};
    return{backgroundColor:"#fff1f2",color:"#e11d48",borderColor:"#fecdd3"};
  };

  let getLevelDotColor=lvl=>{
    let s=String(lvl||"").toLowerCase();
    if(s.includes("expert")||s.includes("advanced"))return"#10b981";
    if(s.includes("inter"))return"#f59e0b";
    return"#f43f5e";
  };

  let canEditCurrentEmp=canManageSkills!==!1||(scopeMode==="self"&&canonicalEmpSkillKey(activeEmp.id)===canonicalEmpSkillKey(selfEmp.id));

  let getLevelRank=lvl=>{
    let idx=levelsCfg.findIndex(lv=>String(lv.name||"").toLowerCase()===String(lvl||"").toLowerCase());
    if(idx!==-1)return idx+1;
    let s=String(lvl||"").toLowerCase();
    if(s.includes("expert")||s.includes("advanced"))return levelsCfg.length||3;
    if(s.includes("inter"))return Math.min(2,levelsCfg.length||3);
    return 1;
  };

  let fmtDateTime=val=>{
    if(!val)return"15-Jan-2026, 11:23 AM";
    let s=String(val).trim();
    if(/^\d{1,2}[- ][A-Za-z]{3,}[- ]\d{4},/.test(s))return fmtSysDate(s);
    let d=new Date(s);
    if(!Number.isNaN(d.getTime())&&s.includes("T")){
      let dd=String(d.getDate()).padStart(2,"0");
      let h24=d.getHours();
      let ap=h24>=12?"PM":"AM";
      let h12=String(h24%12||12).padStart(2,"0");
      let mn=String(d.getMinutes()).padStart(2,"0");
      return dd+"-"+SYS_MONTHS[d.getMonth()]+"-"+d.getFullYear()+", "+h12+":"+mn+" "+ap;
    }
    return fmtSysDate(s)+(s.includes(",")?"":", 11:23 AM");
  };

  let formatActorDate=(actor,dt)=>{
    let a=actor||"Ishdeep Anand";
    let d=dt?fmtDateTime(dt):"15-Jan-2026, 11:23 AM";
    return{actor:a,date:d};
  };

  let sortedSkills=[...empSkillRecs];
  if(sortCol){
    sortedSkills.sort((a,b)=>{
      let va="",vb="";
      if(sortCol==="skill"){va=String(a.skillName||"").toLowerCase();vb=String(b.skillName||"").toLowerCase();}
      else if(sortCol==="level"){va=getLevelRank(a.skillLevel||a.level);vb=getLevelRank(b.skillLevel||b.level);return sortDir==="asc"?va-vb:vb-va;}
      else if(sortCol==="created"){va=String(a.createdAt||a.createdDate||"");vb=String(b.createdAt||b.createdDate||"");}
      else if(sortCol==="updated"){va=String(a.updatedAt||a.updatedDate||"");vb=String(b.updatedAt||b.updatedDate||"");}
      if(va<vb)return sortDir==="asc"?-1:1;
      if(va>vb)return sortDir==="asc"?1:-1;
      return 0;
    });
  }

  let toggleSort=col=>{
    if(sortCol===col)setSortDir(sortDir==="asc"?"desc":"asc");
    else{setSortCol(col);setSortDir("asc");}
  };

  let lastModEntry=(()=>{
    if(empHistRecs.length>0){
      let h=empHistRecs[0];
      return{name:h.actorName||h.sourceTrainingName||"Training Recognition",date:fmtDateTime(h.updatedDate||h.createdDate||h.awardedDate)};
    }
    let withDate=empSkillRecs.find(s=>s.updatedBy||s.createdBy||s.updatedAt||s.updatedDate);
    if(withDate)return{name:withDate.updatedBy||withDate.createdBy||"Ishdeep Anand",date:fmtDateTime(withDate.updatedAt||withDate.updatedDate||withDate.createdDate)};
    return{name:"Ishdeep Anand",date:"15-Jan-2026, 11:23 AM"};
  })();

  let buildInitialDraftRows=recs=>{
    let defaultLvl=(levelsCfg[0]?.name)||"Beginner";
    if(!Array.isArray(recs)||recs.length===0){
      return[{rowKey:"row-0",skillId:"",skillLevel:defaultLvl,remarks:""}];
    }
    return recs.map((r,idx)=>({
      rowKey:"row-"+(r.skillId||idx)+"-"+idx,
      skillId:r.skillId||"",
      skillLevel:r.skillLevel||r.level||defaultLvl,
      remarks:r.remarks||""
    }));
  };

  let openAddModal=()=>{
    setFormErr("");
    setDraftRows(buildInitialDraftRows(empSkillRecs));
    setShowModal(!0);
  };

  let openEditModal=()=>{
    setFormErr("");
    setDraftRows(buildInitialDraftRows(empSkillRecs));
    setShowModal(!0);
  };

  let handleAddDraftRow=()=>{
    setFormErr("");
    let used=new Set(draftRows.map(r=>r.skillId).filter(Boolean));
    let nextMaster=activeMasterSkills.find(ms=>!used.has(ms.id));
    let defaultLvl=(levelsCfg[0]?.name)||"Beginner";
    setDraftRows(prev=>[...prev,{rowKey:"row-"+Date.now()+"-"+prev.length,skillId:nextMaster?nextMaster.id:"",skillLevel:defaultLvl,remarks:""}]);
  };

  let handleUpdateDraftRow=(rowKey,patch)=>{
    setFormErr("");
    setDraftRows(prev=>prev.map(r=>r.rowKey===rowKey?{...r,...patch}:r));
  };

  let handleRemoveDraftRow=rowKey=>{
    setFormErr("");
    setDraftRows(prev=>prev.filter(r=>r.rowKey!==rowKey));
  };

  let handleClearDraftRows=()=>{
    setFormErr("");
    setDraftRows([]);
  };

  let handleSaveSkill=async ev=>{
    ev.preventDefault();
    setFormErr("");
    for(let i=0;i<draftRows.length;i++){
      if(!draftRows[i].skillId){setFormErr("Please select a Skill for row "+(i+1)+".");return}
    }
    let seen=new Set(),seenNames=new Set();
    for(let i=0;i<draftRows.length;i++){
      let skObj=masterSkills.find(m=>m.id===draftRows[i].skillId);
      let nk=normSkillKey(skObj?skObj.name:draftRows[i].skillId);
      if(seen.has(draftRows[i].skillId)||seenNames.has(nk)){setFormErr("Duplicate skills (including case-insensitive matches) cannot be selected.");return}
      seen.add(draftRows[i].skillId);
      seenNames.add(nk);
    }
    if(!onManageEmployeeSkill){setFormErr("Skill update handler unavailable.");return}
    setFormBusy(!0);
    try{
      let res=await onManageEmployeeSkill({
        action:"sync",
        source:"skill-matrix",
        employeeId:empKey,
        skills:draftRows.map(r=>({skillId:r.skillId,skillLevel:r.skillLevel,remarks:r.remarks||""}))
      });
      if(res&&res.success===!1){setFormErr(res.message||"Unable to update skills.");return}
      if(detailSkill){
        let updatedList=resolveEmpSkillRecords(activeEmp,res?.employeeSkills||employeeSkills,skillsConfig);
        let updated=updatedList.find(x=>x.skillId===detailSkill.skillId);
        setDetailSkill(updated||null);
      }
      setShowModal(!1);
    }catch(err){
      setFormErr(err?.message||"Unable to save skills.");
    }finally{
      setFormBusy(!1);
    }
  };

  let filteredOrgEmps=(scopeMode==="team"?teamList:empList).filter(emp=>{
    if(!orgSearch)return!0;
    let q=orgSearch.toLowerCase();
    return(emp.firstName+" "+emp.lastName+" "+(emp.department||"")+" "+(emp.designation||"")).toLowerCase().includes(q);
  });

  let activeDetailSkill=detailSkill?(empSkillRecs.find(x=>x.skillId===detailSkill.skillId||x.id===detailSkill.id)||detailSkill):null;

  let parseHistMs=val=>{
    if(!val)return 0;
    let d=new Date(val);
    if(!Number.isNaN(d.getTime()))return d.getTime();
    let m=String(val).match(/^(\d{1,2})[- ]([A-Za-z]{3,})[- ](\d{4})(?:,\s*(\d{1,2}):(\d{2})\s*(AM|PM))?/i);
    if(m){
      let mi=SYS_MONTHS.findIndex(x=>x.toLowerCase()===m[2].slice(0,3).toLowerCase());
      let hh=Number(m[4]||0);
      let mm=Number(m[5]||0);
      if(m[6]&&m[6].toUpperCase()==="PM"&&hh<12)hh+=12;
      if(m[6]&&m[6].toUpperCase()==="AM"&&hh===12)hh=0;
      return new Date(Number(m[3]),Math.max(0,mi),Number(m[1]),hh,mm).getTime();
    }
    return 0;
  };

  let renderHistoryPanel=()=>{
    let baseEntries=[...empHistRecs];
    empSkillRecs.forEach(sk=>{
      let hasRecorded=baseEntries.some(h=>h.skillId===sk.skillId||normSkillKey(h.skillName)===normSkillKey(sk.skillName));
      if(!hasRecorded){
        baseEntries.push({
          id:"seed-hist-"+empKey+"-"+sk.skillId,
          employeeId:empKey,
          skillId:sk.skillId,
          skillName:sk.skillName,
          awardedSkillLevel:sk.skillLevel||sk.level||"Beginner",
          previousLevel:null,
          finalLevel:sk.skillLevel||sk.level||"Beginner",
          outcome:"added",
          sourceTrainingId:sk.sourceTrainingId||null,
          sourceTrainingName:sk.sourceTrainingName||null,
          actorName:sk.createdBy||"Ishdeep Anand",
          awardedDate:sk.awardedDate||sk.createdDate||sk.createdAt||"15-Jan-2026, 11:23 AM",
          createdDate:sk.createdDate||sk.createdAt||"15-Jan-2026, 11:23 AM"
        });
      }
    });
    let startMs=histRangeStart?new Date(histRangeStart+"T00:00:00").getTime():null;
    let endMs=histRangeEnd?new Date(histRangeEnd+"T23:59:59").getTime():null;
    let filteredEntries=baseEntries.filter(h=>{
      let ms=parseHistMs(h.updatedDate||h.awardedDate||h.createdDate);
      if(startMs&&ms<startMs)return!1;
      if(endMs&&ms>endMs)return!1;
      return!0;
    });
    filteredEntries.sort((a,b)=>{
      let ma=parseHistMs(a.updatedDate||a.awardedDate||a.createdDate);
      let mb=parseHistMs(b.updatedDate||b.awardedDate||b.createdDate);
      return histSortDir==="desc"?(mb-ma):(ma-mb);
    });
    return(0,P.jsxs)("div",{className:"bg-white border border-slate-200 rounded-xl shadow-xs",children:[
      (0,P.jsxs)("div",{className:"px-6 py-4 border-b border-slate-100 flex items-center justify-between flex-wrap gap-3",children:[
        (0,P.jsx)("h2",{className:"text-base font-bold text-slate-900",children:"History"}),
        (0,P.jsxs)("div",{className:"flex items-center gap-3 relative",children:[
          (0,P.jsxs)("button",{type:"button",onClick:()=>setShowRangePicker(!showRangePicker),className:"px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-xs text-slate-500 flex items-center gap-2 cursor-pointer",children:[
            (0,P.jsx)("span",{children:(histRangeStart||histRangeEnd)?((histRangeStart||"Start")+" → "+(histRangeEnd||"End")):"Select custom range"}),
            (0,P.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",className:"w-4 h-4 text-slate-400",children:[
              (0,P.jsx)("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),
              (0,P.jsx)("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),
              (0,P.jsx)("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),
              (0,P.jsx)("line",{x1:"3",y1:"10",x2:"21",y2:"10"})
            ]})
          ]}),
          showRangePicker&&(0,P.jsxs)("div",{style:{position:"absolute",right:"90px",top:"38px",zIndex:30},className:"bg-white border border-slate-200 rounded-xl shadow-lg p-3 w-64 space-y-2.5 text-xs",children:[
            (0,P.jsxs)("div",{children:[
              (0,P.jsx)("label",{className:"block text-slate-500 font-medium mb-1",children:"From"}),
              (0,P.jsx)("input",{type:"date",value:histRangeStart,onChange:ev=>setHistRangeStart(ev.target.value),className:"w-full border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs"})
            ]}),
            (0,P.jsxs)("div",{children:[
              (0,P.jsx)("label",{className:"block text-slate-500 font-medium mb-1",children:"To"}),
              (0,P.jsx)("input",{type:"date",value:histRangeEnd,onChange:ev=>setHistRangeEnd(ev.target.value),className:"w-full border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs"})
            ]}),
            (0,P.jsxs)("div",{className:"flex items-center justify-between pt-1",children:[
              (0,P.jsx)("button",{type:"button",onClick:()=>{setHistRangeStart("");setHistRangeEnd("");setShowRangePicker(!1)},className:"text-slate-500 hover:text-slate-700 font-medium cursor-pointer",children:"Clear"}),
              (0,P.jsx)("button",{type:"button",onClick:()=>setShowRangePicker(!1),className:"px-3 py-1 rounded-lg bg-blue-600 text-white font-semibold cursor-pointer",children:"Apply"})
            ]})
          ]}),
          (0,P.jsxs)("button",{type:"button",onClick:()=>setHistSortDir(histSortDir==="desc"?"asc":"desc"),className:"px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-100 flex items-center gap-1.5 cursor-pointer",children:[
            (0,P.jsx)("span",{children:histSortDir==="desc"?"Newest First":"Oldest First"}),
            (0,P.jsx)("span",{className:"text-slate-500",children:"⇅"})
          ]})
        ]})
      ]}),
      filteredEntries.length===0?(0,P.jsx)("div",{style:{padding:"40px"},className:"text-center text-xs text-slate-500",children:"No skill history recorded for the selected range."}):(0,P.jsx)("div",{className:"divide-y divide-slate-100",children:filteredEntries.map((h,idx)=>{
        let outc=String(h.outcome||"added").toLowerCase();
        let finalLvl=h.finalLevel||h.awardedSkillLevel||"Beginner";
        let prevLvl=h.previousLevel;
        let isUpdate=(outc==="upgraded"||outc==="updated"||outc==="manual_update");
        let heading=isUpdate?("Skill Updated ("+h.skillName+")"):outc==="retained"?("Skill Retained ("+h.skillName+")"):outc==="removed"?("Skill Removed ("+h.skillName+")"):"Skill Added";
        let actorLabel=h.actorName||(h.sourceTrainingName?"Training Recognition":(activeEmp.firstName+" "+activeEmp.lastName));
        let tsLabel=fmtDateTime(h.updatedDate||h.awardedDate||h.createdDate);
        return(0,P.jsxs)("div",{style:{padding:"16px 24px",display:"flex",alignItems:"flex-start",gap:"20px",flexWrap:"wrap"},className:"hover:bg-slate-50 transition-colors",children:[
          (0,P.jsxs)("div",{style:{width:"195px",flexShrink:0,paddingRight:"16px",borderRight:"1px solid #f1f5f9"},className:"text-xs",children:[
            (0,P.jsx)("div",{className:"font-medium text-slate-800",children:actorLabel}),
            (0,P.jsx)("div",{style:{marginTop:"2px"},className:"text-slate-500 tabular-nums",children:tsLabel})
          ]}),
          (0,P.jsxs)("div",{style:{flex:1,minWidth:"220px"},className:"space-y-1 text-xs",children:[
            (0,P.jsx)("div",{className:"font-semibold text-blue-600",children:heading}),
            (0,P.jsxs)("div",{className:"text-slate-700",children:[
              (0,P.jsx)("span",{className:"font-semibold text-slate-900",children:"Level: "}),
              isUpdate&&prevLvl?(0,P.jsxs)(P.Fragment,{children:[
                (0,P.jsx)("span",{children:prevLvl}),
                (0,P.jsx)("span",{style:{margin:"0 6px"},className:"text-slate-400",children:">"}),
                (0,P.jsx)("span",{className:"font-medium text-slate-900",children:finalLvl})
              ]}):(0,P.jsx)("span",{children:finalLvl})
            ]}),
            !isUpdate&&(0,P.jsxs)("div",{className:"text-slate-700",children:[
              (0,P.jsx)("span",{className:"font-semibold text-slate-900",children:"Skill Name: "}),
              (0,P.jsx)("span",{children:h.skillName})
            ]}),
            h.sourceTrainingName&&(0,P.jsxs)("div",{className:"text-slate-700",children:[
              (0,P.jsx)("span",{className:"font-semibold text-slate-900",children:"Training Program: "}),
              (0,P.jsx)("span",{children:h.sourceTrainingName})
            ]})
          ]})
        ]},h.id||idx);
      })})
    ]});
  };

  let renderLeftSidebar=()=>(
    (0,P.jsxs)("div",{style:{width:"250px",flexShrink:0,backgroundColor:"#ffffff",borderRight:"1px solid #e2e8f0",display:"flex",flexDirection:"column"},children:[
      (0,P.jsxs)("div",{style:{padding:"20px",borderBottom:"1px solid #f1f5f9"},className:"flex flex-col gap-2.5",children:[
        (0,P.jsxs)("div",{className:"w-14 h-14 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-base font-bold text-slate-700 shrink-0",children:[activeEmp.firstName?.[0]||"T",activeEmp.lastName?.[0]||"K"]}),
        (0,P.jsxs)("div",{className:"min-w-0",children:[
          (0,P.jsx)("div",{className:"text-sm font-bold text-slate-900 truncate",children:activeEmp.firstName+" "+activeEmp.lastName}),
          (0,P.jsx)("div",{className:"text-xs text-slate-500 truncate mt-0.5",children:activeEmp.designation||activeEmp.employeeRole||"Business Analyst"})
        ]})
      ]}),
      (0,P.jsxs)("div",{style:{padding:"14px 20px",borderBottom:"1px solid #f1f5f9"},className:"text-xs",children:[
        (0,P.jsx)("div",{className:"text-slate-400 font-medium mb-1",children:"Department"}),
        (0,P.jsx)("div",{className:"font-medium text-slate-800",children:activeEmp.department||"Business Analysis"})
      ]}),
      (0,P.jsxs)("div",{style:{padding:"14px 20px",borderBottom:"1px solid #f1f5f9"},className:"text-xs",children:[
        (0,P.jsx)("div",{className:"text-slate-400 font-medium mb-2",children:"Experience"}),
        (0,P.jsxs)("div",{className:"space-y-1.5",children:[
          (0,P.jsxs)("div",{className:"flex items-center justify-between gap-2",children:[
            (0,P.jsx)("span",{className:"text-slate-600 truncate",children:"CollabCRM Demo Acc..."}),
            (0,P.jsx)("span",{className:"font-bold text-slate-900 tabular-nums shrink-0",children:"4Y 3M 10D"})
          ]}),
          (0,P.jsxs)("div",{className:"flex items-center justify-between gap-2",children:[
            (0,P.jsx)("span",{className:"text-slate-600 shrink-0",children:"Previous"}),
            (0,P.jsx)("span",{className:"font-bold text-slate-900 tabular-nums shrink-0",children:activeEmp.experience||"-"})
          ]})
        ]})
      ]}),
      (0,P.jsxs)("div",{style:{padding:"14px 20px"},className:"text-xs",children:[
        (0,P.jsx)("div",{className:"text-slate-400 font-medium mb-1",children:"Last Modified by"}),
        (0,P.jsx)("div",{className:"font-medium text-slate-800",children:lastModEntry.name}),
        (0,P.jsx)("div",{className:"text-[11px] text-slate-500 mt-0.5 tabular-nums",children:lastModEntry.date})
      ]})
    ]})
  );

  let renderSkillsCard=()=>(
    (0,P.jsxs)("div",{className:"bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden",children:[
      (0,P.jsxs)("div",{className:"px-5 py-4 border-b border-slate-100 flex items-center justify-between flex-wrap gap-3",children:[
        (0,P.jsxs)("div",{className:"flex items-center gap-2.5",children:[
          (0,P.jsx)("h2",{className:"text-base font-bold text-slate-900",children:"Skills"}),
          (0,P.jsx)("span",{className:"text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-200",children:empSkillRecs.length+" Skills"})
        ]}),
        canEditCurrentEmp&&(0,P.jsx)("button",{type:"button",onClick:openAddModal,className:"bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-xs font-semibold shadow-xs transition-colors cursor-pointer",children:"Add/Edit Skills"})
      ]}),
      (0,P.jsx)("div",{className:"overflow-x-auto",children:(0,P.jsxs)("table",{className:"w-full text-left border-collapse text-xs",children:[
        (0,P.jsx)("thead",{children:(0,P.jsxs)("tr",{className:"border-b border-slate-200 text-slate-500 font-semibold bg-slate-50/50",children:[
          (0,P.jsx)("th",{className:"py-3 px-4 w-12",children:"No."}),
          (0,P.jsx)("th",{className:"py-3 px-4 cursor-pointer select-none hover:text-slate-800",onClick:()=>toggleSort("skill"),children:"Skill ⇅"}),
          (0,P.jsx)("th",{className:"py-3 px-4 cursor-pointer select-none hover:text-slate-800",onClick:()=>toggleSort("level"),children:"Level ⇅"}),
          (0,P.jsx)("th",{className:"py-3 px-4",children:"Roadmap"}),
          (0,P.jsx)("th",{className:"py-3 px-4",children:"Earned From Training"}),
          (0,P.jsx)("th",{className:"py-3 px-4",children:"Remarks"}),
          (0,P.jsx)("th",{className:"py-3 px-4 cursor-pointer select-none hover:text-slate-800",onClick:()=>toggleSort("created"),children:"Created by ⇅"}),
          (0,P.jsx)("th",{className:"py-3 px-4 cursor-pointer select-none hover:text-slate-800",onClick:()=>toggleSort("updated"),children:"Updated by ⇅"}),
          (0,P.jsx)("th",{className:"py-3 px-4 text-center",children:"Action"})
        ]})}),
        (0,P.jsx)("tbody",{className:"divide-y divide-slate-100",children:sortedSkills.length===0?(0,P.jsx)("tr",{children:(0,P.jsx)("td",{colSpan:9,style:{padding:"40px 16px"},className:"text-center text-slate-400 italic",children:"No skills added yet."})}):sortedSkills.map((sk,idx)=>{
          let trainSources=(Array.isArray(sk.sources)?sk.sources:[]).filter(s=>Boolean(s.trainingId));
          if(trainSources.length===0&&sk.sourceTrainingId&&sk.sourceTrainingName){
            trainSources=[{trainingId:sk.sourceTrainingId,trainingName:sk.sourceTrainingName,level:sk.skillLevel,awardedDate:sk.awardedDate}];
          }
          let hasTrainSrc=trainSources.length>0;
          let primaryTrainName=sk.latestSourceTrainingName||trainSources[trainSources.length-1]?.trainingName||sk.sourceTrainingName;
          let rank=getLevelRank(sk.skillLevel||sk.level);
          let creator=formatActorDate(sk.createdBy||"Ishdeep Anand",sk.createdAt||sk.createdDate||"15-Jan-2026, 11:23 AM");
          let hasUpdater=Boolean(sk.updatedBy||(sk.updatedAt&&sk.updatedAt!==sk.createdAt));
          let updater=hasUpdater?formatActorDate(sk.updatedBy||"Ishdeep Anand",sk.updatedAt||sk.updatedDate):null;
          let remarkText=sk.remarks||"-";
          return(0,P.jsxs)("tr",{className:"hover:bg-slate-50 transition-colors",children:[
            (0,P.jsx)("td",{className:"py-3.5 px-4 text-slate-500 font-medium",children:idx+1}),
            (0,P.jsx)("td",{className:"py-3.5 px-4 font-medium text-slate-900",children:(0,P.jsx)("button",{type:"button",onClick:()=>setDetailSkill(sk),className:"hover:text-blue-600 text-left font-medium cursor-pointer",children:sk.skillName})}),
            (0,P.jsx)("td",{className:"py-3.5 px-4",children:(0,P.jsx)("span",{style:getLevelPillStyle(sk.skillLevel||sk.level),className:"inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold border",children:sk.skillLevel||sk.level||"Beginner"})}),
            (0,P.jsx)("td",{className:"py-3.5 px-4",children:hasTrainSrc&&rank>0?(0,P.jsx)("div",{style:{minWidth:"145px"},className:"space-y-1",children:levelsCfg.map((lv,li)=>{
              let reached=(li+1)<=rank;
              return(0,P.jsxs)("div",{className:"flex items-center gap-2 text-[10px]",children:[
                (0,P.jsx)("span",{className:"w-16 truncate "+(reached?"font-semibold text-slate-800":"text-slate-400"),children:lv.name}),
                (0,P.jsx)("div",{className:"w-12 h-1.5 bg-slate-200 rounded-full overflow-hidden",children:(0,P.jsx)("div",{className:"h-full rounded-full "+(reached?"bg-blue-600":"bg-transparent"),style:{width:reached?"100%":"0%"}})}),
                (0,P.jsx)("span",{className:"text-[10px] tabular-nums "+(reached?"text-blue-600 font-semibold":"text-slate-400"),children:reached?"1 of 1":"0 of 1"}),
                (li+1)===rank&&(0,P.jsx)("span",{className:"px-1.5 py-0 rounded-full text-[9px] font-semibold bg-blue-50 text-blue-600 border border-blue-200",children:"Achieved"})
              ]},lv.id||li);
            })}):(0,P.jsx)("span",{className:"text-slate-400",children:"-"})}),
            (0,P.jsx)("td",{className:"py-3.5 px-4",children:hasTrainSrc?(0,P.jsxs)("div",{className:"flex flex-col items-start gap-1",children:[
              (0,P.jsx)("button",{type:"button",onClick:()=>setDetailSkill(sk),className:"inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-purple-50 text-purple-700 border border-purple-200 text-left cursor-pointer",children:primaryTrainName}),
              trainSources.length>1&&(0,P.jsx)("span",{style:{paddingLeft:"2px"},className:"text-[10px] font-medium text-slate-500",children:"+"+(trainSources.length-1)+" more training"+(trainSources.length>2?"s":"")})
            ]}):(0,P.jsx)("span",{className:"text-slate-400",children:"-"})}),
            (0,P.jsx)("td",{style:{maxWidth:"180px"},className:"py-3.5 px-4 text-slate-600",children:remarkText}),
            (0,P.jsxs)("td",{className:"py-3.5 px-4 text-slate-600",children:[
              (0,P.jsx)("div",{className:"font-medium text-slate-700",children:creator.actor}),
              (0,P.jsx)("div",{className:"text-[11px] text-slate-400 tabular-nums",children:creator.date})
            ]}),
            (0,P.jsx)("td",{className:"py-3.5 px-4 text-slate-600",children:updater?(0,P.jsxs)(P.Fragment,{children:[
              (0,P.jsx)("div",{className:"font-medium text-slate-700",children:updater.actor}),
              (0,P.jsx)("div",{className:"text-[11px] text-slate-400 tabular-nums",children:updater.date})
            ]}):(0,P.jsx)("span",{className:"text-slate-400",children:"-"})}),
            (0,P.jsx)("td",{className:"py-3.5 px-4 text-center",children:(0,P.jsx)("button",{type:"button",onClick:()=>setDetailSkill(sk),title:"View Skill Detail",className:"p-1.5 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-colors cursor-pointer inline-flex items-center justify-center",children:
              (0,P.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"w-4 h-4",children:[
                (0,P.jsx)("path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"}),
                (0,P.jsx)("circle",{cx:"12",cy:"12",r:"3"})
              ]})
            })})
          ]},sk.skillId||idx);
        })})
      ]})})
    ]})
  );

  return(0,P.jsxs)("div",{style:{minHeight:"calc(100vh - 64px)",display:"flex",flexDirection:"column",backgroundColor:"#f8fafc"},children:[
    // Top Breadcrumb Bar (matching CollabCRM header)
    (0,P.jsxs)("div",{style:{padding:"12px 24px",backgroundColor:"#ffffff",borderBottom:"1px solid #e2e8f0"},className:"flex items-center gap-2 text-xs text-slate-500",children:[
      (0,P.jsx)("button",{type:"button",onClick:()=>setDetailSkill(null),className:"hover:text-blue-600 cursor-pointer flex items-center",title:"Skill Matrix Home",children:
        (0,P.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",className:"w-4 h-4 text-slate-400",children:(0,P.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5Z"})})
      }),
      (0,P.jsx)("span",{children:">"}),
      (0,P.jsx)("button",{type:"button",onClick:()=>{setDetailSkill(null);setSubTab("overview")},className:"font-medium hover:text-blue-600 cursor-pointer",children:"Skill Matrix"}),
      (0,P.jsx)("span",{children:">"}),
      activeDetailSkill?(0,P.jsxs)(P.Fragment,{children:[
        (0,P.jsx)("button",{type:"button",onClick:()=>setDetailSkill(null),className:"hover:text-blue-600 cursor-pointer",children:"Overview"}),
        (0,P.jsx)("span",{children:">"}),
        (0,P.jsx)("span",{className:"font-semibold text-blue-600",children:activeDetailSkill.skillName})
      ]}):(0,P.jsx)("span",{className:"font-semibold text-blue-600",children:subTab==="history"?"History":"Overview"})
    ]}),

    activeDetailSkill?(0,P.jsxs)("div",{className:"p-6 space-y-5 max-w-[1600px] w-full mx-auto",children:[
      (0,P.jsxs)("div",{className:"bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex items-start justify-between flex-wrap gap-4",children:[
        (0,P.jsxs)("div",{className:"space-y-2",children:[
          (0,P.jsxs)("button",{type:"button",onClick:()=>setDetailSkill(null),className:"text-xs font-semibold text-slate-600 hover:text-blue-600 flex items-center gap-1 cursor-pointer mb-1",children:[
            (0,P.jsx)("span",{children:"←"}),
            (0,P.jsx)("span",{children:"Back to Overview"})
          ]}),
          (0,P.jsxs)("div",{className:"flex items-center gap-3 flex-wrap",children:[
            (0,P.jsx)("h1",{className:"text-xl font-bold text-slate-900",children:activeDetailSkill.skillName}),
            (0,P.jsx)("span",{style:getLevelPillStyle(activeDetailSkill.skillLevel||activeDetailSkill.level),className:"px-3 py-0.5 rounded-full text-xs font-bold border",children:activeDetailSkill.skillLevel||activeDetailSkill.level||"Beginner"}),
            Boolean(activeDetailSkill.sourceTrainingId||(Array.isArray(activeDetailSkill.sources)&&activeDetailSkill.sources.some(s=>Boolean(s.trainingId))))&&(0,P.jsx)("span",{className:"px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-200",children:"Earned via Training Program"})
          ]}),
          (0,P.jsx)("p",{className:"text-xs text-slate-500",children:(masterSkills.find(m=>m.id===activeDetailSkill.skillId||normSkillKey(m.name)===normSkillKey(activeDetailSkill.skillName))?.description)||"Skill competency tracked across employee development and completed trainings."}),
          (0,P.jsxs)("div",{className:"text-xs text-slate-600 pt-1",children:["Employee: ",(0,P.jsx)("span",{className:"font-bold text-slate-900",children:activeEmp.firstName+" "+activeEmp.lastName})," • ",activeEmp.department]})
        ]}),
        (0,P.jsx)("div",{className:"flex items-center gap-2",children:canEditCurrentEmp&&(0,P.jsx)("button",{type:"button",onClick:openEditModal,className:"bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-xs font-semibold shadow-xs cursor-pointer",children:"Add/Edit Skills"})})
      ]}),

      (0,P.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-5",children:[
        (0,P.jsxs)("div",{className:"lg:col-span-2 bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4",children:[
          (0,P.jsxs)("div",{className:"flex items-center justify-between border-b border-slate-100 pb-3",children:[
            (0,P.jsx)("h2",{className:"text-sm font-bold text-slate-900",children:"Skill Roadmap & Progression"}),
            (0,P.jsx)("span",{className:"text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full",children:getLevelRank(activeDetailSkill.skillLevel||activeDetailSkill.level)+" of "+levelsCfg.length+" Achieved"})
          ]}),
          (0,P.jsx)("div",{className:"space-y-3",children:levelsCfg.map((lvl,li)=>{
            let curRank=getLevelRank(activeDetailSkill.skillLevel||activeDetailSkill.level);
            let reached=(li+1)<=curRank;
            let isCurrent=(li+1)===curRank;
            return(0,P.jsxs)("div",{className:"p-3.5 rounded-xl border "+(reached?"bg-blue-50/40 border-blue-200":"bg-slate-50 border-slate-200"),children:[
              (0,P.jsxs)("div",{className:"flex items-center justify-between text-xs mb-2",children:[
                (0,P.jsxs)("div",{className:"flex items-center gap-2",children:[
                  (0,P.jsx)("span",{className:"font-bold "+(reached?"text-slate-900":"text-slate-500"),children:lvl.name}),
                  isCurrent&&(0,P.jsx)("span",{className:"px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-600 text-white",children:"Current Level"})
                ]}),
                (0,P.jsx)("span",{className:"text-[11px] font-semibold "+(reached?"text-emerald-700":"text-slate-400"),children:reached?"Completed ✓":"Pending"})
              ]}),
              (0,P.jsx)("div",{className:"w-full bg-slate-200 h-2 rounded-full overflow-hidden",children:(0,P.jsx)("div",{className:"h-full rounded-full transition-all "+(reached?"bg-blue-600":"bg-transparent"),style:{width:reached?"100%":"0%"}})})
            ]},lvl.id||li);
          })}),
          (0,P.jsxs)("div",{className:"pt-2 border-t border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs",children:[
            (0,P.jsxs)("div",{children:[(0,P.jsx)("div",{className:"text-slate-400 font-medium",children:"Remarks"}),(0,P.jsx)("div",{className:"font-semibold text-slate-800 mt-0.5",children:activeDetailSkill.remarks||(activeDetailSkill.sourceTrainingId?("Earned via Training: "+activeDetailSkill.sourceTrainingName):"-")})]}),
            (0,P.jsxs)("div",{children:[(0,P.jsx)("div",{className:"text-slate-400 font-medium",children:"Created by"}),(0,P.jsx)("div",{className:"font-semibold text-slate-800 mt-0.5",children:activeDetailSkill.createdBy||"Ishdeep Anand"}),(0,P.jsx)("div",{className:"text-[11px] text-slate-500",children:fmtDateTime(activeDetailSkill.createdAt||activeDetailSkill.createdDate)})]}),
            (0,P.jsxs)("div",{children:[(0,P.jsx)("div",{className:"text-slate-400 font-medium",children:"Updated by"}),(0,P.jsx)("div",{className:"font-semibold text-slate-800 mt-0.5",children:activeDetailSkill.updatedBy||"-"}),(0,P.jsx)("div",{className:"text-[11px] text-slate-500",children:activeDetailSkill.updatedBy?fmtDateTime(activeDetailSkill.updatedAt||activeDetailSkill.updatedDate):""})]})
          ]})
        ]}),
        (0,P.jsxs)("div",{className:"bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4",children:[
          (0,P.jsx)("h2",{className:"text-sm font-bold text-slate-900 border-b border-slate-100 pb-3",children:"Training & Acquisition Sources"}),
          (()=>{
            let srcs=(Array.isArray(activeDetailSkill.sources)?activeDetailSkill.sources:[]).filter(s=>Boolean(s.trainingId));
            if(srcs.length===0&&activeDetailSkill.sourceTrainingId&&activeDetailSkill.sourceTrainingName){
              srcs=[{trainingId:activeDetailSkill.sourceTrainingId,trainingName:activeDetailSkill.sourceTrainingName,level:activeDetailSkill.skillLevel,awardedDate:activeDetailSkill.awardedDate}];
            }
            if(srcs.length===0)return(0,P.jsx)("div",{className:"text-xs text-slate-500 italic",children:"Assigned in employee skill profile."});
            return(0,P.jsx)("div",{className:"space-y-2.5",children:srcs.map((src,si)=>{
              let matchedProg=src.trainingId?(Array.isArray(programmes)?programmes:[]).find(pr=>pr.id===src.trainingId):null;
              return(0,P.jsxs)("div",{className:"p-3 rounded-lg border bg-purple-50/50 border-purple-200 text-xs space-y-1",children:[
                (0,P.jsxs)("div",{className:"flex items-center justify-between gap-2",children:[
                  (0,P.jsx)("span",{className:"font-bold text-slate-900",children:src.trainingName||"Training Program"}),
                  src.level&&(0,P.jsx)("span",{style:getLevelPillStyle(src.level),className:"px-2 py-0.5 rounded-full text-[10px] font-bold border",children:src.level})
                ]}),
                (0,P.jsxs)("div",{className:"text-[11px] text-slate-500 flex items-center justify-between",children:[
                  (0,P.jsx)("span",{children:"Training Program Completion"}),
                  (0,P.jsx)("span",{children:fmtSysDate(src.awardedDate)||"-"})
                ]}),
                matchedProg&&onNavigateToProgramme&&(0,P.jsx)("button",{type:"button",onClick:()=>onNavigateToProgramme(matchedProg),className:"text-[11px] font-semibold text-blue-600 hover:underline pt-1 cursor-pointer",children:"View Training Program →"})
              ]},si);
            })});
          })()
        ]})
      ]}),

      (0,P.jsxs)("div",{className:"bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-3",children:[
        (0,P.jsx)("h2",{className:"text-sm font-bold text-slate-900",children:"Skill Change History"}),
        (()=>{
          let skillHist=empHistRecs.filter(h=>h.skillId===activeDetailSkill.skillId||normSkillKey(h.skillName)===normSkillKey(activeDetailSkill.skillName));
          if(skillHist.length===0)return(0,P.jsx)("div",{className:"text-xs text-slate-500 italic py-2",children:"No recorded history changes for this skill yet."});
          return(0,P.jsx)("div",{className:"overflow-x-auto",children:(0,P.jsxs)("table",{className:"w-full text-left border-collapse text-xs",children:[
            (0,P.jsx)("thead",{children:(0,P.jsxs)("tr",{className:"border-b border-slate-200 text-slate-400 font-semibold bg-slate-50/50",children:[
              (0,P.jsx)("th",{className:"py-2.5 px-3",children:"Date"}),
              (0,P.jsx)("th",{className:"py-2.5 px-3",children:"Outcome"}),
              (0,P.jsx)("th",{className:"py-2.5 px-3",children:"Previous Level"}),
              (0,P.jsx)("th",{className:"py-2.5 px-3",children:"Awarded Level"}),
              (0,P.jsx)("th",{className:"py-2.5 px-3",children:"Source Training / Action"})
            ]})}),
            (0,P.jsx)("tbody",{className:"divide-y divide-slate-100",children:skillHist.map((h,hi)=>(
              (0,P.jsxs)("tr",{children:[
                (0,P.jsx)("td",{className:"py-2.5 px-3 text-slate-600 tabular-nums",children:fmtDateTime(h.awardedDate||h.createdDate)}),
                (0,P.jsx)("td",{style:{textTransform:"capitalize"},className:"py-2.5 px-3 font-semibold text-slate-800",children:String(h.outcome||"added").replace(/_/g," ")}),
                (0,P.jsx)("td",{className:"py-2.5 px-3 text-slate-500",children:h.previousLevel||"-"}),
                (0,P.jsx)("td",{className:"py-2.5 px-3",children:(0,P.jsx)("span",{style:getLevelPillStyle(h.finalLevel||h.awardedSkillLevel),className:"px-2 py-0.5 rounded-full text-[11px] font-semibold border",children:h.finalLevel||h.awardedSkillLevel})}),
                (0,P.jsx)("td",{className:"py-2.5 px-3 text-slate-700",children:h.sourceTrainingName||"-"})
              ]},h.id||hi)
            ))})
          ]})});
        })()
      ]})
    ]}):(0,P.jsxs)("div",{style:{display:"flex",flex:1,alignItems:"stretch",minHeight:"calc(100vh - 110px)"},children:[
      // Full-height Left Summary Sidebar (attached cleanly like CollabCRM screenshot)
      renderLeftSidebar(),
      // Right Main Workspace
      (0,P.jsxs)("div",{style:{flex:1,minWidth:0,padding:"18px 24px"},className:"space-y-4",children:[
        // Sub-tabs + Self/Team/Organization Switcher
        (0,P.jsxs)("div",{className:"flex items-center justify-between flex-wrap gap-3",children:[
          (0,P.jsxs)("div",{className:"flex items-center gap-2",children:[
            (0,P.jsx)("button",{type:"button",onClick:()=>{setDetailSkill(null);setSubTab("overview")},className:"px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer "+(subTab==="overview"?"bg-blue-50 text-blue-600":"text-slate-600 hover:bg-slate-100"),children:"Overview"}),
            (0,P.jsx)("button",{type:"button",onClick:()=>{setDetailSkill(null);setSubTab("history")},className:"px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer "+(subTab==="history"?"bg-blue-50 text-blue-600":"text-slate-600 hover:bg-slate-100"),children:"History"})
          ]}),
          (0,P.jsx)("div",{className:"inline-flex items-center border border-slate-200 rounded-lg overflow-hidden bg-white shadow-xs",children:["self","team","organization"].map((mode,mi)=>(
            (0,P.jsx)("button",{type:"button",onClick:()=>handleScopeChange(mode),style:mi>0?{borderLeft:"1px solid #e2e8f0"}:undefined,className:"px-3.5 py-1.5 text-xs font-semibold transition-colors cursor-pointer "+(scopeMode===mode?"bg-blue-600 text-white":"text-slate-600 hover:bg-slate-50"),children:mode==="self"?"Self":mode==="team"?"Team":"Organization"},mode)
          ))})
        ]}),

        // Employee Picker Bar when viewing Team or Organization
        (scopeMode==="team"||scopeMode==="organization")&&(0,P.jsxs)("div",{className:"bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-xs flex items-center justify-between flex-wrap gap-3",children:[
          (0,P.jsxs)("div",{className:"flex items-center gap-2 flex-wrap",children:[
            (0,P.jsx)("span",{style:{marginRight:"4px"},className:"text-xs font-semibold text-slate-500",children:scopeMode==="team"?"Team Members:":"Employees:"}),
            filteredOrgEmps.slice(0,10).map(emp=>{
              let recs=resolveEmpSkillRecords(emp,employeeSkills,skillsConfig);
              let earnedCnt=recs.filter(sk=>Boolean(sk.sourceTrainingId||(Array.isArray(sk.sources)&&sk.sources.some(s=>Boolean(s.trainingId))))).length;
              let isSel=activeEmp&&activeEmp.id===emp.id;
              return(0,P.jsxs)("button",{type:"button",onClick:()=>{setSelectedEmpId(emp.id);setDetailSkill(null)},className:"px-3 py-1 rounded-full text-xs font-semibold border transition-colors cursor-pointer flex items-center gap-1.5 "+(isSel?"bg-blue-600 text-white border-blue-600":"bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"),children:[
                (0,P.jsx)("span",{children:emp.firstName+" "+emp.lastName}),
                earnedCnt>0&&(0,P.jsx)("span",{className:"px-1.5 py-0 rounded-full text-[10px] font-bold "+(isSel?"bg-blue-500 text-white":"bg-purple-100 text-purple-700"),children:earnedCnt+" earned"})
              ]},emp.id);
            })
          ]}),
          (0,P.jsx)("input",{type:"text",value:orgSearch,onChange:ev=>setOrgSearch(ev.target.value),placeholder:"Search employee...",className:"border border-slate-200 rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/20 w-48"})
        ]}),

        subTab==="history"?renderHistoryPanel():renderSkillsCard()
      ]})
    ]}),

    // Add/Edit Skills Modal (exact layout, font sizes, spacing & colours using inline CSS + verified Tailwind classes)
    showModal&&(0,P.jsx)("div",{style:{position:"fixed",inset:0,backgroundColor:"rgba(15,23,42,0.5)",backdropFilter:"blur(1px)",zIndex:50,display:"flex",alignItems:"center",justifyContent:"center",padding:"16px"},children:(0,P.jsxs)("div",{style:{width:"min(780px, 95vw)",maxHeight:"90vh",display:"flex",flexDirection:"column"},className:"bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden",children:[
      (0,P.jsxs)("div",{style:{padding:"20px 24px 12px 24px"},className:"flex items-center justify-between",children:[
        (0,P.jsxs)("h3",{style:{fontSize:"15px",fontWeight:600,color:"#0f172a"},children:[
          "Add/Edit Skills - ",
          (0,P.jsx)("span",{style:{color:"#2563eb",fontWeight:600},children:activeEmp.firstName+" "+activeEmp.lastName})
        ]}),
        (0,P.jsx)("button",{type:"button",onClick:()=>setShowModal(!1),style:{padding:"4px",borderRadius:"6px"},className:"text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer",children:(0,P.jsx)(N,{className:"w-4 h-4"})})
      ]}),
      (0,P.jsxs)("form",{onSubmit:handleSaveSkill,style:{display:"flex",flexDirection:"column",flex:1,minHeight:0},children:[
        (0,P.jsxs)("div",{style:{padding:"8px 24px 20px 24px",overflowY:"auto",flex:1},children:[
          formErr&&(0,P.jsx)("div",{style:{marginBottom:"12px"},className:"bg-rose-50 border border-rose-200 rounded-lg px-3 py-2 text-xs text-rose-700 font-medium",children:formErr}),
          (0,P.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"195px 185px 1fr 36px",gap:"12px",marginBottom:"8px"},className:"text-xs font-medium text-slate-500",children:[
            (0,P.jsxs)("div",{children:["Skill ",(0,P.jsx)("span",{className:"text-rose-500",children:"*"})]}),
            (0,P.jsxs)("div",{children:["Level ",(0,P.jsx)("span",{className:"text-rose-500",children:"*"})]}),
            (0,P.jsx)("div",{children:"Remarks"}),
            (0,P.jsx)("div",{})
          ]}),
          draftRows.length===0?(0,P.jsx)("div",{style:{padding:"24px 16px"},className:"text-center text-xs text-slate-400 border border-dashed border-slate-200 rounded-lg",children:"No skills selected. Click + Add below to add a skill."}):(0,P.jsx)("div",{className:"space-y-3",children:draftRows.map((row)=>{
            let usedElsewhere=new Set(draftRows.filter(x=>x.rowKey!==row.rowKey).map(x=>x.skillId).filter(Boolean));
            let rowMasterList=activeMasterSkills.filter(ms=>ms.id===row.skillId||!usedElsewhere.has(ms.id));
            return(0,P.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"195px 185px 1fr 36px",gap:"12px",alignItems:"start"},children:[
              (0,P.jsxs)("div",{style:{position:"relative"},children:[
                (0,P.jsxs)("select",{value:row.skillId,onChange:ev=>handleUpdateDraftRow(row.rowKey,{skillId:ev.target.value}),style:{width:"100%",height:"40px",appearance:"none",WebkitAppearance:"none",paddingLeft:"12px",paddingRight:"30px",fontSize:"13px",color:"#1e293b",backgroundColor:"#ffffff"},className:"rounded-lg border border-slate-300 truncate focus:outline-none focus:border-blue-500 cursor-pointer",children:[
                  (0,P.jsx)("option",{value:"",children:"Select Skill..."}),
                  rowMasterList.map(ms=>(0,P.jsx)("option",{value:ms.id,children:ms.name},ms.id))
                ]}),
                (0,P.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",style:{pointerEvents:"none",position:"absolute",right:"10px",top:"50%",transform:"translateY(-50%)",width:"16px",height:"16px",color:"#94a3b8"},children:(0,P.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m6 9 6 6 6-6"})})
              ]}),
              (0,P.jsxs)("div",{style:{position:"relative"},children:[
                (0,P.jsx)("span",{style:{pointerEvents:"none",position:"absolute",left:"12px",top:"50%",transform:"translateY(-50%)",width:"8px",height:"8px",borderRadius:"9999px",backgroundColor:getLevelDotColor(row.skillLevel)}}),
                (0,P.jsx)("select",{value:row.skillLevel,onChange:ev=>handleUpdateDraftRow(row.rowKey,{skillLevel:ev.target.value}),style:{width:"100%",height:"40px",appearance:"none",WebkitAppearance:"none",paddingLeft:"28px",paddingRight:"30px",fontSize:"13px",color:"#1e293b",backgroundColor:"#ffffff"},className:"rounded-lg border border-slate-300 focus:outline-none focus:border-blue-500 cursor-pointer",children:levelsCfg.map(lv=>(0,P.jsx)("option",{value:lv.name,children:lv.name},lv.id||lv.name))}),
                (0,P.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",style:{pointerEvents:"none",position:"absolute",right:"10px",top:"50%",transform:"translateY(-50%)",width:"16px",height:"16px",color:"#94a3b8"},children:(0,P.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m6 9 6 6 6-6"})})
              ]}),
              (0,P.jsx)("textarea",{rows:2,value:row.remarks,onChange:ev=>handleUpdateDraftRow(row.rowKey,{remarks:ev.target.value}),style:{width:"100%",minHeight:"54px",padding:"8px 12px",fontSize:"13px",color:"#1e293b",backgroundColor:"#ffffff",resize:"both"},className:"rounded-lg border border-slate-300 focus:outline-none focus:border-blue-500"}),
              (0,P.jsx)("button",{type:"button",onClick:()=>handleRemoveDraftRow(row.rowKey),title:"Remove row",style:{width:"36px",height:"36px",marginTop:"2px",border:"1px solid #e2e8f0",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",color:"#f43f5e",backgroundColor:"#ffffff",cursor:"pointer"},children:(0,P.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",className:"w-4 h-4",children:[(0,P.jsx)("circle",{cx:"12",cy:"12",r:"9"}),(0,P.jsx)("line",{x1:"8",y1:"12",x2:"16",y2:"12"})]})})
            ]},row.rowKey);
          })}),
          (0,P.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginTop:"16px"},children:[
            (0,P.jsxs)("button",{type:"button",onClick:handleAddDraftRow,style:{backgroundColor:"#eff6ff",borderColor:"#bfdbfe",color:"#2563eb",padding:"6px 14px",fontSize:"12px",fontWeight:600,borderRadius:"8px",borderWidth:"1px",borderStyle:"solid",display:"inline-flex",alignItems:"center",gap:"6px",cursor:"pointer"},children:[
              (0,P.jsx)("span",{style:{fontSize:"14px",lineHeight:1},children:"+"}),
              (0,P.jsx)("span",{children:"Add"})
            ]}),
            (0,P.jsxs)("button",{type:"button",onClick:handleClearDraftRows,style:{backgroundColor:"#fff1f2",borderColor:"#fecdd3",color:"#f43f5e",padding:"6px 14px",fontSize:"12px",fontWeight:600,borderRadius:"8px",borderWidth:"1px",borderStyle:"solid",display:"inline-flex",alignItems:"center",gap:"6px",cursor:"pointer"},children:[
              (0,P.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",className:"w-3.5 h-3.5",children:[(0,P.jsx)("circle",{cx:"12",cy:"12",r:"9"}),(0,P.jsx)("line",{x1:"8",y1:"12",x2:"16",y2:"12"})]}),
              (0,P.jsx)("span",{children:"Clear All"})
            ]})
          ]})
        ]}),
        (0,P.jsxs)("div",{style:{padding:"14px 24px",borderTop:"1px solid #f1f5f9",display:"flex",alignItems:"center",justifyContent:"flex-end",gap:"10px",backgroundColor:"#ffffff"},children:[
          (0,P.jsx)("button",{type:"button",onClick:()=>setShowModal(!1),className:"px-5 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold cursor-pointer",children:"Cancel"}),
          (0,P.jsx)("button",{type:"submit",disabled:formBusy,style:formBusy?{opacity:0.5}:undefined,className:"px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs cursor-pointer",children:formBusy?"Saving...":"Save"})
        ]})
      ]})
    ]})})
  ]});
}
function vt(){let[e,t]=(0,l.useState)(`employees`),[n,r]=(0,l.useState)(d),[i,a]=(0,l.useState)(null),[o,s]=(0,l.useState)(f),[c,u]=(0,l.useState)(null),[m,h]=(0,l.useState)(null),[g,_]=(0,l.useState)(null),[v,y]=(0,l.useState)(p),[b,x]=(0,l.useState)({name:`Ishdeep Anand`,role:`Admin / HR / Reporting Manager`,initials:`IA`,canChangeAvailability:!0}),[S,ee]=(0,l.useState)(!1),[C,w]=(0,l.useState)(!1),[admFlyout,setAdmFlyout]=(0,l.useState)(!1),[te,T]=(0,l.useState)(!1),[ne,re]=(0,l.useState)(``),[ie,E]=(0,l.useState)(!1),[ae,oe]=(0,l.useState)(!1),[se,D]=(0,l.useState)(null),[courseProgress,setCourseProgress]=(0,l.useState)({}),[categories,setCategories]=(0,l.useState)(DEFAULT_CATEGORIES_SEED),[skills,setSkills]=(0,l.useState)(DEFAULT_SKILLS_SEED),[skillLevels,setSkillLevels]=(0,l.useState)(DEFAULT_SKILL_LEVELS_SEED),[employeeSkills,setEmployeeSkills]=(0,l.useState)({}),[skillAwardHistory,setSkillAwardHistory]=(0,l.useState)([]),[issuedCertificates,setIssuedCertificates]=(0,l.useState)([]);(0,l.useEffect)(()=>{let cancelled=!1;fetch(`/api/training/programmes`).then(r=>r.json()).then(data=>{if(!cancelled&&data?.success&&Array.isArray(data.programmes)){s(data.programmes);if(Array.isArray(data.categories)&&data.categories.length>0)setCategories(data.categories);if(Array.isArray(data.skills)&&data.skills.length>0)setSkills(data.skills);if(Array.isArray(data.skillLevels)&&data.skillLevels.length>0)setSkillLevels(data.skillLevels);if(data.employeeSkills&&typeof data.employeeSkills===`object`)setEmployeeSkills(data.employeeSkills);if(Array.isArray(data.skillAwardHistory))setSkillAwardHistory(data.skillAwardHistory);if(Array.isArray(data.issuedCertificates))setIssuedCertificates(data.issuedCertificates);if(data.courseProgress&&typeof data.courseProgress===`object`)setCourseProgress(data.courseProgress);if(Array.isArray(data.assignments)&&data.assignments.length>0){y(prev=>{let ids=new Set(prev.map(x=>x.id));let extra=data.assignments.filter(x=>!ids.has(x.id));return extra.length>0?[...extra,...prev]:prev})}}}).catch(()=>{});return()=>{cancelled=!0}},[]);let isLearnerStarted=(st,pct)=>{let k=String(st||``).trim().toLowerCase(),pr=Number(pct)||0;if(k===`completed`||k===`cancelled`)return!1;if(k===`in progress`||k===`in_progress`||k===`under review`||k===`under_review`||k===`submitted_for_review`||k===`changes_requested`)return!0;if(k===`overdue`&&pr>0)return!0;return pr>0&&pr<100},hasStartedLearnerFn=prog=>{if(!prog)return!1;let pname=(prog.name||``).trim().toLowerCase(),cpVals=Object.values(courseProgress||{}).filter(entry=>entry&&((entry.programmeId&&entry.programmeId===prog.id)||(entry.programmeName&&pname&&entry.programmeName.trim().toLowerCase()===pname)));if(cpVals.some(entry=>isLearnerStarted(entry.status,entry.progress)))return!0;let matchingAsg=(v||[]).filter(a=>(a.programmeId&&a.programmeId===prog.id)||(a.programmeName&&pname&&a.programmeName.trim().toLowerCase()===pname));if(matchingAsg.some(a=>{let ov=courseProgress[(a.employeeId||"CO-5039")+"::"+prog.id]||courseProgress[prog.id];return isLearnerStarted(ov?ov.status:a.status,ov?ov.progress:a.progress)}))return!0;if(prog.id===`prog-7`){let ov7=courseProgress[`CO-5039::prog-7`]||courseProgress[`prog-7`];return ov7?isLearnerStarted(ov7.status,ov7.progress):!0}if([`prog-1`,`prog-2`,`prog-3`,`prog-8`,`prog-11`,`prog-12`].includes(prog.id)){let ovS=courseProgress[`CO-5039::${prog.id}`]||courseProgress[prog.id];if((prog.id===`prog-8`||prog.id===`prog-11`)&&ovS&&!isLearnerStarted(ovS.status,ovS.progress))return!1;return!0}return!1},updateCourseProgressApi=async(prog,status,progress,completedResources,latestResult,attemptHistory,extra)=>{let pid=prog.id||prog.name,pname=prog.name||"",key="CO-5039::"+pid,entry={employeeId:"CO-5039",programmeId:pid,programmeName:pname,status,progress,completedResources,latestResult,attemptHistory,submittedDocs:extra?.submittedDocs||[],managerApprovalStatus:extra?.managerApprovalStatus||"",userRole:b.role,userName:b.name,userPermissions:{canChangeAvailability:canToggleProg(b)}};setCourseProgress(prev=>({...prev,[key]:entry}));y(prev=>prev.map(a=>((pid&&a.programmeId===pid)||(pname&&a.programmeName&&a.programmeName.trim().toLowerCase()===pname.trim().toLowerCase()))&&(a.employeeId==="emp-3"||a.employeeId==="CO-5039"||a.employeeName==="Tanya Kapoor")?{...a,status,progress}:a));try{let r=await fetch("/api/training/employee-course-progress",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(entry)});let data=await r.json();if(data?.entry){setCourseProgress(prev=>({...prev,[key]:data.entry}));}if(Array.isArray(data?.assignments)&&data.assignments.length>0)y(data.assignments);if(data?.employeeSkills)setEmployeeSkills(data.employeeSkills);if(Array.isArray(data?.skillAwardHistory))setSkillAwardHistory(data.skillAwardHistory);if(Array.isArray(data?.issuedCertificates))setIssuedCertificates(data.issuedCertificates);return data;}catch{return null;}},approveCompletionApi=async(prog,empId)=>{let pid=prog.id||prog.name,pname=prog.name||"",empKey=canonicalEmpSkillKey(empId||"CO-5039"),key=empKey+"::"+pid;try{let r=await fetch("/api/training/approve-completion",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({employeeId:empKey,programmeId:pid,programmeName:pname,decision:"approve",userRole:b.role,userName:b.name,userPermissions:{canChangeAvailability:canToggleProg(b)}})});let data=await r.json();if(data?.entry){setCourseProgress(prev=>({...prev,[key]:data.entry,["CO-5039::"+pid]:empKey==="CO-5039"?data.entry:prev["CO-5039::"+pid]}));}if(Array.isArray(data?.assignments)&&data.assignments.length>0)y(data.assignments);if(data?.employeeSkills)setEmployeeSkills(data.employeeSkills);if(Array.isArray(data?.skillAwardHistory))setSkillAwardHistory(data.skillAwardHistory);if(Array.isArray(data?.issuedCertificates))setIssuedCertificates(data.issuedCertificates);return data;}catch{return null;}};let saveSkillApi=async(payload)=>{let res=await fetch("/api/config/skills",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...payload,userRole:b.role,userName:b.name,userPermissions:{canChangeAvailability:canToggleProg(b)}})});let data=await res.json();if(Array.isArray(data?.skills))setSkills(data.skills);if(Array.isArray(data?.skillLevels))setSkillLevels(data.skillLevels);return data},toggleSkillApi=async(skillId)=>{return saveSkillApi({action:"toggle",skillId})},deleteSkillApi=async(skillId)=>{return saveSkillApi({action:"delete",skillId})},manageEmployeeSkillApi=async(payload)=>{let res=await fetch("/api/employee/skills",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...payload,userRole:b.role,userName:b.name,userPermissions:{canChangeAvailability:canToggleProg(b)}})});let data=await res.json();if(data?.employeeSkills)setEmployeeSkills(data.employeeSkills);if(Array.isArray(data?.skillAwardHistory))setSkillAwardHistory(data.skillAwardHistory);return data};let toggleCategoryApi=async(catName)=>{if((o||[]).some(pr=>doesProgUseCategory(pr,catName))){let cur=categories.find(c=>normCatKey(c.name)===normCatKey(catName));if(cur&&cur.active!==!1){return{success:!1,message:`Cannot mark "${cur.name}" as Inactive because it is currently assigned to one or more trainings.`}}}let res=await fetch(`/api/training/categories`,{method:`POST`,headers:{"Content-Type":"application/json"},body:JSON.stringify({action:`toggle`,name:catName,userName:b.name})});let data=await res.json();if(data?.categories)setCategories(data.categories);return data},saveCategoryApi=async(payload)=>{let res=await fetch(`/api/training/categories`,{method:`POST`,headers:{"Content-Type":"application/json"},body:JSON.stringify({...payload,userName:b.name})});let data=await res.json();if(data?.categories)setCategories(data.categories);if(data?.programmes)s(data.programmes);return data};let canToggleProg=usr=>{if(!usr||usr.canChangeAvailability===!1)return!1;let rs=(usr.role||``).toLowerCase();return!(rs.includes(`employee`)||rs.includes(`viewer`)||rs.includes(`view only`))&&(rs.includes(`admin`)||rs.includes(`hr`)||rs.includes(`reporting manager`)||rs.includes(`management`))},canManageAvail=canToggleProg(b),syncProgList=(list,updated)=>{Array.isArray(list)&&s(list),updated&&c&&c.id===updated.id&&u(updated)},ce=e=>{a(e),t(`employee-detail`)},le=e=>{u(e),t(`programme-detail`)},ue=e=>{h(e),t(`assignment-detail`)},de=e=>{let p=(o||[]).find(x=>(e.id&&x.id===e.id)||(e.name&&x.name&&x.name.trim().toLowerCase()===e.name.trim().toLowerCase()));_(p?{...e,...p,status:e.status||"Not Started",progress:e.progress!=null?e.progress:0,assignedBy:e.assignedBy,assignedDate:e.assignedDate,dueDate:e.dueDate,assessment:p.assessment||e.assessment,resources:Array.isArray(p.resources)?p.resources:e.resources}:e),t(`employee-course-detail`)},fe=usr=>{let wasEmp=b.name===`Tanya Kapoor`||b.role.includes(`Employee`),wasAdm=b.name===`Kushal Khandwala`||(b.role||``).includes(`Administration`),nextIsEmp=usr.role.includes(`Employee`)||usr.name===`Tanya Kapoor`;x(usr),ee(!1),w(!1),setAdmFlyout(!1),nextIsEmp?t(`employee-dashboard`):usr.defaultTab?t(usr.defaultTab):(wasEmp||wasAdm||e===`admin-skills`||e===`skill-matrix`)&&t(`employees`)},pe=e=>{r([e,...n]),E(!1)},saveProgApi=async(progPayload,isEdit)=>{let res=await fetch(`/api/training/programmes`,{method:`POST`,headers:{'Content-Type':`application/json`},body:JSON.stringify({programme:progPayload,userRole:b.role,userName:b.name,userPermissions:{canChangeAvailability:canManageAvail}})});let data=await res.json().catch(()=>({success:!1,message:`Failed to communicate with backend.`}));if(!res.ok||!data.success)return{success:!1,message:data?.message||`Unable to save training.`};syncProgList(data.programmes,isEdit?data.programme:null),isEdit&&data.programme&&u(data.programme),t(`training-programmes`);return{success:!0,programme:data.programme}},me=e=>saveProgApi(e,!1),he=e=>saveProgApi(e,!0),toggleAvailabilityApi=async(prog,targetStatus,reason)=>{let res=await fetch(`/api/training/programmes/availability`,{method:`POST`,headers:{'Content-Type':`application/json`},body:JSON.stringify({programmeId:prog.id,targetAvailabilityStatus:targetStatus,reason,userRole:b.role,userName:b.name,userPermissions:{canChangeAvailability:canManageAvail}})});let data=await res.json().catch(()=>({success:!1,message:`Network error updating availability.`}));if(!res.ok||!data.success)return{success:!1,message:data?.message||`Failed to update availability status.`};syncProgList(data.programmes,data.programme);return{success:!0,programme:data.programme}},archiveProgApi=async(prog,reason)=>{let res=await fetch(`/api/training/programmes/archive`,{method:`POST`,headers:{'Content-Type':`application/json`},body:JSON.stringify({programmeId:prog.id,reason,userRole:b.role,userName:b.name,userPermissions:{canChangeAvailability:canManageAvail}})});let data=await res.json().catch(()=>({success:!1,message:`Network error archiving training.`}));if(!res.ok||!data.success)return{success:!1,message:data?.message||`Failed to archive training.`};syncProgList(data.programmes,data.programme);return{success:!0,programme:data.programme}},restoreProgApi=async(prog,reason)=>{let res=await fetch(`/api/training/programmes/restore`,{method:`POST`,headers:{'Content-Type':`application/json`},body:JSON.stringify({programmeId:prog.id,reason,userRole:b.role,userName:b.name,userPermissions:{canChangeAvailability:canManageAvail}})});let data=await res.json().catch(()=>({success:!1,message:`Network error restoring training.`}));if(!res.ok||!data.success)return{success:!1,message:data?.message||`Failed to restore training.`};syncProgList(data.programmes,data.programme);return{success:!0,programme:data.programme}},ge=async payload=>{let res=await fetch(`/api/training/assign`,{method:`POST`,headers:{'Content-Type':`application/json`},body:JSON.stringify({programmeId:payload.programme.id,employees:payload.employees,assignmentMethod:payload.assignmentMethod,startDate:payload.startDate,endDate:payload.endDate,assignedBy:b.name})});let data=await res.json().catch(()=>({success:!1,message:`Network error assigning training.`}));if(!res.ok||!data.success)return{success:!1,message:data?.message||`This training is currently inactive and cannot be assigned.`};Array.isArray(data.assignments)&&y(prev=>[...data.assignments,...prev]),syncProgList(data.programmes,data.programme),oe(!1);return{success:!0}},_e=e=>{y(v.map(t=>t.id===e.id?e:t)),D(null)},ve=e=>{let n=o.find(t=>t.name.toLowerCase()===e.toLowerCase()||t.id===e);u(n||{...o[0],name:e}),(b.name===`Tanya Kapoor`||b.role.includes(`Employee`))&&x({name:`Ishdeep Anand`,role:`Admin / HR / Reporting Manager`,initials:`IA`,canChangeAvailability:!0}),t(`programme-detail`)},ye=b.name===`Tanya Kapoor`||b.role.includes(`Employee`),activeSelectedProgramme=(c&&o.find(x=>x.id===c.id))||c||o[0];return(0,P.jsxs)(`div`,{className:`flex h-screen bg-slate-100 font-sans text-slate-900 overflow-hidden select-none`,children:[(0,P.jsx)(Je,{currentTab:e,onSelectTab:e=>{e===`employees`&&a(null),t(e)},isTrainingFlyoutOpen:S,onToggleTrainingFlyout:v=>{ee(v),v&&(w(!1),setAdmFlyout(!1))},isConfigFlyoutOpen:C,onToggleConfigFlyout:v=>{w(v),v&&(ee(!1),setAdmFlyout(!1))},isAdminFlyoutOpen:admFlyout,onToggleAdminFlyout:v=>{setAdmFlyout(v),v&&(ee(!1),w(!1))},collapsed:te,onToggleCollapse:()=>T(!te),currentUser:b}),(0,P.jsxs)(`div`,{className:`flex-1 flex flex-col min-w-0 overflow-hidden relative`,children:[(0,P.jsx)(Ye,{currentTab:e,onOpenNewEmployee:()=>E(!0),onOpenCreateProgramme:()=>{ee(!1),t(`training-management`)},onOpenAssignTraining:()=>oe(!0),searchQuery:ne,onSearchChange:re,currentUser:b,onSwitchUser:fe,onOpenMyProfile:()=>{let e=n.find(e=>e.firstName===`Tanya`)||n[0];a(e),t(`employee-profile`)}}),(0,P.jsx)(`main`,{className:`flex-1 overflow-y-auto`,children:ye?(0,P.jsxs)(P.Fragment,{children:[e===`employee-dashboard`&&(0,P.jsx)(ft,{onGoToTraining:()=>t(`employee-training`),onSelectCourse:de,employeeName:b.name,programmes:o,assignments:v,courseProgress:courseProgress}),e===`employee-training`&&(0,P.jsx)(pt,{onSelectCourse:de,programmes:o,assignments:v,courseProgress:courseProgress}),e===`employee-course-detail`&&(0,P.jsx)(mt,{course:g,programmes:o,courseProgress:courseProgress,skills:skills,employees:n,employeeSkills:employeeSkills,issuedCertificates:issuedCertificates,onUpdateCourseProgress:updateCourseProgressApi,onBack:()=>t(`employee-training`)}),e===`employee-profile`&&i&&(0,P.jsx)($e,{employee:i,assignments:v,programmes:o,isEmployeeSide:!0,employeeSkills:employeeSkills,skillAwardHistory:skillAwardHistory,skillsConfig:skills,skillLevels:skillLevels,issuedCertificates:issuedCertificates,onManageEmployeeSkill:manageEmployeeSkillApi,canManageSkills:canManageAvail,onBack:()=>t(`employee-training`),onOpenAssignTraining:()=>oe(!0),onNavigateToProgrammeDetail:ve}),e===`skill-matrix`&&(0,P.jsx)(SkillMatrixPage,{employees:n,employeeSkills:employeeSkills,skillAwardHistory:skillAwardHistory,skillsConfig:skills,skillLevels:skillLevels,currentUser:b,programmes:o,onManageEmployeeSkill:manageEmployeeSkillApi,canManageSkills:canManageAvail,onNavigateToProgramme:de})]}):(0,P.jsxs)(P.Fragment,{children:[e===`employees`&&(0,P.jsx)(Xe,{employees:n,onSelectEmployee:ce,onOpenNewEmployee:()=>E(!0),searchQuery:ne}),e===`employee-detail`&&i&&(0,P.jsx)($e,{employee:i,assignments:v,programmes:o,isEmployeeSide:!1,employeeSkills:employeeSkills,skillAwardHistory:skillAwardHistory,skillsConfig:skills,skillLevels:skillLevels,issuedCertificates:issuedCertificates,onManageEmployeeSkill:manageEmployeeSkillApi,canManageSkills:canManageAvail,onBack:()=>t(`employees`),onOpenAssignTraining:()=>oe(!0),onNavigateToProgrammeDetail:ve}),e===`training-dashboard`&&(0,P.jsx)(et,{assignments:v,onOpenReviewQueue:()=>t(`training-review`),onEvaluateSubmission:e=>D(e)}),e===`training-programmes`&&(0,P.jsx)(tt,{programmes:o,employees:n,assignments:v,courseProgress:courseProgress,onOpenCreateProgramme:()=>t(`training-management`),onSelectProgramme:le,onEditProgramme:e=>{u(e),t(`edit-programme`)},onToggleAvailability:toggleAvailabilityApi,currentUser:b,canToggleAvailability:canManageAvail,hasStartedLearner:hasStartedLearnerFn}),e===`programme-detail`&&(0,P.jsx)(nt,{programme:activeSelectedProgramme,employees:n,assignments:v,courseProgress:courseProgress,skills:skills,onBack:()=>t(`training-programmes`),onOpenAssignTraining:()=>oe(!0),onSelectEmployee:ce,onEditProgramme:()=>t(`edit-programme`),onArchiveProgramme:archiveProgApi,onRestoreProgramme:restoreProgApi,onToggleAvailability:toggleAvailabilityApi,canToggleAvailability:canManageAvail,hasStartedLearner:hasStartedLearnerFn,onApproveCompletion:approveCompletionApi}),e===`training-management`&&(0,P.jsx)(rt,{categories:categories,skills:skills,skillLevels:skillLevels,onSaveSkill:saveSkillApi,canManageSkills:canManageAvail,onCancel:()=>t(`training-programmes`),onSaveProgramme:me},`new-programme`),e===`edit-programme`&&(0,P.jsx)(rt,{categories:categories,skills:skills,skillLevels:skillLevels,onSaveSkill:saveSkillApi,canManageSkills:canManageAvail,programmeToEdit:activeSelectedProgramme,onCancel:()=>t(`training-programmes`),onSaveProgramme:he},activeSelectedProgramme?.id||`edit-prog`),e===`training-assignments`&&(0,P.jsx)(it,{assignments:v,employees:n,programmes:o,courseProgress:courseProgress,onOpenAssignTraining:()=>oe(!0),onEvaluate:e=>D(e),onSelectAssignment:ue}),e===`assignment-detail`&&(0,P.jsx)(at,{assignment:m,programmes:o,courseProgress:courseProgress,skills:skills,canManageSkills:canManageAvail,onApproveCompletion:approveCompletionApi,onBack:()=>t(`training-assignments`),onEvaluate:()=>{let e=v[0];e&&D(e)}}),e===`training-progress`&&(0,P.jsx)(ot,{categories:categories}),e===`certificates`&&(0,P.jsx)(ct,{assignments:v,issuedCertificates:issuedCertificates}),(e===`config`||e===`config-skills`||(e===`admin-skills`&&(b.name===`Kushal Khandwala`||(b.role||``).includes(`Administration`))))&&(0,P.jsx)(ut,{currentTab:e,categories:categories,skills:skills,skillLevels:skillLevels,programmes:o,onToggleCategory:toggleCategoryApi,onSaveCategory:saveCategoryApi,onSaveSkill:saveSkillApi,onToggleSkill:toggleSkillApi,onDeleteSkill:deleteSkillApi}),e===`roles`&&(0,P.jsx)(dt,{onSelectRole:e=>alert(`Selected role: ${e}`)})]})})]}),ie&&(0,P.jsx)(ht,{onClose:()=>E(!1),onAddEmployee:pe}),ae&&(0,P.jsx)(gt,{employees:n,programmes:o,initialProgrammeId:e===`programme-detail`?activeSelectedProgramme?.id:void 0,employeeSkills:employeeSkills,skillsConfig:skills,skillLevels:skillLevels,onClose:()=>oe(!1),onAssign:ge}),se&&(0,P.jsx)(_t,{assignment:se,onClose:()=>D(null),onSaveEvaluation:_e})]})}(0,u.createRoot)(document.getElementById(`root`)).render((0,P.jsx)(vt,{}));