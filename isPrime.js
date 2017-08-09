function isPrime(n) {
    if (n === 3 || n === 2 ) {
	    return true;
    } else if (n % 2 === 0 || n % 3 === 0) {
        return false;
    }

	return n > 1;
}

function isPrime(value) {
    for(var i = 2; i < value; i++) {
		console.log(value , i, value % i)
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}

[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 
 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199].map(isPrime)

