(self.webpackChunk=self.webpackChunk||[]).push([[9409],{5318:function(t,e,a){"use strict";a.d(e,{Zo:function(){return s},kt:function(){return g}});var r=a(7378);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var c=r.createContext({}),p=function(t){var e=r.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),h=p(a),g=n,y=h["".concat(c,".").concat(g)]||h[g]||u[g]||o;return a?r.createElement(y,i(i({ref:e},s),{},{components:a})):r.createElement(y,i({ref:e},s))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9650:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=a(9603),n=a(120),o=(a(7378),a(5318)),i=["components"],l={slug:"/polyglot/java/",title:"Java Wechaty",sidebar_label:"Java"},c={unversionedId:"polyglot/java/overview",id:"polyglot/java/overview",isDocsHomePage:!1,title:"Java Wechaty",description:"Kotlin(Java) Wechaty",source:"@site/docs/polyglot/java/overview.md",sourceDirName:"polyglot/java",slug:"/polyglot/java/",permalink:"/docs/polyglot/java/",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/java/overview.md",version:"current",lastUpdatedBy:"\u9a91\u9a6c\u5c0f\u732b",lastUpdatedAt:1623155317,formattedLastUpdatedAt:"6/8/2021",sidebar_label:"Java",frontMatter:{slug:"/polyglot/java/",title:"Java Wechaty",sidebar_label:"Java"},sidebar:"docs",previous:{title:"Go Wechaty",permalink:"/docs/polyglot/go/"},next:{title:"Scala Wechaty",permalink:"/docs/polyglot/scala/"}},p=[{value:"Getting Started",id:"getting-started",children:[]},{value:"Blogs",id:"blogs",children:[]},{value:"History",id:"history",children:[]},{value:"Maintainers",id:"maintainers",children:[]}],s={toc:p};function u(t){var e=t.components,a=(0,n.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/java-wechaty"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Wechaty-Kotlin-orange",alt:"Kotlin(Java) Wechaty"}))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GitHub Repo ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/java-wechaty"},"https://github.com/wechaty/java-wechaty")),(0,o.kt)("li",{parentName:"ul"},"Getting Started Template Repo ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/java-wechaty-getting-started"},"https://github.com/wechaty/java-wechaty-getting-started"))),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"Template Repo: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/java-wechaty-getting-started"},"https://github.com/wechaty/java-wechaty-getting-started")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:wechaty/java-wechaty-getting-started.git\ncd java-wechaty-getting-started\nmake install\nmake bot\n")),(0,o.kt)("h2",{id:"blogs"},"Blogs"),(0,o.kt)("p",null,"Read blogs with the ",(0,o.kt)("inlineCode",{parentName:"p"},"java")," tag at ",(0,o.kt)("a",{parentName:"p",href:"https://wechaty.js.org/tags.html#java"},"https://wechaty.js.org/tags.html#java")),(0,o.kt)("h2",{id:"history"},"History"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2020/06/15/java-wechaty-beta-release/"},"Java Wechaty Beta Released: \u7ec8\u4e8e\u6709\u4e86 Java \u53ef\u4ee5\u7528\u7684\u5fae\u4fe1\u673a\u5668\u4eba, @diaozxin007, Jun 15, 2020"))),(0,o.kt)("h2",{id:"maintainers"},"Maintainers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wechaty.js.org/contributors/diaozxin007"},"@diaozxin007"))))}u.isMDXComponent=!0}}]);