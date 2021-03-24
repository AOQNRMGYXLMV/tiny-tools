import { useState } from "react"
import { Button, Input } from 'antd'
import Image from 'next/image'

export default function FetchCover() {
  const [loading, setLoading] = useState(false)
  const [url, setUrl] = useState('')
  if (typeof window === 'undefined') {
    console.log("I'm in server side.")
  } else {
    console.log("I'm in client side.")
  }
  const onSearch = value => {
    fetch(`/api/fetch_cover?article=${value}`).then(res => res.json()).then(data => {
      return new Promise(resolve => {
        const reg = /http:.*jpeg/
        const m = data.url.match(reg)
        console.log('data: ', m[0])
        setUrl(m[0])
        resolve()
      })
      // console.log('data', typeof data)
      // const m = data.match(reg)
      // console.log('m = ', m[0])
    })
  }

  return (
    <div>
      <Input.Search
        placeholder="请输入公众号文章链接地址…"
        allowClear
        enterButton="提取封面"
        size="large"
        onSearch={onSearch}
      />
      {url && <div>{url}</div>}
      {url && <Image src={url} width={300} height={300} />}
    </div>
  )
}
