import command from '../config.json' assert {type: 'json'};

(() => {
  const style = document.createElement('style')
  const head = document.head
  const background = `body {background: ${command.colors.background}}`
  const foreground = `body {color: ${command.colors.foreground}}`
  const inputBackground = `input {background: ${command.colors.background}}`
  const inputForeground = `input {color: ${command.colors.prompt.input}}`
  const outputColor = `.output {color: ${command.colors.prompt.input}}`
  const preHost = `#pre-host {color: ${command.colors.prompt.host}}`
  const host = `#host {color: ${command.colors.prompt.host}}`
  const preUser = `#pre-user {color: ${command.colors.prompt.user}}`
  const user = `#user {color: ${command.colors.prompt.user}}`
  const prompt = `#prompt {color: ${command.colors.prompt.default}}`
  const banner = `pre {color: ${command.colors.banner}}`
  const link = `a {color: ${command.colors.link.text}}`
  const linkHighlight = `a:hover {background: ${command.colors.link.highlightColor}}`
  const linkTextHighlight = `a:hover {color: ${command.colors.link.highlightText}}`
  const commandHighlight = `.command {color: ${command.colors.commands.textColor}}`
  const keys = `.keys {color: ${command.colors.banner}}`

  head.appendChild(style)


  if (!style.sheet) return

  if (!command.colors.border.visible) {
    style.sheet.insertRule("#bars {display: none}")    
    style.sheet.insertRule("main {border: none}")
  } else {
    style.sheet.insertRule(`#bars {background: ${command.colors.background}}`)
    style.sheet.insertRule(`main {border-color: ${command.colors.border.color}}`)
    style.sheet.insertRule(`#bar-1 {background: ${command.colors.border.color}; color: ${command.colors.background}}`)
    style.sheet.insertRule(`#bar-2 {background: ${command.colors.border.color}}`)
    style.sheet.insertRule(`#bar-3 {background: ${command.colors.border.color}}`)
    style.sheet.insertRule(`#bar-4 {background: ${command.colors.border.color}}`)
    style.sheet.insertRule(`#bar-5 {background: ${command.colors.border.color}}`)
  }

  style.sheet.insertRule(background)
  style.sheet.insertRule(foreground)
  style.sheet.insertRule(inputBackground)
  style.sheet.insertRule(inputForeground)
  style.sheet.insertRule(outputColor)
  style.sheet.insertRule(preHost)
  style.sheet.insertRule(host)
  style.sheet.insertRule(preUser)
  style.sheet.insertRule(user)
  style.sheet.insertRule(prompt)
  style.sheet.insertRule(banner)
  style.sheet.insertRule(link)
  style.sheet.insertRule(linkHighlight)
  style.sheet.insertRule(linkTextHighlight)
  style.sheet.insertRule(commandHighlight)
  style.sheet.insertRule(keys)
})()
