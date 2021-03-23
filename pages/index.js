import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { Layout, Card, Menu } from 'antd'
// import Menu from '../components/menu'

const { Content, Header, Sider, Footer } = Layout

export default function Home() {
  return (
    <div>
      <Head>
        <title>小小工具箱</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={{ height: '100vh' }}>
        <header style={{ boxShadow: '0 2px 8px #f0f1f2' }}>
          <h1 style={{ color: 'white', background: '#434343', padding: 15 }}>这是一个小工具网站</h1>
        </header>
        <Layout>
          <Sider width={200}>
            <Menu
              mode='inline'
              defaultSelectedKeys={['1']}
              style={{ height: '100%', borderRight: 0 }}>
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              Content
        </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  )
}
