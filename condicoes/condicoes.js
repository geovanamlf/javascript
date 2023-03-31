var vel = 60
console.log(`A velocidade do seu carro e de ${vel}Km/h`)

if (vel > 60) { // Condicao simples
    console.log('Voce ultrapassou os limites permitidos.')
}
console.log('Sempre ultilize o cinto de seguranca!')

var pais = 'Brasil'
console.log(`Vivendo em ${pais}`)

if (pais == 'Brasil') { // Condicao composta
    console.log('Voce e Brasileiro(a)')
} else {
    console.log('Voce e estrangeiro')
}

// Treinando
var idade = 15
var profissao = 'ler fanfic'
var altura = '1.55cm'

console.log(idade, profissao, altura)

if (idade >= 18) {
    console.log('Voce e maior de idade')
}else {
    console.log('Voce e menor de idade')
}

if (profissao == 'programadora') {
    console.log('Voce e programador!')
}else {
    console.log('Voce nao e programdor')
}

if(altura == '1.65cm') {
    console.log('Sua alutura e 1.65cm')
}else {
    console.log('Voce nao tem 1.65cm')
}