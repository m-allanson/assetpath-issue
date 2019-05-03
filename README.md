# About

Issue reproduction site

# Steps

- `yarn`
- `yarn run build`
- See error:

```
29 |
  30 | function withPrefix(path) {
> 31 |   return normalizePath(__BASE_PATH__ + "/" + path);
     | ^
  32 | }
  33 |
  34 | function withAssetPrefix(path) {


  WebpackError: ReferenceError: __BASE_PATH__ is not defined
```
