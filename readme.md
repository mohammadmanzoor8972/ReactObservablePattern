### Observable Pattern. Event base notification to component


export class Observerable {
  constructor() {
    this.subscribers = [];
  }

  subscribe(fn) {
    this.subscribers = [...this.subscribers, fn];
  }
  unsubscribe(fn) {
    this.subscribers = [...this.subscribers.filter(item => item !== fn)];
  }

  broadcast(data) {
    for (let i = 0; i < this.subscribers.length; i += 1) {
      this.subscribers[i](data);
    }
  }
}

const observer = new Observerable();

const fn = data => {
  console.log(`Received data`, { data });
};

observer.subscribe(fn);

// Broadcast a message to the subscribers
observer.broadcast('A broadcasted message');
