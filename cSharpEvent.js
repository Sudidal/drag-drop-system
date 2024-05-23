class CSharpEvent {
  #listeners = [];

  constructor() {}

  add(listener) {
    this.#listeners.push(listener);
  }
  remove(listener) {
    for (let i = 0; i < this.#listeners.length; i++) {
      if (this.#listeners[i] === listener) {
        this.#listeners.splice(i, 1);
      }
    }
  }
  trigger(args) {
    this.#listeners.forEach((listener) => {
      listener(args);
    });
  }
}

export default CSharpEvent;
