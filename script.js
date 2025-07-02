function revealSurprise() {
  document.getElementById('surprise').style.display = 'block';
}
const compliments = [
  "You debug problems like a wizard 🧙‍♂️",
  "You're the human version of Ctrl+Z — always fixing things!",
  "You're the reason group projects actually work.",
  "Your brain is 90% code, 10% snacks 🍫",
  "You bring the vibe to every call!",
  "Legend has it you once wrote bug-free code.",
  "You turn chaos into clean commits 🔥",
  "Even Stack Overflow wants your answers.",
  "You're not just a friend — you're an upgrade 💻",
  "Fun fact: You’ve got a 5-star rating in awesomeness ⭐"
];
const revealsurprise = document.getElementById("revealsurprise");
const modal = document.getElementById("surpriseBox");

function typeText(text, callback) {
  let i = 0;
  const line = document.createElement("div");
  line.textContent = "> ";
  revealsurprise.appendChild(line);

  function typeChar() {
    if (i < text.length) {
      line.textContent += text.charAt(i);
      i++;
      setTimeout(typeChar, 40);
    } else {
      if (callback) callback();
      revealsurprise.scrollTop = revealsurprise.scrollHeight;
    }
  }

  typeChar();
}

function generateCompliment() {
  const randomIndex = Math.floor(Math.random() * compliments.length);
  const compliment = compliments[randomIndex];
  typeText(compliment);
}

// 💥 New Functions for Surprise Box
function showSurpriseBox() {
  modal.style.display = "flex";
}

function openSurprise() {
  modal.style.display = "none";
  generateCompliment();
}
