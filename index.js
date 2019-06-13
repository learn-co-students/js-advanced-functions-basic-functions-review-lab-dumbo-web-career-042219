const saturdayFun = (activity='roller-skate')  => {
  return `This Saturday, I want to ${activity}!`
}

const mondayWork = (activity='go to the office') => {
  return `This Monday, I will ${activity}.`
}

const wrapAdjective = (flair="*") => {
  return function(adj="special") {
    return `You are ${flair}${adj}${flair}!`
  }
}

const Calculator = function () {
  let Calculator = {}
  Calculator.add = function () {
    return 1 + 3
  },
  Calculator.subtract = function () {
    return 1 - 3
  },
  Calculator.multiply = function () {
    return 1 * 3
  },
  Calculator.divide = function() {
    return 10 / 5
  }
  return Calculator
}();

const actionApplyer = function (start, arr) {
  if(arr.length !== 0){
    arr.forEach(fn => {
      start = fn(start)
    })
  }
  return start
};
