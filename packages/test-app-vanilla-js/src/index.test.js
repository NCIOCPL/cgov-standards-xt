const doSomeMath = require("../src/index.js");

describe("doSomeMath", () => {
	it("adds 2 numbers with expected result", () => {
		// assert
		expect(doSomeMath.sum(1, 1)).toBe(2);
		expect(doSomeMath.sum(2, 2)).toBe(4);
	});
	it("subtracts 2 numbers with expected result", () => {
		expect(doSomeMath.diff(5, 3)).toBe(2);
		expect(doSomeMath.diff(2, 2)).toBe(0);
	});
	it("multiplies 2 numbers with expected result", () => {
		expect(doSomeMath.product(1, 1)).toBe(1);
		expect(doSomeMath.product(2, 16)).toBe(32);
	});
});
