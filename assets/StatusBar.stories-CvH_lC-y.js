import{j as e}from"./jsx-runtime-DiklIkkE.js";import{S as a}from"./StatusBar-BesKWsBT.js";import"./index-DRjF_FHU.js";const B={title:"Feedback/StatusBar",component:a,parameters:{layout:"centered",backgrounds:{default:"dark",values:[{name:"dark",value:"#000000"}]}},tags:["autodocs"],argTypes:{status:{control:"select",options:["online","warning","error","offline"]},showPulse:{control:"boolean"}}},s={args:{label:"System Status",value:"ONLINE",status:"online"}},r={args:{label:"CPU Usage",value:"85%",status:"warning"}},t={args:{label:"Database Connection",value:"ERROR",status:"error"}},l={args:{label:"Backup Server",value:"OFFLINE",status:"offline"}},n={args:{label:"Alert Status",value:"CRITICAL",status:"error",showPulse:!0}},o={args:{label:"System Operational",status:"online"}},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",width:"300px"},children:[e.jsx(a,{label:"Online Status",value:"OPERATIONAL",status:"online"}),e.jsx(a,{label:"Warning Status",value:"85%",status:"warning"}),e.jsx(a,{label:"Error Status",value:"FAILED",status:"error"}),e.jsx(a,{label:"Offline Status",value:"OFFLINE",status:"offline"}),e.jsx(a,{label:"Pulse Alert",value:"CRITICAL",status:"error",showPulse:!0})]})};var i,c,p;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'System Status',
    value: 'ONLINE',
    status: 'online'
  }
}`,...(p=(c=s.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,d,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'CPU Usage',
    value: '85%',
    status: 'warning'
  }
}`,...(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var S,b,v;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Database Connection',
    value: 'ERROR',
    status: 'error'
  }
}`,...(v=(b=t.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var f,O,x;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Backup Server',
    value: 'OFFLINE',
    status: 'offline'
  }
}`,...(x=(O=l.parameters)==null?void 0:O.docs)==null?void 0:x.source}}};var E,I,A;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Alert Status',
    value: 'CRITICAL',
    status: 'error',
    showPulse: true
  }
}`,...(A=(I=n.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var L,P,R;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: 'System Operational',
    status: 'online'
  }
}`,...(R=(P=o.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var h,w,C;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    width: '300px'
  }}>
            <StatusBar label="Online Status" value="OPERATIONAL" status="online" />
            <StatusBar label="Warning Status" value="85%" status="warning" />
            <StatusBar label="Error Status" value="FAILED" status="error" />
            <StatusBar label="Offline Status" value="OFFLINE" status="offline" />
            <StatusBar label="Pulse Alert" value="CRITICAL" status="error" showPulse />
        </div>
}`,...(C=(w=u.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const j=["Online","Warning","Error","Offline","WithPulse","WithoutValue","AllStatuses"];export{u as AllStatuses,t as Error,l as Offline,s as Online,r as Warning,n as WithPulse,o as WithoutValue,j as __namedExportsOrder,B as default};
