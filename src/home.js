function createHomePage(){
    const homeRoot=document.createElement("div");
    const heading=document.createElement("h1");
    heading.id=`heading`
    heading.textContent=`Welcome to NERA-BERA`;
    const slogan=document.createElement("h3");
    slogan.id=`slogan`;
    slogan.textContent=`Ye dil mange mera, Khana from NERA-BERA`;
    homeRoot.appendChild(heading);
    homeRoot.appendChild(slogan)
    return homeRoot;
}   
export {createHomePage}