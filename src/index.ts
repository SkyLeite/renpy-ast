import { Tokenizer } from "./tokenizer/tokenizer";
import { TextDocument } from "vscode-languageserver-textdocument";
import { readFile } from "node:fs/promises";

export async function parse(content: string) {
    const document = TextDocument.create("file://my.rpy", "rpy", 0, content);
    return { document, nodes: await Tokenizer.tokenizeDocument(document) };
}

export async function parseFile(path: string) {
    const file = await readFile(path, "utf8");
    return parse(file);
}

export default parse;
