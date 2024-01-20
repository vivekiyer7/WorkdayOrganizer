$(document).ready(function () {
    
    // Update the current day using Day.js
    $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
});
