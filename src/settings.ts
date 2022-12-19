const dev = localStorage.getItem("devMode");

if (dev == null){
    localStorage.setItem("devMode", "false")
}

// Devmode Toggle
function devMode() {
    localStorage.setItem("devMode", localStorage.getItem("devMode") === "true" ? "false" : "true")
}