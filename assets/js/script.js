// using moment.js to display current time and date
setInterval(function() {
    // display the current day
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY LTS"));
}, 0);


// displaying the time blocks
var displayTimeBlocks = function() {
    timeBlockArray = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
    
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




// when page loads
    // search localstorage for key-value pairs

    // for each pair
        // parse into an array of key value pairs

        // find the corresponding HTML timeblock div

        // fill that timeblock with the associated value

    // when the user enters input and hits save
        // find which timeblock was edited

        // gather the input and store data as key value pair




// call all display functions
displayTimeBlocks();