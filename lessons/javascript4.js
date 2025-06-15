// Funciones
// Abstraer código, encapsular código para hacerlo reusable.

var name1 = "Diego";
var name2 = "Uriel";

// Declarar la función (creación)
function sayNames() {
  console.log(name1);
  console.log(name2);
}

// Invocar la función, ejecutar la función, llamar la función
// sayNames();
//
function hostess() {
  console.log("Bienvenidos al restaurante El Diegallo");
  console.log("Pasele a lo barrido");
}

function waiter() {
  console.log("Le ofrezco algo de tomar?");
  console.log("Les dejo aquí los menus");
  console.log("Qué van a ordenar?");
}

function waitress() {
  console.log("Agarro la comida");
  console.log("Aqui tiene su comida jovenazo");
}

function chef() {
  console.log("🍳");
  console.log("🗣️");
}

function manager() {
  console.log("Pago en efectivo o con tarjeta?");
  console.log("Lo siento, no aceptamos amex");
  console.log("A no, mi terminal no es moderna");
  console.log("Muchas gracias, vuelva pronto");
}

function restaurant() {
  hostess();
  waiter();
  chef();
  waitress();
  manager();
}

// El diego llegó a comer
// restaurant();

// Diana va y quiere comer
// restaurant();

function sayMyName(name) {
  console.log("Hola, mi nombre es " + name);
}

sayMyName("Diego");
sayMyName("Diana");
sayMyName("Fer");

function sum(num1, num2) {
  return num1 + num2;
}

var res1 = sum(3, 2);
var res2 = sum(5, 1);
var res3 = sum(7, 3);
var res4 = sum(0.1, 0.2);

var r1 = sum(res1, res2);
var r2 = sum(res3, res4);

var resFinal = sum(r1, r2);

// no hacerlo nunca
console.log(sum(sum(sum(3, 2), sum(5, 1)), sum(sum(7, 3), sum(0.1, 0.2))));
console.log(resFinal);

// Tarea

// Investigar qué es la algebra booleana
// Que son las tablas de verdad
// Que son los operadores logicos (AND, OR, NOT)
