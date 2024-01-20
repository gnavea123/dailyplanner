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

//----------------------------------- Sample variables for each of the Description Text value

var hour08Input = document.querySelector("#hour-08");
var hour09Input = document.querySelector("#hour-09");
var hour10Input = document.querySelector("#hour-10");
var hour11Input = document.querySelector("#hour-11");
var hour12Input = document.querySelector("#hour-12");
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
  else console.log("Error captured: ");
});
// need to include validation so that you cannot save row when value of description is null
//-------------

//---------
// Defines function for Description Class to compara hour (timeDiv) from each time slot vs CurrentHour variable
//validates time slot and compares it to current time to colour according to past (grey), present (red) future(green)
//
$(".description").each(function () {
  var timeDiv = $(this).parent().attr("id").split("-")[1];
  console.log("value of timeDiv: ");
  console.log(timeDiv);
  console.log("value of currentHour: ");
  console.log(currentHour);

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
