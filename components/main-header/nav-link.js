'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./nav-link.module.css"

const NavLink = ({ href, children }) => {
    const path = usePathname();
    return (
        <Link href={href}
            className={path.startsWith(href) ? `${styles.active}` : undefined}>
            {children}
        </Link>
    )
}
export default NavLink