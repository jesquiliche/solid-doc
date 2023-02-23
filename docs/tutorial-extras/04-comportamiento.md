---
sidebar_position: 4
---

# Patrones de diseño de comportamiento

## ¿Qué son los patrones de diseño de compartamiento?

Los patrones de comportamiento son un conjunto de patrones de diseño que se utilizan para resolver problemas relacionados con la comunicación y el comportamiento entre objetos en un sistema. Estos patrones se centran en la forma en que los objetos interactúan entre sí y en cómo se distribuyen las responsabilidades entre ellos.

Algunos ejemplos de patrones de comportamiento son:

Patrón Observer: Este patrón se utiliza cuando se necesita notificar a varios objetos sobre un cambio en el estado de un objeto. El patrón Observer define una relación de uno a muchos entre los objetos, de modo que cuando el objeto cambia su estado, todos los objetos registrados son notificados y actualizados automáticamente.

Patrón Strategy: Este patrón se utiliza cuando se necesita cambiar dinámicamente el algoritmo utilizado por un objeto en tiempo de ejecución. El patrón Strategy permite encapsular diferentes algoritmos en clases separadas y permitir que el objeto utilice uno u otro en función de la situación.

Patrón Command: Este patrón se utiliza cuando se necesita encapsular una solicitud como un objeto, permitiendo la parametrización de los clientes con diferentes solicitudes y la ejecución de diferentes comandos en diferentes momentos. El patrón Command separa la responsabilidad de solicitar una acción de la implementación real de la acción.

Patrón Chain of Responsibility: Este patrón se utiliza cuando se necesita procesar una solicitud a través de una cadena de objetos que tienen la posibilidad de manejarla. El patrón Chain of Responsibility establece una cadena de objetos, donde cada objeto tiene la oportunidad de manejar la solicitud o pasarla al siguiente objeto de la cadena.

Patrón Template Method: Este patrón se utiliza cuando se necesita definir un algoritmo en una clase base, pero permitir que las subclases proporcionen implementaciones específicas de algunos pasos. El patrón Template Method define una estructura de algoritmo en una clase base y permite que las subclases redefinan o extiendan partes específicas del algoritmo.

Patrón Interpreter: Este patrón se utiliza cuando se necesita interpretar y ejecutar un lenguaje de expresiones. El patrón Interpreter define una gramática para el lenguaje de expresiones y proporciona una clase intérprete que utiliza la gramática para interpretar y ejecutar las expresiones.

Estos son solo algunos ejemplos de patrones de comportamiento que se utilizan en el diseño de sistemas orientados a objetos. Cada patrón tiene sus propias ventajas y desventajas y debe evaluarse cuidadosamente antes de aplicarlo en una situación determinada.

| Patrón de Comportamiento | Descripción |
| ------------------------| ----------- |
| Observer | Define una relación uno a muchos entre objetos, de modo que cuando un objeto cambia su estado, todos los objetos registrados son notificados y actualizados automáticamente. |
| Strategy | Permite cambiar dinámicamente el algoritmo utilizado por un objeto en tiempo de ejecución. |
| Command | Encapsula una solicitud como un objeto, permitiendo la parametrización de los clientes con diferentes solicitudes y la ejecución de diferentes comandos en diferentes momentos. |
| Chain of Responsibility | Procesa una solicitud a través de una cadena de objetos que tienen la posibilidad de manejarla. |
| Template Method | Define una estructura de algoritmo en una clase base y permite que las subclases redefinan o extiendan partes específicas del algoritmo. |
| State | Permite a un objeto cambiar su comportamiento cuando su estado interno cambia. |
| Iterator | Proporciona una forma de acceder secuencialmente a los elementos de una colección sin exponer su representación subyacente. |
| Mediator | Define un objeto que encapsula la forma en que los objetos interactúan entre sí, promoviendo el bajo acoplamiento y la independencia entre ellos. |
| Memento | Permite capturar y restaurar el estado interno de un objeto sin violar el principio de encapsulamiento. |
| Visitor | Permite definir una nueva operación sin cambiar las clases de los objetos sobre los que opera. |
| Null Object | Provee un objeto "nulo" que actúa como sustituto de otro objeto que no está disponible o que no existe. |

### Observer

El patrón Observer es un patrón de diseño de comportamiento que se utiliza cuando se desea establecer una relación uno a muchos entre objetos. El patrón Observer define un objeto (llamado sujeto) que mantiene una lista de suscriptores (observadores) y notifica automáticamente a todos los observadores cuando cambia su estado.

El patrón Observer consta de los siguientes elementos:

Sujeto: Es el objeto que mantiene una lista de observadores y notifica automáticamente a todos los observadores cuando su estado cambia.
Observador: Es una interfaz que define el método de actualización, que se llama cuando el sujeto notifica a los observadores sobre un cambio de estado.
Observadores concretos: Son objetos que implementan la interfaz Observador y se registran para recibir notificaciones del sujeto.
Aquí hay un ejemplo de código en PHP que ilustra cómo implementar el patrón Observer:

