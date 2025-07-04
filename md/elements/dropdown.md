# Dropdown
Dropdown is used to create expand area upon click or hover.
The first value is used as a title fo the dropdown - "Options" text in this case. You can also use this element in navigation. 

## Syntax
```js
let elements = [
  {
    type: "dropdown",
    text: "Options",
    items: ["Earth", "Sea", "Fire"]
  }
];
```


## Rendered Element

```js
new Dropdown()
  .set({
    behaviour: "mouseover", // click otherwise
    padding: "10px",
    border: "1px solid black",
  })
  .add([
    new Text("Options"),
    new Text("Earth"),
    new Text("Sea"),
    new Text("Fire"),
  ]);

```
