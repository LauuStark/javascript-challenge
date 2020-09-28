// from data.js
var tableData = data;


//select table body with d3
var tbody = d3.select("tbody");

//verify that the information logged into data is correct
console.log(data);

// append rows and information according to entrances in data
data.forEach(function(UFOinfo) {
    console.log(UFOinfo);
    var row = tbody.append("tr");
    Object.entries(UFOinfo).forEach(function([key, value]) {
    var cell = row.append("td");
    cell.text(value);
    }); 
});

// select the button in HTML page
var button = d3.select("#filter-btn");

//event handler
button.on("click", searchUFO);

//create function to search for UFOs
function searchUFO() {
    d3.event.preventDefault();
    var inputfromUser = d3.select("#datetime");
    var valuefrominput = inputfromUser.property("value");

    var filteredUFO = tableData.filter(UFO => UFO.datetime === valuefrominput);
    //corroborate that filtered data is correct in console
    console.log(filteredUFO);

    //erase table to allow new one to print in HTML page
    tbody.html("");

    //create a new table for results
    filteredUFO.forEach(function(UFOinfo) {
        console.log(UFOinfo);
        var row = tbody.append("tr");
        Object.entries(UFOinfo).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
        }); 
    });

}

