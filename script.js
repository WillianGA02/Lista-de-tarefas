let listElment = document.getElementById("ul")
let inputElement = document.getElementById("anotacao")
let buttonElement = document.getElementById("bottom")

let tarefas = []

function mostrarTarefa(){
    listElment.innerHTML = ''

    tarefas.map((todo)=>{
        let liElement = document.createElement("li")
        let textElement = document.createTextNode(todo)


        let aElement = document.createElement("a")
        aElement.setAttribute("href", "#")
        let exElement = document.createTextNode("Excluir")
        aElement.appendChild(exElement)

        let posicao = tarefas.indexOf(todo)

        aElement.setAttribute("onclick", `DeletarTarefa(${posicao})`)

        

        liElement.appendChild(aElement)
        liElement.appendChild(textElement)
        listElment.appendChild(liElement)
    })
}

function AdicionarTarefas(){
    if(inputElement.value == ''){
        alert("Você não digitou nenhuma tarefa!!!")
        return false
    }else{
        let novaTarefa = inputElement.value
        tarefas.push(novaTarefa)
        inputElement.value = ''

        mostrarTarefa()
    }
}

function DeletarTarefa(posicao){
    tarefas.splice(posicao, 1)
    mostrarTarefa()
}