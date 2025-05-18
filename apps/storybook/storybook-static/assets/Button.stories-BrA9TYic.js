var d={exports:{}},r={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c;function f(){if(c)return r;c=1;var o=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function s(v,e,t){var a=null;if(t!==void 0&&(a=""+t),e.key!==void 0&&(a=""+e.key),"key"in e){t={};for(var i in e)i!=="key"&&(t[i]=e[i])}else t=e;return e=t.ref,{$$typeof:o,type:v,key:a,ref:e!==void 0?e:null,props:t}}return r.Fragment=u,r.jsx=s,r.jsxs=s,r}var p;function _(){return p||(p=1,d.exports=f()),d.exports}var E=_();function R({children:o,className:u="",...s}){return E.jsx("button",{className:`px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors ${u}`,...s,children:o})}R.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}},composes:["ButtonHTMLAttributes"]};const T={title:"Test/Button",component:R,parameters:{layout:"centered"},tags:["autodocs"]},n={args:{children:"Button"}};var l,m,x;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'Button'
  }
}`,...(x=(m=n.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};const h=["Primary"];export{n as Primary,h as __namedExportsOrder,T as default};
