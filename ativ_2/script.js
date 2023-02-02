//1 - crie uma função que exiba uma mensagem no console
function exibirMensagem(){
    console.log('Hello word!')
}
exibirMensagem()

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
let nome = 'Gabriel Francisco'

function exibirNome(nome){
    console.log(`Meu nome é ${nome}`)
}
exibirNome(nome)

//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
function exibirCuriosidades(nome,idade,estiloMusical){
    console.log(`Meu nome é ${nome}, tenho ${idade} anos e gosto de ouvir ${estiloMusical}`)
}
exibirCuriosidades(nome, 21, 'Pagode Baiano' )

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
function exibirGostos(filme, umaMusica){
    console.log(`Gosto muito do Filme ${filme}, e da música ${umaMusica}`)

}
exibirGostos('Soul','Horas iguais')

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function triplicar(numero){
    return numero * 3

}
console.log(triplicar(6))

//6 - crie uma função que  verifique se uma  variável é true ou false


//Por parâmetro
/*function  verificador(variavel){
    if(variavel==true){
    console.log(`Váriavel é ${variavel}`)
    }else{
    console.log(`Váriavel é ${variavel}`)
    }

}
verificador(false)*/

// Por váriavel
const variavel= true
function  verificador(){
    if(variavel==true){
    console.log(`Váriavel é ${variavel}`)
    }else{
    console.log(`Váriavel é ${variavel}`)
    }

}
verificador()