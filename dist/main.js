(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(81),a=n.n(r),o=n(645),c=n.n(o),i=n(667),s=n.n(i),d=new URL(n(419),n.b),l=new URL(n(654),n.b),m=new URL(n(711),n.b),u=c()(a()),p=s()(d),f=s()(l),g=s()(m);u.push([e.id,"@font-face {\n    font-family: 'MyFont';\n    src: url("+p+") format('woff');\n    font-weight: 400;\n    font-style: normal;\n  }\n\n:root {\n    font-family: 'MyFont';\n}\n\nbody {\n    background-color: white;\n    height: 100%;\n}\n.content {\n    width: 80%;\n}\n.footer {\n    background-color:rgb(206, 13, 13);\n    text-align: center;\n    color: white;\n    font-size: 1.5em;\n}\n.header {\n    background-image: url("+f+");\n    background-color: #cccccc;\n    background-size: cover;  \n    height: 50vh;\n    margin-top: 2%;\n\n}\n.header > h1 {\n    text-align: center;\n    margin-top: 0;\n    color: rgb(243, 222, 35);\n    font-size: 8em;\n    letter-spacing: 0.2em;\n    padding-top: 8%;\n}\n.buttons {\n    display: flex;\n    justify-content: center;\n    font-size: 4em;\n    margin-bottom: 1%;\n}\n.home, .menu, .contact {\n    width: 20%;\n    height:20%;\n    text-align: center;\n    cursor: pointer;\n    color: rgb(243, 222, 35);\n}\n.homeContents {\n    display: flex;\n    padding: 5%;\n}\n.home-photo {\n    width: 50%;\n    height: auto;\n}\n.about {\n    width: 30%;\n    height: auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-left: 10%;\n    padding-left: 5%;\n    border-left: 4px solid rgb(206, 13, 13);\n    font-size: 3em;\n}\n\n.active {\n    background-color: rgba(24, 204, 69, 0.664);\n}\n\n.menuDiv {\n    margin-top: 3%;\n    display: grid;\n    grid-template: 1fr 1fr / 1fr 1fr 1fr;\n    gap: 2%;\n    padding: 5%;\n    justify-items: center;\n    align-items: center;\n}\n.menu-item {\n    display: grid;\n    width: 100%;\n    height: 70%;\n    grid-template: 1fr 6fr / 1fr 3fr;\n    padding: 1%;\n    justify-items: center;\n    align-items: center;\n    border-left: 4px solid rgb(206, 13, 13);\n    border-right: 4px solid rgb(206, 13, 13);\n}\n.menu-item > h3 {\n    grid-area: 1 / 1 / 2 / 3;\n    font-size: 3em;\n    margin: 5% 0 0 0;\n    border-bottom: 4px solid rgb(206, 13, 13);\n    \n}\nul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0 0 0 15%;\n}\nul > li {\n    font-size: 1.5em;\n    border-bottom: 2px solid rgb(206, 13, 13)\n}\n\n\n.burger-image {\n    width: 80%;\n    height: 80%;\n    grid-area: 2 / 2 / 3 / 3;\n}\n.conatctData > h2 {\n    width: 70%;\n    margin: auto;\n    font-size: 5em;\n    text-align: center;\n    border-bottom: 4px solid rgb(206, 13, 13);\n    letter-spacing: 0.12em;\n    margin-top: 8%;\n    margin-bottom: 2%;\n}\n.infoDiv {\n    display: grid;\n    grid-template: 1fr 1fr /  1fr 1fr;\n    background-image: url("+g+");\n    background-color: #cccccc;\n    background-size: cover;  \n}\n.address {\n    grid-area: 1 / 1 / 2 / 2;\n    width: 30%;\n    justify-self: center;\n    padding: 10%;\n    margin: 5% 0 0 24%;\n}\n.address > h3 {\n    font-size: 2em;\n    text-align: center;\n    border-bottom: 2px solid rgb(206, 13, 13);\n}\n.address > p {\n    font-size: 1.4em;\n    text-align: center;\n    padding-bottom: 4%;\n    border-bottom: 2px solid rgb(206, 13, 13);\n    font-weight: 600;\n}\n.addressIconDiv {\n    display: flex;\n    justify-content: center;\n}\n.addressIconImg {\n    width: 47%;\n}\n.contactDiv {\n    grid-area: 1 / 2 / 2 / 3;\n    width: 30%;\n    justify-self: center;\n    padding: 10%;\n    margin: 5% 24% 0 0;\n}\n.conatctDiv {\n    grid-area: 1 / 2 / 2 / 3;\n    width: 30%;\n    justify-self: center;\n    padding: 10%;\n    margin: 5% 24% 0 0;\n}\n.contactIconDiv {\n    display: flex;\n    justify-content: center;\n}\n.contactIconImg {\n    width: 47%;\n}\n.contactDiv > h3 {\n    font-size: 2em;\n    text-align: center;\n    border-bottom: 2px solid rgb(206, 13, 13);\n}\n.contactDiv > p {\n    font-size: 1.4em;\n    text-align: center;\n    padding-bottom: 4%;\n    border-bottom: 2px solid rgb(206, 13, 13);\n    font-weight: 600;\n}\n.mapDiv {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin: auto;\n    background-color: white;\n    grid-area: 2 / 1 / 3 / 3;\n    width: 60%;\n    height: 70%;\n}\n.mapDiv > h3 {\n    font-size: 2em;\n    margin: 0 0 0 1%;\n}\n\n",""]);const h=u},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&c[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},c=[],i=0;i<e.length;i++){var s=e[i],d=r.base?s[0]+r.base:s[0],l=o[d]||0,m="".concat(d," ").concat(l);o[d]=l+1;var u=n(m),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(p);else{var f=a(p,r);r.byIndex=i,t.splice(i,0,{identifier:m,updater:f,references:1})}c.push(m)}return c}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var c=0;c<o.length;c++){var i=n(o[c]);t[i].references--}for(var s=r(e,a),d=0;d<o.length;d++){var l=n(o[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},419:(e,t,n)=>{e.exports=n.p+"424d660e68902a7d5a3d.woff"},675:(e,t,n)=>{e.exports=n.p+"ec78ba76af89dc018cc9.jpg"},925:(e,t,n)=>{e.exports=n.p+"2fa802ccc53d3663463c.jpg"},37:(e,t,n)=>{e.exports=n.p+"2fa802ccc53d3663463c.jpg"},742:(e,t,n)=>{e.exports=n.p+"2fa802ccc53d3663463c.jpg"},22:(e,t,n)=>{e.exports=n.p+"2fa802ccc53d3663463c.jpg"},909:(e,t,n)=>{e.exports=n.p+"2fa802ccc53d3663463c.jpg"},472:(e,t,n)=>{e.exports=n.p+"2fa802ccc53d3663463c.jpg"},711:(e,t,n)=>{e.exports=n.p+"4b2c74da65f9f7ddffa4.jpg"},228:(e,t,n)=>{e.exports=n.p+"3ca4781f6fa40da93cdb.png"},654:(e,t,n)=>{e.exports=n.p+"d85a3c60845642b165e9.jpg"},5:(e,t,n)=>{e.exports=n.p+"179f13647a7a4811a085.png"},226:(e,t,n)=>{e.exports=n.p+"fa47145f3234f03bb8b1.png"}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,(()=>{var e=n(675);const t=()=>{const t=document.createElement("div"),n=document.createElement("img"),r=document.createElement("div");return t.classList.add("homeContents"),n.classList.add("home-photo"),r.classList.add("about"),r.textContent="Best Burgers Restaurant is a place where excellent flavors and cozy atmosphere evoke truly positive emotions. It is a place where your satisfaction has been a priority for 4 years and the dishes are seasoned with passion and commitment. We try to make the visit to our restaurant always a nice time and pleasure for the palate.",n.src=e,t.append(n,r),[t]};var r=n(925),a=n(37),o=n(742),c=n(22),i=n(909),s=n(472);var d=n(5),l=n(228),m=n(226);var u=n(379),p=n.n(u),f=n(795),g=n.n(f),h=n(569),v=n.n(h),b=n(565),y=n.n(b),x=n(216),L=n.n(x),E=n(589),w=n.n(E),C=n(426),j={};j.styleTagTransform=w(),j.setAttributes=y(),j.insert=v().bind(null,"head"),j.domAPI=g(),j.insertStyleElement=L(),p()(C.Z,j),C.Z&&C.Z.locals&&C.Z.locals,document.getElementById("content").append(...(()=>{const e=document.createElement("div"),t=document.createElement("h1"),n=document.createElement("div"),r=document.createElement("div"),a=document.createElement("div"),o=document.createElement("div"),c=document.createElement("div"),i=document.createElement("div");return e.classList.add("header"),t.classList.add("name"),n.classList.add("buttons"),r.classList.add("home"),a.classList.add("menu"),o.classList.add("contact"),c.classList.add("body"),i.classList.add("footer"),t.textContent="Best Burgers",r.textContent="Home",a.textContent="Menu",o.textContent="Contact",i.textContent="Best burgers by Maciej Dabrowski",e.append(t,n),n.append(r,a,o),[e,c,i]})());const T=document.querySelector(".body");T.append(...t());const k=document.querySelector(".home"),D=document.querySelector(".menu"),I=document.querySelector(".contact");k.addEventListener("click",(()=>{I.classList.remove("active"),D.classList.remove("active"),k.classList.add("active"),T.innerHTML="",T.append(...t())})),D.addEventListener("click",(()=>{k.classList.remove("active"),I.classList.remove("active"),D.classList.add("active"),T.innerHTML="",T.append(...(()=>{const e=document.createElement("div");e.classList.add("menuDiv");let t=[],n=["Classic","Cheeseburger","Chickenburger","Spicyburger","Double-Classic","Double-Cheeseburger"],d=[["200g Beef","Lettuce","Tomato","Pickle","Mayo","Onion"],["200g Beef","Lettuce","Tomato","Pickle","Mayo","Cheddar","Onion"],["200g Chicken Breast","Lettuce","Cheddar","Pickle","Mayo"],["200g Beef","Lettuce","Jalapeno","Tomato","Mayo"],["2x 200g Beef","Lettuce","Tomato","Pickle","Mayo"],["2x 200g Beef","Lettuce","Tomato","Pickle","Mayo","2x Cheddar"]],l=[r,a,o,c,i,s];for(let e=0;e<6;e++){let r=document.createElement("div");r.classList.add("menu-item",`menu-item-${e}`);let a=document.createElement("h3");a.textContent=n[e];let o=document.createElement("ul");for(let t=0;t<d[e].length;t++){let n=document.createElement("li");n.textContent=d[e][t],o.appendChild(n)}let c=document.createElement("img");c.classList.add("burger-image",`burger-image-${e}`),c.src=l[e],r.append(a,o,c),t.push(r)}return e.append(...t),[e]})())})),I.addEventListener("click",(()=>{k.classList.remove("active"),D.classList.remove("active"),I.classList.add("active"),T.innerHTML="",T.append(...(()=>{const e=document.createElement("div");return e.classList.add("conatctData"),e.append((()=>{const e=document.createElement("h2");return e.textContent="Contact Us!",e})(),(()=>{const e=document.createElement("div");return e.classList.add("infoDiv"),e.append((()=>{const e=document.createElement("div");e.classList.add("address");const t=document.createElement("div");t.classList.add("addressIconDiv");const n=document.createElement("img");n.classList.add("addressIconImg"),n.src=d,t.append(n);const r=document.createElement("h3");r.classList.add("addressHeader"),r.innerText="Address:";const a=document.createElement("p");a.classList.add("addressName"),a.innerText="Best Burgers - Wrocław";const o=document.createElement("p");return o.classList.add("addressStreet"),o.innerText="Psie Budy 7/8/9, 50-080 Wrocław",e.append(t,r,a,o),e})(),(()=>{const e=document.createElement("div");e.classList.add("contactDiv");const t=document.createElement("div");t.classList.add("contactIconDiv");const n=document.createElement("img");n.classList.add("contactIconImg"),n.src=l,t.append(n);const r=document.createElement("h3");r.classList.add("contactHeader"),r.innerText="Contact:";const a=document.createElement("p");a.classList.add("contactEmail"),a.innerText="Email: best-burgers@burger.com";const o=document.createElement("p");return o.classList.add("contactPhone"),o.innerText="Phone: +48 999 999 999",e.append(t,r,a,o),e})(),(()=>{const e=document.createElement("div");e.classList.add("mapDiv");const t=document.createElement("h3");t.textContent="FIND US!";const n=document.createElement("img");return n.classList.add("mapImg"),n.src=m,e.append(t,n),e})()),e})()),[e]})())}))})()})();