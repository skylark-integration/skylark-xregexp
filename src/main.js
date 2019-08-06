define([
	'./xregexp',
	'./addons/build',
	'./addons/matchrecursive',
	'./addons/unicode-base',
	'./addons/unicode-blocks',
	'./addons/unicode-categories',
	'./addons/unicode-properties',
	'./addons/unicode-scripts',

],function(XRegExp,build,matchRecursive,unicodeBase,unicodeBlocks,unicodeCategories,unicodeProperties,unicodeScripts){
	build(XRegExp);
	matchRecursive(XRegExp);
	unicodeBase(XRegExp);
	unicodeBlocks(XRegExp);
	unicodeCategories(XRegExp);
	unicodeProperties(XRegExp);
	unicodeScripts(XRegExp);

	return XRegExp;
});



