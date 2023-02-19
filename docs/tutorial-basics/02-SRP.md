---
sidebar_position: 2
---

# Principio de responsabilidad única (SRP)

## ¿Qué es el principio SRP?

El principio SRP (Single Responsibility Principle) o Principio de Responsabilidad Única en español, es un principio de diseño de software que establece que una clase o módulo debería tener solo una responsabilidad o motivo para cambiar. En otras palabras, una clase o módulo debería tener solo una tarea o función en el sistema y no debería ser responsable de más de una cosa.

Este principio se considera importante porque ayuda a hacer que el código sea más fácil de mantener y de cambiar. Si una clase o módulo tiene solo una responsabilidad, cualquier cambio en esa responsabilidad no afectará a otras partes del sistema. También hace que sea más fácil para otros desarrolladores entender y trabajar con el código.

:::tip Ejemplo
Imagina que estamos desarrollando una aplicación de comercio electrónico y tenemos una clase llamada "Product". En esta clase, manejamos la lógica para mostrar los detalles del producto en la página del producto, como el nombre del producto, la descripción, el precio, la imagen del producto, etc.

En lugar de hacer que la clase Product tenga la responsabilidad de manejar todos los aspectos relacionados con la visualización del producto, podríamos dividirla en dos clases diferentes. Una clase sería responsable de manejar la información del producto, y la otra se encargaría de la visualización del producto en la página.

De esta manera, si necesitamos hacer cambios en la visualización del producto, solo necesitamos modificar la clase que se encarga de la visualización, sin afectar la lógica de la información del producto. Y viceversa, si necesitamos hacer cambios en la lógica de información del producto, solo necesitamos modificar la clase que se encarga de la información, sin afectar la visualización del producto.

De esta manera, estamos aplicando el principio SRP al separar las responsabilidades de la clase Product en dos clases diferentes, lo que hace que sea más fácil de mantener, entender y cambiar en el futuro.
:::

## ¿Por qué es importante seguir el principio SRP?

El principio SRP es importante porque permite crear clases más cohesivas y con una única responsabilidad claramente definida. Al tener clases más pequeñas y específicas, se vuelve más fácil entender su funcionamiento y modificarlas sin afectar a otras partes del sistema.

Además, seguir el principio SRP fomenta la reutilización de código, ya que las clases con una única responsabilidad pueden ser utilizadas en diferentes partes del sistema sin necesidad de modificaciones. También mejora la mantenibilidad del código, ya que si hay un error o se necesita realizar un cambio, se sabe exactamente en qué clase buscar y cómo afectará el cambio al resto del sistema.

En resumen, seguir el principio SRP mejora la calidad del código, lo hace más fácil de entender, modificar y mantener, y ayuda a reducir la complejidad del sistema.

## Ejemplos de cómo aplicar el principio SRP en el desarrollo de software.

```php
<?php
// Clase que se encarga únicamente de la lógica del carrito de compras
class CarritoDeCompras
{
    private $productos = [];

    public function agregarProducto($producto)
    {
        $this->productos[] = $producto;
    }

    public function getTotal()
    {
        $total = 0;

        foreach ($this->productos as $producto) {
            $total += $producto->getPrecio();
        }

        return $total;
    }
}

// Clase que se encarga únicamente de la lógica de envío de correos electrónicos
class CorreoElectronico
{
    public function enviarCorreo($destinatario, $asunto, $mensaje)
    {
        // Código para enviar el correo electrónico
    }
}

// Clase que se encarga únicamente de la lógica de registro de usuarios
class RegistroDeUsuarios
{
    public function registrarUsuario($usuario)
    {
        // Código para registrar al usuario
    }
}
```
En este ejemplo, tenemos tres clases que cumplen con el principio SRP:

- CarritoDeCompras: se encarga únicamente de la lógica del carrito de compras, es decir, de agregar productos y calcular el total.
- CorreoElectronico: se encarga únicamente de la lógica de envío de correos electrónicos, sin preocuparse por nada más.
- RegistroDeUsuarios: se encarga únicamente de la lógica de registro de usuarios, sin involucrarse en otras tareas.

Cada clase tiene una única responsabilidad, lo que facilita su mantenimiento, extensión y reutilización en otras partes del sistema.