// Procurar o botão
// quando clicar no botão
document.querySelector("#add-time")
// quando clicar no botão
.addEventListener('click', cloneField)

//executar uma acao
function cloneField() {
    //duplicar os campos. Quais?
   const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //boolean: true ou false

   //limpar os campos. Quais?
   const fields = newFieldContainer.querySelectorAll('input')

   //para cada campo, limpar
   fields.forEach(function(field) {
        field.value = "";
   });

    //colocar na página. Onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}