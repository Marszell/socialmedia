import {ReactNode} from "react";
import styles from '../ui/dashboard/dashboard.module.css'
import Navbar from "../component/navbar/navbar";
import LeftSide from "../component/leftside/leftside";

export default function Layout({ children }: { children: ReactNode }) {
    return(
        <div className={styles.container}>
            {/*navbar*/}
            <div>
                <Navbar />
            </div>

            {/*leftside*/}
            <div>
                <LeftSide />
            </div>

            {/*main content*/}
            <div>
                {children}
            </div>

            {/*rightside*/}
            <div>

            </div>
        </div>
    )
}