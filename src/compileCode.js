// Func to grab var name
const grabVarName = (cLine) => {
  return cLine
    .split(" ")[1]
    .split("=")
    .join(",")
    .split("(")
    .join(",")
    .split(",")[0];
};

// Func to grab everything after var name
const grabBlockContent = (cLine) => {
  const splittedString = cLine.split(" ");
  // if there are spaces between var name and = then remove them
  if (splittedString[2] === "=") {
    splittedString.splice(0, 1);

    // space removed by joining the rest of array
    return splittedString
      .join("")
      .split("=")
      .join(",")
      .split("(")
      .join(",")
      .split(",")[1];
  }

  return cLine
    .split(" ")[1]
    .split("=")
    .join(",")
    .split("(")
    .join(",")
    .split(",")[1];
};

// function to check the type of any var of function
const checkType = (codeLine) => {
  // ! TODO Remove spaces because it causes errors
  //   Converting the string into executable js code
  // grabbing the variable name from the string and checking its type
  return eval(
    `${codeLine};
        (typeof(${grabVarName(codeLine)}))
        `
  );
};

const convertVar = (cLine) => {
  let convertedVar;
  convertedVar = `${cLine.split(" ")[0]} ${grabVarName(cLine)}: ${checkType(
    cLine
  )}  = ${grabBlockContent(cLine)}`;
  return convertedVar;
};

const compileCode = (jsCode) => {
  //* Compile the code and return it here
  //* HINT: use regex

  //* HINT: Line can be ended by the 'enter' or by ';'
  const codeLine = jsCode.split("\n").join(",").split(";").join(",").split(",");

  //   !TODO Further Idea
  /**After getting the lines of code
   * separate the variables, functions, classes, objects etc - separation could be checked using regExp and type of the code line
   * checking can be done using switch statement and array.filter method
   * After separation convert them into TS
   */

  //   console.dir(codeLine);

  const compiledCode = [];

  //   loop through every line of code and do the conversion
  for (let i = 0; i < codeLine.length; i++) {
    let lineOfCode = codeLine[i];
    //   if empty line then continue
    if (lineOfCode === "") {
      continue;
    }

    //   checking if the line of code is a variable
    if (
      checkType(lineOfCode) === "string" ||
      checkType(lineOfCode) === "number" ||
      checkType(lineOfCode) === "boolean"
    ) {
      compiledCode.push(convertVar(lineOfCode));
    }
  }

  //   -----------End of conversion and returning the result----------
  return compiledCode.join("\n");
};

export default compileCode;
