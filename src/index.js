import {createHomePage} from "./home.js"
import { createMenuPage } from "./menu.js";
import { createAboutPage } from "./about.js";
const content=document.querySelector(".content");

const home=document.querySelector(`#home`);
const about=document.querySelector(`#about`);
const menu=document.querySelector(`#menu`);
home.addEventListener(`click`,()=>{
    renderPages(createHomePage)
})
about.addEventListener(`click`,()=>{
    renderPages(createAboutPage)
})
menu.addEventListener(`click`,()=>{
    renderPages(createMenuPage)
})

renderPages(createHomePage);

function renderPages(func){
    content.replaceChildren();
    const name=func();
    content.appendChild(name);
}
