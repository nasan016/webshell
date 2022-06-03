console.log("💀SECRET PASSWORD: 060103")
//ENTER COMMAND AFTER PRESSING ENTER ON KEYBOARD 
function keypress(event){
    const key = event.code

    if (key === "Enter"){
        main()
    }
}

//RESET THE TEXTFIELD AFTER INPUTTING A COMMAND
function reset_textfield(){
    const resetValue = '';
    document.getElementById("user_cmd").value = resetValue;
}

function scroll_to_bottom(){
    window.scrollTo(0,document.body.scrollHeight);
}

//DISPLAY COMMANDS AFTER ENTERING THEM
function commands(cmd, help, about, secret, _default, whois, _password, _banner){
    const userInput = '<span class ="sameline"><span class="stark"><span class="lightpurple">guest</span>@<span class="jewel">nasan</span>:$ ~</span> ' + cmd + '</span><br>';
    const terminal = document.getElementById("terminal");
    const cmdHelp = help;
    const cmdAbout = about;
    const cmdSecret = secret;
    const cmdWhois = whois;
    const errorMessage = _default;
    const password = _password
    const cmdBanner = _banner

    if (cmd === 'clear'){
        terminal.innerHTML = '';
    } else if (cmd === ''){
        terminal.innerHTML += userInput;
    } else {
        switch (cmd) {
            case 'help':
                output = cmdHelp
                break;
            case 'about':
                output = cmdAbout
                break;
            case 'whois':
                output = cmdWhois
                break;
            case 'secret':
                output = cmdSecret
                break;
            case '060103':
                output = password
                break;
            case 'banner':
                output = cmdBanner
                break;
            default:
                output = errorMessage
        }
        terminal.innerHTML += userInput;
        terminal.innerHTML += output;
    }
    reset_textfield();
}

//MAIN
function main(){
    var user_cmd = document.getElementById("user_cmd").value;
    const cmdHelp = "<br>&nbsp&nbsp<span class=\"command\">'about'</span> &nbsp&nbsp;&nbsp <span class=\"extra\">who made this site?<br>&nbsp&nbsp<span class=\"command\">'whois'</span> &nbsp&nbsp;&nbsp what's a nasan?<br>&nbsp&nbsp<span class=\"command\">'secret'</span> &nbsp&nbsp ?<br>&nbsp&nbsp<span class=\"command\">'banner'</span> &nbsp&nbsp display header<br>&nbsp&nbsp<span class=\"command\">'clear'</span> &nbsp&nbsp&nbsp clears the terminal<br><br>";
    const cmdAbout = "<br>Hi, I'm Nathaniel Macapinlac but most people know me as Nathan.<br>I'm a student studying Computer Engineering and Computer Science at NYU Tandon.<br><br>";
    const cmdSecret = "It's a secret ... even I don't know it.<br>I think there might be a password somewhere...<br><br>";
    const defaultMessage = "COMMAND NOT FOUND<br><br>";
    const whois = "'nasan' is an alias I use for the internet.<br><br>"
    const password = "Sorry, there isn't any secret yet..."

    //show cool banner
    const banner =  "<pre> _________  ________  ________  ________  _________<br>|\\   ___  \\|\\   __  \\|\\   ____\\|\\   __  \\|\\   ___  \\ <br>\\ \\  \\\\ \\  \\ \\  \\|\\  \\ \\  \\___|\\ \\  \\|\\  \\ \\  \\\\ \\  \\<br> \\ \\  \\\\ \\  \\ \\   __  \\ \\_____  \\ \\   __  \\ \\  \\\\ \\  \\<br>  \\ \\  \\\\ \\  \\ \\  \\ \\  \\|____|\\  \\ \\  \\ \\  \\ \\  \\\\ \\  \\<br>   \\ \\__\\\\ \\__\\ \\__\\ \\__\\____\\_\\  \\ \\__\\ \\__\\ \\__\\\\ \\__\\<br>    \\|__| \\|__|\\|__|\\|__|\\_________\\|__|\\|__|\\|__| \\|__|<br>                        \\|_________|</pre><p>Welcome to NasanTerminal v0.0.1<br>Type <span class=\"command\">'help'</span> for a list of commands.</p>";

    commands(user_cmd, cmdHelp, cmdAbout, cmdSecret, defaultMessage, whois, password, banner);
    scroll_to_bottom()
}