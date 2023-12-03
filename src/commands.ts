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
  "type": {
    "help": "for a list of available commands.",
    "repo": "to view the GitHub repository or click",
    "link_text": "here.",
    "link": "https://github.com/nasan016/nasanterminal"
  }, 
}

const CREATEBANNER = () : string[] => {
  const PRETAG = "<pre>";
  const PRETAGEND = "</pre>";

  const ATAG = "<a target='_blank' href='" + BANNEROBJ.type.link + "'>"
  const ATAGEND = "</a>"

  const banner : string[] = [];

  BANNEROBJ.ascii.forEach((ele) => {
    let eleToPush = "";
    eleToPush += PRETAG;

    //this is for the ascii art
    for (let i = 0; i < ele.length; i++) {
      if (ele[i] === " ") {
        eleToPush += "&nbsp;";
      } else {
        eleToPush += ele[i];
      }
    }

    eleToPush += PRETAGEND
    banner.push(eleToPush)
  });

  banner.push(BANNEROBJ.greeting)
  return banner
}

const BANNER = CREATEBANNER()
console.log(CREATEBANNER())
