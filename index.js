function saturdayFun(activity = 'roller-skate') {
    return (`This Saturday, I want to ${activity}!`)
}
function mondayWork(monActivity = 'go to the office') {
    return (`This Monday, I will ${monActivity}.`)
}
function wrapAdjective(symbol) {
    return function(adjective) {
      return `You are ${symbol}${adjective}${symbol}!`;
    }
  }
