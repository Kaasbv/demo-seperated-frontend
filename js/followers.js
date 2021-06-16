window.addEventListener("load", init)

let friends = [];
let users = [];

function init(){
  //Add events
  addEvents();
  listFriends();
  //Load initian search
  let searchTerm = document.querySelector("#friendName").value;
  searchUsers(searchTerm);
}

function listFriends(){
  $.getJSON("/api/follower/list.php", function(data){
    friends = data;
    renderHTML();
  });
}

function renderHTML(){
  let container = document.querySelector("#friends");
  let html = "";

  for(let friend of friends){
    html += `
      <div class="column">
        <div class="card">
          <div class="followerName">
            ${friend.username_following}
          </div>
        <button class="btn" data-username="${friend.username_following}" onclick="unfollowUser(event)">Unfollow</button></div>
      </div>
    `;
  }

  container.innerHTML = html;
}


function searchUsers(searchterm) {
  if(searchterm.length === 0){
    users = [];
    render();
  }else{
    $.getJSON(`/api/user/search.php?search=${searchterm}`, function (data) {
      users = data;
      render();
    });
  }
}

function addEvents() {
  document.querySelector("#friendName").addEventListener("keyup", function (event) {
    let searchTerm = event.currentTarget.value;
    searchUsers(searchTerm);
  });
}

function render() {
  let goalContainer = document.querySelector("#userresults");
  let html = "";


  if(users.length === 0){
    html = `<div class="center">${ts.usersNotFound}</div>`;
  }else{
    for (let user of users) {
      html += `
      <div id="goalBox">
        <span>${user}</span>
        <button class="btnf" data-username="${user}" onclick="followUser(event)">follow</button>
      </div>
      `
    }
  }

  goalContainer.innerHTML = html;
}

function followUser(event){
  let username = event.currentTarget.dataset.username;

  $.post("/api/follower/follow.php", {username: username}, function(){
    listFriends();
  }).fail(function(){
    alert("You already follow this user!");
  })
}
function unfollowUser(event){
  let username = event.currentTarget.dataset.username;

  $.post("/api/follower/unfollow.php", {username: username}, function(){
    listFriends();
  }).fail(function(){
    alert("You already follow this user!");
  })
}