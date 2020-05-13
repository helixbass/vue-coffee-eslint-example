# vue-coffee-eslint-example

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Explications

This section explains various settings made in __package.json__.

### "resolutions" field
>> makes it work with vue templates

> The issue causing the Parsing error: unexpected ( is that vue-eslint-parser wraps template expressions in 0(...), which doesn't parse in Coffeescript

> In the meantime, using Yarn selective dependency resolutions, you can swap in a forked version of vue-eslint-parser that uses [...] instead of 0(...):

> In your package.json:
```
"resolutions": {
  "eslint-plugin-vue/vue-eslint-parser": "github:helixbass/vue-eslint-parser#0fff0dd1"
},
```
and then
```yarn install```

### "devDependencies": custom "@vue/cli-plugin-eslint":"github:"
>> makes it work with .coffee files

> Still it won't report ESLint errors in .coffee files in the yarn serve dev server, since Vue's cli-plugin-eslint hardcodes file extensions that don't include .coffee

> So to work around that you can use a forked version of @vue/cli-plugin-eslint:

> yarn add --dev github:helixbass/vue-cli#vue-cli-plugin-eslint-v4.1.2-dev-400-gitpkg
> At that point it is successfully reporting ESLint errors for me both in the yarn serve dev server and when running yarn lint on the command line

Source: https://github.com/helixbass/eslint-plugin-coffee/issues/27#issuecomment-570438859

### "rules"

> I saw that some Vue ESLint rules may not work correctly out-of-the-box with Coffeescript (eg "vue/require-render-return"), so I disabled it manually
```
"rules": {
  "coffee/id-length": "off",
  "vue/require-render-return": "off"
},```

Source: https://github.com/helixbass/eslint-plugin-coffee/issues/27#issuecomment-570438859
