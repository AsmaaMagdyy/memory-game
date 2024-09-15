var colors = ['red', 'blue', 'green', 'pink', 'brown', 'yellow'];
var colorPickList = [...colors, ...colors];
const cards = document.querySelector('.cards');
var activeCard = null;
var cardsCount = colorPickList.length;
let countAppearingCard = 0;

function buildCard(color) {
    let parent = document.createElement('div');
    parent.classList.add('col-md-3');
    // console.log(parent);

    let child = document.createElement('div');
    child.classList.add('card');
    child.setAttribute('data-color', color)
    parent.appendChild(child);

    child.addEventListener('click', function () {
        child.style.backgroundColor = color;
        if (activeCard === null) {
            activeCard = child;
            return;
        }

        //card match
        let activeColor = activeCard.getAttribute('data-color');
        let childColor = child.getAttribute('data-color');
        if (activeColor === childColor) {
            activeCard = null;
            countAppearingCard += 2;
            if (countAppearingCard === cardsCount) {
                alert('You Winner....| refresh page to start again');
            }
            return;
        }


        // card not match
        setTimeout(function () {
            activeCard.style.backgroundColor = null;
            child.style.backgroundColor = null;
            activeCard = null;
            return;
        }, 1000);
    })
    return parent;
}

for (let i = 0; i < cardsCount; i++) {
    let randomIndex = Math.floor(Math.random() * colorPickList.length)
    let color = colorPickList[randomIndex];
    colorPickList.splice(randomIndex, 1);
    let card = buildCard(color);
    cards.appendChild(card);
    console.log(randomIndex);
}
console.log(colorPickList);
