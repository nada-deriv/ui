import{c as K,j as a}from"./clsx-UwsAJbxu.js";import{L as Q}from"./index-M50N3LVc.js";import{T as U}from"./index-pp0n8wl0.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";const c=({ariaLabel:m,children:p,color:d="primary",disabled:T=!1,icon:v,isFullWidth:$=!1,isLoading:e=!1,onClick:O,rounded:A="sm",size:g="md",textSize:G,type:H,variant:u="contained",className:R})=>{const h=u==="contained",I=K("derivs-button",`derivs-button__size--${g}`,`derivs-button__variant--${u}`,`derivs-button__rounded--${A}`,h&&`derivs-button__color--${d}`,$&&"derivs-button__full-width",R),J={contained:{black:"white",primary:"white","primary-light":"error",white:"general"},ghost:{black:"error",primary:"error","primary-light":"error",white:"error"},outlined:{black:"general",primary:"general","primary-light":"general",white:"general"}},X={black:"#333333",primary:"#FFFFFF","primary-light":"#EC3F3F",white:"#85ACB0"},D={lg:"md",md:"sm",sm:"xs"};return a.jsxs("button",{"aria-label":m,className:I,disabled:T||e,onClick:O,type:H,children:[e&&a.jsx("div",{className:"derivs-button__loader",children:a.jsx(Q,{color:h?X[d]:"#85ACB0",isFullScreen:!1})}),v&&!e&&v,p&&!e&&a.jsx(U,{align:"center",color:J[u][d],size:G||D[g]||"sm",weight:"bold",children:p})]})};try{c.displayName="Button",c.__docgenInfo={description:"",displayName:"Button",props:{ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"black"'},{value:'"white"'},{value:'"primary"'},{value:'"primary-light"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},isFullWidth:{defaultValue:{value:"false"},description:"",name:"isFullWidth",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},rounded:{defaultValue:{value:"sm"},description:"",name:"rounded",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"sm"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"md"'},{value:'"sm"'}]}},textSize:{defaultValue:null,description:"",name:"textSize",required:!1,type:{name:"enum",value:[{value:'"2xl"'},{value:'"2xs"'},{value:'"3xl"'},{value:'"4xl"'},{value:'"5xl"'},{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xl"'},{value:'"xs"'}]}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},variant:{defaultValue:{value:"contained"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"contained"'},{value:'"ghost"'},{value:'"outlined"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const ne={title:"Components/Button",component:c,parameters:{layout:"centered"},tags:["autodocs"],args:{variant:"contained",children:"Click Me!",color:"primary",isLoading:!1,disabled:!1,size:"md",isFullWidth:!1,rounded:"sm",type:"button",textSize:"sm"},argTypes:{variant:{options:["contained","outlined","ghost"],control:{type:"radio"}},ariaLabel:{table:{disable:!0}},isLoading:{options:["true","false"],control:{type:"boolean"}},color:{options:["primary","primary-light","black","white"],control:{type:"radio"}},onClick:{table:{disable:!0}},className:{table:{disable:!0}}}},r={args:{variant:"contained",children:"Click me!"}},n={args:{variant:"ghost",children:"Button",size:"lg"}},t={args:{variant:"outlined",children:"Button"}},o={name:"Contained (Primary)",args:{variant:"contained",children:"Button",color:"primary"}},i={name:"Contained (Primary Light)",args:{variant:"contained",children:"Button",color:"primary-light"}},l={name:"Contained (Black)",args:{variant:"contained",children:"Button",color:"black"}},s={name:"Contained (White)",args:{variant:"contained",children:"Button",color:"white"}};var y,f,b;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'contained',
    children: 'Click me!'
  }
}`,...(b=(f=r.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var C,B,_;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    children: 'Button',
    size: 'lg'
  }
}`,...(_=(B=n.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var x,k,q;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    children: 'Button'
  }
}`,...(q=(k=t.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var F,S,V;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Contained (Primary)',
  args: {
    variant: 'contained',
    children: 'Button',
    color: 'primary'
  }
}`,...(V=(S=o.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var w,L,z;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Contained (Primary Light)',
  args: {
    variant: 'contained',
    children: 'Button',
    color: 'primary-light'
  }
}`,...(z=(L=i.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var N,P,E;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Contained (Black)',
  args: {
    variant: 'contained',
    children: 'Button',
    color: 'black'
  }
}`,...(E=(P=l.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var W,j,M;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Contained (White)',
  args: {
    variant: 'contained',
    children: 'Button',
    color: 'white'
  }
}`,...(M=(j=s.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};const te=["Contained","Ghost","Outlined","ContainedPrimary","ContainedPrimaryLight","ContainedBlack","ContainedWhite"];export{r as Contained,l as ContainedBlack,o as ContainedPrimary,i as ContainedPrimaryLight,s as ContainedWhite,n as Ghost,t as Outlined,te as __namedExportsOrder,ne as default};
