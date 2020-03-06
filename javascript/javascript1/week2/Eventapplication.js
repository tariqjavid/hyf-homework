
let currentDate=new Date();
function getEventWeekday(days) {
    return new Date(currentDate.getTime() + days*24*60*60*1000);
}

let days=prompt("please Enter event days up to now")
var newDate = getEventWeekday(days);
console.log("The event will be held on this date:",newDate);