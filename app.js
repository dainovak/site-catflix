//array --> variável com subdivisões (índices)
let filmes = ["imagens/gato-botas.jpg" , "imagens/pets-united.jpeg" , "imagens/reino-dos-gatos.jpeg"]

function CarregarDoramas(){
    let totalDoramas = doramas.length
    let divListaDoramas = document.querySelector(".lista-doramas")

    
    //laço de repetição
    for(let controle = 0 ; controle < 6 ; controle = controle + 1 ){
            document.querySelector (".lista-filmes").innerHTML += "img src="+filmes [controle] + ">"

    }
}
