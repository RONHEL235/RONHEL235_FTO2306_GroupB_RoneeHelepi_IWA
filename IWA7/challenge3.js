const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.2'

const divider = '----------------------------------'
//Change below 

const leoPositiveBalance = parseFloat(leoBalance.replace("-", ""))
const sarahPositiveBalance = parseFloat(sarahBalance.replace("-", "")) 
const amount = parseFloat(leoBalance.replace("-", "")) + parseFloat(sarahBalance.replace("-", ""))
const amountSeparated = parseFloat(amount) 

const result = 
`${leoName} ${leoSurname.trim()} ${`(Owed: R ${leoPositiveBalance.toFixed(2)})`} 
${sarahName.trim()} ${sarahSurname} ${`(Owed: R ${sarahPositiveBalance.toFixed(2)})`}

${divider}
Total amount owed: R ${amountSeparated.toFixed(2)}
${divider}`
console.log(result)

