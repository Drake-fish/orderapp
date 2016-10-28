import $ from 'jquery';
import Backbone from 'backbone';
import EntreItems from './collection/entreItems';
import Games from './collection/games';
import BeerItems from './collection/Items';
import Item from './model/Item';
import renderCourseList from './views/course';
import renderItem from './views/menuitem';
import OrderItems from './collection/orderItems';
import OrderItem from './model/orderItem';
import renderOrderItems from './views/order.js';
import orderitem from './views/orderitem';
let orderItem= new OrderItem();
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
    entreeItems.fetch();
    gameItems.fetch();
    beerItems.fetch();
    orderContainer.append(renderOrderItems(orderItem));
    menuContainer.append(renderCourseList(entreeItems,gameItems,beerItems,orderItem));

  }


});

const router= new Router();

export default router;
