// Your code here
function saturdayFun(str = "roller-skate") {
  return `This Saturday, I want to ${str}!`;
}

function mondayWork(activity = 'go to the office') {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair = "*") {
  return function(str = 'special') {
    return `You are ${flair}${str}${flair}!`
  }
}

let Calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  },
  multiply: function(a, b) {
    return a * b;
  },
  divide: function(a, b) {
    return a / b;
  }
}

function actionApplyer(int, arr) {
  if (arr.length === 0) {
    return int
  } else {
    for (let i = 0; i < arr.length; i++)
      int = arr[i](int)
  }
  return int
}