```js
// Definir la interfaz Observador
interface Observador {
    public function actualizar(Sujeto $sujeto);
}

// Definir la clase Sujeto
class Sujeto {
    private $observadores = array();
    private $estado;

    public function agregarObservador(Observador $observador) {
        $this->observadores[] = $observador;
    }

    public function eliminarObservador(Observador $observador) {
        $index = array_search($observador, $this->observadores);
        if ($index !== false) {
            unset($this->observadores[$index]);
        }
    }

    public function notificarObservadores() {
        foreach ($this->observadores as $observador) {
            $observador->actualizar($this);
        }
    }

    public function setEstado($estado) {
        $this->estado = $estado;
        $this->notificarObservadores();
    }

    public function getEstado() {
        return $this->estado;
    }
}

// Definir una clase Observador concreta
class ObservadorConcreto implements Observador {
    private $nombre;

    public function __construct($nombre) {
        $this->nombre = $nombre;
    }

    public function actualizar(Sujeto $sujeto) {
        echo "Observador {$this->nombre} ha sido notificado. El nuevo estado del sujeto es: {$sujeto->getEstado()}<br>";
    }
}

// Uso del patrón Observer
$sujeto = new Sujeto();

$observador1 = new ObservadorConcreto("Observador 1");
$observador2 = new ObservadorConcreto("Observador 2");

$sujeto->agregarObservador($observador1);
$sujeto->agregarObservador($observador2);

$sujeto->setEstado("estado 1");

$sujeto->eliminarObservador($observador2);

$sujeto->setEstado("estado 2");
```

En este ejemplo, la clase **Sujeto** mantiene una lista de **observadores** y notifica a todos los observadores registrados cuando su estado cambia mediante el método **notificarObservadores()**. Los observadores concretos, en este caso **ObservadorConcreto**, implementan la interfaz Observador y se registran en el sujeto mediante el método **agregarObservador()**. Cuando el estado del sujeto cambia, los observadores son notificados automáticamente y se les llama al método **actualizar()**. En este método, los observadores concretos realizan las operaciones necesarias con la información actualizada del sujeto.

En este ejemplo, se crean dos observadores concretos y se registran en el sujeto. Luego se cambia el estado del sujeto y se notifica automáticamente a los observadores registrados. Después, se elimina uno de los observadores y se cambia el estado del sujeto nuevamente, pero solo se notifica al observador que sigue registrado.

Este ejemplo muestra cómo el patrón Observer se puede utilizar para implementar la comunicación entre objetos de una manera eficiente y flexible.

#### Desventajas de Observer

Aunque el patrón Observer tiene muchas ventajas, también tiene algunas desventajas que es importante tener en cuenta:

1. Acoplamiento excesivo: El patrón Observer puede llevar a un acoplamiento excesivo entre el sujeto y los observadores. Los observadores pueden depender demasiado del sujeto, lo que puede hacer que sea difícil reutilizarlos en otros contextos.

2. Actualizaciones innecesarias: A veces, los observadores pueden recibir actualizaciones innecesarias del sujeto, lo que puede hacer que el sistema sea menos eficiente. Esto puede ser especialmente problemático si el sujeto tiene muchos observadores.

3. Orden de actualización: El orden en que se actualizan los observadores puede ser importante en algunos casos. Si el orden no se maneja adecuadamente, puede llevar a errores o comportamientos inesperados en el sistema.

4. Complejidad: La implementación del patrón Observer puede ser compleja en algunos casos, especialmente si el sistema tiene muchos sujetos y observadores. Esto puede hacer que el código sea más difícil de entender y mantener.

Es importante tener en cuenta estas desventajas al decidir si el patrón Observer es apropiado para un sistema en particular. En algunos casos, el patrón Observer puede ser la mejor opción, pero en otros casos, puede haber patrones más apropiados o soluciones alternativas.

#### Test

1. ***¿Qué es el patrón Observer?***
- a) Un patrón creacional.
- b) Un patrón estructural.
- c) Un patrón de comportamiento.

2. ***¿Cuál es el propósito del patrón Observer?***
- a) Permitir que los objetos cambien su comportamiento en tiempo de ejecución.
- b) Permitir que los objetos creen otros objetos.
- c) Permitir que los objetos notifiquen a otros objetos sobre cambios en su estado.

3.***¿Cuáles son los elementos principales del patrón Observer?***
- a) Sujeto, observador y mensaje.
- b) Sujeto, observador y notificación.
- c) Sujeto, observador y actualización.

4. ***¿Qué ventaja proporciona el patrón Observer?***
- a) Reduce el acoplamiento entre objetos.
- b) Permite que los objetos creen otros objetos de manera flexible.
- c) Aumenta la complejidad del código.

5. ***¿Cuál es una desventaja del patrón Observer?***
- a) Puede causar actualizaciones innecesarias.
- b) No proporciona un mecanismo para que los objetos cambien su comportamiento en tiempo de ejecución.
- c) No tiene elementos principales claramente definidos.

Respuestas:

1. c) Un patrón de comportamiento.
2. c) Permitir que los objetos notifiquen a otros objetos sobre cambios en su estado.
3. b) Sujeto, observador y notificación.
4. a) Reduce el acoplamiento entre objetos.
5. a) Puede causar actualizaciones innecesarias.

### Strategy

El patrón de diseño Strategy es especialmente útil cuando se trabaja con algoritmos que tienen diferentes variaciones o formas de implementación. En lugar de tener que codificar todas estas variaciones en una única clase, se puede separar la implementación del algoritmo en diferentes clases que implementan una interfaz común.

Esto permite que el cliente (el objeto que utiliza el algoritmo) pueda seleccionar dinámicamente qué implementación de la estrategia utilizar en tiempo de ejecución, lo que proporciona una mayor flexibilidad en el diseño del software.

Por ejemplo, si se tiene una aplicación de comercio electrónico que necesita calcular los precios de envío, se pueden implementar diferentes estrategias para el cálculo de los precios de envío, como cálculo basado en peso, cálculo basado en distancia, o cálculo basado en tiempo de entrega. Cada estrategia se implementaría en su propia clase que implementa la misma interfaz común, y el cliente (por ejemplo, el proceso de checkout) puede seleccionar la estrategia adecuada en tiempo de ejecución.

