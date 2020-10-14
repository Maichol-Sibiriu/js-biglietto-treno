// inizio esercizio
// km che deve percorrere l'utente
var km = prompt("quanti km devi fare?");
console.log(km);

// eta' dell'utente
var age = prompt("quanti anni hai?");
console.log(age);

// costo biglietto per km
var price = 0.21 * km;

var finalPrice = 0;

if (age < 18) {
  var under = price * 0.2;
  finalPrice = price - under;
}
else if (age >= 65) {
  var over = price * 0.4;
  finalPrice = price - over;
}
else {
  finalPrice = price;
}

document.getElementById('number').innerHTML = "prezzo biglietto: " + finalPrice.toFixed(2) + "€";
