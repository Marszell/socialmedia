
import Friend from "../sfriend/friend"
import styles from "./rightside.module.css"
import Sponsor from "../sponsor/sponsor";

interface SponsorItem {
    image: string;
    desc: string;
}

interface FriendItem {
    image: string;
    name: string;
}

type MenuSection =
    | {
    title: "Sponsor";
    type: "sponsor";
    list: SponsorItem[];
}
    | {
    title: "Friends";
    type: "friend";
    list: FriendItem[];
};

const menu: MenuSection[] = [
    {
        title: "Sponsor",
        type: "sponsor",
        list: [
            {
                image: "/hackerrank-logo.jpg",
                desc: "Go improve your skill with hacker-rank",
            },
            {
                image: "/profile.png",
                desc: "This web was created by Marcel",
            },
        ]
    },
    {
        title: "Friends",
        type: "friend",
        list: [
            {
                image: "/noavatar.png",
                name: "Marcel",
            },
            {
                image: "/noavatar.png",
                name: "Marsya",
            },
            {
                image: "/noavatar.png",
                name: "Jojo"
            },
        ],
    },
];

export default function RightSide (){
    return (
        <div className={styles.container}>
            {menu.map((section) => (
                <div key={section.title} className={styles.section}>
                    <h3 className={styles.sectionTitle}>{section.title}</h3>
                    <div className={section.type === "sponsor" ? styles.sponsor : styles.friend}>
                        {section.type === "sponsor" &&
                            section.list.map((item, index) => (
                                <Sponsor key={index} item={item} />
                            ))
                        }

                        {section.type === "friend" &&
                            section.list.map((friend,index) => (
                                <Friend key={index} list={friend}/>
                            ))
                        }
                    </div>
                </div>
            ))}
        </div>
    )
}