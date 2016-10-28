import $ from 'jquery';

function renderOrder(orderItem){
  let stuffin=$(`<li class="order-items">
    <h5>${orderItem.name}</h5>
    <span>$${orderItem.price}</span>
    <button>X</button>
    </li>`);
stuffin.find('button').on('click',(e)=>{
  console.log(item.id);
  // item.destroy({
  //   success:function(response){
  //     console.log('item-removed',response);
  //
  //   }
  // });
});
  return stuffin;
}


export default renderOrder;
