import styles from '@/styles/Navbar.module.css'


const Navbar = () => {
    return (<>
<div className={styles.body}>
      <div className={styles.header}>
        <div className={styles.container}>
            <div className={styles.branding}>
                <h1>Saylani Events App</h1>
            </div>
            <nav>
                <ul>
                    <li className={styles.current}><a href="/">Public</a></li>
                    <li><a href="events">Events</a></li>
                    <li><a href="signUp">SignUp</a></li>
                    <li><a href="login">Login</a></li>
                </ul>
            </nav>
        </div>
    </div>
      </div>
    
    </>)
}

export default Navbar;