Array.prototype.myForEach = function (fn) {
    var n = this.length,
        i,
        array = this;

    for (i = 0; i < n; i++) {
        fn.call(this, array[i], i, array);
    }
};


Array.prototype.myForEach = function(cb, ctx) {
	let i = 0;
	const ln = this.length;
	
	for (i; i < ln; i++) {
		cb.call(ctx, this[i], i, this);
    }
}

[1, 2, 3].myForEach((i, idx, arr) => 
	console.log(i,idx,arr));
