!function(t){var e={};function n(c){if(e[c])return e[c].exports;var r=e[c]={i:c,l:!1,exports:{}};return t[c].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,c){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:c})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e){const n="v1.00",c=["/offline.html","/assets/javascripts/body.bundle-1956f83e.js","/assets/stylesheets/all.bundle-714ba0b8.css"],r=[/https?:\/\/api.mixpanel.com\//,/https?:\/\/api.segment.io\//,/https?:\/\/in.getclicky.com\//,/https?:\/\/zenkaffe.herokuapp.com\//,/https?:\/\/p.typekit.net\//,/\/__rack\//];function o(t){return fetch(t).then(e=>{var n=e.clone();return caches.open(i("resources")).then(e=>{e.put(t,n)}),t.method,t.url,e})}function s(t){return t.method,t.url,t.url.match(/\.(jpg|png|gif|svg|jpeg)(\?.*)?$/)?caches.match("/offline.svg"):caches.match("/offline.html")}function i(){return[n,...arguments].join(":")}self.addEventListener("install",function(t){t.waitUntil(caches.open(i("offline")).then(t=>t.addAll(c)).then(()=>{}))}),self.addEventListener("fetch",function(t){const e=t.request;!function(t){return"GET"!==t.method||r.some(e=>t.url.match(e))}(e)?function(t){return~t.headers.get("Accept").indexOf("text/html")}(e)?t.respondWith(function(t){return o(t).catch(()=>(function(t){return caches.match(t).then(e=>e||s(t))})(t))}(e)):t.respondWith(function(t){return caches.match(t).then(e=>(t.method,t.url,e||o(t).catch(()=>s(t))))}(e)):t.respondWith(function(t){return window.fetch(t).then(e=>(t.method,t.url,e)).catch(()=>s(t))}(e))}),self.addEventListener("activate",function(t){t.waitUntil(caches.keys().then(t=>Promise.all(t.filter(t=>!t.startsWith(n)).map(t=>caches.delete(t)))).then(()=>{}))})}]);