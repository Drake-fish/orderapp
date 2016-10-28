import $ from 'jquery';
import renderItem from './menuitem';


function renderCourseList(entreeItems, gameItems, beerItems) {

    const div = $(`
    <div class="product">
    </div>
    `);
const entrees=$(`    <div class="entrees">
                        <h2>ENTREES</h2>
                    </div>`);
const beer=$(`    <div class="beer">
                        <h2>BEER</h2>
                     </div>`);
const games=$(`    <div class="games">
                     <h2>GAMES</h2>
                  </div>`);


    entreeItems.forEach((item) => {
        entrees.append(renderItem(item));
        div.prepend(entrees);
    });

    entreeItems.on('update', () => {
        entreeItems.forEach((item) => {
          entrees.append(renderItem(item));
          div.prepend(entrees);
        });
        console.log(entreeItems);
    });
    beerItems.forEach((item) => {
      beer.append(renderItem(item));
      div.prepend(beer);
    });
    beerItems.on('update', () => {
        beerItems.forEach((item) => {
          beer.append(renderItem(item));
          div.append(beer);
        });
    });
    gameItems.forEach((item) => {
      games.append(renderItem(item));
      div.append(games);
    });
    gameItems.on('update', () => {
        gameItems.forEach((item) => {
          games.append(renderItem(item));
          div.append(games);
        });
    });


    return div;
}



export default renderCourseList;