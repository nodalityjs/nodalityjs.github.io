# Picker

To create the picker, use the following 
```js
let elements = [
  {
    type: "picker"
  }
];
```

The `items` array defines the options available in the picker. Each option is represented as an array with two elements:

1. **Value**: The internal value assigned to the option (used for logic handling).
2. **Label**: The text displayed to the user.

```js
let items = [
    ["none", "select a car---"],  // Placeholder option
    ["tesla", "Tesla"],          // Tesla as a selectable option
    ["audi", "Audi"]             // Audi as a selectable option
];

   
return new Picker()
          .set({
              items: items,
              font: "Arial",
              arrayPadding: ({sides: ["all"], value: "0.5rem"}),
              rounded: true
          })
```