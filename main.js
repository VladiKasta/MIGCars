/* Таб на главной странице */
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("switcher").addEventListener("click", function () {
    document.querySelectorAll(".old_price").forEach((el) => {
      el.classList.remove("hidden");
    });

    let newProduct = document.getElementById("switcher_op1");
    newProduct.classList.toggle("active");
    let saleProducts = document.getElementById("switcher_op2");
    saleProducts.classList.toggle("active");

    if (newProduct.classList.value.includes("active")) {
      console.log("акции");
      document.querySelectorAll(".old_price").forEach((el) => {
        el.classList.add("hidden");
      });
    }
  });
});

/* Таб на главной странице */

/* Бургер */
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("burgerOpenBtn")
    .addEventListener("click", function () {
      document.getElementsByClassName("burger")[0].classList.toggle("selected");
    });
});
/* Бургер */

/* Показ всех сертификатов */
document.addEventListener("DOMContentLoaded", function () {
  let certs = 6;
  certsLength = document.querySelectorAll(".cert_card_item").length;

  document.getElementById("showCersBtn").addEventListener("click", function () {
    certs += 6;
    const array = Array.from(document.querySelector(".certs_cards").children);
    const visibleCerts = array.slice(0, certs);
    visibleCerts.forEach((el) => el.classList.add("visible"));

    if (certs >= certsLength) {
      document.getElementById("showCersBtn").style = "display: none;";
    }

    /* if (certs >= certsLength) {
      btnArrow = document
        .querySelector(".expand_button")
        .children[0].classList.toggle("pressed");
      console.log(btnArrow);

      buttonExpand = document.querySelector(".expand_button");
      buttonExpand.textContent = "Скрыть";
      buttonExpand.addEventListener("click", function () {
        certs = 6;
      });
      console.log(buttonExpand);
    } */
  });
});
/* Показ всех сертификатов */

/* Показ текста в поставщиках */
document.addEventListener("DOMContentLoaded", function () {
  let arrows = document.querySelectorAll(".text_show");
  /* первая стрелка */
  arrows[0].addEventListener("click", function () {
    document
      .querySelector(".supple-or-creator-text")
      .classList.toggle("isShownText");
  });

  /* вторая стрелка */
  arrows[1].addEventListener("click", function () {
    document
      .querySelector(".how-to-become-supplier-text")
      .classList.toggle("isShownText");
  });
});
/* Показ текста в поставщиках */
