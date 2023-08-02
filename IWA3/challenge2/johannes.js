const firstName = "Johannes"
const surname = "Potgieter"
const role = "Intern"

export const johannesDisplay= firstName + " " + surname + " (" + role + ")"
document.querySelector('[data-key="johannes"]').innerText = johannesDisplay