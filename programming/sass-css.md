# Sass/CSS

## Check for overflowing content

You can put this in your console to outline all block/div. Then you can find the one which is outside of your container.

```javascript
[].forEach.call($$(""),function(a){a.style.outline="1px solid #"+(~~(Math.random()(1<<24))).toString(16)})
```

Or add this to your main .css file.

```css
* { outline: 1px red solid !important; visibility: visible !important }
```



