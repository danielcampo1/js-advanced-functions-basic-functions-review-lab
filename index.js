// Your code here
function saturdayFun(param = "roller-skate"){
  return  `This Saturday, I want to ${param}!`;
}

function mondayWork(param = "go to the office") {
    return `This Monday, I will ${param}.`
}

function wrapAdjective(outerP = "*") {
    return function(param2 = "special") {
        return `You are ${outerP}${param2}${outerP}!`
    }
}

const Calculator = {
    add: function(num1,num2) {
        return num1 + num2;
    },
    subtract: function(num1, num2) {
        return num1 - num2
    },
    multiply: function(num1, num2) {
        return num1 * num2
    },
    divide: function(num1, num2) {
        return num1 / num2
    }
}

function actionApplyer (int, functions) {
    let num = int
    for (let i=0; i < functions.length; i++){
        num = functions[i](num)
    }
    return num
}