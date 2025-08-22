const toggleSidebarMenu = () => {
    document.body.classList.toggle('menu-expanded');
};

const toggleSidebarInfo = () => {
    document.body.classList.toggle('info-expanded');
}

// SIDEBAR-MENU

let sidebarMenuToggle = document.querySelector(".sidebar-menu__toggle");
let sidebarMenuBurger = document.querySelector(".sidebar-menu__burger");


sidebarMenuToggle.addEventListener('click', toggleSidebarMenu);

sidebarMenuBurger.addEventListener('click', toggleSidebarMenu);

//SIDEBAR-INFO

let sidebarInfoToggle = document.querySelector(".sidebar-info__toggle");
let sidebarInfoFAB = document.querySelector(".sidebar-info__toggle-fab");

sidebarInfoToggle.addEventListener('click', toggleSidebarInfo);
sidebarInfoFAB.addEventListener('click', toggleSidebarInfo);
