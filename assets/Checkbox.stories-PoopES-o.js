import{j as a}from"./jsx-runtime-DiklIkkE.js";import{R as p}from"./index-DRjF_FHU.js";const S="_checkboxContainer_1adad_1",E="_indicator_1adad_20",R="_disabled_1adad_25",A="_innerLight_1adad_45",D="_checked_1adad_55",j="_label_1adad_61",e={checkboxContainer:S,indicator:E,disabled:R,innerLight:A,checked:D,label:j,"color-orange":"_color-orange_1adad_68","color-blue":"_color-blue_1adad_72","color-purple":"_color-purple_1adad_76","color-red":"_color-red_1adad_80","color-tan":"_color-tan_1adad_84","color-yellow":"_color-yellow_1adad_88"},s=({label:o,checked:l,onChange:t,color:d="yellow",className:y="",disabled:u=!1,...i})=>{const v=T=>{u||t(!l),i.onClick&&i.onClick(T)};return a.jsxs("div",{className:`${e.checkboxContainer} ${y} ${u?e.disabled:""}`,onClick:v,...i,children:[a.jsx("div",{className:`${e.indicator} ${l?e.checked:""} ${e[`color-${d}`]}`,children:a.jsx("div",{className:e.innerLight})}),o&&a.jsx("span",{className:e.label,children:o})]})};s.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"string"},description:""},checked:{required:!0,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},color:{required:!1,tsType:{name:"union",raw:"'orange' | 'blue' | 'purple' | 'red' | 'yellow' | 'tan'",elements:[{name:"literal",value:"'orange'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'red'"},{name:"literal",value:"'yellow'"},{name:"literal",value:"'tan'"}]},description:"",defaultValue:{value:"'yellow'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const O={title:"Form/Checkbox",component:s,tags:["autodocs"],argTypes:{color:{control:"select",options:["orange","blue","purple","red","yellow","tan"]}}},r={args:{label:"ACTIVATE SHIELDS",checked:!1,onChange:o=>console.log("Checked:",o),color:"orange"}},c={args:{label:"AUTO-DESTRUCT",checked:!0,disabled:!0,color:"red",onChange:()=>{}}},n={render:()=>{const[o,l]=p.useState(!0),[t,d]=p.useState(!1);return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[a.jsx(s,{label:"MAIN POWER",checked:o,onChange:l,color:"blue"}),a.jsx(s,{label:"AUX POWER",checked:t,onChange:d,color:"tan"})]})}};var m,h,b;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'ACTIVATE SHIELDS',
    checked: false,
    onChange: checked => console.log('Checked:', checked),
    color: 'orange'
  }
}`,...(b=(h=r.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var _,g,C;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'AUTO-DESTRUCT',
    checked: true,
    disabled: true,
    color: 'red',
    onChange: () => {}
  }
}`,...(C=(g=c.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var k,f,x;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const [c1, setC1] = React.useState(true);
    const [c2, setC2] = React.useState(false);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }}>
                <Checkbox label="MAIN POWER" checked={c1} onChange={setC1} color="blue" />
                <Checkbox label="AUX POWER" checked={c2} onChange={setC2} color="tan" />
            </div>;
  }
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const I=["Default","Disabled","Group"];export{r as Default,c as Disabled,n as Group,I as __namedExportsOrder,O as default};
