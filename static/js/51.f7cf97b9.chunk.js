"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[51],{548:function(e,t,r){r.d(t,{Jh:function(){return u},_r:function(){return p},fh:function(){return s},gH:function(){return l},wr:function(){return o}});var n=r(165),c=r(861),a=r(243);a.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="02b3fc4c867c86b8e0657790f32792c0",o=function(){var e=(0,c.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get("/trending/all/day?api_key=".concat(i),{signal:t.signal});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=(0,c.Z)((0,n.Z)().mark((function e(t,r){var c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get("/movie/".concat(t,"?api_key=").concat(i),{signal:r.signal});case 2:return c=e.sent,e.abrupt("return",c.data);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),u=function(){var e=(0,c.Z)((0,n.Z)().mark((function e(t,r){var c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get("/movie/".concat(t,"/credits?api_key=").concat(i),{signal:r.signal});case 2:return c=e.sent,e.abrupt("return",c.data);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),p=function(){var e=(0,c.Z)((0,n.Z)().mark((function e(t,r){var c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(i),{signal:r.signal});case 2:return c=e.sent,e.abrupt("return",c.data);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),l=function(){var e=(0,c.Z)((0,n.Z)().mark((function e(t,r){var c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get("search/movie?query=".concat(t,"&api_key=").concat(i),{signal:r.signal});case 2:return c=e.sent,e.abrupt("return",c.data);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},51:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var n=r(165),c=r(142);function a(e,t,r){return(t=(0,c.Z)(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=r(861),u=r(439),p=r(548),l=r(791),f=r(689),h=r(87),d=r(184),v=function(){var e=(0,l.useState)({}),t=(0,u.Z)(e,2),r=t[0],c=t[1],a=(0,l.useState)([]),i=(0,u.Z)(a,2),v=i[0],x=i[1],j=(0,f.UO)().movieId,g=(0,l.useState)(!0),w=(0,u.Z)(g,2),b=w[0],m=w[1];return(0,l.useEffect)((function(){var e=new AbortController,t=function(){var t=(0,s.Z)((0,n.Z)().mark((function t(){var r;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,p.fh)(j,e);case 3:r=t.sent,c(o({},r)),x(r.genres),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("error",t.t0),"ERR_BAD_REQUEST"===t.t0.code&&m(!1);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();return t(),function(){e.abort()}}),[j]),(0,d.jsxs)(d.Fragment,{children:[r.title&&(0,d.jsxs)("div",{children:[(0,d.jsx)("button",{children:(0,d.jsx)(h.rU,{to:"/",children:" \u2190 Go back"})}),b?(0,d.jsxs)("div",{children:[(0,d.jsx)("h1",{children:"".concat(r.title," (").concat(r.release_date?r.release_date.split("-")[0]:"unknown",") ")}),(0,d.jsx)("p",{children:"User Score: ".concat(r.vote_average?0^r.vote_average:"unknown","%")}),(0,d.jsx)("h2",{children:"Overview"}),(0,d.jsx)("p",{children:"".concat(r.overview?r.overview:"unknow")}),(0,d.jsx)("h2",{children:"Genres:"}),(0,d.jsx)("p",{children:"".concat(v.map((function(e){return e.name})).join(", "))}),r.poster_path?(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(r.poster_path),alt:"poster ".concat(r.title),width:250}):(0,d.jsx)("img",{src:"https://via.placeholder.com/200x200.png?text=NO+PHOTO",alt:"no_photo",width:250})]}):(0,d.jsx)("p",{children:"Sorry, there is no information for this movie"})]}),r.title&&(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{children:"Additional information"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(h.rU,{to:"cast",children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(h.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,d.jsx)(l.Suspense,{fallback:(0,d.jsx)("div",{children:"Loading..."}),children:(0,d.jsx)(f.j3,{})})]})}}}]);
//# sourceMappingURL=51.f7cf97b9.chunk.js.map