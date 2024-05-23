# Drag & Drop System
Simple, easy to use drag & drop system

[NPM Package]()

### How it works
this system only relies on 3 scripts:
- **cSharpEvent.js:** Creates C#-like action system
+ **mouseEventHandler.js:** Checks the DOM mouse events on the document body then triggers a C#-like event
* **dragHandler.js:** Listens to the events triggered by `mouseEventHandler.js`, checks if the element is draggable, call `dragElement()` for the dragged element

### How to use
1. Make sure all the 3 scripts are initialized
2. add the **custom-draggable** html class to elements you wish to be draggable
3. add the **custom-droppable** html class to elements you wish to be a drop-box

### FREE PALESTINE 🇵🇸