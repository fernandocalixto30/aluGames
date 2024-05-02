function alterarStatus(id) {
  let statusBtn = document.querySelector(`#game-${id}`);
  let image = statusBtn.querySelector(".dashboard__item__img");
  let boato = statusBtn.querySelector(".dashboard__item__button");

  if (image.classList.contains("dashboard__item__img--rented")) {
    image.classList.remove("dashboard__item__img--rented");
    boato.classList.remove("dashboard__item__button--return");
    boato.textContent = "Alugar";
  } else {
    image.classList.add("dashboard__item__img--rented");
    boato.classList.add("dashboard__item__button--return");
    boato.textContent = "Devolver";
  }
}
