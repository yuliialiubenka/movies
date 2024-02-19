"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[934],{600:function(e,t,n){n.d(t,{Bt:function(){return d},Ml:function(){return u},Tg:function(){return o},Y5:function(){return l},wL:function(){return p}});var r=n(861),a=n(757),i=n.n(a),c=n(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="d4361d7b577744dc7974c40231de896b",o=function(){var e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("trending/movie/day?api_key=".concat(s));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("search/movie?api_key=".concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data.cast);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},334:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(689),a=n(87),i=(0,n(971).QM)({filmsWrapper:{listStyleType:"none",display:"flex",flexWrap:"wrap",justifyContent:"center",paddingTop:15,gap:15},filmCard:{fontWeight:600,fontSize:14,width:"calc((100% - 6 * 15px) / 7)",borderRadius:8,position:"relative",cursor:"pointer","@media screen and (max-width: 1024px)":{width:"calc((100% - 4 * 15px) / 5)"},"@media screen and (max-width: 768px)":{width:"calc((100% - 15px) / 2)"},"& a":{textDecoration:"none",color:"#000","@media screen and (max-width: 768px)":{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%"}},"&:hover":{boxShadow:"0px 4px 10px 0px rgba(9, 9, 9, 0.61)"}},filmCardOverlay:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 70%, rgba(255,255,255,1) 80%)",opacity:0,borderRadius:8,display:"flex",flexDirection:"column",justifyContent:"flex-end",padding:8,"&:hover":{opacity:1},"@media screen and (max-width: 768px)":{position:"static",opacity:1,height:"auto",borderRadius:"0 0 8px 8px",flexGrow:"1",background:"linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",textAlign:"center",justifyContent:"center",minHeight:50}},filmCardInfo:{display:"flex",justifyContent:"space-between","@media screen and (max-width: 768px)":{display:"none"}},filmCardImage:{width:"100%",height:"100%",borderRadius:8,objectFit:"cover","@media screen and (max-width: 768px)":{borderRadius:"8px 8px 0 0"}},filmCardTitle:{textDecoration:"none",marginBottom:8,"@media screen and (max-width: 768px)":{marginBottom:0}}}),c=n(184),s=function(e){var t=e.films,n=(0,r.TH)(),s=i();return(0,c.jsx)("ul",{className:s.filmsWrapper,children:t.map((function(e){return(0,c.jsx)("li",{className:s.filmCard,children:(0,c.jsxs)(a.rU,{to:"/movies/".concat(e.id),state:{from:n},children:[(0,c.jsx)("img",{className:s.filmCardImage,src:e.poster_path?"https://image.tmdb.org/t/p/w500".concat(e.poster_path):"https://t3.ftcdn.net/jpg/00/36/94/26/360_F_36942622_9SUXpSuE5JlfxLFKB1jHu5Z07eVIWQ2W.jpg",alt:"film.title",width:300}),(0,c.jsxs)("div",{className:s.filmCardOverlay,children:[(0,c.jsx)("p",{className:s.filmCardTitle,children:e.title}),(0,c.jsxs)("div",{className:s.filmCardInfo,children:[(0,c.jsx)("span",{children:e.release_date.slice(0,4)}),(0,c.jsxs)("span",{children:[e.vote_average.toFixed(1)," \u2b50"]})]})]})]})},e.id)}))})}},934:function(e,t,n){n.r(t);var r=n(439),a=n(791),i=n(334),c=n(600),s=n(841),o=n(184);t.default=function(){var e=(0,a.useState)([]),t=(0,r.Z)(e,2),n=t[0],u=t[1],l=(0,a.useState)(!1),p=(0,r.Z)(l,2),d=p[0],f=p[1];return(0,a.useEffect)((function(){f(!0),(0,c.Tg)().then((function(e){u(e)})).catch((function(e){console.log(e)})).finally((function(){f(!1)}))}),[]),(0,o.jsxs)("main",{children:[(0,o.jsx)("h1",{children:"Trending today"}),(0,o.jsx)(i.Z,{films:n}),d&&(0,o.jsx)(s.Z,{})]})}}}]);
//# sourceMappingURL=934.1a6ac845.chunk.js.map