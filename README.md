# react-apollo-create-fragment-container

[![npm](https://img.shields.io/npm/v/react-apollo-create-fragment-container.svg)](https://www.npmjs.com/package/react-apollo-create-fragment-container)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Installation

```sh
npm install react-apollo-create-fragment-container
```

## Usage

### createFragmentContainer(Component: ReactComponent, fragments?: Object)

```js
import createFragmentContainer from 'react-apollo-create-fragment-container';

// define `fragments` on Component
Component.fragements = {};

createFragmentContainer(Component);

// Or pass `fragments` as second argument
createFragmentContainer(Component, fragments);
```

## License

MIT © [C. T. Lin](https://github.com/chentsulin/react-apollo-create-fragment-container)
