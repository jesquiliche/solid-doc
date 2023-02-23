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


### State

El patrón de diseño State es un patrón de comportamiento que permite a un objeto alterar su comportamiento cuando su estado interno cambia. Este patrón está diseñado para separar la lógica de estado de un objeto de su comportamiento, de manera que el objeto pueda cambiar su comportamiento en función de su estado interno sin necesidad de cambiar su clase.

El patrón State se compone de dos elementos principales: el contexto y los estados. El contexto es el objeto que tiene un estado interno que puede cambiar, y los estados son objetos que definen el comportamiento del contexto en función de su estado interno.

El contexto tiene una referencia al estado actual, que puede cambiar en función de eventos o acciones externas. Cuando el estado interno del contexto cambia, el contexto cambia su comportamiento y delega el comportamiento específico al objeto de estado correspondiente.

Un ejemplo de implementación del patrón State podría ser un reproductor de audio con diferentes estados, como "reproduciendo", "pausado" o "detenido". Cada estado define su propio comportamiento para el reproductor de audio, y el reproductor cambia su comportamiento en función del estado actual.

Aquí te dejo un ejemplo de implementación del patrón State en JavaScript para un reproductor de audio:

#### Desventajas del State

Aunque el patrón de diseño State ofrece muchos beneficios, como una mejor organización y modularidad del código y una mayor flexibilidad al cambiar el comportamiento de un objeto en función de su estado interno, también tiene algunas desventajas:

1. Aumento de la complejidad: El patrón State introduce más clases y aumenta la complejidad del código, lo que puede dificultar su mantenimiento y comprensión.

2. Aumento del acoplamiento: El patrón State puede aumentar el acoplamiento entre el contexto y los objetos de estado, lo que puede dificultar la sustitución de un objeto de estado por otro.

3. Dificultad para implementar nuevos estados: La adición de nuevos estados puede ser complicada, especialmente si requieren un comportamiento completamente diferente al de los estados existentes.

4. Requiere una buena comprensión del dominio: El patrón State requiere una buena comprensión del dominio y del comportamiento del objeto en diferentes estados para diseñar los objetos de estado adecuados y definir el comportamiento adecuado para cada estado.

En general, el patrón State es una buena elección cuando se trabaja con objetos que tienen diferentes comportamientos en función de su estado interno, pero es importante evaluar cuidadosamente las ventajas y desventajas de este patrón antes de decidir si es la mejor opción para un proyecto específico.

#### Ejemplo de desarrollo STate

```js
interface AudioState {
    public function play(AudioPlayer $player);
    public function pause(AudioPlayer $player);
    public function stop(AudioPlayer $player);
}

class AudioPlayer {
    private $state;

    public function __construct(AudioState $state) {
        $this->state = $state;
    }

    public function setState(AudioState $state) {
        $this->state = $state;
    }

    public function play() {
        $this->state->play($this);
    }

    public function pause() {
        $this->state->pause($this);
    }

    public function stop() {
        $this->state->stop($this);
    }
}

class PlayingState implements AudioState {
    public function play(AudioPlayer $player) {
        echo "El reproductor ya está reproduciendo\n";
    }

    public function pause(AudioPlayer $player) {
        echo "Pausando el reproductor\n";
        $player->setState(new PausedState());
    }

    public function stop(AudioPlayer $player) {
        echo "Deteniendo el reproductor\n";
        $player->setState(new StoppedState());
    }
}

class PausedState implements AudioState {
    public function play(AudioPlayer $player) {
        echo "Reanudando la reproducción\n";
        $player->setState(new PlayingState());
    }

    public function pause(AudioPlayer $player) {
        echo "El reproductor ya está en pausa\n";
    }

    public function stop(AudioPlayer $player) {
        echo "Deteniendo el reproductor\n";
        $player->setState(new StoppedState());
    }
}

class StoppedState implements AudioState {
    public function play(AudioPlayer $player) {
        echo "Iniciando la reproducción\n";
        $player->setState(new PlayingState());
    }

    public function pause(AudioPlayer $player) {
        echo "El reproductor está detenido, no se puede pausar\n";
    }

    public function stop(AudioPlayer $player) {
        echo "El reproductor ya está detenido\n";
    }
}
```

