// putting initial current date
// initial timer for daily Planner
// var displayEl = $("#hour");
// var buttonListEl = $("#buttons");
console.log("Console Log enabled");
var today = dayjs();
var reformatDate = dayjs(today, "DD-MM-YY").format(
  "dddd, D MMMM YYYY, h:mm:ss a"
);
$("#currentDay").text(reformatDate);
var currentHour = dayjs().format("HH");

console.log("Creating Planner area: ");
// set variables for preiously persisted values for each task
// var textTaskSpan = document.querySelector(".description");
// var hourTaskSpan = document.querySelector("id");

//var store = window.localStorage;
//var container = $(".container");

//var now = dayjs();

var currentTime = { text: dayjs().format("h:00 A"), hour: dayjs().hour() };
//---------------------------------------------------------------------------------
console.log("current Time is: ");
console.log(currentTime);

console.log("Value of Container Variable: ");
//console.log(container);

//console.log(container.children);
// console.log("value displayEl: ");
// console.log(displayEl);
// console.log(buttonListEl);

//--- load previous saved tasks
function renderLastRegisteredTask() {
  //
  //

  // Identify the Key to be loaded (individual hour) and pass to variable textValue. Try to use correct KEY
  var textValue08 = localStorage.getItem("08", JSON.parse(8));
  var textValue09 = localStorage.getItem("09", JSON.parse(9));
  var textValue10 = localStorage.getItem("10", JSON.parse(10));
  var textValue11 = localStorage.getItem("11", JSON.parse(11));
  var textValue12 = localStorage.getItem("12", JSON.parse(12));
  var textValue13 = localStorage.getItem("13", JSON.parse(13));
  var textValue14 = localStorage.getItem("14", JSON.parse(14));
  var textValue15 = localStorage.getItem("15", JSON.parse(15));
  var textValue16 = localStorage.getItem("16", JSON.parse(16));
  var textValue17 = localStorage.getItem("17", JSON.parse(17));
  var textValue18 = localStorage.getItem("18", JSON.parse(18));
  var textValue19 = localStorage.getItem("19", JSON.parse(19));
  var textValue20 = localStorage.getItem("20", JSON.parse(20));
  var textValue21 = localStorage.getItem("21", JSON.parse(21));

  //var hourValue = localStorage.getItem(Key);

  console.log("Value of Saved tasks in localStorage");
  console.log(textValue11);
  //console.log(hourValue);

  //textTaskSpan.textContent = textValue;

  //-----
  // Pass
  $("#hour-08 .description").val(textValue08);
  $("#hour-09 .description").val(textValue09);
  $("#hour-10 .description").val(textValue10);
  $("#hour-11 .description").val(textValue11);
  $("#hour-12 .description").val(textValue12);
  $("#hour-13 .description").val(textValue13);
  $("#hour-14 .description").val(textValue14);
  $("#hour-15 .description").val(textValue15);
  $("#hour-16 .description").val(textValue16);
  $("#hour-17 .description").val(textValue17);
  $("#hour-18 .description").val(textValue18);
  $("#hour-19 .description").val(textValue19);
  $("#hour-20 .description").val(textValue20);
  $("#hour-21 .description").val(textValue21);

  // var lastUser = localStorage.getItem("user", JSON.parse(user));

  // hourTaskSpan.textContent = hourValue;

  // console.log("value of lastEmail");
  // console.log(userEmailSpan);
}
renderLastRegisteredTask();

//----------------------------------- Sample variables for each of the Description Text value

// var hour08Input = document.querySelector("#hour-08");
// var hour09Input = document.querySelector("#hour-09");
// var hour10Input = document.querySelector("#hour-10");
// var hour11Input = document.querySelector("#hour-11");
// var hour12Input = document.querySelector("#hour-12");
// var hour13Input = document.querySelector("#hour-13");
// var hour14Input = document.querySelector("#hour-14");
// var hour15Input = document.querySelector("#hour-15");
// var hour16Input = document.querySelector("#hour-16");
// var hour17Input = document.querySelector("#hour-17");
// var hour18Input = document.querySelector("#hour-18");
// var hour19Input = document.querySelector("#hour-19");
// var hour20Input = document.querySelector("#hour-20");

// console.log("Value of hou17Inout: ");
// console.log(hour17Input.value);
// //

// need to capture de text fields and save the positions into localstorage to be recalled later

//Saves to localStorage text element and time element for each task entered
$(".saveBtn").click(function (event) {
  event.preventDefault();
  var value = $(this).siblings(".description").val(); // captures the text element for the task
  var time = $(this).parent().attr("id").split("-")[1]; // captures the hour number for the row parent id
  // ---------  validate
  // validate the field description text prior to saving row
  if (value != "") {
    // save to localStorage
    localStorage.setItem(time, value);
    console.log("success", "Task registered successfully");
  }

  //=---------------------------
  else alert("Error: Please enter a value for a task before saving!");
  // console.log(
  //   "Error captured: Need to enter value for a task before saving time block! "
  // );
});
// need to include validation so that you cannot save row when value of description is null
//-------------

//---------
// Defines function for Description Class to compare hour (timeBlock) from each time slot vs CurrentHour variable
//validates time slot and compares it to current time to colour according to past (grey), present (red) future(green)
//
console.log("value of currentHour: ");
console.log(currentHour);
$(".description").each(function () {
  var timeBlock = $(this).parent().attr("id").split("-")[1];
  // console.log("value of timeBlock: ");
  //console.log(timeBlock);

  if (currentHour === timeBlock) {
    $(this).addClass("present");
    $(this).children(".description").addClass("white-text");
  } else if (currentHour < timeBlock) {
    $(this).removeClass("present");
    $(this).addClass("future");
  } else if (currentHour > timeBlock) {
    $(this).removeClass("future");
    $(this).addClass("past");
  }
});

// Tasks remaining:
// --------  load tasks saved in localStorage

//---- if time include a clear button eliminate task from time block and local Storage (Nice to have functionality)
