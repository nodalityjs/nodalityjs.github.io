# SideNavigation

To create side navigation use the ```SideNav``` structure.
We can animate the links by setting animation to ```true```.
You can customise the animation in the generated [Link](Link.md) object.


```js
let elements = [
  {
    type: "sideNav",
    animation: true,
    items: [
      {
        title: "About",
        link: "A"
      },
      {
        title: "Work",
        link: "A"
      },
      {
        title: "Contact",
        link: "A"
      }
    ]
  }
];
```

This generates the following ```SideNav``` structure.

```js
new SideNav().setup({
	animate: true,
	radius: "1rem",
	isSide: true,
	background: "#ecf0f1",
	hamColour: {
		opened: "#1abc9c",
		closed: "#e67e22"
	},
	mobileSize: "1.2em"
}, true).items(
	new Wrapper()
	.set({
		column: "true"
	})
	.add([
		new Text("Ultra Reckoning")
		.set({
			size: "S6",
			id: "#olod",
			pad: [{
				l: 40
			}, {
				t: 20
			}],
			font: "Arial",
			italic: "true",
			animation: {
				range: ["0px", "1900px"],
				op: {
					name: "animation",
					color: "green",
					width: "1px"
				}
			}
		})

		,
		new Link()
		.set({
			pad: [{
				a: 20
			}],
			font: "Arial",
			fluidc: "S4",
			id: "#home",
			align: "left",
			bold: true,
			link: "@e",
			text: "Home",
			animation: {
				range: ["0px", "1900px"],
				op: {
					name: "animation",
					color: "green",
					width: "1px",
					keyframesOpen: [{
						transform: "translate(100%, 0%)",
						opacity: 0
					}, {
						transform: "translate(0%)",
						opacity: 1
					}],
					keyframesClose: [{
						transform: "translate(0%)",
						opacity: 1
					}, {
						transform: "translate(100%, 0%)",
						opacity: 0
					}],
					openOptions: {
						duration: 300,
						fill: "forwards",
						delay: 1000
					},
					closeOptions: {
						duration: 1,
						fill: "forwards",
						delay: 1000
					}
				}
			},
		}),
		//...

	])).render("#mount");
```