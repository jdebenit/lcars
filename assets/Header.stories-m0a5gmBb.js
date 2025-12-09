import{j as e}from"./jsx-runtime-DiklIkkE.js";import"./index-DRjF_FHU.js";const x="_headerTop_1n533_6",N="_leftBar_1n533_13",j="_centerSection_1n533_26",C="_title_1n533_31",R="_subtitle_1n533_41",H="_rightBars_1n533_49",T="_rightContent_1n533_55",A="_rightBar_1n533_49",L="_headerBottom_1n533_95",q="_bottomBar_1n533_99",t={headerTop:x,leftBar:N,centerSection:j,title:C,subtitle:R,rightBars:H,rightContent:T,rightBar:A,headerBottom:L,bottomBar:q},f=({title:y,subtitle:n,className:v="",rightContent:i})=>e.jsxs("header",{className:`${t.Header} ${v}`,children:[e.jsxs("div",{className:t.headerTop,children:[e.jsx("div",{className:t.leftBar}),e.jsxs("div",{className:t.centerSection,children:[e.jsx("h1",{className:t.title,children:y}),n&&e.jsx("p",{className:t.subtitle,children:n})]}),e.jsxs("div",{className:t.rightBars,children:[i&&e.jsx("div",{className:t.rightContent,children:i}),e.jsx("div",{className:t.rightBar}),e.jsx("div",{className:t.rightBar}),e.jsx("div",{className:t.rightBar})]})]}),e.jsx("div",{className:t.headerBottom,children:e.jsx("div",{className:t.bottomBar})})]});f.__docgenInfo={description:"",methods:[],displayName:"Header",props:{title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},rightContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const I={title:"Layout/Header",component:f,parameters:{layout:"fullscreen",backgrounds:{default:"dark",values:[{name:"dark",value:"#000000"}]}},tags:["autodocs"]},r={args:{title:"LCARS System",subtitle:"Library Computer Access/Retrieval System"}},s={args:{title:"Command Center"}},a={args:{title:"Server Monitoring",subtitle:"Real-time Infrastructure Status"}},o={args:{title:"System Status",subtitle:"All Systems Operational"}};var c,l,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: 'LCARS System',
    subtitle: 'Library Computer Access/Retrieval System'
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var m,u,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    title: 'Command Center'
  }
}`,...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var h,g,_;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: 'Server Monitoring',
    subtitle: 'Real-time Infrastructure Status'
  }
}`,...(_=(g=a.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};var S,B,b;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    title: 'System Status',
    subtitle: 'All Systems Operational'
  }
}`,...(b=(B=o.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};const O=["Default","WithoutSubtitle","DashboardHeader","StatusHeader"];export{a as DashboardHeader,r as Default,o as StatusHeader,s as WithoutSubtitle,O as __namedExportsOrder,I as default};
