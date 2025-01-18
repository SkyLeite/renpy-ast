# Ren'Py AST

Library for parsing an abstract syntax tree from an `.rpy` file. Extracted from https://github.com/renpy/vscode-language-renpy.

## Usage

``` typescript
import parse from "renpy-ast";
import { readFile } from "node:fs/promises";

const file = await readFile("screens.rpy");
const tokens = parse(file);

tokens.forEach(token => console.log(token));
```
