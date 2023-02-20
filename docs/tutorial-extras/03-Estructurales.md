---
sidebar_position: 3
---

# Patrones de diseño estructurales

## ¿Qué son los patrones de diseño creacionales?

Los patrones de diseño estructurales son aquellos que se centran en cómo se organizan y estructuran las clases y objetos en un sistema. Estos patrones se utilizan para lograr una mayor flexibilidad y escalabilidad del sistema, al mismo tiempo que se reduce la complejidad y se mejora la eficiencia.

Los patrones estructurales incluyen patrones como el adaptador, el puente, el composite, el decorador, la fachada y el proxy. Cada uno de estos patrones se centra en un aspecto particular de la estructura del sistema y ofrece una solución común a un problema común que se encuentra en muchos sistemas.

Por ejemplo, el patrón adaptador se utiliza para permitir que dos clases incompatibles trabajen juntas. El patrón puente se utiliza para separar una abstracción de su implementación, lo que permite que ambos cambien independientemente sin afectar al otro. El patrón composite se utiliza para tratar a un grupo de objetos como si fueran un solo objeto, lo que permite tratar a los objetos individuales y al grupo de objetos de la misma manera. El patrón decorador se utiliza para agregar funcionalidad a un objeto existente sin cambiar su estructura, mientras que el patrón fachada se utiliza para proporcionar una interfaz simple para un sistema complejo. Finalmente, el patrón proxy se utiliza para proporcionar un sustituto o marcador de posición para otro objeto, lo que permite controlar el acceso al objeto real.

## Tipos de patrones estructurales

| Tipo de patrón estructural | Descripción breve |
| -------------------------- | ----------------- |
| Adapter | Convierte la interfaz de una clase en otra interfaz que se espera. |
| Bridge | Separa una abstracción de su implementación para que puedan variar independientemente. |
| Composite | Agrupa objetos en una estructura de árbol para representar jerarquías parte-todo. |
| Decorator | Añade responsabilidades adicionales a un objeto de manera dinámica. |
| Facade | Proporciona una interfaz unificada para un conjunto de interfaces en un subsistema. |
| Flyweight | Divide los objetos en objetos compartidos y no compartidos para reducir la memoria utilizada. |
| Proxy | Proporciona un representante o sustituto de otro objeto para controlar el acceso a éste. |

### Adapter

El patrón **Adapter** es un patrón estructural que permite que objetos con interfaces incompatibles trabajen juntos. Convierte la interfaz de una clase en otra interfaz que el cliente espera.

El patrón **Adapter** se puede clasificar en dos tipos: el Adapter de clase y el Adapter de objeto. El Adapter de clase utiliza la herencia para adaptar una interfaz existente, mientras que el Adapter de objeto utiliza la composición para adaptar una interfaz existente.

El objetivo del patrón Adapter es proporcionar una capa intermedia entre dos interfaces incompatibles para permitir su interacción. Esto se logra mediante la creación de un objeto adaptador que convierte la interfaz original en la interfaz esperada por el cliente.

Ejemplos de este patrón se pueden encontrar en el uso de adaptadores de enchufe, donde se utilizan para permitir que dispositivos con diferentes enchufes se conecten a una toma de corriente común. También se puede utilizar en el software, por ejemplo, para convertir los datos de una fuente de datos en un formato que pueda ser utilizado por una aplicación.

En este ejemplo, la interfaz **Product** define la operación que todos los productos deben implementar. ConcreteProduct1 y ConcreteProduct2 son implementaciones concretas de **Product**. La clase abstracta **Creator** define el método factoryMethod que las subclases deben implementar para crear los objetos. **ConcreteCreator1** y **ConcreteCreator2** son las implementaciones concretas de Creator que devuelven instancias concretas de **ConcreteProduct1** y **ConcreteProduct2**, respectivamente. La función clientCode demuestra cómo se pueden utilizar las clases anteriores para crear diferentes tipos de objetos.

#### Ejemplo de Adapter

Supongamos que tenemos una clase PaymentProcessor que procesa pagos utilizando la API de un proveedor de pagos específico. Pero ahora queremos cambiar a un nuevo proveedor de pagos que tiene una API diferente. En lugar de cambiar la lógica de PaymentProcessor, podemos crear un adaptador para la nueva API y utilizarlo para procesar pagos. Este adaptador actuará como un intermediario entre el PaymentProcessor y la nueva API.

