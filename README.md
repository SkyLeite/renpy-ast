# Ren'Py AST

Library for parsing an abstract syntax tree from an `.rpy` file. Extracted from https://github.com/renpy/vscode-language-renpy.

## Usage

``` typescript
import { parseFile } from "@renpy/ast";

const { document, nodes } = await parseFile("screens.rpy");

nodes.forEach(node => console.log(node));
```
