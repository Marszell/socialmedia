import {ReactNode} from "react";
import styles from '../ui/dashboard/dashboard.module.css'
import Navbar from "../component/navbar/navbar";
import LeftSide from "../component/leftside/leftside";
import RightSide from "../component/rightside/rightside";

export default function Layout({ children }: { children: ReactNode }) {
    return(
        <div className={styles.container}>
            {/*navbar*/}
            <div className={styles.navbar}>
                <Navbar />
            </div>
            {/*sprate content*/}
            <div className={styles.content}>
                {/*leftside*/}
                <div className={styles.leftside}>
                    <LeftSide />
                </div>

                {/*main content*/}
                <div className={styles.main}>
                    {children}
                </div>

                {/*rightside*/}
                <div className={styles.aside}>
                    <RightSide />
                </div>
            </div>
        </div>
    )
}