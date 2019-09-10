class Dispatcher {
  constructor(store) {
    this.store = store;
  }
  dispatch(actionType, payload) {
    this.store.dispatch(actionType, payload);
  }
}

let instance;
export function createDispatcher(store) {
  instance = new Dispatcher(store);
  return instance;
}

export function getDispatcher() {
  return instance;
}
