"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[230],{600:function(e,t,n){n.d(t,{Bt:function(){return f},Ml:function(){return u},Tg:function(){return s},Y5:function(){return l},wL:function(){return p}});var r=n(861),a=n(757),c=n.n(a),i=n(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="d4361d7b577744dc7974c40231de896b",s=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("trending/movie/day?api_key=".concat(o));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("search/movie?api_key=".concat(o,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("movie/".concat(t,"?api_key=").concat(o,"&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data.cast);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},230:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(439),a=n(689),c=n(791),i=n(600),o=n(841),s=(0,n(971).QM)({list:{display:"flex",flexDirection:"column",gap:15,listStyleType:"none",paddingTop:15,marginTop:15,borderTop:"3px solid #ffe454b0"},noReviewsText:{paddingTop:15,marginTop:15,borderTop:"3px solid #ffe454b0",textAlign:"center",fontSize:24,color:"#000",fontWeight:600},listItem:{display:"flex",gap:15,alignItems:"flex-start",position:"relative"},listItemInfo:{padding:15,background:"#ffffffa6",borderRadius:8,lineHeight:1.3},listItemIcon:{background:"#fff",padding:6,borderRadius:8,"@media screen and (max-width: 768px)":{position:"absolute",width:60,left:15,top:15}},reviewAuthor:{"@media screen and (max-width: 768px)":{marginLeft:70,marginTop:10}},reviewContent:{padding:10,fontSize:16,background:"#fff",fontWeight:500,borderRadius:8,lineHeight:1.3,marginTop:15,textAlign:"justify",wordBreak:"break-word"}});var u=n.p+"static/media/author.f6a946dc733803d54b645b98e9653362.svg",l=n(184),p=function(){var e=s(),t=(0,a.UO)().movieId,n=(0,c.useState)([]),p=(0,r.Z)(n,2),f=p[0],d=p[1],v=(0,c.useState)(!1),g=(0,r.Z)(v,2),h=g[0],m=g[1];return(0,c.useEffect)((function(){m(!0),(0,i.Bt)(t).then((function(e){d(e)})).catch((function(e){console.log(e)})).finally((function(){m(!1)}))}),[t]),(0,l.jsxs)(l.Fragment,{children:[h&&(0,l.jsx)(o.Z,{}),0!==f.length&&(0,l.jsx)("div",{children:(0,l.jsx)("ul",{className:e.list,children:f.map((function(t){return(0,l.jsxs)("li",{className:e.listItem,children:[(0,l.jsx)("img",{className:e.listItemIcon,src:u,alt:"Author",width:100}),(0,l.jsxs)("div",{className:e.listItemInfo,children:[(0,l.jsx)("h2",{className:e.reviewAuthor,children:t.author}),(0,l.jsx)("p",{className:e.reviewContent,children:t.content})]})]},t.id)}))})}),0===f.length&&(0,l.jsx)("p",{className:e.noReviewsText,children:"We don't have any reviews for this movie."})]})}}}]);
//# sourceMappingURL=230.c3a484de.chunk.js.map