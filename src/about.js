function createAboutPage(){
    const aboutRoot=document.createElement("div");
    const aboutText=document.createElement("p");
    aboutText.textContent=`NERA-BERA is my love, just started 5 min ago`;
    const aboutEmail=document.createElement(`p`);
    aboutEmail.textContent=`itstrueman@beleiveme.com`;
    aboutRoot.appendChild(aboutText);
    aboutRoot.appendChild(aboutEmail);
    return aboutRoot;
}
export {createAboutPage};