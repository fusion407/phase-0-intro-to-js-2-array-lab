// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    // append cat to end of array
    cats.push(name);
    return cats;
}
function destructivelyPrependCat(name) {
    // prepend cat to beginning of array
    cats.unshift(name);
    return cats;
}
function destructivelyRemoveLastCat() {
    // remove last cat from cats array
    cats.pop();
    return cats;
}
function destructivelyRemoveFirstCat() {
    // removes first cat from the cats array
    cats.shift();
    return cats;
}
function appendCat(name) {
    // append cat to cats array and return new array
    const copyCats = cats.slice();
    copyCats.push(name)
    return copyCats;
}
function prependCat(name) {
    // prepend cat to cats array and return new array
    const copyCats = cats.slice();
    copyCats.unshift(name)
    return copyCats;
}
function removeLastCat() {
    // remove last cat in cats array and returns new array
    const copyCats = cats.slice();
    copyCats.pop();
    return copyCats;
}
function removeFirstCat() {
    // removes first cat from cats array and returns new array
    const copyCats = cats.slice();
    copyCats.shift();
    return copyCats;
}