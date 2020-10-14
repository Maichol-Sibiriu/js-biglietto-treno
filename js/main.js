// inizio esercizio

// km che deve percorrere l'utente
var km = prompt("quanti km devi fare?");
console.log(km);

// eta' dell'utente
var age = prompt("quanti anni hai?");
console.log(age);

// info utente
var info = km + age;
console.log(info);

// costo biglietto per km
var price = 0.21;

// calcolo costo del biglietto per i km da percorrere (50km)
price *= 50;
console.log(price.toFixed (2) );

// prezzo finale senza sconto
var formatPrice = price.toFixed (2) + "€";
console.log(formatPrice);

// sconto minorenni
var under = price * 20 / 100;
console.log(under.toFixed (2));

// sconto over 65
var over = price * 40 / 100;
console.log(over.toFixed (2));

// prezzo finale con sconto minorenni
var priceUnder = price - under;
console.log(priceUnder.toFixed (2));

// prezzo finale con sconto over 65
var priceOver = price - over;
console.log(priceOver.toFixed (2));

// prezzo biglietto
document.getElementById('number').innerHTML = "prezzo biglietto minorenni: " + priceUnder.toFixed (2) + "€";
document.getElementById('number2').innerHTML = "prezzo biglietto over65: " + priceOver.toFixed (2) + "€";
