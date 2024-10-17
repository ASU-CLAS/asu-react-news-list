/*! For license information please see drupalNews.js.LICENSE.txt */
(()=>{var e={2505:(e,r,t)=>{e.exports=t(8015)},5592:(e,r,t)=>{"use strict";var a=t(9516),n=t(7522),o=t(3948),i=t(9106),s=t(9615),l=t(2012),c=t(4202),u=t(7763);e.exports=function(e){return new Promise((function(r,t){var d=e.data,p=e.headers,f=e.responseType;a.isFormData(d)&&delete p["Content-Type"];var m=new XMLHttpRequest;if(e.auth){var g=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";p.Authorization="Basic "+btoa(g+":"+h)}var b=s(e.baseURL,e.url);function y(){if(m){var a="getAllResponseHeaders"in m?l(m.getAllResponseHeaders()):null,o={data:f&&"text"!==f&&"json"!==f?m.response:m.responseText,status:m.status,statusText:m.statusText,headers:a,config:e,request:m};n(r,t,o),m=null}}if(m.open(e.method.toUpperCase(),i(b,e.params,e.paramsSerializer),!0),m.timeout=e.timeout,"onloadend"in m?m.onloadend=y:m.onreadystatechange=function(){m&&4===m.readyState&&(0!==m.status||m.responseURL&&0===m.responseURL.indexOf("file:"))&&setTimeout(y)},m.onabort=function(){m&&(t(u("Request aborted",e,"ECONNABORTED",m)),m=null)},m.onerror=function(){t(u("Network Error",e,null,m)),m=null},m.ontimeout=function(){var r="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(r=e.timeoutErrorMessage),t(u(r,e,e.transitional&&e.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",m)),m=null},a.isStandardBrowserEnv()){var v=(e.withCredentials||c(b))&&e.xsrfCookieName?o.read(e.xsrfCookieName):void 0;v&&(p[e.xsrfHeaderName]=v)}"setRequestHeader"in m&&a.forEach(p,(function(e,r){void 0===d&&"content-type"===r.toLowerCase()?delete p[r]:m.setRequestHeader(r,e)})),a.isUndefined(e.withCredentials)||(m.withCredentials=!!e.withCredentials),f&&"json"!==f&&(m.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&m.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&m.upload&&m.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){m&&(m.abort(),t(e),m=null)})),d||(d=null),m.send(d)}))}},8015:(e,r,t)=>{"use strict";var a=t(9516),n=t(9012),o=t(5155),i=t(5343);function s(e){var r=new o(e),t=n(o.prototype.request,r);return a.extend(t,o.prototype,r),a.extend(t,r),t}var l=s(t(6987));l.Axios=o,l.create=function(e){return s(i(l.defaults,e))},l.Cancel=t(1928),l.CancelToken=t(3191),l.isCancel=t(3864),l.all=function(e){return Promise.all(e)},l.spread=t(7980),l.isAxiosError=t(5019),e.exports=l,e.exports.default=l},1928:e=>{"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},3191:(e,r,t)=>{"use strict";var a=t(1928);function n(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var r;this.promise=new Promise((function(e){r=e}));var t=this;e((function(e){t.reason||(t.reason=new a(e),r(t.reason))}))}n.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},n.source=function(){var e;return{token:new n((function(r){e=r})),cancel:e}},e.exports=n},3864:e=>{"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},5155:(e,r,t)=>{"use strict";var a=t(9516),n=t(9106),o=t(3471),i=t(4490),s=t(5343),l=t(4841),c=l.validators;function u(e){this.defaults=e,this.interceptors={request:new o,response:new o}}u.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=s(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var r=e.transitional;void 0!==r&&l.assertOptions(r,{silentJSONParsing:c.transitional(c.boolean,"1.0.0"),forcedJSONParsing:c.transitional(c.boolean,"1.0.0"),clarifyTimeoutError:c.transitional(c.boolean,"1.0.0")},!1);var t=[],a=!0;this.interceptors.request.forEach((function(r){"function"==typeof r.runWhen&&!1===r.runWhen(e)||(a=a&&r.synchronous,t.unshift(r.fulfilled,r.rejected))}));var n,o=[];if(this.interceptors.response.forEach((function(e){o.push(e.fulfilled,e.rejected)})),!a){var u=[i,void 0];for(Array.prototype.unshift.apply(u,t),u=u.concat(o),n=Promise.resolve(e);u.length;)n=n.then(u.shift(),u.shift());return n}for(var d=e;t.length;){var p=t.shift(),f=t.shift();try{d=p(d)}catch(e){f(e);break}}try{n=i(d)}catch(e){return Promise.reject(e)}for(;o.length;)n=n.then(o.shift(),o.shift());return n},u.prototype.getUri=function(e){return e=s(this.defaults,e),n(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},a.forEach(["delete","get","head","options"],(function(e){u.prototype[e]=function(r,t){return this.request(s(t||{},{method:e,url:r,data:(t||{}).data}))}})),a.forEach(["post","put","patch"],(function(e){u.prototype[e]=function(r,t,a){return this.request(s(a||{},{method:e,url:r,data:t}))}})),e.exports=u},3471:(e,r,t)=>{"use strict";var a=t(9516);function n(){this.handlers=[]}n.prototype.use=function(e,r,t){return this.handlers.push({fulfilled:e,rejected:r,synchronous:!!t&&t.synchronous,runWhen:t?t.runWhen:null}),this.handlers.length-1},n.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},n.prototype.forEach=function(e){a.forEach(this.handlers,(function(r){null!==r&&e(r)}))},e.exports=n},9615:(e,r,t)=>{"use strict";var a=t(9137),n=t(4680);e.exports=function(e,r){return e&&!a(r)?n(e,r):r}},7763:(e,r,t)=>{"use strict";var a=t(5449);e.exports=function(e,r,t,n,o){var i=new Error(e);return a(i,r,t,n,o)}},4490:(e,r,t)=>{"use strict";var a=t(9516),n=t(2881),o=t(3864),i=t(6987);function s(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return s(e),e.headers=e.headers||{},e.data=n.call(e,e.data,e.headers,e.transformRequest),e.headers=a.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),a.forEach(["delete","get","head","post","put","patch","common"],(function(r){delete e.headers[r]})),(e.adapter||i.adapter)(e).then((function(r){return s(e),r.data=n.call(e,r.data,r.headers,e.transformResponse),r}),(function(r){return o(r)||(s(e),r&&r.response&&(r.response.data=n.call(e,r.response.data,r.response.headers,e.transformResponse))),Promise.reject(r)}))}},5449:e=>{"use strict";e.exports=function(e,r,t,a,n){return e.config=r,t&&(e.code=t),e.request=a,e.response=n,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},5343:(e,r,t)=>{"use strict";var a=t(9516);e.exports=function(e,r){r=r||{};var t={},n=["url","method","data"],o=["headers","auth","proxy","params"],i=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function l(e,r){return a.isPlainObject(e)&&a.isPlainObject(r)?a.merge(e,r):a.isPlainObject(r)?a.merge({},r):a.isArray(r)?r.slice():r}function c(n){a.isUndefined(r[n])?a.isUndefined(e[n])||(t[n]=l(void 0,e[n])):t[n]=l(e[n],r[n])}a.forEach(n,(function(e){a.isUndefined(r[e])||(t[e]=l(void 0,r[e]))})),a.forEach(o,c),a.forEach(i,(function(n){a.isUndefined(r[n])?a.isUndefined(e[n])||(t[n]=l(void 0,e[n])):t[n]=l(void 0,r[n])})),a.forEach(s,(function(a){a in r?t[a]=l(e[a],r[a]):a in e&&(t[a]=l(void 0,e[a]))}));var u=n.concat(o).concat(i).concat(s),d=Object.keys(e).concat(Object.keys(r)).filter((function(e){return-1===u.indexOf(e)}));return a.forEach(d,c),t}},7522:(e,r,t)=>{"use strict";var a=t(7763);e.exports=function(e,r,t){var n=t.config.validateStatus;t.status&&n&&!n(t.status)?r(a("Request failed with status code "+t.status,t.config,null,t.request,t)):e(t)}},2881:(e,r,t)=>{"use strict";var a=t(9516),n=t(6987);e.exports=function(e,r,t){var o=this||n;return a.forEach(t,(function(t){e=t.call(o,e,r)})),e}},6987:(e,r,t)=>{"use strict";var a=t(9516),n=t(7018),o=t(5449),i={"Content-Type":"application/x-www-form-urlencoded"};function s(e,r){!a.isUndefined(e)&&a.isUndefined(e["Content-Type"])&&(e["Content-Type"]=r)}var l,c={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(l=t(5592)),l),transformRequest:[function(e,r){return n(r,"Accept"),n(r,"Content-Type"),a.isFormData(e)||a.isArrayBuffer(e)||a.isBuffer(e)||a.isStream(e)||a.isFile(e)||a.isBlob(e)?e:a.isArrayBufferView(e)?e.buffer:a.isURLSearchParams(e)?(s(r,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):a.isObject(e)||r&&"application/json"===r["Content-Type"]?(s(r,"application/json"),function(e){if(a.isString(e))try{return(0,JSON.parse)(e),a.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var r=this.transitional,t=r&&r.silentJSONParsing,n=r&&r.forcedJSONParsing,i=!t&&"json"===this.responseType;if(i||n&&a.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(i){if("SyntaxError"===e.name)throw o(e,this,"E_JSON_PARSE");throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),a.forEach(["post","put","patch"],(function(e){c.headers[e]=a.merge(i)})),e.exports=c},9012:e=>{"use strict";e.exports=function(e,r){return function(){for(var t=new Array(arguments.length),a=0;a<t.length;a++)t[a]=arguments[a];return e.apply(r,t)}}},9106:(e,r,t)=>{"use strict";var a=t(9516);function n(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,r,t){if(!r)return e;var o;if(t)o=t(r);else if(a.isURLSearchParams(r))o=r.toString();else{var i=[];a.forEach(r,(function(e,r){null!=e&&(a.isArray(e)?r+="[]":e=[e],a.forEach(e,(function(e){a.isDate(e)?e=e.toISOString():a.isObject(e)&&(e=JSON.stringify(e)),i.push(n(r)+"="+n(e))})))})),o=i.join("&")}if(o){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}},4680:e=>{"use strict";e.exports=function(e,r){return r?e.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):e}},3948:(e,r,t)=>{"use strict";var a=t(9516);e.exports=a.isStandardBrowserEnv()?{write:function(e,r,t,n,o,i){var s=[];s.push(e+"="+encodeURIComponent(r)),a.isNumber(t)&&s.push("expires="+new Date(t).toGMTString()),a.isString(n)&&s.push("path="+n),a.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var r=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},9137:e=>{"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},5019:e=>{"use strict";e.exports=function(e){return"object"==typeof e&&!0===e.isAxiosError}},4202:(e,r,t)=>{"use strict";var a=t(9516);e.exports=a.isStandardBrowserEnv()?function(){var e,r=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");function n(e){var a=e;return r&&(t.setAttribute("href",a),a=t.href),t.setAttribute("href",a),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return e=n(window.location.href),function(r){var t=a.isString(r)?n(r):r;return t.protocol===e.protocol&&t.host===e.host}}():function(){return!0}},7018:(e,r,t)=>{"use strict";var a=t(9516);e.exports=function(e,r){a.forEach(e,(function(t,a){a!==r&&a.toUpperCase()===r.toUpperCase()&&(e[r]=t,delete e[a])}))}},2012:(e,r,t)=>{"use strict";var a=t(9516),n=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var r,t,o,i={};return e?(a.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),r=a.trim(e.substr(0,o)).toLowerCase(),t=a.trim(e.substr(o+1)),r){if(i[r]&&n.indexOf(r)>=0)return;i[r]="set-cookie"===r?(i[r]?i[r]:[]).concat([t]):i[r]?i[r]+", "+t:t}})),i):i}},7980:e=>{"use strict";e.exports=function(e){return function(r){return e.apply(null,r)}}},4841:(e,r,t)=>{"use strict";var a=t(4198),n={};["object","boolean","number","function","string","symbol"].forEach((function(e,r){n[e]=function(t){return typeof t===e||"a"+(r<1?"n ":" ")+e}}));var o={},i=a.version.split(".");function s(e,r){for(var t=r?r.split("."):i,a=e.split("."),n=0;n<3;n++){if(t[n]>a[n])return!0;if(t[n]<a[n])return!1}return!1}n.transitional=function(e,r,t){var n=r&&s(r);function i(e,r){return"[Axios v"+a.version+"] Transitional option '"+e+"'"+r+(t?". "+t:"")}return function(t,a,s){if(!1===e)throw new Error(i(a," has been removed in "+r));return n&&!o[a]&&(o[a]=!0,console.warn(i(a," has been deprecated since v"+r+" and will be removed in the near future"))),!e||e(t,a,s)}},e.exports={isOlderVersion:s,assertOptions:function(e,r,t){if("object"!=typeof e)throw new TypeError("options must be an object");for(var a=Object.keys(e),n=a.length;n-- >0;){var o=a[n],i=r[o];if(i){var s=e[o],l=void 0===s||i(s,o,e);if(!0!==l)throw new TypeError("option "+o+" must be "+l)}else if(!0!==t)throw Error("Unknown option "+o)}},validators:n}},9516:(e,r,t)=>{"use strict";var a=t(9012),n=Object.prototype.toString;function o(e){return"[object Array]"===n.call(e)}function i(e){return void 0===e}function s(e){return null!==e&&"object"==typeof e}function l(e){if("[object Object]"!==n.call(e))return!1;var r=Object.getPrototypeOf(e);return null===r||r===Object.prototype}function c(e){return"[object Function]"===n.call(e)}function u(e,r){if(null!=e)if("object"!=typeof e&&(e=[e]),o(e))for(var t=0,a=e.length;t<a;t++)r.call(null,e[t],t,e);else for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.call(null,e[n],n,e)}e.exports={isArray:o,isArrayBuffer:function(e){return"[object ArrayBuffer]"===n.call(e)},isBuffer:function(e){return null!==e&&!i(e)&&null!==e.constructor&&!i(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isPlainObject:l,isUndefined:i,isDate:function(e){return"[object Date]"===n.call(e)},isFile:function(e){return"[object File]"===n.call(e)},isBlob:function(e){return"[object Blob]"===n.call(e)},isFunction:c,isStream:function(e){return s(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:u,merge:function e(){var r={};function t(t,a){l(r[a])&&l(t)?r[a]=e(r[a],t):l(t)?r[a]=e({},t):o(t)?r[a]=t.slice():r[a]=t}for(var a=0,n=arguments.length;a<n;a++)u(arguments[a],t);return r},extend:function(e,r,t){return u(r,(function(r,n){e[n]=t&&"function"==typeof r?a(r,t):r})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},3346:(e,r,t)=>{"use strict";t.d(r,{A:()=>o});var a=t(6314),n=t.n(a)()((function(e){return e[1]}));n.push([e.id,"\n.D8News button {\n    background: none;\n    color: inherit;\n    border: none;\n    padding: 0;\n    font: inherit;\n    cursor: pointer;\n    outline: inherit;\n    height: 100%;\n}\n.D8News .card-body,\n.D8News .card-tags {\n  text-align:left;\n}\n.D8News .card-tags a,\n.D8News .card-tags span {\n  text-align:left;\n  margin-right:4px;\n  margin-bottom:4px;\n}\n.D8News .card-tags {\n  display:none;\n}\n\n/* List view styles */\n\n.list-view.card-body {\n  display: flex;\n  justify-content: left;\n  align-items: center;\n  height: 100%;\n  max-width: 75%;\n}\n\n.text-muted {\n  font-size: 60%;\n}\n\n.list-view.card-title {\n  padding: 30px;\n  position: relative;\n  right: 80px;\n  background-color: white;\n  max-height: inherit;\n}\n\n@media only screen and (max-width: 600px) {\n  .list-view.card-title {\n    padding: 10px;\n    right: 0;\n    background-color: white;\n    max-height: 100%;\n    font-size: 100%;\n    text-align: left;\n  }\n\n\n\n}\n\n/* loading animation */\n\n.loader {\n  text-align: center;\n  margin-top: 100px;\n}\n\n/* Error message */\n.errorContainer{\n  text-align: center;\n  padding: 45px;\n}\n\n.errorIcon{\n  width: 75px;\n  padding-bottom: 18px;\n}\n\n.errorTitle{\n  color: #eeeeee;\n}\n\n.errorCode{\n  color: #eeeeee;\n}\n",""]);const o=n},6523:(e,r,t)=>{"use strict";t.d(r,{A:()=>o});var a=t(6314),n=t.n(a)()((function(e){return e[1]}));n.push([e.id,"",""]);const o=n},6314:e=>{"use strict";e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var t=e(r);return r[2]?"@media ".concat(r[2]," {").concat(t,"}"):t})).join("")},r.i=function(e,t,a){"string"==typeof e&&(e=[[null,e,""]]);var n={};if(a)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(n[i]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);a&&n[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),r.push(l))}},r}},6067:function(e,r,t){var a;e=t.nmd(e),function(){var n=(e&&e.exports,"object"==typeof t.g&&t.g);n.global!==n&&n.window;var o=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,i=/[\x01-\x7F]/g,s=/[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,l=/<\u20D2|=\u20E5|>\u20D2|\u205F\u200A|\u219D\u0338|\u2202\u0338|\u2220\u20D2|\u2229\uFE00|\u222A\uFE00|\u223C\u20D2|\u223D\u0331|\u223E\u0333|\u2242\u0338|\u224B\u0338|\u224D\u20D2|\u224E\u0338|\u224F\u0338|\u2250\u0338|\u2261\u20E5|\u2264\u20D2|\u2265\u20D2|\u2266\u0338|\u2267\u0338|\u2268\uFE00|\u2269\uFE00|\u226A\u0338|\u226A\u20D2|\u226B\u0338|\u226B\u20D2|\u227F\u0338|\u2282\u20D2|\u2283\u20D2|\u228A\uFE00|\u228B\uFE00|\u228F\u0338|\u2290\u0338|\u2293\uFE00|\u2294\uFE00|\u22B4\u20D2|\u22B5\u20D2|\u22D8\u0338|\u22D9\u0338|\u22DA\uFE00|\u22DB\uFE00|\u22F5\u0338|\u22F9\u0338|\u2933\u0338|\u29CF\u0338|\u29D0\u0338|\u2A6D\u0338|\u2A70\u0338|\u2A7D\u0338|\u2A7E\u0338|\u2AA1\u0338|\u2AA2\u0338|\u2AAC\uFE00|\u2AAD\uFE00|\u2AAF\u0338|\u2AB0\u0338|\u2AC5\u0338|\u2AC6\u0338|\u2ACB\uFE00|\u2ACC\uFE00|\u2AFD\u20E5|[\xA0-\u0113\u0116-\u0122\u0124-\u012B\u012E-\u014D\u0150-\u017E\u0192\u01B5\u01F5\u0237\u02C6\u02C7\u02D8-\u02DD\u0311\u0391-\u03A1\u03A3-\u03A9\u03B1-\u03C9\u03D1\u03D2\u03D5\u03D6\u03DC\u03DD\u03F0\u03F1\u03F5\u03F6\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E\u045F\u2002-\u2005\u2007-\u2010\u2013-\u2016\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2025\u2026\u2030-\u2035\u2039\u203A\u203E\u2041\u2043\u2044\u204F\u2057\u205F-\u2063\u20AC\u20DB\u20DC\u2102\u2105\u210A-\u2113\u2115-\u211E\u2122\u2124\u2127-\u2129\u212C\u212D\u212F-\u2131\u2133-\u2138\u2145-\u2148\u2153-\u215E\u2190-\u219B\u219D-\u21A7\u21A9-\u21AE\u21B0-\u21B3\u21B5-\u21B7\u21BA-\u21DB\u21DD\u21E4\u21E5\u21F5\u21FD-\u2205\u2207-\u2209\u220B\u220C\u220F-\u2214\u2216-\u2218\u221A\u221D-\u2238\u223A-\u2257\u2259\u225A\u225C\u225F-\u2262\u2264-\u228B\u228D-\u229B\u229D-\u22A5\u22A7-\u22B0\u22B2-\u22BB\u22BD-\u22DB\u22DE-\u22E3\u22E6-\u22F7\u22F9-\u22FE\u2305\u2306\u2308-\u2310\u2312\u2313\u2315\u2316\u231C-\u231F\u2322\u2323\u232D\u232E\u2336\u233D\u233F\u237C\u23B0\u23B1\u23B4-\u23B6\u23DC-\u23DF\u23E2\u23E7\u2423\u24C8\u2500\u2502\u250C\u2510\u2514\u2518\u251C\u2524\u252C\u2534\u253C\u2550-\u256C\u2580\u2584\u2588\u2591-\u2593\u25A1\u25AA\u25AB\u25AD\u25AE\u25B1\u25B3-\u25B5\u25B8\u25B9\u25BD-\u25BF\u25C2\u25C3\u25CA\u25CB\u25EC\u25EF\u25F8-\u25FC\u2605\u2606\u260E\u2640\u2642\u2660\u2663\u2665\u2666\u266A\u266D-\u266F\u2713\u2717\u2720\u2736\u2758\u2772\u2773\u27C8\u27C9\u27E6-\u27ED\u27F5-\u27FA\u27FC\u27FF\u2902-\u2905\u290C-\u2913\u2916\u2919-\u2920\u2923-\u292A\u2933\u2935-\u2939\u293C\u293D\u2945\u2948-\u294B\u294E-\u2976\u2978\u2979\u297B-\u297F\u2985\u2986\u298B-\u2996\u299A\u299C\u299D\u29A4-\u29B7\u29B9\u29BB\u29BC\u29BE-\u29C5\u29C9\u29CD-\u29D0\u29DC-\u29DE\u29E3-\u29E5\u29EB\u29F4\u29F6\u2A00-\u2A02\u2A04\u2A06\u2A0C\u2A0D\u2A10-\u2A17\u2A22-\u2A27\u2A29\u2A2A\u2A2D-\u2A31\u2A33-\u2A3C\u2A3F\u2A40\u2A42-\u2A4D\u2A50\u2A53-\u2A58\u2A5A-\u2A5D\u2A5F\u2A66\u2A6A\u2A6D-\u2A75\u2A77-\u2A9A\u2A9D-\u2AA2\u2AA4-\u2AB0\u2AB3-\u2AC8\u2ACB\u2ACC\u2ACF-\u2ADB\u2AE4\u2AE6-\u2AE9\u2AEB-\u2AF3\u2AFD\uFB00-\uFB04]|\uD835[\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDD6B]/g,c={"­":"shy","‌":"zwnj","‍":"zwj","‎":"lrm","⁣":"ic","⁢":"it","⁡":"af","‏":"rlm","​":"ZeroWidthSpace","⁠":"NoBreak","̑":"DownBreve","⃛":"tdot","⃜":"DotDot","\t":"Tab","\n":"NewLine"," ":"puncsp"," ":"MediumSpace"," ":"thinsp"," ":"hairsp"," ":"emsp13"," ":"ensp"," ":"emsp14"," ":"emsp"," ":"numsp"," ":"nbsp","  ":"ThickSpace","‾":"oline",_:"lowbar","‐":"dash","–":"ndash","—":"mdash","―":"horbar",",":"comma",";":"semi","⁏":"bsemi",":":"colon","⩴":"Colone","!":"excl","¡":"iexcl","?":"quest","¿":"iquest",".":"period","‥":"nldr","…":"mldr","·":"middot","'":"apos","‘":"lsquo","’":"rsquo","‚":"sbquo","‹":"lsaquo","›":"rsaquo",'"':"quot","“":"ldquo","”":"rdquo","„":"bdquo","«":"laquo","»":"raquo","(":"lpar",")":"rpar","[":"lsqb","]":"rsqb","{":"lcub","}":"rcub","⌈":"lceil","⌉":"rceil","⌊":"lfloor","⌋":"rfloor","⦅":"lopar","⦆":"ropar","⦋":"lbrke","⦌":"rbrke","⦍":"lbrkslu","⦎":"rbrksld","⦏":"lbrksld","⦐":"rbrkslu","⦑":"langd","⦒":"rangd","⦓":"lparlt","⦔":"rpargt","⦕":"gtlPar","⦖":"ltrPar","⟦":"lobrk","⟧":"robrk","⟨":"lang","⟩":"rang","⟪":"Lang","⟫":"Rang","⟬":"loang","⟭":"roang","❲":"lbbrk","❳":"rbbrk","‖":"Vert","§":"sect","¶":"para","@":"commat","*":"ast","/":"sol",undefined:null,"&":"amp","#":"num","%":"percnt","‰":"permil","‱":"pertenk","†":"dagger","‡":"Dagger","•":"bull","⁃":"hybull","′":"prime","″":"Prime","‴":"tprime","⁗":"qprime","‵":"bprime","⁁":"caret","`":"grave","´":"acute","˜":"tilde","^":"Hat","¯":"macr","˘":"breve","˙":"dot","¨":"die","˚":"ring","˝":"dblac","¸":"cedil","˛":"ogon",ˆ:"circ",ˇ:"caron","°":"deg","©":"copy","®":"reg","℗":"copysr",℘:"wp","℞":"rx","℧":"mho","℩":"iiota","←":"larr","↚":"nlarr","→":"rarr","↛":"nrarr","↑":"uarr","↓":"darr","↔":"harr","↮":"nharr","↕":"varr","↖":"nwarr","↗":"nearr","↘":"searr","↙":"swarr","↝":"rarrw","↝̸":"nrarrw","↞":"Larr","↟":"Uarr","↠":"Rarr","↡":"Darr","↢":"larrtl","↣":"rarrtl","↤":"mapstoleft","↥":"mapstoup","↦":"map","↧":"mapstodown","↩":"larrhk","↪":"rarrhk","↫":"larrlp","↬":"rarrlp","↭":"harrw","↰":"lsh","↱":"rsh","↲":"ldsh","↳":"rdsh","↵":"crarr","↶":"cularr","↷":"curarr","↺":"olarr","↻":"orarr","↼":"lharu","↽":"lhard","↾":"uharr","↿":"uharl","⇀":"rharu","⇁":"rhard","⇂":"dharr","⇃":"dharl","⇄":"rlarr","⇅":"udarr","⇆":"lrarr","⇇":"llarr","⇈":"uuarr","⇉":"rrarr","⇊":"ddarr","⇋":"lrhar","⇌":"rlhar","⇐":"lArr","⇍":"nlArr","⇑":"uArr","⇒":"rArr","⇏":"nrArr","⇓":"dArr","⇔":"iff","⇎":"nhArr","⇕":"vArr","⇖":"nwArr","⇗":"neArr","⇘":"seArr","⇙":"swArr","⇚":"lAarr","⇛":"rAarr","⇝":"zigrarr","⇤":"larrb","⇥":"rarrb","⇵":"duarr","⇽":"loarr","⇾":"roarr","⇿":"hoarr","∀":"forall","∁":"comp","∂":"part","∂̸":"npart","∃":"exist","∄":"nexist","∅":"empty","∇":"Del","∈":"in","∉":"notin","∋":"ni","∌":"notni","϶":"bepsi","∏":"prod","∐":"coprod","∑":"sum","+":"plus","±":"pm","÷":"div","×":"times","<":"lt","≮":"nlt","<⃒":"nvlt","=":"equals","≠":"ne","=⃥":"bne","⩵":"Equal",">":"gt","≯":"ngt",">⃒":"nvgt","¬":"not","|":"vert","¦":"brvbar","−":"minus","∓":"mp","∔":"plusdo","⁄":"frasl","∖":"setmn","∗":"lowast","∘":"compfn","√":"Sqrt","∝":"prop","∞":"infin","∟":"angrt","∠":"ang","∠⃒":"nang","∡":"angmsd","∢":"angsph","∣":"mid","∤":"nmid","∥":"par","∦":"npar","∧":"and","∨":"or","∩":"cap","∩︀":"caps","∪":"cup","∪︀":"cups","∫":"int","∬":"Int","∭":"tint","⨌":"qint","∮":"oint","∯":"Conint","∰":"Cconint","∱":"cwint","∲":"cwconint","∳":"awconint","∴":"there4","∵":"becaus","∶":"ratio","∷":"Colon","∸":"minusd","∺":"mDDot","∻":"homtht","∼":"sim","≁":"nsim","∼⃒":"nvsim","∽":"bsim","∽̱":"race","∾":"ac","∾̳":"acE","∿":"acd","≀":"wr","≂":"esim","≂̸":"nesim","≃":"sime","≄":"nsime","≅":"cong","≇":"ncong","≆":"simne","≈":"ap","≉":"nap","≊":"ape","≋":"apid","≋̸":"napid","≌":"bcong","≍":"CupCap","≭":"NotCupCap","≍⃒":"nvap","≎":"bump","≎̸":"nbump","≏":"bumpe","≏̸":"nbumpe","≐":"doteq","≐̸":"nedot","≑":"eDot","≒":"efDot","≓":"erDot","≔":"colone","≕":"ecolon","≖":"ecir","≗":"cire","≙":"wedgeq","≚":"veeeq","≜":"trie","≟":"equest","≡":"equiv","≢":"nequiv","≡⃥":"bnequiv","≤":"le","≰":"nle","≤⃒":"nvle","≥":"ge","≱":"nge","≥⃒":"nvge","≦":"lE","≦̸":"nlE","≧":"gE","≧̸":"ngE","≨︀":"lvnE","≨":"lnE","≩":"gnE","≩︀":"gvnE","≪":"ll","≪̸":"nLtv","≪⃒":"nLt","≫":"gg","≫̸":"nGtv","≫⃒":"nGt","≬":"twixt","≲":"lsim","≴":"nlsim","≳":"gsim","≵":"ngsim","≶":"lg","≸":"ntlg","≷":"gl","≹":"ntgl","≺":"pr","⊀":"npr","≻":"sc","⊁":"nsc","≼":"prcue","⋠":"nprcue","≽":"sccue","⋡":"nsccue","≾":"prsim","≿":"scsim","≿̸":"NotSucceedsTilde","⊂":"sub","⊄":"nsub","⊂⃒":"vnsub","⊃":"sup","⊅":"nsup","⊃⃒":"vnsup","⊆":"sube","⊈":"nsube","⊇":"supe","⊉":"nsupe","⊊︀":"vsubne","⊊":"subne","⊋︀":"vsupne","⊋":"supne","⊍":"cupdot","⊎":"uplus","⊏":"sqsub","⊏̸":"NotSquareSubset","⊐":"sqsup","⊐̸":"NotSquareSuperset","⊑":"sqsube","⋢":"nsqsube","⊒":"sqsupe","⋣":"nsqsupe","⊓":"sqcap","⊓︀":"sqcaps","⊔":"sqcup","⊔︀":"sqcups","⊕":"oplus","⊖":"ominus","⊗":"otimes","⊘":"osol","⊙":"odot","⊚":"ocir","⊛":"oast","⊝":"odash","⊞":"plusb","⊟":"minusb","⊠":"timesb","⊡":"sdotb","⊢":"vdash","⊬":"nvdash","⊣":"dashv","⊤":"top","⊥":"bot","⊧":"models","⊨":"vDash","⊭":"nvDash","⊩":"Vdash","⊮":"nVdash","⊪":"Vvdash","⊫":"VDash","⊯":"nVDash","⊰":"prurel","⊲":"vltri","⋪":"nltri","⊳":"vrtri","⋫":"nrtri","⊴":"ltrie","⋬":"nltrie","⊴⃒":"nvltrie","⊵":"rtrie","⋭":"nrtrie","⊵⃒":"nvrtrie","⊶":"origof","⊷":"imof","⊸":"mumap","⊹":"hercon","⊺":"intcal","⊻":"veebar","⊽":"barvee","⊾":"angrtvb","⊿":"lrtri","⋀":"Wedge","⋁":"Vee","⋂":"xcap","⋃":"xcup","⋄":"diam","⋅":"sdot","⋆":"Star","⋇":"divonx","⋈":"bowtie","⋉":"ltimes","⋊":"rtimes","⋋":"lthree","⋌":"rthree","⋍":"bsime","⋎":"cuvee","⋏":"cuwed","⋐":"Sub","⋑":"Sup","⋒":"Cap","⋓":"Cup","⋔":"fork","⋕":"epar","⋖":"ltdot","⋗":"gtdot","⋘":"Ll","⋘̸":"nLl","⋙":"Gg","⋙̸":"nGg","⋚︀":"lesg","⋚":"leg","⋛":"gel","⋛︀":"gesl","⋞":"cuepr","⋟":"cuesc","⋦":"lnsim","⋧":"gnsim","⋨":"prnsim","⋩":"scnsim","⋮":"vellip","⋯":"ctdot","⋰":"utdot","⋱":"dtdot","⋲":"disin","⋳":"isinsv","⋴":"isins","⋵":"isindot","⋵̸":"notindot","⋶":"notinvc","⋷":"notinvb","⋹":"isinE","⋹̸":"notinE","⋺":"nisd","⋻":"xnis","⋼":"nis","⋽":"notnivc","⋾":"notnivb","⌅":"barwed","⌆":"Barwed","⌌":"drcrop","⌍":"dlcrop","⌎":"urcrop","⌏":"ulcrop","⌐":"bnot","⌒":"profline","⌓":"profsurf","⌕":"telrec","⌖":"target","⌜":"ulcorn","⌝":"urcorn","⌞":"dlcorn","⌟":"drcorn","⌢":"frown","⌣":"smile","⌭":"cylcty","⌮":"profalar","⌶":"topbot","⌽":"ovbar","⌿":"solbar","⍼":"angzarr","⎰":"lmoust","⎱":"rmoust","⎴":"tbrk","⎵":"bbrk","⎶":"bbrktbrk","⏜":"OverParenthesis","⏝":"UnderParenthesis","⏞":"OverBrace","⏟":"UnderBrace","⏢":"trpezium","⏧":"elinters","␣":"blank","─":"boxh","│":"boxv","┌":"boxdr","┐":"boxdl","└":"boxur","┘":"boxul","├":"boxvr","┤":"boxvl","┬":"boxhd","┴":"boxhu","┼":"boxvh","═":"boxH","║":"boxV","╒":"boxdR","╓":"boxDr","╔":"boxDR","╕":"boxdL","╖":"boxDl","╗":"boxDL","╘":"boxuR","╙":"boxUr","╚":"boxUR","╛":"boxuL","╜":"boxUl","╝":"boxUL","╞":"boxvR","╟":"boxVr","╠":"boxVR","╡":"boxvL","╢":"boxVl","╣":"boxVL","╤":"boxHd","╥":"boxhD","╦":"boxHD","╧":"boxHu","╨":"boxhU","╩":"boxHU","╪":"boxvH","╫":"boxVh","╬":"boxVH","▀":"uhblk","▄":"lhblk","█":"block","░":"blk14","▒":"blk12","▓":"blk34","□":"squ","▪":"squf","▫":"EmptyVerySmallSquare","▭":"rect","▮":"marker","▱":"fltns","△":"xutri","▴":"utrif","▵":"utri","▸":"rtrif","▹":"rtri","▽":"xdtri","▾":"dtrif","▿":"dtri","◂":"ltrif","◃":"ltri","◊":"loz","○":"cir","◬":"tridot","◯":"xcirc","◸":"ultri","◹":"urtri","◺":"lltri","◻":"EmptySmallSquare","◼":"FilledSmallSquare","★":"starf","☆":"star","☎":"phone","♀":"female","♂":"male","♠":"spades","♣":"clubs","♥":"hearts","♦":"diams","♪":"sung","✓":"check","✗":"cross","✠":"malt","✶":"sext","❘":"VerticalSeparator","⟈":"bsolhsub","⟉":"suphsol","⟵":"xlarr","⟶":"xrarr","⟷":"xharr","⟸":"xlArr","⟹":"xrArr","⟺":"xhArr","⟼":"xmap","⟿":"dzigrarr","⤂":"nvlArr","⤃":"nvrArr","⤄":"nvHarr","⤅":"Map","⤌":"lbarr","⤍":"rbarr","⤎":"lBarr","⤏":"rBarr","⤐":"RBarr","⤑":"DDotrahd","⤒":"UpArrowBar","⤓":"DownArrowBar","⤖":"Rarrtl","⤙":"latail","⤚":"ratail","⤛":"lAtail","⤜":"rAtail","⤝":"larrfs","⤞":"rarrfs","⤟":"larrbfs","⤠":"rarrbfs","⤣":"nwarhk","⤤":"nearhk","⤥":"searhk","⤦":"swarhk","⤧":"nwnear","⤨":"toea","⤩":"tosa","⤪":"swnwar","⤳":"rarrc","⤳̸":"nrarrc","⤵":"cudarrr","⤶":"ldca","⤷":"rdca","⤸":"cudarrl","⤹":"larrpl","⤼":"curarrm","⤽":"cularrp","⥅":"rarrpl","⥈":"harrcir","⥉":"Uarrocir","⥊":"lurdshar","⥋":"ldrushar","⥎":"LeftRightVector","⥏":"RightUpDownVector","⥐":"DownLeftRightVector","⥑":"LeftUpDownVector","⥒":"LeftVectorBar","⥓":"RightVectorBar","⥔":"RightUpVectorBar","⥕":"RightDownVectorBar","⥖":"DownLeftVectorBar","⥗":"DownRightVectorBar","⥘":"LeftUpVectorBar","⥙":"LeftDownVectorBar","⥚":"LeftTeeVector","⥛":"RightTeeVector","⥜":"RightUpTeeVector","⥝":"RightDownTeeVector","⥞":"DownLeftTeeVector","⥟":"DownRightTeeVector","⥠":"LeftUpTeeVector","⥡":"LeftDownTeeVector","⥢":"lHar","⥣":"uHar","⥤":"rHar","⥥":"dHar","⥦":"luruhar","⥧":"ldrdhar","⥨":"ruluhar","⥩":"rdldhar","⥪":"lharul","⥫":"llhard","⥬":"rharul","⥭":"lrhard","⥮":"udhar","⥯":"duhar","⥰":"RoundImplies","⥱":"erarr","⥲":"simrarr","⥳":"larrsim","⥴":"rarrsim","⥵":"rarrap","⥶":"ltlarr","⥸":"gtrarr","⥹":"subrarr","⥻":"suplarr","⥼":"lfisht","⥽":"rfisht","⥾":"ufisht","⥿":"dfisht","⦚":"vzigzag","⦜":"vangrt","⦝":"angrtvbd","⦤":"ange","⦥":"range","⦦":"dwangle","⦧":"uwangle","⦨":"angmsdaa","⦩":"angmsdab","⦪":"angmsdac","⦫":"angmsdad","⦬":"angmsdae","⦭":"angmsdaf","⦮":"angmsdag","⦯":"angmsdah","⦰":"bemptyv","⦱":"demptyv","⦲":"cemptyv","⦳":"raemptyv","⦴":"laemptyv","⦵":"ohbar","⦶":"omid","⦷":"opar","⦹":"operp","⦻":"olcross","⦼":"odsold","⦾":"olcir","⦿":"ofcir","⧀":"olt","⧁":"ogt","⧂":"cirscir","⧃":"cirE","⧄":"solb","⧅":"bsolb","⧉":"boxbox","⧍":"trisb","⧎":"rtriltri","⧏":"LeftTriangleBar","⧏̸":"NotLeftTriangleBar","⧐":"RightTriangleBar","⧐̸":"NotRightTriangleBar","⧜":"iinfin","⧝":"infintie","⧞":"nvinfin","⧣":"eparsl","⧤":"smeparsl","⧥":"eqvparsl","⧫":"lozf","⧴":"RuleDelayed","⧶":"dsol","⨀":"xodot","⨁":"xoplus","⨂":"xotime","⨄":"xuplus","⨆":"xsqcup","⨍":"fpartint","⨐":"cirfnint","⨑":"awint","⨒":"rppolint","⨓":"scpolint","⨔":"npolint","⨕":"pointint","⨖":"quatint","⨗":"intlarhk","⨢":"pluscir","⨣":"plusacir","⨤":"simplus","⨥":"plusdu","⨦":"plussim","⨧":"plustwo","⨩":"mcomma","⨪":"minusdu","⨭":"loplus","⨮":"roplus","⨯":"Cross","⨰":"timesd","⨱":"timesbar","⨳":"smashp","⨴":"lotimes","⨵":"rotimes","⨶":"otimesas","⨷":"Otimes","⨸":"odiv","⨹":"triplus","⨺":"triminus","⨻":"tritime","⨼":"iprod","⨿":"amalg","⩀":"capdot","⩂":"ncup","⩃":"ncap","⩄":"capand","⩅":"cupor","⩆":"cupcap","⩇":"capcup","⩈":"cupbrcap","⩉":"capbrcup","⩊":"cupcup","⩋":"capcap","⩌":"ccups","⩍":"ccaps","⩐":"ccupssm","⩓":"And","⩔":"Or","⩕":"andand","⩖":"oror","⩗":"orslope","⩘":"andslope","⩚":"andv","⩛":"orv","⩜":"andd","⩝":"ord","⩟":"wedbar","⩦":"sdote","⩪":"simdot","⩭":"congdot","⩭̸":"ncongdot","⩮":"easter","⩯":"apacir","⩰":"apE","⩰̸":"napE","⩱":"eplus","⩲":"pluse","⩳":"Esim","⩷":"eDDot","⩸":"equivDD","⩹":"ltcir","⩺":"gtcir","⩻":"ltquest","⩼":"gtquest","⩽":"les","⩽̸":"nles","⩾":"ges","⩾̸":"nges","⩿":"lesdot","⪀":"gesdot","⪁":"lesdoto","⪂":"gesdoto","⪃":"lesdotor","⪄":"gesdotol","⪅":"lap","⪆":"gap","⪇":"lne","⪈":"gne","⪉":"lnap","⪊":"gnap","⪋":"lEg","⪌":"gEl","⪍":"lsime","⪎":"gsime","⪏":"lsimg","⪐":"gsiml","⪑":"lgE","⪒":"glE","⪓":"lesges","⪔":"gesles","⪕":"els","⪖":"egs","⪗":"elsdot","⪘":"egsdot","⪙":"el","⪚":"eg","⪝":"siml","⪞":"simg","⪟":"simlE","⪠":"simgE","⪡":"LessLess","⪡̸":"NotNestedLessLess","⪢":"GreaterGreater","⪢̸":"NotNestedGreaterGreater","⪤":"glj","⪥":"gla","⪦":"ltcc","⪧":"gtcc","⪨":"lescc","⪩":"gescc","⪪":"smt","⪫":"lat","⪬":"smte","⪬︀":"smtes","⪭":"late","⪭︀":"lates","⪮":"bumpE","⪯":"pre","⪯̸":"npre","⪰":"sce","⪰̸":"nsce","⪳":"prE","⪴":"scE","⪵":"prnE","⪶":"scnE","⪷":"prap","⪸":"scap","⪹":"prnap","⪺":"scnap","⪻":"Pr","⪼":"Sc","⪽":"subdot","⪾":"supdot","⪿":"subplus","⫀":"supplus","⫁":"submult","⫂":"supmult","⫃":"subedot","⫄":"supedot","⫅":"subE","⫅̸":"nsubE","⫆":"supE","⫆̸":"nsupE","⫇":"subsim","⫈":"supsim","⫋︀":"vsubnE","⫋":"subnE","⫌︀":"vsupnE","⫌":"supnE","⫏":"csub","⫐":"csup","⫑":"csube","⫒":"csupe","⫓":"subsup","⫔":"supsub","⫕":"subsub","⫖":"supsup","⫗":"suphsub","⫘":"supdsub","⫙":"forkv","⫚":"topfork","⫛":"mlcp","⫤":"Dashv","⫦":"Vdashl","⫧":"Barv","⫨":"vBar","⫩":"vBarv","⫫":"Vbar","⫬":"Not","⫭":"bNot","⫮":"rnmid","⫯":"cirmid","⫰":"midcir","⫱":"topcir","⫲":"nhpar","⫳":"parsim","⫽":"parsl","⫽⃥":"nparsl","♭":"flat","♮":"natur","♯":"sharp","¤":"curren","¢":"cent",$:"dollar","£":"pound","¥":"yen","€":"euro","¹":"sup1","½":"half","⅓":"frac13","¼":"frac14","⅕":"frac15","⅙":"frac16","⅛":"frac18","²":"sup2","⅔":"frac23","⅖":"frac25","³":"sup3","¾":"frac34","⅗":"frac35","⅜":"frac38","⅘":"frac45","⅚":"frac56","⅝":"frac58","⅞":"frac78",𝒶:"ascr",𝕒:"aopf",𝔞:"afr",𝔸:"Aopf",𝔄:"Afr",𝒜:"Ascr",ª:"ordf",á:"aacute",Á:"Aacute",à:"agrave",À:"Agrave",ă:"abreve",Ă:"Abreve",â:"acirc",Â:"Acirc",å:"aring",Å:"angst",ä:"auml",Ä:"Auml",ã:"atilde",Ã:"Atilde",ą:"aogon",Ą:"Aogon",ā:"amacr",Ā:"Amacr",æ:"aelig",Æ:"AElig",𝒷:"bscr",𝕓:"bopf",𝔟:"bfr",𝔹:"Bopf",ℬ:"Bscr",𝔅:"Bfr",𝔠:"cfr",𝒸:"cscr",𝕔:"copf",ℭ:"Cfr",𝒞:"Cscr",ℂ:"Copf",ć:"cacute",Ć:"Cacute",ĉ:"ccirc",Ĉ:"Ccirc",č:"ccaron",Č:"Ccaron",ċ:"cdot",Ċ:"Cdot",ç:"ccedil",Ç:"Ccedil","℅":"incare",𝔡:"dfr",ⅆ:"dd",𝕕:"dopf",𝒹:"dscr",𝒟:"Dscr",𝔇:"Dfr",ⅅ:"DD",𝔻:"Dopf",ď:"dcaron",Ď:"Dcaron",đ:"dstrok",Đ:"Dstrok",ð:"eth",Ð:"ETH",ⅇ:"ee",ℯ:"escr",𝔢:"efr",𝕖:"eopf",ℰ:"Escr",𝔈:"Efr",𝔼:"Eopf",é:"eacute",É:"Eacute",è:"egrave",È:"Egrave",ê:"ecirc",Ê:"Ecirc",ě:"ecaron",Ě:"Ecaron",ë:"euml",Ë:"Euml",ė:"edot",Ė:"Edot",ę:"eogon",Ę:"Eogon",ē:"emacr",Ē:"Emacr",𝔣:"ffr",𝕗:"fopf",𝒻:"fscr",𝔉:"Ffr",𝔽:"Fopf",ℱ:"Fscr",ﬀ:"fflig",ﬃ:"ffilig",ﬄ:"ffllig",ﬁ:"filig",fj:"fjlig",ﬂ:"fllig",ƒ:"fnof",ℊ:"gscr",𝕘:"gopf",𝔤:"gfr",𝒢:"Gscr",𝔾:"Gopf",𝔊:"Gfr",ǵ:"gacute",ğ:"gbreve",Ğ:"Gbreve",ĝ:"gcirc",Ĝ:"Gcirc",ġ:"gdot",Ġ:"Gdot",Ģ:"Gcedil",𝔥:"hfr",ℎ:"planckh",𝒽:"hscr",𝕙:"hopf",ℋ:"Hscr",ℌ:"Hfr",ℍ:"Hopf",ĥ:"hcirc",Ĥ:"Hcirc",ℏ:"hbar",ħ:"hstrok",Ħ:"Hstrok",𝕚:"iopf",𝔦:"ifr",𝒾:"iscr",ⅈ:"ii",𝕀:"Iopf",ℐ:"Iscr",ℑ:"Im",í:"iacute",Í:"Iacute",ì:"igrave",Ì:"Igrave",î:"icirc",Î:"Icirc",ï:"iuml",Ï:"Iuml",ĩ:"itilde",Ĩ:"Itilde",İ:"Idot",į:"iogon",Į:"Iogon",ī:"imacr",Ī:"Imacr",ĳ:"ijlig",Ĳ:"IJlig",ı:"imath",𝒿:"jscr",𝕛:"jopf",𝔧:"jfr",𝒥:"Jscr",𝔍:"Jfr",𝕁:"Jopf",ĵ:"jcirc",Ĵ:"Jcirc",ȷ:"jmath",𝕜:"kopf",𝓀:"kscr",𝔨:"kfr",𝒦:"Kscr",𝕂:"Kopf",𝔎:"Kfr",ķ:"kcedil",Ķ:"Kcedil",𝔩:"lfr",𝓁:"lscr",ℓ:"ell",𝕝:"lopf",ℒ:"Lscr",𝔏:"Lfr",𝕃:"Lopf",ĺ:"lacute",Ĺ:"Lacute",ľ:"lcaron",Ľ:"Lcaron",ļ:"lcedil",Ļ:"Lcedil",ł:"lstrok",Ł:"Lstrok",ŀ:"lmidot",Ŀ:"Lmidot",𝔪:"mfr",𝕞:"mopf",𝓂:"mscr",𝔐:"Mfr",𝕄:"Mopf",ℳ:"Mscr",𝔫:"nfr",𝕟:"nopf",𝓃:"nscr",ℕ:"Nopf",𝒩:"Nscr",𝔑:"Nfr",ń:"nacute",Ń:"Nacute",ň:"ncaron",Ň:"Ncaron",ñ:"ntilde",Ñ:"Ntilde",ņ:"ncedil",Ņ:"Ncedil","№":"numero",ŋ:"eng",Ŋ:"ENG",𝕠:"oopf",𝔬:"ofr",ℴ:"oscr",𝒪:"Oscr",𝔒:"Ofr",𝕆:"Oopf",º:"ordm",ó:"oacute",Ó:"Oacute",ò:"ograve",Ò:"Ograve",ô:"ocirc",Ô:"Ocirc",ö:"ouml",Ö:"Ouml",ő:"odblac",Ő:"Odblac",õ:"otilde",Õ:"Otilde",ø:"oslash",Ø:"Oslash",ō:"omacr",Ō:"Omacr",œ:"oelig",Œ:"OElig",𝔭:"pfr",𝓅:"pscr",𝕡:"popf",ℙ:"Popf",𝔓:"Pfr",𝒫:"Pscr",𝕢:"qopf",𝔮:"qfr",𝓆:"qscr",𝒬:"Qscr",𝔔:"Qfr",ℚ:"Qopf",ĸ:"kgreen",𝔯:"rfr",𝕣:"ropf",𝓇:"rscr",ℛ:"Rscr",ℜ:"Re",ℝ:"Ropf",ŕ:"racute",Ŕ:"Racute",ř:"rcaron",Ř:"Rcaron",ŗ:"rcedil",Ŗ:"Rcedil",𝕤:"sopf",𝓈:"sscr",𝔰:"sfr",𝕊:"Sopf",𝔖:"Sfr",𝒮:"Sscr","Ⓢ":"oS",ś:"sacute",Ś:"Sacute",ŝ:"scirc",Ŝ:"Scirc",š:"scaron",Š:"Scaron",ş:"scedil",Ş:"Scedil",ß:"szlig",𝔱:"tfr",𝓉:"tscr",𝕥:"topf",𝒯:"Tscr",𝔗:"Tfr",𝕋:"Topf",ť:"tcaron",Ť:"Tcaron",ţ:"tcedil",Ţ:"Tcedil","™":"trade",ŧ:"tstrok",Ŧ:"Tstrok",𝓊:"uscr",𝕦:"uopf",𝔲:"ufr",𝕌:"Uopf",𝔘:"Ufr",𝒰:"Uscr",ú:"uacute",Ú:"Uacute",ù:"ugrave",Ù:"Ugrave",ŭ:"ubreve",Ŭ:"Ubreve",û:"ucirc",Û:"Ucirc",ů:"uring",Ů:"Uring",ü:"uuml",Ü:"Uuml",ű:"udblac",Ű:"Udblac",ũ:"utilde",Ũ:"Utilde",ų:"uogon",Ų:"Uogon",ū:"umacr",Ū:"Umacr",𝔳:"vfr",𝕧:"vopf",𝓋:"vscr",𝔙:"Vfr",𝕍:"Vopf",𝒱:"Vscr",𝕨:"wopf",𝓌:"wscr",𝔴:"wfr",𝒲:"Wscr",𝕎:"Wopf",𝔚:"Wfr",ŵ:"wcirc",Ŵ:"Wcirc",𝔵:"xfr",𝓍:"xscr",𝕩:"xopf",𝕏:"Xopf",𝔛:"Xfr",𝒳:"Xscr",𝔶:"yfr",𝓎:"yscr",𝕪:"yopf",𝒴:"Yscr",𝔜:"Yfr",𝕐:"Yopf",ý:"yacute",Ý:"Yacute",ŷ:"ycirc",Ŷ:"Ycirc",ÿ:"yuml",Ÿ:"Yuml",𝓏:"zscr",𝔷:"zfr",𝕫:"zopf",ℨ:"Zfr",ℤ:"Zopf",𝒵:"Zscr",ź:"zacute",Ź:"Zacute",ž:"zcaron",Ž:"Zcaron",ż:"zdot",Ż:"Zdot",Ƶ:"imped",þ:"thorn",Þ:"THORN",ŉ:"napos",α:"alpha",Α:"Alpha",β:"beta",Β:"Beta",γ:"gamma",Γ:"Gamma",δ:"delta",Δ:"Delta",ε:"epsi",ϵ:"epsiv",Ε:"Epsilon",ϝ:"gammad",Ϝ:"Gammad",ζ:"zeta",Ζ:"Zeta",η:"eta",Η:"Eta",θ:"theta",ϑ:"thetav",Θ:"Theta",ι:"iota",Ι:"Iota",κ:"kappa",ϰ:"kappav",Κ:"Kappa",λ:"lambda",Λ:"Lambda",μ:"mu",µ:"micro",Μ:"Mu",ν:"nu",Ν:"Nu",ξ:"xi",Ξ:"Xi",ο:"omicron",Ο:"Omicron",π:"pi",ϖ:"piv",Π:"Pi",ρ:"rho",ϱ:"rhov",Ρ:"Rho",σ:"sigma",Σ:"Sigma",ς:"sigmaf",τ:"tau",Τ:"Tau",υ:"upsi",Υ:"Upsilon",ϒ:"Upsi",φ:"phi",ϕ:"phiv",Φ:"Phi",χ:"chi",Χ:"Chi",ψ:"psi",Ψ:"Psi",ω:"omega",Ω:"ohm",а:"acy",А:"Acy",б:"bcy",Б:"Bcy",в:"vcy",В:"Vcy",г:"gcy",Г:"Gcy",ѓ:"gjcy",Ѓ:"GJcy",д:"dcy",Д:"Dcy",ђ:"djcy",Ђ:"DJcy",е:"iecy",Е:"IEcy",ё:"iocy",Ё:"IOcy",є:"jukcy",Є:"Jukcy",ж:"zhcy",Ж:"ZHcy",з:"zcy",З:"Zcy",ѕ:"dscy",Ѕ:"DScy",и:"icy",И:"Icy",і:"iukcy",І:"Iukcy",ї:"yicy",Ї:"YIcy",й:"jcy",Й:"Jcy",ј:"jsercy",Ј:"Jsercy",к:"kcy",К:"Kcy",ќ:"kjcy",Ќ:"KJcy",л:"lcy",Л:"Lcy",љ:"ljcy",Љ:"LJcy",м:"mcy",М:"Mcy",н:"ncy",Н:"Ncy",њ:"njcy",Њ:"NJcy",о:"ocy",О:"Ocy",п:"pcy",П:"Pcy",р:"rcy",Р:"Rcy",с:"scy",С:"Scy",т:"tcy",Т:"Tcy",ћ:"tshcy",Ћ:"TSHcy",у:"ucy",У:"Ucy",ў:"ubrcy",Ў:"Ubrcy",ф:"fcy",Ф:"Fcy",х:"khcy",Х:"KHcy",ц:"tscy",Ц:"TScy",ч:"chcy",Ч:"CHcy",џ:"dzcy",Џ:"DZcy",ш:"shcy",Ш:"SHcy",щ:"shchcy",Щ:"SHCHcy",ъ:"hardcy",Ъ:"HARDcy",ы:"ycy",Ы:"Ycy",ь:"softcy",Ь:"SOFTcy",э:"ecy",Э:"Ecy",ю:"yucy",Ю:"YUcy",я:"yacy",Я:"YAcy",ℵ:"aleph",ℶ:"beth",ℷ:"gimel",ℸ:"daleth"},u=/["&'<>`]/g,d={'"':"&quot;","&":"&amp;","'":"&#x27;","<":"&lt;",">":"&gt;","`":"&#x60;"},p=/&#(?:[xX][^a-fA-F0-9]|[^0-9xX])/,f=/[\0-\x08\x0B\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,m=/&(CounterClockwiseContourIntegral|DoubleLongLeftRightArrow|ClockwiseContourIntegral|NotNestedGreaterGreater|NotSquareSupersetEqual|DiacriticalDoubleAcute|NotRightTriangleEqual|NotSucceedsSlantEqual|NotPrecedesSlantEqual|CloseCurlyDoubleQuote|NegativeVeryThinSpace|DoubleContourIntegral|FilledVerySmallSquare|CapitalDifferentialD|OpenCurlyDoubleQuote|EmptyVerySmallSquare|NestedGreaterGreater|DoubleLongRightArrow|NotLeftTriangleEqual|NotGreaterSlantEqual|ReverseUpEquilibrium|DoubleLeftRightArrow|NotSquareSubsetEqual|NotDoubleVerticalBar|RightArrowLeftArrow|NotGreaterFullEqual|NotRightTriangleBar|SquareSupersetEqual|DownLeftRightVector|DoubleLongLeftArrow|leftrightsquigarrow|LeftArrowRightArrow|NegativeMediumSpace|blacktriangleright|RightDownVectorBar|PrecedesSlantEqual|RightDoubleBracket|SucceedsSlantEqual|NotLeftTriangleBar|RightTriangleEqual|SquareIntersection|RightDownTeeVector|ReverseEquilibrium|NegativeThickSpace|longleftrightarrow|Longleftrightarrow|LongLeftRightArrow|DownRightTeeVector|DownRightVectorBar|GreaterSlantEqual|SquareSubsetEqual|LeftDownVectorBar|LeftDoubleBracket|VerticalSeparator|rightleftharpoons|NotGreaterGreater|NotSquareSuperset|blacktriangleleft|blacktriangledown|NegativeThinSpace|LeftDownTeeVector|NotLessSlantEqual|leftrightharpoons|DoubleUpDownArrow|DoubleVerticalBar|LeftTriangleEqual|FilledSmallSquare|twoheadrightarrow|NotNestedLessLess|DownLeftTeeVector|DownLeftVectorBar|RightAngleBracket|NotTildeFullEqual|NotReverseElement|RightUpDownVector|DiacriticalTilde|NotSucceedsTilde|circlearrowright|NotPrecedesEqual|rightharpoondown|DoubleRightArrow|NotSucceedsEqual|NonBreakingSpace|NotRightTriangle|LessEqualGreater|RightUpTeeVector|LeftAngleBracket|GreaterFullEqual|DownArrowUpArrow|RightUpVectorBar|twoheadleftarrow|GreaterEqualLess|downharpoonright|RightTriangleBar|ntrianglerighteq|NotSupersetEqual|LeftUpDownVector|DiacriticalAcute|rightrightarrows|vartriangleright|UpArrowDownArrow|DiacriticalGrave|UnderParenthesis|EmptySmallSquare|LeftUpVectorBar|leftrightarrows|DownRightVector|downharpoonleft|trianglerighteq|ShortRightArrow|OverParenthesis|DoubleLeftArrow|DoubleDownArrow|NotSquareSubset|bigtriangledown|ntrianglelefteq|UpperRightArrow|curvearrowright|vartriangleleft|NotLeftTriangle|nleftrightarrow|LowerRightArrow|NotHumpDownHump|NotGreaterTilde|rightthreetimes|LeftUpTeeVector|NotGreaterEqual|straightepsilon|LeftTriangleBar|rightsquigarrow|ContourIntegral|rightleftarrows|CloseCurlyQuote|RightDownVector|LeftRightVector|nLeftrightarrow|leftharpoondown|circlearrowleft|SquareSuperset|OpenCurlyQuote|hookrightarrow|HorizontalLine|DiacriticalDot|NotLessGreater|ntriangleright|DoubleRightTee|InvisibleComma|InvisibleTimes|LowerLeftArrow|DownLeftVector|NotSubsetEqual|curvearrowleft|trianglelefteq|NotVerticalBar|TildeFullEqual|downdownarrows|NotGreaterLess|RightTeeVector|ZeroWidthSpace|looparrowright|LongRightArrow|doublebarwedge|ShortLeftArrow|ShortDownArrow|RightVectorBar|GreaterGreater|ReverseElement|rightharpoonup|LessSlantEqual|leftthreetimes|upharpoonright|rightarrowtail|LeftDownVector|Longrightarrow|NestedLessLess|UpperLeftArrow|nshortparallel|leftleftarrows|leftrightarrow|Leftrightarrow|LeftRightArrow|longrightarrow|upharpoonleft|RightArrowBar|ApplyFunction|LeftTeeVector|leftarrowtail|NotEqualTilde|varsubsetneqq|varsupsetneqq|RightTeeArrow|SucceedsEqual|SucceedsTilde|LeftVectorBar|SupersetEqual|hookleftarrow|DifferentialD|VerticalTilde|VeryThinSpace|blacktriangle|bigtriangleup|LessFullEqual|divideontimes|leftharpoonup|UpEquilibrium|ntriangleleft|RightTriangle|measuredangle|shortparallel|longleftarrow|Longleftarrow|LongLeftArrow|DoubleLeftTee|Poincareplane|PrecedesEqual|triangleright|DoubleUpArrow|RightUpVector|fallingdotseq|looparrowleft|PrecedesTilde|NotTildeEqual|NotTildeTilde|smallsetminus|Proportional|triangleleft|triangledown|UnderBracket|NotHumpEqual|exponentiale|ExponentialE|NotLessTilde|HilbertSpace|RightCeiling|blacklozenge|varsupsetneq|HumpDownHump|GreaterEqual|VerticalLine|LeftTeeArrow|NotLessEqual|DownTeeArrow|LeftTriangle|varsubsetneq|Intersection|NotCongruent|DownArrowBar|LeftUpVector|LeftArrowBar|risingdotseq|GreaterTilde|RoundImplies|SquareSubset|ShortUpArrow|NotSuperset|quaternions|precnapprox|backepsilon|preccurlyeq|OverBracket|blacksquare|MediumSpace|VerticalBar|circledcirc|circleddash|CircleMinus|CircleTimes|LessGreater|curlyeqprec|curlyeqsucc|diamondsuit|UpDownArrow|Updownarrow|RuleDelayed|Rrightarrow|updownarrow|RightVector|nRightarrow|nrightarrow|eqslantless|LeftCeiling|Equilibrium|SmallCircle|expectation|NotSucceeds|thickapprox|GreaterLess|SquareUnion|NotPrecedes|NotLessLess|straightphi|succnapprox|succcurlyeq|SubsetEqual|sqsupseteq|Proportion|Laplacetrf|ImaginaryI|supsetneqq|NotGreater|gtreqqless|NotElement|ThickSpace|TildeEqual|TildeTilde|Fouriertrf|rmoustache|EqualTilde|eqslantgtr|UnderBrace|LeftVector|UpArrowBar|nLeftarrow|nsubseteqq|subsetneqq|nsupseteqq|nleftarrow|succapprox|lessapprox|UpTeeArrow|upuparrows|curlywedge|lesseqqgtr|varepsilon|varnothing|RightFloor|complement|CirclePlus|sqsubseteq|Lleftarrow|circledast|RightArrow|Rightarrow|rightarrow|lmoustache|Bernoullis|precapprox|mapstoleft|mapstodown|longmapsto|dotsquare|downarrow|DoubleDot|nsubseteq|supsetneq|leftarrow|nsupseteq|subsetneq|ThinSpace|ngeqslant|subseteqq|HumpEqual|NotSubset|triangleq|NotCupCap|lesseqgtr|heartsuit|TripleDot|Leftarrow|Coproduct|Congruent|varpropto|complexes|gvertneqq|LeftArrow|LessTilde|supseteqq|MinusPlus|CircleDot|nleqslant|NotExists|gtreqless|nparallel|UnionPlus|LeftFloor|checkmark|CenterDot|centerdot|Mellintrf|gtrapprox|bigotimes|OverBrace|spadesuit|therefore|pitchfork|rationals|PlusMinus|Backslash|Therefore|DownBreve|backsimeq|backprime|DownArrow|nshortmid|Downarrow|lvertneqq|eqvparsl|imagline|imagpart|infintie|integers|Integral|intercal|LessLess|Uarrocir|intlarhk|sqsupset|angmsdaf|sqsubset|llcorner|vartheta|cupbrcap|lnapprox|Superset|SuchThat|succnsim|succneqq|angmsdag|biguplus|curlyvee|trpezium|Succeeds|NotTilde|bigwedge|angmsdah|angrtvbd|triminus|cwconint|fpartint|lrcorner|smeparsl|subseteq|urcorner|lurdshar|laemptyv|DDotrahd|approxeq|ldrushar|awconint|mapstoup|backcong|shortmid|triangle|geqslant|gesdotol|timesbar|circledR|circledS|setminus|multimap|naturals|scpolint|ncongdot|RightTee|boxminus|gnapprox|boxtimes|andslope|thicksim|angmsdaa|varsigma|cirfnint|rtriltri|angmsdab|rppolint|angmsdac|barwedge|drbkarow|clubsuit|thetasym|bsolhsub|capbrcup|dzigrarr|doteqdot|DotEqual|dotminus|UnderBar|NotEqual|realpart|otimesas|ulcorner|hksearow|hkswarow|parallel|PartialD|elinters|emptyset|plusacir|bbrktbrk|angmsdad|pointint|bigoplus|angmsdae|Precedes|bigsqcup|varkappa|notindot|supseteq|precneqq|precnsim|profalar|profline|profsurf|leqslant|lesdotor|raemptyv|subplus|notnivb|notnivc|subrarr|zigrarr|vzigzag|submult|subedot|Element|between|cirscir|larrbfs|larrsim|lotimes|lbrksld|lbrkslu|lozenge|ldrdhar|dbkarow|bigcirc|epsilon|simrarr|simplus|ltquest|Epsilon|luruhar|gtquest|maltese|npolint|eqcolon|npreceq|bigodot|ddagger|gtrless|bnequiv|harrcir|ddotseq|equivDD|backsim|demptyv|nsqsube|nsqsupe|Upsilon|nsubset|upsilon|minusdu|nsucceq|swarrow|nsupset|coloneq|searrow|boxplus|napprox|natural|asympeq|alefsym|congdot|nearrow|bigstar|diamond|supplus|tritime|LeftTee|nvinfin|triplus|NewLine|nvltrie|nvrtrie|nwarrow|nexists|Diamond|ruluhar|Implies|supmult|angzarr|suplarr|suphsub|questeq|because|digamma|Because|olcross|bemptyv|omicron|Omicron|rotimes|NoBreak|intprod|angrtvb|orderof|uwangle|suphsol|lesdoto|orslope|DownTee|realine|cudarrl|rdldhar|OverBar|supedot|lessdot|supdsub|topfork|succsim|rbrkslu|rbrksld|pertenk|cudarrr|isindot|planckh|lessgtr|pluscir|gesdoto|plussim|plustwo|lesssim|cularrp|rarrsim|Cayleys|notinva|notinvb|notinvc|UpArrow|Uparrow|uparrow|NotLess|dwangle|precsim|Product|curarrm|Cconint|dotplus|rarrbfs|ccupssm|Cedilla|cemptyv|notniva|quatint|frac35|frac38|frac45|frac56|frac58|frac78|tridot|xoplus|gacute|gammad|Gammad|lfisht|lfloor|bigcup|sqsupe|gbreve|Gbreve|lharul|sqsube|sqcups|Gcedil|apacir|llhard|lmidot|Lmidot|lmoust|andand|sqcaps|approx|Abreve|spades|circeq|tprime|divide|topcir|Assign|topbot|gesdot|divonx|xuplus|timesd|gesles|atilde|solbar|SOFTcy|loplus|timesb|lowast|lowbar|dlcorn|dlcrop|softcy|dollar|lparlt|thksim|lrhard|Atilde|lsaquo|smashp|bigvee|thinsp|wreath|bkarow|lsquor|lstrok|Lstrok|lthree|ltimes|ltlarr|DotDot|simdot|ltrPar|weierp|xsqcup|angmsd|sigmav|sigmaf|zeetrf|Zcaron|zcaron|mapsto|vsupne|thetav|cirmid|marker|mcomma|Zacute|vsubnE|there4|gtlPar|vsubne|bottom|gtrarr|SHCHcy|shchcy|midast|midcir|middot|minusb|minusd|gtrdot|bowtie|sfrown|mnplus|models|colone|seswar|Colone|mstpos|searhk|gtrsim|nacute|Nacute|boxbox|telrec|hairsp|Tcedil|nbumpe|scnsim|ncaron|Ncaron|ncedil|Ncedil|hamilt|Scedil|nearhk|hardcy|HARDcy|tcedil|Tcaron|commat|nequiv|nesear|tcaron|target|hearts|nexist|varrho|scedil|Scaron|scaron|hellip|Sacute|sacute|hercon|swnwar|compfn|rtimes|rthree|rsquor|rsaquo|zacute|wedgeq|homtht|barvee|barwed|Barwed|rpargt|horbar|conint|swarhk|roplus|nltrie|hslash|hstrok|Hstrok|rmoust|Conint|bprime|hybull|hyphen|iacute|Iacute|supsup|supsub|supsim|varphi|coprod|brvbar|agrave|Supset|supset|igrave|Igrave|notinE|Agrave|iiiint|iinfin|copysr|wedbar|Verbar|vangrt|becaus|incare|verbar|inodot|bullet|drcorn|intcal|drcrop|cularr|vellip|Utilde|bumpeq|cupcap|dstrok|Dstrok|CupCap|cupcup|cupdot|eacute|Eacute|supdot|iquest|easter|ecaron|Ecaron|ecolon|isinsv|utilde|itilde|Itilde|curarr|succeq|Bumpeq|cacute|ulcrop|nparsl|Cacute|nprcue|egrave|Egrave|nrarrc|nrarrw|subsup|subsub|nrtrie|jsercy|nsccue|Jsercy|kappav|kcedil|Kcedil|subsim|ulcorn|nsimeq|egsdot|veebar|kgreen|capand|elsdot|Subset|subset|curren|aacute|lacute|Lacute|emptyv|ntilde|Ntilde|lagran|lambda|Lambda|capcap|Ugrave|langle|subdot|emsp13|numero|emsp14|nvdash|nvDash|nVdash|nVDash|ugrave|ufisht|nvHarr|larrfs|nvlArr|larrhk|larrlp|larrpl|nvrArr|Udblac|nwarhk|larrtl|nwnear|oacute|Oacute|latail|lAtail|sstarf|lbrace|odblac|Odblac|lbrack|udblac|odsold|eparsl|lcaron|Lcaron|ograve|Ograve|lcedil|Lcedil|Aacute|ssmile|ssetmn|squarf|ldquor|capcup|ominus|cylcty|rharul|eqcirc|dagger|rfloor|rfisht|Dagger|daleth|equals|origof|capdot|equest|dcaron|Dcaron|rdquor|oslash|Oslash|otilde|Otilde|otimes|Otimes|urcrop|Ubreve|ubreve|Yacute|Uacute|uacute|Rcedil|rcedil|urcorn|parsim|Rcaron|Vdashl|rcaron|Tstrok|percnt|period|permil|Exists|yacute|rbrack|rbrace|phmmat|ccaron|Ccaron|planck|ccedil|plankv|tstrok|female|plusdo|plusdu|ffilig|plusmn|ffllig|Ccedil|rAtail|dfisht|bernou|ratail|Rarrtl|rarrtl|angsph|rarrpl|rarrlp|rarrhk|xwedge|xotime|forall|ForAll|Vvdash|vsupnE|preceq|bigcap|frac12|frac13|frac14|primes|rarrfs|prnsim|frac15|Square|frac16|square|lesdot|frac18|frac23|propto|prurel|rarrap|rangle|puncsp|frac25|Racute|qprime|racute|lesges|frac34|abreve|AElig|eqsim|utdot|setmn|urtri|Equal|Uring|seArr|uring|searr|dashv|Dashv|mumap|nabla|iogon|Iogon|sdote|sdotb|scsim|napid|napos|equiv|natur|Acirc|dblac|erarr|nbump|iprod|erDot|ucirc|awint|esdot|angrt|ncong|isinE|scnap|Scirc|scirc|ndash|isins|Ubrcy|nearr|neArr|isinv|nedot|ubrcy|acute|Ycirc|iukcy|Iukcy|xutri|nesim|caret|jcirc|Jcirc|caron|twixt|ddarr|sccue|exist|jmath|sbquo|ngeqq|angst|ccaps|lceil|ngsim|UpTee|delta|Delta|rtrif|nharr|nhArr|nhpar|rtrie|jukcy|Jukcy|kappa|rsquo|Kappa|nlarr|nlArr|TSHcy|rrarr|aogon|Aogon|fflig|xrarr|tshcy|ccirc|nleqq|filig|upsih|nless|dharl|nlsim|fjlig|ropar|nltri|dharr|robrk|roarr|fllig|fltns|roang|rnmid|subnE|subne|lAarr|trisb|Ccirc|acirc|ccups|blank|VDash|forkv|Vdash|langd|cedil|blk12|blk14|laquo|strns|diams|notin|vDash|larrb|blk34|block|disin|uplus|vdash|vBarv|aelig|starf|Wedge|check|xrArr|lates|lbarr|lBarr|notni|lbbrk|bcong|frasl|lbrke|frown|vrtri|vprop|vnsup|gamma|Gamma|wedge|xodot|bdquo|srarr|doteq|ldquo|boxdl|boxdL|gcirc|Gcirc|boxDl|boxDL|boxdr|boxdR|boxDr|TRADE|trade|rlhar|boxDR|vnsub|npart|vltri|rlarr|boxhd|boxhD|nprec|gescc|nrarr|nrArr|boxHd|boxHD|boxhu|boxhU|nrtri|boxHu|clubs|boxHU|times|colon|Colon|gimel|xlArr|Tilde|nsime|tilde|nsmid|nspar|THORN|thorn|xlarr|nsube|nsubE|thkap|xhArr|comma|nsucc|boxul|boxuL|nsupe|nsupE|gneqq|gnsim|boxUl|boxUL|grave|boxur|boxuR|boxUr|boxUR|lescc|angle|bepsi|boxvh|varpi|boxvH|numsp|Theta|gsime|gsiml|theta|boxVh|boxVH|boxvl|gtcir|gtdot|boxvL|boxVl|boxVL|crarr|cross|Cross|nvsim|boxvr|nwarr|nwArr|sqsup|dtdot|Uogon|lhard|lharu|dtrif|ocirc|Ocirc|lhblk|duarr|odash|sqsub|Hacek|sqcup|llarr|duhar|oelig|OElig|ofcir|boxvR|uogon|lltri|boxVr|csube|uuarr|ohbar|csupe|ctdot|olarr|olcir|harrw|oline|sqcap|omacr|Omacr|omega|Omega|boxVR|aleph|lneqq|lnsim|loang|loarr|rharu|lobrk|hcirc|operp|oplus|rhard|Hcirc|orarr|Union|order|ecirc|Ecirc|cuepr|szlig|cuesc|breve|reals|eDDot|Breve|hoarr|lopar|utrif|rdquo|Umacr|umacr|efDot|swArr|ultri|alpha|rceil|ovbar|swarr|Wcirc|wcirc|smtes|smile|bsemi|lrarr|aring|parsl|lrhar|bsime|uhblk|lrtri|cupor|Aring|uharr|uharl|slarr|rbrke|bsolb|lsime|rbbrk|RBarr|lsimg|phone|rBarr|rbarr|icirc|lsquo|Icirc|emacr|Emacr|ratio|simne|plusb|simlE|simgE|simeq|pluse|ltcir|ltdot|empty|xharr|xdtri|iexcl|Alpha|ltrie|rarrw|pound|ltrif|xcirc|bumpe|prcue|bumpE|asymp|amacr|cuvee|Sigma|sigma|iiint|udhar|iiota|ijlig|IJlig|supnE|imacr|Imacr|prime|Prime|image|prnap|eogon|Eogon|rarrc|mdash|mDDot|cuwed|imath|supne|imped|Amacr|udarr|prsim|micro|rarrb|cwint|raquo|infin|eplus|range|rangd|Ucirc|radic|minus|amalg|veeeq|rAarr|epsiv|ycirc|quest|sharp|quot|zwnj|Qscr|race|qscr|Qopf|qopf|qint|rang|Rang|Zscr|zscr|Zopf|zopf|rarr|rArr|Rarr|Pscr|pscr|prop|prod|prnE|prec|ZHcy|zhcy|prap|Zeta|zeta|Popf|popf|Zdot|plus|zdot|Yuml|yuml|phiv|YUcy|yucy|Yscr|yscr|perp|Yopf|yopf|part|para|YIcy|Ouml|rcub|yicy|YAcy|rdca|ouml|osol|Oscr|rdsh|yacy|real|oscr|xvee|andd|rect|andv|Xscr|oror|ordm|ordf|xscr|ange|aopf|Aopf|rHar|Xopf|opar|Oopf|xopf|xnis|rhov|oopf|omid|xmap|oint|apid|apos|ogon|ascr|Ascr|odot|odiv|xcup|xcap|ocir|oast|nvlt|nvle|nvgt|nvge|nvap|Wscr|wscr|auml|ntlg|ntgl|nsup|nsub|nsim|Nscr|nscr|nsce|Wopf|ring|npre|wopf|npar|Auml|Barv|bbrk|Nopf|nopf|nmid|nLtv|beta|ropf|Ropf|Beta|beth|nles|rpar|nleq|bnot|bNot|nldr|NJcy|rscr|Rscr|Vscr|vscr|rsqb|njcy|bopf|nisd|Bopf|rtri|Vopf|nGtv|ngtr|vopf|boxh|boxH|boxv|nges|ngeq|boxV|bscr|scap|Bscr|bsim|Vert|vert|bsol|bull|bump|caps|cdot|ncup|scnE|ncap|nbsp|napE|Cdot|cent|sdot|Vbar|nang|vBar|chcy|Mscr|mscr|sect|semi|CHcy|Mopf|mopf|sext|circ|cire|mldr|mlcp|cirE|comp|shcy|SHcy|vArr|varr|cong|copf|Copf|copy|COPY|malt|male|macr|lvnE|cscr|ltri|sime|ltcc|simg|Cscr|siml|csub|Uuml|lsqb|lsim|uuml|csup|Lscr|lscr|utri|smid|lpar|cups|smte|lozf|darr|Lopf|Uscr|solb|lopf|sopf|Sopf|lneq|uscr|spar|dArr|lnap|Darr|dash|Sqrt|LJcy|ljcy|lHar|dHar|Upsi|upsi|diam|lesg|djcy|DJcy|leqq|dopf|Dopf|dscr|Dscr|dscy|ldsh|ldca|squf|DScy|sscr|Sscr|dsol|lcub|late|star|Star|Uopf|Larr|lArr|larr|uopf|dtri|dzcy|sube|subE|Lang|lang|Kscr|kscr|Kopf|kopf|KJcy|kjcy|KHcy|khcy|DZcy|ecir|edot|eDot|Jscr|jscr|succ|Jopf|jopf|Edot|uHar|emsp|ensp|Iuml|iuml|eopf|isin|Iscr|iscr|Eopf|epar|sung|epsi|escr|sup1|sup2|sup3|Iota|iota|supe|supE|Iopf|iopf|IOcy|iocy|Escr|esim|Esim|imof|Uarr|QUOT|uArr|uarr|euml|IEcy|iecy|Idot|Euml|euro|excl|Hscr|hscr|Hopf|hopf|TScy|tscy|Tscr|hbar|tscr|flat|tbrk|fnof|hArr|harr|half|fopf|Fopf|tdot|gvnE|fork|trie|gtcc|fscr|Fscr|gdot|gsim|Gscr|gscr|Gopf|gopf|gneq|Gdot|tosa|gnap|Topf|topf|geqq|toea|GJcy|gjcy|tint|gesl|mid|Sfr|ggg|top|ges|gla|glE|glj|geq|gne|gEl|gel|gnE|Gcy|gcy|gap|Tfr|tfr|Tcy|tcy|Hat|Tau|Ffr|tau|Tab|hfr|Hfr|ffr|Fcy|fcy|icy|Icy|iff|ETH|eth|ifr|Ifr|Eta|eta|int|Int|Sup|sup|ucy|Ucy|Sum|sum|jcy|ENG|ufr|Ufr|eng|Jcy|jfr|els|ell|egs|Efr|efr|Jfr|uml|kcy|Kcy|Ecy|ecy|kfr|Kfr|lap|Sub|sub|lat|lcy|Lcy|leg|Dot|dot|lEg|leq|les|squ|div|die|lfr|Lfr|lgE|Dfr|dfr|Del|deg|Dcy|dcy|lne|lnE|sol|loz|smt|Cup|lrm|cup|lsh|Lsh|sim|shy|map|Map|mcy|Mcy|mfr|Mfr|mho|gfr|Gfr|sfr|cir|Chi|chi|nap|Cfr|vcy|Vcy|cfr|Scy|scy|ncy|Ncy|vee|Vee|Cap|cap|nfr|scE|sce|Nfr|nge|ngE|nGg|vfr|Vfr|ngt|bot|nGt|nis|niv|Rsh|rsh|nle|nlE|bne|Bfr|bfr|nLl|nlt|nLt|Bcy|bcy|not|Not|rlm|wfr|Wfr|npr|nsc|num|ocy|ast|Ocy|ofr|xfr|Xfr|Ofr|ogt|ohm|apE|olt|Rho|ape|rho|Rfr|rfr|ord|REG|ang|reg|orv|And|and|AMP|Rcy|amp|Afr|ycy|Ycy|yen|yfr|Yfr|rcy|par|pcy|Pcy|pfr|Pfr|phi|Phi|afr|Acy|acy|zcy|Zcy|piv|acE|acd|zfr|Zfr|pre|prE|psi|Psi|qfr|Qfr|zwj|Or|ge|Gg|gt|gg|el|oS|lt|Lt|LT|Re|lg|gl|eg|ne|Im|it|le|DD|wp|wr|nu|Nu|dd|lE|Sc|sc|pi|Pi|ee|af|ll|Ll|rx|gE|xi|pm|Xi|ic|pr|Pr|in|ni|mp|mu|ac|Mu|or|ap|Gt|GT|ii);|&(Aacute|Agrave|Atilde|Ccedil|Eacute|Egrave|Iacute|Igrave|Ntilde|Oacute|Ograve|Oslash|Otilde|Uacute|Ugrave|Yacute|aacute|agrave|atilde|brvbar|ccedil|curren|divide|eacute|egrave|frac12|frac14|frac34|iacute|igrave|iquest|middot|ntilde|oacute|ograve|oslash|otilde|plusmn|uacute|ugrave|yacute|AElig|Acirc|Aring|Ecirc|Icirc|Ocirc|THORN|Ucirc|acirc|acute|aelig|aring|cedil|ecirc|icirc|iexcl|laquo|micro|ocirc|pound|raquo|szlig|thorn|times|ucirc|Auml|COPY|Euml|Iuml|Ouml|QUOT|Uuml|auml|cent|copy|euml|iuml|macr|nbsp|ordf|ordm|ouml|para|quot|sect|sup1|sup2|sup3|uuml|yuml|AMP|ETH|REG|amp|deg|eth|not|reg|shy|uml|yen|GT|LT|gt|lt)(?!;)([=a-zA-Z0-9]?)|&#([0-9]+)(;?)|&#[xX]([a-fA-F0-9]+)(;?)|&([0-9a-zA-Z]+)/g,g={aacute:"á",Aacute:"Á",abreve:"ă",Abreve:"Ă",ac:"∾",acd:"∿",acE:"∾̳",acirc:"â",Acirc:"Â",acute:"´",acy:"а",Acy:"А",aelig:"æ",AElig:"Æ",af:"⁡",afr:"𝔞",Afr:"𝔄",agrave:"à",Agrave:"À",alefsym:"ℵ",aleph:"ℵ",alpha:"α",Alpha:"Α",amacr:"ā",Amacr:"Ā",amalg:"⨿",amp:"&",AMP:"&",and:"∧",And:"⩓",andand:"⩕",andd:"⩜",andslope:"⩘",andv:"⩚",ang:"∠",ange:"⦤",angle:"∠",angmsd:"∡",angmsdaa:"⦨",angmsdab:"⦩",angmsdac:"⦪",angmsdad:"⦫",angmsdae:"⦬",angmsdaf:"⦭",angmsdag:"⦮",angmsdah:"⦯",angrt:"∟",angrtvb:"⊾",angrtvbd:"⦝",angsph:"∢",angst:"Å",angzarr:"⍼",aogon:"ą",Aogon:"Ą",aopf:"𝕒",Aopf:"𝔸",ap:"≈",apacir:"⩯",ape:"≊",apE:"⩰",apid:"≋",apos:"'",ApplyFunction:"⁡",approx:"≈",approxeq:"≊",aring:"å",Aring:"Å",ascr:"𝒶",Ascr:"𝒜",Assign:"≔",ast:"*",asymp:"≈",asympeq:"≍",atilde:"ã",Atilde:"Ã",auml:"ä",Auml:"Ä",awconint:"∳",awint:"⨑",backcong:"≌",backepsilon:"϶",backprime:"‵",backsim:"∽",backsimeq:"⋍",Backslash:"∖",Barv:"⫧",barvee:"⊽",barwed:"⌅",Barwed:"⌆",barwedge:"⌅",bbrk:"⎵",bbrktbrk:"⎶",bcong:"≌",bcy:"б",Bcy:"Б",bdquo:"„",becaus:"∵",because:"∵",Because:"∵",bemptyv:"⦰",bepsi:"϶",bernou:"ℬ",Bernoullis:"ℬ",beta:"β",Beta:"Β",beth:"ℶ",between:"≬",bfr:"𝔟",Bfr:"𝔅",bigcap:"⋂",bigcirc:"◯",bigcup:"⋃",bigodot:"⨀",bigoplus:"⨁",bigotimes:"⨂",bigsqcup:"⨆",bigstar:"★",bigtriangledown:"▽",bigtriangleup:"△",biguplus:"⨄",bigvee:"⋁",bigwedge:"⋀",bkarow:"⤍",blacklozenge:"⧫",blacksquare:"▪",blacktriangle:"▴",blacktriangledown:"▾",blacktriangleleft:"◂",blacktriangleright:"▸",blank:"␣",blk12:"▒",blk14:"░",blk34:"▓",block:"█",bne:"=⃥",bnequiv:"≡⃥",bnot:"⌐",bNot:"⫭",bopf:"𝕓",Bopf:"𝔹",bot:"⊥",bottom:"⊥",bowtie:"⋈",boxbox:"⧉",boxdl:"┐",boxdL:"╕",boxDl:"╖",boxDL:"╗",boxdr:"┌",boxdR:"╒",boxDr:"╓",boxDR:"╔",boxh:"─",boxH:"═",boxhd:"┬",boxhD:"╥",boxHd:"╤",boxHD:"╦",boxhu:"┴",boxhU:"╨",boxHu:"╧",boxHU:"╩",boxminus:"⊟",boxplus:"⊞",boxtimes:"⊠",boxul:"┘",boxuL:"╛",boxUl:"╜",boxUL:"╝",boxur:"└",boxuR:"╘",boxUr:"╙",boxUR:"╚",boxv:"│",boxV:"║",boxvh:"┼",boxvH:"╪",boxVh:"╫",boxVH:"╬",boxvl:"┤",boxvL:"╡",boxVl:"╢",boxVL:"╣",boxvr:"├",boxvR:"╞",boxVr:"╟",boxVR:"╠",bprime:"‵",breve:"˘",Breve:"˘",brvbar:"¦",bscr:"𝒷",Bscr:"ℬ",bsemi:"⁏",bsim:"∽",bsime:"⋍",bsol:"\\",bsolb:"⧅",bsolhsub:"⟈",bull:"•",bullet:"•",bump:"≎",bumpe:"≏",bumpE:"⪮",bumpeq:"≏",Bumpeq:"≎",cacute:"ć",Cacute:"Ć",cap:"∩",Cap:"⋒",capand:"⩄",capbrcup:"⩉",capcap:"⩋",capcup:"⩇",capdot:"⩀",CapitalDifferentialD:"ⅅ",caps:"∩︀",caret:"⁁",caron:"ˇ",Cayleys:"ℭ",ccaps:"⩍",ccaron:"č",Ccaron:"Č",ccedil:"ç",Ccedil:"Ç",ccirc:"ĉ",Ccirc:"Ĉ",Cconint:"∰",ccups:"⩌",ccupssm:"⩐",cdot:"ċ",Cdot:"Ċ",cedil:"¸",Cedilla:"¸",cemptyv:"⦲",cent:"¢",centerdot:"·",CenterDot:"·",cfr:"𝔠",Cfr:"ℭ",chcy:"ч",CHcy:"Ч",check:"✓",checkmark:"✓",chi:"χ",Chi:"Χ",cir:"○",circ:"ˆ",circeq:"≗",circlearrowleft:"↺",circlearrowright:"↻",circledast:"⊛",circledcirc:"⊚",circleddash:"⊝",CircleDot:"⊙",circledR:"®",circledS:"Ⓢ",CircleMinus:"⊖",CirclePlus:"⊕",CircleTimes:"⊗",cire:"≗",cirE:"⧃",cirfnint:"⨐",cirmid:"⫯",cirscir:"⧂",ClockwiseContourIntegral:"∲",CloseCurlyDoubleQuote:"”",CloseCurlyQuote:"’",clubs:"♣",clubsuit:"♣",colon:":",Colon:"∷",colone:"≔",Colone:"⩴",coloneq:"≔",comma:",",commat:"@",comp:"∁",compfn:"∘",complement:"∁",complexes:"ℂ",cong:"≅",congdot:"⩭",Congruent:"≡",conint:"∮",Conint:"∯",ContourIntegral:"∮",copf:"𝕔",Copf:"ℂ",coprod:"∐",Coproduct:"∐",copy:"©",COPY:"©",copysr:"℗",CounterClockwiseContourIntegral:"∳",crarr:"↵",cross:"✗",Cross:"⨯",cscr:"𝒸",Cscr:"𝒞",csub:"⫏",csube:"⫑",csup:"⫐",csupe:"⫒",ctdot:"⋯",cudarrl:"⤸",cudarrr:"⤵",cuepr:"⋞",cuesc:"⋟",cularr:"↶",cularrp:"⤽",cup:"∪",Cup:"⋓",cupbrcap:"⩈",cupcap:"⩆",CupCap:"≍",cupcup:"⩊",cupdot:"⊍",cupor:"⩅",cups:"∪︀",curarr:"↷",curarrm:"⤼",curlyeqprec:"⋞",curlyeqsucc:"⋟",curlyvee:"⋎",curlywedge:"⋏",curren:"¤",curvearrowleft:"↶",curvearrowright:"↷",cuvee:"⋎",cuwed:"⋏",cwconint:"∲",cwint:"∱",cylcty:"⌭",dagger:"†",Dagger:"‡",daleth:"ℸ",darr:"↓",dArr:"⇓",Darr:"↡",dash:"‐",dashv:"⊣",Dashv:"⫤",dbkarow:"⤏",dblac:"˝",dcaron:"ď",Dcaron:"Ď",dcy:"д",Dcy:"Д",dd:"ⅆ",DD:"ⅅ",ddagger:"‡",ddarr:"⇊",DDotrahd:"⤑",ddotseq:"⩷",deg:"°",Del:"∇",delta:"δ",Delta:"Δ",demptyv:"⦱",dfisht:"⥿",dfr:"𝔡",Dfr:"𝔇",dHar:"⥥",dharl:"⇃",dharr:"⇂",DiacriticalAcute:"´",DiacriticalDot:"˙",DiacriticalDoubleAcute:"˝",DiacriticalGrave:"`",DiacriticalTilde:"˜",diam:"⋄",diamond:"⋄",Diamond:"⋄",diamondsuit:"♦",diams:"♦",die:"¨",DifferentialD:"ⅆ",digamma:"ϝ",disin:"⋲",div:"÷",divide:"÷",divideontimes:"⋇",divonx:"⋇",djcy:"ђ",DJcy:"Ђ",dlcorn:"⌞",dlcrop:"⌍",dollar:"$",dopf:"𝕕",Dopf:"𝔻",dot:"˙",Dot:"¨",DotDot:"⃜",doteq:"≐",doteqdot:"≑",DotEqual:"≐",dotminus:"∸",dotplus:"∔",dotsquare:"⊡",doublebarwedge:"⌆",DoubleContourIntegral:"∯",DoubleDot:"¨",DoubleDownArrow:"⇓",DoubleLeftArrow:"⇐",DoubleLeftRightArrow:"⇔",DoubleLeftTee:"⫤",DoubleLongLeftArrow:"⟸",DoubleLongLeftRightArrow:"⟺",DoubleLongRightArrow:"⟹",DoubleRightArrow:"⇒",DoubleRightTee:"⊨",DoubleUpArrow:"⇑",DoubleUpDownArrow:"⇕",DoubleVerticalBar:"∥",downarrow:"↓",Downarrow:"⇓",DownArrow:"↓",DownArrowBar:"⤓",DownArrowUpArrow:"⇵",DownBreve:"̑",downdownarrows:"⇊",downharpoonleft:"⇃",downharpoonright:"⇂",DownLeftRightVector:"⥐",DownLeftTeeVector:"⥞",DownLeftVector:"↽",DownLeftVectorBar:"⥖",DownRightTeeVector:"⥟",DownRightVector:"⇁",DownRightVectorBar:"⥗",DownTee:"⊤",DownTeeArrow:"↧",drbkarow:"⤐",drcorn:"⌟",drcrop:"⌌",dscr:"𝒹",Dscr:"𝒟",dscy:"ѕ",DScy:"Ѕ",dsol:"⧶",dstrok:"đ",Dstrok:"Đ",dtdot:"⋱",dtri:"▿",dtrif:"▾",duarr:"⇵",duhar:"⥯",dwangle:"⦦",dzcy:"џ",DZcy:"Џ",dzigrarr:"⟿",eacute:"é",Eacute:"É",easter:"⩮",ecaron:"ě",Ecaron:"Ě",ecir:"≖",ecirc:"ê",Ecirc:"Ê",ecolon:"≕",ecy:"э",Ecy:"Э",eDDot:"⩷",edot:"ė",eDot:"≑",Edot:"Ė",ee:"ⅇ",efDot:"≒",efr:"𝔢",Efr:"𝔈",eg:"⪚",egrave:"è",Egrave:"È",egs:"⪖",egsdot:"⪘",el:"⪙",Element:"∈",elinters:"⏧",ell:"ℓ",els:"⪕",elsdot:"⪗",emacr:"ē",Emacr:"Ē",empty:"∅",emptyset:"∅",EmptySmallSquare:"◻",emptyv:"∅",EmptyVerySmallSquare:"▫",emsp:" ",emsp13:" ",emsp14:" ",eng:"ŋ",ENG:"Ŋ",ensp:" ",eogon:"ę",Eogon:"Ę",eopf:"𝕖",Eopf:"𝔼",epar:"⋕",eparsl:"⧣",eplus:"⩱",epsi:"ε",epsilon:"ε",Epsilon:"Ε",epsiv:"ϵ",eqcirc:"≖",eqcolon:"≕",eqsim:"≂",eqslantgtr:"⪖",eqslantless:"⪕",Equal:"⩵",equals:"=",EqualTilde:"≂",equest:"≟",Equilibrium:"⇌",equiv:"≡",equivDD:"⩸",eqvparsl:"⧥",erarr:"⥱",erDot:"≓",escr:"ℯ",Escr:"ℰ",esdot:"≐",esim:"≂",Esim:"⩳",eta:"η",Eta:"Η",eth:"ð",ETH:"Ð",euml:"ë",Euml:"Ë",euro:"€",excl:"!",exist:"∃",Exists:"∃",expectation:"ℰ",exponentiale:"ⅇ",ExponentialE:"ⅇ",fallingdotseq:"≒",fcy:"ф",Fcy:"Ф",female:"♀",ffilig:"ﬃ",fflig:"ﬀ",ffllig:"ﬄ",ffr:"𝔣",Ffr:"𝔉",filig:"ﬁ",FilledSmallSquare:"◼",FilledVerySmallSquare:"▪",fjlig:"fj",flat:"♭",fllig:"ﬂ",fltns:"▱",fnof:"ƒ",fopf:"𝕗",Fopf:"𝔽",forall:"∀",ForAll:"∀",fork:"⋔",forkv:"⫙",Fouriertrf:"ℱ",fpartint:"⨍",frac12:"½",frac13:"⅓",frac14:"¼",frac15:"⅕",frac16:"⅙",frac18:"⅛",frac23:"⅔",frac25:"⅖",frac34:"¾",frac35:"⅗",frac38:"⅜",frac45:"⅘",frac56:"⅚",frac58:"⅝",frac78:"⅞",frasl:"⁄",frown:"⌢",fscr:"𝒻",Fscr:"ℱ",gacute:"ǵ",gamma:"γ",Gamma:"Γ",gammad:"ϝ",Gammad:"Ϝ",gap:"⪆",gbreve:"ğ",Gbreve:"Ğ",Gcedil:"Ģ",gcirc:"ĝ",Gcirc:"Ĝ",gcy:"г",Gcy:"Г",gdot:"ġ",Gdot:"Ġ",ge:"≥",gE:"≧",gel:"⋛",gEl:"⪌",geq:"≥",geqq:"≧",geqslant:"⩾",ges:"⩾",gescc:"⪩",gesdot:"⪀",gesdoto:"⪂",gesdotol:"⪄",gesl:"⋛︀",gesles:"⪔",gfr:"𝔤",Gfr:"𝔊",gg:"≫",Gg:"⋙",ggg:"⋙",gimel:"ℷ",gjcy:"ѓ",GJcy:"Ѓ",gl:"≷",gla:"⪥",glE:"⪒",glj:"⪤",gnap:"⪊",gnapprox:"⪊",gne:"⪈",gnE:"≩",gneq:"⪈",gneqq:"≩",gnsim:"⋧",gopf:"𝕘",Gopf:"𝔾",grave:"`",GreaterEqual:"≥",GreaterEqualLess:"⋛",GreaterFullEqual:"≧",GreaterGreater:"⪢",GreaterLess:"≷",GreaterSlantEqual:"⩾",GreaterTilde:"≳",gscr:"ℊ",Gscr:"𝒢",gsim:"≳",gsime:"⪎",gsiml:"⪐",gt:">",Gt:"≫",GT:">",gtcc:"⪧",gtcir:"⩺",gtdot:"⋗",gtlPar:"⦕",gtquest:"⩼",gtrapprox:"⪆",gtrarr:"⥸",gtrdot:"⋗",gtreqless:"⋛",gtreqqless:"⪌",gtrless:"≷",gtrsim:"≳",gvertneqq:"≩︀",gvnE:"≩︀",Hacek:"ˇ",hairsp:" ",half:"½",hamilt:"ℋ",hardcy:"ъ",HARDcy:"Ъ",harr:"↔",hArr:"⇔",harrcir:"⥈",harrw:"↭",Hat:"^",hbar:"ℏ",hcirc:"ĥ",Hcirc:"Ĥ",hearts:"♥",heartsuit:"♥",hellip:"…",hercon:"⊹",hfr:"𝔥",Hfr:"ℌ",HilbertSpace:"ℋ",hksearow:"⤥",hkswarow:"⤦",hoarr:"⇿",homtht:"∻",hookleftarrow:"↩",hookrightarrow:"↪",hopf:"𝕙",Hopf:"ℍ",horbar:"―",HorizontalLine:"─",hscr:"𝒽",Hscr:"ℋ",hslash:"ℏ",hstrok:"ħ",Hstrok:"Ħ",HumpDownHump:"≎",HumpEqual:"≏",hybull:"⁃",hyphen:"‐",iacute:"í",Iacute:"Í",ic:"⁣",icirc:"î",Icirc:"Î",icy:"и",Icy:"И",Idot:"İ",iecy:"е",IEcy:"Е",iexcl:"¡",iff:"⇔",ifr:"𝔦",Ifr:"ℑ",igrave:"ì",Igrave:"Ì",ii:"ⅈ",iiiint:"⨌",iiint:"∭",iinfin:"⧜",iiota:"℩",ijlig:"ĳ",IJlig:"Ĳ",Im:"ℑ",imacr:"ī",Imacr:"Ī",image:"ℑ",ImaginaryI:"ⅈ",imagline:"ℐ",imagpart:"ℑ",imath:"ı",imof:"⊷",imped:"Ƶ",Implies:"⇒",in:"∈",incare:"℅",infin:"∞",infintie:"⧝",inodot:"ı",int:"∫",Int:"∬",intcal:"⊺",integers:"ℤ",Integral:"∫",intercal:"⊺",Intersection:"⋂",intlarhk:"⨗",intprod:"⨼",InvisibleComma:"⁣",InvisibleTimes:"⁢",iocy:"ё",IOcy:"Ё",iogon:"į",Iogon:"Į",iopf:"𝕚",Iopf:"𝕀",iota:"ι",Iota:"Ι",iprod:"⨼",iquest:"¿",iscr:"𝒾",Iscr:"ℐ",isin:"∈",isindot:"⋵",isinE:"⋹",isins:"⋴",isinsv:"⋳",isinv:"∈",it:"⁢",itilde:"ĩ",Itilde:"Ĩ",iukcy:"і",Iukcy:"І",iuml:"ï",Iuml:"Ï",jcirc:"ĵ",Jcirc:"Ĵ",jcy:"й",Jcy:"Й",jfr:"𝔧",Jfr:"𝔍",jmath:"ȷ",jopf:"𝕛",Jopf:"𝕁",jscr:"𝒿",Jscr:"𝒥",jsercy:"ј",Jsercy:"Ј",jukcy:"є",Jukcy:"Є",kappa:"κ",Kappa:"Κ",kappav:"ϰ",kcedil:"ķ",Kcedil:"Ķ",kcy:"к",Kcy:"К",kfr:"𝔨",Kfr:"𝔎",kgreen:"ĸ",khcy:"х",KHcy:"Х",kjcy:"ќ",KJcy:"Ќ",kopf:"𝕜",Kopf:"𝕂",kscr:"𝓀",Kscr:"𝒦",lAarr:"⇚",lacute:"ĺ",Lacute:"Ĺ",laemptyv:"⦴",lagran:"ℒ",lambda:"λ",Lambda:"Λ",lang:"⟨",Lang:"⟪",langd:"⦑",langle:"⟨",lap:"⪅",Laplacetrf:"ℒ",laquo:"«",larr:"←",lArr:"⇐",Larr:"↞",larrb:"⇤",larrbfs:"⤟",larrfs:"⤝",larrhk:"↩",larrlp:"↫",larrpl:"⤹",larrsim:"⥳",larrtl:"↢",lat:"⪫",latail:"⤙",lAtail:"⤛",late:"⪭",lates:"⪭︀",lbarr:"⤌",lBarr:"⤎",lbbrk:"❲",lbrace:"{",lbrack:"[",lbrke:"⦋",lbrksld:"⦏",lbrkslu:"⦍",lcaron:"ľ",Lcaron:"Ľ",lcedil:"ļ",Lcedil:"Ļ",lceil:"⌈",lcub:"{",lcy:"л",Lcy:"Л",ldca:"⤶",ldquo:"“",ldquor:"„",ldrdhar:"⥧",ldrushar:"⥋",ldsh:"↲",le:"≤",lE:"≦",LeftAngleBracket:"⟨",leftarrow:"←",Leftarrow:"⇐",LeftArrow:"←",LeftArrowBar:"⇤",LeftArrowRightArrow:"⇆",leftarrowtail:"↢",LeftCeiling:"⌈",LeftDoubleBracket:"⟦",LeftDownTeeVector:"⥡",LeftDownVector:"⇃",LeftDownVectorBar:"⥙",LeftFloor:"⌊",leftharpoondown:"↽",leftharpoonup:"↼",leftleftarrows:"⇇",leftrightarrow:"↔",Leftrightarrow:"⇔",LeftRightArrow:"↔",leftrightarrows:"⇆",leftrightharpoons:"⇋",leftrightsquigarrow:"↭",LeftRightVector:"⥎",LeftTee:"⊣",LeftTeeArrow:"↤",LeftTeeVector:"⥚",leftthreetimes:"⋋",LeftTriangle:"⊲",LeftTriangleBar:"⧏",LeftTriangleEqual:"⊴",LeftUpDownVector:"⥑",LeftUpTeeVector:"⥠",LeftUpVector:"↿",LeftUpVectorBar:"⥘",LeftVector:"↼",LeftVectorBar:"⥒",leg:"⋚",lEg:"⪋",leq:"≤",leqq:"≦",leqslant:"⩽",les:"⩽",lescc:"⪨",lesdot:"⩿",lesdoto:"⪁",lesdotor:"⪃",lesg:"⋚︀",lesges:"⪓",lessapprox:"⪅",lessdot:"⋖",lesseqgtr:"⋚",lesseqqgtr:"⪋",LessEqualGreater:"⋚",LessFullEqual:"≦",LessGreater:"≶",lessgtr:"≶",LessLess:"⪡",lesssim:"≲",LessSlantEqual:"⩽",LessTilde:"≲",lfisht:"⥼",lfloor:"⌊",lfr:"𝔩",Lfr:"𝔏",lg:"≶",lgE:"⪑",lHar:"⥢",lhard:"↽",lharu:"↼",lharul:"⥪",lhblk:"▄",ljcy:"љ",LJcy:"Љ",ll:"≪",Ll:"⋘",llarr:"⇇",llcorner:"⌞",Lleftarrow:"⇚",llhard:"⥫",lltri:"◺",lmidot:"ŀ",Lmidot:"Ŀ",lmoust:"⎰",lmoustache:"⎰",lnap:"⪉",lnapprox:"⪉",lne:"⪇",lnE:"≨",lneq:"⪇",lneqq:"≨",lnsim:"⋦",loang:"⟬",loarr:"⇽",lobrk:"⟦",longleftarrow:"⟵",Longleftarrow:"⟸",LongLeftArrow:"⟵",longleftrightarrow:"⟷",Longleftrightarrow:"⟺",LongLeftRightArrow:"⟷",longmapsto:"⟼",longrightarrow:"⟶",Longrightarrow:"⟹",LongRightArrow:"⟶",looparrowleft:"↫",looparrowright:"↬",lopar:"⦅",lopf:"𝕝",Lopf:"𝕃",loplus:"⨭",lotimes:"⨴",lowast:"∗",lowbar:"_",LowerLeftArrow:"↙",LowerRightArrow:"↘",loz:"◊",lozenge:"◊",lozf:"⧫",lpar:"(",lparlt:"⦓",lrarr:"⇆",lrcorner:"⌟",lrhar:"⇋",lrhard:"⥭",lrm:"‎",lrtri:"⊿",lsaquo:"‹",lscr:"𝓁",Lscr:"ℒ",lsh:"↰",Lsh:"↰",lsim:"≲",lsime:"⪍",lsimg:"⪏",lsqb:"[",lsquo:"‘",lsquor:"‚",lstrok:"ł",Lstrok:"Ł",lt:"<",Lt:"≪",LT:"<",ltcc:"⪦",ltcir:"⩹",ltdot:"⋖",lthree:"⋋",ltimes:"⋉",ltlarr:"⥶",ltquest:"⩻",ltri:"◃",ltrie:"⊴",ltrif:"◂",ltrPar:"⦖",lurdshar:"⥊",luruhar:"⥦",lvertneqq:"≨︀",lvnE:"≨︀",macr:"¯",male:"♂",malt:"✠",maltese:"✠",map:"↦",Map:"⤅",mapsto:"↦",mapstodown:"↧",mapstoleft:"↤",mapstoup:"↥",marker:"▮",mcomma:"⨩",mcy:"м",Mcy:"М",mdash:"—",mDDot:"∺",measuredangle:"∡",MediumSpace:" ",Mellintrf:"ℳ",mfr:"𝔪",Mfr:"𝔐",mho:"℧",micro:"µ",mid:"∣",midast:"*",midcir:"⫰",middot:"·",minus:"−",minusb:"⊟",minusd:"∸",minusdu:"⨪",MinusPlus:"∓",mlcp:"⫛",mldr:"…",mnplus:"∓",models:"⊧",mopf:"𝕞",Mopf:"𝕄",mp:"∓",mscr:"𝓂",Mscr:"ℳ",mstpos:"∾",mu:"μ",Mu:"Μ",multimap:"⊸",mumap:"⊸",nabla:"∇",nacute:"ń",Nacute:"Ń",nang:"∠⃒",nap:"≉",napE:"⩰̸",napid:"≋̸",napos:"ŉ",napprox:"≉",natur:"♮",natural:"♮",naturals:"ℕ",nbsp:" ",nbump:"≎̸",nbumpe:"≏̸",ncap:"⩃",ncaron:"ň",Ncaron:"Ň",ncedil:"ņ",Ncedil:"Ņ",ncong:"≇",ncongdot:"⩭̸",ncup:"⩂",ncy:"н",Ncy:"Н",ndash:"–",ne:"≠",nearhk:"⤤",nearr:"↗",neArr:"⇗",nearrow:"↗",nedot:"≐̸",NegativeMediumSpace:"​",NegativeThickSpace:"​",NegativeThinSpace:"​",NegativeVeryThinSpace:"​",nequiv:"≢",nesear:"⤨",nesim:"≂̸",NestedGreaterGreater:"≫",NestedLessLess:"≪",NewLine:"\n",nexist:"∄",nexists:"∄",nfr:"𝔫",Nfr:"𝔑",nge:"≱",ngE:"≧̸",ngeq:"≱",ngeqq:"≧̸",ngeqslant:"⩾̸",nges:"⩾̸",nGg:"⋙̸",ngsim:"≵",ngt:"≯",nGt:"≫⃒",ngtr:"≯",nGtv:"≫̸",nharr:"↮",nhArr:"⇎",nhpar:"⫲",ni:"∋",nis:"⋼",nisd:"⋺",niv:"∋",njcy:"њ",NJcy:"Њ",nlarr:"↚",nlArr:"⇍",nldr:"‥",nle:"≰",nlE:"≦̸",nleftarrow:"↚",nLeftarrow:"⇍",nleftrightarrow:"↮",nLeftrightarrow:"⇎",nleq:"≰",nleqq:"≦̸",nleqslant:"⩽̸",nles:"⩽̸",nless:"≮",nLl:"⋘̸",nlsim:"≴",nlt:"≮",nLt:"≪⃒",nltri:"⋪",nltrie:"⋬",nLtv:"≪̸",nmid:"∤",NoBreak:"⁠",NonBreakingSpace:" ",nopf:"𝕟",Nopf:"ℕ",not:"¬",Not:"⫬",NotCongruent:"≢",NotCupCap:"≭",NotDoubleVerticalBar:"∦",NotElement:"∉",NotEqual:"≠",NotEqualTilde:"≂̸",NotExists:"∄",NotGreater:"≯",NotGreaterEqual:"≱",NotGreaterFullEqual:"≧̸",NotGreaterGreater:"≫̸",NotGreaterLess:"≹",NotGreaterSlantEqual:"⩾̸",NotGreaterTilde:"≵",NotHumpDownHump:"≎̸",NotHumpEqual:"≏̸",notin:"∉",notindot:"⋵̸",notinE:"⋹̸",notinva:"∉",notinvb:"⋷",notinvc:"⋶",NotLeftTriangle:"⋪",NotLeftTriangleBar:"⧏̸",NotLeftTriangleEqual:"⋬",NotLess:"≮",NotLessEqual:"≰",NotLessGreater:"≸",NotLessLess:"≪̸",NotLessSlantEqual:"⩽̸",NotLessTilde:"≴",NotNestedGreaterGreater:"⪢̸",NotNestedLessLess:"⪡̸",notni:"∌",notniva:"∌",notnivb:"⋾",notnivc:"⋽",NotPrecedes:"⊀",NotPrecedesEqual:"⪯̸",NotPrecedesSlantEqual:"⋠",NotReverseElement:"∌",NotRightTriangle:"⋫",NotRightTriangleBar:"⧐̸",NotRightTriangleEqual:"⋭",NotSquareSubset:"⊏̸",NotSquareSubsetEqual:"⋢",NotSquareSuperset:"⊐̸",NotSquareSupersetEqual:"⋣",NotSubset:"⊂⃒",NotSubsetEqual:"⊈",NotSucceeds:"⊁",NotSucceedsEqual:"⪰̸",NotSucceedsSlantEqual:"⋡",NotSucceedsTilde:"≿̸",NotSuperset:"⊃⃒",NotSupersetEqual:"⊉",NotTilde:"≁",NotTildeEqual:"≄",NotTildeFullEqual:"≇",NotTildeTilde:"≉",NotVerticalBar:"∤",npar:"∦",nparallel:"∦",nparsl:"⫽⃥",npart:"∂̸",npolint:"⨔",npr:"⊀",nprcue:"⋠",npre:"⪯̸",nprec:"⊀",npreceq:"⪯̸",nrarr:"↛",nrArr:"⇏",nrarrc:"⤳̸",nrarrw:"↝̸",nrightarrow:"↛",nRightarrow:"⇏",nrtri:"⋫",nrtrie:"⋭",nsc:"⊁",nsccue:"⋡",nsce:"⪰̸",nscr:"𝓃",Nscr:"𝒩",nshortmid:"∤",nshortparallel:"∦",nsim:"≁",nsime:"≄",nsimeq:"≄",nsmid:"∤",nspar:"∦",nsqsube:"⋢",nsqsupe:"⋣",nsub:"⊄",nsube:"⊈",nsubE:"⫅̸",nsubset:"⊂⃒",nsubseteq:"⊈",nsubseteqq:"⫅̸",nsucc:"⊁",nsucceq:"⪰̸",nsup:"⊅",nsupe:"⊉",nsupE:"⫆̸",nsupset:"⊃⃒",nsupseteq:"⊉",nsupseteqq:"⫆̸",ntgl:"≹",ntilde:"ñ",Ntilde:"Ñ",ntlg:"≸",ntriangleleft:"⋪",ntrianglelefteq:"⋬",ntriangleright:"⋫",ntrianglerighteq:"⋭",nu:"ν",Nu:"Ν",num:"#",numero:"№",numsp:" ",nvap:"≍⃒",nvdash:"⊬",nvDash:"⊭",nVdash:"⊮",nVDash:"⊯",nvge:"≥⃒",nvgt:">⃒",nvHarr:"⤄",nvinfin:"⧞",nvlArr:"⤂",nvle:"≤⃒",nvlt:"<⃒",nvltrie:"⊴⃒",nvrArr:"⤃",nvrtrie:"⊵⃒",nvsim:"∼⃒",nwarhk:"⤣",nwarr:"↖",nwArr:"⇖",nwarrow:"↖",nwnear:"⤧",oacute:"ó",Oacute:"Ó",oast:"⊛",ocir:"⊚",ocirc:"ô",Ocirc:"Ô",ocy:"о",Ocy:"О",odash:"⊝",odblac:"ő",Odblac:"Ő",odiv:"⨸",odot:"⊙",odsold:"⦼",oelig:"œ",OElig:"Œ",ofcir:"⦿",ofr:"𝔬",Ofr:"𝔒",ogon:"˛",ograve:"ò",Ograve:"Ò",ogt:"⧁",ohbar:"⦵",ohm:"Ω",oint:"∮",olarr:"↺",olcir:"⦾",olcross:"⦻",oline:"‾",olt:"⧀",omacr:"ō",Omacr:"Ō",omega:"ω",Omega:"Ω",omicron:"ο",Omicron:"Ο",omid:"⦶",ominus:"⊖",oopf:"𝕠",Oopf:"𝕆",opar:"⦷",OpenCurlyDoubleQuote:"“",OpenCurlyQuote:"‘",operp:"⦹",oplus:"⊕",or:"∨",Or:"⩔",orarr:"↻",ord:"⩝",order:"ℴ",orderof:"ℴ",ordf:"ª",ordm:"º",origof:"⊶",oror:"⩖",orslope:"⩗",orv:"⩛",oS:"Ⓢ",oscr:"ℴ",Oscr:"𝒪",oslash:"ø",Oslash:"Ø",osol:"⊘",otilde:"õ",Otilde:"Õ",otimes:"⊗",Otimes:"⨷",otimesas:"⨶",ouml:"ö",Ouml:"Ö",ovbar:"⌽",OverBar:"‾",OverBrace:"⏞",OverBracket:"⎴",OverParenthesis:"⏜",par:"∥",para:"¶",parallel:"∥",parsim:"⫳",parsl:"⫽",part:"∂",PartialD:"∂",pcy:"п",Pcy:"П",percnt:"%",period:".",permil:"‰",perp:"⊥",pertenk:"‱",pfr:"𝔭",Pfr:"𝔓",phi:"φ",Phi:"Φ",phiv:"ϕ",phmmat:"ℳ",phone:"☎",pi:"π",Pi:"Π",pitchfork:"⋔",piv:"ϖ",planck:"ℏ",planckh:"ℎ",plankv:"ℏ",plus:"+",plusacir:"⨣",plusb:"⊞",pluscir:"⨢",plusdo:"∔",plusdu:"⨥",pluse:"⩲",PlusMinus:"±",plusmn:"±",plussim:"⨦",plustwo:"⨧",pm:"±",Poincareplane:"ℌ",pointint:"⨕",popf:"𝕡",Popf:"ℙ",pound:"£",pr:"≺",Pr:"⪻",prap:"⪷",prcue:"≼",pre:"⪯",prE:"⪳",prec:"≺",precapprox:"⪷",preccurlyeq:"≼",Precedes:"≺",PrecedesEqual:"⪯",PrecedesSlantEqual:"≼",PrecedesTilde:"≾",preceq:"⪯",precnapprox:"⪹",precneqq:"⪵",precnsim:"⋨",precsim:"≾",prime:"′",Prime:"″",primes:"ℙ",prnap:"⪹",prnE:"⪵",prnsim:"⋨",prod:"∏",Product:"∏",profalar:"⌮",profline:"⌒",profsurf:"⌓",prop:"∝",Proportion:"∷",Proportional:"∝",propto:"∝",prsim:"≾",prurel:"⊰",pscr:"𝓅",Pscr:"𝒫",psi:"ψ",Psi:"Ψ",puncsp:" ",qfr:"𝔮",Qfr:"𝔔",qint:"⨌",qopf:"𝕢",Qopf:"ℚ",qprime:"⁗",qscr:"𝓆",Qscr:"𝒬",quaternions:"ℍ",quatint:"⨖",quest:"?",questeq:"≟",quot:'"',QUOT:'"',rAarr:"⇛",race:"∽̱",racute:"ŕ",Racute:"Ŕ",radic:"√",raemptyv:"⦳",rang:"⟩",Rang:"⟫",rangd:"⦒",range:"⦥",rangle:"⟩",raquo:"»",rarr:"→",rArr:"⇒",Rarr:"↠",rarrap:"⥵",rarrb:"⇥",rarrbfs:"⤠",rarrc:"⤳",rarrfs:"⤞",rarrhk:"↪",rarrlp:"↬",rarrpl:"⥅",rarrsim:"⥴",rarrtl:"↣",Rarrtl:"⤖",rarrw:"↝",ratail:"⤚",rAtail:"⤜",ratio:"∶",rationals:"ℚ",rbarr:"⤍",rBarr:"⤏",RBarr:"⤐",rbbrk:"❳",rbrace:"}",rbrack:"]",rbrke:"⦌",rbrksld:"⦎",rbrkslu:"⦐",rcaron:"ř",Rcaron:"Ř",rcedil:"ŗ",Rcedil:"Ŗ",rceil:"⌉",rcub:"}",rcy:"р",Rcy:"Р",rdca:"⤷",rdldhar:"⥩",rdquo:"”",rdquor:"”",rdsh:"↳",Re:"ℜ",real:"ℜ",realine:"ℛ",realpart:"ℜ",reals:"ℝ",rect:"▭",reg:"®",REG:"®",ReverseElement:"∋",ReverseEquilibrium:"⇋",ReverseUpEquilibrium:"⥯",rfisht:"⥽",rfloor:"⌋",rfr:"𝔯",Rfr:"ℜ",rHar:"⥤",rhard:"⇁",rharu:"⇀",rharul:"⥬",rho:"ρ",Rho:"Ρ",rhov:"ϱ",RightAngleBracket:"⟩",rightarrow:"→",Rightarrow:"⇒",RightArrow:"→",RightArrowBar:"⇥",RightArrowLeftArrow:"⇄",rightarrowtail:"↣",RightCeiling:"⌉",RightDoubleBracket:"⟧",RightDownTeeVector:"⥝",RightDownVector:"⇂",RightDownVectorBar:"⥕",RightFloor:"⌋",rightharpoondown:"⇁",rightharpoonup:"⇀",rightleftarrows:"⇄",rightleftharpoons:"⇌",rightrightarrows:"⇉",rightsquigarrow:"↝",RightTee:"⊢",RightTeeArrow:"↦",RightTeeVector:"⥛",rightthreetimes:"⋌",RightTriangle:"⊳",RightTriangleBar:"⧐",RightTriangleEqual:"⊵",RightUpDownVector:"⥏",RightUpTeeVector:"⥜",RightUpVector:"↾",RightUpVectorBar:"⥔",RightVector:"⇀",RightVectorBar:"⥓",ring:"˚",risingdotseq:"≓",rlarr:"⇄",rlhar:"⇌",rlm:"‏",rmoust:"⎱",rmoustache:"⎱",rnmid:"⫮",roang:"⟭",roarr:"⇾",robrk:"⟧",ropar:"⦆",ropf:"𝕣",Ropf:"ℝ",roplus:"⨮",rotimes:"⨵",RoundImplies:"⥰",rpar:")",rpargt:"⦔",rppolint:"⨒",rrarr:"⇉",Rrightarrow:"⇛",rsaquo:"›",rscr:"𝓇",Rscr:"ℛ",rsh:"↱",Rsh:"↱",rsqb:"]",rsquo:"’",rsquor:"’",rthree:"⋌",rtimes:"⋊",rtri:"▹",rtrie:"⊵",rtrif:"▸",rtriltri:"⧎",RuleDelayed:"⧴",ruluhar:"⥨",rx:"℞",sacute:"ś",Sacute:"Ś",sbquo:"‚",sc:"≻",Sc:"⪼",scap:"⪸",scaron:"š",Scaron:"Š",sccue:"≽",sce:"⪰",scE:"⪴",scedil:"ş",Scedil:"Ş",scirc:"ŝ",Scirc:"Ŝ",scnap:"⪺",scnE:"⪶",scnsim:"⋩",scpolint:"⨓",scsim:"≿",scy:"с",Scy:"С",sdot:"⋅",sdotb:"⊡",sdote:"⩦",searhk:"⤥",searr:"↘",seArr:"⇘",searrow:"↘",sect:"§",semi:";",seswar:"⤩",setminus:"∖",setmn:"∖",sext:"✶",sfr:"𝔰",Sfr:"𝔖",sfrown:"⌢",sharp:"♯",shchcy:"щ",SHCHcy:"Щ",shcy:"ш",SHcy:"Ш",ShortDownArrow:"↓",ShortLeftArrow:"←",shortmid:"∣",shortparallel:"∥",ShortRightArrow:"→",ShortUpArrow:"↑",shy:"­",sigma:"σ",Sigma:"Σ",sigmaf:"ς",sigmav:"ς",sim:"∼",simdot:"⩪",sime:"≃",simeq:"≃",simg:"⪞",simgE:"⪠",siml:"⪝",simlE:"⪟",simne:"≆",simplus:"⨤",simrarr:"⥲",slarr:"←",SmallCircle:"∘",smallsetminus:"∖",smashp:"⨳",smeparsl:"⧤",smid:"∣",smile:"⌣",smt:"⪪",smte:"⪬",smtes:"⪬︀",softcy:"ь",SOFTcy:"Ь",sol:"/",solb:"⧄",solbar:"⌿",sopf:"𝕤",Sopf:"𝕊",spades:"♠",spadesuit:"♠",spar:"∥",sqcap:"⊓",sqcaps:"⊓︀",sqcup:"⊔",sqcups:"⊔︀",Sqrt:"√",sqsub:"⊏",sqsube:"⊑",sqsubset:"⊏",sqsubseteq:"⊑",sqsup:"⊐",sqsupe:"⊒",sqsupset:"⊐",sqsupseteq:"⊒",squ:"□",square:"□",Square:"□",SquareIntersection:"⊓",SquareSubset:"⊏",SquareSubsetEqual:"⊑",SquareSuperset:"⊐",SquareSupersetEqual:"⊒",SquareUnion:"⊔",squarf:"▪",squf:"▪",srarr:"→",sscr:"𝓈",Sscr:"𝒮",ssetmn:"∖",ssmile:"⌣",sstarf:"⋆",star:"☆",Star:"⋆",starf:"★",straightepsilon:"ϵ",straightphi:"ϕ",strns:"¯",sub:"⊂",Sub:"⋐",subdot:"⪽",sube:"⊆",subE:"⫅",subedot:"⫃",submult:"⫁",subne:"⊊",subnE:"⫋",subplus:"⪿",subrarr:"⥹",subset:"⊂",Subset:"⋐",subseteq:"⊆",subseteqq:"⫅",SubsetEqual:"⊆",subsetneq:"⊊",subsetneqq:"⫋",subsim:"⫇",subsub:"⫕",subsup:"⫓",succ:"≻",succapprox:"⪸",succcurlyeq:"≽",Succeeds:"≻",SucceedsEqual:"⪰",SucceedsSlantEqual:"≽",SucceedsTilde:"≿",succeq:"⪰",succnapprox:"⪺",succneqq:"⪶",succnsim:"⋩",succsim:"≿",SuchThat:"∋",sum:"∑",Sum:"∑",sung:"♪",sup:"⊃",Sup:"⋑",sup1:"¹",sup2:"²",sup3:"³",supdot:"⪾",supdsub:"⫘",supe:"⊇",supE:"⫆",supedot:"⫄",Superset:"⊃",SupersetEqual:"⊇",suphsol:"⟉",suphsub:"⫗",suplarr:"⥻",supmult:"⫂",supne:"⊋",supnE:"⫌",supplus:"⫀",supset:"⊃",Supset:"⋑",supseteq:"⊇",supseteqq:"⫆",supsetneq:"⊋",supsetneqq:"⫌",supsim:"⫈",supsub:"⫔",supsup:"⫖",swarhk:"⤦",swarr:"↙",swArr:"⇙",swarrow:"↙",swnwar:"⤪",szlig:"ß",Tab:"\t",target:"⌖",tau:"τ",Tau:"Τ",tbrk:"⎴",tcaron:"ť",Tcaron:"Ť",tcedil:"ţ",Tcedil:"Ţ",tcy:"т",Tcy:"Т",tdot:"⃛",telrec:"⌕",tfr:"𝔱",Tfr:"𝔗",there4:"∴",therefore:"∴",Therefore:"∴",theta:"θ",Theta:"Θ",thetasym:"ϑ",thetav:"ϑ",thickapprox:"≈",thicksim:"∼",ThickSpace:"  ",thinsp:" ",ThinSpace:" ",thkap:"≈",thksim:"∼",thorn:"þ",THORN:"Þ",tilde:"˜",Tilde:"∼",TildeEqual:"≃",TildeFullEqual:"≅",TildeTilde:"≈",times:"×",timesb:"⊠",timesbar:"⨱",timesd:"⨰",tint:"∭",toea:"⤨",top:"⊤",topbot:"⌶",topcir:"⫱",topf:"𝕥",Topf:"𝕋",topfork:"⫚",tosa:"⤩",tprime:"‴",trade:"™",TRADE:"™",triangle:"▵",triangledown:"▿",triangleleft:"◃",trianglelefteq:"⊴",triangleq:"≜",triangleright:"▹",trianglerighteq:"⊵",tridot:"◬",trie:"≜",triminus:"⨺",TripleDot:"⃛",triplus:"⨹",trisb:"⧍",tritime:"⨻",trpezium:"⏢",tscr:"𝓉",Tscr:"𝒯",tscy:"ц",TScy:"Ц",tshcy:"ћ",TSHcy:"Ћ",tstrok:"ŧ",Tstrok:"Ŧ",twixt:"≬",twoheadleftarrow:"↞",twoheadrightarrow:"↠",uacute:"ú",Uacute:"Ú",uarr:"↑",uArr:"⇑",Uarr:"↟",Uarrocir:"⥉",ubrcy:"ў",Ubrcy:"Ў",ubreve:"ŭ",Ubreve:"Ŭ",ucirc:"û",Ucirc:"Û",ucy:"у",Ucy:"У",udarr:"⇅",udblac:"ű",Udblac:"Ű",udhar:"⥮",ufisht:"⥾",ufr:"𝔲",Ufr:"𝔘",ugrave:"ù",Ugrave:"Ù",uHar:"⥣",uharl:"↿",uharr:"↾",uhblk:"▀",ulcorn:"⌜",ulcorner:"⌜",ulcrop:"⌏",ultri:"◸",umacr:"ū",Umacr:"Ū",uml:"¨",UnderBar:"_",UnderBrace:"⏟",UnderBracket:"⎵",UnderParenthesis:"⏝",Union:"⋃",UnionPlus:"⊎",uogon:"ų",Uogon:"Ų",uopf:"𝕦",Uopf:"𝕌",uparrow:"↑",Uparrow:"⇑",UpArrow:"↑",UpArrowBar:"⤒",UpArrowDownArrow:"⇅",updownarrow:"↕",Updownarrow:"⇕",UpDownArrow:"↕",UpEquilibrium:"⥮",upharpoonleft:"↿",upharpoonright:"↾",uplus:"⊎",UpperLeftArrow:"↖",UpperRightArrow:"↗",upsi:"υ",Upsi:"ϒ",upsih:"ϒ",upsilon:"υ",Upsilon:"Υ",UpTee:"⊥",UpTeeArrow:"↥",upuparrows:"⇈",urcorn:"⌝",urcorner:"⌝",urcrop:"⌎",uring:"ů",Uring:"Ů",urtri:"◹",uscr:"𝓊",Uscr:"𝒰",utdot:"⋰",utilde:"ũ",Utilde:"Ũ",utri:"▵",utrif:"▴",uuarr:"⇈",uuml:"ü",Uuml:"Ü",uwangle:"⦧",vangrt:"⦜",varepsilon:"ϵ",varkappa:"ϰ",varnothing:"∅",varphi:"ϕ",varpi:"ϖ",varpropto:"∝",varr:"↕",vArr:"⇕",varrho:"ϱ",varsigma:"ς",varsubsetneq:"⊊︀",varsubsetneqq:"⫋︀",varsupsetneq:"⊋︀",varsupsetneqq:"⫌︀",vartheta:"ϑ",vartriangleleft:"⊲",vartriangleright:"⊳",vBar:"⫨",Vbar:"⫫",vBarv:"⫩",vcy:"в",Vcy:"В",vdash:"⊢",vDash:"⊨",Vdash:"⊩",VDash:"⊫",Vdashl:"⫦",vee:"∨",Vee:"⋁",veebar:"⊻",veeeq:"≚",vellip:"⋮",verbar:"|",Verbar:"‖",vert:"|",Vert:"‖",VerticalBar:"∣",VerticalLine:"|",VerticalSeparator:"❘",VerticalTilde:"≀",VeryThinSpace:" ",vfr:"𝔳",Vfr:"𝔙",vltri:"⊲",vnsub:"⊂⃒",vnsup:"⊃⃒",vopf:"𝕧",Vopf:"𝕍",vprop:"∝",vrtri:"⊳",vscr:"𝓋",Vscr:"𝒱",vsubne:"⊊︀",vsubnE:"⫋︀",vsupne:"⊋︀",vsupnE:"⫌︀",Vvdash:"⊪",vzigzag:"⦚",wcirc:"ŵ",Wcirc:"Ŵ",wedbar:"⩟",wedge:"∧",Wedge:"⋀",wedgeq:"≙",weierp:"℘",wfr:"𝔴",Wfr:"𝔚",wopf:"𝕨",Wopf:"𝕎",wp:"℘",wr:"≀",wreath:"≀",wscr:"𝓌",Wscr:"𝒲",xcap:"⋂",xcirc:"◯",xcup:"⋃",xdtri:"▽",xfr:"𝔵",Xfr:"𝔛",xharr:"⟷",xhArr:"⟺",xi:"ξ",Xi:"Ξ",xlarr:"⟵",xlArr:"⟸",xmap:"⟼",xnis:"⋻",xodot:"⨀",xopf:"𝕩",Xopf:"𝕏",xoplus:"⨁",xotime:"⨂",xrarr:"⟶",xrArr:"⟹",xscr:"𝓍",Xscr:"𝒳",xsqcup:"⨆",xuplus:"⨄",xutri:"△",xvee:"⋁",xwedge:"⋀",yacute:"ý",Yacute:"Ý",yacy:"я",YAcy:"Я",ycirc:"ŷ",Ycirc:"Ŷ",ycy:"ы",Ycy:"Ы",yen:"¥",yfr:"𝔶",Yfr:"𝔜",yicy:"ї",YIcy:"Ї",yopf:"𝕪",Yopf:"𝕐",yscr:"𝓎",Yscr:"𝒴",yucy:"ю",YUcy:"Ю",yuml:"ÿ",Yuml:"Ÿ",zacute:"ź",Zacute:"Ź",zcaron:"ž",Zcaron:"Ž",zcy:"з",Zcy:"З",zdot:"ż",Zdot:"Ż",zeetrf:"ℨ",ZeroWidthSpace:"​",zeta:"ζ",Zeta:"Ζ",zfr:"𝔷",Zfr:"ℨ",zhcy:"ж",ZHcy:"Ж",zigrarr:"⇝",zopf:"𝕫",Zopf:"ℤ",zscr:"𝓏",Zscr:"𝒵",zwj:"‍",zwnj:"‌"},h={aacute:"á",Aacute:"Á",acirc:"â",Acirc:"Â",acute:"´",aelig:"æ",AElig:"Æ",agrave:"à",Agrave:"À",amp:"&",AMP:"&",aring:"å",Aring:"Å",atilde:"ã",Atilde:"Ã",auml:"ä",Auml:"Ä",brvbar:"¦",ccedil:"ç",Ccedil:"Ç",cedil:"¸",cent:"¢",copy:"©",COPY:"©",curren:"¤",deg:"°",divide:"÷",eacute:"é",Eacute:"É",ecirc:"ê",Ecirc:"Ê",egrave:"è",Egrave:"È",eth:"ð",ETH:"Ð",euml:"ë",Euml:"Ë",frac12:"½",frac14:"¼",frac34:"¾",gt:">",GT:">",iacute:"í",Iacute:"Í",icirc:"î",Icirc:"Î",iexcl:"¡",igrave:"ì",Igrave:"Ì",iquest:"¿",iuml:"ï",Iuml:"Ï",laquo:"«",lt:"<",LT:"<",macr:"¯",micro:"µ",middot:"·",nbsp:" ",not:"¬",ntilde:"ñ",Ntilde:"Ñ",oacute:"ó",Oacute:"Ó",ocirc:"ô",Ocirc:"Ô",ograve:"ò",Ograve:"Ò",ordf:"ª",ordm:"º",oslash:"ø",Oslash:"Ø",otilde:"õ",Otilde:"Õ",ouml:"ö",Ouml:"Ö",para:"¶",plusmn:"±",pound:"£",quot:'"',QUOT:'"',raquo:"»",reg:"®",REG:"®",sect:"§",shy:"­",sup1:"¹",sup2:"²",sup3:"³",szlig:"ß",thorn:"þ",THORN:"Þ",times:"×",uacute:"ú",Uacute:"Ú",ucirc:"û",Ucirc:"Û",ugrave:"ù",Ugrave:"Ù",uml:"¨",uuml:"ü",Uuml:"Ü",yacute:"ý",Yacute:"Ý",yen:"¥",yuml:"ÿ"},b={0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"},y=[1,2,3,4,5,6,7,8,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,64976,64977,64978,64979,64980,64981,64982,64983,64984,64985,64986,64987,64988,64989,64990,64991,64992,64993,64994,64995,64996,64997,64998,64999,65e3,65001,65002,65003,65004,65005,65006,65007,65534,65535,131070,131071,196606,196607,262142,262143,327678,327679,393214,393215,458750,458751,524286,524287,589822,589823,655358,655359,720894,720895,786430,786431,851966,851967,917502,917503,983038,983039,1048574,1048575,1114110,1114111],v=String.fromCharCode,w={}.hasOwnProperty,E=function(e,r){return w.call(e,r)},x=function(e,r){if(!e)return r;var t,a={};for(t in r)a[t]=E(e,t)?e[t]:r[t];return a},q=function(e,r){var t="";return e>=55296&&e<=57343||e>1114111?(r&&k("character reference outside the permissible Unicode range"),"�"):E(b,e)?(r&&k("disallowed character reference"),b[e]):(r&&function(e,r){for(var t=-1,a=e.length;++t<a;)if(e[t]==r)return!0;return!1}(y,e)&&k("disallowed character reference"),e>65535&&(t+=v((e-=65536)>>>10&1023|55296),e=56320|1023&e),t+=v(e))},D=function(e){return"&#x"+e.toString(16).toUpperCase()+";"},A=function(e){return"&#"+e+";"},k=function(e){throw Error("Parse error: "+e)},C=function(e,r){(r=x(r,C.options)).strict&&f.test(e)&&k("forbidden code point");var t=r.encodeEverything,a=r.useNamedReferences,n=r.allowUnsafeSymbols,d=r.decimal?A:D,p=function(e){return d(e.charCodeAt(0))};return t?(e=e.replace(i,(function(e){return a&&E(c,e)?"&"+c[e]+";":p(e)})),a&&(e=e.replace(/&gt;\u20D2/g,"&nvgt;").replace(/&lt;\u20D2/g,"&nvlt;").replace(/&#x66;&#x6A;/g,"&fjlig;")),a&&(e=e.replace(l,(function(e){return"&"+c[e]+";"})))):a?(n||(e=e.replace(u,(function(e){return"&"+c[e]+";"}))),e=(e=e.replace(/&gt;\u20D2/g,"&nvgt;").replace(/&lt;\u20D2/g,"&nvlt;")).replace(l,(function(e){return"&"+c[e]+";"}))):n||(e=e.replace(u,p)),e.replace(o,(function(e){var r=e.charCodeAt(0),t=e.charCodeAt(1);return d(1024*(r-55296)+t-56320+65536)})).replace(s,p)};C.options={allowUnsafeSymbols:!1,encodeEverything:!1,strict:!1,useNamedReferences:!1,decimal:!1};var S=function(e,r){var t=(r=x(r,S.options)).strict;return t&&p.test(e)&&k("malformed character reference"),e.replace(m,(function(e,a,n,o,i,s,l,c,u){var d,p,f,m,b,y;return a?g[b=a]:n?(b=n,(y=o)&&r.isAttributeValue?(t&&"="==y&&k("`&` did not start a character reference"),e):(t&&k("named character reference was not terminated by a semicolon"),h[b]+(y||""))):i?(f=i,p=s,t&&!p&&k("character reference was not terminated by a semicolon"),d=parseInt(f,10),q(d,t)):l?(m=l,p=c,t&&!p&&k("character reference was not terminated by a semicolon"),d=parseInt(m,16),q(d,t)):(t&&k("named character reference was not terminated by a semicolon"),e)}))};S.options={isAttributeValue:!1,strict:!1};var N={version:"1.2.0",encode:C,decode:S,escape:function(e){return e.replace(u,(function(e){return d[e]}))},unescape:S};void 0===(a=function(){return N}.call(r,t,r,e))||(e.exports=a)}()},4146:(e,r,t)=>{"use strict";var a=t(4363),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function l(e){return a.isMemo(e)?i:s[e.$$typeof]||n}s[a.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[a.Memo]=i;var c=Object.defineProperty,u=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(r,t,a){if("string"!=typeof t){if(m){var n=f(t);n&&n!==m&&e(r,n,a)}var i=u(t);d&&(i=i.concat(d(t)));for(var s=l(r),g=l(t),h=0;h<i.length;++h){var b=i[h];if(!(o[b]||a&&a[b]||g&&g[b]||s&&s[b])){var y=p(t,b);try{c(r,b,y)}catch(e){}}}}return r}},5228:e=>{"use strict";var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(e){a[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(e){return!1}}()?Object.assign:function(e,n){for(var o,i,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var c in o=Object(arguments[l]))t.call(o,c)&&(s[c]=o[c]);if(r){i=r(o);for(var u=0;u<i.length;u++)a.call(o,i[u])&&(s[i[u]]=o[i[u]])}}return s}},2694:(e,r,t)=>{"use strict";var a=t(6925);function n(){}function o(){}o.resetWarningCache=n,e.exports=function(){function e(e,r,t,n,o,i){if(i!==a){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function r(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:o,resetWarningCache:n};return t.PropTypes=t,t}},5556:(e,r,t)=>{e.exports=t(2694)()},6925:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},9998:(e,r)=>{"use strict";var t=Symbol.for("react.element"),a=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),f=Symbol.for("react.memo"),m=Symbol.for("react.lazy");Symbol.for("react.offscreen");Symbol.for("react.module.reference"),r.isFragment=function(e){return function(e){if("object"==typeof e&&null!==e){var r=e.$$typeof;switch(r){case t:switch(e=e.type){case n:case i:case o:case d:case p:return e;default:switch(e=e&&e.$$typeof){case c:case l:case u:case m:case f:case s:return e;default:return r}}case a:return r}}}(e)===n}},8338:(e,r,t)=>{"use strict";e.exports=t(9998)},2799:(e,r)=>{"use strict";var t="function"==typeof Symbol&&Symbol.for,a=t?Symbol.for("react.element"):60103,n=t?Symbol.for("react.portal"):60106,o=t?Symbol.for("react.fragment"):60107,i=t?Symbol.for("react.strict_mode"):60108,s=t?Symbol.for("react.profiler"):60114,l=t?Symbol.for("react.provider"):60109,c=t?Symbol.for("react.context"):60110,u=t?Symbol.for("react.async_mode"):60111,d=t?Symbol.for("react.concurrent_mode"):60111,p=t?Symbol.for("react.forward_ref"):60112,f=t?Symbol.for("react.suspense"):60113,m=t?Symbol.for("react.suspense_list"):60120,g=t?Symbol.for("react.memo"):60115,h=t?Symbol.for("react.lazy"):60116,b=t?Symbol.for("react.block"):60121,y=t?Symbol.for("react.fundamental"):60117,v=t?Symbol.for("react.responder"):60118,w=t?Symbol.for("react.scope"):60119;function E(e){if("object"==typeof e&&null!==e){var r=e.$$typeof;switch(r){case a:switch(e=e.type){case u:case d:case o:case s:case i:case f:return e;default:switch(e=e&&e.$$typeof){case c:case p:case h:case g:case l:return e;default:return r}}case n:return r}}}function x(e){return E(e)===d}r.AsyncMode=u,r.ConcurrentMode=d,r.ContextConsumer=c,r.ContextProvider=l,r.Element=a,r.ForwardRef=p,r.Fragment=o,r.Lazy=h,r.Memo=g,r.Portal=n,r.Profiler=s,r.StrictMode=i,r.Suspense=f,r.isAsyncMode=function(e){return x(e)||E(e)===u},r.isConcurrentMode=x,r.isContextConsumer=function(e){return E(e)===c},r.isContextProvider=function(e){return E(e)===l},r.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===a},r.isForwardRef=function(e){return E(e)===p},r.isFragment=function(e){return E(e)===o},r.isLazy=function(e){return E(e)===h},r.isMemo=function(e){return E(e)===g},r.isPortal=function(e){return E(e)===n},r.isProfiler=function(e){return E(e)===s},r.isStrictMode=function(e){return E(e)===i},r.isSuspense=function(e){return E(e)===f},r.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===d||e===s||e===i||e===f||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===g||e.$$typeof===l||e.$$typeof===c||e.$$typeof===p||e.$$typeof===y||e.$$typeof===v||e.$$typeof===w||e.$$typeof===b)},r.typeOf=E},4363:(e,r,t)=>{"use strict";e.exports=t(2799)},2309:(e,r,t)=>{"use strict";function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}r.A=f;var n,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var r=l();if(r&&r.has(e))return r.get(e);var t={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=n?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(t,o,i):t[o]=e[o]}return t.default=e,r&&r.set(e,t),t}(t(1594)),i=(n=t(5556))&&n.__esModule?n:{default:n},s=t(1329);function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function d(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,a=new Array(r);t<r;t++)a[t]=e[t];return a}var p=["Audio","BallTriangle","Bars","Circles","Grid","Hearts","Oval","Puff","Rings","TailSpin","ThreeDots","Watch","RevolvingDot","Triangle","Plane","MutatingDots","CradleLoader"];function f(e){var r,t,a,n=(t=(0,o.useState)(!0),a=2,function(e){if(Array.isArray(e))return e}(t)||function(e,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],a=!0,n=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(a=(i=s.next()).done)&&(t.push(i.value),!r||t.length!==r);a=!0);}catch(e){n=!0,o=e}finally{try{a||null==s.return||s.return()}finally{if(n)throw o}}return t}}(t,a)||function(e,r){if(e){if("string"==typeof e)return d(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?d(e,r):void 0}}(t,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=n[0],l=n[1];return(0,o.useEffect)((function(){var r;return e.timeout&&e.timeout>0&&(r=setTimeout((function(){l(!1)}),e.timeout)),function(){r&&clearTimeout(r)}})),e.visible&&"false"!==e.visible&&i?o.default.createElement("div",{"aria-busy":"true",className:e.className,style:e.style},o.default.createElement((r=e.type,p.includes(r)?s.Spinner[r]:s.Spinner.Audio),function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){u(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},e))):null}f.propTypes={type:i.default.oneOf([].concat(p)),style:i.default.objectOf(i.default.string),className:i.default.string,visible:i.default.oneOfType([i.default.bool,i.default.string]),timeout:i.default.number},f.defaultProps={type:"Audio",style:{},className:"",visible:!0,timeout:0}},7091:(e,r,t)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.Audio=void 0;var a=o(t(1594)),n=o(t(5556));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(e){return a.default.createElement("svg",{height:e.height,width:e.width,fill:e.color,viewBox:"0 0 55 80",xmlns:"http://www.w3.org/2000/svg","aria-label":e.label},a.default.createElement("g",{transform:"matrix(1 0 0 -1 0 80)"},a.default.createElement("rect",{width:"10",height:"20",rx:"3"},a.default.createElement("animate",{attributeName:"height",begin:"0s",dur:"4.3s",values:"20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20",calcMode:"linear",repeatCount:"indefinite"})),a.default.createElement("rect",{x:"15",width:"10",height:"80",rx:"3"},a.default.createElement("animate",{attributeName:"height",begin:"0s",dur:"2s",values:"80;55;33;5;75;23;73;33;12;14;60;80",calcMode:"linear",repeatCount:"indefinite"})),a.default.createElement("rect",{x:"30",width:"10",height:"50",rx:"3"},a.default.createElement("animate",{attributeName:"height",begin:"0s",dur:"1.4s",values:"50;34;78;23;56;23;34;76;80;54;21;50",calcMode:"linear",repeatCount:"indefinite"})),a.default.createElement("rect",{x:"45",width:"10",height:"30",rx:"3"},a.default.createElement("animate",{attributeName:"height",begin:"0s",dur:"2s",values:"30;45;13;80;56;72;45;76;34;23;67;30",calcMode:"linear",repeatCount:"indefinite"}))))};r.Audio=i,i.propTypes={height:n.default.oneOfType([n.default.string,n.default.number]),width:n.default.oneOfType([n.default.string,n.default.number]),color:n.default.string,label:n.default.string},i.defaultProps={height:80,width:80,color:"green",label:"audio-loading"}},596:(e,r,t)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.BallTriangle=void 0;var a=o(t(1594)),n=o(t(5556));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(e){return a.default.createElement("svg",{height:e.height,width:e.width,stroke:e.color,viewBox:"0 0 57 57",xmlns:"http://www.w3.org/2000/svg","aria-label":e.label},a.default.createElement("g",{fill:"none",fillRule:"evenodd"},a.default.createElement("g",{transform:"translate(1 1)",strokeWidth:"2"},a.default.createElement("circle",{cx:"5",cy:"50",r:e.radius},a.default.createElement("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;5;50;50",calcMode:"linear",repeatCount:"indefinite"}),a.default.createElement("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",values:"5;27;49;5",calcMode:"linear",repeatCount:"indefinite"})),a.default.createElement("circle",{cx:"27",cy:"5",r:e.radius},a.default.createElement("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",from:"5",to:"5",values:"5;50;50;5",calcMode:"linear",repeatCount:"indefinite"}),a.default.createElement("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",from:"27",to:"27",values:"27;49;5;27",calcMode:"linear",repeatCount:"indefinite"})),a.default.createElement("circle",{cx:"49",cy:"50",r:e.radius},a.default.createElement("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;50;5;50",calcMode:"linear",repeatCount:"indefinite"}),a.default.createElement("animate",{attributeName:"cx",from:"49",to:"49",begin:"0s",dur:"2.2s",values:"49;5;27;49",calcMode:"linear",repeatCount:"indefinite"})))))};r.BallTriangle=i,i.propTypes={height:n.default.oneOfType([n.default.string,n.default.number]),width:n.default.oneOfType([n.default.string,n.default.number]),color:n.default.string,label:n.default.string,radius:n.default.number},i.defaultProps={height:80,width:80,color:"green",radius:5,label:"audio-loading"}},287:(e,r,t)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.Bars=void 0;var a=o(t(1594)),n=o(t(5556));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(e){return a.default.createElement("svg",{width:e.width,height:e.height,fill:e.color,viewBox:"0 0 135 140",xmlns:"http://www.w3.org/2000/svg","aria-label":e.label},a.default.createElement("rect",{y:"10",width:"15",height:"120",rx:"6"},a.default.createElement("animate",{attributeName:"height",begin:"0.5s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),a.default.createElement("animate",{attributeName:"y",begin:"0.5s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})),a.default.createElement("rect",{x:"30",y:"10",width:"15",height:"120",rx:"6"},a.default.createElement("animate",{attributeName:"height",begin:"0.25s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),a.default.createElement("animate",{attributeName:"y",begin:"0.25s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})),a.default.createElement("rect",{x:"60",width:"15",height:"140",rx:"6"},a.default.createElement("animate",{attributeName:"height",begin:"0s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),a.default.createElement("animate",{attributeName:"y",begin:"0s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})),a.default.createElement("rect",{x:"90",y:"10",width:"15",height:"120",rx:"6"},a.default.createElement("animate",{attributeName:"height",begin:"0.25s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),a.default.createElement("animate",{attributeName:"y",begin:"0.25s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})),a.default.createElement("rect",{x:"120",y:"10",width:"15",height:"120",rx:"6"},a.default.createElement("animate",{attributeName:"height",begin:"0.5s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),a.default.createElement("animate",{attributeName:"y",begin:"0.5s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})))};r.Bars=i,i.propTypes={height:n.default.oneOfType([n.default.string,n.default.number]),width:n.default.oneOfType([n.default.string,n.default.number]),color:n.default.string,label:n.default.string},i.defaultProps={height:80,width:80,color:"green",label:"audio-loading"}},6872:(e,r,t)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.Circles=void 0;var a=o(t(1594)),n=o(t(5556));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(e){return a.default.createElement("svg",{width:e.width,height:e.height,viewBox:"0 0 135 135",xmlns:"http://www.w3.org/2000/svg",fill:e.color,"aria-label":e.label},a.default.createElement("path",{d:"M67.447 58c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm9.448 9.447c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10s-4.478-10-10-10c-5.523 0-10 4.477-10 10zm-9.448 9.448c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zM58 67.447c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10z"},a.default.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 67 67",to:"-360 67 67",dur:"2.5s",repeatCount:"indefinite"})),a.default.createElement("path",{d:"M28.19 40.31c6.627 0 12-5.374 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.626 5.372 12 12 12zm30.72-19.825c4.686 4.687 12.284 4.687 16.97 0 4.686-4.686 4.686-12.284 0-16.97-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97zm35.74 7.705c0 6.627 5.37 12 12 12 6.626 0 12-5.373 12-12 0-6.628-5.374-12-12-12-6.63 0-12 5.372-12 12zm19.822 30.72c-4.686 4.686-4.686 12.284 0 16.97 4.687 4.686 12.285 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.97-4.685-4.687-12.283-4.687-16.97 0zm-7.704 35.74c-6.627 0-12 5.37-12 12 0 6.626 5.373 12 12 12s12-5.374 12-12c0-6.63-5.373-12-12-12zm-30.72 19.822c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.687-4.686 12.285 0 16.97 4.686 4.687 12.284 4.687 16.97 0 4.687-4.685 4.687-12.283 0-16.97zm-35.74-7.704c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12s5.374 12 12 12c6.628 0 12-5.373 12-12zm-19.823-30.72c4.687-4.686 4.687-12.284 0-16.97-4.686-4.686-12.284-4.686-16.97 0-4.687 4.686-4.687 12.284 0 16.97 4.686 4.687 12.284 4.687 16.97 0z"},a.default.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 67 67",to:"360 67 67",dur:"8s",repeatCount:"indefinite"})))};r.Circles=i,i.propTypes={height:n.default.oneOfType([n.default.string,n.default.number]),width:n.default.oneOfType([n.default.string,n.default.number]),color:n.default.string,label:n.default.string},i.defaultProps={height:80,width:80,color:"green",label:"audio-loading"}},481:(e,r,t)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.CradleLoader=void 0;var a=o(t(1594)),n=o(t(5556));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(e){return a.default.createElement("div",{"aria-label":e.label,role:"presentation",className:"container"},a.default.createElement("div",{className:"react-spinner-loader-swing"},a.default.createElement("div",{className:"react-spinner-loader-swing-l"}),a.default.createElement("div",null),a.default.createElement("div",null),a.default.createElement("div",null),a.default.createElement("div",null),a.default.createElement("div",null),a.default.createElement("div",{className:"react-spinner-loader-swing-r"})),a.default.createElement("div",{className:"react-spinner-loader-shadow"},a.default.createElement("div",{className:"react-spinner-loader-shadow-l"}),a.default.createElement("div",null),a.default.createElement("div",null),a.default.createElement("div",null),a.default.createElement("div",null),a.default.createElement("div",null),a.default.createElement("div",{className:"react-spinner-loader-shadow-r"})))};r.CradleLoader=i,i.propTypes={label:n.default.string},i.defaultProps={label:"audio-loading"}},1549:(e,r,t)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.Grid=void 0;var a=o(t(1594)),n=o(t(5556));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(e){return a.default.createElement("svg",{width:e.width,height:e.height,viewBox:"0 0 105 105",fill:e.color,"aria-label":e.label},a.default.createElement("circle",{cx:"12.5",cy:"12.5",r:e.radius},a.default.createElement("animate",{attributeName:"fill-opacity",begin:"0s",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})),a.default.createElement("circle",{cx:"12.5",cy:"52.5",r:e.radius},a.default.createElement("animate",{attributeName:"fill-opacity",begin:"100ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})),a.default.createElement("circle",{cx:"52.5",cy:"12.5",r:e.radius},a.default.createElement("animate",{attributeName:"fill-opacity",begin:"300ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})),a.default.createElement("circle",{cx:"52.5",cy:"52.5",r:e.radius},a.default.createElement("animate",{attributeName:"fill-opacity",begin:"600ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})),a.default.createElement("circle",{cx:"92.5",cy:"12.5",r:e.radius},a.default.createElement("animate",{attributeName:"fill-opacity",begin:"800ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})),a.default.createElement("circle",{cx:"92.5",cy:"52.5",r:e.radius},a.default.createElement("animate",{attributeName:"fill-opacity",begin:"400ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})),a.default.createElement("circle",{cx:"12.5",cy:"92.5",r:e.radius},a.default.createElement("animate",{attributeName:"fill-opacity",begin:"700ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})),a.default.createElement("circle",{cx:"52.5",cy:"92.5",r:e.radius},a.default.createElement("animate",{attributeName:"fill-opacity",begin:"500ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})),a.default.createElement("circle",{cx:"92.5",cy:"92.5",r:e.radius},a.default.createElement("animate",{attributeName:"fill-opacity",begin:"200ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})))};r.Grid=i,i.propTypes={height:n.default.oneOfType([n.default.string,n.default.number]),width:n.default.oneOfType([n.default.string,n.default.number]),color:n.default.string,label:n.default.string,radius:n.default.number},i.defaultProps={height:80,width:80,color:"green",radius:12.5,label:"audio-loading"}},3964:(e,r,t)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.Hearts=void 0;var a=o(t(1594)),n=o(t(5556));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(e){return a.default.createElement("svg",{width:e.width,height:e.height,viewBox:"0 0 140 64",xmlns:"http://www.w3.org/2000/svg",fill:e.color,"aria-label":e.label},a.default.createElement("path",{d:"M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.717-6.002 11.47-7.65 17.305-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z",attributeName:"fill-opacity",from:"0",to:".5"},a.default.createElement("animate",{attributeName:"fill-opacity",begin:"0s",dur:"1.4s",values:"0.5;1;0.5",calcMode:"linear",repeatCount:"indefinite"})),a.default.createElement("path",{d:"M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.592-2.32 17.307 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z",attributeName:"fill-opacity",from:"0",to:".5"},a.default.createElement("animate",{attributeName:"fill-opacity",begin:"0.7s",dur:"1.4s",values:"0.5;1;0.5",calcMode:"linear",repeatCount:"indefinite"})),a.default.createElement("path",{d:"M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z"}))};r.Hearts=i,i.propTypes={height:n.default.oneOfType([n.default.string,n.default.number]),width:n.default.oneOfType([n.default.string,n.default.number]),color:n.default.string,label:n.default.string},i.defaultProps={height:80,width:80,color:"green",label:"audio-loading"}},440:(e,r,t)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.MutatingDots=void 0;var a=o(t(1594)),n=o(t(5556));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(e){return a.default.createElement("svg",{id:"goo-loader",width:e.width,height:e.height,"aria-label":e.label},a.default.createElement("filter",{id:"fancy-goo"},a.default.createElement("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"6",result:"blur"}),a.default.createElement("feColorMatrix",{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9",result:"goo"}),a.default.createElement("feComposite",{in:"SourceGraphic",in2:"goo",operator:"atop"})),a.default.createElement("g",{filter:"url(#fancy-goo)"},a.default.createElement("animateTransform",{id:"mainAnim",attributeName:"transform",attributeType:"XML",type:"rotate",from:"0 50 50",to:"359 50 50",dur:"1.2s",repeatCount:"indefinite"}),a.default.createElement("circle",{cx:"50%",cy:"40",r:e.radius,fill:e.color},a.default.createElement("animate",{id:"cAnim1",attributeType:"XML",attributeName:"cy",dur:"0.6s",begin:"0;cAnim1.end+0.2s",calcMode:"spline",values:"40;20;40",keyTimes:"0;0.3;1",keySplines:"0.09, 0.45, 0.16, 1;0.09, 0.45, 0.16, 1"})),a.default.createElement("circle",{cx:"50%",cy:"60",r:e.radius,fill:e.secondaryColor},a.default.createElement("animate",{id:"cAnim2",attributeType:"XML",attributeName:"cy",dur:"0.6s",begin:"0.4s;cAnim2.end+0.2s",calcMode:"spline",values:"60;80;60",keyTimes:"0;0.3;1",keySplines:"0.09, 0.45, 0.16, 1;0.09, 0.45, 0.16, 1"}))))};r.MutatingDots=i,i.propTypes={width:n.default.number,secondaryColor:n.default.string,height:n.default.number,color:n.default.string,radius:n.default.number,label:n.default.string},i.defaultProps={width:80,height:90,color:"green",radius:11,secondaryColor:"green",label:"audio-loading"}},7457:(e,r,t)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.Oval=void 0;var a=o(t(1594)),n=o(t(5556));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(e){return a.default.createElement("svg",{width:e.width,height:e.height,viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",stroke:e.color,"aria-label":e.label},a.default.createElement("g",{fill:"none",fillRule:"evenodd"},a.default.createElement("g",{transform:"translate(1 1)",strokeWidth:"2"},a.default.createElement("circle",{strokeOpacity:".5",cx:"18",cy:"18",r:e.radius}),a.default.createElement("path",{d:"M36 18c0-9.94-8.06-18-18-18"},a.default.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"})))))};r.Oval=i,i.propTypes={height:n.default.oneOfType([n.default.string,n.default.number]),width:n.default.oneOfType([n.default.string,n.default.number]),color:n.default.string,label:n.default.string,radius:n.default.number},i.defaultProps={height:80,width:80,color:"green",label:"audio-loading",radius:18}},3115:(e,r,t)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.Plane=void 0;var a=o(t(1594)),n=o(t(5556));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(e){return a.default.createElement("svg",{className:"react-spinner-loader-svg-calLoader",xmlns:"http://www.w3.org/2000/svg",width:"230",height:"230","aria-label":e.label},a.default.createElement("desc",null,"Plane animation. Loading "),a.default.createElement("path",{className:"react-spinner-loader-cal-loader__path",style:{stroke:e.secondaryColor},d:"M86.429 40c63.616-20.04 101.511 25.08 107.265 61.93 6.487 41.54-18.593 76.99-50.6 87.643-59.46 19.791-101.262-23.577-107.142-62.616C29.398 83.441 59.945 48.343 86.43 40z",fill:"none",stroke:"#0099cc",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:"10 10 10 10 10 10 10 432",strokeDashoffset:"77"}),a.default.createElement("path",{className:"cal-loader__plane",style:{fill:e.color},d:"M141.493 37.93c-1.087-.927-2.942-2.002-4.32-2.501-2.259-.824-3.252-.955-9.293-1.172-4.017-.146-5.197-.23-5.47-.37-.766-.407-1.526-1.448-7.114-9.773-4.8-7.145-5.344-7.914-6.327-8.976-1.214-1.306-1.396-1.378-3.79-1.473-1.036-.04-2-.043-2.153-.002-.353.1-.87.586-1 .952-.139.399-.076.71.431 2.22.241.72 1.029 3.386 1.742 5.918 1.644 5.844 2.378 8.343 2.863 9.705.206.601.33 1.1.275 1.125-.24.097-10.56 1.066-11.014 1.032a3.532 3.532 0 0 1-1.002-.276l-.487-.246-2.044-2.613c-2.234-2.87-2.228-2.864-3.35-3.309-.717-.287-2.82-.386-3.276-.163-.457.237-.727.644-.737 1.152-.018.39.167.805 1.916 4.373 1.06 2.166 1.964 4.083 1.998 4.27.04.179.004.521-.076.75-.093.228-1.109 2.064-2.269 4.088-1.921 3.34-2.11 3.711-2.123 4.107-.008.25.061.557.168.725.328.512.72.644 1.966.676 1.32.029 2.352-.236 3.05-.762.222-.171 1.275-1.313 2.412-2.611 1.918-2.185 2.048-2.32 2.45-2.505.241-.111.601-.232.82-.271.267-.058 2.213.201 5.912.8 3.036.48 5.525.894 5.518.914 0 .026-.121.306-.27.638-.54 1.198-1.515 3.842-3.35 9.021-1.029 2.913-2.107 5.897-2.4 6.62-.703 1.748-.725 1.833-.594 2.286.137.46.45.833.872 1.012.41.177 3.823.24 4.37.085.852-.25 1.44-.688 2.312-1.724 1.166-1.39 3.169-3.948 6.771-8.661 5.8-7.583 6.561-8.49 7.387-8.702.233-.065 2.828-.056 5.784.011 5.827.138 6.64.09 8.62-.5 2.24-.67 4.035-1.65 5.517-3.016 1.136-1.054 1.135-1.014.207-1.962-.357-.38-.767-.777-.902-.893z",fill:"#000033"}))};r.Plane=i,i.propTypes={secondaryColor:n.default.string,color:n.default.string,label:n.default.string},i.defaultProps={secondaryColor:"grey",color:"#FFA500",label:"async-loading"}},466:(e,r,t)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.Puff=void 0;var a=o(t(1594)),n=o(t(5556));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(e){return a.default.createElement("svg",{width:e.width,height:e.height,viewBox:"0 0 44 44",xmlns:"http://www.w3.org/2000/svg",stroke:e.color,"aria-label":e.label},a.default.createElement("g",{fill:"none",fillRule:"evenodd",strokeWidth:"2"},a.default.createElement("circle",{cx:"22",cy:"22",r:e.radius},a.default.createElement("animate",{attributeName:"r",begin:"0s",dur:"1.8s",values:"1; 20",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.165, 0.84, 0.44, 1",repeatCount:"indefinite"}),a.default.createElement("animate",{attributeName:"strokeOpacity",begin:"0s",dur:"1.8s",values:"1; 0",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.3, 0.61, 0.355, 1",repeatCount:"indefinite"})),a.default.createElement("circle",{cx:"22",cy:"22",r:e.radius},a.default.createElement("animate",{attributeName:"r",begin:"-0.9s",dur:"1.8s",values:"1; 20",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.165, 0.84, 0.44, 1",repeatCount:"indefinite"}),a.default.createElement("animate",{attributeName:"strokeOpacity",begin:"-0.9s",dur:"1.8s",values:"1; 0",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.3, 0.61, 0.355, 1",repeatCount:"indefinite"}))))};r.Puff=i,i.propTypes={height:n.default.oneOfType([n.default.string,n.default.number]),width:n.default.oneOfType([n.default.string,n.default.number]),color:n.default.string,label:n.default.string,radius:n.default.number},i.defaultProps={height:80,width:80,color:"green",label:"audio-loading",radius:1}},6582:(e,r,t)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.RevolvingDot=void 0;var a=o(t(1594)),n=o(t(5556));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(e){return a.default.createElement("svg",{version:"1.1",width:e.width,height:e.height,xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px","aria-label":e.label},a.default.createElement("circle",{fill:"none",stroke:e.color,strokeWidth:"4",cx:"50",cy:"50",r:e.radius+38,style:{opacity:.5}}),a.default.createElement("circle",{fill:e.color,stroke:e.color,strokeWidth:"3",cx:"8",cy:"54",r:e.radius},a.default.createElement("animateTransform",{attributeName:"transform",dur:"2s",type:"rotate",from:"0 50 48",to:"360 50 52",repeatCount:"indefinite"})))};r.RevolvingDot=i,i.propTypes={height:n.default.oneOfType([n.default.string,n.default.number]),width:n.default.oneOfType([n.default.string,n.default.number]),color:n.default.string,label:n.default.string,radius:n.default.number},i.defaultProps={height:80,width:80,color:"green",label:"audio-loading",radius:6}},8418:(e,r,t)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.Rings=void 0;var a=o(t(1594)),n=o(t(5556));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(e){return a.default.createElement("svg",{width:e.width,height:e.height,viewBox:"0 0 45 45",xmlns:"http://www.w3.org/2000/svg",stroke:e.color,"aria-label":e.label},a.default.createElement("g",{fill:"none",fillRule:"evenodd",transform:"translate(1 1)",strokeWidth:"2"},a.default.createElement("circle",{cx:"22",cy:"22",r:e.radius,strokeOpacity:"0"},a.default.createElement("animate",{attributeName:"r",begin:"1.5s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),a.default.createElement("animate",{attributeName:"stroke-opacity",begin:"1.5s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),a.default.createElement("animate",{attributeName:"stroke-width",begin:"1.5s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})),a.default.createElement("circle",{cx:"22",cy:"22",r:e.radius,strokeOpacity:"0"},a.default.createElement("animate",{attributeName:"r",begin:"3s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),a.default.createElement("animate",{attributeName:"strokeOpacity",begin:"3s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),a.default.createElement("animate",{attributeName:"strokeWidth",begin:"3s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})),a.default.createElement("circle",{cx:"22",cy:"22",r:e.radius+2},a.default.createElement("animate",{attributeName:"r",begin:"0s",dur:"1.5s",values:"6;1;2;3;4;5;6",calcMode:"linear",repeatCount:"indefinite"}))))};r.Rings=i,i.propTypes={height:n.default.oneOfType([n.default.string,n.default.number]),width:n.default.oneOfType([n.default.string,n.default.number]),color:n.default.string,label:n.default.string,radius:n.default.number},i.defaultProps={height:80,width:80,color:"green",radius:6,label:"audio-loading"}},5731:(e,r,t)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.TailSpin=void 0;var a=o(t(1594)),n=o(t(5556));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(e){return a.default.createElement("svg",{width:e.width,height:e.height,viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg","aria-label":e.label},a.default.createElement("defs",null,a.default.createElement("linearGradient",{x1:"8.042%",y1:"0%",x2:"65.682%",y2:"23.865%",id:"a"},a.default.createElement("stop",{stopColor:e.color,stopOpacity:"0",offset:"0%"}),a.default.createElement("stop",{stopColor:e.color,stopOpacity:".631",offset:"63.146%"}),a.default.createElement("stop",{stopColor:e.color,offset:"100%"}))),a.default.createElement("g",{fill:"none",fillRule:"evenodd"},a.default.createElement("g",{transform:"translate(1 1)"},a.default.createElement("path",{d:"M36 18c0-9.94-8.06-18-18-18",id:"Oval-2",stroke:e.color,strokeWidth:"2"},a.default.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})),a.default.createElement("circle",{fill:"#fff",cx:"36",cy:"18",r:e.radius},a.default.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})))))};r.TailSpin=i,i.propTypes={height:n.default.oneOfType([n.default.string,n.default.number]),width:n.default.oneOfType([n.default.string,n.default.number]),color:n.default.string,label:n.default.string,radius:n.default.number},i.defaultProps={height:80,width:80,color:"green",radius:1,label:"audio-loading"}},129:(e,r,t)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.ThreeDots=void 0;var a=o(t(1594)),n=o(t(5556));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(e){return a.default.createElement("svg",{width:e.width,height:e.height,viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:e.color,"aria-label":e.label},a.default.createElement("circle",{cx:"15",cy:"15",r:e.radius+6},a.default.createElement("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),a.default.createElement("animate",{attributeName:"fillOpacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})),a.default.createElement("circle",{cx:"60",cy:"15",r:e.radius,attributeName:"fillOpacity",from:"1",to:"0.3"},a.default.createElement("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),a.default.createElement("animate",{attributeName:"fillOpacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})),a.default.createElement("circle",{cx:"105",cy:"15",r:e.radius+6},a.default.createElement("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),a.default.createElement("animate",{attributeName:"fillOpacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})))};r.ThreeDots=i,i.propTypes={height:n.default.oneOfType([n.default.string,n.default.number]),width:n.default.oneOfType([n.default.string,n.default.number]),color:n.default.string,label:n.default.string,radius:n.default.number},i.defaultProps={height:80,width:80,color:"green",label:"audio-loading",radius:9}},517:(e,r,t)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.Triangle=void 0;var a=o(t(1594)),n=o(t(5556));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(e){return a.default.createElement("div",{className:"react-spinner-loader-svg"},a.default.createElement("svg",{id:"triangle",width:e.width,height:e.height,viewBox:"-3 -4 39 39","aria-label":e.label},a.default.createElement("polygon",{fill:"transparent",stroke:e.color,strokeWidth:"1",points:"16,0 32,32 0,32"})))};r.Triangle=i,i.propTypes={height:n.default.oneOfType([n.default.string,n.default.number]),width:n.default.oneOfType([n.default.string,n.default.number]),color:n.default.string,label:n.default.string},i.defaultProps={height:80,width:80,color:"green",label:"audio-loading"}},1082:(e,r,t)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.Watch=void 0;var a=o(t(1594)),n=o(t(5556));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(e){return a.default.createElement("svg",{width:e.width,height:e.height,version:"1.1",id:"L2",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 100 100",enableBackground:"new 0 0 100 100",xmlSpace:"preserve","aria-label":e.label},a.default.createElement("circle",{fill:"none",stroke:e.color,strokeWidth:"4",strokeMiterlimit:"10",cx:"50",cy:"50",r:e.radius}),a.default.createElement("line",{fill:"none",strokeLinecap:"round",stroke:e.color,strokeWidth:"4",strokeMiterlimit:"10",x1:"50",y1:"50",x2:"85",y2:"50.5"},a.default.createElement("animateTransform",{attributeName:"transform",dur:"2s",type:"rotate",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"})),a.default.createElement("line",{fill:"none",strokeLinecap:"round",stroke:e.color,strokeWidth:"4",strokeMiterlimit:"10",x1:"50",y1:"50",x2:"49.5",y2:"74"},a.default.createElement("animateTransform",{attributeName:"transform",dur:"15s",type:"rotate",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"})))};r.Watch=i,i.propTypes={height:n.default.oneOfType([n.default.string,n.default.number]),width:n.default.oneOfType([n.default.string,n.default.number]),color:n.default.string,label:n.default.string,radius:n.default.number},i.defaultProps={height:80,width:80,color:"green",label:"audio-loading",radius:48}},1329:(e,r,t)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.Spinner=void 0;var a=t(6872),n=t(1082),o=t(7091),i=t(596),s=t(287),l=t(481),c=t(1549),u=t(3964),d=t(440),p=t(7457),f=t(3115),m=t(466),g=t(6582),h=t(8418),b=t(5731),y=t(129),v=t(517),w={Circles:a.Circles,Audio:o.Audio,BallTriangle:i.BallTriangle,Bars:s.Bars,CradleLoader:l.CradleLoader,Grid:c.Grid,Hearts:u.Hearts,MutatingDots:d.MutatingDots,Oval:p.Oval,Plane:f.Plane,Puff:m.Puff,RevolvingDot:g.RevolvingDot,Rings:h.Rings,TailSpin:b.TailSpin,ThreeDots:y.ThreeDots,Triangle:v.Triangle,Watch:n.Watch};r.Spinner=w},1020:(e,r,t)=>{"use strict";t(5228);var a=t(1594),n=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;n=o("react.element"),r.Fragment=o("react.fragment")}var i=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};r.jsx=function(e,r,t){var a,o={},c=null,u=null;for(a in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(u=r.ref),r)s.call(r,a)&&!l.hasOwnProperty(a)&&(o[a]=r[a]);if(e&&e.defaultProps)for(a in r=e.defaultProps)void 0===o[a]&&(o[a]=r[a]);return{$$typeof:n,type:e,key:c,ref:u,props:o,_owner:i.current}}},4848:(e,r,t)=>{"use strict";e.exports=t(1020)},5072:(e,r,t)=>{"use strict";var a,n=function(){var e={};return function(r){if(void 0===e[r]){var t=document.querySelector(r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[r]=t}return e[r]}}(),o=[];function i(e){for(var r=-1,t=0;t<o.length;t++)if(o[t].identifier===e){r=t;break}return r}function s(e,r){for(var t={},a=[],n=0;n<e.length;n++){var s=e[n],l=r.base?s[0]+r.base:s[0],c=t[l]||0,u="".concat(l," ").concat(c);t[l]=c+1;var d=i(u),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==d?(o[d].references++,o[d].updater(p)):o.push({identifier:u,updater:g(p,r),references:1}),a.push(u)}return a}function l(e){var r=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var o=t.nc;o&&(a.nonce=o)}if(Object.keys(a).forEach((function(e){r.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(r);else{var i=n(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(r)}return r}var c,u=(c=[],function(e,r){return c[e]=r,c.filter(Boolean).join("\n")});function d(e,r,t,a){var n=t?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=u(r,n);else{var o=document.createTextNode(n),i=e.childNodes;i[r]&&e.removeChild(i[r]),i.length?e.insertBefore(o,i[r]):e.appendChild(o)}}function p(e,r,t){var a=t.css,n=t.media,o=t.sourceMap;if(n?e.setAttribute("media",n):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var f=null,m=0;function g(e,r){var t,a,n;if(r.singleton){var o=m++;t=f||(f=l(r)),a=d.bind(null,t,o,!1),n=d.bind(null,t,o,!0)}else t=l(r),a=p.bind(null,t,r),n=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return a(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;a(e=r)}else n()}}e.exports=function(e,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a));var t=s(e=e||[],r);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<t.length;a++){var n=i(t[a]);o[n].references--}for(var l=s(e,r),c=0;c<t.length;c++){var u=i(t[c]);0===o[u].references&&(o[u].updater(),o.splice(u,1))}t=l}}}},1594:e=>{"use strict";e.exports=React},4198:e=>{"use strict";e.exports=JSON.parse('{"name":"axios","version":"0.21.4","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://axios-http.com","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.14.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}')}},r={};function t(a){var n=r[a];if(void 0!==n)return n.exports;var o=r[a]={id:a,loaded:!1,exports:{}};return e[a].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var a in r)t.o(r,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),t.nc=void 0,(()=>{"use strict";var e=t(1594),r=t.n(e);const a=ReactDOM;var n=t.n(a),o=t(5072),i=t.n(o),s=t(6523);i()(s.A,{insert:"head",singleton:!1}),s.A.locals;var l=t(2505),c=t.n(l),u=t(3346);i()(u.A,{insert:"head",singleton:!1}),u.A.locals;var d=t(2309),p=t(4848),f=function(){function e(e){var r=this;this._insertTag=function(e){var t;t=0===r.tags.length?r.insertionPoint?r.insertionPoint.nextSibling:r.prepend?r.container.firstChild:r.before:r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(e,t),r.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var r=e.prototype;return r.hydrate=function(e){e.forEach(this._insertTag)},r.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var r=document.createElement("style");return r.setAttribute("data-emotion",e.key),void 0!==e.nonce&&r.setAttribute("nonce",e.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}(this));var r=this.tags[this.tags.length-1];if(this.isSpeedy){var t=function(e){if(e.sheet)return e.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===e)return document.styleSheets[r]}(r);try{t.insertRule(e,t.cssRules.length)}catch(e){}}else r.appendChild(document.createTextNode(e));this.ctr++},r.flush=function(){this.tags.forEach((function(e){var r;return null==(r=e.parentNode)?void 0:r.removeChild(e)})),this.tags=[],this.ctr=0},e}(),m=Math.abs,g=String.fromCharCode,h=Object.assign;function b(e){return e.trim()}function y(e,r,t){return e.replace(r,t)}function v(e,r){return e.indexOf(r)}function w(e,r){return 0|e.charCodeAt(r)}function E(e,r,t){return e.slice(r,t)}function x(e){return e.length}function q(e){return e.length}function D(e,r){return r.push(e),e}var A=1,k=1,C=0,S=0,N=0,T="";function L(e,r,t,a,n,o,i){return{value:e,root:r,parent:t,type:a,props:n,children:o,line:A,column:k,length:i,return:""}}function O(e,r){return h(L("",null,null,"",null,null,0),e,{length:-e.length},r)}function R(){return N=S>0?w(T,--S):0,k--,10===N&&(k=1,A--),N}function B(){return N=S<C?w(T,S++):0,k++,10===N&&(k=1,A++),N}function j(){return w(T,S)}function P(){return S}function F(e,r){return E(T,e,r)}function U(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function V(e){return A=k=1,C=x(T=e),S=0,[]}function M(e){return T="",e}function _(e){return b(F(S-1,G(91===e?e+2:40===e?e+1:e)))}function I(e){for(;(N=j())&&N<33;)B();return U(e)>2||U(N)>3?"":" "}function z(e,r){for(;--r&&B()&&!(N<48||N>102||N>57&&N<65||N>70&&N<97););return F(e,P()+(r<6&&32==j()&&32==B()))}function G(e){for(;B();)switch(N){case e:return S;case 34:case 39:34!==e&&39!==e&&G(N);break;case 40:41===e&&G(e);break;case 92:B()}return S}function H(e,r){for(;B()&&e+N!==57&&(e+N!==84||47!==j()););return"/*"+F(r,S-1)+"*"+g(47===e?e:B())}function $(e){for(;!U(j());)B();return F(e,S)}var Y="-ms-",J="-moz-",W="-webkit-",X="comm",Z="rule",K="decl",Q="@keyframes";function ee(e,r){for(var t="",a=q(e),n=0;n<a;n++)t+=r(e[n],n,e,r)||"";return t}function re(e,r,t,a){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case K:return e.return=e.return||e.value;case X:return"";case Q:return e.return=e.value+"{"+ee(e.children,a)+"}";case Z:e.value=e.props.join(",")}return x(t=ee(e.children,a))?e.return=e.value+"{"+t+"}":""}function te(e){return M(ae("",null,null,null,[""],e=V(e),0,[0],e))}function ae(e,r,t,a,n,o,i,s,l){for(var c=0,u=0,d=i,p=0,f=0,m=0,h=1,b=1,E=1,q=0,A="",k=n,C=o,S=a,N=A;b;)switch(m=q,q=B()){case 40:if(108!=m&&58==w(N,d-1)){-1!=v(N+=y(_(q),"&","&\f"),"&\f")&&(E=-1);break}case 34:case 39:case 91:N+=_(q);break;case 9:case 10:case 13:case 32:N+=I(m);break;case 92:N+=z(P()-1,7);continue;case 47:switch(j()){case 42:case 47:D(oe(H(B(),P()),r,t),l);break;default:N+="/"}break;case 123*h:s[c++]=x(N)*E;case 125*h:case 59:case 0:switch(q){case 0:case 125:b=0;case 59+u:-1==E&&(N=y(N,/\f/g,"")),f>0&&x(N)-d&&D(f>32?ie(N+";",a,t,d-1):ie(y(N," ","")+";",a,t,d-2),l);break;case 59:N+=";";default:if(D(S=ne(N,r,t,c,u,n,s,A,k=[],C=[],d),o),123===q)if(0===u)ae(N,r,S,S,k,o,d,s,C);else switch(99===p&&110===w(N,3)?100:p){case 100:case 108:case 109:case 115:ae(e,S,S,a&&D(ne(e,S,S,0,0,n,s,A,n,k=[],d),C),n,C,d,s,a?k:C);break;default:ae(N,S,S,S,[""],C,0,s,C)}}c=u=f=0,h=E=1,A=N="",d=i;break;case 58:d=1+x(N),f=m;default:if(h<1)if(123==q)--h;else if(125==q&&0==h++&&125==R())continue;switch(N+=g(q),q*h){case 38:E=u>0?1:(N+="\f",-1);break;case 44:s[c++]=(x(N)-1)*E,E=1;break;case 64:45===j()&&(N+=_(B())),p=j(),u=d=x(A=N+=$(P())),q++;break;case 45:45===m&&2==x(N)&&(h=0)}}return o}function ne(e,r,t,a,n,o,i,s,l,c,u){for(var d=n-1,p=0===n?o:[""],f=q(p),g=0,h=0,v=0;g<a;++g)for(var w=0,x=E(e,d+1,d=m(h=i[g])),D=e;w<f;++w)(D=b(h>0?p[w]+" "+x:y(x,/&\f/g,p[w])))&&(l[v++]=D);return L(e,r,t,0===n?Z:s,l,c,u)}function oe(e,r,t){return L(e,r,t,X,g(N),E(e,2,-2),0)}function ie(e,r,t,a){return L(e,r,t,K,E(e,0,a),E(e,a+1,-1),a)}var se=function(e,r,t){for(var a=0,n=0;a=n,n=j(),38===a&&12===n&&(r[t]=1),!U(n);)B();return F(e,S)},le=new WeakMap,ce=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var r=e.value,t=e.parent,a=e.column===t.column&&e.line===t.line;"rule"!==t.type;)if(!(t=t.parent))return;if((1!==e.props.length||58===r.charCodeAt(0)||le.get(t))&&!a){le.set(e,!0);for(var n=[],o=function(e,r){return M(function(e,r){var t=-1,a=44;do{switch(U(a)){case 0:38===a&&12===j()&&(r[t]=1),e[t]+=se(S-1,r,t);break;case 2:e[t]+=_(a);break;case 4:if(44===a){e[++t]=58===j()?"&\f":"",r[t]=e[t].length;break}default:e[t]+=g(a)}}while(a=B());return e}(V(e),r))}(r,n),i=t.props,s=0,l=0;s<o.length;s++)for(var c=0;c<i.length;c++,l++)e.props[l]=n[s]?o[s].replace(/&\f/g,i[c]):i[c]+" "+o[s]}}},ue=function(e){if("decl"===e.type){var r=e.value;108===r.charCodeAt(0)&&98===r.charCodeAt(2)&&(e.return="",e.value="")}};function de(e,r){switch(function(e,r){return 45^w(e,0)?(((r<<2^w(e,0))<<2^w(e,1))<<2^w(e,2))<<2^w(e,3):0}(e,r)){case 5103:return W+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return W+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return W+e+J+e+Y+e+e;case 6828:case 4268:return W+e+Y+e+e;case 6165:return W+e+Y+"flex-"+e+e;case 5187:return W+e+y(e,/(\w+).+(:[^]+)/,W+"box-$1$2"+Y+"flex-$1$2")+e;case 5443:return W+e+Y+"flex-item-"+y(e,/flex-|-self/,"")+e;case 4675:return W+e+Y+"flex-line-pack"+y(e,/align-content|flex-|-self/,"")+e;case 5548:return W+e+Y+y(e,"shrink","negative")+e;case 5292:return W+e+Y+y(e,"basis","preferred-size")+e;case 6060:return W+"box-"+y(e,"-grow","")+W+e+Y+y(e,"grow","positive")+e;case 4554:return W+y(e,/([^-])(transform)/g,"$1"+W+"$2")+e;case 6187:return y(y(y(e,/(zoom-|grab)/,W+"$1"),/(image-set)/,W+"$1"),e,"")+e;case 5495:case 3959:return y(e,/(image-set\([^]*)/,W+"$1$`$1");case 4968:return y(y(e,/(.+:)(flex-)?(.*)/,W+"box-pack:$3"+Y+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+W+e+e;case 4095:case 3583:case 4068:case 2532:return y(e,/(.+)-inline(.+)/,W+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(x(e)-1-r>6)switch(w(e,r+1)){case 109:if(45!==w(e,r+4))break;case 102:return y(e,/(.+:)(.+)-([^]+)/,"$1"+W+"$2-$3$1"+J+(108==w(e,r+3)?"$3":"$2-$3"))+e;case 115:return~v(e,"stretch")?de(y(e,"stretch","fill-available"),r)+e:e}break;case 4949:if(115!==w(e,r+1))break;case 6444:switch(w(e,x(e)-3-(~v(e,"!important")&&10))){case 107:return y(e,":",":"+W)+e;case 101:return y(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+W+(45===w(e,14)?"inline-":"")+"box$3$1"+W+"$2$3$1"+Y+"$2box$3")+e}break;case 5936:switch(w(e,r+11)){case 114:return W+e+Y+y(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return W+e+Y+y(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return W+e+Y+y(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return W+e+Y+e+e}return e}var pe=[function(e,r,t,a){if(e.length>-1&&!e.return)switch(e.type){case K:e.return=de(e.value,e.length);break;case Q:return ee([O(e,{value:y(e.value,"@","@"+W)})],a);case Z:if(e.length)return function(e,r){return e.map(r).join("")}(e.props,(function(r){switch(function(e){return(e=/(::plac\w+|:read-\w+)/.exec(e))?e[0]:e}(r)){case":read-only":case":read-write":return ee([O(e,{props:[y(r,/:(read-\w+)/,":-moz-$1")]})],a);case"::placeholder":return ee([O(e,{props:[y(r,/:(plac\w+)/,":"+W+"input-$1")]}),O(e,{props:[y(r,/:(plac\w+)/,":-moz-$1")]}),O(e,{props:[y(r,/:(plac\w+)/,Y+"input-$1")]})],a)}return""}))}}],fe=function(e){var r=e.key;if("css"===r){var t=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(t,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var a,n,o=e.stylisPlugins||pe,i={},s=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),(function(e){for(var r=e.getAttribute("data-emotion").split(" "),t=1;t<r.length;t++)i[r[t]]=!0;s.push(e)}));var l,c,u,d,p=[re,(d=function(e){l.insert(e)},function(e){e.root||(e=e.return)&&d(e)})],m=(c=[ce,ue].concat(o,p),u=q(c),function(e,r,t,a){for(var n="",o=0;o<u;o++)n+=c[o](e,r,t,a)||"";return n});n=function(e,r,t,a){l=t,ee(te(e?e+"{"+r.styles+"}":r.styles),m),a&&(g.inserted[r.name]=!0)};var g={key:r,sheet:new f({key:r,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:i,registered:{},insert:n};return g.sheet.hydrate(s),g};function me(e,r,t){var a="";return t.split(" ").forEach((function(t){void 0!==e[t]?r.push(e[t]+";"):t&&(a+=t+" ")})),a}var ge=function(e,r,t){var a=e.key+"-"+r.name;!1===t&&void 0===e.registered[a]&&(e.registered[a]=r.styles)},he=function(e,r,t){ge(e,r,t);var a=e.key+"-"+r.name;if(void 0===e.inserted[r.name]){var n=r;do{e.insert(r===n?"."+a:"",n,e.sheet,!0),n=n.next}while(void 0!==n)}},be={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function ye(e){var r=Object.create(null);return function(t){return void 0===r[t]&&(r[t]=e(t)),r[t]}}var ve=/[A-Z]|^ms/g,we=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Ee=function(e){return 45===e.charCodeAt(1)},xe=function(e){return null!=e&&"boolean"!=typeof e},qe=ye((function(e){return Ee(e)?e:e.replace(ve,"-$&").toLowerCase()})),De=function(e,r){switch(e){case"animation":case"animationName":if("string"==typeof r)return r.replace(we,(function(e,r,t){return ke={name:r,styles:t,next:ke},r}))}return 1===be[e]||Ee(e)||"number"!=typeof r||0===r?r:r+"px"};function Ae(e,r,t){if(null==t)return"";var a=t;if(void 0!==a.__emotion_styles)return a;switch(typeof t){case"boolean":return"";case"object":var n=t;if(1===n.anim)return ke={name:n.name,styles:n.styles,next:ke},n.name;var o=t;if(void 0!==o.styles){var i=o.next;if(void 0!==i)for(;void 0!==i;)ke={name:i.name,styles:i.styles,next:ke},i=i.next;return o.styles+";"}return function(e,r,t){var a="";if(Array.isArray(t))for(var n=0;n<t.length;n++)a+=Ae(e,r,t[n])+";";else for(var o in t){var i=t[o];if("object"!=typeof i){var s=i;null!=r&&void 0!==r[s]?a+=o+"{"+r[s]+"}":xe(s)&&(a+=qe(o)+":"+De(o,s)+";")}else if(!Array.isArray(i)||"string"!=typeof i[0]||null!=r&&void 0!==r[i[0]]){var l=Ae(e,r,i);switch(o){case"animation":case"animationName":a+=qe(o)+":"+l+";";break;default:a+=o+"{"+l+"}"}}else for(var c=0;c<i.length;c++)xe(i[c])&&(a+=qe(o)+":"+De(o,i[c])+";")}return a}(e,r,t);case"function":if(void 0!==e){var s=ke,l=t(e);return ke=s,Ae(e,r,l)}}var c=t;if(null==r)return c;var u=r[c];return void 0!==u?u:c}var ke,Ce=/label:\s*([^\s;{]+)\s*(;|$)/g;function Se(e,r,t){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var a=!0,n="";ke=void 0;var o=e[0];null==o||void 0===o.raw?(a=!1,n+=Ae(t,r,o)):n+=o[0];for(var i=1;i<e.length;i++)n+=Ae(t,r,e[i]),a&&(n+=o[i]);Ce.lastIndex=0;for(var s,l="";null!==(s=Ce.exec(n));)l+="-"+s[1];var c=function(e){for(var r,t=0,a=0,n=e.length;n>=4;++a,n-=4)r=1540483477*(65535&(r=255&e.charCodeAt(a)|(255&e.charCodeAt(++a))<<8|(255&e.charCodeAt(++a))<<16|(255&e.charCodeAt(++a))<<24))+(59797*(r>>>16)<<16),t=1540483477*(65535&(r^=r>>>24))+(59797*(r>>>16)<<16)^1540483477*(65535&t)+(59797*(t>>>16)<<16);switch(n){case 3:t^=(255&e.charCodeAt(a+2))<<16;case 2:t^=(255&e.charCodeAt(a+1))<<8;case 1:t=1540483477*(65535&(t^=255&e.charCodeAt(a)))+(59797*(t>>>16)<<16)}return(((t=1540483477*(65535&(t^=t>>>13))+(59797*(t>>>16)<<16))^t>>>15)>>>0).toString(36)}(n)+l;return{name:c,styles:n,next:ke}}var Ne=!!e.useInsertionEffect&&e.useInsertionEffect,Te=Ne||function(e){return e()},Le=(Ne||e.useLayoutEffect,e.createContext("undefined"!=typeof HTMLElement?fe({key:"css"}):null)),Oe=(Le.Provider,function(r){return(0,e.forwardRef)((function(t,a){var n=(0,e.useContext)(Le);return r(t,n,a)}))}),Re=e.createContext({}),Be={}.hasOwnProperty,je="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Pe=function(e){var r=e.cache,t=e.serialized,a=e.isStringTag;return ge(r,t,a),Te((function(){return he(r,t,a)})),null},Fe=Oe((function(r,t,a){var n=r.css;"string"==typeof n&&void 0!==t.registered[n]&&(n=t.registered[n]);var o=r[je],i=[n],s="";"string"==typeof r.className?s=me(t.registered,i,r.className):null!=r.className&&(s=r.className+" ");var l=Se(i,void 0,e.useContext(Re));s+=t.key+"-"+l.name;var c={};for(var u in r)Be.call(r,u)&&"css"!==u&&u!==je&&(c[u]=r[u]);return c.className=s,a&&(c.ref=a),e.createElement(e.Fragment,null,e.createElement(Pe,{cache:t,serialized:l,isStringTag:"string"==typeof o}),e.createElement(o,c))})),Ue=(t(4146),p.Fragment);function Ve(e,r,t){return Be.call(r,"css")?p.jsx(Fe,function(e,r){var t={};for(var a in r)Be.call(r,a)&&(t[a]=r[a]);return t[je]=e,t}(e,r),t):p.jsx(e,r,t)}function Me(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return Se(r)}var _e=function(){var e=Me.apply(void 0,arguments),r="animation-"+e.name;return{name:r,styles:"@keyframes "+r+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Ie=function e(r){for(var t=r.length,a=0,n="";a<t;a++){var o=r[a];if(null!=o){var i=void 0;switch(typeof o){case"boolean":break;case"object":if(Array.isArray(o))i=e(o);else for(var s in i="",o)o[s]&&s&&(i&&(i+=" "),i+=s);break;default:i=o}i&&(n&&(n+=" "),n+=i)}}return n},ze=function(e){var r=e.cache,t=e.serializedArr;return Te((function(){for(var e=0;e<t.length;e++)he(r,t[e],!1)})),null},Ge=Oe((function(r,t){var a=[],n=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];var o=Se(r,t.registered);return a.push(o),ge(t,o,!1),t.key+"-"+o.name},o={css:n,cx:function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];return function(e,r,t){var a=[],n=me(e,a,t);return a.length<2?t:n+r(a)}(t.registered,n,Ie(r))},theme:e.useContext(Re)},i=r.children(o);return e.createElement(e.Fragment,null,e.createElement(ze,{cache:t,serializedArr:a}),i)})),He=Object.defineProperty,$e=(e,r,t)=>((e,r,t)=>r in e?He(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t)(e,"symbol"!=typeof r?r+"":r,t),Ye=new Map,Je=new WeakMap,We=0;function Xe(e,r,t={},a=undefined){if(void 0===window.IntersectionObserver&&void 0!==a){const n=e.getBoundingClientRect();return r(a,{isIntersecting:a,target:e,intersectionRatio:"number"==typeof t.threshold?t.threshold:0,time:0,boundingClientRect:n,intersectionRect:n,rootBounds:n}),()=>{}}const{id:n,observer:o,elements:i}=function(e){const r=function(e){return Object.keys(e).sort().filter((r=>void 0!==e[r])).map((r=>{return`${r}_${"root"===r?(t=e.root,t?(Je.has(t)||(We+=1,Je.set(t,We.toString())),Je.get(t)):"0"):e[r]}`;var t})).toString()}(e);let t=Ye.get(r);if(!t){const a=new Map;let n;const o=new IntersectionObserver((r=>{r.forEach((r=>{var t;const o=r.isIntersecting&&n.some((e=>r.intersectionRatio>=e));e.trackVisibility&&void 0===r.isVisible&&(r.isVisible=o),null==(t=a.get(r.target))||t.forEach((e=>{e(o,r)}))}))}),e);n=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),t={id:r,observer:o,elements:a},Ye.set(r,t)}return t}(t),s=i.get(e)||[];return i.has(e)||i.set(e,s),s.push(r),o.observe(e),function(){s.splice(s.indexOf(r),1),0===s.length&&(i.delete(e),o.unobserve(e)),0===i.size&&(o.disconnect(),Ye.delete(n))}}var Ze=class extends e.Component{constructor(e){super(e),$e(this,"node",null),$e(this,"_unobserveCb",null),$e(this,"handleNode",(e=>{this.node&&(this.unobserve(),e||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()})),$e(this,"handleChange",((e,r)=>{e&&this.props.triggerOnce&&this.unobserve(),function(e){return"function"!=typeof e.children}(this.props)||this.setState({inView:e,entry:r}),this.props.onChange&&this.props.onChange(e,r)})),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:r,rootMargin:t,trackVisibility:a,delay:n,fallbackInView:o}=this.props;this._unobserveCb=Xe(this.node,this.handleChange,{threshold:e,root:r,rootMargin:t,trackVisibility:a,delay:n},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:r}=this.props;if("function"==typeof r){const{inView:e,entry:t}=this.state;return r({inView:e,entry:t,ref:this.handleNode})}const{as:t,triggerOnce:a,threshold:n,root:o,rootMargin:i,onChange:s,skip:l,trackVisibility:c,delay:u,initialInView:d,fallbackInView:p,...f}=this.props;return e.createElement(t||"div",{ref:this.handleNode,...f},r)}};function Ke({threshold:r,delay:t,trackVisibility:a,rootMargin:n,root:o,triggerOnce:i,skip:s,initialInView:l,fallbackInView:c,onChange:u}={}){var d;const[p,f]=e.useState(null),m=e.useRef(),[g,h]=e.useState({inView:!!l,entry:void 0});m.current=u,e.useEffect((()=>{if(s||!p)return;let e;return e=Xe(p,((r,t)=>{h({inView:r,entry:t}),m.current&&m.current(r,t),t.isIntersecting&&i&&e&&(e(),e=void 0)}),{root:o,rootMargin:n,threshold:r,trackVisibility:a,delay:t},c),()=>{e&&e()}}),[Array.isArray(r)?r.toString():r,p,o,n,i,s,a,c,t]);const b=null==(d=g.entry)?void 0:d.target,y=e.useRef();p||!b||i||s||y.current===b||(y.current=b,h({inView:!!l,entry:void 0}));const v=[f,g.inView,g.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}var Qe=t(8338);_e`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`,_e`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,_e`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`,_e`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`,_e`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`,_e`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,_e`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,_e`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,_e`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,_e`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,_e`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`,_e`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,_e`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const er=_e`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,rr=_e`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tr=_e`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ar=_e`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,nr=_e`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,or=_e`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ir=_e`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,sr=_e`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,lr=_e`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,cr=_e`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ur=_e`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,dr=_e`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,pr=_e`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function fr(e,r){return t=>t?e():r()}function mr(e){return fr(e,(()=>null))}function gr(e){return mr((()=>({opacity:0})))(e)}const hr=r=>{const{cascade:t=!1,damping:a=.5,delay:n=0,duration:o=1e3,fraction:i=0,keyframes:s=or,triggerOnce:l=!1,className:c,style:u,childClassName:d,childStyle:p,children:f,onVisibilityChange:m}=r,g=(0,e.useMemo)((()=>function({duration:e=1e3,delay:r=0,timingFunction:t="ease",keyframes:a=or,iterationCount:n=1}){return Me`
    animation-duration: ${e}ms;
    animation-timing-function: ${t};
    animation-delay: ${r}ms;
    animation-name: ${a};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${n};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}({keyframes:s,duration:o})),[o,s]);return null==f?null:"string"==typeof(h=f)||"number"==typeof h||"boolean"==typeof h?Ve(yr,{...r,animationStyles:g,children:String(f)}):(0,Qe.isFragment)(f)?Ve(vr,{...r,animationStyles:g}):Ve(Ue,{children:e.Children.map(f,((s,f)=>{if(!(0,e.isValidElement)(s))return null;const h=n+(t?f*o*a:0);switch(s.type){case"ol":case"ul":return Ve(Ge,{children:({cx:e})=>Ve(s.type,{...s.props,className:e(c,s.props.className),style:Object.assign({},u,s.props.style),children:Ve(hr,{...r,children:s.props.children})})});case"li":return Ve(Ze,{threshold:i,triggerOnce:l,onChange:m,children:({inView:e,ref:r})=>Ve(Ge,{children:({cx:t})=>Ve(s.type,{...s.props,ref:r,className:t(d,s.props.className),css:mr((()=>g))(e),style:Object.assign({},p,s.props.style,gr(!e),{animationDelay:h+"ms"})})})});default:return Ve(Ze,{threshold:i,triggerOnce:l,onChange:m,children:({inView:e,ref:r})=>Ve("div",{ref:r,className:c,css:mr((()=>g))(e),style:Object.assign({},u,gr(!e),{animationDelay:h+"ms"}),children:Ve(Ge,{children:({cx:e})=>Ve(s.type,{...s.props,className:e(d,s.props.className),style:Object.assign({},p,s.props.style)})})})})}}))});var h},br={display:"inline-block",whiteSpace:"pre"},yr=e=>{const{animationStyles:r,cascade:t=!1,damping:a=.5,delay:n=0,duration:o=1e3,fraction:i=0,triggerOnce:s=!1,className:l,style:c,children:u,onVisibilityChange:d}=e,{ref:p,inView:f}=Ke({triggerOnce:s,threshold:i,onChange:d});return fr((()=>Ve("div",{ref:p,className:l,style:Object.assign({},c,br),children:u.split("").map(((e,t)=>Ve("span",{css:mr((()=>r))(f),style:{animationDelay:n+t*o*a+"ms"},children:e},t)))})),(()=>Ve(vr,{...e,children:u})))(t)},vr=e=>{const{animationStyles:r,fraction:t=0,triggerOnce:a=!1,className:n,style:o,children:i,onVisibilityChange:s}=e,{ref:l,inView:c}=Ke({triggerOnce:a,threshold:t,onChange:s});return Ve("div",{ref:l,className:n,css:mr((()=>r))(c),style:Object.assign({},o,gr(!c)),children:i})};_e`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,_e`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,_e`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,_e`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,_e`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,_e`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,_e`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,_e`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,_e`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,_e`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const wr=_e`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,Er=_e`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,xr=_e`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,qr=_e`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,Dr=_e`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,Ar=_e`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,kr=_e`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,Cr=_e`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,Sr=_e`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Nr=_e`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Tr=_e`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,Lr=_e`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,Or=_e`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`,Rr=r=>{const{big:t=!1,direction:a,reverse:n=!1,...o}=r,i=(0,e.useMemo)((()=>function(e,r,t){switch(t){case"bottom-left":return r?Er:rr;case"bottom-right":return r?xr:tr;case"down":return e?r?Dr:nr:r?qr:ar;case"left":return e?r?kr:ir:r?Ar:or;case"right":return e?r?Sr:lr:r?Cr:sr;case"top-left":return r?Nr:cr;case"top-right":return r?Tr:ur;case"up":return e?r?Or:pr:r?Lr:dr;default:return r?wr:er}}(t,n,a)),[t,a,n]);return Ve(hr,{keyframes:i,...o})};_e`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`,_e`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,_e`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,_e`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`,_e`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`,_e`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`,_e`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,_e`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,_e`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`,_e`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,_e`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,_e`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,_e`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,_e`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,_e`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,_e`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,_e`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,_e`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,_e`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`,_e`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,_e`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,_e`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,_e`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,_e`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,_e`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,_e`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,_e`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`,_e`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,_e`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,_e`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,_e`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,_e`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,_e`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,_e`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,_e`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,_e`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,_e`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;var Br=t(6067),jr=t.n(Br);function Pr(e,r,t){return(r=function(e){var r=function(e){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var t=r.call(e,"string");if("object"!=typeof t)return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof r?r:r+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}class Fr extends e.Component{constructor(){super(...arguments),Pr(this,"state",{ourData:[],isLoaded:!1,callErr:!0,errMsg:""}),Pr(this,"setFeedLength",(e=>"Three"===e?this.state.ourData.slice(0,3).map((e=>({nid:e.node.nid,teaser:e.node.clas_teaser||e.node.teaser,title:e.node.title,image_url:e.node.image_url,image_alt:e.node.image_alt,path:e.node.path+"?{_src}=news-story",saf:e.node.field_saf,interests:e.node.interests}))):this.state.ourData.map((e=>({nid:e.node.nid,teaser:e.node.clas_teaser||jr().decode(e.node.teaser),title:e.node.title,image_url:e.node.image_url,image_alt:e.node.image_alt,path:e.node.path+"?{_src}=news-story",saf:e.node.field_saf,interests:e.node.interests})))))}componentDidMount(){const e=this.props.dataFromPage.feed;let r=[],t=e.split(","),a=t.shift(),n=[],o=[];for(let e=0;e<t.length;e++)"-"==t[e][0]?o.push(t[e].substring(1).toLowerCase()):"&"==t[e][0]?n.push(t[e].substring(1).toLowerCase()):n.push(t[e].toLowerCase());c().get(a).then((e=>{if(n.length>0)for(let t=0;t<e.data.nodes.length;t++){let a=e.data.nodes[t].node.interests.toLowerCase().split("|");a=a.concat(e.data.nodes[t].node.news_units.toLowerCase().split("|")),a=a.concat(e.data.nodes[t].node.audiences.toLowerCase().split("|")),a.some((e=>n.includes(e.toLowerCase())))&&r.push(e.data.nodes[t])}else r=e.data.nodes;if(o.length>0){let t=[];for(let a=0;a<r.length;a++){let n=e.data.nodes[a].node.interests.toLowerCase().split("|");n=n.concat(e.data.nodes[a].node.news_units.toLowerCase().split("|")),n=n.concat(e.data.nodes[a].node.audiences.toLowerCase().split("|")),n.some((e=>o.includes(e.toLowerCase())))||t.push(r[a])}r=t}this.setState({ourData:r,isLoaded:!0,callErr:!1})})).catch((e=>{e.response?(console.log(e.response),this.setState({isLoaded:!0,callErr:!0,errMsg:"Server responded with a status code of: "+e.response.status})):e.request?(console.log(e.request),this.setState({isLoaded:!0,callErr:!0,errMsg:"The request was made but no response was received."})):console.log("Error",e.message),console.log(e.config)}))}render(){let e,t=this.setFeedLength(this.props.dataFromPage.items);return e="Cards"===this.props.dataFromPage.view?t.map(((e,t)=>{let a=e.teaser;return e.teaser.length>120&&(a=e.teaser.substr(0,e.teaser.lastIndexOf(" ",120)),a+="..."),r().createElement("div",{className:"col col-12 col-lg-4",key:e.nid},r().createElement("button",{onClick:()=>window.open(e.path,"_blank")},r().createElement("div",{className:"card card-story card-hover h-100"},r().createElement("img",{className:"card-img-top",src:e.image_url,alt:e.image_alt}),r().createElement("div",{className:"card-header"},r().createElement("h4",{className:"card-title"},e.title)),r().createElement("div",{className:"card-body"},r().createElement("p",{className:"card-text text-dark card-teaser"},a)),r().createElement("div",{className:"card-tags"},e.interests.split("|").map(((e,t)=>r().createElement("span",{className:"btn btn-tag btn-tag-alt-white",href:"#",key:e},e," ")))))))})):t.map(((e,t)=>{let a=e.teaser;return e.teaser.length>120&&(a=e.teaser.substr(0,e.teaser.lastIndexOf(" ",120)),a+="..."),r().createElement("div",{className:"card card-hover",key:e.nid},r().createElement("button",{onClick:()=>window.open(e.path,"_blank")},r().createElement("div",{className:"row no-gutters"},r().createElement("div",{className:"col-md-4"},r().createElement("img",{className:"card-img h-100",src:e.image_url,alt:e.image_alt})),r().createElement("div",{className:"col-md-8"},r().createElement("div",{className:"list-view card-body"},r().createElement("h3",{className:"list-view card-title"},e.title,r().createElement("p",{className:"card-text text-muted"},e.interests.split("|").join(", "))))))))})),this.state.isLoaded?this.state.callErr&&this.state.isLoaded?r().createElement(Rr,null,r().createElement("div",{className:"errorContainer"},r().createElement("h3",{className:"errorTitle"},"Oops! Looks like the ASU Now News Feed could not be loaded."),r().createElement("p",{className:"errorCode"},this.state.errMsg))):r().createElement(Rr,null,r().createElement("div",{className:"D8News"},r().createElement("div",{className:"container"},r().createElement("div",{className:"row row-spaced"},e)))):r().createElement("div",{className:"loader"},r().createElement(d.A,{type:"ThreeDots",color:"#5C6670",height:"100",width:"100"}))}}const Ur=Fr;let Vr=document.getElementsByClassName("clas-news-react-base");console.log("in the app");for(let e of Vr)n().render(r().createElement(Ur,{dataFromPage:e.dataset}),e)})()})();