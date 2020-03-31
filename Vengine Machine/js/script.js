let vendingMachine = {
    products: {
        drinks:[
            {
                name:'cola',
                code: 'a1',
                price: 300,
                quantity: 7,
            },
            {
                name:'fanta',
                code: 'a2',
                price: 350,
                quantity: 6,
            },
            {
                name:'sprite',
                code: 'a3',
                price: 270,
                quantity: 0,
            },
        ],
        chocolate:[
            {
                name:'snickers',
                code: 'b1',
                price: 220,
                quantity: 9,
            },
            {
                name:'mars',
                code: 'b2',
                price: 200,
                quantity: 7,
            },
            {
                name:'bounty',
                code: 'b3',
                price: 210,
                quantity: 8,
            },
        ],
        chips:[
            {
                name:'pringles',
                code: 'c1',
                price: 930,
                quantity: 5,
            },
            {
                name:'chitos',
                code: 'c2',
                price: 240,
                quantity: 6,
            },
            {
                name:'doritos',
                code: 'c3',
                price: 430,
                quantity: 7,
            },
        ],
    },
};

function sellProduct(product) {
    let money = +prompt('enter money');
    let exchange = money - product.price;
    alert(`Take your product ${product.name} \n Youre exchange ${exchange}`);
    product.quantity--;
}

function buy(productType) {
    let productCode;
    let product;
    if (productType == 'drinks' || productType == 1) {
        do {
            productCode = prompt('cola(code - a1),fanta(code - a2),sprite(code - a3)');
        } while (productCode != 'a1' && productCode != 'a2' && productCode != 'a3');
        product = vendingMachine.products.drinks.find(function(elem) {
            return elem.code == productCode && elem.quantity > 0;
        });
    }
    if (productType == 'chocolate' || productType == 2) {
        do {
           productCode = prompt('snickers(code - b1),mars(code - b2),bounty(code - b3)');
        } while (productCode != 'b1' && productCode != 'b2' && productCode != 'b3');
        product = vendingMachine.products.chocolate.find(function(elem) {
            return elem.code == productCode && elem.quantity > 0;
        });
    }
    if (productType == 'chips' || productType == 3) {
        do {
            productCode = prompt('pringles(code - c1),chitos(code - c2),doritos(code - c3)');
        } while (productCode != 'c1' && productCode != 'c2' && productCode != 'c3');
        product = vendingMachine.products.chips.find(function(elem) {
            return elem.code == productCode && elem.quantity > 0;
        });
    }

    if(product == undefined) {
        alert('Apranqy verjacele');
        runVendingMachine();
    } else {
        sellProduct(product);
    }
}

function addProduct(productType) {
    let productCode;
    let product;
    if (productType == 'drinks' || productType == 1) {
        do {
            productCode = prompt('cola(code - a1),fanta(code - a2),sprite(code - a3)');
        } while (productCode != 'a1' && productCode != 'a2' && productCode != 'a3');
        product = vendingMachine.products.drinks.find(function(elem){
            return elem.code == productCode;
        });
    }
    if (productType == 'chocolate' || productType == 2) {
        do {
           productCode = prompt('snickers(code - b1),mars(code - b2),bounty(code - b3)');
        } while (productCode != 'b1' && productCode != 'b2' && productCode != 'b3');
        product = vendingMachine.products.chocolate.find(function(elem) {
            return elem.code == productCode;
        });
    }
    if (productType == 'chips' || productType == 3) {
        do {
            productCode = prompt('pringles(code - c1),chitos(code - c2),doritos(code - c3)');
        } while (productCode != 'c1' && productCode != 'c2' && productCode != 'c3');
        product = vendingMachine.products.chips.find(function(elem) {
            return elem.code == productCode;
        });
    }
    if(product == undefined) {
        alert('Chunenq ayd apranqic');
        runVendingMachine();
    } else {
    let addQuantity = +prompt('avelacvox qanaky');
        product.quantity = product.quantity + addQuantity;
        alert(`Apranqy avelacvel e ${addQuantity} qanaky ${product.quantity}`);
    }
}

function runVendingMachine() {
    let start;
    let productType;
    do {
        start = prompt('Greq (gnel or 1) kam Greq (avelacnel or 2) apranq');
    } while(start != 'gnel' && start != 1 && start != 'avelacnel' && start != 2);
    do {
        productType = prompt('Choose products - drinks(1), chcocolate(2), chips(3)');
    } while (productType != 'drinks' && productType != 1 && productType != 'chocolate' && productType != 2 && productType != 'chips' && productType != 3);
    if(start == 'gnel' || start == 1) {
        buy(productType);
    }
    if(start == 'avelacnel' || start == 2) {
        addProduct(productType);
    }
}

runVendingMachine();
