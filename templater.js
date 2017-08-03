function templater(templateString, dataObj) {
	return templateString.replace(/\$\{(/w+)\}/g, (m, p) => dataObj[p])
}

templater('${who} ${action} ${what}', {
 who: 'mama',
 action: 'mila',
 what: 'ramu'
});
