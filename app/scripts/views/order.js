import $ from 'jquery';
import renderOrder from './orderitem.js';
function renderOrderItems(orderItem){

  let orderstuff=$(`<div></div>`);
  orderItem.get('order').forEach((item)=>{
    orderstuff.append(renderOrder(item));
      });


    orderItem.on('change', () => {
    orderstuff.empty();
        let total=0;
        let tax=0;

      orderItem.get('order').forEach((item)=>{
        let itemPrice=item.price;
        tax+=itemPrice*0.0825;
        total+=itemPrice+tax;


        orderstuff.append(renderOrder(item));

          });
          let placeOrderButton=$(`<button class="orderbutton">Place Order</button>`);
          let taxDiv=$(`<div class="tax"><h3>Tax:$${Math.round(tax*100)/100}</h3></div>'`);
          let totalDiv=$(`<div class="total"><h2>Total:$${Math.round(total*100)/100}</h2></div>`);
          placeOrderButton.on('click', (e)=>{
            alert('order has been placed fool!');

          });
          orderstuff.append(taxDiv);
          orderstuff.append(totalDiv);
          orderstuff.append(placeOrderButton);

    });



  return orderstuff;
}

export default renderOrderItems;
