(()=>{var e,t,n={365:(e,t,n)=>{"use strict";n.d(t,{E:()=>r});var r={degree:.0174532925,mediaPoint1:1024,mediaPoint2:768,mediaPoint3:480,mediaPoint4:320,projectDevStatus:!1}},348:(e,t,n)=>{"use strict";n.d(t,{fp:()=>w,A7:()=>T,KN:()=>P,$X:()=>_});var r=/iPhone/i,o=/iPod/i,i=/iPad/i,a=/\biOS-universal(?:.+)Mac\b/i,s=/\bAndroid(?:.+)Mobile\b/i,u=/Android/i,l=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,c=/Silk/i,d=/Windows Phone/i,p=/\bWindows(?:.+)ARM\b/i,f=/BlackBerry/i,v=/BB10/i,g=/Opera Mini/i,h=/\b(CriOS|Chrome)(?:.+)Mobile/i,m=/Mobile(?:.+)Firefox\b/i,b=function(e){return void 0!==e&&"MacIntel"===e.platform&&"number"==typeof e.maxTouchPoints&&e.maxTouchPoints>1&&"undefined"==typeof MSStream};function y(e,t){var n;return function(){for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];n&&clearTimeout(n),n=setTimeout((function(){t.apply(void 0,o),n=null}),e)}}var w=function(){var e=function(e){var t={userAgent:"",platform:"",maxTouchPoints:0};e||"undefined"==typeof navigator?"string"==typeof e?t.userAgent=e:e&&e.userAgent&&(t={userAgent:e.userAgent,platform:e.platform,maxTouchPoints:e.maxTouchPoints||0}):t={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0};var n=t.userAgent,y=n.split("[FBAN");void 0!==y[1]&&(n=y[0]),void 0!==(y=n.split("Twitter"))[1]&&(n=y[0]);var w=function(e){return function(t){return t.test(e)}}(n),k={apple:{phone:w(r)&&!w(d),ipod:w(o),tablet:!w(r)&&(w(i)||b(t))&&!w(d),universal:w(a),device:(w(r)||w(o)||w(i)||w(a)||b(t))&&!w(d)},amazon:{phone:w(l),tablet:!w(l)&&w(c),device:w(l)||w(c)},android:{phone:!w(d)&&w(l)||!w(d)&&w(s),tablet:!w(d)&&!w(l)&&!w(s)&&(w(c)||w(u)),device:!w(d)&&(w(l)||w(c)||w(s)||w(u))||w(/\bokhttp\b/i)},windows:{phone:w(d),tablet:w(p),device:w(d)||w(p)},other:{blackberry:w(f),blackberry10:w(v),opera:w(g),firefox:w(m),chrome:w(h),device:w(f)||w(v)||w(g)||w(m)||w(h)},any:!1,phone:!1,tablet:!1};return k.any=k.apple.device||k.android.device||k.windows.device||k.other.device,k.phone=k.apple.phone||k.android.phone||k.windows.phone,k.tablet=k.apple.tablet||k.android.tablet||k.windows.tablet,k}(),t=e.apple.phone,n=e.android.phone,y=e.seven_inch;if(t||n||y){var w=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(w,"px"))}};function k(e){return e instanceof Function}var P=function(e){if(e||k(e)){var t=function(){e()};window.addEventListener("resize",y(15,t)),t()}},T=function(e){(e||k(e))&&document.addEventListener("DOMContentLoaded",e)},_=function(e){(e||k(e))&&window.addEventListener("load",e)}},125:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});const r={id:"icon_tagging-usage",viewBox:"0 0 7 15",url:"/images/sprite/sprite.svg#icon_tagging-usage",toString:function(){return this.url}}},893:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});const r={id:"logo-usage",viewBox:"0 0 135.994 23.234",url:"/images/sprite/sprite.svg#logo-usage",toString:function(){return this.url}}},490:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});const r={id:"logo_footer-usage",viewBox:"0 0 136 23",url:"/images/sprite/sprite.svg#logo_footer-usage",toString:function(){return this.url}}},543:(e,t,n)=>{var r={"./icon_tagging.svg":125,"./logo.svg":893,"./logo_footer.svg":490};function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=543},488:(e,t,n)=>{var r={"./IndexPage":[75,"src_js_pages_IndexPage_js"],"./IndexPage.js":[75,"src_js_pages_IndexPage_js"]};function o(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((()=>n(o)))}o.keys=()=>Object.keys(r),o.id=488,e.exports=o}},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={exports:{}};return n[e](i,i.exports,o),i.exports}o.m=n,o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,n)=>(o.f[n](e,t),t)),[])),o.u=e=>"js/"+e+".js",o.miniCssF=e=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="glivera-webpack-template:",o.l=(n,r,i,a)=>{if(e[n])e[n].push(r);else{var s,u;if(void 0!==i)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+i){s=d;break}}s||(u=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",t+i),s.src=n),e[n]=[r];var p=(t,r)=>{s.onerror=s.onload=null,clearTimeout(f);var o=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(r))),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),u&&document.head.appendChild(s)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e+"../"})(),(()=>{var e={app:0};o.f.j=(t,n)=>{var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var i=new Promise(((n,o)=>r=e[t]=[n,o]));n.push(r[2]=i);var a=o.p+o.u(t),s=new Error;o.l(a,(n=>{if(o.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,r[1](s)}}),"chunk-"+t,t)}};var t=(t,n)=>{var r,i,[a,s,u]=n,l=0;if(a.some((t=>0!==e[t]))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(u)u(o)}for(t&&t(n);l<a.length;l++)i=a[l],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0},n=self.webpackChunkglivera_webpack_template=self.webpackChunkglivera_webpack_template||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),(()=>{"use strict";var e=o(348),t=o(365);function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.init=this.init.bind(this),this.init()}var r,o,i;return r=t,(o=[{key:"loadFunc",value:function(){console.log("layout load"),(0,e.fp)()}},{key:"init",value:function(){var t=this;(0,e.$X)((function(){t.loadFunc()})),(0,e.KN)((function(){(0,e.fp)()}))}}])&&n(r.prototype,o),i&&n(r,i),Object.defineProperty(r,"prototype",{writable:!1}),t}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a,s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$htmlTag=document.querySelector("html"),this.pageClass=this.$htmlTag.dataset.templateName&&this.$htmlTag.dataset.templateName.length>0?this.$htmlTag.dataset.templateName:null,this.init=this.init.bind(this),this.init()}var t,n,a;return t=e,(n=[{key:"importPage",value:function(){this.pageClass&&null!==this.pageClass&&o(488)("./".concat(this.pageClass)).then((function(e){(new(0,e.default)).init()})).catch((function(e){console.error("Failed to load page, check data-template-name at root if correct"),console.dir(e,e.stack)}))}},{key:"init",value:function(){var e=this;new r,setTimeout((function(){e.importPage()}),0)}}])&&i(t.prototype,n),a&&i(t,a),Object.defineProperty(t,"prototype",{writable:!1}),e}(),u=["color: #fff","background: #cf8e1f"].join(";");console.info("%c%s",u,"Developed by Glivera-team https://glivera-team.com/"),t.E.projectDevStatus,(a=o(543)).keys().forEach(a),(0,e.A7)((function(){new s}))})()})();