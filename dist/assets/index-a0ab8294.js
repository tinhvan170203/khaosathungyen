import{r as g,j as e,m as H,v as K,u as E,d as V}from"./index-cb7c9cfe.js";import{d as G}from"./GridView-9d203a73.js";import{e as u,f as w,P as R,h as v,i as D,c as f,d as s,j as T,k as M,u as Y,a as q,I as b,l as N,m as P,n as C,o as k}from"./LastPage-dbb82f1e.js";import{d as y}from"./dayjs.min-e2ae2d72.js";import{d as J}from"./Flag-77eebb76.js";import{T as W}from"./Tooltip-b6739f89.js";import{c as U}from"./canboApi-0b5763d3.js";import"./createSvgIcon-fd86aae4.js";import"./ButtonBase-378bd36d.js";function $(i){const n=Y(),{count:r,page:a,rowsPerPage:h,onPageChange:o}=i,x=t=>{o(t,0)},d=t=>{o(t,a-1)},l=t=>{o(t,a+1)},c=t=>{o(t,Math.max(0,Math.ceil(r/h)-1))};return e.jsxs(q,{sx:{flexShrink:0,ml:2.5},children:[e.jsx(b,{onClick:x,disabled:a===0,"aria-label":"first page",children:n.direction==="rtl"?e.jsx(N,{}):e.jsx(P,{})}),e.jsx(b,{onClick:d,disabled:a===0,"aria-label":"previous page",children:n.direction==="rtl"?e.jsx(C,{}):e.jsx(k,{})}),e.jsx(b,{onClick:l,disabled:a>=Math.ceil(r/h)-1,"aria-label":"next page",children:n.direction==="rtl"?e.jsx(k,{}):e.jsx(C,{})}),e.jsx(b,{onClick:c,disabled:a>=Math.ceil(r/h)-1,"aria-label":"last page",children:n.direction==="rtl"?e.jsx(P,{}):e.jsx(N,{})})]})}$.propTypes={count:u.number.isRequired,onPageChange:u.func.isRequired,page:u.number.isRequired,rowsPerPage:u.number.isRequired};function X({list:i}){const[n,r]=g.useState(0),[a,h]=g.useState(10),o=n>0?Math.max(0,(1+n)*a-i.length):0,x=(l,c)=>{r(c)},d=l=>{h(parseInt(l.target.value,10)),r(0)};return e.jsxs(e.Fragment,{children:[e.jsx(w,{component:R,children:e.jsxs(v,{"aria-label":"custom pagination table",children:[e.jsx(D,{children:e.jsxs(f,{children:[e.jsx(s,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"rgb(30, 41, 59 )"},children:"#"}),e.jsx(s,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"rgb(30, 41, 59 )"},children:"Số quyết định"}),e.jsx(s,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",minWidth:"100px",backgroundColor:"rgb(30, 41, 59 )"},children:"Hình thức"}),e.jsx(s,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",minWidth:"100px",backgroundColor:"rgb(30, 41, 59 )"},children:"Cấp khen"}),e.jsx(s,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",minWidth:"100px",backgroundColor:"rgb(30, 41, 59 )"},children:"Người ký"}),e.jsx(s,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",minWidth:"100px",backgroundColor:"rgb(30, 41, 59 )"},children:"Ngày ký"}),e.jsx(s,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",minWidth:"200px",backgroundColor:"rgb(30, 41, 59 )"},children:"Nội dung khen"})]})}),e.jsxs(T,{children:[(a>0?i.slice(n*a,n*a+a):i).map((l,c)=>e.jsxs(f,{className:"hover:bg-slate-200 transition duration-300",children:[e.jsx(s,{className:"border-r border-slate-300",align:"left",style:{fontWeight:"bold"},children:n*a+c+1}),e.jsx(s,{className:"border-r border-slate-300",align:"left",children:e.jsx("span",{className:"font-bold",children:l.soQD})}),e.jsx(s,{className:"border-r border-slate-300",align:"left",children:l.hinhthuc}),e.jsx(s,{className:"border-r border-slate-300",align:"left",children:l.capkhen}),e.jsx(s,{className:"border-r border-slate-300",align:"left",children:l.nguoiky}),e.jsx(s,{className:"border-r border-slate-300",align:"left",children:y(l.ngayky).format("DD/MM/YYYY")}),e.jsx(s,{className:"border-r border-slate-300",align:"left",children:l.noidung})]},l._id)),o>0&&e.jsx(f,{style:{height:53*o},children:e.jsx(s,{colSpan:6})})]})]})}),e.jsx("div",{children:e.jsx(M,{rowsPerPageOptions:[10,25,50,100,{label:"Tất cả",value:-1}],count:i.length,rowsPerPage:a,page:n,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},component:"div",onPageChange:x,onRowsPerPageChange:d,ActionsComponent:$,labelRowsPerPage:"Số bản ghi hiển thị trên mỗi trang",labelDisplayedRows:function({from:c,to:t,count:j}){return`hiển thị ${c} đến ${t} bản ghi trong tổng số ${j!==-1?j:`more than ${t}`} bản ghi`}})})]})}function z(i){const n=Y(),{count:r,page:a,rowsPerPage:h,onPageChange:o}=i,x=t=>{o(t,0)},d=t=>{o(t,a-1)},l=t=>{o(t,a+1)},c=t=>{o(t,Math.max(0,Math.ceil(r/h)-1))};return e.jsxs(q,{sx:{flexShrink:0,ml:2.5},children:[e.jsx(b,{onClick:x,disabled:a===0,"aria-label":"first page",children:n.direction==="rtl"?e.jsx(N,{}):e.jsx(P,{})}),e.jsx(b,{onClick:d,disabled:a===0,"aria-label":"previous page",children:n.direction==="rtl"?e.jsx(C,{}):e.jsx(k,{})}),e.jsx(b,{onClick:l,disabled:a>=Math.ceil(r/h)-1,"aria-label":"next page",children:n.direction==="rtl"?e.jsx(k,{}):e.jsx(C,{})}),e.jsx(b,{onClick:c,disabled:a>=Math.ceil(r/h)-1,"aria-label":"last page",children:n.direction==="rtl"?e.jsx(P,{}):e.jsx(N,{})})]})}z.propTypes={count:u.number.isRequired,onPageChange:u.func.isRequired,page:u.number.isRequired,rowsPerPage:u.number.isRequired};function Z({list:i}){const[n,r]=g.useState(0),[a,h]=g.useState(10),o=n>0?Math.max(0,(1+n)*a-i.length):0,x=(l,c)=>{r(c)},d=l=>{h(parseInt(l.target.value,10)),r(0)};return e.jsxs(e.Fragment,{children:[e.jsx(w,{component:R,children:e.jsxs(v,{"aria-label":"custom pagination table",children:[e.jsx(D,{children:e.jsxs(f,{children:[e.jsx(s,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"rgb(30, 41, 59 )"},children:"#"}),e.jsx(s,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"rgb(30, 41, 59 )"},children:"Số quyết định"}),e.jsx(s,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",minWidth:"100px",backgroundColor:"rgb(30, 41, 59 )"},children:"Hình thức"}),e.jsx(s,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",minWidth:"100px",backgroundColor:"rgb(30, 41, 59 )"},children:"Người ký"}),e.jsx(s,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",minWidth:"100px",backgroundColor:"rgb(30, 41, 59 )"},children:"Ngày ký"}),e.jsx(s,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",minWidth:"200px",backgroundColor:"rgb(30, 41, 59 )"},children:"Nội dung kỉ luật"})]})}),e.jsxs(T,{children:[(a>0?i.slice(n*a,n*a+a):i).map((l,c)=>e.jsxs(f,{className:"hover:bg-slate-200 transition duration-300",children:[e.jsx(s,{className:"border-r border-slate-300",align:"left",style:{fontWeight:"bold"},children:n*a+c+1}),e.jsx(s,{className:"border-r border-slate-300",align:"left",children:e.jsx("span",{className:"font-bold",children:l.soQD})}),e.jsx(s,{className:"border-r border-slate-300",align:"left",children:l.hinhthuc}),e.jsx(s,{className:"border-r border-slate-300",align:"left",children:l.nguoiky}),e.jsx(s,{className:"border-r border-slate-300",align:"left",children:y(l.ngayky).format("DD/MM/YYYY")}),e.jsx(s,{className:"border-r border-slate-300",align:"left",children:l.noidung})]},l._id)),o>0&&e.jsx(f,{style:{height:53*o},children:e.jsx(s,{colSpan:6})})]})]})}),e.jsx("div",{children:e.jsx(M,{rowsPerPageOptions:[10,25,50,100,{label:"Tất cả",value:-1}],count:i.length,rowsPerPage:a,page:n,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},component:"div",onPageChange:x,onRowsPerPageChange:d,ActionsComponent:z,labelRowsPerPage:"Số bản ghi hiển thị trên mỗi trang",labelDisplayedRows:function({from:c,to:t,count:j}){return`hiển thị ${c} đến ${t} bản ghi trong tổng số ${j!==-1?j:`more than ${t}`} bản ghi`}})})]})}const ee=i=>i.map((n,r)=>e.jsx(s,{className:"border-r border-slate-300",align:"center",children:n[`thang${r+1}`].result==="null"?"":e.jsx(W,{title:n[`thang${r+1}`].ghichu,children:e.jsx(J,{sx:{color:n[`thang${r+1}`].result}})})},r));function A(i){const n=Y(),{count:r,page:a,rowsPerPage:h,onPageChange:o}=i,x=t=>{o(t,0)},d=t=>{o(t,a-1)},l=t=>{o(t,a+1)},c=t=>{o(t,Math.max(0,Math.ceil(r/h)-1))};return e.jsxs(q,{sx:{flexShrink:0,ml:2.5},children:[e.jsx(b,{onClick:x,disabled:a===0,"aria-label":"first page",children:n.direction==="rtl"?e.jsx(N,{}):e.jsx(P,{})}),e.jsx(b,{onClick:d,disabled:a===0,"aria-label":"previous page",children:n.direction==="rtl"?e.jsx(C,{}):e.jsx(k,{})}),e.jsx(b,{onClick:l,disabled:a>=Math.ceil(r/h)-1,"aria-label":"next page",children:n.direction==="rtl"?e.jsx(k,{}):e.jsx(C,{})}),e.jsx(b,{onClick:c,disabled:a>=Math.ceil(r/h)-1,"aria-label":"last page",children:n.direction==="rtl"?e.jsx(P,{}):e.jsx(N,{})})]})}A.propTypes={count:u.number.isRequired,onPageChange:u.func.isRequired,page:u.number.isRequired,rowsPerPage:u.number.isRequired};function ae({list:i}){const[n,r]=g.useState(0),[a,h]=g.useState(10);n>0&&Math.max(0,(1+n)*a-i.length);const o=(d,l)=>{r(l)},x=d=>{h(parseInt(d.target.value,10)),r(0)};return e.jsxs(e.Fragment,{children:[e.jsx(w,{component:R,children:e.jsxs(v,{"aria-label":"custom pagination table",children:[e.jsx(D,{children:e.jsxs(f,{children:[e.jsx(s,{align:"left",rowSpan:2,style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"rgb(30, 41, 59 )"},children:"Năm"}),e.jsx(s,{align:"center",colSpan:12,style:{fontSize:"14px",color:"#fff",padding:"8px 8px",minWidth:"100px",backgroundColor:"rgb(30, 41, 59 )"},children:"Tháng"}),e.jsx(s,{align:"left",rowSpan:2,style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"rgb(30, 41, 59 )"},children:"Kết quả xếp loại đoàn viên"})]})}),e.jsxs(T,{children:[e.jsxs(f,{children:[e.jsx(s,{align:"center",className:"border-r border-slate-300"}),e.jsx(s,{align:"center",className:"border-r border-slate-300",style:{fontWeight:"bold"},children:"1"}),e.jsx(s,{align:"center",className:"border-r border-slate-300",style:{fontWeight:"bold"},children:"2"}),e.jsx(s,{align:"center",className:"border-r border-slate-300",style:{fontWeight:"bold"},children:"3"}),e.jsx(s,{align:"center",className:"border-r border-slate-300",style:{fontWeight:"bold"},children:"4"}),e.jsx(s,{align:"center",className:"border-r border-slate-300",style:{fontWeight:"bold"},children:"5"}),e.jsx(s,{align:"center",className:"border-r border-slate-300",style:{fontWeight:"bold"},children:"6"}),e.jsx(s,{align:"center",className:"border-r border-slate-300",style:{fontWeight:"bold"},children:"7"}),e.jsx(s,{align:"center",className:"border-r border-slate-300",style:{fontWeight:"bold"},children:"8"}),e.jsx(s,{align:"center",className:"border-r border-slate-300",style:{fontWeight:"bold"},children:"9"}),e.jsx(s,{align:"center",className:"border-r border-slate-300",style:{fontWeight:"bold"},children:"10"}),e.jsx(s,{align:"center",className:"border-r border-slate-300",style:{fontWeight:"bold"},children:"11"}),e.jsx(s,{align:"center",className:"border-r border-slate-300",style:{fontWeight:"bold"},children:"12"}),e.jsx(s,{align:"center",className:"border-r border-slate-300"})]}),(a>0?i.slice(n*a,n*a+a):i).map((d,l)=>e.jsxs(f,{className:"hover:bg-slate-200 transition duration-300",children:[e.jsx(s,{className:"border-r border-slate-300",align:"left",style:{fontWeight:"bold"},children:d.nam}),ee(d.resultThiduathang),e.jsx(s,{className:"border-r border-slate-300",align:"left",style:{fontWeight:"bold"},children:e.jsx(W,{title:d.thiduanam.ghichu,children:e.jsx("span",{children:d.thiduanam.result})})})]},d.nam))]})]})}),e.jsx("div",{children:e.jsx(M,{rowsPerPageOptions:[10,25,50,100,{label:"Tất cả",value:-1}],count:i.length,rowsPerPage:a,page:n,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},component:"div",onPageChange:o,onRowsPerPageChange:x,ActionsComponent:A,labelRowsPerPage:"Số bản ghi hiển thị trên mỗi trang",labelDisplayedRows:function({from:l,to:c,count:t}){return`hiển thị ${l} đến ${c} bản ghi trong tổng số ${t!==-1?t:`more than ${c}`} bản ghi`}})})]})}const S=({array:i})=>e.jsx("div",{className:"flex space-x-2 px-4 mx-4 pb-4 scrollhide hover:cursor-pointer",children:i.map((n,r)=>e.jsxs("div",{className:"step min-w-[364px]","data-aos":"fade-left","data-aos-delay":(r+1)*300,"data-aos-once":"true",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-gray-400 text-white flex items-center justify-center"}),e.jsx("hr",{className:"w-80 border border-black ml-2"})]}),e.jsx(W,{title:n.ghichu,children:e.jsxs("div",{className:"mt-1",children:[e.jsx("h5",{className:"text-sm italic text-gray-600",children:n.date}),e.jsx("h4",{className:"font-bold text-sm",children:n.label})]})})]},r))}),he=()=>{const[i,n]=H();let{doanvienId:r}=K();const[a,h]=g.useState(null),[o,x]=g.useState([]),[d,l]=g.useState([]),[c,t]=g.useState([]),[j,L]=g.useState([]),[_,F]=g.useState([]),[I,O]=g.useState([]),Q=E();return g.useEffect(()=>{(async()=>{try{n(!0);let p=await U.detailDoanvien(r);n(!1),h(p.data.doanvien[0]),x(p.data.khenthuongs),F(p.data.quatrinhlenham.map(m=>({date:y(m.tungay).format("DD/MM/YYYY"),label:m.bacham.bacham,ghichu:m.ghichu}))),L(p.data.quatrinhcongtac.map(m=>({date:y(m.tungay).format("DD/MM/YYYY"),label:m.donvi.tendonvi,ghichu:m.ghichu}))),O(p.data.quatrinhchucvu.map(m=>({date:y(m.tungay).format("DD/MM/YYYY"),label:m.chucvu.chucvu,ghichu:m.ghichu}))),l(p.data.kiluats),t(p.data.thiduas)}catch(p){p.message==="Token không hợp lệ hoặc đã hết hạn. Vui lòng đăng nhập lại"&&(Q("/login"),toast.error(p.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})),console.log(p.message)}})()},[r]),V(B=>B.authReducer.roles_quanlydoanvien),e.jsxs("div",{className:"pr-2","data-aos":"fade-left","data-aos-once":"true",children:[e.jsxs("div",{className:"flex items-center space-x-1",children:[e.jsx(G,{color:"primary",fontSize:"large"}),e.jsx("h4",{className:"font-bold text-gray-800 text-lg",children:"Trang thông tin cá nhân"})]}),e.jsxs("ul",{className:"p-4 flex flex-col md:flex-row md:flex-wrap shadow-lg",children:[e.jsxs("li",{className:"md:basis-1/3 my-1 flex justify-between pr-8 border-r-slate-100",children:[e.jsx("span",{className:"font-semibold",children:"Họ tên:"})," ",e.jsx("span",{children:a==null?void 0:a.hoten})]}),e.jsxs("li",{className:"md:basis-1/3 my-1 flex justify-between pr-8 border-r-slate-100",children:[e.jsx("span",{className:"font-semibold",children:"Ngày sinh:"})," ",e.jsx("span",{children:y(a==null?void 0:a.ngaysinh).format("DD/MM/YYYY")})]}),e.jsxs("li",{className:"md:basis-1/3 my-1 flex justify-between pr-8 border-r-slate-100",children:[e.jsx("span",{className:"font-semibold",children:"Số hiệu CAND:"})," ",e.jsx("span",{children:a==null?void 0:a.sohieuCAND})]}),e.jsxs("li",{className:"md:basis-1/3 my-1 flex justify-between pr-8 border-r-slate-100",children:[e.jsx("span",{className:"font-semibold",children:"Quê quán:"})," ",e.jsx("span",{children:a==null?void 0:a.quequan})]}),e.jsxs("li",{className:"md:basis-1/3 my-1 flex justify-between pr-8 border-r-slate-100",children:[e.jsx("span",{className:"font-semibold",children:"Số CCCD:"})," ",e.jsx("span",{children:a==null?void 0:a.CCCD})]}),e.jsxs("li",{className:"md:basis-1/3 my-1 flex justify-between pr-8 border-r-slate-100",children:[e.jsx("span",{className:"font-semibold",children:"Đảng viên:"})," ",e.jsx("span",{children:(a==null?void 0:a.dangvien)===!0?"Là đảng viên":"Chưa kết nạp đảng"})]}),e.jsxs("li",{className:"md:basis-1/3 my-1 flex justify-between pr-8 border-r-slate-100",children:[e.jsx("span",{className:"font-semibold",children:"Bậc hàm:"})," ",e.jsx("span",{children:a==null?void 0:a.bachamPopulate[0].bacham})]}),e.jsxs("li",{className:"md:basis-1/3 my-1 flex justify-between pr-8 border-r-slate-100",children:[e.jsx("span",{className:"font-semibold",children:"Chức vụ:"})," ",e.jsx("span",{children:a==null?void 0:a.chucvuPopulate[0].chucvu})]}),e.jsxs("li",{className:"md:basis-1/3 my-1 flex justify-between pr-8 border-r-slate-100",children:[e.jsx("span",{className:"font-semibold",children:"Đơn vị công tác:"})," ",e.jsx("span",{children:(a==null?void 0:a.chuyencongtacngoaitinh)===!0?a==null?void 0:a.donvidiaphuongkhac[0].tendonvi:a==null?void 0:a.donviPopulate[0].tendonvi})]}),e.jsxs("li",{className:"md:basis-1/3 my-1 flex justify-between pr-8 border-r-slate-100",children:[e.jsx("span",{className:"font-semibold",children:"Trình độ:"})," ",e.jsx("span",{children:a==null?void 0:a.trinhdo})]}),e.jsxs("li",{className:"md:basis-1/3 my-1 flex justify-between pr-8 border-r-slate-100",children:[e.jsx("span",{className:"font-semibold",children:"Lý luận chính trị:"})," ",e.jsx("span",{children:a==null?void 0:a.lyluanchinhtri})]}),e.jsxs("li",{className:"md:basis-1/3 my-1 flex justify-between pr-8 border-r-slate-100",children:[e.jsx("span",{className:"font-semibold",children:"Trưởng thành đoàn:"})," ",e.jsx("span",{children:(a==null?void 0:a.truongthanhdoan)===!0?"Đã trưởng thành đoàn":"Chưa"})]}),(a==null?void 0:a.truongthanhdoan)===!0&&e.jsxs("li",{className:"md:basis-1/3 my-1 flex justify-between pr-8 border-r-slate-100",children:[e.jsx("span",{className:"font-semibold",children:"Ngày trưởng thành đoàn:"})," ",e.jsx("span",{children:(a==null?void 0:a.truongthanhdoan)===!0&&y(a==null?void 0:a.ngaytruongthanhdoan).format("DD/MM/YYYY")})]})]}),e.jsx("div",{className:"mt-8"}),e.jsx(S,{array:_}),e.jsx(S,{array:I}),e.jsx(S,{array:j}),o.length>0&&e.jsxs("div",{className:"px-4 my-8","data-aos":"fade-left","data-aos-once":"true",children:[e.jsx("h4",{className:"my-2 text-center font-medium text-lg",children:"Danh sách khen thưởng cá nhân"}),e.jsx(X,{list:o})]}),d.length>0&&e.jsxs("div",{className:"px-4 my-8","data-aos":"fade-left","data-aos-once":"true",children:[e.jsx("h4",{className:"my-2 text-center font-medium text-lg",children:"Danh sách kết quả kỉ luật"}),e.jsx(Z,{list:d})]}),c.length>0&&e.jsxs("div",{className:"px-4 my-8","data-aos":"fade-left","data-aos-once":"true",children:[e.jsx("h4",{className:"my-2 text-center font-medium text-lg",children:"Bảng theo dõi thi đua qua các năm"}),e.jsx(ae,{list:c})]})]})};export{he as default};