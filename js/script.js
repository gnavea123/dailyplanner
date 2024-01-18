// putting initial current date
// initial timer for daily Planner
console.log("Consoloe Log enabled");
var today = dayjs();
var reformatDate = dayjs(today, "DD-MM-YY").format(
  "dddd, D MMMM YYYY, h:mm:ss a"
);
$("#currentDay").text(reformatDate);
