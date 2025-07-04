# Checkbox
A checkbox is used to make it possible to select a single option, akin to answerin yes or no.

```js
let elements = [
  {
    type: "checkbox"
  }
];
```

The instance of the ```Checkbox``` class is generated.


```js
new Checkbox().set({
    name: "acceptTerms",
    label: new Text("Check it out!").set({
    size: "S6",
    color: "#1abc9c",
    font: "Arial"
}),
  
    mar: "10px",
    size: "100px",
   
}).render("#mount"); 
```

## Styling
To style checkbox use the ```customStyle: true``` style for it. 
### ```checkedBackgroundColor```
* background of checkbox

```js
new Checkbox().set({
    name: "acceptTerms",
    label: new Text("Check it out!").set({
    size: "S6",
    color: "#1abc9c",
    font: "Arial"
}),
    customStyle: true,
    mar: "10px",
    size: "100px",
    checkedBackgroundColor: "#1abc9c",
}).render("#mount"); 
```

### ```clipPath```
* You can also add own path. If the argument is not supplied, default ```clipPath``` that looks like checkmark will be used.


In this example, we use ```star``` icon using ```polygon``` function.
```js
 clipPath: `polygon(50% 0%, 61% 35%,
                    98% 35%, 68% 57%,
                    79% 91%, 50% 70%,
                    21% 91%, 32% 57%,
                    2% 35%, 39% 35%)`
```