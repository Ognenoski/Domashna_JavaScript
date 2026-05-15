console.log("Ova e domashna br 3");
console.log("------------------------------");
const Gradovi = [
    { ime: "Skopje", ziteli: 900000, drzava: "Makedonija" },
    { ime: "Belgrad", ziteli: 1500000, drzava: "Srbija" },
    { ime: "Atina", ziteli: 1200000, drzava: "Grcija" },
    { ime: "Sofia", ziteli: 1300000, drzava: "Bugarija" },
    { ime: "Zagreb", ziteli: 800000, drzava: "Hrvatska" },
    { ime: "Podgorica", ziteli: 200000, drzava: "Crna Gora" },
    { ime: "Tirana", ziteli: 500000, drzava: "Albanija" },
    { ime: "Amsterdam", ziteli: 1000000, drzava: "Holandija" },

]
const PoPopulacija = Gradovi.sort((a, b) => b.ziteli - a.ziteli);

console.log("Gradovi sortirani po populacija:");
console.log(PoPopulacija);
console.log("------------------------------");
console.log("Top 3 najnaseleni gradovi:");
const Top3Gradovi = PoPopulacija.slice(0, 3);

Top3Gradovi.forEach((grad, index) => {
    console.log(`${index + 1}. ${grad.ime} - ${grad.ziteli} ziteli`);
}); 
console.log("------------------------------");
console.log("Gradovi sto zapocnuvaat na bukvata 'A' i imaat populacija pogolema od 1 milion:");
const GradoviNadMilionA = Gradovi.filter(grad => grad.ime.startsWith('A') && grad.ziteli > 1000000);
console.log(GradoviNadMilionA);
console.log("------------------------------");
console.log("Prosechen broj na ziteli na site gradovi:");
const ProsecnaPopulacija = Gradovi.reduce((sum, grad) => sum + grad.ziteli, 0) / Gradovi.length;
console.log(ProsecnaPopulacija);
console.log("------------------------------");