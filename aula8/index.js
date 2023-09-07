/*
Luiz Otavio Miranda tem 30 anos. pesa 84kg
tem 1.8 de altura e seu IMC e de 25.9259259
Luiz Otavio nasceu em 1980;
*/

const nome = 'Luiz Otavio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
let imc;
let anoNascimento;

anoNascimento = 1980;

imc = peso / (alturaEmM * alturaEmM);

console.log(nome, sobrenome, 'tem', idade, 'anos. Pesa', peso, 'KG');
console.log('tem',alturaEmM, 'de altura e seu IMC e de', imc);
console.log(nome, 'nasceu em',anoNascimento);

//template strings
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC e de ${imc} `);
console.log(`${nome} nasceu em ${anoNascimento}.`);