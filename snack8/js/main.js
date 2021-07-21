//Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e
//una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.

var list_name = ["Matteo", "Luca", "Paolo", "Giovanni"];
var list_surname = ["Rossi", "Verdi", "Gialli", "Bianchi"];

for (var i = 0; i < 16; i++) {
    var number_name = Math.floor(Math.random() * list_name.length);
    var number_surname = Math.floor(Math.random() * list_surname.length);
    
    console.log(list_name[number_name] + " " + list_surname[number_surname]);
}