(this.webpackJsonpyalantis=this.webpackJsonpyalantis||[]).push([[0],{23:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),a=n(17),i=n.n(a),s=(n(23),n(3)),j=n(5),b=n(18),l=n.n(b),u=n(6),o=n(0);var d=function(e){var t=Object(c.useState)(!1),n=Object(j.a)(t,2),r=n[0],a=n[1],i=e.firstName,s=e.lastName,b=(e.dob,e.id),l=e.cb,u=function(e){a(!r),l(b)};return Object(o.jsxs)("div",{children:[Object(o.jsxs)("h3",{className:r?"colored":null,children:[s," ",i]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("input",{name:b,type:"radio",checked:!1===r,onChange:u}),Object(o.jsx)("span",{children:"Not active"})]}),Object(o.jsx)("br",{}),Object(o.jsxs)("label",{children:[Object(o.jsx)("input",{name:b,type:"radio",onChange:u,checked:!0===r}),Object(o.jsx)("span",{children:"Active"})]})]})};var O=function(e){var t=e.letter,n=e.employees,c=e.cb;return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:t}),Object(o.jsx)("div",{children:n[0]?n.map((function(e){return Object(o.jsx)(d,Object(u.a)(Object(u.a)({},e),{},{cb:c}),e.id)})):Object(o.jsx)("span",{children:"-----"})})]})};var h=function(e){var t=e.firstName,n=e.lastName,c=e.dob,r=(e.id,["January","February","March","April","May","June","July","August","September","October","November","December"]),a=(new Date).getMonth(),i=([].concat(Object(s.a)(r.slice(a)),Object(s.a)(r.slice(0,a))),new Date(c));return Object(o.jsxs)("li",{children:[t," ",n," - ",i.getDate()," ",r[i.getMonth()]," ",i.getFullYear()," year"]})};var p=function(e){var t=e.employees,n=e.listt,c=["January","February","March","April","May","June","July","August","September","October","November","December"],r=(new Date).getMonth(),a=[].concat(Object(s.a)(c.slice(r)),Object(s.a)(c.slice(0,r))),i=n.map((function(e){return t.find((function(t){return t.id===e}))})),j=i.map((function(e){var t=new Date(e.dob).getMonth();return c[t]}));return Object(o.jsx)("div",{className:"b-list",children:n[0]?Object(o.jsx)("div",{children:a.map((function(e,t){return j.includes(e)?Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:e}),i.map((function(t,n){return new Date(t.dob).getMonth()===c.indexOf(e)?Object(o.jsx)(h,Object(u.a)({},t),t.id):null}))]},e):null}))}):Object(o.jsx)("h3",{children:" Employees List is empty"})})};var m=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),i=Object(j.a)(a,2),b=i[0],u=i[1];function d(e){-1!==b.indexOf(e)?u((function(t){return t.filter((function(t){return t!==e}))})):u((function(t){return[].concat(Object(s.a)(t),[e])}))}return Object(c.useEffect)((function(){l.a.get("https://yalantis-react-school-api.yalantis.com/api/task0/users").then((function(e){return r(e.data)}))}),[]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("div",{className:"abc",children:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"].map((function(e){var t=n.filter((function(t){return t.lastName[0]===e}));return Object(o.jsx)(O,{letter:e,employees:t,cb:d},e)}))}),Object(o.jsx)(p,{employees:n,listt:b})]})};i.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.01aaa008.chunk.js.map