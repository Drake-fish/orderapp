import $ from 'jquery';

function renderOrder(item,orderItem){
  let stuffin=$(`<li class="order-items">
    <h5>${item.name}</h5>
    <span>$${item.price}</span>
    <button>X</button>
    </li>`);

    // stuffin.find('button').on('click',(e)=>{
    // orderItem.calculateTax(item.get('price'));
    // orderItem.calculateTotal(item.get('price'));
    // });
  return stuffin;

}


export default renderOrder;
