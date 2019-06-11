// Your code here
function saturdayFun(toDo="roller-skate") {
return `This Saturday, I want to ${toDo}!`
}

function mondayWork(toDo="go to the office") {
	return `This Monday, I will ${toDo}.`
}

function wrapAdjective(hiLite="*") {
  return function(param="special") {
    return `You are ${hiLite}${param}${hiLite}!`;
  }
  // return wrapAdjective()
}

const Calculator = {
	add: function(num1, num2) {
		return (num1 + num2)
	},
	subtract: function(num1, num2) {
		return (num1 - num2)
	},
	multiply: function(num1, num2) {
		return (num1 * num2)
	},
	divide: function(num1, num2) {
		return (num1/num2)
	}
}
	

function actionApplyer(startInt, functArr) {
	if(functArr.length == 0) {
		return startInt
	} else {
		for (let i=0; i < functArr.length; i++) {
			startInt = functArr[i](startInt)
		}
	return startInt	
	}
}