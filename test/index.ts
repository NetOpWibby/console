


//  N A T I V E

import assert from "assert";

//  I M P O R T

import Test from "@webb/test";

//  U T I L

import print from "../dist";



//  T E S T S

const message = "This text is styled";
const test = Test("@webb/console");

test("Text is magenta", () => {
  assert.deepStrictEqual(print.magenta(message), `\u001b[35m${message}\u001b[0m`);
});

test("Text is red", () => {
  assert.deepStrictEqual(print.red(message), `\u001b[31m${message}\u001b[0m`);
});

test("Text is yellow", () => {
  assert.deepStrictEqual(print.yellow(message), `\u001b[33m${message}\u001b[0m`);
});

test("Text is green", () => {
  assert.deepStrictEqual(print.green(message), `\u001b[32m${message}\u001b[0m`);
});

test("Text is cyan", () => {
  assert.deepStrictEqual(print.cyan(message), `\u001b[36m${message}\u001b[0m`);
});

test("Text is blue", () => {
  assert.deepStrictEqual(print.blue(message), `\u001b[34m${message}\u001b[0m`);
});

test("Text is white", () => {
  assert.deepStrictEqual(print.white(message), `\u001b[37m${message}\u001b[0m`);
});

test("Text is gray", () => {
  assert.deepStrictEqual(print.gray(message), `\u001b[90m${message}\u001b[0m`);
});

test("Text is grey", () => {
  assert.deepStrictEqual(print.grey(message), `\u001b[90m${message}\u001b[0m`);
});

test("Text is black", () => {
  assert.deepStrictEqual(print.black(message), `\u001b[30m${message}\u001b[0m`);
});

//

test("Text is bold", () => {
  assert.deepStrictEqual(print.bold(message), `\u001b[1m${message}\u001b[0m`);
});

test("Text is dim", () => {
  assert.deepStrictEqual(print.dim(message), `\u001b[2m${message}\u001b[0m`);
});

test("Text is inverted", () => {
  assert.deepStrictEqual(print.invert(message), `\u001b[7m${message}\u001b[0m`);
});

test("Text is underlined", () => {
  assert.deepStrictEqual(print.underline(message), `\u001b[4m${message}\u001b[0m`);
});

//

test("Background is magenta", () => {
  assert.deepStrictEqual(print.magentaLine(message), `\u001b[45m${message}\u001b[0m`);
});

test("Background is red", () => {
  assert.deepStrictEqual(print.redLine(message), `\u001b[41m${message}\u001b[0m`);
});

test("Background is yellow", () => {
  assert.deepStrictEqual(print.yellowLine(message), `\u001b[43m${message}\u001b[0m`);
});

test("Background is green", () => {
  assert.deepStrictEqual(print.greenLine(message), `\u001b[42m${message}\u001b[0m`);
});

test("Background is cyan", () => {
  assert.deepStrictEqual(print.cyanLine(message), `\u001b[46m${message}\u001b[0m`);
});

test("Background is blue", () => {
  assert.deepStrictEqual(print.blueLine(message), `\u001b[44m${message}\u001b[0m`);
});

test("Background is white", () => {
  assert.deepStrictEqual(print.whiteLine(message), `\u001b[47m${message}\u001b[0m`);
});

test("Background is gray", () => {
  assert.deepStrictEqual(print.grayLine(message), `\u001b[100m${message}\u001b[0m`);
});

test("Background is grey", () => {
  assert.deepStrictEqual(print.greyLine(message), `\u001b[100m${message}\u001b[0m`);
});

test("Background is black", () => {
  assert.deepStrictEqual(print.blackLine(message), `\u001b[40m${message}\u001b[0m`);
});



test.run();
