import { FaEnvelopeOpenText, FaHouse, FaPhoneVolume } from "react-icons/fa6";

import BreadcrumbNav from "../ui/BreadcrumbNav";
import ContactosCard from "../ui/ContactosCard";

const Contactos = () => {
    return (
        <>
            <BreadcrumbNav title="Contactos" />

            <div className="cards-container">
                <ContactosCard icon={<FaHouse style={{ fontSize: "40px" }} />} title="Morada" text="Rua da Associação Recreativa e Cultural do Valongo 11, 6000-356 CASTELO BRANCO" />
                <ContactosCard icon={<FaEnvelopeOpenText style={{ fontSize: "40px" }} />} title="Email" text="****@gmail.com" />
                <ContactosCard icon={<FaPhoneVolume style={{ fontSize: "40px" }} />} title="Contacto" text="+351 934 868 731*" />
            </div>

            <div className="map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3065.083673427484!2d-7.506272824019108!3d39.80511487154446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3d5ebe061270cd%3A0x2d0e531dca856ac1!2sR.%20Associa%C3%A7%C3%A3o%20Recreativa%20e%20Cultural%20do%20Bairro%20do%20Valongo%2011%2C%206000-356%20Castelo%20Branco!5e1!3m2!1spt-PT!2spt!4v1740090594651!5m2!1spt-PT!2spt" style={{ borderRadius: "5px", width: "100%", height: "500px" }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    )
}

export default Contactos;