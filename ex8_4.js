const frm = document.querySelector ("form") //obtém elemento da página
const resp = document.querySelector ("pre") 
const itens = [] //vetor global para armazenar os itens do pedido
frm.rbPizza.addEventListener("click" , () => { // quando radio button é clicado
    frm.inBebida.className = "oculta" //oculta select das bebidas
    frm.inPizza.className = "exibe"  //exibe select das pizzas
})

frm.rbBebida.addEventListener("click",() => {  //quando radio buton e clicado
    frm.inPizza.className ="oculta"  //oculta select das pizzas
    frm.inBebida.className ="exibe"  //exibe selecta das bebidas
})
frm.inDetalhes.addEventListener("focus",()=>{  //quando recebe o foco
    if(frm.rbPizza.checked) { //se rediobutton rbPizza estiver marcado
        const pizza =frm.inPizza.value  //obtem value do item selecionado
        // uso do operador ternario, para indicar o numero de sabores
        const num = pizza == "media" ? 2: pizza == "grande" ? 3:4
        // atribui placeholder e exibe uma dica de preenchimento de campo
        frm.inDetalhes.placeholder  = `Até ${num} sabores`

    }
})

frm.inDetalhes.addEventListener("blur",() => { //quando campo perde o foco
    frm.inDetalhes.placeholder ="" //limpa dica de preenchimento
})

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    let produto
    if (frm.rbPizza.checked) {
        const num = frm.inPizza.selectedIndex  //obtem o numero do item selecionado
        produto = frm.inPizza.options[num].text //texto do item selecionado
    } else {
        const num = frm.inBebida.selectedIndex
        produto = frm.inBebida.options[num].text
    }
    const detalhes = frm.inDetalhes.value  //conteudo do inDetalhes
    itens.push(produto + " (" + detalhes + ") " )  // adiciona ao vetor
    resp.innerHTML = itens.join ("\n")  //exibe o tem do pedido

    frm.reset ()  // limpa o form
    frm.inPizza.dispatchEvent (new Event("click"))  // dispara click e, rbPizza
})