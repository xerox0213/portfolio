const lightSwitcher = document.getElementById("light-switcher");
const darkSwitcher = document.getElementById("dark-switcher");

lightSwitcher.addEventListener("click", setLightMode);
darkSwitcher.addEventListener("click", setDarkMode);

function setDarkMode() {
    document.body.dataset["theme"] = "dark";
    displaySwitcher(lightSwitcher);
    hideSwitcher(darkSwitcher);
}

function setLightMode() {
    document.body.dataset["theme"] = "light";
    displaySwitcher(darkSwitcher);
    hideSwitcher(lightSwitcher);
}

function displaySwitcher(switcher) {
    switcher.dataset["visible"] = "true";
}

function hideSwitcher(switcher) {
    switcher.dataset["visible"] = "false";
}