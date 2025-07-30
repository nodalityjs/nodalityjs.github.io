# Custom elements

To create a custom element in this library, you extend the ```Base``` class. 
We can supply our properties in constructor, and assign the to ```props``` property.

In the ```render``` method we then return our [```Text```](../elements/text.md) element.

```js
class MyApp extends Base {
    constructor(props) {
        super();
        this.props = props;
    }

    render(){
        return new Text(this.props.year)
        .set({
            color: "#1abc9c"
        });
    }   
}
```

We can pass any object into the class instance. We then call the ```mount``` method to render the ```Text``` elment in our DOM.

```js
new MyApp({
    year: "2025"
})
.mount("#mount");
```

The HTML to be mounted is following:

```html
<div id="mount"></div>
```


<!---Book se dnes ozve-->