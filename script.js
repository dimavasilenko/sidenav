let sidenav = document.querySelector('.sidenav');
let secondNav = document.querySelector('#secondNav');
let menu = document.querySelector('.menu');


const toggleMenu = () => {
    menu.classList.toggle('active');

};

secondNav.addEventListener('click',e=> {
    e.stopPropagation();
    toggleMenu();


});


sidenav.addEventListener('click', e => {
    e.stopPropagation();

    toggleMenu();

});

document.addEventListener('click', e => {
    let target = e.target;
    let its_menu = target === menu || menu.contains(target);
    let its_sidenav = target === sidenav;
    let menu_is_active = menu.classList.contains('active');

    if (!its_menu && !its_sidenav && menu_is_active) {
        toggleMenu();
    }
});

function viewDiv(){
    document.getElementById("secondNav").style.display = "block";
}
