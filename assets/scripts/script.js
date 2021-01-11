
function load () {

  //Set current day in header
  $("#currentDay").text(luxon.DateTime.local().toLocaleString(luxon.DateTime.DATE_FULL));

  $("textarea").each(function(i, item) {
    var hour = $(item).attr("data-hour");

    //Set color backgrounds based on hour
    if (hour < luxon.DateTime.local().hour) {
      item.style.backgroundColor = "#ccc";
    } else if (hour == luxon.DateTime.local().hour){
      item.style.backgroundColor = "red";
    } else {
      item.style.backgroundColor = "green";
    }

    //Load data from localstorage if needed
    if (localStorage.getItem(hour)) {
      var text = localStorage.getItem(hour);
      $("#textArea" + hour).val(text);
    }

  })

}

function save() {
  var hour = $(this).attr("data-hour");
  var entry = $("#textArea" + hour).val();
  localStorage.setItem(hour, entry);
}

$(".save").click(save);

load();

