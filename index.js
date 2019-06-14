// Your code here
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}

let wrapAdjective = function(flair="*") {
 return function(thing = "special") {
   return `You are ${flair}${thing}${flair}!`
 }
}

let Calculator = {
  add: function(a,b) {
    return a + b;
  },
  subtract: function(a,b) {
  return a - b;
  },
  multiply: function(a,b) {
  return a * b;
  },
  divide: function(a,b) {
  return a / b;
  },
}

let actionApplyer = function(startInt, array) {
    let a = startInt

    for (let i = 0; i < array.length; i++ ){
      a = array[i](a)
    }

    return a
  }
