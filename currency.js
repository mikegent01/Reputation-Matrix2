const WALLET_DATA = {
    archie: {
        name: "Archie Miser",
        midland_ducat: 40,
        gold: 277,
        silver: 6,
        bronze: 18
    },
    bowser: {
        name: "Bowser",
        gold: 15
    },
    humpik: {
        name: "Humpik",
        gold: 5,
        midland_ducat: 426
    },
    markop: {
        name: "Markop Judi",
        gold: 51,
        silver: 6,
        bronze: 15
    }
};

const EXCHANGE_RATES = {
    // Base unit is Gold (G)
    midland_ducat: { to_gold: 1 / 3.7, name: "Midland Ducats", icon: "icon_midland_ducat.png" }, // Approx 0.27
    mushroom_coin: { to_gold: 0.2, name: "Mushroom Kingdom Coins", icon: "icon_mushroom_coin.png" },
    gold: { to_gold: 1, name: "Gold", icon: "icon_gold.png" },
    silver: { to_gold: 0.1, name: "Silver", icon: "icon_silver.png" },
    bronze: { to_gold: 0.01, name: "Bronze", icon: "icon_bronze.png" },
    legion_scrip: { to_gold: 0.8, name: "Iron Legion Scrip", icon: "faction_iron_legion.png"},
    blood_vial: { to_gold: 1.5, name: "Onyx Blood Vial", icon: "faction_onyx_hand.png"},
    spirit_bead: { to_gold: 1.2, name: "Rakasha Spirit Bead", icon: "faction_rakasha.png"}
};

function renderExchangeRates() {
    return `
        <div class="currency-card">
            <h3>Primary Exchange Rates</h3>
            <div class="exchange-rate-display">
                <div class="currency-info">
                    <img src="${EXCHANGE_RATES.gold.icon}" alt="Gold Piece">
                    <p>1 Gold Piece</p>
                </div>
                <div class="exchange-arrows">&rlarr;</div>
                <div class="currency-info">
                    <img src="${EXCHANGE_RATES.midland_ducat.icon}" alt="Midland Ducat">
                    <p>3.7 Midland Ducats</p>
                </div>
            </div>
            <p class="exchange-rate-value">OFFICIAL RATE SET BY MIDLANDS CENTRAL BANK</p>
        </div>
    `;
}

function renderLocalCurrencies() {
     const gold_to_silver = 1 / EXCHANGE_RATES.silver.to_gold;
     const silver_to_bronze = EXCHANGE_RATES.silver.to_gold / EXCHANGE_RATES.bronze.to_gold;

    return `
         <div class="currency-card">
            <h3>Local & Lesser Currencies</h3>
            <ul class="local-currency-list">
                <li>1 <strong>Gold</strong> = 5 <strong>Mushroom Kingdom Coins</strong></li>
                <li>1 <strong>Gold</strong> = ${gold_to_silver} <strong>Silver</strong></li>
                <li>1 <strong>Silver</strong> = ${silver_to_bronze} <strong>Bronze</strong></li>
                <li>1 <strong>Onyx Blood Vial</strong> = ${EXCHANGE_RATES.blood_vial.to_gold} <strong>Gold</strong></li>
                <li>1 <strong>Rakasha Spirit Bead</strong> = ${EXCHANGE_RATES.spirit_bead.to_gold} <strong>Gold</strong></li>
                <li>1 <strong>Iron Legion Scrip</strong> = ${EXCHANGE_RATES.legion_scrip.to_gold} <strong>Gold</strong></li>
            </ul>
        </div>
    `;
}

function renderPartyWallets() {
    let walletsHTML = '<div class="currency-grid">';

    for (const charKey in WALLET_DATA) {
        const character = WALLET_DATA[charKey];
        let totalValueInGold = 0;
        let currencyLinesHTML = '';

        const currencyOrder = ['midland_ducat', 'mushroom_coin', 'gold', 'silver', 'bronze', 'legion_scrip', 'blood_vial', 'spirit_bead'];

        currencyOrder.forEach(currencyKey => {
            if (character[currencyKey]) {
                const amount = character[currencyKey];
                const rateInfo = EXCHANGE_RATES[currencyKey];
                totalValueInGold += amount * rateInfo.to_gold;

                currencyLinesHTML += `
                    <div class="currency-line-item">
                        <img src="${rateInfo.icon}" alt="${rateInfo.name}">
                        <span class="currency-amount">${amount.toLocaleString()}</span>
                        <span class="currency-name">${rateInfo.name}</span>
                    </div>
                `;
            }
        });

         if (currencyLinesHTML === '') {
            currencyLinesHTML = `<p class="text-secondary" style="text-align: center; padding: 20px 0;">Wallet is empty.</p>`;
        }

        walletsHTML += `
            <div class="currency-card wallet-card">
                <h4 class="wallet-header">${character.name}</h4>
                <div class="wallet-contents">
                    ${currencyLinesHTML}
                </div>
                <div class="total-value-container">
                    <p>Est. Total Value: <span class="total-value">${totalValueInGold.toFixed(2)} G</span></p>
                </div>
            </div>
        `;
    }

    walletsHTML += '</div>';
    return walletsHTML;
}


function init() {
    const container = document.getElementById('currency-container');
    if (!container) return;

    let fullHTML = `
        <div class="currency-grid">
            ${renderExchangeRates()}
            ${renderLocalCurrencies()}
        </div>
        <h3 class="page-title" style="margin-top: 32px; font-size: 1.5rem; color: var(--text-secondary);">Party Wallets</h3>
        ${renderPartyWallets()}
    `;
    
    container.innerHTML = fullHTML;
}

init();
