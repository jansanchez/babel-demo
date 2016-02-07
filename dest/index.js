'use strict';

var options = ['yes', 'no'];

(function (con) {
	options.forEach(function (item) {
		con.log(item);
	});
})(console);