```js
interface PaymentProvider {
    public function pay($amount);
}

class OldPaymentProvider implements PaymentProvider {
    public function pay($amount) {
        echo "Pagando $amount usando la API de OldPaymentProvider\n";
    }
}

class NewPaymentProvider {
    public function charge($amount) {
        echo "Cobrando $amount usando la API de NewPaymentProvider\n";
    }
}

class NewPaymentProviderAdapter implements PaymentProvider {
    private $provider;

    public function __construct(NewPaymentProvider $provider) {
        $this->provider = $provider;
    }

    public function pay($amount) {
        $this->provider->charge($amount);
    }
}

class PaymentProcessor {
    private $provider;

    public function __construct(PaymentProvider $provider) {
        $this->provider = $provider;
    }

    public function processPayment($amount) {
        $this->provider->pay($amount);
    }
}

// Usando el viejo proveedor de pagos
$paymentProcessor = new PaymentProcessor(new OldPaymentProvider());
$paymentProcessor->processPayment(100);

// Cambiando al nuevo proveedor de pagos con un adaptador
$newPaymentProvider = new NewPaymentProvider();
$paymentProcessor = new PaymentProcessor(new NewPaymentProviderAdapter($newPaymentProvider));
$paymentProcessor->processPayment(200);

```
En este ejemplo, **OldPaymentProvider** y **NewPaymentProvider** son dos proveedores de pagos diferentes con APIs diferentes. **PaymentProcessor** es la clase que utiliza la API del proveedor de pagos para procesar pagos. En lugar de cambiar la implementación de **PaymentProcessor** cuando cambiamos al nuevo proveedor de pagos, creamos un adaptador **NewPaymentProviderAdapter** que se encarga de adaptar la API del nuevo proveedor de pagos a la interfaz del PaymentProvider. De esta manera, podemos seguir utilizando la misma implementación de PaymentProcessor sin necesidad de cambiar nada en él.

#### Desventajas de Adapter

- Complejidad: La implementación del patrón Adapter puede ser compleja, ya que implica la creación de una interfaz común para hacer que los objetos sean compatibles entre sí.

- Overhead: El patrón Adapter agrega una capa adicional de indirección, lo que puede aumentar el overhead y disminuir el rendimiento.

- Aumento de la complejidad del código: El uso excesivo de adaptadores puede aumentar la complejidad del código y hacerlo más difícil de mantener y entender.

- Requiere una buena planificación: Es importante planificar cuidadosamente cómo se va a implementar el patrón Adapter para evitar problemas en el futuro.

- Dificultad para mantener la compatibilidad: A medida que evolucionan los sistemas, puede ser difícil mantener la compatibilidad entre los diferentes objetos que se están adaptando.

#### Test de repaso

1. ***¿Cuál es el propósito del patrón Adapter?***
- a) Permitir que los objetos trabajen juntos sin modificar su interfaz.
- b) Permitir que los objetos trabajen juntos modificando su interfaz.
- c) Permitir que los objetos trabajen individualmente sin interferir en la interfaz de otros objetos.
- Respuesta: a) Permitir que los objetos trabajen juntos sin modificar su interfaz.

2. ***¿Cuáles son las dos formas principales de implementar el patrón Adapter?***
- a) Clases y objetos.
- b) Herencia y composición.
- c) Interfaces y clases abstractas.
- Respuesta: b) Herencia y composición.

3. ***¿Qué es un "Adapter de objeto"?***
- a) Una clase que adapta una interfaz de objeto existente a otra interfaz requerida por el cliente.
- b) Un objeto que se utiliza para conectar una aplicación con una base de datos.
- c) Una interfaz que define una serie de métodos para que los objetos los implementen.
- Respuesta: a) Una clase que adapta una interfaz de objeto existente a otra interfaz requerida por el cliente.

4. ***¿En qué se diferencia el patrón Adapter del patrón Bridge?***
- a) El patrón Adapter se utiliza para adaptar una interfaz existente, mientras que el patrón Bridge se utiliza para separar la interfaz de una abstracción de su implementación.
- b) El patrón Adapter se utiliza para conectar dos interfaces incompatibles, mientras que el patrón Bridge se utiliza para conectar dos sistemas diferentes.
- c) El patrón Adapter se utiliza en sistemas distribuidos, mientras que el patrón Bridge se utiliza en sistemas centralizados.
- Respuesta: a) El patrón Adapter se utiliza para adaptar una interfaz existente, mientras que el patrón Bridge se utiliza para separar la interfaz de una abstracción de su implementación.

5. ***¿En qué situaciones es útil utilizar el patrón Adapter?***
- a) Cuando se necesita adaptar una interfaz existente a una nueva interfaz requerida por el cliente.
- b) Cuando se necesita crear una interfaz abstracta para separar una abstracción de su implementación.
- c) Cuando se necesita controlar el acceso a un objeto y su comportamiento.
- Respuesta: a) Cuando se necesita adaptar una interfaz existente a una nueva interfaz requerida por el cliente.

