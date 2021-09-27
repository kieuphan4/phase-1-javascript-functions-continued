function saturdayFun(activity = 'roller-skate') {
    return (`This Saturday, I want to ${activity}!`);
}
console.log(saturdayFun("bathe my dog")); 

(function () {
    console.log("Yet more razzling");
  });

function mondayWork(activity = 'go to the office') {
    return (`This Monday, I will ${activity}.`);
}
console.log(mondayWork("work from home"));

function wrapAdjective(wrap = "*") {
    return function(emphatic = "a hard worker") {
        return `You are ${wrap}${emphatic}${wrap}!`
    }
}

console.log(wrapAdjective()());