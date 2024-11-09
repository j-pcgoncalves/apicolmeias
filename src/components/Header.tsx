import { FaBars, FaX } from "react-icons/fa6";
import { GiBee } from "react-icons/gi";
import { 
    useDisclosure
} from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";

import CustomDrawer from "./ui/CustomDrawer";

export default function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const url = useLocation().pathname;

    return (
        <div className="bg-white flex justify-between py-5 px-5 items-center">
            <h1 className="font-dancing font-extrabold text-5xl lg:text-6xl text-primary">Apicolmeias</h1>

            <ul className="gap-16 text-lg items-center hidden lg:flex">
                <NavLink 
                    to="/" 
                    style={{ color: url === "/" ? "#B83806" : "" }} 
                    className="nav-links"
                >
                    Home 
                    <span 
                        style={{ opacity: url === "/" ? "1" : "0" }} 
                        className="nav-link-icon left-5"
                    >
                        <GiBee />
                    </span>
                </NavLink>
                <NavLink 
                    to="/produtos" 
                    style={{ color: url === "/produtos" ? "#B83806" : "" }} 
                    className="nav-links"
                >
                    Produtos
                    <span 
                        style={{ opacity: url === "/produtos" ? "1" : "0" }} 
                        className="nav-link-icon left-[30px]"
                    >
                        <GiBee />
                    </span>
                </NavLink>
                <NavLink 
                    to="/contactos" 
                    style={{ color: url === "/contactos" ? "#B83806" : "" }} 
                    className="nav-links"
                >
                    Contactos
                    <span 
                        style={{ opacity: url === "/contactos" ? "1" : "0" }} 
                        className="nav-link-icon left-9"
                    >
                        <GiBee />
                    </span>
                </NavLink>
            </ul>

            <div onClick={onOpen} className="bg-primary flex flex-col p-2 rounded-[5px] lg:hidden cursor-pointer relative h-9 w-9">
                <span className={`menu-icon ${isOpen ? "show" : "hide"}`}>
                    <FaX />
                </span>
                <span className={`menu-icon ${isOpen ? "hide" : "show"}`}>
                    <FaBars />
                </span>
            </div>

            <CustomDrawer isOpen={isOpen} onClose={onClose} />
        </div>
    );
}