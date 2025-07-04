# Animation
Animation allows you to animate elements.
To create basic animation, use ```animationSimple``` operator.



### 1 - elements
```js
let elements = [
  {
    type: "h1",       // Support p
    value: "Miami",     
    id: "#first"      
  }
];
```



### 2 - nodes

The operator generates ```animation``` property on each affected object. 
If we supply the ```target``` argument, this operation applies to elements whose ```id``` attributes mathch those in ```target``` array.

This animation will apply to element with ```id``` ```#first``` in  this case.


```js
let nodes = [
  {
    op: "animationSimple",
    target: ["#first"]
  }
];
```

This results in animation property being added to respective element.
You can edit this animation as you wish.

### Arguments
* ```keyframesOpen``` - set opening keyframes
* ```keyframesClose``` - set closing keyframes
* ```openOptions``` - set opening properties (duration, etc.)
* ```closeOptions``` - set closing properties
* ```fireAt``` - how much user needs to scroll before animation fires (optional)

Possible value of ```fireAt``` is extact value like ```800px``` or ```inview```. The ```inview``` property fires animation when it comes into view using ```IntersectionObserver``` API.

```js
new Text("Hello").set({
  // Other properties can go here, e.g., font, size, index...
  animation: {
    op: {
      name: "animation",
      color: "green",
      width: "1px",
      fireAt: "800px",
      keyframesOpen: [
        {
          transform: "translate(100%, 0%)",
          opacity: 0
        },
        {
          transform: "translate(0%)",
          opacity: 1
        }
      ],
      keyframesClose: [
        {
          transform: "translate(0%)",
          opacity: 1
        },
        {
          transform: "translate(100%, 0%)",
          opacity: 0
        }
      ],
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
    },
    target: ["#first"]
  }
});


```


