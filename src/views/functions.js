const form = {
  aqui: '12354',
  ali: '123213',
  colá: 'asdad'
}

function qualquer(xixicocodokrl) {
  console.log(xixicocodokrl)
}

qualquer(form.aqui)

/* ex1 */
function somar(a, b) {
  const resultado = a + b

  console.log(resultado)
  return resultado
}
somar(5, 15)

export { somar, calcularIdade }

/* ex2 */
function calcularIdade(qlqrMerda) {
  const hoje = new Date()
  const [dia, mes, ano] = qlqrMerda.split('/')
  const nascimento = new Date(`${ano}-${mes}-${dia}`)

  let idade = hoje.getFullYear() - nascimento.getFullYear()

  const mesAtual = hoje.getMonth()
  const diaAtual = hoje.getDate()

  if (
    mesAtual < nascimento.getMonth() ||
    (mesAtual === nascimento.getMonth() && diaAtual < nascimento.getDate())
  ) {
    idade--
  }
  console.log(idade)
}

/* ex3 */
calcularIdade('11/09/1994')

function calcularMedia(Nota1, Nota2) {
  var mediaResultado = (Nota1 + Nota2) / 2

  console.log(mediaResultado)
}
calcularMedia(6.5, 6.2)

function calcularArea(altura, largura) {
  var area = largura * altura

  console.log(area)
}
calcularArea(5, 5)

function returnCategory(idade) {
  var category = 0

  if (idade >= 5 && idade <= 7) {
    category = 1
  } else if (idade >= 8 && idade <= 10) {
    category = 2
  } else if (idade >= 11 && idade <= 13) {
    category = 3
  } else if (idade >= 14 && idade <= 17) {
    category = 4
  } else category = 5

  console.log('categoria =', category)
}
returnCategory(23)

function positivoOuNegativo(numero) {
  var result = false
  var positivoNegativo = ''

  if (numero >= 0) {
    ;(result = true), (positivoNegativo = 'o valor é positivo')
  } else (result = false), (positivoNegativo = 'o valor é negativo')
  console.log(positivoNegativo)

  console.log('o numero é positivo? :', result)
}

positivoOuNegativo(-10)

function parOuImpar(numero) {
  var resultado = ''
  if (numero / 2 === 0) {
    resultado = ' é par'
  } else resultado = ' é impar'

  console.log('o numero ' + numero + resultado)
}
parOuImpar(23)
function NotaDessaPorra(mediaFinal) {
  var conceitoALuno = 0

  if (mediaFinal >= 0 && mediaFinal < 5) {
    conceitoALuno = 1
  } else if (mediaFinal >= 5 && mediaFinal < 7) {
    conceitoALuno = 2
  } else if (mediaFinal >= 7 && mediaFinal < 9) {
    conceitoALuno = 3
  } else if (mediaFinal >= 9 && mediaFinal <= 10) {
    conceitoALuno = 4
  } else {
    console.log('Nota inválida')
    return
  }
  console.log('aluno com media ' + mediaFinal + ' ficou com o conceito: ' + conceitoALuno)
}
NotaDessaPorra(5)

function calcularImc(peso, altura) {
  var imc
  imc = peso / (altura * altura)
  var pesoMinIdeal = 18.5 * (altura * altura)
  var pesoMaxIdeal = 24.9 * (altura * altura)

  if (imc < 18.5) {
    console.log('resultado: ' + imc.toFixed(2) + ' abaixo do peso');
} else if (imc >= 18.5 && imc < 25) {
    console.log('resultado: ' + imc.toFixed(2) + ' peso normal');
} else if (imc >= 25 && imc < 30) { 
    console.log('resultado: ' + imc.toFixed(2) + ' Sobrepeso');
} else if (imc >= 30 && imc < 35) {
    console.log('resultado: ' + imc.toFixed(2) + ' obesidade Grau 1');
} else if (imc >= 35 && imc < 40) { 
    console.log('resultado: ' + imc.toFixed(2) + ' obesidade Grau 2 (severa)');
} else {
    console.log('resultado: ' + imc.toFixed(2) + ' obesidade Grau 3 (mórbida)');
}


  console.log(imc)

  console.log('seu peso minumo ideal é : ' + pesoMinIdeal)
  console.log('seu peso maximo ideal é : ' + pesoMaxIdeal)
}
calcularImc(80, 1.8)

function Calculadora2Numeros(operacao, n1, n2) {
  var somar
  var dividir
  var multiplicar
  var subtrair

  switch (operacao) {
    case 1:
      somar = n1 + n2
      console.log('o valor da soma é ' + somar)
      break
    case 2:
      subtrair = n1 - n2
      console.log('o valor da soma é ' + subtrair)
      break
    case 3:
      multiplicar = n1 * n2
      console.log('o valor da multiplicação é ' + multiplicar)
      break
    case 4:
      dividir = n1 / n2
      console.log('o valor da divisão é ' + dividir)
  }
}
Calculadora2Numeros(1, 2, 2)

function calculaSalario(salarioBruto, horasExtras, descontos) {
  var totalExtra = horasExtras * 20

  var totalSalario = totalExtra + salarioBruto - descontos

  console.log('valor Salario liquido :' + totalSalario)
}

calculaSalario(1900, 5, 250)
