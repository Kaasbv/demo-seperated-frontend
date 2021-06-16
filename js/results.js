window.addEventListener("load", init);

let ctx;

let goals = [];
let chart;
let type = "week"; //or all
let weekNumber;

function init(){
  weekNumber = dayjs().week();
  //Load 
  ctx = document.querySelector('#chart').getContext('2d');
  document.querySelector('#chart').height = 60;
  //Set events
  loadEvents();
  //Grab data and render
  initializeChart();
  grabData();
}

function loadEvents(){
  //Tab events
  let totalButton = document.querySelector("#totalButton");
  let weekButton = document.querySelector("#weekButton");
  let controls = document.querySelector("#controls");

  totalButton.addEventListener("click", function(){
    totalButton.classList.add("active");
    weekButton.classList.remove("active");
    controls.classList.add("hide");
    
    type = type === "week" ? "total" : "week";
    grabData();
  });

  weekButton.addEventListener("click", function(){
    weekButton.classList.add("active");
    totalButton.classList.remove("active");
    controls.classList.remove("hide");

    type = type === "week" ? "total" : "week";
    grabData();
  });
  //Week events
  document.querySelector("#datecontrols > .backicon").addEventListener("click", function(){
    weekNumber--;
    grabData();
  });
  document.querySelector("#datecontrols > .nexticon").addEventListener("click", function(){
    weekNumber++;
    grabData();
  });
}

function grabData(){
  let url = "/api/goal/list.php?status=done";

  if(type === "week"){
    let instance = dayjs().week(weekNumber);
    let startDate = instance.startOf("week").format("YYYY-MM-DD HH:mm:ss");
    let endDate = instance.endOf("week").format("YYYY-MM-DD HH:mm:ss");
    url += `&min_date_finished=${startDate}&max_date_finished=${endDate}`;
  }

  $.getJSON(url, function( data ) {
    goals = data;
    render();
  }).fail(function(){
    window.location.replace("/auth.php");
  });
}

function initializeChart(){
  chart = new Chart(ctx, {
    type: "bar",
    data: [],
    options: {
      responsive: true
    }
  });
}

function updateGraph(){
  //prepare data
  let data = goals.map(({date_finished, kudos}) => {return {x: date_finished.substring(0, 10), y: kudos}});
  //aggregate data on day or week
  let aggragatedData = data.reduce((acc, dataPoint) => {
    if(type === "total") dataPoint.x = dayjs(dataPoint.x).startOf("week").toISOString();
    if(!acc[dataPoint.x]) acc[dataPoint.x] = 0;
    acc[dataPoint.x] += dataPoint.y;

    return acc;
  }, {});

  //sort keys
  let sortedKeys = Object.keys(aggragatedData).sort();
  //sort values based on keys
  let sortedValues = sortedKeys.map(key => aggragatedData[key]);

  //Update chart based on new data
  chart.config.data = {
    labels: sortedKeys,
    datasets: [{
      label: "Points",
      backgroundColor: "#70EE9C",
      data: sortedValues
    }]
  };

  if(type === "total"){
    chart.config.type = "line";
    chart.config.options.scales = {
      y: {
          beginAtZero: true
      },
      x: {
        type: "time",
        time: {
            unit: "week"
        }
      }
    };
  }else{
    chart.config.type = "bar";
    chart.config.options.scales = {
      y: {
          beginAtZero: true
      },
      x: {
        type: "time",
        time: {
            unit: "day"
        }
      }
    };
  }

  //update config
  chart.update();
}

function render(){
  if(type === "week") renderDate();
  updateGraph();
  renderTable();
}

function renderDate(){
  let element = document.querySelector("#datecontrols > span");
  element.innerHTML = "W" + weekNumber;
}

function renderTable(){
  let tbodyElement = document.querySelector("#goalTable tbody")
  let html = "";
  
  for(let goal of goals){
    html += `
      <tr>
        <td>${goal.name}</td>
        <td>${goal.kudos}</td>
      </tr>
    `;
  }

  tbodyElement.innerHTML = html;
}
