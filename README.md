## Example of the project setup (without actual project content)

https://github.com/openmindculture/fractal-build-example/tree/customer-webpack-setup

* [ ] When we define [contenthash] in `./webpack.config.js`, how to use the same filenames in `src/_preview.hbs`?
* [ ] We use multiple css loaders, so we generate more css files than needed, when using [contenthash] filename.
* [x] We need(ed) to commit our `dist` folder (build target) to git for static deployment.
   (That problem will be solved by a server side build pipeline.)
   To prevent noisy git diff, we removed the timestamp in html files using `mandelbrot.options` to see only the actual content changing files.
   Any way to prevent that `[contenthash]` in `_preview.hbs`  will make all files seem changed after each build?
