const dev = localStorage.getItem("devMode");

if (dev == null){
    localStorage.setItem("devMode", "false")
}

// Devmode Toggle
function devMode() {
    localStorage.setItem("devMode", dev === "true" ? "false" : "true")
}