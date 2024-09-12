class StringReverser {
    constructor(text) {
        this.text = text;
    }

    reverse() {
        let reversed = '';
        for (let i = this.text.length - 1; i >= 0; i--) {
            reversed += this.text[i];
        }
        return reversed;
    }

    displayReversed() {
        console.log(`String invertida: ${this.reverse()}`);
    }
}

const stringReverser = new StringReverser('Hello World');
stringReverser.displayReversed();