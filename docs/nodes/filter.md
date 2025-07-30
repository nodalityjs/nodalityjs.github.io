# Filter


## Default filter
To use the filter, we use this:

```js
let nodes = [
  {
    op: "filter"
  }
];

let elements = [
  {
    type: "img"
  }
];
```

This generates defaults grayscale operation on each element.  

```js
new Image("url")
  .set({
    filtera: {
      op: {
        name: "filter",
        filter: "grayscale(0.7)"
      }
    }
  });
``` 

## Custom filter
If we supply more props, like sepia.
```js
let nodes = [
  {
    op: "filter",
    name: "sepia"
  }
];
```

The generated operation will have sepia filter.

```js
new Image("url")
  .set({
    filtera: {
      op: {
        name: "filter",
        filter: "sepia(0.7)"
      }
    }
  });
```    