### Bridge

En el contexto de diseño de patrones, el patrón Bridge (puente) es un patrón estructural que permite desacoplar una abstracción de su implementación, de modo que ambas puedan variar independientemente sin afectar a la otra.

La idea básica detrás del patrón Bridge es dividir una abstracción (una clase) y su implementación (otra clase) en dos jerarquías independientes. De esta forma, ambas jerarquías pueden variar por separado y se pueden combinar en tiempo de ejecución para crear diferentes objetos con diferentes implementaciones.

El patrón Bridge se utiliza comúnmente en situaciones en las que se desea separar la interfaz de usuario de la lógica de negocio subyacente. Por ejemplo, supongamos que estamos desarrollando una aplicación de dibujo en la que se pueden crear diferentes tipos de formas, como círculos, rectángulos y triángulos. En lugar de tener una clase "Forma" monolítica que contenga toda la lógica para cada tipo de forma, podríamos utilizar el patrón Bridge para separar la abstracción de "Forma" de su implementación. De esta forma, podríamos tener una jerarquía de clases "Forma" y una jerarquía de clases "Implementación de dibujo" separadas, y combinarlas en tiempo de ejecución para crear diferentes formas con diferentes estilos de dibujo.

En resumen, el patrón Bridge es una técnica útil para desacoplar una abstracción de su implementación, lo que puede mejorar la flexibilidad, la modularidad y la reutilización del código.

#### Ejemplo de desarrollo Bridge

Aquí te muestro un ejemplo sencillo de cómo se podría implementar el patrón Bridge en PHP para crear diferentes tipos de motores de combustión:

```js
<?php
interface Motor {
    public function encender();
}

class MotorGasolina implements Motor {
    public function encender() {
        echo "Encendiendo motor de gasolina...\n";
    }
}

class MotorDiesel implements Motor {
    public function encender() {
        echo "Encendiendo motor diesel...\n";
    }
}

abstract class Vehiculo {
    protected $motor;
    
    public function __construct(Motor $motor) {
        $this->motor = $motor;
    }
    
    abstract public function conducir();
}

class Coche extends Vehiculo {
    public function conducir() {
        $this->motor->encender();
        echo "Conduciendo coche...\n";
    }
}

class Camion extends Vehiculo {
    public function conducir() {
        $this->motor->encender();
        echo "Conduciendo camion...\n";
    }
}

// Crear un motor de gasolina
$motorGasolina = new MotorGasolina();

// Crear un coche con un motor de gasolina
$coche = new Coche($motorGasolina);
$coche->conducir(); // Output: Encendiendo motor de gasolina... Conduciendo coche...

// Crear un motor diesel
$motorDiesel = new MotorDiesel();

// Crear un camion con un motor diesel
$camion = new Camion($motorDiesel);
$camion->conducir(); // Output: Encendiendo motor diesel... Conduciendo camion...
?>
```
En este ejemplo, tenemos una interfaz **Motor** que define el método **encender()**, y dos clases que implementan esta interfaz: **MotorGasolina** y **MotorDiesel**. Luego, tenemos una clase abstracta Vehiculo que tiene un objeto **Motor** y un método abstracto **conducir()**. Finalmente, tenemos dos clases que extienden la clase Vehiculo ***(un Coche y un Camion)*** que implementan el método **conducir()**.

Al crear un objeto ***Coche o Camion***, debemos pasarle un objeto **Motor**, que determinará el tipo de motor que tiene el vehículo. Cuando llamamos al método **conducir()**, el vehículo enciende su motor y comienza a conducir.

#### Desventajas del patrón Bridge

1. Complejidad adicional: la implementación del patrón Bridge puede requerir más clases y estructuras adicionales, lo que puede aumentar la complejidad general del código.

2. Coste de mantenimiento: si se hacen cambios en las clases base o en las implementaciones del puente, puede ser necesario realizar cambios en varias partes del código, lo que puede aumentar el coste y el tiempo de mantenimiento.

3. Sobrecarga de la abstracción: si la abstracción tiene demasiadas responsabilidades o métodos adicionales, puede ser difícil de manejar y puede tener un rendimiento deficiente.

4. Necesidad de interfaces claras: para que el patrón Bridge funcione de manera efectiva, es necesario tener interfaces claras y bien definidas entre la abstracción y las implementaciones del puente. Si las interfaces no están bien definidas, pueden surgir problemas de compatibilidad y coherencia en el código.

