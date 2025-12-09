import{I as L}from"./Input-w3ltJOxH.js";import"./jsx-runtime-DiklIkkE.js";import"./index-DRjF_FHU.js";const A={title:"Form/Input",component:L,parameters:{layout:"centered",backgrounds:{default:"dark",values:[{name:"dark",value:"#000000"}]}},tags:["autodocs"]},e={args:{placeholder:"Enter command..."}},r={args:{label:"Command Code",placeholder:"Enter code..."}},a={args:{label:"System Name",value:"USS ENTERPRISE",readOnly:!0}},s={args:{label:"Authorization",value:"INVALID_TOKEN",error:"Access Denied"}},o={args:{label:"Self Destruct",value:"LOCKED",disabled:!0}},t={args:{label:"Log Entry",placeholder:"Enter captain's log...",fullWidth:!0},parameters:{layout:"padded"}};var n,l,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter command...'
  }
}`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,u,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Command Code',
    placeholder: 'Enter code...'
  }
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,i,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'System Name',
    value: 'USS ENTERPRISE',
    readOnly: true
  }
}`,...(g=(i=a.parameters)==null?void 0:i.docs)==null?void 0:g.source}}};var E,b,h;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Authorization',
    value: 'INVALID_TOKEN',
    error: 'Access Denied'
  }
}`,...(h=(b=s.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var S,D,f;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Self Destruct',
    value: 'LOCKED',
    disabled: true
  }
}`,...(f=(D=o.parameters)==null?void 0:D.docs)==null?void 0:f.source}}};var y,I,v;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Log Entry',
    placeholder: 'Enter captain\\'s log...',
    fullWidth: true
  },
  parameters: {
    layout: 'padded'
  }
}`,...(v=(I=t.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};const C=["Default","WithLabel","WithValue","Error","Disabled","FullWidth"];export{e as Default,o as Disabled,s as Error,t as FullWidth,r as WithLabel,a as WithValue,C as __namedExportsOrder,A as default};
