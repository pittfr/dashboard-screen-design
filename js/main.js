const toggleSidebarMenu = () => {
    document.body.classList.toggle('menu-expanded');
};

const toggleSidebarInfo = () => {
    document.body.classList.toggle('info-expanded');
}

// SIDEBAR-MENU

let sidebarMenuToggle = document.querySelector(".sidebar-menu__toggle");
let sidebarMenuBurger = document.querySelector(".sidebar-menu__burger");
let sidebarMenuOverlay = document.querySelector(".page-overlay");

[sidebarMenuToggle, sidebarMenuBurger, sidebarMenuOverlay].forEach(toggle => {
    if(toggle){
        toggle.addEventListener('click', toggleSidebarMenu);
    }
})

//SIDEBAR-INFO

let sidebarInfoToggle = document.querySelector(".sidebar-info__toggle");
let sidebarInfoFAB = document.querySelector(".sidebar-info__toggle-fab");
let sidebarInfoOverlay = document.querySelector(".dashboard-overlay");

[sidebarInfoToggle, sidebarInfoFAB, sidebarInfoOverlay].forEach(toggle => {
    if(toggle){
        toggle.addEventListener('click', toggleSidebarInfo);
    }
})
