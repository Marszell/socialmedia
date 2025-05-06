import { MdOutlineThumbUpAlt } from "react-icons/md";
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

    },
    {
        title: "Saved",
        path: "/saved",
    },
];

export default function LeftSide(){
    return(
        <div className={styles.container}>
            {/*profile*/}
            <div className={styles.user}>
                {/*background-profile*/}
                <div className={styles.bg_profile}>
                    <Image className={styles.bg_user} src={"/background.jpg"} alt={"background"} width={260} height={65} />
                    {/*<Image src{"/background.jpg"} alt="background"/>*/}
                </div>
                {/*profile-image*/}
                <div className={styles.profile}>
                    <Image className={styles.userImage} src={"/noavatar.png"} alt={"profile"} width={50} height={50} />
                    {/*<Image src={"/noavatar.png"} alt=""/>*/}
                </div>

                {/*text*/}
                <div className={styles.p_text}>
                    <h3>John</h3>
                    <h5>This a Bio</h5>
                </div>
            </div>
            {/*menu*/}
            <div className={styles.menu}>
                {leftbar.map((item) =>(
                    <SidebarLink item={item} key={item.title}/>
                ))}
            </div>
        </div>
    )
}