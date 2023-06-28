let filter = document.getElementById('menufiltros')
let divamarela = document.getElementById('botaofunilama')
let divcinza = document.getElementById('botaofunil')
let img = document.getElementById('imgfiltro')
let texto = document.getElementById('txt')





function Abrirmenufiltros(){
   if(filter.style.display === 'none'){
    filter.style.display = 'block'
    img.src = 'imagens/funilama.png'
    texto.style.color = '#F2A505'
   }
   else{
       filter.style.display = 'none'
       img.src = 'imagens/funil.png'
       texto.style.color = '#797979'
   }
}

let higinada = document.getElementById('prodnone')
let higiama = document.getElementById('higieneama')
let higi = document.getElementById('higiene')
let textohigi = document.getElementById('txthigiene')

function Abrirhigiene(){
   if(higinada.style.display === 'none'){
    higinada.style.display = 'block'
    higi.src = 'imagens/chuveiroama.png'
    textohigi.style.color = '#F2A505'
   }
   else{
       higinada.style.display = 'none'
       higi.src = 'imagens/chuveiro.png'
       textohigi.style.color = '#797979'
   }
}

let buttom = document.getElementById("buttom")
let botao = document.getElementById("botão")
let description = document.getElementById("fechar-descricao")


botao.addEventListener("click", function(){
    if(description.style.display === 'none'){
        description.style.display = 'block'
    } else {
        description.style.display = 'block'
    }
})

buttom.addEventListener("click", function(){
    if(description.style.display === 'none'){
        description.style.display = 'block'
        
    } else {
        description.style.display = 'none'
    }

})




