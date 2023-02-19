---
sidebar_position: 2
---

# Patrones de diseño creacionales

## ¿Qué son los patrones de diseño creacionales?

Los patrones de diseño creacionales son un conjunto de patrones de diseño de software que se utilizan para abstraer el proceso de creación de objetos y permitir que el código sea más flexible, escalable y fácil de mantener. Estos patrones se centran en la creación de objetos de manera eficiente y en la gestión de las dependencias entre objetos para minimizar el acoplamiento y aumentar la cohesión en el código. Los patrones creacionales se utilizan para resolver problemas relacionados con la creación de objetos, como la creación de objetos en tiempo de ejecución, la gestión de la creación de objetos y la creación de objetos complejos.

## Tipos de patrones creacionales

| Patrón de diseño | Descripción |
| --- | --- |
| **Factory Method** | Define una interfaz para crear objetos en una superclase, pero permite que las subclases alteren el tipo de objetos que se crearán. |
| **Abstract Factory** | Proporciona una interfaz para crear familias de objetos relacionados o dependientes sin especificar sus clases concretas. |
| **Builder** | Separa la construcción de un objeto complejo de su representación, de modo que el mismo proceso de construcción pueda crear diferentes representaciones. |
| **Prototype** | Especifica los tipos de objetos a crear utilizando una instancia prototípica y crea nuevos objetos copiando este prototipo. |
| **Singleton** | Garantiza que una clase tenga solo una instancia y proporciona un punto de acceso global a ella. |

### Factory Method

El patrón **Factory Method** es un patrón creacional que proporciona una interfaz para crear objetos en una superclase, pero permite a las subclases alterar el tipo de objetos que se crearán. En otras palabras, el patrón Factory Method proporciona una forma de encapsular la creación de objetos en una jerarquía de clases.

El patrón **Factory Method** se compone de los siguientes componentes:

- **Product:** la interfaz para los objetos que se crearán.
las implementaciones concretas de Product.
- **Creator:** la clase abstracta que define el método de fábrica que crea los objetos.
- **ConcreteCreator:** las implementaciones concretas de Creator que devuelven una instancia concreta de ConcreteProduct.
El siguiente es un ejemplo de implementación del patrón Factory Method en PHP:

```php
<?php
interface Product {
    public function operation(): string;
}

class ConcreteProduct1 implements Product {
    public function operation(): string {
        return "ConcreteProduct1";
    }
}

class ConcreteProduct2 implements Product {
    public function operation(): string {
        return "ConcreteProduct2";
    }
}

abstract class Creator {
    abstract public function factoryMethod(): Product;

    public function someOperation(): string {
        $product = $this->factoryMethod();
        $result = "Creator: The same creator's code has just worked with " . $product->operation();

        return $result;
    }
}

class ConcreteCreator1 extends Creator {
    public function factoryMethod(): Product {
        return new ConcreteProduct1();
    }
}

class ConcreteCreator2 extends Creator {
    public function factoryMethod(): Product {
        return new ConcreteProduct2();
    }
}

function clientCode(Creator $creator) {
    echo "Client: I'm not aware of the creator's class, but it still works.\n"
        . $creator->someOperation();
}

echo "App: Launched with the ConcreteCreator1.\n";
clientCode(new ConcreteCreator1());
echo "\n\n";

echo "App: Launched with the ConcreteCreator2.\n";
clientCode(new ConcreteCreator2());
```

En este ejemplo, la interfaz **Product** define la operación que todos los productos deben implementar. ConcreteProduct1 y ConcreteProduct2 son implementaciones concretas de **Product**. La clase abstracta **Creator** define el método factoryMethod que las subclases deben implementar para crear los objetos. **ConcreteCreator1** y **ConcreteCreator2** son las implementaciones concretas de Creator que devuelven instancias concretas de **ConcreteProduct1** y **ConcreteProduct2**, respectivamente. La función clientCode demuestra cómo se pueden utilizar las clases anteriores para crear diferentes tipos de objetos.

#### Ejemplo de Factory Method

El ejemplo proporcionado es un ejemplo de Factory Method en PHP utilizando la librería PDO para conectarse a una base de datos MySQL, Oracle y SQL Server. En este ejemplo, se crea una clase abstracta DBConnector que contiene un método abstracto connect(). Luego, se crean clases concretas que extienden DBConnector para cada tipo de base de datos que se desea soportar: MySQLConnector, OracleConnector y SQLServerConnector. Cada clase concreta proporciona una implementación específica del método connect() que se utiliza para establecer la conexión con la base de datos correspondiente.

Para utilizar el Factory Method, se crea una clase DBConnectionFactory que tiene un método estático getDBConnection($dbType) que devuelve una instancia de la clase DBConnector correspondiente al tipo de base de datos especificado. Dentro de este método, se utiliza una estructura condicional para determinar qué clase concreta debe ser instanciada en función del tipo de base de datos especificado.

Finalmente, se utiliza el método getDBConnection() de DBConnectionFactory para obtener una instancia de la clase concreta adecuada y, a continuación, se llama al método connect() de esa instancia para establecer la conexión con la base de datos correspondiente.

