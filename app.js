const api = "https://open.er-api.com/v6/latest/USD";

let finalValue = document.querySelector(".finalValue");
let finalAmount = document.querySelector(".finalAmount");
document.addEventListener('DOMContentLoaded', function () {
    const convert = document.querySelector('#convert');
    let currencyForm = document.querySelector("#currencyForm")

    currencyForm.addEventListener("submit", (e) => {
        e.preventDefault();
        // Get the values when the button is clicked
        const amount = document.querySelector('#amount').value;
        const fromCurrency = document.querySelector('#fromCurrency').value;
        const toCurrency = document.querySelector('#toCurrency').value;

        // Now you can use these values as needed in your logic
        console.log(amount);
        console.log(fromCurrency);
        console.log(toCurrency);
        // Add your conversion logic here
        fetch(`${api}`)
            .then(currency => {
                return currency.json();
            }).then((currency) => {
                let fromRate = currency.rates[fromCurrency];
                let toRate = currency.rates[toCurrency];
                let result =
                    ((toRate / fromRate) * amount).toFixed(2);
                finalValue.textContent = `${amount} ${fromCurrency} in ${toCurrency} is ${result}`
                finalAmount.style.display = "block";
            });

    });
});