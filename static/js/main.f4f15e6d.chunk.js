(this["webpackJsonpsmall-shopping-cart"]=this["webpackJsonpsmall-shopping-cart"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),r=c(6),s=c.n(r),d=(c(13),c(7)),a=c(2),o=c(8),j=c(0);function l(e){return Object(j.jsxs)("header",{className:"row block center",children:[Object(j.jsx)("div",{children:Object(j.jsx)("a",{href:"#/",children:Object(j.jsx)("h1",{children:"US Military Budget"})})}),Object(j.jsxs)("div",{children:[Object(j.jsx)("a",{href:"#/cart",children:"Cart"})," ",Object(j.jsx)("a",{href:"#/signin",children:"Sign In"})]})]})}function u(e){var t=e.product,c=e.onAdd;return Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{className:"small",src:t.image,alt:t.name}),Object(j.jsx)("h3",{children:t.name}),Object(j.jsxs)("div",{children:["$",t.price]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{onClick:function(){return c(t)},children:"Add To Cart"})})]})}function b(e){var t=e.products,c=e.onAdd;return Object(j.jsxs)("main",{className:"block col-2",children:[Object(j.jsx)("h2",{children:"Military Products"}),Object(j.jsx)("div",{className:"row",children:t.map((function(e){return Object(j.jsx)(u,{product:e,onAdd:c},e.id)}))})]})}function h(e){var t=e.cartItems,c=e.onAdd,n=e.onRemove;return Object(j.jsxs)("aside",{className:"block col-1",children:[Object(j.jsx)("h2",{children:"Cart Item"}),Object(j.jsx)("div",{children:0===t.length&&Object(j.jsx)("div",{children:"Cart Is Empty"})}),t.map((function(e){return Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-2",children:e.name}),Object(j.jsxs)("div",{className:"col-2",children:[Object(j.jsx)("button",{onClick:function(){return c(e)},className:"add",children:"+"}),Object(j.jsx)("button",{onClick:function(){return n(e)},className:"remove",children:"-"})]}),Object(j.jsxs)("div",{className:"col-2 text-right",children:[e.qty," x $",e.price.toFixed(2)]})]},e.id)}))]})}var m={products:[{id:"1",name:"Macbook",price:1400,image:"https://picsum.photos/id/180/2400/1600"},{id:"2",name:"Old Car",price:14e3,image:"https://picsum.photos/id/111/4400/2656"},{id:"3",name:"W Shoes",price:14e4,image:"https://picsum.photos/id/21/3008/2008"}]};var O=function(){var e=m.products,t=Object(n.useState)([]),c=Object(o.a)(t,2),i=c[0],r=c[1],s=function(e){var t=i.find((function(t){return t.id===e.id}));r(t?i.map((function(c){return c.id===e.id?Object(a.a)(Object(a.a)({},t),{},{qty:t.qty+1}):c})):[].concat(Object(d.a)(i),[Object(a.a)(Object(a.a)({},e),{},{qty:1})]))};return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(l,{}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)(b,{onAdd:s,products:e}),Object(j.jsx)(h,{onAdd:s,onRemove:function(e){var t=i.find((function(t){return t.id===e.id}));1===t.qty?r(i.filter((function(t){return t.id!==e.id}))):r(i.map((function(c){return c.id===e.id?Object(a.a)(Object(a.a)({},t),{},{qty:t.qty-1}):c})))},cartItems:i})]})]})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),r(e),s(e)}))};s.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root")),x()}},[[15,1,2]]]);
//# sourceMappingURL=main.f4f15e6d.chunk.js.map