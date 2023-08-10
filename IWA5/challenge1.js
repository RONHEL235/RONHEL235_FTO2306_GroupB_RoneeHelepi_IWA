const FREE_WARNING = "Free shipping only applies to single customer orders"
const BANNED_WARNING = "Unfortunately we do not ship to your country of residence"
const NONE_SELECTED = 0

/* Change here  */
const country = "NA"
const customer = 1

let shipping = 0
let currency = null
let order = null

const shoes = 300 * 1
const toys = 100 * 5
const shirts = 150 * NONE_SELECTED
const batteries = 35 * 2
const pens = 5 * NONE_SELECTED

const totalCost = shoes + toys + shirts + batteries + pens

if (country == "RSA") { 
    (shipping = 400) && (currency = "R")
}else if (country == "NAM") {
    (shipping = 600) && (currency = "$")
}else{
    (shipping = 800) && (currency = "$")
}

if ((country == "RSA") && (totalCost > 1000) && (customer < 2)) {
    order = totalCost + 0
    console.log("Price:",currency + order)
}else if ((country == "NAM") && (totalCost > 60) && (customer < 2)) {
    order = totalCost + 0
    console.log("Price:",currency + order)
}else if(country == "NK") {
     console.log(BANNED_WARNING)
}else if (customer != 1) {
    console.log(FREE_WARNING)
}else{
    order = totalCost + shipping
    console.log("Price:",currency + order)
}