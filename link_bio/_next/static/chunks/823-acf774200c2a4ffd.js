(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[823],{4850:function(e,t,r){"use strict";r.d(t,{q:function(){return S}});var n=r(7294),a=r(3967),l=r.n(a),u=r(7462),o=r(5360),i=r(9698),s=r(9981),d=r(5320);let f="Avatar",[c,p]=(0,o.b)(f),[v,m]=c(f),g=(0,n.forwardRef)((e,t)=>{let{__scopeAvatar:r,...a}=e,[l,o]=(0,n.useState)("idle");return(0,n.createElement)(v,{scope:r,imageLoadingStatus:l,onImageLoadingStatusChange:o},(0,n.createElement)(d.WV.span,(0,u.Z)({},a,{ref:t})))}),y=(0,n.forwardRef)((e,t)=>{let{__scopeAvatar:r,src:a,onLoadingStatusChange:l=()=>{},...o}=e,f=m("AvatarImage",r),c=$cddcb0b647441e34$var$useImageLoadingStatus(a),p=(0,i.W)(e=>{l(e),f.onImageLoadingStatusChange(e)});return(0,s.b)(()=>{"idle"!==c&&p(c)},[c,p]),"loaded"===c?(0,n.createElement)(d.WV.img,(0,u.Z)({},o,{ref:t,src:a})):null}),h=(0,n.forwardRef)((e,t)=>{let{__scopeAvatar:r,delayMs:a,...l}=e,o=m("AvatarFallback",r),[i,s]=(0,n.useState)(void 0===a);return(0,n.useEffect)(()=>{if(void 0!==a){let e=window.setTimeout(()=>s(!0),a);return()=>window.clearTimeout(e)}},[a]),i&&"loaded"!==o.imageLoadingStatus?(0,n.createElement)(d.WV.span,(0,u.Z)({},l,{ref:t})):null});function $cddcb0b647441e34$var$useImageLoadingStatus(e){let[t,r]=(0,n.useState)("idle");return(0,s.b)(()=>{if(!e){r("error");return}let t=!0,n=new window.Image,updateStatus=e=>()=>{t&&r(e)};return r("loading"),n.onload=updateStatus("loaded"),n.onerror=updateStatus("error"),n.src=e,()=>{t=!1}},[e]),t}var b=r(8291),w=r(6679),C=r(8219);let x={size:{type:"enum",values:["1","2","3","4","5","6","7","8","9"],default:"3",responsive:!0},variant:{type:"enum",values:["solid","soft"],default:"soft"},color:{...b.m,default:void 0},highContrast:w.B,radius:C.C,fallback:{type:"ReactNode",default:void 0,required:!0}};var _=r(3843),E=r(6776);let S=n.forwardRef((e,t)=>{let{rest:r,...a}=(0,_.FY)(e),{className:u,style:o,size:i=x.size.default,variant:s=x.variant.default,color:d=x.color.default,highContrast:f=x.highContrast.default,radius:c=x.radius.default,fallback:p,...v}=r,[m,b]=n.useState("idle");return n.createElement(g,{"data-accent-color":d,"data-radius":c,className:l()("rt-AvatarRoot",u,(0,E.g)(i,"rt-r-size"),`rt-variant-${s}`,{"rt-high-contrast":f},(0,_.we)(a)),style:o},"idle"===m||"loading"===m?n.createElement("span",{className:"rt-AvatarFallback"}):null,"error"===m?n.createElement(h,{className:l()("rt-AvatarFallback",{"rt-one-letter":"string"==typeof p&&1===p.length,"rt-two-letters":"string"==typeof p&&2===p.length}),delayMs:0},p):null,n.createElement(y,{ref:t,className:"rt-AvatarImage",...v,onLoadingStatusChange:e=>{var t;null===(t=v.onLoadingStatusChange)||void 0===t||t.call(v,e),b(e)}}))});S.displayName="Avatar"},3725:function(e,t,r){"use strict";r.d(t,{x:function(){return f}});var n=r(7294),a=r(3967),l=r.n(a),u=r(8426);let o={display:{type:"enum",values:["none","inline","inline-block","block"],default:void 0,responsive:!0}};var i=r(3843),s=r(134),d=r(6776);let f=n.forwardRef((e,t)=>{let{rest:r,...a}=(0,i.FY)(e),{rest:f,...c}=(0,s.F8)(r),{className:p,asChild:v,display:m=o.display.default,...g}=f,y=v?u.g7:"div";return n.createElement(y,{...g,ref:t,className:l()("rt-Box",p,(0,d.g)(m,"rt-r-display"),(0,s.yt)(c),(0,i.we)(a))})});f.displayName="Box"},4152:function(e,t,r){"use strict";r.d(t,{z:function(){return v}});var n=r(7294),a=r(3967),l=r.n(a),u=r(8426),o=r(8291),i=r(6679),s=r(8219);let d={size:{type:"enum",values:["1","2","3","4"],default:"2",responsive:!0},variant:{type:"enum",values:["classic","solid","soft","surface","outline","ghost"],default:"solid"},color:o.m,highContrast:i.B,radius:s.C};var f=r(3843),c=r(6776);let p=n.forwardRef((e,t)=>{let{rest:r,...a}=(0,f.FY)(e),{className:o,asChild:i=!1,size:s=d.size.default,variant:p=d.variant.default,color:v=d.color.default,highContrast:m=d.highContrast.default,radius:g=d.radius.default,...y}=r,h=i?u.g7:"button";return n.createElement(h,{"data-disabled":y.disabled||void 0,"data-accent-color":v,"data-radius":g,...y,ref:t,className:l()("rt-reset","rt-BaseButton",o,(0,c.g)(s,"rt-r-size"),`rt-variant-${p}`,{"rt-high-contrast":m},(0,f.we)(a))})});p.displayName="BaseButton";let v=n.forwardRef((e,t)=>n.createElement(p,{...e,ref:t,className:l()("rt-Button",e.className)}));v.displayName="Button"},5877:function(e,t,r){"use strict";r.d(t,{k:function(){return f}});var n=r(7294),a=r(3967),l=r.n(a),u=r(8426);let o={display:{type:"enum",values:["none","inline-flex","flex"],default:"flex",responsive:!0},direction:{type:"enum",values:["row","column","row-reverse","column-reverse"],default:void 0,responsive:!0},align:{type:"enum",values:["start","center","end","baseline","stretch"],default:void 0,responsive:!0},justify:{type:"enum",values:["start","center","end","between"],default:"start",responsive:!0},wrap:{type:"enum",values:["nowrap","wrap","wrap-reverse"],default:void 0,responsive:!0},gap:{type:"enum",values:["0","1","2","3","4","5","6","7","8","9"],default:void 0,responsive:!0}};var i=r(3843),s=r(134),d=r(6776);let f=n.forwardRef((e,t)=>{let{rest:r,...a}=(0,i.FY)(e),{rest:f,...c}=(0,s.F8)(r),{className:p,asChild:v,display:m=o.display.default,direction:g=o.direction.default,align:y=o.align.default,justify:h=o.justify.default,wrap:b=o.wrap.default,gap:w=o.gap.default,...C}=f,x=v?u.g7:"div";return n.createElement(x,{...C,ref:t,className:l()("rt-Flex",p,(0,d.g)(m,"rt-r-display"),(0,d.g)(g,"rt-r-fd"),(0,d.g)(y,"rt-r-ai"),(0,d.g)(h,"rt-r-jc",{between:"space-between"}),(0,d.g)(b,"rt-r-fw"),(0,d.g)(w,"rt-r-gap"),(0,s.yt)(c),(0,i.we)(a))})});f.displayName="Flex"},1042:function(e,t,r){"use strict";r.d(t,{X:function(){return m}});var n=r(7294),a=r(3967),l=r.n(a),u=r(8426),o=r(3416),i=r(617),s=r(7361),d=r(8291),f=r(6679);o.b.values;let c={size:{type:"enum",values:["1","2","3","4","5","6","7","8","9"],default:"6",responsive:!0},weight:{...o.b,default:"bold"},align:i.L,trim:s.a,color:d.m,highContrast:f.B};var p=r(3843),v=r(6776);let m=n.forwardRef((e,t)=>{let{rest:r,...a}=(0,p.FY)(e),{children:o,className:i,asChild:s=!1,as:d="h1",size:f=c.size.default,weight:m=c.weight.default,align:g=c.align.default,trim:y=c.trim.default,color:h=c.color.default,highContrast:b=c.highContrast.default,...w}=r;return n.createElement(u.g7,{"data-accent-color":h,...w,ref:t,className:l()("rt-Heading",i,(0,v.g)(f,"rt-r-size"),(0,v.g)(m,"rt-r-weight"),(0,v.g)(g,"rt-r-ta"),(0,v.g)(y,"rt-r-lt"),{"rt-high-contrast":b},(0,p.we)(a))},s?o:n.createElement(d,null,o))});m.displayName="Heading"},2627:function(e,t,r){"use strict";r.d(t,{r:function(){return s}});var n=r(7294),a=r(3967),l=r.n(a),u=r(6445),o=r(3356);let i={size:o.S.size,weight:o.S.weight,trim:o.S.trim,underline:{type:"enum",values:["auto","hover","always"],default:"auto"},color:o.S.color,highContrast:o.S.highContrast},s=n.forwardRef((e,t)=>{let{children:r,className:a,asChild:o=!1,underline:s=i.underline.default,...d}=e;return n.createElement(u.x,{...d,ref:t,asChild:!0,className:l()("rt-reset","rt-Link",a,`rt-underline-${s}`)},o?r:n.createElement("a",null,r))});s.displayName="Link"},6445:function(e,t,r){"use strict";r.d(t,{x:function(){return d}});var n=r(7294),a=r(3967),l=r.n(a),u=r(8426),o=r(3356),i=r(3843),s=r(6776);let d=n.forwardRef((e,t)=>{let{rest:r,...a}=(0,i.FY)(e),{children:d,className:f,asChild:c=!1,as:p="span",size:v=o.S.size.default,weight:m=o.S.weight.default,align:g=o.S.align.default,trim:y=o.S.trim.default,color:h=o.S.color.default,highContrast:b=o.S.highContrast.default,...w}=r;return n.createElement(u.g7,{"data-accent-color":h,...w,ref:t,className:l()("rt-Text",f,(0,s.g)(v,"rt-r-size"),(0,s.g)(m,"rt-r-weight"),(0,s.g)(g,"rt-r-ta"),(0,s.g)(y,"rt-r-lt"),{"rt-high-contrast":b},(0,i.we)(a))},c?d:n.createElement(p,null,d))});d.displayName="Text"},3356:function(e,t,r){"use strict";r.d(t,{S:function(){return i}});var n=r(3416),a=r(617),l=r(7361),u=r(8291),o=r(6679);let i={size:{type:"enum",values:["1","2","3","4","5","6","7","8","9"],default:void 0,responsive:!0},weight:n.b,align:a.L,trim:l.a,color:u.m,highContrast:o.B}},6776:function(e,t,r){"use strict";function withBreakpoints(e,t="",r){var n,a,l,u;let o=[];if("object"==typeof e){for(let l of Object.keys(e))if(l in e){let u=null===(n=e[l])||void 0===n?void 0:n.toString(),i=null==u?void 0:u.startsWith("-"),s=""===t?"":"-",d=i?`-${t}`:t,f=i?null==u?void 0:u.substring(1):u;if(void 0===f)continue;let c=null!==(a=null==r?void 0:r[f])&&void 0!==a?a:f,p="initial"===l?`${d}${s}${c}`:`${l}:${d}${s}${c}`;o.push(p)}}if("string"==typeof e){let n=e.startsWith("-"),a=""===t?"":"-",u=n?`-${t}`:t,i=n?e.substring(1):e,s=null!==(l=null==r?void 0:r[i])&&void 0!==l?l:i;o.push(`${u}${a}${s}`)}if("boolean"==typeof e){let n=""===t?"":"-",a=e.toString(),l=null!==(u=null==r?void 0:r[a])&&void 0!==u?u:a;o.push(`${t}${n}${l}`)}return o.join(" ")}r.d(t,{g:function(){return withBreakpoints}})},8291:function(e,t,r){"use strict";r.d(t,{m:function(){return a}});var n=r(269);let a={type:"enum",values:n.yT.accentColor.values,default:void 0}},6679:function(e,t,r){"use strict";r.d(t,{B:function(){return n}});let n={type:"boolean",default:void 0}},134:function(e,t,r){"use strict";r.d(t,{F8:function(){return extractLayoutProps},yt:function(){return withLayoutProps}});var n=r(6776);let a=["0","1","2","3","4","5","6","7","8","9"];function extractPaddingProps(e){let{p:t=o.p.default,px:r=o.px.default,py:n=o.py.default,pt:a=o.pt.default,pr:l=o.pr.default,pb:u=o.pb.default,pl:i=o.pl.default,...s}=e;return{p:t,px:r,py:n,pt:a,pr:l,pb:u,pl:i,rest:s}}function withPaddingProps(e){return[(0,n.g)(e.p,"rt-r-p"),(0,n.g)(e.px,"rt-r-px"),(0,n.g)(e.py,"rt-r-py"),(0,n.g)(e.pt,"rt-r-pt"),(0,n.g)(e.pr,"rt-r-pr"),(0,n.g)(e.pb,"rt-r-pb"),(0,n.g)(e.pl,"rt-r-pl")].filter(Boolean).join(" ")}let l=["auto","0","50%","100%"],u=["auto","min-content","max-content","100%","0","1","2","3","4","5","6","7","8","9"],o={p:{type:"enum",values:a,default:void 0,responsive:!0},px:{type:"enum",values:a,default:void 0,responsive:!0},py:{type:"enum",values:a,default:void 0,responsive:!0},pt:{type:"enum",values:a,default:void 0,responsive:!0},pr:{type:"enum",values:a,default:void 0,responsive:!0},pb:{type:"enum",values:a,default:void 0,responsive:!0},pl:{type:"enum",values:a,default:void 0,responsive:!0},position:{type:"enum",values:["static","relative","absolute","fixed","sticky"],default:void 0,responsive:!0},inset:{type:"enum",values:l,default:void 0,responsive:!0},top:{type:"enum",values:l,default:void 0,responsive:!0},right:{type:"enum",values:l,default:void 0,responsive:!0},bottom:{type:"enum",values:l,default:void 0,responsive:!0},left:{type:"enum",values:l,default:void 0,responsive:!0},width:{type:"enum",values:u,default:void 0,responsive:!0},height:{type:"enum",values:u,default:void 0,responsive:!0},shrink:{type:"enum",values:["0","1"],default:void 0,responsive:!0},grow:{type:"enum",values:["0","1"],default:void 0,responsive:!0}};function extractLayoutProps(e){let{rest:t,...r}=extractPaddingProps(e),{position:n=o.position.default,width:a=o.width.default,height:l=o.height.default,inset:u=o.inset.default,top:i=o.top.default,bottom:s=o.bottom.default,left:d=o.left.default,right:f=o.right.default,shrink:c=o.shrink.default,grow:p=o.grow.default,...v}=t;return{...r,position:n,width:a,height:l,inset:u,top:i,bottom:s,left:d,right:f,shrink:c,grow:p,rest:v}}function withLayoutProps(e){return[withPaddingProps(e),(0,n.g)(e.position,"rt-r-position"),(0,n.g)(e.shrink,"rt-r-fs"),(0,n.g)(e.grow,"rt-r-fg"),(0,n.g)(e.width,"rt-r-w"),(0,n.g)(e.height,"rt-r-h"),(0,n.g)(e.inset,"rt-r-inset"),(0,n.g)(e.top,"rt-r-top"),(0,n.g)(e.bottom,"rt-r-bottom"),(0,n.g)(e.left,"rt-r-left"),(0,n.g)(e.right,"rt-r-right")].filter(Boolean).join(" ")}},7361:function(e,t,r){"use strict";r.d(t,{a:function(){return n}});let n={type:"enum",values:["normal","start","end","both"],default:void 0,responsive:!0}},3843:function(e,t,r){"use strict";r.d(t,{FY:function(){return extractMarginProps},we:function(){return withMarginProps}});var n=r(6776);let a=["auto","0","1","2","3","4","5","6","7","8","9","-1","-2","-3","-4","-5","-6","-7","-8","-9"],l={m:{type:"enum",values:a,default:void 0,responsive:!0},mx:{type:"enum",values:a,default:void 0,responsive:!0},my:{type:"enum",values:a,default:void 0,responsive:!0},mt:{type:"enum",values:a,default:void 0,responsive:!0},mr:{type:"enum",values:a,default:void 0,responsive:!0},mb:{type:"enum",values:a,default:void 0,responsive:!0},ml:{type:"enum",values:a,default:void 0,responsive:!0}};function extractMarginProps(e){let{m:t=l.m.default,mx:r=l.mx.default,my:n=l.my.default,mt:a=l.mt.default,mr:u=l.mr.default,mb:o=l.mb.default,ml:i=l.ml.default,...s}=e;return{m:t,mx:r,my:n,mt:a,mr:u,mb:o,ml:i,rest:s}}function withMarginProps(e){return[(0,n.g)(e.m,"rt-r-m"),(0,n.g)(e.mx,"rt-r-mx"),(0,n.g)(e.my,"rt-r-my"),(0,n.g)(e.mt,"rt-r-mt"),(0,n.g)(e.mr,"rt-r-mr"),(0,n.g)(e.mb,"rt-r-mb"),(0,n.g)(e.ml,"rt-r-ml")].filter(Boolean).join(" ")}},8219:function(e,t,r){"use strict";r.d(t,{C:function(){return a}});var n=r(269);let a={type:"enum",values:n.yT.radius.values,default:void 0}},617:function(e,t,r){"use strict";r.d(t,{L:function(){return n}});let n={type:"enum",values:["left","center","right"],default:void 0,responsive:!0}},3416:function(e,t,r){"use strict";r.d(t,{b:function(){return n}});let n={type:"enum",values:["light","regular","medium","bold"],default:void 0,responsive:!0}},7498:function(e,t){"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return a},ACTION_NAVIGATE:function(){return l},ACTION_RESTORE:function(){return u},ACTION_SERVER_PATCH:function(){return o},ACTION_PREFETCH:function(){return i},ACTION_FAST_REFRESH:function(){return s},ACTION_SERVER_ACTION:function(){return d}});let a="refresh",l="navigate",u="restore",o="server-patch",i="prefetch",s="fast-refresh",d="server-action";(n=r||(r={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},30:function(e,t,r){"use strict";function getDomainLocale(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return getDomainLocale}}),r(2866),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5170:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return h}});let n=r(8754),a=n._(r(7294)),l=r(4450),u=r(2227),o=r(4364),i=r(109),s=r(3607),d=r(1823),f=r(9031),c=r(920),p=r(30),v=r(7192),m=r(7498),g=new Set;function prefetch(e,t,r,n,a,l){if(!l&&!(0,u.isLocalURL)(t))return;if(!n.bypassPrefetchedCheck){let a=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,l=t+"%"+r+"%"+a;if(g.has(l))return;g.add(l)}let o=l?e.prefetch(t,a):e.prefetch(t,r,n);Promise.resolve(o).catch(e=>{})}function isModifiedEvent(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}function linkClicked(e,t,r,n,l,o,i,s,d,f){let{nodeName:c}=e.currentTarget,p="A"===c.toUpperCase();if(p&&(isModifiedEvent(e)||!d&&!(0,u.isLocalURL)(r)))return;e.preventDefault();let navigate=()=>{let e=null==i||i;"beforePopState"in t?t[l?"replace":"push"](r,n,{shallow:o,locale:s,scroll:e}):t[l?"replace":"push"](n||r,{forceOptimisticNavigation:!f,scroll:e})};d?a.default.startTransition(navigate):navigate()}function formatStringOrUrl(e){return"string"==typeof e?e:(0,o.formatUrl)(e)}let y=a.default.forwardRef(function(e,t){let r,n;let{href:u,as:o,children:g,prefetch:y=null,passHref:h,replace:b,shallow:w,scroll:C,locale:x,onClick:_,onMouseEnter:E,onTouchStart:S,legacyBehavior:P=!1,...R}=e;r=g,P&&("string"==typeof r||"number"==typeof r)&&(r=a.default.createElement("a",null,r));let k=a.default.useContext(d.RouterContext),O=a.default.useContext(f.AppRouterContext),N=null!=k?k:O,T=!k,j=!1!==y,A=null===y?m.PrefetchKind.AUTO:m.PrefetchKind.FULL,{href:L,as:M}=a.default.useMemo(()=>{if(!k){let e=formatStringOrUrl(u);return{href:e,as:o?formatStringOrUrl(o):e}}let[e,t]=(0,l.resolveHref)(k,u,!0);return{href:e,as:o?(0,l.resolveHref)(k,o):t||e}},[k,u,o]),$=a.default.useRef(L),I=a.default.useRef(M);P&&(n=a.default.Children.only(r));let F=P?n&&"object"==typeof n&&n.ref:t,[B,z,U]=(0,c.useIntersection)({rootMargin:"200px"}),G=a.default.useCallback(e=>{(I.current!==M||$.current!==L)&&(U(),I.current=M,$.current=L),B(e),F&&("function"==typeof F?F(e):"object"==typeof F&&(F.current=e))},[M,F,L,U,B]);a.default.useEffect(()=>{N&&z&&j&&prefetch(N,L,M,{locale:x},{kind:A},T)},[M,L,z,x,j,null==k?void 0:k.locale,N,T,A]);let H={ref:G,onClick(e){P||"function"!=typeof _||_(e),P&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),N&&!e.defaultPrevented&&linkClicked(e,N,L,M,b,w,C,x,T,j)},onMouseEnter(e){P||"function"!=typeof E||E(e),P&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),N&&(j||!T)&&prefetch(N,L,M,{locale:x,priority:!0,bypassPrefetchedCheck:!0},{kind:A},T)},onTouchStart(e){P||"function"!=typeof S||S(e),P&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),N&&(j||!T)&&prefetch(N,L,M,{locale:x,priority:!0,bypassPrefetchedCheck:!0},{kind:A},T)}};if((0,i.isAbsoluteUrl)(M))H.href=M;else if(!P||h||"a"===n.type&&!("href"in n.props)){let e=void 0!==x?x:null==k?void 0:k.locale,t=(null==k?void 0:k.isLocaleDomain)&&(0,p.getDomainLocale)(M,e,null==k?void 0:k.locales,null==k?void 0:k.domainLocales);H.href=t||(0,v.addBasePath)((0,s.addLocale)(M,e,null==k?void 0:k.defaultLocale))}return P?a.default.cloneElement(n,H):a.default.createElement("a",{...R,...H},r)}),h=y;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},920:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return useIntersection}});let n=r(7294),a=r(3436),l="function"==typeof IntersectionObserver,u=new Map,o=[];function createObserver(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=o.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=u.get(n)))return t;let a=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=a.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:l,elements:a},o.push(r),u.set(r,t),t}function observe(e,t,r){let{id:n,observer:a,elements:l}=createObserver(r);return l.set(e,t),a.observe(e),function(){if(l.delete(e),a.unobserve(e),0===l.size){a.disconnect(),u.delete(n);let e=o.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&o.splice(e,1)}}}function useIntersection(e){let{rootRef:t,rootMargin:r,disabled:u}=e,o=u||!l,[i,s]=(0,n.useState)(!1),d=(0,n.useRef)(null),f=(0,n.useCallback)(e=>{d.current=e},[]);(0,n.useEffect)(()=>{if(l){if(o||i)return;let e=d.current;if(e&&e.tagName){let n=observe(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!i){let e=(0,a.requestIdleCallback)(()=>s(!0));return()=>(0,a.cancelIdleCallback)(e)}},[o,r,t,i,d.current]);let c=(0,n.useCallback)(()=>{s(!1)},[]);return[f,i,c]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9008:function(e,t,r){e.exports=r(9201)},1664:function(e,t,r){e.exports=r(5170)},9564:function(e,t,r){"use strict";r.d(t,{x:function(){return s}});var n=r(5059),a=r(1639),l=r(3179),u=r(296),o=r(5432);function compact(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}var i=r(5893),s=(0,n.G)(function(e,t){let r=(0,a.mq)("Text",e),{className:n,align:s,decoration:d,casing:f,...c}=(0,l.Lr)(e),p=compact({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,i.jsx)(u.m.p,{ref:t,className:(0,o.cx)("chakra-text",e.className),...p,...c,__css:r})});s.displayName="Text"},3916:function(e,t,r){"use strict";r.d(t,{M:function(){return d}});var n=r(5059),a=r(296),l=r(5893),u=(0,n.G)(function(e,t){let{templateAreas:r,gap:n,rowGap:u,columnGap:o,column:i,row:s,autoFlow:d,autoRows:f,templateRows:c,autoColumns:p,templateColumns:v,...m}=e;return(0,l.jsx)(a.m.div,{ref:t,__css:{display:"grid",gridTemplateAreas:r,gridGap:n,gridRowGap:u,gridColumnGap:o,gridAutoColumns:p,gridColumn:i,gridRow:s,gridAutoFlow:d,gridAutoRows:f,gridTemplateRows:c,gridTemplateColumns:v},...m})});u.displayName="Grid";var o=r(7323),i=r(4629),s=r(5432);function mapResponsive(e,t){return Array.isArray(e)?e.map(e=>null===e?null:t(e)):(0,s.Kn)(e)?Object.keys(e).reduce((r,n)=>(r[n]=t(e[n]),r),{}):null!=e?t(e):null}Object.freeze(["base","sm","md","lg","xl","2xl"]);var d=(0,n.G)(function(e,t){let{columns:r,spacingX:n,spacingY:a,spacing:i,minChildWidth:s,...d}=e,f=(0,o.F)(),c=s?widthToColumns(s,f):countToColumns(r);return(0,l.jsx)(u,{ref:t,gap:i,columnGap:n,rowGap:a,templateColumns:c,...d})});function toPx(e){return"number"==typeof e?`${e}px`:e}function widthToColumns(e,t){return mapResponsive(e,e=>{let r=(0,i.LP)("sizes",e,toPx(e))(t);return null===e?null:`repeat(auto-fit, minmax(${r}, 1fr))`})}function countToColumns(e){return mapResponsive(e,e=>null===e?null:`repeat(${e}, minmax(0, 1fr))`)}d.displayName="SimpleGrid"}}]);