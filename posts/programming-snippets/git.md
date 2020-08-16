---
layout: default
title: Git
parent: Programming Snippets
permalink: /programming-snippets/git
---

# Git

## Reset local repository branch to remote HEAD

```sh
git fetch origin
git reset --hard origin/master
```

## Sync a fork with the original upstream repository via rebase

```sh
git remote add upstream https://github.com/{original_developer}/{repository}
git fetch upstream
git rebase upstream/master

# may need: git push --force
```

## Remove latest commits from repository

To remove commits from local repository:

```sh
# Replace n with a number of the commits you want to check to remove
git rebase -i HEAD~n
```

To undo pushed commits to remote repository:

```sh
# Undo latest commit on remote, to undo more commits add more ^ after HEAD
git push -f origin HEAD^:master
```
