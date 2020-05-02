//Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.
/*
const func1=()=>{console.log("it is fuction1")};
const func2=()=>{console.log("it is fuction2")};
const func3=()=>{console.log("it is fuction3")};

const arrayoFfuctions=[func1,func2,func3]

function diplayFuctions(x)
{
    //console.log(x);

    const f1=x[0];
          f1();

          const f2=x[1];
          f2();

          const f3=x[2]
          f3();

          

          for(i=0;i<x.length; i++)
          {
              let f=x[i];
              f();
          }
          

}


diplayFuctions(arrayoFfuctions)


*/

//Create a function as a const and try creating a function normally. Call both functions. Read up on this if you are interested:

const func1 = function () {
          console.log("it is fuction1");
}; // function expression
const func2 = () => {
          console.log("it is fuction2");
}; //arrow fuction
function func3() {
          console.log("it is fuction3");
} // Normal fuction

const arrayoFfuctions = [func1, func2, func3];

function diplayFuctions(x) {
          x.forEach((element) => {
                    let f = element;
                    f();
          });
}
diplayFuctions(arrayoFfuctions);

//Create an object that has a key whose value is a function. Try calling this function.

let obj = {
          id: 1,
          keys: function () {
                    console.log("i am fuction inside the object");
          },
};

obj.keys();
