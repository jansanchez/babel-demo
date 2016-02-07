const options = ['yes', 'no'];

(con => {
	options.forEach(item => {
		con.log(item);
	});
})(console);

