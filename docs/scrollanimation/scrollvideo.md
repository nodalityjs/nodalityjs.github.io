# ScrollVideo

Play video as you scroll.

## Arguments
* ```minScrollHeight``` - defines at what scroll height the playback should start
* ```maxScrollHeight``` -  defines at what scroll height the playback should stop
* ```videoURL``` - URL of video to be played

```js
new ScrollVideo().set({
    minScrollHeight: 0,
    maxScrollHeight: 1500,
    videoUrl: "https://www.apple.com/media/us/mac-pro/2013/16C1b6b5-1d91-4fef-891e-ff2fc1c1bb58/videos/macpro_main_desktop.mp4"
});
```

