"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[106],{6548:function(e,t,n){n.d(t,{Jh:function(){return u},_r:function(){return l},fh:function(){return i},gH:function(){return f},wr:function(){return o}});var r=n(4165),a=n(5861),c=n(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="02b3fc4c867c86b8e0657790f32792c0",o=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/trending/all/day?api_key=".concat(s),{signal:t.signal});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"?api_key=").concat(s),{signal:n.signal});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"/credits?api_key=").concat(s),{signal:n.signal});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(s),{signal:n.signal});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?query=".concat(t,"&api_key=").concat(s),{signal:n.signal});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},4106:function(e,t,n){n.r(t);var r=n(4165),a=n(1413),c=n(5861),s=n(9439),o=n(6548),i=n(2791),u=n(7689),l=n(1087),f=n(184);t.default=function(){var e=(0,i.useState)({}),t=(0,s.Z)(e,2),n=t[0],p=t[1],d=(0,i.useState)([]),h=(0,s.Z)(d,2),v=h[0],m=h[1],b=(0,u.UO)().movieId,x=(0,i.useState)(!0),j=(0,s.Z)(x,2),g=j[0],w=j[1];return(0,i.useEffect)((function(){var e=new AbortController,t=function(){var t=(0,c.Z)((0,r.Z)().mark((function t(){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.fh)(b,e);case 3:n=t.sent,p((0,a.Z)({},n)),m(n.genres),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("error",t.t0),"ERR_BAD_REQUEST"===t.t0.code&&w(!1);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();return t(),function(){e.abort()}}),[b]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("button",{className:"mb-5 font-normal font-sans ",children:(0,f.jsx)(l.rU,{to:"/",children:" \u2190 Go back"})}),g?(0,f.jsxs)("div",{className:"flex mb-3",children:[n.poster_path?(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(n.poster_path),alt:"poster ".concat(n.title),width:250}):(0,f.jsx)("img",{src:"https://via.placeholder.com/200x200.png?text=NO+PHOTO",alt:"no_photo",width:250}),(0,f.jsxs)("div",{className:"ml-5",children:[(0,f.jsx)("h1",{className:"font-sans text-3xl mb-5 font-bold",children:"".concat(n.title," (").concat(n.release_date?n.release_date.split("-")[0]:"unknown",") ")}),(0,f.jsx)("p",{className:"font-sans mb-5 ",children:"User Score: ".concat(n.vote_average?0^n.vote_average:"unknown","%")}),(0,f.jsx)("h2",{className:"font-sans text-2xl mb-5 font-bold",children:"Overview"}),(0,f.jsx)("p",{className:"font-sans mb-5",children:"".concat(n.overview?n.overview:"unknow")}),(0,f.jsx)("h2",{className:"font-sans text-2xl mb-5 font-bold",children:"Genres:"}),(0,f.jsx)("p",{className:"font-sans ",children:"".concat(v.map((function(e){return e.name})).join(", "))})]})]}):(0,f.jsx)("p",{children:"Sorry, there is no information for this movie"})]}),n.title&&(0,f.jsxs)("div",{className:"border-y-4 ",children:[(0,f.jsx)("p",{children:"Additional information"}),(0,f.jsxs)("ul",{className:"ml-3 ",children:[(0,f.jsx)("li",{className:"text-blue-600",children:(0,f.jsx)(l.rU,{to:"cast",children:"Cast"})}),(0,f.jsx)("li",{className:"text-blue-600",children:(0,f.jsx)(l.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,f.jsx)(i.Suspense,{fallback:(0,f.jsx)("div",{children:"Loading..."}),children:(0,f.jsx)(u.j3,{})})]})}},4942:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(9142);function a(e,t,n){return(t=(0,r.Z)(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},1413:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(4942);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}}}]);
//# sourceMappingURL=106.cbb4c737.chunk.js.map