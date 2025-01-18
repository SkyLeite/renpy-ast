import { Tokenizer } from "./tokenizer/tokenizer";
import { TextDocument } from "vscode-languageserver-textdocument";

export default async function tokenize(content: string) {
    const document = TextDocument.create("file://my.rpy", "rpy", 0, content);
    return { document, nodes: await Tokenizer.tokenizeDocument(document) };
}
