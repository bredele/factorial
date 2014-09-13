
/**
 * Test dependencies.
 */

var assert = require('assert');
var factorial = require('..');

describe("factorial", function() {

	it("0", function() {
		assert.equal(factorial(0), 1);
	});

	it("1", function() {
		assert.equal(factorial(1), 1);
	});

	it("2", function() {
		assert.equal(factorial(2), 2);
	});

	it("5", function() {
		assert.equal(factorial(5), 120);
	});

	it("10", function() {
		assert.equal(factorial(10), 3628800);
	});
	
	it("20", function() {
		assert.equal(factorial(20), 2432902008176640000);
	});
});