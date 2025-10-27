import Image from "next/image";
import styles from "./page.module.css";
import Heading from "@/components/Heading/Heading";
import {Navbar} from "@/components/Navbar/Navbar";
import {Welcome} from "@/components/Welcome/Welcome";
import Products from "@/components/Products/Products";
import Cases from "@/components/Cases/Cases";

export default function Home() {
    return (
        <div>
            <Navbar/>
            <Welcome/>
            <Products />
            <Cases />
        </div>
    );
}
