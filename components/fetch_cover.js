import { useState } from "react"
import { Button, Input } from 'antd'
import Image from 'next/image'

export default function FetchCover() {
  const [loading, setLoading] = useState(false)
  const [url, setUrl] = useState('')

  const onSearch = value => {
    fetch(`/api/fetch_cover?article=${value}`).then(res => res.json()).then(data => {
      return new Promise(resolve => {
        console.log('data: ', data)
        setUrl(data.url)
        resolve()
      })
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
      {url && <Button type="primary"><a href={url} target="_blank">点击打开封面</a></Button>}
      {url && <Image src={url} width={300} height={300} />}
    </div>
  )
}
