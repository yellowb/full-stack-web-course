var moment = require("moment-timezone");

/**
 * Just require "moment-timezone" is enough, it will load ""moment" automatically
 */

/**
 * Sample for moment js
 *
 * http://momentjs.com/docs/
 * http://momentjs.com/timezone/docs/
 */

// Print datetime with format
var now = moment();
console.log("Now: " + now.format());
console.log("Now(YYYYMMDDHHmmss:SSS): " + now.format("YYYYMMDDHHmmss:SSS"));

// Convert String to moment object
var dateTime = moment("20160802203519:252", "YYYYMMDDHHmmss:SSS");
console.log("Convert String to moment object: " + dateTime.format());

// Convert to GMT timezone
dateTime.tz("GMT");
console.log("Convert to GMT timezone: " + dateTime.format());
