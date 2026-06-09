function createMenuPage(){
    const menuRoot=document.createElement("div");
    const menuList=document.createElement(`ul`);
    const menuItems=['Malai kofta', `bhelpuri`, `chhole-Kulche`,`Rajma Chawal`];
    menuItems.forEach((item)=>{
        const li=document.createElement(`li`);
        li.textContent=item;
        li.classList.add(`menuItemsList`);
        menuList.appendChild(li);
    })
    menuRoot.appendChild(menuList);
    return menuRoot;
}

export {createMenuPage}