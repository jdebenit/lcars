import{j as r}from"./jsx-runtime-DiklIkkE.js";import"./index-DRjF_FHU.js";const A="_alertContainer_rlqcn_1",S="_content_rlqcn_12",h="_title_rlqcn_23",y="_message_rlqcn_31",I="_bracketLeft_rlqcn_37",R="_bracketRight_rlqcn_38",q="_flashing_rlqcn_88",b="_flash_rlqcn_88",e={alertContainer:A,content:S,title:h,message:y,bracketLeft:I,bracketRight:R,"color-blue":"_color-blue_rlqcn_54","color-yellow":"_color-yellow_rlqcn_58","color-red":"_color-red_rlqcn_62","color-tan":"_color-tan_rlqcn_66",flashing:q,flash:b},E=({message:f,type:_="info",flashing:T=!1,title:n,onDismiss:N,className:C=""})=>{const L={info:"blue",warning:"yellow",error:"red",success:"tan"}[_]||"blue";return r.jsxs("div",{className:`${e.alertContainer} ${e[`color-${L}`]} ${T?e.flashing:""} ${C}`,onClick:N,role:"alert",children:[r.jsx("div",{className:e.bracketLeft}),r.jsxs("div",{className:e.content,children:[n&&r.jsx("h4",{className:e.title,children:n}),r.jsx("p",{className:e.message,children:f})]}),r.jsx("div",{className:e.bracketRight})]})};E.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{message:{required:!0,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:"'info' | 'warning' | 'error' | 'success'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'success'"}]},description:"Type determines color: info=blue, warning=yellow, error=red",defaultValue:{value:"'info'",computed:!1}},flashing:{required:!1,tsType:{name:"boolean"},description:"If true, the alert pulses",defaultValue:{value:"false",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"If provided, renders big title text"},onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const D={title:"Feedback/Alert",component:E,tags:["autodocs"],argTypes:{type:{control:"select",options:["info","warning","error","success"]}}},s={args:{message:"SYSTEM SCAN COMPLETE. NO ANOMALIES DETECTED.",type:"info",title:"SCAN RESULTS"}},t={args:{message:"TEMPERATURE RISING IN SECTION 4. CHECK COOLANT LEVELS.",type:"warning",title:"WARNING",flashing:!0}},a={args:{message:"HULL BREACH DETECTED ON DECK 5. SEALING BULKHEADS.",type:"error",title:"CRITICAL ALERT",flashing:!0}};var o,l,c;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    message: 'SYSTEM SCAN COMPLETE. NO ANOMALIES DETECTED.',
    type: 'info',
    title: 'SCAN RESULTS'
  }
}`,...(c=(l=s.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var i,m,u;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    message: 'TEMPERATURE RISING IN SECTION 4. CHECK COOLANT LEVELS.',
    type: 'warning',
    title: 'WARNING',
    flashing: true
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var d,p,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    message: 'HULL BREACH DETECTED ON DECK 5. SEALING BULKHEADS.',
    type: 'error',
    title: 'CRITICAL ALERT',
    flashing: true
  }
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const x=["Info","Warning","Error"];export{a as Error,s as Info,t as Warning,x as __namedExportsOrder,D as default};
