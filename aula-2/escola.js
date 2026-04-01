//aprendendo funções e condicionais
function calcularMedia() {
  // referências aos elementos da página
  var inNome = document.getElementById("inNome");
  var inNota1 = document.getElementById("inNota1");
  var inNota2 = document.getElementById("inNota2");
  var outMedia = document.getElementById("outMedia");
  var outSituacao = document.getElementById("outSituacao");

  // obter valores dos campos
  var nome = inNome.value;
  var nota1 = Number(inNota1.value);
  var nota2 = Number(inNota2.value);

  // calcular média
  var media = (nota1 + nota2 ) / 2;

  // exibir média
  outMedia.textContent = "Média das Notas: " + media.toFixed(1);

  // verificar situação
  if (media >= 5) {
    outSituacao.textContent = "Parabéns, " + nome + "! Você foi aprovado(a)";
    outSituacao.style.color = "blue";
  } else {
    outSituacao.textContent = "Ops, " + nome + ". Você foi reprovado(a)";
    outSituacao.style.color = "red";
  }
}

// evento do botão
var btResultado = document.getElementById("btResultado");
btResultado.addEventListener("click", calcularMedia);