El patrón de diseño Strategy también ayuda a mantener el principio de responsabilidad única, ya que cada clase de estrategia se centra en una única variación del algoritmo, lo que facilita la comprensión, mantenimiento y extensión del código.

En resumen, el patrón de diseño Strategy proporciona una forma flexible y escalable de implementar diferentes variaciones de un algoritmo en una aplicación, permitiendo que el cliente seleccione dinámicamente la estrategia adecuada en tiempo de ejecución.

#### Desventajas de Strategy

Aunque el patrón de diseño Strategy tiene varias ventajas, también presenta algunas desventajas a considerar:

Aumento de complejidad: la implementación del patrón Strategy puede aumentar la complejidad del código, ya que se requiere la creación de múltiples clases para implementar cada variación del algoritmo.

Aumento de consumo de memoria: dado que cada estrategia es una clase separada, la implementación del patrón Strategy puede aumentar el consumo de memoria del sistema.

Mayor dificultad de comprensión: la implementación del patrón Strategy puede dificultar la comprensión del código para desarrolladores que no están familiarizados con el patrón.

Aumento de la cantidad de código: se requiere la creación de varias clases para implementar cada variación del algoritmo, lo que puede aumentar la cantidad de código en la aplicación.

Mayor dificultad para la creación de nuevas estrategias: la creación de nuevas estrategias puede ser más difícil que la implementación de una única clase con un algoritmo, ya que se requiere la creación de una nueva clase que implemente la interfaz de la estrategia.

En general, el patrón de diseño Strategy puede ser una buena opción en situaciones en las que se necesita flexibilidad para cambiar el comportamiento del sistema, pero se debe tener en cuenta que puede aumentar la complejidad y el consumo de recursos de la aplicación.

##### Ejemplo de desarrollo

En este ejemplo, tendremos diferentes estrategias para calcular descuentos en función del tipo de cliente: cliente regular, cliente leal y cliente VIP.

Primero, crearemos la interfaz común para todas las estrategias:

```js
interface DiscountStrategy {
    public function calculateDiscount($amount): float;
}
```

Luego, crearemos las implementaciones concretas de la estrategia, que son las diferentes formas en que se puede calcular el descuento.

php
Copy code
class RegularCustomerDiscount implements DiscountStrategy {
    public function calculateDiscount($amount): float {
        // Calcular descuento para cliente regular
        return $amount * 0.05;
    }
}

class LoyalCustomerDiscount implements DiscountStrategy {
    public function calculateDiscount($amount): float {
        // Calcular descuento para cliente leal
        return $amount * 0.10;
    }
}

class VIPCustomerDiscount implements DiscountStrategy {
    public function calculateDiscount($amount): float {
        // Calcular descuento para cliente VIP
        return $amount * 0.15;
    }
}
Por último, crearemos el contexto, que es el objeto que utilizará una estrategia para calcular el descuento:

php
Copy code
class ShoppingCart {
    private $discountStrategy;
    
    public function __construct(DiscountStrategy $discountStrategy) {
        $this->discountStrategy = $discountStrategy;
    }
    
    public function setDiscountStrategy(DiscountStrategy $discountStrategy) {
        $this->discountStrategy = $discountStrategy;
    }
    
    public function calculateDiscount($amount): float {
        return $this->discountStrategy->calculateDiscount($amount);
    }
}
En este ejemplo, el contexto es la clase ShoppingCart, que tiene una propiedad discountStrategy que apunta a una instancia de la estrategia seleccionada. La clase ShoppingCart tiene un método calculateDiscount que toma el monto total de la compra y utiliza la estrategia seleccionada para calcular el descuento.

Para utilizar este patrón, se puede crear una instancia de la clase ShoppingCart y establecer la estrategia de descuento deseada:

php
Copy code
$amount = 100;
$cart = new ShoppingCart(new RegularCustomerDiscount());
$discount = $cart->calculateDiscount($amount);
En este ejemplo, se está utilizando la estrategia RegularCustomerDiscount para calcular el descuento, pero se puede cambiar la estrategia dinámicamente en tiempo de ejecución utilizando el método setDiscountStrategy.

```js
class RegularCustomerDiscount implements DiscountStrategy {
    public function calculateDiscount($amount): float {
        // Calcular descuento para cliente regular
        return $amount * 0.05;
    }
}

class LoyalCustomerDiscount implements DiscountStrategy {
    public function calculateDiscount($amount): float {
        // Calcular descuento para cliente leal
        return $amount * 0.10;
    }
}

class VIPCustomerDiscount implements DiscountStrategy {
    public function calculateDiscount($amount): float {
        // Calcular descuento para cliente VIP
        return $amount * 0.15;
    }
}
```
Por último, crearemos el contexto, que es el objeto que utilizará una estrategia para calcular el descuento:

```js
class ShoppingCart {
    private $discountStrategy;
    
    public function __construct(DiscountStrategy $discountStrategy) {
        $this->discountStrategy = $discountStrategy;
    }
    
    public function setDiscountStrategy(DiscountStrategy $discountStrategy) {
        $this->discountStrategy = $discountStrategy;
    }
    
    public function calculateDiscount($amount): float {
        return $this->discountStrategy->calculateDiscount($amount);
    }
}
```

En este ejemplo, el contexto es la clase ShoppingCart, que tiene una propiedad discountStrategy que apunta a una instancia de la estrategia seleccionada. La clase ShoppingCart tiene un método calculateDiscount que toma el monto total de la compra y utiliza la estrategia seleccionada para calcular el descuento.

Para utilizar este patrón, se puede crear una instancia de la clase ShoppingCart y establecer la estrategia de descuento deseada:

