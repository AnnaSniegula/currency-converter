
{
const form = document.querySelector(".js-form");
const inputElement = document.querySelector(".js-currencyPLN");
const selectCurrency = document.querySelector(".js-selectCurrency");
const getResult = document.querySelector(".js-result");


    const calculateResult = (amount, currency) => {
        const rateEUR = 4.55;
        const rateUSD = 3.78;
     
    
        switch (currency) {
            case "USD":
               return amount / rateUSD;

            case "EUR":
                return amount / rateEUR;  
        }
           
    };

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const currency = selectCurrency.value;
    const amount = +inputElement.value;

    let result = calculateResult (amount, currency);

    getResult.innerText = `${result.toFixed(2)} ${currency}`;

    })

form.addEventListener("reset", () => {
        getResult.innerText = " ";
 
});
}
