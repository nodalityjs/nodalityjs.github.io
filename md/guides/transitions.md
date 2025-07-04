# Transitions

This library also supports *CSS View Transition API* to allow users to smoothly transition between pages. See this example of carousel. 

:::warning
The View Transition API is available in every modern browser with the exception of Firefox.
See [here](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API#browser_compatibility) for browser compatibility.
:::


## Step 1
Define you card. The ```vtn``` attribute is shorthand for ```view-transition-name```. This name needs to match between parent and detail views. 

Place this code inside ```main.html``` file. 
You also need to add ```@view-transition``` declaration inside your file.  


```html
<div id="mount"></div>

<style>
@view-transition {
    navigation: auto
}
</style>

```
```js
<script>
class Card {
    constructor(obj){
        this.id = obj.id;
        this.child = obj.child;
        this.url = obj.url;
        this.textChild = obj.textChild;
        this.icon = obj.icon;
    }

    render(){
        return new Wrapper({ isLink: true, child: this.child })
            .set({
                id: this.id,
                child: this.child,
                class: this.id + "o",
                font: "Arial",
                transition: "flex-grow 0.5s ease"
            })
            .add([

                new Text("Best ship").set({
                    vtn: this.textChild,
                    clampc: "S6",
                    em: 1.8,
                    color: "white",
                    weight: "bold",
                    removeDecoration: true,
                    id: "header"
                }),

                new Image("https://www.creativefabrica.com/wp-content/uploads/2021/07/25/Ship-icon-Graphics-15107842-1-1-580x386.jpg")
                    .set({
                        width: "27px",
                        height: "27px",
                        vtn: this.icon,
                        radius: "50%"
                    }),
                // .clipShape(),
                new Text("Amazing ship.").set({ color: "white",/* vtn: this.icon + "-sub"*/ }),

                new Image(
                    this.url,
                    "exact",
                    "",
                    this.textChild.substr(5))
                    .set({
                       /* width: "400px",
                        zIndex: -1,
                        class: this.id,
                        vtn: this.textChild.substr(5)*/

                        width: "400px",
                        height: "300px",
                        objectFit: "cover",
                        zIndex: -1,
                        class: this.id,
                        vtn: this.textChild.substr(5)
                    })
            ]);
       
    }
}
<script>
```


# Step 2

Use the ```HScroller``` class to finish the index.html page. Use ```seto``` method to adjust scrolling speed. The bigger ```speed``` value is the slower the scrolling. Use the ```add``` method to add multiple instances of Cards.
You need to supply different names 
```js

<script>
    new HScroller()
    .seto({
        speed: 1.0 // the bigger the slower
    })
    .add([
         new Card({
            child: "child-A.html",
            textChild: "child-A-text",
            icon: "child-A-icon",
            url: "https://media.cnn.com/api/v1/images/stellar/prod/ap24002766263400.jpg?c=original",
        }).render(),

        new Card({
            child: "child-B.html",
            textChild: "child-B-text",
            icon: "child-B-icon",
            url: "https://robbreport.com/wp-content/uploads/2024/03/2.-1704918218_DJI-0792.jpg?w=1024",

        }).render(),

        new Card({
            child: "child-C.html",
            textChild: "child-C-text",
            icon: "child-C-icon",
            url: "https://s1.it.atcdn.net/wp-content/uploads/2023/07/RCI-Hideaway.jpg",

        }).render()

        
    ])
    .render("#mount");
    <script>
```


## Step 3

Define simple HTML file that will contain the child view that we are going to transition to.
Also define other two HTML files and change ```this.image``` value, ```this.html``` value and ```this.vtnIcon``` value.

```html
<style>
@view-transition {
    navigation: auto;
}
</style>
```


```html

<div id="mount"></div>

<script>
    this.image = "https://media.cnn.com/api/v1/images/stellar/prod/ap24002766263400.jpg?c=original";
    this.vtn = "-A-text";
    this.vtnIcon = "child-A-icon";
</script>

<script>
let l = new Link("Hello", "2-simpleHorizontalScroll.html").set({
    link: "2-simpleHorizontalScroll.html",
    data: {
        options: {
            url: "2-simpleHorizontalScroll.html",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Back_Arrow.svg/2048px-Back_Arrow.svg.png",
            size: "70px",
            radius: "0.1rem",
            vtn: this.vtnIcon
        }
    },

});

let flex = new FlexRow().items([
    l,
    new Spacer(true),
]);

let a = document.createElement("div");

let e = new Image(this.image, 'exact').set({
    url: 'https://media.cnn.com/api/v1/images/stellar/prod/ap24002766263400.jpg?c=original',
    class: "img-small",
    width: "900px",
    height: "600px",

    arrayMargin: { sides: ["top"], value: "7rem" },
    vtn: this.vtn
})

a.appendChild(flex.render());
a.appendChild(e.render());
document.querySelector("#mount").appendChild(a);
</script>
```

childB.html
```js
this.image = "imageB.jpg";
this.vtn = "-B-text";
this.vtnIcon = "child-B-icon";
```

childC.html
```js
this.image = "imageC.jpg";
this.vtn = "-C-text";
this.vtnIcon = "child-C-icon";
```