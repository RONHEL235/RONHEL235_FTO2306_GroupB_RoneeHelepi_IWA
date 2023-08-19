let state = 'idle'
let user = null
let calculated = "1"

// Only allowed to change below

const logCalc = () => {
    let evaluation = typeof calculated !== "string"
    if (evaluation) {
        let calculatedAsNumber = parseInt(calculated) 
        calculated = (calculatedAsNumber + 1)
    }else{
        let calculatedAsNumber = parseInt(calculated) 
        calculated = (calculatedAsNumber + 1)
    }
}
const calcUser = () => {
    logCalc()
    if (calculated > 2) {
        user = 'John'
        state = 'requesting'
    }
    if (calculated > 3) {
        state = 'idle'
    }
}

const checkUser = () => {
	if (user && state === 'requesting') {
		console.log(`User: ${user} (${calculated})`)
	}
}
checkUser()

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()  