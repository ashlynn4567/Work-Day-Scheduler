// array of possible time blocks
timeBlockArray = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

// when page loads
setInterval(function() {
    // display the current day at top of page
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY LTS"));
}, 0);


// checks every minute to update timeblock color
setInterval(function() {
    $(".time-block").each(function (index, el) {
        colorTimeBlocks(el)
    });

    console.log("time updated");
}, 1000 * 60);


// displaying the time blocks
var displayTimeBlocks = function() {
    // for each time block 
    for (i = 0; i < timeBlockArray.length; i++) {
        var timeBlockId = timeBlockArray[i];

        // create timeblock child div
        var timeBlockChild = $(`<div id='${timeBlockId}' class='row time-block'></div>`)
        // convert military time to display variable
        convertedTime = moment(timeBlockArray[i], "H").format("h A");
        console.log(convertedTime);
        
        // create hour div, textarea, and button elements
        var timeBlockHour = $(`<div class='hour col-md-1'>${convertedTime}</div>`);
        var timeBlockTextArea = $("<textarea class='description col-md-10'></textarea>");
        var timeBlockButton = $("<button class='saveBtn btn btn-success col-md-1 d-flex align-items-center justify-content-center'></button>")
        var timeBlockIcon = $("<i class='fas fa-save'></i>");

        // append hour div, textarea, and button elements to timeblockchild
        timeBlockChild.append(timeBlockHour);
        timeBlockChild.append(timeBlockTextArea);
        timeBlockButton.append(timeBlockIcon);
        timeBlockChild.append(timeBlockButton);

        // audit time block with color
        colorTimeBlocks(timeBlockId, timeBlockTextArea);

        // find container element
        var timeBlockContainerEl = $(".container");
        // append timeblock div to container
        timeBlockContainerEl.append(timeBlockChild);
    };
};


// compare current time to timeblock time
var colorTimeBlocks = function(timeLabel, timeBG) {   
    // convert timeblockid to momentjs time format
    var currentTime = moment().hour();
    
    // if timeblock is less than current time
    if (timeLabel < currentTime) {
        // set color to grey for past event
        timeBG.addClass("past");
        timeBG.removeClass("present");
        timeBG.removeClass("future");

    // if timeblock is equal to current time
    } else if (timeLabel == currentTime) {
        // set color to red for present event
        timeBG.addClass("present");
        timeBG.removeClass("past");
        timeBG.removeClass("future");
    
    // if timeblock is greater than current time
    } else if (timeLabel > currentTime) {
        // set color to green for future event
        timeBG.addClass("future");
        timeBG.removeClass("past");
        timeBG.removeClass("present");
    };            
};


// save input to local storage on button click
var saveInput = function() {
    // collect user input and record which timeblock it belongs to
    var userInput = $(this).siblings(".description").val();
    var timeBlockNumber = $(this).parent().attr("id");

    // save to local storage
    localStorage.setItem(timeBlockNumber, userInput);
};


// when page loads search localstorage for key-value pairs
var searchStorage = function() {
    for (i = 0; i < timeBlockArray.length; i++) {
        // search key value pairs and retrieve matching values
        userText = localStorage.getItem(timeBlockArray[i]);

        // find the corresponding timeblock and fill it with the associated value
        $(`#${timeBlockArray[i]} .description`).val(userText);
    };
};


// function calls and event listeners
displayTimeBlocks();
searchStorage();
$(".saveBtn").on("click", saveInput);