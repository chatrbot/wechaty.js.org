(self.webpackChunk=self.webpackChunk||[]).push([[5776],{5318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,y=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},959:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var r=n(9603),o=n(120),a=(n(7378),n(5318)),i=["components"],c={title:"Concepts"},l={unversionedId:"explainations/concepts",id:"explainations/concepts",isDocsHomePage:!1,title:"Concepts",description:"This page will helps you to build a deeper understanding of the underlying technology.",source:"@site/docs/explainations/concepts.md",sourceDirName:"explainations",slug:"/explainations/concepts",permalink:"/docs/explainations/concepts",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/explainations/concepts.md",version:"current",lastUpdatedBy:"\u9a91\u9a6c\u5c0f\u732b",lastUpdatedAt:1623155317,formattedLastUpdatedAt:"6/8/2021",frontMatter:{title:"Concepts"},sidebar:"docs",previous:{title:"Motivation",permalink:"/docs/explainations/motivations"},next:{title:"Architecture",permalink:"/docs/explainations/architecture"}},s=[{value:"Wechaty",id:"wechaty",children:[]},{value:"See Also",id:"see-also",children:[]}],p={toc:s};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This page will helps you to build a deeper understanding of the underlying technology."),(0,a.kt)("h2",{id:"wechaty"},"Wechaty"),(0,a.kt)("p",null,"The bot class that you always start with."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const bot = new Wechaty()\nawait wechaty.start()\n")),(0,a.kt)("h2",{id:"see-also"},"See Also"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://developers.google.com/hangouts/chat/concepts/"},"Hangouts Chat API")),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"BO vs BT: Bot Originated/Terminated")))),(0,a.kt)("p",null,"This is basically the whole idea of Wechaty."))}u.isMDXComponent=!0}}]);