const n1 = document.querySelector('#txtn1');
const n2 = document.querySelector('#txtn2');
const butao = document.querySelector('#butt')
const resultado = document.querySelector('#res')

butao.addEventListener('click', () => {
    let numero1 = Number(n1.value)
    let numero2 = Number(n2.value)
    let s = numero1 + numero2
    
    resultado.innerHTML = `O resultado de ${numero1} + ${numero2} é `+ s
    
    console.log(typeof numero1)
    console.log(numero1);
})

