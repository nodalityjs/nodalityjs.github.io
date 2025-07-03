# Usage with Node.js
If you don't have node.js, follow the instructions: [here](https://nodejs.org/en)

### Step 1 - Install Nodality, webpack and babel
```sh
npm init -y  # setup new node project
npm i nodality # install nodality library
```

```sh
npm install --save-dev babel-loader @babel/core @babel/preset-env # install babel
npm install webpack webpack-cli --save-dev # install webpack 
```

### Step 2 - Create index.html in your project folder
The bundle.js will be generated in the following step. The div with id mount serves as 
```html
<div id="mount"></div>
<script src="dist/bundle.js"></script>
```


### Step 3 - Create index.js file
```js
import { Text } from 'nodality';

new Text('Hello, Nodality!')
  .set({
    size: 'S1',
    color: '#1abc9c',
    font: 'Arial',
  })
  .render('#mount');
```


### Step 4 - Create webpack.config.js file 
```js
const path = require('path');

module.exports = {
  mode: 'production', // Optimizes output for production
  entry: './src/index.js', // Entry point for your application
  output: {
    filename: 'bundle.js', // Output file
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Transpile code for older browsers
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  resolve: {
    alias: {
      nodality: path.resolve(__dirname, 'node_modules/nodality/dist/index.esm.js'),
    },
  },
};
```

### Step 5 - compile the files
```sh
npx webpack
```

### Step 6 - run the project and open it in the browser
```sh
npx serve . -l 4000
open localhost:4000 # have to run it every time I edit the file
```