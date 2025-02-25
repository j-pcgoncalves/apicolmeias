import BreadcrumbNav from "../ui/BreadcrumbNav";
import Header from "../Header";
import Footer from "../Footer";

const NotFound = () => {
    return (
        <>
            <Header />
            <BreadcrumbNav title="Página não encontrada" />

            <p className="text-center text-2xl font-bold mb-28">A página que está a tentar aceder não se encontra disponível! Pedimos desculpa pelo incómodo.</p>

            <Footer />
        </>
    )
}

export default NotFound;