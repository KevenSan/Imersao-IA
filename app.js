function Pesquisar() {
    // Esta função é responsável por realizar a pesquisa de jogadores.
    // Ela será chamada quando o botão "Pesquisar" for clicado.
  
    // **TODO: Implementar a lógica de pesquisa aqui**
    // 1. Obter o termo de pesquisa do campo de entrada.
    // 2. Filtrar os dados com base no termo de pesquisa.
    // 3. Construir o HTML dos resultados.
    // 4. Atualizar a seção de resultados com o novo HTML.
  
  
  // Obtém a seção onde os resultados da pesquisa serão exibidos.
  let section = document.getElementById("resultados-pesquisa");
  
  let campoPesquisa = document.getElementById("campo-pesquisa").value;
  console.log(campoPesquisa);
  
  if (campoPesquisa == ""){
    section.innerHTML= "<p>Nenhum jogador encontrado</p>"
     return
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string vazia para armazenar os resultados da pesquisa.
  let resultados = "";
  let tituloNome = "";
  let descricao  = "";
  
  // Itera sobre cada jogador na lista de dados.
  for (let dado of dados) {
    tituloNome = dado.tituloNome.toLowerCase();
    descricao  = dado.descricao.toLowerCase();
    tags       = dado.tags.toLowerCase();

    if (tituloNome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
     
       // Cria uma string de HTML para cada jogador, formatando o nome, descrição e link.
    resultados += `
      <div class="item-resultado">
        <h2>
          <a href="#" target="_blank">${dado.tituloNome}</a>
        </h2>
        <p>${dado.descricao}</p>
        <a href="${dado.link}" target="_blank">Mais informações</a>
      </div>
    `;
   // console.log(dado.tituloNome.includes(campoPesquisa));   
 }
}
if (!resultados){
   resultados = "<p>Nenhuma informação encontrada</p>"
   } 
  
  // Atribui o HTML gerado à seção de resultados, substituindo o conteúdo anterior.
  section.innerHTML = resultados;
}