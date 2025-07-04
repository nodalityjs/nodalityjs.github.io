# Image

Image allows you to create simple image

```js
let elements = [
    { 	
        type: "img",
        width: "300px",
        url: "https://picsum.photos/200"
     }
];
```

The element code will produce the following output:
```js
new Image().set({
  type: "img",
  width: "300px",
  url: "https://picsum.photos/200"
}).render("#mount"); 
```

# Image as a div background

If you want to create div background image set to supplied url, you can use the ```background``` option.

```js
 { 	
    type: "img",
    isFull: true,
	url: "sun.png"
 }
 ```

This results in the following element. The default height is ```200px```, but you can easily overwrite it by setting the ```width``` property.

 ```js
 new Image().set({
  isFull: true,
  url: "sun.png"
}).render("#mount"); 
```