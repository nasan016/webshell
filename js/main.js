var terminal = document.getElementById("terminal");
var cmdLine = document.getElementById("user_cmd");
var commandDiv = document.getElementById("commands");
var passwordLine = document.getElementById("passwordLine")
let terminalLines = document.getElementById("writingLines");
let passwordInput = document.getElementById("enterpassword");

var message = ['Incorrect password.<br><br>'];

let password_input_or_cmd_input = true
let flag = false;
let historyTracker = -1;
let counter = 0;
const history = [];
var userInput = "";

function tabCompletion(tab_cmd){
    for(let i = 0; i < commandList.length; i++){
        if(commandList[i].includes(tab_cmd) && tab_cmd[0] === commandList[i][0]){
            cmdLine.value = commandList[i];
            break;
        } else{
            continue;
        }
    }
}

function historyScroll(event){
    let tab_cmd = '';
    const key = event.key
    if(key === "ArrowUp"){
        if(history.length != 0 && historyTracker != history.length){
            if(historyTracker != history.length - 1){
                historyTracker++;
            }
            cmdLine.value = history[historyTracker];
        }
        event.preventDefault();

    } else if(key === "ArrowDown"){
        if(historyTracker != -1 && history.length != 0){
            if(historyTracker != -1){
                historyTracker--;
            }
            cmdLine.value = history[historyTracker];
        }
        event.preventDefault();
    }
    if (key === "ArrowDown" && historyTracker === -1){
        cmdLine.value = '';
    }
    if(key === "Tab"){
        tab_cmd = cmdLine.value;
        tabCompletion(tab_cmd);
        event.preventDefault();
    }
}

function whiteSpace(cmd){
    return cmd.trim().length === 0;
}

function openNewTab(link, time){
    setTimeout(function(){
        window.open(link, '_blank');
    }, time);
}

function scroll_to_bottom(){
    window.scrollTo(0, document.body.scrollHeight);
}

function getFocus(){
    if(password_input_or_cmd_input){
        cmdLine.focus(); 
    } else{
        passwordInput.focus();
    }
}

function enterCommand(event){
    const key = event.code
    if(key === "Enter"){
        userInput = cmdLine.value;
        history.unshift(userInput);
        displayText('<span class="stark"><span class="lightpurple">guest</span>@<span class="jewel">nasan.dev</span>:$ ~ </span> <span class="evagreen">' + userInput + '</span>', 'nothing', 0);
        switchCase(userInput);
        cmdLine.value = ''
    }
}

function displayText(cmd, style, time){
    var text = '';
    for(let i = 0; i < cmd.length; i++){
        if(cmd.charAt(i) == " " && cmd.charAt(i + 1) == " "){
            text += "&nbsp;&nbsp;"
            i++;
        } else{
            text += cmd.charAt(i);
        }
    }
    setTimeout(function() {
        var p = document.createElement("p");
        p.innerHTML = text;
        p.className = style;
        terminalLines.parentNode.insertBefore(p, terminalLines);
        scroll_to_bottom();
    }, time);
}


function writeLines(cmd, style, time){
    cmd.forEach(function(item, index){
        displayText(item, style, index * time);
    });
}

function password(event){
    if(event.key === "Enter"){
        var passcode = passwordInput.value;
        passwordInput.value = ''
        if(passcode === '060301'){
            message = congratulationsMessage;
            passwordLine.className = 'hidden'
            flag = true;
        } else if(passcode === 'password'){
            message = squidMessage;
            openNewTab(squid, 1200);
            passwordLine.className = 'hidden'
            flag = true;
        }else{
            counter++
            if(counter === 3){
                passwordLine.className = 'hidden'
                flag = true;
            }
        }
    }

    if(flag){
        displayText('[sudo] password for nasan: <br><br> ', 'nothing', 0)
        user_cmd.disabled = false;
        commandDiv.className = '';
        writeLines(message, '', 50);
        counter = 0;
        flag = false;
        password_input_or_cmd_input = true
        message = ['Incorrect password.<br><br>'];
        cmdLine.focus()
    }
}

function switchCase(cmd){
    if(whiteSpace(cmd)){}
    else{
    switch(cmd.toLowerCase()){
        case 'clear':
            setTimeout(function(){
                terminal.innerHTML = '<a id="writingLines"></a>'
                terminalLines = document.getElementById("writingLines")
            }, 1)
            break;
        case 'whoami':
            writeLines(whoami, '', 50);
            break;
        case 'help':
            writeLines(help, '', 50);
            break;
        case 'about':
            writeLines(about, '', 50);
            break;
        case 'banner':
            writeLines(banner, '', 50);
            break;
        case 'repo':
            displayText("opening GitHub repository ... <br><br>", 1);
            openNewTab(sourceLink, 500);
            break;
        case 'sudo':
            commandDiv.className = 'hidden';
            user_cmd.disabled = true;
            passwordLine.className = ''
            password_input_or_cmd_input = false;
            passwordInput.focus()
            break;
        default:
            writeLines(defaultMessage, 50);
            break;
        }
    }
}

console.log("🥸 Password: 060301")
console.log("🦑 dont guess 'password'...")