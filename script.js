function pesquisar(){
    let section = document.getElementById('resultado-da-pesquisa')
    let campoPesquisa = document.getElementById('campo-Pesquisa').value

    if(!campoPesquisa){
        section.innerHTML = `<p>Você precisa digitar algo!<p>`
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

let resultados = '';
let titulo = '';
let descricao = '';
let ensinado = '';
let tags = '';

for(let dado of aula){
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    ensinado = dado.ensinado.toLowerCase()
    tags = dado.tags.toLowerCase()
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || ensinado.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            resultados += `<div class="resultado-item">
            <h2>${dado.titulo}</h2>
            <h4 class="text">${dado.descricao}</h4>
            <p class="text-ensinado">${dado.ensinado}</p>
            <a href="${dado.link}" target="_blank">Saiba mais...</a>
        </div>`
        }
    
}

if(!resultados){
    resultados = `<p>'${campoPesquisa}' não foi encontrado.</p>`
}

section.innerHTML = resultados
}

