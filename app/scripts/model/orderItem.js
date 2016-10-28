import Backbone from 'backbone';

export default Backbone.Model.extend({
  idAttribute:'_id',
  rootUrl: 'https://tiny-za-server.herokuapp.com/collections/drakesorderItems',
  defaults:{
    time:new Date(),
    order:[]
  },
 addItem(newItem){
  this.set('order',this.get('order').concat(newItem));
},
addTotal(){
  let total=this.get('order').price;
  console.log(total);
  return total;
}
});
