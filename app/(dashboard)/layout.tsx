import {ReactNode} from "react";
import styles from '../ui/dashboard/dashboard.module.css'

export default function Layout({ children }: { children: ReactNode }) {
    return(
        <div className={styles.container}>
            {/*navbar*/}
            <div>

            </div>

            {/*leftside*/}
            <div>

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