(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{13:function(e,r,t){},15:function(e,r,t){"use strict";t.r(r);var n=t(3),a=t.n(n),l=(t(13),t(4)),o=t(1),i={value:"",isTouched:!1},c=function e(r,t){return"INPUT"===t.type?{value:t.value,isTouched:r.isTouched}:"BLUR"===t.type?{isTouched:!0,value:r.value}:"RESET"===t.type?{isTouched:!1,value:""}:e},s=function(e){var r=Object(o.useReducer)(c,i),t=Object(l.a)(r,2),n=t[0],a=t[1],s=e(n.value),u=!s&&n.isTouched;return{value:n.value,isValid:s,hasError:u,valueChangeHandler:function(e){a({type:"INPUT",value:e.target.value})},inputBlurHandler:function(e){a({type:"BLUR"})},reset:function(){a({type:"RESET"})}}},u=t(0),d=function(e){return""!==e.trim()},j=function(e){return e.includes("@")},h=function(e){var r=s(d),t=r.value,n=r.isValid,a=r.hasError,l=r.valueChangeHandler,o=r.inputBlurHandler,i=r.reset,c=s(d),h=c.value,m=c.isValid,v=c.hasError,p=c.valueChangeHandler,b=c.inputBlurHandler,x=c.reset,f=s(j),O=f.value,g=f.isValid,w=f.hasError,y=f.valueChangeHandler,N=f.inputBlurHandler,B=f.reset,T=!1;n&&m&&g&&(T=!0);var z=a?"form-control invalid":"form-control",E=v?"form-control invalid":"form-control",H=w?"form-control invalid":"form-control";return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),T&&(console.log("Przes\u0142ano!"),console.log(t,h,O),i(),x(),B())},children:[Object(u.jsxs)("div",{className:"control-group",children:[Object(u.jsxs)("div",{className:z,children:[Object(u.jsx)("label",{htmlFor:"name",children:"Imi\u0119"}),Object(u.jsx)("input",{type:"text",id:"name",value:t,onChange:l,onBlur:o}),a&&Object(u.jsx)("p",{className:"error-text",children:"Prosz\u0119 wprowadzi\u0107 imi\u0119."})]}),Object(u.jsxs)("div",{className:E,children:[Object(u.jsx)("label",{htmlFor:"name",children:"Nazwisko"}),Object(u.jsx)("input",{type:"text",id:"name",value:h,onChange:p,onBlur:b}),v&&Object(u.jsx)("p",{className:"error-text",children:"Prosz\u0119 wprowadzi\u0107 nazwisko."})]})]}),Object(u.jsxs)("div",{className:H,children:[Object(u.jsx)("label",{htmlFor:"name",children:"Adres e-mail"}),Object(u.jsx)("input",{type:"text",id:"name",value:O,onChange:y,onBlur:N}),w&&Object(u.jsx)("p",{className:"error-text",children:"Prosz\u0119 wprowadzi\u0107 prawid\u0142owy adres e-mail."})]}),Object(u.jsx)("div",{className:"form-actions",children:Object(u.jsx)("button",{disabled:!T,children:"Wy\u015blij"})})]})};var m=function(){return Object(u.jsx)("div",{className:"app",children:Object(u.jsx)(h,{})})};a.a.createRoot(document.getElementById("root")).render(Object(u.jsx)(m,{}))}},[[15,1,2]]]);
//# sourceMappingURL=main.3f62ff92.chunk.js.map