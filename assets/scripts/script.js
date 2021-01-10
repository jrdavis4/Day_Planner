//Set current day in header
$("#currentDay").text(luxon.DateTime.local().toLocaleString(luxon.DateTime.DATE_FULL));

//Set color backgrounds based on hour
$("textarea").each(function(i, item) {
  if ($(item).attr("data-hour") < luxon.DateTime.local().hour) {
    item.style.backgroundColor = "#ccc";
  } else if ($(item).attr("data-hour") == luxon.DateTime.local().hour){
    item.style.backgroundColor = "red";
  } else {
    item.style.backgroundColor = "green";
  }
})

