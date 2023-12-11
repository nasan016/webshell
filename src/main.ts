import * as com from "./commands";

//mutWriteLines gets deleted and reassigned
let mutWriteLines = document.getElementById("write-lines");
let historyIdx = 0
let tempInput = ""
let userInput : string;

//WRITELINESCOPY is used to during the "clear" command
const WRITELINESCOPY = mutWriteLines;
const TERMINAL = document.getElementById("terminal");
const USERINPUT = document.getElementById("user-input") as HTMLInputElement;
const PROMPT = document.getElementById("prompt");
const COMMANDS = ["help", "about", "projects", "whoami", "repo", "banner", "clear"];
const REPO_LINK = com.BANNEROBJ.repolink;
const HISTORY : string[] = [];

const scrollToBottom = () => {
  const MAIN = document.getElementById("main");
  if(!MAIN) return

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
      arrowKeys(key);
      e.preventDefault();
      break;
    case "ArrowDown":
      arrowKeys(key);
      break;
    case "Tab":
      tabKey();
      e.preventDefault();
      break;
  }
}

function enterKey() {
  if (!mutWriteLines || !PROMPT) return
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
  div.innerHTML = `${PROMPT.innerHTML} ${newUserInput}`;

  if (mutWriteLines.parentNode) {
    mutWriteLines.parentNode.insertBefore(div, mutWriteLines);
  }

  /*
  if input is empty or a collection of spaces, 
  just insert a prompt before #write-lines
  */
  if (userInput.trim().length !== 0) {
      commandHandler(userInput.toLowerCase().trim());
    }
  
  USERINPUT.value = resetInput;
  userInput = resetInput; 
}

function tabKey() {
  let currInput = USERINPUT.value;

  for (const ele of COMMANDS) {
    if(ele.startsWith(currInput)) {
      USERINPUT.value = ele;
      return
    }
  }
}

function arrowKeys(e : string) {
  switch(e){
    case "ArrowDown":      
      if (historyIdx !== HISTORY.length) {
          historyIdx += 1;
          USERINPUT.value = HISTORY[historyIdx];
          if (historyIdx === HISTORY.length) USERINPUT.value = tempInput;  
      }      
      break;
    case "ArrowUp":
      if (historyIdx === HISTORY.length) tempInput = USERINPUT.value;
      if (historyIdx !== 0) {
        historyIdx -= 1;
        USERINPUT.value = HISTORY[historyIdx];
      }
      break;
  }
}

function commandHandler(input : string) {
  if(input.startsWith("rm -rf") && input.trim() !== "rm -rf") {
    if(input === "rm -rf src") {
      writeLines(["Oh no. Why would you do that?", "<br>"]);
    } else {
      writeLines(["<br>", "Directory not found.", "type <span class='command'>'ls'</span> for a list of directories.", "<br>"]);
    }
    return
  }

  switch(input) {
    case 'clear':
      setTimeout(() => {
        if(!TERMINAL || !WRITELINESCOPY) return
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
        window.open(REPO_LINK, '_blank');
      }, 500);
      break;
    case 'rm -rf':
      writeLines(["Usage: <span class='command'>'rm -rf &lt;dir&gt;'</span>", "<br>"])
      break;
    case 'ls':
      writeLines(["src", "<br>"])
      break;
    default:
      writeLines(com.DEFAULT);
      break;
  }  
}

function writeLines(message : string[]) {
  message.forEach((item, idx) => {
    displayText(item, idx);
  });
}

function displayText(item : string, idx : number) {
  setTimeout(() => {
    if(!mutWriteLines) return
    const p = document.createElement("p");
    p.innerHTML = item;
    mutWriteLines.parentNode!.insertBefore(p, mutWriteLines);
    scrollToBottom();
  }, 40 * idx);
}

const initEventListeners = () => {
  window.addEventListener('load', () => {
    writeLines(com.BANNER);
    USERINPUT.addEventListener('keydown', userInputHandler);
  });
  
  window.addEventListener('click', () => {
    USERINPUT.focus();
  });
}

initEventListeners();
