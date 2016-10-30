import $ from 'jquery';

function renderOrder(item){
  let stuffin=$(`<li class="order-items">
    <h5>${item.name}</h5>
    <span>$${item.price}</span>
    </li>`);
  return stuffin;

}


export default renderOrder;
