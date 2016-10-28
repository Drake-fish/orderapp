import $ from 'jquery';
// import totalUpdate from './totalUpdate';
// import taxUpdate from './taxUpdate';
function renderItem(item) {

    const content = $(
        `<div class="items">
    <h3>${item.get('item')}</h3>
    <span>$${item.get('price')}</span><br>
    <p>${item.get('description')}</p>
  </div>`
    );
    content.on('click',(e)=>{
      const orderContainer=$('.order');
      let stuffin=$(`<h5>${item.get('item')}</h5><span>${item.get('price')}</span>`);
      orderContainer.append(stuffin);
      // totalUpdate(item,tax,total);
      let itemTotal=item.get('price');
      let itemTax=itemTotal*.0825;
      // let totalCost=total+itemTotal;
      // let totalTax=tax+itemTax;
      // let money=$(`<div></div>`);
      // let taxContent=$(`<h3>Tax:</h3>
      //                     <span>${totalTax}</span`);
      // let totalContent=$(`<h2>Total:</h2><span>${totalCost}</span>`);
      // orderContainer.append(money);
      // money.append(totalContent);
      // money.append(taxContent);

    });
    return content;


}

export default renderItem;
