// let valor = 385;
// const notas = [100, 50, 20, 10, 5, 2, 1];
// console.log(valor);
// for (let nota of notas) {
//     let quantidaNotas = parseInt(valor/ nota)
//     console.log(`${quantidaNotas} nota(s) de R$ ${nota},00`);
//     valor = valor % nota
// }


let Pos, Neg, Par, Impar, num

for (let i = 0; i < 5; i++) {
    linha = br.readLine();
    num = Integer.parseInt(linha);
    
    if (num % 2 == 0) {
        Par++;
    } else {
        Impar++;
    }
    
    if (num > 0) Pos++;
    if (num < 0) Neg++;
}

console.log("" + Par +" valor(es) par(es)");
console.log("" + Impar + " valor(es) impar(es)");
console.log("" + Pos + " valor(es) positivo(s)");
console.log("" + Neg + " valor(es) negativo(s)");