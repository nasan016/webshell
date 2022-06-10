const sourceLink = 'https://github.com/nasan016/nasanterminal';
const github = "https://github.com/nasan016";
const linkedin = "https://www.linkedin.com/in/nathanielmacapinlac/";
const email = 'nlm8841@nyu.edu'

commandList = [
  'help',
  'about',
  'whoami',
  'sudo',
  'repo',
  'banner',
  'clear'
];

whoami = [
  '<br>',
  "I don't know who you are, but I know who I am.",
  '<br>',
  '  Email         <a href="mailto:' + email + '" target="_blank">nlm8841@nyu.edu</a>',
  '  GitHub        <a href="' + github + '" target="_blank">github/nasan016</a>',
  '  LinkedIn      <a href="' + linkedin + '" target="_blank">linkedin/nathanielmacapinlac</a>',
  '<br>'
];

sudo = [
  "<br>",
  "don't use this command yet...",
  "it doesn't do anything",
  "<br>"
];

help = [
    "<br>",
    '<span class="command">\'about\'</span>          Who made this website?',
    '<span class="command">\'whoami\'</span>         What is a nasan?',
    '<span class="command">\'sudo\'</span>           I forgot the password.',
    '<span style="command">\'repo\'</span>           View the GitHub repository',
    '<span class="command">\'banner\'</span>         Display the header',
    '<span class="command">\'clear\'</span>          Clear terminal',
    "<br>"
  ];

about = [
    "<br>",
    "Hi, I'm Nathaniel Macapinlac but most people call me Nathan.",
    "I'm a student studying Computer Engineering and Computer Science at NYU Tandon.",
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
"Welcome to NasanTerminal v0.0.2",
"Type 'help' for a list of commands.",
"Type 'repo' to view the GitHub repository or click <a href=\"" + sourceLink + "\" target=\"_blank\">here</a>.",
"<br>"
];

defaultMessage = [
  "COMMAND NOT FOUND.",
  "Try 'help' to get started.",
  "<br>"
];