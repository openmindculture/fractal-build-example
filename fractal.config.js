/*
* Require the path module
*/
const path = require('path');

/*
 * Require the Fractal module
 */
const fractal = require('@frctl/fractal').create();

module.exports = fractal;

/*
 * Give your project a title.
 * Remove the customer's name while working in a public place!
 */
fractal.set('project.title', 'Renamed Customer Project');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, 'src/components'));

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'src/docs'));

/*
 * Configuring the web UI and static exports
 * https://fractal.build/guide/project-settings.html#the-fractal-config-js-file
 */

/* Tell the Fractal web preview plugin where to look for static assets. */
fractal.web.set('static.path', path.join(__dirname, 'public'));

/* Set the static HTML build destination */
fractal.web.set('builder.dest', path.join(__dirname, 'dist'));

/*
 * set _preview.hbs as default layout
 */
fractal.components.set('default.preview', '@preview');

/*
 * Build atoms html without date/time stamps to reduce noisy git diff
 * using a custom theme to override the default information tag
 */
const mandelbrot = require('@frctl/mandelbrot');

const myCustomisedTheme = mandelbrot({
  information: [{ }],
});
fractal.web.theme(myCustomisedTheme);
