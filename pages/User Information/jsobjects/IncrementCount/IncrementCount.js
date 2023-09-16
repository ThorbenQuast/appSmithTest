export default {
        counter: 1,
        increment() {
            this.counter = this.counter + 1
					return this.counter;
        },
        decrement() {
            this.counter = this.counter - 1
					return this.counter;
        }
}