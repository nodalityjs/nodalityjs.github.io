# Basics

To create smooth scroll animations you can use the following:

* ```ScrollVideo``` - play video as you scroll 
* ```TransformAnimation``` - transform object as you scroll
* ```Stacker``` - element to combine these sections

You can combine ```ScrollVideo``` and ```TransformAnimation``` elements insie the ```Stacker``` element to crate engaging scroll effects.

:::tip
Note: You don't create these classes using objects inside ```elements``` array, but you need to create them directly.
Here are the necessary imports. The [following](scrollvideo.md) pages will show you how to use these classes.
:::

```js
import { KeyframeAnim } from "../lib/appleAnim.js";
import { TransformAnim } from "../lib/transformanim.js";
import { Stacker } from "../lib/stacker.js";
import { ScrollVideo } from "../lib/scrollvideo.js";
```