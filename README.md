# babel-demo 
demo babel + es2015

## Dependencies

### Install Babel-cli Globally

```bash
sudo npm install babel-cli -g
```

### Dev Dependencies

```bash
sudo npm install babel-cli --save-dev
```

```bash
sudo npm install babel-preset-es2015 --save-dev
```

```bash
sudo npm install xo --save-dev
```

### input: ./index.js

```js
const options = ['yes', 'no'];

(con => {
	options.each(item => {
		con.log(item);
	});
})(console);
```

### output: ./dest/index.js


```js
'use strict';

var options = ['yes', 'no'];

(function (con) {
	options.each(function (item) {
		con.log(item);
	});
})(console);
```
