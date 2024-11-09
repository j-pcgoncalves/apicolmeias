import { FaEnvelopeOpenText, FaHouse, FaPhoneVolume } from "react-icons/fa6";

import BreadcrumbNav from "../ui/BreadcrumbNav";
import ContactosCard from "../ui/ContactosCard";

const Contactos = () => {
    return (
        <>
            <BreadcrumbNav title="Contactos" />

            <div className="cards-container">
                <ContactosCard icon={<FaHouse style={{ fontSize: "40px" }} />} title="Morada" text="Rua da Associação Recreativa e Cultural do Valongo 11, 6000-256 CASTELO BRANCO" />
                <ContactosCard icon={<FaEnvelopeOpenText style={{ fontSize: "40px" }} />} title="Email" text="****@gmail.com" />
                <ContactosCard icon={<FaPhoneVolume style={{ fontSize: "40px" }} />} title="Contacto" text="+351 934 868 731*" />
            </div>

            <div className="map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d766.2691866303646!2d-7.503484849904365!3d39.805270255852435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3d5f0185584a33%3A0x38638482a939bc17!2sApicolmeias%20-%20Com%C3%A9rcio%20de%20Colmeias%20e%20Material%20Ap%C3%ADcola%20Paula%20Ribeiro!5e1!3m2!1spt-PT!2spt!4v1731168709281!5m2!1spt-PT!2spt" style={{ borderRadius: "5px", width: "100%", height: "500px" }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    )
}

export default Contactos;