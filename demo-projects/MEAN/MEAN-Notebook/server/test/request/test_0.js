var request = require('request');

/**
 * Sample for request a URL
 *
 * https://www.npmjs.com/package/request
 */

var url = "http://localhost:3000/api/notes"

request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(JSON.stringify(body, 4, null));
    }
    else {
        console.error(error);
    }
})
