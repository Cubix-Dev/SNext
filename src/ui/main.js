let currentFlyout = '';
let flyoutOpened = false;
document.onload = function() {
var fly1 = document.getElementById('fly1');
var fly2 = document.getElementById('fly2');
}


function notificationFlyout() {
    if (currentFlyout == 'user') {
        userFlyout();
    }
    // manual toggle
    if (fly1.classList.contains('flyout-margin')) {
        fly1.classList.remove('flyout-margin');
        flyoutOpened = false;
        currentFlyout = 'notification';
    } else {
        fly1.classList.add('flyout-margin');
        flyoutOpened = true;
        currentFlyout = '';
    }
}


function userFlyout() {
    if (currentFlyout == 'notification') {
        notificationFlyout();
    }

    // manual toggle
    if (fly2.classList.contains('flyout-margin-2')) {
        fly2.classList.remove('flyout-margin-2');
        flyoutOpened = false;
        currentFlyout = 'user';
    } else {
        fly2.classList.add('flyout-margin-2');
        flyoutOpened = true;
        currentFlyout = '';
    }
}