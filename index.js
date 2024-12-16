import menuArray from "./data.js";

function menuItems(menuItems){
    return menuItems.map(item => {
        const {name,
            ingredients,
            id,
            price,
            emoji} = item
        const list = ingredients.reduce((total, current)=> total +", " + current)
        return `
        <div class="menu-item" >
         <div class="info">
            <p class="emoji">${emoji}</p>
            <div>
                <h1>${name}</h1>
                <p>${list}</p>
                <p>$ ${price}</p>
            </div>
        </div>
            <img src="./images/add.jpg" class="add" id="add"/>
        </div>
        <hr>
        `
    }).join('')
    
}
document.getElementById('menu-item').innerHTML = menuItems(menuArray)