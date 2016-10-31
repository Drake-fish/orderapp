import Backbone from 'backbone';
import item from '../model/Item';


export default Backbone.Collection.extend({
    model: item,
    url: 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/pub.json',
    parse: function(response) {
        return response.Beer;
    }

});
