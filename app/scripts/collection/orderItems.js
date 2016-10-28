import Backbone from 'backbone';
import orderItem from '../model/orderItem';


export default Backbone.Collection.extend({
  model:orderItem,
  url:'https://tiny-za-server.herokuapp.com/collections/drakesorderItems'

});
