'use client'
import Link from "next/link"
import s from "./Navbar.module.css"
import Image from "next/image"

export function Navbar() {
    return <header className={s.header}>
        <div className="container">
            <nav className={s.nav}>
                <div className={s.image}>
                    <Image alt="logo" src={"/Navbar/Logo.svg"} width={156} height={40} />
                </div>
                <div className={s.links}>
                    <Link href="#">Home</Link>
                    <Link href="#">Careers</Link>
                    <Link href="#">About</Link>
                    <Link href="#">Security</Link>
                </div>
                <div className={s.auth}>
                    <Link href="#">Sign in</Link>
                    <Link href="#" className={s.login}>Login</Link>
                </div>
            </nav>
        </div>
    </header>
}
