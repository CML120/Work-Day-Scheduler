$(document).ready(function () {

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

    $(".saveBtn").click(function (event) {
        event.preventDefault();
        var strInput = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, strInput);
    });

    $("#resetBtn").on("click", function () {
        localStorage.clear();
        getSchedule();
    })

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
    getSchedule();
});
