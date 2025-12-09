import{j as e}from"./jsx-runtime-DiklIkkE.js";import{P as b}from"./Panel-aDyTVj0d.js";import{S as P}from"./StatusBar-BesKWsBT.js";import{S as I}from"./StatusBadge-BB4hb_e-.js";import{V as C}from"./ValueLabel-De3L6gMC.js";import"./index-DRjF_FHU.js";const R="_appMonitor_16c0y_1",W="_appHeader_16c0y_5",q="_section_16c0y_16",D="_sectionTitle_16c0y_24",H="_logEntry_16c0y_35",L="_logTimestamp_16c0y_48",k="_logLevel_16c0y_53",O="_logMessage_16c0y_59",$="_logInfo_16c0y_64",G="_logWarning_16c0y_72",V="_logError_16c0y_80",n={appMonitor:R,appHeader:W,section:q,sectionTitle:D,logEntry:H,logTimestamp:L,logLevel:k,logMessage:O,logInfo:$,logWarning:G,logError:V},m=({application:a,className:M=""})=>{const E=s=>{switch(s){case"online":return"blue";case"warning":return"yellow";case"error":return"red";case"offline":return"purple";default:return"orange"}},N=s=>{switch(s){case"info":return n.logInfo;case"warning":return n.logWarning;case"error":return n.logError;default:return n.logInfo}};return e.jsxs(b,{title:a.name,color:E(a.status),className:`${n.appMonitor} ${M}`,children:[e.jsxs("div",{className:n.appHeader,children:[e.jsx("div",{className:n.versionBadge,children:e.jsx(C,{label:"VERSION",value:a.version})}),e.jsx("div",{className:n.statusContainer,children:e.jsx(I,{status:a.status})})]}),e.jsxs("div",{className:n.section,children:[e.jsx("h4",{className:n.sectionTitle,children:"Endpoints"}),e.jsx("div",{className:n.endpoints,children:a.endpoints.map((s,p)=>e.jsx("div",{className:n.endpointRow,children:e.jsx(P,{label:s.name,value:s.responseTime?`${s.responseTime}ms`:void 0,status:s.status,showPulse:s.status==="error"})},p))})]}),e.jsxs("div",{className:n.section,children:[e.jsx("h4",{className:n.sectionTitle,children:"Recent Logs"}),e.jsx("div",{className:n.logs,children:a.logs.slice(0,5).map((s,p)=>e.jsxs("div",{className:`${n.logEntry} ${N(s.level)}`,children:[e.jsx("span",{className:n.logTimestamp,children:s.timestamp}),e.jsxs("span",{className:n.logLevel,children:["[",s.level.toUpperCase(),"]"]}),e.jsx("span",{className:n.logMessage,children:s.message})]},p))})]})]})};m.__docgenInfo={description:"",methods:[],displayName:"ApplicationMonitor",props:{application:{required:!0,tsType:{name:"ApplicationData"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const K={title:"Data/ApplicationMonitor",component:m,parameters:{layout:"centered",backgrounds:{default:"dark",values:[{name:"dark",value:"#000000"}]}},tags:["autodocs"]},t={args:{application:{name:"API Gateway",version:"v2.5.1",status:"online",endpoints:[{name:"/api/users",status:"online",responseTime:45},{name:"/api/products",status:"online",responseTime:32},{name:"/api/orders",status:"online",responseTime:58}],logs:[{timestamp:"10:45:23",level:"info",message:"Request processed successfully"},{timestamp:"10:45:20",level:"info",message:"Database connection established"},{timestamp:"10:45:15",level:"info",message:"Cache hit for user data"},{timestamp:"10:45:10",level:"info",message:"Authentication successful"}]}}},i={args:{application:{name:"Payment Service",version:"v1.8.3",status:"warning",endpoints:[{name:"/api/payments",status:"warning",responseTime:450},{name:"/api/refunds",status:"online",responseTime:120},{name:"/api/webhooks",status:"warning",responseTime:380}],logs:[{timestamp:"11:23:45",level:"warning",message:"High response time detected"},{timestamp:"11:23:40",level:"info",message:"Payment processed"},{timestamp:"11:23:35",level:"warning",message:"Connection pool near limit"},{timestamp:"11:23:30",level:"info",message:"Webhook delivered"}]}}},o={args:{application:{name:"Email Service",version:"v3.1.0",status:"error",endpoints:[{name:"/api/send",status:"error",responseTime:5e3},{name:"/api/templates",status:"offline"},{name:"/api/queue",status:"warning",responseTime:890}],logs:[{timestamp:"12:15:30",level:"error",message:"SMTP connection failed"},{timestamp:"12:15:25",level:"error",message:"Template rendering error"},{timestamp:"12:15:20",level:"warning",message:"Queue size exceeds threshold"},{timestamp:"12:15:15",level:"error",message:"Database timeout"},{timestamp:"12:15:10",level:"info",message:"Retry attempt initiated"}]}}},r={args:{application:{name:"Analytics Engine",version:"v4.2.0",status:"offline",endpoints:[{name:"/api/events",status:"offline"},{name:"/api/reports",status:"offline"},{name:"/api/metrics",status:"offline"}],logs:[{timestamp:"09:30:00",level:"error",message:"Service stopped unexpectedly"},{timestamp:"09:29:55",level:"error",message:"Fatal exception occurred"},{timestamp:"09:29:50",level:"warning",message:"Memory limit exceeded"}]}}},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:"800px"},children:[e.jsx(m,{application:{name:"API Gateway",version:"v2.5.1",status:"online",endpoints:[{name:"/api/users",status:"online",responseTime:45},{name:"/api/products",status:"online",responseTime:32}],logs:[{timestamp:"10:45:23",level:"info",message:"Request processed"},{timestamp:"10:45:20",level:"info",message:"Connection established"}]}}),e.jsx(m,{application:{name:"Payment Service",version:"v1.8.3",status:"warning",endpoints:[{name:"/api/payments",status:"warning",responseTime:450}],logs:[{timestamp:"11:23:45",level:"warning",message:"High response time"}]}})]})};var c,g,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    application: {
      name: 'API Gateway',
      version: 'v2.5.1',
      status: 'online',
      endpoints: [{
        name: '/api/users',
        status: 'online',
        responseTime: 45
      }, {
        name: '/api/products',
        status: 'online',
        responseTime: 32
      }, {
        name: '/api/orders',
        status: 'online',
        responseTime: 58
      }],
      logs: [{
        timestamp: '10:45:23',
        level: 'info',
        message: 'Request processed successfully'
      }, {
        timestamp: '10:45:20',
        level: 'info',
        message: 'Database connection established'
      }, {
        timestamp: '10:45:15',
        level: 'info',
        message: 'Cache hit for user data'
      }, {
        timestamp: '10:45:10',
        level: 'info',
        message: 'Authentication successful'
      }]
    }
  }
}`,...(u=(g=t.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var d,v,f;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    application: {
      name: 'Payment Service',
      version: 'v1.8.3',
      status: 'warning',
      endpoints: [{
        name: '/api/payments',
        status: 'warning',
        responseTime: 450
      }, {
        name: '/api/refunds',
        status: 'online',
        responseTime: 120
      }, {
        name: '/api/webhooks',
        status: 'warning',
        responseTime: 380
      }],
      logs: [{
        timestamp: '11:23:45',
        level: 'warning',
        message: 'High response time detected'
      }, {
        timestamp: '11:23:40',
        level: 'info',
        message: 'Payment processed'
      }, {
        timestamp: '11:23:35',
        level: 'warning',
        message: 'Connection pool near limit'
      }, {
        timestamp: '11:23:30',
        level: 'info',
        message: 'Webhook delivered'
      }]
    }
  }
}`,...(f=(v=i.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var y,h,x;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    application: {
      name: 'Email Service',
      version: 'v3.1.0',
      status: 'error',
      endpoints: [{
        name: '/api/send',
        status: 'error',
        responseTime: 5000
      }, {
        name: '/api/templates',
        status: 'offline'
      }, {
        name: '/api/queue',
        status: 'warning',
        responseTime: 890
      }],
      logs: [{
        timestamp: '12:15:30',
        level: 'error',
        message: 'SMTP connection failed'
      }, {
        timestamp: '12:15:25',
        level: 'error',
        message: 'Template rendering error'
      }, {
        timestamp: '12:15:20',
        level: 'warning',
        message: 'Queue size exceeds threshold'
      }, {
        timestamp: '12:15:15',
        level: 'error',
        message: 'Database timeout'
      }, {
        timestamp: '12:15:10',
        level: 'info',
        message: 'Retry attempt initiated'
      }]
    }
  }
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var T,_,w;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    application: {
      name: 'Analytics Engine',
      version: 'v4.2.0',
      status: 'offline',
      endpoints: [{
        name: '/api/events',
        status: 'offline'
      }, {
        name: '/api/reports',
        status: 'offline'
      }, {
        name: '/api/metrics',
        status: 'offline'
      }],
      logs: [{
        timestamp: '09:30:00',
        level: 'error',
        message: 'Service stopped unexpectedly'
      }, {
        timestamp: '09:29:55',
        level: 'error',
        message: 'Fatal exception occurred'
      }, {
        timestamp: '09:29:50',
        level: 'warning',
        message: 'Memory limit exceeded'
      }]
    }
  }
}`,...(w=(_=r.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var A,j,S;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    maxWidth: '800px'
  }}>
            <ApplicationMonitor application={{
      name: 'API Gateway',
      version: 'v2.5.1',
      status: 'online',
      endpoints: [{
        name: '/api/users',
        status: 'online',
        responseTime: 45
      }, {
        name: '/api/products',
        status: 'online',
        responseTime: 32
      }],
      logs: [{
        timestamp: '10:45:23',
        level: 'info',
        message: 'Request processed'
      }, {
        timestamp: '10:45:20',
        level: 'info',
        message: 'Connection established'
      }]
    }} />
            <ApplicationMonitor application={{
      name: 'Payment Service',
      version: 'v1.8.3',
      status: 'warning',
      endpoints: [{
        name: '/api/payments',
        status: 'warning',
        responseTime: 450
      }],
      logs: [{
        timestamp: '11:23:45',
        level: 'warning',
        message: 'High response time'
      }]
    }} />
        </div>
}`,...(S=(j=l.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};const X=["OnlineApplication","WarningApplication","ErrorApplication","OfflineApplication","MultipleApplications"];export{o as ErrorApplication,l as MultipleApplications,r as OfflineApplication,t as OnlineApplication,i as WarningApplication,X as __namedExportsOrder,K as default};
