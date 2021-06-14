document.querySelector("#hamburger").addEventListener("click", function(){
  document.querySelector("#hamburger").classList.toggle("active");
  document.querySelector("nav").classList.toggle("show");
});

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