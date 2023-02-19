"use strict";(self.webpackChunksolid=self.webpackChunksolid||[]).push([[286],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),d=n,k=c["".concat(o,".").concat(d)]||c[d]||m[d]||i;return a?r.createElement(k,l(l({ref:t},u),{},{components:a})):r.createElement(k,l({ref:t},u))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:n,l[1]=s;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6393:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:7},l=void 0,s={unversionedId:"tutorial-basics/test",id:"tutorial-basics/test",title:"test",description:"Test",source:"@site/docs/tutorial-basics/test.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/test",permalink:"/solid-doc/docs/tutorial-basics/test",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/tutorial-basics/test.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Principio de inversi\xf3n de dependencia (DIP)",permalink:"/solid-doc/docs/tutorial-basics/DIP"},next:{title:"Patrones de dise\xf1o creacionales",permalink:"/solid-doc/docs/tutorial-extras/Creacionales"}},o={},p=[{value:"Test",id:"test",level:3},{value:"Respuestas",id:"respuestas",level:3}],u={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"test"},"Test"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"\xbfQu\xe9 significa el acr\xf3nimo SOLID?")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a) S\xf3lo Ocho L\xedneas Implican Dificultad"),(0,n.kt)("li",{parentName:"ul"},"b) Single Object Library Integration Database"),(0,n.kt)("li",{parentName:"ul"},"c) Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion"),(0,n.kt)("li",{parentName:"ul"},"d) Soluciones de Optimizaci\xf3n de Lectura Incremental de Datos")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"\xbfCu\xe1l es el principio que establece que una clase deber\xeda tener s\xf3lo una raz\xf3n para cambiar?")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a) SRP (Single Responsibility Principle)"),(0,n.kt)("li",{parentName:"ul"},"b) OCP (Open-Closed Principle)"),(0,n.kt)("li",{parentName:"ul"},"c) LSP (Liskov Substitution Principle)"),(0,n.kt)("li",{parentName:"ul"},"d) ISP (Interface Segregation Principle)")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"\xbfCu\xe1l es el principio que establece que las clases deber\xedan ser abiertas para extensi\xf3n pero cerradas para modificaci\xf3n?")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a) SRP (Single Responsibility Principle)"),(0,n.kt)("li",{parentName:"ul"},"b) OCP (Open-Closed Principle)"),(0,n.kt)("li",{parentName:"ul"},"c) LSP (Liskov Substitution Principle)"),(0,n.kt)("li",{parentName:"ul"},"d) ISP (Interface Segregation Principle)")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"\xbfCu\xe1l es el principio que establece que una subclase deber\xeda poder ser usada en lugar de su clase base sin afectar la integridad del programa?")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a) SRP (Single Responsibility Principle)"),(0,n.kt)("li",{parentName:"ul"},"b) OCP (Open-Closed Principle)"),(0,n.kt)("li",{parentName:"ul"},"c) LSP (Liskov Substitution Principle)"),(0,n.kt)("li",{parentName:"ul"},"d) ISP (Interface Segregation Principle)")),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"\xbfCu\xe1l es el principio que establece que una interfaz deber\xeda tener s\xf3lo los m\xe9todos necesarios para su uso por parte de una clase cliente?")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a) SRP (Single Responsibility Principle)"),(0,n.kt)("li",{parentName:"ul"},"b) OCP (Open-Closed Principle)"),(0,n.kt)("li",{parentName:"ul"},"c) LSP (Liskov Substitution Principle)"),(0,n.kt)("li",{parentName:"ul"},"d) ISP (Interface Segregation Principle)")),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"\xbfQu\xe9 principio establece que los m\xf3dulos de alto nivel no deber\xedan depender de m\xf3dulos de bajo nivel, sino de abstracciones?")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a) SRP (Single Responsibility Principle)"),(0,n.kt)("li",{parentName:"ul"},"b) OCP (Open-Closed Principle)"),(0,n.kt)("li",{parentName:"ul"},"c) LSP (Liskov Substitution Principle)"),(0,n.kt)("li",{parentName:"ul"},"d) DIP (Dependency Inversion Principle)")),(0,n.kt)("ol",{start:7},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"\xbfQu\xe9 principio establece que una clase no deber\xeda ser responsable de crear instancias de otras clases, sino que deber\xeda depender de una abstracci\xf3n?")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a) SRP (Single Responsibility Principle)"),(0,n.kt)("li",{parentName:"ul"},"b) OCP (Open-Closed Principle)"),(0,n.kt)("li",{parentName:"ul"},"c) LSP (Liskov Substitution Principle)"),(0,n.kt)("li",{parentName:"ul"},"d) DIP (Dependency Inversion Principle)")),(0,n.kt)("ol",{start:8},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"\xbfCu\xe1l es el patr\xf3n de dise\xf1o que ayuda a cumplir el principio SRP al dividir una clase en varias clases m\xe1s peque\xf1as y especializadas?")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a) Adapter"),(0,n.kt)("li",{parentName:"ul"},"b) Composite"),(0,n.kt)("li",{parentName:"ul"},"c) Decorator"),(0,n.kt)("li",{parentName:"ul"},"d) Facade")),(0,n.kt)("ol",{start:9},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"\xbfCu\xe1l es el patr\xf3n de dise\xf1o que ayuda a cumplir el principio OCP al utilizar una clase abstracta o interfaz para definir un conjunto de comportamientos que pueden ser implementados por varias clases?")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a) Factory Method"),(0,n.kt)("li",{parentName:"ul"},"b) Strategy"),(0,n.kt)("li",{parentName:"ul"},"c) Template Method"),(0,n.kt)("li",{parentName:"ul"},"d) Observer")),(0,n.kt)("ol",{start:10},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"\xbfCu\xe1l es el patr\xf3n de dise\xf1o que ayuda a cumplir el principio LSP al asegurar que las subclases puedan ser usadas en lugar de su clase base mediante la extracci\xf3n de comportamientos comunes a una clase abstracta?")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a) Factory Method"),(0,n.kt)("li",{parentName:"ul"},"b) Strategy"),(0,n.kt)("li",{parentName:"ul"},"c) Template Method"),(0,n.kt)("li",{parentName:"ul"},"d) Template Method")),(0,n.kt)("h3",{id:"respuestas"},"Respuestas"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"\xbfQu\xe9 significa el acr\xf3nimo SOLID?")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Respuesta correcta: Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion.")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"\xbfQu\xe9 principio SOLID sugiere que una clase debe tener solo una raz\xf3n para cambiar?")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Respuesta correcta: SRP (Single Responsibility Principle)")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"\xbfQu\xe9 principio SOLID sugiere que las clases deben estar abiertas a la extensi\xf3n pero cerradas a la modificaci\xf3n?")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Respuesta correcta: OCP (Open-Closed Principle).")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"\xbfQu\xe9 principio SOLID sugiere que las subclases deben poder ser utilizadas en lugar de sus clases base?")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Respuesta correcta: LSP (Liskov Substitution Principle).")),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"\xbfQu\xe9 principio SOLID sugiere que una interfaz debe tener solo los m\xe9todos que sean relevantes para los clientes que la utilizan?")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Respuesta correcta: ISP (Interface Segregation Principle).")),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"\xbfQu\xe9 principio SOLID sugiere que los m\xf3dulos de alto nivel no deben depender de m\xf3dulos de bajo nivel, sino de abstracciones?")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Respuesta correcta: DIP (Dependency Inversion Principle).")),(0,n.kt)("ol",{start:7},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"\xbfQu\xe9 patr\xf3n de dise\xf1o SOLID se utiliza para dividir una aplicaci\xf3n en capas y reducir la dependencia entre ellas?")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Respuesta correcta: Patr\xf3n de Arquitectura en Capas (Layered Architecture Pattern).")),(0,n.kt)("ol",{start:8},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"\xbfQu\xe9 patr\xf3n de dise\xf1o SOLID se utiliza para permitir que una clase tenga m\xfaltiples comportamientos?")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Respuesta correcta: Patr\xf3n de Decorador (Decorator Pattern).")),(0,n.kt)("ol",{start:9},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"\xbfQu\xe9 patr\xf3n de dise\xf1o SOLID se utiliza para definir una familia de algoritmos intercambiables y permitir que los clientes los utilicen sin conocer su implementaci\xf3n?")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Respuesta correcta: Patr\xf3n de Estrategia (Strategy Pattern).")),(0,n.kt)("ol",{start:10},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"\xbfQu\xe9 patr\xf3n de dise\xf1o SOLID se utiliza para permitir que un objeto cambie su comportamiento en funci\xf3n de su estado interno?")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Respuesta correcta: Patr\xf3n de Estado (State Pattern).")))}m.isMDXComponent=!0}}]);