function arrayRemover (array, name) {

    inputArray = array

    for (let x = 0; x < inputArray.length; x++) {

        if (inputArray[x] === name) {
            inputArray.splice(x, 1);
        }
    }

    console.log(inputArray);

}