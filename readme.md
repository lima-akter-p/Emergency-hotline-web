
1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Ans:
    #1. getElementById

Purpose: Selects a single element by its id.

Returns: The element itself (not a collection), or null if not found.

Syntax:

const element = document.getElementById('myId');




#2. getElementsByClassName

Purpose: Selects all elements that have a specific class name.

Returns: A live HTMLCollection (like an array but not exactly).

Syntax:

const elements = document.getElementsByClassName('myClass');




#3. querySelector and querySelectorAll

Purpose: Select elements using CSS selectors.

querySelector returns the first match.

querySelectorAll returns all matches as a static NodeList.

Syntax:

// First matching element
const firstEl = document.querySelector('.myClass');

// All matching elements
const allEls = document.querySelectorAll('.myClass');







2.How do you **create and insert a new element into the DOM**
Ans:
Step 1: Create a new element

Use document.createElement():

let newDiv = document.createElement("div");


Step 2: Insert it into the DOM

You must attach it to an existing element (like body or another container):

document.body.appendChild(newDiv);   // Adds it to the end of <body>





3. What is **Event Bubbling** and how does it work?
Ans:

Event bubbling is the process where an event starts from the innermost (child) element that triggered it, and then moves upward (bubbles) through its ancestors (parent → grandparent → up to <body> and <html>).

🔹 How it Works



<div id="parent">
  <button id="child">Click Me</button>
</div>


 attach event listeners:

document.getElementById("child").addEventListener("click", function() {
  alert("Child clicked");
});

document.getElementById("parent").addEventListener("click", function() {
  alert("Parent clicked");
});

document.body.addEventListener("click", function() {
  alert("Body clicked");
});

When  click the button:

Event first triggers on the button (child).

Then it bubbles up to the parent <div>.

Finally, it goes up to the <body>.

see alerts in this order: Child → Parent → Body



 4. What is **Event Delegation** in JavaScript? Why is it useful?

 Ans:
 Event Delegation is a JavaScript technique where instead of adding event listeners to multiple child elements, you add a single event listener to a parent element and handle events as they bubble up from the children.

 Performance → Fewer event listeners = less memory usage.

Dynamic Elements → Works even for elements added later to the parent (no need to re-attach listeners).

Cleaner Code → Manage all child events in one place.

🔹 Real-Life Use Case

Handling clicks on menu items (<ul><li>…</li></ul>)

Table row clicks

Form field validations

Infinite scrolling lists (dynamic content)


5. What is the difference between **preventDefault() and stopPropagation()** methods?

Ans:
    Key Difference
    Method	                           What it Does
preventDefault()	Stops the browser’s default behavior (e.g., link navigation, form submission) but event still propagates.
stopPropagation()	Stops the event from bubbling up (or trickling down) the DOM tree but default behavior still happens.
 



 















   











---



