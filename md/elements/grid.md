# Grid

This creates instance of ```Simple``` element.
```js
let elements = [
  {
    type: "grid"
  }
];
```

In ```set``` method of this class, we can use the ```gap``` property to set gap within the grid.

This class uses ```react``` method. In this method we can use following arguments:

* ```at``` - breakpoint at which will the ```template``` be active
* ```template``` - array of grid areas that will be active at certain breakpoint.



In ```Wrapper``` class, in this example we can use the ```mc``` property sets the height to ```max-content```.

```mc: true``` means sets this css element ```height``` to ```max-content```.





```js
 new Simple()
    .set({
        gap: "1rem"
    })
    .react([{
            at: "0px",
            template: [
                "eeeeee",
                "eeeeee",
                "abbbbb",
                "abbbbb",
                "abbbbb",
                "cccccc",
                "cccccc",
                "dddddd"
            ]
        },

        {
            at: "900px",
            color: "orange",
            template: [
                "aaaccc",
                "aaaccc",
                "bbbbbb",
                "dddddd",
                "eeeeee"
            ]
        },

        {
            at: "1200px",
            color: "purple",
            template: [
                "cccaaa",
                "cccaaa",
                "bbbbbb",
                "dddddd",
                "eeeeee"
            ]
        },
    ])
    .add([
        new Wrapper().set({
            mc: true,
            pad: [{
                a: 20
            }],
            background: "#ecf0f1",
            radius: "1.7rem"
        }).add([
            new Text("NEW PRODUCT").set({
                exact: "1rem",
                font: "Oswald",
                width: "100%"
            }),
            new Text("Feel").set({
                fluidc: "S2",
                font: "Oswald",
                width: "100%",
                color: "black"
            }),
            new Text("Speed").set({
                exact: "7rem",
                font: "Oswald",
                width: "100%",
                color: "#3498db"
            }),
        ]),

        new Wrapper().set({
            mc: true,
            pad: [{
                a: 20
            }],
            background: "#ecf0f1",
            radius: "1.7rem"
        }).add([
            new Text("TOP QUALITY").set({
                exact: "1rem",
                font: "Oswald",
                width: "100%"
            }),
            new Text("You can count on it").set({
                fluidc: "S2",
                font: "Oswald",
                width: "100%",
                color: "black"
            }),

            new Text("Experience the thrill of open water swimming with our exceptional performance. So whether you’re participating in a triathlon or simply enjoying a leisurely swim, you can trust our wetsuits to enhance your performance and elevate your experience.So why wait? Dive into your next open water adventure with our top-of-the-line wetsuits. Make waves, set new records, and explore the uncharted depths of the ocean with confidence and style. Experience the difference today with our exceptional wetsuits!")
            .set({
                font: "Arial",
                exact: "1.3rem"
            })

        ]),

        new Wrapper().set({
            mc: true,

            radius: "1.7rem",
            overflow: "hidden"

        }).add([

            new Image("https://www.blueseventy.com/cdn/shop/files/23-home-size2.jpg?v=1684272215&width=3840", "exact").set({
                width: "100%",
                height: "420px",
                minHeight: "100px",
                objectFit: "cover"

            })
        ]),

        new Wrapper().set({
            mc: true,
            pad: [{
                a: 20
            }],
            background: "#ecf0f1",
            radius: "1.7rem",
        }).add([
            new Text("You won't miss with Blue70").set({
                fluidc: "S3",
                font: "Oswald",
                color: "black"
            }),
            new Text("Yea")
            .set({
                font: "Arial",
                exact: "1.3rem"
            })
        ]),
        new Wrapper().set({
            mc: true,
            pad: [{
                a: 20
            }],
            background: "#ecf0f1",
            radius: "1.7rem",

        }).add([new Text("Hello").set({
            font: "Arial",
            exact: "1.3rem"
        }), ]),
    ]).render("#mount");
```