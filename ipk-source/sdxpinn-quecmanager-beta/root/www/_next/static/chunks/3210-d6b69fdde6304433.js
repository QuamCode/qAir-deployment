"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3210],{39997:(e,t,r)=>{r.d(t,{A:()=>u});var n=r(20107);let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&r.indexOf(e)===t).join(" ")};var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let l=(0,n.forwardRef)((e,t)=>{let{color:r="currentColor",size:o=24,strokeWidth:l=2,absoluteStrokeWidth:u,className:s="",children:d,iconNode:c,...f}=e;return(0,n.createElement)("svg",{ref:t,...i,width:o,height:o,stroke:r,strokeWidth:u?24*Number(l)/Number(o):l,className:a("lucide",s),...f},[...c.map(e=>{let[t,r]=e;return(0,n.createElement)(t,r)}),...Array.isArray(d)?d:[d]])}),u=(e,t)=>{let r=(0,n.forwardRef)((r,i)=>{let{className:u,...s}=r;return(0,n.createElement)(l,{ref:i,iconNode:t,className:a("lucide-".concat(o(e)),u),...s})});return r.displayName="".concat(e),r}},51873:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(39997).A)("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]])},12607:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(39997).A)("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]])},62108:(e,t,r)=>{r.d(t,{UC:()=>A,bL:()=>M,l9:()=>P});var n,o=r(20107),a=r(94521),i=r(80938),l=r(81255),u=r(74111),s=r(14673),d=(r(82412),r(62796)),c=r(4589),f=r(15975),p=r(20475),v="HoverCard",[m,h]=(0,i.A)(v,[s.Bk]),w=(0,s.Bk)(),[N,y]=m(v),g=e=>{let{__scopeHoverCard:t,children:r,open:n,defaultOpen:a,onOpenChange:i,openDelay:u=700,closeDelay:d=300}=e,c=w(t),f=o.useRef(0),v=o.useRef(0),m=o.useRef(!1),h=o.useRef(!1),[y=!1,g]=(0,l.i)({prop:n,defaultProp:a,onChange:i}),C=o.useCallback(()=>{clearTimeout(v.current),f.current=window.setTimeout(()=>g(!0),u)},[u,g]),x=o.useCallback(()=>{clearTimeout(f.current),m.current||h.current||(v.current=window.setTimeout(()=>g(!1),d))},[d,g]),E=o.useCallback(()=>g(!1),[g]);return o.useEffect(()=>()=>{clearTimeout(f.current),clearTimeout(v.current)},[]),(0,p.jsx)(N,{scope:t,open:y,onOpenChange:g,onOpen:C,onClose:x,onDismiss:E,hasSelectionRef:m,isPointerDownOnContentRef:h,children:(0,p.jsx)(s.bL,{...c,children:r})})};g.displayName=v;var C="HoverCardTrigger",x=o.forwardRef((e,t)=>{let{__scopeHoverCard:r,...n}=e,o=y(C,r),i=w(r);return(0,p.jsx)(s.Mz,{asChild:!0,...i,children:(0,p.jsx)(c.sG.a,{"data-state":o.open?"open":"closed",...n,ref:t,onPointerEnter:(0,a.m)(e.onPointerEnter,O(o.onOpen)),onPointerLeave:(0,a.m)(e.onPointerLeave,O(o.onClose)),onFocus:(0,a.m)(e.onFocus,o.onOpen),onBlur:(0,a.m)(e.onBlur,o.onClose),onTouchStart:(0,a.m)(e.onTouchStart,e=>e.preventDefault())})})});x.displayName=C;var[E,T]=m("HoverCardPortal",{forceMount:void 0}),R="HoverCardContent",b=o.forwardRef((e,t)=>{let r=T(R,e.__scopeHoverCard),{forceMount:n=r.forceMount,...o}=e,i=y(R,e.__scopeHoverCard);return(0,p.jsx)(d.C,{present:n||i.open,children:(0,p.jsx)(k,{"data-state":i.open?"open":"closed",...o,onPointerEnter:(0,a.m)(e.onPointerEnter,O(i.onOpen)),onPointerLeave:(0,a.m)(e.onPointerLeave,O(i.onClose)),ref:t})})});b.displayName=R;var k=o.forwardRef((e,t)=>{let{__scopeHoverCard:r,onEscapeKeyDown:i,onPointerDownOutside:l,onFocusOutside:d,onInteractOutside:c,...v}=e,m=y(R,r),h=w(r),N=o.useRef(null),g=(0,u.s)(t,N),[C,x]=o.useState(!1);return o.useEffect(()=>{if(C){let e=document.body;return n=e.style.userSelect||e.style.webkitUserSelect,e.style.userSelect="none",e.style.webkitUserSelect="none",()=>{e.style.userSelect=n,e.style.webkitUserSelect=n}}},[C]),o.useEffect(()=>{if(N.current){let e=()=>{x(!1),m.isPointerDownOnContentRef.current=!1,setTimeout(()=>{var e;(null===(e=document.getSelection())||void 0===e?void 0:e.toString())!==""&&(m.hasSelectionRef.current=!0)})};return document.addEventListener("pointerup",e),()=>{document.removeEventListener("pointerup",e),m.hasSelectionRef.current=!1,m.isPointerDownOnContentRef.current=!1}}},[m.isPointerDownOnContentRef,m.hasSelectionRef]),o.useEffect(()=>{N.current&&(function(e){let t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP});for(;r.nextNode();)t.push(r.currentNode);return t})(N.current).forEach(e=>e.setAttribute("tabindex","-1"))}),(0,p.jsx)(f.qW,{asChild:!0,disableOutsidePointerEvents:!1,onInteractOutside:c,onEscapeKeyDown:i,onPointerDownOutside:l,onFocusOutside:(0,a.m)(d,e=>{e.preventDefault()}),onDismiss:m.onDismiss,children:(0,p.jsx)(s.UC,{...h,...v,onPointerDown:(0,a.m)(v.onPointerDown,e=>{e.currentTarget.contains(e.target)&&x(!0),m.hasSelectionRef.current=!1,m.isPointerDownOnContentRef.current=!0}),ref:g,style:{...v.style,userSelect:C?"text":void 0,WebkitUserSelect:C?"text":void 0,"--radix-hover-card-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-hover-card-content-available-width":"var(--radix-popper-available-width)","--radix-hover-card-content-available-height":"var(--radix-popper-available-height)","--radix-hover-card-trigger-width":"var(--radix-popper-anchor-width)","--radix-hover-card-trigger-height":"var(--radix-popper-anchor-height)"}})})});function O(e){return t=>"touch"===t.pointerType?void 0:e()}o.forwardRef((e,t)=>{let{__scopeHoverCard:r,...n}=e,o=w(r);return(0,p.jsx)(s.i3,{...o,...n,ref:t})}).displayName="HoverCardArrow";var M=g,P=x,A=b},73725:(e,t,r)=>{r.d(t,{b:()=>l});var n=r(20107),o=r(4589),a=r(20475),i=n.forwardRef((e,t)=>(0,a.jsx)(o.sG.label,{...e,ref:t,onMouseDown:t=>{var r;t.target.closest("button, input, select, textarea")||(null===(r=e.onMouseDown)||void 0===r||r.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));i.displayName="Label";var l=i},62796:(e,t,r)=>{r.d(t,{C:()=>i});var n=r(20107),o=r(74111),a=r(58013),i=e=>{let{present:t,children:r}=e,i=function(e){var t,r;let[o,i]=n.useState(),u=n.useRef({}),s=n.useRef(e),d=n.useRef("none"),[c,f]=(t=e?"mounted":"unmounted",r={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},n.useReducer((e,t)=>{let n=r[e][t];return null!=n?n:e},t));return n.useEffect(()=>{let e=l(u.current);d.current="mounted"===c?e:"none"},[c]),(0,a.N)(()=>{let t=u.current,r=s.current;if(r!==e){let n=d.current,o=l(t);e?f("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?f("UNMOUNT"):r&&n!==o?f("ANIMATION_OUT"):f("UNMOUNT"),s.current=e}},[e,f]),(0,a.N)(()=>{if(o){var e;let t;let r=null!==(e=o.ownerDocument.defaultView)&&void 0!==e?e:window,n=e=>{let n=l(u.current).includes(e.animationName);if(e.target===o&&n&&(f("ANIMATION_END"),!s.current)){let e=o.style.animationFillMode;o.style.animationFillMode="forwards",t=r.setTimeout(()=>{"forwards"===o.style.animationFillMode&&(o.style.animationFillMode=e)})}},a=e=>{e.target===o&&(d.current=l(u.current))};return o.addEventListener("animationstart",a),o.addEventListener("animationcancel",n),o.addEventListener("animationend",n),()=>{r.clearTimeout(t),o.removeEventListener("animationstart",a),o.removeEventListener("animationcancel",n),o.removeEventListener("animationend",n)}}f("ANIMATION_END")},[o,f]),{isPresent:["mounted","unmountSuspended"].includes(c),ref:n.useCallback(e=>{e&&(u.current=getComputedStyle(e)),i(e)},[])}}(t),u="function"==typeof r?r({present:i.isPresent}):n.Children.only(r),s=(0,o.s)(i.ref,function(e){var t,r;let n=null===(t=Object.getOwnPropertyDescriptor(e.props,"ref"))||void 0===t?void 0:t.get,o=n&&"isReactWarning"in n&&n.isReactWarning;return o?e.ref:(o=(n=null===(r=Object.getOwnPropertyDescriptor(e,"ref"))||void 0===r?void 0:r.get)&&"isReactWarning"in n&&n.isReactWarning)?e.props.ref:e.props.ref||e.ref}(u));return"function"==typeof r||i.isPresent?n.cloneElement(u,{ref:s}):null};function l(e){return(null==e?void 0:e.animationName)||"none"}i.displayName="Presence"},55809:(e,t,r)=>{r.d(t,{b:()=>s});var n=r(20107),o=r(4589),a=r(20475),i="horizontal",l=["horizontal","vertical"],u=n.forwardRef((e,t)=>{let{decorative:r,orientation:n=i,...u}=e,s=l.includes(n)?n:i;return(0,a.jsx)(o.sG.div,{"data-orientation":s,...r?{role:"none"}:{"aria-orientation":"vertical"===s?s:void 0,role:"separator"},...u,ref:t})});u.displayName="Separator";var s=u}}]);