"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[60],{713:function(e,t,r){var n=r(861),a=r(757),u=r.n(a),s=r(243);s.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="60cc6ad85da178dfca0e63709f5042e0",c=function(){var e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/trending/movie/day",{params:{api_key:i,language:"en-US"}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t),{params:{api_key:i,language:"en-US"}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/search/movie",{params:{api_key:i,language:"en-US",query:t,include_adult:"true"}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t,"/credits"),{params:{api_key:i,language:"en-US"}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t,"/reviews"),{params:{api_key:i,language:"en-US"}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d={GetTrendingMovies:c,GetDetailsOfMovie:o,GetMoviesByTitles:p,GetMovieCast:v,GetMovieReviews:f};t.Z=d},60:function(e,t,r){r.r(t),r.d(t,{default:function(){return k}});var n=r(861),a=r(439),u=r(757),s=r.n(u),i=r(791),c=r(689),o=r(713),p=r(290),v=r(133),f=r(925),d=r(184),l=function(e){var t=e.data,r=t.profile_path,n=t.name,a=t.character;return(0,d.jsxs)("div",{children:[(0,d.jsx)("img",{width:"200px",src:"https://image.tmdb.org/t/p/w500".concat(r),alt:n}),(0,d.jsxs)("p",{children:["Name:",n]}),(0,d.jsxs)("p",{children:["Character",a]})]})},h=["id"],m=function(e){var t=e.data;return 0===t.length?(0,d.jsx)("div",{children:"No information available"}):(0,d.jsxs)("ul",{children:[t.map((function(e){var t=e.id,r=(0,f.Z)(e,h);return(0,d.jsx)("li",{children:(0,d.jsx)(l,{data:r})},t)})),";"]})},g="idle",x="pending",Z="resolved",w="rejected",k=function(){var e=(0,i.useState)(g),t=(0,a.Z)(e,2),r=t[0],u=t[1],f=(0,i.useState)([]),l=(0,a.Z)(f,2),h=l[0],k=l[1],_=(0,i.useState)(null),j=(0,a.Z)(_,2),y=j[0],b=j[1],S=(0,c.UO)().movieId;return(0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(x),e.prev=1,e.next=4,o.Z.GetMovieCast(S);case 4:t=e.sent,k(t.cast),u(Z),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),b(e.t0.message),u(w);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[S]),(0,d.jsxs)("div",{children:[r===x&&(0,d.jsx)(p.Z,{}),r===w&&(0,d.jsx)(v.Z,{message:y}),r===Z&&(0,d.jsx)(m,{data:h})]})}},133:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(184),a=function(e){var t=e.message;return(0,n.jsx)("div",{children:t})}}}]);
//# sourceMappingURL=60.dc6d701e.chunk.js.map