class Second {
  constructor(name) {
    this.name = name;
    console.log('Hello from Second');
  }

  getName() {
    return this.name;
  }
}

module.exports = Second;
