import $ from 'jquery';

function renderItem(menuItem){
  const li= $(
    `<li>
    ${menuItem.get('item','price','description')}
    </li>`
  );

  li.on('click',(e)=>{

  });
}
