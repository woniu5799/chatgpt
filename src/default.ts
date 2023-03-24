export const defaultSetting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  systemRule: ""
}

export const defaultMessage = `

- 特感谢 [OpenAI API (gpt-3.5-turbo)](https://platform.openai.com/docs/guides/chat) 和 [Vercel](http://vercel.com/) 提供支持。

- 本站由 [小二先生] 搭建。

- 想要部署的朋友，可添加我个人微信获取文档，

- **Shift+Enter** 换行。开头输入 **/** 或者 **空格** 搜索 Prompt 预设。点击输入框滚动到底部。

- 此站仅供测试用，api次数有限制，有什么问题可以加微信交流。

-系统角色指令：会在每次提问时添加，一定用加句号。主要用于对 ChatGPT 的语气，口头禅这些进行定制。

-思维发散程度：越高 ChatGPT 思维就越发散，开始乱答。根据不同的问题可以调节这个选项，创意性的就可以调高一点。`
