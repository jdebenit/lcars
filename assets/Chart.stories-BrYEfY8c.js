import{j as a}from"./jsx-runtime-DiklIkkE.js";import"./index-DRjF_FHU.js";const w="_chartContainer_a7ses_1",R="_chartTitle_a7ses_9",q="_barChart_a7ses_20",P="_barWrapper_a7ses_29",H="_barContainer_a7ses_39",O="_bar_a7ses_20",Z="_barValue_a7ses_68",G="_barLabel_a7ses_77",J="_horizontalBarChart_a7ses_88",K="_horizontalBarWrapper_a7ses_95",Q="_horizontalBarLabel_a7ses_101",U="_horizontalBarContainer_a7ses_115",X="_horizontalBar_a7ses_88",Y="_horizontalBarValue_a7ses_139",aa="_donutContainer_a7ses_148",ea="_donutSvg_a7ses_155",ra="_donutCenter_a7ses_160",la="_donutTotal_a7ses_169",na="_donutLabel_a7ses_176",sa="_legend_a7ses_184",ta="_legendItem_a7ses_190",oa="_legendColor_a7ses_204",ca="_legendLabel_a7ses_211",ia="_legendValue_a7ses_219",da="_clickable_a7ses_227",e={chartContainer:w,chartTitle:R,barChart:q,barWrapper:P,barContainer:H,bar:O,barValue:Z,barLabel:G,horizontalBarChart:J,horizontalBarWrapper:K,horizontalBarLabel:Q,horizontalBarContainer:U,horizontalBar:X,horizontalBarValue:Y,donutContainer:aa,donutSvg:ea,donutCenter:ra,donutTotal:la,donutLabel:na,legend:sa,legendItem:ta,legendColor:oa,legendLabel:ca,legendValue:ia,clickable:da},S=({data:t,title:v,type:m="bar",height:F=200})=>{const i=Math.max(...t.map(r=>r.value),1),c=t.reduce((r,s)=>r+s.value,0),n=["var(--lcars-orange)","var(--lcars-blue)","var(--lcars-purple)","var(--lcars-red)","var(--lcars-yellow)","var(--lcars-tan)","#FF6B9D","#00D9FF","#B4E7CE","#FFB86C","#BD93F9","#50FA7B","#FF79C6","#8BE9FD","#FFD700","#FF6347"];if(m==="donut"){let p=-90;const T=t.map((l,o)=>{const u=c>0?l.value/c*100:0,g=u/100*360,V=p,C=p+g;p=C;const x=V*Math.PI/180,j=C*Math.PI/180,W=100+80*Math.cos(x),A=100+80*Math.sin(x),E=100+80*Math.cos(j),I=100+80*Math.sin(j),M=g>180?1:0;return{pathData:["M 100 100",`L ${W} ${A}`,`A 80 80 0 ${M} 1 ${E} ${I}`,"Z"].join(" "),color:l.color||n[o%n.length],item:l,percentage:u}});return a.jsxs("div",{className:e.chartContainer,children:[a.jsx("div",{className:e.chartTitle,children:v}),a.jsxs("div",{className:e.donutContainer,children:[a.jsxs("svg",{viewBox:"0 0 200 200",className:e.donutSvg,children:[a.jsx("circle",{cx:100,cy:100,r:80,fill:"none",stroke:"rgba(0, 0, 0, 0.3)",strokeWidth:30}),T.map((l,o)=>a.jsx("g",{children:a.jsx("path",{d:l.pathData,fill:l.color,className:l.item.onClick?e.clickable:"",onClick:l.item.onClick,opacity:.8})},o)),a.jsx("circle",{cx:100,cy:100,r:50,fill:"rgba(0, 0, 0, 0.5)"})]}),a.jsxs("div",{className:e.donutCenter,children:[a.jsx("div",{className:e.donutTotal,children:c}),a.jsx("div",{className:e.donutLabel,children:"Total"})]})]}),a.jsx("div",{className:e.legend,children:t.map((l,o)=>{const u=c>0?(l.value/c*100).toFixed(1):0;return a.jsxs("div",{className:`${e.legendItem} ${l.onClick?e.clickable:""}`,onClick:l.onClick,children:[a.jsx("div",{className:e.legendColor,style:{backgroundColor:l.color||n[o%n.length]}}),a.jsx("div",{className:e.legendLabel,children:l.label}),a.jsxs("div",{className:e.legendValue,children:[l.value," (",u,"%)"]})]},o)})})]})}return m==="horizontal"?a.jsxs("div",{className:e.chartContainer,children:[a.jsx("div",{className:e.chartTitle,children:v}),a.jsx("div",{className:e.horizontalBarChart,children:t.map((r,s)=>{const d=i>0?r.value/i*100:0;return a.jsxs("div",{className:e.horizontalBarWrapper,children:[a.jsx("div",{className:e.horizontalBarLabel,children:r.label}),a.jsx("div",{className:e.horizontalBarContainer,children:a.jsx("div",{className:`${e.horizontalBar} ${r.onClick?e.clickable:""}`,style:{width:`${d}%`,backgroundColor:r.color||n[s%n.length]},onClick:r.onClick,children:a.jsx("div",{className:e.horizontalBarValue,children:r.value})})})]},s)})})]}):a.jsxs("div",{className:e.chartContainer,children:[a.jsx("div",{className:e.chartTitle,children:v}),a.jsx("div",{className:e.barChart,style:{height:`${F}px`},children:t.map((r,s)=>{const d=i>0?r.value/i*100:0;return a.jsxs("div",{className:e.barWrapper,children:[a.jsx("div",{className:e.barContainer,children:a.jsx("div",{className:`${e.bar} ${r.onClick?e.clickable:""}`,style:{height:`${d}%`,backgroundColor:r.color||n[s%n.length]},onClick:r.onClick,children:a.jsx("div",{className:e.barValue,children:r.value})})}),a.jsx("div",{className:e.barLabel,children:r.label})]},s)})})]})};S.__docgenInfo={description:"",methods:[],displayName:"Chart",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"ChartDataItem"}],raw:"ChartDataItem[]"},description:""},title:{required:!0,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:"'bar' | 'donut' | 'horizontal'",elements:[{name:"literal",value:"'bar'"},{name:"literal",value:"'donut'"},{name:"literal",value:"'horizontal'"}]},description:"",defaultValue:{value:"'bar'",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"200",computed:!1}}}};const _a={title:"Data/Chart",component:S,tags:["autodocs"]},h={args:{title:"System Efficiency",data:[{label:"Propulsion",value:85},{label:"Life Support",value:92},{label:"Shields",value:78},{label:"Sensors",value:95}]}},b={args:{title:"Energy Distribution",type:"donut",data:[{label:"Weapons",value:30},{label:"Shields",value:40},{label:"Engines",value:20},{label:"Auxiliary",value:10}]}},_={args:{title:"Resource Levels",type:"horizontal",data:[{label:"Deuterium",value:450},{label:"Antimatter",value:820},{label:"Dilithium",value:300}]}};var B,z,N;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    title: 'System Efficiency',
    data: [{
      label: 'Propulsion',
      value: 85
    }, {
      label: 'Life Support',
      value: 92
    }, {
      label: 'Shields',
      value: 78
    }, {
      label: 'Sensors',
      value: 95
    }]
  }
}`,...(N=(z=h.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var y,k,f;b.parameters={...b.parameters,docs:{...(y=b.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: 'Energy Distribution',
    type: 'donut',
    data: [{
      label: 'Weapons',
      value: 30
    }, {
      label: 'Shields',
      value: 40
    }, {
      label: 'Engines',
      value: 20
    }, {
      label: 'Auxiliary',
      value: 10
    }]
  }
}`,...(f=(k=b.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var L,D,$;_.parameters={..._.parameters,docs:{...(L=_.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    title: 'Resource Levels',
    type: 'horizontal',
    data: [{
      label: 'Deuterium',
      value: 450
    }, {
      label: 'Antimatter',
      value: 820
    }, {
      label: 'Dilithium',
      value: 300
    }]
  }
}`,...($=(D=_.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};const va=["Bar","Donut","Horizontal"];export{h as Bar,b as Donut,_ as Horizontal,va as __namedExportsOrder,_a as default};
