(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"00ee":function(t,e,n){var r=n("b622"),i=r("toStringTag"),o={};o[i]="z",t.exports="[object z]"===String(o)},"00fd":function(t,e,n){var r=n("9e69"),i=Object.prototype,o=i.hasOwnProperty,s=i.toString,a=r?r.toStringTag:void 0;function c(t){var e=o.call(t,a),n=t[a];try{t[a]=void 0;var r=!0}catch(c){}var i=s.call(t);return r&&(e?t[a]=n:delete t[a]),i}t.exports=c},"0366":function(t,e,n){var r=n("1c0b");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},"057f":function(t,e,n){var r=n("fc6a"),i=n("241c").f,o={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return i(t)}catch(e){return s.slice()}};t.exports.f=function(t){return s&&"[object Window]"==o.call(t)?a(t):i(r(t))}},"06c5":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("a630"),n("fb6a"),n("b0c0"),n("d3b7"),n("25f0"),n("3ca3");var r=n("6b75");function i(t,e){if(t){if("string"===typeof t)return Object(r["a"])(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r["a"])(t,e):void 0}}},"06cf":function(t,e,n){var r=n("83ab"),i=n("d1e7"),o=n("5c6c"),s=n("fc6a"),a=n("c04e"),c=n("5135"),u=n("0cfb"),l=Object.getOwnPropertyDescriptor;e.f=r?l:function(t,e){if(t=s(t),e=a(e,!0),u)try{return l(t,e)}catch(n){}if(c(t,e))return o(!i.f.call(t,e),t[e])}},"0829":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return Sa})),n.d(e,"b",(function(){return ss})),n.d(e,"c",(function(){return as})),n.d(e,"d",(function(){return ma})),n.d(e,"e",(function(){return ya})),n.d(e,"f",(function(){return hs})),n.d(e,"g",(function(){return Ia})),n.d(e,"h",(function(){return oa})),n.d(e,"i",(function(){return _a})),n.d(e,"j",(function(){return ra})),n.d(e,"k",(function(){return Zs})),n.d(e,"l",(function(){return Ta})),n.d(e,"m",(function(){return ba})),n.d(e,"n",(function(){return aa})),n.d(e,"o",(function(){return wa})),n.d(e,"p",(function(){return ea})),n.d(e,"q",(function(){return Aa}));var r=n("589b"),i=n("22e5"),o=n("b9dd"),s=n("90e2"),a=n("8f6b");const c="@firebase/firestore";
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
 */class u{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}u.UNAUTHENTICATED=new u(null),u.GOOGLE_CREDENTIALS=new u("google-credentials-uid"),u.FIRST_PARTY=new u("first-party-uid"),u.MOCK_USER=new u("mock-user");
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
let l="9.6.7";
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
 */const h=new o["b"]("@firebase/firestore");function f(){return h.logLevel}function d(t,...e){if(h.logLevel<=o["a"].DEBUG){const n=e.map(m);h.debug(`Firestore (${l}): ${t}`,...n)}}function p(t,...e){if(h.logLevel<=o["a"].ERROR){const n=e.map(m);h.error(`Firestore (${l}): ${t}`,...n)}}function g(t,...e){if(h.logLevel<=o["a"].WARN){const n=e.map(m);h.warn(`Firestore (${l}): ${t}`,...n)}}function m(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
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
 */var e}
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
 */function v(t="Unexpected state"){const e=`FIRESTORE (${l}) INTERNAL ASSERTION FAILED: `+t;throw p(e),new Error(e)}function y(t,e){t||v()}function b(t,e){return t}
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
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _ extends s["a"]{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class O{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
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
 */class E{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer "+t)}}class T{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(u.UNAUTHENTICATED))}shutdown(){}}class S{constructor(t){this.t=t,this.currentUser=u.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new O;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new O,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const e=i;t.enqueueRetryable(async()=>{await e.promise,await r(this.currentUser)})},s=t=>{d("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(t=>s(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?s(t):(d("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new O)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(d("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(y("string"==typeof e.accessToken),new E(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return y(null===t||"string"==typeof t),new u(t)}}class I{constructor(t,e,n){this.type="FirstParty",this.user=u.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const r=t.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class A{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new I(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable(()=>e(u.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class k{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class C{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,e){const n=t=>{null!=t.error&&d("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: "+t.error.message);const n=t.token!==this.p;return this.p=t.token,d("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable(()=>n(e))};const r=t=>{d("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit(t=>r(t)),setTimeout(()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?r(t):d("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(t=>t?(y("string"==typeof t.token),this.p=t.token,new k(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
 */
class x{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.I(t),this.T=t=>e.writeSequenceNumber(t))}I(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}
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
 */function j(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
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
 */x.A=-1;class N{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=j(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function R(t,e){return t<e?-1:t>e?1:0}function D(t,e,n){return t.length===e.length&&t.every((t,r)=>n(t,e[r]))}
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
class M{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new _(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new _(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new _(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new _(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return M.fromMillis(Date.now())}static fromDate(t){return M.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new M(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?R(this.nanoseconds,t.nanoseconds):R(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class P{constructor(t){this.timestamp=t}static fromTimestamp(t){return new P(t)}static min(){return new P(new M(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */function L(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function V(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function U(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
 */class F{constructor(t,e,n){void 0===e?e=0:e>t.length&&v(),void 0===n?n=t.length-e:n>t.length-e&&v(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===F.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof F?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class B extends F{construct(t,e,n){return new B(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new _(w.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new B(e)}static emptyPath(){return new B([])}}const $=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class q extends F{construct(t,e,n){return new q(t,e,n)}static isValidIdentifier(t){return $.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),q.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new q(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new _(w.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let o=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new _(w.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new _(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(o=!o,r++):"."!==e||o?(n+=e,r++):(i(),r++)}if(i(),o)throw new _(w.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new q(e)}static emptyPath(){return new q([])}}
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
 */class H{constructor(t){this.fields=t,t.sort(q.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return D(this.fields,t.fields,(t,e)=>t.isEqual(e))}}
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
class z{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new z(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new z(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return R(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}z.EMPTY_BYTE_STRING=new z("");const W=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function G(t){if(y(!!t),"string"==typeof t){let e=0;const n=W.exec(t);if(y(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:K(t.seconds),nanos:K(t.nanos)}}function K(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Y(t){return"string"==typeof t?z.fromBase64String(t):z.fromUint8Array(t)}
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
 */function X(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function J(t){const e=t.mapValue.fields.__previous_value__;return X(e)?J(e):e}function Q(t){const e=G(t.mapValue.fields.__local_write_time__.timestampValue);return new M(e.seconds,e.nanos)}
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
 */class Z{constructor(t,e,n,r,i,o,s,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=s,this.useFetchStreams=a}}class tt{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new tt("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof tt&&t.projectId===this.projectId&&t.database===this.database}}
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
 */function et(t){return null==t}function nt(t){return 0===t&&1/t==-1/0}function rt(t){return"number"==typeof t&&Number.isInteger(t)&&!nt(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
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
 */class it{constructor(t){this.path=t}static fromPath(t){return new it(B.fromString(t))}static fromName(t){return new it(B.fromString(t).popFirst(5))}static empty(){return new it(B.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===B.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return B.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new it(new B(t.slice()))}}
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
 */const ot={mapValue:{fields:{__type__:{stringValue:"__max___"}}}};function st(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?X(t)?4:10:v()}function at(t,e){if(t===e)return!0;const n=st(t);if(n!==st(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Q(t).isEqual(Q(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=G(t.timestampValue),r=G(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Y(t.bytesValue).isEqual(Y(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return K(t.geoPointValue.latitude)===K(e.geoPointValue.latitude)&&K(t.geoPointValue.longitude)===K(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return K(t.integerValue)===K(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=K(t.doubleValue),r=K(e.doubleValue);return n===r?nt(n)===nt(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return D(t.arrayValue.values||[],e.arrayValue.values||[],at);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(L(n)!==L(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!at(n[i],r[i])))return!1;return!0}(t,e);default:return v()}}function ct(t,e){return void 0!==(t.values||[]).find(t=>at(t,e))}function ut(t,e){if(t===e)return 0;const n=st(t),r=st(e);if(n!==r)return R(n,r);switch(n){case 0:return 0;case 1:return R(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=K(t.integerValue||t.doubleValue),r=K(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return lt(t.timestampValue,e.timestampValue);case 4:return lt(Q(t),Q(e));case 5:return R(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Y(t),r=Y(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=R(n[i],r[i]);if(0!==t)return t}return R(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=R(K(t.latitude),K(e.latitude));return 0!==n?n:R(K(t.longitude),K(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=ut(n[i],r[i]);if(t)return t}return R(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},r=Object.keys(n),i=e.fields||{},o=Object.keys(i);r.sort(),o.sort();for(let s=0;s<r.length&&s<o.length;++s){const t=R(r[s],o[s]);if(0!==t)return t;const e=ut(n[r[s]],i[o[s]]);if(0!==e)return e}return R(r.length,o.length)}(t.mapValue,e.mapValue);default:throw v()}}function lt(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return R(t,e);const n=G(t),r=G(e),i=R(n.seconds,r.seconds);return 0!==i?i:R(n.nanos,r.nanos)}function ht(t){return ft(t)}function ft(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=G(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Y(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,it.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=ft(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${ft(t.fields[i])}`;return n+"}"}(t.mapValue):v();var e,n}function dt(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function pt(t){return!!t&&"integerValue"in t}function gt(t){return!!t&&"arrayValue"in t}function mt(t){return!!t&&"nullValue"in t}function vt(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function yt(t){return!!t&&"mapValue"in t}function bt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return V(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=bt(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=bt(t.arrayValue.values[n]);return e}return Object.assign({},t)}
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
 */class wt{constructor(t){this.value=t}static empty(){return new wt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!yt(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=bt(e)}setAll(t){let e=q.emptyPath(),n={},r=[];t.forEach((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=bt(t):r.push(i.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());yt(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return at(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];yt(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){V(e,(e,n)=>t[e]=n);for(const r of n)delete t[r]}clone(){return new wt(bt(this.value))}}function _t(t){const e=[];return V(t.fields,(t,n)=>{const r=new q([t]);if(yt(n)){const t=_t(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)}),new H(e)
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
 */}class Ot{constructor(t,e,n,r,i,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(t){return new Ot(t,0,P.min(),P.min(),wt.empty(),0)}static newFoundDocument(t,e,n){return new Ot(t,1,e,P.min(),n,0)}static newNoDocument(t,e){return new Ot(t,2,e,P.min(),wt.empty(),0)}static newUnknownDocument(t,e){return new Ot(t,3,e,P.min(),wt.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Ot&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ot(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class Et{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}Et.UNKNOWN_ID=-1;
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
class Tt{constructor(t,e=null,n=[],r=[],i=null,o=null,s=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=o,this.endAt=s,this.P=null}}function St(t,e=null,n=[],r=[],i=null,o=null,s=null){return new Tt(t,e,n,r,i,o,s)}function It(t){const e=b(t);if(null===e.P){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>{return(e=t).field.canonicalString()+e.op.toString()+ht(e.value);var e}).join(","),t+="|ob:",t+=e.orderBy.map(t=>function(t){return t.field.canonicalString()+t.dir}(t)).join(","),et(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(t=>ht(t)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(t=>ht(t)).join(",")),e.P=t}return e.P}function At(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>{return`${(e=t).field.canonicalString()} ${e.op} ${ht(e.value)}`;var e}).join(", ")}]`),et(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(t=>ht(t)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(t=>ht(t)).join(",")),`Target(${e})`}function kt(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!Bt(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!at(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!qt(t.startAt,e.startAt)&&qt(t.endAt,e.endAt)}function Ct(t){return it.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class xt extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.v(t,e,n):new jt(t,e,n):"array-contains"===e?new Mt(t,n):"in"===e?new Pt(t,n):"not-in"===e?new Lt(t,n):"array-contains-any"===e?new Vt(t,n):new xt(t,e,n)}static v(t,e,n){return"in"===e?new Nt(t,n):new Rt(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.V(ut(e,this.value)):null!==e&&st(this.value)===st(e)&&this.V(ut(e,this.value))}V(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return v()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class jt extends xt{constructor(t,e,n){super(t,e,n),this.key=it.fromName(n.referenceValue)}matches(t){const e=it.comparator(t.key,this.key);return this.V(e)}}class Nt extends xt{constructor(t,e){super(t,"in",e),this.keys=Dt("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Rt extends xt{constructor(t,e){super(t,"not-in",e),this.keys=Dt("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Dt(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>it.fromName(t.referenceValue))}class Mt extends xt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return gt(e)&&ct(e.arrayValue,this.value)}}class Pt extends xt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&ct(this.value.arrayValue,e)}}class Lt extends xt{constructor(t,e){super(t,"not-in",e)}matches(t){if(ct(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!ct(this.value.arrayValue,e)}}class Vt extends xt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!gt(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>ct(this.value.arrayValue,t))}}class Ut{constructor(t,e){this.position=t,this.inclusive=e}}class Ft{constructor(t,e="asc"){this.field=t,this.dir=e}}function Bt(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function $t(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(r=o.field.isKeyField()?it.comparator(it.fromName(s.referenceValue),n.key):ut(s,n.data.field(o.field)),"desc"===o.dir&&(r*=-1),0!==r)break}return r}function qt(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!at(t.position[n],e.position[n]))return!1;return!0}
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
 */class Ht{constructor(t,e=null,n=[],r=[],i=null,o="F",s=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=o,this.startAt=s,this.endAt=a,this.D=null,this.C=null,this.startAt,this.endAt}}function zt(t,e,n,r,i,o,s,a){return new Ht(t,e,n,r,i,o,s,a)}function Wt(t){return new Ht(t)}function Gt(t){return!et(t.limit)&&"F"===t.limitType}function Kt(t){return!et(t.limit)&&"L"===t.limitType}function Yt(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Xt(t){for(const e of t.filters)if(e.S())return e.field;return null}function Jt(t){return null!==t.collectionGroup}function Qt(t){const e=b(t);if(null===e.D){e.D=[];const t=Xt(e),n=Yt(e);if(null!==t&&null===n)t.isKeyField()||e.D.push(new Ft(t)),e.D.push(new Ft(q.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.D.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new Ft(q.keyField(),t))}}}return e.D}function Zt(t){const e=b(t);if(!e.C)if("F"===e.limitType)e.C=St(e.path,e.collectionGroup,Qt(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of Qt(e)){const e="desc"===i.dir?"asc":"desc";t.push(new Ft(i.field,e))}const n=e.endAt?new Ut(e.endAt.position,!e.endAt.inclusive):null,r=e.startAt?new Ut(e.startAt.position,!e.startAt.inclusive):null;e.C=St(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.C}function te(t,e,n){return new Ht(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ee(t,e){return kt(Zt(t),Zt(e))&&t.limitType===e.limitType}function ne(t){return`${It(Zt(t))}|lt:${t.limitType}`}function re(t){return`Query(target=${At(Zt(t))}; limitType=${t.limitType})`}function ie(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):it.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=$t(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,Qt(t),e))&&!(t.endAt&&!function(t,e,n){const r=$t(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,Qt(t),e))}(t,e)}function oe(t){return(e,n)=>{let r=!1;for(const i of Qt(t)){const t=se(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function se(t,e,n){const r=t.field.isKeyField()?it.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?ut(r,i):v()}
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
 */(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return v()}}
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
 */function ae(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:nt(e)?"-0":e}}function ce(t){return{integerValue:""+t}}function ue(t,e){return rt(e)?ce(e):ae(t,e)}
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
 */class le{constructor(){this._=void 0}}function he(t,e,n){return t instanceof pe?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof ge?me(t,e):t instanceof ve?ye(t,e):function(t,e){const n=de(t,e),r=we(n)+we(t.k);return pt(n)&&pt(t.k)?ce(r):ae(t.O,r)}(t,e)}function fe(t,e,n){return t instanceof ge?me(t,e):t instanceof ve?ye(t,e):n}function de(t,e){return t instanceof be?pt(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class pe extends le{}class ge extends le{constructor(t){super(),this.elements=t}}function me(t,e){const n=_e(e);for(const r of t.elements)n.some(t=>at(t,r))||n.push(r);return{arrayValue:{values:n}}}class ve extends le{constructor(t){super(),this.elements=t}}function ye(t,e){let n=_e(e);for(const r of t.elements)n=n.filter(t=>!at(t,r));return{arrayValue:{values:n}}}class be extends le{constructor(t,e){super(),this.O=t,this.k=e}}function we(t){return K(t.integerValue||t.doubleValue)}function _e(t){return gt(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
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
 */class Oe{constructor(t,e){this.field=t,this.transform=e}}function Ee(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof ge&&e instanceof ge||t instanceof ve&&e instanceof ve?D(t.elements,e.elements,at):t instanceof be&&e instanceof be?at(t.k,e.k):t instanceof pe&&e instanceof pe}(t.transform,e.transform)}class Te{constructor(t,e){this.version=t,this.transformResults=e}}class Se{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Se}static exists(t){return new Se(void 0,t)}static updateTime(t){return new Se(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ie(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Ae{}function ke(t,e,n){t instanceof Re?function(t,e,n){const r=t.value.clone(),i=Pe(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof De?function(t,e,n){if(!Ie(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=Pe(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Me(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Ce(t,e,n){t instanceof Re?function(t,e,n){if(!Ie(t.precondition,e))return;const r=t.value.clone(),i=Le(t.fieldTransforms,n,e);r.setAll(i),e.convertToFoundDocument(Ne(e),r).setHasLocalMutations()}(t,e,n):t instanceof De?function(t,e,n){if(!Ie(t.precondition,e))return;const r=Le(t.fieldTransforms,n,e),i=e.data;i.setAll(Me(t)),i.setAll(r),e.convertToFoundDocument(Ne(e),i).setHasLocalMutations()}(t,e,n):function(t,e){Ie(t.precondition,e)&&e.convertToNoDocument(P.min())}(t,e)}function xe(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=de(r.transform,t||null);null!=i&&(null==n&&(n=wt.empty()),n.set(r.field,i))}return n||null}function je(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&D(t,e,(t,e)=>Ee(t,e))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Ne(t){return t.isFoundDocument()?t.version:P.min()}class Re extends Ae{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}}class De extends Ae{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Me(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Pe(t,e,n){const r=new Map;y(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,a=e.data.field(o.field);r.set(o.field,fe(s,a,n[i]))}return r}function Le(t,e,n){const r=new Map;for(const i of t){const t=i.transform,o=n.data.field(i.field);r.set(i.field,he(t,o,e))}return r}class Ve extends Ae{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class Ue extends Ae{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
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
 */class Fe{constructor(t){this.count=t}}
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
 */var Be,$e;function qe(t){switch(t){default:return v();case w.CANCELLED:case w.UNKNOWN:case w.DEADLINE_EXCEEDED:case w.RESOURCE_EXHAUSTED:case w.INTERNAL:case w.UNAVAILABLE:case w.UNAUTHENTICATED:return!1;case w.INVALID_ARGUMENT:case w.NOT_FOUND:case w.ALREADY_EXISTS:case w.PERMISSION_DENIED:case w.FAILED_PRECONDITION:case w.ABORTED:case w.OUT_OF_RANGE:case w.UNIMPLEMENTED:case w.DATA_LOSS:return!0}}function He(t){if(void 0===t)return p("GRPC error has no .code"),w.UNKNOWN;switch(t){case Be.OK:return w.OK;case Be.CANCELLED:return w.CANCELLED;case Be.UNKNOWN:return w.UNKNOWN;case Be.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case Be.INTERNAL:return w.INTERNAL;case Be.UNAVAILABLE:return w.UNAVAILABLE;case Be.UNAUTHENTICATED:return w.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case Be.NOT_FOUND:return w.NOT_FOUND;case Be.ALREADY_EXISTS:return w.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return w.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case Be.ABORTED:return w.ABORTED;case Be.OUT_OF_RANGE:return w.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return w.UNIMPLEMENTED;case Be.DATA_LOSS:return w.DATA_LOSS;default:return v()}}($e=Be||(Be={}))[$e.OK=0]="OK",$e[$e.CANCELLED=1]="CANCELLED",$e[$e.UNKNOWN=2]="UNKNOWN",$e[$e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$e[$e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$e[$e.NOT_FOUND=5]="NOT_FOUND",$e[$e.ALREADY_EXISTS=6]="ALREADY_EXISTS",$e[$e.PERMISSION_DENIED=7]="PERMISSION_DENIED",$e[$e.UNAUTHENTICATED=16]="UNAUTHENTICATED",$e[$e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$e[$e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$e[$e.ABORTED=10]="ABORTED",$e[$e.OUT_OF_RANGE=11]="OUT_OF_RANGE",$e[$e.UNIMPLEMENTED=12]="UNIMPLEMENTED",$e[$e.INTERNAL=13]="INTERNAL",$e[$e.UNAVAILABLE=14]="UNAVAILABLE",$e[$e.DATA_LOSS=15]="DATA_LOSS";
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
class ze{constructor(t,e){this.comparator=t,this.root=e||Ge.EMPTY}insert(t,e){return new ze(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Ge.BLACK,null,null))}remove(t){return new ze(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ge.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new We(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new We(this.root,t,this.comparator,!1)}getReverseIterator(){return new We(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new We(this.root,t,this.comparator,!0)}}class We{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ge{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:Ge.RED,this.left=null!=r?r:Ge.EMPTY,this.right=null!=i?i:Ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new Ge(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ge.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Ge.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw v();if(this.right.isRed())throw v();const t=this.left.check();if(t!==this.right.check())throw v();return t+(this.isRed()?0:1)}}Ge.EMPTY=null,Ge.RED=!0,Ge.BLACK=!1,Ge.EMPTY=new class{constructor(){this.size=0}get key(){throw v()}get value(){throw v()}get color(){throw v()}get left(){throw v()}get right(){throw v()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Ge(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class Ke{constructor(t){this.comparator=t,this.data=new ze(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ye(this.data.getIterator())}getIteratorFrom(t){return new Ye(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof Ke))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Ke(this.comparator);return e.data=t,e}}class Ye{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
const Xe=new ze(it.comparator);function Je(){return Xe}const Qe=new ze(it.comparator);function Ze(){return Qe}const tn=new ze(it.comparator),en=new Ke(it.comparator);function nn(...t){let e=en;for(const n of t)e=e.add(n);return e}const rn=new Ke(R);function on(){return rn}
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
 */class sn{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,an.createSynthesizedTargetChangeForCurrentChange(t,e)),new sn(P.min(),n,on(),Je(),nn())}}class an{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new an(z.EMPTY_BYTE_STRING,e,nn(),nn(),nn())}}
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
 */class cn{constructor(t,e,n,r){this.M=t,this.removedTargetIds=e,this.key=n,this.$=r}}class un{constructor(t,e){this.targetId=t,this.F=e}}class ln{constructor(t,e,n=z.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class hn{constructor(){this.B=0,this.L=pn(),this.U=z.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return 0!==this.B}get j(){return this.K}W(t){t.approximateByteSize()>0&&(this.K=!0,this.U=t)}H(){let t=nn(),e=nn(),n=nn();return this.L.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:v()}}),new an(this.U,this.q,t,e,n)}J(){this.K=!1,this.L=pn()}Y(t,e){this.K=!0,this.L=this.L.insert(t,e)}X(t){this.K=!0,this.L=this.L.remove(t)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class fn{constructor(t){this.nt=t,this.st=new Map,this.it=Je(),this.rt=dn(),this.ot=new Ke(R)}ct(t){for(const e of t.M)t.$&&t.$.isFoundDocument()?this.ut(e,t.$):this.at(e,t.key,t.$);for(const e of t.removedTargetIds)this.at(e,t.key,t.$)}ht(t){this.forEachTarget(t,e=>{const n=this.lt(e);switch(t.state){case 0:this.ft(e)&&n.W(t.resumeToken);break;case 1:n.tt(),n.G||n.J(),n.W(t.resumeToken);break;case 2:n.tt(),n.G||this.removeTarget(e);break;case 3:this.ft(e)&&(n.et(),n.W(t.resumeToken));break;case 4:this.ft(e)&&(this.dt(e),n.W(t.resumeToken));break;default:v()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.st.forEach((t,n)=>{this.ft(n)&&e(n)})}_t(t){const e=t.targetId,n=t.F.count,r=this.wt(e);if(r){const t=r.target;if(Ct(t))if(0===n){const n=new it(t.path);this.at(e,n,Ot.newNoDocument(n,P.min()))}else y(1===n);else this.gt(e)!==n&&(this.dt(e),this.ot=this.ot.add(e))}}yt(t){const e=new Map;this.st.forEach((n,r)=>{const i=this.wt(r);if(i){if(n.current&&Ct(i.target)){const e=new it(i.target.path);null!==this.it.get(e)||this.It(r,e)||this.at(r,e,Ot.newNoDocument(e,t))}n.j&&(e.set(r,n.H()),n.J())}});let n=nn();this.rt.forEach((t,e)=>{let r=!0;e.forEachWhile(t=>{const e=this.wt(t);return!e||2===e.purpose||(r=!1,!1)}),r&&(n=n.add(t))}),this.it.forEach((e,n)=>n.setReadTime(t));const r=new sn(t,e,this.ot,this.it,n);return this.it=Je(),this.rt=dn(),this.ot=new Ke(R),r}ut(t,e){if(!this.ft(t))return;const n=this.It(t,e.key)?2:0;this.lt(t).Y(e.key,n),this.it=this.it.insert(e.key,e),this.rt=this.rt.insert(e.key,this.Et(e.key).add(t))}at(t,e,n){if(!this.ft(t))return;const r=this.lt(t);this.It(t,e)?r.Y(e,1):r.X(e),this.rt=this.rt.insert(e,this.Et(e).delete(t)),n&&(this.it=this.it.insert(e,n))}removeTarget(t){this.st.delete(t)}gt(t){const e=this.lt(t).H();return this.nt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Z(t){this.lt(t).Z()}lt(t){let e=this.st.get(t);return e||(e=new hn,this.st.set(t,e)),e}Et(t){let e=this.rt.get(t);return e||(e=new Ke(R),this.rt=this.rt.insert(t,e)),e}ft(t){const e=null!==this.wt(t);return e||d("WatchChangeAggregator","Detected inactive target",t),e}wt(t){const e=this.st.get(t);return e&&e.G?null:this.nt.Tt(t)}dt(t){this.st.set(t,new hn),this.nt.getRemoteKeysForTarget(t).forEach(e=>{this.at(t,e,null)})}It(t,e){return this.nt.getRemoteKeysForTarget(t).has(e)}}function dn(){return new ze(it.comparator)}function pn(){return new ze(it.comparator)}
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
 */const gn=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),mn=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class vn{constructor(t,e){this.databaseId=t,this.N=e}}function yn(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bn(t,e){return t.N?e.toBase64():e.toUint8Array()}function wn(t,e){return yn(t,e.toTimestamp())}function _n(t){return y(!!t),P.fromTimestamp(function(t){const e=G(t);return new M(e.seconds,e.nanos)}(t))}function On(t,e){return function(t){return new B(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function En(t){const e=B.fromString(t);return y(Wn(e)),e}function Tn(t,e){return On(t.databaseId,e.path)}function Sn(t,e){const n=En(e);if(n.get(1)!==t.databaseId.projectId)throw new _(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new _(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new it(Cn(n))}function In(t,e){return On(t.databaseId,e)}function An(t){const e=En(t);return 4===e.length?B.emptyPath():Cn(e)}function kn(t){return new B(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Cn(t){return y(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function xn(t,e,n){return{name:Tn(t,e),fields:n.value.mapValue.fields}}function jn(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:v()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(t,e){return t.N?(y(void 0===e||"string"==typeof e),z.fromBase64String(e||"")):(y(void 0===e||e instanceof Uint8Array),z.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,a=s&&function(t){const e=void 0===t.code?w.UNKNOWN:He(t.code);return new _(e,t.message||"")}(s);n=new ln(r,i,o,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Sn(t,r.document.name),o=_n(r.document.updateTime),s=new wt({mapValue:{fields:r.document.fields}}),a=Ot.newFoundDocument(i,o,s),c=r.targetIds||[],u=r.removedTargetIds||[];n=new cn(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Sn(t,r.document),o=r.readTime?_n(r.readTime):P.min(),s=Ot.newNoDocument(i,o),a=r.removedTargetIds||[];n=new cn([],a,s.key,s)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Sn(t,r.document),o=r.removedTargetIds||[];n=new cn([],o,i,null)}else{if(!("filter"in e))return v();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,i=new Fe(r),o=t.targetId;n=new un(o,i)}}return n}function Nn(t,e){let n;if(e instanceof Re)n={update:xn(t,e.key,e.value)};else if(e instanceof Ve)n={delete:Tn(t,e.key)};else if(e instanceof De)n={update:xn(t,e.key,e.data),updateMask:zn(e.fieldMask)};else{if(!(e instanceof Ue))return v();n={verify:Tn(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(t=>function(t,e){const n=e.transform;if(n instanceof pe)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof ge)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof ve)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof be)return{fieldPath:e.field.canonicalString(),increment:n.k};throw v()}(0,t))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:wn(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:v()}(t,e.precondition)),n}function Rn(t,e){return t&&t.length>0?(y(void 0!==e),t.map(t=>function(t,e){let n=t.updateTime?_n(t.updateTime):_n(e);return n.isEqual(P.min())&&(n=_n(e)),new Te(n,t.transformResults||[])}(t,e))):[]}function Dn(t,e){return{documents:[In(t,e.path)]}}function Mn(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=In(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=In(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map(t=>function(t){if("=="===t.op){if(vt(t.value))return{unaryFilter:{field:Bn(t.field),op:"IS_NAN"}};if(mt(t.value))return{unaryFilter:{field:Bn(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(vt(t.value))return{unaryFilter:{field:Bn(t.field),op:"IS_NOT_NAN"}};if(mt(t.value))return{unaryFilter:{field:Bn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Bn(t.field),op:Fn(t.op),value:t.value}}}(t));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const o=function(t){if(0!==t.length)return t.map(t=>function(t){return{field:Bn(t.field),direction:Un(t.dir)}}(t))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const s=function(t,e){return t.N||et(e)?e:{value:e}}(t,e.limit);var a;return null!==s&&(n.structuredQuery.limit=s),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Pn(t){let e=An(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){y(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let o=[];n.where&&(o=Vn(n.where));let s=[];n.orderBy&&(s=n.orderBy.map(t=>function(t){return new Ft($n(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,et(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new Ut(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new Ut(n,e)}(n.endAt)),zt(e,i,s,o,a,"F",c,u)}function Ln(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return v()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function Vn(t){return t?void 0!==t.unaryFilter?[Hn(t)]:void 0!==t.fieldFilter?[qn(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map(t=>Vn(t)).reduce((t,e)=>t.concat(e)):v():[]}function Un(t){return gn[t]}function Fn(t){return mn[t]}function Bn(t){return{fieldPath:t.canonicalString()}}function $n(t){return q.fromServerFormat(t.fieldPath)}function qn(t){return xt.create($n(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return v()}}(t.fieldFilter.op),t.fieldFilter.value)}function Hn(t){switch(t.unaryFilter.op){case"IS_NAN":const e=$n(t.unaryFilter.field);return xt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=$n(t.unaryFilter.field);return xt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=$n(t.unaryFilter.field);return xt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=$n(t.unaryFilter.field);return xt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return v()}}function zn(t){const e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Wn(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
 */function Gn(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Yn(e)),e=Kn(t.get(n),e);return Yn(e)}function Kn(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const e=t.charAt(i);switch(e){case"\0":n+="";break;case"":n+="";break;default:n+=e}}return n}function Yn(t){return t+""}class Xn{constructor(t,e,n){this.ownerId=t,this.allowTabSynchronization=e,this.leaseTimestampMs=n}}Xn.store="owner",Xn.key="owner";class Jn{constructor(t,e,n){this.userId=t,this.lastAcknowledgedBatchId=e,this.lastStreamToken=n}}Jn.store="mutationQueues",Jn.keyPath="userId";class Qn{constructor(t,e,n,r,i){this.userId=t,this.batchId=e,this.localWriteTimeMs=n,this.baseMutations=r,this.mutations=i}}Qn.store="mutations",Qn.keyPath="batchId",Qn.userMutationsIndex="userMutationsIndex",Qn.userMutationsKeyPath=["userId","batchId"];class Zn{constructor(){}static prefixForUser(t){return[t]}static prefixForPath(t,e){return[t,Gn(e)]}static key(t,e,n){return[t,Gn(e),n]}}Zn.store="documentMutations",Zn.PLACEHOLDER=new Zn;class tr{constructor(t,e,n,r,i,o){this.unknownDocument=t,this.noDocument=e,this.document=n,this.hasCommittedMutations=r,this.readTime=i,this.parentPath=o}}tr.store="remoteDocuments",tr.readTimeIndex="readTimeIndex",tr.readTimeIndexPath="readTime",tr.collectionReadTimeIndex="collectionReadTimeIndex",tr.collectionReadTimeIndexPath=["parentPath","readTime"];class er{constructor(t){this.byteSize=t}}er.store="remoteDocumentGlobal",er.key="remoteDocumentGlobalKey";class nr{constructor(t,e,n,r,i,o,s){this.targetId=t,this.canonicalId=e,this.readTime=n,this.resumeToken=r,this.lastListenSequenceNumber=i,this.lastLimboFreeSnapshotVersion=o,this.query=s}}nr.store="targets",nr.keyPath="targetId",nr.queryTargetsIndexName="queryTargetsIndex",nr.queryTargetsKeyPath=["canonicalId","targetId"];class rr{constructor(t,e,n){this.targetId=t,this.path=e,this.sequenceNumber=n}}rr.store="targetDocuments",rr.keyPath=["targetId","path"],rr.documentTargetsIndex="documentTargetsIndex",rr.documentTargetsKeyPath=["path","targetId"];class ir{constructor(t,e,n,r){this.highestTargetId=t,this.highestListenSequenceNumber=e,this.lastRemoteSnapshotVersion=n,this.targetCount=r}}ir.key="targetGlobalKey",ir.store="targetGlobal";class or{constructor(t,e){this.collectionId=t,this.parent=e}}or.store="collectionParents",or.keyPath=["collectionId","parent"];class sr{constructor(t,e,n,r){this.clientId=t,this.updateTimeMs=e,this.networkEnabled=n,this.inForeground=r}}sr.store="clientMetadata",sr.keyPath="clientId";class ar{constructor(t,e,n){this.bundleId=t,this.createTime=e,this.version=n}}ar.store="bundles",ar.keyPath="bundleId";class cr{constructor(t,e,n){this.name=t,this.readTime=e,this.bundledQuery=n}}cr.store="namedQueries",cr.keyPath="name";class ur{constructor(t,e,n){this.indexId=t,this.collectionGroup=e,this.fields=n}}ur.store="indexConfiguration",ur.keyPath="indexId",ur.collectionGroupIndex="collectionGroupIndex",ur.collectionGroupIndexPath="collectionGroup";class lr{constructor(t,e,n,r,i,o){this.indexId=t,this.uid=e,this.sequenceNumber=n,this.readTime=r,this.documentKey=i,this.largestBatchId=o}}lr.store="indexState",lr.keyPath=["indexId","uid"],lr.sequenceNumberIndex="sequenceNumberIndex",lr.sequenceNumberIndexPath=["uid","sequenceNumber"];class hr{constructor(t,e,n,r,i){this.indexId=t,this.uid=e,this.arrayValue=n,this.directionalValue=r,this.documentKey=i}}hr.store="indexEntries",hr.keyPath=["indexId","uid","arrayValue","directionalValue","documentKey"],hr.documentKeyIndex="documentKeyIndex",hr.documentKeyIndexPath=["indexId","uid","documentKey"];class fr{constructor(t,e,n,r,i,o){this.userId=t,this.collectionPath=e,this.documentId=n,this.collectionGroup=r,this.largestBatchId=i,this.overlayMutation=o}}fr.store="documentOverlays",fr.keyPath=["userId","collectionPath","documentId"],fr.collectionPathOverlayIndex="collectionPathOverlayIndex",fr.collectionPathOverlayIndexPath=["userId","collectionPath","largestBatchId"],fr.collectionGroupOverlayIndex="collectionGroupOverlayIndex",fr.collectionGroupOverlayIndexPath=["userId","collectionGroup","largestBatchId"];const dr=[Jn.store,Qn.store,Zn.store,tr.store,nr.store,Xn.store,ir.store,rr.store,sr.store,er.store,or.store,ar.store,cr.store],pr=[...dr,fr.store],gr=(ur.store,lr.store,hr.store,"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.");
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
 */class mr{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
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
 */class vr{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&v(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new vr((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof vr?e:vr.resolve(e)}catch(t){return vr.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):vr.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):vr.reject(e)}static resolve(t){return new vr((e,n)=>{e(t)})}static reject(t){return new vr((e,n)=>{n(t)})}static waitFor(t){return new vr((e,n)=>{let r=0,i=0,o=!1;t.forEach(t=>{++r,t.next(()=>{++i,o&&i===r&&e()},t=>n(t))}),o=!0,i===r&&e()})}static or(t){let e=vr.resolve(!1);for(const n of t)e=e.next(t=>t?vr.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,r)=>{n.push(e.call(this,t,r))}),this.waitFor(n)}}
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
 */function yr(t){return"IndexedDbTransactionError"===t.name}
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
class br{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&ke(e,t,n[r])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&Ce(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&Ce(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(e=>{const n=t.get(e.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(P.min())})}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),nn())}isEqual(t){return this.batchId===t.batchId&&D(this.mutations,t.mutations,(t,e)=>je(t,e))&&D(this.baseMutations,t.baseMutations,(t,e)=>je(t,e))}}class wr{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){y(t.mutations.length===n.length);let r=tn;const i=t.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,n[o].version);return new wr(t,e,n,r)}}
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
 */class _r{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
 */class Or{constructor(t,e,n,r,i=P.min(),o=P.min(),s=z.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=s}withSequenceNumber(t){return new Or(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Or(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
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
 */class Er{constructor(t){this.Ht=t}}function Tr(t){const e=Pn({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?te(e,e.limit,"L"):e}
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
class Sr{constructor(){}Xt(t,e){this.Zt(t,e),e.te()}Zt(t,e){if("nullValue"in t)this.ee(e,5);else if("booleanValue"in t)this.ee(e,10),e.ne(t.booleanValue?1:0);else if("integerValue"in t)this.ee(e,15),e.ne(K(t.integerValue));else if("doubleValue"in t){const n=K(t.doubleValue);isNaN(n)?this.ee(e,13):(this.ee(e,15),nt(n)?e.ne(0):e.ne(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ee(e,20),"string"==typeof n?e.se(n):(e.se(""+(n.seconds||"")),e.ne(n.nanos||0))}else if("stringValue"in t)this.ie(t.stringValue,e),this.re(e);else if("bytesValue"in t)this.ee(e,30),e.oe(Y(t.bytesValue)),this.re(e);else if("referenceValue"in t)this.ce(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ee(e,45),e.ne(n.latitude||0),e.ne(n.longitude||0)}else"mapValue"in t?at(t,ot)?this.ee(e,Number.MAX_SAFE_INTEGER):(this.ue(t.mapValue,e),this.re(e)):"arrayValue"in t?(this.ae(t.arrayValue,e),this.re(e)):v()}ie(t,e){this.ee(e,25),this.he(t,e)}he(t,e){e.se(t)}ue(t,e){const n=t.fields||{};this.ee(e,55);for(const r of Object.keys(n))this.ie(r,e),this.Zt(n[r],e)}ae(t,e){const n=t.values||[];this.ee(e,50);for(const r of n)this.Zt(r,e)}ce(t,e){this.ee(e,37),it.fromName(t).path.forEach(t=>{this.ee(e,60),this.he(t,e)})}ee(t,e){t.ne(e)}re(t){t.ne(2)}}Sr.le=new Sr;
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
class Ir{constructor(){this.xe=new Ar}addToCollectionParentIndex(t,e){return this.xe.add(e),vr.resolve()}getCollectionParents(t,e){return vr.resolve(this.xe.getEntries(e))}addFieldIndex(t,e){return vr.resolve()}deleteFieldIndex(t,e){return vr.resolve()}getDocumentsMatchingTarget(t,e,n){return vr.resolve(nn())}getFieldIndex(t,e){return vr.resolve(null)}getFieldIndexes(t,e){return vr.resolve([])}getNextCollectionGroupToUpdate(t){return vr.resolve(null)}updateCollectionGroup(t,e,n){return vr.resolve()}updateIndexEntries(t,e){return vr.resolve()}}class Ar{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Ke(B.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Ke(B.comparator)).toArray()}}
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
 */class kr{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new kr(t,kr.DEFAULT_COLLECTION_PERCENTILE,kr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
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
 */kr.DEFAULT_COLLECTION_PERCENTILE=10,kr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,kr.DEFAULT=new kr(41943040,kr.DEFAULT_COLLECTION_PERCENTILE,kr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),kr.DISABLED=new kr(-1,0,0);
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
class Cr{constructor(t){this.ze=t}next(){return this.ze+=2,this.ze}static He(){return new Cr(0)}static Je(){return new Cr(-1)}}
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
async function xr(t){if(t.code!==w.FAILED_PRECONDITION||t.message!==gr)throw t;d("LocalStore","Unexpectedly lost primary lease")}
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
class jr{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],t))return void(r[n]=[t,e]);r.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),!0;return!1}forEach(t){V(this.inner,(e,n)=>{for(const[r,i]of n)t(r,i)})}isEmpty(){return U(this.inner)}}
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
 */class Nr{constructor(){this.changes=new jr(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Ot.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?vr.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
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
class Rr{constructor(t,e,n){this.qn=t,this.gs=e,this.indexManager=n}ys(t,e){return this.gs.getAllMutationBatchesAffectingDocumentKey(t,e).next(n=>this.ps(t,e,n))}ps(t,e,n){return this.qn.getEntry(t,e).next(t=>{for(const e of n)e.applyToLocalView(t);return t})}Is(t,e){t.forEach((t,n)=>{for(const r of e)r.applyToLocalView(n)})}Es(t,e){return this.qn.getEntries(t,e).next(e=>this.Ts(t,e).next(()=>e))}Ts(t,e){return this.gs.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>this.Is(e,t))}As(t,e,n){return function(t){return it.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Rs(t,e.path):Jt(e)?this.Ps(t,e,n):this.bs(t,e,n)}Rs(t,e){return this.ys(t,new it(e)).next(t=>{let e=Ze();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}Ps(t,e,n){const r=e.collectionGroup;let i=Ze();return this.indexManager.getCollectionParents(t,r).next(o=>vr.forEach(o,o=>{const s=function(t,e){return new Ht(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,o.child(r));return this.bs(t,s,n).next(t=>{t.forEach((t,e)=>{i=i.insert(t,e)})})}).next(()=>i))}bs(t,e,n){let r;return this.qn.getAll(t,e.path,n).next(n=>(r=n,this.gs.getAllMutationBatchesAffectingQuery(t,e))).next(t=>{for(const e of t)for(const t of e.mutations){const n=t.key;let i=r.get(n);null==i&&(i=Ot.newInvalidDocument(n),r=r.insert(n,i)),Ce(t,i,e.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}).next(()=>(r.forEach((t,n)=>{ie(e,n)||(r=r.remove(t))}),r))}}
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
 */class Dr{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.vs=n,this.Vs=r}static Ss(t,e){let n=nn(),r=nn();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Dr(t,e.fromCache,n,r)}}
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
 */class Mr{Ds(t){this.Cs=t}As(t,e,n,r){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(P.min())?this.Ns(t,e):this.Cs.Es(t,r).next(i=>{const s=this.xs(e,i);return(Gt(e)||Kt(e))&&this.ks(e.limitType,s,r,n)?this.Ns(t,e):(f()<=o["a"].DEBUG&&d("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),re(e)),this.Cs.As(t,e,n).next(t=>(s.forEach(e=>{t=t.insert(e.key,e)}),t)))})}xs(t,e){let n=new Ke(oe(t));return e.forEach((e,r)=>{ie(t,r)&&(n=n.add(r))}),n}ks(t,e,n,r){if(n.size!==e.size)return!0;const i="F"===t?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ns(t,e){return f()<=o["a"].DEBUG&&d("QueryEngine","Using full collection scan to execute query:",re(e)),this.Cs.As(t,e,P.min())}}
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
 */class Pr{constructor(t,e,n,r){this.persistence=t,this.Os=e,this.O=r,this.Ms=new ze(R),this.$s=new jr(t=>It(t),kt),this.Fs=P.min(),this.Bs=t.getRemoteDocumentCache(),this.Un=t.getTargetCache(),this.Kn=t.getBundleCache(),this.Ls(n)}Ls(t){this.indexManager=this.persistence.getIndexManager(t),this.gs=this.persistence.getMutationQueue(t,this.indexManager),this.Us=new Rr(this.Bs,this.gs,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Os.Ds(this.Us)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ms))}}function Lr(t,e,n,r){return new Pr(t,e,n,r)}async function Vr(t,e){const n=b(t);return await n.persistence.runTransaction("Handle user change","readonly",t=>{let r;return n.gs.getAllMutationBatches(t).next(i=>(r=i,n.Ls(e),n.gs.getAllMutationBatches(t))).next(e=>{const i=[],o=[];let s=nn();for(const t of r){i.push(t.batchId);for(const e of t.mutations)s=s.add(e.key)}for(const t of e){o.push(t.batchId);for(const e of t.mutations)s=s.add(e.key)}return n.Us.Es(t,s).next(t=>({qs:t,removedBatchIds:i,addedBatchIds:o}))})})}function Ur(t,e){const n=b(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{const r=e.batch.keys(),i=n.Bs.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,o=i.keys();let s=vr.resolve();return o.forEach(t=>{s=s.next(()=>r.getEntry(e,t)).next(e=>{const o=n.docVersions.get(t);y(null!==o),e.version.compareTo(o)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))})}),s.next(()=>t.gs.removeMutationBatch(e,i))}(n,t,e,i).next(()=>i.apply(t)).next(()=>n.gs.performConsistencyCheck(t)).next(()=>n.Us.Es(t,r))})}function Fr(t){const e=b(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Un.getLastRemoteSnapshotVersion(t))}function Br(t,e){const n=b(t),r=e.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const o=n.Bs.newChangeBuffer({trackRemovals:!0});i=n.Ms;const s=[];e.targetChanges.forEach((o,a)=>{const c=i.get(a);if(!c)return;s.push(n.Un.removeMatchingKeys(t,o.removedDocuments,a).next(()=>n.Un.addMatchingKeys(t,o.addedDocuments,a)));let u=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?u=u.withResumeToken(z.EMPTY_BYTE_STRING,P.min()).withLastLimboFreeSnapshotVersion(P.min()):o.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(o.resumeToken,r)),i=i.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,o)&&s.push(n.Un.updateTargetData(t,u))});let a=Je();if(e.documentUpdates.forEach(r=>{e.resolvedLimboDocuments.has(r)&&s.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))}),s.push($r(t,o,e.documentUpdates).next(t=>{a=t})),!r.isEqual(P.min())){const e=n.Un.getLastRemoteSnapshotVersion(t).next(e=>n.Un.setTargetsMetadata(t,t.currentSequenceNumber,r));s.push(e)}return vr.waitFor(s).next(()=>o.apply(t)).next(()=>n.Us.Ts(t,a)).next(()=>a)}).then(t=>(n.Ms=i,t))}function $r(t,e,n){let r=nn();return n.forEach(t=>r=r.add(t)),e.getEntries(t,r).next(t=>{let r=Je();return n.forEach((n,i)=>{const o=t.get(n);i.isNoDocument()&&i.version.isEqual(P.min())?(e.removeEntry(n,i.readTime),r=r.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(i),r=r.insert(n,i)):d("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)}),r})}function qr(t,e){const n=b(t);return n.persistence.runTransaction("Get next mutation batch","readonly",t=>(void 0===e&&(e=-1),n.gs.getNextMutationBatchAfterBatchId(t,e)))}function Hr(t,e){const n=b(t);return n.persistence.runTransaction("Allocate target","readwrite",t=>{let r;return n.Un.getTargetData(t,e).next(i=>i?(r=i,vr.resolve(r)):n.Un.allocateTargetId(t).next(i=>(r=new Or(e,i,0,t.currentSequenceNumber),n.Un.addTargetData(t,r).next(()=>r))))}).then(t=>{const r=n.Ms.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(t.targetId,t),n.$s.set(e,t.targetId)),t})}async function zr(t,e,n){const r=b(t),i=r.Ms.get(e),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,t=>r.persistence.referenceDelegate.removeTarget(t,i))}catch(t){if(!yr(t))throw t;d("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.Ms=r.Ms.remove(e),r.$s.delete(i.target)}function Wr(t,e,n){const r=b(t);let i=P.min(),o=nn();return r.persistence.runTransaction("Execute query","readonly",t=>function(t,e,n){const r=b(t),i=r.$s.get(n);return void 0!==i?vr.resolve(r.Ms.get(i)):r.Un.getTargetData(e,n)}(r,t,Zt(e)).next(e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.Un.getMatchingKeysForTargetId(t,e.targetId).next(t=>{o=t})}).next(()=>r.Os.As(t,e,n?i:P.min(),n?o:nn())).next(t=>({documents:t,Ks:o})))}
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
class Gr{constructor(t){this.O=t,this.Ws=new Map,this.zs=new Map}getBundleMetadata(t,e){return vr.resolve(this.Ws.get(e))}saveBundleMetadata(t,e){var n;return this.Ws.set(e.id,{id:(n=e).id,version:n.version,createTime:_n(n.createTime)}),vr.resolve()}getNamedQuery(t,e){return vr.resolve(this.zs.get(e))}saveNamedQuery(t,e){return this.zs.set(e.name,function(t){return{name:t.name,query:Tr(t.bundledQuery),readTime:_n(t.readTime)}}(e)),vr.resolve()}}
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
 */class Kr{constructor(){this.overlays=new ze(it.comparator),this.Hs=new Map}getOverlay(t,e){return vr.resolve(this.overlays.get(e))}saveOverlays(t,e,n){return n.forEach(n=>{this.Yt(t,e,n)}),vr.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.Hs.get(n);return void 0!==r&&(r.forEach(t=>this.overlays=this.overlays.remove(t)),this.Hs.delete(n)),vr.resolve()}getOverlaysForCollection(t,e,n){const r=new Map,i=e.length+1,o=new it(e.child("")),s=this.overlays.getIteratorFrom(o);for(;s.hasNext();){const t=s.getNext().value,o=t.getKey();if(!e.isPrefixOf(o.path))break;o.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return vr.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new ze((t,e)=>t-e);const o=this.overlays.getIterator();for(;o.hasNext();){const t=o.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=new Map,i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const s=new Map,a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach((t,e)=>s.set(e,t)),s.size>=r)break;return vr.resolve(s)}Yt(t,e,n){if(null===n)return;const r=this.overlays.get(n.key);null!==r&&this.Hs.get(r.largestBatchId).delete(n.key),this.overlays=this.overlays.insert(n.key,new _r(e,n));let i=this.Hs.get(e);void 0===i&&(i=new Set,this.Hs.set(e,i)),i.add(n.key)}}
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
 */class Yr{constructor(){this.Js=new Ke(Xr.Ys),this.Xs=new Ke(Xr.Zs)}isEmpty(){return this.Js.isEmpty()}addReference(t,e){const n=new Xr(t,e);this.Js=this.Js.add(n),this.Xs=this.Xs.add(n)}ti(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.ei(new Xr(t,e))}ni(t,e){t.forEach(t=>this.removeReference(t,e))}si(t){const e=new it(new B([])),n=new Xr(e,t),r=new Xr(e,t+1),i=[];return this.Xs.forEachInRange([n,r],t=>{this.ei(t),i.push(t.key)}),i}ii(){this.Js.forEach(t=>this.ei(t))}ei(t){this.Js=this.Js.delete(t),this.Xs=this.Xs.delete(t)}ri(t){const e=new it(new B([])),n=new Xr(e,t),r=new Xr(e,t+1);let i=nn();return this.Xs.forEachInRange([n,r],t=>{i=i.add(t.key)}),i}containsKey(t){const e=new Xr(t,0),n=this.Js.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Xr{constructor(t,e){this.key=t,this.oi=e}static Ys(t,e){return it.comparator(t.key,e.key)||R(t.oi,e.oi)}static Zs(t,e){return R(t.oi,e.oi)||it.comparator(t.key,e.key)}}
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
 */class Jr{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.gs=[],this.ci=1,this.ui=new Ke(Xr.Ys)}checkEmpty(t){return vr.resolve(0===this.gs.length)}addMutationBatch(t,e,n,r){const i=this.ci;this.ci++,this.gs.length>0&&this.gs[this.gs.length-1];const o=new br(i,e,n,r);this.gs.push(o);for(const s of r)this.ui=this.ui.add(new Xr(s.key,i)),this.indexManager.addToCollectionParentIndex(t,s.key.path.popLast());return vr.resolve(o)}lookupMutationBatch(t,e){return vr.resolve(this.ai(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.hi(n),i=r<0?0:r;return vr.resolve(this.gs.length>i?this.gs[i]:null)}getHighestUnacknowledgedBatchId(){return vr.resolve(0===this.gs.length?-1:this.ci-1)}getAllMutationBatches(t){return vr.resolve(this.gs.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Xr(e,0),r=new Xr(e,Number.POSITIVE_INFINITY),i=[];return this.ui.forEachInRange([n,r],t=>{const e=this.ai(t.oi);i.push(e)}),vr.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Ke(R);return e.forEach(t=>{const e=new Xr(t,0),r=new Xr(t,Number.POSITIVE_INFINITY);this.ui.forEachInRange([e,r],t=>{n=n.add(t.oi)})}),vr.resolve(this.li(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;it.isDocumentKey(i)||(i=i.child(""));const o=new Xr(new it(i),0);let s=new Ke(R);return this.ui.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(s=s.add(t.oi)),!0)},o),vr.resolve(this.li(s))}li(t){const e=[];return t.forEach(t=>{const n=this.ai(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){y(0===this.fi(e.batchId,"removed")),this.gs.shift();let n=this.ui;return vr.forEach(e.mutations,r=>{const i=new Xr(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.ui=n})}Qe(t){}containsKey(t,e){const n=new Xr(e,0),r=this.ui.firstAfterOrEqual(n);return vr.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.gs.length,vr.resolve()}fi(t,e){return this.hi(t)}hi(t){return 0===this.gs.length?0:t-this.gs[0].batchId}ai(t){const e=this.hi(t);return e<0||e>=this.gs.length?null:this.gs[e]}}
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
 */class Qr{constructor(t){this.di=t,this.docs=new ze(it.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,o=this.di(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return vr.resolve(n?n.document.mutableCopy():Ot.newInvalidDocument(e))}getEntries(t,e){let n=Je();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Ot.newInvalidDocument(t))}),vr.resolve(n)}getAll(t,e,n){let r=Je();const i=new it(e.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:t,value:{document:i}}=o.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||i.readTime.compareTo(n)<=0||(r=r.insert(i.key,i.mutableCopy()))}return vr.resolve(r)}_i(t,e){return vr.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new Zr(this)}getSize(t){return vr.resolve(this.size)}}class Zr extends Nr{constructor(t){super(),this.Tn=t}applyChanges(t){const e=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?e.push(this.Tn.addEntry(t,r)):this.Tn.removeEntry(n)}),vr.waitFor(e)}getFromCache(t,e){return this.Tn.getEntry(t,e)}getAllFromCache(t,e){return this.Tn.getEntries(t,e)}}
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
 */class ti{constructor(t){this.persistence=t,this.wi=new jr(t=>It(t),kt),this.lastRemoteSnapshotVersion=P.min(),this.highestTargetId=0,this.mi=0,this.gi=new Yr,this.targetCount=0,this.yi=Cr.He()}forEachTarget(t,e){return this.wi.forEach((t,n)=>e(n)),vr.resolve()}getLastRemoteSnapshotVersion(t){return vr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return vr.resolve(this.mi)}allocateTargetId(t){return this.highestTargetId=this.yi.next(),vr.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.mi&&(this.mi=e),vr.resolve()}Ze(t){this.wi.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.yi=new Cr(e),this.highestTargetId=e),t.sequenceNumber>this.mi&&(this.mi=t.sequenceNumber)}addTargetData(t,e){return this.Ze(e),this.targetCount+=1,vr.resolve()}updateTargetData(t,e){return this.Ze(e),vr.resolve()}removeTargetData(t,e){return this.wi.delete(e.target),this.gi.si(e.targetId),this.targetCount-=1,vr.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.wi.forEach((o,s)=>{s.sequenceNumber<=e&&null===n.get(s.targetId)&&(this.wi.delete(o),i.push(this.removeMatchingKeysForTargetId(t,s.targetId)),r++)}),vr.waitFor(i).next(()=>r)}getTargetCount(t){return vr.resolve(this.targetCount)}getTargetData(t,e){const n=this.wi.get(e)||null;return vr.resolve(n)}addMatchingKeys(t,e,n){return this.gi.ti(e,n),vr.resolve()}removeMatchingKeys(t,e,n){this.gi.ni(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach(e=>{i.push(r.markPotentiallyOrphaned(t,e))}),vr.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.gi.si(e),vr.resolve()}getMatchingKeysForTargetId(t,e){const n=this.gi.ri(e);return vr.resolve(n)}containsKey(t,e){return vr.resolve(this.gi.containsKey(e))}}
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
 */class ei{constructor(t,e){this.pi={},this.overlays={},this.Nn=new x(0),this.xn=!1,this.xn=!0,this.referenceDelegate=t(this),this.Un=new ti(this),this.indexManager=new Ir,this.qn=function(t){return new Qr(t)}(t=>this.referenceDelegate.Ii(t)),this.O=new Er(e),this.Kn=new Gr(this.O)}start(){return Promise.resolve()}shutdown(){return this.xn=!1,Promise.resolve()}get started(){return this.xn}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Kr,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.pi[t.toKey()];return n||(n=new Jr(e,this.referenceDelegate),this.pi[t.toKey()]=n),n}getTargetCache(){return this.Un}getRemoteDocumentCache(){return this.qn}getBundleCache(){return this.Kn}runTransaction(t,e,n){d("MemoryPersistence","Starting transaction:",t);const r=new ni(this.Nn.next());return this.referenceDelegate.Ei(),n(r).next(t=>this.referenceDelegate.Ti(r).next(()=>t)).toPromise().then(t=>(r.raiseOnCommittedEvent(),t))}Ai(t,e){return vr.or(Object.values(this.pi).map(n=>()=>n.containsKey(t,e)))}}class ni extends mr{constructor(t){super(),this.currentSequenceNumber=t}}class ri{constructor(t){this.persistence=t,this.Ri=new Yr,this.Pi=null}static bi(t){return new ri(t)}get vi(){if(this.Pi)return this.Pi;throw v()}addReference(t,e,n){return this.Ri.addReference(n,e),this.vi.delete(n.toString()),vr.resolve()}removeReference(t,e,n){return this.Ri.removeReference(n,e),this.vi.add(n.toString()),vr.resolve()}markPotentiallyOrphaned(t,e){return this.vi.add(e.toString()),vr.resolve()}removeTarget(t,e){this.Ri.si(e.targetId).forEach(t=>this.vi.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.vi.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}Ei(){this.Pi=new Set}Ti(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return vr.forEach(this.vi,n=>{const r=it.fromPath(n);return this.Vi(t,r).next(t=>{t||e.removeEntry(r,P.min())})}).next(()=>(this.Pi=null,e.apply(t)))}updateLimboDocument(t,e){return this.Vi(t,e).next(t=>{t?this.vi.delete(e.toString()):this.vi.add(e.toString())})}Ii(t){return 0}Vi(t,e){return vr.or([()=>vr.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}
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
 */class ii{constructor(){this.activeTargetIds=on()}Ci(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ni(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Di(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class oi{constructor(){this._r=new ii,this.wr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this._r.Ci(t),this.wr[t]||"not-current"}updateQueryState(t,e,n){this.wr[t]=e}removeLocalQueryTarget(t){this._r.Ni(t)}isLocalQueryTarget(t){return this._r.activeTargetIds.has(t)}clearQueryState(t){delete this.wr[t]}getAllActiveQueryTargets(){return this._r.activeTargetIds}isActiveQueryTarget(t){return this._r.activeTargetIds.has(t)}start(){return this._r=new ii,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
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
 */class si{mr(t){}shutdown(){}}
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
 */class ai{constructor(){this.gr=()=>this.yr(),this.pr=()=>this.Ir(),this.Er=[],this.Tr()}mr(t){this.Er.push(t)}shutdown(){window.removeEventListener("online",this.gr),window.removeEventListener("offline",this.pr)}Tr(){window.addEventListener("online",this.gr),window.addEventListener("offline",this.pr)}yr(){d("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Er)t(0)}Ir(){d("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Er)t(1)}static Vt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */const ci={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
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
 */class ui{constructor(t){this.Ar=t.Ar,this.Rr=t.Rr}Pr(t){this.br=t}vr(t){this.Vr=t}onMessage(t){this.Sr=t}close(){this.Rr()}send(t){this.Ar(t)}Dr(){this.br()}Cr(t){this.Vr(t)}Nr(t){this.Sr(t)}}
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
 */class li extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.kr=e+"://"+t.host,this.Or="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Mr(t,e,n,r,i){const o=this.$r(t,e);d("RestConnection","Sending: ",o,n);const s={};return this.Fr(s,r,i),this.Br(t,o,s,n).then(t=>(d("RestConnection","Received: ",t),t),e=>{throw g("RestConnection",t+" failed with error: ",e,"url: ",o,"request:",n),e})}Lr(t,e,n,r,i){return this.Mr(t,e,n,r,i)}Fr(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+l,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((e,n)=>t[n]=e),n&&n.headers.forEach((e,n)=>t[n]=e)}$r(t,e){const n=ci[t];return`${this.kr}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}Br(t,e,n,r){return new Promise((i,o)=>{const s=new a["g"];s.listenOnce(a["c"].COMPLETE,()=>{try{switch(s.getLastErrorCode()){case a["a"].NO_ERROR:const e=s.getResponseJson();d("Connection","XHR received:",JSON.stringify(e)),i(e);break;case a["a"].TIMEOUT:d("Connection",'RPC "'+t+'" timed out'),o(new _(w.DEADLINE_EXCEEDED,"Request time out"));break;case a["a"].HTTP_ERROR:const n=s.getStatus();if(d("Connection",'RPC "'+t+'" failed with status:',n,"response text:",s.getResponseText()),n>0){const t=s.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(e)>=0?e:w.UNKNOWN}(t.status);o(new _(e,t.message))}else o(new _(w.UNKNOWN,"Server responded with status "+s.getStatus()))}else o(new _(w.UNAVAILABLE,"Connection failed."));break;default:v()}}finally{d("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(r);s.send(e,"POST",c,n,15)})}Ur(t,e,n){const r=[this.kr,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=Object(a["h"])(),o=Object(a["i"])(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new a["d"]({})),this.Fr(c.initMessageHeaders,e,n),Object(s["j"])()||Object(s["k"])()||Object(s["g"])()||Object(s["h"])()||Object(s["m"])()||Object(s["f"])()||(c.httpHeadersOverwriteParam="$httpHeaders");const u=r.join("");d("Connection","Creating WebChannel: "+u,c);const l=i.createWebChannel(u,c);let h=!1,f=!1;const p=new ui({Ar:t=>{f?d("Connection","Not sending because WebChannel is closed:",t):(h||(d("Connection","Opening WebChannel transport."),l.open(),h=!0),d("Connection","WebChannel sending:",t),l.send(t))},Rr:()=>l.close()}),m=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};return m(l,a["f"].EventType.OPEN,()=>{f||d("Connection","WebChannel transport opened.")}),m(l,a["f"].EventType.CLOSE,()=>{f||(f=!0,d("Connection","WebChannel transport closed"),p.Cr())}),m(l,a["f"].EventType.ERROR,t=>{f||(f=!0,g("Connection","WebChannel transport errored:",t),p.Cr(new _(w.UNAVAILABLE,"The operation could not be completed")))}),m(l,a["f"].EventType.MESSAGE,t=>{var e;if(!f){const n=t.data[0];y(!!n);const r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(i){d("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=Be[t];if(void 0!==e)return He(e)}(t),n=i.message;void 0===e&&(e=w.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),f=!0,p.Cr(new _(e,n)),l.close()}else d("Connection","WebChannel received:",n),p.Nr(n)}}),m(o,a["b"].STAT_EVENT,t=>{t.stat===a["e"].PROXY?d("Connection","Detected buffering proxy"):t.stat===a["e"].NOPROXY&&d("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.Dr()},0),p}}
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
 */function hi(){return"undefined"!=typeof document?document:null}
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
 */function fi(t){return new vn(t,!0)}class di{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Sn=t,this.timerId=e,this.qr=n,this.Kr=r,this.Gr=i,this.jr=0,this.Qr=null,this.Wr=Date.now(),this.reset()}reset(){this.jr=0}zr(){this.jr=this.Gr}Hr(t){this.cancel();const e=Math.floor(this.jr+this.Jr()),n=Math.max(0,Date.now()-this.Wr),r=Math.max(0,e-n);r>0&&d("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.jr} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Qr=this.Sn.enqueueAfterDelay(this.timerId,r,()=>(this.Wr=Date.now(),t())),this.jr*=this.Kr,this.jr<this.qr&&(this.jr=this.qr),this.jr>this.Gr&&(this.jr=this.Gr)}Yr(){null!==this.Qr&&(this.Qr.skipDelay(),this.Qr=null)}cancel(){null!==this.Qr&&(this.Qr.cancel(),this.Qr=null)}Jr(){return(Math.random()-.5)*this.jr}}
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
 */class pi{constructor(t,e,n,r,i,o,s,a){this.Sn=t,this.Xr=n,this.Zr=r,this.eo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=s,this.listener=a,this.state=0,this.no=0,this.so=null,this.io=null,this.stream=null,this.ro=new di(t,e)}oo(){return 1===this.state||5===this.state||this.co()}co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.uo()}async stop(){this.oo()&&await this.close(0)}ao(){this.state=0,this.ro.reset()}ho(){this.co()&&null===this.so&&(this.so=this.Sn.enqueueAfterDelay(this.Xr,6e4,()=>this.lo()))}fo(t){this._o(),this.stream.send(t)}async lo(){if(this.co())return this.close(0)}_o(){this.so&&(this.so.cancel(),this.so=null)}wo(){this.io&&(this.io.cancel(),this.io=null)}async close(t,e){this._o(),this.wo(),this.ro.cancel(),this.no++,4!==t?this.ro.reset():e&&e.code===w.RESOURCE_EXHAUSTED?(p(e.toString()),p("Using maximum backoff delay to prevent overloading the backend."),this.ro.zr()):e&&e.code===w.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.mo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.vr(e)}mo(){}auth(){this.state=1;const t=this.yo(this.no),e=this.no;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([t,n])=>{this.no===e&&this.po(t,n)},e=>{t(()=>{const t=new _(w.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Io(t)})})}po(t,e){const n=this.yo(this.no);this.stream=this.Eo(t,e),this.stream.Pr(()=>{n(()=>(this.state=2,this.io=this.Sn.enqueueAfterDelay(this.Zr,1e4,()=>(this.co()&&(this.state=3),Promise.resolve())),this.listener.Pr()))}),this.stream.vr(t=>{n(()=>this.Io(t))}),this.stream.onMessage(t=>{n(()=>this.onMessage(t))})}uo(){this.state=5,this.ro.Hr(async()=>{this.state=0,this.start()})}Io(t){return d("PersistentStream","close with error: "+t),this.stream=null,this.close(4,t)}yo(t){return e=>{this.Sn.enqueueAndForget(()=>this.no===t?e():(d("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class gi extends pi{constructor(t,e,n,r,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,o),this.O=i}Eo(t,e){return this.eo.Ur("Listen",t,e)}onMessage(t){this.ro.reset();const e=jn(this.O,t),n=function(t){if(!("targetChange"in t))return P.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?P.min():e.readTime?_n(e.readTime):P.min()}(t);return this.listener.To(e,n)}Ao(t){const e={};e.database=kn(this.O),e.addTarget=function(t,e){let n;const r=e.target;return n=Ct(r)?{documents:Dn(t,r)}:{query:Mn(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=bn(t,e.resumeToken):e.snapshotVersion.compareTo(P.min())>0&&(n.readTime=yn(t,e.snapshotVersion.toTimestamp())),n}(this.O,t);const n=Ln(this.O,t);n&&(e.labels=n),this.fo(e)}Ro(t){const e={};e.database=kn(this.O),e.removeTarget=t,this.fo(e)}}class mi extends pi{constructor(t,e,n,r,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,o),this.O=i,this.Po=!1}get bo(){return this.Po}start(){this.Po=!1,this.lastStreamToken=void 0,super.start()}mo(){this.Po&&this.vo([])}Eo(t,e){return this.eo.Ur("Write",t,e)}onMessage(t){if(y(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Po){this.ro.reset();const e=Rn(t.writeResults,t.commitTime),n=_n(t.commitTime);return this.listener.Vo(n,e)}return y(!t.writeResults||0===t.writeResults.length),this.Po=!0,this.listener.So()}Do(){const t={};t.database=kn(this.O),this.fo(t)}vo(t){const e={streamToken:this.lastStreamToken,writes:t.map(t=>Nn(this.O,t))};this.fo(e)}}
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
 */class vi extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.eo=n,this.O=r,this.Co=!1}No(){if(this.Co)throw new _(w.FAILED_PRECONDITION,"The client has already been terminated.")}Mr(t,e,n){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.eo.Mr(t,e,n,r,i)).catch(t=>{throw"FirebaseError"===t.name?(t.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new _(w.UNKNOWN,t.toString())})}Lr(t,e,n){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.eo.Lr(t,e,n,r,i)).catch(t=>{throw"FirebaseError"===t.name?(t.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new _(w.UNKNOWN,t.toString())})}terminate(){this.Co=!0}}class yi{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.xo=0,this.ko=null,this.Oo=!0}Mo(){0===this.xo&&(this.$o("Unknown"),this.ko=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ko=null,this.Fo("Backend didn't respond within 10 seconds."),this.$o("Offline"),Promise.resolve())))}Bo(t){"Online"===this.state?this.$o("Unknown"):(this.xo++,this.xo>=1&&(this.Lo(),this.Fo("Connection failed 1 times. Most recent error: "+t.toString()),this.$o("Offline")))}set(t){this.Lo(),this.xo=0,"Online"===t&&(this.Oo=!1),this.$o(t)}$o(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}Fo(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Oo?(p(e),this.Oo=!1):d("OnlineStateTracker",e)}Lo(){null!==this.ko&&(this.ko.cancel(),this.ko=null)}}
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
 */class bi{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Uo=[],this.qo=new Map,this.Ko=new Set,this.Go=[],this.jo=i,this.jo.mr(t=>{n.enqueueAndForget(async()=>{ki(this)&&(d("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=b(t);e.Ko.add(4),await _i(e),e.Qo.set("Unknown"),e.Ko.delete(4),await wi(e)}(this))})}),this.Qo=new yi(n,r)}}async function wi(t){if(ki(t))for(const e of t.Go)await e(!0)}async function _i(t){for(const e of t.Go)await e(!1)}function Oi(t,e){const n=b(t);n.qo.has(e.targetId)||(n.qo.set(e.targetId,e),Ai(n)?Ii(n):Wi(n).co()&&Ti(n,e))}function Ei(t,e){const n=b(t),r=Wi(n);n.qo.delete(e),r.co()&&Si(n,e),0===n.qo.size&&(r.co()?r.ho():ki(n)&&n.Qo.set("Unknown"))}function Ti(t,e){t.Wo.Z(e.targetId),Wi(t).Ao(e)}function Si(t,e){t.Wo.Z(e),Wi(t).Ro(e)}function Ii(t){t.Wo=new fn({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>t.qo.get(e)||null}),Wi(t).start(),t.Qo.Mo()}function Ai(t){return ki(t)&&!Wi(t).oo()&&t.qo.size>0}function ki(t){return 0===b(t).Ko.size}function Ci(t){t.Wo=void 0}async function xi(t){t.qo.forEach((e,n)=>{Ti(t,e)})}async function ji(t,e){Ci(t),Ai(t)?(t.Qo.Bo(e),Ii(t)):t.Qo.set("Unknown")}async function Ni(t,e,n){if(t.Qo.set("Online"),e instanceof ln&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.qo.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.qo.delete(r),t.Wo.removeTarget(r))}(t,e)}catch(n){d("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Ri(t,n)}else if(e instanceof cn?t.Wo.ct(e):e instanceof un?t.Wo._t(e):t.Wo.ht(e),!n.isEqual(P.min()))try{const e=await Fr(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Wo.yt(e);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.qo.get(r);i&&t.qo.set(r,i.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach(e=>{const n=t.qo.get(e);if(!n)return;t.qo.set(e,n.withResumeToken(z.EMPTY_BYTE_STRING,n.snapshotVersion)),Si(t,e);const r=new Or(n.target,e,1,n.sequenceNumber);Ti(t,r)}),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){d("RemoteStore","Failed to raise snapshot:",e),await Ri(t,e)}}async function Ri(t,e,n){if(!yr(e))throw e;t.Ko.add(1),await _i(t),t.Qo.set("Offline"),n||(n=()=>Fr(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{d("RemoteStore","Retrying IndexedDB access"),await n(),t.Ko.delete(1),await wi(t)})}function Di(t,e){return e().catch(n=>Ri(t,n,e))}async function Mi(t){const e=b(t),n=Gi(e);let r=e.Uo.length>0?e.Uo[e.Uo.length-1].batchId:-1;for(;Pi(e);)try{const t=await qr(e.localStore,r);if(null===t){0===e.Uo.length&&n.ho();break}r=t.batchId,Li(e,t)}catch(t){await Ri(e,t)}Vi(e)&&Ui(e)}function Pi(t){return ki(t)&&t.Uo.length<10}function Li(t,e){t.Uo.push(e);const n=Gi(t);n.co()&&n.bo&&n.vo(e.mutations)}function Vi(t){return ki(t)&&!Gi(t).oo()&&t.Uo.length>0}function Ui(t){Gi(t).start()}async function Fi(t){Gi(t).Do()}async function Bi(t){const e=Gi(t);for(const n of t.Uo)e.vo(n.mutations)}async function $i(t,e,n){const r=t.Uo.shift(),i=wr.from(r,e,n);await Di(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Mi(t)}async function qi(t,e){e&&Gi(t).bo&&await async function(t,e){if(n=e.code,qe(n)&&n!==w.ABORTED){const n=t.Uo.shift();Gi(t).ao(),await Di(t,()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e)),await Mi(t)}var n}(t,e),Vi(t)&&Ui(t)}async function Hi(t,e){const n=b(t);n.asyncQueue.verifyOperationInProgress(),d("RemoteStore","RemoteStore received new credentials");const r=ki(n);n.Ko.add(3),await _i(n),r&&n.Qo.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ko.delete(3),await wi(n)}async function zi(t,e){const n=b(t);e?(n.Ko.delete(2),await wi(n)):e||(n.Ko.add(2),await _i(n),n.Qo.set("Unknown"))}function Wi(t){return t.zo||(t.zo=function(t,e,n){const r=b(t);return r.No(),new gi(e,r.eo,r.authCredentials,r.appCheckCredentials,r.O,n)
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
 */}(t.datastore,t.asyncQueue,{Pr:xi.bind(null,t),vr:ji.bind(null,t),To:Ni.bind(null,t)}),t.Go.push(async e=>{e?(t.zo.ao(),Ai(t)?Ii(t):t.Qo.set("Unknown")):(await t.zo.stop(),Ci(t))})),t.zo}function Gi(t){return t.Ho||(t.Ho=function(t,e,n){const r=b(t);return r.No(),new mi(e,r.eo,r.authCredentials,r.appCheckCredentials,r.O,n)}(t.datastore,t.asyncQueue,{Pr:Fi.bind(null,t),vr:qi.bind(null,t),So:Bi.bind(null,t),Vo:$i.bind(null,t)}),t.Go.push(async e=>{e?(t.Ho.ao(),await Mi(t)):(await t.Ho.stop(),t.Uo.length>0&&(d("RemoteStore",`Stopping write stream with ${t.Uo.length} pending writes`),t.Uo=[]))})),t.Ho
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
 */}class Ki{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new O,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}static createAndSchedule(t,e,n,r,i){const o=Date.now()+n,s=new Ki(t,e,o,r,i);return s.start(n),s}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new _(w.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yi(t,e){if(p("AsyncQueue",`${e}: ${t}`),yr(t))return new _(w.UNAVAILABLE,`${e}: ${t}`);throw t}
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
 */class Xi{constructor(t){this.comparator=t?(e,n)=>t(e,n)||it.comparator(e.key,n.key):(t,e)=>it.comparator(t.key,e.key),this.keyedMap=Ze(),this.sortedSet=new ze(this.comparator)}static emptySet(t){return new Xi(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Xi))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Xi;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
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
 */class Ji{constructor(){this.Jo=new ze(it.comparator)}track(t){const e=t.doc.key,n=this.Jo.get(e);n?0!==t.type&&3===n.type?this.Jo=this.Jo.insert(e,t):3===t.type&&1!==n.type?this.Jo=this.Jo.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Jo=this.Jo.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Jo=this.Jo.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Jo=this.Jo.remove(e):1===t.type&&2===n.type?this.Jo=this.Jo.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Jo=this.Jo.insert(e,{type:2,doc:t.doc}):v():this.Jo=this.Jo.insert(e,t)}Yo(){const t=[];return this.Jo.inorderTraversal((e,n)=>{t.push(n)}),t}}class Qi{constructor(t,e,n,r,i,o,s,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=s,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,r){const i=[];return e.forEach(t=>{i.push({type:0,doc:t})}),new Qi(t,e,Xi.emptySet(e),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ee(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
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
 */class Zi{constructor(){this.Xo=void 0,this.listeners=[]}}class to{constructor(){this.queries=new jr(t=>ne(t),ee),this.onlineState="Unknown",this.Zo=new Set}}async function eo(t,e){const n=b(t),r=e.query;let i=!1,o=n.queries.get(r);if(o||(i=!0,o=new Zi),i)try{o.Xo=await n.onListen(r)}catch(t){const n=Yi(t,`Initialization of query '${re(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,o),o.listeners.push(e),e.tc(n.onlineState),o.Xo&&e.ec(o.Xo)&&oo(n)}async function no(t,e){const n=b(t),r=e.query;let i=!1;const o=n.queries.get(r);if(o){const t=o.listeners.indexOf(e);t>=0&&(o.listeners.splice(t,1),i=0===o.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function ro(t,e){const n=b(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.ec(i)&&(r=!0);e.Xo=i}}r&&oo(n)}function io(t,e,n){const r=b(t),i=r.queries.get(e);if(i)for(const o of i.listeners)o.onError(n);r.queries.delete(e)}function oo(t){t.Zo.forEach(t=>{t.next()})}class so{constructor(t,e,n){this.query=t,this.nc=e,this.sc=!1,this.ic=null,this.onlineState="Unknown",this.options=n||{}}ec(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Qi(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.sc?this.rc(t)&&(this.nc.next(t),e=!0):this.oc(t,this.onlineState)&&(this.cc(t),e=!0),this.ic=t,e}onError(t){this.nc.error(t)}tc(t){this.onlineState=t;let e=!1;return this.ic&&!this.sc&&this.oc(this.ic,t)&&(this.cc(this.ic),e=!0),e}oc(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.uc||!n)&&(!t.docs.isEmpty()||"Offline"===e)}rc(t){if(t.docChanges.length>0)return!0;const e=this.ic&&this.ic.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}cc(t){t=Qi.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.sc=!0,this.nc.next(t)}}
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
class ao{constructor(t){this.key=t}}class co{constructor(t){this.key=t}}class uo{constructor(t,e){this.query=t,this.dc=e,this._c=null,this.current=!1,this.wc=nn(),this.mutatedKeys=nn(),this.mc=oe(t),this.gc=new Xi(this.mc)}get yc(){return this.dc}Ic(t,e){const n=e?e.Ec:new Ji,r=e?e.gc:this.gc;let i=e?e.mutatedKeys:this.mutatedKeys,o=r,s=!1;const a=Gt(this.query)&&r.size===this.query.limit?r.last():null,c=Kt(this.query)&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((t,e)=>{const u=r.get(t),l=ie(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),f=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let d=!1;u&&l?u.data.isEqual(l.data)?h!==f&&(n.track({type:3,doc:l}),d=!0):this.Tc(u,l)||(n.track({type:2,doc:l}),d=!0,(a&&this.mc(l,a)>0||c&&this.mc(l,c)<0)&&(s=!0)):!u&&l?(n.track({type:0,doc:l}),d=!0):u&&!l&&(n.track({type:1,doc:u}),d=!0,(a||c)&&(s=!0)),d&&(l?(o=o.add(l),i=f?i.add(t):i.delete(t)):(o=o.delete(t),i=i.delete(t)))}),Gt(this.query)||Kt(this.query))for(;o.size>this.query.limit;){const t=Gt(this.query)?o.last():o.first();o=o.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{gc:o,Ec:n,ks:s,mutatedKeys:i}}Tc(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.gc;this.gc=t.gc,this.mutatedKeys=t.mutatedKeys;const i=t.Ec.Yo();i.sort((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return v()}};return n(t)-n(e)}
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
 */(t.type,e.type)||this.mc(t.doc,e.doc)),this.Ac(n);const o=e?this.Rc():[],s=0===this.wc.size&&this.current?1:0,a=s!==this._c;return this._c=s,0!==i.length||a?{snapshot:new Qi(this.query,t.gc,r,i,t.mutatedKeys,0===s,a,!1),Pc:o}:{Pc:o}}tc(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({gc:this.gc,Ec:new Ji,mutatedKeys:this.mutatedKeys,ks:!1},!1)):{Pc:[]}}bc(t){return!this.dc.has(t)&&!!this.gc.has(t)&&!this.gc.get(t).hasLocalMutations}Ac(t){t&&(t.addedDocuments.forEach(t=>this.dc=this.dc.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this.dc=this.dc.delete(t)),this.current=t.current)}Rc(){if(!this.current)return[];const t=this.wc;this.wc=nn(),this.gc.forEach(t=>{this.bc(t.key)&&(this.wc=this.wc.add(t.key))});const e=[];return t.forEach(t=>{this.wc.has(t)||e.push(new co(t))}),this.wc.forEach(n=>{t.has(n)||e.push(new ao(n))}),e}vc(t){this.dc=t.Ks,this.wc=nn();const e=this.Ic(t.documents);return this.applyChanges(e,!0)}Vc(){return Qi.fromInitialDocuments(this.query,this.gc,this.mutatedKeys,0===this._c)}}class lo{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class ho{constructor(t){this.key=t,this.Sc=!1}}class fo{constructor(t,e,n,r,i,o){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Dc={},this.Cc=new jr(t=>ne(t),ee),this.Nc=new Map,this.xc=new Set,this.kc=new ze(it.comparator),this.Oc=new Map,this.Mc=new Yr,this.$c={},this.Fc=new Map,this.Bc=Cr.Je(),this.onlineState="Unknown",this.Lc=void 0}get isPrimaryClient(){return!0===this.Lc}}async function po(t,e){const n=Ro(t);let r,i;const o=n.Cc.get(e);if(o)r=o.targetId,n.sharedClientState.addLocalQueryTarget(r),i=o.view.Vc();else{const t=await Hr(n.localStore,Zt(e));n.isPrimaryClient&&Oi(n.remoteStore,t);const o=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await go(n,e,r,"current"===o)}return i}async function go(t,e,n,r){t.Uc=(e,n,r)=>async function(t,e,n,r){let i=e.view.Ic(n);i.ks&&(i=await Wr(t.localStore,e.query,!1).then(({documents:t})=>e.view.Ic(t,i)));const o=r&&r.targetChanges.get(e.targetId),s=e.view.applyChanges(i,t.isPrimaryClient,o);return Ao(t,e.targetId,s.Pc),s.snapshot}(t,e,n,r);const i=await Wr(t.localStore,e,!0),o=new uo(e,i.Ks),s=o.Ic(i.documents),a=an.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),c=o.applyChanges(s,t.isPrimaryClient,a);Ao(t,n,c.Pc);const u=new lo(e,n,o);return t.Cc.set(e,u),t.Nc.has(n)?t.Nc.get(n).push(e):t.Nc.set(n,[e]),c.snapshot}async function mo(t,e){const n=b(t),r=n.Cc.get(e),i=n.Nc.get(r.targetId);if(i.length>1)return n.Nc.set(r.targetId,i.filter(t=>!ee(t,e))),void n.Cc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await zr(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Ei(n.remoteStore,r.targetId),So(n,r.targetId)}).catch(xr)):(So(n,r.targetId),await zr(n.localStore,r.targetId,!0))}async function vo(t,e,n){const r=Do(t);try{const t=await function(t,e){const n=b(t),r=M.now(),i=e.reduce((t,e)=>t.add(e.key),nn());let o;return n.persistence.runTransaction("Locally write mutations","readwrite",t=>n.Us.Es(t,i).next(i=>{o=i;const s=[];for(const t of e){const e=xe(t,o.get(t.key));null!=e&&s.push(new De(t.key,e,_t(e.value.mapValue),Se.exists(!0)))}return n.gs.addMutationBatch(t,r,s,e)})).then(t=>(t.applyToLocalDocumentSet(o),{batchId:t.batchId,changes:o}))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.$c[t.currentUser.toKey()];r||(r=new ze(R)),r=r.insert(e,n),t.$c[t.currentUser.toKey()]=r}(r,t.batchId,n),await xo(r,t.changes),await Mi(r.remoteStore)}catch(t){const e=Yi(t,"Failed to persist write");n.reject(e)}}async function yo(t,e){const n=b(t);try{const t=await Br(n.localStore,e);e.targetChanges.forEach((t,e)=>{const r=n.Oc.get(e);r&&(y(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.Sc=!0:t.modifiedDocuments.size>0?y(r.Sc):t.removedDocuments.size>0&&(y(r.Sc),r.Sc=!1))}),await xo(n,t,e)}catch(t){await xr(t)}}function bo(t,e,n){const r=b(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.Cc.forEach((n,r)=>{const i=r.view.tc(e);i.snapshot&&t.push(i.snapshot)}),function(t,e){const n=b(t);n.onlineState=e;let r=!1;n.queries.forEach((t,n)=>{for(const i of n.listeners)i.tc(e)&&(r=!0)}),r&&oo(n)}(r.eventManager,e),t.length&&r.Dc.To(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function wo(t,e,n){const r=b(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Oc.get(e),o=i&&i.key;if(o){let t=new ze(it.comparator);t=t.insert(o,Ot.newNoDocument(o,P.min()));const n=nn().add(o),i=new sn(P.min(),new Map,new Ke(R),t,n);await yo(r,i),r.kc=r.kc.remove(o),r.Oc.delete(e),Co(r)}else await zr(r.localStore,e,!1).then(()=>So(r,e,n)).catch(xr)}async function _o(t,e){const n=b(t),r=e.batch.batchId;try{const t=await Ur(n.localStore,e);To(n,r,null),Eo(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await xo(n,t)}catch(t){await xr(t)}}async function Oo(t,e,n){const r=b(t);try{const t=await function(t,e){const n=b(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",t=>{let r;return n.gs.lookupMutationBatch(t,e).next(e=>(y(null!==e),r=e.keys(),n.gs.removeMutationBatch(t,e))).next(()=>n.gs.performConsistencyCheck(t)).next(()=>n.Us.Es(t,r))})}(r.localStore,e);To(r,e,n),Eo(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await xo(r,t)}catch(n){await xr(n)}}function Eo(t,e){(t.Fc.get(e)||[]).forEach(t=>{t.resolve()}),t.Fc.delete(e)}function To(t,e,n){const r=b(t);let i=r.$c[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.$c[r.currentUser.toKey()]=i}}function So(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Nc.get(e))t.Cc.delete(r),n&&t.Dc.qc(r,n);t.Nc.delete(e),t.isPrimaryClient&&t.Mc.si(e).forEach(e=>{t.Mc.containsKey(e)||Io(t,e)})}function Io(t,e){t.xc.delete(e.path.canonicalString());const n=t.kc.get(e);null!==n&&(Ei(t.remoteStore,n),t.kc=t.kc.remove(e),t.Oc.delete(n),Co(t))}function Ao(t,e,n){for(const r of n)r instanceof ao?(t.Mc.addReference(r.key,e),ko(t,r)):r instanceof co?(d("SyncEngine","Document no longer in limbo: "+r.key),t.Mc.removeReference(r.key,e),t.Mc.containsKey(r.key)||Io(t,r.key)):v()}function ko(t,e){const n=e.key,r=n.path.canonicalString();t.kc.get(n)||t.xc.has(r)||(d("SyncEngine","New document in limbo: "+n),t.xc.add(r),Co(t))}function Co(t){for(;t.xc.size>0&&t.kc.size<t.maxConcurrentLimboResolutions;){const e=t.xc.values().next().value;t.xc.delete(e);const n=new it(B.fromString(e)),r=t.Bc.next();t.Oc.set(r,new ho(n)),t.kc=t.kc.insert(n,r),Oi(t.remoteStore,new Or(Zt(Wt(n.path)),r,2,x.A))}}async function xo(t,e,n){const r=b(t),i=[],o=[],s=[];r.Cc.isEmpty()||(r.Cc.forEach((t,a)=>{s.push(r.Uc(a,e,n).then(t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=Dr.Ss(a.targetId,t);o.push(e)}}))}),await Promise.all(s),r.Dc.To(i),await async function(t,e){const n=b(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>vr.forEach(e,e=>vr.forEach(e.vs,r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r)).next(()=>vr.forEach(e.Vs,r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))}catch(t){if(!yr(t))throw t;d("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.Ms.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Ms=n.Ms.insert(t,i)}}}(r.localStore,o))}async function jo(t,e){const n=b(t);if(!n.currentUser.isEqual(e)){d("SyncEngine","User change. New user:",e.toKey());const t=await Vr(n.localStore,e);n.currentUser=e,function(t,e){t.Fc.forEach(t=>{t.forEach(t=>{t.reject(new _(w.CANCELLED,e))})}),t.Fc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await xo(n,t.qs)}}function No(t,e){const n=b(t),r=n.Oc.get(e);if(r&&r.Sc)return nn().add(r.key);{let t=nn();const r=n.Nc.get(e);if(!r)return t;for(const e of r){const r=n.Cc.get(e);t=t.unionWith(r.view.yc)}return t}}function Ro(t){const e=b(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=yo.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=No.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=wo.bind(null,e),e.Dc.To=ro.bind(null,e.eventManager),e.Dc.qc=io.bind(null,e.eventManager),e}function Do(t){const e=b(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=_o.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Oo.bind(null,e),e}class Mo{constructor(){this.synchronizeTabs=!1}async initialize(t){this.O=fi(t.databaseInfo.databaseId),this.sharedClientState=this.Gc(t),this.persistence=this.jc(t),await this.persistence.start(),this.gcScheduler=this.Qc(t),this.localStore=this.Wc(t)}Qc(t){return null}Wc(t){return Lr(this.persistence,new Mr,t.initialUser,this.O)}jc(t){return new ei(ri.bi,this.O)}Gc(t){return new oi}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Po{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>bo(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=jo.bind(null,this.syncEngine),await zi(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new to}createDatastore(t){const e=fi(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new li(r));var r;return function(t,e,n,r){return new vi(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>bo(this.syncEngine,t,0),o=ai.Vt()?new ai:new si,new bi(e,n,r,i,o);var e,n,r,i,o}createSyncEngine(t,e){return function(t,e,n,r,i,o,s){const a=new fo(t,e,n,r,i,o);return s&&(a.Lc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=b(t);d("RemoteStore","RemoteStore shutting down."),e.Ko.add(5),await _i(e),e.jo.shutdown(),e.Qo.set("Unknown")}(this.remoteStore)}}
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
class Lo{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Hc(this.observer.next,t)}error(t){this.observer.error?this.Hc(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Jc(){this.muted=!0}Hc(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}
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
class Vo{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=u.UNAUTHENTICATED,this.clientId=N.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async t=>{d("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t}),this.appCheckCredentials.start(n,t=>(d("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new _(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new O;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Yi(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Uo(t,e){t.asyncQueue.verifyOperationInProgress(),d("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async t=>{r.isEqual(t)||(await Vr(e.localStore,t),r=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Fo(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Bo(t);d("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(t=>Hi(e.remoteStore,t)),t.setAppCheckTokenChangeListener((t,n)=>Hi(e.remoteStore,n)),t.onlineComponents=e}async function Bo(t){return t.offlineComponents||(d("FirestoreClient","Using default OfflineComponentProvider"),await Uo(t,new Mo)),t.offlineComponents}async function $o(t){return t.onlineComponents||(d("FirestoreClient","Using default OnlineComponentProvider"),await Fo(t,new Po)),t.onlineComponents}function qo(t){return $o(t).then(t=>t.syncEngine)}async function Ho(t){const e=await $o(t),n=e.eventManager;return n.onListen=po.bind(null,e.syncEngine),n.onUnlisten=mo.bind(null,e.syncEngine),n}function zo(t,e,n={}){const r=new O;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,i){const o=new Lo({next:o=>{e.enqueueAndForget(()=>no(t,s));const a=o.docs.has(n);!a&&o.fromCache?i.reject(new _(w.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&o.fromCache&&r&&"server"===r.source?i.reject(new _(w.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(o)},error:t=>i.reject(t)}),s=new so(Wt(n.path),o,{includeMetadataChanges:!0,uc:!0});return eo(t,s)}(await Ho(t),t.asyncQueue,e,n,r)),r.promise}function Wo(t,e,n={}){const r=new O;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,i){const o=new Lo({next:n=>{e.enqueueAndForget(()=>no(t,s)),n.fromCache&&"server"===r.source?i.reject(new _(w.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),s=new so(n,o,{includeMetadataChanges:!0,uc:!0});return eo(t,s)}(await Ho(t),t.asyncQueue,e,n,r)),r.promise}const Go=new Map;
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
 */function Ko(t,e,n){if(!n)throw new _(w.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Yo(t,e,n,r){if(!0===e&&!0===r)throw new _(w.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Xo(t){if(!it.isDocumentKey(t))throw new _(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Jo(t){if(it.isDocumentKey(t))throw new _(w.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Qo(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=t.substring(0,20)+"..."),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":v()}function Zo(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new _(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Qo(t);throw new _(w.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function ts(t,e){if(e<=0)throw new _(w.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}
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
 */class es{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new _(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new _(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Yo("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
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
 */class ns{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new es({}),this._settingsFrozen=!1,t instanceof tt?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new _(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new tt(t.options.projectId)}(t))}get app(){if(!this._app)throw new _(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new _(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new es(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new T;switch(t.type){case"gapi":const e=t.client;return y(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new A(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new _(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Go.get(t);e&&(d("ComponentProvider","Removing Datastore"),Go.delete(t),e.terminate())}(this),Promise.resolve()}}
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
class rs{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new os(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new rs(this.firestore,t,this._key)}}class is{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new is(this.firestore,t,this._query)}}class os extends is{constructor(t,e,n){super(t,e,Wt(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new rs(this.firestore,null,new it(t))}withConverter(t){return new os(this.firestore,t,this._path)}}function ss(t,e,...n){if(t=Object(s["d"])(t),Ko("collection","path",e),t instanceof ns){const r=B.fromString(e,...n);return Jo(r),new os(t,null,r)}{if(!(t instanceof rs||t instanceof os))throw new _(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(B.fromString(e,...n));return Jo(r),new os(t.firestore,null,r)}}function as(t,e,...n){if(t=Object(s["d"])(t),1===arguments.length&&(e=N.R()),Ko("doc","path",e),t instanceof ns){const r=B.fromString(e,...n);return Xo(r),new rs(t,null,new it(r))}{if(!(t instanceof rs||t instanceof os))throw new _(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(B.fromString(e,...n));return Xo(r),new rs(t.firestore,t instanceof os?t.converter:null,new it(r))}}
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
class cs{constructor(){this.hu=Promise.resolve(),this.lu=[],this.fu=!1,this.du=[],this._u=null,this.wu=!1,this.mu=!1,this.gu=[],this.ro=new di(this,"async_queue_retry"),this.yu=()=>{const t=hi();t&&d("AsyncQueue","Visibility state changed to "+t.visibilityState),this.ro.Yr()};const t=hi();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.yu)}get isShuttingDown(){return this.fu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.fu){this.fu=!0,this.mu=t||!1;const e=hi();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.yu)}}enqueue(t){if(this.pu(),this.fu)return new Promise(()=>{});const e=new O;return this.Iu(()=>this.fu&&this.mu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.lu.push(t),this.Eu()))}async Eu(){if(0!==this.lu.length){try{await this.lu[0](),this.lu.shift(),this.ro.reset()}catch(t){if(!yr(t))throw t;d("AsyncQueue","Operation failed with retryable error: "+t)}this.lu.length>0&&this.ro.Hr(()=>this.Eu())}}Iu(t){const e=this.hu.then(()=>(this.wu=!0,t().catch(t=>{this._u=t,this.wu=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
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
 */(t);throw p("INTERNAL UNHANDLED ERROR: ",e),t}).then(t=>(this.wu=!1,t))));return this.hu=e,e}enqueueAfterDelay(t,e,n){this.pu(),this.gu.indexOf(t)>-1&&(e=0);const r=Ki.createAndSchedule(this,t,e,n,t=>this.Tu(t));return this.du.push(r),r}pu(){this._u&&v()}verifyOperationInProgress(){}async Au(){let t;do{t=this.hu,await t}while(t!==this.hu)}Ru(t){for(const e of this.du)if(e.timerId===t)return!0;return!1}Pu(t){return this.Au().then(()=>{this.du.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this.du)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Au()})}bu(t){this.gu.push(t)}Tu(t){const e=this.du.indexOf(t);this.du.splice(e,1)}}function us(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const r of e)if(r in n&&"function"==typeof n[r])return!0;return!1}
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
 */(t,["next","error","complete"])}class ls extends ns{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new cs,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||ds(this),this._firestoreClient.terminate()}}function hs(t=Object(r["e"])()){return Object(r["b"])(t,"firestore").getImmediate()}function fs(t){return t._firestoreClient||ds(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ds(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new Z(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Vo(t._authCredentials,t._appCheckCredentials,t._queue,r)}
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
class ps{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new _(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new q(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
class gs{constructor(t){this._byteString=t}static fromBase64String(t){try{return new gs(z.fromBase64String(t))}catch(t){throw new _(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new gs(z.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
 */class ms{constructor(t){this._methodName=t}}
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
 */class vs{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new _(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new _(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return R(this._lat,t._lat)||R(this._long,t._long)}}
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
 */const ys=/^__.*__$/;class bs{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new De(t,this.data,this.fieldMask,e,this.fieldTransforms):new Re(t,this.data,e,this.fieldTransforms)}}class ws{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new De(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function _s(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw v()}}class Os{constructor(t,e,n,r,i,o){this.settings=t,this.databaseId=e,this.O=n,this.ignoreUndefinedProperties=r,void 0===i&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}Su(t){return new Os(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.O,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Du(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Su({path:n,Cu:!1});return r.Nu(t),r}xu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Su({path:n,Cu:!1});return r.vu(),r}ku(t){return this.Su({path:void 0,Cu:!0})}Ou(t){return Bs(t,this.settings.methodName,this.settings.Mu||!1,this.path,this.settings.$u)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Nu(this.path.get(t))}Nu(t){if(0===t.length)throw this.Ou("Document fields must not be empty");if(_s(this.Vu)&&ys.test(t))throw this.Ou('Document fields cannot begin and end with "__"')}}class Es{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.O=n||fi(t)}Fu(t,e,n,r=!1){return new Os({Vu:t,methodName:e,$u:n,path:q.emptyPath(),Cu:!1,Mu:r},this.databaseId,this.O,this.ignoreUndefinedProperties)}}function Ts(t){const e=t._freezeSettings(),n=fi(t._databaseId);return new Es(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ss(t,e,n,r,i,o={}){const s=t.Fu(o.merge||o.mergeFields?2:0,e,n,i);Ls("Data must be an object, but it was:",s,r);const a=Ms(r,s);let c,u;if(o.merge)c=new H(s.fieldMask),u=s.fieldTransforms;else if(o.mergeFields){const t=[];for(const r of o.mergeFields){const i=Vs(e,r,n);if(!s.contains(i))throw new _(w.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);$s(t,i)||t.push(i)}c=new H(t),u=s.fieldTransforms.filter(t=>c.covers(t.field))}else c=null,u=s.fieldTransforms;return new bs(new wt(a),c,u)}class Is extends ms{_toFieldTransform(t){if(2!==t.Vu)throw 1===t.Vu?t.Ou(this._methodName+"() can only appear at the top level of your update data"):t.Ou(this._methodName+"() cannot be used with set() unless you pass {merge:true}");return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Is}}function As(t,e,n){return new Os({Vu:3,$u:e.settings.$u,methodName:t._methodName,Cu:n},e.databaseId,e.O,e.ignoreUndefinedProperties)}class ks extends ms{_toFieldTransform(t){return new Oe(t.path,new pe)}isEqual(t){return t instanceof ks}}class Cs extends ms{constructor(t,e){super(t),this.Bu=e}_toFieldTransform(t){const e=As(this,t,!0),n=this.Bu.map(t=>Ds(t,e)),r=new ge(n);return new Oe(t.path,r)}isEqual(t){return this===t}}class xs extends ms{constructor(t,e){super(t),this.Lu=e}_toFieldTransform(t){const e=new be(t.O,ue(t.O,this.Lu));return new Oe(t.path,e)}isEqual(t){return this===t}}function js(t,e,n,r){const i=t.Fu(1,e,n);Ls("Data must be an object, but it was:",i,r);const o=[],a=wt.empty();V(r,(t,r)=>{const c=Fs(e,t,n);r=Object(s["d"])(r);const u=i.xu(c);if(r instanceof Is)o.push(c);else{const t=Ds(r,u);null!=t&&(o.push(c),a.set(c,t))}});const c=new H(o);return new ws(a,c,i.fieldTransforms)}function Ns(t,e,n,r,i,o){const a=t.Fu(1,e,n),c=[Vs(e,r,n)],u=[i];if(o.length%2!=0)throw new _(w.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let s=0;s<o.length;s+=2)c.push(Vs(e,o[s])),u.push(o[s+1]);const l=[],h=wt.empty();for(let d=c.length-1;d>=0;--d)if(!$s(l,c[d])){const t=c[d];let e=u[d];e=Object(s["d"])(e);const n=a.xu(t);if(e instanceof Is)l.push(t);else{const r=Ds(e,n);null!=r&&(l.push(t),h.set(t,r))}}const f=new H(l);return new ws(h,f,a.fieldTransforms)}function Rs(t,e,n,r=!1){return Ds(n,t.Fu(r?4:3,e))}function Ds(t,e){if(Ps(t=Object(s["d"])(t)))return Ls("Unsupported field value:",e,t),Ms(t,e);if(t instanceof ms)return function(t,e){if(!_s(e.Vu))throw e.Ou(t._methodName+"() can only be used with update() and set()");if(!e.path)throw e.Ou(t._methodName+"() is not currently supported inside arrays");const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Cu&&4!==e.Vu)throw e.Ou("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=Ds(i,e.ku(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Object(s["d"])(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return ue(e.O,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=M.fromDate(t);return{timestampValue:yn(e.O,n)}}if(t instanceof M){const n=new M(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:yn(e.O,n)}}if(t instanceof vs)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof gs)return{bytesValue:bn(e.O,t._byteString)};if(t instanceof rs){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.Ou(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:On(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.Ou("Unsupported field value: "+Qo(t))}(t,e)}function Ms(t,e){const n={};return U(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):V(t,(t,r)=>{const i=Ds(r,e.Du(t));null!=i&&(n[t]=i)}),{mapValue:{fields:n}}}function Ps(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof M||t instanceof vs||t instanceof gs||t instanceof rs||t instanceof ms)}function Ls(t,e,n){if(!Ps(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=Qo(n);throw"an object"===r?e.Ou(t+" a custom object"):e.Ou(t+" "+r)}}function Vs(t,e,n){if((e=Object(s["d"])(e))instanceof ps)return e._internalPath;if("string"==typeof e)return Fs(t,e);throw Bs("Field path arguments must be of type string or ",t,!1,void 0,n)}const Us=new RegExp("[~\\*/\\[\\]]");function Fs(t,e,n){if(e.search(Us)>=0)throw Bs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ps(...e.split("."))._internalPath}catch(r){throw Bs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Bs(t,e,n,r,i){const o=r&&!r.isEmpty(),s=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(o||s)&&(c+=" (found",o&&(c+=" in field "+r),s&&(c+=" in document "+i),c+=")"),new _(w.INVALID_ARGUMENT,a+t+c)}function $s(t,e){return t.some(t=>t.isEqual(e))}
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
 */class qs{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new rs(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Hs(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(zs("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Hs extends qs{data(){return super.data()}}function zs(t,e){return"string"==typeof e?Fs(t,e):e instanceof ps?e._internalPath:e._delegate._internalPath}
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
 */class Ws{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Gs extends qs{constructor(t,e,n,r,i,o){super(t,e,n,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Ks(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(zs("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Ks extends Gs{data(t={}){return super.data(t)}}class Ys{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Ws(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new Ks(this._firestore,this._userDataWriter,n.key,n,new Ws(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new _(w.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(n=>({type:"added",doc:new Ks(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Ws(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const r=new Ks(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Ws(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,o=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),o=n.indexOf(e.doc.key)),{type:Xs(e.type),doc:r,oldIndex:i,newIndex:o}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Xs(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return v()}}
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
function Js(t){if(Kt(t)&&0===t.explicitOrderBy.length)throw new _(w.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Qs{}function Zs(t,...e){for(const n of e)t=n._apply(t);return t}class ta extends Qs{constructor(t,e,n){super(),this.Uu=t,this.qu=e,this.Ku=n,this.type="where"}_apply(t){const e=Ts(t.firestore),n=function(t,e,n,r,i,o,s){let a;if(i.isKeyField()){if("array-contains"===o||"array-contains-any"===o)throw new _(w.INVALID_ARGUMENT,`Invalid Query. You can't perform '${o}' queries on documentId().`);if("in"===o||"not-in"===o){la(s,o);const e=[];for(const n of s)e.push(ua(r,t,n));a={arrayValue:{values:e}}}else a=ua(r,t,s)}else"in"!==o&&"not-in"!==o&&"array-contains-any"!==o||la(s,o),a=Rs(n,e,s,"in"===o||"not-in"===o);const c=xt.create(i,o,a);return function(t,e){if(e.S()){const n=Xt(t);if(null!==n&&!n.isEqual(e.field))throw new _(w.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);const r=Yt(t);null!==r&&ha(t,e.field,r)}const n=function(t,e){for(const n of t.filters)if(e.indexOf(n.op)>=0)return n.op;return null}(t,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new _(w.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new _(w.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}(t,c),c}(t._query,"where",e,t.firestore._databaseId,this.Uu,this.qu,this.Ku);return new is(t.firestore,t.converter,function(t,e){const n=t.filters.concat([e]);return new Ht(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}}function ea(t,e,n){const r=e,i=zs("where",t);return new ta(i,r,n)}class na extends Qs{constructor(t,e){super(),this.Uu=t,this.Gu=e,this.type="orderBy"}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new _(w.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new _(w.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new Ft(e,n);return function(t,e){if(null===Yt(t)){const n=Xt(t);null!==n&&ha(t,n,e.field)}}(t,r),r}(t._query,this.Uu,this.Gu);return new is(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new Ht(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function ra(t,e="asc"){const n=e,r=zs("orderBy",t);return new na(r,n)}class ia extends Qs{constructor(t,e,n){super(),this.type=t,this.ju=e,this.Qu=n}_apply(t){return new is(t.firestore,t.converter,te(t._query,this.ju,this.Qu))}}function oa(t){return ts("limit",t),new ia("limit",t,"F")}class sa extends Qs{constructor(t,e,n){super(),this.type=t,this.Wu=e,this.zu=n}_apply(t){const e=ca(t,this.type,this.Wu,this.zu);return new is(t.firestore,t.converter,function(t,e){return new Ht(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,e,t.endAt)}(t._query,e))}}function aa(...t){return new sa("startAfter",t,!1)}function ca(t,e,n,r){if(n[0]=Object(s["d"])(n[0]),n[0]instanceof qs)return function(t,e,n,r,i){if(!r)throw new _(w.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const o=[];for(const s of Qt(t))if(s.field.isKeyField())o.push(dt(e,r.key));else{const t=r.data.field(s.field);if(X(t))throw new _(w.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+s.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===t){const t=s.field.canonicalString();throw new _(w.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${t}' (used as the orderBy) does not exist.`)}o.push(t)}return new Ut(o,i)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Ts(t.firestore);return function(t,e,n,r,i,o){const s=t.explicitOrderBy;if(i.length>s.length)throw new _(w.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<i.length;c++){const o=i[c];if(s[c].field.isKeyField()){if("string"!=typeof o)throw new _(w.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof o}`);if(!Jt(t)&&-1!==o.indexOf("/"))throw new _(w.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${o}' contains a slash.`);const n=t.path.child(B.fromString(o));if(!it.isDocumentKey(n))throw new _(w.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new it(n);a.push(dt(e,i))}else{const t=Rs(n,r,o);a.push(t)}}return new Ut(a,o)}(t._query,t.firestore._databaseId,i,e,n,r)}}function ua(t,e,n){if("string"==typeof(n=Object(s["d"])(n))){if(""===n)throw new _(w.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Jt(e)&&-1!==n.indexOf("/"))throw new _(w.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(B.fromString(n));if(!it.isDocumentKey(r))throw new _(w.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return dt(t,new it(r))}if(n instanceof rs)return dt(t,n._key);throw new _(w.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Qo(n)}.`)}function la(t,e){if(!Array.isArray(t)||0===t.length)throw new _(w.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new _(w.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function ha(t,e,n){if(!n.isEqual(e))throw new _(w.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
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
 */class fa{convertValue(t,e="none"){switch(st(t)){case 0:return null;case 1:return t.booleanValue;case 2:return K(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Y(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw v()}}convertObject(t,e){const n={};return V(t.fields,(t,r)=>{n[t]=this.convertValue(r,e)}),n}convertGeoPoint(t){return new vs(K(t.latitude),K(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=J(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Q(t));default:return null}}convertTimestamp(t){const e=G(t);return new M(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=B.fromString(t);y(Wn(n));const r=new tt(n.get(1),n.get(3)),i=new it(n.popFirst(5));return r.isEqual(e)||p(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
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
 */function da(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}
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
class pa{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=Ts(t)}set(t,e,n){this._verifyNotCommitted();const r=ga(t,this._firestore),i=da(r.converter,e,n),o=Ss(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(o.toMutation(r._key,Se.none())),this}update(t,e,n,...r){this._verifyNotCommitted();const i=ga(t,this._firestore);let o;return o="string"==typeof(e=Object(s["d"])(e))||e instanceof ps?Ns(this._dataReader,"WriteBatch.update",i._key,e,n,r):js(this._dataReader,"WriteBatch.update",i._key,e),this._mutations.push(o.toMutation(i._key,Se.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=ga(t,this._firestore);return this._mutations=this._mutations.concat(new Ve(e._key,Se.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new _(w.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ga(t,e){if((t=Object(s["d"])(t)).firestore!==e)throw new _(w.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}
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
 */function ma(t){t=Zo(t,rs);const e=Zo(t.firestore,ls);return zo(fs(e),t._key).then(n=>Ea(e,t,n))}class va extends fa{constructor(t){super(),this.firestore=t}convertBytes(t){return new gs(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new rs(this.firestore,null,e)}}function ya(t){t=Zo(t,is);const e=Zo(t.firestore,ls),n=fs(e),r=new va(e);return Js(t._query),Wo(n,t._query).then(n=>new Ys(e,r,t,n))}function ba(t,e,n){t=Zo(t,rs);const r=Zo(t.firestore,ls),i=da(t.converter,e,n);return Oa(r,[Ss(Ts(r),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,Se.none())])}function wa(t,e,n,...r){t=Zo(t,rs);const i=Zo(t.firestore,ls),o=Ts(i);let a;return a="string"==typeof(e=Object(s["d"])(e))||e instanceof ps?Ns(o,"updateDoc",t._key,e,n,r):js(o,"updateDoc",t._key,e),Oa(i,[a.toMutation(t._key,Se.exists(!0))])}function _a(t,...e){var n,r,i;t=Object(s["d"])(t);let o={includeMetadataChanges:!1},a=0;"object"!=typeof e[a]||us(e[a])||(o=e[a],a++);const c={includeMetadataChanges:o.includeMetadataChanges};if(us(e[a])){const t=e[a];e[a]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[a+1]=null===(r=t.error)||void 0===r?void 0:r.bind(t),e[a+2]=null===(i=t.complete)||void 0===i?void 0:i.bind(t)}let u,l,h;if(t instanceof rs)l=Zo(t.firestore,ls),h=Wt(t._key.path),u={next:n=>{e[a]&&e[a](Ea(l,t,n))},error:e[a+1],complete:e[a+2]};else{const n=Zo(t,is);l=Zo(n.firestore,ls),h=n._query;const r=new va(l);u={next:t=>{e[a]&&e[a](new Ys(l,r,n,t))},error:e[a+1],complete:e[a+2]},Js(t._query)}return function(t,e,n,r){const i=new Lo(r),o=new so(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>eo(await Ho(t),o)),()=>{i.Jc(),t.asyncQueue.enqueueAndForget(async()=>no(await Ho(t),o))}}(fs(l),h,c,u)}function Oa(t,e){return function(t,e){const n=new O;return t.asyncQueue.enqueueAndForget(async()=>vo(await qo(t),e,n)),n.promise}(fs(t),e)}function Ea(t,e,n){const r=n.docs.get(e._key),i=new va(t);return new Gs(t,i,e._key,r,new Ws(n.hasPendingWrites,n.fromCache),e.converter)}
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
 */function Ta(){return new ks("serverTimestamp")}function Sa(...t){return new Cs("arrayUnion",t)}function Ia(t){return new xs("increment",t)}
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
 */function Aa(t){return fs(t=Zo(t,ls)),new pa(t,e=>Oa(t,e))
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
 */}!function(t,e=!0){!function(t){l=t}(r["a"]),Object(r["c"])(new i["a"]("firestore",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=new ls(r,new S(t.getProvider("auth-internal")),new C(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),i._setSettings(n),i},"PUBLIC")),Object(r["g"])(c,"3.4.5",t),Object(r["g"])(c,"3.4.5","esm2017")}()}).call(this,n("4362"))},"0cfb":function(t,e,n){var r=n("83ab"),i=n("d039"),o=n("cc12");t.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},1276:function(t,e,n){"use strict";var r=n("d784"),i=n("44e7"),o=n("825a"),s=n("1d80"),a=n("4840"),c=n("8aa5"),u=n("50c4"),l=n("14c3"),h=n("9263"),f=n("d039"),d=[].push,p=Math.min,g=4294967295,m=!f((function(){return!RegExp(g,"y")}));r("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(s(this)),o=void 0===n?g:n>>>0;if(0===o)return[];if(void 0===t)return[r];if(!i(t))return e.call(r,t,o);var a,c,u,l=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,m=new RegExp(t.source,f+"g");while(a=h.call(m,r)){if(c=m.lastIndex,c>p&&(l.push(r.slice(p,a.index)),a.length>1&&a.index<r.length&&d.apply(l,a.slice(1)),u=a[0].length,p=c,l.length>=o))break;m.lastIndex===a.index&&m.lastIndex++}return p===r.length?!u&&m.test("")||l.push(""):l.push(r.slice(p)),l.length>o?l.slice(0,o):l}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var i=s(this),o=void 0==e?void 0:e[t];return void 0!==o?o.call(e,i,n):r.call(String(i),e,n)},function(t,i){var s=n(r,t,this,i,r!==e);if(s.done)return s.value;var h=o(t),f=String(this),d=a(h,RegExp),v=h.unicode,y=(h.ignoreCase?"i":"")+(h.multiline?"m":"")+(h.unicode?"u":"")+(m?"y":"g"),b=new d(m?h:"^(?:"+h.source+")",y),w=void 0===i?g:i>>>0;if(0===w)return[];if(0===f.length)return null===l(b,f)?[f]:[];var _=0,O=0,E=[];while(O<f.length){b.lastIndex=m?O:0;var T,S=l(b,m?f:f.slice(O));if(null===S||(T=p(u(b.lastIndex+(m?0:O)),f.length))===_)O=c(f,O,v);else{if(E.push(f.slice(_,O)),E.length===w)return E;for(var I=1;I<=S.length-1;I++)if(E.push(S[I]),E.length===w)return E;O=_=T}}return E.push(f.slice(_)),E}]}),!m)},1310:function(t,e){function n(t){return null!=t&&"object"==typeof t}t.exports=n},"14c3":function(t,e,n){var r=n("c6b6"),i=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var o=n.call(t,e);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"159b":function(t,e,n){var r=n("da84"),i=n("fdbc"),o=n("17c2"),s=n("9112");for(var a in i){var c=r[a],u=c&&c.prototype;if(u&&u.forEach!==o)try{s(u,"forEach",o)}catch(l){u.forEach=o}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,i=n("a640"),o=n("ae40"),s=i("forEach"),a=o("forEach");t.exports=s&&a?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"19aa":function(t,e){t.exports=function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return t}},"1a8c":function(t,e){function n(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=n},"1be4":function(t,e,n){var r=n("d066");t.exports=r("document","documentElement")},"1c0b":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},"1c7e":function(t,e,n){var r=n("b622"),i=r("iterator"),o=!1;try{var s=0,a={next:function(){return{done:!!s++}},return:function(){o=!0}};a[i]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch(c){}return n}},"1cdc":function(t,e,n){var r=n("342f");t.exports=/(iphone|ipod|ipad).*applewebkit/i.test(r)},"1d80":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},"1da1":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("d3b7");function r(t,e,n,r,i,o,s){try{var a=t[o](s),c=a.value}catch(u){return void n(u)}a.done?e(c):Promise.resolve(c).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var s=t.apply(e,n);function a(t){r(s,i,o,a,c,"next",t)}function c(t){r(s,i,o,a,c,"throw",t)}a(void 0)}))}}},"1dde":function(t,e,n){var r=n("d039"),i=n("b622"),o=n("2d00"),s=i("species");t.exports=function(t){return o>=51||!r((function(){var e=[],n=e.constructor={};return n[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},2266:function(t,e,n){var r=n("825a"),i=n("e95a"),o=n("50c4"),s=n("0366"),a=n("35a1"),c=n("2a62"),u=function(t,e){this.stopped=t,this.result=e};t.exports=function(t,e,n){var l,h,f,d,p,g,m,v=n&&n.that,y=!(!n||!n.AS_ENTRIES),b=!(!n||!n.IS_ITERATOR),w=!(!n||!n.INTERRUPTED),_=s(e,v,1+y+w),O=function(t){return l&&c(l),new u(!0,t)},E=function(t){return y?(r(t),w?_(t[0],t[1],O):_(t[0],t[1])):w?_(t,O):_(t)};if(b)l=t;else{if(h=a(t),"function"!=typeof h)throw TypeError("Target is not iterable");if(i(h)){for(f=0,d=o(t.length);d>f;f++)if(p=E(t[f]),p&&p instanceof u)return p;return new u(!1)}l=h.call(t)}g=l.next;while(!(m=g.call(l)).done){try{p=E(m.value)}catch(T){throw c(l),T}if("object"==typeof p&&p&&p instanceof u)return p}return new u(!1)}},"22e5":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return u}));var r=n("edb5");class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
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
 */const o="[DEFAULT]";
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
 */class s{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r["a"];if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:o})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=o){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...t.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return null!=this.component}isInitialized(t=o){return this.instances.has(t)}getOptions(t=o){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,o]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&o.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=o){return this.component?this.component.multipleInstances?t:o:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===o?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
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
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new s(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},"23ad":function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){"use strict";var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(e,n,r){var i=n.prototype,o=i.format;r.en.formats=t,i.format=function(e){void 0===e&&(e="YYYY-MM-DDTHH:mm:ssZ");var n=this.$locale().formats,r=function(e,n){return e.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(e,r,i){var o=i&&i.toUpperCase();return r||n[i]||t[i]||n[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,n){return e||n.slice(1)}))}))}(e,void 0===n?{}:n);return o.call(this,r)}}}))},"23cb":function(t,e,n){var r=n("a691"),i=Math.max,o=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):o(n,e)}},"23e7":function(t,e,n){var r=n("da84"),i=n("06cf").f,o=n("9112"),s=n("6eeb"),a=n("ce4e"),c=n("e893"),u=n("94ca");t.exports=function(t,e){var n,l,h,f,d,p,g=t.target,m=t.global,v=t.stat;if(l=m?r:v?r[g]||a(g,{}):(r[g]||{}).prototype,l)for(h in e){if(d=e[h],t.noTargetGet?(p=i(l,h),f=p&&p.value):f=l[h],n=u(m?h:g+(v?".":"#")+h,t.forced),!n&&void 0!==f){if(typeof d===typeof f)continue;c(d,f)}(t.sham||f&&f.sham)&&o(d,"sham",!0),s(l,h,d,t)}}},"241c":function(t,e,n){var r=n("ca84"),i=n("7839"),o=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},2532:function(t,e,n){"use strict";var r=n("23e7"),i=n("5a34"),o=n("1d80"),s=n("ab13");r({target:"String",proto:!0,forced:!s("includes")},{includes:function(t){return!!~String(o(this)).indexOf(i(t),arguments.length>1?arguments[1]:void 0)}})},"25f0":function(t,e,n){"use strict";var r=n("6eeb"),i=n("825a"),o=n("d039"),s=n("ad6d"),a="toString",c=RegExp.prototype,u=c[a],l=o((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),h=u.name!=a;(l||h)&&r(RegExp.prototype,a,(function(){var t=i(this),e=String(t.source),n=t.flags,r=String(void 0===n&&t instanceof RegExp&&!("flags"in c)?s.call(t):n);return"/"+e+"/"+r}),{unsafe:!0})},"260b":function(t,e,n){"use strict";var r=n("589b");n.d(e,"a",(function(){return r["f"]}));var i="firebase",o="9.6.8";
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
Object(r["g"])(i,o,"app")},2626:function(t,e,n){"use strict";var r=n("d066"),i=n("9bf2"),o=n("b622"),s=n("83ab"),a=o("species");t.exports=function(t){var e=r(t),n=i.f;s&&e&&!e[a]&&n(e,a,{configurable:!0,get:function(){return this}})}},2909:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("6b75");function i(t){if(Array.isArray(t))return Object(r["a"])(t)}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("d3b7"),n("3ca3"),n("ddb0");function o(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var s=n("06c5");function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return i(t)||o(t)||Object(s["a"])(t)||a()}},2967:function(t,e,n){"use strict";var r=n("7a23");const i={viewBox:"0 0 8 2",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o=Object(r["k"])("path",{d:"M2.24 1c0 .556-.445 1-1 1-.556 0-1-.444-1-1s.444-1 1-1c.555 0 1 .444 1 1zm5.333 0c0 .556-.444 1-1 1-.555 0-1-.444-1-1s.445-1 1-1c.556 0 1 .444 1 1z",fill:"#BBB"},null,-1);function s(t,e){return Object(r["x"])(),Object(r["f"])("svg",i,[o])}var a=Object(r["l"])({name:"VPage",components:{IconPaginationDots:s},props:{page:{type:Number,default:null},current:{type:Number,default:0},activeColor:{type:String,default:"#DCEDFF"}},emits:["update"],setup(t,{emit:e}){const n=Object(r["d"])(()=>t.page===t.current);function i(){e("update",t.page)}return{isActive:n,clickHandler:i}}});const c=Object(r["X"])("data-v-060ca318");Object(r["A"])("data-v-060ca318");const u={key:0,class:"DotsHolder"};Object(r["y"])();const l=c((t,e,n,i,o,s)=>{const a=Object(r["F"])("icon-pagination-dots");return Object(r["x"])(),Object(r["f"])("li",null,[null===t.page?(Object(r["x"])(),Object(r["f"])("span",u,[Object(r["k"])(a,{class:"Dots"})])):(Object(r["x"])(),Object(r["f"])("button",{key:1,class:["Page",{"Page-active":t.isActive}],type:"button","aria-label":"Go to page "+t.page,style:`background-color: ${t.isActive?t.activeColor:"transparent"};`,onClick:e[1]||(e[1]=(...e)=>t.clickHandler&&t.clickHandler(...e))},Object(r["K"])(t.page),15,["aria-label"]))])});a.render=l,a.__scopeId="data-v-060ca318",a.__file="src/components/atoms/VPage.vue";const h={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},f=Object(r["k"])("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6 1.41-1.41M6 6h2v12H6V6z"},null,-1);function d(t,e){return Object(r["x"])(),Object(r["f"])("svg",h,[f])}const p={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},g=Object(r["k"])("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6-1.41 1.41M16 6h2v12h-2V6z"},null,-1);function m(t,e){return Object(r["x"])(),Object(r["f"])("svg",p,[g])}const v={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},y=Object(r["k"])("path",{d:"M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.42z"},null,-1);function b(t,e){return Object(r["x"])(),Object(r["f"])("svg",v,[y])}const w={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},_=Object(r["k"])("path",{d:"M8.59 16.58L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.42z"},null,-1);function O(t,e){return Object(r["x"])(),Object(r["f"])("svg",w,[_])}var E=Object(r["l"])({name:"VPagination",components:{IconPageFirst:d,IconChevronLeft:b,IconChevronRight:O,IconPageLast:m,VPage:a},props:{pages:{type:Number,default:0},rangeSize:{type:Number,default:1},modelValue:{type:Number,default:0},activeColor:{type:String,default:"#DCEDFF"},hideFirstButton:{type:Boolean,default:!1},hideLastButton:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,{emit:e}){const n=Object(r["d"])(()=>{const e=[],n=5+2*t.rangeSize;let r=t.pages<=n?1:t.modelValue-t.rangeSize,i=t.pages<=n?t.pages:t.modelValue+t.rangeSize;if(i=i>t.pages?t.pages:i,r=r<1?1:r,t.pages>n){const o=r-1<3,s=t.pages-i<3;if(o){i=n-2;for(let t=1;t<r;t++)e.push(t)}else e.push(1),e.push(null);if(s){r=t.pages-(n-3);for(let n=r;n<=t.pages;n++)e.push(n)}else{for(let t=r;t<=i;t++)e.push(t);e.push(null),e.push(t.pages)}}else for(let t=r;t<=i;t++)e.push(t);return e});function i(t){e("update:modelValue",t)}const o=Object(r["d"])(()=>t.modelValue>1),s=Object(r["d"])(()=>t.modelValue<t.pages);function a(){o.value&&e("update:modelValue",1)}function c(){o.value&&e("update:modelValue",t.modelValue-1)}function u(){s.value&&e("update:modelValue",t.pages)}function l(){s.value&&e("update:modelValue",t.modelValue+1)}return{pagination:n,updatePageHandler:i,isPrevControlsActive:o,isNextControlsActive:s,goToFirst:a,goToLast:u,goToPrev:c,goToNext:l}}});const T=Object(r["X"])("data-v-2a30deb0");Object(r["A"])("data-v-2a30deb0");const S={class:"Pagination"},I={key:0,class:"PaginationControl"},A={class:"PaginationControl"},k={class:"PaginationControl"},C={key:1,class:"PaginationControl"};Object(r["y"])();const x=T((t,e,n,i,o,s)=>{const a=Object(r["F"])("icon-page-first"),c=Object(r["F"])("icon-chevron-left"),u=Object(r["F"])("v-page"),l=Object(r["F"])("icon-chevron-right"),h=Object(r["F"])("icon-page-last");return Object(r["x"])(),Object(r["f"])("ul",S,[t.hideFirstButton?Object(r["g"])("v-if",!0):(Object(r["x"])(),Object(r["f"])("li",I,[Object(r["k"])(a,{class:["Control",{"Control-active":t.isPrevControlsActive}],onClick:t.goToFirst},null,8,["class","onClick"])])),Object(r["k"])("li",A,[Object(r["k"])(c,{class:["Control",{"Control-active":t.isPrevControlsActive}],onClick:t.goToPrev},null,8,["class","onClick"])]),(Object(r["x"])(!0),Object(r["f"])(r["a"],null,Object(r["D"])(t.pagination,e=>(Object(r["x"])(),Object(r["f"])(u,{key:"pagination-page-"+e,page:e,current:t.modelValue,"active-color":t.activeColor,onUpdate:t.updatePageHandler},null,8,["page","current","active-color","onUpdate"]))),128)),Object(r["k"])("li",k,[Object(r["k"])(l,{class:["Control",{"Control-active":t.isNextControlsActive}],onClick:t.goToNext},null,8,["class","onClick"])]),t.hideLastButton?Object(r["g"])("v-if",!0):(Object(r["x"])(),Object(r["f"])("li",C,[Object(r["k"])(h,{class:["Control",{"Control-active":t.isNextControlsActive}],onClick:t.goToLast},null,8,["class","onClick"])]))])});E.render=x,E.__scopeId="data-v-2a30deb0",E.__file="src/components/VPagination.vue",e["a"]=E},"29f3":function(t,e){var n=Object.prototype,r=n.toString;function i(t){return r.call(t)}t.exports=i},"2a62":function(t,e,n){var r=n("825a");t.exports=function(t){var e=t["return"];if(void 0!==e)return r(e.call(t)).value}},"2b10":function(t,e){function n(t,e,n){var r=-1,i=t.length;e<0&&(e=-e>i?0:i+e),n=n>i?i:n,n<0&&(n+=i),i=e>n?0:n-e>>>0,e>>>=0;var o=Array(i);while(++r<i)o[r]=t[r+e];return o}t.exports=n},"2b3e":function(t,e,n){var r=n("585a"),i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")();t.exports=o},"2cf4":function(t,e,n){var r,i,o,s=n("da84"),a=n("d039"),c=n("0366"),u=n("1be4"),l=n("cc12"),h=n("1cdc"),f=n("605d"),d=s.location,p=s.setImmediate,g=s.clearImmediate,m=s.process,v=s.MessageChannel,y=s.Dispatch,b=0,w={},_="onreadystatechange",O=function(t){if(w.hasOwnProperty(t)){var e=w[t];delete w[t],e()}},E=function(t){return function(){O(t)}},T=function(t){O(t.data)},S=function(t){s.postMessage(t+"",d.protocol+"//"+d.host)};p&&g||(p=function(t){var e=[],n=1;while(arguments.length>n)e.push(arguments[n++]);return w[++b]=function(){("function"==typeof t?t:Function(t)).apply(void 0,e)},r(b),b},g=function(t){delete w[t]},f?r=function(t){m.nextTick(E(t))}:y&&y.now?r=function(t){y.now(E(t))}:v&&!h?(i=new v,o=i.port2,i.port1.onmessage=T,r=c(o.postMessage,o,1)):s.addEventListener&&"function"==typeof postMessage&&!s.importScripts&&d&&"file:"!==d.protocol&&!a(S)?(r=S,s.addEventListener("message",T,!1)):r=_ in l("script")?function(t){u.appendChild(l("script"))[_]=function(){u.removeChild(this),O(t)}}:function(t){setTimeout(E(t),0)}),t.exports={set:p,clear:g}},"2d00":function(t,e,n){var r,i,o=n("da84"),s=n("342f"),a=o.process,c=a&&a.versions,u=c&&c.v8;u?(r=u.split("."),i=r[0]+r[1]):s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=r[1]))),t.exports=i&&+i},"30b6":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return E})),n.d(e,"e",(function(){return y})),n.d(e,"f",(function(){return O})),n.d(e,"g",(function(){return A})),n.d(e,"h",(function(){return a})),n.d(e,"i",(function(){return u})),n.d(e,"j",(function(){return v})),n.d(e,"k",(function(){return h})),n.d(e,"l",(function(){return c})),n.d(e,"m",(function(){return l})),n.d(e,"n",(function(){return w})),n.d(e,"o",(function(){return _}));
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
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return e.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],o=i+1<t.length,s=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,l=(3&e)<<4|s>>4;let h=(15&s)<<2|c>>6,f=63&c;a||(f=64,o||(h=64)),r.push(n[u],n[l],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],o=i<t.length,s=o?n[t.charAt(i)]:0;++i;const a=i<t.length,c=a?n[t.charAt(i)]:64;++i;const u=i<t.length,l=u?n[t.charAt(i)]:64;if(++i,null==e||null==s||null==c||null==l)throw Error();const h=e<<2|s>>4;if(r.push(h),64!==c){const t=s<<4&240|c>>2;if(r.push(t),64!==l){const t=c<<6&192|l;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},s=function(t){try{return o.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
function a(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function c(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(a())}function u(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function l(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function h(){const t=a();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}
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
const f="FirebaseError";class d extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=f,Object.setPrototypeOf(this,d.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,p.prototype.create)}}class p{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?g(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new d(r,s,n);return a}}function g(t,e){return t.replace(m,(t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`})}const m=/\{\$([^}]+)}/g;
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
 */function v(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function y(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],o=e[i];if(b(n)&&b(o)){if(!y(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function b(t){return null!==t&&"object"===typeof t}
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
 */function w(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function _(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach(t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}}),e}function O(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
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
 */function E(t,e){const n=new T(t,e);return n.subscribe.bind(n)}class T{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(t=>{this.error(t)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=S(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=I),void 0===r.error&&(r.error=I),void 0===r.complete&&(r.complete=I);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}}),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function S(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function I(){}
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
function A(t){return t&&t._delegate?t._delegate:t}}).call(this,n("c8ba"))},"30c9":function(t,e,n){var r=n("9520"),i=n("b218");function o(t){return null!=t&&i(t.length)&&!r(t)}t.exports=o},"323e":function(t,e,n){var r,i;
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */(function(o,s){r=s,i="function"===typeof r?r.call(e,n,e,t):r,void 0===i||(t.exports=i)})(0,(function(){var t={version:"0.2.0"},e=t.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function n(t,e,n){return t<e?e:t>n?n:t}function r(t){return 100*(-1+t)}function i(t,n,i){var o;return o="translate3d"===e.positionUsing?{transform:"translate3d("+r(t)+"%,0,0)"}:"translate"===e.positionUsing?{transform:"translate("+r(t)+"%,0)"}:{"margin-left":r(t)+"%"},o.transition="all "+n+"ms "+i,o}t.configure=function(t){var n,r;for(n in t)r=t[n],void 0!==r&&t.hasOwnProperty(n)&&(e[n]=r);return this},t.status=null,t.set=function(r){var a=t.isStarted();r=n(r,e.minimum,1),t.status=1===r?null:r;var c=t.render(!a),u=c.querySelector(e.barSelector),l=e.speed,h=e.easing;return c.offsetWidth,o((function(n){""===e.positionUsing&&(e.positionUsing=t.getPositioningCSS()),s(u,i(r,l,h)),1===r?(s(c,{transition:"none",opacity:1}),c.offsetWidth,setTimeout((function(){s(c,{transition:"all "+l+"ms linear",opacity:0}),setTimeout((function(){t.remove(),n()}),l)}),l)):setTimeout(n,l)})),this},t.isStarted=function(){return"number"===typeof t.status},t.start=function(){t.status||t.set(0);var n=function(){setTimeout((function(){t.status&&(t.trickle(),n())}),e.trickleSpeed)};return e.trickle&&n(),this},t.done=function(e){return e||t.status?t.inc(.3+.5*Math.random()).set(1):this},t.inc=function(e){var r=t.status;return r?("number"!==typeof e&&(e=(1-r)*n(Math.random()*r,.1,.95)),r=n(r+e,0,.994),t.set(r)):t.start()},t.trickle=function(){return t.inc(Math.random()*e.trickleRate)},function(){var e=0,n=0;t.promise=function(r){return r&&"resolved"!==r.state()?(0===n&&t.start(),e++,n++,r.always((function(){n--,0===n?(e=0,t.done()):t.set((e-n)/e)})),this):this}}(),t.render=function(n){if(t.isRendered())return document.getElementById("nprogress");c(document.documentElement,"nprogress-busy");var i=document.createElement("div");i.id="nprogress",i.innerHTML=e.template;var o,a=i.querySelector(e.barSelector),u=n?"-100":r(t.status||0),l=document.querySelector(e.parent);return s(a,{transition:"all 0 linear",transform:"translate3d("+u+"%,0,0)"}),e.showSpinner||(o=i.querySelector(e.spinnerSelector),o&&h(o)),l!=document.body&&c(l,"nprogress-custom-parent"),l.appendChild(i),i},t.remove=function(){u(document.documentElement,"nprogress-busy"),u(document.querySelector(e.parent),"nprogress-custom-parent");var t=document.getElementById("nprogress");t&&h(t)},t.isRendered=function(){return!!document.getElementById("nprogress")},t.getPositioningCSS=function(){var t=document.body.style,e="WebkitTransform"in t?"Webkit":"MozTransform"in t?"Moz":"msTransform"in t?"ms":"OTransform"in t?"O":"";return e+"Perspective"in t?"translate3d":e+"Transform"in t?"translate":"margin"};var o=function(){var t=[];function e(){var n=t.shift();n&&n(e)}return function(n){t.push(n),1==t.length&&e()}}(),s=function(){var t=["Webkit","O","Moz","ms"],e={};function n(t){return t.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,(function(t,e){return e.toUpperCase()}))}function r(e){var n=document.body.style;if(e in n)return e;var r,i=t.length,o=e.charAt(0).toUpperCase()+e.slice(1);while(i--)if(r=t[i]+o,r in n)return r;return e}function i(t){return t=n(t),e[t]||(e[t]=r(t))}function o(t,e,n){e=i(e),t.style[e]=n}return function(t,e){var n,r,i=arguments;if(2==i.length)for(n in e)r=e[n],void 0!==r&&e.hasOwnProperty(n)&&o(t,n,r);else o(t,i[1],i[2])}}();function a(t,e){var n="string"==typeof t?t:l(t);return n.indexOf(" "+e+" ")>=0}function c(t,e){var n=l(t),r=n+e;a(n,e)||(t.className=r.substring(1))}function u(t,e){var n,r=l(t);a(t,e)&&(n=r.replace(" "+e+" "," "),t.className=n.substring(1,n.length-1))}function l(t){return(" "+(t.className||"")+" ").replace(/\s+/gi," ")}function h(t){t&&t.parentNode&&t.parentNode.removeChild(t)}return t}))},"342f":function(t,e,n){var r=n("d066");t.exports=r("navigator","userAgent")||""},"35a1":function(t,e,n){var r=n("f5df"),i=n("3f8c"),o=n("b622"),s=o("iterator");t.exports=function(t){if(void 0!=t)return t[s]||t["@@iterator"]||i[r(t)]}},3729:function(t,e,n){var r=n("9e69"),i=n("00fd"),o=n("29f3"),s="[object Null]",a="[object Undefined]",c=r?r.toStringTag:void 0;function u(t){return null==t?void 0===t?a:s:c&&c in Object(t)?i(t):o(t)}t.exports=u},"37e8":function(t,e,n){var r=n("83ab"),i=n("9bf2"),o=n("825a"),s=n("df75");t.exports=r?Object.defineProperties:function(t,e){o(t);var n,r=s(e),a=r.length,c=0;while(a>c)i.f(t,n=r[c++],e[n]);return t}},3835:function(t,e,n){"use strict";function r(t){if(Array.isArray(t))return t}n.d(e,"a",(function(){return a}));n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0");function i(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,i=!1,o=void 0;try{for(var s,a=t[Symbol.iterator]();!(r=(s=a.next()).done);r=!0)if(n.push(s.value),e&&n.length===e)break}catch(c){i=!0,o=c}finally{try{r||null==a["return"]||a["return"]()}finally{if(i)throw o}}return n}}var o=n("06c5");function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(t,e){return r(t)||i(t,e)||Object(o["a"])(t,e)||s()}},"3aa8":function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return u})),n.d(e,"d",(function(){return l}));function r(t,e){return Array.isArray(t)?t[0]:t[e]}function i(t){return null===t||void 0===t||""===t||!(!Array.isArray(t)||0!==t.length)}const o=t=>{if(i(t))return!0;const e=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return Array.isArray(t)?t.every(t=>e.test(String(t))):e.test(String(t))};function s(t){return null===t||void 0===t}function a(t){return Array.isArray(t)&&0===t.length}const c=(t,e)=>{if(i(t))return!0;const n=r(e,"length");return Array.isArray(t)?t.every(t=>c(t,{length:n})):String(t).length>=Number(n)},u=t=>!s(t)&&!a(t)&&!1!==t&&!!String(t).trim().length,l=(t,e)=>{var n;if(i(t))return!0;let o=r(e,"pattern");"string"===typeof o&&(o=new RegExp(o));try{new URL(t)}catch(s){return!1}return null===(n=null===o||void 0===o?void 0:o.test(t))||void 0===n||n}},"3bbe":function(t,e,n){var r=n("861d");t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},"3bfd":function(t,e,n){"use strict";(function(t){function r(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?t=>!!n[t.toLowerCase()]:t=>!!n[t]}n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return C})),n.d(e,"c",(function(){return N})),n.d(e,"d",(function(){return y})),n.d(e,"e",(function(){return j})),n.d(e,"f",(function(){return s})),n.d(e,"g",(function(){return R})),n.d(e,"h",(function(){return b})),n.d(e,"i",(function(){return O})),n.d(e,"j",(function(){return u})),n.d(e,"k",(function(){return v})),n.d(e,"l",(function(){return T})),n.d(e,"m",(function(){return m})),n.d(e,"n",(function(){return l})),n.d(e,"o",(function(){return w})),n.d(e,"p",(function(){return o})),n.d(e,"q",(function(){return E})),n.d(e,"r",(function(){return f})),n.d(e,"s",(function(){return d})),n.d(e,"t",(function(){return D}));const i="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",o=r(i);function s(t){return!!t||""===t}const a="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",c="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",u=r(a),l=r(c);function h(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=f(t[r],e[r]);return n}function f(t,e){if(t===e)return!0;let n=_(t),r=_(e);if(n||r)return!(!n||!r)&&t.getTime()===e.getTime();if(n=b(t),r=b(e),n||r)return!(!n||!r)&&h(t,e);if(n=T(t),r=T(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,o=Object.keys(e).length;if(i!==o)return!1;for(const n in t){const r=t.hasOwnProperty(n),i=e.hasOwnProperty(n);if(r&&!i||!r&&i||!f(t[n],e[n]))return!1}}return String(t)===String(e)}function d(t,e){return t.findIndex(t=>f(t,e))}const p={},g=/^on[^a-z]/,m=t=>g.test(t),v=t=>t.startsWith("onUpdate:"),y=Object.assign,b=(Object.prototype.hasOwnProperty,Array.isArray),w=t=>"[object Set]"===I(t),_=t=>t instanceof Date,O=t=>"function"===typeof t,E=t=>"string"===typeof t,T=t=>null!==t&&"object"===typeof t,S=Object.prototype.toString,I=t=>S.call(t),A=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},k=/-(\w)/g,C=A(t=>t.replace(k,(t,e)=>e?e.toUpperCase():"")),x=/\B([A-Z])/g,j=A(t=>t.replace(x,"-$1").toLowerCase()),N=A(t=>t.charAt(0).toUpperCase()+t.slice(1)),R=(A(t=>t?"on"+N(t):""),(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)}),D=t=>{const e=parseFloat(t);return isNaN(e)?t:e}}).call(this,n("c8ba"))},"3ca3":function(t,e,n){"use strict";var r=n("6547").charAt,i=n("69f3"),o=n("7dd0"),s="String Iterator",a=i.set,c=i.getterFor(s);o(String,"String",(function(t){a(this,{type:s,string:String(t),index:0})}),(function(){var t,e=c(this),n=e.string,i=e.index;return i>=n.length?{value:void 0,done:!0}:(t=r(n,i),e.index+=t.length,{value:t,done:!1})}))},"3f8c":function(t,e){t.exports={}},"408c":function(t,e,n){var r=n("2b3e"),i=function(){return r.Date.now()};t.exports=i},4160:function(t,e,n){"use strict";var r=n("23e7"),i=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},4208:function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){"use strict";return function(t,e,n){t=t||{};var r=e.prototype,i={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function o(t,e,n,i){return r.fromToBase(t,e,n,i)}n.en.relativeTime=i,r.fromToBase=function(e,r,o,s,a){for(var c,u,l,h=o.$locale().relativeTime||i,f=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],d=f.length,p=0;p<d;p+=1){var g=f[p];g.d&&(c=s?n(e).diff(o,g.d,!0):o.diff(e,g.d,!0));var m=(t.rounding||Math.round)(Math.abs(c));if(l=c>0,m<=g.r||!g.r){m<=1&&p>0&&(g=f[p-1]);var v=h[g.l];a&&(m=a(""+m)),u="string"==typeof v?v.replace("%d",m):v(m,r,g.l,l);break}}if(r)return u;var y=l?h.future:h.past;return"function"==typeof y?y(u):y.replace("%s",u)},r.to=function(t,e){return o(t,e,this,!0)},r.from=function(t,e){return o(t,e,this)};var s=function(t){return t.$u?n.utc():n()};r.toNow=function(t){return this.to(s(this),t)},r.fromNow=function(t){return this.from(s(this),t)}}}))},"428f":function(t,e,n){var r=n("da84");t.exports=r},"42d8":function(t,e,n){},4362:function(t,e,n){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,r="/";e.cwd=function(){return r},e.chdir=function(e){t||(t=n("df7c")),r=t.resolve(e,r)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"44ad":function(t,e,n){var r=n("d039"),i=n("c6b6"),o="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?o.call(t,""):Object(t)}:Object},"44b2":function(t,e,n){"use strict";(function(t){function r(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?t=>!!n[t.toLowerCase()]:t=>!!n[t]}n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return E})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return O})),n.d(e,"e",(function(){return a})),n.d(e,"f",(function(){return c})),n.d(e,"g",(function(){return l})),n.d(e,"h",(function(){return v})),n.d(e,"i",(function(){return u})),n.d(e,"j",(function(){return d})),n.d(e,"k",(function(){return f})),n.d(e,"l",(function(){return r})),n.d(e,"m",(function(){return m}));const i=()=>{},o=Object.assign,s=Object.prototype.hasOwnProperty,a=(t,e)=>s.call(t,e),c=Array.isArray,u=t=>"[object Map]"===g(t),l=t=>"function"===typeof t,h=t=>"string"===typeof t,f=t=>"symbol"===typeof t,d=t=>null!==t&&"object"===typeof t,p=Object.prototype.toString,g=t=>p.call(t),m=t=>g(t).slice(8,-1),v=t=>h(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,y=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},b=/-(\w)/g,w=(y(t=>t.replace(b,(t,e)=>e?e.toUpperCase():"")),/\B([A-Z])/g),_=(y(t=>t.replace(w,"-$1").toLowerCase()),y(t=>t.charAt(0).toUpperCase()+t.slice(1))),O=(y(t=>t?"on"+_(t):""),(t,e)=>!Object.is(t,e)),E=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})}}).call(this,n("c8ba"))},"44d2":function(t,e,n){var r=n("b622"),i=n("7c73"),o=n("9bf2"),s=r("unscopables"),a=Array.prototype;void 0==a[s]&&o.f(a,s,{configurable:!0,value:i(null)}),t.exports=function(t){a[s][t]=!0}},"44de":function(t,e,n){var r=n("da84");t.exports=function(t,e){var n=r.console;n&&n.error&&(1===arguments.length?n.error(t):n.error(t,e))}},"44e7":function(t,e,n){var r=n("861d"),i=n("c6b6"),o=n("b622"),s=o("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==i(t))}},4840:function(t,e,n){var r=n("825a"),i=n("1c0b"),o=n("b622"),s=o("species");t.exports=function(t,e){var n,o=r(t).constructor;return void 0===o||void 0==(n=r(o)[s])?e:i(n)}},4930:function(t,e,n){var r=n("d039");t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},"4b17":function(t,e,n){var r=n("6428");function i(t){var e=r(t),n=e%1;return e===e?n?e-n:e:0}t.exports=i},"4cef":function(t,e){var n=/\s/;function r(t){var e=t.length;while(e--&&n.test(t.charAt(e)));return e}t.exports=r},"4d64":function(t,e,n){var r=n("fc6a"),i=n("50c4"),o=n("23cb"),s=function(t){return function(e,n,s){var a,c=r(e),u=i(c.length),l=o(s,u);if(t&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},"4de4":function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").filter,o=n("1dde"),s=n("ae40"),a=o("filter"),c=s("filter");r({target:"Array",proto:!0,forced:!a||!c},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"4df4":function(t,e,n){"use strict";var r=n("0366"),i=n("7b0b"),o=n("9bdd"),s=n("e95a"),a=n("50c4"),c=n("8418"),u=n("35a1");t.exports=function(t){var e,n,l,h,f,d,p=i(t),g="function"==typeof this?this:Array,m=arguments.length,v=m>1?arguments[1]:void 0,y=void 0!==v,b=u(p),w=0;if(y&&(v=r(v,m>2?arguments[2]:void 0,2)),void 0==b||g==Array&&s(b))for(e=a(p.length),n=new g(e);e>w;w++)d=y?v(p[w],w):p[w],c(n,w,d);else for(h=b.call(p),f=h.next,n=new g;!(l=f.call(h)).done;w++)d=y?o(h,v,[l.value,w],!0):l.value,c(n,w,d);return n.length=w,n}},"50c4":function(t,e,n){var r=n("a691"),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},5135:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},5319:function(t,e,n){"use strict";var r=n("d784"),i=n("825a"),o=n("7b0b"),s=n("50c4"),a=n("a691"),c=n("1d80"),u=n("8aa5"),l=n("14c3"),h=Math.max,f=Math.min,d=Math.floor,p=/\$([$&'`]|\d\d?|<[^>]*>)/g,g=/\$([$&'`]|\d\d?)/g,m=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,n,r){var v=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,y=r.REPLACE_KEEPS_$0,b=v?"$":"$0";return[function(n,r){var i=c(this),o=void 0==n?void 0:n[t];return void 0!==o?o.call(n,i,r):e.call(String(i),n,r)},function(t,r){if(!v&&y||"string"===typeof r&&-1===r.indexOf(b)){var o=n(e,t,this,r);if(o.done)return o.value}var c=i(t),d=String(this),p="function"===typeof r;p||(r=String(r));var g=c.global;if(g){var _=c.unicode;c.lastIndex=0}var O=[];while(1){var E=l(c,d);if(null===E)break;if(O.push(E),!g)break;var T=String(E[0]);""===T&&(c.lastIndex=u(d,s(c.lastIndex),_))}for(var S="",I=0,A=0;A<O.length;A++){E=O[A];for(var k=String(E[0]),C=h(f(a(E.index),d.length),0),x=[],j=1;j<E.length;j++)x.push(m(E[j]));var N=E.groups;if(p){var R=[k].concat(x,C,d);void 0!==N&&R.push(N);var D=String(r.apply(void 0,R))}else D=w(k,d,C,x,N,r);C>=I&&(S+=d.slice(I,C)+D,I=C+k.length)}return S+d.slice(I)}];function w(t,n,r,i,s,a){var c=r+t.length,u=i.length,l=g;return void 0!==s&&(s=o(s),l=p),e.call(a,l,(function(e,o){var a;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(c);case"<":a=s[o.slice(1,-1)];break;default:var l=+o;if(0===l)return e;if(l>u){var h=d(l/10);return 0===h?e:h<=u?void 0===i[h-1]?o.charAt(1):i[h-1]+o.charAt(1):e}a=i[l-1]}return void 0===a?"":a}))}}))},5502:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return O})),n.d(e,"b",(function(){return V})),n.d(e,"c",(function(){return L}));var r=n("7a23"),i="store";
/*!
 * vuex v4.0.0
 * (c) 2021 Evan You
 * @license MIT
 */var o="undefined"!==typeof window?window:"undefined"!==typeof t?t:{},s=o.__VUE_DEVTOOLS_GLOBAL_HOOK__;function a(t){s&&(t._devtoolHook=s,s.emit("vuex:init",t),s.on("vuex:travel-to-state",(function(e){t.replaceState(e)})),t.subscribe((function(t,e){s.emit("vuex:mutation",t,e)}),{prepend:!0}),t.subscribeAction((function(t,e){s.emit("vuex:action",t,e)}),{prepend:!0}))}function c(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function u(t){return null!==t&&"object"===typeof t}function l(t){return t&&"function"===typeof t.then}function h(t,e){if(!t)throw new Error("[vuex] "+e)}function f(t,e){return function(){return t(e)}}var d=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},p={namespaced:{configurable:!0}};p.namespaced.get=function(){return!!this._rawModule.namespaced},d.prototype.addChild=function(t,e){this._children[t]=e},d.prototype.removeChild=function(t){delete this._children[t]},d.prototype.getChild=function(t){return this._children[t]},d.prototype.hasChild=function(t){return t in this._children},d.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},d.prototype.forEachChild=function(t){c(this._children,t)},d.prototype.forEachGetter=function(t){this._rawModule.getters&&c(this._rawModule.getters,t)},d.prototype.forEachAction=function(t){this._rawModule.actions&&c(this._rawModule.actions,t)},d.prototype.forEachMutation=function(t){this._rawModule.mutations&&c(this._rawModule.mutations,t)},Object.defineProperties(d.prototype,p);var g=function(t){this.register([],t,!1)};function m(t,e,n){if(w(t,n),e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void console.warn("[vuex] trying to add a new module '"+r+"' on hot reloading, manual reload is needed");m(t.concat(r),e.getChild(r),n.modules[r])}}g.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},g.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")}),"")},g.prototype.update=function(t){m([],this.root,t)},g.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0),w(t,e);var i=new d(e,n);if(0===t.length)this.root=i;else{var o=this.get(t.slice(0,-1));o.addChild(t[t.length-1],i)}e.modules&&c(e.modules,(function(e,i){r.register(t.concat(i),e,n)}))},g.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],r=e.getChild(n);r?r.runtime&&e.removeChild(n):console.warn("[vuex] trying to unregister module '"+n+"', which is not registered")},g.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};var v={assert:function(t){return"function"===typeof t},expected:"function"},y={assert:function(t){return"function"===typeof t||"object"===typeof t&&"function"===typeof t.handler},expected:'function or object with "handler" function'},b={getters:v,mutations:v,actions:y};function w(t,e){Object.keys(b).forEach((function(n){if(e[n]){var r=b[n];c(e[n],(function(e,i){h(r.assert(e),_(t,n,i,e,r.expected))}))}}))}function _(t,e,n,r,i){var o=e+" should be "+i+' but "'+e+"."+n+'"';return t.length>0&&(o+=' in module "'+t.join(".")+'"'),o+=" is "+JSON.stringify(r)+".",o}function O(t){return new E(t)}var E=function t(e){var n=this;void 0===e&&(e={}),h("undefined"!==typeof Promise,"vuex requires a Promise polyfill in this browser."),h(this instanceof t,"store must be called with the new operator.");var r=e.plugins;void 0===r&&(r=[]);var i=e.strict;void 0===i&&(i=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new g(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null);var o=this,s=this,c=s.dispatch,u=s.commit;this.dispatch=function(t,e){return c.call(o,t,e)},this.commit=function(t,e,n){return u.call(o,t,e,n)},this.strict=i;var l=this._modules.root.state;k(this,l,[],this._modules.root),A(this,l),r.forEach((function(t){return t(n)}));var f=void 0===e.devtools||e.devtools;f&&a(this)},T={state:{configurable:!0}};function S(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function I(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;k(t,n,[],t._modules.root,!0),A(t,n,e)}function A(t,e,n){var i=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var o=t._wrappedGetters,s={};c(o,(function(e,n){s[n]=f(e,t),Object.defineProperty(t.getters,n,{get:function(){return s[n]()},enumerable:!0})})),t._state=Object(r["B"])({data:e}),t.strict&&D(t),i&&n&&t._withCommit((function(){i.data=null}))}function k(t,e,n,r,i){var o=!n.length,s=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[s]&&console.error("[vuex] duplicate namespace "+s+" for the namespaced module "+n.join("/")),t._modulesNamespaceMap[s]=r),!o&&!i){var a=M(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit((function(){c in a&&console.warn('[vuex] state field "'+c+'" was overridden by a module with the same name at "'+n.join(".")+'"'),a[c]=r.state}))}var u=r.context=C(t,s,n);r.forEachMutation((function(e,n){var r=s+n;j(t,r,e,u)})),r.forEachAction((function(e,n){var r=e.root?n:s+n,i=e.handler||e;N(t,r,i,u)})),r.forEachGetter((function(e,n){var r=s+n;R(t,r,e,u)})),r.forEachChild((function(r,o){k(t,e,n.concat(o),r,i)}))}function C(t,e,n){var r=""===e,i={dispatch:r?t.dispatch:function(n,r,i){var o=P(n,r,i),s=o.payload,a=o.options,c=o.type;if(a&&a.root||(c=e+c,t._actions[c]))return t.dispatch(c,s);console.error("[vuex] unknown local action type: "+o.type+", global type: "+c)},commit:r?t.commit:function(n,r,i){var o=P(n,r,i),s=o.payload,a=o.options,c=o.type;a&&a.root||(c=e+c,t._mutations[c])?t.commit(c,s,a):console.error("[vuex] unknown local mutation type: "+o.type+", global type: "+c)}};return Object.defineProperties(i,{getters:{get:r?function(){return t.getters}:function(){return x(t,e)}},state:{get:function(){return M(t.state,n)}}}),i}function x(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach((function(i){if(i.slice(0,r)===e){var o=i.slice(r);Object.defineProperty(n,o,{get:function(){return t.getters[i]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function j(t,e,n,r){var i=t._mutations[e]||(t._mutations[e]=[]);i.push((function(e){n.call(t,r.state,e)}))}function N(t,e,n,r){var i=t._actions[e]||(t._actions[e]=[]);i.push((function(e){var i=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e);return l(i)||(i=Promise.resolve(i)),t._devtoolHook?i.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):i}))}function R(t,e,n,r){t._wrappedGetters[e]?console.error("[vuex] duplicate getter key: "+e):t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)}}function D(t){Object(r["R"])((function(){return t._state.data}),(function(){h(t._committing,"do not mutate vuex store state outside mutation handlers.")}),{deep:!0,flush:"sync"})}function M(t,e){return e.reduce((function(t,e){return t[e]}),t)}function P(t,e,n){return u(t)&&t.type&&(n=e,e=t,t=t.type),h("string"===typeof t,"expects string as the type, but found "+typeof t+"."),{type:t,payload:e,options:n}}E.prototype.install=function(t,e){t.provide(e||i,this),t.config.globalProperties.$store=this},T.state.get=function(){return this._state.data},T.state.set=function(t){h(!1,"use store.replaceState() to explicit replace store state.")},E.prototype.commit=function(t,e,n){var r=this,i=P(t,e,n),o=i.type,s=i.payload,a=i.options,c={type:o,payload:s},u=this._mutations[o];u?(this._withCommit((function(){u.forEach((function(t){t(s)}))})),this._subscribers.slice().forEach((function(t){return t(c,r.state)})),a&&a.silent&&console.warn("[vuex] mutation type: "+o+". Silent option has been removed. Use the filter functionality in the vue-devtools")):console.error("[vuex] unknown mutation type: "+o)},E.prototype.dispatch=function(t,e){var n=this,r=P(t,e),i=r.type,o=r.payload,s={type:i,payload:o},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(s,n.state)}))}catch(u){console.warn("[vuex] error in before action subscribers: "),console.error(u)}var c=a.length>1?Promise.all(a.map((function(t){return t(o)}))):a[0](o);return new Promise((function(t,e){c.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(s,n.state)}))}catch(u){console.warn("[vuex] error in after action subscribers: "),console.error(u)}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(s,n.state,t)}))}catch(u){console.warn("[vuex] error in error action subscribers: "),console.error(u)}e(t)}))}))}console.error("[vuex] unknown action type: "+i)},E.prototype.subscribe=function(t,e){return S(t,this._subscribers,e)},E.prototype.subscribeAction=function(t,e){var n="function"===typeof t?{before:t}:t;return S(n,this._actionSubscribers,e)},E.prototype.watch=function(t,e,n){var i=this;return h("function"===typeof t,"store.watch only accepts a function."),Object(r["R"])((function(){return t(i.state,i.getters)}),e,Object.assign({},n))},E.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._state.data=t}))},E.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),h(Array.isArray(t),"module path must be a string or an Array."),h(t.length>0,"cannot register the root module by using registerModule."),this._modules.register(t,e),k(this,this.state,t,this._modules.get(t),n.preserveState),A(this,this.state)},E.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),h(Array.isArray(t),"module path must be a string or an Array."),this._modules.unregister(t),this._withCommit((function(){var n=M(e.state,t.slice(0,-1));delete n[t[t.length-1]]})),I(this)},E.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),h(Array.isArray(t),"module path must be a string or an Array."),this._modules.isRegistered(t)},E.prototype.hotUpdate=function(t){this._modules.update(t),I(this,!0)},E.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(E.prototype,T);B((function(t,e){var n={};return F(e)||console.error("[vuex] mapState: mapper parameter must be either an Array or an Object"),U(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=$(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,e,n):e[i]},n[r].vuex=!0})),n})),B((function(t,e){var n={};return F(e)||console.error("[vuex] mapMutations: mapper parameter must be either an Array or an Object"),U(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var o=$(this.$store,"mapMutations",t);if(!o)return;r=o.context.commit}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n}));var L=B((function(t,e){var n={};return F(e)||console.error("[vuex] mapGetters: mapper parameter must be either an Array or an Object"),U(e).forEach((function(e){var r=e.key,i=e.val;i=t+i,n[r]=function(){if(!t||$(this.$store,"mapGetters",t)){if(i in this.$store.getters)return this.$store.getters[i];console.error("[vuex] unknown getter: "+i)}},n[r].vuex=!0})),n})),V=B((function(t,e){var n={};return F(e)||console.error("[vuex] mapActions: mapper parameter must be either an Array or an Object"),U(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var o=$(this.$store,"mapActions",t);if(!o)return;r=o.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n}));function U(t){return F(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function F(t){return Array.isArray(t)||u(t)}function B(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function $(t,e,n){var r=t._modulesNamespaceMap[n];return r||console.error("[vuex] module namespace not found in "+e+"(): "+n),r}}).call(this,n("c8ba"))},"552e":function(t,e,n){"use strict";n.d(e,"a",(function(){return I})),n.d(e,"b",(function(){return E}));var r=n("7a23"),i=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,l=(t,e,n)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,h=(t,e)=>{for(var n in e||(e={}))c.call(e,n)&&l(t,n,e[n]);if(a)for(var n of a(e))u.call(e,n)&&l(t,n,e[n]);return t},f=(t,e)=>o(t,s(e)),d="usehead",p="head:count",g="data-head-attrs",m=(t,e,n)=>{const r=n.createElement(t);for(const i of Object.keys(e)){let t=e[i];"key"!==i&&!1!==t&&("children"===i?r.textContent=t:r.setAttribute(i,t))}return r},v=t=>void 0!==t.key?{name:"key",value:t.key}:void 0!==t.name?{name:"name",value:t.name}:void 0!==t.property?{name:"property",value:t.property}:void 0,y=()=>{const t=Object(r["o"])(d);if(!t)throw new Error("You may forget to apply app.use(head)");return t},b=["title","meta","link","base","style","script","htmlAttrs","bodyAttrs"],w=t=>{const e=[];for(const n of Object.keys(t))if(null!=t[n])if("title"===n)e.push({tag:n,props:{children:t[n]}});else if("base"===n)e.push({tag:n,props:h({key:"default"},t[n])});else if(b.includes(n)){const r=t[n];Array.isArray(r)?r.forEach(t=>{e.push({tag:n,props:t})}):r&&e.push({tag:n,props:r})}return e},_=(t,e)=>{const n=t.getAttribute(g);if(n)for(const i of n.split(","))t.removeAttribute(i);const r=[];for(const i in e){const n=e[i];null!=n&&(!1===n?t.removeAttribute(i):t.setAttribute(i,n),r.push(i))}r.length?t.setAttribute(g,r.join(",")):t.removeAttribute(g)},O=(t,e=window.document)=>{const n=e.head;let r=n.querySelector(`meta[name="${p}"]`);const i=r?Number(r.getAttribute("content")):0,o=[];if(r)for(let l=0,h=r.previousElementSibling;l<i;l++,h=h.previousElementSibling)h&&o.push(h);else r=e.createElement("meta"),r.setAttribute("name",p),r.setAttribute("content","0"),n.append(r);const s=[];let a,c={},u={};for(const l of t)if("title"!==l.tag)if("htmlAttrs"!==l.tag)if("bodyAttrs"!==l.tag){if("meta"===l.tag){const t=v(l.props);if(t){const e=[...n.querySelectorAll(`meta[${t.name}="${t.value}"]`)];for(const t of e)o.includes(t)||o.push(t)}}s.push(m(l.tag,l.props,e))}else Object.assign(u,l.props);else Object.assign(c,l.props);else a=l.props.children;o.forEach(t=>{t.nextSibling&&t.nextSibling.nodeType===Node.TEXT_NODE&&t.nextSibling.remove(),t.remove()}),void 0!==a&&(e.title=a),_(e.documentElement,c),_(e.body,u),s.forEach(t=>{n.insertBefore(t,r)}),r.setAttribute("content",""+s.length)},E=()=>{let t=[];const e={install(t){t.config.globalProperties.$head=e,t.provide(d,e)},get headTags(){const e=[];return t.forEach(t=>{const n=w(t.value);n.forEach(t=>{if("meta"===t.tag||"base"===t.tag){const n=v(t.props);if(n){let r=-1;for(let i=0;i<e.length;i++){const o=e[i],s=o.props[n.name],a=t.props[n.name];if(o.tag===t.tag&&s===a){r=i;break}}-1!==r&&e.splice(r,1)}}e.push(t)})}),e},addHeadObjs(e){t.push(e)},removeHeadObjs(e){t=t.filter(t=>t!==e)},updateDOM(t){O(e.headTags,t)}};return e},T="undefined"!==typeof window,S=t=>{const e={title:void 0,htmlAttrs:void 0,bodyAttrs:void 0,base:void 0,meta:[],link:[],style:[],script:[]};for(const n of t){const t="html"===n.type?"htmlAttrs":"body"===n.type?"bodyAttrs":n.type;if("string"!==typeof t||!(t in e))continue;const r=f(h({},n.props),{children:Array.isArray(n.children)?n.children[0].children:n.children});Array.isArray(e[t])?e[t].push(r):"title"===t?e.title=r.children:e[t]=r}return e},I=Object(r["l"])({name:"Head",setup(t,{slots:e}){const n=y();let i;return Object(r["t"])(()=>{i&&(n.removeHeadObjs(i),n.updateDOM())}),()=>(Object(r["S"])(()=>{e.default&&(i&&n.removeHeadObjs(i),i=Object(r["C"])(S(e.default())),n.addHeadObjs(i),T&&n.updateDOM())}),null)}})},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},5692:function(t,e,n){var r=n("c430"),i=n("c6cd");(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.8.1",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},"56ef":function(t,e,n){var r=n("d066"),i=n("241c"),o=n("7418"),s=n("825a");t.exports=r("Reflect","ownKeys")||function(t){var e=i.f(s(t)),n=o.f;return n?e.concat(n(t)):e}},"585a":function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n("c8ba"))},"588e":function(t,e,n){"use strict";n.d(e,"a",(function(){return Zt})),n.d(e,"b",(function(){return ee})),n.d(e,"c",(function(){return te})),n.d(e,"d",(function(){return Qt}));var r=n("589b"),i=n("e3db"),o=n("22e5");
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
const s="firebasestorage.googleapis.com",a="storageBucket",c=12e4,u=6e5;
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
class l extends i["a"]{constructor(t,e){super(h(t),`Firebase Storage: ${e} (${h(t)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,l.prototype)}_codeEquals(t){return h(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function h(t){return"storage/"+t}function f(){const t="An unknown error occurred, please check the error payload for server response.";return new l("unknown",t)}function d(t){return new l("object-not-found","Object '"+t+"' does not exist.")}function p(t){return new l("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function g(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new l("unauthenticated",t)}function m(){return new l("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function v(t){return new l("unauthorized","User does not have permission to access '"+t+"'.")}function y(){return new l("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function b(){return new l("canceled","User canceled the upload/download.")}function w(t){return new l("invalid-url","Invalid URL '"+t+"'.")}function _(t){return new l("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function O(){return new l("no-default-bucket","No default bucket found. Did you set the '"+a+"' property when initializing the app?")}function E(){return new l("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function T(){return new l("no-download-url","The given file does not have any download URLs.")}function S(t){return new l("invalid-argument",t)}function I(){return new l("app-deleted","The Firebase app was deleted.")}function A(t){return new l("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function k(t,e){return new l("invalid-format","String does not match format '"+t+"': "+e)}function C(t){throw new l("internal-error","Internal error: "+t)}
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
 */class x{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=x.makeFromUrl(t,e)}catch(r){return new x(t,"")}if(""===n.path)return n;throw _(t)}static makeFromUrl(t,e){let n=null;const r="([A-Za-z0-9.\\-_]+)";function i(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function u(t){t.path_=decodeURIComponent(t.path)}const l="v[A-Za-z0-9_]+",h=e.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${l}/b/${r}/o${f}`,"i"),p={bucket:1,path:3},g=e===s?"(?:storage.googleapis.com|storage.cloud.google.com)":e,m="([^?#]*)",v=new RegExp(`^https?://${g}/${r}/${m}`,"i"),y={bucket:1,path:2},b=[{regex:a,indices:c,postModify:i},{regex:d,indices:p,postModify:u},{regex:v,indices:y,postModify:u}];for(let s=0;s<b.length;s++){const e=b[s],r=e.regex.exec(t);if(r){const t=r[e.indices.bucket];let i=r[e.indices.path];i||(i=""),n=new x(t,i),e.postModify(n);break}}if(null==n)throw w(t);return n}}class j{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
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
 */function N(t,e,n){let r=1,i=null,o=null,s=!1,a=0;function c(){return 2===a}let u=!1;function l(...t){u||(u=!0,e.apply(null,t))}function h(e){i=setTimeout(()=>{i=null,t(d,c())},e)}function f(){o&&clearTimeout(o)}function d(t,...e){if(u)return void f();if(t)return f(),void l.call(null,t,...e);const n=c()||s;if(n)return f(),void l.call(null,t,...e);let i;r<64&&(r*=2),1===a?(a=2,i=0):i=1e3*(r+Math.random()),h(i)}let p=!1;function g(t){p||(p=!0,f(),u||(null!==i?(t||(a=2),clearTimeout(i),h(0)):t||(a=1)))}return h(0),o=setTimeout(()=>{s=!0,g(!0)},n),g}function R(t){t(!1)}
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
 */function D(t){return void 0!==t}function M(t){return"object"===typeof t&&!Array.isArray(t)}function P(t){return"string"===typeof t||t instanceof String}function L(t){return V()&&t instanceof Blob}function V(){return"undefined"!==typeof Blob}function U(t,e,n,r){if(r<e)throw S(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw S(`Invalid value for '${t}'. Expected ${n} or less.`)}
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
 */function F(t,e,n){let r=e;return null==n&&(r="https://"+e),`${n}://${r}/v0${t}`}function B(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}
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
 */var $;(function(t){t[t["NO_ERROR"]=0]="NO_ERROR",t[t["NETWORK_ERROR"]=1]="NETWORK_ERROR",t[t["ABORT"]=2]="ABORT"})($||($={}));
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
class q{constructor(t,e,n,r,i,o,s,a,c,u,l){this.url_=t,this.method_=e,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=s,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=l,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()})}start_(){const t=(t,e)=>{if(e)return void t(!1,new H(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const e=n.getErrorCode()===$.NO_ERROR,i=n.getStatus();if(!e||this.isRetryStatusCode_(i)){const e=n.getErrorCode()===$.ABORT;return void t(!1,new H(!1,null,e))}const o=-1!==this.successCodes_.indexOf(i);t(!0,new H(o,n))})},e=(t,e)=>{const n=this.resolve_,r=this.reject_,i=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(i,i.getResponse());D(t)?n(t):n()}catch(o){r(o)}else if(null!==i){const t=f();t.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,t)):r(t)}else if(e.canceled){const t=this.appDelete_?I():b();r(t)}else{const t=y();r(t)}};this.canceled_?e(!1,new H(!1,null,!0)):this.backoffId_=N(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&R(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(t){const e=t>=500&&t<600,n=[408,429],r=-1!==n.indexOf(t),i=-1!==this.additionalRetryCodes_.indexOf(t);return e||r||i}}class H{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function z(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function W(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!==e&&void 0!==e?e:"AppManager")}function G(t,e){e&&(t["X-Firebase-GMPID"]=e)}function K(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}function Y(t,e,n,r,i,o){const s=B(t.urlParams),a=t.url+s,c=Object.assign({},t.headers);return G(c,e),z(c,n),W(c,o),K(c,r),new q(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i)}
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
 */function X(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function J(...t){const e=X();if(void 0!==e){const n=new e;for(let e=0;e<t.length;e++)n.append(t[e]);return n.getBlob()}if(V())return new Blob(t);throw new l("unsupported-environment","This browser doesn't seem to support creating Blobs")}function Q(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}
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
 */function Z(t){return atob(t)}
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
 */const tt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class et{constructor(t,e){this.data=t,this.contentType=e||null}}function nt(t,e){switch(t){case tt.RAW:return new et(rt(e));case tt.BASE64:case tt.BASE64URL:return new et(ot(t,e));case tt.DATA_URL:return new et(at(e),ct(e))}throw f()}function rt(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|63&r);else if(55296===(64512&r)){const i=n<t.length-1&&56320===(64512&t.charCodeAt(n+1));if(i){const i=r,o=t.charCodeAt(++n);r=65536|(1023&i)<<10|1023&o,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else e.push(239,191,189)}else 56320===(64512&r)?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(e)}function it(t){let e;try{e=decodeURIComponent(t)}catch(n){throw k(tt.DATA_URL,"Malformed data URL.")}return rt(e)}function ot(t,e){switch(t){case tt.BASE64:{const n=-1!==e.indexOf("-"),r=-1!==e.indexOf("_");if(n||r){const e=n?"-":"_";throw k(t,"Invalid character '"+e+"' found: is it base64url encoded?")}break}case tt.BASE64URL:{const n=-1!==e.indexOf("+"),r=-1!==e.indexOf("/");if(n||r){const e=n?"+":"/";throw k(t,"Invalid character '"+e+"' found: is it base64 encoded?")}e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Z(e)}catch(i){throw k(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let o=0;o<n.length;o++)r[o]=n.charCodeAt(o);return r}class st{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(null===e)throw k(tt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=e[1]||null;null!=n&&(this.base64=ut(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=t.substring(t.indexOf(",")+1)}}function at(t){const e=new st(t);return e.base64?ot(tt.BASE64,e.rest):it(e.rest)}function ct(t){const e=new st(t);return e.contentType}function ut(t,e){const n=t.length>=e.length;return!!n&&t.substring(t.length-e.length)===e}
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
 */class lt{constructor(t,e){let n=0,r="";L(t)?(this.data_=t,n=t.size,r=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,e){if(L(this.data_)){const n=this.data_,r=Q(n,t,e);return null===r?null:new lt(r)}{const n=new Uint8Array(this.data_.buffer,t,e-t);return new lt(n,!0)}}static getBlob(...t){if(V()){const e=t.map(t=>t instanceof lt?t.data_:t);return new lt(J.apply(null,e))}{const e=t.map(t=>P(t)?nt(tt.RAW,t).data:t.data_);let n=0;e.forEach(t=>{n+=t.byteLength});const r=new Uint8Array(n);let i=0;return e.forEach(t=>{for(let e=0;e<t.length;e++)r[i++]=t[e]}),new lt(r,!0)}}uploadData(){return this.data_}}
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
 */function ht(t){let e;try{e=JSON.parse(t)}catch(n){return null}return M(e)?e:null}
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
 */function ft(t){if(0===t.length)return null;const e=t.lastIndexOf("/");if(-1===e)return"";const n=t.slice(0,e);return n}function dt(t,e){const n=e.split("/").filter(t=>t.length>0).join("/");return 0===t.length?n:t+"/"+n}function pt(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
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
 */function gt(t,e){return e}class mt{constructor(t,e,n,r){this.server=t,this.local=e||t,this.writable=!!n,this.xform=r||gt}}let vt=null;function yt(t){return!P(t)||t.length<2?t:pt(t)}function bt(){if(vt)return vt;const t=[];function e(t,e){return yt(e)}t.push(new mt("bucket")),t.push(new mt("generation")),t.push(new mt("metageneration")),t.push(new mt("name","fullPath",!0));const n=new mt("name");function r(t,e){return void 0!==e?Number(e):e}n.xform=e,t.push(n);const i=new mt("size");return i.xform=r,t.push(i),t.push(new mt("timeCreated")),t.push(new mt("updated")),t.push(new mt("md5Hash",null,!0)),t.push(new mt("cacheControl",null,!0)),t.push(new mt("contentDisposition",null,!0)),t.push(new mt("contentEncoding",null,!0)),t.push(new mt("contentLanguage",null,!0)),t.push(new mt("contentType",null,!0)),t.push(new mt("metadata","customMetadata",!0)),vt=t,vt}function wt(t,e){function n(){const n=t["bucket"],r=t["fullPath"],i=new x(n,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function _t(t,e,n){const r={type:"file"},i=n.length;for(let o=0;o<i;o++){const t=n[o];r[t.local]=t.xform(r,e[t.server])}return wt(r,t),r}function Ot(t,e,n){const r=ht(e);if(null===r)return null;const i=r;return _t(t,i,n)}function Et(t,e,n,r){const i=ht(e);if(null===i)return null;if(!P(i["downloadTokens"]))return null;const o=i["downloadTokens"];if(0===o.length)return null;const s=encodeURIComponent,a=o.split(","),c=a.map(e=>{const i=t["bucket"],o=t["fullPath"],a="/b/"+s(i)+"/o/"+s(o),c=F(a,n,r),u=B({alt:"media",token:e});return c+u});return c[0]}function Tt(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const r=e[i];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}
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
 */class St{constructor(t,e,n,r){this.url=t,this.method=e,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
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
 */function It(t){if(!t)throw f()}function At(t,e){function n(n,r){const i=Ot(t,r,e);return It(null!==i),i}return n}function kt(t,e){function n(n,r){const i=Ot(t,r,e);return It(null!==i),Et(i,r,t.host,t._protocol)}return n}function Ct(t){function e(e,n){let r;return r=401===e.getStatus()?e.getErrorText().includes("Firebase App Check token is invalid")?m():g():402===e.getStatus()?p(t.bucket):403===e.getStatus()?v(t.path):n,r.serverResponse=n.serverResponse,r}return e}function xt(t){const e=Ct(t);function n(n,r){let i=e(n,r);return 404===n.getStatus()&&(i=d(t.path)),i.serverResponse=r.serverResponse,i}return n}function jt(t,e,n){const r=e.fullServerUrl(),i=F(r,t.host,t._protocol),o="GET",s=t.maxOperationRetryTime,a=new St(i,o,kt(t,n),s);return a.errorHandler=xt(e),a}function Nt(t,e){return t&&t["contentType"]||e&&e.type()||"application/octet-stream"}function Rt(t,e,n){const r=Object.assign({},n);return r["fullPath"]=t.path,r["size"]=e.size(),r["contentType"]||(r["contentType"]=Nt(null,e)),r}function Dt(t,e,n,r,i){const o=e.bucketOnlyServerUrl(),s={"X-Goog-Upload-Protocol":"multipart"};function a(){let t="";for(let e=0;e<2;e++)t+=Math.random().toString().slice(2);return t}const c=a();s["Content-Type"]="multipart/related; boundary="+c;const u=Rt(e,r,i),l=Tt(u,n),h="--"+c+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+l+"\r\n--"+c+"\r\nContent-Type: "+u["contentType"]+"\r\n\r\n",f="\r\n--"+c+"--",d=lt.getBlob(h,r,f);if(null===d)throw E();const p={name:u["fullPath"]},g=F(o,t.host,t._protocol),m="POST",v=t.maxUploadRetryTime,y=new St(g,m,At(t,n),v);return y.urlParams=p,y.headers=s,y.body=d.uploadData(),y.errorHandler=Ct(e),y}
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
let Mt=null;class Pt{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=$.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=$.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=$.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,e,n,r){if(this.sent_)throw C("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==r)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw C("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw C("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponse(){if(!this.sent_)throw C("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw C("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}class Lt extends Pt{initXhr(){this.xhr_.responseType="text"}}function Vt(){return Mt?Mt():new Lt}
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
class Ut{constructor(t,e){this._service=t,this._location=e instanceof x?e:x.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new Ut(t,e)}get root(){const t=new x(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return pt(this._location.path)}get storage(){return this._service}get parent(){const t=ft(this._location.path);if(null===t)return null;const e=new x(this._location.bucket,t);return new Ut(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw A(t)}}function Ft(t,e,n){t._throwIfRoot("uploadBytes");const r=Dt(t.storage,t._location,bt(),new lt(e,!0),n);return t.storage.makeRequestWithTokens(r,Vt).then(e=>({metadata:e,ref:t}))}function Bt(t){t._throwIfRoot("getDownloadURL");const e=jt(t.storage,t._location,bt());return t.storage.makeRequestWithTokens(e,Vt).then(t=>{if(null===t)throw T();return t})}function $t(t,e){const n=dt(t._location.path,e),r=new x(t._location.bucket,n);return new Ut(t.storage,r)}
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
 */function qt(t){return/^[A-Za-z]+:\/\//.test(t)}function Ht(t,e){return new Ut(t,e)}function zt(t,e){if(t instanceof Kt){const n=t;if(null==n._bucket)throw O();const r=new Ut(n,n._bucket);return null!=e?zt(r,e):r}return void 0!==e?$t(t,e):t}function Wt(t,e){if(e&&qt(e)){if(t instanceof Kt)return Ht(t,e);throw S("To use ref(service, url), the first argument must be a Storage instance.")}return zt(t,e)}function Gt(t,e){const n=null===e||void 0===e?void 0:e[a];return null==n?null:x.makeFromBucketSpec(n,t)}class Kt{constructor(t,e,n,r,i){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=s,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=c,this._maxUploadRetryTime=u,this._requests=new Set,this._bucket=null!=r?x.makeFromBucketSpec(r,this._host):Gt(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=x.makeFromBucketSpec(this._url,t):this._bucket=Gt(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){U("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){U("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();return e.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Ut(this,t)}_makeRequest(t,e,n,r){if(this._deleted)return new j(I());{const i=Y(t,this._appId,n,r,e,this._firebaseVersion);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(t,e){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,r).getPromise()}}const Yt="@firebase/storage",Xt="0.9.2",Jt="storage";function Qt(t,e,n){return t=Object(i["c"])(t),Ft(t,e,n)}function Zt(t){return t=Object(i["c"])(t),Bt(t)}function te(t,e){return t=Object(i["c"])(t),Wt(t,e)}function ee(t=Object(r["e"])(),e){t=Object(i["c"])(t);const n=Object(r["b"])(t,Jt),o=n.getImmediate({identifier:e});return o}function ne(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),o=t.getProvider("app-check-internal");return new Kt(n,i,o,e,r["a"])}function re(){Object(r["c"])(new o["a"](Jt,ne,"PUBLIC").setMultipleInstances(!0)),Object(r["g"])(Yt,Xt,""),Object(r["g"])(Yt,Xt,"esm2017")}re()},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"589b":function(t,e,n){"use strict";n.d(e,"a",(function(){return tt})),n.d(e,"b",(function(){return Y})),n.d(e,"c",(function(){return K})),n.d(e,"d",(function(){return X})),n.d(e,"e",(function(){return nt})),n.d(e,"f",(function(){return et})),n.d(e,"g",(function(){return rt}));var r=n("22e5");
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
 */const i=[];var o;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(o||(o={}));const s={debug:o.DEBUG,verbose:o.VERBOSE,info:o.INFO,warn:o.WARN,error:o.ERROR,silent:o.SILENT},a=o.INFO,c={[o.DEBUG]:"log",[o.VERBOSE]:"log",[o.INFO]:"info",[o.WARN]:"warn",[o.ERROR]:"error"},u=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=c[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class l{constructor(t){this.name=t,this._logLevel=a,this._logHandler=u,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in o))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,o.DEBUG,...t),this._logHandler(this,o.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,o.VERBOSE,...t),this._logHandler(this,o.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,o.INFO,...t),this._logHandler(this,o.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,o.WARN,...t),this._logHandler(this,o.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,o.ERROR,...t),this._logHandler(this,o.ERROR,...t)}}var h=n("d563"),f=n("9dbb");
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
class d{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map(t=>{if(p(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}function p(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const g="@firebase/app",m="0.7.18",v=new l("@firebase/app"),y="@firebase/app-compat",b="@firebase/analytics-compat",w="@firebase/analytics",_="@firebase/app-check-compat",O="@firebase/app-check",E="@firebase/auth",T="@firebase/auth-compat",S="@firebase/database",I="@firebase/database-compat",A="@firebase/functions",k="@firebase/functions-compat",C="@firebase/installations",x="@firebase/installations-compat",j="@firebase/messaging",N="@firebase/messaging-compat",R="@firebase/performance",D="@firebase/performance-compat",M="@firebase/remote-config",P="@firebase/remote-config-compat",L="@firebase/storage",V="@firebase/storage-compat",U="@firebase/firestore",F="@firebase/firestore-compat",B="firebase",$="9.6.8",q="[DEFAULT]",H={[g]:"fire-core",[y]:"fire-core-compat",[w]:"fire-analytics",[b]:"fire-analytics-compat",[O]:"fire-app-check",[_]:"fire-app-check-compat",[E]:"fire-auth",[T]:"fire-auth-compat",[S]:"fire-rtdb",[I]:"fire-rtdb-compat",[A]:"fire-fn",[k]:"fire-fn-compat",[C]:"fire-iid",[x]:"fire-iid-compat",[j]:"fire-fcm",[N]:"fire-fcm-compat",[R]:"fire-perf",[D]:"fire-perf-compat",[M]:"fire-rc",[P]:"fire-rc-compat",[L]:"fire-gcs",[V]:"fire-gcs-compat",[U]:"fire-fst",[F]:"fire-fst-compat","fire-js":"fire-js",[B]:"fire-js-all"},z=new Map,W=new Map;function G(t,e){try{t.container.addComponent(e)}catch(n){v.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function K(t){const e=t.name;if(W.has(e))return v.debug(`There were multiple attempts to register component ${e}.`),!1;W.set(e,t);for(const n of z.values())G(n,t);return!0}function Y(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function X(t,e,n=q){Y(t,e).clearInstance(n)}
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
const J={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Q=new h["a"]("app","Firebase",J);
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
class Z{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Q.create("app-deleted",{appName:this._name})}}
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
 */const tt=$;function et(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:q,automaticDataCollectionEnabled:!1},e),i=n.name;if("string"!==typeof i||!i)throw Q.create("bad-app-name",{appName:String(i)});const o=z.get(i);if(o){if(Object(h["c"])(t,o.options)&&Object(h["c"])(n,o.config))return o;throw Q.create("duplicate-app",{appName:i})}const s=new r["b"](i);for(const r of W.values())s.addComponent(r);const a=new Z(t,n,s);return z.set(i,a),a}function nt(t=q){const e=z.get(t);if(!e)throw Q.create("no-app",{appName:t});return e}function rt(t,e,n){var i;let o=null!==(i=H[t])&&void 0!==i?i:t;n&&(o+="-"+n);const s=o.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const t=[`Unable to register library "${o}" with version "${e}":`];return s&&t.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void v.warn(t.join(" "))}K(new r["a"](o+"-version",()=>({library:o,version:e}),"VERSION"))}
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
const it="firebase-heartbeat-database",ot=1,st="firebase-heartbeat-store";let at=null;function ct(){return at||(at=Object(f["openDb"])(it,ot,t=>{switch(t.oldVersion){case 0:t.createObjectStore(st)}}).catch(t=>{throw Q.create("storage-open",{originalErrorMessage:t.message})})),at}async function ut(t){try{const e=await ct();return e.transaction(st).objectStore(st).get(ft(t))}catch(e){throw Q.create("storage-get",{originalErrorMessage:e.message})}}async function lt(t,e){try{const n=await ct(),r=n.transaction(st,"readwrite"),i=r.objectStore(st);return await i.put(e,ft(t)),r.complete}catch(n){throw Q.create("storage-set",{originalErrorMessage:n.message})}}async function ht(t){try{const e=await ct(),n=e.transaction(st,"readwrite");return await n.objectStore(st).delete(ft(t)),n.complete}catch(e){throw Q.create("storage-delete",{originalErrorMessage:e.message})}}function ft(t){return`${t.name}!${t.options.appId}`}
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
 */const dt=1024,pt=2592e6;class gt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new yt(e),this._heartbeatsCachePromise=this._storage.read().then(t=>(this._heartbeatsCache=t,t))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=mt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!this._heartbeatsCache.some(t=>t.date===n))return this._heartbeatsCache.push({date:n,userAgent:e}),this._heartbeatsCache=this._heartbeatsCache.filter(t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=pt}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache)return"";const{heartbeatsToSend:t,unsentEntries:e}=vt(this._heartbeatsCache),n=Object(h["b"])(JSON.stringify({version:2,heartbeats:t}));return e.length>0?(this._heartbeatsCache=e,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache=null,this._storage.deleteAll()),n}}function mt(){const t=new Date;return t.toISOString().substring(0,10)}function vt(t,e=dt){const n=[];let r=t.slice();for(const i of t){const t=n.find(t=>t.userAgent===i.userAgent);if(t){if(t.dates.push(i.date),bt(n)>e){t.dates.pop();break}}else if(n.push({userAgent:i.userAgent,dates:[i.date]}),bt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class yt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Object(h["d"])()&&Object(h["e"])().then(()=>!0).catch(()=>!1)}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await ut(this.app);return(null===t||void 0===t?void 0:t.heartbeats)||[]}return[]}async overwrite(t){const e=await this._canUseIndexedDBPromise;return e?lt(this.app,{heartbeats:t}):void 0}async add(t){const e=await this._canUseIndexedDBPromise;if(e){const e=await this.read();return lt(this.app,{heartbeats:[...e,...t]})}}async delete(t){const e=await this._canUseIndexedDBPromise;if(e){const e=await this.read();return lt(this.app,{heartbeats:e.filter(e=>!t.includes(e))})}}async deleteAll(){const t=await this._canUseIndexedDBPromise;return t?ht(this.app):void 0}}function bt(t){return Object(h["b"])(JSON.stringify({version:2,heartbeats:t})).length}
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
 */function wt(t){K(new r["a"]("platform-logger",t=>new d(t),"PRIVATE")),K(new r["a"]("heartbeat",t=>new gt(t),"PRIVATE")),rt(g,m,t),rt(g,m,"esm2017"),rt("fire-js","")}wt("")},"58a8":function(t,e,n){var r=n("1d80"),i=n("5899"),o="["+i+"]",s=RegExp("^"+o+o+"*"),a=RegExp(o+o+"*$"),c=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(s,"")),2&t&&(n=n.replace(a,"")),n}};t.exports={start:c(1),end:c(2),trim:c(3)}},"5a0c":function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",o="week",s="month",a="quarter",c="year",u="date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},d=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},p={s:d,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+d(r,2,"0")+":"+d(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,s),o=n-i<0,a=e.clone().add(r+(o?-1:1),s);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(l){return{M:s,y:c,w:o,d:i,D:u,h:r,m:n,s:e,ms:t,Q:a}[l]||String(l||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",m={};m[g]=f;var v=function(t){return t instanceof _},y=function(t,e,n){var r;if(!t)return g;if("string"==typeof t)m[t]&&(r=t),e&&(m[t]=e,r=t);else{var i=t.name;m[i]=t,r=i}return!n&&r&&(g=r),r||!n&&g},b=function(t,e){if(v(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},w=p;w.l=y,w.i=v,w.w=function(t,e){return b(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function f(t){this.$L=y(t.locale,null,!0),this.parse(t)}var d=f.prototype;return d.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},d.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},d.$utils=function(){return w},d.isValid=function(){return!("Invalid Date"===this.$d.toString())},d.isSame=function(t,e){var n=b(t);return this.startOf(e)<=n&&n<=this.endOf(e)},d.isAfter=function(t,e){return b(t)<this.startOf(e)},d.isBefore=function(t,e){return this.endOf(e)<b(t)},d.$g=function(t,e,n){return w.u(t)?this[e]:this.set(n,t)},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,a){var l=this,h=!!w.u(a)||a,f=w.p(t),d=function(t,e){var n=w.w(l.$u?Date.UTC(l.$y,e,t):new Date(l.$y,e,t),l);return h?n:n.endOf(i)},p=function(t,e){return w.w(l.toDate()[t].apply(l.toDate("s"),(h?[0,0,0,0]:[23,59,59,999]).slice(e)),l)},g=this.$W,m=this.$M,v=this.$D,y="set"+(this.$u?"UTC":"");switch(f){case c:return h?d(1,0):d(31,11);case s:return h?d(1,m):d(0,m+1);case o:var b=this.$locale().weekStart||0,_=(g<b?g+7:g)-b;return d(h?v-_:v+(6-_),m);case i:case u:return p(y+"Hours",0);case r:return p(y+"Minutes",1);case n:return p(y+"Seconds",2);case e:return p(y+"Milliseconds",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(o,a){var l,h=w.p(o),f="set"+(this.$u?"UTC":""),d=(l={},l[i]=f+"Date",l[u]=f+"Date",l[s]=f+"Month",l[c]=f+"FullYear",l[r]=f+"Hours",l[n]=f+"Minutes",l[e]=f+"Seconds",l[t]=f+"Milliseconds",l)[h],p=h===i?this.$D+(a-this.$W):a;if(h===s||h===c){var g=this.clone().set(u,1);g.$d[d](p),g.init(),this.$d=g.set(u,Math.min(this.$D,g.daysInMonth())).$d}else d&&this.$d[d](p);return this.init(),this},d.set=function(t,e){return this.clone().$set(t,e)},d.get=function(t){return this[w.p(t)]()},d.add=function(t,a){var u,l=this;t=Number(t);var h=w.p(a),f=function(e){var n=b(l);return w.w(n.date(n.date()+Math.round(e*t)),l)};if(h===s)return this.set(s,this.$M+t);if(h===c)return this.set(c,this.$y+t);if(h===i)return f(1);if(h===o)return f(7);var d=(u={},u[n]=6e4,u[r]=36e5,u[e]=1e3,u)[h]||1,p=this.$d.getTime()+t*d;return w.w(p,this)},d.subtract=function(t,e){return this.add(-1*t,e)},d.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=w.z(this),i=this.$locale(),o=this.$H,s=this.$m,a=this.$M,c=i.weekdays,u=i.months,l=function(t,r,i,o){return t&&(t[r]||t(e,n))||i[r].substr(0,o)},f=function(t){return w.s(o%12||12,t,"0")},d=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:w.s(a+1,2,"0"),MMM:l(i.monthsShort,a,u,3),MMMM:l(u,a),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:l(i.weekdaysMin,this.$W,c,2),ddd:l(i.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(o),HH:w.s(o,2,"0"),h:f(1),hh:f(2),a:d(o,s,!0),A:d(o,s,!1),m:String(s),mm:w.s(s,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:r};return n.replace(h,(function(t,e){return e||p[t]||r.replace(":","")}))},d.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},d.diff=function(t,u,l){var h,f=w.p(u),d=b(t),p=6e4*(d.utcOffset()-this.utcOffset()),g=this-d,m=w.m(this,d);return m=(h={},h[c]=m/12,h[s]=m,h[a]=m/3,h[o]=(g-p)/6048e5,h[i]=(g-p)/864e5,h[r]=g/36e5,h[n]=g/6e4,h[e]=g/1e3,h)[f]||g,l?m:w.a(m)},d.daysInMonth=function(){return this.endOf(s).$D},d.$locale=function(){return m[this.$L]},d.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=y(t,e,!0);return r&&(n.$L=r),n},d.clone=function(){return w.w(this.$d,this)},d.toDate=function(){return new Date(this.valueOf())},d.toJSON=function(){return this.isValid()?this.toISOString():null},d.toISOString=function(){return this.$d.toISOString()},d.toString=function(){return this.$d.toUTCString()},f}(),O=_.prototype;return b.prototype=O,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",s],["$y",c],["$D",u]].forEach((function(t){O[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),b.extend=function(t,e){return t.$i||(t(e,_,b),t.$i=!0),b},b.locale=y,b.isDayjs=v,b.unix=function(t){return b(1e3*t)},b.en=m[g],b.Ls=m,b.p={},b}))},"5a34":function(t,e,n){var r=n("44e7");t.exports=function(t){if(r(t))throw TypeError("The method doesn't accept regular expressions");return t}},"5c6c":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"605d":function(t,e,n){var r=n("c6b6"),i=n("da84");t.exports="process"==r(i.process)},"60da":function(t,e,n){"use strict";var r=n("83ab"),i=n("d039"),o=n("df75"),s=n("7418"),a=n("d1e7"),c=n("7b0b"),u=n("44ad"),l=Object.assign,h=Object.defineProperty;t.exports=!l||i((function(){if(r&&1!==l({b:1},l(h({},"a",{enumerable:!0,get:function(){h(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol(),i="abcdefghijklmnopqrst";return t[n]=7,i.split("").forEach((function(t){e[t]=t})),7!=l({},t)[n]||o(l({},e)).join("")!=i}))?function(t,e){var n=c(t),i=arguments.length,l=1,h=s.f,f=a.f;while(i>l){var d,p=u(arguments[l++]),g=h?o(p).concat(h(p)):o(p),m=g.length,v=0;while(m>v)d=g[v++],r&&!f.call(p,d)||(n[d]=p[d])}return n}:l},6428:function(t,e,n){var r=n("b4b0"),i=1/0,o=17976931348623157e292;function s(t){if(!t)return 0===t?t:0;if(t=r(t),t===i||t===-i){var e=t<0?-1:1;return e*o}return t===t?t:0}t.exports=s},6547:function(t,e,n){var r=n("a691"),i=n("1d80"),o=function(t){return function(e,n){var o,s,a=String(i(e)),c=r(n),u=a.length;return c<0||c>=u?t?"":void 0:(o=a.charCodeAt(c),o<55296||o>56319||c+1===u||(s=a.charCodeAt(c+1))<56320||s>57343?t?a.charAt(c):o:t?a.slice(c,c+2):s-56320+(o-55296<<10)+65536)}};t.exports={codeAt:o(!1),charAt:o(!0)}},"65f0":function(t,e,n){var r=n("861d"),i=n("e8b5"),o=n("b622"),s=o("species");t.exports=function(t,e){var n;return i(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?r(n)&&(n=n[s],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},6690:function(t,e,n){"use strict";(function(t){function r(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?t=>!!n[t.toLowerCase()]:t=>!!n[t]}n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return m})),n.d(e,"d",(function(){return g})),n.d(e,"e",(function(){return V})),n.d(e,"f",(function(){return B})),n.d(e,"g",(function(){return z})),n.d(e,"h",(function(){return w})),n.d(e,"i",(function(){return q})),n.d(e,"j",(function(){return E})),n.d(e,"k",(function(){return F})),n.d(e,"l",(function(){return H})),n.d(e,"m",(function(){return T})),n.d(e,"n",(function(){return A})),n.d(e,"o",(function(){return o})),n.d(e,"p",(function(){return S})),n.d(e,"q",(function(){return b})),n.d(e,"r",(function(){return C})),n.d(e,"s",(function(){return y})),n.d(e,"t",(function(){return D})),n.d(e,"u",(function(){return x})),n.d(e,"v",(function(){return M})),n.d(e,"w",(function(){return I})),n.d(e,"x",(function(){return k})),n.d(e,"y",(function(){return r})),n.d(e,"z",(function(){return l})),n.d(e,"A",(function(){return s})),n.d(e,"B",(function(){return _})),n.d(e,"C",(function(){return h})),n.d(e,"D",(function(){return $})),n.d(e,"E",(function(){return W})),n.d(e,"F",(function(){return R}));const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",o=r(i);function s(t){if(T(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=k(r)?u(r):s(r);if(i)for(const t in i)e[t]=i[t]}return e}return k(t)||C(t)?t:void 0}const a=/;(?![^(]*\))/g,c=/:(.+)/;function u(t){const e={};return t.split(a).forEach(t=>{if(t){const n=t.split(c);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function l(t){let e="";if(k(t))e=t;else if(T(t))for(let n=0;n<t.length;n++){const r=l(t[n]);r&&(e+=r+" ")}else if(C(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const h=t=>null==t?"":T(t)||C(t)&&(t.toString===j||!A(t.toString))?JSON.stringify(t,f,2):String(t),f=(t,e)=>e&&e.__v_isRef?f(t,e.value):S(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[e,n])=>(t[e+" =>"]=n,t),{})}:I(e)?{[`Set(${e.size})`]:[...e.values()]}:!C(e)||T(e)||D(e)?e:String(e),d={},p=[],g=()=>{},m=()=>!1,v=/^on[^a-z]/,y=t=>v.test(t),b=t=>t.startsWith("onUpdate:"),w=Object.assign,_=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},O=Object.prototype.hasOwnProperty,E=(t,e)=>O.call(t,e),T=Array.isArray,S=t=>"[object Map]"===N(t),I=t=>"[object Set]"===N(t),A=t=>"function"===typeof t,k=t=>"string"===typeof t,C=t=>null!==t&&"object"===typeof t,x=t=>C(t)&&A(t.then)&&A(t.catch),j=Object.prototype.toString,N=t=>j.call(t),R=t=>N(t).slice(8,-1),D=t=>"[object Object]"===N(t),M=r(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),P=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},L=/-(\w)/g,V=P(t=>t.replace(L,(t,e)=>e?e.toUpperCase():"")),U=/\B([A-Z])/g,F=P(t=>t.replace(U,"-$1").toLowerCase()),B=P(t=>t.charAt(0).toUpperCase()+t.slice(1)),$=P(t=>t?"on"+B(t):""),q=(t,e)=>!Object.is(t,e),H=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},z=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},W=t=>{const e=parseFloat(t);return isNaN(e)?t:e}}).call(this,n("c8ba"))},"69f3":function(t,e,n){var r,i,o,s=n("7f9a"),a=n("da84"),c=n("861d"),u=n("9112"),l=n("5135"),h=n("c6cd"),f=n("f772"),d=n("d012"),p=a.WeakMap,g=function(t){return o(t)?i(t):r(t,{})},m=function(t){return function(e){var n;if(!c(e)||(n=i(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}};if(s){var v=h.state||(h.state=new p),y=v.get,b=v.has,w=v.set;r=function(t,e){return e.facade=t,w.call(v,t,e),e},i=function(t){return y.call(v,t)||{}},o=function(t){return b.call(v,t)}}else{var _=f("state");d[_]=!0,r=function(t,e){return e.facade=t,u(t,_,e),e},i=function(t){return l(t,_)?t[_]:{}},o=function(t){return l(t,_)}}t.exports={set:r,get:i,has:o,enforce:g,getterFor:m}},"6b75":function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,"a",(function(){return r}))},"6c02":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return Zt})),n.d(e,"b",(function(){return H}));var r=n("7a23");
/*!
  * vue-router v4.0.3
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const i="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,o=t=>i?Symbol(t):"_vr_"+t,s=o("rvlm"),a=o("rvd"),c=o("r"),u=o("rl"),l=o("rvl"),h="undefined"!==typeof window;function f(t){return t.__esModule||i&&"Module"===t[Symbol.toStringTag]}const d=Object.assign;function p(t,e){const n={};for(const r in e){const i=e[r];n[r]=Array.isArray(i)?i.map(t):t(i)}return n}let g=()=>{};const m=/\/$/,v=t=>t.replace(m,"");function y(t,e,n="/"){let r,i={},o="",s="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),o=e.slice(a+1,c>-1?c:e.length),i=t(o)),c>-1&&(r=r||e.slice(0,c),s=e.slice(c,e.length)),r=I(null!=r?r:e,n),{fullPath:r+(o&&"?")+o+s,path:r,query:i,hash:s}}function b(t,e){let n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function w(t,e){return!e||t.toLowerCase().indexOf(e.toLowerCase())?t:t.slice(e.length)||"/"}function _(t,e,n){let r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&O(e.matched[r],n.matched[i])&&E(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function O(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function E(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(let n in t)if(!T(t[n],e[n]))return!1;return!0}function T(t,e){return Array.isArray(t)?S(t,e):Array.isArray(e)?S(e,t):t===e}function S(t,e){return Array.isArray(e)?t.length===e.length&&t.every((t,n)=>t===e[n]):1===t.length&&t[0]===e}function I(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let i,o,s=n.length-1;for(i=0;i<r.length;i++)if(o=r[i],1!==s&&"."!==o){if(".."!==o)break;s--}return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var A,k;(function(t){t["pop"]="pop",t["push"]="push"})(A||(A={})),function(t){t["back"]="back",t["forward"]="forward",t["unknown"]=""}(k||(k={}));function C(t){if(!t)if(h){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return"/"!==t[0]&&"#"!==t[0]&&(t="/"+t),v(t)}const x=/^[^#]+#/;function j(t,e){return t.replace(x,"#")+e}function N(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const R=()=>({left:window.pageXOffset,top:window.pageYOffset});function D(t){let e;if("el"in t){let n=t.el;const r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=N(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(null!=e.left?e.left:window.pageXOffset,null!=e.top?e.top:window.pageYOffset)}function M(t,e){const n=history.state?history.state.position-e:-1;return n+t}const P=new Map;function L(t,e){P.set(t,e)}function V(t){const e=P.get(t);return P.delete(t),e}let U=()=>location.protocol+"//"+location.host;function F(t,e){const{pathname:n,search:r,hash:i}=e,o=t.indexOf("#");if(o>-1){let t=i.slice(1);return"/"!==t[0]&&(t="/"+t),w(t,"")}const s=w(n,t);return s+r+i}function B(t,e,n,r){let i=[],o=[],s=null;const a=({state:o})=>{const a=F(t,location),c=n.value,u=e.value;let l=0;if(o){if(n.value=a,e.value=o,s&&s===c)return void(s=null);l=u?o.position-u.position:0}else r(a);i.forEach(t=>{t(n.value,c,{delta:l,type:A.pop,direction:l?l>0?k.forward:k.back:k.unknown})})};function c(){s=n.value}function u(t){i.push(t);const e=()=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)};return o.push(e),e}function l(){const{history:t}=window;t.state&&t.replaceState(d({},t.state,{scroll:R()}),"")}function h(){for(const t of o)t();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function $(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?R():null}}function q(t){const{history:e,location:n}=window;let r={value:F(t,n)},i={value:e.state};function o(r,o,s){const a=t.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?t:t.slice(a))+r:U()+t+r;try{e[s?"replaceState":"pushState"](o,"",c),i.value=o}catch(u){console.error(u),n[s?"replace":"assign"](c)}}function s(t,n){const s=d({},e.state,$(i.value.back,t,i.value.forward,!0),n,{position:i.value.position});o(t,s,!0),r.value=t}function a(t,n){const s=d({},i.value,e.state,{forward:t,scroll:R()});o(s.current,s,!0);const a=d({},$(r.value,t,null),{position:s.position+1},n);o(t,a,!1),r.value=t}return i.value||o(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:a,replace:s}}function H(t){t=C(t);const e=q(t),n=B(t,e.state,e.location,e.replace);function r(t,e=!0){e||n.pauseListeners(),history.go(t)}const i=d({location:"",base:t,go:r,createHref:j.bind(null,t)},e,n);return Object.defineProperty(i,"location",{get:()=>e.location.value}),Object.defineProperty(i,"state",{get:()=>e.state.value}),i}function z(t){return"string"===typeof t||t&&"object"===typeof t}function W(t){return"string"===typeof t||"symbol"===typeof t}const G={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},K=o("nf");var Y;(function(t){t[t["aborted"]=4]="aborted",t[t["cancelled"]=8]="cancelled",t[t["duplicated"]=16]="duplicated"})(Y||(Y={}));function X(t,e){return d(new Error,{type:t,[K]:!0},e)}function J(t,e){return t instanceof Error&&K in t&&(null==e||!!(t.type&e))}const Q="[^/]+?",Z={sensitive:!1,strict:!1,start:!0,end:!0},tt=/[.+*?^${}()[\]/\\]/g;function et(t,e){const n=d({},Z,e);let r=[],i=n.start?"^":"";const o=[];for(const l of t){const t=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let e=0;e<l.length;e++){const r=l[e];let s=40+(n.sensitive?.25:0);if(0===r.type)e||(i+="/"),i+=r.value.replace(tt,"\\$&"),s+=40;else if(1===r.type){const{value:t,repeatable:n,optional:a,regexp:c}=r;o.push({name:t,repeatable:n,optional:a});const l=c||Q;if(l!==Q){s+=10;try{new RegExp(`(${l})`)}catch(u){throw new Error(`Invalid custom RegExp for param "${t}" (${l}): `+u.message)}}let h=n?`((?:${l})(?:/(?:${l}))*)`:`(${l})`;e||(h=a?`(?:/${h})`:"/"+h),a&&(h+="?"),i+=h,s+=20,a&&(s+=-8),n&&(s+=-20),".*"===l&&(s+=-50)}t.push(s)}r.push(t)}if(n.strict&&n.end){const t=r.length-1;r[t][r[t].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const s=new RegExp(i,n.sensitive?"":"i");function a(t){const e=t.match(s),n={};if(!e)return null;for(let r=1;r<e.length;r++){const t=e[r]||"",i=o[r-1];n[i.name]=t&&i.repeatable?t.split("/"):t}return n}function c(e){let n="",r=!1;for(const i of t){r&&n.endsWith("/")||(n+="/"),r=!1;for(const t of i)if(0===t.type)n+=t.value;else if(1===t.type){const{value:i,repeatable:o,optional:s}=t,a=i in e?e[i]:"";if(Array.isArray(a)&&!o)throw new Error(`Provided param "${i}" is an array but it is not repeatable (* or + modifiers)`);const c=Array.isArray(a)?a.join("/"):a;if(!c){if(!s)throw new Error(`Missing required param "${i}"`);n.endsWith("/")?n=n.slice(0,-1):r=!0}n+=c}}return n}return{re:s,score:r,keys:o,parse:a,stringify:c}}function nt(t,e){let n=0;while(n<t.length&&n<e.length){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?1===t.length&&80===t[0]?-1:1:t.length>e.length?1===e.length&&80===e[0]?1:-1:0}function rt(t,e){let n=0;const r=t.score,i=e.score;while(n<r.length&&n<i.length){const t=nt(r[n],i[n]);if(t)return t;n++}return i.length-r.length}const it={type:0,value:""},ot=/[a-zA-Z0-9_]/;function st(t){if(!t)return[[]];if("/"===t)return[[it]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(t){throw new Error(`ERR (${n})/"${u}": ${t}`)}let n=0,r=n;const i=[];let o;function s(){o&&i.push(o),o=[]}let a,c=0,u="",l="";function h(){u&&(0===n?o.push({type:0,value:u}):1===n||2===n||3===n?(o.length>1&&("*"===a||"+"===a)&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):e("Invalid state to consume buffer"),u="")}function f(){u+=a}while(c<t.length)if(a=t[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),s()):":"===a?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:"("===a?n=2:ot.test(a)?f():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:e("Unknown state");break}else r=n,n=4;return 2===n&&e(`Unfinished custom RegExp for param "${u}"`),h(),s(),i}function at(t,e,n){const r=et(st(t.path),n);const i=d(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf===!e.record.aliasOf&&e.children.push(i),i}function ct(t,e){const n=[],r=new Map;function i(t){return r.get(t)}function o(t,n,r){let i=!r,a=lt(t);a.aliasOf=r&&r.record;const u=pt(e,t),l=[a];if("alias"in t){const e="string"===typeof t.alias?[t.alias]:t.alias;for(const t of e)l.push(d({},a,{components:r?r.record.components:a.components,path:t,aliasOf:r?r.record:a}))}let h,f;for(const e of l){let{path:l}=e;if(n&&"/"!==l[0]){let t=n.record.path,r="/"===t[t.length-1]?"":"/";e.path=n.record.path+(l&&r+l)}if(h=at(e,n,u),r?r.alias.push(h):(f=f||h,f!==h&&f.alias.push(h),i&&t.name&&!ft(h)&&s(t.name)),"children"in a){let t=a.children;for(let e=0;e<t.length;e++)o(t[e],h,r&&r.children[e])}r=r||h,c(h)}return f?()=>{s(f)}:g}function s(t){if(W(t)){const e=r.get(t);e&&(r.delete(t),n.splice(n.indexOf(e),1),e.children.forEach(s),e.alias.forEach(s))}else{let e=n.indexOf(t);e>-1&&(n.splice(e,1),t.record.name&&r.delete(t.record.name),t.children.forEach(s),t.alias.forEach(s))}}function a(){return n}function c(t){let e=0;while(e<n.length&&rt(t,n[e])>=0)e++;n.splice(e,0,t),t.record.name&&!ft(t)&&r.set(t.record.name,t)}function u(t,e){let i,o,s,a={};if("name"in t&&t.name){if(i=r.get(t.name),!i)throw X(1,{location:t});s=i.record.name,a=d(ut(e.params,i.keys.filter(t=>!t.optional).map(t=>t.name)),t.params),o=i.stringify(a)}else if("path"in t)o=t.path,i=n.find(t=>t.re.test(o)),i&&(a=i.parse(o),s=i.record.name);else{if(i=e.name?r.get(e.name):n.find(t=>t.re.test(e.path)),!i)throw X(1,{location:t,currentLocation:e});s=i.record.name,a=d({},e.params,t.params),o=i.stringify(a)}const c=[];let u=i;while(u)c.unshift(u.record),u=u.parent;return{name:s,path:o,params:a,matched:c,meta:dt(c)}}return e=pt({strict:!1,end:!0,sensitive:!1},e),t.forEach(t=>o(t)),{addRoute:o,resolve:u,removeRoute:s,getRoutes:a,getRecordMatcher:i}}function ut(t,e){let n={};for(let r of e)r in t&&(n[r]=t[r]);return n}function lt(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:ht(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function ht(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(let r in t.components)e[r]="boolean"===typeof n?n:n[r];return e}function ft(t){while(t){if(t.record.aliasOf)return!0;t=t.parent}return!1}function dt(t){return t.reduce((t,e)=>d(t,e.meta),{})}function pt(t,e){let n={};for(let r in t)n[r]=r in e?e[r]:t[r];return n}const gt=/#/g,mt=/&/g,vt=/\//g,yt=/=/g,bt=/\?/g,wt=/\+/g,_t=/%5B/g,Ot=/%5D/g,Et=/%5E/g,Tt=/%60/g,St=/%7B/g,It=/%7C/g,At=/%7D/g,kt=/%20/g;function Ct(t){return encodeURI(""+t).replace(It,"|").replace(_t,"[").replace(Ot,"]")}function xt(t){return Ct(t).replace(St,"{").replace(At,"}").replace(Et,"^")}function jt(t){return Ct(t).replace(wt,"%2B").replace(kt,"+").replace(gt,"%23").replace(mt,"%26").replace(Tt,"`").replace(St,"{").replace(At,"}").replace(Et,"^")}function Nt(t){return jt(t).replace(yt,"%3D")}function Rt(t){return Ct(t).replace(gt,"%23").replace(bt,"%3F")}function Dt(t){return Rt(t).replace(vt,"%2F")}function Mt(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}function Pt(t){const e={};if(""===t||"?"===t)return e;const n="?"===t[0],r=(n?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const t=r[i].replace(wt," ");let n=t.indexOf("="),o=Mt(n<0?t:t.slice(0,n)),s=n<0?null:Mt(t.slice(n+1));if(o in e){let t=e[o];Array.isArray(t)||(t=e[o]=[t]),t.push(s)}else e[o]=s}return e}function Lt(t){let e="";for(let n in t){e.length&&(e+="&");const r=t[n];if(n=Nt(n),null==r){void 0!==r&&(e+=n);continue}let i=Array.isArray(r)?r.map(t=>t&&jt(t)):[r&&jt(r)];for(let t=0;t<i.length;t++)e+=(t?"&":"")+n,null!=i[t]&&(e+="="+i[t])}return e}function Vt(t){const e={};for(let n in t){let r=t[n];void 0!==r&&(e[n]=Array.isArray(r)?r.map(t=>null==t?null:""+t):null==r?r:""+r)}return e}function Ut(){let t=[];function e(e){return t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Ft(t,e,n,r,i){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,a)=>{const c=t=>{!1===t?a(X(4,{from:n,to:e})):t instanceof Error?a(t):z(t)?a(X(2,{from:e,to:t})):(o&&r.enterCallbacks[i]===o&&"function"===typeof t&&o.push(t),s())},u=t.call(r&&r.instances[i],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(t=>a(t))})}function Bt(t,e,n,r){const i=[];for(const o of t)for(const t in o.components){let s=o.components[t];if("beforeRouteEnter"===e||o.instances[t])if($t(s)){let a=s.__vccOpts||s;const c=a[e];c&&i.push(Ft(c,n,r,o,t))}else{let a=s();a=a.catch(console.error),i.push(()=>a.then(i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${t}" at "${o.path}"`));const s=f(i)?i.default:i;o.components[t]=s;const a=s[e];return a&&Ft(a,n,r,o,t)()}))}}return i}function $t(t){return"object"===typeof t||"displayName"in t||"props"in t||"__vccOpts"in t}function qt(t){const e=Object(r["o"])(c),n=Object(r["o"])(u),i=Object(r["d"])(()=>e.resolve(Object(r["N"])(t.to))),o=Object(r["d"])(()=>{let{matched:t}=i.value,{length:e}=t;const r=t[e-1];let o=n.matched;if(!r||!o.length)return-1;let s=o.findIndex(O.bind(null,r));if(s>-1)return s;let a=Kt(t[e-2]);return e>1&&Kt(r)===a&&o[o.length-1].path!==a?o.findIndex(O.bind(null,t[e-2])):s}),s=Object(r["d"])(()=>o.value>-1&&Gt(n.params,i.value.params)),a=Object(r["d"])(()=>o.value>-1&&o.value===n.matched.length-1&&E(n.params,i.value.params));function l(n={}){return Wt(n)?e[Object(r["N"])(t.replace)?"replace":"push"](Object(r["N"])(t.to)):Promise.resolve()}return{route:i,href:Object(r["d"])(()=>i.value.href),isActive:s,isExactActive:a,navigate:l}}const Ht=Object(r["l"])({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},setup(t,{slots:e,attrs:n}){const i=Object(r["B"])(qt(t)),{options:o}=Object(r["o"])(c),s=Object(r["d"])(()=>({[Yt(t.activeClass,o.linkActiveClass,"router-link-active")]:i.isActive,[Yt(t.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:i.isExactActive}));return()=>{const o=e.default&&e.default(i);return t.custom?o:Object(r["n"])("a",d({"aria-current":i.isExactActive?t.ariaCurrentValue:null,onClick:i.navigate,href:i.href},n,{class:s.value}),o)}}}),zt=Ht;function Wt(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Gt(t,e){for(let n in e){let r=e[n],i=t[n];if("string"===typeof r){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some((t,e)=>t!==i[e]))return!1}return!0}function Kt(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Yt=(t,e,n)=>null!=t?t:null!=e?e:n,Xt=Object(r["l"])({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const i=Object(r["o"])(l),o=Object(r["d"])(()=>t.route||i.value),c=Object(r["o"])(a,0),u=Object(r["d"])(()=>o.value.matched[c]);Object(r["z"])(a,c+1),Object(r["z"])(s,u),Object(r["z"])(l,o);const h=Object(r["C"])();return Object(r["R"])(()=>[h.value,u.value,t.name],([t,e,n],[r,i,o])=>{e&&(e.instances[n]=t,i&&i!==e&&t&&t===r&&(e.leaveGuards=i.leaveGuards,e.updateGuards=i.updateGuards)),!t||!e||i&&O(e,i)&&r||(e.enterCallbacks[n]||[]).forEach(e=>e(t))},{flush:"post"}),()=>{const i=o.value,s=u.value,a=s&&s.components[t.name],c=t.name;if(!a)return Jt(n.default,{Component:a,route:i});const l=s.props[t.name],f=l?!0===l?i.params:"function"===typeof l?l(i):l:null,p=t=>{t.component.isUnmounted&&(s.instances[c]=null)},g=Object(r["n"])(a,d({},f,e,{onVnodeUnmounted:p,ref:h}));return Jt(n.default,{Component:g,route:i})||g}}});function Jt(t,e){if(!t)return null;const n=t(e);return 1===n.length?n[0]:n}const Qt=Xt;function Zt(t){const e=ct(t.routes,t);let n=t.parseQuery||Pt,i=t.stringifyQuery||Lt,o=t.history;const s=Ut(),a=Ut(),f=Ut(),m=Object(r["J"])(G);let v=G;h&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const w=p.bind(null,t=>""+t),O=p.bind(null,Dt),E=p.bind(null,Mt);function T(t,n){let r,i;return W(t)?(r=e.getRecordMatcher(t),i=n):i=t,e.addRoute(i,r)}function S(t){let n=e.getRecordMatcher(t);n&&e.removeRoute(n)}function I(){return e.getRoutes().map(t=>t.record)}function A(t){return!!e.getRecordMatcher(t)}function k(t,r){if(r=d({},r||m.value),"string"===typeof t){let i=y(n,t,r.path),s=e.resolve({path:i.path},r),a=o.createHref(i.fullPath);return d(i,s,{params:E(s.params),hash:Mt(i.hash),redirectedFrom:void 0,href:a})}let s;"path"in t?s=d({},t,{path:y(n,t.path,r.path).path}):(s=d({},t,{params:O(t.params)}),r.params=O(r.params));let a=e.resolve(s,r);const c=t.hash||"";a.params=w(E(a.params));const u=b(i,d({},t,{hash:xt(c),path:a.path}));let l=o.createHref(u);return d({fullPath:u,hash:c,query:i===Lt?Vt(t.query):t.query},a,{redirectedFrom:void 0,href:l})}function C(t){return"string"===typeof t?y(n,t,m.value.path):d({},t)}function x(t,e){if(v!==t)return X(8,{from:e,to:t})}function j(t){return U(t)}function N(t){return j(d(C(t),{replace:!0}))}function P(t){const e=t.matched[t.matched.length-1];if(e&&e.redirect){const{redirect:n}=e;let r="function"===typeof n?n(t):n;return"string"===typeof r&&(r=r.indexOf("?")>-1||r.indexOf("#")>-1?r=C(r):{path:r}),d({query:t.query,hash:t.hash,params:t.params},r)}}function U(t,e){const n=v=k(t),r=m.value,o=t.state,s=t.force,a=!0===t.replace,c=P(n);if(c)return U(d(C(c),{state:o,force:s,replace:a}),e||n);const u=n;let l;return u.redirectedFrom=e,!s&&_(i,r,n)&&(l=X(16,{to:u,from:r}),nt(r,r,!0,!1)),(l?Promise.resolve(l):B(u,r)).catch(t=>J(t)?t:Z(t)).then(t=>{if(t){if(J(t,2))return U(d(C(t.to),{state:o,force:s,replace:a}),e||u)}else t=q(u,r,!0,a,o);return $(u,r,t),t})}function F(t,e){const n=x(t,e);return n?Promise.reject(n):Promise.resolve()}function B(t,e){let n;const[r,i,o]=ee(t,e);n=Bt(r.reverse(),"beforeRouteLeave",t,e);for(const s of r)s.leaveGuards.forEach(r=>{n.push(Ft(r,t,e))});const c=F.bind(null,t,e);return n.push(c),te(n).then(()=>{n=[];for(const r of s.list())n.push(Ft(r,t,e));return n.push(c),te(n)}).then(()=>{n=Bt(i,"beforeRouteUpdate",t,e);for(const r of i)r.updateGuards.forEach(r=>{n.push(Ft(r,t,e))});return n.push(c),te(n)}).then(()=>{n=[];for(const r of t.matched)if(r.beforeEnter&&e.matched.indexOf(r)<0)if(Array.isArray(r.beforeEnter))for(const i of r.beforeEnter)n.push(Ft(i,t,e));else n.push(Ft(r.beforeEnter,t,e));return n.push(c),te(n)}).then(()=>(t.matched.forEach(t=>t.enterCallbacks={}),n=Bt(o,"beforeRouteEnter",t,e),n.push(c),te(n))).then(()=>{n=[];for(const r of a.list())n.push(Ft(r,t,e));return n.push(c),te(n)}).catch(t=>J(t,8)?t:Promise.reject(t))}function $(t,e,n){for(const r of f.list())r(t,e,n)}function q(t,e,n,r,i){const s=x(t,e);if(s)return s;const a=e===G,c=h?history.state:{};n&&(r||a?o.replace(t.fullPath,d({scroll:a&&c&&c.scroll},i)):o.push(t.fullPath,i)),m.value=t,nt(t,e,n,a),et()}let H;function z(){H=o.listen((t,e,n)=>{let r=k(t);const i=P(r);if(i)return void U(d(i,{replace:!0}),r).catch(g);v=r;const s=m.value;h&&L(M(s.fullPath,n.delta),R()),B(r,s).catch(t=>J(t,12)?t:J(t,2)?(U(t.to,r).catch(g),Promise.reject()):(n.delta&&o.go(-n.delta,!1),Z(t))).then(t=>{t=t||q(r,s,!1),t&&n.delta&&o.go(-n.delta,!1),$(r,s,t)}).catch(g)})}let K,Y=Ut(),Q=Ut();function Z(t){return et(t),Q.list().forEach(e=>e(t)),Promise.reject(t)}function tt(){return K&&m.value!==G?Promise.resolve():new Promise((t,e)=>{Y.add([t,e])})}function et(t){K||(K=!0,z(),Y.list().forEach(([e,n])=>t?n(t):e()),Y.reset())}function nt(e,n,i,o){const{scrollBehavior:s}=t;if(!h||!s)return Promise.resolve();let a=!i&&V(M(e.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return Object(r["r"])().then(()=>s(e,n,a)).then(t=>t&&D(t)).catch(Z)}const rt=t=>o.go(t);let it;const ot=new Set,st={currentRoute:m,addRoute:T,removeRoute:S,hasRoute:A,getRoutes:I,resolve:k,options:t,push:j,replace:N,go:rt,back:()=>rt(-1),forward:()=>rt(1),beforeEach:s.add,beforeResolve:a.add,afterEach:f.add,onError:Q.add,isReady:tt,install(t){const e=this;t.component("RouterLink",zt),t.component("RouterView",Qt),t.config.globalProperties.$router=e,Object.defineProperty(t.config.globalProperties,"$route",{get:()=>Object(r["N"])(m)}),h&&!it&&m.value===G&&(it=!0,j(o.location).catch(t=>{0}));const n={};for(let o in G)n[o]=Object(r["d"])(()=>m.value[o]);t.provide(c,e),t.provide(u,Object(r["B"])(n)),t.provide(l,m);let i=t.unmount;ot.add(t),t.unmount=function(){ot.delete(t),ot.size<1&&(H(),m.value=G,it=!1,K=!1),i.call(this,arguments)}}};return st}function te(t){return t.reduce((t,e)=>t.then(()=>e()),Promise.resolve())}function ee(t,e){const n=[],r=[],i=[],o=Math.max(e.matched.length,t.matched.length);for(let s=0;s<o;s++){const o=e.matched[s];o&&(t.matched.indexOf(o)<0?n.push(o):r.push(o));const a=t.matched[s];a&&e.matched.indexOf(a)<0&&i.push(a)}return[n,r,i]}}).call(this,n("c8ba"))},"6eeb":function(t,e,n){var r=n("da84"),i=n("9112"),o=n("5135"),s=n("ce4e"),a=n("8925"),c=n("69f3"),u=c.get,l=c.enforce,h=String(String).split("String");(t.exports=function(t,e,n,a){var c,u=!!a&&!!a.unsafe,f=!!a&&!!a.enumerable,d=!!a&&!!a.noTargetGet;"function"==typeof n&&("string"!=typeof e||o(n,"name")||i(n,"name",e),c=l(n),c.source||(c.source=h.join("string"==typeof e?e:""))),t!==r?(u?!d&&t[e]&&(f=!0):delete t[e],f?t[e]=n:i(t,e,n)):f?t[e]=n:s(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&u(this).source||a(this)}))},7156:function(t,e,n){var r=n("861d"),i=n("d2bb");t.exports=function(t,e,n){var o,s;return i&&"function"==typeof(o=e.constructor)&&o!==n&&r(s=o.prototype)&&s!==n.prototype&&i(t,s),t}},7418:function(t,e){e.f=Object.getOwnPropertySymbols},"746f":function(t,e,n){var r=n("428f"),i=n("5135"),o=n("e538"),s=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||s(e,t,{value:o.f(t)})}},7839:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7a23":function(t,e,n){"use strict";n.d(e,"d",(function(){return Kt})),n.d(e,"p",(function(){return Lt})),n.d(e,"B",(function(){return St})),n.d(e,"C",(function(){return Vt})),n.d(e,"I",(function(){return It})),n.d(e,"J",(function(){return Ut})),n.d(e,"M",(function(){return Wt})),n.d(e,"N",(function(){return $t})),n.d(e,"K",(function(){return Yt["C"]})),n.d(e,"a",(function(){return Gn})),n.d(e,"f",(function(){return ir})),n.d(e,"g",(function(){return vr})),n.d(e,"h",(function(){return Er})),n.d(e,"i",(function(){return mr})),n.d(e,"j",(function(){return gr})),n.d(e,"k",(function(){return hr})),n.d(e,"l",(function(){return Ie})),n.d(e,"m",(function(){return Dr})),n.d(e,"n",(function(){return qi})),n.d(e,"o",(function(){return ge})),n.d(e,"q",(function(){return _r})),n.d(e,"r",(function(){return Ei})),n.d(e,"s",(function(){return xe})),n.d(e,"t",(function(){return $e})),n.d(e,"u",(function(){return je})),n.d(e,"v",(function(){return Ue})),n.d(e,"w",(function(){return qe})),n.d(e,"x",(function(){return Zn})),n.d(e,"y",(function(){return re})),n.d(e,"z",(function(){return pe})),n.d(e,"A",(function(){return ne})),n.d(e,"D",(function(){return Or})),n.d(e,"E",(function(){return Tr})),n.d(e,"F",(function(){return Bn})),n.d(e,"G",(function(){return Hn})),n.d(e,"H",(function(){return qn})),n.d(e,"L",(function(){return Ir})),n.d(e,"Q",(function(){return ti})),n.d(e,"R",(function(){return Vi})),n.d(e,"S",(function(){return Mi})),n.d(e,"T",(function(){return oe})),n.d(e,"U",(function(){return Sn})),n.d(e,"X",(function(){return ie})),n.d(e,"b",(function(){return ko})),n.d(e,"c",(function(){return Ko})),n.d(e,"e",(function(){return us})),n.d(e,"O",(function(){return Eo})),n.d(e,"P",(function(){return is})),n.d(e,"V",(function(){return rs})),n.d(e,"W",(function(){return es}));var r=n("44b2");let i;const o=[];class s{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&i&&(this.parent=i,this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(t){if(this.active)try{return this.on(),t()}finally{this.off()}else 0}on(){this.active&&(o.push(this),i=this)}off(){this.active&&(o.pop(),i=o[o.length-1])}stop(t){if(this.active){if(this.effects.forEach(t=>t.stop()),this.cleanups.forEach(t=>t()),this.scopes&&this.scopes.forEach(t=>t.stop(!0)),this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.active=!1}}}function a(t,e){e=e||i,e&&e.active&&e.effects.push(t)}const c=t=>{const e=new Set(t);return e.w=0,e.n=0,e},u=t=>(t.w&g)>0,l=t=>(t.n&g)>0,h=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=g},f=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];u(i)&&!l(i)?i.delete(t):e[n++]=i,i.w&=~g,i.n&=~g}e.length=n}},d=new WeakMap;let p=0,g=1;const m=30,v=[];let y;const b=Symbol(""),w=Symbol("");class _{constructor(t,e=null,n){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],a(this,n)}run(){if(!this.active)return this.fn();if(!v.includes(this))try{return v.push(y=this),I(),g=1<<++p,p<=m?h(this):O(this),this.fn()}finally{p<=m&&f(this),g=1<<--p,A(),v.pop();const t=v.length;y=t>0?v[t-1]:void 0}}stop(){this.active&&(O(this),this.onStop&&this.onStop(),this.active=!1)}}function O(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let E=!0;const T=[];function S(){T.push(E),E=!1}function I(){T.push(E),E=!0}function A(){const t=T.pop();E=void 0===t||t}function k(t,e,n){if(!C())return;let r=d.get(t);r||d.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=c());const o=void 0;x(i,o)}function C(){return E&&void 0!==y}function x(t,e){let n=!1;p<=m?l(t)||(t.n|=g,n=!u(t)):n=!t.has(y),n&&(t.add(y),y.deps.push(t))}function j(t,e,n,i,o,s){const a=d.get(t);if(!a)return;let u=[];if("clear"===e)u=[...a.values()];else if("length"===n&&Object(r["f"])(t))a.forEach((t,e)=>{("length"===e||e>=i)&&u.push(t)});else switch(void 0!==n&&u.push(a.get(n)),e){case"add":Object(r["f"])(t)?Object(r["h"])(n)&&u.push(a.get("length")):(u.push(a.get(b)),Object(r["i"])(t)&&u.push(a.get(w)));break;case"delete":Object(r["f"])(t)||(u.push(a.get(b)),Object(r["i"])(t)&&u.push(a.get(w)));break;case"set":Object(r["i"])(t)&&u.push(a.get(b));break}if(1===u.length)u[0]&&N(u[0]);else{const t=[];for(const e of u)e&&t.push(...e);N(c(t))}}function N(t,e){for(const n of Object(r["f"])(t)?t:[...t])(n!==y||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const R=Object(r["l"])("__proto__,__v_isRef,__isVue"),D=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(r["k"])),M=F(),P=F(!1,!0),L=F(!0),V=U();function U(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...t){const n=Nt(this);for(let e=0,i=this.length;e<i;e++)k(n,"get",e+"");const r=n[e](...t);return-1===r||!1===r?n[e](...t.map(Nt)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...t){S();const n=Nt(this)[e].apply(this,t);return A(),n}}),t}function F(t=!1,e=!1){return function(n,i,o){if("__v_isReactive"===i)return!t;if("__v_isReadonly"===i)return t;if("__v_raw"===i&&o===(t?e?Ot:_t:e?wt:bt).get(n))return n;const s=Object(r["f"])(n);if(!t&&s&&Object(r["e"])(V,i))return Reflect.get(V,i,o);const a=Reflect.get(n,i,o);if(Object(r["k"])(i)?D.has(i):R(i))return a;if(t||k(n,"get",i),e)return a;if(Lt(a)){const t=!s||!Object(r["h"])(i);return t?a.value:a}return Object(r["j"])(a)?t?At(a):St(a):a}}const B=q(),$=q(!0);function q(t=!1){return function(e,n,i,o){let s=e[n];if(!t&&(i=Nt(i),s=Nt(s),!Object(r["f"])(e)&&Lt(s)&&!Lt(i)))return s.value=i,!0;const a=Object(r["f"])(e)&&Object(r["h"])(n)?Number(n)<e.length:Object(r["e"])(e,n),c=Reflect.set(e,n,i,o);return e===Nt(o)&&(a?Object(r["d"])(i,s)&&j(e,"set",n,i,s):j(e,"add",n,i)),c}}function H(t,e){const n=Object(r["e"])(t,e),i=t[e],o=Reflect.deleteProperty(t,e);return o&&n&&j(t,"delete",e,void 0,i),o}function z(t,e){const n=Reflect.has(t,e);return Object(r["k"])(e)&&D.has(e)||k(t,"has",e),n}function W(t){return k(t,"iterate",Object(r["f"])(t)?"length":b),Reflect.ownKeys(t)}const G={get:M,set:B,deleteProperty:H,has:z,ownKeys:W},K={get:L,set(t,e){return!0},deleteProperty(t,e){return!0}},Y=Object(r["c"])({},G,{get:P,set:$}),X=t=>Object(r["j"])(t)?St(t):t,J=t=>Object(r["j"])(t)?At(t):t,Q=t=>t,Z=t=>Reflect.getPrototypeOf(t);function tt(t,e,n=!1,r=!1){t=t["__v_raw"];const i=Nt(t),o=Nt(e);e!==o&&!n&&k(i,"get",e),!n&&k(i,"get",o);const{has:s}=Z(i),a=r?Q:n?J:X;return s.call(i,e)?a(t.get(e)):s.call(i,o)?a(t.get(o)):void(t!==i&&t.get(e))}function et(t,e=!1){const n=this["__v_raw"],r=Nt(n),i=Nt(t);return t!==i&&!e&&k(r,"has",t),!e&&k(r,"has",i),t===i?n.has(t):n.has(t)||n.has(i)}function nt(t,e=!1){return t=t["__v_raw"],!e&&k(Nt(t),"iterate",b),Reflect.get(t,"size",t)}function rt(t){t=Nt(t);const e=Nt(this),n=Z(e),r=n.has.call(e,t);return r||(e.add(t),j(e,"add",t,t)),this}function it(t,e){e=Nt(e);const n=Nt(this),{has:i,get:o}=Z(n);let s=i.call(n,t);s||(t=Nt(t),s=i.call(n,t));const a=o.call(n,t);return n.set(t,e),s?Object(r["d"])(e,a)&&j(n,"set",t,e,a):j(n,"add",t,e),this}function ot(t){const e=Nt(this),{has:n,get:r}=Z(e);let i=n.call(e,t);i||(t=Nt(t),i=n.call(e,t));const o=r?r.call(e,t):void 0,s=e.delete(t);return i&&j(e,"delete",t,void 0,o),s}function st(){const t=Nt(this),e=0!==t.size,n=void 0,r=t.clear();return e&&j(t,"clear",void 0,void 0,n),r}function at(t,e){return function(n,r){const i=this,o=i["__v_raw"],s=Nt(o),a=e?Q:t?J:X;return!t&&k(s,"iterate",b),o.forEach((t,e)=>n.call(r,a(t),a(e),i))}}function ct(t,e,n){return function(...i){const o=this["__v_raw"],s=Nt(o),a=Object(r["i"])(s),c="entries"===t||t===Symbol.iterator&&a,u="keys"===t&&a,l=o[t](...i),h=n?Q:e?J:X;return!e&&k(s,"iterate",u?w:b),{next(){const{value:t,done:e}=l.next();return e?{value:t,done:e}:{value:c?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function ut(t){return function(...e){return"delete"!==t&&this}}function lt(){const t={get(t){return tt(this,t)},get size(){return nt(this)},has:et,add:rt,set:it,delete:ot,clear:st,forEach:at(!1,!1)},e={get(t){return tt(this,t,!1,!0)},get size(){return nt(this)},has:et,add:rt,set:it,delete:ot,clear:st,forEach:at(!1,!0)},n={get(t){return tt(this,t,!0)},get size(){return nt(this,!0)},has(t){return et.call(this,t,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:at(!0,!1)},r={get(t){return tt(this,t,!0,!0)},get size(){return nt(this,!0)},has(t){return et.call(this,t,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:at(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach(i=>{t[i]=ct(i,!1,!1),n[i]=ct(i,!0,!1),e[i]=ct(i,!1,!0),r[i]=ct(i,!0,!0)}),[t,n,e,r]}const[ht,ft,dt,pt]=lt();function gt(t,e){const n=e?t?pt:dt:t?ft:ht;return(e,i,o)=>"__v_isReactive"===i?!t:"__v_isReadonly"===i?t:"__v_raw"===i?e:Reflect.get(Object(r["e"])(n,i)&&i in e?n:e,i,o)}const mt={get:gt(!1,!1)},vt={get:gt(!1,!0)},yt={get:gt(!0,!1)};const bt=new WeakMap,wt=new WeakMap,_t=new WeakMap,Ot=new WeakMap;function Et(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Tt(t){return t["__v_skip"]||!Object.isExtensible(t)?0:Et(Object(r["m"])(t))}function St(t){return t&&t["__v_isReadonly"]?t:kt(t,!1,G,mt,bt)}function It(t){return kt(t,!1,Y,vt,wt)}function At(t){return kt(t,!0,K,yt,_t)}function kt(t,e,n,i,o){if(!Object(r["j"])(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const s=o.get(t);if(s)return s;const a=Tt(t);if(0===a)return t;const c=new Proxy(t,2===a?i:n);return o.set(t,c),c}function Ct(t){return xt(t)?Ct(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function xt(t){return!(!t||!t["__v_isReadonly"])}function jt(t){return Ct(t)||xt(t)}function Nt(t){const e=t&&t["__v_raw"];return e?Nt(e):t}function Rt(t){return Object(r["b"])(t,"__v_skip",!0),t}function Dt(t){C()&&(t=Nt(t),t.dep||(t.dep=c()),x(t.dep))}function Mt(t,e){t=Nt(t),t.dep&&N(t.dep)}const Pt=t=>Object(r["j"])(t)?St(t):t;function Lt(t){return Boolean(t&&!0===t.__v_isRef)}function Vt(t){return Bt(t,!1)}function Ut(t){return Bt(t,!0)}class Ft{constructor(t,e){this._shallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:Nt(t),this._value=e?t:Pt(t)}get value(){return Dt(this),this._value}set value(t){t=this._shallow?t:Nt(t),Object(r["d"])(t,this._rawValue)&&(this._rawValue=t,this._value=this._shallow?t:Pt(t),Mt(this,t))}}function Bt(t,e){return Lt(t)?t:new Ft(t,e)}function $t(t){return Lt(t)?t.value:t}const qt={get:(t,e,n)=>$t(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Lt(i)&&!Lt(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Ht(t){return Ct(t)?t:new Proxy(t,qt)}class zt{constructor(t,e){this._object=t,this._key=e,this.__v_isRef=!0}get value(){return this._object[this._key]}set value(t){this._object[this._key]=t}}function Wt(t,e){const n=t[e];return Lt(n)?n:new zt(t,e)}class Gt{constructor(t,e,n){this._setter=e,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new _(t,()=>{this._dirty||(this._dirty=!0,Mt(this))}),this["__v_isReadonly"]=n}get value(){const t=Nt(this);return Dt(t),t._dirty&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Kt(t,e){let n,i;Object(r["g"])(t)?(n=t,i=r["a"]):(n=t.get,i=t.set);const o=new Gt(n,i,Object(r["g"])(t)||!t.set);return o}Promise.resolve();var Yt=n("6690");new Set;new Map;Object.create(null),Object.create(null);function Xt(t,e,...n){const r=t.vnode.props||Yt["b"];let i=n;const o=e.startsWith("update:"),s=o&&e.slice(7);if(s&&s in r){const t=("modelValue"===s?"model":s)+"Modifiers",{number:e,trim:o}=r[t]||Yt["b"];o?i=n.map(t=>t.trim()):e&&(i=n.map(Yt["E"]))}let a;let c=r[a=Object(Yt["D"])(e)]||r[a=Object(Yt["D"])(Object(Yt["e"])(e))];!c&&o&&(c=r[a=Object(Yt["D"])(Object(Yt["k"])(e))]),c&&ai(c,t,6,i);const u=r[a+"Once"];if(u){if(t.emitted){if(t.emitted[a])return}else t.emitted={};t.emitted[a]=!0,ai(u,t,6,i)}}function Jt(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(void 0!==i)return i;const o=t.emits;let s={},a=!1;if(!Object(Yt["n"])(t)){const r=t=>{const n=Jt(t,e,!0);n&&(a=!0,Object(Yt["h"])(s,n))};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}return o||a?(Object(Yt["m"])(o)?o.forEach(t=>s[t]=null):Object(Yt["h"])(s,o),r.set(t,s),s):(r.set(t,null),null)}function Qt(t,e){return!(!t||!Object(Yt["s"])(e))&&(e=e.slice(2).replace(/Once$/,""),Object(Yt["j"])(t,e[0].toLowerCase()+e.slice(1))||Object(Yt["j"])(t,Object(Yt["k"])(e))||Object(Yt["j"])(t,e))}let Zt=null,te=null;function ee(t){const e=Zt;return Zt=t,te=t&&t.type.__scopeId||null,e}function ne(t){te=t}function re(){te=null}const ie=t=>oe;function oe(t,e=Zt,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&nr(-1);const i=ee(e),o=t(...n);return ee(i),r._d&&nr(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function se(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:o,propsOptions:[s],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:f,setupState:d,ctx:p,inheritAttrs:g}=t;let m;const v=ee(t);try{let t;if(4&n.shapeFlag){const e=i||r;m=yr(l.call(e,e,h,o,d,f,p)),t=c}else{const n=e;0,m=yr(n.length>1?n(o,{attrs:c,slots:a,emit:u}):n(o,null)),t=e.props?c:ae(c)}let v=m;if(t&&!1!==g){const e=Object.keys(t),{shapeFlag:n}=v;e.length&&7&n&&(s&&e.some(Yt["q"])&&(t=ce(t,s)),v=pr(v,t))}0,n.dirs&&(v.dirs=v.dirs?v.dirs.concat(n.dirs):n.dirs),n.transition&&(v.transition=n.transition),m=v}catch(y){Jn.length=0,ci(y,t,1),m=hr(Yn)}return ee(v),m}const ae=t=>{let e;for(const n in t)("class"===n||"style"===n||Object(Yt["s"])(n))&&((e||(e={}))[n]=t[n]);return e},ce=(t,e)=>{const n={};for(const r in t)Object(Yt["q"])(r)&&r.slice(9)in e||(n[r]=t[r]);return n};function ue(t,e,n){const{props:r,children:i,component:o}=t,{props:s,children:a,patchFlag:c}=e,u=o.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==s&&(r?!s||le(r,s,u):!!s);if(1024&c)return!0;if(16&c)return r?le(r,s,u):!!s;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(s[n]!==r[n]&&!Qt(u,n))return!0}}return!1}function le(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(e[o]!==t[o]&&!Qt(n,o))return!0}return!1}function he({vnode:t,parent:e},n){while(e&&e.subTree===t)(t=e.vnode).el=n,e=e.parent}const fe=t=>t.__isSuspense;function de(t,e){e&&e.pendingBranch?Object(Yt["m"])(t)?e.effects.push(...t):e.effects.push(t):xi(t)}function pe(t,e){if(Rr){let n=Rr.provides;const r=Rr.parent&&Rr.parent.provides;r===n&&(n=Rr.provides=Object.create(r)),n[t]=e}else 0}function ge(t,e,n=!1){const r=Rr||Zt;if(r){const i=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&Object(Yt["n"])(e)?e.call(r.proxy):e}else 0}function me(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ue(()=>{t.isMounted=!0}),$e(()=>{t.isUnmounting=!0}),t}const ve=[Function,Array],ye={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ve,onEnter:ve,onAfterEnter:ve,onEnterCancelled:ve,onBeforeLeave:ve,onLeave:ve,onAfterLeave:ve,onLeaveCancelled:ve,onBeforeAppear:ve,onAppear:ve,onAfterAppear:ve,onAppearCancelled:ve},setup(t,{slots:e}){const n=Dr(),r=me();let i;return()=>{const o=e.default&&Se(e.default(),!0);if(!o||!o.length)return;const s=Nt(t),{mode:a}=s;const c=o[0];if(r.isLeaving)return Oe(c);const u=Ee(c);if(!u)return Oe(c);const l=_e(u,s,r,n);Te(u,l);const h=n.subTree,f=h&&Ee(h);let d=!1;const{getTransitionKey:p}=u.type;if(p){const t=p();void 0===i?i=t:t!==i&&(i=t,d=!0)}if(f&&f.type!==Yn&&(!sr(u,f)||d)){const t=_e(f,s,r,n);if(Te(f,t),"out-in"===a)return r.isLeaving=!0,t.afterLeave=()=>{r.isLeaving=!1,n.update()},Oe(c);"in-out"===a&&u.type!==Yn&&(t.delayLeave=(t,e,n)=>{const i=we(r,f);i[String(f.key)]=f,t._leaveCb=()=>{e(),t._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=n})}return c}}},be=ye;function we(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function _e(t,e,n,r){const{appear:i,mode:o,persisted:s=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:f,onAfterLeave:d,onLeaveCancelled:p,onBeforeAppear:g,onAppear:m,onAfterAppear:v,onAppearCancelled:y}=e,b=String(t.key),w=we(n,t),_=(t,e)=>{t&&ai(t,r,9,e)},O={mode:o,persisted:s,beforeEnter(e){let r=a;if(!n.isMounted){if(!i)return;r=g||a}e._leaveCb&&e._leaveCb(!0);const o=w[b];o&&sr(t,o)&&o.el._leaveCb&&o.el._leaveCb(),_(r,[e])},enter(t){let e=c,r=u,o=l;if(!n.isMounted){if(!i)return;e=m||c,r=v||u,o=y||l}let s=!1;const a=t._enterCb=e=>{s||(s=!0,_(e?o:r,[t]),O.delayedLeave&&O.delayedLeave(),t._enterCb=void 0)};e?(e(t,a),e.length<=1&&a()):a()},leave(e,r){const i=String(t.key);if(e._enterCb&&e._enterCb(!0),n.isUnmounting)return r();_(h,[e]);let o=!1;const s=e._leaveCb=n=>{o||(o=!0,r(),_(n?p:d,[e]),e._leaveCb=void 0,w[i]===t&&delete w[i])};w[i]=t,f?(f(e,s),f.length<=1&&s()):s()},clone(t){return _e(t,e,n,r)}};return O}function Oe(t){if(ke(t))return t=pr(t),t.children=null,t}function Ee(t){return ke(t)?t.children?t.children[0]:void 0:t}function Te(t,e){6&t.shapeFlag&&t.component?Te(t.component.subTree,e):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Se(t,e=!1){let n=[],r=0;for(let i=0;i<t.length;i++){const o=t[i];o.type===Gn?(128&o.patchFlag&&r++,n=n.concat(Se(o.children,e))):(e||o.type!==Yn)&&n.push(o)}if(r>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function Ie(t){return Object(Yt["n"])(t)?{setup:t,name:t.name}:t}const Ae=t=>!!t.type.__asyncLoader;const ke=t=>t.type.__isKeepAlive;RegExp,RegExp;function Ce(t,e){return Object(Yt["m"])(t)?t.some(t=>Ce(t,e)):Object(Yt["x"])(t)?t.split(",").indexOf(e)>-1:!!t.test&&t.test(e)}function xe(t,e){Ne(t,"a",e)}function je(t,e){Ne(t,"da",e)}function Ne(t,e,n=Rr){const r=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}t()});if(Pe(e,r,n),n){let t=n.parent;while(t&&t.parent)ke(t.parent.vnode)&&Re(r,e,n,t),t=t.parent}}function Re(t,e,n,r){const i=Pe(e,t,r,!0);qe(()=>{Object(Yt["B"])(r[e],i)},n)}function De(t){let e=t.shapeFlag;256&e&&(e-=256),512&e&&(e-=512),t.shapeFlag=e}function Me(t){return 128&t.shapeFlag?t.ssContent:t}function Pe(t,e,n=Rr,r=!1){if(n){const i=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...r)=>{if(n.isUnmounted)return;S(),Mr(n);const i=ai(e,n,t,r);return Pr(),A(),i});return r?i.unshift(o):i.push(o),o}}const Le=t=>(e,n=Rr)=>(!Fr||"sp"===t)&&Pe(t,e,n),Ve=Le("bm"),Ue=Le("m"),Fe=Le("bu"),Be=Le("u"),$e=Le("bum"),qe=Le("um"),He=Le("sp"),ze=Le("rtg"),We=Le("rtc");function Ge(t,e=Rr){Pe("ec",t,e)}let Ke=!0;function Ye(t){const e=Ze(t),n=t.proxy,r=t.ctx;Ke=!1,e.beforeCreate&&Je(e.beforeCreate,t,"bc");const{data:i,computed:o,methods:s,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:f,beforeUpdate:d,updated:p,activated:g,deactivated:m,beforeDestroy:v,beforeUnmount:y,destroyed:b,unmounted:w,render:_,renderTracked:O,renderTriggered:E,errorCaptured:T,serverPrefetch:S,expose:I,inheritAttrs:A,components:k,directives:C,filters:x}=e,j=null;if(u&&Xe(u,r,j,t.appContext.config.unwrapInjectedRef),s)for(const R in s){const t=s[R];Object(Yt["n"])(t)&&(r[R]=t.bind(n))}if(i){0;const e=i.call(n,n);0,Object(Yt["r"])(e)&&(t.data=St(e))}if(Ke=!0,o)for(const R in o){const t=o[R],e=Object(Yt["n"])(t)?t.bind(n,n):Object(Yt["n"])(t.get)?t.get.bind(n,n):Yt["d"];0;const i=!Object(Yt["n"])(t)&&Object(Yt["n"])(t.set)?t.set.bind(n):Yt["d"],s=Kt({get:e,set:i});Object.defineProperty(r,R,{enumerable:!0,configurable:!0,get:()=>s.value,set:t=>s.value=t})}if(a)for(const R in a)Qe(a[R],r,n,R);if(c){const t=Object(Yt["n"])(c)?c.call(n):c;Reflect.ownKeys(t).forEach(e=>{pe(e,t[e])})}function N(t,e){Object(Yt["m"])(e)?e.forEach(e=>t(e.bind(n))):e&&t(e.bind(n))}if(l&&Je(l,t,"c"),N(Ve,h),N(Ue,f),N(Fe,d),N(Be,p),N(xe,g),N(je,m),N(Ge,T),N(We,O),N(ze,E),N($e,y),N(qe,w),N(He,S),Object(Yt["m"])(I))if(I.length){const e=t.exposed||(t.exposed={});I.forEach(t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})})}else t.exposed||(t.exposed={});_&&t.render===Yt["d"]&&(t.render=_),null!=A&&(t.inheritAttrs=A),k&&(t.components=k),C&&(t.directives=C)}function Xe(t,e,n=Yt["d"],r=!1){Object(Yt["m"])(t)&&(t=on(t));for(const i in t){const n=t[i];let o;o=Object(Yt["r"])(n)?"default"in n?ge(n.from||i,n.default,!0):ge(n.from||i):ge(n),Lt(o)&&r?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:t=>o.value=t}):e[i]=o}}function Je(t,e,n){ai(Object(Yt["m"])(t)?t.map(t=>t.bind(e.proxy)):t.bind(e.proxy),e,n)}function Qe(t,e,n,r){const i=r.includes(".")?Bi(n,r):()=>n[r];if(Object(Yt["x"])(t)){const n=e[t];Object(Yt["n"])(n)&&Vi(i,n)}else if(Object(Yt["n"])(t))Vi(i,t.bind(n));else if(Object(Yt["r"])(t))if(Object(Yt["m"])(t))t.forEach(t=>Qe(t,e,n,r));else{const r=Object(Yt["n"])(t.handler)?t.handler.bind(n):e[t.handler];Object(Yt["n"])(r)&&Vi(i,r,t)}else 0}function Ze(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:o,config:{optionMergeStrategies:s}}=t.appContext,a=o.get(e);let c;return a?c=a:i.length||n||r?(c={},i.length&&i.forEach(t=>tn(c,t,s,!0)),tn(c,e,s)):c=e,o.set(e,c),c}function tn(t,e,n,r=!1){const{mixins:i,extends:o}=e;o&&tn(t,o,n,!0),i&&i.forEach(e=>tn(t,e,n,!0));for(const s in e)if(r&&"expose"===s);else{const r=en[s]||n&&n[s];t[s]=r?r(t[s],e[s]):e[s]}return t}const en={data:nn,props:an,emits:an,methods:an,computed:an,beforeCreate:sn,created:sn,beforeMount:sn,mounted:sn,beforeUpdate:sn,updated:sn,beforeDestroy:sn,destroyed:sn,activated:sn,deactivated:sn,errorCaptured:sn,serverPrefetch:sn,components:an,directives:an,watch:cn,provide:nn,inject:rn};function nn(t,e){return e?t?function(){return Object(Yt["h"])(Object(Yt["n"])(t)?t.call(this,this):t,Object(Yt["n"])(e)?e.call(this,this):e)}:e:t}function rn(t,e){return an(on(t),on(e))}function on(t){if(Object(Yt["m"])(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function sn(t,e){return t?[...new Set([].concat(t,e))]:e}function an(t,e){return t?Object(Yt["h"])(Object(Yt["h"])(Object.create(null),t),e):e}function cn(t,e){if(!t)return e;if(!e)return t;const n=Object(Yt["h"])(Object.create(null),t);for(const r in e)n[r]=sn(t[r],e[r]);return n}function un(t,e,n,r=!1){const i={},o={};Object(Yt["g"])(o,ar,1),t.propsDefaults=Object.create(null),hn(t,e,i,o);for(const s in t.propsOptions[0])s in i||(i[s]=void 0);n?t.props=r?i:It(i):t.type.props?t.props=i:t.props=o,t.attrs=o}function ln(t,e,n,r){const{props:i,attrs:o,vnode:{patchFlag:s}}=t,a=Nt(i),[c]=t.propsOptions;let u=!1;if(!(r||s>0)||16&s){let r;hn(t,e,i,o)&&(u=!0);for(const o in a)e&&(Object(Yt["j"])(e,o)||(r=Object(Yt["k"])(o))!==o&&Object(Yt["j"])(e,r))||(c?!n||void 0===n[o]&&void 0===n[r]||(i[o]=fn(c,a,o,void 0,t,!0)):delete i[o]);if(o!==a)for(const t in o)e&&Object(Yt["j"])(e,t)||(delete o[t],u=!0)}else if(8&s){const n=t.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];const l=e[s];if(c)if(Object(Yt["j"])(o,s))l!==o[s]&&(o[s]=l,u=!0);else{const e=Object(Yt["e"])(s);i[e]=fn(c,a,e,l,t,!1)}else l!==o[s]&&(o[s]=l,u=!0)}}u&&j(t,"set","$attrs")}function hn(t,e,n,r){const[i,o]=t.propsOptions;let s,a=!1;if(e)for(let c in e){if(Object(Yt["v"])(c))continue;const u=e[c];let l;i&&Object(Yt["j"])(i,l=Object(Yt["e"])(c))?o&&o.includes(l)?(s||(s={}))[l]=u:n[l]=u:Qt(t.emitsOptions,c)||u!==r[c]&&(r[c]=u,a=!0)}if(o){const e=Nt(n),r=s||Yt["b"];for(let s=0;s<o.length;s++){const a=o[s];n[a]=fn(i,e,a,r[a],t,!Object(Yt["j"])(r,a))}}return a}function fn(t,e,n,r,i,o){const s=t[n];if(null!=s){const t=Object(Yt["j"])(s,"default");if(t&&void 0===r){const t=s.default;if(s.type!==Function&&Object(Yt["n"])(t)){const{propsDefaults:o}=i;n in o?r=o[n]:(Mr(i),r=o[n]=t.call(null,e),Pr())}else r=t}s[0]&&(o&&!t?r=!1:!s[1]||""!==r&&r!==Object(Yt["k"])(n)||(r=!0))}return r}function dn(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const o=t.props,s={},a=[];let c=!1;if(!Object(Yt["n"])(t)){const r=t=>{c=!0;const[n,r]=dn(t,e,!0);Object(Yt["h"])(s,n),r&&a.push(...r)};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}if(!o&&!c)return r.set(t,Yt["a"]),Yt["a"];if(Object(Yt["m"])(o))for(let l=0;l<o.length;l++){0;const t=Object(Yt["e"])(o[l]);pn(t)&&(s[t]=Yt["b"])}else if(o){0;for(const t in o){const e=Object(Yt["e"])(t);if(pn(e)){const n=o[t],r=s[e]=Object(Yt["m"])(n)||Object(Yt["n"])(n)?{type:n}:n;if(r){const t=vn(Boolean,r.type),n=vn(String,r.type);r[0]=t>-1,r[1]=n<0||t<n,(t>-1||Object(Yt["j"])(r,"default"))&&a.push(e)}}}}const u=[s,a];return r.set(t,u),u}function pn(t){return"$"!==t[0]}function gn(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:null===t?"null":""}function mn(t,e){return gn(t)===gn(e)}function vn(t,e){return Object(Yt["m"])(e)?e.findIndex(e=>mn(e,t)):Object(Yt["n"])(e)&&mn(e,t)?0:-1}const yn=t=>"_"===t[0]||"$stable"===t,bn=t=>Object(Yt["m"])(t)?t.map(yr):[yr(t)],wn=(t,e,n)=>{const r=oe((...t)=>bn(e(...t)),n);return r._c=!1,r},_n=(t,e,n)=>{const r=t._ctx;for(const i in t){if(yn(i))continue;const n=t[i];if(Object(Yt["n"])(n))e[i]=wn(i,n,r);else if(null!=n){0;const t=bn(n);e[i]=()=>t}}},On=(t,e)=>{const n=bn(e);t.slots.default=()=>n},En=(t,e)=>{if(32&t.vnode.shapeFlag){const n=e._;n?(t.slots=Nt(e),Object(Yt["g"])(e,"_",n)):_n(e,t.slots={})}else t.slots={},e&&On(t,e);Object(Yt["g"])(t.slots,ar,1)},Tn=(t,e,n)=>{const{vnode:r,slots:i}=t;let o=!0,s=Yt["b"];if(32&r.shapeFlag){const t=e._;t?n&&1===t?o=!1:(Object(Yt["h"])(i,e),n||1!==t||delete i._):(o=!e.$stable,_n(e,i)),s=e}else e&&(On(t,e),s={default:1});if(o)for(const a in i)yn(a)||a in s||delete i[a]};function Sn(t,e){const n=Zt;if(null===n)return t;const r=n.proxy,i=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[t,n,s,a=Yt["b"]]=e[o];Object(Yt["n"])(t)&&(t={mounted:t,updated:t}),t.deep&&$i(n),i.push({dir:t,instance:r,value:n,oldValue:void 0,arg:s,modifiers:a})}return t}function In(t,e,n,r){const i=t.dirs,o=e&&e.dirs;for(let s=0;s<i.length;s++){const a=i[s];o&&(a.oldValue=o[s].value);let c=a.dir[r];c&&(S(),ai(c,n,8,[t.el,a,t,e]),A())}}function An(){return{app:null,config:{isNativeTag:Yt["c"],performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let kn=0;function Cn(t,e){return function(n,r=null){null==r||Object(Yt["r"])(r)||(r=null);const i=An(),o=new Set;let s=!1;const a=i.app={_uid:kn++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:Hi,get config(){return i.config},set config(t){0},use(t,...e){return o.has(t)||(t&&Object(Yt["n"])(t.install)?(o.add(t),t.install(a,...e)):Object(Yt["n"])(t)&&(o.add(t),t(a,...e))),a},mixin(t){return i.mixins.includes(t)||i.mixins.push(t),a},component(t,e){return e?(i.components[t]=e,a):i.components[t]},directive(t,e){return e?(i.directives[t]=e,a):i.directives[t]},mount(o,c,u){if(!s){const l=hr(n,r);return l.appContext=i,c&&e?e(l,o):t(l,o,u),s=!0,a._container=o,o.__vue_app__=a,l.component.proxy}},unmount(){s&&(t(null,a._container),delete a._container.__vue_app__)},provide(t,e){return i.provides[t]=e,a}};return a}}function xn(){}const jn=de;function Nn(t){return Rn(t)}function Rn(t,e){xn();const{insert:n,remove:r,patchProp:i,createElement:o,createText:s,createComment:a,setText:c,setElementText:u,parentNode:l,nextSibling:h,setScopeId:f=Yt["d"],cloneNode:d,insertStaticContent:p}=t,g=(t,e,n,r=null,i=null,o=null,s=!1,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!sr(t,e)&&(r=W(t),B(t,i,o,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=e;switch(u){case Kn:m(t,e,n,r);break;case Yn:v(t,e,n,r);break;case Xn:null==t&&y(e,n,r,s);break;case Gn:j(t,e,n,r,i,o,s,a,c);break;default:1&h?O(t,e,n,r,i,o,s,a,c):6&h?N(t,e,n,r,i,o,s,a,c):(64&h||128&h)&&u.process(t,e,n,r,i,o,s,a,c,K)}null!=l&&i&&Dn(l,t&&t.ref,o,e||t,!e)},m=(t,e,r,i)=>{if(null==t)n(e.el=s(e.children),r,i);else{const n=e.el=t.el;e.children!==t.children&&c(n,e.children)}},v=(t,e,r,i)=>{null==t?n(e.el=a(e.children||""),r,i):e.el=t.el},y=(t,e,n,r)=>{[t.el,t.anchor]=p(t.children,e,n,r)},b=({el:t,anchor:e},r,i)=>{let o;while(t&&t!==e)o=h(t),n(t,r,i),t=o;n(e,r,i)},w=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=h(t),r(t),t=n;r(e)},O=(t,e,n,r,i,o,s,a,c)=>{s=s||"svg"===e.type,null==t?E(e,n,r,i,o,s,a,c):k(t,e,i,o,s,a,c)},E=(t,e,r,s,a,c,l,h)=>{let f,p;const{type:g,props:m,shapeFlag:v,transition:y,patchFlag:b,dirs:w}=t;if(t.el&&void 0!==d&&-1===b)f=t.el=d(t.el);else{if(f=t.el=o(t.type,c,m&&m.is,m),8&v?u(f,t.children):16&v&&I(t.children,f,null,s,a,c&&"foreignObject"!==g,l,h),w&&In(t,null,s,"created"),m){for(const e in m)"value"===e||Object(Yt["v"])(e)||i(f,e,null,m[e],c,t.children,s,a,z);"value"in m&&i(f,"value",null,m.value),(p=m.onVnodeBeforeMount)&&Mn(p,s,t)}T(f,t,t.scopeId,l,s)}w&&In(t,null,s,"beforeMount");const _=(!a||a&&!a.pendingBranch)&&y&&!y.persisted;_&&y.beforeEnter(f),n(f,e,r),((p=m&&m.onVnodeMounted)||_||w)&&jn(()=>{p&&Mn(p,s,t),_&&y.enter(f),w&&In(t,null,s,"mounted")},a)},T=(t,e,n,r,i)=>{if(n&&f(t,n),r)for(let o=0;o<r.length;o++)f(t,r[o]);if(i){let n=i.subTree;if(e===n){const e=i.vnode;T(t,e,e.scopeId,e.slotScopeIds,i.parent)}}},I=(t,e,n,r,i,o,s,a,c=0)=>{for(let u=c;u<t.length;u++){const c=t[u]=a?br(t[u]):yr(t[u]);g(null,c,e,n,r,i,o,s,a)}},k=(t,e,n,r,o,s,a)=>{const c=e.el=t.el;let{patchFlag:l,dynamicChildren:h,dirs:f}=e;l|=16&t.patchFlag;const d=t.props||Yt["b"],p=e.props||Yt["b"];let g;(g=p.onVnodeBeforeUpdate)&&Mn(g,n,e,t),f&&In(e,t,n,"beforeUpdate");const m=o&&"foreignObject"!==e.type;if(h?C(t.dynamicChildren,h,c,n,r,m,s):a||L(t,e,c,null,n,r,m,s,!1),l>0){if(16&l)x(c,e,d,p,n,r,o);else if(2&l&&d.class!==p.class&&i(c,"class",null,p.class,o),4&l&&i(c,"style",d.style,p.style,o),8&l){const s=e.dynamicProps;for(let e=0;e<s.length;e++){const a=s[e],u=d[a],l=p[a];l===u&&"value"!==a||i(c,a,u,l,o,t.children,n,r,z)}}1&l&&t.children!==e.children&&u(c,e.children)}else a||null!=h||x(c,e,d,p,n,r,o);((g=p.onVnodeUpdated)||f)&&jn(()=>{g&&Mn(g,n,e,t),f&&In(e,t,n,"updated")},r)},C=(t,e,n,r,i,o,s)=>{for(let a=0;a<e.length;a++){const c=t[a],u=e[a],h=c.el&&(c.type===Gn||!sr(c,u)||70&c.shapeFlag)?l(c.el):n;g(c,u,h,null,r,i,o,s,!0)}},x=(t,e,n,r,o,s,a)=>{if(n!==r){for(const c in r){if(Object(Yt["v"])(c))continue;const u=r[c],l=n[c];u!==l&&"value"!==c&&i(t,c,l,u,a,e.children,o,s,z)}if(n!==Yt["b"])for(const c in n)Object(Yt["v"])(c)||c in r||i(t,c,n[c],null,a,e.children,o,s,z);"value"in r&&i(t,"value",n.value,r.value)}},j=(t,e,r,i,o,a,c,u,l)=>{const h=e.el=t?t.el:s(""),f=e.anchor=t?t.anchor:s("");let{patchFlag:d,dynamicChildren:p,slotScopeIds:g}=e;g&&(u=u?u.concat(g):g),null==t?(n(h,r,i),n(f,r,i),I(e.children,r,f,o,a,c,u,l)):d>0&&64&d&&p&&t.dynamicChildren?(C(t.dynamicChildren,p,r,o,a,c,u),(null!=e.key||o&&e===o.subTree)&&Pn(t,e,!0)):L(t,e,r,f,o,a,c,u,l)},N=(t,e,n,r,i,o,s,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?i.ctx.activate(e,n,r,s,c):R(e,n,r,i,o,s,c):D(t,e,c)},R=(t,e,n,r,i,o,s)=>{const a=t.component=Nr(t,r,i);if(ke(t)&&(a.ctx.renderer=K),Br(a),a.asyncDep){if(i&&i.registerDep(a,M),!t.el){const t=a.subTree=hr(Yn);v(null,t,e,n)}}else M(a,t,e,n,i,o,s)},D=(t,e,n)=>{const r=e.component=t.component;if(ue(t,e,n)){if(r.asyncDep&&!r.asyncResolved)return void P(r,e,n);r.next=e,Ai(r.update),r.update()}else e.component=t.component,e.el=t.el,r.vnode=e},M=(t,e,n,r,i,o,s)=>{const a=()=>{if(t.isMounted){let e,{next:n,bu:r,u:a,parent:u,vnode:h}=t,f=n;0,c.allowRecurse=!1,n?(n.el=h.el,P(t,n,s)):n=h,r&&Object(Yt["l"])(r),(e=n.props&&n.props.onVnodeBeforeUpdate)&&Mn(e,u,n,h),c.allowRecurse=!0;const d=se(t);0;const p=t.subTree;t.subTree=d,g(p,d,l(p.el),W(p),t,i,o),n.el=d.el,null===f&&he(t,d.el),a&&jn(a,i),(e=n.props&&n.props.onVnodeUpdated)&&jn(()=>Mn(e,u,n,h),i)}else{let s;const{el:a,props:u}=e,{bm:l,m:h,parent:f}=t,d=Ae(e);if(c.allowRecurse=!1,l&&Object(Yt["l"])(l),!d&&(s=u&&u.onVnodeBeforeMount)&&Mn(s,f,e),c.allowRecurse=!0,a&&X){const n=()=>{t.subTree=se(t),X(a,t.subTree,t,i,null)};d?e.type.__asyncLoader().then(()=>!t.isUnmounted&&n()):n()}else{0;const s=t.subTree=se(t);0,g(null,s,n,r,t,i,o),e.el=s.el}if(h&&jn(h,i),!d&&(s=u&&u.onVnodeMounted)){const t=e;jn(()=>Mn(s,f,t),i)}256&e.shapeFlag&&t.a&&jn(t.a,i),t.isMounted=!0,e=n=r=null}},c=new _(a,()=>Si(t.update),t.scope),u=t.update=c.run.bind(c);u.id=t.uid,c.allowRecurse=u.allowRecurse=!0,u()},P=(t,e,n)=>{e.component=t;const r=t.vnode.props;t.vnode=e,t.next=null,ln(t,e.props,r,n),Tn(t,e.children,n),S(),ji(void 0,t.update),A()},L=(t,e,n,r,i,o,s,a,c=!1)=>{const l=t&&t.children,h=t?t.shapeFlag:0,f=e.children,{patchFlag:d,shapeFlag:p}=e;if(d>0){if(128&d)return void U(l,f,n,r,i,o,s,a,c);if(256&d)return void V(l,f,n,r,i,o,s,a,c)}8&p?(16&h&&z(l,i,o),f!==l&&u(n,f)):16&h?16&p?U(l,f,n,r,i,o,s,a,c):z(l,i,o,!0):(8&h&&u(n,""),16&p&&I(f,n,r,i,o,s,a,c))},V=(t,e,n,r,i,o,s,a,c)=>{t=t||Yt["a"],e=e||Yt["a"];const u=t.length,l=e.length,h=Math.min(u,l);let f;for(f=0;f<h;f++){const r=e[f]=c?br(e[f]):yr(e[f]);g(t[f],r,n,null,i,o,s,a,c)}u>l?z(t,i,o,!0,!1,h):I(e,n,r,i,o,s,a,c,h)},U=(t,e,n,r,i,o,s,a,c)=>{let u=0;const l=e.length;let h=t.length-1,f=l-1;while(u<=h&&u<=f){const r=t[u],l=e[u]=c?br(e[u]):yr(e[u]);if(!sr(r,l))break;g(r,l,n,null,i,o,s,a,c),u++}while(u<=h&&u<=f){const r=t[h],u=e[f]=c?br(e[f]):yr(e[f]);if(!sr(r,u))break;g(r,u,n,null,i,o,s,a,c),h--,f--}if(u>h){if(u<=f){const t=f+1,h=t<l?e[t].el:r;while(u<=f)g(null,e[u]=c?br(e[u]):yr(e[u]),n,h,i,o,s,a,c),u++}}else if(u>f)while(u<=h)B(t[u],i,o,!0),u++;else{const d=u,p=u,m=new Map;for(u=p;u<=f;u++){const t=e[u]=c?br(e[u]):yr(e[u]);null!=t.key&&m.set(t.key,u)}let v,y=0;const b=f-p+1;let w=!1,_=0;const O=new Array(b);for(u=0;u<b;u++)O[u]=0;for(u=d;u<=h;u++){const r=t[u];if(y>=b){B(r,i,o,!0);continue}let l;if(null!=r.key)l=m.get(r.key);else for(v=p;v<=f;v++)if(0===O[v-p]&&sr(r,e[v])){l=v;break}void 0===l?B(r,i,o,!0):(O[l-p]=u+1,l>=_?_=l:w=!0,g(r,e[l],n,null,i,o,s,a,c),y++)}const E=w?Ln(O):Yt["a"];for(v=E.length-1,u=b-1;u>=0;u--){const t=p+u,h=e[t],f=t+1<l?e[t+1].el:r;0===O[u]?g(null,h,n,f,i,o,s,a,c):w&&(v<0||u!==E[v]?F(h,n,f,2):v--)}}},F=(t,e,r,i,o=null)=>{const{el:s,type:a,transition:c,children:u,shapeFlag:l}=t;if(6&l)return void F(t.component.subTree,e,r,i);if(128&l)return void t.suspense.move(e,r,i);if(64&l)return void a.move(t,e,r,K);if(a===Gn){n(s,e,r);for(let t=0;t<u.length;t++)F(u[t],e,r,i);return void n(t.anchor,e,r)}if(a===Xn)return void b(t,e,r);const h=2!==i&&1&l&&c;if(h)if(0===i)c.beforeEnter(s),n(s,e,r),jn(()=>c.enter(s),o);else{const{leave:t,delayLeave:i,afterLeave:o}=c,a=()=>n(s,e,r),u=()=>{t(s,()=>{a(),o&&o()})};i?i(s,a,u):u()}else n(s,e,r)},B=(t,e,n,r=!1,i=!1)=>{const{type:o,props:s,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:f}=t;if(null!=a&&Dn(a,null,n,t,!0),256&l)return void e.ctx.deactivate(t);const d=1&l&&f,p=!Ae(t);let g;if(p&&(g=s&&s.onVnodeBeforeUnmount)&&Mn(g,e,t),6&l)H(t.component,n,r);else{if(128&l)return void t.suspense.unmount(n,r);d&&In(t,null,e,"beforeUnmount"),64&l?t.type.remove(t,e,n,i,K,r):u&&(o!==Gn||h>0&&64&h)?z(u,e,n,!1,!0):(o===Gn&&384&h||!i&&16&l)&&z(c,e,n),r&&$(t)}(p&&(g=s&&s.onVnodeUnmounted)||d)&&jn(()=>{g&&Mn(g,e,t),d&&In(t,null,e,"unmounted")},n)},$=t=>{const{type:e,el:n,anchor:i,transition:o}=t;if(e===Gn)return void q(n,i);if(e===Xn)return void w(t);const s=()=>{r(n),o&&!o.persisted&&o.afterLeave&&o.afterLeave()};if(1&t.shapeFlag&&o&&!o.persisted){const{leave:e,delayLeave:r}=o,i=()=>e(n,s);r?r(t.el,s,i):i()}else s()},q=(t,e)=>{let n;while(t!==e)n=h(t),r(t),t=n;r(e)},H=(t,e,n)=>{const{bum:r,scope:i,update:o,subTree:s,um:a}=t;r&&Object(Yt["l"])(r),i.stop(),o&&(o.active=!1,B(s,t,e,n)),a&&jn(a,e),jn(()=>{t.isUnmounted=!0},e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},z=(t,e,n,r=!1,i=!1,o=0)=>{for(let s=o;s<t.length;s++)B(t[s],e,n,r,i)},W=t=>6&t.shapeFlag?W(t.component.subTree):128&t.shapeFlag?t.suspense.next():h(t.anchor||t.el),G=(t,e,n)=>{null==t?e._vnode&&B(e._vnode,null,null,!0):g(e._vnode||null,t,e,null,null,null,n),Ni(),e._vnode=t},K={p:g,um:B,m:F,r:$,mt:R,mc:I,pc:L,pbc:C,n:W,o:t};let Y,X;return e&&([Y,X]=e(K)),{render:G,hydrate:Y,createApp:Cn(G,Y)}}function Dn(t,e,n,r,i=!1){if(Object(Yt["m"])(t))return void t.forEach((t,o)=>Dn(t,e&&(Object(Yt["m"])(e)?e[o]:e),n,r,i));if(Ae(r)&&!i)return;const o=4&r.shapeFlag?Gr(r.component)||r.component.proxy:r.el,s=i?null:o,{i:a,r:c}=t;const u=e&&e.r,l=a.refs===Yt["b"]?a.refs={}:a.refs,h=a.setupState;if(null!=u&&u!==c&&(Object(Yt["x"])(u)?(l[u]=null,Object(Yt["j"])(h,u)&&(h[u]=null)):Lt(u)&&(u.value=null)),Object(Yt["x"])(c)){const t=()=>{l[c]=s,Object(Yt["j"])(h,c)&&(h[c]=s)};s?(t.id=-1,jn(t,n)):t()}else if(Lt(c)){const t=()=>{c.value=s};s?(t.id=-1,jn(t,n)):t()}else Object(Yt["n"])(c)&&si(c,a,12,[s,l])}function Mn(t,e,n,r=null){ai(t,e,7,[n,r])}function Pn(t,e,n=!1){const r=t.children,i=e.children;if(Object(Yt["m"])(r)&&Object(Yt["m"])(i))for(let o=0;o<r.length;o++){const t=r[o];let e=i[o];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=i[o]=br(i[o]),e.el=t.el),n||Pn(t,e))}}function Ln(t){const e=t.slice(),n=[0];let r,i,o,s,a;const c=t.length;for(r=0;r<c;r++){const c=t[r];if(0!==c){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}o=0,s=n.length-1;while(o<s)a=o+s>>1,t[n[a]]<c?o=a+1:s=a;c<t[n[o]]&&(o>0&&(e[r]=n[o-1]),n[o]=r)}}o=n.length,s=n[o-1];while(o-- >0)n[o]=s,s=e[s];return n}const Vn=t=>t.__isTeleport;const Un="components",Fn="directives";function Bn(t,e){return zn(Un,t,!0,e)||t}const $n=Symbol();function qn(t){return Object(Yt["x"])(t)?zn(Un,t,!1)||t:t||$n}function Hn(t){return zn(Fn,t)}function zn(t,e,n=!0,r=!1){const i=Zt||Rr;if(i){const n=i.type;if(t===Un){const t=Xr(n);if(t&&(t===e||t===Object(Yt["e"])(e)||t===Object(Yt["f"])(Object(Yt["e"])(e))))return n}const o=Wn(i[t]||n[t],e)||Wn(i.appContext[t],e);return!o&&r?n:o}}function Wn(t,e){return t&&(t[e]||t[Object(Yt["e"])(e)]||t[Object(Yt["f"])(Object(Yt["e"])(e))])}const Gn=Symbol(void 0),Kn=Symbol(void 0),Yn=Symbol(void 0),Xn=Symbol(void 0),Jn=[];let Qn=null;function Zn(t=!1){Jn.push(Qn=t?null:[])}function tr(){Jn.pop(),Qn=Jn[Jn.length-1]||null}let er=1;function nr(t){er+=t}function rr(t){return t.dynamicChildren=er>0?Qn||Yt["a"]:null,tr(),er>0&&Qn&&Qn.push(t),t}function ir(t,e,n,r,i){return rr(hr(t,e,n,r,i,!0))}function or(t){return!!t&&!0===t.__v_isVNode}function sr(t,e){return t.type===e.type&&t.key===e.key}const ar="__vInternal",cr=({key:t})=>null!=t?t:null,ur=({ref:t})=>null!=t?Object(Yt["x"])(t)||Lt(t)||Object(Yt["n"])(t)?{i:Zt,r:t}:t:null;function lr(t,e=null,n=null,r=0,i=null,o=(t===Gn?0:1),s=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&cr(e),ref:e&&ur(e),scopeId:te,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return a?(wr(c,n),128&o&&t.normalize(c)):n&&(c.shapeFlag|=Object(Yt["x"])(n)?8:16),er>0&&!s&&Qn&&(c.patchFlag>0||6&o)&&32!==c.patchFlag&&Qn.push(c),c}const hr=fr;function fr(t,e=null,n=null,r=0,i=null,o=!1){if(t&&t!==$n||(t=Yn),or(t)){const r=pr(t,e,!0);return n&&wr(r,n),r}if(Qr(t)&&(t=t.__vccOpts),e){e=dr(e);let{class:t,style:n}=e;t&&!Object(Yt["x"])(t)&&(e.class=Object(Yt["z"])(t)),Object(Yt["r"])(n)&&(jt(n)&&!Object(Yt["m"])(n)&&(n=Object(Yt["h"])({},n)),e.style=Object(Yt["A"])(n))}const s=Object(Yt["x"])(t)?1:fe(t)?128:Vn(t)?64:Object(Yt["r"])(t)?4:Object(Yt["n"])(t)?2:0;return lr(t,e,n,r,i,s,o,!0)}function dr(t){return t?jt(t)||ar in t?Object(Yt["h"])({},t):t:null}function pr(t,e,n=!1){const{props:r,ref:i,patchFlag:o,children:s}=t,a=e?_r(r||{},e):r,c={__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&cr(a),ref:e&&e.ref?n&&i?Object(Yt["m"])(i)?i.concat(ur(e)):[i,ur(e)]:ur(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:s,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Gn?-1===o?16:16|o:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&pr(t.ssContent),ssFallback:t.ssFallback&&pr(t.ssFallback),el:t.el,anchor:t.anchor};return c}function gr(t=" ",e=0){return hr(Kn,null,t,e)}function mr(t,e){const n=hr(Xn,null,t);return n.staticCount=e,n}function vr(t="",e=!1){return e?(Zn(),ir(Yn,null,t)):hr(Yn,null,t)}function yr(t){return null==t||"boolean"===typeof t?hr(Yn):Object(Yt["m"])(t)?hr(Gn,null,t.slice()):"object"===typeof t?br(t):hr(Kn,null,String(t))}function br(t){return null===t.el||t.memo?t:pr(t)}function wr(t,e){let n=0;const{shapeFlag:r}=t;if(null==e)e=null;else if(Object(Yt["m"])(e))n=16;else if("object"===typeof e){if(65&r){const n=e.default;return void(n&&(n._c&&(n._d=!1),wr(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||ar in e?3===r&&Zt&&(1===Zt.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=Zt}}else Object(Yt["n"])(e)?(e={default:e,_ctx:Zt},n=32):(e=String(e),64&r?(n=16,e=[gr(e)]):n=8);t.children=e,t.shapeFlag|=n}function _r(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const t in r)if("class"===t)e.class!==r.class&&(e.class=Object(Yt["z"])([e.class,r.class]));else if("style"===t)e.style=Object(Yt["A"])([e.style,r.style]);else if(Object(Yt["s"])(t)){const n=e[t],i=r[t];n!==i&&(e[t]=n?[].concat(n,i):i)}else""!==t&&(e[t]=r[t])}return e}function Or(t,e,n,r){let i;const o=n&&n[r];if(Object(Yt["m"])(t)||Object(Yt["x"])(t)){i=new Array(t.length);for(let n=0,r=t.length;n<r;n++)i[n]=e(t[n],n,void 0,o&&o[n])}else if("number"===typeof t){0,i=new Array(t);for(let n=0;n<t;n++)i[n]=e(n+1,n,void 0,o&&o[n])}else if(Object(Yt["r"])(t))if(t[Symbol.iterator])i=Array.from(t,(t,n)=>e(t,n,void 0,o&&o[n]));else{const n=Object.keys(t);i=new Array(n.length);for(let r=0,s=n.length;r<s;r++){const s=n[r];i[r]=e(t[s],s,r,o&&o[r])}}else i=[];return n&&(n[r]=i),i}function Er(t,e){for(let n=0;n<e.length;n++){const r=e[n];if(Object(Yt["m"])(r))for(let e=0;e<r.length;e++)t[r[e].name]=r[e].fn;else r&&(t[r.name]=r.fn)}return t}function Tr(t,e,n={},r,i){if(Zt.isCE)return hr("slot","default"===e?null:{name:e},r&&r());let o=t[e];o&&o._c&&(o._d=!1),Zn();const s=o&&Sr(o(n)),a=ir(Gn,{key:n.key||"_"+e},s||(r?r():[]),s&&1===t._?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),o&&o._c&&(o._d=!0),a}function Sr(t){return t.some(t=>!or(t)||t.type!==Yn&&!(t.type===Gn&&!Sr(t.children)))?t:null}function Ir(t){const e={};for(const n in t)e[Object(Yt["D"])(n)]=t[n];return e}const Ar=t=>t?Lr(t)?Gr(t)||t.proxy:Ar(t.parent):null,kr=Object(Yt["h"])(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ar(t.parent),$root:t=>Ar(t.root),$emit:t=>t.emit,$options:t=>Ze(t),$forceUpdate:t=>()=>Si(t.update),$nextTick:t=>Ei.bind(t.proxy),$watch:t=>Fi.bind(t)}),Cr={get({_:t},e){const{ctx:n,setupState:r,data:i,props:o,accessCache:s,type:a,appContext:c}=t;let u;if("$"!==e[0]){const a=s[e];if(void 0!==a)switch(a){case 0:return r[e];case 1:return i[e];case 3:return n[e];case 2:return o[e]}else{if(r!==Yt["b"]&&Object(Yt["j"])(r,e))return s[e]=0,r[e];if(i!==Yt["b"]&&Object(Yt["j"])(i,e))return s[e]=1,i[e];if((u=t.propsOptions[0])&&Object(Yt["j"])(u,e))return s[e]=2,o[e];if(n!==Yt["b"]&&Object(Yt["j"])(n,e))return s[e]=3,n[e];Ke&&(s[e]=4)}}const l=kr[e];let h,f;return l?("$attrs"===e&&k(t,"get",e),l(t)):(h=a.__cssModules)&&(h=h[e])?h:n!==Yt["b"]&&Object(Yt["j"])(n,e)?(s[e]=3,n[e]):(f=c.config.globalProperties,Object(Yt["j"])(f,e)?f[e]:void 0)},set({_:t},e,n){const{data:r,setupState:i,ctx:o}=t;if(i!==Yt["b"]&&Object(Yt["j"])(i,e))i[e]=n;else if(r!==Yt["b"]&&Object(Yt["j"])(r,e))r[e]=n;else if(Object(Yt["j"])(t.props,e))return!1;return("$"!==e[0]||!(e.slice(1)in t))&&(o[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:o}},s){let a;return void 0!==n[s]||t!==Yt["b"]&&Object(Yt["j"])(t,s)||e!==Yt["b"]&&Object(Yt["j"])(e,s)||(a=o[0])&&Object(Yt["j"])(a,s)||Object(Yt["j"])(r,s)||Object(Yt["j"])(kr,s)||Object(Yt["j"])(i.config.globalProperties,s)}};const xr=An();let jr=0;function Nr(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||xr,o={uid:jr++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,update:null,scope:new s(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:dn(r,i),emitsOptions:Jt(r,i),emit:null,emitted:null,propsDefaults:Yt["b"],inheritAttrs:r.inheritAttrs,ctx:Yt["b"],data:Yt["b"],props:Yt["b"],attrs:Yt["b"],slots:Yt["b"],refs:Yt["b"],setupState:Yt["b"],setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=Xt.bind(null,o),t.ce&&t.ce(o),o}let Rr=null;const Dr=()=>Rr||Zt,Mr=t=>{Rr=t,t.scope.on()},Pr=()=>{Rr&&Rr.scope.off(),Rr=null};function Lr(t){return 4&t.vnode.shapeFlag}let Vr,Ur,Fr=!1;function Br(t,e=!1){Fr=e;const{props:n,children:r}=t.vnode,i=Lr(t);un(t,n,i,e),En(t,r);const o=i?$r(t,e):void 0;return Fr=!1,o}function $r(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Rt(new Proxy(t.ctx,Cr));const{setup:r}=n;if(r){const n=t.setupContext=r.length>1?Wr(t):null;Mr(t),S();const i=si(r,t,0,[t.props,n]);if(A(),Pr(),Object(Yt["u"])(i)){if(i.then(Pr,Pr),e)return i.then(n=>{qr(t,n,e)}).catch(e=>{ci(e,t,0)});t.asyncDep=i}else qr(t,i,e)}else Hr(t,e)}function qr(t,e,n){Object(Yt["n"])(e)?t.render=e:Object(Yt["r"])(e)&&(t.setupState=Ht(e)),Hr(t,n)}function Hr(t,e,n){const r=t.type;if(!t.render){if(Vr&&!r.render){const e=r.template;if(e){0;const{isCustomElement:n,compilerOptions:i}=t.appContext.config,{delimiters:o,compilerOptions:s}=r,a=Object(Yt["h"])(Object(Yt["h"])({isCustomElement:n,delimiters:o},i),s);r.render=Vr(e,a)}}t.render=r.render||Yt["d"],Ur&&Ur(t)}Mr(t),S(),Ye(t),A(),Pr()}function zr(t){return new Proxy(t.attrs,{get(e,n){return k(t,"get","$attrs"),e[n]}})}function Wr(t){const e=e=>{t.exposed=e||{}};let n;return{get attrs(){return n||(n=zr(t))},slots:t.slots,emit:t.emit,expose:e}}function Gr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Ht(Rt(t.exposed)),{get(e,n){return n in e?e[n]:n in kr?kr[n](t):void 0}}))}const Kr=/(?:^|[-_])(\w)/g,Yr=t=>t.replace(Kr,t=>t.toUpperCase()).replace(/[-_]/g,"");function Xr(t){return Object(Yt["n"])(t)&&t.displayName||t.name}function Jr(t,e,n=!1){let r=Xr(e);if(!r&&e.__file){const t=e.__file.match(/([^/\\]+)\.\w+$/);t&&(r=t[1])}if(!r&&t&&t.parent){const n=t=>{for(const n in t)if(t[n]===e)return n};r=n(t.components||t.parent.type.components)||n(t.appContext.components)}return r?Yr(r):n?"App":"Anonymous"}function Qr(t){return Object(Yt["n"])(t)&&"__vccOpts"in t}const Zr=[];function ti(t,...e){S();const n=Zr.length?Zr[Zr.length-1].component:null,r=n&&n.appContext.config.warnHandler,i=ei();if(r)si(r,n,11,[t+e.join(""),n&&n.proxy,i.map(({vnode:t})=>`at <${Jr(n,t.type)}>`).join("\n"),i]);else{const n=["[Vue warn]: "+t,...e];i.length&&n.push("\n",...ni(i)),console.warn(...n)}A()}function ei(){let t=Zr[Zr.length-1];if(!t)return[];const e=[];while(t){const n=e[0];n&&n.vnode===t?n.recurseCount++:e.push({vnode:t,recurseCount:0});const r=t.component&&t.component.parent;t=r&&r.vnode}return e}function ni(t){const e=[];return t.forEach((t,n)=>{e.push(...0===n?[]:["\n"],...ri(t))}),e}function ri({vnode:t,recurseCount:e}){const n=e>0?`... (${e} recursive calls)`:"",r=!!t.component&&null==t.component.parent,i=" at <"+Jr(t.component,t.type,r),o=">"+n;return t.props?[i,...ii(t.props),o]:[i+o]}function ii(t){const e=[],n=Object.keys(t);return n.slice(0,3).forEach(n=>{e.push(...oi(n,t[n]))}),n.length>3&&e.push(" ..."),e}function oi(t,e,n){return Object(Yt["x"])(e)?(e=JSON.stringify(e),n?e:[`${t}=${e}`]):"number"===typeof e||"boolean"===typeof e||null==e?n?e:[`${t}=${e}`]:Lt(e)?(e=oi(t,Nt(e.value),!0),n?e:[t+"=Ref<",e,">"]):Object(Yt["n"])(e)?[`${t}=fn${e.name?`<${e.name}>`:""}`]:(e=Nt(e),n?e:[t+"=",e])}function si(t,e,n,r){let i;try{i=r?t(...r):t()}catch(o){ci(o,e,n)}return i}function ai(t,e,n,r){if(Object(Yt["n"])(t)){const i=si(t,e,n,r);return i&&Object(Yt["u"])(i)&&i.catch(t=>{ci(t,e,n)}),i}const i=[];for(let o=0;o<t.length;o++)i.push(ai(t[o],e,n,r));return i}function ci(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const i=e.proxy,o=n;while(r){const e=r.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,i,o))return;r=r.parent}const s=e.appContext.config.errorHandler;if(s)return void si(s,null,10,[t,i,o])}ui(t,n,i,r)}function ui(t,e,n,r=!0){console.error(t)}let li=!1,hi=!1;const fi=[];let di=0;const pi=[];let gi=null,mi=0;const vi=[];let yi=null,bi=0;const wi=Promise.resolve();let _i=null,Oi=null;function Ei(t){const e=_i||wi;return t?e.then(this?t.bind(this):t):e}function Ti(t){let e=di+1,n=fi.length;while(e<n){const r=e+n>>>1,i=Ri(fi[r]);i<t?e=r+1:n=r}return e}function Si(t){fi.length&&fi.includes(t,li&&t.allowRecurse?di+1:di)||t===Oi||(null==t.id?fi.push(t):fi.splice(Ti(t.id),0,t),Ii())}function Ii(){li||hi||(hi=!0,_i=wi.then(Di))}function Ai(t){const e=fi.indexOf(t);e>di&&fi.splice(e,1)}function ki(t,e,n,r){Object(Yt["m"])(t)?n.push(...t):e&&e.includes(t,t.allowRecurse?r+1:r)||n.push(t),Ii()}function Ci(t){ki(t,gi,pi,mi)}function xi(t){ki(t,yi,vi,bi)}function ji(t,e=null){if(pi.length){for(Oi=e,gi=[...new Set(pi)],pi.length=0,mi=0;mi<gi.length;mi++)gi[mi]();gi=null,mi=0,Oi=null,ji(t,e)}}function Ni(t){if(vi.length){const t=[...new Set(vi)];if(vi.length=0,yi)return void yi.push(...t);for(yi=t,yi.sort((t,e)=>Ri(t)-Ri(e)),bi=0;bi<yi.length;bi++)yi[bi]();yi=null,bi=0}}const Ri=t=>null==t.id?1/0:t.id;function Di(t){hi=!1,li=!0,ji(t),fi.sort((t,e)=>Ri(t)-Ri(e));try{for(di=0;di<fi.length;di++){const t=fi[di];t&&!1!==t.active&&si(t,null,14)}}finally{di=0,fi.length=0,Ni(t),li=!1,_i=null,(fi.length||pi.length||vi.length)&&Di(t)}}function Mi(t,e){return Ui(t,null,e)}function Pi(t,e){return Ui(t,null,{flush:"post"})}const Li={};function Vi(t,e,n){return Ui(t,e,n)}function Ui(t,e,{immediate:n,deep:r,flush:i,onTrack:o,onTrigger:s}=Yt["b"]){const a=Rr;let c,u,l=!1,h=!1;if(Lt(t)?(c=()=>t.value,l=!!t._shallow):Ct(t)?(c=()=>t,r=!0):Object(Yt["m"])(t)?(h=!0,l=t.some(Ct),c=()=>t.map(t=>Lt(t)?t.value:Ct(t)?$i(t):Object(Yt["n"])(t)?si(t,a,2):void 0)):c=Object(Yt["n"])(t)?e?()=>si(t,a,2):()=>{if(!a||!a.isUnmounted)return u&&u(),ai(t,a,3,[f])}:Yt["d"],e&&r){const t=c;c=()=>$i(t())}let f=t=>{u=m.onStop=()=>{si(t,a,4)}},d=h?[]:Li;const p=()=>{if(m.active)if(e){const t=m.run();(r||l||(h?t.some((t,e)=>Object(Yt["i"])(t,d[e])):Object(Yt["i"])(t,d)))&&(u&&u(),ai(e,a,3,[t,d===Li?void 0:d,f]),d=t)}else m.run()};let g;p.allowRecurse=!!e,g="sync"===i?p:"post"===i?()=>jn(p,a&&a.suspense):()=>{!a||a.isMounted?Ci(p):p()};const m=new _(c,g);return e?n?p():d=m.run():"post"===i?jn(m.run.bind(m),a&&a.suspense):m.run(),()=>{m.stop(),a&&a.scope&&Object(Yt["B"])(a.scope.effects,m)}}function Fi(t,e,n){const r=this.proxy,i=Object(Yt["x"])(t)?t.includes(".")?Bi(r,t):()=>r[t]:t.bind(r,r);let o;Object(Yt["n"])(e)?o=e:(o=e.handler,n=e);const s=Rr;Mr(this);const a=Ui(i,o.bind(r),n);return s?Mr(s):Pr(),a}function Bi(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}function $i(t,e=new Set){if(!Object(Yt["r"])(t)||t["__v_skip"])return t;if(e=e||new Set,e.has(t))return t;if(e.add(t),Lt(t))$i(t.value,e);else if(Object(Yt["m"])(t))for(let n=0;n<t.length;n++)$i(t[n],e);else if(Object(Yt["w"])(t)||Object(Yt["p"])(t))t.forEach(t=>{$i(t,e)});else if(Object(Yt["t"])(t))for(const n in t)$i(t[n],e);return t}function qi(t,e,n){const r=arguments.length;return 2===r?Object(Yt["r"])(e)&&!Object(Yt["m"])(e)?or(e)?hr(t,null,[e]):hr(t,e):hr(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&or(n)&&(n=[n]),hr(t,e,n))}Symbol("");const Hi="3.2.6";var zi=n("3bfd");const Wi="http://www.w3.org/2000/svg",Gi="undefined"!==typeof document?document:null,Ki=new Map,Yi={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?Gi.createElementNS(Wi,t):Gi.createElement(t,n?{is:n}:void 0);return"select"===t&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:t=>Gi.createTextNode(t),createComment:t=>Gi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Gi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r){const i=n?n.previousSibling:e.lastChild;let o=Ki.get(t);if(!o){const e=Gi.createElement("template");if(e.innerHTML=r?`<svg>${t}</svg>`:t,o=e.content,r){const t=o.firstChild;while(t.firstChild)o.appendChild(t.firstChild);o.removeChild(t)}Ki.set(t,o)}return e.insertBefore(o.cloneNode(!0),n),[i?i.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Xi(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Ji(t,e,n){const r=t.style;if(n)if(Object(zi["q"])(n)){if(e!==n){const e=r.display;r.cssText=n,"_vod"in t&&(r.display=e)}}else{for(const t in n)Zi(r,t,n[t]);if(e&&!Object(zi["q"])(e))for(const t in e)null==n[t]&&Zi(r,t,"")}else t.removeAttribute("style")}const Qi=/\s*!important$/;function Zi(t,e,n){if(Object(zi["h"])(n))n.forEach(n=>Zi(t,e,n));else if(e.startsWith("--"))t.setProperty(e,n);else{const r=no(t,e);Qi.test(n)?t.setProperty(Object(zi["e"])(r),n.replace(Qi,""),"important"):t[r]=n}}const to=["Webkit","Moz","ms"],eo={};function no(t,e){const n=eo[e];if(n)return n;let r=Object(Yt["e"])(e);if("filter"!==r&&r in t)return eo[e]=r;r=Object(zi["c"])(r);for(let i=0;i<to.length;i++){const n=to[i]+r;if(n in t)return eo[e]=n}return e}const ro="http://www.w3.org/1999/xlink";function io(t,e,n,r,i){if(r&&e.startsWith("xlink:"))null==n?t.removeAttributeNS(ro,e.slice(6,e.length)):t.setAttributeNS(ro,e,n);else{const r=Object(zi["p"])(e);null==n||r&&!Object(zi["f"])(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function oo(t,e,n,r,i,o,s){if("innerHTML"===e||"textContent"===e)return r&&s(r,i,o),void(t[e]=null==n?"":n);if("value"===e&&"PROGRESS"!==t.tagName){t._value=n;const r=null==n?"":n;return t.value!==r&&(t.value=r),void(null==n&&t.removeAttribute(e))}if(""===n||null==n){const r=typeof t[e];if("boolean"===r)return void(t[e]=Object(zi["f"])(n));if(null==n&&"string"===r)return t[e]="",void t.removeAttribute(e);if("number"===r){try{t[e]=0}catch(a){}return void t.removeAttribute(e)}}try{t[e]=n}catch(c){0}}let so=Date.now,ao=!1;if("undefined"!==typeof window){so()>document.createEvent("Event").timeStamp&&(so=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);ao=!!(t&&Number(t[1])<=53)}let co=0;const uo=Promise.resolve(),lo=()=>{co=0},ho=()=>co||(uo.then(lo),co=so());function fo(t,e,n,r){t.addEventListener(e,n,r)}function po(t,e,n,r){t.removeEventListener(e,n,r)}function go(t,e,n,r,i=null){const o=t._vei||(t._vei={}),s=o[e];if(r&&s)s.value=r;else{const[n,a]=vo(e);if(r){const s=o[e]=yo(r,i);fo(t,n,s,a)}else s&&(po(t,n,s,a),o[e]=void 0)}}const mo=/(?:Once|Passive|Capture)$/;function vo(t){let e;if(mo.test(t)){let n;e={};while(n=t.match(mo))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Object(zi["e"])(t.slice(2)),e]}function yo(t,e){const n=t=>{const r=t.timeStamp||so();(ao||r>=n.attached-1)&&ai(bo(t,n.value),e,5,[t])};return n.value=t,n.attached=ho(),n}function bo(t,e){if(Object(zi["h"])(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(t=>e=>!e._stopped&&t(e))}return e}const wo=/^on[a-z]/,_o=(t,e,n,r,i=!1,o,s,a,c)=>{"class"===e?Xi(t,r,i):"style"===e?Ji(t,n,r):Object(zi["m"])(e)?Object(zi["k"])(e)||go(t,e,n,r,s):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):Oo(t,e,r,i))?oo(t,e,r,o,s,a,c):("true-value"===e?t._trueValue=r:"false-value"===e&&(t._falseValue=r),io(t,e,r,i))};function Oo(t,e,n,r){return r?"innerHTML"===e||"textContent"===e||!!(e in t&&wo.test(e)&&Object(zi["i"])(n)):"spellcheck"!==e&&"draggable"!==e&&("form"!==e&&(("list"!==e||"INPUT"!==t.tagName)&&(("type"!==e||"TEXTAREA"!==t.tagName)&&((!wo.test(e)||!Object(zi["q"])(n))&&e in t))))}"undefined"!==typeof HTMLElement&&HTMLElement;function Eo(t){const e=Dr();if(!e)return;const n=()=>To(e.subTree,t(e.proxy));Pi(n),Ue(()=>{const t=new MutationObserver(n);t.observe(e.subTree.el.parentNode,{childList:!0}),qe(()=>t.disconnect())})}function To(t,e){if(128&t.shapeFlag){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{To(n.activeBranch,e)})}while(t.component)t=t.component.subTree;if(1&t.shapeFlag&&t.el)So(t.el,e);else if(t.type===Gn)t.children.forEach(t=>To(t,e));else if(t.type===Xn){let{el:n,anchor:r}=t;while(n){if(So(n,e),n===r)break;n=n.nextSibling}}}function So(t,e){if(1===t.nodeType){const n=t.style;for(const t in e)n.setProperty("--"+t,e[t])}}const Io="transition",Ao="animation",ko=(t,{slots:e})=>qi(be,Ro(t),e);ko.displayName="Transition";const Co={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},xo=ko.props=Object(zi["d"])({},be.props,Co),jo=(t,e=[])=>{Object(zi["h"])(t)?t.forEach(t=>t(...e)):t&&t(...e)},No=t=>!!t&&(Object(zi["h"])(t)?t.some(t=>t.length>1):t.length>1);function Ro(t){const e={};for(const k in t)k in Co||(e[k]=t[k]);if(!1===t.css)return e;const{name:n="v",type:r,duration:i,enterFromClass:o=n+"-enter-from",enterActiveClass:s=n+"-enter-active",enterToClass:a=n+"-enter-to",appearFromClass:c=o,appearActiveClass:u=s,appearToClass:l=a,leaveFromClass:h=n+"-leave-from",leaveActiveClass:f=n+"-leave-active",leaveToClass:d=n+"-leave-to"}=t,p=Do(i),g=p&&p[0],m=p&&p[1],{onBeforeEnter:v,onEnter:y,onEnterCancelled:b,onLeave:w,onLeaveCancelled:_,onBeforeAppear:O=v,onAppear:E=y,onAppearCancelled:T=b}=e,S=(t,e,n)=>{Lo(t,e?l:a),Lo(t,e?u:s),n&&n()},I=(t,e)=>{Lo(t,d),Lo(t,f),e&&e()},A=t=>(e,n)=>{const i=t?E:y,s=()=>S(e,t,n);jo(i,[e,s]),Vo(()=>{Lo(e,t?c:o),Po(e,t?l:a),No(i)||Fo(e,r,g,s)})};return Object(zi["d"])(e,{onBeforeEnter(t){jo(v,[t]),Po(t,o),Po(t,s)},onBeforeAppear(t){jo(O,[t]),Po(t,c),Po(t,u)},onEnter:A(!1),onAppear:A(!0),onLeave(t,e){const n=()=>I(t,e);Po(t,h),Ho(),Po(t,f),Vo(()=>{Lo(t,h),Po(t,d),No(w)||Fo(t,r,m,n)}),jo(w,[t,n])},onEnterCancelled(t){S(t,!1),jo(b,[t])},onAppearCancelled(t){S(t,!0),jo(T,[t])},onLeaveCancelled(t){I(t),jo(_,[t])}})}function Do(t){if(null==t)return null;if(Object(zi["l"])(t))return[Mo(t.enter),Mo(t.leave)];{const e=Mo(t);return[e,e]}}function Mo(t){const e=Object(zi["t"])(t);return e}function Po(t,e){e.split(/\s+/).forEach(e=>e&&t.classList.add(e)),(t._vtc||(t._vtc=new Set)).add(e)}function Lo(t,e){e.split(/\s+/).forEach(e=>e&&t.classList.remove(e));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Vo(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Uo=0;function Fo(t,e,n,r){const i=t._endId=++Uo,o=()=>{i===t._endId&&r()};if(n)return setTimeout(o,n);const{type:s,timeout:a,propCount:c}=Bo(t,e);if(!s)return r();const u=s+"end";let l=0;const h=()=>{t.removeEventListener(u,f),o()},f=e=>{e.target===t&&++l>=c&&h()};setTimeout(()=>{l<c&&h()},a+1),t.addEventListener(u,f)}function Bo(t,e){const n=window.getComputedStyle(t),r=t=>(n[t]||"").split(", "),i=r(Io+"Delay"),o=r(Io+"Duration"),s=$o(i,o),a=r(Ao+"Delay"),c=r(Ao+"Duration"),u=$o(a,c);let l=null,h=0,f=0;e===Io?s>0&&(l=Io,h=s,f=o.length):e===Ao?u>0&&(l=Ao,h=u,f=c.length):(h=Math.max(s,u),l=h>0?s>u?Io:Ao:null,f=l?l===Io?o.length:c.length:0);const d=l===Io&&/\b(transform|all)(,|$)/.test(n[Io+"Property"]);return{type:l,timeout:h,propCount:f,hasTransform:d}}function $o(t,e){while(t.length<e.length)t=t.concat(t);return Math.max(...e.map((e,n)=>qo(e)+qo(t[n])))}function qo(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function Ho(){return document.body.offsetHeight}const zo=new WeakMap,Wo=new WeakMap,Go={name:"TransitionGroup",props:Object(zi["d"])({},xo,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Dr(),r=me();let i,o;return Be(()=>{if(!i.length)return;const e=t.moveClass||(t.name||"v")+"-move";if(!Qo(i[0].el,n.vnode.el,e))return;i.forEach(Yo),i.forEach(Xo);const r=i.filter(Jo);Ho(),r.forEach(t=>{const n=t.el,r=n.style;Po(n,e),r.transform=r.webkitTransform=r.transitionDuration="";const i=n._moveCb=t=>{t&&t.target!==n||t&&!/transform$/.test(t.propertyName)||(n.removeEventListener("transitionend",i),n._moveCb=null,Lo(n,e))};n.addEventListener("transitionend",i)})}),()=>{const s=Nt(t),a=Ro(s);let c=s.tag||Gn;i=o,o=e.default?Se(e.default()):[];for(let t=0;t<o.length;t++){const e=o[t];null!=e.key&&Te(e,_e(e,a,r,n))}if(i)for(let t=0;t<i.length;t++){const e=i[t];Te(e,_e(e,a,r,n)),zo.set(e,e.el.getBoundingClientRect())}return hr(c,null,o)}}},Ko=Go;function Yo(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function Xo(t){Wo.set(t,t.el.getBoundingClientRect())}function Jo(t){const e=zo.get(t),n=Wo.get(t),r=e.left-n.left,i=e.top-n.top;if(r||i){const e=t.el.style;return e.transform=e.webkitTransform=`translate(${r}px,${i}px)`,e.transitionDuration="0s",t}}function Qo(t,e,n){const r=t.cloneNode();t._vtc&&t._vtc.forEach(t=>{t.split(/\s+/).forEach(t=>t&&r.classList.remove(t))}),n.split(/\s+/).forEach(t=>t&&r.classList.add(t)),r.style.display="none";const i=1===e.nodeType?e:e.parentNode;i.appendChild(r);const{hasTransform:o}=Bo(r);return i.removeChild(r),o}const Zo=["ctrl","shift","alt","meta"],ts={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&0!==t.button,middle:t=>"button"in t&&1!==t.button,right:t=>"button"in t&&2!==t.button,exact:(t,e)=>Zo.some(n=>t[n+"Key"]&&!e.includes(n))},es=(t,e)=>(n,...r)=>{for(let t=0;t<e.length;t++){const r=ts[e[t]];if(r&&r(n,e))return}return t(n,...r)},ns={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},rs=(t,e)=>n=>{if(!("key"in n))return;const r=Object(zi["e"])(n.key);return e.some(t=>t===r||ns[t]===r)?t(n):void 0},is={beforeMount(t,{value:e},{transition:n}){t._vod="none"===t.style.display?"":t.style.display,n&&e?n.beforeEnter(t):os(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!==!n&&(r?e?(r.beforeEnter(t),os(t,!0),r.enter(t)):r.leave(t,()=>{os(t,!1)}):os(t,e))},beforeUnmount(t,{value:e}){os(t,e)}};function os(t,e){t.style.display=e?t._vod:"none"}const ss=Object(zi["d"])({patchProp:_o},Yi);let as;function cs(){return as||(as=Nn(ss))}const us=(...t)=>{const e=cs().createApp(...t);const{mount:n}=e;return e.mount=t=>{const r=ls(t);if(!r)return;const i=e._component;Object(zi["i"])(i)||i.render||i.template||(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function ls(t){if(Object(zi["q"])(t)){const e=document.querySelector(t);return e}return t}},"7b0b":function(t,e,n){var r=n("1d80");t.exports=function(t){return Object(r(t))}},"7bb1":function(t,e,n){"use strict";n.d(e,"a",(function(){return Nt})),n.d(e,"b",(function(){return Ot})),n.d(e,"c",(function(){return jt})),n.d(e,"d",(function(){return rt})),n.d(e,"e",(function(){return l}));var r=n("7a23");
/**
  * vee-validate v4.4.11
  * (c) 2021 Abdelrahman Awad
  * @license MIT
  */function i(t){return"function"===typeof t}function o(t){return null===t||void 0===t}const s=t=>null!==t&&!!t&&"object"===typeof t&&!Array.isArray(t);function a(t){return Number(t)>=0}function c(t){const e=parseFloat(t);return isNaN(e)?t:e}const u={};function l(t,e){f(t,e),u[t]=e}function h(t){return u[t]}function f(t,e){if(!i(e))throw new Error(`Extension Error: The validator '${t}' must be a function.`)}const d=Symbol("vee-validate-form"),p=Symbol("vee-validate-form-errors"),g=Symbol("vee-validate-form-initial-values"),m=Symbol("vee-validate-field-instance"),v=Symbol("Default empty value");function y(t){return i(t)&&!!t.__locatorRef}function b(t){return["input","textarea","select"].includes(t)}function w(t,e){return b(t)&&"file"===e.type}function _(t){return!!t&&i(t.validate)}function O(t){return"checkbox"===t||"radio"===t}function E(t){return s(t)||Array.isArray(t)}function T(t){return Array.isArray(t)?0===t.length:s(t)&&0===Object.keys(t).length}function S(t){return/^\[.+\]$/i.test(t)}function I(t){return A(t)&&t.multiple}function A(t){return"SELECT"===t.tagName}function k(t,e){const n=![!1,null,void 0,0].includes(e.multiple)&&!Number.isNaN(e.multiple);return"select"===t&&"multiple"in e&&n}function C(t,e){return k(t,e)||w(t,e)}function x(t){return j(t)&&t.target&&"submit"in t.target}function j(t){return!!t&&(!!("undefined"!==typeof Event&&i(Event)&&t instanceof Event)||!(!t||!t.srcElement))}function N(t,e){return e in t&&t[e]!==v}function R(t){return S(t)?t.replace(/\[|\]/gi,""):t}function D(t,e,n){if(!t)return n;if(S(e))return t[R(e)];const r=e.split(/\.|\[(\d+)\]/).filter(Boolean).reduce((t,e)=>E(t)&&e in t?t[e]:n,t);return r}function M(t,e,n){if(S(e))return void(t[R(e)]=n);const r=e.split(/\.|\[(\d+)\]/).filter(Boolean);let i=t;for(let s=0;s<r.length;s++){if(s===r.length-1)return void(i[r[s]]=n);r[s]in i&&!o(i[r[s]])||(i[r[s]]=a(r[s+1])?[]:{}),i=i[r[s]]}}function P(t,e){Array.isArray(t)&&a(e)?t.splice(Number(e),1):s(t)&&delete t[e]}function L(t,e){if(S(e))return void delete t[R(e)];const n=e.split(/\.|\[(\d+)\]/).filter(Boolean);let r=t;for(let s=0;s<n.length;s++){if(s===n.length-1){P(r,n[s]);break}if(!(n[s]in r)||o(r[n[s]]))break;r=r[n[s]]}const i=n.map((e,r)=>D(t,n.slice(0,r).join(".")));for(let o=i.length-1;o>=0;o--)T(i[o])&&(0!==o?P(i[o-1],n[o-1]):P(t,n[0]))}function V(t){return Object.keys(t)}function U(t,e){const n=Object(r["m"])();return(null===n||void 0===n?void 0:n.provides[t])||Object(r["o"])(t,e)}function F(t){return Array.isArray(t)?t[0]:t}function B(t,e,n=!1){Array.isArray(t)?n?e(t[0]):t.forEach(e):e(t)}function $(t,e,n){if(Array.isArray(t)){const n=[...t],r=n.indexOf(e);return r>=0?n.splice(r,1):n.push(e),n}return t===e?n:e}const q=(t,e,n)=>e.slots.default?"string"!==typeof t&&t?{default:()=>{var t,r;return null===(r=(t=e.slots).default)||void 0===r?void 0:r.call(t,n())}}:e.slots.default(n()):e.slots.default;function H(t){if(z(t))return t._value}function z(t){return"_value"in t}function W(t){if(!j(t))return t;const e=t.target;if(O(e.type)&&z(e))return H(e);if("file"===e.type&&e.files)return Array.from(e.files);if(I(e))return Array.from(e.options).filter(t=>t.selected&&!t.disabled).map(H);if(A(e)){const t=Array.from(e.options).find(t=>t.selected);return t?H(t):e.value}return e.value}function G(t){const e={};return Object.defineProperty(e,"_$$isNormalized",{value:!0,writable:!1,enumerable:!1,configurable:!1}),t?s(t)&&t._$$isNormalized?t:s(t)?Object.keys(t).reduce((e,n)=>{const r=K(t[n]);return!1!==t[n]&&(e[n]=Y(r)),e},e):"string"!==typeof t?e:t.split("|").reduce((t,e)=>{const n=X(e);return n.name?(t[n.name]=Y(n.params),t):t},e):e}function K(t){return!0===t?[]:Array.isArray(t)||s(t)?t:[t]}function Y(t){const e=t=>"string"===typeof t&&"@"===t[0]?J(t.slice(1)):t;return Array.isArray(t)?t.map(e):t instanceof RegExp?[t]:Object.keys(t).reduce((n,r)=>(n[r]=e(t[r]),n),{})}const X=t=>{let e=[];const n=t.split(":")[0];return t.includes(":")&&(e=t.split(":").slice(1).join(":").split(",")),{name:n,params:e}};function J(t){const e=e=>{const n=D(e,t)||e[t];return n};return e.__locatorRef=t,e}function Q(t){return Array.isArray(t)?t.filter(y):V(t).filter(e=>y(t[e])).map(e=>t[e])}const Z={generateMessage:({field:t})=>t+" is not valid.",bails:!0,validateOnBlur:!0,validateOnChange:!0,validateOnInput:!1,validateOnModelUpdate:!0};let tt=Object.assign({},Z);const et=()=>tt,nt=t=>{tt=Object.assign(Object.assign({},tt),t)},rt=nt;async function it(t,e,n={}){const r=null===n||void 0===n?void 0:n.bails,i={name:(null===n||void 0===n?void 0:n.name)||"{field}",rules:e,bails:null===r||void 0===r||r,formData:(null===n||void 0===n?void 0:n.values)||{}},o=await ot(i,t),s=o.errors;return{errors:s,valid:!s.length}}async function ot(t,e){if(_(t.rules))return st(e,t.rules,{bails:t.bails});if(i(t.rules)){const n={field:t.name,form:t.formData,value:e},r=await t.rules(e,n),i="string"!==typeof r&&r,o="string"===typeof r?r:ct(n);return{errors:i?[]:[o]}}const n=Object.assign(Object.assign({},t),{rules:G(t.rules)}),r=[],o=Object.keys(n.rules),s=o.length;for(let i=0;i<s;i++){const s=o[i],a=await at(n,e,{name:s,params:n.rules[s]});if(a.error&&(r.push(a.error),t.bails))return{errors:r}}return{errors:r}}async function st(t,e,n){var r;const i=await e.validate(t,{abortEarly:null===(r=n.bails)||void 0===r||r}).then(()=>[]).catch(t=>{if("ValidationError"===t.name)return t.errors;throw t});return{errors:i}}async function at(t,e,n){const r=h(n.name);if(!r)throw new Error(`No such validator '${n.name}' exists.`);const i=ut(n.params,t.formData),o={field:t.name,value:e,form:t.formData,rule:Object.assign(Object.assign({},n),{params:i})},s=await r(e,i,o);return"string"===typeof s?{error:s}:{error:s?void 0:ct(o)}}function ct(t){const e=et().generateMessage;return e?e(t):"Field is invalid"}function ut(t,e){const n=t=>y(t)?t(e):t;return Array.isArray(t)?t.map(n):Object.keys(t).reduce((e,r)=>(e[r]=n(t[r]),e),{})}async function lt(t,e){const n=await t.validate(e,{abortEarly:!1}).then(()=>[]).catch(t=>{if("ValidationError"!==t.name)throw t;return t.inner||[]}),r={},i={};for(const o of n){const t=o.errors;r[o.path]={valid:!t.length,errors:t},t.length&&(i[o.path]=t[0])}return{valid:!n.length,results:r,errors:i}}async function ht(t,e,n){const r=V(t),i=r.map(async r=>{var i,o,s;const a=await it(D(e,r),t[r],{name:(null===(i=null===n||void 0===n?void 0:n.names)||void 0===i?void 0:i[r])||r,values:e,bails:null===(s=null===(o=null===n||void 0===n?void 0:n.bailsMap)||void 0===o?void 0:o[r])||void 0===s||s});return Object.assign(Object.assign({},a),{path:r})});let o=!0;const s=await Promise.all(i),a={},c={};for(const u of s)a[u.path]={valid:u.valid,errors:u.errors},u.valid||(o=!1,c[u.path]=u.errors[0]);return{valid:o,results:a,errors:c}}function ft(t){if("object"!==typeof t)return t;var e,n,r=Object.prototype.toString.call(t);if("[object Object]"===r){if(t.constructor!==Object&&"function"===typeof t.constructor)for(e in n=new t.constructor,t)n.hasOwnProperty(e)&&n[e]!==t[e]&&(n[e]=ft(t[e]));else for(e in n={},t)"__proto__"===e?Object.defineProperty(n,e,{value:ft(t[e]),configurable:!0,enumerable:!0,writable:!0}):n[e]=ft(t[e]);return n}if("[object Array]"===r){for(e=t.length,n=Array(e);e--;)n[e]=ft(t[e]);return n}return"[object Date]"===r?new Date(+t):"[object RegExp]"===r?(n=new RegExp(t.source,t.flags),n.lastIndex=t.lastIndex,n):t}var dt=function t(e,n){if(e===n)return!0;if(e&&n&&"object"==typeof e&&"object"==typeof n){if(e.constructor!==n.constructor)return!1;var r,i,o;if(Array.isArray(e)){if(r=e.length,r!=n.length)return!1;for(i=r;0!==i--;)if(!t(e[i],n[i]))return!1;return!0}if(e instanceof Map&&n instanceof Map){if(e.size!==n.size)return!1;for(i of e.entries())if(!n.has(i[0]))return!1;for(i of e.entries())if(!t(i[1],n.get(i[0])))return!1;return!0}if(e instanceof Set&&n instanceof Set){if(e.size!==n.size)return!1;for(i of e.entries())if(!n.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(e)&&ArrayBuffer.isView(n)){if(r=e.length,r!=n.length)return!1;for(i=r;0!==i--;)if(e[i]!==n[i])return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if(o=Object.keys(e),r=o.length,r!==Object.keys(n).length)return!1;for(i=r;0!==i--;)if(!Object.prototype.hasOwnProperty.call(n,o[i]))return!1;for(i=r;0!==i--;){var s=o[i];if(!t(e[s],n[s]))return!1}return!0}return e!==e&&n!==n};let pt=0;function gt(t,e,n){const o=pt>=Number.MAX_SAFE_INTEGER?0:++pt,{initialValue:s,validateOnMount:a,bails:c,type:u,checkedValue:l,label:h,validateOnValueUpdate:f,uncheckedValue:p,standalone:g}=mt(Object(r["N"])(t),n),v=g?void 0:U(d),{meta:y,errors:b,errorMessage:w,handleBlur:O,handleInput:E,resetValidationState:T,setValidationState:S,setErrors:I,value:A,checked:k}=vt({name:t,initValue:s,form:v,type:u,checkedValue:l,standalone:g}),C=Object(r["d"])(()=>{let n=Object(r["N"])(e);const o=Object(r["N"])(null===v||void 0===v?void 0:v.schema);return o&&!_(o)&&(n=bt(o,Object(r["N"])(t))||n),_(n)||i(n)?n:G(n)});async function x(e){var n,i;return(null===v||void 0===v?void 0:v.validateSchema)?null!==(n=(await v.validateSchema(e)).results[Object(r["N"])(t)])&&void 0!==n?n:{valid:!0,errors:[]}:it(A.value,C.value,{name:Object(r["N"])(h)||Object(r["N"])(t),values:null!==(i=null===v||void 0===v?void 0:v.values)&&void 0!==i?i:{},bails:c})}async function j(){y.pending=!0,y.validated=!0;const t=await x("validated-only");return y.pending=!1,S(t)}async function N(){const t=await x("silent");y.valid=t.valid}const R=(t,e=!0)=>{var n,i;if(k&&k.value===(null===(i=null===(n=t)||void 0===n?void 0:n.target)||void 0===i?void 0:i.checked))return;let o=W(t);return k&&"checkbox"===u&&!v&&(o=$(A.value,Object(r["N"])(l),Object(r["N"])(p))),A.value=o,!f&&e?j():void 0};function M(t){y.touched=t}let P;function L(){P=Object(r["R"])(A,f?j:N,{deep:!0})}function V(t){null===P||void 0===P||P(),T(t),N(),Object(r["r"])(()=>{L()})}Object(r["v"])(()=>{if(a)return j();v&&v.validateSchema||N()}),L();const F={idx:-1,fid:o,name:t,label:h,value:A,meta:y,errors:b,errorMessage:w,type:u,checkedValue:l,uncheckedValue:p,checked:k,bails:c,resetField:V,handleReset:()=>V(),validate:j,handleChange:R,handleBlur:O,handleInput:E,setValidationState:S,setTouched:M,setErrors:I};if(Object(r["z"])(m,F),Object(r["p"])(e)&&"function"!==typeof Object(r["N"])(e)&&Object(r["R"])(e,(t,e)=>{dt(t,e)||(y.validated?j():N())},{deep:!0}),!v)return F;v.register(F),Object(r["t"])(()=>{v.unregister(F)});const B=Object(r["d"])(()=>{const t=C.value;return!t||i(t)||_(t)?{}:Object.keys(t).reduce((e,n)=>{const r=Q(t[n]).map(t=>t.__locatorRef).reduce((t,e)=>{const n=D(v.values,e)||v.values[e];return void 0!==n&&(t[e]=n),t},{});return Object.assign(e,r),e},{})});return Object(r["R"])(B,(t,e)=>{if(!Object.keys(t).length)return;const n=!dt(t,e);n&&(y.validated?j():N())}),F}function mt(t,e){const n=()=>({initialValue:void 0,validateOnMount:!1,bails:!0,rules:"",label:t,validateOnValueUpdate:!0,standalone:!1});if(!e)return n();const r="valueProp"in e?e.valueProp:e.checkedValue;return Object.assign(Object.assign(Object.assign({},n()),e||{}),{checkedValue:r})}function vt({name:t,initValue:e,form:n,type:i,checkedValue:o,standalone:s}){const{errors:a,errorMessage:c,setErrors:u}=_t(t,n),l=s?void 0:U(g,void 0),h=Object(r["C"])(Object(r["N"])(e)),f=Object(r["d"])(()=>D(Object(r["N"])(l),Object(r["N"])(t),Object(r["N"])(h))),d=wt(f,t,n),p=yt(f,d,a),m=O(i)?Object(r["d"])(()=>Array.isArray(d.value)?d.value.includes(Object(r["N"])(o)):Object(r["N"])(o)===d.value):void 0,v=()=>{p.touched=!0},y=t=>{O(i)||(d.value=W(t))};function b(t){return u(t.errors),t}function w(i){var o;const s=Object(r["N"])(t),a=i&&"value"in i?i.value:D(Object(r["N"])(l),s,Object(r["N"])(e));n?(n.setFieldValue(s,a,{force:!0}),n.setFieldInitialValue(s,a)):(d.value=ft(a),h.value=ft(a)),u((null===i||void 0===i?void 0:i.errors)||[]),p.touched=null!==(o=null===i||void 0===i?void 0:i.touched)&&void 0!==o&&o,p.pending=!1,p.validated=!1}return{meta:p,errors:a,errorMessage:c,setErrors:u,setValidationState:b,resetValidationState:w,handleBlur:v,handleInput:y,value:d,checked:m}}function yt(t,e,n){const i=Object(r["B"])({touched:!1,pending:!1,valid:!0,validated:!!Object(r["N"])(n).length,initialValue:Object(r["d"])(()=>Object(r["N"])(t)),dirty:Object(r["d"])(()=>!dt(Object(r["N"])(e),Object(r["N"])(t)))});return Object(r["R"])(n,t=>{i.valid=!t.length},{immediate:!0,flush:"sync"}),i}function bt(t,e){if(t)return t[e]}function wt(t,e,n){if(!n)return Object(r["C"])(Object(r["N"])(t));const i=D(n.values,Object(r["N"])(e),Object(r["N"])(t));n.stageInitialValue(Object(r["N"])(e),void 0===i?Object(r["N"])(t):i);const o=Object(r["d"])({get(){return D(n.values,Object(r["N"])(e))},set(t){n.setFieldValue(Object(r["N"])(e),t)}});return o}function _t(t,e){if(!e){const t=Object(r["C"])([]);return{errors:Object(r["d"])(()=>t.value),errorMessage:Object(r["d"])(()=>t.value[0]),setErrors:e=>{t.value=Array.isArray(e)?e:[e]}}}const n=Object(r["d"])(()=>e.errorBag.value[Object(r["N"])(t)]||[]);return{errors:n,errorMessage:Object(r["d"])(()=>n.value[0]),setErrors:n=>{e.setFieldErrorBag(Object(r["N"])(t),n)}}}const Ot=Object(r["l"])({name:"Field",inheritAttrs:!1,props:{as:{type:[String,Object],default:void 0},name:{type:String,required:!0},rules:{type:[Object,String,Function],default:void 0},validateOnMount:{type:Boolean,default:!1},validateOnBlur:{type:Boolean,default:void 0},validateOnChange:{type:Boolean,default:void 0},validateOnInput:{type:Boolean,default:void 0},validateOnModelUpdate:{type:Boolean,default:void 0},bails:{type:Boolean,default:()=>et().bails},label:{type:String,default:void 0},uncheckedValue:{type:null,default:void 0},modelValue:{type:null,default:v},modelModifiers:{type:null,default:()=>({})},"onUpdate:modelValue":{type:null,default:void 0},standalone:{type:Boolean,default:!1}},setup(t,e){const n=Object(r["M"])(t,"rules"),i=Object(r["M"])(t,"name"),o=Object(r["M"])(t,"label"),s=Object(r["M"])(t,"uncheckedValue"),a=N(t,"onUpdate:modelValue"),{errors:c,value:u,errorMessage:l,validate:h,handleChange:f,handleBlur:d,handleInput:p,setTouched:g,resetField:m,handleReset:y,meta:b,checked:w,setErrors:_}=gt(i,n,{validateOnMount:t.validateOnMount,bails:t.bails,standalone:t.standalone,type:e.attrs.type,initialValue:It(t,e),checkedValue:e.attrs.value,uncheckedValue:s,label:o,validateOnValueUpdate:!1}),E=a?function(t,n=!0){f(t,n),e.emit("update:modelValue",u.value)}:f,T=a?function(t){p(t),e.emit("update:modelValue",u.value)}:p,S=Object(r["d"])(()=>{const{validateOnInput:n,validateOnChange:r,validateOnBlur:i,validateOnModelUpdate:o}=Tt(t),s=[d,e.attrs.onBlur,i?h:void 0].filter(Boolean),a=[t=>E(t,n),e.attrs.onInput].filter(Boolean),c=[t=>E(t,r),e.attrs.onChange].filter(Boolean),l={name:t.name,onBlur:s,onInput:a,onChange:c};o&&(l["onUpdate:modelValue"]=[E]),O(e.attrs.type)&&w?l.checked=w.value:l.value=u.value;const f=Et(t,e);return C(f,e.attrs)&&delete l.value,l}),I=Object(r["M"])(t,"modelValue");function A(){return{field:S.value,value:u.value,meta:b,errors:c.value,errorMessage:l.value,validate:h,resetField:m,handleChange:E,handleInput:T,handleReset:y,handleBlur:d,setTouched:g,setErrors:_}}return Object(r["R"])(I,e=>{e===v&&void 0===u.value||e!==St(u.value,t.modelModifiers)&&(u.value=e===v?void 0:e,h())}),()=>{const n=Object(r["H"])(Et(t,e)),i=q(n,e,A);return n?Object(r["n"])(n,Object.assign(Object.assign({},e.attrs),S.value),i):i}}});function Et(t,e){let n=t.as||"";return t.as||e.slots.default||(n="input"),n}function Tt(t){var e,n,r,i;const{validateOnInput:o,validateOnChange:s,validateOnBlur:a,validateOnModelUpdate:c}=et();return{validateOnInput:null!==(e=t.validateOnInput)&&void 0!==e?e:o,validateOnChange:null!==(n=t.validateOnChange)&&void 0!==n?n:s,validateOnBlur:null!==(r=t.validateOnBlur)&&void 0!==r?r:a,validateOnModelUpdate:null!==(i=t.validateOnModelUpdate)&&void 0!==i?i:c}}function St(t,e){return e.number?c(t):t}function It(t,e){return O(e.attrs.type)?N(t,"modelValue")?t.modelValue:void 0:N(t,"modelValue")?t.modelValue:e.attrs.value}function At(t){const e=Object(r["C"])([]),n=Object(r["C"])(!1),i=Object(r["d"])(()=>e.value.reduce((t,e)=>{const n=Object(r["N"])(e.name);if(!t[n])return t[n]=e,e.idx=-1,t;const i=t[n];Array.isArray(i)||(i.idx=0,t[n]=[i]);const o=t[n];return e.idx=o.length,o.push(e),t},{})),o=Object(r["C"])(0),s=Object(r["B"])(ft(Object(r["N"])(null===t||void 0===t?void 0:t.initialValues)||{})),a={},{errorBag:c,setErrorBag:u,setFieldErrorBag:l}=xt(null===t||void 0===t?void 0:t.initialErrors),h=Object(r["d"])(()=>V(c.value).reduce((t,e)=>{const n=c.value[e];return n&&n.length&&(t[e]=n[0]),t},{})),f=Object(r["d"])(()=>V(i.value).reduce((t,e)=>{const n=F(i.value[e]);return n&&(t[e]=Object(r["N"])(n.label||n.name)||""),t},{})),g=Object(r["d"])(()=>V(i.value).reduce((t,e)=>{var n;const r=F(i.value[e]);return r&&(t[e]=null===(n=r.bails)||void 0===n||n),t},{})),m=Object.assign({},(null===t||void 0===t?void 0:t.initialErrors)||{}),{readonlyInitialValues:v,initialValues:y,setInitialValues:b}=Ct(i,s,null===t||void 0===t?void 0:t.initialValues),w=kt(e,s,v,h),O=null===t||void 0===t?void 0:t.validationSchema,E={fieldsById:i,values:s,errorBag:c,schema:O,submitCount:o,meta:w,isSubmitting:n,validateSchema:Object(r["N"])(O)?W:void 0,validate:P,register:N,unregister:R,setFieldErrorBag:l,validateField:U,setFieldValue:I,setValues:A,setErrors:S,setFieldError:T,setFieldTouched:k,setTouched:C,resetForm:j,handleSubmit:q,stageInitialValue:z,setFieldInitialValue:H};function T(t,e){l(t,e)}function S(t){u(t)}function I(t,e,{force:n}={force:!1}){var o;const c=i.value[t],u=ft(e);if(!c)return void M(s,t,u);if(Array.isArray(c)&&"checkbox"===(null===(o=c[0])||void 0===o?void 0:o.type)&&!Array.isArray(e)){const n=ft($(D(s,t)||[],e,void 0));return M(s,t,n),void c.forEach(t=>{a[t.fid]=n})}let l=e;Array.isArray(c)||"checkbox"!==(null===c||void 0===c?void 0:c.type)||n||(l=ft($(D(s,t),e,Object(r["N"])(c.uncheckedValue)))),M(s,t,l),c&&Array.isArray(c)?c.forEach(t=>{a[t.fid]=l}):a[c.fid]=l}function A(t){V(s).forEach(t=>{delete s[t]}),V(t).forEach(e=>{I(e,t[e])})}function k(t,e){const n=i.value[t];n&&B(n,t=>t.setTouched(e))}function C(t){V(t).forEach(e=>{k(e,!!t[e])})}function j(t){(null===t||void 0===t?void 0:t.values)?(b(t.values),A(null===t||void 0===t?void 0:t.values)):A(y.value),e.value.forEach(t=>t.resetField()),(null===t||void 0===t?void 0:t.touched)&&C(t.touched),S((null===t||void 0===t?void 0:t.errors)||{}),o.value=(null===t||void 0===t?void 0:t.submitCount)||0}function N(t){e.value.push(t),i.value,Object(r["p"])(t.name)&&(a[t.fid]=t.value.value,Object(r["R"])(t.name,(n,i)=>{I(n,a[t.fid]);const o=e.value.find(t=>Object(r["N"])(t.name)===i);o||(L(s,i),L(y.value,i))},{flush:"post"}));const n=Object(r["N"])(t.name),o=Object(r["N"])(t.errorMessage);o&&(null===m||void 0===m?void 0:m[n])!==o&&U(n),delete m[n]}function R(t){var n,o;const c=e.value.indexOf(t);if(-1===c)return;e.value.splice(c,1);const u=t.fid;Object(r["r"])(()=>{delete a[u],i.value[l]||T(l,void 0)});const l=Object(r["N"])(t.name);if(-1===t.idx){const t=e.value.find(t=>Object(r["N"])(t.name)===l);if(t)return;return L(s,l),void L(y.value,l)}const h=null===(o=null===(n=D(s,l))||void 0===n?void 0:n.indexOf)||void 0===o?void 0:o.call(n,Object(r["N"])(t.checkedValue));void 0!==h?-1!==h&&(Array.isArray(s[l])?L(s,`${l}.${h}`):(L(s,l),L(y.value,l))):L(s,l)}async function P(){if(E.validateSchema)return E.validateSchema("force");const t=await Promise.all(e.value.map(t=>t.validate().then(e=>({key:Object(r["N"])(t.name),valid:e.valid,errors:e.errors})))),n={},i={};for(const e of t)n[e.key]={valid:e.valid,errors:e.errors},e.errors.length&&(i[e.key]=e.errors[0]);return{valid:t.every(t=>t.valid),results:n,errors:i}}function U(t){const e=i.value[t];return e?Array.isArray(e)?e.map(t=>t.validate())[0]:e.validate():(Object(r["Q"])(`field with name ${t} was not found`),Promise.resolve({errors:[],valid:!0}))}function q(t){return function(e){return e instanceof Event&&(e.preventDefault(),e.stopPropagation()),C(V(i.value).reduce((t,e)=>(t[e]=!0,t),{})),n.value=!0,o.value++,P().then(n=>{if(n.valid&&"function"===typeof t)return t(ft(s),{evt:e,setErrors:S,setFieldError:T,setTouched:C,setFieldTouched:k,setValues:A,setFieldValue:I,resetForm:j})}).then(()=>{n.value=!1},t=>{throw n.value=!1,t})}}function H(t,e){M(y.value,t,ft(e))}function z(t,e){M(s,t,e),H(t,e)}async function W(t){const e=Object(r["N"])(O);if(!e)return{valid:!0,results:{},errors:{}};const n=_(e)?await lt(e,s):await ht(e,s,{names:f.value,bailsMap:g.value}),i=E.fieldsById.value||{},o=V(E.errorBag.value),a=[...new Set([...V(n.results),...V(i),...o])];return a.reduce((e,r)=>{const o=i[r],s=(n.results[r]||{errors:[]}).errors,a={errors:s,valid:!s.length};if(e.results[r]=a,a.valid||(e.errors[r]=a.errors[0]),!o)return T(r,s),e;if(B(o,t=>t.meta.valid=a.valid),"silent"===t)return e;const c=Array.isArray(o)?o.some(t=>t.meta.validated):o.meta.validated;return"validated-only"!==t||c?(B(o,t=>t.setValidationState(a),!0),e):e},{valid:n.valid,results:{},errors:{}})}const G=q((t,{evt:e})=>{x(e)&&e.target.submit()});return Object(r["v"])(()=>{(null===t||void 0===t?void 0:t.initialErrors)&&S(t.initialErrors),(null===t||void 0===t?void 0:t.initialTouched)&&C(t.initialTouched),(null===t||void 0===t?void 0:t.validateOnMount)?P():E.validateSchema&&E.validateSchema("silent")}),Object(r["p"])(O)&&Object(r["R"])(O,()=>{var t;null===(t=E.validateSchema)||void 0===t||t.call(E,"validated-only")}),Object(r["z"])(d,E),Object(r["z"])(p,h),{errors:h,meta:w,values:s,isSubmitting:n,submitCount:o,validate:P,validateField:U,handleReset:()=>j(),resetForm:j,handleSubmit:q,submitForm:G,setFieldError:T,setErrors:S,setFieldValue:I,setValues:A,setFieldTouched:k,setTouched:C}}function kt(t,e,n,i){const o={touched:"some",pending:"some",valid:"every"},s=Object(r["d"])(()=>!dt(e,Object(r["N"])(n))),a=Object(r["d"])(()=>V(o).reduce((e,n)=>{const r=o[n];return e[n]=t.value[r](t=>t.meta[n]),e},{}));return Object(r["d"])(()=>Object.assign(Object.assign({initialValues:Object(r["N"])(n)},a.value),{valid:a.value.valid&&!V(i.value).length,dirty:s.value}))}function Ct(t,e,n){const i=Object(r["C"])(Object(r["N"])(n)||{}),o=Object(r["d"])(()=>i.value);function s(n,r=!1){if(i.value=ft(n),!r)return;const o=t=>t.meta.touched;V(t.value).forEach(n=>{const r=t.value[n],s=Array.isArray(r)?r.some(o):o(r);if(s)return;const a=D(i.value,n);M(e,n,a)})}return Object(r["p"])(n)&&Object(r["R"])(n,t=>{s(t,!0)},{deep:!0}),Object(r["z"])(g,o),{readonlyInitialValues:o,initialValues:i,setInitialValues:s}}function xt(t){const e=Object(r["C"])({});function n(t){return Array.isArray(t)?t:t?[t]:[]}function i(t,r){r?e.value[t]=n(r):delete e.value[t]}function o(t){e.value=V(t).reduce((e,r)=>{const i=t[r];return i&&(e[r]=n(i)),e},{})}return t&&o(t),{errorBag:e,setErrorBag:o,setFieldErrorBag:i}}const jt=Object(r["l"])({name:"Form",inheritAttrs:!1,props:{as:{type:String,default:"form"},validationSchema:{type:Object,default:void 0},initialValues:{type:Object,default:void 0},initialErrors:{type:Object,default:void 0},initialTouched:{type:Object,default:void 0},validateOnMount:{type:Boolean,default:!1},onSubmit:{type:Function,default:void 0}},setup(t,e){const n=Object(r["M"])(t,"initialValues"),i=Object(r["M"])(t,"validationSchema"),{errors:o,values:s,meta:a,isSubmitting:c,submitCount:u,validate:l,validateField:h,handleReset:f,resetForm:d,handleSubmit:p,submitForm:g,setErrors:m,setFieldError:v,setFieldValue:y,setValues:b,setFieldTouched:w,setTouched:_}=At({validationSchema:i.value?i:void 0,initialValues:n,initialErrors:t.initialErrors,initialTouched:t.initialTouched,validateOnMount:t.validateOnMount}),O=t.onSubmit?p(t.onSubmit):g;function E(t){j(t)&&t.preventDefault(),f(),"function"===typeof e.attrs.onReset&&e.attrs.onReset()}function T(t,e){const n="function"!==typeof t||e?e:t;return p(n)(t)}function S(){return{meta:a.value,errors:o.value,values:s,isSubmitting:c.value,submitCount:u.value,validate:l,validateField:h,handleSubmit:T,handleReset:f,submitForm:g,setErrors:m,setFieldError:v,setFieldValue:y,setValues:b,setFieldTouched:w,setTouched:_,resetForm:d}}return e.expose({setFieldError:v,setErrors:m,setFieldValue:y,setValues:b,setFieldTouched:w,setTouched:_,resetForm:d,validate:l,validateField:h}),function(){const n="form"===t.as?t.as:Object(r["H"])(t.as),i=q(n,e,S);if(!t.as)return i;const o="form"===t.as?{novalidate:!0}:{};return Object(r["n"])(n,Object.assign(Object.assign(Object.assign({},o),e.attrs),{onSubmit:O,onReset:E}),i)}}}),Nt=Object(r["l"])({name:"ErrorMessage",props:{as:{type:String,default:void 0},name:{type:String,required:!0}},setup(t,e){const n=Object(r["o"])(p,void 0),i=Object(r["d"])(()=>null===n||void 0===n?void 0:n.value[t.name]);function o(){return{message:i.value}}return()=>{if(!i.value)return;const n=t.as?Object(r["H"])(t.as):t.as,s=q(n,e,o),a=Object.assign({role:"alert"},e.attrs);return n||!Array.isArray(s)&&s||!(null===s||void 0===s?void 0:s.length)?!Array.isArray(s)&&s||(null===s||void 0===s?void 0:s.length)?Object(r["n"])(n,a,s):Object(r["n"])(n||"span",a,i.value):s}}})},"7c73":function(t,e,n){var r,i=n("825a"),o=n("37e8"),s=n("7839"),a=n("d012"),c=n("1be4"),u=n("cc12"),l=n("f772"),h=">",f="<",d="prototype",p="script",g=l("IE_PROTO"),m=function(){},v=function(t){return f+p+h+t+f+"/"+p+h},y=function(t){t.write(v("")),t.close();var e=t.parentWindow.Object;return t=null,e},b=function(){var t,e=u("iframe"),n="java"+p+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(v("document.F=Object")),t.close(),t.F},w=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(e){}w=r?y(r):b();var t=s.length;while(t--)delete w[d][s[t]];return w()};a[g]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(m[d]=i(t),n=new m,m[d]=null,n[g]=t):n=w(),void 0===e?n:o(n,e)}},"7db0":function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").find,o=n("44d2"),s=n("ae40"),a="find",c=!0,u=s(a);a in[]&&Array(1)[a]((function(){c=!1})),r({target:"Array",proto:!0,forced:c||!u},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o(a)},"7dd0":function(t,e,n){"use strict";var r=n("23e7"),i=n("9ed3"),o=n("e163"),s=n("d2bb"),a=n("d44e"),c=n("9112"),u=n("6eeb"),l=n("b622"),h=n("c430"),f=n("3f8c"),d=n("ae93"),p=d.IteratorPrototype,g=d.BUGGY_SAFARI_ITERATORS,m=l("iterator"),v="keys",y="values",b="entries",w=function(){return this};t.exports=function(t,e,n,l,d,_,O){i(n,e,l);var E,T,S,I=function(t){if(t===d&&j)return j;if(!g&&t in C)return C[t];switch(t){case v:return function(){return new n(this,t)};case y:return function(){return new n(this,t)};case b:return function(){return new n(this,t)}}return function(){return new n(this)}},A=e+" Iterator",k=!1,C=t.prototype,x=C[m]||C["@@iterator"]||d&&C[d],j=!g&&x||I(d),N="Array"==e&&C.entries||x;if(N&&(E=o(N.call(new t)),p!==Object.prototype&&E.next&&(h||o(E)===p||(s?s(E,p):"function"!=typeof E[m]&&c(E,m,w)),a(E,A,!0,!0),h&&(f[A]=w))),d==y&&x&&x.name!==y&&(k=!0,j=function(){return x.call(this)}),h&&!O||C[m]===j||c(C,m,j),f[e]=j,d)if(T={values:I(y),keys:_?j:I(v),entries:I(b)},O)for(S in T)(g||k||!(S in C))&&u(C,S,T[S]);else r({target:e,proto:!0,forced:g||k},T);return T}},"7f9a":function(t,e,n){var r=n("da84"),i=n("8925"),o=r.WeakMap;t.exports="function"===typeof o&&/native code/.test(i(o))},"825a":function(t,e,n){var r=n("861d");t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},"83ab":function(t,e,n){var r=n("d039");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},8418:function(t,e,n){"use strict";var r=n("c04e"),i=n("9bf2"),o=n("5c6c");t.exports=function(t,e,n){var s=r(e);s in t?i.f(t,s,o(0,n)):t[s]=n}},"861d":function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},8925:function(t,e,n){var r=n("c6cd"),i=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return i.call(t)}),t.exports=r.inspectSource},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"8d74":function(t,e,n){var r=n("4cef"),i=/^\s+/;function o(t){return t?t.slice(0,r(t)+1).replace(i,""):t}t.exports=o},"8f6b":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return kr})),n.d(e,"b",(function(){return xr})),n.d(e,"c",(function(){return Cr})),n.d(e,"d",(function(){return Nr})),n.d(e,"e",(function(){return jr})),n.d(e,"f",(function(){return Rr})),n.d(e,"g",(function(){return Dr})),n.d(e,"h",(function(){return Ir})),n.d(e,"i",(function(){return Ar}));var r,i="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t?t:"undefined"!==typeof self?self:{},o={},s=s||{},a=i||self;function c(){}function u(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function l(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function h(t){return Object.prototype.hasOwnProperty.call(t,f)&&t[f]||(t[f]=++d)}var f="closure_uid_"+(1e9*Math.random()>>>0),d=0;function p(t,e,n){return t.call.apply(t.bind,arguments)}function g(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function m(t,e,n){return m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:g,m.apply(null,arguments)}function v(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function y(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o];return e.prototype[n].apply(t,i)}}function b(){this.s=this.s,this.o=this.o}var w=0,_={};b.prototype.s=!1,b.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=w)){var t=h(this);delete _[t]}},b.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const O=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},E=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i="string"===typeof t?t.split(""):t;for(let o=0;o<r;o++)o in i&&e.call(n,i[o],o,t)};function T(t){t:{var e=$n;const n=t.length,r="string"===typeof t?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function S(t){return Array.prototype.concat.apply([],arguments)}function I(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function A(t){return/^[\s\xa0]*$/.test(t)}var k,C=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function x(t,e){return-1!=t.indexOf(e)}function j(t,e){return t<e?-1:t>e?1:0}t:{var N=a.navigator;if(N){var R=N.userAgent;if(R){k=R;break t}}k=""}function D(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function M(t){const e={};for(const n in t)e[n]=t[n];return e}var P="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function L(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<P.length;e++)n=P[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function V(t){return V[" "](t),t}function U(t){var e=Q;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}V[" "]=c;var F,B=x(k,"Opera"),$=x(k,"Trident")||x(k,"MSIE"),q=x(k,"Edge"),H=q||$,z=x(k,"Gecko")&&!(x(k.toLowerCase(),"webkit")&&!x(k,"Edge"))&&!(x(k,"Trident")||x(k,"MSIE"))&&!x(k,"Edge"),W=x(k.toLowerCase(),"webkit")&&!x(k,"Edge");function G(){var t=a.document;return t?t.documentMode:void 0}t:{var K="",Y=function(){var t=k;return z?/rv:([^\);]+)(\)|;)/.exec(t):q?/Edge\/([\d\.]+)/.exec(t):$?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):W?/WebKit\/(\S+)/.exec(t):B?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(Y&&(K=Y?Y[1]:""),$){var X=G();if(null!=X&&X>parseFloat(K)){F=String(X);break t}}F=K}var J,Q={};function Z(){return U((function(){let t=0;const e=C(String(F)).split("."),n=C("9").split("."),r=Math.max(e.length,n.length);for(let s=0;0==t&&s<r;s++){var i=e[s]||"",o=n[s]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==i[0].length&&0==o[0].length)break;t=j(0==i[1].length?0:parseInt(i[1],10),0==o[1].length?0:parseInt(o[1],10))||j(0==i[2].length,0==o[2].length)||j(i[2],o[2]),i=i[3],o=o[3]}while(0==t)}return 0<=t}))}if(a.document&&$){var tt=G();J=tt||(parseInt(F,10)||void 0)}else J=void 0;var et=J,nt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{a.addEventListener("test",c,e),a.removeEventListener("test",c,e)}catch(n){}return t}();function rt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function it(t,e){if(rt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(z){t:{try{V(e.nodeName);var i=!0;break t}catch(o){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:ot[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&it.Z.h.call(this)}}rt.prototype.h=function(){this.defaultPrevented=!0},y(it,rt);var ot={2:"touch",3:"pen",4:"mouse"};it.prototype.h=function(){it.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var st="closure_listenable_"+(1e6*Math.random()|0),at=0;function ct(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++at,this.ca=this.fa=!1}function ut(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function lt(t){this.src=t,this.g={},this.h=0}function ht(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],o=O(i,e);(r=0<=o)&&Array.prototype.splice.call(i,o,1),r&&(ut(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function ft(t,e,n,r){for(var i=0;i<t.length;++i){var o=t[i];if(!o.ca&&o.listener==e&&o.capture==!!n&&o.ia==r)return i}return-1}lt.prototype.add=function(t,e,n,r,i){var o=t.toString();t=this.g[o],t||(t=this.g[o]=[],this.h++);var s=ft(t,e,r,i);return-1<s?(e=t[s],n||(e.fa=!1)):(e=new ct(e,this.src,o,!!r,i),e.fa=n,t.push(e)),e};var dt="closure_lm_"+(1e6*Math.random()|0),pt={};function gt(t,e,n,r,i){if(r&&r.once)return yt(t,e,n,r,i);if(Array.isArray(e)){for(var o=0;o<e.length;o++)gt(t,e[o],n,r,i);return null}return n=St(n),t&&t[st]?t.N(e,n,l(r)?!!r.capture:!!r,i):mt(t,e,n,!1,r,i)}function mt(t,e,n,r,i,o){if(!e)throw Error("Invalid event type");var s=l(i)?!!i.capture:!!i,a=Et(t);if(a||(t[dt]=a=new lt(t)),n=a.add(e,n,r,s,o),n.proxy)return n;if(r=vt(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)nt||(i=s),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(_t(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function vt(){function t(n){return e.call(t.src,t.listener,n)}var e=Ot;return t}function yt(t,e,n,r,i){if(Array.isArray(e)){for(var o=0;o<e.length;o++)yt(t,e[o],n,r,i);return null}return n=St(n),t&&t[st]?t.O(e,n,l(r)?!!r.capture:!!r,i):mt(t,e,n,!0,r,i)}function bt(t,e,n,r,i){if(Array.isArray(e))for(var o=0;o<e.length;o++)bt(t,e[o],n,r,i);else r=l(r)?!!r.capture:!!r,n=St(n),t&&t[st]?(t=t.i,e=String(e).toString(),e in t.g&&(o=t.g[e],n=ft(o,n,r,i),-1<n&&(ut(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete t.g[e],t.h--)))):t&&(t=Et(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ft(e,n,r,i)),(n=-1<t?e[t]:null)&&wt(n))}function wt(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[st])ht(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(_t(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Et(e))?(ht(n,t),0==n.h&&(n.src=null,e[dt]=null)):ut(t)}}}function _t(t){return t in pt?pt[t]:pt[t]="on"+t}function Ot(t,e){if(t.ca)t=!0;else{e=new it(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&wt(t),t=n.call(r,e)}return t}function Et(t){return t=t[dt],t instanceof lt?t:null}var Tt="__closure_events_fn_"+(1e9*Math.random()>>>0);function St(t){return"function"===typeof t?t:(t[Tt]||(t[Tt]=function(e){return t.handleEvent(e)}),t[Tt])}function It(){b.call(this),this.i=new lt(this),this.P=this,this.I=null}function At(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"===typeof e)e=new rt(e,t);else if(e instanceof rt)e.target=e.target||t;else{var i=e;e=new rt(r,t),L(e,i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=e.g=n[o];i=kt(s,r,!0,e)&&i}if(s=e.g=t,i=kt(s,r,!0,e)&&i,i=kt(s,r,!1,e)&&i,n)for(o=0;o<n.length;o++)s=e.g=n[o],i=kt(s,r,!1,e)&&i}function kt(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,o=0;o<e.length;++o){var s=e[o];if(s&&!s.ca&&s.capture==n){var a=s.listener,c=s.ia||s.src;s.fa&&ht(t.i,s),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}y(It,b),It.prototype[st]=!0,It.prototype.removeEventListener=function(t,e,n,r){bt(this,t,e,n,r)},It.prototype.M=function(){if(It.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)ut(n[r]);delete e.g[t],e.h--}}this.I=null},It.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},It.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var Ct=a.JSON.stringify;function xt(){var t=Ut;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class jt{constructor(){this.h=this.g=null}add(t,e){const n=Rt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Nt,Rt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Dt,t=>t.reset());class Dt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Mt(t){a.setTimeout(()=>{throw t},0)}function Pt(t,e){Nt||Lt(),Vt||(Nt(),Vt=!0),Ut.add(t,e)}function Lt(){var t=a.Promise.resolve(void 0);Nt=function(){t.then(Ft)}}var Vt=!1,Ut=new jt;function Ft(){for(var t;t=xt();){try{t.h.call(t.g)}catch(n){Mt(n)}var e=Rt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Vt=!1}function Bt(t,e){It.call(this),this.h=t||1,this.g=e||a,this.j=m(this.kb,this),this.l=Date.now()}function $t(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function qt(t,e,n){if("function"===typeof t)n&&(t=m(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=m(t.handleEvent,t)}return 2147483647<Number(e)?-1:a.setTimeout(t,e||0)}function Ht(t){t.g=qt(()=>{t.g=null,t.i&&(t.i=!1,Ht(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}y(Bt,It),r=Bt.prototype,r.da=!1,r.S=null,r.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),At(this,"tick"),this.da&&($t(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Bt.Z.M.call(this),$t(this),delete this.g};class zt extends b{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Ht(this)}M(){super.M(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wt(t){b.call(this),this.h=t,this.g={}}y(Wt,b);var Gt=[];function Kt(t,e,n,r){Array.isArray(n)||(n&&(Gt[0]=n.toString()),n=Gt);for(var i=0;i<n.length;i++){var o=gt(e,n[i],r||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}}function Yt(t){D(t.g,(function(t,e){this.g.hasOwnProperty(e)&&wt(t)}),t),t.g={}}function Xt(){this.g=!0}function Jt(t,e,n,r,i,o){t.info((function(){if(t.g)if(o)for(var s="",a=o.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");s=2<=h.length&&"type"==h[1]?s+(l+"=")+u+"&":s+(l+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+s}))}function Qt(t,e,n,r,i,o,s){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+o+" "+s}))}function Zt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+ee(t,n)+(r?" "+r:"")}))}function te(t,e){t.info((function(){return"TIMEOUT: "+e}))}function ee(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(var s=1;s<i.length;s++)i[s]=""}}}return Ct(n)}catch(a){return e}}Wt.prototype.M=function(){Wt.Z.M.call(this),Yt(this)},Wt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Xt.prototype.Aa=function(){this.g=!1},Xt.prototype.info=function(){};var ne={},re=null;function ie(){return re=re||new It}function oe(t){rt.call(this,ne.Ma,t)}function se(t){const e=ie();At(e,new oe(e,t))}function ae(t,e){rt.call(this,ne.STAT_EVENT,t),this.stat=e}function ce(t){const e=ie();At(e,new ae(e,t))}function ue(t,e){rt.call(this,ne.Na,t),this.size=e}function le(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){t()}),e)}ne.Ma="serverreachability",y(oe,rt),ne.STAT_EVENT="statevent",y(ae,rt),ne.Na="timingevent",y(ue,rt);var he={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},fe={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function de(){}function pe(t){return t.h||(t.h=t.i())}function ge(){}de.prototype.h=null;var me,ve={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ye(){rt.call(this,"d")}function be(){rt.call(this,"c")}function we(){}function _e(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Wt(this),this.P=Ee,t=H?125:void 0,this.W=new Bt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Oe}function Oe(){this.i=null,this.g="",this.h=!1}y(ye,rt),y(be,rt),y(we,de),we.prototype.g=function(){return new XMLHttpRequest},we.prototype.i=function(){return{}},me=new we;var Ee=45e3,Te={},Se={};function Ie(t,e,n){t.K=1,t.v=Je(ze(e)),t.s=n,t.U=!0,Ae(t,null)}function Ae(t,e){t.F=Date.now(),je(t),t.A=ze(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),dn(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Oe,t.g=br(t.l,n?e:null,!t.s),0<t.O&&(t.L=new zt(m(t.Ia,t,t.g),t.O)),Kt(t.V,t.g,"readystatechange",t.gb),e=t.H?M(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),se(1),Jt(t.j,t.u,t.A,t.m,t.X,t.s)}function ke(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Ce(t,e,n){let r,i=!0;for(;!t.I&&t.C<n.length;){if(r=xe(t,n),r==Se){4==e&&(t.o=4,ce(14),i=!1),Zt(t.j,t.m,null,"[Incomplete Response]");break}if(r==Te){t.o=4,ce(15),Zt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Zt(t.j,t.m,r,null),Pe(t,r)}ke(t)&&r!=Se&&r!=Te&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ce(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),hr(e),e.L=!0,ce(11))):(Zt(t.j,t.m,n,"[Invalid Chunked Response]"),Me(t),De(t))}function xe(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?Se:(n=Number(e.substring(n,r)),isNaN(n)?Te:(r+=1,r+n>e.length?Se:(e=e.substr(r,n),t.C=r+n,e)))}function je(t){t.Y=Date.now()+t.P,Ne(t,t.P)}function Ne(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=le(m(t.eb,t),e)}function Re(t){t.B&&(a.clearTimeout(t.B),t.B=null)}function De(t){0==t.l.G||t.I||pr(t.l,t)}function Me(t){Re(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,$t(t.W),Yt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Pe(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||_n(n.i,t)))if(n.I=t.N,!t.J&&_n(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;dr(n),er(n)}lr(n),ce(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=le(m(n.ab,n),6e3));if(1>=wn(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else mr(n,11)}else if((t.J||n.g==t)&&dr(n),!A(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const e=u[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const i=u[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var o=r.i;!o.g&&(x(t,"spdy")||x(t,"quic")||x(t,"h2"))&&(o.j=o.l,o.g=new Set,o.h&&(On(o,o.h),o.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.sa=t,Xe(r.F,r.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var s=t;if(r.oa=yr(r,r.H?r.la:null,r.W),s.J){En(r.i,s);var a=s,c=r.K;c&&a.setTimeout(c),a.B&&(Re(a),je(a)),r.g=s}else ur(r);0<n.l.length&&ir(n)}else"stop"!=u[0]&&"close"!=u[0]||mr(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?mr(n,7):tr(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}se(4)}catch(u){}}function Le(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(u(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Ve(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(u(t)||"string"===typeof t)E(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(u(t)||"string"===typeof t){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=Le(t),i=r.length;for(var o=0;o<i;o++)e.call(void 0,r[o],n&&n[o],t)}}function Ue(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Ue)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function Fe(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Be(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],Be(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}function Be(t,e){return Object.prototype.hasOwnProperty.call(t,e)}r=_e.prototype,r.setTimeout=function(t){this.P=t},r.gb=function(t){t=t.target;const e=this.L;e&&3==Kn(t)?e.l():this.Ia(t)},r.Ia=function(t){try{if(t==this.g)t:{const h=Kn(this.g);var e=this.g.Da();const f=this.g.ba();if(!(3>h)&&(3!=h||H||this.g&&(this.h.h||this.g.ga()||Yn(this.g)))){this.I||4!=h||7==e||se(8==e||0>=f?3:2),Re(this);var n=this.g.ba();this.N=n;e:if(ke(this)){var r=Yn(this.g);t="";var i=r.length,o=4==Kn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Me(this),De(this);var s="";break e}this.h.i=new a.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:o&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,s=this.h.g}else s=this.g.ga();if(this.i=200==n,Qt(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){e:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(c)){var l=c;break e}}l=null}if(!(n=l)){this.i=!1,this.o=3,ce(12),Me(this),De(this);break t}Zt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Pe(this,n)}this.U?(Ce(this,h,s),H&&this.i&&3==h&&(Kt(this.V,this.W,"tick",this.fb),this.W.start())):(Zt(this.j,this.m,s,null),Pe(this,s)),4==h&&Me(this),this.i&&!this.I&&(4==h?pr(this.l,this):(this.i=!1,je(this)))}else 400==n&&0<s.indexOf("Unknown SID")?(this.o=3,ce(12)):(this.o=0,ce(13)),Me(this),De(this)}}}catch(h){}},r.fb=function(){if(this.g){var t=Kn(this.g),e=this.g.ga();this.C<e.length&&(Re(this),Ce(this,t,e),this.i&&4!=t&&je(this))}},r.cancel=function(){this.I=!0,Me(this)},r.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(te(this.j,this.A),2!=this.K&&(se(3),ce(17)),Me(this),this.o=2,De(this)):Ne(this,this.Y-t)},r=Ue.prototype,r.R=function(){Fe(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},r.T=function(){return Fe(this),this.g.concat()},r.get=function(t,e){return Be(this.h,t)?this.h[t]:e},r.set=function(t,e){Be(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},r.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],o=this.get(i);t.call(e,o,i,this)}};var $e=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function qe(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var o=t[n].substring(0,r);i=t[n].substring(r+1)}else o=t[n];e(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function He(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof He){this.g=void 0!==e?e:t.g,We(this,t.j),this.s=t.s,Ge(this,t.i),Ke(this,t.m),this.l=t.l,e=t.h;var n=new un;n.i=e.i,e.g&&(n.g=new Ue(e.g),n.h=e.h),Ye(this,n),this.o=t.o}else t&&(n=String(t).match($e))?(this.g=!!e,We(this,n[1]||"",!0),this.s=tn(n[2]||""),Ge(this,n[3]||"",!0),Ke(this,n[4]),this.l=tn(n[5]||"",!0),Ye(this,n[6]||"",!0),this.o=tn(n[7]||"")):(this.g=!!e,this.h=new un(null,this.g))}function ze(t){return new He(t)}function We(t,e,n){t.j=n?tn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ge(t,e,n){t.i=n?tn(e,!0):e}function Ke(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ye(t,e,n){e instanceof un?(t.h=e,gn(t.h,t.g)):(n||(e=en(e,an)),t.h=new un(e,t.g))}function Xe(t,e,n){t.h.set(e,n)}function Je(t){return Xe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Qe(t){return t instanceof He?ze(t):new He(t,void 0)}function Ze(t,e,n,r){var i=new He(null,void 0);return t&&We(i,t),e&&Ge(i,e),n&&Ke(i,n),r&&(i.l=r),i}function tn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function en(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,nn),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function nn(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}He.prototype.toString=function(){var t=[],e=this.j;e&&t.push(en(e,rn,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(en(e,rn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(en(n,"/"==n.charAt(0)?sn:on,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",en(n,cn)),t.join("")};var rn=/[#\/\?@]/g,on=/[#\?:]/g,sn=/[#\?]/g,an=/[#\?@]/g,cn=/#/g;function un(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ln(t){t.g||(t.g=new Ue,t.h=0,t.i&&qe(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function hn(t,e){ln(t),e=pn(t,e),Be(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Be(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Fe(t)))}function fn(t,e){return ln(t),e=pn(t,e),Be(t.g.h,e)}function dn(t,e,n){hn(t,e),0<n.length&&(t.i=null,t.g.set(pn(t,e),I(n)),t.h+=n.length)}function pn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function gn(t,e){e&&!t.j&&(ln(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(hn(this,e),dn(this,n,t))}),t)),t.j=e}r=un.prototype,r.add=function(t,e){ln(this),this.i=null,t=pn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){ln(this),this.g.forEach((function(n,r){E(n,(function(n){t.call(e,n,r,this)}),this)}),this)},r.T=function(){ln(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],o=0;o<i.length;o++)n.push(e[r]);return n},r.R=function(t){ln(this);var e=[];if("string"===typeof t)fn(this,t)&&(e=S(e,this.g.get(pn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=S(e,t[n])}return e},r.set=function(t,e){return ln(this),this.i=null,t=pn(this,t),fn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var o=0;o<r.length;o++){var s=i;""!==r[o]&&(s+="="+encodeURIComponent(String(r[o]))),t.push(s)}}return this.i=t.join("&")};var mn=class{constructor(t,e){this.h=t,this.g=e}};function vn(t){this.l=t||yn,a.PerformanceNavigationTiming?(t=a.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(a.g&&a.g.Ea&&a.g.Ea()&&a.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var yn=10;function bn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function wn(t){return t.h?1:t.g?t.g.size:0}function _n(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function On(t,e){t.g?t.g.add(e):t.h=e}function En(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Tn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return I(t.i)}function Sn(){}function In(){this.g=new Sn}function An(t,e,n){const r=n||"";try{Ve(t,(function(t,n){let i=t;l(t)&&(i=Ct(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function kn(t,e){const n=new Xt;if(a.Image){const r=new Image;r.onload=v(Cn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=v(Cn,n,r,"TestLoadImage: error",!1,e),r.onabort=v(Cn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=v(Cn,n,r,"TestLoadImage: timeout",!1,e),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function Cn(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(o){}}function xn(t){this.l=t.$b||null,this.j=t.ib||!1}function jn(t,e){It.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Nn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}vn.prototype.cancel=function(){if(this.i=Tn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Sn.prototype.stringify=function(t){return a.JSON.stringify(t,void 0)},Sn.prototype.parse=function(t){return a.JSON.parse(t,void 0)},y(xn,de),xn.prototype.g=function(){return new jn(this.l,this.j)},xn.prototype.i=function(t){return function(){return t}}({}),y(jn,It);var Nn=0;function Rn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Dn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Mn(t)}function Mn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=jn.prototype,r.open=function(t,e){if(this.readyState!=Nn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Mn(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||a).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Dn(this)),this.readyState=Nn},r.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Mn(this)),this.g&&(this.readyState=3,Mn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Rn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Dn(this):Mn(this),3==this.readyState&&Rn(this)}},r.Ua=function(t){this.g&&(this.response=this.responseText=t,Dn(this))},r.Ta=function(t){this.g&&(this.response=t,Dn(this))},r.ha=function(){this.g&&Dn(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(jn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Pn=a.JSON.parse;function Ln(t){It.call(this),this.headers=new Ue,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Vn,this.K=this.L=!1}y(Ln,It);var Vn="",Un=/^https?$/i,Fn=["POST","PUT"];function Bn(t){return $&&Z()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function $n(t){return"content-type"==t.toLowerCase()}function qn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Hn(t),Wn(t)}function Hn(t){t.D||(t.D=!0,At(t,"complete"),At(t,"error"))}function zn(t){if(t.h&&"undefined"!=typeof s&&(!t.C[1]||4!=Kn(t)||2!=t.ba()))if(t.v&&4==Kn(t))qt(t.Fa,0,t);else if(At(t,"readystatechange"),4==Kn(t)){t.h=!1;try{const s=t.ba();t:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===s){var i=String(t.H).match($e)[1]||null;if(!i&&a.self&&a.self.location){var o=a.self.location.protocol;i=o.substr(0,o.length-1)}r=!Un.test(i?i.toLowerCase():"")}n=r}if(n)At(t,"complete"),At(t,"success");else{t.m=6;try{var c=2<Kn(t)?t.g.statusText:""}catch(u){c=""}t.j=c+" ["+t.ba()+"]",Hn(t)}}finally{Wn(t)}}}function Wn(t,e){if(t.g){Gn(t);const r=t.g,i=t.C[0]?c:null;t.g=null,t.C=null,e||At(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function Gn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(a.clearTimeout(t.A),t.A=null)}function Kn(t){return t.g?t.g.readyState:0}function Yn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Vn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Xn(t){let e="";return D(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Jn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Xn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Xe(t,e,n))}function Qn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Zn(t){this.za=0,this.l=[],this.h=new Xt,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Qn("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Qn("baseRetryDelayMs",5e3,t),this.$a=Qn("retryDelaySeedMs",1e4,t),this.Ya=Qn("forwardChannelMaxRetries",2,t),this.ra=Qn("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new vn(t&&t.concurrentRequestLimit),this.Ca=new In,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function tr(t){if(nr(t),3==t.G){var e=t.V++,n=ze(t.F);Xe(n,"SID",t.J),Xe(n,"RID",e),Xe(n,"TYPE","terminate"),ar(t,n),e=new _e(t,t.h,e,void 0),e.K=2,e.v=Je(ze(n)),n=!1,a.navigator&&a.navigator.sendBeacon&&(n=a.navigator.sendBeacon(e.v.toString(),"")),!n&&a.Image&&((new Image).src=e.v,n=!0),n||(e.g=br(e.l,null),e.g.ea(e.v)),e.F=Date.now(),je(e)}vr(t)}function er(t){t.g&&(hr(t),t.g.cancel(),t.g=null)}function nr(t){er(t),t.u&&(a.clearTimeout(t.u),t.u=null),dr(t),t.i.cancel(),t.m&&("number"===typeof t.m&&a.clearTimeout(t.m),t.m=null)}function rr(t,e){t.l.push(new mn(t.Za++,e)),3==t.G&&ir(t)}function ir(t){bn(t.i)||t.m||(t.m=!0,Pt(t.Ha,t),t.C=0)}function or(t,e){return!(wn(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=le(m(t.Ha,t,e),gr(t,t.C)),t.C++,!0))}function sr(t,e){var n;n=e?e.m:t.V++;const r=ze(t.F);Xe(r,"SID",t.J),Xe(r,"RID",n),Xe(r,"AID",t.U),ar(t,r),t.o&&t.s&&Jn(r,t.o,t.s),n=new _e(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=cr(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),On(t.i,n),Ie(n,r,e)}function ar(t,e){t.j&&Ve({},(function(t,n){Xe(e,n,t)}))}function cr(t,e,n){n=Math.min(t.l.length,n);var r=t.j?m(t.j.Oa,t.j,t):null;t:{var i=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let a=0;a<n;a++){let n=i[a].h;const c=i[a].g;if(n-=e,0>n)e=Math.max(0,i[a].h-100),s=!1;else try{An(c,t,"req"+n+"_")}catch(o){r&&r(c)}}if(s){r=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,r}function ur(t){t.g||t.u||(t.Y=1,Pt(t.Ga,t),t.A=0)}function lr(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=le(m(t.Ga,t),gr(t,t.A)),t.A++,!0)}function hr(t){null!=t.B&&(a.clearTimeout(t.B),t.B=null)}function fr(t){t.g=new _e(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=ze(t.oa);Xe(e,"RID","rpc"),Xe(e,"SID",t.J),Xe(e,"CI",t.N?"0":"1"),Xe(e,"AID",t.U),ar(t,e),Xe(e,"TYPE","xmlhttp"),t.o&&t.s&&Jn(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Je(ze(e)),n.s=null,n.U=!0,Ae(n,t)}function dr(t){null!=t.v&&(a.clearTimeout(t.v),t.v=null)}function pr(t,e){var n=null;if(t.g==e){dr(t),hr(t),t.g=null;var r=2}else{if(!_n(t.i,e))return;n=e.D,En(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=ie(),At(r,new ue(r,n,e,i)),ir(t)}else ur(t);else if(i=e.o,3==i||0==i&&0<t.I||!(1==r&&or(t,e)||2==r&&lr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:mr(t,5);break;case 4:mr(t,10);break;case 3:mr(t,6);break;default:mr(t,2)}}function gr(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function mr(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=m(t.jb,t);n||(n=new He("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||We(n,"https"),Je(n)),kn(n.toString(),r)}else ce(2);t.G=0,t.j&&t.j.va(e),vr(t),nr(t)}function vr(t){t.G=0,t.I=-1,t.j&&(0==Tn(t.i).length&&0==t.l.length||(t.i.i.length=0,I(t.l),t.l.length=0),t.j.ua())}function yr(t,e,n){let r=Qe(n);if(""!=r.i)e&&Ge(r,e+"."+r.i),Ke(r,r.m);else{const t=a.location;r=Ze(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&D(t.aa,(function(t,e){Xe(r,e,t)})),e=t.D,n=t.sa,e&&n&&Xe(r,e,n),Xe(r,"VER",t.ma),ar(t,r),r}function br(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Ln(new xn({ib:!0})):new Ln(t.qa),e.L=t.H,e}function wr(){}function _r(){if($&&!(10<=Number(et)))throw Error("Environmental error: no available transport.")}function Or(t,e){It.call(this),this.g=new Zn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!A(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!A(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Sr(this)}function Er(t){ye.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Tr(){be.call(this),this.status=1}function Sr(t){this.g=t}r=Ln.prototype,r.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():me.g(),this.C=this.u?pe(this.u):pe(me),this.g.onreadystatechange=m(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(o){return void qn(this,o)}t=n||"";const i=new Ue(this.headers);r&&Ve(r,(function(t,e){i.set(e,t)})),r=T(i.T()),n=a.FormData&&t instanceof a.FormData,!(0<=O(Fn,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Gn(this),0<this.B&&((this.K=Bn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=m(this.pa,this)):this.A=qt(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(o){qn(this,o)}},r.pa=function(){"undefined"!=typeof s&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,At(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,At(this,"complete"),At(this,"abort"),Wn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Wn(this,!0)),Ln.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?zn(this):this.cb())},r.cb=function(){zn(this)},r.ba=function(){try{return 2<Kn(this)?this.g.status:-1}catch(t){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Pn(e)}},r.Da=function(){return this.m},r.La=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Zn.prototype,r.ma=8,r.G=1,r.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},r.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new _e(this,this.h,t,void 0);let o=this.s;if(this.P&&(o?(o=M(o),L(o,this.P)):o=this.P),null===this.o&&(i.H=o),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=cr(this,i,e),n=ze(this.F),Xe(n,"RID",t),Xe(n,"CVER",22),this.D&&Xe(n,"X-HTTP-Session-Id",this.D),ar(this,n),this.o&&o&&Jn(n,this.o,o),On(this.i,i),this.Ra&&Xe(n,"TYPE","init"),this.ja?(Xe(n,"$req",e),Xe(n,"SID","null"),i.$=!0,Ie(i,n,null)):Ie(i,n,e),this.G=2}}else 3==this.G&&(t?sr(this,t):0==this.l.length||bn(this.i)||sr(this))},r.Ga=function(){if(this.u=null,fr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=le(m(this.bb,this),t)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ce(10),er(this),fr(this))},r.ab=function(){null!=this.v&&(this.v=null,er(this),lr(this),ce(19))},r.jb=function(t){t?(this.h.info("Successfully pinged google.com"),ce(2)):(this.h.info("Failed to ping google.com"),ce(1))},r=wr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},_r.prototype.g=function(t,e){return new Or(t,e)},y(Or,It),Or.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Pt(m(t.hb,t,e))),ce(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=yr(t,null,t.W),ir(t)},Or.prototype.close=function(){tr(this.g)},Or.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,rr(this.g,e)}else this.v?(e={},e.__data__=Ct(t),rr(this.g,e)):rr(this.g,t)},Or.prototype.M=function(){this.g.j=null,delete this.j,tr(this.g),delete this.g,Or.Z.M.call(this)},y(Er,ye),y(Tr,be),y(Sr,wr),Sr.prototype.xa=function(){At(this.g,"a")},Sr.prototype.wa=function(t){At(this.g,new Er(t))},Sr.prototype.va=function(t){At(this.g,new Tr(t))},Sr.prototype.ua=function(){At(this.g,"b")},_r.prototype.createWebChannel=_r.prototype.g,Or.prototype.send=Or.prototype.u,Or.prototype.open=Or.prototype.m,Or.prototype.close=Or.prototype.close,he.NO_ERROR=0,he.TIMEOUT=8,he.HTTP_ERROR=6,fe.COMPLETE="complete",ge.EventType=ve,ve.OPEN="a",ve.CLOSE="b",ve.ERROR="c",ve.MESSAGE="d",It.prototype.listen=It.prototype.N,Ln.prototype.listenOnce=Ln.prototype.O,Ln.prototype.getLastError=Ln.prototype.La,Ln.prototype.getLastErrorCode=Ln.prototype.Da,Ln.prototype.getStatus=Ln.prototype.ba,Ln.prototype.getResponseJson=Ln.prototype.Qa,Ln.prototype.getResponseText=Ln.prototype.ga,Ln.prototype.send=Ln.prototype.ea;var Ir=o.createWebChannelTransport=function(){return new _r},Ar=o.getStatEventTarget=function(){return ie()},kr=o.ErrorCode=he,Cr=o.EventType=fe,xr=o.Event=ne,jr=o.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Nr=o.FetchXmlHttpFactory=xn,Rr=o.WebChannel=ge,Dr=o.XhrIo=Ln}).call(this,n("c8ba"))},"90e2":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return w})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return T})),n.d(e,"d",(function(){return I})),n.d(e,"e",(function(){return u})),n.d(e,"f",(function(){return f})),n.d(e,"g",(function(){return p})),n.d(e,"h",(function(){return g})),n.d(e,"i",(function(){return y})),n.d(e,"j",(function(){return l})),n.d(e,"k",(function(){return d})),n.d(e,"l",(function(){return v})),n.d(e,"m",(function(){return m}));
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
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return e.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],o=i+1<t.length,s=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,l=(3&e)<<4|s>>4;let h=(15&s)<<2|c>>6,f=63&c;a||(f=64,o||(h=64)),r.push(n[u],n[l],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],o=i<t.length,s=o?n[t.charAt(i)]:0;++i;const a=i<t.length,c=a?n[t.charAt(i)]:64;++i;const u=i<t.length,l=u?n[t.charAt(i)]:64;if(++i,null==e||null==s||null==c||null==l)throw Error();const h=e<<2|s>>4;if(r.push(h),64!==c){const t=s<<4&240|c>>2;if(r.push(t),64!==l){const t=c<<6&192|l;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},s=function(t){const e=r(t);return o.encodeByteArray(e,!0)},a=function(t){return s(t).replace(/\./g,"")};
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
function c(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:"https://securetoken.google.com/"+r,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t),c="";return[a(JSON.stringify(n)),a(JSON.stringify(s)),c].join(".")}
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
 */function u(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function l(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(u())}function h(){try{return"[object process]"===Object.prototype.toString.call(t.process)}catch(e){return!1}}function f(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function d(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function p(){return u().indexOf("Electron/")>=0}function g(){const t=u();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function m(){return u().indexOf("MSAppHost/")>=0}function v(){return!h()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function y(){return"object"===typeof indexedDB}
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
const b="FirebaseError";class w extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=b,Object.setPrototypeOf(this,w.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_.prototype.create)}}class _{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?O(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new w(r,s,n);return a}}function O(t,e){return t.replace(E,(t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`})}const E=/\{\$([^}]+)}/g;
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
 */function T(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],o=e[i];if(S(n)&&S(o)){if(!T(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function S(t){return null!==t&&"object"===typeof t}
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
function I(t){return t&&t._delegate?t._delegate:t}}).call(this,n("c8ba"))},"90e3":function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},9112:function(t,e,n){var r=n("83ab"),i=n("9bf2"),o=n("5c6c");t.exports=r?function(t,e,n){return i.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},"91c8":function(t,e,n){var r=n("2b10"),i=n("9aff"),o=n("4b17"),s=Math.ceil,a=Math.max;function c(t,e,n){e=(n?i(t,e,n):void 0===e)?1:a(o(e),0);var c=null==t?0:t.length;if(!c||e<1)return[];var u=0,l=0,h=Array(s(c/e));while(u<c)h[l++]=r(t,u,u+=e);return h}t.exports=c},9263:function(t,e,n){"use strict";var r=n("ad6d"),i=n("9f7f"),o=RegExp.prototype.exec,s=String.prototype.replace,a=o,c=function(){var t=/a/,e=/b*/g;return o.call(t,"a"),o.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=i.UNSUPPORTED_Y||i.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],h=c||l||u;h&&(a=function(t){var e,n,i,a,h=this,f=u&&h.sticky,d=r.call(h),p=h.source,g=0,m=t;return f&&(d=d.replace("y",""),-1===d.indexOf("g")&&(d+="g"),m=String(t).slice(h.lastIndex),h.lastIndex>0&&(!h.multiline||h.multiline&&"\n"!==t[h.lastIndex-1])&&(p="(?: "+p+")",m=" "+m,g++),n=new RegExp("^(?:"+p+")",d)),l&&(n=new RegExp("^"+p+"$(?!\\s)",d)),c&&(e=h.lastIndex),i=o.call(f?n:h,m),f?i?(i.input=i.input.slice(g),i[0]=i[0].slice(g),i.index=h.lastIndex,h.lastIndex+=i[0].length):h.lastIndex=0:c&&i&&(h.lastIndex=h.global?i.index+i[0].length:e),l&&i&&i.length>1&&s.call(i[0],n,(function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(i[a]=void 0)})),i}),t.exports=a},"94ca":function(t,e,n){var r=n("d039"),i=/#|\.prototype\./,o=function(t,e){var n=a[s(t)];return n==u||n!=c&&("function"==typeof e?r(e):!!e)},s=o.normalize=function(t){return String(t).replace(i,".").toLowerCase()},a=o.data={},c=o.NATIVE="N",u=o.POLYFILL="P";t.exports=o},9520:function(t,e,n){var r=n("3729"),i=n("1a8c"),o="[object AsyncFunction]",s="[object Function]",a="[object GeneratorFunction]",c="[object Proxy]";function u(t){if(!i(t))return!1;var e=r(t);return e==s||e==a||e==o||e==c}t.exports=u},9638:function(t,e){function n(t,e){return t===e||t!==t&&e!==e}t.exports=n},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(N){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var i=e&&e.prototype instanceof m?e:m,o=Object.create(i.prototype),s=new C(r||[]);return o._invoke=S(t,n,s),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(N){return{type:"throw",arg:N}}}t.wrap=u;var h="suspendedStart",f="suspendedYield",d="executing",p="completed",g={};function m(){}function v(){}function y(){}var b={};b[o]=function(){return this};var w=Object.getPrototypeOf,_=w&&w(w(x([])));_&&_!==n&&r.call(_,o)&&(b=_);var O=y.prototype=m.prototype=Object.create(b);function E(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function T(t,e){function n(i,o,s,a){var c=l(t[i],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"===typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,s,a)}),(function(t){n("throw",t,s,a)})):e.resolve(h).then((function(t){u.value=t,s(u)}),(function(t){return n("throw",t,s,a)}))}a(c.arg)}var i;function o(t,r){function o(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(o,o):o()}this._invoke=o}function S(t,e,n){var r=h;return function(i,o){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return j()}n.method=i,n.arg=o;while(1){var s=n.delegate;if(s){var a=I(s,n);if(a){if(a===g)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var c=l(t,e,n);if("normal"===c.type){if(r=n.done?p:f,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}function I(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,I(t,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=l(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,g):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function x(t){if(t){var n=t[o];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,s=function n(){while(++i<t.length)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return s.next=s}}return{next:j}}function j(){return{value:e,done:!0}}return v.prototype=O.constructor=y,y.constructor=v,v.displayName=c(y,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,a,"GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},E(T.prototype),T.prototype[s]=function(){return this},t.AsyncIterator=T,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var s=new T(u(e,n,r,i),o);return t.isGeneratorFunction(n)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},E(O),c(O,a,"Generator"),O[o]=function(){return this},O.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=x,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return a.type="throw",a.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o],a=s.completion;if("root"===s.tryLoc)return i("end");if(s.tryLoc<=this.prev){var c=r.call(s,"catchLoc"),u=r.call(s,"finallyLoc");if(c&&u){if(this.prev<s.catchLoc)return i(s.catchLoc,!0);if(this.prev<s.finallyLoc)return i(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return i(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return i(s.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=t,s.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;k(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:x(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),g}},t}(t.exports);try{regeneratorRuntime=r}catch(i){Function("r","regeneratorRuntime = r")(r)}},"99af":function(t,e,n){"use strict";var r=n("23e7"),i=n("d039"),o=n("e8b5"),s=n("861d"),a=n("7b0b"),c=n("50c4"),u=n("8418"),l=n("65f0"),h=n("1dde"),f=n("b622"),d=n("2d00"),p=f("isConcatSpreadable"),g=9007199254740991,m="Maximum allowed index exceeded",v=d>=51||!i((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),y=h("concat"),b=function(t){if(!s(t))return!1;var e=t[p];return void 0!==e?!!e:o(t)},w=!v||!y;r({target:"Array",proto:!0,forced:w},{concat:function(t){var e,n,r,i,o,s=a(this),h=l(s,0),f=0;for(e=-1,r=arguments.length;e<r;e++)if(o=-1===e?s:arguments[e],b(o)){if(i=c(o.length),f+i>g)throw TypeError(m);for(n=0;n<i;n++,f++)n in o&&u(h,f,o[n])}else{if(f>=g)throw TypeError(m);u(h,f++,o)}return h.length=f,h}})},"9aff":function(t,e,n){var r=n("9638"),i=n("30c9"),o=n("c098"),s=n("1a8c");function a(t,e,n){if(!s(n))return!1;var a=typeof e;return!!("number"==a?i(n)&&o(e,n.length):"string"==a&&e in n)&&r(n[e],t)}t.exports=a},"9bdd":function(t,e,n){var r=n("825a"),i=n("2a62");t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(s){throw i(t),s}}},"9bf2":function(t,e,n){var r=n("83ab"),i=n("0cfb"),o=n("825a"),s=n("c04e"),a=Object.defineProperty;e.f=r?a:function(t,e,n){if(o(t),e=s(e,!0),o(n),i)try{return a(t,e,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},"9dbb":function(t,e,n){(function(t,n){n(e)})(0,(function(t){"use strict";function e(t){return Array.prototype.slice.call(t)}function n(t){return new Promise((function(e,n){t.onsuccess=function(){e(t.result)},t.onerror=function(){n(t.error)}}))}function r(t,e,r){var i,o=new Promise((function(o,s){i=t[e].apply(t,r),n(i).then(o,s)}));return o.request=i,o}function i(t,e,n){var i=r(t,e,n);return i.then((function(t){if(t)return new l(t,i.request)}))}function o(t,e,n){n.forEach((function(n){Object.defineProperty(t.prototype,n,{get:function(){return this[e][n]},set:function(t){this[e][n]=t}})}))}function s(t,e,n,i){i.forEach((function(i){i in n.prototype&&(t.prototype[i]=function(){return r(this[e],i,arguments)})}))}function a(t,e,n,r){r.forEach((function(r){r in n.prototype&&(t.prototype[r]=function(){return this[e][r].apply(this[e],arguments)})}))}function c(t,e,n,r){r.forEach((function(r){r in n.prototype&&(t.prototype[r]=function(){return i(this[e],r,arguments)})}))}function u(t){this._index=t}function l(t,e){this._cursor=t,this._request=e}function h(t){this._store=t}function f(t){this._tx=t,this.complete=new Promise((function(e,n){t.oncomplete=function(){e()},t.onerror=function(){n(t.error)},t.onabort=function(){n(t.error)}}))}function d(t,e,n){this._db=t,this.oldVersion=e,this.transaction=new f(n)}function p(t){this._db=t}function g(t,e,n){var i=r(indexedDB,"open",[t,e]),o=i.request;return o&&(o.onupgradeneeded=function(t){n&&n(new d(o.result,t.oldVersion,o.transaction))}),i.then((function(t){return new p(t)}))}function m(t){return r(indexedDB,"deleteDatabase",[t])}o(u,"_index",["name","keyPath","multiEntry","unique"]),s(u,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),c(u,"_index",IDBIndex,["openCursor","openKeyCursor"]),o(l,"_cursor",["direction","key","primaryKey","value"]),s(l,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(t){t in IDBCursor.prototype&&(l.prototype[t]=function(){var e=this,r=arguments;return Promise.resolve().then((function(){return e._cursor[t].apply(e._cursor,r),n(e._request).then((function(t){if(t)return new l(t,e._request)}))}))})})),h.prototype.createIndex=function(){return new u(this._store.createIndex.apply(this._store,arguments))},h.prototype.index=function(){return new u(this._store.index.apply(this._store,arguments))},o(h,"_store",["name","keyPath","indexNames","autoIncrement"]),s(h,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),c(h,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),a(h,"_store",IDBObjectStore,["deleteIndex"]),f.prototype.objectStore=function(){return new h(this._tx.objectStore.apply(this._tx,arguments))},o(f,"_tx",["objectStoreNames","mode"]),a(f,"_tx",IDBTransaction,["abort"]),d.prototype.createObjectStore=function(){return new h(this._db.createObjectStore.apply(this._db,arguments))},o(d,"_db",["name","version","objectStoreNames"]),a(d,"_db",IDBDatabase,["deleteObjectStore","close"]),p.prototype.transaction=function(){return new f(this._db.transaction.apply(this._db,arguments))},o(p,"_db",["name","version","objectStoreNames"]),a(p,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(t){[h,u].forEach((function(n){t in n.prototype&&(n.prototype[t.replace("open","iterate")]=function(){var n=e(arguments),r=n[n.length-1],i=this._store||this._index,o=i[t].apply(i,n.slice(0,-1));o.onsuccess=function(){r(o.result)}})}))})),[u,h].forEach((function(t){t.prototype.getAll||(t.prototype.getAll=function(t,e){var n=this,r=[];return new Promise((function(i){n.iterateCursor(t,(function(t){t?(r.push(t.value),void 0===e||r.length!=e?t.continue():i(r)):i(r)}))}))})})),t.openDb=g,t.deleteDb=m,Object.defineProperty(t,"__esModule",{value:!0})}))},"9e69":function(t,e,n){var r=n("2b3e"),i=r.Symbol;t.exports=i},"9ed3":function(t,e,n){"use strict";var r=n("ae93").IteratorPrototype,i=n("7c73"),o=n("5c6c"),s=n("d44e"),a=n("3f8c"),c=function(){return this};t.exports=function(t,e,n){var u=e+" Iterator";return t.prototype=i(r,{next:o(1,n)}),s(t,u,!1,!0),a[u]=c,t}},"9f7f":function(t,e,n){"use strict";var r=n("d039");function i(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a434:function(t,e,n){"use strict";var r=n("23e7"),i=n("23cb"),o=n("a691"),s=n("50c4"),a=n("7b0b"),c=n("65f0"),u=n("8418"),l=n("1dde"),h=n("ae40"),f=l("splice"),d=h("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,g=Math.min,m=9007199254740991,v="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!f||!d},{splice:function(t,e){var n,r,l,h,f,d,y=a(this),b=s(y.length),w=i(t,b),_=arguments.length;if(0===_?n=r=0:1===_?(n=0,r=b-w):(n=_-2,r=g(p(o(e),0),b-w)),b+n-r>m)throw TypeError(v);for(l=c(y,r),h=0;h<r;h++)f=w+h,f in y&&u(l,h,y[f]);if(l.length=r,n<r){for(h=w;h<b-r;h++)f=h+r,d=h+n,f in y?y[d]=y[f]:delete y[d];for(h=b;h>b-r+n;h--)delete y[h-1]}else if(n>r)for(h=b-r;h>w;h--)f=h+r-1,d=h+n-1,f in y?y[d]=y[f]:delete y[d];for(h=0;h<n;h++)y[h+w]=arguments[h+2];return y.length=b-r+n,l}})},a4d3:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("d066"),s=n("c430"),a=n("83ab"),c=n("4930"),u=n("fdbf"),l=n("d039"),h=n("5135"),f=n("e8b5"),d=n("861d"),p=n("825a"),g=n("7b0b"),m=n("fc6a"),v=n("c04e"),y=n("5c6c"),b=n("7c73"),w=n("df75"),_=n("241c"),O=n("057f"),E=n("7418"),T=n("06cf"),S=n("9bf2"),I=n("d1e7"),A=n("9112"),k=n("6eeb"),C=n("5692"),x=n("f772"),j=n("d012"),N=n("90e3"),R=n("b622"),D=n("e538"),M=n("746f"),P=n("d44e"),L=n("69f3"),V=n("b727").forEach,U=x("hidden"),F="Symbol",B="prototype",$=R("toPrimitive"),q=L.set,H=L.getterFor(F),z=Object[B],W=i.Symbol,G=o("JSON","stringify"),K=T.f,Y=S.f,X=O.f,J=I.f,Q=C("symbols"),Z=C("op-symbols"),tt=C("string-to-symbol-registry"),et=C("symbol-to-string-registry"),nt=C("wks"),rt=i.QObject,it=!rt||!rt[B]||!rt[B].findChild,ot=a&&l((function(){return 7!=b(Y({},"a",{get:function(){return Y(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=K(z,e);r&&delete z[e],Y(t,e,n),r&&t!==z&&Y(z,e,r)}:Y,st=function(t,e){var n=Q[t]=b(W[B]);return q(n,{type:F,tag:t,description:e}),a||(n.description=e),n},at=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof W},ct=function(t,e,n){t===z&&ct(Z,e,n),p(t);var r=v(e,!0);return p(n),h(Q,r)?(n.enumerable?(h(t,U)&&t[U][r]&&(t[U][r]=!1),n=b(n,{enumerable:y(0,!1)})):(h(t,U)||Y(t,U,y(1,{})),t[U][r]=!0),ot(t,r,n)):Y(t,r,n)},ut=function(t,e){p(t);var n=m(e),r=w(n).concat(pt(n));return V(r,(function(e){a&&!ht.call(n,e)||ct(t,e,n[e])})),t},lt=function(t,e){return void 0===e?b(t):ut(b(t),e)},ht=function(t){var e=v(t,!0),n=J.call(this,e);return!(this===z&&h(Q,e)&&!h(Z,e))&&(!(n||!h(this,e)||!h(Q,e)||h(this,U)&&this[U][e])||n)},ft=function(t,e){var n=m(t),r=v(e,!0);if(n!==z||!h(Q,r)||h(Z,r)){var i=K(n,r);return!i||!h(Q,r)||h(n,U)&&n[U][r]||(i.enumerable=!0),i}},dt=function(t){var e=X(m(t)),n=[];return V(e,(function(t){h(Q,t)||h(j,t)||n.push(t)})),n},pt=function(t){var e=t===z,n=X(e?Z:m(t)),r=[];return V(n,(function(t){!h(Q,t)||e&&!h(z,t)||r.push(Q[t])})),r};if(c||(W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=N(t),n=function(t){this===z&&n.call(Z,t),h(this,U)&&h(this[U],e)&&(this[U][e]=!1),ot(this,e,y(1,t))};return a&&it&&ot(z,e,{configurable:!0,set:n}),st(e,t)},k(W[B],"toString",(function(){return H(this).tag})),k(W,"withoutSetter",(function(t){return st(N(t),t)})),I.f=ht,S.f=ct,T.f=ft,_.f=O.f=dt,E.f=pt,D.f=function(t){return st(R(t),t)},a&&(Y(W[B],"description",{configurable:!0,get:function(){return H(this).description}}),s||k(z,"propertyIsEnumerable",ht,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:W}),V(w(nt),(function(t){M(t)})),r({target:F,stat:!0,forced:!c},{for:function(t){var e=String(t);if(h(tt,e))return tt[e];var n=W(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(h(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!a},{create:lt,defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:ft}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:dt,getOwnPropertySymbols:pt}),r({target:"Object",stat:!0,forced:l((function(){E.f(1)}))},{getOwnPropertySymbols:function(t){return E.f(g(t))}}),G){var gt=!c||l((function(){var t=W();return"[null]"!=G([t])||"{}"!=G({a:t})||"{}"!=G(Object(t))}));r({target:"JSON",stat:!0,forced:gt},{stringify:function(t,e,n){var r,i=[t],o=1;while(arguments.length>o)i.push(arguments[o++]);if(r=e,(d(e)||void 0!==t)&&!at(t))return f(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!at(e))return e}),i[1]=e,G.apply(null,i)}})}W[B][$]||A(W[B],$,W[B].valueOf),P(W,F),j[U]=!0},a630:function(t,e,n){var r=n("23e7"),i=n("4df4"),o=n("1c7e"),s=!o((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:s},{from:i})},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},a691:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},a79d:function(t,e,n){"use strict";var r=n("23e7"),i=n("c430"),o=n("fea9"),s=n("d039"),a=n("d066"),c=n("4840"),u=n("cdf9"),l=n("6eeb"),h=!!o&&s((function(){o.prototype["finally"].call({then:function(){}},(function(){}))}));r({target:"Promise",proto:!0,real:!0,forced:h},{finally:function(t){var e=c(this,a("Promise")),n="function"==typeof t;return this.then(n?function(n){return u(e,t()).then((function(){return n}))}:t,n?function(n){return u(e,t()).then((function(){throw n}))}:t)}}),i||"function"!=typeof o||o.prototype["finally"]||l(o.prototype,"finally",a("Promise").prototype["finally"])},a9e3:function(t,e,n){"use strict";var r=n("83ab"),i=n("da84"),o=n("94ca"),s=n("6eeb"),a=n("5135"),c=n("c6b6"),u=n("7156"),l=n("c04e"),h=n("d039"),f=n("7c73"),d=n("241c").f,p=n("06cf").f,g=n("9bf2").f,m=n("58a8").trim,v="Number",y=i[v],b=y.prototype,w=c(f(b))==v,_=function(t){var e,n,r,i,o,s,a,c,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=m(u),e=u.charCodeAt(0),43===e||45===e){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+u}for(o=u.slice(2),s=o.length,a=0;a<s;a++)if(c=o.charCodeAt(a),c<48||c>i)return NaN;return parseInt(o,r)}return+u};if(o(v,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var O,E=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof E&&(w?h((function(){b.valueOf.call(n)})):c(n)!=v)?u(new y(_(e)),n,E):_(e)},T=r?d(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),S=0;T.length>S;S++)a(y,O=T[S])&&!a(E,O)&&g(E,O,p(y,O));E.prototype=b,b.constructor=E,s(i,v,E)}},ab13:function(t,e,n){var r=n("b622"),i=r("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[i]=!1,"/./"[t](e)}catch(r){}}return!1}},ac1f:function(t,e,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad3d:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return _}));var r=n("7a23"),i=n("ecee"),o="undefined"!==typeof window?window:"undefined"!==typeof t?t:"undefined"!==typeof self?self:{};function s(t,e){return e={exports:{}},t(e,e.exports),e.exports}var a=s((function(t){(function(e){var n=function(t,e,r){if(!u(e)||h(e)||f(e)||d(e)||c(e))return e;var i,o=0,s=0;if(l(e))for(i=[],s=e.length;o<s;o++)i.push(n(t,e[o],r));else for(var a in i={},e)Object.prototype.hasOwnProperty.call(e,a)&&(i[t(a,r)]=n(t,e[a],r));return i},r=function(t,e){e=e||{};var n=e.separator||"_",r=e.split||/(?=[A-Z])/;return t.split(r).join(n)},i=function(t){return p(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,(function(t,e){return e?e.toUpperCase():""})),t.substr(0,1).toLowerCase()+t.substr(1))},o=function(t){var e=i(t);return e.substr(0,1).toUpperCase()+e.substr(1)},s=function(t,e){return r(t,e).toLowerCase()},a=Object.prototype.toString,c=function(t){return"function"===typeof t},u=function(t){return t===Object(t)},l=function(t){return"[object Array]"==a.call(t)},h=function(t){return"[object Date]"==a.call(t)},f=function(t){return"[object RegExp]"==a.call(t)},d=function(t){return"[object Boolean]"==a.call(t)},p=function(t){return t-=0,t===t},g=function(t,e){var n=e&&"process"in e?e.process:e;return"function"!==typeof n?t:function(e,r){return n(e,t,r)}},m={camelize:i,decamelize:s,pascalize:o,depascalize:s,camelizeKeys:function(t,e){return n(g(i,e),t)},decamelizeKeys:function(t,e){return n(g(s,e),t,e)},pascalizeKeys:function(t,e){return n(g(o,e),t)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=m:e.humps=m})(o)})),c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},h=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},f=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)};function d(t){return t.split(";").map((function(t){return t.trim()})).filter((function(t){return t})).reduce((function(t,e){var n=e.indexOf(":"),r=a.camelize(e.slice(0,n)),i=e.slice(n+1).trim();return t[r]=i,t}),{})}function p(t){return t.split(/\s+/).reduce((function(t,e){return t[e]=!0,t}),{})}function g(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof t)return t;var i=(t.children||[]).map((function(t){return g(t)})).map((function(t){return"string"===typeof t?t:t()})),o=Object.keys(t.attributes||{}).reduce((function(e,n){var r=t.attributes[n];switch(n){case"class":e.class=p(r);break;case"style":e.style=d(r);break;default:e.attrs[n]=r}return e}),{attrs:{},class:{},style:{}}),s=(n.class,n.style),a=void 0===s?{}:s,c=h(n,["class","style"]);return function(){return Object(r["n"])(t.tag,l({},e,{class:o.class,style:l({},o.style,a)},o.attrs,c),i)}}var m=!1;try{m=!0}catch(O){}function v(){var t;!m&&console&&"function"===typeof console.error&&(t=console).error.apply(t,arguments)}function y(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?u({},t,e):{}}function b(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip-horizontal":"horizontal"===t.flip||"both"===t.flip,"fa-flip-vertical":"vertical"===t.flip||"both"===t.flip},u(e,"fa-"+t.size,null!==t.size),u(e,"fa-rotate-"+t.rotation,null!==t.rotation),u(e,"fa-pull-"+t.pull,null!==t.pull),u(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(n).map((function(t){return n[t]?t:null})).filter((function(t){return t}))}function w(t){return null===t?null:"object"===("undefined"===typeof t?"undefined":c(t))&&t.prefix&&t.iconName?t:Array.isArray(t)&&2===t.length?{prefix:t[0],iconName:t[1]}:"string"===typeof t?{prefix:"fas",iconName:t}:void 0}var _=Object(r["l"])({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:String,default:null,validator:function(t){return["horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1}},setup:function(t,e){var n=e.attrs,r=t.symbol,o=t.title,s=w(t.icon),a=y("classes",b(t)),c=y("transform","string"===typeof t.transform?i["d"].transform(t.transform):t.transform),u=y("mask",w(t.mask)),h=Object(i["b"])(s,l({},a,c,u,{symbol:r,title:o}));if(!h)return v("Could not find one or more icon(s)",s,u);var f=h.abstract[0];return g(f,{},n)}});Object(r["l"])({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,e){var n=e.slots,o=i["a"].familyPrefix,s=[o+"-layers"].concat(f(t.fixedWidth?[o+"-fw"]:[]));return function(){return Object(r["n"])("div",{class:s},n.default?n.default():[])}}}),Object(r["l"])({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,e){var n=e.attrs,r=i["a"].familyPrefix,o=y("classes",[].concat(f(t.counter?[r+"-layers-counter"]:[]),f(t.position?[r+"-layers-"+t.position]:[]))),s=y("transform","string"===typeof t.transform?i["d"].transform(t.transform):t.transform),a=Object(i["e"])(t.value.toString(),l({},s,o)),c=a.abstract;return t.counter&&(c[0].attributes.class=c[0].attributes.class.replace("fa-layers-text","")),g(c[0],{},n)}})}).call(this,n("c8ba"))},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},ae40:function(t,e,n){var r=n("83ab"),i=n("d039"),o=n("5135"),s=Object.defineProperty,a={},c=function(t){throw t};t.exports=function(t,e){if(o(a,t))return a[t];e||(e={});var n=[][t],u=!!o(e,"ACCESSORS")&&e.ACCESSORS,l=o(e,0)?e[0]:c,h=o(e,1)?e[1]:void 0;return a[t]=!!n&&!i((function(){if(u&&!r)return!0;var t={length:-1};u?s(t,1,{enumerable:!0,get:c}):t[1]=1,n.call(t,l,h)}))}},ae93:function(t,e,n){"use strict";var r,i,o,s=n("e163"),a=n("9112"),c=n("5135"),u=n("b622"),l=n("c430"),h=u("iterator"),f=!1,d=function(){return this};[].keys&&(o=[].keys(),"next"in o?(i=s(s(o)),i!==Object.prototype&&(r=i)):f=!0),void 0==r&&(r={}),l||c(r,h)||a(r,h,d),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:f}},b041:function(t,e,n){"use strict";var r=n("00ee"),i=n("f5df");t.exports=r?{}.toString:function(){return"[object "+i(this)+"]"}},b047:function(t,e,n){var r=n("1a8c"),i=n("408c"),o=n("b4b0"),s="Expected a function",a=Math.max,c=Math.min;function u(t,e,n){var u,l,h,f,d,p,g=0,m=!1,v=!1,y=!0;if("function"!=typeof t)throw new TypeError(s);function b(e){var n=u,r=l;return u=l=void 0,g=e,f=t.apply(r,n),f}function w(t){return g=t,d=setTimeout(E,e),m?b(t):f}function _(t){var n=t-p,r=t-g,i=e-n;return v?c(i,h-r):i}function O(t){var n=t-p,r=t-g;return void 0===p||n>=e||n<0||v&&r>=h}function E(){var t=i();if(O(t))return T(t);d=setTimeout(E,_(t))}function T(t){return d=void 0,y&&u?b(t):(u=l=void 0,f)}function S(){void 0!==d&&clearTimeout(d),g=0,u=p=l=d=void 0}function I(){return void 0===d?f:T(i())}function A(){var t=i(),n=O(t);if(u=arguments,l=this,p=t,n){if(void 0===d)return w(p);if(v)return clearTimeout(d),d=setTimeout(E,e),b(p)}return void 0===d&&(d=setTimeout(E,e)),f}return e=o(e)||0,r(n)&&(m=!!n.leading,v="maxWait"in n,h=v?a(o(n.maxWait)||0,e):h,y="trailing"in n?!!n.trailing:y),A.cancel=S,A.flush=I,A}t.exports=u},b0c0:function(t,e,n){var r=n("83ab"),i=n("9bf2").f,o=Function.prototype,s=o.toString,a=/^\s*function ([^ (]*)/,c="name";r&&!(c in o)&&i(o,c,{configurable:!0,get:function(){try{return s.call(this).match(a)[1]}catch(t){return""}}})},b218:function(t,e){var n=9007199254740991;function r(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=n}t.exports=r},b4b0:function(t,e,n){var r=n("8d74"),i=n("1a8c"),o=n("ffd6"),s=NaN,a=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt;function h(t){if("number"==typeof t)return t;if(o(t))return s;if(i(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=i(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=r(t);var n=c.test(t);return n||u.test(t)?l(t.slice(2),n?2:8):a.test(t)?s:+t}t.exports=h},b575:function(t,e,n){var r,i,o,s,a,c,u,l,h=n("da84"),f=n("06cf").f,d=n("2cf4").set,p=n("1cdc"),g=n("605d"),m=h.MutationObserver||h.WebKitMutationObserver,v=h.document,y=h.process,b=h.Promise,w=f(h,"queueMicrotask"),_=w&&w.value;_||(r=function(){var t,e;g&&(t=y.domain)&&t.exit();while(i){e=i.fn,i=i.next;try{e()}catch(n){throw i?s():o=void 0,n}}o=void 0,t&&t.enter()},!p&&!g&&m&&v?(a=!0,c=v.createTextNode(""),new m(r).observe(c,{characterData:!0}),s=function(){c.data=a=!a}):b&&b.resolve?(u=b.resolve(void 0),l=u.then,s=function(){l.call(u,r)}):s=g?function(){y.nextTick(r)}:function(){d.call(h,r)}),t.exports=_||function(t){var e={fn:t,next:void 0};o&&(o.next=e),i||(i=e,s()),o=e}},b622:function(t,e,n){var r=n("da84"),i=n("5692"),o=n("5135"),s=n("90e3"),a=n("4930"),c=n("fdbf"),u=i("wks"),l=r.Symbol,h=c?l:l&&l.withoutSetter||s;t.exports=function(t){return o(u,t)||(a&&o(l,t)?u[t]=l[t]:u[t]=h("Symbol."+t)),u[t]}},b64b:function(t,e,n){var r=n("23e7"),i=n("7b0b"),o=n("df75"),s=n("d039"),a=s((function(){o(1)}));r({target:"Object",stat:!0,forced:a},{keys:function(t){return o(i(t))}})},b727:function(t,e,n){var r=n("0366"),i=n("44ad"),o=n("7b0b"),s=n("50c4"),a=n("65f0"),c=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,l=4==t,h=6==t,f=7==t,d=5==t||h;return function(p,g,m,v){for(var y,b,w=o(p),_=i(w),O=r(g,m,3),E=s(_.length),T=0,S=v||a,I=e?S(p,E):n||f?S(p,0):void 0;E>T;T++)if((d||T in _)&&(y=_[T],b=O(y,T,w),t))if(e)I[T]=b;else if(b)switch(t){case 3:return!0;case 5:return y;case 6:return T;case 2:c.call(I,y)}else switch(t){case 4:return!1;case 7:c.call(I,y)}return h?-1:u||l?l:I}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},b9dd:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return u}));
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
const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?o[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}},c04e:function(t,e,n){var r=n("861d");t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},c074:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i}));
/*!
 * Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
var r={prefix:"fas",iconName:"camera",icon:[512,512,[],"f030","M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"]},i={prefix:"fas",iconName:"pencil-alt",icon:[512,512,[],"f303","M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"]}},c098:function(t,e){var n=9007199254740991,r=/^(?:0|[1-9]\d*)$/;function i(t,e){var i=typeof t;return e=null==e?n:e,!!e&&("number"==i||"symbol"!=i&&r.test(t))&&t>-1&&t%1==0&&t<e}t.exports=i},c430:function(t,e){t.exports=!1},c6b6:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},c6cd:function(t,e,n){var r=n("da84"),i=n("ce4e"),o="__core-js_shared__",s=r[o]||i(o,{});t.exports=s},c740:function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").findIndex,o=n("44d2"),s=n("ae40"),a="findIndex",c=!0,u=s(a);a in[]&&Array(1)[a]((function(){c=!1})),r({target:"Array",proto:!0,forced:c||!u},{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o(a)},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},ca84:function(t,e,n){var r=n("5135"),i=n("fc6a"),o=n("4d64").indexOf,s=n("d012");t.exports=function(t,e){var n,a=i(t),c=0,u=[];for(n in a)!r(s,n)&&r(a,n)&&u.push(n);while(e.length>c)r(a,n=e[c++])&&(~o(u,n)||u.push(n));return u}},caad:function(t,e,n){"use strict";var r=n("23e7"),i=n("4d64").includes,o=n("44d2"),s=n("ae40"),a=s("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:!a},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o("includes")},cbdf:function(t,e,n){"use strict";
/**
  * vee-validate v4.4.7
  * (c) 2021 Abdelrahman Awad
  * @license MIT
  */
function r(t){return"function"===typeof t}n.d(e,"a",(function(){return u}));const i=t=>null!==t&&!!t&&"object"===typeof t&&!Array.isArray(t);function o(t,e){return t.replace(/(\d:)?{([^}]+)}/g,(function(t,n,r){if(!n||!e.params)return r in e?e[r]:e.params&&r in e.params?e.params[r]:`{${r}}`;if(!Array.isArray(e.params))return r in e.params?e.params[r]:`{${r}}`;const i=Number(n.replace(":",""));return i in e.params?e.params[i]:`${n}{${r}}`}))}function s(t,e){return Object.keys(e).forEach(n=>{if(i(e[n]))return t[n]||(t[n]={}),void s(t[n],e[n]);t[n]=e[n]}),t}class a{constructor(t,e){this.container={},this.locale=t,this.merge(e)}resolve(t){return this.format(this.locale,t)}format(t,e){var n,i,s,a,c,u,l,h;let f;const{field:d,rule:p,form:g}=e;if(!p)return d+" is not valid";f=(null===(s=null===(i=null===(n=this.container[t])||void 0===n?void 0:n.fields)||void 0===i?void 0:i[d])||void 0===s?void 0:s[p.name])||(null===(c=null===(a=this.container[t])||void 0===a?void 0:a.messages)||void 0===c?void 0:c[p.name]),f||(f=d+" is not valid");const m=null!==(h=null===(l=null===(u=this.container[t])||void 0===u?void 0:u.names)||void 0===l?void 0:l[d])&&void 0!==h?h:d;return r(f)?f(e):o(f,Object.assign(Object.assign({},g),{field:m,params:p.params}))}merge(t){s(this.container,t)}}let c;function u(t,e){c||(c=new a("en",{}));const n=t=>c.resolve(t);return"string"===typeof t?(c.locale=t,e&&c.merge({[t]:e}),n):(c.merge(t),n)}},cc12:function(t,e,n){var r=n("da84"),i=n("861d"),o=r.document,s=i(o)&&i(o.createElement);t.exports=function(t){return s?o.createElement(t):{}}},cca6:function(t,e,n){var r=n("23e7"),i=n("60da");r({target:"Object",stat:!0,forced:Object.assign!==i},{assign:i})},cdf9:function(t,e,n){var r=n("825a"),i=n("861d"),o=n("f069");t.exports=function(t,e){if(r(t),i(e)&&e.constructor===t)return e;var n=o.f(t),s=n.resolve;return s(e),n.promise}},ce4e:function(t,e,n){var r=n("da84"),i=n("9112");t.exports=function(t,e){try{i(r,t,e)}catch(n){r[t]=e}return e}},d012:function(t,e){t.exports={}},d039:function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},d066:function(t,e,n){var r=n("428f"),i=n("da84"),o=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?o(r[t])||o(i[t]):r[t]&&r[t][e]||i[t]&&i[t][e]}},d1e7:function(t,e,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!r.call({1:2},1);e.f=o?function(t){var e=i(this,t);return!!e&&e.enumerable}:r},d28b:function(t,e,n){var r=n("746f");r("iterator")},d2bb:function(t,e,n){var r=n("825a"),i=n("3bbe");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,t.call(n,[]),e=n instanceof Array}catch(o){}return function(n,o){return r(n),i(o),e?t.call(n,o):n.__proto__=o,n}}():void 0)},d3b7:function(t,e,n){var r=n("00ee"),i=n("6eeb"),o=n("b041");r||i(Object.prototype,"toString",o,{unsafe:!0})},d44e:function(t,e,n){var r=n("9bf2").f,i=n("5135"),o=n("b622"),s=o("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,s)&&r(t,s,{configurable:!0,value:e})}},d563:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return h})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return p})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return c}));
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
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return e.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],o=i+1<t.length,s=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,l=(3&e)<<4|s>>4;let h=(15&s)<<2|c>>6,f=63&c;a||(f=64,o||(h=64)),r.push(n[u],n[l],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],o=i<t.length,s=o?n[t.charAt(i)]:0;++i;const a=i<t.length,c=a?n[t.charAt(i)]:64;++i;const u=i<t.length,l=u?n[t.charAt(i)]:64;if(++i,null==e||null==s||null==c||null==l)throw Error();const h=e<<2|s>>4;if(r.push(h),64!==c){const t=s<<4&240|c>>2;if(r.push(t),64!==l){const t=c<<6&192|l;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},s=function(t){const e=r(t);return o.encodeByteArray(e,!0)};
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
 */function a(){return"object"===typeof indexedDB}function c(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}})}
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
const u="FirebaseError";class l extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=u,Object.setPrototypeOf(this,l.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,h.prototype.create)}}class h{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?f(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new l(r,s,n);return a}}function f(t,e){return t.replace(d,(t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`})}const d=/\{\$([^}]+)}/g;
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
 */function p(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],o=e[i];if(g(n)&&g(o)){if(!p(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function g(t){return null!==t&&"object"===typeof t}
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
 */}).call(this,n("c8ba"))},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),i=n("d039"),o=n("b622"),s=n("9263"),a=n("9112"),c=o("species"),u=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),h=o("replace"),f=function(){return!!/./[h]&&""===/./[h]("a","$0")}(),d=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,h){var p=o(t),g=!i((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),m=g&&!i((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return e=!0,null},n[p](""),!e}));if(!g||!m||"replace"===t&&(!u||!l||f)||"split"===t&&!d){var v=/./[p],y=n(p,""[t],(function(t,e,n,r,i){return e.exec===s?g&&!i?{done:!0,value:v.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),b=y[0],w=y[1];r(String.prototype,t,b),r(RegExp.prototype,p,2==e?function(t,e){return w.call(t,this,e)}:function(t){return w.call(t,this)})}h&&a(RegExp.prototype[p],"sham",!0)}},d81d:function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").map,o=n("1dde"),s=n("ae40"),a=o("map"),c=s("map");r({target:"Array",proto:!0,forced:!a||!c},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},da84:function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},dbb4:function(t,e,n){var r=n("23e7"),i=n("83ab"),o=n("56ef"),s=n("fc6a"),a=n("06cf"),c=n("8418");r({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,n,r=s(t),i=a.f,u=o(r),l={},h=0;while(u.length>h)n=i(r,e=u[h++]),void 0!==n&&c(l,e,n);return l}})},ddb0:function(t,e,n){var r=n("da84"),i=n("fdbc"),o=n("e260"),s=n("9112"),a=n("b622"),c=a("iterator"),u=a("toStringTag"),l=o.values;for(var h in i){var f=r[h],d=f&&f.prototype;if(d){if(d[c]!==l)try{s(d,c,l)}catch(g){d[c]=l}if(d[u]||s(d,u,h),i[h])for(var p in o)if(d[p]!==o[p])try{s(d,p,o[p])}catch(g){d[p]=o[p]}}}},df75:function(t,e,n){var r=n("ca84"),i=n("7839");t.exports=Object.keys||function(t){return r(t,i)}},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var i=t[r];"."===i?t.splice(r,1):".."===i?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function r(t){"string"!==typeof t&&(t+="");var e,n=0,r=-1,i=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!i){n=e+1;break}}else-1===r&&(i=!1,r=e+1);return-1===r?"":t.slice(n,r)}function i(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",r=!1,o=arguments.length-1;o>=-1&&!r;o--){var s=o>=0?arguments[o]:t.cwd();if("string"!==typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(e=s+"/"+e,r="/"===s.charAt(0))}return e=n(i(e.split("/"),(function(t){return!!t})),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),s="/"===o(t,-1);return t=n(i(t.split("/"),(function(t){return!!t})),!r).join("/"),t||r||(t="."),t&&s&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(i(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var i=r(t.split("/")),o=r(n.split("/")),s=Math.min(i.length,o.length),a=s,c=0;c<s;c++)if(i[c]!==o[c]){a=c;break}var u=[];for(c=a;c<i.length;c++)u.push("..");return u=u.concat(o.slice(a)),u.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,r=-1,i=!0,o=t.length-1;o>=1;--o)if(e=t.charCodeAt(o),47===e){if(!i){r=o;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":t.slice(0,r)},e.basename=function(t,e){var n=r(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,n=0,r=-1,i=!0,o=0,s=t.length-1;s>=0;--s){var a=t.charCodeAt(s);if(47!==a)-1===r&&(i=!1,r=s+1),46===a?-1===e?e=s:1!==o&&(o=1):-1!==e&&(o=-1);else if(!i){n=s+1;break}}return-1===e||-1===r||0===o||1===o&&e===r-1&&e===n+1?"":t.slice(e,r)};var o="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},e01a:function(t,e,n){"use strict";var r=n("23e7"),i=n("83ab"),o=n("da84"),s=n("5135"),a=n("861d"),c=n("9bf2").f,u=n("e893"),l=o.Symbol;if(i&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var h={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new l(t):void 0===t?l():l(t);return""===t&&(h[e]=!0),e};u(f,l);var d=f.prototype=l.prototype;d.constructor=f;var p=d.toString,g="Symbol(test)"==String(l("test")),m=/^Symbol\((.*)\)[^)]+$/;c(d,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=p.call(t);if(s(h,t))return"";var n=g?e.slice(7,-1):e.replace(m,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:f})}},e163:function(t,e,n){var r=n("5135"),i=n("7b0b"),o=n("f772"),s=n("e177"),a=o("IE_PROTO"),c=Object.prototype;t.exports=s?Object.getPrototypeOf:function(t){return t=i(t),r(t,a)?t[a]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},e177:function(t,e,n){var r=n("d039");t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},e260:function(t,e,n){"use strict";var r=n("fc6a"),i=n("44d2"),o=n("3f8c"),s=n("69f3"),a=n("7dd0"),c="Array Iterator",u=s.set,l=s.getterFor(c);t.exports=a(Array,"Array",(function(t,e){u(this,{type:c,target:r(t),index:0,kind:e})}),(function(){var t=l(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values"),o.Arguments=o.Array,i("keys"),i("values"),i("entries")},e2cc:function(t,e,n){var r=n("6eeb");t.exports=function(t,e,n){for(var i in e)r(t,i,e[i],n);return t}},e3db:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return p}));
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
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return e.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],o=i+1<t.length,s=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,l=(3&e)<<4|s>>4;let h=(15&s)<<2|c>>6,f=63&c;a||(f=64,o||(h=64)),r.push(n[u],n[l],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],o=i<t.length,s=o?n[t.charAt(i)]:0;++i;const a=i<t.length,c=a?n[t.charAt(i)]:64;++i;const u=i<t.length,l=u?n[t.charAt(i)]:64;if(++i,null==e||null==s||null==c||null==l)throw Error();const h=e<<2|s>>4;if(r.push(h),64!==c){const t=s<<4&240|c>>2;if(r.push(t),64!==l){const t=c<<6&192|l;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},s=function(t){const e=r(t);return o.encodeByteArray(e,!0)},a=function(t){return s(t).replace(/\./g,"")};
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
function c(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:"https://securetoken.google.com/"+r,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t),c="";return[a(JSON.stringify(n)),a(JSON.stringify(s)),c].join(".")}
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
const u="FirebaseError";class l extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=u,Object.setPrototypeOf(this,l.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,h.prototype.create)}}class h{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?f(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new l(r,s,n);return a}}function f(t,e){return t.replace(d,(t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`})}const d=/\{\$([^}]+)}/g;
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
function p(t){return t&&t._delegate?t._delegate:t}}).call(this,n("c8ba"))},e439:function(t,e,n){var r=n("23e7"),i=n("d039"),o=n("fc6a"),s=n("06cf").f,a=n("83ab"),c=i((function(){s(1)})),u=!a||c;r({target:"Object",stat:!0,forced:u,sham:!a},{getOwnPropertyDescriptor:function(t,e){return s(o(t),e)}})},e538:function(t,e,n){var r=n("b622");e.f=r},e667:function(t,e){t.exports=function(t){try{return{error:!1,value:t()}}catch(e){return{error:!0,value:e}}}},e6cf:function(t,e,n){"use strict";var r,i,o,s,a=n("23e7"),c=n("c430"),u=n("da84"),l=n("d066"),h=n("fea9"),f=n("6eeb"),d=n("e2cc"),p=n("d44e"),g=n("2626"),m=n("861d"),v=n("1c0b"),y=n("19aa"),b=n("8925"),w=n("2266"),_=n("1c7e"),O=n("4840"),E=n("2cf4").set,T=n("b575"),S=n("cdf9"),I=n("44de"),A=n("f069"),k=n("e667"),C=n("69f3"),x=n("94ca"),j=n("b622"),N=n("605d"),R=n("2d00"),D=j("species"),M="Promise",P=C.get,L=C.set,V=C.getterFor(M),U=h,F=u.TypeError,B=u.document,$=u.process,q=l("fetch"),H=A.f,z=H,W=!!(B&&B.createEvent&&u.dispatchEvent),G="function"==typeof PromiseRejectionEvent,K="unhandledrejection",Y="rejectionhandled",X=0,J=1,Q=2,Z=1,tt=2,et=x(M,(function(){var t=b(U)!==String(U);if(!t){if(66===R)return!0;if(!N&&!G)return!0}if(c&&!U.prototype["finally"])return!0;if(R>=51&&/native code/.test(U))return!1;var e=U.resolve(1),n=function(t){t((function(){}),(function(){}))},r=e.constructor={};return r[D]=n,!(e.then((function(){}))instanceof n)})),nt=et||!_((function(t){U.all(t)["catch"]((function(){}))})),rt=function(t){var e;return!(!m(t)||"function"!=typeof(e=t.then))&&e},it=function(t,e){if(!t.notified){t.notified=!0;var n=t.reactions;T((function(){var r=t.value,i=t.state==J,o=0;while(n.length>o){var s,a,c,u=n[o++],l=i?u.ok:u.fail,h=u.resolve,f=u.reject,d=u.domain;try{l?(i||(t.rejection===tt&&ct(t),t.rejection=Z),!0===l?s=r:(d&&d.enter(),s=l(r),d&&(d.exit(),c=!0)),s===u.promise?f(F("Promise-chain cycle")):(a=rt(s))?a.call(s,h,f):h(s)):f(r)}catch(p){d&&!c&&d.exit(),f(p)}}t.reactions=[],t.notified=!1,e&&!t.rejection&&st(t)}))}},ot=function(t,e,n){var r,i;W?(r=B.createEvent("Event"),r.promise=e,r.reason=n,r.initEvent(t,!1,!0),u.dispatchEvent(r)):r={promise:e,reason:n},!G&&(i=u["on"+t])?i(r):t===K&&I("Unhandled promise rejection",n)},st=function(t){E.call(u,(function(){var e,n=t.facade,r=t.value,i=at(t);if(i&&(e=k((function(){N?$.emit("unhandledRejection",r,n):ot(K,n,r)})),t.rejection=N||at(t)?tt:Z,e.error))throw e.value}))},at=function(t){return t.rejection!==Z&&!t.parent},ct=function(t){E.call(u,(function(){var e=t.facade;N?$.emit("rejectionHandled",e):ot(Y,e,t.value)}))},ut=function(t,e,n){return function(r){t(e,r,n)}},lt=function(t,e,n){t.done||(t.done=!0,n&&(t=n),t.value=e,t.state=Q,it(t,!0))},ht=function(t,e,n){if(!t.done){t.done=!0,n&&(t=n);try{if(t.facade===e)throw F("Promise can't be resolved itself");var r=rt(e);r?T((function(){var n={done:!1};try{r.call(e,ut(ht,n,t),ut(lt,n,t))}catch(i){lt(n,i,t)}})):(t.value=e,t.state=J,it(t,!1))}catch(i){lt({done:!1},i,t)}}};et&&(U=function(t){y(this,U,M),v(t),r.call(this);var e=P(this);try{t(ut(ht,e),ut(lt,e))}catch(n){lt(e,n)}},r=function(t){L(this,{type:M,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:X,value:void 0})},r.prototype=d(U.prototype,{then:function(t,e){var n=V(this),r=H(O(this,U));return r.ok="function"!=typeof t||t,r.fail="function"==typeof e&&e,r.domain=N?$.domain:void 0,n.parent=!0,n.reactions.push(r),n.state!=X&&it(n,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r,e=P(t);this.promise=t,this.resolve=ut(ht,e),this.reject=ut(lt,e)},A.f=H=function(t){return t===U||t===o?new i(t):z(t)},c||"function"!=typeof h||(s=h.prototype.then,f(h.prototype,"then",(function(t,e){var n=this;return new U((function(t,e){s.call(n,t,e)})).then(t,e)}),{unsafe:!0}),"function"==typeof q&&a({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return S(U,q.apply(u,arguments))}}))),a({global:!0,wrap:!0,forced:et},{Promise:U}),p(U,M,!1,!0),g(M),o=l(M),a({target:M,stat:!0,forced:et},{reject:function(t){var e=H(this);return e.reject.call(void 0,t),e.promise}}),a({target:M,stat:!0,forced:c||et},{resolve:function(t){return S(c&&this===o?U:this,t)}}),a({target:M,stat:!0,forced:nt},{all:function(t){var e=this,n=H(e),r=n.resolve,i=n.reject,o=k((function(){var n=v(e.resolve),o=[],s=0,a=1;w(t,(function(t){var c=s++,u=!1;o.push(void 0),a++,n.call(e,t).then((function(t){u||(u=!0,o[c]=t,--a||r(o))}),i)})),--a||r(o)}));return o.error&&i(o.value),n.promise},race:function(t){var e=this,n=H(e),r=n.reject,i=k((function(){var i=v(e.resolve);w(t,(function(t){i.call(e,t).then(n.resolve,r)}))}));return i.error&&r(i.value),n.promise}})},e71f:function(t,e,n){"use strict";var r=n("0829");n.d(e,"a",(function(){return r["a"]})),n.d(e,"b",(function(){return r["b"]})),n.d(e,"c",(function(){return r["c"]})),n.d(e,"d",(function(){return r["d"]})),n.d(e,"e",(function(){return r["e"]})),n.d(e,"f",(function(){return r["f"]})),n.d(e,"g",(function(){return r["g"]})),n.d(e,"h",(function(){return r["h"]})),n.d(e,"i",(function(){return r["i"]})),n.d(e,"j",(function(){return r["j"]})),n.d(e,"k",(function(){return r["k"]})),n.d(e,"l",(function(){return r["l"]})),n.d(e,"m",(function(){return r["m"]})),n.d(e,"n",(function(){return r["n"]})),n.d(e,"o",(function(){return r["o"]})),n.d(e,"p",(function(){return r["p"]})),n.d(e,"q",(function(){return r["q"]}))},e893:function(t,e,n){var r=n("5135"),i=n("56ef"),o=n("06cf"),s=n("9bf2");t.exports=function(t,e){for(var n=i(e),a=s.f,c=o.f,u=0;u<n.length;u++){var l=n[u];r(t,l)||a(t,l,c(e,l))}}},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},e95a:function(t,e,n){var r=n("b622"),i=n("3f8c"),o=r("iterator"),s=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||s[o]===t)}},ea7b:function(t,e,n){"use strict";n.d(e,"a",(function(){return Qt})),n.d(e,"b",(function(){return ne})),n.d(e,"c",(function(){return ge})),n.d(e,"d",(function(){return vr})),n.d(e,"e",(function(){return pe})),n.d(e,"f",(function(){return me})),n.d(e,"g",(function(){return vn})),n.d(e,"h",(function(){return ve}));var r=n("30b6"),i=n("589b");function o(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}Object.create;Object.create;
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
const s=[];var a;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(a||(a={}));const c={debug:a.DEBUG,verbose:a.VERBOSE,info:a.INFO,warn:a.WARN,error:a.ERROR,silent:a.SILENT},u=a.INFO,l={[a.DEBUG]:"log",[a.VERBOSE]:"log",[a.INFO]:"info",[a.WARN]:"warn",[a.ERROR]:"error"},h=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=l[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class f{constructor(t){this.name=t,this._logLevel=u,this._logHandler=h,this._userLogHandler=null,s.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in a))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?c[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,a.DEBUG,...t),this._logHandler(this,a.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,a.VERBOSE,...t),this._logHandler(this,a.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,a.INFO,...t),this._logHandler(this,a.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,a.WARN,...t),this._logHandler(this,a.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,a.ERROR,...t),this._logHandler(this,a.ERROR,...t)}}var d=n("22e5");
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
 */function p(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const g=p,m=new r["a"]("auth","Firebase",p()),v=new f("@firebase/auth");function y(t,...e){v.logLevel<=a.ERROR&&v.error(`Auth (${i["a"]}): ${t}`,...e)}
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
 */function b(t,...e){throw E(t,...e)}function w(t,...e){return E(t,...e)}function _(t,e,n){const i=Object.assign(Object.assign({},g()),{[e]:n}),o=new r["a"]("auth","Firebase",i);return o.create(e,{appName:t.name})}function O(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&b(t,"argument-error"),_(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function E(t,...e){if("string"!==typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return m.create(t,...e)}function T(t,e,...n){if(!t)throw E(e,...n)}function S(t){const e="INTERNAL ASSERTION FAILED: "+t;throw y(e),new Error(e)}function I(t,e){t||S(e)}
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
 */const A=new Map;function k(t){I(t instanceof Function,"Expected a class definition");let e=A.get(t);return e?(I(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,A.set(t,e),e)}
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
 */function C(t,e){const n=Object(i["b"])(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),i=n.getOptions();if(Object(r["e"])(i,null!==e&&void 0!==e?e:{}))return t;b(t,"already-initialized")}const o=n.initialize({options:e});return o}function x(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(k);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null===e||void 0===e?void 0:e.popupRedirectResolver)}
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
 */function j(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function N(){return"http:"===R()||"https:"===R()}function R(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
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
 */function D(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(N()||Object(r["i"])()||"connection"in navigator))||navigator.onLine}function M(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
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
 */class P{constructor(t,e){this.shortDelay=t,this.longDelay=e,I(e>t,"Short delay should be less than long delay!"),this.isMobile=Object(r["l"])()||Object(r["m"])()}get(){return D()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
 */function L(t,e){I(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
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
 */class V{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void S("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void S("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void S("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const U={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},F=new P(3e4,6e4);
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
 */function B(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function $(t,e,n,i,o={}){return q(t,o,async()=>{let o={},s={};i&&("GET"===e?s=i:o={body:JSON.stringify(i)});const a=Object(r["n"])(Object.assign({key:t.config.apiKey},s)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),V.fetch()(z(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},o))})}async function q(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},U),e);try{const e=new W(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw G(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const e=r.ok?o.errorMessage:o.error.message,[n,s]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw G(t,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw G(t,"email-already-in-use",o);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw _(t,a,s);b(t,a)}}catch(o){if(o instanceof r["b"])throw o;b(t,"network-request-failed")}}async function H(t,e,n,r,i={}){const o=await $(t,e,n,r,i);return"mfaPendingCredential"in o&&b(t,"multi-factor-auth-required",{_serverResponse:o}),o}function z(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?L(t.config,i):`${t.config.apiScheme}://${i}`}class W{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((t,e)=>{this.timer=setTimeout(()=>e(w(this.auth,"network-request-failed")),F.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function G(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=w(t,e,r);return i.customData._tokenResponse=n,i}
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
 */async function K(t,e){return $(t,"POST","/v1/accounts:delete",e)}async function Y(t,e){return $(t,"POST","/v1/accounts:lookup",e)}
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
 */function X(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
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
 */async function J(t,e=!1){const n=Object(r["g"])(t),i=await n.getIdToken(e),o=Z(i);T(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s="object"===typeof o.firebase?o.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:o,token:i,authTime:X(Q(o.auth_time)),issuedAtTime:X(Q(o.iat)),expirationTime:X(Q(o.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function Q(t){return 1e3*Number(t)}function Z(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return y("JWT malformed, contained fewer than 3 sections"),null;try{const t=Object(r["c"])(n);return t?JSON.parse(t):(y("Failed to decode base64 JWT payload"),null)}catch(o){return y("Caught error parsing JWT payload as JSON",o),null}}function tt(t){const e=Z(t);return T(e,"internal-error"),T("undefined"!==typeof e.exp,"internal-error"),T("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
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
 */async function et(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof r["b"]&&nt(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function nt({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
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
 */class rt{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===t.code&&this.schedule(!0))}this.schedule()}}
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
 */class it{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=X(this.lastLoginAt),this.creationTime=X(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function ot(t){var e;const n=t.auth,r=await t.getIdToken(),i=await et(t,Y(n,{idToken:r}));T(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=(null===(e=o.providerUserInfo)||void 0===e?void 0:e.length)?ct(o.providerUserInfo):[],a=at(t.providerData,s),c=t.isAnonymous,u=!(t.email&&o.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new it(o.createdAt,o.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function st(t){const e=Object(r["g"])(t);await ot(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function at(t,e){const n=t.filter(t=>!e.some(e=>e.providerId===t.providerId));return[...n,...e]}function ct(t){return t.map(t=>{var{providerId:e}=t,n=o(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
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
 */async function ut(t,e){const n=await q(t,{},async()=>{const n=Object(r["n"])({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=z(t,i,"/v1/token","key="+o),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",V.fetch()(s,{method:"POST",headers:a,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
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
 */class lt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){T(t.idToken,"internal-error"),T("undefined"!==typeof t.idToken,"internal-error"),T("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):tt(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return T(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await ut(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,o=new lt;return n&&(T("string"===typeof n,"internal-error",{appName:t}),o.refreshToken=n),r&&(T("string"===typeof r,"internal-error",{appName:t}),o.accessToken=r),i&&(T("number"===typeof i,"internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new lt,this.toJSON())}_performRefresh(){return S("not implemented")}}
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
 */function ht(t,e){T("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class ft{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=o(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new rt(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new it(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await et(this,this.stsTokenManager.getToken(this.auth,t));return T(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return J(this,t)}reload(){return st(this)}_assign(t){this!==t&&(T(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(t=>Object.assign({},t)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new ft(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){T(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await ot(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await et(this,K(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,o,s,a,c,u;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,f=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,d=null!==(o=e.photoURL)&&void 0!==o?o:void 0,p=null!==(s=e.tenantId)&&void 0!==s?s:void 0,g=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=e.createdAt)&&void 0!==c?c:void 0,v=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:b,isAnonymous:w,providerData:_,stsTokenManager:O}=e;T(y&&O,t,"internal-error");const E=lt.fromJSON(this.name,O);T("string"===typeof y,t,"internal-error"),ht(l,t.name),ht(h,t.name),T("boolean"===typeof b,t,"internal-error"),T("boolean"===typeof w,t,"internal-error"),ht(f,t.name),ht(d,t.name),ht(p,t.name),ht(g,t.name),ht(m,t.name),ht(v,t.name);const S=new ft({uid:y,auth:t,email:h,emailVerified:b,displayName:l,isAnonymous:w,photoURL:d,phoneNumber:f,tenantId:p,stsTokenManager:E,createdAt:m,lastLoginAt:v});return _&&Array.isArray(_)&&(S.providerData=_.map(t=>Object.assign({},t))),g&&(S._redirectEventId=g),S}static async _fromIdTokenResponse(t,e,n=!1){const r=new lt;r.updateFromServerResponse(e);const i=new ft({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await ot(i),i}}
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
 */class dt{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}dt.type="NONE";const pt=dt;
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
 */function gt(t,e,n){return`firebase:${t}:${e}:${n}`}class mt{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=gt(this.userKey,r.apiKey,i),this.fullPersistenceKey=gt("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?ft._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new mt(k(pt),t,n);const r=(await Promise.all(e.map(async t=>{if(await t._isAvailable())return t}))).filter(t=>t);let i=r[0]||k(pt);const o=gt(n,t.config.apiKey,t.name);let s=null;for(const u of e)try{const e=await u._get(o);if(e){const n=ft._fromJSON(t,e);u!==i&&(s=n),i=u;break}}catch(c){}const a=r.filter(t=>t._shouldAllowMigration);return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(e.map(async t=>{if(t!==i)try{await t._remove(o)}catch(c){}})),new mt(i,t,n)):new mt(i,t,n)}}
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
 */function vt(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_t(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(yt(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Et(e))return"Blackberry";if(Tt(e))return"Webos";if(bt(e))return"Safari";if((e.includes("chrome/")||wt(e))&&!e.includes("edge/"))return"Chrome";if(Ot(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function yt(t=Object(r["h"])()){return/firefox\//i.test(t)}function bt(t=Object(r["h"])()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function wt(t=Object(r["h"])()){return/crios\//i.test(t)}function _t(t=Object(r["h"])()){return/iemobile/i.test(t)}function Ot(t=Object(r["h"])()){return/android/i.test(t)}function Et(t=Object(r["h"])()){return/blackberry/i.test(t)}function Tt(t=Object(r["h"])()){return/webos/i.test(t)}function St(t=Object(r["h"])()){return/iphone|ipad|ipod/i.test(t)}function It(t=Object(r["h"])()){var e;return St(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function At(){return Object(r["k"])()&&10===document.documentMode}function kt(t=Object(r["h"])()){return St(t)||Ot(t)||Tt(t)||Et(t)||/windows phone/i.test(t)||_t(t)}function Ct(){try{return!(!window||window===window.top)}catch(t){return!1}}
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
 */function xt(t,e=[]){let n;switch(t){case"Browser":n=vt(Object(r["h"])());break;case"Worker":n=`${vt(Object(r["h"])())}-${t}`;break;default:n=t}const o=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${i["a"]}/${o}`}
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
 */class jt{constructor(t,e){this.app=t,this.config=e,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rt(this),this.idTokenSubscription=new Rt(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=m,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=e.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=k(e)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await mt.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t):void 0}async initializeCurrentUser(t){var e;let n=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,i=null===n||void 0===n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(t);r&&r!==i||!(null===o||void 0===o?void 0:o.user)||(n=o.user)}return n?n._redirectEventId?(T(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await ot(t)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=M()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?Object(r["g"])(t):null;return e&&T(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&T(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(k(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new r["a"]("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&k(t)||this._popupRedirectResolver;T(e,this,"argument-error"),this.redirectPersistenceManager=await mt.create(this,[k(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"===typeof e?e:e.next.bind(e),o=this._isInitialized?Promise.resolve():this._initializationPromise;return T(o,this,"internal-error"),o.then(()=>i(this.currentUser)),"function"===typeof e?t.addObserver(e,n,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return T(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=xt(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId),t}}function Nt(t){return Object(r["g"])(t)}class Rt{constructor(t){this.auth=t,this.observer=null,this.addObserver=Object(r["d"])(t=>this.observer=t)}get next(){return T(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
class Dt{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return S("not implemented")}_getIdTokenResponse(t){return S("not implemented")}_linkToIdToken(t,e){return S("not implemented")}_getReauthenticationResolver(t){return S("not implemented")}}
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
 */async function Mt(t,e){return $(t,"POST","/v1/accounts:update",e)}
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
async function Pt(t,e){return H(t,"POST","/v1/accounts:signInWithPassword",B(t,e))}
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
async function Lt(t,e){return H(t,"POST","/v1/accounts:signInWithEmailLink",B(t,e))}async function Vt(t,e){return H(t,"POST","/v1/accounts:signInWithEmailLink",B(t,e))}
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
 */class Ut extends Dt{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new Ut(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new Ut(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return Pt(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Lt(t,{email:this._email,oobCode:this._password});default:b(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return Mt(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Vt(t,{idToken:e,email:this._email,oobCode:this._password});default:b(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
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
 */async function Ft(t,e){return H(t,"POST","/v1/accounts:signInWithIdp",B(t,e))}
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
 */const Bt="http://localhost";class $t extends Dt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new $t(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):b("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=o(e,["providerId","signInMethod"]);if(!n||!r)return null;const s=new $t(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(t){const e=this.buildRequest();return Ft(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Ft(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Ft(t,e)}buildRequest(){const t={requestUri:Bt,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=Object(r["n"])(e)}return t}}
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
 */async function qt(t,e){return $(t,"POST","/v1/accounts:sendVerificationCode",B(t,e))}async function Ht(t,e){return H(t,"POST","/v1/accounts:signInWithPhoneNumber",B(t,e))}async function zt(t,e){const n=await H(t,"POST","/v1/accounts:signInWithPhoneNumber",B(t,e));if(n.temporaryProof)throw G(t,"account-exists-with-different-credential",n);return n}const Wt={["USER_NOT_FOUND"]:"user-not-found"};async function Gt(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return H(t,"POST","/v1/accounts:signInWithPhoneNumber",B(t,n),Wt)}
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
 */class Kt extends Dt{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new Kt({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new Kt({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return Ht(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return zt(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return Gt(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}=t;return n||e||r||i?new Kt({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
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
 */function Yt(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Xt(t){const e=Object(r["o"])(Object(r["f"])(t))["link"],n=e?Object(r["o"])(Object(r["f"])(e))["deep_link_id"]:null,i=Object(r["o"])(Object(r["f"])(t))["deep_link_id"],o=i?Object(r["o"])(Object(r["f"])(i))["link"]:null;return o||i||n||e||t}class Jt{constructor(t){var e,n,i,o,s,a;const c=Object(r["o"])(Object(r["f"])(t)),u=null!==(e=c["apiKey"])&&void 0!==e?e:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=Yt(null!==(i=c["mode"])&&void 0!==i?i:null);T(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(o=c["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(t){const e=Xt(t);try{return new Jt(e)}catch(n){return null}}}
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
class Qt{constructor(){this.providerId=Qt.PROVIDER_ID}static credential(t,e){return Ut._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=Jt.parseLink(e);return T(n,"argument-error"),Ut._fromEmailAndCode(t,n.code,n.tenantId)}}Qt.PROVIDER_ID="password",Qt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Qt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class Zt{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
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
 */class te extends Zt{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
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
class ee extends te{constructor(){super("facebook.com")}static credential(t){return $t._fromParams({providerId:ee.PROVIDER_ID,signInMethod:ee.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ee.credentialFromTaggedObject(t)}static credentialFromError(t){return ee.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return ee.credential(t.oauthAccessToken)}catch(e){return null}}}ee.FACEBOOK_SIGN_IN_METHOD="facebook.com",ee.PROVIDER_ID="facebook.com";
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
class ne extends te{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return $t._fromParams({providerId:ne.PROVIDER_ID,signInMethod:ne.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return ne.credentialFromTaggedObject(t)}static credentialFromError(t){return ne.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return ne.credential(e,n)}catch(r){return null}}}ne.GOOGLE_SIGN_IN_METHOD="google.com",ne.PROVIDER_ID="google.com";
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
class re extends te{constructor(){super("github.com")}static credential(t){return $t._fromParams({providerId:re.PROVIDER_ID,signInMethod:re.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return re.credentialFromTaggedObject(t)}static credentialFromError(t){return re.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return re.credential(t.oauthAccessToken)}catch(e){return null}}}re.GITHUB_SIGN_IN_METHOD="github.com",re.PROVIDER_ID="github.com";
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
class ie extends te{constructor(){super("twitter.com")}static credential(t,e){return $t._fromParams({providerId:ie.PROVIDER_ID,signInMethod:ie.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return ie.credentialFromTaggedObject(t)}static credentialFromError(t){return ie.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return ie.credential(e,n)}catch(r){return null}}}
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
async function oe(t,e){return H(t,"POST","/v1/accounts:signUp",B(t,e))}
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
 */ie.TWITTER_SIGN_IN_METHOD="twitter.com",ie.PROVIDER_ID="twitter.com";class se{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const i=await ft._fromIdTokenResponse(t,n,r),o=ae(n),s=new se({user:i,providerId:o,_tokenResponse:n,operationType:e});return s}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=ae(n);return new se({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function ae(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
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
class ce extends r["b"]{constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,ce.prototype),this.customData={appName:t.name,tenantId:null!==(i=t.tenantId)&&void 0!==i?i:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,r){return new ce(t,e,n,r)}}function ue(t,e,n,r){const i="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw ce._fromErrorAndOperation(t,n,e,r);throw n})}
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
 */async function le(t,e,n=!1){const r=await et(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return se._forOperation(t,"link",r)}
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
async function he(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const o=await et(t,ue(r,i,e,t),n);T(o.idToken,r,"internal-error");const s=Z(o.idToken);T(s,r,"internal-error");const{sub:a}=s;return T(t.uid===a,r,"user-mismatch"),se._forOperation(t,i,o)}catch(o){throw"auth/user-not-found"===(null===o||void 0===o?void 0:o.code)&&b(r,"user-mismatch"),o}}
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
 */async function fe(t,e,n=!1){const r="signIn",i=await ue(t,r,e),o=await se._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function de(t,e){return fe(Nt(t),e)}async function pe(t,e){return he(Object(r["g"])(t),e)}
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
 */async function ge(t,e,n){const r=Nt(t),i=await oe(r,{returnSecureToken:!0,email:e,password:n}),o=await se._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function me(t,e,n){return de(Object(r["g"])(t),Qt.credential(e,n))}
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
 */function ve(t,e){return ye(Object(r["g"])(t),e,null)}async function ye(t,e,n){const{auth:r}=t,i=await t.getIdToken(),o={idToken:i,returnSecureToken:!0};e&&(o.email=e),n&&(o.password=n);const s=await et(t,Mt(r,o));await t._updateTokensIfNecessary(s,!0)}
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
function be(t,e){return $(t,"POST","/v2/accounts/mfaEnrollment:start",B(t,e))}function we(t,e){return $(t,"POST","/v2/accounts/mfaEnrollment:finalize",B(t,e))}new WeakMap;const _e="__sak";
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
 */class Oe{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(_e,"1"),this.storage.removeItem(_e),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */function Ee(){const t=Object(r["h"])();return bt(t)||St(t)}const Te=1e3,Se=10;class Ie extends Oe{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ee()&&Ct(),this.fallbackToPolling=kt(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys((t,e,n)=>{this.notifyListeners(t,n)});const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);At()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,Se):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)})},Te)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}Ie.type="LOCAL";const Ae=Ie;
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
 */class ke extends Oe{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}ke.type="SESSION";const Ce=ke;
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
 */function xe(t){return Promise.all(t.map(async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}}))}
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
 */class je{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(e=>e.isListeningto(t));if(e)return e;const n=new je(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,o=this.handlersMap[r];if(!(null===o||void 0===o?void 0:o.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map(async t=>t(e.origin,i)),a=await xe(s);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function Ne(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(10*Math.random());return t+n}
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
 */je.receivers=[];class Re{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((s,a)=>{const c=Ne("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);o={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),s(e.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}
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
 */function De(){return window}function Me(t){De().location.href=t}
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
 */function Pe(){return"undefined"!==typeof De()["WorkerGlobalScope"]&&"function"===typeof De()["importScripts"]}async function Le(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function Ve(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function Ue(){return Pe()?self:null}
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
 */const Fe="firebaseLocalStorageDb",Be=1,$e="firebaseLocalStorage",qe="fbase_key";class He{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function ze(t,e){return t.transaction([$e],e?"readwrite":"readonly").objectStore($e)}function We(){const t=indexedDB.deleteDatabase(Fe);return new He(t).toPromise()}function Ge(){const t=indexedDB.open(Fe,Be);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const e=t.result;try{e.createObjectStore($e,{keyPath:qe})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains($e)?e(n):(n.close(),await We(),e(await Ge()))})})}async function Ke(t,e,n){const r=ze(t,!0).put({[qe]:e,value:n});return new He(r).toPromise()}async function Ye(t,e){const n=ze(t,!1).get(e),r=await new He(n).toPromise();return void 0===r?null:r.value}function Xe(t,e){const n=ze(t,!0).delete(e);return new He(n).toPromise()}const Je=800,Qe=3;class Ze{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Ge()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>Qe)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Pe()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=je._getInstance(Ue()),this.receiver._subscribe("keyChanged",async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}}),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await Le(),!this.activeServiceWorker)return;this.sender=new Re(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&Ve()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ge();return await Ke(t,_e,"1"),await Xe(t,_e),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ke(n,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(e=>Ye(e,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>Xe(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(t=>{const e=ze(t,!1).getAll();return new He(e).toPromise()});if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Je)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Ze.type="LOCAL";const tn=Ze;
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
 */function en(t,e){return $(t,"POST","/v2/accounts/mfaSignIn:start",B(t,e))}function nn(t,e){return $(t,"POST","/v2/accounts/mfaSignIn:finalize",B(t,e))}
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
function rn(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function on(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=w("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",rn().appendChild(r)})}function sn(t){return`__${t}${Math.floor(1e6*Math.random())}`}
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
sn("rcb"),new P(3e4,6e4);
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
const an="recaptcha";async function cn(t,e,n){var r;const i=await n.verify();try{let o;if(T("string"===typeof i,t,"argument-error"),T(n.type===an,t,"argument-error"),o="string"===typeof e?{phoneNumber:e}:e,"session"in o){const e=o.session;if("phoneNumber"in o){T("enroll"===e.type,t,"internal-error");const n=await be(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{T("signin"===e.type,t,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;T(n,t,"missing-multi-factor-info");const s=await en(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await qt(t,{phoneNumber:o.phoneNumber,recaptchaToken:i});return e}}finally{n._reset()}}
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
class un{constructor(t){this.providerId=un.PROVIDER_ID,this.auth=Nt(t)}verifyPhoneNumber(t,e){return cn(this.auth,t,Object(r["g"])(e))}static credential(t,e){return Kt._fromVerification(t,e)}static credentialFromResult(t){const e=t;return un.credentialFromTaggedObject(e)}static credentialFromError(t){return un.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?Kt._fromTokenResponse(e,n):null}}
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
function ln(t,e){return e?k(e):(T(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
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
 */un.PROVIDER_ID="phone",un.PHONE_SIGN_IN_METHOD="phone";class hn extends Dt{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Ft(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Ft(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Ft(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function fn(t){return fe(t.auth,new hn(t),t.bypassAuthState)}function dn(t){const{auth:e,user:n}=t;return T(n,e,"internal-error"),he(n,new hn(t),t.bypassAuthState)}async function pn(t){const{auth:e,user:n}=t;return T(n,e,"internal-error"),le(n,new hn(t),t.bypassAuthState)}
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
 */class gn{constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=t;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return fn;case"linkViaPopup":case"linkViaRedirect":return pn;case"reauthViaPopup":case"reauthViaRedirect":return dn;default:b(this.auth,"internal-error")}}resolve(t){I(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){I(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const mn=new P(2e3,1e4);async function vn(t,e,n){const r=Nt(t);O(t,e,Zt);const i=ln(r,n),o=new yn(r,"signInViaPopup",e,i);return o.executeNotNull()}class yn extends gn{constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,yn.currentPopupAction&&yn.currentPopupAction.cancel(),yn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return T(t,this.auth,"internal-error"),t}async onExecution(){I(1===this.filter.length,"Popup operations only handle one event");const t=Ne();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(w(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(w(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(w(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(t,mn.get())};t()}}yn.currentPopupAction=null;
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
const bn="pendingRedirect",wn=new Map;class _n extends gn{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=wn.get(this.auth._key());if(!t){try{const e=await On(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}wn.set(this.auth._key(),t)}return this.bypassAuthState||wn.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function On(t,e){const n=Tn(e),r=En(t);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function En(t){return k(t._redirectPersistence)}function Tn(t){return gt(bn,t.config.apiKey,t.name)}
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
 */async function Sn(t,e,n=!1){const r=Nt(t),i=ln(r,e),o=new _n(r,i,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}
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
const In=6e5;class An{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!xn(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!Cn(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(w(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=In&&this.cachedEventUids.clear(),this.cachedEventUids.has(kn(t))}saveEventToCache(t){this.cachedEventUids.add(kn(t)),this.lastProcessedEventTime=Date.now()}}function kn(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(t=>t).join("-")}function Cn({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function xn(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Cn(t);default:return!1}}
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
 */async function jn(t,e={}){return $(t,"GET","/v1/projects",e)}
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
 */const Nn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Rn=/^https?/;async function Dn(t){if(t.config.emulator)return;const{authorizedDomains:e}=await jn(t);for(const r of e)try{if(Mn(r))return}catch(n){}b(t,"unauthorized-domain")}function Mn(t){const e=j(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Rn.test(n))return!1;if(Nn.test(t))return r===t;const i=t.replace(/\./g,"\\."),o=new RegExp("^(.+\\."+i+"|"+i+")$","i");return o.test(r)}
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
 */const Pn=new P(3e4,6e4);function Ln(){const t=De().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function Vn(t){return new Promise((e,n)=>{var r,i,o;function s(){Ln(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ln(),n(w(t,"network-request-failed"))},timeout:Pn.get()})}if(null===(i=null===(r=De().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(o=De().gapi)||void 0===o?void 0:o.load)){const e=sn("iframefcb");return De()[e]=()=>{gapi.load?s():n(w(t,"network-request-failed"))},on("https://apis.google.com/js/api.js?onload="+e).catch(t=>n(t))}s()}}).catch(t=>{throw Un=null,t})}let Un=null;function Fn(t){return Un=Un||Vn(t),Un}
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
 */const Bn=new P(5e3,15e3),$n="__/auth/iframe",qn="emulator/auth/iframe",Hn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Wn(t){const e=t.config;T(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?L(e,qn):`https://${t.config.authDomain}/${$n}`,o={apiKey:e.apiKey,appName:t.name,v:i["a"]},s=zn.get(t.config.apiHost);s&&(o.eid=s);const a=t._getFrameworks();return a.length&&(o.fw=a.join(",")),`${n}?${Object(r["n"])(o).slice(1)}`}async function Gn(t){const e=await Fn(t),n=De().gapi;return T(n,t,"internal-error"),e.open({where:document.body,url:Wn(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Hn,dontclear:!0},e=>new Promise(async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=w(t,"network-request-failed"),o=De().setTimeout(()=>{r(i)},Bn.get());function s(){De().clearTimeout(o),n(e)}e.ping(s).then(s,()=>{r(i)})}))}
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
 */const Kn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Yn=500,Xn=600,Jn="_blank",Qn="http://localhost";class Zn{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function tr(t,e,n,i=Yn,o=Xn){const s=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Kn),{width:i.toString(),height:o.toString(),top:s,left:a}),l=Object(r["h"])().toLowerCase();n&&(c=wt(l)?Jn:n),yt(l)&&(e=e||Qn,u.scrollbars="yes");const h=Object.entries(u).reduce((t,[e,n])=>`${t}${e}=${n},`,"");if(It(l)&&"_self"!==c)return er(e||"",c),new Zn(null);const f=window.open(e||"",c,h);T(f,t,"popup-blocked");try{f.focus()}catch(d){}return new Zn(f)}function er(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */const nr="__/auth/handler",rr="emulator/auth/handler";function ir(t,e,n,o,s,a){T(t.config.authDomain,t,"auth-domain-config-required"),T(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:o,v:i["a"],eventId:s};if(e instanceof Zt){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",Object(r["j"])(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))c[t]=e}if(e instanceof te){const t=e.getScopes().filter(t=>""!==t);t.length>0&&(c.scopes=t.join(","))}t.tenantId&&(c.tid=t.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${or(t)}?${Object(r["n"])(u).slice(1)}`}function or({config:t}){return t.emulator?L(t,rr):`https://${t.authDomain}/${nr}`}
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
 */const sr="webStorageSupport";class ar{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ce,this._completeRedirectFn=Sn}async _openPopup(t,e,n,r){var i;I(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const o=ir(t,e,n,j(),r);return tr(t,o,Ne())}async _openRedirect(t,e,n,r){return await this._originValidation(t),Me(ir(t,e,n,j(),r)),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(I(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch(()=>{delete this.eventManagers[e]}),n}async initAndGetManager(t){const e=await Gn(t),n=new An(t);return e.register("authEvent",e=>{T(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const r=n.onEvent(e.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(sr,{type:sr},n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[sr];void 0!==i&&e(!!i),b(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Dn(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return kt()||bt()||St()}}const cr=ar;class ur{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return S("unexpected MultiFactorSessionType")}}}class lr extends ur{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new lr(t)}_finalizeEnroll(t,e,n){return we(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return nn(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class hr{constructor(){}static assertion(t){return lr._fromCredential(t)}}hr.FACTOR_ID="phone";var fr="@firebase/auth",dr="0.19.9";
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
class pr{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){T(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
 */function gr(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function mr(t){Object(i["c"])(new d["a"]("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:o}=r.options;return(e=>{T(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),T(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:e.name});const r={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xt(t)},s=new jt(e,r);return x(s,n),s})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{const r=t.getProvider("auth-internal");r.initialize()})),Object(i["c"])(new d["a"]("auth-internal",t=>{const e=Nt(t.getProvider("auth").getImmediate());return(t=>new pr(t))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(i["g"])(fr,dr,gr(t)),Object(i["g"])(fr,dr,"esm2017")}
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
 */function vr(t=Object(i["e"])()){const e=Object(i["b"])(t,"auth");return e.isInitialized()?e.getImmediate():C(t,{popupRedirectResolver:cr,persistence:[tn,Ae,Ce]})}mr("Browser")},ecee:function(t,e,n){"use strict";(function(t){
/*!
 * Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
function r(t){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){a(t,e,n[e])}))}return t}function u(t,e){return f(t)||p(t,e)||m()}function l(t){return h(t)||d(t)||g()}function h(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function f(t){if(Array.isArray(t))return t}function d(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function p(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var s,a=t[Symbol.iterator]();!(r=(s=a.next()).done);r=!0)if(n.push(s.value),e&&n.length===e)break}catch(c){i=!0,o=c}finally{try{r||null==a["return"]||a["return"]()}finally{if(i)throw o}}return n}function g(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function m(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}n.d(e,"b",(function(){return ce})),n.d(e,"a",(function(){return q})),n.d(e,"e",(function(){return ue})),n.d(e,"c",(function(){return oe})),n.d(e,"d",(function(){return ae}));var v=function(){},y={},b={},w={mark:v,measure:v};try{"undefined"!==typeof window&&(y=window),"undefined"!==typeof document&&(b=document),"undefined"!==typeof MutationObserver&&MutationObserver,"undefined"!==typeof performance&&(w=performance)}catch(le){}var _=y.navigator||{},O=_.userAgent,E=void 0===O?"":O,T=y,S=b,I=w,A=(T.document,!!S.documentElement&&!!S.head&&"function"===typeof S.addEventListener&&"function"===typeof S.createElement),k=~E.indexOf("MSIE")||~E.indexOf("Trident/"),C="___FONT_AWESOME___",x=16,j="fa",N="svg-inline--fa",R="data-fa-i2svg",D=(function(){try{}catch(le){return!1}}(),[1,2,3,4,5,6,7,8,9,10]),M=D.concat([11,12,13,14,15,16,17,18,19,20]),P={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},L=(["xs","sm","lg","fw","ul","li","border","pull-left","pull-right","spin","pulse","rotate-90","rotate-180","rotate-270","flip-horizontal","flip-vertical","flip-both","stack","stack-1x","stack-2x","inverse","layers","layers-text","layers-counter",P.GROUP,P.SWAP_OPACITY,P.PRIMARY,P.SECONDARY].concat(D.map((function(t){return"".concat(t,"x")}))).concat(M.map((function(t){return"w-".concat(t)}))),T.FontAwesomeConfig||{});function V(t){var e=S.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function U(t){return""===t||"false"!==t&&("true"===t||t)}if(S&&"function"===typeof S.querySelector){var F=[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];F.forEach((function(t){var e=u(t,2),n=e[0],r=e[1],i=U(V(n));void 0!==i&&null!==i&&(L[r]=i)}))}var B={familyPrefix:j,replacementClass:N,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},$=c({},B,L);$.autoReplaceSvg||($.observeMutations=!1);var q=c({},$);T.FontAwesomeConfig=q;var H=T||{};H[C]||(H[C]={}),H[C].styles||(H[C].styles={}),H[C].hooks||(H[C].hooks={}),H[C].shims||(H[C].shims=[]);var z=H[C],W=[],G=function t(){S.removeEventListener("DOMContentLoaded",t),K=1,W.map((function(t){return t()}))},K=!1;A&&(K=(S.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(S.readyState),K||S.addEventListener("DOMContentLoaded",G));var Y,X="pending",J="settled",Q="fulfilled",Z="rejected",tt=function(){},et="undefined"!==typeof t&&"undefined"!==typeof t.process&&"function"===typeof t.process.emit,nt="undefined"===typeof setImmediate?setTimeout:setImmediate,rt=[];function it(){for(var t=0;t<rt.length;t++)rt[t][0](rt[t][1]);rt=[],Y=!1}function ot(t,e){rt.push([t,e]),Y||(Y=!0,nt(it,0))}function st(t,e){function n(t){ut(e,t)}function r(t){ht(e,t)}try{t(n,r)}catch(le){r(le)}}function at(t){var e=t.owner,n=e._state,r=e._data,i=t[n],o=t.then;if("function"===typeof i){n=Q;try{r=i(r)}catch(le){ht(o,le)}}ct(o,r)||(n===Q&&ut(o,r),n===Z&&ht(o,r))}function ct(t,e){var n;try{if(t===e)throw new TypeError("A promises callback cannot return that same promise.");if(e&&("function"===typeof e||"object"===r(e))){var i=e.then;if("function"===typeof i)return i.call(e,(function(r){n||(n=!0,e===r?lt(t,r):ut(t,r))}),(function(e){n||(n=!0,ht(t,e))})),!0}}catch(le){return n||ht(t,le),!0}return!1}function ut(t,e){t!==e&&ct(t,e)||lt(t,e)}function lt(t,e){t._state===X&&(t._state=J,t._data=e,ot(dt,t))}function ht(t,e){t._state===X&&(t._state=J,t._data=e,ot(pt,t))}function ft(t){t._then=t._then.forEach(at)}function dt(t){t._state=Q,ft(t)}function pt(e){e._state=Z,ft(e),!e._handled&&et&&t.process.emit("unhandledRejection",e._data,e)}function gt(e){t.process.emit("rejectionHandled",e)}function mt(t){if("function"!==typeof t)throw new TypeError("Promise resolver "+t+" is not a function");if(this instanceof mt===!1)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],st(t,this)}mt.prototype={constructor:mt,_state:X,_then:null,_data:void 0,_handled:!1,then:function(t,e){var n={owner:this,then:new this.constructor(tt),fulfilled:t,rejected:e};return!e&&!t||this._handled||(this._handled=!0,this._state===Z&&et&&ot(gt,this)),this._state===Q||this._state===Z?ot(at,n):this._then.push(n),n.then},catch:function(t){return this.then(null,t)}},mt.all=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.all().");return new mt((function(e,n){var r=[],i=0;function o(t){return i++,function(n){r[t]=n,--i||e(r)}}for(var s,a=0;a<t.length;a++)s=t[a],s&&"function"===typeof s.then?s.then(o(a),n):r[a]=s;i||e(r)}))},mt.race=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.race().");return new mt((function(e,n){for(var r,i=0;i<t.length;i++)r=t[i],r&&"function"===typeof r.then?r.then(e,n):e(r)}))},mt.resolve=function(t){return t&&"object"===r(t)&&t.constructor===mt?t:new mt((function(e){e(t)}))},mt.reject=function(t){return new mt((function(e,n){n(t)}))};var vt=x,yt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function bt(t){if(t&&A){var e=S.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=S.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}return S.head.insertBefore(e,r),t}}var wt="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function _t(){var t=12,e="";while(t-- >0)e+=wt[62*Math.random()|0];return e}function Ot(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Et(t){return Object.keys(t||{}).reduce((function(e,n){return e+"".concat(n,'="').concat(Ot(t[n]),'" ')}),"").trim()}function Tt(t){return Object.keys(t||{}).reduce((function(e,n){return e+"".concat(n,": ").concat(t[n],";")}),"")}function St(t){return t.size!==yt.size||t.x!==yt.x||t.y!==yt.y||t.rotate!==yt.rotate||t.flipX||t.flipY}function It(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(32*e.x,", ").concat(32*e.y,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(o," ").concat(s," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:c,path:u}}function At(t){var e=t.transform,n=t.width,r=void 0===n?x:n,i=t.height,o=void 0===i?x:i,s=t.startCentered,a=void 0!==s&&s,c="";return c+=a&&k?"translate(".concat(e.x/vt-r/2,"em, ").concat(e.y/vt-o/2,"em) "):a?"translate(calc(-50% + ".concat(e.x/vt,"em), calc(-50% + ").concat(e.y/vt,"em)) "):"translate(".concat(e.x/vt,"em, ").concat(e.y/vt,"em) "),c+="scale(".concat(e.size/vt*(e.flipX?-1:1),", ").concat(e.size/vt*(e.flipY?-1:1),") "),c+="rotate(".concat(e.rotate,"deg) "),c}var kt={x:0,y:0,width:"100%",height:"100%"};function Ct(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function xt(t){return"g"===t.tag?t.children:[t]}function jt(t){var e=t.children,n=t.attributes,r=t.main,i=t.mask,o=t.maskId,s=t.transform,a=r.width,u=r.icon,l=i.width,h=i.icon,f=It({transform:s,containerWidth:l,iconWidth:a}),d={tag:"rect",attributes:c({},kt,{fill:"white"})},p=u.children?{children:u.children.map(Ct)}:{},g={tag:"g",attributes:c({},f.inner),children:[Ct(c({tag:u.tag,attributes:c({},u.attributes,f.path)},p))]},m={tag:"g",attributes:c({},f.outer),children:[g]},v="mask-".concat(o||_t()),y="clip-".concat(o||_t()),b={tag:"mask",attributes:c({},kt,{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[d,m]},w={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:xt(h)},b]};return e.push(w,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(v,")")},kt)}),{children:e,attributes:n}}function Nt(t){var e=t.children,n=t.attributes,r=t.main,i=t.transform,o=t.styles,s=Tt(o);if(s.length>0&&(n["style"]=s),St(i)){var a=It({transform:i,containerWidth:r.width,iconWidth:r.width});e.push({tag:"g",attributes:c({},a.outer),children:[{tag:"g",attributes:c({},a.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:c({},r.icon.attributes,a.path)}]}]})}else e.push(r.icon);return{children:e,attributes:n}}function Rt(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,o=t.styles,s=t.transform;if(St(s)&&n.found&&!r.found){var a=n.width,u=n.height,l={x:a/u/2,y:.5};i["style"]=Tt(c({},o,{"transform-origin":"".concat(l.x+s.x/16,"em ").concat(l.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function Dt(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,o=t.symbol,s=!0===o?"".concat(e,"-").concat(q.familyPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c({},i,{id:s}),children:r}]}]}function Mt(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,o=t.iconName,s=t.transform,a=t.symbol,u=t.title,l=t.maskId,h=t.titleId,f=t.extra,d=t.watchable,p=void 0!==d&&d,g=r.found?r:n,m=g.width,v=g.height,y="fak"===i,b=y?"":"fa-w-".concat(Math.ceil(m/v*16)),w=[q.replacementClass,o?"".concat(q.familyPrefix,"-").concat(o):"",b].filter((function(t){return-1===f.classes.indexOf(t)})).filter((function(t){return""!==t||!!t})).concat(f.classes).join(" "),_={children:[],attributes:c({},f.attributes,{"data-prefix":i,"data-icon":o,class:w,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(v)})},O=y&&!~f.classes.indexOf("fa-fw")?{width:"".concat(m/v*16*.0625,"em")}:{};p&&(_.attributes[R]=""),u&&_.children.push({tag:"title",attributes:{id:_.attributes["aria-labelledby"]||"title-".concat(h||_t())},children:[u]});var E=c({},_,{prefix:i,iconName:o,main:n,mask:r,maskId:l,transform:s,symbol:a,styles:c({},O,f.styles)}),T=r.found&&n.found?jt(E):Nt(E),S=T.children,I=T.attributes;return E.children=S,E.attributes=I,a?Dt(E):Rt(E)}function Pt(t){var e=t.content,n=t.width,r=t.height,i=t.transform,o=t.title,s=t.extra,a=t.watchable,u=void 0!==a&&a,l=c({},s.attributes,o?{title:o}:{},{class:s.classes.join(" ")});u&&(l[R]="");var h=c({},s.styles);St(i)&&(h["transform"]=At({transform:i,startCentered:!0,width:n,height:r}),h["-webkit-transform"]=h["transform"]);var f=Tt(h);f.length>0&&(l["style"]=f);var d=[];return d.push({tag:"span",attributes:l,children:[e]}),o&&d.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),d}var Lt=function(){},Vt=(q.measurePerformance&&I&&I.mark&&I.measure,function(t,e){return function(n,r,i,o){return t.call(e,n,r,i,o)}}),Ut=function(t,e,n,r){var i,o,s,a=Object.keys(t),c=a.length,u=void 0!==r?Vt(e,r):e;for(void 0===n?(i=1,s=t[a[0]]):(i=0,s=n);i<c;i++)o=a[i],s=u(s,t[o],o,t);return s};function Ft(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.skipHooks,i=void 0!==r&&r,o=Object.keys(e).reduce((function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t}),{});"function"!==typeof z.hooks.addPack||i?z.styles[t]=c({},z.styles[t]||{},o):z.hooks.addPack(t,o),"fas"===t&&Ft("fa",e)}var Bt=z.styles,$t=z.shims,qt=function(){var t=function(t){return Ut(Bt,(function(e,n,r){return e[r]=Ut(n,t,{}),e}),{})};t((function(t,e,n){return e[3]&&(t[e[3]]=n),t})),t((function(t,e,n){var r=e[2];return t[n]=n,r.forEach((function(e){t[e]=n})),t}));var e="far"in Bt;Ut($t,(function(t,n){var r=n[0],i=n[1],o=n[2];return"far"!==i||e||(i="fas"),t[r]={prefix:i,iconName:o},t}),{})};qt();z.styles;function Ht(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}function zt(t){var e=t.tag,n=t.attributes,r=void 0===n?{}:n,i=t.children,o=void 0===i?[]:i;return"string"===typeof t?Ot(t):"<".concat(e," ").concat(Et(r),">").concat(o.map(zt).join(""),"</").concat(e,">")}var Wt=function(t){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t?t.toLowerCase().split(" ").reduce((function(t,e){var n=e.toLowerCase().split("-"),r=n[0],i=n.slice(1).join("-");if(r&&"h"===i)return t.flipX=!0,t;if(r&&"v"===i)return t.flipY=!0,t;if(i=parseFloat(i),isNaN(i))return t;switch(r){case"grow":t.size=t.size+i;break;case"shrink":t.size=t.size-i;break;case"left":t.x=t.x-i;break;case"right":t.x=t.x+i;break;case"up":t.y=t.y-i;break;case"down":t.y=t.y+i;break;case"rotate":t.rotate=t.rotate+i;break}return t}),e):e};function Gt(t){this.name="MissingIcon",this.message=t||"Icon unavailable",this.stack=(new Error).stack}Gt.prototype=Object.create(Error.prototype),Gt.prototype.constructor=Gt;var Kt={fill:"currentColor"},Yt={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},Xt=(c({},Kt,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}),c({},Yt,{attributeName:"opacity"}));c({},Kt,{cx:"256",cy:"364",r:"28"}),c({},Yt,{attributeName:"r",values:"28;14;28;28;14;28;"}),c({},Xt,{values:"1;0;1;1;0;1;"}),c({},Kt,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),c({},Xt,{values:"1;0;0;0;0;1;"}),c({},Kt,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),c({},Xt,{values:"0;0;1;1;0;0;"}),z.styles;function Jt(t){var e=t[0],n=t[1],r=t.slice(4),i=u(r,1),o=i[0],s=null;return s=Array.isArray(o)?{tag:"g",attributes:{class:"".concat(q.familyPrefix,"-").concat(P.GROUP)},children:[{tag:"path",attributes:{class:"".concat(q.familyPrefix,"-").concat(P.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(q.familyPrefix,"-").concat(P.PRIMARY),fill:"currentColor",d:o[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:e,height:n,icon:s}}z.styles;var Qt='svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}';function Zt(){var t=j,e=N,n=q.familyPrefix,r=q.replacementClass,i=Qt;if(n!==t||r!==e){var o=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var te=function(){function t(){i(this,t),this.definitions={}}return s(t,[{key:"add",value:function(){for(var t=this,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach((function(e){t.definitions[e]=c({},t.definitions[e]||{},i[e]),Ft(e,i[e]),qt()}))}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,e){var n=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(n).map((function(e){var r=n[e],i=r.prefix,o=r.iconName,s=r.icon;t[i]||(t[i]={}),t[i][o]=s})),t}}]),t}();function ee(){q.autoAddCss&&!se&&(bt(Zt()),se=!0)}function ne(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map((function(t){return zt(t)}))}}),Object.defineProperty(t,"node",{get:function(){if(A){var e=S.createElement("div");return e.innerHTML=t.html,e.children}}}),t}function re(t){var e=t.prefix,n=void 0===e?"fa":e,r=t.iconName;if(r)return Ht(oe.definitions,n,r)||Ht(z.styles,n,r)}function ie(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=(e||{}).icon?e:re(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:re(i||{})),t(r,c({},n,{mask:i}))}}var oe=new te,se=!1,ae={transform:function(t){return Wt(t)}},ce=ie((function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.transform,r=void 0===n?yt:n,i=e.symbol,o=void 0!==i&&i,s=e.mask,a=void 0===s?null:s,u=e.maskId,l=void 0===u?null:u,h=e.title,f=void 0===h?null:h,d=e.titleId,p=void 0===d?null:d,g=e.classes,m=void 0===g?[]:g,v=e.attributes,y=void 0===v?{}:v,b=e.styles,w=void 0===b?{}:b;if(t){var _=t.prefix,O=t.iconName,E=t.icon;return ne(c({type:"icon"},t),(function(){return ee(),q.autoA11y&&(f?y["aria-labelledby"]="".concat(q.replacementClass,"-title-").concat(p||_t()):(y["aria-hidden"]="true",y["focusable"]="false")),Mt({icons:{main:Jt(E),mask:a?Jt(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:_,iconName:O,transform:c({},yt,r),symbol:o,title:f,maskId:l,titleId:p,extra:{attributes:y,styles:w,classes:m}})}))}})),ue=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.transform,r=void 0===n?yt:n,i=e.title,o=void 0===i?null:i,s=e.classes,a=void 0===s?[]:s,u=e.attributes,h=void 0===u?{}:u,f=e.styles,d=void 0===f?{}:f;return ne({type:"text",content:t},(function(){return ee(),Pt({content:t,transform:c({},yt,r),title:o,extra:{attributes:h,styles:d,classes:["".concat(q.familyPrefix,"-layers-text")].concat(l(a))}})}))}}).call(this,n("c8ba"))},edb5:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return o}));
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
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return e.join("")};
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
class o{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}
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
 */Error}).call(this,n("c8ba"))},f069:function(t,e,n){"use strict";var r=n("1c0b"),i=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)};t.exports.f=function(t){return new i(t)}},f5df:function(t,e,n){var r=n("00ee"),i=n("c6b6"),o=n("b622"),s=o("toStringTag"),a="Arguments"==i(function(){return arguments}()),c=function(t,e){try{return t[e]}catch(n){}};t.exports=r?i:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=c(e=Object(t),s))?n:a?i(e):"Object"==(r=i(e))&&"function"==typeof e.callee?"Arguments":r}},f772:function(t,e,n){var r=n("5692"),i=n("90e3"),o=r("keys");t.exports=function(t){return o[t]||(o[t]=i(t))}},fb6a:function(t,e,n){"use strict";var r=n("23e7"),i=n("861d"),o=n("e8b5"),s=n("23cb"),a=n("50c4"),c=n("fc6a"),u=n("8418"),l=n("b622"),h=n("1dde"),f=n("ae40"),d=h("slice"),p=f("slice",{ACCESSORS:!0,0:0,1:2}),g=l("species"),m=[].slice,v=Math.max;r({target:"Array",proto:!0,forced:!d||!p},{slice:function(t,e){var n,r,l,h=c(this),f=a(h.length),d=s(t,f),p=s(void 0===e?f:e,f);if(o(h)&&(n=h.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?i(n)&&(n=n[g],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return m.call(h,d,p);for(r=new(void 0===n?Array:n)(v(p-d,0)),l=0;d<p;d++,l++)d in h&&u(r,l,h[d]);return r.length=l,r}})},fc6a:function(t,e,n){var r=n("44ad"),i=n("1d80");t.exports=function(t){return r(i(t))}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(t,e,n){var r=n("4930");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fea9:function(t,e,n){var r=n("da84");t.exports=r.Promise},ffd6:function(t,e,n){var r=n("3729"),i=n("1310"),o="[object Symbol]";function s(t){return"symbol"==typeof t||i(t)&&r(t)==o}t.exports=s}}]);
//# sourceMappingURL=chunk-vendors.aa77c1cc.js.map