
/**
 * Factorial.
 *
 * Examples:
 *
 *   factorial(0); // => 1
 *   factorial(5); // => 120
 *   
 * @param {Number} nb
 * @param {Number}
 * @api public
 */

module.exports = function(nb) {
	var result = nb;
	while(--nb > 0) {
		result = result * nb;
	}
	return result || 1;
};


