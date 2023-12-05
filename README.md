# js-color-range-generator

`js-color-range-generator` is a TypeScript library that generates a list of colors based on a given hue value and color range.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)

## Installation

Install the package via npm:

```bash
npm install js-color-range-generator
```

## Usage

Import the generate function and use it to generate colors based on the provided parameters:

```bash
import { generate } from 'js-color-range-generator';

const hueValue = 180;
const colorRange = [10, 20, 30];
const colors = generate(hueValue, colorRange);

if (Object.keys(colors).length > 0) {
  console.log(colors); // Output: Object containing colors in hexadecimal format
} else {
  console.error('An error occurred or invalid input provided.');
}
```

## API

### generate(hueValue: number, colorRange: number[]): Record<number, string>
Generates a list of colors based on the provided `hueValue` (0 to 360) and `colorRange` array. Returns an object containing colors in hexadecimal format. In case of an error, it returns an empty object.

`hueValue`: The hue value for the HSL color.\
`colorRange`: An array of numbers representing the color range.

Returns an empty object if an error occurs.
