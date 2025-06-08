import styles from "../ui/dashboard/dashboard.module.css";
import Posting from "../component/posting/posting";

export default function Dashboard(){
    return(
        <div className={styles.warper}>
            {/*make new posting*/}
            <div>
                {/*For Input*/}
                <div></div>

                {/*Add Media*/}
                <div></div>
            </div>

            {/*post*/}
            <div className={styles.posting}>
                <Posting/>
                {/*/!*profile*!/*/}
                {/*<div></div>*/}

                {/*/!*text*!/*/}
                {/*<div></div>*/}

                {/*/!*media/image*!/*/}
                {/*<div></div>*/}

                {/*/!*like/comment*!/*/}
                {/*<div></div>*/}

            </div>

        </div>
    )
}