const BANNEROBJ = {
  "ascii": [
    "███╗   ██╗ █████╗ ███████╗ █████╗ ███╗   ██╗",
    "████╗  ██║██╔══██╗██╔════╝██╔══██╗████╗  ██║",
    "██╔██╗ ██║███████║███████╗███████║██╔██╗ ██║",
    "██║╚██╗██║██╔══██║╚════██║██╔══██║██║╚██╗██║",
    "██║ ╚████║██║  ██║███████║██║  ██║██║ ╚████║",
    "╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝",
  ],
  "greeting": "Welcome to WebShell v1.0.0",
  "repolink": "https://github.com/nasan016/nasanterminal"
}

const DEFAULTOBJ = {
  "message": [
    "<br>",
    "COMMAND NOT FOUND",
    "Type <span class='command'>'help'</span> to get started.",
    "<br>",
  ]
}

const WHOAMIOBJ = {
  "message" : [
    [
    "In the kaleidoscope of existence,",
    "I am but a reflection questioning the enigma - "
    ],
    [
      "Amidst cosmic whispers,",
      "I navigate the maze of self-discovery,",
      "echoing the eternal refrain - "
    ],
    [
      "In the symphony of life,",
      "I am a note inquiring its own melody,",
      "harmonizing with the universal query - ",
    ],
  ],
}

const HELPOBJ = {
  "commands": [
    [
    "'about'",
    "Who made this website?",
    ],
    [
      "'whoami'",
      "A perplexing question."
    ],
    [
      "'repo'",
      "View the Github Repository."
    ],
    ["'banner'",
      "Display the banner."
    ],
    [
      "'clear'",
      "Clear the terminal."
    ]
  ],
}

const CREATEBANNER = () : string[] => {
  const banner : string[] = [];
  banner.push("<br>")
  BANNEROBJ.ascii.forEach((ele) => {
    let bannerString = "";
    //this is for the ascii art
    for (let i = 0; i < ele.length; i++) {
      if (ele[i] === " ") {
        bannerString += "&nbsp;";
      } else {
        bannerString += ele[i];
      }
    }
    
    let eleToPush = `<pre>${bannerString}</pre>`;
    banner.push(eleToPush);
  });  
  banner.push("<br>");
  banner.push(BANNEROBJ.greeting);
  banner.push("Type <span class='command'>'help'</span> for a list of all available commands.");
  banner.push("Type <span class='command'>'repo'</span> to view the GitHub repository or click <a href='" + BANNEROBJ.repolink + "' target='_blank'>here</a>.");
  banner.push("<br>");
  return banner;
}

const CREATEDEFAULT = () : string[] => {
  const defaultMsg : string[] = [];

  DEFAULTOBJ.message.forEach((ele) => {
    defaultMsg.push(ele);
  })

  return defaultMsg;
}

const CREATEWHOAMI = () : string[] => {
  const whoami : string[] = [];  
  const r = Math.floor(Math.random() * WHOAMIOBJ.message.length);
  whoami.push("<br>");

  WHOAMIOBJ.message[r].forEach((ele, idx) => {
    if (idx === WHOAMIOBJ.message[r].length - 1) {
      ele += "<span class='command'>who am I?</span>"
    }
    whoami.push(ele);
  })

  whoami.push("<br>");
  return whoami;
}

console.log(CREATEWHOAMI())
const CREATEHELP = () : string[] => {
  const help : string[] = []
  help.push("<br>")
  HELPOBJ.commands.forEach((ele) => {
    const SPACE = "&nbsp;";
    let string = "";
    string += SPACE.repeat(2);
    string += "<span class='command'>"
    string += ele[0]
    string += "</span>"
    string += SPACE.repeat(17 - ele[0].length)
    string += ele[1]
    help.push(string)
  })

  help.push("<br>")
  return help
}

const BANNER = CREATEBANNER()
const DEFAULT = CREATEDEFAULT()
const HELP = CREATEHELP()
