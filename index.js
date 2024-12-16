import menuArray from "./data.js";
const order = document.getElementById('order')
const menuContainer = document.getElementById('menu-item');

function menuItems(menuItems){
    return menuItems.map(item => {
        const {name,
            ingredients,
            id,
            price,
            emoji} = item
        const list = ingredients.reduce((total, current)=> total + ", " + current)
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
            <input type="button" class="add" id="add" data-id="${id}"/>
        </div>
        <hr>
        `
    }).join('')
    
}

function addOrder(){
   menuContainer.addEventListener('click', function(e) { 
    if(e.target.classList.contains("add")){
        const item = menuArray[e.target.dataset.id]
       order.innerHTML += `
       <div class="order-info">
                <div class="items-info">
                    <h2>${item.name}</h2>
                    <input type="button" class="remove" id="remove" data-remove="${item.id}" value='Remove'/>
                </div>
                <p>$ ${item.price}</p>
            </div>
       `
    }
   }
   )
}

function removeOrder(){
    order.addEventListener('click', function(e){
        if(e.target.classList.contains("remove")){
            const removeItem = menuArray[e.target.dataset.remove]
            removeItem.id.style.visibility = hidden
        }
    })
}

document.getElementById('menu-item').innerHTML = menuItems(menuArray)

addOrder()
removeOrder()