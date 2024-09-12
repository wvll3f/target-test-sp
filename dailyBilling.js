class dailyBilling {
    constructor(data) {
        this.data = data.filter(d => d.value > 0); // Ignora dias sem faturamento
    }

    lowerTurnover() {
        return Math.min(...this.data.map(d => d.value));
    }

    highestTurnover() {
        return Math.max(...this.data.map(d => d.value));
    }

    aboveAverage() {
        const average = this.data.reduce((acc, d) => acc + d.value, 0) / this.data.length;
        return this.data.filter(d => d.value > average).length;
    }
}

const faturamento = new dailyBilling([
    { day: 1, value: 100 },
    { day: 2, value: 200 },
    { day: 3, value: 0 }, 
    { day: 4, value: 300 },
    { day: 5, value: 500 }
]);

console.log(`Menor faturamento: ${faturamento.lowerTurnover()}`);
console.log(`Maior faturamento: ${faturamento.highestTurnover()}`);
console.log(`Dias acima da média: ${faturamento.aboveAverage()}`);