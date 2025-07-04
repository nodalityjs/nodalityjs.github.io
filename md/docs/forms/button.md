# Button
A button is created using the following decleration in ```elements``` array.
```js
let elements = [
  {
    type: "button"
  }
];
```

The instance of the ```Button``` class is generated.

## Arguments:
```onTap``` - specifies the action that will fire when user taps the button.

```js
new Button("Submit")
        .set({
            fluidc: "S6",
            color: "white",
            background: "#1abc9c",
            arrpad: {sides: ["all"], value: ".3rem"},
            radius: ".3rem",
            onTap: () => {
                alert("Nice");
            }
        });
```