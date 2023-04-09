//will run once the page DOM is ready for script code
$(document).ready(function () {


    //dayjs code to get day, date, time
    setInterval(function () {
        $("#day").text(dayjs().format("dddd[, ]"));
        $('#date').text(dayjs().format('MMM DD, YYYY'));
        $("#time").text(dayjs().format("hh:mm:ss a"));
    }, 1000)

    //variable for the hour, will be used to compare time block's time
    var currentHour = dayjs().format("HH");

    //check time blocks and set them to past, present, or future class to determine time block color for display purposes
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

    // saves user input in the schedule to localstorage
    $(".saveBtn").click(function (event) {
        event.preventDefault();
        var strInput = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, strInput);
    });

    //clears user input from the schedule by clearing localstorage
    $("#resetBtn").on("click", function () {
        localStorage.clear();
        getSchedule();
    })

    //displays information into the schedule if it exists in local storage
    function getSchedule() {
        $("#hour-09 .description").val(localStorage.getItem("hour-09"));
        $("#hour-10 .description").val(localStorage.getItem("hour-10"));
        $("#hour-11 .description").val(localStorage.getItem("hour-11"));
        $("#hour-12 .description").val(localStorage.getItem("hour-12"));
        $("#hour-13 .description").val(localStorage.getItem("hour-13"));
        $("#hour-14 .description").val(localStorage.getItem("hour-14"));
        $("#hour-15 .description").val(localStorage.getItem("hour-15"));
        $("#hour-16 .description").val(localStorage.getItem("hour-16"));
        $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    }

    //calls the function to execute
    getSchedule();
});
