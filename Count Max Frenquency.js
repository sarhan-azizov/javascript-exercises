function countMaxFrequency(str) {
    var count = {},
        n = str.length,
        i,
        max = '';

    for (i = 0; i < n; i++) {
        if (count[str[i]]) {
            count[str[i]]++;
        } else {
            count[str[i]] = 1;
        }

        if (max === '' || count[str[i]] > count[max]) {
            max = str[i];
        }
    }

    return max + ' (' + count[max] + ')';
}


var countMaxFrequency = (str) =>
    Array.prototype.reduce.call(str, (acum, l) => {
        acum[l] = acum[l] ? ++acum[l] : 1;
        acum.max = acum.max ? acum[acum.max] < acum[l] ? l : acum.max : l
        acum.value = `${acum.max} = (${acum[acum.max]})`;

        return acum;
    }, {}).value;
// countMaxFrequency('aabbb3');
