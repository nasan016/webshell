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
  let newUserInput = `<span class='output'>${userInput}</span>`;

  //if clear then early return
  if (userInput === 'clear') {
    commandHandler(userInput.toLowerCase().trim());
    USERINPUT.value = resetInput;
    userInput = resetInput;
    return
  }

  const DIV = document.createElement("div");
  DIV.innerHTML = PROMPT.innerHTML.concat(" ", newUserInput);  
  WRITELINES.parentNode!.insertBefore(DIV, WRITELINES);

  /*
  if input is empty or a collection of spaces, 
  just insert a prompt before #write-lines
  */
  if (userInput.length !== 0) {
      commandHandler(userInput.toLowerCase().trim());
  }
  
  USERINPUT.value = resetInput;
  userInput = resetInput; 
}

function commandHandler(input : string) {
  switch(input) {
    case 'clear':
      setTimeout(() => {
        TERMINAL.innerHTML = "";
        TERMINAL.appendChild(WRITELINESCOPY);
        WRITELINES = WRITELINESCOPY;
      })
      break;
    case 'banner':
      writeLines(BANNER);
      break;
    case 'help':
      writeLines(HELP);
      break;
    case 'whoami':
      writeLines(CREATEWHOAMI());
      break;
    case 'about':
      writeLines(ABOUT);
      break;
    case 'projects':
      writeLines(PROJECTS);
      break;
    case 'repo':
      writeLines(["Redirecting to github.com...", "<br>"])
      break;
    default:
      writeLines(DEFAULT);
      break;
  }  
}

function writeLines(message : string[]) {
  message.forEach((item, idx) => {
    displayText(item, idx);
  }) 
}

function displayText(item : string, idx : number) {
  setTimeout(() => {
    const P = document.createElement("p");
    P.innerHTML = item;
    WRITELINES.parentNode!.insertBefore(P, WRITELINES);
    SCROLLTOBOTTOM();
  }, 50 * idx)
}
