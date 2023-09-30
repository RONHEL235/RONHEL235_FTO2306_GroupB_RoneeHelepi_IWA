// @ts-check 

const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

// Only edit below
/**
 * The function `createArray` generates an array of integers where each element value is equal to its index in the array.
 * It initializes an empty array named `result`.
 * It then iterates from 0 up to, but not including, the specified `length`, incrementing the index `i` by 1 in each iteration.
 * Inside the loop, it adds the current value of `i` to the `result` array using the `push` method.
 * Finally, it returns the populated `result` array.
 * @param {number} length - The desired length of the output array.
 * @returns {number[]} result - An array of integers from 0 up to `length` - 1.
 */
const createArray = (length) => {
    const result = []

    for (let i = 0; i < length; i = i + 1) {
        result.push(i)
    }
    return result
    // return a list that takes in the argument length, does some looping and gives it back
}

/**
 * The function `createData` constructs a structured data representation of a calendar month, 
 * with an array of weeks, where each week contains an array of days.
 * It initializes a Date object `current` to the current date, then sets the date to the 1st of the current month.
 * It obtains the starting day of the week for the 1st of the month (`startDay`), and the total number of days in the month (`daysInMonth`).
 * It creates arrays `weeks` (with 5 elements) and `days` (with 7 elements) representing the weeks in a month and the days in a week, respectively.
 * It iterates through each week, creating an object for each week containing a `week` number and an empty `days` array.
 * Within each week, it iterates through each day, calculating the day of the month (`day`) and checking if it's a valid day in the current month (`isValid`).
 * For each day, it populates the `days` array of the current week object with a `dayOfWeek` and `value` (either the day of the month or an empty string if not valid).
 * Finally, it returns the structured `result` array containing the calendar data for the current month.
 * @returns {Object[]} result - An array of week objects, each containing a week number and an array of day objects for the current month.
 */
const createData = () => {
    const current = new Date();
    current.setDate(1);

    const startDay = current.getDay();
    const daysInMonth = getDaysInMonth(current);

    const weeks = createArray(5);
    const days = createArray(7);
    const result = [];

    for (const weekIndex of weeks) {
        result.push({
            week: weekIndex + 1,
            days: [],
        });

        for (const dayIndex of days) {
            const day = dayIndex - startDay + weekIndex * 7 + 1;
            const isValid = day > 0 && day <= daysInMonth;

            result[weekIndex].days.push({
                dayOfWeek: dayIndex + 1,
                value: isValid ? day : '',
            });
        }
    }
    return result;
};

/**
 * The function `addCell` appends an HTML table cell (`<td>`) to the provided existing HTML string.
 * 1. It takes three arguments: the existing HTML string, a class string to be added to the new cell, and a value to be inserted into the cell.
 * 2. Using a template literal, it appends a new `<td>` element with the provided class string and value to the existing HTML string.
 * 3. The value within the cell is surrounded by non-breaking spaces (`&nbsp;`) for spacing purposes.
 * 4. The resulting concatenated HTML string is then returned.
 * @param {string} existing - The existing HTML string.
 * @param {string} classString - The CSS class to be applied to the new cell.
 * @typedef {string|number} Value - The value to be inserted into the new cell.  
 * @param {Value} value 
 * @returns {string} result - The updated HTML string with the appended table cell.
 */
const addCell = (existing, classString, value) => {
    const result = /* html */ `
        ${existing}
        <td class="${classString}">
            &nbsp;${value}&nbsp;
        </td>
    `;

    return result;
}

/**
 * The function `createHtml` constructs an HTML string representing a table of weeks and days based on the provided data.
 * It initializes an empty string `result` to store the final HTML output.
 * Iterates through each `week` object in the provided `data` array, initializing an empty string `inner` to store the HTML for the current row.
 * For each `week`, it first appends a cell indicating the week number using the `addCell` function.
 * Then, it iterates through each `day` object in the `days` array of the current `week`, determining whether the day is 'today', a 'weekend', or falls in an 'alternate' week.
 * Constructs a `classString` to store CSS class names based on the conditions evaluated, which will be applied to the current day's cell.
 * Utilizes the `addCell` function to append a cell for the current day to the `inner` string, with the constructed `classString` and day's `value`.
 * After processing all the days for the current week, it appends a new row (`<tr>`) to the `result` string, enclosing the `inner` string, representing all the days of the current week.
 * Finally, after processing all the weeks, it returns the constructed `result` string, which now represents a table of weeks and days.
 * @param {Object[]} data - An array of week objects, each containing a week number and an array of day objects.
 * @returns {string} result - The constructed HTML string representing a table of weeks and days.
 */
const createHtml = (data) => {
    let result = '';

    for (const { week, days } of data) {
        let inner = '';
        inner = addCell(inner, 'table__cell table__cell_sidebar', `Week ${week}`);

        for (const { dayOfWeek, value } of days) {
            const isToday = new Date().getDate() === value;
            const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
            const isAlternate = week % 2 === 0;

            let classString = 'table__cell';

            if (isToday) classString += ' table__cell_today';
            if (isWeekend) classString += ' table__cell_weekend';
            if (isAlternate) classString += ' table__cell_alternate';

            inner = addCell(inner, classString, value);
        }

        result = `
            ${result}
            <tr>${inner}</tr>
        `;
    }
    return result;
}

// Only edit above

const current = new Date();
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`;

const data = createData();
document.querySelector('[data-content]').innerHTML = createHtml(data);
