"use strict";(self.webpackChunksolid=self.webpackChunksolid||[]).push([[731],{3905:(e,a,r)=>{r.d(a,{Zo:()=>d,kt:()=>f});var i=r(7294);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function o(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,i)}return r}function t(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?o(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function s(e,a){if(null==e)return{};var r,i,n=function(e,a){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),c=function(e){var a=i.useContext(l),r=a;return e&&(r="function"==typeof e?e(a):t(t({},a),e)),r},d=function(e){var a=c(e.components);return i.createElement(l.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},m=i.forwardRef((function(e,a){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return r?i.createElement(f,t(t({ref:a},d),{},{components:r})):i.createElement(f,t({ref:a},d))}));function f(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=r.length,t=new Array(o);t[0]=m;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[p]="string"==typeof e?e:n,t[1]=s;for(var c=2;c<o;c++)t[c]=r[c];return i.createElement.apply(null,t)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3003:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>l,contentTitle:()=>t,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=r(7462),n=(r(7294),r(3905));const o={sidebar_position:2},t="Principio de responsabilidad \xfanica (SRP)",s={unversionedId:"tutorial-basics/SRP",id:"tutorial-basics/SRP",title:"Principio de responsabilidad \xfanica (SRP)",description:"\xbfQu\xe9 es el principio SRP?",source:"@site/docs/tutorial-basics/02-SRP.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/SRP",permalink:"/solid-doc/docs/tutorial-basics/SRP",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/tutorial-basics/02-SRP.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introducci\xf3n",permalink:"/solid-doc/docs/intro"},next:{title:"Principio de abierto/cerrado (OCP)",permalink:"/solid-doc/docs/tutorial-basics/OCP"}},l={},c=[{value:"\xbfQu\xe9 es el principio SRP?",id:"qu\xe9-es-el-principio-srp",level:2},{value:"\xbfPor qu\xe9 es importante seguir el principio SRP?",id:"por-qu\xe9-es-importante-seguir-el-principio-srp",level:2},{value:"Ejemplos de c\xf3mo aplicar el principio SRP en el desarrollo de software.",id:"ejemplos-de-c\xf3mo-aplicar-el-principio-srp-en-el-desarrollo-de-software",level:2}],d={toc:c},p="wrapper";function u(e){let{components:a,...r}=e;return(0,n.kt)(p,(0,i.Z)({},d,r,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"principio-de-responsabilidad-\xfanica-srp"},"Principio de responsabilidad \xfanica (SRP)"),(0,n.kt)("h2",{id:"qu\xe9-es-el-principio-srp"},"\xbfQu\xe9 es el principio SRP?"),(0,n.kt)("p",null,"El principio SRP (Single Responsibility Principle) o Principio de Responsabilidad \xdanica en espa\xf1ol, es un principio de dise\xf1o de software que establece que una clase o m\xf3dulo deber\xeda tener solo una responsabilidad o motivo para cambiar. En otras palabras, una clase o m\xf3dulo deber\xeda tener solo una tarea o funci\xf3n en el sistema y no deber\xeda ser responsable de m\xe1s de una cosa."),(0,n.kt)("p",null,"Este principio se considera importante porque ayuda a hacer que el c\xf3digo sea m\xe1s f\xe1cil de mantener y de cambiar. Si una clase o m\xf3dulo tiene solo una responsabilidad, cualquier cambio en esa responsabilidad no afectar\xe1 a otras partes del sistema. Tambi\xe9n hace que sea m\xe1s f\xe1cil para otros desarrolladores entender y trabajar con el c\xf3digo."),(0,n.kt)("admonition",{title:"Ejemplo",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},'Imagina que estamos desarrollando una aplicaci\xf3n de comercio electr\xf3nico y tenemos una clase llamada "Product". En esta clase, manejamos la l\xf3gica para mostrar los detalles del producto en la p\xe1gina del producto, como el nombre del producto, la descripci\xf3n, el precio, la imagen del producto, etc.'),(0,n.kt)("p",{parentName:"admonition"},"En lugar de hacer que la clase Product tenga la responsabilidad de manejar todos los aspectos relacionados con la visualizaci\xf3n del producto, podr\xedamos dividirla en dos clases diferentes. Una clase ser\xeda responsable de manejar la informaci\xf3n del producto, y la otra se encargar\xeda de la visualizaci\xf3n del producto en la p\xe1gina."),(0,n.kt)("p",{parentName:"admonition"},"De esta manera, si necesitamos hacer cambios en la visualizaci\xf3n del producto, solo necesitamos modificar la clase que se encarga de la visualizaci\xf3n, sin afectar la l\xf3gica de la informaci\xf3n del producto. Y viceversa, si necesitamos hacer cambios en la l\xf3gica de informaci\xf3n del producto, solo necesitamos modificar la clase que se encarga de la informaci\xf3n, sin afectar la visualizaci\xf3n del producto."),(0,n.kt)("p",{parentName:"admonition"},"De esta manera, estamos aplicando el principio SRP al separar las responsabilidades de la clase Product en dos clases diferentes, lo que hace que sea m\xe1s f\xe1cil de mantener, entender y cambiar en el futuro.")),(0,n.kt)("h2",{id:"por-qu\xe9-es-importante-seguir-el-principio-srp"},"\xbfPor qu\xe9 es importante seguir el principio SRP?"),(0,n.kt)("p",null,"El principio SRP es importante porque permite crear clases m\xe1s cohesivas y con una \xfanica responsabilidad claramente definida. Al tener clases m\xe1s peque\xf1as y espec\xedficas, se vuelve m\xe1s f\xe1cil entender su funcionamiento y modificarlas sin afectar a otras partes del sistema."),(0,n.kt)("p",null,"Adem\xe1s, seguir el principio SRP fomenta la reutilizaci\xf3n de c\xf3digo, ya que las clases con una \xfanica responsabilidad pueden ser utilizadas en diferentes partes del sistema sin necesidad de modificaciones. Tambi\xe9n mejora la mantenibilidad del c\xf3digo, ya que si hay un error o se necesita realizar un cambio, se sabe exactamente en qu\xe9 clase buscar y c\xf3mo afectar\xe1 el cambio al resto del sistema."),(0,n.kt)("p",null,"En resumen, seguir el principio SRP mejora la calidad del c\xf3digo, lo hace m\xe1s f\xe1cil de entender, modificar y mantener, y ayuda a reducir la complejidad del sistema."),(0,n.kt)("h2",{id:"ejemplos-de-c\xf3mo-aplicar-el-principio-srp-en-el-desarrollo-de-software"},"Ejemplos de c\xf3mo aplicar el principio SRP en el desarrollo de software."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n// Clase que se encarga \xfanicamente de la l\xf3gica del carrito de compras\nclass CarritoDeCompras\n{\n    private $productos = [];\n\n    public function agregarProducto($producto)\n    {\n        $this->productos[] = $producto;\n    }\n\n    public function getTotal()\n    {\n        $total = 0;\n\n        foreach ($this->productos as $producto) {\n            $total += $producto->getPrecio();\n        }\n\n        return $total;\n    }\n}\n\n// Clase que se encarga \xfanicamente de la l\xf3gica de env\xedo de correos electr\xf3nicos\nclass CorreoElectronico\n{\n    public function enviarCorreo($destinatario, $asunto, $mensaje)\n    {\n        // C\xf3digo para enviar el correo electr\xf3nico\n    }\n}\n\n// Clase que se encarga \xfanicamente de la l\xf3gica de registro de usuarios\nclass RegistroDeUsuarios\n{\n    public function registrarUsuario($usuario)\n    {\n        // C\xf3digo para registrar al usuario\n    }\n}\n")),(0,n.kt)("p",null,"En este ejemplo, tenemos tres clases que cumplen con el principio SRP:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"CarritoDeCompras: se encarga \xfanicamente de la l\xf3gica del carrito de compras, es decir, de agregar productos y calcular el total."),(0,n.kt)("li",{parentName:"ul"},"CorreoElectronico: se encarga \xfanicamente de la l\xf3gica de env\xedo de correos electr\xf3nicos, sin preocuparse por nada m\xe1s."),(0,n.kt)("li",{parentName:"ul"},"RegistroDeUsuarios: se encarga \xfanicamente de la l\xf3gica de registro de usuarios, sin involucrarse en otras tareas.")),(0,n.kt)("p",null,"Cada clase tiene una \xfanica responsabilidad, lo que facilita su mantenimiento, extensi\xf3n y reutilizaci\xf3n en otras partes del sistema."))}u.isMDXComponent=!0}}]);