# [WebShell | Terminal Portfolio Website](https://www.nasan.dev/)

<div align="center">
  <img alt="banner" src="https://raw.githubusercontent.com/nasan016/webshell/main/res/banner.png">
</div>

![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

Create your own terminal styled website! Check out [term.nasan.dev](https://term.nasan.dev/) for an example.

## Features
* **[Tab]** for auto completion.
* **[Esc]** to clear the input line.
* **[↑][↓]** to scroll through your command history.

## ???
<div align="center">
  <img alt="banner" src="https://raw.githubusercontent.com/nasan016/webshell/main/res/secret.png">
</div>
How did we get here?

## Configuration

Most of the configuration is done in the `config.json` file.

```json
{
  "ascii": [
    "██████╗ ██╗   ██╗ ██████╗",
    "██╔══██╗██║   ██║██╔════╝",
    "██║  ██║██║   ██║██║  ███╗",
    "██║  ██║██║   ██║██║   ██║",
    "██████╔╝╚██████╔╝╚██████╔╝",
    "╚═════╝  ╚═════╝  ╚═════╝",
  ],
  "title": "Dug's Terminal",
  "username": "guest",
  "hostname": "dug.dev",
  "password": "squirrel",
  "repoLink": "https://github.com/nasan016/webshell",
  "social": {
    "email": "dug@pixar.com",
    "github": "dugfromup",
    "linkedin": "dugthedog"
  },
  "aboutGreeting": "My name is Dug. I have just met you.",
  "projects": [
    [
      "Project Name",
      "Project Description",
      "Project Link"
    ],
    [
      "Another Project Name",
      "Another Project Description",
      "Another Project Link"
    ]
  ],
  "colors": {
      ...
  }
}
```

## Run the Project Locally:

Clone the repository
```shell
git clone https://github.com/nasan016/webshell.git
```
Go to the project directory
```shell
cd webshell
```
Install the dependencies
```shell
npm install
```
Start the server
```shell
npm run dev
```
