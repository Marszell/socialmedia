import Image from "next/image";
import styles from "./friend.module.css";

interface PropsFriend {
    image: string;
    name: string;
}

export default function Friend({ list }: { list: PropsFriend }) {
    return (
        <div className={styles.container}>
            <div>
                <Image src={list.image} alt="avatar" width={30} height={30} />
            </div>
            <div>
                <p>{list.name}</p>
            </div>
        </div>
    );
}
