import $ from 'jquery';
function renderItem(item,orderItems) {

    const content = $(
        `<div class="items">
    <h3>${item.get('item')}</h3>
    <span>$${item.get('price')}</span><br>
    <p>${item.get('description')}</p>
  </div>`
    );
    content.on('click',(e)=>{
      orderItems.create({
        name: item.get('item'),
        price: item.get('price')
      });
      console.log('order-created');

    });
    return content;


}

export default renderItem;
