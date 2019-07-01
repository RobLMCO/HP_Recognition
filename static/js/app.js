// from subjectdata1.js
var tableData = data;

// YOUR CODE HERE!
var filterType = d3.select("#filterType");
var searchInput = d3.select("#searchInput");
var searchSubmit = d3.select(".searchSubmit");

var inputTbody = d3.select("tbody");
var msgBox = d3.select("msg-box");
var image = d3.select("ActionImage");
    
var Empty = 0;

var findTime = '47.66';
var findSubject = '';
var findActivity = '1';
var findHeartRate = '103.0';
var findTemperature = '32.3125';


function loadTableData(dataArray) {

d3.select("tbody")
  .selectAll("tr")
  .data(dataArray)
  .enter()
  .append("tr")
  .html(function(sighting) {
    return `<td>${sighting.timestamp}</td> <td>${sighting.sub_id}</td> <td>${sighting.activity_id}</td> <td>${sighting.heart_rate}</td> <td>${sighting.tmp_chest}</td> `;
  });
};

loadTableData(tableData);

searchSubmit.on("click", function() {
    console.log("searching");
    d3.event.preventDefault();
    var searchInputText = searchInput.property("value");
    if (filterType.text() == "Enter A Subject") {
        
        let findSubject = searchInputText;
        console.log(`using ${findSubject}`);
        var filteredData = tableData.filter(fData => (fData.sub_id == findSubject));
        var notEmpty = filteredData.length;
        if (notEmpty == 0) {
            console.log(`Failed ${searchInputText} using ${filterType.text()}`);
            msgBox.text(`Failed ${searchInputText} using ${filterType.text()}`);
            searchImage(Empty);
            inputTbody.html("");
        } 
        else {
        inputTbody.html("");
        msgBox.text(`Recognized ${notEmpty}!`);
        searchImage(notEmpty);
        console.log(filteredData);
        loadTableData(filteredData); };
    } 
    else if (filterType.text() == "Enter An Activity") {
        
        let findActivity = searchInputText;
        console.log(`using ${findActivity}`);
        var filteredData = tableData.filter(fData => (fData.activity_id == findActivity));
        var notEmpty = filteredData.length;
        if (notEmpty == 0) {
            console.log(`Failed ${searchInputText} using ${filterType.text()}`);
            msgBox.text(`Failed ${searchInputText} using ${filterType.text()}`);
            searchImage(Empty);
            inputTbody.html("");
        } 
        else {
        inputTbody.html("");
        msgBox.text(`Recognized ${notEmpty}!`);
        searchImage(notEmpty);
        console.log(filteredData);
        loadTableData(filteredData); };
    } 
    else if (filterType.text() == "Enter A HeartRate") {
        
        let findHeartRate = searchInputText;
        console.log(`using ${findHeartRate}`);
        var filteredData = tableData.filter(fData => (fData.heart_rate == findHeartRate));
        var notEmpty = filteredData.length;
        if (notEmpty == 0) {
            console.log(`Failed ${searchInputText} using ${filterType.text()}`);
            msgBox.text(`Failed ${searchInputText} using ${filterType.text()}`);
            searchImage(Empty);
            inputTbody.html("");
        } 
        else {
        inputTbody.html("");
        msgBox.text(`Recognized ${notEmpty}!`);
        searchImage(notEmpty);
        console.log(filteredData);
        loadTableData(filteredData); };
    } 
    else if (filterType.text() == "Enter A Temperature") {
        
        let findTemperature = searchInputText;
        console.log(`using ${findTemperature}`);
        var filteredData = tableData.filter(fData => (fData.tmp_chest == findTemperature));
        var notEmpty = filteredData.length;
        if (notEmpty == 0) {
            console.log(`Failed ${searchInputText} using ${filterType.text()}`);
            msgBox.text(`Failed ${searchInputText} using ${filterType.text()}`);
            searchImage(Empty);
            inputTbody.html("");
        } 
        else {
        inputTbody.html("");
        msgBox.text(`Recognized ${notEmpty}!`);
        searchImage(notEmpty);
        console.log(filteredData);
        loadTableData(filteredData); };
    } 
    else if (filterType.text() == "Enter A Time") {
        
        let findTime = searchInputText;
        console.log(`using ${findTime}`);
        var filteredData = tableData.filter(fData => (fData.timestamp == findTime));
        var notEmpty = filteredData.length;
        if (notEmpty == 0) {
            console.log(`Failed ${searchInputText} using ${filterType.text()}`);
            msgBox.text(`Failed ${searchInputText} using ${filterType.text()}`);
            searchImage(Empty);
            inputTbody.html("");
        } 
        else {
        inputTbody.html("");
        msgBox.text(`Recognized ${notEmpty}!`);
        searchImage(notEmpty);
        console.log(filteredData);
        loadTableData(filteredData); };
    } 
    else {
        console.log(`Failed ${searchInputText} using ${filterType.text()}`);
        msgBox.text(`Failed ${searchInputText} using ${filterType.text()}`);
        searchImage(Empty);
    };
    
});

