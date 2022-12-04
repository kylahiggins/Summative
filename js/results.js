let menu = document.getElementById('menu');
let hidden_nav = document.getElementById('hidden_nav');

menu.onclick = function(){
    hidden_nav.classList.toggle('no-display')
};