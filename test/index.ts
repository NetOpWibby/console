


//  N A T I V E

import assert from "assert";

//  U T I L

import print from "../dist";



//  T E S T S

try {
  const message = "This text is magenta";

  assert.strictEqual(`\u001b[35m${message}\u001b[0m`, print.magenta(message));
  generateSuccessResponse(print.magenta(message));
} catch(testError) {
  generateErrorResponse(testError);
}

try {
  const message = "This text is red";

  assert.strictEqual(`\u001b[31m${message}\u001b[0m`, print.red(message));
  generateSuccessResponse(print.red(message));
} catch(testError) {
  generateErrorResponse(testError);
}

try {
  const message = "This text is yellow";

  assert.strictEqual(`\u001b[33m${message}\u001b[0m`, print.yellow(message));
  generateSuccessResponse(print.yellow(message));
} catch(testError) {
  generateErrorResponse(testError);
}

try {
  const message = "This text is green";

  assert.strictEqual(`\u001b[32m${message}\u001b[0m`, print.green(message));
  generateSuccessResponse(print.green(message));
} catch(testError) {
  generateErrorResponse(testError);
}

try {
  const message = "This text is cyan";

  assert.strictEqual(`\u001b[36m${message}\u001b[0m`, print.cyan(message));
  generateSuccessResponse(print.cyan(message));
} catch(testError) {
  generateErrorResponse(testError);
}

try {
  const message = "This text is blue";

  assert.strictEqual(`\u001b[34m${message}\u001b[0m`, print.blue(message));
  generateSuccessResponse(print.blue(message));
} catch(testError) {
  generateErrorResponse(testError);
}

try {
  const message = "This text is white";

  assert.strictEqual(`\u001b[37m${message}\u001b[0m`, print.white(message));
  generateSuccessResponse(print.white(message));
} catch(testError) {
  generateErrorResponse(testError);
}

try {
  const message = "This text is gray";

  assert.strictEqual(`\u001b[90m${message}\u001b[0m`, print.gray(message));
  generateSuccessResponse(print.gray(message));
} catch(testError) {
  generateErrorResponse(testError);
}

try {
  const message = "This text is grey";

  assert.strictEqual(`\u001b[90m${message}\u001b[0m`, print.grey(message));
  generateSuccessResponse(print.grey(message));
} catch(testError) {
  generateErrorResponse(testError);
}

try {
  const message = "This text is black";

  assert.strictEqual(`\u001b[30m${message}\u001b[0m`, print.black(message));
  generateSuccessResponse(print.black(message));
} catch(testError) {
  generateErrorResponse(testError);
}

//

try {
  const message = "This text is bold";

  assert.strictEqual(`\u001b[1m${message}\u001b[0m`, print.bold(message));
  generateSuccessResponse(print.bold(message));
} catch(testError) {
  generateErrorResponse(testError);
}

try {
  const message = "This text is dim";

  assert.strictEqual(`\u001b[2m${message}\u001b[0m`, print.dim(message));
  generateSuccessResponse(print.dim(message));
} catch(testError) {
  generateErrorResponse(testError);
}

try {
  const message = "This text is inverted";

  assert.strictEqual(`\u001b[7m${message}\u001b[0m`, print.invert(message));
  generateSuccessResponse(print.invert(message));
} catch(testError) {
  generateErrorResponse(testError);
}

try {
  const message = "This text is underlined";

  assert.strictEqual(`\u001b[4m${message}\u001b[0m`, print.underline(message));
  generateSuccessResponse(print.underline(message));
} catch(testError) {
  generateErrorResponse(testError);
}

//

try {
  const message = "This background is magenta";

  assert.strictEqual(`\u001b[45m${message}\u001b[0m`, print.magentaLine(message));
  generateSuccessResponse(print.magentaLine(print.black(message)));
} catch(testError) {
  generateErrorResponse(testError);
}

try {
  const message = "This background is red";

  assert.strictEqual(`\u001b[41m${message}\u001b[0m`, print.redLine(message));
  generateSuccessResponse(print.redLine(print.black(message)));
} catch(testError) {
  generateErrorResponse(testError);
}

try {
  const message = "This background is yellow";

  assert.strictEqual(`\u001b[43m${message}\u001b[0m`, print.yellowLine(message));
  generateSuccessResponse(print.yellowLine(print.black(message)));
} catch(testError) {
  generateErrorResponse(testError);
}

try {
  const message = "This background is green";

  assert.strictEqual(`\u001b[42m${message}\u001b[0m`, print.greenLine(message));
  generateSuccessResponse(print.greenLine(print.black(message)));
} catch(testError) {
  generateErrorResponse(testError);
}

try {
  const message = "This background is cyan";

  assert.strictEqual(`\u001b[46m${message}\u001b[0m`, print.cyanLine(message));
  generateSuccessResponse(print.cyanLine(print.black(message)));
} catch(testError) {
  generateErrorResponse(testError);
}

try {
  const message = "This background is blue";

  assert.strictEqual(`\u001b[44m${message}\u001b[0m`, print.blueLine(message));
  generateSuccessResponse(print.blueLine(print.black(message)));
} catch(testError) {
  generateErrorResponse(testError);
}

try {
  const message = "This background is white";

  assert.strictEqual(`\u001b[47m${message}\u001b[0m`, print.whiteLine(message));
  generateSuccessResponse(print.whiteLine(print.black(message)));
} catch(testError) {
  generateErrorResponse(testError);
}

try {
  const message = "This background is gray";

  assert.strictEqual(`\u001b[100m${message}\u001b[0m`, print.grayLine(message));
  generateSuccessResponse(print.grayLine(print.white(message)));
} catch(testError) {
  generateErrorResponse(testError);
}

try {
  const message = "This background is grey";

  assert.strictEqual(`\u001b[100m${message}\u001b[0m`, print.greyLine(message));
  generateSuccessResponse(print.greyLine(print.white(message)));
} catch(testError) {
  generateErrorResponse(testError);
}

try {
  const message = "This background is black";

  assert.strictEqual(`\u001b[40m${message}\u001b[0m`, print.blackLine(message));
  generateSuccessResponse(print.blackLine(print.white(message)));
} catch(testError) {
  generateErrorResponse(testError);
}



//  H E L P E R S

function generateErrorResponse(theError: { actual: string, code: string, expected: string }) {
  const { actual, code, expected } = theError;

  console.group(print.red(print.bold(`${code}\n`)));
  console.log(`ACTUAL\n${actual}`);
  console.log();
  console.log(`EXPECTED\n${expected}`);
  console.log();
  console.groupEnd();
}

function generateSuccessResponse(actualResponse: string) {
  console.group(print.green(print.bold("ASSERTION PASSED\n")));
  console.log(`ACTUAL/EXPECTED\n${actualResponse}`);
  console.log();
  console.groupEnd();
}
