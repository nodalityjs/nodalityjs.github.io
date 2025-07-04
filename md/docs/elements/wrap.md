# Wrap
Creates a simple wrapper that wraps other elements.

```js
let elements = [
  {
    type: "wrap"
  }
];
```

This operation creates ```Wrapper``` element.

```js
new Wrapper()
.set({})
.add([
	new Text("First").set({}),
	new Text("Second").set({}),
	new Text("Third").set({})
]).render("#mount");
```


<!---# App Struct
* 8:36:10
* 83845 24 hour-->