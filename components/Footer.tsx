import styles from '@/styles/Footer.module.css'
import { FaGoogle, FaFacebookSquare, FaGithub, FaTumblrSquare, FaTrash } from "react-icons/fa";

const Footer = () => {
    return (<>
        <div className={styles.footer}>
            <div className={styles.left}>
                <h2>Events</h2>
                <li>Sports</li>
                <li>Dinner</li>
                <li>Playing</li>
                <li>cricket</li>
                <li>Team</li>
                <li>Subway</li>
                <li>lunch</li>

            </div>
            <div className={styles.mid}>
                <h2>Days</h2>
                <li>Monday</li>
                <li>Tuesday</li>
                <li>Wednesy</li>
                <li>Thursday</li>
                <li>Friday</li>
                <li>Saturday</li>
                <li>Sunday</li>

            </div>
            <div className={styles.right}>
                <h2>Social Media</h2>
                <li><FaGoogle /></li>
                <li><FaGithub /></li>
                <li><FaFacebookSquare /></li>
                <li><FaTumblrSquare /></li>
                <li><FaTrash /></li>
            </div>
        </div>

    </>)
}

export default Footer;