let valores = [8, 1, 7, 4, 2, 9]
console.log(valores) // mostrar os valores sem formatacao

for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posicao ${pos} tem o valor ${valores[pos]}`) // forma tradicional
}

console.log('Outra forma')

for (let pos in valores) {
    console.log(`A posicao ${pos} tem o valor ${valores[pos]}`) // forma simplificada
}




