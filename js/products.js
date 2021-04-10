//Load event zodat de functie loadProducts na laden wordt gestart
window.addEventListener("load", loadProducts);

function loadProducts(){
  //Haal met JQUERY de json op
  $.getJSON("/api/product/list.php", function(data){//Callback na het ophalen van de data met als argument de opgehaalde data
    let parent = document.querySelector("#products"); //Element waar zij in moeten
    parent.innerHTML = ""; //Empty het element zodat loading weg gaat
    
    for(let item of data){ //Loop door alle opgehaalde projecten heen
      //Maak virtueel li element aan en voeg de name uit de data aan de content toe
      let liItem = document.createElement('li');
      liItem.innerHTML = item.name;
      //Voeg dit element toe aan de daadwerkelijke parent
      parent.appendChild(liItem);
    }
  });
}