'use strict';

var options = ['yes', 'no'];

(function (con) {
	options.each(function (item) {
		con.log(item);
	});
})(console);