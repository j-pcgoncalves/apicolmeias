import { FaBoxArchive, FaForumbee, FaHive } from "react-icons/fa6";
import HeroSection from "../ui/HeroSection";
import HomeCard from "../ui/HomeCard";

const Home = () => {
    return (
        <>
            <HeroSection />

            <div className="home-cards-container">
                <HomeCard icon={<FaBoxArchive style={{ fontSize: "60px" }} />} title="Colmeias" text="Verifique toda a nossa gama de Colmeias para manter as suas abelhas seguras" />
                <HomeCard icon={<FaHive style={{ fontSize: "60px" }} />} title="Extração" text="Para proceder à extração do seu mel oferecemos toda uma panóplia de utensílios" />
                <HomeCard icon={<FaForumbee style={{ fontSize: "60px" }} />} title="Cosmética" text="Experimente os nossos produtos cosméticos para proteger o seu corpo" />
            </div>
        </>
    );
}

export default Home;