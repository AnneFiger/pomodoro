(this.webpackJsonppomodoro=this.webpackJsonppomodoro||[]).push([[0],{11:function(e,n,t){},13:function(e,n,t){"use strict";t.r(n);var c=t(1),i=t.n(c),s=t(4),r=t.n(s),a=(t(9),t(2)),o=t(0);var u=function(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h4",{id:"session-label",children:"Session Length"}),Object(o.jsxs)("div",{className:"Session",children:[Object(o.jsx)("button",{className:"rounded",onClick:function(){return e.setSession("increment")},id:"session-increment",children:Object(o.jsx)("span",{className:"iconify","data-icon":"akar-icons:arrow-up-thick"})}),Object(o.jsx)("h5",{id:"session-length",children:e.session}),Object(o.jsx)("button",{className:"rounded",onClick:function(){return e.setSession("decrement")},id:"session-decrement",children:Object(o.jsx)("span",{className:"iconify","data-icon":"akar-icons:arrow-down-thick"})})]})]})};var d=function(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h4",{id:"break-label",children:"Break Length"}),Object(o.jsxs)("div",{className:"Break",children:[Object(o.jsx)("button",{className:"rounded",onClick:function(){return e.setBreak("increment")},id:"break-increment",children:Object(o.jsx)("span",{className:"iconify","data-icon":"akar-icons:arrow-up-thick"})}),Object(o.jsx)("h5",{id:"break-length",children:e.break}),Object(o.jsx)("button",{className:"rounded",onClick:function(){return e.setBreak("decrement")},id:"break-decrement",children:Object(o.jsx)("span",{className:"iconify","data-icon":"akar-icons:arrow-down-thick"})})]})]})},l=t.p+"static/media/Alarm.e0ecc01a.wav";t(11);var j=function(e){var n=i.a.useState(5),t=Object(a.a)(n,2),s=t[0],r=t[1],j=i.a.useState(25),b=Object(a.a)(j,2),f=b[0],m=b[1],h=i.a.useState(!0),O=Object(a.a)(h,2),x=O[0],k=O[1],p=i.a.useState(!1),v=Object(a.a)(p,2),N=v[0],S=v[1],y=i.a.useState(f),g=Object(a.a)(y,2),C=g[0],T=g[1],w=M(C),B=i.a.useState(s),E=Object(a.a)(B,2),F=E[0],L=E[1],P=M(F),I=document.getElementById("beep");function M(e){var n=Math.floor(e/60),t=Math.ceil(e%60);return[n<10?"0"+n:n,t<10?"0"+t:t]}return Object(c.useEffect)((function(){T(60*f)}),[f]),Object(c.useEffect)((function(){if(N&&x){if(0!==C){var e=setTimeout((function(){T((function(e){return e-1}))}),1e3);return function(){return clearTimeout(e)}}I.currentTime=0,I.play(),k(!1),setTimeout((function(){T(60*f)}),1e3)}}),[C,N,x,f,I]),Object(c.useEffect)((function(){L(60*s)}),[s]),Object(c.useEffect)((function(){if(N&&!x){if(0!==F){var e=setTimeout((function(){L((function(e){return e-1}))}),1e3);return function(){return clearTimeout(e)}}I.currentTime=0,I.play(),k(!0)}}),[F,N,x,I]),Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("div",{className:"Pomodoro",children:[Object(o.jsx)("h2",{children:"Pomodoro Clock"}),Object(o.jsxs)("div",{className:"my-container",children:[Object(o.jsx)(d,{setBreak:function(e){if(!N)if("decrement"===e){if(1===s)return;r((function(e){return e-1}))}else{if(60===s)return;r((function(e){return e+1}))}},break:s}),Object(o.jsx)(u,{setSession:function(e){if(!N)if("decrement"===e){if(1===f)return;m((function(e){return e-1}))}else{if(60===f)return;m((function(e){return e+1}))}},session:f})]}),Object(o.jsxs)("div",{className:"Clock",children:[Object(o.jsx)("h3",{id:"timer-label",children:x?"Session":"Break"}),Object(o.jsx)("h1",{id:"time-left",children:x?"".concat(w[0],":").concat(w[1]):"".concat(P[0],":").concat(P[1])}),Object(o.jsx)("button",{id:"start_stop",onClick:function(){S((function(e){return!e}))},className:"rounded-pill",children:Object(o.jsx)("span",{className:"iconify","data-icon":"emojione-monotone:play-or-pause-button"})}),Object(o.jsx)("button",{id:"reset",onClick:function(){S(!1),I.pause(),I.currentTime=0,m(25),r(5),k(!0)},className:"rounded-pill",children:Object(o.jsx)("span",{className:"iconify","data-icon":"ri:restart-fill"})}),Object(o.jsx)("audio",{id:"beep",src:l})]})]})})})},b=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,14)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,s=n.getLCP,r=n.getTTFB;t(e),c(e),i(e),s(e),r(e)}))};t(12);r.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root")),b()},9:function(e,n,t){}},[[13,1,2]]]);
//# sourceMappingURL=main.fc47e53c.chunk.js.map