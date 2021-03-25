import { useState } from "react"
import { Button, Input, message } from 'antd'
import Image from 'next/image'

export default function FetchCover() {
  const [loading, setLoading] = useState(false)
  const [url, setUrl] = useState('')

  const onSearch = value => {
    if (value.length === 0) {
      return
    }
    const legal = value.startsWith('https://mp.weixin.qq.com')
    if (!legal) {
      message.error('您输入的链接地址不合法，请重新输入')
      return
    }

    setLoading(true);
    fetch(`/api/fetch_cover?article=${value}`).then(res => res.json()).then(data => {
      return new Promise(resolve => {
        setUrl(data.url)
        setLoading(false)
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
        loading={loading}
        onSearch={onSearch}
      />
      {url && <Button type="primary"><a href={url} target="_blank">点击打开封面</a></Button>}
      {url && <Image src={url} width={300} height={300} />}
    </div>
  )
}
