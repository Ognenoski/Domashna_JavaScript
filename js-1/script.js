console.log("Hello, World!");
let domashna = "Domashna"
let prva = 1
console.log(domashna);
console.log(prva);
console.log(`Ova e mojata ${prva}va ${domashna}`);
let a = 5;
let b = 10;
let zbir = a + b;
let proizvod = a * b;
let razlika = a - b;
console.log(`Zbirot na ${a} i ${b} e ${zbir}`);
console.log(`Proizvodot na ${a} i ${b} e ${proizvod}`);
console.log(`Razlikata na ${a} i ${b} e ${razlika}`);
let x = 7;
let y = 4;
if (x % 2 === 0 && y % 2 === 0) {
    console.log(`${x} i ${y} se parni broevi.`);
} else if (x % 2 === 0 && y % 2 !== 0) {
    console.log(`${x} e paren broj, a ${y} e neparen broj.`);
} else if (x % 2 !== 0 && y % 2 === 0) {
    console.log(`${x} e neparen broj, a ${y} e paren broj.`);
} else {
    console.log(`${x} i ${y} se neparni broevi.`);
}
let c = 15;
let d = 6;
if (c % d === 0) {
    console.log(`${c} e deliv so ${d}.`);
} else {
    console.log(`${c} ne e deliv so ${d}.`);
}
let smetka = 1500;
kniga = 300;
tashna = 1500;
ranec = 1300;

if (smetka >= kniga + tashna) {
    console.log("Mozete da gi kupite knigata i tashnata.");
} else if (smetka >= kniga + ranec) {
    console.log("Mozete da gi kupite knigata i ranecot.");
} else if (smetka >= tashna + ranec) {
    console.log("Mozete da gi kupite tashnata i ranecot.");
} else if (smetka >= kniga + tashna + ranec) {
    console.log("Mozete da gi kupite site tri proizvodi.");
} else {
    console.log("Imate dovolno sredstva za da kupite samo eden proizvod.");
}
let lozinka = "12345";
let korisnickoIme = "admin";
if (lozinka === "12345" && korisnickoIme === "admin") {
    console.log("Uspesno ste se logirale.");
} else {
    console.log("Neuspesno logiranje. Proverete go korisnickoto ime i lozinkata.");
}
let Semafor = "Zeleno svetlo";
console.log(Semafor);
if (Semafor === "crveno svetlo") {
    console.log("STOP");
}
else if (Semafor === "zolto svetlo") {
    console.log("Pripremi se");
}
else {
    (Semafor === "Zeleno svetlo")
    console.log("Vozi");
}


const Tabela = "12 poeni";
console.log(Tabela);

switch (Tabela) {
    case "12 poeni":
        console.log("1vo Mesto");
        break;
    case "9 poeni":
        console.log("2ro Mesto");
        break;
    case "6 poeni":
        console.log("3to Mesto");
        break;
    case "3 poeni":
        console.log("4to Mesto");
        break;
    case "0 poeni":
        console.log("5to Mesto");
        break;
    default:
        console.log("Konecen plasman.");
}
