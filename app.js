function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    
    console.log(campoPesquisa)
  
  // se campoPesquisa for uma string sem nada:
  if(campoPesquisa == ""){
     section.innerHTML = "<p>Nada foi encontrado. Digite um assunto nutricional</p>"
     return
  }
  // se campoPesquisa for um espaço " "
  if(campoPesquisa == " "){
    section.innerHTML = "<p>Nada foi encontrado. Digite um assunto nutricional</p>"
    return
  }

 campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da lista de dados e constrói o HTML dos resultados
    for (let dado of dados) {
      // Deixa as variaveis minúsculas para mitigar possiveis erros de digitação
      titulo = dado.titulo.toLocaleLowerCase() 
      descricao = dado.descricao.toLocaleLowerCase()
      tags = dado.tags.toLocaleLowerCase()
      // Estrutura lógica
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        // Cria um novo elemento de resultado
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>
        `;
      }
       
    }
  
    if(!resultados){
        resultados = "<p>Nada foi encontrado</p>"
    }
    // Atualiza o conteúdo HTML da seção com os resultados construídos
    section.innerHTML = resultados;
  }



