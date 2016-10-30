import $ from 'jquery';

function renderOrder(item,i,arr){
  let stuffin=$(`<li class="order-items">
    <h5>${item.name}</h5>
    <span>$${item.price}</span>
    <button>X</button>
    </li>`);

    // stuffin.find('button').on('click',(e)=>{
    //   console.log(arr);
    // });
  return stuffin;

}


export default renderOrder;
