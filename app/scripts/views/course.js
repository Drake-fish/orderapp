import $ from 'jquery';
import menuitem from './menuitem';


function renderCourseList(menuItems){
  const ul=$(`
    <ul>
    </ul>
    `);
    menuItems.forEach((item)=>{
      ul.append(renderItem(item));
    });
    return ul;
}



export default renderCourseList;
