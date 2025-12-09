import{j as a}from"./jsx-runtime-DiklIkkE.js";import"./index-DRjF_FHU.js";const b="_gridContainer_1ar0l_1",A="_scrollWrapper_1ar0l_12",L="_headerRow_1ar0l_21",R="_headerCell_1ar0l_30",S="_bodyWrapper_1ar0l_42",T="_sideBar_1ar0l_50",v="_rowsContainer_1ar0l_61",D="_row_1ar0l_61",$="_cell_1ar0l_79",M="_footerBar_1ar0l_90",e={gridContainer:b,scrollWrapper:A,headerRow:L,headerCell:R,bodyWrapper:S,sideBar:T,rowsContainer:v,row:D,cell:$,footerBar:M,"color-orange":"_color-orange_1ar0l_118","color-blue":"_color-blue_1ar0l_122","color-purple":"_color-purple_1ar0l_126","color-red":"_color-red_1ar0l_130","color-tan":"_color-tan_1ar0l_134","color-yellow":"_color-yellow_1ar0l_138","bg-orange":"_bg-orange_1ar0l_142","bg-blue":"_bg-blue_1ar0l_146","bg-purple":"_bg-purple_1ar0l_150","bg-red":"_bg-red_1ar0l_154","bg-tan":"_bg-tan_1ar0l_158","bg-yellow":"_bg-yellow_1ar0l_162"},s=({columns:l,rows:r,color:c="tan",className:C="",headerColor:O="orange",height:E="400px"})=>a.jsxs("div",{className:`${e.gridContainer} ${C}`,style:{height:E},children:[a.jsxs("div",{className:e.scrollWrapper,children:[a.jsx("div",{className:e.headerRow,children:l.map(n=>a.jsx("div",{className:`${e.headerCell} ${e[`color-${O}`]}`,style:{width:n.width,flex:n.width?"none":1,textAlign:n.align||"left"},children:n.headerName},n.field))}),a.jsxs("div",{className:e.bodyWrapper,children:[a.jsx("div",{className:`${e.sideBar} ${e[`bg-${c}`]}`}),a.jsx("div",{className:e.rowsContainer,children:r.map((n,m)=>a.jsx("div",{className:e.row,children:l.map(t=>a.jsx("div",{className:e.cell,style:{width:t.width,flex:t.width?"none":1,textAlign:t.align||"left"},children:n[t.field]},`${m}-${t.field}`))},m))})]})]}),a.jsx("div",{className:`${e.footerBar} ${e[`bg-${c}`]}`})]});s.__docgenInfo={description:"",methods:[],displayName:"DataGrid",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"GridColumn"}],raw:"GridColumn[]"},description:""},rows:{required:!0,tsType:{name:"Array",elements:[{name:"any"}],raw:"any[]"},description:""},color:{required:!1,tsType:{name:"union",raw:"'orange' | 'blue' | 'purple' | 'red' | 'yellow' | 'tan'",elements:[{name:"literal",value:"'orange'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'red'"},{name:"literal",value:"'yellow'"},{name:"literal",value:"'tan'"}]},description:"",defaultValue:{value:"'tan'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},headerColor:{required:!1,tsType:{name:"union",raw:"'orange' | 'blue' | 'purple' | 'red' | 'yellow' | 'tan'",elements:[{name:"literal",value:"'orange'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'red'"},{name:"literal",value:"'yellow'"},{name:"literal",value:"'tan'"}]},description:"",defaultValue:{value:"'orange'",computed:!1}},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"'400px'",computed:!1}}}};const B={title:"Data/DataGrid",component:s,tags:["autodocs"],argTypes:{color:{control:{type:"select"},options:["orange","blue","purple","red","yellow","tan"]},headerColor:{control:{type:"select"},options:["orange","blue","purple","red","yellow","tan"]}}},x=[{field:"id",headerName:"ID",width:80},{field:"system",headerName:"SYSTEM",width:150},{field:"status",headerName:"STATUS",width:120},{field:"energy",headerName:"ENERGY OUTPUT",align:"right"}],I=[{id:"001",system:"WARP CORE",status:"ONLINE",energy:"98%"},{id:"002",system:"PHASERS",status:"STANDBY",energy:"45%"},{id:"003",system:"SHIELDS",status:"ONLINE",energy:"100%"},{id:"004",system:"LRS",status:"SCANNING",energy:"12%"},{id:"005",system:"IMPULSE",status:"OFFLINE",energy:"0%"},{id:"006",system:"LIFE SUPPORT",status:"ONLINE",energy:"99%"},{id:"007",system:"TRANSPORTER",status:"STANDBY",energy:"5%"},{id:"008",system:"REPLICATOR",status:"ONLINE",energy:"15%"}],o={args:{columns:x,rows:I,color:"tan",headerColor:"orange",height:"300px"}},d={args:{columns:[{field:"item",headerName:"ITEM NAME"},{field:"qty",headerName:"QUANTITY",width:100,align:"right"},{field:"location",headerName:"LOCATION",width:150}],rows:[{item:"SELF-SEALING STEM BOLTS",qty:100,location:"CARGO BAY 1"},{item:"YAMOK SAUCE",qty:50,location:"PROMENADE"},{item:"PHASER RIFLES",qty:12,location:"ARMORY"},{item:"TRICORDERS",qty:25,location:"LAB 3"}],color:"blue",headerColor:"blue"}},i={render:l=>a.jsx("div",{style:{width:"600px",border:"1px solid #444"},children:a.jsx(s,{...l})}),args:{headerColor:"purple",color:"purple",height:"300px",columns:[{field:"id",headerName:"ID",width:80},{field:"c1",headerName:"COLUMN 1",width:150},{field:"c2",headerName:"COLUMN 2",width:150},{field:"c3",headerName:"COLUMN 3",width:150},{field:"c4",headerName:"COLUMN 4",width:150},{field:"c5",headerName:"COLUMN 5",width:150},{field:"c6",headerName:"COLUMN 6",width:150},{field:"c7",headerName:"COLUMN 7",width:150},{field:"c8",headerName:"COLUMN 8",width:150}],rows:Array.from({length:10}).map((l,r)=>({id:`R-${r}`,c1:`Data 1-${r}`,c2:`Data 2-${r}`,c3:`Data 3-${r}`,c4:`Data 4-${r}`,c5:`Data 5-${r}`,c6:`Data 6-${r}`,c7:`Data 7-${r}`,c8:`Data 8-${r}`}))}};var h,p,u;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    columns: columns,
    rows: rows,
    color: 'tan',
    headerColor: 'orange',
    height: '300px'
  }
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var N,g,_;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    columns: [{
      field: 'item',
      headerName: 'ITEM NAME'
    }, {
      field: 'qty',
      headerName: 'QUANTITY',
      width: 100,
      align: 'right'
    }, {
      field: 'location',
      headerName: 'LOCATION',
      width: 150
    }],
    rows: [{
      item: 'SELF-SEALING STEM BOLTS',
      qty: 100,
      location: 'CARGO BAY 1'
    }, {
      item: 'YAMOK SAUCE',
      qty: 50,
      location: 'PROMENADE'
    }, {
      item: 'PHASER RIFLES',
      qty: 12,
      location: 'ARMORY'
    }, {
      item: 'TRICORDERS',
      qty: 25,
      location: 'LAB 3'
    }],
    color: 'blue',
    headerColor: 'blue'
  }
}`,...(_=(g=d.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};var w,y,f;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <div style={{
    width: '600px',
    border: '1px solid #444'
  }}>
            <DataGrid {...args} />
        </div>,
  args: {
    headerColor: 'purple',
    color: 'purple',
    height: '300px',
    columns: [{
      field: 'id',
      headerName: 'ID',
      width: 80
    }, {
      field: 'c1',
      headerName: 'COLUMN 1',
      width: 150
    }, {
      field: 'c2',
      headerName: 'COLUMN 2',
      width: 150
    }, {
      field: 'c3',
      headerName: 'COLUMN 3',
      width: 150
    }, {
      field: 'c4',
      headerName: 'COLUMN 4',
      width: 150
    }, {
      field: 'c5',
      headerName: 'COLUMN 5',
      width: 150
    }, {
      field: 'c6',
      headerName: 'COLUMN 6',
      width: 150
    }, {
      field: 'c7',
      headerName: 'COLUMN 7',
      width: 150
    }, {
      field: 'c8',
      headerName: 'COLUMN 8',
      width: 150
    }],
    rows: Array.from({
      length: 10
    }).map((_, i) => ({
      id: \`R-\${i}\`,
      c1: \`Data 1-\${i}\`,
      c2: \`Data 2-\${i}\`,
      c3: \`Data 3-\${i}\`,
      c4: \`Data 4-\${i}\`,
      c5: \`Data 5-\${i}\`,
      c6: \`Data 6-\${i}\`,
      c7: \`Data 7-\${i}\`,
      c8: \`Data 8-\${i}\`
    }))
  }
}`,...(f=(y=i.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const j=["Sensors","Inventory","WideTable"];export{d as Inventory,o as Sensors,i as WideTable,j as __namedExportsOrder,B as default};
