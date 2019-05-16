"use strict"

const url = "https://api.coinlore.com/api/tickers/?start=0&limit=100"

function addCoin0(object) {
    const coin = document.getElementById('0');
    coin.textContent = object.data[0].name;
    return '#{coin}';
}

function addCoin1(object) {
    const coin = document.getElementById('1');
    coin.textContent = object.data[1].name;
    return '#{coin}';
}

function addCoin2(object) {
    const coin = document.getElementById('2');
    coin.textContent = object.data[2].name;
    return '#{coin}';
}

function addCoin3(object) {
    const coin = document.getElementById('3');
    coin.textContent = object.data[3].name;
    return '#{coin}';
}

function addCoin4(object) {
    const coin = document.getElementById('4');
    coin.textContent = object.data[4].name;
    return '#{coin}';
}

function addCoin5(object) {
    const coin = document.getElementById('5');
    coin.textContent = object.data[5].name;
    return '#{coin}';
}

function addCoin6(object) {
    const coin = document.getElementById('6');
    coin.textContent = object.data[6].name;
    return '#{coin}';
}

function addCoin7(object) {
    const coin = document.getElementById('7');
    coin.textContent = object.data[7].name;
    return '#{coin}';
}

function addCoin8(object) {
    const coin = document.getElementById('8');
    coin.textContent = object.data[8].name;
    return '#{coin}';
}

function addCoin9(object) {
    const coin = document.getElementById('9');
    coin.textContent = object.data[9].name;
    return '#{coin}';
}

function addCoin10(object) {
    const coin = document.getElementById('10');
    coin.textContent = object.data[10].name;
    return '#{coin}';
}

function addCoin11(object) {
    const coin = document.getElementById('11');
    coin.textContent = object.data[11].name;
    return '#{coin}';
}

function addCoin12(object) {
    const coin = document.getElementById('12');
    coin.textContent = object.data[12].name;
    return '#{coin}';
}

function addCoin13(object) {
    const coin = document.getElementById('13');
    coin.textContent = object.data[13].name;
    return '#{coin}';
}

function addCoin14(object) {
    const coin = document.getElementById('14');
    coin.textContent = object.data[14].name;
    return '#{coin}';
}

function addCoin15(object) {
    const coin = document.getElementById('15');
    coin.textContent = object.data[15].name;
    return '#{coin}';
}



// function addCoin1(object) {
//     const coin = document.createElement('div');
//     const coinName = document.getElementById('1');
//     coin.textContent = object.data[1].name;
//     coinName.appendChild(coin);
// }


// function addCoin2(object) {
//     const coin = document.createElement('div');
//     const coinName = document.getElementById('2');
//     coin.textContent = object.data[2].name;
//     coinName.appendChild(coin);
// }

function loadData(){
    get(url)
    .then((response) => {
        console.log('loadData has run', response);
        addCoin0(response);
        addCoin1(response);
        addCoin2(response);
        addCoin3(response);
        addCoin4(response);
        addCoin5(response);
        addCoin6(response);
        addCoin7(response);
        addCoin8(response);
        addCoin9(response);
        addCoin10(response);
        addCoin11(response);
        addCoin12(response);
        addCoin13(response);
        addCoin14(response);
        addCoin15(response);
    })
}

loadData();

function get(url) {
    return fetch(url)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            console.log('get has been run');
            return data;
        })
        .catch(function(error) {
            return error;
        });
}