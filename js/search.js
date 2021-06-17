window.addEventListener("load", init);

let goals = [];
let timeoutid;

function init(){
  //Add events
  addEvents();
  //Load initian search
  let searchTerm = document.querySelector("#term").value;
  searchGoals(searchTerm);
}

function searchGoals(searchterm) {
  $.getJSON(`/api/goal/search.php?search=${searchterm}`, function (data) {
    goals = data;
    render();
  });
}

function addEvents() {
  document.querySelector("#term").addEventListener("keyup", function (event) {
    let searchTerm = event.currentTarget.value;
    searchGoals(searchTerm);
  });
}

function render() {
  let goalContainer = document.querySelector("#goals");
  let html = "";


  if(goals.length === 0){
    html = `<div class="center">${ts.noGoalsFound}</div>`;
  }else{
    for (let goal of goals) {
      html += `
      <div id="goalBox" data-id =${goal.id} onclick="clickgoal(event)">
        <span class ="goalName">${goal.name}</span>
      </div>
      `
    }
  }

  goalContainer.innerHTML = html;
}