```js
$amount = 100;
$cart = new ShoppingCart(new RegularCustomerDiscount());
$discount = $cart->calculateDiscount($amount);
```

En este ejemplo, se está utilizando la estrategia ***RegularCustomerDiscount** para calcular el descuento, pero se puede cambiar la estrategia dinámicamente en tiempo de ejecución utilizando el método **setDiscountStrategy.**

#### Test

1. ***¿Qué problema resuelve el patrón de diseño Strategy?***
- a) Permite definir un conjunto de algoritmos y encapsular cada uno de ellos dentro de un objeto separado.
- b) Proporciona una forma de ocultar la complejidad de un objeto detrás de una interfaz simple y consistente.
- c) Permite crear objetos sin especificar la clase exacta que se va a utilizar.
- Respuesta: a)

2. ***¿Cuál es el principal beneficio de usar el patrón de diseño Strategy?***
- a) Proporciona una estructura clara y fácil de mantener.
- b) Permite una mayor reutilización de código.
- c) Reduce la complejidad y aumenta la flexibilidad del código.
- Respuesta: c)

3. ***¿Qué elementos participan en el patrón de diseño Strategy?***
- a) Contexto, estrategias y clientes.
- b) Contexto, estrategias y adaptadores.
- c) Contexto, estrategias y observadores.
- Respuesta: a)

4. ***¿Cuál es la función de la interfaz en el patrón de diseño Strategy?***
- a) Define los métodos que serán implementados por las diferentes estrategias.
- b) Define los métodos que serán utilizados por el cliente.
- c) Define los métodos que serán utilizados por el contexto.
- Respuesta: a)

5. ***¿Cuándo es apropiado utilizar el patrón de diseño Strategy?***
- a) Cuando se desea proporcionar múltiples variantes de un algoritmo o comportamiento.
- b) Cuando se desea ocultar la complejidad de un objeto detrás de una interfaz simple y consistente.
- c) Cuando se desea crear objetos sin especificar la clase exacta que se va a utilizar.
- Respuesta: a)

### Command

El patrón de diseño Command es un patrón de diseño de software que se utiliza para encapsular una solicitud como un objeto, lo que permite que se puedan parametrizar diferentes solicitudes, encolar o registrar solicitudes y apoyar operaciones reversibles. En este patrón, se separa la solicitud del objeto que la realiza y se encapsula la solicitud en un objeto de comando. El objeto de comando encapsula tanto la solicitud como su información de contexto, y el objeto receptor, que es el responsable de llevar a cabo la operación, se invoca a través de una única interfaz común. Esto permite que se puedan encolar diferentes comandos, deshacer y rehacer las operaciones realizadas por el comando y proporciona una gran flexibilidad y extensibilidad al diseño.

El patrón Command se compone de cuatro componentes principales: el objeto receptor, que realiza la operación, el objeto comando, que encapsula la solicitud y su contexto, el invocador, que maneja los comandos y los ejecuta y el cliente, que crea los objetos comandos y los pasa al invocador para que los ejecute. Este patrón se utiliza a menudo en aplicaciones donde se necesitan operaciones reversibles, como editores de texto, sistemas de gestión de transacciones y procesadores de comandos de voz.

#### Desventajas de Command

Si bien el patrón de diseño Command tiene varias ventajas, también tiene algunas desventajas que se deben tener en cuenta al aplicar este patrón en un diseño de software:

1. Complejidad: El patrón Command puede aumentar la complejidad del código, ya que implica la creación de muchos objetos adicionales, lo que puede dificultar la comprensión y el mantenimiento del código.

2. Sobrecarga de memoria: Debido a que se crean muchos objetos adicionales para implementar el patrón Command, puede haber una sobrecarga de memoria en el sistema, lo que puede tener un impacto en el rendimiento.

3. Dificultad para mantener el historial de comandos: Mantener el historial de comandos en una aplicación que utiliza el patrón Command puede ser difícil, especialmente si se trata de comandos complejos o si el historial es muy largo.

4. Problemas de seguridad: El patrón Command puede introducir problemas de seguridad, ya que los comandos pueden ser manipulados si no se toman medidas adecuadas para protegerlos.

En general, el patrón Command puede ser útil en muchos casos, pero es importante evaluar cuidadosamente las ventajas y desventajas antes de aplicarlo en un diseño de software específico.

#### Ejemplo de desarrollo Command

```js
// Interfaz para el objeto receptor
interface Editor {
    public function escribir(string $texto): void;
    public function borrar(): void;
}

// Clase que implementa la interfaz Receptor
class EditorConcreto implements Editor {
    private $texto = '';

    public function escribir(string $texto): void {
        $this->texto .= $texto;
        echo "Texto agregado: {$texto}\n";
    }

    public function borrar(): void {
        $borrado = substr($this->texto, -1);
        $this->texto = substr($this->texto, 0, -1);
        echo "Texto borrado: {$borrado}\n";
    }

    public function getTexto(): string {
        return $this->texto;
    }
}

// Interfaz para el objeto comando
interface Comando {
    public function ejecutar(): void;
    public function deshacer(): void;
}

// Clase que implementa la interfaz Comando
class ComandoEscribir implements Comando {
    private $editor;
    private $texto;

    public function __construct(Editor $editor, string $texto) {
        $this->editor = $editor;
        $this->texto = $texto;
    }

    public function ejecutar(): void {
        $this->editor->escribir($this->texto);
    }

    public function deshacer(): void {
        $textoBorrado = substr($this->texto, -strlen($this->texto));
        $this->editor->borrar();
        echo "Texto deshecho: {$textoBorrado}\n";
    }
}

class ComandoBorrar implements Comando {
    private $editor;

    public function __construct(Editor $editor) {
        $this->editor = $editor;
    }

    public function ejecutar(): void {
        $this->editor->borrar();
    }

    public function deshacer(): void {
        // No se puede deshacer el borrado
    }
}

// Ejemplo de uso
$editor = new EditorConcreto();
$comando1 = new ComandoEscribir($editor, "Hola");
$comando2 = new ComandoEscribir($editor, " mundo");
$comando3 = new ComandoBorrar($editor);

$invocador = new Invocador();

$invocador->setComando($comando1);
$invocador->ejecutarComando();

$invocador->setComando($comando2);
$invocador->ejecutarComando();

$invocador->setComando($comando3);
$invocador->ejecutarComando();

echo "Texto final: {$editor->getTexto()}\n";
$invocador->deshacerComando();
echo "Texto después de deshacer: {$editor->getTexto()}\n";
```

