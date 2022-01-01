let num = document.getElementById('fnum')
let lista = document.getElementById('flista') // transformar res em variavel.
let res = document.querySelector('div#res')
let valores = []

function adicionar() {
    res.innerHTML = ''
    numero = Number(num.value)
    if (num.value <= 0 || num.value > 100 ) {
       window.alert(`Valor inválido ou o valor já se encontra no array`)
    } else if (valores.indexOf(numero) == -1) {
        valores.push(numero)
        let item = document.createElement('option')
        item.text = `Valor ${numero} adicionado`
        lista.appendChild(item)
    } else {
        window.alert(`Valor inválido ou o valor já se encontra no array`)
    }//fim do if
 }

function analisar() {
    if (valores == 0) {
        window.alert(`Valor inválido ou o valor já se encontra no array`)
    } else {
        let tam = Number(valores.length)
        let min = Math.min(...valores)
        let max = Math.max(...valores)
        
        let soma = 0
        for (i = 0; i < valores.length; i++) {
            soma += Number(valores[i])
        }

        res.innerHTML = `temos ${tam} valores armazenados<br>.Sendo ${min} menor valor informado e ${max}, o maior.<br>A soma deles é ${soma}.`
    }
}
    
