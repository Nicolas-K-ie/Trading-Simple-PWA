
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
          console.log(Object.values(data.response));
          console.log(Object.values(data.response)[0]["tm"]);

      let str = " ";
  for (let k = 300; k > 290; --k) {    

    //for(let i=0; i<timePriceArray.length;++i){
   str += "<tr><td>Date:</td><td>" + Object.values(data.response)[k]["tm"] + "</td></tr>";
    str += "<tr><td>Open:</td><td>" + Object.values(data.response)[k].o + "</td></tr>";
    str += "<tr><td>Today's High:</td><td>" + Object.values(data.response)[k].h + "</td></tr>";
    str += "<tr><td>Today's Low:</td><td>" + Object.values(data.response)[k].l + "</td></tr>";
    str += "<tr><td>Close:</td><td>" + Object.values(data.response)[k].c + "</td></tr>";
    str += "<tr><td>&nbsp;</td></tr>";
  

      // let str = " ";
      // for (prop in data.response) {
      //   // console.log(prop + ":" + data.response[prop]);
      //   // console.log(data.response[prop]["o"]);
      //   // }

      //   str +=
      //     "<tr><td>Date:</td><td data-sort='date' >" + data.response[prop]["tm"] + "</td></tr>";
      //   str +=
      //     "<tr><td>Open:</td><td>" + data.response[prop]["o"] + "</td></tr>";
      //   str +=
      //     "<tr><td>Today's High:</td><td>" +
      //     data.response[prop]["h"] +
      //     "</td></tr>";
      //   str +=
      //     "<tr><td>Today's Low:</td><td>" +
      //     data.response[prop]["l"] +
      //     "</td></tr>";
      //   str +=
      //     "<tr><td>Close:</td><td>" + data.response[prop]["c"] + "</td></tr>";
      //   str += "<tr><td>&nbsp;</td></tr>";
  }
 
       
      $("#jsonTable").html(str);
    

    }).catch((error) => {
      console.log(error);
    });
  }

fetchData();


