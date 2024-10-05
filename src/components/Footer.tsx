import { FaEnvelope, FaHeadphones, FaLocationPin } from "react-icons/fa6";
import { useState } from "react";

export default function Footer() {
    const [email, setEmail] = useState("****@gmail.com");

    const onEmailChange = () => {
        setEmail("apicolmeias@gmail.com");
    }

    return (
        <>
            <div className="bg-footer-primary py-20 px-6 md:px-16 flex flex-col gap-8 lg:flex-row justify-between items-center text-white">
                <div className="containers-footer">
                    <h2 className="font-dancing font-extrabold text-5xl lg:text-6xl">Apicolmeias</h2>
                    <p className="mt-10">Com 16 anos de experiência no ramo, a Apicolmeias dedica-se ao comércio de colmeias e material apícola. Situada em Castelo Branco, a loja Apicolmeias garante uma oferta variada na área da apicultura.</p>
                </div>
                <div className="containers-footer">
                    <h3 className="font-extrabold text-xl lg:text-2xl">Contactos</h3>
                    <p className="contactos-footer mt-10">
                        <span><FaLocationPin /></span> 
                        Rua da Associação Recreativa e Cultural do Valongo, 6000-256 CASTELO BRANCO
                    </p>
                    <p className="contactos-footer mt-4">
                        <span><FaHeadphones /></span> 
                        <a href="tel:934868731">
                            +351 934 868 731*
                        </a>
                    </p>
                    <p className="contactos-footer mt-4">
                        <span><FaEnvelope /></span>
                        {email === "****@gmail.com"
                            ? (
                            <p>{email} <span className="text-[12px] cursor-pointer ml-2 hover:text-slate-300 transition-all duration-200" onClick={onEmailChange}>Ver E-mail</span></p>
                            ) : (
                                <p>{email}</p>
                            )
                        }
                        
                    </p>
                    <p className="mt-4 text-[10px]">
                        * Chamada para rede Móvel Nacional
                    </p>
                </div>
            </div>
            <div className="bg-footer-secondary py-5 text-white text-center text-[14px] px-6 md:px-16">
                <p>© Copyright 2024 | Apicolmeias - Comércio de Colmeias e Material Apícola | Todos os direitos reservados.</p>
            </div>
        </>
    );
}