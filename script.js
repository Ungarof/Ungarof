document.getElementById("mostrarEmail").addEventListener("click", function () {
  const email = document.getElementById("email");

  if (email.style.display === "none") {
    email.style.display = "block";
    this.textContent = "Ocultar e-mail";
  } else {
    email.style.display = "none";
    this.textContent = "Mostrar meu e-mail";
  }
});