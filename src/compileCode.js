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
  //   Converting the string into executable js code
  // grabbing the variable name from the string and checking its type
  return eval(
    `${codeLine};
        (typeof(${grabVarName(codeLine)}))
        `
  );
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
  console.dir(codeLine);

  const compiledCode = codeLine.map((lineOfCode) => {
    //   if(lineOfCode === '') continue;
    let convertedVar;
    //   checking if the line of code is a variable
    if (
      checkType(lineOfCode) === "string" ||
      checkType(lineOfCode) === "number" ||
      checkType(lineOfCode) === "boolean"
    ) {
      convertedVar = `${lineOfCode.split(" ")[0]} ${grabVarName(
        lineOfCode
      )}: ${checkType(lineOfCode)}  = ${grabBlockContent(lineOfCode)}`;
    }
    return convertedVar;
  });
  return compiledCode.join("\n");
};

export default compileCode;
