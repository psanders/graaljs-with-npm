# GraalJS with NPM packages

This repository demonstrate how to load npm package in graaljs, by using [Nodyn's](https://github.com/nodyn/jvm-npm) package loader.

> I use this in a [larger project](https://github.com/fonoster/routr) we pretty good results.

## Depends on

- GRAALVM
- NPM

## Limitations

This approach will only work out of the box for pure JS NPM modules.

## Get started

```bash
export GRAALVM_HOME={THE PATH TO YOUR GRAALVM...}
npm i
./run.sh
```

Good look!
