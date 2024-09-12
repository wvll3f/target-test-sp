class StateBilling {
    constructor(faturamentos) {
        this.billing = billing;
        this.total = this.totalCalc();
    }

    totalCalc() {
        return Object.values(this.billing).reduce((acc, val) => acc + val, 0);
    }

    percentageByState() {
        for (const estado in this.billing) {
            const percentual = (this.billing[estado] / this.total) * 100;
            console.log(`${estado}: ${percentual.toFixed(2)}%`);
        }
    }
}

const stateBilling = new StateBilling({
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
});

stateBilling.percentageByState();