```js
<?php

abstract class Connection {
    protected $dsn;
    protected $username;
    protected $password;

    abstract public function connect(): PDO;
}

class MySqlConnection extends Connection {
    public function __construct(string $host, string $port, string $dbname, string $username, string $password) {
        $this->dsn = "mysql:host=$host;port=$port;dbname=$dbname";
        $this->username = $username;
        $this->password = $password;
    }

    public function connect(): PDO {
        return new PDO($this->dsn, $this->username, $this->password);
    }
}

class OracleConnection extends Connection {
    public function __construct(string $host, string $port, string $dbname, string $username, string $password) {
        $this->dsn = "oci:host=$host;port=$port;dbname=$dbname";
        $this->username = $username;
        $this->password = $password;
    }

    public function connect(): PDO {
        return new PDO($this->dsn, $this->username, $this->password);
    }
}

class SqlServerConnection extends Connection {
    public function __construct(string $host, string $port, string $dbname, string $username, string $password) {
        $this->dsn = "sqlsrv:Server=$host,$port;Database=$dbname";
        $this->username = $username;
        $this->password = $password;
    }

    public function connect(): PDO {
        return new PDO($this->dsn, $this->username, $this->password);
    }
}

$mysqlConn = new MySqlConnection('localhost', '3306', 'mydatabase', 'myuser', 'mypassword');
$mysql = $mysqlConn->connect();

$oracleConn = new OracleConnection('localhost', '1521', 'oracledb', 'myuser', 'mypassword');
$oracle = $oracleConn->connect();

$sqlServerConn = new SqlServerConnection('localhost', '1433', 'sqlserverdb', 'myuser', 'mypassword');
$sqlServer = $sqlServerConn->connect();
```


#### Desventajas de Factory Method

El patrón Factory Method presenta algunas desventajas, entre ellas se pueden mencionar:

- Complejidad: Puede aumentar la complejidad del código ya que introduce nuevas clases y abstracciones.
- Dificultad para manejar dependencias: Cuando se utilizan clases concretas en lugar de interfaces, puede ser difícil manejar las dependencias de las diferentes implementaciones.
- Código redundante: En algunos casos, puede haber una cantidad significativa de código redundante en las subclases del Factory Method si tienen un comportamiento similar.
- Posibles problemas de rendimiento: Si el Factory Method se utiliza en exceso, puede haber problemas de rendimiento debido a la creación de muchas instancias de objetos.
Sin embargo, estas desventajas no siempre se aplican y pueden ser mitigadas con un diseño adecuado y el uso de patrones complementarios. Además, el patrón Factory Method proporciona una forma flexible y escalable de crear objetos y puede ser muy útil en muchas situaciones.

Ejemplos de cómo aplicar el principio DIP en el desarrollo de software

#### Test de repaso

1. ***¿Cuál es el objetivo principal del patrón Factory Method?***
- a) Proporcionar una interfaz para crear objetos en una superclase, pero permitiendo a las subclases alterar el tipo de objeto que se crea.
- b) Proporcionar una interfaz para acceder a un grupo de objetos relacionados.
- c) Proporcionar una manera de crear objetos de diferentes tipos sin especificar explícitamente las clases de los objetos.

2. ***¿Cuáles son los roles principales en el patrón Factory Method?***
- a) Producto, Creador, Cliente.
- b) Producto, Factory, Cliente.
- c) Creador, Factory, Cliente.

3.*** ¿Cuál es la ventaja principal del patrón Factory Method?***
- a) Ayuda a encapsular el proceso de creación de objetos.
- b) Ayuda a optimizar el rendimiento de la aplicación.
- c) Ayuda a reducir la complejidad de la aplicación.

4. ***¿Cuál es la diferencia entre el patrón Factory Method y el patrón Abstract Factory?***
- a) El patrón Factory Method define una interfaz para crear un objeto, mientras que el patrón Abstract Factory define una interfaz para crear una familia de objetos relacionados.
- b) El patrón Factory Method solo se usa en situaciones donde la creación de objetos es compleja, mientras que el patrón Abstract Factory se usa en cualquier situación de creación de objetos.
- c) El patrón Factory Method solo se usa con clases abstractas, mientras que el patrón Abstract Factory se usa con clases concretas.
Respuesta: a)

5. ***¿Cuál es la desventaja principal del patrón Factory Method?***
- a) Puede aumentar la complejidad del código al requerir la creación de múltiples clases.
- b) Puede aumentar la complejidad del código al requerir la creación de una sola clase.
- c) Puede disminuir la flexibilidad de la aplicación al limitar las opciones de creación de objetos.


#### Respuestas

¿Qué es el patrón Factory Method?

Respuesta correcta: El patrón de diseño Factory Method define una interfaz para crear objetos, pero deja que las subclases decidan qué clase instanciar.
¿Cuál es la ventaja principal del patrón Factory Method?

