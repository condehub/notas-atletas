class Atleta {
  constructor(nome, idade, peso, altura, notas) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;
  }

  calculaCategoria() {
    const idade = this.idade;
    if (idade >= 9 && idade <= 11) {
      return "Infantil"
    } else if (idade === 12 || idade === 13) {
      return "Juvenil"
    } else if (idade === 14 || idade === 15) {
      return "Intermediário"
    } else if (idade >=  16 && idade <= 30) {
      return "Adulto"
    } else {
      return "Sem categoria"
    }
  }

  calculaIMC(){
    const alturaSqrt = this.altura * this.altura
    const imc = this.peso / alturaSqrt;
    return imc;
  }

  mediaValida(){
    let notasValidas = this.notas.sort((a, b) => a - b).slice(1, 4);
    let media = 0;
    let total = 0;
    notasValidas.forEach((nota) => {
      total += nota;
  })
    media = total/3;
    return media;
  }
}

const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

console.log("Nome: " + atleta.nome);
console.log("Idade: " + atleta.idade);
console.log("Peso: " + atleta.peso);
console.log("Altura: " + atleta.altura);
console.log("Notas: " + atleta.notas);
console.log("Categoria: " + atleta.calculaCategoria());
console.log("IMC: " + atleta.calculaIMC());
console.log("Média válida: " + atleta.mediaValida())