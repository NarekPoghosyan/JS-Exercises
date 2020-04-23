let drinks = JSON.parse(localStorage.getItem("drinks"));
if(drinks == undefined) {
    drinks = [
            {name:'Coffee', price:100,},
            {name:'Tea', price:50,},
            {name:'Cola', price:200,},
        ];
    localStorage.setItem("drinks",JSON.stringify(drinks));
}

let cank = JSON.parse(localStorage.getItem("zangvac"));
if(cank == undefined) {
    cank = [];
}

do {
    drinkName = prompt('Enter drink name(coffee,tea,cola)');
} while (drinkName != "coffee" && drinkName != "tea" && drinkName != "cola");

let drink = drinks.find(function( elem) {
    return elem.name.toLowerCase() == drinkName;
})

let money;

do {
    money = +prompt('Enter money(1000,500,200,100,50)');
} while ((money != 1000 && money != 500 && money != 200 && money != 100 && money != 50) || money < drink.price);

let exchange = money - drink.price;

alert(`Thanks for purchase \n Your product ${drink} \n Your exchange ${exchange}AMD`);

let buyProducts = {
    name: `${drink.name}`,
    price: `${drink.price}`,
    money: `${money}`,
    exchange: `${exchange}`,
};

cank.push(buyProducts);
let jsonArrProducts = JSON.stringify(cank);

localStorage.setItem('zangvac',jsonArrProducts);

cank.forEach( function (item) {
    let menu = document.querySelector('ul');
    let blank = document.createElement('li');
    blank.innerHTML =  JSON.stringify(item);
    menu.appendChild(blank);
})

let shah = cank.reduce(function (a,b) {
        a += (+b.price);
        return a;
},0)

let button = document.querySelector('button');
button.addEventListener('click',nor);

function nor() {
    let ogut = document.querySelector('#ogut');
    ogut.innerHTML = shah;
}

// 2.Գրել ծրագիր որ ցույց կտա թե ինչ սարք եմ օգտագործում կայքը բացելուց, ժամը, իմ գտնված վայրը:

// 2.1 let userDeviceArray = [
//     {device: 'Android', platform: /Android/},
//     {device: 'iPhone', platform: /iPhone/},
//     {device: 'iPad', platform: /iPad/},
//     {device: 'Symbian', platform: /Symbian/},
//     {device: 'Windows Phone', platform: /Windows Phone/},
//     {device: 'Tablet OS', platform: /Tablet OS/},
//     {device: 'Linux', platform: /Linux/},
//     {device: 'Windows', platform: /Windows NT/},
//     {device: 'Macintosh', platform: /Macintosh/}
// ];

// let platform = navigator.userAgent;

// function getPlatform() {
//     for (let i in userDeviceArray) {
//         if (userDeviceArray[i].platform.test(platform)) {
//             return userDeviceArray[i].device;
//         }
//     }
//     return 'Անհայտ ծրագիր!' + platform;
// }

// console.log('Դուք օգտագործում եք: ' + getPlatform());


// 2.2 ժամը.....
// function printTime() {
//     let date = new Date();
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();
//     let time = document.querySelector('#time');
//     time.innerHTML = `${hours}:${minutes}:${seconds}`;
// }

// setInterval(printTime, 1000);

// 2.3 Գտնվելու Վայրը:
// navigator.geolocation.getCurrentPosition(function (chishtPatasxan) {
//     console.log("ashxatec", chishtPatasxan);
// }, function(sxalPatasxan) {
//     console.log("chashxatec",sxalPatasxan);
// })

// 3.Գտնել կայք որը օգտագործում է  localStorage կամ sessionStorage:
// Shamshyan.com, Google.com, YouTube.com, Facebook.com, Aliexpress.com, Amazon.com