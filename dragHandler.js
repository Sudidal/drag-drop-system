import {
  OnMouseMove,
  OnMouseUp,
  OnMouseDragStart,
} from "./mouseEventHandler.js";

const DRAGGABLE_CLASS = "custom-draggable";
const DROPPABLE_CLASS = "custom-droppable";

OnMouseDragStart.add(handleDrag);

function handleDrag(ev) {
  console.log("fired");
  if (ev.target.classList.contains(DRAGGABLE_CLASS)) {
    ev.preventDefault();
    dragElement(ev);
  }
}

function dragElement(ev) {
  console.log("started dragging");
  const element = ev.target;
  let offsetX = ev.offsetX;
  let offsetY = ev.offsetY;
  let beingDragged = true;

  OnMouseUp.add(onDragEnd);
  OnMouseMove.add(onDrag);
  element.style = "pointer-events: none";
  element.style.position = "absolute";
  console.log(
    "setting document body height to 100vh, remove it or edit it if you want"
  );
  document.body.style = "height: 100vh";

  function onDrag(ev) {
    console.log("being dragged");
    setPostionToMouse(ev.pageX, ev.pageY);
  }
  function onDragEnd(ev) {
    if (beingDragged) {
      console.log("not being dragged anymore");
      beingDragged = false;
      OnMouseMove.remove(onDrag);
      OnMouseUp.remove(onDragEnd);
      handleDrop(ev.target);
    }
  }

  function setPostionToMouse(mouseX, mouseY) {
    const x = mouseX - offsetX;
    const y = mouseY - offsetY;

    console.log(x);
    console.log(y);
    element.style.top = `${y}px`;
    element.style.left = `${x}px`;
  }
  function handleDrop(target) {
    element.style.position = "static";
    element.style = "pinter-events: auto";
    console.log(target);
    if (target && target.classList.contains(DROPPABLE_CLASS)) {
      target.append(element);
    }
  }
}