En este ejemplo, la interfaz **Editor** define las operaciones que se pueden realizar en un editor de texto, que en este caso se implementan en la clase **EditorConcreto**. La interfaz **Comando** define una operación que se puede ejecutar y deshacer, y se implementa en las clases **ComandoEscribir** y **ComandoBorrar**. La clase Invocador maneja los comandos y permite ejecutarlos y deshacerlos.

En este ejemplo se crean tres comandos: uno para escribir "Hola", otro para escribir "mundo" y otro para borrar el último caracter. Luego, se utilizan los comandos para escribir "Hola mundo" y borrar el último caracter, y se imprime el texto resultante. Finalmente, se deshace el último comando (el borrado) y se imprime el texto resultante después de deshacer.

Este es solo un ejemplo básico, pero el patrón Command se puede aplicar a una amplia variedad de situaciones en las que se requiere una separación clara entre el código que realiza la acción y el código que la controla.

#### Test

1. ***¿Qué elementos principales intervienen en el patrón Command?***
- a) El receptor, el invocador y el cliente
- b) El receptor, el invocador y el comando
- c) El invocador, el cliente y el comando
- d) El cliente, el comando y el receptor

2. ***¿Qué función tiene el objeto invocador en el patrón Command?***
- a) Ejecutar los comandos solicitados por el cliente
- b) Almacenar una lista de comandos ejecutados para poder deshacerlos
- c) Crear y destruir los objetos comando
- d) Realizar la acción deseada por el cliente

3. ***¿Qué función tiene el objeto comando en el patrón Command?***
- a) Realizar la acción deseada por el cliente
- b) Almacenar una lista de comandos ejecutados para poder deshacerlos
- c) Crear y destruir los objetos comando
- d) Ejecutar los comandos solicitados por el cliente

4. ***¿En qué tipo de situaciones es útil el patrón Command?***
-a) Cuando se necesita encapsular la lógica de una acción en un objeto independiente
- b) Cuando se quiere aumentar la complejidad de un sistema
- c) Cuando se quiere evitar la creación de muchos objetos
- d) Cuando se quiere mejorar el rendimiento de una aplicación

5. ***¿Qué ventaja ofrece el patrón Command para la gestión de errores?***
- a) Permite encapsular la lógica de recuperación de errores en el objeto comando
- b) Facilita la propagación de errores en la aplicación
- c) Reduce el número de errores en la aplicación
- d) No tiene relación directa con la gestión de errores

Respuestas:

1. b) El receptor, el invocador y el comando
2. a) Ejecutar los comandos solicitados por el cliente
3. a) Realizar la acción deseada por el cliente
4. a) Cuando se necesita encapsular la lógica de una acción en un objeto independiente
5. a) Permite encapsular la lógica de recuperación de errores en el objeto comando

### Chain of Responsibility

El patrón de diseño Chain of Responsibility, o Cadena de Responsabilidad en español, es un patrón comportamental que permite construir una cadena de objetos que se encargan de manejar una petición en secuencia. Cada objeto de la cadena tiene la posibilidad de manejar la petición o de pasarla al siguiente objeto de la cadena.

De esta manera, se logra desacoplar el objeto que genera la petición del objeto que la maneja, permitiendo que diferentes objetos puedan manejar la petición de manera independiente y, al mismo tiempo, evitando que el objeto que genera la petición tenga que conocer los detalles de su manejo.

El patrón se compone de tres elementos principales:

El Cliente (Client): es el objeto que genera la petición y la envía a la cadena de objetos.
El Manejador Abstracto (Handler): es una interfaz o clase abstracta que define el método para manejar la petición y para pasarla al siguiente objeto de la cadena.
El Manejador Concreto (Concrete Handler): es la implementación específica del Manejador Abstracto que se encarga de manejar la petición o de pasarla al siguiente objeto de la cadena.
Algunos ejemplos de uso común del patrón Chain of Responsibility incluyen el manejo de solicitudes de autenticación en una aplicación web o el manejo de excepciones en una aplicación.

#### Desventajas de **Chain of Responsibility**

Aunque el patrón de diseño Chain of Responsibility presenta ventajas como la flexibilidad y el desacoplamiento de objetos, también puede tener algunas desventajas, entre las cuales se pueden mencionar:

1. Complejidad: La creación de una cadena de objetos puede llevar a una estructura compleja que puede ser difícil de entender y mantener.

2. Rendimiento: Debido a que cada objeto de la cadena tiene que ser consultado para manejar la petición, puede haber una disminución en el rendimiento de la aplicación.

3. Posible pérdida de la petición: Si no se establece correctamente la cadena de responsabilidad, puede ocurrir que la petición sea pasada de un objeto a otro sin ser manejada adecuadamente, lo que podría resultar en una pérdida de la petición.

