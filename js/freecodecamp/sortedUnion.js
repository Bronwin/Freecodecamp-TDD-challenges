function uniteUnique(arr) {
	let combinedArray = [...arguments[0]];
	for(let i=1; i<=arguments.length-1; i++) {
		combinedArray.push(...arguments[i]);
	}

	const result = combinedArray.filter((element, index) => {
		return combinedArray.indexOf(element) === index;
	})

  return result;
}

module.exports = uniteUnique;
