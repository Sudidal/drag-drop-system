import CSharpEvent from "./cSharpEvent.js";

const OnMouseMove = new CSharpEvent();
const OnMouseUp = new CSharpEvent();
const OnMouseDragStart = new CSharpEvent();

document.body.addEventListener("mousemove", (ev) => {
  OnMouseMove.trigger(ev);
});
document.body.addEventListener("mouseup", (ev) => {
  OnMouseUp.trigger(ev);
});
document.body.addEventListener("mousedown", (ev) => {
  OnMouseDragStart.trigger(ev);
});

export { OnMouseMove, OnMouseUp, OnMouseDragStart };
