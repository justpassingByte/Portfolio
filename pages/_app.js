import '../styles/globals.css';
import Layout  from '../components/Layout';
import {useRouter} from 'next/router'
import Transition from '../components/Transition'
import { AnimatePresence } from 'framer-motion';
import {motion } from 'framer-motion'
function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
  <Layout>
    <AnimatePresence mode='wait' onExitComplete={() => window.scrollTo(0, 0)}>
      <motion.div key={router.asPath} className='h-full'>
       <Transition/>
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  </Layout> 
  )
}

export default MyApp;
