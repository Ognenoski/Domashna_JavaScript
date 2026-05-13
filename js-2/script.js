let domashna = "Domashna"
let dva = "2"

console.log(`Ova e ${domashna}  br${dva}`)

console.log("--------------------------------------")

function CelsiosToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    console.log(`Denes e ${celsius} stepeni celsius ili ${fahrenheit} stepeni fahrenheit`)
    return fahrenheit;
}
CelsiosToFahrenheit(30)
console.log("--------------------------------------")
function FahrenheitToCelsios(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    console.log(`Denes e ${fahrenheit} stepeni fahrenheit ili ${celsius} stepeni celsius`);
    return celsius;
}
FahrenheitToCelsios(86)
console.log("--------------------------------------")
function feetToMeters(feet) {
    let meters = feet * 0.3048;
    console.log(`${feet} stapki e isto kako ${meters.toFixed(2)} metri`);
    return meters;
}
feetToMeters(25)
console.log("--------------------------------------")
function metersToFeet(meters) {
    let feet = meters / 0.3048;
    console.log(`${meters} metri e isto kako ${feet.toFixed(2)} stapki`);
    return feet;
}
metersToFeet(5)
console.log("--------------------------------------")
const kniga = {
    naslov: "Gol covek",
    pisatel: "Igor Dzambazov",
    godina: 2006,
    zanr: "biografija"
}
console.log(`Knigata ${kniga.naslov} e napisana od ${kniga.pisatel} vo ${kniga.godina}та godina i pripagja na zhanrot ${kniga.zanr}.`)
console.log("--------------------------------------")
const Avtomobil = {
    marka: "Volkswagen",
    model: "T-Cross",
    motor: "1.0 TSI",
    sila: "115 ks",
    godina: 2021,
    boja: "crna"
};
console.log(`Avtomobilot ${Avtomobil.marka} ${Avtomobil.model} so motor ${Avtomobil.motor} i ${Avtomobil.sila} konjski sili od ${Avtomobil.godina} godina e ${Avtomobil.boja} boja.`);
console.log("--------------------------------------")
const Student = {
    ime: "Daniel",
    prezime: "Ognenoski",
    fakultet: "Semos",
    mesec: "Januari",
    godina: 2027,
    smer: "JavaScript programiranje"
};
console.log(`Studentot ${Student.ime} ${Student.prezime} e student na fakultetot ${Student.fakultet} na smer ${Student.smer}. Ocekuvana godina na diplomiranje e ${Student.mesec} ${Student.godina}.`)
console.log("--------------------------------------")
let count = 0
console.log("Ova e sekoj vtor neparenbroj od 1 do 100:")
for (let i = 1; i <= 100; i += 2) {
    count++;
    if (count % 2 == 0) {
        console.log(i);
    }
}
console.log("--------------------------------------")
let count2 = 0
console.log("Ova se site neparni broevi od 1 do 50:")
for (let i = 1; i <= 50; i += 2) {
    count2++;
    console.log(i);
}
console.log("--------------------------------------")


let Gradovi = ["Skopje", "Bitola", "Ohrid", "Tetovo", "Strumica"]
console.log(`Ova se ${Gradovi.length}te najgolemi gradovi vo Makedonija:`)
for (let i = 0; i < Gradovi.length; i++) {
    console.log(Gradovi[i]);
}
console.log("--------------------------------------")
let Drzavi = ["Makedonija", "Germanija", "Italija", "Spanija", "Francija", "Grcija", "Srbija", "Albanija", "Kosovo", "Crna Gora"]
console.log(`Ova se ${Drzavi.length} drzavi vo Evropa:`)
for (let i = 0; i < Drzavi.length; i++) {
    console.log(Drzavi[i]);
}
