# Table
To create a simple modal. use ```table``` structure
This generates instance of ```Table``` class.
You then supply an array of objects that will form your table.

```js
{
    type: "table"
}
```

### Options
* ```cellPadding``` - padding of cells
* ```cellAlign``` - align of cells
* ```style``` - style of cells  
* ```headStyle``` - style of header
* ```border``` - border of the table
* ```center``` - center cells
* ```borderRadius``` - table border radius

```js
  new Table().add([{
        abbr: "AUIUI/AK9PT",
        name: "Pokročilé mobilní technologie",
        grade: "A",
        date: "09.01.2024"
    },
    {
        abbr: "AUIUI/AK9PT",
        name: "Pokročilé mobilní technologie",
        grade: "A",
        date: "09.01.2024"
    },
    {
        abbr: "AUIUI/AK9PT",
        name: "Pokročilé mobilní technologie",
        grade: "A",
        date: "09.01.2024"
    }
]).set({
    cellPadding: "0.3em",
    cellAlign: "center",
    style: {
        font: "Arial"
    },
    headStyle: {
        color: "white",
        background: "#ff6d22"
    },
    border: "2px solid black",
    center: true,
    borderRadius: 2.2
}).render("#mount");
 
```

