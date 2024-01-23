// Select the menu icon and navigation list
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

// Define a function to toggle classes when the menu icon is clicked
menu.onclick = () => {
    // Toggle the 'bx-x' class on the menu icon
    menu.classList.toggle('bx-x');

    // Toggle the 'open' class on the navigation list
    navlist.classList.toggle('open');
};
