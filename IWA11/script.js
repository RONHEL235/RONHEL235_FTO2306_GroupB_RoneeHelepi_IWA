const root1 = document.querySelector('[data-key="order1"]')
const biscuits1 = document.querySelector('.biscuits.count')
const donuts1 = document.querySelector('.donuts.count')
const pancakes1 = document.querySelector('.pancakes.count')
const status1 = document.querySelector('.status')

const root2 = document.querySelector('[data-key="order2"]')
const biscuits2 = document.querySelector('.biscuits.count')
const donuts2 = document.querySelector('.donuts.count')
const pancakes2 = document.querySelector('.pancakes.count')
const status2 = document.querySelector('.status')

const root3 = document.querySelector('[data-key="order3"]')
const biscuits3 = document.querySelector('.biscuits.count')
const donuts3 = document.querySelector('.donuts.count')
const pancakes3 = document.querySelector('.pancakes.count')
const status3 = document.querySelector('.status')

biscuits1.innerText = root1.getAttribute('data-biscuits')
donuts1.innerText = root1.getAttribute('data-donuts')
pancakes1.innerText = root1.getAttribute('data-pancakes')
status1.innerText = root1.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending'

biscuits2.innerText = root2.getAttribute('data-biscuits')
donuts2.innerText = root2.getAttribute('data-donuts')
pancakes2.innerText = root2.getAttribute('data-pancakes')
status2.innerText = root2.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending'

biscuits3.innerText = root3.getAttribute('data-biscuits')
donuts3.innerText = root3.getAttribute('data-donuts')
pancakes3.innerText = root3.getAttribute('data-pancakes')
status3.innerText = root3.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending'
