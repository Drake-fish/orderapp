import Backbone from 'backbone';

export default Backbone.Model.extend({
    idAttribute: '_id',
    rootUrl: 'https://tiny-za-server.herokuapp.com/collections/drakesorderItems',
    defaults: {
        time: new Date(),
        order: [],
        prices: [],
        total: 0,
        tax: 0
    },
    addItem(newItem) {
        this.set('order', this.get('order').concat(newItem));
    },
    addPrice(newItem) {
        this.set('prices', this.get('prices').concat(newItem));
    },
    calculateTax() {
        let tax = this.get('prices').reduce(add, 0);

        function add(a, b) {
            return a + b * 0.08;
        }
        this.set({
            tax: Math.round(tax * 100)/100
        });
    },
    calculateTotal() {
        let total = this.get('prices').reduce(add, 0);

        function add(a, b) {
            return a + b;
        }
        this.set({
            total: Math.round(total*100)/100
        });
    },
    deleteItem(newItem) {
        let order = this.get('order');
        let newOrder = order.slice(1);
        let prices = this.get('prices');
        let newPrices = prices.slice(1);

        this.set({
            prices: newPrices
        });
        this.set({
            order: newOrder
        });

    }

});
