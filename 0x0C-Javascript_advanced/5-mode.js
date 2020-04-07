const dom = document.body;
function changeMode(size, weight, transform, background, color) {
    return function() {
       dom.style.fontSize = size;
       dom.style.fontWeight = weight;
       dom.style.textTransform = transform;
       dom.style.background = background;
       dom.style.color = color;
    }
}
function main() {
    const modes = {
        spooky: ['Spoooky', changeMode(9, 'bold', 'uppercase', 'pink', 'green')],
        darkMode: ['Dark Mode', changeMode(12, 'bold', 'capitalize', 'black', 'white')],
        screamMode: ['Scream Mode', changeMode(12, 'normal', 'lowercase', 'white', 'black')]
    }
    var txt = document.createElement('p');
    txt.innerHTML = 'Welcome Holberton!';
    dom.appendChild(txt);
    
    for (x in modes) {
        var btn = document.createElement("BUTTON");
        btn.id = x;
        btn.innerHTML = modes[x][0];
        dom.appendChild(btn);
        document.getElementById(x).addEventListener("click", modes[x][1]);
    }
}
main();