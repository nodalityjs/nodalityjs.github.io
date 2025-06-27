# Nodes 
Nodes allow you to simply you to modify the elements. Think of them as nodes in procedural software like Houdini. Every node generates code that is used on elements. 




### Step 1: Blast node
Blast node allows you to create stroked text. 

```js
let nodes = [
   {
      op: {
            name: "blast",
      }
   }
]
```
If you want, you can specify more options for your node like ```color``` and ```width``` for the ```blast``` node. 

```js
let nodes = [ 
    {
        op: {
            name: "blast",
            color: "green",
            width: "3px"
        },
    }
]
```



### Step 2: Defining ranges
Breakpoints allow you to control the range where the node will take effect. You can use the ```range``` key for this purpose. Range takes a form of array with two values Using ```range``` is not mandatory. 
* Probably don't use object.
```js
let nodes = [
    {
        op: {/*...*/}
        range: ["600px", "700px"],
    }
]
```

### Step 3: Affecting specific elements
You can also decide to affect specific elements. In this example, only element with ```id``` ```#myID``` will be affected. 
If you don't supply any value to the ```target``` property, all nodes for which this operations applies will be affected. 
The ```id``` property is not mandatory.

Let's define element with certain ID:
```js
let elements = [
  {
    type: "text",
    id: "#first"
  }
];
```

We then use the ```target``` property to affect only this element.
```js
let nodes = [
    {
		op: {/*...*/},
		range: [ /*...*/ ],
		target: ["#myID"]
	}
];
```

### Seeing it all together

The complete ```nodes``` with blast node might look like this. Keep in mind that range and target properties are not mandatory.

```js
let elements = [
  {
     type: "text",
     id: "#first"
  }
];


let nodes = [
   {
        range: ["600px", "700px"],
        // rest of the code
         op: {
            name: "blast",
            color: "green",
            width: "3px"
        },
        target: "#myID"
    }
]
```

Then, you can render the result as you are used to:


```html
<div id="#mount"></div>
```

```js
new Des()
    .nodes(nodes)
    .add(elements)
    .set({
        mount: "#mount",
        code: true
    });
```


