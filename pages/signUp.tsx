import React, { useState } from "react";
import { auth, createUserWithEmailAndPassword } from "../configuration/firebase";
import { ToastContainer,toast } from 'react-toastify';
import { useRouter  } from "next/router";
import styles from '@/styles/Signup.module.css'
import Navbar from '../components/Navbar'
import Footer from '@/components/Footer'

const SingUp = () => {

    const [userName, setUserName] = useState<string>("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loader, setLoader] = useState(false)
    const router = useRouter();
  
    const onSubmitHandler = async () => {
  
      try {
        setLoader(true)
        await createUserWithEmailAndPassword(auth, email, password)
        toast.success('Successfully singup!');
        router.push('/login')
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

    return(<>
    <Navbar />
     <div className={styles.signupForm}>
        <h1 className={styles.heading}>Please SignUp</h1>
        <input className={styles.input} onChange={(e) => setUserName(e.target.value)} type="text" placeholder="Enter your name" />
        <br />
        <input className={styles.input} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" />
        <br />
        <input className={styles.input} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password" />
        <br />
        {loader ? <button className={styles.button}>Loading...</button> : <button onClick={onSubmitHandler} className={styles.button} >Signup</button>}
      </div>
      <Footer />
      <ToastContainer />
    </>)
}

export default SingUp;