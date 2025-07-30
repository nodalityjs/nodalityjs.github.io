---
slug: first-blog-post
title: Introducing Nodality
authors: [vabrousek]
tags: [nodality, ui, declarative]
---

Nodality is a simple UI library written in JavaScript by Filip Vabrousek. 

<!-- truncate -->

It offers a novel and declarative approach to building responsive user interfaces.
At the heart of Nodality are two simple yet powerful ideas:

* **Elements** – These are the structural building blocks of your interface. Each element describes a part of the UI, such as a heading, paragraph, button, or image. Elements define what should be rendered.

* **Nodes** – These act as operations or transformations that modify the appearance, layout, or behavior of elements. Think of nodes as effects or instructions that “wrap” around your UI, enhancing it visually or interactively.

```js
let elements = [
  {
    type: "h1",
    text: "Hello"
  }
];

let nodes = [
  {
    op: "blast" // blasts fill corlor fo the element away
  }
];

```

You then feed these arrays into <code>Des</code> instance.
```js
new Des()
  .nodes(nodes)
  .add(elements)
  .set({
    mount: "#mount",
    code: true
  });
```

The code then generates UI code you can then use directly in your website.

```js
new Text("Hello")
  .set({
    index: "0",
    size: "S1",
    font: "Arial",
    stroke: { 
     op: {
      name: "blast", 
      color: "green",
      width: "1px"
       } 
      },
    })
  .render("#home");
```
The library is compatible with React and Vue and you can can get started using CDN or a single NPM command.
To get started, follow tutorial on this website. Let's make web a better place together!

