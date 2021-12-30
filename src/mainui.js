let currentFlyout = '';
let flyoutOpened = false;
document.onload = function() {
var fly1 = document.getElementById('fly1');
var fly2 = document.getElementById('fly2');
}

function SetUsername() {
    var val = Math.floor(1000 + Math.random() * 9000);
    let username = "[Early Development] Player " + val;
    alert("Your username is: " + username);
}


function notificationFlyout() {
    if (currentFlyout === 'user') {
        // userFlyout();
        console.log('retract user flyout');
        userFlyout();
    }
    // manual toggle
    if (fly1.getAttribute('style') === 'margin-left: -300px;') {
        fly1.setAttribute('style', 'margin-left: 20px;');
        flyoutOpened = true;
        console.log('flyoutOpened: ' + flyoutOpened);
        currentFlyout = 'notification';
    } else {
        fly1.setAttribute('style', 'margin-left: -300px;');
        flyoutOpened = false;
        console.log('flyoutOpened: ' + flyoutOpened);
        currentFlyout = '';
    }

    return(currentFlyout);
}


function userFlyout() {
    if (currentFlyout === 'notification') {
        // notificationFlyout();
        console.log('retract notification flyout');
        notificationFlyout();
    }

    // manual toggle
    if (fly2.getAttribute('style') === 'margin-left: -300px;') {
        fly2.setAttribute('style', 'margin-left: 20px;');
        flyoutOpened = true;
        console.log('flyoutOpened: ' + flyoutOpened);
        currentFlyout = 'user';
        SetUsername();
    } else {
        fly2.setAttribute('style', 'margin-left: -300px;');
        flyoutOpened = false;
        console.log('flyoutOpened: ' + flyoutOpened);
        currentFlyout = '';
    }
    return(currentFlyout);
}


function getTime() {
    var time = new Date();
    var time = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    return time;
    
}

setInterval(() => {
    let time = getTime();
    document.getElementById('time').innerHTML = time;
}, 100);