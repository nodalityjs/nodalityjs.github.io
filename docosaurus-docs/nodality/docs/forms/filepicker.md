# FilePicker
Creates a simple filepicker.
```js
{
    type: "filePicker"
}
```

An instance of ```FilePickera``` class is created.

### Properties
```accept``` - sets the accepted file-type
```js
 FilePickera()
          .set({
              id: "A",
              title: "Add profile picture",
              background: "#3498DB",
              color: "white",
              font: "Arial",
              radius: "3rem",
              accept: "application/pdf"
          });
          // 195644 off the ch. 02/02/25
```

Here are accepted types:

### image
```js
"image/jpeg"
"image/png"
"image/gif"
"image/bmp"
"image/webp"
"image/svg+xml"
"image/tiff"
"image/x-icon"
```

### audio
```js
"audio/mpeg"
"audio/wav"
"audio/ogg"
"audio/aac"
"audio/webm"
"audio/flac"
"audio/x-wav"
```

### video
```js
"video/mp4"
"video/mpeg"
"video/ogg"
"video/webm"
"video/x-msvideo"
"video/quicktime"
```

### text
```js
"text/plain"
"text/html"
"text/css"
"text/javascript"
"text/csv"
"text/xml"
```

### application
```js
"application/pdf"
"application/msword"
"application/vnd.openxmlformats-officedocument.wordprocessingml.document"
"application/vnd.ms-excel"
"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
"application/vnd.ms-powerpoint"
"application/vnd.openxmlformats-officedocument.presentationml.presentation"
"application/zip"
"application/x-rar-compressed"
"application/json"
"application/ld+json"
"application/xml"
"application/octet-stream"
```


```js
"font/woff"
"font/woff2"
"font/ttf"
"font/otf"
```