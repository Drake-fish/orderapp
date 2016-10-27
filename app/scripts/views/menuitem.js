import $ from 'jquery';

function renderItem(item) {
    const content = $(
        `<div class="items">
    <h3>${item.get('item')}</h3>
    <span>$${item.get('price')}</span><br>
    <p>${item.get('description')}</p>
  </div>`
    );
    content.on('click',(e)=>{
      console.log(item.get('id'));
    });
    return content;

}

export default renderItem;
