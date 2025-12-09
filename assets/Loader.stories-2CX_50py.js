import{j as r}from"./jsx-runtime-DiklIkkE.js";import"./index-DRjF_FHU.js";const S="_loaderContainer_1eiz9_1",z="_fullScreen_1eiz9_10",N="_barContainer_1eiz9_20",v="_bar1_1eiz9_27",y="_bar2_1eiz9_28",C="_bar3_1eiz9_29",w="_grow_1eiz9_1",E="_text_1eiz9_61",R="_pulse_1eiz9_1",e={loaderContainer:S,fullScreen:z,barContainer:N,bar1:v,bar2:y,bar3:C,grow:w,text:E,pulse:R,"color-orange":"_color-orange_1eiz9_80","color-blue":"_color-blue_1eiz9_84","color-purple":"_color-purple_1eiz9_88","color-red":"_color-red_1eiz9_92","color-tan":"_color-tan_1eiz9_96","color-yellow":"_color-yellow_1eiz9_100","text-orange":"_text-orange_1eiz9_105","text-blue":"_text-blue_1eiz9_109","text-purple":"_text-purple_1eiz9_113","text-red":"_text-red_1eiz9_117","text-tan":"_text-tan_1eiz9_121","text-yellow":"_text-yellow_1eiz9_125"},b=({text:t="PROCESSING",color:n="blue",className:f="",fullScreen:g=!1})=>r.jsxs("div",{className:`${e.loaderContainer} ${g?e.fullScreen:""} ${f}`,children:[r.jsxs("div",{className:`${e.barContainer} ${e[`color-${n}`]}`,children:[r.jsx("div",{className:e.bar1}),r.jsx("div",{className:e.bar2}),r.jsx("div",{className:e.bar3})]}),t&&r.jsx("div",{className:`${e.text} ${e[`text-${n}`]}`,children:t})]});b.__docgenInfo={description:"",methods:[],displayName:"Loader",props:{text:{required:!1,tsType:{name:"string"},description:"Additional text to display",defaultValue:{value:"'PROCESSING'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'orange' | 'blue' | 'purple' | 'red' | 'yellow' | 'tan'",elements:[{name:"literal",value:"'orange'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'red'"},{name:"literal",value:"'yellow'"},{name:"literal",value:"'tan'"}]},description:"Color of the scanning bars",defaultValue:{value:"'blue'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},fullScreen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const A={title:"Feedback/Loader",component:b,tags:["autodocs"],argTypes:{color:{control:"select",options:["orange","blue","purple","red","yellow","tan"]}}},a={args:{text:"PROCESSING",color:"orange"}},o={args:{text:"SCANNING",color:"blue"}},l={args:{text:"RED ALERT",color:"red",fullScreen:!1}};var s,c,i;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    text: 'PROCESSING',
    color: 'orange'
  }
}`,...(i=(c=a.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var u,_,d;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    text: 'SCANNING',
    color: 'blue'
  }
}`,...(d=(_=o.parameters)==null?void 0:_.docs)==null?void 0:d.source}}};var p,m,x;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    text: 'RED ALERT',
    color: 'red',
    fullScreen: false
  }
}`,...(x=(m=l.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};const I=["Default","Scanning","Alert"];export{l as Alert,a as Default,o as Scanning,I as __namedExportsOrder,A as default};
