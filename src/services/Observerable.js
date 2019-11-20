export class Observable {
  constructor() {
    this.subscriber = [];
  }

  subscribe(fn) {
    this.subscriber = [...this.subscriber, fn];
  }

  unsubscribe(fn) {
    this.subscriber = [...this.subscriber.filter(item => item !== fn)];
  }

  broadcast(data) {
    for (let x = 0; x < this.subscriber.length; x++) {
      this.subscriber[x](data);
    }
  }
}

export default new Observable();
