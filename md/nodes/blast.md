# Blast
Blast allows user to create outline around element contents.
You can use elements like ```Text``` and ```Link```.

```js
let nodes = [
  {
    op: "blast"
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

This generates defaults ```stroke``` operation on each affecte element element. 

```js
new Text("Hello").set({
  stroke: {
    op: {
      name: "blast",
      color: "green",
      width: "1px"
    }
  }
});
```




## Custom blast 

We can also specify our own blast options
```js
let nodes = [
  {
    op: {
      name: "blast",
      color: "#1abc9c",
      width: "12px"
    }
  }
];
```

