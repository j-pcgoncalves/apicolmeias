import { FaBars, FaX } from "react-icons/fa6";
import { GiBee } from "react-icons/gi";
import { 
    useDisclosure
} from "@chakra-ui/react";

import CustomDrawer from "./ui/CustomDrawer";

export default function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <div className="bg-white flex justify-between py-5 px-5 items-center">
            <h1 className="font-dancing font-extrabold text-5xl lg:text-6xl text-primary">Apicolmeias</h1>

            <ul className="gap-16 text-lg items-center hidden lg:flex">
                <li className="nav-links">
                    Home 
                    <span className="nav-link-icon left-5"><GiBee /></span>
                </li>
                <li className="nav-links">
                    Produtos
                    <span className="nav-link-icon left-[30px]"><GiBee /></span>
                </li>
                <li className="nav-links">
                    Contactos
                    <span className="nav-link-icon left-9"><GiBee /></span>
                </li>
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