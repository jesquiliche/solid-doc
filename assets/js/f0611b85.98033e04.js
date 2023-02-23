"use strict";(self.webpackChunksolid=self.webpackChunksolid||[]).push([[848],{3905:(e,a,i)=>{i.d(a,{Zo:()=>u,kt:()=>b});var o=i(7294);function n(e,a,i){return a in e?Object.defineProperty(e,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[a]=i,e}function r(e,a){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),i.push.apply(i,o)}return i}function s(e){for(var a=1;a<arguments.length;a++){var i=null!=arguments[a]?arguments[a]:{};a%2?r(Object(i),!0).forEach((function(a){n(e,a,i[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(i,a))}))}return e}function l(e,a){if(null==e)return{};var i,o,n=function(e,a){if(null==e)return{};var i,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)i=r[o],a.indexOf(i)>=0||(n[i]=e[i]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)i=r[o],a.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var t=o.createContext({}),c=function(e){var a=o.useContext(t),i=a;return e&&(i="function"==typeof e?e(a):s(s({},a),e)),i},u=function(e){var a=c(e.components);return o.createElement(t.Provider,{value:a},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},m=o.forwardRef((function(e,a){var i=e.components,n=e.mdxType,r=e.originalType,t=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(i),m=n,b=d["".concat(t,".").concat(m)]||d[m]||p[m]||r;return i?o.createElement(b,s(s({ref:a},u),{},{components:i})):o.createElement(b,s({ref:a},u))}));function b(e,a){var i=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=i.length,s=new Array(r);s[0]=m;var l={};for(var t in a)hasOwnProperty.call(a,t)&&(l[t]=a[t]);l.originalType=e,l[d]="string"==typeof e?e:n,s[1]=l;for(var c=2;c<r;c++)s[c]=i[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,i)}m.displayName="MDXCreateElement"},2342:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>t,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=i(7462),n=(i(7294),i(3905));const r={sidebar_position:3},s="Principio de sustituci\xf3n de Liskov (LSP)",l={unversionedId:"tutorial-basics/LSP",id:"tutorial-basics/LSP",title:"Principio de sustituci\xf3n de Liskov (LSP)",description:"\xbfQu\xe9 es el principio LSP?",source:"@site/docs/tutorial-basics/04-LSP.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/LSP",permalink:"/solid-doc/docs/tutorial-basics/LSP",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/tutorial-basics/04-LSP.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Principio de abierto/cerrado (OCP)",permalink:"/solid-doc/docs/tutorial-basics/OCP"},next:{title:"Principio de segregaci\xf3n de la interfaz (ISP)",permalink:"/solid-doc/docs/tutorial-basics/ISP"}},t={},c=[{value:"\xbfQu\xe9 es el principio LSP?",id:"qu\xe9-es-el-principio-lsp",level:2},{value:"\xbfPor qu\xe9 es importante seguir el principio LSP?",id:"por-qu\xe9-es-importante-seguir-el-principio-lsp",level:2},{value:"Ejemplos de c\xf3mo aplicar el principio LSP en el desarrollo de software",id:"ejemplos-de-c\xf3mo-aplicar-el-principio-lsp-en-el-desarrollo-de-software",level:2},{value:"Patrones de dise\xf1o relacionados con el principio LSP",id:"patrones-de-dise\xf1o-relacionados-con-el-principio-lsp",level:2}],u={toc:c},d="wrapper";function p(e){let{components:a,...i}=e;return(0,n.kt)(d,(0,o.Z)({},u,i,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"principio-de-sustituci\xf3n-de-liskov-lsp"},"Principio de sustituci\xf3n de Liskov (LSP)"),(0,n.kt)("h2",{id:"qu\xe9-es-el-principio-lsp"},"\xbfQu\xe9 es el principio LSP?"),(0,n.kt)("p",null," El Principio de Sustituci\xf3n de Liskov (Liskov Substitution Principle o LSP) es un principio de dise\xf1o de software que establece que cualquier objeto de una clase hija debe poder ser sustituido por un objeto de su clase padre sin alterar el correcto funcionamiento del programa."),(0,n.kt)("p",null,"Este principio fue formulado por Barbara Liskov en 1987 y se considera uno de los cinco principios SOLID. El principio LSP se basa en la idea de que la subclasificaci\xf3n o herencia debe ser utilizada para extender o especializar el comportamiento de una clase, pero no para cambiarlo."),(0,n.kt)("p",null,"El principio LSP est\xe1 estrechamente relacionado con el principio OCP, ya que si se siguen ambos principios, se puede lograr una arquitectura de software m\xe1s modular y extensible. Al seguir el principio LSP, se evita que la subclasificaci\xf3n introduzca comportamientos inesperados o no deseados en la aplicaci\xf3n, lo que puede provocar errores dif\xedciles de detectar y corregir."),(0,n.kt)("p",null,"En resumen, el principio LSP establece que una clase hija debe ser capaz de ser utilizada en lugar de su clase padre sin afectar el comportamiento esperado del programa. De esta manera, se garantiza una mayor flexibilidad, modularidad y escalabilidad en el dise\xf1o de software."),(0,n.kt)("admonition",{title:"Ejemplo sencillo",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Imaginemos que tenemos una clase Cuadrado que hereda de una clase Rect\xe1ngulo y ambas tienen un m\xe9todo calcularArea() que devuelve el \xe1rea de la figura. Si un programa hace uso de la clase Rect\xe1ngulo y espera que su m\xe9todo calcularArea() calcule correctamente el \xe1rea, entonces se espera que lo mismo suceda cuando se utiliza la clase Cuadrado, ya que es un tipo de Rect\xe1ngulo. Pero si el m\xe9todo calcularArea() en la clase Cuadrado siempre devuelve un valor incorrecto para los cuadrados, entonces esta clase estar\xeda violando el principio LSP, ya que no se comporta como un subtipo de Rect\xe1ngulo y no puede ser utilizado como tal de manera consistente."),(0,n.kt)("p",{parentName:"admonition"},"En resumen, el principio LSP establece que las clases derivadas (subtipos) deben ser utilizables en lugar de sus clases base (supertipos) sin afectar negativamente el comportamiento del programa.")),(0,n.kt)("admonition",{title:"Como se relacione con OCP",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"El principio LSP se relaciona con el principio OCP de la siguiente manera: si un programa sigue el principio LSP, entonces tambi\xe9n seguir\xe1 el principio OCP. Esto se debe a que, si las clases derivadas pueden ser sustituidas por la clase base sin afectar el comportamiento del programa, entonces tambi\xe9n es posible extender el comportamiento de la clase base sin tener que modificar el c\xf3digo existente. Esto permite que el programa sea m\xe1s f\xe1cil de mantener y menos propenso a errores, lo cual es una de las metas principales del principio OCP.")),(0,n.kt)("h2",{id:"por-qu\xe9-es-importante-seguir-el-principio-lsp"},"\xbfPor qu\xe9 es importante seguir el principio LSP?"),(0,n.kt)("p",null,"Es importante seguir el principio de sustituci\xf3n de Liskov (LSP) porque garantiza que las clases derivadas puedan ser utilizadas como si fueran la clase base sin afectar el correcto funcionamiento del programa."),(0,n.kt)("p",null,"Al seguir el principio LSP, se asegura que las clases derivadas cumplan con las mismas expectativas y requisitos que la clase base, lo que significa que cualquier m\xe9todo que funcione en la clase base tambi\xe9n deber\xeda funcionar en las clases derivadas sin ning\xfan problema. Esto proporciona flexibilidad y extensibilidad al c\xf3digo, permitiendo agregar nuevas funcionalidades sin tener que modificar el c\xf3digo existente, lo que a su vez reduce el riesgo de errores y problemas en el futuro."),(0,n.kt)("p",null,"Adem\xe1s, el cumplimiento del principio LSP tambi\xe9n promueve la reutilizaci\xf3n de c\xf3digo, ya que al dise\xf1ar clases derivadas de manera que cumplan con las mismas expectativas y requisitos que la clase base, se pueden utilizar estas clases derivadas en lugar de la clase base en diferentes partes del c\xf3digo, lo que reduce la cantidad de c\xf3digo duplicado y mejora la mantenibilidad del c\xf3digo."),(0,n.kt)("h2",{id:"ejemplos-de-c\xf3mo-aplicar-el-principio-lsp-en-el-desarrollo-de-software"},"Ejemplos de c\xf3mo aplicar el principio LSP en el desarrollo de software"),(0,n.kt)("p",null,"Supongamos que tenemos una clase Animal con un m\xe9todo hacerSonido(), que es llamado por otra clase Jaula que contiene varios animales. Adem\xe1s, tenemos dos subclases de Animal: Gato y Perro."),(0,n.kt)("p",null,"Si seguimos el principio LSP, ambas subclases deber\xedan ser capaces de ser utilizadas de manera intercambiable en cualquier lugar donde se espera una instancia de Animal. Esto significa que deben tener el mismo comportamiento esperado y no alterar el funcionamiento de las clases base."),(0,n.kt)("p",null,"Por ejemplo, si la clase Jaula espera que todos los animales hagan un sonido cuando se llama al m\xe9todo hacerSonido(), entonces tanto Gato como Perro deben implementar este m\xe9todo de la misma manera y producir un sonido adecuado."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"class Animal {\n    public function hacerSonido() {\n        // Hacer sonido gen\xe9rico de animal\n    }\n}\n\nclass Gato extends Animal {\n    public function hacerSonido() {\n        // Hacer sonido de gato\n    }\n}\n\nclass Perro extends Animal {\n    public function hacerSonido() {\n        // Hacer sonido de perro\n    }\n}\n\nclass Jaula {\n    private $animales = [];\n\n    public function agregarAnimal(Animal $animal) {\n        $this->animales[] = $animal;\n    }\n\n    public function hacerSonidos() {\n        foreach ($this->animales as $animal) {\n            $animal->hacerSonido();\n        }\n    }\n}\n\n$jaula = new Jaula();\n$jaula->agregarAnimal(new Gato());\n$jaula->agregarAnimal(new Perro());\n$jaula->hacerSonidos();\n")),(0,n.kt)("p",null,"En este ejemplo, tanto Gato como Perro extienden la clase Animal y sobrescriben el m\xe9todo hacerSonido() para producir diferentes sonidos. La clase Jaula espera que todos los animales tengan un m\xe9todo hacerSonido() para que pueda llamar a este m\xe9todo en todos los animales de la jaula de manera intercambiable."),(0,n.kt)("p",null,"Al seguir el principio LSP, podemos estar seguros de que las subclases Gato y Perro se comportar\xe1n como Animal y no causar\xe1n problemas en la clase Jaula. Adem\xe1s, si queremos agregar m\xe1s subclases de Animal en el futuro, podemos hacerlo sin modificar la clase Jaula ya que las subclases implementar\xe1n el mismo m\xe9todo hacerSonido() de la clase base Animal."),(0,n.kt)("h2",{id:"patrones-de-dise\xf1o-relacionados-con-el-principio-lsp"},"Patrones de dise\xf1o relacionados con el principio LSP"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Template Method (M\xe9todo de plantilla)"),(0,n.kt)("li",{parentName:"ul"},"Strategy (Estrategia)"),(0,n.kt)("li",{parentName:"ul"},"Bridge (Puente)"),(0,n.kt)("li",{parentName:"ul"},"Decorator (Decorador)"),(0,n.kt)("li",{parentName:"ul"},"Adapter (Adaptador)"),(0,n.kt)("li",{parentName:"ul"},"Composite (Composici\xf3n)"),(0,n.kt)("li",{parentName:"ul"},"Iterator (Iterador)"),(0,n.kt)("li",{parentName:"ul"},"Proxy (Proxy)")))}p.isMDXComponent=!0}}]);