// Logic expressions / Logic statements

// Declara el predicado, statement
// if statement
// if (true) {
//   // Si es verdadero el statement, se ejecuta este bloque de código
//   console.log("El statement es verdadero");
// } else {
//   // Si no es verdadero el statement, se ejecuta este bloque de código
//   console.log("El statement es falso");
// }

var firstName = "Diego";
var age = 18;

// function elCadenero(name, age) {
//   if (age >= 18) {
//     console.log("Bievenido al Mezontle");
//   } else if (name === "Diego") {
//     console.log("Bievenido al Mezontle jefazo");
//   } else {
//     console.log("Pa su casa");
//   }
// }

// el statement más específico debe de ir hasta arriba siempre

function elCadenero(name, age, ine) {
  if (name === "Diego" && age >= 18 && !ine) {
    console.log(
      "Pasate, pero no le digas a tu papa que te deje entrar sin ine",
    );
  } else if (age >= 18 && ine) {
    console.log("Bienvenido al Mezontle");
  } else if (age >= 18 && !ine) {
    console.log("Su INE jovenazo");
  } else if (name === "Diego" && ine) {
    console.log("Pasele jefazo");
  } else if (name === "Diego" && !ine) {
    console.log("Hijole jovenazo, hablele a su papa mejor");
  } else {
    console.log("Pa su casa");
  }
}

// elCadenero(firstName, age, false);

/*
 * OXXO
 * Programa que sabe como acumular puntos en tu tarjeta spin
 *
 **/

function oxxoRewards(card, phone) {
  if (card || phone) {
    console.log("Acumulas puntos! ⭐");
  } else {
    console.log("Gracias, vuelva pronto");
  }
}

// oxxoRewards(null, 5530582606);
// oxxoRewards("21312 3210321  320 131023 123", null);
// oxxoRewards("212312312 321312 321321 3213", 5530582606);

function churchAttendance(value) {
  if (value) {
    console.log(`Que bueno, ya te hacía falta`);
  } else {
    console.log(`Si se ve que no fuiste, te hace falta Dios en tu corazón`);
  }
}

var goToChurch = !true;
// churchAttendance(goToChurch); // false

function cocaOrRed(money) {
  if (money >= 45) {
    return "Coca cola 😋";
  } else {
    return "Red cola 😔";
  }
}

var money = 45;
var soda = cocaOrRed(money);
// console.log(soda);

var soda2 = money >= 45 ? "Coca cola 😋" : "Red cola 😔";
// console.log(soda2);

// Prueba de entrada para Ironhack

// Fizz buzz
// n - 1 al 100
// Si n es divisible entre 2 y 5: "n - fizzbuzz"
// Si n es divisble entre 2: "n - fizz"
// Si n es divisble entre 5: "n - buzz"
// Nota: Si el residuo de dividir entre 2 o 5 es 0, entonces sabemos
// que si es divisible
// Operador módulo %
function fizzBuzz(n) {}
