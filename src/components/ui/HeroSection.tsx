import { NavLink } from "react-router-dom";
import heroBg from "../../assets/hero_bg.jpg";

const HeroSection = () => {
    return (
        <>
            <div style={{ backgroundImage: `url(${heroBg})` }} className="hero-section">
                <div className="ml-5 md:ml-20">
                        <p className="hero-main-text-1">COMÉRCIO</p>
                        <p className="hero-main-text-2">APÍCOLA</p>

                    <NavLink to="/produtos" className="hero-btn">
                        Ver Produtos
                    </NavLink>
                </div>
            </div>
        </>
    );
}

export default HeroSection;