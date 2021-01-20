let themeButton = document.getElementById("button");
let themeCss = document.getElementById("theme_css");

if (localStorage.getItem('theme') == 'dark') { 
    themeCss.href = "style/style-dark.css";
}
else {
    themeCss.href = "style/style-light.css";
    document.getElementById('checkbox').removeAttribute('checked');
}

themeButton.onclick = function () {
    let style = theme_css.getAttribute("href");
    if (style.includes("style/style-dark.css")) {
        themeCss.href = "style/style-light.css";
        localStorage.setItem('theme', 'light');
    }
    else {
        themeCss.href = "style/style-dark.css";
        localStorage.setItem('theme', 'dark');
    }    
};