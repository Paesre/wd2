// Loops
// Ejecuta cierto código hasta que nosotros le digamos que pare

// for loop / ciclo for
// for (var i = 1; i <= 100; i++) {
//   fizzBuzz(i);
// }

// while / mientras
// var count = 0;
// while (count < 5) {
//   console.log(count);
//   count++;
// }

// do while / haz mientras
// do {
//   console.log(count);
//   count++;
// } while (count <= 5);

var group = ["diego", "fer", "lore", "esme"];

// for (var i = 0; i < group.length; i++) {
//   console.log(group[i]);
// }

// for of -> loop in iterable objects
// for (var element of group) {
//   console.log(element);
// }
//
// for (var c of "diego") {
//   console.log(c);
// }

var obj = {
  name: "diego",
  lastname: "vazquez",
  work: "etsy",
};

// for in, iterate obj, giving the keys of the object
// for (var key in obj) {
//   console.log(key + ": " + obj[key]);
// }

// switch statements
var n = 12321;
switch (n) {
  case 1:
    console.log("es el caso 1");
    break;
  case 2:
    console.log("es el caso 2");
    break;
  default:
    console.log("es el caso default");
    break;
}

if (n === 1) {
  console.log("es el caso 1");
} else if (n === 2) {
  console.log("es el caso 2");
} else {
  console.log("es el caso default");
}

// tipos de datos
// variables
// funciones
// objetos
// arrays
// if else statements
// for loops
