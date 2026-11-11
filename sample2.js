const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter shopping amount: ", function(amount) {

    rl.question("Are you a premium member? (yes/no): ", function(premium) {

        amount = Number(amount);
        premium = premium.toLowerCase();

        if (amount > 5000 || premium === "yes") {

            let discount = amount * 20 / 100;
            let finalAmount = amount - discount;

            console.log("Eligible for 20% discount");
            console.log("Discount Amount: ₹" + discount);
            console.log("Final Amount: ₹" + finalAmount);

        }
        else {

            console.log("Not Eligible for Discount");
            console.log("Final Amount: ₹" + amount);

        }

        rl.close();

    });

});