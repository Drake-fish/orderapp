import $ from 'jquery';
import Backbone from 'backbone';
import EntreItems from './collection/entreItems';
import Games from './collection/games';
import BeerItems from './collection/Items';
import Item from './model/Item';
import renderCourseList from './views/course';
import renderItem from './views/menuitem';
import OrderItems from './collection/orderItems';
import orderItem from './model/orderItem';
import renderOrderItems from './views/order.js';
import orderitem from './views/orderitem';
let orderItems= new OrderItems();
let beerItems= new BeerItems();
let entreeItems= new EntreItems();
let gameItems= new Games();
let menuContainer=$('.menu');
let orderContainer=$('.order');
const Router= Backbone.Router.extend({
  routes: {
    '' :'home'
  },
  home(){
    orderItems.fetch();
    entreeItems.fetch();
    gameItems.fetch();
    beerItems.fetch();
    console.log(orderItems);
    orderContainer.append(renderOrderItems(orderItems));
    menuContainer.append(renderCourseList(entreeItems,gameItems,beerItems,orderItems));

  }


});

const router= new Router();

export default router;