En este código, la interfaz **AudioState** define los métodos **play()**, **pause()** y **stop()** que deben ser implementados por cada estado. La clase **AudioPlayer** es el contexto y tiene una referencia al estado actual en la propiedad **state**. La clase **AudioPlayer** también tiene métodos **play()**, **pause()** y **stop()** que delegan el comportamiento al estado actual.

Las clases **PlayingState**, **PausedState** y **StoppedState** implementan la interfaz **AudioState** y definen el comportamiento correspondiente para cada estado.

Este ejemplo ilustra cómo el patrón State permite que un objeto cambie su comportamiento en función de su estado interno, sin necesidad de cambiar su clase.

#### Test

1. ***¿Cuál es el propósito del patrón State?***
- a) Separar la creación de objetos complejos de su implementación
- b) Proporcionar una interfaz simplificada a un conjunto de interfaces complejas
- c) Permitir que un objeto cambie su comportamiento en función de su estado interno
- d) Proporcionar un único punto de acceso para acceder a varios objetos relacionados

- Respuesta: c) Permitir que un objeto cambie su comportamiento en función de su estado interno

2. ***¿Cuál es el objeto que cambia de comportamiento en el patrón State?***
- a) El objeto de contexto
- b) El objeto de estado
- c) El objeto cliente
- d) El objeto adaptadorç

- Respuesta: a) El objeto de contexto

3. ***¿Qué interfaz define los métodos que deben ser implementados por cada estado en el patrón State?***
- a) State
- b) Context
- c) Client
- d) Adapter

- Respuesta: a) State

4. ***¿Qué ventaja proporciona el patrón State en la organización del código?***
- a) Simplifica la creación de objetos complejos
- b) Proporciona una interfaz simplificada a un conjunto de interfaces complejas
- c) Aumenta la modularidad y la flexibilidad del código
- d) Reduce el acoplamiento entre objetos

-Respuesta: c) Aumenta la modularidad y la flexibilidad del código

5. ***¿Cuál es una posible desventaja del patrón State?***
- a) Aumento de la complejidad del código
- b) Reducción de la modularidad del código
- c) Aumento del acoplamiento entre objetos
- d) No proporciona una interfaz simplificada a un conjunto de interfaces complejas

- Respuesta: a) Aumento de la complejidad del código

### Mediator

El patrón Mediator es un patrón de diseño de software que se utiliza para reducir la complejidad de la comunicación entre objetos en un sistema. En lugar de que los objetos se comuniquen directamente entre sí, se utilizan un objeto mediador que coordina la comunicación entre ellos. Esto ayuda a evitar el acoplamiento entre los objetos y permite que el sistema sea más escalable y fácil de mantener.

El objeto mediador actúa como un intermediario entre los objetos que necesitan comunicarse. En lugar de que los objetos se comuniquen directamente, se comunican con el objeto mediador, que se encarga de coordinar la comunicación entre ellos.

Un ejemplo de aplicación del patrón Mediator sería un sistema de chat en línea. En un sistema de chat, hay varios usuarios que necesitan comunicarse entre sí. En lugar de que los usuarios se comuniquen directamente, se utiliza un objeto mediador que coordina la comunicación entre ellos. El objeto mediador en este caso podría ser un servidor de chat que se encarga de enviar los mensajes de un usuario a otro.

Otro ejemplo podría ser un sistema de control de tráfico aéreo. En este caso, los aviones que necesitan aterrizar y despegar necesitan comunicarse entre sí y con la torre de control. En lugar de que los aviones se comuniquen directamente, se utiliza un objeto mediador que coordina la comunicación entre ellos y con la torre de control.

Una posible desventaja del patrón Mediator es que puede introducir un punto único de fallo en el sistema. Si el objeto mediador falla, toda la comunicación entre los objetos puede verse afectada. Sin embargo, esto puede mitigarse mediante el uso de redundancia y mecanismos de recuperación ante fallos.

