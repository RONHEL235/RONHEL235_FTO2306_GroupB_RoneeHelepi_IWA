const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

let statusB1Selector = document.querySelector('#book1 .status')
let reserveB1Selector = document.querySelector('#book1 .reserve')
let checkoutB1Selector = document.querySelector('#book1 .checkout')
let checkInB1Selector = document.querySelector('#book1 .checkin')

let statusB2Selector = document.querySelector('#book2 .status')
let reserveB2Selector = document.querySelector('#book2 .reserve')
let checkoutB2Selector = document.querySelector('#book2 .checkout')
let checkInB2Selector = document.querySelector('#book2 .checkin')

let statusB3Selector = document.querySelector('#book3 .status')
let reserveB3Selector = document.querySelector('#book3 .reserve')
let checkoutB3Selector = document.querySelector('#book3 .checkout')
let checkInB3Selector = document.querySelector('#book3 .checkin')

checkInB1Selector.style.color = ''
statusB1Selector.style.color = STATUS_MAP.overdue.color
let reserveB1 = STATUS_MAP.overdue.canReserve
if (reserveB1) {
    reserveB1Selector.enabled = true
}else{
    reserveB1Selector.disabled = true    
}

let checkoutB1 = STATUS_MAP.overdue.canCheckout
if (checkoutB1) {
    checkoutB1Selector.enabled = true 
}else{
    checkoutB1Selector.disabled = true
}

let checkInB1 = STATUS_MAP.overdue.canCheckIn
if (checkInB1) {
    checkInB1Selector.enabled = true  
}else{
    checkInB1Selector.disabled = true
}

/* 2 */
checkInB2Selector.style.color = ''
statusB2Selector.style.color = STATUS_MAP.reserved.color
let reserveB2 = STATUS_MAP.reserved.canReserve
if (reserveB2) {
    reserveB2Selector.enabled = true
}else{
    reserveB2Selector.disabled = true    
}

let checkoutB2 = STATUS_MAP.reserved.canCheckout
if (checkoutB2) {
    checkoutB2Selector.enabled = true 
}else{
    checkoutB2Selector.disabled = true
}

let checkInB2 = STATUS_MAP.reserved.canCheckIn
if (checkInB2) {
    checkInB2Selector.enabled = true  
}else{
    checkInB2Selector.disabled = true
}

/* 3 */
checkInB3Selector.style.color = ''
statusB3Selector.style.color = STATUS_MAP.shelf.color
let reserveB3 = STATUS_MAP.shelf.canReserve
if (reserveB3) {
    reserveB3Selector.enabled = true
}else{
    reserveB3Selector.disabled = true    
}

let checkoutB3 = STATUS_MAP.shelf.canCheckout
if (checkoutB3) {
    checkoutB3Selector.enabled = true 
}else{
    checkoutB3Selector.disabled = true
}

let checkInB3 = STATUS_MAP.shelf.canCheckIn
if (checkInB3) {
    checkInB3Selector.enabled = true  
}else{
    checkInB3Selector.disabled = true
}
