//Redid the lab for extra practice. New code below; original code commented out.

function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = 'go to the office') {
  return `This Monday, I will ${activity}.`
}
function wrapAdjective(symbol = '*') {
    return function(adjective = 'special') {
      return `You are ${symbol}${adjective}${symbol}!`;
    }
  }

// function saturdayFun(activity = 'roller-skate') {
//     return (`This Saturday, I want to ${activity}!`)
// }
// function mondayWork(activity = 'go to the office') {
//     return (`This Monday, I will ${activity}.`)
// }
// function wrapAdjective(symbol) {
//     return function(adjective) {
//       return `You are ${symbol}${adjective}${symbol}!`;
//     }
//   }