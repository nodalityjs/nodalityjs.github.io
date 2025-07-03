# Designer 
Designer instance accepts nodes and elements, renders the to page and displays the code output. 

```html
<div id="#mount"></div>
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