#### Desventajss de Mediator

Las desventajas principales del patrón Mediator son:

1. Complejidad: la implementación de un objeto mediador puede ser compleja y aumentar la complejidad del sistema en general. A medida que aumenta el número de objetos que necesitan comunicarse, puede ser difícil coordinar y mantener la comunicación a través del objeto mediador, lo que puede llevar a una mayor complejidad y dificultad de mantenimiento.

2. Rendimiento: el uso de un objeto mediador puede tener un impacto negativo en el rendimiento del sistema. Si hay muchos objetos que necesitan comunicarse a través del objeto mediador, el mediador puede convertirse en un cuello de botella y ralentizar el sistema. Es importante equilibrar la cantidad de objetos que se comunican a través del mediador para evitar problemas de rendimiento.

3. Dependencia adicional en el sistema: la implementación de un objeto mediador puede crear una dependencia adicional en el sistema. Si el objeto mediador falla, toda la comunicación entre los objetos puede verse afectada. Esto puede hacer que el sistema sea más frágil y difícil de mantener. Es importante diseñar un objeto mediador robusto y asegurarse de que esté bien probado antes de integrarlo en el sistema.

En general, el patrón Mediator puede ser muy útil para reducir el acoplamiento entre los objetos de un sistema y mejorar la modularidad del código. Sin embargo, también puede aumentar la complejidad y tener un impacto negativo en el rendimiento si no se utiliza adecuadamente. Es importante sopesar cuidadosamente los beneficios y las desventajas del patrón Mediator antes de decidir si es adecuado para un proyecto en particular.

#### Ejemplo de desarrollo Mediator

Supongamos que queremos construir un sistema de chat en el que los usuarios puedan enviar mensajes entre sí. Para implementar esto utilizando el patrón Mediator, crearíamos una clase Mediator que se encargue de coordinar la comunicación entre los objetos de usuario.

```js
// Creamos una clase abstracta de usuario que represente a los usuarios del sistema de chat
abstract class Usuario {
    protected $mediator;
    protected $nombre;

    public function __construct($nombre, $mediator) {
        $this->nombre = $nombre;
        $this->mediator = $mediator;
    }

    // Método para enviar un mensaje
    public function enviarMensaje($mensaje) {
        $this->mediator->enviarMensaje($mensaje, $this);
    }

    // Método para recibir un mensaje
    public function recibirMensaje($mensaje) {
        echo "{$this->nombre} ha recibido el mensaje: {$mensaje}\n";
    }
}

// Creamos una clase Mediator que se encargue de coordinar la comunicación entre los usuarios
class ChatMediator {
    private $usuarios = [];

    // Método para agregar un usuario al sistema
    public function agregarUsuario($usuario) {
        $this->usuarios[] = $usuario;
    }

    // Método para enviar un mensaje a todos los usuarios del sistema excepto al remitente
    public function enviarMensaje($mensaje, $remitente) {
        foreach ($this->usuarios as $usuario) {
            if ($usuario !== $remitente) {
                $usuario->recibirMensaje($mensaje);
            }
        }
    }
}

// Creamos dos objetos Usuario y los agregamos al objeto ChatMediator
$mediador = new ChatMediator();
$usuario1 = new Usuario("Juan", $mediador);
$usuario2 = new Usuario("Maria", $mediador);
$mediador->agregarUsuario($usuario1);
$mediador->agregarUsuario($usuario2);

// Los usuarios pueden enviar mensajes entre sí a través del objeto ChatMediator
$usuario1->enviarMensaje("Hola Maria!");
$usuario2->enviarMensaje("Hola Juan!");
```

En este ejemplo, la clase Mediator **chatMediator** se encarga de coordinar la comunicación entre los usuarios **Usuario** del sistema de chat. Los usuarios se registran en el objeto ChatMediator al crearse, y cuando quieren enviar un mensaje, llaman al método **enviarMensaje()** del mediador, que a su vez envía el mensaje a todos los usuarios excepto al remitente.

