window.addEventListener("load", getGoals);


var goals = [];
var currentGoal = 1;
var previousGoals = [];



function getGoals(){
  $.getJSON("/api/goal/list.php?parent_id="+ currentGoal, function( data ) {
    goals = data;
    epicOrGoal();
    renderHtml();
  }).fail(function(){
    window.location.replace("/auth.php");
  });
}

function epicOrGoal(){
    let container = document.querySelector("#header");
    let bar = document.querySelector("#editBar");
    let backButton = document.querySelector("#backButton");
    let lastGoal = previousGoals[previousGoals.length - 1];
    
    let htmlBar = "";
    let html = "";
    let htmlButton = "";


    if (previousGoals.length ==- 0){
      html +=`<h1> Epics. </h1>`;
      htmlBar += `<span class ="addGoals">add Epic</span>`;
    }
    else {
      htmlButton += `<img src ="images/icons/arrow-left.svg" onclick="clickBack(event)">`;
      html += `<h1> Goals. </h1>`;

      if (lastGoal == 1 ) {
        htmlBar += `
        <span class ="editEpics">edit Epic</span>
        <span class ="addGoals">add Goal</span>
        `
      }
      else {
        htmlBar += `
        <span class ="editEpics">edit Goal </span>
        <span class ="addGoals">add Goal</span>
        `;
      }
    }

    backButton.innerHTML = htmlButton;
    bar.innerHTML = htmlBar;
    container.innerHTML = html;
}



function renderHtml(){
  let container = document.querySelector("#goals");

  let html = "";

  if(goals.length === 0){
    html = "<span>Geen goals gevonden.</span>";
  }else{
    for(let goal of goals){
      let Id = goal.ID_goal;
  
        if ( currentGoal != 1) {
          html += `
          <div id="goalBox" data-id =${Id} onclick="clickgoal(event)">
          <span class ="goalName">${goal.name}</span>
          <span class ="dueDate">apr</span>
          </div>
          `;
        }
        else {
          html += `
          <div id="epicBox" data-id ="${Id}"  onclick="clickgoal(event)">
            <span class ="epicName">${goal.name}</span>
            <span class ="epicScore">300</span>
            <div class ="progressBar" ></div>
          </div>
          `;
        }
    }
  }

  container.innerHTML = html;
}

function clickgoal(e){
  let element = e.currentTarget;
  previousGoals.push(currentGoal);
  currentGoal = element.dataset.id;
  getGoals();
}

function clickBack(e){
  currentGoal = previousGoals.pop();
  getGoals();
}