# Code

You can use the ```code``` elemt to display a block of code.
User can render header is size ```h1```-```h6```.

## Syntax
```js
let elements = [
  {
    type: "code"
  }
];
```




## Rendered Element
The instance of ```Code``` class will be created.

```js
new Code()
.set({
 class: "language-js",
 code: `let text = new Text("Hello").set({})`
}),
```

In this example, we set the class to ```language-js``` to the code element.
When use in conjuction with ```hljs``` library, the syntax will be correctly highlighted. We need to use ```hljs.highlightAll()``` method, to use its syntax highlighting.

```html
<link rel="stylesheet" href="https://unpkg.com/@highlightjs/cdn-assets@11.9.0/styles/default.min.css">
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap" rel="stylesheet">
<script src="https://unpkg.com/@highlightjs/cdn-assets@11.9.0/highlight.min.js"></script>
```

```js
hljs.higlightAll()
```




