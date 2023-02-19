---
sidebar_position: 3
---

# Principio de abierto/cerrado (OCP)

## ¿Qué es el principio OCP?

El principio OCP (Open/Closed Principle) es un principio de diseño de software que establece que las entidades de software (clases, módulos, funciones, etc.) deben estar abiertas para su extensión pero cerradas para su modificación. En otras palabras, una entidad de software debe ser fácilmente extensible para agregar nuevas funcionalidades, pero no debe ser necesario modificar el código existente para hacerlo.

Este principio promueve la idea de que el software debe ser diseñado para permitir cambios y mejoras futuras, sin comprometer la estabilidad y funcionalidad existente. Al seguir este principio, se puede lograr un código más modular, mantenible y escalable.

El principio OCP se considera uno de los principios SOLID, junto con SRP, LSP, ISP y DIP. Fue propuesto por el ingeniero de software Bertrand Meyer en su libro "Object-Oriented Software Construction" en 1988.

El principio OCP (Open/Closed Principle, en inglés) establece que las entidades de software (clases, módulos, funciones, etc.) deben estar abiertas para la extensión pero cerradas para la modificación. Esto significa que, cuando se agregan nuevas funcionalidades o se cambian los requisitos del sistema, se deben agregar nuevos elementos sin modificar los existentes.

## ¿Por qué es importante seguir el principio OCP?
La importancia de seguir este principio radica en que permite lograr un diseño de software más flexible, escalable y fácil de mantener. Al tener entidades que están abiertas a la extensión, se puede agregar nuevas funcionalidades sin tener que modificar el código existente, lo que reduce el riesgo de introducir errores en el sistema y aumenta la facilidad para mantenerlo en el futuro.

Además, el principio OCP promueve el uso de patrones de diseño como el patrón strategy o el patrón bridge, que permiten separar la implementación de una entidad de su uso y facilitan la creación de nuevas implementaciones sin modificar el código existente. En resumen, seguir el principio OCP permite lograr un diseño de software más modular, flexible y fácil de mantener.

:::tip Ejemplo sencillo
 Imagina que tienes un software que permite a los usuarios crear y enviar correos electrónicos. Si en el futuro se quiere añadir la funcionalidad de enviar mensajes de texto también, el principio OCP sugiere que no se debe modificar el código existente que maneja los correos electrónicos, sino que se debe agregar nuevo código que maneje los mensajes de texto, de modo que la modificación sea lo más pequeña y aislada posible. De esta manera, se mantiene el código existente sin alteraciones y se evitan errores no deseados en el futuro.
:::

## Ejemplos de cómo aplicar el principio OCP en el desarrollo de software

Supongamos que tenemos un programa que se encarga de calcular el área de diferentes figuras geométricas, como rectángulos y círculos. Sin embargo, en el futuro es posible que se quieran añadir más figuras, como triángulos o hexágonos.

En lugar de modificar la clase existente y añadir más métodos para cada figura nueva, podemos crear una interfaz "Figura" y hacer que cada figura implemente esta interfaz con un método para calcular su área. Luego, podemos crear una clase "CalculadoraAreas" que reciba objetos que implementen la interfaz "Figura" y calcule su área sin importar su tipo.

```php
interface Figura {
    public function calcularArea();
}

class Rectangulo implements Figura {
    private $base;
    private $altura;
    
    public function __construct($base, $altura) {
        $this->base = $base;
        $this->altura = $altura;
    }
    
    public function calcularArea() {
        return $this->base * $this->altura;
    }
}

class Circulo implements Figura {
    private $radio;
    
    public function __construct($radio) {
        $this->radio = $radio;
    }
    
    public function calcularArea() {
        return pi() * pow($this->radio, 2);
    }
}

class CalculadoraAreas {
    public function calcularAreaFigura(Figura $figura) {
        return $figura->calcularArea();
    }
}

// Uso
$rectangulo = new Rectangulo(5, 10);
$circulo = new Circulo(3);

$calculadoraAreas = new CalculadoraAreas();
echo $calculadoraAreas->calcularAreaFigura($rectangulo); // Imprime 50
echo $calculadoraAreas->calcularAreaFigura($circulo); // Imprime 28.274333882308
```
De esta manera, si en el futuro se desea añadir más figuras geométricas, solo habría que crear una clase que implemente la interfaz "Figura" y la calculadora de áreas ya estaría preparada para trabajar con ella sin necesidad de modificar su código.

### OCP y polimorfismo

El principio OCP se relaciona con el polimorfismo en el sentido de que el polimorfismo permite extender el comportamiento de una clase sin modificar su código fuente. De esta forma, se puede agregar nuevas funcionalidades o comportamientos a una clase sin afectar a su funcionamiento original, lo que respeta el principio OCP.

Por ejemplo, si se tiene una clase Figura con un método calcularArea() y se quiere agregar un nuevo tipo de figura como un círculo, se puede crear una nueva clase Circulo que extienda de Figura y sobrescriba el método calcularArea() para implementar la fórmula correspondiente al área de un círculo. De esta forma, se cumple el principio OCP ya que se está extendiendo el comportamiento de la clase Figura sin modificar su código fuente original.

En resumen, el polimorfismo permite agregar nuevas funcionalidades o comportamientos a una clase de forma extensible y sin modificar su código fuente original, lo que cumple con el principio OCP.

:::tip Polimorfismo
El polimorfismo es un concepto de programación orientada a objetos que permite que un objeto pueda tomar varias formas o comportarse de diferentes maneras. Esto significa que un objeto puede ser utilizado como si fuera otro objeto relacionado, lo que permite una mayor flexibilidad en el diseño de software.

El polimorfismo se puede lograr de varias maneras, como la sobrecarga de métodos, la sobrescritura de métodos, la implementación de interfaces y la herencia de clases. En general, el polimorfismo permite que los objetos se comporten de diferentes maneras según el contexto en el que se utilizan, lo que facilita la modularidad y la reutilización del código.
:::

### OCP y Patrones de diseño

Los patrones de diseño relacionados con OCP son principalmente el patrón Estrategia y el patrón Puente. Ambos patrones permiten separar la implementación de una clase de su uso, lo que facilita la extensión del código sin modificarlo.



