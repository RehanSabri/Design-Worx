(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Vf={exports:{}},To={};var n_;function jS(){if(n_)return To;n_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:c}}return To.Fragment=e,To.jsx=i,To.jsxs=i,To}var i_;function KS(){return i_||(i_=1,Vf.exports=jS()),Vf.exports}var Mn=KS(),Xf={exports:{}},ne={};var a_;function QS(){if(a_)return ne;a_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),x=Symbol.iterator;function M(N){return N===null||typeof N!="object"?null:(N=x&&N[x]||N["@@iterator"],typeof N=="function"?N:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,y={};function _(N,at,xt){this.props=N,this.context=at,this.refs=y,this.updater=xt||A}_.prototype.isReactComponent={},_.prototype.setState=function(N,at){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,at,"setState")},_.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function I(){}I.prototype=_.prototype;function z(N,at,xt){this.props=N,this.context=at,this.refs=y,this.updater=xt||A}var U=z.prototype=new I;U.constructor=z,C(U,_.prototype),U.isPureReactComponent=!0;var J=Array.isArray;function V(){}var P={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function D(N,at,xt){var j=xt.ref;return{$$typeof:o,type:N,key:at,ref:j!==void 0?j:null,props:xt}}function R(N,at){return D(N.type,at,N.props)}function H(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function ft(N){var at={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(xt){return at[xt]})}var ut=/\/+/g;function ht(N,at){return typeof N=="object"&&N!==null&&N.key!=null?ft(""+N.key):at.toString(36)}function _t(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(V,V):(N.status="pending",N.then(function(at){N.status==="pending"&&(N.status="fulfilled",N.value=at)},function(at){N.status==="pending"&&(N.status="rejected",N.reason=at)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function O(N,at,xt,j,pt){var Mt=typeof N;(Mt==="undefined"||Mt==="boolean")&&(N=null);var St=!1;if(N===null)St=!0;else switch(Mt){case"bigint":case"string":case"number":St=!0;break;case"object":switch(N.$$typeof){case o:case e:St=!0;break;case v:return St=N._init,O(St(N._payload),at,xt,j,pt)}}if(St)return pt=pt(N),St=j===""?"."+ht(N,0):j,J(pt)?(xt="",St!=null&&(xt=St.replace(ut,"$&/")+"/"),O(pt,at,xt,"",function(te){return te})):pt!=null&&(H(pt)&&(pt=R(pt,xt+(pt.key==null||N&&N.key===pt.key?"":(""+pt.key).replace(ut,"$&/")+"/")+St)),at.push(pt)),1;St=0;var Pt=j===""?".":j+":";if(J(N))for(var It=0;It<N.length;It++)j=N[It],Mt=Pt+ht(j,It),St+=O(j,at,xt,Mt,pt);else if(It=M(N),typeof It=="function")for(N=It.call(N),It=0;!(j=N.next()).done;)j=j.value,Mt=Pt+ht(j,It++),St+=O(j,at,xt,Mt,pt);else if(Mt==="object"){if(typeof N.then=="function")return O(_t(N),at,xt,j,pt);throw at=String(N),Error("Objects are not valid as a React child (found: "+(at==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":at)+"). If you meant to render a collection of children, use an array instead.")}return St}function Q(N,at,xt){if(N==null)return N;var j=[],pt=0;return O(N,j,"","",function(Mt){return at.call(xt,Mt,pt++)}),j}function q(N){if(N._status===-1){var at=N._result;at=at(),at.then(function(xt){(N._status===0||N._status===-1)&&(N._status=1,N._result=xt)},function(xt){(N._status===0||N._status===-1)&&(N._status=2,N._result=xt)}),N._status===-1&&(N._status=0,N._result=at)}if(N._status===1)return N._result.default;throw N._result}var yt=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var at=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(at))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},Tt={map:Q,forEach:function(N,at,xt){Q(N,function(){at.apply(this,arguments)},xt)},count:function(N){var at=0;return Q(N,function(){at++}),at},toArray:function(N){return Q(N,function(at){return at})||[]},only:function(N){if(!H(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return ne.Activity=S,ne.Children=Tt,ne.Component=_,ne.Fragment=i,ne.Profiler=l,ne.PureComponent=z,ne.StrictMode=r,ne.Suspense=m,ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,ne.__COMPILER_RUNTIME={__proto__:null,c:function(N){return P.H.useMemoCache(N)}},ne.cache=function(N){return function(){return N.apply(null,arguments)}},ne.cacheSignal=function(){return null},ne.cloneElement=function(N,at,xt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var j=C({},N.props),pt=N.key;if(at!=null)for(Mt in at.key!==void 0&&(pt=""+at.key),at)!K.call(at,Mt)||Mt==="key"||Mt==="__self"||Mt==="__source"||Mt==="ref"&&at.ref===void 0||(j[Mt]=at[Mt]);var Mt=arguments.length-2;if(Mt===1)j.children=xt;else if(1<Mt){for(var St=Array(Mt),Pt=0;Pt<Mt;Pt++)St[Pt]=arguments[Pt+2];j.children=St}return D(N.type,pt,j)},ne.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},ne.createElement=function(N,at,xt){var j,pt={},Mt=null;if(at!=null)for(j in at.key!==void 0&&(Mt=""+at.key),at)K.call(at,j)&&j!=="key"&&j!=="__self"&&j!=="__source"&&(pt[j]=at[j]);var St=arguments.length-2;if(St===1)pt.children=xt;else if(1<St){for(var Pt=Array(St),It=0;It<St;It++)Pt[It]=arguments[It+2];pt.children=Pt}if(N&&N.defaultProps)for(j in St=N.defaultProps,St)pt[j]===void 0&&(pt[j]=St[j]);return D(N,Mt,pt)},ne.createRef=function(){return{current:null}},ne.forwardRef=function(N){return{$$typeof:d,render:N}},ne.isValidElement=H,ne.lazy=function(N){return{$$typeof:v,_payload:{_status:-1,_result:N},_init:q}},ne.memo=function(N,at){return{$$typeof:p,type:N,compare:at===void 0?null:at}},ne.startTransition=function(N){var at=P.T,xt={};P.T=xt;try{var j=N(),pt=P.S;pt!==null&&pt(xt,j),typeof j=="object"&&j!==null&&typeof j.then=="function"&&j.then(V,yt)}catch(Mt){yt(Mt)}finally{at!==null&&xt.types!==null&&(at.types=xt.types),P.T=at}},ne.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},ne.use=function(N){return P.H.use(N)},ne.useActionState=function(N,at,xt){return P.H.useActionState(N,at,xt)},ne.useCallback=function(N,at){return P.H.useCallback(N,at)},ne.useContext=function(N){return P.H.useContext(N)},ne.useDebugValue=function(){},ne.useDeferredValue=function(N,at){return P.H.useDeferredValue(N,at)},ne.useEffect=function(N,at){return P.H.useEffect(N,at)},ne.useEffectEvent=function(N){return P.H.useEffectEvent(N)},ne.useId=function(){return P.H.useId()},ne.useImperativeHandle=function(N,at,xt){return P.H.useImperativeHandle(N,at,xt)},ne.useInsertionEffect=function(N,at){return P.H.useInsertionEffect(N,at)},ne.useLayoutEffect=function(N,at){return P.H.useLayoutEffect(N,at)},ne.useMemo=function(N,at){return P.H.useMemo(N,at)},ne.useOptimistic=function(N,at){return P.H.useOptimistic(N,at)},ne.useReducer=function(N,at,xt){return P.H.useReducer(N,at,xt)},ne.useRef=function(N){return P.H.useRef(N)},ne.useState=function(N){return P.H.useState(N)},ne.useSyncExternalStore=function(N,at,xt){return P.H.useSyncExternalStore(N,at,xt)},ne.useTransition=function(){return P.H.useTransition()},ne.version="19.2.4",ne}var r_;function dd(){return r_||(r_=1,Xf.exports=QS()),Xf.exports}var Di=dd(),kf={exports:{}},bo={},Wf={exports:{}},qf={};var s_;function JS(){return s_||(s_=1,(function(o){function e(O,Q){var q=O.length;O.push(Q);t:for(;0<q;){var yt=q-1>>>1,Tt=O[yt];if(0<l(Tt,Q))O[yt]=Q,O[q]=Tt,q=yt;else break t}}function i(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var Q=O[0],q=O.pop();if(q!==Q){O[0]=q;t:for(var yt=0,Tt=O.length,N=Tt>>>1;yt<N;){var at=2*(yt+1)-1,xt=O[at],j=at+1,pt=O[j];if(0>l(xt,q))j<Tt&&0>l(pt,xt)?(O[yt]=pt,O[j]=q,yt=j):(O[yt]=xt,O[at]=q,yt=at);else if(j<Tt&&0>l(pt,q))O[yt]=pt,O[j]=q,yt=j;else break t}}return Q}function l(O,Q){var q=O.sortIndex-Q.sortIndex;return q!==0?q:O.id-Q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],v=1,S=null,x=3,M=!1,A=!1,C=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function U(O){for(var Q=i(p);Q!==null;){if(Q.callback===null)r(p);else if(Q.startTime<=O)r(p),Q.sortIndex=Q.expirationTime,e(m,Q);else break;Q=i(p)}}function J(O){if(C=!1,U(O),!A)if(i(m)!==null)A=!0,V||(V=!0,ft());else{var Q=i(p);Q!==null&&_t(J,Q.startTime-O)}}var V=!1,P=-1,K=5,D=-1;function R(){return y?!0:!(o.unstable_now()-D<K)}function H(){if(y=!1,V){var O=o.unstable_now();D=O;var Q=!0;try{t:{A=!1,C&&(C=!1,I(P),P=-1),M=!0;var q=x;try{e:{for(U(O),S=i(m);S!==null&&!(S.expirationTime>O&&R());){var yt=S.callback;if(typeof yt=="function"){S.callback=null,x=S.priorityLevel;var Tt=yt(S.expirationTime<=O);if(O=o.unstable_now(),typeof Tt=="function"){S.callback=Tt,U(O),Q=!0;break e}S===i(m)&&r(m),U(O)}else r(m);S=i(m)}if(S!==null)Q=!0;else{var N=i(p);N!==null&&_t(J,N.startTime-O),Q=!1}}break t}finally{S=null,x=q,M=!1}Q=void 0}}finally{Q?ft():V=!1}}}var ft;if(typeof z=="function")ft=function(){z(H)};else if(typeof MessageChannel<"u"){var ut=new MessageChannel,ht=ut.port2;ut.port1.onmessage=H,ft=function(){ht.postMessage(null)}}else ft=function(){_(H,0)};function _t(O,Q){P=_(function(){O(o.unstable_now())},Q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(O){switch(x){case 1:case 2:case 3:var Q=3;break;default:Q=x}var q=x;x=Q;try{return O()}finally{x=q}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(O,Q){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var q=x;x=O;try{return Q()}finally{x=q}},o.unstable_scheduleCallback=function(O,Q,q){var yt=o.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?yt+q:yt):q=yt,O){case 1:var Tt=-1;break;case 2:Tt=250;break;case 5:Tt=1073741823;break;case 4:Tt=1e4;break;default:Tt=5e3}return Tt=q+Tt,O={id:v++,callback:Q,priorityLevel:O,startTime:q,expirationTime:Tt,sortIndex:-1},q>yt?(O.sortIndex=q,e(p,O),i(m)===null&&O===i(p)&&(C?(I(P),P=-1):C=!0,_t(J,q-yt))):(O.sortIndex=Tt,e(m,O),A||M||(A=!0,V||(V=!0,ft()))),O},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(O){var Q=x;return function(){var q=x;x=Q;try{return O.apply(this,arguments)}finally{x=q}}}})(qf)),qf}var o_;function $S(){return o_||(o_=1,Wf.exports=JS()),Wf.exports}var Yf={exports:{}},Tn={};var l_;function tx(){if(l_)return Tn;l_=1;var o=dd();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,v){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:m,containerInfo:p,implementation:v}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Tn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,v)},Tn.flushSync=function(m){var p=h.T,v=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=v,r.d.f()}},Tn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Tn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Tn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,S=d(v,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:S,integrity:x,fetchPriority:M}):v==="script"&&r.d.X(m,{crossOrigin:S,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Tn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Tn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,S=d(v,p.crossOrigin);r.d.L(m,v,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Tn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Tn.requestFormReset=function(m){r.d.r(m)},Tn.unstable_batchedUpdates=function(m,p){return m(p)},Tn.useFormState=function(m,p,v){return h.H.useFormState(m,p,v)},Tn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Tn.version="19.2.4",Tn}var u_;function ex(){if(u_)return Yf.exports;u_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Yf.exports=tx(),Yf.exports}var c_;function nx(){if(c_)return bo;c_=1;var o=$S(),e=dd(),i=ex();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===s)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var g=!1,E=u.child;E;){if(E===a){g=!0,a=u,s=f;break}if(E===s){g=!0,s=u,a=f;break}E=E.sibling}if(!g){for(E=f.child;E;){if(E===a){g=!0,a=f,s=u;break}if(E===s){g=!0,s=f,a=u;break}E=E.sibling}if(!g)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var S=Object.assign,x=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),z=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function ft(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var ut=Symbol.for("react.client.reference");function ht(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ut?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case _:return"Profiler";case y:return"StrictMode";case J:return"Suspense";case V:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case z:return t.displayName||"Context";case I:return(t._context.displayName||"Context")+".Consumer";case U:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return n=t.displayName||null,n!==null?n:ht(t.type)||"Memo";case K:n=t._payload,t=t._init;try{return ht(t(n))}catch{}}return null}var _t=Array.isArray,O=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},yt=[],Tt=-1;function N(t){return{current:t}}function at(t){0>Tt||(t.current=yt[Tt],yt[Tt]=null,Tt--)}function xt(t,n){Tt++,yt[Tt]=t.current,t.current=n}var j=N(null),pt=N(null),Mt=N(null),St=N(null);function Pt(t,n){switch(xt(Mt,n),xt(pt,t),xt(j,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?bg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=bg(n),t=Ag(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}at(j),xt(j,t)}function It(){at(j),at(pt),at(Mt)}function te(t){t.memoizedState!==null&&xt(St,t);var n=j.current,a=Ag(n,t.type);n!==a&&(xt(pt,t),xt(j,a))}function De(t){pt.current===t&&(at(j),at(pt)),St.current===t&&(at(St),xo._currentValue=q)}var fe,He;function F(t){if(fe===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);fe=n&&n[1]||"",He=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+fe+t+He}var fn=!1;function le(t,n){if(!t||fn)return"";fn=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(lt){var it=lt}Reflect.construct(t,[],gt)}else{try{gt.call()}catch(lt){it=lt}t.call(gt.prototype)}}else{try{throw Error()}catch(lt){it=lt}(gt=t())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(lt){if(lt&&it&&typeof lt.stack=="string")return[lt.stack,it.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),g=f[0],E=f[1];if(g&&E){var B=g.split(`
`),nt=E.split(`
`);for(u=s=0;s<B.length&&!B[s].includes("DetermineComponentFrameRoot");)s++;for(;u<nt.length&&!nt[u].includes("DetermineComponentFrameRoot");)u++;if(s===B.length||u===nt.length)for(s=B.length-1,u=nt.length-1;1<=s&&0<=u&&B[s]!==nt[u];)u--;for(;1<=s&&0<=u;s--,u--)if(B[s]!==nt[u]){if(s!==1||u!==1)do if(s--,u--,0>u||B[s]!==nt[u]){var dt=`
`+B[s].replace(" at new "," at ");return t.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",t.displayName)),dt}while(1<=s&&0<=u);break}}}finally{fn=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?F(a):""}function he(t,n){switch(t.tag){case 26:case 27:case 5:return F(t.type);case 16:return F("Lazy");case 13:return t.child!==n&&n!==null?F("Suspense Fallback"):F("Suspense");case 19:return F("SuspenseList");case 0:case 15:return le(t.type,!1);case 11:return le(t.type.render,!1);case 1:return le(t.type,!0);case 31:return F("Activity");default:return""}}function Gt(t){try{var n="",a=null;do n+=he(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Ee=Object.prototype.hasOwnProperty,Xt=o.unstable_scheduleCallback,L=o.unstable_cancelCallback,T=o.unstable_shouldYield,Y=o.unstable_requestPaint,w=o.unstable_now,$=o.unstable_getCurrentPriorityLevel,tt=o.unstable_ImmediatePriority,Rt=o.unstable_UserBlockingPriority,Et=o.unstable_NormalPriority,Ct=o.unstable_LowPriority,ue=o.unstable_IdlePriority,bt=o.log,Ft=o.unstable_setDisableYieldValue,Wt=null,kt=null;function zt(t){if(typeof bt=="function"&&Ft(t),kt&&typeof kt.setStrictMode=="function")try{kt.setStrictMode(Wt,t)}catch{}}var Kt=Math.clz32?Math.clz32:k,ie=Math.log,Ne=Math.LN2;function k(t){return t>>>=0,t===0?32:31-(ie(t)/Ne|0)|0}var wt=256,ct=262144,vt=4194304;function Dt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ut(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,f=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var E=s&134217727;return E!==0?(s=E&~f,s!==0?u=Dt(s):(g&=E,g!==0?u=Dt(g):a||(a=E&~t,a!==0&&(u=Dt(a))))):(E=s&~f,E!==0?u=Dt(E):g!==0?u=Dt(g):a||(a=s&~t,a!==0&&(u=Dt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Qt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ke(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sn(){var t=vt;return vt<<=1,(vt&62914560)===0&&(vt=4194304),t}function Me(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function mn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function hi(t,n,a,s,u,f){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,B=t.expirationTimes,nt=t.hiddenUpdates;for(a=g&~a;0<a;){var dt=31-Kt(a),gt=1<<dt;E[dt]=0,B[dt]=-1;var it=nt[dt];if(it!==null)for(nt[dt]=null,dt=0;dt<it.length;dt++){var lt=it[dt];lt!==null&&(lt.lane&=-536870913)}a&=~gt}s!==0&&Us(t,s,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(g&~n))}function Us(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Kt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Ls(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Kt(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function bi(t,n){var a=n&-n;return a=(a&42)!==0?1:Wa(a),(a&(t.suspendedLanes|n))!==0?0:a}function Wa(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Er(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ns(){var t=Q.p;return t!==0?t:(t=window.event,t===void 0?32:jg(t.type))}function qa(t,n){var a=Q.p;try{return Q.p=t,n()}finally{Q.p=a}}var di=Math.random().toString(36).slice(2),qe="__reactFiber$"+di,gn="__reactProps$"+di,Ni="__reactContainer$"+di,Os="__reactEvents$"+di,zu="__reactListeners$"+di,Pu="__reactHandles$"+di,Io="__reactResources$"+di,Ya="__reactMarker$"+di;function zs(t){delete t[qe],delete t[gn],delete t[Os],delete t[zu],delete t[Pu]}function b(t){var n=t[qe];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Ni]||a[qe]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Ng(t);t!==null;){if(a=t[qe])return a;t=Ng(t)}return n}t=a,a=t.parentNode}return null}function W(t){if(t=t[qe]||t[Ni]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function rt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function st(t){var n=t[Io];return n||(n=t[Io]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function X(t){t[Ya]=!0}var At=new Set,Lt={};function Ot(t,n){Bt(t,n),Bt(t+"Capture",n)}function Bt(t,n){for(Lt[t]=n,t=0;t<n.length;t++)At.add(n[t])}var Jt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$t={},qt={};function _e(t){return Ee.call(qt,t)?!0:Ee.call($t,t)?!1:Jt.test(t)?qt[t]=!0:($t[t]=!0,!1)}function ve(t,n,a){if(_e(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ge(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Te(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function ee(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Zt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function on(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function ye(t){if(!t._valueTracker){var n=Zt(t)?"checked":"value";t._valueTracker=on(t,n,""+t[n])}}function Ln(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Zt(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function pi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Rn=/[\n"\\]/g;function hn(t){return t.replace(Rn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Oe(t,n,a,s,u,f,g,E){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ee(n)):t.value!==""+ee(n)&&(t.value=""+ee(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?En(t,g,ee(n)):a!=null?En(t,g,ee(a)):s!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+ee(E):t.removeAttribute("name")}function Cn(t,n,a,s,u,f,g,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){ye(t);return}a=a!=null?""+ee(a):"",n=n!=null?""+ee(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=E?t.checked:!!s,t.defaultChecked=!!s,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),ye(t)}function En(t,n,a){n==="number"&&pi(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Ye(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+ee(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function _n(t,n,a){if(n!=null&&(n=""+ee(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ee(a):""}function Tr(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(_t(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ee(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),ye(t)}function Nn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var kv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Md(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||kv.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ed(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&Md(t,u,s)}else for(var f in n)n.hasOwnProperty(f)&&Md(t,f,n[f])}function Bu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),qv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ho(t){return qv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Oi(){}var Fu=null;function Iu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var br=null,Ar=null;function Td(t){var n=W(t);if(n&&(t=n.stateNode)){var a=t[gn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Oe(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+hn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[gn]||null;if(!u)throw Error(r(90));Oe(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Ln(s)}break t;case"textarea":_n(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Ye(t,!!a.multiple,n,!1)}}}var Hu=!1;function bd(t,n,a){if(Hu)return t(n,a);Hu=!0;try{var s=t(n);return s}finally{if(Hu=!1,(br!==null||Ar!==null)&&(Rl(),br&&(n=br,t=Ar,Ar=br=null,Td(n),t)))for(n=0;n<t.length;n++)Td(t[n])}}function Ps(t,n){var a=t.stateNode;if(a===null)return null;var s=a[gn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gu=!1;if(zi)try{var Bs={};Object.defineProperty(Bs,"passive",{get:function(){Gu=!0}}),window.addEventListener("test",Bs,Bs),window.removeEventListener("test",Bs,Bs)}catch{Gu=!1}var fa=null,Vu=null,Go=null;function Ad(){if(Go)return Go;var t,n=Vu,a=n.length,s,u="value"in fa?fa.value:fa.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var g=a-t;for(s=1;s<=g&&n[a-s]===u[f-s];s++);return Go=u.slice(t,1<s?1-s:void 0)}function Vo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Xo(){return!0}function Rd(){return!1}function On(t){function n(a,s,u,f,g){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Xo:Rd,this.isPropagationStopped=Rd,this}return S(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Xo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Xo)},persist:function(){},isPersistent:Xo}),n}var Za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ko=On(Za),Fs=S({},Za,{view:0,detail:0}),Yv=On(Fs),Xu,ku,Is,Wo=S({},Fs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Is&&(Is&&t.type==="mousemove"?(Xu=t.screenX-Is.screenX,ku=t.screenY-Is.screenY):ku=Xu=0,Is=t),Xu)},movementY:function(t){return"movementY"in t?t.movementY:ku}}),Cd=On(Wo),Zv=S({},Wo,{dataTransfer:0}),jv=On(Zv),Kv=S({},Fs,{relatedTarget:0}),Wu=On(Kv),Qv=S({},Za,{animationName:0,elapsedTime:0,pseudoElement:0}),Jv=On(Qv),$v=S({},Za,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),t0=On($v),e0=S({},Za,{data:0}),wd=On(e0),n0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},i0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},a0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function r0(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=a0[t])?!!n[t]:!1}function qu(){return r0}var s0=S({},Fs,{key:function(t){if(t.key){var n=n0[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Vo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?i0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qu,charCode:function(t){return t.type==="keypress"?Vo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Vo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),o0=On(s0),l0=S({},Wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dd=On(l0),u0=S({},Fs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qu}),c0=On(u0),f0=S({},Za,{propertyName:0,elapsedTime:0,pseudoElement:0}),h0=On(f0),d0=S({},Wo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),p0=On(d0),m0=S({},Za,{newState:0,oldState:0}),g0=On(m0),_0=[9,13,27,32],Yu=zi&&"CompositionEvent"in window,Hs=null;zi&&"documentMode"in document&&(Hs=document.documentMode);var v0=zi&&"TextEvent"in window&&!Hs,Ud=zi&&(!Yu||Hs&&8<Hs&&11>=Hs),Ld=" ",Nd=!1;function Od(t,n){switch(t){case"keyup":return _0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Rr=!1;function S0(t,n){switch(t){case"compositionend":return zd(n);case"keypress":return n.which!==32?null:(Nd=!0,Ld);case"textInput":return t=n.data,t===Ld&&Nd?null:t;default:return null}}function x0(t,n){if(Rr)return t==="compositionend"||!Yu&&Od(t,n)?(t=Ad(),Go=Vu=fa=null,Rr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ud&&n.locale!=="ko"?null:n.data;default:return null}}var y0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!y0[t.type]:n==="textarea"}function Bd(t,n,a,s){br?Ar?Ar.push(s):Ar=[s]:br=s,n=Ol(n,"onChange"),0<n.length&&(a=new ko("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Gs=null,Vs=null;function M0(t){Sg(t,0)}function qo(t){var n=rt(t);if(Ln(n))return t}function Fd(t,n){if(t==="change")return n}var Id=!1;if(zi){var Zu;if(zi){var ju="oninput"in document;if(!ju){var Hd=document.createElement("div");Hd.setAttribute("oninput","return;"),ju=typeof Hd.oninput=="function"}Zu=ju}else Zu=!1;Id=Zu&&(!document.documentMode||9<document.documentMode)}function Gd(){Gs&&(Gs.detachEvent("onpropertychange",Vd),Vs=Gs=null)}function Vd(t){if(t.propertyName==="value"&&qo(Vs)){var n=[];Bd(n,Vs,t,Iu(t)),bd(M0,n)}}function E0(t,n,a){t==="focusin"?(Gd(),Gs=n,Vs=a,Gs.attachEvent("onpropertychange",Vd)):t==="focusout"&&Gd()}function T0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return qo(Vs)}function b0(t,n){if(t==="click")return qo(n)}function A0(t,n){if(t==="input"||t==="change")return qo(n)}function R0(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var kn=typeof Object.is=="function"?Object.is:R0;function Xs(t,n){if(kn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!Ee.call(n,u)||!kn(t[u],n[u]))return!1}return!0}function Xd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function kd(t,n){var a=Xd(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Xd(a)}}function Wd(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Wd(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function qd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=pi(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=pi(t.document)}return n}function Ku(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var C0=zi&&"documentMode"in document&&11>=document.documentMode,Cr=null,Qu=null,ks=null,Ju=!1;function Yd(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ju||Cr==null||Cr!==pi(s)||(s=Cr,"selectionStart"in s&&Ku(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),ks&&Xs(ks,s)||(ks=s,s=Ol(Qu,"onSelect"),0<s.length&&(n=new ko("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Cr)))}function ja(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var wr={animationend:ja("Animation","AnimationEnd"),animationiteration:ja("Animation","AnimationIteration"),animationstart:ja("Animation","AnimationStart"),transitionrun:ja("Transition","TransitionRun"),transitionstart:ja("Transition","TransitionStart"),transitioncancel:ja("Transition","TransitionCancel"),transitionend:ja("Transition","TransitionEnd")},$u={},Zd={};zi&&(Zd=document.createElement("div").style,"AnimationEvent"in window||(delete wr.animationend.animation,delete wr.animationiteration.animation,delete wr.animationstart.animation),"TransitionEvent"in window||delete wr.transitionend.transition);function Ka(t){if($u[t])return $u[t];if(!wr[t])return t;var n=wr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Zd)return $u[t]=n[a];return t}var jd=Ka("animationend"),Kd=Ka("animationiteration"),Qd=Ka("animationstart"),w0=Ka("transitionrun"),D0=Ka("transitionstart"),U0=Ka("transitioncancel"),Jd=Ka("transitionend"),$d=new Map,tc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");tc.push("scrollEnd");function mi(t,n){$d.set(t,n),Ot(n,[t])}var Yo=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ti=[],Dr=0,ec=0;function Zo(){for(var t=Dr,n=ec=Dr=0;n<t;){var a=ti[n];ti[n++]=null;var s=ti[n];ti[n++]=null;var u=ti[n];ti[n++]=null;var f=ti[n];if(ti[n++]=null,s!==null&&u!==null){var g=s.pending;g===null?u.next=u:(u.next=g.next,g.next=u),s.pending=u}f!==0&&tp(a,u,f)}}function jo(t,n,a,s){ti[Dr++]=t,ti[Dr++]=n,ti[Dr++]=a,ti[Dr++]=s,ec|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function nc(t,n,a,s){return jo(t,n,a,s),Ko(t)}function Qa(t,n){return jo(t,null,null,n),Ko(t)}function tp(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Kt(a),t=f.hiddenUpdates,s=t[u],s===null?t[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function Ko(t){if(50<ho)throw ho=0,hf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ur={};function L0(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,n,a,s){return new L0(t,n,a,s)}function ic(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Pi(t,n){var a=t.alternate;return a===null?(a=Wn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function ep(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Qo(t,n,a,s,u,f){var g=0;if(s=t,typeof t=="function")ic(t)&&(g=1);else if(typeof t=="string")g=BS(t,a,j.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case D:return t=Wn(31,a,n,u),t.elementType=D,t.lanes=f,t;case C:return Ja(a.children,u,f,n);case y:g=8,u|=24;break;case _:return t=Wn(12,a,n,u|2),t.elementType=_,t.lanes=f,t;case J:return t=Wn(13,a,n,u),t.elementType=J,t.lanes=f,t;case V:return t=Wn(19,a,n,u),t.elementType=V,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case z:g=10;break t;case I:g=9;break t;case U:g=11;break t;case P:g=14;break t;case K:g=16,s=null;break t}g=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Wn(g,a,n,u),n.elementType=t,n.type=s,n.lanes=f,n}function Ja(t,n,a,s){return t=Wn(7,t,s,n),t.lanes=a,t}function ac(t,n,a){return t=Wn(6,t,null,n),t.lanes=a,t}function np(t){var n=Wn(18,null,null,0);return n.stateNode=t,n}function rc(t,n,a){return n=Wn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var ip=new WeakMap;function ei(t,n){if(typeof t=="object"&&t!==null){var a=ip.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Gt(n)},ip.set(t,n),n)}return{value:t,source:n,stack:Gt(n)}}var Lr=[],Nr=0,Jo=null,Ws=0,ni=[],ii=0,ha=null,Ai=1,Ri="";function Bi(t,n){Lr[Nr++]=Ws,Lr[Nr++]=Jo,Jo=t,Ws=n}function ap(t,n,a){ni[ii++]=Ai,ni[ii++]=Ri,ni[ii++]=ha,ha=t;var s=Ai;t=Ri;var u=32-Kt(s)-1;s&=~(1<<u),a+=1;var f=32-Kt(n)+u;if(30<f){var g=u-u%5;f=(s&(1<<g)-1).toString(32),s>>=g,u-=g,Ai=1<<32-Kt(n)+u|a<<u|s,Ri=f+t}else Ai=1<<f|a<<u|s,Ri=t}function sc(t){t.return!==null&&(Bi(t,1),ap(t,1,0))}function oc(t){for(;t===Jo;)Jo=Lr[--Nr],Lr[Nr]=null,Ws=Lr[--Nr],Lr[Nr]=null;for(;t===ha;)ha=ni[--ii],ni[ii]=null,Ri=ni[--ii],ni[ii]=null,Ai=ni[--ii],ni[ii]=null}function rp(t,n){ni[ii++]=Ai,ni[ii++]=Ri,ni[ii++]=ha,Ai=n.id,Ri=n.overflow,ha=t}var vn=null,Ve=null,Se=!1,da=null,ai=!1,lc=Error(r(519));function pa(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw qs(ei(n,t)),lc}function sp(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[qe]=t,n[gn]=s,a){case"dialog":pe("cancel",n),pe("close",n);break;case"iframe":case"object":case"embed":pe("load",n);break;case"video":case"audio":for(a=0;a<mo.length;a++)pe(mo[a],n);break;case"source":pe("error",n);break;case"img":case"image":case"link":pe("error",n),pe("load",n);break;case"details":pe("toggle",n);break;case"input":pe("invalid",n),Cn(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":pe("invalid",n);break;case"textarea":pe("invalid",n),Tr(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Eg(n.textContent,a)?(s.popover!=null&&(pe("beforetoggle",n),pe("toggle",n)),s.onScroll!=null&&pe("scroll",n),s.onScrollEnd!=null&&pe("scrollend",n),s.onClick!=null&&(n.onclick=Oi),n=!0):n=!1,n||pa(t,!0)}function op(t){for(vn=t.return;vn;)switch(vn.tag){case 5:case 31:case 13:ai=!1;return;case 27:case 3:ai=!0;return;default:vn=vn.return}}function Or(t){if(t!==vn)return!1;if(!Se)return op(t),Se=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Rf(t.type,t.memoizedProps)),a=!a),a&&Ve&&pa(t),op(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ve=Lg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ve=Lg(t)}else n===27?(n=Ve,Ca(t.type)?(t=Lf,Lf=null,Ve=t):Ve=n):Ve=vn?si(t.stateNode.nextSibling):null;return!0}function $a(){Ve=vn=null,Se=!1}function uc(){var t=da;return t!==null&&(Fn===null?Fn=t:Fn.push.apply(Fn,t),da=null),t}function qs(t){da===null?da=[t]:da.push(t)}var cc=N(null),tr=null,Fi=null;function ma(t,n,a){xt(cc,n._currentValue),n._currentValue=a}function Ii(t){t._currentValue=cc.current,at(cc)}function fc(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function hc(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var g=u.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=u;for(var B=0;B<n.length;B++)if(E.context===n[B]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),fc(f.return,a,t),s||(g=null);break t}f=E.next}}else if(u.tag===18){if(g=u.return,g===null)throw Error(r(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),fc(g,a,t),g=null}else g=u.child;if(g!==null)g.return=u;else for(g=u;g!==null;){if(g===t){g=null;break}if(u=g.sibling,u!==null){u.return=g.return,g=u;break}g=g.return}u=g}}function zr(t,n,a,s){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var g=u.alternate;if(g===null)throw Error(r(387));if(g=g.memoizedProps,g!==null){var E=u.type;kn(u.pendingProps.value,g.value)||(t!==null?t.push(E):t=[E])}}else if(u===St.current){if(g=u.alternate,g===null)throw Error(r(387));g.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(xo):t=[xo])}u=u.return}t!==null&&hc(n,t,a,s),n.flags|=262144}function $o(t){for(t=t.firstContext;t!==null;){if(!kn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function er(t){tr=t,Fi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Sn(t){return lp(tr,t)}function tl(t,n){return tr===null&&er(t),lp(t,n)}function lp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Fi===null){if(t===null)throw Error(r(308));Fi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Fi=Fi.next=n;return a}var N0=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},O0=o.unstable_scheduleCallback,z0=o.unstable_NormalPriority,tn={$$typeof:z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function dc(){return{controller:new N0,data:new Map,refCount:0}}function Ys(t){t.refCount--,t.refCount===0&&O0(z0,function(){t.controller.abort()})}var Zs=null,pc=0,Pr=0,Br=null;function P0(t,n){if(Zs===null){var a=Zs=[];pc=0,Pr=vf(),Br={status:"pending",value:void 0,then:function(s){a.push(s)}}}return pc++,n.then(up,up),n}function up(){if(--pc===0&&Zs!==null){Br!==null&&(Br.status="fulfilled");var t=Zs;Zs=null,Pr=0,Br=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function B0(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var cp=O.S;O.S=function(t,n){Ym=w(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&P0(t,n),cp!==null&&cp(t,n)};var nr=N(null);function mc(){var t=nr.current;return t!==null?t:Ie.pooledCache}function el(t,n){n===null?xt(nr,nr.current):xt(nr,n.pool)}function fp(){var t=mc();return t===null?null:{parent:tn._currentValue,pool:t}}var Fr=Error(r(460)),gc=Error(r(474)),nl=Error(r(542)),il={then:function(){}};function hp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function dp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Oi,Oi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,mp(t),t;default:if(typeof n.status=="string")n.then(Oi,Oi);else{if(t=Ie,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,mp(t),t}throw ar=n,Fr}}function ir(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ar=a,Fr):a}}var ar=null;function pp(){if(ar===null)throw Error(r(459));var t=ar;return ar=null,t}function mp(t){if(t===Fr||t===nl)throw Error(r(483))}var Ir=null,js=0;function al(t){var n=js;return js+=1,Ir===null&&(Ir=[]),dp(Ir,t,n)}function Ks(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function rl(t,n){throw n.$$typeof===x?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function gp(t){function n(Z,G){if(t){var et=Z.deletions;et===null?(Z.deletions=[G],Z.flags|=16):et.push(G)}}function a(Z,G){if(!t)return null;for(;G!==null;)n(Z,G),G=G.sibling;return null}function s(Z){for(var G=new Map;Z!==null;)Z.key!==null?G.set(Z.key,Z):G.set(Z.index,Z),Z=Z.sibling;return G}function u(Z,G){return Z=Pi(Z,G),Z.index=0,Z.sibling=null,Z}function f(Z,G,et){return Z.index=et,t?(et=Z.alternate,et!==null?(et=et.index,et<G?(Z.flags|=67108866,G):et):(Z.flags|=67108866,G)):(Z.flags|=1048576,G)}function g(Z){return t&&Z.alternate===null&&(Z.flags|=67108866),Z}function E(Z,G,et,mt){return G===null||G.tag!==6?(G=ac(et,Z.mode,mt),G.return=Z,G):(G=u(G,et),G.return=Z,G)}function B(Z,G,et,mt){var Yt=et.type;return Yt===C?dt(Z,G,et.props.children,mt,et.key):G!==null&&(G.elementType===Yt||typeof Yt=="object"&&Yt!==null&&Yt.$$typeof===K&&ir(Yt)===G.type)?(G=u(G,et.props),Ks(G,et),G.return=Z,G):(G=Qo(et.type,et.key,et.props,null,Z.mode,mt),Ks(G,et),G.return=Z,G)}function nt(Z,G,et,mt){return G===null||G.tag!==4||G.stateNode.containerInfo!==et.containerInfo||G.stateNode.implementation!==et.implementation?(G=rc(et,Z.mode,mt),G.return=Z,G):(G=u(G,et.children||[]),G.return=Z,G)}function dt(Z,G,et,mt,Yt){return G===null||G.tag!==7?(G=Ja(et,Z.mode,mt,Yt),G.return=Z,G):(G=u(G,et),G.return=Z,G)}function gt(Z,G,et){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=ac(""+G,Z.mode,et),G.return=Z,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case M:return et=Qo(G.type,G.key,G.props,null,Z.mode,et),Ks(et,G),et.return=Z,et;case A:return G=rc(G,Z.mode,et),G.return=Z,G;case K:return G=ir(G),gt(Z,G,et)}if(_t(G)||ft(G))return G=Ja(G,Z.mode,et,null),G.return=Z,G;if(typeof G.then=="function")return gt(Z,al(G),et);if(G.$$typeof===z)return gt(Z,tl(Z,G),et);rl(Z,G)}return null}function it(Z,G,et,mt){var Yt=G!==null?G.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return Yt!==null?null:E(Z,G,""+et,mt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case M:return et.key===Yt?B(Z,G,et,mt):null;case A:return et.key===Yt?nt(Z,G,et,mt):null;case K:return et=ir(et),it(Z,G,et,mt)}if(_t(et)||ft(et))return Yt!==null?null:dt(Z,G,et,mt,null);if(typeof et.then=="function")return it(Z,G,al(et),mt);if(et.$$typeof===z)return it(Z,G,tl(Z,et),mt);rl(Z,et)}return null}function lt(Z,G,et,mt,Yt){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return Z=Z.get(et)||null,E(G,Z,""+mt,Yt);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case M:return Z=Z.get(mt.key===null?et:mt.key)||null,B(G,Z,mt,Yt);case A:return Z=Z.get(mt.key===null?et:mt.key)||null,nt(G,Z,mt,Yt);case K:return mt=ir(mt),lt(Z,G,et,mt,Yt)}if(_t(mt)||ft(mt))return Z=Z.get(et)||null,dt(G,Z,mt,Yt,null);if(typeof mt.then=="function")return lt(Z,G,et,al(mt),Yt);if(mt.$$typeof===z)return lt(Z,G,et,tl(G,mt),Yt);rl(G,mt)}return null}function Ht(Z,G,et,mt){for(var Yt=null,be=null,Vt=G,se=G=0,ge=null;Vt!==null&&se<et.length;se++){Vt.index>se?(ge=Vt,Vt=null):ge=Vt.sibling;var Ae=it(Z,Vt,et[se],mt);if(Ae===null){Vt===null&&(Vt=ge);break}t&&Vt&&Ae.alternate===null&&n(Z,Vt),G=f(Ae,G,se),be===null?Yt=Ae:be.sibling=Ae,be=Ae,Vt=ge}if(se===et.length)return a(Z,Vt),Se&&Bi(Z,se),Yt;if(Vt===null){for(;se<et.length;se++)Vt=gt(Z,et[se],mt),Vt!==null&&(G=f(Vt,G,se),be===null?Yt=Vt:be.sibling=Vt,be=Vt);return Se&&Bi(Z,se),Yt}for(Vt=s(Vt);se<et.length;se++)ge=lt(Vt,Z,se,et[se],mt),ge!==null&&(t&&ge.alternate!==null&&Vt.delete(ge.key===null?se:ge.key),G=f(ge,G,se),be===null?Yt=ge:be.sibling=ge,be=ge);return t&&Vt.forEach(function(Na){return n(Z,Na)}),Se&&Bi(Z,se),Yt}function jt(Z,G,et,mt){if(et==null)throw Error(r(151));for(var Yt=null,be=null,Vt=G,se=G=0,ge=null,Ae=et.next();Vt!==null&&!Ae.done;se++,Ae=et.next()){Vt.index>se?(ge=Vt,Vt=null):ge=Vt.sibling;var Na=it(Z,Vt,Ae.value,mt);if(Na===null){Vt===null&&(Vt=ge);break}t&&Vt&&Na.alternate===null&&n(Z,Vt),G=f(Na,G,se),be===null?Yt=Na:be.sibling=Na,be=Na,Vt=ge}if(Ae.done)return a(Z,Vt),Se&&Bi(Z,se),Yt;if(Vt===null){for(;!Ae.done;se++,Ae=et.next())Ae=gt(Z,Ae.value,mt),Ae!==null&&(G=f(Ae,G,se),be===null?Yt=Ae:be.sibling=Ae,be=Ae);return Se&&Bi(Z,se),Yt}for(Vt=s(Vt);!Ae.done;se++,Ae=et.next())Ae=lt(Vt,Z,se,Ae.value,mt),Ae!==null&&(t&&Ae.alternate!==null&&Vt.delete(Ae.key===null?se:Ae.key),G=f(Ae,G,se),be===null?Yt=Ae:be.sibling=Ae,be=Ae);return t&&Vt.forEach(function(ZS){return n(Z,ZS)}),Se&&Bi(Z,se),Yt}function Be(Z,G,et,mt){if(typeof et=="object"&&et!==null&&et.type===C&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case M:t:{for(var Yt=et.key;G!==null;){if(G.key===Yt){if(Yt=et.type,Yt===C){if(G.tag===7){a(Z,G.sibling),mt=u(G,et.props.children),mt.return=Z,Z=mt;break t}}else if(G.elementType===Yt||typeof Yt=="object"&&Yt!==null&&Yt.$$typeof===K&&ir(Yt)===G.type){a(Z,G.sibling),mt=u(G,et.props),Ks(mt,et),mt.return=Z,Z=mt;break t}a(Z,G);break}else n(Z,G);G=G.sibling}et.type===C?(mt=Ja(et.props.children,Z.mode,mt,et.key),mt.return=Z,Z=mt):(mt=Qo(et.type,et.key,et.props,null,Z.mode,mt),Ks(mt,et),mt.return=Z,Z=mt)}return g(Z);case A:t:{for(Yt=et.key;G!==null;){if(G.key===Yt)if(G.tag===4&&G.stateNode.containerInfo===et.containerInfo&&G.stateNode.implementation===et.implementation){a(Z,G.sibling),mt=u(G,et.children||[]),mt.return=Z,Z=mt;break t}else{a(Z,G);break}else n(Z,G);G=G.sibling}mt=rc(et,Z.mode,mt),mt.return=Z,Z=mt}return g(Z);case K:return et=ir(et),Be(Z,G,et,mt)}if(_t(et))return Ht(Z,G,et,mt);if(ft(et)){if(Yt=ft(et),typeof Yt!="function")throw Error(r(150));return et=Yt.call(et),jt(Z,G,et,mt)}if(typeof et.then=="function")return Be(Z,G,al(et),mt);if(et.$$typeof===z)return Be(Z,G,tl(Z,et),mt);rl(Z,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,G!==null&&G.tag===6?(a(Z,G.sibling),mt=u(G,et),mt.return=Z,Z=mt):(a(Z,G),mt=ac(et,Z.mode,mt),mt.return=Z,Z=mt),g(Z)):a(Z,G)}return function(Z,G,et,mt){try{js=0;var Yt=Be(Z,G,et,mt);return Ir=null,Yt}catch(Vt){if(Vt===Fr||Vt===nl)throw Vt;var be=Wn(29,Vt,null,Z.mode);return be.lanes=mt,be.return=Z,be}}}var rr=gp(!0),_p=gp(!1),ga=!1;function _c(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function vc(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function _a(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function va(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Ce&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=Ko(t),tp(t,null,a),n}return jo(t,s,n,a),Ko(t)}function Qs(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Ls(t,a)}}function Sc(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var xc=!1;function Js(){if(xc){var t=Br;if(t!==null)throw t}}function $s(t,n,a,s){xc=!1;var u=t.updateQueue;ga=!1;var f=u.firstBaseUpdate,g=u.lastBaseUpdate,E=u.shared.pending;if(E!==null){u.shared.pending=null;var B=E,nt=B.next;B.next=null,g===null?f=nt:g.next=nt,g=B;var dt=t.alternate;dt!==null&&(dt=dt.updateQueue,E=dt.lastBaseUpdate,E!==g&&(E===null?dt.firstBaseUpdate=nt:E.next=nt,dt.lastBaseUpdate=B))}if(f!==null){var gt=u.baseState;g=0,dt=nt=B=null,E=f;do{var it=E.lane&-536870913,lt=it!==E.lane;if(lt?(me&it)===it:(s&it)===it){it!==0&&it===Pr&&(xc=!0),dt!==null&&(dt=dt.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Ht=t,jt=E;it=n;var Be=a;switch(jt.tag){case 1:if(Ht=jt.payload,typeof Ht=="function"){gt=Ht.call(Be,gt,it);break t}gt=Ht;break t;case 3:Ht.flags=Ht.flags&-65537|128;case 0:if(Ht=jt.payload,it=typeof Ht=="function"?Ht.call(Be,gt,it):Ht,it==null)break t;gt=S({},gt,it);break t;case 2:ga=!0}}it=E.callback,it!==null&&(t.flags|=64,lt&&(t.flags|=8192),lt=u.callbacks,lt===null?u.callbacks=[it]:lt.push(it))}else lt={lane:it,tag:E.tag,payload:E.payload,callback:E.callback,next:null},dt===null?(nt=dt=lt,B=gt):dt=dt.next=lt,g|=it;if(E=E.next,E===null){if(E=u.shared.pending,E===null)break;lt=E,E=lt.next,lt.next=null,u.lastBaseUpdate=lt,u.shared.pending=null}}while(!0);dt===null&&(B=gt),u.baseState=B,u.firstBaseUpdate=nt,u.lastBaseUpdate=dt,f===null&&(u.shared.lanes=0),Ea|=g,t.lanes=g,t.memoizedState=gt}}function vp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Sp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)vp(a[t],n)}var Hr=N(null),sl=N(0);function xp(t,n){t=Zi,xt(sl,t),xt(Hr,n),Zi=t|n.baseLanes}function yc(){xt(sl,Zi),xt(Hr,Hr.current)}function Mc(){Zi=sl.current,at(Hr),at(sl)}var qn=N(null),ri=null;function Sa(t){var n=t.alternate;xt(Qe,Qe.current&1),xt(qn,t),ri===null&&(n===null||Hr.current!==null||n.memoizedState!==null)&&(ri=t)}function Ec(t){xt(Qe,Qe.current),xt(qn,t),ri===null&&(ri=t)}function yp(t){t.tag===22?(xt(Qe,Qe.current),xt(qn,t),ri===null&&(ri=t)):xa()}function xa(){xt(Qe,Qe.current),xt(qn,qn.current)}function Yn(t){at(qn),ri===t&&(ri=null),at(Qe)}var Qe=N(0);function ol(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Df(a)||Uf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Hi=0,ae=null,ze=null,en=null,ll=!1,Gr=!1,sr=!1,ul=0,to=0,Vr=null,F0=0;function Ze(){throw Error(r(321))}function Tc(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!kn(t[a],n[a]))return!1;return!0}function bc(t,n,a,s,u,f){return Hi=f,ae=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=t===null||t.memoizedState===null?am:Hc,sr=!1,f=a(s,u),sr=!1,Gr&&(f=Ep(n,a,s,u)),Mp(t),f}function Mp(t){O.H=io;var n=ze!==null&&ze.next!==null;if(Hi=0,en=ze=ae=null,ll=!1,to=0,Vr=null,n)throw Error(r(300));t===null||nn||(t=t.dependencies,t!==null&&$o(t)&&(nn=!0))}function Ep(t,n,a,s){ae=t;var u=0;do{if(Gr&&(Vr=null),to=0,Gr=!1,25<=u)throw Error(r(301));if(u+=1,en=ze=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=rm,f=n(a,s)}while(Gr);return f}function I0(){var t=O.H,n=t.useState()[0];return n=typeof n.then=="function"?eo(n):n,t=t.useState()[0],(ze!==null?ze.memoizedState:null)!==t&&(ae.flags|=1024),n}function Ac(){var t=ul!==0;return ul=0,t}function Rc(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Cc(t){if(ll){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}ll=!1}Hi=0,en=ze=ae=null,Gr=!1,to=ul=0,Vr=null}function wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?ae.memoizedState=en=t:en=en.next=t,en}function Je(){if(ze===null){var t=ae.alternate;t=t!==null?t.memoizedState:null}else t=ze.next;var n=en===null?ae.memoizedState:en.next;if(n!==null)en=n,ze=t;else{if(t===null)throw ae.alternate===null?Error(r(467)):Error(r(310));ze=t,t={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},en===null?ae.memoizedState=en=t:en=en.next=t}return en}function cl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function eo(t){var n=to;return to+=1,Vr===null&&(Vr=[]),t=dp(Vr,t,n),n=ae,(en===null?n.memoizedState:en.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?am:Hc),t}function fl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return eo(t);if(t.$$typeof===z)return Sn(t)}throw Error(r(438,String(t)))}function wc(t){var n=null,a=ae.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ae.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=cl(),ae.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=R;return n.index++,a}function Gi(t,n){return typeof n=="function"?n(t):n}function hl(t){var n=Je();return Dc(n,ze,t)}function Dc(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,f=s.pending;if(f!==null){if(u!==null){var g=u.next;u.next=f.next,f.next=g}n.baseQueue=u=f,s.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var E=g=null,B=null,nt=n,dt=!1;do{var gt=nt.lane&-536870913;if(gt!==nt.lane?(me&gt)===gt:(Hi&gt)===gt){var it=nt.revertLane;if(it===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),gt===Pr&&(dt=!0);else if((Hi&it)===it){nt=nt.next,it===Pr&&(dt=!0);continue}else gt={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},B===null?(E=B=gt,g=f):B=B.next=gt,ae.lanes|=it,Ea|=it;gt=nt.action,sr&&a(f,gt),f=nt.hasEagerState?nt.eagerState:a(f,gt)}else it={lane:gt,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},B===null?(E=B=it,g=f):B=B.next=it,ae.lanes|=gt,Ea|=gt;nt=nt.next}while(nt!==null&&nt!==n);if(B===null?g=f:B.next=E,!kn(f,t.memoizedState)&&(nn=!0,dt&&(a=Br,a!==null)))throw a;t.memoizedState=f,t.baseState=g,t.baseQueue=B,s.lastRenderedState=f}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Uc(t){var n=Je(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var g=u=u.next;do f=t(f,g.action),g=g.next;while(g!==u);kn(f,n.memoizedState)||(nn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Tp(t,n,a){var s=ae,u=Je(),f=Se;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var g=!kn((ze||u).memoizedState,a);if(g&&(u.memoizedState=a,nn=!0),u=u.queue,Oc(Rp.bind(null,s,u,t),[t]),u.getSnapshot!==n||g||en!==null&&en.memoizedState.tag&1){if(s.flags|=2048,Xr(9,{destroy:void 0},Ap.bind(null,s,u,a,n),null),Ie===null)throw Error(r(349));f||(Hi&127)!==0||bp(s,n,a)}return a}function bp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ae.updateQueue,n===null?(n=cl(),ae.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Ap(t,n,a,s){n.value=a,n.getSnapshot=s,Cp(n)&&wp(t)}function Rp(t,n,a){return a(function(){Cp(n)&&wp(t)})}function Cp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!kn(t,a)}catch{return!0}}function wp(t){var n=Qa(t,2);n!==null&&In(n,t,2)}function Lc(t){var n=wn();if(typeof t=="function"){var a=t;if(t=a(),sr){zt(!0);try{a()}finally{zt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:t},n}function Dp(t,n,a,s){return t.baseState=a,Dc(t,ze,typeof s=="function"?s:Gi)}function H0(t,n,a,s,u){if(ml(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};O.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Up(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Up(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var f=O.T,g={};O.T=g;try{var E=a(u,s),B=O.S;B!==null&&B(g,E),Lp(t,n,E)}catch(nt){Nc(t,n,nt)}finally{f!==null&&g.types!==null&&(f.types=g.types),O.T=f}}else try{f=a(u,s),Lp(t,n,f)}catch(nt){Nc(t,n,nt)}}function Lp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Np(t,n,s)},function(s){return Nc(t,n,s)}):Np(t,n,a)}function Np(t,n,a){n.status="fulfilled",n.value=a,Op(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Up(t,a)))}function Nc(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Op(n),n=n.next;while(n!==s)}t.action=null}function Op(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function zp(t,n){return n}function Pp(t,n){if(Se){var a=Ie.formState;if(a!==null){t:{var s=ae;if(Se){if(Ve){e:{for(var u=Ve,f=ai;u.nodeType!==8;){if(!f){u=null;break e}if(u=si(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ve=si(u.nextSibling),s=u.data==="F!";break t}}pa(s)}s=!1}s&&(n=a[0])}}return a=wn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zp,lastRenderedState:n},a.queue=s,a=em.bind(null,ae,s),s.dispatch=a,s=Lc(!1),f=Ic.bind(null,ae,!1,s.queue),s=wn(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=H0.bind(null,ae,u,f,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function Bp(t){var n=Je();return Fp(n,ze,t)}function Fp(t,n,a){if(n=Dc(t,n,zp)[0],t=hl(Gi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=eo(n)}catch(g){throw g===Fr?nl:g}else s=n;n=Je();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ae.flags|=2048,Xr(9,{destroy:void 0},G0.bind(null,u,a),null)),[s,f,t]}function G0(t,n){t.action=n}function Ip(t){var n=Je(),a=ze;if(a!==null)return Fp(n,a,t);Je(),n=n.memoizedState,a=Je();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Xr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=ae.updateQueue,n===null&&(n=cl(),ae.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function Hp(){return Je().memoizedState}function dl(t,n,a,s){var u=wn();ae.flags|=t,u.memoizedState=Xr(1|n,{destroy:void 0},a,s===void 0?null:s)}function pl(t,n,a,s){var u=Je();s=s===void 0?null:s;var f=u.memoizedState.inst;ze!==null&&s!==null&&Tc(s,ze.memoizedState.deps)?u.memoizedState=Xr(n,f,a,s):(ae.flags|=t,u.memoizedState=Xr(1|n,f,a,s))}function Gp(t,n){dl(8390656,8,t,n)}function Oc(t,n){pl(2048,8,t,n)}function V0(t){ae.flags|=4;var n=ae.updateQueue;if(n===null)n=cl(),ae.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Vp(t){var n=Je().memoizedState;return V0({ref:n,nextImpl:t}),function(){if((Ce&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Xp(t,n){return pl(4,2,t,n)}function kp(t,n){return pl(4,4,t,n)}function Wp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function qp(t,n,a){a=a!=null?a.concat([t]):null,pl(4,4,Wp.bind(null,n,t),a)}function zc(){}function Yp(t,n){var a=Je();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Tc(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Zp(t,n){var a=Je();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Tc(n,s[1]))return s[0];if(s=t(),sr){zt(!0);try{t()}finally{zt(!1)}}return a.memoizedState=[s,n],s}function Pc(t,n,a){return a===void 0||(Hi&1073741824)!==0&&(me&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=jm(),ae.lanes|=t,Ea|=t,a)}function jp(t,n,a,s){return kn(a,n)?a:Hr.current!==null?(t=Pc(t,a,s),kn(t,n)||(nn=!0),t):(Hi&42)===0||(Hi&1073741824)!==0&&(me&261930)===0?(nn=!0,t.memoizedState=a):(t=jm(),ae.lanes|=t,Ea|=t,n)}function Kp(t,n,a,s,u){var f=Q.p;Q.p=f!==0&&8>f?f:8;var g=O.T,E={};O.T=E,Ic(t,!1,n,a);try{var B=u(),nt=O.S;if(nt!==null&&nt(E,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var dt=B0(B,s);no(t,n,dt,Kn(t))}else no(t,n,s,Kn(t))}catch(gt){no(t,n,{then:function(){},status:"rejected",reason:gt},Kn())}finally{Q.p=f,g!==null&&E.types!==null&&(g.types=E.types),O.T=g}}function X0(){}function Bc(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=Qp(t).queue;Kp(t,u,n,q,a===null?X0:function(){return Jp(t),a(s)})}function Qp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Jp(t){var n=Qp(t);n.next===null&&(n=t.alternate.memoizedState),no(t,n.next.queue,{},Kn())}function Fc(){return Sn(xo)}function $p(){return Je().memoizedState}function tm(){return Je().memoizedState}function k0(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Kn();t=_a(a);var s=va(n,t,a);s!==null&&(In(s,n,a),Qs(s,n,a)),n={cache:dc()},t.payload=n;return}n=n.return}}function W0(t,n,a){var s=Kn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ml(t)?nm(n,a):(a=nc(t,n,a,s),a!==null&&(In(a,t,s),im(a,n,s)))}function em(t,n,a){var s=Kn();no(t,n,a,s)}function no(t,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ml(t))nm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,E=f(g,a);if(u.hasEagerState=!0,u.eagerState=E,kn(E,g))return jo(t,n,u,0),Ie===null&&Zo(),!1}catch{}if(a=nc(t,n,u,s),a!==null)return In(a,t,s),im(a,n,s),!0}return!1}function Ic(t,n,a,s){if(s={lane:2,revertLane:vf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},ml(t)){if(n)throw Error(r(479))}else n=nc(t,a,s,2),n!==null&&In(n,t,2)}function ml(t){var n=t.alternate;return t===ae||n!==null&&n===ae}function nm(t,n){Gr=ll=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function im(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Ls(t,a)}}var io={readContext:Sn,use:fl,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useLayoutEffect:Ze,useInsertionEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useSyncExternalStore:Ze,useId:Ze,useHostTransitionStatus:Ze,useFormState:Ze,useActionState:Ze,useOptimistic:Ze,useMemoCache:Ze,useCacheRefresh:Ze};io.useEffectEvent=Ze;var am={readContext:Sn,use:fl,useCallback:function(t,n){return wn().memoizedState=[t,n===void 0?null:n],t},useContext:Sn,useEffect:Gp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,dl(4194308,4,Wp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return dl(4194308,4,t,n)},useInsertionEffect:function(t,n){dl(4,2,t,n)},useMemo:function(t,n){var a=wn();n=n===void 0?null:n;var s=t();if(sr){zt(!0);try{t()}finally{zt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=wn();if(a!==void 0){var u=a(n);if(sr){zt(!0);try{a(n)}finally{zt(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=W0.bind(null,ae,t),[s.memoizedState,t]},useRef:function(t){var n=wn();return t={current:t},n.memoizedState=t},useState:function(t){t=Lc(t);var n=t.queue,a=em.bind(null,ae,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:zc,useDeferredValue:function(t,n){var a=wn();return Pc(a,t,n)},useTransition:function(){var t=Lc(!1);return t=Kp.bind(null,ae,t.queue,!0,!1),wn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=ae,u=wn();if(Se){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ie===null)throw Error(r(349));(me&127)!==0||bp(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Gp(Rp.bind(null,s,f,t),[t]),s.flags|=2048,Xr(9,{destroy:void 0},Ap.bind(null,s,f,a,n),null),a},useId:function(){var t=wn(),n=Ie.identifierPrefix;if(Se){var a=Ri,s=Ai;a=(s&~(1<<32-Kt(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=ul++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=F0++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Fc,useFormState:Pp,useActionState:Pp,useOptimistic:function(t){var n=wn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ic.bind(null,ae,!0,a),a.dispatch=n,[t,n]},useMemoCache:wc,useCacheRefresh:function(){return wn().memoizedState=k0.bind(null,ae)},useEffectEvent:function(t){var n=wn(),a={impl:t};return n.memoizedState=a,function(){if((Ce&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Hc={readContext:Sn,use:fl,useCallback:Yp,useContext:Sn,useEffect:Oc,useImperativeHandle:qp,useInsertionEffect:Xp,useLayoutEffect:kp,useMemo:Zp,useReducer:hl,useRef:Hp,useState:function(){return hl(Gi)},useDebugValue:zc,useDeferredValue:function(t,n){var a=Je();return jp(a,ze.memoizedState,t,n)},useTransition:function(){var t=hl(Gi)[0],n=Je().memoizedState;return[typeof t=="boolean"?t:eo(t),n]},useSyncExternalStore:Tp,useId:$p,useHostTransitionStatus:Fc,useFormState:Bp,useActionState:Bp,useOptimistic:function(t,n){var a=Je();return Dp(a,ze,t,n)},useMemoCache:wc,useCacheRefresh:tm};Hc.useEffectEvent=Vp;var rm={readContext:Sn,use:fl,useCallback:Yp,useContext:Sn,useEffect:Oc,useImperativeHandle:qp,useInsertionEffect:Xp,useLayoutEffect:kp,useMemo:Zp,useReducer:Uc,useRef:Hp,useState:function(){return Uc(Gi)},useDebugValue:zc,useDeferredValue:function(t,n){var a=Je();return ze===null?Pc(a,t,n):jp(a,ze.memoizedState,t,n)},useTransition:function(){var t=Uc(Gi)[0],n=Je().memoizedState;return[typeof t=="boolean"?t:eo(t),n]},useSyncExternalStore:Tp,useId:$p,useHostTransitionStatus:Fc,useFormState:Ip,useActionState:Ip,useOptimistic:function(t,n){var a=Je();return ze!==null?Dp(a,ze,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:wc,useCacheRefresh:tm};rm.useEffectEvent=Vp;function Gc(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:S({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Vc={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Kn(),u=_a(s);u.payload=n,a!=null&&(u.callback=a),n=va(t,u,s),n!==null&&(In(n,t,s),Qs(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Kn(),u=_a(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=va(t,u,s),n!==null&&(In(n,t,s),Qs(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Kn(),s=_a(a);s.tag=2,n!=null&&(s.callback=n),n=va(t,s,a),n!==null&&(In(n,t,a),Qs(n,t,a))}};function sm(t,n,a,s,u,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,g):n.prototype&&n.prototype.isPureReactComponent?!Xs(a,s)||!Xs(u,f):!0}function om(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Vc.enqueueReplaceState(n,n.state,null)}function or(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=S({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function lm(t){Yo(t)}function um(t){console.error(t)}function cm(t){Yo(t)}function gl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function fm(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Xc(t,n,a){return a=_a(a),a.tag=3,a.payload={element:null},a.callback=function(){gl(t,n)},a}function hm(t){return t=_a(t),t.tag=3,t}function dm(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;t.payload=function(){return u(f)},t.callback=function(){fm(n,a,s)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){fm(n,a,s),typeof u!="function"&&(Ta===null?Ta=new Set([this]):Ta.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})})}function q0(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&zr(n,a,u,!0),a=qn.current,a!==null){switch(a.tag){case 31:case 13:return ri===null?Cl():a.alternate===null&&je===0&&(je=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===il?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),mf(t,s,u)),!1;case 22:return a.flags|=65536,s===il?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),mf(t,s,u)),!1}throw Error(r(435,a.tag))}return mf(t,s,u),Cl(),!1}if(Se)return n=qn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==lc&&(t=Error(r(422),{cause:s}),qs(ei(t,a)))):(s!==lc&&(n=Error(r(423),{cause:s}),qs(ei(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=ei(s,a),u=Xc(t.stateNode,s,u),Sc(t,u),je!==4&&(je=2)),!1;var f=Error(r(520),{cause:s});if(f=ei(f,a),fo===null?fo=[f]:fo.push(f),je!==4&&(je=2),n===null)return!0;s=ei(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Xc(a.stateNode,s,t),Sc(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ta===null||!Ta.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=hm(u),dm(u,t,a,s),Sc(a,u),!1}a=a.return}while(a!==null);return!1}var kc=Error(r(461)),nn=!1;function xn(t,n,a,s){n.child=t===null?_p(n,null,a,s):rr(n,t.child,a,s)}function pm(t,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var g={};for(var E in s)E!=="ref"&&(g[E]=s[E])}else g=s;return er(n),s=bc(t,n,a,g,f,u),E=Ac(),t!==null&&!nn?(Rc(t,n,u),Vi(t,n,u)):(Se&&E&&sc(n),n.flags|=1,xn(t,n,s,u),n.child)}function mm(t,n,a,s,u){if(t===null){var f=a.type;return typeof f=="function"&&!ic(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,gm(t,n,f,s,u)):(t=Qo(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Jc(t,u)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:Xs,a(g,s)&&t.ref===n.ref)return Vi(t,n,u)}return n.flags|=1,t=Pi(f,s),t.ref=n.ref,t.return=n,n.child=t}function gm(t,n,a,s,u){if(t!==null){var f=t.memoizedProps;if(Xs(f,s)&&t.ref===n.ref)if(nn=!1,n.pendingProps=s=f,Jc(t,u))(t.flags&131072)!==0&&(nn=!0);else return n.lanes=t.lanes,Vi(t,n,u)}return Wc(t,n,a,s,u)}function _m(t,n,a,s){var u=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~f}else s=0,n.child=null;return vm(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&el(n,f!==null?f.cachePool:null),f!==null?xp(n,f):yc(),yp(n);else return s=n.lanes=536870912,vm(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(el(n,f.cachePool),xp(n,f),xa(),n.memoizedState=null):(t!==null&&el(n,null),yc(),xa());return xn(t,n,u,a),n.child}function ao(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function vm(t,n,a,s,u){var f=mc();return f=f===null?null:{parent:tn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&el(n,null),yc(),yp(n),t!==null&&zr(t,n,s,!0),n.childLanes=u,null}function _l(t,n){return n=Sl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Sm(t,n,a){return rr(n,t.child,null,a),t=_l(n,n.pendingProps),t.flags|=2,Yn(n),n.memoizedState=null,t}function Y0(t,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Se){if(s.mode==="hidden")return t=_l(n,s),n.lanes=536870912,ao(null,t);if(Ec(n),(t=Ve)?(t=Ug(t,ai),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ha!==null?{id:Ai,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},a=np(t),a.return=n,n.child=a,vn=n,Ve=null)):t=null,t===null)throw pa(n);return n.lanes=536870912,null}return _l(n,s)}var f=t.memoizedState;if(f!==null){var g=f.dehydrated;if(Ec(n),u)if(n.flags&256)n.flags&=-257,n=Sm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(nn||zr(t,n,a,!1),u=(a&t.childLanes)!==0,nn||u){if(s=Ie,s!==null&&(g=bi(s,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,Qa(t,g),In(s,t,g),kc;Cl(),n=Sm(t,n,a)}else t=f.treeContext,Ve=si(g.nextSibling),vn=n,Se=!0,da=null,ai=!1,t!==null&&rp(n,t),n=_l(n,s),n.flags|=4096;return n}return t=Pi(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function vl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Wc(t,n,a,s,u){return er(n),a=bc(t,n,a,s,void 0,u),s=Ac(),t!==null&&!nn?(Rc(t,n,u),Vi(t,n,u)):(Se&&s&&sc(n),n.flags|=1,xn(t,n,a,u),n.child)}function xm(t,n,a,s,u,f){return er(n),n.updateQueue=null,a=Ep(n,s,a,u),Mp(t),s=Ac(),t!==null&&!nn?(Rc(t,n,f),Vi(t,n,f)):(Se&&s&&sc(n),n.flags|=1,xn(t,n,a,f),n.child)}function ym(t,n,a,s,u){if(er(n),n.stateNode===null){var f=Ur,g=a.contextType;typeof g=="object"&&g!==null&&(f=Sn(g)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Vc,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},_c(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?Sn(g):Ur,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Gc(n,a,g,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&Vc.enqueueReplaceState(f,f.state,null),$s(n,s,f,u),Js(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var E=n.memoizedProps,B=or(a,E);f.props=B;var nt=f.context,dt=a.contextType;g=Ur,typeof dt=="object"&&dt!==null&&(g=Sn(dt));var gt=a.getDerivedStateFromProps;dt=typeof gt=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,dt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||nt!==g)&&om(n,f,s,g),ga=!1;var it=n.memoizedState;f.state=it,$s(n,s,f,u),Js(),nt=n.memoizedState,E||it!==nt||ga?(typeof gt=="function"&&(Gc(n,a,gt,s),nt=n.memoizedState),(B=ga||sm(n,a,B,s,it,nt,g))?(dt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=nt),f.props=s,f.state=nt,f.context=g,s=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,vc(t,n),g=n.memoizedProps,dt=or(a,g),f.props=dt,gt=n.pendingProps,it=f.context,nt=a.contextType,B=Ur,typeof nt=="object"&&nt!==null&&(B=Sn(nt)),E=a.getDerivedStateFromProps,(nt=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==gt||it!==B)&&om(n,f,s,B),ga=!1,it=n.memoizedState,f.state=it,$s(n,s,f,u),Js();var lt=n.memoizedState;g!==gt||it!==lt||ga||t!==null&&t.dependencies!==null&&$o(t.dependencies)?(typeof E=="function"&&(Gc(n,a,E,s),lt=n.memoizedState),(dt=ga||sm(n,a,dt,s,it,lt,B)||t!==null&&t.dependencies!==null&&$o(t.dependencies))?(nt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,lt,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,lt,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&it===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&it===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=lt),f.props=s,f.state=lt,f.context=B,s=dt):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&it===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&it===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,vl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=rr(n,t.child,null,u),n.child=rr(n,null,a,u)):xn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=Vi(t,n,u),t}function Mm(t,n,a,s){return $a(),n.flags|=256,xn(t,n,a,s),n.child}var qc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Yc(t){return{baseLanes:t,cachePool:fp()}}function Zc(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=jn),t}function Em(t,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=t!==null&&t.memoizedState===null?!1:(Qe.current&2)!==0),g&&(u=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(Se){if(u?Sa(n):xa(),(t=Ve)?(t=Ug(t,ai),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ha!==null?{id:Ai,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},a=np(t),a.return=n,n.child=a,vn=n,Ve=null)):t=null,t===null)throw pa(n);return Uf(t)?n.lanes=32:n.lanes=536870912,null}var E=s.children;return s=s.fallback,u?(xa(),u=n.mode,E=Sl({mode:"hidden",children:E},u),s=Ja(s,u,a,null),E.return=n,s.return=n,E.sibling=s,n.child=E,s=n.child,s.memoizedState=Yc(a),s.childLanes=Zc(t,g,a),n.memoizedState=qc,ao(null,s)):(Sa(n),jc(n,E))}var B=t.memoizedState;if(B!==null&&(E=B.dehydrated,E!==null)){if(f)n.flags&256?(Sa(n),n.flags&=-257,n=Kc(t,n,a)):n.memoizedState!==null?(xa(),n.child=t.child,n.flags|=128,n=null):(xa(),E=s.fallback,u=n.mode,s=Sl({mode:"visible",children:s.children},u),E=Ja(E,u,a,null),E.flags|=2,s.return=n,E.return=n,s.sibling=E,n.child=s,rr(n,t.child,null,a),s=n.child,s.memoizedState=Yc(a),s.childLanes=Zc(t,g,a),n.memoizedState=qc,n=ao(null,s));else if(Sa(n),Uf(E)){if(g=E.nextSibling&&E.nextSibling.dataset,g)var nt=g.dgst;g=nt,s=Error(r(419)),s.stack="",s.digest=g,qs({value:s,source:null,stack:null}),n=Kc(t,n,a)}else if(nn||zr(t,n,a,!1),g=(a&t.childLanes)!==0,nn||g){if(g=Ie,g!==null&&(s=bi(g,a),s!==0&&s!==B.retryLane))throw B.retryLane=s,Qa(t,s),In(g,t,s),kc;Df(E)||Cl(),n=Kc(t,n,a)}else Df(E)?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,Ve=si(E.nextSibling),vn=n,Se=!0,da=null,ai=!1,t!==null&&rp(n,t),n=jc(n,s.children),n.flags|=4096);return n}return u?(xa(),E=s.fallback,u=n.mode,B=t.child,nt=B.sibling,s=Pi(B,{mode:"hidden",children:s.children}),s.subtreeFlags=B.subtreeFlags&65011712,nt!==null?E=Pi(nt,E):(E=Ja(E,u,a,null),E.flags|=2),E.return=n,s.return=n,s.sibling=E,n.child=s,ao(null,s),s=n.child,E=t.child.memoizedState,E===null?E=Yc(a):(u=E.cachePool,u!==null?(B=tn._currentValue,u=u.parent!==B?{parent:B,pool:B}:u):u=fp(),E={baseLanes:E.baseLanes|a,cachePool:u}),s.memoizedState=E,s.childLanes=Zc(t,g,a),n.memoizedState=qc,ao(t.child,s)):(Sa(n),a=t.child,t=a.sibling,a=Pi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function jc(t,n){return n=Sl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Sl(t,n){return t=Wn(22,t,null,n),t.lanes=0,t}function Kc(t,n,a){return rr(n,t.child,null,a),t=jc(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Tm(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),fc(t.return,n,a)}function Qc(t,n,a,s,u,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=s,g.tail=a,g.tailMode=u,g.treeForkCount=f)}function bm(t,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;s=s.children;var g=Qe.current,E=(g&2)!==0;if(E?(g=g&1|2,n.flags|=128):g&=1,xt(Qe,g),xn(t,n,s,a),s=Se?Ws:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Tm(t,a,n);else if(t.tag===19)Tm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&ol(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Qc(n,!1,u,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&ol(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Qc(n,!0,a,null,f,s);break;case"together":Qc(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Vi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ea|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(zr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Pi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Pi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Jc(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&$o(t)))}function Z0(t,n,a){switch(n.tag){case 3:Pt(n,n.stateNode.containerInfo),ma(n,tn,t.memoizedState.cache),$a();break;case 27:case 5:te(n);break;case 4:Pt(n,n.stateNode.containerInfo);break;case 10:ma(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Ec(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(Sa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Em(t,n,a):(Sa(n),t=Vi(t,n,a),t!==null?t.sibling:null);Sa(n);break;case 19:var u=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(zr(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return bm(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),xt(Qe,Qe.current),s)break;return null;case 22:return n.lanes=0,_m(t,n,a,n.pendingProps);case 24:ma(n,tn,t.memoizedState.cache)}return Vi(t,n,a)}function Am(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)nn=!0;else{if(!Jc(t,a)&&(n.flags&128)===0)return nn=!1,Z0(t,n,a);nn=(t.flags&131072)!==0}else nn=!1,Se&&(n.flags&1048576)!==0&&ap(n,Ws,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=ir(n.elementType),n.type=t,typeof t=="function")ic(t)?(s=or(t,s),n.tag=1,n=ym(null,n,t,s,a)):(n.tag=0,n=Wc(null,n,t,s,a));else{if(t!=null){var u=t.$$typeof;if(u===U){n.tag=11,n=pm(null,n,t,s,a);break t}else if(u===P){n.tag=14,n=mm(null,n,t,s,a);break t}}throw n=ht(t)||t,Error(r(306,n,""))}}return n;case 0:return Wc(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=or(s,n.pendingProps),ym(t,n,s,u,a);case 3:t:{if(Pt(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,vc(t,n),$s(n,s,null,a);var g=n.memoizedState;if(s=g.cache,ma(n,tn,s),s!==f.cache&&hc(n,[tn],a,!0),Js(),s=g.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Mm(t,n,s,a);break t}else if(s!==u){u=ei(Error(r(424)),n),qs(u),n=Mm(t,n,s,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Ve=si(t.firstChild),vn=n,Se=!0,da=null,ai=!0,a=_p(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if($a(),s===u){n=Vi(t,n,a);break t}xn(t,n,s,a)}n=n.child}return n;case 26:return vl(t,n),t===null?(a=Bg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Se||(a=n.type,t=n.pendingProps,s=zl(Mt.current).createElement(a),s[qe]=n,s[gn]=t,yn(s,a,t),X(s),n.stateNode=s):n.memoizedState=Bg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return te(n),t===null&&Se&&(s=n.stateNode=Og(n.type,n.pendingProps,Mt.current),vn=n,ai=!0,u=Ve,Ca(n.type)?(Lf=u,Ve=si(s.firstChild)):Ve=u),xn(t,n,n.pendingProps.children,a),vl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Se&&((u=s=Ve)&&(s=TS(s,n.type,n.pendingProps,ai),s!==null?(n.stateNode=s,vn=n,Ve=si(s.firstChild),ai=!1,u=!0):u=!1),u||pa(n)),te(n),u=n.type,f=n.pendingProps,g=t!==null?t.memoizedProps:null,s=f.children,Rf(u,f)?s=null:g!==null&&Rf(u,g)&&(n.flags|=32),n.memoizedState!==null&&(u=bc(t,n,I0,null,null,a),xo._currentValue=u),vl(t,n),xn(t,n,s,a),n.child;case 6:return t===null&&Se&&((t=a=Ve)&&(a=bS(a,n.pendingProps,ai),a!==null?(n.stateNode=a,vn=n,Ve=null,t=!0):t=!1),t||pa(n)),null;case 13:return Em(t,n,a);case 4:return Pt(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=rr(n,null,s,a):xn(t,n,s,a),n.child;case 11:return pm(t,n,n.type,n.pendingProps,a);case 7:return xn(t,n,n.pendingProps,a),n.child;case 8:return xn(t,n,n.pendingProps.children,a),n.child;case 12:return xn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,ma(n,n.type,s.value),xn(t,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,er(n),u=Sn(u),s=s(u),n.flags|=1,xn(t,n,s,a),n.child;case 14:return mm(t,n,n.type,n.pendingProps,a);case 15:return gm(t,n,n.type,n.pendingProps,a);case 19:return bm(t,n,a);case 31:return Y0(t,n,a);case 22:return _m(t,n,a,n.pendingProps);case 24:return er(n),s=Sn(tn),t===null?(u=mc(),u===null&&(u=Ie,f=dc(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},_c(n),ma(n,tn,u)):((t.lanes&a)!==0&&(vc(t,n),$s(n,null,null,a),Js()),u=t.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ma(n,tn,s)):(s=f.cache,ma(n,tn,s),s!==u.cache&&hc(n,[tn],a,!0))),xn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Xi(t){t.flags|=4}function $c(t,n,a,s,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if($m())t.flags|=8192;else throw ar=il,gc}else t.flags&=-16777217}function Rm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Vg(n))if($m())t.flags|=8192;else throw ar=il,gc}function xl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?sn():536870912,t.lanes|=n,Yr|=n)}function ro(t,n){if(!Se)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Xe(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function j0(t,n,a){var s=n.pendingProps;switch(oc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(n),null;case 1:return Xe(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ii(tn),It(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Or(n)?Xi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,uc())),Xe(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(Xi(n),f!==null?(Xe(n),Rm(n,f)):(Xe(n),$c(n,u,null,s,a))):f?f!==t.memoizedState?(Xi(n),Xe(n),Rm(n,f)):(Xe(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&Xi(n),Xe(n),$c(n,u,t,s,a)),null;case 27:if(De(n),a=Mt.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Xi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Xe(n),null}t=j.current,Or(n)?sp(n):(t=Og(u,s,a),n.stateNode=t,Xi(n))}return Xe(n),null;case 5:if(De(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Xi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Xe(n),null}if(f=j.current,Or(n))sp(n);else{var g=zl(Mt.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?g.createElement("select",{is:s.is}):g.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?g.createElement(u,{is:s.is}):g.createElement(u)}}f[qe]=n,f[gn]=s;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(yn(f,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Xi(n)}}return Xe(n),$c(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Xi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=Mt.current,Or(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=vn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[qe]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Eg(t.nodeValue,a)),t||pa(n,!0)}else t=zl(t).createTextNode(s),t[qe]=n,n.stateNode=t}return Xe(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=Or(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[qe]=n}else $a(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Xe(n),t=!1}else a=uc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Yn(n),n):(Yn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Xe(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Or(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[qe]=n}else $a(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Xe(n),u=!1}else u=uc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Yn(n),n):(Yn(n),null)}return Yn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),xl(n,n.updateQueue),Xe(n),null);case 4:return It(),t===null&&Mf(n.stateNode.containerInfo),Xe(n),null;case 10:return Ii(n.type),Xe(n),null;case 19:if(at(Qe),s=n.memoizedState,s===null)return Xe(n),null;if(u=(n.flags&128)!==0,f=s.rendering,f===null)if(u)ro(s,!1);else{if(je!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=ol(t),f!==null){for(n.flags|=128,ro(s,!1),t=f.updateQueue,n.updateQueue=t,xl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)ep(a,t),a=a.sibling;return xt(Qe,Qe.current&1|2),Se&&Bi(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&w()>bl&&(n.flags|=128,u=!0,ro(s,!1),n.lanes=4194304)}else{if(!u)if(t=ol(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,xl(n,t),ro(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!Se)return Xe(n),null}else 2*w()-s.renderingStartTime>bl&&a!==536870912&&(n.flags|=128,u=!0,ro(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=w(),t.sibling=null,a=Qe.current,xt(Qe,u?a&1|2:a&1),Se&&Bi(n,s.treeForkCount),t):(Xe(n),null);case 22:case 23:return Yn(n),Mc(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Xe(n),n.subtreeFlags&6&&(n.flags|=8192)):Xe(n),a=n.updateQueue,a!==null&&xl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&at(nr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ii(tn),Xe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function K0(t,n){switch(oc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ii(tn),It(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return De(n),null;case 31:if(n.memoizedState!==null){if(Yn(n),n.alternate===null)throw Error(r(340));$a()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Yn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));$a()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return at(Qe),null;case 4:return It(),null;case 10:return Ii(n.type),null;case 22:case 23:return Yn(n),Mc(),t!==null&&at(nr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ii(tn),null;case 25:return null;default:return null}}function Cm(t,n){switch(oc(n),n.tag){case 3:Ii(tn),It();break;case 26:case 27:case 5:De(n);break;case 4:It();break;case 31:n.memoizedState!==null&&Yn(n);break;case 13:Yn(n);break;case 19:at(Qe);break;case 10:Ii(n.type);break;case 22:case 23:Yn(n),Mc(),t!==null&&at(nr);break;case 24:Ii(tn)}}function so(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var f=a.create,g=a.inst;s=f(),g.destroy=s}a=a.next}while(a!==u)}}catch(E){Le(n,n.return,E)}}function ya(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&t)===t){var g=s.inst,E=g.destroy;if(E!==void 0){g.destroy=void 0,u=n;var B=a,nt=E;try{nt()}catch(dt){Le(u,B,dt)}}}s=s.next}while(s!==f)}}catch(dt){Le(n,n.return,dt)}}function wm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Sp(n,a)}catch(s){Le(t,t.return,s)}}}function Dm(t,n,a){a.props=or(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Le(t,n,s)}}function oo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(u){Le(t,n,u)}}function Ci(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Le(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Le(t,n,u)}else a.current=null}function Um(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Le(t,t.return,u)}}function tf(t,n,a){try{var s=t.stateNode;vS(s,t.type,a,n),s[gn]=n}catch(u){Le(t,t.return,u)}}function Lm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ca(t.type)||t.tag===4}function ef(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Lm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ca(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function nf(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Oi));else if(s!==4&&(s===27&&Ca(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(nf(t,n,a),t=t.sibling;t!==null;)nf(t,n,a),t=t.sibling}function yl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Ca(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(yl(t,n,a),t=t.sibling;t!==null;)yl(t,n,a),t=t.sibling}function Nm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);yn(n,s,a),n[qe]=t,n[gn]=a}catch(f){Le(t,t.return,f)}}var ki=!1,an=!1,af=!1,Om=typeof WeakSet=="function"?WeakSet:Set,dn=null;function Q0(t,n){if(t=t.containerInfo,bf=Vl,t=qd(t),Ku(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var g=0,E=-1,B=-1,nt=0,dt=0,gt=t,it=null;e:for(;;){for(var lt;gt!==a||u!==0&&gt.nodeType!==3||(E=g+u),gt!==f||s!==0&&gt.nodeType!==3||(B=g+s),gt.nodeType===3&&(g+=gt.nodeValue.length),(lt=gt.firstChild)!==null;)it=gt,gt=lt;for(;;){if(gt===t)break e;if(it===a&&++nt===u&&(E=g),it===f&&++dt===s&&(B=g),(lt=gt.nextSibling)!==null)break;gt=it,it=gt.parentNode}gt=lt}a=E===-1||B===-1?null:{start:E,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Af={focusedElem:t,selectionRange:a},Vl=!1,dn=n;dn!==null;)if(n=dn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,dn=t;else for(;dn!==null;){switch(n=dn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Ht=or(a.type,u);t=s.getSnapshotBeforeUpdate(Ht,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(jt){Le(a,a.return,jt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)wf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":wf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,dn=t;break}dn=n.return}}function zm(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:qi(t,a),s&4&&so(5,a);break;case 1:if(qi(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){Le(a,a.return,g)}else{var u=or(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Le(a,a.return,g)}}s&64&&wm(a),s&512&&oo(a,a.return);break;case 3:if(qi(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Sp(t,n)}catch(g){Le(a,a.return,g)}}break;case 27:n===null&&s&4&&Nm(a);case 26:case 5:qi(t,a),n===null&&s&4&&Um(a),s&512&&oo(a,a.return);break;case 12:qi(t,a);break;case 31:qi(t,a),s&4&&Fm(t,a);break;case 13:qi(t,a),s&4&&Im(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=sS.bind(null,a),AS(t,a))));break;case 22:if(s=a.memoizedState!==null||ki,!s){n=n!==null&&n.memoizedState!==null||an,u=ki;var f=an;ki=s,(an=n)&&!f?Yi(t,a,(a.subtreeFlags&8772)!==0):qi(t,a),ki=u,an=f}break;case 30:break;default:qi(t,a)}}function Pm(t){var n=t.alternate;n!==null&&(t.alternate=null,Pm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&zs(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var We=null,zn=!1;function Wi(t,n,a){for(a=a.child;a!==null;)Bm(t,n,a),a=a.sibling}function Bm(t,n,a){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(Wt,a)}catch{}switch(a.tag){case 26:an||Ci(a,n),Wi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:an||Ci(a,n);var s=We,u=zn;Ca(a.type)&&(We=a.stateNode,zn=!1),Wi(t,n,a),_o(a.stateNode),We=s,zn=u;break;case 5:an||Ci(a,n);case 6:if(s=We,u=zn,We=null,Wi(t,n,a),We=s,zn=u,We!==null)if(zn)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(a.stateNode)}catch(f){Le(a,n,f)}else try{We.removeChild(a.stateNode)}catch(f){Le(a,n,f)}break;case 18:We!==null&&(zn?(t=We,wg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),es(t)):wg(We,a.stateNode));break;case 4:s=We,u=zn,We=a.stateNode.containerInfo,zn=!0,Wi(t,n,a),We=s,zn=u;break;case 0:case 11:case 14:case 15:ya(2,a,n),an||ya(4,a,n),Wi(t,n,a);break;case 1:an||(Ci(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Dm(a,n,s)),Wi(t,n,a);break;case 21:Wi(t,n,a);break;case 22:an=(s=an)||a.memoizedState!==null,Wi(t,n,a),an=s;break;default:Wi(t,n,a)}}function Fm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{es(t)}catch(a){Le(n,n.return,a)}}}function Im(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{es(t)}catch(a){Le(n,n.return,a)}}function J0(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Om),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Om),n;default:throw Error(r(435,t.tag))}}function Ml(t,n){var a=J0(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=oS.bind(null,t,s);s.then(u,u)}})}function Pn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=t,g=n,E=g;t:for(;E!==null;){switch(E.tag){case 27:if(Ca(E.type)){We=E.stateNode,zn=!1;break t}break;case 5:We=E.stateNode,zn=!1;break t;case 3:case 4:We=E.stateNode.containerInfo,zn=!0;break t}E=E.return}if(We===null)throw Error(r(160));Bm(f,g,u),We=null,zn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Hm(n,t),n=n.sibling}var gi=null;function Hm(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Pn(n,t),Bn(t),s&4&&(ya(3,t,t.return),so(3,t),ya(5,t,t.return));break;case 1:Pn(n,t),Bn(t),s&512&&(an||a===null||Ci(a,a.return)),s&64&&ki&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=gi;if(Pn(n,t),Bn(t),s&512&&(an||a===null||Ci(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,u=u.ownerDocument||u;e:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ya]||f[qe]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),yn(f,s,a),f[qe]=t,X(f),s=f;break t;case"link":var g=Hg("link","href",u).get(s+(a.href||""));if(g){for(var E=0;E<g.length;E++)if(f=g[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(E,1);break e}}f=u.createElement(s),yn(f,s,a),u.head.appendChild(f);break;case"meta":if(g=Hg("meta","content",u).get(s+(a.content||""))){for(E=0;E<g.length;E++)if(f=g[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(E,1);break e}}f=u.createElement(s),yn(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[qe]=t,X(f),s=f}t.stateNode=s}else Gg(u,t.type,t.stateNode);else t.stateNode=Ig(u,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Gg(u,t.type,t.stateNode):Ig(u,s,t.memoizedProps)):s===null&&t.stateNode!==null&&tf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Pn(n,t),Bn(t),s&512&&(an||a===null||Ci(a,a.return)),a!==null&&s&4&&tf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Pn(n,t),Bn(t),s&512&&(an||a===null||Ci(a,a.return)),t.flags&32){u=t.stateNode;try{Nn(u,"")}catch(Ht){Le(t,t.return,Ht)}}s&4&&t.stateNode!=null&&(u=t.memoizedProps,tf(t,u,a!==null?a.memoizedProps:u)),s&1024&&(af=!0);break;case 6:if(Pn(n,t),Bn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(Ht){Le(t,t.return,Ht)}}break;case 3:if(Fl=null,u=gi,gi=Pl(n.containerInfo),Pn(n,t),gi=u,Bn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{es(n.containerInfo)}catch(Ht){Le(t,t.return,Ht)}af&&(af=!1,Gm(t));break;case 4:s=gi,gi=Pl(t.stateNode.containerInfo),Pn(n,t),Bn(t),gi=s;break;case 12:Pn(n,t),Bn(t);break;case 31:Pn(n,t),Bn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Ml(t,s)));break;case 13:Pn(n,t),Bn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Tl=w()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Ml(t,s)));break;case 22:u=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,nt=ki,dt=an;if(ki=nt||u,an=dt||B,Pn(n,t),an=dt,ki=nt,Bn(t),s&8192)t:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||B||ki||an||lr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,u)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{E=B.stateNode;var gt=B.memoizedProps.style,it=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;E.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(Ht){Le(B,B.return,Ht)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(Ht){Le(B,B.return,Ht)}}}else if(n.tag===18){if(a===null){B=n;try{var lt=B.stateNode;u?Dg(lt,!0):Dg(B.stateNode,!1)}catch(Ht){Le(B,B.return,Ht)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Ml(t,a))));break;case 19:Pn(n,t),Bn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Ml(t,s)));break;case 30:break;case 21:break;default:Pn(n,t),Bn(t)}}function Bn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(Lm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=ef(t);yl(t,f,u);break;case 5:var g=a.stateNode;a.flags&32&&(Nn(g,""),a.flags&=-33);var E=ef(t);yl(t,E,g);break;case 3:case 4:var B=a.stateNode.containerInfo,nt=ef(t);nf(t,nt,B);break;default:throw Error(r(161))}}catch(dt){Le(t,t.return,dt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Gm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Gm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function qi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)zm(t,n.alternate,n),n=n.sibling}function lr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ya(4,n,n.return),lr(n);break;case 1:Ci(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Dm(n,n.return,a),lr(n);break;case 27:_o(n.stateNode);case 26:case 5:Ci(n,n.return),lr(n);break;case 22:n.memoizedState===null&&lr(n);break;case 30:lr(n);break;default:lr(n)}t=t.sibling}}function Yi(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=t,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:Yi(u,f,a),so(4,f);break;case 1:if(Yi(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(nt){Le(s,s.return,nt)}if(s=f,u=s.updateQueue,u!==null){var E=s.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)vp(B[u],E)}catch(nt){Le(s,s.return,nt)}}a&&g&64&&wm(f),oo(f,f.return);break;case 27:Nm(f);case 26:case 5:Yi(u,f,a),a&&s===null&&g&4&&Um(f),oo(f,f.return);break;case 12:Yi(u,f,a);break;case 31:Yi(u,f,a),a&&g&4&&Fm(u,f);break;case 13:Yi(u,f,a),a&&g&4&&Im(u,f);break;case 22:f.memoizedState===null&&Yi(u,f,a),oo(f,f.return);break;case 30:break;default:Yi(u,f,a)}n=n.sibling}}function rf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Ys(a))}function sf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ys(t))}function _i(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Vm(t,n,a,s),n=n.sibling}function Vm(t,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:_i(t,n,a,s),u&2048&&so(9,n);break;case 1:_i(t,n,a,s);break;case 3:_i(t,n,a,s),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ys(t)));break;case 12:if(u&2048){_i(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,g=f.id,E=f.onPostCommit;typeof E=="function"&&E(g,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){Le(n,n.return,B)}}else _i(t,n,a,s);break;case 31:_i(t,n,a,s);break;case 13:_i(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?_i(t,n,a,s):lo(t,n):f._visibility&2?_i(t,n,a,s):(f._visibility|=2,kr(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),u&2048&&rf(g,n);break;case 24:_i(t,n,a,s),u&2048&&sf(n.alternate,n);break;default:_i(t,n,a,s)}}function kr(t,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,g=n,E=a,B=s,nt=g.flags;switch(g.tag){case 0:case 11:case 15:kr(f,g,E,B,u),so(8,g);break;case 23:break;case 22:var dt=g.stateNode;g.memoizedState!==null?dt._visibility&2?kr(f,g,E,B,u):lo(f,g):(dt._visibility|=2,kr(f,g,E,B,u)),u&&nt&2048&&rf(g.alternate,g);break;case 24:kr(f,g,E,B,u),u&&nt&2048&&sf(g.alternate,g);break;default:kr(f,g,E,B,u)}n=n.sibling}}function lo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:lo(a,s),u&2048&&rf(s.alternate,s);break;case 24:lo(a,s),u&2048&&sf(s.alternate,s);break;default:lo(a,s)}n=n.sibling}}var uo=8192;function Wr(t,n,a){if(t.subtreeFlags&uo)for(t=t.child;t!==null;)Xm(t,n,a),t=t.sibling}function Xm(t,n,a){switch(t.tag){case 26:Wr(t,n,a),t.flags&uo&&t.memoizedState!==null&&FS(a,gi,t.memoizedState,t.memoizedProps);break;case 5:Wr(t,n,a);break;case 3:case 4:var s=gi;gi=Pl(t.stateNode.containerInfo),Wr(t,n,a),gi=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=uo,uo=16777216,Wr(t,n,a),uo=s):Wr(t,n,a));break;default:Wr(t,n,a)}}function km(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function co(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];dn=s,qm(s,t)}km(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Wm(t),t=t.sibling}function Wm(t){switch(t.tag){case 0:case 11:case 15:co(t),t.flags&2048&&ya(9,t,t.return);break;case 3:co(t);break;case 12:co(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,El(t)):co(t);break;default:co(t)}}function El(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];dn=s,qm(s,t)}km(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ya(8,n,n.return),El(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,El(n));break;default:El(n)}t=t.sibling}}function qm(t,n){for(;dn!==null;){var a=dn;switch(a.tag){case 0:case 11:case 15:ya(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Ys(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,dn=s;else t:for(a=t;dn!==null;){s=dn;var u=s.sibling,f=s.return;if(Pm(s),s===a){dn=null;break t}if(u!==null){u.return=f,dn=u;break t}dn=f}}}var $0={getCacheForType:function(t){var n=Sn(tn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Sn(tn).controller.signal}},tS=typeof WeakMap=="function"?WeakMap:Map,Ce=0,Ie=null,de=null,me=0,Ue=0,Zn=null,Ma=!1,qr=!1,of=!1,Zi=0,je=0,Ea=0,ur=0,lf=0,jn=0,Yr=0,fo=null,Fn=null,uf=!1,Tl=0,Ym=0,bl=1/0,Al=null,Ta=null,ln=0,ba=null,Zr=null,ji=0,cf=0,ff=null,Zm=null,ho=0,hf=null;function Kn(){return(Ce&2)!==0&&me!==0?me&-me:O.T!==null?vf():Ns()}function jm(){if(jn===0)if((me&536870912)===0||Se){var t=ct;ct<<=1,(ct&3932160)===0&&(ct=262144),jn=t}else jn=536870912;return t=qn.current,t!==null&&(t.flags|=32),jn}function In(t,n,a){(t===Ie&&(Ue===2||Ue===9)||t.cancelPendingCommit!==null)&&(jr(t,0),Aa(t,me,jn,!1)),mn(t,a),((Ce&2)===0||t!==Ie)&&(t===Ie&&((Ce&2)===0&&(ur|=a),je===4&&Aa(t,me,jn,!1)),wi(t))}function Km(t,n,a){if((Ce&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Qt(t,n),u=s?iS(t,n):pf(t,n,!0),f=s;do{if(u===0){qr&&!s&&Aa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!eS(a)){u=pf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var E=t;u=fo;var B=E.current.memoizedState.isDehydrated;if(B&&(jr(E,g).flags|=256),g=pf(E,g,!1),g!==2){if(of&&!B){E.errorRecoveryDisabledLanes|=f,ur|=f,u=4;break t}f=Fn,Fn=u,f!==null&&(Fn===null?Fn=f:Fn.push.apply(Fn,f))}u=g}if(f=!1,u!==2)continue}}if(u===1){jr(t,0),Aa(t,n,0,!0);break}t:{switch(s=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Aa(s,n,jn,!Ma);break t;case 2:Fn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Tl+300-w(),10<u)){if(Aa(s,n,jn,!Ma),Ut(s,0,!0)!==0)break t;ji=n,s.timeoutHandle=Rg(Qm.bind(null,s,a,Fn,Al,uf,n,jn,ur,Yr,Ma,f,"Throttled",-0,0),u);break t}Qm(s,a,Fn,Al,uf,n,jn,ur,Yr,Ma,f,null,-0,0)}}break}while(!0);wi(t)}function Qm(t,n,a,s,u,f,g,E,B,nt,dt,gt,it,lt){if(t.timeoutHandle=-1,gt=n.subtreeFlags,gt&8192||(gt&16785408)===16785408){gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Oi},Xm(n,f,gt);var Ht=(f&62914560)===f?Tl-w():(f&4194048)===f?Ym-w():0;if(Ht=IS(gt,Ht),Ht!==null){ji=f,t.cancelPendingCommit=Ht(rg.bind(null,t,n,f,a,s,u,g,E,B,dt,gt,null,it,lt)),Aa(t,f,g,!nt);return}}rg(t,n,f,a,s,u,g,E,B)}function eS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!kn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Aa(t,n,a,s){n&=~lf,n&=~ur,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var f=31-Kt(u),g=1<<f;s[f]=-1,u&=~g}a!==0&&Us(t,a,n)}function Rl(){return(Ce&6)===0?(po(0),!1):!0}function df(){if(de!==null){if(Ue===0)var t=de.return;else t=de,Fi=tr=null,Cc(t),Ir=null,js=0,t=de;for(;t!==null;)Cm(t.alternate,t),t=t.return;de=null}}function jr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,yS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ji=0,df(),Ie=t,de=a=Pi(t.current,null),me=n,Ue=0,Zn=null,Ma=!1,qr=Qt(t,n),of=!1,Yr=jn=lf=ur=Ea=je=0,Fn=fo=null,uf=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var u=31-Kt(s),f=1<<u;n|=t[u],s&=~f}return Zi=n,Zo(),a}function Jm(t,n){ae=null,O.H=io,n===Fr||n===nl?(n=pp(),Ue=3):n===gc?(n=pp(),Ue=4):Ue=n===kc?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Zn=n,de===null&&(je=1,gl(t,ei(n,t.current)))}function $m(){var t=qn.current;return t===null?!0:(me&4194048)===me?ri===null:(me&62914560)===me||(me&536870912)!==0?t===ri:!1}function tg(){var t=O.H;return O.H=io,t===null?io:t}function eg(){var t=O.A;return O.A=$0,t}function Cl(){je=4,Ma||(me&4194048)!==me&&qn.current!==null||(qr=!0),(Ea&134217727)===0&&(ur&134217727)===0||Ie===null||Aa(Ie,me,jn,!1)}function pf(t,n,a){var s=Ce;Ce|=2;var u=tg(),f=eg();(Ie!==t||me!==n)&&(Al=null,jr(t,n)),n=!1;var g=je;t:do try{if(Ue!==0&&de!==null){var E=de,B=Zn;switch(Ue){case 8:df(),g=6;break t;case 3:case 2:case 9:case 6:qn.current===null&&(n=!0);var nt=Ue;if(Ue=0,Zn=null,Kr(t,E,B,nt),a&&qr){g=0;break t}break;default:nt=Ue,Ue=0,Zn=null,Kr(t,E,B,nt)}}nS(),g=je;break}catch(dt){Jm(t,dt)}while(!0);return n&&t.shellSuspendCounter++,Fi=tr=null,Ce=s,O.H=u,O.A=f,de===null&&(Ie=null,me=0,Zo()),g}function nS(){for(;de!==null;)ng(de)}function iS(t,n){var a=Ce;Ce|=2;var s=tg(),u=eg();Ie!==t||me!==n?(Al=null,bl=w()+500,jr(t,n)):qr=Qt(t,n);t:do try{if(Ue!==0&&de!==null){n=de;var f=Zn;e:switch(Ue){case 1:Ue=0,Zn=null,Kr(t,n,f,1);break;case 2:case 9:if(hp(f)){Ue=0,Zn=null,ig(n);break}n=function(){Ue!==2&&Ue!==9||Ie!==t||(Ue=7),wi(t)},f.then(n,n);break t;case 3:Ue=7;break t;case 4:Ue=5;break t;case 7:hp(f)?(Ue=0,Zn=null,ig(n)):(Ue=0,Zn=null,Kr(t,n,f,7));break;case 5:var g=null;switch(de.tag){case 26:g=de.memoizedState;case 5:case 27:var E=de;if(g?Vg(g):E.stateNode.complete){Ue=0,Zn=null;var B=E.sibling;if(B!==null)de=B;else{var nt=E.return;nt!==null?(de=nt,wl(nt)):de=null}break e}}Ue=0,Zn=null,Kr(t,n,f,5);break;case 6:Ue=0,Zn=null,Kr(t,n,f,6);break;case 8:df(),je=6;break t;default:throw Error(r(462))}}aS();break}catch(dt){Jm(t,dt)}while(!0);return Fi=tr=null,O.H=s,O.A=u,Ce=a,de!==null?0:(Ie=null,me=0,Zo(),je)}function aS(){for(;de!==null&&!T();)ng(de)}function ng(t){var n=Am(t.alternate,t,Zi);t.memoizedProps=t.pendingProps,n===null?wl(t):de=n}function ig(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=xm(a,n,n.pendingProps,n.type,void 0,me);break;case 11:n=xm(a,n,n.pendingProps,n.type.render,n.ref,me);break;case 5:Cc(n);default:Cm(a,n),n=de=ep(n,Zi),n=Am(a,n,Zi)}t.memoizedProps=t.pendingProps,n===null?wl(t):de=n}function Kr(t,n,a,s){Fi=tr=null,Cc(n),Ir=null,js=0;var u=n.return;try{if(q0(t,u,n,a,me)){je=1,gl(t,ei(a,t.current)),de=null;return}}catch(f){if(u!==null)throw de=u,f;je=1,gl(t,ei(a,t.current)),de=null;return}n.flags&32768?(Se||s===1?t=!0:qr||(me&536870912)!==0?t=!1:(Ma=t=!0,(s===2||s===9||s===3||s===6)&&(s=qn.current,s!==null&&s.tag===13&&(s.flags|=16384))),ag(n,t)):wl(n)}function wl(t){var n=t;do{if((n.flags&32768)!==0){ag(n,Ma);return}t=n.return;var a=j0(n.alternate,n,Zi);if(a!==null){de=a;return}if(n=n.sibling,n!==null){de=n;return}de=n=t}while(n!==null);je===0&&(je=5)}function ag(t,n){do{var a=K0(t.alternate,t);if(a!==null){a.flags&=32767,de=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){de=t;return}de=t=a}while(t!==null);je=6,de=null}function rg(t,n,a,s,u,f,g,E,B){t.cancelPendingCommit=null;do Dl();while(ln!==0);if((Ce&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=ec,hi(t,a,f,g,E,B),t===Ie&&(de=Ie=null,me=0),Zr=n,ba=t,ji=a,cf=f,ff=u,Zm=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,lS(Et,function(){return cg(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=O.T,O.T=null,u=Q.p,Q.p=2,g=Ce,Ce|=4;try{Q0(t,n,a)}finally{Ce=g,Q.p=u,O.T=s}}ln=1,sg(),og(),lg()}}function sg(){if(ln===1){ln=0;var t=ba,n=Zr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var s=Q.p;Q.p=2;var u=Ce;Ce|=4;try{Hm(n,t);var f=Af,g=qd(t.containerInfo),E=f.focusedElem,B=f.selectionRange;if(g!==E&&E&&E.ownerDocument&&Wd(E.ownerDocument.documentElement,E)){if(B!==null&&Ku(E)){var nt=B.start,dt=B.end;if(dt===void 0&&(dt=nt),"selectionStart"in E)E.selectionStart=nt,E.selectionEnd=Math.min(dt,E.value.length);else{var gt=E.ownerDocument||document,it=gt&&gt.defaultView||window;if(it.getSelection){var lt=it.getSelection(),Ht=E.textContent.length,jt=Math.min(B.start,Ht),Be=B.end===void 0?jt:Math.min(B.end,Ht);!lt.extend&&jt>Be&&(g=Be,Be=jt,jt=g);var Z=kd(E,jt),G=kd(E,Be);if(Z&&G&&(lt.rangeCount!==1||lt.anchorNode!==Z.node||lt.anchorOffset!==Z.offset||lt.focusNode!==G.node||lt.focusOffset!==G.offset)){var et=gt.createRange();et.setStart(Z.node,Z.offset),lt.removeAllRanges(),jt>Be?(lt.addRange(et),lt.extend(G.node,G.offset)):(et.setEnd(G.node,G.offset),lt.addRange(et))}}}}for(gt=[],lt=E;lt=lt.parentNode;)lt.nodeType===1&&gt.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<gt.length;E++){var mt=gt[E];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}Vl=!!bf,Af=bf=null}finally{Ce=u,Q.p=s,O.T=a}}t.current=n,ln=2}}function og(){if(ln===2){ln=0;var t=ba,n=Zr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var s=Q.p;Q.p=2;var u=Ce;Ce|=4;try{zm(t,n.alternate,n)}finally{Ce=u,Q.p=s,O.T=a}}ln=3}}function lg(){if(ln===4||ln===3){ln=0,Y();var t=ba,n=Zr,a=ji,s=Zm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?ln=5:(ln=0,Zr=ba=null,ug(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ta=null),Er(a),n=n.stateNode,kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(Wt,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=O.T,u=Q.p,Q.p=2,O.T=null;try{for(var f=t.onRecoverableError,g=0;g<s.length;g++){var E=s[g];f(E.value,{componentStack:E.stack})}}finally{O.T=n,Q.p=u}}(ji&3)!==0&&Dl(),wi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===hf?ho++:(ho=0,hf=t):ho=0,po(0)}}function ug(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Ys(n)))}function Dl(){return sg(),og(),lg(),cg()}function cg(){if(ln!==5)return!1;var t=ba,n=cf;cf=0;var a=Er(ji),s=O.T,u=Q.p;try{Q.p=32>a?32:a,O.T=null,a=ff,ff=null;var f=ba,g=ji;if(ln=0,Zr=ba=null,ji=0,(Ce&6)!==0)throw Error(r(331));var E=Ce;if(Ce|=4,Wm(f.current),Vm(f,f.current,g,a),Ce=E,po(0,!1),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(Wt,f)}catch{}return!0}finally{Q.p=u,O.T=s,ug(t,n)}}function fg(t,n,a){n=ei(a,n),n=Xc(t.stateNode,n,2),t=va(t,n,2),t!==null&&(mn(t,2),wi(t))}function Le(t,n,a){if(t.tag===3)fg(t,t,a);else for(;n!==null;){if(n.tag===3){fg(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ta===null||!Ta.has(s))){t=ei(a,t),a=hm(2),s=va(n,a,2),s!==null&&(dm(a,s,n,t),mn(s,2),wi(s));break}}n=n.return}}function mf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new tS;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(of=!0,u.add(a),t=rS.bind(null,t,n,a),n.then(t,t))}function rS(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ie===t&&(me&a)===a&&(je===4||je===3&&(me&62914560)===me&&300>w()-Tl?(Ce&2)===0&&jr(t,0):lf|=a,Yr===me&&(Yr=0)),wi(t)}function hg(t,n){n===0&&(n=sn()),t=Qa(t,n),t!==null&&(mn(t,n),wi(t))}function sS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),hg(t,a)}function oS(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),hg(t,a)}function lS(t,n){return Xt(t,n)}var Ul=null,Qr=null,gf=!1,Ll=!1,_f=!1,Ra=0;function wi(t){t!==Qr&&t.next===null&&(Qr===null?Ul=Qr=t:Qr=Qr.next=t),Ll=!0,gf||(gf=!0,cS())}function po(t,n){if(!_f&&Ll){_f=!0;do for(var a=!1,s=Ul;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var g=s.suspendedLanes,E=s.pingedLanes;f=(1<<31-Kt(42|t)+1)-1,f&=u&~(g&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,gg(s,f))}else f=me,f=Ut(s,s===Ie?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Qt(s,f)||(a=!0,gg(s,f));s=s.next}while(a);_f=!1}}function uS(){dg()}function dg(){Ll=gf=!1;var t=0;Ra!==0&&xS()&&(t=Ra);for(var n=w(),a=null,s=Ul;s!==null;){var u=s.next,f=pg(s,n);f===0?(s.next=null,a===null?Ul=u:a.next=u,u===null&&(Qr=a)):(a=s,(t!==0||(f&3)!==0)&&(Ll=!0)),s=u}ln!==0&&ln!==5||po(t),Ra!==0&&(Ra=0)}function pg(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var g=31-Kt(f),E=1<<g,B=u[g];B===-1?((E&a)===0||(E&s)!==0)&&(u[g]=ke(E,n)):B<=n&&(t.expiredLanes|=E),f&=~E}if(n=Ie,a=me,a=Ut(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Ue===2||Ue===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&L(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Qt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&L(s),Er(a)){case 2:case 8:a=Rt;break;case 32:a=Et;break;case 268435456:a=ue;break;default:a=Et}return s=mg.bind(null,t),a=Xt(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&L(s),t.callbackPriority=2,t.callbackNode=null,2}function mg(t,n){if(ln!==0&&ln!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Dl()&&t.callbackNode!==a)return null;var s=me;return s=Ut(t,t===Ie?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(Km(t,s,n),pg(t,w()),t.callbackNode!=null&&t.callbackNode===a?mg.bind(null,t):null)}function gg(t,n){if(Dl())return null;Km(t,n,!0)}function cS(){MS(function(){(Ce&6)!==0?Xt(tt,uS):dg()})}function vf(){if(Ra===0){var t=Pr;t===0&&(t=wt,wt<<=1,(wt&261888)===0&&(wt=256)),Ra=t}return Ra}function _g(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ho(""+t)}function vg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function fS(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=_g((u[gn]||null).action),g=s.submitter;g&&(n=(n=g[gn]||null)?_g(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var E=new ko("action","action",null,s,u);t.push({event:E,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ra!==0){var B=g?vg(u,g):new FormData(u);Bc(a,{pending:!0,data:B,method:u.method,action:f},null,B)}}else typeof f=="function"&&(E.preventDefault(),B=g?vg(u,g):new FormData(u),Bc(a,{pending:!0,data:B,method:u.method,action:f},f,B))},currentTarget:u}]})}}for(var Sf=0;Sf<tc.length;Sf++){var xf=tc[Sf],hS=xf.toLowerCase(),dS=xf[0].toUpperCase()+xf.slice(1);mi(hS,"on"+dS)}mi(jd,"onAnimationEnd"),mi(Kd,"onAnimationIteration"),mi(Qd,"onAnimationStart"),mi("dblclick","onDoubleClick"),mi("focusin","onFocus"),mi("focusout","onBlur"),mi(w0,"onTransitionRun"),mi(D0,"onTransitionStart"),mi(U0,"onTransitionCancel"),mi(Jd,"onTransitionEnd"),Bt("onMouseEnter",["mouseout","mouseover"]),Bt("onMouseLeave",["mouseout","mouseover"]),Bt("onPointerEnter",["pointerout","pointerover"]),Bt("onPointerLeave",["pointerout","pointerover"]),Ot("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ot("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ot("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ot("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ot("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ot("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mo));function Sg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var g=s.length-1;0<=g;g--){var E=s[g],B=E.instance,nt=E.currentTarget;if(E=E.listener,B!==f&&u.isPropagationStopped())break t;f=E,u.currentTarget=nt;try{f(u)}catch(dt){Yo(dt)}u.currentTarget=null,f=B}else for(g=0;g<s.length;g++){if(E=s[g],B=E.instance,nt=E.currentTarget,E=E.listener,B!==f&&u.isPropagationStopped())break t;f=E,u.currentTarget=nt;try{f(u)}catch(dt){Yo(dt)}u.currentTarget=null,f=B}}}}function pe(t,n){var a=n[Os];a===void 0&&(a=n[Os]=new Set);var s=t+"__bubble";a.has(s)||(xg(n,t,2,!1),a.add(s))}function yf(t,n,a){var s=0;n&&(s|=4),xg(a,t,s,n)}var Nl="_reactListening"+Math.random().toString(36).slice(2);function Mf(t){if(!t[Nl]){t[Nl]=!0,At.forEach(function(a){a!=="selectionchange"&&(pS.has(a)||yf(a,!1,t),yf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Nl]||(n[Nl]=!0,yf("selectionchange",!1,n))}}function xg(t,n,a,s){switch(jg(n)){case 2:var u=VS;break;case 8:u=XS;break;default:u=Bf}a=u.bind(null,n,a,t),u=void 0,!Gu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Ef(t,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var g=s.tag;if(g===3||g===4){var E=s.stateNode.containerInfo;if(E===u)break;if(g===4)for(g=s.return;g!==null;){var B=g.tag;if((B===3||B===4)&&g.stateNode.containerInfo===u)return;g=g.return}for(;E!==null;){if(g=b(E),g===null)return;if(B=g.tag,B===5||B===6||B===26||B===27){s=f=g;continue t}E=E.parentNode}}s=s.return}bd(function(){var nt=f,dt=Iu(a),gt=[];t:{var it=$d.get(t);if(it!==void 0){var lt=ko,Ht=t;switch(t){case"keypress":if(Vo(a)===0)break t;case"keydown":case"keyup":lt=o0;break;case"focusin":Ht="focus",lt=Wu;break;case"focusout":Ht="blur",lt=Wu;break;case"beforeblur":case"afterblur":lt=Wu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=Cd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=jv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=c0;break;case jd:case Kd:case Qd:lt=Jv;break;case Jd:lt=h0;break;case"scroll":case"scrollend":lt=Yv;break;case"wheel":lt=p0;break;case"copy":case"cut":case"paste":lt=t0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=Dd;break;case"toggle":case"beforetoggle":lt=g0}var jt=(n&4)!==0,Be=!jt&&(t==="scroll"||t==="scrollend"),Z=jt?it!==null?it+"Capture":null:it;jt=[];for(var G=nt,et;G!==null;){var mt=G;if(et=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||et===null||Z===null||(mt=Ps(G,Z),mt!=null&&jt.push(go(G,mt,et))),Be)break;G=G.return}0<jt.length&&(it=new lt(it,Ht,null,a,dt),gt.push({event:it,listeners:jt}))}}if((n&7)===0){t:{if(it=t==="mouseover"||t==="pointerover",lt=t==="mouseout"||t==="pointerout",it&&a!==Fu&&(Ht=a.relatedTarget||a.fromElement)&&(b(Ht)||Ht[Ni]))break t;if((lt||it)&&(it=dt.window===dt?dt:(it=dt.ownerDocument)?it.defaultView||it.parentWindow:window,lt?(Ht=a.relatedTarget||a.toElement,lt=nt,Ht=Ht?b(Ht):null,Ht!==null&&(Be=c(Ht),jt=Ht.tag,Ht!==Be||jt!==5&&jt!==27&&jt!==6)&&(Ht=null)):(lt=null,Ht=nt),lt!==Ht)){if(jt=Cd,mt="onMouseLeave",Z="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(jt=Dd,mt="onPointerLeave",Z="onPointerEnter",G="pointer"),Be=lt==null?it:rt(lt),et=Ht==null?it:rt(Ht),it=new jt(mt,G+"leave",lt,a,dt),it.target=Be,it.relatedTarget=et,mt=null,b(dt)===nt&&(jt=new jt(Z,G+"enter",Ht,a,dt),jt.target=et,jt.relatedTarget=Be,mt=jt),Be=mt,lt&&Ht)e:{for(jt=mS,Z=lt,G=Ht,et=0,mt=Z;mt;mt=jt(mt))et++;mt=0;for(var Yt=G;Yt;Yt=jt(Yt))mt++;for(;0<et-mt;)Z=jt(Z),et--;for(;0<mt-et;)G=jt(G),mt--;for(;et--;){if(Z===G||G!==null&&Z===G.alternate){jt=Z;break e}Z=jt(Z),G=jt(G)}jt=null}else jt=null;lt!==null&&yg(gt,it,lt,jt,!1),Ht!==null&&Be!==null&&yg(gt,Be,Ht,jt,!0)}}t:{if(it=nt?rt(nt):window,lt=it.nodeName&&it.nodeName.toLowerCase(),lt==="select"||lt==="input"&&it.type==="file")var be=Fd;else if(Pd(it))if(Id)be=A0;else{be=T0;var Vt=E0}else lt=it.nodeName,!lt||lt.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?nt&&Bu(nt.elementType)&&(be=Fd):be=b0;if(be&&(be=be(t,nt))){Bd(gt,be,a,dt);break t}Vt&&Vt(t,it,nt),t==="focusout"&&nt&&it.type==="number"&&nt.memoizedProps.value!=null&&En(it,"number",it.value)}switch(Vt=nt?rt(nt):window,t){case"focusin":(Pd(Vt)||Vt.contentEditable==="true")&&(Cr=Vt,Qu=nt,ks=null);break;case"focusout":ks=Qu=Cr=null;break;case"mousedown":Ju=!0;break;case"contextmenu":case"mouseup":case"dragend":Ju=!1,Yd(gt,a,dt);break;case"selectionchange":if(C0)break;case"keydown":case"keyup":Yd(gt,a,dt)}var se;if(Yu)t:{switch(t){case"compositionstart":var ge="onCompositionStart";break t;case"compositionend":ge="onCompositionEnd";break t;case"compositionupdate":ge="onCompositionUpdate";break t}ge=void 0}else Rr?Od(t,a)&&(ge="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ge="onCompositionStart");ge&&(Ud&&a.locale!=="ko"&&(Rr||ge!=="onCompositionStart"?ge==="onCompositionEnd"&&Rr&&(se=Ad()):(fa=dt,Vu="value"in fa?fa.value:fa.textContent,Rr=!0)),Vt=Ol(nt,ge),0<Vt.length&&(ge=new wd(ge,t,null,a,dt),gt.push({event:ge,listeners:Vt}),se?ge.data=se:(se=zd(a),se!==null&&(ge.data=se)))),(se=v0?S0(t,a):x0(t,a))&&(ge=Ol(nt,"onBeforeInput"),0<ge.length&&(Vt=new wd("onBeforeInput","beforeinput",null,a,dt),gt.push({event:Vt,listeners:ge}),Vt.data=se)),fS(gt,t,nt,a,dt)}Sg(gt,n)})}function go(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Ol(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Ps(t,a),u!=null&&s.unshift(go(t,u,f)),u=Ps(t,n),u!=null&&s.push(go(t,u,f))),t.tag===3)return s;t=t.return}return[]}function mS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function yg(t,n,a,s,u){for(var f=n._reactName,g=[];a!==null&&a!==s;){var E=a,B=E.alternate,nt=E.stateNode;if(E=E.tag,B!==null&&B===s)break;E!==5&&E!==26&&E!==27||nt===null||(B=nt,u?(nt=Ps(a,f),nt!=null&&g.unshift(go(a,nt,B))):u||(nt=Ps(a,f),nt!=null&&g.push(go(a,nt,B)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var gS=/\r\n?/g,_S=/\u0000|\uFFFD/g;function Mg(t){return(typeof t=="string"?t:""+t).replace(gS,`
`).replace(_S,"")}function Eg(t,n){return n=Mg(n),Mg(t)===n}function Pe(t,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Nn(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Nn(t,""+s);break;case"className":Ge(t,"class",s);break;case"tabIndex":Ge(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Ge(t,a,s);break;case"style":Ed(t,s,f);break;case"data":if(n!=="object"){Ge(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Ho(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Pe(t,n,"name",u.name,u,null),Pe(t,n,"formEncType",u.formEncType,u,null),Pe(t,n,"formMethod",u.formMethod,u,null),Pe(t,n,"formTarget",u.formTarget,u,null)):(Pe(t,n,"encType",u.encType,u,null),Pe(t,n,"method",u.method,u,null),Pe(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Ho(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Oi);break;case"onScroll":s!=null&&pe("scroll",t);break;case"onScrollEnd":s!=null&&pe("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Ho(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":pe("beforetoggle",t),pe("toggle",t),ve(t,"popover",s);break;case"xlinkActuate":Te(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Te(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Te(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Te(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Te(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Te(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Te(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Te(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Te(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":ve(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Wv.get(a)||a,ve(t,a,s))}}function Tf(t,n,a,s,u,f){switch(a){case"style":Ed(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?Nn(t,s):(typeof s=="number"||typeof s=="bigint")&&Nn(t,""+s);break;case"onScroll":s!=null&&pe("scroll",t);break;case"onScrollEnd":s!=null&&pe("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Oi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Lt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[gn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,u);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):ve(t,a,s)}}}function yn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",t),pe("load",t);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Pe(t,n,f,g,a,null)}}u&&Pe(t,n,"srcSet",a.srcSet,a,null),s&&Pe(t,n,"src",a.src,a,null);return;case"input":pe("invalid",t);var E=f=g=u=null,B=null,nt=null;for(s in a)if(a.hasOwnProperty(s)){var dt=a[s];if(dt!=null)switch(s){case"name":u=dt;break;case"type":g=dt;break;case"checked":B=dt;break;case"defaultChecked":nt=dt;break;case"value":f=dt;break;case"defaultValue":E=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(r(137,n));break;default:Pe(t,n,s,dt,a,null)}}Cn(t,f,E,B,nt,g,u,!1);return;case"select":pe("invalid",t),s=g=f=null;for(u in a)if(a.hasOwnProperty(u)&&(E=a[u],E!=null))switch(u){case"value":f=E;break;case"defaultValue":g=E;break;case"multiple":s=E;default:Pe(t,n,u,E,a,null)}n=f,a=g,t.multiple=!!s,n!=null?Ye(t,!!s,n,!1):a!=null&&Ye(t,!!s,a,!0);return;case"textarea":pe("invalid",t),f=u=s=null;for(g in a)if(a.hasOwnProperty(g)&&(E=a[g],E!=null))switch(g){case"value":s=E;break;case"defaultValue":u=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(91));break;default:Pe(t,n,g,E,a,null)}Tr(t,s,u,f);return;case"option":for(B in a)a.hasOwnProperty(B)&&(s=a[B],s!=null)&&(B==="selected"?t.selected=s&&typeof s!="function"&&typeof s!="symbol":Pe(t,n,B,s,a,null));return;case"dialog":pe("beforetoggle",t),pe("toggle",t),pe("cancel",t),pe("close",t);break;case"iframe":case"object":pe("load",t);break;case"video":case"audio":for(s=0;s<mo.length;s++)pe(mo[s],t);break;case"image":pe("error",t),pe("load",t);break;case"details":pe("toggle",t);break;case"embed":case"source":case"link":pe("error",t),pe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in a)if(a.hasOwnProperty(nt)&&(s=a[nt],s!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Pe(t,n,nt,s,a,null)}return;default:if(Bu(n)){for(dt in a)a.hasOwnProperty(dt)&&(s=a[dt],s!==void 0&&Tf(t,n,dt,s,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(s=a[E],s!=null&&Pe(t,n,E,s,a,null))}function vS(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,g=null,E=null,B=null,nt=null,dt=null;for(lt in a){var gt=a[lt];if(a.hasOwnProperty(lt)&&gt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":B=gt;default:s.hasOwnProperty(lt)||Pe(t,n,lt,null,s,gt)}}for(var it in s){var lt=s[it];if(gt=a[it],s.hasOwnProperty(it)&&(lt!=null||gt!=null))switch(it){case"type":f=lt;break;case"name":u=lt;break;case"checked":nt=lt;break;case"defaultChecked":dt=lt;break;case"value":g=lt;break;case"defaultValue":E=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(r(137,n));break;default:lt!==gt&&Pe(t,n,it,lt,s,gt)}}Oe(t,g,E,B,nt,dt,f,u);return;case"select":lt=g=E=it=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":lt=B;default:s.hasOwnProperty(f)||Pe(t,n,f,null,s,B)}for(u in s)if(f=s[u],B=a[u],s.hasOwnProperty(u)&&(f!=null||B!=null))switch(u){case"value":it=f;break;case"defaultValue":E=f;break;case"multiple":g=f;default:f!==B&&Pe(t,n,u,f,s,B)}n=E,a=g,s=lt,it!=null?Ye(t,!!a,it,!1):!!s!=!!a&&(n!=null?Ye(t,!!a,n,!0):Ye(t,!!a,a?[]:"",!1));return;case"textarea":lt=it=null;for(E in a)if(u=a[E],a.hasOwnProperty(E)&&u!=null&&!s.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Pe(t,n,E,null,s,u)}for(g in s)if(u=s[g],f=a[g],s.hasOwnProperty(g)&&(u!=null||f!=null))switch(g){case"value":it=u;break;case"defaultValue":lt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Pe(t,n,g,u,s,f)}_n(t,it,lt);return;case"option":for(var Ht in a)it=a[Ht],a.hasOwnProperty(Ht)&&it!=null&&!s.hasOwnProperty(Ht)&&(Ht==="selected"?t.selected=!1:Pe(t,n,Ht,null,s,it));for(B in s)it=s[B],lt=a[B],s.hasOwnProperty(B)&&it!==lt&&(it!=null||lt!=null)&&(B==="selected"?t.selected=it&&typeof it!="function"&&typeof it!="symbol":Pe(t,n,B,it,s,lt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var jt in a)it=a[jt],a.hasOwnProperty(jt)&&it!=null&&!s.hasOwnProperty(jt)&&Pe(t,n,jt,null,s,it);for(nt in s)if(it=s[nt],lt=a[nt],s.hasOwnProperty(nt)&&it!==lt&&(it!=null||lt!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:Pe(t,n,nt,it,s,lt)}return;default:if(Bu(n)){for(var Be in a)it=a[Be],a.hasOwnProperty(Be)&&it!==void 0&&!s.hasOwnProperty(Be)&&Tf(t,n,Be,void 0,s,it);for(dt in s)it=s[dt],lt=a[dt],!s.hasOwnProperty(dt)||it===lt||it===void 0&&lt===void 0||Tf(t,n,dt,it,s,lt);return}}for(var Z in a)it=a[Z],a.hasOwnProperty(Z)&&it!=null&&!s.hasOwnProperty(Z)&&Pe(t,n,Z,null,s,it);for(gt in s)it=s[gt],lt=a[gt],!s.hasOwnProperty(gt)||it===lt||it==null&&lt==null||Pe(t,n,gt,it,s,lt)}function Tg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function SS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],f=u.transferSize,g=u.initiatorType,E=u.duration;if(f&&E&&Tg(g)){for(g=0,E=u.responseEnd,s+=1;s<a.length;s++){var B=a[s],nt=B.startTime;if(nt>E)break;var dt=B.transferSize,gt=B.initiatorType;dt&&Tg(gt)&&(B=B.responseEnd,g+=dt*(B<E?1:(E-nt)/(B-nt)))}if(--s,n+=8*(f+g)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var bf=null,Af=null;function zl(t){return t.nodeType===9?t:t.ownerDocument}function bg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ag(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Rf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Cf=null;function xS(){var t=window.event;return t&&t.type==="popstate"?t===Cf?!1:(Cf=t,!0):(Cf=null,!1)}var Rg=typeof setTimeout=="function"?setTimeout:void 0,yS=typeof clearTimeout=="function"?clearTimeout:void 0,Cg=typeof Promise=="function"?Promise:void 0,MS=typeof queueMicrotask=="function"?queueMicrotask:typeof Cg<"u"?function(t){return Cg.resolve(null).then(t).catch(ES)}:Rg;function ES(t){setTimeout(function(){throw t})}function Ca(t){return t==="head"}function wg(t,n){var a=n,s=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(u),es(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")_o(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,_o(a);for(var f=a.firstChild;f;){var g=f.nextSibling,E=f.nodeName;f[Ya]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&_o(t.ownerDocument.body);a=u}while(a);es(n)}function Dg(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function wf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":wf(a),zs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function TS(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Ya])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=si(t.nextSibling),t===null)break}return null}function bS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=si(t.nextSibling),t===null))return null;return t}function Ug(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=si(t.nextSibling),t===null))return null;return t}function Df(t){return t.data==="$?"||t.data==="$~"}function Uf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function AS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function si(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Lf=null;function Lg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return si(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Ng(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Og(t,n,a){switch(n=zl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function _o(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);zs(t)}var oi=new Map,zg=new Set;function Pl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ki=Q.d;Q.d={f:RS,r:CS,D:wS,C:DS,L:US,m:LS,X:OS,S:NS,M:zS};function RS(){var t=Ki.f(),n=Rl();return t||n}function CS(t){var n=W(t);n!==null&&n.tag===5&&n.type==="form"?Jp(n):Ki.r(t)}var Jr=typeof document>"u"?null:document;function Pg(t,n,a){var s=Jr;if(s&&typeof n=="string"&&n){var u=hn(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),zg.has(u)||(zg.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),yn(n,"link",t),X(n),s.head.appendChild(n)))}}function wS(t){Ki.D(t),Pg("dns-prefetch",t,null)}function DS(t,n){Ki.C(t,n),Pg("preconnect",t,n)}function US(t,n,a){Ki.L(t,n,a);var s=Jr;if(s&&t&&n){var u='link[rel="preload"][as="'+hn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+hn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+hn(a.imageSizes)+'"]')):u+='[href="'+hn(t)+'"]';var f=u;switch(n){case"style":f=$r(t);break;case"script":f=ts(t)}oi.has(f)||(t=S({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),oi.set(f,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(vo(f))||n==="script"&&s.querySelector(So(f))||(n=s.createElement("link"),yn(n,"link",t),X(n),s.head.appendChild(n)))}}function LS(t,n){Ki.m(t,n);var a=Jr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+hn(s)+'"][href="'+hn(t)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ts(t)}if(!oi.has(f)&&(t=S({rel:"modulepreload",href:t},n),oi.set(f,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(So(f)))return}s=a.createElement("link"),yn(s,"link",t),X(s),a.head.appendChild(s)}}}function NS(t,n,a){Ki.S(t,n,a);var s=Jr;if(s&&t){var u=st(s).hoistableStyles,f=$r(t);n=n||"default";var g=u.get(f);if(!g){var E={loading:0,preload:null};if(g=s.querySelector(vo(f)))E.loading=5;else{t=S({rel:"stylesheet",href:t,"data-precedence":n},a),(a=oi.get(f))&&Nf(t,a);var B=g=s.createElement("link");X(B),yn(B,"link",t),B._p=new Promise(function(nt,dt){B.onload=nt,B.onerror=dt}),B.addEventListener("load",function(){E.loading|=1}),B.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Bl(g,n,s)}g={type:"stylesheet",instance:g,count:1,state:E},u.set(f,g)}}}function OS(t,n){Ki.X(t,n);var a=Jr;if(a&&t){var s=st(a).hoistableScripts,u=ts(t),f=s.get(u);f||(f=a.querySelector(So(u)),f||(t=S({src:t,async:!0},n),(n=oi.get(u))&&Of(t,n),f=a.createElement("script"),X(f),yn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function zS(t,n){Ki.M(t,n);var a=Jr;if(a&&t){var s=st(a).hoistableScripts,u=ts(t),f=s.get(u);f||(f=a.querySelector(So(u)),f||(t=S({src:t,async:!0,type:"module"},n),(n=oi.get(u))&&Of(t,n),f=a.createElement("script"),X(f),yn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function Bg(t,n,a,s){var u=(u=Mt.current)?Pl(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=$r(a.href),a=st(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=$r(a.href);var f=st(u).hoistableStyles,g=f.get(t);if(g||(u=u.ownerDocument||u,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,g),(f=u.querySelector(vo(t)))&&!f._p&&(g.instance=f,g.state.loading=5),oi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},oi.set(t,a),f||PS(u,t,a,g.state))),n&&s===null)throw Error(r(528,""));return g}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ts(a),a=st(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function $r(t){return'href="'+hn(t)+'"'}function vo(t){return'link[rel="stylesheet"]['+t+"]"}function Fg(t){return S({},t,{"data-precedence":t.precedence,precedence:null})}function PS(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),yn(n,"link",a),X(n),t.head.appendChild(n))}function ts(t){return'[src="'+hn(t)+'"]'}function So(t){return"script[async]"+t}function Ig(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+hn(a.href)+'"]');if(s)return n.instance=s,X(s),s;var u=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),X(s),yn(s,"style",u),Bl(s,a.precedence,t),n.instance=s;case"stylesheet":u=$r(a.href);var f=t.querySelector(vo(u));if(f)return n.state.loading|=4,n.instance=f,X(f),f;s=Fg(a),(u=oi.get(u))&&Nf(s,u),f=(t.ownerDocument||t).createElement("link"),X(f);var g=f;return g._p=new Promise(function(E,B){g.onload=E,g.onerror=B}),yn(f,"link",s),n.state.loading|=4,Bl(f,a.precedence,t),n.instance=f;case"script":return f=ts(a.src),(u=t.querySelector(So(f)))?(n.instance=u,X(u),u):(s=a,(u=oi.get(f))&&(s=S({},a),Of(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),X(u),yn(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Bl(s,a.precedence,t));return n.instance}function Bl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,g=0;g<s.length;g++){var E=s[g];if(E.dataset.precedence===n)f=E;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Nf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Of(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Fl=null;function Hg(t,n,a){if(Fl===null){var s=new Map,u=Fl=new Map;u.set(a,s)}else u=Fl,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Ya]||f[qe]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=t+g;var E=s.get(g);E?E.push(f):s.set(g,[f])}}return s}function Gg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function BS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Vg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function FS(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=$r(s.href),f=n.querySelector(vo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Il.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,X(f);return}f=n.ownerDocument||n,s=Fg(s),(u=oi.get(u))&&Nf(s,u),f=f.createElement("link"),X(f);var g=f;g._p=new Promise(function(E,B){g.onload=E,g.onerror=B}),yn(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Il.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var zf=0;function IS(t,n){return t.stylesheets&&t.count===0&&Gl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&Gl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&zf===0&&(zf=62500*SS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Gl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>zf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function Il(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Gl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Hl=null;function Gl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Hl=new Map,n.forEach(HS,t),Hl=null,Il.call(t))}function HS(t,n){if(!(n.state.loading&4)){var a=Hl.get(t);if(a)var s=a.get(null);else{a=new Map,Hl.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var g=u[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),s=g)}s&&a.set(null,s)}u=n.instance,g=u.getAttribute("data-precedence"),f=a.get(g)||s,f===s&&a.set(null,u),a.set(g,u),this.count++,s=Il.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var xo={$$typeof:z,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function GS(t,n,a,s,u,f,g,E,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Me(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Me(0),this.hiddenUpdates=Me(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function Xg(t,n,a,s,u,f,g,E,B,nt,dt,gt){return t=new GS(t,n,a,g,B,nt,dt,gt,E),n=1,f===!0&&(n|=24),f=Wn(3,null,null,n),t.current=f,f.stateNode=t,n=dc(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},_c(f),t}function kg(t){return t?(t=Ur,t):Ur}function Wg(t,n,a,s,u,f){u=kg(u),s.context===null?s.context=u:s.pendingContext=u,s=_a(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=va(t,s,n),a!==null&&(In(a,t,n),Qs(a,t,n))}function qg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Pf(t,n){qg(t,n),(t=t.alternate)&&qg(t,n)}function Yg(t){if(t.tag===13||t.tag===31){var n=Qa(t,67108864);n!==null&&In(n,t,67108864),Pf(t,67108864)}}function Zg(t){if(t.tag===13||t.tag===31){var n=Kn();n=Wa(n);var a=Qa(t,n);a!==null&&In(a,t,n),Pf(t,n)}}var Vl=!0;function VS(t,n,a,s){var u=O.T;O.T=null;var f=Q.p;try{Q.p=2,Bf(t,n,a,s)}finally{Q.p=f,O.T=u}}function XS(t,n,a,s){var u=O.T;O.T=null;var f=Q.p;try{Q.p=8,Bf(t,n,a,s)}finally{Q.p=f,O.T=u}}function Bf(t,n,a,s){if(Vl){var u=Ff(s);if(u===null)Ef(t,n,s,Xl,a),Kg(t,s);else if(WS(u,t,n,a,s))s.stopPropagation();else if(Kg(t,s),n&4&&-1<kS.indexOf(t)){for(;u!==null;){var f=W(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=Dt(f.pendingLanes);if(g!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;g;){var B=1<<31-Kt(g);E.entanglements[1]|=B,g&=~B}wi(f),(Ce&6)===0&&(bl=w()+500,po(0))}}break;case 31:case 13:E=Qa(f,2),E!==null&&In(E,f,2),Rl(),Pf(f,2)}if(f=Ff(s),f===null&&Ef(t,n,s,Xl,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else Ef(t,n,s,null,a)}}function Ff(t){return t=Iu(t),If(t)}var Xl=null;function If(t){if(Xl=null,t=b(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Xl=t,null}function jg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($()){case tt:return 2;case Rt:return 8;case Et:case Ct:return 32;case ue:return 268435456;default:return 32}default:return 32}}var Hf=!1,wa=null,Da=null,Ua=null,yo=new Map,Mo=new Map,La=[],kS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Kg(t,n){switch(t){case"focusin":case"focusout":wa=null;break;case"dragenter":case"dragleave":Da=null;break;case"mouseover":case"mouseout":Ua=null;break;case"pointerover":case"pointerout":yo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mo.delete(n.pointerId)}}function Eo(t,n,a,s,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=W(n),n!==null&&Yg(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function WS(t,n,a,s,u){switch(n){case"focusin":return wa=Eo(wa,t,n,a,s,u),!0;case"dragenter":return Da=Eo(Da,t,n,a,s,u),!0;case"mouseover":return Ua=Eo(Ua,t,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return yo.set(f,Eo(yo.get(f)||null,t,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,Mo.set(f,Eo(Mo.get(f)||null,t,n,a,s,u)),!0}return!1}function Qg(t){var n=b(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,qa(t.priority,function(){Zg(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,qa(t.priority,function(){Zg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function kl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Ff(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Fu=s,a.target.dispatchEvent(s),Fu=null}else return n=W(a),n!==null&&Yg(n),t.blockedOn=a,!1;n.shift()}return!0}function Jg(t,n,a){kl(t)&&a.delete(n)}function qS(){Hf=!1,wa!==null&&kl(wa)&&(wa=null),Da!==null&&kl(Da)&&(Da=null),Ua!==null&&kl(Ua)&&(Ua=null),yo.forEach(Jg),Mo.forEach(Jg)}function Wl(t,n){t.blockedOn===n&&(t.blockedOn=null,Hf||(Hf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,qS)))}var ql=null;function $g(t){ql!==t&&(ql=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){ql===t&&(ql=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(If(s||a)===null)continue;break}var f=W(a);f!==null&&(t.splice(n,3),n-=3,Bc(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function es(t){function n(B){return Wl(B,t)}wa!==null&&Wl(wa,t),Da!==null&&Wl(Da,t),Ua!==null&&Wl(Ua,t),yo.forEach(n),Mo.forEach(n);for(var a=0;a<La.length;a++){var s=La[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<La.length&&(a=La[0],a.blockedOn===null);)Qg(a),a.blockedOn===null&&La.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],g=u[gn]||null;if(typeof f=="function")g||$g(a);else if(g){var E=null;if(f&&f.hasAttribute("formAction")){if(u=f,g=f[gn]||null)E=g.formAction;else if(If(u)!==null)continue}else E=g.action;typeof E=="function"?a[s+1]=E:(a.splice(s,3),s-=3),$g(a)}}}function t_(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return u=g})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Gf(t){this._internalRoot=t}Yl.prototype.render=Gf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Kn();Wg(a,s,t,n,null,null)},Yl.prototype.unmount=Gf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Wg(t.current,2,null,t,null,null),Rl(),n[Ni]=null}};function Yl(t){this._internalRoot=t}Yl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ns();t={blockedOn:null,target:t,priority:n};for(var a=0;a<La.length&&n!==0&&n<La[a].priority;a++);La.splice(a,0,t),a===0&&Qg(t)}};var e_=e.version;if(e_!=="19.2.4")throw Error(r(527,e_,"19.2.4"));Q.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var YS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zl.isDisabled&&Zl.supportsFiber)try{Wt=Zl.inject(YS),kt=Zl}catch{}}return bo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=lm,f=um,g=cm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=Xg(t,1,!1,null,null,a,s,null,u,f,g,t_),t[Ni]=n.current,Mf(t),new Gf(n)},bo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",f=lm,g=um,E=cm,B=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=Xg(t,1,!0,n,a??null,s,u,B,f,g,E,t_),n.context=kg(null),a=n.current,s=Kn(),s=Wa(s),u=_a(s),u.callback=null,va(a,u,s),a=s,n.current.lanes=a,mn(n,a),wi(n),t[Ni]=n.current,Mf(t),new Yl(n)},bo.version="19.2.4",bo}var f_;function ix(){if(f_)return kf.exports;f_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),kf.exports=nx(),kf.exports}var ax=ix();const rx=()=>Mn.jsxs("nav",{className:"mursee-nav",children:[Mn.jsx("div",{className:"nav-logo-text",children:"DW"}),Mn.jsxs("div",{className:"nav-center",children:[Mn.jsx("a",{className:"nav-link",children:"DESIGN"}),Mn.jsx("a",{className:"nav-link",children:"BUILD"}),Mn.jsx("a",{className:"nav-link",children:"PMC"})]}),Mn.jsx("div",{children:Mn.jsx("button",{className:"nav-btn",children:"Work With Us"})})]});const pd="172",sx=0,h_=1,ox=2,hv=1,lx=2,na=3,Xa=0,Vn=1,ia=2,Ga=0,vs=1,bh=2,d_=3,p_=4,ux=5,vr=100,cx=101,fx=102,hx=103,dx=104,px=200,mx=201,gx=202,_x=203,Ah=204,Rh=205,vx=206,Sx=207,xx=208,yx=209,Mx=210,Ex=211,Tx=212,bx=213,Ax=214,Ch=0,wh=1,Dh=2,ys=3,Uh=4,Lh=5,Nh=6,Oh=7,dv=0,Rx=1,Cx=2,Va=0,wx=1,Dx=2,Ux=3,Lx=4,Nx=5,Ox=6,zx=7,pv=300,Ms=301,Es=302,zh=303,Ph=304,Lu=306,Bh=1e3,Ei=1001,Fh=1002,$n=1003,Px=1004,jl=1005,Gn=1006,Zf=1007,xr=1008,oa=1009,mv=1010,gv=1011,No=1012,md=1013,Mr=1014,Li=1015,Cs=1016,gd=1017,_d=1018,Ts=1020,_v=35902,vv=1021,Sv=1022,ci=1023,xv=1024,yv=1025,Ss=1026,bs=1027,Mv=1028,vd=1029,Ev=1030,Sd=1031,xd=1033,xu=33776,yu=33777,Mu=33778,Eu=33779,Ih=35840,Hh=35841,Gh=35842,Vh=35843,Xh=36196,kh=37492,Wh=37496,qh=37808,Yh=37809,Zh=37810,jh=37811,Kh=37812,Qh=37813,Jh=37814,$h=37815,td=37816,ed=37817,nd=37818,id=37819,ad=37820,rd=37821,Tu=36492,sd=36494,od=36495,Tv=36283,ld=36284,ud=36285,cd=36286,Bx=3200,Fx=3201,Ix=0,Hx=1,Ha="",ui="srgb",As="srgb-linear",Au="linear",Fe="srgb",ns=7680,m_=519,Gx=512,Vx=513,Xx=514,bv=515,kx=516,Wx=517,qx=518,Yx=519,g_=35044,__="300 es",aa=2e3,Ru=2001;class ws{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jf=Math.PI/180,fd=180/Math.PI;function Oo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(bn[o&255]+bn[o>>8&255]+bn[o>>16&255]+bn[o>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[i&63|128]+bn[i>>8&255]+"-"+bn[i>>16&255]+bn[i>>24&255]+bn[r&255]+bn[r>>8&255]+bn[r>>16&255]+bn[r>>24&255]).toLowerCase()}function xe(o,e,i){return Math.max(e,Math.min(i,o))}function Zx(o,e){return(o%e+e)%e}function Kf(o,e,i){return(1-i)*o+i*e}function Ao(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Hn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class re{constructor(e=0,i=0){re.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=xe(this.x,e.x,i.x),this.y=xe(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=xe(this.x,e,i),this.y=xe(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(xe(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*r-h*l+e.x,this.y=c*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class oe{constructor(e,i,r,l,c,h,d,m,p){oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p)}set(e,i,r,l,c,h,d,m,p){const v=this.elements;return v[0]=e,v[1]=l,v[2]=d,v[3]=i,v[4]=c,v[5]=m,v[6]=r,v[7]=h,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],v=r[4],S=r[7],x=r[2],M=r[5],A=r[8],C=l[0],y=l[3],_=l[6],I=l[1],z=l[4],U=l[7],J=l[2],V=l[5],P=l[8];return c[0]=h*C+d*I+m*J,c[3]=h*y+d*z+m*V,c[6]=h*_+d*U+m*P,c[1]=p*C+v*I+S*J,c[4]=p*y+v*z+S*V,c[7]=p*_+v*U+S*P,c[2]=x*C+M*I+A*J,c[5]=x*y+M*z+A*V,c[8]=x*_+M*U+A*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],v=e[8];return i*h*v-i*d*p-r*c*v+r*d*m+l*c*p-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],v=e[8],S=v*h-d*p,x=d*m-v*c,M=p*c-h*m,A=i*S+r*x+l*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=S*C,e[1]=(l*p-v*r)*C,e[2]=(d*r-l*h)*C,e[3]=x*C,e[4]=(v*i-l*m)*C,e[5]=(l*c-d*i)*C,e[6]=M*C,e[7]=(r*m-p*i)*C,e[8]=(h*i-r*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Qf.makeScale(e,i)),this}rotate(e){return this.premultiply(Qf.makeRotation(-e)),this}translate(e,i){return this.premultiply(Qf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qf=new oe;function Av(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Cu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function jx(){const o=Cu("canvas");return o.style.display="block",o}const v_={};function gs(o){o in v_||(v_[o]=!0,console.warn(o))}function Kx(o,e,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}function Qx(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Jx(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const S_=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),x_=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $x(){const o={enabled:!0,workingColorSpace:As,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Fe&&(l.r=ra(l.r),l.g=ra(l.g),l.b=ra(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Fe&&(l.r=xs(l.r),l.g=xs(l.g),l.b=xs(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ha?Au:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[As]:{primaries:e,whitePoint:r,transfer:Au,toXYZ:S_,fromXYZ:x_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ui},outputColorSpaceConfig:{drawingBufferColorSpace:ui}},[ui]:{primaries:e,whitePoint:r,transfer:Fe,toXYZ:S_,fromXYZ:x_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ui}}}),o}const Re=$x();function ra(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function xs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let is;class ty{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{is===void 0&&(is=Cu("canvas")),is.width=e.width,is.height=e.height;const r=is.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=is}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Cu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=ra(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ra(i[r]/255)*255):i[r]=ra(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ey=0;class Rv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ey++}),this.uuid=Oo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Jf(l[h].image)):c.push(Jf(l[h]))}else c=Jf(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function Jf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?ty.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ny=0;class Un extends ws{constructor(e=Un.DEFAULT_IMAGE,i=Un.DEFAULT_MAPPING,r=Ei,l=Ei,c=Gn,h=xr,d=ci,m=oa,p=Un.DEFAULT_ANISOTROPY,v=Ha){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ny++}),this.uuid=Oo(),this.name="",this.source=new Rv(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bh:e.x=e.x-Math.floor(e.x);break;case Ei:e.x=e.x<0?0:1;break;case Fh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bh:e.y=e.y-Math.floor(e.y);break;case Ei:e.y=e.y<0?0:1;break;case Fh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=pv;Un.DEFAULT_ANISOTROPY=1;class Ke{constructor(e=0,i=0,r=0,l=1){Ke.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],v=m[4],S=m[8],x=m[1],M=m[5],A=m[9],C=m[2],y=m[6],_=m[10];if(Math.abs(v-x)<.01&&Math.abs(S-C)<.01&&Math.abs(A-y)<.01){if(Math.abs(v+x)<.1&&Math.abs(S+C)<.1&&Math.abs(A+y)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const z=(p+1)/2,U=(M+1)/2,J=(_+1)/2,V=(v+x)/4,P=(S+C)/4,K=(A+y)/4;return z>U&&z>J?z<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(z),l=V/r,c=P/r):U>J?U<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),r=V/l,c=K/l):J<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(J),r=P/c,l=K/c),this.set(r,l,c,i),this}let I=Math.sqrt((y-A)*(y-A)+(S-C)*(S-C)+(x-v)*(x-v));return Math.abs(I)<.001&&(I=1),this.x=(y-A)/I,this.y=(S-C)/I,this.z=(x-v)/I,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=xe(this.x,e.x,i.x),this.y=xe(this.y,e.y,i.y),this.z=xe(this.z,e.z,i.z),this.w=xe(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=xe(this.x,e,i),this.y=xe(this.y,e,i),this.z=xe(this.z,e,i),this.w=xe(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class iy extends ws{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new Ke(0,0,e,i),this.scissorTest=!1,this.viewport=new Ke(0,0,e,i);const l={width:e,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new Un(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,l=e.textures.length;r<l;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const i=Object.assign({},e.texture.image);return this.texture.source=new Rv(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ka extends iy{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Cv extends Un{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=$n,this.minFilter=$n,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ay extends Un{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=$n,this.minFilter=$n,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,h,d){let m=r[l+0],p=r[l+1],v=r[l+2],S=r[l+3];const x=c[h+0],M=c[h+1],A=c[h+2],C=c[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=v,e[i+3]=S;return}if(d===1){e[i+0]=x,e[i+1]=M,e[i+2]=A,e[i+3]=C;return}if(S!==C||m!==x||p!==M||v!==A){let y=1-d;const _=m*x+p*M+v*A+S*C,I=_>=0?1:-1,z=1-_*_;if(z>Number.EPSILON){const J=Math.sqrt(z),V=Math.atan2(J,_*I);y=Math.sin(y*V)/J,d=Math.sin(d*V)/J}const U=d*I;if(m=m*y+x*U,p=p*y+M*U,v=v*y+A*U,S=S*y+C*U,y===1-d){const J=1/Math.sqrt(m*m+p*p+v*v+S*S);m*=J,p*=J,v*=J,S*=J}}e[i]=m,e[i+1]=p,e[i+2]=v,e[i+3]=S}static multiplyQuaternionsFlat(e,i,r,l,c,h){const d=r[l],m=r[l+1],p=r[l+2],v=r[l+3],S=c[h],x=c[h+1],M=c[h+2],A=c[h+3];return e[i]=d*A+v*S+m*M-p*x,e[i+1]=m*A+v*x+p*S-d*M,e[i+2]=p*A+v*M+d*x-m*S,e[i+3]=v*A-d*S-m*x-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),v=d(l/2),S=d(c/2),x=m(r/2),M=m(l/2),A=m(c/2);switch(h){case"XYZ":this._x=x*v*S+p*M*A,this._y=p*M*S-x*v*A,this._z=p*v*A+x*M*S,this._w=p*v*S-x*M*A;break;case"YXZ":this._x=x*v*S+p*M*A,this._y=p*M*S-x*v*A,this._z=p*v*A-x*M*S,this._w=p*v*S+x*M*A;break;case"ZXY":this._x=x*v*S-p*M*A,this._y=p*M*S+x*v*A,this._z=p*v*A+x*M*S,this._w=p*v*S-x*M*A;break;case"ZYX":this._x=x*v*S-p*M*A,this._y=p*M*S+x*v*A,this._z=p*v*A-x*M*S,this._w=p*v*S+x*M*A;break;case"YZX":this._x=x*v*S+p*M*A,this._y=p*M*S+x*v*A,this._z=p*v*A-x*M*S,this._w=p*v*S-x*M*A;break;case"XZY":this._x=x*v*S-p*M*A,this._y=p*M*S-x*v*A,this._z=p*v*A+x*M*S,this._w=p*v*S+x*M*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],v=i[6],S=i[10],x=r+d+S;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(v-m)*M,this._y=(c-p)*M,this._z=(h-l)*M}else if(r>d&&r>S){const M=2*Math.sqrt(1+r-d-S);this._w=(v-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(c+p)/M}else if(d>S){const M=2*Math.sqrt(1+d-r-S);this._w=(c-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+S-r-d);this._w=(h-l)/M,this._x=(c+p)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xe(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,h=e._w,d=i._x,m=i._y,p=i._z,v=i._w;return this._x=r*v+h*d+l*p-c*m,this._y=l*v+h*m+c*d-r*p,this._z=c*v+h*p+r*m-l*d,this._w=h*v-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,c=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),v=Math.atan2(p,d),S=Math.sin((1-i)*v)/p,x=Math.sin(i*v)/p;return this._w=h*S+this._w*x,this._x=r*S+this._x*x,this._y=l*S+this._y*x,this._z=c*S+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ot{constructor(e=0,i=0,r=0){ot.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(y_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(y_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*r),v=2*(d*i-c*l),S=2*(c*r-h*i);return this.x=i+m*p+h*S-d*v,this.y=r+m*v+d*p-c*S,this.z=l+m*S+c*v-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=xe(this.x,e.x,i.x),this.y=xe(this.y,e.y,i.y),this.z=xe(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=xe(this.x,e,i),this.y=xe(this.y,e,i),this.z=xe(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return $f.copy(this).projectOnVector(e),this.sub($f)}reflect(e){return this.sub($f.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(xe(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $f=new ot,y_=new zo;class Po{constructor(e=new ot(1/0,1/0,1/0),i=new ot(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(vi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(vi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=vi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,vi):vi.fromBufferAttribute(c,h),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Kl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Kl.copy(r.boundingBox)),Kl.applyMatrix4(e.matrixWorld),this.union(Kl)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ro),Ql.subVectors(this.max,Ro),as.subVectors(e.a,Ro),rs.subVectors(e.b,Ro),ss.subVectors(e.c,Ro),Oa.subVectors(rs,as),za.subVectors(ss,rs),cr.subVectors(as,ss);let i=[0,-Oa.z,Oa.y,0,-za.z,za.y,0,-cr.z,cr.y,Oa.z,0,-Oa.x,za.z,0,-za.x,cr.z,0,-cr.x,-Oa.y,Oa.x,0,-za.y,za.x,0,-cr.y,cr.x,0];return!th(i,as,rs,ss,Ql)||(i=[1,0,0,0,1,0,0,0,1],!th(i,as,rs,ss,Ql))?!1:(Jl.crossVectors(Oa,za),i=[Jl.x,Jl.y,Jl.z],th(i,as,rs,ss,Ql))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qi=[new ot,new ot,new ot,new ot,new ot,new ot,new ot,new ot],vi=new ot,Kl=new Po,as=new ot,rs=new ot,ss=new ot,Oa=new ot,za=new ot,cr=new ot,Ro=new ot,Ql=new ot,Jl=new ot,fr=new ot;function th(o,e,i,r,l){for(let c=0,h=o.length-3;c<=h;c+=3){fr.fromArray(o,c);const d=l.x*Math.abs(fr.x)+l.y*Math.abs(fr.y)+l.z*Math.abs(fr.z),m=e.dot(fr),p=i.dot(fr),v=r.dot(fr);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>d)return!1}return!0}const ry=new Po,Co=new ot,eh=new ot;class Nu{constructor(e=new ot,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):ry.setFromPoints(e).getCenter(r);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Co.subVectors(e,this.center);const i=Co.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Co,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(eh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Co.copy(e.center).add(eh)),this.expandByPoint(Co.copy(e.center).sub(eh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ji=new ot,nh=new ot,$l=new ot,Pa=new ot,ih=new ot,tu=new ot,ah=new ot;class wv{constructor(e=new ot,i=new ot(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ji)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ji.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ji.copy(this.origin).addScaledVector(this.direction,i),Ji.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){nh.copy(e).add(i).multiplyScalar(.5),$l.copy(i).sub(e).normalize(),Pa.copy(this.origin).sub(nh);const c=e.distanceTo(i)*.5,h=-this.direction.dot($l),d=Pa.dot(this.direction),m=-Pa.dot($l),p=Pa.lengthSq(),v=Math.abs(1-h*h);let S,x,M,A;if(v>0)if(S=h*m-d,x=h*d-m,A=c*v,S>=0)if(x>=-A)if(x<=A){const C=1/v;S*=C,x*=C,M=S*(S+h*x+2*d)+x*(h*S+x+2*m)+p}else x=c,S=Math.max(0,-(h*x+d)),M=-S*S+x*(x+2*m)+p;else x=-c,S=Math.max(0,-(h*x+d)),M=-S*S+x*(x+2*m)+p;else x<=-A?(S=Math.max(0,-(-h*c+d)),x=S>0?-c:Math.min(Math.max(-c,-m),c),M=-S*S+x*(x+2*m)+p):x<=A?(S=0,x=Math.min(Math.max(-c,-m),c),M=x*(x+2*m)+p):(S=Math.max(0,-(h*c+d)),x=S>0?c:Math.min(Math.max(-c,-m),c),M=-S*S+x*(x+2*m)+p);else x=h>0?-c:c,S=Math.max(0,-(h*x+d)),M=-S*S+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(nh).addScaledVector($l,x),M}intersectSphere(e,i){Ji.subVectors(e.center,this.origin);const r=Ji.dot(this.direction),l=Ji.dot(Ji)-r*r,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,h,d,m;const p=1/this.direction.x,v=1/this.direction.y,S=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),v>=0?(c=(e.min.y-x.y)*v,h=(e.max.y-x.y)*v):(c=(e.max.y-x.y)*v,h=(e.min.y-x.y)*v),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),S>=0?(d=(e.min.z-x.z)*S,m=(e.max.z-x.z)*S):(d=(e.max.z-x.z)*S,m=(e.min.z-x.z)*S),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Ji)!==null}intersectTriangle(e,i,r,l,c){ih.subVectors(i,e),tu.subVectors(r,e),ah.crossVectors(ih,tu);let h=this.direction.dot(ah),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Pa.subVectors(this.origin,e);const m=d*this.direction.dot(tu.crossVectors(Pa,tu));if(m<0)return null;const p=d*this.direction.dot(ih.cross(Pa));if(p<0||m+p>h)return null;const v=-d*Pa.dot(ah);return v<0?null:this.at(v/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(e,i,r,l,c,h,d,m,p,v,S,x,M,A,C,y){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p,v,S,x,M,A,C,y)}set(e,i,r,l,c,h,d,m,p,v,S,x,M,A,C,y){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=c,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=v,_[10]=S,_[14]=x,_[3]=M,_[7]=A,_[11]=C,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/os.setFromMatrixColumn(e,0).length(),c=1/os.setFromMatrixColumn(e,1).length(),h=1/os.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),v=Math.cos(c),S=Math.sin(c);if(e.order==="XYZ"){const x=h*v,M=h*S,A=d*v,C=d*S;i[0]=m*v,i[4]=-m*S,i[8]=p,i[1]=M+A*p,i[5]=x-C*p,i[9]=-d*m,i[2]=C-x*p,i[6]=A+M*p,i[10]=h*m}else if(e.order==="YXZ"){const x=m*v,M=m*S,A=p*v,C=p*S;i[0]=x+C*d,i[4]=A*d-M,i[8]=h*p,i[1]=h*S,i[5]=h*v,i[9]=-d,i[2]=M*d-A,i[6]=C+x*d,i[10]=h*m}else if(e.order==="ZXY"){const x=m*v,M=m*S,A=p*v,C=p*S;i[0]=x-C*d,i[4]=-h*S,i[8]=A+M*d,i[1]=M+A*d,i[5]=h*v,i[9]=C-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const x=h*v,M=h*S,A=d*v,C=d*S;i[0]=m*v,i[4]=A*p-M,i[8]=x*p+C,i[1]=m*S,i[5]=C*p+x,i[9]=M*p-A,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const x=h*m,M=h*p,A=d*m,C=d*p;i[0]=m*v,i[4]=C-x*S,i[8]=A*S+M,i[1]=S,i[5]=h*v,i[9]=-d*v,i[2]=-p*v,i[6]=M*S+A,i[10]=x-C*S}else if(e.order==="XZY"){const x=h*m,M=h*p,A=d*m,C=d*p;i[0]=m*v,i[4]=-S,i[8]=p*v,i[1]=x*S+C,i[5]=h*v,i[9]=M*S-A,i[2]=A*S-M,i[6]=d*v,i[10]=C*S+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sy,e,oy)}lookAt(e,i,r){const l=this.elements;return Qn.subVectors(e,i),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),Ba.crossVectors(r,Qn),Ba.lengthSq()===0&&(Math.abs(r.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),Ba.crossVectors(r,Qn)),Ba.normalize(),eu.crossVectors(Qn,Ba),l[0]=Ba.x,l[4]=eu.x,l[8]=Qn.x,l[1]=Ba.y,l[5]=eu.y,l[9]=Qn.y,l[2]=Ba.z,l[6]=eu.z,l[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],v=r[1],S=r[5],x=r[9],M=r[13],A=r[2],C=r[6],y=r[10],_=r[14],I=r[3],z=r[7],U=r[11],J=r[15],V=l[0],P=l[4],K=l[8],D=l[12],R=l[1],H=l[5],ft=l[9],ut=l[13],ht=l[2],_t=l[6],O=l[10],Q=l[14],q=l[3],yt=l[7],Tt=l[11],N=l[15];return c[0]=h*V+d*R+m*ht+p*q,c[4]=h*P+d*H+m*_t+p*yt,c[8]=h*K+d*ft+m*O+p*Tt,c[12]=h*D+d*ut+m*Q+p*N,c[1]=v*V+S*R+x*ht+M*q,c[5]=v*P+S*H+x*_t+M*yt,c[9]=v*K+S*ft+x*O+M*Tt,c[13]=v*D+S*ut+x*Q+M*N,c[2]=A*V+C*R+y*ht+_*q,c[6]=A*P+C*H+y*_t+_*yt,c[10]=A*K+C*ft+y*O+_*Tt,c[14]=A*D+C*ut+y*Q+_*N,c[3]=I*V+z*R+U*ht+J*q,c[7]=I*P+z*H+U*_t+J*yt,c[11]=I*K+z*ft+U*O+J*Tt,c[15]=I*D+z*ut+U*Q+J*N,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],h=e[1],d=e[5],m=e[9],p=e[13],v=e[2],S=e[6],x=e[10],M=e[14],A=e[3],C=e[7],y=e[11],_=e[15];return A*(+c*m*S-l*p*S-c*d*x+r*p*x+l*d*M-r*m*M)+C*(+i*m*M-i*p*x+c*h*x-l*h*M+l*p*v-c*m*v)+y*(+i*p*S-i*d*M-c*h*S+r*h*M+c*d*v-r*p*v)+_*(-l*d*v-i*m*S+i*d*x+l*h*S-r*h*x+r*m*v)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],v=e[8],S=e[9],x=e[10],M=e[11],A=e[12],C=e[13],y=e[14],_=e[15],I=S*y*p-C*x*p+C*m*M-d*y*M-S*m*_+d*x*_,z=A*x*p-v*y*p-A*m*M+h*y*M+v*m*_-h*x*_,U=v*C*p-A*S*p+A*d*M-h*C*M-v*d*_+h*S*_,J=A*S*m-v*C*m-A*d*x+h*C*x+v*d*y-h*S*y,V=i*I+r*z+l*U+c*J;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/V;return e[0]=I*P,e[1]=(C*x*c-S*y*c-C*l*M+r*y*M+S*l*_-r*x*_)*P,e[2]=(d*y*c-C*m*c+C*l*p-r*y*p-d*l*_+r*m*_)*P,e[3]=(S*m*c-d*x*c-S*l*p+r*x*p+d*l*M-r*m*M)*P,e[4]=z*P,e[5]=(v*y*c-A*x*c+A*l*M-i*y*M-v*l*_+i*x*_)*P,e[6]=(A*m*c-h*y*c-A*l*p+i*y*p+h*l*_-i*m*_)*P,e[7]=(h*x*c-v*m*c+v*l*p-i*x*p-h*l*M+i*m*M)*P,e[8]=U*P,e[9]=(A*S*c-v*C*c-A*r*M+i*C*M+v*r*_-i*S*_)*P,e[10]=(h*C*c-A*d*c+A*r*p-i*C*p-h*r*_+i*d*_)*P,e[11]=(v*d*c-h*S*c-v*r*p+i*S*p+h*r*M-i*d*M)*P,e[12]=J*P,e[13]=(v*C*l-A*S*l+A*r*x-i*C*x-v*r*y+i*S*y)*P,e[14]=(A*d*l-h*C*l-A*r*m+i*C*m+h*r*y-i*d*y)*P,e[15]=(h*S*l-v*d*l+v*r*m-i*S*m-h*r*x+i*d*x)*P,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=e.x,d=e.y,m=e.z,p=c*h,v=c*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,v*d+r,v*m-l*h,0,p*m-l*d,v*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,h){return this.set(1,r,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,v=h+h,S=d+d,x=c*p,M=c*v,A=c*S,C=h*v,y=h*S,_=d*S,I=m*p,z=m*v,U=m*S,J=r.x,V=r.y,P=r.z;return l[0]=(1-(C+_))*J,l[1]=(M+U)*J,l[2]=(A-z)*J,l[3]=0,l[4]=(M-U)*V,l[5]=(1-(x+_))*V,l[6]=(y+I)*V,l[7]=0,l[8]=(A+z)*P,l[9]=(y-I)*P,l[10]=(1-(x+C))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let c=os.set(l[0],l[1],l[2]).length();const h=os.set(l[4],l[5],l[6]).length(),d=os.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],Si.copy(this);const p=1/c,v=1/h,S=1/d;return Si.elements[0]*=p,Si.elements[1]*=p,Si.elements[2]*=p,Si.elements[4]*=v,Si.elements[5]*=v,Si.elements[6]*=v,Si.elements[8]*=S,Si.elements[9]*=S,Si.elements[10]*=S,i.setFromRotationMatrix(Si),r.x=c,r.y=h,r.z=d,this}makePerspective(e,i,r,l,c,h,d=aa){const m=this.elements,p=2*c/(i-e),v=2*c/(r-l),S=(i+e)/(i-e),x=(r+l)/(r-l);let M,A;if(d===aa)M=-(h+c)/(h-c),A=-2*h*c/(h-c);else if(d===Ru)M=-h/(h-c),A=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=S,m[12]=0,m[1]=0,m[5]=v,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=A,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,c,h,d=aa){const m=this.elements,p=1/(i-e),v=1/(r-l),S=1/(h-c),x=(i+e)*p,M=(r+l)*v;let A,C;if(d===aa)A=(h+c)*S,C=-2*S;else if(d===Ru)A=c*S,C=-1*S;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-x,m[1]=0,m[5]=2*v,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=C,m[14]=-A,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const os=new ot,Si=new $e,sy=new ot(0,0,0),oy=new ot(1,1,1),Ba=new ot,eu=new ot,Qn=new ot,M_=new $e,E_=new zo;class la{constructor(e=0,i=0,r=0,l=la.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],v=l[9],S=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-S,c),this._z=0);break;case"ZXY":this._x=Math.asin(xe(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-S,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-xe(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(xe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-S,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return M_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(M_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return E_.setFromEuler(this),this.setFromQuaternion(E_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}la.DEFAULT_ORDER="XYZ";class Dv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ly=0;const T_=new ot,ls=new zo,$i=new $e,nu=new ot,wo=new ot,uy=new ot,cy=new zo,b_=new ot(1,0,0),A_=new ot(0,1,0),R_=new ot(0,0,1),C_={type:"added"},fy={type:"removed"},us={type:"childadded",child:null},rh={type:"childremoved",child:null};class Xn extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ly++}),this.uuid=Oo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xn.DEFAULT_UP.clone();const e=new ot,i=new la,r=new zo,l=new ot(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new $e},normalMatrix:{value:new oe}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=Xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return ls.setFromAxisAngle(e,i),this.quaternion.multiply(ls),this}rotateOnWorldAxis(e,i){return ls.setFromAxisAngle(e,i),this.quaternion.premultiply(ls),this}rotateX(e){return this.rotateOnAxis(b_,e)}rotateY(e){return this.rotateOnAxis(A_,e)}rotateZ(e){return this.rotateOnAxis(R_,e)}translateOnAxis(e,i){return T_.copy(e).applyQuaternion(this.quaternion),this.position.add(T_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(b_,e)}translateY(e){return this.translateOnAxis(A_,e)}translateZ(e){return this.translateOnAxis(R_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?nu.copy(e):nu.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(wo,nu,this.up):$i.lookAt(nu,wo,this.up),this.quaternion.setFromRotationMatrix($i),l&&($i.extractRotation(l.matrixWorld),ls.setFromRotationMatrix($i),this.quaternion.premultiply(ls.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(C_),us.child=e,this.dispatchEvent(us),us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(fy),rh.child=e,this.dispatchEvent(rh),rh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$i.multiply(e.parent.matrixWorld)),e.applyMatrix4($i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(C_),us.child=e,this.dispatchEvent(us),us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,e,uy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,cy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const S=m[p];c(e.shapes,S)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),v=h(e.images),S=h(e.shapes),x=h(e.skeletons),M=h(e.animations),A=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),S.length>0&&(r.shapes=S),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),A.length>0&&(r.nodes=A)}return r.object=l,r;function h(d){const m=[];for(const p in d){const v=d[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Xn.DEFAULT_UP=new ot(0,1,0);Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new ot,ta=new ot,sh=new ot,ea=new ot,cs=new ot,fs=new ot,w_=new ot,oh=new ot,lh=new ot,uh=new ot,ch=new Ke,fh=new Ke,hh=new Ke;class Mi{constructor(e=new ot,i=new ot,r=new ot){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),xi.subVectors(e,i),l.cross(xi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){xi.subVectors(l,i),ta.subVectors(r,i),sh.subVectors(e,i);const h=xi.dot(xi),d=xi.dot(ta),m=xi.dot(sh),p=ta.dot(ta),v=ta.dot(sh),S=h*p-d*d;if(S===0)return c.set(0,0,0),null;const x=1/S,M=(p*m-d*v)*x,A=(h*v-d*m)*x;return c.set(1-M-A,A,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ea)===null?!1:ea.x>=0&&ea.y>=0&&ea.x+ea.y<=1}static getInterpolation(e,i,r,l,c,h,d,m){return this.getBarycoord(e,i,r,l,ea)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ea.x),m.addScaledVector(h,ea.y),m.addScaledVector(d,ea.z),m)}static getInterpolatedAttribute(e,i,r,l,c,h){return ch.setScalar(0),fh.setScalar(0),hh.setScalar(0),ch.fromBufferAttribute(e,i),fh.fromBufferAttribute(e,r),hh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(ch,c.x),h.addScaledVector(fh,c.y),h.addScaledVector(hh,c.z),h}static isFrontFacing(e,i,r,l){return xi.subVectors(r,i),ta.subVectors(e,i),xi.cross(ta).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),ta.subVectors(this.a,this.b),xi.cross(ta).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Mi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return Mi.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return Mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let h,d;cs.subVectors(l,r),fs.subVectors(c,r),oh.subVectors(e,r);const m=cs.dot(oh),p=fs.dot(oh);if(m<=0&&p<=0)return i.copy(r);lh.subVectors(e,l);const v=cs.dot(lh),S=fs.dot(lh);if(v>=0&&S<=v)return i.copy(l);const x=m*S-v*p;if(x<=0&&m>=0&&v<=0)return h=m/(m-v),i.copy(r).addScaledVector(cs,h);uh.subVectors(e,c);const M=cs.dot(uh),A=fs.dot(uh);if(A>=0&&M<=A)return i.copy(c);const C=M*p-m*A;if(C<=0&&p>=0&&A<=0)return d=p/(p-A),i.copy(r).addScaledVector(fs,d);const y=v*A-M*S;if(y<=0&&S-v>=0&&M-A>=0)return w_.subVectors(c,l),d=(S-v)/(S-v+(M-A)),i.copy(l).addScaledVector(w_,d);const _=1/(y+C+x);return h=C*_,d=x*_,i.copy(r).addScaledVector(cs,h).addScaledVector(fs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Uv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fa={h:0,s:0,l:0},iu={h:0,s:0,l:0};function dh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class we{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ui){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Re.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=Re.workingColorSpace){return this.r=e,this.g=i,this.b=r,Re.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=Re.workingColorSpace){if(e=Zx(e,1),i=xe(i,0,1),r=xe(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=dh(h,c,e+1/3),this.g=dh(h,c,e),this.b=dh(h,c,e-1/3)}return Re.toWorkingColorSpace(this,l),this}setStyle(e,i=ui){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ui){const r=Uv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ra(e.r),this.g=ra(e.g),this.b=ra(e.b),this}copyLinearToSRGB(e){return this.r=xs(e.r),this.g=xs(e.g),this.b=xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ui){return Re.fromWorkingColorSpace(An.copy(this),e),Math.round(xe(An.r*255,0,255))*65536+Math.round(xe(An.g*255,0,255))*256+Math.round(xe(An.b*255,0,255))}getHexString(e=ui){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Re.workingColorSpace){Re.fromWorkingColorSpace(An.copy(this),i);const r=An.r,l=An.g,c=An.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const v=(d+h)/2;if(d===h)m=0,p=0;else{const S=h-d;switch(p=v<=.5?S/(h+d):S/(2-h-d),h){case r:m=(l-c)/S+(l<c?6:0);break;case l:m=(c-r)/S+2;break;case c:m=(r-l)/S+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,i=Re.workingColorSpace){return Re.fromWorkingColorSpace(An.copy(this),i),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=ui){Re.fromWorkingColorSpace(An.copy(this),e);const i=An.r,r=An.g,l=An.b;return e!==ui?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Fa),this.setHSL(Fa.h+e,Fa.s+i,Fa.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Fa),e.getHSL(iu);const r=Kf(Fa.h,iu.h,i),l=Kf(Fa.s,iu.s,i),c=Kf(Fa.l,iu.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const An=new we;we.NAMES=Uv;let hy=0;class Bo extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hy++}),this.uuid=Oo(),this.name="",this.type="Material",this.blending=vs,this.side=Xa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ah,this.blendDst=Rh,this.blendEquation=vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=m_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(r.blending=this.blending),this.side!==Xa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ah&&(r.blendSrc=this.blendSrc),this.blendDst!==Rh&&(r.blendDst=this.blendDst),this.blendEquation!==vr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ys&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==m_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Lv extends Bo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new la,this.combine=dv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rn=new ot,au=new re;class Ti{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=g_,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)au.fromBufferAttribute(this,i),au.applyMatrix3(e),this.setXY(i,au.x,au.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix3(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix4(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyNormalMatrix(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.transformDirection(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Ao(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Hn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Ao(i,this.array)),i}setX(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Ao(i,this.array)),i}setY(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Ao(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Ao(i,this.array)),i}setW(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array),c=Hn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==g_&&(e.usage=this.usage),e}}class Nv extends Ti{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Ov extends Ti{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class sa extends Ti{constructor(e,i,r){super(new Float32Array(e),i,r)}}let dy=0;const li=new $e,ph=new Xn,hs=new ot,Jn=new Po,Do=new Po,pn=new ot;class ca extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dy++}),this.uuid=Oo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Av(e)?Ov:Nv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new oe().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,i,r){return li.makeTranslation(e,i,r),this.applyMatrix4(li),this}scale(e,i,r){return li.makeScale(e,i,r),this.applyMatrix4(li),this}lookAt(e){return ph.lookAt(e),ph.updateMatrix(),this.applyMatrix4(ph.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new sa(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Po);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ot(-1/0,-1/0,-1/0),new ot(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];Jn.setFromBufferAttribute(c),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nu);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ot,1/0);return}if(e){const r=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Do.setFromBufferAttribute(d),this.morphTargetsRelative?(pn.addVectors(Jn.min,Do.min),Jn.expandByPoint(pn),pn.addVectors(Jn.max,Do.max),Jn.expandByPoint(pn)):(Jn.expandByPoint(Do.min),Jn.expandByPoint(Do.max))}Jn.getCenter(r);let l=0;for(let c=0,h=e.count;c<h;c++)pn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(pn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)pn.fromBufferAttribute(d,p),m&&(hs.fromBufferAttribute(e,p),pn.add(hs)),l=Math.max(l,r.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ti(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let K=0;K<r.count;K++)d[K]=new ot,m[K]=new ot;const p=new ot,v=new ot,S=new ot,x=new re,M=new re,A=new re,C=new ot,y=new ot;function _(K,D,R){p.fromBufferAttribute(r,K),v.fromBufferAttribute(r,D),S.fromBufferAttribute(r,R),x.fromBufferAttribute(c,K),M.fromBufferAttribute(c,D),A.fromBufferAttribute(c,R),v.sub(p),S.sub(p),M.sub(x),A.sub(x);const H=1/(M.x*A.y-A.x*M.y);isFinite(H)&&(C.copy(v).multiplyScalar(A.y).addScaledVector(S,-M.y).multiplyScalar(H),y.copy(S).multiplyScalar(M.x).addScaledVector(v,-A.x).multiplyScalar(H),d[K].add(C),d[D].add(C),d[R].add(C),m[K].add(y),m[D].add(y),m[R].add(y))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let K=0,D=I.length;K<D;++K){const R=I[K],H=R.start,ft=R.count;for(let ut=H,ht=H+ft;ut<ht;ut+=3)_(e.getX(ut+0),e.getX(ut+1),e.getX(ut+2))}const z=new ot,U=new ot,J=new ot,V=new ot;function P(K){J.fromBufferAttribute(l,K),V.copy(J);const D=d[K];z.copy(D),z.sub(J.multiplyScalar(J.dot(D))).normalize(),U.crossVectors(V,D);const H=U.dot(m[K])<0?-1:1;h.setXYZW(K,z.x,z.y,z.z,H)}for(let K=0,D=I.length;K<D;++K){const R=I[K],H=R.start,ft=R.count;for(let ut=H,ht=H+ft;ut<ht;ut+=3)P(e.getX(ut+0)),P(e.getX(ut+1)),P(e.getX(ut+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ti(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const l=new ot,c=new ot,h=new ot,d=new ot,m=new ot,p=new ot,v=new ot,S=new ot;if(e)for(let x=0,M=e.count;x<M;x+=3){const A=e.getX(x+0),C=e.getX(x+1),y=e.getX(x+2);l.fromBufferAttribute(i,A),c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,y),v.subVectors(h,c),S.subVectors(l,c),v.cross(S),d.fromBufferAttribute(r,A),m.fromBufferAttribute(r,C),p.fromBufferAttribute(r,y),d.add(v),m.add(v),p.add(v),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),v.subVectors(h,c),S.subVectors(l,c),v.cross(S),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)pn.fromBufferAttribute(e,i),pn.normalize(),e.setXYZ(i,pn.x,pn.y,pn.z)}toNonIndexed(){function e(d,m){const p=d.array,v=d.itemSize,S=d.normalized,x=new p.constructor(m.length*v);let M=0,A=0;for(let C=0,y=m.length;C<y;C++){d.isInterleavedBufferAttribute?M=m[C]*d.data.stride+d.offset:M=m[C]*v;for(let _=0;_<v;_++)x[A++]=p[M++]}return new Ti(x,v,S)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ca,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let v=0,S=p.length;v<S;v++){const x=p[v],M=e(x,r);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let S=0,x=p.length;S<x;S++){const M=p[S];v.push(M.toJSON(e.data))}v.length>0&&(l[m]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(i));const l=e.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const c=e.morphAttributes;for(const p in c){const v=[],S=c[p];for(let x=0,M=S.length;x<M;x++)v.push(S[x].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,v=h.length;p<v;p++){const S=h[p];this.addGroup(S.start,S.count,S.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const D_=new $e,hr=new wv,ru=new Nu,U_=new ot,su=new ot,ou=new ot,lu=new ot,mh=new ot,uu=new ot,L_=new ot,cu=new ot;class fi extends Xn{constructor(e=new ca,i=new Lv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){uu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const v=d[m],S=c[m];v!==0&&(mh.fromBufferAttribute(S,e),h?uu.addScaledVector(mh,v):uu.addScaledVector(mh.sub(i),v))}i.add(uu)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ru.copy(r.boundingSphere),ru.applyMatrix4(c),hr.copy(e.ray).recast(e.near),!(ru.containsPoint(hr.origin)===!1&&(hr.intersectSphere(ru,U_)===null||hr.origin.distanceToSquared(U_)>(e.far-e.near)**2))&&(D_.copy(c).invert(),hr.copy(e.ray).applyMatrix4(D_),!(r.boundingBox!==null&&hr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,hr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,S=c.attributes.normal,x=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(h))for(let A=0,C=x.length;A<C;A++){const y=x[A],_=h[y.materialIndex],I=Math.max(y.start,M.start),z=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let U=I,J=z;U<J;U+=3){const V=d.getX(U),P=d.getX(U+1),K=d.getX(U+2);l=fu(this,_,e,r,p,v,S,V,P,K),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),C=Math.min(d.count,M.start+M.count);for(let y=A,_=C;y<_;y+=3){const I=d.getX(y),z=d.getX(y+1),U=d.getX(y+2);l=fu(this,h,e,r,p,v,S,I,z,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let A=0,C=x.length;A<C;A++){const y=x[A],_=h[y.materialIndex],I=Math.max(y.start,M.start),z=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let U=I,J=z;U<J;U+=3){const V=U,P=U+1,K=U+2;l=fu(this,_,e,r,p,v,S,V,P,K),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let y=A,_=C;y<_;y+=3){const I=y,z=y+1,U=y+2;l=fu(this,h,e,r,p,v,S,I,z,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function py(o,e,i,r,l,c,h,d){let m;if(e.side===Vn?m=r.intersectTriangle(h,c,l,!0,d):m=r.intersectTriangle(l,c,h,e.side===Xa,d),m===null)return null;cu.copy(d),cu.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(cu);return p<i.near||p>i.far?null:{distance:p,point:cu.clone(),object:o}}function fu(o,e,i,r,l,c,h,d,m,p){o.getVertexPosition(d,su),o.getVertexPosition(m,ou),o.getVertexPosition(p,lu);const v=py(o,e,i,r,su,ou,lu,L_);if(v){const S=new ot;Mi.getBarycoord(L_,su,ou,lu,S),l&&(v.uv=Mi.getInterpolatedAttribute(l,d,m,p,S,new re)),c&&(v.uv1=Mi.getInterpolatedAttribute(c,d,m,p,S,new re)),h&&(v.normal=Mi.getInterpolatedAttribute(h,d,m,p,S,new ot),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new ot,materialIndex:0};Mi.getNormal(su,ou,lu,x.normal),v.face=x,v.barycoord=S}return v}class Fo extends ca{constructor(e=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],v=[],S=[];let x=0,M=0;A("z","y","x",-1,-1,r,i,e,h,c,0),A("z","y","x",1,-1,r,i,-e,h,c,1),A("x","z","y",1,1,e,r,i,l,h,2),A("x","z","y",1,-1,e,r,-i,l,h,3),A("x","y","z",1,-1,e,i,r,l,c,4),A("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new sa(p,3)),this.setAttribute("normal",new sa(v,3)),this.setAttribute("uv",new sa(S,2));function A(C,y,_,I,z,U,J,V,P,K,D){const R=U/P,H=J/K,ft=U/2,ut=J/2,ht=V/2,_t=P+1,O=K+1;let Q=0,q=0;const yt=new ot;for(let Tt=0;Tt<O;Tt++){const N=Tt*H-ut;for(let at=0;at<_t;at++){const xt=at*R-ft;yt[C]=xt*I,yt[y]=N*z,yt[_]=ht,p.push(yt.x,yt.y,yt.z),yt[C]=0,yt[y]=0,yt[_]=V>0?1:-1,v.push(yt.x,yt.y,yt.z),S.push(at/P),S.push(1-Tt/K),Q+=1}}for(let Tt=0;Tt<K;Tt++)for(let N=0;N<P;N++){const at=x+N+_t*Tt,xt=x+N+_t*(Tt+1),j=x+(N+1)+_t*(Tt+1),pt=x+(N+1)+_t*Tt;m.push(at,xt,pt),m.push(xt,j,pt),q+=6}d.addGroup(M,q,D),M+=q,x+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rs(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Dn(o){const e={};for(let i=0;i<o.length;i++){const r=Rs(o[i]);for(const l in r)e[l]=r[l]}return e}function my(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function zv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Re.workingColorSpace}const gy={clone:Rs,merge:Dn};var _y=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ua extends Bo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_y,this.fragmentShader=vy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=my(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class wu extends Xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=aa}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ia=new ot,N_=new re,O_=new re;class yi extends wu{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=fd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fd*2*Math.atan(Math.tan(jf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Ia.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ia.x,Ia.y).multiplyScalar(-e/Ia.z),Ia.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ia.x,Ia.y).multiplyScalar(-e/Ia.z)}getViewSize(e,i){return this.getViewBounds(e,N_,O_),i.subVectors(O_,N_)}setViewOffset(e,i,r,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(jf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ds=-90,ps=1;class Sy extends Xn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new yi(ds,ps,e,i);l.layers=this.layers,this.add(l);const c=new yi(ds,ps,e,i);c.layers=this.layers,this.add(c);const h=new yi(ds,ps,e,i);h.layers=this.layers,this.add(h);const d=new yi(ds,ps,e,i);d.layers=this.layers,this.add(d);const m=new yi(ds,ps,e,i);m.layers=this.layers,this.add(m);const p=new yi(ds,ps,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(e===aa)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Ru)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,v]=this.children,S=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),e.render(i,v),e.setRenderTarget(S,x,M),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class Pv extends Un{constructor(e,i,r,l,c,h,d,m,p,v){e=e!==void 0?e:[],i=i!==void 0?i:Ms,super(e,i,r,l,c,h,d,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xy extends ka{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Pv(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Gn}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Fo(5,5,5),c=new ua({name:"CubemapFromEquirect",uniforms:Rs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Vn,blending:Ga});c.uniforms.tEquirect.value=i;const h=new fi(l,c),d=i.minFilter;return i.minFilter===xr&&(i.minFilter=Gn),new Sy(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i,r,l){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(c)}}class z_ extends Xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new la,this.environmentIntensity=1,this.environmentRotation=new la,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class yy extends Un{constructor(e=null,i=1,r=1,l,c,h,d,m,p=$n,v=$n,S,x){super(null,h,d,m,p,v,l,c,S,x),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gh=new ot,My=new ot,Ey=new oe;class gr{constructor(e=new ot(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=gh.subVectors(r,i).cross(My.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(gh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||Ey.getNormalMatrix(e),l=this.coplanarPoint(gh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const dr=new Nu,hu=new ot;class Bv{constructor(e=new gr,i=new gr,r=new gr,l=new gr,c=new gr,h=new gr){this.planes=[e,i,r,l,c,h]}set(e,i,r,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=aa){const r=this.planes,l=e.elements,c=l[0],h=l[1],d=l[2],m=l[3],p=l[4],v=l[5],S=l[6],x=l[7],M=l[8],A=l[9],C=l[10],y=l[11],_=l[12],I=l[13],z=l[14],U=l[15];if(r[0].setComponents(m-c,x-p,y-M,U-_).normalize(),r[1].setComponents(m+c,x+p,y+M,U+_).normalize(),r[2].setComponents(m+h,x+v,y+A,U+I).normalize(),r[3].setComponents(m-h,x-v,y-A,U-I).normalize(),r[4].setComponents(m-d,x-S,y-C,U-z).normalize(),i===aa)r[5].setComponents(m+d,x+S,y+C,U+z).normalize();else if(i===Ru)r[5].setComponents(d,S,C,z).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),dr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(dr)}intersectsSprite(e){return dr.center.set(0,0,0),dr.radius=.7071067811865476,dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(dr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(hu.x=l.normal.x>0?e.max.x:e.min.x,hu.y=l.normal.y>0?e.max.y:e.min.y,hu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(hu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ty extends Bo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Du=new ot,Uu=new ot,P_=new $e,Uo=new wv,du=new Nu,_h=new ot,B_=new ot;class by extends Xn{constructor(e=new ca,i=new Ty){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)Du.fromBufferAttribute(i,l-1),Uu.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=Du.distanceTo(Uu);e.setAttribute("lineDistance",new sa(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),du.copy(r.boundingSphere),du.applyMatrix4(l),du.radius+=c,e.ray.intersectsSphere(du)===!1)return;P_.copy(l).invert(),Uo.copy(e.ray).applyMatrix4(P_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,v=r.index,x=r.attributes.position;if(v!==null){const M=Math.max(0,h.start),A=Math.min(v.count,h.start+h.count);for(let C=M,y=A-1;C<y;C+=p){const _=v.getX(C),I=v.getX(C+1),z=pu(this,e,Uo,m,_,I);z&&i.push(z)}if(this.isLineLoop){const C=v.getX(A-1),y=v.getX(M),_=pu(this,e,Uo,m,C,y);_&&i.push(_)}}else{const M=Math.max(0,h.start),A=Math.min(x.count,h.start+h.count);for(let C=M,y=A-1;C<y;C+=p){const _=pu(this,e,Uo,m,C,C+1);_&&i.push(_)}if(this.isLineLoop){const C=pu(this,e,Uo,m,A-1,M);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function pu(o,e,i,r,l,c){const h=o.geometry.attributes.position;if(Du.fromBufferAttribute(h,l),Uu.fromBufferAttribute(h,c),i.distanceSqToSegment(Du,Uu,_h,B_)>r)return;_h.applyMatrix4(o.matrixWorld);const m=e.ray.origin.distanceTo(_h);if(!(m<e.near||m>e.far))return{distance:m,point:B_.clone().applyMatrix4(o.matrixWorld),index:l,face:null,faceIndex:null,barycoord:null,object:o}}const F_=new ot,I_=new ot;class Ay extends by{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[];for(let l=0,c=i.count;l<c;l+=2)F_.fromBufferAttribute(i,l),I_.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+F_.distanceTo(I_);e.setAttribute("lineDistance",new sa(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class mu extends Xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Fv extends Un{constructor(e,i,r,l,c,h,d,m,p,v=Ss){if(v!==Ss&&v!==bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&v===Ss&&(r=Mr),r===void 0&&v===bs&&(r=Ts),super(null,l,c,h,d,m,v,r,p),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=d!==void 0?d:$n,this.minFilter=m!==void 0?m:$n,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class yr extends ca{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,v=m+1,S=e/d,x=i/m,M=[],A=[],C=[],y=[];for(let _=0;_<v;_++){const I=_*x-h;for(let z=0;z<p;z++){const U=z*S-c;A.push(U,-I,0),C.push(0,0,1),y.push(z/d),y.push(1-_/m)}}for(let _=0;_<m;_++)for(let I=0;I<d;I++){const z=I+p*_,U=I+p*(_+1),J=I+1+p*(_+1),V=I+1+p*_;M.push(z,U,V),M.push(U,J,V)}this.setIndex(M),this.setAttribute("position",new sa(A,3)),this.setAttribute("normal",new sa(C,3)),this.setAttribute("uv",new sa(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yr(e.width,e.height,e.widthSegments,e.heightSegments)}}class gu extends ua{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ry extends Bo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Cy extends Bo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class wy extends wu{constructor(e=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Dy extends yi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Uy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=H_(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=H_();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function H_(){return performance.now()}function G_(o,e,i,r){const l=Ly(r);switch(i){case vv:return o*e;case xv:return o*e;case yv:return o*e*2;case Mv:return o*e/l.components*l.byteLength;case vd:return o*e/l.components*l.byteLength;case Ev:return o*e*2/l.components*l.byteLength;case Sd:return o*e*2/l.components*l.byteLength;case Sv:return o*e*3/l.components*l.byteLength;case ci:return o*e*4/l.components*l.byteLength;case xd:return o*e*4/l.components*l.byteLength;case xu:case yu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Mu:case Eu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Hh:case Vh:return Math.max(o,16)*Math.max(e,8)/4;case Ih:case Gh:return Math.max(o,8)*Math.max(e,8)/2;case Xh:case kh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Wh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case qh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Yh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Zh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case jh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Kh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Qh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Jh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case $h:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case td:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case ed:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case nd:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case id:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case ad:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case rd:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Tu:case sd:case od:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Tv:case ld:return Math.ceil(o/4)*Math.ceil(e/4)*8;case ud:case cd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Ly(o){switch(o){case oa:case mv:return{byteLength:1,components:1};case No:case gv:case Cs:return{byteLength:2,components:1};case gd:case _d:return{byteLength:2,components:4};case Mr:case md:case Li:return{byteLength:4,components:1};case _v:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pd);function Iv(){let o=null,e=!1,i=null,r=null;function l(c,h){i(c,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function Ny(o){const e=new WeakMap;function i(d,m){const p=d.array,v=d.usage,S=p.byteLength,x=o.createBuffer();o.bindBuffer(m,x),o.bufferData(m,p,v),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:S}}function r(d,m,p){const v=m.array,S=m.updateRanges;if(o.bindBuffer(p,d),S.length===0)o.bufferSubData(p,0,v);else{S.sort((M,A)=>M.start-A.start);let x=0;for(let M=1;M<S.length;M++){const A=S[x],C=S[M];C.start<=A.start+A.count+1?A.count=Math.max(A.count,C.start+C.count-A.start):(++x,S[x]=C)}S.length=x+1;for(let M=0,A=S.length;M<A;M++){const C=S[M];o.bufferSubData(p,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var Oy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Py=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,By=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Iy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Gy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Xy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ky=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Yy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Zy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ky=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$y=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,eM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,iM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,aM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,oM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cM="gl_FragColor = linearToOutputTexel( gl_FragColor );",fM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,dM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_M=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,SM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,MM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,EM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,TM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,AM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,RM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,CM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,DM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,UM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,LM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,NM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,OM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,PM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,BM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,HM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,GM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,VM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,XM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,WM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,YM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ZM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,KM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,JM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$M=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,iE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,aE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,uE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,gE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_E=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,SE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ME=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,EE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,TE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,AE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,RE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,CE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,DE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,UE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,LE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const NE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,OE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,HE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,GE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,VE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,XE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ZE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,JE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$E=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,tT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,eT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,aT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,lT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ce={alphahash_fragment:Oy,alphahash_pars_fragment:zy,alphamap_fragment:Py,alphamap_pars_fragment:By,alphatest_fragment:Fy,alphatest_pars_fragment:Iy,aomap_fragment:Hy,aomap_pars_fragment:Gy,batching_pars_vertex:Vy,batching_vertex:Xy,begin_vertex:ky,beginnormal_vertex:Wy,bsdfs:qy,iridescence_fragment:Yy,bumpmap_pars_fragment:Zy,clipping_planes_fragment:jy,clipping_planes_pars_fragment:Ky,clipping_planes_pars_vertex:Qy,clipping_planes_vertex:Jy,color_fragment:$y,color_pars_fragment:tM,color_pars_vertex:eM,color_vertex:nM,common:iM,cube_uv_reflection_fragment:aM,defaultnormal_vertex:rM,displacementmap_pars_vertex:sM,displacementmap_vertex:oM,emissivemap_fragment:lM,emissivemap_pars_fragment:uM,colorspace_fragment:cM,colorspace_pars_fragment:fM,envmap_fragment:hM,envmap_common_pars_fragment:dM,envmap_pars_fragment:pM,envmap_pars_vertex:mM,envmap_physical_pars_fragment:AM,envmap_vertex:gM,fog_vertex:_M,fog_pars_vertex:vM,fog_fragment:SM,fog_pars_fragment:xM,gradientmap_pars_fragment:yM,lightmap_pars_fragment:MM,lights_lambert_fragment:EM,lights_lambert_pars_fragment:TM,lights_pars_begin:bM,lights_toon_fragment:RM,lights_toon_pars_fragment:CM,lights_phong_fragment:wM,lights_phong_pars_fragment:DM,lights_physical_fragment:UM,lights_physical_pars_fragment:LM,lights_fragment_begin:NM,lights_fragment_maps:OM,lights_fragment_end:zM,logdepthbuf_fragment:PM,logdepthbuf_pars_fragment:BM,logdepthbuf_pars_vertex:FM,logdepthbuf_vertex:IM,map_fragment:HM,map_pars_fragment:GM,map_particle_fragment:VM,map_particle_pars_fragment:XM,metalnessmap_fragment:kM,metalnessmap_pars_fragment:WM,morphinstance_vertex:qM,morphcolor_vertex:YM,morphnormal_vertex:ZM,morphtarget_pars_vertex:jM,morphtarget_vertex:KM,normal_fragment_begin:QM,normal_fragment_maps:JM,normal_pars_fragment:$M,normal_pars_vertex:tE,normal_vertex:eE,normalmap_pars_fragment:nE,clearcoat_normal_fragment_begin:iE,clearcoat_normal_fragment_maps:aE,clearcoat_pars_fragment:rE,iridescence_pars_fragment:sE,opaque_fragment:oE,packing:lE,premultiplied_alpha_fragment:uE,project_vertex:cE,dithering_fragment:fE,dithering_pars_fragment:hE,roughnessmap_fragment:dE,roughnessmap_pars_fragment:pE,shadowmap_pars_fragment:mE,shadowmap_pars_vertex:gE,shadowmap_vertex:_E,shadowmask_pars_fragment:vE,skinbase_vertex:SE,skinning_pars_vertex:xE,skinning_vertex:yE,skinnormal_vertex:ME,specularmap_fragment:EE,specularmap_pars_fragment:TE,tonemapping_fragment:bE,tonemapping_pars_fragment:AE,transmission_fragment:RE,transmission_pars_fragment:CE,uv_pars_fragment:wE,uv_pars_vertex:DE,uv_vertex:UE,worldpos_vertex:LE,background_vert:NE,background_frag:OE,backgroundCube_vert:zE,backgroundCube_frag:PE,cube_vert:BE,cube_frag:FE,depth_vert:IE,depth_frag:HE,distanceRGBA_vert:GE,distanceRGBA_frag:VE,equirect_vert:XE,equirect_frag:kE,linedashed_vert:WE,linedashed_frag:qE,meshbasic_vert:YE,meshbasic_frag:ZE,meshlambert_vert:jE,meshlambert_frag:KE,meshmatcap_vert:QE,meshmatcap_frag:JE,meshnormal_vert:$E,meshnormal_frag:tT,meshphong_vert:eT,meshphong_frag:nT,meshphysical_vert:iT,meshphysical_frag:aT,meshtoon_vert:rT,meshtoon_frag:sT,points_vert:oT,points_frag:lT,shadow_vert:uT,shadow_frag:cT,sprite_vert:fT,sprite_frag:hT},Nt={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},Ui={basic:{uniforms:Dn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:Dn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new we(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:Dn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:Dn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:Dn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new we(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:Dn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:Dn([Nt.points,Nt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:Dn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:Dn([Nt.common,Nt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:Dn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:Dn([Nt.sprite,Nt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:Dn([Nt.common,Nt.displacementmap,{referencePosition:{value:new ot},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:Dn([Nt.lights,Nt.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};Ui.physical={uniforms:Dn([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const _u={r:0,b:0,g:0},pr=new la,dT=new $e;function pT(o,e,i,r,l,c,h){const d=new we(0);let m=c===!0?0:1,p,v,S=null,x=0,M=null;function A(z){let U=z.isScene===!0?z.background:null;return U&&U.isTexture&&(U=(z.backgroundBlurriness>0?i:e).get(U)),U}function C(z){let U=!1;const J=A(z);J===null?_(d,m):J&&J.isColor&&(_(J,1),U=!0);const V=o.xr.getEnvironmentBlendMode();V==="additive"?r.buffers.color.setClear(0,0,0,1,h):V==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||U)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(z,U){const J=A(U);J&&(J.isCubeTexture||J.mapping===Lu)?(v===void 0&&(v=new fi(new Fo(1,1,1),new ua({name:"BackgroundCubeMaterial",uniforms:Rs(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(V,P,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),pr.copy(U.backgroundRotation),pr.x*=-1,pr.y*=-1,pr.z*=-1,J.isCubeTexture&&J.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),v.material.uniforms.envMap.value=J,v.material.uniforms.flipEnvMap.value=J.isCubeTexture&&J.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(dT.makeRotationFromEuler(pr)),v.material.toneMapped=Re.getTransfer(J.colorSpace)!==Fe,(S!==J||x!==J.version||M!==o.toneMapping)&&(v.material.needsUpdate=!0,S=J,x=J.version,M=o.toneMapping),v.layers.enableAll(),z.unshift(v,v.geometry,v.material,0,0,null)):J&&J.isTexture&&(p===void 0&&(p=new fi(new yr(2,2),new ua({name:"BackgroundMaterial",uniforms:Rs(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:Xa,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=J,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=Re.getTransfer(J.colorSpace)!==Fe,J.matrixAutoUpdate===!0&&J.updateMatrix(),p.material.uniforms.uvTransform.value.copy(J.matrix),(S!==J||x!==J.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,S=J,x=J.version,M=o.toneMapping),p.layers.enableAll(),z.unshift(p,p.geometry,p.material,0,0,null))}function _(z,U){z.getRGB(_u,zv(o)),r.buffers.color.setClear(_u.r,_u.g,_u.b,U,h)}function I(){v!==void 0&&(v.geometry.dispose(),v.material.dispose()),p!==void 0&&(p.geometry.dispose(),p.material.dispose())}return{getClearColor:function(){return d},setClearColor:function(z,U=1){d.set(z),m=U,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(z){m=z,_(d,m)},render:C,addToRenderList:y,dispose:I}}function mT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=x(null);let c=l,h=!1;function d(R,H,ft,ut,ht){let _t=!1;const O=S(ut,ft,H);c!==O&&(c=O,p(c.object)),_t=M(R,ut,ft,ht),_t&&A(R,ut,ft,ht),ht!==null&&e.update(ht,o.ELEMENT_ARRAY_BUFFER),(_t||h)&&(h=!1,U(R,H,ft,ut),ht!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ht).buffer))}function m(){return o.createVertexArray()}function p(R){return o.bindVertexArray(R)}function v(R){return o.deleteVertexArray(R)}function S(R,H,ft){const ut=ft.wireframe===!0;let ht=r[R.id];ht===void 0&&(ht={},r[R.id]=ht);let _t=ht[H.id];_t===void 0&&(_t={},ht[H.id]=_t);let O=_t[ut];return O===void 0&&(O=x(m()),_t[ut]=O),O}function x(R){const H=[],ft=[],ut=[];for(let ht=0;ht<i;ht++)H[ht]=0,ft[ht]=0,ut[ht]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:ft,attributeDivisors:ut,object:R,attributes:{},index:null}}function M(R,H,ft,ut){const ht=c.attributes,_t=H.attributes;let O=0;const Q=ft.getAttributes();for(const q in Q)if(Q[q].location>=0){const Tt=ht[q];let N=_t[q];if(N===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(N=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(N=R.instanceColor)),Tt===void 0||Tt.attribute!==N||N&&Tt.data!==N.data)return!0;O++}return c.attributesNum!==O||c.index!==ut}function A(R,H,ft,ut){const ht={},_t=H.attributes;let O=0;const Q=ft.getAttributes();for(const q in Q)if(Q[q].location>=0){let Tt=_t[q];Tt===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(Tt=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(Tt=R.instanceColor));const N={};N.attribute=Tt,Tt&&Tt.data&&(N.data=Tt.data),ht[q]=N,O++}c.attributes=ht,c.attributesNum=O,c.index=ut}function C(){const R=c.newAttributes;for(let H=0,ft=R.length;H<ft;H++)R[H]=0}function y(R){_(R,0)}function _(R,H){const ft=c.newAttributes,ut=c.enabledAttributes,ht=c.attributeDivisors;ft[R]=1,ut[R]===0&&(o.enableVertexAttribArray(R),ut[R]=1),ht[R]!==H&&(o.vertexAttribDivisor(R,H),ht[R]=H)}function I(){const R=c.newAttributes,H=c.enabledAttributes;for(let ft=0,ut=H.length;ft<ut;ft++)H[ft]!==R[ft]&&(o.disableVertexAttribArray(ft),H[ft]=0)}function z(R,H,ft,ut,ht,_t,O){O===!0?o.vertexAttribIPointer(R,H,ft,ht,_t):o.vertexAttribPointer(R,H,ft,ut,ht,_t)}function U(R,H,ft,ut){C();const ht=ut.attributes,_t=ft.getAttributes(),O=H.defaultAttributeValues;for(const Q in _t){const q=_t[Q];if(q.location>=0){let yt=ht[Q];if(yt===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(yt=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(yt=R.instanceColor)),yt!==void 0){const Tt=yt.normalized,N=yt.itemSize,at=e.get(yt);if(at===void 0)continue;const xt=at.buffer,j=at.type,pt=at.bytesPerElement,Mt=j===o.INT||j===o.UNSIGNED_INT||yt.gpuType===md;if(yt.isInterleavedBufferAttribute){const St=yt.data,Pt=St.stride,It=yt.offset;if(St.isInstancedInterleavedBuffer){for(let te=0;te<q.locationSize;te++)_(q.location+te,St.meshPerAttribute);R.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let te=0;te<q.locationSize;te++)y(q.location+te);o.bindBuffer(o.ARRAY_BUFFER,xt);for(let te=0;te<q.locationSize;te++)z(q.location+te,N/q.locationSize,j,Tt,Pt*pt,(It+N/q.locationSize*te)*pt,Mt)}else{if(yt.isInstancedBufferAttribute){for(let St=0;St<q.locationSize;St++)_(q.location+St,yt.meshPerAttribute);R.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let St=0;St<q.locationSize;St++)y(q.location+St);o.bindBuffer(o.ARRAY_BUFFER,xt);for(let St=0;St<q.locationSize;St++)z(q.location+St,N/q.locationSize,j,Tt,N*pt,N/q.locationSize*St*pt,Mt)}}else if(O!==void 0){const Tt=O[Q];if(Tt!==void 0)switch(Tt.length){case 2:o.vertexAttrib2fv(q.location,Tt);break;case 3:o.vertexAttrib3fv(q.location,Tt);break;case 4:o.vertexAttrib4fv(q.location,Tt);break;default:o.vertexAttrib1fv(q.location,Tt)}}}}I()}function J(){K();for(const R in r){const H=r[R];for(const ft in H){const ut=H[ft];for(const ht in ut)v(ut[ht].object),delete ut[ht];delete H[ft]}delete r[R]}}function V(R){if(r[R.id]===void 0)return;const H=r[R.id];for(const ft in H){const ut=H[ft];for(const ht in ut)v(ut[ht].object),delete ut[ht];delete H[ft]}delete r[R.id]}function P(R){for(const H in r){const ft=r[H];if(ft[R.id]===void 0)continue;const ut=ft[R.id];for(const ht in ut)v(ut[ht].object),delete ut[ht];delete ft[R.id]}}function K(){D(),h=!0,c!==l&&(c=l,p(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:K,resetDefaultState:D,dispose:J,releaseStatesOfGeometry:V,releaseStatesOfProgram:P,initAttributes:C,enableAttribute:y,disableUnusedAttributes:I}}function gT(o,e,i){let r;function l(p){r=p}function c(p,v){o.drawArrays(r,p,v),i.update(v,r,1)}function h(p,v,S){S!==0&&(o.drawArraysInstanced(r,p,v,S),i.update(v,r,S))}function d(p,v,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,v,0,S);let M=0;for(let A=0;A<S;A++)M+=v[A];i.update(M,r,1)}function m(p,v,S,x){if(S===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let A=0;A<p.length;A++)h(p[A],v[A],x[A]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,v,0,x,0,S);let A=0;for(let C=0;C<S;C++)A+=v[C]*x[C];i.update(A,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function _T(o,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(P){return!(P!==ci&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const K=P===Cs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==oa&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Li&&!K)}function m(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const S=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),I=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),z=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),J=A>0,V=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:S,reverseDepthBuffer:x,maxTextures:M,maxVertexTextures:A,maxTextureSize:C,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:I,maxVaryings:z,maxFragmentUniforms:U,vertexTextures:J,maxSamples:V}}function vT(o){const e=this;let i=null,r=0,l=!1,c=!1;const h=new gr,d=new oe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,x){const M=S.length!==0||x||r!==0||l;return l=x,r=S.length,M},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(S,x){i=v(S,x,0)},this.setState=function(S,x,M){const A=S.clippingPlanes,C=S.clipIntersection,y=S.clipShadows,_=o.get(S);if(!l||A===null||A.length===0||c&&!y)c?v(null):p();else{const I=c?0:r,z=I*4;let U=_.clippingState||null;m.value=U,U=v(A,x,z,M);for(let J=0;J!==z;++J)U[J]=i[J];_.clippingState=U,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=I}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(S,x,M,A){const C=S!==null?S.length:0;let y=null;if(C!==0){if(y=m.value,A!==!0||y===null){const _=M+C*4,I=x.matrixWorldInverse;d.getNormalMatrix(I),(y===null||y.length<_)&&(y=new Float32Array(_));for(let z=0,U=M;z!==C;++z,U+=4)h.copy(S[z]).applyMatrix4(I,d),h.normal.toArray(y,U),y[U+3]=h.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}function ST(o){let e=new WeakMap;function i(h,d){return d===zh?h.mapping=Ms:d===Ph&&(h.mapping=Es),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===zh||d===Ph)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new xy(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const _s=4,V_=[.125,.215,.35,.446,.526,.582],Sr=20,vh=new wy,X_=new we;let Sh=null,xh=0,yh=0,Mh=!1;const _r=(1+Math.sqrt(5))/2,ms=1/_r,k_=[new ot(-_r,ms,0),new ot(_r,ms,0),new ot(-ms,0,_r),new ot(ms,0,_r),new ot(0,_r,-ms),new ot(0,_r,ms),new ot(-1,1,-1),new ot(1,1,-1),new ot(-1,1,1),new ot(1,1,1)];class W_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100){Sh=this._renderer.getRenderTarget(),xh=this._renderer.getActiveCubeFace(),yh=this._renderer.getActiveMipmapLevel(),Mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,l,c),i>0&&this._blur(c,0,0,i),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Z_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Y_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sh,xh,yh),this._renderer.xr.enabled=Mh,e.scissorTest=!1,vu(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ms||e.mapping===Es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sh=this._renderer.getRenderTarget(),xh=this._renderer.getActiveCubeFace(),yh=this._renderer.getActiveMipmapLevel(),Mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:Cs,format:ci,colorSpace:As,depthBuffer:!1},l=q_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=q_(e,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xT(c)),this._blurMaterial=yT(c,e,i)}return l}_compileMaterial(e){const i=new fi(this._lodPlanes[0],e);this._renderer.compile(i,vh)}_sceneToCubeUV(e,i,r,l){const d=new yi(90,1,i,r),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],v=this._renderer,S=v.autoClear,x=v.toneMapping;v.getClearColor(X_),v.toneMapping=Va,v.autoClear=!1;const M=new Lv({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1}),A=new fi(new Fo,M);let C=!1;const y=e.background;y?y.isColor&&(M.color.copy(y),e.background=null,C=!0):(M.color.copy(X_),C=!0);for(let _=0;_<6;_++){const I=_%3;I===0?(d.up.set(0,m[_],0),d.lookAt(p[_],0,0)):I===1?(d.up.set(0,0,m[_]),d.lookAt(0,p[_],0)):(d.up.set(0,m[_],0),d.lookAt(0,0,p[_]));const z=this._cubeSize;vu(l,I*z,_>2?z:0,z,z),v.setRenderTarget(l),C&&v.render(A,d),v.render(e,d)}A.geometry.dispose(),A.material.dispose(),v.toneMapping=x,v.autoClear=S,e.background=y}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Ms||e.mapping===Es;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Z_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Y_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new fi(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;vu(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,vh)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=k_[(l-c-1)%k_.length];this._blur(e,c-1,c,h,d)}i.autoClear=r}_blur(e,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",c),this._halfBlur(h,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,S=new fi(this._lodPlanes[l],p),x=p.uniforms,M=this._sizeLods[r]-1,A=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Sr-1),C=c/A,y=isFinite(c)?1+Math.floor(v*C):Sr;y>Sr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Sr}`);const _=[];let I=0;for(let P=0;P<Sr;++P){const K=P/C,D=Math.exp(-K*K/2);_.push(D),P===0?I+=D:P<y&&(I+=2*D)}for(let P=0;P<_.length;P++)_[P]=_[P]/I;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:z}=this;x.dTheta.value=A,x.mipInt.value=z-r;const U=this._sizeLods[l],J=3*U*(l>z-_s?l-z+_s:0),V=4*(this._cubeSize-U);vu(i,J,V,3*U,2*U),m.setRenderTarget(i),m.render(S,vh)}}function xT(o){const e=[],i=[],r=[];let l=o;const c=o-_s+1+V_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-_s?m=V_[h-o+_s-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),v=-p,S=1+p,x=[v,v,S,v,S,S,v,v,S,S,v,S],M=6,A=6,C=3,y=2,_=1,I=new Float32Array(C*A*M),z=new Float32Array(y*A*M),U=new Float32Array(_*A*M);for(let V=0;V<M;V++){const P=V%3*2/3-1,K=V>2?0:-1,D=[P,K,0,P+2/3,K,0,P+2/3,K+1,0,P,K,0,P+2/3,K+1,0,P,K+1,0];I.set(D,C*A*V),z.set(x,y*A*V);const R=[V,V,V,V,V,V];U.set(R,_*A*V)}const J=new ca;J.setAttribute("position",new Ti(I,C)),J.setAttribute("uv",new Ti(z,y)),J.setAttribute("faceIndex",new Ti(U,_)),e.push(J),l>_s&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function q_(o,e,i){const r=new ka(o,e,i);return r.texture.mapping=Lu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function vu(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function yT(o,e,i){const r=new Float32Array(Sr),l=new ot(0,1,0);return new ua({name:"SphericalGaussianBlur",defines:{n:Sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:yd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function Y_(){return new ua({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function Z_(){return new ua({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function yd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function MT(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===zh||m===Ph,v=m===Ms||m===Es;if(p||v){let S=e.get(d);const x=S!==void 0?S.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new W_(o)),S=p?i.fromEquirectangular(d,S):i.fromCubemap(d,S),S.texture.pmremVersion=d.pmremVersion,e.set(d,S),S.texture;if(S!==void 0)return S.texture;{const M=d.image;return p&&M&&M.height>0||v&&M&&l(M)?(i===null&&(i=new W_(o)),S=p?i.fromEquirectangular(d):i.fromCubemap(d),S.texture.pmremVersion=d.pmremVersion,e.set(d,S),d.addEventListener("dispose",c),S.texture):null}}}return d}function l(d){let m=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function ET(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&gs("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function TT(o,e,i,r){const l={},c=new WeakMap;function h(S){const x=S.target;x.index!==null&&e.remove(x.index);for(const A in x.attributes)e.remove(x.attributes[A]);x.removeEventListener("dispose",h),delete l[x.id];const M=c.get(x);M&&(e.remove(M),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(S,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(S){const x=S.attributes;for(const M in x)e.update(x[M],o.ARRAY_BUFFER)}function p(S){const x=[],M=S.index,A=S.attributes.position;let C=0;if(M!==null){const I=M.array;C=M.version;for(let z=0,U=I.length;z<U;z+=3){const J=I[z+0],V=I[z+1],P=I[z+2];x.push(J,V,V,P,P,J)}}else if(A!==void 0){const I=A.array;C=A.version;for(let z=0,U=I.length/3-1;z<U;z+=3){const J=z+0,V=z+1,P=z+2;x.push(J,V,V,P,P,J)}}else return;const y=new(Av(x)?Ov:Nv)(x,1);y.version=C;const _=c.get(S);_&&e.remove(_),c.set(S,y)}function v(S){const x=c.get(S);if(x){const M=S.index;M!==null&&x.version<M.version&&p(S)}else p(S);return c.get(S)}return{get:d,update:m,getWireframeAttribute:v}}function bT(o,e,i){let r;function l(x){r=x}let c,h;function d(x){c=x.type,h=x.bytesPerElement}function m(x,M){o.drawElements(r,M,c,x*h),i.update(M,r,1)}function p(x,M,A){A!==0&&(o.drawElementsInstanced(r,M,c,x*h,A),i.update(M,r,A))}function v(x,M,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,x,0,A);let y=0;for(let _=0;_<A;_++)y+=M[_];i.update(y,r,1)}function S(x,M,A,C){if(A===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<x.length;_++)p(x[_]/h,M[_],C[_]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,c,x,0,C,0,A);let _=0;for(let I=0;I<A;I++)_+=M[I]*C[I];i.update(_,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=S}function AT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function RT(o,e,i){const r=new WeakMap,l=new Ke;function c(h,d,m){const p=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,S=v!==void 0?v.length:0;let x=r.get(d);if(x===void 0||x.count!==S){let R=function(){K.dispose(),r.delete(d),d.removeEventListener("dispose",R)};var M=R;x!==void 0&&x.texture.dispose();const A=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],z=d.morphAttributes.color||[];let U=0;A===!0&&(U=1),C===!0&&(U=2),y===!0&&(U=3);let J=d.attributes.position.count*U,V=1;J>e.maxTextureSize&&(V=Math.ceil(J/e.maxTextureSize),J=e.maxTextureSize);const P=new Float32Array(J*V*4*S),K=new Cv(P,J,V,S);K.type=Li,K.needsUpdate=!0;const D=U*4;for(let H=0;H<S;H++){const ft=_[H],ut=I[H],ht=z[H],_t=J*V*4*H;for(let O=0;O<ft.count;O++){const Q=O*D;A===!0&&(l.fromBufferAttribute(ft,O),P[_t+Q+0]=l.x,P[_t+Q+1]=l.y,P[_t+Q+2]=l.z,P[_t+Q+3]=0),C===!0&&(l.fromBufferAttribute(ut,O),P[_t+Q+4]=l.x,P[_t+Q+5]=l.y,P[_t+Q+6]=l.z,P[_t+Q+7]=0),y===!0&&(l.fromBufferAttribute(ht,O),P[_t+Q+8]=l.x,P[_t+Q+9]=l.y,P[_t+Q+10]=l.z,P[_t+Q+11]=ht.itemSize===4?l.w:1)}}x={count:S,texture:K,size:new re(J,V)},r.set(d,x),d.addEventListener("dispose",R)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let A=0;for(let y=0;y<p.length;y++)A+=p[y];const C=d.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:c}}function CT(o,e,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,v=m.geometry,S=e.get(m,v);if(l.get(S)!==p&&(e.update(S),l.set(S,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return S}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const Hv=new Un,j_=new Fv(1,1),Gv=new Cv,Vv=new ay,Xv=new Pv,K_=[],Q_=[],J_=new Float32Array(16),$_=new Float32Array(9),tv=new Float32Array(4);function Ds(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let c=K_[l];if(c===void 0&&(c=new Float32Array(l),K_[l]=c),e!==0){r.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(c,d)}return c}function un(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function cn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Ou(o,e){let i=Q_[e];i===void 0&&(i=new Int32Array(e),Q_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function wT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function DT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(un(i,e))return;o.uniform2fv(this.addr,e),cn(i,e)}}function UT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(un(i,e))return;o.uniform3fv(this.addr,e),cn(i,e)}}function LT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(un(i,e))return;o.uniform4fv(this.addr,e),cn(i,e)}}function NT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(un(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),cn(i,e)}else{if(un(i,r))return;tv.set(r),o.uniformMatrix2fv(this.addr,!1,tv),cn(i,r)}}function OT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(un(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),cn(i,e)}else{if(un(i,r))return;$_.set(r),o.uniformMatrix3fv(this.addr,!1,$_),cn(i,r)}}function zT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(un(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),cn(i,e)}else{if(un(i,r))return;J_.set(r),o.uniformMatrix4fv(this.addr,!1,J_),cn(i,r)}}function PT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function BT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(un(i,e))return;o.uniform2iv(this.addr,e),cn(i,e)}}function FT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(un(i,e))return;o.uniform3iv(this.addr,e),cn(i,e)}}function IT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(un(i,e))return;o.uniform4iv(this.addr,e),cn(i,e)}}function HT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function GT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(un(i,e))return;o.uniform2uiv(this.addr,e),cn(i,e)}}function VT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(un(i,e))return;o.uniform3uiv(this.addr,e),cn(i,e)}}function XT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(un(i,e))return;o.uniform4uiv(this.addr,e),cn(i,e)}}function kT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(j_.compareFunction=bv,c=j_):c=Hv,i.setTexture2D(e||c,l)}function WT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Vv,l)}function qT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Xv,l)}function YT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Gv,l)}function ZT(o){switch(o){case 5126:return wT;case 35664:return DT;case 35665:return UT;case 35666:return LT;case 35674:return NT;case 35675:return OT;case 35676:return zT;case 5124:case 35670:return PT;case 35667:case 35671:return BT;case 35668:case 35672:return FT;case 35669:case 35673:return IT;case 5125:return HT;case 36294:return GT;case 36295:return VT;case 36296:return XT;case 35678:case 36198:case 36298:case 36306:case 35682:return kT;case 35679:case 36299:case 36307:return WT;case 35680:case 36300:case 36308:case 36293:return qT;case 36289:case 36303:case 36311:case 36292:return YT}}function jT(o,e){o.uniform1fv(this.addr,e)}function KT(o,e){const i=Ds(e,this.size,2);o.uniform2fv(this.addr,i)}function QT(o,e){const i=Ds(e,this.size,3);o.uniform3fv(this.addr,i)}function JT(o,e){const i=Ds(e,this.size,4);o.uniform4fv(this.addr,i)}function $T(o,e){const i=Ds(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function tb(o,e){const i=Ds(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function eb(o,e){const i=Ds(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function nb(o,e){o.uniform1iv(this.addr,e)}function ib(o,e){o.uniform2iv(this.addr,e)}function ab(o,e){o.uniform3iv(this.addr,e)}function rb(o,e){o.uniform4iv(this.addr,e)}function sb(o,e){o.uniform1uiv(this.addr,e)}function ob(o,e){o.uniform2uiv(this.addr,e)}function lb(o,e){o.uniform3uiv(this.addr,e)}function ub(o,e){o.uniform4uiv(this.addr,e)}function cb(o,e,i){const r=this.cache,l=e.length,c=Ou(i,l);un(r,c)||(o.uniform1iv(this.addr,c),cn(r,c));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||Hv,c[h])}function fb(o,e,i){const r=this.cache,l=e.length,c=Ou(i,l);un(r,c)||(o.uniform1iv(this.addr,c),cn(r,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||Vv,c[h])}function hb(o,e,i){const r=this.cache,l=e.length,c=Ou(i,l);un(r,c)||(o.uniform1iv(this.addr,c),cn(r,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||Xv,c[h])}function db(o,e,i){const r=this.cache,l=e.length,c=Ou(i,l);un(r,c)||(o.uniform1iv(this.addr,c),cn(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||Gv,c[h])}function pb(o){switch(o){case 5126:return jT;case 35664:return KT;case 35665:return QT;case 35666:return JT;case 35674:return $T;case 35675:return tb;case 35676:return eb;case 5124:case 35670:return nb;case 35667:case 35671:return ib;case 35668:case 35672:return ab;case 35669:case 35673:return rb;case 5125:return sb;case 36294:return ob;case 36295:return lb;case 36296:return ub;case 35678:case 36198:case 36298:case 36306:case 35682:return cb;case 35679:case 36299:case 36307:return fb;case 35680:case 36300:case 36308:case 36293:return hb;case 36289:case 36303:case 36311:case 36292:return db}}class mb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=ZT(i.type)}}class gb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=pb(i.type)}}class _b{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],r)}}}const Eh=/(\w+)(\])?(\[|\.)?/g;function ev(o,e){o.seq.push(e),o.map[e.id]=e}function vb(o,e,i){const r=o.name,l=r.length;for(Eh.lastIndex=0;;){const c=Eh.exec(r),h=Eh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){ev(i,p===void 0?new mb(d,o,e):new gb(d,o,e));break}else{let S=i.map[d];S===void 0&&(S=new _b(d),ev(i,S)),i=S}}}class bu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=e.getActiveUniform(i,l),h=e.getUniformLocation(i,c.name);vb(c,h,this)}}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function nv(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const Sb=37297;let xb=0;function yb(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const iv=new oe;function Mb(o){Re._getMatrix(iv,Re.workingColorSpace,o);const e=`mat3( ${iv.elements.map(i=>i.toFixed(4))} )`;switch(Re.getTransfer(o)){case Au:return[e,"LinearTransferOETF"];case Fe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function av(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const h=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+yb(o.getShaderSource(e),h)}else return l}function Eb(o,e){const i=Mb(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Tb(o,e){let i;switch(e){case wx:i="Linear";break;case Dx:i="Reinhard";break;case Ux:i="Cineon";break;case Lx:i="ACESFilmic";break;case Ox:i="AgX";break;case zx:i="Neutral";break;case Nx:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Su=new ot;function bb(){Re.getLuminanceCoefficients(Su);const o=Su.x.toFixed(4),e=Su.y.toFixed(4),i=Su.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ab(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function Rb(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function Cb(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(e,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Lo(o){return o!==""}function rv(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sv(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wb=/^[ \t]*#include +<([\w\d./]+)>/gm;function hd(o){return o.replace(wb,Ub)}const Db=new Map;function Ub(o,e){let i=ce[e];if(i===void 0){const r=Db.get(e);if(r!==void 0)i=ce[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return hd(i)}const Lb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ov(o){return o.replace(Lb,Nb)}function Nb(o,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function lv(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ob(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===hv?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===lx?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===na&&(e="SHADOWMAP_TYPE_VSM"),e}function zb(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ms:case Es:e="ENVMAP_TYPE_CUBE";break;case Lu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Pb(o){let e="ENVMAP_MODE_REFLECTION";return o.envMap&&o.envMapMode===Es&&(e="ENVMAP_MODE_REFRACTION"),e}function Bb(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case dv:e="ENVMAP_BLENDING_MULTIPLY";break;case Rx:e="ENVMAP_BLENDING_MIX";break;case Cx:e="ENVMAP_BLENDING_ADD";break}return e}function Fb(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function Ib(o,e,i,r){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=Ob(i),p=zb(i),v=Pb(i),S=Bb(i),x=Fb(i),M=Ab(i),A=Rb(c),C=l.createProgram();let y,_,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Lo).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Lo).join(`
`),_.length>0&&(_+=`
`)):(y=[lv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),_=[lv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+S:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Va?"#define TONE_MAPPING":"",i.toneMapping!==Va?ce.tonemapping_pars_fragment:"",i.toneMapping!==Va?Tb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,Eb("linearToOutputTexel",i.outputColorSpace),bb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Lo).join(`
`)),h=hd(h),h=rv(h,i),h=sv(h,i),d=hd(d),d=rv(d,i),d=sv(d,i),h=ov(h),d=ov(d),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===__?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===__?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const z=I+y+h,U=I+_+d,J=nv(l,l.VERTEX_SHADER,z),V=nv(l,l.FRAGMENT_SHADER,U);l.attachShader(C,J),l.attachShader(C,V),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function P(H){if(o.debug.checkShaderErrors){const ft=l.getProgramInfoLog(C).trim(),ut=l.getShaderInfoLog(J).trim(),ht=l.getShaderInfoLog(V).trim();let _t=!0,O=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(_t=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,J,V);else{const Q=av(l,J,"vertex"),q=av(l,V,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ft+`
`+Q+`
`+q)}else ft!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ft):(ut===""||ht==="")&&(O=!1);O&&(H.diagnostics={runnable:_t,programLog:ft,vertexShader:{log:ut,prefix:y},fragmentShader:{log:ht,prefix:_}})}l.deleteShader(J),l.deleteShader(V),K=new bu(l,C),D=Cb(l,C)}let K;this.getUniforms=function(){return K===void 0&&P(this),K};let D;this.getAttributes=function(){return D===void 0&&P(this),D};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(C,Sb)),R},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=xb++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=J,this.fragmentShader=V,this}let Hb=0;class Gb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new Vb(e),i.set(e,r)),r}}class Vb{constructor(e){this.id=Hb++,this.code=e,this.usedTimes=0}}function Xb(o,e,i,r,l,c,h){const d=new Dv,m=new Gb,p=new Set,v=[],S=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(D){return p.add(D),D===0?"uv":`uv${D}`}function y(D,R,H,ft,ut){const ht=ft.fog,_t=ut.geometry,O=D.isMeshStandardMaterial?ft.environment:null,Q=(D.isMeshStandardMaterial?i:e).get(D.envMap||O),q=Q&&Q.mapping===Lu?Q.image.height:null,yt=A[D.type];D.precision!==null&&(M=l.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const Tt=_t.morphAttributes.position||_t.morphAttributes.normal||_t.morphAttributes.color,N=Tt!==void 0?Tt.length:0;let at=0;_t.morphAttributes.position!==void 0&&(at=1),_t.morphAttributes.normal!==void 0&&(at=2),_t.morphAttributes.color!==void 0&&(at=3);let xt,j,pt,Mt;if(yt){const Me=Ui[yt];xt=Me.vertexShader,j=Me.fragmentShader}else xt=D.vertexShader,j=D.fragmentShader,m.update(D),pt=m.getVertexShaderID(D),Mt=m.getFragmentShaderID(D);const St=o.getRenderTarget(),Pt=o.state.buffers.depth.getReversed(),It=ut.isInstancedMesh===!0,te=ut.isBatchedMesh===!0,De=!!D.map,fe=!!D.matcap,He=!!Q,F=!!D.aoMap,fn=!!D.lightMap,le=!!D.bumpMap,he=!!D.normalMap,Gt=!!D.displacementMap,Ee=!!D.emissiveMap,Xt=!!D.metalnessMap,L=!!D.roughnessMap,T=D.anisotropy>0,Y=D.clearcoat>0,w=D.dispersion>0,$=D.iridescence>0,tt=D.sheen>0,Rt=D.transmission>0,Et=T&&!!D.anisotropyMap,Ct=Y&&!!D.clearcoatMap,ue=Y&&!!D.clearcoatNormalMap,bt=Y&&!!D.clearcoatRoughnessMap,Ft=$&&!!D.iridescenceMap,Wt=$&&!!D.iridescenceThicknessMap,kt=tt&&!!D.sheenColorMap,zt=tt&&!!D.sheenRoughnessMap,Kt=!!D.specularMap,ie=!!D.specularColorMap,Ne=!!D.specularIntensityMap,k=Rt&&!!D.transmissionMap,wt=Rt&&!!D.thicknessMap,ct=!!D.gradientMap,vt=!!D.alphaMap,Dt=D.alphaTest>0,Ut=!!D.alphaHash,Qt=!!D.extensions;let ke=Va;D.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(ke=o.toneMapping);const sn={shaderID:yt,shaderType:D.type,shaderName:D.name,vertexShader:xt,fragmentShader:j,defines:D.defines,customVertexShaderID:pt,customFragmentShaderID:Mt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:te,batchingColor:te&&ut._colorsTexture!==null,instancing:It,instancingColor:It&&ut.instanceColor!==null,instancingMorph:It&&ut.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:St===null?o.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:As,alphaToCoverage:!!D.alphaToCoverage,map:De,matcap:fe,envMap:He,envMapMode:He&&Q.mapping,envMapCubeUVHeight:q,aoMap:F,lightMap:fn,bumpMap:le,normalMap:he,displacementMap:x&&Gt,emissiveMap:Ee,normalMapObjectSpace:he&&D.normalMapType===Hx,normalMapTangentSpace:he&&D.normalMapType===Ix,metalnessMap:Xt,roughnessMap:L,anisotropy:T,anisotropyMap:Et,clearcoat:Y,clearcoatMap:Ct,clearcoatNormalMap:ue,clearcoatRoughnessMap:bt,dispersion:w,iridescence:$,iridescenceMap:Ft,iridescenceThicknessMap:Wt,sheen:tt,sheenColorMap:kt,sheenRoughnessMap:zt,specularMap:Kt,specularColorMap:ie,specularIntensityMap:Ne,transmission:Rt,transmissionMap:k,thicknessMap:wt,gradientMap:ct,opaque:D.transparent===!1&&D.blending===vs&&D.alphaToCoverage===!1,alphaMap:vt,alphaTest:Dt,alphaHash:Ut,combine:D.combine,mapUv:De&&C(D.map.channel),aoMapUv:F&&C(D.aoMap.channel),lightMapUv:fn&&C(D.lightMap.channel),bumpMapUv:le&&C(D.bumpMap.channel),normalMapUv:he&&C(D.normalMap.channel),displacementMapUv:Gt&&C(D.displacementMap.channel),emissiveMapUv:Ee&&C(D.emissiveMap.channel),metalnessMapUv:Xt&&C(D.metalnessMap.channel),roughnessMapUv:L&&C(D.roughnessMap.channel),anisotropyMapUv:Et&&C(D.anisotropyMap.channel),clearcoatMapUv:Ct&&C(D.clearcoatMap.channel),clearcoatNormalMapUv:ue&&C(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&C(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&C(D.iridescenceMap.channel),iridescenceThicknessMapUv:Wt&&C(D.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&C(D.sheenColorMap.channel),sheenRoughnessMapUv:zt&&C(D.sheenRoughnessMap.channel),specularMapUv:Kt&&C(D.specularMap.channel),specularColorMapUv:ie&&C(D.specularColorMap.channel),specularIntensityMapUv:Ne&&C(D.specularIntensityMap.channel),transmissionMapUv:k&&C(D.transmissionMap.channel),thicknessMapUv:wt&&C(D.thicknessMap.channel),alphaMapUv:vt&&C(D.alphaMap.channel),vertexTangents:!!_t.attributes.tangent&&(he||T),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!_t.attributes.color&&_t.attributes.color.itemSize===4,pointsUvs:ut.isPoints===!0&&!!_t.attributes.uv&&(De||vt),fog:!!ht,useFog:D.fog===!0,fogExp2:!!ht&&ht.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:S,reverseDepthBuffer:Pt,skinning:ut.isSkinnedMesh===!0,morphTargets:_t.morphAttributes.position!==void 0,morphNormals:_t.morphAttributes.normal!==void 0,morphColors:_t.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:at,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:ke,decodeVideoTexture:De&&D.map.isVideoTexture===!0&&Re.getTransfer(D.map.colorSpace)===Fe,decodeVideoTextureEmissive:Ee&&D.emissiveMap.isVideoTexture===!0&&Re.getTransfer(D.emissiveMap.colorSpace)===Fe,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===ia,flipSided:D.side===Vn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Qt&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qt&&D.extensions.multiDraw===!0||te)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return sn.vertexUv1s=p.has(1),sn.vertexUv2s=p.has(2),sn.vertexUv3s=p.has(3),p.clear(),sn}function _(D){const R=[];if(D.shaderID?R.push(D.shaderID):(R.push(D.customVertexShaderID),R.push(D.customFragmentShaderID)),D.defines!==void 0)for(const H in D.defines)R.push(H),R.push(D.defines[H]);return D.isRawShaderMaterial===!1&&(I(R,D),z(R,D),R.push(o.outputColorSpace)),R.push(D.customProgramCacheKey),R.join()}function I(D,R){D.push(R.precision),D.push(R.outputColorSpace),D.push(R.envMapMode),D.push(R.envMapCubeUVHeight),D.push(R.mapUv),D.push(R.alphaMapUv),D.push(R.lightMapUv),D.push(R.aoMapUv),D.push(R.bumpMapUv),D.push(R.normalMapUv),D.push(R.displacementMapUv),D.push(R.emissiveMapUv),D.push(R.metalnessMapUv),D.push(R.roughnessMapUv),D.push(R.anisotropyMapUv),D.push(R.clearcoatMapUv),D.push(R.clearcoatNormalMapUv),D.push(R.clearcoatRoughnessMapUv),D.push(R.iridescenceMapUv),D.push(R.iridescenceThicknessMapUv),D.push(R.sheenColorMapUv),D.push(R.sheenRoughnessMapUv),D.push(R.specularMapUv),D.push(R.specularColorMapUv),D.push(R.specularIntensityMapUv),D.push(R.transmissionMapUv),D.push(R.thicknessMapUv),D.push(R.combine),D.push(R.fogExp2),D.push(R.sizeAttenuation),D.push(R.morphTargetsCount),D.push(R.morphAttributeCount),D.push(R.numDirLights),D.push(R.numPointLights),D.push(R.numSpotLights),D.push(R.numSpotLightMaps),D.push(R.numHemiLights),D.push(R.numRectAreaLights),D.push(R.numDirLightShadows),D.push(R.numPointLightShadows),D.push(R.numSpotLightShadows),D.push(R.numSpotLightShadowsWithMaps),D.push(R.numLightProbes),D.push(R.shadowMapType),D.push(R.toneMapping),D.push(R.numClippingPlanes),D.push(R.numClipIntersection),D.push(R.depthPacking)}function z(D,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),D.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),D.push(d.mask)}function U(D){const R=A[D.type];let H;if(R){const ft=Ui[R];H=gy.clone(ft.uniforms)}else H=D.uniforms;return H}function J(D,R){let H;for(let ft=0,ut=v.length;ft<ut;ft++){const ht=v[ft];if(ht.cacheKey===R){H=ht,++H.usedTimes;break}}return H===void 0&&(H=new Ib(o,R,D,c),v.push(H)),H}function V(D){if(--D.usedTimes===0){const R=v.indexOf(D);v[R]=v[v.length-1],v.pop(),D.destroy()}}function P(D){m.remove(D)}function K(){m.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:U,acquireProgram:J,releaseProgram:V,releaseShaderCache:P,programs:v,dispose:K}}function kb(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function Wb(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function uv(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function cv(){const o=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function h(S,x,M,A,C,y){let _=o[e];return _===void 0?(_={id:S.id,object:S,geometry:x,material:M,groupOrder:A,renderOrder:S.renderOrder,z:C,group:y},o[e]=_):(_.id=S.id,_.object=S,_.geometry=x,_.material=M,_.groupOrder=A,_.renderOrder=S.renderOrder,_.z=C,_.group=y),e++,_}function d(S,x,M,A,C,y){const _=h(S,x,M,A,C,y);M.transmission>0?r.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(S,x,M,A,C,y){const _=h(S,x,M,A,C,y);M.transmission>0?r.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(S,x){i.length>1&&i.sort(S||Wb),r.length>1&&r.sort(x||uv),l.length>1&&l.sort(x||uv)}function v(){for(let S=e,x=o.length;S<x;S++){const M=o[S];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:v,sort:p}}function qb(){let o=new WeakMap;function e(r,l){const c=o.get(r);let h;return c===void 0?(h=new cv,o.set(r,[h])):l>=c.length?(h=new cv,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function Yb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ot,color:new we};break;case"SpotLight":i={position:new ot,direction:new ot,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ot,color:new we,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ot,skyColor:new we,groundColor:new we};break;case"RectAreaLight":i={color:new we,position:new ot,halfWidth:new ot,halfHeight:new ot};break}return o[e.id]=i,i}}}function Zb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let jb=0;function Kb(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Qb(o){const e=new Yb,i=Zb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ot);const l=new ot,c=new $e,h=new $e;function d(p){let v=0,S=0,x=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let M=0,A=0,C=0,y=0,_=0,I=0,z=0,U=0,J=0,V=0,P=0;p.sort(Kb);for(let D=0,R=p.length;D<R;D++){const H=p[D],ft=H.color,ut=H.intensity,ht=H.distance,_t=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)v+=ft.r*ut,S+=ft.g*ut,x+=ft.b*ut;else if(H.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(H.sh.coefficients[O],ut);P++}else if(H.isDirectionalLight){const O=e.get(H);if(O.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const Q=H.shadow,q=i.get(H);q.shadowIntensity=Q.intensity,q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,r.directionalShadow[M]=q,r.directionalShadowMap[M]=_t,r.directionalShadowMatrix[M]=H.shadow.matrix,I++}r.directional[M]=O,M++}else if(H.isSpotLight){const O=e.get(H);O.position.setFromMatrixPosition(H.matrixWorld),O.color.copy(ft).multiplyScalar(ut),O.distance=ht,O.coneCos=Math.cos(H.angle),O.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),O.decay=H.decay,r.spot[C]=O;const Q=H.shadow;if(H.map&&(r.spotLightMap[J]=H.map,J++,Q.updateMatrices(H),H.castShadow&&V++),r.spotLightMatrix[C]=Q.matrix,H.castShadow){const q=i.get(H);q.shadowIntensity=Q.intensity,q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,r.spotShadow[C]=q,r.spotShadowMap[C]=_t,U++}C++}else if(H.isRectAreaLight){const O=e.get(H);O.color.copy(ft).multiplyScalar(ut),O.halfWidth.set(H.width*.5,0,0),O.halfHeight.set(0,H.height*.5,0),r.rectArea[y]=O,y++}else if(H.isPointLight){const O=e.get(H);if(O.color.copy(H.color).multiplyScalar(H.intensity),O.distance=H.distance,O.decay=H.decay,H.castShadow){const Q=H.shadow,q=i.get(H);q.shadowIntensity=Q.intensity,q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,q.shadowCameraNear=Q.camera.near,q.shadowCameraFar=Q.camera.far,r.pointShadow[A]=q,r.pointShadowMap[A]=_t,r.pointShadowMatrix[A]=H.shadow.matrix,z++}r.point[A]=O,A++}else if(H.isHemisphereLight){const O=e.get(H);O.skyColor.copy(H.color).multiplyScalar(ut),O.groundColor.copy(H.groundColor).multiplyScalar(ut),r.hemi[_]=O,_++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Nt.LTC_FLOAT_1,r.rectAreaLTC2=Nt.LTC_FLOAT_2):(r.rectAreaLTC1=Nt.LTC_HALF_1,r.rectAreaLTC2=Nt.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=S,r.ambient[2]=x;const K=r.hash;(K.directionalLength!==M||K.pointLength!==A||K.spotLength!==C||K.rectAreaLength!==y||K.hemiLength!==_||K.numDirectionalShadows!==I||K.numPointShadows!==z||K.numSpotShadows!==U||K.numSpotMaps!==J||K.numLightProbes!==P)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=y,r.point.length=A,r.hemi.length=_,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=z,r.pointShadowMap.length=z,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=z,r.spotLightMatrix.length=U+J-V,r.spotLightMap.length=J,r.numSpotLightShadowsWithMaps=V,r.numLightProbes=P,K.directionalLength=M,K.pointLength=A,K.spotLength=C,K.rectAreaLength=y,K.hemiLength=_,K.numDirectionalShadows=I,K.numPointShadows=z,K.numSpotShadows=U,K.numSpotMaps=J,K.numLightProbes=P,r.version=jb++)}function m(p,v){let S=0,x=0,M=0,A=0,C=0;const y=v.matrixWorldInverse;for(let _=0,I=p.length;_<I;_++){const z=p[_];if(z.isDirectionalLight){const U=r.directional[S];U.direction.setFromMatrixPosition(z.matrixWorld),l.setFromMatrixPosition(z.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),S++}else if(z.isSpotLight){const U=r.spot[M];U.position.setFromMatrixPosition(z.matrixWorld),U.position.applyMatrix4(y),U.direction.setFromMatrixPosition(z.matrixWorld),l.setFromMatrixPosition(z.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),M++}else if(z.isRectAreaLight){const U=r.rectArea[A];U.position.setFromMatrixPosition(z.matrixWorld),U.position.applyMatrix4(y),h.identity(),c.copy(z.matrixWorld),c.premultiply(y),h.extractRotation(c),U.halfWidth.set(z.width*.5,0,0),U.halfHeight.set(0,z.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),A++}else if(z.isPointLight){const U=r.point[x];U.position.setFromMatrixPosition(z.matrixWorld),U.position.applyMatrix4(y),x++}else if(z.isHemisphereLight){const U=r.hemi[C];U.direction.setFromMatrixPosition(z.matrixWorld),U.direction.transformDirection(y),C++}}}return{setup:d,setupView:m,state:r}}function fv(o){const e=new Qb(o),i=[],r=[];function l(v){p.camera=v,i.length=0,r.length=0}function c(v){i.push(v)}function h(v){r.push(v)}function d(){e.setup(i)}function m(v){e.setupView(i,v)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function Jb(o){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new fv(o),e.set(l,[d])):c>=h.length?(d=new fv(o),h.push(d)):d=h[c],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const $b=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function eA(o,e,i){let r=new Bv;const l=new re,c=new re,h=new Ke,d=new Ry({depthPacking:Fx}),m=new Cy,p={},v=i.maxTextureSize,S={[Xa]:Vn,[Vn]:Xa,[ia]:ia},x=new ua({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:$b,fragmentShader:tA}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const A=new ca;A.setAttribute("position",new Ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new fi(A,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hv;let _=this.type;this.render=function(V,P,K){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||V.length===0)return;const D=o.getRenderTarget(),R=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),ft=o.state;ft.setBlending(Ga),ft.buffers.color.setClear(1,1,1,1),ft.buffers.depth.setTest(!0),ft.setScissorTest(!1);const ut=_!==na&&this.type===na,ht=_===na&&this.type!==na;for(let _t=0,O=V.length;_t<O;_t++){const Q=V[_t],q=Q.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const yt=q.getFrameExtents();if(l.multiply(yt),c.copy(q.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/yt.x),l.x=c.x*yt.x,q.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/yt.y),l.y=c.y*yt.y,q.mapSize.y=c.y)),q.map===null||ut===!0||ht===!0){const N=this.type!==na?{minFilter:$n,magFilter:$n}:{};q.map!==null&&q.map.dispose(),q.map=new ka(l.x,l.y,N),q.map.texture.name=Q.name+".shadowMap",q.camera.updateProjectionMatrix()}o.setRenderTarget(q.map),o.clear();const Tt=q.getViewportCount();for(let N=0;N<Tt;N++){const at=q.getViewport(N);h.set(c.x*at.x,c.y*at.y,c.x*at.z,c.y*at.w),ft.viewport(h),q.updateMatrices(Q,N),r=q.getFrustum(),U(P,K,q.camera,Q,this.type)}q.isPointLightShadow!==!0&&this.type===na&&I(q,K),q.needsUpdate=!1}_=this.type,y.needsUpdate=!1,o.setRenderTarget(D,R,H)};function I(V,P){const K=e.update(C);x.defines.VSM_SAMPLES!==V.blurSamples&&(x.defines.VSM_SAMPLES=V.blurSamples,M.defines.VSM_SAMPLES=V.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),V.mapPass===null&&(V.mapPass=new ka(l.x,l.y)),x.uniforms.shadow_pass.value=V.map.texture,x.uniforms.resolution.value=V.mapSize,x.uniforms.radius.value=V.radius,o.setRenderTarget(V.mapPass),o.clear(),o.renderBufferDirect(P,null,K,x,C,null),M.uniforms.shadow_pass.value=V.mapPass.texture,M.uniforms.resolution.value=V.mapSize,M.uniforms.radius.value=V.radius,o.setRenderTarget(V.map),o.clear(),o.renderBufferDirect(P,null,K,M,C,null)}function z(V,P,K,D){let R=null;const H=K.isPointLight===!0?V.customDistanceMaterial:V.customDepthMaterial;if(H!==void 0)R=H;else if(R=K.isPointLight===!0?m:d,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const ft=R.uuid,ut=P.uuid;let ht=p[ft];ht===void 0&&(ht={},p[ft]=ht);let _t=ht[ut];_t===void 0&&(_t=R.clone(),ht[ut]=_t,P.addEventListener("dispose",J)),R=_t}if(R.visible=P.visible,R.wireframe=P.wireframe,D===na?R.side=P.shadowSide!==null?P.shadowSide:P.side:R.side=P.shadowSide!==null?P.shadowSide:S[P.side],R.alphaMap=P.alphaMap,R.alphaTest=P.alphaTest,R.map=P.map,R.clipShadows=P.clipShadows,R.clippingPlanes=P.clippingPlanes,R.clipIntersection=P.clipIntersection,R.displacementMap=P.displacementMap,R.displacementScale=P.displacementScale,R.displacementBias=P.displacementBias,R.wireframeLinewidth=P.wireframeLinewidth,R.linewidth=P.linewidth,K.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ft=o.properties.get(R);ft.light=K}return R}function U(V,P,K,D,R){if(V.visible===!1)return;if(V.layers.test(P.layers)&&(V.isMesh||V.isLine||V.isPoints)&&(V.castShadow||V.receiveShadow&&R===na)&&(!V.frustumCulled||r.intersectsObject(V))){V.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,V.matrixWorld);const ut=e.update(V),ht=V.material;if(Array.isArray(ht)){const _t=ut.groups;for(let O=0,Q=_t.length;O<Q;O++){const q=_t[O],yt=ht[q.materialIndex];if(yt&&yt.visible){const Tt=z(V,yt,D,R);V.onBeforeShadow(o,V,P,K,ut,Tt,q),o.renderBufferDirect(K,null,ut,Tt,V,q),V.onAfterShadow(o,V,P,K,ut,Tt,q)}}}else if(ht.visible){const _t=z(V,ht,D,R);V.onBeforeShadow(o,V,P,K,ut,_t,null),o.renderBufferDirect(K,null,ut,_t,V,null),V.onAfterShadow(o,V,P,K,ut,_t,null)}}const ft=V.children;for(let ut=0,ht=ft.length;ut<ht;ut++)U(ft[ut],P,K,D,R)}function J(V){V.target.removeEventListener("dispose",J);for(const K in p){const D=p[K],R=V.target.uuid;R in D&&(D[R].dispose(),delete D[R])}}}const nA={[Ch]:wh,[Dh]:Nh,[Uh]:Oh,[ys]:Lh,[wh]:Ch,[Nh]:Dh,[Oh]:Uh,[Lh]:ys};function iA(o,e){function i(){let k=!1;const wt=new Ke;let ct=null;const vt=new Ke(0,0,0,0);return{setMask:function(Dt){ct!==Dt&&!k&&(o.colorMask(Dt,Dt,Dt,Dt),ct=Dt)},setLocked:function(Dt){k=Dt},setClear:function(Dt,Ut,Qt,ke,sn){sn===!0&&(Dt*=ke,Ut*=ke,Qt*=ke),wt.set(Dt,Ut,Qt,ke),vt.equals(wt)===!1&&(o.clearColor(Dt,Ut,Qt,ke),vt.copy(wt))},reset:function(){k=!1,ct=null,vt.set(-1,0,0,0)}}}function r(){let k=!1,wt=!1,ct=null,vt=null,Dt=null;return{setReversed:function(Ut){if(wt!==Ut){const Qt=e.get("EXT_clip_control");wt?Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.ZERO_TO_ONE_EXT):Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.NEGATIVE_ONE_TO_ONE_EXT);const ke=Dt;Dt=null,this.setClear(ke)}wt=Ut},getReversed:function(){return wt},setTest:function(Ut){Ut?St(o.DEPTH_TEST):Pt(o.DEPTH_TEST)},setMask:function(Ut){ct!==Ut&&!k&&(o.depthMask(Ut),ct=Ut)},setFunc:function(Ut){if(wt&&(Ut=nA[Ut]),vt!==Ut){switch(Ut){case Ch:o.depthFunc(o.NEVER);break;case wh:o.depthFunc(o.ALWAYS);break;case Dh:o.depthFunc(o.LESS);break;case ys:o.depthFunc(o.LEQUAL);break;case Uh:o.depthFunc(o.EQUAL);break;case Lh:o.depthFunc(o.GEQUAL);break;case Nh:o.depthFunc(o.GREATER);break;case Oh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}vt=Ut}},setLocked:function(Ut){k=Ut},setClear:function(Ut){Dt!==Ut&&(wt&&(Ut=1-Ut),o.clearDepth(Ut),Dt=Ut)},reset:function(){k=!1,ct=null,vt=null,Dt=null,wt=!1}}}function l(){let k=!1,wt=null,ct=null,vt=null,Dt=null,Ut=null,Qt=null,ke=null,sn=null;return{setTest:function(Me){k||(Me?St(o.STENCIL_TEST):Pt(o.STENCIL_TEST))},setMask:function(Me){wt!==Me&&!k&&(o.stencilMask(Me),wt=Me)},setFunc:function(Me,mn,hi){(ct!==Me||vt!==mn||Dt!==hi)&&(o.stencilFunc(Me,mn,hi),ct=Me,vt=mn,Dt=hi)},setOp:function(Me,mn,hi){(Ut!==Me||Qt!==mn||ke!==hi)&&(o.stencilOp(Me,mn,hi),Ut=Me,Qt=mn,ke=hi)},setLocked:function(Me){k=Me},setClear:function(Me){sn!==Me&&(o.clearStencil(Me),sn=Me)},reset:function(){k=!1,wt=null,ct=null,vt=null,Dt=null,Ut=null,Qt=null,ke=null,sn=null}}}const c=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let v={},S={},x=new WeakMap,M=[],A=null,C=!1,y=null,_=null,I=null,z=null,U=null,J=null,V=null,P=new we(0,0,0),K=0,D=!1,R=null,H=null,ft=null,ut=null,ht=null;const _t=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,Q=0;const q=o.getParameter(o.VERSION);q.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(q)[1]),O=Q>=1):q.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),O=Q>=2);let yt=null,Tt={};const N=o.getParameter(o.SCISSOR_BOX),at=o.getParameter(o.VIEWPORT),xt=new Ke().fromArray(N),j=new Ke().fromArray(at);function pt(k,wt,ct,vt){const Dt=new Uint8Array(4),Ut=o.createTexture();o.bindTexture(k,Ut),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Qt=0;Qt<ct;Qt++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(wt,0,o.RGBA,1,1,vt,0,o.RGBA,o.UNSIGNED_BYTE,Dt):o.texImage2D(wt+Qt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Dt);return Ut}const Mt={};Mt[o.TEXTURE_2D]=pt(o.TEXTURE_2D,o.TEXTURE_2D,1),Mt[o.TEXTURE_CUBE_MAP]=pt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[o.TEXTURE_2D_ARRAY]=pt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Mt[o.TEXTURE_3D]=pt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),St(o.DEPTH_TEST),h.setFunc(ys),le(!1),he(h_),St(o.CULL_FACE),F(Ga);function St(k){v[k]!==!0&&(o.enable(k),v[k]=!0)}function Pt(k){v[k]!==!1&&(o.disable(k),v[k]=!1)}function It(k,wt){return S[k]!==wt?(o.bindFramebuffer(k,wt),S[k]=wt,k===o.DRAW_FRAMEBUFFER&&(S[o.FRAMEBUFFER]=wt),k===o.FRAMEBUFFER&&(S[o.DRAW_FRAMEBUFFER]=wt),!0):!1}function te(k,wt){let ct=M,vt=!1;if(k){ct=x.get(wt),ct===void 0&&(ct=[],x.set(wt,ct));const Dt=k.textures;if(ct.length!==Dt.length||ct[0]!==o.COLOR_ATTACHMENT0){for(let Ut=0,Qt=Dt.length;Ut<Qt;Ut++)ct[Ut]=o.COLOR_ATTACHMENT0+Ut;ct.length=Dt.length,vt=!0}}else ct[0]!==o.BACK&&(ct[0]=o.BACK,vt=!0);vt&&o.drawBuffers(ct)}function De(k){return A!==k?(o.useProgram(k),A=k,!0):!1}const fe={[vr]:o.FUNC_ADD,[cx]:o.FUNC_SUBTRACT,[fx]:o.FUNC_REVERSE_SUBTRACT};fe[hx]=o.MIN,fe[dx]=o.MAX;const He={[px]:o.ZERO,[mx]:o.ONE,[gx]:o.SRC_COLOR,[Ah]:o.SRC_ALPHA,[Mx]:o.SRC_ALPHA_SATURATE,[xx]:o.DST_COLOR,[vx]:o.DST_ALPHA,[_x]:o.ONE_MINUS_SRC_COLOR,[Rh]:o.ONE_MINUS_SRC_ALPHA,[yx]:o.ONE_MINUS_DST_COLOR,[Sx]:o.ONE_MINUS_DST_ALPHA,[Ex]:o.CONSTANT_COLOR,[Tx]:o.ONE_MINUS_CONSTANT_COLOR,[bx]:o.CONSTANT_ALPHA,[Ax]:o.ONE_MINUS_CONSTANT_ALPHA};function F(k,wt,ct,vt,Dt,Ut,Qt,ke,sn,Me){if(k===Ga){C===!0&&(Pt(o.BLEND),C=!1);return}if(C===!1&&(St(o.BLEND),C=!0),k!==ux){if(k!==y||Me!==D){if((_!==vr||U!==vr)&&(o.blendEquation(o.FUNC_ADD),_=vr,U=vr),Me)switch(k){case vs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case bh:o.blendFunc(o.ONE,o.ONE);break;case d_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case p_:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case vs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case bh:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case d_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case p_:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}I=null,z=null,J=null,V=null,P.set(0,0,0),K=0,y=k,D=Me}return}Dt=Dt||wt,Ut=Ut||ct,Qt=Qt||vt,(wt!==_||Dt!==U)&&(o.blendEquationSeparate(fe[wt],fe[Dt]),_=wt,U=Dt),(ct!==I||vt!==z||Ut!==J||Qt!==V)&&(o.blendFuncSeparate(He[ct],He[vt],He[Ut],He[Qt]),I=ct,z=vt,J=Ut,V=Qt),(ke.equals(P)===!1||sn!==K)&&(o.blendColor(ke.r,ke.g,ke.b,sn),P.copy(ke),K=sn),y=k,D=!1}function fn(k,wt){k.side===ia?Pt(o.CULL_FACE):St(o.CULL_FACE);let ct=k.side===Vn;wt&&(ct=!ct),le(ct),k.blending===vs&&k.transparent===!1?F(Ga):F(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),c.setMask(k.colorWrite);const vt=k.stencilWrite;d.setTest(vt),vt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ee(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?St(o.SAMPLE_ALPHA_TO_COVERAGE):Pt(o.SAMPLE_ALPHA_TO_COVERAGE)}function le(k){R!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),R=k)}function he(k){k!==sx?(St(o.CULL_FACE),k!==H&&(k===h_?o.cullFace(o.BACK):k===ox?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Pt(o.CULL_FACE),H=k}function Gt(k){k!==ft&&(O&&o.lineWidth(k),ft=k)}function Ee(k,wt,ct){k?(St(o.POLYGON_OFFSET_FILL),(ut!==wt||ht!==ct)&&(o.polygonOffset(wt,ct),ut=wt,ht=ct)):Pt(o.POLYGON_OFFSET_FILL)}function Xt(k){k?St(o.SCISSOR_TEST):Pt(o.SCISSOR_TEST)}function L(k){k===void 0&&(k=o.TEXTURE0+_t-1),yt!==k&&(o.activeTexture(k),yt=k)}function T(k,wt,ct){ct===void 0&&(yt===null?ct=o.TEXTURE0+_t-1:ct=yt);let vt=Tt[ct];vt===void 0&&(vt={type:void 0,texture:void 0},Tt[ct]=vt),(vt.type!==k||vt.texture!==wt)&&(yt!==ct&&(o.activeTexture(ct),yt=ct),o.bindTexture(k,wt||Mt[k]),vt.type=k,vt.texture=wt)}function Y(){const k=Tt[yt];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function w(){try{o.compressedTexImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $(){try{o.compressedTexImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function tt(){try{o.texSubImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Rt(){try{o.texSubImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Et(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ct(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ue(){try{o.texStorage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function bt(){try{o.texStorage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ft(){try{o.texImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Wt(){try{o.texImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function kt(k){xt.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),xt.copy(k))}function zt(k){j.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),j.copy(k))}function Kt(k,wt){let ct=p.get(wt);ct===void 0&&(ct=new WeakMap,p.set(wt,ct));let vt=ct.get(k);vt===void 0&&(vt=o.getUniformBlockIndex(wt,k.name),ct.set(k,vt))}function ie(k,wt){const vt=p.get(wt).get(k);m.get(wt)!==vt&&(o.uniformBlockBinding(wt,vt,k.__bindingPointIndex),m.set(wt,vt))}function Ne(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},yt=null,Tt={},S={},x=new WeakMap,M=[],A=null,C=!1,y=null,_=null,I=null,z=null,U=null,J=null,V=null,P=new we(0,0,0),K=0,D=!1,R=null,H=null,ft=null,ut=null,ht=null,xt.set(0,0,o.canvas.width,o.canvas.height),j.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:St,disable:Pt,bindFramebuffer:It,drawBuffers:te,useProgram:De,setBlending:F,setMaterial:fn,setFlipSided:le,setCullFace:he,setLineWidth:Gt,setPolygonOffset:Ee,setScissorTest:Xt,activeTexture:L,bindTexture:T,unbindTexture:Y,compressedTexImage2D:w,compressedTexImage3D:$,texImage2D:Ft,texImage3D:Wt,updateUBOMapping:Kt,uniformBlockBinding:ie,texStorage2D:ue,texStorage3D:bt,texSubImage2D:tt,texSubImage3D:Rt,compressedTexSubImage2D:Et,compressedTexSubImage3D:Ct,scissor:kt,viewport:zt,reset:Ne}}function aA(o,e,i,r,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new re,v=new WeakMap;let S;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(L,T){return M?new OffscreenCanvas(L,T):Cu("canvas")}function C(L,T,Y){let w=1;const $=Xt(L);if(($.width>Y||$.height>Y)&&(w=Y/Math.max($.width,$.height)),w<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const tt=Math.floor(w*$.width),Rt=Math.floor(w*$.height);S===void 0&&(S=A(tt,Rt));const Et=T?A(tt,Rt):S;return Et.width=tt,Et.height=Rt,Et.getContext("2d").drawImage(L,0,0,tt,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+tt+"x"+Rt+")."),Et}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),L;return L}function y(L){return L.generateMipmaps}function _(L){o.generateMipmap(L)}function I(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function z(L,T,Y,w,$=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let tt=T;if(T===o.RED&&(Y===o.FLOAT&&(tt=o.R32F),Y===o.HALF_FLOAT&&(tt=o.R16F),Y===o.UNSIGNED_BYTE&&(tt=o.R8)),T===o.RED_INTEGER&&(Y===o.UNSIGNED_BYTE&&(tt=o.R8UI),Y===o.UNSIGNED_SHORT&&(tt=o.R16UI),Y===o.UNSIGNED_INT&&(tt=o.R32UI),Y===o.BYTE&&(tt=o.R8I),Y===o.SHORT&&(tt=o.R16I),Y===o.INT&&(tt=o.R32I)),T===o.RG&&(Y===o.FLOAT&&(tt=o.RG32F),Y===o.HALF_FLOAT&&(tt=o.RG16F),Y===o.UNSIGNED_BYTE&&(tt=o.RG8)),T===o.RG_INTEGER&&(Y===o.UNSIGNED_BYTE&&(tt=o.RG8UI),Y===o.UNSIGNED_SHORT&&(tt=o.RG16UI),Y===o.UNSIGNED_INT&&(tt=o.RG32UI),Y===o.BYTE&&(tt=o.RG8I),Y===o.SHORT&&(tt=o.RG16I),Y===o.INT&&(tt=o.RG32I)),T===o.RGB_INTEGER&&(Y===o.UNSIGNED_BYTE&&(tt=o.RGB8UI),Y===o.UNSIGNED_SHORT&&(tt=o.RGB16UI),Y===o.UNSIGNED_INT&&(tt=o.RGB32UI),Y===o.BYTE&&(tt=o.RGB8I),Y===o.SHORT&&(tt=o.RGB16I),Y===o.INT&&(tt=o.RGB32I)),T===o.RGBA_INTEGER&&(Y===o.UNSIGNED_BYTE&&(tt=o.RGBA8UI),Y===o.UNSIGNED_SHORT&&(tt=o.RGBA16UI),Y===o.UNSIGNED_INT&&(tt=o.RGBA32UI),Y===o.BYTE&&(tt=o.RGBA8I),Y===o.SHORT&&(tt=o.RGBA16I),Y===o.INT&&(tt=o.RGBA32I)),T===o.RGB&&Y===o.UNSIGNED_INT_5_9_9_9_REV&&(tt=o.RGB9_E5),T===o.RGBA){const Rt=$?Au:Re.getTransfer(w);Y===o.FLOAT&&(tt=o.RGBA32F),Y===o.HALF_FLOAT&&(tt=o.RGBA16F),Y===o.UNSIGNED_BYTE&&(tt=Rt===Fe?o.SRGB8_ALPHA8:o.RGBA8),Y===o.UNSIGNED_SHORT_4_4_4_4&&(tt=o.RGBA4),Y===o.UNSIGNED_SHORT_5_5_5_1&&(tt=o.RGB5_A1)}return(tt===o.R16F||tt===o.R32F||tt===o.RG16F||tt===o.RG32F||tt===o.RGBA16F||tt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),tt}function U(L,T){let Y;return L?T===null||T===Mr||T===Ts?Y=o.DEPTH24_STENCIL8:T===Li?Y=o.DEPTH32F_STENCIL8:T===No&&(Y=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Mr||T===Ts?Y=o.DEPTH_COMPONENT24:T===Li?Y=o.DEPTH_COMPONENT32F:T===No&&(Y=o.DEPTH_COMPONENT16),Y}function J(L,T){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==$n&&L.minFilter!==Gn?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function V(L){const T=L.target;T.removeEventListener("dispose",V),K(T),T.isVideoTexture&&v.delete(T)}function P(L){const T=L.target;T.removeEventListener("dispose",P),R(T)}function K(L){const T=r.get(L);if(T.__webglInit===void 0)return;const Y=L.source,w=x.get(Y);if(w){const $=w[T.__cacheKey];$.usedTimes--,$.usedTimes===0&&D(L),Object.keys(w).length===0&&x.delete(Y)}r.remove(L)}function D(L){const T=r.get(L);o.deleteTexture(T.__webglTexture);const Y=L.source,w=x.get(Y);delete w[T.__cacheKey],h.memory.textures--}function R(L){const T=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let w=0;w<6;w++){if(Array.isArray(T.__webglFramebuffer[w]))for(let $=0;$<T.__webglFramebuffer[w].length;$++)o.deleteFramebuffer(T.__webglFramebuffer[w][$]);else o.deleteFramebuffer(T.__webglFramebuffer[w]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[w])}else{if(Array.isArray(T.__webglFramebuffer))for(let w=0;w<T.__webglFramebuffer.length;w++)o.deleteFramebuffer(T.__webglFramebuffer[w]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let w=0;w<T.__webglColorRenderbuffer.length;w++)T.__webglColorRenderbuffer[w]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[w]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Y=L.textures;for(let w=0,$=Y.length;w<$;w++){const tt=r.get(Y[w]);tt.__webglTexture&&(o.deleteTexture(tt.__webglTexture),h.memory.textures--),r.remove(Y[w])}r.remove(L)}let H=0;function ft(){H=0}function ut(){const L=H;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),H+=1,L}function ht(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function _t(L,T){const Y=r.get(L);if(L.isVideoTexture&&Gt(L),L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){const w=L.image;if(w===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(w.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(Y,L,T);return}}i.bindTexture(o.TEXTURE_2D,Y.__webglTexture,o.TEXTURE0+T)}function O(L,T){const Y=r.get(L);if(L.version>0&&Y.__version!==L.version){j(Y,L,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,Y.__webglTexture,o.TEXTURE0+T)}function Q(L,T){const Y=r.get(L);if(L.version>0&&Y.__version!==L.version){j(Y,L,T);return}i.bindTexture(o.TEXTURE_3D,Y.__webglTexture,o.TEXTURE0+T)}function q(L,T){const Y=r.get(L);if(L.version>0&&Y.__version!==L.version){pt(Y,L,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,Y.__webglTexture,o.TEXTURE0+T)}const yt={[Bh]:o.REPEAT,[Ei]:o.CLAMP_TO_EDGE,[Fh]:o.MIRRORED_REPEAT},Tt={[$n]:o.NEAREST,[Px]:o.NEAREST_MIPMAP_NEAREST,[jl]:o.NEAREST_MIPMAP_LINEAR,[Gn]:o.LINEAR,[Zf]:o.LINEAR_MIPMAP_NEAREST,[xr]:o.LINEAR_MIPMAP_LINEAR},N={[Gx]:o.NEVER,[Yx]:o.ALWAYS,[Vx]:o.LESS,[bv]:o.LEQUAL,[Xx]:o.EQUAL,[qx]:o.GEQUAL,[kx]:o.GREATER,[Wx]:o.NOTEQUAL};function at(L,T){if(T.type===Li&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Gn||T.magFilter===Zf||T.magFilter===jl||T.magFilter===xr||T.minFilter===Gn||T.minFilter===Zf||T.minFilter===jl||T.minFilter===xr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,yt[T.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,yt[T.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,yt[T.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,Tt[T.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,Tt[T.minFilter]),T.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,N[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===$n||T.minFilter!==jl&&T.minFilter!==xr||T.type===Li&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");o.texParameterf(L,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function xt(L,T){let Y=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",V));const w=T.source;let $=x.get(w);$===void 0&&($={},x.set(w,$));const tt=ht(T);if(tt!==L.__cacheKey){$[tt]===void 0&&($[tt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,Y=!0),$[tt].usedTimes++;const Rt=$[L.__cacheKey];Rt!==void 0&&($[L.__cacheKey].usedTimes--,Rt.usedTimes===0&&D(T)),L.__cacheKey=tt,L.__webglTexture=$[tt].texture}return Y}function j(L,T,Y){let w=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(w=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(w=o.TEXTURE_3D);const $=xt(L,T),tt=T.source;i.bindTexture(w,L.__webglTexture,o.TEXTURE0+Y);const Rt=r.get(tt);if(tt.version!==Rt.__version||$===!0){i.activeTexture(o.TEXTURE0+Y);const Et=Re.getPrimaries(Re.workingColorSpace),Ct=T.colorSpace===Ha?null:Re.getPrimaries(T.colorSpace),ue=T.colorSpace===Ha||Et===Ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let bt=C(T.image,!1,l.maxTextureSize);bt=Ee(T,bt);const Ft=c.convert(T.format,T.colorSpace),Wt=c.convert(T.type);let kt=z(T.internalFormat,Ft,Wt,T.colorSpace,T.isVideoTexture);at(w,T);let zt;const Kt=T.mipmaps,ie=T.isVideoTexture!==!0,Ne=Rt.__version===void 0||$===!0,k=tt.dataReady,wt=J(T,bt);if(T.isDepthTexture)kt=U(T.format===bs,T.type),Ne&&(ie?i.texStorage2D(o.TEXTURE_2D,1,kt,bt.width,bt.height):i.texImage2D(o.TEXTURE_2D,0,kt,bt.width,bt.height,0,Ft,Wt,null));else if(T.isDataTexture)if(Kt.length>0){ie&&Ne&&i.texStorage2D(o.TEXTURE_2D,wt,kt,Kt[0].width,Kt[0].height);for(let ct=0,vt=Kt.length;ct<vt;ct++)zt=Kt[ct],ie?k&&i.texSubImage2D(o.TEXTURE_2D,ct,0,0,zt.width,zt.height,Ft,Wt,zt.data):i.texImage2D(o.TEXTURE_2D,ct,kt,zt.width,zt.height,0,Ft,Wt,zt.data);T.generateMipmaps=!1}else ie?(Ne&&i.texStorage2D(o.TEXTURE_2D,wt,kt,bt.width,bt.height),k&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,bt.width,bt.height,Ft,Wt,bt.data)):i.texImage2D(o.TEXTURE_2D,0,kt,bt.width,bt.height,0,Ft,Wt,bt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ie&&Ne&&i.texStorage3D(o.TEXTURE_2D_ARRAY,wt,kt,Kt[0].width,Kt[0].height,bt.depth);for(let ct=0,vt=Kt.length;ct<vt;ct++)if(zt=Kt[ct],T.format!==ci)if(Ft!==null)if(ie){if(k)if(T.layerUpdates.size>0){const Dt=G_(zt.width,zt.height,T.format,T.type);for(const Ut of T.layerUpdates){const Qt=zt.data.subarray(Ut*Dt/zt.data.BYTES_PER_ELEMENT,(Ut+1)*Dt/zt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ct,0,0,Ut,zt.width,zt.height,1,Ft,Qt)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ct,0,0,0,zt.width,zt.height,bt.depth,Ft,zt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ct,kt,zt.width,zt.height,bt.depth,0,zt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?k&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,ct,0,0,0,zt.width,zt.height,bt.depth,Ft,Wt,zt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,ct,kt,zt.width,zt.height,bt.depth,0,Ft,Wt,zt.data)}else{ie&&Ne&&i.texStorage2D(o.TEXTURE_2D,wt,kt,Kt[0].width,Kt[0].height);for(let ct=0,vt=Kt.length;ct<vt;ct++)zt=Kt[ct],T.format!==ci?Ft!==null?ie?k&&i.compressedTexSubImage2D(o.TEXTURE_2D,ct,0,0,zt.width,zt.height,Ft,zt.data):i.compressedTexImage2D(o.TEXTURE_2D,ct,kt,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?k&&i.texSubImage2D(o.TEXTURE_2D,ct,0,0,zt.width,zt.height,Ft,Wt,zt.data):i.texImage2D(o.TEXTURE_2D,ct,kt,zt.width,zt.height,0,Ft,Wt,zt.data)}else if(T.isDataArrayTexture)if(ie){if(Ne&&i.texStorage3D(o.TEXTURE_2D_ARRAY,wt,kt,bt.width,bt.height,bt.depth),k)if(T.layerUpdates.size>0){const ct=G_(bt.width,bt.height,T.format,T.type);for(const vt of T.layerUpdates){const Dt=bt.data.subarray(vt*ct/bt.data.BYTES_PER_ELEMENT,(vt+1)*ct/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,vt,bt.width,bt.height,1,Ft,Wt,Dt)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Ft,Wt,bt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,kt,bt.width,bt.height,bt.depth,0,Ft,Wt,bt.data);else if(T.isData3DTexture)ie?(Ne&&i.texStorage3D(o.TEXTURE_3D,wt,kt,bt.width,bt.height,bt.depth),k&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Ft,Wt,bt.data)):i.texImage3D(o.TEXTURE_3D,0,kt,bt.width,bt.height,bt.depth,0,Ft,Wt,bt.data);else if(T.isFramebufferTexture){if(Ne)if(ie)i.texStorage2D(o.TEXTURE_2D,wt,kt,bt.width,bt.height);else{let ct=bt.width,vt=bt.height;for(let Dt=0;Dt<wt;Dt++)i.texImage2D(o.TEXTURE_2D,Dt,kt,ct,vt,0,Ft,Wt,null),ct>>=1,vt>>=1}}else if(Kt.length>0){if(ie&&Ne){const ct=Xt(Kt[0]);i.texStorage2D(o.TEXTURE_2D,wt,kt,ct.width,ct.height)}for(let ct=0,vt=Kt.length;ct<vt;ct++)zt=Kt[ct],ie?k&&i.texSubImage2D(o.TEXTURE_2D,ct,0,0,Ft,Wt,zt):i.texImage2D(o.TEXTURE_2D,ct,kt,Ft,Wt,zt);T.generateMipmaps=!1}else if(ie){if(Ne){const ct=Xt(bt);i.texStorage2D(o.TEXTURE_2D,wt,kt,ct.width,ct.height)}k&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ft,Wt,bt)}else i.texImage2D(o.TEXTURE_2D,0,kt,Ft,Wt,bt);y(T)&&_(w),Rt.__version=tt.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function pt(L,T,Y){if(T.image.length!==6)return;const w=xt(L,T),$=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+Y);const tt=r.get($);if($.version!==tt.__version||w===!0){i.activeTexture(o.TEXTURE0+Y);const Rt=Re.getPrimaries(Re.workingColorSpace),Et=T.colorSpace===Ha?null:Re.getPrimaries(T.colorSpace),Ct=T.colorSpace===Ha||Rt===Et?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);const ue=T.isCompressedTexture||T.image[0].isCompressedTexture,bt=T.image[0]&&T.image[0].isDataTexture,Ft=[];for(let vt=0;vt<6;vt++)!ue&&!bt?Ft[vt]=C(T.image[vt],!0,l.maxCubemapSize):Ft[vt]=bt?T.image[vt].image:T.image[vt],Ft[vt]=Ee(T,Ft[vt]);const Wt=Ft[0],kt=c.convert(T.format,T.colorSpace),zt=c.convert(T.type),Kt=z(T.internalFormat,kt,zt,T.colorSpace),ie=T.isVideoTexture!==!0,Ne=tt.__version===void 0||w===!0,k=$.dataReady;let wt=J(T,Wt);at(o.TEXTURE_CUBE_MAP,T);let ct;if(ue){ie&&Ne&&i.texStorage2D(o.TEXTURE_CUBE_MAP,wt,Kt,Wt.width,Wt.height);for(let vt=0;vt<6;vt++){ct=Ft[vt].mipmaps;for(let Dt=0;Dt<ct.length;Dt++){const Ut=ct[Dt];T.format!==ci?kt!==null?ie?k&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt,0,0,Ut.width,Ut.height,kt,Ut.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt,Kt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ie?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt,0,0,Ut.width,Ut.height,kt,zt,Ut.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt,Kt,Ut.width,Ut.height,0,kt,zt,Ut.data)}}}else{if(ct=T.mipmaps,ie&&Ne){ct.length>0&&wt++;const vt=Xt(Ft[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,wt,Kt,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(bt){ie?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Ft[vt].width,Ft[vt].height,kt,zt,Ft[vt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,Kt,Ft[vt].width,Ft[vt].height,0,kt,zt,Ft[vt].data);for(let Dt=0;Dt<ct.length;Dt++){const Qt=ct[Dt].image[vt].image;ie?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt+1,0,0,Qt.width,Qt.height,kt,zt,Qt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt+1,Kt,Qt.width,Qt.height,0,kt,zt,Qt.data)}}else{ie?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,kt,zt,Ft[vt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,Kt,kt,zt,Ft[vt]);for(let Dt=0;Dt<ct.length;Dt++){const Ut=ct[Dt];ie?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt+1,0,0,kt,zt,Ut.image[vt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt+1,Kt,kt,zt,Ut.image[vt])}}}y(T)&&_(o.TEXTURE_CUBE_MAP),tt.__version=$.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Mt(L,T,Y,w,$,tt){const Rt=c.convert(Y.format,Y.colorSpace),Et=c.convert(Y.type),Ct=z(Y.internalFormat,Rt,Et,Y.colorSpace),ue=r.get(T),bt=r.get(Y);if(bt.__renderTarget=T,!ue.__hasExternalTextures){const Ft=Math.max(1,T.width>>tt),Wt=Math.max(1,T.height>>tt);$===o.TEXTURE_3D||$===o.TEXTURE_2D_ARRAY?i.texImage3D($,tt,Ct,Ft,Wt,T.depth,0,Rt,Et,null):i.texImage2D($,tt,Ct,Ft,Wt,0,Rt,Et,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),he(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,w,$,bt.__webglTexture,0,le(T)):($===o.TEXTURE_2D||$>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,w,$,bt.__webglTexture,tt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function St(L,T,Y){if(o.bindRenderbuffer(o.RENDERBUFFER,L),T.depthBuffer){const w=T.depthTexture,$=w&&w.isDepthTexture?w.type:null,tt=U(T.stencilBuffer,$),Rt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Et=le(T);he(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Et,tt,T.width,T.height):Y?o.renderbufferStorageMultisample(o.RENDERBUFFER,Et,tt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,tt,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Rt,o.RENDERBUFFER,L)}else{const w=T.textures;for(let $=0;$<w.length;$++){const tt=w[$],Rt=c.convert(tt.format,tt.colorSpace),Et=c.convert(tt.type),Ct=z(tt.internalFormat,Rt,Et,tt.colorSpace),ue=le(T);Y&&he(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ue,Ct,T.width,T.height):he(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ue,Ct,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Ct,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Pt(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const w=r.get(T.depthTexture);w.__renderTarget=T,(!w.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),_t(T.depthTexture,0);const $=w.__webglTexture,tt=le(T);if(T.depthTexture.format===Ss)he(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,$,0,tt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,$,0);else if(T.depthTexture.format===bs)he(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,$,0,tt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function It(L){const T=r.get(L),Y=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const w=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),w){const $=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,w.removeEventListener("dispose",$)};w.addEventListener("dispose",$),T.__depthDisposeCallback=$}T.__boundDepthTexture=w}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Pt(T.__webglFramebuffer,L)}else if(Y){T.__webglDepthbuffer=[];for(let w=0;w<6;w++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[w]),T.__webglDepthbuffer[w]===void 0)T.__webglDepthbuffer[w]=o.createRenderbuffer(),St(T.__webglDepthbuffer[w],L,!1);else{const $=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,tt=T.__webglDepthbuffer[w];o.bindRenderbuffer(o.RENDERBUFFER,tt),o.framebufferRenderbuffer(o.FRAMEBUFFER,$,o.RENDERBUFFER,tt)}}else if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),St(T.__webglDepthbuffer,L,!1);else{const w=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,$=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,$),o.framebufferRenderbuffer(o.FRAMEBUFFER,w,o.RENDERBUFFER,$)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function te(L,T,Y){const w=r.get(L);T!==void 0&&Mt(w.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Y!==void 0&&It(L)}function De(L){const T=L.texture,Y=r.get(L),w=r.get(T);L.addEventListener("dispose",P);const $=L.textures,tt=L.isWebGLCubeRenderTarget===!0,Rt=$.length>1;if(Rt||(w.__webglTexture===void 0&&(w.__webglTexture=o.createTexture()),w.__version=T.version,h.memory.textures++),tt){Y.__webglFramebuffer=[];for(let Et=0;Et<6;Et++)if(T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer[Et]=[];for(let Ct=0;Ct<T.mipmaps.length;Ct++)Y.__webglFramebuffer[Et][Ct]=o.createFramebuffer()}else Y.__webglFramebuffer[Et]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Et=0;Et<T.mipmaps.length;Et++)Y.__webglFramebuffer[Et]=o.createFramebuffer()}else Y.__webglFramebuffer=o.createFramebuffer();if(Rt)for(let Et=0,Ct=$.length;Et<Ct;Et++){const ue=r.get($[Et]);ue.__webglTexture===void 0&&(ue.__webglTexture=o.createTexture(),h.memory.textures++)}if(L.samples>0&&he(L)===!1){Y.__webglMultisampledFramebuffer=o.createFramebuffer(),Y.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Et=0;Et<$.length;Et++){const Ct=$[Et];Y.__webglColorRenderbuffer[Et]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Y.__webglColorRenderbuffer[Et]);const ue=c.convert(Ct.format,Ct.colorSpace),bt=c.convert(Ct.type),Ft=z(Ct.internalFormat,ue,bt,Ct.colorSpace,L.isXRRenderTarget===!0),Wt=le(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,Wt,Ft,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Et,o.RENDERBUFFER,Y.__webglColorRenderbuffer[Et])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(Y.__webglDepthRenderbuffer=o.createRenderbuffer(),St(Y.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(tt){i.bindTexture(o.TEXTURE_CUBE_MAP,w.__webglTexture),at(o.TEXTURE_CUBE_MAP,T);for(let Et=0;Et<6;Et++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ct=0;Ct<T.mipmaps.length;Ct++)Mt(Y.__webglFramebuffer[Et][Ct],L,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Ct);else Mt(Y.__webglFramebuffer[Et],L,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0);y(T)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Rt){for(let Et=0,Ct=$.length;Et<Ct;Et++){const ue=$[Et],bt=r.get(ue);i.bindTexture(o.TEXTURE_2D,bt.__webglTexture),at(o.TEXTURE_2D,ue),Mt(Y.__webglFramebuffer,L,ue,o.COLOR_ATTACHMENT0+Et,o.TEXTURE_2D,0),y(ue)&&_(o.TEXTURE_2D)}i.unbindTexture()}else{let Et=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Et=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Et,w.__webglTexture),at(Et,T),T.mipmaps&&T.mipmaps.length>0)for(let Ct=0;Ct<T.mipmaps.length;Ct++)Mt(Y.__webglFramebuffer[Ct],L,T,o.COLOR_ATTACHMENT0,Et,Ct);else Mt(Y.__webglFramebuffer,L,T,o.COLOR_ATTACHMENT0,Et,0);y(T)&&_(Et),i.unbindTexture()}L.depthBuffer&&It(L)}function fe(L){const T=L.textures;for(let Y=0,w=T.length;Y<w;Y++){const $=T[Y];if(y($)){const tt=I(L),Rt=r.get($).__webglTexture;i.bindTexture(tt,Rt),_(tt),i.unbindTexture()}}}const He=[],F=[];function fn(L){if(L.samples>0){if(he(L)===!1){const T=L.textures,Y=L.width,w=L.height;let $=o.COLOR_BUFFER_BIT;const tt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Rt=r.get(L),Et=T.length>1;if(Et)for(let Ct=0;Ct<T.length;Ct++)i.bindFramebuffer(o.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Rt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let Ct=0;Ct<T.length;Ct++){if(L.resolveDepthBuffer&&(L.depthBuffer&&($|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&($|=o.STENCIL_BUFFER_BIT)),Et){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Rt.__webglColorRenderbuffer[Ct]);const ue=r.get(T[Ct]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ue,0)}o.blitFramebuffer(0,0,Y,w,0,0,Y,w,$,o.NEAREST),m===!0&&(He.length=0,F.length=0,He.push(o.COLOR_ATTACHMENT0+Ct),L.depthBuffer&&L.resolveDepthBuffer===!1&&(He.push(tt),F.push(tt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,F)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,He))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Et)for(let Ct=0;Ct<T.length;Ct++){i.bindFramebuffer(o.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.RENDERBUFFER,Rt.__webglColorRenderbuffer[Ct]);const ue=r.get(T[Ct]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Rt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.TEXTURE_2D,ue,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const T=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function le(L){return Math.min(l.maxSamples,L.samples)}function he(L){const T=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Gt(L){const T=h.render.frame;v.get(L)!==T&&(v.set(L,T),L.update())}function Ee(L,T){const Y=L.colorSpace,w=L.format,$=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Y!==As&&Y!==Ha&&(Re.getTransfer(Y)===Fe?(w!==ci||$!==oa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),T}function Xt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=ut,this.resetTextureUnits=ft,this.setTexture2D=_t,this.setTexture2DArray=O,this.setTexture3D=Q,this.setTextureCube=q,this.rebindTextures=te,this.setupRenderTarget=De,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=fn,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=he}function rA(o,e){function i(r,l=Ha){let c;const h=Re.getTransfer(l);if(r===oa)return o.UNSIGNED_BYTE;if(r===gd)return o.UNSIGNED_SHORT_4_4_4_4;if(r===_d)return o.UNSIGNED_SHORT_5_5_5_1;if(r===_v)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===mv)return o.BYTE;if(r===gv)return o.SHORT;if(r===No)return o.UNSIGNED_SHORT;if(r===md)return o.INT;if(r===Mr)return o.UNSIGNED_INT;if(r===Li)return o.FLOAT;if(r===Cs)return o.HALF_FLOAT;if(r===vv)return o.ALPHA;if(r===Sv)return o.RGB;if(r===ci)return o.RGBA;if(r===xv)return o.LUMINANCE;if(r===yv)return o.LUMINANCE_ALPHA;if(r===Ss)return o.DEPTH_COMPONENT;if(r===bs)return o.DEPTH_STENCIL;if(r===Mv)return o.RED;if(r===vd)return o.RED_INTEGER;if(r===Ev)return o.RG;if(r===Sd)return o.RG_INTEGER;if(r===xd)return o.RGBA_INTEGER;if(r===xu||r===yu||r===Mu||r===Eu)if(h===Fe)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===xu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===yu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Mu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===xu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===yu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Mu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Eu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ih||r===Hh||r===Gh||r===Vh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Ih)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Hh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Gh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Vh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Xh||r===kh||r===Wh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Xh||r===kh)return h===Fe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Wh)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===qh||r===Yh||r===Zh||r===jh||r===Kh||r===Qh||r===Jh||r===$h||r===td||r===ed||r===nd||r===id||r===ad||r===rd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===qh)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Yh)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Zh)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===jh)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Kh)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Qh)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Jh)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===$h)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===td)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ed)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===nd)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===id)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ad)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===rd)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Tu||r===sd||r===od)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Tu)return h===Fe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===sd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===od)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Tv||r===ld||r===ud||r===cd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Tu)return c.COMPRESSED_RED_RGTC1_EXT;if(r===ld)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ud)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===cd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ts?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const sA={type:"move"};class Th{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ot,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ot),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ot,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ot),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const C of e.hand.values()){const y=i.getJointPose(C,r),_=this._getHandJoint(p,C);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const v=p.joints["index-finger-tip"],S=p.joints["thumb-tip"],x=v.position.distanceTo(S.position),M=.02,A=.005;p.inputState.pinching&&x>M+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=M-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(sA)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new mu;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const oA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class uA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new Un,c=e.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new ua({vertexShader:oA,fragmentShader:lA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new fi(new yr(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cA extends ws{constructor(e,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,v=null,S=null,x=null,M=null,A=null;const C=new uA,y=i.getContextAttributes();let _=null,I=null;const z=[],U=[],J=new re;let V=null;const P=new yi;P.viewport=new Ke;const K=new yi;K.viewport=new Ke;const D=[P,K],R=new Dy;let H=null,ft=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let pt=z[j];return pt===void 0&&(pt=new Th,z[j]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(j){let pt=z[j];return pt===void 0&&(pt=new Th,z[j]=pt),pt.getGripSpace()},this.getHand=function(j){let pt=z[j];return pt===void 0&&(pt=new Th,z[j]=pt),pt.getHandSpace()};function ut(j){const pt=U.indexOf(j.inputSource);if(pt===-1)return;const Mt=z[pt];Mt!==void 0&&(Mt.update(j.inputSource,j.frame,p||h),Mt.dispatchEvent({type:j.type,data:j.inputSource}))}function ht(){l.removeEventListener("select",ut),l.removeEventListener("selectstart",ut),l.removeEventListener("selectend",ut),l.removeEventListener("squeeze",ut),l.removeEventListener("squeezestart",ut),l.removeEventListener("squeezeend",ut),l.removeEventListener("end",ht),l.removeEventListener("inputsourceschange",_t);for(let j=0;j<z.length;j++){const pt=U[j];pt!==null&&(U[j]=null,z[j].disconnect(pt))}H=null,ft=null,C.reset(),e.setRenderTarget(_),M=null,x=null,S=null,l=null,I=null,xt.stop(),r.isPresenting=!1,e.setPixelRatio(V),e.setSize(J.width,J.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){c=j,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){d=j,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(j){p=j},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return S},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(j){if(l=j,l!==null){if(_=e.getRenderTarget(),l.addEventListener("select",ut),l.addEventListener("selectstart",ut),l.addEventListener("selectend",ut),l.addEventListener("squeeze",ut),l.addEventListener("squeezestart",ut),l.addEventListener("squeezeend",ut),l.addEventListener("end",ht),l.addEventListener("inputsourceschange",_t),y.xrCompatible!==!0&&await i.makeXRCompatible(),V=e.getPixelRatio(),e.getSize(J),l.enabledFeatures!==void 0&&l.enabledFeatures.includes("layers")){let Mt=null,St=null,Pt=null;y.depth&&(Pt=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Mt=y.stencil?bs:Ss,St=y.stencil?Ts:Mr);const It={colorFormat:i.RGBA8,depthFormat:Pt,scaleFactor:c};S=new XRWebGLBinding(l,i),x=S.createProjectionLayer(It),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),I=new ka(x.textureWidth,x.textureHeight,{format:ci,type:oa,depthTexture:new Fv(x.textureWidth,x.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}else{const Mt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Mt),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),I=new ka(M.framebufferWidth,M.framebufferHeight,{format:ci,type:oa,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}I.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),xt.setContext(l),xt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function _t(j){for(let pt=0;pt<j.removed.length;pt++){const Mt=j.removed[pt],St=U.indexOf(Mt);St>=0&&(U[St]=null,z[St].disconnect(Mt))}for(let pt=0;pt<j.added.length;pt++){const Mt=j.added[pt];let St=U.indexOf(Mt);if(St===-1){for(let It=0;It<z.length;It++)if(It>=U.length){U.push(Mt),St=It;break}else if(U[It]===null){U[It]=Mt,St=It;break}if(St===-1)break}const Pt=z[St];Pt&&Pt.connect(Mt)}}const O=new ot,Q=new ot;function q(j,pt,Mt){O.setFromMatrixPosition(pt.matrixWorld),Q.setFromMatrixPosition(Mt.matrixWorld);const St=O.distanceTo(Q),Pt=pt.projectionMatrix.elements,It=Mt.projectionMatrix.elements,te=Pt[14]/(Pt[10]-1),De=Pt[14]/(Pt[10]+1),fe=(Pt[9]+1)/Pt[5],He=(Pt[9]-1)/Pt[5],F=(Pt[8]-1)/Pt[0],fn=(It[8]+1)/It[0],le=te*F,he=te*fn,Gt=St/(-F+fn),Ee=Gt*-F;if(pt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ee),j.translateZ(Gt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Pt[10]===-1)j.projectionMatrix.copy(pt.projectionMatrix),j.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const Xt=te+Gt,L=De+Gt,T=le-Ee,Y=he+(St-Ee),w=fe*De/L*Xt,$=He*De/L*Xt;j.projectionMatrix.makePerspective(T,Y,w,$,Xt,L),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function yt(j,pt){pt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(pt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(l===null)return;let pt=j.near,Mt=j.far;C.texture!==null&&(C.depthNear>0&&(pt=C.depthNear),C.depthFar>0&&(Mt=C.depthFar)),R.near=K.near=P.near=pt,R.far=K.far=P.far=Mt,(H!==R.near||ft!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),H=R.near,ft=R.far),P.layers.mask=j.layers.mask|2,K.layers.mask=j.layers.mask|4,R.layers.mask=P.layers.mask|K.layers.mask;const St=j.parent,Pt=R.cameras;yt(R,St);for(let It=0;It<Pt.length;It++)yt(Pt[It],St);Pt.length===2?q(R,P,K):R.projectionMatrix.copy(P.projectionMatrix),Tt(j,R,St)};function Tt(j,pt,Mt){Mt===null?j.matrix.copy(pt.matrixWorld):(j.matrix.copy(Mt.matrixWorld),j.matrix.invert(),j.matrix.multiply(pt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(pt.projectionMatrix),j.projectionMatrixInverse.copy(pt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=fd*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(j){m=j,x!==null&&(x.fixedFoveation=j),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=j)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(R)};let N=null;function at(j,pt){if(v=pt.getViewerPose(p||h),A=pt,v!==null){const Mt=v.views;M!==null&&(e.setRenderTargetFramebuffer(I,M.framebuffer),e.setRenderTarget(I));let St=!1;Mt.length!==R.cameras.length&&(R.cameras.length=0,St=!0);for(let It=0;It<Mt.length;It++){const te=Mt[It];let De=null;if(M!==null)De=M.getViewport(te);else{const He=S.getViewSubImage(x,te);De=He.viewport,It===0&&(e.setRenderTargetTextures(I,He.colorTexture,x.ignoreDepthValues?void 0:He.depthStencilTexture),e.setRenderTarget(I))}let fe=D[It];fe===void 0&&(fe=new yi,fe.layers.enable(It),fe.viewport=new Ke,D[It]=fe),fe.matrix.fromArray(te.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(te.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(De.x,De.y,De.width,De.height),It===0&&(R.matrix.copy(fe.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),St===!0&&R.cameras.push(fe)}const Pt=l.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")){const It=S.getDepthInformation(Mt[0]);It&&It.isValid&&It.texture&&C.init(e,It,l.renderState)}}for(let Mt=0;Mt<z.length;Mt++){const St=U[Mt],Pt=z[Mt];St!==null&&Pt!==void 0&&Pt.update(St,pt,p||h)}N&&N(j,pt),pt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pt}),A=null}const xt=new Iv;xt.setAnimationLoop(at),this.setAnimationLoop=function(j){N=j},this.dispose=function(){}}}const mr=new la,fA=new $e;function hA(o,e){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,zv(o)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,I,z,U){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(y,_):_.isMeshToonMaterial?(c(y,_),S(y,_)):_.isMeshPhongMaterial?(c(y,_),v(y,_)):_.isMeshStandardMaterial?(c(y,_),x(y,_),_.isMeshPhysicalMaterial&&M(y,_,U)):_.isMeshMatcapMaterial?(c(y,_),A(y,_)):_.isMeshDepthMaterial?c(y,_):_.isMeshDistanceMaterial?(c(y,_),C(y,_)):_.isMeshNormalMaterial?c(y,_):_.isLineBasicMaterial?(h(y,_),_.isLineDashedMaterial&&d(y,_)):_.isPointsMaterial?m(y,_,I,z):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Vn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Vn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const I=e.get(_),z=I.envMap,U=I.envMapRotation;z&&(y.envMap.value=z,mr.copy(U),mr.x*=-1,mr.y*=-1,mr.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),y.envMapRotation.value.setFromMatrix4(fA.makeRotationFromEuler(mr)),y.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function h(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function d(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function m(y,_,I,z){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*I,y.scale.value=z*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function v(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function S(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function M(y,_,I){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Vn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=I.texture,y.transmissionSamplerSize.value.set(I.width,I.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function A(y,_){_.matcap&&(y.matcap.value=_.matcap)}function C(y,_){const I=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(I.matrixWorld),y.nearDistance.value=I.shadow.camera.near,y.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function dA(o,e,i,r){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(I,z){const U=z.program;r.uniformBlockBinding(I,U)}function p(I,z){let U=l[I.id];U===void 0&&(A(I),U=v(I),l[I.id]=U,I.addEventListener("dispose",y));const J=z.program;r.updateUBOMapping(I,J);const V=e.render.frame;c[I.id]!==V&&(x(I),c[I.id]=V)}function v(I){const z=S();I.__bindingPointIndex=z;const U=o.createBuffer(),J=I.__size,V=I.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,J,V),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,z,U),U}function S(){for(let I=0;I<d;I++)if(h.indexOf(I)===-1)return h.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(I){const z=l[I.id],U=I.uniforms,J=I.__cache;o.bindBuffer(o.UNIFORM_BUFFER,z);for(let V=0,P=U.length;V<P;V++){const K=Array.isArray(U[V])?U[V]:[U[V]];for(let D=0,R=K.length;D<R;D++){const H=K[D];if(M(H,V,D,J)===!0){const ft=H.__offset,ut=Array.isArray(H.value)?H.value:[H.value];let ht=0;for(let _t=0;_t<ut.length;_t++){const O=ut[_t],Q=C(O);typeof O=="number"||typeof O=="boolean"?(H.__data[0]=O,o.bufferSubData(o.UNIFORM_BUFFER,ft+ht,H.__data)):O.isMatrix3?(H.__data[0]=O.elements[0],H.__data[1]=O.elements[1],H.__data[2]=O.elements[2],H.__data[3]=0,H.__data[4]=O.elements[3],H.__data[5]=O.elements[4],H.__data[6]=O.elements[5],H.__data[7]=0,H.__data[8]=O.elements[6],H.__data[9]=O.elements[7],H.__data[10]=O.elements[8],H.__data[11]=0):(O.toArray(H.__data,ht),ht+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ft,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(I,z,U,J){const V=I.value,P=z+"_"+U;if(J[P]===void 0)return typeof V=="number"||typeof V=="boolean"?J[P]=V:J[P]=V.clone(),!0;{const K=J[P];if(typeof V=="number"||typeof V=="boolean"){if(K!==V)return J[P]=V,!0}else if(K.equals(V)===!1)return K.copy(V),!0}return!1}function A(I){const z=I.uniforms;let U=0;const J=16;for(let P=0,K=z.length;P<K;P++){const D=Array.isArray(z[P])?z[P]:[z[P]];for(let R=0,H=D.length;R<H;R++){const ft=D[R],ut=Array.isArray(ft.value)?ft.value:[ft.value];for(let ht=0,_t=ut.length;ht<_t;ht++){const O=ut[ht],Q=C(O),q=U%J,yt=q%Q.boundary,Tt=q+yt;U+=yt,Tt!==0&&J-Tt<Q.storage&&(U+=J-Tt),ft.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),ft.__offset=U,U+=Q.storage}}}const V=U%J;return V>0&&(U+=J-V),I.__size=U,I.__cache={},this}function C(I){const z={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(z.boundary=4,z.storage=4):I.isVector2?(z.boundary=8,z.storage=8):I.isVector3||I.isColor?(z.boundary=16,z.storage=12):I.isVector4?(z.boundary=16,z.storage=16):I.isMatrix3?(z.boundary=48,z.storage=48):I.isMatrix4?(z.boundary=64,z.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),z}function y(I){const z=I.target;z.removeEventListener("dispose",y);const U=h.indexOf(z.__bindingPointIndex);h.splice(U,1),o.deleteBuffer(l[z.id]),delete l[z.id],delete c[z.id]}function _(){for(const I in l)o.deleteBuffer(l[I]);h=[],l={},c={}}return{bind:m,update:p,dispose:_}}class pA{constructor(e={}){const{canvas:i=jx(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:S=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=h;const A=new Uint32Array(4),C=new Int32Array(4);let y=null,_=null;const I=[],z=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ui,this.toneMapping=Va,this.toneMappingExposure=1;const U=this;let J=!1,V=0,P=0,K=null,D=-1,R=null;const H=new Ke,ft=new Ke;let ut=null;const ht=new we(0);let _t=0,O=i.width,Q=i.height,q=1,yt=null,Tt=null;const N=new Ke(0,0,O,Q),at=new Ke(0,0,O,Q);let xt=!1;const j=new Bv;let pt=!1,Mt=!1;this.transmissionResolutionScale=1;const St=new $e,Pt=new $e,It=new ot,te=new Ke,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let fe=!1;function He(){return K===null?q:1}let F=r;function fn(b,W){return i.getContext(b,W)}try{const b={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:S};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${pd}`),i.addEventListener("webglcontextlost",vt,!1),i.addEventListener("webglcontextrestored",Dt,!1),i.addEventListener("webglcontextcreationerror",Ut,!1),F===null){const W="webgl2";if(F=fn(W,b),F===null)throw fn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let le,he,Gt,Ee,Xt,L,T,Y,w,$,tt,Rt,Et,Ct,ue,bt,Ft,Wt,kt,zt,Kt,ie,Ne,k;function wt(){le=new ET(F),le.init(),ie=new rA(F,le),he=new _T(F,le,e,ie),Gt=new iA(F,le),he.reverseDepthBuffer&&x&&Gt.buffers.depth.setReversed(!0),Ee=new AT(F),Xt=new kb,L=new aA(F,le,Gt,Xt,he,ie,Ee),T=new ST(U),Y=new MT(U),w=new Ny(F),Ne=new mT(F,w),$=new TT(F,w,Ee,Ne),tt=new CT(F,$,w,Ee),kt=new RT(F,he,L),bt=new vT(Xt),Rt=new Xb(U,T,Y,le,he,Ne,bt),Et=new hA(U,Xt),Ct=new qb,ue=new Jb(le),Wt=new pT(U,T,Y,Gt,tt,M,m),Ft=new eA(U,tt,he),k=new dA(F,Ee,he,Gt),zt=new gT(F,le,Ee),Kt=new bT(F,le,Ee),Ee.programs=Rt.programs,U.capabilities=he,U.extensions=le,U.properties=Xt,U.renderLists=Ct,U.shadowMap=Ft,U.state=Gt,U.info=Ee}wt();const ct=new cA(U,F);this.xr=ct,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const b=le.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=le.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(b){b!==void 0&&(q=b,this.setSize(O,Q,!1))},this.getSize=function(b){return b.set(O,Q)},this.setSize=function(b,W,rt=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=b,Q=W,i.width=Math.floor(b*q),i.height=Math.floor(W*q),rt===!0&&(i.style.width=b+"px",i.style.height=W+"px"),this.setViewport(0,0,b,W)},this.getDrawingBufferSize=function(b){return b.set(O*q,Q*q).floor()},this.setDrawingBufferSize=function(b,W,rt){O=b,Q=W,q=rt,i.width=Math.floor(b*rt),i.height=Math.floor(W*rt),this.setViewport(0,0,b,W)},this.getCurrentViewport=function(b){return b.copy(H)},this.getViewport=function(b){return b.copy(N)},this.setViewport=function(b,W,rt,st){b.isVector4?N.set(b.x,b.y,b.z,b.w):N.set(b,W,rt,st),Gt.viewport(H.copy(N).multiplyScalar(q).round())},this.getScissor=function(b){return b.copy(at)},this.setScissor=function(b,W,rt,st){b.isVector4?at.set(b.x,b.y,b.z,b.w):at.set(b,W,rt,st),Gt.scissor(ft.copy(at).multiplyScalar(q).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(b){Gt.setScissorTest(xt=b)},this.setOpaqueSort=function(b){yt=b},this.setTransparentSort=function(b){Tt=b},this.getClearColor=function(b){return b.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor.apply(Wt,arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha.apply(Wt,arguments)},this.clear=function(b=!0,W=!0,rt=!0){let st=0;if(b){let X=!1;if(K!==null){const At=K.texture.format;X=At===xd||At===Sd||At===vd}if(X){const At=K.texture.type,Lt=At===oa||At===Mr||At===No||At===Ts||At===gd||At===_d,Ot=Wt.getClearColor(),Bt=Wt.getClearAlpha(),Jt=Ot.r,$t=Ot.g,qt=Ot.b;Lt?(A[0]=Jt,A[1]=$t,A[2]=qt,A[3]=Bt,F.clearBufferuiv(F.COLOR,0,A)):(C[0]=Jt,C[1]=$t,C[2]=qt,C[3]=Bt,F.clearBufferiv(F.COLOR,0,C))}else st|=F.COLOR_BUFFER_BIT}W&&(st|=F.DEPTH_BUFFER_BIT),rt&&(st|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",vt,!1),i.removeEventListener("webglcontextrestored",Dt,!1),i.removeEventListener("webglcontextcreationerror",Ut,!1),Wt.dispose(),Ct.dispose(),ue.dispose(),Xt.dispose(),T.dispose(),Y.dispose(),tt.dispose(),Ne.dispose(),k.dispose(),Rt.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",Us),ct.removeEventListener("sessionend",Ls),bi.stop()};function vt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),J=!0}function Dt(){console.log("THREE.WebGLRenderer: Context Restored."),J=!1;const b=Ee.autoReset,W=Ft.enabled,rt=Ft.autoUpdate,st=Ft.needsUpdate,X=Ft.type;wt(),Ee.autoReset=b,Ft.enabled=W,Ft.autoUpdate=rt,Ft.needsUpdate=st,Ft.type=X}function Ut(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Qt(b){const W=b.target;W.removeEventListener("dispose",Qt),ke(W)}function ke(b){sn(b),Xt.remove(b)}function sn(b){const W=Xt.get(b).programs;W!==void 0&&(W.forEach(function(rt){Rt.releaseProgram(rt)}),b.isShaderMaterial&&Rt.releaseShaderCache(b))}this.renderBufferDirect=function(b,W,rt,st,X,At){W===null&&(W=De);const Lt=X.isMesh&&X.matrixWorld.determinant()<0,Ot=Os(b,W,rt,st,X);Gt.setMaterial(st,Lt);let Bt=rt.index,Jt=1;if(st.wireframe===!0){if(Bt=$.getWireframeAttribute(rt),Bt===void 0)return;Jt=2}const $t=rt.drawRange,qt=rt.attributes.position;let _e=$t.start*Jt,ve=($t.start+$t.count)*Jt;At!==null&&(_e=Math.max(_e,At.start*Jt),ve=Math.min(ve,(At.start+At.count)*Jt)),Bt!==null?(_e=Math.max(_e,0),ve=Math.min(ve,Bt.count)):qt!=null&&(_e=Math.max(_e,0),ve=Math.min(ve,qt.count));const Ge=ve-_e;if(Ge<0||Ge===1/0)return;Ne.setup(X,st,Ot,rt,Bt);let Te,ee=zt;if(Bt!==null&&(Te=w.get(Bt),ee=Kt,ee.setIndex(Te)),X.isMesh)st.wireframe===!0?(Gt.setLineWidth(st.wireframeLinewidth*He()),ee.setMode(F.LINES)):ee.setMode(F.TRIANGLES);else if(X.isLine){let Zt=st.linewidth;Zt===void 0&&(Zt=1),Gt.setLineWidth(Zt*He()),X.isLineSegments?ee.setMode(F.LINES):X.isLineLoop?ee.setMode(F.LINE_LOOP):ee.setMode(F.LINE_STRIP)}else X.isPoints?ee.setMode(F.POINTS):X.isSprite&&ee.setMode(F.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)ee.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(le.get("WEBGL_multi_draw"))ee.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Zt=X._multiDrawStarts,on=X._multiDrawCounts,ye=X._multiDrawCount,Ln=Bt?w.get(Bt).bytesPerElement:1,pi=Xt.get(st).currentProgram.getUniforms();for(let Rn=0;Rn<ye;Rn++)pi.setValue(F,"_gl_DrawID",Rn),ee.render(Zt[Rn]/Ln,on[Rn])}else if(X.isInstancedMesh)ee.renderInstances(_e,Ge,X.count);else if(rt.isInstancedBufferGeometry){const Zt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,on=Math.min(rt.instanceCount,Zt);ee.renderInstances(_e,Ge,on)}else ee.render(_e,Ge)};function Me(b,W,rt){b.transparent===!0&&b.side===ia&&b.forceSinglePass===!1?(b.side=Vn,b.needsUpdate=!0,qe(b,W,rt),b.side=Xa,b.needsUpdate=!0,qe(b,W,rt),b.side=ia):qe(b,W,rt)}this.compile=function(b,W,rt=null){rt===null&&(rt=b),_=ue.get(rt),_.init(W),z.push(_),rt.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(_.pushLight(X),X.castShadow&&_.pushShadow(X))}),b!==rt&&b.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(_.pushLight(X),X.castShadow&&_.pushShadow(X))}),_.setupLights();const st=new Set;return b.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const At=X.material;if(At)if(Array.isArray(At))for(let Lt=0;Lt<At.length;Lt++){const Ot=At[Lt];Me(Ot,rt,X),st.add(Ot)}else Me(At,rt,X),st.add(At)}),z.pop(),_=null,st},this.compileAsync=function(b,W,rt=null){const st=this.compile(b,W,rt);return new Promise(X=>{function At(){if(st.forEach(function(Lt){Xt.get(Lt).currentProgram.isReady()&&st.delete(Lt)}),st.size===0){X(b);return}setTimeout(At,10)}le.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let mn=null;function hi(b){mn&&mn(b)}function Us(){bi.stop()}function Ls(){bi.start()}const bi=new Iv;bi.setAnimationLoop(hi),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(b){mn=b,ct.setAnimationLoop(b),b===null?bi.stop():bi.start()},ct.addEventListener("sessionstart",Us),ct.addEventListener("sessionend",Ls),this.render=function(b,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(J===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(W),W=ct.getCamera()),b.isScene===!0&&b.onBeforeRender(U,b,W,K),_=ue.get(b,z.length),_.init(W),z.push(_),Pt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),j.setFromProjectionMatrix(Pt),Mt=this.localClippingEnabled,pt=bt.init(this.clippingPlanes,Mt),y=Ct.get(b,I.length),y.init(),I.push(y),ct.enabled===!0&&ct.isPresenting===!0){const At=U.xr.getDepthSensingMesh();At!==null&&Wa(At,W,-1/0,U.sortObjects)}Wa(b,W,0,U.sortObjects),y.finish(),U.sortObjects===!0&&y.sort(yt,Tt),fe=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,fe&&Wt.addToRenderList(y,b),this.info.render.frame++,pt===!0&&bt.beginShadows();const rt=_.state.shadowsArray;Ft.render(rt,b,W),pt===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=y.opaque,X=y.transmissive;if(_.setupLights(),W.isArrayCamera){const At=W.cameras;if(X.length>0)for(let Lt=0,Ot=At.length;Lt<Ot;Lt++){const Bt=At[Lt];Ns(st,X,b,Bt)}fe&&Wt.render(b);for(let Lt=0,Ot=At.length;Lt<Ot;Lt++){const Bt=At[Lt];Er(y,b,Bt,Bt.viewport)}}else X.length>0&&Ns(st,X,b,W),fe&&Wt.render(b),Er(y,b,W);K!==null&&P===0&&(L.updateMultisampleRenderTarget(K),L.updateRenderTargetMipmap(K)),b.isScene===!0&&b.onAfterRender(U,b,W),Ne.resetDefaultState(),D=-1,R=null,z.pop(),z.length>0?(_=z[z.length-1],pt===!0&&bt.setGlobalState(U.clippingPlanes,_.state.camera)):_=null,I.pop(),I.length>0?y=I[I.length-1]:y=null};function Wa(b,W,rt,st){if(b.visible===!1)return;if(b.layers.test(W.layers)){if(b.isGroup)rt=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(W);else if(b.isLight)_.pushLight(b),b.castShadow&&_.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||j.intersectsSprite(b)){st&&te.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Pt);const Lt=tt.update(b),Ot=b.material;Ot.visible&&y.push(b,Lt,Ot,rt,te.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||j.intersectsObject(b))){const Lt=tt.update(b),Ot=b.material;if(st&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),te.copy(b.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),te.copy(Lt.boundingSphere.center)),te.applyMatrix4(b.matrixWorld).applyMatrix4(Pt)),Array.isArray(Ot)){const Bt=Lt.groups;for(let Jt=0,$t=Bt.length;Jt<$t;Jt++){const qt=Bt[Jt],_e=Ot[qt.materialIndex];_e&&_e.visible&&y.push(b,Lt,_e,rt,te.z,qt)}}else Ot.visible&&y.push(b,Lt,Ot,rt,te.z,null)}}const At=b.children;for(let Lt=0,Ot=At.length;Lt<Ot;Lt++)Wa(At[Lt],W,rt,st)}function Er(b,W,rt,st){const X=b.opaque,At=b.transmissive,Lt=b.transparent;_.setupLightsView(rt),pt===!0&&bt.setGlobalState(U.clippingPlanes,rt),st&&Gt.viewport(H.copy(st)),X.length>0&&qa(X,W,rt),At.length>0&&qa(At,W,rt),Lt.length>0&&qa(Lt,W,rt),Gt.buffers.depth.setTest(!0),Gt.buffers.depth.setMask(!0),Gt.buffers.color.setMask(!0),Gt.setPolygonOffset(!1)}function Ns(b,W,rt,st){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[st.id]===void 0&&(_.state.transmissionRenderTarget[st.id]=new ka(1,1,{generateMipmaps:!0,type:le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float")?Cs:oa,minFilter:xr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Re.workingColorSpace}));const At=_.state.transmissionRenderTarget[st.id],Lt=st.viewport||H;At.setSize(Lt.z*U.transmissionResolutionScale,Lt.w*U.transmissionResolutionScale);const Ot=U.getRenderTarget();U.setRenderTarget(At),U.getClearColor(ht),_t=U.getClearAlpha(),_t<1&&U.setClearColor(16777215,.5),U.clear(),fe&&Wt.render(rt);const Bt=U.toneMapping;U.toneMapping=Va;const Jt=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),_.setupLightsView(st),pt===!0&&bt.setGlobalState(U.clippingPlanes,st),qa(b,rt,st),L.updateMultisampleRenderTarget(At),L.updateRenderTargetMipmap(At),le.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let qt=0,_e=W.length;qt<_e;qt++){const ve=W[qt],Ge=ve.object,Te=ve.geometry,ee=ve.material,Zt=ve.group;if(ee.side===ia&&Ge.layers.test(st.layers)){const on=ee.side;ee.side=Vn,ee.needsUpdate=!0,di(Ge,rt,st,Te,ee,Zt),ee.side=on,ee.needsUpdate=!0,$t=!0}}$t===!0&&(L.updateMultisampleRenderTarget(At),L.updateRenderTargetMipmap(At))}U.setRenderTarget(Ot),U.setClearColor(ht,_t),Jt!==void 0&&(st.viewport=Jt),U.toneMapping=Bt}function qa(b,W,rt){const st=W.isScene===!0?W.overrideMaterial:null;for(let X=0,At=b.length;X<At;X++){const Lt=b[X],Ot=Lt.object,Bt=Lt.geometry,Jt=st===null?Lt.material:st,$t=Lt.group;Ot.layers.test(rt.layers)&&di(Ot,W,rt,Bt,Jt,$t)}}function di(b,W,rt,st,X,At){b.onBeforeRender(U,W,rt,st,X,At),b.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),X.onBeforeRender(U,W,rt,st,b,At),X.transparent===!0&&X.side===ia&&X.forceSinglePass===!1?(X.side=Vn,X.needsUpdate=!0,U.renderBufferDirect(rt,W,st,X,b,At),X.side=Xa,X.needsUpdate=!0,U.renderBufferDirect(rt,W,st,X,b,At),X.side=ia):U.renderBufferDirect(rt,W,st,X,b,At),b.onAfterRender(U,W,rt,st,X,At)}function qe(b,W,rt){W.isScene!==!0&&(W=De);const st=Xt.get(b),X=_.state.lights,At=_.state.shadowsArray,Lt=X.state.version,Ot=Rt.getParameters(b,X.state,At,W,rt),Bt=Rt.getProgramCacheKey(Ot);let Jt=st.programs;st.environment=b.isMeshStandardMaterial?W.environment:null,st.fog=W.fog,st.envMap=(b.isMeshStandardMaterial?Y:T).get(b.envMap||st.environment),st.envMapRotation=st.environment!==null&&b.envMap===null?W.environmentRotation:b.envMapRotation,Jt===void 0&&(b.addEventListener("dispose",Qt),Jt=new Map,st.programs=Jt);let $t=Jt.get(Bt);if($t!==void 0){if(st.currentProgram===$t&&st.lightsStateVersion===Lt)return Ni(b,Ot),$t}else Ot.uniforms=Rt.getUniforms(b),b.onBeforeCompile(Ot,U),$t=Rt.acquireProgram(Ot,Bt),Jt.set(Bt,$t),st.uniforms=Ot.uniforms;const qt=st.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(qt.clippingPlanes=bt.uniform),Ni(b,Ot),st.needsLights=Pu(b),st.lightsStateVersion=Lt,st.needsLights&&(qt.ambientLightColor.value=X.state.ambient,qt.lightProbe.value=X.state.probe,qt.directionalLights.value=X.state.directional,qt.directionalLightShadows.value=X.state.directionalShadow,qt.spotLights.value=X.state.spot,qt.spotLightShadows.value=X.state.spotShadow,qt.rectAreaLights.value=X.state.rectArea,qt.ltc_1.value=X.state.rectAreaLTC1,qt.ltc_2.value=X.state.rectAreaLTC2,qt.pointLights.value=X.state.point,qt.pointLightShadows.value=X.state.pointShadow,qt.hemisphereLights.value=X.state.hemi,qt.directionalShadowMap.value=X.state.directionalShadowMap,qt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,qt.spotShadowMap.value=X.state.spotShadowMap,qt.spotLightMatrix.value=X.state.spotLightMatrix,qt.spotLightMap.value=X.state.spotLightMap,qt.pointShadowMap.value=X.state.pointShadowMap,qt.pointShadowMatrix.value=X.state.pointShadowMatrix),st.currentProgram=$t,st.uniformsList=null,$t}function gn(b){if(b.uniformsList===null){const W=b.currentProgram.getUniforms();b.uniformsList=bu.seqWithValue(W.seq,b.uniforms)}return b.uniformsList}function Ni(b,W){const rt=Xt.get(b);rt.outputColorSpace=W.outputColorSpace,rt.batching=W.batching,rt.batchingColor=W.batchingColor,rt.instancing=W.instancing,rt.instancingColor=W.instancingColor,rt.instancingMorph=W.instancingMorph,rt.skinning=W.skinning,rt.morphTargets=W.morphTargets,rt.morphNormals=W.morphNormals,rt.morphColors=W.morphColors,rt.morphTargetsCount=W.morphTargetsCount,rt.numClippingPlanes=W.numClippingPlanes,rt.numIntersection=W.numClipIntersection,rt.vertexAlphas=W.vertexAlphas,rt.vertexTangents=W.vertexTangents,rt.toneMapping=W.toneMapping}function Os(b,W,rt,st,X){W.isScene!==!0&&(W=De),L.resetTextureUnits();const At=W.fog,Lt=st.isMeshStandardMaterial?W.environment:null,Ot=K===null?U.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:As,Bt=(st.isMeshStandardMaterial?Y:T).get(st.envMap||Lt),Jt=st.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,$t=!!rt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),qt=!!rt.morphAttributes.position,_e=!!rt.morphAttributes.normal,ve=!!rt.morphAttributes.color;let Ge=Va;st.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ge=U.toneMapping);const Te=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,ee=Te!==void 0?Te.length:0,Zt=Xt.get(st),on=_.state.lights;if(pt===!0&&(Mt===!0||b!==R)){const Ye=b===R&&st.id===D;bt.setState(st,b,Ye)}let ye=!1;st.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==on.state.version||Zt.outputColorSpace!==Ot||X.isBatchedMesh&&Zt.batching===!1||!X.isBatchedMesh&&Zt.batching===!0||X.isBatchedMesh&&Zt.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Zt.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Zt.instancing===!1||!X.isInstancedMesh&&Zt.instancing===!0||X.isSkinnedMesh&&Zt.skinning===!1||!X.isSkinnedMesh&&Zt.skinning===!0||X.isInstancedMesh&&Zt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Zt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Zt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Zt.instancingMorph===!1&&X.morphTexture!==null||Zt.envMap!==Bt||st.fog===!0&&Zt.fog!==At||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==bt.numPlanes||Zt.numIntersection!==bt.numIntersection)||Zt.vertexAlphas!==Jt||Zt.vertexTangents!==$t||Zt.morphTargets!==qt||Zt.morphNormals!==_e||Zt.morphColors!==ve||Zt.toneMapping!==Ge||Zt.morphTargetsCount!==ee)&&(ye=!0):(ye=!0,Zt.__version=st.version);let Ln=Zt.currentProgram;ye===!0&&(Ln=qe(st,W,X));let pi=!1,Rn=!1,hn=!1;const Oe=Ln.getUniforms(),Cn=Zt.uniforms;if(Gt.useProgram(Ln.program)&&(pi=!0,Rn=!0,hn=!0),st.id!==D&&(D=st.id,Rn=!0),pi||R!==b){Gt.buffers.depth.getReversed()?(St.copy(b.projectionMatrix),Qx(St),Jx(St),Oe.setValue(F,"projectionMatrix",St)):Oe.setValue(F,"projectionMatrix",b.projectionMatrix),Oe.setValue(F,"viewMatrix",b.matrixWorldInverse);const _n=Oe.map.cameraPosition;_n!==void 0&&_n.setValue(F,It.setFromMatrixPosition(b.matrixWorld)),he.logarithmicDepthBuffer&&Oe.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Oe.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),R!==b&&(R=b,Rn=!0,hn=!0)}if(X.isSkinnedMesh){Oe.setOptional(F,X,"bindMatrix"),Oe.setOptional(F,X,"bindMatrixInverse");const Ye=X.skeleton;Ye&&(Ye.boneTexture===null&&Ye.computeBoneTexture(),Oe.setValue(F,"boneTexture",Ye.boneTexture,L))}X.isBatchedMesh&&(Oe.setOptional(F,X,"batchingTexture"),Oe.setValue(F,"batchingTexture",X._matricesTexture,L),Oe.setOptional(F,X,"batchingIdTexture"),Oe.setValue(F,"batchingIdTexture",X._indirectTexture,L),Oe.setOptional(F,X,"batchingColorTexture"),X._colorsTexture!==null&&Oe.setValue(F,"batchingColorTexture",X._colorsTexture,L));const En=rt.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&kt.update(X,rt,Ln),(Rn||Zt.receiveShadow!==X.receiveShadow)&&(Zt.receiveShadow=X.receiveShadow,Oe.setValue(F,"receiveShadow",X.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Cn.envMap.value=Bt,Cn.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&W.environment!==null&&(Cn.envMapIntensity.value=W.environmentIntensity),Rn&&(Oe.setValue(F,"toneMappingExposure",U.toneMappingExposure),Zt.needsLights&&zu(Cn,hn),At&&st.fog===!0&&Et.refreshFogUniforms(Cn,At),Et.refreshMaterialUniforms(Cn,st,q,Q,_.state.transmissionRenderTarget[b.id]),bu.upload(F,gn(Zt),Cn,L)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(bu.upload(F,gn(Zt),Cn,L),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Oe.setValue(F,"center",X.center),Oe.setValue(F,"modelViewMatrix",X.modelViewMatrix),Oe.setValue(F,"normalMatrix",X.normalMatrix),Oe.setValue(F,"modelMatrix",X.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const Ye=st.uniformsGroups;for(let _n=0,Tr=Ye.length;_n<Tr;_n++){const Nn=Ye[_n];k.update(Nn,Ln),k.bind(Nn,Ln)}}return Ln}function zu(b,W){b.ambientLightColor.needsUpdate=W,b.lightProbe.needsUpdate=W,b.directionalLights.needsUpdate=W,b.directionalLightShadows.needsUpdate=W,b.pointLights.needsUpdate=W,b.pointLightShadows.needsUpdate=W,b.spotLights.needsUpdate=W,b.spotLightShadows.needsUpdate=W,b.rectAreaLights.needsUpdate=W,b.hemisphereLights.needsUpdate=W}function Pu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(b,W,rt){Xt.get(b.texture).__webglTexture=W,Xt.get(b.depthTexture).__webglTexture=rt;const st=Xt.get(b);st.__hasExternalTextures=!0,st.__autoAllocateDepthBuffer=rt===void 0,st.__autoAllocateDepthBuffer||le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),st.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,W){const rt=Xt.get(b);rt.__webglFramebuffer=W,rt.__useDefaultFramebuffer=W===void 0};const Io=F.createFramebuffer();this.setRenderTarget=function(b,W=0,rt=0){K=b,V=W,P=rt;let st=!0,X=null,At=!1,Lt=!1;if(b){const Bt=Xt.get(b);if(Bt.__useDefaultFramebuffer!==void 0)Gt.bindFramebuffer(F.FRAMEBUFFER,null),st=!1;else if(Bt.__webglFramebuffer===void 0)L.setupRenderTarget(b);else if(Bt.__hasExternalTextures)L.rebindTextures(b,Xt.get(b.texture).__webglTexture,Xt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const qt=b.depthTexture;if(Bt.__boundDepthTexture!==qt){if(qt!==null&&Xt.has(qt)&&(b.width!==qt.image.width||b.height!==qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(b)}}const Jt=b.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Lt=!0);const $t=Xt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray($t[W])?X=$t[W][rt]:X=$t[W],At=!0):b.samples>0&&L.useMultisampledRTT(b)===!1?X=Xt.get(b).__webglMultisampledFramebuffer:Array.isArray($t)?X=$t[rt]:X=$t,H.copy(b.viewport),ft.copy(b.scissor),ut=b.scissorTest}else H.copy(N).multiplyScalar(q).floor(),ft.copy(at).multiplyScalar(q).floor(),ut=xt;if(rt!==0&&(X=Io),Gt.bindFramebuffer(F.FRAMEBUFFER,X)&&st&&Gt.drawBuffers(b,X),Gt.viewport(H),Gt.scissor(ft),Gt.setScissorTest(ut),At){const Bt=Xt.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+W,Bt.__webglTexture,rt)}else if(Lt){const Bt=Xt.get(b.texture),Jt=W;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Bt.__webglTexture,rt,Jt)}else if(b!==null&&rt!==0){const Bt=Xt.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Bt.__webglTexture,rt)}D=-1},this.readRenderTargetPixels=function(b,W,rt,st,X,At,Lt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=Xt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt]),Ot){Gt.bindFramebuffer(F.FRAMEBUFFER,Ot);try{const Bt=b.texture,Jt=Bt.format,$t=Bt.type;if(!he.textureFormatReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=b.width-st&&rt>=0&&rt<=b.height-X&&F.readPixels(W,rt,st,X,ie.convert(Jt),ie.convert($t),At)}finally{const Bt=K!==null?Xt.get(K).__webglFramebuffer:null;Gt.bindFramebuffer(F.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(b,W,rt,st,X,At,Lt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=Xt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt]),Ot){const Bt=b.texture,Jt=Bt.format,$t=Bt.type;if(!he.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=b.width-st&&rt>=0&&rt<=b.height-X){Gt.bindFramebuffer(F.FRAMEBUFFER,Ot);const qt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,qt),F.bufferData(F.PIXEL_PACK_BUFFER,At.byteLength,F.STREAM_READ),F.readPixels(W,rt,st,X,ie.convert(Jt),ie.convert($t),0);const _e=K!==null?Xt.get(K).__webglFramebuffer:null;Gt.bindFramebuffer(F.FRAMEBUFFER,_e);const ve=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Kx(F,ve,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,qt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,At),F.deleteBuffer(qt),F.deleteSync(ve),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,W=null,rt=0){b.isTexture!==!0&&(gs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,b=arguments[1]);const st=Math.pow(2,-rt),X=Math.floor(b.image.width*st),At=Math.floor(b.image.height*st),Lt=W!==null?W.x:0,Ot=W!==null?W.y:0;L.setTexture2D(b,0),F.copyTexSubImage2D(F.TEXTURE_2D,rt,0,0,Lt,Ot,X,At),Gt.unbindTexture()};const Ya=F.createFramebuffer(),zs=F.createFramebuffer();this.copyTextureToTexture=function(b,W,rt=null,st=null,X=0,At=null){b.isTexture!==!0&&(gs("WebGLRenderer: copyTextureToTexture function signature has changed."),st=arguments[0]||null,b=arguments[1],W=arguments[2],At=arguments[3]||0,rt=null),At===null&&(X!==0?(gs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),At=X,X=0):At=0);let Lt,Ot,Bt,Jt,$t,qt,_e,ve,Ge;const Te=b.isCompressedTexture?b.mipmaps[At]:b.image;if(rt!==null)Lt=rt.max.x-rt.min.x,Ot=rt.max.y-rt.min.y,Bt=rt.isBox3?rt.max.z-rt.min.z:1,Jt=rt.min.x,$t=rt.min.y,qt=rt.isBox3?rt.min.z:0;else{const En=Math.pow(2,-X);Lt=Math.floor(Te.width*En),Ot=Math.floor(Te.height*En),b.isDataArrayTexture?Bt=Te.depth:b.isData3DTexture?Bt=Math.floor(Te.depth*En):Bt=1,Jt=0,$t=0,qt=0}st!==null?(_e=st.x,ve=st.y,Ge=st.z):(_e=0,ve=0,Ge=0);const ee=ie.convert(W.format),Zt=ie.convert(W.type);let on;W.isData3DTexture?(L.setTexture3D(W,0),on=F.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(L.setTexture2DArray(W,0),on=F.TEXTURE_2D_ARRAY):(L.setTexture2D(W,0),on=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment);const ye=F.getParameter(F.UNPACK_ROW_LENGTH),Ln=F.getParameter(F.UNPACK_IMAGE_HEIGHT),pi=F.getParameter(F.UNPACK_SKIP_PIXELS),Rn=F.getParameter(F.UNPACK_SKIP_ROWS),hn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Te.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Te.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Jt),F.pixelStorei(F.UNPACK_SKIP_ROWS,$t),F.pixelStorei(F.UNPACK_SKIP_IMAGES,qt);const Oe=b.isDataArrayTexture||b.isData3DTexture,Cn=W.isDataArrayTexture||W.isData3DTexture;if(b.isDepthTexture){const En=Xt.get(b),Ye=Xt.get(W),_n=Xt.get(En.__renderTarget),Tr=Xt.get(Ye.__renderTarget);Gt.bindFramebuffer(F.READ_FRAMEBUFFER,_n.__webglFramebuffer),Gt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Tr.__webglFramebuffer);for(let Nn=0;Nn<Bt;Nn++)Oe&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Xt.get(b).__webglTexture,X,qt+Nn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Xt.get(W).__webglTexture,At,Ge+Nn)),F.blitFramebuffer(Jt,$t,Lt,Ot,_e,ve,Lt,Ot,F.DEPTH_BUFFER_BIT,F.NEAREST);Gt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(X!==0||b.isRenderTargetTexture||Xt.has(b)){const En=Xt.get(b),Ye=Xt.get(W);Gt.bindFramebuffer(F.READ_FRAMEBUFFER,Ya),Gt.bindFramebuffer(F.DRAW_FRAMEBUFFER,zs);for(let _n=0;_n<Bt;_n++)Oe?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,En.__webglTexture,X,qt+_n):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,En.__webglTexture,X),Cn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ye.__webglTexture,At,Ge+_n):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ye.__webglTexture,At),X!==0?F.blitFramebuffer(Jt,$t,Lt,Ot,_e,ve,Lt,Ot,F.COLOR_BUFFER_BIT,F.NEAREST):Cn?F.copyTexSubImage3D(on,At,_e,ve,Ge+_n,Jt,$t,Lt,Ot):F.copyTexSubImage2D(on,At,_e,ve,Jt,$t,Lt,Ot);Gt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Cn?b.isDataTexture||b.isData3DTexture?F.texSubImage3D(on,At,_e,ve,Ge,Lt,Ot,Bt,ee,Zt,Te.data):W.isCompressedArrayTexture?F.compressedTexSubImage3D(on,At,_e,ve,Ge,Lt,Ot,Bt,ee,Te.data):F.texSubImage3D(on,At,_e,ve,Ge,Lt,Ot,Bt,ee,Zt,Te):b.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,At,_e,ve,Lt,Ot,ee,Zt,Te.data):b.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,At,_e,ve,Te.width,Te.height,ee,Te.data):F.texSubImage2D(F.TEXTURE_2D,At,_e,ve,Lt,Ot,ee,Zt,Te);F.pixelStorei(F.UNPACK_ROW_LENGTH,ye),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ln),F.pixelStorei(F.UNPACK_SKIP_PIXELS,pi),F.pixelStorei(F.UNPACK_SKIP_ROWS,Rn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,hn),At===0&&W.generateMipmaps&&F.generateMipmap(on),Gt.unbindTexture()},this.copyTextureToTexture3D=function(b,W,rt=null,st=null,X=0){return b.isTexture!==!0&&(gs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),rt=arguments[0]||null,st=arguments[1]||null,b=arguments[2],W=arguments[3],X=arguments[4]||0),gs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,W,rt,st,X)},this.initRenderTarget=function(b){Xt.get(b).__webglFramebuffer===void 0&&L.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?L.setTextureCube(b,0):b.isData3DTexture?L.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?L.setTexture2DArray(b,0):L.setTexture2D(b,0),Gt.unbindTexture()},this.resetState=function(){V=0,P=0,K=null,Gt.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return aa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorspace=Re._getDrawingBufferColorSpace(e),i.unpackColorSpace=Re._getUnpackColorSpace()}}function mA({mouseForce:o=20,cursorSize:e=100,isViscous:i=!1,viscous:r=30,iterationsViscous:l=32,iterationsPoisson:c=32,dt:h=.014,BFECC:d=!0,resolution:m=.5,isBounce:p=!1,colors:v=["#5227FF","#FF9FFC","#B19EEF"],style:S={},className:x="",autoDemo:M=!0,autoSpeed:A=.5,autoIntensity:C=2.2,takeoverDuration:y=.25,autoResumeDelay:_=1e3,autoRampDuration:I=.6}){const z=Di.useRef(null),U=Di.useRef(null),J=Di.useRef(null),V=Di.useRef(null),P=Di.useRef(null),K=Di.useRef(!0),D=Di.useRef(null);return Di.useEffect(()=>{if(!z.current)return;function R(Y){let w;Array.isArray(Y)&&Y.length>0?Y.length===1?w=[Y[0],Y[0]]:w=Y:w=["#ffffff","#ffffff"];const $=w.length,tt=new Uint8Array($*4);for(let Et=0;Et<$;Et++){const Ct=new we(w[Et]);tt[Et*4+0]=Math.round(Ct.r*255),tt[Et*4+1]=Math.round(Ct.g*255),tt[Et*4+2]=Math.round(Ct.b*255),tt[Et*4+3]=255}const Rt=new yy(tt,$,1,ci);return Rt.magFilter=Gn,Rt.minFilter=Gn,Rt.wrapS=Ei,Rt.wrapT=Ei,Rt.generateMipmaps=!1,Rt.needsUpdate=!0,Rt}const H=R(v),ft=new Ke(0,0,0,0);class ut{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(w){this.container=w,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new pA({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new we(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new Uy,this.clock.start()}resize(){if(!this.container)return;const w=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(w.width)),this.height=Math.max(1,Math.floor(w.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.delta=this.clock.getDelta(),this.time+=this.delta}}const ht=new ut;class _t{constructor(){this.mouseMoved=!1,this.coords=new re,this.coords_old=new re,this.diff=new re,this.timer=null,this.container=null,this.docTarget=null,this.listenerTarget=null,this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new re,this.takeoverTo=new re,this.onInteract=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this._onDocumentLeave=this.onDocumentLeave.bind(this)}init(w){this.container=w,this.docTarget=w.ownerDocument||null;const $=this.docTarget&&this.docTarget.defaultView||(typeof window<"u"?window:null);$&&(this.listenerTarget=$,this.listenerTarget.addEventListener("mousemove",this._onMouseMove),this.listenerTarget.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.listenerTarget.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.listenerTarget.addEventListener("touchend",this._onTouchEnd),this.docTarget&&this.docTarget.addEventListener("mouseleave",this._onDocumentLeave))}dispose(){this.listenerTarget&&(this.listenerTarget.removeEventListener("mousemove",this._onMouseMove),this.listenerTarget.removeEventListener("touchstart",this._onTouchStart),this.listenerTarget.removeEventListener("touchmove",this._onTouchMove),this.listenerTarget.removeEventListener("touchend",this._onTouchEnd)),this.docTarget&&this.docTarget.removeEventListener("mouseleave",this._onDocumentLeave),this.listenerTarget=null,this.docTarget=null,this.container=null}isPointInside(w,$){if(!this.container)return!1;const tt=this.container.getBoundingClientRect();return tt.width===0||tt.height===0?!1:w>=tt.left&&w<=tt.right&&$>=tt.top&&$<=tt.bottom}updateHoverState(w,$){return this.isHoverInside=this.isPointInside(w,$),this.isHoverInside}setCoords(w,$){if(!this.container)return;this.timer&&window.clearTimeout(this.timer);const tt=this.container.getBoundingClientRect();if(tt.width===0||tt.height===0)return;const Rt=(w-tt.left)/tt.width,Et=($-tt.top)/tt.height;this.coords.set(Rt*2-1,-(Et*2-1)),this.mouseMoved=!0,this.timer=window.setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(w,$){this.coords.set(w,$),this.mouseMoved=!0}onDocumentMouseMove(w){if(this.updateHoverState(w.clientX,w.clientY)){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){if(!this.container)return;const $=this.container.getBoundingClientRect();if($.width===0||$.height===0)return;const tt=(w.clientX-$.left)/$.width,Rt=(w.clientY-$.top)/$.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(tt*2-1,-(Rt*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(w.clientX,w.clientY),this.hasUserControl=!0}}onDocumentTouchStart(w){if(w.touches.length!==1)return;const $=w.touches[0];this.updateHoverState($.clientX,$.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords($.clientX,$.clientY),this.hasUserControl=!0)}onDocumentTouchMove(w){if(w.touches.length!==1)return;const $=w.touches[0];this.updateHoverState($.clientX,$.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords($.clientX,$.clientY))}onTouchEnd(){this.isHoverInside=!1}onDocumentLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const w=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(w>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const $=w*w*(3-2*w);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,$)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const O=new _t;class Q{constructor(w,$,tt){this.mouse=w,this.manager=$,this.enabled=tt.enabled,this.speed=tt.speed,this.resumeDelay=tt.resumeDelay||3e3,this.rampDurationMs=(tt.rampDuration||0)*1e3,this.active=!1,this.current=new re(0,0),this.target=new re,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new re,this.pickNewTarget()}pickNewTarget(){const w=Math.random;this.target.set((w()*2-1)*(1-this.margin),(w()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const w=performance.now();if(w-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=w,this.activationTime=w),!this.active)return;this.mouse.isAutoActive=!0;let tt=(w-this.lastTime)/1e3;this.lastTime=w,tt>.2&&(tt=.016);const Rt=this._tmpDir.subVectors(this.target,this.current),Et=Rt.length();if(Et<.01){this.pickNewTarget();return}Rt.normalize();let Ct=1;if(this.rampDurationMs>0){const Ft=Math.min(1,(w-this.activationTime)/this.rampDurationMs);Ct=Ft*Ft*(3-2*Ft)}const ue=this.speed*tt*Ct,bt=Math.min(ue,Et);this.current.addScaledVector(Rt,bt),this.mouse.setNormalized(this.current.x,this.current.y)}}const q=`
  attribute vec3 position;
  uniform vec2 px;
  uniform vec2 boundarySpace;
  varying vec2 uv;
  precision highp float;
  void main(){
  vec3 pos = position;
  vec2 scale = 1.0 - boundarySpace * 2.0;
  pos.xy = pos.xy * scale;
  uv = vec2(0.5)+(pos.xy)*0.5;
  gl_Position = vec4(pos, 1.0);
}
`,yt=`
  attribute vec3 position;
  uniform vec2 px;
  precision highp float;
  varying vec2 uv;
  void main(){
  vec3 pos = position;
  uv = 0.5 + pos.xy * 0.5;
  vec2 n = sign(pos.xy);
  pos.xy = abs(pos.xy) - px * 1.0;
  pos.xy *= n;
  gl_Position = vec4(pos, 1.0);
}
`,Tt=`
    precision highp float;
    attribute vec3 position;
    attribute vec2 uv;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 pos = position.xy * scale * 2.0 * px + center;
    vUv = uv;
    gl_Position = vec4(pos, 0.0, 1.0);
}
`,N=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform bool isBFECC;
    uniform vec2 fboSize;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
    if(isBFECC == false){
        vec2 vel = texture2D(velocity, uv).xy;
        vec2 uv2 = uv - vel * dt * ratio;
        vec2 newVel = texture2D(velocity, uv2).xy;
        gl_FragColor = vec4(newVel, 0.0, 0.0);
    } else {
        vec2 spot_new = uv;
        vec2 vel_old = texture2D(velocity, uv).xy;
        vec2 spot_old = spot_new - vel_old * dt * ratio;
        vec2 vel_new1 = texture2D(velocity, spot_old).xy;
        vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;
        vec2 error = spot_new2 - spot_new;
        vec2 spot_new3 = spot_new - error / 2.0;
        vec2 vel_2 = texture2D(velocity, spot_new3).xy;
        vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
        vec2 newVel2 = texture2D(velocity, spot_old2).xy; 
        gl_FragColor = vec4(newVel2, 0.0, 0.0);
    }
}
`,at=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D palette;
    uniform vec4 bgColor;
    varying vec2 uv;
    void main(){
    vec2 vel = texture2D(velocity, uv).xy;
    float lenv = clamp(length(vel), 0.0, 1.0);
    vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;
    vec3 outRGB = mix(bgColor.rgb, c, lenv);
    float outA = mix(bgColor.a, 1.0, lenv);
    gl_FragColor = vec4(outRGB, outA);
}
`,xt=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x;
    float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x;
    float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y;
    float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y;
    float divergence = (x1 - x0 + y1 - y0) / 2.0;
    gl_FragColor = vec4(divergence / dt);
}
`,j=`
    precision highp float;
    uniform vec2 force;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 circle = (vUv - 0.5) * 2.0;
    float d = 1.0 - min(length(circle), 1.0);
    d *= d;
    gl_FragColor = vec4(force * d, 0.0, 1.0);
}
`,pt=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D divergence;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r;
    float div = texture2D(divergence, uv).r;
    float newP = (p0 + p1 + p2 + p3) / 4.0 - div;
    gl_FragColor = vec4(newP);
}
`,Mt=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D velocity;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    float step = 1.0;
    float p0 = texture2D(pressure, uv + vec2(px.x * step, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * step, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * step)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * step)).r;
    vec2 v = texture2D(velocity, uv).xy;
    vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
    v = v - gradP * dt;
    gl_FragColor = vec4(v, 0.0, 1.0);
}
`,St=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D velocity_new;
    uniform float v;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    vec2 old = texture2D(velocity, uv).xy;
    vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0.0)).xy;
    vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0.0)).xy;
    vec2 new2 = texture2D(velocity_new, uv + vec2(0.0, px.y * 2.0)).xy;
    vec2 new3 = texture2D(velocity_new, uv - vec2(0.0, px.y * 2.0)).xy;
    vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);
    newv /= 4.0 * (1.0 + v * dt);
    gl_FragColor = vec4(newv, 0.0, 0.0);
}
`;class Pt{constructor(w){this.props=w||{},this.uniforms=this.props.material?.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new z_,this.camera=new wu,this.uniforms&&(this.material=new gu(this.props.material),this.geometry=new yr(2,2),this.plane=new fi(this.geometry,this.material),this.scene.add(this.plane))}update(){ht.renderer.setRenderTarget(this.props.output||null),ht.renderer.render(this.scene,this.camera),ht.renderer.setRenderTarget(null)}}class It extends Pt{constructor(w){super({material:{vertexShader:q,fragmentShader:N,uniforms:{boundarySpace:{value:w.cellScale},px:{value:w.cellScale},fboSize:{value:w.fboSize},velocity:{value:w.src.texture},dt:{value:w.dt},isBFECC:{value:!0}}},output:w.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const w=new ca,$=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);w.setAttribute("position",new Ti($,3));const tt=new gu({vertexShader:yt,fragmentShader:N,uniforms:this.uniforms});this.line=new Ay(w,tt),this.scene.add(this.line)}update({dt:w,isBounce:$,BFECC:tt}){this.uniforms.dt.value=w,this.line.visible=$,this.uniforms.isBFECC.value=tt,super.update()}}class te extends Pt{constructor(w){super({output:w.dst}),this.init(w)}init(w){super.init();const $=new yr(1,1),tt=new gu({vertexShader:Tt,fragmentShader:j,blending:bh,depthWrite:!1,uniforms:{px:{value:w.cellScale},force:{value:new re(0,0)},center:{value:new re(0,0)},scale:{value:new re(w.cursor_size,w.cursor_size)}}});this.mouse=new fi($,tt),this.scene.add(this.mouse)}update(w){const $=O.diff.x/2*w.mouse_force,tt=O.diff.y/2*w.mouse_force,Rt=w.cursor_size*w.cellScale.x,Et=w.cursor_size*w.cellScale.y,Ct=Math.min(Math.max(O.coords.x,-1+Rt+w.cellScale.x*2),1-Rt-w.cellScale.x*2),ue=Math.min(Math.max(O.coords.y,-1+Et+w.cellScale.y*2),1-Et-w.cellScale.y*2),bt=this.mouse.material.uniforms;bt.force.value.set($,tt),bt.center.value.set(Ct,ue),bt.scale.value.set(w.cursor_size,w.cursor_size),super.update()}}class De extends Pt{constructor(w){super({material:{vertexShader:q,fragmentShader:St,uniforms:{boundarySpace:{value:w.boundarySpace},velocity:{value:w.src.texture},velocity_new:{value:w.dst_.texture},v:{value:w.viscous},px:{value:w.cellScale},dt:{value:w.dt}}},output:w.dst,output0:w.dst_,output1:w.dst}),this.init()}update({viscous:w,iterations:$,dt:tt}){let Rt,Et;this.uniforms.v.value=w;for(let Ct=0;Ct<$;Ct++)Ct%2===0?(Rt=this.props.output0,Et=this.props.output1):(Rt=this.props.output1,Et=this.props.output0),this.uniforms.velocity_new.value=Rt.texture,this.props.output=Et,this.uniforms.dt.value=tt,super.update();return Et}}class fe extends Pt{constructor(w){super({material:{vertexShader:q,fragmentShader:xt,uniforms:{boundarySpace:{value:w.boundarySpace},velocity:{value:w.src.texture},px:{value:w.cellScale},dt:{value:w.dt}}},output:w.dst}),this.init()}update({vel:w}){this.uniforms.velocity.value=w.texture,super.update()}}class He extends Pt{constructor(w){super({material:{vertexShader:q,fragmentShader:pt,uniforms:{boundarySpace:{value:w.boundarySpace},pressure:{value:w.dst_.texture},divergence:{value:w.src.texture},px:{value:w.cellScale}}},output:w.dst,output0:w.dst_,output1:w.dst}),this.init()}update({iterations:w}){let $,tt;for(let Rt=0;Rt<w;Rt++)Rt%2===0?($=this.props.output0,tt=this.props.output1):($=this.props.output1,tt=this.props.output0),this.uniforms.pressure.value=$.texture,this.props.output=tt,super.update();return tt}}class F extends Pt{constructor(w){super({material:{vertexShader:q,fragmentShader:Mt,uniforms:{boundarySpace:{value:w.boundarySpace},pressure:{value:w.src_p.texture},velocity:{value:w.src_v.texture},px:{value:w.cellScale},dt:{value:w.dt}}},output:w.dst}),this.init()}update({vel:w,pressure:$}){this.uniforms.velocity.value=w.texture,this.uniforms.pressure.value=$.texture,super.update()}}class fn{constructor(w){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...w},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new re,this.cellScale=new re,this.boundarySpace=new re,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?Cs:Li}createAllFBO(){const $={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:Gn,magFilter:Gn,wrapS:Ei,wrapT:Ei};for(let tt in this.fbos)this.fbos[tt]=new ka(this.fboSize.x,this.fboSize.y,$)}createShaderPass(){this.advection=new It({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new te({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new De({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new fe({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new He({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new F({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const w=Math.max(1,Math.round(this.options.resolution*ht.width)),$=Math.max(1,Math.round(this.options.resolution*ht.height)),tt=1/w,Rt=1/$;this.cellScale.set(tt,Rt),this.fboSize.set(w,$)}resize(){this.calcSize();for(let w in this.fbos)this.fbos[w].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let w=this.fbos.vel_1;this.options.isViscous&&(w=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:w});const $=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:w,pressure:$})}}class le{constructor(){this.init()}init(){this.simulation=new fn,this.scene=new z_,this.camera=new wu,this.output=new fi(new yr(2,2),new gu({vertexShader:q,fragmentShader:at,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new re},palette:{value:H},bgColor:{value:ft}}})),this.scene.add(this.output)}addScene(w){this.scene.add(w)}resize(){this.simulation.resize()}render(){ht.renderer.setRenderTarget(null),ht.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class he{constructor(w){this.props=w,ht.init(w.$wrapper),O.init(w.$wrapper),O.autoIntensity=w.autoIntensity,O.takeoverDuration=w.takeoverDuration,this.lastUserInteraction=performance.now(),O.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new Q(O,this,{enabled:w.autoDemo,speed:w.autoSpeed,resumeDelay:w.autoResumeDelay,rampDuration:w.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():K.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(ht.renderer.domElement),this.output=new le}resize(){ht.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),O.update(),ht.update(),this.output.update()}loop(){this.running&&(this.render(),V.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,V.current&&(cancelAnimationFrame(V.current),V.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),O.dispose(),ht.renderer){const w=ht.renderer.domElement;w&&w.parentNode&&w.parentNode.removeChild(w),ht.renderer.dispose()}}catch{}}}const Gt=z.current;Gt.style.position=Gt.style.position||"relative",Gt.style.overflow=Gt.style.overflow||"hidden";const Ee=new he({$wrapper:Gt,autoDemo:M,autoSpeed:A,autoIntensity:C,takeoverDuration:y,autoResumeDelay:_,autoRampDuration:I});U.current=Ee,(()=>{if(!U.current)return;const Y=U.current.output?.simulation;if(!Y)return;const w=Y.options.resolution;Object.assign(Y.options,{mouse_force:o,cursor_size:e,isViscous:i,viscous:r,iterations_viscous:l,iterations_poisson:c,dt:h,BFECC:d,resolution:m,isBounce:p}),m!==w&&Y.resize()})(),Ee.start();const L=new IntersectionObserver(Y=>{const w=Y[0],$=w.isIntersecting&&w.intersectionRatio>0;K.current=$,U.current&&($&&!document.hidden?U.current.start():U.current.pause())},{threshold:[0,.01,.1]});L.observe(Gt),P.current=L;const T=new ResizeObserver(()=>{U.current&&(D.current&&cancelAnimationFrame(D.current),D.current=requestAnimationFrame(()=>{U.current&&U.current.resize()}))});return T.observe(Gt),J.current=T,()=>{if(V.current&&cancelAnimationFrame(V.current),J.current)try{J.current.disconnect()}catch{}if(P.current)try{P.current.disconnect()}catch{}U.current&&U.current.dispose(),U.current=null}},[d,e,h,p,i,c,l,o,m,r,v,M,A,C,y,_,I]),Di.useEffect(()=>{const R=U.current;if(!R)return;const H=R.output?.simulation;if(!H)return;const ft=H.options.resolution;Object.assign(H.options,{mouse_force:o,cursor_size:e,isViscous:i,viscous:r,iterations_viscous:l,iterations_poisson:c,dt:h,BFECC:d,resolution:m,isBounce:p}),R.autoDriver&&(R.autoDriver.enabled=M,R.autoDriver.speed=A,R.autoDriver.resumeDelay=_,R.autoDriver.rampDurationMs=I*1e3,R.autoDriver.mouse&&(R.autoDriver.mouse.autoIntensity=C,R.autoDriver.mouse.takeoverDuration=y)),m!==ft&&H.resize()},[o,e,i,r,l,c,h,d,m,p,M,A,C,y,_,I]),Mn.jsx("div",{ref:z,className:`liquid-ether-container ${x||""}`,style:S})}function gA(){return Mn.jsxs("div",{style:{position:"relative",width:"100%",height:"100vh"},children:[Mn.jsx("div",{style:{position:"absolute",top:0,width:"100%",zIndex:20},children:Mn.jsx(rx,{})}),Mn.jsx("div",{className:"overlay-container",children:Mn.jsx("h1",{className:"huge-text",children:"DESIGN WORX"})}),Mn.jsx(mA,{})]})}ax.createRoot(document.getElementById("root")).render(Mn.jsx(Di.StrictMode,{children:Mn.jsx(gA,{})}));
