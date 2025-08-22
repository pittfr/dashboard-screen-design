let sidebarMenuToggle = document.querySelector(".sidebar-menu__header .sidebar-menu__toggle");
let sidebarMenuBurger = document.querySelector(".sidebar-menu__header .sidebar-menu__burger");

const toggleSidebarMenu = () => {
    document.body.classList.toggle('menu-expanded');
};

sidebarMenuToggle.addEventListener('click', toggleSidebarMenu);

sidebarMenuBurger.addEventListener('click', toggleSidebarMenu);