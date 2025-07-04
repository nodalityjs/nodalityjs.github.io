# Row
Row creates a simple ```FlexRow``` element.

```js
let elements = [
  {
    type: "row"
  }
];
```

The ```colat``` property allows the ```FlexRow``` to shrink to single column at ```600px```. 
```js
 new FlexRow()
  .set({
    borderObj: {
      width: "3px",
      color: "orange"
    },
    colat: "600px"
  })
  .items([
    new Text("First").set({
      border: "3px solid green",
      width: "100%"
    }),
    new Text("Second").set({
      border: "3px solid green",
      width: "100%"
    }),
    new Text("Third").set({
      border: "3px solid green",
      width: "100%"
    })
  ])
  .render("#mount");

 
 ```