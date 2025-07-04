# WeightLayout
WeightLayout allows you to create flexible layout using attraction weights inside ```Free``` element.


## Step 1 Define elements
We set ```id``` for each element to indetify it in ```attractions``` array.

```js
let text = new Text("Hello").set({
	size: "S1",
	color: "#1abc9c",
	id: "A"
});

let texta = new Text("Welcome").set({
	size: "S1",
	color: "#1abc9c",
	id: "B"
});

let textad = new Text("Nice").set({
	size: "S1",
	color: "#1abc9c",
	id: "C"
});

let textabop = new Image("https://www.shippax.com/backnet/media_archive/cache/95e618e5c925ed4b6e38f8c4b8e732f2_1200x630.jpg")
	.set({
		width: "100%",
		maxWidth: "100%",
		id: "G"
	});
```

### Step 2 - Define attractions array
#### Object structure
* ```weight``` - defines how much will the element be dragged in direction specified by ```direction``` argument.
* ```direction``` - defines the direction element will be dragged in. Possible values are:  
```"T"```(top), ```"B"```(bottom), ```"L"```(left), ```"R"```(right).  
* ```attract``` id of an argument that will be dragged

All elements will be affected by other elements. We can create interesting off-grid layout in this way.
```js
let attractions = [
    {
        weight: 20, 
        direction: "R",
        attract: "#A"
    },
 
    { 
        weight: 1, 
        direction: "U",
        attract: "#B"
    }, 
  
    { 
        weight: 20, 
        direction: "B",
        attract: "#G"
    } 
];

```


### Step 3 - Use attractions array in Free class
We now give the attractions array to the ```positions``` property. Finally, we add the elements into an array.
```js
new Free()
	.set({
		positions: attractions
	})
	.add([
		text,
		texta,
		textabop
	])
	.render("#res");
```


## Usage with Multiswitcher
You can use the ```Free``` class with ```Multiswitcher``` to switch between views at desired breakpoints.

```js
let text = new Text("Hello").set({
	size: "S1",
	color: "#1abc9c",
	id: "A"
});

let texta = new Text("Welcome").set({
	size: "S1",
	color: "#1abc9c",
	id: "B",
	maxHeight: "100px"
});

let textad = new Text("Nice").set({
	size: "S1",
	color: "#1abc9c",
	id: "C"
});

let textabop = new Image("https://www.shippax.com/backnet/media_archive/cache/95e618e5c925ed4b6e38f8c4b8e732f2_1200x630.jpg")
	.set({
		width: "800px",
		id: "G",
		maxWidth: "100%"
	});

let attractions = [
	{
		weight: 10,
		direction: "R",
		attract: "#A"
	},
	{
		weight: 20,
		direction: "U",
		attract: "#B"
	},
	{
		weight: 0,
		direction: "B",
		attract: "#G"
	}
];

let mobileAttractions = [
	{
		weight: 10,
		direction: "R",
		attract: "#A"
	},
	{
		weight: 10,
		direction: "U",
		attract: "#B"
	},
	{
		weight: 39,
		direction: "B",
		attract: "#G"
	}
];

let freeDesktop = new Free()
	.set({
		positions: attractions
	})
	.add([
		new Text("Hello").set({
			size: "S1",
			color: "#1abc9c",
			id: "A"
		}),
		new Text("Welcome").set({
			size: "S1",
			color: "#1abc9c",
			id: "B",
			maxHeight: "100px"
		}),
		new Image("https://www.shippax.com/backnet/media_archive/cache/95e618e5c925ed4b6e38f8c4b8e732f2_1200x630.jpg")
			.set({
				width: "800px",
				id: "G",
				maxWidth: "100%"
			})
	]);

let freeMobile = new Free()
	.set({
		positions: mobileAttractions
	})
	.add([
		text,
		texta,
		textabop
	]);

new MultiSwitcher()
	.set({
		breakpoints: [
			{ at: "0px", view: freeMobile },
			{ at: "700px", view: freeMobile },
			{ at: "800px", view: freeDesktop }
		]
	})
	.render("#res");
```