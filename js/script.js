// putting initial current date
// initial timer for daily Planner
// var displayEl = $("#hour");
// var buttonListEl = $("#buttons");
console.log("Consoloe Log enabled");
var today = dayjs();
var reformatDate = dayjs(today, "DD-MM-YY").format(
  "dddd, D MMMM YYYY, h:mm:ss a"
);
$("#currentDay").text(reformatDate);
var currentHour = dayjs().format("HH");

console.log("Creating Planner area: ");
// set variables for preiously persisted values for each task
var textTaskSpan = document.querySelector(".description");
var hourTaskSpan = document.querySelector("id");

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
  var textValue = localStorage.getItem("11"); // must try to use the correct KEY
  var textValue = localStorage.getItem("17"); // must try to use the correct KEY
  var textValue = localStorage.getItem("18"); // must try to use the correct KEY

  //var hourValue = localStorage.getItem(Key);

  console.log("Value of Saved tasks in localStorage");
  console.log(textValue);
  //console.log(hourValue);

  textTaskSpan.textContent = textValue;

  //$("#hour-17 .time-block").val(localStorage.getItem("17"));
  $("#hour-11 .description").val(textTaskSpan);
  $("#hour-17 .description").val(textTaskSpan);
  $("#hour-18 .description").val(textTaskSpan);

  // hourTaskSpan.textContent = hourValue;

  // console.log("value of lastEmail");
  // console.log(userEmailSpan);
}
renderLastRegisteredTask();

//----------------------------------- Sample variables for each of the Description Text value

var hour08Input = document.querySelector("#hour-08");
var hour09Input = document.querySelector("#hour-09");
var hour10Input = document.querySelector("#hour-10");
var hour11Input = document.querySelector("#hour-11");
var hour12Input = document.querySelector("#hour-12");
var hour13Input = document.querySelector("#hour-13");
var hour14Input = document.querySelector("#hour-14");
var hour15Input = document.querySelector("#hour-15");
var hour16Input = document.querySelector("#hour-16");
var hour17Input = document.querySelector("#hour-17");
var hour18Input = document.querySelector("#hour-18");
var hour19Input = document.querySelector("#hour-19");
var hour20Input = document.querySelector("#hour-20");

console.log("Value of hou17Inout: ");
console.log(hour17Input.value);
//

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
    console.log("success", "Registered successfully");
  }

  //=---------------------------
  else
    console.log(
      "Error captured: Need to enter value for a task before saving time block! "
    );
});
// need to include validation so that you cannot save row when value of description is null
//-------------

//---------
// Defines function for Description Class to compara hour (timeDiv) from each time slot vs CurrentHour variable
//validates time slot and compares it to current time to colour according to past (grey), present (red) future(green)
//
console.log("value of currentHour: ");
console.log(currentHour);
$(".description").each(function () {
  var timeDiv = $(this).parent().attr("id").split("-")[1];
  console.log("value of timeDiv: ");
  console.log(timeDiv);

  if (currentHour === timeDiv) {
    $(this).addClass("present");
    $(this).children(".description").addClass("white-text");
  } else if (currentHour < timeDiv) {
    $(this).removeClass("present");
    $(this).addClass("future");
  } else if (currentHour > timeDiv) {
    $(this).removeClass("future");
    $(this).addClass("past");
  }
});

// Tasks remaining:
// --------  load tasks saved in localStorage

//---- if time include a clear button eliminate task from time block and local Storage (Nice to have functionality)
