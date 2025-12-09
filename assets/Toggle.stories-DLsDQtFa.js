import{j as r}from"./jsx-runtime-DiklIkkE.js";import{r as O}from"./index-DRjF_FHU.js";const $="_toggleContainer_i39j7_1",E="_indicator_i39j7_21",F="_statusText_i39j7_31",V="_label_i39j7_41",L="_checked_i39j7_51",M="_disabled_i39j7_92",a={toggleContainer:$,switch:"_switch_i39j7_9",indicator:E,statusText:F,label:V,checked:L,"color-orange":"_color-orange_i39j7_66","color-blue":"_color-blue_i39j7_71","color-purple":"_color-purple_i39j7_76","color-red":"_color-red_i39j7_81","color-yellow":"_color-yellow_i39j7_86",disabled:M},u=({label:e,checked:o,onChange:d,color:N="orange",disabled:g=!1,className:q="",...i})=>{const W=[a.toggleContainer,g?a.disabled:"",q].filter(Boolean).join(" "),R=A=>{g||d(!o),i.onClick&&i.onClick(A)};return r.jsxs("div",{className:W,onClick:R,...i,children:[r.jsxs("div",{className:`${a.switch} ${o?a.checked:""} ${a[`color-${N}`]}`,children:[r.jsx("div",{className:a.indicator}),r.jsx("div",{className:a.statusText,children:o?"ON":"OFF"})]}),e&&r.jsx("span",{className:a.label,children:e})]})};u.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{label:{required:!1,tsType:{name:"string"},description:""},checked:{required:!0,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},color:{required:!1,tsType:{name:"union",raw:"'orange' | 'blue' | 'purple' | 'red' | 'yellow'",elements:[{name:"literal",value:"'orange'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'red'"},{name:"literal",value:"'yellow'"}]},description:"",defaultValue:{value:"'orange'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}},composes:["Omit"]};const I={title:"Form/Toggle",component:u,parameters:{layout:"centered",backgrounds:{default:"dark",values:[{name:"dark",value:"#000000"}]}},tags:["autodocs"],argTypes:{color:{control:"select",options:["orange","blue","purple","red","yellow"]}}},p=e=>{const[o,d]=O.useState(e.checked||!1);return r.jsx(u,{...e,checked:o,onChange:d})},s={render:e=>r.jsx(p,{...e}),args:{label:"Main Power"}},l={render:e=>r.jsx(p,{...e}),args:{label:"Shields",checked:!0,color:"blue"}},t={render:e=>r.jsx(p,{...e}),args:{label:"Red Alert",checked:!0,color:"red"}},n={args:{label:"Warp Drive",checked:!1,disabled:!0}},c={args:{label:"Life Support",checked:!0,disabled:!0,color:"yellow"}};var m,_,b;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <ToggleWrapper {...args} />,
  args: {
    label: 'Main Power'
  }
}`,...(b=(_=s.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var h,f,k;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <ToggleWrapper {...args} />,
  args: {
    label: 'Shields',
    checked: true,
    color: 'blue'
  }
}`,...(k=(f=l.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var j,y,T;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <ToggleWrapper {...args} />,
  args: {
    label: 'Red Alert',
    checked: true,
    color: 'red'
  }
}`,...(T=(y=t.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var v,x,C;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Warp Drive',
    checked: false,
    disabled: true
  }
}`,...(C=(x=n.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var w,S,D;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Life Support',
    checked: true,
    disabled: true,
    color: 'yellow'
  }
}`,...(D=(S=c.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};const z=["Default","Checked","RedAlert","Disabled","DisabledChecked"];export{l as Checked,s as Default,n as Disabled,c as DisabledChecked,t as RedAlert,z as __namedExportsOrder,I as default};
