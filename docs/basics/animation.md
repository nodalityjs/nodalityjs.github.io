# Animation
Create striking animations using JS responsive API.

```js
 new Text("Hello")
    .set({
        fluidc: "S1",
        animationSimple: {
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
    }).render("#res");

```

