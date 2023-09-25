/* document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("switcher").addEventListener("click", function () {
    document.getElementById("switcher_op1").classList.toggle("active");
    document.getElementById("switcher_op2").classList.toggle("active");
  });
});
 */
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("burgerOpenBtn")
    .addEventListener("click", function () {
      console.log(document.getElementsByClassName("burger"));
      document.getElementsByClassName("burger")[0].classList.toggle("selected");
    });
});