4. Dificultad para identificar el Manejador Concreto: En algunos casos, puede ser difícil identificar qué objeto de la cadena es responsable de manejar una petición específica.

Es importante tener en cuenta que estas desventajas no siempre son aplicables a todas las situaciones y que el uso del patrón Chain of Responsibility dependerá del contexto específico de la aplicación y de las necesidades del sistema.

#### Ejemplo de desarrollo de **Chain of Responsibility**

Por supuesto, a continuación te mostraré un ejemplo de implementación del patrón Chain of Responsibility en PHP.

Supongamos que queremos manejar diferentes tipos de solicitudes de soporte técnico (por ejemplo, problemas de hardware o software) y que cada solicitud debe ser manejada por un equipo diferente dentro de nuestra organización. Utilizaremos el patrón Chain of Responsibility para delegar la solicitud al equipo correspondiente.

Primero, crearemos la interfaz Manejador (Handler) que define el método para manejar la solicitud y pasarla al siguiente manejador en la cadena:

```js
interface Manejador {
    public function manejarSolicitud($tipoSolicitud);
    public function setSiguiente(Manejador $manejador);
}
```

Luego, crearemos la clase AbstractaEquipo (AbstractEquipo) que implementa la interfaz Manejador y define el siguiente manejador en la cadena:

```js
abstract class AbstractEquipo implements Manejador {
    protected $siguienteManejador;
    
    public function setSiguiente(Manejador $manejador) {
        $this->siguienteManejador = $manejador;
    }
    
    public function manejarSolicitud($tipoSolicitud) {
        if ($this->siguienteManejador != null) {
            $this->siguienteManejador->manejarSolicitud($tipoSolicitud);
        }
    }
}
```

A continuación, crearemos las clases EquipoHardware (HardwareTeam) y EquipoSoftware (SoftwareTeam) que extienden la clase AbstractEquipo y manejan las solicitudes correspondientes:

```js
class EquipoHardware extends AbstractEquipo {
    public function manejarSolicitud($tipoSolicitud) {
        if ($tipoSolicitud == 'hardware') {
            echo "El equipo de hardware se encargará de su solicitud.\n";
        } else {
            parent::manejarSolicitud($tipoSolicitud);
        }
    }
}

class EquipoSoftware extends AbstractEquipo {
    public function manejarSolicitud($tipoSolicitud) {
        if ($tipoSolicitud == 'software') {
            echo "El equipo de software se encargará de su solicitud.\n";
        } else {
            parent::manejarSolicitud($tipoSolicitud);
        }
    }
}
```

Finalmente, creamos el Cliente (Client) que enviará la solicitud a la cadena de manejadores:

```js
class Cliente {
    public function enviarSolicitud($tipoSolicitud) {
        $equipoHardware = new EquipoHardware();
        $equipoSoftware = new EquipoSoftware();
        
        $equipoHardware->setSiguiente($equipoSoftware);
        
        $equipoHardware->manejarSolicitud($tipoSolicitud);
    }
}

// Ejemplo de uso
$cliente = new Cliente();
$cliente->enviarSolicitud('hardware');
$cliente->enviarSolicitud('software');
```

En este ejemplo, el Cliente envía la solicitud al equipo de hardware, y si este no puede manejarla, la pasa al equipo de software. Si ningún equipo puede manejar la solicitud, se imprimirá un mensaje de error.

#### Test

1. ***¿Cuál es el propósito principal del patrón Chain of Responsibility?***
- a) Manejar solicitudes en una cadena de objetos.
- b) Simplificar la lógica de negocio en una aplicación.
- c) Mejorar la eficiencia del código.
- d) Reducir la cantidad de clases necesarias en una aplicación.

2. ***¿Qué es un manejador en el patrón Chain of Responsibility?***
- a) Una interfaz que define cómo se manejan las solicitudes.
- b) Una clase abstracta que implementa la interfaz Manejador.
- c) Una clase concreta que maneja una solicitud específica.
- d) Un objeto que se encarga de crear la cadena de manejadores.

3. ***¿Qué ventaja ofrece el patrón Chain of Responsibility en comparación con un enfoque basado en condicionales?***
- a) Mejora la legibilidad del código.
- b) Simplifica la implementación de la lógica de negocio.
- c) Reduce el acoplamiento entre los objetos de la aplicación.
- d) Aumenta la eficiencia del código.

4. ***¿Cómo se establece la cadena de manejadores en el patrón Chain of Responsibility?***
- a) Mediante un constructor en cada clase de manejador.
- b) Mediante un método setSiguiente() en la interfaz Manejador.
- c) Mediante un método setSiguiente() en la clase abstracta AbstractEquipo.
- d) Mediante un método setSiguiente() en cada clase de manejador.

5. ***¿Qué desventaja tiene el patrón Chain of Responsibility?***
- a) Aumenta la complejidad de la aplicación al introducir una cadena de objetos.
- b) Reduce la flexibilidad al limitar la cantidad de manejadores en la cadena.
- c) Puede aumentar el tiempo de ejecución al recorrer la cadena de manejadores.
- d) No se puede utilizar en situaciones en las que cada solicitud debe ser manejada por un objeto diferente.
 
Respuestas

1. a) Manejar solicitudes en una cadena de objetos.
2. c) Una clase concreta que maneja una solicitud específica.
3. c) Reduce el acoplamiento entre los objetos de la aplicación.
4. d) Mediante un método setSiguiente() en cada clase de manejador.
5. c) Puede aumentar el tiempo de ejecución al recorrer la cadena de manejadores.

### Template Method

El patrón de diseño Template Method es un patrón de comportamiento que define una estructura para un algoritmo en una clase base, delegando algunos pasos del algoritmo a las subclases. En resumen, el patrón Template Method se utiliza cuando se quiere definir el esqueleto de un algoritmo, pero permitiendo que las subclases proporcionen algunos de los detalles específicos.

