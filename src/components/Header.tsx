import { FaBars, FaX } from "react-icons/fa6";
import { GiBee } from "react-icons/gi";
import { useState } from "react";

export default function Header() {
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(!openModal);
    }

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
                    <span className="nav-link-icon left-[33px]"><GiBee /></span>
                </li>
                <li className="nav-links">
                    Contactos
                    <span className="nav-link-icon left-10"><GiBee /></span>
                </li>
            </ul>

            <div onClick={handleOpenModal} className="bg-primary flex flex-col p-2 rounded-[5px] lg:hidden cursor-pointer">
                <span className="text-white text-2xl">
                    {openModal ? <FaX /> : <FaBars />}
                </span>
            </div>
        </div>
    );
}