const saturdayFun = (activity = "roller-skate") => {
  return `This Saturday, I want to ${activity}!`;
};

const mondayWork = (activity = `go to the office`) => {
  return `This Monday, I will ${activity}.`;
};

const wrapAdjective = (flair = "*") => {
  return function(arg = `special`) {
    return `You are ${flair}${arg}${flair}!`;
  };
};

const Calculator = {
  add: function(num1, num2){
    return num1 + num2;
  },
  subtract: function(num1, num2){
    return num1 - num2;
  },
  multiply: function(num1, num2){ 
    return num1*num2;
  },
  divide: function(num1, num2){
    return num1/num2;
  }
};

const actionApplyer = (num, arr) => {
  if (arr.length === 0){
    return num;
  }

  arr.forEach(action => {
    num = action(num);
  });

  return num;
};