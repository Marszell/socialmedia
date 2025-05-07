import {
    MdOutlineThumbUpAlt,
    MdPeopleAlt,
    MdBookmark,
} from "react-icons/md";
import styles from "./leftside.module.css"
import SidebarLink from "./sidebarLink/sidebarLink";
import Image from "next/image";

const leftbar = [
    {
        title: "liked",
        path: "/liked",
        icon:<MdOutlineThumbUpAlt />,
    },
    {
        title: "Friend",
        path: "/friend",
        icon: <MdPeopleAlt />,
    },
    {
        title: "Saved",
        path: "/saved",
        icon:<MdBookmark />,
    },
];

export default function LeftSide(){
    return(
        <aside className={styles.container}>
            {/*profile*/}
            <section className={styles.user}>
                {/*background-profile*/}
                <figure className={styles.bg_profile}>
                    <Image className={styles.bg_user} src={"/background.jpg"} alt={"background"} width={260} height={65} />
                    {/*<Image src{"/background.jpg"} alt="background"/>*/}
                </figure>
                {/*profile-image*/}
                <figure className={styles.profile}>
                    <Image className={styles.userImage} src={"/noavatar.png"} alt={"profile"} width={50} height={50} />
                    {/*<Image src={"/noavatar.png"} alt=""/>*/}
                </figure>
                {/*text*/}
                <div className={styles.p_text}>
                    <h3>John</h3>
                    <h5>This a Bio</h5>
                </div>
            </section>
            {/*menu*/}
            <nav className={styles.menu}>
                {leftbar.map((item) =>(
                    <SidebarLink item={item} key={item.title}/>
                ))}
            </nav>
        </aside>
    );
}