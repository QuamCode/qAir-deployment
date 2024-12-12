"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2310],{55157:function(e,r,t){t.d(r,{u:function(){return n}});function n(e,[r,t]){return Math.min(t,Math.max(r,e))}},86004:function(e,r,t){t.d(r,{gm:function(){return l}});var n=t(64149);t(20881);var o=n.createContext(void 0);function l(e){let r=n.useContext(o);return e||r||"ltr"}},82310:function(e,r,t){t.d(r,{Ns:function(){return J},fC:function(){return q},gb:function(){return y},l_:function(){return G},q4:function(){return N}});var n=t(64149),o=t(79442),l=t(45485),i=t(74873),a=t(83954),s=t(2441),c=t(86004),d=t(61013),u=t(55157),f=t(64433),p=t(20881),h="ScrollArea",[v,w]=(0,i.b)(h),[g,b]=v(h),m=n.forwardRef((e,r)=>{let{__scopeScrollArea:t,type:l="hover",dir:i,scrollHideDelay:s=600,...d}=e,[u,f]=n.useState(null),[h,v]=n.useState(null),[w,b]=n.useState(null),[m,S]=n.useState(null),[x,E]=n.useState(null),[y,C]=n.useState(0),[T,R]=n.useState(0),[L,P]=n.useState(!1),[_,j]=n.useState(!1),D=(0,a.e)(r,e=>f(e)),W=(0,c.gm)(i);return(0,p.jsx)(g,{scope:t,type:l,dir:W,scrollHideDelay:s,scrollArea:u,viewport:h,onViewportChange:v,content:w,onContentChange:b,scrollbarX:m,onScrollbarXChange:S,scrollbarXEnabled:L,onScrollbarXEnabledChange:P,scrollbarY:x,onScrollbarYChange:E,scrollbarYEnabled:_,onScrollbarYEnabledChange:j,onCornerWidthChange:C,onCornerHeightChange:R,children:(0,p.jsx)(o.WV.div,{dir:W,...d,ref:D,style:{position:"relative","--radix-scroll-area-corner-width":y+"px","--radix-scroll-area-corner-height":T+"px",...e.style}})})});m.displayName=h;var S="ScrollAreaViewport",x=n.forwardRef((e,r)=>{let{__scopeScrollArea:t,children:l,asChild:i,nonce:s,...c}=e,d=b(S,t),u=n.useRef(null),f=(0,a.e)(r,u,d.onViewportChange);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n[data-radix-scroll-area-viewport] {\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n  -webkit-overflow-scrolling: touch;\n}\n[data-radix-scroll-area-viewport]::-webkit-scrollbar {\n  display: none;\n}\n:where([data-radix-scroll-area-viewport]) {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n:where([data-radix-scroll-area-content]) {\n  flex-grow: 1;\n}\n"},nonce:s}),(0,p.jsx)(o.WV.div,{"data-radix-scroll-area-viewport":"",...c,asChild:i,ref:f,style:{overflowX:d.scrollbarXEnabled?"scroll":"hidden",overflowY:d.scrollbarYEnabled?"scroll":"hidden",...e.style},children:function(e,r){let{asChild:t,children:o}=e;if(!t)return"function"==typeof r?r(o):r;let l=n.Children.only(o);return n.cloneElement(l,{children:"function"==typeof r?r(l.props.children):r})}({asChild:i,children:l},e=>(0,p.jsx)("div",{"data-radix-scroll-area-content":"",ref:d.onContentChange,style:{minWidth:d.scrollbarXEnabled?"fit-content":void 0},children:e}))})]})});x.displayName=S;var E="ScrollAreaScrollbar",y=n.forwardRef((e,r)=>{let{forceMount:t,...o}=e,l=b(E,e.__scopeScrollArea),{onScrollbarXEnabledChange:i,onScrollbarYEnabledChange:a}=l,s="horizontal"===e.orientation;return n.useEffect(()=>(s?i(!0):a(!0),()=>{s?i(!1):a(!1)}),[s,i,a]),"hover"===l.type?(0,p.jsx)(C,{...o,ref:r,forceMount:t}):"scroll"===l.type?(0,p.jsx)(T,{...o,ref:r,forceMount:t}):"auto"===l.type?(0,p.jsx)(R,{...o,ref:r,forceMount:t}):"always"===l.type?(0,p.jsx)(L,{...o,ref:r}):null});y.displayName=E;var C=n.forwardRef((e,r)=>{let{forceMount:t,...o}=e,i=b(E,e.__scopeScrollArea),[a,s]=n.useState(!1);return n.useEffect(()=>{let e=i.scrollArea,r=0;if(e){let t=()=>{window.clearTimeout(r),s(!0)},n=()=>{r=window.setTimeout(()=>s(!1),i.scrollHideDelay)};return e.addEventListener("pointerenter",t),e.addEventListener("pointerleave",n),()=>{window.clearTimeout(r),e.removeEventListener("pointerenter",t),e.removeEventListener("pointerleave",n)}}},[i.scrollArea,i.scrollHideDelay]),(0,p.jsx)(l.z,{present:t||a,children:(0,p.jsx)(R,{"data-state":a?"visible":"hidden",...o,ref:r})})}),T=n.forwardRef((e,r)=>{var t,o;let{forceMount:i,...a}=e,s=b(E,e.__scopeScrollArea),c="horizontal"===e.orientation,d=F(()=>h("SCROLL_END"),100),[u,h]=(t="hidden",o={hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}},n.useReducer((e,r)=>{let t=o[e][r];return null!=t?t:e},t));return n.useEffect(()=>{if("idle"===u){let e=window.setTimeout(()=>h("HIDE"),s.scrollHideDelay);return()=>window.clearTimeout(e)}},[u,s.scrollHideDelay,h]),n.useEffect(()=>{let e=s.viewport,r=c?"scrollLeft":"scrollTop";if(e){let t=e[r],n=()=>{let n=e[r];t!==n&&(h("SCROLL"),d()),t=n};return e.addEventListener("scroll",n),()=>e.removeEventListener("scroll",n)}},[s.viewport,c,h,d]),(0,p.jsx)(l.z,{present:i||"hidden"!==u,children:(0,p.jsx)(L,{"data-state":"hidden"===u?"hidden":"visible",...a,ref:r,onPointerEnter:(0,f.M)(e.onPointerEnter,()=>h("POINTER_ENTER")),onPointerLeave:(0,f.M)(e.onPointerLeave,()=>h("POINTER_LEAVE"))})})}),R=n.forwardRef((e,r)=>{let t=b(E,e.__scopeScrollArea),{forceMount:o,...i}=e,[a,s]=n.useState(!1),c="horizontal"===e.orientation,d=F(()=>{if(t.viewport){let e=t.viewport.offsetWidth<t.viewport.scrollWidth,r=t.viewport.offsetHeight<t.viewport.scrollHeight;s(c?e:r)}},10);return B(t.viewport,d),B(t.content,d),(0,p.jsx)(l.z,{present:o||a,children:(0,p.jsx)(L,{"data-state":a?"visible":"hidden",...i,ref:r})})}),L=n.forwardRef((e,r)=>{let{orientation:t="vertical",...o}=e,l=b(E,e.__scopeScrollArea),i=n.useRef(null),a=n.useRef(0),[s,c]=n.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),d=X(s.viewport,s.content),u={...o,sizes:s,onSizesChange:c,hasThumb:!!(d>0&&d<1),onThumbChange:e=>i.current=e,onThumbPointerUp:()=>a.current=0,onThumbPointerDown:e=>a.current=e};function f(e,r){return function(e,r,t){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"ltr",o=Y(t),l=r||o/2,i=t.scrollbar.paddingStart+l,a=t.scrollbar.size-t.scrollbar.paddingEnd-(o-l),s=t.content-t.viewport;return U([i,a],"ltr"===n?[0,s]:[-1*s,0])(e)}(e,a.current,s,r)}return"horizontal"===t?(0,p.jsx)(P,{...u,ref:r,onThumbPositionChange:()=>{if(l.viewport&&i.current){let e=k(l.viewport.scrollLeft,s,l.dir);i.current.style.transform="translate3d(".concat(e,"px, 0, 0)")}},onWheelScroll:e=>{l.viewport&&(l.viewport.scrollLeft=e)},onDragScroll:e=>{l.viewport&&(l.viewport.scrollLeft=f(e,l.dir))}}):"vertical"===t?(0,p.jsx)(_,{...u,ref:r,onThumbPositionChange:()=>{if(l.viewport&&i.current){let e=k(l.viewport.scrollTop,s);i.current.style.transform="translate3d(0, ".concat(e,"px, 0)")}},onWheelScroll:e=>{l.viewport&&(l.viewport.scrollTop=e)},onDragScroll:e=>{l.viewport&&(l.viewport.scrollTop=f(e))}}):null}),P=n.forwardRef((e,r)=>{let{sizes:t,onSizesChange:o,...l}=e,i=b(E,e.__scopeScrollArea),[s,c]=n.useState(),d=n.useRef(null),u=(0,a.e)(r,d,i.onScrollbarXChange);return n.useEffect(()=>{d.current&&c(getComputedStyle(d.current))},[d]),(0,p.jsx)(W,{"data-orientation":"horizontal",...l,ref:u,sizes:t,style:{bottom:0,left:"rtl"===i.dir?"var(--radix-scroll-area-corner-width)":0,right:"ltr"===i.dir?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":Y(t)+"px",...e.style},onThumbPointerDown:r=>e.onThumbPointerDown(r.x),onDragScroll:r=>e.onDragScroll(r.x),onWheelScroll:(r,t)=>{if(i.viewport){let n=i.viewport.scrollLeft+r.deltaX;e.onWheelScroll(n),n>0&&n<t&&r.preventDefault()}},onResize:()=>{d.current&&i.viewport&&s&&o({content:i.viewport.scrollWidth,viewport:i.viewport.offsetWidth,scrollbar:{size:d.current.clientWidth,paddingStart:O(s.paddingLeft),paddingEnd:O(s.paddingRight)}})}})}),_=n.forwardRef((e,r)=>{let{sizes:t,onSizesChange:o,...l}=e,i=b(E,e.__scopeScrollArea),[s,c]=n.useState(),d=n.useRef(null),u=(0,a.e)(r,d,i.onScrollbarYChange);return n.useEffect(()=>{d.current&&c(getComputedStyle(d.current))},[d]),(0,p.jsx)(W,{"data-orientation":"vertical",...l,ref:u,sizes:t,style:{top:0,right:"ltr"===i.dir?0:void 0,left:"rtl"===i.dir?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":Y(t)+"px",...e.style},onThumbPointerDown:r=>e.onThumbPointerDown(r.y),onDragScroll:r=>e.onDragScroll(r.y),onWheelScroll:(r,t)=>{if(i.viewport){let n=i.viewport.scrollTop+r.deltaY;e.onWheelScroll(n),n>0&&n<t&&r.preventDefault()}},onResize:()=>{d.current&&i.viewport&&s&&o({content:i.viewport.scrollHeight,viewport:i.viewport.offsetHeight,scrollbar:{size:d.current.clientHeight,paddingStart:O(s.paddingTop),paddingEnd:O(s.paddingBottom)}})}})}),[j,D]=v(E),W=n.forwardRef((e,r)=>{let{__scopeScrollArea:t,sizes:l,hasThumb:i,onThumbChange:c,onThumbPointerUp:d,onThumbPointerDown:u,onThumbPositionChange:h,onDragScroll:v,onWheelScroll:w,onResize:g,...m}=e,S=b(E,t),[x,y]=n.useState(null),C=(0,a.e)(r,e=>y(e)),T=n.useRef(null),R=n.useRef(""),L=S.viewport,P=l.content-l.viewport,_=(0,s.W)(w),D=(0,s.W)(h),W=F(g,10);function A(e){T.current&&v({x:e.clientX-T.current.left,y:e.clientY-T.current.top})}return n.useEffect(()=>{let e=e=>{let r=e.target;(null==x?void 0:x.contains(r))&&_(e,P)};return document.addEventListener("wheel",e,{passive:!1}),()=>document.removeEventListener("wheel",e,{passive:!1})},[L,x,P,_]),n.useEffect(D,[l,D]),B(x,W),B(S.content,W),(0,p.jsx)(j,{scope:t,scrollbar:x,hasThumb:i,onThumbChange:(0,s.W)(c),onThumbPointerUp:(0,s.W)(d),onThumbPositionChange:D,onThumbPointerDown:(0,s.W)(u),children:(0,p.jsx)(o.WV.div,{...m,ref:C,style:{position:"absolute",...m.style},onPointerDown:(0,f.M)(e.onPointerDown,e=>{0===e.button&&(e.target.setPointerCapture(e.pointerId),T.current=x.getBoundingClientRect(),R.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",S.viewport&&(S.viewport.style.scrollBehavior="auto"),A(e))}),onPointerMove:(0,f.M)(e.onPointerMove,A),onPointerUp:(0,f.M)(e.onPointerUp,e=>{let r=e.target;r.hasPointerCapture(e.pointerId)&&r.releasePointerCapture(e.pointerId),document.body.style.webkitUserSelect=R.current,S.viewport&&(S.viewport.style.scrollBehavior=""),T.current=null})})})}),A="ScrollAreaThumb",N=n.forwardRef((e,r)=>{let{forceMount:t,...n}=e,o=D(A,e.__scopeScrollArea);return(0,p.jsx)(l.z,{present:t||o.hasThumb,children:(0,p.jsx)(z,{ref:r,...n})})}),z=n.forwardRef((e,r)=>{let{__scopeScrollArea:t,style:l,...i}=e,s=b(A,t),c=D(A,t),{onThumbPositionChange:d}=c,u=(0,a.e)(r,e=>c.onThumbChange(e)),h=n.useRef(),v=F(()=>{h.current&&(h.current(),h.current=void 0)},100);return n.useEffect(()=>{let e=s.viewport;if(e){let r=()=>{if(v(),!h.current){let r=V(e,d);h.current=r,d()}};return d(),e.addEventListener("scroll",r),()=>e.removeEventListener("scroll",r)}},[s.viewport,v,d]),(0,p.jsx)(o.WV.div,{"data-state":c.hasThumb?"visible":"hidden",...i,ref:u,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...l},onPointerDownCapture:(0,f.M)(e.onPointerDownCapture,e=>{let r=e.target.getBoundingClientRect(),t=e.clientX-r.left,n=e.clientY-r.top;c.onThumbPointerDown({x:t,y:n})}),onPointerUp:(0,f.M)(e.onPointerUp,c.onThumbPointerUp)})});N.displayName=A;var H="ScrollAreaCorner",M=n.forwardRef((e,r)=>{let t=b(H,e.__scopeScrollArea),n=!!(t.scrollbarX&&t.scrollbarY);return"scroll"!==t.type&&n?(0,p.jsx)(I,{...e,ref:r}):null});M.displayName=H;var I=n.forwardRef((e,r)=>{let{__scopeScrollArea:t,...l}=e,i=b(H,t),[a,s]=n.useState(0),[c,d]=n.useState(0),u=!!(a&&c);return B(i.scrollbarX,()=>{var e;let r=(null===(e=i.scrollbarX)||void 0===e?void 0:e.offsetHeight)||0;i.onCornerHeightChange(r),d(r)}),B(i.scrollbarY,()=>{var e;let r=(null===(e=i.scrollbarY)||void 0===e?void 0:e.offsetWidth)||0;i.onCornerWidthChange(r),s(r)}),u?(0,p.jsx)(o.WV.div,{...l,ref:r,style:{width:a,height:c,position:"absolute",right:"ltr"===i.dir?0:void 0,left:"rtl"===i.dir?0:void 0,bottom:0,...e.style}}):null});function O(e){return e?parseInt(e,10):0}function X(e,r){let t=e/r;return isNaN(t)?0:t}function Y(e){let r=X(e.viewport,e.content),t=e.scrollbar.paddingStart+e.scrollbar.paddingEnd;return Math.max((e.scrollbar.size-t)*r,18)}function k(e,r){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ltr",n=Y(r),o=r.scrollbar.paddingStart+r.scrollbar.paddingEnd,l=r.scrollbar.size-o,i=r.content-r.viewport,a=(0,u.u)(e,"ltr"===t?[0,i]:[-1*i,0]);return U([0,i],[0,l-n])(a)}function U(e,r){return t=>{if(e[0]===e[1]||r[0]===r[1])return r[0];let n=(r[1]-r[0])/(e[1]-e[0]);return r[0]+n*(t-e[0])}}var V=function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:()=>{},t={left:e.scrollLeft,top:e.scrollTop},n=0;return!function o(){let l={left:e.scrollLeft,top:e.scrollTop},i=t.left!==l.left,a=t.top!==l.top;(i||a)&&r(),t=l,n=window.requestAnimationFrame(o)}(),()=>window.cancelAnimationFrame(n)};function F(e,r){let t=(0,s.W)(e),o=n.useRef(0);return n.useEffect(()=>()=>window.clearTimeout(o.current),[]),n.useCallback(()=>{window.clearTimeout(o.current),o.current=window.setTimeout(t,r)},[t,r])}function B(e,r){let t=(0,s.W)(r);(0,d.b)(()=>{let r=0;if(e){let n=new ResizeObserver(()=>{cancelAnimationFrame(r),r=window.requestAnimationFrame(t)});return n.observe(e),()=>{window.cancelAnimationFrame(r),n.unobserve(e)}}},[e,t])}var q=m,G=x,J=M}}]);