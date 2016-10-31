import $ from 'jquery';
import renderOrder from './orderitem.js';

function renderOrderItems(orderItem, orderItems) {

    let orderstuff = $(`<div></div>`);
    orderItem.get('order').forEach((item) => {
        orderstuff.append(renderOrder(item));
    });
    orderItem.on('change', () => {
        orderstuff.empty();


        orderItem.get('order').forEach((item) => {
            orderstuff.append(renderOrder(item));
        });
        orderstuff.find('button').on('click', (e) => {
            orderItem.deleteItem();

        });
        orderItem.calculateTotal();
        orderItem.calculateTax();
        let theTax = orderItem.get('tax');
        let theTotal = theTax + orderItem.get('total');



        let placeOrderButton = $(`<button class="orderbutton">Place Order</button>`);
        let taxDiv = $(`<div class="tax">
          <h3>Tax:${orderItem.get('tax')*100/100}</h3>
          </div>'`);
        let totalDiv = $(`<div class="total">
          <h2>Total:$${theTotal}</h2>
          </div>`);
        placeOrderButton.on('click', (e) => {
            e.preventDefault();
            orderItems.create({
                order: orderItem.get('order'),
                tax: orderItem.get('tax'),
                total: orderItem.get('total')
            });
            let productsOrdered = orderItem.get('order').map(function(item, i, arr) {
                return item.name;

            });
            alert('your order has been place! You ordered' + productsOrdered + ' for a total of $ ' + theTotal);
            window.location.reload();
        });
        orderstuff.append(taxDiv);
        orderstuff.append(totalDiv);
        orderstuff.append(placeOrderButton);

    });



    return orderstuff;
}

export default renderOrderItems;
