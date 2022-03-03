/**
 * Copies the `text` to the clipboard
 * @param {string} text The text to copy
 * @param {HTMLInputElement} inputEl The input element (if any)
 * @param {boolean} logDebugMsgs Whether to log debugging messages
 * @returns A `Promise` if the async Clipboard API is supported; or `true` if the `text` was successfully copied, or `false` otherwise
 */
function copyText(text, inputEl, logDebugMsgs) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    if (typeof logDebugMsgs === 'boolean' && logDebugMsgs === true) {
      console.debug('copyText: Using Async Clipboard API');
    }
    return navigator.clipboard.writeText(window.location.href);
  } else if (document.execCommand) {
    if (typeof logDebugMsgs === 'boolean' && logDebugMsgs === true) {
      console.debug('copyText: Using Document.execCommand API');
    }
    if (inputEl) {
      inputEl.select();
      document.execCommand('copy');
      return true;
    } else {
      const el = document.createElement('textarea');
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      return true;
    }
  } else {
    return false;
  }
}
/**
 * Toggles the activated state of a list item
 * @param {string} id The ID of the list item
 */
function toggleListItemActivated(id) {
  if (document.getElementById(id) !== null) {
    document.getElementById(id).classList.toggle(activatedListItemClass);
  } else {
    throw new Error('The ID specified is invalid!');
  }
}
var activatedListItemClass = 'mdc-list-item--activated';
var drawer = mdc.drawer.MDCDrawer.attachTo(document.getElementById('app-drawer'));
var topAppBar = mdc.topAppBar.MDCTopAppBar.attachTo(document.getElementById('app-bar'));
// topAppBar.setScrollTarget(document.getElementById('page-content'));
topAppBar.listen('MDCTopAppBar:nav', () => {
  drawer.open = !drawer.open;
});
var listEl = document.querySelector('.mdc-drawer .mdc-list');
var mainContentEl = document.getElementById('page-content');
var scrimEl = document.querySelector('.mdc-drawer-scrim');

// Close drawer on scrim click
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
if (path === '/') {
  toggleListItemActivated('home-list-item');
} else if (path === '/about/site') {
  toggleListItemActivated('about-site-list-item');
} else if (path.indexOf('/blog/') > -1) {
  toggleListItemActivated('blog-list-item');
  if (path === '/blog/authors') {
    document.querySelectorAll('.follow-author-menu')
      .forEach((element) => {
        var menu = mdc.menu.MDCMenu.attachTo(element);
        var menuButton = element.parentElement.children[0];
        if (menuButton.nodeName !== 'BUTTON') {
          console.error('The first child element of the follow author menu should be a button.');
        } else {
          menuButton.addEventListener('click', (event) => {
            menu.open = !menu.open;
          })
        }
      })
  }
} else if (path === '/portfolio') {
  toggleListItemActivated('portfolio-list-item');
} else if (path === '/projects') {
  toggleListItemActivated('projects-list-item');
} else if (path === '/privacy-policy') {
  toggleListItemActivated('privacy-policy-list-item');
} else if (path.indexOf('/til/') > -1) {
  toggleListItemActivated('til-list-item');
}

// Share functionality
if (document.getElementById('share-dialog') && document.getElementById('share-button')) {
  const shareDialog = mdc.dialog.MDCDialog.attachTo(document.getElementById('share-dialog'));
  const shareDialogSuccessSnackbar = mdc.snackbar.MDCSnackbar.attachTo(document.getElementById('share-dialog-success-snackbar'));
  const shareDialogFailureSnackbar = mdc.snackbar.MDCSnackbar.attachTo(document.getElementById('share-dialog-failure-snackbar'));

  document.getElementById('share-button').addEventListener('click', () => {
    shareDialog.open();
  })
  if (document.querySelectorAll('.mdc-text-field')) {
    document.querySelectorAll('.mdc-text-field').forEach((el) => {
      mdc.textField.MDCTextField.attachTo(el);
    })
  }
  document.getElementById('share-dialog-copy-link-button')
    .addEventListener('click', () => {
      const copyVal = copyText(window.location.href, document.getElementById('share-dialog-text-field-input').value);
      Promise.resolve(copyVal).then((value) => {
        if (typeof value === 'boolean') {
          if (value === true) {
            // Successfully copied to the clipboard!
            console.log('Successfully copied to the clipboard!');
            shareDialogSuccessSnackbar.open();
          } else {
            // Could not copy
            console.error('An error occurred while attempting to copy to the clipboard');
            shareDialogFailureSnackbar.open();
          }
        } else {
          // Successfully copied to the clipboard!
          console.log('Successfully copied to the clipboard!');
          shareDialogSuccessSnackbar.open();
        }
      })
        .catch((error) => {
          // Could not copy
          console.error('An error occurred while attempting to copy to the clipboard:', error);
          shareDialogFailureSnackbar.open();
        })
    })
}
