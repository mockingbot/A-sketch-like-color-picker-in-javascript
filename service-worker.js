"use strict";var precacheConfig=[["/mb-color-picker/index.html","79a2649a98f89650db5d68909a630f4f"],["/mb-color-picker/static/css/main.b7368136.css","422dc6e2108cf9bf15767c33b6864cb7"],["/mb-color-picker/static/js/main.2aa1f1ed.js","ea9830ba588acd26f4741523df8ac763"],["/mb-color-picker/static/media/custom.03d005d5.woff","03d005d54504bdd2791bc2f63e6f46e3"],["/mb-color-picker/static/media/custom.186d1040.svg","186d1040a4bc3862b52fb0d1092ced37"],["/mb-color-picker/static/media/custom.93fc4954.ttf","93fc495449f76225940d4663ccdcf854"],["/mb-color-picker/static/media/dora.1a2a0d69.svg","1a2a0d69c54bffa79afca4a9be07c743"],["/mb-color-picker/static/media/dora.43aac7f8.ttf","43aac7f8bc42f68da1a037518df7e461"],["/mb-color-picker/static/media/dora.eb81a2a5.woff","eb81a2a5e38fbd30ea9ce661fcf1220d"],["/mb-color-picker/static/media/font-awesome.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/mb-color-picker/static/media/font-awesome.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/mb-color-picker/static/media/font-awesome.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/mb-color-picker/static/media/font-awesome.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/mb-color-picker/static/media/material.012cf6a1.woff","012cf6a10129e2275d79d6adac7f3b02"],["/mb-color-picker/static/media/material.570eb838.woff2","570eb83859dc23dd0eec423a49e147fe"],["/mb-color-picker/static/media/material.a37b0c01.ttf","a37b0c01c0baf1888ca812cc0508f6e2"],["/mb-color-picker/static/media/mb-icons.4a7cd205.ttf","4a7cd2056e6418b619292484300bf570"],["/mb-color-picker/static/media/mb-icons.7bfd0ff8.svg","7bfd0ff85d9ffb0aec7a5fb73ec5a0af"],["/mb-color-picker/static/media/mb-icons.fabc1dac.woff","fabc1dac04c0abb197bcabb1df65ec0b"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var c=new URL(e);return r&&c.pathname.match(r)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),c=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var c="/mb-color-picker/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});