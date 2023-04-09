setInterval(function (){
    $("#day").text(dayjs().format("dddd[, ]"))
    $('#date').text(dayjs().format('MMM DD, YYYY'));
    $("#time").text(dayjs().format("hh:mm:ss a"))
}, 1000)
