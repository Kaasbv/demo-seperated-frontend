let goal = {
  username: "user1",
  name: "Thailand",
  type: "week",
  ID_goal: 2,
  parent_goal_id: 3,
  description: "Dit is een leuke description",
  status: "to do",
  start_date: "2020-01-01 20:00:00",
  end_date: "2020-01-01 20:00:00",
  date_created: "2021-05-30 00:00:00",
  date_updated: "2021-05-30 00:00:00"
}

window.addEventListener("load", initEdit);

function initEdit() {
  let textarea = document.querySelector("[name=description]");
  textarea.value = goal.description;

  renderAttributes(goal.ID_goal);
}

function renderAttributes(goalId) {
  $.getJSON("/api/attribute/list.php?id_goal=" + goalId, function (data) {
    renderHtml(data);
  });
}

function renderHtml(attributes) {
  let container = document.querySelector("#attributes");

  let html = "";

  for (let attribute of attributes) {
    html += `
      <label for="${attribute.name}">${attribute.name}</label><br>
      <input class="attribute-input" type="text" name="${attribute.name}" id="${attribute.name}" value="${attribute.content}">
      <button data-name="${attribute.name}" onclick="deleteAttribute(event);">&times;</button><br>
    `;
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
  id.value = goal.ID_goal;

  event.preventDefault();
  $.post('/api/attribute/create.php',
    $("#attribute").serialize(),
    (data, status) => {
      alert('status: ' + status);
      renderAttributes(goal.ID_goal);
    });
};

//JQuery, Delete a single attribute through button click
function deleteAttribute(event) {
  let target = event.target;
  let name = target.dataset.name;

  $.post('/api/attribute/delete.php',
    { name: name, id_goal: goal.ID_goal },
    () => {
      renderAttributes(goal.ID_goal);
    });
};

//Jquery, make a change to an attribute input field and save this
function saveContent() {
  let contents = document.querySelectorAll(".attribute-input");
  contents.forEach(content => {
    $.post('/api/attribute/change.php',
      { name: content.name, content: content.value, id_goal: goal.ID_goal },
      () => {
        renderAttributes(goal.ID_goal);
      });
  });
};

//Jquery, Complete the goal by setting status to "done"
function completeGoal() {
  $.post('/api/goal/update.php',
    { ID_goal: goal.ID_goal, status: "done" },
    (data, status) => {
      alert(status + ": Goal completed");
    });
};
