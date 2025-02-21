const darkModeButton = document.getElementById('darkModeButton');
const lightModeButton = document.getElementById('lightModeButton');

function enableDarkMode() {

    document.body.style.backgroundColor = '#121212'; 
    document.body.style.color = '#ffffff'; 
    document.body.style.fontFamily = 'Arial, sans-serif'; 
    document.body.style.fontSize = '18px'; 
    darkModeButton.style.display = 'none';
    lightModeButton.style.display = 'inline-block'; 
}

function enableLightMode() {

    document.body.style.backgroundColor = '#ffffff'; 
    document.body.style.color = '#000000'; 
    document.body.style.fontFamily = 'Arial, sans-serif'; 
    document.body.style.fontSize = '18px'; 
    lightModeButton.style.display = 'none'; 
    darkModeButton.style.display = 'inline-block'; 
}

enableLightMode();
darkModeButton.addEventListener('click', enableDarkMode);
lightModeButton.addEventListener('click', enableLightMode);
