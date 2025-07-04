# Keyset

Keyset allows you to set custom CSS properties on elements.

## Properties
* ```key``` - The name of the property
* ```value``` - The value of the property

In this example, we use ```border``` as our ```key```. This property is used to change CSS border property. As for the ```value``` property we use ```3px solid green``` to set the border. You are free to use any CSS property you want.  

```js
new Text("Hello")
    .set({
        fluidc: "S1",
        font: "Arial",
        keySet: {
            key: "border",
            value: "3px solid green"
        }
    });
```