Respuesta correcta: La ventaja principal del patrón Factory Method es que permite el encapsulamiento de la creación de objetos y la flexibilidad para cambiar la clase concreta de un objeto sin cambiar el código que lo usa.
¿Cómo se implementa el patrón Factory Method?

Respuesta correcta: El patrón Factory Method se implementa definiendo una interfaz para crear objetos en una clase abstracta, y luego definiendo una o más subclases que implementan esta interfaz para crear objetos de diferentes tipos.
¿Qué es una fábrica concreta?

Respuesta correcta: Una fábrica concreta es una subclase que implementa la interfaz de la fábrica abstracta para crear objetos de un tipo específico.
¿En qué se diferencia el patrón Factory Method del patrón Abstract Factory?

Respuesta correcta: El patrón Factory Method define una interfaz para crear un solo objeto, mientras que el patrón Abstract Factory define una interfaz para crear familias de objetos relacionados entre sí.

### Abstract Factory

El patrón Abstract Factory es útil cuando se requiere crear familias de objetos relacionados o dependientes entre sí, sin tener que especificar explícitamente sus clases concretas.

Este patrón es especialmente útil en situaciones donde un sistema debe ser independiente de cómo se crean, compuestas o representan sus objetos.

Además, el uso de Abstract Factory también permite que el código sea más escalable y flexible en el futuro, ya que se puede agregar fácilmente nuevas familias de objetos sin tener que cambiar el código existente.

En resumen, Abstract Factory sirve para crear objetos relacionados o dependientes entre sí, manteniendo la independencia de cómo se crean y mejorando la escalabilidad y flexibilidad del código.

#### Ejemplo de Abstract Factory

Supongamos que queremos implementar una tienda en línea que vende productos electrónicos y queremos utilizar el patrón Abstract Factory para manejar las diferentes categorías de productos que ofrecemos.

Primero, definimos la interfaz para la fábrica abstracta que nos permitirá crear los diferentes tipos de productos electrónicos:

```js
interface ElectronicFactory {
    public function createLaptop(): Laptop;
    public function createSmartphone(): Smartphone;
}
```
Luego, implementamos la fábrica concreta para la categoría de productos Apple:
```js
class AppleFactory implements ElectronicFactory {
    public function createLaptop(): Laptop {
        return new MacBook();
    }
    
    public function createSmartphone(): Smartphone {
        return new iPhone();
    }
}
```
La fábrica concreta para la categoría de productos Samsung:
```js
class SamsungFactory implements ElectronicFactory {
    public function createLaptop(): Laptop {
        return new Notebook();
    }
    
    public function createSmartphone(): Smartphone {
        return new Galaxy();
    }
}
```
A continuación, definimos la interfaz para cada tipo de producto electrónico que queremos crear:
```js
interface Laptop {
    public function getDescription(): string;
}
```
```js
interface Smartphone {
    public function getDescription(): string;
}
```
Implementamos cada tipo de producto en cada categoría:
```js
class MacBook implements Laptop {
    public function getDescription(): string {
        return "This is a MacBook.";
    }
}
```
```js
class iPhone implements Smartphone {
    public function getDescription(): string {
        return "This is an iPhone.";
    }
}
```
```js
class Notebook implements Laptop {
    public function getDescription(): string {
        return "This is a Samsung notebook.";
    }
}
```
```js
class Galaxy implements Smartphone {
    public function getDescription(): string {
        return "This is a Samsung Galaxy.";
    }
}
```
Finalmente, creamos un cliente que utilice el patrón Abstract Factory para crear los productos electrónicos que necesitamos:
```js
class Client {
    private $laptop;
    private $smartphone;
    
    public function __construct(ElectronicFactory $factory) {
        $this->laptop = $factory->createLaptop();
        $this->smartphone = $factory->createSmartphone();
    }
    
    public function showProducts() {
        echo $this->laptop->getDescription() . "\n";
        echo $this->smartphone->getDescription() . "\n";
    }
}
```
Y podemos crear objetos de la siguiente manera:
```js
$appleFactory = new AppleFactory();
$client1 = new Client($appleFactory);
$client1->showProducts();

$samsungFactory = new SamsungFactory();
$client2 = new Client($samsungFactory);
$client2->showProducts();
```
#### Desventajas de Abstract Factory

Algunas de las desventajas de Abstract Factory son:

1. Complejidad: Abstract Factory puede aumentar la complejidad de un código, especialmente si se utilizan muchas jerarquías de fábrica y clases de productos.

2. Rigidez: Si se necesita agregar una nueva variante de producto, también se debe agregar una nueva jerarquía de fábrica correspondiente. Esto puede llevar a una rigidez en el diseño y una mayor complejidad.

3. Escalabilidad: A medida que el número de productos y variantes aumenta, el número de clases de fábrica y productos puede crecer exponencialmente, lo que dificulta la escalabilidad del diseño.

4. Sobrecarga: El uso de Abstract Factory puede aumentar la sobrecarga del procesamiento, ya que cada instancia de fábrica requiere una instancia de cada producto que puede crear.

