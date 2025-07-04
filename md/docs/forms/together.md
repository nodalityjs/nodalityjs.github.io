# Together
See it together.

## 1 - Example
Here is an example of how to read the value from the ```RadioGroup``` component.

```js
let group = new RadioGroup()
  .setup({
    items: ["Male", "Female", "Hello"],
    multiple: false
  })
  .padding(20);
```

```js
new Button("Submit")
  .set({
    fluidc: "S6",
    onTap: () => {
      console.log(`Selected value is ${group.value}`);
    }
  });
```

## 2 - Entire form
In this example: the form consists of 7 components. 

```RadioGroup```, 
```FilePicker```, 
```Picker``` ,
```Range``` , and
```DataList```.

Data are read when users presses the ```Submit``` button.
You can then use your favourite library to send the data to your backend.

```html
<div id="#mount"></div>
```


```js
class Wrappera extends Base {
  constructor() {
    super();
    this.state = {
      time: '',
      timeValid: false,
    };
    document.querySelector("body").style.backgroundColor = "#c4cccf";
  }

  render() {
    let rg = new RadioGroup().set({
      items: ["Male", "Female", "Third shit"],
      multiple: false,
      font: "Arial",
    });

    let check = new Checkbox().set({
      name: "acceptTerms",
      label: new Text("Check it out!").set({
        size: "S6",
        color: "#1abc9c",
        font: "Arial",
      }),
      customStyle: true,
      checkedBackgroundColor: "#1abc9c",
      mar: "10px",
      size: "20px",
      clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
    });

    let fp = new FilePickera().set({
      id: "A",
      title: "Add profile picture",
      background: "#3498DB",
      color: "white",
      font: "Arial",
      radius: "3rem",
    });

    let items = [
      ["none", "select a car---"],
      ["tesla", "Tesla"],
      ["audi", "Audi"],
    ];

    let pc = new Picker().set({
      items: items,
      font: "Arial",
      arrayPadding: { sides: ["all"], value: "0.5rem" },
      rounded: true,
    });

    let r = new Range().set({
      min: 100,
      max: 1000,
      step: 10,
      width: "80%",
      style: {
        trackColor: "#1abc9c",
        thumbColor: "#3498db",
      },
      arrayMargin: { sides: ["all"], value: "1rem" },
      font: "Arial",
    });

    let dataList = DataList().set({
      placeholder: "Test",
      data: ["Czech Republic", "Kongo", "Peru"],
      arrayMargin: { sides: ["all"], value: "1rem" },
    });

    let timeInput = new TextField().set({
      type: "text",
      placeholder: "Enter swimming time",
      arrayMargin: { sides: ["all"], value: "1rem" },
    });

    let floatTime = new FloatingInput().set({
      title: "Your name",
      type: "input",
    });

    timeInput.onChange((current) => {
      const regex = /^[0-5]?\d:[0-5]\d$/;
      let valid = regex.test(current);
      timeInput.setValid(valid, current);
      this.state.time = current;
      this.state.timeValid = valid;
    });

    return new Center().items([
      new Text("Create an account").fluid("S1").font("Arial").color("#3498db"),

      new Text("Select your gender").fluid("S3").font("Arial"),

      rg,

      fp,

      floatTime,

      timeInput,

      dataList,
      pc,
      r,

      check,

      new Button("Submit").set({
        fluidc: "S6",
        arrpad: { sides: ["all"], value: "1rem" },
        arrayMargin: { sides: ["all"], value: "1rem" },
        onTap: () => {
          if (!fp.hasFile) {
            fp.highlight();
            alert("No file");
          }

          if (this.state.timeValid === false) {
            alert("Time is invalid.");
          }

          this.add({
            a: this.state.time,
            b: fp.file,
            c: pc.el.options[pc.el.selectedIndex].value,
            d: rg.getCheckedValues(),
            e: r.value(),
            g: dataList.getValue(),
            h: floatTime.getValue(),
            i: check.getValue(),
          });
        },
        color: "white",
        background: "#3498db",
      }),

      new Text("By signing up, you agree with terms of use."),
    ]);
  }

  add(data) {
    console.clear();
    console.log("Creating account with data:");
    console.log(data.a);
    console.log(data.b);
    console.log(data.c);
    console.log(data.d);
    console.log(data.e);
    console.log(data.g);
    console.log(data.h);
    console.log(data.i);
  }
}

new Wrappera().mount("#mount");
```