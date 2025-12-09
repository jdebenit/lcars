import{j as a}from"./jsx-runtime-DiklIkkE.js";import{R as u}from"./index-DRjF_FHU.js";const v="_checkboxContainer_1adad_1",T="_indicator_1adad_20",S="_disabled_1adad_25",E="_innerLight_1adad_45",R="_checked_1adad_55",A="_label_1adad_61",e={checkboxContainer:v,indicator:T,disabled:S,innerLight:E,checked:R,label:A,"color-orange":"_color-orange_1adad_68","color-blue":"_color-blue_1adad_72","color-purple":"_color-purple_1adad_76","color-red":"_color-red_1adad_80","color-tan":"_color-tan_1adad_84","color-yellow":"_color-yellow_1adad_88"},s=({label:o,checked:r,onChange:t,color:d="yellow",className:x="",disabled:i=!1})=>{const y=()=>{i||t(!r)};return a.jsxs("div",{className:`${e.checkboxContainer} ${x} ${i?e.disabled:""}`,onClick:y,children:[a.jsx("div",{className:`${e.indicator} ${r?e.checked:""} ${e[`color-${d}`]}`,children:a.jsx("div",{className:e.innerLight})}),o&&a.jsx("span",{className:e.label,children:o})]})};s.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"string"},description:""},checked:{required:!0,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},color:{required:!1,tsType:{name:"union",raw:"'orange' | 'blue' | 'purple' | 'red' | 'yellow' | 'tan'",elements:[{name:"literal",value:"'orange'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'red'"},{name:"literal",value:"'yellow'"},{name:"literal",value:"'tan'"}]},description:"",defaultValue:{value:"'yellow'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const w={title:"Form/Checkbox",component:s,tags:["autodocs"],argTypes:{color:{control:"select",options:["orange","blue","purple","red","yellow","tan"]}}},l={args:{label:"ACTIVATE SHIELDS",checked:!1,onChange:o=>console.log("Checked:",o),color:"orange"}},c={args:{label:"AUTO-DESTRUCT",checked:!0,disabled:!0,color:"red",onChange:()=>{}}},n={render:()=>{const[o,r]=u.useState(!0),[t,d]=u.useState(!1);return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[a.jsx(s,{label:"MAIN POWER",checked:o,onChange:r,color:"blue"}),a.jsx(s,{label:"AUX POWER",checked:t,onChange:d,color:"tan"})]})}};var p,m,h;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'ACTIVATE SHIELDS',
    checked: false,
    onChange: checked => console.log('Checked:', checked),
    color: 'orange'
  }
}`,...(h=(m=l.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var b,_,g;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'AUTO-DESTRUCT',
    checked: true,
    disabled: true,
    color: 'red',
    onChange: () => {}
  }
}`,...(g=(_=c.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};var C,k,f;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(f=(k=n.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};const N=["Default","Disabled","Group"];export{l as Default,c as Disabled,n as Group,N as __namedExportsOrder,w as default};