5. Dificultad en la implementación: La implementación de Abstract Factory puede requerir más tiempo y esfuerzo en comparación con otros patrones de diseño creacionales más simples, como el patrón Factory Method.

#### Test

1. ***¿Qué patrón de diseño está relacionado con la creación de objetos?***
- A. Abstract Factory
- B. Adapter
- C. Bridge
- D. Composite
2. ***¿Cuál es el objetivo principal de Abstract Factory?***
- A. Proporcionar una interfaz para crear objetos de una familia de productos relacionados sin especificar su clase concreta.
- B. Convertir la interfaz de una clase en otra interfaz que los clientes esperan.
- C. Separar la abstracción de su implementación para que ambas puedan variar de forma independiente.
- D. Proporcionar una manera de acceder a un objeto en particular sin exponer su estructura interna.
3. ***¿Cuál de las siguientes opciones es una característica de Abstract Factory?***
- A. El cliente interactúa directamente con los productos que crea la fábrica.
- B. La fábrica abstracta define la interfaz para la creación de objetos de una familia de productos relacionados.
- C. La fábrica concreta crea objetos de una sola familia de productos.
- D. El patrón requiere la creación de una clase abstracta adicional para representar la fábrica concreta.
4. ***¿Qué es una "familia de productos" en el contexto de Abstract Factory?***
- A. Un grupo de objetos que tienen una relación de herencia entre sí.
- B. Un conjunto de objetos relacionados que tienen una función o propósito común.
- C. Un grupo de objetos que se crean juntos a partir de una misma fábrica.
- D. Un conjunto de objetos que comparten la misma interfaz.
5. ***¿Cuál es una desventaja potencial de Abstract Factory?***
- A. Puede ser difícil de implementar correctamente.
- B. Requiere la creación de múltiples clases abstractas y concretas.
- C. No proporciona una manera fácil de extender la creación de nuevos productos.
- D. Puede introducir una complejidad innecesaria en el diseño.

#### Respuestas

1. ***¿Qué es Abstract Factory?***
- Respuesta correcta: b) Un patrón de diseño creacional que proporciona una interfaz para crear familias de objetos relacionados sin especificar sus clases concretas.

2. ***¿Cuál es el objetivo principal de Abstract Factory?***
- Respuesta correcta: c) Proporcionar una interfaz para crear familias de objetos relacionados o dependientes sin especificar sus clases concretas.

3. ***¿Cuál es la diferencia entre Factory Method y Abstract Factory?***
- Respuesta correcta: a) Factory Method define una interfaz para crear un solo objeto, mientras que Abstract Factory define una interfaz para crear familias de objetos relacionados.

$. ***¿Qué ventaja proporciona Abstract Factory en comparación con Factory Method?***
- Respuesta correcta: d) Abstract Factory proporciona una mayor flexibilidad y capacidad de extensión que Factory Method, ya que permite la creación de familias de objetos relacionados en lugar de objetos individuales.

¿Cuál es una desventaja potencial de Abstract Factory?
- Respuesta correcta: b) Puede resultar complicado de implementar si las familias de objetos son muy complejas o si cambian con frecuencia. Además, puede requerir la creación de múltiples clases para cada familia de objetos.

### Builder

El patrón de diseño Builder se utiliza para separar la construcción de un objeto complejo de su representación, permitiendo que el mismo proceso de construcción pueda crear diferentes representaciones. Es útil cuando se desea crear objetos compuestos, es decir, objetos que están compuestos de varias partes, pero donde estas partes no necesariamente deben ser usadas juntas.

El patrón Builder se compone de una clase abstracta Builder, que define los métodos necesarios para construir cada parte del objeto complejo, y de una clase Director, que dirige el proceso de construcción utilizando el Builder. También hay una clase ConcreteBuilder para cada representación del objeto complejo, que implementa los métodos de Builder y construye la representación específica del objeto.

Un ejemplo práctico de Builder es la construcción de un objeto Pizza. En este ejemplo, la clase abstracta Builder define los métodos para construir la masa, los ingredientes y la cobertura de la pizza, mientras que la clase ConcreteBuilder construye una pizza concreta (como una pizza de pepperoni) y la clase Director utiliza el Builder para construir una pizza completa.

Una de las principales ventajas del patrón Builder es que permite la creación de objetos complejos de manera incremental, lo que hace que el proceso de construcción sea más flexible y fácil de controlar. Además, permite que el proceso de construcción sea independiente de la representación final del objeto, lo que facilita la creación de múltiples representaciones.

Entre las desventajas del patrón Builder se encuentra que puede ser un patrón complejo y difícil de implementar, especialmente para objetos muy complejos. Además, puede resultar en una sobrecarga de clases, lo que puede dificultar la comprensión del código.

En resumen, el patrón Builder es una herramienta útil para la construcción de objetos complejos y flexibles, que permite la creación de múltiples representaciones del mismo objeto. Si bien puede ser difícil de implementar, puede facilitar el control del proceso de construcción y mejorar la flexibilidad del código.

