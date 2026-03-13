/*
  Cheap Coffins — I AM MARA
  Client-side password gate + audio playback behavior
*/

// ====================================================
// EDIT PASSWORD HERE:
// Replace the value below with your own private password.
// This is casual protection only (not secure authentication).
// ====================================================
const EPK_PASSWORD = "cheapcoffins-private";

const SESSION_KEY = "cheapcoffins-epk-authenticated";

const gate = document.getElementById("passwordGate");
const form = document.getElementById("passwordForm");
const input = document.getElementById("passwordInput");
const message = document.getElementById("passwordMessage");
const content = document.getElementById("siteContent");

function unlockSite() {
  gate.classList.add("hidden");
  gate.setAttribute("aria-hidden", "true");

  content.classList.remove("hidden");
  content.setAttribute("aria-hidden", "false");
}

function lockSite() {
  gate.classList.remove("hidden");
  gate.setAttribute("aria-hidden", "false");

  content.classList.add("hidden");
  content.setAttribute("aria-hidden", "true");
}

if (sessionStorage.getItem(SESSION_KEY) === "true") {
  unlockSite();
} else {
  lockSite();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entered = input.value.trim();

  if (entered === EPK_PASSWORD) {
    sessionStorage.setItem(SESSION_KEY, "true");
    message.textContent = "";
    unlockSite();
    return;
  }

  message.textContent = "Incorrect password. Please try again.";
  sessionStorage.removeItem(SESSION_KEY);
});

