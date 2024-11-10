import{j as e,s as P,a as S,b as M}from"./index-Cmb3fh58.js";import{R as x}from"./vendor-react-S76kyUnC.js";import{u as A}from"./demoModeStore-Ba8Qd-Nc.js";import{A as R,B as E,C as F}from"./vendor-firebase-DU3MYe4I.js";import"./vendor-utils-BGzRgZPY.js";const I=({options:r,onSubmit:c})=>{const[i,t]=x.useState({name:"",description:"",price:0,category:"Coffees",image:"",availableOptions:[]}),[d,o]=x.useState(null),[n,g]=x.useState(!1),b=async s=>{if(s.preventDefault(),!(n||!d))try{g(!0);const a=R(P,`products/${Date.now()}_${d.name}`),m=await E(a,d),u=await F(m.ref);await c({...i,image:u}),t({name:"",description:"",price:0,category:"Coffees",image:"",availableOptions:[]}),o(null)}catch(a){console.error("Error adding product:",a)}finally{g(!1)}};return e.jsxs("form",{onSubmit:b,className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Product Name"}),e.jsx("input",{type:"text",value:i.name,onChange:s=>t(a=>({...a,name:s.target.value})),className:"w-full p-2 border rounded",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Price (£)"}),e.jsx("input",{type:"number",value:i.price||"",onChange:s=>t(a=>({...a,price:parseFloat(s.target.value)})),step:"0.01",min:"0",className:"w-full p-2 border rounded",required:!0})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Description"}),e.jsx("textarea",{value:i.description,onChange:s=>t(a=>({...a,description:s.target.value})),className:"w-full p-2 border rounded",rows:3,required:!0})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Category"}),e.jsxs("select",{value:i.category,onChange:s=>t(a=>({...a,category:s.target.value})),className:"w-full p-2 border rounded",required:!0,children:[e.jsx("option",{value:"Coffees",children:"Coffees"}),e.jsx("option",{value:"Teas",children:"Teas"}),e.jsx("option",{value:"Cakes",children:"Cakes"}),e.jsx("option",{value:"Hot Chocolate",children:"Hot Chocolate"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Product Image"}),e.jsx("input",{type:"file",accept:"image/*",onChange:s=>{var a;return o(((a=s.target.files)==null?void 0:a[0])||null)},className:"w-full p-2 border rounded",required:!0})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Available Options"}),e.jsx("div",{className:"grid grid-cols-3 gap-2",children:r==null?void 0:r.map(s=>e.jsxs("label",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"checkbox",checked:i.availableOptions.includes(s.id),onChange:a=>{t(m=>({...m,availableOptions:a.target.checked?[...m.availableOptions,s.id]:m.availableOptions.filter(u=>u!==s.id)}))},className:"rounded border-gray-300"}),e.jsxs("span",{children:[s.title," (+£",s.price.toFixed(2),")"]})]},s.id))})]}),e.jsx("button",{type:"submit",disabled:n||!d,className:"w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400",children:n?"Adding Product...":"Add Product"})]})},q=({products:r,options:c,onDelete:i})=>e.jsx("div",{className:"mt-8 space-y-4",children:r.length===0?e.jsx("p",{className:"text-gray-500 text-center py-4",children:"No products available."}):r.map(t=>e.jsxs("div",{className:"flex items-center justify-between p-4 bg-gray-50 rounded",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("img",{src:t.image,alt:t.name,className:"w-16 h-16 object-cover rounded"}),e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:t.name}),e.jsxs("span",{className:"ml-4 text-gray-600",children:["£",t.price.toFixed(2)]}),e.jsx("p",{className:"text-sm text-gray-500",children:t.category}),t.availableOptions&&t.availableOptions.length>0&&e.jsxs("p",{className:"text-sm text-gray-500",children:["Options: ",t.availableOptions.map(d=>{var o;return(o=c==null?void 0:c.find(n=>n.id===d))==null?void 0:o.title}).filter(Boolean).join(", ")]})]})]}),e.jsx("button",{onClick:()=>i(t.id),className:"text-red-600 hover:text-red-800",children:"Delete"})]},t.id))}),H=()=>{var C;const{settings:r,loading:c,error:i,updateMaxOrdersPerSlot:t,toggleBlockedDate:d,addProductOption:o,updateProductOption:n,deleteProductOption:g}=S(),{products:b,loading:s,error:a,addProduct:m,deleteProduct:u,fetchProducts:f}=M(),{isDemoMode:p,toggleDemoMode:D}=A(),[j,N]=x.useState(""),[y,w]=x.useState(0),[h,O]=x.useState("");x.useEffect(()=>{S.getState().fetchSettings(),f()},[f]);const k=()=>{j.trim()&&(o({title:j,price:y}),N(""),w(0))};return c||s?e.jsx("div",{className:"flex justify-center items-center min-h-screen",children:e.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"})}):i||a?e.jsxs("div",{className:"text-red-600 p-4",children:["Error: ",i||a]}):r?e.jsxs("div",{className:"max-w-4xl mx-auto p-6",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Admin Settings"}),e.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6 mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:"Demo Mode"}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"font-medium",children:["Demo Mode is ",p?"Active":"Inactive"]}),e.jsx("p",{className:"text-sm text-gray-600",children:p?"Orders will be processed without real payments":"Orders will require real payments"})]}),e.jsx("button",{onClick:D,className:`px-4 py-2 rounded-lg transition-colors ${p?"bg-yellow-100 text-yellow-800 hover:bg-yellow-200":"bg-gray-100 text-gray-800 hover:bg-gray-200"}`,children:p?"Disable Demo Mode":"Enable Demo Mode"})]})]}),e.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6 mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:"Product Options"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsx("input",{type:"text",placeholder:"Option name (e.g., 'Regular', 'Large')",className:"flex-1 p-2 border rounded",value:j,onChange:l=>N(l.target.value)}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-gray-500",children:"£"}),e.jsx("input",{type:"number",value:y,onChange:l=>w(parseFloat(l.target.value)||0),step:"0.10",min:"0",className:"w-24 p-2 border rounded"})]}),e.jsx("button",{onClick:k,className:"bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700",children:"Add Option"})]}),(C=r.productOptions)==null?void 0:C.map(l=>e.jsxs("div",{className:"flex justify-between items-center p-4 bg-gray-50 rounded",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("input",{type:"text",value:l.title,onChange:v=>n({...l,title:v.target.value}),className:"p-2 border rounded"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-gray-500",children:"£"}),e.jsx("input",{type:"number",value:l.price,onChange:v=>n({...l,price:parseFloat(v.target.value)||0}),step:"0.10",min:"0",className:"w-24 p-2 border rounded"})]})]}),e.jsx("button",{onClick:()=>g(l.id),className:"text-red-600 hover:text-red-800",children:"Delete"})]},l.id))]})]}),e.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6 mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:"Maximum Orders Per Time Slot"}),e.jsx("input",{type:"number",min:"1",value:r.maxOrdersPerSlot,onChange:l=>t(parseInt(l.target.value)),className:"w-24 p-2 border rounded"})]}),e.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6 mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:"Blocked Dates"}),e.jsxs("div",{className:"flex gap-4 mb-4",children:[e.jsx("input",{type:"date",value:h,onChange:l=>O(l.target.value),min:new Date().toISOString().split("T")[0],className:"p-2 border rounded"}),e.jsx("button",{onClick:()=>{h&&(d(h),O(""))},disabled:!h,className:"bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400",children:"Block/Unblock Date"})]}),e.jsx("div",{className:"grid gap-2",children:r.blockedDates.map(l=>e.jsxs("div",{className:"flex justify-between items-center p-2 bg-gray-50 rounded",children:[e.jsx("span",{children:new Date(l).toLocaleDateString()}),e.jsx("button",{onClick:()=>d(l),className:"text-red-600 hover:text-red-800",children:"Remove"})]},l))})]}),e.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:"Product Management"}),e.jsx(I,{options:r.productOptions||[],onSubmit:m}),e.jsx(q,{products:b,options:r.productOptions||[],onDelete:u})]})]}):e.jsx("div",{className:"text-center py-8",children:e.jsx("p",{className:"text-gray-600",children:"No settings available. Please try again later."})})};export{H as AdminSettings,H as default};
//# sourceMappingURL=AdminSettings-D3YDGe_x.js.map
