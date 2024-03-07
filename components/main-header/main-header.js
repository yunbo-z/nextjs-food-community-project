import Link from "next/link";
import Image from "next/image";

import MainHeaderBackground from "./main-header-background";
import logoImg from "@/assets/logo.png"
import styles from "./main-header.module.css"
import NavLink from "./nav-link";

const MainHeader = () => {
    return (
        <>
            <MainHeaderBackground></MainHeaderBackground>
            <header className={styles.header}>
                <Link className={styles.logo} href="/">
                    <Image src={logoImg} alt="A plate with food" priority></Image>
                    NextLevel Food
                </Link>

                <nav className={styles.nav}>
                    <ul>
                        <li>
                            <NavLink href={"/meals"}>Browse Meals</NavLink>
                        </li>
                        <li>
                            <NavLink href={"/community"}>Foodies Community</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default MainHeader