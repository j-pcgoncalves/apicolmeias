import { ReactNode } from "react";

interface HomeCardProps {
    icon: ReactNode,
    title: string;
    text: string;
}

const HomeCard = ({ icon, title, text }: HomeCardProps) => {
    return (
        <div className="home-card-main">
            <div className="home-card-icon">
                {icon}
            </div>
            <span className="home-card-title">{title}</span>
            <span className="home-card-text">{text}</span>
        </div>
    )
}

export default HomeCard;