function fibonacci(num) {
	let returnArray = [0, 1];
	for (let i=2; i<=num; i++) {
		returnArray.push(returnArray[i-1] + returnArray[i-2]);
	}
	return returnArray;
}

function fibonacciR(num) {
	if (num < 2) {
		return num;
	}
	return fibonacciR(num-1) + fibonacciR(num-2);
}

function sumFibs(num) {
	const fibsArray = fibonacci(num);

	const sum = fibsArray.reduce((accumulator, currentValue) => {
		if ((currentValue <= num) && (currentValue%2>0)) {
			return accumulator + currentValue;
		}
		return accumulator;
	},0);
  return sum;
}

module.exports = sumFibs;
