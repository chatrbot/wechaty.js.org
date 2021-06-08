(self.webpackChunk=self.webpackChunk||[]).push([[2076],{5318:function(t,e,r){"use strict";r.d(e,{Zo:function(){return l},kt:function(){return y}});var n=r(7378);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var i=n.createContext({}),u=function(t){var e=n.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},l=function(t){var e=u(t.components);return n.createElement(i.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,i=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),f=u(r),y=o,m=f["".concat(i,".").concat(y)]||f[y]||p[y]||a;return r?n.createElement(m,c(c({ref:e},l),{},{components:r})):n.createElement(m,c({ref:e},l))}));function y(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,c=new Array(a);c[0]=f;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s.mdxType="string"==typeof t?t:o,c[1]=s;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2928:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return u},default:function(){return p}});var n=r(9603),o=r(120),a=(r(7378),r(5318)),c=["components"],s={},i={unversionedId:"polyglot/java/transclusions/shortest-chatbot",id:"polyglot/java/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`java",source:"@site/docs/polyglot/java/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/java/transclusions",slug:"/polyglot/java/transclusions/shortest-chatbot",permalink:"/docs/polyglot/java/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/java/transclusions/shortest-chatbot.mdx",version:"current",lastUpdatedBy:"\u9a91\u9a6c\u5c0f\u732b",lastUpdatedAt:1623155317,formattedLastUpdatedAt:"6/8/2021",frontMatter:{}},u=[],l={toc:u};function p(t){var e=t.components,r=(0,o.Z)(t,c);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package io.github.wechaty;\n\nclass Bot{\n  public static void main(String args[]){\n    Wechaty bot = Wechaty.instance()\n      .onScan((qrcode, statusScanStatus, data) -> System.out.println(QrcodeUtils.getQr(qrcode)))\n      .onLogin(user -> System.out.println("User logged in :" + user))\n      .onMessage(message -> System.out.println("Message:" + message))\n      .start(true);\n  }\n}\n')))}p.isMDXComponent=!0}}]);