Este es solo un ejemplo básico de cómo se puede implementar el patrón Mediator en PHP. Dependiendo de los requerimientos del sistema, la implementación puede ser más compleja y personalizada.

#### Test

1. ***¿Qué problema resuelve el patrón Mediator?***
- a. Permite que varios objetos respondan a un evento sin acoplamiento directo
- b. Encapsula el comportamiento de un objeto en un estado
- c. Permite que un objeto sea accesible desde cualquier otro objeto
- d. Ninguna de las anteriores

- Respuesta: a

2. ***¿Cuál es el objetivo del patrón Mediator?***
- a. Reducir la complejidad de la comunicación entre objetos
- b. Simplificar la lógica de los estados de un objeto
- c. Permitir que los objetos accedan a métodos de otros objetos directamente
- d. Ninguna de las anteriores

- Respuesta: a

3. ***¿Qué clases participan en una implementación del patrón Mediator?***
- a. Solo la clase Mediator
- b. La clase Mediator y una o más clases de colegas
- c. La clase Mediator y la clase Cliente
- d. Todas las anteriores

- Respuesta: b

4. ***¿Cuál es la función principal de la clase Mediator?***
- a. Controlar el estado de un objeto
- b. Coordinar la comunicación entre objetos
- c. Manejar las solicitudes de los clientes
- d. Ninguna de las anteriores

- Respuesta: b

5. ***¿Cómo se puede evitar el acoplamiento excesivo en una implementación del patrón Mediator?***
- a. Limitando la cantidad de clases de colegas que pueden comunicarse con el mediador
- b. Dividiendo las responsabilidades de la clase Mediator en varias clases más pequeñas
- c. Definiendo una interfaz común que todas las clases de colegas deben implementar
- d. Todas las anteriores

- Respuesta: d

### Memento

El patrón Memento es un patrón de diseño de comportamiento que permite capturar y almacenar el estado interno de un objeto sin violar el principio de encapsulamiento. Esto se logra a través de la creación de objetos memento, que contienen una copia del estado actual del objeto, y que pueden ser utilizados para restaurar ese estado en el futuro.

El patrón Memento se compone de tres elementos principales:

1. Originator: es la clase que representa el objeto cuyo estado se quiere almacenar. Esta clase tiene un método para crear un memento, que devuelve un objeto memento que contiene una copia del estado actual del objeto.
Memento: es la clase que representa el objeto que almacena el estado del objeto originator. Esta clase debe ser inmutable para garantizar la integridad de los datos almacenados.

2. Caretaker: es la clase que se encarga de almacenar y gestionar los objetos memento. Esta clase puede ser utilizada para guardar un histórico de los estados del objeto originator.
El patrón Memento tiene varias ventajas, como:

3. Permite almacenar el estado de un objeto sin violar el principio de encapsulamiento, ya que los objetos memento solo pueden ser accedidos por el objeto originator.

4. Permite restaurar el estado de un objeto a cualquier punto en el tiempo, lo que puede ser útil en casos de errores o fallos en el sistema.
Simplifica la lógica del objeto originator, ya que la responsabilidad de almacenar el estado se delega en objetos memento

#### Desventajs de Memento

1. Puede generar un alto consumo de memoria si se almacenan muchos objetos memento.
2. Puede generar una sobrecarga en la gestión de los objetos memento si se almacenan muchos estados del objeto originator.
3. Requiere que el objeto originator tenga acceso al estado del objeto memento, lo que puede aumentar el acoplamiento entre las clases.

#### Ejemplo de desarrollo Memento

