const sourceLink = 'https://github.com/nasan016/nasanterminal';
const github = "https://github.com/nasan016";
const linkedin = "https://www.linkedin.com/in/nathanielmacapinlac/";
const email = 'nlm8841@nyu.edu'
const website = 'https://nasan016.github.io/nasan.me/'

squid = 'https://www.youtube.com/watch?v=J2UyOTS3UCE'

command_line = '<p><span class="stark"><span class="lightpurple">guest</span>@<span class="jewel">nasan.dev</span>:$ ~ </span><input spellcheck="false" autocomplete="off" id="user_cmd" onkeypress="enterCommand(event)"></input></p>';

congratulationsMessage = [
  "Congratulations, you found the password!",
  "Good Job! I'm proud of you!",
  "You're the best! Even I couldn't do it!",
  'That\'s all. 😗',
  "<br>"
];

squidMessage = [
  "You tried...",
  "Here's 2 hours of squid to relax/study/work to. 🦑",
  "<br>"
];

commandList = [
  'help',
  'about',
  'whoami',
  'sudo',
  'repo',
  'banner',
  'clear',
  'gui'
];

whoami = [
  '<br>',
  "I don't know who you are, but I know who I am.",
  '<br>',
  '  <i class="fa-solid fa-envelope"></i> Email         <a href="mailto:' + email + '" target="_blank">nlm8841@nyu.edu</a>',
  '  <i class="fa-brands fa-github"></i> GitHub        <a href="' + github + '" target="_blank">github/nasan016</a>',
  '  <i class="fa-brands fa-linkedin"></i> LinkedIn      <a href="' + linkedin + '" target="_blank">linkedin/nathanielmacapinlac</a>',
  '<br>'
];

help = [
    "<br>",
    '<span class="command">  \'about\'</span>          Who made this website?',
    '<span class="command">  \'whoami\'</span>         What is a nasan?',
    '<span class="command">  \'sudo\'</span>           I forgot the password.',
    '<span class="command">  \'repo\'</span>           View the GitHub repository.',
    '<span class="command">  \'banner\'</span>         Display the header.',
    '<span class="command">  \'gui\'</span>            Simple is better!',
    '<span class="command">  \'clear\'</span>          Clear terminal.',
    '<br>',
    'Use <span class="lightgreen">[Tab]</span> to trigger completion.',
    'Use <span class="lightgreen">[Esc]</span> to clear the input line.',
    'Use <span class="lightgreen">[↑][↓]</span> to scroll through recently used commands.',
    "<br>"
  ];

about = [
    "<br>",
    "Hi, I'm Nathaniel Macapinlac but most people call",
    "me Nathan.",
    "<br>",
    "I'm a student studying Computer Engineering and",
    "Computer Science at NYU Tandon.",
    "<br>",
    "Welcome to my interactive terminal!",
    "<br>"
];

banner = [
"<pre class='brightyellow' class='ascii'>&nbsp;_________&nbsp;&nbsp;________&nbsp;&nbsp;________&nbsp;&nbsp;________&nbsp;&nbsp;_________</pre>",
"<pre class='brightyellow' class='ascii'>|\\&nbsp;&nbsp&nbsp;___&nbsp;&nbsp;\\|\\&nbsp;&nbsp;&nbsp;__&nbsp;&nbsp;\\|\\&nbsp;&nbsp;&nbsp;____\\|\\&nbsp;&nbsp;&nbsp;__&nbsp;&nbsp;\\|\\&nbsp;&nbsp;&nbsp;___&nbsp;&nbsp;\\</pre>",
"<pre class='brightyellow'>\\&nbsp;\\&nbsp;&nbsp;\\\\&nbsp;\\&nbsp;&nbsp;\\&nbsp;\\&nbsp;&nbsp;\\|\\&nbsp;&nbsp;\\&nbsp;\\&nbsp;&nbsp;\\___|\\&nbsp;\\&nbsp;&nbsp;\\|\\&nbsp;&nbsp;\\&nbsp;\\&nbsp;&nbsp;\\\\&nbsp;\\&nbsp;&nbsp;\\</pre>",
"<pre class='brightyellow'>&nbsp;\\&nbsp;\\&nbsp;&nbsp;\\\\&nbsp;\\&nbsp;&nbsp;\\&nbsp;\\&nbsp;&nbsp;&nbsp;__&nbsp;&nbsp;\\&nbsp;\\_____&nbsp;&nbsp;\\&nbsp;\\&nbsp;&nbsp;&nbsp;__&nbsp;&nbsp;\\&nbsp;\\&nbsp;&nbsp;\\\\&nbsp;\\&nbsp;&nbsp;\\</pre>",
"<pre class='brightyellow'>&nbsp;&nbsp;\\&nbsp;\\&nbsp;&nbsp;\\\\&nbsp;\\&nbsp;&nbsp;\\&nbsp;\\&nbsp;&nbsp;\\&nbsp;\\&nbsp;&nbsp;\\|____|\\&nbsp;&nbsp;\\&nbsp;\\&nbsp;&nbsp;\\&nbsp;\\&nbsp;&nbsp;\\&nbsp;\\&nbsp;&nbsp;\\\\&nbsp;\\&nbsp;&nbsp;\\</pre>",
"<pre class='brightyellow'>&nbsp;&nbsp;&nbsp;\\&nbsp;\\__\\\\&nbsp;\\__\\&nbsp;\\__\\&nbsp;\\__\\____\\_\\&nbsp;&nbsp;\\&nbsp;\\__\\&nbsp;\\__\\&nbsp;\\__\\\\&nbsp;\\__\\</pre>",
"<pre class='brightyellow'>&nbsp;&nbsp;&nbsp;&nbsp;\\|__| \\|__|\\|__|\\|__|\\_________\\|__|\\|__|\\|__| \\|__|</span>",
"<pre class='brightyellow'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\|_________|</pre>",
"<br>",
"Welcome to NasanTerminal v1.0.0",
"Type <span class=\"command\">'help'</span> for a list of available commands.",
"Type <span class=\"command\">'repo'</span> to view the GitHub repository or click <a href=\"" + sourceLink + "\" target=\"_blank\">here</a>.",
"Type <span class=\"command\">'gui'</span> for a simplified version of this website or click <a href=\"" + website + "\" target=\" _blank\">here</a>",
"<br>"
];

defaultMessage = [
  "COMMAND NOT FOUND.",
  "Try 'help' to get started.",
  "<br>"
];
