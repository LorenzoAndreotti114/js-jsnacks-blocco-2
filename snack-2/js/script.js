let arrayTest = ["pippo", "pluto", "paperino"];
console.log(arrayTest);

let uName = prompt("dimmi un nome tra pippo, pluto o paperino")
console.log(uName);

elementFinder(arrayTest, uName)

let arrayPos = elementFinder(arrayTest, uName) + 1;
console.log(arrayPos);

if (arrayPos == 0) {
    alert(`${uName} non è presente in lista`);
}
else {
    alert(`${uName} è il numero ${arrayPos} della mia lista`)
}

