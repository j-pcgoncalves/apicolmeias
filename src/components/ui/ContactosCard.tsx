import { ReactNode } from "react";

interface ContactosCardProps {
    icon: ReactNode,
    title: string;
    text: string;
}

const ContactosCard = ({ icon, title, text }: ContactosCardProps) => {
    return (
        <div className="card-main">
            <div className="card-icon">
                {icon}
            </div>
            <span className="card-title">{title}</span>
            <span className="card-text">{text}</span>
        </div>
    )
}

export default ContactosCard;