import{j as d}from"./jsx-runtime-DiklIkkE.js";import{P as D}from"./PodCard-CldDv8Y7.js";import"./index-DRjF_FHU.js";import"./StatusBadge-BB4hb_e-.js";import"./ValueLabel-De3L6gMC.js";const v="_podGrid_1m34z_1",N={podGrid:v},j=({pods:o,className:G=""})=>d.jsx("div",{className:`${N.podGrid} ${G}`,children:o.map((_,h)=>d.jsx(D,{pod:_},h))});j.__docgenInfo={description:"",methods:[],displayName:"PodStatusGrid",props:{pods:{required:!0,tsType:{name:"Array",elements:[{name:"PodData"}],raw:"PodData[]"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const T={title:"Data/PodStatusGrid",component:j,parameters:{layout:"padded",backgrounds:{default:"dark",values:[{name:"dark",value:"#000000"}]}},tags:["autodocs"]},n=[{name:"web-frontend-1",namespace:"production",status:"running",replicas:{ready:3,total:3},restarts:0,age:"45d"},{name:"api-backend-1",namespace:"production",status:"running",replicas:{ready:5,total:5},restarts:2,age:"30d"},{name:"database-primary",namespace:"production",status:"running",replicas:{ready:1,total:1},restarts:0,age:"90d"},{name:"cache-redis-1",namespace:"production",status:"pending",replicas:{ready:2,total:3},restarts:1,age:"2h"},{name:"worker-jobs-1",namespace:"staging",status:"failed",replicas:{ready:0,total:2},restarts:5,age:"1d"},{name:"monitoring-agent",namespace:"system",status:"unknown",replicas:{ready:0,total:1},restarts:0,age:"5m"}],a={args:{pods:n}},e={args:{pods:n.filter(o=>o.status==="running")}},s={args:{pods:n}},r={args:{pods:[n[0]]}},t={args:{pods:[{name:"worker-jobs-1",namespace:"staging",status:"failed",replicas:{ready:0,total:2},restarts:5,age:"1d"},{name:"api-gateway-2",namespace:"production",status:"failed",replicas:{ready:0,total:3},restarts:10,age:"3h"}]}};var p,i,c;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    pods: samplePods
  }
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var m,u,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    pods: samplePods.filter(pod => pod.status === 'running')
  }
}`,...(l=(u=e.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var g,y,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    pods: samplePods
  }
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var P,S,k;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    pods: [samplePods[0]]
  }
}`,...(k=(S=r.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var w,x,b;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    pods: [{
      name: 'worker-jobs-1',
      namespace: 'staging',
      status: 'failed',
      replicas: {
        ready: 0,
        total: 2
      },
      restarts: 5,
      age: '1d'
    }, {
      name: 'api-gateway-2',
      namespace: 'production',
      status: 'failed',
      replicas: {
        ready: 0,
        total: 3
      },
      restarts: 10,
      age: '3h'
    }]
  }
}`,...(b=(x=t.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const $=["Default","RunningPods","MixedStatuses","SinglePod","FailedPods"];export{a as Default,t as FailedPods,s as MixedStatuses,e as RunningPods,r as SinglePod,$ as __namedExportsOrder,T as default};
