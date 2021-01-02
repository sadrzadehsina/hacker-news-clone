(this["webpackJsonphacker-news-clone"]=this["webpackJsonphacker-news-clone"]||[]).push([[0],{181:function(e,n,t){"use strict";t.r(n);var r=t(9),c=t(0),i=t.n(c),s=t(16),o=t.n(s),a=t(44),j=t(10),h=t(13),l=function(){var e=Object(j.n)(),n=e.colorMode,t=e.setColorMode,c=function(){return"dark"===n};return Object(r.jsxs)(j.m,{children:[Object(r.jsx)(j.m.Section,{children:Object(r.jsxs)(j.m.Item,{href:"#",fontWeight:"semibold",children:[Object(r.jsx)(j.g,{src:"https://news.ycombinator.com/y18.gif"}),Object(r.jsx)(j.e,{use:"h6",paddingX:"minor-2",children:"Hacker News Clone"})]})}),Object(r.jsx)(j.m.Section,{children:Object(r.jsx)(j.m.Item,{children:Object(r.jsx)(j.j,{children:Object(r.jsx)(j.b,{onClick:function(){c()?t("light"):t("dark")},variant:"ghost",size:"large",children:Object(r.jsx)(j.f,{"aria-label":"moon",icon:c()?{viewBoxWidth:24,viewBoxHeight:24,paths:["M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"]}:{viewBoxWidth:24,viewBoxHeight:24,paths:["M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"]},fontSize:"400"})})})})})]})},d=function(e){Object.assign({},e);var n=Object(h.f)(),t=function(e){return n.push(e)};return Object(r.jsxs)(j.j,{children:[Object(r.jsx)(j.b,{variant:"ghost",onClick:function(){return t("/stories")},children:"Stories"}),Object(r.jsx)(j.b,{variant:"ghost",onClick:function(){return t("/questions")},children:"Questions"}),Object(r.jsx)(j.b,{variant:"ghost",onClick:function(){return t("/jobs")},children:"Jobs"})]})},b=t(73),u=function(e){return Object(b.a)(e),Object(r.jsx)(j.a,{alignX:"center",padding:"2rem",children:Object(r.jsx)(j.k,{hasTrack:!0,size:"large"})})},x=t(21),O=t(23),f=t.n(O),m=t(19),g=t(55),p=t.n(g),v=function(e,n){return e.score>n.score?1:-1},k=function(e,n){return e.splice(n,20)},w=function(e){var n=e.key,t=e.allUrl,r=e.oneUrl;return Object(m.c)(n,(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return new Promise((function(e){console.log(n);var c=[];p.a.get(t).then((function(e){return e.data})).then((function(t){k(t,n).map((function(e){var n=p.a.get("".concat(r,"/").concat(e,".json")).then((function(e){return e.data}));c.push(n)})),Promise.all(c).then((function(t){return e({items:t.sort(v),nextCursor:n+20+1})}))}))}))}),{getFetchMore:function(e,n){return e.nextCursor}})},M=function(){x.extend(f.a);var e=new m.a({defaultConfig:{queries:{refetchOnWindowFocus:!1}}}),n=w({key:"stories",allUrl:"https://hacker-news.firebaseio.com/v0/topstories.json",oneUrl:"https://hacker-news.firebaseio.com/v0/item/"}),t=n.isLoading,c=(n.isError,n.data),s=(n.error,n.canFetchMore),o=n.isFetchingMore,a=n.fetchMore;return t?Object(r.jsx)(u,{}):Object(r.jsxs)(m.b,{queryCache:e,children:[c.map((function(e,n){return Object(r.jsx)(i.a.Fragment,{children:e.items.map((function(e){return Object(r.jsxs)(j.a,{padding:"1rem",children:[Object(r.jsx)(j.e,{use:"h5",children:Object(r.jsx)(j.h,{href:e.url,children:e.title},e.id)}),Object(r.jsxs)(j.j,{spacing:"minor-1",children:[Object(r.jsx)(j.l,{children:e.by}),Object(r.jsx)(j.l,{children:x(1e3*e.time).fromNow()})]})]},e.id)}))},n)})),s&&Object(r.jsx)(j.d,{alignX:"center",children:Object(r.jsx)(j.b,{isLoading:!s||o,disabled:!s||o,onClick:function(){return a()},children:"Load More"})})]})},C=function(){x.extend(f.a);var e=new m.a({defaultConfig:{queries:{refetchOnWindowFocus:!1}}}),n=w({key:"questions",allUrl:"https://hacker-news.firebaseio.com/v0/askstories.json",oneUrl:"https://hacker-news.firebaseio.com/v0/item/"}),t=n.isLoading,c=(n.isError,n.data),s=(n.error,n.canFetchMore),o=n.isFetchingMore,a=n.fetchMore;return t?Object(r.jsx)(u,{}):Object(r.jsxs)(m.b,{queryCache:e,children:[c.map((function(e,n){return Object(r.jsx)(i.a.Fragment,{children:e.items.map((function(e){return Object(r.jsxs)(j.a,{padding:"1rem",children:[Object(r.jsx)(j.e,{use:"h5",children:Object(r.jsx)(j.h,{href:e.url,children:e.title},e.id)}),Object(r.jsxs)(j.j,{spacing:"minor-1",children:[Object(r.jsx)(j.l,{children:e.by}),Object(r.jsx)(j.l,{children:x(1e3*e.time).fromNow()})]})]},e.id)}))},n)})),s&&Object(r.jsx)(j.d,{alignX:"center",children:Object(r.jsx)(j.b,{isLoading:!s||o,disabled:!s||o,onClick:function(){return a()},children:"Load More"})})]})},F=function(){x.extend(f.a);var e=new m.a({defaultConfig:{queries:{refetchOnWindowFocus:!1}}}),n=w({key:"jobs",allUrl:"https://hacker-news.firebaseio.com/v0/jobstories.json",oneUrl:"https://hacker-news.firebaseio.com/v0/item/"}),t=n.isLoading,c=(n.isError,n.data),s=(n.error,n.canFetchMore),o=n.isFetchingMore,a=n.fetchMore;return t?Object(r.jsx)(u,{}):Object(r.jsxs)(m.b,{queryCache:e,children:[c.map((function(e,n){return Object(r.jsx)(i.a.Fragment,{children:e.items.map((function(e){return Object(r.jsxs)(j.a,{padding:"1rem",children:[Object(r.jsx)(j.e,{use:"h5",children:Object(r.jsx)(j.h,{href:e.url,children:e.title},e.id)}),Object(r.jsxs)(j.j,{spacing:"minor-1",children:[Object(r.jsx)(j.l,{children:e.by}),Object(r.jsx)(j.l,{children:x(1e3*e.time).fromNow()})]})]},e.id)}))},n)})),s&&Object(r.jsx)(j.d,{alignX:"center",children:Object(r.jsx)(j.b,{isLoading:!s||o,disabled:!s||o,onClick:function(){return a()},children:"Load More"})})]})},y=function(){return Object(r.jsx)(j.c,{isFluid:!0,children:Object(r.jsxs)(j.a,{padding:"0.5rem",children:[Object(r.jsx)(l,{}),Object(r.jsx)(d,{}),Object(r.jsxs)(h.c,{children:[Object(r.jsx)(h.a,{path:"/stories",children:Object(r.jsx)(M,{})}),Object(r.jsx)(h.a,{path:"/questions",children:Object(r.jsx)(C,{})}),Object(r.jsx)(h.a,{path:"/jobs",children:Object(r.jsx)(F,{})}),Object(r.jsx)(h.a,{path:"/",children:Object(r.jsx)("h1",{children:"Home"})})]})]})})},z=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,184)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,i=n.getLCP,s=n.getTTFB;t(e),r(e),c(e),i(e),s(e)}))};o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(j.i,{children:Object(r.jsx)(a.a,{children:Object(r.jsx)(y,{})})})}),document.getElementById("root")),z()}},[[181,1,2]]]);
//# sourceMappingURL=main.11add801.chunk.js.map