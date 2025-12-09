import{j as r}from"./jsx-runtime-DiklIkkE.js";import{r as R}from"./index-DRjF_FHU.js";const A="_toggleContainer_i39j7_1",$="_indicator_i39j7_21",E="_statusText_i39j7_31",F="_label_i39j7_41",O="_checked_i39j7_51",V="_disabled_i39j7_92",a={toggleContainer:A,switch:"_switch_i39j7_9",indicator:$,statusText:E,label:F,checked:O,"color-orange":"_color-orange_i39j7_66","color-blue":"_color-blue_i39j7_71","color-purple":"_color-purple_i39j7_76","color-red":"_color-red_i39j7_81","color-yellow":"_color-yellow_i39j7_86",disabled:V},i=({label:e,checked:s,onChange:d,color:D="orange",disabled:p=!1,className:N=""})=>{const q=[a.toggleContainer,p?a.disabled:"",N].filter(Boolean).join(" "),W=()=>{p||d(!s)};return r.jsxs("div",{className:q,onClick:W,children:[r.jsxs("div",{className:`${a.switch} ${s?a.checked:""} ${a[`color-${D}`]}`,children:[r.jsx("div",{className:a.indicator}),r.jsx("div",{className:a.statusText,children:s?"ON":"OFF"})]}),e&&r.jsx("span",{className:a.label,children:e})]})};i.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{label:{required:!1,tsType:{name:"string"},description:""},checked:{required:!0,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},color:{required:!1,tsType:{name:"union",raw:"'orange' | 'blue' | 'purple' | 'red' | 'yellow'",elements:[{name:"literal",value:"'orange'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'red'"},{name:"literal",value:"'yellow'"}]},description:"",defaultValue:{value:"'orange'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const P={title:"Form/Toggle",component:i,parameters:{layout:"centered",backgrounds:{default:"dark",values:[{name:"dark",value:"#000000"}]}},tags:["autodocs"],argTypes:{color:{control:"select",options:["orange","blue","purple","red","yellow"]}}},u=e=>{const[s,d]=R.useState(e.checked||!1);return r.jsx(i,{...e,checked:s,onChange:d})},o={render:e=>r.jsx(u,{...e}),args:{label:"Main Power"}},l={render:e=>r.jsx(u,{...e}),args:{label:"Shields",checked:!0,color:"blue"}},t={render:e=>r.jsx(u,{...e}),args:{label:"Red Alert",checked:!0,color:"red"}},n={args:{label:"Warp Drive",checked:!1,disabled:!0}},c={args:{label:"Life Support",checked:!0,disabled:!0,color:"yellow"}};var g,m,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <ToggleWrapper {...args} />,
  args: {
    label: 'Main Power'
  }
}`,...(_=(m=o.parameters)==null?void 0:m.docs)==null?void 0:_.source}}};var b,h,f;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <ToggleWrapper {...args} />,
  args: {
    label: 'Shields',
    checked: true,
    color: 'blue'
  }
}`,...(f=(h=l.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var j,k,y;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <ToggleWrapper {...args} />,
  args: {
    label: 'Red Alert',
    checked: true,
    color: 'red'
  }
}`,...(y=(k=t.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var T,v,x;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Warp Drive',
    checked: false,
    disabled: true
  }
}`,...(x=(v=n.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var w,C,S;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Life Support',
    checked: true,
    disabled: true,
    color: 'yellow'
  }
}`,...(S=(C=c.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};const B=["Default","Checked","RedAlert","Disabled","DisabledChecked"];export{l as Checked,o as Default,n as Disabled,c as DisabledChecked,t as RedAlert,B as __namedExportsOrder,P as default};
