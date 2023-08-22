function add () {}

function multiply () {}

function internal() {
	const adding = this.internal.a + this.internal.b 
	const multiplying = this.internal.a * this.internal.b     
	const sum = adding * multiplying 
	console.log(sum) 	
}

// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()