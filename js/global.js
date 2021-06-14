document.querySelector("#hamburger").addEventListener("click", function(){
  document.querySelector("#hamburger").classList.toggle("active");
  document.body.classList.toggle("nonscrollable");
  document.querySelector("nav").classList.toggle("show");
});

window.addEventListener("load", setDefaultFormLanguage);

function grabDateValue(goalType, date){
  if(typeof date !== "object") date = dayjs(date);
  let value;
  switch(goalType){
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

window.addEventListener("load", function(){
  dayjs.extend(dayjs_plugin_weekOfYear);
});

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
  
  // Return null if not found
  return null;
  
}


function setDefaultFormLanguage(){
  select.value = getCookie("language");

}