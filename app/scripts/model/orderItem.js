import Backbone from 'backbone';

export default Backbone.Model.extend({
  idAttribute:'_id',
  rootUrl: 'https://tiny-za-server.herokuapp.com/collections/drakesorderItems'

});
