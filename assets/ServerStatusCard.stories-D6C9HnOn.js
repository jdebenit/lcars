import{j as r}from"./jsx-runtime-DiklIkkE.js";import{P as N}from"./Panel-aDyTVj0d.js";import{S as c}from"./StatusBar-BesKWsBT.js";import{S as W}from"./StatusBadge-BB4hb_e-.js";import{V as l}from"./ValueLabel-De3L6gMC.js";import"./index-DRjF_FHU.js";const D="_serverCard_1amxn_1",U="_serverInfo_1amxn_10",M="_ipAddress_1amxn_20",O="_uptime_1amxn_41",T="_metrics_1amxn_47",$="_statusFooter_1amxn_54",s={serverCard:D,serverInfo:U,ipAddress:M,uptime:O,metrics:T,statusFooter:$},n=({server:e,className:w=""})=>{const b=a=>{switch(a){case"online":return"blue";case"warning":return"yellow";case"error":return"red";case"offline":return"purple";default:return"orange"}},d=a=>a>=90?"error":a>=75?"warning":"online";return r.jsxs(N,{title:e.name,color:b(e.status),className:`${s.serverCard} ${w}`,children:[r.jsxs("div",{className:s.serverInfo,children:[e.ip&&r.jsx(l,{label:"IP",value:e.ip,className:s.ipAddress}),r.jsx(l,{label:"UPTIME",value:e.uptime,className:s.uptime})]}),r.jsxs("div",{className:s.metrics,children:[r.jsx(c,{label:"CPU",value:`${e.cpu}%`,status:d(e.cpu),showPulse:e.cpu>=90}),r.jsx(c,{label:"Memory",value:`${e.memory}%`,status:d(e.memory),showPulse:e.memory>=90}),r.jsx(c,{label:"Disk",value:`${e.disk}%`,status:d(e.disk),showPulse:e.disk>=90})]}),r.jsx("div",{className:s.statusFooter,children:r.jsx(W,{status:e.status})})]})};n.__docgenInfo={description:"",methods:[],displayName:"ServerStatusCard",props:{server:{required:!0,tsType:{name:"ServerData"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const G={title:"Data/ServerStatusCard",component:n,parameters:{layout:"centered",backgrounds:{default:"dark",values:[{name:"dark",value:"#000000"}]}},tags:["autodocs"]},t={args:{server:{name:"WEB-SERVER-01",status:"online",cpu:45,memory:62,disk:38,uptime:"45d 12h 34m",ip:"192.168.1.100"}}},m={args:{server:{name:"DB-SERVER-02",status:"warning",cpu:78,memory:85,disk:72,uptime:"12d 5h 22m",ip:"192.168.1.101"}}},o={args:{server:{name:"API-SERVER-03",status:"error",cpu:95,memory:92,disk:88,uptime:"2d 3h 15m",ip:"192.168.1.102"}}},i={args:{server:{name:"BACKUP-SERVER-04",status:"offline",cpu:0,memory:0,disk:0,uptime:"0d 0h 0m",ip:"192.168.1.103"}}},u={args:{server:{name:"CACHE-SERVER-05",status:"online",cpu:32,memory:48,disk:25,uptime:"90d 8h 45m"}}},p={render:()=>r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"24px"},children:[r.jsx(n,{server:{name:"WEB-01",status:"online",cpu:45,memory:62,disk:38,uptime:"45d 12h",ip:"192.168.1.100"}}),r.jsx(n,{server:{name:"DB-01",status:"warning",cpu:78,memory:85,disk:72,uptime:"12d 5h",ip:"192.168.1.101"}}),r.jsx(n,{server:{name:"API-01",status:"error",cpu:95,memory:92,disk:88,uptime:"2d 3h",ip:"192.168.1.102"}}),r.jsx(n,{server:{name:"BACKUP-01",status:"offline",cpu:0,memory:0,disk:0,uptime:"0d 0h",ip:"192.168.1.103"}})]})};var S,v,g;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    server: {
      name: 'WEB-SERVER-01',
      status: 'online',
      cpu: 45,
      memory: 62,
      disk: 38,
      uptime: '45d 12h 34m',
      ip: '192.168.1.100'
    }
  }
}`,...(g=(v=t.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var f,y,E;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    server: {
      name: 'DB-SERVER-02',
      status: 'warning',
      cpu: 78,
      memory: 85,
      disk: 72,
      uptime: '12d 5h 22m',
      ip: '192.168.1.101'
    }
  }
}`,...(E=(y=m.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var h,x,k;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    server: {
      name: 'API-SERVER-03',
      status: 'error',
      cpu: 95,
      memory: 92,
      disk: 88,
      uptime: '2d 3h 15m',
      ip: '192.168.1.102'
    }
  }
}`,...(k=(x=o.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var C,_,R;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    server: {
      name: 'BACKUP-SERVER-04',
      status: 'offline',
      cpu: 0,
      memory: 0,
      disk: 0,
      uptime: '0d 0h 0m',
      ip: '192.168.1.103'
    }
  }
}`,...(R=(_=i.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var P,j,A;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    server: {
      name: 'CACHE-SERVER-05',
      status: 'online',
      cpu: 32,
      memory: 48,
      disk: 25,
      uptime: '90d 8h 45m'
    }
  }
}`,...(A=(j=u.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var B,I,V;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '24px'
  }}>
            <ServerStatusCard server={{
      name: 'WEB-01',
      status: 'online',
      cpu: 45,
      memory: 62,
      disk: 38,
      uptime: '45d 12h',
      ip: '192.168.1.100'
    }} />
            <ServerStatusCard server={{
      name: 'DB-01',
      status: 'warning',
      cpu: 78,
      memory: 85,
      disk: 72,
      uptime: '12d 5h',
      ip: '192.168.1.101'
    }} />
            <ServerStatusCard server={{
      name: 'API-01',
      status: 'error',
      cpu: 95,
      memory: 92,
      disk: 88,
      uptime: '2d 3h',
      ip: '192.168.1.102'
    }} />
            <ServerStatusCard server={{
      name: 'BACKUP-01',
      status: 'offline',
      cpu: 0,
      memory: 0,
      disk: 0,
      uptime: '0d 0h',
      ip: '192.168.1.103'
    }} />
        </div>
}`,...(V=(I=p.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};const J=["OnlineServer","WarningServer","ErrorServer","OfflineServer","WithoutIP","MultipleServers"];export{o as ErrorServer,p as MultipleServers,i as OfflineServer,t as OnlineServer,m as WarningServer,u as WithoutIP,J as __namedExportsOrder,G as default};
