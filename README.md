# 1) Difference between getElementById, getElementsByClassName, and querySelector/querySelectorAll
## getElementById:
This is the oldest and fastest method for selecting a single element. It finds the element with a specific, unique id and returns that element object directly.

## getElementsByClassName:
This method returns a live HTMLCollection of all elements that have a specific class. Because it's "live," it automatically updates if you add or remove elements with that class from the document.

## querySelector:
A more modern method that uses CSS selectors to find and return the first element that matches the specified selector. It's great for selecting single elements based on more complex criteria.

## querySelectorAll:
This method also uses CSS selectors but returns a static NodeList containing all matching elements. Unlike a live collection, a static NodeList does not update automatically if the DOM changes.

# 2) Creating and inserting a new element into the DOM
I can create a new element using document.createElement('tagName').
For example, document.createElement('div').
To insert it into the DOM, first I've to select the parent element where I want it to go, then used a method like appendChild() to add it as the last child, or prepend() to add it as the first child.

# 3) Event Bubbling
Event bubbling is the process by which an event on an element (like a click) also triggers the same event on all of its parent elements, all the way up to the document root.
The event starts at the target element and then "bubbles up" through the hierarchy. This is the default behavior for most events and is what makes event delegation possible.

# 4) Event Delegation in JavaScript
Event delegation is a design pattern that leverages event bubbling.
Instead of adding an event listener to every single child element, you add just one listener to a common parent element. When an event occurs on a child, it bubbles up to the parent, and the single listener on the parent handles it.
It's useful because it improves performance by reducing the number of listeners, and it also works automatically for new elements that are dynamically added to the page.

# 5) Difference between preventDefault() and stopPropagation() methods
## preventDefault():
This method stops the default action of an event. It prevents a link from navigating to a new page or a form from submitting when being clicked. It does not stop the event from bubbling.

## stopPropagation():
This method stops the propagation or "bubbling" of an event. When called, the event will not bubble up to the parent elements, so their event listeners will not be triggered. It does not prevent the default action of the event.
