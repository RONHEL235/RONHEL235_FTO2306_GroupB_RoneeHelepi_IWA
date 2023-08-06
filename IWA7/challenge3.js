const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.2'

const divider = '----------------------------------'
//Change below 

/* To do:  
* Fix: Space between the names 
* Fix: Money from negative to positive
* Fix: Insert space between 13 and 976
* Fix: Money to 2 decimal places  
*/
const result = 
`${leoName} ${leoSurname} ${`(Owed: R${leoBalance})`} 
${sarahName} ${sarahSurname} ${`(Owed: R${sarahBalance})`}
 
${divider}
Total amount owed: R${parseInt(leoBalance) + parseInt(sarahBalance)}
${divider}`
console.log(result)