// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const axios = require('axios')

export default async (req, res) => {
  if (req.method === 'GET') {
    const { article } = req.query
    return new Promise((resolve, reject) => {
      axios.get(article).then(response => {
        // console.log(response.data.substr(0, 20))
        const { data } = response
        const reg = /msg_cdn_url = ".*";/
        const m = data.match(reg)
        if (m != null) {
          console.log('find cover url: ', m[0])

          res.status(200).json({ url: m ? m[0] : null })
          resolve()
        } else {
          console.log('cover url not found.')
          return reject()
        }
      })

    })
  }
}
