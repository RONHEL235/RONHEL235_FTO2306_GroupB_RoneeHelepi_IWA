let root1 = document.querySelector('[data-key="order1"]')
let biscuits1Count = root1.querySelector('.biscuits .count')
let donuts1Count = root1.querySelector('.donuts .count')
let pancakes1Count = root1.querySelector('.pancakes .count')
let status1Element = root1.querySelector('.status dd')

let root2 = document.querySelector('[data-key="order2"]')
let biscuits2Count = root2.querySelector('.biscuits .count')
let donuts2Count = root2.querySelector('.donuts .count')
let pancakes2Count = root2.querySelector('.pancakes .count')
let status2Element = root2.querySelector('.status dd')

let root3 = document.querySelector('[data-key="order3"]')
let biscuits3Count = root3.querySelector('.biscuits .count')
let donuts3Count = root3.querySelector('.donuts .count')
let pancakes3Count = root3.querySelector('.pancakes .count')
let status3Element = root3.querySelector('.status dd')

let biscuits1 = root1.getAttribute('data-biscuits')
let donuts1 = root1.getAttribute('data-donuts')
let pancakes1 = root1.getAttribute('data-pancakes')
let status1 = root1.getAttribute('data-delivered')
if (status1 === 'true') {
    status1 = "Delivered"
}else{
    status1 = "Pending"
}

let biscuits2 = root2.getAttribute('data-biscuits')
let donuts2 = root2.getAttribute('data-donuts')
let pancakes2 = root2.getAttribute('data-pancakes')
let status2 = root2.getAttribute('data-delivered')
if (status2 === 'true') {
    status2 = "Delivered"
}else{
    status2 = "Pending"
}

let biscuits3 = root3.getAttribute('data-biscuits')
let donuts3 = root3.getAttribute('data-donuts')
let pancakes3 = root3.getAttribute('data-pancakes')
let status3 = root3.getAttribute('data-delivered')
if (status3 === 'true') {
    status3 = "Delivered"
}else{
    status3 = "Pending"
}

biscuits1Count.textContent = biscuits1
donuts1Count.textContent = donuts1
pancakes1Count.textContent = pancakes1
status1Element.textContent = status1

biscuits2Count.textContent = biscuits2
donuts2Count.textContent = donuts2
pancakes2Count.textContent = pancakes2
status2Element.textContent = status2

biscuits3Count.textContent = biscuits3
donuts3Count.textContent = donuts3
pancakes3Count.textContent = pancakes3
status3Element.textContent = status3
