import Head from 'next/head'
import Navbar from '../components/Navbar'
import Login from '../components/Login'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div >
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap" rel="stylesheet" />
        <title>TECHO - Admin</title>
      </Head>

      <Navbar />
      <div className='relative min-h-screen flex  '> {/* esto sea width 100% */}

        <Sidebar  /> {/* esto 30% */}
        <Login /> {/* esto 70% */}

      </div>

    </div>
  )
}
