let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

for (i = 0; i < atletas.length; i++) {
  let notasValidas = atletas[i].notas.sort((a, b) => a - b).slice(1, 4);
  let media = 0;
  let total = 0;
  notasValidas.forEach((nota) => {
    total += nota;
  })
  media = total/3;
  console.log ("Nome: " + atletas[i].nome);
  console.log ("Notas obtidas: " + atletas[i].notas.join(","));
  console.log("Média Válida: " + media);
}