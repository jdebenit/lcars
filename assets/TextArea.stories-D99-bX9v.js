import{j as r}from"./jsx-runtime-DiklIkkE.js";import{R}from"./index-DRjF_FHU.js";const T="_container_50fjx_1",N="_fullWidth_50fjx_7",v="_label_50fjx_12",W="_inputWrapper_50fjx_20",A="_textarea_50fjx_26",y="_hasError_50fjx_44",I="_errorMessage_50fjx_49",S="_bracketLeft_50fjx_57",D="_bracketRight_50fjx_58",e={container:T,fullWidth:N,label:v,inputWrapper:W,textarea:A,hasError:y,errorMessage:I,bracketLeft:S,bracketRight:D,"color-orange":"_color-orange_50fjx_77","color-blue":"_color-blue_50fjx_82","color-purple":"_color-purple_50fjx_102","color-red":"_color-red_50fjx_107","color-tan":"_color-tan_50fjx_112","color-yellow":"_color-yellow_50fjx_117"},s=R.forwardRef(({label:n,error:t,fullWidth:g=!1,color:E="orange",className:b="",...h},j)=>r.jsxs("div",{className:`${e.fieldContainer} ${g?e.fullWidth:""} ${b}`,children:[n&&r.jsx("label",{className:e.label,children:n}),r.jsxs("div",{className:`${e.inputWrapper} ${e[`color-${E}`]} ${t?e.error:""}`,children:[r.jsx("div",{className:e.bracketLeft}),r.jsx("textarea",{ref:j,className:e.textarea,...h}),r.jsx("div",{className:e.bracketRight})]}),t&&r.jsx("span",{className:e.errorMessage,children:t})]}));s.displayName="TextArea";s.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'orange' | 'blue' | 'purple' | 'red' | 'yellow' | 'tan'",elements:[{name:"literal",value:"'orange'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'red'"},{name:"literal",value:"'yellow'"},{name:"literal",value:"'tan'"}]},description:"",defaultValue:{value:"'orange'",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const C={title:"Form/TextArea",component:s,tags:["autodocs"],argTypes:{color:{control:"select",options:["orange","blue","purple","red","yellow","tan"]}}},a={args:{label:"LOG ENTRY",placeholder:"Enter mission log...",rows:5,color:"orange"}},l={args:{label:"DIAGNOSTIC REPORT",placeholder:"Enter full report...",rows:10,fullWidth:!0,color:"blue"}},o={args:{label:"ENCRYPTED MESSAGE",value:"*** ACCESS DENIED ***",error:"AUTHORIZATION REQUIRED",color:"red"}};var c,i,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'LOG ENTRY',
    placeholder: 'Enter mission log...',
    rows: 5,
    color: 'orange'
  }
}`,...(u=(i=a.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var p,d,f;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'DIAGNOSTIC REPORT',
    placeholder: 'Enter full report...',
    rows: 10,
    fullWidth: true,
    color: 'blue'
  }
}`,...(f=(d=l.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};var _,m,x;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'ENCRYPTED MESSAGE',
    value: '*** ACCESS DENIED ***',
    error: 'AUTHORIZATION REQUIRED',
    color: 'red'
  }
}`,...(x=(m=o.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};const k=["Default","FullWidth","WithError"];export{a as Default,l as FullWidth,o as WithError,k as __namedExportsOrder,C as default};
