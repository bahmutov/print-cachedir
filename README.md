# print-cachedir

> Prints cache dir for a given project that uses [cachedir](https://github.com/LinusU/node-cachedir)

[![NPM][npm-icon]][npm-url]

[![Build status][ci-image]][ci-url]
[![semantic-release][semantic-image]][semantic-url]
[![standard][standard-image]][standard-url]
[![renovate-app badge][renovate-badge]][renovate-app]

## Install and use

Requires [Node](https://nodejs.org/en/) version 6 or above.

### local

```sh
npm install --save-dev print-cachedir
$(npm bin)/print-cachedir <module name>
```

### global

```sh
npm install -g print-cachedir
print-cachedir <module name>
```

### one time using npx

```sh
npx print-cachedir <module name>
```

## Example

Imagine we want to find out where [Cypress](https://www.cypress.io/) is caching its binary (using [cachedir][cachedir] module). Using npm@5+ we can see it on Mac (and other platforms)

```sh
npx print-cachedir Cypress
/Users/gleb/Library/Caches/Cypress
```

### Small print

Author: Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt; &copy; 2018

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](https://glebbahmutov.com)
* [blog](https://glebbahmutov.com/blog)

License: MIT - do anything with the code, but don't blame me if it does not work.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/print-cachedir/issues) on Github

## MIT License

Copyright (c) 2018 Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt;

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[npm-icon]: https://nodei.co/npm/print-cachedir.svg?downloads=true
[npm-url]: https://npmjs.org/package/print-cachedir
[ci-image]: https://travis-ci.org/bahmutov/print-cachedir.svg?branch=master
[ci-url]: https://travis-ci.org/bahmutov/print-cachedir
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standard-url]: http://standardjs.com/
[renovate-badge]: https://img.shields.io/badge/renovate-app-blue.svg
[renovate-app]: https://renovateapp.com/

[cachedir]: https://github.com/LinusU/node-cachedir