import Image from "next/image";
import styles from '@/styles/Public.module.css'

const Public = () => {
    return (<>
        <section className="Public-Section">

            <Image src="/pic2.jpg"
                alt="waiting" width={1600} height={800}
            />
        </section>
        <div className={styles.containerfluid}>
                
                    <div className={styles.imagehead}>
                        <Image src="/pic1.jpg"
                            alt="waiting" width={270} height={300}
                        />
                        <h3>Event 1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, consequatur.</p>
                        <a href="#">More Detail</a>
                    </div>
                    <div className={styles.imagehead}>
                        <Image src="/pic2.jpg"
                            alt="waiting" width={270} height={300}
                        />
                        <h3>Event 2</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, consequatur.</p>
                        <a href="#">More Detail</a>
                    </div>
                    <div className={styles.imagehead}>
                        <Image src="/pic3.jpg"
                            alt="waiting" width={270} height={300}
                        />
                        <h3>Event 3</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, consequatur.</p>
                        <a href="#">More Detail</a>
                    </div>
                    <div className={styles.imagehead}>
                        <Image src="/pic4.jpg"
                            alt="waiting" width={270} height={300}
                        />
                        <h3>Event 4</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, consequatur.</p>
                        <a href="#">More Detail</a>
                    </div>
                
            </div>
    </>)
}

export default Public;