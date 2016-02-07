const options = ['yes', 'no'];

(con => {
	options.each(item => {
		con.log(item);
	});
})(console);

