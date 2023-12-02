const TERMINAL = document.getElementById("terminal")!;
const USERINPUT = document.getElementById("user-input") as HTMLInputElement;

let WRITELINES = document.getElementById("write-lines")!;

let isPassword = false;
let isCorrect = false;
let userInput = "";

function userInputHandler(e : KeyboardEvent) {
  const key = e.code;

  if(key === "Enter") {
    console.log(USERINPUT.value);
    USERINPUT.value = ""
  };
};
