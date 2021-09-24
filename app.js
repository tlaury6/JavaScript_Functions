console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count){
    for(i = 1; i <= count; i++)
        if (i % 2 == 1){
            console.log(i);
        }else if (i < 1) {
            console.log(i + " is a negative number")
        }else {
            console.log("This is not an odd number");
        }
        };
printOdds(50)
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(age = 15 , name = "Sam"){
    var aboveSixteen = `Congrats ${name}, you can drive!`;
    var belowSixteen = `Sorry ${name} , but you need to wait until you're 16.`;

    if (age < 16){
        console.log(belowSixteen);
    }else {
        console.log(aboveSixteen);
    }
};
    do {
        var userAge = prompt("Please enter your age", 15);
    }while (userAge <= 0)

    
checkAge(16 ,"Taylor");

//More Practice Exercise
console.log("More Practice:\n==========\n");
var poundsToKg = function (pounds){
    let kg = pounds * 0.45359237;
    return kg;
};
poundsToKg(130);