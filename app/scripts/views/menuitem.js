import $ from 'jquery';
function renderItem(item,orderItem) {

    const content = $(
        `<div class="items">
    <h3>${item.get('item')}</h3>
    <span>$${item.get('price')}</span><br>
    <p>${item.get('description')}</p>
  </div>`
    );
    content.on('click',(e)=>{
      orderItem.addItem({
        name : item.get('item'),
        price: item.get('price')
          });
      orderItem.addPrice(item.get('price'));
      orderItem.calculateTotal(item.get('price'));
      orderItem.calculateTax(item.get('price'));
      console.log(orderItem);

    });
    return content;


}

export default renderItem;
