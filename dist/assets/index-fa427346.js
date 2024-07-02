import{r as m,j as e,N as Rt,c as Ct,u as kt,d as Ge,R as Nt,O as qt,e as Ue,a as Qe,b as he,Q as ae,f as Pt}from"./index-2b00a054.js";import{u as Dt,r as l,i as c}from"./createSvgIcon-46c59fe3.js";import{T as tt,S as At,D as Et,a as Vt,d as It,b as Lt,c as Ht}from"./DialogDelete-f919c647.js";import{g as se,a as ie,s as L,_ as v,u as le,h as Tt,d as ce,i as Ot,e as J,f as de,B as Bt}from"./ButtonBase-ca61bcf9.js";import{T as Wt,u as Gt,g as Ke,P as Ut,B as Qt,I as Kt,a as Ft,M as Xt,b as Fe}from"./LastPage-e02fc572.js";import{d as Yt}from"./MilitaryTech-7c0df4b6.js";import"./index.esm-a80e06b2.js";import{n as Zt}from"./EditModal-7fa1e8ef.js";import{d as Xe}from"./Flag-21a3ac5b.js";import{u as Jt}from"./index.esm-322da860.js";import{B as ea}from"./Button-c283a03a.js";import{u as ta}from"./useDispatch-11f9eb28.js";import"./Add-84462153.js";import"./Switch-39e410f5.js";function aa(t){return se("MuiCollapse",t)}ie("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const na=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],ra=t=>{const{orientation:a,classes:n}=t,r={root:["root",`${a}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${a}`],wrapperInner:["wrapperInner",`${a}`]};return de(r,aa,n)},oa=L("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:n}=t;return[a.root,a[n.orientation],n.state==="entered"&&a.entered,n.state==="exited"&&!n.in&&n.collapsedSize==="0px"&&a.hidden]}})(({theme:t,ownerState:a})=>v({height:0,overflow:"hidden",transition:t.transitions.create("height")},a.orientation==="horizontal"&&{height:"auto",width:0,transition:t.transitions.create("width")},a.state==="entered"&&v({height:"auto",overflow:"visible"},a.orientation==="horizontal"&&{width:"auto"}),a.state==="exited"&&!a.in&&a.collapsedSize==="0px"&&{visibility:"hidden"})),sa=L("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(t,a)=>a.wrapper})(({ownerState:t})=>v({display:"flex",width:"100%"},t.orientation==="horizontal"&&{width:"auto",height:"100%"})),ia=L("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(t,a)=>a.wrapperInner})(({ownerState:t})=>v({width:"100%"},t.orientation==="horizontal"&&{width:"auto",height:"100%"})),at=m.forwardRef(function(a,n){const r=le({props:a,name:"MuiCollapse"}),{addEndListener:d,children:j,className:x,collapsedSize:o="0px",component:h,easing:k,in:_,onEnter:M,onEntered:w,onEntering:y,onExit:N,onExited:f,onExiting:$,orientation:b="vertical",style:q,timeout:z=Tt.standard,TransitionComponent:O=Wt}=r,i=ce(r,na),p=v({},r,{orientation:b,collapsedSize:o}),g=ra(p),W=Gt(),G=m.useRef(),A=m.useRef(null),F=m.useRef(),R=typeof o=="number"?`${o}px`:o,P=b==="horizontal",D=P?"width":"height";m.useEffect(()=>()=>{clearTimeout(G.current)},[]);const B=m.useRef(null),ue=Ot(n,B),H=s=>C=>{if(s){const I=B.current;C===void 0?s(I):s(I,C)}},U=()=>A.current?A.current[P?"clientWidth":"clientHeight"]:0,X=H((s,C)=>{A.current&&P&&(A.current.style.position="absolute"),s.style[D]=R,M&&M(s,C)}),ee=H((s,C)=>{const I=U();A.current&&P&&(A.current.style.position="");const{duration:Z,easing:te}=Ke({style:q,timeout:z,easing:k},{mode:"enter"});if(z==="auto"){const We=W.transitions.getAutoHeightDuration(I);s.style.transitionDuration=`${We}ms`,F.current=We}else s.style.transitionDuration=typeof Z=="string"?Z:`${Z}ms`;s.style[D]=`${I}px`,s.style.transitionTimingFunction=te,y&&y(s,C)}),S=H((s,C)=>{s.style[D]="auto",w&&w(s,C)}),Y=H(s=>{s.style[D]=`${U()}px`,N&&N(s)}),E=H(f),V=H(s=>{const C=U(),{duration:I,easing:Z}=Ke({style:q,timeout:z,easing:k},{mode:"exit"});if(z==="auto"){const te=W.transitions.getAutoHeightDuration(C);s.style.transitionDuration=`${te}ms`,F.current=te}else s.style.transitionDuration=typeof I=="string"?I:`${I}ms`;s.style[D]=R,s.style.transitionTimingFunction=Z,$&&$(s)}),wt=s=>{z==="auto"&&(G.current=setTimeout(s,F.current||0)),d&&d(B.current,s)};return e.jsx(O,v({in:_,onEnter:X,onEntered:S,onEntering:ee,onExit:Y,onExited:E,onExiting:V,addEndListener:wt,nodeRef:B,timeout:z==="auto"?null:z},i,{children:(s,C)=>e.jsx(oa,v({as:h,className:J(g.root,x,{entered:g.entered,exited:!_&&R==="0px"&&g.hidden}[s]),style:v({[P?"minWidth":"minHeight"]:R},q),ownerState:v({},p,{state:s}),ref:ue},C,{children:e.jsx(sa,{ownerState:v({},p,{state:s}),className:g.wrapper,ref:A,children:e.jsx(ia,{ownerState:v({},p,{state:s}),className:g.wrapperInner,children:j})})}))}))});at.muiSupportAuto=!0;const la=at,ca=m.createContext({}),nt=ca;function da(t){return se("MuiAccordion",t)}const ua=ie("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),ne=ua,ha=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],fa=t=>{const{classes:a,square:n,expanded:r,disabled:d,disableGutters:j}=t;return de({root:["root",!n&&"rounded",r&&"expanded",d&&"disabled",!j&&"gutters"],region:["region"]},da,a)},pa=L(Ut,{name:"MuiAccordion",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:n}=t;return[{[`& .${ne.region}`]:a.region},a.root,!n.square&&a.rounded,!n.disableGutters&&a.gutters]}})(({theme:t})=>{const a={duration:t.transitions.duration.shortest};return{position:"relative",transition:t.transitions.create(["margin"],a),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(t.vars||t).palette.divider,transition:t.transitions.create(["opacity","background-color"],a)},"&:first-of-type":{"&:before":{display:"none"}},[`&.${ne.expanded}`]:{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}},[`&.${ne.disabled}`]:{backgroundColor:(t.vars||t).palette.action.disabledBackground}}},({theme:t,ownerState:a})=>v({},!a.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(t.vars||t).shape.borderRadius,borderTopRightRadius:(t.vars||t).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(t.vars||t).shape.borderRadius,borderBottomRightRadius:(t.vars||t).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!a.disableGutters&&{[`&.${ne.expanded}`]:{margin:"16px 0"}})),va=m.forwardRef(function(a,n){const r=le({props:a,name:"MuiAccordion"}),{children:d,className:j,defaultExpanded:x=!1,disabled:o=!1,disableGutters:h=!1,expanded:k,onChange:_,square:M=!1,TransitionComponent:w=la,TransitionProps:y}=r,N=ce(r,ha),[f,$]=Dt({controlled:k,default:x,name:"Accordion",state:"expanded"}),b=m.useCallback(g=>{$(!f),_&&_(g,!f)},[f,_,$]),[q,...z]=m.Children.toArray(d),O=m.useMemo(()=>({expanded:f,disabled:o,disableGutters:h,toggle:b}),[f,o,h,b]),i=v({},r,{square:M,disabled:o,disableGutters:h,expanded:f}),p=fa(i);return e.jsxs(pa,v({className:J(p.root,j),ref:n,ownerState:i,square:M},N,{children:[e.jsx(nt.Provider,{value:O,children:q}),e.jsx(w,v({in:f,timeout:"auto"},y,{children:e.jsx("div",{"aria-labelledby":q.props.id,id:q.props["aria-controls"],role:"region",className:p.region,children:z})}))]}))}),ma=va;function xa(t){return se("MuiAccordionDetails",t)}ie("MuiAccordionDetails",["root"]);const ga=["className"],ja=t=>{const{classes:a}=t;return de({root:["root"]},xa,a)},ba=L("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(t,a)=>a.root})(({theme:t})=>({padding:t.spacing(1,2,2)})),_a=m.forwardRef(function(a,n){const r=le({props:a,name:"MuiAccordionDetails"}),{className:d}=r,j=ce(r,ga),x=r,o=ja(x);return e.jsx(ba,v({className:J(o.root,d),ref:n,ownerState:x},j))}),ya=_a;function $a(t){return se("MuiAccordionSummary",t)}const za=ie("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),K=za,Sa=["children","className","expandIcon","focusVisibleClassName","onClick"],Ma=t=>{const{classes:a,expanded:n,disabled:r,disableGutters:d}=t;return de({root:["root",n&&"expanded",r&&"disabled",!d&&"gutters"],focusVisible:["focusVisible"],content:["content",n&&"expanded",!d&&"contentGutters"],expandIconWrapper:["expandIconWrapper",n&&"expanded"]},$a,a)},wa=L(Bt,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(t,a)=>a.root})(({theme:t,ownerState:a})=>{const n={duration:t.transitions.duration.shortest};return v({display:"flex",minHeight:48,padding:t.spacing(0,2),transition:t.transitions.create(["min-height","background-color"],n),[`&.${K.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${K.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity},[`&:hover:not(.${K.disabled})`]:{cursor:"pointer"}},!a.disableGutters&&{[`&.${K.expanded}`]:{minHeight:64}})}),Ra=L("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(t,a)=>a.content})(({theme:t,ownerState:a})=>v({display:"flex",flexGrow:1,margin:"12px 0"},!a.disableGutters&&{transition:t.transitions.create(["margin"],{duration:t.transitions.duration.shortest}),[`&.${K.expanded}`]:{margin:"20px 0"}})),Ca=L("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(t,a)=>a.expandIconWrapper})(({theme:t})=>({display:"flex",color:(t.vars||t).palette.action.active,transform:"rotate(0deg)",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest}),[`&.${K.expanded}`]:{transform:"rotate(180deg)"}})),ka=m.forwardRef(function(a,n){const r=le({props:a,name:"MuiAccordionSummary"}),{children:d,className:j,expandIcon:x,focusVisibleClassName:o,onClick:h}=r,k=ce(r,Sa),{disabled:_=!1,disableGutters:M,expanded:w,toggle:y}=m.useContext(nt),N=b=>{y&&y(b),h&&h(b)},f=v({},r,{expanded:w,disabled:_,disableGutters:M}),$=Ma(f);return e.jsxs(wa,v({focusRipple:!1,disableRipple:!0,disabled:_,component:"div","aria-expanded":w,className:J($.root,j),focusVisibleClassName:J($.focusVisible,o),onClick:N,ref:n,ownerState:f},k,{children:[e.jsx(Ra,{className:$.content,ownerState:f,children:d}),x&&e.jsx(Ca,{className:$.expandIconWrapper,ownerState:f,children:x})]}))}),Na=ka;var xe={},qa=c;Object.defineProperty(xe,"__esModule",{value:!0});var rt=xe.default=void 0,Pa=qa(l()),Da=e,Aa=(0,Pa.default)((0,Da.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");rt=xe.default=Aa;const Ea=({option:t})=>e.jsx(Rt,{to:t.link,children:e.jsxs("div",{className:"pl-4 py-2 flex space-x-2 items-end w-full hover:bg-slate-600 rounded-md transition duration-300",children:[t.icon,e.jsx(tt,{sx:{color:"white",fontSize:"14px"},children:t.name})]})}),Q=({groupName:t,iconGroup:a,options:n})=>e.jsx("div",{className:"my-1 w-full cursor-pointer",children:e.jsxs(ma,{sx:{backgroundColor:"rgb(15 23 42 / var(--tw-bg-opacity))",boxShadow:"0"},defaultExpanded:!0,children:[e.jsx(Na,{expandIcon:e.jsx(rt,{sx:{color:"white"}}),sx:{padding:"0px 0",margin:"0 0",minHeight:"auto"},children:e.jsxs("div",{className:"flex space-x-2 items-end",children:[a,e.jsx(tt,{sx:{color:"#ccc"},children:t})]})}),e.jsx(ya,{sx:{padding:"0 0",margin:"0"},children:(n==null?void 0:n.length)>0&&n.map(r=>e.jsx(Ea,{option:r},r.name))})]})});var ge={},Va=c;Object.defineProperty(ge,"__esModule",{value:!0});var ot=ge.default=void 0,Ia=Va(l()),Ye=e,La=(0,Ia.default)([(0,Ye.jsx)("circle",{cx:"10",cy:"8",r:"4"},"0"),(0,Ye.jsx)("path",{d:"M10.67 13.02c-.22-.01-.44-.02-.67-.02-2.42 0-4.68.67-6.61 1.82-.88.52-1.39 1.5-1.39 2.53V20h9.26c-.79-1.13-1.26-2.51-1.26-4 0-1.07.25-2.07.67-2.98zM20.75 16c0-.22-.03-.42-.06-.63l1.14-1.01-1-1.73-1.45.49c-.32-.27-.68-.48-1.08-.63L18 11h-2l-.3 1.49c-.4.15-.76.36-1.08.63l-1.45-.49-1 1.73 1.14 1.01c-.03.21-.06.41-.06.63s.03.42.06.63l-1.14 1.01 1 1.73 1.45-.49c.32.27.68.48 1.08.63L16 21h2l.3-1.49c.4-.15.76-.36 1.08-.63l1.45.49 1-1.73-1.14-1.01c.03-.21.06-.41.06-.63zM17 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"},"1")],"ManageAccounts");ot=ge.default=La;var je={},Ha=c;Object.defineProperty(je,"__esModule",{value:!0});var st=je.default=void 0,Ta=Ha(l()),Oa=e,Ba=(0,Ta.default)((0,Oa.jsx)("path",{d:"M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"}),"Folder");st=je.default=Ba;var be={},Wa=c;Object.defineProperty(be,"__esModule",{value:!0});var it=be.default=void 0,Ga=Wa(l()),Ua=e,Qa=(0,Ga.default)((0,Ua.jsx)("path",{d:"M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"}),"SupervisorAccount");it=be.default=Qa;var _e={},Ka=c;Object.defineProperty(_e,"__esModule",{value:!0});var pe=_e.default=void 0,Fa=Ka(l()),Xa=e,Ya=(0,Fa.default)((0,Xa.jsx)("path",{d:"M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"}),"VpnKey");pe=_e.default=Ya;var ye={},Za=c;Object.defineProperty(ye,"__esModule",{value:!0});var ve=ye.default=void 0,Ja=Za(l()),en=e,tn=(0,Ja.default)((0,en.jsx)("path",{d:"M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"}),"VerifiedUser");ve=ye.default=tn;var $e={},an=c;Object.defineProperty($e,"__esModule",{value:!0});var lt=$e.default=void 0,nn=an(l()),rn=e,on=(0,nn.default)((0,rn.jsx)("path",{d:"M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"}),"Dashboard");lt=$e.default=on;var ze={},sn=c;Object.defineProperty(ze,"__esModule",{value:!0});var ct=ze.default=void 0,ln=sn(l()),Ze=e,cn=(0,ln.default)([(0,Ze.jsx)("path",{d:"m15.45 16.52-3.01-3.01c-.11-.11-.24-.13-.31-.13s-.2.02-.31.13L8.8 16.53c-.34.34-.87.89-2.64.89l3.71 3.7c1.17 1.17 3.07 1.17 4.24 0l3.72-3.71c-.91 0-1.67-.18-2.38-.89zM8.8 7.47l3.02 3.02c.08.08.2.13.31.13s.23-.05.31-.13l2.99-2.99c.71-.74 1.52-.91 2.43-.91l-3.72-3.71c-1.17-1.17-3.07-1.17-4.24 0l-3.71 3.7c1.76 0 2.3.58 2.61.89z"},"0"),(0,Ze.jsx)("path",{d:"m21.11 9.85-2.25-2.26H17.6c-.54 0-1.08.22-1.45.61l-3 3c-.28.28-.65.42-1.02.42-.36 0-.74-.15-1.02-.42L8.09 8.17c-.38-.38-.9-.6-1.45-.6H5.17l-2.29 2.3c-1.17 1.17-1.17 3.07 0 4.24l2.29 2.3h1.48c.54 0 1.06-.22 1.45-.6l3.02-3.02c.28-.28.65-.42 1.02-.42s.74.14 1.02.42l3.01 3.01c.38.38.9.6 1.45.6h1.26l2.25-2.26c1.17-1.18 1.17-3.1-.02-4.29z"},"1")],"Pix");ct=ze.default=cn;var Se={},dn=c;Object.defineProperty(Se,"__esModule",{value:!0});var dt=Se.default=void 0,un=dn(l()),hn=e,fn=(0,un.default)((0,hn.jsx)("path",{d:"M18.39 14.56C16.71 13.7 14.53 13 12 13s-4.71.7-6.39 1.56C4.61 15.07 4 16.1 4 17.22V20h16v-2.78c0-1.12-.61-2.15-1.61-2.66zM10 12h4c1.66 0 3-1.34 3-3 0-.73-.27-1.4-.71-1.92.13-.33.21-.7.21-1.08 0-1.25-.77-2.32-1.86-2.77C14 2.48 13.06 2 12 2s-2 .48-2.64 1.23C8.27 3.68 7.5 4.75 7.5 6c0 .38.08.75.21 1.08C7.27 7.6 7 8.27 7 9c0 1.66 1.34 3 3 3z"}),"Person3");dt=Se.default=fn;var Me={},pn=c;Object.defineProperty(Me,"__esModule",{value:!0});var ut=Me.default=void 0,vn=pn(l()),mn=e,xn=(0,vn.default)((0,mn.jsx)("path",{d:"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"PersonAdd");ut=Me.default=xn;var we={},gn=c;Object.defineProperty(we,"__esModule",{value:!0});var ht=we.default=void 0,jn=gn(l()),bn=e,_n=(0,jn.default)((0,bn.jsx)("path",{d:"M20 12c0-1.1.9-2 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2zm-4.42 4.8L12 14.5l-3.58 2.3 1.08-4.12-3.29-2.69 4.24-.25L12 5.8l1.54 3.95 4.24.25-3.29 2.69 1.09 4.11z"}),"LocalActivity");ht=we.default=_n;var Re={},yn=c;Object.defineProperty(Re,"__esModule",{value:!0});var ft=Re.default=void 0,$n=yn(l()),zn=e,Sn=(0,$n.default)((0,zn.jsx)("path",{d:"M2 15.5v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20v-2H2z"}),"Dehaze");ft=Re.default=Sn;var Ce={},Mn=c;Object.defineProperty(Ce,"__esModule",{value:!0});var pt=Ce.default=void 0,wn=Mn(l()),Rn=e,Cn=(0,wn.default)((0,Rn.jsx)("path",{d:"M18.39 14.56C16.71 13.7 14.53 13 12 13s-4.71.7-6.39 1.56C4.61 15.07 4 16.1 4 17.22V20h16v-2.78c0-1.12-.61-2.15-1.61-2.66zM12 12c2.21 0 4-1.79 4-4V4.5c0-.83-.67-1.5-1.5-1.5-.52 0-.98.27-1.25.67-.27-.4-.73-.67-1.25-.67s-.98.27-1.25.67c-.27-.4-.73-.67-1.25-.67C8.67 3 8 3.67 8 4.5V8c0 2.21 1.79 4 4 4z"}),"Person4");pt=Ce.default=Cn;var vt={};function kn(t){if(!t||typeof window>"u")return;const a=document.createElement("style");return a.setAttribute("type","text/css"),a.innerHTML=t,document.head.appendChild(a),t}Object.defineProperty(vt,"__esModule",{value:!0});var u=m;function Nn(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var T=Nn(u);kn(`.rfm-marquee-container {
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.rfm-marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.rfm-marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.rfm-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.rfm-overlay::before, .rfm-overlay::after {
  background: linear-gradient(to right, var(--gradient-color), transparent);
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
}
.rfm-overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.rfm-overlay::before {
  left: 0;
  top: 0;
}

.rfm-marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.rfm-initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
  align-items: center;
}

.rfm-child {
  transform: var(--transform);
}`);const qn=u.forwardRef(function({style:a={},className:n="",autoFill:r=!1,play:d=!0,pauseOnHover:j=!1,pauseOnClick:x=!1,direction:o="left",speed:h=50,delay:k=0,loop:_=0,gradient:M=!1,gradientColor:w="white",gradientWidth:y=200,onFinish:N,onCycleComplete:f,onMount:$,children:b},q){const[z,O]=u.useState(0),[i,p]=u.useState(0),[g,W]=u.useState(1),[G,A]=u.useState(!1),F=u.useRef(null),R=q||F,P=u.useRef(null),D=u.useCallback(()=>{if(P.current&&R.current){const S=R.current.getBoundingClientRect(),Y=P.current.getBoundingClientRect();let E=S.width,V=Y.width;(o==="up"||o==="down")&&(E=S.height,V=Y.height),W(r&&E&&V&&V<E?Math.ceil(E/V):1),O(E),p(V)}},[r,R,o]);u.useEffect(()=>{if(G&&(D(),P.current&&R.current)){const S=new ResizeObserver(()=>D());return S.observe(R.current),S.observe(P.current),()=>{S&&S.disconnect()}}},[D,R,G]),u.useEffect(()=>{D()},[D,b]),u.useEffect(()=>{A(!0)},[]),u.useEffect(()=>{typeof $=="function"&&$()},[]);const B=u.useMemo(()=>r?i*g/h:i<z?z/h:i/h,[r,z,i,g,h]),ue=u.useMemo(()=>Object.assign(Object.assign({},a),{"--pause-on-hover":!d||j?"paused":"running","--pause-on-click":!d||j&&!x||x?"paused":"running","--width":o==="up"||o==="down"?"100vh":"100%","--transform":o==="up"?"rotate(-90deg)":o==="down"?"rotate(90deg)":"none"}),[a,d,j,x,o]),H=u.useMemo(()=>({"--gradient-color":w,"--gradient-width":typeof y=="number"?`${y}px`:y}),[w,y]),U=u.useMemo(()=>({"--play":d?"running":"paused","--direction":o==="left"?"normal":"reverse","--duration":`${B}s`,"--delay":`${k}s`,"--iteration-count":_?`${_}`:"infinite","--min-width":r?"auto":"100%"}),[d,o,B,k,_,r]),X=u.useMemo(()=>({"--transform":o==="up"?"rotate(90deg)":o==="down"?"rotate(-90deg)":"none"}),[o]),ee=u.useCallback(S=>[...Array(Number.isFinite(S)&&S>=0?S:0)].map((Y,E)=>T.default.createElement(u.Fragment,{key:E},u.Children.map(b,V=>T.default.createElement("div",{style:X,className:"rfm-child"},V)))),[X,b]);return G?T.default.createElement("div",{ref:R,style:ue,className:"rfm-marquee-container "+n},M&&T.default.createElement("div",{style:H,className:"rfm-overlay"}),T.default.createElement("div",{className:"rfm-marquee",style:U,onAnimationIteration:f,onAnimationEnd:N},T.default.createElement("div",{className:"rfm-initial-child-container",ref:P},u.Children.map(b,S=>T.default.createElement("div",{style:X,className:"rfm-child"},S))),ee(g-1)),T.default.createElement("div",{className:"rfm-marquee",style:U},ee(g))):null});var Pn=vt.default=qn,ke={},Dn=c;Object.defineProperty(ke,"__esModule",{value:!0});var mt=ke.default=void 0,An=Dn(l()),En=e,Vn=(0,An.default)((0,En.jsx)("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"}),"Notifications");mt=ke.default=Vn;function In({open:t}){return e.jsx(Qt,{sx:{color:"#fff",zIndex:1301},open:t,children:e.jsx("div",{className:"fixed top-0 left-0 right-0 bottom-0 h-[100vh] flex items-center justify-center z-[100000] bg-white opacity-90",children:e.jsx("img",{alt:"img",className:"",src:"/gifloading.GIF"})})})}var Ne={},Ln=c;Object.defineProperty(Ne,"__esModule",{value:!0});var xt=Ne.default=void 0,Hn=Ln(l()),Tn=e,On=(0,Hn.default)((0,Tn.jsx)("path",{d:"M11 11V3H5c-1.1 0-2 .9-2 2v6h8zm2 0h8V5c0-1.1-.9-2-2-2h-6v8zm-2 2H3v6c0 1.1.9 2 2 2h6v-8zm2 0v8h6c1.1 0 2-.9 2-2v-6h-8z"}),"Window");xt=Ne.default=On;var qe={},Bn=c;Object.defineProperty(qe,"__esModule",{value:!0});var gt=qe.default=void 0,Wn=Bn(l()),Gn=e,Un=(0,Wn.default)((0,Gn.jsx)("path",{d:"M13 13v8h8v-8h-8zM3 21h8v-8H3v8zM3 3v8h8V3H3zm13.66-1.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65z"}),"Widgets");gt=qe.default=Un;var Pe={},Qn=c;Object.defineProperty(Pe,"__esModule",{value:!0});var jt=Pe.default=void 0,Kn=Qn(l()),Je=e,Fn=(0,Kn.default)([(0,Je.jsx)("path",{d:"M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"},"0"),(0,Je.jsx)("path",{d:"M17.5 10.5c.88 0 1.73.09 2.5.26V9.24c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99zM13 12.49v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26V11.9c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.3-4.5.83zm4.5 1.84c-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26v-1.52c-.79-.16-1.64-.24-2.5-.24z"},"1")],"MenuBook");jt=Pe.default=Fn;var De={},Xn=c;Object.defineProperty(De,"__esModule",{value:!0});var bt=De.default=void 0,Yn=Xn(l()),et=e,Zn=(0,Yn.default)([(0,et.jsx)("path",{d:"M14 7h-4c-1.1 0-2 .9-2 2v6h2v7h4v-7h2V9c0-1.1-.9-2-2-2z"},"0"),(0,et.jsx)("circle",{cx:"12",cy:"4",r:"2"},"1")],"Man");bt=De.default=Zn;var Ae={},Jn=c;Object.defineProperty(Ae,"__esModule",{value:!0});var _t=Ae.default=void 0,er=Jn(l()),tr=e,ar=(0,er.default)((0,tr.jsx)("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning");_t=Ae.default=ar;var Ee={},nr=c;Object.defineProperty(Ee,"__esModule",{value:!0});var yt=Ee.default=void 0,rr=nr(l()),or=e,sr=(0,rr.default)((0,or.jsx)("path",{d:"M11 9.16V2c-5 .5-9 4.79-9 10s4 9.5 9 10v-7.16c-1-.41-2-1.52-2-2.84s1-2.43 2-2.84zM14.86 11H22c-.48-4.75-4-8.53-9-9v7.16c1 .3 1.52.98 1.86 1.84zM13 14.84V22c5-.47 8.52-4.25 9-9h-7.14c-.34.86-.86 1.54-1.86 1.84z"}),"DonutSmall");yt=Ee.default=sr;var Ve={},ir=c;Object.defineProperty(Ve,"__esModule",{value:!0});var $t=Ve.default=void 0,lr=ir(l()),cr=e,dr=(0,lr.default)((0,cr.jsx)("path",{d:"M7.5 21H2V9h5.5v12zm7.25-18h-5.5v18h5.5V3zM22 11h-5.5v10H22V11z"}),"Leaderboard");$t=Ve.default=dr;var Ie={},ur=c;Object.defineProperty(Ie,"__esModule",{value:!0});var re=Ie.default=void 0,hr=ur(l()),fr=e,pr=(0,hr.default)((0,fr.jsx)("path",{d:"M4 9h4v11H4zm12 4h4v7h-4zm-6-9h4v16h-4z"}),"BarChart");re=Ie.default=pr;var Le={},vr=c;Object.defineProperty(Le,"__esModule",{value:!0});var me=Le.default=void 0,mr=vr(l()),xr=e,gr=(0,mr.default)((0,xr.jsx)("path",{d:"M21 5v14h2V5h-2zm-4 14h2V5h-2v14zM14 5H2c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zM8 7.75c1.24 0 2.25 1.01 2.25 2.25S9.24 12.25 8 12.25 5.75 11.24 5.75 10 6.76 7.75 8 7.75zM12.5 17h-9v-.75c0-1.5 3-2.25 4.5-2.25s4.5.75 4.5 2.25V17z"}),"RecentActors");me=Le.default=gr;var He={},jr=c;Object.defineProperty(He,"__esModule",{value:!0});var oe=He.default=void 0,br=jr(l()),_r=e,yr=(0,br.default)((0,_r.jsx)("path",{d:"M21 10h-8.35C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H13l2 2 2-2 2 2 4-4.04L21 10zM7 15c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"}),"Key");oe=He.default=yr;const $r=m.forwardRef(function(a,n){return e.jsx(At,{direction:"up",ref:n,...a})}),zr=L(Kt)({position:"absolute",right:"16px",top:"4px"});function Sr({open:t,onCloseDialogChangePass:a,onSubmit:n}){const{register:r,handleSubmit:d,formState:{errors:j}}=Jt({defaultValues:{matkhaucu:"",matkhaumoi:""}}),x=async o=>{if(n){const h={...o};await n(h),onCloseDialogEdit()}};return e.jsx(e.Fragment,{children:e.jsxs(Et,{maxWidth:"lg",fullWidth:!0,disableEscapeKeyDown:!0,onClose:(o,h)=>{h!=="backdropClick"&&a(o,h)},open:t,TransitionComponent:$r,keepMounted:!0,"aria-describedby":"alert-dialog-slide-description",children:[e.jsxs(Vt,{style:{display:"flex",borderBottom:"1px solid #ccc",backgroundColor:"rgb(30, 41, 59 )",margin:"0px"},children:[e.jsx(oe,{style:{color:"white",fontSize:"24px",marginRight:"8px"}}),e.jsx("span",{className:"text-white",children:"Thay đổi mật khẩu đăng nhập"}),e.jsx(zr,{onClick:()=>a(),children:e.jsx(It,{style:{color:"white"}})})]}),e.jsx(Lt,{children:e.jsx(Ft,{children:e.jsxs("form",{className:"mt-2 mx-8",onSubmit:d(x),children:[e.jsxs("div",{className:"flex-col flex",children:[e.jsxs("label",{className:"underline font-semibold",children:[e.jsx("span",{className:"text-red-600 font-semibold",children:" (*)"})," Mật khẩu cũ: "]}),e.jsx("input",{...r("matkhaucu",{required:!0}),type:"text",className:`outline-none my-4 border rounded-md p-2 border-neutral-600\r
                  focus:ring-2 focus:border-blue-400`})]}),e.jsxs("div",{className:"flex-col flex",children:[e.jsxs("label",{className:"underline font-semibold",children:[e.jsx("span",{className:"text-red-600 font-semibold",children:" (*)"})," Mật khẩu mới: "]}),e.jsx("input",{...r("matkhaumoi",{required:!0}),type:"text",className:`outline-none my-4 border rounded-md p-2 border-neutral-600\r
                  focus:ring-2 focus:border-blue-400`})]}),e.jsx(Ht,{children:e.jsxs(ea,{color:"primary",variant:"contained",type:"submit",style:{margin:"4px auto"},children:[e.jsx(oe,{}),e.jsx("span",{children:"Đổi mật khẩu"})]})})]})})})]})})}var Te={},Mr=c;Object.defineProperty(Te,"__esModule",{value:!0});var zt=Te.default=void 0,wr=Mr(l()),Rr=e,Cr=(0,wr.default)((0,Rr.jsx)("path",{d:"m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"}),"Logout");zt=Te.default=Cr;var Oe={},kr=c;Object.defineProperty(Oe,"__esModule",{value:!0});var St=Oe.default=void 0,Nr=kr(l()),fe=e,qr=(0,Nr.default)([(0,fe.jsx)("path",{d:"M21 3H3c-1.1 0-2 .9-2 2v8h2V5h18v16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"},"0"),(0,fe.jsx)("circle",{cx:"9",cy:"10",r:"4"},"1"),(0,fe.jsx)("path",{d:"M15.39 16.56C13.71 15.7 11.53 15 9 15s-4.71.7-6.39 1.56C1.61 17.07 1 18.1 1 19.22V22h16v-2.78c0-1.12-.61-2.15-1.61-2.66z"},"2")],"CoPresent");St=Oe.default=qr;var Be={},Pr=c;Object.defineProperty(Be,"__esModule",{value:!0});var Mt=Be.default=void 0,Dr=Pr(l()),Ar=e,Er=(0,Dr.default)((0,Ar.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8.5 6c.69 0 1.25.56 1.25 1.25S9.19 8.5 8.5 8.5s-1.25-.56-1.25-1.25S7.81 6 8.5 6zm2.5 8h-1v4H7v-4H6v-2.5c0-1.1.9-2 2-2h1c1.1 0 2 .9 2 2V14zm4.5 3L13 13h5l-2.5 4zM13 11l2.5-4 2.5 4h-5z"}),"Elevator");Mt=Be.default=Er;const Yr=({user:t})=>{if(!t)return e.jsx(Ct,{to:"/login",replace:!0});const a=kt(),[n,r]=m.useState([]),[d,j]=m.useState(!1),x=ta(),[o,h]=m.useState(!1);m.useEffect(()=>{(async()=>{try{let p=await Zt.getNotifications({thongbao:""});r(p.data)}catch{}})()},[]);const k=i=>{let p=i.filter(g=>g.status===!0);r(p)},_=i=>{j(i)},M=Ge(i=>i.authReducer.roles_quanlydoanvien),w=Ge(i=>i.authReducer.id_user),[y,N]=Nt.useState(null),f=!!y,$=i=>{N(i.currentTarget)},b=()=>{N(null)},q=async()=>{const i=Ue();try{const p=await x(i),g=Qe(p);he.remove("refreshToken_quanlydoanvien"),a("/login"),ae.success("Đăng xuất tài khoản thành công.",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}catch(p){console.log(p),ae.error("Lỗi xảy ra khi đăng xuất tài khoản",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}},z=async i=>{const p=Ue();try{await Pt.changePass({...i,id:w});const g=await x(p),W=Qe(g);he.remove("refreshToken_quanlydoanvien"),a("/login"),ae.success("Đổi mật khẩu thành công,. Vui lòng đăng nhập lại",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),he.remove("refreshToken_quanlydoanvien"),a("/login")}catch(g){ae.error(g.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}},O=()=>{h(!1)};return e.jsxs("div",{children:[e.jsxs("div",{"data-aos":"fade-down-right","data-aos-once":"true",className:"w-[280px] bg-slate-900 border-r border-t border-white min-h-screen fixed",children:[e.jsx("div",{className:"flex justify-between bg-slate-800 items-center px-4 py-2",children:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("img",{src:"/cong-an-hieu.png",alt:"logo",className:"w-12"}),e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("span",{className:"text-white uppercase text-sm",children:"Công an tỉnh Hưng Yên"}),e.jsx("span",{className:"text-white uppercase text-sm",children:"PM quản lý đoàn viên"})]})]})}),e.jsxs("ul",{className:"p-2 h-[100vh] overflow-y-scroll no-scrollbar pb-20","data-aos":"fade-up-right","data-aos-once":"true",children:[e.jsx("li",{className:"rounded-md",children:M.includes("xem phân hệ admin")&&e.jsx(Q,{groupName:"Phân hệ Admin",iconGroup:e.jsx(ot,{sx:{color:"#ccc",fontSize:"32px",paddingLeft:"4px"}}),options:[{name:"QL tài khoản và phân quyền",icon:e.jsx(it,{sx:{color:"white",fontSize:"24px"}}),link:"/dashboard/tai-khoan"},{name:"QL nhóm quyền",icon:e.jsx(pe,{sx:{color:"white",fontSize:"24px"}}),link:"/dashboard/roles"},{name:"QL Slide thông báo",icon:e.jsx(mt,{sx:{color:"white",fontSize:"24px"}}),link:"/dashboard/notification"},{name:"QL Cấp bậc quân hàm",icon:e.jsx(Yt,{sx:{color:"white",fontSize:"24px"}}),link:"/dashboard/bac-ham"},{name:"QL Chức vụ",icon:e.jsx(ht,{sx:{color:"white",fontSize:"24px"}}),link:"/dashboard/chuc-vu"},{name:"QL đoàn viên bị xóa mức 1",icon:e.jsx(ve,{sx:{color:"white",fontSize:"24px"}}),link:"/dashboard/delete-doan-vien"},{name:"QL đoàn viên chuyển tỉnh khác",icon:e.jsx(St,{sx:{color:"white",fontSize:"24px"}}),link:"/dashboard/doan-vien-chuyen-cong-tac-dia-phuong-khac"}]})}),M.includes("xem mô hình tổ chức")&&e.jsx("li",{className:"rounded-md",children:e.jsx(Q,{groupName:"Mô hình tổ chức",iconGroup:e.jsx(st,{sx:{color:"#ccc",fontSize:"32px",paddingLeft:"4px"}}),options:M.includes("xem mô hình tổ chức")&&[{name:"Khối, hệ, lực lượng",icon:e.jsx(ct,{sx:{color:"white",fontSize:"24px"}}),link:"/dashboard/khoi"},{name:"Phòng, huyện, TX, TP",icon:e.jsx(lt,{sx:{color:"white",fontSize:"24px"}}),link:"/dashboard/don-vi"},{name:"Đội, xã, phường, thị trấn",icon:e.jsx(pe,{sx:{color:"white",fontSize:"24px"}}),link:"/dashboard/doi"},{name:"Chi đoàn, liên chi đoàn",icon:e.jsx(ve,{sx:{color:"white",fontSize:"24px"}}),link:"/dashboard/chi-doan"}]})}),e.jsx("li",{className:"rounded-md",children:e.jsx(Q,{groupName:"Quản lý đoàn viên",iconGroup:e.jsx(dt,{sx:{color:"#ccc",fontSize:"32px",paddingLeft:"4px"}}),options:M.includes("thêm đoàn viên")?[{name:"Thêm mới đoàn viên",icon:e.jsx(ut,{sx:{color:"white",fontSize:"24px"}}),link:"/dashboard/them-moi-doan-vien"},{name:"Quản trị đoàn viên",icon:e.jsx(me,{sx:{color:"white",fontSize:"24px"}}),link:"/dashboard/quan-tri-doan-vien"}]:[{name:"Quản trị đoàn viên",icon:e.jsx(me,{sx:{color:"white",fontSize:"24px"}}),link:"/dashboard/quan-tri-doan-vien"}]})}),e.jsx("li",{className:"rounded-md",children:e.jsx(Q,{groupName:"Phân hệ khen thưởng",iconGroup:e.jsx(gt,{sx:{color:"#ccc",fontSize:"32px",paddingLeft:"4px"}}),options:[{name:"Khen thưởng tập thể",icon:e.jsx(jt,{sx:{color:"white",fontSize:"24px"}}),link:"/dashboard/khen-thuong-tap-the"},{name:"khen thưởng cá nhân",icon:e.jsx(bt,{sx:{color:"white",fontSize:"24px"}}),link:"/dashboard/khen-thuong-ca-nhan"},{name:"Kỉ luật cá nhân",icon:e.jsx(_t,{sx:{color:"white",fontSize:"24px"}}),link:"/dashboard/ki-luat-ca-nhan"}]})}),e.jsx("li",{className:"rounded-md",children:e.jsx(Q,{groupName:"Theo dõi thi đua",iconGroup:e.jsx(Xe,{sx:{color:"#ccc",fontSize:"32px",paddingLeft:"4px"}}),options:[{name:"Thi đua tháng",icon:e.jsx(Xe,{sx:{color:"white",fontSize:"24px"}}),link:"/dashboard/thi-dua-thang"},{name:"Xếp loại đoàn viên năm",icon:e.jsx(xt,{sx:{color:"white",fontSize:"24px"}}),link:"/dashboard/thi-dua-nam"}]})}),e.jsx("li",{className:"rounded-md",children:e.jsx(Q,{groupName:"Thống kê, báo cáo",iconGroup:e.jsx($t,{sx:{color:"#ccc",fontSize:"32px",paddingLeft:"4px"}}),options:[{name:"Khen thưởng",icon:e.jsx(re,{sx:{color:"white",fontSize:"24px"}}),link:"/dashboard/bao-cao/khen-thuong"},{name:"Kỉ luật",icon:e.jsx(re,{sx:{color:"white",fontSize:"24px"}}),link:"/dashboard/bao-cao/ki-luat"},{name:"Thi đua tháng",icon:e.jsx(re,{sx:{color:"white",fontSize:"24px"}}),link:"/dashboard/bao-cao/thi-dua-thang"},{name:"Xếp loại đoàn viên năm",icon:e.jsx(yt,{sx:{color:"white",fontSize:"24px"}}),link:"/dashboard/bao-cao/thi-dua-nam"},{name:"Đoàn viên trưởng thành đoàn",icon:e.jsx(Mt,{sx:{color:"white",fontSize:"24px"}}),link:"/dashboard/bao-cao/truong-thanh-doan"}]})})]})]}),e.jsxs("div",{className:"ml-[286px] relative",children:[e.jsxs("div",{className:"flex justify-between absolute z-10 top-0 right-0 left-0 bg-slate-800 h-[60px] items-center px-4 space-x-2",children:[e.jsx("div",{children:e.jsx(ft,{sx:{fontSize:"32px",color:"#ccc"}})}),e.jsx("div",{className:"w-0 md:w-[250px] lg:w-[600px] xl:w-[800px] bg-slate-800 flex items-center py-2 rounded-md",children:n.length>0&&e.jsx(Pn,{pauseOnHover:!0,speed:100,children:n.map(i=>e.jsx("span",{className:"ml-[400px] text-lg text-yellow-600 font-extrabold hover:cursor-default font-arial uppercase",children:i.thongbao},i._id))})}),e.jsxs("div",{className:"flex space-x-3 items-center hover:cursor-pointer",id:"basic-button","aria-controls":f?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":f?"true":void 0,onClick:$,children:[e.jsx("div",{className:"bg-slate-600 w-10 h-10 justify-center items-center flex rounded-full",children:e.jsx(pt,{sx:{fontSize:"28px",color:"#fff"}})}),e.jsxs("span",{className:"text-white",children:["Hello, ",e.jsx("span",{className:"text-lg",children:t})]})]})]}),e.jsx(In,{open:d}),e.jsxs("div",{className:"pt-[68px]","data-aos":"fade-left","data-aos-once":"true",children:[e.jsx(qt,{context:[k,_]}),e.jsxs("div",{className:"bg-slate-300 mx-2 text-center py-6 mb-4 mt-4",children:[e.jsx("div",{className:"flex justify-center",children:e.jsx("img",{src:"/conganhieu.png",alt:"logo",className:"w-28"})}),e.jsx("h4",{className:"uppercase text-black font-semibold text-efect",children:"Công trình thanh niên - ứng dụng chuyển đổi số vào công tác quản lý đoàn viên trong công an nhân dân"}),e.jsxs("p",{children:["Thiết kế hệ thống phần mềm: ",e.jsx("span",{className:"font-bold italic",children:"Vũ Văn Tính"})]}),e.jsxs("p",{children:["Số điện thoại liên hệ: ",e.jsx("span",{className:"font-bold underline underline-offset-1",children:"0976.534.506"})]})]})]})]}),e.jsxs(Xt,{id:"basic-menu",anchorEl:y,open:f,onClose:b,MenuListProps:{"aria-labelledby":"basic-button"},children:[e.jsxs(Fe,{onClick:()=>{h(!0),b()},children:[" ",e.jsx(oe,{style:{marginRight:"8px"}})," Đổi mật khẩu"]}),e.jsxs(Fe,{onClick:q,children:[e.jsx(zt,{style:{marginRight:"8px"}})," Đăng xuất tài khoản"]})]}),e.jsx(Sr,{open:o,onSubmit:z,onCloseDialogChangePass:O})]})};export{Yr as default};