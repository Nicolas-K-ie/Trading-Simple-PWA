// DATA FOR THE CHART
//I tried to put them in the main but I got errors betwween the jquery and the service worker
// function fetchData(){
//   let url = "";
// //       let myAPI = "0yJXedgtP4M1axwWNhg5prO4l";
//   let period = "1d";
//   let symbol = "BTC/USD";
//   url = "https://fcsapi.com/api-v3/crypto/history?symbol="+symbol+"&period="+period+"&access_key="+myAPI;

//   fetch(url)
//   .then(response => {
//       if(!response.ok){
//           throw Error("ERROR");
//       }
//       return historyBTCUSD1D.json();
//   }).then(data => {
//       console.log(data);
//       let arrayJson = Object.entries(data.response);
//       var timePriceArray = [];
//   var closePriceArray = [];
//   console.log(arrayJson.length);

//     for (let i = 0; i < arrayJson.length; i++) {
//     timePriceArray.push(arrayJson[i][1]["tm"]);
//     closePriceArray.push(arrayJson[i][1]["c"]);
//   }

//   }).catch(error => {
//       console.log(error);
//   });
// }

// fetchData();
// $.getJSON("historyBTCUSD1D.json", function (data) {
//   // var result = Object.keys(obj).map(function(key) {
//   //   return [Number(key), obj[key]];
//   // });
//   //    console.log(result);
//   console.log(data);
//   data = Object.entries(data.response);
//   // arrayJson.forEach(([key, value]) => {
//   //   console.log(key); // 'one'
//   //   console.log(value); // 1
//   // });
// console.log(data);
// console.log(data[0][1]['o']);

//   var timePriceArray = [];
//   var closePriceArray = [];
//   console.log(data.length);
//       // console.log (data[i][1]["tm"]);

//     for (let k = 0; k < data.length; k++) {
//         data[k][1]["tm"];
//        data[k][1]["c"];
//        console.log (data[k][1]["tm"]);

//     }

// let timeX =  data[i][1]["c"];
// let valueY = data[i][1]["c"];

// for (prop in data.response){
//   console.log(prop, typeof data[prop]);}

// console.log(data);
// console.log(data["response"]);

//   for (let i = 0; i < data["response"].length; i++) {
//     // timePriceArray.push(historyBTCUSD1D["response"][i]["tm"]);
//     // closePriceArray.push(historyBTCUSD1D["response"][i]["c"]);
//     timePriceArray.push(historyBTCUSD1D["response"][i]["tm"]);
//     closePriceArray.push(historyBTCUSD1D["response"][i]["c"]);
//   }
// console.log(historyBTCUSD1D["response"]);
// var arrayForChartClose = sessionStorage.getItem('arrayForChartClose');
// var arrayForChartDate = sessionStorage.getItem('arrayForChartDate');
// let closePriceArrayRev = closePriceArray.reverse();
// let timePriceArrayRev = timePriceArray.reverse();
function fetchData() {
  let url = "";
  let myAPI = "0yJXedgtP4M1axwWNhg5prO4l";
  let period = "1d";
  let symbol = "BTC/USD";
  url =
    "https://fcsapi.com/api-v3/crypto/history?symbol=" +
    symbol +
    "&period=" +
    period +
    "&access_key=" +
    myAPI;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();
    })
    .then((data) => {
      // console.log(">>" + data.response + "<<");
      //     let arrayJson = Object.entries(data.response);
      //     var timePriceArray = [];
      // var closePriceArray = [];
      // console.log(arrayJson.length);

      //   for (let i = 0; i < arrayJson.length; i++) {
      //   timePriceArray.push(arrayJson[i][1]["tm"]);
      //   closePriceArray.push(arrayJson[i][1]["c"]);
      //let testArray = [{}, {}]; 
      
      let str = " ";
      for ( prop in  data.response) {
        // console.log(prop + ":" + data.response[prop]);
        // console.log(data.response[prop]["o"]);
      // }
      
 
      // str += console.log(prop + ":" + data.response[prop]);
      // for (let i = 0; i < 10; ++i) {
        //for(let i=0; i<timePriceArray.length;++i){
          
        str += "<tr><td>Date:</td><td>" + data.response[prop]["tm"] + "</td></tr>";
        str += "<tr><td>Open:</td><td>" + data.response[prop]["o"] + "</td></tr>";
        str += "<tr><td>Today's High:</td><td>" + data.response[prop]["h"]+ "</td></tr>";
        str += "<tr><td>Today's Low:</td><td>" + data.response[prop]["l"] + "</td></tr>";
        str += "<tr><td>Close:</td><td>" + data.response[prop]["c"] + "</td></tr>";
        str += "<tr><td>&nbsp;</td></tr>"; 
      }
          $('#jsonTable').html(str);
    
      // document.getElementById("jsonTable").innerHTML = str;

    })
  
  .catch((error) => {
    console.log(error);
  });
}

