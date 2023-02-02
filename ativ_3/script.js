//01- Crie um array que receba 5 itens e exiba no console.
let itens = ["aula", 23,"watermeloon",true, 9.9]

console.log(itens)
//02- Utilize um método para adicionar um nome ao inicio do array.

let adicionarItem = itens.unshift('Gabriel')
console.log(itens)
//03- Utilize um método para remover o último nome do array.
let removerItem = itens.pop()
console.log(itens)
//04- Utilize um método para adicionar dois nomes ao fim do array.
let adicionarItens = itens.push('Espirotalica','Esmerilhadeira')
console.log(itens)
//05- Utilize um método para remover o primeiro nome do array.
let removerInicio = itens.shift()
console.log(itens)
//06 Utilize um método para organizar em ordem crescente o seguinte array:
 let numbers = [7,5,6,3,8,9,2,1,4]
numbers.sort()
console.log(numbers)

//07 Crie um objeto que receba ao menos três propriedades sobre você.
const curiosidades = {
    nome :'Gabriel',
    idade:21,
    gostoMusical:'eclético'

}
console.log(curiosidades)

//08 Adicione uma nova propriedade sem alterar seu objeto inicial.
curiosidades.altura = '1.81'
//09 Remova uma propriedade desse objeto.
delete curiosidades.idade
//10-Mostre no console todas as propriedades desse objeto.

console.log(curiosidades)
//11-Crie um array  chamado "cadastro" contendo ao menos 5 objetos. Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. Na propriedade amigos, adicione ao menos 4 itens.
const cadastro = [
    {
        nome:'Gabriel',
        idade:21,
        telefone:'3132-3132',
        amigos:['Pablo','paulo','Kleiton', 'Robert']
    },
    {
        nome:'Kleiton',
        idade:34,
        telefone:'8910-1212',
        amigos:['Douglas','Michael','Hiago', 'Paulo']
    },
    {
        nome:'Duarte',
        idade:60,
        telefone:'5137-6473',
        amigos:['Hiago','Pedro','Maria']
    },
    {
        nome:'Maria',
        idade:68,
        telefone:'4353-1341',
        amigos:['Robert', 'vitor','Judas','Duarte']
    },
    {
        nome:'Judas',
        idade:43,
        telefone:'3232-1122',
        amigos:['antonieta','lucas','gabriel']
    }

]

//12- Mostre no console o nome de um amigo de cada lista.

for(i=0; i <5; i++){
    console.log(cadastro[i].amigos[0])
}