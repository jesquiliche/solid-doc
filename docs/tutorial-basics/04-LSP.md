---
sidebar_position: 3
---

# Principio de sustitución de Liskov (LSP)

## ¿Qué es el principio LSP?

 El Principio de Sustitución de Liskov (Liskov Substitution Principle o LSP) es un principio de diseño de software que establece que cualquier objeto de una clase hija debe poder ser sustituido por un objeto de su clase padre sin alterar el correcto funcionamiento del programa.

Este principio fue formulado por Barbara Liskov en 1987 y se considera uno de los cinco principios SOLID. El principio LSP se basa en la idea de que la subclasificación o herencia debe ser utilizada para extender o especializar el comportamiento de una clase, pero no para cambiarlo.

El principio LSP está estrechamente relacionado con el principio OCP, ya que si se siguen ambos principios, se puede lograr una arquitectura de software más modular y extensible. Al seguir el principio LSP, se evita que la subclasificación introduzca comportamientos inesperados o no deseados en la aplicación, lo que puede provocar errores difíciles de detectar y corregir.

En resumen, el principio LSP establece que una clase hija debe ser capaz de ser utilizada en lugar de su clase padre sin afectar el comportamiento esperado del programa. De esta manera, se garantiza una mayor flexibilidad, modularidad y escalabilidad en el diseño de software.

:::tip Ejemplo sencillo
Imaginemos que tenemos una clase Cuadrado que hereda de una clase Rectángulo y ambas tienen un método calcularArea() que devuelve el área de la figura. Si un programa hace uso de la clase Rectángulo y espera que su método calcularArea() calcule correctamente el área, entonces se espera que lo mismo suceda cuando se utiliza la clase Cuadrado, ya que es un tipo de Rectángulo. Pero si el método calcularArea() en la clase Cuadrado siempre devuelve un valor incorrecto para los cuadrados, entonces esta clase estaría violando el principio LSP, ya que no se comporta como un subtipo de Rectángulo y no puede ser utilizado como tal de manera consistente.

En resumen, el principio LSP establece que las clases derivadas (subtipos) deben ser utilizables en lugar de sus clases base (supertipos) sin afectar negativamente el comportamiento del programa.
:::

:::tip Como se relacione con OCP
El principio LSP se relaciona con el principio OCP de la siguiente manera: si un programa sigue el principio LSP, entonces también seguirá el principio OCP. Esto se debe a que, si las clases derivadas pueden ser sustituidas por la clase base sin afectar el comportamiento del programa, entonces también es posible extender el comportamiento de la clase base sin tener que modificar el código existente. Esto permite que el programa sea más fácil de mantener y menos propenso a errores, lo cual es una de las metas principales del principio OCP.
:::

## ¿Por qué es importante seguir el principio LSP?

Es importante seguir el principio de sustitución de Liskov (LSP) porque garantiza que las clases derivadas puedan ser utilizadas como si fueran la clase base sin afectar el correcto funcionamiento del programa.

Al seguir el principio LSP, se asegura que las clases derivadas cumplan con las mismas expectativas y requisitos que la clase base, lo que significa que cualquier método que funcione en la clase base también debería funcionar en las clases derivadas sin ningún problema. Esto proporciona flexibilidad y extensibilidad al código, permitiendo agregar nuevas funcionalidades sin tener que modificar el código existente, lo que a su vez reduce el riesgo de errores y problemas en el futuro.

Además, el cumplimiento del principio LSP también promueve la reutilización de código, ya que al diseñar clases derivadas de manera que cumplan con las mismas expectativas y requisitos que la clase base, se pueden utilizar estas clases derivadas en lugar de la clase base en diferentes partes del código, lo que reduce la cantidad de código duplicado y mejora la mantenibilidad del código.

## Ejemplos de cómo aplicar el principio LSP en el desarrollo de software

Supongamos que tenemos una clase Animal con un método hacerSonido(), que es llamado por otra clase Jaula que contiene varios animales. Además, tenemos dos subclases de Animal: Gato y Perro.

Si seguimos el principio LSP, ambas subclases deberían ser capaces de ser utilizadas de manera intercambiable en cualquier lugar donde se espera una instancia de Animal. Esto significa que deben tener el mismo comportamiento esperado y no alterar el funcionamiento de las clases base.

Por ejemplo, si la clase Jaula espera que todos los animales hagan un sonido cuando se llama al método hacerSonido(), entonces tanto Gato como Perro deben implementar este método de la misma manera y producir un sonido adecuado.

```php
class Animal {
    public function hacerSonido() {
        // Hacer sonido genérico de animal
    }
}

class Gato extends Animal {
    public function hacerSonido() {
        // Hacer sonido de gato
    }
}

class Perro extends Animal {
    public function hacerSonido() {
        // Hacer sonido de perro
    }
}

class Jaula {
    private $animales = [];

    public function agregarAnimal(Animal $animal) {
        $this->animales[] = $animal;
    }

    public function hacerSonidos() {
        foreach ($this->animales as $animal) {
            $animal->hacerSonido();
        }
    }
}

$jaula = new Jaula();
$jaula->agregarAnimal(new Gato());
$jaula->agregarAnimal(new Perro());
$jaula->hacerSonidos();
```
En este ejemplo, tanto Gato como Perro extienden la clase Animal y sobrescriben el método hacerSonido() para producir diferentes sonidos. La clase Jaula espera que todos los animales tengan un método hacerSonido() para que pueda llamar a este método en todos los animales de la jaula de manera intercambiable.

Al seguir el principio LSP, podemos estar seguros de que las subclases Gato y Perro se comportarán como Animal y no causarán problemas en la clase Jaula. Además, si queremos agregar más subclases de Animal en el futuro, podemos hacerlo sin modificar la clase Jaula ya que las subclases implementarán el mismo método hacerSonido() de la clase base Animal.

## Patrones de diseño relacionados con el principio LSP

- Template Method (Método de plantilla)
- Strategy (Estrategia)
- Bridge (Puente)
- Decorator (Decorador)
- Adapter (Adaptador)
- Composite (Composición)
- Iterator (Iterador)
- Proxy (Proxy)




