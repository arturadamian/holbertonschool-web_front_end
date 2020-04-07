let stock = { macbook: 2, iphone: 4 } 
let processPayment = (itemName) => {
    stock[itemName] -= 1;
    console.log(`Payment is being processed for item ${itemName}`);
}
let processError = (itemName) => {
    console.log(`No more ${itemName} in stock`);
    console.log(`Payment is not being processed`);
}
let processOrder = (itemName, callbackPayment, callbackError) => {
    console.log(`Verifying the stock of ${itemName}`);
    (stock[itemName] > 0) ? processPayment(itemName) : processError(itemName);
}
let item = prompt("Please enter the item you would like to purchase (Macbook, iPhone");
if (!(item)) {
    console.log(`Please, enter the item`)
}
else {
    itemName = item.toLowerCase()
    !(itemName in stock) ? console.log(`Sorry, we dont have ${itemName}`) : processOrder(itemName)
}
