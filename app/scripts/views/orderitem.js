import $ from 'jquery';

function renderOrder(item){
  let stuffin=$(`<li class="order-items">
    <h5>${item.get('name')}</h5>
    <span>$${item.get('price')}</span>
    <button>X</button>
    </li>`);
stuffin.find('button').on('click',(e)=>{
  console.log(item.id);
  item.destroy({
    success:function(response){
      console.log('item-removed',response);

    }
  });
});
  return stuffin;
}


export default renderOrder;
