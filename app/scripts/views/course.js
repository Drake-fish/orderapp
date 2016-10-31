import $ from 'jquery';
import renderItem from './menuitem';


function renderCourseList(entreeItems, gameItems, beerItems, orderItems, orderItem) {

    const div = $(`
    <div class="product">
    </div>
    `);
    const entrees = $(`    <div class="entrees">
                        <h2>ENTREES</h2>
                    </div>`);
    const beer = $(`    <div class="beer">
                        <h2>BEER</h2>
                     </div>`);
    const games = $(`    <div class="games">
                     <h2>GAMES</h2>
                  </div>`);


    entreeItems.forEach((item) => {
        entrees.append(renderItem(item, orderItems));
        div.prepend(entrees);

    });

    entreeItems.on('update', () => {
        entreeItems.forEach((item) => {
            entrees.append(renderItem(item, orderItems));
            div.append(entrees);
        });
    });
    gameItems.forEach((item) => {
        games.append(renderItem(item, orderItems));
        div.append(games);
    });
    gameItems.on('update', () => {
        gameItems.forEach((item) => {
            games.append(renderItem(item, orderItems));
            div.append(games);
        });
    });
    beerItems.forEach((item) => {
        beer.append(renderItem(item, orderItems));
        div.append(beer);
    });
    beerItems.on('update', () => {
        beerItems.forEach((item) => {
            beer.append(renderItem(item, orderItems));
            div.append(beer);
        });
    });



    return div;
}



export default renderCourseList;