```js
class Editor {
    private $content;
    
    public function __construct() {
        $this->content = "";
    }
    
    public function type(string $text) {
        $this->content .= $text;
    }
    
    public function getContent() {
        return $this->content;
    }
    
    public function createMemento() {
        return new EditorMemento($this->content);
    }
    
    public function restoreMemento(EditorMemento $memento) {
        $this->content = $memento->getContent();
    }
}

class EditorMemento {
    private $content;
    
    public function __construct(string $content) {
        $this->content = $content;
    }
    
    public function getContent() {
        return $this->content;
    }
}

class History {
    private $mementos = [];
    
    public function addMemento(EditorMemento $memento) {
        $this->mementos[] = $memento;
    }
    
    public function getMemento(int $index) {
        return $this->mementos[$index];
    }
}

// Ejemplo de uso
$editor = new Editor();
$history = new History();

// Se escriben varios textos y se almacena el estado previo en el historial
$editor->type("Primera línea\n");
$history->addMemento($editor->createMemento());

$editor->type("Segunda línea\n");
$history->addMemento($editor->createMemento());

$editor->type("Tercera línea\n");
$history->addMemento($editor->createMemento());

// Se restaura el estado anterior y se imprime el contenido
$editor->restoreMemento($history->getMemento(1));
echo $editor->getContent(); // Salida: Primera línea\nSegunda línea\n
```

En este ejemplo, se crea un editor de texto que permite escribir texto y almacenar el estado previo mediante la creación de un objeto **Memento**. Se utiliza una clase History para almacenar todos los mementos creados, y se puede restaurar el estado anterior de un editor mediante la selección de un memento específico de la historia y su restauración en el editor mediante el método **restoreMemento**.

#### Test

1. ***¿Cuál es el propósito del patrón Memento?***

- A. Crear objetos complejos sin exponer su complejidad interna.
- B. Facilitar la creación de objetos a partir de un prototipo existente.
- C. Capturar y almacenar el estado interno de un objeto sin violar el principio de encapsulamiento.
- D. Establecer una dependencia uno-a-muchos entre objetos para que cuando uno cambie, notifique automáticamente a los demás.

- Respuesta: C

2.  ***¿Qué elementos componen el patrón Memento?***

- A. Origen, objetivo, mediador.
- B. Origen, objetivo, memento.
- C. Origen, memento, restaurador.
- D. Origen, memento, objetivo.

- Respuesta: D

3. ***¿Qué es un Memento en el patrón Memento?***

- A. Una clase que almacena una serie de estados del objeto en cuestión.
- B. Una clase que proporciona una interfaz para construir diferentes tipos de objetos.
- C. Una clase que permite la comunicación indirecta entre objetos.
- D. Una clase que representa un objeto complejo y que se puede crear a partir de un prototipo existente.

- Respuesta: A

4. ***¿Cómo se utiliza el patrón Memento en la programación?***

- A. Se utiliza para crear objetos a partir de un prototipo existente.
- B. Se utiliza para mantener un registro de los cambios realizados en una base de datos.
- C. Se utiliza para almacenar el estado interno de un objeto en diferentes momentos y poder restaurarlo si es necesario.
- D. Se utiliza para establecer una relación uno-a-muchos entre objetos.

- Respuesta: C

5. ***¿Cuál es una ventaja del patrón Memento?***

- A. Facilita la creación de objetos complejos.
- B. Ayuda a mantener un registro de los cambios realizados en una base de datos.
- C. Permite almacenar y restaurar el estado interno de un objeto sin violar el principio de encapsulamiento.
- D. Establece una dependencia uno-a-muchos entre objetos para que cuando uno cambie, notifique automáticamente a los demás.

- Respuesta: C

### Visitor

Visitor es un patrón de diseño de software que permite separar algoritmos complejos de la estructura de objetos en los que operan. Permite definir una operación que actúa sobre los objetos de una estructura de objetos y modificar la operación sin cambiar la clase de los objetos sobre los que opera. Para lograr esto, el patrón Visitor define una clase Visitor que declara una operación visit() para cada clase de objeto en la estructura de objetos. Cada clase de objeto debe implementar un método accept() que acepta un objeto Visitor como parámetro y llama a la operación visit() apropiada en el objeto Visitor. De esta manera, el Visitor puede recorrer la estructura de objetos y ejecutar la operación apropiada en cada objeto sin tener que conocer la estructura interna de la misma.