#### Ejemplo de Builder
En este ejemplo, la clase Burger representa el producto final, que en este caso es una hamburguesa. La clase BurgerBuilder es el constructor que crea diferentes tipos de hamburguesas. El cliente utiliza la clase BurgerBuilder para crear una hamburguesa, añadiendo los ingredientes que desee mediante llamadas a los métodos addCheese(), addPepperoni(), addLettuce(), addTomato() y finalmente llama al método build() para construir el objeto Burger final.

Una ventaja de este enfoque es que permite al cliente construir objetos complejos sin tener que preocuparse por el proceso de construcción. Además, como la clase BurgerBuilder es responsable de la construcción de objetos, el código es más fácil de mantener y modificar en el futuro.

```js
<?php
// Product
class Burger {
  private $size;
  private $cheese = false;
  private $pepperoni = false;
  private $lettuce = false;
  private $tomato = false;

  public function __construct(BurgerBuilder $builder) {
    $this->size = $builder->size;
    $this->cheese = $builder->cheese;
    $this->pepperoni = $builder->pepperoni;
    $this->lettuce = $builder->lettuce;
    $this->tomato = $builder->tomato;
  }

  public function describe() {
    $description = "This is a {$this->size} burger";
    if ($this->cheese) {
      $description .= " with cheese";
    }
    if ($this->pepperoni) {
      $description .= " with pepperoni";
    }
    if ($this->lettuce) {
      $description .= " with lettuce";
    }
    if ($this->tomato) {
      $description .= " with tomato";
    }
    return $description;
  }
}

// Builder
class BurgerBuilder {
  public $size;
  public $cheese = false;
  public $pepperoni = false;
  public $lettuce = false;
  public $tomato = false;

  public function __construct($size) {
    $this->size = $size;
  }

  public function addCheese() {
    $this->cheese = true;
    return $this;
  }

  public function addPepperoni() {
    $this->pepperoni = true;
    return $this;
  }

  public function addLettuce() {
    $this->lettuce = true;
    return $this;
  }

  public function addTomato() {
    $this->tomato = true;
    return $this;
  }

  public function build() {
    return new Burger($this);
  }
}

// Client
$builder = new BurgerBuilder("large");
$burger = $builder->addCheese()->addPepperoni()->addLettuce()->build();
echo $burger->describe(); // This is a large burger with cheese with pepperoni with lettuce
```

#### Desventajas de Builder

Algunas desventajas del patrón Builder pueden incluir:

1. Aumenta la complejidad del código: El patrón Builder puede aumentar la complejidad del código ya que requiere la creación de múltiples clases y objetos.

2. Requiere más recursos de memoria: El proceso de construcción de objetos puede requerir una cantidad significativa de recursos de memoria, lo que puede ser un problema en aplicaciones que tienen limitaciones de memoria.

3. No se adapta bien a objetos simples: El patrón Builder es más útil para la construcción de objetos complejos, por lo que no es la mejor opción para objetos simples que se pueden construir fácilmente con un constructor básico.

4. Puede introducir errores: El proceso de construcción de objetos utilizando el patrón Builder es más complejo que la creación de objetos utilizando un constructor básico, lo que aumenta la posibilidad de errores.

5. Puede ser difícil de entender para los desarrolladores nuevos: Los desarrolladores nuevos pueden encontrar el patrón Builder difícil de entender y puede tomarles tiempo aprender cómo funciona y cómo implementarlo correctamente en su código.

#### Test

1. ***¿Cuál es el propósito del patrón de diseño Builder?***
- a) Simplificar la creación de objetos complejos.
- b) Permitir la creación de objetos sin necesidad de una clase constructora.
- c) Facilitar la modificación de la estructura de un objeto.
- Respuesta: a) Simplificar la creación de objetos complejos.

2. ***¿Qué problema resuelve el patrón de diseño Builder?***
- a) Crear objetos complejos de forma sencilla y flexible.
- b) Crear objetos sin necesidad de una clase constructora.
- c) Crear objetos que no se puedan modificar una vez construidos.
- Respuesta: a) Crear objetos complejos de forma sencilla y flexible.

3. ***¿Cuál es la diferencia entre el patrón de diseño Builder y el patrón de diseño Factory Method?***
- a) El patrón Builder simplifica la creación de objetos complejos mientras que el patrón Factory Method se encarga de crear objetos sin especificar su clase concreta.
- b) El patrón Factory Method se encarga de crear objetos complejos mientras que el patrón Builder se encarga de crear objetos sin especificar su clase concreta.
- c) El patrón Builder y el patrón Factory Method resuelven el mismo problema.
- Respuesta: a) El patrón Builder simplifica la creación de objetos complejos mientras que el patrón Factory Method se encarga de crear objetos sin especificar su clase concreta.

4. ***¿Cómo se compone el patrón de diseño Builder?***-
- a) Director, Builder y Producto.
- b) Constructor, Productor y Director.
- c) Constructor, Director y Producto.
- Respuesta: a) Director, Builder y Producto.

