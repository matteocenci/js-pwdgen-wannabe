



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
