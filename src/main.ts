import * as com from "./commands";

const TERMINAL = document.getElementById("terminal")!;
const USERINPUT = document.getElementById("user-input") as HTMLInputElement;
const PROMPT = document.getElementById("prompt")!;

//this gets deleted and reassigned
let mutWriteLines = document.getElementById("write-lines")!;

//WRITELINESCOPY is used to during the "clear" command
const WRITELINESCOPY = mutWriteLines;

const HISTORY : string[] = []
let historyIdx = 0
let tempInput = ""

const COMMANDS = ["help", "about", "projects", "whoami", "repo", "banner", "clear"];

let userInput : string;

const scrollToBottom = () => {
  const MAIN = document.getElementById("main")!;
  MAIN.scrollTop = MAIN.scrollHeight;
}

function userInputHandler(e : KeyboardEvent) {
  const key = e.code;

  switch(key) {
    case "Enter":
      enterKey();
      scrollToBottom();
      break;
    case "Escape":
      USERINPUT.value = "";
      break;
    case "ArrowUp":
      if (historyIdx === HISTORY.length) tempInput = USERINPUT.value
      if (historyIdx !== 0) {
        historyIdx -= 1;
        USERINPUT.value = HISTORY[historyIdx];
      }
      e.preventDefault()
      break;
    case "ArrowDown":
      if (historyIdx !== HISTORY.length) {
          historyIdx += 1;
          USERINPUT.value = HISTORY[historyIdx];
          if (historyIdx === HISTORY.length) USERINPUT.value = tempInput;  
    }      
      break;
    case "Tab":
      let currInput = USERINPUT.value;
      const breakException = {};
      try {
        COMMANDS.forEach((ele) => {
          for (let i = 0; i < currInput.length; i++) {
            if (currInput[i] !== ele[i]) break;
            USERINPUT.value = ele;
            throw breakException;
          }
        }) 
      } catch (e) {
        if (e !== breakException) throw e;        
      }
      e.preventDefault();
      break;
  }
}

function enterKey() {
  const resetInput = "";
  userInput = USERINPUT.value;
  let newUserInput = `<span class='output'>${userInput}</span>`;

  HISTORY.push(userInput);
  historyIdx = HISTORY.length

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
      writeLines(com.WHOAMI());
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
    scrollToBottom();
  }, 50 * idx);
}

const initEventListeners = () => {
  window.addEventListener('load', () => {
    writeLines(com.BANNER);
    USERINPUT.addEventListener('keydown', userInputHandler);
  })


  window.addEventListener('click', () => {
    USERINPUT.focus();
  })
}

initEventListeners();
