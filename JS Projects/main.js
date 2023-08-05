const prompt = require("prompt-sync")();

const deposit = () => {

    while (true) {
        const DepositAmout = prompt("Insert a deposit amout: ");
        const numberDepositAmout = parseFloat(DepositAmout);

        if (isNaN(numberDepositAmout) || numberDepositAmout <= 0 ) {
