# edux

**edux** is a functional web server for Node. Similar to [redux](http://redux.js.org), edux takes a series of reducers that
transform a request and response object, eventually handing them off so that the response can be sent to the
client.

---

Install edux using NPM...

```bash
npm install --save edux
```

---

Here's a really quick example of a web server written with edux...

```js
const edux = require('edux');

const app = edux(() => (
  (req, res, done) => (
    done(
      req,
      Object.assign(
        {},
        res,
        { status: 200, data: 'OK' }
      )
    )
  )
));

app.listen(3000);
```

There are more comprehensive and well documented examples in the `examples` directory.

---

## Helper modules

edux is designed to be incredibly light weight. Most features such as body parsing or sending detailed
responses have been extracted into separate packages which you can plug in and use...

* [edux-responses](/JesseDunlap/edux-responses) &mdash; Response features, such as JSON responses and status codes.
* [edux-errors](/JesseDunlap/edux-errors) &mdash; Error handling and error responses.
* [edux-file](/JesseDunlap/edux-file) &mdash; Static file serving and file responses.

## Contributing

edux is under *heavy development* and is not recommended for production use. All contribution is
appreciated. If you find a bug or have a suggestion for an improvement, please create an [Issue](/JesseDunlap/edux/issues),
or better yet a [Pull Request](/JesseDunlap/edux/pulls). Thank you!

edux is released under the [MIT License](LICENSE.md).
