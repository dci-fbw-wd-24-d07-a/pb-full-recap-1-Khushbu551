// 1.Zutaten pro person

const zutatenNamen = [
  "Reis",
  "Peprika",
  "Schmand",
  "Putenstreifen",
  "Salz",
  "Pfeffer",
  "SambalOelek",
];
const zutatenMengen = [1, 1, 1, 200, 1, 1, 1];
const personen = 3;

// 2. menge für alle personen

const zutatenGesamt = zutatenMengen.map((menge) => menge * personen);

// 3. originale zutatenliste anzeigen

console.log("Original Zutatenliste für 1 Person:");
for (let i = 0; i < zutatenNamen.length; i++) {
  console.log(`${zutatenNamen[i]}: ${zutatenMengen[i]}`);
}

//Zutaten für alle persoren anzeigen

console.log("\nZutatenliste für 3 Personen:");
for (let i = 0; i < zutatenNamen.length; i++) {
  console.log(`${zutatenNamen[i]}: ${zutatenGesamt[i]}`);
}

//4. Zutatenliste umrühren

function umruehren(namenListe) {
  const gemischt = [...namenListe];

  for (let i = gemischt.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    const temp = gemischt[i];
    gemischt[i] = gemischt[randomIndex];
    gemischt[randomIndex] = temp;
  }

  return gemischt;
}

const gemischteListe = umruehren(zutatenNamen);
console.log("\nUmgerührte Zutatenliste:");
console.log(gemischteListe);
