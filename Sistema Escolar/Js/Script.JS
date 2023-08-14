//DOM
const modal = document.querySelector('.modal-container')
const nota1 = document.querySelector('#nota1')
const nota2 = document.querySelector('#nota2')
const nota3 = document.querySelector('#nota3')
const button = document.querySelector('.btnOpenModal')
const resultado = document.querySelector('#resultado')

// RESULTADO
button.addEventListener('click', ()=>{
    event.preventDefault();

    let valor1 = parseFloat(nota1.value)
    let valor2 = parseFloat(nota2.value)
    let valor3 = parseFloat(nota3.value)

    let media = (valor1 + valor2 + valor3) / 3
    
    if(media >= 7){
        resultado.innerHTML = `<h3> Media Final ${media.toFixed(2)}, Foi Aprovado!!</h3>`
    }
    else if(media < 7 && media >=4){
        resultado.innerHTML = `<h3> Media Final ${media.toFixed(2)}, Prova final!!</h3>`
    }else{
        resultado.innerHTML = `<h3> Media Final ${media.toFixed(2)}, Recuperação!!</h3>`
    }
})

// FUNCÕES MODAL//
function openModal(){
    modal.classList.add('active')

}

function closeModal(){
    modal.classList.remove('active')
}



