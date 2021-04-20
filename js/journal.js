// Chart from chartJS




const entryForm = document.querySelector("#entryForm");

// When the button is clicked that create a new row and calculate the balance displayed on the top of the chart
// The balance on the top is used to draw the chart
// The button have to be clicked otherwise the data are lost by updating
// 
// to improve: how to use the touch enter(go on phone) and click together
// to improve: how to move the starting x axes to be bit more on the left
// to improve: the quality of code
document.getElementById("myBtn").addEventListener("click", entryFormClick);


//Fill the table with data entered
function insertWalletData() {
  var table = document.getElementById("table-wallet");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);

  var date = document.getElementById("date").value;
  var WIN_LOSS = document.getElementById("winOrLoss").value;
  var amount = document.getElementById("amount").value;

  cell1.innerHTML = date;
  cell2.innerHTML = WIN_LOSS;
  cell3.innerHTML = amount;


  //The total from the table displayed on the graph is not clear and dirty.
  total.innerHTML = parseInt(total.innerHTML) + parseInt(amount);
  totalTab.push(total.textContent); //add the last total in the object values
  var entTd = document.getElementsByTagName("td");
  if (entTd.length >= 1) {
    var entDat = entTd.item(0);
  }
  dateTab.push(entDat.textContent);
}



//The part below is not from me from line 43 to 71
// Create the table when the button is pressed

// HTML To JSON Script
// *Forked* from https://johndyer.name/html-table-to-json/
var table = document.getElementById("table-wallet");
var json = []; // first row needs to be headers
var headers = [];
for (var i = 0; i < table.rows[0].cells.length; i++) {
  headers[i] = table.rows[0].cells[i].innerHTML
    .toLowerCase()
    .replace(/ /gi, "");
}
// go through cells
for (var i = 1; i < table.rows.length; i++) {
  var tableRow = table.rows[i];
  var rowData = {};
  for (var j = 0; j < tableRow.cells.length; j++) {
    rowData[headers[j]] = tableRow.cells[j].innerHTML;
  }
  json.push(rowData);
}
// Map json values back to label array
var dateTab = json.map(function (e) {
  return e.date;
});
// Map json values back to values array
var totalTab = json.map(function (e) {
  return e.amount;
});


// When the button is pressed =>
function entryFormClick(event) {
  event.preventDefault();
  insertWalletData();
  journalChart.update();
}


//Chart from chartjs librairy
const ctx = document.getElementById("journalChart").getContext("2d");
const journalChart = new Chart(ctx, {
  type: "line",
  data: {
    // labels:['2021-03-05','2021-03-05','2021-03-05','1','1','1','1','1','1','1','1','1','1',],labels,
    labels: dateTab, //axes x
    datasets: [
      {
        label: "SPY",
        // data:['724.2','642.9','561.6'],
        data: totalTab, //axe y 

        backgroundColor: "rgba(256, 52, 20, 0.33)",
      },
    ],
    borderColor: "#777",
    hoverBorderWidth: 3,                    //all the these lines are to customise the chart
    hoverBorderColor: "#000",
  },
  options: {
    // ticks:{display:true},
    layout: { padding: { left: 0, right: 10, bottom: 0, top: 0 } },
    //tooltips:{enabled:true},
    //  gridLines:false,
    //  zeroLineColor:'rgba(50, 0, 0, 0.25)',
    //  offsetGridLines:{enabled:true}
    aspectRatio: "2",
    scales: {
      yAxes: [
        {
          id: "y-axis-0",
          gridLines: {
            display: false,
            lineWidth: 1,
            color: "rgba(0,0,0,0.30)",
          },
          ticks: {
            beginAtZero: true,
            mirror: false,
            suggestedMin: 0,
            suggestedMax: 500,
          },
          afterBuildTicks: function (chart) {},
        },
      ],
      xAxes: [
        {
          id: "x-axis-0",
          gridLines: {
            display: false,
          },
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    legend: {
      display: false,
      // labels: {
      //     fontColor: 'rgb(255, 99, 132)'
      //          }
    },
  },
});
