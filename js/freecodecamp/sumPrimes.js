function isPrime(num) {
	let result = true;
	if (num !== 2) {
		for(let i=2; i<num; i++) {
			if (num%i === 0) {
				result = false;
				break;
			}
		}
	}
	return result;
}

function allPrimes(num) {
	let result = [];
	for(let i=2; i<=num; i++) {
		if (isPrime(i)) {
			result.push(i);
		}
	}
	return result;
}

function sumPrimes(num) {
	const primes = allPrimes(num);
	let sum = 0;
	if (primes.length > 0) {
		sum = primes.reduce((accumulator, currentValue) => {
			return accumulator + currentValue;
		}, 0);
	}
	return sum;
}

module.exports = sumPrimes;
