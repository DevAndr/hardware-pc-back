class Card {
    title;
    icon;
    description;
    stores;

    constructor(title, icon, description, stores) {
        this.title = title;
        this.icon = icon;
        this.description = description;
        this.stores = stores;
    }
}

module.exports = Card;