fetchData();
//       var ctx = document.getElementById("priceChart").getContext("2d");
// var priceChart = new Chart(ctx, {
//   type: "line",
//   data: {
//     datasets: [
//       {
//         label: "BTC/USD close Daily",
//         data: data.response[prop]["c"],
//         //  closePriceArray
//         // data:         data[k][1]["tm"]
//         order: 1,
//         backgroundColor: "rgba(251, 170, 77, 0.77)",
//         showLines: true,
//         pointRadius: 0,
//       },
//     ],
//     labels: data.response[prop]["tm"],
//     //  timePriceArray

//     // labels:        data[k][1]["c"]
//   },

//   fill: 1,
//   borderColor: "#666",
//   hoverBorderWidth: 3,
//   hoverBorderColor: "#000",

//   options: {
//     gridLines: true,
//     zeroLineColor: "rgba(256, 0, 0, 0.25)",
//     scales: {
//       xAxes: [
//         {
//           ticks: {
//             stepSize: 1,
//             display: false,
//           },
//         },
//       ],
//       yAxes: [
//         {
//           ticks: {
//             beginAtZero: false,
//             display: true,
//           },
//         },
//       ],
//     },

//     legend: {
//       display: true,
//       // labels: {
//       //     fontColor: 'rgb(255, 99, 132)'
//       //          }
//     },
//   },
// });
// priceChart.update();

//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

// fetchData();


/* var ctx = document.getElementById("priceChart").getContext("2d");

  var priceChart = new Chart(ctx, {

    type: "line",
    data: {
      datasets: [
        {
          label: "BTC/USD close Daily",
          data:        closePriceArray
          // data:         data[k][1]["tm"]
          ,
          order: 1,
          backgroundColor: "rgba(251, 170, 77, 0.77)",
          showLines: true,
          pointRadius: 0,
        },
      ],    
        labels:    timePriceArray



      // labels:        data[k][1]["c"]
      ,
    },

    fill: 1,
    borderColor: "#666",
    hoverBorderWidth: 3,
    hoverBorderColor: "#000",

    options: {
      gridLines: true,
      zeroLineColor: "rgba(256, 0, 0, 0.25)",
      scales: {
        xAxes: [
          {
            ticks: {
              stepSize: 1,
              display: false,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              beginAtZero: false,
              display: true,
            },
          },
        ],
      },

      legend: {
        display: true,
        // labels: {
        //     fontColor: 'rgb(255, 99, 132)'
        //          }
      },
    },
  });
  priceChart.update();
});



// These data are the price below the chart on a table 


$.getJSON("historyBTCUSD1D.json", function (data) {
  var timePriceArray = [];
  let openPriceArray = [];
  let highPriceArray = [];
  let lowPriceArray = [];
  var closePriceArray = [];

  let arrayJson = Object.entries(data.response);
   arrayJson.reverse(); // to get the last on the top

 

  for (let i = 0; i < arrayJson.length; i++) {
    timePriceArray.push(arrayJson[i][1]["tm"]);
    openPriceArray.push(arrayJson[i][1]["o"]);
    highPriceArray.push(arrayJson[i][1]["h"]);
    lowPriceArray.push(arrayJson[i][1]["l"]);
    closePriceArray.push(arrayJson[i][1]["c"]);
  }

  let str = " ";
  for (let i = 0; i < 10; ++i) {
    //for(let i=0; i<timePriceArray.length;++i){
    str += "<tr><td>Date:</td><td>" + timePriceArray[i] + "</td></tr>";
    str += "<tr><td>Open:</td><td>" + openPriceArray[i] + "</td></tr>";
    str += "<tr><td>Today's High:</td><td>" + highPriceArray[i] + "</td></tr>";
    str += "<tr><td>Today's Low:</td><td>" + lowPriceArray[i] + "</td></tr>";
    str += "<tr><td>Close:</td><td>" + closePriceArray[i] + "</td></tr>";
    str += "<tr><td>&nbsp;</td></tr>";
  }
  document.getElementById("jsonTable").innerHTML = str;
});

*/
