"use client"
import {usePathname} from "next/navigation";
import Link from "next/link";
import styles from "./sidebarLink.module.css"

interface Props {
    path:string;
    title:string;
    icon:React.ReactNode;
}
export default function SidebarLink ({item}:{item:Props}){
    const pathname = usePathname();
    return(
        <Link href={item.path} className={`${styles.container} ${pathname === item.path && styles.active}`} >
            {item.icon}
            {item.title}
        </Link>
    )
}