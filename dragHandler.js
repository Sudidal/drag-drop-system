import {
  OnMouseMove,
  OnMouseUp,
  OnMouseDragStart,
} from "./mouseEventHandler.js";

const DRAGGABLE_CLASS = "custom-draggable";
const COWARD_CLASS = "coward";
const CLONE_CLASSS = "drag-clone";
const DROPPABLE_CLASS = "custom-droppable";

OnMouseDragStart.add(handleDrag);

function handleDrag(ev) {
  if (ev.target.classList.contains(DRAGGABLE_CLASS)) {
    dragElement(ev);
  }
}

function dragElement(ev) {
  console.log("started dragging");

  const element = ev.target;
  let dragElement = element;
  if (element.classList.contains(COWARD_CLASS)) {
    dragElement = element.cloneNode(true);
    element.append(dragElement);
    dragElement.classList.add(CLONE_CLASSS);
  }

  let offsetX = ev.offsetX;
  let offsetY = ev.offsetY;
  let beingDragged = true;

  OnMouseUp.add(onDragEnd);
  OnMouseMove.add(onDrag);
  dragElement.style = "pointer-events: none";
  console.log(
    "setting document body height to 100vh, remove it or edit it if you want"
  );
  document.body.style = "height: 100vh";
  setPostion(ev.pageX, ev.pageY);

  function onDrag(ev) {
    console.log("being dragged");
    setPostion(ev.pageX, ev.pageY);
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

  function setPostion(posX, posY) {
    const x = posX - offsetX;
    const y = posY - offsetY;

    console.log(x);
    console.log(y);
    dragElement.style.position = "absolute";
    dragElement.style.top = `${y}px`;
    dragElement.style.left = `${x}px`;
  }
  function handleDrop(target) {
    dragElement.style.position = "static";
    dragElement.style = "pinter-events: auto";
    console.log(target);
    if (target && target.classList.contains(DROPPABLE_CLASS)) {
      target.append(element);
    }
    if (dragElement !== element) dragElement.remove();
  }
}
