const hamburger= document.getElementById('hamburger');
const menu= document.getElementById('menu');
menu
hamburger.addEventListener('click',()=>
{
    hamburger.classList.toggle('show');
    menu.classList.toggle('show');

}
);