5. ***¿Cuándo se debe usar el patrón de diseño Builder?***
- a) Cuando se necesite crear objetos complejos de forma sencilla y flexible.
- b) Cuando se necesite crear objetos sin especificar su clase concreta.
- c) Cuando se necesite crear objetos que no se puedan modificar una vez construidos.
- Respuesta: a) Cuando se necesite crear objetos complejos de forma sencilla y flexible.

### Prototype

El patrón de diseño Prototype es un patrón creacional que permite la creación de nuevos objetos a partir de la clonación de objetos existentes. En lugar de crear nuevos objetos utilizando la palabra clave "new", este patrón crea nuevos objetos copiando uno existente. Esto es útil cuando la creación de objetos es costosa en términos de tiempo y recursos.

El patrón Prototype se basa en la implementación de un método "clone()" que copia los atributos de un objeto existente a un nuevo objeto. El objeto original se conoce como "prototipo" y se utiliza como base para la creación de nuevos objetos.

Este patrón puede ser utilizado cuando:

La creación de objetos es costosa en términos de tiempo y recursos.
El número de clases a instanciar es limitado y se conocen de antemano.
Los objetos a crear son variantes de un objeto existente.
Una de las ventajas de este patrón es que puede reducir el acoplamiento entre las clases y aumentar la flexibilidad del código.

Sin embargo, una de las desventajas es que el patrón puede ser más difícil de implementar en lenguajes que no tienen soporte integrado para la clonación de objetos, y puede ser más difícil de entender y mantener si no se utiliza de manera adecuada.

En resumen, el patrón Prototype permite la creación de nuevos objetos a partir de la clonación de objetos existentes, lo que puede ser útil cuando la creación de objetos es costosa en términos de tiempo y recursos. Aunque puede aumentar la flexibilidad y reducir el acoplamiento entre clases, puede ser más difícil de implementar y entender si no se utiliza de manera adecuada.

¿En qué se basa el patrón Prototype?

El patrón Prototype se basa en la implementación de un método "clone()" que copia los atributos de un objeto existente a un nuevo objeto. El objeto original se conoce como "prototipo" y se utiliza como base para la creación de nuevos objetos.

¿Para qué se utiliza el patrón Prototype?

El patrón Prototype se utiliza para crear nuevos objetos a partir de la clonación de objetos existentes. Esto puede ser útil cuando la creación de objetos es costosa en términos de tiempo y recursos, y cuando los objetos a crear son variantes de un objeto existente.

¿Qué es un prototipo en el patrón Prototype?

Un prototipo en el patrón Prototype es un objeto existente que se utiliza como base para la creación de nuevos objetos. El prototipo se clona para crear un nuevo objeto con los mismos atributos.

¿Cuál es una de las ventajas del patrón Prototype?

Una de las ventajas del patrón Prototype es que puede reducir el acoplamiento entre las clases y aumentar la flexibilidad del código.

¿Cuál es una de las desventajas del patrón Prototype?

Una de las desventajas del patrón Prototype es que puede ser más difícil de implementar en lenguajes que no tienen soporte integrado para la clonación de objetos, y puede ser más difícil de entender y mantener si no se utiliza de manera adecuada.

#### Ejemplo de desarrollo Prototype

En este ejemplo, creamos un objeto prototipo Car con un color rojo, modelo BMW y 2 puertas. Luego, clonamos este objeto prototipo para crear un nuevo objeto Car con color azul y 4 puertas. Finalmente, mostramos la información del nuevo objeto Car creado a partir del prototipo.

```js
// Clase base Vehicle
class Vehicle
{
    private $color;
    private $numRuedas;
    private $modelo;

    public function __construct($color, $numRuedas, $modelo)
    {
        $this->color = $color;
        $this->numRuedas = $numRuedas;
        $this->modelo = $modelo;
    }

    // Getter y setters para las propiedades privadas
    public function getColor()
    {
        return $this->color;
    }

    public function setColor($color)
    {
        $this->color = $color;
    }

    public function getNumRuedas()
    {
        return $this->numRuedas;
    }

    public function setNumRuedas($numRuedas)
    {
        $this->numRuedas = $numRuedas;
    }

    public function getModelo()
    {
        return $this->modelo;
    }

    public function setModelo($modelo)
    {
        $this->modelo = $modelo;
    }

    // Método clone para crear un nuevo objeto a partir del prototipo
    public function __clone()
    {
        return new Vehicle($this->color, $this->numRuedas, $this->modelo);
    }
}

// Subclase Car
class Car extends Vehicle
{
    private $numPuertas;

    public function __construct($color, $modelo, $numPuertas)
    {
        parent::__construct($color, 4, $modelo);
        $this->numPuertas = $numPuertas;
    }

    // Getter y setter para la propiedad privada
    public function getNumPuertas()
    {
        return $this->numPuertas;
    }

    public function setNumPuertas($numPuertas)
    {
        $this->numPuertas = $numPuertas;
    }
}

// Creamos un objeto prototipo
$carProto = new Car('Rojo', 'BMW', 2);

// Clonamos el prototipo para crear un nuevo objeto Car
$newCar = clone $carProto;
$newCar->setColor('Azul');
$newCar->setNumPuertas(4);

// Mostramos la información del nuevo objeto Car
echo "Color: " . $newCar->getColor() . "<br>";
echo "Modelo: " . $newCar->getModelo() . "<br>";
echo "Número de puertas: " . $newCar->getNumPuertas() . "<br>";
echo "Número de ruedas: " . $newCar->getNumRuedas() . "<br>";
```

