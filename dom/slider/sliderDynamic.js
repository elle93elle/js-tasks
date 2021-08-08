const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const itemsList = document.querySelector("#items");
const computedStyles = getComputedStyle(itemsList);
const items = document.querySelectorAll(".item"); 

const minRight = 0;
const itemWidth = getComputedStyle(items[0]).width;
const step = parseInt(itemWidth);
const preShownItems = 300/step;
const maxRight = (items.length-preShownItems)*100;
let currentRight = 0;

rightBtn.addEventListener ("click", e => {
    e.preventDefault();

    if (currentRight<maxRight){
        currentRight+=step;
        itemsList.style.right = `${currentRight}px`;
    }
});

leftBtn.addEventListener ("click", e => {
    e.preventDefault();

    if (currentRight>minRight){
        currentRight-=step;
        itemsList.style.right = `${currentRight}px`;
    }
});