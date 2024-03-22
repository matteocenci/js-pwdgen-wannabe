



// Chiedi all'utente il nome
let userName = prompt("Ciao! Come ti chiami?");
console.log(userName);

// Chiedi all'utente il cognome
let userSurname = prompt("E invece il tuo cognome?");
console.log(userSurname);

// Chiedi il colore preferito
let favColor = prompt("Qual'è il tuo colore preferito?");
console.log(favColor);

// Test di combinazione
const finalTest = userName + userSurname + favColor + '21';
console.log(finalTest);

// Scrivi documento in pagina
document.getElementById("final").innerHTML = finalTest;

// Scrivi un numero a caso
let x = Math.floor(Math.random() * 99);
console.log(x);

// Scrivi documento in pagina + un numero a caso
const finalTestPlus = userName + userSurname + favColor + x;
document.getElementById("finalplus").innerHTML = finalTestPlus;