#### Desventajas de Prototype

1. Clonación profunda: Aunque la clonación de un objeto es una tarea fácil y efectiva en muchos casos, puede ser compleja cuando el objeto a clonar tiene referencias a otros objetos. En este caso, se requerirá una clonación profunda, que puede ser difícil y propensa a errores.

2. Costo de memoria: La clonación de objetos puede ser costosa en términos de memoria, especialmente si se clonan objetos grandes y complejos con frecuencia. Esto puede afectar el rendimiento de la aplicación en términos de tiempo de ejecución y uso de memoria.

3. Inestabilidad: Si un objeto prototipo cambia después de ser clonado, puede haber efectos secundarios no deseados en todos los objetos clonados. Esto puede llevar a un comportamiento inesperado de la aplicación y puede ser difícil de depurar.

4. Uso limitado: El patrón Prototype se adapta mejor a situaciones donde los objetos son complejos y costosos de crear. Si los objetos son simples y se pueden crear fácilmente, el patrón Prototype puede agregar una complejidad innecesaria a la aplicación.

5. Diseño inicial complejo: La implementación del patrón Prototype puede requerir una estructura de clase compleja para manejar la clonación de objetos. Esto puede hacer que el diseño inicial de la aplicación sea más complicado y difícil de entender.

#### Test

1. ***¿Cuál es el objetivo principal del patrón Prototype?***
- a) Simplificar la creación de objetos complejos.
- b) Permitir la creación de objetos con diferentes implementaciones.
- c) Permitir la creación de nuevos objetos clonando objetos existentes.
- Respuesta: c)

2. ***¿Qué método se utiliza para clonar objetos en PHP?***
- a) __clone()
- b) __construct()
- c) __create()
- Respuesta: a)

3. ***¿Qué significa la frase "shallow copy" en relación con la clonación de objetos?***
- a) Que se copian solo las propiedades de nivel superior del objeto.
- b) Que se copian todas las propiedades y métodos del objeto.
- c) Que se crea una copia exacta del objeto original.
- Respuesta: a)

4. ***¿Cuál es la diferencia entre el patrón Prototype y el patrón Singleton?***
- a) El patrón Singleton se utiliza para crear una única instancia de una clase, mientras que el patrón Prototype se utiliza para crear múltiples instancias de una clase.
- b) El patrón Prototype se utiliza para crear una única instancia de una clase, mientras que el patrón Singleton se utiliza para crear múltiples instancias de una clase.
- c) No hay diferencia entre ambos patrones.
- Respuesta: a)

5. ***¿Qué tipos de objetos se benefician más del uso del patrón Prototype?***
- a) Objetos que son costosos o difíciles de crear.
- b) Objetos que no tienen una estructura fija.
- c) Objetos que son simples y no necesitan mucha personalización.
- Respuesta: a)

### Singleton

El Singleton garantiza que una clase solo tenga una instancia, y proporciona un punto de acceso global a ella. La clase Singleton contiene una instancia privada de sí misma y un constructor privado para evitar que se cree más de una instancia. En su lugar, proporciona un método estático para obtener la única instancia disponible.

Una de las ventajas del patrón Singleton es que garantiza que solo haya una instancia de la clase, lo que puede mejorar el rendimiento y reducir la sobrecarga de memoria. Sin embargo, también puede ser una desventaja, ya que puede ser difícil probar el código que utiliza el Singleton y puede dificultar la extensibilidad del código.

En general, el patrón Singleton es útil cuando se necesita una instancia global de una clase que sea fácilmente accesible en todo el programa y solo necesite ser creada una vez. Sin embargo, también es importante tener en cuenta las posibles desventajas del patrón y considerar cuidadosamente si es el enfoque adecuado para el problema que se está resolviendo.

#### Ejemplo de desarroloo Protorype

En este ejemplo, la clase DatabaseConnection implementa el patrón Singleton para garantizar que solo haya una instancia de la conexión a la base de datos en todo el programa. La clase tiene un constructor privado que solo puede ser llamado internamente y un método estático getInstance que devuelve la única instancia de la clase. Si la instancia aún no ha sido creada, se crea una nueva instancia y se devuelve la conexión PDO.

También se han agregado los métodos __clone y __wakeup para evitar la creación de copias o deserialización de la instancia existente.

Para utilizar esta conexión a la base de datos, simplemente se llama al método getInstance con los parámetros necesarios para crear la conexión, como se muestra a continuación:

php
Copy code
$pdo = DatabaseConnection::getInstance('mysql:host=localhost;dbname=mydatabase', 'username', 'password');
De esta forma, siempre se obtiene la misma instancia de la conexión a la base de datos, lo que ayuda a evitar problemas de concurrencia y mejora la eficiencia del programa.

