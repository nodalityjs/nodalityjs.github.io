# Example 
 This library works with *elements* represented as an array of HTML entities, and *nodes* that controls the behaviour of element.

**Elements** are automatically responsive pieces of code the produce code that renders structure of user interface. 

**Nodes** change the look and behavior of elements.

Let's walk through the app creation process step-by-step. There is also interactive playground at the [bottom](#step-3) of this page.

### Step 1 
Define array of **elements** you want to display in your user interface.

```js
let elements = [
    {
        type: "h1",
        value: "Hello"
    }
];
```

### Step 2
Define array of **nodes** that will adjust behaviour of the element. This particular node will add the stroked text effect.

```js
let nodes = [
    {
       op: "blast"
    }
];
```


You can also add the following options (optional):
*  ```range``` - apply effect when the screen is between 600px and 700px wide
* ```op``` - specify options for your stroke effect
* ```target``` - arrays of element ID's the effect will be applied to.

```js
let nodes = [
    {
        range: ["600px", "700px"],
        op: {
            name: "blast",
            color: "green",
            width: "3px"
        },
        target: ["#first", "#link"]
    },
];
```






### Step 3
Add ```nodes``` array into ```.nodes``` modifier, and use ```.set``` method to mount the result of the code to the website.
Use ```code: true``` option to also display the code of the elements.

```js
new Des()
    .nodes(nodes)
    .add(elements)
    .set({
        mount: "#mount",
        code: true
    });
```
Also define div with id ```#mount``` that will serve as a root to render the UI.

```html
<div id="#mount"></div>
```

After running this code, you will see ```h1``` element on the screen. When the user resizes window anf hits the breakpoint 400 - 600px the text stroke effect will appear thanks to stroke modifier.

User will also see the resulting code.


### Output


```js
, new Text("Hello!")
 .set({
 index: "0",
 color: "green",
 fluidc: "S1",
 id: "#first",
 font: "Helvetica, Arial, sans-serif",
 stroke: {
    range:["600px", "700px"],
    op:{
        name:"blast",
        color:"green",
        width:"3px"
    },
    target:["#first","#link"]}
 }) 

```
You can then render this generated element directly in new empty HTML file. 
Use the ```render``` method, where ```#mount``` is a ```div``` element that will be used to render the ```Text``` class.

```html
<!---don't forget to include library CDN--->
<div id="mount"></div>
<script>
new Text("Hello")
.set({/* properties */})
.render("#mount");
</script>
```



<!---
<iframe width="100%" height="600px" src="https://stackblitz.com/edit/stackblitz-starters-xqzqqm?embed=1&file=index.html"></iframe>
-->


<!---DEVBOX---
<iframe src="https://codesandbox.io/p/devbox/simple-q84g9f?embed=1&file=%2Findex.html"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="simple"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
   --->

<!---
   <iframe height="400px" width="100%" src="https://jsfiddle.net/afabbro/vrVAP/embedded/result,js,html,css/dark"/>

   <iframe src="https://playcode.io/1907337"/>


<iframe style="width:100%; height:300px" src="https://react.dev/learn/tutorial-tic-tac-toe"/>





::: sandpack#vue Vue Demo

@file /src/App.vue

```html
<script src="https://temp.staticsave.com/666f2f346eb37.js">
<script>

let res = renderH1("L");
document.body.appendChild(res);
</script>

<div id="res"></div>
```


:::

-->