import { createOrderHtml, html, updateDraggingHtml, moveToColumn } from "./view.js"
import { state, createOrderData, updateDragging } from './data.js'

/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event 
 */
const handleDragOver = (event) => {
    event.preventDefault() // Prevent the default behavior
  
    // Find the column where the order is being dragged over
    const path = event.path || event.composedPath()
    let column = null
  
    for (const element of path) {
      const { area } = element.dataset
      if (area) {
        column = area
        break
      }
    }
  
    if (!column) return
  
    // Update the dragging state and HTML styling
    updateDragging({ over: column })
    updateDraggingHtml({ over: column })
  }
  
  const handleDragDrop = (event) => {
    event.preventDefault()
  
    // Get the dragged order's ID
    const orderId = event.dataTransfer.getData('text/plain')
  
    // Determine the column where the order was dropped
    const path = event.path || event.composedPath()
    let column = null
  
    for (const element of path) {
      const { area } = element.dataset
      if (area) {
        column = area
        break
      }
    }
  
    if (!column) return
  
    // Move the order to the new column
    moveToColumn(orderId, column)
  
    // Clear the dragging state and update HTML styling
    updateDragging({ over: null })
    updateDraggingHtml({ over: null })
  }
  
const handleDragStart = (event) => {
    const orderElement = event.target.closest('.order')
    if (!orderElement) return
    event.dataTransfer.setData('text/plain', orderElement.dataset.id)
  }
  
  const handleDragEnd = (event) => {
    event.target.classList.remove('dragging')
  }
  
  const handleHelpToggle = (event) => {
    const helpOverlay = html.help.overlay
    if (helpOverlay.open) {
      helpOverlay.close()
      html.other.help.focus()
    } else {
      helpOverlay.showModal()
    }
  }
  
  const handleAddToggle = (event) => {
    const addOverlay = html.add.overlay
    if (addOverlay.open) {
      addOverlay.close()
      html.other.add.focus()
      html.add.form.reset()
    } else {
      addOverlay.showModal()
      html.add.title.focus()
    }
  }
  
  const handleAddSubmit = (event) => {
    event.preventDefault()
    const title = html.add.title.value
    const table = html.add.table.value
    const newOrder = createOrderData({ title, table, column: 'ordered' })
    state.orders[newOrder.id] = newOrder
    const orderHtml = createOrderHtml(newOrder)
    html.columns.ordered.appendChild(orderHtml)
    html.add.overlay.close()
  }
  
  const handleEditToggle = (event) => {
    const target = event.target
    if (target.classList.contains('order__title')) {
      const orderId = target.closest('.order').dataset.id
      const order = state.orders[orderId]
      html.edit.id.value = order.id
      html.edit.title.value = order.title
      html.edit.table.value = order.table
      html.edit.column.value = order.column
      html.edit.overlay.showModal()
      html.edit.title.focus()
    }
  }
  
  const handleEditSubmit = (event) => {
    event.preventDefault()
    const orderId = html.edit.id.value
    const order = state.orders[orderId]
    order.title = html.edit.title.value
    order.table = html.edit.table.value
    const newColumn = html.edit.column.value
    if (order.column !== newColumn) {
      moveToColumn(orderId, newColumn)
      order.column = newColumn
    }
    html.edit.overlay.close()
  }
  
  const handleDelete = (event) => {
    const orderId = html.edit.id.value
    delete state.orders[orderId]
    document.querySelector(`[data-id="${orderId}"]`).remove()
    html.edit.overlay.close()
  }  

html.add.cancel.addEventListener('click', handleAddToggle)
html.other.add.addEventListener('click', handleAddToggle)
html.add.form.addEventListener('submit', handleAddSubmit)

html.other.grid.addEventListener('click', handleEditToggle)
html.edit.cancel.addEventListener('click', handleEditToggle)
html.edit.form.addEventListener('submit', handleEditSubmit)
html.edit.delete.addEventListener('click', handleDelete)

html.help.cancel.addEventListener('click', handleHelpToggle)
html.other.help.addEventListener('click', handleHelpToggle)

for (const htmlColumn of Object.values(html.columns)) {
    htmlColumn.addEventListener('dragstart', handleDragStart)
    htmlColumn.addEventListener('dragend', handleDragEnd)
}

for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('dragover', handleDragOver)
}

for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('dragover', handleDragOver)
    htmlArea.addEventListener('drop', handleDragDrop) // Add this line
  }  