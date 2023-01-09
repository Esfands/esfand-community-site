import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Esfand Community Site</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
            <div className="px-4 py-5 sm:px-6">
              Minecraft Server
            </div>
            <div className="px-4 py-5 sm:p-6">
              <h2>mc.esfans.net:25566</h2>
              <h2>Java Edition - Vanilla No Mods</h2>
            </div>
          </div>
          <br />
          <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
            <div className="px-4 py-5 sm:px-6">
              Terraria Server
            </div>
            <div className="px-4 py-5 sm:p-6">
              <h2>tr.esfans.net</h2>
              <h2>Password: Esfand</h2>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
