import { expect, test, describe } from "vitest";
import tokenize from "../src";
import { readFile } from "node:fs/promises";
import path from "node:path";

const example = (): Promise<string> => {
    return readFile(path.join(__dirname, "..", "examples", "example.rpy"), "utf8");
};

describe("Tokenize", () => {
    test("correctly parses the number of nodes", async () => {
        const file = await example();
        const { nodes } = await tokenize(file);
        expect(nodes.count()).toBe(8871);
    });

    test("correctly gets the value from a token", async () => {
        const file = await example();
        const firstLine = file.split("\n").at(0);
        const { document, nodes } = await tokenize(file);

        const value = nodes.root.children.at(0).token?.getValue(document);
        expect(value).toBe(firstLine);
    });
});
