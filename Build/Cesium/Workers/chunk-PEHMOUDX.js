/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.144.0
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */

var g=Object.create;var e=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var i=Object.getOwnPropertyNames;var j=Object.getPrototypeOf,k=Object.prototype.hasOwnProperty;var l=(b,a,c)=>a in b?e(b,a,{enumerable:!0,configurable:!0,writable:!0,value:c}):b[a]=c;var n=(b=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(b,{get:(a,c)=>(typeof require<"u"?require:a)[c]}):b)(function(b){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+b+'" is not supported')}),o=b=>a=>{var c=b[a];if(c)return c();throw new Error("Module not found in bundle: "+a)};var p=(b,a)=>()=>{try{return a||b((a={exports:{}}).exports,a),a.exports}catch(c){throw a=0,c}};var m=(b,a,c,f)=>{if(a&&typeof a=="object"||typeof a=="function")for(let d of i(a))!k.call(b,d)&&d!==c&&e(b,d,{get:()=>a[d],enumerable:!(f=h(a,d))||f.enumerable});return b};var q=(b,a,c)=>(c=b!=null?g(j(b)):{},m(a||!b||!b.__esModule?e(c,"default",{value:b,enumerable:!0}):c,b));var r=(b,a,c)=>l(b,typeof a!="symbol"?a+"":a,c);export{n as a,o as b,p as c,q as d,r as e};
