let form = document.querySelector(".js-form");
let inputElement = document.querySelector(".js-currencyPLN");
let selectCurrency = document.querySelector(".js-selectCurrency");
let getResult = document.querySelector(".js-result");




form.addEventListener("submit", (event) => {
    event.preventDefault();

    let rateEUR = 4.55;
    let rateUSD = 3.78;
    let currency = selectCurrency.value;

    switch (currency) {
        case "usd":
            let resultUSD = inputElement.value / rateUSD;
            getResult.innerText = resultUSD.toFixed(2) + " USD";
            break;

        case "eur":
            let resultEUR = inputElement.value / rateEUR;
            getResult.innerText = resultEUR.toFixed(2) + " EUR";
            break;

    }
    form.addEventListener("reset", () => {
        getResult.innerText = " ";
    });

});



// form.addEventListener("submit", (event) => {
//     event.preventDefault();

//     let resultEUR = inputElement.value / rateEUR;
//     getResult.innerText = resultEUR.toFixed(2) + " EUR";

// });
