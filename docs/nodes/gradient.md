# Gradient
To add gradient to an element, use the following object:

## Default gradient
To use the default gradient, we use this:
You can use elements like ```Text``` and ```Link```.

```js
let nodes = [
  {
    op: "gradient"
  }
];

let elements = [
  {
    type: "h1",
    value: "Hello"
  }
];
```


We then use the element in ```Designer``` instance as we are used to.
```js
new Des()
    .nodes(nodes) 
    .add(els)
    .set({
        mount: "#mount"
    });
```

This generates defaults gradient operation on each element. 

```js
new Text("Gradient").set({
  gradient: {
    op: {
      name: "gradient",
      gradient: "linear-gradient(#3498db,#1abc9c)"
    }
  }
});

```


## Custom gradient

We can also specify our own gradient.
```js
let nodes = [
  {
    op: "gradient",
    gradient: "linear-gradient(orange, green)"
  }
];
```


This generates custom gradient.

```js
 new Text("Gradient").set({
  gradient: {
    op: {
      name: "gradient",
      gradient: "linear-gradient(orange, green)"
    }
  }
});
```

```sh
nvm use 21 && sh docs.sh
```


