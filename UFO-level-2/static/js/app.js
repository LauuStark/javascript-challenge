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


//FILTER BY DATE
// select the button in HTML page
var button = d3.select("#by-date");

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

//FOR CITY SEARCH

var button2 = d3.select("#by-city");
button2.on("click", searchUFO2)  

//create function to search for UFOs

function searchUFO2() {
    d3.event.preventDefault();
    var inputfromUser = d3.select("#datetime");
    var valuefrominput = inputfromUser.property("value");

    var filteredUFObyCity = tableData.filter(UFO => UFO.city === valuefrominput);

    console.log(filteredUFObyCity);

    tbody.html("");

    filteredUFObyCity.forEach(function(UFOinfo) {
        console.log(UFOinfo);
        var row = tbody.append("tr");
        Object.entries(UFOinfo).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
        }); 
    }); 
}

//FOR STATE SEARCH

var button3 = d3.select("#by-state");
button3.on("click", searchUFO3)  

//create function to search for UFOs

function searchUFO3() {
    d3.event.preventDefault();
    var inputfromUser = d3.select("#datetime");
    var valuefrominput = inputfromUser.property("value");

    var filteredUFObyState = tableData.filter(UFO => UFO.state === valuefrominput);

    console.log(filteredUFObyState);

    tbody.html("");

    filteredUFObyState.forEach(function(UFOinfo) {
        console.log(UFOinfo);
        var row = tbody.append("tr");
        Object.entries(UFOinfo).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
        }); 
    }); 
}

//FOR COUNTRY SEARCH

var button4 = d3.select("#by-country");
button4.on("click", searchUFO4)  

//create function to search for UFOs

function searchUFO4() {
    d3.event.preventDefault();
    var inputfromUser = d3.select("#datetime");
    var valuefrominput = inputfromUser.property("value");

    var filteredUFObyCountry = tableData.filter(UFO => UFO.country === valuefrominput);

    console.log(filteredUFObyCountry);

    tbody.html("");

    filteredUFObyCountry.forEach(function(UFOinfo) {
        console.log(UFOinfo);
        var row = tbody.append("tr");
        Object.entries(UFOinfo).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
        }); 
    }); 
}

//FOR SHAPE SEARCH

var button5 = d3.select("#by-shape");
button5.on("click", searchUFO5)  

//create function to search for UFOs

function searchUFO5() {
    d3.event.preventDefault();
    var inputfromUser = d3.select("#datetime");
    var valuefrominput = inputfromUser.property("value");

    var filteredUFObyShape = tableData.filter(UFO => UFO.shape === valuefrominput);

    console.log(filteredUFObyShape);

    tbody.html("");

    filteredUFObyShape.forEach(function(UFOinfo) {
        console.log(UFOinfo);
        var row = tbody.append("tr");
        Object.entries(UFOinfo).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
        }); 
    }); 
}



}
