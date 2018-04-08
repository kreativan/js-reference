Automatically create package.json file
```
$ npm init
```

```
{
    "name": "myapp",
    "version": "1.0.0",
    "description": "My first App",
    "author": "Ivan Milincic",
    "licence": "MIT"
}
```

Install npm package and save it to package.json (--save)
```
$ sudo npm install --save grunt-saas
```
Result:
```
{
    "name": "myapp",
    "version": "1.0.0",
    "description": "My first App",
    "author": "Ivan Milincic",
    "licence": "MIT",
    "dependencies": {
        "grunt-sass": "^1.0.0"
    }
}
```
`^1.0.0` = latest stable version.    
`*` = latest version, dev or beta any...

Install everything from package.json
```
$ npm Install
```
List all installed packages in this folder
```
$ npm list
```
List all globally installed packages
```
$ npm -g list
```
Packages npm thinks that should be outdated
```
$ npm outdated
```
Update packages
```
$ npm update
```
Uninstall package (use --save to remove it from the package.json also)
```
$ npm uninstall --save grunt-sass
```
Remove unnecessary files (clean junk)
```
$ npm prune
```
