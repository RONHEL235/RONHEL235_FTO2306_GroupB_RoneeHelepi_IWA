const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

let extract = data.lists
let first = extract[0][1]
let second = extract[1][1]
let third = extract[2][1]

const result = []

const extractBiggest = () => {
	if (first[first.length - 1] > second[second.length - 1] && third[third.length - 1]) {
		return first.pop(first[first.length - 1])
	}else if (second[second.length - 1] > third[third.length - 1]) {
		return second.pop(second[second.length - 1])
	}else if (first[first.length - 1] > third[third.length - 1]) {
		return first.pop(first[first.length - 1])
	}else if (second[second.length - 1] > first[first.length - 1]) {
			return second.pop(second[second.length - 1])
	}else {
		return third.pop(third[third.length - 1])
	}
}

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)