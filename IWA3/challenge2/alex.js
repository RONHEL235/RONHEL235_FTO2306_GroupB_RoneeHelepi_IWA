const firstName = "Alex"
const surname = "Naidoo"
export const role = "Head of Marketing"

export const alexDisplay= firstName + " " + surname + " (" + role + ")"
document.querySelector('[data-key="alex"]').innerText = alexDisplay