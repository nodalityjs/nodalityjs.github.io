# Radio
The `RadioGroup` creates a group of radio buttons for user selection.

```js
let elements = [
  {
    type: "radio"
  }
];
```

### Arguments
* ```multiple``` - determines whether multiple options can be selected.
* ```items``` - array, that defines the available options for the radio group

```js
new RadioGroup()
    .set({
        items: ["Male", "Female", "Third shit"],
        multiple: false
    });
    // 23:22:23 18/01/25 Nice!
```