```js
class DatabaseConnection
{
    private static $instance;
    private $pdo;

    private function __construct($dsn, $username, $password)
    {
        $this->pdo = new PDO($dsn, $username, $password);
    }

    public static function getInstance($dsn, $username, $password)
    {
        if (!isset(self::$instance)) {
            self::$instance = new self($dsn, $username, $password);
        }
        return self::$instance->pdo;
    }

    public function __clone()
    {
        trigger_error('Clone is not allowed.', E_USER_ERROR);
    }

    public function __wakeup()
    {
        trigger_error('Deserializing is not allowed.', E_USER_ERROR);
    }
}
```
#### Desventajas de Singleton

1. Puede ser difícil de probar: Al usar Singleton en una aplicación, puede ser difícil escribir pruebas unitarias para su código, ya que el estado de Singleton se comparte en toda la aplicación. Esto puede dificultar la reproducibilidad de errores y aumentar la complejidad de las pruebas.

2. Acoplamiento: El patrón Singleton puede aumentar el acoplamiento entre clases, ya que cada clase que utiliza Singleton debe conocer su existencia y utilizarla explícitamente.

3. Dependencia del orden de inicialización: Si las clases dependen del Singleton, su orden de inicialización es importante. Si se inicializa en el orden incorrecto, esto puede provocar errores en la aplicación.

4. Problemas de concurrencia: El patrón Singleton puede tener problemas de concurrencia, especialmente en aplicaciones que se ejecutan en paralelo o en sistemas distribuidos. Si varios subprocesos acceden al Singleton al mismo tiempo, puede provocar errores y comportamientos inesperados.

5. Problemas de escalabilidad: El patrón Singleton puede hacer que sea difícil escalar una aplicación, ya que la aplicación está diseñada para depender de una sola instancia de una clase. Si se necesita escalar una aplicación para manejar más tráfico o usuarios, es posible que el patrón Singleton no sea la mejor opción.

### Test de conocimientos generales

1. ***¿Cuál de los siguientes patrones de diseño creacionales proporciona una interfaz para crear objetos en una superclase, pero permite a las subclases alterar el tipo de objetos que se crearán?***
- a) Singleton
- b) Builder
- c) Abstract Factory
- d) Prototype
- Respuesta: c) Abstract Factory

2. ***¿Cuál de los siguientes patrones de diseño creacionales se utiliza para garantizar que solo haya una instancia de una clase y proporcionar un punto de acceso global a ella?***
- a) Prototype
- b) Singleton
- c) Factory Method
- d) Builder
- Respuesta: b) Singleton

3. ***¿Cuál de los siguientes patrones de diseño creacionales se utiliza para crear objetos complejos paso a paso y permitir su construcción en diferentes etapas?***
- a) Prototype
- b) Abstract Factory
- c) Builder
- d) Factory Method
- Respuesta: c) Builder

4. ***¿Cuál de los siguientes patrones de diseño creacionales se utiliza para crear objetos sin tener que especificar la clase exacta del objeto que se creará?***
- a) Abstract Factory
- b) Builder
- c) Prototype
- d) Factory Method
- Respuesta: c) Prototype

5. ***¿Cuál de los siguientes patrones de diseño creacionales se utiliza para definir una interfaz para crear objetos, pero deja que las subclases decidan qué clase instanciar?***
- a) Prototype
- b) Singleton
- c) Abstract Factory
- d) Factory Method
- Respuesta: d) Factory Method

6. ***¿Cuál de los siguientes patrones de diseño creacionales se utiliza para crear objetos de una sola vez y mantener una única instancia en toda la aplicación?***
- a) Abstract Factory
- b) Singleton
- c) Builder
- d) Prototype
- Respuesta: b) Singleton

7. ***¿Cuál de los siguientes patrones de diseño creacionales se utiliza para crear una jerarquía de fábricas relacionadas o dependientes sin especificar sus clases concretas?***
- a) Factory Method
- b) Singleton
- c) Abstract Factory
- d) Builder
- Respuesta: c) Abstract Factory

8. ***¿Cuál de los siguientes patrones de diseño creacionales se utiliza para encapsular la creación de objetos y ocultar la lógica de creación detrás de una interfaz común?***
- a) Builder
- b) Prototype
- c) Abstract Factory
- d) Factory Method
- Respuesta: d) Factory Method

9. ***¿Cuál de los siguientes patrones de diseño creacionales se utiliza para crear objetos complejos utilizando una serie de pasos bien definidos y concretos?***
- a) Abstract Factory
- b) Singleton
- c) Builder
- d) Prototype
- Respuesta: c) Builder

10. ***¿Cuál de los siguientes patrones de diseño creacionales se utiliza para crear objetos basados en una jerarquía de clases y permitir que una subclase cambie el tipo de objeto que se crea?***
- a) Factory Method
- b) Singleton
- c) Abstract Factory
- d) Builder
- Respuesta: a) Factory Method
