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