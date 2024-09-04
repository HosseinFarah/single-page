# Paginate.js

This JavaScript file provides a simple pagination functionality for a webpage. It works by hiding all `div` elements and then showing only the one that corresponds to the current page.

## Functions

### paginate(page)

This function takes a `page` parameter, which should be the id of a `div` element. It first hides all `div` elements, then it displays the `div` with the id that matches the `page` parameter.

## Event Listeners

The script also adds a click event listener to all `button` elements. When a button is clicked, it prevents the default action, then it calls the `paginate` function with the `page` data attribute of the clicked button.

## Usage

To use this script, you should have a set of `div` elements, each with a unique id that corresponds to a page. You should also have a set of `button` elements, each with a `data-page` attribute that matches the id of the `div` it should display when clicked.

```html
<div id="page1">Page 1 content</div>
<div id="page2">Page 2 content</div>
<div id="page3">Page 3 content</div>

<button data-page="page1">Go to Page 1</button>
<button data-page="page2">Go to Page 2</button>
<button data-page="page3">Go to Page 3</button>