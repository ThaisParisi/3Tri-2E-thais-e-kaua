function criaCartao(categoria,pergunta,resposta){
    let container = document.getElementById('container')
    let article = document.createElement('article')
    article.className = 'cartao'
    article.innerHTML = 'teste cartao'
    container.appendChild(article)
}

criaCartao('Biologia','Qual a função da mitocôndria?','Criar ATP') 