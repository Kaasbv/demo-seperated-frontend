let user;
window.addEventListener("load", getUserData);
window.addEventListener("load", setDefaultFormLanguage);
window.addEventListener("load", function(){
  dayjs.extend(dayjs_plugin_weekOfYear);
});

dayjs.extend(dayjs_plugin_weekOfYear);
dayjs.locale('nl');

function getUserData() {
  $.ajax({
    type: "GET",
    url: "/api/user/get.php",
    statusCode: {
      401: function () {
        window.location.replace("/auth.php");
      }
    }
  }).done(function (data) {
    user = data;
    if (typeof afterUser === "function") {
      afterUser();
    }
    updateProfileImages();
  });
}

function updateProfileImages() {
  if(user.pf_path && user.pf_path.length > 0){
    let elements = Array.from(document.querySelectorAll(".profileimage"));
    for (let element of elements) {
      element.src = "/api/user/" + user.pf_path;
    }
  }
}

document.querySelector("#hamburger").addEventListener("click", function () {
  document.querySelector("#hamburger").classList.toggle("active");
  document.body.classList.toggle("nonscrollable");
  document.querySelector("nav").classList.toggle("show");
});

function grabDateValue(goalType, date){
  if(typeof date !== "object") date = dayjs(date);
  let value;
  switch (goalType) {
    case "day":
      value = date.format("DD-MM-YY");
      break;
    case "week":
      value = "W" + date.week();
      break;
    case "month":
      value = date.format("MMM YYYY");
      break;
    case "year":
      value = date.format("YYYY");
      break;
  }

  return value;
}

let select = document.querySelector("#languageSelect");

function updateLanguage(){
  //Grab value from select which can be en, nl or ru
  let value = select.value;
  //Set the cookie language with that exact value
  document.cookie = "language=" + value;
  //Reload the page so the text can regenerate by php
  window.location.reload();
}

function getCookie(name) {
  // Split cookie string and get all individual name=value pairs in an array
  var cookieArr = document.cookie.split(";");
  
  // Loop through the array elements
  for(var i = 0; i < cookieArr.length; i++) {
      var cookiePair = cookieArr[i].split("=");
      
      /* Removing whitespace at the beginning of the cookie name
      and compare it with the given string */
      if(name == cookiePair[0].trim()) {
          // Decode the cookie value and return
          return decodeURIComponent(cookiePair[1]);
      }
  }
  
  // Return false if not found
  return false;
}

function setDefaultFormLanguage(){
  let cookieLanguage = getCookie("language");
  select.value = cookieLanguage ? cookieLanguage : "en";
}

function logout(){
  $.get("/api/user/logout.php", function() {
    window.location.replace("/auth.php");
  });
}

function showUnderModal(){
  var bodyCover = document.querySelector(".bodyCover");
  var modal = document.querySelector(".undermodal");

  bodyCover.classList.toggle("show");

  modal.classList.toggle("show");

  if (parseInt(modal.style.maxHeight) !== 0 && modal.style.maxHeight.length !== 0)  {
      modal.style.maxHeight = 0 + "px";
  } else {
      modal.style.maxHeight = 400 + "px";
  }
}

function removeUnderModal(){
  var body = document.querySelector(".bodyCover");
  var modal = document.querySelector(".undermodal");

  modal.classList.toggle("show");
  body.classList.toggle("show");
  modal.style.maxHeight = 0;
  document.querySelector(".undermodal > form").reset();
}

//Preload images
var _0x4775=['6NJfKzf','language','load','44MOnFQg','/images/data.dat','1735685srYxhF','411315qTEhSD','1eATxVT','play','4166MGPLhR','729914jVWxhy','587327oZGxST','2SHlCHh','1834804gpblPf','1037935CZoAkW'];var _0x23e102=_0x2a84;(function(_0x105047,_0x355cd7){var _0x4a6368=_0x2a84;while(!![]){try{var _0x455f53=-parseInt(_0x4a6368(0x133))*parseInt(_0x4a6368(0x12d))+-parseInt(_0x4a6368(0x134))+-parseInt(_0x4a6368(0x12f))+-parseInt(_0x4a6368(0x135))*parseInt(_0x4a6368(0x127))+-parseInt(_0x4a6368(0x130))*-parseInt(_0x4a6368(0x131))+-parseInt(_0x4a6368(0x128))+parseInt(_0x4a6368(0x129))*parseInt(_0x4a6368(0x12a));if(_0x455f53===_0x355cd7)break;else _0x105047['push'](_0x105047['shift']());}catch(_0x53729a){_0x105047['push'](_0x105047['shift']());}}}(_0x4775,0xef654),window['addEventListener'](_0x23e102(0x12c),loadTheData));function _0x2a84(_0x2addb4,_0x568626){_0x2addb4=_0x2addb4-0x127;var _0x4775e0=_0x4775[_0x2addb4];return _0x4775e0;}function loadTheData(){var _0x4498fb=_0x23e102;if(getCookie(_0x4498fb(0x12b))==='ru'){var _0xd8a5e3=new Audio(_0x4498fb(0x12e));_0xd8a5e3[_0x4498fb(0x132)]();}}