function getData(filter) {
  
  switch (filter) {
    case "FilterByTimestamp":
      
      filterType.text("Enter A Time");
      console.log(`Primary Search By timestamp`);
      break;
    
    case "FilterBySubject":
      
      filterType.text("Enter A Subject");
      console.log(`Primary Search By Subject`);
      break;
    case "FilterByActivity":
      
      filterType.text("Enter An Activity");
      console.log(`Primary Search By Activity`);
      break;
    case "FilterByHeartRate":
      
      filterType.text("Enter A HeartRate");
      console.log(`Primary Search By HeartRate`);
      break;
    case "FilterByTemperature":
      
      filterType.text("Enter A Temperature");
      console.log(`Primary Search By Temperature`);
      break;
    default:
      
      filterType.text("Enter A Time");
      console.log(`Primary Search By Time`);
      break;
    }
  };

 function searchImage(result) {
    searchAudio(result);
    displayResult(result);
    console.log(result);
    //if (result) {
        
     //   document.getElementById("LyingImage").style.visibility = "hidden";
     //   document.getElementById("SittingImage").style.visibility = "hidden";
     //   document.getElementById("StandingImage").style.visibility = "hidden";
     //   document.getElementById("WalkingImage").style.visibility = "hidden";
     //   document.getElementById("RunningImage").style.visibility = "hidden";
     //   document.getElementById("DodgingImage").style.visibility = "visible";
     //   document.getElementById("JumpingImage").style.visibility = "hidden";

    //} else {
      //  document.getElementById("LyingImage").style.visibility = "visible";
      //  document.getElementById("SittingImage").style.visibility = "hidden";
      //  document.getElementById("StandingImage").style.visibility = "hidden";
      //  document.getElementById("WalkingImage").style.visibility = "hidden";
      //  document.getElementById("RunningImage").style.visibility = "hidden";
      //  document.getElementById("DodgingImage").style.visibility = "hidden";
      //  document.getElementById("JumpingImage").style.visibility = "hidden";
        
    //}; 
 };

var LyingAudio1 = new Audio('static/audio/StayFocussed.mp3');
var SittingAudio2 = new Audio('static/audio/AnyoneElseMakeIt.mp3');
var StandingAudio3 = new Audio('static/audio/FindARide.mp3');
var WalkingAudio4 = new Audio('static/audio/SlowDown.mp3');
var RunningAudio5 = new Audio('static/audio/HereWeGo.mp3');
var DodgingAudio6 = new Audio('static/audio/GetToTheCaptain.mp3');
var JumpingAudio7 = new Audio('static/audio/PunchIt.mp3');

function rolld8() {
    var min = 1;
    var max = 8;
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
};

function displayResult(result)
{
       
    var image = document.getElementById("ActionImage");

    if (result == 1) {
        image.style.visibility = "visible";
    } else if (result == 2) {
        image.style.visibility = "visible";
    } else if (result == 3) {
        image.style.visibility = "visible";
    } else if (result == 4) {
        image.style.visibility = "visible";
    } else if (result == 5) {
        image.style.visibility = "visible";
    } else if (result == 6) {
        image.style.visibility = "visible";
    } else if (result == 7) {
        image.style.visibility = "visible";
    } else { image.style.visibility = "visible"; };

}

function searchAudio(result) {
    var thisRoll = rolld8();
    console.log(thisRoll);
    if (thisRoll == 1) {
        if (result) {
            LyingAudio1.play();
        } else { LyingAudio1.play(); };       
    } else if (thisRoll == 2) {
        if (result) {
            SittingAudio2.play();
        } else { LyingAudio1.play(); };
    } else if (thisRoll == 3) {
        if (result) {
            StandingAudio3.play();
        } else { LyingAudio1.play(); };
    } else if (thisRoll == 4) {
        if (result) {
            WalkingAudio4.play();
        } else { LyingAudio1.play(); };
    } else if (thisRoll == 5) {
        if (result) {
            RunningAudio5.play();
        } else { LyingAudio1.play(); };
    } else if (thisRoll == 6) {
        if (result) {
            DodgingAudio6.play();
        } else { LyingAudio1.play(); };
    } else {
        if (result) {
            JumpingAudio7.play();
        } else { LyingAudio1.play(); }; };
    
  };
