import { expect, test } from "vitest";
import tokenize from "../src";
import { readFile } from "node:fs/promises";
import path from "node:path";

const example = (): Promise<string> => {
    return readFile(path.join(__dirname, "..", "examples", "example.rpy"), "utf8");
};

test("Tokenize", async () => {
    const file = await example();
    const tokens = await tokenize(file);
    expect(tokens.count()).toBe(8871);
});
