//Procurar o botão
document.querySelector('#add-time')
.addEventListener("click", cloneField)

//Executar uma ação
function cloneField(){
    // Duplicar os campos:
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)
    
    // Limpar os campos: 
    const fields = newFieldContainer.querySelectorAll('input')
    // Para cada campo, limpar:
    fields.forEach(function(field){
        field.value=''
    })

    // Colocar no campo na qual id=schedule-items
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
