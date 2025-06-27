# TransformAnimation

Transform element as you scroll down.
Use the ```onScroll``` modifier to decide which property and over what scrollrange will change.


### Parameters

- **from**  
  Specifies the starting value of the property.  

- **to**  
  Specifies the ending value of the property.  

- **valMin**   
  Defines the minimum range value.  

- **valMax**   
  Defines the maximum range value.  

- **value**   
  Determines which property will change. You can use ```opacity``` or ```scale```.  
The desired property will change between the `valMin` and `valMax` in ```from``` - ```to``` scrollRange.
 

 ### Example
 In this example we use ```scale```, where the elemnt is scaled between ```24100px``` to ```24400px```.

```js
    new TransformAnim({
        path: "IMG/M2.jpeg",
        title: "Supercharged",
        overflow: "hidden",
        content: new Wrapper().set({}).add([
            new Center().items([ // add scrolling scale effect to this image along with range instead of calling setScale
                new Image().set({
                    id: "scaleMe",
                    url: "file:///Users/filipvabrousek/Desktop/Layout/DesignerTest/5-CleanScrollAnimation/M2.jpeg",
                    width: "50%",
                    onScroll: {
                        value: "scale",
                        from: 24100,
                        to: 24400,
                        valMin: 2.4,
                        valMax: 0.67
                    },
                }),
            ]),

```