import{j as r}from"./jsx-runtime-DiklIkkE.js";import{C as o}from"./Corner-DwoPOox8.js";import"./index-DRjF_FHU.js";const h={title:"Layout/Corner",component:o,tags:["autodocs"],argTypes:{color:{control:"select",options:["orange","blue","purple","red","yellow","tan","white","gray"]},corner:{control:"select",options:["top-left","top-right","bottom-left","bottom-right"]},width:{control:"number"},height:{control:"number"}}},t={render:()=>r.jsxs("div",{style:{display:"flex",gap:"2rem",flexWrap:"wrap"},children:[r.jsx(o,{color:"orange",corner:"top-left"}),r.jsx(o,{color:"blue",corner:"top-right"}),r.jsx(o,{color:"purple",corner:"bottom-left"}),r.jsx(o,{color:"red",corner:"bottom-right"})]})},n={args:{color:"tan",width:150,height:80},render:e=>r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px",width:"320px"},children:[r.jsx(o,{...e,corner:"top-left"}),r.jsx(o,{...e,corner:"top-right"}),r.jsx(o,{...e,corner:"bottom-left"}),r.jsx(o,{...e,corner:"bottom-right"})]})};var s,l,c;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap'
  }}>
            <Corner color="orange" corner="top-left" />
            <Corner color="blue" corner="top-right" />
            <Corner color="purple" corner="bottom-left" />
            <Corner color="red" corner="bottom-right" />
        </div>
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var p,a,i;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    color: 'tan',
    width: 150,
    height: 80
  },
  render: args => <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px',
    width: '320px'
  }}>
            <Corner {...args} corner="top-left" />
            <Corner {...args} corner="top-right" />
            <Corner {...args} corner="bottom-left" />
            <Corner {...args} corner="bottom-right" />
        </div>
}`,...(i=(a=n.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const x=["Components","AllCorners"];export{n as AllCorners,t as Components,x as __namedExportsOrder,h as default};
