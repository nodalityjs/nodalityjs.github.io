# Stack
To create a simple stack, use ```stack``` object.
This generates instance of ```Stack``` class.


```js
let elements = [
  {
    type: "stack"
  }
];
```

This code generates the ```Stack``` instance.
The elements inside the stack will be overlayed on each other.

```js
new Stack()
        .set({})
        .add([
            new Image("https://pbs.twimg.com/media/DwYvbCBVAAEKY_R.jpg").set({}),
          
            new Text("Samuel Suresh")
            .set({
                color: "#00ae56",
                font: "SF Pro Display",
                fluidc: "S2", 
                arrpad: {sides: ["top", "left"], value: 20}
            }),
    ]).render("#res");
 
```

