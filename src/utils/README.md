# `utils`

A nested `utils` directory is a common occurrence on any given level of a component directory.

The titles of all sub-directories of this directory may also occur on any given level of a component directory.

Here, "`utils`" is used as a parent terms of all of it's usual siblings, meaning directories which may often appear on the same level as a `utils` directory in a component directory are nested under here.

These include, and are exhausted by:

- `api`
- `compilers`
- `formatters`
- `helpers`
- `hooks`
- `react`

In summary, this means that common `utils` here will all be found under their unique child directory. Whereas, in non-common nested component directories, all `utils` simply appear under a shared `utils` directory. This means that, for example, `use-{{hook}}.ts` may appear in a shared directory with `compile-{{compiler}}.ts`.
