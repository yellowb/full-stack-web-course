var _ = require("lodash");

/**
 * Sample for lodash
 *
 * https://lodash.com/docs
 */

// Check empty
console.log("Empty? " + _.isEmpty(null));
console.log("Empty? " + _.isEmpty([]));
console.log("Empty? " + _.isEmpty({}));
console.log("Empty? " + _.isEmpty(undefined));
console.log("Empty? " + _.isEmpty({name: 'Tom'}));

// Remove duplicated elements
var array = [0, 1, 1, 2, 2, 2, 3, 3];
var uniqArray = _.uniq(array);
console.log("Remove duplicated elements: " + JSON.stringify(uniqArray));
