<?php
//Include the helper
include_once("_modules/TranslationHelper.php");
?>

<!-- Use the $ts object to access translations -->
<h1><?= $ts->exampleH1 ?></h1>
<button><?= $ts->logoutText ?></button>

<h1><?= $ts->languageH1 ?></h1>
<select class="languageSelect">
  <option value="nl">Nederlands</option>
  <option value="en">English</option>
  <option value="ru">Cyka blyat</option>
</select>
<button class="languageButton">Select</button>

<script>
//Set the event for the select button
let select = document.querySelector(".languageSelect");
let button = document.querySelector(".languageButton");

button.addEventListener("click", updateLanguage);

function updateLanguage(){
  //Grab value from select which can be en, nl or ru
  let value = select.value;
  //Set the cookie language with that exact value
  document.cookie = "language=" + value;
  //Reload the page so the text can regenerate by php
  window.location.reload();
}
</script>