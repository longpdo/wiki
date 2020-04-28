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
