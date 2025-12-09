import{j as e}from"./jsx-runtime-DiklIkkE.js";import{C as d}from"./Corner-DwoPOox8.js";import{B as n}from"./Bar-CQUNA_iu.js";import"./index-DRjF_FHU.js";const j="_frameContainer_1gj3z_1",h="_topRow_1gj3z_8",v="_bottomRow_1gj3z_9",S="_topBarSpacer_1gj3z_21",b="_bottomBarSpacer_1gj3z_22",y="_fillBar_1gj3z_37",N="_cap_1gj3z_41",w="_middleRow_1gj3z_48",R="_leftSidebar_1gj3z_56",C="_content_1gj3z_71",B="_titleText_1gj3z_79",t={frameContainer:j,topRow:h,bottomRow:v,topBarSpacer:S,bottomBarSpacer:b,fillBar:y,cap:N,middleRow:w,leftSidebar:R,content:C,titleText:B},l=({children:g,title:i,color:a="tan",thickness:r=20,className:_=""})=>e.jsxs("div",{className:`${t.frameContainer} ${_}`,children:[e.jsxs("div",{className:t.topRow,children:[e.jsx(d,{corner:"top-left",color:a,width:100,height:r+30,thickness:r}),e.jsx("div",{className:t.topBarSpacer,children:e.jsx(n,{color:a,rounded:"right",className:t.topBar,children:i&&e.jsx("span",{className:t.titleText,children:i})})})]}),e.jsxs("div",{className:t.contentRow,children:[e.jsx("div",{className:t.leftBarSpacer,style:{width:r},children:e.jsx("div",{className:`${t.leftBar} ${t[`bg-${a}`]}`})}),e.jsx("div",{className:t.content,children:g})]}),e.jsxs("div",{className:t.bottomRow,children:[e.jsx("div",{className:t.bottomLeftCap,children:e.jsx(n,{color:a,rounded:"left",className:t.cap})}),e.jsx("div",{className:t.bottomBarSpacer,children:e.jsx(n,{color:a,className:t.fillBar})}),e.jsx(d,{corner:"bottom-right",color:a,width:100,height:r+20,thickness:r})]})]});l.__docgenInfo={description:"",methods:[],displayName:"Frame",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},title:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:"'orange' | 'blue' | 'purple' | 'red' | 'yellow' | 'tan'",elements:[{name:"literal",value:"'orange'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'red'"},{name:"literal",value:"'yellow'"},{name:"literal",value:"'tan'"}]},description:"Color of the frame",defaultValue:{value:"'tan'",computed:!1}},thickness:{required:!1,tsType:{name:"number"},description:"Width of the frame border (elbow thickness)",defaultValue:{value:"20",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const E={title:"Layout/Frame",component:l,tags:["autodocs"],argTypes:{color:{control:{type:"select"},options:["orange","blue","purple","red","yellow","tan"]}}},o={args:{title:"MAIN SENSORS",color:"tan",children:e.jsx("div",{style:{minHeight:"100px",border:"1px dashed #444",padding:"10px"},children:"Frame Content Area"})}},s={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(l,{title:"TACTICAL",color:"red",children:e.jsx("div",{style:{padding:"10px"},children:"Red Alert Status"})}),e.jsx(l,{title:"SCIENCE",color:"blue",children:e.jsx("div",{style:{padding:"10px"},children:"Sensor Sweep in Progress"})})]})};var c,p,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: 'MAIN SENSORS',
    color: 'tan',
    children: <div style={{
      minHeight: '100px',
      border: '1px dashed #444',
      padding: '10px'
    }}>Frame Content Area</div>
  }
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,x,f;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>
            <Frame title="TACTICAL" color="red">
                <div style={{
        padding: '10px'
      }}>Red Alert Status</div>
            </Frame>
            <Frame title="SCIENCE" color="blue">
                <div style={{
        padding: '10px'
      }}>Sensor Sweep in Progress</div>
            </Frame>
        </div>
}`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const I=["Default","Colors"];export{s as Colors,o as Default,I as __namedExportsOrder,E as default};
