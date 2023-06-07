const subtrair = document.querySelector("#subtrair")
const somar = document.querySelector("#somar")
const braco = document.querySelector("#braco")

const controle = document.querySelectorAll(".controle-ajuste")

controle.forEach((elemento) =>{
    elemento.addEventListener("click", () => {
        console.log("funcionou")
    })    
})


somar.addEventListener("click", () => { //aron function é como um return
    //braco.value = parseInt(braco.value) + 1
    manipulaDados("somar")
})

subtrair.addEventListener("click", () => {
    //braco.value = parseInt(braco.value) - 1
    manipulaDados("subtrair")
})

function manipulaDados(operacao){
    if(operacao === "subtrair"){
        braco.value = parseInt(braco.value) - 1
    }else{
        braco.value = parseInt(braco.value) + 1
    }
}

