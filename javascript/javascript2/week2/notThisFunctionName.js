//Create a function that takes 2 parameters: delay and stringToLog. Calling this function should log out the stringToLog after delay seconds. Call the function you have created with some different arguments
timeInterval = (time, stringTolog) => {
          let sec = time * 1000;
          setTimeout(function () {
                    console.log(stringTolog);
          }, sec);
};
timeInterval(10, "This string logged after 5 second");
timeInterval(3, "This string logged after 3 second");

//Create a button in html. When clicking this button, use the function you created in the previous task to log out the text: Called after 5 seconds 5 seconds after the button is clicked.

const btn = document.getElementById("btn");
const show = document.getElementById("show");

const showUp = () => {
          timeInterval = (time, stringTolog) => {
                    let sec = time * 1000;
                    setInterval(function () {
                              show.innerHTML = stringTolog;
                    }, sec);
          };
          timeInterval(10, "This string logged after 5 second");
}; // end of showup function

btn.addEventListener("dblclick", showUp);

/*
Create two functions and assign them to two different variables. One function logs out Earth, the other function logs out Saturn. Now create a new third function that has one parameter: planetLogFunction. The only thing the third function should do is call the provided parameter function. Try call the third function once with the Earth function and once with the Saturn function
*/

const earthLoger = (a) => {
          console.log("this is earth logger");
};

const saturnLogger = (b) => {
          console.log("this is saturn logger");
};
function planetLogFunction(callback1, callback2) {
          callback1();
          callback2();
}
planetLogFunction(earthLoger, saturnLogger);
