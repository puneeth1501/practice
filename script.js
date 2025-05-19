var toggleSwitch = document.querySelector('.toggle-checkbox');
var theme = document.querySelector("body");
toggleSwitch === null || toggleSwitch === void 0 ? void 0 : toggleSwitch.addEventListener("change", function () {
    if (toggleSwitch.checked) {
        theme === null || theme === void 0 ? void 0 : theme.classList.add("dark");
    }
    else {
        theme === null || theme === void 0 ? void 0 : theme.classList.remove("dark");
    }
});
