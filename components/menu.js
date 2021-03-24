import React from 'react'
import { Menu } from 'antd'

export default class NavMenu extends React.Component {

  handleClick = e => {
    this.props.setSelected(e.key)
  }

  render() {
    const { selected } = this.props
    return (
      <Menu
        mode='inline'
        onClick={this.handleClick}
        selectedKeys={[selected]}
        style={{ height: '100%', borderRight: 0 }}>
        <Menu.Item key="fetch_cover">提取微信文章封面</Menu.Item>
        <Menu.Item key="img_compress">图片压缩</Menu.Item>
        <Menu.Item key="3">option3</Menu.Item>
        <Menu.Item key="4">option4</Menu.Item>
      </Menu>
    )
  }
}

