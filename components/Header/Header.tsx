import { ROUTER } from "@/router/router.enum";
import Link from "next/link";
import React from "react";
import "./header.css"
import MenuBtn from "../MenuBtn/MenuBtn";

const Header = () => {
    return (
        <header>
            <div className="menu">
                <MenuBtn><Link href={ROUTER.HOME}>Charactres</Link></MenuBtn>
                <MenuBtn><Link href={ROUTER.LOCATIONS}>Locations</Link></MenuBtn>
                <MenuBtn><Link href={ROUTER.EPISODES}>Episodes</Link></MenuBtn>
            </div>
            <div className="logo">
                <p>Rick And Morty Universe</p>
            </div>
        </header>
    );
};

export default Header;