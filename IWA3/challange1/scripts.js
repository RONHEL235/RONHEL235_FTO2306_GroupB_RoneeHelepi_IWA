import {company} from './configuration.js'
import {year} from './configuration.js'

const message = '© ' + company + ' (' + year + ')'
document.querySelector('[data-key="footer"]').innerText = message