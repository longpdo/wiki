---
layout: default
title: Dependabot
parent: Programming Snippets
---

# Dependabot

## Fix security alert in package-lock.json

```sh
npm install --package-lock-only PACKAGENAME
```

## Fix security alert in Gemfile.lock

This will update the dependencies in *Gemfile.lock* without installing them.

```sh
bundle lock --update
```
