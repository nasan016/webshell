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
    [
      "As stardust contemplating its journey,",
      "I ponder the cosmic query,",
      "silently asking - ",
    ],
    [
      "In the tapestry of reality,",
      "I am the thread of self-inquiry,",
      "weaving through the eternal question - "
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
      "'projects'",
      "Maybe there's something interesting."
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

const PROJECTSOBJ = {
  "projects": [
    [
      "GofeR",
      "Go",
      "https://github.com/nasan016/gofer"
    ],
  ]
}

const ABOUTOBJ = {
  "message": "Hi I'm Nathan. I'm a student at NYU Tandon.",
  "github": [
    "github/nasan016",
    "https://github.com/nasan016",
  ],
  "linkedin": [
    "linkedin/nathanielmacapinlac",
    "https://www.linkedin.com/in/nathanielmacapinlac/",
  ],
  "email": "nlm8841@nyu.edu"
}

const CREATEPROJECT = () : string[] => {
  let string = "";
  const projects : string[] = [];
  const files = `${PROJECTSOBJ.projects.length} File(s)`;
  const SPACE = "&nbsp;";

  projects.push("<br>")

  PROJECTSOBJ.projects.forEach((ele) => {
    let link = `<a href="${ele[2]}" target="_blank">${ele[0]}</a>`
    string += SPACE.repeat(2);
    string += link;
    string += SPACE.repeat(17 - ele[0].length);
    string += ele[1];
    projects.push(string);
    string = '';
  });

  projects.push("<br>");
  projects.push(files);
  projects.push("<br>");
  return projects
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
      ele += "<span class='command'>who am I?</span>";
    }
    whoami.push(ele);
  })

  whoami.push("<br>");

  return whoami
}

const CREATEABOUT = () : string[] => {
  const about : string[] = [];

  const SPACE = "&nbsp;";

  const EMAIL = "Email";
  const GITHUB = "Github";
  const LINKEDIN = "Linkedin";
  
  const email = `<i class='fa-solid fa-envelope'></i> ${EMAIL}`;   
  const github = `<i class='fa-brands fa-github'></i> ${GITHUB}`;
  const linkedin = `<i class='fa-brands fa-linkedin'></i> ${LINKEDIN}`;
  let string = "";

  about.push("<br>");
  about.push(ABOUTOBJ.message);
  about.push("<br>");
  string += SPACE.repeat(2);
  string += email;
  string += SPACE.repeat(17 - EMAIL.length);
  string += `<a target='_blank' href='mailto:${ABOUTOBJ.email}'>${ABOUTOBJ.email}</a>`;
  about.push(string);

  string = '';
  string += SPACE.repeat(2);
  string += github;
  string += SPACE.repeat(17 - GITHUB.length);
  string += `<a target='_blank' href='${ABOUTOBJ.github[1]}'>${ABOUTOBJ.github[0]}</a>`;
  about.push(string);

  string = '';
  string += SPACE.repeat(2);
  string += linkedin;
  string += SPACE.repeat(17 - LINKEDIN.length);  
  string += `<a target='_blank' href='${ABOUTOBJ.linkedin[1]}'>${ABOUTOBJ.linkedin[0]}</a>`;
  about.push(string);

  about.push("<br>");
  return about
}

const CREATEHELP = () : string[] => {
  const help : string[] = []
  help.push("<br>")

  HELPOBJ.commands.forEach((ele) => {
    const SPACE = "&nbsp;";
    let string = "";
    string += SPACE.repeat(2);
    string += "<span class='command'>";
    string += ele[0];
    string += "</span>";
    string += SPACE.repeat(17 - ele[0].length);
    string += ele[1];
    help.push(string);
  })

  help.push("<br>");
  return help
}

const BANNER = CREATEBANNER();
const DEFAULT = CREATEDEFAULT();
const HELP = CREATEHELP();
const ABOUT = CREATEABOUT();
const PROJECTS = CREATEPROJECT();
