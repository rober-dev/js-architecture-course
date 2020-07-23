# Project architecture setup

Setup packages and its dependencies. Use yarn workspaces and lerna

1. Configure yarn to use workspaces

> `yarn config set workspaces-experimental true`

2. Init yarn

> `yarn init`

3. Add lerna as dev dependencie

> `yarn add lerna --dev`

4. Init lerna (Need be installed globally with _npm i -G lerna_)

> `lerna init`

5. Configure lerna.json

```json
{
  "packages": ["packages/*"],
  "version": "0.0.0",
  "npmClient": "yarn",
  "useWorkspaces": true
}
```

6. Configure packages.json.

```json
{
...
  "private": true,
  "workspaces": [
    "packages/*"
  ],
..
}
```

7. Steps for each packages

- `mkdir packages/package-name && cd packages/package-name`

- (in packages/package-name) `yarn init`

- Set package name (@parent/package-name) and set version=0.0.0 in package.json

## OTHERS USEFUL COMMANDS

Add dependencies between packages:
`lerna add @parent/package-common --scope=@parent/app`

Remove dependencies:
`lerna exec -- yarn remove @parent/package-to-remove`

Add global dependencies:
`yarn add -W package-name`

Add global dev dependencies:
`yarn add -W -D package-name`

Build dependencies and add them to packages:
`lerna bootstrap`
