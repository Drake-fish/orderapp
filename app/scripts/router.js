import $ from 'jquery';
import Backbone from 'backbone';
import EntreItems from './collection/entreItems';
import Games from './collection/games';
import BeerItems from './collection/Items';
import Item from './model/Item';
import renderCourseList from './views/course';
import renderItem from './views/menuitem';
// import AllItems from './collection/allitems';
import renderOrderItems from './views/order.js';
// let allItems= new AllItems();
let beerItems= new BeerItems();
let entreeItems= new EntreItems();
let gameItems= new Games();
let menuContainer=$('.menu');
let orderContainer=$('.order');
const Router= Backbone.Router.extend({
  routes: {
    '' :'home'
    // ':id':'orderPop'
  },
  home(){
    // allItems.fetch();
    entreeItems.fetch();
    gameItems.fetch();
    beerItems.fetch();
    // console.log(allItems);
    menuContainer.append(renderCourseList(entreeItems,gameItems,beerItems));

  }
  // orderPop(){
  //   entreeItems.fetch();
  //   gameItems.fetch();
  //   beerItems.fetch();
  //   menuContainer.append(renderCourseList(entreeItems,gameItems,beerItems));
  //   allItems.fetch();
  //   console.log(allItems);
  //   orderContainer.append(renderOrderItems(allItems));
  // }

});

const router= new Router();

export default router;
