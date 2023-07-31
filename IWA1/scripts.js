const MAX_NUMBER = 15
const MIN_NUMBER = -5

const number = document.querySelector('[data-key="number"]')
const subtract = document.querySelector('[data-key="subtract"]')
const add = document.querySelector('[data-key="add"]')

const subtracthandler = () => {
    const newValue = parseInt(number.value) - 1
    number.value = newValue

    if (add.disable === true) {
        add.disabled = true
    }

    if (newValue <= MIN_NUMBER) {
        subtract.disabled = true
    }
}

const addhandler = () => {
    const newValue = parseInt(number.value) + 1
    number.value = newValue

    if (subtract.disable === true) {
        subtract.disabled = true
    }

    if (newValue <= MIN_NUMBER) {
        subtract.disabled = true
    }
}



