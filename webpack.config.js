const path = require('path');
 
module.exports = {
  entry: './index.js',
  mode: 'production',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    library: {
      type: 'commonjs2'  // For Node.js modules
    }
  }
};
 