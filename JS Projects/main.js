const prompt = require("prompt-sync")();

const deposit = () => {

    while (true) {
        const DepositAmout = prompt("Insert a deposit amout: ");
        const numberDepositAmout = parseFloat(DepositAmout);

        if (isNaN(numberDepositAmout) || numberDepositAmout <= 0 ) {
            console.log("Invalid deposit amount, try again")
        } else {
            return numberDepositAmout;
        }
    }

};

const GetNumberOfLines = () => {
    while (true) {
        const lines = prompt("Enter number of lines to bet (1-3): ");
