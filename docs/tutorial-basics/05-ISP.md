---
sidebar_position: 4
---

# Principio de segregación de la interfaz (ISP)

## ¿Qué es el principio ISP?

El principio ISP (Interface Segregation Principle, o principio de segregación de interfaces en español) es uno de los cinco principios SOLID y establece que una clase no debe depender de interfaces que no utiliza.

En otras palabras, una clase no debe ser forzada a implementar métodos que no necesita simplemente porque su interfaz lo exige. En lugar de eso, se deben dividir las interfaces en grupos más pequeños y cohesivos, de manera que las clases sólo implementen las interfaces que necesitan.

Esto tiene varias ventajas, como una mayor modularidad y flexibilidad en el diseño, una menor cantidad de código duplicado y una mayor facilidad para hacer cambios en el futuro sin afectar a otras partes del sistema.

En resumen, el principio ISP promueve la creación de interfaces específicas y cohesivas, y evita que las clases dependan de interfaces que no necesitan.

:::tip Ejemplo sencillo
Supongamos que tenemos una interfaz IMotorVehicle que representa un vehículo con motor. Esta interfaz tiene métodos como acelerar(), frenar(), encender() y apagar(). Ahora supongamos que queremos implementar esta interfaz en una clase Bicicleta, pero nos damos cuenta de que los métodos acelerar() y frenar() no tienen sentido para una bicicleta sin motor.

En lugar de implementar métodos innecesarios, podemos dividir la interfaz IMotorVehicle en dos interfaces más pequeñas: IMotorVehicle y INonMotorVehicle. IMotorVehicle incluiría los métodos encender() y apagar(), mientras que INonMotorVehicle incluiría los métodos acelerar() y frenar(). De esta manera, las clases que no tienen un motor no tendrán que preocuparse por implementar métodos que no son relevantes para ellas.

En resumen, el principio ISP establece que es mejor tener interfaces más pequeñas y específicas en lugar de tener una única interfaz grande y compleja. De esta manera, las clases que implementen una interfaz solo tendrán que preocuparse por los métodos que sean relevantes para ellas.
:::

## ¿Por qué es importante seguir el principio ISP?

El principio ISP (Interface Segregation Principle) es importante porque ayuda a garantizar que las interfaces de los objetos sean cohesivas y específicas para las necesidades de los clientes que las usan. Si una interfaz es demasiado grande y tiene demasiados métodos, los clientes pueden verse obligados a implementar métodos que no necesitan o no usan, lo que resulta en un código innecesariamente complejo e inflexible.

Al seguir el principio ISP, las interfaces se dividen en partes más pequeñas y cohesivas, lo que permite que los clientes usen solo las partes de la interfaz que necesitan. Esto puede resultar en código más claro y fácil de mantener, y puede permitir que los objetos sean más fácilmente reutilizables en diferentes contextos. En general, seguir el principio ISP puede ayudar a mejorar la modularidad y la flexibilidad del código.

## Ejemplos de cómo aplicar el principio ISP en el desarrollo de software

Supongamos que tenemos una interfaz OrderInterface para procesar órdenes de compra. Sin embargo, no todas las órdenes tienen los mismos métodos o atributos, por lo que la interfaz se vuelve muy grande y compleja. Para aplicar el principio ISP, podemos separar la interfaz en interfaces más pequeñas y especializadas, para que cada clase que implemente la interfaz solo implemente los métodos que necesita.

```php
interface OrderInterface
{
    public function processOrder();
    public function cancelOrder();
    public function shipOrder();
    public function calculateTotal();
    public function sendConfirmationEmail();
}

interface ShippingInterface
{
    public function shipOrder();
}

interface EmailInterface
{
    public function sendConfirmationEmail();
}

class Order implements OrderInterface, ShippingInterface, EmailInterface
{
    public function processOrder()
    {
        // lógica para procesar la orden
    }

    public function cancelOrder()
    {
        // lógica para cancelar la orden
    }

    public function shipOrder()
    {
        // lógica para enviar la orden
    }

    public function calculateTotal()
    {
        // lógica para calcular el total de la orden
    }

    public function sendConfirmationEmail()
    {
        // lógica para enviar el correo electrónico de confirmación
    }
}
```

En este ejemplo, separamos la interfaz OrderInterface en dos interfaces más especializadas: ShippingInterface y EmailInterface. Luego, creamos la clase Order que implementa estas dos interfaces y solo implementa los métodos que necesita. De esta manera, cumplimos con el principio ISP, ya que cada clase implementa solo lo que necesita y no está obligada a implementar métodos que no utiliza.

## Patrones de diseño relacionados con el principio ISP

- Interfaz segregada (Interface Segregation)
- Adaptador (Adapter)
- Puente (Bridge)
- Decorador (Decorator)
- Fachada (Facade)
- Proxy (Proxy)




