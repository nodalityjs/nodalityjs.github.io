# Span
Span is a part of text that can have different contents and design from the rest of your page. To add span, you the span operation or add it directly to ```Text``` element.

## Default span
To use the default span, we use this:


```js
let nodes = [
  {
    op: "span"
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

This generates defaults ```span``` operation on each element. 

### Span operation:

* ```parts``` - array of objects with the following structure:

### Object structure in parts array
* ```text``` - text of the span  
* ```style``` - Style object with properties. You can use properties as you are used to from the ```set``` method

```js
 let text = new Text("The first time we went to the Moon.").set({
  fluidc: "S1",
  color: "green",
  span: {
    range: ["900px", "1000px"],
    op: {
      name: "span",
      parts: [
        {
          text: "The first time",
          style: {
            italic: true,
            arrpad: {
              sides: ["left"],
              value: "3rem"
            },
            stroke: {
              range: ["950px", "1000px"],
              op: {
                name: "blast",
                background: ["header", "button"],
                color: "yellow",
                width: "1px"
              }
            }
          }
        },
        {
          text: "We went to the Moon",
          style: {}
        }
      ]
    }
  }
}).render("#mount");
```

