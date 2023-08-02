const firstName = "Alex"
const surname = "Naidoo"
export const role = "Head of Marketing"

const display = firstName + " " + surname + " (" + role + ")"
document.querySelector('[data-key="alex"]').innerText = display