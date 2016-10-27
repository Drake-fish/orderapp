import $ from 'jquery';
import Backbone from 'backbone';
import EntreItems from './collection/entreItems';
import Games from './collection/games';
import BeerItems from './collection/Items';
import Item from './model/Item';
import renderCourseList from './views/course';
import renderItem from './views/menuitem';

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
      }
});

const router= new Router();

export default router;
