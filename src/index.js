import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import bodyParser from 'body-parser';
import webConfig from './../webConfig';



const port = process.env.PORT || 3000;
const app = express();

app.use(
  '/api',
  proxy("https://ks-backend.herokuapp.com/")); //ici

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get(['/*/:param/*/:param2/*','/*/:param/*/:param2','/*/:param/*','/*/:param', '*'], (req, res) => {
  const ParamValue = req.params.param ? req.params.param : null;
  const ParamValue2 = req.params.param2 ? req.params.param2 : null;
  const store = createStore(req);

  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => {
      return route.loadData ? route.loadData(store, ParamValue, ParamValue2) : null;
    })
    .map(promise => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);

    if (context.url) {
      return res.redirect(301, context.url);
    }
    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
});

app.listen(port, () => {
    console.log(`Running on Port ${port}`);
});