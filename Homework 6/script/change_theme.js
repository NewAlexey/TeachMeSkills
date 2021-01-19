let themeButton = document.getElementById("button");

themeButton.onclick = function () {
    let style = theme_css.getAttribute("href");
    if (style.includes("style/style-dark.css")) document.getElementById("theme_css").href = "style/style-light.css";
    else document.getElementById("theme_css").href = "style/style-dark.css";
};
