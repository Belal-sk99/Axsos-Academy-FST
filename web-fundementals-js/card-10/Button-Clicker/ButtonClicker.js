function toggleAuth() {
  const btn = document.getElementById("auth-btn");
  btn.textContent = btn.textContent === "Login" ? "Logout" : "Login";
}

function removeAddButton() {
  document.getElementById("add-def-btn").remove();
}

function handleLike() {
  alert("Ninja was liked");
}
