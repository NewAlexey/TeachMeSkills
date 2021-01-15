let themeButton = document.getElementById("button");

themeButton.onclick = function () {
    let style = theme_css.getAttribute("href");
    if (style.includes("style/style-dark.css")) document.getElementById("theme_css").href = "style/style-light.css";
    else document.getElementById("theme_css").href = "style/style-dark.css";

    let graph = graph_1.getAttribute("src");
    if (graph.includes("_light.png")) document.getElementById("graph_1").src = "./img/graph_gender-age_dark.png";
    else document.getElementById("graph_1").src = "./img/graph_gender-age_light.png";
};
