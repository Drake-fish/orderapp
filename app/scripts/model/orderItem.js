import Backbone from 'backbone';

export default Backbone.Model.extend({
  idAttribute:'_id',
  rootUrl: 'https://tiny-za-server.herokuapp.com/collections/drakesorderItems',
  defaults:{
    time:new Date(),
    order:[],
    prices:[],
    total:0,
    tax:0
  },
 addItem(newItem){
  this.set('order',this.get('order').concat(newItem));
},
 addPrice(newItem){
   let pricesArray=this.get('prices');
   let newPrices=pricesArray.concat(newItem);
   this.set({prices:newPrices});
 },
 calculateTotal(newItem){
   let runningTotal= this.get('total');
   let runningTax= this.get('tax');
   let addedItem= runningTotal + newItem + runningTax;
   this.set({total: Math.round(addedItem*100)/100});
 },
 calculateTax(newItem){
   let currentTax=this.get('tax');
   let addTax= currentTax + newItem * 0.08;
   this.set({tax: Math.round(addTax*100)/100});
 }

});
