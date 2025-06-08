import styles from "./posting.module.css";
import Image from "next/image"

export default function Posting () {
    return(
        <div className={styles.container}>
            {/*profile*/}
            <div className={styles.profile}>
                {/*image profile*/}
                <div>
                    <Image className={styles.img_profile} src={"/noavatar.png"} alt={"profile"} width={40} height={40}/>
                </div>

                {/*name & date*/}
                <div className={styles.title}>
                    <span>John</span>
                    <p>4hr</p>
                </div>

                {/*bonus(opsi, follow, and close)*/}
            </div>

            {/*text*/}
            <div className={styles.paragraf}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>

            {/*media/image*/}
            <div></div>

            {/*like/comment*/}
            <div>
                {/*show how many like and comment*/}
                <div>
                    <p></p>
                </div>

                {/*button like comment*/}
                <div className={styles.button}>
                    <button>Like</button>
                    <button>Comment</button>
                </div>
            </div>
        </div>
    )
}