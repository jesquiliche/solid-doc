"use strict";(self.webpackChunksolid=self.webpackChunksolid||[]).push([[314],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>f});var i=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,i)}return a}function t(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,i,r=function(e,n){if(null==e)return{};var a,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=i.createContext({}),c=function(e){var n=i.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):t(t({},n),e)),a},p=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return a?i.createElement(f,t(t({ref:n},p),{},{components:a})):i.createElement(f,t({ref:n},p))}));function f(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,t=new Array(o);t[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:r,t[1]=s;for(var c=2;c<o;c++)t[c]=a[c];return i.createElement.apply(null,t)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},447:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=a(7462),r=(a(7294),a(3905));const o={sidebar_position:4},t="Principio de segregaci\xf3n de la interfaz (ISP)",s={unversionedId:"tutorial-basics/ISP",id:"tutorial-basics/ISP",title:"Principio de segregaci\xf3n de la interfaz (ISP)",description:"\xbfQu\xe9 es el principio ISP?",source:"@site/docs/tutorial-basics/05-ISP.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/ISP",permalink:"/solid-doc/docs/tutorial-basics/ISP",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/tutorial-basics/05-ISP.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Principio de sustituci\xf3n de Liskov (LSP)",permalink:"/solid-doc/docs/tutorial-basics/LSP"},next:{title:"Principio de inversi\xf3n de dependencia (DIP)",permalink:"/solid-doc/docs/tutorial-basics/DIP"}},l={},c=[{value:"\xbfQu\xe9 es el principio ISP?",id:"qu\xe9-es-el-principio-isp",level:2},{value:"\xbfPor qu\xe9 es importante seguir el principio ISP?",id:"por-qu\xe9-es-importante-seguir-el-principio-isp",level:2},{value:"Ejemplos de c\xf3mo aplicar el principio ISP en el desarrollo de software",id:"ejemplos-de-c\xf3mo-aplicar-el-principio-isp-en-el-desarrollo-de-software",level:2},{value:"Patrones de dise\xf1o relacionados con el principio ISP",id:"patrones-de-dise\xf1o-relacionados-con-el-principio-isp",level:2}],p={toc:c},u="wrapper";function d(e){let{components:n,...a}=e;return(0,r.kt)(u,(0,i.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"principio-de-segregaci\xf3n-de-la-interfaz-isp"},"Principio de segregaci\xf3n de la interfaz (ISP)"),(0,r.kt)("h2",{id:"qu\xe9-es-el-principio-isp"},"\xbfQu\xe9 es el principio ISP?"),(0,r.kt)("p",null,"El principio ISP (Interface Segregation Principle, o principio de segregaci\xf3n de interfaces en espa\xf1ol) es uno de los cinco principios SOLID y establece que una clase no debe depender de interfaces que no utiliza."),(0,r.kt)("p",null,"En otras palabras, una clase no debe ser forzada a implementar m\xe9todos que no necesita simplemente porque su interfaz lo exige. En lugar de eso, se deben dividir las interfaces en grupos m\xe1s peque\xf1os y cohesivos, de manera que las clases s\xf3lo implementen las interfaces que necesitan."),(0,r.kt)("p",null,"Esto tiene varias ventajas, como una mayor modularidad y flexibilidad en el dise\xf1o, una menor cantidad de c\xf3digo duplicado y una mayor facilidad para hacer cambios en el futuro sin afectar a otras partes del sistema."),(0,r.kt)("p",null,"En resumen, el principio ISP promueve la creaci\xf3n de interfaces espec\xedficas y cohesivas, y evita que las clases dependan de interfaces que no necesitan."),(0,r.kt)("admonition",{title:"Ejemplo sencillo",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Supongamos que tenemos una interfaz IMotorVehicle que representa un veh\xedculo con motor. Esta interfaz tiene m\xe9todos como acelerar(), frenar(), encender() y apagar(). Ahora supongamos que queremos implementar esta interfaz en una clase Bicicleta, pero nos damos cuenta de que los m\xe9todos acelerar() y frenar() no tienen sentido para una bicicleta sin motor."),(0,r.kt)("p",{parentName:"admonition"},"En lugar de implementar m\xe9todos innecesarios, podemos dividir la interfaz IMotorVehicle en dos interfaces m\xe1s peque\xf1as: IMotorVehicle y INonMotorVehicle. IMotorVehicle incluir\xeda los m\xe9todos encender() y apagar(), mientras que INonMotorVehicle incluir\xeda los m\xe9todos acelerar() y frenar(). De esta manera, las clases que no tienen un motor no tendr\xe1n que preocuparse por implementar m\xe9todos que no son relevantes para ellas."),(0,r.kt)("p",{parentName:"admonition"},"En resumen, el principio ISP establece que es mejor tener interfaces m\xe1s peque\xf1as y espec\xedficas en lugar de tener una \xfanica interfaz grande y compleja. De esta manera, las clases que implementen una interfaz solo tendr\xe1n que preocuparse por los m\xe9todos que sean relevantes para ellas.")),(0,r.kt)("h2",{id:"por-qu\xe9-es-importante-seguir-el-principio-isp"},"\xbfPor qu\xe9 es importante seguir el principio ISP?"),(0,r.kt)("p",null,"El principio ISP (Interface Segregation Principle) es importante porque ayuda a garantizar que las interfaces de los objetos sean cohesivas y espec\xedficas para las necesidades de los clientes que las usan. Si una interfaz es demasiado grande y tiene demasiados m\xe9todos, los clientes pueden verse obligados a implementar m\xe9todos que no necesitan o no usan, lo que resulta en un c\xf3digo innecesariamente complejo e inflexible."),(0,r.kt)("p",null,"Al seguir el principio ISP, las interfaces se dividen en partes m\xe1s peque\xf1as y cohesivas, lo que permite que los clientes usen solo las partes de la interfaz que necesitan. Esto puede resultar en c\xf3digo m\xe1s claro y f\xe1cil de mantener, y puede permitir que los objetos sean m\xe1s f\xe1cilmente reutilizables en diferentes contextos. En general, seguir el principio ISP puede ayudar a mejorar la modularidad y la flexibilidad del c\xf3digo."),(0,r.kt)("h2",{id:"ejemplos-de-c\xf3mo-aplicar-el-principio-isp-en-el-desarrollo-de-software"},"Ejemplos de c\xf3mo aplicar el principio ISP en el desarrollo de software"),(0,r.kt)("p",null,"Supongamos que tenemos una interfaz OrderInterface para procesar \xf3rdenes de compra. Sin embargo, no todas las \xf3rdenes tienen los mismos m\xe9todos o atributos, por lo que la interfaz se vuelve muy grande y compleja. Para aplicar el principio ISP, podemos separar la interfaz en interfaces m\xe1s peque\xf1as y especializadas, para que cada clase que implemente la interfaz solo implemente los m\xe9todos que necesita."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"interface OrderInterface\n{\n    public function processOrder();\n    public function cancelOrder();\n    public function shipOrder();\n    public function calculateTotal();\n    public function sendConfirmationEmail();\n}\n\ninterface ShippingInterface\n{\n    public function shipOrder();\n}\n\ninterface EmailInterface\n{\n    public function sendConfirmationEmail();\n}\n\nclass Order implements OrderInterface, ShippingInterface, EmailInterface\n{\n    public function processOrder()\n    {\n        // l\xf3gica para procesar la orden\n    }\n\n    public function cancelOrder()\n    {\n        // l\xf3gica para cancelar la orden\n    }\n\n    public function shipOrder()\n    {\n        // l\xf3gica para enviar la orden\n    }\n\n    public function calculateTotal()\n    {\n        // l\xf3gica para calcular el total de la orden\n    }\n\n    public function sendConfirmationEmail()\n    {\n        // l\xf3gica para enviar el correo electr\xf3nico de confirmaci\xf3n\n    }\n}\n")),(0,r.kt)("p",null,"En este ejemplo, separamos la interfaz OrderInterface en dos interfaces m\xe1s especializadas: ShippingInterface y EmailInterface. Luego, creamos la clase Order que implementa estas dos interfaces y solo implementa los m\xe9todos que necesita. De esta manera, cumplimos con el principio ISP, ya que cada clase implementa solo lo que necesita y no est\xe1 obligada a implementar m\xe9todos que no utiliza."),(0,r.kt)("h2",{id:"patrones-de-dise\xf1o-relacionados-con-el-principio-isp"},"Patrones de dise\xf1o relacionados con el principio ISP"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Interfaz segregada (Interface Segregation)"),(0,r.kt)("li",{parentName:"ul"},"Adaptador (Adapter)"),(0,r.kt)("li",{parentName:"ul"},"Puente (Bridge)"),(0,r.kt)("li",{parentName:"ul"},"Decorador (Decorator)"),(0,r.kt)("li",{parentName:"ul"},"Fachada (Facade)"),(0,r.kt)("li",{parentName:"ul"},"Proxy (Proxy)")))}d.isMDXComponent=!0}}]);