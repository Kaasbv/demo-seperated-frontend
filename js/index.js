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
      html +=`<h1> ${ts.epic}. </h1>`;
      htmlBar += `<span class ="addGoals" onclick="showAddGoal()">${ts.addEpic}</span>`;
    }
    else {
      htmlButton += `<img src ="images/icons/arrow-left.svg" onclick="clickBack(event)">`;
      html += `<h1> ${ts.goals}. </h1>`;

      if (lastGoal == 1 ) {
        htmlBar += `
        <span class ="editEpics">${ts.editEpic}</span>
        <span class ="addGoals" onclick="showAddGoal()">${ts.addGoal}</span>
        `
      }
      else {
        htmlBar += `
        <span class ="editEpics">${ts.editGoal} </span>
        <span class ="addGoals" onclick="showAddGoal()">${ts.addGoal}</span>
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
    html = `<span> ${ts.noGoalsFound} </span>`;
  }else{
    for(let goal of goals){
      let Id = goal.ID_goal;
      let dateText = goal.type && goal.end_date ? grabDateValue(goal.type, goal.end_date) : "";
      if ( currentGoal != 1) {
        html += `
        <div id="goalBox" data-id =${Id} onclick="clickgoal(event)">
        <span class ="goalName">${goal.name}</span>
        <span class ="dueDate">${dateText}</span>
        </div>
        `;
      } else {
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
  if (currentGoal < 1){
    currentGoal = 1;
  }
  else {
  currentGoal = previousGoals.pop();
  getGoals();
}
}

function showAddGoal(){
  var modal = document.getElementById("addGoal");
  var bodyCover = document.querySelector("#bodyCover");

  bodyCover.classList.toggle("bodyOff");
  modal.classList.toggle("addGoalContent");
  document.getElementById('parentId').value = currentGoal;

    if (parseInt(modal.style.maxHeight) !== 0 && modal.style.maxHeight.length !== 0)  {
        modal.style.maxHeight = 0 + "px";
    } else {
        modal.style.maxHeight = 400 + "px";
    }
}

function removeAddScreen(){
  var body = document.querySelector("#bodyCover");
  var modal = document.getElementById("addGoal");

  modal.classList.toggle("addGoalContent");
  body.classList.toggle("bodyOff");
  modal.style.maxHeight = 0;
  document.getElementById("addGoalForm").reset();
}

function CreateGoal(event) {
  event.preventDefault();
  document.getElementById('parentId').value = currentGoal;
	$.post("/api/goal/create.php", $("#addGoalForm").serialize() , function (data) {
    removeAddScreen();
    getGoals();
    document.getElementById("addGoalForm").reset();
  })
  .fail(function() { 
    alert("data is not valid");
	})
}