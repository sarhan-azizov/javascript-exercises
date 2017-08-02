function appendNumber(str) {
    var wordList = str.split(' '),
        newStr,
        n = wordList.length,
        i;

    for (i = 0; i < n; i++) {
        wordList[i] = wordList[i] + (i + 1);
    }

    newStr = wordList.join(' ');

    return newStr;
}

var appendNumber = (str, i = 0) => str.replace(/\d+/g, (v) => v + (++i));
appendNumber('5 10 15 20') // 51 102 153 204
