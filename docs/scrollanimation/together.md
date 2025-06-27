# Together

Here is how you can combine the elements using the ```Stacker``` element.

### Step 1 - Basic setup
```html
 <head>
   <meta name="viewport" content="height=device-height, width=device-width, initial-scale=1.0, minimum-scale=1.0, target-densitydpi=device-dpi">
 </head>

 <body>
   <div id="mount"></div>

   <style>
   * {
     margin: 0;
     padding: 0;
   }

   body {
     background: black !important;
   }
   </style>
 ```


### Step 2 - Import necessary elements

```html
<script type="module">
import {Animator} from '../../layout/animator.js';
import {Text} from '../../layout/text.js';
import {Image} from '../../layout/image.js';
import {Group} from '../../layout/group.js';
import {Wrapper} from '../../layout/container.js';
import {Center} from '../../layout/center.js';
import {Row} from '../../layout/row.js';
import {ScrollVideo} from '../../layout/scrollvideo.js';
import {Modal} from '../../layout/modal2025.js';
import {Stack} from '../../layout/stack.js';
import {TransformAnim} from './scripts/transformanim.js';
import {Stacker} from './scripts/Stacker.js';
import {KeyframeAnim} from './scripts/appleanim.js';
</script>
```

### Step 2 - Defining elements array
To make Text move with page, uncomment ```height: 20000px``` declaration at line 107
 ```html
<script>
let elements = [
    new Stack().setup({}).add([

        new Text("Alpha").set({
            color: "orange",
            fluidc: "S1",
            font: "Arial",
            arrpad: {
                sides: ["top"],
                value: "30rem"
            },
            onScroll: {
                value: "opacity",
                from: 0,
                to: 1000,
                valMin: 0,
                valMax: 1
            },
            zIndex: 1
        }),

        new Text("Beta").set({
            color: "orange",
            fluidc: "S1",
            font: "Arial",
            arrpad: {
                sides: ["top"],
                value: "140rem"
            },
            onScroll: {
                value: "opacity",
                from: 100,
                to: 1100,
                valMin: 0,
                valMax: 1
            },
            zIndex: 1
        }),

        new Text("Gamma").set({
            color: "orange",
            fluidc: "S1",
            font: "Arial",
            arrpad: {
                sides: ["top"],
                value: "50rem"
            },
            onScroll: {
                value: "opacity",
                from: 200,
                to: 1300,
                valMin: 0,
                valMax: 1
            },
            zIndex: 1
        }),

        new ScrollVideo().set({
            minScrollHeight: 0,
            maxScrollHeight: 1500,
            videoUrl: 'https://www.apple.com/media/us/mac-pro/2013/16C1b6b5-1d91-4fef-891e-ff2fc1c1bb58/videos/macpro_main_desktop.mp4'
        })
    ]),

    new TransformAnim({
        overflow: "hidden",
        content: new Wrapper().set({}).add([
            new Center().items([ // add scrolling scale effect to this image along with range instead of calling setScale
                new Image().set({
                    id: "scaleMe",
                    url: "https://iplanet.one/cdn/shop/files/MacminiM2_performance_m2_large_2x_MacminiM2.png?1673043795288",
                   // url: "file:///Users/filipvabrousek/Desktop/Layout/DesignerTest/5-CleanScrollAnimation/M2.jpeg",
                    width: "50%",
                    onScroll: {
                        value: "scale",
                        from: 2600,
                        to: 3200,
                        valMin: 2.4,
                        valMax: 0.67
                    },


                }),

            ]),
            new Text("Supercharged").set({
                color: "green",
                align: "center",
                fluidc: "S1",
                font: "Helvetica"
            }),
            new Text("Power to you").set({
                align: "center"
            }),

        ])
    }),
];

```


### Step 3 - Defining Stacker
Stacker allows you to stack elements for use with scroll animations.
Use the ```add``` method to add views. This method will be used to stack them below each other.

```js
new Stacker().add([
    new Wrapper()
    .set({
    }).add([
        elements[0],
    ]),

    new Wrapper().set({
        height: "2000px" // 1200
    }).add([
        elements[1] 
        .set({
            height: "120vh" // 1100
        }).toSticky(),
    ]),

    new Wrapper()
        .set({
            background: "green",
            height: "auto",
            arrayPadding: {
                sides: ["top"],
                value: "4900px"
            }
        }).add([
            new Text("Hello").set({
                fluidc: "S1",
                color: "yellow"
            }),

            new Text("Below").set({
                fluidc: "S1",
                color: "yellow"
            })
            .set({
                arrpad: {
                    sides: ["bottom"],
                    value: "200px"
                }
            }),

            new Text("bottom").set({
                fluidc: "S1",
                color: "yellow"
            }),
        ])

]).render("#mount");
```

For me: ```webpack --config webpack.config.js```