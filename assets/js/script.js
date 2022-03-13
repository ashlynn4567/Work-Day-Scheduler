// using moment.js to display current time and date
// check current time 
setInterval(function() {
    // display the current day
    $("#currentDay").text(moment());
}, 1000);




// displaying the time blocks
var displayTimeBlocks = function() {
    timeBlockArray = ["0900", "1000", "1100", "1200", "1300", "1400", "1500", "1600", "1700"];
    
    // for each time block 
    for (i = 0; i < timeBlockArray.length; i++) {
        timeBlockId = timeBlockArray[i];

        // create timeblock child div
        var timeBlockChild = $(`<div id='${timeBlockId}' class='row time-block'></div>`)
        // convert military time to display variable
        convertedTime = moment(timeBlockArray[i], "HHmm").format("hh A");
        console.log(convertedTime);
        
        // create hour div, textarea, and button elements
        var timeBlockHour = $(`<div class='hour'>${convertedTime}</div>`);
        var timeBlockTextArea = $("<textarea class='description'></textarea>");
        var timeBlockButton = $("<button class='saveBtn btn btn-success'>Save</button>")
        
        // append hour div, textarea, and button elements to timeblockchild
        timeBlockChild.append(timeBlockHour);
        timeBlockChild.append(timeBlockTextArea);
        timeBlockChild.append(timeBlockButton);

        // find container element
        var timeBlockContainerEl = $(".container");
        // append timeblock div to container
        timeBlockContainerEl.append(timeBlockChild);
    };
};




var colorTimeBlocks = function() {
    // compare current time to timeblock time
    moment("09:00", 'HH:mm')

        // if timeblock is less than current time
            // set color to grey for past event

        // if timeblock is equal to current time
            // set color to red for present event

        // if timeblock is greater than current time
            // set color to green for future event
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
colorTimeBlocks();