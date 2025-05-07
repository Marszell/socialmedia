import styles from './navbar.module.css';
import {
    MdHouse,
    MdPeopleAlt,
    MdOutlineNotifications,
    MdSearch,
} from "react-icons/md";
import MenuLink from "./menuLink/menuLink";
import Image from "next/image";

const menuItems = [
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
        <header className={styles.container}>
            {/*leftside*/}
            <aside className={styles.leftside}>
                {/*logo*/}
                <div className={styles.logo}>
                    <div>FTree</div>
                </div>

                {/*Searchbar*/}
                <form className={styles.search}>
                    <MdSearch />
                    <input type="text" placeholder="Search..." />
                    {/*<p>Search...</p>*/}
                </form>
            </aside>

            {/*menuItems*/}
            <nav className={styles.menu}>
                {menuItems.map((item) =>(
                    <MenuLink item={item} key={item.title}/>
                    // <li key={cat.title}>
                    //     {cat.list.}
                    // </li>
                ))}
            </nav>

            {/*profile*/}
            <div className={styles.user}>
                <Image className={styles.image} src={"/noavatar.png"} alt={"profile"} width={50} height={50} />
                {/*<img className={styles.image} alt="profile"/>*/}
            </div>
        </header>
    )
}