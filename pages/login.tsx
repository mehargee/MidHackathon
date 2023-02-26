import { useState } from "react"
import { auth, signInWithEmailAndPassword } from "../configuration/firebase";
import { useRouter  } from "next/router";
import { ToastContainer, toast } from 'react-toastify';
import styles from '@/styles/Login.module.css'
import Navbar from '../components/Navbar'
import Footer from '@/components/Footer'

const Login = () => {

    const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loader, setLoader] = useState(false)
  const router = useRouter();

  const onSubmitHandler = async () => {

    try {
      setLoader(true)
      await signInWithEmailAndPassword(auth, email, password)
      toast.success('Successfully login!',{
        position: "top-center" });
      router.push('/')
    } catch (e) {
      toast.error(e.message);
      console.log('====================================');
      console.log(e);
      console.log('====================================');
    }

    finally {
      setLoader(false)
    }
  }

    return(
        <>
        <Navbar />
        <div className={styles.signupForm}>
          <h1 className={styles.heading}> Login form</h1>
          <input className={styles.input} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" />
          <br />
          <input className={styles.input} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password" />
          <br />
          {loader ? <button className={styles.button} >Loading...</button> : <button className={styles.button} onClick={onSubmitHandler} >Login</button>}
        </div>
        <Footer />
        <ToastContainer />
      </>
    )
}

export default Login;