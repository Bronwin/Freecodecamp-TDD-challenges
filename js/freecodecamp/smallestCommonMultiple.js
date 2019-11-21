function smallestCommons(arr) {
	if (arr.length != 2) return -1;

	//get the min and max numbers
	const min = Math.min(arr[0], arr[1]);
	const max = Math.max(arr[0], arr[1]);

	//get an array of numbers but with largest numbers first
	let arrayNumbers = [];
	for(let i=max; i>=min; i--) {
		arrayNumbers.push(i);
	}

	//if the last and second_last number mod the other numbers
	//then the smallest common multiple if last * second_last
	let result = arrayNumbers[0] * arrayNumbers[1];
	let found = false;

	while (!found) {
		for(let i=arrayNumbers[0]; i>=arrayNumbers[arrayNumbers.length-1]; i--) {
			if (result % i !== 0) {
				found = false;
				result++;
				break;
			}
			found = true;
		}
	}
  return result;
}

module.exports = smallestCommons;
