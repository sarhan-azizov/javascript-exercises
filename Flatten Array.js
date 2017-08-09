input: [{a: 'a'}, 'b', ['c', 'd'], ['e', ['f']], 'g']
output: [{a: 'a'}, 'b', 'c', 'd', 'e', 'f', 'g']

function flattenArray(arr) {
	const res = [];
	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			Array.prototype.push.apply(res, flattenArray(arr[i]));
		} else {
			res.push(arr[i]);
		}
	}

	return res;
}
