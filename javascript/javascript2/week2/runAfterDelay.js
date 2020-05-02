/*
Create a function called runAfterDelay. It has two parameters: delay and callback. When called the function should wait delay seconds and then call the provided callback function. Try and call this function with different delays and different callback functions
*/

let show = (s) => {
          setInterval(() => {
                    console.log(`show logged after${s} second`);
          }, 5000);
};
let runAfterDelay = (delay, callback) => {
          callback(delay);
};
runAfterDelay(5, show);

//Check if we have double clicked on the page. A double click is defined by two clicks within 0.5 seconds. If a double click has been detected, log out the text: "double click!"

let dbClick = document.getElementById("btn");
dbClick.addEventListener("dblclick", () => {
          console.log("It is double Click");
});

//Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean, logFunnyJoke - function and logBadJoke - function. If you set tellFunnyJoke to true it should call the logFunnyJoke function that should log out a funny joke. And vice versa

const joke1 = () => {
          console.log("it is a logFunnyJoke");
};

const joke2 = () => {
          console.log("it is a  logBadJoke");
};

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
          if (shouldTellFunnyJoke === true) {
                    logFunnyJoke();
          } else {
                    logBadJoke();
          }
}

jokeCreator(true, joke1, joke2);
