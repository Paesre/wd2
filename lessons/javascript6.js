// Crear una función que recibiera un número
// Si el número es divisible entre 2 y 5, cómo el caso del 10, imprimir fizz buzz
// Si el número es divisible entre 2, es decir el residuo de dividir ese número entre 2 es 0 fizz
// Si el número es divisible entre 5, es decir el residuo de dividir ese número entre 5 es 0 buzz
// Si el número no entra en esos casos, imprimir el número

function fizzBuzz(n) {
  if (n % 2 === 0 && n % 5 === 0) {
    console.log(n, "-fizzbuzz");
  } else if (n % 2 === 0) {
    console.log(n, "-fizz");
  } else if (n % 5 === 0) {
    console.log(n, "-buzz");
  } else {
    console.log(n);
  }
}

fizzBuzz(50);
