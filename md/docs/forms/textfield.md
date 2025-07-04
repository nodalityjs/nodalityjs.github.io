# TextField
A simple textfield.
```js
let elements = [
  {
    type: "input"
  }
];
```
Supported types: 
* ```text```
* ```number```
and more... as outlined [here](https://www.w3schools.com/tags/att_input_type.asp)


```js
new TextField().set({
    type: "text",
    placeholder: "Enter swimming time"
});
```