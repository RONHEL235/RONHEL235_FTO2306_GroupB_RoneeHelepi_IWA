const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = '0'

let customers = '1'
let customer = parseInt(customers)
let location = 'NAM'
let currency = null
let shipping = null
shipping = null
currency = '$'


if (location = 'RSA') { 
    (shipping = 400) && (currency = 'R')
}else if (location = 'NAM') {
    (shipping = 600) && (currency = '$')
}else if (location = 'NK') {
    console.log(BANNED_WARNING)
}else{
    (shipping = 800) && (currency = '$')
} 

const shoes = 300 * 1
const toys = 100 * 5
const shirts = 150 * parseInt(NONE_SELECTED)
const batteries = 35 * 2
const pens = 5 * parseInt(NONE_SELECTED)

const items = shoes + toys + shirts + batteries + pens 
let calcShipping =  items + parseInt(shipping)

if ((location = 'RSA') && (customer < 2) && (items > 1000)) { 
    (shipping = 0) || (calcShipping)
}else if((location = 'NAM') && (customer < 2) && (items > 60)) {
    (shipping = 0) || (calcShipping)
}else if ((shipping = 0) && (customers !== 1)) { 
    console.log(FREE_WARNING) 
}else{
    shipping = 0 || (calcShipping)
}

console.log("price:",currency + items + shipping)