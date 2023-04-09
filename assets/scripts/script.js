// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.

$(document).ready(function () {
    var nineAM = $("#hour-09");
    var tenAM = $("#hour-10");
    var elevenAM = $("#hour-11");
    var twelvePM = $("#hour-12");
    var onePM = $("#hour-13");
    var twoPM = $("#hour-14");
    var threePM = $("#hour-15");
    var fourPM = $("#hour-16");
    var fivePM = $("#hour-17");
});

setInterval(function () {
    $("#day").text(dayjs().format("dddd[, ]"));
    $('#date').text(dayjs().format('MMM DD, YYYY'));
    $("#time").text(dayjs().format("hh:mm:ss a"));
}, 1000)

var currentHour = dayjs().format("HH");


$(".time-block").each(function () {
    var timeBlock = $(this).attr('id').split("-")[1];;
    if (currentHour == timeBlock) {
        $(this).addClass("present");
        $(this).removeClass("future");
        $(this).removeClass("past");
    }
    else if (currentHour < timeBlock) {
        $(this).addClass("future");
        $(this).removeClass("present");
        $(this).removeClass("past");
    }
    else if (currentHour > timeBlock) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
    }
})