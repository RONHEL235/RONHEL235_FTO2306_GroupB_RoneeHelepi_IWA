//Import data.js 

//Two Variables, do not know what they mean
const matches = books
const page = 1;

//Error Handling 
if (!books && !Array.isArray(books)) {
    throw new Error('Source required')} 
if (!range && range.length < 2) {
    throw new Error('Range must be an array with two numbers')}

//CSS for light and dark themes    
day = {
    dark: '10, 10, 20',
    light: '255, 255, 255',
}

night = {
    dark: '255, 255, 255',
    light: '10, 10, 20',
}

/*
Changed const extracted to correctly extract the first 36 books from the books array.
Used a for loop to iterate through the extracted array.
Destructured the book object within the loop to access author, image, title, and id.
Appended each preview element to the fragment.
Finally, appended the fragment to the data-list-items container.
Make sure to replace createPreview with your actual function that creates and returns a DOM element representing a book preview. 
*/
// Create DOM Nodes and add things to them
const fragment = document.createDocumentFragment()

// Extract (author, image, title, id) and display them
const extracted = books.slice(0, 36)

for (let i = 0; i < extracted.length; i++) {
    const { author, image, title, id } = extracted[i] // Destructure the book object

    const preview = createPreview({
        author,
        id,
        image,
        title
    })

    fragment.appendChild(preview)
}
// Append the fragment to the data-list-items container
const dataListItems = document.querySelector("[data-list-items]")
dataListItems.appendChild(fragment)



/* 
Created a document.createDocumentFragment() to store the <option> elements.
Corrected the creation of the "All Genres" option by setting both value and innerText properties.
Used a for...of loop to iterate through the genresArray and create an <option> element for each genre.
Set the value and innerText properties of each genre option.
Appended each option to the genres fragment.
Finally, appended the genres fragment to the data-search-genres container.
*/
// Create DOM Nodes and add things to them
const genres = document.createDocumentFragment()

// Create an "All Genres" option
const allGenresOption = document.createElement('option')
allGenresOption.value = 'any'
allGenresOption.innerText = 'All Genres'
genres.appendChild(allGenresOption)
// Loop over the genres array and assign options to them
for (const { id, name } of genresArray) {
    const genreOption = document.createElement('option')
    genreOption.value = id // You can set the value to the genre id if needed
    genreOption.innerText = name
    genres.appendChild(genreOption)
}
// Append the fragment to the data-search-genres container
const dataSearchGenres = document.querySelector('[data-search-genres]')
dataSearchGenres.appendChild(genres)



/*Created a document.createDocumentFragment() to store the <option> elements.
Corrected the creation of the "All Authors" option by setting both value and innerText properties.
Used a for...of loop to iterate through the authorsArray and create an <option> element for each author.
Set the value and innerText properties of each author option.
Appended each option to the authors fragment.
Finally, appended the authors fragment to the data-search-authors container.*/
// Create DOM Nodes and add things to them
const authors = document.createDocumentFragment()
// Create an "All Authors" option
const allAuthorsOption = document.createElement('option')
allAuthorsOption.value = 'any'
allAuthorsOption.innerText = 'All Authors'
authors.appendChild(allAuthorsOption)

// Loop over the authors array and assign options to them
for (const [id, name] of authorsArray) {
    const authorOption = document.createElement('option')
    authorOption.value = id
    authorOption.innerText = name
    authors.appendChild(authorOption)
}
// Append the fragment to the data-search-authors container
const dataSearchAuthors = document.querySelector('[data-search-authors]')
dataSearchAuthors.appendChild(authors)



/* This the toggling from the Light and Dark modes   
 */
const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
const theme = darkMode ? 'night' : 'day'
document.documentElement.style.setProperty('--color-dark', theme.dark)
document.documentElement.style.setProperty('--color-light', theme.light)


/* 
This is the blue button that gets displayed at the bottom of the app 
to display the number of books left.  
*/
const dataListButton = document.querySelector('[data-list-button]')

// Calculate the remaining books to show
const remainingBooks = matches.length - (page * BOOKS_PER_PAGE)

// Update the button label and disabled state
dataListButton.innerHTML = `<span>Show more</span><span class="list__remaining">(${remainingBooks > 0 ? remainingBooks : 0})</span>`
dataListButton.disabled = remainingBooks <= 0



// EVENT HANDLERS

//Selectors
const dataSettingsOverlay = document.querySelector('[data-settings-overlay]') 
const dataSettingsCancel = document.querySelector('[data-settings-cancel]')
const dataSettingsForm = document.querySelector('[data-settings-form]')


