# Layout

To quickly generate common layout variation, we can use the following:

You can use operation like this:
```js
let nodes = [
  {
    op: {
      name: "layout",
      value: "img-leftof-text"
    }
  }
];
```

Then create ```elements``` array with ```free``` element
```js
let elements = [
  {
    type: "free"
  }
];
```


We then use the element in ```Designer``` instance as we are used to.
```js
new Des()
  .nodes(nodes)
  .add(els)
  .set({
    mount: "#mount"
  });
```

## Layout values
Layout values allow you to specify positioning of the elements using simple predefined values: 


### ```text-above-image```
* text is place above the image

### ```image-overlay-text```
* image is overlayed by text 

### ```image-leftof-text```
* image is put left of the text

NOTE:

```Image``` and ```Text``` elements are generated automatically.
