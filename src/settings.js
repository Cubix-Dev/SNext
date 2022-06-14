var isDev = localStorage.getItem("devMode");

if (isDev == null){
    localStorage.setItem("devMode", false)
}

// Devmode Toggle
function devMode() {
    if (isDev == false){
        localStorage.setItem("devMode", true)
    } else {
        localStorage.setItem("devMode", false)
    }
}