//Event Handler for for Settings
//Event Handler for Settings Overlay Submit
dataSettingsOverlay.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const result = Object.fromEntries(formData);
    document.documentElement.style.setProperty('--color-dark', css[result.theme].dark);
    document.documentElement.style.setProperty('--color-light', css[result.theme].light);
    dataSettingsOverlay.open = false; // Corrected the assignment
});

// Event Handler for Settings Cancel Button
dataSettingsCancel.addEventListener('click', () => {
    dataSettingsOverlay.open = false;
});

// Event Handler for Settings Form Submit
dataSettingsForm.addEventListener('submit', (event) => {
    event.preventDefault();
    actions.settings.submit(); // Assuming actions.settings.submit is a valid function
});





// Event handler for Searching
data-search-cancel.click() { 
    data-search-overlay.open === false }


data-header-search.click() {
    data-search-overlay.open === true 
    data-search-title.focus();
}

 
data-search-form.click(filters) {
    preventDefault()
    const formData = new FormData(event.target)
    const filters = Object.fromEntries(formData)
    result = []

    for (book; booksList; i++) {
        titleMatch = filters.title.trim() = '' && book.title.toLowerCase().includes[filters.title.toLowerCase()]
        authorMatch = filters.author = 'any' || book.author === filters.author

        {
            genreMatch = filters.genre = 'any'
            for (genre; book.genres; i++) { if singleGenre = filters.genre { genreMatch === true }}}
        }

        if titleMatch && authorMatch && genreMatch => result.push(book)
    }

    if display.length < 1 
    data-list-message.class.add('list__message_show')
    else data-list-message.class.remove('list__message_show')
    

    data-list-items.innerHTML = ''
    const fragment = document.createDocumentFragment()
    const extracted = source.slice(range[0], range[1])

    for ({ author, image, title, id }; extracted; i++) {
        const { author: authorId, id, image, title } = props

        element = document.createElement('button')
        element.classList = 'preview'
        element.setAttribute('data-preview', id)

        element.innerHTML = /* html */ `
            <img
                class="preview__image"
                src="${image}"
            />
            
            <div class="preview__info">
                <h3 class="preview__title">${title}</h3>
                <div class="preview__author">${authors[authorId]}</div>
            </div>
        `

        fragment.appendChild(element)
    }
    
    data-list-items.appendChild(fragments)
    initial === matches.length - [page * BOOKS_PER_PAGE]
    remaining === hasRemaining ? initial : 0
    data-list-button.disabled = initial > 0

    data-list-button.innerHTML = /* html */ `
        <span>Show more</span>
        <span class="list__remaining"> (${remaining})</span>
        `

    window.scrollTo({ top: 0, behavior: 'smooth' });
    data-search-overlay.open = false
}




const dataListClose = document.querySelector('[data-list-close]')
const dataListButton = document.querySelector('[data-list-button]')
const dataListActive = document.querySelector('[data-list-active]')
const dataListBlur = document.querySelector('[data-list-blur]')
const dataListTitle = document.querySelector('[data-list-title]')
const dataListSubtitle = document.querySelector('[data-list-subtitle]')
const dataListDescription = document.querySelector('[data-list-description]')

// Event Handler for List Close
dataListClose.addEventListener('click', () => {
    dataListActive.open = false; // Corrected the assignment
});

// Event Handler for List Button
dataListButton.addEventListener('click', () => {
    const startIndex = page * BOOKS_PER_PAGE;
    const endIndex = (page + 1) * BOOKS_PER_PAGE;
    const previewsFragment = createPreviewsFragment(matches, startIndex, endIndex);
    document.querySelector('[data-list-items]').appendChild(previewsFragment); // Corrected the selector
    actions.list.updateRemaining();
    page = page + 1;
});

// Event Handler for List Items
dataListItems.addEventListener('click', (event) => {
    const pathArray = Array.from(event.path || event.composedPath());
    let active = null;

    for (const node of pathArray) {
        if (active) break;
        const previewId = node?.dataset?.preview;

        for (const singleBook of books) {
            if (singleBook.id === previewId) {
                active = singleBook;
                break;
            }
        }
    }

    if (!active) return;
    dataListActive.open = true; // Corrected the assignment
    dataListBlur.value = active.image; // Corrected the assignment
    dataListTitle.innerText = active.title; // Corrected the assignment
    dataListSubtitle.innerText = `${authors[active.author]} (${new Date(active.published).getFullYear()})`; // Corrected the assignment
    dataListDescription.innerText = active.description; // Corrected the assignment
});
