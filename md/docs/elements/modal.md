# Modal
To create a simple modal. use ```modal``` structure
This generates instance of ```Modal``` class and open/close button. 


```js
let elements = [
  {
    type: "modal"
  }
];

```

This code generates the ```Modal``` instance and open/close button.


```js
  let elements = [
        new Stack()
        .setup({})
        .add([
            new Image("https://pbs.twimg.com/media/DwYvbCBVAAEKY_R.jpg").set({}),
          
            new FlexRow().set({aligns: "start"}).items([
          
            new Button("×")
            .setup({})
                    .set({
                        fluidc: "S3",
                        onTap: () => modal.close(),
                        frame: { width: 80, height: 80 },
                        color: "white",
                        background: "none"
                    }),

                    new Spacer(true),
            ])
        ]),
     
     
            new Text("Samuel Suresh")
            .set({
                color: "#00ae56",
                font: "SF Pro Display",
                fluidc: "S2",
                arrpad: {sides: ["top", "left"], value: 20}
            }),
          
        
            new Text("Studying Science and Business, Western Sydney University, class of 2022")
              .set({
                font: "Arial",
                fluidc: "S6",
                arrpad: {sides: ["left"], value: 20}
              }),
           
            
            new Text(firstLong)
                .set({
                    initLetter: 1
                })
                .arrayPadding(["top"], 30) // THIS IS VALID !!!
                .arrayPadding(["left", "right", "bottom"], 30)
    ];


    let wrapper = new Wrapper()
                .set({})
                .add(elements);
    
    
  let modal = new Modal();
        modal
        .set({
             width: "600px", 
             background: "#469d73cc",
             close: true
        })
        .add([wrapper])
       // .close()
        .render("#res");    

    
    new Button("Wow")
    .setup({})
    .set({
        fluidc: "S3",
        onTap: () => modal.show()
    })
    .render("#res");
 
```

