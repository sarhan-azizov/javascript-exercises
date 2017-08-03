function templater(templateString, dataObj) {
	return templateString.replace(/\$\{(\w+)\}/g, "$1")
}

templater('${who} ${action} ${what}', {
 who: 'mama',
 action: 'mila',
 what: 'ramu'
});
