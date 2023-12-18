"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[998],{9773:function(){},223:function(e,c,t){t.d(c,{BH:function(){return V},L:function(){return s},LL:function(){return N},P0:function(){return v},Pz:function(){return g},Sg:function(){return H},ZR:function(){return k},aH:function(){return z},b$:function(){return y},eu:function(){return w},hl:function(){return x},m9:function(){return U},ne:function(){return R},pd:function(){return O},q4:function(){return h},ru:function(){return M},tV:function(){return l},uI:function(){return b},vZ:function(){return I},w1:function(){return L},xO:function(){return P},xb:function(){return E},z$:function(){return C},zd:function(){return F}});t(3429),t(560);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const n=function(e){const c=[];let t=0;for(let n=0;n<e.length;n++){let a=e.charCodeAt(n);a<128?c[t++]=a:a<2048?(c[t++]=a>>6|192,c[t++]=63&a|128):55296===(64512&a)&&n+1<e.length&&56320===(64512&e.charCodeAt(n+1))?(a=65536+((1023&a)<<10)+(1023&e.charCodeAt(++n)),c[t++]=a>>18|240,c[t++]=a>>12&63|128,c[t++]=a>>6&63|128,c[t++]=63&a|128):(c[t++]=a>>12|224,c[t++]=a>>6&63|128,c[t++]=63&a|128)}return c},a=function(e){const c=[];let t=0,n=0;while(t<e.length){const a=e[t++];if(a<128)c[n++]=String.fromCharCode(a);else if(a>191&&a<224){const i=e[t++];c[n++]=String.fromCharCode((31&a)<<6|63&i)}else if(a>239&&a<365){const i=e[t++],r=e[t++],o=e[t++],s=((7&a)<<18|(63&i)<<12|(63&r)<<6|63&o)-65536;c[n++]=String.fromCharCode(55296+(s>>10)),c[n++]=String.fromCharCode(56320+(1023&s))}else{const i=e[t++],r=e[t++];c[n++]=String.fromCharCode((15&a)<<12|(63&i)<<6|63&r)}}return c.join("")},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,c){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=c?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let a=0;a<e.length;a+=3){const c=e[a],i=a+1<e.length,r=i?e[a+1]:0,o=a+2<e.length,s=o?e[a+2]:0,l=c>>2,u=(3&c)<<4|r>>4;let f=(15&r)<<2|s>>6,d=63&s;o||(d=64,i||(f=64)),n.push(t[l],t[u],t[f],t[d])}return n.join("")},encodeString(e,c){return this.HAS_NATIVE_SUPPORT&&!c?btoa(e):this.encodeByteArray(n(e),c)},decodeString(e,c){return this.HAS_NATIVE_SUPPORT&&!c?atob(e):a(this.decodeStringToByteArray(e,c))},decodeStringToByteArray(e,c){this.init_();const t=c?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let a=0;a<e.length;){const c=t[e.charAt(a++)],i=a<e.length,o=i?t[e.charAt(a)]:0;++a;const s=a<e.length,l=s?t[e.charAt(a)]:64;++a;const u=a<e.length,f=u?t[e.charAt(a)]:64;if(++a,null==c||null==o||null==l||null==f)throw new r;const d=c<<2|o>>4;if(n.push(d),64!==l){const e=o<<4&240|l>>2;if(n.push(e),64!==f){const e=l<<6&192|f;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const o=function(e){const c=n(e);return i.encodeByteArray(c,!0)},s=function(e){return o(e).replace(/\./g,"")},l=function(e){try{return i.decodeString(e,!0)}catch(c){console.error("base64Decode failed: ",c)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof t.g)return t.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=()=>u().__FIREBASE_DEFAULTS__,d=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",VUE_APP_I18N_LOCALE:"ua",VUE_APP_I18N_FALLBACK_LOCALE:"en",VUE_APP_FIREBASE_API_KEY:"AIzaSyB4g1BnFqj1MIg8Mvvcgt9Kv4LMB_P5jvM",VUE_APP_FIREBASE_AUTH_DOMAIN:"data-shop-list.firebaseapp.com",VUE_APP_FIREBASE_PROJECT_ID:"data-shop-list",VUE_APP_FIREBASE_STORAGE_BUCKET:"data-shop-list.appspot.com",VUE_APP_FIREBASE_MESSAGE_SENDER_ID:"694296571402",VUE_APP_FIREBASE_APP_ID:"1:694296571402:web:dbeaca4b0dc9ffaba0f9f3",BASE_URL:"/Vue-17-lesson/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},m=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const c=e&&l(e[1]);return c&&JSON.parse(c)},p=()=>{try{return f()||d()||m()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},h=e=>{var c,t;return null===(t=null===(c=p())||void 0===c?void 0:c.emulatorHosts)||void 0===t?void 0:t[e]},v=e=>{const c=h(e);if(!c)return;const t=c.lastIndexOf(":");if(t<=0||t+1===c.length)throw new Error(`Invalid host ${c} with no separate hostname and port!`);const n=parseInt(c.substring(t+1),10);return"["===c[0]?[c.substring(1,t-1),n]:[c.substring(0,t),n]},z=()=>{var e;return null===(e=p())||void 0===e?void 0:e.config},g=e=>{var c;return null===(c=p())||void 0===c?void 0:c[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class V{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,c)=>{this.resolve=e,this.reject=c}))}wrapCallback(e){return(c,t)=>{c?this.reject(c):this.resolve(t),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(c):e(c,t))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e,c){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=c||"demo-project",a=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:a,exp:a+3600,auth_time:a,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),o="";return[s(JSON.stringify(t)),s(JSON.stringify(r)),o].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function b(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(C())}function M(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function y(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function L(){const e=C();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function x(){try{return"object"===typeof indexedDB}catch(e){return!1}}function w(){return new Promise(((e,c)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(n);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(n),e(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var e;c((null===(e=a.error)||void 0===e?void 0:e.message)||"")}}catch(t){c(t)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const S="FirebaseError";class k extends Error{constructor(e,c,t){super(c),this.code=e,this.customData=t,this.name=S,Object.setPrototypeOf(this,k.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,N.prototype.create)}}class N{constructor(e,c,t){this.service=e,this.serviceName=c,this.errors=t}create(e,...c){const t=c[0]||{},n=`${this.service}/${e}`,a=this.errors[e],i=a?_(a,t):"Error",r=`${this.serviceName}: ${i} (${n}).`,o=new k(n,r,t);return o}}function _(e,c){return e.replace(A,((e,t)=>{const n=c[t];return null!=n?String(n):`<${t}?>`}))}const A=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e){for(const c in e)if(Object.prototype.hasOwnProperty.call(e,c))return!1;return!0}function I(e,c){if(e===c)return!0;const t=Object.keys(e),n=Object.keys(c);for(const a of t){if(!n.includes(a))return!1;const t=e[a],i=c[a];if(T(t)&&T(i)){if(!I(t,i))return!1}else if(t!==i)return!1}for(const a of n)if(!t.includes(a))return!1;return!0}function T(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function P(e){const c=[];for(const[t,n]of Object.entries(e))Array.isArray(n)?n.forEach((e=>{c.push(encodeURIComponent(t)+"="+encodeURIComponent(e))})):c.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return c.length?"&"+c.join("&"):""}function F(e){const c={},t=e.replace(/^\?/,"").split("&");return t.forEach((e=>{if(e){const[t,n]=e.split("=");c[decodeURIComponent(t)]=decodeURIComponent(n)}})),c}function O(e){const c=e.indexOf("?");if(!c)return"";const t=e.indexOf("#",c);return e.substring(c,t>0?t:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e,c){const t=new D(e,c);return t.subscribe.bind(t)}class D{constructor(e,c){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=c,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((c=>{c.next(e)}))}error(e){this.forEachObserver((c=>{c.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,c,t){let n;if(void 0===e&&void 0===c&&void 0===t)throw new Error("Missing Observer.");n=B(e,["next","error","complete"])?e:{next:e,error:c,complete:t},void 0===n.next&&(n.next=W),void 0===n.error&&(n.error=W),void 0===n.complete&&(n.complete=W);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}})),this.observers.push(n),a}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let c=0;c<this.observers.length;c++)this.sendOne(c,e)}sendOne(e,c){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{c(this.observers[e])}catch(t){"undefined"!==typeof console&&console.error&&console.error(t)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function B(e,c){if("object"!==typeof e||null===e)return!1;for(const t of c)if(t in e&&"function"===typeof e[t])return!0;return!1}function W(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function U(e){return e&&e._delegate?e._delegate:e}},7749:function(e,c,t){t.d(c,{GN:function(){return _}});t(560);var n=t(3494),a=t(3396);function i(e,c){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);c&&(n=n.filter((function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var c=1;c<arguments.length;c++){var t=null!=arguments[c]?arguments[c]:{};c%2?i(Object(t),!0).forEach((function(c){s(e,c,t[c])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(c){Object.defineProperty(e,c,Object.getOwnPropertyDescriptor(t,c))}))}return e}function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function s(e,c,t){return c=g(c),c in e?Object.defineProperty(e,c,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[c]=t,e}function l(e,c){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],c.indexOf(t)>=0||(a[t]=e[t]);return a}function u(e,c){if(null==e)return{};var t,n,a=l(e,c);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],c.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function f(e){return d(e)||m(e)||p(e)||v()}function d(e){if(Array.isArray(e))return h(e)}function m(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function p(e,c){if(e){if("string"===typeof e)return h(e,c);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?h(e,c):void 0}}function h(e,c){(null==c||c>e.length)&&(c=e.length);for(var t=0,n=new Array(c);t<c;t++)n[t]=e[t];return n}function v(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function z(e,c){if("object"!==typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,c||"default");if("object"!==typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===c?String:Number)(e)}function g(e){var c=z(e,"string");return"symbol"===typeof c?c:String(c)}var V="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t.g?t.g:"undefined"!==typeof self?self:{},H={exports:{}};(function(e){(function(c){var t=function(e,c,n){if(!l(c)||f(c)||d(c)||m(c)||s(c))return c;var a,i=0,r=0;if(u(c))for(a=[],r=c.length;i<r;i++)a.push(t(e,c[i],n));else for(var o in a={},c)Object.prototype.hasOwnProperty.call(c,o)&&(a[e(o,n)]=t(e,c[o],n));return a},n=function(e,c){c=c||{};var t=c.separator||"_",n=c.split||/(?=[A-Z])/;return e.split(n).join(t)},a=function(e){return p(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,c){return c?c.toUpperCase():""})),e.substr(0,1).toLowerCase()+e.substr(1))},i=function(e){var c=a(e);return c.substr(0,1).toUpperCase()+c.substr(1)},r=function(e,c){return n(e,c).toLowerCase()},o=Object.prototype.toString,s=function(e){return"function"===typeof e},l=function(e){return e===Object(e)},u=function(e){return"[object Array]"==o.call(e)},f=function(e){return"[object Date]"==o.call(e)},d=function(e){return"[object RegExp]"==o.call(e)},m=function(e){return"[object Boolean]"==o.call(e)},p=function(e){return e-=0,e===e},h=function(e,c){var t=c&&"process"in c?c.process:c;return"function"!==typeof t?e:function(c,n){return t(c,e,n)}},v={camelize:a,decamelize:r,pascalize:i,depascalize:r,camelizeKeys:function(e,c){return t(h(a,c),e)},decamelizeKeys:function(e,c){return t(h(r,c),e,c)},pascalizeKeys:function(e,c){return t(h(i,c),e)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=v:c.humps=v})(V)})(H);var C=H.exports,b=["class","style"];function M(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,c){var t=c.indexOf(":"),n=C.camelize(c.slice(0,t)),a=c.slice(t+1).trim();return e[n]=a,e}),{})}function y(e){return e.split(/\s+/).reduce((function(e,c){return e[c]=!0,e}),{})}function L(e){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof e)return e;var n=(e.children||[]).map((function(e){return L(e)})),i=Object.keys(e.attributes||{}).reduce((function(c,t){var n=e.attributes[t];switch(t){case"class":c.class=y(n);break;case"style":c.style=M(n);break;default:c.attrs[t]=n}return c}),{attrs:{},class:{},style:{}});t.class;var o=t.style,s=void 0===o?{}:o,l=u(t,b);return(0,a.h)(e.tag,r(r(r({},c),{},{class:i.class,style:r(r({},i.style),s)},i.attrs),l),n)}var x=!1;try{x=!0}catch(A){}function w(){var e;!x&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}function S(e,c){return Array.isArray(c)&&c.length>0||!Array.isArray(c)&&c?s({},e,c):{}}function k(e){var c,t=(c={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":!0===e.flip,"fa-flip-horizontal":"horizontal"===e.flip||"both"===e.flip,"fa-flip-vertical":"vertical"===e.flip||"both"===e.flip},s(c,"fa-".concat(e.size),null!==e.size),s(c,"fa-rotate-".concat(e.rotation),null!==e.rotation),s(c,"fa-pull-".concat(e.pull),null!==e.pull),s(c,"fa-swap-opacity",e.swapOpacity),s(c,"fa-bounce",e.bounce),s(c,"fa-shake",e.shake),s(c,"fa-beat",e.beat),s(c,"fa-fade",e.fade),s(c,"fa-beat-fade",e.beatFade),s(c,"fa-flash",e.flash),s(c,"fa-spin-pulse",e.spinPulse),s(c,"fa-spin-reverse",e.spinReverse),c);return Object.keys(t).map((function(e){return t[e]?e:null})).filter((function(e){return e}))}function N(e){return e&&"object"===o(e)&&e.prefix&&e.iconName&&e.icon?e:n.Qc.icon?n.Qc.icon(e):null===e?null:"object"===o(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}var _=(0,a.aZ)({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,c){var t=c.attrs,i=(0,a.Fl)((function(){return N(e.icon)})),o=(0,a.Fl)((function(){return S("classes",k(e))})),s=(0,a.Fl)((function(){return S("transform","string"===typeof e.transform?n.Qc.transform(e.transform):e.transform)})),l=(0,a.Fl)((function(){return S("mask",N(e.mask))})),u=(0,a.Fl)((function(){return(0,n.qv)(i.value,r(r(r(r({},o.value),s.value),l.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))}));(0,a.YP)(u,(function(e){if(!e)return w("Could not find one or more icon(s)",i.value,l.value)}),{immediate:!0});var f=(0,a.Fl)((function(){return u.value?L(u.value.abstract[0],{},t):null}));return function(){return f.value}}});(0,a.aZ)({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,c){var t=c.slots,i=n.vc.familyPrefix,r=(0,a.Fl)((function(){return["".concat(i,"-layers")].concat(f(e.fixedWidth?["".concat(i,"-fw")]:[]))}));return function(){return(0,a.h)("div",{class:r.value},t.default?t.default():[])}}}),(0,a.aZ)({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,c){var t=c.attrs,i=n.vc.familyPrefix,o=(0,a.Fl)((function(){return S("classes",[].concat(f(e.counter?["".concat(i,"-layers-counter")]:[]),f(e.position?["".concat(i,"-layers-").concat(e.position)]:[])))})),s=(0,a.Fl)((function(){return S("transform","string"===typeof e.transform?n.Qc.transform(e.transform):e.transform)})),l=(0,a.Fl)((function(){var c=(0,n.fL)(e.value.toString(),r(r({},s.value),o.value)),t=c.abstract;return e.counter&&(t[0].attributes.class=t[0].attributes.class.replace("fa-layers-text","")),t[0]})),u=(0,a.Fl)((function(){return L(l.value,{},t)}));return function(){return u.value}}})},4870:function(e,c,t){t.d(c,{B:function(){return r},BK:function(){return De},Bj:function(){return i},EB:function(){return l},Fl:function(){return qe},IU:function(){return xe},Jd:function(){return x},OT:function(){return He},PG:function(){return be},SU:function(){return Fe},Um:function(){return Ve},Vh:function(){return Ue},WL:function(){return Re},X$:function(){return N},X3:function(){return Le},XI:function(){return Ie},Xl:function(){return we},dq:function(){return Ae},iH:function(){return Ee},j:function(){return S},lk:function(){return w},nZ:function(){return s},qj:function(){return ge},qq:function(){return b},yT:function(){return ye}});t(560);var n=t(7139);let a;class i{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=a,!e&&a&&(this.index=(a.scopes||(a.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const c=a;try{return a=this,e()}finally{a=c}}else 0}on(){a=this}off(){a=this.parent}stop(e){if(this._active){let c,t;for(c=0,t=this.effects.length;c<t;c++)this.effects[c].stop();for(c=0,t=this.cleanups.length;c<t;c++)this.cleanups[c]();if(this.scopes)for(c=0,t=this.scopes.length;c<t;c++)this.scopes[c].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this._active=!1}}}function r(e){return new i(e)}function o(e,c=a){c&&c.active&&c.effects.push(e)}function s(){return a}function l(e){a&&a.cleanups.push(e)}const u=e=>{const c=new Set(e);return c.w=0,c.n=0,c},f=e=>(e.w&z)>0,d=e=>(e.n&z)>0,m=({deps:e})=>{if(e.length)for(let c=0;c<e.length;c++)e[c].w|=z},p=e=>{const{deps:c}=e;if(c.length){let t=0;for(let n=0;n<c.length;n++){const a=c[n];f(a)&&!d(a)?a.delete(e):c[t++]=a,a.w&=~z,a.n&=~z}c.length=t}},h=new WeakMap;let v=0,z=1;const g=30;let V;const H=Symbol(""),C=Symbol("");class b{constructor(e,c=null,t){this.fn=e,this.scheduler=c,this.active=!0,this.deps=[],this.parent=void 0,o(this,t)}run(){if(!this.active)return this.fn();let e=V,c=y;while(e){if(e===this)return;e=e.parent}try{return this.parent=V,V=this,y=!0,z=1<<++v,v<=g?m(this):M(this),this.fn()}finally{v<=g&&p(this),z=1<<--v,V=this.parent,y=c,this.parent=void 0,this.deferStop&&this.stop()}}stop(){V===this?this.deferStop=!0:this.active&&(M(this),this.onStop&&this.onStop(),this.active=!1)}}function M(e){const{deps:c}=e;if(c.length){for(let t=0;t<c.length;t++)c[t].delete(e);c.length=0}}let y=!0;const L=[];function x(){L.push(y),y=!1}function w(){const e=L.pop();y=void 0===e||e}function S(e,c,t){if(y&&V){let c=h.get(e);c||h.set(e,c=new Map);let n=c.get(t);n||c.set(t,n=u());const a=void 0;k(n,a)}}function k(e,c){let t=!1;v<=g?d(e)||(e.n|=z,t=!f(e)):t=!e.has(V),t&&(e.add(V),V.deps.push(e))}function N(e,c,t,a,i,r){const o=h.get(e);if(!o)return;let s=[];if("clear"===c)s=[...o.values()];else if("length"===t&&(0,n.kJ)(e)){const e=Number(a);o.forEach(((c,t)=>{("length"===t||!(0,n.yk)(t)&&t>=e)&&s.push(c)}))}else switch(void 0!==t&&s.push(o.get(t)),c){case"add":(0,n.kJ)(e)?(0,n.S0)(t)&&s.push(o.get("length")):(s.push(o.get(H)),(0,n._N)(e)&&s.push(o.get(C)));break;case"delete":(0,n.kJ)(e)||(s.push(o.get(H)),(0,n._N)(e)&&s.push(o.get(C)));break;case"set":(0,n._N)(e)&&s.push(o.get(H));break}if(1===s.length)s[0]&&_(s[0]);else{const e=[];for(const c of s)c&&e.push(...c);_(u(e))}}function _(e,c){const t=(0,n.kJ)(e)?e:[...e];for(const n of t)n.computed&&A(n,c);for(const n of t)n.computed||A(n,c)}function A(e,c){(e!==V||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function E(e,c){var t;return null==(t=h.get(e))?void 0:t.get(c)}const I=(0,n.fY)("__proto__,__v_isRef,__isVue"),T=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(n.yk)),P=F();function F(){const e={};return["includes","indexOf","lastIndexOf"].forEach((c=>{e[c]=function(...e){const t=xe(this);for(let c=0,a=this.length;c<a;c++)S(t,"get",c+"");const n=t[c](...e);return-1===n||!1===n?t[c](...e.map(xe)):n}})),["push","pop","shift","unshift","splice"].forEach((c=>{e[c]=function(...e){x();const t=xe(this)[c].apply(this,e);return w(),t}})),e}function O(e){const c=xe(this);return S(c,"has",e),c.hasOwnProperty(e)}class R{constructor(e=!1,c=!1){this._isReadonly=e,this._shallow=c}get(e,c,t){const a=this._isReadonly,i=this._shallow;if("__v_isReactive"===c)return!a;if("__v_isReadonly"===c)return a;if("__v_isShallow"===c)return i;if("__v_raw"===c&&t===(a?i?he:pe:i?me:de).get(e))return e;const r=(0,n.kJ)(e);if(!a){if(r&&(0,n.RI)(P,c))return Reflect.get(P,c,t);if("hasOwnProperty"===c)return O}const o=Reflect.get(e,c,t);return((0,n.yk)(c)?T.has(c):I(c))?o:(a||S(e,"get",c),i?o:Ae(o)?r&&(0,n.S0)(c)?o:o.value:(0,n.Kn)(o)?a?He(o):ge(o):o)}}class D extends R{constructor(e=!1){super(!1,e)}set(e,c,t,a){let i=e[c];if(Me(i)&&Ae(i)&&!Ae(t))return!1;if(!this._shallow&&(ye(t)||Me(t)||(i=xe(i),t=xe(t)),!(0,n.kJ)(e)&&Ae(i)&&!Ae(t)))return i.value=t,!0;const r=(0,n.kJ)(e)&&(0,n.S0)(c)?Number(c)<e.length:(0,n.RI)(e,c),o=Reflect.set(e,c,t,a);return e===xe(a)&&(r?(0,n.aU)(t,i)&&N(e,"set",c,t,i):N(e,"add",c,t)),o}deleteProperty(e,c){const t=(0,n.RI)(e,c),a=e[c],i=Reflect.deleteProperty(e,c);return i&&t&&N(e,"delete",c,void 0,a),i}has(e,c){const t=Reflect.has(e,c);return(0,n.yk)(c)&&T.has(c)||S(e,"has",c),t}ownKeys(e){return S(e,"iterate",(0,n.kJ)(e)?"length":H),Reflect.ownKeys(e)}}class B extends R{constructor(e=!1){super(!0,e)}set(e,c){return!0}deleteProperty(e,c){return!0}}const W=new D,U=new B,$=new D(!0),j=e=>e,q=e=>Reflect.getPrototypeOf(e);function G(e,c,t=!1,a=!1){e=e["__v_raw"];const i=xe(e),r=xe(c);t||((0,n.aU)(c,r)&&S(i,"get",c),S(i,"get",r));const{has:o}=q(i),s=a?j:t?ke:Se;return o.call(i,c)?s(e.get(c)):o.call(i,r)?s(e.get(r)):void(e!==i&&e.get(c))}function Y(e,c=!1){const t=this["__v_raw"],a=xe(t),i=xe(e);return c||((0,n.aU)(e,i)&&S(a,"has",e),S(a,"has",i)),e===i?t.has(e):t.has(e)||t.has(i)}function Z(e,c=!1){return e=e["__v_raw"],!c&&S(xe(e),"iterate",H),Reflect.get(e,"size",e)}function K(e){e=xe(e);const c=xe(this),t=q(c),n=t.has.call(c,e);return n||(c.add(e),N(c,"add",e,e)),this}function X(e,c){c=xe(c);const t=xe(this),{has:a,get:i}=q(t);let r=a.call(t,e);r||(e=xe(e),r=a.call(t,e));const o=i.call(t,e);return t.set(e,c),r?(0,n.aU)(c,o)&&N(t,"set",e,c,o):N(t,"add",e,c),this}function J(e){const c=xe(this),{has:t,get:n}=q(c);let a=t.call(c,e);a||(e=xe(e),a=t.call(c,e));const i=n?n.call(c,e):void 0,r=c.delete(e);return a&&N(c,"delete",e,void 0,i),r}function Q(){const e=xe(this),c=0!==e.size,t=void 0,n=e.clear();return c&&N(e,"clear",void 0,void 0,t),n}function ee(e,c){return function(t,n){const a=this,i=a["__v_raw"],r=xe(i),o=c?j:e?ke:Se;return!e&&S(r,"iterate",H),i.forEach(((e,c)=>t.call(n,o(e),o(c),a)))}}function ce(e,c,t){return function(...a){const i=this["__v_raw"],r=xe(i),o=(0,n._N)(r),s="entries"===e||e===Symbol.iterator&&o,l="keys"===e&&o,u=i[e](...a),f=t?j:c?ke:Se;return!c&&S(r,"iterate",l?C:H),{next(){const{value:e,done:c}=u.next();return c?{value:e,done:c}:{value:s?[f(e[0]),f(e[1])]:f(e),done:c}},[Symbol.iterator](){return this}}}}function te(e){return function(...c){return"delete"!==e&&this}}function ne(){const e={get(e){return G(this,e)},get size(){return Z(this)},has:Y,add:K,set:X,delete:J,clear:Q,forEach:ee(!1,!1)},c={get(e){return G(this,e,!1,!0)},get size(){return Z(this)},has:Y,add:K,set:X,delete:J,clear:Q,forEach:ee(!1,!0)},t={get(e){return G(this,e,!0)},get size(){return Z(this,!0)},has(e){return Y.call(this,e,!0)},add:te("add"),set:te("set"),delete:te("delete"),clear:te("clear"),forEach:ee(!0,!1)},n={get(e){return G(this,e,!0,!0)},get size(){return Z(this,!0)},has(e){return Y.call(this,e,!0)},add:te("add"),set:te("set"),delete:te("delete"),clear:te("clear"),forEach:ee(!0,!0)},a=["keys","values","entries",Symbol.iterator];return a.forEach((a=>{e[a]=ce(a,!1,!1),t[a]=ce(a,!0,!1),c[a]=ce(a,!1,!0),n[a]=ce(a,!0,!0)})),[e,t,c,n]}const[ae,ie,re,oe]=ne();function se(e,c){const t=c?e?oe:re:e?ie:ae;return(c,a,i)=>"__v_isReactive"===a?!e:"__v_isReadonly"===a?e:"__v_raw"===a?c:Reflect.get((0,n.RI)(t,a)&&a in c?t:c,a,i)}const le={get:se(!1,!1)},ue={get:se(!1,!0)},fe={get:se(!0,!1)};const de=new WeakMap,me=new WeakMap,pe=new WeakMap,he=new WeakMap;function ve(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ze(e){return e["__v_skip"]||!Object.isExtensible(e)?0:ve((0,n.W7)(e))}function ge(e){return Me(e)?e:Ce(e,!1,W,le,de)}function Ve(e){return Ce(e,!1,$,ue,me)}function He(e){return Ce(e,!0,U,fe,pe)}function Ce(e,c,t,a,i){if(!(0,n.Kn)(e))return e;if(e["__v_raw"]&&(!c||!e["__v_isReactive"]))return e;const r=i.get(e);if(r)return r;const o=ze(e);if(0===o)return e;const s=new Proxy(e,2===o?a:t);return i.set(e,s),s}function be(e){return Me(e)?be(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Me(e){return!(!e||!e["__v_isReadonly"])}function ye(e){return!(!e||!e["__v_isShallow"])}function Le(e){return be(e)||Me(e)}function xe(e){const c=e&&e["__v_raw"];return c?xe(c):e}function we(e){return(0,n.Nj)(e,"__v_skip",!0),e}const Se=e=>(0,n.Kn)(e)?ge(e):e,ke=e=>(0,n.Kn)(e)?He(e):e;function Ne(e){y&&V&&(e=xe(e),k(e.dep||(e.dep=u())))}function _e(e,c){e=xe(e);const t=e.dep;t&&_(t)}function Ae(e){return!(!e||!0!==e.__v_isRef)}function Ee(e){return Te(e,!1)}function Ie(e){return Te(e,!0)}function Te(e,c){return Ae(e)?e:new Pe(e,c)}class Pe{constructor(e,c){this.__v_isShallow=c,this.dep=void 0,this.__v_isRef=!0,this._rawValue=c?e:xe(e),this._value=c?e:Se(e)}get value(){return Ne(this),this._value}set value(e){const c=this.__v_isShallow||ye(e)||Me(e);e=c?e:xe(e),(0,n.aU)(e,this._rawValue)&&(this._rawValue=e,this._value=c?e:Se(e),_e(this,e))}}function Fe(e){return Ae(e)?e.value:e}const Oe={get:(e,c,t)=>Fe(Reflect.get(e,c,t)),set:(e,c,t,n)=>{const a=e[c];return Ae(a)&&!Ae(t)?(a.value=t,!0):Reflect.set(e,c,t,n)}};function Re(e){return be(e)?e:new Proxy(e,Oe)}function De(e){const c=(0,n.kJ)(e)?new Array(e.length):{};for(const t in e)c[t]=$e(e,t);return c}class Be{constructor(e,c,t){this._object=e,this._key=c,this._defaultValue=t,this.__v_isRef=!0}get value(){const e=this._object[this._key];return void 0===e?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return E(xe(this._object),this._key)}}class We{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Ue(e,c,t){return Ae(e)?e:(0,n.mf)(e)?new We(e):(0,n.Kn)(e)&&arguments.length>1?$e(e,c,t):Ee(e)}function $e(e,c,t){const n=e[c];return Ae(n)?n:new Be(e,c,t)}class je{constructor(e,c,t,n){this._setter=c,this.dep=void 0,this.__v_isRef=!0,this["__v_isReadonly"]=!1,this._dirty=!0,this.effect=new b(e,(()=>{this._dirty||(this._dirty=!0,_e(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!n,this["__v_isReadonly"]=t}get value(){const e=xe(this);return Ne(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function qe(e,c,t=!1){let a,i;const r=(0,n.mf)(e);r?(a=e,i=n.dG):(a=e.get,i=e.set);const o=new je(a,i,r||!i,t);return o}},3396:function(e,c,t){t.d(c,{$d:function(){return o},Ah:function(){return De},Cn:function(){return F},FN:function(){return It},Fl:function(){return Qt},HY:function(){return et},Ho:function(){return bt},JJ:function(){return gc},Jd:function(){return Re},Ko:function(){return je},LL:function(){return Z},P$:function(){return ve},Q2:function(){return K},Q6:function(){return be},U2:function(){return ge},Uk:function(){return Mt},Us:function(){return Rc},WI:function(){return qe},Wm:function(){return Vt},Xn:function(){return Fe},Y3:function(){return V},Y8:function(){return de},YP:function(){return ne},ZK:function(){return i},_:function(){return gt},aZ:function(){return Me},bv:function(){return Pe},dD:function(){return P},dG:function(){return St},dl:function(){return we},f3:function(){return Vc},h:function(){return en},iD:function(){return ft},ic:function(){return Oe},j4:function(){return dt},kq:function(){return yt},lA:function(){return mt},lR:function(){return Jc},m0:function(){return ce},nJ:function(){return pe},nK:function(){return Ce},se:function(){return Se},sv:function(){return tt},up:function(){return G},w5:function(){return O},wF:function(){return Te},wg:function(){return rt},wy:function(){return se},xv:function(){return ct}});t(560);var n=t(4870),a=t(7139);function i(e,...c){}function r(e,c,t,n){let a;try{a=n?e(...n):e()}catch(i){s(i,c,t)}return a}function o(e,c,t,n){if((0,a.mf)(e)){const i=r(e,c,t,n);return i&&(0,a.tI)(i)&&i.catch((e=>{s(e,c,t)})),i}const i=[];for(let a=0;a<e.length;a++)i.push(o(e[a],c,t,n));return i}function s(e,c,t,n=!0){const a=c?c.vnode:null;if(c){let n=c.parent;const a=c.proxy,i=t;while(n){const c=n.ec;if(c)for(let t=0;t<c.length;t++)if(!1===c[t](e,a,i))return;n=n.parent}const o=c.appContext.config.errorHandler;if(o)return void r(o,null,10,[e,a,i])}l(e,t,a,n)}function l(e,c,t,n=!0){console.error(e)}let u=!1,f=!1;const d=[];let m=0;const p=[];let h=null,v=0;const z=Promise.resolve();let g=null;function V(e){const c=g||z;return e?c.then(this?e.bind(this):e):c}function H(e){let c=m+1,t=d.length;while(c<t){const n=c+t>>>1,a=d[n],i=w(a);i<e||i===e&&a.pre?c=n+1:t=n}return c}function C(e){d.length&&d.includes(e,u&&e.allowRecurse?m+1:m)||(null==e.id?d.push(e):d.splice(H(e.id),0,e),b())}function b(){u||f||(f=!0,g=z.then(k))}function M(e){const c=d.indexOf(e);c>m&&d.splice(c,1)}function y(e){(0,a.kJ)(e)?p.push(...e):h&&h.includes(e,e.allowRecurse?v+1:v)||p.push(e),b()}function L(e,c=(u?m+1:0)){for(0;c<d.length;c++){const e=d[c];e&&e.pre&&(d.splice(c,1),c--,e())}}function x(e){if(p.length){const e=[...new Set(p)];if(p.length=0,h)return void h.push(...e);for(h=e,h.sort(((e,c)=>w(e)-w(c))),v=0;v<h.length;v++)h[v]();h=null,v=0}}const w=e=>null==e.id?1/0:e.id,S=(e,c)=>{const t=w(e)-w(c);if(0===t){if(e.pre&&!c.pre)return-1;if(c.pre&&!e.pre)return 1}return t};function k(e){f=!1,u=!0,d.sort(S);a.dG;try{for(m=0;m<d.length;m++){const e=d[m];e&&!1!==e.active&&r(e,null,14)}}finally{m=0,d.length=0,x(e),u=!1,g=null,(d.length||p.length)&&k(e)}}function N(e,c,...t){if(e.isUnmounted)return;const n=e.vnode.props||a.kT;let i=t;const r=c.startsWith("update:"),s=r&&c.slice(7);if(s&&s in n){const e=`${"modelValue"===s?"model":s}Modifiers`,{number:c,trim:r}=n[e]||a.kT;r&&(i=t.map((e=>(0,a.HD)(e)?e.trim():e))),c&&(i=t.map(a.h5))}let l;let u=n[l=(0,a.hR)(c)]||n[l=(0,a.hR)((0,a._A)(c))];!u&&r&&(u=n[l=(0,a.hR)((0,a.rs)(c))]),u&&o(u,e,6,i);const f=n[l+"Once"];if(f){if(e.emitted){if(e.emitted[l])return}else e.emitted={};e.emitted[l]=!0,o(f,e,6,i)}}function _(e,c,t=!1){const n=c.emitsCache,i=n.get(e);if(void 0!==i)return i;const r=e.emits;let o={},s=!1;if(!(0,a.mf)(e)){const n=e=>{const t=_(e,c,!0);t&&(s=!0,(0,a.l7)(o,t))};!t&&c.mixins.length&&c.mixins.forEach(n),e.extends&&n(e.extends),e.mixins&&e.mixins.forEach(n)}return r||s?((0,a.kJ)(r)?r.forEach((e=>o[e]=null)):(0,a.l7)(o,r),(0,a.Kn)(e)&&n.set(e,o),o):((0,a.Kn)(e)&&n.set(e,null),null)}function A(e,c){return!(!e||!(0,a.F7)(c))&&(c=c.slice(2).replace(/Once$/,""),(0,a.RI)(e,c[0].toLowerCase()+c.slice(1))||(0,a.RI)(e,(0,a.rs)(c))||(0,a.RI)(e,c))}let E=null,I=null;function T(e){const c=E;return E=e,I=e&&e.type.__scopeId||null,c}function P(e){I=e}function F(){I=null}function O(e,c=E,t){if(!c)return e;if(e._n)return e;const n=(...t)=>{n._d&&lt(-1);const a=T(c);let i;try{i=e(...t)}finally{T(a),n._d&&lt(1)}return i};return n._n=!0,n._c=!0,n._d=!0,n}function R(e){const{type:c,vnode:t,proxy:n,withProxy:i,props:r,propsOptions:[o],slots:l,attrs:u,emit:f,render:d,renderCache:m,data:p,setupState:h,ctx:v,inheritAttrs:z}=e;let g,V;const H=T(e);try{if(4&t.shapeFlag){const e=i||n;g=Lt(d.call(e,e,m,r,h,p,v)),V=u}else{const e=c;0,g=Lt(e.length>1?e(r,{attrs:u,slots:l,emit:f}):e(r,null)),V=c.props?u:D(u)}}catch(b){at.length=0,s(b,e,1),g=Vt(tt)}let C=g;if(V&&!1!==z){const e=Object.keys(V),{shapeFlag:c}=C;e.length&&7&c&&(o&&e.some(a.tR)&&(V=B(V,o)),C=bt(C,V))}return t.dirs&&(C=bt(C),C.dirs=C.dirs?C.dirs.concat(t.dirs):t.dirs),t.transition&&(C.transition=t.transition),g=C,T(H),g}const D=e=>{let c;for(const t in e)("class"===t||"style"===t||(0,a.F7)(t))&&((c||(c={}))[t]=e[t]);return c},B=(e,c)=>{const t={};for(const n in e)(0,a.tR)(n)&&n.slice(9)in c||(t[n]=e[n]);return t};function W(e,c,t){const{props:n,children:a,component:i}=e,{props:r,children:o,patchFlag:s}=c,l=i.emitsOptions;if(c.dirs||c.transition)return!0;if(!(t&&s>=0))return!(!a&&!o||o&&o.$stable)||n!==r&&(n?!r||U(n,r,l):!!r);if(1024&s)return!0;if(16&s)return n?U(n,r,l):!!r;if(8&s){const e=c.dynamicProps;for(let c=0;c<e.length;c++){const t=e[c];if(r[t]!==n[t]&&!A(l,t))return!0}}return!1}function U(e,c,t){const n=Object.keys(c);if(n.length!==Object.keys(e).length)return!0;for(let a=0;a<n.length;a++){const i=n[a];if(c[i]!==e[i]&&!A(t,i))return!0}return!1}function $({vnode:e,parent:c},t){while(c&&c.subTree===e)(e=c.vnode).el=t,c=c.parent}const j="components",q="directives";function G(e,c){return X(j,e,!0,c)||e}const Y=Symbol.for("v-ndc");function Z(e){return(0,a.HD)(e)?X(j,e,!1)||e:e||Y}function K(e){return X(q,e)}function X(e,c,t=!0,n=!1){const i=E||Et;if(i){const t=i.type;if(e===j){const e=Xt(t,!1);if(e&&(e===c||e===(0,a._A)(c)||e===(0,a.kC)((0,a._A)(c))))return t}const r=J(i[e]||t[e],c)||J(i.appContext[e],c);return!r&&n?t:r}}function J(e,c){return e&&(e[c]||e[(0,a._A)(c)]||e[(0,a.kC)((0,a._A)(c))])}const Q=e=>e.__isSuspense;function ee(e,c){c&&c.pendingBranch?(0,a.kJ)(e)?c.effects.push(...e):c.effects.push(e):y(e)}function ce(e,c){return ae(e,null,c)}const te={};function ne(e,c,t){return ae(e,c,t)}function ae(e,c,{immediate:t,deep:i,flush:s,onTrack:l,onTrigger:u}=a.kT){var f;const d=(0,n.nZ)()===(null==(f=Et)?void 0:f.scope)?Et:null;let m,p,h=!1,v=!1;if((0,n.dq)(e)?(m=()=>e.value,h=(0,n.yT)(e)):(0,n.PG)(e)?(m=()=>e,i=!0):(0,a.kJ)(e)?(v=!0,h=e.some((e=>(0,n.PG)(e)||(0,n.yT)(e))),m=()=>e.map((e=>(0,n.dq)(e)?e.value:(0,n.PG)(e)?oe(e):(0,a.mf)(e)?r(e,d,2):void 0))):m=(0,a.mf)(e)?c?()=>r(e,d,2):()=>{if(!d||!d.isUnmounted)return p&&p(),o(e,d,3,[g])}:a.dG,c&&i){const e=m;m=()=>oe(e())}let z,g=e=>{p=M.onStop=()=>{r(e,d,4)}};if(Ut){if(g=a.dG,c?t&&o(c,d,3,[m(),v?[]:void 0,g]):m(),"sync"!==s)return a.dG;{const e=tn();z=e.__watcherHandles||(e.__watcherHandles=[])}}let V=v?new Array(e.length).fill(te):te;const H=()=>{if(M.active)if(c){const e=M.run();(i||h||(v?e.some(((e,c)=>(0,a.aU)(e,V[c]))):(0,a.aU)(e,V)))&&(p&&p(),o(c,d,3,[e,V===te?void 0:v&&V[0]===te?[]:V,g]),V=e)}else M.run()};let b;H.allowRecurse=!!c,"sync"===s?b=H:"post"===s?b=()=>Oc(H,d&&d.suspense):(H.pre=!0,d&&(H.id=d.uid),b=()=>C(H));const M=new n.qq(m,b);c?t?H():V=M.run():"post"===s?Oc(M.run.bind(M),d&&d.suspense):M.run();const y=()=>{M.stop(),d&&d.scope&&(0,a.Od)(d.scope.effects,M)};return z&&z.push(y),y}function ie(e,c,t){const n=this.proxy,i=(0,a.HD)(e)?e.includes(".")?re(n,e):()=>n[e]:e.bind(n,n);let r;(0,a.mf)(c)?r=c:(r=c.handler,t=c);const o=Et;Ot(this);const s=ae(i,r.bind(n),t);return o?Ot(o):Rt(),s}function re(e,c){const t=c.split(".");return()=>{let c=e;for(let e=0;e<t.length&&c;e++)c=c[t[e]];return c}}function oe(e,c){if(!(0,a.Kn)(e)||e["__v_skip"])return e;if(c=c||new Set,c.has(e))return e;if(c.add(e),(0,n.dq)(e))oe(e.value,c);else if((0,a.kJ)(e))for(let t=0;t<e.length;t++)oe(e[t],c);else if((0,a.DM)(e)||(0,a._N)(e))e.forEach((e=>{oe(e,c)}));else if((0,a.PO)(e))for(const t in e)oe(e[t],c);return e}function se(e,c){const t=E;if(null===t)return e;const n=Kt(t)||t.proxy,i=e.dirs||(e.dirs=[]);for(let r=0;r<c.length;r++){let[e,t,o,s=a.kT]=c[r];e&&((0,a.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&oe(t),i.push({dir:e,instance:n,value:t,oldValue:void 0,arg:o,modifiers:s}))}return e}function le(e,c,t,a){const i=e.dirs,r=c&&c.dirs;for(let s=0;s<i.length;s++){const l=i[s];r&&(l.oldValue=r[s].value);let u=l.dir[a];u&&((0,n.Jd)(),o(u,t,8,[e.el,l,e,c]),(0,n.lk)())}}const ue=Symbol("_leaveCb"),fe=Symbol("_enterCb");function de(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Pe((()=>{e.isMounted=!0})),Re((()=>{e.isUnmounting=!0})),e}const me=[Function,Array],pe={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:me,onEnter:me,onAfterEnter:me,onEnterCancelled:me,onBeforeLeave:me,onLeave:me,onAfterLeave:me,onLeaveCancelled:me,onBeforeAppear:me,onAppear:me,onAfterAppear:me,onAppearCancelled:me},he={name:"BaseTransition",props:pe,setup(e,{slots:c}){const t=It(),a=de();let i;return()=>{const r=c.default&&be(c.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){let e=!1;for(const c of r)if(c.type!==tt){0,o=c,e=!0;break}}const s=(0,n.IU)(e),{mode:l}=s;if(a.isLeaving)return Ve(o);const u=He(o);if(!u)return Ve(o);const f=ge(u,s,a,t);Ce(u,f);const d=t.subTree,m=d&&He(d);let p=!1;const{getTransitionKey:h}=u.type;if(h){const e=h();void 0===i?i=e:e!==i&&(i=e,p=!0)}if(m&&m.type!==tt&&(!pt(u,m)||p)){const e=ge(m,s,a,t);if(Ce(m,e),"out-in"===l)return a.isLeaving=!0,e.afterLeave=()=>{a.isLeaving=!1,!1!==t.update.active&&t.update()},Ve(o);"in-out"===l&&u.type!==tt&&(e.delayLeave=(e,c,t)=>{const n=ze(a,m);n[String(m.key)]=m,e[ue]=()=>{c(),e[ue]=void 0,delete f.delayedLeave},f.delayedLeave=t})}return o}}},ve=he;function ze(e,c){const{leavingVNodes:t}=e;let n=t.get(c.type);return n||(n=Object.create(null),t.set(c.type,n)),n}function ge(e,c,t,n){const{appear:i,mode:r,persisted:s=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:f,onEnterCancelled:d,onBeforeLeave:m,onLeave:p,onAfterLeave:h,onLeaveCancelled:v,onBeforeAppear:z,onAppear:g,onAfterAppear:V,onAppearCancelled:H}=c,C=String(e.key),b=ze(t,e),M=(e,c)=>{e&&o(e,n,9,c)},y=(e,c)=>{const t=c[1];M(e,c),(0,a.kJ)(e)?e.every((e=>e.length<=1))&&t():e.length<=1&&t()},L={mode:r,persisted:s,beforeEnter(c){let n=l;if(!t.isMounted){if(!i)return;n=z||l}c[ue]&&c[ue](!0);const a=b[C];a&&pt(e,a)&&a.el[ue]&&a.el[ue](),M(n,[c])},enter(e){let c=u,n=f,a=d;if(!t.isMounted){if(!i)return;c=g||u,n=V||f,a=H||d}let r=!1;const o=e[fe]=c=>{r||(r=!0,M(c?a:n,[e]),L.delayedLeave&&L.delayedLeave(),e[fe]=void 0)};c?y(c,[e,o]):o()},leave(c,n){const a=String(e.key);if(c[fe]&&c[fe](!0),t.isUnmounting)return n();M(m,[c]);let i=!1;const r=c[ue]=t=>{i||(i=!0,n(),M(t?v:h,[c]),c[ue]=void 0,b[a]===e&&delete b[a])};b[a]=e,p?y(p,[c,r]):r()},clone(e){return ge(e,c,t,n)}};return L}function Ve(e){if(Le(e))return e=bt(e),e.children=null,e}function He(e){return Le(e)?e.children?e.children[0]:void 0:e}function Ce(e,c){6&e.shapeFlag&&e.component?Ce(e.component.subTree,c):128&e.shapeFlag?(e.ssContent.transition=c.clone(e.ssContent),e.ssFallback.transition=c.clone(e.ssFallback)):e.transition=c}function be(e,c=!1,t){let n=[],a=0;for(let i=0;i<e.length;i++){let r=e[i];const o=null==t?r.key:String(t)+String(null!=r.key?r.key:i);r.type===et?(128&r.patchFlag&&a++,n=n.concat(be(r.children,c,o))):(c||r.type!==tt)&&n.push(null!=o?bt(r,{key:o}):r)}if(a>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}
/*! #__NO_SIDE_EFFECTS__ */function Me(e,c){return(0,a.mf)(e)?(()=>(0,a.l7)({name:e.name},c,{setup:e}))():e}const ye=e=>!!e.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */;const Le=e=>e.type.__isKeepAlive;RegExp,RegExp;function xe(e,c){return(0,a.kJ)(e)?e.some((e=>xe(e,c))):(0,a.HD)(e)?e.split(",").includes(c):!!(0,a.Kj)(e)&&e.test(c)}function we(e,c){ke(e,"a",c)}function Se(e,c){ke(e,"da",c)}function ke(e,c,t=Et){const n=e.__wdc||(e.__wdc=()=>{let c=t;while(c){if(c.isDeactivated)return;c=c.parent}return e()});if(Ee(c,n,t),t){let e=t.parent;while(e&&e.parent)Le(e.parent.vnode)&&Ne(n,c,t,e),e=e.parent}}function Ne(e,c,t,n){const i=Ee(c,e,n,!0);De((()=>{(0,a.Od)(n[c],i)}),t)}function _e(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Ae(e){return 128&e.shapeFlag?e.ssContent:e}function Ee(e,c,t=Et,a=!1){if(t){const i=t[e]||(t[e]=[]),r=c.__weh||(c.__weh=(...a)=>{if(t.isUnmounted)return;(0,n.Jd)(),Ot(t);const i=o(c,t,e,a);return Rt(),(0,n.lk)(),i});return a?i.unshift(r):i.push(r),r}}const Ie=e=>(c,t=Et)=>(!Ut||"sp"===e)&&Ee(e,((...e)=>c(...e)),t),Te=Ie("bm"),Pe=Ie("m"),Fe=Ie("bu"),Oe=Ie("u"),Re=Ie("bum"),De=Ie("um"),Be=Ie("sp"),We=Ie("rtg"),Ue=Ie("rtc");function $e(e,c=Et){Ee("ec",e,c)}function je(e,c,t,n){let i;const r=t&&t[n];if((0,a.kJ)(e)||(0,a.HD)(e)){i=new Array(e.length);for(let t=0,n=e.length;t<n;t++)i[t]=c(e[t],t,void 0,r&&r[t])}else if("number"===typeof e){0,i=new Array(e);for(let t=0;t<e;t++)i[t]=c(t+1,t,void 0,r&&r[t])}else if((0,a.Kn)(e))if(e[Symbol.iterator])i=Array.from(e,((e,t)=>c(e,t,void 0,r&&r[t])));else{const t=Object.keys(e);i=new Array(t.length);for(let n=0,a=t.length;n<a;n++){const a=t[n];i[n]=c(e[a],a,n,r&&r[n])}}else i=[];return t&&(t[n]=i),i}function qe(e,c,t={},n,a){if(E.isCE||E.parent&&ye(E.parent)&&E.parent.isCE)return"default"!==c&&(t.name=c),Vt("slot",t,n&&n());let i=e[c];i&&i._c&&(i._d=!1),rt();const r=i&&Ge(i(t)),o=dt(et,{key:t.key||r&&r.key||`_${c}`},r||(n?n():[]),r&&1===e._?64:-2);return!a&&o.scopeId&&(o.slotScopeIds=[o.scopeId+"-s"]),i&&i._c&&(i._d=!0),o}function Ge(e){return e.some((e=>!mt(e)||e.type!==tt&&!(e.type===et&&!Ge(e.children))))?e:null}const Ye=e=>e?Dt(e)?Kt(e)||e.proxy:Ye(e.parent):null,Ze=(0,a.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ye(e.parent),$root:e=>Ye(e.root),$emit:e=>e.emit,$options:e=>ac(e),$forceUpdate:e=>e.f||(e.f=()=>C(e.update)),$nextTick:e=>e.n||(e.n=V.bind(e.proxy)),$watch:e=>ie.bind(e)}),Ke=(e,c)=>e!==a.kT&&!e.__isScriptSetup&&(0,a.RI)(e,c),Xe={get({_:e},c){const{ctx:t,setupState:i,data:r,props:o,accessCache:s,type:l,appContext:u}=e;let f;if("$"!==c[0]){const n=s[c];if(void 0!==n)switch(n){case 1:return i[c];case 2:return r[c];case 4:return t[c];case 3:return o[c]}else{if(Ke(i,c))return s[c]=1,i[c];if(r!==a.kT&&(0,a.RI)(r,c))return s[c]=2,r[c];if((f=e.propsOptions[0])&&(0,a.RI)(f,c))return s[c]=3,o[c];if(t!==a.kT&&(0,a.RI)(t,c))return s[c]=4,t[c];Qe&&(s[c]=0)}}const d=Ze[c];let m,p;return d?("$attrs"===c&&(0,n.j)(e,"get",c),d(e)):(m=l.__cssModules)&&(m=m[c])?m:t!==a.kT&&(0,a.RI)(t,c)?(s[c]=4,t[c]):(p=u.config.globalProperties,(0,a.RI)(p,c)?p[c]:void 0)},set({_:e},c,t){const{data:n,setupState:i,ctx:r}=e;return Ke(i,c)?(i[c]=t,!0):n!==a.kT&&(0,a.RI)(n,c)?(n[c]=t,!0):!(0,a.RI)(e.props,c)&&(("$"!==c[0]||!(c.slice(1)in e))&&(r[c]=t,!0))},has({_:{data:e,setupState:c,accessCache:t,ctx:n,appContext:i,propsOptions:r}},o){let s;return!!t[o]||e!==a.kT&&(0,a.RI)(e,o)||Ke(c,o)||(s=r[0])&&(0,a.RI)(s,o)||(0,a.RI)(n,o)||(0,a.RI)(Ze,o)||(0,a.RI)(i.config.globalProperties,o)},defineProperty(e,c,t){return null!=t.get?e._.accessCache[c]=0:(0,a.RI)(t,"value")&&this.set(e,c,t.value,null),Reflect.defineProperty(e,c,t)}};function Je(e){return(0,a.kJ)(e)?e.reduce(((e,c)=>(e[c]=null,e)),{}):e}let Qe=!0;function ec(e){const c=ac(e),t=e.proxy,i=e.ctx;Qe=!1,c.beforeCreate&&tc(c.beforeCreate,e,"bc");const{data:r,computed:o,methods:s,watch:l,provide:u,inject:f,created:d,beforeMount:m,mounted:p,beforeUpdate:h,updated:v,activated:z,deactivated:g,beforeDestroy:V,beforeUnmount:H,destroyed:C,unmounted:b,render:M,renderTracked:y,renderTriggered:L,errorCaptured:x,serverPrefetch:w,expose:S,inheritAttrs:k,components:N,directives:_,filters:A}=c,E=null;if(f&&cc(f,i,E),s)for(const n in s){const e=s[n];(0,a.mf)(e)&&(i[n]=e.bind(t))}if(r){0;const c=r.call(t,t);0,(0,a.Kn)(c)&&(e.data=(0,n.qj)(c))}if(Qe=!0,o)for(const n in o){const e=o[n],c=(0,a.mf)(e)?e.bind(t,t):(0,a.mf)(e.get)?e.get.bind(t,t):a.dG;0;const r=!(0,a.mf)(e)&&(0,a.mf)(e.set)?e.set.bind(t):a.dG,s=Qt({get:c,set:r});Object.defineProperty(i,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e})}if(l)for(const n in l)nc(l[n],i,t,n);if(u){const e=(0,a.mf)(u)?u.call(t):u;Reflect.ownKeys(e).forEach((c=>{gc(c,e[c])}))}function I(e,c){(0,a.kJ)(c)?c.forEach((c=>e(c.bind(t)))):c&&e(c.bind(t))}if(d&&tc(d,e,"c"),I(Te,m),I(Pe,p),I(Fe,h),I(Oe,v),I(we,z),I(Se,g),I($e,x),I(Ue,y),I(We,L),I(Re,H),I(De,b),I(Be,w),(0,a.kJ)(S))if(S.length){const c=e.exposed||(e.exposed={});S.forEach((e=>{Object.defineProperty(c,e,{get:()=>t[e],set:c=>t[e]=c})}))}else e.exposed||(e.exposed={});M&&e.render===a.dG&&(e.render=M),null!=k&&(e.inheritAttrs=k),N&&(e.components=N),_&&(e.directives=_)}function cc(e,c,t=a.dG){(0,a.kJ)(e)&&(e=lc(e));for(const i in e){const t=e[i];let r;r=(0,a.Kn)(t)?"default"in t?Vc(t.from||i,t.default,!0):Vc(t.from||i):Vc(t),(0,n.dq)(r)?Object.defineProperty(c,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:e=>r.value=e}):c[i]=r}}function tc(e,c,t){o((0,a.kJ)(e)?e.map((e=>e.bind(c.proxy))):e.bind(c.proxy),c,t)}function nc(e,c,t,n){const i=n.includes(".")?re(t,n):()=>t[n];if((0,a.HD)(e)){const t=c[e];(0,a.mf)(t)&&ne(i,t)}else if((0,a.mf)(e))ne(i,e.bind(t));else if((0,a.Kn)(e))if((0,a.kJ)(e))e.forEach((e=>nc(e,c,t,n)));else{const n=(0,a.mf)(e.handler)?e.handler.bind(t):c[e.handler];(0,a.mf)(n)&&ne(i,n,e)}else 0}function ac(e){const c=e.type,{mixins:t,extends:n}=c,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=e.appContext,s=r.get(c);let l;return s?l=s:i.length||t||n?(l={},i.length&&i.forEach((e=>ic(l,e,o,!0))),ic(l,c,o)):l=c,(0,a.Kn)(c)&&r.set(c,l),l}function ic(e,c,t,n=!1){const{mixins:a,extends:i}=c;i&&ic(e,i,t,!0),a&&a.forEach((c=>ic(e,c,t,!0)));for(const r in c)if(n&&"expose"===r);else{const n=rc[r]||t&&t[r];e[r]=n?n(e[r],c[r]):c[r]}return e}const rc={data:oc,props:dc,emits:dc,methods:fc,computed:fc,beforeCreate:uc,created:uc,beforeMount:uc,mounted:uc,beforeUpdate:uc,updated:uc,beforeDestroy:uc,beforeUnmount:uc,destroyed:uc,unmounted:uc,activated:uc,deactivated:uc,errorCaptured:uc,serverPrefetch:uc,components:fc,directives:fc,watch:mc,provide:oc,inject:sc};function oc(e,c){return c?e?function(){return(0,a.l7)((0,a.mf)(e)?e.call(this,this):e,(0,a.mf)(c)?c.call(this,this):c)}:c:e}function sc(e,c){return fc(lc(e),lc(c))}function lc(e){if((0,a.kJ)(e)){const c={};for(let t=0;t<e.length;t++)c[e[t]]=e[t];return c}return e}function uc(e,c){return e?[...new Set([].concat(e,c))]:c}function fc(e,c){return e?(0,a.l7)(Object.create(null),e,c):c}function dc(e,c){return e?(0,a.kJ)(e)&&(0,a.kJ)(c)?[...new Set([...e,...c])]:(0,a.l7)(Object.create(null),Je(e),Je(null!=c?c:{})):c}function mc(e,c){if(!e)return c;if(!c)return e;const t=(0,a.l7)(Object.create(null),e);for(const n in c)t[n]=uc(e[n],c[n]);return t}function pc(){return{app:null,config:{isNativeTag:a.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let hc=0;function vc(e,c){return function(t,n=null){(0,a.mf)(t)||(t=(0,a.l7)({},t)),null==n||(0,a.Kn)(n)||(n=null);const i=pc();const r=new WeakSet;let o=!1;const s=i.app={_uid:hc++,_component:t,_props:n,_container:null,_context:i,_instance:null,version:nn,get config(){return i.config},set config(e){0},use(e,...c){return r.has(e)||(e&&(0,a.mf)(e.install)?(r.add(e),e.install(s,...c)):(0,a.mf)(e)&&(r.add(e),e(s,...c))),s},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),s},component(e,c){return c?(i.components[e]=c,s):i.components[e]},directive(e,c){return c?(i.directives[e]=c,s):i.directives[e]},mount(a,r,l){if(!o){0;const u=Vt(t,n);return u.appContext=i,r&&c?c(u,a):e(u,a,l),o=!0,s._container=a,a.__vue_app__=s,Kt(u.component)||u.component.proxy}},unmount(){o&&(e(null,s._container),delete s._container.__vue_app__)},provide(e,c){return i.provides[e]=c,s},runWithContext(e){zc=s;try{return e()}finally{zc=null}}};return s}}let zc=null;function gc(e,c){if(Et){let t=Et.provides;const n=Et.parent&&Et.parent.provides;n===t&&(t=Et.provides=Object.create(n)),t[e]=c}else 0}function Vc(e,c,t=!1){const n=Et||E;if(n||zc){const i=n?null==n.parent?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:zc._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return t&&(0,a.mf)(c)?c.call(n&&n.proxy):c}else 0}function Hc(e,c,t,i=!1){const r={},o={};(0,a.Nj)(o,ht,1),e.propsDefaults=Object.create(null),bc(e,c,r,o);for(const n in e.propsOptions[0])n in r||(r[n]=void 0);t?e.props=i?r:(0,n.Um)(r):e.type.props?e.props=r:e.props=o,e.attrs=o}function Cc(e,c,t,i){const{props:r,attrs:o,vnode:{patchFlag:s}}=e,l=(0,n.IU)(r),[u]=e.propsOptions;let f=!1;if(!(i||s>0)||16&s){let n;bc(e,c,r,o)&&(f=!0);for(const i in l)c&&((0,a.RI)(c,i)||(n=(0,a.rs)(i))!==i&&(0,a.RI)(c,n))||(u?!t||void 0===t[i]&&void 0===t[n]||(r[i]=Mc(u,l,i,void 0,e,!0)):delete r[i]);if(o!==l)for(const e in o)c&&(0,a.RI)(c,e)||(delete o[e],f=!0)}else if(8&s){const t=e.vnode.dynamicProps;for(let n=0;n<t.length;n++){let i=t[n];if(A(e.emitsOptions,i))continue;const s=c[i];if(u)if((0,a.RI)(o,i))s!==o[i]&&(o[i]=s,f=!0);else{const c=(0,a._A)(i);r[c]=Mc(u,l,c,s,e,!1)}else s!==o[i]&&(o[i]=s,f=!0)}}f&&(0,n.X$)(e,"set","$attrs")}function bc(e,c,t,i){const[r,o]=e.propsOptions;let s,l=!1;if(c)for(let n in c){if((0,a.Gg)(n))continue;const u=c[n];let f;r&&(0,a.RI)(r,f=(0,a._A)(n))?o&&o.includes(f)?(s||(s={}))[f]=u:t[f]=u:A(e.emitsOptions,n)||n in i&&u===i[n]||(i[n]=u,l=!0)}if(o){const c=(0,n.IU)(t),i=s||a.kT;for(let n=0;n<o.length;n++){const s=o[n];t[s]=Mc(r,c,s,i[s],e,!(0,a.RI)(i,s))}}return l}function Mc(e,c,t,n,i,r){const o=e[t];if(null!=o){const e=(0,a.RI)(o,"default");if(e&&void 0===n){const e=o.default;if(o.type!==Function&&!o.skipFactory&&(0,a.mf)(e)){const{propsDefaults:a}=i;t in a?n=a[t]:(Ot(i),n=a[t]=e.call(null,c),Rt())}else n=e}o[0]&&(r&&!e?n=!1:!o[1]||""!==n&&n!==(0,a.rs)(t)||(n=!0))}return n}function yc(e,c,t=!1){const n=c.propsCache,i=n.get(e);if(i)return i;const r=e.props,o={},s=[];let l=!1;if(!(0,a.mf)(e)){const n=e=>{l=!0;const[t,n]=yc(e,c,!0);(0,a.l7)(o,t),n&&s.push(...n)};!t&&c.mixins.length&&c.mixins.forEach(n),e.extends&&n(e.extends),e.mixins&&e.mixins.forEach(n)}if(!r&&!l)return(0,a.Kn)(e)&&n.set(e,a.Z6),a.Z6;if((0,a.kJ)(r))for(let f=0;f<r.length;f++){0;const e=(0,a._A)(r[f]);Lc(e)&&(o[e]=a.kT)}else if(r){0;for(const e in r){const c=(0,a._A)(e);if(Lc(c)){const t=r[e],n=o[c]=(0,a.kJ)(t)||(0,a.mf)(t)?{type:t}:(0,a.l7)({},t);if(n){const e=Sc(Boolean,n.type),t=Sc(String,n.type);n[0]=e>-1,n[1]=t<0||e<t,(e>-1||(0,a.RI)(n,"default"))&&s.push(c)}}}}const u=[o,s];return(0,a.Kn)(e)&&n.set(e,u),u}function Lc(e){return"$"!==e[0]}function xc(e){const c=e&&e.toString().match(/^\s*(function|class) (\w+)/);return c?c[2]:null===e?"null":""}function wc(e,c){return xc(e)===xc(c)}function Sc(e,c){return(0,a.kJ)(c)?c.findIndex((c=>wc(c,e))):(0,a.mf)(c)&&wc(c,e)?0:-1}const kc=e=>"_"===e[0]||"$stable"===e,Nc=e=>(0,a.kJ)(e)?e.map(Lt):[Lt(e)],_c=(e,c,t)=>{if(c._n)return c;const n=O(((...e)=>Nc(c(...e))),t);return n._c=!1,n},Ac=(e,c,t)=>{const n=e._ctx;for(const i in e){if(kc(i))continue;const t=e[i];if((0,a.mf)(t))c[i]=_c(i,t,n);else if(null!=t){0;const e=Nc(t);c[i]=()=>e}}},Ec=(e,c)=>{const t=Nc(c);e.slots.default=()=>t},Ic=(e,c)=>{if(32&e.vnode.shapeFlag){const t=c._;t?(e.slots=(0,n.IU)(c),(0,a.Nj)(c,"_",t)):Ac(c,e.slots={})}else e.slots={},c&&Ec(e,c);(0,a.Nj)(e.slots,ht,1)},Tc=(e,c,t)=>{const{vnode:n,slots:i}=e;let r=!0,o=a.kT;if(32&n.shapeFlag){const e=c._;e?t&&1===e?r=!1:((0,a.l7)(i,c),t||1!==e||delete i._):(r=!c.$stable,Ac(c,i)),o=c}else c&&(Ec(e,c),o={default:1});if(r)for(const a in i)kc(a)||null!=o[a]||delete i[a]};function Pc(e,c,t,i,o=!1){if((0,a.kJ)(e))return void e.forEach(((e,n)=>Pc(e,c&&((0,a.kJ)(c)?c[n]:c),t,i,o)));if(ye(i)&&!o)return;const s=4&i.shapeFlag?Kt(i.component)||i.component.proxy:i.el,l=o?null:s,{i:u,r:f}=e;const d=c&&c.r,m=u.refs===a.kT?u.refs={}:u.refs,p=u.setupState;if(null!=d&&d!==f&&((0,a.HD)(d)?(m[d]=null,(0,a.RI)(p,d)&&(p[d]=null)):(0,n.dq)(d)&&(d.value=null)),(0,a.mf)(f))r(f,u,12,[l,m]);else{const c=(0,a.HD)(f),i=(0,n.dq)(f);if(c||i){const n=()=>{if(e.f){const t=c?(0,a.RI)(p,f)?p[f]:m[f]:f.value;o?(0,a.kJ)(t)&&(0,a.Od)(t,s):(0,a.kJ)(t)?t.includes(s)||t.push(s):c?(m[f]=[s],(0,a.RI)(p,f)&&(p[f]=m[f])):(f.value=[s],e.k&&(m[e.k]=f.value))}else c?(m[f]=l,(0,a.RI)(p,f)&&(p[f]=l)):i&&(f.value=l,e.k&&(m[e.k]=l))};l?(n.id=-1,Oc(n,t)):n()}else 0}}function Fc(){}const Oc=ee;function Rc(e){return Dc(e)}function Dc(e,c){Fc();const t=(0,a.E9)();t.__VUE__=!0;const{insert:i,remove:r,patchProp:o,createElement:s,createText:l,createComment:u,setText:f,setElementText:d,parentNode:m,nextSibling:p,setScopeId:h=a.dG,insertStaticContent:v}=e,z=(e,c,t,n=null,a=null,i=null,r=!1,o=null,s=!!c.dynamicChildren)=>{if(e===c)return;e&&!pt(e,c)&&(n=J(e),G(e,a,i,!0),e=null),-2===c.patchFlag&&(s=!1,c.dynamicChildren=null);const{type:l,ref:u,shapeFlag:f}=c;switch(l){case ct:g(e,c,t,n);break;case tt:V(e,c,t,n);break;case nt:null==e&&H(c,t,n,r);break;case et:I(e,c,t,n,a,i,r,o,s);break;default:1&f?w(e,c,t,n,a,i,r,o,s):6&f?T(e,c,t,n,a,i,r,o,s):(64&f||128&f)&&l.process(e,c,t,n,a,i,r,o,s,ee)}null!=u&&a&&Pc(u,e&&e.ref,i,c||e,!c)},g=(e,c,t,n)=>{if(null==e)i(c.el=l(c.children),t,n);else{const t=c.el=e.el;c.children!==e.children&&f(t,c.children)}},V=(e,c,t,n)=>{null==e?i(c.el=u(c.children||""),t,n):c.el=e.el},H=(e,c,t,n)=>{[e.el,e.anchor]=v(e.children,c,t,n,e.el,e.anchor)},b=({el:e,anchor:c},t,n)=>{let a;while(e&&e!==c)a=p(e),i(e,t,n),e=a;i(c,t,n)},y=({el:e,anchor:c})=>{let t;while(e&&e!==c)t=p(e),r(e),e=t;r(c)},w=(e,c,t,n,a,i,r,o,s)=>{r=r||"svg"===c.type,null==e?S(c,t,n,a,i,r,o,s):_(e,c,a,i,r,o,s)},S=(e,c,t,n,r,l,u,f)=>{let m,p;const{type:h,props:v,shapeFlag:z,transition:g,dirs:V}=e;if(m=e.el=s(e.type,l,v&&v.is,v),8&z?d(m,e.children):16&z&&N(e.children,m,null,n,r,l&&"foreignObject"!==h,u,f),V&&le(e,null,n,"created"),k(m,e,e.scopeId,u,n),v){for(const c in v)"value"===c||(0,a.Gg)(c)||o(m,c,null,v[c],l,e.children,n,r,X);"value"in v&&o(m,"value",null,v.value),(p=v.onVnodeBeforeMount)&&kt(p,n,e)}V&&le(e,null,n,"beforeMount");const H=Wc(r,g);H&&g.beforeEnter(m),i(m,c,t),((p=v&&v.onVnodeMounted)||H||V)&&Oc((()=>{p&&kt(p,n,e),H&&g.enter(m),V&&le(e,null,n,"mounted")}),r)},k=(e,c,t,n,a)=>{if(t&&h(e,t),n)for(let i=0;i<n.length;i++)h(e,n[i]);if(a){let t=a.subTree;if(c===t){const c=a.vnode;k(e,c,c.scopeId,c.slotScopeIds,a.parent)}}},N=(e,c,t,n,a,i,r,o,s=0)=>{for(let l=s;l<e.length;l++){const s=e[l]=o?xt(e[l]):Lt(e[l]);z(null,s,c,t,n,a,i,r,o)}},_=(e,c,t,n,i,r,s)=>{const l=c.el=e.el;let{patchFlag:u,dynamicChildren:f,dirs:m}=c;u|=16&e.patchFlag;const p=e.props||a.kT,h=c.props||a.kT;let v;t&&Bc(t,!1),(v=h.onVnodeBeforeUpdate)&&kt(v,t,c,e),m&&le(c,e,t,"beforeUpdate"),t&&Bc(t,!0);const z=i&&"foreignObject"!==c.type;if(f?A(e.dynamicChildren,f,l,t,n,z,r):s||B(e,c,l,null,t,n,z,r,!1),u>0){if(16&u)E(l,c,p,h,t,n,i);else if(2&u&&p.class!==h.class&&o(l,"class",null,h.class,i),4&u&&o(l,"style",p.style,h.style,i),8&u){const a=c.dynamicProps;for(let c=0;c<a.length;c++){const r=a[c],s=p[r],u=h[r];u===s&&"value"!==r||o(l,r,s,u,i,e.children,t,n,X)}}1&u&&e.children!==c.children&&d(l,c.children)}else s||null!=f||E(l,c,p,h,t,n,i);((v=h.onVnodeUpdated)||m)&&Oc((()=>{v&&kt(v,t,c,e),m&&le(c,e,t,"updated")}),n)},A=(e,c,t,n,a,i,r)=>{for(let o=0;o<c.length;o++){const s=e[o],l=c[o],u=s.el&&(s.type===et||!pt(s,l)||70&s.shapeFlag)?m(s.el):t;z(s,l,u,null,n,a,i,r,!0)}},E=(e,c,t,n,i,r,s)=>{if(t!==n){if(t!==a.kT)for(const l in t)(0,a.Gg)(l)||l in n||o(e,l,t[l],null,s,c.children,i,r,X);for(const l in n){if((0,a.Gg)(l))continue;const u=n[l],f=t[l];u!==f&&"value"!==l&&o(e,l,f,u,s,c.children,i,r,X)}"value"in n&&o(e,"value",t.value,n.value)}},I=(e,c,t,n,a,r,o,s,u)=>{const f=c.el=e?e.el:l(""),d=c.anchor=e?e.anchor:l("");let{patchFlag:m,dynamicChildren:p,slotScopeIds:h}=c;h&&(s=s?s.concat(h):h),null==e?(i(f,t,n),i(d,t,n),N(c.children,t,d,a,r,o,s,u)):m>0&&64&m&&p&&e.dynamicChildren?(A(e.dynamicChildren,p,t,a,r,o,s),(null!=c.key||a&&c===a.subTree)&&Uc(e,c,!0)):B(e,c,t,d,a,r,o,s,u)},T=(e,c,t,n,a,i,r,o,s)=>{c.slotScopeIds=o,null==e?512&c.shapeFlag?a.ctx.activate(c,t,n,r,s):P(c,t,n,a,i,r,s):F(e,c,s)},P=(e,c,t,n,a,i,r)=>{const o=e.component=At(e,n,a);if(Le(e)&&(o.ctx.renderer=ee),$t(o),o.asyncDep){if(a&&a.registerDep(o,O),!e.el){const e=o.subTree=Vt(tt);V(null,e,c,t)}}else O(o,e,c,t,a,i,r)},F=(e,c,t)=>{const n=c.component=e.component;if(W(e,c,t)){if(n.asyncDep&&!n.asyncResolved)return void D(n,c,t);n.next=c,M(n.update),n.update()}else c.el=e.el,n.vnode=c},O=(e,c,t,i,r,o,s)=>{const l=()=>{if(e.isMounted){let c,{next:t,bu:n,u:i,parent:l,vnode:u}=e,f=t;0,Bc(e,!1),t?(t.el=u.el,D(e,t,s)):t=u,n&&(0,a.ir)(n),(c=t.props&&t.props.onVnodeBeforeUpdate)&&kt(c,l,t,u),Bc(e,!0);const d=R(e);0;const p=e.subTree;e.subTree=d,z(p,d,m(p.el),J(p),e,r,o),t.el=d.el,null===f&&$(e,d.el),i&&Oc(i,r),(c=t.props&&t.props.onVnodeUpdated)&&Oc((()=>kt(c,l,t,u)),r)}else{let n;const{el:s,props:l}=c,{bm:u,m:f,parent:d}=e,m=ye(c);if(Bc(e,!1),u&&(0,a.ir)(u),!m&&(n=l&&l.onVnodeBeforeMount)&&kt(n,d,c),Bc(e,!0),s&&te){const t=()=>{e.subTree=R(e),te(s,e.subTree,e,r,null)};m?c.type.__asyncLoader().then((()=>!e.isUnmounted&&t())):t()}else{0;const n=e.subTree=R(e);0,z(null,n,t,i,e,r,o),c.el=n.el}if(f&&Oc(f,r),!m&&(n=l&&l.onVnodeMounted)){const e=c;Oc((()=>kt(n,d,e)),r)}(256&c.shapeFlag||d&&ye(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&Oc(e.a,r),e.isMounted=!0,c=t=i=null}},u=e.effect=new n.qq(l,(()=>C(f)),e.scope),f=e.update=()=>u.run();f.id=e.uid,Bc(e,!0),f()},D=(e,c,t)=>{c.component=e;const a=e.vnode.props;e.vnode=c,e.next=null,Cc(e,c.props,a,t),Tc(e,c.children,t),(0,n.Jd)(),L(),(0,n.lk)()},B=(e,c,t,n,a,i,r,o,s=!1)=>{const l=e&&e.children,u=e?e.shapeFlag:0,f=c.children,{patchFlag:m,shapeFlag:p}=c;if(m>0){if(128&m)return void j(l,f,t,n,a,i,r,o,s);if(256&m)return void U(l,f,t,n,a,i,r,o,s)}8&p?(16&u&&X(l,a,i),f!==l&&d(t,f)):16&u?16&p?j(l,f,t,n,a,i,r,o,s):X(l,a,i,!0):(8&u&&d(t,""),16&p&&N(f,t,n,a,i,r,o,s))},U=(e,c,t,n,i,r,o,s,l)=>{e=e||a.Z6,c=c||a.Z6;const u=e.length,f=c.length,d=Math.min(u,f);let m;for(m=0;m<d;m++){const n=c[m]=l?xt(c[m]):Lt(c[m]);z(e[m],n,t,null,i,r,o,s,l)}u>f?X(e,i,r,!0,!1,d):N(c,t,n,i,r,o,s,l,d)},j=(e,c,t,n,i,r,o,s,l)=>{let u=0;const f=c.length;let d=e.length-1,m=f-1;while(u<=d&&u<=m){const n=e[u],a=c[u]=l?xt(c[u]):Lt(c[u]);if(!pt(n,a))break;z(n,a,t,null,i,r,o,s,l),u++}while(u<=d&&u<=m){const n=e[d],a=c[m]=l?xt(c[m]):Lt(c[m]);if(!pt(n,a))break;z(n,a,t,null,i,r,o,s,l),d--,m--}if(u>d){if(u<=m){const e=m+1,a=e<f?c[e].el:n;while(u<=m)z(null,c[u]=l?xt(c[u]):Lt(c[u]),t,a,i,r,o,s,l),u++}}else if(u>m)while(u<=d)G(e[u],i,r,!0),u++;else{const p=u,h=u,v=new Map;for(u=h;u<=m;u++){const e=c[u]=l?xt(c[u]):Lt(c[u]);null!=e.key&&v.set(e.key,u)}let g,V=0;const H=m-h+1;let C=!1,b=0;const M=new Array(H);for(u=0;u<H;u++)M[u]=0;for(u=p;u<=d;u++){const n=e[u];if(V>=H){G(n,i,r,!0);continue}let a;if(null!=n.key)a=v.get(n.key);else for(g=h;g<=m;g++)if(0===M[g-h]&&pt(n,c[g])){a=g;break}void 0===a?G(n,i,r,!0):(M[a-h]=u+1,a>=b?b=a:C=!0,z(n,c[a],t,null,i,r,o,s,l),V++)}const y=C?$c(M):a.Z6;for(g=y.length-1,u=H-1;u>=0;u--){const e=h+u,a=c[e],d=e+1<f?c[e+1].el:n;0===M[u]?z(null,a,t,d,i,r,o,s,l):C&&(g<0||u!==y[g]?q(a,t,d,2):g--)}}},q=(e,c,t,n,a=null)=>{const{el:r,type:o,transition:s,children:l,shapeFlag:u}=e;if(6&u)return void q(e.component.subTree,c,t,n);if(128&u)return void e.suspense.move(c,t,n);if(64&u)return void o.move(e,c,t,ee);if(o===et){i(r,c,t);for(let e=0;e<l.length;e++)q(l[e],c,t,n);return void i(e.anchor,c,t)}if(o===nt)return void b(e,c,t);const f=2!==n&&1&u&&s;if(f)if(0===n)s.beforeEnter(r),i(r,c,t),Oc((()=>s.enter(r)),a);else{const{leave:e,delayLeave:n,afterLeave:a}=s,o=()=>i(r,c,t),l=()=>{e(r,(()=>{o(),a&&a()}))};n?n(r,o,l):l()}else i(r,c,t)},G=(e,c,t,n=!1,a=!1)=>{const{type:i,props:r,ref:o,children:s,dynamicChildren:l,shapeFlag:u,patchFlag:f,dirs:d}=e;if(null!=o&&Pc(o,null,t,e,!0),256&u)return void c.ctx.deactivate(e);const m=1&u&&d,p=!ye(e);let h;if(p&&(h=r&&r.onVnodeBeforeUnmount)&&kt(h,c,e),6&u)K(e.component,t,n);else{if(128&u)return void e.suspense.unmount(t,n);m&&le(e,null,c,"beforeUnmount"),64&u?e.type.remove(e,c,t,a,ee,n):l&&(i!==et||f>0&&64&f)?X(l,c,t,!1,!0):(i===et&&384&f||!a&&16&u)&&X(s,c,t),n&&Y(e)}(p&&(h=r&&r.onVnodeUnmounted)||m)&&Oc((()=>{h&&kt(h,c,e),m&&le(e,null,c,"unmounted")}),t)},Y=e=>{const{type:c,el:t,anchor:n,transition:a}=e;if(c===et)return void Z(t,n);if(c===nt)return void y(e);const i=()=>{r(t),a&&!a.persisted&&a.afterLeave&&a.afterLeave()};if(1&e.shapeFlag&&a&&!a.persisted){const{leave:c,delayLeave:n}=a,r=()=>c(t,i);n?n(e.el,i,r):r()}else i()},Z=(e,c)=>{let t;while(e!==c)t=p(e),r(e),e=t;r(c)},K=(e,c,t)=>{const{bum:n,scope:i,update:r,subTree:o,um:s}=e;n&&(0,a.ir)(n),i.stop(),r&&(r.active=!1,G(o,e,c,t)),s&&Oc(s,c),Oc((()=>{e.isUnmounted=!0}),c),c&&c.pendingBranch&&!c.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===c.pendingId&&(c.deps--,0===c.deps&&c.resolve())},X=(e,c,t,n=!1,a=!1,i=0)=>{for(let r=i;r<e.length;r++)G(e[r],c,t,n,a)},J=e=>6&e.shapeFlag?J(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el),Q=(e,c,t)=>{null==e?c._vnode&&G(c._vnode,null,null,!0):z(c._vnode||null,e,c,null,null,null,t),L(),x(),c._vnode=e},ee={p:z,um:G,m:q,r:Y,mt:P,mc:N,pc:B,pbc:A,n:J,o:e};let ce,te;return c&&([ce,te]=c(ee)),{render:Q,hydrate:ce,createApp:vc(Q,ce)}}function Bc({effect:e,update:c},t){e.allowRecurse=c.allowRecurse=t}function Wc(e,c){return(!e||e&&!e.pendingBranch)&&c&&!c.persisted}function Uc(e,c,t=!1){const n=e.children,i=c.children;if((0,a.kJ)(n)&&(0,a.kJ)(i))for(let a=0;a<n.length;a++){const e=n[a];let c=i[a];1&c.shapeFlag&&!c.dynamicChildren&&((c.patchFlag<=0||32===c.patchFlag)&&(c=i[a]=xt(i[a]),c.el=e.el),t||Uc(e,c)),c.type===ct&&(c.el=e.el)}}function $c(e){const c=e.slice(),t=[0];let n,a,i,r,o;const s=e.length;for(n=0;n<s;n++){const s=e[n];if(0!==s){if(a=t[t.length-1],e[a]<s){c[n]=a,t.push(n);continue}i=0,r=t.length-1;while(i<r)o=i+r>>1,e[t[o]]<s?i=o+1:r=o;s<e[t[i]]&&(i>0&&(c[n]=t[i-1]),t[i]=n)}}i=t.length,r=t[i-1];while(i-- >0)t[i]=r,r=c[r];return t}const jc=e=>e.__isTeleport,qc=e=>e&&(e.disabled||""===e.disabled),Gc=e=>"undefined"!==typeof SVGElement&&e instanceof SVGElement,Yc=(e,c)=>{const t=e&&e.to;if((0,a.HD)(t)){if(c){const e=c(t);return e}return null}return t},Zc={__isTeleport:!0,process(e,c,t,n,a,i,r,o,s,l){const{mc:u,pc:f,pbc:d,o:{insert:m,querySelector:p,createText:h,createComment:v}}=l,z=qc(c.props);let{shapeFlag:g,children:V,dynamicChildren:H}=c;if(null==e){const e=c.el=h(""),l=c.anchor=h("");m(e,t,n),m(l,t,n);const f=c.target=Yc(c.props,p),d=c.targetAnchor=h("");f&&(m(d,f),r=r||Gc(f));const v=(e,c)=>{16&g&&u(V,e,c,a,i,r,o,s)};z?v(t,l):f&&v(f,d)}else{c.el=e.el;const n=c.anchor=e.anchor,u=c.target=e.target,m=c.targetAnchor=e.targetAnchor,h=qc(e.props),v=h?t:u,g=h?n:m;if(r=r||Gc(u),H?(d(e.dynamicChildren,H,v,a,i,r,o),Uc(e,c,!0)):s||f(e,c,v,g,a,i,r,o,!1),z)h?c.props&&e.props&&c.props.to!==e.props.to&&(c.props.to=e.props.to):Kc(c,t,n,l,1);else if((c.props&&c.props.to)!==(e.props&&e.props.to)){const e=c.target=Yc(c.props,p);e&&Kc(c,e,null,l,0)}else h&&Kc(c,u,m,l,1)}Qc(c)},remove(e,c,t,n,{um:a,o:{remove:i}},r){const{shapeFlag:o,children:s,anchor:l,targetAnchor:u,target:f,props:d}=e;if(f&&i(u),r&&i(l),16&o){const e=r||!qc(d);for(let n=0;n<s.length;n++){const i=s[n];a(i,c,t,e,!!i.dynamicChildren)}}},move:Kc,hydrate:Xc};function Kc(e,c,t,{o:{insert:n},m:a},i=2){0===i&&n(e.targetAnchor,c,t);const{el:r,anchor:o,shapeFlag:s,children:l,props:u}=e,f=2===i;if(f&&n(r,c,t),(!f||qc(u))&&16&s)for(let d=0;d<l.length;d++)a(l[d],c,t,2);f&&n(o,c,t)}function Xc(e,c,t,n,a,i,{o:{nextSibling:r,parentNode:o,querySelector:s}},l){const u=c.target=Yc(c.props,s);if(u){const s=u._lpa||u.firstChild;if(16&c.shapeFlag)if(qc(c.props))c.anchor=l(r(e),c,o(e),t,n,a,i),c.targetAnchor=s;else{c.anchor=r(e);let o=s;while(o)if(o=r(o),o&&8===o.nodeType&&"teleport anchor"===o.data){c.targetAnchor=o,u._lpa=c.targetAnchor&&r(c.targetAnchor);break}l(s,c,u,t,n,a,i)}Qc(c)}return c.anchor&&r(c.anchor)}const Jc=Zc;function Qc(e){const c=e.ctx;if(c&&c.ut){let t=e.children[0].el;while(t&&t!==e.targetAnchor)1===t.nodeType&&t.setAttribute("data-v-owner",c.uid),t=t.nextSibling;c.ut()}}const et=Symbol.for("v-fgt"),ct=Symbol.for("v-txt"),tt=Symbol.for("v-cmt"),nt=Symbol.for("v-stc"),at=[];let it=null;function rt(e=!1){at.push(it=e?null:[])}function ot(){at.pop(),it=at[at.length-1]||null}let st=1;function lt(e){st+=e}function ut(e){return e.dynamicChildren=st>0?it||a.Z6:null,ot(),st>0&&it&&it.push(e),e}function ft(e,c,t,n,a,i){return ut(gt(e,c,t,n,a,i,!0))}function dt(e,c,t,n,a){return ut(Vt(e,c,t,n,a,!0))}function mt(e){return!!e&&!0===e.__v_isVNode}function pt(e,c){return e.type===c.type&&e.key===c.key}const ht="__vInternal",vt=({key:e})=>null!=e?e:null,zt=({ref:e,ref_key:c,ref_for:t})=>("number"===typeof e&&(e=""+e),null!=e?(0,a.HD)(e)||(0,n.dq)(e)||(0,a.mf)(e)?{i:E,r:e,k:c,f:!!t}:e:null);function gt(e,c=null,t=null,n=0,i=null,r=(e===et?0:1),o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:c,key:c&&vt(c),ref:c&&zt(c),scopeId:I,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:E};return s?(wt(l,t),128&r&&e.normalize(l)):t&&(l.shapeFlag|=(0,a.HD)(t)?8:16),st>0&&!o&&it&&(l.patchFlag>0||6&r)&&32!==l.patchFlag&&it.push(l),l}const Vt=Ht;function Ht(e,c=null,t=null,i=0,r=null,o=!1){if(e&&e!==Y||(e=tt),mt(e)){const n=bt(e,c,!0);return t&&wt(n,t),st>0&&!o&&it&&(6&n.shapeFlag?it[it.indexOf(e)]=n:it.push(n)),n.patchFlag|=-2,n}if(Jt(e)&&(e=e.__vccOpts),c){c=Ct(c);let{class:e,style:t}=c;e&&!(0,a.HD)(e)&&(c.class=(0,a.C_)(e)),(0,a.Kn)(t)&&((0,n.X3)(t)&&!(0,a.kJ)(t)&&(t=(0,a.l7)({},t)),c.style=(0,a.j5)(t))}const s=(0,a.HD)(e)?1:Q(e)?128:jc(e)?64:(0,a.Kn)(e)?4:(0,a.mf)(e)?2:0;return gt(e,c,t,i,r,s,o,!0)}function Ct(e){return e?(0,n.X3)(e)||ht in e?(0,a.l7)({},e):e:null}function bt(e,c,t=!1){const{props:n,ref:i,patchFlag:r,children:o}=e,s=c?St(n||{},c):n,l={__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&vt(s),ref:c&&c.ref?t&&i?(0,a.kJ)(i)?i.concat(zt(c)):[i,zt(c)]:zt(c):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:c&&e.type!==et?-1===r?16:16|r:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&bt(e.ssContent),ssFallback:e.ssFallback&&bt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l}function Mt(e=" ",c=0){return Vt(ct,null,e,c)}function yt(e="",c=!1){return c?(rt(),dt(tt,null,e)):Vt(tt,null,e)}function Lt(e){return null==e||"boolean"===typeof e?Vt(tt):(0,a.kJ)(e)?Vt(et,null,e.slice()):"object"===typeof e?xt(e):Vt(ct,null,String(e))}function xt(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:bt(e)}function wt(e,c){let t=0;const{shapeFlag:n}=e;if(null==c)c=null;else if((0,a.kJ)(c))t=16;else if("object"===typeof c){if(65&n){const t=c.default;return void(t&&(t._c&&(t._d=!1),wt(e,t()),t._c&&(t._d=!0)))}{t=32;const n=c._;n||ht in c?3===n&&E&&(1===E.slots._?c._=1:(c._=2,e.patchFlag|=1024)):c._ctx=E}}else(0,a.mf)(c)?(c={default:c,_ctx:E},t=32):(c=String(c),64&n?(t=16,c=[Mt(c)]):t=8);e.children=c,e.shapeFlag|=t}function St(...e){const c={};for(let t=0;t<e.length;t++){const n=e[t];for(const e in n)if("class"===e)c.class!==n.class&&(c.class=(0,a.C_)([c.class,n.class]));else if("style"===e)c.style=(0,a.j5)([c.style,n.style]);else if((0,a.F7)(e)){const t=c[e],i=n[e];!i||t===i||(0,a.kJ)(t)&&t.includes(i)||(c[e]=t?[].concat(t,i):i)}else""!==e&&(c[e]=n[e])}return c}function kt(e,c,t,n=null){o(e,c,7,[t,n])}const Nt=pc();let _t=0;function At(e,c,t){const i=e.type,r=(c?c.appContext:e.appContext)||Nt,o={uid:_t++,vnode:e,type:i,parent:c,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new n.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:c?c.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yc(i,r),emitsOptions:_(i,r),emit:null,emitted:null,propsDefaults:a.kT,inheritAttrs:i.inheritAttrs,ctx:a.kT,data:a.kT,props:a.kT,attrs:a.kT,slots:a.kT,refs:a.kT,setupState:a.kT,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=c?c.root:o,o.emit=N.bind(null,o),e.ce&&e.ce(o),o}let Et=null;const It=()=>Et||E;let Tt,Pt,Ft="__VUE_INSTANCE_SETTERS__";(Pt=(0,a.E9)()[Ft])||(Pt=(0,a.E9)()[Ft]=[]),Pt.push((e=>Et=e)),Tt=e=>{Pt.length>1?Pt.forEach((c=>c(e))):Pt[0](e)};const Ot=e=>{Tt(e),e.scope.on()},Rt=()=>{Et&&Et.scope.off(),Tt(null)};function Dt(e){return 4&e.vnode.shapeFlag}let Bt,Wt,Ut=!1;function $t(e,c=!1){Ut=c;const{props:t,children:n}=e.vnode,a=Dt(e);Hc(e,t,a,c),Ic(e,n);const i=a?jt(e,c):void 0;return Ut=!1,i}function jt(e,c){const t=e.type;e.accessCache=Object.create(null),e.proxy=(0,n.Xl)(new Proxy(e.ctx,Xe));const{setup:i}=t;if(i){const t=e.setupContext=i.length>1?Zt(e):null;Ot(e),(0,n.Jd)();const o=r(i,e,0,[e.props,t]);if((0,n.lk)(),Rt(),(0,a.tI)(o)){if(o.then(Rt,Rt),c)return o.then((t=>{qt(e,t,c)})).catch((c=>{s(c,e,0)}));e.asyncDep=o}else qt(e,o,c)}else Gt(e,c)}function qt(e,c,t){(0,a.mf)(c)?e.type.__ssrInlineRender?e.ssrRender=c:e.render=c:(0,a.Kn)(c)&&(e.setupState=(0,n.WL)(c)),Gt(e,t)}function Gt(e,c,t){const i=e.type;if(!e.render){if(!c&&Bt&&!i.render){const c=i.template||ac(e).template;if(c){0;const{isCustomElement:t,compilerOptions:n}=e.appContext.config,{delimiters:r,compilerOptions:o}=i,s=(0,a.l7)((0,a.l7)({isCustomElement:t,delimiters:r},n),o);i.render=Bt(c,s)}}e.render=i.render||a.dG,Wt&&Wt(e)}Ot(e),(0,n.Jd)();try{ec(e)}finally{(0,n.lk)(),Rt()}}function Yt(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(c,t){return(0,n.j)(e,"get","$attrs"),c[t]}}))}function Zt(e){const c=c=>{e.exposed=c||{}};return{get attrs(){return Yt(e)},slots:e.slots,emit:e.emit,expose:c}}function Kt(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,n.WL)((0,n.Xl)(e.exposed)),{get(c,t){return t in c?c[t]:t in Ze?Ze[t](e):void 0},has(e,c){return c in e||c in Ze}}))}function Xt(e,c=!0){return(0,a.mf)(e)?e.displayName||e.name:e.name||c&&e.__name}function Jt(e){return(0,a.mf)(e)&&"__vccOpts"in e}const Qt=(e,c)=>(0,n.Fl)(e,c,Ut);function en(e,c,t){const n=arguments.length;return 2===n?(0,a.Kn)(c)&&!(0,a.kJ)(c)?mt(c)?Vt(e,null,[c]):Vt(e,c):Vt(e,null,c):(n>3?t=Array.prototype.slice.call(arguments,2):3===n&&mt(t)&&(t=[t]),Vt(e,c,t))}const cn=Symbol.for("v-scx"),tn=()=>{{const e=Vc(cn);return e}};const nn="3.3.8"},9242:function(e,c,t){t.d(c,{F8:function(){return A},W3:function(){return se},bM:function(){return ge},iM:function(){return Me},nr:function(){return ze},ri:function(){return we},uT:function(){return m}});t(560);var n=t(3396),a=t(7139),i=t(4870);const r="http://www.w3.org/2000/svg",o="undefined"!==typeof document?document:null,s=o&&o.createElement("template"),l={insert:(e,c,t)=>{c.insertBefore(e,t||null)},remove:e=>{const c=e.parentNode;c&&c.removeChild(e)},createElement:(e,c,t,n)=>{const a=c?o.createElementNS(r,e):o.createElement(e,t?{is:t}:void 0);return"select"===e&&n&&null!=n.multiple&&a.setAttribute("multiple",n.multiple),a},createText:e=>o.createTextNode(e),createComment:e=>o.createComment(e),setText:(e,c)=>{e.nodeValue=c},setElementText:(e,c)=>{e.textContent=c},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>o.querySelector(e),setScopeId(e,c){e.setAttribute(c,"")},insertStaticContent(e,c,t,n,a,i){const r=t?t.previousSibling:c.lastChild;if(a&&(a===i||a.nextSibling)){while(1)if(c.insertBefore(a.cloneNode(!0),t),a===i||!(a=a.nextSibling))break}else{s.innerHTML=n?`<svg>${e}</svg>`:e;const a=s.content;if(n){const e=a.firstChild;while(e.firstChild)a.appendChild(e.firstChild);a.removeChild(e)}c.insertBefore(a,t)}return[r?r.nextSibling:c.firstChild,t?t.previousSibling:c.lastChild]}},u="transition",f="animation",d=Symbol("_vtc"),m=(e,{slots:c})=>(0,n.h)(n.P$,g(e),c);m.displayName="Transition";const p={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},h=m.props=(0,a.l7)({},n.nJ,p),v=(e,c=[])=>{(0,a.kJ)(e)?e.forEach((e=>e(...c))):e&&e(...c)},z=e=>!!e&&((0,a.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function g(e){const c={};for(const a in e)a in p||(c[a]=e[a]);if(!1===e.css)return c;const{name:t="v",type:n,duration:i,enterFromClass:r=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:s=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:u=o,appearToClass:f=s,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:m=`${t}-leave-active`,leaveToClass:h=`${t}-leave-to`}=e,g=V(i),H=g&&g[0],y=g&&g[1],{onBeforeEnter:x,onEnter:w,onEnterCancelled:S,onLeave:N,onLeaveCancelled:_,onBeforeAppear:A=x,onAppear:E=w,onAppearCancelled:I=S}=c,T=(e,c,t)=>{b(e,c?f:s),b(e,c?u:o),t&&t()},P=(e,c)=>{e._isLeaving=!1,b(e,d),b(e,h),b(e,m),c&&c()},F=e=>(c,t)=>{const a=e?E:w,i=()=>T(c,e,t);v(a,[c,i]),M((()=>{b(c,e?l:r),C(c,e?f:s),z(a)||L(c,n,H,i)}))};return(0,a.l7)(c,{onBeforeEnter(e){v(x,[e]),C(e,r),C(e,o)},onBeforeAppear(e){v(A,[e]),C(e,l),C(e,u)},onEnter:F(!1),onAppear:F(!0),onLeave(e,c){e._isLeaving=!0;const t=()=>P(e,c);C(e,d),k(),C(e,m),M((()=>{e._isLeaving&&(b(e,d),C(e,h),z(N)||L(e,n,y,t))})),v(N,[e,t])},onEnterCancelled(e){T(e,!1),v(S,[e])},onAppearCancelled(e){T(e,!0),v(I,[e])},onLeaveCancelled(e){P(e),v(_,[e])}})}function V(e){if(null==e)return null;if((0,a.Kn)(e))return[H(e.enter),H(e.leave)];{const c=H(e);return[c,c]}}function H(e){const c=(0,a.He)(e);return c}function C(e,c){c.split(/\s+/).forEach((c=>c&&e.classList.add(c))),(e[d]||(e[d]=new Set)).add(c)}function b(e,c){c.split(/\s+/).forEach((c=>c&&e.classList.remove(c)));const t=e[d];t&&(t.delete(c),t.size||(e[d]=void 0))}function M(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let y=0;function L(e,c,t,n){const a=e._endId=++y,i=()=>{a===e._endId&&n()};if(t)return setTimeout(i,t);const{type:r,timeout:o,propCount:s}=x(e,c);if(!r)return n();const l=r+"end";let u=0;const f=()=>{e.removeEventListener(l,d),i()},d=c=>{c.target===e&&++u>=s&&f()};setTimeout((()=>{u<s&&f()}),o+1),e.addEventListener(l,d)}function x(e,c){const t=window.getComputedStyle(e),n=e=>(t[e]||"").split(", "),a=n(`${u}Delay`),i=n(`${u}Duration`),r=w(a,i),o=n(`${f}Delay`),s=n(`${f}Duration`),l=w(o,s);let d=null,m=0,p=0;c===u?r>0&&(d=u,m=r,p=i.length):c===f?l>0&&(d=f,m=l,p=s.length):(m=Math.max(r,l),d=m>0?r>l?u:f:null,p=d?d===u?i.length:s.length:0);const h=d===u&&/\b(transform|all)(,|$)/.test(n(`${u}Property`).toString());return{type:d,timeout:m,propCount:p,hasTransform:h}}function w(e,c){while(e.length<c.length)e=e.concat(e);return Math.max(...c.map(((c,t)=>S(c)+S(e[t]))))}function S(e){return"auto"===e?0:1e3*Number(e.slice(0,-1).replace(",","."))}function k(){return document.body.offsetHeight}function N(e,c,t){const n=e[d];n&&(c=(c?[c,...n]:[...n]).join(" ")),null==c?e.removeAttribute("class"):t?e.setAttribute("class",c):e.className=c}const _=Symbol("_vod"),A={beforeMount(e,{value:c},{transition:t}){e[_]="none"===e.style.display?"":e.style.display,t&&c?t.beforeEnter(e):E(e,c)},mounted(e,{value:c},{transition:t}){t&&c&&t.enter(e)},updated(e,{value:c,oldValue:t},{transition:n}){!c!==!t&&(n?c?(n.beforeEnter(e),E(e,!0),n.enter(e)):n.leave(e,(()=>{E(e,!1)})):E(e,c))},beforeUnmount(e,{value:c}){E(e,c)}};function E(e,c){e.style.display=c?e[_]:"none"}function I(e,c,t){const n=e.style,i=(0,a.HD)(t);if(t&&!i){if(c&&!(0,a.HD)(c))for(const e in c)null==t[e]&&P(n,e,"");for(const e in t)P(n,e,t[e])}else{const a=n.display;i?c!==t&&(n.cssText=t):c&&e.removeAttribute("style"),_ in e&&(n.display=a)}}const T=/\s*!important$/;function P(e,c,t){if((0,a.kJ)(t))t.forEach((t=>P(e,c,t)));else if(null==t&&(t=""),c.startsWith("--"))e.setProperty(c,t);else{const n=R(e,c);T.test(t)?e.setProperty((0,a.rs)(n),t.replace(T,""),"important"):e[n]=t}}const F=["Webkit","Moz","ms"],O={};function R(e,c){const t=O[c];if(t)return t;let n=(0,a._A)(c);if("filter"!==n&&n in e)return O[c]=n;n=(0,a.kC)(n);for(let a=0;a<F.length;a++){const t=F[a]+n;if(t in e)return O[c]=t}return c}const D="http://www.w3.org/1999/xlink";function B(e,c,t,n,i){if(n&&c.startsWith("xlink:"))null==t?e.removeAttributeNS(D,c.slice(6,c.length)):e.setAttributeNS(D,c,t);else{const n=(0,a.Pq)(c);null==t||n&&!(0,a.yA)(t)?e.removeAttribute(c):e.setAttribute(c,n?"":t)}}function W(e,c,t,n,i,r,o){if("innerHTML"===c||"textContent"===c)return n&&o(n,i,r),void(e[c]=null==t?"":t);const s=e.tagName;if("value"===c&&"PROGRESS"!==s&&!s.includes("-")){e._value=t;const n="OPTION"===s?e.getAttribute("value"):e.value,a=null==t?"":t;return n!==a&&(e.value=a),void(null==t&&e.removeAttribute(c))}let l=!1;if(""===t||null==t){const n=typeof e[c];"boolean"===n?t=(0,a.yA)(t):null==t&&"string"===n?(t="",l=!0):"number"===n&&(t=0,l=!0)}try{e[c]=t}catch(u){0}l&&e.removeAttribute(c)}function U(e,c,t,n){e.addEventListener(c,t,n)}function $(e,c,t,n){e.removeEventListener(c,t,n)}const j=Symbol("_vei");function q(e,c,t,n,a=null){const i=e[j]||(e[j]={}),r=i[c];if(n&&r)r.value=n;else{const[t,o]=Y(c);if(n){const r=i[c]=J(n,a);U(e,t,r,o)}else r&&($(e,t,r,o),i[c]=void 0)}}const G=/(?:Once|Passive|Capture)$/;function Y(e){let c;if(G.test(e)){let t;c={};while(t=e.match(G))e=e.slice(0,e.length-t[0].length),c[t[0].toLowerCase()]=!0}const t=":"===e[2]?e.slice(3):(0,a.rs)(e.slice(2));return[t,c]}let Z=0;const K=Promise.resolve(),X=()=>Z||(K.then((()=>Z=0)),Z=Date.now());function J(e,c){const t=e=>{if(e._vts){if(e._vts<=t.attached)return}else e._vts=Date.now();(0,n.$d)(Q(e,t.value),c,5,[e])};return t.value=e,t.attached=X(),t}function Q(e,c){if((0,a.kJ)(c)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},c.map((e=>c=>!c._stopped&&e&&e(c)))}return c}const ee=/^on[a-z]/,ce=(e,c,t,n,i=!1,r,o,s,l)=>{"class"===c?N(e,n,i):"style"===c?I(e,t,n):(0,a.F7)(c)?(0,a.tR)(c)||q(e,c,t,n,o):("."===c[0]?(c=c.slice(1),1):"^"===c[0]?(c=c.slice(1),0):te(e,c,n,i))?W(e,c,n,r,o,s,l):("true-value"===c?e._trueValue=n:"false-value"===c&&(e._falseValue=n),B(e,c,n,i))};function te(e,c,t,n){return n?"innerHTML"===c||"textContent"===c||!!(c in e&&ee.test(c)&&(0,a.mf)(t)):"spellcheck"!==c&&"draggable"!==c&&"translate"!==c&&("form"!==c&&(("list"!==c||"INPUT"!==e.tagName)&&(("type"!==c||"TEXTAREA"!==e.tagName)&&((!ee.test(c)||!(0,a.HD)(t))&&c in e))))}
/*! #__NO_SIDE_EFFECTS__ */
/*! #__NO_SIDE_EFFECTS__ */
"undefined"!==typeof HTMLElement&&HTMLElement;const ne=new WeakMap,ae=new WeakMap,ie=Symbol("_moveCb"),re=Symbol("_enterCb"),oe={name:"TransitionGroup",props:(0,a.l7)({},h,{tag:String,moveClass:String}),setup(e,{slots:c}){const t=(0,n.FN)(),a=(0,n.Y8)();let r,o;return(0,n.ic)((()=>{if(!r.length)return;const c=e.moveClass||`${e.name||"v"}-move`;if(!de(r[0].el,t.vnode.el,c))return;r.forEach(le),r.forEach(ue);const n=r.filter(fe);k(),n.forEach((e=>{const t=e.el,n=t.style;C(t,c),n.transform=n.webkitTransform=n.transitionDuration="";const a=t[ie]=e=>{e&&e.target!==t||e&&!/transform$/.test(e.propertyName)||(t.removeEventListener("transitionend",a),t[ie]=null,b(t,c))};t.addEventListener("transitionend",a)}))})),()=>{const s=(0,i.IU)(e),l=g(s);let u=s.tag||n.HY;r=o,o=c.default?(0,n.Q6)(c.default()):[];for(let e=0;e<o.length;e++){const c=o[e];null!=c.key&&(0,n.nK)(c,(0,n.U2)(c,l,a,t))}if(r)for(let e=0;e<r.length;e++){const c=r[e];(0,n.nK)(c,(0,n.U2)(c,l,a,t)),ne.set(c,c.el.getBoundingClientRect())}return(0,n.Wm)(u,null,o)}}};oe.props;const se=oe;function le(e){const c=e.el;c[ie]&&c[ie](),c[re]&&c[re]()}function ue(e){ae.set(e,e.el.getBoundingClientRect())}function fe(e){const c=ne.get(e),t=ae.get(e),n=c.left-t.left,a=c.top-t.top;if(n||a){const c=e.el.style;return c.transform=c.webkitTransform=`translate(${n}px,${a}px)`,c.transitionDuration="0s",e}}function de(e,c,t){const n=e.cloneNode(),a=e[d];a&&a.forEach((e=>{e.split(/\s+/).forEach((e=>e&&n.classList.remove(e)))})),t.split(/\s+/).forEach((e=>e&&n.classList.add(e))),n.style.display="none";const i=1===c.nodeType?c:c.parentNode;i.appendChild(n);const{hasTransform:r}=x(n);return i.removeChild(n),r}const me=e=>{const c=e.props["onUpdate:modelValue"]||!1;return(0,a.kJ)(c)?e=>(0,a.ir)(c,e):c};function pe(e){e.target.composing=!0}function he(e){const c=e.target;c.composing&&(c.composing=!1,c.dispatchEvent(new Event("input")))}const ve=Symbol("_assign"),ze={created(e,{modifiers:{lazy:c,trim:t,number:n}},i){e[ve]=me(i);const r=n||i.props&&"number"===i.props.type;U(e,c?"change":"input",(c=>{if(c.target.composing)return;let n=e.value;t&&(n=n.trim()),r&&(n=(0,a.h5)(n)),e[ve](n)})),t&&U(e,"change",(()=>{e.value=e.value.trim()})),c||(U(e,"compositionstart",pe),U(e,"compositionend",he),U(e,"change",he))},mounted(e,{value:c}){e.value=null==c?"":c},beforeUpdate(e,{value:c,modifiers:{lazy:t,trim:n,number:i}},r){if(e[ve]=me(r),e.composing)return;if(document.activeElement===e&&"range"!==e.type){if(t)return;if(n&&e.value.trim()===c)return;if((i||"number"===e.type)&&(0,a.h5)(e.value)===c)return}const o=null==c?"":c;e.value!==o&&(e.value=o)}};const ge={deep:!0,created(e,{value:c,modifiers:{number:t}},n){const i=(0,a.DM)(c);U(e,"change",(()=>{const c=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>t?(0,a.h5)(He(e)):He(e)));e[ve](e.multiple?i?new Set(c):c:c[0])})),e[ve]=me(n)},mounted(e,{value:c}){Ve(e,c)},beforeUpdate(e,c,t){e[ve]=me(t)},updated(e,{value:c}){Ve(e,c)}};function Ve(e,c){const t=e.multiple;if(!t||(0,a.kJ)(c)||(0,a.DM)(c)){for(let n=0,i=e.options.length;n<i;n++){const i=e.options[n],r=He(i);if(t)(0,a.kJ)(c)?i.selected=(0,a.hq)(c,r)>-1:i.selected=c.has(r);else if((0,a.WV)(He(i),c))return void(e.selectedIndex!==n&&(e.selectedIndex=n))}t||-1===e.selectedIndex||(e.selectedIndex=-1)}}function He(e){return"_value"in e?e._value:e.value}const Ce=["ctrl","shift","alt","meta"],be={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,c)=>Ce.some((t=>e[`${t}Key`]&&!c.includes(t)))},Me=(e,c)=>(t,...n)=>{for(let e=0;e<c.length;e++){const n=be[c[e]];if(n&&n(t,c))return}return e(t,...n)},ye=(0,a.l7)({patchProp:ce},l);let Le;function xe(){return Le||(Le=(0,n.Us)(ye))}const we=(...e)=>{const c=xe().createApp(...e);const{mount:t}=c;return c.mount=e=>{const n=Se(e);if(!n)return;const i=c._component;(0,a.mf)(i)||i.render||i.template||(i.template=n.innerHTML),n.innerHTML="";const r=t(n,!1,n instanceof SVGElement);return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),r},c};function Se(e){if((0,a.HD)(e)){const c=document.querySelector(e);return c}return e}},7139:function(e,c,t){t.d(c,{C_:function(){return J},DM:function(){return z},E9:function(){return $},F7:function(){return l},Gg:function(){return N},HD:function(){return C},He:function(){return W},Kj:function(){return V},Kn:function(){return M},NO:function(){return o},Nj:function(){return D},Od:function(){return d},PO:function(){return S},Pq:function(){return ee},RI:function(){return p},S0:function(){return k},W7:function(){return w},WV:function(){return ne},Z6:function(){return i},_A:function(){return E},_N:function(){return v},aU:function(){return O},dG:function(){return r},fY:function(){return n},h5:function(){return B},hR:function(){return F},hq:function(){return ae},ir:function(){return R},j5:function(){return G},kC:function(){return P},kJ:function(){return h},kT:function(){return a},l7:function(){return f},mf:function(){return H},rs:function(){return T},tI:function(){return y},tR:function(){return u},yA:function(){return ce},yk:function(){return b},yl:function(){return q},zw:function(){return ie}});t(560);function n(e,c){const t=Object.create(null),n=e.split(",");for(let a=0;a<n.length;a++)t[n[a]]=!0;return c?e=>!!t[e.toLowerCase()]:e=>!!t[e]}const a={},i=[],r=()=>{},o=()=>!1,s=/^on[^a-z]/,l=e=>s.test(e),u=e=>e.startsWith("onUpdate:"),f=Object.assign,d=(e,c)=>{const t=e.indexOf(c);t>-1&&e.splice(t,1)},m=Object.prototype.hasOwnProperty,p=(e,c)=>m.call(e,c),h=Array.isArray,v=e=>"[object Map]"===x(e),z=e=>"[object Set]"===x(e),g=e=>"[object Date]"===x(e),V=e=>"[object RegExp]"===x(e),H=e=>"function"===typeof e,C=e=>"string"===typeof e,b=e=>"symbol"===typeof e,M=e=>null!==e&&"object"===typeof e,y=e=>(M(e)||H(e))&&H(e.then)&&H(e.catch),L=Object.prototype.toString,x=e=>L.call(e),w=e=>x(e).slice(8,-1),S=e=>"[object Object]"===x(e),k=e=>C(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,N=n(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_=e=>{const c=Object.create(null);return t=>{const n=c[t];return n||(c[t]=e(t))}},A=/-(\w)/g,E=_((e=>e.replace(A,((e,c)=>c?c.toUpperCase():"")))),I=/\B([A-Z])/g,T=_((e=>e.replace(I,"-$1").toLowerCase())),P=_((e=>e.charAt(0).toUpperCase()+e.slice(1))),F=_((e=>{const c=e?`on${P(e)}`:"";return c})),O=(e,c)=>!Object.is(e,c),R=(e,c)=>{for(let t=0;t<e.length;t++)e[t](c)},D=(e,c,t)=>{Object.defineProperty(e,c,{configurable:!0,enumerable:!1,value:t})},B=e=>{const c=parseFloat(e);return isNaN(c)?e:c},W=e=>{const c=C(e)?Number(e):NaN;return isNaN(c)?e:c};let U;const $=()=>U||(U="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof t.g?t.g:{});const j="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console",q=n(j);function G(e){if(h(e)){const c={};for(let t=0;t<e.length;t++){const n=e[t],a=C(n)?X(n):G(n);if(a)for(const e in a)c[e]=a[e]}return c}if(C(e)||M(e))return e}const Y=/;(?![^(]*\))/g,Z=/:([^]+)/,K=/\/\*[^]*?\*\//g;function X(e){const c={};return e.replace(K,"").split(Y).forEach((e=>{if(e){const t=e.split(Z);t.length>1&&(c[t[0].trim()]=t[1].trim())}})),c}function J(e){let c="";if(C(e))c=e;else if(h(e))for(let t=0;t<e.length;t++){const n=J(e[t]);n&&(c+=n+" ")}else if(M(e))for(const t in e)e[t]&&(c+=t+" ");return c.trim()}const Q="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ee=n(Q);function ce(e){return!!e||""===e}function te(e,c){if(e.length!==c.length)return!1;let t=!0;for(let n=0;t&&n<e.length;n++)t=ne(e[n],c[n]);return t}function ne(e,c){if(e===c)return!0;let t=g(e),n=g(c);if(t||n)return!(!t||!n)&&e.getTime()===c.getTime();if(t=b(e),n=b(c),t||n)return e===c;if(t=h(e),n=h(c),t||n)return!(!t||!n)&&te(e,c);if(t=M(e),n=M(c),t||n){if(!t||!n)return!1;const a=Object.keys(e).length,i=Object.keys(c).length;if(a!==i)return!1;for(const t in e){const n=e.hasOwnProperty(t),a=c.hasOwnProperty(t);if(n&&!a||!n&&a||!ne(e[t],c[t]))return!1}}return String(e)===String(c)}function ae(e,c){return e.findIndex((e=>ne(e,c)))}const ie=e=>C(e)?e:null==e?"":h(e)||M(e)&&(e.toString===L||!H(e.toString))?JSON.stringify(e,re,2):String(e),re=(e,c)=>c&&c.__v_isRef?re(e,c.value):v(c)?{[`Map(${c.size})`]:[...c.entries()].reduce(((e,[c,t])=>(e[`${c} =>`]=t,e)),{})}:z(c)?{[`Set(${c.size})`]:[...c.values()]}:!M(c)||h(c)||S(c)?c:String(c)},89:function(e,c){c.Z=(e,c)=>{const t=e.__vccOpts||e;for(const[n,a]of c)t[n]=a;return t}},65:function(e,c,t){t.d(c,{MT:function(){return ee},nv:function(){return ae},Se:function(){return ne}});t(560);var n=t(3396),a=t(4870);function i(){return r().__VUE_DEVTOOLS_GLOBAL_HOOK__}function r(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof t.g?t.g:{}}const o="function"===typeof Proxy,s="devtools-plugin:setup",l="plugin:settings:set";let u,f;function d(){var e;return void 0!==u||("undefined"!==typeof window&&window.performance?(u=!0,f=window.performance):"undefined"!==typeof t.g&&(null===(e=t.g.perf_hooks)||void 0===e?void 0:e.performance)?(u=!0,f=t.g.perf_hooks.performance):u=!1),u}function m(){return d()?f.now():Date.now()}class p{constructor(e,c){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=c;const t={};if(e.settings)for(const r in e.settings){const c=e.settings[r];t[r]=c.defaultValue}const n=`__vue-devtools-plugin-settings__${e.id}`;let a=Object.assign({},t);try{const e=localStorage.getItem(n),c=JSON.parse(e);Object.assign(a,c)}catch(i){}this.fallbacks={getSettings(){return a},setSettings(e){try{localStorage.setItem(n,JSON.stringify(e))}catch(i){}a=e},now(){return m()}},c&&c.on(l,((e,c)=>{e===this.plugin.id&&this.fallbacks.setSettings(c)})),this.proxiedOn=new Proxy({},{get:(e,c)=>this.target?this.target.on[c]:(...e)=>{this.onQueue.push({method:c,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,c)=>this.target?this.target[c]:"on"===c?this.proxiedOn:Object.keys(this.fallbacks).includes(c)?(...e)=>(this.targetQueue.push({method:c,args:e,resolve:()=>{}}),this.fallbacks[c](...e)):(...e)=>new Promise((t=>{this.targetQueue.push({method:c,args:e,resolve:t})}))})}async setRealTarget(e){this.target=e;for(const c of this.onQueue)this.target.on[c.method](...c.args);for(const c of this.targetQueue)c.resolve(await this.target[c.method](...c.args))}}function h(e,c){const t=e,n=r(),a=i(),l=o&&t.enableEarlyProxy;if(!a||!n.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&l){const e=l?new p(t,a):null,i=n.__VUE_DEVTOOLS_PLUGINS__=n.__VUE_DEVTOOLS_PLUGINS__||[];i.push({pluginDescriptor:t,setupFn:c,proxy:e}),e&&c(e.proxiedTarget)}else a.emit(s,e,c)}
/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */
var v="store";function z(e,c){Object.keys(e).forEach((function(t){return c(e[t],t)}))}function g(e){return null!==e&&"object"===typeof e}function V(e){return e&&"function"===typeof e.then}function H(e,c){return function(){return e(c)}}function C(e,c,t){return c.indexOf(e)<0&&(t&&t.prepend?c.unshift(e):c.push(e)),function(){var t=c.indexOf(e);t>-1&&c.splice(t,1)}}function b(e,c){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var t=e.state;y(e,t,[],e._modules.root,!0),M(e,t,c)}function M(e,c,t){var i=e._state,r=e._scope;e.getters={},e._makeLocalGettersCache=Object.create(null);var o=e._wrappedGetters,s={},l={},u=(0,a.B)(!0);u.run((function(){z(o,(function(c,t){s[t]=H(c,e),l[t]=(0,n.Fl)((function(){return s[t]()})),Object.defineProperty(e.getters,t,{get:function(){return l[t].value},enumerable:!0})}))})),e._state=(0,a.qj)({data:c}),e._scope=u,e.strict&&N(e),i&&t&&e._withCommit((function(){i.data=null})),r&&r.stop()}function y(e,c,t,n,a){var i=!t.length,r=e._modules.getNamespace(t);if(n.namespaced&&(e._modulesNamespaceMap[r],e._modulesNamespaceMap[r]=n),!i&&!a){var o=_(c,t.slice(0,-1)),s=t[t.length-1];e._withCommit((function(){o[s]=n.state}))}var l=n.context=L(e,r,t);n.forEachMutation((function(c,t){var n=r+t;w(e,n,c,l)})),n.forEachAction((function(c,t){var n=c.root?t:r+t,a=c.handler||c;S(e,n,a,l)})),n.forEachGetter((function(c,t){var n=r+t;k(e,n,c,l)})),n.forEachChild((function(n,i){y(e,c,t.concat(i),n,a)}))}function L(e,c,t){var n=""===c,a={dispatch:n?e.dispatch:function(t,n,a){var i=A(t,n,a),r=i.payload,o=i.options,s=i.type;return o&&o.root||(s=c+s),e.dispatch(s,r)},commit:n?e.commit:function(t,n,a){var i=A(t,n,a),r=i.payload,o=i.options,s=i.type;o&&o.root||(s=c+s),e.commit(s,r,o)}};return Object.defineProperties(a,{getters:{get:n?function(){return e.getters}:function(){return x(e,c)}},state:{get:function(){return _(e.state,t)}}}),a}function x(e,c){if(!e._makeLocalGettersCache[c]){var t={},n=c.length;Object.keys(e.getters).forEach((function(a){if(a.slice(0,n)===c){var i=a.slice(n);Object.defineProperty(t,i,{get:function(){return e.getters[a]},enumerable:!0})}})),e._makeLocalGettersCache[c]=t}return e._makeLocalGettersCache[c]}function w(e,c,t,n){var a=e._mutations[c]||(e._mutations[c]=[]);a.push((function(c){t.call(e,n.state,c)}))}function S(e,c,t,n){var a=e._actions[c]||(e._actions[c]=[]);a.push((function(c){var a=t.call(e,{dispatch:n.dispatch,commit:n.commit,getters:n.getters,state:n.state,rootGetters:e.getters,rootState:e.state},c);return V(a)||(a=Promise.resolve(a)),e._devtoolHook?a.catch((function(c){throw e._devtoolHook.emit("vuex:error",c),c})):a}))}function k(e,c,t,n){e._wrappedGetters[c]||(e._wrappedGetters[c]=function(e){return t(n.state,n.getters,e.state,e.getters)})}function N(e){(0,n.YP)((function(){return e._state.data}),(function(){0}),{deep:!0,flush:"sync"})}function _(e,c){return c.reduce((function(e,c){return e[c]}),e)}function A(e,c,t){return g(e)&&e.type&&(t=c,c=e,e=e.type),{type:e,payload:c,options:t}}var E="vuex bindings",I="vuex:mutations",T="vuex:actions",P="vuex",F=0;function O(e,c){h({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[E]},(function(t){t.addTimelineLayer({id:I,label:"Vuex Mutations",color:R}),t.addTimelineLayer({id:T,label:"Vuex Actions",color:R}),t.addInspector({id:P,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),t.on.getInspectorTree((function(t){if(t.app===e&&t.inspectorId===P)if(t.filter){var n=[];j(n,c._modules.root,t.filter,""),t.rootNodes=n}else t.rootNodes=[$(c._modules.root,"")]})),t.on.getInspectorState((function(t){if(t.app===e&&t.inspectorId===P){var n=t.nodeId;x(c,n),t.state=q(Y(c._modules,n),"root"===n?c.getters:c._makeLocalGettersCache,n)}})),t.on.editInspectorState((function(t){if(t.app===e&&t.inspectorId===P){var n=t.nodeId,a=t.path;"root"!==n&&(a=n.split("/").filter(Boolean).concat(a)),c._withCommit((function(){t.set(c._state.data,a,t.state.value)}))}})),c.subscribe((function(e,c){var n={};e.payload&&(n.payload=e.payload),n.state=c,t.notifyComponentUpdate(),t.sendInspectorTree(P),t.sendInspectorState(P),t.addTimelineEvent({layerId:I,event:{time:Date.now(),title:e.type,data:n}})})),c.subscribeAction({before:function(e,c){var n={};e.payload&&(n.payload=e.payload),e._id=F++,e._time=Date.now(),n.state=c,t.addTimelineEvent({layerId:T,event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:n}})},after:function(e,c){var n={},a=Date.now()-e._time;n.duration={_custom:{type:"duration",display:a+"ms",tooltip:"Action duration",value:a}},e.payload&&(n.payload=e.payload),n.state=c,t.addTimelineEvent({layerId:T,event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:n}})}})}))}var R=8702998,D=6710886,B=16777215,W={label:"namespaced",textColor:B,backgroundColor:D};function U(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function $(e,c){return{id:c||"root",label:U(c),tags:e.namespaced?[W]:[],children:Object.keys(e._children).map((function(t){return $(e._children[t],c+t+"/")}))}}function j(e,c,t,n){n.includes(t)&&e.push({id:n||"root",label:n.endsWith("/")?n.slice(0,n.length-1):n||"Root",tags:c.namespaced?[W]:[]}),Object.keys(c._children).forEach((function(a){j(e,c._children[a],t,n+a+"/")}))}function q(e,c,t){c="root"===t?c:c[t];var n=Object.keys(c),a={state:Object.keys(e.state).map((function(c){return{key:c,editable:!0,value:e.state[c]}}))};if(n.length){var i=G(c);a.getters=Object.keys(i).map((function(e){return{key:e.endsWith("/")?U(e):e,editable:!1,value:Z((function(){return i[e]}))}}))}return a}function G(e){var c={};return Object.keys(e).forEach((function(t){var n=t.split("/");if(n.length>1){var a=c,i=n.pop();n.forEach((function(e){a[e]||(a[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),a=a[e]._custom.value})),a[i]=Z((function(){return e[t]}))}else c[t]=Z((function(){return e[t]}))})),c}function Y(e,c){var t=c.split("/").filter((function(e){return e}));return t.reduce((function(e,n,a){var i=e[n];if(!i)throw new Error('Missing module "'+n+'" for path "'+c+'".');return a===t.length-1?i:i._children}),"root"===c?e:e.root._children)}function Z(e){try{return e()}catch(c){return c}}var K=function(e,c){this.runtime=c,this._children=Object.create(null),this._rawModule=e;var t=e.state;this.state=("function"===typeof t?t():t)||{}},X={namespaced:{configurable:!0}};X.namespaced.get=function(){return!!this._rawModule.namespaced},K.prototype.addChild=function(e,c){this._children[e]=c},K.prototype.removeChild=function(e){delete this._children[e]},K.prototype.getChild=function(e){return this._children[e]},K.prototype.hasChild=function(e){return e in this._children},K.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},K.prototype.forEachChild=function(e){z(this._children,e)},K.prototype.forEachGetter=function(e){this._rawModule.getters&&z(this._rawModule.getters,e)},K.prototype.forEachAction=function(e){this._rawModule.actions&&z(this._rawModule.actions,e)},K.prototype.forEachMutation=function(e){this._rawModule.mutations&&z(this._rawModule.mutations,e)},Object.defineProperties(K.prototype,X);var J=function(e){this.register([],e,!1)};function Q(e,c,t){if(c.update(t),t.modules)for(var n in t.modules){if(!c.getChild(n))return void 0;Q(e.concat(n),c.getChild(n),t.modules[n])}}J.prototype.get=function(e){return e.reduce((function(e,c){return e.getChild(c)}),this.root)},J.prototype.getNamespace=function(e){var c=this.root;return e.reduce((function(e,t){return c=c.getChild(t),e+(c.namespaced?t+"/":"")}),"")},J.prototype.update=function(e){Q([],this.root,e)},J.prototype.register=function(e,c,t){var n=this;void 0===t&&(t=!0);var a=new K(c,t);if(0===e.length)this.root=a;else{var i=this.get(e.slice(0,-1));i.addChild(e[e.length-1],a)}c.modules&&z(c.modules,(function(c,a){n.register(e.concat(a),c,t)}))},J.prototype.unregister=function(e){var c=this.get(e.slice(0,-1)),t=e[e.length-1],n=c.getChild(t);n&&n.runtime&&c.removeChild(t)},J.prototype.isRegistered=function(e){var c=this.get(e.slice(0,-1)),t=e[e.length-1];return!!c&&c.hasChild(t)};function ee(e){return new ce(e)}var ce=function(e){var c=this;void 0===e&&(e={});var t=e.plugins;void 0===t&&(t=[]);var n=e.strict;void 0===n&&(n=!1);var a=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new J(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=a;var i=this,r=this,o=r.dispatch,s=r.commit;this.dispatch=function(e,c){return o.call(i,e,c)},this.commit=function(e,c,t){return s.call(i,e,c,t)},this.strict=n;var l=this._modules.root.state;y(this,l,[],this._modules.root),M(this,l),t.forEach((function(e){return e(c)}))},te={state:{configurable:!0}};ce.prototype.install=function(e,c){e.provide(c||v,this),e.config.globalProperties.$store=this;var t=void 0!==this._devtools&&this._devtools;t&&O(e,this)},te.state.get=function(){return this._state.data},te.state.set=function(e){0},ce.prototype.commit=function(e,c,t){var n=this,a=A(e,c,t),i=a.type,r=a.payload,o=(a.options,{type:i,payload:r}),s=this._mutations[i];s&&(this._withCommit((function(){s.forEach((function(e){e(r)}))})),this._subscribers.slice().forEach((function(e){return e(o,n.state)})))},ce.prototype.dispatch=function(e,c){var t=this,n=A(e,c),a=n.type,i=n.payload,r={type:a,payload:i},o=this._actions[a];if(o){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(r,t.state)}))}catch(l){0}var s=o.length>1?Promise.all(o.map((function(e){return e(i)}))):o[0](i);return new Promise((function(e,c){s.then((function(c){try{t._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(r,t.state)}))}catch(l){0}e(c)}),(function(e){try{t._actionSubscribers.filter((function(e){return e.error})).forEach((function(c){return c.error(r,t.state,e)}))}catch(l){0}c(e)}))}))}},ce.prototype.subscribe=function(e,c){return C(e,this._subscribers,c)},ce.prototype.subscribeAction=function(e,c){var t="function"===typeof e?{before:e}:e;return C(t,this._actionSubscribers,c)},ce.prototype.watch=function(e,c,t){var a=this;return(0,n.YP)((function(){return e(a.state,a.getters)}),c,Object.assign({},t))},ce.prototype.replaceState=function(e){var c=this;this._withCommit((function(){c._state.data=e}))},ce.prototype.registerModule=function(e,c,t){void 0===t&&(t={}),"string"===typeof e&&(e=[e]),this._modules.register(e,c),y(this,this.state,e,this._modules.get(e),t.preserveState),M(this,this.state)},ce.prototype.unregisterModule=function(e){var c=this;"string"===typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit((function(){var t=_(c.state,e.slice(0,-1));delete t[e[e.length-1]]})),b(this)},ce.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),this._modules.isRegistered(e)},ce.prototype.hotUpdate=function(e){this._modules.update(e),b(this,!0)},ce.prototype._withCommit=function(e){var c=this._committing;this._committing=!0,e(),this._committing=c},Object.defineProperties(ce.prototype,te);oe((function(e,c){var t={};return ie(c).forEach((function(c){var n=c.key,a=c.val;t[n]=function(){var c=this.$store.state,t=this.$store.getters;if(e){var n=se(this.$store,"mapState",e);if(!n)return;c=n.context.state,t=n.context.getters}return"function"===typeof a?a.call(this,c,t):c[a]},t[n].vuex=!0})),t})),oe((function(e,c){var t={};return ie(c).forEach((function(c){var n=c.key,a=c.val;t[n]=function(){var c=[],t=arguments.length;while(t--)c[t]=arguments[t];var n=this.$store.commit;if(e){var i=se(this.$store,"mapMutations",e);if(!i)return;n=i.context.commit}return"function"===typeof a?a.apply(this,[n].concat(c)):n.apply(this.$store,[a].concat(c))}})),t}));var ne=oe((function(e,c){var t={};return ie(c).forEach((function(c){var n=c.key,a=c.val;a=e+a,t[n]=function(){if(!e||se(this.$store,"mapGetters",e))return this.$store.getters[a]},t[n].vuex=!0})),t})),ae=oe((function(e,c){var t={};return ie(c).forEach((function(c){var n=c.key,a=c.val;t[n]=function(){var c=[],t=arguments.length;while(t--)c[t]=arguments[t];var n=this.$store.dispatch;if(e){var i=se(this.$store,"mapActions",e);if(!i)return;n=i.context.dispatch}return"function"===typeof a?a.apply(this,[n].concat(c)):n.apply(this.$store,[a].concat(c))}})),t}));function ie(e){return re(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(c){return{key:c,val:e[c]}})):[]}function re(e){return Array.isArray(e)||g(e)}function oe(e){return function(c,t){return"string"!==typeof c?(t=c,c=""):"/"!==c.charAt(c.length-1)&&(c+="/"),e(c,t)}}function se(e,c,t){var n=e._modulesNamespaceMap[t];return n}},509:function(e,c,t){var n=t(9985),a=t(3691),i=TypeError;e.exports=function(e){if(n(e))return e;throw new i(a(e)+" is not a function")}},3550:function(e,c,t){var n=t(9985),a=String,i=TypeError;e.exports=function(e){if("object"==typeof e||n(e))return e;throw new i("Can't set "+a(e)+" as a prototype")}},767:function(e,c,t){var n=t(3622),a=TypeError;e.exports=function(e,c){if(n(c,e))return e;throw new a("Incorrect invocation")}},5027:function(e,c,t){var n=t(8999),a=String,i=TypeError;e.exports=function(e){if(n(e))return e;throw new i(a(e)+" is not an object")}},7075:function(e){e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},4872:function(e,c,t){var n,a,i,r=t(7075),o=t(7697),s=t(9037),l=t(9985),u=t(8999),f=t(6812),d=t(926),m=t(3691),p=t(5773),h=t(1880),v=t(2148),z=t(3622),g=t(1868),V=t(9385),H=t(4201),C=t(4630),b=t(618),M=b.enforce,y=b.get,L=s.Int8Array,x=L&&L.prototype,w=s.Uint8ClampedArray,S=w&&w.prototype,k=L&&g(L),N=x&&g(x),_=Object.prototype,A=s.TypeError,E=H("toStringTag"),I=C("TYPED_ARRAY_TAG"),T="TypedArrayConstructor",P=r&&!!V&&"Opera"!==d(s.opera),F=!1,O={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},R={BigInt64Array:8,BigUint64Array:8},D=function(e){if(!u(e))return!1;var c=d(e);return"DataView"===c||f(O,c)||f(R,c)},B=function(e){var c=g(e);if(u(c)){var t=y(c);return t&&f(t,T)?t[T]:B(c)}},W=function(e){if(!u(e))return!1;var c=d(e);return f(O,c)||f(R,c)},U=function(e){if(W(e))return e;throw new A("Target is not a typed array")},$=function(e){if(l(e)&&(!V||z(k,e)))return e;throw new A(m(e)+" is not a typed array constructor")},j=function(e,c,t,n){if(o){if(t)for(var a in O){var i=s[a];if(i&&f(i.prototype,e))try{delete i.prototype[e]}catch(r){try{i.prototype[e]=c}catch(l){}}}N[e]&&!t||h(N,e,t?c:P&&x[e]||c,n)}},q=function(e,c,t){var n,a;if(o){if(V){if(t)for(n in O)if(a=s[n],a&&f(a,e))try{delete a[e]}catch(i){}if(k[e]&&!t)return;try{return h(k,e,t?c:P&&k[e]||c)}catch(i){}}for(n in O)a=s[n],!a||a[e]&&!t||h(a,e,c)}};for(n in O)a=s[n],i=a&&a.prototype,i?M(i)[T]=a:P=!1;for(n in R)a=s[n],i=a&&a.prototype,i&&(M(i)[T]=a);if((!P||!l(k)||k===Function.prototype)&&(k=function(){throw new A("Incorrect invocation")},P))for(n in O)s[n]&&V(s[n],k);if((!P||!N||N===_)&&(N=k.prototype,P))for(n in O)s[n]&&V(s[n].prototype,N);if(P&&g(S)!==N&&V(S,N),o&&!f(N,E))for(n in F=!0,v(N,E,{configurable:!0,get:function(){return u(this)?this[I]:void 0}}),O)s[n]&&p(s[n],I,n);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:P,TYPED_ARRAY_TAG:F&&I,aTypedArray:U,aTypedArrayConstructor:$,exportTypedArrayMethod:j,exportTypedArrayStaticMethod:q,getTypedArrayConstructor:B,isView:D,isTypedArray:W,TypedArray:k,TypedArrayPrototype:N}},9976:function(e,c,t){var n=t(6310);e.exports=function(e,c){var t=0,a=n(c),i=new e(a);while(a>t)i[t]=c[t++];return i}},4328:function(e,c,t){var n=t(5290),a=t(7578),i=t(6310),r=function(e){return function(c,t,r){var o,s=n(c),l=i(s),u=a(r,l);if(e&&t!==t){while(l>u)if(o=s[u++],o!==o)return!0}else for(;l>u;u++)if((e||u in s)&&s[u]===t)return e||u||0;return!e&&-1}};e.exports={includes:r(!0),indexOf:r(!1)}},5649:function(e,c,t){var n=t(7697),a=t(2297),i=TypeError,r=Object.getOwnPropertyDescriptor,o=n&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=o?function(e,c){if(a(e)&&!r(e,"length").writable)throw new i("Cannot set read only .length");return e.length=c}:function(e,c){return e.length=c}},6166:function(e,c,t){var n=t(6310);e.exports=function(e,c){for(var t=n(e),a=new c(t),i=0;i<t;i++)a[i]=e[t-i-1];return a}},6134:function(e,c,t){var n=t(6310),a=t(8700),i=RangeError;e.exports=function(e,c,t,r){var o=n(e),s=a(t),l=s<0?o+s:s;if(l>=o||l<0)throw new i("Incorrect index");for(var u=new c(o),f=0;f<o;f++)u[f]=f===l?r:e[f];return u}},6648:function(e,c,t){var n=t(8844),a=n({}.toString),i=n("".slice);e.exports=function(e){return i(a(e),8,-1)}},926:function(e,c,t){var n=t(3043),a=t(9985),i=t(6648),r=t(4201),o=r("toStringTag"),s=Object,l="Arguments"===i(function(){return arguments}()),u=function(e,c){try{return e[c]}catch(t){}};e.exports=n?i:function(e){var c,t,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(t=u(c=s(e),o))?t:l?i(c):"Object"===(n=i(c))&&a(c.callee)?"Arguments":n}},8758:function(e,c,t){var n=t(6812),a=t(9152),i=t(2474),r=t(2560);e.exports=function(e,c,t){for(var o=a(c),s=r.f,l=i.f,u=0;u<o.length;u++){var f=o[u];n(e,f)||t&&n(t,f)||s(e,f,l(c,f))}}},1748:function(e,c,t){var n=t(3689);e.exports=!n((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},5773:function(e,c,t){var n=t(7697),a=t(2560),i=t(5684);e.exports=n?function(e,c,t){return a.f(e,c,i(1,t))}:function(e,c,t){return e[c]=t,e}},5684:function(e){e.exports=function(e,c){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:c}}},2148:function(e,c,t){var n=t(8702),a=t(2560);e.exports=function(e,c,t){return t.get&&n(t.get,c,{getter:!0}),t.set&&n(t.set,c,{setter:!0}),a.f(e,c,t)}},1880:function(e,c,t){var n=t(9985),a=t(2560),i=t(8702),r=t(5014);e.exports=function(e,c,t,o){o||(o={});var s=o.enumerable,l=void 0!==o.name?o.name:c;if(n(t)&&i(t,l,o),o.global)s?e[c]=t:r(c,t);else{try{o.unsafe?e[c]&&(s=!0):delete e[c]}catch(u){}s?e[c]=t:a.f(e,c,{value:t,enumerable:!1,configurable:!o.nonConfigurable,writable:!o.nonWritable})}return e}},5014:function(e,c,t){var n=t(9037),a=Object.defineProperty;e.exports=function(e,c){try{a(n,e,{value:c,configurable:!0,writable:!0})}catch(t){n[e]=c}return c}},7697:function(e,c,t){var n=t(3689);e.exports=!n((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},2659:function(e){var c="object"==typeof document&&document.all,t="undefined"==typeof c&&void 0!==c;e.exports={all:c,IS_HTMLDDA:t}},6420:function(e,c,t){var n=t(9037),a=t(8999),i=n.document,r=a(i)&&a(i.createElement);e.exports=function(e){return r?i.createElement(e):{}}},5565:function(e){var c=TypeError,t=9007199254740991;e.exports=function(e){if(e>t)throw c("Maximum allowed index exceeded");return e}},7136:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},71:function(e){e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},3615:function(e,c,t){var n,a,i=t(9037),r=t(71),o=i.process,s=i.Deno,l=o&&o.versions||s&&s.version,u=l&&l.v8;u&&(n=u.split("."),a=n[0]>0&&n[0]<4?1:+(n[0]+n[1])),!a&&r&&(n=r.match(/Edge\/(\d+)/),(!n||n[1]>=74)&&(n=r.match(/Chrome\/(\d+)/),n&&(a=+n[1]))),e.exports=a},2739:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},6610:function(e,c,t){var n=t(8844),a=Error,i=n("".replace),r=function(e){return String(new a(e).stack)}("zxcasd"),o=/\n\s*at [^:]*:[^\n]*/,s=o.test(r);e.exports=function(e,c){if(s&&"string"==typeof e&&!a.prepareStackTrace)while(c--)e=i(e,o,"");return e}},9989:function(e,c,t){var n=t(9037),a=t(2474).f,i=t(5773),r=t(1880),o=t(5014),s=t(8758),l=t(5266);e.exports=function(e,c){var t,u,f,d,m,p,h=e.target,v=e.global,z=e.stat;if(u=v?n:z?n[h]||o(h,{}):(n[h]||{}).prototype,u)for(f in c){if(m=c[f],e.dontCallGetSet?(p=a(u,f),d=p&&p.value):d=u[f],t=l(v?f:h+(z?".":"#")+f,e.forced),!t&&void 0!==d){if(typeof m==typeof d)continue;s(m,d)}(e.sham||d&&d.sham)&&i(m,"sham",!0),r(u,f,m,e)}}},3689:function(e){e.exports=function(e){try{return!!e()}catch(c){return!0}}},7215:function(e,c,t){var n=t(3689);e.exports=!n((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},2615:function(e,c,t){var n=t(7215),a=Function.prototype.call;e.exports=n?a.bind(a):function(){return a.apply(a,arguments)}},1236:function(e,c,t){var n=t(7697),a=t(6812),i=Function.prototype,r=n&&Object.getOwnPropertyDescriptor,o=a(i,"name"),s=o&&"something"===function(){}.name,l=o&&(!n||n&&r(i,"name").configurable);e.exports={EXISTS:o,PROPER:s,CONFIGURABLE:l}},2743:function(e,c,t){var n=t(8844),a=t(509);e.exports=function(e,c,t){try{return n(a(Object.getOwnPropertyDescriptor(e,c)[t]))}catch(i){}}},8844:function(e,c,t){var n=t(7215),a=Function.prototype,i=a.call,r=n&&a.bind.bind(i,i);e.exports=n?r:function(e){return function(){return i.apply(e,arguments)}}},6058:function(e,c,t){var n=t(9037),a=t(9985),i=function(e){return a(e)?e:void 0};e.exports=function(e,c){return arguments.length<2?i(n[e]):n[e]&&n[e][c]}},4849:function(e,c,t){var n=t(509),a=t(981);e.exports=function(e,c){var t=e[c];return a(t)?void 0:n(t)}},9037:function(e,c,t){var n=function(e){return e&&e.Math===Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t.g&&t.g)||function(){return this}()||this||Function("return this")()},6812:function(e,c,t){var n=t(8844),a=t(690),i=n({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,c){return i(a(e),c)}},7248:function(e){e.exports={}},8506:function(e,c,t){var n=t(7697),a=t(3689),i=t(6420);e.exports=!n&&!a((function(){return 7!==Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},4413:function(e,c,t){var n=t(8844),a=t(3689),i=t(6648),r=Object,o=n("".split);e.exports=a((function(){return!r("z").propertyIsEnumerable(0)}))?function(e){return"String"===i(e)?o(e,""):r(e)}:r},3457:function(e,c,t){var n=t(9985),a=t(8999),i=t(9385);e.exports=function(e,c,t){var r,o;return i&&n(r=c.constructor)&&r!==t&&a(o=r.prototype)&&o!==t.prototype&&i(e,o),e}},6738:function(e,c,t){var n=t(8844),a=t(9985),i=t(4091),r=n(Function.toString);a(i.inspectSource)||(i.inspectSource=function(e){return r(e)}),e.exports=i.inspectSource},618:function(e,c,t){var n,a,i,r=t(9834),o=t(9037),s=t(8999),l=t(5773),u=t(6812),f=t(4091),d=t(2713),m=t(7248),p="Object already initialized",h=o.TypeError,v=o.WeakMap,z=function(e){return i(e)?a(e):n(e,{})},g=function(e){return function(c){var t;if(!s(c)||(t=a(c)).type!==e)throw new h("Incompatible receiver, "+e+" required");return t}};if(r||f.state){var V=f.state||(f.state=new v);V.get=V.get,V.has=V.has,V.set=V.set,n=function(e,c){if(V.has(e))throw new h(p);return c.facade=e,V.set(e,c),c},a=function(e){return V.get(e)||{}},i=function(e){return V.has(e)}}else{var H=d("state");m[H]=!0,n=function(e,c){if(u(e,H))throw new h(p);return c.facade=e,l(e,H,c),c},a=function(e){return u(e,H)?e[H]:{}},i=function(e){return u(e,H)}}e.exports={set:n,get:a,has:i,enforce:z,getterFor:g}},2297:function(e,c,t){var n=t(6648);e.exports=Array.isArray||function(e){return"Array"===n(e)}},9401:function(e,c,t){var n=t(926);e.exports=function(e){var c=n(e);return"BigInt64Array"===c||"BigUint64Array"===c}},9985:function(e,c,t){var n=t(2659),a=n.all;e.exports=n.IS_HTMLDDA?function(e){return"function"==typeof e||e===a}:function(e){return"function"==typeof e}},5266:function(e,c,t){var n=t(3689),a=t(9985),i=/#|\.prototype\./,r=function(e,c){var t=s[o(e)];return t===u||t!==l&&(a(c)?n(c):!!c)},o=r.normalize=function(e){return String(e).replace(i,".").toLowerCase()},s=r.data={},l=r.NATIVE="N",u=r.POLYFILL="P";e.exports=r},981:function(e){e.exports=function(e){return null===e||void 0===e}},8999:function(e,c,t){var n=t(9985),a=t(2659),i=a.all;e.exports=a.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:n(e)||e===i}:function(e){return"object"==typeof e?null!==e:n(e)}},3931:function(e){e.exports=!1},734:function(e,c,t){var n=t(6058),a=t(9985),i=t(3622),r=t(9525),o=Object;e.exports=r?function(e){return"symbol"==typeof e}:function(e){var c=n("Symbol");return a(c)&&i(c.prototype,o(e))}},6310:function(e,c,t){var n=t(3126);e.exports=function(e){return n(e.length)}},8702:function(e,c,t){var n=t(8844),a=t(3689),i=t(9985),r=t(6812),o=t(7697),s=t(1236).CONFIGURABLE,l=t(6738),u=t(618),f=u.enforce,d=u.get,m=String,p=Object.defineProperty,h=n("".slice),v=n("".replace),z=n([].join),g=o&&!a((function(){return 8!==p((function(){}),"length",{value:8}).length})),V=String(String).split("String"),H=e.exports=function(e,c,t){"Symbol("===h(m(c),0,7)&&(c="["+v(m(c),/^Symbol\(([^)]*)\)/,"$1")+"]"),t&&t.getter&&(c="get "+c),t&&t.setter&&(c="set "+c),(!r(e,"name")||s&&e.name!==c)&&(o?p(e,"name",{value:c,configurable:!0}):e.name=c),g&&t&&r(t,"arity")&&e.length!==t.arity&&p(e,"length",{value:t.arity});try{t&&r(t,"constructor")&&t.constructor?o&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(a){}var n=f(e);return r(n,"source")||(n.source=z(V,"string"==typeof c?c:"")),e};Function.prototype.toString=H((function(){return i(this)&&d(this).source||l(this)}),"toString")},8828:function(e){var c=Math.ceil,t=Math.floor;e.exports=Math.trunc||function(e){var n=+e;return(n>0?t:c)(n)}},3841:function(e,c,t){var n=t(4327);e.exports=function(e,c){return void 0===e?arguments.length<2?"":c:n(e)}},2560:function(e,c,t){var n=t(7697),a=t(8506),i=t(5648),r=t(5027),o=t(8360),s=TypeError,l=Object.defineProperty,u=Object.getOwnPropertyDescriptor,f="enumerable",d="configurable",m="writable";c.f=n?i?function(e,c,t){if(r(e),c=o(c),r(t),"function"===typeof e&&"prototype"===c&&"value"in t&&m in t&&!t[m]){var n=u(e,c);n&&n[m]&&(e[c]=t.value,t={configurable:d in t?t[d]:n[d],enumerable:f in t?t[f]:n[f],writable:!1})}return l(e,c,t)}:l:function(e,c,t){if(r(e),c=o(c),r(t),a)try{return l(e,c,t)}catch(n){}if("get"in t||"set"in t)throw new s("Accessors not supported");return"value"in t&&(e[c]=t.value),e}},2474:function(e,c,t){var n=t(7697),a=t(2615),i=t(9556),r=t(5684),o=t(5290),s=t(8360),l=t(6812),u=t(8506),f=Object.getOwnPropertyDescriptor;c.f=n?f:function(e,c){if(e=o(e),c=s(c),u)try{return f(e,c)}catch(t){}if(l(e,c))return r(!a(i.f,e,c),e[c])}},2741:function(e,c,t){var n=t(4948),a=t(2739),i=a.concat("length","prototype");c.f=Object.getOwnPropertyNames||function(e){return n(e,i)}},7518:function(e,c){c.f=Object.getOwnPropertySymbols},1868:function(e,c,t){var n=t(6812),a=t(9985),i=t(690),r=t(2713),o=t(1748),s=r("IE_PROTO"),l=Object,u=l.prototype;e.exports=o?l.getPrototypeOf:function(e){var c=i(e);if(n(c,s))return c[s];var t=c.constructor;return a(t)&&c instanceof t?t.prototype:c instanceof l?u:null}},3622:function(e,c,t){var n=t(8844);e.exports=n({}.isPrototypeOf)},4948:function(e,c,t){var n=t(8844),a=t(6812),i=t(5290),r=t(4328).indexOf,o=t(7248),s=n([].push);e.exports=function(e,c){var t,n=i(e),l=0,u=[];for(t in n)!a(o,t)&&a(n,t)&&s(u,t);while(c.length>l)a(n,t=c[l++])&&(~r(u,t)||s(u,t));return u}},9556:function(e,c){var t={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,a=n&&!t.call({1:2},1);c.f=a?function(e){var c=n(this,e);return!!c&&c.enumerable}:t},9385:function(e,c,t){var n=t(2743),a=t(5027),i=t(3550);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,c=!1,t={};try{e=n(Object.prototype,"__proto__","set"),e(t,[]),c=t instanceof Array}catch(r){}return function(t,n){return a(t),i(n),c?e(t,n):t.__proto__=n,t}}():void 0)},5899:function(e,c,t){var n=t(2615),a=t(9985),i=t(8999),r=TypeError;e.exports=function(e,c){var t,o;if("string"===c&&a(t=e.toString)&&!i(o=n(t,e)))return o;if(a(t=e.valueOf)&&!i(o=n(t,e)))return o;if("string"!==c&&a(t=e.toString)&&!i(o=n(t,e)))return o;throw new r("Can't convert object to primitive value")}},9152:function(e,c,t){var n=t(6058),a=t(8844),i=t(2741),r=t(7518),o=t(5027),s=a([].concat);e.exports=n("Reflect","ownKeys")||function(e){var c=i.f(o(e)),t=r.f;return t?s(c,t(e)):c}},4684:function(e,c,t){var n=t(981),a=TypeError;e.exports=function(e){if(n(e))throw new a("Can't call method on "+e);return e}},2713:function(e,c,t){var n=t(3430),a=t(4630),i=n("keys");e.exports=function(e){return i[e]||(i[e]=a(e))}},4091:function(e,c,t){var n=t(9037),a=t(5014),i="__core-js_shared__",r=n[i]||a(i,{});e.exports=r},3430:function(e,c,t){var n=t(3931),a=t(4091);(e.exports=function(e,c){return a[e]||(a[e]=void 0!==c?c:{})})("versions",[]).push({version:"3.33.2",mode:n?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.33.2/LICENSE",source:"https://github.com/zloirock/core-js"})},146:function(e,c,t){var n=t(3615),a=t(3689),i=t(9037),r=i.String;e.exports=!!Object.getOwnPropertySymbols&&!a((function(){var e=Symbol("symbol detection");return!r(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},7578:function(e,c,t){var n=t(8700),a=Math.max,i=Math.min;e.exports=function(e,c){var t=n(e);return t<0?a(t+c,0):i(t,c)}},1530:function(e,c,t){var n=t(8732),a=TypeError;e.exports=function(e){var c=n(e,"number");if("number"==typeof c)throw new a("Can't convert number to bigint");return BigInt(c)}},5290:function(e,c,t){var n=t(4413),a=t(4684);e.exports=function(e){return n(a(e))}},8700:function(e,c,t){var n=t(8828);e.exports=function(e){var c=+e;return c!==c||0===c?0:n(c)}},3126:function(e,c,t){var n=t(8700),a=Math.min;e.exports=function(e){return e>0?a(n(e),9007199254740991):0}},690:function(e,c,t){var n=t(4684),a=Object;e.exports=function(e){return a(n(e))}},8732:function(e,c,t){var n=t(2615),a=t(8999),i=t(734),r=t(4849),o=t(5899),s=t(4201),l=TypeError,u=s("toPrimitive");e.exports=function(e,c){if(!a(e)||i(e))return e;var t,s=r(e,u);if(s){if(void 0===c&&(c="default"),t=n(s,e,c),!a(t)||i(t))return t;throw new l("Can't convert object to primitive value")}return void 0===c&&(c="number"),o(e,c)}},8360:function(e,c,t){var n=t(8732),a=t(734);e.exports=function(e){var c=n(e,"string");return a(c)?c:c+""}},3043:function(e,c,t){var n=t(4201),a=n("toStringTag"),i={};i[a]="z",e.exports="[object z]"===String(i)},4327:function(e,c,t){var n=t(926),a=String;e.exports=function(e){if("Symbol"===n(e))throw new TypeError("Cannot convert a Symbol value to a string");return a(e)}},3691:function(e){var c=String;e.exports=function(e){try{return c(e)}catch(t){return"Object"}}},4630:function(e,c,t){var n=t(8844),a=0,i=Math.random(),r=n(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+r(++a+i,36)}},9525:function(e,c,t){var n=t(146);e.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5648:function(e,c,t){var n=t(7697),a=t(3689);e.exports=n&&a((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},1500:function(e){var c=TypeError;e.exports=function(e,t){if(e<t)throw new c("Not enough arguments");return e}},9834:function(e,c,t){var n=t(9037),a=t(9985),i=n.WeakMap;e.exports=a(i)&&/native code/.test(String(i))},4201:function(e,c,t){var n=t(9037),a=t(3430),i=t(6812),r=t(4630),o=t(146),s=t(9525),l=n.Symbol,u=a("wks"),f=s?l["for"]||l:l&&l.withoutSetter||r;e.exports=function(e){return i(u,e)||(u[e]=o&&i(l,e)?l[e]:f("Symbol."+e)),u[e]}},560:function(e,c,t){var n=t(9989),a=t(690),i=t(6310),r=t(5649),o=t(5565),s=t(3689),l=s((function(){return 4294967297!==[].push.call({length:4294967296},1)})),u=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},f=l||!u();n({target:"Array",proto:!0,arity:1,forced:f},{push:function(e){var c=a(this),t=i(c),n=arguments.length;o(t+n);for(var s=0;s<n;s++)c[t]=arguments[s],t++;return r(c,t),t}})},4224:function(e,c,t){var n=t(6166),a=t(4872),i=a.aTypedArray,r=a.exportTypedArrayMethod,o=a.getTypedArrayConstructor;r("toReversed",(function(){return n(i(this),o(this))}))},1121:function(e,c,t){var n=t(4872),a=t(8844),i=t(509),r=t(9976),o=n.aTypedArray,s=n.getTypedArrayConstructor,l=n.exportTypedArrayMethod,u=a(n.TypedArrayPrototype.sort);l("toSorted",(function(e){void 0!==e&&i(e);var c=o(this),t=r(s(c),c);return u(t,e)}))},7133:function(e,c,t){var n=t(6134),a=t(4872),i=t(9401),r=t(8700),o=t(1530),s=a.aTypedArray,l=a.getTypedArrayConstructor,u=a.exportTypedArrayMethod,f=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(e){return 8===e}}();u("with",{with:function(e,c){var t=s(this),a=r(e),u=i(t)?o(c):+c;return n(t,l(t),a,u)}}["with"],!f)},3429:function(e,c,t){var n=t(9989),a=t(9037),i=t(6058),r=t(5684),o=t(2560).f,s=t(6812),l=t(767),u=t(3457),f=t(3841),d=t(7136),m=t(6610),p=t(7697),h=t(3931),v="DOMException",z=i("Error"),g=i(v),V=function(){l(this,H);var e=arguments.length,c=f(e<1?void 0:arguments[0]),t=f(e<2?void 0:arguments[1],"Error"),n=new g(c,t),a=new z(c);return a.name=v,o(n,"stack",r(1,m(a.stack,1))),u(n,this,V),n},H=V.prototype=g.prototype,C="stack"in new z(v),b="stack"in new g(1,2),M=g&&p&&Object.getOwnPropertyDescriptor(a,v),y=!!M&&!(M.writable&&M.configurable),L=C&&!y&&!b;n({global:!0,constructor:!0,forced:h||L},{DOMException:L?V:g});var x=i(v),w=x.prototype;if(w.constructor!==x)for(var S in h||o(w,"constructor",r(1,x)),d)if(s(d,S)){var k=d[S],N=k.s;s(x,N)||o(x,N,r(6,k.c))}},8858:function(e,c,t){var n=t(1880),a=t(8844),i=t(4327),r=t(1500),o=URLSearchParams,s=o.prototype,l=a(s.append),u=a(s["delete"]),f=a(s.forEach),d=a([].push),m=new o("a=1&a=2&b=3");m["delete"]("a",1),m["delete"]("b",void 0),m+""!=="a=2"&&n(s,"delete",(function(e){var c=arguments.length,t=c<2?void 0:arguments[1];if(c&&void 0===t)return u(this,e);var n=[];f(this,(function(e,c){d(n,{key:c,value:e})})),r(c,1);var a,o=i(e),s=i(t),m=0,p=0,h=!1,v=n.length;while(m<v)a=n[m++],h||a.key===o?(h=!0,u(this,a.key)):p++;while(p<v)a=n[p++],a.key===o&&a.value===s||l(this,a.key,a.value)}),{enumerable:!0,unsafe:!0})},1318:function(e,c,t){var n=t(1880),a=t(8844),i=t(4327),r=t(1500),o=URLSearchParams,s=o.prototype,l=a(s.getAll),u=a(s.has),f=new o("a=1");!f.has("a",2)&&f.has("a",void 0)||n(s,"has",(function(e){var c=arguments.length,t=c<2?void 0:arguments[1];if(c&&void 0===t)return u(this,e);var n=l(this,e);r(c,1);var a=i(t),o=0;while(o<n.length)if(n[o++]===a)return!0;return!1}),{enumerable:!0,unsafe:!0})},3228:function(e,c,t){var n=t(7697),a=t(8844),i=t(2148),r=URLSearchParams.prototype,o=a(r.forEach);n&&!("size"in r)&&i(r,"size",{get:function(){var e=0;return o(this,(function(){e++})),e},configurable:!0,enumerable:!0})},7077:function(e,c,t){t.d(c,{Jn:function(){return he},qX:function(){return fe},Xd:function(){return ue},Mq:function(){return ze},ZF:function(){return ve},KN:function(){return ge}});t(560);var n=t(7142),a=t(5168),i=t(223);t(3429);const r=(e,c)=>c.some((c=>e instanceof c));let o,s;function l(){return o||(o=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u(){return s||(s=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const f=new WeakMap,d=new WeakMap,m=new WeakMap,p=new WeakMap,h=new WeakMap;function v(e){const c=new Promise(((c,t)=>{const n=()=>{e.removeEventListener("success",a),e.removeEventListener("error",i)},a=()=>{c(b(e.result)),n()},i=()=>{t(e.error),n()};e.addEventListener("success",a),e.addEventListener("error",i)}));return c.then((c=>{c instanceof IDBCursor&&f.set(c,e)})).catch((()=>{})),h.set(c,e),c}function z(e){if(d.has(e))return;const c=new Promise(((c,t)=>{const n=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",i),e.removeEventListener("abort",i)},a=()=>{c(),n()},i=()=>{t(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",a),e.addEventListener("error",i),e.addEventListener("abort",i)}));d.set(e,c)}let g={get(e,c,t){if(e instanceof IDBTransaction){if("done"===c)return d.get(e);if("objectStoreNames"===c)return e.objectStoreNames||m.get(e);if("store"===c)return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return b(e[c])},set(e,c,t){return e[c]=t,!0},has(e,c){return e instanceof IDBTransaction&&("done"===c||"store"===c)||c in e}};function V(e){g=e(g)}function H(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?u().includes(e)?function(...c){return e.apply(M(this),c),b(f.get(this))}:function(...c){return b(e.apply(M(this),c))}:function(c,...t){const n=e.call(M(this),c,...t);return m.set(n,c.sort?c.sort():[c]),b(n)}}function C(e){return"function"===typeof e?H(e):(e instanceof IDBTransaction&&z(e),r(e,l())?new Proxy(e,g):e)}function b(e){if(e instanceof IDBRequest)return v(e);if(p.has(e))return p.get(e);const c=C(e);return c!==e&&(p.set(e,c),h.set(c,e)),c}const M=e=>h.get(e);function y(e,c,{blocked:t,upgrade:n,blocking:a,terminated:i}={}){const r=indexedDB.open(e,c),o=b(r);return n&&r.addEventListener("upgradeneeded",(e=>{n(b(r.result),e.oldVersion,e.newVersion,b(r.transaction),e)})),t&&r.addEventListener("blocked",(e=>t(e.oldVersion,e.newVersion,e))),o.then((e=>{i&&e.addEventListener("close",(()=>i())),a&&e.addEventListener("versionchange",(e=>a(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),o}const L=["get","getKey","getAll","getAllKeys","count"],x=["put","add","delete","clear"],w=new Map;function S(e,c){if(!(e instanceof IDBDatabase)||c in e||"string"!==typeof c)return;if(w.get(c))return w.get(c);const t=c.replace(/FromIndex$/,""),n=c!==t,a=x.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!a&&!L.includes(t))return;const i=async function(e,...c){const i=this.transaction(e,a?"readwrite":"readonly");let r=i.store;return n&&(r=r.index(c.shift())),(await Promise.all([r[t](...c),a&&i.done]))[0]};return w.set(c,i),i}V((e=>({...e,get:(c,t,n)=>S(c,t)||e.get(c,t,n),has:(c,t)=>!!S(c,t)||e.has(c,t)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class k{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(N(e)){const c=e.getImmediate();return`${c.library}/${c.version}`}return null})).filter((e=>e)).join(" ")}}function N(e){const c=e.getComponent();return"VERSION"===(null===c||void 0===c?void 0:c.type)}const _="@firebase/app",A="0.9.25",E=new a.Yd("@firebase/app"),I="@firebase/app-compat",T="@firebase/analytics-compat",P="@firebase/analytics",F="@firebase/app-check-compat",O="@firebase/app-check",R="@firebase/auth",D="@firebase/auth-compat",B="@firebase/database",W="@firebase/database-compat",U="@firebase/functions",$="@firebase/functions-compat",j="@firebase/installations",q="@firebase/installations-compat",G="@firebase/messaging",Y="@firebase/messaging-compat",Z="@firebase/performance",K="@firebase/performance-compat",X="@firebase/remote-config",J="@firebase/remote-config-compat",Q="@firebase/storage",ee="@firebase/storage-compat",ce="@firebase/firestore",te="@firebase/firestore-compat",ne="firebase",ae="10.7.1",ie="[DEFAULT]",re={[_]:"fire-core",[I]:"fire-core-compat",[P]:"fire-analytics",[T]:"fire-analytics-compat",[O]:"fire-app-check",[F]:"fire-app-check-compat",[R]:"fire-auth",[D]:"fire-auth-compat",[B]:"fire-rtdb",[W]:"fire-rtdb-compat",[U]:"fire-fn",[$]:"fire-fn-compat",[j]:"fire-iid",[q]:"fire-iid-compat",[G]:"fire-fcm",[Y]:"fire-fcm-compat",[Z]:"fire-perf",[K]:"fire-perf-compat",[X]:"fire-rc",[J]:"fire-rc-compat",[Q]:"fire-gcs",[ee]:"fire-gcs-compat",[ce]:"fire-fst",[te]:"fire-fst-compat","fire-js":"fire-js",[ne]:"fire-js-all"},oe=new Map,se=new Map;function le(e,c){try{e.container.addComponent(c)}catch(t){E.debug(`Component ${c.name} failed to register with FirebaseApp ${e.name}`,t)}}function ue(e){const c=e.name;if(se.has(c))return E.debug(`There were multiple attempts to register component ${c}.`),!1;se.set(c,e);for(const t of oe.values())le(t,e);return!0}function fe(e,c){const t=e.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),e.container.getProvider(c)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const de={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},me=new i.LL("app","Firebase",de);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pe{constructor(e,c,t){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},c),this._name=c.name,this._automaticDataCollectionEnabled=c.automaticDataCollectionEnabled,this._container=t,this.container.addComponent(new n.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw me.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he=ae;function ve(e,c={}){let t=e;if("object"!==typeof c){const e=c;c={name:e}}const a=Object.assign({name:ie,automaticDataCollectionEnabled:!1},c),r=a.name;if("string"!==typeof r||!r)throw me.create("bad-app-name",{appName:String(r)});if(t||(t=(0,i.aH)()),!t)throw me.create("no-options");const o=oe.get(r);if(o){if((0,i.vZ)(t,o.options)&&(0,i.vZ)(a,o.config))return o;throw me.create("duplicate-app",{appName:r})}const s=new n.H0(r);for(const n of se.values())s.addComponent(n);const l=new pe(t,a,s);return oe.set(r,l),l}function ze(e=ie){const c=oe.get(e);if(!c&&e===ie&&(0,i.aH)())return ve();if(!c)throw me.create("no-app",{appName:e});return c}function ge(e,c,t){var a;let i=null!==(a=re[e])&&void 0!==a?a:e;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=c.match(/\s|\//);if(r||o){const e=[`Unable to register library "${i}" with version "${c}":`];return r&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&e.push("and"),o&&e.push(`version name "${c}" contains illegal characters (whitespace or "/")`),void E.warn(e.join(" "))}ue(new n.wA(`${i}-version`,(()=>({library:i,version:c})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ve="firebase-heartbeat-database",He=1,Ce="firebase-heartbeat-store";let be=null;function Me(){return be||(be=y(Ve,He,{upgrade:(e,c)=>{switch(c){case 0:e.createObjectStore(Ce)}}}).catch((e=>{throw me.create("idb-open",{originalErrorMessage:e.message})}))),be}async function ye(e){try{const c=await Me(),t=await c.transaction(Ce).objectStore(Ce).get(xe(e));return t}catch(c){if(c instanceof i.ZR)E.warn(c.message);else{const e=me.create("idb-get",{originalErrorMessage:null===c||void 0===c?void 0:c.message});E.warn(e.message)}}}async function Le(e,c){try{const t=await Me(),n=t.transaction(Ce,"readwrite"),a=n.objectStore(Ce);await a.put(c,xe(e)),await n.done}catch(t){if(t instanceof i.ZR)E.warn(t.message);else{const e=me.create("idb-set",{originalErrorMessage:null===t||void 0===t?void 0:t.message});E.warn(e.message)}}}function xe(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we=1024,Se=2592e6;class ke{constructor(e){this.container=e,this._heartbeatsCache=null;const c=this.container.getProvider("app").getImmediate();this._storage=new Ae(c),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,c;const t=this.container.getProvider("platform-logger").getImmediate(),n=t.getPlatformInfoString(),a=Ne();if((null!=(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||(this._heartbeatsCache=await this._heartbeatsCachePromise,null!=(null===(c=this._heartbeatsCache)||void 0===c?void 0:c.heartbeats)))&&this._heartbeatsCache.lastSentHeartbeatDate!==a&&!this._heartbeatsCache.heartbeats.some((e=>e.date===a)))return this._heartbeatsCache.heartbeats.push({date:a,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const c=new Date(e.date).valueOf(),t=Date.now();return t-c<=Se})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const c=Ne(),{heartbeatsToSend:t,unsentEntries:n}=_e(this._heartbeatsCache.heartbeats),a=(0,i.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=c,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}}function Ne(){const e=new Date;return e.toISOString().substring(0,10)}function _e(e,c=we){const t=[];let n=e.slice();for(const a of e){const e=t.find((e=>e.agent===a.agent));if(e){if(e.dates.push(a.date),Ee(t)>c){e.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),Ee(t)>c){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class Ae{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,i.hl)()&&(0,i.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await ye(this.app);return(null===e||void 0===e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var c;const t=await this._canUseIndexedDBPromise;if(t){const t=await this.read();return Le(this.app,{lastSentHeartbeatDate:null!==(c=e.lastSentHeartbeatDate)&&void 0!==c?c:t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var c;const t=await this._canUseIndexedDBPromise;if(t){const t=await this.read();return Le(this.app,{lastSentHeartbeatDate:null!==(c=e.lastSentHeartbeatDate)&&void 0!==c?c:t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}}}function Ee(e){return(0,i.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(e){ue(new n.wA("platform-logger",(e=>new k(e)),"PRIVATE")),ue(new n.wA("heartbeat",(e=>new ke(e)),"PRIVATE")),ge(_,A,e),ge(_,A,"esm2017"),ge("fire-js","")}Ie("")},7142:function(e,c,t){t.d(c,{H0:function(){return l},wA:function(){return a}});var n=t(223);class a{constructor(e,c,t){this.name=e,this.instanceFactory=c,this.type=t,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r{constructor(e,c){this.name=e,this.container=c,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const c=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(c)){const e=new n.BH;if(this.instancesDeferred.set(c,e),this.isInitialized(c)||this.shouldAutoInitialize())try{const t=this.getOrInitializeService({instanceIdentifier:c});t&&e.resolve(t)}catch(t){}}return this.instancesDeferred.get(c).promise}getImmediate(e){var c;const t=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),n=null!==(c=null===e||void 0===e?void 0:e.optional)&&void 0!==c&&c;if(!this.isInitialized(t)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:t})}catch(a){if(n)return null;throw a}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(s(e))try{this.getOrInitializeService({instanceIdentifier:i})}catch(c){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(c){}}}}clearInstance(e=i){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=i){return this.instances.has(e)}getOptions(e=i){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:c={}}=e,t=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(t))throw Error(`${this.name}(${t}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:t,options:c});for(const[a,i]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(a);t===e&&i.resolve(n)}return n}onInit(e,c){var t;const n=this.normalizeInstanceIdentifier(c),a=null!==(t=this.onInitCallbacks.get(n))&&void 0!==t?t:new Set;a.add(e),this.onInitCallbacks.set(n,a);const i=this.instances.get(n);return i&&e(i,n),()=>{a.delete(e)}}invokeOnInitCallbacks(e,c){const t=this.onInitCallbacks.get(c);if(t)for(const a of t)try{a(e,c)}catch(n){}}getOrInitializeService({instanceIdentifier:e,options:c={}}){let t=this.instances.get(e);if(!t&&this.component&&(t=this.component.instanceFactory(this.container,{instanceIdentifier:o(e),options:c}),this.instances.set(e,t),this.instancesOptions.set(e,c),this.invokeOnInitCallbacks(t,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,t)}catch(n){}return t||null}normalizeInstanceIdentifier(e=i){return this.component?this.component.multipleInstances?e:i:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function o(e){return e===i?void 0:e}function s(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const c=this.getProvider(e.name);if(c.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);c.setComponent(e)}addOrOverwriteComponent(e){const c=this.getProvider(e.name);c.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const c=new r(e,this);return this.providers.set(e,c),c}getProviders(){return Array.from(this.providers.values())}}},5168:function(e,c,t){t.d(c,{Yd:function(){return l},in:function(){return a}});t(560);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,n.KN)(a,i,"app")},4690:function(e,c,t){t.d(c,{hJ:function(){return Hc},v0:function(){return Wn},sB:function(){return Nc},rh:function(){return _t},w7:function(){return Ec}});t(560),t(8858),t(1318),t(3228);var n=t(223),a=t(7077),i=t(5168);function r(e,c){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&c.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)c.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var o=t(7142);function s(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l=s,u=new n.LL("auth","Firebase",s()),f=new i.Yd("@firebase/auth");function d(e,...c){f.logLevel<=i["in"].WARN&&f.warn(`Auth (${a.Jn}): ${e}`,...c)}function m(e,...c){f.logLevel<=i["in"].ERROR&&f.error(`Auth (${a.Jn}): ${e}`,...c)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(e,...c){throw g(e,...c)}function h(e,...c){return g(e,...c)}function v(e,c,t){const a=Object.assign(Object.assign({},l()),{[c]:t}),i=new n.LL("auth","Firebase",a);return i.create(c,{appName:e.name})}function z(e,c,t){const n=t;if(!(c instanceof n))throw n.name!==c.constructor.name&&p(e,"argument-error"),v(e,"argument-error",`Type of ${c.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function g(e,...c){if("string"!==typeof e){const t=c[0],n=[...c.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(t,...n)}return u.create(e,...c)}function V(e,c,...t){if(!e)throw g(c,...t)}function H(e){const c="INTERNAL ASSERTION FAILED: "+e;throw m(c),new Error(c)}function C(e,c){e||H(c)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function M(){return"http:"===y()||"https:"===y()}function y(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(M()||(0,n.ru)()||"connection"in navigator))||navigator.onLine}function x(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(e,c){this.shortDelay=e,this.longDelay=c,C(c>e,"Short delay should be less than long delay!"),this.isMobile=(0,n.uI)()||(0,n.b$)()}get(){return L()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(e,c){C(e.emulator,"Emulator should always be set here");const{url:t}=e.emulator;return c?`${t}${c.startsWith("/")?c.slice(1):c}`:t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{static initialize(e,c,t){this.fetchImpl=e,c&&(this.headersImpl=c),t&&(this.responseImpl=t)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:"undefined"!==typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!==typeof fetch?fetch:void H("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:"undefined"!==typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!==typeof Headers?Headers:void H("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:"undefined"!==typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!==typeof Response?Response:void H("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["INVALID_LOGIN_CREDENTIALS"]:"invalid-credential",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["PASSWORD_DOES_NOT_MEET_REQUIREMENTS"]:"password-does-not-meet-requirements",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},_=new w(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e,c){return e.tenantId&&!c.tenantId?Object.assign(Object.assign({},c),{tenantId:e.tenantId}):c}async function E(e,c,t,a,i={}){return I(e,i,(async()=>{let i={},r={};a&&("GET"===c?r=a:i={body:JSON.stringify(a)});const o=(0,n.xO)(Object.assign({key:e.config.apiKey},r)).slice(1),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/json",e.languageCode&&(s["X-Firebase-Locale"]=e.languageCode),k.fetch()(P(e,e.config.apiHost,t,o),Object.assign({method:c,headers:s,referrerPolicy:"no-referrer"},i))}))}async function I(e,c,t){e._canInitEmulator=!1;const a=Object.assign(Object.assign({},N),c);try{const c=new O(e),n=await Promise.race([t(),c.promise]);c.clearNetworkTimeout();const i=await n.json();if("needConfirmation"in i)throw R(e,"account-exists-with-different-credential",i);if(n.ok&&!("errorMessage"in i))return i;{const c=n.ok?i.errorMessage:i.error.message,[t,r]=c.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===t)throw R(e,"credential-already-in-use",i);if("EMAIL_EXISTS"===t)throw R(e,"email-already-in-use",i);if("USER_DISABLED"===t)throw R(e,"user-disabled",i);const o=a[t]||t.toLowerCase().replace(/[_\s]+/g,"-");if(r)throw v(e,o,r);p(e,o)}}catch(i){if(i instanceof n.ZR)throw i;p(e,"network-request-failed",{message:String(i)})}}async function T(e,c,t,n,a={}){const i=await E(e,c,t,n,a);return"mfaPendingCredential"in i&&p(e,"multi-factor-auth-required",{_serverResponse:i}),i}function P(e,c,t,n){const a=`${c}${t}?${n}`;return e.config.emulator?S(e.config,a):`${e.config.apiScheme}://${a}`}function F(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class O{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,c)=>{this.timer=setTimeout((()=>c(h(this.auth,"network-request-failed"))),_.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function R(e,c,t){const n={appName:e.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const a=h(e,c,n);return a.customData._tokenResponse=t,a}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e){return void 0!==e&&void 0!==e.enterprise}class B{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const c of this.recaptchaEnforcementState)if(c.provider&&c.provider===e)return F(c.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W(e,c){return E(e,"GET","/v2/recaptchaConfig",A(e,c))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U(e,c){return E(e,"POST","/v1/accounts:delete",c)}async function $(e,c){return E(e,"POST","/v1/accounts:lookup",c)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e){if(e)try{const c=new Date(Number(e));if(!isNaN(c.getTime()))return c.toUTCString()}catch(c){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q(e,c=!1){const t=(0,n.m9)(e),a=await t.getIdToken(c),i=Y(a);V(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const r="object"===typeof i.firebase?i.firebase:void 0,o=null===r||void 0===r?void 0:r["sign_in_provider"];return{claims:i,token:a,authTime:j(G(i.auth_time)),issuedAtTime:j(G(i.iat)),expirationTime:j(G(i.exp)),signInProvider:o||null,signInSecondFactor:(null===r||void 0===r?void 0:r["sign_in_second_factor"])||null}}function G(e){return 1e3*Number(e)}function Y(e){const[c,t,a]=e.split(".");if(void 0===c||void 0===t||void 0===a)return m("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,n.tV)(t);return e?JSON.parse(e):(m("Failed to decode base64 JWT payload"),null)}catch(i){return m("Caught error parsing JWT payload as JSON",null===i||void 0===i?void 0:i.toString()),null}}function Z(e){const c=Y(e);return V(c,"internal-error"),V("undefined"!==typeof c.exp,"internal-error"),V("undefined"!==typeof c.iat,"internal-error"),Number(c.exp)-Number(c.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(e,c,t=!1){if(t)return c;try{return await c}catch(a){throw a instanceof n.ZR&&X(a)&&e.auth.currentUser===e&&await e.auth.signOut(),a}}function X({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var c;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(c=this.user.stsTokenManager.expirationTime)&&void 0!==c?c:0,t=e-Date.now()-3e5;return Math.max(0,t)}}schedule(e=!1){if(!this.isRunning)return;const c=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),c)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,c){this.createdAt=e,this.lastLoginAt=c,this._initializeTime()}_initializeTime(){this.lastSignInTime=j(this.lastLoginAt),this.creationTime=j(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ee(e){var c;const t=e.auth,n=await e.getIdToken(),a=await K(e,$(t,{idToken:n}));V(null===a||void 0===a?void 0:a.users.length,t,"internal-error");const i=a.users[0];e._notifyReloadListener(i);const r=(null===(c=i.providerUserInfo)||void 0===c?void 0:c.length)?ne(i.providerUserInfo):[],o=te(e.providerData,r),s=e.isAnonymous,l=!(e.email&&i.passwordHash)&&!(null===o||void 0===o?void 0:o.length),u=!!s&&l,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Q(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(e,f)}async function ce(e){const c=(0,n.m9)(e);await ee(c),await c.auth._persistUserIfCurrent(c),c.auth._notifyListenersIfCurrent(c)}function te(e,c){const t=e.filter((e=>!c.some((c=>c.providerId===e.providerId))));return[...t,...c]}function ne(e){return e.map((e=>{var{providerId:c}=e,t=r(e,["providerId"]);return{providerId:c,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ae(e,c){const t=await I(e,{},(async()=>{const t=(0,n.xO)({grant_type:"refresh_token",refresh_token:c}).slice(1),{tokenApiHost:a,apiKey:i}=e.config,r=P(e,a,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",k.fetch()(r,{method:"POST",headers:o,body:t})}));return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ie(e,c){return E(e,"POST","/v2/accounts:revokeToken",A(e,c))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){V(e.idToken,"internal-error"),V("undefined"!==typeof e.idToken,"internal-error"),V("undefined"!==typeof e.refreshToken,"internal-error");const c="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):Z(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,c)}async getToken(e,c=!1){return V(!this.accessToken||this.refreshToken,e,"user-token-expired"),c||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,c){const{accessToken:t,refreshToken:n,expiresIn:a}=await ae(e,c);this.updateTokensAndExpiration(t,n,Number(a))}updateTokensAndExpiration(e,c,t){this.refreshToken=c||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*t}static fromJSON(e,c){const{refreshToken:t,accessToken:n,expirationTime:a}=c,i=new re;return t&&(V("string"===typeof t,"internal-error",{appName:e}),i.refreshToken=t),n&&(V("string"===typeof n,"internal-error",{appName:e}),i.accessToken=n),a&&(V("number"===typeof a,"internal-error",{appName:e}),i.expirationTime=a),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new re,this.toJSON())}_performRefresh(){return H("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(e,c){V("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:c})}class se{constructor(e){var{uid:c,auth:t,stsTokenManager:n}=e,a=r(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new J(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=c,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Q(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const c=await K(this,this.stsTokenManager.getToken(this.auth,e));return V(c,this.auth,"internal-error"),this.accessToken!==c&&(this.accessToken=c,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),c}getIdTokenResult(e){return q(this,e)}reload(){return ce(this)}_assign(e){this!==e&&(V(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const c=new se(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return c.metadata._copy(this.metadata),c}_onReload(e){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,c=!1){let t=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),t=!0),c&&await ee(this),await this.auth._persistUserIfCurrent(this),t&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await K(this,U(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,c){var t,n,a,i,r,o,s,l;const u=null!==(t=c.displayName)&&void 0!==t?t:void 0,f=null!==(n=c.email)&&void 0!==n?n:void 0,d=null!==(a=c.phoneNumber)&&void 0!==a?a:void 0,m=null!==(i=c.photoURL)&&void 0!==i?i:void 0,p=null!==(r=c.tenantId)&&void 0!==r?r:void 0,h=null!==(o=c._redirectEventId)&&void 0!==o?o:void 0,v=null!==(s=c.createdAt)&&void 0!==s?s:void 0,z=null!==(l=c.lastLoginAt)&&void 0!==l?l:void 0,{uid:g,emailVerified:H,isAnonymous:C,providerData:b,stsTokenManager:M}=c;V(g&&M,e,"internal-error");const y=re.fromJSON(this.name,M);V("string"===typeof g,e,"internal-error"),oe(u,e.name),oe(f,e.name),V("boolean"===typeof H,e,"internal-error"),V("boolean"===typeof C,e,"internal-error"),oe(d,e.name),oe(m,e.name),oe(p,e.name),oe(h,e.name),oe(v,e.name),oe(z,e.name);const L=new se({uid:g,auth:e,email:f,emailVerified:H,displayName:u,isAnonymous:C,photoURL:m,phoneNumber:d,tenantId:p,stsTokenManager:y,createdAt:v,lastLoginAt:z});return b&&Array.isArray(b)&&(L.providerData=b.map((e=>Object.assign({},e)))),h&&(L._redirectEventId=h),L}static async _fromIdTokenResponse(e,c,t=!1){const n=new re;n.updateFromServerResponse(c);const a=new se({uid:c.localId,auth:e,stsTokenManager:n,isAnonymous:t});return await ee(a),a}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le=new Map;function ue(e){C(e instanceof Function,"Expected a class definition");let c=le.get(e);return c?(C(c instanceof e,"Instance stored in cache mismatched with class"),c):(c=new e,le.set(e,c),c)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,c){this.storage[e]=c}async _get(e){const c=this.storage[e];return void 0===c?null:c}async _remove(e){delete this.storage[e]}_addListener(e,c){}_removeListener(e,c){}}fe.type="NONE";const de=fe;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(e,c,t){return`firebase:${e}:${c}:${t}`}class pe{constructor(e,c,t){this.persistence=e,this.auth=c,this.userKey=t;const{config:n,name:a}=this.auth;this.fullUserKey=me(this.userKey,n.apiKey,a),this.fullPersistenceKey=me("persistence",n.apiKey,a),this.boundEventHandler=c._onStorageEvent.bind(c),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?se._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const c=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,c?this.setCurrentUser(c):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,c,t="authUser"){if(!c.length)return new pe(ue(de),e,t);const n=(await Promise.all(c.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let a=n[0]||ue(de);const i=me(t,e.config.apiKey,e.name);let r=null;for(const l of c)try{const c=await l._get(i);if(c){const t=se._fromJSON(e,c);l!==a&&(r=t),a=l;break}}catch(s){}const o=n.filter((e=>e._shouldAllowMigration));return a._shouldAllowMigration&&o.length?(a=o[0],r&&await a._set(i,r.toJSON()),await Promise.all(c.map((async e=>{if(e!==a)try{await e._remove(i)}catch(s){}}))),new pe(a,e,t)):new pe(a,e,t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(e){const c=e.toLowerCase();if(c.includes("opera/")||c.includes("opr/")||c.includes("opios/"))return"Opera";if(Ve(c))return"IEMobile";if(c.includes("msie")||c.includes("trident/"))return"IE";if(c.includes("edge/"))return"Edge";if(ve(c))return"Firefox";if(c.includes("silk/"))return"Silk";if(Ce(c))return"Blackberry";if(be(c))return"Webos";if(ze(c))return"Safari";if((c.includes("chrome/")||ge(c))&&!c.includes("edge/"))return"Chrome";if(He(c))return"Android";{const c=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,t=e.match(c);if(2===(null===t||void 0===t?void 0:t.length))return t[1]}return"Other"}function ve(e=(0,n.z$)()){return/firefox\//i.test(e)}function ze(e=(0,n.z$)()){const c=e.toLowerCase();return c.includes("safari/")&&!c.includes("chrome/")&&!c.includes("crios/")&&!c.includes("android")}function ge(e=(0,n.z$)()){return/crios\//i.test(e)}function Ve(e=(0,n.z$)()){return/iemobile/i.test(e)}function He(e=(0,n.z$)()){return/android/i.test(e)}function Ce(e=(0,n.z$)()){return/blackberry/i.test(e)}function be(e=(0,n.z$)()){return/webos/i.test(e)}function Me(e=(0,n.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ye(e=(0,n.z$)()){var c;return Me(e)&&!!(null===(c=window.navigator)||void 0===c?void 0:c.standalone)}function Le(){return(0,n.w1)()&&10===document.documentMode}function xe(e=(0,n.z$)()){return Me(e)||He(e)||be(e)||Ce(e)||/windows phone/i.test(e)||Ve(e)}function we(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(e,c=[]){let t;switch(e){case"Browser":t=he((0,n.z$)());break;case"Worker":t=`${he((0,n.z$)())}-${e}`;break;default:t=e}const i=c.length?c.join(","):"FirebaseCore-web";return`${t}/JsCore/${a.Jn}/${i}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,c){const t=c=>new Promise(((t,n)=>{try{const n=e(c);t(n)}catch(a){n(a)}}));t.onAbort=c,this.queue.push(t);const n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const c=[];try{for(const t of this.queue)await t(e),t.onAbort&&c.push(t.onAbort)}catch(t){c.reverse();for(const e of c)try{e()}catch(n){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===t||void 0===t?void 0:t.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ne(e,c={}){return E(e,"GET","/v2/passwordPolicy",A(e,c))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e=6;class Ae{constructor(e){var c,t,n,a;const i=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(c=i.minPasswordLength)&&void 0!==c?c:_e,i.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=i.maxPasswordLength),void 0!==i.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=i.containsLowercaseCharacter),void 0!==i.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=i.containsUppercaseCharacter),void 0!==i.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=i.containsNumericCharacter),void 0!==i.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=i.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(n=null===(t=e.allowedNonAlphanumericCharacters)||void 0===t?void 0:t.join(""))&&void 0!==n?n:"",this.forceUpgradeOnSignin=null!==(a=e.forceUpgradeOnSignin)&&void 0!==a&&a,this.schemaVersion=e.schemaVersion}validatePassword(e){var c,t,n,a,i,r;const o={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,o),this.validatePasswordCharacterOptions(e,o),o.isValid&&(o.isValid=null===(c=o.meetsMinPasswordLength)||void 0===c||c),o.isValid&&(o.isValid=null===(t=o.meetsMaxPasswordLength)||void 0===t||t),o.isValid&&(o.isValid=null===(n=o.containsLowercaseLetter)||void 0===n||n),o.isValid&&(o.isValid=null===(a=o.containsUppercaseLetter)||void 0===a||a),o.isValid&&(o.isValid=null===(i=o.containsNumericCharacter)||void 0===i||i),o.isValid&&(o.isValid=null===(r=o.containsNonAlphanumericCharacter)||void 0===r||r),o}validatePasswordLengthOptions(e,c){const t=this.customStrengthOptions.minPasswordLength,n=this.customStrengthOptions.maxPasswordLength;t&&(c.meetsMinPasswordLength=e.length>=t),n&&(c.meetsMaxPasswordLength=e.length<=n)}validatePasswordCharacterOptions(e,c){let t;this.updatePasswordCharacterOptionsStatuses(c,!1,!1,!1,!1);for(let n=0;n<e.length;n++)t=e.charAt(n),this.updatePasswordCharacterOptionsStatuses(c,t>="a"&&t<="z",t>="A"&&t<="Z",t>="0"&&t<="9",this.allowedNonAlphanumericCharacters.includes(t))}updatePasswordCharacterOptionsStatuses(e,c,t,n,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=c)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=t)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=n)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,c,t,n){this.app=e,this.heartbeatServiceProvider=c,this.appCheckServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Te(this),this.idTokenSubscription=new Te(this),this.beforeStateQueue=new ke(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,c){return c&&(this._popupRedirectResolver=ue(c)),this._initializationPromise=this.queue((async()=>{var t,n;if(!this._deleted&&(this.persistenceManager=await pe.create(this,e),!this._deleted)){if(null===(t=this._popupRedirectResolver)||void 0===t?void 0:t._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(a){}await this.initializeCurrentUser(c),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var c;const t=await this.assertedPersistence.getCurrentUser();let n=t,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const t=null===(c=this.redirectUser)||void 0===c?void 0:c._redirectEventId,i=null===n||void 0===n?void 0:n._redirectEventId,r=await this.tryRedirectSignIn(e);t&&t!==i||!(null===r||void 0===r?void 0:r.user)||(n=r.user,a=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(n)}catch(i){n=t,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(i)))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let c=null;try{c=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(t){await this._setRedirectUser(null)}return c}async reloadAndSetCurrentUserOrClear(e){try{await ee(e)}catch(c){if("auth/network-request-failed"!==(null===c||void 0===c?void 0:c.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=x()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const c=e?(0,n.m9)(e):null;return c&&V(c.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(c&&c._clone(this))}async _updateCurrentUser(e,c=!1){if(!this._deleted)return e&&V(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),c||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(ue(e))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const c=this._getPasswordPolicyInternal();return c.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):c.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ne(this),c=new Ae(e);null===this.tenantId?this._projectPasswordPolicy=c:this._tenantPasswordPolicies[this.tenantId]=c}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new n.LL("auth","Firebase",e())}onAuthStateChanged(e,c,t){return this.registerStateListener(this.authStateSubscription,e,c,t)}beforeAuthStateChanged(e,c){return this.beforeStateQueue.pushCallback(e,c)}onIdTokenChanged(e,c,t){return this.registerStateListener(this.idTokenSubscription,e,c,t)}authStateReady(){return new Promise(((e,c)=>{if(this.currentUser)e();else{const t=this.onAuthStateChanged((()=>{t(),e()}),c)}}))}async revokeAccessToken(e){if(this.currentUser){const c=await this.currentUser.getIdToken(),t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:c};null!=this.tenantId&&(t.tenantId=this.tenantId),await ie(this,t)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,c){const t=await this.getOrInitRedirectPersistenceManager(c);return null===e?t.removeCurrentUser():t.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const c=e&&ue(e)||this._popupRedirectResolver;V(c,this,"argument-error"),this.redirectPersistenceManager=await pe.create(this,[ue(c._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var c,t;return this._isInitialized&&await this.queue((async()=>{})),(null===(c=this._currentUser)||void 0===c?void 0:c._redirectEventId)===e?this._currentUser:(null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,c;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=null!==(c=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==c?c:null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,c,t,n){if(this._deleted)return()=>{};const a="function"===typeof c?c:c.next.bind(c);let i=!1;const r=this._isInitialized?Promise.resolve():this._initializationPromise;if(V(r,this,"internal-error"),r.then((()=>{i||a(this.currentUser)})),"function"===typeof c){const a=e.addObserver(c,t,n);return()=>{i=!0,a()}}{const t=e.addObserver(c);return()=>{i=!0,t()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Se(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const c={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(c["X-Firebase-gmpid"]=this.app.options.appId);const t=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());t&&(c["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(c["X-Firebase-AppCheck"]=n),c}async _getAppCheckToken(){var e;const c=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===c||void 0===c?void 0:c.error)&&d(`Error while retrieving App Check token: ${c.error}`),null===c||void 0===c?void 0:c.token}}function Ie(e){return(0,n.m9)(e)}class Te{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,n.ne)((e=>this.observer=e))}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(){var e,c;return null!==(c=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==c?c:document}function Fe(e){return new Promise(((c,t)=>{const n=document.createElement("script");n.setAttribute("src",e),n.onload=c,n.onerror=e=>{const c=h("internal-error");c.customData=e,t(c)},n.type="text/javascript",n.charset="UTF-8",Pe().appendChild(n)}))}function Oe(e){return`__${e}${Math.floor(1e6*Math.random())}`}const Re="https://www.google.com/recaptcha/enterprise.js?render=",De="recaptcha-enterprise",Be="NO_RECAPTCHA";class We{constructor(e){this.type=De,this.auth=Ie(e)}async verify(e="verify",c=!1){async function t(e){if(!c){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(c,t)=>{W(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((n=>{if(void 0!==n.recaptchaKey){const t=new B(n);return null==e.tenantId?e._agentRecaptchaConfig=t:e._tenantRecaptchaConfigs[e.tenantId]=t,c(t.siteKey)}t(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{t(e)}))}))}function n(c,t,n){const a=window.grecaptcha;D(a)?a.enterprise.ready((()=>{a.enterprise.execute(c,{action:e}).then((e=>{t(e)})).catch((()=>{t(Be)}))})):n(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,a)=>{t(this.auth).then((t=>{if(!c&&D(window.grecaptcha))n(t,e,a);else{if("undefined"===typeof window)return void a(new Error("RecaptchaVerifier is only supported in browser"));Fe(Re+t).then((()=>{n(t,e,a)})).catch((e=>{a(e)}))}})).catch((e=>{a(e)}))}))}}async function Ue(e,c,t,n=!1){const a=new We(e);let i;try{i=await a.verify(t)}catch(o){i=await a.verify(t,!0)}const r=Object.assign({},c);return n?Object.assign(r,{captchaResp:i}):Object.assign(r,{captchaResponse:i}),Object.assign(r,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(r,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),r}async function $e(e,c,t,n){var a;if(null===(a=e._getRecaptchaConfig())||void 0===a?void 0:a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Ue(e,c,t,"getOobCode"===t);return n(e,a)}return n(e,c).catch((async a=>{if("auth/missing-recaptcha-token"===a.code){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Ue(e,c,t,"getOobCode"===t);return n(e,a)}return Promise.reject(a)}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function je(e,c){const t=(0,a.qX)(e,"auth");if(t.isInitialized()){const e=t.getImmediate(),a=t.getOptions();if((0,n.vZ)(a,null!==c&&void 0!==c?c:{}))return e;p(e,"already-initialized")}const i=t.initialize({options:c});return i}function qe(e,c){const t=(null===c||void 0===c?void 0:c.persistence)||[],n=(Array.isArray(t)?t:[t]).map(ue);(null===c||void 0===c?void 0:c.errorMap)&&e._updateErrorMap(c.errorMap),e._initializeWithPersistence(n,null===c||void 0===c?void 0:c.popupRedirectResolver)}function Ge(e,c,t){const n=Ie(e);V(n._canInitEmulator,n,"emulator-config-failed"),V(/^https?:\/\//.test(c),n,"invalid-emulator-scheme");const a=!!(null===t||void 0===t?void 0:t.disableWarnings),i=Ye(c),{host:r,port:o}=Ze(c),s=null===o?"":`:${o}`;n.config.emulator={url:`${i}//${r}${s}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:r,port:o,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:a})}),a||Xe()}function Ye(e){const c=e.indexOf(":");return c<0?"":e.substr(0,c+1)}function Ze(e){const c=Ye(e),t=/(\/\/)?([^?#/]+)/.exec(e.substr(c.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(n);if(a){const e=a[1];return{host:e,port:Ke(n.substr(e.length+1))}}{const[e,c]=n.split(":");return{host:e,port:Ke(c)}}}function Ke(e){if(!e)return null;const c=Number(e);return isNaN(c)?null:c}function Xe(){function e(){const e=document.createElement("p"),c=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",c.position="fixed",c.width="100%",c.backgroundColor="#ffffff",c.border=".1em solid #000000",c.color="#b50000",c.bottom="0px",c.left="0px",c.margin="0px",c.zIndex="10000",c.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,c){this.providerId=e,this.signInMethod=c}toJSON(){return H("not implemented")}_getIdTokenResponse(e){return H("not implemented")}_linkToIdToken(e,c){return H("not implemented")}_getReauthenticationResolver(e){return H("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qe(e,c){return E(e,"POST","/v1/accounts:signUp",c)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ec(e,c){return T(e,"POST","/v1/accounts:signInWithPassword",A(e,c))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function cc(e,c){return T(e,"POST","/v1/accounts:signInWithEmailLink",A(e,c))}async function tc(e,c){return T(e,"POST","/v1/accounts:signInWithEmailLink",A(e,c))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc extends Je{constructor(e,c,t,n=null){super("password",t),this._email=e,this._password=c,this._tenantId=n}static _fromEmailAndPassword(e,c){return new nc(e,c,"password")}static _fromEmailAndCode(e,c,t=null){return new nc(e,c,"emailLink",t)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const c="string"===typeof e?JSON.parse(e):e;if((null===c||void 0===c?void 0:c.email)&&(null===c||void 0===c?void 0:c.password)){if("password"===c.signInMethod)return this._fromEmailAndPassword(c.email,c.password);if("emailLink"===c.signInMethod)return this._fromEmailAndCode(c.email,c.password,c.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const c={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $e(e,c,"signInWithPassword",ec);case"emailLink":return cc(e,{email:this._email,oobCode:this._password});default:p(e,"internal-error")}}async _linkToIdToken(e,c){switch(this.signInMethod){case"password":const t={idToken:c,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $e(e,t,"signUpPassword",Qe);case"emailLink":return tc(e,{idToken:c,email:this._email,oobCode:this._password});default:p(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ac(e,c){return T(e,"POST","/v1/accounts:signInWithIdp",A(e,c))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic="http://localhost";class rc extends Je{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const c=new rc(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(c.idToken=e.idToken),e.accessToken&&(c.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(c.nonce=e.nonce),e.pendingToken&&(c.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(c.accessToken=e.oauthToken,c.secret=e.oauthTokenSecret):p("argument-error"),c}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const c="string"===typeof e?JSON.parse(e):e,{providerId:t,signInMethod:n}=c,a=r(c,["providerId","signInMethod"]);if(!t||!n)return null;const i=new rc(t,n);return i.idToken=a.idToken||void 0,i.accessToken=a.accessToken||void 0,i.secret=a.secret,i.nonce=a.nonce,i.pendingToken=a.pendingToken||null,i}_getIdTokenResponse(e){const c=this.buildRequest();return ac(e,c)}_linkToIdToken(e,c){const t=this.buildRequest();return t.idToken=c,ac(e,t)}_getReauthenticationResolver(e){const c=this.buildRequest();return c.autoCreate=!1,ac(e,c)}buildRequest(){const e={requestUri:ic,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const c={};this.idToken&&(c["id_token"]=this.idToken),this.accessToken&&(c["access_token"]=this.accessToken),this.secret&&(c["oauth_token_secret"]=this.secret),c["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(c["nonce"]=this.nonce),e.postBody=(0,n.xO)(c)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oc(e,c){return E(e,"POST","/v1/accounts:sendVerificationCode",A(e,c))}async function sc(e,c){return T(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,c))}async function lc(e,c){const t=await T(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,c));if(t.temporaryProof)throw R(e,"account-exists-with-different-credential",t);return t}const uc={["USER_NOT_FOUND"]:"user-not-found"};async function fc(e,c){const t=Object.assign(Object.assign({},c),{operation:"REAUTH"});return T(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,t),uc)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc extends Je{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,c){return new dc({verificationId:e,verificationCode:c})}static _fromTokenResponse(e,c){return new dc({phoneNumber:e,temporaryProof:c})}_getIdTokenResponse(e){return sc(e,this._makeVerificationRequest())}_linkToIdToken(e,c){return lc(e,Object.assign({idToken:c},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return fc(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:c,verificationId:t,verificationCode:n}=this.params;return e&&c?{temporaryProof:e,phoneNumber:c}:{sessionInfo:t,code:n}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:c,verificationCode:t,phoneNumber:n,temporaryProof:a}=e;return t||c||n||a?new dc({verificationId:c,verificationCode:t,phoneNumber:n,temporaryProof:a}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function pc(e){const c=(0,n.zd)((0,n.pd)(e))["link"],t=c?(0,n.zd)((0,n.pd)(c))["deep_link_id"]:null,a=(0,n.zd)((0,n.pd)(e))["deep_link_id"],i=a?(0,n.zd)((0,n.pd)(a))["link"]:null;return i||a||t||c||e}class hc{constructor(e){var c,t,a,i,r,o;const s=(0,n.zd)((0,n.pd)(e)),l=null!==(c=s["apiKey"])&&void 0!==c?c:null,u=null!==(t=s["oobCode"])&&void 0!==t?t:null,f=mc(null!==(a=s["mode"])&&void 0!==a?a:null);V(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=null!==(i=s["continueUrl"])&&void 0!==i?i:null,this.languageCode=null!==(r=s["languageCode"])&&void 0!==r?r:null,this.tenantId=null!==(o=s["tenantId"])&&void 0!==o?o:null}static parseLink(e){const c=pc(e);try{return new hc(c)}catch(t){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vc{constructor(){this.providerId=vc.PROVIDER_ID}static credential(e,c){return nc._fromEmailAndPassword(e,c)}static credentialWithLink(e,c){const t=hc.parseLink(c);return V(t,"argument-error"),nc._fromEmailAndCode(e,t.code,t.tenantId)}}vc.PROVIDER_ID="password",vc.EMAIL_PASSWORD_SIGN_IN_METHOD="password",vc.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc extends zc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vc extends gc{constructor(){super("facebook.com")}static credential(e){return rc._fromParams({providerId:Vc.PROVIDER_ID,signInMethod:Vc.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vc.credentialFromTaggedObject(e)}static credentialFromError(e){return Vc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Vc.credential(e.oauthAccessToken)}catch(c){return null}}}Vc.FACEBOOK_SIGN_IN_METHOD="facebook.com",Vc.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hc extends gc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,c){return rc._fromParams({providerId:Hc.PROVIDER_ID,signInMethod:Hc.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:c})}static credentialFromResult(e){return Hc.credentialFromTaggedObject(e)}static credentialFromError(e){return Hc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:c,oauthAccessToken:t}=e;if(!c&&!t)return null;try{return Hc.credential(c,t)}catch(n){return null}}}Hc.GOOGLE_SIGN_IN_METHOD="google.com",Hc.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cc extends gc{constructor(){super("github.com")}static credential(e){return rc._fromParams({providerId:Cc.PROVIDER_ID,signInMethod:Cc.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cc.credentialFromTaggedObject(e)}static credentialFromError(e){return Cc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Cc.credential(e.oauthAccessToken)}catch(c){return null}}}Cc.GITHUB_SIGN_IN_METHOD="github.com",Cc.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bc extends gc{constructor(){super("twitter.com")}static credential(e,c){return rc._fromParams({providerId:bc.PROVIDER_ID,signInMethod:bc.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:c})}static credentialFromResult(e){return bc.credentialFromTaggedObject(e)}static credentialFromError(e){return bc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:c,oauthTokenSecret:t}=e;if(!c||!t)return null;try{return bc.credential(c,t)}catch(n){return null}}}bc.TWITTER_SIGN_IN_METHOD="twitter.com",bc.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mc{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,c,t,n=!1){const a=await se._fromIdTokenResponse(e,t,n),i=yc(t),r=new Mc({user:a,providerId:i,_tokenResponse:t,operationType:c});return r}static async _forOperation(e,c,t){await e._updateTokensIfNecessary(t,!0);const n=yc(t);return new Mc({user:e,providerId:n,_tokenResponse:t,operationType:c})}}function yc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lc extends n.ZR{constructor(e,c,t,n){var a;super(c.code,c.message),this.operationType=t,this.user=n,Object.setPrototypeOf(this,Lc.prototype),this.customData={appName:e.name,tenantId:null!==(a=e.tenantId)&&void 0!==a?a:void 0,_serverResponse:c.customData._serverResponse,operationType:t}}static _fromErrorAndOperation(e,c,t,n){return new Lc(e,c,t,n)}}function xc(e,c,t,n){const a="reauthenticate"===c?t._getReauthenticationResolver(e):t._getIdTokenResponse(e);return a.catch((t=>{if("auth/multi-factor-auth-required"===t.code)throw Lc._fromErrorAndOperation(e,t,c,n);throw t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wc(e,c,t=!1){const n=await K(e,c._linkToIdToken(e.auth,await e.getIdToken()),t);return Mc._forOperation(e,"link",n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Sc(e,c,t=!1){const{auth:n}=e,a="reauthenticate";try{const i=await K(e,xc(n,a,c,e),t);V(i.idToken,n,"internal-error");const r=Y(i.idToken);V(r,n,"internal-error");const{sub:o}=r;return V(e.uid===o,n,"user-mismatch"),Mc._forOperation(e,a,i)}catch(i){throw"auth/user-not-found"===(null===i||void 0===i?void 0:i.code)&&p(n,"user-mismatch"),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kc(e,c,t=!1){const n="signIn",a=await xc(e,n,c),i=await Mc._fromIdTokenResponse(e,n,a);return t||await e._updateCurrentUser(i.user),i}async function Nc(e,c){return kc(Ie(e),c)}function _c(e,c,t,a){return(0,n.m9)(e).onIdTokenChanged(c,t,a)}function Ac(e,c,t){return(0,n.m9)(e).beforeAuthStateChanged(c,t)}function Ec(e){return(0,n.m9)(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ic(e,c){return E(e,"POST","/v2/accounts/mfaEnrollment:start",A(e,c))}function Tc(e,c){return E(e,"POST","/v2/accounts/mfaEnrollment:finalize",A(e,c))}function Pc(e,c){return E(e,"POST","/v2/accounts/mfaEnrollment:start",A(e,c))}function Fc(e,c){return E(e,"POST","/v2/accounts/mfaEnrollment:finalize",A(e,c))}new WeakMap;const Oc="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,c){this.storageRetriever=e,this.type=c}_isAvailable(){try{return this.storage?(this.storage.setItem(Oc,"1"),this.storage.removeItem(Oc),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,c){return this.storage.setItem(e,JSON.stringify(c)),Promise.resolve()}_get(e){const c=this.storage.getItem(e);return Promise.resolve(c?JSON.parse(c):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(){const e=(0,n.z$)();return ze(e)||Me(e)}const Bc=1e3,Wc=10;class Uc extends Rc{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,c)=>this.onStorageEvent(e,c),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Dc()&&we(),this.fallbackToPolling=xe(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const c of Object.keys(this.listeners)){const t=this.storage.getItem(c),n=this.localCache[c];t!==n&&e(c,n,t)}}onStorageEvent(e,c=!1){if(!e.key)return void this.forAllChangedKeys(((e,c,t)=>{this.notifyListeners(e,t)}));const t=e.key;if(c?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const n=this.storage.getItem(t);if(e.newValue!==n)null!==e.newValue?this.storage.setItem(t,e.newValue):this.storage.removeItem(t);else if(this.localCache[t]===e.newValue&&!c)return}const n=()=>{const e=this.storage.getItem(t);(c||this.localCache[t]!==e)&&this.notifyListeners(t,e)},a=this.storage.getItem(t);Le()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,Wc):n()}notifyListeners(e,c){this.localCache[e]=c;const t=this.listeners[e];if(t)for(const n of Array.from(t))n(c?JSON.parse(c):c)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,c,t)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:c,newValue:t}),!0)}))}),Bc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,c){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(c)}_removeListener(e,c){this.listeners[e]&&(this.listeners[e].delete(c),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,c){await super._set(e,c),this.localCache[e]=JSON.stringify(c)}async _get(e){const c=await super._get(e);return this.localCache[e]=JSON.stringify(c),c}async _remove(e){await super._remove(e),delete this.localCache[e]}}Uc.type="LOCAL";const $c=Uc;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc extends Rc{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,c){}_removeListener(e,c){}}jc.type="SESSION";const qc=jc;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(e){return Promise.all(e.map((async e=>{try{const c=await e;return{fulfilled:!0,value:c}}catch(c){return{fulfilled:!1,reason:c}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const c=this.receivers.find((c=>c.isListeningto(e)));if(c)return c;const t=new Yc(e);return this.receivers.push(t),t}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const c=e,{eventId:t,eventType:n,data:a}=c.data,i=this.handlersMap[n];if(!(null===i||void 0===i?void 0:i.size))return;c.ports[0].postMessage({status:"ack",eventId:t,eventType:n});const r=Array.from(i).map((async e=>e(c.origin,a))),o=await Gc(r);c.ports[0].postMessage({status:"done",eventId:t,eventType:n,response:o})}_subscribe(e,c){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(c)}_unsubscribe(e,c){this.handlersMap[e]&&c&&this.handlersMap[e].delete(c),c&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zc(e="",c=10){let t="";for(let n=0;n<c;n++)t+=Math.floor(10*Math.random());return e+t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yc.receivers=[];class Kc{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,c,t=50){const n="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let a,i;return new Promise(((r,o)=>{const s=Zc("",20);n.port1.start();const l=setTimeout((()=>{o(new Error("unsupported_event"))}),t);i={messageChannel:n,onMessage(e){const c=e;if(c.data.eventId===s)switch(c.data.status){case"ack":clearTimeout(l),a=setTimeout((()=>{o(new Error("timeout"))}),3e3);break;case"done":clearTimeout(a),r(c.data.response);break;default:clearTimeout(l),clearTimeout(a),o(new Error("invalid_response"));break}}},this.handlers.add(i),n.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:s,data:c},[n.port2])})).finally((()=>{i&&this.removeMessageHandler(i)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc(){return window}function Jc(e){Xc().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(){return"undefined"!==typeof Xc()["WorkerGlobalScope"]&&"function"===typeof Xc()["importScripts"]}async function et(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function ct(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function tt(){return Qc()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt="firebaseLocalStorageDb",at=1,it="firebaseLocalStorage",rt="fbase_key";class ot{constructor(e){this.request=e}toPromise(){return new Promise(((e,c)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{c(this.request.error)}))}))}}function st(e,c){return e.transaction([it],c?"readwrite":"readonly").objectStore(it)}function lt(){const e=indexedDB.deleteDatabase(nt);return new ot(e).toPromise()}function ut(){const e=indexedDB.open(nt,at);return new Promise(((c,t)=>{e.addEventListener("error",(()=>{t(e.error)})),e.addEventListener("upgradeneeded",(()=>{const c=e.result;try{c.createObjectStore(it,{keyPath:rt})}catch(n){t(n)}})),e.addEventListener("success",(async()=>{const t=e.result;t.objectStoreNames.contains(it)?c(t):(t.close(),await lt(),c(await ut()))}))}))}async function ft(e,c,t){const n=st(e,!0).put({[rt]:c,value:t});return new ot(n).toPromise()}async function dt(e,c){const t=st(e,!1).get(c),n=await new ot(t).toPromise();return void 0===n?null:n.value}function mt(e,c){const t=st(e,!0).delete(c);return new ot(t).toPromise()}const pt=800,ht=3;class vt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await ut()),this.db}async _withRetries(e){let c=0;while(1)try{const c=await this._openDb();return await e(c)}catch(t){if(c++>ht)throw t;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Yc._getInstance(tt()),this.receiver._subscribe("keyChanged",(async(e,c)=>{const t=await this._poll();return{keyProcessed:t.includes(c.key)}})),this.receiver._subscribe("ping",(async(e,c)=>["keyChanged"]))}async initializeSender(){var e,c;if(this.activeServiceWorker=await et(),!this.activeServiceWorker)return;this.sender=new Kc(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&(null===(e=t[0])||void 0===e?void 0:e.fulfilled)&&(null===(c=t[0])||void 0===c?void 0:c.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&ct()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(c){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ut();return await ft(e,Oc,"1"),await mt(e,Oc),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,c){return this._withPendingWrite((async()=>(await this._withRetries((t=>ft(t,e,c))),this.localCache[e]=c,this.notifyServiceWorker(e))))}async _get(e){const c=await this._withRetries((c=>dt(c,e)));return this.localCache[e]=c,c}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((c=>mt(c,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const c=st(e,!1).getAll();return new ot(c).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const c=[],t=new Set;if(0!==e.length)for(const{fbase_key:n,value:a}of e)t.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(a)&&(this.notifyListeners(n,a),c.push(n));for(const n of Object.keys(this.localCache))this.localCache[n]&&!t.has(n)&&(this.notifyListeners(n,null),c.push(n));return c}notifyListeners(e,c){this.localCache[e]=c;const t=this.listeners[e];if(t)for(const n of Array.from(t))n(c)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),pt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,c){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(c)}_removeListener(e,c){this.listeners[e]&&(this.listeners[e].delete(c),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}vt.type="LOCAL";const zt=vt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(e,c){return E(e,"POST","/v2/accounts/mfaSignIn:start",A(e,c))}function Vt(e,c){return E(e,"POST","/v2/accounts/mfaSignIn:finalize",A(e,c))}function Ht(e,c){return E(e,"POST","/v2/accounts/mfaSignIn:finalize",A(e,c))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Oe("rcb"),new w(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ct="recaptcha";async function bt(e,c,t){var n;const a=await t.verify();try{let i;if(V("string"===typeof a,e,"argument-error"),V(t.type===Ct,e,"argument-error"),i="string"===typeof c?{phoneNumber:c}:c,"session"in i){const c=i.session;if("phoneNumber"in i){V("enroll"===c.type,e,"internal-error");const t=await Ic(e,{idToken:c.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:a}});return t.phoneSessionInfo.sessionInfo}{V("signin"===c.type,e,"internal-error");const t=(null===(n=i.multiFactorHint)||void 0===n?void 0:n.uid)||i.multiFactorUid;V(t,e,"missing-multi-factor-info");const r=await gt(e,{mfaPendingCredential:c.credential,mfaEnrollmentId:t,phoneSignInInfo:{recaptchaToken:a}});return r.phoneResponseInfo.sessionInfo}}{const{sessionInfo:c}=await oc(e,{phoneNumber:i.phoneNumber,recaptchaToken:a});return c}}finally{t._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mt{constructor(e){this.providerId=Mt.PROVIDER_ID,this.auth=Ie(e)}verifyPhoneNumber(e,c){return bt(this.auth,e,(0,n.m9)(c))}static credential(e,c){return dc._fromVerification(e,c)}static credentialFromResult(e){const c=e;return Mt.credentialFromTaggedObject(c)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:c,temporaryProof:t}=e;return c&&t?dc._fromTokenResponse(c,t):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function yt(e,c){return c?ue(c):(V(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mt.PROVIDER_ID="phone",Mt.PHONE_SIGN_IN_METHOD="phone";class Lt extends Je{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ac(e,this._buildIdpRequest())}_linkToIdToken(e,c){return ac(e,this._buildIdpRequest(c))}_getReauthenticationResolver(e){return ac(e,this._buildIdpRequest())}_buildIdpRequest(e){const c={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(c.idToken=e),c}}function xt(e){return kc(e.auth,new Lt(e),e.bypassAuthState)}function wt(e){const{auth:c,user:t}=e;return V(t,c,"internal-error"),Sc(t,new Lt(e),e.bypassAuthState)}async function St(e){const{auth:c,user:t}=e;return V(t,c,"internal-error"),wc(t,new Lt(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,c,t,n,a=!1){this.auth=e,this.resolver=t,this.user=n,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(c)?c:[c]}execute(){return new Promise((async(e,c)=>{this.pendingPromise={resolve:e,reject:c};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}}))}async onAuthEvent(e){const{urlResponse:c,sessionId:t,postBody:n,tenantId:a,error:i,type:r}=e;if(i)return void this.reject(i);const o={auth:this.auth,requestUri:c,sessionId:t,tenantId:a||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(r)(o))}catch(s){this.reject(s)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xt;case"linkViaPopup":case"linkViaRedirect":return St;case"reauthViaPopup":case"reauthViaRedirect":return wt;default:p(this.auth,"internal-error")}}resolve(e){C(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){C(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt=new w(2e3,1e4);async function _t(e,c,t){const n=Ie(e);z(e,c,zc);const a=yt(n,t),i=new At(n,"signInViaPopup",c,a);return i.executeNotNull()}class At extends kt{constructor(e,c,t,n,a){super(e,c,n,a),this.provider=t,this.authWindow=null,this.pollId=null,At.currentPopupAction&&At.currentPopupAction.cancel(),At.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return V(e,this.auth,"internal-error"),e}async onExecution(){C(1===this.filter.length,"Popup operations only handle one event");const e=Zc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(h(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(h(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,At.currentPopupAction=null}pollUserCancellation(){const e=()=>{var c,t;(null===(t=null===(c=this.authWindow)||void 0===c?void 0:c.window)||void 0===t?void 0:t.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(h(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Nt.get())};e()}}At.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Et="pendingRedirect",It=new Map;class Tt extends kt{constructor(e,c,t=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],c,void 0,t),this.eventId=null}async execute(){let e=It.get(this.auth._key());if(!e){try{const c=await Pt(this.resolver,this.auth),t=c?await super.execute():null;e=()=>Promise.resolve(t)}catch(c){e=()=>Promise.reject(c)}It.set(this.auth._key(),e)}return this.bypassAuthState||It.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const c=await this.auth._redirectUserForId(e.eventId);if(c)return this.user=c,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Pt(e,c){const t=Rt(c),n=Ot(e);if(!await n._isAvailable())return!1;const a="true"===await n._get(t);return await n._remove(t),a}function Ft(e,c){It.set(e._key(),c)}function Ot(e){return ue(e._redirectPersistence)}function Rt(e){return me(Et,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dt(e,c,t=!1){const n=Ie(e),a=yt(n,c),i=new Tt(n,a,t),r=await i.execute();return r&&!t&&(delete r.user._redirectEventId,await n._persistUserIfCurrent(r.user),await n._setRedirectUser(null,c)),r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Bt=6e5;class Wt{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let c=!1;return this.consumers.forEach((t=>{this.isEventForConsumer(e,t)&&(c=!0,this.sendToConsumer(e,t),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!jt(e)||(this.hasHandledPotentialRedirect=!0,c||(this.queuedRedirectEvent=e,c=!0)),c}sendToConsumer(e,c){var t;if(e.error&&!$t(e)){const n=(null===(t=e.error.code)||void 0===t?void 0:t.split("auth/")[1])||"internal-error";c.onError(h(this.auth,n))}else c.onAuthEvent(e)}isEventForConsumer(e,c){const t=null===c.eventId||!!e.eventId&&e.eventId===c.eventId;return c.filter.includes(e.type)&&t}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Bt&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ut(e))}saveEventToCache(e){this.cachedEventUids.add(Ut(e)),this.lastProcessedEventTime=Date.now()}}function Ut(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function $t({type:e,error:c}){return"unknown"===e&&"auth/no-auth-event"===(null===c||void 0===c?void 0:c.code)}function jt(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $t(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qt(e,c={}){return E(e,"GET","/v1/projects",c)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Yt=/^https?/;async function Zt(e){if(e.config.emulator)return;const{authorizedDomains:c}=await qt(e);for(const n of c)try{if(Kt(n))return}catch(t){}p(e,"unauthorized-domain")}function Kt(e){const c=b(),{protocol:t,hostname:n}=new URL(c);if(e.startsWith("chrome-extension://")){const a=new URL(e);return""===a.hostname&&""===n?"chrome-extension:"===t&&e.replace("chrome-extension://","")===c.replace("chrome-extension://",""):"chrome-extension:"===t&&a.hostname===n}if(!Yt.test(t))return!1;if(Gt.test(e))return n===e;const a=e.replace(/\./g,"\\."),i=new RegExp("^(.+\\."+a+"|"+a+")$","i");return i.test(n)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt=new w(3e4,6e4);function Jt(){const e=Xc().___jsl;if(null===e||void 0===e?void 0:e.H)for(const c of Object.keys(e.H))if(e.H[c].r=e.H[c].r||[],e.H[c].L=e.H[c].L||[],e.H[c].r=[...e.H[c].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}function Qt(e){return new Promise(((c,t)=>{var n,a,i;function r(){Jt(),gapi.load("gapi.iframes",{callback:()=>{c(gapi.iframes.getContext())},ontimeout:()=>{Jt(),t(h(e,"network-request-failed"))},timeout:Xt.get()})}if(null===(a=null===(n=Xc().gapi)||void 0===n?void 0:n.iframes)||void 0===a?void 0:a.Iframe)c(gapi.iframes.getContext());else{if(!(null===(i=Xc().gapi)||void 0===i?void 0:i.load)){const c=Oe("iframefcb");return Xc()[c]=()=>{gapi.load?r():t(h(e,"network-request-failed"))},Fe(`https://apis.google.com/js/api.js?onload=${c}`).catch((e=>t(e)))}r()}})).catch((e=>{throw en=null,e}))}let en=null;function cn(e){return en=en||Qt(e),en}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn=new w(5e3,15e3),nn="__/auth/iframe",an="emulator/auth/iframe",rn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},on=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sn(e){const c=e.config;V(c.authDomain,e,"auth-domain-config-required");const t=c.emulator?S(c,an):`https://${e.config.authDomain}/${nn}`,i={apiKey:c.apiKey,appName:e.name,v:a.Jn},r=on.get(e.config.apiHost);r&&(i.eid=r);const o=e._getFrameworks();return o.length&&(i.fw=o.join(",")),`${t}?${(0,n.xO)(i).slice(1)}`}async function ln(e){const c=await cn(e),t=Xc().gapi;return V(t,e,"internal-error"),c.open({where:document.body,url:sn(e),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rn,dontclear:!0},(c=>new Promise((async(t,n)=>{await c.restyle({setHideOnLeave:!1});const a=h(e,"network-request-failed"),i=Xc().setTimeout((()=>{n(a)}),tn.get());function r(){Xc().clearTimeout(i),t(c)}c.ping(r).then(r,(()=>{n(a)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fn=500,dn=600,mn="_blank",pn="http://localhost";class hn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function vn(e,c,t,a=fn,i=dn){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-a)/2,0).toString();let s="";const l=Object.assign(Object.assign({},un),{width:a.toString(),height:i.toString(),top:r,left:o}),u=(0,n.z$)().toLowerCase();t&&(s=ge(u)?mn:t),ve(u)&&(c=c||pn,l.scrollbars="yes");const f=Object.entries(l).reduce(((e,[c,t])=>`${e}${c}=${t},`),"");if(ye(u)&&"_self"!==s)return zn(c||"",s),new hn(null);const d=window.open(c||"",s,f);V(d,e,"popup-blocked");try{d.focus()}catch(m){}return new hn(d)}function zn(e,c){const t=document.createElement("a");t.href=e,t.target=c;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn="__/auth/handler",Vn="emulator/auth/handler",Hn=encodeURIComponent("fac");async function Cn(e,c,t,i,r,o){V(e.config.authDomain,e,"auth-domain-config-required"),V(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:t,redirectUrl:i,v:a.Jn,eventId:r};if(c instanceof zc){c.setDefaultLanguage(e.languageCode),s.providerId=c.providerId||"",(0,n.xb)(c.getCustomParameters())||(s.customParameters=JSON.stringify(c.getCustomParameters()));for(const[e,c]of Object.entries(o||{}))s[e]=c}if(c instanceof gc){const e=c.getScopes().filter((e=>""!==e));e.length>0&&(s.scopes=e.join(","))}e.tenantId&&(s.tid=e.tenantId);const l=s;for(const n of Object.keys(l))void 0===l[n]&&delete l[n];const u=await e._getAppCheckToken(),f=u?`#${Hn}=${encodeURIComponent(u)}`:"";return`${bn(e)}?${(0,n.xO)(l).slice(1)}${f}`}function bn({config:e}){return e.emulator?S(e,Vn):`https://${e.authDomain}/${gn}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn="webStorageSupport";class yn{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qc,this._completeRedirectFn=Dt,this._overrideRedirectResult=Ft}async _openPopup(e,c,t,n){var a;C(null===(a=this.eventManagers[e._key()])||void 0===a?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await Cn(e,c,t,b(),n);return vn(e,i,Zc())}async _openRedirect(e,c,t,n){await this._originValidation(e);const a=await Cn(e,c,t,b(),n);return Jc(a),new Promise((()=>{}))}_initialize(e){const c=e._key();if(this.eventManagers[c]){const{manager:e,promise:t}=this.eventManagers[c];return e?Promise.resolve(e):(C(t,"If manager is not set, promise should be"),t)}const t=this.initAndGetManager(e);return this.eventManagers[c]={promise:t},t.catch((()=>{delete this.eventManagers[c]})),t}async initAndGetManager(e){const c=await ln(e),t=new Wt(e);return c.register("authEvent",(c=>{V(null===c||void 0===c?void 0:c.authEvent,e,"invalid-auth-event");const n=t.onEvent(c.authEvent);return{status:n?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:t},this.iframes[e._key()]=c,t}_isIframeWebStorageSupported(e,c){const t=this.iframes[e._key()];t.send(Mn,{type:Mn},(t=>{var n;const a=null===(n=null===t||void 0===t?void 0:t[0])||void 0===n?void 0:n[Mn];void 0!==a&&c(!!a),p(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const c=e._key();return this.originValidationPromises[c]||(this.originValidationPromises[c]=Zt(e)),this.originValidationPromises[c]}get _shouldInitProactively(){return xe()||ze()||Me()}}const Ln=yn;class xn{constructor(e){this.factorId=e}_process(e,c,t){switch(c.type){case"enroll":return this._finalizeEnroll(e,c.credential,t);case"signin":return this._finalizeSignIn(e,c.credential);default:return H("unexpected MultiFactorSessionType")}}}class wn extends xn{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new wn(e)}_finalizeEnroll(e,c,t){return Tc(e,{idToken:c,displayName:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,c){return Vt(e,{mfaPendingCredential:c,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Sn{constructor(){}static assertion(e){return wn._fromCredential(e)}}Sn.FACTOR_ID="phone";class kn{static assertionForEnrollment(e,c){return Nn._fromSecret(e,c)}static assertionForSignIn(e,c){return Nn._fromEnrollmentId(e,c)}static async generateSecret(e){var c;const t=e;V("undefined"!==typeof(null===(c=t.user)||void 0===c?void 0:c.auth),"internal-error");const n=await Pc(t.user.auth,{idToken:t.credential,totpEnrollmentInfo:{}});return _n._fromStartTotpMfaEnrollmentResponse(n,t.user.auth)}}kn.FACTOR_ID="totp";class Nn extends xn{constructor(e,c,t){super("totp"),this.otp=e,this.enrollmentId=c,this.secret=t}static _fromSecret(e,c){return new Nn(c,void 0,e)}static _fromEnrollmentId(e,c){return new Nn(c,e)}async _finalizeEnroll(e,c,t){return V("undefined"!==typeof this.secret,e,"argument-error"),Fc(e,{idToken:c,displayName:t,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,c){V(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const t={verificationCode:this.otp};return Ht(e,{mfaPendingCredential:c,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:t})}}class _n{constructor(e,c,t,n,a,i,r){this.sessionInfo=i,this.auth=r,this.secretKey=e,this.hashingAlgorithm=c,this.codeLength=t,this.codeIntervalSeconds=n,this.enrollmentCompletionDeadline=a}static _fromStartTotpMfaEnrollmentResponse(e,c){return new _n(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,c)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,c){var t;let n=!1;return(An(e)||An(c))&&(n=!0),n&&(An(e)&&(e=(null===(t=this.auth.currentUser)||void 0===t?void 0:t.email)||"unknownuser"),An(c)&&(c=this.auth.name)),`otpauth://totp/${c}:${e}?secret=${this.secretKey}&issuer=${c}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function An(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var En="@firebase/auth",In="1.5.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tn{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const c=await this.auth.currentUser.getIdToken(e);return{accessToken:c}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const c=this.auth.onIdTokenChanged((c=>{e((null===c||void 0===c?void 0:c.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,c),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const c=this.internalListeners.get(e);c&&(this.internalListeners.delete(e),c(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Fn(e){(0,a.Xd)(new o.wA("auth",((c,{options:t})=>{const n=c.getProvider("app").getImmediate(),a=c.getProvider("heartbeat"),i=c.getProvider("app-check-internal"),{apiKey:r,authDomain:o}=n.options;V(r&&!r.includes(":"),"invalid-api-key",{appName:n.name});const s={apiKey:r,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Se(e)},l=new Ee(n,a,i,s);return qe(l,t),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,c,t)=>{const n=e.getProvider("auth-internal");n.initialize()}))),(0,a.Xd)(new o.wA("auth-internal",(e=>{const c=Ie(e.getProvider("auth").getImmediate());return(e=>new Tn(e))(c)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,a.KN)(En,In,Pn(e)),(0,a.KN)(En,In,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On=300,Rn=(0,n.Pz)("authIdTokenMaxAge")||On;let Dn=null;const Bn=e=>async c=>{const t=c&&await c.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Rn)return;const a=null===t||void 0===t?void 0:t.token;Dn!==a&&(Dn=a,await fetch(e,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function Wn(e=(0,a.Mq)()){const c=(0,a.qX)(e,"auth");if(c.isInitialized())return c.getImmediate();const t=je(e,{popupRedirectResolver:Ln,persistence:[zt,$c,qc]}),i=(0,n.Pz)("authTokenSyncURL");if(i){const e=Bn(i);Ac(t,e,(()=>e(t.currentUser))),_c(t,(c=>e(c)))}const r=(0,n.q4)("auth");return r&&Ge(t,`http://${r}`),t}Fn("Browser")},1066:function(e,c,t){t.d(c,{ET:function(){return cn},hJ:function(){return lt},oe:function(){return en},JU:function(){return ut},QT:function(){return Xt},PL:function(){return Jt},ad:function(){return at},IO:function(){return Wt},r7:function(){return Qt},ar:function(){return $t}});t(560),t(4224),t(1121),t(7133),t(3429);var n=t(7077),a=t(7142),i=t(5168),r=t(223);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}o.UNAUTHENTICATED=new o(null),o.GOOGLE_CREDENTIALS=new o("google-credentials-uid"),o.FIRST_PARTY=new o("first-party-uid"),o.MOCK_USER=new o("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let s="10.7.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l=new i.Yd("@firebase/firestore");function u(e,...c){if(l.logLevel<=i["in"].DEBUG){const t=c.map(m);l.debug(`Firestore (${s}): ${e}`,...t)}}function f(e,...c){if(l.logLevel<=i["in"].ERROR){const t=c.map(m);l.error(`Firestore (${s}): ${e}`,...t)}}function d(e,...c){if(l.logLevel<=i["in"].WARN){const t=c.map(m);l.warn(`Firestore (${s}): ${e}`,...t)}}function m(e){if("string"==typeof e)return e;try{
/**
    * @license
    * Copyright 2020 Google LLC
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *   http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */
return function(e){return JSON.stringify(e)}(e)}catch(c){return e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(e="Unexpected state"){const c=`FIRESTORE (${s}) INTERNAL ASSERTION FAILED: `+e;throw f(c),new Error(c)}function h(e,c){e||p()}function v(e,c){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z="ok",g="cancelled",V="unknown",H="invalid-argument",C="deadline-exceeded",b="not-found",M="permission-denied",y="unauthenticated",L="resource-exhausted",x="failed-precondition",w="aborted",S="out-of-range",k="unimplemented",N="internal",_="unavailable";class A extends r.ZR{constructor(e,c){super(e,c),this.code=e,this.message=c,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class E{constructor(e,c){this.user=c,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class I{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,c){e.enqueueRetryable((()=>c(o.UNAUTHENTICATED)))}shutdown(){}}class T{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,c){this.changeListener=c,e.enqueueRetryable((()=>c(this.token.user)))}shutdown(){this.changeListener=null}}class P{constructor(e){this.auth=null,e.onInit((e=>{this.auth=e}))}getToken(){return this.auth?this.auth.getToken().then((e=>e?(h("string"==typeof e.accessToken),new E(e.accessToken,new o(this.auth.getUid()))):null)):Promise.resolve(null)}invalidateToken(){}start(e,c){}shutdown(){}}class F{constructor(e,c,t){this.t=e,this.i=c,this.o=t,this.type="FirstParty",this.user=o.FIRST_PARTY,this.u=new Map}l(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.l();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class O{constructor(e,c,t){this.t=e,this.i=c,this.o=t}getToken(){return Promise.resolve(new F(this.t,this.i,this.o))}start(e,c){e.enqueueRetryable((()=>c(o.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class R{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class D{constructor(e){this.h=e,this.appCheck=null,e.onInit((e=>{this.appCheck=e}))}getToken(){return this.appCheck?this.appCheck.getToken().then((e=>e?(h("string"==typeof e.token),new R(e.token)):null)):Promise.resolve(null)}invalidateToken(){}start(e,c){}shutdown(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e,c,t,n,a,i,r,o,s){this.databaseId=e,this.appId=c,this.persistenceKey=t,this.host=n,this.ssl=a,this.forceLongPolling=i,this.autoDetectLongPolling=r,this.longPollingOptions=o,this.useFetchStreams=s}}class W{constructor(e,c){this.projectId=e,this.database=c||"(default)"}static empty(){return new W("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof W&&e.projectId===this.projectId&&e.database===this.database}}class U{constructor(e,c,t){void 0===c?c=0:c>e.length&&p(),void 0===t?t=e.length-c:t>e.length-c&&p(),this.segments=e,this.offset=c,this.len=t}get length(){return this.len}isEqual(e){return 0===U.comparator(this,e)}child(e){const c=this.segments.slice(this.offset,this.limit());return e instanceof U?e.forEach((e=>{c.push(e)})):c.push(e),this.construct(c)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let c=0;c<this.length;c++)if(this.get(c)!==e.get(c))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let c=0;c<this.length;c++)if(this.get(c)!==e.get(c))return!1;return!0}forEach(e){for(let c=this.offset,t=this.limit();c<t;c++)e(this.segments[c])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,c){const t=Math.min(e.length,c.length);for(let n=0;n<t;n++){const t=e.get(n),a=c.get(n);if(t<a)return-1;if(t>a)return 1}return e.length<c.length?-1:e.length>c.length?1:0}}class $ extends U{construct(e,c,t){return new $(e,c,t)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const c=[];for(const t of e){if(t.indexOf("//")>=0)throw new A(H,`Invalid segment (${t}). Paths must not contain // in them.`);c.push(...t.split("/").filter((e=>e.length>0)))}return new $(c)}static emptyPath(){return new $([])}}const j=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class q extends U{construct(e,c,t){return new q(e,c,t)}static isValidIdentifier(e){return j.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),q.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new q(["__name__"])}static fromServerFormat(e){const c=[];let t="",n=0;const a=()=>{if(0===t.length)throw new A(H,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);c.push(t),t=""};let i=!1;for(;n<e.length;){const c=e[n];if("\\"===c){if(n+1===e.length)throw new A(H,"Path has trailing escape character: "+e);const c=e[n+1];if("\\"!==c&&"."!==c&&"`"!==c)throw new A(H,"Path has invalid escape sequence: "+e);t+=c,n+=2}else"`"===c?(i=!i,n++):"."!==c||i?(t+=c,n++):(a(),n++)}if(a(),i)throw new A(H,"Unterminated ` in path: "+e);return new q(c)}static emptyPath(){return new q([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G($.fromString(e))}static fromName(e){return new G($.fromString(e).popFirst(5))}static empty(){return new G($.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===$.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,c){return $.comparator(e.path,c.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new $(e.slice()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(e,c,t){if(!t)throw new A(H,`Function ${e}() cannot be called with an empty ${c}.`)}function Z(e){if(!G.isDocumentKey(e))throw new A(H,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function K(e){if(G.isDocumentKey(e))throw new A(H,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function X(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const c=function(e){return e.constructor?e.constructor.name:null}(e);return c?`a custom ${c} object`:"an object"}}return"function"==typeof e?"a function":p()}function J(e,c){if("_delegate"in e&&(e=e._delegate),!(e instanceof c)){if(c.name===e.constructor.name)throw new A(H,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=X(e);throw new A(H,`Expected type '${c.name}', but it was: ${t}`)}}return e}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Q(e){const c={};return void 0!==e.timeoutSeconds&&(c.timeoutSeconds=e.timeoutSeconds),c
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}let ee=null;function ce(){return null===ee?ee=function(){return 268435456+Math.round(2147483648*Math.random())}():ee++,"0x"+ee.toString(16)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}function te(e){return null==e}function ne(e){return 0===e&&1/e==-1/0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie,re;function oe(e){if(void 0===e)return f("RPC_ERROR","HTTP error has no status"),V;switch(e){case 200:return z;case 400:return x;case 401:return y;case 403:return M;case 404:return b;case 409:return w;case 416:return S;case 429:return L;case 499:return g;case 500:return V;case 501:return k;case 503:return _;case 504:return C;default:return e>=200&&e<300?z:e>=400&&e<500?x:e>=500&&e<600?N:V}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(re=ie||(ie={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";class se extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const c=e.ssl?"https":"http",t=encodeURIComponent(this.databaseId.projectId),n=encodeURIComponent(this.databaseId.database);this.m=c+"://"+e.host,this.A=`projects/${t}/databases/${n}`,this.T="(default)"===this.databaseId.database?`project_id=${t}`:`project_id=${t}&database_id=${n}`}get P(){return!1}R(e,c,t,n,a){const i=ce(),r=this.I(e,c);u("RestConnection",`Sending RPC '${e}' ${i}:`,r,t);const o={"google-cloud-resource-prefix":this.A,"x-goog-request-params":this.T};return this.V(o,n,a),this.p(e,r,o,t).then((c=>(u("RestConnection",`Received RPC '${e}' ${i}: `,c),c)),(c=>{throw d("RestConnection",`RPC '${e}' ${i} failed with error: `,c,"url: ",r,"request:",t),c}))}g(e,c,t,n,a,i){return this.R(e,c,t,n,a)}V(e,c,t){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+s}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),c&&c.headers.forEach(((c,t)=>e[t]=c)),t&&t.headers.forEach(((c,t)=>e[t]=c))}I(e,c){const t=ae[e];return`${this.m}/v1/${c}:${t}`}}{constructor(e,c){super(e),this.F=c}v(e,c){throw new Error("Not supported by FetchConnection")}async p(e,c,t,n){var a;const i=JSON.stringify(n);let r;try{r=await this.F(c,{method:"POST",headers:t,body:i})}catch(e){const c=e;throw new A(oe(c.status),"Request failed with error: "+c.statusText)}if(!r.ok){let e=await r.json();Array.isArray(e)&&(e=e[0]);const c=null===(a=null==e?void 0:e.error)||void 0===a?void 0:a.message;throw new A(oe(r.status),`Request failed with error: ${null!=c?c:r.statusText}`)}return r.json()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function le(e){const c="undefined"!=typeof self&&(self.crypto||self.msCrypto),t=new Uint8Array(e);if(c&&"function"==typeof c.getRandomValues)c.getRandomValues(t);else for(let n=0;n<e;n++)t[n]=Math.floor(256*Math.random());return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",c=Math.floor(256/e.length)*e.length;let t="";for(;t.length<20;){const n=le(40);for(let a=0;a<n.length;++a)t.length<20&&n[a]<c&&(t+=e.charAt(n[a]%e.length))}return t}}function fe(e,c){return e<c?-1:e>c?1:0}function de(e,c,t){return e.length===c.length&&e.every(((e,n)=>t(e,c[n])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(e){let c=0;for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&c++;return c}function pe(e,c){for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&c(t,e[t])}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.binaryString=e}static fromBase64String(e){const c=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new he("Invalid base64 string: "+e):e}}(e);return new ve(c)}static fromUint8Array(e){const c=function(e){let c="";for(let t=0;t<e.length;++t)c+=String.fromCharCode(e[t]);return c}(e);return new ve(c)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const c=new Uint8Array(e.length);for(let t=0;t<e.length;t++)c[t]=e.charCodeAt(t);return c}
/**
    * @license
    * Copyright 2020 Google LLC
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *   http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ve.EMPTY_BYTE_STRING=new ve("");const ze=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ge(e){if(h(!!e),"string"==typeof e){let c=0;const t=ze.exec(e);if(h(!!t),t[1]){let e=t[1];e=(e+"000000000").substr(0,9),c=Number(e)}const n=new Date(e);return{seconds:Math.floor(n.getTime()/1e3),nanos:c}}return{seconds:Ve(e.seconds),nanos:Ve(e.nanos)}}function Ve(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function He(e){return"string"==typeof e?ve.fromBase64String(e):ve.fromUint8Array(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,c){if(this.seconds=e,this.nanoseconds=c,c<0)throw new A(H,"Timestamp nanoseconds out of range: "+c);if(c>=1e9)throw new A(H,"Timestamp nanoseconds out of range: "+c);if(e<-62135596800)throw new A(H,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new A(H,"Timestamp seconds out of range: "+e)}static now(){return Ce.fromMillis(Date.now())}static fromDate(e){return Ce.fromMillis(e.getTime())}static fromMillis(e){const c=Math.floor(e/1e3),t=Math.floor(1e6*(e-1e3*c));return new Ce(c,t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?fe(this.nanoseconds,e.nanoseconds):fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(e){var c,t;return"server_timestamp"===(null===(t=((null===(c=null==e?void 0:e.mapValue)||void 0===c?void 0:c.fields)||{}).__type__)||void 0===t?void 0:t.stringValue)}function Me(e){const c=e.mapValue.fields.__previous_value__;return be(c)?Me(c):c}function ye(e){const c=ge(e.mapValue.fields.__local_write_time__.timestampValue);return new Ce(c.seconds,c.nanos)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le={fields:{__type__:{stringValue:"__max__"}}};function xe(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?be(e)?4:function(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
  * @license
  * Copyright 2022 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */(e)?9007199254740991:10:p()}function we(e,c){if(e===c)return!0;const t=xe(e);if(t!==xe(c))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===c.booleanValue;case 4:return ye(e).isEqual(ye(c));case 3:return function(e,c){if("string"==typeof e.timestampValue&&"string"==typeof c.timestampValue&&e.timestampValue.length===c.timestampValue.length)return e.timestampValue===c.timestampValue;const t=ge(e.timestampValue),n=ge(c.timestampValue);return t.seconds===n.seconds&&t.nanos===n.nanos}(e,c);case 5:return e.stringValue===c.stringValue;case 6:return function(e,c){return He(e.bytesValue).isEqual(He(c.bytesValue))}(e,c);case 7:return e.referenceValue===c.referenceValue;case 8:return function(e,c){return Ve(e.geoPointValue.latitude)===Ve(c.geoPointValue.latitude)&&Ve(e.geoPointValue.longitude)===Ve(c.geoPointValue.longitude)}(e,c);case 2:return function(e,c){if("integerValue"in e&&"integerValue"in c)return Ve(e.integerValue)===Ve(c.integerValue);if("doubleValue"in e&&"doubleValue"in c){const t=Ve(e.doubleValue),n=Ve(c.doubleValue);return t===n?ne(t)===ne(n):isNaN(t)&&isNaN(n)}return!1}(e,c);case 9:return de(e.arrayValue.values||[],c.arrayValue.values||[],we);case 10:return function(e,c){const t=e.mapValue.fields||{},n=c.mapValue.fields||{};if(me(t)!==me(n))return!1;for(const a in t)if(t.hasOwnProperty(a)&&(void 0===n[a]||!we(t[a],n[a])))return!1;return!0}(e,c);default:return p()}}function Se(e,c){return void 0!==(e.values||[]).find((e=>we(e,c)))}function ke(e,c){if(e===c)return 0;const t=xe(e),n=xe(c);if(t!==n)return fe(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return fe(e.booleanValue,c.booleanValue);case 2:return function(e,c){const t=Ve(e.integerValue||e.doubleValue),n=Ve(c.integerValue||c.doubleValue);return t<n?-1:t>n?1:t===n?0:isNaN(t)?isNaN(n)?0:-1:1}(e,c);case 3:return Ne(e.timestampValue,c.timestampValue);case 4:return Ne(ye(e),ye(c));case 5:return fe(e.stringValue,c.stringValue);case 6:return function(e,c){const t=He(e),n=He(c);return t.compareTo(n)}(e.bytesValue,c.bytesValue);case 7:return function(e,c){const t=e.split("/"),n=c.split("/");for(let a=0;a<t.length&&a<n.length;a++){const e=fe(t[a],n[a]);if(0!==e)return e}return fe(t.length,n.length)}(e.referenceValue,c.referenceValue);case 8:return function(e,c){const t=fe(Ve(e.latitude),Ve(c.latitude));return 0!==t?t:fe(Ve(e.longitude),Ve(c.longitude))}(e.geoPointValue,c.geoPointValue);case 9:return function(e,c){const t=e.values||[],n=c.values||[];for(let a=0;a<t.length&&a<n.length;++a){const e=ke(t[a],n[a]);if(e)return e}return fe(t.length,n.length)}(e.arrayValue,c.arrayValue);case 10:return function(e,c){if(e===Le&&c===Le)return 0;if(e===Le)return 1;if(c===Le)return-1;const t=e.fields||{},n=Object.keys(t),a=c.fields||{},i=Object.keys(a);n.sort(),i.sort();for(let r=0;r<n.length&&r<i.length;++r){const e=fe(n[r],i[r]);if(0!==e)return e;const c=ke(t[n[r]],a[i[r]]);if(0!==c)return c}return fe(n.length,i.length)}(e.mapValue,c.mapValue);default:throw p()}}function Ne(e,c){if("string"==typeof e&&"string"==typeof c&&e.length===c.length)return fe(e,c);const t=ge(e),n=ge(c),a=fe(t.seconds,n.seconds);return 0!==a?a:fe(t.nanos,n.nanos)}function _e(e,c){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${c.path.canonicalString()}`}}function Ae(e){return!!e&&"arrayValue"in e}function Ee(e){return!!e&&"nullValue"in e}function Ie(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Te(e){return!!e&&"mapValue"in e}function Pe(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const c={mapValue:{fields:{}}};return pe(e.mapValue.fields,((e,t)=>c.mapValue.fields[e]=Pe(t))),c}if(e.arrayValue){const c={arrayValue:{values:[]}};for(let t=0;t<(e.arrayValue.values||[]).length;++t)c.arrayValue.values[t]=Pe(e.arrayValue.values[t]);return c}return Object.assign({},e)}class Fe{constructor(e,c){this.position=e,this.inclusive=c}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oe{}class Re extends Oe{constructor(e,c,t){super(),this.field=e,this.op=c,this.value=t}static create(e,c,t){return e.isKeyField()?"in"===c||"not-in"===c?this.createKeyFieldInFilter(e,c,t):new Be(e,c,t):"array-contains"===c?new je(e,t):"in"===c?new qe(e,t):"not-in"===c?new Ge(e,t):"array-contains-any"===c?new Ye(e,t):new Re(e,c,t)}static createKeyFieldInFilter(e,c,t){return"in"===c?new We(e,t):new Ue(e,t)}matches(e){const c=e.data.field(this.field);return"!="===this.op?null!==c&&this.matchesComparison(ke(c,this.value)):null!==c&&xe(this.value)===xe(c)&&this.matchesComparison(ke(c,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return p()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class De extends Oe{constructor(e,c){super(),this.filters=e,this.op=c,this.D=null}static create(e,c){return new De(e,c)}matches(e){return function(e){return"and"===e.op}(this)?void 0===this.filters.find((c=>!c.matches(e))):void 0!==this.filters.find((c=>c.matches(e)))}getFlattenedFilters(){return null!==this.D||(this.D=this.filters.reduce(((e,c)=>e.concat(c.getFlattenedFilters())),[])),this.D}getFilters(){return Object.assign([],this.filters)}}class Be extends Re{constructor(e,c,t){super(e,c,t),this.key=G.fromName(t.referenceValue)}matches(e){const c=G.comparator(e.key,this.key);return this.matchesComparison(c)}}class We extends Re{constructor(e,c){super(e,"in",c),this.keys=$e("in",c)}matches(e){return this.keys.some((c=>c.isEqual(e.key)))}}class Ue extends Re{constructor(e,c){super(e,"not-in",c),this.keys=$e("not-in",c)}matches(e){return!this.keys.some((c=>c.isEqual(e.key)))}}function $e(e,c){var t;return((null===(t=c.arrayValue)||void 0===t?void 0:t.values)||[]).map((e=>G.fromName(e.referenceValue)))}class je extends Re{constructor(e,c){super(e,"array-contains",c)}matches(e){const c=e.data.field(this.field);return Ae(c)&&Se(c.arrayValue,this.value)}}class qe extends Re{constructor(e,c){super(e,"in",c)}matches(e){const c=e.data.field(this.field);return null!==c&&Se(this.value.arrayValue,c)}}class Ge extends Re{constructor(e,c){super(e,"not-in",c)}matches(e){if(Se(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const c=e.data.field(this.field);return null!==c&&!Se(this.value.arrayValue,c)}}class Ye extends Re{constructor(e,c){super(e,"array-contains-any",c)}matches(e){const c=e.data.field(this.field);return!(!Ae(c)||!c.arrayValue.values)&&c.arrayValue.values.some((e=>Se(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,c="asc"){this.field=e,this.dir=c}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ke{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ke(e)}static min(){return new Ke(new Ce(0,0))}static max(){return new Ke(new Ce(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,c){this.comparator=e,this.root=c||Qe.EMPTY}insert(e,c){return new Xe(this.comparator,this.root.insert(e,c,this.comparator).copy(null,null,Qe.BLACK,null,null))}remove(e){return new Xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qe.BLACK,null,null))}get(e){let c=this.root;for(;!c.isEmpty();){const t=this.comparator(e,c.key);if(0===t)return c.value;t<0?c=c.left:t>0&&(c=c.right)}return null}indexOf(e){let c=0,t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return c+t.left.size;n<0?t=t.left:(c+=t.left.size+1,t=t.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((c,t)=>(e(c,t),!1)))}toString(){const e=[];return this.inorderTraversal(((c,t)=>(e.push(`${c}:${t}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Je(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Je(this.root,e,this.comparator,!1)}getReverseIterator(){return new Je(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Je(this.root,e,this.comparator,!0)}}class Je{constructor(e,c,t,n){this.isReverse=n,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=c?t(e.key,c):1,c&&n&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(0===a){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const c={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return c}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qe{constructor(e,c,t,n,a){this.key=e,this.value=c,this.color=null!=t?t:Qe.RED,this.left=null!=n?n:Qe.EMPTY,this.right=null!=a?a:Qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,c,t,n,a){return new Qe(null!=e?e:this.key,null!=c?c:this.value,null!=t?t:this.color,null!=n?n:this.left,null!=a?a:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,c,t){let n=this;const a=t(e,n.key);return n=a<0?n.copy(null,null,null,n.left.insert(e,c,t),null):0===a?n.copy(null,c,null,null,null):n.copy(null,null,null,null,n.right.insert(e,c,t)),n.fixUp()}removeMin(){if(this.left.isEmpty())return Qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,c){let t,n=this;if(c(e,n.key)<0)n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,c),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===c(e,n.key)){if(n.right.isEmpty())return Qe.EMPTY;t=n.right.min(),n=n.copy(t.key,t.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,c))}return n.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),c=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,c)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw p();if(this.right.isRed())throw p();const e=this.left.check();if(e!==this.right.check())throw p();return e+(this.isRed()?0:1)}}Qe.EMPTY=null,Qe.RED=!0,Qe.BLACK=!1,Qe.EMPTY=new class{constructor(){this.size=0}get key(){throw p()}get value(){throw p()}get color(){throw p()}get left(){throw p()}get right(){throw p()}copy(e,c,t,n,a){return this}insert(e,c,t){return new Qe(e,c)}remove(e,c){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ec{constructor(e){this.comparator=e,this.data=new Xe(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((c,t)=>(e(c),!1)))}forEachInRange(e,c){const t=this.data.getIteratorFrom(e[0]);for(;t.hasNext();){const n=t.getNext();if(this.comparator(n.key,e[1])>=0)return;c(n.key)}}forEachWhile(e,c){let t;for(t=void 0!==c?this.data.getIteratorFrom(c):this.data.getIterator();t.hasNext();)if(!e(t.getNext().key))return}firstAfterOrEqual(e){const c=this.data.getIteratorFrom(e);return c.hasNext()?c.getNext().key:null}getIterator(){return new cc(this.data.getIterator())}getIteratorFrom(e){return new cc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let c=this;return c.size<e.size&&(c=e,e=this),e.forEach((e=>{c=c.add(e)})),c}isEqual(e){if(!(e instanceof ec))return!1;if(this.size!==e.size)return!1;const c=this.data.getIterator(),t=e.data.getIterator();for(;c.hasNext();){const e=c.getNext().key,n=t.getNext().key;if(0!==this.comparator(e,n))return!1}return!0}toArray(){const e=[];return this.forEach((c=>{e.push(c)})),e}toString(){const e=[];return this.forEach((c=>e.push(c))),"SortedSet("+e.toString()+")"}copy(e){const c=new ec(this.comparator);return c.data=e,c}}class cc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e){this.fields=e,e.sort(q.comparator)}static empty(){return new tc([])}unionWith(e){let c=new ec(q.comparator);for(const t of this.fields)c=c.add(t);for(const t of e)c=c.add(t);return new tc(c.toArray())}covers(e){for(const c of this.fields)if(c.isPrefixOf(e))return!0;return!1}isEqual(e){return de(this.fields,e.fields,((e,c)=>e.isEqual(c)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e){this.value=e}static empty(){return new nc({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let c=this.value;for(let t=0;t<e.length-1;++t)if(c=(c.mapValue.fields||{})[e.get(t)],!Te(c))return null;return c=(c.mapValue.fields||{})[e.lastSegment()],c||null}}set(e,c){this.getFieldsMap(e.popLast())[e.lastSegment()]=Pe(c)}setAll(e){let c=q.emptyPath(),t={},n=[];e.forEach(((e,a)=>{if(!c.isImmediateParentOf(a)){const e=this.getFieldsMap(c);this.applyChanges(e,t,n),t={},n=[],c=a.popLast()}e?t[a.lastSegment()]=Pe(e):n.push(a.lastSegment())}));const a=this.getFieldsMap(c);this.applyChanges(a,t,n)}delete(e){const c=this.field(e.popLast());Te(c)&&c.mapValue.fields&&delete c.mapValue.fields[e.lastSegment()]}isEqual(e){return we(this.value,e.value)}getFieldsMap(e){let c=this.value;c.mapValue.fields||(c.mapValue={fields:{}});for(let t=0;t<e.length;++t){let n=c.mapValue.fields[e.get(t)];Te(n)&&n.mapValue.fields||(n={mapValue:{fields:{}}},c.mapValue.fields[e.get(t)]=n),c=n}return c.mapValue.fields}applyChanges(e,c,t){pe(c,((c,t)=>e[c]=t));for(const n of t)delete e[n]}clone(){return new nc(Pe(this.value))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e,c,t,n,a,i,r){this.key=e,this.documentType=c,this.version=t,this.readTime=n,this.createTime=a,this.data=i,this.documentState=r}static newInvalidDocument(e){return new ac(e,0,Ke.min(),Ke.min(),Ke.min(),nc.empty(),0)}static newFoundDocument(e,c,t,n){return new ac(e,1,c,Ke.min(),t,n,0)}static newNoDocument(e,c){return new ac(e,2,c,Ke.min(),Ke.min(),nc.empty(),0)}static newUnknownDocument(e,c){return new ac(e,3,c,Ke.min(),Ke.min(),nc.empty(),2)}convertToFoundDocument(e,c){return!this.createTime.isEqual(Ke.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=c,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=nc.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=nc.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ke.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof ac&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ac(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,c=null,t=[],n=[],a=null,i=null,r=null){this.path=e,this.collectionGroup=c,this.orderBy=t,this.filters=n,this.limit=a,this.startAt=i,this.endAt=r,this.C=null}}function rc(e,c=null,t=[],n=[],a=null,i=null,r=null){return new ic(e,c,t,n,a,i,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,c=null,t=[],n=[],a=null,i="F",r=null,o=null){this.path=e,this.collectionGroup=c,this.explicitOrderBy=t,this.filters=n,this.limit=a,this.limitType=i,this.startAt=r,this.endAt=o,this.S=null,this.N=null,this.O=null,this.startAt,this.endAt}}function sc(e){return null!==e.collectionGroup}function lc(e){const c=v(e);if(null===c.S){c.S=[];const e=new Set;for(const a of c.explicitOrderBy)c.S.push(a),e.add(a.field.canonicalString());const t=c.explicitOrderBy.length>0?c.explicitOrderBy[c.explicitOrderBy.length-1].dir:"asc",n=function(e){let c=new ec(q.comparator);return e.filters.forEach((e=>{e.getFlattenedFilters().forEach((e=>{e.isInequality()&&(c=c.add(e.field))}))})),c}(c);n.forEach((n=>{e.has(n.canonicalString())||n.isKeyField()||c.S.push(new Ze(n,t))})),e.has(q.keyField().canonicalString())||c.S.push(new Ze(q.keyField(),t))}return c.S}function uc(e){const c=v(e);return c.N||(c.N=fc(c,lc(e))),c.N}function fc(e,c){if("F"===e.limitType)return rc(e.path,e.collectionGroup,c,e.filters,e.limit,e.startAt,e.endAt);{c=c.map((e=>{const c="desc"===e.dir?"asc":"desc";return new Ze(e.field,c)}));const t=e.endAt?new Fe(e.endAt.position,e.endAt.inclusive):null,n=e.startAt?new Fe(e.startAt.position,e.startAt.inclusive):null;return rc(e.path,e.collectionGroup,c,e.filters,e.limit,t,n)}}function dc(e,c){const t=e.filters.concat([c]);return new oc(e.path,e.collectionGroup,e.explicitOrderBy.slice(),t,e.limit,e.limitType,e.startAt,e.endAt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function mc(e,c){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!ne(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}(c)?function(e){return{integerValue:""+e}}(c):function(e,c){if(e.useProto3Json){if(isNaN(c))return{doubleValue:"NaN"};if(c===1/0)return{doubleValue:"Infinity"};if(c===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ne(c)?"-0":c}}(e,c)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(){this._=void 0}}class hc extends pc{}class vc extends pc{constructor(e){super(),this.elements=e}}class zc extends pc{constructor(e){super(),this.elements=e}}class gc extends pc{constructor(e,c){super(),this.serializer=e,this.q=c}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,c){this.updateTime=e,this.exists=c}static none(){return new Vc}static exists(e){return new Vc(void 0,e)}static updateTime(e){return new Vc(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class Hc{}class Cc extends Hc{constructor(e,c,t,n=[]){super(),this.key=e,this.value=c,this.precondition=t,this.fieldTransforms=n,this.type=0}getFieldMask(){return null}}class bc extends Hc{constructor(e,c,t,n,a=[]){super(),this.key=e,this.data=c,this.fieldMask=t,this.precondition=n,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}class Mc extends Hc{constructor(e,c){super(),this.key=e,this.precondition=c,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yc extends Hc{constructor(e,c){super(),this.key=e,this.precondition=c,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),xc=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})(),wc=(()=>{const e={and:"AND",or:"OR"};return e})();class Sc{constructor(e,c){this.databaseId=e,this.useProto3Json=c}}function kc(e,c){return e.useProto3Json?`${new Date(1e3*c.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+c.nanoseconds).slice(-9)}Z`:{seconds:""+c.seconds,nanos:c.nanoseconds}}function Nc(e,c){return e.useProto3Json?c.toBase64():c.toUint8Array()}function _c(e,c){return kc(e,c.toTimestamp())}function Ac(e){return h(!!e),Ke.fromTimestamp(function(e){const c=ge(e);return new Ce(c.seconds,c.nanos)}(e))}function Ec(e,c){return function(e){return new $(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(c).canonicalString()}function Ic(e,c){return Ec(e.databaseId,c.path)}function Tc(e,c){const t=function(e){const c=$.fromString(e);return h(Yc(c)),c}(c);if(t.get(1)!==e.databaseId.projectId)throw new A(H,"Tried to deserialize key from different project: "+t.get(1)+" vs "+e.databaseId.projectId);if(t.get(3)!==e.databaseId.database)throw new A(H,"Tried to deserialize key from different database: "+t.get(3)+" vs "+e.databaseId.database);return new G(function(e){return h(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}(t))}function Pc(e,c){return Ec(e.databaseId,c)}function Fc(e){return new $(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Oc(e,c,t){return{name:Ic(e,c),fields:t.value.mapValue.fields}}function Rc(e,c){return"found"in c?function(e,c){h(!!c.found),c.found.name,c.found.updateTime;const t=Tc(e,c.found.name),n=Ac(c.found.updateTime),a=c.found.createTime?Ac(c.found.createTime):Ke.min(),i=new nc({mapValue:{fields:c.found.fields}});return ac.newFoundDocument(t,n,a,i)}(e,c):"missing"in c?function(e,c){h(!!c.missing),h(!!c.readTime);const t=Tc(e,c.missing),n=Ac(c.readTime);return ac.newNoDocument(t,n)}(e,c):p()}function Dc(e,c){let t;if(c instanceof Cc)t={update:Oc(e,c.key,c.value)};else if(c instanceof Mc)t={delete:Ic(e,c.key)};else if(c instanceof bc)t={update:Oc(e,c.key,c.data),updateMask:Gc(c.fieldMask)};else{if(!(c instanceof yc))return p();t={verify:Ic(e,c.key)}}return c.fieldTransforms.length>0&&(t.updateTransforms=c.fieldTransforms.map((e=>function(e,c){const t=c.transform;if(t instanceof hc)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(t instanceof vc)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:t.elements}};if(t instanceof zc)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:t.elements}};if(t instanceof gc)return{fieldPath:c.field.canonicalString(),increment:t.q};throw p()}(0,e)))),c.precondition.isNone||(t.currentDocument=function(e,c){return void 0!==c.updateTime?{updateTime:_c(e,c.updateTime)}:void 0!==c.exists?{exists:c.exists}:p()}(e,c.precondition)),t}function Bc(e,c){const t={structuredQuery:{}},n=c.path;null!==c.collectionGroup?(t.parent=Pc(e,n),t.structuredQuery.from=[{collectionId:c.collectionGroup,allDescendants:!0}]):(t.parent=Pc(e,n.popLast()),t.structuredQuery.from=[{collectionId:n.lastSegment()}]);const a=function(e){if(0!==e.length)return qc(De.create(e,"and"))}(c.filters);a&&(t.structuredQuery.where=a);const i=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:jc(e.field),direction:Wc(e.dir)}}(e)))}(c.orderBy);i&&(t.structuredQuery.orderBy=i);const r=function(e,c){return e.useProto3Json||te(c)?c:{value:c}}(e,c.limit);return null!==r&&(t.structuredQuery.limit=r),c.startAt&&(t.structuredQuery.startAt=function(e){return{before:e.inclusive,values:e.position}}(c.startAt)),c.endAt&&(t.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(c.endAt)),t}function Wc(e){return Lc[e]}function Uc(e){return xc[e]}function $c(e){return wc[e]}function jc(e){return{fieldPath:e.canonicalString()}}function qc(e){return e instanceof Re?function(e){if("=="===e.op){if(Ie(e.value))return{unaryFilter:{field:jc(e.field),op:"IS_NAN"}};if(Ee(e.value))return{unaryFilter:{field:jc(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Ie(e.value))return{unaryFilter:{field:jc(e.field),op:"IS_NOT_NAN"}};if(Ee(e.value))return{unaryFilter:{field:jc(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:jc(e.field),op:Uc(e.op),value:e.value}}}(e):e instanceof De?function(e){const c=e.getFilters().map((e=>qc(e)));return 1===c.length?c[0]:{compositeFilter:{op:$c(e.op),filters:c}}}(e):p()}function Gc(e){const c=[];return e.fields.forEach((e=>c.push(e.canonicalString()))),{fieldPaths:c}}function Yc(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc(e){return new Sc(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kc extends class{}{constructor(e,c,t,n){super(),this.authCredentials=e,this.appCheckCredentials=c,this.connection=t,this.serializer=n,this.J=!1}Y(){if(this.J)throw new A(x,"The client has already been terminated.")}R(e,c,t){return this.Y(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([n,a])=>this.connection.R(e,c,t,n,a))).catch((e=>{throw"FirebaseError"===e.name?(e.code===y&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new A(V,e.toString())}))}g(e,c,t,n){return this.Y(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,i])=>this.connection.g(e,c,t,a,i,n))).catch((e=>{throw"FirebaseError"===e.name?(e.code===y&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new A(V,e.toString())}))}terminate(){this.J=!0}}async function Xc(e,c){const t=v(e),n=Fc(t.serializer)+"/documents",a={writes:c.map((e=>Dc(t.serializer,e)))};await t.R("Commit",n,a)}async function Jc(e,c){const t=v(e),n=Fc(t.serializer)+"/documents",a={documents:c.map((e=>Ic(t.serializer,e)))},i=await t.g("BatchGetDocuments",n,a,c.length),r=new Map;i.forEach((e=>{const c=Rc(t.serializer,e);r.set(c.key.toString(),c)}));const o=[];return c.forEach((e=>{const c=r.get(e.toString());h(!!c),o.push(c)})),o}async function Qc(e,c){const t=v(e),n=Bc(t.serializer,uc(c));return(await t.g("RunQuery",n.parent,{structuredQuery:n.structuredQuery})).filter((e=>!!e.document)).map((e=>function(e,c,t){const n=Tc(e,c.name),a=Ac(c.updateTime),i=c.createTime?Ac(c.createTime):Ke.min(),r=new nc({mapValue:{fields:c.fields}}),o=ac.newFoundDocument(n,a,i,r);return t&&o.setHasCommittedMutations(),t?o.setHasCommittedMutations():o}(t.serializer,e.document,void 0)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const et=new Map;function ct(e){if(e._terminated)throw new A(x,"The client has already been terminated.");if(!et.has(e)){u("ComponentProvider","Initializing Datastore");const c=function(e){return new se(e,fetch.bind(null))}(function(e,c,t,n){return new B(e,c,t,n.host,n.ssl,n.experimentalForceLongPolling,n.experimentalAutoDetectLongPolling,Q(n.experimentalLongPollingOptions),n.useFetchStreams)}
/**
      * @license
      * Copyright 2018 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */(e._databaseId,e.app.options.appId||"",e._persistenceKey,e._freezeSettings())),t=Zc(e._databaseId),n=function(e,c,t,n){return new Kc(e,c,t,n)}(e._authCredentials,e._appCheckCredentials,c,t);et.set(e,n)}return et.get(e)}class tt{constructor(e){var c,t;if(void 0===e.host){if(void 0!==e.ssl)throw new A(H,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(c=e.ssl)||void 0===c||c;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new A(H,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}!function(e,c,t,n){if(!0===c&&!0===n)throw new A(H,`${e} and ${t} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Q(null!==(t=e.experimentalLongPollingOptions)&&void 0!==t?t:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new A(H,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new A(H,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new A(H,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
    * @license
    * Copyright 2020 Google LLC
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *   http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(e,c){return e.timeoutSeconds===c.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class nt{constructor(e,c,t,n){this._authCredentials=e,this._appCheckCredentials=c,this._databaseId=t,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new tt({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new A(x,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new A(x,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new tt(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new I;switch(e.type){case"firstParty":return new O(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new A(H,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const c=et.get(e);c&&(u("ComponentProvider","Removing Datastore"),et.delete(e),c.terminate())}(this),Promise.resolve()}}function at(e,c){const t="object"==typeof e?e:(0,n.Mq)(),a="string"==typeof e?e:c||"(default)",i=(0,n.qX)(t,"firestore/lite").getImmediate({identifier:a});if(!i._initialized){const e=(0,r.P0)("firestore");e&&it(i,...e)}return i}function it(e,c,t,n={}){var a;const i=(e=J(e,nt))._getSettings(),s=`${c}:${t}`;if("firestore.googleapis.com"!==i.host&&i.host!==s&&d("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:s,ssl:!1})),n.mockUserToken){let c,t;if("string"==typeof n.mockUserToken)c=n.mockUserToken,t=o.MOCK_USER;else{c=(0,r.Sg)(n.mockUserToken,null===(a=e._app)||void 0===a?void 0:a.options.projectId);const i=n.mockUserToken.sub||n.mockUserToken.user_id;if(!i)throw new A(H,"mockUserToken must contain 'sub' or 'user_id' field!");t=new o(i)}e._authCredentials=new T(new E(c,t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rt{constructor(e,c,t){this.converter=c,this._query=t,this.type="query",this.firestore=e}withConverter(e){return new rt(this.firestore,e,this._query)}}class ot{constructor(e,c,t){this.converter=c,this._key=t,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new st(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ot(this.firestore,e,this._key)}}class st extends rt{constructor(e,c,t){super(e,c,function(e){return new oc(e)}(t)),this._path=t,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ot(this.firestore,null,new G(e))}withConverter(e){return new st(this.firestore,e,this._path)}}function lt(e,c,...t){if(e=(0,r.m9)(e),Y("collection","path",c),e instanceof nt){const n=$.fromString(c,...t);return K(n),new st(e,null,n)}{if(!(e instanceof ot||e instanceof st))throw new A(H,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=e._path.child($.fromString(c,...t));return K(n),new st(e.firestore,null,n)}}function ut(e,c,...t){if(e=(0,r.m9)(e),1===arguments.length&&(c=ue.newId()),Y("doc","path",c),e instanceof nt){const n=$.fromString(c,...t);return Z(n),new ot(e,null,new G(n))}{if(!(e instanceof ot||e instanceof st))throw new A(H,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=e._path.child($.fromString(c,...t));return Z(n),new ot(e.firestore,e instanceof st?e.converter:null,new G(n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ft{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ft(ve.fromBase64String(e))}catch(e){throw new A(H,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new ft(ve.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(...e){for(let c=0;c<e.length;++c)if(0===e[c].length)throw new A(H,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new q(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mt{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,c){if(!isFinite(e)||e<-90||e>90)throw new A(H,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(c)||c<-180||c>180)throw new A(H,"Longitude must be a number between -180 and 180, but was: "+c);this._lat=e,this._long=c}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return fe(this._lat,e._lat)||fe(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht=/^__.*__$/;class vt{constructor(e,c,t){this.data=e,this.fieldMask=c,this.fieldTransforms=t}toMutation(e,c){return null!==this.fieldMask?new bc(e,this.data,this.fieldMask,c,this.fieldTransforms):new Cc(e,this.data,c,this.fieldTransforms)}}class zt{constructor(e,c,t){this.data=e,this.fieldMask=c,this.fieldTransforms=t}toMutation(e,c){return new bc(e,this.data,this.fieldMask,c,this.fieldTransforms)}}function gt(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw p()}}class Vt{constructor(e,c,t,n,a,i){this.settings=e,this.databaseId=c,this.serializer=t,this.ignoreUndefinedProperties=n,void 0===a&&this.X(),this.fieldTransforms=a||[],this.fieldMask=i||[]}get path(){return this.settings.path}get tt(){return this.settings.tt}et(e){return new Vt(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}rt(e){var c;const t=null===(c=this.path)||void 0===c?void 0:c.child(e),n=this.et({path:t,nt:!1});return n.it(e),n}st(e){var c;const t=null===(c=this.path)||void 0===c?void 0:c.child(e),n=this.et({path:t,nt:!1});return n.X(),n}ot(e){return this.et({path:void 0,nt:!0})}ut(e){return It(e,this.settings.methodName,this.settings._t||!1,this.path,this.settings.ct)}contains(e){return void 0!==this.fieldMask.find((c=>e.isPrefixOf(c)))||void 0!==this.fieldTransforms.find((c=>e.isPrefixOf(c.field)))}X(){if(this.path)for(let e=0;e<this.path.length;e++)this.it(this.path.get(e))}it(e){if(0===e.length)throw this.ut("Document fields must not be empty");if(gt(this.tt)&&ht.test(e))throw this.ut('Document fields cannot begin and end with "__"')}}class Ht{constructor(e,c,t){this.databaseId=e,this.ignoreUndefinedProperties=c,this.serializer=t||Zc(e)}lt(e,c,t,n=!1){return new Vt({tt:e,methodName:c,ct:t,path:q.emptyPath(),nt:!1,_t:n},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ct(e){const c=e._freezeSettings(),t=Zc(e._databaseId);return new Ht(e._databaseId,!!c.ignoreUndefinedProperties,t)}function bt(e,c,t,n,a,i={}){const r=e.lt(i.merge||i.mergeFields?2:0,c,t,a);Nt("Data must be an object, but it was:",r,n);const o=St(n,r);let s,l;if(i.merge)s=new tc(r.fieldMask),l=r.fieldTransforms;else if(i.mergeFields){const e=[];for(const n of i.mergeFields){const a=_t(c,n,t);if(!r.contains(a))throw new A(H,`Field '${a}' is specified in your field mask but missing from your input data.`);Tt(e,a)||e.push(a)}s=new tc(e),l=r.fieldTransforms.filter((e=>s.covers(e.field)))}else s=null,l=r.fieldTransforms;return new vt(new nc(o),s,l)}class Mt extends mt{_toFieldTransform(e){if(2!==e.tt)throw 1===e.tt?e.ut(`${this._methodName}() can only appear at the top level of your update data`):e.ut(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Mt}}function yt(e,c,t,n){const a=e.lt(1,c,t);Nt("Data must be an object, but it was:",a,n);const i=[],o=nc.empty();pe(n,((e,n)=>{const s=Et(c,e,t);n=(0,r.m9)(n);const l=a.st(s);if(n instanceof Mt)i.push(s);else{const e=wt(n,l);null!=e&&(i.push(s),o.set(s,e))}}));const s=new tc(i);return new zt(o,s,a.fieldTransforms)}function Lt(e,c,t,n,a,i){const o=e.lt(1,c,t),s=[_t(c,n,t)],l=[a];if(i.length%2!=0)throw new A(H,`Function ${c}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let r=0;r<i.length;r+=2)s.push(_t(c,i[r])),l.push(i[r+1]);const u=[],f=nc.empty();for(let m=s.length-1;m>=0;--m)if(!Tt(u,s[m])){const e=s[m];let c=l[m];c=(0,r.m9)(c);const t=o.st(e);if(c instanceof Mt)u.push(e);else{const n=wt(c,t);null!=n&&(u.push(e),f.set(e,n))}}const d=new tc(u);return new zt(f,d,o.fieldTransforms)}function xt(e,c,t,n=!1){return wt(t,e.lt(n?4:3,c))}function wt(e,c){if(kt(e=(0,r.m9)(e)))return Nt("Unsupported field value:",c,e),St(e,c);if(e instanceof mt)return function(e,c){if(!gt(c.tt))throw c.ut(`${e._methodName}() can only be used with update() and set()`);if(!c.path)throw c.ut(`${e._methodName}() is not currently supported inside arrays`);const t=e._toFieldTransform(c);t&&c.fieldTransforms.push(t)}(e,c),null;if(void 0===e&&c.ignoreUndefinedProperties)return null;if(c.path&&c.fieldMask.push(c.path),e instanceof Array){if(c.settings.nt&&4!==c.tt)throw c.ut("Nested arrays are not supported");return function(e,c){const t=[];let n=0;for(const a of e){let e=wt(a,c.ot(n));null==e&&(e={nullValue:"NULL_VALUE"}),t.push(e),n++}return{arrayValue:{values:t}}}(e,c)}return function(e,c){if(null===(e=(0,r.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return mc(c.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const t=Ce.fromDate(e);return{timestampValue:kc(c.serializer,t)}}if(e instanceof Ce){const t=new Ce(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:kc(c.serializer,t)}}if(e instanceof pt)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof ft)return{bytesValue:Nc(c.serializer,e._byteString)};if(e instanceof ot){const t=c.databaseId,n=e.firestore._databaseId;if(!n.isEqual(t))throw c.ut(`Document reference is for database ${n.projectId}/${n.database} but should be for database ${t.projectId}/${t.database}`);return{referenceValue:Ec(e.firestore._databaseId||c.databaseId,e._key.path)}}throw c.ut(`Unsupported field value: ${X(e)}`)}(e,c)}function St(e,c){const t={};return function(e){for(const c in e)if(Object.prototype.hasOwnProperty.call(e,c))return!1;return!0}(e)?c.path&&c.path.length>0&&c.fieldMask.push(c.path):pe(e,((e,n)=>{const a=wt(n,c.rt(e));null!=a&&(t[e]=a)})),{mapValue:{fields:t}}}function kt(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Ce||e instanceof pt||e instanceof ft||e instanceof ot||e instanceof mt)}function Nt(e,c,t){if(!kt(t)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(t)){const n=X(t);throw"an object"===n?c.ut(e+" a custom object"):c.ut(e+" "+n)}}function _t(e,c,t){if((c=(0,r.m9)(c))instanceof dt)return c._internalPath;if("string"==typeof c)return Et(e,c);throw It("Field path arguments must be of type string or ",e,!1,void 0,t)}const At=new RegExp("[~\\*/\\[\\]]");function Et(e,c,t){if(c.search(At)>=0)throw It(`Invalid field path (${c}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,t);try{return new dt(...c.split("."))._internalPath}catch(n){throw It(`Invalid field path (${c}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,t)}}function It(e,c,t,n,a){const i=n&&!n.isEmpty(),r=void 0!==a;let o=`Function ${c}() called with invalid data`;t&&(o+=" (via `toFirestore()`)"),o+=". ";let s="";return(i||r)&&(s+=" (found",i&&(s+=` in field ${n}`),r&&(s+=` in document ${a}`),s+=")"),new A(H,o+e+s)}function Tt(e,c){return e.some((e=>e.isEqual(c)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e,c,t,n,a){this._firestore=e,this._userDataWriter=c,this._key=t,this._document=n,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Ft(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const c=this._document.data.field(Rt("DocumentSnapshot.get",e));if(null!==c)return this._userDataWriter.convertValue(c)}}}class Ft extends Pt{data(){return super.data()}}class Ot{constructor(e,c){this._docs=c,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return 0===this.docs.length}forEach(e,c){this._docs.forEach(e,c)}}function Rt(e,c){return"string"==typeof c?Et(e,c):c instanceof dt?c._internalPath:c._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{}class Bt extends Dt{}function Wt(e,c,...t){let n=[];c instanceof Dt&&n.push(c),n=n.concat(t),function(e){const c=e.filter((e=>e instanceof jt)).length,t=e.filter((e=>e instanceof Ut)).length;if(c>1||c>0&&t>0)throw new A(H,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */(n);for(const a of n)e=a._apply(e);return e}class Ut extends Bt{constructor(e,c,t){super(),this._field=e,this._op=c,this._value=t,this.type="where"}static _create(e,c,t){return new Ut(e,c,t)}_apply(e){const c=this._parse(e);return Yt(e._query,c),new rt(e.firestore,e.converter,dc(e._query,c))}_parse(e){const c=Ct(e.firestore),t=function(e,c,t,n,a,i,r){let o;if(a.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new A(H,`Invalid Query. You can't perform '${i}' queries on documentId().`);if("in"===i||"not-in"===i){Gt(r,i);const c=[];for(const t of r)c.push(qt(n,e,t));o={arrayValue:{values:c}}}else o=qt(n,e,r)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||Gt(r,i),o=xt(t,c,r,"in"===i||"not-in"===i);return Re.create(a,i,o)}(e._query,"where",c,e.firestore._databaseId,this._field,this._op,this._value);return t}}function $t(e,c,t){const n=c,a=Rt("where",e);return Ut._create(a,n,t)}class jt extends Dt{constructor(e,c){super(),this.type=e,this._queryConstraints=c}static _create(e,c){return new jt(e,c)}_parse(e){const c=this._queryConstraints.map((c=>c._parse(e))).filter((e=>e.getFilters().length>0));return 1===c.length?c[0]:De.create(c,this._getOperator())}_apply(e){const c=this._parse(e);return 0===c.getFilters().length?e:(function(e,c){let t=e;const n=c.getFlattenedFilters();for(const a of n)Yt(t,a),t=dc(t,a)}(e._query,c),new rt(e.firestore,e.converter,dc(e._query,c)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function qt(e,c,t){if("string"==typeof(t=(0,r.m9)(t))){if(""===t)throw new A(H,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!sc(c)&&-1!==t.indexOf("/"))throw new A(H,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=c.path.child($.fromString(t));if(!G.isDocumentKey(n))throw new A(H,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return _e(e,new G(n))}if(t instanceof ot)return _e(e,t._key);throw new A(H,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${X(t)}.`)}function Gt(e,c){if(!Array.isArray(e)||0===e.length)throw new A(H,`Invalid Query. A non-empty array is required for '${c.toString()}' filters.`)}function Yt(e,c){const t=function(e,c){for(const t of e)for(const e of t.getFlattenedFilters())if(c.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(c.op));if(null!==t)throw t===c.op?new A(H,`Invalid query. You cannot use more than one '${c.op.toString()}' filter.`):new A(H,`Invalid query. You cannot use '${c.op.toString()}' filters with '${t.toString()}' filters.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zt(e,c,t){let n;return n=e?t&&(t.merge||t.mergeFields)?e.toFirestore(c,t):e.toFirestore(c):c,n}class Kt extends class{convertValue(e,c="none"){switch(xe(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,c);case 5:return e.stringValue;case 6:return this.convertBytes(He(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,c);case 10:return this.convertObject(e.mapValue,c);default:throw p()}}convertObject(e,c){return this.convertObjectMap(e.fields,c)}convertObjectMap(e,c="none"){const t={};return pe(e,((e,n)=>{t[e]=this.convertValue(n,c)})),t}convertGeoPoint(e){return new pt(Ve(e.latitude),Ve(e.longitude))}convertArray(e,c){return(e.values||[]).map((e=>this.convertValue(e,c)))}convertServerTimestamp(e,c){switch(c){case"previous":const t=Me(e);return null==t?null:this.convertValue(t,c);case"estimate":return this.convertTimestamp(ye(e));default:return null}}convertTimestamp(e){const c=ge(e);return new Ce(c.seconds,c.nanos)}convertDocumentKey(e,c){const t=$.fromString(e);h(Yc(t));const n=new W(t.get(1),t.get(3)),a=new G(t.popFirst(5));return n.isEqual(c)||f(`Document ${a} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${c.projectId}/${c.database}) instead.`),a}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new ft(e)}convertReference(e){const c=this.convertDocumentKey(e,this.firestore._databaseId);return new ot(this.firestore,null,c)}}function Xt(e){const c=ct((e=J(e,ot)).firestore),t=new Kt(e.firestore);return Jc(c,[e._key]).then((c=>{h(1===c.length);const n=c[0];return new Pt(e.firestore,t,e._key,n.isFoundDocument()?n:null,e.converter)}))}function Jt(e){(function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new A(k,"limitToLast() queries require specifying at least one orderBy() clause")})((e=J(e,rt))._query);const c=ct(e.firestore),t=new Kt(e.firestore);return Qc(c,e._query).then((c=>{const n=c.map((c=>new Ft(e.firestore,t,c.key,c,e.converter)));return"L"===e._query.limitType&&n.reverse(),new Ot(e,n)}))}function Qt(e,c,t,...n){const a=Ct((e=J(e,ot)).firestore);let i;return i="string"==typeof(c=(0,r.m9)(c))||c instanceof dt?Lt(a,"updateDoc",e._key,c,t,n):yt(a,"updateDoc",e._key,c),Xc(ct(e.firestore),[i.toMutation(e._key,Vc.exists(!0))])}function en(e){return Xc(ct((e=J(e,ot)).firestore),[new Mc(e._key,Vc.none())])}function cn(e,c){const t=ut(e=J(e,st)),n=Zt(e.converter,c),a=bt(Ct(e.firestore),"addDoc",t._key,n,null!==t.converter,{});return Xc(ct(e.firestore),[a.toMutation(t._key,Vc.exists(!1))]).then((()=>t))}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(){!function(e){s=e}(`${n.Jn}_lite`),(0,n.Xd)(new a.wA("firestore/lite",((e,{instanceIdentifier:c,options:t})=>{const n=e.getProvider("app").getImmediate(),a=new nt(new P(e.getProvider("auth-internal")),new D(e.getProvider("app-check-internal")),function(e,c){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new A(H,'"projectId" not provided in firebase.initializeApp.');return new W(e.options.projectId,c)}
/**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */(n,c),n);return t&&a._setSettings(t),a}),"PUBLIC").setMultipleInstances(!0)),(0,n.KN)("firestore-lite","4.4.0",""),(0,n.KN)("firestore-lite","4.4.0","esm2017")}()},7853:function(e,c,t){t.d(c,{o:function(){return en}});t(560);
/*!
  * shared v9.8.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
const n="undefined"!==typeof window;const a=(e,c=!1)=>c?Symbol.for(e):Symbol(e),i=(e,c,t)=>r({l:e,k:c,s:t}),r=e=>JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),o=e=>"number"===typeof e&&isFinite(e),s=e=>"[object Date]"===y(e),l=e=>"[object RegExp]"===y(e),u=e=>L(e)&&0===Object.keys(e).length,f=Object.assign;let d;const m=()=>d||(d="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof global?global:{});function p(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const h=Object.prototype.hasOwnProperty;function v(e,c){return h.call(e,c)}const z=Array.isArray,g=e=>"function"===typeof e,V=e=>"string"===typeof e,H=e=>"boolean"===typeof e,C=e=>null!==e&&"object"===typeof e,b=e=>C(e)&&g(e.then)&&g(e.catch),M=Object.prototype.toString,y=e=>M.call(e),L=e=>{if(!C(e))return!1;const c=Object.getPrototypeOf(e);return null===c||c.constructor===Object},x=e=>null==e?"":z(e)||L(e)&&e.toString===M?JSON.stringify(e,null,2):String(e);function w(e,c=""){return e.reduce(((e,t,n)=>0===n?e+t:e+c+t),"")}function S(e){let c=e;return()=>++c}function k(e,c){"undefined"!==typeof console&&(console.warn("[intlify] "+e),c&&console.warn(c.stack))}const N=e=>!C(e)||z(e);function _(e,c){if(N(e)||N(c))throw new Error("Invalid value");for(const t in e)v(e,t)&&(N(e[t])||N(c[t])?c[t]=e[t]:_(e[t],c[t]))}function A(e,c,t){return{line:e,column:c,offset:t}}function E(e,c,t){const n={start:e,end:c};return null!=t&&(n.source=t),n}const I=/\{([0-9a-zA-Z]+)\}/g;function T(e,...c){return 1===c.length&&O(c[0])&&(c=c[0]),c&&c.hasOwnProperty||(c={}),e.replace(I,((e,t)=>c.hasOwnProperty(t)?c[t]:""))}const P=Object.assign,F=e=>"string"===typeof e,O=e=>null!==e&&"object"===typeof e;function R(e,c=""){return e.reduce(((e,t,n)=>0===n?e+t:e+c+t),"")}const D={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,UNHANDLED_CODEGEN_NODE_TYPE:15,UNHANDLED_MINIFIER_NODE_TYPE:16,__EXTEND_POINT__:17},B={[D.EXPECTED_TOKEN]:"Expected token: '{0}'",[D.INVALID_TOKEN_IN_PLACEHOLDER]:"Invalid token in placeholder: '{0}'",[D.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]:"Unterminated single quote in placeholder",[D.UNKNOWN_ESCAPE_SEQUENCE]:"Unknown escape sequence: \\{0}",[D.INVALID_UNICODE_ESCAPE_SEQUENCE]:"Invalid unicode escape sequence: {0}",[D.UNBALANCED_CLOSING_BRACE]:"Unbalanced closing brace",[D.UNTERMINATED_CLOSING_BRACE]:"Unterminated closing brace",[D.EMPTY_PLACEHOLDER]:"Empty placeholder",[D.NOT_ALLOW_NEST_PLACEHOLDER]:"Not allowed nest placeholder",[D.INVALID_LINKED_FORMAT]:"Invalid linked format",[D.MUST_HAVE_MESSAGES_IN_PLURAL]:"Plural must have messages",[D.UNEXPECTED_EMPTY_LINKED_MODIFIER]:"Unexpected empty linked modifier",[D.UNEXPECTED_EMPTY_LINKED_KEY]:"Unexpected empty linked key",[D.UNEXPECTED_LEXICAL_ANALYSIS]:"Unexpected lexical analysis in token: '{0}'",[D.UNHANDLED_CODEGEN_NODE_TYPE]:"unhandled codegen node type: '{0}'",[D.UNHANDLED_MINIFIER_NODE_TYPE]:"unhandled mimifier node type: '{0}'"};function W(e,c,t={}){const{domain:n,messages:a,args:i}=t,r=T((a||B)[e]||"",...i||[]),o=new SyntaxError(String(r));return o.code=e,c&&(o.location=c),o.domain=n,o}function U(e){throw e}const $=" ",j="\r",q="\n",G=String.fromCharCode(8232),Y=String.fromCharCode(8233);function Z(e){const c=e;let t=0,n=1,a=1,i=0;const r=e=>c[e]===j&&c[e+1]===q,o=e=>c[e]===q,s=e=>c[e]===Y,l=e=>c[e]===G,u=e=>r(e)||o(e)||s(e)||l(e),f=()=>t,d=()=>n,m=()=>a,p=()=>i,h=e=>r(e)||s(e)||l(e)?q:c[e],v=()=>h(t),z=()=>h(t+i);function g(){return i=0,u(t)&&(n++,a=0),r(t)&&t++,t++,a++,c[t]}function V(){return r(t+i)&&i++,i++,c[t+i]}function H(){t=0,n=1,a=1,i=0}function C(e=0){i=e}function b(){const e=t+i;while(e!==t)g();i=0}return{index:f,line:d,column:m,peekOffset:p,charAt:h,currentChar:v,currentPeek:z,next:g,peek:V,reset:H,resetPeek:C,skipToPeek:b}}const K=void 0,X=".",J="'",Q="tokenizer";function ee(e,c={}){const t=!1!==c.location,n=Z(e),a=()=>n.index(),i=()=>A(n.line(),n.column(),n.index()),r=i(),o=a(),s={currentType:14,offset:o,startLoc:r,endLoc:r,lastType:14,lastOffset:o,lastStartLoc:r,lastEndLoc:r,braceNest:0,inLinked:!1,text:""},l=()=>s,{onError:u}=c;function f(e,c,n,...a){const i=l();if(c.column+=n,c.offset+=n,u){const n=t?E(i.startLoc,c):null,r=W(e,n,{domain:Q,args:a});u(r)}}function d(e,c,n){e.endLoc=i(),e.currentType=c;const a={type:c};return t&&(a.loc=E(e.startLoc,e.endLoc)),null!=n&&(a.value=n),a}const m=e=>d(e,14);function p(e,c){return e.currentChar()===c?(e.next(),c):(f(D.EXPECTED_TOKEN,i(),0,c),"")}function h(e){let c="";while(e.currentPeek()===$||e.currentPeek()===q)c+=e.currentPeek(),e.peek();return c}function v(e){const c=h(e);return e.skipToPeek(),c}function z(e){if(e===K)return!1;const c=e.charCodeAt(0);return c>=97&&c<=122||c>=65&&c<=90||95===c}function g(e){if(e===K)return!1;const c=e.charCodeAt(0);return c>=48&&c<=57}function V(e,c){const{currentType:t}=c;if(2!==t)return!1;h(e);const n=z(e.currentPeek());return e.resetPeek(),n}function H(e,c){const{currentType:t}=c;if(2!==t)return!1;h(e);const n="-"===e.currentPeek()?e.peek():e.currentPeek(),a=g(n);return e.resetPeek(),a}function C(e,c){const{currentType:t}=c;if(2!==t)return!1;h(e);const n=e.currentPeek()===J;return e.resetPeek(),n}function b(e,c){const{currentType:t}=c;if(8!==t)return!1;h(e);const n="."===e.currentPeek();return e.resetPeek(),n}function M(e,c){const{currentType:t}=c;if(9!==t)return!1;h(e);const n=z(e.currentPeek());return e.resetPeek(),n}function y(e,c){const{currentType:t}=c;if(8!==t&&12!==t)return!1;h(e);const n=":"===e.currentPeek();return e.resetPeek(),n}function L(e,c){const{currentType:t}=c;if(10!==t)return!1;const n=()=>{const c=e.currentPeek();return"{"===c?z(e.peek()):!("@"===c||"%"===c||"|"===c||":"===c||"."===c||c===$||!c)&&(c===q?(e.peek(),n()):z(c))},a=n();return e.resetPeek(),a}function x(e){h(e);const c="|"===e.currentPeek();return e.resetPeek(),c}function w(e){const c=h(e),t="%"===e.currentPeek()&&"{"===e.peek();return e.resetPeek(),{isModulo:t,hasSpace:c.length>0}}function S(e,c=!0){const t=(c=!1,n="",a=!1)=>{const i=e.currentPeek();return"{"===i?"%"!==n&&c:"@"!==i&&i?"%"===i?(e.peek(),t(c,"%",!0)):"|"===i?!("%"!==n&&!a)||!(n===$||n===q):i===$?(e.peek(),t(!0,$,a)):i!==q||(e.peek(),t(!0,q,a)):"%"===n||c},n=t();return c&&e.resetPeek(),n}function k(e,c){const t=e.currentChar();return t===K?K:c(t)?(e.next(),t):null}function N(e){const c=e=>{const c=e.charCodeAt(0);return c>=97&&c<=122||c>=65&&c<=90||c>=48&&c<=57||95===c||36===c};return k(e,c)}function _(e){const c=e=>{const c=e.charCodeAt(0);return c>=48&&c<=57};return k(e,c)}function I(e){const c=e=>{const c=e.charCodeAt(0);return c>=48&&c<=57||c>=65&&c<=70||c>=97&&c<=102};return k(e,c)}function T(e){let c="",t="";while(c=_(e))t+=c;return t}function P(e){v(e);const c=e.currentChar();return"%"!==c&&f(D.EXPECTED_TOKEN,i(),0,c),e.next(),"%"}function F(e){let c="";while(1){const t=e.currentChar();if("{"===t||"}"===t||"@"===t||"|"===t||!t)break;if("%"===t){if(!S(e))break;c+=t,e.next()}else if(t===$||t===q)if(S(e))c+=t,e.next();else{if(x(e))break;c+=t,e.next()}else c+=t,e.next()}return c}function O(e){v(e);let c="",t="";while(c=N(e))t+=c;return e.currentChar()===K&&f(D.UNTERMINATED_CLOSING_BRACE,i(),0),t}function R(e){v(e);let c="";return"-"===e.currentChar()?(e.next(),c+=`-${T(e)}`):c+=T(e),e.currentChar()===K&&f(D.UNTERMINATED_CLOSING_BRACE,i(),0),c}function B(e){v(e),p(e,"'");let c="",t="";const n=e=>e!==J&&e!==q;while(c=k(e,n))t+="\\"===c?U(e):c;const a=e.currentChar();return a===q||a===K?(f(D.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,i(),0),a===q&&(e.next(),p(e,"'")),t):(p(e,"'"),t)}function U(e){const c=e.currentChar();switch(c){case"\\":case"'":return e.next(),`\\${c}`;case"u":return j(e,c,4);case"U":return j(e,c,6);default:return f(D.UNKNOWN_ESCAPE_SEQUENCE,i(),0,c),""}}function j(e,c,t){p(e,c);let n="";for(let a=0;a<t;a++){const t=I(e);if(!t){f(D.INVALID_UNICODE_ESCAPE_SEQUENCE,i(),0,`\\${c}${n}${e.currentChar()}`);break}n+=t}return`\\${c}${n}`}function G(e){v(e);let c="",t="";const n=e=>"{"!==e&&"}"!==e&&e!==$&&e!==q;while(c=k(e,n))t+=c;return t}function Y(e){let c="",t="";while(c=N(e))t+=c;return t}function ee(e){const c=(t=!1,n)=>{const a=e.currentChar();return"{"!==a&&"%"!==a&&"@"!==a&&"|"!==a&&"("!==a&&")"!==a&&a?a===$?n:a===q||a===X?(n+=a,e.next(),c(t,n)):(n+=a,e.next(),c(!0,n)):n};return c(!1,"")}function ce(e){v(e);const c=p(e,"|");return v(e),c}function te(e,c){let t=null;const n=e.currentChar();switch(n){case"{":return c.braceNest>=1&&f(D.NOT_ALLOW_NEST_PLACEHOLDER,i(),0),e.next(),t=d(c,2,"{"),v(e),c.braceNest++,t;case"}":return c.braceNest>0&&2===c.currentType&&f(D.EMPTY_PLACEHOLDER,i(),0),e.next(),t=d(c,3,"}"),c.braceNest--,c.braceNest>0&&v(e),c.inLinked&&0===c.braceNest&&(c.inLinked=!1),t;case"@":return c.braceNest>0&&f(D.UNTERMINATED_CLOSING_BRACE,i(),0),t=ne(e,c)||m(c),c.braceNest=0,t;default:let n=!0,a=!0,r=!0;if(x(e))return c.braceNest>0&&f(D.UNTERMINATED_CLOSING_BRACE,i(),0),t=d(c,1,ce(e)),c.braceNest=0,c.inLinked=!1,t;if(c.braceNest>0&&(5===c.currentType||6===c.currentType||7===c.currentType))return f(D.UNTERMINATED_CLOSING_BRACE,i(),0),c.braceNest=0,ae(e,c);if(n=V(e,c))return t=d(c,5,O(e)),v(e),t;if(a=H(e,c))return t=d(c,6,R(e)),v(e),t;if(r=C(e,c))return t=d(c,7,B(e)),v(e),t;if(!n&&!a&&!r)return t=d(c,13,G(e)),f(D.INVALID_TOKEN_IN_PLACEHOLDER,i(),0,t.value),v(e),t;break}return t}function ne(e,c){const{currentType:t}=c;let n=null;const a=e.currentChar();switch(8!==t&&9!==t&&12!==t&&10!==t||a!==q&&a!==$||f(D.INVALID_LINKED_FORMAT,i(),0),a){case"@":return e.next(),n=d(c,8,"@"),c.inLinked=!0,n;case".":return v(e),e.next(),d(c,9,".");case":":return v(e),e.next(),d(c,10,":");default:return x(e)?(n=d(c,1,ce(e)),c.braceNest=0,c.inLinked=!1,n):b(e,c)||y(e,c)?(v(e),ne(e,c)):M(e,c)?(v(e),d(c,12,Y(e))):L(e,c)?(v(e),"{"===a?te(e,c)||n:d(c,11,ee(e))):(8===t&&f(D.INVALID_LINKED_FORMAT,i(),0),c.braceNest=0,c.inLinked=!1,ae(e,c))}}function ae(e,c){let t={type:14};if(c.braceNest>0)return te(e,c)||m(c);if(c.inLinked)return ne(e,c)||m(c);const n=e.currentChar();switch(n){case"{":return te(e,c)||m(c);case"}":return f(D.UNBALANCED_CLOSING_BRACE,i(),0),e.next(),d(c,3,"}");case"@":return ne(e,c)||m(c);default:if(x(e))return t=d(c,1,ce(e)),c.braceNest=0,c.inLinked=!1,t;const{isModulo:n,hasSpace:a}=w(e);if(n)return a?d(c,0,F(e)):d(c,4,P(e));if(S(e))return d(c,0,F(e));break}return t}function ie(){const{currentType:e,offset:c,startLoc:t,endLoc:r}=s;return s.lastType=e,s.lastOffset=c,s.lastStartLoc=t,s.lastEndLoc=r,s.offset=a(),s.startLoc=i(),n.currentChar()===K?d(s,14):ae(n,s)}return{nextToken:ie,currentOffset:a,currentPosition:i,context:l}}const ce="parser",te=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function ne(e,c,t){switch(e){case"\\\\":return"\\";case"\\'":return"'";default:{const e=parseInt(c||t,16);return e<=55295||e>=57344?String.fromCodePoint(e):"�"}}}function ae(e={}){const c=!1!==e.location,{onError:t}=e;function n(e,n,a,i,...r){const o=e.currentPosition();if(o.offset+=i,o.column+=i,t){const e=c?E(a,o):null,i=W(n,e,{domain:ce,args:r});t(i)}}function a(e,t,n){const a={type:e};return c&&(a.start=t,a.end=t,a.loc={start:n,end:n}),a}function i(e,t,n,a){a&&(e.type=a),c&&(e.end=t,e.loc&&(e.loc.end=n))}function r(e,c){const t=e.context(),n=a(3,t.offset,t.startLoc);return n.value=c,i(n,e.currentOffset(),e.currentPosition()),n}function o(e,c){const t=e.context(),{lastOffset:n,lastStartLoc:r}=t,o=a(5,n,r);return o.index=parseInt(c,10),e.nextToken(),i(o,e.currentOffset(),e.currentPosition()),o}function s(e,c){const t=e.context(),{lastOffset:n,lastStartLoc:r}=t,o=a(4,n,r);return o.key=c,e.nextToken(),i(o,e.currentOffset(),e.currentPosition()),o}function l(e,c){const t=e.context(),{lastOffset:n,lastStartLoc:r}=t,o=a(9,n,r);return o.value=c.replace(te,ne),e.nextToken(),i(o,e.currentOffset(),e.currentPosition()),o}function u(e){const c=e.nextToken(),t=e.context(),{lastOffset:r,lastStartLoc:o}=t,s=a(8,r,o);return 12!==c.type?(n(e,D.UNEXPECTED_EMPTY_LINKED_MODIFIER,t.lastStartLoc,0),s.value="",i(s,r,o),{nextConsumeToken:c,node:s}):(null==c.value&&n(e,D.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,ie(c)),s.value=c.value||"",i(s,e.currentOffset(),e.currentPosition()),{node:s})}function f(e,c){const t=e.context(),n=a(7,t.offset,t.startLoc);return n.value=c,i(n,e.currentOffset(),e.currentPosition()),n}function d(e){const c=e.context(),t=a(6,c.offset,c.startLoc);let r=e.nextToken();if(9===r.type){const c=u(e);t.modifier=c.node,r=c.nextConsumeToken||e.nextToken()}switch(10!==r.type&&n(e,D.UNEXPECTED_LEXICAL_ANALYSIS,c.lastStartLoc,0,ie(r)),r=e.nextToken(),2===r.type&&(r=e.nextToken()),r.type){case 11:null==r.value&&n(e,D.UNEXPECTED_LEXICAL_ANALYSIS,c.lastStartLoc,0,ie(r)),t.key=f(e,r.value||"");break;case 5:null==r.value&&n(e,D.UNEXPECTED_LEXICAL_ANALYSIS,c.lastStartLoc,0,ie(r)),t.key=s(e,r.value||"");break;case 6:null==r.value&&n(e,D.UNEXPECTED_LEXICAL_ANALYSIS,c.lastStartLoc,0,ie(r)),t.key=o(e,r.value||"");break;case 7:null==r.value&&n(e,D.UNEXPECTED_LEXICAL_ANALYSIS,c.lastStartLoc,0,ie(r)),t.key=l(e,r.value||"");break;default:n(e,D.UNEXPECTED_EMPTY_LINKED_KEY,c.lastStartLoc,0);const u=e.context(),d=a(7,u.offset,u.startLoc);return d.value="",i(d,u.offset,u.startLoc),t.key=d,i(t,u.offset,u.startLoc),{nextConsumeToken:r,node:t}}return i(t,e.currentOffset(),e.currentPosition()),{node:t}}function m(e){const c=e.context(),t=1===c.currentType?e.currentOffset():c.offset,u=1===c.currentType?c.endLoc:c.startLoc,f=a(2,t,u);f.items=[];let m=null;do{const t=m||e.nextToken();switch(m=null,t.type){case 0:null==t.value&&n(e,D.UNEXPECTED_LEXICAL_ANALYSIS,c.lastStartLoc,0,ie(t)),f.items.push(r(e,t.value||""));break;case 6:null==t.value&&n(e,D.UNEXPECTED_LEXICAL_ANALYSIS,c.lastStartLoc,0,ie(t)),f.items.push(o(e,t.value||""));break;case 5:null==t.value&&n(e,D.UNEXPECTED_LEXICAL_ANALYSIS,c.lastStartLoc,0,ie(t)),f.items.push(s(e,t.value||""));break;case 7:null==t.value&&n(e,D.UNEXPECTED_LEXICAL_ANALYSIS,c.lastStartLoc,0,ie(t)),f.items.push(l(e,t.value||""));break;case 8:const a=d(e);f.items.push(a.node),m=a.nextConsumeToken||null;break}}while(14!==c.currentType&&1!==c.currentType);const p=1===c.currentType?c.lastOffset:e.currentOffset(),h=1===c.currentType?c.lastEndLoc:e.currentPosition();return i(f,p,h),f}function p(e,c,t,r){const o=e.context();let s=0===r.items.length;const l=a(1,c,t);l.cases=[],l.cases.push(r);do{const c=m(e);s||(s=0===c.items.length),l.cases.push(c)}while(14!==o.currentType);return s&&n(e,D.MUST_HAVE_MESSAGES_IN_PLURAL,t,0),i(l,e.currentOffset(),e.currentPosition()),l}function h(e){const c=e.context(),{offset:t,startLoc:n}=c,a=m(e);return 14===c.currentType?a:p(e,t,n,a)}function v(t){const r=ee(t,P({},e)),o=r.context(),s=a(0,o.offset,o.startLoc);return c&&s.loc&&(s.loc.source=t),s.body=h(r),e.onCacheKey&&(s.cacheKey=e.onCacheKey(t)),14!==o.currentType&&n(r,D.UNEXPECTED_LEXICAL_ANALYSIS,o.lastStartLoc,0,t[o.offset]||""),i(s,r.currentOffset(),r.currentPosition()),s}return{parse:v}}function ie(e){if(14===e.type)return"EOF";const c=(e.value||"").replace(/\r?\n/gu,"\\n");return c.length>10?c.slice(0,9)+"…":c}function re(e,c={}){const t={ast:e,helpers:new Set},n=()=>t,a=e=>(t.helpers.add(e),e);return{context:n,helper:a}}function oe(e,c){for(let t=0;t<e.length;t++)se(e[t],c)}function se(e,c){switch(e.type){case 1:oe(e.cases,c),c.helper("plural");break;case 2:oe(e.items,c);break;case 6:const t=e;se(t.key,c),c.helper("linked"),c.helper("type");break;case 5:c.helper("interpolate"),c.helper("list");break;case 4:c.helper("interpolate"),c.helper("named");break}}function le(e,c={}){const t=re(e);t.helper("normalize"),e.body&&se(e.body,t);const n=t.context();e.helpers=Array.from(n.helpers)}function ue(e){const c=e.body;return 2===c.type?fe(c):c.cases.forEach((e=>fe(e))),e}function fe(e){if(1===e.items.length){const c=e.items[0];3!==c.type&&9!==c.type||(e.static=c.value,delete c.value)}else{const c=[];for(let t=0;t<e.items.length;t++){const n=e.items[t];if(3!==n.type&&9!==n.type)break;if(null==n.value)break;c.push(n.value)}if(c.length===e.items.length){e.static=R(c);for(let c=0;c<e.items.length;c++){const t=e.items[c];3!==t.type&&9!==t.type||delete t.value}}}}const de="minifier";function me(e){switch(e.t=e.type,e.type){case 0:const c=e;me(c.body),c.b=c.body,delete c.body;break;case 1:const t=e,n=t.cases;for(let e=0;e<n.length;e++)me(n[e]);t.c=n,delete t.cases;break;case 2:const a=e,i=a.items;for(let e=0;e<i.length;e++)me(i[e]);a.i=i,delete a.items,a.static&&(a.s=a.static,delete a.static);break;case 3:case 9:case 8:case 7:const r=e;r.value&&(r.v=r.value,delete r.value);break;case 6:const o=e;me(o.key),o.k=o.key,delete o.key,o.modifier&&(me(o.modifier),o.m=o.modifier,delete o.modifier);break;case 5:const s=e;s.i=s.index,delete s.index;break;case 4:const l=e;l.k=l.key,delete l.key;break;default:throw W(D.UNHANDLED_MINIFIER_NODE_TYPE,null,{domain:de,args:[e.type]})}delete e.type}const pe="parser";function he(e,c){const{sourceMap:t,filename:n,breakLineCode:a,needIndent:i}=c,r=!1!==c.location,o={filename:n,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:a,needIndent:i,indentLevel:0};r&&e.loc&&(o.source=e.loc.source);const s=()=>o;function l(e,c){o.code+=e}function u(e,c=!0){const t=c?a:"";l(i?t+"  ".repeat(e):t)}function f(e=!0){const c=++o.indentLevel;e&&u(c)}function d(e=!0){const c=--o.indentLevel;e&&u(c)}function m(){u(o.indentLevel)}const p=e=>`_${e}`,h=()=>o.needIndent;return{context:s,push:l,indent:f,deindent:d,newline:m,helper:p,needIndent:h}}function ve(e,c){const{helper:t}=e;e.push(`${t("linked")}(`),He(e,c.key),c.modifier?(e.push(", "),He(e,c.modifier),e.push(", _type")):e.push(", undefined, _type"),e.push(")")}function ze(e,c){const{helper:t,needIndent:n}=e;e.push(`${t("normalize")}([`),e.indent(n());const a=c.items.length;for(let i=0;i<a;i++){if(He(e,c.items[i]),i===a-1)break;e.push(", ")}e.deindent(n()),e.push("])")}function ge(e,c){const{helper:t,needIndent:n}=e;if(c.cases.length>1){e.push(`${t("plural")}([`),e.indent(n());const a=c.cases.length;for(let t=0;t<a;t++){if(He(e,c.cases[t]),t===a-1)break;e.push(", ")}e.deindent(n()),e.push("])")}}function Ve(e,c){c.body?He(e,c.body):e.push("null")}function He(e,c){const{helper:t}=e;switch(c.type){case 0:Ve(e,c);break;case 1:ge(e,c);break;case 2:ze(e,c);break;case 6:ve(e,c);break;case 8:e.push(JSON.stringify(c.value),c);break;case 7:e.push(JSON.stringify(c.value),c);break;case 5:e.push(`${t("interpolate")}(${t("list")}(${c.index}))`,c);break;case 4:e.push(`${t("interpolate")}(${t("named")}(${JSON.stringify(c.key)}))`,c);break;case 9:e.push(JSON.stringify(c.value),c);break;case 3:e.push(JSON.stringify(c.value),c);break;default:throw W(D.UNHANDLED_CODEGEN_NODE_TYPE,null,{domain:pe,args:[c.type]})}}const Ce=(e,c={})=>{const t=F(c.mode)?c.mode:"normal",n=F(c.filename)?c.filename:"message.intl",a=!!c.sourceMap,i=null!=c.breakLineCode?c.breakLineCode:"arrow"===t?";":"\n",r=c.needIndent?c.needIndent:"arrow"!==t,o=e.helpers||[],s=he(e,{mode:t,filename:n,sourceMap:a,breakLineCode:i,needIndent:r});s.push("normal"===t?"function __msg__ (ctx) {":"(ctx) => {"),s.indent(r),o.length>0&&(s.push(`const { ${R(o.map((e=>`${e}: _${e}`)),", ")} } = ctx`),s.newline()),s.push("return "),He(s,e),s.deindent(r),s.push("}"),delete e.helpers;const{code:l,map:u}=s.context();return{ast:e,code:l,map:u?u.toJSON():void 0}};function be(e,c={}){const t=P({},c),n=!!t.jit,a=!!t.minify,i=null==t.optimize||t.optimize,r=ae(t),o=r.parse(e);return n?(i&&ue(o),a&&me(o),{ast:o,code:""}):(le(o,t),Ce(o,t))}
/*!
  * core-base v9.8.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
function Me(){"boolean"!==typeof __INTLIFY_PROD_DEVTOOLS__&&(m().__INTLIFY_PROD_DEVTOOLS__=!1),"boolean"!==typeof __INTLIFY_JIT_COMPILATION__&&(m().__INTLIFY_JIT_COMPILATION__=!1),"boolean"!==typeof __INTLIFY_DROP_MESSAGE_COMPILER__&&(m().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}const ye=[];ye[0]={["w"]:[0],["i"]:[3,0],["["]:[4],["o"]:[7]},ye[1]={["w"]:[1],["."]:[2],["["]:[4],["o"]:[7]},ye[2]={["w"]:[2],["i"]:[3,0],["0"]:[3,0]},ye[3]={["i"]:[3,0],["0"]:[3,0],["w"]:[1,1],["."]:[2,1],["["]:[4,1],["o"]:[7,1]},ye[4]={["'"]:[5,0],['"']:[6,0],["["]:[4,2],["]"]:[1,3],["o"]:8,["l"]:[4,0]},ye[5]={["'"]:[4,0],["o"]:8,["l"]:[5,0]},ye[6]={['"']:[4,0],["o"]:8,["l"]:[6,0]};const Le=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function xe(e){return Le.test(e)}function we(e){const c=e.charCodeAt(0),t=e.charCodeAt(e.length-1);return c!==t||34!==c&&39!==c?e:e.slice(1,-1)}function Se(e){if(void 0===e||null===e)return"o";const c=e.charCodeAt(0);switch(c){case 91:case 93:case 46:case 34:case 39:return e;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function ke(e){const c=e.trim();return("0"!==e.charAt(0)||!isNaN(parseInt(e)))&&(xe(c)?we(c):"*"+c)}function Ne(e){const c=[];let t,n,a,i,r,o,s,l=-1,u=0,f=0;const d=[];function m(){const c=e[l+1];if(5===u&&"'"===c||6===u&&'"'===c)return l++,a="\\"+c,d[0](),!0}d[0]=()=>{void 0===n?n=a:n+=a},d[1]=()=>{void 0!==n&&(c.push(n),n=void 0)},d[2]=()=>{d[0](),f++},d[3]=()=>{if(f>0)f--,u=4,d[0]();else{if(f=0,void 0===n)return!1;if(n=ke(n),!1===n)return!1;d[1]()}};while(null!==u)if(l++,t=e[l],"\\"!==t||!m()){if(i=Se(t),s=ye[u],r=s[i]||s["l"]||8,8===r)return;if(u=r[0],void 0!==r[1]&&(o=d[r[1]],o&&(a=t,!1===o())))return;if(7===u)return c}}const _e=new Map;function Ae(e,c){return C(e)?e[c]:null}function Ee(e,c){if(!C(e))return null;let t=_e.get(c);if(t||(t=Ne(c),t&&_e.set(c,t)),!t)return null;const n=t.length;let a=e,i=0;while(i<n){const e=a[t[i]];if(void 0===e)return null;if(g(a))return null;a=e,i++}return a}const Ie=e=>e,Te=e=>"",Pe="text",Fe=e=>0===e.length?"":w(e),Oe=x;function Re(e,c){return e=Math.abs(e),2===c?e?e>1?1:0:1:e?Math.min(e,2):0}function De(e){const c=o(e.pluralIndex)?e.pluralIndex:-1;return e.named&&(o(e.named.count)||o(e.named.n))?o(e.named.count)?e.named.count:o(e.named.n)?e.named.n:c:c}function Be(e,c){c.count||(c.count=e),c.n||(c.n=e)}function We(e={}){const c=e.locale,t=De(e),n=C(e.pluralRules)&&V(c)&&g(e.pluralRules[c])?e.pluralRules[c]:Re,a=C(e.pluralRules)&&V(c)&&g(e.pluralRules[c])?Re:void 0,i=e=>e[n(t,e.length,a)],r=e.list||[],s=e=>r[e],l=e.named||{};o(e.pluralIndex)&&Be(t,l);const u=e=>l[e];function d(c){const t=g(e.messages)?e.messages(c):!!C(e.messages)&&e.messages[c];return t||(e.parent?e.parent.message(c):Te)}const m=c=>e.modifiers?e.modifiers[c]:Ie,p=L(e.processor)&&g(e.processor.normalize)?e.processor.normalize:Fe,h=L(e.processor)&&g(e.processor.interpolate)?e.processor.interpolate:Oe,v=L(e.processor)&&V(e.processor.type)?e.processor.type:Pe,H=(e,...c)=>{const[t,n]=c;let a="text",i="";1===c.length?C(t)?(i=t.modifier||i,a=t.type||a):V(t)&&(i=t||i):2===c.length&&(V(t)&&(i=t||i),V(n)&&(a=n||a));const r=d(e)(b),o="vnode"===a&&z(r)&&i?r[0]:r;return i?m(i)(o,a):o},b={["list"]:s,["named"]:u,["plural"]:i,["linked"]:H,["message"]:d,["type"]:v,["interpolate"]:h,["normalize"]:p,["values"]:f({},r,l)};return b}let Ue=null;function $e(e){Ue=e}function je(e,c,t){Ue&&Ue.emit("i18n:init",{timestamp:Date.now(),i18n:e,version:c,meta:t})}const qe=Ge("function:translate");function Ge(e){return c=>Ue&&Ue.emit(e,c)}const Ye={NOT_FOUND_KEY:1,FALLBACK_TO_TRANSLATE:2,CANNOT_FORMAT_NUMBER:3,FALLBACK_TO_NUMBER_FORMAT:4,CANNOT_FORMAT_DATE:5,FALLBACK_TO_DATE_FORMAT:6,EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER:7,__EXTEND_POINT__:8};Ye.NOT_FOUND_KEY,Ye.FALLBACK_TO_TRANSLATE,Ye.CANNOT_FORMAT_NUMBER,Ye.FALLBACK_TO_NUMBER_FORMAT,Ye.CANNOT_FORMAT_DATE,Ye.FALLBACK_TO_DATE_FORMAT,Ye.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER;const Ze=D.__EXTEND_POINT__,Ke=S(Ze),Xe={INVALID_ARGUMENT:Ze,INVALID_DATE_ARGUMENT:Ke(),INVALID_ISO_DATE_ARGUMENT:Ke(),NOT_SUPPORT_NON_STRING_MESSAGE:Ke(),NOT_SUPPORT_LOCALE_PROMISE_VALUE:Ke(),NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:Ke(),NOT_SUPPORT_LOCALE_TYPE:Ke(),__EXTEND_POINT__:Ke()};function Je(e){return W(e,null,void 0)}Xe.INVALID_ARGUMENT,Xe.INVALID_DATE_ARGUMENT,Xe.INVALID_ISO_DATE_ARGUMENT,Xe.NOT_SUPPORT_NON_STRING_MESSAGE,Xe.NOT_SUPPORT_LOCALE_PROMISE_VALUE,Xe.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION,Xe.NOT_SUPPORT_LOCALE_TYPE;function Qe(e,c){return null!=c.locale?cc(c.locale):cc(e.locale)}let ec;function cc(e){if(V(e))return e;if(g(e)){if(e.resolvedOnce&&null!=ec)return ec;if("Function"===e.constructor.name){const c=e();if(b(c))throw Je(Xe.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return ec=c}throw Je(Xe.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}throw Je(Xe.NOT_SUPPORT_LOCALE_TYPE)}function tc(e,c,t){return[...new Set([t,...z(c)?c:C(c)?Object.keys(c):V(c)?[c]:[t]])]}function nc(e,c,t){const n=V(t)?t:lc,a=e;a.__localeChainCache||(a.__localeChainCache=new Map);let i=a.__localeChainCache.get(n);if(!i){i=[];let e=[t];while(z(e))e=ac(i,e,c);const r=z(c)||!L(c)?c:c["default"]?c["default"]:null;e=V(r)?[r]:r,z(e)&&ac(i,e,!1),a.__localeChainCache.set(n,i)}return i}function ac(e,c,t){let n=!0;for(let a=0;a<c.length&&H(n);a++){const i=c[a];V(i)&&(n=ic(e,c[a],t))}return n}function ic(e,c,t){let n;const a=c.split("-");do{const c=a.join("-");n=rc(e,c,t),a.splice(-1,1)}while(a.length&&!0===n);return n}function rc(e,c,t){let n=!1;if(!e.includes(c)&&(n=!0,c)){n="!"!==c[c.length-1];const a=c.replace(/!/g,"");e.push(a),(z(t)||L(t))&&t[a]&&(n=t[a])}return n}const oc="9.8.0",sc=-1,lc="en-US",uc="",fc=e=>`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;function dc(){return{upper:(e,c)=>"text"===c&&V(e)?e.toUpperCase():"vnode"===c&&C(e)&&"__v_isVNode"in e?e.children.toUpperCase():e,lower:(e,c)=>"text"===c&&V(e)?e.toLowerCase():"vnode"===c&&C(e)&&"__v_isVNode"in e?e.children.toLowerCase():e,capitalize:(e,c)=>"text"===c&&V(e)?fc(e):"vnode"===c&&C(e)&&"__v_isVNode"in e?fc(e.children):e}}let mc,pc,hc;function vc(e){mc=e}function zc(e){pc=e}function gc(e){hc=e}let Vc=null;const Hc=e=>{Vc=e},Cc=()=>Vc;let bc=null;const Mc=e=>{bc=e},yc=()=>bc;let Lc=0;function xc(e={}){const c=g(e.onWarn)?e.onWarn:k,t=V(e.version)?e.version:oc,n=V(e.locale)||g(e.locale)?e.locale:lc,a=g(n)?lc:n,i=z(e.fallbackLocale)||L(e.fallbackLocale)||V(e.fallbackLocale)||!1===e.fallbackLocale?e.fallbackLocale:a,r=L(e.messages)?e.messages:{[a]:{}},o=L(e.datetimeFormats)?e.datetimeFormats:{[a]:{}},s=L(e.numberFormats)?e.numberFormats:{[a]:{}},u=f({},e.modifiers||{},dc()),d=e.pluralRules||{},m=g(e.missing)?e.missing:null,p=!H(e.missingWarn)&&!l(e.missingWarn)||e.missingWarn,h=!H(e.fallbackWarn)&&!l(e.fallbackWarn)||e.fallbackWarn,v=!!e.fallbackFormat,b=!!e.unresolving,M=g(e.postTranslation)?e.postTranslation:null,y=L(e.processor)?e.processor:null,x=!H(e.warnHtmlMessage)||e.warnHtmlMessage,w=!!e.escapeParameter,S=g(e.messageCompiler)?e.messageCompiler:mc;const N=g(e.messageResolver)?e.messageResolver:pc||Ae,_=g(e.localeFallbacker)?e.localeFallbacker:hc||tc,A=C(e.fallbackContext)?e.fallbackContext:void 0,E=e,I=C(E.__datetimeFormatters)?E.__datetimeFormatters:new Map,T=C(E.__numberFormatters)?E.__numberFormatters:new Map,P=C(E.__meta)?E.__meta:{};Lc++;const F={version:t,cid:Lc,locale:n,fallbackLocale:i,messages:r,modifiers:u,pluralRules:d,missing:m,missingWarn:p,fallbackWarn:h,fallbackFormat:v,unresolving:b,postTranslation:M,processor:y,warnHtmlMessage:x,escapeParameter:w,messageCompiler:S,messageResolver:N,localeFallbacker:_,fallbackContext:A,onWarn:c,__meta:P};return F.datetimeFormats=o,F.numberFormats=s,F.__datetimeFormatters=I,F.__numberFormatters=T,__INTLIFY_PROD_DEVTOOLS__&&je(F,t,P),F}function wc(e,c,t,n,a){const{missing:i,onWarn:r}=e;if(null!==i){const n=i(e,t,c,a);return V(n)?n:c}return c}function Sc(e,c,t){const n=e;n.__localeChainCache=new Map,e.localeFallbacker(e,t,c)}function kc(e){const c=c=>Nc(c,e);return c}function Nc(e,c){const t=c.b||c.body;if(1===(t.t||t.type)){const c=t,n=c.c||c.cases;return e.plural(n.reduce(((c,t)=>[...c,_c(e,t)]),[]))}return _c(e,t)}function _c(e,c){const t=c.s||c.static;if(t)return"text"===e.type?t:e.normalize([t]);{const t=(c.i||c.items).reduce(((c,t)=>[...c,Ac(e,t)]),[]);return e.normalize(t)}}function Ac(e,c){const t=c.t||c.type;switch(t){case 3:const n=c;return n.v||n.value;case 9:const a=c;return a.v||a.value;case 4:const i=c;return e.interpolate(e.named(i.k||i.key));case 5:const r=c;return e.interpolate(e.list(null!=r.i?r.i:r.index));case 6:const o=c,s=o.m||o.modifier;return e.linked(Ac(e,o.k||o.key),s?Ac(e,s):void 0,e.type);case 7:const l=c;return l.v||l.value;case 8:const u=c;return u.v||u.value;default:throw new Error(`unhandled node type on format message part: ${t}`)}}const Ec=e=>e;let Ic=Object.create(null);const Tc=e=>C(e)&&(0===e.t||0===e.type)&&("b"in e||"body"in e);function Pc(e,c={}){let t=!1;const n=c.onError||U;return c.onError=e=>{t=!0,n(e)},{...be(e,c),detectError:t}}const Fc=(e,c)=>{if(!V(e))throw Je(Xe.NOT_SUPPORT_NON_STRING_MESSAGE);{!H(c.warnHtmlMessage)||c.warnHtmlMessage;const t=c.onCacheKey||Ec,n=t(e),a=Ic[n];if(a)return a;const{code:i,detectError:r}=Pc(e,c),o=new Function(`return ${i}`)();return r?o:Ic[n]=o}};function Oc(e,c){if(__INTLIFY_JIT_COMPILATION__&&!__INTLIFY_DROP_MESSAGE_COMPILER__&&V(e)){!H(c.warnHtmlMessage)||c.warnHtmlMessage;const t=c.onCacheKey||Ec,n=t(e),a=Ic[n];if(a)return a;const{ast:i,detectError:r}=Pc(e,{...c,location:!1,jit:!0}),o=kc(i);return r?o:Ic[n]=o}{0;const c=e.cacheKey;if(c){const t=Ic[c];return t||(Ic[c]=kc(e))}return kc(e)}}const Rc=()=>"",Dc=e=>g(e);function Bc(e,...c){const{fallbackFormat:t,postTranslation:n,unresolving:a,messageCompiler:i,fallbackLocale:r,messages:o}=e,[s,l]=qc(...c),u=H(l.missingWarn)?l.missingWarn:e.missingWarn,d=H(l.fallbackWarn)?l.fallbackWarn:e.fallbackWarn,m=H(l.escapeParameter)?l.escapeParameter:e.escapeParameter,p=!!l.resolvedMessage,h=V(l.default)||H(l.default)?H(l.default)?i?s:()=>s:l.default:t?i?s:()=>s:"",v=t||""!==h,z=Qe(e,l);m&&Wc(l);let[g,C,b]=p?[s,z,o[z]||{}]:Uc(e,s,z,r,d,u),M=g,y=s;if(p||V(M)||Tc(M)||Dc(M)||v&&(M=h,y=M),!p&&(!(V(M)||Tc(M)||Dc(M))||!V(C)))return a?sc:s;let L=!1;const x=()=>{L=!0},w=Dc(M)?M:$c(e,s,C,M,y,x);if(L)return M;const S=Yc(e,C,b,l),k=We(S),N=jc(e,w,k),_=n?n(N,s):N;if(__INTLIFY_PROD_DEVTOOLS__){const c={timestamp:Date.now(),key:V(s)?s:Dc(M)?M.key:"",locale:C||(Dc(M)?M.locale:""),format:V(M)?M:Dc(M)?M.source:"",message:_};c.meta=f({},e.__meta,Cc()||{}),qe(c)}return _}function Wc(e){z(e.list)?e.list=e.list.map((e=>V(e)?p(e):e)):C(e.named)&&Object.keys(e.named).forEach((c=>{V(e.named[c])&&(e.named[c]=p(e.named[c]))}))}function Uc(e,c,t,n,a,i){const{messages:r,onWarn:o,messageResolver:s,localeFallbacker:l}=e,u=l(e,n,t);let f,d={},m=null,p=t,h=null;const v="translate";for(let z=0;z<u.length;z++){f=h=u[z],d=r[f]||{};if(null===(m=s(d,c))&&(m=d[c]),V(m)||Tc(m)||Dc(m))break;const t=wc(e,c,f,i,v);t!==c&&(m=t),p=h}return[m,f,d]}function $c(e,c,t,n,a,i){const{messageCompiler:r,warnHtmlMessage:o}=e;if(Dc(n)){const e=n;return e.locale=e.locale||t,e.key=e.key||c,e}if(null==r){const e=()=>n;return e.locale=t,e.key=c,e}const s=r(n,Gc(e,t,a,n,o,i));return s.locale=t,s.key=c,s.source=n,s}function jc(e,c,t){const n=c(t);return n}function qc(...e){const[c,t,n]=e,a={};if(!V(c)&&!o(c)&&!Dc(c)&&!Tc(c))throw Je(Xe.INVALID_ARGUMENT);const i=o(c)?String(c):(Dc(c),c);return o(t)?a.plural=t:V(t)?a.default=t:L(t)&&!u(t)?a.named=t:z(t)&&(a.list=t),o(n)?a.plural=n:V(n)?a.default=n:L(n)&&f(a,n),[i,a]}function Gc(e,c,t,n,a,r){return{locale:c,key:t,warnHtmlMessage:a,onError:e=>{throw r&&r(e),e},onCacheKey:e=>i(c,t,e)}}function Yc(e,c,t,n){const{modifiers:a,pluralRules:i,messageResolver:r,fallbackLocale:s,fallbackWarn:l,missingWarn:u,fallbackContext:f}=e,d=n=>{let a=r(t,n);if(null==a&&f){const[,,e]=Uc(f,n,c,s,l,u);a=r(e,n)}if(V(a)||Tc(a)){let t=!1;const i=()=>{t=!0},r=$c(e,n,c,a,n,i);return t?Rc:r}return Dc(a)?a:Rc},m={locale:c,modifiers:a,pluralRules:i,messages:d};return e.processor&&(m.processor=e.processor),n.list&&(m.list=n.list),n.named&&(m.named=n.named),o(n.plural)&&(m.pluralIndex=n.plural),m}const Zc="undefined"!==typeof Intl;Zc&&Intl.DateTimeFormat,Zc&&Intl.NumberFormat;function Kc(e,...c){const{datetimeFormats:t,unresolving:n,fallbackLocale:a,onWarn:i,localeFallbacker:r}=e,{__datetimeFormatters:o}=e;const[s,l,d,m]=Jc(...c),p=H(d.missingWarn)?d.missingWarn:e.missingWarn,h=(H(d.fallbackWarn)?d.fallbackWarn:e.fallbackWarn,!!d.part),v=Qe(e,d),z=r(e,a,v);if(!V(s)||""===s)return new Intl.DateTimeFormat(v,m).format(l);let g,C={},b=null,M=v,y=null;const x="datetime format";for(let u=0;u<z.length;u++){if(g=y=z[u],C=t[g]||{},b=C[s],L(b))break;wc(e,s,g,p,x),M=y}if(!L(b)||!V(g))return n?sc:s;let w=`${g}__${s}`;u(m)||(w=`${w}__${JSON.stringify(m)}`);let S=o.get(w);return S||(S=new Intl.DateTimeFormat(g,f({},b,m)),o.set(w,S)),h?S.formatToParts(l):S.format(l)}const Xc=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function Jc(...e){const[c,t,n,a]=e,i={};let r,l={};if(V(c)){const e=c.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!e)throw Je(Xe.INVALID_ISO_DATE_ARGUMENT);const t=e[3]?e[3].trim().startsWith("T")?`${e[1].trim()}${e[3].trim()}`:`${e[1].trim()}T${e[3].trim()}`:e[1].trim();r=new Date(t);try{r.toISOString()}catch(u){throw Je(Xe.INVALID_ISO_DATE_ARGUMENT)}}else if(s(c)){if(isNaN(c.getTime()))throw Je(Xe.INVALID_DATE_ARGUMENT);r=c}else{if(!o(c))throw Je(Xe.INVALID_ARGUMENT);r=c}return V(t)?i.key=t:L(t)&&Object.keys(t).forEach((e=>{Xc.includes(e)?l[e]=t[e]:i[e]=t[e]})),V(n)?i.locale=n:L(n)&&(l=n),L(a)&&(l=a),[i.key||"",r,i,l]}function Qc(e,c,t){const n=e;for(const a in t){const e=`${c}__${a}`;n.__datetimeFormatters.has(e)&&n.__datetimeFormatters.delete(e)}}function et(e,...c){const{numberFormats:t,unresolving:n,fallbackLocale:a,onWarn:i,localeFallbacker:r}=e,{__numberFormatters:o}=e;const[s,l,d,m]=tt(...c),p=H(d.missingWarn)?d.missingWarn:e.missingWarn,h=(H(d.fallbackWarn)?d.fallbackWarn:e.fallbackWarn,!!d.part),v=Qe(e,d),z=r(e,a,v);if(!V(s)||""===s)return new Intl.NumberFormat(v,m).format(l);let g,C={},b=null,M=v,y=null;const x="number format";for(let u=0;u<z.length;u++){if(g=y=z[u],C=t[g]||{},b=C[s],L(b))break;wc(e,s,g,p,x),M=y}if(!L(b)||!V(g))return n?sc:s;let w=`${g}__${s}`;u(m)||(w=`${w}__${JSON.stringify(m)}`);let S=o.get(w);return S||(S=new Intl.NumberFormat(g,f({},b,m)),o.set(w,S)),h?S.formatToParts(l):S.format(l)}const ct=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function tt(...e){const[c,t,n,a]=e,i={};let r={};if(!o(c))throw Je(Xe.INVALID_ARGUMENT);const s=c;return V(t)?i.key=t:L(t)&&Object.keys(t).forEach((e=>{ct.includes(e)?r[e]=t[e]:i[e]=t[e]})),V(n)?i.locale=n:L(n)&&(r=n),L(a)&&(r=a),[i.key||"",s,i,r]}function nt(e,c,t){const n=e;for(const a in t){const e=`${c}__${a}`;n.__numberFormatters.has(e)&&n.__numberFormatters.delete(e)}}Me();var at=t(3396),it=t(4870);
/*!
  * vue-i18n v9.8.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
const rt="9.8.0";function ot(){"boolean"!==typeof __VUE_I18N_FULL_INSTALL__&&(m().__VUE_I18N_FULL_INSTALL__=!0),"boolean"!==typeof __VUE_I18N_LEGACY_API__&&(m().__VUE_I18N_LEGACY_API__=!0),"boolean"!==typeof __INTLIFY_JIT_COMPILATION__&&(m().__INTLIFY_JIT_COMPILATION__=!1),"boolean"!==typeof __INTLIFY_DROP_MESSAGE_COMPILER__&&(m().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),"boolean"!==typeof __INTLIFY_PROD_DEVTOOLS__&&(m().__INTLIFY_PROD_DEVTOOLS__=!1)}const st=Ye.__EXTEND_POINT__,lt=S(st),ut={FALLBACK_TO_ROOT:st,NOT_SUPPORTED_PRESERVE:lt(),NOT_SUPPORTED_FORMATTER:lt(),NOT_SUPPORTED_PRESERVE_DIRECTIVE:lt(),NOT_SUPPORTED_GET_CHOICE_INDEX:lt(),COMPONENT_NAME_LEGACY_COMPATIBLE:lt(),NOT_FOUND_PARENT_SCOPE:lt(),IGNORE_OBJ_FLATTEN:lt(),NOTICE_DROP_ALLOW_COMPOSITION:lt()};ut.FALLBACK_TO_ROOT,ut.NOT_SUPPORTED_PRESERVE,ut.NOT_SUPPORTED_FORMATTER,ut.NOT_SUPPORTED_PRESERVE_DIRECTIVE,ut.NOT_SUPPORTED_GET_CHOICE_INDEX,ut.COMPONENT_NAME_LEGACY_COMPATIBLE,ut.NOT_FOUND_PARENT_SCOPE,ut.IGNORE_OBJ_FLATTEN,ut.NOTICE_DROP_ALLOW_COMPOSITION;const ft=Xe.__EXTEND_POINT__,dt=S(ft),mt={UNEXPECTED_RETURN_TYPE:ft,INVALID_ARGUMENT:dt(),MUST_BE_CALL_SETUP_TOP:dt(),NOT_INSTALLED:dt(),NOT_AVAILABLE_IN_LEGACY_MODE:dt(),REQUIRED_VALUE:dt(),INVALID_VALUE:dt(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:dt(),NOT_INSTALLED_WITH_PROVIDE:dt(),UNEXPECTED_ERROR:dt(),NOT_COMPATIBLE_LEGACY_VUE_I18N:dt(),BRIDGE_SUPPORT_VUE_2_ONLY:dt(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:dt(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:dt(),__EXTEND_POINT__:dt()};function pt(e,...c){return W(e,null,void 0)}mt.UNEXPECTED_RETURN_TYPE,mt.INVALID_ARGUMENT,mt.MUST_BE_CALL_SETUP_TOP,mt.NOT_INSTALLED,mt.UNEXPECTED_ERROR,mt.NOT_AVAILABLE_IN_LEGACY_MODE,mt.REQUIRED_VALUE,mt.INVALID_VALUE,mt.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN,mt.NOT_INSTALLED_WITH_PROVIDE,mt.NOT_COMPATIBLE_LEGACY_VUE_I18N,mt.BRIDGE_SUPPORT_VUE_2_ONLY,mt.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION,mt.NOT_AVAILABLE_COMPOSITION_IN_LEGACY;const ht=a("__translateVNode"),vt=a("__datetimeParts"),zt=a("__numberParts"),gt=a("__setPluralRules");a("__intlifyMeta");const Vt=a("__injectWithOption"),Ht=a("__dispose");function Ct(e){if(!C(e))return e;for(const c in e)if(v(e,c))if(c.includes(".")){const t=c.split("."),n=t.length-1;let a=e,i=!1;for(let e=0;e<n;e++){if(t[e]in a||(a[t[e]]={}),!C(a[t[e]])){i=!0;break}a=a[t[e]]}i||(a[t[n]]=e[c],delete e[c]),C(a[t[n]])&&Ct(a[t[n]])}else C(e[c])&&Ct(e[c]);return e}function bt(e,c){const{messages:t,__i18n:n,messageResolver:a,flatJson:i}=c,r=L(t)?t:z(n)?{}:{[e]:{}};if(z(n)&&n.forEach((e=>{if("locale"in e&&"resource"in e){const{locale:c,resource:t}=e;c?(r[c]=r[c]||{},_(t,r[c])):_(t,r)}else V(e)&&_(JSON.parse(e),r)})),null==a&&i)for(const o in r)v(r,o)&&Ct(r[o]);return r}function Mt(e){return e.type}function yt(e,c,t){let n=C(c.messages)?c.messages:{};"__i18nGlobal"in t&&(n=bt(e.locale.value,{messages:n,__i18n:t.__i18nGlobal}));const a=Object.keys(n);if(a.length&&a.forEach((c=>{e.mergeLocaleMessage(c,n[c])})),C(c.datetimeFormats)){const t=Object.keys(c.datetimeFormats);t.length&&t.forEach((t=>{e.mergeDateTimeFormat(t,c.datetimeFormats[t])}))}if(C(c.numberFormats)){const t=Object.keys(c.numberFormats);t.length&&t.forEach((t=>{e.mergeNumberFormat(t,c.numberFormats[t])}))}}function Lt(e){return(0,at.Wm)(at.xv,null,e,0)}const xt="__INTLIFY_META__",wt=()=>[],St=()=>!1;let kt=0;function Nt(e){return(c,t,n,a)=>e(t,n,(0,at.FN)()||void 0,a)}const _t=()=>{const e=(0,at.FN)();let c=null;return e&&(c=Mt(e)[xt])?{[xt]:c}:null};function At(e={},c){const{__root:t,__injectWithOption:a}=e,i=void 0===t,r=e.flatJson;let s=!H(e.inheritLocale)||e.inheritLocale;const u=(0,it.iH)(t&&s?t.locale.value:V(e.locale)?e.locale:lc),d=(0,it.iH)(t&&s?t.fallbackLocale.value:V(e.fallbackLocale)||z(e.fallbackLocale)||L(e.fallbackLocale)||!1===e.fallbackLocale?e.fallbackLocale:u.value),m=(0,it.iH)(bt(u.value,e)),p=(0,it.iH)(L(e.datetimeFormats)?e.datetimeFormats:{[u.value]:{}}),h=(0,it.iH)(L(e.numberFormats)?e.numberFormats:{[u.value]:{}});let b=t?t.missingWarn:!H(e.missingWarn)&&!l(e.missingWarn)||e.missingWarn,M=t?t.fallbackWarn:!H(e.fallbackWarn)&&!l(e.fallbackWarn)||e.fallbackWarn,y=t?t.fallbackRoot:!H(e.fallbackRoot)||e.fallbackRoot,x=!!e.fallbackFormat,w=g(e.missing)?e.missing:null,S=g(e.missing)?Nt(e.missing):null,k=g(e.postTranslation)?e.postTranslation:null,N=t?t.warnHtmlMessage:!H(e.warnHtmlMessage)||e.warnHtmlMessage,A=!!e.escapeParameter;const E=t?t.modifiers:L(e.modifiers)?e.modifiers:{};let I,T=e.pluralRules||t&&t.pluralRules;const P=()=>{i&&Mc(null);const c={version:rt,locale:u.value,fallbackLocale:d.value,messages:m.value,modifiers:E,pluralRules:T,missing:null===S?void 0:S,missingWarn:b,fallbackWarn:M,fallbackFormat:x,unresolving:!0,postTranslation:null===k?void 0:k,warnHtmlMessage:N,escapeParameter:A,messageResolver:e.messageResolver,messageCompiler:e.messageCompiler,__meta:{framework:"vue"}};c.datetimeFormats=p.value,c.numberFormats=h.value,c.__datetimeFormatters=L(I)?I.__datetimeFormatters:void 0,c.__numberFormatters=L(I)?I.__numberFormatters:void 0;const t=xc(c);return i&&Mc(t),t};function F(){return[u.value,d.value,m.value,p.value,h.value]}I=P(),Sc(I,u.value,d.value);const O=(0,at.Fl)({get:()=>u.value,set:e=>{u.value=e,I.locale=u.value}}),R=(0,at.Fl)({get:()=>d.value,set:e=>{d.value=e,I.fallbackLocale=d.value,Sc(I,u.value,e)}}),D=(0,at.Fl)((()=>m.value)),B=(0,at.Fl)((()=>p.value)),W=(0,at.Fl)((()=>h.value));function U(){return g(k)?k:null}function $(e){k=e,I.postTranslation=e}function j(){return w}function q(e){null!==e&&(S=Nt(e)),w=e,I.missing=S}const G=(e,c,n,a,r,s)=>{let l;F();try{__INTLIFY_PROD_DEVTOOLS__&&Hc(_t()),i||(I.fallbackContext=t?yc():void 0),l=e(I)}finally{__INTLIFY_PROD_DEVTOOLS__&&Hc(null),i||(I.fallbackContext=void 0)}if("translate exists"!==n&&o(l)&&l===sc||"translate exists"===n&&!l){const[e,n]=c();return t&&y?a(t):r(e)}if(s(l))return l;throw pt(mt.UNEXPECTED_RETURN_TYPE)};function Y(...e){return G((c=>Reflect.apply(Bc,null,[c,...e])),(()=>qc(...e)),"translate",(c=>Reflect.apply(c.t,c,[...e])),(e=>e),(e=>V(e)))}function Z(...e){const[c,t,n]=e;if(n&&!C(n))throw pt(mt.INVALID_ARGUMENT);return Y(c,t,f({resolvedMessage:!0},n||{}))}function K(...e){return G((c=>Reflect.apply(Kc,null,[c,...e])),(()=>Jc(...e)),"datetime format",(c=>Reflect.apply(c.d,c,[...e])),(()=>uc),(e=>V(e)))}function X(...e){return G((c=>Reflect.apply(et,null,[c,...e])),(()=>tt(...e)),"number format",(c=>Reflect.apply(c.n,c,[...e])),(()=>uc),(e=>V(e)))}function J(e){return e.map((e=>V(e)||o(e)||H(e)?Lt(String(e)):e))}const Q=e=>e,ee={normalize:J,interpolate:Q,type:"vnode"};function ce(...e){return G((c=>{let t;const n=c;try{n.processor=ee,t=Reflect.apply(Bc,null,[n,...e])}finally{n.processor=null}return t}),(()=>qc(...e)),"translate",(c=>c[ht](...e)),(e=>[Lt(e)]),(e=>z(e)))}function te(...e){return G((c=>Reflect.apply(et,null,[c,...e])),(()=>tt(...e)),"number format",(c=>c[zt](...e)),wt,(e=>V(e)||z(e)))}function ne(...e){return G((c=>Reflect.apply(Kc,null,[c,...e])),(()=>Jc(...e)),"datetime format",(c=>c[vt](...e)),wt,(e=>V(e)||z(e)))}function ae(e){T=e,I.pluralRules=T}function ie(e,c){return G((()=>{if(!e)return!1;const t=V(c)?c:u.value,n=se(t),a=I.messageResolver(n,e);return Tc(a)||Dc(a)||V(a)}),(()=>[e]),"translate exists",(t=>Reflect.apply(t.te,t,[e,c])),St,(e=>H(e)))}function re(e){let c=null;const t=nc(I,d.value,u.value);for(let n=0;n<t.length;n++){const a=m.value[t[n]]||{},i=I.messageResolver(a,e);if(null!=i){c=i;break}}return c}function oe(e){const c=re(e);return null!=c?c:t&&t.tm(e)||{}}function se(e){return m.value[e]||{}}function le(e,c){if(r){const t={[e]:c};for(const e in t)v(t,e)&&Ct(t[e]);c=t[e]}m.value[e]=c,I.messages=m.value}function ue(e,c){m.value[e]=m.value[e]||{};const t={[e]:c};for(const n in t)v(t,n)&&Ct(t[n]);c=t[e],_(c,m.value[e]),I.messages=m.value}function fe(e){return p.value[e]||{}}function de(e,c){p.value[e]=c,I.datetimeFormats=p.value,Qc(I,e,c)}function me(e,c){p.value[e]=f(p.value[e]||{},c),I.datetimeFormats=p.value,Qc(I,e,c)}function pe(e){return h.value[e]||{}}function he(e,c){h.value[e]=c,I.numberFormats=h.value,nt(I,e,c)}function ve(e,c){h.value[e]=f(h.value[e]||{},c),I.numberFormats=h.value,nt(I,e,c)}kt++,t&&n&&((0,at.YP)(t.locale,(e=>{s&&(u.value=e,I.locale=e,Sc(I,u.value,d.value))})),(0,at.YP)(t.fallbackLocale,(e=>{s&&(d.value=e,I.fallbackLocale=e,Sc(I,u.value,d.value))})));const ze={id:kt,locale:O,fallbackLocale:R,get inheritLocale(){return s},set inheritLocale(e){s=e,e&&t&&(u.value=t.locale.value,d.value=t.fallbackLocale.value,Sc(I,u.value,d.value))},get availableLocales(){return Object.keys(m.value).sort()},messages:D,get modifiers(){return E},get pluralRules(){return T||{}},get isGlobal(){return i},get missingWarn(){return b},set missingWarn(e){b=e,I.missingWarn=b},get fallbackWarn(){return M},set fallbackWarn(e){M=e,I.fallbackWarn=M},get fallbackRoot(){return y},set fallbackRoot(e){y=e},get fallbackFormat(){return x},set fallbackFormat(e){x=e,I.fallbackFormat=x},get warnHtmlMessage(){return N},set warnHtmlMessage(e){N=e,I.warnHtmlMessage=e},get escapeParameter(){return A},set escapeParameter(e){A=e,I.escapeParameter=e},t:Y,getLocaleMessage:se,setLocaleMessage:le,mergeLocaleMessage:ue,getPostTranslationHandler:U,setPostTranslationHandler:$,getMissingHandler:j,setMissingHandler:q,[gt]:ae};return ze.datetimeFormats=B,ze.numberFormats=W,ze.rt=Z,ze.te=ie,ze.tm=oe,ze.d=K,ze.n=X,ze.getDateTimeFormat=fe,ze.setDateTimeFormat=de,ze.mergeDateTimeFormat=me,ze.getNumberFormat=pe,ze.setNumberFormat=he,ze.mergeNumberFormat=ve,ze[Vt]=a,ze[ht]=ce,ze[vt]=ne,ze[zt]=te,ze}function Et(e){const c=V(e.locale)?e.locale:lc,t=V(e.fallbackLocale)||z(e.fallbackLocale)||L(e.fallbackLocale)||!1===e.fallbackLocale?e.fallbackLocale:c,n=g(e.missing)?e.missing:void 0,a=!H(e.silentTranslationWarn)&&!l(e.silentTranslationWarn)||!e.silentTranslationWarn,i=!H(e.silentFallbackWarn)&&!l(e.silentFallbackWarn)||!e.silentFallbackWarn,r=!H(e.fallbackRoot)||e.fallbackRoot,o=!!e.formatFallbackMessages,s=L(e.modifiers)?e.modifiers:{},u=e.pluralizationRules,d=g(e.postTranslation)?e.postTranslation:void 0,m=!V(e.warnHtmlInMessage)||"off"!==e.warnHtmlInMessage,p=!!e.escapeParameterHtml,h=!H(e.sync)||e.sync;let v=e.messages;if(L(e.sharedMessages)){const c=e.sharedMessages,t=Object.keys(c);v=t.reduce(((e,t)=>{const n=e[t]||(e[t]={});return f(n,c[t]),e}),v||{})}const{__i18n:C,__root:b,__injectWithOption:M}=e,y=e.datetimeFormats,x=e.numberFormats,w=e.flatJson;return{locale:c,fallbackLocale:t,messages:v,flatJson:w,datetimeFormats:y,numberFormats:x,missing:n,missingWarn:a,fallbackWarn:i,fallbackRoot:r,fallbackFormat:o,modifiers:s,pluralRules:u,postTranslation:d,warnHtmlMessage:m,escapeParameter:p,messageResolver:e.messageResolver,inheritLocale:h,__i18n:C,__root:b,__injectWithOption:M}}function It(e={},c){{const c=At(Et(e)),{__extender:t}=e,n={id:c.id,get locale(){return c.locale.value},set locale(e){c.locale.value=e},get fallbackLocale(){return c.fallbackLocale.value},set fallbackLocale(e){c.fallbackLocale.value=e},get messages(){return c.messages.value},get datetimeFormats(){return c.datetimeFormats.value},get numberFormats(){return c.numberFormats.value},get availableLocales(){return c.availableLocales},get formatter(){return{interpolate(){return[]}}},set formatter(e){},get missing(){return c.getMissingHandler()},set missing(e){c.setMissingHandler(e)},get silentTranslationWarn(){return H(c.missingWarn)?!c.missingWarn:c.missingWarn},set silentTranslationWarn(e){c.missingWarn=H(e)?!e:e},get silentFallbackWarn(){return H(c.fallbackWarn)?!c.fallbackWarn:c.fallbackWarn},set silentFallbackWarn(e){c.fallbackWarn=H(e)?!e:e},get modifiers(){return c.modifiers},get formatFallbackMessages(){return c.fallbackFormat},set formatFallbackMessages(e){c.fallbackFormat=e},get postTranslation(){return c.getPostTranslationHandler()},set postTranslation(e){c.setPostTranslationHandler(e)},get sync(){return c.inheritLocale},set sync(e){c.inheritLocale=e},get warnHtmlInMessage(){return c.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(e){c.warnHtmlMessage="off"!==e},get escapeParameterHtml(){return c.escapeParameter},set escapeParameterHtml(e){c.escapeParameter=e},get preserveDirectiveContent(){return!0},set preserveDirectiveContent(e){},get pluralizationRules(){return c.pluralRules||{}},__composer:c,t(...e){const[t,n,a]=e,i={};let r=null,o=null;if(!V(t))throw pt(mt.INVALID_ARGUMENT);const s=t;return V(n)?i.locale=n:z(n)?r=n:L(n)&&(o=n),z(a)?r=a:L(a)&&(o=a),Reflect.apply(c.t,c,[s,r||o||{},i])},rt(...e){return Reflect.apply(c.rt,c,[...e])},tc(...e){const[t,n,a]=e,i={plural:1};let r=null,s=null;if(!V(t))throw pt(mt.INVALID_ARGUMENT);const l=t;return V(n)?i.locale=n:o(n)?i.plural=n:z(n)?r=n:L(n)&&(s=n),V(a)?i.locale=a:z(a)?r=a:L(a)&&(s=a),Reflect.apply(c.t,c,[l,r||s||{},i])},te(e,t){return c.te(e,t)},tm(e){return c.tm(e)},getLocaleMessage(e){return c.getLocaleMessage(e)},setLocaleMessage(e,t){c.setLocaleMessage(e,t)},mergeLocaleMessage(e,t){c.mergeLocaleMessage(e,t)},d(...e){return Reflect.apply(c.d,c,[...e])},getDateTimeFormat(e){return c.getDateTimeFormat(e)},setDateTimeFormat(e,t){c.setDateTimeFormat(e,t)},mergeDateTimeFormat(e,t){c.mergeDateTimeFormat(e,t)},n(...e){return Reflect.apply(c.n,c,[...e])},getNumberFormat(e){return c.getNumberFormat(e)},setNumberFormat(e,t){c.setNumberFormat(e,t)},mergeNumberFormat(e,t){c.mergeNumberFormat(e,t)},getChoiceIndex(e,c){return-1}};return n.__extender=t,n}}const Tt={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:e=>"parent"===e||"global"===e,default:"parent"},i18n:{type:Object}};function Pt({slots:e},c){if(1===c.length&&"default"===c[0]){const c=e.default?e.default():[];return c.reduce(((e,c)=>[...e,...c.type===at.HY?c.children:[c]]),[])}return c.reduce(((c,t)=>{const n=e[t];return n&&(c[t]=n()),c}),{})}function Ft(e){return at.HY}const Ot=(0,at.aZ)({name:"i18n-t",props:f({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:e=>o(e)||!isNaN(e)}},Tt),setup(e,c){const{slots:t,attrs:n}=c,a=e.i18n||cn({useScope:e.scope,__useComponent:!0});return()=>{const i=Object.keys(t).filter((e=>"_"!==e)),r={};e.locale&&(r.locale=e.locale),void 0!==e.plural&&(r.plural=V(e.plural)?+e.plural:e.plural);const o=Pt(c,i),s=a[ht](e.keypath,o,r),l=f({},n),u=V(e.tag)||C(e.tag)?e.tag:Ft();return(0,at.h)(u,l,s)}}}),Rt=Ot;function Dt(e){return z(e)&&!V(e[0])}function Bt(e,c,t,n){const{slots:a,attrs:i}=c;return()=>{const c={part:!0};let r={};e.locale&&(c.locale=e.locale),V(e.format)?c.key=e.format:C(e.format)&&(V(e.format.key)&&(c.key=e.format.key),r=Object.keys(e.format).reduce(((c,n)=>t.includes(n)?f({},c,{[n]:e.format[n]}):c),{}));const o=n(e.value,c,r);let s=[c.key];z(o)?s=o.map(((e,c)=>{const t=a[e.type],n=t?t({[e.type]:e.value,index:c,parts:o}):[e.value];return Dt(n)&&(n[0].key=`${e.type}-${c}`),n})):V(o)&&(s=[o]);const l=f({},i),u=V(e.tag)||C(e.tag)?e.tag:Ft();return(0,at.h)(u,l,s)}}const Wt=(0,at.aZ)({name:"i18n-n",props:f({value:{type:Number,required:!0},format:{type:[String,Object]}},Tt),setup(e,c){const t=e.i18n||cn({useScope:"parent",__useComponent:!0});return Bt(e,c,ct,((...e)=>t[zt](...e)))}}),Ut=Wt,$t=(0,at.aZ)({name:"i18n-d",props:f({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Tt),setup(e,c){const t=e.i18n||cn({useScope:"parent",__useComponent:!0});return Bt(e,c,Xc,((...e)=>t[vt](...e)))}}),jt=$t;function qt(e,c){const t=e;if("composition"===e.mode)return t.__getInstance(c)||e.global;{const n=t.__getInstance(c);return null!=n?n.__composer:e.global.__composer}}function Gt(e){const c=c=>{const{instance:t,modifiers:n,value:a}=c;if(!t||!t.$)throw pt(mt.UNEXPECTED_ERROR);const i=qt(e,t.$);const r=Yt(a);return[Reflect.apply(i.t,i,[...Zt(r)]),i]},t=(t,a)=>{const[i,r]=c(a);n&&e.global===r&&(t.__i18nWatcher=(0,at.YP)(r.locale,(()=>{a.instance&&a.instance.$forceUpdate()}))),t.__composer=r,t.textContent=i},a=e=>{n&&e.__i18nWatcher&&(e.__i18nWatcher(),e.__i18nWatcher=void 0,delete e.__i18nWatcher),e.__composer&&(e.__composer=void 0,delete e.__composer)},i=(e,{value:c})=>{if(e.__composer){const t=e.__composer,n=Yt(c);e.textContent=Reflect.apply(t.t,t,[...Zt(n)])}},r=e=>{const[t]=c(e);return{textContent:t}};return{created:t,unmounted:a,beforeUpdate:i,getSSRProps:r}}function Yt(e){if(V(e))return{path:e};if(L(e)){if(!("path"in e))throw pt(mt.REQUIRED_VALUE,"path");return e}throw pt(mt.INVALID_VALUE)}function Zt(e){const{path:c,locale:t,args:n,choice:a,plural:i}=e,r={},s=n||{};return V(t)&&(r.locale=t),o(a)&&(r.plural=a),o(i)&&(r.plural=i),[c,s,r]}function Kt(e,c,...t){const n=L(t[0])?t[0]:{},a=!!n.useI18nComponentName,i=!H(n.globalInstall)||n.globalInstall;i&&([a?"i18n":Rt.name,"I18nT"].forEach((c=>e.component(c,Rt))),[Ut.name,"I18nN"].forEach((c=>e.component(c,Ut))),[jt.name,"I18nD"].forEach((c=>e.component(c,jt)))),e.directive("t",Gt(c))}function Xt(e,c,t){return{beforeCreate(){const n=(0,at.FN)();if(!n)throw pt(mt.UNEXPECTED_ERROR);const a=this.$options;if(a.i18n){const n=a.i18n;if(a.__i18n&&(n.__i18n=a.__i18n),n.__root=c,this===this.$root)this.$i18n=Jt(e,n);else{n.__injectWithOption=!0,n.__extender=t.__vueI18nExtend,this.$i18n=It(n);const e=this.$i18n;e.__extender&&(e.__disposer=e.__extender(this.$i18n))}}else if(a.__i18n)if(this===this.$root)this.$i18n=Jt(e,a);else{this.$i18n=It({__i18n:a.__i18n,__injectWithOption:!0,__extender:t.__vueI18nExtend,__root:c});const e=this.$i18n;e.__extender&&(e.__disposer=e.__extender(this.$i18n))}else this.$i18n=e;a.__i18nGlobal&&yt(c,a,a),this.$t=(...e)=>this.$i18n.t(...e),this.$rt=(...e)=>this.$i18n.rt(...e),this.$tc=(...e)=>this.$i18n.tc(...e),this.$te=(e,c)=>this.$i18n.te(e,c),this.$d=(...e)=>this.$i18n.d(...e),this.$n=(...e)=>this.$i18n.n(...e),this.$tm=e=>this.$i18n.tm(e),t.__setInstance(n,this.$i18n)},mounted(){0},unmounted(){const e=(0,at.FN)();if(!e)throw pt(mt.UNEXPECTED_ERROR);const c=this.$i18n;delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,c.__disposer&&(c.__disposer(),delete c.__disposer,delete c.__extender),t.__deleteInstance(e),delete this.$i18n}}}function Jt(e,c){e.locale=c.locale||e.locale,e.fallbackLocale=c.fallbackLocale||e.fallbackLocale,e.missing=c.missing||e.missing,e.silentTranslationWarn=c.silentTranslationWarn||e.silentFallbackWarn,e.silentFallbackWarn=c.silentFallbackWarn||e.silentFallbackWarn,e.formatFallbackMessages=c.formatFallbackMessages||e.formatFallbackMessages,e.postTranslation=c.postTranslation||e.postTranslation,e.warnHtmlInMessage=c.warnHtmlInMessage||e.warnHtmlInMessage,e.escapeParameterHtml=c.escapeParameterHtml||e.escapeParameterHtml,e.sync=c.sync||e.sync,e.__composer[gt](c.pluralizationRules||e.pluralizationRules);const t=bt(e.locale,{messages:c.messages,__i18n:c.__i18n});return Object.keys(t).forEach((c=>e.mergeLocaleMessage(c,t[c]))),c.datetimeFormats&&Object.keys(c.datetimeFormats).forEach((t=>e.mergeDateTimeFormat(t,c.datetimeFormats[t]))),c.numberFormats&&Object.keys(c.numberFormats).forEach((t=>e.mergeNumberFormat(t,c.numberFormats[t]))),e}const Qt=a("global-vue-i18n");function en(e={},c){const t=__VUE_I18N_LEGACY_API__&&H(e.legacy)?e.legacy:__VUE_I18N_LEGACY_API__,n=!H(e.globalInjection)||e.globalInjection,i=!__VUE_I18N_LEGACY_API__||!t||!!e.allowComposition,r=new Map,[o,s]=tn(e,t),l=a("");function u(e){return r.get(e)||null}function f(e,c){r.set(e,c)}function d(e){r.delete(e)}{const e={get mode(){return __VUE_I18N_LEGACY_API__&&t?"legacy":"composition"},get allowComposition(){return i},async install(c,...a){if(c.__VUE_I18N_SYMBOL__=l,c.provide(c.__VUE_I18N_SYMBOL__,e),L(a[0])){const c=a[0];e.__composerExtend=c.__composerExtend,e.__vueI18nExtend=c.__vueI18nExtend}let i=null;!t&&n&&(i=mn(c,e.global)),__VUE_I18N_FULL_INSTALL__&&Kt(c,e,...a),__VUE_I18N_LEGACY_API__&&t&&c.mixin(Xt(s,s.__composer,e));const r=c.unmount;c.unmount=()=>{i&&i(),e.dispose(),r()}},get global(){return s},dispose(){o.stop()},__instances:r,__getInstance:u,__setInstance:f,__deleteInstance:d};return e}}function cn(e={}){const c=(0,at.FN)();if(null==c)throw pt(mt.MUST_BE_CALL_SETUP_TOP);if(!c.isCE&&null!=c.appContext.app&&!c.appContext.app.__VUE_I18N_SYMBOL__)throw pt(mt.NOT_INSTALLED);const t=nn(c),n=rn(t),a=Mt(c),i=an(e,a);if(__VUE_I18N_LEGACY_API__&&"legacy"===t.mode&&!e.__useComponent){if(!t.allowComposition)throw pt(mt.NOT_AVAILABLE_IN_LEGACY_MODE);return un(c,i,n,e)}if("global"===i)return yt(n,e,a),n;if("parent"===i){let a=on(t,c,e.__useComponent);return null==a&&(a=n),a}const r=t;let o=r.__getInstance(c);if(null==o){const t=f({},e);"__i18n"in a&&(t.__i18n=a.__i18n),n&&(t.__root=n),o=At(t),r.__composerExtend&&(o[Ht]=r.__composerExtend(o)),ln(r,c,o),r.__setInstance(c,o)}return o}function tn(e,c,t){const n=(0,it.B)();{const t=__VUE_I18N_LEGACY_API__&&c?n.run((()=>It(e))):n.run((()=>At(e)));if(null==t)throw pt(mt.UNEXPECTED_ERROR);return[n,t]}}function nn(e){{const c=(0,at.f3)(e.isCE?Qt:e.appContext.app.__VUE_I18N_SYMBOL__);if(!c)throw pt(e.isCE?mt.NOT_INSTALLED_WITH_PROVIDE:mt.UNEXPECTED_ERROR);return c}}function an(e,c){return u(e)?"__i18n"in c?"local":"global":e.useScope?e.useScope:"local"}function rn(e){return"composition"===e.mode?e.global:e.global.__composer}function on(e,c,t=!1){let n=null;const a=c.root;let i=sn(c,t);while(null!=i){const c=e;if("composition"===e.mode)n=c.__getInstance(i);else if(__VUE_I18N_LEGACY_API__){const e=c.__getInstance(i);null!=e&&(n=e.__composer,t&&n&&!n[Vt]&&(n=null))}if(null!=n)break;if(a===i)break;i=i.parent}return n}function sn(e,c=!1){return null==e?null:c&&e.vnode.ctx||e.parent}function ln(e,c,t){(0,at.bv)((()=>{0}),c),(0,at.Ah)((()=>{const n=t;e.__deleteInstance(c);const a=n[Ht];a&&(a(),delete n[Ht])}),c)}function un(e,c,t,n={}){const a="local"===c,i=(0,it.XI)(null);if(a&&e.proxy&&!e.proxy.$options.i18n&&!e.proxy.$options.__i18n)throw pt(mt.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);const r=H(n.inheritLocale)?n.inheritLocale:!V(n.locale),o=(0,it.iH)(!a||r?t.locale.value:V(n.locale)?n.locale:lc),s=(0,it.iH)(!a||r?t.fallbackLocale.value:V(n.fallbackLocale)||z(n.fallbackLocale)||L(n.fallbackLocale)||!1===n.fallbackLocale?n.fallbackLocale:o.value),u=(0,it.iH)(bt(o.value,n)),f=(0,it.iH)(L(n.datetimeFormats)?n.datetimeFormats:{[o.value]:{}}),d=(0,it.iH)(L(n.numberFormats)?n.numberFormats:{[o.value]:{}}),m=a?t.missingWarn:!H(n.missingWarn)&&!l(n.missingWarn)||n.missingWarn,p=a?t.fallbackWarn:!H(n.fallbackWarn)&&!l(n.fallbackWarn)||n.fallbackWarn,h=a?t.fallbackRoot:!H(n.fallbackRoot)||n.fallbackRoot,v=!!n.fallbackFormat,C=g(n.missing)?n.missing:null,b=g(n.postTranslation)?n.postTranslation:null,M=a?t.warnHtmlMessage:!H(n.warnHtmlMessage)||n.warnHtmlMessage,y=!!n.escapeParameter,x=a?t.modifiers:L(n.modifiers)?n.modifiers:{},w=n.pluralRules||a&&t.pluralRules;function S(){return[o.value,s.value,u.value,f.value,d.value]}const k=(0,at.Fl)({get:()=>i.value?i.value.locale.value:o.value,set:e=>{i.value&&(i.value.locale.value=e),o.value=e}}),N=(0,at.Fl)({get:()=>i.value?i.value.fallbackLocale.value:s.value,set:e=>{i.value&&(i.value.fallbackLocale.value=e),s.value=e}}),_=(0,at.Fl)((()=>i.value?i.value.messages.value:u.value)),A=(0,at.Fl)((()=>f.value)),E=(0,at.Fl)((()=>d.value));function I(){return i.value?i.value.getPostTranslationHandler():b}function T(e){i.value&&i.value.setPostTranslationHandler(e)}function P(){return i.value?i.value.getMissingHandler():C}function F(e){i.value&&i.value.setMissingHandler(e)}function O(e){return S(),e()}function R(...e){return i.value?O((()=>Reflect.apply(i.value.t,null,[...e]))):O((()=>""))}function D(...e){return i.value?Reflect.apply(i.value.rt,null,[...e]):""}function B(...e){return i.value?O((()=>Reflect.apply(i.value.d,null,[...e]))):O((()=>""))}function W(...e){return i.value?O((()=>Reflect.apply(i.value.n,null,[...e]))):O((()=>""))}function U(e){return i.value?i.value.tm(e):{}}function $(e,c){return!!i.value&&i.value.te(e,c)}function j(e){return i.value?i.value.getLocaleMessage(e):{}}function q(e,c){i.value&&(i.value.setLocaleMessage(e,c),u.value[e]=c)}function G(e,c){i.value&&i.value.mergeLocaleMessage(e,c)}function Y(e){return i.value?i.value.getDateTimeFormat(e):{}}function Z(e,c){i.value&&(i.value.setDateTimeFormat(e,c),f.value[e]=c)}function K(e,c){i.value&&i.value.mergeDateTimeFormat(e,c)}function X(e){return i.value?i.value.getNumberFormat(e):{}}function J(e,c){i.value&&(i.value.setNumberFormat(e,c),d.value[e]=c)}function Q(e,c){i.value&&i.value.mergeNumberFormat(e,c)}const ee={get id(){return i.value?i.value.id:-1},locale:k,fallbackLocale:N,messages:_,datetimeFormats:A,numberFormats:E,get inheritLocale(){return i.value?i.value.inheritLocale:r},set inheritLocale(e){i.value&&(i.value.inheritLocale=e)},get availableLocales(){return i.value?i.value.availableLocales:Object.keys(u.value)},get modifiers(){return i.value?i.value.modifiers:x},get pluralRules(){return i.value?i.value.pluralRules:w},get isGlobal(){return!!i.value&&i.value.isGlobal},get missingWarn(){return i.value?i.value.missingWarn:m},set missingWarn(e){i.value&&(i.value.missingWarn=e)},get fallbackWarn(){return i.value?i.value.fallbackWarn:p},set fallbackWarn(e){i.value&&(i.value.missingWarn=e)},get fallbackRoot(){return i.value?i.value.fallbackRoot:h},set fallbackRoot(e){i.value&&(i.value.fallbackRoot=e)},get fallbackFormat(){return i.value?i.value.fallbackFormat:v},set fallbackFormat(e){i.value&&(i.value.fallbackFormat=e)},get warnHtmlMessage(){return i.value?i.value.warnHtmlMessage:M},set warnHtmlMessage(e){i.value&&(i.value.warnHtmlMessage=e)},get escapeParameter(){return i.value?i.value.escapeParameter:y},set escapeParameter(e){i.value&&(i.value.escapeParameter=e)},t:R,getPostTranslationHandler:I,setPostTranslationHandler:T,getMissingHandler:P,setMissingHandler:F,rt:D,d:B,n:W,tm:U,te:$,getLocaleMessage:j,setLocaleMessage:q,mergeLocaleMessage:G,getDateTimeFormat:Y,setDateTimeFormat:Z,mergeDateTimeFormat:K,getNumberFormat:X,setNumberFormat:J,mergeNumberFormat:Q};function ce(e){e.locale.value=o.value,e.fallbackLocale.value=s.value,Object.keys(u.value).forEach((c=>{e.mergeLocaleMessage(c,u.value[c])})),Object.keys(f.value).forEach((c=>{e.mergeDateTimeFormat(c,f.value[c])})),Object.keys(d.value).forEach((c=>{e.mergeNumberFormat(c,d.value[c])})),e.escapeParameter=y,e.fallbackFormat=v,e.fallbackRoot=h,e.fallbackWarn=p,e.missingWarn=m,e.warnHtmlMessage=M}return(0,at.wF)((()=>{if(null==e.proxy||null==e.proxy.$i18n)throw pt(mt.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const t=i.value=e.proxy.$i18n.__composer;"global"===c?(o.value=t.locale.value,s.value=t.fallbackLocale.value,u.value=t.messages.value,f.value=t.datetimeFormats.value,d.value=t.numberFormats.value):a&&ce(t)})),ee}const fn=["locale","fallbackLocale","availableLocales"],dn=["t","rt","d","n","tm","te"];function mn(e,c){const t=Object.create(null);fn.forEach((e=>{const n=Object.getOwnPropertyDescriptor(c,e);if(!n)throw pt(mt.UNEXPECTED_ERROR);const a=(0,it.dq)(n.value)?{get(){return n.value.value},set(e){n.value.value=e}}:{get(){return n.get&&n.get()}};Object.defineProperty(t,e,a)})),e.config.globalProperties.$i18n=t,dn.forEach((t=>{const n=Object.getOwnPropertyDescriptor(c,t);if(!n||!n.value)throw pt(mt.UNEXPECTED_ERROR);Object.defineProperty(e.config.globalProperties,`$${t}`,n)}));const n=()=>{delete e.config.globalProperties.$i18n,dn.forEach((c=>{delete e.config.globalProperties[`$${c}`]}))};return n}if(ot(),__INTLIFY_JIT_COMPILATION__?vc(Oc):vc(Fc),zc(Ee),gc(nc),__INTLIFY_PROD_DEVTOOLS__){const e=m();e.__INTLIFY__=!0,$e(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}},2483:function(e,c,t){t.d(c,{PO:function(){return R},p7:function(){return cc}});t(560);var n=t(3396),a=t(4870);
/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
/**
 * WCAG 3.0 APCA perceptual contrast algorithm from https://github.com/Myndex/SAPC-APCA
 * @licence https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @see https://www.w3.org/WAI/GL/task-forces/silver/wiki/Visual_Contrast_of_Text_Subgroup
 */
const n=2.4,a=.2126729,i=.7151522,r=.072175,o=.55,s=.58,l=.57,u=.62,f=.03,d=1.45,m=5e-4,p=1.25,h=1.25,v=.078,z=12.82051282051282,g=.06,V=.001;function H(e,c){const t=(e.r/255)**n,H=(e.g/255)**n,C=(e.b/255)**n,b=(c.r/255)**n,M=(c.g/255)**n,y=(c.b/255)**n;let L,x=t*a+H*i+C*r,w=b*a+M*i+y*r;if(x<=f&&(x+=(f-x)**d),w<=f&&(w+=(f-w)**d),Math.abs(w-x)<m)return 0;if(w>x){const e=(w**o-x**s)*p;L=e<V?0:e<v?e-e*z*g:e-g}else{const e=(w**u-x**l)*h;L=e>-V?0:e>-v?e-e*z*g:e+g}return 100*L}var C=t(6033),b=t(131);const M=.20689655172413793,y=e=>e>M**3?Math.cbrt(e):e/(3*M**2)+4/29,L=e=>e>M?e**3:3*M**2*(e-4/29);function x(e){const c=y,t=c(e[1]);return[116*t-16,500*(c(e[0]/.95047)-t),200*(t-c(e[2]/1.08883))]}function w(e){const c=L,t=(e[0]+16)/116;return[.95047*c(t+e[1]/500),c(t),1.08883*c(t-e[2]/200)]}const S=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],k=e=>e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055,N=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],_=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4;function A(e){const c=Array(3),t=k,n=S;for(let a=0;a<3;++a)c[a]=Math.round(255*(0,b.uZ)(t(n[a][0]*e[0]+n[a][1]*e[1]+n[a][2]*e[2])));return{r:c[0],g:c[1],b:c[2]}}function E(e){let{r:c,g:t,b:n}=e;const a=[0,0,0],i=_,r=N;c=i(c/255),t=i(t/255),n=i(n/255);for(let o=0;o<3;++o)a[o]=r[o][0]*c+r[o][1]*t+r[o][2]*n;return a}function I(e){return!!e&&/^(#|var\(--|(rgb|hsl)a?\()/.test(e)}function T(e){return I(e)&&!/^((rgb|hsl)a?\()?var\(--/.test(e)}const P=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,F={rgb:(e,c,t,n)=>({r:e,g:c,b:t,a:n}),rgba:(e,c,t,n)=>({r:e,g:c,b:t,a:n}),hsl:(e,c,t,n)=>D({h:e,s:c,l:t,a:n}),hsla:(e,c,t,n)=>D({h:e,s:c,l:t,a:n}),hsv:(e,c,t,n)=>R({h:e,s:c,v:t,a:n}),hsva:(e,c,t,n)=>R({h:e,s:c,v:t,a:n})};function O(e){if("number"===typeof e)return(isNaN(e)||e<0||e>16777215)&&(0,C.Kd)(`'${e}' is not a valid hex color`),{r:(16711680&e)>>16,g:(65280&e)>>8,b:255&e};if("string"===typeof e&&P.test(e)){const{groups:c}=e.match(P),{fn:t,values:n}=c,a=n.split(/,\s*/).map((e=>e.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(t)?parseFloat(e)/100:parseFloat(e)));return F[t](...a)}if("string"===typeof e){let c=e.startsWith("#")?e.slice(1):e;[3,4].includes(c.length)?c=c.split("").map((e=>e+e)).join(""):[6,8].includes(c.length)||(0,C.Kd)(`'${e}' is not a valid hex(a) color`);const t=parseInt(c,16);return(isNaN(t)||t<0||t>4294967295)&&(0,C.Kd)(`'${e}' is not a valid hex(a) color`),Y(c)}if("object"===typeof e){if((0,b.e$)(e,["r","g","b"]))return e;if((0,b.e$)(e,["h","s","l"]))return R(U(e));if((0,b.e$)(e,["h","s","v"]))return R(e)}throw new TypeError(`Invalid color: ${null==e?e:String(e)||e.constructor.name}\nExpected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function R(e){const{h:c,s:t,v:n,a:a}=e,i=e=>{const a=(e+c/60)%6;return n-n*t*Math.max(Math.min(a,4-a,1),0)},r=[i(5),i(3),i(1)].map((e=>Math.round(255*e)));return{r:r[0],g:r[1],b:r[2],a:a}}function D(e){return R(U(e))}function B(e){if(!e)return{h:0,s:1,v:1,a:1};const c=e.r/255,t=e.g/255,n=e.b/255,a=Math.max(c,t,n),i=Math.min(c,t,n);let r=0;a!==i&&(a===c?r=60*(0+(t-n)/(a-i)):a===t?r=60*(2+(n-c)/(a-i)):a===n&&(r=60*(4+(c-t)/(a-i)))),r<0&&(r+=360);const o=0===a?0:(a-i)/a,s=[r,o,a];return{h:s[0],s:s[1],v:s[2],a:e.a}}function W(e){const{h:c,s:t,v:n,a:a}=e,i=n-n*t/2,r=1===i||0===i?0:(n-i)/Math.min(i,1-i);return{h:c,s:r,l:i,a:a}}function U(e){const{h:c,s:t,l:n,a:a}=e,i=n+t*Math.min(n,1-n),r=0===i?0:2-2*n/i;return{h:c,s:r,v:i,a:a}}function $(e){let{r:c,g:t,b:n,a:a}=e;return void 0===a?`rgb(${c}, ${t}, ${n})`:`rgba(${c}, ${t}, ${n}, ${a})`}function j(e){return $(R(e))}function q(e){const c=Math.round(e).toString(16);return("00".substr(0,2-c.length)+c).toUpperCase()}function G(e){let{r:c,g:t,b:n,a:a}=e;return`#${[q(c),q(t),q(n),void 0!==a?q(Math.round(255*a)):""].join("")}`}function Y(e){e=X(e);let[c,t,n,a]=(0,b.yo)(e,2).map((e=>parseInt(e,16)));return a=void 0===a?a:a/255,{r:c,g:t,b:n,a:a}}function Z(e){const c=Y(e);return B(c)}function K(e){return G(R(e))}function X(e){return e.startsWith("#")&&(e=e.slice(1)),e=e.replace(/([^0-9a-f])/gi,"F"),3!==e.length&&4!==e.length||(e=e.split("").map((e=>e+e)).join("")),6!==e.length&&(e=(0,b.qy)((0,b.qy)(e,6),8,"F")),e}function J(e,c){const t=x(E(e));return t[0]=t[0]+10*c,A(w(t))}function Q(e,c){const t=x(E(e));return t[0]=t[0]-10*c,A(w(t))}function ee(e){const c=O(e);return E(c)[1]}function ce(e,c){const t=ee(e),n=ee(c),a=Math.max(t,n),i=Math.min(t,n);return(a+.05)/(i+.05)}function te(e){const c=Math.abs(H(O(0),O(e))),t=Math.abs(H(O(16777215),O(e)));return t>Math.min(c,50)?"#fff":"#000"}},6033:function(e,c,t){t.d(c,{Kd:function(){return a},N6:function(){return i},Rn:function(){return r}});var n=t(3396);function a(e){(0,n.ZK)(`Vuetify: ${e}`)}function i(e){(0,n.ZK)(`Vuetify error: ${e}`)}function r(e,c){c=Array.isArray(c)?c.slice(0,-1).map((e=>`'${e}'`)).join(", ")+` or '${c.at(-1)}'`:`'${c}'`,(0,n.ZK)(`[Vuetify UPGRADE] '${e}' is deprecated, use ${c} instead.`)}},1107:function(e,c,t){t.d(c,{aZ:function(){return s},d4:function(){return u},ev:function(){return l}});var n=t(6107),a=t(3396),i=t(6033),r=t(131),o=t(3766);function s(e){if(e._setup=e._setup??e.setup,!e.name)return(0,i.Kd)("The component is missing an explicit name, unable to generate default prop value"),e;if(e._setup){e.props=(0,o.U)(e.props??{},e.name)();const c=Object.keys(e.props).filter((e=>"class"!==e&&"style"!==e));e.filterProps=function(e){return(0,r.ei)(e,c)},e.props._as=String,e.setup=function(c,t){const a=(0,n.Xz)();if(!a.value)return e._setup(c,t);const{props:i,provideSubDefaults:r}=(0,n.Vn)(c,c._as??e.name,a),o=e._setup(i,t);return r(),o}}return e}function l(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return c=>(e?s:a.aZ)(c)}function u(e,c){return c.props=e,c}},7514:function(e,c,t){t.d(c,{BL:function(){return r},FN:function(){return i},sq:function(){return l}});var n=t(3396),a=t(131);function i(e,c){const t=(0,n.FN)();if(!t)throw new Error(`[Vuetify] ${e} ${c||"must be called from inside a setup function"}`);return t}function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"composables";const c=i(e).type;return(0,a.mA)(c?.aliasName||c?.name)}let o=0,s=new WeakMap;function l(){const e=i("getUid");if(s.has(e))return s.get(e);{const c=o++;return s.set(e,c),c}}l.reset=()=>{o=0,s=new WeakMap}},2385:function(e,c,t){t.d(c,{BR:function(){return n},VB:function(){return r},cu:function(){return a},sR:function(){return i}});const n="undefined"!==typeof window,a=n&&"IntersectionObserver"in window,i=n&&("ontouchstart"in window||window.navigator.maxTouchPoints>0),r=n&&"EyeDropper"in window},131:function(e,c,t){t.d(c,{An:function(){return T},B0:function(){return te},CE:function(){return S},DC:function(){return X},Do:function(){return b},Ds:function(){return F},Ee:function(){return $},F7:function(){return _},FT:function(){return P},Kn:function(){return H},Ku:function(){return le},L7:function(){return re},M9:function(){return k},MT:function(){return g},Ob:function(){return w},PU:function(){return K},RA:function(){return j},S3:function(){return J},Sk:function(){return B},XE:function(){return U},XP:function(){return y},Y5:function(){return I},ZT:function(){return se},_g:function(){return ue},as:function(){return ce},bY:function(){return G},dc:function(){return ie},dr:function(){return ne},e$:function(){return L},ef:function(){return ae},ei:function(){return x},kb:function(){return V},keyValues:function(){return M},mA:function(){return q},oJ:function(){return ee},pC:function(){return R},q9:function(){return Q},qF:function(){return z},qy:function(){return D},uZ:function(){return O},vO:function(){return v},vX:function(){return C},vZ:function(){return h},xb:function(){return oe},yo:function(){return W}});t(560);var n=t(4870),a=t(3396),i=t(7139),r=t(2385);function o(e,c,t){s(e,c),c.set(e,t)}function s(e,c){if(c.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function l(e,c,t){var n=d(e,c,"set");return u(e,n,t),t}function u(e,c,t){if(c.set)c.set.call(e,t);else{if(!c.writable)throw new TypeError("attempted to set read only private field");c.value=t}}function f(e,c){var t=d(e,c,"get");return m(e,t)}function d(e,c,t){if(!c.has(e))throw new TypeError("attempted to "+t+" private field on non-instance");return c.get(e)}function m(e,c){return c.get?c.get.call(e):c.value}function p(e,c,t){const n=c.length-1;if(n<0)return void 0===e?t:e;for(let a=0;a<n;a++){if(null==e)return t;e=e[c[a]]}return null==e||void 0===e[c[n]]?t:e[c[n]]}function h(e,c){if(e===c)return!0;if(e instanceof Date&&c instanceof Date&&e.getTime()!==c.getTime())return!1;if(e!==Object(e)||c!==Object(c))return!1;const t=Object.keys(e);return t.length===Object.keys(c).length&&t.every((t=>h(e[t],c[t])))}function v(e,c,t){return null!=e&&c&&"string"===typeof c?void 0!==e[c]?e[c]:(c=c.replace(/\[(\w+)\]/g,".$1"),c=c.replace(/^\./,""),p(e,c.split("."),t)):t}function z(e,c,t){if(!0===c)return void 0===e?t:e;if(null==c||"boolean"===typeof c)return t;if(e!==Object(e)){if("function"!==typeof c)return t;const n=c(e,t);return"undefined"===typeof n?t:n}if("string"===typeof c)return v(e,c,t);if(Array.isArray(c))return p(e,c,t);if("function"!==typeof c)return t;const n=c(e,t);return"undefined"===typeof n?t:n}function g(e){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Array.from({length:e},((e,t)=>c+t))}function V(e){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"px";return null==e||""===e?void 0:isNaN(+e)?String(e):isFinite(+e)?`${Number(e)}${c}`:void 0}function H(e){return null!==e&&"object"===typeof e&&!Array.isArray(e)}function C(e){if(e&&"$el"in e){const c=e.$el;return c?.nodeType===Node.TEXT_NODE?c.nextElementSibling:c}return e}const b=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16}),M=Object.freeze({enter:"Enter",tab:"Tab",delete:"Delete",esc:"Escape",space:"Space",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",end:"End",home:"Home",del:"Delete",backspace:"Backspace",insert:"Insert",pageup:"PageUp",pagedown:"PageDown",shift:"Shift"});function y(e){return Object.keys(e)}function L(e,c){return c.every((c=>e.hasOwnProperty(c)))}function x(e,c){const t={},n=new Set(Object.keys(e));for(const a of c)n.has(a)&&(t[a]=e[a]);return t}function w(e,c,t){const n=Object.create(null),a=Object.create(null);for(const i in e)c.some((e=>e instanceof RegExp?e.test(i):e===i))&&!t?.some((e=>e===i))?n[i]=e[i]:a[i]=e[i];return[n,a]}function S(e,c){const t={...e};return c.forEach((e=>delete t[e])),t}function k(e,c){const t={};return c.forEach((c=>t[c]=e[c])),t}const N=/^on[^a-z]/,_=e=>N.test(e),A=["onAfterscriptexecute","onAnimationcancel","onAnimationend","onAnimationiteration","onAnimationstart","onAuxclick","onBeforeinput","onBeforescriptexecute","onChange","onClick","onCompositionend","onCompositionstart","onCompositionupdate","onContextmenu","onCopy","onCut","onDblclick","onFocusin","onFocusout","onFullscreenchange","onFullscreenerror","onGesturechange","onGestureend","onGesturestart","onGotpointercapture","onInput","onKeydown","onKeypress","onKeyup","onLostpointercapture","onMousedown","onMousemove","onMouseout","onMouseover","onMouseup","onMousewheel","onPaste","onPointercancel","onPointerdown","onPointerenter","onPointerleave","onPointermove","onPointerout","onPointerover","onPointerup","onReset","onSelect","onSubmit","onTouchcancel","onTouchend","onTouchmove","onTouchstart","onTransitioncancel","onTransitionend","onTransitionrun","onTransitionstart","onWheel"],E=["ArrowUp","ArrowDown","ArrowRight","ArrowLeft","Enter","Escape","Tab"," "];function I(e){return e.isComposing&&E.includes(e.key)}function T(e){const[c,t]=w(e,[N]),n=S(c,A),[a,i]=w(t,["class","style","id",/^data-/]);return Object.assign(a,c),Object.assign(i,n),[a,i]}function P(e){return null==e?[]:Array.isArray(e)?e:[e]}function F(e,c){let t=0;const a=function(){for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];clearTimeout(t),t=setTimeout((()=>e(...i)),(0,n.SU)(c))};return a.clear=()=>{clearTimeout(t)},a.immediate=e,a}function O(e){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return Math.max(c,Math.min(t,e))}function R(e){const c=e.toString().trim();return c.includes(".")?c.length-c.indexOf(".")-1:0}function D(e,c){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0";return e+t.repeat(Math.max(0,c-e.length))}function B(e,c){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0";return t.repeat(Math.max(0,c-e.length))+e}function W(e){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;const t=[];let n=0;while(n<e.length)t.push(e.substr(n,c)),n+=c;return t}function U(e){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;if(e<c)return`${e} B`;const t=1024===c?["Ki","Mi","Gi"]:["k","M","G"];let n=-1;while(Math.abs(e)>=c&&n<t.length-1)e/=c,++n;return`${e.toFixed(1)} ${t[n]}B`}function $(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0;const n={};for(const a in e)n[a]=e[a];for(const a in c){const i=e[a],r=c[a];H(i)&&H(r)?n[a]=$(i,r,t):Array.isArray(i)&&Array.isArray(r)&&t?n[a]=t(i,r):n[a]=r}return n}function j(e){return e.map((e=>e.type===a.HY?j(e.children):e)).flat()}function q(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(q.cache.has(e))return q.cache.get(e);const c=e.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return q.cache.set(e,c),c}function G(e,c){if(!c||"object"!==typeof c)return[];if(Array.isArray(c))return c.map((c=>G(e,c))).flat(1);if(Array.isArray(c.children))return c.children.map((c=>G(e,c))).flat(1);if(c.component){if(Object.getOwnPropertySymbols(c.component.provides).includes(e))return[c.component];if(c.component.subTree)return G(e,c.component.subTree).flat(1)}return[]}q.cache=new Map;var Y=new WeakMap,Z=new WeakMap;class K{constructor(e){o(this,Y,{writable:!0,value:[]}),o(this,Z,{writable:!0,value:0}),this.size=e}push(e){f(this,Y)[f(this,Z)]=e,l(this,Z,(f(this,Z)+1)%this.size)}values(){return f(this,Y).slice(f(this,Z)).concat(f(this,Y).slice(0,f(this,Z)))}}function X(e){return"touches"in e?{clientX:e.touches[0].clientX,clientY:e.touches[0].clientY}:{clientX:e.clientX,clientY:e.clientY}}function J(e){const c=(0,n.qj)({}),t=(0,a.Fl)(e);return(0,a.m0)((()=>{for(const e in t.value)c[e]=t.value[e]}),{flush:"sync"}),(0,n.BK)(c)}function Q(e,c){return e.includes(c)}function ee(e){return e[2].toLowerCase()+e.slice(3)}const ce=()=>[Function,Array];function te(e,c){return c="on"+(0,i.kC)(c),!!(e[c]||e[`${c}Once`]||e[`${c}Capture`]||e[`${c}OnceCapture`]||e[`${c}CaptureOnce`])}function ne(e){for(var c=arguments.length,t=new Array(c>1?c-1:0),n=1;n<c;n++)t[n-1]=arguments[n];if(Array.isArray(e))for(const a of e)a(...t);else"function"===typeof e&&e(...t)}function ae(e){let c=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const t=["button","[href]",'input:not([type="hidden"])',"select","textarea","[tabindex]"].map((e=>`${e}${c?':not([tabindex="-1"])':""}:not([disabled])`)).join(", ");return[...e.querySelectorAll(t)]}function ie(e,c,t){let n,a=e.indexOf(document.activeElement);const i="next"===c?1:-1;do{a+=i,n=e[a]}while((!n||null==n.offsetParent||!(t?.(n)??1))&&a<e.length&&a>=0);return n}function re(e,c){const t=ae(e);if(c)if("first"===c)t[0]?.focus();else if("last"===c)t.at(-1)?.focus();else if("number"===typeof c)t[c]?.focus();else{const n=ie(t,c);n?n.focus():re(e,"next"===c?"first":"last")}else e!==document.activeElement&&e.contains(document.activeElement)||t[0]?.focus()}function oe(e){return null===e||void 0===e||"string"===typeof e&&""===e.trim()}function se(){}function le(e,c){const t=r.BR&&"undefined"!==typeof CSS&&"undefined"!==typeof CSS.supports&&CSS.supports(`selector(${c})`);if(!t)return null;try{return!!e&&e.matches(c)}catch(n){return null}}function ue(e){return e.some((e=>!(0,a.lA)(e)||e.type!==a.sv&&(e.type!==a.HY||ue(e.children))))?e:null}},3766:function(e,c,t){function n(e,c){return t=>Object.keys(e).reduce(((n,a)=>{const i="object"===typeof e[a]&&null!=e[a]&&!Array.isArray(e[a]),r=i?e[a]:{type:e[a]};return n[a]=t&&a in t?{...r,default:t[a]}:r,c&&!n[a].source&&(n[a].source=c),n}),{})}t.d(c,{U:function(){return n}})}}]);
//# sourceMappingURL=chunk-vendors.7b05576f.js.map