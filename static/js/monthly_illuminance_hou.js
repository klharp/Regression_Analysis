console.log("connected to monthly_illuminance_hou.js")



// Use D3 fetch to read the csv file 
function init() {

     // Get scenario names
     var selector = d3.select("#selDataset");

     // d3.csv("data/final/hou_scenarios.csv").then(monthlyIllData => {
     //      console.log(monthlyIllData);
     //      console.log(monthlyIllData[0]["Scenario"]);




     // Populate the monthly illuminance table
     d3.csv("../data/final/hou_monthly_illuminance2.csv").then(monthlyIllData => {
          console.log("MONTHLY ILLUMINANCE DATA");
          console.log(monthlyIllData);
          console.log(monthlyIllData[0]["Scenario"]);

          var tableAnnualData = monthlyIllData;

          // reference table body
          var tbody = d3.select("tbody");

          // use Arrow Functions to loop through the object (each dictionary) "scenario" and append to table row
          // use fat arrow method to iterate over objects and then the key:value pairs
          monthlyIllData.forEach((scenario) => {
               var row = tbody.append("tr");
               Object.entries(scenario).forEach(([key, value]) => {
                    var cell = row.append("td");
                    cell.text(value);
               });
               // verify objects
               // console.log("VERIFY LOOPED DATA");
               // console.log(scenario);
          });


          // var scenarios = monthlyIllData.map(o => o.Scenario)
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