(()=>{var e,t,r={365:(e,t,r)=>{"use strict";r.d(t,{E:()=>i});var i={degree:.0174532925,mediaPoint1:1024,mediaPoint2:768,mediaPoint3:480,mediaPoint4:320,projectDevStatus:!1}},348:(e,t,r)=>{"use strict";r.d(t,{fp:()=>y,A7:()=>P,KN:()=>k,$X:()=>x});var i=/iPhone/i,n=/iPod/i,o=/iPad/i,a=/\biOS-universal(?:.+)Mac\b/i,s=/\bAndroid(?:.+)Mobile\b/i,u=/Android/i,c=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,l=/Silk/i,d=/Windows Phone/i,p=/\bWindows(?:.+)ARM\b/i,g=/BlackBerry/i,f=/BB10/i,v=/Opera Mini/i,h=/\b(CriOS|Chrome)(?:.+)Mobile/i,m=/Mobile(?:.+)Firefox\b/i,b=function(e){return void 0!==e&&"MacIntel"===e.platform&&"number"==typeof e.maxTouchPoints&&e.maxTouchPoints>1&&"undefined"==typeof MSStream};function w(e,t){var r;return function(){for(var i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];r&&clearTimeout(r),r=setTimeout((function(){t.apply(void 0,n),r=null}),e)}}var y=function(){var e=function(e){var t={userAgent:"",platform:"",maxTouchPoints:0};e||"undefined"==typeof navigator?"string"==typeof e?t.userAgent=e:e&&e.userAgent&&(t={userAgent:e.userAgent,platform:e.platform,maxTouchPoints:e.maxTouchPoints||0}):t={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0};var r=t.userAgent,w=r.split("[FBAN");void 0!==w[1]&&(r=w[0]),void 0!==(w=r.split("Twitter"))[1]&&(r=w[0]);var y=function(e){return function(t){return t.test(e)}}(r),_={apple:{phone:y(i)&&!y(d),ipod:y(n),tablet:!y(i)&&(y(o)||b(t))&&!y(d),universal:y(a),device:(y(i)||y(n)||y(o)||y(a)||b(t))&&!y(d)},amazon:{phone:y(c),tablet:!y(c)&&y(l),device:y(c)||y(l)},android:{phone:!y(d)&&y(c)||!y(d)&&y(s),tablet:!y(d)&&!y(c)&&!y(s)&&(y(l)||y(u)),device:!y(d)&&(y(c)||y(l)||y(s)||y(u))||y(/\bokhttp\b/i)},windows:{phone:y(d),tablet:y(p),device:y(d)||y(p)},other:{blackberry:y(g),blackberry10:y(f),opera:y(v),firefox:y(m),chrome:y(h),device:y(g)||y(f)||y(v)||y(m)||y(h)},any:!1,phone:!1,tablet:!1};return _.any=_.apple.device||_.android.device||_.windows.device||_.other.device,_.phone=_.apple.phone||_.android.phone||_.windows.phone,_.tablet=_.apple.tablet||_.android.tablet||_.windows.tablet,_}(),t=e.apple.phone,r=e.android.phone,w=e.seven_inch;if(t||r||w){var y=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(y,"px"))}};function _(e){return e instanceof Function}var k=function(e){if(e||_(e)){var t=function(){e()};window.addEventListener("resize",w(15,t)),t()}},P=function(e){(e||_(e))&&document.addEventListener("DOMContentLoaded",e)},x=function(e){(e||_(e))&&window.addEventListener("load",e)}},119:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});const i={id:"c_icon-usage",viewBox:"0 0 23 33",url:"/images/sprite/sprite.svg#c_icon-usage",toString:function(){return this.url}}},27:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});const i={id:"facebook-usage",viewBox:"0 0 10 19",url:"/images/sprite/sprite.svg#facebook-usage",toString:function(){return this.url}}},125:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});const i={id:"icon_tagging-usage",viewBox:"0 0 7 15",url:"/images/sprite/sprite.svg#icon_tagging-usage",toString:function(){return this.url}}},893:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});const i={id:"logo-usage",viewBox:"0 0 135.994 23.234",url:"/images/sprite/sprite.svg#logo-usage",toString:function(){return this.url}}},695:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});const i={id:"logo_description-usage",viewBox:"0 0 134.786 11.619",url:"/images/sprite/sprite.svg#logo_description-usage",toString:function(){return this.url}}},490:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});const i={id:"logo_footer-usage",viewBox:"0 0 136 23",url:"/images/sprite/sprite.svg#logo_footer-usage",toString:function(){return this.url}}},559:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});const i={id:"rss-usage",viewBox:"0 0 36 28",url:"/images/sprite/sprite.svg#rss-usage",toString:function(){return this.url}}},587:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});const i={id:"shape-usage",viewBox:"0 0 17.49 17.491",url:"/images/sprite/sprite.svg#shape-usage",toString:function(){return this.url}}},419:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});const i={id:"twitter-usage",viewBox:"0 0 20 16",url:"/images/sprite/sprite.svg#twitter-usage",toString:function(){return this.url}}},175:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});const i={id:"ua_ru-usage",viewBox:"0 0 56 21",url:"/images/sprite/sprite.svg#ua_ru-usage",toString:function(){return this.url}}},370:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});const i={id:"youtube-usage",viewBox:"0 0 20 14",url:"/images/sprite/sprite.svg#youtube-usage",toString:function(){return this.url}}},543:(e,t,r)=>{var i={"./c_icon.svg":119,"./facebook.svg":27,"./icon_tagging.svg":125,"./logo.svg":893,"./logo_description.svg":695,"./logo_footer.svg":490,"./rss.svg":559,"./shape.svg":587,"./twitter.svg":419,"./ua_ru.svg":175,"./youtube.svg":370};function n(e){var t=o(e);return r(t)}function o(e){if(!r.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}n.keys=function(){return Object.keys(i)},n.resolve=o,e.exports=n,n.id=543},488:(e,t,r)=>{var i={"./IndexPage":[374,"vendors-node_modules_jquery_dist_jquery_js","src_js_pages_IndexPage_js"],"./IndexPage.js":[374,"vendors-node_modules_jquery_dist_jquery_js","src_js_pages_IndexPage_js"]};function n(e){if(!r.o(i,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],n=t[0];return Promise.all(t.slice(1).map(r.e)).then((()=>r(n)))}n.keys=()=>Object.keys(i),n.id=488,e.exports=n}},i={};function n(e){var t=i[e];if(void 0!==t)return t.exports;var o=i[e]={exports:{}};return r[e].call(o.exports,o,o.exports,n),o.exports}n.m=r,n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"js/"+e+".js",n.miniCssF=e=>{},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="glivera-webpack-template:",n.l=(r,i,o,a)=>{if(e[r])e[r].push(i);else{var s,u;if(void 0!==o)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+o){s=d;break}}s||(u=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+o),s.src=r),e[r]=[i];var p=(t,i)=>{s.onerror=s.onload=null,clearTimeout(g);var n=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((e=>e(i))),t)return t(i)},g=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),u&&document.head.appendChild(s)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e+"../"})(),(()=>{var e={app:0};n.f.j=(t,r)=>{var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)r.push(i[2]);else{var o=new Promise(((r,n)=>i=e[t]=[r,n]));r.push(i[2]=o);var a=n.p+n.u(t),s=new Error;n.l(a,(r=>{if(n.o(e,t)&&(0!==(i=e[t])&&(e[t]=void 0),i)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,i[1](s)}}),"chunk-"+t,t)}};var t=(t,r)=>{var i,o,[a,s,u]=r,c=0;if(a.some((t=>0!==e[t]))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(u)u(n)}for(t&&t(r);c<a.length;c++)o=a[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self.webpackChunkglivera_webpack_template=self.webpackChunkglivera_webpack_template||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),(()=>{"use strict";var e=n(348),t=n(365);function r(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var i=function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.init=this.init.bind(this),this.init()}var i,n,o;return i=t,(n=[{key:"loadFunc",value:function(){console.log("layout load"),(0,e.fp)()}},{key:"init",value:function(){var t=this;(0,e.$X)((function(){t.loadFunc()})),(0,e.KN)((function(){(0,e.fp)()}))}}])&&r(i.prototype,n),o&&r(i,o),Object.defineProperty(i,"prototype",{writable:!1}),t}();function o(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var a,s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$htmlTag=document.querySelector("html"),this.pageClass=this.$htmlTag.dataset.templateName&&this.$htmlTag.dataset.templateName.length>0?this.$htmlTag.dataset.templateName:null,this.init=this.init.bind(this),this.init()}var t,r,a;return t=e,(r=[{key:"importPage",value:function(){this.pageClass&&null!==this.pageClass&&n(488)("./".concat(this.pageClass)).then((function(e){(new(0,e.default)).init()})).catch((function(e){console.error("Failed to load page, check data-template-name at root if correct"),console.dir(e,e.stack)}))}},{key:"init",value:function(){var e=this;new i,setTimeout((function(){e.importPage()}),0)}}])&&o(t.prototype,r),a&&o(t,a),Object.defineProperty(t,"prototype",{writable:!1}),e}(),u=["color: #fff","background: #cf8e1f"].join(";");console.info("%c%s",u,"Developed by Glivera-team https://glivera-team.com/"),t.E.projectDevStatus,(a=n(543)).keys().forEach(a),(0,e.A7)((function(){new s}))})()})();