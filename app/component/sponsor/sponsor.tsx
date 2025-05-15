
import styles from "./sponsor.module.css"
import Image from "next/image"

interface Props {
    image: string;
    desc: string;
}
export default function Sponsor ({ item } : { item: Props }){
    return (
        <div className={styles.container}>
            {/*Image*/}
            <div className={styles.img}>
                <Image className={styles.image} src={item.image} alt={"Image"} width={110} height={110} />
            </div>

            {/*text*/}
            <div className={styles.text}>
                <p>{item.desc}</p>
            </div>
        </div>
    )
}