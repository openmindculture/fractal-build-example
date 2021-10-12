# fractal-build-example
evaluation of fractal.build atomic design pattern tool

## Installation

Requirements: node / npm.

`npm install`

For development, you might also want to install the fractal command line interface

`npm i -g @frctl/fractal`

Start development server:

```
cd example-project
fractal start
```

Browse to the 'Local URL' displayed in your terminal to view your component library, usually
http://localhost:3000

Note that the optional `--sync` option did not work when I first tried the fractal setup.
But without sync, do we need to restart the server after every code change?
TODO: how to configure a file watcher?

### Further reading:

https://fractal.build/guide/installation.html#installing-fractal-in-your-project

https://fractal.build/guide/getting-started.html#the-tl-dr-method

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

### Configuration Files

You can use JSON or YAML for configuration.

We chose YAML because it might be easier to maintain for "non-technical" collaborators.

The handle has to be defined in the configuration to use the component inside other components.
The name will be used to display title and label.
Default text for handlebars variables can be defined in the configuration context.

text-example/text-example.yml

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
components/arrows/right-arrow.json
```

Files inside the same folder can also have a shared configuration.

```
components/arrows/arrows.json
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

TODO how to define and apply global styles, e.g. base font and colors

TODO how to define component styles

### Linting and Coding Standards

We will use prettier, eslint, stylelint, and editorconfig
to maintain a concise, clean, and modern code base.

Recommended to install and activate tool support in your IDE.

Handlebars `.hbs` markup is currently not supported by prettier by default,
but there there are editor extensions like
[Prettier for Handlebars for VisualStudio Code](https://marketplace.visualstudio.com/items?itemName=EmberTooling.prettier-for-handlebars-vscode)

`ext install EmberTooling.prettier-for-handlebars-vscode`

* TODO edit .editorconfig according to agency style guide
* TODO configure stylelint
* TODO configure eslint
