import styles from './navbar.module.css';
import {
    MdHouse,
    MdPeopleAlt,
    MdOutlineNotifications,
} from "react-icons/md";

const menuItem = [
    {
        title:"Main Menu",
        path:"/",
        icon:<MdHouse />,
    },
    {
        title:"Friend",
        path:"/friends",
        icon:<MdPeopleAlt />,
    },
    {
        title:"Notification",
        path:"/notification",
        icon:<MdOutlineNotifications />,
    },
];

export default function Navbar(){
    return(
        <div className={styles.container}>
            {/*leftside*/}
            <div className={styles.leftside}>
                {/*logo*/}
                <div>
                    <div>FTree</div>
                </div>

                {/*Searchbar*/}
                <div>

                </div>
            </div>

            {/*menuItems*/}
            <div>

            </div>

            {/*profile*/}
            <div>

            </div>
        </div>
    )
}