# Slider
To create a simple slider. use ```slider``` structure
This generates instance of ```Slider``` class and open/close button. 


```js
{
    type: "slider"
}
```

This code generates the ```Slider``` instance and open/close button.


```js
  
let texts = [

new Wrapper().set({}).add([

new Text("One").set({fluidc: "S1", color: "#1abc9c", font: "Arial"}),
  new Text("First time").set({font: "Arial"})
]),  

    new Text("Two").set({fluidc: "S1", color: "#1abc9c", font: "Arial"}),
    new Text("Three").set({fluidc: "S1", color: "#1abc9c", font: "Arial"}),
    new Text("Four").set({fluidc: "S1", color: "#1abc9c", font: "Arial"})
  ];

  new Slider(texts, null).render("#mount");
 
```

