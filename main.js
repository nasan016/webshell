const user_input = document.getElementById("user_cmd");
var user_cmd = '';
var terminal = document.getElementById("terminal");
const history = [];
var historyTracker = -1;
const body = document.getElementById("main");
body.onclick = focus();

function whiteSpace(text){
    return text.trim().length === 0;
}

function keypress(event){
    const key = event.code
    if (key === "Enter"){
        user_cmd = user_input.value;
        if(!whiteSpace(user_cmd)){
            history.unshift(user_cmd);
        }
        commands(user_cmd);
        historyTracker = -1;
    }
}

function historyScroll(event){
    const key = event.key
    if(key === "ArrowUp"){
        if(history.length != 0 && historyTracker != history.length){
            if(historyTracker != history.length - 1){
                historyTracker++;
            }
            user_input.value = history[historyTracker];
        }

    } else if(key === "ArrowDown"){
        if(historyTracker != -1 && history.length != 0){
            if(historyTracker != -1){
                historyTracker--;
            }
            user_input.value = history[historyTracker];
        }
    }
    if (key === "ArrowDown" && historyTracker === -1){
        user_input.value = '';
    }
}

function reset_textfield(){
    const resetValue = '';
    user_input.value = resetValue;
}

function scroll_to_bottom(){
    window.scrollTo(0,document.body.scrollHeight);
}

function commands(cmd){
    const userInput = '<span class="stark"><span class="lightpurple">guest</span>@<span class="jewel">nasan.dev</span>:$ ~</span><span class="evagreen"> ' + cmd + '</span><br>';
    if (cmd === 'clear'){
        terminal.innerHTML = '';
    } else if (whiteSpace(cmd)){
        terminal.innerHTML += userInput;
    } else {
        switch (cmd) {
            case 'help':
                output = help
                break;
            case 'about':
                output = about
                break;
            case 'whoami':
                output = whoami
                break;
            case 'secret':
                output = secret
                break;
            case '060103':
                output = password
                break;
            case 'banner':
                output = banner
                break;
            default:
                output = errorMsg
        }
        terminal.innerHTML += userInput;
        terminal.innerHTML += output;
    }
    reset_textfield();
    scroll_to_bottom();
}

function getFocus(){
    user_input.focus();
}