import{j as F}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./index-D4lIrffr.js";const f=({children:m,style:g,disabled:e=!1,forceState:t,onClick:v})=>{const[h,n]=a.useState(!1),[y,o]=a.useState(!1),x=t?t==="hovered"||t==="pressed":h,S=t?t==="pressed":y,w=()=>e?"#E0E0E0":S||x?"rgba(17, 17, 17, 0.8)":"#111111",B=()=>e?"#BDBDBD":"#FFFFFF",E={display:"inline-flex",alignItems:"center",justifyContent:"center",borderRadius:"12px",backgroundColor:w(),color:B(),padding:"12px",fontFamily:"Pretendard, sans-serif",fontWeight:600,fontSize:"16px",lineHeight:1.48,letterSpacing:"-0.02em",border:"none",cursor:e?"not-allowed":"pointer",textAlign:"center",transition:"background 0.15s",width:"fit-content",opacity:e?.7:1};return F.jsx("button",{style:{...E,...g},disabled:e,onClick:v,onMouseEnter:()=>!e&&n(!0),onMouseLeave:()=>{n(!1),o(!1)},onMouseDown:()=>!e&&o(!0),onMouseUp:()=>o(!1),children:m})};f.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},forceState:{required:!1,tsType:{name:"union",raw:"'default' | 'hovered' | 'pressed'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'hovered'"},{name:"literal",value:"'pressed'"}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const T={title:"Button",component:f,parameters:{layout:"centered"},tags:["autodocs"]},r={args:{children:"다음",style:{width:335},forceState:"default"}},s={args:{children:"다음",forceState:"hovered",style:{width:335}}};var i,d,l;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: '다음',
    style: {
      width: 335
    },
    forceState: "default"
  }
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var u,c,p;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: '다음',
    forceState: 'hovered',
    style: {
      width: 335
    }
  }
}`,...(p=(c=s.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const q=["Default","HoveredAndPressed"];export{r as Default,s as HoveredAndPressed,q as __namedExportsOrder,T as default};
