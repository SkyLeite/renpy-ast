import { Tokenizer } from "./tokenizer/tokenizer";
import { TextDocument } from "vscode-languageserver-textdocument";

export default function tokenize(content: string) {
    const document = TextDocument.create("file://my.rpy", "rpy", 0, content);
    return Tokenizer.tokenizeDocument(document);
}
