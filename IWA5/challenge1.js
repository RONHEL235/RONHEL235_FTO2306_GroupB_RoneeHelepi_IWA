const FREE_WARNING = "Free shipping only applies to single customer orders"
const BANNED_WARNING = "Unfortunately we do not ship to your country of residence"
const NONE_SELECTED = "0"

/* Change here  */
const location = "sadf"
const customer = 12

let shipping = null
let currency = null
let order = null

const shoes = 300 * 1
const toys = 100 * 5
const shirts = 150 * parseInt(NONE_SELECTED)
const batteries = 35 * 2
const pens = 5 * parseInt(NONE_SELECTED)

const items = shoes + toys + shirts + batteries + pens

if (location === "RSA") { 
    (shipping = 400) && (currency = "R")
}else if (location === "NAM") {
    (shipping = 600) && (currency = "$")
}else{
    (shipping = 800) && (currency = "$")
}


if ((location === "RSA") && (items > 1000) && (customer < 2)) {
    order = items + 0
    console.log("Price:",currency + order)
}else if ((location === "NAM") && (items > 60) && (customer < 2)) {
    order = items + 0
    console.log("Price:",currency + order)
}else if(location === "NK") {
     console.log(BANNED_WARNING)
}else if (customer !== 1) {
    console.log(FREE_WARNING)
}else{
    order = items + shipping
    console.log("Price:",currency + order)
}