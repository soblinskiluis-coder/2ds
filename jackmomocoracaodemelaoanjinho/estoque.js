const produtos = ["Tenis", "Camisa", "Calça", "Meias", "Luva", "Infantil", "Sapatos", "Blusa", "Touca", "Acesorios"]
const precos = [70,150,176,221,70,340,270,85,90,60]

function mostreEstoque(){
    console.log(" ##*estoque*##")
    let contador = 0 
    while(contador < produtos.length){ 
        console.log(produtos[contador] + " - " + precos[contador])
        contador = contador + 1 
    }
}

 mostreEstoque()


 function adicionarEstoque(nome,preco){
produtos.push(nome)
precos.push(preco)
console.log("========")
 }
 adicionarEstoque ("Sapatenis", 55)
 
 function removerProduto (indice){
    produtos.splice(indice, 1)
    precos.splice(indice,1)
 }



 removerProduto()
 mostreEstoque()