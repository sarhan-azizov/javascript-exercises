
    function encrypt(text, n) {
        if (!text || n <= 0) {
            return text;
        }

        const even = text.split('').filter((item, i) => i%2 === 0).join('');
        const odd = text.split('').filter((item, i) => i%2 !== 0).join('');
        const res = (odd+even).toLowerCase();

        return (n - 1) ? encrypt(res, n-1) : res;
    }

    function decrypt(text, n) {
        if (!text || n <= 0) {
            return text;
        }

        const even = text.slice(0, text.length / 2).split('');
        const odd = text.slice(text.length / 2).split('');
        const res = odd.map((item, i) => item+even[i]).join('');

        return (n - 1) ? decrypt(res, n-1) : res;
    }

    console.log("[encrypt] Abcdefghij => bdfhjacegi", encrypt('Abcdefghij', 1) === 'bdfhjacegi')
    console.log("[encrypt] Abcdefghij => bdfhjacegi => dhaeibfjcg", encrypt('Abcdefghij', 2) === 'dhaeibfjcg')

    console.log("[decrypt] bdfhjacegi => abcdefghij", decrypt('bdfhjacegi', 1) === 'abcdefghij')
    console.log("[decrypt] dhaeibfjcg => bdfhjacegi => abcdefghij", decrypt('dhaeibfjcg', 2) === 'abcdefghij')
