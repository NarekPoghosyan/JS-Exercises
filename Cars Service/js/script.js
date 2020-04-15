const cars = [
    {
        model: 'MERCEDES BENZ',
        year: 2019,
        owner: 0,
        service: 1,
        url: "https://www.mercedes-benz.com/en/vehicles/mobile-world-congress-2019/_jcr_content/root/paragraph/paragraph-right/paragraphimage/image/MQ6-8-image-20190220131232/03-mercedes-benz-design-2019-cla-coupe-c-118-cla-250-amg-line-cosmos-black-metallic-edition-1-orange-art-2560x1440.jpeg",
    },
    {
        model: 'BMW',
        year: 2015,
        owner: 1,
        service: 1,
        url: "https://images.fitmentindustries.com/web/830924-1-2015-m5-bmw-base-kw-lowering-springs-hamann-anniversary-evo-silver.jpg",
    },
    {
        model: 'AUDI',
        year: 2001,
        owner: 0,
        service: 0,
        url: "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/2005-Audi-A4.jpg",
    },
    {
        model: 'LEXUS',
        year: 2000,
        owner: 2,
        service: 0,
        url: "https://images.autotrader.com/scaler/620/420/cms/images/oversteer/2017/06-jun/willbyrdis300/266256.jpg",
    }
]
const owner = [
    {
        name: 'Armen',
        index: 0,
    },
    {
        name: 'Narek',
        index: 1,
    },
    {
        name: 'Hayk',
        index: 2,
    }
]
const service = [
    {
        serviceName: 'Mec Aniv',
        index: 0,
    },
    {
        serviceName: 'Poqr Aniv',
        index: 1,
    },
];

// 1 - Գտնել քանի մեքենա է սպասարկվում ամեն սերվիսում
// let result = service.map(function(elem) {
//     let auto = cars.filter(function(item) {
//         return elem.index == item.service;
//     });
//     return auto;
// });

// console.log(result)

// 2 - Գտնել Նարեկի բոլոր մեքենաները
// let narekCars = owner.find(function (elem) {
//     return elem.index == 1;
// });

// let salon = cars.filter(function(item) {
//     return narekCars.index == item.owner;
// });

// console.log(salon);

// 3 - Գտնել տաս տարեկանից մեծ մեքենաները
// let yearCars = cars.filter(function (elem) {
//     return elem.year > 2010;
// });

// console.log(yearCars)

// 5 - Փոխել բոլոր մեքենաների տարեթվերը մեկ ով
// let addYear = cars.map(function (elem) {
//     return elem.year + 1;
// });

// console.log(addYear);

// 4  ev 6 - Ստեղծել ֆորմա որը կավելացնի մեքենա: Ֆորմայում գրենք , Մեքենայի անուն , տարեթիվ, և ընտրենք համապտասխան վարորդին 
// և սերվիսը և սեղմենք ավելացնել կոճակը, Կոճակը սեղմելուց մեքենան ավելանա cars, ի մեջ 
// Ցույց տալ մեքենաները կայքում
function addCars() {
    let car = {
        model: document.querySelector("#avtoyianun").value,
        year: +document.querySelector("#tvakan").value,
        owner: +document.querySelector("#shofer").value,
        service: +document.querySelector("#Service").value,
        url: document.querySelector("#url").value,
    }  
    cars.push(car);
    addCarInList(car);
}

function addCarInList(car) {
    let listCar = document.createElement("li");
    listCar.innerHTML = `Model:${car.model} Year:${car.year} Owner:${car.owner} Service:${car.service}`;
    if(car.url) {
        let img = document.createElement("img");
        img.setAttribute('src',car.url);
        img.style.width = "300px";
        img.style.height = "200px";
        listCar.appendChild(img);
    }
    document.querySelector("#list").appendChild(listCar);
}

cars.forEach(function(elem) {
    addCarInList(elem);
});

let avelacnel = document.querySelector("#avelacnel");
avelacnel.addEventListener('click', addCars);
