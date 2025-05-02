import { MdOutlineThumbUpAlt } from "react-icons/md";
import MenuLink from "../navbar/menuLink/menuLink";
import styles from "./leftside.module.css"

const leftbar = [
    {
        title: "liked",
        path: "/liked",
        icon:<MdOutlineThumbUpAlt />,
    },
];

export default function LeftSide(){
    return(
        // container
        <div className={styles.container}>
            {/*profile*/}
            <div>
                {/*background-profile*/}
                <div></div>

                {/*profile-image*/}
                <div></div>

                {/*name*/}
                <div></div>

            </div>

            {/*menu*/}
            <div className={styles.menu}>
                {leftbar.map((item) =>(
                    <MenuLink item={item} key={item.title}/>
                ))}
            </div>


        </div>
    )
}