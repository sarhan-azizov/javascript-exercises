/* ======================================================
https://github.com/phstc/jquery-dateFormat
yy = short year(17)
yyyy = long year(2017)
MM = month (01-12)
MMM = month abbreviation (Jan, Feb ... Dec)
dd = day (01 - 31)
ddd = day of the week in words (Monday, Tuesday ... Sunday)
*/
function getPrettyDate(tpl, date) {
	const d = date ? new Date(date) : new Date();
	const slice = String.prototype.slice;
	const strg = {
		'yy': String.prototype.substr.call(d.getFullYear(), 2),
		'yyyy': d.getFullYear(),
		'MM': slice.call('0' + (d.getMonth() + 1), -2),
		'MMM': ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][d.getMonth() + 1],
		'dd': slice.call('0' + d.getDate(), -2),
		'ddd': ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fry', 'Sut'][d.getDay()],
	};
	
	return tpl.replace(/\w+/g, (v) => strg[v]);
}
