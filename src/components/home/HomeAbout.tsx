import aboutImg from "../../assets/abelha_about.jpg";

const HomeAbout = () => {
    return (
        <>
            <div className="flex items-center xl:gap-16 px-5 sm:px-[70px] mb-[120px]">
                <div>
                    <img className="hidden xl:block w-[1100px] rounded-[5px]" src={aboutImg} alt="Abelhas em Colmeia" />
                </div>
                <div className="about-text-container">
                    <p className="text-primary text-2xl mb-5">Sobre a Apicolmeias</p>
                    <p className="text-5xl sm:text-7xl font-bold mb-14">Tudo o que precisa num só sítio</p>
                    <div className="flex gap-3">
                        <div className="h-[6px] w-[30px] bg-primary"></div>
                        <div className="h-[6px] w-[40px] bg-primary"></div>
                    </div>
                    <p className="mt-14 leading-8 text-lg">Com 16 anos de experiência no ramo, a Apicolmeias dedica-se ao comércio de colmeias e tudo o que pode precisar em termos de material apícola. Situada em Castelo Branco, na zona do Valongo, a loja Apicolmeias garante uma oferta variada e completa na área da apicultura, num único local.</p>
                </div>
            </div>
        </>
    );
}

export default HomeAbout;