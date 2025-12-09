import{P as g}from"./PodCard-CldDv8Y7.js";import"./jsx-runtime-DiklIkkE.js";import"./index-DRjF_FHU.js";import"./StatusBadge-BB4hb_e-.js";import"./ValueLabel-De3L6gMC.js";const P={title:"Data/PodCard",component:g,tags:["autodocs"]},a={args:{pod:{name:"frontend-app-7d9f8c6b5a-x9z2p",namespace:"production",status:"running",replicas:{ready:1,total:1},restarts:0,age:"2d 4h"}}},e={args:{pod:{name:"backend-api-8f7e6d5c4b-y8w1q",namespace:"staging",status:"pending",replicas:{ready:0,total:1},restarts:0,age:"1m"}}},n={args:{pod:{name:"database-worker-5a4b3c2d1e-z7v0r",namespace:"production",status:"failed",replicas:{ready:0,total:1},restarts:5,age:"12h"}}};var r,s,t;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    pod: {
      name: 'frontend-app-7d9f8c6b5a-x9z2p',
      namespace: 'production',
      status: 'running',
      replicas: {
        ready: 1,
        total: 1
      },
      restarts: 0,
      age: '2d 4h'
    }
  }
}`,...(t=(s=a.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};var o,d,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    pod: {
      name: 'backend-api-8f7e6d5c4b-y8w1q',
      namespace: 'staging',
      status: 'pending',
      replicas: {
        ready: 0,
        total: 1
      },
      restarts: 0,
      age: '1m'
    }
  }
}`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var c,i,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    pod: {
      name: 'database-worker-5a4b3c2d1e-z7v0r',
      namespace: 'production',
      status: 'failed',
      replicas: {
        ready: 0,
        total: 1
      },
      restarts: 5,
      age: '12h'
    }
  }
}`,...(m=(i=n.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const h=["Running","Pending","Failed"];export{n as Failed,e as Pending,a as Running,h as __namedExportsOrder,P as default};
