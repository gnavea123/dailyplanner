// putting initial current date
// initial timer for daily Planner
console.log("Consoloe Log enabled");
var today = dayjs();
var reformatDate = dayjs(today, "DD-MM-YY").format(
  "dddd, D MMMM YYYY, h:mm:ss a"
);
$("#currentDay").text(reformatDate);

console.log("Creating Planner area: ");

var store = window.localStorage;
var container = $(".container");
var now = dayjs();

var currentTime = { text: dayjs().format("h:00 A"), hour: dayjs().hour() };
//---------------------------------------------------------------------------------
console.log("current Time is: ");
console.log(currentTime);

function color(time) {
  return time.text === currentTime.text
    ? "bg-red-300"
    : time.hour < now
    ? "bg-gray-300"
    : "bg-green-200";
}
