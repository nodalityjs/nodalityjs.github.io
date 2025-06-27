# Offcanvas
To create a simple navigation use ```protoNav``` structure
This generates instance of ```NavBar``` class. 


```js
 {
      type: "sideNav",
      offcanvas: true,
}
```

This code generates the ```UINavBar``` instance without links. This element could be use to host any content.


```js
new SideNav().setup({
  animate: true,
  radius: "1rem",
  isSide: true,
  background: "#ecf0f1",
  hamColour: {
    opened: "#1abc9c",
    closed: "#e67e22"
  },
  mobileSize: "1.2em"
}, true).items(
 new Wrapper() 
.set({
 column: "true"
 })
.add([ 
new Text("Off canvas")
 .set({
 fluidc: "S6",
 id: "#myID",
 pad: [
		{l:40},
 		{t:20}
		], 
 font: "Arial",
 italic: "true",
 //animation: {range:["0px","1900px"],op:{name:"animation",color:"green",width:"1px"}} 
 })
 
])).render("#mount"); 
 
 
```

