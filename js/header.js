document.querySelector("#hamburger").addEventListener("click", function(){
  document.querySelector("#hamburger").classList.toggle("active");
  document.querySelector("nav").classList.toggle("show");
});