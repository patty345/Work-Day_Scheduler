var todayDate = moment().format("dddd, MM Do YYYY");
$("#currentDay").html(todayDate);

$(document).ready(function() {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })

    function timeTracker() {
        var timeNow = moment().hour();

        $(".time-block").each(function (){
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            
        })
    }



 })