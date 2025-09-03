let str=('volkswagon virtus')
function findDuplicates(str){
	let letters= str.split('');
	let duplicates = letters.filter(( char, index)=> letters.indexOf(char) !== index
	);
	return[...new Set(duplicates)];
	}
	console.log("Duplicates:" ,findDuplicates(str));