import * as com from "./commands";

const TERMINAL = document.getElementById("terminal")!;
const USERINPUT = document.getElementById("user-input") as HTMLInputElement;
const PROMPT = document.getElementById("prompt")!;

//this gets deleted and reassigned
let mutWriteLines = document.getElementById("write-lines")!;

//WRITELINESCOPY is used to during the "clear" command
const WRITELINESCOPY = mutWriteLines;

let userInput : string;

const SCROLL_TO_BOTTOM = () => {
  const MAIN = document.getElementById("main")!;
  MAIN.scrollTop = MAIN.scrollHeight;
}

function userInputHandler(e : KeyboardEvent) {
  const key = e.code;

  switch(key) {
    case "Enter":
      enterKey();
      SCROLL_TO_BOTTOM();
      break;
    case "Escape":
      USERINPUT.value = "";
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

  const div = document.createElement("div");
  div.innerHTML = PROMPT.innerHTML.concat(" ", newUserInput);  
  mutWriteLines.parentNode!.insertBefore(div, mutWriteLines);

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
        mutWriteLines = WRITELINESCOPY;
      })
      break;
    case 'banner':
      writeLines(com.BANNER);
      break;
    case 'help':
      writeLines(com.HELP);
      break;
    case 'whoami':
      writeLines(com.CREATEWHOAMI());
      break;
    case 'about':
      writeLines(com.ABOUT);
      break;
    case 'projects':
      writeLines(com.PROJECTS);
      break;
    case 'repo':
      writeLines(["Redirecting to github.com...", "<br>"]);
      setTimeout(() => {
        window.open(com.BANNEROBJ.repolink, '_blank');
      }, 500);
      break;
    default:
      writeLines(com.DEFAULT);
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
    const p = document.createElement("p");
    p.innerHTML = item;
    mutWriteLines.parentNode!.insertBefore(p, mutWriteLines);
    SCROLL_TO_BOTTOM();
  }, 50 * idx);
}

window.addEventListener('load', () => {
  writeLines(com.BANNER);
  USERINPUT.addEventListener('keydown', userInputHandler);
});

window.addEventListener('click', () => {
  USERINPUT.focus();
})
