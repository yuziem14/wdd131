const filters = {
    'exchange': (item) => item.type == 'exchange',
    'hotwallet': (item) => item.type == 'hotwallet',
    'hardwallet': (item) => item.type == 'hardwallet',
    'all': (item) => true
}

const items = [
    {
        name: 'Binance',
        image: 'images/logos/binance-exchange.webp',
        description: 'Exchange',
        type: 'exchange'
    },
    {
        name: 'Blue Wallet',
        image: 'images/logos/blue-hot-wallet.webp',
        description: 'Hot Wallet',
        type: 'hotwallet'
    },
    {
        name: 'MetaMask',
        image: 'images/logos/metamask-hot-wallet.jpg',
        description: 'Hot Wallet',
        type: 'hotwallet'
    },
    {
        name: 'NGrave',
        image: 'images/logos/ngrave-hard-wallet.png',
        description: 'Hardware Wallet',
        type: 'hardwallet'
    },
    {
        name: 'Bipa',
        image: 'images/logos/bipa-exchange.png',
        description: 'Exchange',
        type: 'exchange'
    },
    {
        name: 'CoinBase',
        image: 'images/logos/coinbase-exchange.webp',
        description: 'Exchange',
        type: 'exchange'
    },
    {
        name: 'Exodus',
        image: 'images/logos/exodus-hot-wallet.png',
        description: 'Hot Wallet',
        type: 'hotwallet'
    },
    {
        name: 'Kraken',
        image: 'images/logos/kraken-exchange.jpg',
        description: 'Exchange',
        type: 'exchange'
    },
    {
        name: 'SafePal',
        image: 'images/logos/safepal-hard-wallet.png',
        description: 'Hardware Wallet',
        type: 'hardwallet'
    },
    {
        name: 'Trust',
        image: 'images/logos/trust-hot-wallet.jpg',
        description: 'Hot Wallet',
        type: 'hotwallet'
    },
    {
        name: 'Trezor',
        image: 'images/logos/trezor-hard-wallet.png',
        description: 'Hardware Wallet',
        type: 'hardwallet'
    },
    {
        name: 'Ledger',
        image: 'images/logos/ledger-hard-wallet.jpg',
        description: 'Hardware Wallet',
        type: 'hardwallet'
    }
]

function populateList(data = []) {
    const listElement = document.querySelector('#itemsList');

    const itemsHtml = data.map(item => `
        <li class="item" data-type="${item.type}">
            <h4>${item.name}</h4>
            <img src="${item.image}" alt="${item.name} ${item.description}" loading="lazy">
            <p>${item.description}</p>
        </li>    
    `);

    listElement.innerHTML = itemsHtml.join('');
}

function addListener() {
    const selectInput = document.querySelector('#tool-type');
    selectInput.addEventListener('change', (option) => {
        const type = option.target.value;
        populateList(items.filter(filters[type]));
    })
}

function init() {
    populateList(items);
    addListener();
}

init();