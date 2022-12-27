function changeTheme(){
    console.log(document.getElementById("themechng").src);
    if(document.getElementById("themechng").src.match("sun"))
    {
        document.getElementById("themechng").src = "moon1.png";
        document.documentElement.style.setProperty('--color2', 'rgb(161, 30, 148)');
        document.documentElement.style.setProperty('--color3', 'black');
        document.documentElement.style.setProperty('--color4', 'white');
        document.documentElement.style.setProperty('--color6', 'rgb(208, 208, 208)');
        document.documentElement.style.setProperty('--color7', '#ebda18');
        document.documentElement.style.setProperty('--color8', '#d32a0c');
        document.getElementById('s-half').style.backgroundImage="url('../imgs/header.png')";
    }
    else
        {
            document.getElementById("themechng").src = "sun.png";
            document.documentElement.style.setProperty('--color2', 'rgb(243, 76, 226)');
            document.documentElement.style.setProperty('--color3', '#FFE5F1');
            document.documentElement.style.setProperty('--color4', 'black');
            document.documentElement.style.setProperty('--color6', '#0A2647');
            document.documentElement.style.setProperty('--color7', '#8FD6E1');
            document.documentElement.style.setProperty('--color8', '#C060A1');
            document.getElementById('s-half').style.backgroundImage="url('../imgs/light-header.png')";
        }
}