Por ejemplo, supongamos que tenemos una clase base que representa un proceso de fabricación de un producto. La clase base puede definir el esqueleto de la fabricación del producto, pero delegar algunas etapas específicas a las subclases, como la selección de materiales, el corte y la unión de las piezas, y la pintura.

De esta manera, las subclases pueden proporcionar su propia implementación para cada paso específico, mientras que la clase base garantiza que se siga el mismo proceso general para cada producto que se fabrique.

El patrón Template Method tiene varias ventajas, como la facilidad de extender la funcionalidad del algoritmo, la capacidad de proporcionar una estructura coherente para las clases que lo utilizan, y la reducción de la duplicación de código.

Sin embargo, también tiene algunas desventajas, como la complejidad añadida a la estructura del código y la necesidad de que las subclases sigan el mismo esquema de implementación para cada paso del algoritmo.

#### Desventajas de Template Method

Aunque el patrón Template Method puede ser muy útil en ciertos casos, también tiene algunas desventajas a considerar:

1. Rigidez en la estructura: el patrón Template Method define una estructura fija para los pasos de un algoritmo. Si se necesita agregar o cambiar algún paso en el futuro, puede ser necesario modificar la clase base y todas sus subclases, lo que puede ser costoso y propenso a errores.

2. Sobrecarga de la clase base: si se tienen muchas subclases que heredan de la clase base, esta puede volverse demasiado grande y difícil de entender y mantener.

3. Dificultad para entender el flujo de ejecución: al delegar la implementación de los pasos específicos a las subclases, el flujo de ejecución puede ser difícil de entender, especialmente si hay muchas subclases diferentes.

4. Falta de flexibilidad en la implementación: debido a que el patrón Template Method define una estructura fija, puede ser difícil adaptarlo a situaciones en las que se requiere una mayor flexibilidad en la implementación. En estos casos, puede ser necesario utilizar otro patrón de diseño o estrategias diferentes.

#### Ejemplo de desarrollo **Template Method**

Supongamos que tenemos una clase base "Bebida" que representa una bebida genérica y dos subclases "Cafe" y "Te" que representan bebidas específicas. La clase Bebida define el método template "preparar()", que contiene los pasos generales para preparar una bebida. Las subclases Cafe y Te proporcionan sus propias implementaciones para los pasos específicos de preparación.

```js
abstract class Bebida {
    public function preparar() {
        $this->calentarAgua();
        $this->ponerIngredientes();
        $this->servirEnTaza();
    }

    abstract protected function ponerIngredientes();

    protected function calentarAgua() {
        echo "Calentando agua...\n";
    }

    protected function servirEnTaza() {
        echo "Sirviendo en taza...\n";
    }
}

class Cafe extends Bebida {
    protected function ponerIngredientes() {
        echo "Añadiendo cafe...\n";
    }
}

class Te extends Bebida {
    protected function ponerIngredientes() {
        echo "Añadiendo te...\n";
    }
}
```

En este ejemplo, la clase Bebida define el método "preparar()" como un método template que contiene los pasos generales para preparar una bebida. Los pasos generales incluyen calentar el agua, poner los ingredientes y servir en una taza.

Las subclases Cafe y Te proporcionan sus propias implementaciones para el método "ponerIngredientes()", que es un paso específico de la preparación. En el caso del Cafe, el paso es añadir cafe, mientras que en el caso del Te, el paso es añadir te.

De esta manera, la clase base Bebida define el esqueleto general del proceso de preparación de una bebida, pero delega los detalles específicos de cada bebida a las subclases.

#### Test

1. ***¿Cuál es la finalidad del patrón de diseño Template Method?***
- a) Definir la estructura general de un algoritmo en una clase base y permitir que las subclases implementen los pasos específicos.
- b) Permitir la comunicación entre objetos sin acoplarlos de forma directa.
- c) Definir un mecanismo para responder a eventos en un sistema.
- d) Proporcionar una interfaz unificada para un conjunto de interfaces en un subsistema.

- Respuesta: a) Definir la estructura general de un algoritmo en una clase base y permitir que las subclases implementen los pasos específicos.

2. ***¿Qué método es definido en la clase base del patrón Template Method para definir la estructura general del algoritmo?**
- a) Abstract Method
- b) Concrete Method
- c) Template Method
- d) Factory Method

- Respuesta: c) Template Method

3. ***¿Qué ventaja ofrece el patrón Template Method al permitir que las subclases implementen los pasos específicos?***
- a) Facilita la propagación de errores en la aplicación.
- b) Reduce el número de errores en la aplicación.
- c) Mejora el rendimiento de la aplicación.
- d) Proporciona mayor flexibilidad en la implementación del algoritmo.

- Respuesta: d) Proporciona mayor flexibilidad en la implementación del algoritmo.

4. ***¿Qué desventaja tiene el patrón Template Method relacionada con la rigidez en la estructura del algoritmo?***
- a) Dificultad para entender el flujo de ejecución.
- b) Falta de flexibilidad en la implementación.
- c) Sobrecarga de la clase base.
- d) Ninguna de las anteriores.

- Respuesta: b) Falta de flexibilidad en la implementación.

5. ***¿Qué patrón de diseño es similar al patrón Template Method, pero utiliza una estructura de colaboración de objetos en lugar de una estructura jerárquica de clases?***
- a) Strategy
- b) Facade
- c) Adapter
- d) Observer

- Respuesta: a) Strategy.

### Iterator

