---
layout: default
title: Shell
parent: Programming Snippets
permalink: /programming-snippets/shell
---

# Shell

## Convert .flac to .aac VBR 5 with ffmpeg

Becoming a super hero is a fairly straight forward process:

```bash
find . -name '*.flac' -exec sh -c 'ffmpeg -i "$1" -c:v copy -c:a libfdk_aac -vbr 5 "${1%.flac}.m4a"' _ {} \;
```

## List / Delete node_modules folders

```bash
# List node_modules folders and their sizes
find . -name "node_modules" -type d -prune -print | xargs du -chs

# Delete node_modules folders
find . -name 'node_modules' -type d -prune -print -exec rm -rf '{}' \;
```

## Basic Syntax of the CASE Statement

```bash
case $variable in
     pattern-1)
          commands
          ;;
     pattern-2)
          commands
          ;;
     pattern-3|pattern-4|pattern-5)
          commands
          ;;
     pattern-N)
          commands
          ;;
     *)
          commands
          ;;
esac
```

## Avoid If statements in Bash scripts with logical operators

```bash
# Instead of this IF ELSE statement
if [ -f .zshrc ]; then
  cat .zshrc
  echo 'This is my profile.'
else
  echo "File does not exist."
fi

# This does the same
# > The right side of && will only be evaluated if the exit status of the left side is zero (i.e. true)
# > || is the opposite: it will evaluate the right side only if the left side exit status is non-zero (i.e. false).
cat .zshrc && echo 'This is my profile.'
cat .zshrc || echo 'File does not exist.'
```

## Fix EADDRINUSE: address already in use

To find the process id (PID) associated with the port 4000

```bash
lsof -i tcp:4000
```

Then to kill the process with PID 84637

```bash
sudo kill -9 84637
```
