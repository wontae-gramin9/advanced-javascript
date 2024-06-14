// Subscription model where objects(obeservers) listen to events
// and get notified when events occur

// Js event handling in browers(Dom event listeners) is built upon the Observer pattern
// RxJs is a package that makes this easy
// Frontend frameworks are built on this, where state changes and component re-renders.

class Subject {
  constructor() {
    this.observers = []
  }
  subscribe(observer) {
    this.observers.push(observer)
  }
  unsubscribe(observer) {
    this.observers = this.observers.filter((o) => o !== observer)
  }
  notify(data) {
    this.observers.forEach((o) => o.recieve(data))
  }
}

class Observer {
  constructor(name) {
    this.name = name
  }
  recieve(data) {
    console.log(
      `${this.name} received data: ${data}`
    );
  }
}

const colt = new Observer("Colt");
const daniel = new Observer("Daniel");

const puppyBlog = new Subject();
puppyBlog.subscribe(colt);
puppyBlog.subscribe(daniel);

puppyBlog.notify("Today's weather is hot")
