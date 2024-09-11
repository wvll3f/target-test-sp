class Calculator {
    constructor(index) {
        this.index = index;
        this.sum = 0;
        this.k = 0;
    }

    Sum() {
        while (this.k < this.index) {
            this.k++;
            this.sum += this.k;
        }
        return this.sum;
    }
}

const calculator = new Calculator(13);
console.log(`O valor da soma é: ${calculator.Sum()}`);

