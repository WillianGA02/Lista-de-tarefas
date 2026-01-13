let ulElement = document.getElementById('ulElement')
let form = document.getElementById('form')
let conteudo = document.getElementById('text')
let lista = JSON.parse(localStorage.getItem('lista')) || []


mostrarLista()

form.addEventListener('submit', ((e) => {
    e.preventDefault()

    const dados = new FormData(form)

    let text = dados.get('text')

    if (text === '') {

    } else {
        lista.push(text)

        localStorage.setItem('lista', JSON.stringify(lista)) 
        mostrarLista()
    }


}))

function mostrarLista() {
    ulElement.innerHTML = ''
    conteudo.value = ''

    lista.map((todo, index) => {
        let liElement = document.createElement('li')
        let liText = document.createTextNode(todo)
        let aElement = document.createElement('a')
        let aText = document.createTextNode('Excluir')
        aElement.appendChild(aText)
        aElement.href = '#'

        aElement.addEventListener('click', (()=>{
            lista.splice(index, 1)

            localStorage.setItem('lista', JSON.stringify(lista))

            mostrarLista()
        }))

        liElement.appendChild(liText)

        liElement.appendChild(aElement)

        ulElement.appendChild(liElement)
    })

   

   
}
