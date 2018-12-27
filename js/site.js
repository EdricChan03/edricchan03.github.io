var activeListItemClass = 'mdc-list-item--activated';
var drawer = mdc.drawer.MDCDrawer.attachTo(document.getElementById('app-drawer'));
var topAppBar = mdc.topAppBar.MDCTopAppBar.attachTo(document.getElementById('app-bar'));
// topAppBar.setScrollTarget(document.getElementById('page-content'));
topAppBar.listen('MDCTopAppBar:nav', () => {
  drawer.open = !drawer.open;
});
var listEl = document.querySelector('.mdc-drawer .mdc-list');
var mainContentEl = document.getElementById('page-content');
var scrimEl = document.querySelector('.mdc-drawer-scrim');

scrimEl.addEventListener('click', (event) => {
  if (drawer.open) {
    drawer.open = false;
  }
})
listEl.addEventListener('click', (event) => {
  drawer.open = false;
});

document.body.addEventListener('MDCDrawer:closed', () => {
  if (mainContentEl.querySelector('input, button') !== null) {
    mainContentEl.querySelector('input, button').focus();
  }
});

document.getElementById('print-btn').addEventListener('click', () => {
  window.print();
})

document.querySelectorAll('.mdc-icon-button')
  .forEach((element) => {
    var iconButtonRipple = mdc.ripple.MDCRipple.attachTo(element);
    iconButtonRipple.unbounded = true;
  });

mdc.autoInit();

var path = window.location.pathname;
if (path === '/about') {
  document.getElementById('about-list-item').classList.toggle(activeListItemClass);
} else if (path.indexOf('/blog/') > -1) {
  document.getElementById('blog-list-item').classList.toggle(activeListItemClass);
} else if (path === '/') {
  document.getElementById('home-list-item').classList.toggle(activeListItemClass);
}
