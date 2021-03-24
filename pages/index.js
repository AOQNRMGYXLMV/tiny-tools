import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { Layout, Card } from 'antd'
import NavMenu from '../components/menu'
import { useState } from 'react'
import ToolsRouter from '../components/tools_router'

const { Content, Header, Sider, Footer } = Layout

export default function Home() {
  const [selected, setSelected] = useState('fetch_cover');

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
            <NavMenu selected={selected} setSelected={setSelected} />
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <ToolsRouter toolKey={selected} />
          </Layout>
        </Layout>
      </Layout>
    </div>
  )
}
