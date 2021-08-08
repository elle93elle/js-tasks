const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const itemsList = document.querySelector("#items");

const loop = (direction, e) => {
    e.preventDefault();

    if (direction==right){
        itemsList.appendChild(itemsList.firstElementChild);
    }

   else {
        itemsList.insertBefore(itemsList.lastElementChild, itemsList.firstElementChild);
    }
}

rightBtn.addEventListener ("click", e =>{
   loop ("right",e);
})

leftBtn.addEventListener ("click", e =>{
   loop ("left",e);
})