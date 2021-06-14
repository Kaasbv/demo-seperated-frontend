afterUser = loadFormData;

function loadFormData() {
  let fieldNames = ["email", "firstname", "middlename", "lastname", "birthdate"];
  for (let fieldName of fieldNames) {
    document.querySelector(`input[name=${fieldName}]`).value = user[fieldName];
  }
}

function showFileDialog() {
  document.querySelector("#hiddenUploadButton").click();
}

function uploadImage() {
  let uploadButton = document.querySelector("#hiddenUploadButton");
  let files = uploadButton.files;

  let fd = new FormData();
  fd.append('fileToUpload', files[0]);

  $.ajax({
    url: '/api/user/updatePF.php',
    type: 'post',
    data: fd,
    contentType: false,
    processData: false,
    statusCode: {
      401: function () {
        window.location.replace("/auth.php");
      },
      400: function (xhr) {
        if (xhr.responseText === "invalid extension") {
          alert(ts.invalidExtension);
        } else if (xhr.responseText === "file too large") {
          alert(ts.fileTooLarge);
        }
      }
    },
  })
    .done(function () {
      alert("Uploaded!");
      getUserData();
    });
}

function updateProfile(event) {
  event.preventDefault();

  let password = document.querySelector("#newpassword");
  let confirmPassword = document.querySelector("#confirmpassword");
  let errorElement = document.querySelector(".error");

  if (!password.value) {
    password.removeAttribute("name");
  }

  if (password.value !== confirmPassword.value) {
    errorElement.innerHTML = ts.passwordsNotEqual;
    return;
  }

  $.ajax({
    type: "POST",
    url: "/api/user/update.php",
    data: $("#profile").serialize(),
    statusCode: {
      401: function () {
        window.location.replace("/auth.php");
      }
    }
  }).done(function () {
    alert("Saved stuff!");
    password.setAttribute("name", "password");
    password.value = confirmPassword.value = "";
  });
}