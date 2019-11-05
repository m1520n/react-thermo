# Welcome to react-thermo 👋

[![Version](https://img.shields.io/npm/v/react-thermo.svg)](https://www.npmjs.com/package/react-thermo)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)

> React Thermometer Component for React Apps

![React Thermo](https://github.com/m1520n/react-thermo/blob/master/thermo.png)

## Install

```sh
yarn add react-thermo
```

## Usage

```jsx
import Thermo from 'react-thermo'

  <Thermo
    min={-50}
    max={50}
    temperature={25}
  >
```

## Props

```
| Props            | Type          | Default | Description |
| :---------            | :--:          | :-----: | :----------- |
| temperature            | `number`     | - | temperature value (required) |
| min            | `number`     | `-50` | base temperature |
| max        | `number`     | `50` | maximum temperature |
| zones            | `number[]`     | `[0, 25]` | Define medium and high temperature zones. `lowTemperatureColor` property will be used below the first value, `mediumTemperatureColor` will be used above the first value and `highTemperatureColor` will be used above the second value from `zones` array |
| glassColor            | `string`      | `#bdc3c7` | set thermometer glass color |
| mercuryPipeColor            | `string`      | `#ecf0f1` | set mercuty pipe color |
| lowTemperatureColor            | `string`      | `#3498db` | set mercury color from low temperature |
| mediumTemperatureColor            | `string`      | `#e67e22` | set mercury color from medium temperature |
| highTemperatureColor            | `string`      | `#c0392b` | set mercury color from high temperature |
| highlightColor            | `string`      | `#fff` | set glass highlight color |

## Author

👤 **Michał Winiarski <michal.winiarski@devbrains.pl>**

- Website: https://devbrains.pl
- Github: [@m1520n](https://github.com/m1520n)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/m1520n/react-thermo/issues).

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
```
