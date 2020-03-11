


//  U T I L S

interface LooseObject {
  [key: string]: any
}

const colors: LooseObject = {
  black: 30,
  blue: 34,
  cyan: 36,
  gray: 90,
  green: 32,
  grey: 90,
  magenta: 35,
  red: 31,
  white: 37,
  yellow: 33
};

const decorations = {
  bold: 1,
  dim: 2,
  invert: 7,
  underline: 4
};

const consoleExport: LooseObject = {};
const supported = /ansi|color|cygwin|linux/i.test((process as LooseObject).env.TERM);



//  P R O G R A M

for (const name in colors) {
  const color = (colors as LooseObject)[name];

  consoleExport[name] = (suppliedMessage: string) => {
    return createExport(color, suppliedMessage);
  };

  consoleExport[`${name}Line`] = (suppliedMessage: string) => {
    return createExport(color + 10, suppliedMessage);
  };
}

for (const name in decorations) {
  const decoration = (decorations as LooseObject)[name];

  consoleExport[name] = (suppliedMessage: string) => {
    return createExport(decoration, suppliedMessage);
  };
}

//  H E L P E R

function createExport(colorCode: number, message: string) {
  if (supported)
    message = `\u001b[${colorCode}m${message}\u001b[0m`;

  return message;
}



//  E X P O R T

export default consoleExport;
