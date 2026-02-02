// SOM VIP
window.addEventListener("click", () => {
  const sound = document.getElementById("vipSound");
  if (sound) sound.play();
}, { once: true });

// CONTADOR
let membros = 0;
let lucro = 0;

setInterval(() => {
  membros += Math.floor(Math.random() * 5) + 1;
  lucro += Math.floor(Math.random() * 40) + 20;
  document.getElementById("membros").innerText = membros;
  document.getElementById("lucro").innerText = "R$ " + lucro;
}, 1200);

// CONTAGEM REGRESSIVA
let tempo = 15 * 60;
setInterval(() => {
  let m = Math.floor(tempo / 60);
  let s = tempo % 60;
  document.getElementById("countdown").innerText =
    String(m).padStart(2,'0') + ":" + String(s).padStart(2,'0');
  if (tempo > 0) tempo--;
}, 1000);

// POPUPS INTENSOS
const nomes = ["Carlos","Lucas","Rafael","Bruno","Igor","Felipe","Renato","Matheus"];
const estados = ["SP","RJ","MG","PR","BA","RS"];

setInterval(() => {
  const popup = document.getElementById("popup");
  const nome = nomes[Math.floor(Math.random()*nomes.length)];
  const estado = estados[Math.floor(Math.random()*estados.length)];
  popup.innerText = 🔥 ${nome} (${estado}) entrou agora;
  popup.style.display = "block";
  setTimeout(() => popup.style.display = "none", 3500);
}, 2500);
