if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const u=e=>i(e,o),t={module:{uri:o},exports:l,require:u};s[o]=Promise.all(n.map((e=>t[e]||u(e)))).then((e=>(r(...e),l)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vue-samookyeon"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/chunk-vendors.21f627fa.css",revision:null},{url:"/img/1.94336353.jpeg",revision:null},{url:"/img/2.e4974dcd.jpeg",revision:null},{url:"/img/3.2bddfa23.jpeg",revision:null},{url:"/img/4.9434d2eb.jpeg",revision:null},{url:"/index.html",revision:"4bd14a2d157b51b73a976e47587e4e1e"},{url:"/js/about.49a4e7dc.js",revision:null},{url:"/js/app.6a2dee11.js",revision:null},{url:"/js/chunk-vendors.1a0c2386.js",revision:null},{url:"/manifest.json",revision:"cf3c79747204ecd38f9b545d847b7b9c"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
