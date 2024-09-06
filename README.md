# Fractal.build Setup

See [branch customer-webpack-setup](https://github.com/openmindculture/fractal-build-example/tree/customer-webpack-setup) for webpack setup example.

## TODO

* use atomic design folder structure
* fix linter configurations
* configure static build target
* configure PostCSS and JS import
* configure github page for demo output
* integrate codecept.io for screenshots and code snapshots
* add more complex examples for nested components
* add example page using multiple components
* update documentation and credits

## Installation

Requirements: node / npm.

```
npm install
```

For development, you might also want to install the fractal command line interface

```
npm i -g @frctl/fractal
```

## Start preview server

```
fractal start
```

or with a gulp or webpack setup, use the default task:

```
gulp
```

Browse to the 'Local URL' displayed in your terminal to view your component library, usually
http://localhost:3000

## How to Browse and Copy the Code

Browse components and use the HTML/View tabs to see rendered HTML or markup code.

**TODO** add screenshot

## Development

### Customizing the Preview UI Theme

The preview UI is built upon themes and can be customized:

https://fractal.build/guide/web/default-theme.html#configuration

### Setting Up the Development Environment

Further reading:

https://fractal.build/guide/installation.html#installing-fractal-in-your-project

https://fractal.build/guide/getting-started.html#the-tl-dr-method

### Working with Components
## Components

A component usually consists of a markup and a configuration.
The name should match the handle (technical name).

text-example/text-example.hbs

```
<p>{{ text }}</p>
```

### Variants

Variants are created by adding `--` and a name suffix.
Variants share the parent context by default.

```
arrow.hbs
arrow--right.hbs
arrow--left.hbs
```

Add `collated: true` to the configuration, to automatically display all variants on one overview page.


### Compound Components Using Assets

To add assets, like CSS, JS, and image files to a component, it must be a **compound component**, i.e.
all files are saved in a sub-folder that matches the component's name.
Compound components can have variants, for example

```
color-arrow/color-arrow-left.hbs
color-arrow/color-arrow-left.hbs
color-arrow/color-arrow-left.hbs
color-arrow/color-arrow-left.hbs
```

### Configuration Files

You can use JSON or YAML for configuration.

We chose YAML because it might be easier to maintain for "non-technical" collaborators.

The handle has to be defined in the configuration to use the component inside other components.
The name will be used to display title and label.
Default text for handlebars variables can be defined in the configuration context.

text-example/text-example.config.yml

```
name: text example
handle: text-example
context:
    text: This is an example component!
```

You can use this example component inside of another component by referencing the handle:

```
<div>{{> @text-example }}</div>
```

## Folder Structure: Collections

Components can be grouped in folders to form a **collection**.

```
components
components/arrows
components/arrows/right-arrow.hbs
components/arrows/right-arrow.config.yml
```

Files inside the same folder can also have a shared configuration.

```
components/arrows/arrows.config.yml
components/arrows/left-arrow.hbs
components/arrows/right-arrow.hbs
```

`components` defines components in handlebars markup (`.hbs`),
`pages` defines pages in markdown (`.md`).

### Ordering

You can prefix file names by numbers to order pages.
The numbers will be ignored, except for ordering.

```
pages/01-index.md
pages/02-about-us.md
pages/03-jobs.md
```

## Global Styles and Component Styles

Use SCSS syntax.

Styles will be compiled using SASS.

All styles will be imported from `components/assets/scss/global.scss`

* `global.scss` is the base file
* `helpers.scss` defines breakpoint mixins etc.
* `variables.scss` defines project variables like $brand-primary color

All component styles will be imported from `components/**/*.scss` and processed into one combined css file (`public/css/global.css`) which is used by `components/_preview.hbs`.

### Linting and Coding Standards

We will use prettier, eslint, stylelint, and editorconfig
to maintain a concise, clean, and modern code base.

We recommend that you install and activate tool support in your IDE.

Handlebars `.hbs` markup is currently not supported by prettier by default,
but there there are editor extensions like
[Prettier for Handlebars for VisualStudio Code](https://marketplace.visualstudio.com/items?itemName=EmberTooling.prettier-for-handlebars-vscode):

```
ext install EmberTooling.prettier-for-handlebars-vscode
```

## References

* [Rachel Andrew: Pattern Library First: an Approach For Managing CSS](https://www.smashingmagazine.com/2018/07/pattern-library-first-css/)

* [Bootstrap Breakpoints](https://getbootstrap.com/docs/5.0/layout/breakpoints/)
