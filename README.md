# build-pnm-webcomponent-issue

## Dependencies Tree
```
$ npm ls
├─┬ test-webcomponent-feature-a@0.0.2
│ └── test-webcomponent@1.0.0
└─┬ test-webcomponent-feature-b@0.0.3
  └── test-webcomponent@2.0.0
```

As you can see there are 2 major versions of `test-webcomponent`.

## Setup 1
- build step via polyserv to translate bare module specifier to relative path

**IS**:
Page Feature A+B gives error in browser
`DOMException: Failed to execute 'define' on 'CustomElementRegistry': this name has already been used with this registry`

**SHOULD BE**:
Error during install?
=> package name map could solve it?
=> let's try Setup 2

### Steps to reproduce

1. `npm install --only=production`
2. `npm run start:noShim`
3. Open http://127.0.0.1:8081/components/build-pnm-webcomponent-issue/
4. Feature A, Feature B works
5. Feature A+B gives error


## Setup 2

- yarn plug'n'play
- generate package-name-maps (via build-pnm)
- shim package-name-maps (via es-module-shims)

**IS**:
Page Feature A+B gives error in browser
`DOMException: Failed to execute 'define' on 'CustomElementRegistry': this name has already been used with this registry`

**SHOULD BE**:
Error/Question while creating package name map.

Possible example flow:
```
Could not find a sadisfying version for 'test-webcomponent'. Which one would you like to use in your package name map?
  > v1.0.0 (required by test-webcomponent-feature-a@0.0.2)
    v2.0.0 (required by test-webcomponent-feature-b@0.0.3)
```


### Steps to reproduce

1. `yarn install`
2. `yarn start`
3. Open http://127.0.0.1:8080
4. Feature A, Feature B works
5. Feature A+B gives error
