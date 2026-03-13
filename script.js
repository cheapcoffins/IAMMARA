// EDIT PASSWORD HERE
const EPK_PASSWORD = "cheapcoffins-private";
const SESSION_KEY = "cheapcoffins-epk-authenticated";

const gate = document.getElementById("passwordGate");
const form = document.getElementById("passwordForm");
const input = document.getElementById("passwordInput");
const message = document.getElementById("passwordMessage");
const content = document.getElementById("siteContent");

function unlock() {
  gate.classList.add("hidden");
  content.classList.remove("hidden");
}

function lock() {
  gate.classList.remove("hidden");
  content.classList.add("hidden");
}

if (sessionStorage.getItem(SESSION_KEY) === "true") {
  unlock();
} else {
  lock();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (input.value.trim() === EPK_PASSWORD) {
    sessionStorage.setItem(SESSION_KEY, "true");
    message.textContent = "";
    unlock();
    return;
  }
  sessionStorage.removeItem(SESSION_KEY);
  message.textContent = "Incorrect password. Please try again.";
});
