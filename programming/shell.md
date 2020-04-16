# Shell

## Convert .flac to .aac VBR 5 with ffmpeg

Becoming a super hero is a fairly straight forward process:

```bash
find . -name '*.flac' -exec sh -c 'ffmpeg -i "$1" -c:v copy -c:a libfdk_aac -vbr 5 "${1%.flac}.m4a"' _ {} \;
```



