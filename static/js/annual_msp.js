console.log("connected to annual_msp.js")

// Use D3 fetch to read the csv file 
function init() {

     // Get scenario names
     var selector = d3.select("#selDataset");

     // d3.csv("data/final/hou_scenarios.csv").then(annualData => {
     //      console.log(annualData);
     //      console.log(annualData[0]["Scenario"]);




     // Populate the annual table
     d3.csv("../data/final/msp_annual_data.csv").then(annualData => {
          console.log("ANNUAL DATA");
          console.log(annualData);
          console.log(annualData[0]["Scenario"]);

          var tableAnnualData = annualData;

          // reference table body
          var tbody = d3.select("tbody");

          // use Arrow Functions to loop through the object (each dictionary) "scenario" and append to table row
          // use fat arrow method to iterate over objects and then the key:value pairs
          annualData.forEach((scenario) => {
               var row = tbody.append("tr");
               Object.entries(scenario).forEach(([key, value]) => {
                    var cell = row.append("td");
                    cell.text(value);
               });
               // verify objects
               // console.log("VERIFY LOOPED DATA");
               // console.log(scenario);
          });


          // var scenarios = annualData.map(o => o.Scenario)
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

