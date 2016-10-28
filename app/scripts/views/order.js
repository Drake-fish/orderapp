import $ from 'jquery';
import renderOrder from './orderitem.js';
function renderOrderItems(orderItems){

  let orderstuff=$(`<div></div>`);
  orderItems.forEach((item)=>{
    orderstuff.append(renderOrder(item));
      });


    orderItems.on('update', () => {
    orderstuff.empty();
        let total=0;
        let tax=0;

      orderItems.forEach((item)=>{
        let itemPrice=item.get('price');
        tax+=itemPrice*0.0825;
        total+=itemPrice+tax;


        orderstuff.append(renderOrder(item));

          });
          let taxDiv=$(`<div class="tax"><h3>Tax:$${Math.round(tax*100)/100}</h3></div>'`);
          let totalDiv=$(`<div class="total"><h2>Total:$${Math.round(total*100)/100}</h2></div>`);
          orderstuff.append(taxDiv);
          orderstuff.append(totalDiv);

    });



  return orderstuff;
}

export default renderOrderItems;
