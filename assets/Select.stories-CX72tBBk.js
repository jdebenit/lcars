import{j as o}from"./jsx-runtime-DiklIkkE.js";import{S as s}from"./Select-Dygk4JGP.js";import"./index-DRjF_FHU.js";const D={title:"Form/Select",component:s,tags:["autodocs"],argTypes:{color:{control:{type:"select"},options:["orange","blue","purple","red","yellow","tan"]},disabled:{control:"boolean"}}},m=[{label:"WARP CORE",value:"1"},{label:"PHASERS",value:"2"},{label:"LIFE SUPPORT",value:"3"},{label:"SENSORS",value:"4"}],e={args:{label:"SELECT SYSTEM",options:m,value:"1",onChange:l=>console.log("Selected:",l),color:"orange"}},r={args:{...e.args,disabled:!0,label:"SYSTEM LOCKED"}},a={render:l=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[o.jsx(s,{...l,color:"blue",label:"BLUE"}),o.jsx(s,{...l,color:"red",label:"RED"}),o.jsx(s,{...l,color:"purple",label:"PURPLE"})]}),args:{...e.args}};var t,c,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: 'SELECT SYSTEM',
    options: options,
    value: '1',
    onChange: val => console.log('Selected:', val),
    color: 'orange'
  }
}`,...(n=(c=e.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var p,d,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true,
    label: 'SYSTEM LOCKED'
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var i,S,g;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  }}>
            <Select {...args} color="blue" label="BLUE" />
            <Select {...args} color="red" label="RED" />
            <Select {...args} color="purple" label="PURPLE" />
        </div>,
  args: {
    ...Default.args
  }
}`,...(g=(S=a.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};const f=["Default","Disabled","Colors"];export{a as Colors,e as Default,r as Disabled,f as __namedExportsOrder,D as default};
