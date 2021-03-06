import config from '../webpack.config.dev';
import express from 'express';
import open from 'open';
import path from 'path';
import webpack from 'webpack';

/* eslint-disable no-console */
const port = 3000;
const proxy_port=3003;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});



app.listen(port, function (err) {
  if(err) console.log(err);
  else open(`http://localhost:${proxy_port}`);
})
