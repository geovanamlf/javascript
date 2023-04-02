var agora = new Date()
var hora = agora.getHours()  
console.log(`Agora sao exatamente ${hora} horas.`)

if(hora < 12) { // Se hora for menor que doze, entao:
    console.log('Bom dia!')
} else if(hora <= 18) { // Se hora for menor ou igual a dezoito, entao:
    console.log('Boa tarde!')
} else { // Senao:
    console.log('Boa noite!')
}
