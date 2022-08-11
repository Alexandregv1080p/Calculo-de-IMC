//tentativa de fazer sem consulta
const form = document.querySelector('#form')

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso')
    const inputAltura = e.target.querySelector('#altura')

    const peso = Number(inputPeso.value)//necessario a conversão para caso colocar alguma letra e o script interpretar como true
    const altura = Number(inputAltura.value)

    if(!peso){
        setResultado('Peso Inválido',false)
        return
    }
    if(!altura){
        setResultado('Altura inválida',false)
        return
    }

    const imc = criaIMC(peso,altura)
    const getNivel = validaImc(imc)
    setResultado(`Seu IMC é ${imc}, ${getNivel} `, true)
})
const validaImc = (imc)=>{
    const nivel = ['Abaixo do Peso', 'Peso Normal', 'Sobrepeso','Obesidade Classe I','Obesidade Classe II','Obesidade Classe III']
    if(imc < 18.5) return nivel[0]
    if(imc < 24.9) return nivel[1]
    if(imc < 29.9) return nivel[2]
    if(imc < 34.9) return nivel[3]
    if(imc < 39.9) return nivel[4]
    if(imc > 40) return nivel[5]
}
const criaP = ()=>{
    const p = document.createElement('p')
    return p;
}

const criaIMC = (x,y)=>{
    return (x/(y * y)).toFixed(2)
}

const setResultado = (msg,isValid)=>{
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = ''

    const p = criaP()
    if(isValid){
        p.classList.add('paragrafo-resultado')
    }else
    {
        p.classList.add('erro')
    }
    p.innerHTML = msg
    resultado.appendChild(p)
}