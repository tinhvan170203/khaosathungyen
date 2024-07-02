import{r as t,j as e}from"./index-2b00a054.js";import{D as b,a as g,h as j,d as y,b as N,c as S,S as w}from"./DialogDelete-f919c647.js";import{S as B}from"./react-select.esm-a86401bf.js";import"./index.esm-a80e06b2.js";import{u as v,C}from"./index.esm-322da860.js";import"./dayjs.min-51d44ca9.js";import{d as _}from"./Quantridoanvien-c7eb712b.js";import{b as k}from"./bachamApi-b2e350fc.js";import{a as D,I as E}from"./LastPage-e02fc572.js";import{B as T}from"./Button-c283a03a.js";import{s as V}from"./ButtonBase-ca61bcf9.js";import"./createSvgIcon-46c59fe3.js";import"./GridView-85d728d6.js";import"./Search-c2bf7f37.js";import"./base-e8aaf39e.js";import"./canboApi-c8a721f9.js";import"./MilitaryTech-7c0df4b6.js";import"./Add-84462153.js";import"./chucvuApi-d5c3a3e9.js";import"./donviApi-468d849b.js";const P=t.forwardRef(function(a,o){return e.jsx(w,{direction:"up",ref:o,...a})}),q=V(E)({position:"absolute",right:"16px",top:"4px"});function ae({open:i,item:a,onCloseDialogChangeBacHam:o,onSubmit:n}){var d;const l=v({defaultValues:{ghichu:"",ngaylenham:""}}),[p,u]=t.useState([]),h=l.setValue;l.watch,t.useEffect(()=>{(async()=>{try{let s=await k.getBachams();u(s.data.map(m=>({value:m._id,label:m.bacham})))}catch(s){console.log(s.message)}})()},[]),t.useEffect(()=>{a&&h("bacham",{value:a==null?void 0:a.bachamPopulate[0]._id,label:a==null?void 0:a.bachamPopulate[0].bacham},{shouldValidate:!0})},[a]);const x=async r=>{if(n){const s={...r,id_edit:a._id};await n(s),o()}},{isSubmitting:f}=l.formState,{register:c}=l;return e.jsx(e.Fragment,{children:e.jsxs(b,{maxWidth:"lg",fullWidth:!0,disableEscapeKeyDown:!0,onClose:(r,s)=>{s!=="backdropClick"&&o(r,s)},open:i,TransitionComponent:P,keepMounted:!0,"aria-describedby":"alert-dialog-slide-description",children:[e.jsxs(g,{style:{display:"flex",borderBottom:"1px solid #ccc",backgroundColor:"rgb(30, 41, 59 )",margin:"0px"},children:[e.jsx(j,{style:{color:"white",fontSize:"24px",marginRight:"8px"}}),e.jsxs("span",{className:"text-white text-[18px]",children:['Thay đổi cấp bậc hàm đối với đồng chí "',(d=a==null?void 0:a.bachamPopulate[0])==null?void 0:d.bacham," ",a==null?void 0:a.hoten,'"']}),e.jsx(q,{onClick:()=>o(),children:e.jsx(y,{style:{color:"white"}})})]}),e.jsx(N,{children:e.jsx(D,{children:e.jsxs("form",{onSubmit:l.handleSubmit(x),style:{width:"100%"},children:[e.jsxs("div",{className:"flex flex-wrap flex-col flex-1 p-2",children:[e.jsxs("div",{className:"flex-col flex flex-1 px-1",children:[e.jsx("label",{className:"underline font-semibold",children:"Cấp bậc hàm mới:"}),e.jsx(C,{control:l.control,name:"bacham",render:({field:r})=>e.jsx(B,{options:p,className:"basic-multi-select my-4 p-1",classNamePrefix:"select",placeholder:"Vui lòng chọn cấp hàm",required:!0,...r})})]}),e.jsxs("div",{className:"flex-col flex flex-1 px-1",children:[e.jsxs("label",{className:"underline font-semibold",children:[e.jsx("span",{className:"text-red-600 font-semibold",children:" (*)"})," Ngày lên quân hàm: "]}),e.jsx("input",{...c("ngaylenham"),placeholder:"dd-mm-yyyy",type:"date",className:`outline-none my-4 border rounded-md p-2 border-neutral-600\r
                  focus:ring-2 focus:border-blue-400`,required:!0})]}),e.jsxs("div",{className:"flex-col flex flex-1 px-1",children:[e.jsx("label",{className:"underline font-semibold",children:" Ghi chú: "}),e.jsx("input",{...c("ghichu"),placeholder:"Ghi chú",type:"text",className:`outline-none my-4 border rounded-md p-2 border-neutral-600\r
                  focus:ring-2 focus:border-blue-400`})]})]}),e.jsx(S,{children:e.jsxs(T,{color:"primary",variant:"contained",disabled:f,type:"submit",style:{margin:"4px auto"},children:[e.jsx(_,{}),e.jsx("span",{children:"Lưu dữ liệu"})]})})]})})})]})})}export{ae as default};
