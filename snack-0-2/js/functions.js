function wordVerify (word1, word2) {

    let wordlength1 = word1.length
    let wordlength2 = word2.length

    if (wordlength1 == wordlength2) {

        document.getElementById("first").innerHTML = word1
        document.getElementById("second").innerHTML = word2

    }
    else if (wordlength1 > wordlength2) {

        document.getElementById("first").innerHTML = word1

    }
    else {

        document.getElementById("second").innerHTML = word2


    }

}