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
  "repolink": "github.com/nasan016/nasanterminal"
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
  banner.push("<br>")
  banner.push(BANNEROBJ.greeting)
  banner.push("Type 'help' for a list of all available commands.")
  banner.push("Type 'repo' to view the GitHub repository or click here.")
  banner.push("<br>")
  return banner;
}

const BANNER = CREATEBANNER()
