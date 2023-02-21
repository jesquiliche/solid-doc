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




