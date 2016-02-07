# babel-demo 
demo babel + es2015

## Dependencies

### Install babel-cli globally

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
	options.forEach(item => {
		con.log(item);
	});
})(console);
```

### output: ./dest/index.js


```js
'use strict';

var options = ['yes', 'no'];

(function (con) {
	options.forEach(function (item) {
		con.log(item);
	});
})(console);
```
