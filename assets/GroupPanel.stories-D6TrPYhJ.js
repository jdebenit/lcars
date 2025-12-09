import{j as e}from"./jsx-runtime-DiklIkkE.js";import{B as t}from"./Button-DRCvdZWD.js";import"./index-DRjF_FHU.js";const N="_monitoringPanel_u23wi_1",S="_panelHeader_u23wi_6",R="_headerBar_u23wi_13",f="_panelTitle_u23wi_21",E="_panelContent_u23wi_32",r={monitoringPanel:N,panelHeader:S,headerBar:R,panelTitle:f,panelContent:E},T=({children:h,title:o="Monitoring Panel",subtitle:i,className:y=""})=>e.jsxs("div",{className:`${r.monitoringPanel} ${y}`,children:[o&&e.jsxs("div",{className:r.panelHeader,children:[e.jsx("div",{className:r.headerBar}),e.jsxs("h2",{className:r.panelTitle,children:[o,i&&e.jsxs("span",{style:{fontSize:"0.75em",opacity:.7,marginLeft:"12px",fontWeight:"normal"},children:["└─ ",i]})]})]}),e.jsx("div",{className:r.panelContent,children:h})]});T.__docgenInfo={description:"",methods:[],displayName:"GroupPanel",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Monitoring Panel'",computed:!1}},subtitle:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const A={title:"Layout/GroupPanel",component:T,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{title:{control:"text"},subtitle:{control:"text"},className:{control:"text"}}},a={args:{title:"SYSTEM MONITOR",subtitle:"PRIMARY SYSTEMS",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[e.jsx("div",{style:{padding:"10px",border:"1px solid var(--lcars-orange)",color:"var(--lcars-orange)"},children:"System Status: NORMAL"}),e.jsx("div",{style:{padding:"10px",border:"1px solid var(--lcars-orange)",color:"var(--lcars-orange)"},children:"Power Output: 98%"})]})}},n={args:{title:"CONTROLS",subtitle:"ENGINEERING",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px"},children:[e.jsx(t,{children:"INITIATE"}),e.jsx(t,{variant:"alert",children:"ABORT"}),e.jsx(t,{variant:"warning",children:"DIAGNOSTIC"}),e.jsx(t,{variant:"secondary",children:"CALIBRATE"})]})}},s={args:{title:"ALERTS",children:e.jsx("div",{style:{color:"var(--lcars-red)",fontSize:"1.2em"},children:"RED ALERT"})}};var l,d,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: 'SYSTEM MONITOR',
    subtitle: 'PRIMARY SYSTEMS',
    children: <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }}>
                <div style={{
        padding: '10px',
        border: '1px solid var(--lcars-orange)',
        color: 'var(--lcars-orange)'
      }}>
                    System Status: NORMAL
                </div>
                <div style={{
        padding: '10px',
        border: '1px solid var(--lcars-orange)',
        color: 'var(--lcars-orange)'
      }}>
                    Power Output: 98%
                </div>
            </div>
  }
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,u,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: 'CONTROLS',
    subtitle: 'ENGINEERING',
    children: <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '10px'
    }}>
                <Button>INITIATE</Button>
                <Button variant="alert">ABORT</Button>
                <Button variant="warning">DIAGNOSTIC</Button>
                <Button variant="secondary">CALIBRATE</Button>
            </div>
  }
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,x,v;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: 'ALERTS',
    children: <div style={{
      color: 'var(--lcars-red)',
      fontSize: '1.2em'
    }}>
                RED ALERT
            </div>
  }
}`,...(v=(x=s.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const j=["Default","WithButtons","NoSubtitle"];export{a as Default,s as NoSubtitle,n as WithButtons,j as __namedExportsOrder,A as default};
