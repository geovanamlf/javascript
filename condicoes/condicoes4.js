var agora = new Date()
var diaSem = agora.getDay()
console.log(diaSem)

switch(diaSem) { // Util em situacoes pontuais.
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terca')
        break
    case 3:
       console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sabado') 
        break
    default:
        console.log(`[ERRO]invalido`)
}

/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/
/* 
    Ao inves de criar varios if's para mostrar o dia correto da semana, poosso facilitar o switch.

    if(diaSem == 0)
    console.log('Domingo')
    ......................
*/
// USANDO SWITCH
