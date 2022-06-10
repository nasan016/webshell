var terminal = document.getElementById("terminal");
var cmdLine = document.getElementById("user_cmd");
var commandDiv = document.getElementById("commands");
let terminalLines = document.getElementById("writingLines");

var message = ['Incorrect password.<br><br>'];

let flag = false;
let counter = 0;
const history = [];
var userInput = "";

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
    cmdLine.focus();    
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
    passwordInput = document.getElementById("enterpassword");
    if(event.key === "Enter"){
        var passcode = passwordInput.value;
        passwordInput.value = ''
        if(passcode === '060301'){
            message = congratulationsMessage;
            passwordInput.remove();
            flag = true;
        } else if(passcode === 'password'){
            message = squidMessage;
            openNewTab(squid, 1200);
            passwordInput.remove();
            flag = true;
        }else{
            counter++
            if(counter === 3){
                passwordInput.remove();
                flag = true;
            }
        }
    }

    if(flag){
        user_cmd.disabled = false;
        writeLines(message, '', 50);
        counter = 0;
        flag = false;
        message = ['Incorrect password.<br><br>'];
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
        case 'history':
            writeLines(history, 50);
            break;
        case 'sudo':
            user_cmd.disabled = true;
            writeLines(sudo, 50);
            break;
        default:
            writeLines(defaultMessage, 50);
            break;
        }
    }
}

console.log("🥸 Password: 060301")
console.log("🦑 dont guess 'password'...")