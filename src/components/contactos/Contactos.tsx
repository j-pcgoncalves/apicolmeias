import { FaEnvelopeOpenText, FaHouse, FaPhoneVolume } from "react-icons/fa6";

import BreadcrumbNav from "../ui/BreadcrumbNav";
import ContactosCard from "../ui/ContactosCard";

const Contactos = () => {
    return (
        <>
            <BreadcrumbNav title="Contactos" />

            <div className="cards-container">
                <ContactosCard icon={<FaHouse style={{ fontSize: "40px" }} />} title="Morada" text="Rua da Associação Recreativa e Cultural do Valongo, 6000-256 CASTELO BRANCO" />
                <ContactosCard icon={<FaEnvelopeOpenText style={{ fontSize: "40px" }} />} title="Email" text="****@gmail.com" />
                <ContactosCard icon={<FaPhoneVolume style={{ fontSize: "40px" }} />} title="Contacto" text="+351 934 868 731*" />
            </div>
        </>
    )
}

export default Contactos;