TODO: //
* Readme
* Tag
* Travis green build

## Synopsis

This project is an implementation of quick sort algorithm for numeric arrays,
as one of the most efficient for the large amount of data. Written in Javascript, using
ES2015 syntax. Please make sure you have the latest, 6th [Node](https://nodejs.org/en/) version.   
* No any dependencies. Fast and effective.

## Code Example

```
const mergeAndSortNumericArrays = require('./mergeAndSortNumericArrays');
const arrayA = [1, 2, 5];
const arrayB = [2, 3];

const result = mergeAndSortNumericArrays(arrayA, arrayB);
```

## Tests

Test are written with [Jasmine](http://jasmine.github.io) framework. To run them just execute:
```
npm i
npm test
```

## License

The MIT License (MIT) Copyright (c) 2016 Donskikh A.V.
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
