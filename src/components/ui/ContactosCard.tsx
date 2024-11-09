import { ReactNode, useState } from "react";

interface ContactosCardProps {
    icon: ReactNode,
    title: string;
    text: string;
}

const ContactosCard = ({ icon, title, text }: ContactosCardProps) => {
    const [email, setEmail] = useState(text);

    const onEmailChange = () => {
        setEmail("apicolmeias@gmail.com");
    }

    return (
        <div className="card-main">
            <div className="card-icon">
                {icon}
            </div>
            <span className="card-title">{title}</span>
            {email === "****@gmail.com"
                ? (
                <span>{email} <span className="text-[12px] cursor-pointer ml-2 hover:text-primary transition-all duration-200" onClick={onEmailChange}>Ver E-mail</span></span>
                ) : (
                    <span className="card-text">{email}</span>
                )
            }
        </div>
    )
}

export default ContactosCard;