console.log("connected to monthly.js")

// Use D3 fetch to read the csv file 
function init() {

     // Get scenario names
     var selector = d3.select("#selDataset");

     // d3.csv("data/final/hou_scenarios.csv").then(monthlyData => {
     //      console.log(monthlyData);
     //      console.log(monthlyData[0]["Scenario"]);


     // Populate the annual table
     d3.csv("../data/final/hou_monthly2_data.csv").then(monthlyData => {
          console.log("MONTHLY DATA");
          console.log(monthlyData);
          console.log(monthlyData[0]["Scenario"]);

          var tablemonthlyData = monthlyData;

          // reference table body
          var tbody = d3.select("tbody");

          // use Arrow Functions to loop through the object (each dictionary) "scenario" and append to table row
          // use fat arrow method to iterate over objects and then the key:value pairs
          monthlyData.forEach((scenario) => {
               var row = tbody.append("tr");
               Object.entries(scenario).forEach(([key, value]) => {
                    var cell = row.append("td");
                    cell.text(value);
               });
               // verify objects
               // console.log("VERIFY LOOPED DATA");
               // console.log(scenario);
          });

          // var scenarios = monthlyData.map(o => o.Scenario)
          // console.log("SCENARIO NAMES");
          // console.log(scenarios);

          // scenarios.forEach(scenario => {
          //      selector.append("option")
          //           .text(scenario)
          //           .property("value", scenario);
          // });
     });
}

init();