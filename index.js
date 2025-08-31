require("dotenv").config()
const bodyParser = require('body-parser')
const fs = require('fs')
const axios = require('axios')
const express = require('express')
const app = express()
const port = 3000


const { NOTIFICATION_URL } = process.env

app.use(bodyParser({limit: '50mb'}))
app.use(express.json())

app.post('/', (req, res) => {
  const {event} = req.body.data
  const {type, title, event_id, project, message, web_url, issue_id} = event

  console.log('=> received req:', type, title, event_id, project, message, web_url, issue_id)

  notify({
    text: type,
    attachments: [{
      fallback: title,
      color: '#f00',
      pretext: message,
      text: `project_id: ${project} - issue_id: ${issue_id}`,
      author_name: `event id: ${event_id}`,
      title: 'reveal issue in sentry',
      title_link: web_url
    }]
  })

  fs.writeFileSync('file.json', JSON.stringify(req.body))
  res.send('success')
})

app.listen(port, () => {
  console.log('Mattermost Sentry API transformer')
  console.log(`app listening on port ${port}`)
})


const notify = async (data) => {
  const result = await axios.post(NOTIFICATION_URL, data)
}

