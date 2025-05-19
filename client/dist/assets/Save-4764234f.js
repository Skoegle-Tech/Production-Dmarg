import{i as S,k as R,ak as b,s as _,_ as i,al as m,r as M,n as V,o as $,j as l,p as j,q as z,c as h}from"./index-7eb3e469.js";import{a as U}from"./colorManipulator-fa7bdb26.js";function B(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function A(t){return parseFloat(t)}function H(t){return S("MuiSkeleton",t)}R("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const I=["animation","className","component","height","style","variant","width"];let r=t=>t,g,f,v,C;const X=t=>{const{classes:a,variant:e,animation:n,hasChildren:s,width:c,height:o}=t;return z({root:["root",e,n,s&&"withChildren",s&&!c&&"fitContent",s&&!o&&"heightAuto"]},H,a)},N=b(g||(g=r`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),E=b(f||(f=r`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),F=_("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:e}=t;return[a.root,a[e.variant],e.animation!==!1&&a[e.animation],e.hasChildren&&a.withChildren,e.hasChildren&&!e.width&&a.fitContent,e.hasChildren&&!e.height&&a.heightAuto]}})(({theme:t,ownerState:a})=>{const e=B(t.shape.borderRadius)||"px",n=A(t.shape.borderRadius);return i({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:U(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},a.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${n}${e}/${Math.round(n/.6*10)/10}${e}`,"&:empty:before":{content:'"\\00a0"'}},a.variant==="circular"&&{borderRadius:"50%"},a.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},a.hasChildren&&{"& > *":{visibility:"hidden"}},a.hasChildren&&!a.width&&{maxWidth:"fit-content"},a.hasChildren&&!a.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&m(v||(v=r`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),N),({ownerState:t,theme:a})=>t.animation==="wave"&&m(C||(C=r`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),E,(a.vars||a).palette.action.hover)),K=M.forwardRef(function(a,e){const n=V({props:a,name:"MuiSkeleton"}),{animation:s="pulse",className:c,component:o="span",height:d,style:k,variant:x="text",width:w}=n,u=$(n,I),p=i({},n,{animation:s,component:o,variant:x,hasChildren:!!u.children}),y=X(p);return l.jsx(F,i({as:o,ref:e,className:j(y.root,c),ownerState:p},u,{style:i({width:w,height:d},k)}))}),W=K,q=h(l.jsx("path",{d:"M20 7h-5V4c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2M9 12c.83 0 1.5.67 1.5 1.5S9.83 15 9 15s-1.5-.67-1.5-1.5S8.17 12 9 12m3 6H6v-.75c0-1 2-1.5 3-1.5s3 .5 3 1.5zm1-9h-2V4h2zm5 7.5h-4V15h4zm0-3h-4V12h4z"}),"Badge"),D=h(l.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12z"}),"Cancel"),O=h(l.jsx("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3m3-10H5V5h10z"}),"Save");export{q as B,D as C,O as S,W as a};
