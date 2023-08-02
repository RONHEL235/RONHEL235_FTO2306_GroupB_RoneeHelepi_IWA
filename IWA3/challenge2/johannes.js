const firstName = "Johannes"
const surname = "Potgieter"
export const role = "Intern"

const display= firstName + " " + surname + " (" + role + ")"
document.querySelector('[data-key="johannes"]').innerText = display