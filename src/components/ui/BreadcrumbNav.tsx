import { NavLink } from "react-router-dom";

import breadcrumbBg from "../../assets/breadcrumb_bg.jpg";

interface BreadcrumbNavProps {
    title: string;
}

const BreadcrumbNav = ({ title }: BreadcrumbNavProps) => {
    return (
        <div style={{ backgroundImage: `url(${breadcrumbBg})` }} className="breadcrumb-container">
            <div className="breadcrumb-content">
                <span className="breadcrumb-title">{title}</span>
                <span className="breadcrumb-nav">
                    <span className="breadcrumb-nav-link">
                        <NavLink to="/">Home</NavLink>
                    </span> / <span>{title}</span>
                </span>
            </div>
        </div>
    )
}

export default BreadcrumbNav;