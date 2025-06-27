# Complex

 The `Wrapper` class allows you to create a responsive element that can dynamically switch its layout between row and column orientations based on specified breakpoints. This is ideal for building adaptable web components with flexbox layouts.
```js
let els = [
    {
        type: "cdiv"
    }
];
```

## Description
The operation generates a complex responsive `div` structure.

### Parameters
1. **`ranges`**: An array of breakpoint values (in pixels) that define the width thresholds where the layout transitions between row and column. For instance, `"700px"` means the transition occurs at a width of 700 pixels.

2. **`sequence`**: A string specifying the flex direction sequence corresponding to the defined breakpoints. Use `"col"` for column and `"row"` for row. For example, `"col-row-col"` indicates:
   - Column layout for widths up to the first breakpoint.
   - Row layout between the first and second breakpoints.
   - Column layout between the second and third breakpoints.

### Example Layout:
- **0px to 700px**: Column layout
- **700px to 1200px**: Row layout
- **1200px to 1400px**: Column layout
- **1400px and above**: Row layout


```js
new Wrapper() 
	.set({
		background: "orange",
		responsive: {
			ranges: ["700px", "1200px", "1400px"],
			sequence: "col-row-col"
		}
	})
	.add([
		new Image("mountains.jpg").set({
			width: "auto",
			height: "100%",
		}),

        new Wrapper().set({}).add([
            new Text("Title").set({
                fluidc: "S3",
                font: "Arial"
            }),

            new Image("sea.png").set({
                width: "100%"
            })
        ])
	]).render("#mount"); 
```


---

## Notes
- The `render` method attaches the constructed layout to the specified DOM element by its selector (e.g., `"#mount"`).
- The `fluidc` property in `Text` allows for scalable typography.
- Breakpoints should be specified in ascending order for proper behavior.

---
