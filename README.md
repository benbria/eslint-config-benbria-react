## For ES6/React Projects

Copy and paste this into your shell:

```
npm info "eslint-config-benbria-react@latest" peerDependencies --json | \
    command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "eslint-config-benbria-react@latest"
echo '{"extends": "benbria-react"}' > .eslintrc
```

Or, for yarn:

```
npm info "eslint-config-benbria-react@latest" peerDependencies --json | \
    command sed 's/[\{\},]//g ; s/: /@/g' | xargs yarn add --dev "eslint-config-benbria-react@latest"
echo '{"extends": "benbria-react"}' > .eslintrc
```
