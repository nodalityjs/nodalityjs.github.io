# Transform


## Default transform
To use the filter, we use this:

```js
let nodes = [
  {
    op: "transform"
  }
];

let elements = [
  {
    type: "h1",
    text: "Hello"
  }
];
```

This generates defaults grayscale operation on each element.  

```js
new Text("Hello").set({
  size: "S1",
  transform: {
    values: [
      "ty:-20px",
      "scale(3)",
      "rotate(30deg)",
      "skew(40deg, 0deg)",
      "perspective(500px)",
      "matrix(1, 0, 0, 1, 50, 50)"
    ]
  }
});

 

``` 



## Customizing
You can also cusotmize the animation using: 

### Style
Customize the style of animation using one of the following properties. After the code is generated, you can fully customize the transform.

- TORNADO-SWITCH
- CUBE-SPIN
- LASER-SWEEP
- BUBBLE-POP
- VORTEX-SINK
- SHOCKWAVE

### Duration 
Set the duration of the animation:
* FAST
* SLOW
* MEDIUM


You can see the result of using the ```LASER-SWEEP``` transform ```MEDIUM``` duration in this example:

```js
let nodes = [
  {
    op: "transform",
    style: "LASER-SWEEP",
    duration: "MEDIUM"
  }
];

let elements = [
  {
    type: "h1",
    text: "Hello"
  }
];
```

This yields the following result:
```js
...
new Text("Hello").set({
    //...
    transform: {
        op: {
            name: "transform",
            transform: {
                values: [
                    "ty:-20px",
                    "scale(3)",
                    "rotate(30deg)",
                    "skew(40deg, 0deg)",
                    "perspective(500px)",
                    "matrix(1, 0, 0, 1, 50, 50)"
                ],
                duration: "6s-ease-in-out"
            }
        }
    }
})

        ...
```


## Explaining the properties

You can use the following properties and their CSS equivalent.

| Transformation        | CSS Equivalent                        |
|----------------------|--------------------------------------|
| `ty:-20px`          | `transform: translateY(-20px);`     |
| `scale(3)`          | `transform: scale(3);`             |
| `rotate(30deg)`     | `transform: rotate(30deg);`        |
| `skew(40deg, 0deg)` | `transform: skew(40deg, 0deg);`    |
| `perspective(500px)`| `perspective: 500px;`             |
| `matrix(1, 0, 0, 1, 50, 50)` | `transform: matrix(1, 0, 0, 1, 50, 50);` |




