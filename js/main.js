window.addEventListener("load", init);


var goals = [];
var currentGoal = 1;
var prev = [0];


function init(){
  getGoals();
}

function getGoals(){
  $.getJSON("/api/goal/list.php?parent_id="+ currentGoal, function( data ) {
    goals = data;
    console.log(currentGoal);
    console.log(prev);
    epicOrGoal();
    renderHtml();
  }).fail(function(){
    console.log("Failed");
  });
}

function epicOrGoal(){
    let container = document.querySelector("#header");
    let bar = document.querySelector("#editBar");
    let buttonDiv = document.querySelector("#backButton");
    let check = prev[prev.length - 1];
    
    let htmlBar = "";
    let html = "";
    let htmlButton = "";


    if (prev == 0){
      html +=`<h1> Epics. </h1>`;
      htmlBar += `<span class ="addGoals">add Epic</span>`;
    }
    else {
      htmlButton += `<img src ="images/icons/arrow-left.svg" onclick="clickBack(event)">`;
      html += `<h1> Goals. </h1>`;

      if (check == 1 ) {
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

    buttonDiv.innerHTML = htmlButton;
    bar.innerHTML = htmlBar;
    container.innerHTML = html;
    
}



function renderHtml(){
  let container = document.querySelector("#goals");

  let html = "";

  for(let goal of goals){
    Id = goal.ID_goal;
    parentId = goal.parent_goal_id;

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

  container.innerHTML = html;

}

function clickgoal(e){
  let element = e.currentTarget;
  prev.push(currentGoal);
  currentGoal = element.dataset.id;
  getGoals();
}

function clickBack(e){
  currentGoal = prev.pop();
  getGoals();
}