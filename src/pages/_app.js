import Layout from '../components/Layout'
import '/Users/pascallim/Desktop/Cours/Cours SDV /nextjsExercise/styles/globals.css'
import { useState } from 'react';

function MyApp({ Component, pageProps }) {

  const [users, setUsers] = useState([]);

  return (
    <Layout>
      <Component {...pageProps}/>
    </Layout>
  )
}

export default MyApp
