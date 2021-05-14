let cats = ["Milo","Otis","Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
}
destructivelyAppendCat;

function destructivelyPrependCat() {
    cats.unshift("Bob");
}
destructivelyPrependCat;

function destructivelyRemoveLastCat() {
    cats.pop();
}
destructivelyRemoveLastCat;

function destructivelyRemoveFirstCat() {
    cats.shift();
}
destructivelyRemoveFirstCat;

function appendCat() {
     return [...cats, "Broom"];
}
appendCat;

function prependCat() {
    return ["Arnold", ...cats];
}
prependCat;

function removeLastCat() {
    return cats.slice(0,2);
}
removeLastCat;

function removeFirstCat() {
    return cats.slice(1);
}
removeFirstCat;