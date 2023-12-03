const TERMINAL = document.getElementById("terminal")!;
const USERINPUT = document.getElementById("user-input") as HTMLInputElement;
const PROMPT = document.getElementById("prompt")!;

let WRITELINES = document.getElementById("write-lines")!;
let userInput : string;

//WRITELINESCOPY is used to during the "clear" command
const WRITELINESCOPY = WRITELINES

const FOCUS = () => {
  USERINPUT.focus();
}

const SCROLLTOBOTTOM = () => {
  const MAIN = document.getElementById("main")!;
  MAIN.scrollTop = MAIN.scrollHeight;
}

function userInputHandler(e : KeyboardEvent) {
  const key = e.code;

  switch(key) {
    case "Enter":
      enterKey();
      SCROLLTOBOTTOM();
      break;
  }
}

function enterKey() {
  const resetInput = "";
  userInput = USERINPUT.value;
  userInput = userInput.trim();

  const p = document.createElement("p");
  p.innerHTML = PROMPT.innerHTML.concat(" ", userInput);  
  WRITELINES.parentNode!.insertBefore(p, WRITELINES);

  /*
  if input is empty or a collection of spaces, 
  just insert a prompt before #write-lines
  */
  if (userInput.length !== 0) {
    CREATEBANNER().forEach((ele) => {
      WRITELINES.innerHTML += ele
    })
  }
  
  USERINPUT.value = resetInput;
  userInput = resetInput; 
}
