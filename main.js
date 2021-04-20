//I didn't find the way to avoid the error with j query and the service worker in the same file


// $.getJSON("data.json", function (data) {
//   var timePriceArray = [];
//   let openPriceArray = [];
//   let highPriceArray = [];
//   let lowPriceArray = [];
//   var closePriceArray = [];

//   data["response"].reverse();

//   for (let i = 0; i < data["response"].length; i++) {
//     timePriceArray.push(data["response"][i]["tm"]);
//     openPriceArray.push(data["response"][i]["o"]);
//     highPriceArray.push(data["response"][i]["h"]);
//     lowPriceArray.push(data["response"][i]["l"]);
//     closePriceArray.push(data["response"][i]["c"]);
//   }

//   let str = " ";
//   for (let i = 0; i < 10; ++i) {
//     //for(let i=0; i<timePriceArray.length;++i){
//     str += "<tr><td>Date:</td><td>" + timePriceArray[i] + "</td></tr>";
//     str += "<tr><td>Open:</td><td>" + openPriceArray[i] + "</td></tr>";
//     str += "<tr><td>Today's High:</td><td>" + highPriceArray[i] + "</td></tr>";
//     str += "<tr><td>Today's Low:</td><td>" + lowPriceArray[i] + "</td></tr>";
//     str += "<tr><td>Close:</td><td>" + closePriceArray[i] + "</td></tr>";
//     str += "<tr><td>&nbsp;</td></tr>";
//   }
//   document.getElementById("jsonTable").innerHTML = str;
// });

// Progressive Enhancement (SW supported)
// if ('serviceWorker' in navigator) {
if (navigator.serviceWorker) {
  // Register the SW
  navigator.serviceWorker
    .register("/sw.js")
    .then((registration) => {})
    .catch(console.log);
}
