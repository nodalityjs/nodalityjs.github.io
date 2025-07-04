# Link

To create a simple link use the following element.

```js
let elements = [
  {
    type: "a",
    text: "Hello",
    link: "https://www.nasa.gov"
  }
];
```

This generates the following element:
```js
new Link()
  .set({
    pad: [
      {
        a: 10
      }
    ],
    font: "Arial",
    link: "https://www.nasa.gov",
    text: "Hello",
    url: "https://www.nasa.gov"
  })
  .render("#mount");

```
