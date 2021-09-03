import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'



export default function Home() {
  return (
    <>
    <Head>
      <title>Zawtun | Home </title>
      <meta name="keywords" content="zawtun"/>
    </Head>
    <div>
     <h1 className= {styles.title}>Hello Next </h1>
     <p className= {styles.text}>lorQuis elit anim cillum ut deserunt minim mollit laborum Lorem laboris. Consequat duis proident excepteur occaecat duis. Nostrud irure quis deserunt ea laborum. Occaecat do nulla quis sunt anim cupidatat laboris dolor eu nisi ea minim qui. Proident fugiat et ex ullamco.</p>
     <Link href = "/zawtun"><a className= {styles.btn}> See Zawtun List</a></Link> 
    </div>  
    </>
  )
}
