"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{713:function(e,t,n){var r=n(861),a=n(757),u=n.n(a),s=n(243);s.Z.defaults.baseURL="https://api.themoviedb.org/3";var c="60cc6ad85da178dfca0e63709f5042e0",i=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/trending/movie/day",{params:{api_key:c,language:"en-US"}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t),{params:{api_key:c,language:"en-US"}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/search/movie",{params:{api_key:c,language:"en-US",query:t,include_adult:"true"}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t,"/credits"),{params:{api_key:c,language:"en-US"}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t,"/reviews"),{params:{api_key:c,language:"en-US"}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d={GetTrendingMovies:i,GetDetailsOfMovie:o,GetMoviesByTitles:p,GetMovieCast:f,GetMovieReviews:v};t.Z=d},133:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(184),a=function(e){var t=e.message;return(0,r.jsx)("div",{children:t})}},996:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(689),a=n(87),u=n(184),s=function(e){var t=e.title;return(0,u.jsx)("p",{children:t})},c=function(e){var t=e.data,n=(0,r.TH)();return 0===t.length?(0,u.jsx)("div",{children:"No matches found"}):(0,u.jsx)("ul",{children:t.map((function(e){var t=e.title,r=e.id;return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"/movies/".concat(r),state:{from:n},children:(0,u.jsx)(s,{title:t})})},r)}))})}},415:function(e,t,n){n.r(t);var r=n(861),a=n(439),u=n(757),s=n.n(u),c=n(713),i=n(996),o=n(290),p=n(133),f=n(791),v=n(184),d="idle",l="pending",h="resolved",m="rejected";t.default=function(){var e=(0,f.useState)([]),t=(0,a.Z)(e,2),n=t[0],u=t[1],g=(0,f.useState)(d),x=(0,a.Z)(g,2),Z=x[0],w=x[1],k=(0,f.useState)(null),y=(0,a.Z)(k,2),_=y[0],j=y[1];return(0,f.useEffect)((function(){w(l);var e=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.GetTrendingMovies();case 3:t=e.sent,u(t.results),w(h),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),j(e.t0.message),w(m);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,v.jsxs)("section",{children:[(0,v.jsx)("h1",{children:"Home"}),Z===l&&(0,v.jsx)(o.Z,{}),Z===m&&(0,v.jsx)(p.Z,{message:_}),Z===h&&(0,v.jsx)(i.Z,{data:n})]})}}}]);
//# sourceMappingURL=415.ece88859.chunk.js.map