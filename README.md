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

Each component consists of a folder/directory with the same name as the file name and handle.

text-example/text-example.hbs

```
<p>{{ text }}</p>
```

The handle has to be defined in the `name.config.yml` to use the component inside other components.
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

## Folder Structure 

TODO how to organize projects in sub-folders?

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
