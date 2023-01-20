// VARIABILI 

const numero_fisso = "23";
// console.log(typeof numero_fisso);

let nome = prompt("Il tuo nome?");
// console.log(nome);

let cognome = prompt("Il tuo cognome?")
// console.log(cognome);

let colore = prompt("Il tuo colore preferito?")
// console.log(typeof colore);


// DISPLAY TEXT
document.getElementById("utent_information").innerHTML = (nome + cognome + colore + numero_fisso);




