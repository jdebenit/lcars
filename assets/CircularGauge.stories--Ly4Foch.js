import{j as r}from"./jsx-runtime-DiklIkkE.js";import"./index-DRjF_FHU.js";const M="_gaugeContainer_1gy69_1",V="_svg_1gy69_8",B="_bgCircle_1gy69_12",F="_progressCircle_1gy69_17",O="_content_1gy69_23",R="_valueText_1gy69_32",W="_labelText_1gy69_39",a={gaugeContainer:M,svg:V,bgCircle:B,progressCircle:F,content:O,valueText:R,labelText:W,"color-orange":"_color-orange_1gy69_50","color-blue":"_color-blue_1gy69_59","color-purple":"_color-purple_1gy69_68","color-red":"_color-red_1gy69_77","color-yellow":"_color-yellow_1gy69_86"},l=({value:D,label:d,size:e=120,color:m="orange",className:E=""})=>{const v=Math.min(100,Math.max(0,D)),i=10,p=(e-i)/2,g=2*Math.PI*p,I=g-v/100*g,L={width:e,height:e};return r.jsxs("div",{className:`${a.gaugeContainer} ${E}`,style:L,children:[r.jsxs("svg",{className:a.svg,width:e,height:e,viewBox:`0 0 ${e} ${e}`,children:[r.jsx("circle",{className:a.bgCircle,cx:e/2,cy:e/2,r:p,strokeWidth:i}),r.jsx("circle",{className:`${a.progressCircle} ${a[`color-${m}`]}`,cx:e/2,cy:e/2,r:p,strokeWidth:i,strokeDasharray:g,strokeDashoffset:I,transform:`rotate(-90 ${e/2} ${e/2})`})]}),r.jsxs("div",{className:a.content,children:[r.jsxs("span",{className:`${a.valueText} ${a[`color-${m}`]}`,children:[Math.round(v),"%"]}),d&&r.jsx("span",{className:a.labelText,children:d})]})]})};l.__docgenInfo={description:"",methods:[],displayName:"CircularGauge",props:{value:{required:!0,tsType:{name:"number"},description:""},label:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"120",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'orange' | 'blue' | 'purple' | 'red' | 'yellow'",elements:[{name:"literal",value:"'orange'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'red'"},{name:"literal",value:"'yellow'"}]},description:"",defaultValue:{value:"'orange'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const Y={title:"Feedback/CircularGauge",component:l,parameters:{layout:"centered",backgrounds:{default:"dark",values:[{name:"dark",value:"#000000"}]}},tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100}},size:{control:{type:"number",min:50,max:300}},color:{control:"select",options:["orange","blue","purple","red","yellow"]}}},o={args:{value:75,label:"Efficiency"}},s={args:{value:42,size:80,label:"CPU",color:"blue"}},c={args:{value:98,size:200,label:"Shield Integrity",color:"orange"}},t={args:{value:15,label:"Life Support",color:"red"}},n={args:{value:100,label:"Charge",color:"yellow"}},u={render:()=>r.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",justifyContent:"center"},children:[r.jsx(l,{value:85,label:"Orange",color:"orange",size:100}),r.jsx(l,{value:65,label:"Blue",color:"blue",size:100}),r.jsx(l,{value:45,label:"Purple",color:"purple",size:100}),r.jsx(l,{value:25,label:"Red",color:"red",size:100}),r.jsx(l,{value:95,label:"Yellow",color:"yellow",size:100})]})};var y,b,_;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    value: 75,
    label: 'Efficiency'
  }
}`,...(_=(b=o.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};var x,f,C;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    value: 42,
    size: 80,
    label: 'CPU',
    color: 'blue'
  }
}`,...(C=(f=s.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var h,j,w;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    value: 98,
    size: 200,
    label: 'Shield Integrity',
    color: 'orange'
  }
}`,...(w=(j=c.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var T,S,$;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    value: 15,
    label: 'Life Support',
    color: 'red'
  }
}`,...($=(S=t.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};var N,G,k;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    value: 100,
    label: 'Charge',
    color: 'yellow'
  }
}`,...(k=(G=n.parameters)==null?void 0:G.docs)==null?void 0:k.source}}};var q,z,P;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }}>
            <CircularGauge value={85} label="Orange" color="orange" size={100} />
            <CircularGauge value={65} label="Blue" color="blue" size={100} />
            <CircularGauge value={45} label="Purple" color="purple" size={100} />
            <CircularGauge value={25} label="Red" color="red" size={100} />
            <CircularGauge value={95} label="Yellow" color="yellow" size={100} />
        </div>
}`,...(P=(z=u.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};const H=["Default","Small","Large","Critical","Full","AllColors"];export{u as AllColors,t as Critical,o as Default,n as Full,c as Large,s as Small,H as __namedExportsOrder,Y as default};
