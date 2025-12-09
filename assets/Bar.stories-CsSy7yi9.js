import{j as r}from"./jsx-runtime-DiklIkkE.js";import{B as o}from"./Bar-CQUNA_iu.js";import"./index-DRjF_FHU.js";const m={title:"Layout/Bar",component:o,tags:["autodocs"],argTypes:{color:{control:"select",options:["orange","blue","purple","red","yellow","tan"]},rounded:{control:"select",options:["none","left","right","both","top","bottom"]}}},e={args:{children:"SYSTEM READY",color:"blue",rounded:"both"}},t={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[r.jsx(o,{color:"orange",rounded:"left",children:"LEFT ROUNDED"}),r.jsx(o,{color:"purple",rounded:"right",children:"RIGHT ROUNDED"}),r.jsx(o,{color:"red",rounded:"both",children:"BOTH ROUNDED"}),r.jsx(o,{color:"tan",rounded:"none",children:"SQUARED"})]})};var n,a,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: 'SYSTEM READY',
    color: 'blue',
    rounded: 'both'
  }
}`,...(l=(a=e.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var d,s,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  }}>
            <Bar color="orange" rounded="left">LEFT ROUNDED</Bar>
            <Bar color="purple" rounded="right">RIGHT ROUNDED</Bar>
            <Bar color="red" rounded="both">BOTH ROUNDED</Bar>
            <Bar color="tan" rounded="none">SQUARED</Bar>
        </div>
}`,...(c=(s=t.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const D=["Default","Styles"];export{e as Default,t as Styles,D as __namedExportsOrder,m as default};
