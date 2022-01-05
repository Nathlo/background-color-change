const button = document.querySelector('button');
const h2Head = document.querySelector('h2');
const backGd = document.querySelector('section');

button.addEventListener('click', () => {
    let color = '#';
    color += Math.random().toString(16).slice(2, 8);
    backGd.style.backgroundColor = color;
    h2Head.innerText = color;
    console.log(color);

})