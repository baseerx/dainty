export default {
  data() {
    return {
      message: "Testing from Dainty Client",
    }
  },
  methods: {
    async sendToChannel() {
      console.log({ text: this.message })
      console.log({ token: process.env.slackBotToken })
      console.log({ channel: process.env.channelNotifs })
      const res = await fetch("https://slack.com/api/chat.postMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: `token=${process.env.slackBotToken}&channel=${process.env.channelNotifs}&text=${this.message}`,
      })

      const result = await res.json()

      console.log({ result })
    },
  },
}
