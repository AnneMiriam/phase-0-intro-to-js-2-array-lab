// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat = function() {
    cats.push('Ralph');
};
const destructivelyRemoveLastCat = function() {
    cats.pop();
};
const destructivelyPrependCat = function() {
    cats.unshift('Bob');
};
const destructivelyRemoveFirstCat = function() {
    cats.shift();
};

function appendCat() {
    const catsEnd = [...cats, 'Broom'];
    return catsEnd;
};
function prependCat() {
    const catsFront = ['Arnold', ...cats];
    return catsFront;
};
function removeLastCat() {
    const catBack = cats.slice(0, 2);
    return catBack;
};
function removeFirstCat() {
    const catFront = cats.slice(-2);
    return catFront;
}