const BTC_LAST_UPDATE_KEY = 'btcValue';
const BTC_TO_USD_2016 = 453.99;

function init() {
    // Hide Result section
    toggleResultSection(true);
    getBtcValue();
    addListeners();
}

function toggleResultSection(forceHide = false) {
    const resultSection = document.querySelector("#result");
    const isHidden = resultSection.classList.contains('hidden');

    if(forceHide) {
        if(isHidden) resultSection.classList.remove('hidden');
        resultSection.classList.add('hidden');
        return;
    }

    isHidden ? resultSection.classList.remove('hidden') : resultSection.classList.add('hidden');
}

function fetchBtcValue(onResponse = (res) => {}, onError = (e) => {}) {
    fetch('https://blockchain.info/ticker').then(response => {
        return response.json();
    }).then(json => {
        onResponse(json);
    }).catch(e => onError(e));
}

function getBtcValue(onFinish = (value) => {}) {
    const lastUpdated = localStorage.getItem(BTC_LAST_UPDATE_KEY);
    const data = lastUpdated ? JSON.parse(lastUpdated) : {};
    const isExpired = isValueExpired(data.expiresAt);

    if(!lastUpdated || isExpired) {
        console.log('Fetching...');
        fetchBtcValue((json) => {
            const value = json['USD'].last;
            /** Expires in 5 minutes */
            const expiresAt = (new Date()).getTime() + (60000 * 5);
            localStorage.setItem(BTC_LAST_UPDATE_KEY, JSON.stringify({ value, expiresAt }))
            onFinish(value);
        }, (e) => console.log('Cannot fetch BTC Value. Error: ', e));
        return;
    }

    onFinish(data.value);
}

function isValueExpired(expiresAt = undefined) {
    if(!expiresAt) true;

    const now = (new Date()).getTime();

    return now >= expiresAt;
}

function onSubmitForm(event) {
    const input = document.querySelector('input#amount');
    event.preventDefault();

    if(!input.value) return;
    calculateUpdatedValues(input.value);
}

function calculateUpdatedValues(amount = 0) {
    const btcAmount = amount / BTC_TO_USD_2016;
    getBtcValue(value => {
        const updatedUsd = value * btcAmount;
        showResults(amount, btcAmount, updatedUsd);
    })
}

function showResults(amountBought = 0, btcAmount = 0, updatedUSD = 0) {
    const amountBoughtElement = document.querySelector('#amount-bought-usd');
    const btcAmountElement = document.querySelector('#btc-amount');
    const usdAmountElement = document.querySelector('#usd-amount');
    
    amountBoughtElement.textContent = amountBought;
    btcAmountElement.textContent = btcAmount.toFixed(8);
    usdAmountElement.textContent = updatedUSD.toFixed(2);

    toggleResultSection(true);
    toggleResultSection();
}

function addListeners() {
    const form = document.querySelector('form');
    form.addEventListener('submit', onSubmitForm);
}



init();