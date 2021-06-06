function myFunction() {
    var x = document.getElementById("Gmenu");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  $("#js-hamburger").click(function () {
    $("#js-top-line").toggleClass("active");
    $("#js-center-line").toggleClass("active");
    $("#js-bottom-line").toggleClass("active");
    $("#js-nav").toggleClass("show");
  });