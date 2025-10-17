let numero_secreto = Math.floor(Math.random() * 100) + 1;
let contador = 1;

function jogo() {
  const palpite = Number(document.getElementById("palpite").value);
  const res = document.getElementById("res");

  // Limpar classes anteriores
  res.classList.remove("acerto", "erro", "dica", "animate");

  if (contador > 10) {
    res.innerText = "Suas tentativas acabaram!";
    res.classList.add("erro", "animate"); // adiciona cor de erro + pulse
    return;
  }

  if (palpite === numero_secreto) {
    res.innerText = `Parabéns! Você acertou em ${contador} tentativas!`;
    res.classList.add("acerto", "animate"); // verde + pulse
  } else if (palpite < numero_secreto) {
    res.innerText = "Seu palpite foi menor";
    res.classList.add("dica", "animate"); // amarelo + pulse
  } else {
    res.innerText = "Seu palpite foi maior";
    res.classList.add("dica", "animate"); // amarelo + pulse
  }

  contador++;
  console.log(`Tentativas: ${contador}`);
}
