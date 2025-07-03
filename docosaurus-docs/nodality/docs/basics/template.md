# Template 

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
    {
        range: ["850px", "900px"],
        op: {
            name: "shadow",
            color: "#1abc9c",
            steps: 3
        }
    },
    {
        range: ["650px", "900px"],
        op: {
            name: "gradient",
            gradient: "linear-gradient(#3498db,#1abc9c)"
        }
    },
    {
        range: ["600px", "700px"],
        op: {
            name: "filter",
            filter: "sepia(70%)"
        }
    },

    {
        op: {
            name: "link-style",
            ops: "full-border-hover",
            color: "#1abc9c",
        },
        target: ["#swimoa"]
    }
];
```

```js

let els = [
    {
        type: "h1",
        color: "green",
        text: "Hello!",
        font: "Helvetica, Arial, sans-serif",
        id: "#first"
    },

    {
        type: "img",
        url: "https://img.cruisecritic.net/cms-sb/f/1005231/4032x3024/2a22209af2/back-of-icon-of-the-seas-coming-into-miami.jpg?auto=compress%2Cformat&fp-z=1&h=532&w=818&ar=3%3A2&dpr=2.625&q=15&ixlib=react-9.0.2",
        width: "300px"
    },

    {
        type: "a",
        text: "nasa",
        id: "#swimoa",
        block: true,
        link: "https://www.nasa.gov",
        color: "white",
        background: "green",
        width: "120px",
        blastData: { color: "yellow" }
    }
];
```


```js


new Des()
    .nodes(nodes)
    .add(els)
    .set({
        mount: "#mount",
        code: true
    });
```




## Output

```js
, new Text("Hello!")
 .set({
 index: "0",
 color: "green",
 fluidc: "S1",
 id: "#first",
 font: "Helvetica, Arial, sans-serif",
 shadow: {range:["850px","900px"],op:{name:"shadow",color:"#1abc9c",steps:3}},
 stroke: {range:["600px","700px"],op:{name:"blast",color:"green",width:"3px"},target:["#first","#link"]},
 gradient: {range:["650px","900px"],op:{name:"gradient",gradient:"linear-gradient(#3498db,#1abc9c)"}}, 
 }) 
 
 , new Image('https://img.cruisecritic.net/cms-sb/f/1005231/4032x3024/2a22209af2/back-of-icon-of-the-seas-coming-into-miami.jpg?auto=compress%2Cformat&fp-z=1&h=532&w=818&ar=3%3A2&dpr=2.625&q=15&ixlib=react-9.0.2')
 .set({
 index: "1",filtera: {range:["600px","700px"],op:{name:"filter",filter:"sepia(70%)"}}, 
width: "300px", 
 shadow: {range:["850px","900px"],op:{name:"shadow",color:"#1abc9c",steps:3}},}) 
 

, new Link()
 .set({
 pad: [{a:10}],
 class: "undefined",
 borderObj: {radius:"0.3rem",color:"orange",width:3},
 blastData: {color:"yellow"},
 font: "Arial",
 id: "#swimoa",
 color: "white",
 background: "#3498db",
 hover: {color:"#3498db",background:"white",border:true,animation:0.3},
 block: true,
 width: "120px",
 link: "https://www.nasa.gov",
 text: "nasa",
 url: "undefined",
 shadow: {range:["850px","900px"],op:{name:"shadow",color:"#1abc9c",steps:3}},}) 
```