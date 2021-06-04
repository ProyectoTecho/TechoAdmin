import Head from 'next/head'
import Login from '../components/Login'
import Navbar from '../components/Navbar'
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
      <div className='relative min-h-screen flex '> 
        <Sidebar />
        <Login />
      </div>


    </div>
  )
}
