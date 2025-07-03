# LinkStyle
Animation allows you to animate elements.
To create basic animation, use ```animationSimple``` operator.



### 1 - elements
```js
let elements = [
 {
        type: "a",
        text: "nasa",
        id: "#myLink",
        block: true,
        link: "https://www.nasa.gov",
        color: "white",
        background: "green",
        width: "120px",
      //  blastData: { color: "yellow" }
    }
]
```



### 2 - operations

You can use the ```linkStyleOperation```.

```js
let nodes = [
	 { // ranges not working here
        op: {
            name: "link-style",
            ops: ["full"]
        },
        target: ["#myLink"] // only target myLink object
    },
]
```



Here are possible styles:
* ```full``` - full link style
* ```air``` - link style with border and no background
* ```round``` - round style

You can combine the styling as you wish:            
* ```air-round``` - rounded link style with border and no background
* ```full-hover``` - full link style with a hover effect 
* ```air-round-hover``` - rounded link style with border, no background and hover effect


### 3 - use them together in Designer
```js

new Des()
    .nodes(nodes) // freeNodes, freeEls or nodes, els
    .add(els)
    .set({
        mount: "#mount"
    });
    
```

This results in ```hover``` and/or```borderObj``` properties being added to respective elements. You can customize them as you wish.


```js
new Link()
    .set({
     	// ... rest of the properties
        borderObj: {
            width: "3px",
            radius: "0.7rem",
            color: "#1abc9c"
        },
        hover: {
            color: "#1abc9c",
            background: "orange"
        }
    })
    .render("#mount");
```


