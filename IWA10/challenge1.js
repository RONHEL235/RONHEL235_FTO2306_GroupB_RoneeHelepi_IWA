const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: new Date(`16 December ${currentYear}`),
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}
 
const christmas = 6
const futureId = 9

// Do not change code above this comment

if (holidays[9]) {
    console.log(holidays[9])
}else{
    console.log(`ID ${futureId} not created yet`)
} 
 
const copied = holidays[christmas]
copied.name ='X-mas'

const correctDate = Object.assign({}, copied)
correctDate.date = new Date(currentYear, 11, 25, 2, 0, 0, 0)
isEarlier = correctDate.date < holidays[christmas].date
console.log("New date is earlier:",isEarlier)

console.log('ID change:', holidays[christmas].id != correctDate.id && copied.id)
console.log('Name change:', holidays[christmas].name != correctDate.name || copied.name)
console.log('Date change:', holidays[christmas].date != correctDate.date && copied.date.toLocaleDateString("en-GB"))
 
const firstHolidayTimestamp = Math.min(
    holidays[0].date.getTime(),
    holidays[1].date.getTime(),
    holidays[2].date.getTime(),
    holidays[3].date.getTime(),
    holidays[4].date.getTime(),
    holidays[5].date.getTime(),
    holidays[6].date.getTime(),
    holidays[7].date.getTime(),
    holidays[8].date.getTime(),
)

const lastHolidayTimestamp = Math.max(
    holidays[0].date.getTime(),
    holidays[1].date.getTime(),
    holidays[2].date.getTime(),
    holidays[3].date.getTime(),
    holidays[4].date.getTime(),
    holidays[5].date.getTime(),
    holidays[6].date.getTime(),
    holidays[7].date.getTime(),
    holidays[8].date.getTime(),
) 

const firstDay = new Date(firstHolidayTimestamp).getDate().toLocaleString()
const firstMonth = new Date(firstHolidayTimestamp).getMonth().toLocaleString()
const lastDay = new Date(lastHolidayTimestamp).getDate()
const lastMonth = new Date(lastHolidayTimestamp).getMonth()

console.log(`${firstDay.padStart(2, 0)}/${firstMonth + 1}/${currentYear}`)
console.log(`${lastDay}/${lastMonth + 1}/${currentYear}`)
const randomHoliday = holidays[Math.floor(Math.random() * 9)]
console.log(randomHoliday.date)