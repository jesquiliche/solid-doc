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
| Interpreter | Interpreta y ejecuta un lenguaje de expresiones. |
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






