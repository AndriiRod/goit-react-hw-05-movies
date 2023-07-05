"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[38],{713:function(e,t,n){var r=n(861),a=n(757),u=n.n(a),s=n(243);s.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="60cc6ad85da178dfca0e63709f5042e0",c=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/trending/movie/day",{params:{api_key:i,language:"en-US"}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t),{params:{api_key:i,language:"en-US"}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/search/movie",{params:{api_key:i,language:"en-US",query:t,include_adult:"true"}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t,"/credits"),{params:{api_key:i,language:"en-US"}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t,"/reviews"),{params:{api_key:i,language:"en-US"}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d={GetTrendingMovies:c,GetDetailsOfMovie:o,GetMoviesByTitles:p,GetMovieCast:f,GetMovieReviews:v};t.Z=d},133:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(184),a=function(e){var t=e.message;return(0,r.jsx)("div",{children:t})}},996:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(689),a=n(87),u=n(184),s=function(e){var t=e.title;return(0,u.jsx)("p",{children:t})},i=function(e){var t=e.data,n=(0,r.TH)();return 0===t.length?(0,u.jsx)("div",{children:"No matches found"}):(0,u.jsx)("ul",{children:t.map((function(e){var t=e.title,r=e.id;return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"/movies/".concat(r),state:{from:n},children:(0,u.jsx)(s,{title:t})})},r)}))})}},38:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var r=n(861),a=n(439),u=n(757),s=n.n(u),i=n(85),c=n(87),o=n(791),p=n(413),f=n(134),v=n(184),d=function(e){var t=e.setNewSearchQuery,n=(0,f.cI)({defaultValues:{input:""}}),r=n.register,a=n.handleSubmit,u=n.reset;return(0,v.jsxs)("form",{onSubmit:a((function(e){var n=e.input.toLowerCase().trim();t(n),u()})),children:[(0,v.jsx)("button",{type:"submit",children:"Search"}),(0,v.jsx)("input",(0,p.Z)((0,p.Z)({type:"text"},r("input")),{},{placeholder:"Enter name"}))]})},l=n(290),h=n(133),m=n(996),x=n(713),g="pending",Z="resolved",y="rejected",w=function(){var e=(0,c.lr)(),t=(0,a.Z)(e,2),n=t[0],u=t[1],p=(0,o.useState)(),f=(0,a.Z)(p,2),w=f[0],j=f[1],k=(0,o.useState)(null),b=(0,a.Z)(k,2),_=b[0],S=b[1],U=(0,o.useState)([]),G=(0,a.Z)(U,2),M=G[0],q=G[1],C=n.get("query");return(0,o.useEffect)((function(){if(C){j(g);var e=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.Z.GetMoviesByTitles(C);case 3:t=e.sent,q(t.results),j(Z),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),S(e.t0.message),j(y);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}}),[C]),(0,v.jsxs)("section",{children:[(0,v.jsx)(d,{setNewSearchQuery:function(e){""!==e?u({query:e}):i.Am.info("Request cannot be empty")}}),w===g&&(0,v.jsx)(l.Z,{}),w===y&&(0,v.jsx)(h.Z,{message:_}),w===Z&&(0,v.jsx)(m.Z,{data:M})]})}}}]);
//# sourceMappingURL=38.bfc83a59.chunk.js.map