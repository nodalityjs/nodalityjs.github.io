# Text

Headers are used to display text.
User can render header is size ```h1```-```h6```.

## Syntax
```js
let elements = [
  {
    type: "h1",
    text: "Hello"
  }
];
```
Note: You can also use the ```value``` key instead of text. It works the same.



## Rendered Element

```js
new Text("Hello")
.set({})
```

## Supported properties
These properties are supported accross all elements.

## ```id```
Set uniue identifier to the element. This may be useful for identifying the element, but is not required.
It is  useful when used with node that has ```target``` key for targeting specific element.

```js
   id: "#hello"
```


## ```exact``` 
* Sets the font size. You can use any CSS unit you want.

```js
exact: "3rem"
```

## ```font```
* Sets the font family.

```js
font: "Arial"
```

## ```color```
* Sets color to the text. You can use CSS color names, HEX code, RGB, RGBA, HSL or HWB. 09:56:02 07/04

```js
color: "#1abc9c",
color: "rgb(168, 75.7, 42)",
color: "rgba(32, 38, 197, 0.9)",
color: "hsl(168 75.7% 42%)"
color: "hwb(168 10.2% 26.3%)"
```


## ```size``` 
* Predefined typography of sizes ```S1``` - ```S6``` from largest to smallest. This approach uses fluid typography under the hood and is reccomended.

```js
size: "S1"
```

## ```pad``` 
* Creates padding around element.
```js
pad: [{ "a": 40 }],
```

* ```a``` - all sides
* ```r``` - right side
* ```l``` - left side
* ```t``` - top side
* ```b``` - bottom side

You can also combine these value like 
```js
pad: [{ "atr": 40 }],
```

or

```js
pad: [
	{"a": 20}
	{"tr": 40},
	{"b": 10},
]
```

Meaning: all padding: ```20```  
top and right padding ```40```  
 bottom padding: ```10```



## ```respad```
This property allows you to specify padding at specific breakpoints. 

### Arguments
```breakpoint``` - breakpoint at which the value will apply it can be the following values: 

- **`xs`**: Extra small devices (portrait phones, less than 576px)
- **`sm`**: Small devices (landscape phones, 576px and up)
- **`md`**: Medium devices (tablets, 768px and up)
- **`lg`**: Large devices (desktops, 992px and up)
- **`xl`**: Extra large devices (large desktops, 1200px and up)
- **`xxl`**: Extra extra large devices (larger desktops, 1400px and up)

These breakpoints align with the responsive design system in Bootstrap framework, allowing for tailored styles at different screen sizes.



```js
 respad: [
        {
            breakpoint: "default",
            values: [{ l: 30 }]
        },
        {
            breakpoint: "sm",
            values: [{ l: 20 }]
        },
    ],
```

## ```resmar```
This property allows you to specify margin at specific breakpoints, working the same as ```resmar```.

```js
 resmar: [
        {
            breakpoint: "default",
            values: [{ l: 30 }]
        },
        {
            breakpoint: "sm",
            values: [{ l: 20 }]
        },
    ],
```



## ```mar``` 
* Creates margin around element.
```js
mar: [{ "a": 40 }],
```









203229 s h n c
* ```a``` - all sides
* ```r``` - right side
* ```l``` - left side
* ```t``` - top side
* ```b``` - bottom side



## ```resprop```
The resprop ```property``` allows you to set any property you would supply to the ```set``` method of element. 

```js
 resprop: [
        {
            breakpoint: "mxxl",
            width: "400px",
        },
        {
            breakpoint: "sm",
            width: "80%",
            background: "orange"
        }
    ]
```
221050prosince


## ```hover``` 
* Creates hover action 

```js
 hover: { 
	color: "wheat", 
	animation: 0.3 
}
```


### S1

```js
calc(1.625rem + 5.075vw)
```

### S2
```js 
calc(1.500rem + 4.3vw)
```

### S3
```js
calc(1.375rem + 3.525vw)
```

### S4
```js
calc(1.250rem + 2.75vw)
```

### S5
```js
calc(1.125rem + 1.975vw)
```

### S6
```js
calc(1rem + 0.5vw)
```

<!-- ### gradient
You can add properties sucha s gradient to text directly. We then use the ```render``` method to render our text
```js
new Text("Hello")
	.set({
		gradient: {
			range: ["0px", "1000px"],
			op: {
				name: "gradient",
				gradient: "linear-gradient(#3498db,#1abc9c)"
			}
		},
		target: ["#firstao"]
	}, )
	.render("#mount");

```

NOTE: ```#mount``` is a HTML element
```html
<div id="#mount"></div>
```
--->