En general, el patrón Bridge es útil para separar la abstracción de su implementación y proporcionar una mayor flexibilidad y escalabilidad en el diseño del software, pero también puede tener algunas desventajas y requiere un cuidadoso análisis y diseño para ser implementado correctamente.

#### Test

1. ***¿Qué patrón de diseño se utiliza para separar la abstracción de su implementación?***

- a) Bridge
- b) Adapter
- c) Singleton
- d) Prototype
2. ***¿Qué patrón de diseño se utiliza para permitir que la abstracción y la implementación varíen de manera independiente?***

- a) Bridge
- b) Facade
- c) Decorator
- d) Observer
3. ***¿Qué es la abstracción en el patrón Bridge?***

- a) La interfaz que define la implementación específica.
- b) La clase que contiene la implementación concreta.
- c) La clase que define la interfaz para la abstracción.
- d) La clase que contiene la lógica de negocio.
4. ***¿Qué es la implementación en el patrón Bridge?***

- a) La interfaz que define la implementación específica.
- b) La clase que contiene la implementación concreta.
- c) La clase que define la interfaz para la abstracción.
- d) La clase que contiene la lógica de negocio.
5. ***¿Cuál es uno de los beneficios del patrón Bridge?***

- a) Mejora el rendimiento del sistema.
- b) Permite que la abstracción y la implementación varíen de manera independiente.
- c) Proporciona una interfaz sencilla para interactuar con un conjunto complejo de subsistemas.
- d) Reduce la complejidad del código.

Respuestas:

1. a
2. a
3. c
4. b
5. b

### Composite

El patrón **Composite** es un patrón de diseño estructural que se utiliza para componer objetos en estructuras de árbol para representar jerarquías de parte-todo.

El patrón **Composite** define una interfaz común para todos los objetos en la estructura y proporciona dos tipos de objetos: **objetos hoja** que no tienen hijos y objetos compuestos que tienen una **lista de hijos**. Esto permite que los clientes traten los objetos individuales y las composiciones de objetos de manera uniforme.

El patrón **Composite** se utiliza a menudo en interfaces gráficas de usuario para representar estructuras de objetos complejas, como árboles de archivos y estructuras de menús.

Algunas ventajas del patrón Composite son que permite trabajar con estructuras de árbol de manera uniforme, es decir, los clientes no tienen que preocuparse por distinguir entre objetos hoja y objetos compuestos. Además, el patrón Composite facilita la adición de nuevos tipos de componentes a la estructura, ya que se pueden crear nuevos objetos hoja y objetos compuestos que implementen la interfaz común.

Sin embargo, el patrón Composite también tiene algunas desventajas. Por ejemplo, puede ser difícil de implementar si los objetos hoja y los objetos compuestos tienen diferentes interfaces. Además, el patrón Composite puede afectar el rendimiento de una aplicación si la estructura de objetos es muy grande.

#### Ejemplo de desarrollo

Supongamos que queremos crear una estructura de árbol de objetos que puedan ser representados y manejados de manera uniforme. Podríamos definir una interfaz llamada Component que define la estructura base de cada objeto en el árbol, incluyendo la capacidad de agregar, eliminar y obtener hijos.

```js
interface Component {
    public function add(Component $component);
    public function remove(Component $component);
    public function getChild(int $index): Component;
    public function operation();
}
```
A continuación, podemos implementar la interfaz Component en una clase Leaf para representar los nodos hoja del árbol:

```js
class Leaf implements Component {
    private $name;

    public function __construct(string $name) {
        $this->name = $name;
    }

    public function add(Component $component) {
        // No se puede agregar a un nodo hoja
    }

    public function remove(Component $component) {
        // No se puede eliminar de un nodo hoja
    }

    public function getChild(int $index): Component {
        // No tiene hijos, no se puede obtener un hijo por índice
        return null;
    }

    public function operation() {
        echo "Operación realizada en " . $this->name . "\n";
    }
}
```
También podemos implementar la interfaz Component en una clase Composite para representar los nodos internos del árbol que contienen otros nodos (hojas y/o nodos compuestos):
```js
class Composite implements Component {
    private $name;
    private $children = array();

    public function __construct(string $name) {
        $this->name = $name;
    }

    public function add(Component $component) {
        array_push($this->children, $component);
    }

    public function remove(Component $component) {
        $index = array_search($component, $this->children);
        if ($index !== false) {
            array_splice($this->children, $index, 1);
        }
    }

    public function getChild(int $index): Component {
        if (isset($this->children[$index])) {
            return $this->children[$index];
        } else {
            return null;
        }
    }

    public function operation() {
        echo "Operación realizada en " . $this->name . "\n";
        foreach ($this->children as $child) {
            $child->operation();
        }
    }
}
```
Finalmente, podemos crear una instancia de la clase **Composite** y agregar instancias de la clase **Leaf** y **Composite** como hijos:
```js
$root = new Composite("Raíz");

$node1 = new Leaf("Nodo 1");
$node2 = new Composite("Nodo 2");

$node21 = new Leaf("Nodo 2.1");
$node22 = new Leaf("Nodo 2.2");

$node2->add($node21);
$node2->add($node22);

$root->add($node1);
$root->add($node2);

$root->operation();
```
En este ejemplo, el método operation() se llama en la instancia de Composite root, que a su vez llama al método operation() en cada uno de sus hijos. Como resultado, se ejecuta la operación en cada nodo del árbol.

