# Navigation
To create a simple navigation use ```protoNav``` structure


```js
let elements = [
  {
    type: "nav"
  }
];
```
This generates instance of ```NavBar``` class. 


```js
 {
	type: "nav",
	items: [
		{
			title: "About",
			link: "A"
		},

		{
			title: "Work",
			link: "A"
		},

		{
			title: "Contact",
			link: "A"
		}
	]
}
```

This code generates the ```MultiSwitcher``` instance. Which contains classes:
*  ```BetaMobileBar``` for mobile navigation
*  ```BetaDesktopBar``` for desktop navigation

### Arguments:
* ```hamburgerColour``` - colour of hamburger
* ```radius``` - border radius
* ```brand``` - navigation branding. You can use any view you want.

```js
new MultiSwitcher().set({
    breakpoints: [{
            at: "0px",
            view: new MobileBar().set({
                background: "green",
                mar: [{
                    a: 21
                }],
                brand: new Text("A").set({
                    size: "S1"
                }),
                hamburgerColour: "#3498db",
                radius: "1rem"
            }).add([
                new Link().set({
                    url: "#A",
                    text: "A",
                }),

                //......

            ]),
        },
        {
            at: "1200px",
            view: new DesktopBar().set({
                background: "green",
                mar: [{
                    a: 21
                }],
                maxHeight: "100px",
                radius: "1rem"
            }).add([
                new Text("A").set({
                    size: "S1"
                }), new Spacer(true),
                new Link().set({
                    url: "#A",
                    text: "Desktop bar",
                }), new Link().set({
                    url: "#B",
                    text: "B",
                }), new Link().set({
                    url: "#C",
                    text: "C",
                })

                //....




            ])

        },

    ]
}).render("#mount");

```

To add 

[beautifier](https://beautifier.io/)