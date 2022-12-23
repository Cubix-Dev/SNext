// All constantly updated stuff
setInterval(function (){
    // Time
    let allDisplays = document.getElementsByClassName('time')
    let clock = new Date
    let hours = clock.getHours()
    let meridian = 'AM'
    if (hours > 12) {
        hours -= 12
        meridian = 'PM'
    }
    let minutes = clock.getMinutes()
    if (minutes < 10) {minutes = '0'+minutes}
    let time = `${hours}:${minutes} ${meridian}`
    for (let display of allDisplays) {
        display.textContent = time
    }
    // Update notification bell
    let count = notifs.length
    if (count == 0) {count=''}
    if (count > 9) {count='9+'}
    notifIcon.textContent = count
}, 250)
// Sleep Function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Notification Crap
var notifs = []
var newNotifs = []
var notifyActive = false
let notifElement = document.getElementById('notification')
let notifIcon = document.getElementById('notif-icon')
document.getElementById('notification').addEventListener('animationend', async function () {
    notifyActive = false
    notifElement.classList.remove('animate')
    if (newNotifs.length != 0) {
        await sleep(1)
        showNotif(); 
        return
    }
    notifIcon.classList.remove('animate')
})
function showNotif() {
    // Notification Animation
    if (notifyActive) {return}
    console.log('show notification')
    notifyActive = true
    notifElement.textContent = newNotifs.shift()
    notifElement.classList.add('animate')
    notifIcon.classList.add('animate')
    // Update Bell Icon
}
function newNotif(text) {
    console.log('new notification: ', text)
    notifs.push(text)
    newNotifs.push(text)
    if (notifyActive) {return}
    showNotif()
}

// Testing button 
function devtest(type) {
    newNotif('Success')
}

// Tab bar functionality
var tabs = ['settings', 'friends', 'home', 'games', 'store']
loadTab(2)
function loadTab(targetTab) {
    let tabElements = document.getElementsByClassName('tab')
    var page
    for (let i=0;i<5;i++) {
        let tab = tabElements[i]
        page = document.getElementById(tabs[i])
        if (i == targetTab && !tab.classList.contains('tabactive')) {
            tab.classList.add('tabactive')
            page.style.display = ''
            continue
        }
        page.style.display = 'none'
        tab.classList.remove('tabactive')
    }
}

// Loads most recently played games
getRecentGames()
function getRecentGames() {
    let container = document.getElementById('recent-played')
    for (var i=0;i<4;i++) {
        let element = document.createElement('div')
        element.classList.add('recent-game')
        container.appendChild(element)
    }
}

getFriends()
function getFriends() {
    let container = document.getElementById('friends-list')
    for (var i=0;i<4;i++) {
        let element = document.createElement('div')
        element.classList.add('friend-card')
        let picture = document.createElement('div')
        picture.classList.add('prof-pic')
        element.appendChild(picture)
        element.appendChild(
            document.createTextNode(`friend_${i}`)
        )
        container.appendChild(element)
    }
}