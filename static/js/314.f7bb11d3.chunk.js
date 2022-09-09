"use strict";(self.webpackChunkcafeone=self.webpackChunkcafeone||[]).push([[314],{112:function(e,t,s){var n=s(182),l=(s(7313),s(6417));t.Z=function(e){var t=e.title,s=void 0===t?"":t,d=e.description,a=void 0===d?"":d,c=e.children,r=void 0===c?null:c;return(0,l.jsxs)(n.q,{children:[s&&(0,l.jsx)("title",{children:s}),a&&(0,l.jsx)("meta",{name:"description",content:a}),r&&r]})}},1314:function(e,t,s){s.r(t);var n=s(885),l=s(7313),d=s(8303),a=s(3849),c=s(1616),r=s(7533),i=s(9600),m=s(975),x=s(5668),o=s(3060),u=s(8804),h=s(112),p=s(6023),j=s(6352),f=s(6031),N=(s(8282),s(3145)),b=s(1378),v=s.n(b),g=(s(2632),s(816)),y=s.n(g),Z=s(3295),w=s(6576),C=s(3614),A=s(7197),B=s(9251),T=s(6460),k=s(6417),S=(0,l.forwardRef)((function(e,t){var s=(0,j.v9)((function(e){return e.transactions.items}));return(0,k.jsx)("div",{ref:t,style:{padding:"20px"},children:(0,k.jsxs)("table",{align:"left",border:"1",cellSpacing:"5",cellPadding:"15",style:{border:"1px solid #ccc"},children:[(0,k.jsx)("thead",{className:"",children:(0,k.jsxs)("tr",{align:"left",children:[(0,k.jsx)("th",{style:{borderBottom:"1px solid #ccc",padding:"4px 5px"},children:(0,k.jsx)("div",{className:"text-muted text-medium",children:"Date"})}),(0,k.jsx)("th",{style:{borderBottom:"1px solid #ccc",padding:"4px 5px"},children:(0,k.jsx)("div",{className:"text-muted text-medium ",children:"Name"})}),(0,k.jsx)("th",{style:{borderBottom:"1px solid #ccc",padding:"4px 5px"},children:(0,k.jsx)("div",{className:"text-muted text-medium ",children:"Branch"})}),(0,k.jsx)("th",{style:{borderBottom:"1px solid #ccc",padding:"4px 5px"},children:(0,k.jsx)("div",{className:"text-muted text-medium ",children:"Campaign"})}),(0,k.jsx)("th",{style:{borderBottom:"1px solid #ccc",padding:"4px 5px"},children:(0,k.jsx)("div",{className:"text-muted text-medium ",children:"Plan"})}),(0,k.jsx)("th",{style:{borderBottom:"1px solid #ccc",padding:"4px 5px"},children:(0,k.jsx)("div",{className:"text-muted text-medium ",children:"Type"})}),(0,k.jsx)("th",{style:{borderBottom:"1px solid #ccc",padding:"4px 5px"},children:(0,k.jsx)("div",{className:"text-muted text-medium ",children:"Amount"})}),(0,k.jsx)("th",{style:{borderBottom:"1px solid #ccc",padding:"4px 5px"},children:(0,k.jsx)("div",{className:"text-muted text-medium ",children:"Narration"})}),(0,k.jsx)("th",{style:{borderBottom:"1px solid #ccc",padding:"4px 5px"},children:(0,k.jsx)("div",{className:"text-muted text-medium ",children:"Status "})})]})}),(0,k.jsx)("tbody",{children:s.map((function(e,t){return(0,k.jsxs)("tr",{className:"mb-2",children:[(0,k.jsx)("td",{style:{borderBottom:"1px solid #ccc",padding:"4px 5px"},children:(0,k.jsx)("div",{className:"text-alternate ",children:y()(e.dateCreated).format("ll")})}),(0,k.jsx)("td",{style:{borderBottom:"1px solid #ccc",padding:"4px 5px"},children:(0,k.jsx)("div",{className:"text-alternate",children:(0,k.jsx)("span",{children:e.member?e.member.name:"-"})})}),(0,k.jsx)("td",{style:{borderBottom:"1px solid #ccc",padding:"4px 5px"},children:(0,k.jsx)("div",{children:e.branch})}),(0,k.jsx)("td",{style:{borderBottom:"1px solid #ccc",padding:"4px 5px"},children:(0,k.jsx)("div",{children:e.campaign})}),(0,k.jsx)("td",{style:{borderBottom:"1px solid #ccc",padding:"4px 5px"},children:(0,k.jsx)("div",{children:e.plan})}),(0,k.jsx)("td",{style:{borderBottom:"1px solid #ccc",padding:"4px 5px"},children:(0,k.jsx)("div",{children:e.type})}),(0,k.jsx)("td",{style:{borderBottom:"1px solid #ccc",padding:"4px 5px"},children:(0,k.jsx)("div",{children:e.amountPayable})}),(0,k.jsx)("td",{style:{borderBottom:"1px solid #ccc",padding:"4px 5px"},children:(0,k.jsx)("div",{children:e.narration})}),(0,k.jsx)("td",{style:{borderBottom:"1px solid #ccc",padding:"4px 5px"},children:(0,k.jsx)("div",{children:e.status?"Active":"Inactive"})})]},t)}))})]})})}));t.default=function(){var e=(0,l.useState)(null),t=(0,n.Z)(e,2),s=t[0],b=t[1],g=(0,l.useState)(null),P=(0,n.Z)(g,2),D=P[0],I=P[1],E=(0,l.useRef)(),M=(0,Z.useReactToPrint)({content:function(){return E.current}}),R=(0,j.v9)((function(e){return e.branches.branches})).map((function(e){return{value:e.id,name:e.name}})),Y=(0,j.v9)((function(e){return e.members.items})).map((function(e){var t="".concat(e.firstName," ").concat(e.lastName);return{value:e.id,name:t}})),L="Transactions List",O=(0,l.useState)(1),z=(0,n.Z)(O,2),F=z[0],U=z[1],G=(0,l.useState)(""),H=(0,n.Z)(G,2),q=H[0],_=H[1],J=(0,j.v9)((function(e){return e.transactions.items})),K=(0,j.I0)(),Q=(0,l.useState)([]),V=(0,n.Z)(Q,2),W=V[0],X=V[1],$=(0,l.useState)(null),ee=(0,n.Z)($,2),te=ee[0],se=ee[1],ne=(0,l.useState)(null),le=(0,n.Z)(ne,2),de=le[0],ae=le[1],ce=new Intl.NumberFormat("en-US",{style:"currency",currency:"NGN",currencyDisplay:"narrowSymbol"});function re(e){var t=new C.default(e,{keys:["name","groupName","items.name"],threshold:.3});return function(s){return s.length?t.search(s).map((function(e){return e.item})):e}}l.useEffect((function(){K((0,A.f1)(F,q)),K((0,B.Zw)(F,q,50)),K((0,T.C_)(F,q,50))}),[K,F,q]);var ie=(0,l.useCallback)((0,f.debounce)((function(e){return _(e)}),1e3),[]);l.useEffect((function(){var e=J.map((function(e){return{cell1:y()(e.dateCreated).format("ll"),cell2:e.member?e.member.name:"-",cell3:e.branch,cell4:e.campaign,cell5:e.amountPayable,cell6:e.plan,cell7:e.type,cell8:e.status,cell9:e.narration}}));X(e)}),[J]);return l.useEffect((function(){K((0,A.f1)(F,q,y()(te).format("YYYY-MM-DD"),y()(de).format("YYYY-MM-DD"),s,D))}),[te,de,s,D]),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(h.Z,{title:L,description:"Transactions List Page"}),(0,k.jsxs)("div",{className:"page-title-container",children:[(0,k.jsx)("div",{style:{display:"none"},children:(0,k.jsx)(S,{ref:E})}),(0,k.jsx)(a.Z,{className:"g-0",children:(0,k.jsxs)(c.Z,{className:"col-auto mb-3 mb-sm-0 me-auto",children:[(0,k.jsxs)(d.OL,{className:"muted-link pb-1 d-inline-block hidden breadcrumb-back",to:"/",children:[(0,k.jsx)(p.Z,{icon:"chevron-left",size:"13"}),(0,k.jsx)("span",{className:"align-middle text-small ms-1",children:"Home"})]}),(0,k.jsx)("h1",{className:"mb-0 pb-0 display-4",id:"title",children:L})]})})]}),(0,k.jsxs)(a.Z,{className:"mb-3",children:[(0,k.jsx)(c.Z,{md:"5",lg:"4",className:"mb-1 d-flex align-items-center ",children:(0,k.jsxs)("div",{className:"d-inline-block float-md-start mb-1 search-input-container w-100 shadow bg-foreground",children:[(0,k.jsx)(r.Z.Control,{type:"search",placeholder:"Search",onChange:function(e){return function(e){ie(e.target.value)}(e)}}),(0,k.jsx)("span",{className:"search-magnifier-icon",children:(0,k.jsx)(p.Z,{icon:"search"})}),(0,k.jsx)("span",{className:"search-delete-icon d-none",children:(0,k.jsx)(p.Z,{icon:"close"})})]})}),(0,k.jsxs)(c.Z,{md:"7",lg:"8",className:"mb-1 text-end d-none d-md-inline",children:[(0,k.jsxs)(i.Z,{align:{xs:"end"},className:"d-inline-block ms-1",children:[(0,k.jsx)(m.Z,{delay:{show:1e3,hide:0},placement:"top",overlay:(0,k.jsx)(x.Z,{id:"tooltip-top",children:"Export "}),children:(0,k.jsx)(i.Z.Toggle,{variant:"foreground-alternate",className:"dropdown-toggle-no-arrow btn btn-icon btn-icon-only shadow",children:(0,k.jsx)(p.Z,{icon:"download"})})}),(0,k.jsxs)(i.Z.Menu,{className:"shadow dropdown-menu-end",children:[(0,k.jsxs)(i.Z.Item,{href:"#",children:[" ",(0,k.jsx)(N.Z,{filename:"transactions",extension:".csv",separator:",",wrapColumnChar:"",columns:[{id:"cell1",displayName:"DATE"},{id:"cell2",displayName:"NAME"},{id:"cell3",displayName:"BRANCH"},{id:"cell4",displayName:"CAMPAIGN"},{id:"cell5",displayName:"AMOUNT"},{id:"cell6",displayName:"PLAN"},{id:"cell7",displayName:"TYPE"},{id:"cell8",displayName:"STATUS"},{id:"cell9",displayName:"NARRATION"}],datas:W,children:"Export csv"})]}),(0,k.jsx)(i.Z.Item,{onClick:M,children:"Export pdf"})]})]}),(0,k.jsx)(i.Z,{align:{xs:"end"},className:"d-inline-block ms-1",children:(0,k.jsx)(m.Z,{delay:{show:1e3,hide:0},placement:"top",overlay:(0,k.jsx)(x.Z,{id:"tooltip-top",children:"Item Count"}),children:(0,k.jsxs)(i.Z.Toggle,{variant:"foreground-alternate",className:"shadow sw-13",children:[J.length," Items"]})})})]})]}),(0,k.jsxs)(a.Z,{className:"mb-3 justify-content-between align-items-center",children:[(0,k.jsx)(c.Z,{sm:"12",md:"5",className:"mb-1 d-flex align-items-center ",children:(0,k.jsxs)("div",{className:"d-flex align-items-center gap-1",children:[(0,k.jsx)(w.Z,{filterOptions:function(){return re(Y)},options:Y,search:!0,name:"members",value:s,onChange:function(e){return b(e)},placeholder:"Filter by  member"}),(0,k.jsx)(w.Z,{filterOptions:function(){return re(R)},options:R,search:!0,name:"branchId",value:D,placeholder:"Filter by  branch",onChange:function(e){return I(e)}})]})}),(0,k.jsxs)(c.Z,{sm:"12",md:"5",children:[" ",(0,k.jsxs)("div",{className:"d-flex justify-content-end  align-items-center px-md-3 gap-1",children:[(0,k.jsx)(v(),{className:"border rounded-sm  px-2 px-lg-3 py-2 py-lg-2 text-muted me-2 w-100",selected:te,onChange:function(e){return se(e)},selectsStart:!0,startDate:te,endDate:de,minDate:new Date,isClearable:!0,placeholderText:"Filter from"}),(0,k.jsx)(v(),{selected:de,onChange:function(e){return ae(e)},selectsEnd:!0,startDate:te,endDate:de,minDate:te,isClearable:!0,placeholderText:"Filter to",className:"border rounded-sm  px-2 px-lg-3 py-2 py-lg-2 text-muted w-100"})]})]}),(0,k.jsx)(c.Z,{xs:"12",md:"2",className:"d-flex align-items-center mt-2 mt-md-0",children:(0,k.jsxs)("span",{onClick:function(){return se(null),ae(null),b(null),void I(null)},className:"cursor-pointer d-flex align-items-center",children:[(0,k.jsx)("span",{className:"me-1",children:"Reset filter"})," ",(0,k.jsx)(p.Z,{icon:"refresh-horizontal",size:"13"})]})})]}),(0,k.jsxs)(a.Z,{className:"g-0 h-100 align-content-center d-none d-lg-flex ps-5 pe-5 mb-2 mt-5",children:[(0,k.jsx)(c.Z,{md:"1",className:"d-flex flex-column pe-1 justify-content-center",children:(0,k.jsx)("div",{className:"text-muted text-small cursor-pointer ",children:"DATE"})}),(0,k.jsx)(c.Z,{md:"1",className:"d-flex flex-column pe-1 justify-content-center ",children:(0,k.jsx)("div",{className:"text-muted text-small cursor-pointer ",children:"NAME"})}),(0,k.jsx)(c.Z,{md:"2",className:"d-flex flex-column pe-1 justify-content-center",children:(0,k.jsx)("div",{className:"text-muted text-small cursor-pointer ",children:"BRANCH"})}),(0,k.jsx)(c.Z,{md:"1",className:"d-flex flex-column pe-1 justify-content-center px-1",children:(0,k.jsx)("div",{className:"text-muted text-small cursor-pointer ",children:"CAMPAIGN"})}),(0,k.jsx)(c.Z,{md:"1",className:"d-flex flex-column pe-1 justify-content-center px-1",children:(0,k.jsx)("div",{className:"text-muted text-small cursor-pointer ",children:"PLAN"})}),(0,k.jsx)(c.Z,{md:"1",className:"d-flex flex-column pe-1 justify-content-center px-1",children:(0,k.jsx)("div",{className:"text-muted text-small cursor-pointer ",children:"TYPE"})}),(0,k.jsx)(c.Z,{md:"1",className:"d-flex flex-column pe-1 justify-content-center px-1",children:(0,k.jsx)("div",{className:"text-muted text-small cursor-pointer ",children:"AMOUNT "})}),(0,k.jsx)(c.Z,{md:"1",className:"d-flex flex-column pe-1 justify-content-center text-center px-2",children:(0,k.jsx)("div",{className:"text-muted text-small cursor-pointer  text-left",children:"STATUS "})}),(0,k.jsx)(c.Z,{md:"2",className:"d-flex flex-column pe-1 justify-content-center px-1",children:(0,k.jsx)("div",{className:"text-muted text-small cursor-pointer ",children:"NARRATION"})}),(0,k.jsx)(c.Z,{md:"1",className:"d-flex flex-column pe-1 justify-content-center text-right px-1",children:(0,k.jsx)("div",{className:"text-muted text-small cursor-pointer text-center",children:"ACTION"})})]}),J&&J.length?J.map((function(e,t){return(0,k.jsx)(o.Z,{className:"mb-2",children:(0,k.jsx)(o.Z.Body,{className:"pt-md-0 pb-md-0 sh-auto sh-md-8 px-md-4",children:(0,k.jsxs)(a.Z,{className:"g-0 h-100 align-content-center cursor-default",children:[(0,k.jsxs)(c.Z,{xs:"12",md:"1",className:"d-flex flex-column justify-content-center mb-2 mb-md-0 order-4 order-md-3 px-1",children:[(0,k.jsx)("div",{className:"text-muted text-small d-md-none",children:"Date"}),(0,k.jsx)("div",{className:"text-alternate text-medium",children:(0,k.jsx)("span",{children:y()(e.dateCreated).format("l")})})]}),(0,k.jsxs)(c.Z,{xs:"12",md:"1",className:"d-flex flex-column justify-content-center mb-2 mb-md-0 order-4 order-md-3 px-1",children:[(0,k.jsx)("div",{className:"text-muted text-small d-md-none",children:"Name"}),(0,k.jsx)("div",{className:"text-alternate text-medium",children:(0,k.jsx)("span",{children:e.member?e.member.name:"-"})})]}),(0,k.jsxs)(c.Z,{xs:"12",md:"2",className:"d-flex flex-column justify-content-center mb-2 mb-md-0 order-4 order-md-3 px-1",children:[(0,k.jsx)("div",{className:"text-muted text-small d-md-none",children:"Branch"}),(0,k.jsx)("div",{className:"text-alternate text-medium",children:(0,k.jsx)("span",{children:e.branch})})]}),(0,k.jsxs)(c.Z,{xs:"12",md:"1",className:"d-flex flex-column justify-content-center mb-2 mb-md-0 order-4 order-md-3 px-1",children:[(0,k.jsx)("div",{className:"text-muted text-small d-md-none",children:"Campaign"}),(0,k.jsx)("div",{className:"text-alternate text-medium",children:(0,k.jsx)("span",{children:e.campaign?e.campaign:"-"})})]}),(0,k.jsxs)(c.Z,{xs:"6",md:"1",className:"d-flex flex-column justify-content-center mb-2 mb-md-0 order-4 order-md-3 px-1",children:[(0,k.jsx)("div",{className:"text-muted text-small d-md-none",children:"Plan"}),(0,k.jsx)("div",{className:"text-alternate text-medium text-capitalize",children:(0,k.jsx)("span",{children:e.plan.toLowerCase()})})]}),(0,k.jsxs)(c.Z,{xs:"6",md:"1",className:"d-flex flex-column justify-content-center mb-2 mb-md-0 order-4 order-md-3 px-1",children:[(0,k.jsx)("div",{className:"text-muted text-small d-md-none",children:"Type"}),(0,k.jsx)("div",{className:"text-alternate text-medium text-capitalize",children:(0,k.jsx)("span",{children:e.type.toLowerCase()})})]}),(0,k.jsxs)(c.Z,{xs:"6",md:"1",className:"d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4 px-1",children:[(0,k.jsx)("div",{className:"text-muted text-small d-md-none",children:"Amount "}),(0,k.jsxs)("div",{className:"text-alternate text-medium",children:[" ",ce.format(e.amountPayable)]})]}),(0,k.jsxs)(c.Z,{xs:"6",md:"1",className:"d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4 px-1",children:[(0,k.jsx)("div",{className:"text-muted text-small d-md-none",children:"Status"}),(0,k.jsx)("div",{className:"text-alternate text-medium text-capitalize",children:e.status.toLowerCase()})]}),(0,k.jsxs)(c.Z,{xs:"12",md:"2",className:"d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4 px-1",children:[(0,k.jsx)("div",{className:"text-muted d-md-none",children:"Narration"}),(0,k.jsx)("div",{className:"text-alternate text-medium d-none d-md-inline",children:e.narration}),(0,k.jsx)("div",{className:"text-alternate text-medium d-md-none",children:e.narration})]}),(0,k.jsx)(c.Z,{xs:"12",md:"1",className:"d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4 px-1",children:(0,k.jsxs)(i.Z,{className:"",children:[(0,k.jsxs)(i.Z.Toggle,{variant:"light",as:"div",className:"text-center",bsPrefix:"dot",children:[(0,k.jsx)(p.Z,{icon:"more-vertical",className:"text-small",size:"12"})," "]}),"pending"===e.status.toLowerCase()?(0,k.jsx)(i.Z.Menu,{className:"shadow dropdown-menu-end",children:(0,k.jsx)(i.Z.Item,{onClick:function(){return t=e.paymnetId,void(window.confirm("Please confirm this action!")&&K((0,A.E3)(t)).then((function(){K((0,A.f1)(F,q))})));var t},children:"Mark as paid"})}):(0,k.jsx)(i.Z.Menu,{className:"shadow dropdown-menu-end",children:(0,k.jsx)(i.Z.Item,{children:"No action"})})]})})]})})},t)})):(0,k.jsx)("div",{className:"text-center py-4 text-muted",children:"No transaction available"}),J.length?(0,k.jsx)("div",{className:"d-flex justify-content-center mt-5",children:(0,k.jsxs)(u.Z,{children:[(0,k.jsx)(u.Z.Prev,{className:"shadow",disabled:1===F,onClick:function(){1!==F&&U(F-1)},children:(0,k.jsx)(p.Z,{icon:"chevron-left"})}),(0,k.jsx)(u.Z.Next,{className:"shadow",onClick:function(){J.length<15||U(F+1)},disabled:J.length<15,children:(0,k.jsx)(p.Z,{icon:"chevron-right"})})]})}):""]})}}}]);