// TIMER
let time = 15 * 60;
const timerEl = document.getElementById("timer");

setInterval(() => {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  timerEl.textContent =
    ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')};

  if (time > 0) time--;
}, 1000);

// PROVA SOCIAL
const entries = [
  "🔥 Carlos (SP) entrou agora",
  "✅ Lucas (PR) se inscreveu",
  "⚽️ Rafael (RJ) entrou no canal",
  "💰 André (BA) acabou de entrar",
  "🚀 Bruno (MG) entrou agora"
];

const entryBox = document.getElementById("entryBox");

setInterval(() => {
  const random = entries[Math.floor(Math.random() * entries.length)];
  entryBox.textContent = random;
}, 3500);