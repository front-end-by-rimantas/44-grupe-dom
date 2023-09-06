const nextText = 'Labas rytas, Lietuva!';
const h1DOM = document.querySelector('h1');

h1DOM.textContent = nextText;

const numberDOM = document.querySelector('.number');
const [minusDOM, plusDOM] = document.querySelectorAll('button');

let suma = 0;

function kaDaryti() {
    numberDOM.textContent = ++suma;
}

plusDOM.addEventListener('click', kaDaryti);
minusDOM.addEventListener('click', () => {
    numberDOM.textContent = --suma;
});

const colors = ['yellow', 'green', 'red', 'blue', 'grey'];
let clickCount = 0;

h1DOM.addEventListener('click', () => {
    clickCount++;
    const liekana = clickCount % colors.length;
    // const prevIndex = (liekana + 1) % colors.length;
    const currentIndex = liekana === 0 ? colors.length - 1 : liekana - 1;

    // h1DOM.classList.remove(colors[prevIndex]);
    h1DOM.classList.remove(...colors);
    h1DOM.classList.add(colors[currentIndex]);
})

/*
clickCount = 1; liekana: 1 || add: 0; remove: 2;
clickCount = 2; liekana: 2 || add: 1; remove: 0;
clickCount = 3; liekana: 0 || add: 2; remove: 1;
clickCount = 4; liekana: 1 || add: 0; remove: 2;
clickCount = 5; liekana: 2 || add: 1; remove: 0;
clickCount = 6; liekana: 0 || add: 2; remove: 1;
*/