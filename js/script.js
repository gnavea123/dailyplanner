// putting initial current date
// initial timer for daily Planner
var displayEl = $("#hour");
var buttonListEl = $("#buttons");
console.log("Consoloe Log enabled");
var today = dayjs();
var reformatDate = dayjs(today, "DD-MM-YY").format(
  "dddd, D MMMM YYYY, h:mm:ss a"
);
$("#currentDay").text(reformatDate);

console.log("Creating Planner area: ");

var store = window.localStorage;
var container = $(".container");

//var now = dayjs();

var currentTime = { text: dayjs().format("h:00 A"), hour: dayjs().hour() };
//---------------------------------------------------------------------------------
console.log("current Time is: ");
console.log(currentTime);

console.log("Value of Container Variable: ");
console.log(container);

//console.log(container.attribu);
// console.log(container.childnodes);
console.log("value displayEl: ");
console.log(displayEl);
console.log(buttonListEl);

//----------------------------------- Variables for each of the Text

var hour08Input = document.querySelector("#hour-08");
var hour09Input = document.querySelector("#hour-09");
var hour10Input = document.querySelector("#hour-10");
var hour11Input = document.querySelector("#hour-11");
var hour12Input = document.querySelector("#hour-12");
//
var saveButtonEl = document.querySelector(".saveButton");
saveButtonEl.addEventListener("click", function (event) {
  event.preventDefault();

  //   //
  //   // create user object from submission
  //var calendarHour =
  var value = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id").split("-")[01];
  // captures the second array of hour numerical to save
  localStorage.setItem(time, value);

  // set new submission
  // localStorage.setItem("calendarHour", JSON.stringify(calendarHour));
  //console.log("Value of calendarHour: ");
  //console.log(calendarHour);
});
