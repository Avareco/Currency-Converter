(this.webpackJsonpreact_redux=this.webpackJsonpreact_redux||[]).push([[0],{46:function(e,c,t){},47:function(e,c,t){"use strict";t.r(c);var n=t(2),r=t.n(n),a=t(17),s=t.n(a),u=t(3),i=t(0),o=function(e){var c,t,n,r,a=e.\u0435xchangeRates,s=function(e){return a.find((function(c){return c.cc===e}))};return Object(i.jsxs)("header",{className:"header",children:[Object(i.jsxs)("div",{className:"header-currency",children:[Object(i.jsxs)("div",{className:"header-currency__name",children:[null===(c=s("EUR"))||void 0===c?void 0:c.cc,":"]}),Object(i.jsx)("div",{children:null===(t=s("EUR"))||void 0===t?void 0:t.rate})]}),Object(i.jsxs)("div",{className:"header-currency",children:[Object(i.jsxs)("div",{className:"header-currency__name",children:[null===(n=s("USD"))||void 0===n?void 0:n.cc,":"]}),Object(i.jsx)("div",{children:null===(r=s("USD"))||void 0===r?void 0:r.rate})]})]})},j=function(e){var c=e.\u0435xchangeRates,t=Object(n.useState)(0),r=Object(u.a)(t,2),a=r[0],s=r[1],o=Object(n.useState)(0),j=Object(u.a)(o,2),l=j[0],d=j[1],v=Object(n.useState)("UAH"),b=Object(u.a)(v,2),h=b[0],x=b[1],O=Object(n.useState)("USD"),m=Object(u.a)(O,2),f=m[0],p=m[1];function N(e){return Number(e.toFixed(4))}var g=function(e){var t;return Number(null===(t=c.find((function(c){return e===c.cc})))||void 0===t?void 0:t.rate)};return Object(i.jsx)("main",{className:"main",children:Object(i.jsxs)("div",{className:"converter",children:[Object(i.jsxs)("div",{className:"converter__currency",children:[Object(i.jsx)("input",{className:"converter__input",onChange:function(e){return function(e){d(N(e*g(h)/g(f))),s(e)}(Number(e.target.value))},type:"number",name:"amount1",value:0===a?"":a}),Object(i.jsx)("select",{onChange:function(e){return function(e){d(N(a*g(e)/g(f))),x(e)}(e.target.value)},name:"currency1",children:c.map((function(e){return"UAH"===e.cc?Object(i.jsx)("option",{selected:!0,value:e.cc,children:e.cc},e.cc):Object(i.jsx)("option",{value:e.cc,children:e.cc},e.cc)}))})]}),Object(i.jsxs)("div",{className:"converter__currency",children:[Object(i.jsx)("input",{className:"converter__input",type:"number",onChange:function(e){return function(e){s(N(e*g(f)/g(h))),d(e)}(Number(e.target.value))},value:0===l?"":l,name:"amount1"}),Object(i.jsx)("select",{onChange:function(e){return function(e){s(N(l*g(e)/g(h))),p(e)}(e.target.value)},name:"currency2",children:c.map((function(e){return Object(i.jsx)("option",{value:e.cc,children:e.cc},e.cc)}))})]})]})})},l=t(20),d=t(18),v=t(8),b=t.n(v),h=t(19),x=t.n(h),O={rs030:1,txt:"\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430 \u0433\u0440\u0438\u0432\u043d\u044f",rate:1,cc:"UAH",exchangedate:"0"};function m(){return(m=Object(d.a)(b.a.mark((function e(c){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json");case 3:t=e.sent,c([].concat(Object(l.a)(t.data.filter((function(e){return"USD"===e.cc||"EUR"===e.cc}))),[O])),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}t(46);var f=function(){var e=Object(n.useState)([]),c=Object(u.a)(e,2),t=c[0],r=c[1];return Object(n.useEffect)((function(){!function(e){m.apply(this,arguments)}(r)}),[]),Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)("div",{className:"wrapper",children:[Object(i.jsx)(o,{"\u0435xchangeRates":t}),Object(i.jsx)(j,{"\u0435xchangeRates":t})]})})};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.f5c9c122.chunk.js.map