El patrón de diseño Iterator es un patrón de diseño de comportamiento que se utiliza para recorrer colecciones de objetos de manera secuencial, sin exponer los detalles de implementación de la colección subyacente. El patrón Iterator permite que los clientes recorran una colección de objetos sin conocer la estructura interna de la colección.

El patrón Iterator se compone de dos elementos principales: el iterador y la colección. El iterador es un objeto que proporciona un método para acceder a los elementos de la colección de forma secuencial. La colección es un objeto que contiene una serie de elementos, y que proporciona un método para obtener un iterador que se puede utilizar para recorrer los elementos de la colección.

La ventaja principal de utilizar el patrón Iterator es que permite recorrer colecciones de objetos sin exponer la estructura interna de la colección, lo que facilita la creación de código modular y reutilizable. Además, el patrón Iterator puede mejorar el rendimiento de la aplicación, ya que permite que los elementos de la colección se recorran de manera eficiente.

#### Desventajas de Iterator
Aunque el patrón de diseño Iterator tiene muchas ventajas, también tiene algunas desventajas que se deben considerar al decidir si utilizarlo en una aplicación en particular. A continuación, se describen algunas de las desventajas más importantes del patrón Iterator:

Sobrecarga de código: El patrón Iterator puede aumentar la cantidad de código necesario para implementar una colección y su iterador, lo que puede hacer que el código sea más difícil de mantener y más propenso a errores.

1. Pérdida de eficiencia: En algunos casos, el uso del patrón Iterator puede introducir una sobrecarga de rendimiento debido al uso de objetos adicionales y la necesidad de iterar sobre una colección mediante un objeto en lugar de acceder directamente a los elementos.

2. Limitaciones de la interfaz Iterator: La interfaz Iterator define un conjunto limitado de métodos que deben implementarse para iterar sobre una colección, lo que puede limitar la flexibilidad y la capacidad de personalización del iterador.

3. Problemas de concurrencia: El patrón Iterator no proporciona una solución integrada para problemas de concurrencia, como el acceso simultáneo a una colección por múltiples hilos.

En resumen, el patrón Iterator puede ser una herramienta útil para recorrer colecciones de objetos de manera secuencial y modular, pero también presenta algunas desventajas que deben tenerse en cuenta al decidir si utilizarlo en una aplicación en particular. Es importante evaluar cuidadosamente las ventajas y desventajas del patrón Iterator antes de decidir si utilizarlo en un proyecto específico.

#### Ejemplo de desarrollo Iterator

Un ejemplo de implementación del patrón Iterator en PHP podría ser el siguiente:

```js
class Coleccion implements \IteratorAggregate
{
    private $elementos = array();
    
    public function addElemento($elemento)
    {
        $this->elementos[] = $elemento;
    }
    
    public function getIterator()
    {
        return new Iterador($this->elementos);
    }
}

class Iterador implements \Iterator
{
    private $elementos = array();
    private $indice = 0;
    
    public function __construct($elementos)
    {
        $this->elementos = $elementos;
    }
    
    public function current()
    {
        return $this->elementos[$this->indice];
    }
    
    public function key()
    {
        return $this->indice;
    }
    
    public function next()
    {
        $this->indice++;
    }
    
    public function rewind()
    {
        $this->indice = 0;
    }
    
    public function valid()
    {
        return isset($this->elementos[$this->indice]);
    }
}
```
En este ejemplo, la clase **Coleccion** es una colección de elementos y se implementa la interfaz IteratorAggregate, que define un método **getIterator()** que devuelve un objeto Iterador. La clase Iterador es el objeto que recorre la colección y se implementa la interfaz Iterator, que define los métodos ***current(), key(), next(), rewind() y valid()***.

Para utilizar el patrón Iterator, se puede crear una instancia de la clase Coleccion y agregar elementos a la colección mediante el método addElemento(). Luego, se puede recorrer la colección utilizando un bucle foreach que utiliza el iterador devuelto por el método **getIterator()**:

```js
$coleccion = new Coleccion();
$coleccion->addElemento("Elemento 1");
$coleccion->addElemento("Elemento 2");
$coleccion->addElemento("Elemento 3");

foreach ($coleccion as $indice => $elemento) {
    echo "Elemento $indice: $elemento\n";
}
```
Este código recorre la colección de elementos utilizando un bucle foreach y el iterador proporcionado por la clase Coleccion. El resultado de la ejecución sería:


#### Test

1. ***¿Qué es el patrón de diseño Iterator?***
- a) Un patrón de diseño de creación
- b) Un patrón de diseño de comportamiento
- c) Un patrón de diseño estructural
- d) Un patrón de diseño arquitectónico

2. ***¿Qué interfaz define el patrón Iterator?***
- a) Iterator
- b) Collection
- c) Aggregator
- d) Element

3. ***¿Qué clase implementa el método getIterator() en el patrón Iterator?***
- a) La clase Iterator
- b) La clase Collection
- c) La clase Aggregator
- d) Todas las anteriores

4. ***¿Cuál es una ventaja del patrón Iterator?***
- a) Mejora el rendimiento de la aplicación
- b) Facilita la creación de código modular y reutilizable
- c) Permite recorrer colecciones sin exponer la estructura interna de la colección
- d) Todas las anteriores

5. ***¿Cuál es una desventaja del patrón Iterator?***
- a) Puede introducir una sobrecarga de rendimiento
- b) Limita la flexibilidad y la capacidad de personalización del iterador
- c) Requiere una cantidad adicional de código para implementar una colección y su iterador
- d) Todas las anteriores

Respuestas:

1. b) Un patrón de diseño de comportamiento
2. a) Iterator
3. b) La clase Collection
4. d) Todas las anteriores
5. d) Todas las anteriores