### Decorator

El patrón Decorator es un patrón de diseño estructural que permite agregar funcionalidades adicionales a un objeto en tiempo de ejecución sin modificar su estructura básica.

La idea principal del patrón es crear una clase Decorator que tenga el mismo tipo de interfaz que la clase original, y que también contenga un objeto de la clase original. A continuación, se pueden agregar nuevos comportamientos al objeto original a través de los Decorator sin alterar la clase original.

Por ejemplo, si tenemos una clase Pizza que tiene un método para calcular su costo, podemos crear un Decorator Topping que tome una Pizza como argumento en su constructor, y que agregue un costo adicional por cada topping que se agregue a la pizza.

#### Desventajas de Decorator

1. Aumento de la complejidad: Al agregar varias capas de decoradores, el código puede volverse más complejo y difícil de entender y mantener.

2. Posible impacto en el rendimiento: Agregar múltiples decoradores puede tener un impacto en el rendimiento del sistema, especialmente si los decoradores realizan operaciones costosas.

3. Problemas de interoperabilidad: A veces, el patrón Decorator puede dificultar la interoperabilidad con otros sistemas o bibliotecas de terceros que no usan el mismo patrón.

4. Sobrecarga de clases: El patrón Decorator puede requerir la creación de un gran número de clases, lo que puede ser un desafío para la organización y el mantenimiento del código.

5. Confusión con otros patrones: El patrón Decorator puede confundirse con otros patrones, como el patrón Adapter o el patrón Composite, lo que puede llevar a malentendidos y errores de diseño.

#### Ejemplo de desarrollo Decorator

Supongamos que tenemos una clase sencilla llamada Text que representa un texto:
```js
class Text
{
    private $text;

    public function __construct(string $text)
    {
        $this->text = $text;
    }

    public function getText(): string
    {
        return $this->text;
    }

    public function setText(string $text)
    {
        $this->text = $text;
    }
}
```
Ahora, queremos añadir algunas funcionalidades adicionales a esta clase sin modificarla directamente, utilizando el patrón **Decorator**. Para ello, creamos una interfaz **TextDecorator** que define la función **decorate**, que toma un objeto de tipo Text y devuelve otro objeto de tipo Text con las funcionalidades añadidas:

```js
interface TextDecorator
{
    public function decorate(Text $text): Text;
}
```
A continuación, creamos una clase BoldTextDecorator que implementa esta interfaz y añade la funcionalidad de poner el texto en negrita:

```js
class BoldTextDecorator implements TextDecorator
{
    public function decorate(Text $text): Text
    {
        $decoratedText = new Text('<b>' . $text->getText() . '</b>');
        return $decoratedText;
    }
}
```

Finalmente, creamos una clase ItalicTextDecorator que implementa la misma interfaz y añade la funcionalidad de poner el texto en cursiva:
```js
class ItalicTextDecorator implements TextDecorator
{
    public function decorate(Text $text): Text
    {
        $decoratedText = new Text('<i>' . $text->getText() . '</i>');
        return $decoratedText;
    }
}
```
Ahora podemos crear un objeto **Text*** y decorarlo con ambas funcionalidades:

```js
$text = new Text('Hello, world!');

$boldTextDecorator = new BoldTextDecorator();
$italicTextDecorator = new ItalicTextDecorator();

$boldAndItalicText = $italicTextDecorator->decorate($boldTextDecorator->decorate($text));
echo $boldAndItalicText->getText(); // Output: <i><b>Hello, world!</b></i>
```

En este ejemplo, hemos creado dos decoradores que añaden funcionalidades al objeto **Text**: uno que pone el texto en negrita y otro que lo pone en cursiva. Para decorar un objeto **Text** con ambas funcionalidades, simplemente aplicamos los decoradores en el orden deseado.





