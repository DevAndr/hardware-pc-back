class Store {
    price;
    dateUpdatePrice;
    nameStore;
    priceFormat;
    priceChange;

    constructor(price, dateUpdatePrice, nameStore, priceFormat, priceChange) {
        this.price = price;
        this.dateUpdatePrice = dateUpdatePrice;
        this.nameStore = nameStore;
        this.priceFormat = priceFormat;
        this.priceChange = priceChange;
    }
}

module.exports = Store;