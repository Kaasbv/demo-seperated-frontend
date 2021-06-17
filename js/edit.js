function initEdit() {
  renderFields();
  renderAttributes(currentGoal.ID_goal);
}

function renderFields(){

  let name = document.querySelector(`#goaleditform input[name=name]`);
  name.value = currentGoal.name;

  let endDate = document.querySelector(`#goaleditform input[name=end_date]`);
  endDate.value = dayjs().format("YYYY-MM-DD");
}

function renderAttributes(goalId) {
  $.getJSON("/api/attribute/list.php?id_goal=" + goalId, function (data) {
    renderAttributesHTML(data);
  });
}

function renderAttributesHTML(attributes) {
  let container = document.querySelector("#attributes");

  let html = "";

  if(attributes.length === 0){
    html = "No attributes yet";
  }else{
    for (let attribute of attributes) {
      html += `
        <label for="${attribute.name}">${attribute.name}</label><br>
        <input class="attribute-input" type="text" name="${attribute.name}" id="${attribute.name}" value="${attribute.content}">
        <button data-name="${attribute.name}" onclick="deleteAttribute(event);">&times;</button><br>
      `;
    }
  }


  container.innerHTML = html;
}

//Use data attributes in HTML
//Get the relevant HTML elements from the DOM and put them in a variable
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

//Loop through each click and use a callback function to open the modal
openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

//Eventlistener to close active overlay on click for each active modal
overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach(modal => {
    closeModal(modal);
  });
});

//Use closest modal class and call the close function
closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});

//Check if null, else add the 'active' class (CSS)
function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
};

//Check if null, else remove the 'active' class (CSS)
function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
};

//JQuery post to back-end
function postAttribute(event) {
  let id = document.querySelector("[name=id_goal]");
  id.value = currentGoal.ID_goal;

  event.preventDefault();
  $.post('/api/attribute/create.php',
    $("#attribute").serialize(),
    (data, status) => {
      const modals = document.querySelectorAll('.modal.active');
      modals.forEach(modal => {
        closeModal(modal);
      });
      renderAttributes(currentGoal.ID_goal);
    });
};

//JQuery, Delete a single attribute through button click
function deleteAttribute(event) {
  let target = event.target;
  let name = target.dataset.name;

  $.post('/api/attribute/delete.php',
    { name: name, id_goal: currentGoal.ID_goal },
    () => {
      renderAttributes(currentGoal.ID_goal);
    });
};

//Jquery, make a change to an attribute input field and save this
function saveContent(event) {
  event.preventDefault();
  document.getElementById('goalEditId').value = currentGoal.ID_goal;

	$.post("/api/goal/update.php", $("#goaleditform").serialize() , function (data) {
    getGoals();
    toggleEdit();
  })
  .fail(function() { 
    alert("data is not valid");
	})

  saveAttributes();
};

function saveAttributes(){
  let contents = document.querySelectorAll(".attribute-input");
  contents.forEach(content => {
    $.post('/api/attribute/change.php',
      { name: content.name, content: content.value, id_goal: currentGoal.ID_goal },
      () => {
        renderAttributes(currentGoal.ID_goal);
      });
  });
}

//Jquery, Complete the goal by setting status to "done"
function completeGoal() {
  $.post('/api/goal/update.php',
    { ID_goal: currentGoal.ID_goal, status: "done" },
    (data, status) => {
      toggleEdit();
    });
};


function toggleEdit(){
  let container = document.querySelector(".container");
  container.classList.toggle("show");
  if(container.classList.contains("show")){
    initEdit();
  }
}
