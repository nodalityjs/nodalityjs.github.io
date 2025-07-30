# Switcher
Switcher allows you to display different views at different breakpoints. 

To create it's instance, use the ```multiswitcher``` type in designer.
```js
let elements = [
  {
    type: "multiswitcher"
  }
];
```

### Options
```breakpoints``` - array of breakpoints

### Setting views
* ```at``` - breakpoint, set the first one to ```0px```. 
* ```view``` - any view (like Text, Button...)

Consider the following example:
* between ```0px - 700px``` the view with ```Text("A")``` will be 
displayed.
* between ```700px - 800px``` the view with ```Text("B")``` will be 
displayed.
* between ```700px - 800py``` the view with ```Text("C")``` will be 
displayed.
```js
new MultiSwitcher()
  .set({
    breakpoints: [
      { at: "0px", view: new Text("A") },
      { at: "700px", view: new Text("B") },
      { at: "800px", view: new Text("C") },
    ]
  }).render("#root");
```