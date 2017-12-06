function leapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
	  return true
  } else {
	  return false
}}

$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    //debugger;
    event.preventDefault();
    $("#result").empty();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    if (!result) {
      $("#result").text(year + " is not a leap year")
    } else {
      $("#result").text(year + " is a leap year")
    }
  });
});