#### Desventajas de Visitor

A continuación se presentan algunas desventajas de Visitor:

1. Requiere una jerarquía de clases estable: Para implementar el patrón Visitor, se debe tener una jerarquía de clases estable. Si la jerarquía de clases cambia con frecuencia, entonces es posible que el patrón no sea adecuado, ya que podría ser difícil de mantener.

2. Puede ser complejo de implementar: La implementación del patrón Visitor puede ser compleja, ya que requiere la creación de varias clases y una estructura de datos para almacenar los visitantes. Además, puede ser difícil de entender para aquellos que no están familiarizados con él.

3. No es adecuado para todas las situaciones: El patrón Visitor no es adecuado para todas las situaciones. En algunos casos, puede ser más fácil y más eficiente usar una solución alternativa.

4. Puede violar el principio abierto/cerrado: Si se agregan nuevas clases a la jerarquía, es posible que deba actualizar el código del visitante. Esto puede violar el principio abierto/cerrado, que establece que las clases deben estar abiertas para la extensión pero cerradas para la modificación.

#### Ejemplo de desarrollo Vistor

Supongamos que tienes una jerarquía de clases que representan diferentes figuras geométricas, como círculos, rectángulos y triángulos. Cada figura tiene un método area() que devuelve su área. Además, tienes una clase ShapeVisitor que define métodos para visitar cada tipo de figura:

```js
abstract class Shape {
  abstract public function area();
  abstract public function accept(ShapeVisitor $visitor);
}

class Circle extends Shape {
  private $radius;
  
  public function __construct($radius) {
    $this->radius = $radius;
  }
  
  public function area() {
    return pi() * pow($this->radius, 2);
  }
  
  public function accept(ShapeVisitor $visitor) {
    $visitor->visitCircle($this);
  }
}

class Rectangle extends Shape {
  private $width;
  private $height;
  
  public function __construct($width, $height) {
    $this->width = $width;
    $this->height = $height;
  }
  
  public function area() {
    return $this->width * $this->height;
  }
  
  public function accept(ShapeVisitor $visitor) {
    $visitor->visitRectangle($this);
  }
}

class Triangle extends Shape {
  private $base;
  private $height;
  
  public function __construct($base, $height) {
    $this->base = $base;
    $this->height = $height;
  }
  
  public function area() {
    return 0.5 * $this->base * $this->height;
  }
  
  public function accept(ShapeVisitor $visitor) {
    $visitor->visitTriangle($this);
  }
}

interface ShapeVisitor {
  public function visitCircle(Circle $circle);
  public function visitRectangle(Rectangle $rectangle);
  public function visitTriangle(Triangle $triangle);
}

class AreaVisitor implements ShapeVisitor {
  private $totalArea = 0;
  
  public function visitCircle(Circle $circle) {
    $this->totalArea += $circle->area();
  }
  
  public function visitRectangle(Rectangle $rectangle) {
    $this->totalArea += $rectangle->area();
  }
  
  public function visitTriangle(Triangle $triangle) {
    $this->totalArea += $triangle->area();
  }
  
  public function getTotalArea() {
    return $this->totalArea;
  }
}
```

En este ejemplo, la clase ShapeVisitor define tres métodos **visitCircle()**, **visitRectangle()** y **visitTriangle()**, cada uno de los cuales toma como parámetro una instancia de la figura correspondiente. La clase **AreaVisitor** implementa esta interfaz y lleva un registro del área total de todas las figuras que visita.

Para utilizar este código, podrías crear algunas instancias de figuras y un visitante:

```js
$shapes = array(
  new Circle(5),
  new Rectangle(4, 6),
  new Triangle(3, 7)
);

$areaVisitor = new AreaVisitor();

foreach ($shapes as $shape) {
  $shape->accept($areaVisitor);
}

echo "Total area: " . $areaVisitor->getTotalArea();
```

En este caso, el resultado sería:

```js
Total area: 70.856406460551
```
