# Usage with PHP
You can use the form with PHP.

## 1 - Create form
Pass name of you ```php``` script into the ```action``` argument. You can then pass the elements such as ```FloatingInput``` and ```Button``` into the array.
Add the ```name``` to set ```name``` attribute you can then read inside your ```PHP``` script.
```js
new Form()
   .set({action:"file.php"}) // 12:45:53 Nice! 21/04/2025
   .add([
        new FloatingInput().set({
             title: "Your name",
             type: "input",
             name: "name"
        }),

        new FloatingInput().set({
            title: "Your email",
            type: "input",
            name: "email",
            color: "#3498db",
            font: "Arial",
            mar: [{"a": "1rem"}]
       }), 

          new Button("Submit form").set({ // 174915 If I dont serve it, it downloads the php file
            type: "submit",
            background: "#3498db",
            color: "white",
            weight: "bold",
            radius: "1rem",
            pad: [{"a": "1rem"}], // add
            mar: [{"b": "1rem"}] // add
        })
   ])


```


## 2- Create PHP script
Inside your PHP script, you can read the values sent to the server of the script by accessing ```name``` and ```email``` keys.
To access ```name``` key you can read ```$_POST['name']``` and write it out on screen using ```echo```.
For more information about PHP follow: [php-tutorial-w3c](https://www.w3schools.com/php/default.asp).

```php
<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve form data
    $name = htmlspecialchars($_POST['name'] ?? 'No name provided');
    $email = htmlspecialchars($_POST['email'] ?? 'No email provided');

    // Output data back to the user
    echo "Welcome, $name!<br>";
    echo "Your email address is: $email";
} else {
    echo "Invalid request method.";
}
?>
```