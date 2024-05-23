# Drag & Drop System
Simple, easy to use drag & drop system

[NPM Package](https://www.npmjs.com/package/drag-drop-system)
[GitHub Repo](https://github.com/Sudidal/drag-drop-system)

### How it works
this system only relies on 3 scripts:
- **cSharpEvent.js:** Creates C#-like action system
+ **mouseEventHandler.js:** Checks the DOM mouse events on the document body then triggers a C#-like event
* **dragHandler.js:** Listens to the events triggered by `mouseEventHandler.js`, checks if the element is draggable, call `dragElement()` for the dragged element

### How to use
1. Make sure all the 3 scripts are initialized
2. add the **custom-draggable** html class to elements you wish to be draggable
3. add both **custom-draggable** and **coward** classes to elements you wish to not be directly draggable, instead create a clone of the element that will be dragged around, once you drop it, the original element will be appended by the droppable element
4. add the **custom-droppable** html class to elements you wish to be a drop-box

### FREE PALESTINE 🇵🇸