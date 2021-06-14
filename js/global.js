let user;
window.addEventListener("load", getUserData);

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
  document.querySelector("nav").classList.toggle("show");
});

function grabDateValue(goalType, date) {
  if (typeof date !== "object") date = dayjs(date);
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

window.addEventListener("load", function () {
  dayjs.extend(dayjs_plugin_weekOfYear);
});