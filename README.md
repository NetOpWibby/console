# @webb/console

> Print console messages in **STYLE**.



## Install

```sh
$ npm i @webb/console
```



## Usage

```js
import print from "@webb/console";

console.log(print.cyan("This text is cyan"));

// You can also nest styles!
console.log(print.green(print.bold("This text is bold and green")));
```



## API

### print.[parameter]\(input);
#### [parameter]

Type: `enum`

Available options:

##### Color
- black | blackLine
- blue | blueLine
- cyan | cyanLine
- gray | grayLine OR grey | greyLine
- green | greenLine
- magenta | magentaLine
- red | redLine
- white | whiteLine
- yellow | yellowLine

##### Decoration
- bold
- dim
- invert
- underline

### input

Type: `string`



## Tests

```sh
# Run all tests, sequentially
$ npm test

# Test dependencies for latest versions
$ npm run test:dependencies

# Lint "src" directory
$ npm run test:typescript

# Test this module
$ npm run test:assert

# Not really a test, just shows a 20x9 rainbow-esque banner
$ npm run showcase
```
